<script setup lang="ts">
import { CalendarDaysIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  query: string[]
}>()
const { data } = await useAsyncData(
  `content-list-${props.query.join('-')}`,
  () => {
    const [query, ...pathParts] = props.query
    return queryContent(query, ...pathParts)
      .where({ _dir: { $eq: pathParts[pathParts.length - 1] } })
      .only(['_path', 'title', 'created', 'author'])
      .sort({ created: -1 })
      .find()
  }
)
</script>

<template>
  <div class="not-prose">
    <ul v-if="data?.length" class="grid-cols-fill-56 grid gap-6">
      <template v-for="item in data" :key="item._path">
        <li
          class="hover:border-primary-600 rounded-lg border border-gray-100 bg-white p-3 transition-colors"
        >
          <NuxtLink :to="item._path">
            <article class="flex h-full flex-col justify-between gap-3">
              <h2 class="line-clamp-2 h-[3.5em] font-bold">
                {{ item.title }}
              </h2>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <dl
                  v-if="item.created"
                  class="flex items-center gap-1 text-xs text-gray-500"
                >
                  <dt class="translate-y-[0.1em]" aria-label="Posted on">
                    <AppIcon size="12px">
                      <CalendarDaysIcon />
                    </AppIcon>
                  </dt>
                  <dd>
                    <time
                      :datetime="
                        useDateFormat(item.created, 'YYYY-MM-DD').value
                      "
                    >
                      {{
                        useDateFormat(item.created, 'MMMM DD, YYYY', {
                          locales: 'en-US',
                        }).value
                      }}
                    </time>
                  </dd>
                </dl>
                <ul class="flex flex-wrap gap-2">
                  <template v-for="(author, index) in item.author" :key="index">
                    <li
                      class="aspect-square w-7 overflow-hidden rounded-full bg-gray-100"
                    >
                      <img
                        v-if="author.icon"
                        :src="author.icon"
                        alt="icon"
                        class="h-full w-full object-cover"
                      />
                    </li>
                  </template>
                </ul>
              </div>
            </article>
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>
