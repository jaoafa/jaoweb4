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
  --text: #{$color-gray-800};
  --text-muted: #{$color-gray-600};
  --max: #{$size-width-max};
  --gutters: #{$size-gutters};

  &.dark-mode {
    --bg: #{$color-gray-900};
    --text: #{$color-gray-50};
    --text-muted: #{$color-gray-100};
  }
}
body {
  font-family: 'Hiragino Sans', 'Yu Gothic UI', sans-serif;
  color: var(--text);
  background-color: var(--bg);
}
</style>
