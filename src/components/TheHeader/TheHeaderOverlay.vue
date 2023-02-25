<script setup lang="ts">
type TheHeaderOverlayProps = {
  /** 表示状態を指定します */
  value: boolean
}
const props = withDefaults(defineProps<TheHeaderOverlayProps>(), {
  value: false,
})
</script>

<template>
  <div :style="{ pointerEvents: props.value ? 'all' : 'none' }" class="overlay">
    <div
      :style="{ transform: `scale(${props.value ? 1 : 0})` }"
      class="circle"
    />
    <div :style="{ opacity: props.value ? 1 : 0 }" class="content">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
}
.circle {
  $diameter: calc(max(100dvw, 100dvh) * 2);

  position: absolute;
  top: calc((100dvh - $diameter) / 2);
  left: calc((100dvw - $diameter) / 2);
  z-index: 0;
  width: $diameter;
  height: $diameter;
  background-color: var(--nav);
  border-radius: 50%;
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}
.content {
  position: relative;
  z-index: 1;
  height: 100%;
  overflow-y: auto;
  color: var(--bg);
  transition: opacity 0.1s;

  & > div {
    max-width: var(--max);
    padding: 72px 16px 24px;
    margin: auto;

    @include breakpoint {
      padding: 120px 24px 32px;
    }
  }
}
</style>
