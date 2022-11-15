// nuxt configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: { shim: false, strict: true },
  modules: ['@nuxt/content'],
  content: {},
})
