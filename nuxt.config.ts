// Nuxt Configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config

import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  components: [
    {
      path: '@/components',
      pathPrefix: false,
      extensions: ['.vue'],
    },
  ],
  content: {
    documentDriven: true,
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  srcDir: 'src/',
  tailwindcss: {
    cssPath: '@/assets/styles/tailwind.scss',
  },
  typescript: {
    shim: false,
    strict: true,
  },
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
})
