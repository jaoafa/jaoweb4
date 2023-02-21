// Nuxt Configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  srcDir: 'src/',
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "@/assets/styles/main.scss" as *;' },
      },
    },
  },
})
