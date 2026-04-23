<template>
  <nav 
    class="fixed top-0 left-0 w-full z-40 transition-all duration-300"
    :class="[isScrolled ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800' : 'bg-transparent']"
  >
    <div class="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
      <!-- Logo SVG Real -->
      <NuxtLink to="/" class="relative z-50 flex items-center group transition-transform hover:scale-105 active:scale-95">
        <div class="absolute inset-0 bg-green-mid rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <ClientOnly>
          <img :src="logoSrc" alt="Silence Solution Logo" class="h-8 md:h-10 w-auto" />
        </ClientOnly>
      </NuxtLink>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
        <NuxtLink to="/" class="relative overflow-hidden group hover:text-green-mid transition-colors py-1">
          <span class="relative z-10">Inicio</span>
          <span class="absolute bottom-0 left-0 w-full h-[2px] bg-green-mid origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#nosotros' }" class="relative overflow-hidden group hover:text-green-mid transition-colors py-1">
          <span class="relative z-10">Quiénes somos</span>
          <span class="absolute bottom-0 left-0 w-full h-[2px] bg-green-mid origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </NuxtLink>
        
        <!-- Dropdown Servicios -->
        <div class="relative group h-full flex items-center">
          <button class="relative flex items-center gap-1 hover:text-green-mid transition-colors py-1 overflow-hidden">
            <span class="relative z-10">Servicios</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-green-mid origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          
          <div class="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2">
            <div class="py-2 flex flex-col">
              <NuxtLink to="/servicios/restauracion" class="px-5 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-green-mid transition-colors">Restauración</NuxtLink>
              <NuxtLink to="/servicios/cabinas" class="px-5 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-green-mid transition-colors">Cabinas Acústicas</NuxtLink>
              <NuxtLink to="/servicios/mamparas" class="px-5 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-green-mid transition-colors">Mamparas / Laminado</NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink :to="{ path: '/', hash: '#contacto' }" class="relative overflow-hidden group hover:text-green-mid transition-colors py-1">
          <span class="relative z-10">Contacto</span>
          <span class="absolute bottom-0 left-0 w-full h-[2px] bg-green-mid origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </NuxtLink>
      </div>

      <!-- Right actions -->
      <div class="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <NuxtLink :to="{ path: '/', hash: '#contacto' }" class="relative overflow-hidden group bg-green-deep text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-green-mid/50 hover:shadow-lg hover:scale-105 active:scale-95">
          <span class="absolute inset-0 w-full h-full bg-green-mid scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          <span class="relative z-10">Cotiza ahora</span>
        </NuxtLink>
      </div>

      <!-- Mobile actions -->
      <div class="md:hidden flex items-center gap-3 z-50 relative">
        <ThemeToggle />
        <button @click="toggleMobileMenu" class="p-2 -mr-2 text-gray-800 dark:text-gray-200 focus:outline-none" aria-label="Toggle menu">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-white dark:bg-[#0a0a0a] z-40 md:hidden pt-24 px-6 overflow-y-auto">
        <div class="flex flex-col gap-6 font-sans text-xl font-medium">
          <NuxtLink to="/" @click="closeMobileMenu" class="hover:text-green-mid transition-colors">Inicio</NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#nosotros' }" @click="closeMobileMenu" class="hover:text-green-mid transition-colors">Quiénes somos</NuxtLink>
          
          <!-- Mobile Services -->
          <div class="flex flex-col border-b border-gray-100 dark:border-gray-800 pb-4">
            <button @click="isMobileServicesOpen = !isMobileServicesOpen" class="flex items-center justify-between w-full hover:text-green-mid transition-colors pb-2">
              Servicios
              <svg :class="{ 'rotate-180': isMobileServicesOpen }" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            
            <transition name="slide-down">
              <div v-if="isMobileServicesOpen" class="flex flex-col pl-4 mt-2 gap-4 text-lg text-gray-600 dark:text-gray-400 border-l-2 border-green-mid">
                <NuxtLink to="/servicios/restauracion" @click="closeMobileMenu" class="hover:text-green-mid transition-colors">Restauración</NuxtLink>
                <NuxtLink to="/servicios/cabinas" @click="closeMobileMenu" class="hover:text-green-mid transition-colors">Cabinas Acústicas</NuxtLink>
                <NuxtLink to="/servicios/mamparas" @click="closeMobileMenu" class="hover:text-green-mid transition-colors">Mamparas / Laminado</NuxtLink>
              </div>
            </transition>
          </div>

          <NuxtLink :to="{ path: '/', hash: '#contacto' }" @click="closeMobileMenu" class="hover:text-green-mid transition-colors mt-2">Contacto</NuxtLink>
          
          <NuxtLink :to="{ path: '/', hash: '#contacto' }" @click="closeMobileMenu" class="relative overflow-hidden group bg-green-deep text-white text-center rounded-full mt-6 py-4 font-medium transition-all shadow-md active:scale-95">
            <span class="absolute inset-0 w-full h-full bg-green-mid scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            <span class="relative z-10">Cotiza ahora</span>
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const colorMode = useColorMode()
const logoSrc = computed(() =>
  colorMode.value === 'dark' ? 'logos/logo.png' : 'logos/logo2.png'
)

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileServicesOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    isMobileServicesOpen.value = false
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileServicesOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>
