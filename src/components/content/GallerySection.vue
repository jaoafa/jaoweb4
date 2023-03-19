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
          <ContentImage :src="photo.url">
            <span class="select-none text-sm"> 撮影者：{{ photo.user }} </span>
          </ContentImage>
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
