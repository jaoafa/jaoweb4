<script setup lang="ts">
const { layout } = useContent()
useServerSeoMeta({
  ogType: 'website',
})
</script>

<template>
  <NuxtLayout :name="layout as string || 'default'">
    <ContentDoc />
  </NuxtLayout>
</template>
