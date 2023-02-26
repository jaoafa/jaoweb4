<script setup lang="ts"></script>

<template>
  <footer>
    <div>
      <nav>
        <div>
          <NuxtLink to="/" class="logo">
            <AppLogo />
            <p>ここで爆発します、あなたの可能性が。</p>
          </NuxtLink>
          <TheFooterSocial />
        </div>

        <div>
          <TheFooterNav />
        </div>
      </nav>
    </div>

    <div>
      <TheFooterCopyright />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;

  & > div {
    box-sizing: content-box;
    width: 100%;
    max-width: var(--max);
    padding: 0 16px;
    margin: auto;

    @include breakpoint {
      padding: 0 24px;
    }
  }
}
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
