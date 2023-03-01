<script setup lang="ts">
import {
  type SimpleIcon,
  siDiscord,
  siGithub,
  siTwitter,
  siYoutube,
} from 'simple-icons'

const appConfig = useAppConfig()
const social: {
  label: string
  href: string
  icon: SimpleIcon
}[] = [
  {
    label: 'Discord',
    href: appConfig.social.discord.footer,
    icon: siDiscord,
  },
  {
    label: 'GitHub',
    href: appConfig.social.github,
    icon: siGithub,
  },
  {
    label: 'Twitter',
    href: appConfig.social.twitter.url,
    icon: siTwitter,
  },
  {
    label: 'YouTube',
    href: appConfig.social.youtube,
    icon: siYoutube,
  },
]
</script>

<template>
  <ul class="flex items-center gap-6 px-1">
    <template v-for="item in social" :key="item.label">
      <li>
        <NuxtLink
          :to="item.href"
          :title="item.label"
          :aria-label="item.label"
          class="transition-opacity hover:opacity-70"
          target="_blank"
        >
          <LIcon size="20px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path :d="item.icon.path" />
            </svg>
          </LIcon>
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>
