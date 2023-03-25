<script setup lang="ts">
import { AlgoliaSearchResult, AlgoliaSearchHit } from '../types/algolia'

const route = useRoute()
const q = computed(() => route.query.q as string)

const { data } = (await useAsyncAlgoliaSearch({
  indexName: 'Main',
  query: q.value,
})) as {
  data: Ref<AlgoliaSearchResult>
}

const hits = computed(() =>
  data.value.hits.filter((hit, index, self) => {
    return self.findIndex((h) => h.path === hit.path) === index
  })
)

function getTitle(hit: AlgoliaSearchHit) {
  return hit._highlightResult.pageTitle?.value.replace(
    /<em>(.*?)<\/em>/g,
    '<mark>$1</mark>'
  )
}

function getContent(hit: AlgoliaSearchHit) {
  return hit._highlightResult.content.value.replace(
    /<em>(.*?)<\/em>/g,
    '<mark>$1</mark>'
  )
}

function getPath(hit: AlgoliaSearchHit) {
  return hit._highlightResult.path.value.replace(
    /<em>(.*?)<\/em>/g,
    '<mark>$1</mark>'
  )
}

function getUrl(hit: AlgoliaSearchHit) {
  return hit.path + (hit.heading ? '#' + hit.heading : '')
}

useServerSeoMeta({
  ogType: 'article',
  robots: {
    index: false,
    follow: false,
  },
})
</script>

<template>
  <main
    class="m-auto box-content max-w-3xl px-4 pt-24 pb-10 md:px-6 md:pb-16 md:pt-36"
  >
    <article v-if="data">
      <h1 class="mb-5 text-3xl font-bold">Search results for "{{ q }}"</h1>
      <div v-for="hit in hits" :key="hit.objectID">
        <a :href="getUrl(hit)">
          <div
            class="m-3 mx-auto rounded-lg border border-gray-400 bg-white py-4 px-2 hover:border-gray-500 hover:text-black sm:py-3 md:p-4"
          >
            <div role="presentation">
              <div>
                <div class="xs:pl-10 pl-12 md:pl-10">
                  <h2
                    class="hover:text-blue-600 mb-2 text-2xl font-bold leading-7"
                    v-html="getTitle(hit)"
                  ></h2>
                  <div
                    class="mb-2 p-1 text-sm text-gray-600"
                    v-html="getPath(hit)"
                  ></div>
                  <div class="mb-1 leading-6" v-html="getContent(hit)"></div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </article>
  </main>
</template>
