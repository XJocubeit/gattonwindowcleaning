/**
 * GWC Shared Footer Component
 * Include with: <script src="/components/footer.js"></script>
 * Place a <div id="footer-mount"></div> where you want it inserted,
 * or it will append to <body> automatically.
 */
(function () {

  const FOOTER_HTML = `
<footer style="background:#06090f;color:rgba(255,255,255,0.5);padding:4rem 1.5rem;border-top:1px solid rgba(255,255,255,0.05);">
  <div style="max-width:80rem;margin:0 auto;display:grid;gap:2.5rem;grid-template-columns:1fr;margin-bottom:3rem;" class="footer-grid">
    <div style="grid-column:span 2;">
      <img src="/Brand%20Assets/19.png" alt="Gatton Window Cleaning" style="height:3rem;width:auto;margin-bottom:1rem;" width="1000" height="1000" loading="lazy">
      <p style="font-size:0.875rem;line-height:1.75;max-width:24rem;">Professional window cleaning across the Lockyer Valley. Residential, commercial, screens, tracks &amp; frames, done properly.</p>
      <div style="display:flex;gap:1rem;margin-top:1.25rem;flex-wrap:wrap;">
        <a href="tel:0493742542" style="font-size:0.875rem;color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">0493 742 542</a>
        <a href="mailto:hello@gattonwindowcleaning.com" style="font-size:0.875rem;color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">hello@gattonwindowcleaning.com</a>
      </div>
    </div>
    <div>
      <h4 style="color:#fff;font-weight:700;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1.25rem;">Services</h4>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.75rem;font-size:0.875rem;">
        <li><a href="/exterior-window-cleaning" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Exterior Window Cleaning</a></li>
        <li><a href="/interior-window-cleaning" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Interior Window Cleaning</a></li>
        <li><a href="/screen-cleaning" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Screen Cleaning</a></li>
        <li><a href="/track-sill-frame-detailing" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Track, Sill &amp; Frame Detailing</a></li>
        <li><a href="/commercial-window-cleaning" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Commercial Window Cleaning</a></li>
      </ul>
    </div>
    <div>
      <h4 style="color:#fff;font-weight:700;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1.25rem;">Quick Links</h4>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.75rem;font-size:0.875rem;">
        <li><a href="/quote" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Get Your Free Quote</a></li>
        <li><a href="/services" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">All Services</a></li>
        <li><a href="/blog" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Blog</a></li>
        <li><a href="/contact" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div style="max-width:80rem;margin:0 auto;padding-bottom:2rem;border-bottom:1px solid rgba(255,255,255,0.05);">
    <h4 style="color:#fff;font-weight:700;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1rem;">Locations</h4>
    <p style="font-size:0.875rem;line-height:1.75;display:flex;flex-wrap:wrap;gap:0.5rem;">
      <a href="/locations/gatton" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Gatton</a><span style="color:rgba(255,255,255,0.2);">·</span>
      <a href="/locations/laidley" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Laidley</a><span style="color:rgba(255,255,255,0.2);">·</span>
      <a href="/locations/plainlands" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Plainlands</a><span style="color:rgba(255,255,255,0.2);">·</span>
      <a href="/locations/forest-hill" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Forest Hill</a><span style="color:rgba(255,255,255,0.2);">·</span>
      <a href="/locations/hatton-vale" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Hatton Vale</a><span style="color:rgba(255,255,255,0.2);">·</span>
      <a href="/locations/grantham" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Grantham</a><span style="color:rgba(255,255,255,0.2);">·</span>
      <a href="/locations/adare" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Adare</a><span style="color:rgba(255,255,255,0.2);">·</span>
      <a href="/locations/regency-downs" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Regency Downs</a><span style="color:rgba(255,255,255,0.2);">·</span>
      <a href="/locations/woodlands" style="color:rgba(255,255,255,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Woodlands</a>
    </p>
  </div>
  <!-- Guarantee strip -->
  <div style="max-width:80rem;margin:0 auto;padding:1.75rem 0;border-top:1px solid rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.05);display:flex;flex-wrap:wrap;gap:1.5rem;align-items:center;justify-content:center;">
    <div style="display:flex;align-items:center;gap:0.625rem;">
      <svg style="width:1rem;height:1rem;color:#38b6ff;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
      <span style="font-size:0.8rem;font-weight:600;color:rgba(255,255,255,0.6);font-family:'Poppins',sans-serif;">Streak-Free Guarantee</span>
    </div>
    <div style="display:flex;align-items:center;gap:0.625rem;">
      <svg style="width:1rem;height:1rem;color:#38b6ff;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
      <span style="font-size:0.8rem;font-weight:600;color:rgba(255,255,255,0.6);font-family:'Poppins',sans-serif;">If It's Not Right, We Re-Clean It</span>
    </div>
    <div style="display:flex;align-items:center;gap:0.625rem;">
      <svg style="width:1rem;height:1rem;color:#38b6ff;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
      <span style="font-size:0.8rem;font-weight:600;color:rgba(255,255,255,0.6);font-family:'Poppins',sans-serif;">Fully Insured</span>
    </div>
    <div style="display:flex;align-items:center;gap:0.625rem;">
      <svg style="width:1rem;height:1rem;color:#38b6ff;flex-shrink:0;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
      <span style="font-size:0.8rem;font-weight:600;color:rgba(255,255,255,0.6);font-family:'Poppins',sans-serif;">Locally Owned &amp; Operated</span>
    </div>
  </div>
  <div style="max-width:80rem;margin:0 auto;padding-top:2rem;display:flex;flex-direction:column;gap:0.75rem;align-items:flex-start;justify-content:space-between;">
    <p style="font-size:0.75rem;color:rgba(255,255,255,0.25);">&copy; 2026 Gatton Window Cleaning. All rights reserved. Servicing the Lockyer Valley, Queensland.</p>
    <div style="display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap;">
      <a href="/terms" style="color:rgba(255,255,255,0.3);font-size:0.75rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='rgba(255,255,255,0.6)'" onmouseout="this.style.color='rgba(255,255,255,0.3)'">Terms of Service</a>
      <a href="/privacy" style="color:rgba(255,255,255,0.3);font-size:0.75rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='rgba(255,255,255,0.6)'" onmouseout="this.style.color='rgba(255,255,255,0.3)'">Privacy Policy</a>
      <a href="/quote" style="color:#38b6ff;font-size:0.75rem;font-weight:700;text-decoration:none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Get Your Free Quote &rarr;</a>
    </div>
  </div>
  <style>
    @media (min-width: 768px) {
      .footer-grid { grid-template-columns: 1fr 1fr 1fr 1fr !important; }
      .footer-grid > div:first-child { grid-column: span 2; }
      footer > div:last-child { flex-direction: row !important; align-items: center !important; }
    }
  </style>
</footer>`;

  function mount() {
    const mountEl = document.getElementById('footer-mount');
    if (mountEl) {
      mountEl.outerHTML = FOOTER_HTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

})();
