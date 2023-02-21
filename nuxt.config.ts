// Nuxt Configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
})
