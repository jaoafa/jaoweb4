<script setup lang="ts">
const appConfig = useAppConfig()
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <ul class="grid-cols-fill-56 grid w-full gap-x-6 gap-y-12">
    <template v-for="item in appConfig.navigation" :key="item.label">
      <li class="flex flex-col items-start gap-3">
        <NuxtLink
          :to="item.to"
          :class="`
            ${'relative inline-flex items-center gap-3 pb-2 font-bold'}
            ${'after:bg-primary-600 after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:scale-y-100 after:transition-transform'}
            ${'hover:after:origin-left hover:after:scale-x-100'}
          `"
          @click="() => emit('click')"
        >
          <AppIcon size="22px">
            <component :is="item.icon" />
          </AppIcon>
          <span>{{ item.label }}</span>
        </NuxtLink>

        <ul v-if="item.children" class="flex flex-col gap-4">
          <template v-for="child in item.children" :key="child.label">
            <li class="flex flex-col gap-4">
              <NuxtLink
                :to="child.to || child.href"
                class="flex flex-col gap-1 transition-transform hover:translate-x-2"
                @click="() => emit('click')"
              >
                <span class="text-sm">{{ child.label }}</span>
                <p class="text-xs text-gray-400">{{ child.description }}</p>
              </NuxtLink>
            </li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
</template>
