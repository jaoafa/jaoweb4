<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** 表示状態を指定します */
    value: boolean
  }>(),
  { value: false }
)
</script>

<template>
  <div
    :class="`
      ${'fixed left-0 top-0 h-[100dvh] w-[100dvw] overflow-hidden'}
      ${props.value ? 'pointer-events-auto' : 'pointer-events-none'}
    `"
  >
    <div
      :class="`
        ${'circle'}
        ${'absolute z-0 rounded-full bg-gray-900 transition-transform duration-300 ease-out'}
        ${props.value ? 'scale-100' : 'scale-0'}
      `"
    />
    <div
      :class="`
        ${'relative z-10 h-full overflow-y-auto overscroll-contain text-white transition-opacity duration-100'}
        ${props.value ? 'opacity-100' : 'opacity-0'}
      `"
    >
      <div class="mx-auto box-content max-w-6xl px-6 py-20 md:py-32">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circle {
  $diameter: calc(max(100dvw, 100dvh) * 2);

  top: calc((100dvh - $diameter) / 2);
  left: calc((100dvw - $diameter) / 2);
  width: $diameter;
  height: $diameter;
}
</style>
