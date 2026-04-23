<template>
  <div class="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white">
    <AppNavbar />
    
    <main class="flex-grow pt-20">
      <slot />
    </main>

    <AppFooter />
    <AppWhatsApp />
  </div>
</template>

<script setup lang="ts">
// Layout logic
</script>
