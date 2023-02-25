<script setup lang="ts">
import {
  type SimpleIcon,
  siDiscord,
  siGithub,
  siTwitter,
  siYoutube,
} from 'simple-icons'

const social: {
  label: string
  href: string
  icon: SimpleIcon
}[] = [
  {
    label: 'Discord',
    href: 'http://discord.gg/7fvwYQDaQp',
    icon: siDiscord,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jaoafa',
    icon: siGithub,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/jaoafa',
    icon: siTwitter,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC92wyJyhqXEMiEROeFJKNKg',
    icon: siYoutube,
  },
]
</script>

<template>
  <ul>
    <template v-for="item in social" :key="item.label">
      <li>
        <NuxtLink :to="item.href" target="_blank">
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

<style lang="scss" scoped>
ul {
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 0 4px;
  list-style: none;
}
a {
  color: currentcolor;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.7;
  }
}
</style>
