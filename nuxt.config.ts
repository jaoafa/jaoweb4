// Nuxt Configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
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
})
