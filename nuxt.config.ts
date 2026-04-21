import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
    '@nuxt/image'
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  css: ['~/assets/css/app.css'],
  colorMode: {
    classSuffix: ''
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Silence Solution',
      meta: [
        { name: 'description', content: 'Soluciones Acústicas: Restauración, cabinas y mamparas.' }
      ],
      htmlAttrs: {
        lang: 'es'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Inter:wght@400;500&display=swap' }
      ]
    }
  }
})
