<template>
  <section class="py-24 bg-[#f5f5f5] dark:bg-[#0a0a0a] border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4 lg:px-8 text-center" v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1, transition: { duration: 600 } }">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-gray-300 dark:divide-gray-800">
        <div class="flex flex-col items-center justify-center p-4 group">
          <div class="font-display text-6xl md:text-7xl font-bold text-green-deep dark:text-green-mid mb-2 group-hover:scale-110 transition-transform duration-500">
            85<span class="text-4xl text-green-mid/60">%</span>
          </div>
          <div class="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">Reducción de ruido</div>
        </div>

        <div class="flex flex-col items-center justify-center p-4 group">
          <div class="font-display text-6xl md:text-7xl font-bold text-green-deep dark:text-green-mid mb-2 group-hover:scale-110 transition-transform duration-500">
            3
          </div>
          <div class="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">Diseños de cabina</div>
        </div>

        <div class="flex flex-col items-center justify-center p-4 group">
          <div class="font-display text-6xl md:text-7xl font-bold text-green-deep dark:text-green-mid mb-2 group-hover:scale-110 transition-transform duration-500">
            100<span class="text-4xl text-green-mid/60">%</span>
          </div>
          <div class="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">Proyectos a medida</div>
        </div>

        <div class="flex flex-col items-center justify-center p-4 group">
          <div class="font-display text-6xl md:text-7xl font-bold text-green-deep dark:text-green-mid mb-2 group-hover:scale-110 transition-transform duration-500">
            +50
          </div>
          <div class="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">Clientes Satisfechos</div>
        </div>
      </div>
    </div>
  </section>
</template>