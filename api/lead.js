// Vercel Node serverless function — proxies form submissions to the GWC CRM.
// The CRM secret stays here on the server; the browser never sees it.
//
// Required env vars (set in Vercel → Project → Settings → Environment Variables):
//   LEAD_WEBHOOK_SECRET   (required)  the x-gwc-secret value
//   LEAD_WEBHOOK_URL      (optional)  defaults to the production CRM URL below

const DEFAULT_CRM_URL = 'https://crm.gattonwindowcleaning.app/api/webhook/lead';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[api/lead] LEAD_WEBHOOK_SECRET is not configured');
    return res.status(500).json({ ok: false, error: 'Server is missing webhook secret' });
  }

  const url = process.env.LEAD_WEBHOOK_URL || DEFAULT_CRM_URL;
  const payload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? {});

  let crmRes;
  try {
    crmRes = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-gwc-secret': secret,
      },
      body: payload,
    });
  } catch (err) {
    console.error('[api/lead] network error contacting CRM:', err);
    return res.status(502).json({ ok: false, error: 'Could not reach CRM' });
  }

  let data = null;
  try {
    data = await crmRes.json();
  } catch (_) {
    // CRM returned non-JSON; fall through with data === null
  }

  if (!crmRes.ok) {
    console.error('[api/lead] CRM responded with', crmRes.status, data);
    return res.status(502).json({
      ok: false,
      error: (data && data.error) || `CRM responded with ${crmRes.status}`,
    });
  }

  return res.status(200).json(data ?? { ok: true });
}
