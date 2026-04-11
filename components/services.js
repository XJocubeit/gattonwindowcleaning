/**
 * GWC Services Grid Component
 * Usage: <div id="services-mount" data-location="Laidley" data-postcode="QLD 4341"></div>
 *        <script src="/components/services.js"></script>
 */
(function () {
  const mount = document.getElementById('services-mount');
  if (!mount) return;

  const loc  = mount.dataset.location  || 'Lockyer Valley';
  const post = mount.dataset.postcode  || 'QLD';

  const html = `
<section class="py-20 bg-[#f4f9ff]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-4">
      <p class="text-[#38b6ff] font-semibold tracking-widest text-sm uppercase mb-2">What We Offer</p>
      <h2 class="font-anton text-5xl md:text-6xl text-[#0a0f1a]">SERVICES WE PROVIDE<br>IN ${loc.toUpperCase()}, QLD</h2>
    </div>
    <p class="text-center text-[#374151]/70 text-base leading-relaxed max-w-2xl mx-auto mb-12">From a single exterior clean to a full interior, exterior, screen, and track detail, every service is carried out personally by Xavier using professional-grade equipment and streak-free technique.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

      <a href="/exterior-window-cleaning.html" class="svc-card rounded-2xl" style="height:360px;">
        <img src="/Images/XavierCleaning.jpg" alt="Exterior Window Cleaning ${loc} ${post}" class="w-full h-full object-cover" style="object-position:50% 5%;">
        <div class="label"><div class="flex items-end justify-between"><div>
          <p class="text-[#38b6ff] text-xs font-semibold uppercase tracking-widest mb-1">Residential &amp; Commercial</p>
          <h3 class="font-anton text-white text-2xl leading-tight">EXTERIOR WINDOW<br>CLEANING</h3>
          <p class="text-white/55 text-xs mt-1">From $149 · ${loc} &amp; surrounds</p>
        </div><span class="arrow text-[#38b6ff] text-2xl font-bold">→</span></div></div>
      </a>

      <a href="/interior-window-cleaning.html" class="svc-card rounded-2xl" style="height:360px;">
        <img src="/Images/Sqeegee.jpg" alt="Interior Window Cleaning ${loc} ${post}" class="w-full h-full object-cover" style="object-position:50% 50%;">
        <div class="label"><div class="flex items-end justify-between"><div>
          <p class="text-[#38b6ff] text-xs font-semibold uppercase tracking-widest mb-1">Residential &amp; Commercial</p>
          <h3 class="font-anton text-white text-2xl leading-tight">INTERIOR WINDOW<br>CLEANING</h3>
          <p class="text-white/55 text-xs mt-1">Full interior clean · Streak-free</p>
        </div><span class="arrow text-[#38b6ff] text-2xl font-bold">→</span></div></div>
      </a>

    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

      <a href="/screen-cleaning.html" class="svc-card rounded-2xl" style="height:260px;">
        <img src="/Images/ScreenCleaning2.png" alt="Screen Cleaning ${loc} ${post}" class="w-full h-full object-cover" style="object-position:50% 50%;">
        <div class="label"><div class="flex items-end justify-between"><div>
          <p class="text-[#38b6ff] text-xs font-semibold uppercase tracking-widest mb-1">Add-On Service</p>
          <h3 class="font-anton text-white text-xl">SCREEN CLEANING</h3>
        </div><span class="arrow text-[#38b6ff] text-xl font-bold">→</span></div></div>
      </a>

      <a href="/track-sill-frame-detailing.html" class="svc-card rounded-2xl" style="height:260px;">
        <img src="/Images/Detail.jpg" alt="Track Sill Frame Detailing ${loc}" class="w-full h-full object-cover" style="object-position:25% 5%;">
        <div class="label"><div class="flex items-end justify-between"><div>
          <p class="text-[#38b6ff] text-xs font-semibold uppercase tracking-widest mb-1">Add-On Service</p>
          <h3 class="font-anton text-white text-xl">TRACK &amp; FRAME<br>DETAILING</h3>
        </div><span class="arrow text-[#38b6ff] text-xl font-bold">→</span></div></div>
      </a>

      <a href="/commercial-window-cleaning.html" class="svc-card rounded-2xl" style="height:260px;">
        <img src="/Images/Commerical.webp" alt="Commercial Window Cleaning ${loc} ${post}" class="w-full h-full object-cover">
        <div class="label"><div class="flex items-end justify-between"><div>
          <p class="text-[#38b6ff] text-xs font-semibold uppercase tracking-widest mb-1">Commercial</p>
          <h3 class="font-anton text-white text-xl">COMMERCIAL<br>CLEANING</h3>
        </div><span class="arrow text-[#38b6ff] text-xl font-bold">→</span></div></div>
      </a>

    </div>
  </div>
</section>
`;

  mount.outerHTML = html;
})();
