<script setup lang="ts">
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/vue/24/outline'

const appConfig = useAppConfig()
const { copy, copied } = useClipboard()

const images = ['/images/main01', '/images/main02', '/images/main03']

const currentImage = ref<number>(0)
const currentRatio = ref<number>(0)
useIntervalFn(() => {
  if (currentRatio.value >= 1) {
    currentImage.value = currentImage.value === 2 ? 0 : currentImage.value + 1
    currentRatio.value = 0
  } else {
    currentRatio.value = currentRatio.value + 0.01
  }
}, 100)
</script>

<template>
  <section class="grid h-[100dvh] snap-start overflow-hidden">
    <div class="z-10 col-start-1 row-start-1 m-auto w-full px-4 md:px-16">
      <div class="flex flex-col items-center gap-8 md:gap-16">
        <div class="flex flex-col items-center gap-4 text-center text-white">
          <span class="text-base font-bold md:text-3xl">
            {{ appConfig.tagline }}
          </span>
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

    <div
      class="z-10 col-start-1 row-start-1 mt-auto mr-auto ml-4 mb-16 hidden md:ml-16 md:block"
    >
      <div class="text-white">
        <SocialLinks direction="column" />
      </div>
    </div>

    <div class="z-10 col-start-1 row-start-1 mx-auto mt-auto mb-16 md:mr-16">
      <div class="flex w-72 gap-2 md:w-96">
        <template v-for="n in 3" :key="n">
          <div
            :class="`
              ${'h-2 w-1/3 cursor-pointer overflow-hidden rounded-lg bg-gray-300/70'}
              ${currentImage === n - 1 ? 'bg-gray-300/80' : 'bg-gray-300/30'}
            `"
            @click="
              () => {
                currentImage = n - 1
                currentRatio = 0
              }
            "
          >
            <span
              :style="{
                transform: `scale(${
                  currentImage === n - 1 ? currentRatio : 0
                }, 1)`,
              }"
              :class="`
                ${'block h-full rounded bg-primary-600 transition-transform'}
                ${currentImage === n - 1 ? 'origin-left' : 'origin-right'}
              `"
            />
          </div>
        </template>
      </div>
    </div>

    <div class="relative col-start-1 row-start-1 h-full min-h-0 w-full">
      <template v-for="n in 3" :key="n">
        <img
          :class="`
            ${'absolute inset-0 h-full min-h-0 w-full object-cover'}
            ${
              currentImage === n - 1
                ? 'opacity-100 transition-transform'
                : 'opacity-0 transition-opacity'
            }
          `"
          :style="{
            transform: `scale(${
              currentImage === n - 1 ? 1 + currentRatio / 2 : 1
            })`,
          }"
          :src="`${images[n - 1]}/1920w.webp`"
          :srcset="`
            ${images[n - 1]}/856w.webp 856w,
            ${images[n - 1]}/1200w.webp 1200w,
            ${images[n - 1]}/1620w.webp 1620w,
            ${images[n - 1]}/1920w.webp 1980w
          `"
          alt=""
          sizes="100vw"
        />
      </template>
    </div>
  </section>
</template>
