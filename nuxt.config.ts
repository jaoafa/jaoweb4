// Nuxt Configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config

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
    '@nuxtjs/algolia',
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
  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY || '99d5390e982d02657f49edd3edee843b',
    applicationId: process.env.ALGOLIA_APPLICATION_ID || 'RF6OC1MM2P',
  },
  generate: {
    routes: ['/search'],
  },
})
