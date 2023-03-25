<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="bg-white">
    <div
      class="m-auto box-content flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-12"
    >
      <TabGroup>
        <TabList class="flex items-center gap-6">
          <Tab
            v-for="(item, index) in ['お知らせ', 'ブログ']"
            :key="index"
            :class="`
              ${'flex items-center gap-3 text-sm focus:outline-none'}
              ${'ui-selected:font-bold ui-selected:text-gray-800'}
              ${'ui-not-selected:text-gray-500'}
              ${'before:h-2 before:w-2 before:rounded-full'}
              ${'ui-selected:before:bg-primary-600'}
              ${'ui-not-selected:before:bg-gray-200'}
            `"
          >
            {{ item }}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel class="flex flex-col gap-12" as="section">
            <div
              class="flex items-end justify-between font-accent md:items-center"
            >
              <h2 class="text-5xl font-black md:text-6xl">News</h2>
              <NuxtLink
                :class="`
                  ${'relative flex items-center overflow-hidden rounded-3xl bg-gray-50 py-2 pl-6 pr-12 md:pr-16'}
                  ${'before:pointer-events-none before:absolute before:inset-0 before:z-0 before:m-auto before:aspect-square before:w-full before:scale-0 before:rounded-full before:bg-primary-600 before:transition-transform'}
                  ${'hover:before:scale-100'}
                `"
                to="/community/news"
              >
                <span class="relative z-10 text-sm">view more</span>
                <ArrowRightCircleIcon
                  class="absolute inset-y-auto right-5 mt-0.5 h-5 w-5"
                />
              </NuxtLink>
            </div>
            <ContentList :query="['community', 'news']" :limit="4" />
          </TabPanel>
          <TabPanel class="flex flex-col gap-12" as="section">
            <div
              class="flex items-end justify-between font-accent md:items-center"
            >
              <h2 class="text-5xl font-black md:text-6xl">Blog</h2>
              <NuxtLink
                :class="`
                  ${'relative flex items-center overflow-hidden rounded-3xl bg-gray-50 py-2 pl-6 pr-12 md:pr-16'}
                  ${'before:pointer-events-none before:absolute before:inset-0 before:z-0 before:m-auto before:aspect-square before:w-full before:scale-0 before:rounded-full before:bg-primary-600 before:transition-transform'}
                  ${'hover:before:scale-100'}
                `"
                to="/community/blog"
              >
                <span class="relative z-10 text-sm">view more</span>
                <ArrowRightCircleIcon
                  class="absolute inset-y-auto right-5 mt-0.5 h-5 w-5"
                />
              </NuxtLink>
            </div>
            <ContentList :query="['community', 'blog']" :limit="4" />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>
