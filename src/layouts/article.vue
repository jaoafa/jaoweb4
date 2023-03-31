<script setup lang="ts">
import {
  ArrowPathIcon,
  CalendarDaysIcon,
  TagIcon,
} from '@heroicons/vue/20/solid'

const { page } = useContent()
const { data: breadcrumb } = await useAsyncData('page-breadcrumb', () => {
  const items: string[] = page.value._path
    .split('/')
    .filter((item: string) => item)
    .reduce((prev: string[], current: string) => {
      if (prev.length) {
        return [...prev, `${prev[prev.length - 1]}/${current}`]
      } else {
        return [`/${current}`]
      }
    }, [])
  return queryContent()
    .where({ _path: { $in: items } })
    .only(['_path', 'title'])
    .sort({ _path: 1 })
    .find()
})
useServerSeoMeta({
  ogType: 'article',
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: breadcrumb.value?.map((item, index, arr) =>
      index === arr.length - 1
        ? { name: item.title }
        : { name: item.title, item: item._path }
    ),
  }),
  defineArticle({
    headline: page.value.title,
    author: page.value.author
      ? page.value.author.map((item: { name: string }) => ({
          name: item.name,
        }))
      : undefined,
    datePublished: page.value.created || undefined,
    dateModified: page.value.updated || undefined,
  }),
])
</script>

<template>
  <main
    class="m-auto box-content max-w-3xl px-4 pt-24 pb-10 md:px-6 md:pb-16 md:pt-36"
  >
    <article>
      <h1 class="text-3xl font-bold">{{ page.title }}</h1>
      <dl
        v-if="page.created || page.updated"
        class="mt-4 flex gap-5 text-xs text-gray-500"
      >
        <div v-if="page.created" class="inline-flex items-center gap-2">
          <dt>
            <CalendarDaysIcon
              class="h-3.5 w-3.5 translate-y-[0.1em]"
              aria-label="Posted on"
            />
          </dt>
          <dd>
            <time :datetime="useDateFormat(page.created, 'YYYY-MM-DD').value">
              {{
                useDateFormat(page.created, 'MMMM DD, YYYY', {
                  locales: 'en-US',
                }).value
              }}
            </time>
          </dd>
        </div>
        <div v-if="page.updated" class="inline-flex items-center gap-2">
          <dt>
            <ArrowPathIcon
              class="h-3.5 w-3.5 translate-y-[0.1em]"
              aria-label="Updated on"
            />
          </dt>
          <dd>
            <time :datetime="useDateFormat(page.updated, 'YYYY-MM-DD').value">
              {{
                useDateFormat(page.updated, 'MMMM DD, YYYY', {
                  locales: 'en-US',
                }).value
              }}
            </time>
          </dd>
        </div>
        <div v-if="page.tag" class="inline-flex items-center gap-2">
          <dt>
            <TagIcon class="h-3.5 w-3.5 translate-y-[0.1em]" aria-label="Tag" />
          </dt>
          <dd>{{ page.tag.join(', ') }}</dd>
        </div>
      </dl>
      <ul v-if="page.author" class="mt-5 flex flex-wrap gap-x-8 gap-y-4">
        <template v-for="(author, index) in page.author" :key="index">
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
      <div class="prose prose-sm mt-10 max-w-none md:prose-base md:mt-12">
        <slot />
      </div>
    </article>
  </main>
</template>
