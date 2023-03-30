<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

interface Article extends MarkdownParsedContent {
  tag?: string[]
  author?: {
    name: string
    icon?: string
  }[]
}
const props = withDefaults(
  defineProps<{
    content?: Article[]
    enableAuthor?: boolean
    enableTag?: boolean
    author?: string
    tag?: string
  }>(),
  {
    content: () => [],
    enableAuthor: false,
    enableTag: false,
    author: '全て',
    tag: '全て',
  }
)
const emit = defineEmits<{
  (e: 'update:author', val: Required<Article>['author'][number]['name']): void
  (e: 'update:tag', val: Required<Article>['tag'][number]): void
}>()

// 著者
const authors = computed<{ id: number; name: string }[]>(() =>
  [
    '全て',
    ...new Set(
      props.content
        .map((article) => article.author?.map((item) => item.name) || [])
        .flat() || []
    ),
  ].map((item, index) => ({ id: index, name: item }))
)
const modelAuthor = computed({
  get: () =>
    authors.value.find((item) => item.name === props.author) ||
    authors.value[0],
  set: (val) => emit('update:author', val.name),
})

// タグ
const tags = computed<{ id: number; name: string }[]>(() =>
  [
    '全て',
    ...new Set(props.content.map((article) => article.tag || []).flat() || []),
  ].map((item, index) => ({ id: index, name: item }))
)
const modelTag = computed({
  get: () =>
    tags.value.find((item) => item.name === props.tag) || tags.value[0],
  set: (val) => emit('update:tag', val.name),
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Listbox v-if="enableAuthor" v-model="modelAuthor">
      <div class="relative w-40">
        <ListboxButton
          class="relative w-full rounded-2xl border border-gray-200 bg-gray-50 py-1 pl-3 pr-10 text-xs hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
        >
          <span class="flex items-center gap-2 truncate">
            <span>著者：</span>
            <span>{{ modelAuthor.name }}</span>
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
            class="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-gray-900 ring-opacity-5 focus:outline-none"
          >
            <ListboxOption
              v-for="item in authors"
              v-slot="{ active, selected }"
              :key="item.id"
              :value="item"
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
                  {{ item.name }}
                </span>
                <span
                  v-show="selected"
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

    <Listbox v-if="enableTag" v-model="modelTag">
      <div class="relative z-10 w-40">
        <ListboxButton
          class="relative w-full rounded-2xl border border-gray-200 bg-gray-50 py-1 pl-3 pr-10 text-xs hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
        >
          <span class="flex items-center gap-2 truncate">
            <span>タグ：</span>
            <span>{{ modelTag.name }}</span>
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
              v-for="item in tags"
              v-slot="{ active, selected }"
              :key="item.id"
              :value="item"
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
                  {{ item.name }}
                </span>
                <span
                  v-show="selected"
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
</template>
