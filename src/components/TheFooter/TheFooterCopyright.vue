<script setup lang="ts">
const appConfig = useAppConfig()
const year = useDateFormat(useNow(), 'YYYY')
</script>

<template>
  <div class="copyright">
    <p>
      当Minecraftサーバは非公式なものであり、Mojang AB
      が提供・作成・承認したものではございません。また、当サーバはコミュニティ参加者の協力によって、非営利目的で運営を行っております。<br />
      Minecraftは、Mojang ABの商標です。
    </p>
    <p>&copy; 2016-{{ year }} {{ appConfig.sitename }}</p>
  </div>
</template>

<style lang="scss" scoped>
.copyright {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 40px;
  color: var(--text-muted);
  border-top: solid 1px currentcolor;

  p {
    font-size: rem(12);
  }
}
</style>
