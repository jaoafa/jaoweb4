<script setup lang="ts">
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
    <ul>
      <template v-for="item in data" :key="item._path">
        <li>
          <NuxtLink :to="item._path">
            <article>
              <h2>{{ item.title }}</h2>
              <p>
                {{
                  useDateFormat(item.created, 'MMMM DD, YYYY', {
                    locales: 'en-US',
                  }).value
                }}
              </p>
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
            </article>
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>
