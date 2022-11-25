<script setup lang="ts">
import { type Properties } from 'csstype'
import { type ComponentTagClasses, type ComponentTagStyles } from '@/types'

type AppButtonProps = {
  /** 適用するタグを指定します */
  tag?: string
  /** 背景色を指定します */
  backgroundColor?: Properties['backgroundColor']
  /** 文字色を指定します */
  textColor?: Properties['color']
  /** サイズを指定します */
  size?: 'large' | 'medium' | 'small'
  /** コンポーネントをアンカーにして `href` 属性を追加します */
  href?: string
  /** コンポーネントを `<NuxtLink>` にして `to` 属性を追加します */
  to?: string
  /** `target` 属性に適用する値を指定します */
  target?: string
  /** アイコンのみの場合のスタイルを適用します */
  icon?: boolean
}
type AppButtonEmits = {
  (e: 'click'): void
}
const props = withDefaults(defineProps<AppButtonProps>(), {
  tag: 'button',
  backgroundColor: 'transparent',
  textColor: 'currentcolor',
  size: 'medium',
  href: undefined,
  to: undefined,
  target: undefined,
  icon: false,
})
const emit = defineEmits<AppButtonEmits>()

/** クリックイベントを発行する関数 */
const handleClick = (): void => {
  emit('click')
}

/** コンポーネントに適用するタグ */
const currentTag = computed(
  (): string => (props.to && 'nuxt-link') || (props.href && 'a') || props.tag
)

const classes = computed(
  (): ComponentTagClasses<'button'> => ({
    'button--large': props.size === 'large',
    'button--medium': props.size === 'medium',
    'button--small': props.size === 'small',
    'button--icon': props.icon,
  })
)
const styles = computed(
  (): ComponentTagStyles => ({
    color: props.textColor,
    backgroundColor: props.backgroundColor,
  })
)
</script>

<template>
  <component
    :is="currentTag"
    :class="classes"
    :style="styles"
    :href="props.href"
    :to="props.to"
    :target="props.target"
    class="button"
  >
    <span class="button__body">
      <slot />
    </span>
  </component>
</template>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 4px;

  &:hover {
    *::before {
      opacity: 0.1;
    }
  }

  &--large {
    height: 48px;
    padding: 0 24px;
    font-size: rem(18);
    font-weight: 700;
    line-height: 24px;
  }
  &--medium {
    height: 32px;
    padding: 0 16px;
    font-size: rem(12);
    font-weight: 700;
    line-height: 18px;
  }
  &--small {
    height: 24px;
    padding: 0 16px;
    font-size: rem(12);
    font-weight: 700;
    line-height: 18px;
  }

  &--icon {
    padding: 0;
    line-height: 1;
    &.button {
      &--large {
        width: 48px;
        font-size: rem(20);
      }
      &--medium {
        width: 32px;
        font-size: rem(16);
      }
      &--small {
        width: 24px;
        font-size: rem(12);
      }
    }
  }
}
.button__body {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    content: '';
    background-color: currentcolor;
    border-radius: inherit;
    opacity: 0;
    transition-duration: 0.1s;
    transition-property: opacity;
  }
}
</style>
