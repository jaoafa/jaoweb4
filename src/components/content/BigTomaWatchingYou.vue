<script setup lang="ts">
const isHovered = ref<boolean>(false)
</script>

<template>
  <div class="watching bg-gray-50">
    <div class="m-auto box-content flex max-w-6xl justify-center">
      <div
        :class="`
          ${'w-1/2 -rotate-6 transition-transform md:w-1/3'}
          ${isHovered ? 'translate-y-32' : ''}
        `"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.82 500.02">
          <path
            d="m252.3,0l-41.13,37.91c-22.86,21.14-44.69,43.89-70.43,61.58l-4.02,2.76c-17.92,12.52-50.44,29.53-72.04,49.4C25.16,188.07,0,235.06,0,292.97c0,125.92,133.5,208.41,248.62,207.03,44.69-.57,105.12-12.64,157.28-48.94,48.02-33.43,88.47-84.56,88.92-156.48,0-39.87-10.57-75.48-32.63-105.7-24.01-33.2-59.74-58.94-59.74-58.94L252.3,0Z"
            style="fill: #e74c3c"
            @mouseover="() => (isHovered = true)"
            @mouseleave="() => (isHovered = false)"
          />
          <path
            d="m252.3,0l-48.94,45.15c-1.84,1.72-2.64,7.12-3.33,9.42-2.62,7.87-4.62,15.94-5.97,24.13-3.79,21.83-3.33,45.61,7.01,65.72,14.71,28.49,47.79,42.51,78.47,45.04,36.65,2.99,77.44-14.71,103.98-39.52,6.55-6.2,13.21-13.1,17.81-21.02L252.3,0Z"
            style="fill: #f1c40f"
            class="pointer-events-none"
          />
          <path
            d="m124.08,161.88c-27.69.46-45.61,25.05-51.82,49.86s2.07,59.4,25.28,73.87c14.25,8.96,33.09,7.93,47.45,0s22.86-21.14,27.23-35.85c0-.23.11-.34.11-.46,7.47-25.97,3.1-61.7-20.11-78.58-8.03-5.87-17.74-8.97-27.69-8.85h-.46.01Z"
            style="fill: #36393f"
            class="pointer-events-none"
          />
          <path
            d="m130.74,181.3c-4.85.04-9.53,1.79-13.21,4.94-6.09,5.17-9.88,12.64-12.29,20.11-.34.92-.57,1.95-.92,2.87-4.14,15.51,1.15,35.62,15.17,44.46,15.85,10.11,31.14-6.2,36.08-20.22.83-2.6,1.48-5.24,1.95-7.93,2.18-14.25-3.1-34.12-16.54-41.7-3.11-1.77-6.65-2.65-10.23-2.53h-.01Z"
            style="fill: #fff"
            class="pointer-events-none"
          />
          <path
            d="m386.37,169.92c-7.95-.13-15.81,1.73-22.86,5.4-13.56,7.24-22.4,20.68-27,35.04-.46,1.38-.8,2.76-1.15,4.14-7.01,26.65-.57,61.93,23.9,78.47,13.9,9.31,32.63,8.85,46.76.46s21.83-21.6,26.65-35.85l1.03-3.56c7.47-25.74-.57-59.86-23.09-76.29-7.07-5.07-15.54-7.8-24.24-7.81h0Z"
            style="fill: #36393f"
            class="pointer-events-none"
          />
          <path
            d="m376.49,189.22c-4.85.13-9.51,1.91-13.21,5.06-6.09,5.06-9.88,12.64-12.29,19.99-.34,1.03-.69,2.07-.92,2.99-4.14,15.4,1.15,35.62,15.17,44.46,15.85,10.11,31.14-6.2,35.96-20.22.92-2.57,1.57-5.23,1.95-7.93,2.3-14.25-2.99-34.12-16.43-41.7-3.12-1.76-6.64-2.67-10.23-2.64h0Z"
            style="fill: #fff"
            class="pointer-events-none"
          />
          <path
            d="m189.22,286.19s-63.88,29.87-17.46,74.1c50.9,32.74,78.47-14.71,78.47-14.71,0,0,28.03,56.87,81.69,16.54,42.62-49.75-24.82-72.95-24.82-72.95,0,0,58.71,43.43-5.97,69.62-33.2,6.2-49.29-43.54-49.29-43.54,0,0-18.27,60.55-65.49,33.09-40.56-26.19,2.87-62.16,2.87-62.16h0Z"
            style="fill: #36393f"
            class="pointer-events-none"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.watching {
  min-height: calc(var(--skew-length) * -2);
}
</style>
