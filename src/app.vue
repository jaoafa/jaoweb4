<script setup lang="ts">
const appConfig = useAppConfig()
const router = useRouter()
const currentPath = computed(() =>
  ((url) => (url.endsWith('/') ? url.substring(0, url.length - 1) : url))(
    router.currentRoute.value.path
  )
)
useHead({
  title: appConfig.sitename,
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#',
  },
  meta: [
    { name: 'theme-color', content: '#ffb41d' },
    { name: 'msapplication-TileColor', content: '#ffb41d' },
    { name: 'apple-mobile-web-app-title', content: appConfig.sitename },
    { name: 'application-name', content: appConfig.sitename },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://${appConfig.sitedomain}${currentPath.value}`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffb41d' },
  ],
  script: (() => {
    return [
      {
        key: 'gtm',
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${appConfig.gtmId}');`,
        disabled: process.env.NODE_ENV !== 'production',
      },
    ].filter((item) => !item.disabled)
  })(),
  noscript: [
    {
      key: 'gtm',
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${appConfig.gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      tagPosition: 'bodyOpen',
    },
  ],
})
useServerSeoMeta({
  ogSiteName: appConfig.sitename,
  ogLocale: 'ja_JP',
  ogUrl: `https://${appConfig.sitedomain}${currentPath.value}`,
  twitterCard: 'summary_large_image',
  twitterSite: appConfig.social.twitter.id,
})
</script>

<template>
  <Body class="bg-white text-gray-700" />
  <AppProvider>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </AppProvider>
</template>
