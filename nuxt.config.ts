// nuxt configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  content: {},
  modules: ['@nuxt/content'],
  srcDir: 'src/',
  typescript: { shim: false, strict: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "@/assets/styles" as *;' },
      },
    },
  },
})
