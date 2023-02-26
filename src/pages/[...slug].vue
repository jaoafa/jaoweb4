<template>
  <main>
    <ContentDoc />
  </main>
</template>

<style lang="scss" scoped>
main {
  box-sizing: content-box;
  max-width: var(--max);
  padding: 24px 16px;
  margin: auto;

  @include breakpoint {
    padding: 32px 24px;
  }
}
</style>
