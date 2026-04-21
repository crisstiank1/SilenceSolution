<template>
  <div class="min-h-screen bg-white dark:bg-[#0a0a0a]">
    <div class="container mx-auto px-4 lg:px-8 py-12 pt-32">
      <!-- 1. Botón Volver -->
      <button @click="router.back()" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-green-mid dark:hover:text-green-mid transition-colors mb-8 font-medium font-sans">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver
      </button>

      <!-- 2. Hero -->
      <div class="mb-16" v-motion-fade-visible-once>
        <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wide">
          {{ title }}
        </h1>
        <p class="font-sans text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
          {{ subtitle }}
        </p>
      </div>

      <!-- Slot para Tabs y Galería (3. Galería variable por página) -->
      <div class="mb-20">
        <slot />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <!-- 4. Beneficios -->
        <div v-motion-slide-up-visible-once>
          <h2 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">Beneficios principales</h2>
          <ul class="space-y-4">
            <li v-for="(benefit, i) in benefits" :key="i" class="flex items-start gap-4">
              <div class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-accent/20 flex items-center justify-center text-green-mid">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="font-sans text-gray-700 dark:text-gray-300 text-lg">{{ benefit }}</span>
            </li>
          </ul>
        </div>

        <!-- 5. Specs -->
        <div v-motion-slide-up-visible-once :delay="100">
          <h2 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">Especificaciones</h2>
          <div class="bg-gray-50 dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <table class="w-full text-left font-sans text-sm md:text-base">
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr v-for="(spec, idx) in specs" :key="idx" class="even:bg-white dark:even:bg-[#0a0a0a]">
                  <th class="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 w-1/3 md:w-1/4">{{ spec.label }}</th>
                  <td class="px-6 py-4 text-gray-600 dark:text-gray-400">{{ spec.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 6. CTA -->
      <div class="text-center py-16 bg-green-deep/5 dark:bg-green-deep/10 rounded-3xl border border-green-deep/10 dark:border-green-deep/20 mb-24" v-motion-slide-up-visible-once>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider">¿Listo para mejorar tu acústica?</h2>
        <NuxtLink :to="{ path: '/', hash: '#contacto' }" class="inline-flex items-center justify-center px-10 py-4 bg-green-deep hover:bg-green-mid text-white rounded-full font-medium transition-transform hover:scale-105 shadow-md">
          Solicitar cotización
        </NuxtLink>
      </div>

      <!-- 7. Otros servicios -->
      <div class="border-t border-gray-200 dark:border-gray-800 pt-16">
        <h3 class="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center uppercase tracking-wider">Explorar Otros Servicios</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink v-if="route.path !== '/servicios/restauracion'" to="/servicios/restauracion" class="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-green-mid hover:text-green-mid dark:hover:border-green-mid dark:hover:text-green-mid transition-colors font-medium">Restauración</NuxtLink>
          <NuxtLink v-if="route.path !== '/servicios/cabinas'" to="/servicios/cabinas" class="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-green-mid hover:text-green-mid dark:hover:border-green-mid dark:hover:text-green-mid transition-colors font-medium">Cabinas Acústicas</NuxtLink>
          <NuxtLink v-if="route.path !== '/servicios/mamparas'" to="/servicios/mamparas" class="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-green-mid hover:text-green-mid dark:hover:border-green-mid dark:hover:text-green-mid transition-colors font-medium">Mamparas / Laminado</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

interface Spec {
  label: string
  value: string
}

defineProps<{
  title: string
  subtitle: string
  benefits: string[]
  specs: Spec[]
}>()

const router = useRouter()
const route = useRoute()
</script>
