<script setup lang="ts">
const props = defineProps<{
  url: string
}>()

const { data } = useFetch('/api/embed', {
  query: {
    url: props.url,
  },
})
</script>

<template>
  <a
    :href="props.url"
    target="_blank"
    rel="noopener noreferrer"
    class="no-underline"
  >
    <div v-if="data && data.page && data.site">
      <div class="flex w-full overflow-hidden rounded-lg shadow-lg">
        <div class="w-2/3 p-2 lg:p-4">
          <p class="text-1xl font-bold text-gray-900">
            {{ data.page.title }}
          </p>
          <p class="text-sm text-gray-700">
            {{ data.page.description }}
          </p>
          <div class="site-info flex items-center gap-2">
            <div>
              <img
                :src="data.site.icon"
                :alt="`${data.site.domain} favicon`"
                class="h-full w-full overflow-hidden bg-gray-100"
              />
            </div>
            <p class="text-sm text-gray-700">
              {{ data.site.name }}
            </p>
          </div>
        </div>
        <div v-if="data.page.image" class="w-1/3">
          <img
            :src="data.page.image"
            :alt="`${data.page.title} thumbnail`"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
    <div v-else>
      {{ props.url }}
    </div>
  </a>
</template>
