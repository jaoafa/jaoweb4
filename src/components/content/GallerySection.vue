<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'

const props = withDefaults(
  defineProps<{ photos: { url: string; user: string }[] }>(),
  { photos: () => [] }
)

const isOpen = ref<boolean>(false)
const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
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
            @click="openModal"
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

  <TransitionRoot :show="isOpen" as="template" appear>
    <Dialog as="div" class="relative z-10" @close="closeModal">
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
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
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
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

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
