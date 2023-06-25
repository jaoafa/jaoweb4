<script setup lang="ts">
import { siDiscord, siTwitter } from 'simple-icons'

const props = withDefaults(
  defineProps<{
    /** ユーザの名前を指定します */
    name: string
    /** アイコン画像を指定します */
    icon: string
    /** Minecraftのアカウントを指定します */
    minecraft: string
    /** Discordのアカウントを指定します */
    discord: {
      username: string
      url: string
    }
    /** Twitterのアカウントを指定します */
    twitter?: string
  }>(),
  {
    twitter: undefined,
  }
)
</script>

<template>
  <div
    class="mb-3 flex items-center gap-4 rounded-lg border border-gray-100 p-6"
  >
    <div
      class="not-prose aspect-square w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100"
    >
      <img :src="props.icon" alt="icon" class="h-full w-full object-cover" />
    </div>
    <div class="grid grow gap-2">
      <div class="grid gap-2 pl-2">
        <div class="flex flex-wrap items-center gap-x-2">
          <div
            :to="`https://users.jaoafa.com/${props.minecraft}`"
            class="text-xl font-bold text-current"
          >
            {{ props.name }}
          </div>
          <NuxtLink
            :to="`https://users.jaoafa.com/${props.minecraft}`"
            class="translate-y-px font-accent text-xs text-gray-500"
          >
            Minecraft: {{ props.minecraft }}
          </NuxtLink>
        </div>

        <div
          class="flex flex-wrap items-center gap-x-3 gap-y-1 font-accent text-xs"
        >
          <div class="flex items-center gap-2">
            <AppIcon size="16px">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path :d="siDiscord.path" />
              </svg>
            </AppIcon>
            <NuxtLink :to="props.discord.url">
              {{ props.discord.username }}
            </NuxtLink>
          </div>
          <div v-if="props.twitter" class="flex items-center gap-2">
            <AppIcon size="16px">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path :d="siTwitter.path" />
              </svg>
            </AppIcon>
            <NuxtLink :to="`https://twitter.com/${props.twitter}`">
              {{ props.twitter }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="text-xs">
        <slot />
      </div>
    </div>
  </div>
</template>
