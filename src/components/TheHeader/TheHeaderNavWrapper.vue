<script setup lang="ts">
export type TheHeaderNavWrapperProps = {
  /** ナビゲーションの表示状態を指定します */
  open: boolean
}
const props = withDefaults(defineProps<TheHeaderNavWrapperProps>(), {
  open: false,
})
</script>

<template>
  <div :style="{ pointerEvents: props.open ? 'all' : 'none' }" class="nav">
    <div :style="{ transform: `scale(${props.open ? 1 : 0})` }" class="bg" />
    <div :style="{ opacity: props.open ? 1 : 0 }" class="inner">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
}
.bg {
  $side: calc(max(100dvw, 100dvh) * 2);

  position: absolute;
  top: calc((100dvh - $side) / 2);
  left: calc((100dvw - $side) / 2);
  z-index: 0;
  display: block;
  width: $side;
  height: $side;
  content: '';
  background-color: var(--nav);
  border-radius: 50%;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 0.3s;
  transition-property: transform;
}
.inner {
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 72px 16px 16px;
  overflow-y: auto;
  transition-duration: 0.1s;
  transition-property: opacity;

  @include breakpoint {
    padding: 120px 24px 24px;
  }
}
.content {
  max-width: var(--max);
  margin: auto;
  color: var(--bg);
}
</style>
