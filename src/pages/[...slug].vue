<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
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
