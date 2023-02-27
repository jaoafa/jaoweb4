<script setup lang="ts">
const appConfig = useAppConfig()
useHead({
  title: appConfig.sitename,
  meta: [
    { name: 'theme-color', content: '#ffb41d' },
    { name: 'msapplication-TileColor', content: '#ffb41d' },
    { name: 'apple-mobile-web-app-title', content: appConfig.sitename },
    { name: 'application-name', content: appConfig.sitename },
  ],
  link: [
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
})
useServerSeoMeta({
  title: appConfig.sitename,
  ogTitle: appConfig.sitename,
  description: appConfig.sitedescription,
  ogDescription: appConfig.sitedescription,
})
</script>

<template>
  <AppProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </AppProvider>
</template>
