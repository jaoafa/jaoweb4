<script setup lang="ts">
import { type ComponentTagStyles } from '@/types'
import { Properties } from 'csstype'

type LayoutClusterProps = {
  /** 適用するタグを指定します */
  tag?: string
  /** 垂直方向の並べ方を指定します */
  alignItems?: Properties['alignItems']
  /** 水平方向の並べ方を指定します */
  justifyContent?: Properties['justifyContent']
  /** コンテンツ間の余白サイズを指定します */
  space?: Properties['gap']
}
const props = withDefaults(defineProps<LayoutClusterProps>(), {
  tag: 'div',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  space: 0,
})

const styles = computed(
  (): ComponentTagStyles => ({
    gap: props.space,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
  })
)
</script>

<template>
  <component :is="props.tag" :style="styles" class="cluster">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.cluster {
  display: flex;
  flex-wrap: wrap;
}
</style>
