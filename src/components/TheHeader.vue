<script setup lang="ts">
const appConfig = useAppConfig()
const [open, toggle] = useToggle()
const { y } = useWindowScroll()
</script>

<template>
  <header
    :class="`
      ${'fixed top-0 z-40 w-full transition'}
      ${y > 0 ? 'bg-white/50 shadow-md backdrop-blur' : 'bg-transparent'}
    `"
  >
    <div class="m-auto box-content max-w-6xl py-3 px-4 md:py-4 md:px-6">
      <div class="flex items-center justify-between">
        <NuxtLink
          :title="appConfig.sitename"
          :aria-label="`${appConfig.sitename} toppage`"
          class="w-36 transition-opacity hover:opacity-60 md:w-48"
          to="/"
        >
          <AppLogo />
        </NuxtLink>

        <TheHeaderOverlay :value="open">
          <TheHeaderNav @click="() => (open = false)" />
        </TheHeaderOverlay>

        <button
          :class="`
            ${'relative h-9 w-9 overflow-hidden rounded-full md:h-12 md:w-12'}
            ${'hover:text-white'}
            ${'before:absolute before:top-1/2 before:left-1/2 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray-900 before:transition-size before:duration-300 before:ease-out'}
            ${'hover:before:h-[200%] hover:before:w-[200%]'}
            ${'[&>span]:absolute [&>span]:right-0 [&>span]:left-0 [&>span]:z-10 [&>span]:m-auto [&>span]:block [&>span]:h-0.5 [&>span]:bg-current [&>span]:duration-300 [&>span]:ease-in-out'}
            ${open ? 'open text-white before:h-[200%] before:w-[200%]' : ''}
          `"
          @click="() => toggle()"
        >
          <span :class="`${open ? 'top-1/2 w-0' : 'top-[35%] w-1/2'}`" />
          <span :class="`top-1/2 w-1/2 ${open ? 'rotate-45' : ''}`" />
          <span :class="`top-1/2 w-1/2 ${open ? '-rotate-45' : ''}`" />
          <span :class="`${open ? 'top-1/2 w-0' : 'top-[65%] w-1/2'}`" />
        </button>
      </div>
    </div>
  </header>
</template>
