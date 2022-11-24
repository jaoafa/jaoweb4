<script setup lang="ts">
import 'modern-css-reset'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
:root {
  --bg: #{$color-white};

  &.dark-mode {
    --bg: #{$color-gray-900};
  }
}

body {
  background-color: var(--bg);
}
</style>
