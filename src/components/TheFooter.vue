<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <footer class="py-10">
    <div class="mx-auto box-content max-w-6xl px-4 md:px-6">
      <nav class="grid gap-16 pb-10 md:grid-cols-[auto_1fr] md:gap-32">
        <div class="flex flex-col items-start gap-8">
          <NuxtLink
            to="/"
            class="flex w-60 flex-col gap-4 text-inherit transition-opacity hover:opacity-70"
            :title="appConfig.sitename"
            :aria-label="`${appConfig.sitename} toppage`"
          >
            <AppLogo />
            <p class="px-0.5 text-xs">{{ appConfig.tagline }}</p>
          </NuxtLink>
          <TheFooterSocial />
        </div>

        <div class="flex flex-col items-start gap-8">
          <TheFooterNav />
        </div>
      </nav>
    </div>

    <div class="mx-auto box-content max-w-6xl px-4 md:px-6">
      <TheFooterCopyright />
    </div>
  </footer>
</template>
