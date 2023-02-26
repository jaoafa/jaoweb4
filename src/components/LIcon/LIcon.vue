<script setup lang="ts">
import { type Properties } from 'csstype'

type LayoutIconProps = {
  /** 適用するタグを指定します */
  tag?: string
  /** テキストとアイコンとの間の余白サイズを指定します */
  space?: Properties['marginInlineEnd']
  /** ラベルテキストを指定します */
  label?: string
  /** アイコンのサイズを指定します */
  size?: Properties['fontSize']
  /** 色を指定します */
  color?: Properties['color']
}
const props = withDefaults(defineProps<LayoutIconProps>(), {
  tag: 'span',
  space: 0,
  label: '',
  size: '0.8em',
  color: 'currentcolor',
})

const classes = computed(() => ({
  'icon--withtext': !!props.space,
}))
const styles = computed(() => ({
  fontSize: props.size,
  color: props.color,
}))
</script>

<template>
  <component :is="props.tag" :class="classes" :style="styles" class="icon">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.icon {
  line-height: 1;

  & :deep() > svg {
    width: 1em;
    height: 1em;
    vertical-align: bottom;
    fill: currentcolor;
  }
  &--withtext {
    display: inline-flex;
    align-items: baseline;

    & :deep() > svg {
      margin-inline-end: v-bind(space);
    }
  }
}
</style>
