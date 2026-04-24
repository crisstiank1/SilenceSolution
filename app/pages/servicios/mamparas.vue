<template>
  <ServiceLayout
    :title="pageData.title"
    :subtitle="pageData.subtitle"
    :benefits="pageData.benefits"
    :specs="pageData.specs"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[350px]">
      <MediaCard :item="mediaItems[0]!" @click="openLightbox(0)" class="w-full h-full md:col-span-2" />

      <div class="bg-gray-100 dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 relative group cursor-pointer hover:border-green-mid transition-colors duration-300 h-full">
        <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-sans text-center p-6">
          [Video: Demostración de mampara abatible o sistema de rieles 360°]
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-green-mid/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <MediaLightbox
      :isOpen="lightboxOpen"
      :items="mediaItems"
      :initialIndex="activeIndex"
      @close="lightboxOpen = false"
    />
  </ServiceLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MediaCard from '~/components/media/MediaCard.vue'
import MediaLightbox from '~/components/media/MediaLightbox.vue'
import type { MediaItem } from '~/types/media'

const mediaItems: MediaItem[] = [
  { type: 'image', src: 'media/images/laminado.jpg', title: 'Laminado Acústico en oficina' }
]

const lightboxOpen = ref(false)
const activeIndex = ref(0)

const openLightbox = (index: number) => {
  activeIndex.value = index
  lightboxOpen.value = true
}

const pageData = {
  title: 'Mamparas / Laminados Acústicos',
  subtitle: 'Divisiones acústicas móviles y fijas. La solución perfecta para seccionar ambientes grandes o espacios de coworking sin construir muros, garantizando privacidad visual y absorción del sonido ambiental.',
  benefits: [
    'Aísla ruidos distractores y conversaciones en plantas de oficina abiertas.',
    'Sistemas sobre rieles invisibles, con rodachinas o fijación sutil a techo.',
    'Superficies altamente funcionales: pueden incluir pizarras acrílicas o laminado tackable para chinchetas.',
    'Módulo adaptable que puede reubicarse y moverse fácilmente si las necesidades de la oficina cambian.',
    'Laminados desarrollados con paneles de núcleos PET reciclados (100% Ecofriendly).'
  ],
  specs: [
    { label: 'Grosor estándar', value: 'Desde 24mm hasta 50mm' },
    { label: 'Altura máxima', value: '3.0 metros por tablero continuo' },
    { label: 'Absorción', value: 'Clase B a Clase A (NRC 0.70 - 0.90)' },
    { label: 'Sistemas de Montaje', value: 'Móviles independientes, deslizantes o colgantes de tensión fija' }
  ]
}

definePageMeta({
  layout: 'default'
})
</script>