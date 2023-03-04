// Nuxt Configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  content: {
    documentDriven: true,
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  srcDir: 'src/',
  typescript: {
    shim: false,
    strict: true,
  },
})
