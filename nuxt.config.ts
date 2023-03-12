// Nuxt Configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  content: {
    documentDriven: true,
  },
  css: ['@/assets/main.css'],
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-schema-org',
    'nuxt-simple-robots',
  ],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  robots: {
    sitemap: '/sitemap.xml',
  },
  runtimeConfig: {
    public: {
      siteUrl: `https://${process.env.SITE_DOMAIN || 'jaoafa.com'}`,
    },
  },
  srcDir: 'src/',
  typescript: {
    shim: false,
    strict: true,
  },
})
