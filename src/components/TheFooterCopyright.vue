<script setup lang="ts">
const appConfig = useAppConfig()
const year = useDateFormat(useNow(), 'YYYY')
</script>

<template>
  <div class="flex flex-col gap-6 border-t border-gray-400 pt-10">
    <p class="text-xs text-gray-400">
      当Minecraftサーバは非公式なものであり、Mojang AB
      が提供・作成・承認したものではございません。また、当サーバはコミュニティ参加者の協力によって、非営利目的で運営を行っております。<br />
      Minecraftは、Mojang ABの商標です。
    </p>
    <p class="flex gap-2 text-xs text-gray-400">
      <span>&copy;</span>
      <span>2016-{{ year }}</span>
      <span>{{ appConfig.sitename }}</span>
    </p>
  </div>
</template>
