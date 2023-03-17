<script setup lang="ts">
const appConfig = useAppConfig()
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <nav class="grid gap-16 md:grid-cols-[auto_1fr] md:gap-32">
    <div class="flex flex-col items-start gap-8">
      <TheHeaderNavItems @click="() => emit('click')" />
    </div>

    <div class="flex flex-col items-start gap-8 md:col-start-1 md:row-start-1">
      <NuxtLink
        to="/"
        class="flex w-60 flex-col gap-4 transition-opacity hover:opacity-70"
        :title="appConfig.sitename"
        :aria-label="`${appConfig.sitename} toppage`"
        @click="() => emit('click')"
      >
        <AppLogo />
        <p class="px-0.5 text-xs">{{ appConfig.tagline }}</p>
      </NuxtLink>
      <SocialLinks @click="() => emit('click')" />
    </div>
  </nav>
</template>
