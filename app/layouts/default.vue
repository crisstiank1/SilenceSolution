<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
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
