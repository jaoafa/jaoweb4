<script setup lang="ts">
import { type Properties } from 'csstype'
import { type ComponentTagClasses, type ComponentTagStyles } from '@/types'

type LayoutCenterProps = {
  /** 適用するタグを指定します */
  tag?: string
  /** コンテンツの最大幅を指定します */
  max?: Properties['maxWidth']
  /** コンテンツ両端の余白サイズを指定します */
  gutters?: Properties['paddingRight'] | Properties['paddingLeft']
  /** コンテンツ内の要素を中央寄せにします */
  intrinsic?: boolean
  /** テキストを中央揃えにします */
  andText?: boolean
}
const props = withDefaults(defineProps<LayoutCenterProps>(), {
  tag: 'div',
  max: '60ch',
  gutters: 0,
  intrinsic: false,
  andText: false,
})

const classes = computed(
  (): ComponentTagClasses<'center'> => ({
    'center--intrinsic': props.intrinsic,
    'center--and-text': props.andText,
  })
)
const styles = computed(
  (): ComponentTagStyles => ({
    maxWidth: props.max,
    paddingRight: props.gutters,
    paddingLeft: props.gutters,
  })
)
</script>

<template>
  <component :is="props.tag" :class="classes" :style="styles" class="center">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.center {
  box-sizing: content-box;
  margin-right: auto;
  margin-left: auto;
}
.center--intrinsic {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.center--and-text {
  text-align: center;
}
</style>
