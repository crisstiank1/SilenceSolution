<template>
  <section class="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a] bg-noise">
    <!-- Acoustic Wave Background (subtle) -->
    <div class="absolute inset-0 flex items-center justify-center opacity-[0.15] dark:opacity-10 pointer-events-none">
      <svg viewBox="0 0 1440 320" class="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 160C240 160 240 80 480 80C720 80 720 240 960 240C1200 240 1200 160 1440 160V320H0V160Z" fill="url(#wave-gradient)" opacity="0.5"/>
        <path d="M0 200C240 200 240 120 480 120C720 120 720 280 960 280C1200 280 1200 200 1440 200V320H0V200Z" fill="url(#wave-gradient)"/>
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
            <stop stop-color="var(--color-green-deep)"/>
            <stop offset="1" stop-color="var(--color-green-mid)"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-5xl mt-12 pb-20 md:pb-24" v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1, transition: { duration: 600 } }">
      
      <!-- Refined Editorial Badge -->
      <div class="inline-flex items-center gap-3 py-2 px-6 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 font-sans font-medium text-xs tracking-[0.2em] uppercase mb-10 shadow-sm backdrop-blur-md" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-mid opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-green-mid"></span>
        </span>
        Especialistas en acústica
      </div>
      
      <!-- High-Impact Title -->
      <h1 class="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-8" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }">
        CONFORT ACÚSTICO<br />
        <span class="text-green-mid">SIN OBRA CIVIL</span>
      </h1>
      
      <!-- Benefit-Driven Subtitle -->
      <p class="font-sans text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed font-light" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
        Mejora la calidad acústica de tu entorno con soluciones eficientes, personalizadas y de rápida implementación.
      </p>
      
      <!-- Clear Hierarchy CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }">
        <NuxtLink :to="{ hash: '#contacto' }" class="relative overflow-hidden group w-full sm:w-auto px-10 py-4 bg-green-deep text-white rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-green-mid/30 border border-green-deep">
          <span class="absolute inset-0 w-full h-full bg-green-mid scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          <span class="relative z-10 flex items-center justify-center gap-2">
            Cotizar proyecto
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </span>
        </NuxtLink>
        <NuxtLink :to="{ hash: '#servicios' }" class="group w-full sm:w-auto px-10 py-4 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium text-lg transition-all hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white active:scale-95">
          Explorar soluciones
        </NuxtLink>
      </div>
    </div>

    <!-- Minimal Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center animate-bounce text-gray-400 dark:text-gray-600 pointer-events-none" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 600, delay: 1000 } }">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
