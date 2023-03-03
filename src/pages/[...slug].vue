<script setup lang="ts">
import { CalendarDaysIcon, ArrowPathIcon } from '@heroicons/vue/20/solid'

useServerSeoMeta({
  ogType: 'article',
})
</script>

<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-3xl font-bold">{{ doc.title }}</h1>
      <dl
        v-if="doc.created || doc.updated"
        class="mt-4 inline-flex gap-5 text-xs text-gray-500"
      >
        <div v-if="doc.created" class="inline-flex items-center gap-2">
          <dt class="translate-y-[0.1em]" aria-label="Posted on">
            <AppIcon size="14px">
              <CalendarDaysIcon />
            </AppIcon>
          </dt>
          <dd>
            <time :datetime="useDateFormat(doc.created, 'YYYY-MM-DD').value">
              {{
                useDateFormat(doc.created, 'MMMM DD, YYYY', {
                  locales: 'en-US',
                }).value
              }}
            </time>
          </dd>
        </div>
        <div v-if="doc.updated" class="inline-flex items-center gap-2">
          <dt class="translate-y-[0.1em]" aria-label="Updated on">
            <AppIcon size="14px">
              <ArrowPathIcon />
            </AppIcon>
          </dt>
          <dd>
            <time :datetime="useDateFormat(doc.updated, 'YYYY-MM-DD').value">
              {{
                useDateFormat(doc.updated, 'MMMM DD, YYYY', {
                  locales: 'en-US',
                }).value
              }}
            </time>
          </dd>
        </div>
      </dl>
      <ul v-if="doc.author" class="mt-5 flex flex-wrap gap-x-8 gap-y-4">
        <template v-for="(author, index) in doc.author" :key="index">
          <li class="flex items-center gap-3">
            <div
              class="aspect-square w-9 overflow-hidden rounded-full bg-gray-100"
            >
              <img
                v-if="author.icon"
                :src="author.icon"
                alt="icon"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="text-sm">{{ author.name }}</div>
          </li>
        </template>
      </ul>
      <ContentRenderer
        :value="doc"
        class="prose prose-sm md:prose-base mt-10 max-w-none md:mt-12"
      />
    </ContentDoc>
  </NuxtLayout>
</template>
