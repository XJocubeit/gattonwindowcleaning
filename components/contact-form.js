/**
 * GWC Shared Contact Form Component
 * Include with: <script src="/components/contact-form.js"></script>
 * Place <div id="contact-form-mount"></div> where you want it inserted.
 */
(function () {
  const FORM_HTML = `
<section style="padding:5rem 0;background:#f4f9ff;">
  <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;display:grid;gap:4rem;" class="gwc-contact-grid">

    <!-- Left: info -->
    <div>
      <p style="color:#38b6ff;font-weight:600;letter-spacing:0.15em;font-size:0.75rem;text-transform:uppercase;margin-bottom:0.75rem;font-family:'Poppins',sans-serif;">Get In Touch</p>
      <h2 style="font-family:'Anton',sans-serif;font-size:clamp(2.5rem,5vw,3.75rem);color:#0a0f1a;letter-spacing:-0.02em;line-height:1;margin:0 0 1.25rem;">SEND US<br>A MESSAGE</h2>
      <p style="color:#374151;font-size:0.9rem;line-height:1.75;max-width:28rem;margin:0 0 2.5rem;font-family:'Poppins',sans-serif;">Fill in the form and Xavier will get back to you within a few hours. Or if you'd prefer to talk, just call.</p>

      <div style="display:flex;flex-direction:column;gap:1.25rem;">

        <a href="tel:0493742542" style="display:flex;align-items:center;gap:1rem;text-decoration:none;group;">
          <div style="width:3rem;height:3rem;border-radius:50%;background:#fff;border:1px solid #e8f5ff;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 16px rgba(56,182,255,0.08);">
            <svg style="width:1.25rem;height:1.25rem;color:#38b6ff;" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
          </div>
          <div>
            <p style="font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:rgba(55,65,81,0.5);margin:0 0 2px;font-family:'Poppins',sans-serif;">Phone</p>
            <p style="font-weight:700;color:#0a0f1a;font-size:0.9rem;margin:0;font-family:'Poppins',sans-serif;">0493 742 542</p>
          </div>
        </a>

        <a href="mailto:hello@gattonwindowcleaning.com.au" style="display:flex;align-items:center;gap:1rem;text-decoration:none;">
          <div style="width:3rem;height:3rem;border-radius:50%;background:#fff;border:1px solid #e8f5ff;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 16px rgba(56,182,255,0.08);">
            <svg style="width:1.25rem;height:1.25rem;color:#38b6ff;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <p style="font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:rgba(55,65,81,0.5);margin:0 0 2px;font-family:'Poppins',sans-serif;">Email</p>
            <p style="font-weight:700;color:#0a0f1a;font-size:0.9rem;margin:0;font-family:'Poppins',sans-serif;">hello@gattonwindowcleaning.com.au</p>
          </div>
        </a>

        <div style="display:flex;align-items:center;gap:1rem;">
          <div style="width:3rem;height:3rem;border-radius:50%;background:#fff;border:1px solid #e8f5ff;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 16px rgba(56,182,255,0.08);">
            <svg style="width:1.25rem;height:1.25rem;color:#38b6ff;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <p style="font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:rgba(55,65,81,0.5);margin:0 0 2px;font-family:'Poppins',sans-serif;">Hours</p>
            <p style="font-weight:700;color:#0a0f1a;font-size:0.9rem;margin:0;font-family:'Poppins',sans-serif;">Mon–Sat, 7am–5pm</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Right: form -->
    <div style="background:#fff;border-radius:1.5rem;padding:2.5rem;border:1px solid #e8f5ff;box-shadow:0 8px 48px rgba(56,182,255,0.07);">
      <form id="gwc-contact-form" novalidate style="display:flex;flex-direction:column;gap:1.25rem;">

        <div style="display:grid;gap:1.25rem;" class="gwc-form-row">
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.4rem;font-family:'Poppins',sans-serif;">First Name *</label>
            <input type="text" name="first_name" required placeholder="Xavier"
              style="width:100%;border:1.5px solid #e8f5ff;border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.875rem;font-family:'Poppins',sans-serif;color:#0a0f1a;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
              onfocus="this.style.borderColor='#38b6ff'" onblur="this.style.borderColor='#e8f5ff'">
          </div>
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.4rem;font-family:'Poppins',sans-serif;">Last Name</label>
            <input type="text" name="last_name" placeholder="Smith"
              style="width:100%;border:1.5px solid #e8f5ff;border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.875rem;font-family:'Poppins',sans-serif;color:#0a0f1a;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
              onfocus="this.style.borderColor='#38b6ff'" onblur="this.style.borderColor='#e8f5ff'">
          </div>
        </div>

        <div>
          <label style="display:block;font-size:0.75rem;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.4rem;font-family:'Poppins',sans-serif;">Phone *</label>
          <input type="tel" name="phone" required placeholder="+61 400 000 000"
            style="width:100%;border:1.5px solid #e8f5ff;border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.875rem;font-family:'Poppins',sans-serif;color:#0a0f1a;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
            onfocus="this.style.borderColor='#38b6ff'" onblur="this.style.borderColor='#e8f5ff'">
        </div>

        <div>
          <label style="display:block;font-size:0.75rem;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.4rem;font-family:'Poppins',sans-serif;">Email</label>
          <input type="email" name="email" placeholder="you@example.com"
            style="width:100%;border:1.5px solid #e8f5ff;border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.875rem;font-family:'Poppins',sans-serif;color:#0a0f1a;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
            onfocus="this.style.borderColor='#38b6ff'" onblur="this.style.borderColor='#e8f5ff'">
        </div>

        <div>
          <label style="display:block;font-size:0.75rem;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.4rem;font-family:'Poppins',sans-serif;">Service</label>
          <select name="service"
            style="width:100%;border:1.5px solid #e8f5ff;border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.875rem;font-family:'Poppins',sans-serif;color:#0a0f1a;outline:none;transition:border-color 0.2s;box-sizing:border-box;background:#fff;appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%2338b6ff' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 1rem center;background-size:1rem;"
            onfocus="this.style.borderColor='#38b6ff'" onblur="this.style.borderColor='#e8f5ff'">
            <option value="">Select a service…</option>
            <option>Exterior Window Cleaning</option>
            <option>Interior Window Cleaning</option>
            <option>Screen Cleaning</option>
            <option>Track, Sill &amp; Frame Detailing</option>
            <option>Commercial Window Cleaning</option>
            <option>Full Package (Ext + Int + Screens + Tracks)</option>
            <option>Not sure, just get in touch</option>
          </select>
        </div>

        <div>
          <label style="display:block;font-size:0.75rem;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.4rem;font-family:'Poppins',sans-serif;">Message</label>
          <textarea name="message" rows="4" placeholder="Any details about your property, access, or questions…"
            style="width:100%;border:1.5px solid #e8f5ff;border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.875rem;font-family:'Poppins',sans-serif;color:#0a0f1a;outline:none;transition:border-color 0.2s;box-sizing:border-box;resize:vertical;"
            onfocus="this.style.borderColor='#38b6ff'" onblur="this.style.borderColor='#e8f5ff'"></textarea>
        </div>

        <button type="submit" id="gwc-form-submit"
          style="background:#38b6ff;color:#0a0f1a;font-weight:700;font-size:0.9rem;padding:1rem 2rem;border-radius:9999px;border:none;cursor:pointer;font-family:'Poppins',sans-serif;box-shadow:0 4px 24px rgba(56,182,255,0.35);transition:transform 0.2s,box-shadow 0.2s;"
          onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 32px rgba(56,182,255,0.5)'"
          onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 24px rgba(56,182,255,0.35)'"
          onmousedown="this.style.transform='translateY(0)'">
          Send Message →
        </button>

        <div id="gwc-form-success" style="display:none;background:#ecfdf5;border:1px solid #6ee7b7;border-radius:0.75rem;padding:1rem 1.25rem;font-size:0.875rem;color:#065f46;font-family:'Poppins',sans-serif;font-weight:600;">
          ✓ Message sent! Xavier will be in touch shortly.
        </div>
        <div id="gwc-form-error" style="display:none;background:#fef2f2;border:1px solid #fca5a5;border-radius:0.75rem;padding:1rem 1.25rem;font-size:0.875rem;color:#991b1b;font-family:'Poppins',sans-serif;font-weight:600;">
          Please fill in your name and phone number.
        </div>

      </form>
    </div>

  </div>
</section>

<style>
  @media (min-width: 768px) {
    .gwc-contact-grid { grid-template-columns: 1fr 1.4fr !important; align-items: start; }
    .gwc-form-row { grid-template-columns: 1fr 1fr !important; }
  }
</style>
`;

  const mount = document.getElementById('contact-form-mount');
  if (mount) {
    mount.outerHTML = FORM_HTML;
  }

  // Basic client-side validation + success state
  document.addEventListener('submit', async function (e) {
    if (!e.target || e.target.id !== 'gwc-contact-form') return;
    e.preventDefault();

    const form = e.target;
    const name = form.querySelector('[name="first_name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const success = document.getElementById('gwc-form-success');
    const error = document.getElementById('gwc-form-error');

    error.style.display = 'none';
    success.style.display = 'none';

    if (!name || !phone) {
      error.style.display = 'block';
      return;
    }

    const btn = document.getElementById('gwc-form-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    const payload = {
      source:    'contact-form-component',
      firstName: form.querySelector('[name="first_name"]').value.trim(),
      lastName:  form.querySelector('[name="last_name"]').value.trim(),
      phone:     form.querySelector('[name="phone"]').value.trim(),
      email:     form.querySelector('[name="email"]').value.trim(),
      service:   form.querySelector('[name="service"]').value,
      message:   form.querySelector('[name="message"]').value.trim(),
    };

    try {
      await fetch('https://services.leadconnectorhq.com/hooks/KZviLEojY7TgiPp41oQG/webhook-trigger/QcPbAo05897VJCmko5Nz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (_) {}

    form.reset();
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    btn.style.opacity = '1';
    success.style.display = 'block';
  });
})();
