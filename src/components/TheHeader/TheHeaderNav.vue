<script setup lang="ts"></script>

<template>
  <nav>
    <div>
      <TheHeaderNavItems />
    </div>

    <div>
      <NuxtLink to="/" class="logo">
        <AppLogo />
        <p>ここで爆発します、あなたの可能性が。</p>
      </NuxtLink>
      <TheHeaderSocial />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: grid;
  gap: 64px;

  @include breakpoint {
    grid-template-columns: auto 1fr;
    gap: 120px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;

    &:nth-child(2) {
      @include breakpoint {
        grid-row: 1;
        grid-column: 1;
      }
    }
  }
}
.logo {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 240px;
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  p {
    padding: 0 2px;
    font-size: rem(12);
  }
}
</style>
