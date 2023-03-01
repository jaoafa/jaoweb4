<script setup lang="ts">
useServerSeoMeta({
  ogType: 'article',
})
</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
