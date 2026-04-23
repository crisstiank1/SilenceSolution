<template>
  <section id="servicios" class="py-24 bg-white dark:bg-[#111111] transition-colors duration-300">
    <div class="container mx-auto px-4 lg:px-8">
      
      <div class="text-center mb-16" v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1, transition: { duration: 600 } }">
        <span class="inline-block py-1 px-3 rounded-full bg-green-accent/10 text-green-mid dark:text-green-accent font-sans font-medium text-sm tracking-wider uppercase mb-4">
          Nuestras Soluciones
        </span>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          SERVICIOS <span class="text-green-mid">DESTACADOS</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        <!-- Restauración -->
        <NuxtLink to="/servicios/restauracion" class="group relative block p-8 bg-[#f9f9f9] dark:bg-dark-card border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <!-- Hover Left Border -->
          <span class="absolute left-0 bottom-0 w-1.5 h-0 bg-green-mid group-hover:h-full transition-all duration-500 ease-out"></span>
          
          <div class="w-12 h-12 bg-green-accent/10 rounded-xl flex items-center justify-center text-green-mid mb-6 group-hover:scale-110 transition-transform duration-300">
            <Radio :size="24" />
          </div>
          <h3 class="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-mid transition-colors duration-300">Restauración Acústica</h3>
          <p class="font-sans text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">Tratamiento de espacios existentes para optimizar su respuesta sonora y eliminar ecos no deseados.</p>
          <span class="inline-flex items-center gap-1 text-green-mid font-medium text-sm">
            Conocer más <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
          </span>
        </NuxtLink>

        <!-- Cabina Media Luna -->
        <NuxtLink to="/servicios/cabinas?tab=medialuna" class="group relative block p-8 bg-[#f9f9f9] dark:bg-dark-card border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }">
          <span class="absolute left-0 bottom-0 w-1.5 h-0 bg-green-mid group-hover:h-full transition-all duration-500 ease-out"></span>
          <div class="w-12 h-12 bg-green-accent/10 rounded-xl flex items-center justify-center text-green-mid mb-6 group-hover:scale-110 transition-transform duration-300">
            <Box :size="24" />
          </div>
          <h3 class="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-mid transition-colors duration-300">Cabina Media Luna</h3>
          <p class="font-sans text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">Diseño optimizado para instalarse contra paredes, ahorrando espacio vital sin sacrificar aislamiento.</p>
          <span class="inline-flex items-center gap-1 text-green-mid font-medium text-sm">Conocer más <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></span>
        </NuxtLink>

        <!-- Cabina Circular -->
        <NuxtLink to="/servicios/cabinas?tab=circular" class="group relative block p-8 bg-[#f9f9f9] dark:bg-dark-card border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
          <span class="absolute left-0 bottom-0 w-1.5 h-0 bg-green-mid group-hover:h-full transition-all duration-500 ease-out"></span>
          <div class="w-12 h-12 bg-green-accent/10 rounded-xl flex items-center justify-center text-green-mid mb-6 group-hover:scale-110 transition-transform duration-300">
            <Mic2 :size="24" />
          </div>
          <h3 class="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-mid transition-colors duration-300">Cabina Circular</h3>
          <p class="font-sans text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">Estética moderna y fluida ideal para centros de espacios abiertos, ofreciendo privacidad 360°.</p>
          <span class="inline-flex items-center gap-1 text-green-mid font-medium text-sm">Conocer más <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></span>
        </NuxtLink>

        <!-- Cabina Ovalada -->
        <NuxtLink to="/servicios/cabinas?tab=ovalada" class="group relative block p-8 bg-[#f9f9f9] dark:bg-dark-card border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }">
          <span class="absolute left-0 bottom-0 w-1.5 h-0 bg-green-mid group-hover:h-full transition-all duration-500 ease-out"></span>
          <div class="w-12 h-12 bg-green-accent/10 rounded-xl flex items-center justify-center text-green-mid mb-6 group-hover:scale-110 transition-transform duration-300">
            <Maximize :size="24" />
          </div>
          <h3 class="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-mid transition-colors duration-300">Cabina Ovalada</h3>
          <p class="font-sans text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">Mayor amplitud lateral. Perfecta para pequeñas reuniones de 2 personas o estaciones grandes.</p>
          <span class="inline-flex items-center gap-1 text-green-mid font-medium text-sm">Conocer más <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></span>
        </NuxtLink>

        <!-- Mamparas -->
        <NuxtLink to="/servicios/mamparas" class="group relative block p-8 bg-[#f9f9f9] dark:bg-dark-card border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
          <span class="absolute left-0 bottom-0 w-1.5 h-0 bg-green-mid group-hover:h-full transition-all duration-500 ease-out"></span>
          <div class="w-12 h-12 bg-green-accent/10 rounded-xl flex items-center justify-center text-green-mid mb-6 group-hover:scale-110 transition-transform duration-300">
            <Layers :size="24" />
          </div>
          <h3 class="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-mid transition-colors duration-300">Mamparas / Laminado</h3>
          <p class="font-sans text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">Divisiones acústicas móviles y fijas para asegurar privacidad visual y absorción táctil.</p>
          <span class="inline-flex items-center gap-1 text-green-mid font-medium text-sm">Conocer más <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></span>
        </NuxtLink>

        <!-- Cabina Personalizada (Destacada) -->
        <NuxtLink to="/servicios/cabinas?tab=personalizada" class="group relative block p-8 bg-green-deep border-2 border-green-mid rounded-2xl transform transition-all duration-500 hover:shadow-2xl hover:shadow-green-mid/20 hover:-translate-y-2 overflow-hidden" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
          <!-- Hover Left Border for highlighted -->
          <span class="absolute left-0 bottom-0 w-1.5 h-0 bg-white group-hover:h-full transition-all duration-500 ease-out z-20"></span>
          
          <div class="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-green-mid/40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 z-0"></div>
          
          <div class="relative z-10 flex items-center justify-between mb-6">
            <div class="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-green-accent group-hover:scale-110 transition-transform duration-300">
              <Settings2 :size="24" />
            </div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full uppercase tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              Destacado
            </span>
          </div>

          <h3 class="relative z-10 font-display text-3xl font-bold text-white mb-4 transition-colors duration-300">Cabina Personalizada</h3>
          <p class="relative z-10 font-sans text-lg text-green-accent dark:text-gray-300 mb-8 leading-relaxed text-opacity-90">Diseñamos soluciones acústicas exactamente a medida según las especificaciones técnicas y operativas de tu proyecto.</p>
          <span class="relative z-10 inline-flex items-center gap-1 text-white font-medium text-sm">
            Cotizar proyecto <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
          </span>
        </NuxtLink>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Radio, Mic2, Layers, Box, Maximize, Settings2 } from 'lucide-vue-next'
</script>
