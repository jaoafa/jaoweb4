<script setup lang="ts">
import {
  CalendarDaysIcon,
  ArrowPathIcon,
  TagIcon,
} from '@heroicons/vue/20/solid'

const props = withDefaults(
  defineProps<{
    url: string
    title?: string
    created?: string
    updated?: string
    tag?: string[]
    author?: {
      name: string
      icon?: string
    }[]
  }>(),
  {
    title: '',
    created: '',
    updated: '',
    tag: () => [],
    author: () => [],
  }
)
const createdDate = useDateFormat(props.created || useNow(), 'YYYY-MM-DD')
const updatedDate = useDateFormat(props.updated || useNow(), 'YYYY-MM-DD')
</script>

<template>
  <NuxtLink
    :to="props.url"
    class="block rounded-lg border border-gray-100 bg-white p-3 transition-colors hover:border-primary-600"
  >
    <article class="flex flex-col justify-between gap-3">
      <h2 class="h-[3.5em] font-bold line-clamp-2">{{ props.title }}</h2>

      <div class="flex flex-wrap items-center justify-between gap-2">
        <dl
          v-if="props.created || props.updated || props.tag.length"
          class="grid gap-1 text-xs text-gray-500"
        >
          <div v-if="props.created" class="flex items-center gap-1">
            <dt>
              <CalendarDaysIcon class="h-3.5 w-3.5" aria-label="Posted on" />
            </dt>
            <dd>
              <time :datetime="createdDate">{{ createdDate }}</time>
            </dd>
          </div>
          <div v-else-if="props.updated" class="flex items-center gap-1">
            <dt class="translate-y-[0.1em]">
              <ArrowPathIcon class="h-3.5 w-3.5" aria-label="Updated on" />
            </dt>
            <dd>
              <time :datetime="updatedDate">{{ updatedDate }}</time>
            </dd>
          </div>

          <div v-if="props.tag.length" class="flex items-center gap-1">
            <dt>
              <TagIcon class="h-3.5 w-3.5" aria-label="Tag" />
            </dt>
            <dd>{{ props.tag.join(', ') }}</dd>
          </div>
        </dl>

        <ul v-if="props.author.length" class="flex gap-2">
          <li
            v-for="(item, index) in props.author"
            :key="index"
            class="aspect-square w-7 overflow-hidden rounded-full bg-gray-100"
          >
            <img
              v-if="item.icon"
              :src="item.icon"
              :alt="item.name"
              class="h-full w-full object-cover"
            />
          </li>
        </ul>
      </div>
    </article>
  </NuxtLink>
</template>
