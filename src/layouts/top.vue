<script setup lang="ts">
useServerSeoMeta({
  ogType: 'website',
})
</script>

<template>
  <main class="main">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
@use 'sass:math';

.main {
  --skew-length: #{50vw * math.div(math.sin(6deg), math.sin(84deg)) * -1};
}
</style>
