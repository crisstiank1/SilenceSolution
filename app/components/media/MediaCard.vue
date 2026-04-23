<template>
  <div class="group relative w-full h-full min-h-[250px] aspect-[4/3] sm:aspect-auto overflow-hidden rounded-3xl bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-md cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-green-mid/10 hover:-translate-y-1" @click="$emit('click', props.item)">
    
    <!-- Media Content (z-0) -->
    <div class="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <img v-if="props.item.type === 'image'" :src="props.item.src" :alt="props.item.alt || props.item.title || ''" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      <video v-else-if="props.item.type === 'video'" :src="props.item.src" :poster="props.item.poster" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" muted playsinline loop @mouseenter="playPreview" @mouseleave="stopPreview" ref="videoRef"></video>
    </div>

    <!-- Hover Overlay (z-10) -->
    <div class="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/30 dark:group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center pointer-events-none">
       <div class="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 flex flex-col items-center gap-2 text-white">
          <div class="w-14 h-14 bg-green-mid/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg">
            <svg v-if="props.item.type === 'video'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
          <span class="font-sans font-medium text-sm tracking-wide">{{ props.item.type === 'video' ? 'Reproducir' : 'Ampliar' }}</span>
       </div>
    </div>
    
    <!-- Optional Title Bar (z-20) -->
    <div v-if="props.item.title" class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-sans font-medium z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {{ props.item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MediaItem } from '~/types/media'

const props = defineProps<{
  item: MediaItem
}>()

defineEmits<{
  (e: 'click', item: MediaItem): void
}>()

const videoRef = ref<HTMLVideoElement | null>(null)

const playPreview = () => {
  if (props.item.type === 'video' && videoRef.value) {
    videoRef.value.play().catch(() => {
      // Ignore autoplay prevention errors on hover
    })
  }
}

const stopPreview = () => {
  if (props.item.type === 'video' && videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }
}
</script>
