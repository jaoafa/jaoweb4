<script setup lang="ts">
const appConfig = useAppConfig()

const open = ref<boolean>(false)
const onClick = () => {
  open.value = !open.value
}

const scroll = ref<boolean>(false)
onMounted(() => {
  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 0) {
        scroll.value = true
      } else {
        scroll.value = false
      }
    },
    { passive: true }
  )
})
</script>

<template>
  <header :style="{ boxShadow: scroll ? '0 0 4px rgb(0, 0, 0, 0.3)' : 'none' }">
    <div>
      <NuxtLink
        to="/"
        :title="appConfig.sitename"
        :aria-label="`${appConfig.sitename} toppage`"
      >
        <AppLogo />
      </NuxtLink>
      <TheHeaderOverlay :value="open">
        <TheHeaderNav />
      </TheHeaderOverlay>
      <button :class="{ open }" @click="onClick">
        <span />
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--bg);
  transition: box-shadow 0.2s;

  & > div {
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max);
    padding: 16px;
    margin: auto;

    @include breakpoint {
      padding: 16px 24px;
    }
  }
}
a {
  width: 144px;
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s;

  @include breakpoint {
    width: 192px;
  }

  &:hover {
    opacity: 0.7;
  }
}
button {
  position: relative;
  width: 36px;
  height: 36px;
  overflow: hidden;
  border-radius: 50%;

  @include breakpoint {
    width: 48px;
    height: 48px;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    width: 0;
    height: 0;
    content: '';
    background-color: var(--nav);
    border-radius: 50%;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 0.3s;
    transform: translate(-50%, -50%);
  }
  &.open,
  &:hover {
    color: var(--bg);

    &::before {
      width: 200%;
      height: 200%;
    }
  }
  & > span {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 1;
    display: block;
    width: 56%;
    height: 2px;
    margin: auto;
    background-color: currentcolor;
    transition: 0.3s ease-in-out;

    &:nth-child(1) {
      top: 35%;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 50%;
    }
    &:nth-child(4) {
      top: 65%;
    }
  }
  &.open > span {
    &:nth-child(1),
    &:nth-child(4) {
      top: 50%;
      width: 0%;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
}
</style>
