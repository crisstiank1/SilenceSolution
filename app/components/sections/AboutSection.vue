<template>
  <section id="nosotros" class="py-24 md:py-32 bg-white dark:bg-[#111111] transition-colors duration-300">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
        <div class="lg:w-1/2" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <span class="inline-block py-1 px-3 rounded-full bg-green-accent/10 text-green-mid dark:text-green-accent font-sans font-medium text-sm tracking-wider uppercase mb-6">
            Nuestra Misión
          </span>
          <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1]">
            ARMONÍA ENTRE <span class="text-green-mid">ACÚSTICA</span> Y DISEÑO
          </h2>
          <p class="font-sans text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
            Crear espacios donde el confort acústico y el diseño minimalista convergen, mejorando la calidad de vida y productividad de nuestros clientes mediante soluciones de ingeniería sin obra civil.
          </p>
        </div>

        <div class="lg:w-1/2 w-full" v-motion-fade-visible-once :delay="200">
          <MediaCard :item="misionMedia[0]!" @click="lightboxOpen = true" class="w-full h-full aspect-video lg:aspect-square" />
          <MediaLightbox :isOpen="lightboxOpen" :items="misionMedia" @close="lightboxOpen = false" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 border-t border-gray-200 dark:border-gray-800 pt-16">
        <div class="group" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <div class="w-14 h-14 bg-green-accent/10 rounded-2xl flex items-center justify-center text-green-mid mb-6 group-hover:scale-110 group-hover:bg-green-accent/20 transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <h3 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">Eficiencia</h3>
          <p class="font-sans text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            Instalaciones rápidas y materiales de alta densidad que garantizan resultados inmediatos y medibles.
          </p>
        </div>

        <div class="group" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }">
          <div class="w-14 h-14 bg-green-accent/10 rounded-2xl flex items-center justify-center text-green-mid mb-6 group-hover:scale-110 group-hover:bg-green-accent/20 transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </div>
          <h3 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">Estética</h3>
          <p class="font-sans text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            Buscamos el minimalismo. Diseños limpios que se integran perfectamente con la arquitectura de cualquier espacio.
          </p>
        </div>

        <div class="group" v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
          <div class="w-14 h-14 bg-green-accent/10 rounded-2xl flex items-center justify-center text-green-mid mb-6 group-hover:scale-110 group-hover:bg-green-accent/20 transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
              <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
          </div>
          <h3 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">Durabilidad</h3>
          <p class="font-sans text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            Acabados premium diseñados para resistir el paso del tiempo con mínimo mantenimiento y máxima higiene.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MediaCard from '~/components/media/MediaCard.vue'
import MediaLightbox from '~/components/media/MediaLightbox.vue'
import type { MediaItem } from '~/types/media'

const { app: { baseURL } } = useRuntimeConfig()

const misionMedia: MediaItem[] = [
  {
    type: 'video',
    src: 'media/videos/mision/misionVideo.mp4',
    title: 'Soluciones Acústicas Silence Solution'
  }
]

const lightboxOpen = ref(false)
</script>
