<template>
  <ServiceLayout 
    :title="currentTabData.title"
    :subtitle="currentTabData.subtitle"
    :benefits="currentTabData.benefits"
    :specs="currentTabData.specs"
  >
    <!-- Tabs Navigation -->
    <div class="flex flex-wrap gap-2 md:gap-4 mb-10 border-b border-gray-200 dark:border-gray-800 pb-4">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index"
        @click="activeTab = tab.id"
        class="px-5 py-2.5 md:px-8 md:py-3 rounded-full font-medium text-sm transition-all duration-300 transform active:scale-95"
        :class="activeTab === tab.id ? 'bg-green-deep dark:bg-green-accent text-white dark:text-[#0a0a0a] shadow-md' : 'bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Galería (Dynamic based on Tab) -->
    <transition name="fade" mode="out-in">
      <div :key="activeTab" class="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px]">
        <div class="bg-gray-100 dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 relative group">
          <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-sans p-6 text-center">
            [Imagen: Exterior de {{ currentTabData.label }}]
          </div>
        </div>
        <div class="bg-gray-100 dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 relative group md:row-span-2 auto-rows-[616px]">
          <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-sans text-center p-6">
            [Video nativo: Demo interior {{ currentTabData.label }}]
          </div>
        </div>
        <div class="bg-gray-100 dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 relative group">
          <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-sans p-6 text-center">
            [Imagen: Detalle de acabados o panel acústico]
          </div>
        </div>
      </div>
    </transition>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeTab = ref('medialuna')

const tabs = [
  { id: 'medialuna', label: 'Media Luna' },
  { id: 'circular', label: 'Circular' },
  { id: 'ovalada', label: 'Ovalada' },
  { id: 'personalizada', label: 'Personalizada ⭐' }
]

const dataMap: Record<string, any> = {
  medialuna: {
    title: 'Cabina Media Luna',
    label: 'Media Luna',
    subtitle: 'Nuestra cabina insignia diseñada para instalarse contra paredes, maximizando el aislamiento acústico y ahorrando espacio vital en su oficina o estudio.',
    benefits: [
      'Ahorro de espacio al adaptarse perfectamente a paredes rectas.',
      'Aislamiento de hasta 40dB (ideal para conversaciones confidenciales y llamadas).',
      'Sistema de ventilación silencioso integrado.',
      'Iluminación LED dimerizable con temperatura de color cálida.',
      'Puerta de cristal templado doble con sellado hermético.'
    ],
    specs: [
      { label: 'Capacidad', value: '1 a 2 Personas' },
      { label: 'Dimensiones', value: '1.2m x 1.0m x 2.2m' },
      { label: 'Aislamiento', value: 'Clase A (hasta 40dB)' },
      { label: 'Conectividad', value: '2 enchufes 110V/220V, 2 USB-C + USB-A' }
    ]
  },
  circular: {
    title: 'Cabina Circular',
    label: 'Circular',
    subtitle: 'Un diseño moderno y de líneas fluidas, ideal para ubicar en el centro de espacios abiertos, ofreciendo privacidad 360° y estética premium.',
    benefits: [
      'Diseño 360° espectacular visualmente desde cualquier ángulo.',
      'Paneles curvos de alta densidad que distribuyen el sonido uniformemente.',
      'No interrumpe el flujo visual de espacios colaborativos.',
      'Excelente comportamiento térmico interno.',
      'Instalación express (menos de 4 horas).'
    ],
    specs: [
      { label: 'Capacidad', value: '1 Persona (Uso individual)' },
      { label: 'Diámetro', value: '1.1m' },
      { label: 'Altura Interior', value: '2.05m' },
      { label: 'Acústica', value: 'Absorción NRC 0.90 en interior' }
    ]
  },
  ovalada: {
    title: 'Cabina Ovalada',
    label: 'Ovalada',
    subtitle: 'La combinación perfecta entre amplitud y diseño. Ofrece mayor espacio lateral, haciendo posible pequeñas reuniones e integrando cómodas estaciones de trabajo.',
    benefits: [
      'Espacio optimizado para 2 o 4 personas.',
      'Ideal para reuniones 1 a 1 sin ocupar una sala de juntas.',
      'Cristales panorámicos que evitan la sensación de encierro.',
      'Mesa de reuniones central integrada con conectividad.',
      'Sensores de presencia para activación de aire y luz.'
    ],
    specs: [
      { label: 'Capacidad', value: '2 a 4 Personas' },
      { label: 'Dimensiones', value: '2.1m x 1.4m x 2.2m' },
      { label: 'Ventilación', value: 'Doble sistema de flujo de aire (100 m³/h)' },
      { label: 'Peso', value: 'Aprox. 450 Kg' }
    ]
  },
  personalizada: {
    title: 'Cabina Personalizada',
    label: 'Personalizada',
    subtitle: 'Fabricamos soluciones a tu medida. Tú eliges las dimensiones, los colores corporativos, la distribución de ventanas y los requerimientos acústicos específicos (estudios de grabación, podcast, etc.).',
    benefits: [
      'Diseño 100% adaptable a los colores de tu marca y espacio.',
      'Preparación para requerimientos acústicos extremos (Ej. estudios de música).',
      'Configuraciones eléctricas, paneles patch o requerimientos audiovisuales especiales.',
      'Posibilidad de cristales curvos personalizados o vidrios inteligentes.',
      'Acompañamiento arquitectónico durante todo el proceso.'
    ],
    specs: [
      { label: 'Capacidad', value: 'Ilimitada (según diseño)' },
      { label: 'Aislamiento', value: 'Configurable (de 30dB hasta 60dB+)' },
      { label: 'Tiempo de fabricación', value: '4 - 8 Semanas' },
      { label: 'Garantía extendida', value: '5 años en estructura' }
    ]
  }
}

const currentTabData = computed(() => dataMap[activeTab.value])

watch(activeTab, (newVal) => {
  router.replace({ query: { ...route.query, tab: newVal } })
})

onMounted(() => {
  if (route.query.tab && dataMap[route.query.tab as string]) {
    activeTab.value = route.query.tab as string
  }
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
