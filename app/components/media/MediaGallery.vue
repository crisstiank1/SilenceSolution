<template>
  <div>
    <!-- Media Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MediaCard
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        @click="openLightbox(index)"
        v-motion-slide-up-visible-once
        :delay="index * 100"
      />
    </div>

    <!-- Lightbox -->
    <MediaLightbox
      :isOpen="lightboxOpen"
      :items="items"
      :initialIndex="activeIndex"
      @close="closeLightbox"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MediaCard from './MediaCard.vue'
import MediaLightbox from './MediaLightbox.vue'
import type { MediaItem } from '~/types/media'

defineProps<{
  items: MediaItem[]
}>()

const lightboxOpen = ref(false)
const activeIndex = ref(0)

const openLightbox = (index: number) => {
  activeIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}
</script>