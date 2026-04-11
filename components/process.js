/**
 * GWC Shared 4-Step Process Component
 * Include with: <script src="/components/process.js"></script>
 * Place a <div id="process-mount"></div> where you want it inserted.
 */
(function () {
  const html = `
<!-- 4-STEP PROCESS -->
<section class="relative py-28 overflow-hidden" style="background:#0a0f1a;">
  <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(56,182,255,0.07) 0%,transparent 65%);"></div>

  <div class="max-w-7xl mx-auto px-6 relative">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
      <div>
        <p class="text-[#38b6ff] font-bold text-xs tracking-widest uppercase mb-4">How We Work</p>
        <h2 class="font-display text-white leading-[0.88]" style="font-family:'Anton',sans-serif;letter-spacing:-0.02em;font-size:clamp(2.5rem,7vw,5.5rem)">THE GWC<br>4-STEP METHOD</h2>
      </div>
      <p class="text-white/35 text-sm max-w-xs leading-[1.75] md:text-right">Every clean follows this exact sequence. No shortcuts. No skipped steps.</p>
    </div>

    <!-- Steps -->
    <div class="space-y-6">

      <!-- Step 1 -->
      <div class="group relative grid md:grid-cols-[5fr_7fr] gap-0 rounded-3xl overflow-hidden border border-white/8 hover:border-[#38b6ff]/30 transition-colors duration-300" style="background:#0d1525;">
        <div class="relative overflow-hidden" style="min-height:220px;">
          <img src="/Images/Frames.jpg" alt="Window frame cleaning" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style="object-position:50% 65%">
          <div class="absolute inset-0" style="background:linear-gradient(135deg,rgba(10,15,26,0.45) 0%,rgba(10,15,26,0.15) 100%)"></div>
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl bg-[#38b6ff] flex items-center justify-center" style="box-shadow:0 4px 16px rgba(56,182,255,0.5)">
              <span class="font-display text-white text-lg leading-none font-bold" style="font-family:'Anton',sans-serif">1</span>
            </div>
            <span class="text-[#38b6ff] text-xs font-bold tracking-widest uppercase">Step 01</span>
          </div>
        </div>
        <div class="p-8 md:p-12 flex flex-col justify-center">
          <h3 class="font-display text-white text-3xl md:text-4xl mb-4 leading-tight" style="font-family:'Anton',sans-serif;letter-spacing:-0.01em">FRAMES FIRST</h3>
          <p class="text-white/45 text-sm leading-[1.85] max-w-lg">We start at the frames, every edge, corner, and surround wiped down to remove dust, cobwebs, and surface grime. Cleaning frames before glass means nothing drips down onto clean panes later. Most cleaners skip this. We don't.</p>
          <div class="mt-6 flex items-center gap-2 text-[#38b6ff] text-xs font-bold tracking-widest uppercase">
            <span class="w-8 h-px bg-[#38b6ff]"></span>
            Prevents re-contamination of clean glass
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="group relative grid md:grid-cols-[5fr_7fr] gap-0 rounded-3xl overflow-hidden border border-white/8 hover:border-[#38b6ff]/30 transition-colors duration-300" style="background:#0d1525;">
        <div class="relative overflow-hidden" style="min-height:220px;">
          <img src="/Images/Seals and Tracks.jpg" alt="Window tracks and seals cleaning" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
          <div class="absolute inset-0" style="background:linear-gradient(135deg,rgba(10,15,26,0.45) 0%,rgba(10,15,26,0.15) 100%)"></div>
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.18)">
              <span class="font-display text-white text-lg leading-none font-bold" style="font-family:'Anton',sans-serif">2</span>
            </div>
            <span class="text-white/50 text-xs font-bold tracking-widest uppercase">Step 02</span>
          </div>
        </div>
        <div class="p-8 md:p-12 flex flex-col justify-center">
          <h3 class="font-display text-white text-3xl md:text-4xl mb-4 leading-tight" style="font-family:'Anton',sans-serif;letter-spacing:-0.01em">SEALS &amp; TRACKS</h3>
          <p class="text-white/45 text-sm leading-[1.85] max-w-lg">Tracks and rubber seals get brushed, scrubbed, and cleared. Compacted dirt, mould, and debris are removed from every groove, the parts that trap moisture and cause long-term seal damage if left untreated. This step adds time. It's worth it.</p>
          <div class="mt-6 flex items-center gap-2 text-white/30 text-xs font-bold tracking-widest uppercase">
            <span class="w-8 h-px bg-white/20"></span>
            Prevents moisture damage &amp; mould build-up
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="group relative grid md:grid-cols-[5fr_7fr] gap-0 rounded-3xl overflow-hidden border border-white/8 hover:border-[#38b6ff]/30 transition-colors duration-300" style="background:#0d1525;">
        <div class="relative overflow-hidden" style="min-height:220px;">
          <img src="/Images/Glass.jpg" alt="Professional squeegee glass cleaning" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
          <div class="absolute inset-0" style="background:linear-gradient(135deg,rgba(10,15,26,0.45) 0%,rgba(10,15,26,0.15) 100%)"></div>
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.18)">
              <span class="font-display text-white text-lg leading-none font-bold" style="font-family:'Anton',sans-serif">3</span>
            </div>
            <span class="text-white/50 text-xs font-bold tracking-widest uppercase">Step 03</span>
          </div>
        </div>
        <div class="p-8 md:p-12 flex flex-col justify-center">
          <h3 class="font-display text-white text-3xl md:text-4xl mb-4 leading-tight" style="font-family:'Anton',sans-serif;letter-spacing:-0.01em">THE GLASS</h3>
          <p class="text-white/45 text-sm leading-[1.85] max-w-lg">Now the glass gets full attention. Professional-grade solution applied, then worked with a squeegee in a single fluid pass, zero streaks, zero missed edges. Hard water stains from bore water or sprinkler overspray are pre-treated before squeegeeing.</p>
          <div class="mt-6 flex items-center gap-2 text-white/30 text-xs font-bold tracking-widest uppercase">
            <span class="w-8 h-px bg-white/20"></span>
            Crystal-clear, streak-free result
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="group relative grid md:grid-cols-[5fr_7fr] gap-0 rounded-3xl overflow-hidden border border-[#ffbf00]/20 hover:border-[#ffbf00]/40 transition-colors duration-300" style="background:#0d1525;">
        <div class="relative overflow-hidden" style="min-height:220px;">
          <img src="/Images/Detail.jpg" alt="Final window detail and inspection" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style="object-position:50% 20%">
          <div class="absolute inset-0" style="background:linear-gradient(135deg,rgba(10,15,26,0.45) 0%,rgba(10,15,26,0.15) 100%)"></div>
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl bg-[#ffbf00] flex items-center justify-center" style="box-shadow:0 4px 16px rgba(255,191,0,0.4)">
              <span class="font-display text-[#0a0f1a] text-lg leading-none font-bold" style="font-family:'Anton',sans-serif">4</span>
            </div>
            <span class="text-[#ffbf00] text-xs font-bold tracking-widest uppercase">Step 04</span>
          </div>
        </div>
        <div class="p-8 md:p-12 flex flex-col justify-center">
          <h3 class="font-display text-white text-3xl md:text-4xl mb-4 leading-tight" style="font-family:'Anton',sans-serif;letter-spacing:-0.01em">FINAL DETAIL &amp; INSPECT</h3>
          <p class="text-white/45 text-sm leading-[1.85] max-w-lg">Edges wiped with a detail cloth, sills cleaned down, everything inspected from inside and out. Xavier doesn't consider a window done until he'd be happy seeing it on his own home. If there's a smear or a streak, it gets fixed on the spot.</p>
          <div class="mt-6 flex items-center gap-2 text-[#ffbf00]/70 text-xs font-bold tracking-widest uppercase">
            <span class="w-8 h-px bg-[#ffbf00]/50"></span>
            Streak-free guarantee backed by this step
          </div>
        </div>
      </div>

    </div>
  </div>
</section>`;

  const mount = document.getElementById('process-mount');
  if (mount) {
    mount.outerHTML = html;
  } else {
    document.currentScript.insertAdjacentHTML('beforebegin', html);
  }
})();
