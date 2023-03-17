<script setup lang="ts">
import {
  type SimpleIcon,
  siDiscord,
  siGithub,
  siTwitter,
  siYoutube,
} from 'simple-icons'

const appConfig = useAppConfig()
const props = withDefaults(
  defineProps<{
    direction?: 'row' | 'column'
  }>(),
  {
    direction: 'row',
  }
)
const emit = defineEmits<{
  (e: 'click'): void
}>()
const social: {
  label: string
  href: string
  icon: SimpleIcon
}[] = [
  {
    label: 'Discord',
    href: appConfig.social.discord.url,
    icon: siDiscord,
  },
  {
    label: 'GitHub',
    href: appConfig.social.github.url,
    icon: siGithub,
  },
  {
    label: 'Twitter',
    href: appConfig.social.twitter.url,
    icon: siTwitter,
  },
  {
    label: 'YouTube',
    href: appConfig.social.youtube.url,
    icon: siYoutube,
  },
]
</script>

<template>
  <ul
    :class="`
      ${'flex items-center gap-6 px-1'}
      ${props.direction === 'row' ? 'flex-row' : 'flex-col'}
    `"
  >
    <template v-for="item in social" :key="item.label">
      <li>
        <NuxtLink
          :to="item.href"
          :title="item.label"
          :aria-label="item.label"
          class="transition-opacity hover:opacity-70"
          target="_blank"
          @click="() => emit('click')"
        >
          <AppIcon size="20px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path :d="item.icon.path" />
            </svg>
          </AppIcon>
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>
