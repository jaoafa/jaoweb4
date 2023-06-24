// Nuxt Configuration
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  content: {
    documentDriven: true,
  },
  css: ['@/assets/main.css'],
  eslint: {
    lintOnStart: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
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
  stylelint: {
    lintOnStart: false,
  },
  typescript: {
    shim: false,
    strict: true,
  },
})
