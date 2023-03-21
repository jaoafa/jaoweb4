<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import {
  CalendarDaysIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from '@heroicons/vue/20/solid'

const props = withDefaults(
  defineProps<{
    query: string[]
    filter?: boolean
  }>(),
  {
    filter: false,
  }
)

interface Article extends MarkdownParsedContent {
  created?: string
  updated?: string
  author?: {
    name?: string
    icon?: string
  }[]
}
const { data } = await useAsyncData(
  `content-list-${props.query.join('-')}`,
  () => {
    const [query, ...pathParts] = props.query
    return queryContent<Article>(query, ...pathParts)
      .where({ _dir: { $eq: pathParts[pathParts.length - 1] || query } })
      .sort({ created: -1 })
      .find()
  }
)
const authors = computed<{ id: number; name: string }[]>(() => [
  { id: 0, name: '全て' },
  ...new Set(
    data.value
      ?.map((article) => article.author?.map((item) => item.name || '') || [])
      .flat()
      .map((item, index) => ({ id: index + 1, name: item })) || []
  ),
])
const selectedAuthor = ref(authors.value[0])
const filteredData = computed(
  () =>
    data.value?.filter((article) => {
      // 著者で絞り込み
      const isAuthor: boolean =
        article.author?.some(
          (author) => author.name === selectedAuthor.value.name
        ) || selectedAuthor.value.name === '全て'
      return isAuthor
    }) || []
)
</script>

<template>
  <div class="not-prose grid gap-6">
    <div v-if="props.filter">
      <div class="relative z-10 w-40">
        <Listbox v-model="selectedAuthor">
          <div class="relative">
            <ListboxButton
              class="relative w-full rounded-2xl border border-gray-200 bg-gray-50 py-1 pl-3 pr-10 text-xs hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
            >
              <span class="flex items-center gap-2 truncate">
                <span>著者：</span>
                <span>{{ selectedAuthor.name }}</span>
              </span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                  class="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <Transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-gray-900 ring-opacity-5 focus:outline-none"
              >
                <ListboxOption
                  v-for="author in authors"
                  v-slot="{ active, selected }"
                  :key="author.id"
                  :value="author"
                  as="template"
                >
                  <li
                    :class="`
                      ${'relative cursor-pointer select-none py-2 pl-10 pr-4 text-gray-500 transition-colors'}
                      ${active ? 'bg-gray-50 text-gray-800' : ''}
                      ${selected ? 'text-gray-800' : ''}
                    `"
                  >
                    <span
                      :class="`
                        ${'block truncate'}
                        ${selected ? 'font-bold' : 'font-normal'}
                      `"
                    >
                      {{ author.name }}
                    </span>
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600"
                    >
                      <CheckIcon class="h-4 w-4" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>

    <ul v-if="filteredData?.length" class="grid grid-cols-fill-56 gap-6">
      <template v-for="item in filteredData" :key="item._path">
        <li
          class="rounded-lg border border-gray-100 bg-white p-3 transition-colors hover:border-primary-600"
        >
          <NuxtLink :to="item._path">
            <article class="flex h-full flex-col justify-between gap-3">
              <h2 class="h-[3.5em] font-bold line-clamp-2">
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
