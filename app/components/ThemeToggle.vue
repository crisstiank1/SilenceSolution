<template>
  <ClientOnly>
    <button 
      @click="toggleTheme" 
      class="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Alternar modo oscuro"
    >
      <div class="absolute inset-0 bg-green-mid rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-500 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
    <template #fallback>
      <div class="w-9 h-9"></div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
