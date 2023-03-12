<script setup lang="ts">
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
])
</script>

<template>
  <main
    class="m-auto box-content max-w-6xl px-4 pt-24 pb-10 md:px-6 md:pb-16 md:pt-36"
  >
    <h1 class="text-3xl font-bold">{{ page.title }}</h1>
    <div class="prose prose-sm mt-10 max-w-none md:prose-base md:mt-12">
      <slot />
    </div>
  </main>
</template>
