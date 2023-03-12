<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <ul class="grid-cols-fill grid w-full grid-cols-fill-40 gap-x-8 gap-y-6">
    <template v-for="item in appConfig.navigation" :key="item.label">
      <li class="flex flex-col items-start gap-3">
        <NuxtLink
          :to="item.to"
          :class="`
            ${'relative pb-1 text-sm font-bold'}
            ${'after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:scale-y-100 after:bg-primary-600 after:transition-transform'}
            ${'hover:after:origin-left hover:after:scale-x-100'}
          `"
        >
          <span>{{ item.label }}</span>
        </NuxtLink>

        <ul v-if="item.children" class="flex flex-col gap-2">
          <template v-for="child in item.children" :key="child.label">
            <li>
              <NuxtLink
                :to="child.to || child.href"
                class="block text-xs transition-opacity hover:opacity-70"
              >
                <span>{{ child.label }}</span>
              </NuxtLink>
            </li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
</template>
