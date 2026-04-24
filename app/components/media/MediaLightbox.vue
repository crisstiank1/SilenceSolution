<template>
  <Teleport to="body">
    <transition name="lightbox-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-sm"
        @click.self="close"
      >
        <button
          @click="close"
          class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-20 bg-black/50 hover:bg-green-mid/80 p-2 rounded-full backdrop-blur-md"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          v-if="hasMultiple"
          @click="prev"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 bg-black/50 hover:bg-green-mid/80 p-3 rounded-full backdrop-blur-md"
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          v-if="hasMultiple"
          @click="next"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 bg-black/50 hover:bg-green-mid/80 p-3 rounded-full backdrop-blur-md"
          aria-label="Siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div class="relative max-w-[95vw] lg:max-w-[85vw] max-h-[90vh] flex items-center justify-center select-none" v-if="currentItem">
          <transition name="slide-fade" mode="out-in">
            <div :key="currentIndex" class="relative flex justify-center items-center h-full w-full">
              <img
                v-if="currentItem.type === 'image'"
                :src="resolveSrc(currentItem.src)"
                :alt="currentItem.alt || currentItem.title || ''"
                class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-none"
              />

              <video
                v-else-if="currentItem.type === 'video'"
                :src="resolveSrc(currentItem.src)"
                :poster="currentItem.poster ? resolveSrc(currentItem.poster) : undefined"
                controls
                autoplay
                playsinline
                class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-black outline-none"
                @click.stop
              ></video>

              <div
                v-if="currentItem.title"
                class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent text-white text-center rounded-b-lg font-sans text-lg font-medium"
              >
                {{ currentItem.title }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import type { MediaItem } from '~/types/media'

const { app: { baseURL } } = useRuntimeConfig()

const props = defineProps<{
  isOpen: boolean
  items: MediaItem[]
  initialIndex?: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const currentIndex = ref(props.initialIndex || 0)

watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      currentIndex.value = props.initialIndex || 0
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
)

const resolveSrc = (src?: string) => {
  if (!src) return ''
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) return src
  return `${baseURL}${src}`
}

const currentItem = computed(() => props.items[currentIndex.value])
const hasMultiple = computed(() => props.items.length > 1)

const close = () => {
  emit('close')
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.items.length - 1
  }
}

const next = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.isOpen) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft' && hasMultiple.value) prev()
  if (e.key === 'ArrowRight' && hasMultiple.value) next()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>