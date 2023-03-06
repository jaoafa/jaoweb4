<script setup lang="ts">
const { page } = useContent()
useSchemaOrg([
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
      <slot />
    </article>
  </main>
</template>
