<script setup lang="ts">
useServerSeoMeta({
  ogType: 'website',
})
useStyleTag('.global-header { color: #fff; }')
</script>

<template>
  <main>
    <slot />
  </main>
</template>
