// nuxt configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  colorMode: {},
  content: {},
  modules: ['@nuxt/content', '@nuxtjs/color-mode'],
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
