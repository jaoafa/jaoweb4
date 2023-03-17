<script setup lang="ts">
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/vue/24/outline'
const appConfig = useAppConfig()
const { copy, copied } = useClipboard()
</script>

<template>
  <section class="grid h-[100dvh] snap-start overflow-hidden">
    <div class="z-10 col-start-1 row-start-1 m-auto w-full px-4 md:px-16">
      <div class="flex flex-col items-center gap-8 md:gap-16">
        <div class="flex flex-col items-center gap-4 text-center text-white">
          <span class="text-base font-bold md:text-3xl">{{
            appConfig.tagline
          }}</span>
          <span class="font-accent text-5xl font-black md:text-7xl lg:text-8xl">
            {{ appConfig.sitename }}
          </span>
        </div>
        <div
          class="flex items-center gap-4 rounded-lg border border-gray-400 bg-white/60 py-2 px-6 backdrop-blur"
        >
          <button
            :class="`
              ${'flex h-5 w-5 items-center justify-center transition-colors'}
              ${'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'}
              ${copied ? 'text-success' : 'hover:text-primary-900'}
            `"
            title="Copy to clipboard"
            aria-label="Copy to clipboard"
            @click="() => copy(appConfig.address)"
          >
            <component
              :is="copied ? ClipboardDocumentCheckIcon : ClipboardDocumentIcon"
              class="h-full w-full"
            />
          </button>
          <input
            :value="appConfig.address"
            class="min-w-0 bg-transparent font-mono font-bold focus:outline-none md:text-lg"
            type="text"
            tabindex="-1"
            readonly
            aria-readonly="true"
            aria-label="Minecraft server address"
          />
        </div>
      </div>
    </div>
    <img
      src="/images/main.jpg"
      alt=""
      class="col-start-1 row-start-1 h-full min-h-0 w-full object-cover"
    />
  </section>
</template>
