/**
 * GWC Shared Navigation Component
 * Include with: <script src="/components/nav.js"></script>
 * Place a <nav id="navbar-mount"></nav> where you want it inserted,
 * or it will prepend to <body> automatically.
 */
(function () {

  // Reusable icon wrapper
  const icon = (svg) => `<span style="width:28px;height:28px;background:#f0f9ff;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${svg}</span>`;

  // SVG icons
  const IC = {
    window:     `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
    house:      `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
    flyscreen:  `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 7h18M3 11h18M3 15h18M3 19h18M7 3v18M11 3v18M15 3v18M19 3v18"/></svg>`,
    shine:      `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="4"/></svg>`,
    screen:     `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`,
    wrench:     `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
    building:   `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><path d="M3 21h18M3 21V7l9-4 9 4v14M9 21v-6h6v6"/><path d="M9 9h1M14 9h1M9 13h1M14 13h1"/></svg>`,
    pin:        `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
    person:     `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
    article:    `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>`,
    envelope:   `<svg style="width:14px;height:14px;color:#38b6ff;" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>`,
    chevron:    `<svg style="width:0.75rem;height:0.75rem;opacity:0.5;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>`,
  };

  const NAV_HTML = `
<nav id="navbar" style="position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(10,15,26,0.97);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(56,182,255,0.08);">
  <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
    <div style="display:flex;align-items:center;justify-content:space-between;height:5rem;">

      <!-- Logo -->
      <a href="/" style="flex-shrink:0;text-decoration:none;">
        <img src="/Brand%20Assets/GWC%20(4).png" alt="Gatton Window Cleaning" style="height:7rem;width:auto;" width="1000" height="1000" fetchpriority="high">
      </a>

      <!-- Desktop links -->
      <div class="gwc-nav-desktop" style="display:none;align-items:center;gap:2rem;">
        <a href="/" class="gwc-nav-link" style="color:rgba(255,255,255,0.7);font-weight:600;font-size:0.875rem;text-decoration:none;">Home</a>

        <!-- Services dropdown -->
        <div class="gwc-dropdown" style="position:relative;">
          <a href="/services" class="gwc-nav-link" style="color:rgba(255,255,255,0.7);font-weight:600;font-size:0.875rem;text-decoration:none;display:flex;align-items:center;gap:4px;">
            Services ${IC.chevron}
          </a>
          <div class="gwc-dropdown-menu" style="position:absolute;top:calc(100% + 8px);left:0;width:270px;background:#fff;border-radius:1rem;box-shadow:0 20px 60px rgba(0,0,0,0.15);padding:8px 0;opacity:0;visibility:hidden;transform:translateY(8px);transition:all 0.2s cubic-bezier(0.34,1.56,0.64,1);z-index:100;">
            <a href="/residential" class="gwc-dropdown-item">${icon(IC.house)} Residential Window Cleaning</a>
            <a href="/exterior-window-cleaning" class="gwc-dropdown-item">${icon(IC.window)} Exterior Window Cleaning</a>
            <a href="/interior-window-cleaning" class="gwc-dropdown-item">${icon(IC.shine)} Interior Window Cleaning</a>
            <a href="/screen-cleaning" class="gwc-dropdown-item">${icon(IC.screen)} Screen Cleaning</a>
            <a href="/track-sill-frame-detailing" class="gwc-dropdown-item">${icon(IC.wrench)} Track, Sill &amp; Frame Detailing</a>
            <a href="/commercial-window-cleaning" class="gwc-dropdown-item">${icon(IC.building)} Commercial Window Cleaning</a>
          </div>
        </div>

        <!-- Locations dropdown -->
        <div class="gwc-dropdown" style="position:relative;">
          <a href="/locations/gatton" class="gwc-nav-link" style="color:rgba(255,255,255,0.7);font-weight:600;font-size:0.875rem;text-decoration:none;display:flex;align-items:center;gap:4px;">
            Locations ${IC.chevron}
          </a>
          <div class="gwc-dropdown-menu" style="position:absolute;top:calc(100% + 8px);left:0;width:220px;background:#fff;border-radius:1rem;box-shadow:0 20px 60px rgba(0,0,0,0.15);padding:8px 0;opacity:0;visibility:hidden;transform:translateY(8px);transition:all 0.2s cubic-bezier(0.34,1.56,0.64,1);z-index:100;">
            <a href="/locations/gatton" class="gwc-dropdown-item">${icon(IC.pin)} Gatton</a>
            <a href="/locations/laidley" class="gwc-dropdown-item">${icon(IC.pin)} Laidley</a>
            <a href="/locations/plainlands" class="gwc-dropdown-item">${icon(IC.pin)} Plainlands</a>
            <a href="/locations/forest-hill" class="gwc-dropdown-item">${icon(IC.pin)} Forest Hill</a>
            <a href="/locations/hatton-vale" class="gwc-dropdown-item">${icon(IC.pin)} Hatton Vale</a>
            <a href="/locations/grantham" class="gwc-dropdown-item">${icon(IC.pin)} Grantham</a>
            <a href="/locations/adare" class="gwc-dropdown-item">${icon(IC.pin)} Adare</a>
            <a href="/locations/regency-downs" class="gwc-dropdown-item">${icon(IC.pin)} Regency Downs</a>
            <a href="/locations/woodlands" class="gwc-dropdown-item">${icon(IC.pin)} Woodlands</a>
            <a href="/locations/helidon" class="gwc-dropdown-item">${icon(IC.pin)} Helidon</a>
          </div>
        </div>

        <a href="/about" class="gwc-nav-link" style="color:rgba(255,255,255,0.7);font-weight:600;font-size:0.875rem;text-decoration:none;">About</a>
        <a href="/blog" class="gwc-nav-link" style="color:rgba(255,255,255,0.7);font-weight:600;font-size:0.875rem;text-decoration:none;">Blog</a>
        <a href="/contact" class="gwc-nav-link" style="color:rgba(255,255,255,0.7);font-weight:600;font-size:0.875rem;text-decoration:none;">Contact</a>
      </div>

      <!-- Desktop CTA -->
      <div class="gwc-nav-desktop" style="display:none;align-items:center;gap:1rem;">
        <a href="tel:0493742542" style="display:flex;align-items:center;gap:0.5rem;color:rgba(255,255,255,0.6);font-weight:600;font-size:0.875rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#38b6ff'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">
          <svg style="width:1rem;height:1rem;" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
          0493 742 542
        </a>
        <a href="/quote" style="background:#38b6ff;color:#fff;font-weight:700;font-size:0.875rem;padding:0.625rem 1.5rem;border-radius:0.75rem;text-decoration:none;box-shadow:0 4px 16px rgba(56,182,255,0.2);transition:background 0.2s;" onmouseover="this.style.background='#1fa8f5'" onmouseout="this.style.background='#38b6ff'">Get Your Free Quote</a>
      </div>

      <!-- Mobile hamburger -->
      <button id="gwc-menu-btn" style="display:flex;color:#fff;padding:0.5rem;border-radius:0.75rem;background:none;border:none;cursor:pointer;" aria-label="Toggle menu">
        <svg id="gwc-icon-open" style="width:1.5rem;height:1.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg id="gwc-icon-close" style="width:1.5rem;height:1.5rem;display:none;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

    </div>
  </div>

  <!-- Mobile menu -->
  <div id="gwc-mobile-menu" style="max-height:0;overflow:hidden;transition:max-height 0.35s ease;background:#0a0f1a;border-top:1px solid rgba(255,255,255,0.1);overflow-y:auto;-webkit-overflow-scrolling:touch;">
    <div style="max-width:80rem;margin:0 auto;padding:1.25rem 1.5rem;display:flex;flex-direction:column;gap:0.25rem;">
      <a href="/" class="gwc-mobile-link">Home</a>
      <a href="/services" class="gwc-mobile-link">Services</a>
      <a href="/residential" class="gwc-mobile-sublnk">→ Residential Window Cleaning</a>
      <a href="/exterior-window-cleaning" class="gwc-mobile-sublnk">→ Exterior Window Cleaning</a>
      <a href="/interior-window-cleaning" class="gwc-mobile-sublnk">→ Interior Window Cleaning</a>
      <a href="/screen-cleaning" class="gwc-mobile-sublnk">→ Screen Cleaning</a>
      <a href="/track-sill-frame-detailing" class="gwc-mobile-sublnk">→ Track, Sill &amp; Frame Detailing</a>
      <a href="/commercial-window-cleaning" class="gwc-mobile-sublnk">→ Commercial Window Cleaning</a>
      <a href="/locations/gatton" class="gwc-mobile-link" style="margin-top:0.5rem;">Locations</a>
      <a href="/locations/gatton" class="gwc-mobile-sublnk">→ Gatton</a>
      <a href="/locations/laidley" class="gwc-mobile-sublnk">→ Laidley</a>
      <a href="/locations/plainlands" class="gwc-mobile-sublnk">→ Plainlands</a>
      <a href="/locations/forest-hill" class="gwc-mobile-sublnk">→ Forest Hill</a>
      <a href="/locations/hatton-vale" class="gwc-mobile-sublnk">→ Hatton Vale</a>
      <a href="/locations/grantham" class="gwc-mobile-sublnk">→ Grantham</a>
      <a href="/locations/adare" class="gwc-mobile-sublnk">→ Adare</a>
      <a href="/locations/regency-downs" class="gwc-mobile-sublnk">→ Regency Downs</a>
      <a href="/locations/woodlands" class="gwc-mobile-sublnk">→ Woodlands</a>
      <a href="/locations/helidon" class="gwc-mobile-sublnk">→ Helidon</a>
      <a href="/quote" class="gwc-mobile-link" style="margin-top:0.5rem;">Get Your Quote</a>
      <a href="/about" class="gwc-mobile-link">About</a>
      <a href="/blog" class="gwc-mobile-link">Blog</a>
      <a href="/contact" class="gwc-mobile-link">Contact</a>
      <div style="padding-top:1rem;padding-bottom:0.5rem;display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
        <a href="tel:0493742542" style="border:1px solid rgba(56,182,255,0.4);color:#38b6ff;font-weight:700;text-align:center;padding:0.75rem;border-radius:0.75rem;font-size:0.875rem;text-decoration:none;">Call Now</a>
        <a href="/quote" style="background:#38b6ff;color:#fff;font-weight:700;text-align:center;padding:0.75rem;border-radius:0.75rem;font-size:0.875rem;text-decoration:none;">Get Your Free Quote</a>
      </div>
    </div>
  </div>
</nav>

<style>
  .gwc-nav-link { transition: color 0.2s; }
  .gwc-nav-link:hover, .gwc-nav-link.gwc-active { color: #38b6ff !important; }
  .gwc-dropdown:hover .gwc-dropdown-menu { opacity: 1 !important; visibility: visible !important; transform: translateY(0) !important; }
  .gwc-dropdown-item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 18px; font-size: 0.875rem; color: #0a0f1a;
    font-weight: 500; text-decoration: none;
    transition: background 0.15s, color 0.15s;
    font-family: 'Poppins', sans-serif;
  }
  .gwc-dropdown-item:hover { background: #f0f9ff; color: #38b6ff; }
  .gwc-dropdown-item:hover span { background: #dbeeff; }
  .gwc-mobile-link {
    color: rgba(255,255,255,0.7); font-weight: 600; font-size: 0.875rem;
    text-decoration: none; padding: 0.625rem 0; display: block; transition: color 0.2s;
    font-family: 'Poppins', sans-serif;
  }
  .gwc-mobile-link:hover { color: #38b6ff; }
  .gwc-mobile-sublnk {
    color: rgba(255,255,255,0.45); font-size: 0.875rem; text-decoration: none;
    padding: 0.4rem 0 0.4rem 1rem; display: block; transition: color 0.2s;
    font-family: 'Poppins', sans-serif;
  }
  .gwc-mobile-sublnk:hover { color: #38b6ff; }
  body { line-height: 1.75; }
  p { line-height: 1.75; }
  @media (min-width: 1024px) {
    .gwc-nav-desktop { display: flex !important; }
    #gwc-menu-btn { display: none !important; }
  }
</style>
`;

  // Find mount point or prepend to body
  const mount = document.getElementById('navbar-mount');
  if (mount) {
    mount.outerHTML = NAV_HTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  }

  // Highlight active nav link based on current path
  const path = window.location.pathname;
  document.querySelectorAll('.gwc-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && path.endsWith(href.replace(/^\//, ''))) {
      link.classList.add('gwc-active');
    }
  });

  // Mobile toggle
  const btn = document.getElementById('gwc-menu-btn');
  const menu = document.getElementById('gwc-mobile-menu');
  const iconOpen = document.getElementById('gwc-icon-open');
  const iconClose = document.getElementById('gwc-icon-close');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.style.maxHeight && menu.style.maxHeight !== '0px';
      if (isOpen) {
        menu.style.maxHeight = '0px';
        menu.style.overflowY = 'hidden';
      } else {
        const vh80 = Math.floor(window.innerHeight * 0.8) + 'px';
        menu.style.maxHeight = vh80;
        menu.style.overflowY = 'auto';
      }
      iconOpen.style.display = isOpen ? '' : 'none';
      iconClose.style.display = isOpen ? 'none' : '';
    });
  }
})();
