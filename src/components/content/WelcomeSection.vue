<script setup lang="ts">
import { siDiscord } from 'simple-icons'

const appConfig = useAppConfig()

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <section class="bg-gray-50">
    <div
      class="m-auto box-content flex max-w-6xl flex-wrap justify-between gap-16 px-4 py-16 md:flex-nowrap md:items-center md:gap-8 md:py-20 md:px-6 lg:gap-16 lg:py-28 xl:gap-24"
    >
      <div class="flex flex-col gap-10">
        <h2
          class="text-center text-3xl font-bold md:text-left md:text-4xl lg:text-5xl"
        >
          {{ props.title }}
        </h2>
        <div
          class="flex flex-col gap-4 px-2 text-sm leading-relaxed text-gray-500"
        >
          <slot />
        </div>
        <div class="flex justify-center gap-6 px-1 md:justify-start">
          <NuxtLink
            :to="appConfig.social.discord.url"
            class="flex items-center gap-2 rounded-lg bg-[#5865f2] px-6 py-2 text-white shadow-lg transition-opacity hover:opacity-80"
          >
            <AppIcon size="20px">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path :d="siDiscord.path" />
              </svg>
            </AppIcon>
            <span class="font-accent text-sm">Discord</span>
          </NuxtLink>
        </div>
      </div>

      <div class="relative mx-auto flex flex-col">
        <div class="relative z-10 h-28 w-48 animate-bounce">
          <div
            class="absolute top-6 left-0 z-0 flex h-16 w-3/4 items-center justify-center rounded-3xl border border-gray-50 bg-white shadow-lg"
          >
            <span class="font-accent text-2xl font-black">jao</span>
          </div>
          <div
            :class="`
              ${'absolute right-0 -bottom-6 z-10 flex h-16 w-3/4 items-center justify-center rounded-3xl border border-gray-50 bg-white shadow-lg'}
              ${'after:absolute after:-bottom-3.5 after:h-0 after:w-0 after:border-8 after:border-transparent after:border-t-white'}
            `"
          >
            <span class="font-accent text-2xl font-black">afa</span>
          </div>
        </div>

        <div class="relative w-full md:w-80 lg:w-96">
          <img
            src="/images/jaoafa.webp"
            alt="jaoの始まり"
            class="mx-auto h-auto w-11/12 rounded-lg object-cover"
          />
        </div>

        <div class="relative z-10 h-16 w-40 animate-bounce self-end">
          <div
            :class="`
              ${'absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center rounded-3xl border border-gray-50 bg-white shadow-lg'}
              ${'after:absolute after:-top-3.5 after:h-0 after:w-0 after:border-8 after:border-transparent after:border-b-white'}
            `"
          >
            <span class="font-accent text-2xl font-black">jaojao</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
