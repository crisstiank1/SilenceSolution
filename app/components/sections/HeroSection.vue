<template>
  <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a] bg-noise">
    <!-- Acoustic Wave Background -->
    <div class="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none">
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

    <div class="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl" v-motion-fade-visible-once>
      <!-- Animated Badge -->
      <div class="inline-flex items-center gap-3 py-1.5 px-5 rounded-full bg-green-accent/10 border border-green-mid/20 text-green-mid dark:text-green-accent font-sans font-medium text-sm tracking-wider uppercase mb-8 shadow-sm backdrop-blur-sm" v-motion-slide-up>
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-mid opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-mid"></span>
        </span>
        Disponible para proyectos
      </div>
      
      <h1 class="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-[1.05] mb-6" v-motion-slide-up :delay="100">
        SOLUCIONES QUE<br />
        <span class="text-green-mid relative inline-block">
          TRANSFORMAN
          <svg class="absolute w-full h-3 -bottom-1 left-0 text-green-mid/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,15 100,5" stroke="currentColor" stroke-width="4" fill="none"/></svg>
        </span> TU ESPACIO
      </h1>
      
      <p class="font-sans text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed" v-motion-slide-up :delay="200">
        Logra confort acústico y estética premium con instalaciones sin obra.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4" v-motion-slide-up :delay="300">
        <NuxtLink :to="{ hash: '#contacto' }" class="relative overflow-hidden group w-full sm:w-auto px-8 py-4 bg-green-deep text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-mid/40">
          <span class="absolute inset-0 w-full h-full bg-green-mid scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          <span class="relative z-10">Cotiza ahora</span>
        </NuxtLink>
        <NuxtLink :to="{ hash: '#servicios' }" class="group w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-green-deep dark:border-green-accent text-green-deep dark:text-green-accent rounded-full font-medium transition-all hover:bg-green-deep hover:text-white dark:hover:bg-green-accent dark:hover:text-[#0a0a0a] active:scale-95">
          Ver servicios
        </NuxtLink>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-gray-400 dark:text-gray-600 pointer-events-none" v-motion-fade :delay="1000">
      <span class="text-xs uppercase tracking-widest font-sans mb-2 font-medium">Scrollear</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
