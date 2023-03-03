<script setup lang="ts">
import { type Properties } from 'csstype'

const props = withDefaults(
  defineProps<{
    /** 適用するタグを指定します */
    tag?: string
    /** ラベルテキストを指定します */
    label?: string
    /** アイコンのサイズを指定します */
    size?: Properties['fontSize']
    /** 色を指定します */
    color?: Properties['color']
  }>(),
  {
    tag: 'span',
    label: '',
    size: '0.8em',
    color: 'currentcolor',
  }
)
</script>

<template>
  <component
    :is="props.tag"
    :style="{ fontSize: props.size, color: props.color }"
    class="leading-none [&>svg]:h-[1em] [&>svg]:w-[1em] [&>svg]:fill-current"
  >
    <slot />
  </component>
</template>
