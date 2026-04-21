<template>
  <ServiceLayout 
    :title="pageData.title"
    :subtitle="pageData.subtitle"
    :benefits="pageData.benefits"
    :specs="pageData.specs"
  >
    <!-- Galería -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px]">
      <div class="bg-gray-100 dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 relative group">
        <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-sans">
          [Imagen: Antes del tratamiento]
        </div>
        <!-- <img src="~/assets/img/restauracion-1.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Restauración" /> -->
      </div>
      <div class="bg-gray-100 dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 relative group md:row-span-2 auto-rows-[616px]">
        <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-sans text-center px-4">
          [Video nativo: Proceso de instalación o resultado final]
        </div>
        <!-- <video class="w-full h-full object-cover" autoplay loop muted playsinline>
          <source src="~/assets/vid/restauracion.mp4" type="video/mp4" />
        </video> -->
      </div>
      <div class="bg-gray-100 dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 relative group">
        <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-sans">
          [Imagen: Después del tratamiento]
        </div>
        <!-- <img src="~/assets/img/restauracion-2.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Restauración" /> -->
      </div>
    </div>
  </ServiceLayout>
</template>

<script setup lang="ts">
const pageData = {
  title: 'Restauración Acústica',
  subtitle: 'Diagnóstico y tratamiento de espacios existentes mediante la instalación estratégica de materiales fonoabsorbentes para eliminar la reverberación y ecos molestos, mejorando la inteligibilidad de la voz y el confort acústico.',
  benefits: [
    'Mejora inmediata en la calidad del sonido del espacio.',
    'Materiales de alta absorción clasificados NRC 0.85+.',
    'Instalación rápida sin necesidad de obras mayores.',
    'Acondicionamiento estético y minimalista integrado al diseño existente.',
    'Ideal para restaurantes, oficinas, auditorios y salas de reuniones.'
  ],
  specs: [
    { label: 'Tiempo de ejecución', value: '1 a 3 días hábiles (según área)' },
    { label: 'Materiales principales', value: 'Paneles PET de alta densidad, espumas acústicas forradas, lana mineral' },
    { label: 'Opciones de acabado', value: 'Más de 15 colores disponibles en telas ignífugas' },
    { label: 'Rendimiento', value: 'Reducción de hasta un 60% en tiempos de reverberación (RT60)' }
  ]
}

definePageMeta({
  layout: 'default'
})
</script>
