/**
 * GWC Shared Pricing Plans Component
 * Include with: <script src="/components/plans.js"></script>
 * Place <div id="plans-mount"></div> where you want the section inserted.
 */
(function () {
  const PLANS_HTML = `
<section class="gwc-plans-section" style="padding:5rem 0;background:#0a0f1a;">
  <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">

    <div style="text-align:center;margin-bottom:1rem;">
      <p style="color:#38b6ff;font-weight:600;letter-spacing:0.15em;font-size:0.75rem;text-transform:uppercase;margin-bottom:0.5rem;font-family:'Poppins',sans-serif;">Recurring Booking Discounts</p>
      <h2 style="font-family:'Anton',sans-serif;font-size:clamp(2.5rem,6vw,4rem);color:#fff;letter-spacing:-0.02em;margin:0 0 0.75rem;">SAVE BIG</h2>
      <p style="color:rgba(255,255,255,0.4);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;font-family:'Poppins',sans-serif;">With Our Recurring Cleaning Plans</p>
    </div>

    <div class="gwc-plans-grid" style="display:grid;gap:1.5rem;max-width:56rem;margin:0 auto;">

      <!-- Biannual -->
      <div class="gwc-plan-card" style="background:#0d1525;border:1px solid rgba(255,255,255,0.1);border-radius:1.25rem;padding:2rem 1.75rem;text-align:center;transition:transform 0.25s cubic-bezier(.34,1.56,.64,1);display:flex;flex-direction:column;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
        <p style="color:#38b6ff;font-weight:600;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:0.75rem;font-family:'Poppins',sans-serif;">Biannual</p>
        <div style="font-family:'Anton',sans-serif;font-size:3.75rem;color:#fff;line-height:1;margin-bottom:0.25rem;">$50<span style="font-size:1.75rem;color:rgba(255,255,255,0.35);"> off</span></div>
        <p style="color:rgba(255,255,255,0.35);font-size:0.7rem;margin-bottom:1.25rem;font-family:'Poppins',sans-serif;">per visit · 2 cleans/year</p>
        <ul style="text-align:left;font-size:0.875rem;color:rgba(255,255,255,0.65);list-style:none;padding:0;margin:0 0 1.5rem;display:flex;flex-direction:column;gap:0.6rem;font-family:'Poppins',sans-serif;flex-grow:1;">
          <li style="display:flex;align-items:center;gap:0.6rem;"><span style="color:#38b6ff;font-weight:700;">✓</span> $50 off every visit</li>
        </ul>
        <a href="/quote.html" style="display:block;text-align:center;border:2px solid #38b6ff;color:#38b6ff;font-weight:700;font-size:0.875rem;padding:0.75rem;border-radius:9999px;text-decoration:none;transition:background 0.2s,color 0.2s;font-family:'Poppins',sans-serif;" onmouseover="this.style.background='#38b6ff';this.style.color='#0a0f1a';" onmouseout="this.style.background='transparent';this.style.color='#38b6ff';">GET YOUR QUOTE</a>
      </div>

      <!-- Quarterly, most popular -->
      <div class="gwc-plan-card" style="background:#fff;border:2px solid #ffbf00;border-radius:1.25rem;padding:2rem 1.75rem;text-align:center;position:relative;box-shadow:0 8px 40px rgba(255,191,0,0.2);transition:transform 0.25s cubic-bezier(.34,1.56,.64,1);display:flex;flex-direction:column;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
        <div style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:#ffbf00;color:#0a0f1a;font-weight:700;font-size:0.65rem;padding:4px 14px;border-radius:9999px;white-space:nowrap;letter-spacing:0.08em;text-transform:uppercase;font-family:'Poppins',sans-serif;">MOST POPULAR</div>
        <p style="color:#0a0f1a;font-weight:600;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:0.75rem;font-family:'Poppins',sans-serif;">Quarterly</p>
        <div style="font-family:'Anton',sans-serif;font-size:3.75rem;color:#0a0f1a;line-height:1;margin-bottom:0.25rem;">$100<span style="font-size:1.75rem;color:rgba(10,15,26,0.35);"> off</span></div>
        <p style="color:rgba(10,15,26,0.35);font-size:0.7rem;margin-bottom:1.25rem;font-family:'Poppins',sans-serif;">per visit · 4 cleans/year</p>
        <ul style="text-align:left;font-size:0.875rem;color:rgba(10,15,26,0.65);list-style:none;padding:0;margin:0 0 1.5rem;display:flex;flex-direction:column;gap:0.6rem;font-family:'Poppins',sans-serif;flex-grow:1;">
          <li style="display:flex;align-items:center;gap:0.6rem;"><span style="color:#38b6ff;font-weight:700;">✓</span> $100 off every visit</li>
          <li style="display:flex;align-items:center;gap:0.6rem;"><span style="color:#38b6ff;font-weight:700;">✓</span> Priority scheduling</li>
          <li style="display:flex;align-items:center;gap:0.6rem;"><span style="color:#38b6ff;font-weight:700;">✓</span> FREE Hard Water Removal</li>
          <li style="display:flex;align-items:center;gap:0.6rem;"><span style="color:#38b6ff;font-weight:700;">✓</span> 7 Day Rain Guarantee</li>
        </ul>
        <a href="/quote.html" style="display:block;text-align:center;background:#38b6ff;color:#0a0f1a;font-weight:700;font-size:0.875rem;padding:0.75rem;border-radius:9999px;text-decoration:none;box-shadow:0 4px 24px rgba(56,182,255,0.35);font-family:'Poppins',sans-serif;">GET YOUR QUOTE</a>
      </div>

      <!-- Monthly -->
      <div class="gwc-plan-card" style="background:#0d1525;border:1px solid rgba(255,255,255,0.1);border-radius:1.25rem;padding:2rem 1.75rem;text-align:center;transition:transform 0.25s cubic-bezier(.34,1.56,.64,1);display:flex;flex-direction:column;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
        <p style="color:#38b6ff;font-weight:600;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:0.75rem;font-family:'Poppins',sans-serif;">Monthly</p>
        <div style="font-family:'Anton',sans-serif;font-size:3.75rem;color:#fff;line-height:1;margin-bottom:0.25rem;">$150<span style="font-size:1.75rem;color:rgba(255,255,255,0.35);"> off</span></div>
        <p style="color:rgba(255,255,255,0.35);font-size:0.7rem;margin-bottom:1.25rem;font-family:'Poppins',sans-serif;">per visit · 12 cleans/year</p>
        <ul style="text-align:left;font-size:0.875rem;color:rgba(255,255,255,0.65);list-style:none;padding:0;margin:0 0 1.5rem;display:flex;flex-direction:column;gap:0.6rem;font-family:'Poppins',sans-serif;flex-grow:1;">
          <li style="display:flex;align-items:center;gap:0.6rem;"><span style="color:#38b6ff;font-weight:700;">✓</span> $150 off every visit</li>
          <li style="display:flex;align-items:center;gap:0.6rem;"><span style="color:#38b6ff;font-weight:700;">✓</span> Priority scheduling</li>
          <li style="display:flex;align-items:center;gap:0.6rem;"><span style="color:#38b6ff;font-weight:700;">✓</span> FREE Hard Water Removal</li>
          <li style="display:flex;align-items:center;gap:0.6rem;"><span style="color:#38b6ff;font-weight:700;">✓</span> 7 Day Rain Guarantee</li>
        </ul>
        <a href="/quote.html" style="display:block;text-align:center;border:2px solid #38b6ff;color:#38b6ff;font-weight:700;font-size:0.875rem;padding:0.75rem;border-radius:9999px;text-decoration:none;transition:background 0.2s,color 0.2s;font-family:'Poppins',sans-serif;" onmouseover="this.style.background='#38b6ff';this.style.color='#0a0f1a';" onmouseout="this.style.background='transparent';this.style.color='#38b6ff';">GET YOUR QUOTE</a>
      </div>

    </div>
  </div>
</section>

<style>
  @media (min-width: 768px) {
    .gwc-plans-grid { grid-template-columns: repeat(3, 1fr) !important; }
  }
</style>
`;

  const mount = document.getElementById('plans-mount');
  if (mount) {
    mount.outerHTML = PLANS_HTML;
  }
})();
