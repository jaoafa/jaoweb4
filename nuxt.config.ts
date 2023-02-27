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
  modules: ['@nuxt/content'],
  srcDir: 'src/',
  typescript: {
    shim: false,
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "@/assets/styles/main.scss" as *;' },
      },
    },
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
})
