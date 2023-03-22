<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'
import { FaceFrownIcon } from '@heroicons/vue/24/outline'

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
  tag?: string[]
  author?: {
    name: string
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

const selectedAuthor = ref('全て')
const selectedTag = ref('全て')
const filteredData = computed(
  () =>
    data.value?.filter((article) => {
      // 著者で絞り込み
      const isAuthor: boolean =
        article.author?.some(
          (author) => author.name === selectedAuthor.value
        ) || selectedAuthor.value === '全て'
      // タグで絞り込み
      const isTag: boolean =
        article.tag?.some((tag) => tag === selectedTag.value) ||
        selectedTag.value === '全て'
      return isAuthor && isTag
    }) || []
)
</script>

<template>
  <div class="not-prose grid gap-6">
    <template v-if="props.filter">
      <ContentListHeader
        v-model:author="selectedAuthor"
        v-model:tag="selectedTag"
        :content="data || undefined"
      />
    </template>

    <template v-if="filteredData?.length">
      <ul class="grid grid-cols-fill-56 gap-6">
        <template v-for="item in filteredData" :key="item._path">
          <li v-if="item._path">
            <ContentListItem
              :url="item._path"
              :title="item.title"
              :created="item.created"
              :updated="item.updated"
              :tag="item.tag"
              :author="item.author"
            />
          </li>
        </template>
      </ul>
    </template>
    <template v-else>
      <div
        class="flex items-center justify-center gap-2 rounded border border-gray-100 px-2 py-6 text-sm"
      >
        <FaceFrownIcon class="h-5 w-5 translate-y-[0.5pt]" />
        <p>該当する項目がありません。</p>
      </div>
    </template>
  </div>
</template>
