<script setup lang="ts">
import 'ress'
import '@fontsource/noto-sans-jp'
</script>

<template>
  <slot />
</template>

<style lang="scss">
:root {
  --primary: #ffb41d;
  --text: #373948;
  --bg: #fff;
  --nav: #05081a;
  --max: 1200px;
}
*,
::after,
::before {
  box-sizing: border-box;
}
body {
  font-family: 'Noto Sans JP', sans-serif;
  color: var(--text);
  background-color: var(--bg);
}
</style>
