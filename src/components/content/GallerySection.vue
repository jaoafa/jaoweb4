<script setup lang="ts">
const props = withDefaults(
  defineProps<{ photos: { url: string; user: string }[] }>(),
  { photos: () => [] }
)
</script>

<template>
  <section class="section relative z-10">
    <div class="absolute z-0 h-full w-full -skew-y-6 bg-gray-800"></div>

    <div
      class="inner relative z-10 m-auto box-content max-w-6xl px-4 py-16 md:px-6 md:py-40"
    >
      <div class="grid grid-cols-3 gap-8">
        <template v-for="(photo, index) in props.photos" :key="index">
          <div
            class="grid aspect-video w-full transition-transform duration-200 hover:scale-105 hover:[&>div]:opacity-100"
          >
            <img
              :src="photo.url"
              :alt="`${photo.user}が撮影したMinecraftサーバ内の写真`"
              class="col-start-1 row-start-1 h-full w-full rounded-lg object-cover shadow-lg"
            />
            <div
              class="col-start-1 row-start-1 flex items-center justify-center bg-gray-800/60 p-4 opacity-0 transition-opacity duration-200"
            >
              <span class="select-none text-sm text-white">
                撮影者：{{ photo.user }}
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>

  <div class="spacer" />
</template>

<style lang="scss" scoped>
.section {
  margin-top: var(--skew-length);
  margin-bottom: var(--skew-length);
}

.spacer {
  min-height: calc(var(--skew-length) * -2);
}
</style>
