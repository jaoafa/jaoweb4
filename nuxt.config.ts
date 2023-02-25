// Nuxt Configuration
// https://v3.nuxtjs.org/api/configuration/nuxt.config

import svgLoader from 'vite-svg-loader'

const gtmId: string = 'GTM-58VVRGD'

export default defineNuxtConfig({
  app: {
    head: {
      script: (() => {
        return [
          {
            key: 'gtm',
            innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            disabled: process.env.NODE_ENV !== 'production',
          },
        ].filter((item) => !item.disabled)
      })(),
      noscript: [
        {
          key: 'gtm',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyOpen',
        },
      ],
    },
  },
  components: [
    {
      path: '@/components',
      pathPrefix: false,
      extensions: ['.vue'],
    },
  ],
  modules: ['@nuxt/content'],
  srcDir: 'src/',
  typescript: {
    shim: false,
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "@/assets/styles/main.scss" as *;' },
      },
    },
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
})
