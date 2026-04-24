<template>
  <ServiceLayout
    :title="pageData.title"
    :subtitle="pageData.subtitle"
    :benefits="pageData.benefits"
    :specs="pageData.specs"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px]">
      <MediaCard :item="mediaItems[0]!" @click="openLightbox(0)" class="w-full h-full" />
      <MediaCard :item="mediaItems[1]!" @click="openLightbox(1)" class="w-full h-full md:row-span-2" />
      <MediaCard :item="mediaItems[2]!" @click="openLightbox(2)" class="w-full h-full" />
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
  { type: 'image', src: 'media/images/restauracion.jpg', title: 'Antes del tratamiento' },
  { type: 'video', src: 'media/videos/restauracion/restauracionVideo.mp4', title: 'Tratamiento Acústico Demo' },
  { type: 'image', src: 'media/images/restauracion2.jpg', title: 'Después del tratamiento' }
]

const lightboxOpen = ref(false)
const activeIndex = ref(0)

const openLightbox = (index: number) => {
  activeIndex.value = index
  lightboxOpen.value = true
}

const pageData = {
  title: 'Restauración Acústica',
  subtitle: 'Diagnóstico y tratamiento de espacios existentes mediante la instalación estratégica de materiales fonoabsorbentes para eliminar la reverberación y ecos molestos, mejorando la inteligibilidad de la voz y el confort acústico.',
  benefits: [
    'Mejora inmediata en la calidad del sonido del espacio.',
    'Materiales de alta absorción clasificados NRC 0.85+.',
    'Instalación rápida sin necesidad de obras mayores.',
    'Acondicionamiento estético y minimalista integrado al diseño existente.',
    'Ideal para restaurantes, oficinas, auditorios y salas de reuniones.'
  ],
  specs: [
    { label: 'Tiempo de ejecución', value: '1 a 3 días hábiles (según área)' },
    { label: 'Materiales principales', value: 'Paneles PET de alta densidad, espumas acústicas forradas, lana mineral' },
    { label: 'Opciones de acabado', value: 'Más de 15 colores disponibles en telas ignífugas' },
    { label: 'Rendimiento', value: 'Reducción de hasta un 60% en tiempos de reverberación (RT60)' }
  ]
}

definePageMeta({
  layout: 'default'
})
</script>