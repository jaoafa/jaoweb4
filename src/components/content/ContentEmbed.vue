<script setup lang="ts">
const props = defineProps<{
  url: string
}>()

const { data } = useFetch('/api/embed', {
  query: {
    url: props.url,
  },
})

const page = computed(() =>
  data.value && 'page' in data.value ? data.value.page : null
)
const site = computed(() =>
  data.value && 'site' in data.value ? data.value.site : null
)
</script>

<template>
  <template v-if="page && site">
    <a
      :href="props.url"
      target="_blank"
      rel="noopener noreferrer"
      class="not-prose my-6 flex h-32 items-center gap-6 overflow-hidden rounded-lg border border-gray-100 bg-white text-inherit no-underline transition-colors hover:bg-gray-50"
    >
      <div class="flex shrink grow flex-col gap-3 px-4 leading-none">
        <p class="font-bold">{{ page.title }}</p>
        <p class="line-clamp-2 text-xs text-gray-500">
          {{ page.description }}
        </p>
        <div class="flex items-center gap-1.5">
          <img
            :src="site.icon"
            :alt="`${site.domain} favicon`"
            class="h-4 w-4 shrink-0 grow-0 translate-y-0.5"
          />
          <span class="text-xs">{{ site.name }}</span>
        </div>
      </div>
      <div class="aspect-square h-full shrink-0 grow-0 md:aspect-video">
        <img
          :src="page.image"
          :alt="`${page.title} thumbnail`"
          class="h-full w-full object-cover"
        />
      </div>
    </a>
  </template>
  <template v-else>
    <p>
      <a :href="props.url">{{ props.url }}</a>
    </p>
  </template>
</template>
