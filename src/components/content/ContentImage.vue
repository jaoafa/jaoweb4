<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'

const props = withDefaults(defineProps<{ src: string; alt?: string }>(), {
  alt: '',
})

const isModalOpen = ref<boolean>(false)
const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div
    class="grid aspect-video w-full cursor-pointer transition-transform duration-200 hover:scale-105 hover:[&>div]:opacity-100"
    @click="openModal"
  >
    <img
      :src="props.src"
      :alt="props.alt"
      class="col-start-1 row-start-1 h-full w-full rounded-lg object-cover shadow-lg"
    />
    <div
      class="col-start-1 row-start-1 flex items-center justify-center bg-gray-800/60 p-4 text-white opacity-0 transition-opacity duration-200"
    >
      <slot />
    </div>
  </div>

  <TransitionRoot :show="isModalOpen" as="template" appear>
    <Dialog as="div" class="relative z-50" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-900/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-screen-lg transform overflow-hidden rounded-2xl align-middle shadow-xl transition-all"
            >
              <img :src="props.src" :alt="props.alt" class="block" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
