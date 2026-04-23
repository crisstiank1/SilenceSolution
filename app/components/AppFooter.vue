<template>
  <footer class="bg-white dark:bg-[#0a0a0a] relative mt-auto pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
    <div class="absolute top-0 left-0 w-full h-[1px] bg-green-mid opacity-20"></div>
    <div class="container mx-auto px-4 lg:px-8 flex flex-col items-center justify-between gap-8 md:flex-row">
      <!-- Logo -->
      <NuxtLink to="/" class="group transition-transform hover:scale-105 active:scale-95">
        <ClientOnly>
          <img :src="logoSrc" alt="Silence Solution Logo" class="h-8 md:h-10 w-auto" />
        </ClientOnly>
      </NuxtLink>
      
      <!-- Redes / Contacto -->
      <div class="flex items-center gap-6 text-gray-500 dark:text-gray-400">
        <a href="#" target="_blank" rel="noopener noreferrer" class="hover:text-green-mid hover:drop-shadow-[0_0_8px_rgba(18,115,105,0.5)] transition-all hover:scale-110 active:scale-95" aria-label="Instagram">
          <Instagram :size="20" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="hover:text-green-mid hover:drop-shadow-[0_0_8px_rgba(18,115,105,0.5)] transition-all hover:scale-110 active:scale-95" aria-label="TikTok">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
          </svg>
        </a>
        <a href="mailto:scsilencesolution@gmail.com" class="hover:text-green-mid hover:drop-shadow-[0_0_8px_rgba(18,115,105,0.5)] transition-all hover:scale-110 active:scale-95" aria-label="Email">
          <Mail :size="20" />
        </a>
      </div>
      
      <!-- Copyright -->
      <div class="text-sm text-gray-500 dark:text-gray-500 text-center md:text-right font-sans">
        &copy; {{ new Date().getFullYear() }} Silence Solution.<br class="md:hidden" /> Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Instagram, Mail } from 'lucide-vue-next'

const colorMode = useColorMode()
const logoSrc = computed(() =>
  colorMode.value === 'dark' ? 'logos/logo.png' : 'logos/logo2.png'
)
</script>
