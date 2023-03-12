<script setup lang="ts">
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/vue/20/solid'

const props = withDefaults(
  defineProps<{
    type?: 'danger' | 'warning' | 'success' | 'info'
  }>(),
  {
    type: 'info',
  }
)
</script>

<template>
  <div
    :class="`
    ${'my-6 flex items-center gap-4 rounded-r border-l-4 bg-gray-50 px-4 py-1'}
    ${props.type === 'danger' ? 'border-l-danger' : ''}
    ${props.type === 'warning' ? 'border-l-warning' : ''}
    ${props.type === 'success' ? 'border-l-success' : ''}
    ${props.type === 'info' ? 'border-l-info' : ''}
  `"
  >
    <AppIcon size="24px">
      <component
        :is="
          props.type === 'danger'
            ? XCircleIcon
            : props.type === 'warning'
            ? ExclamationTriangleIcon
            : props.type === 'success'
            ? CheckCircleIcon
            : InformationCircleIcon
        "
        :class="`
          ${'translate-y-[0.1em]'}
          ${props.type === 'danger' ? 'text-danger' : ''}
          ${props.type === 'warning' ? 'text-warning' : ''}
          ${props.type === 'success' ? 'text-success' : ''}
          ${props.type === 'info' ? 'text-info' : ''}
        `"
      />
    </AppIcon>
    <div>
      <slot />
    </div>
  </div>
</template>
