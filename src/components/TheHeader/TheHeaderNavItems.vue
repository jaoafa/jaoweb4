<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <ul class="parent">
    <template v-for="item in appConfig.navigation" :key="item.label">
      <li>
        <NuxtLink :to="item.to">
          <LIcon size="24px">
            <component :is="item.icon" />
          </LIcon>
          <span>{{ item.label }}</span>
        </NuxtLink>
        <ul v-if="item.children" class="child">
          <template v-for="child in item.children" :key="child.label">
            <li>
              <NuxtLink :to="child.to || child.href">
                <span>{{ child.label }}</span>
                <p>{{ child.description }}</p>
              </NuxtLink>
            </li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
.parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  gap: 56px 24px;
  width: 100%;

  & > li {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;

    & > a {
      position: relative;
      display: inline-flex;
      gap: 12px;
      align-items: center;
      padding-bottom: 8px;
      font-size: rem(17);
      font-weight: bold;

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        content: '';
        background-color: var(--primary);
        transition: transform 0.2s;
        transform: scale(0, 1);
        transform-origin: right center;
      }
      &:hover::after {
        transform: scale(1, 1);
        transform-origin: left center;
      }
    }
  }
}
.child {
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > li > a {
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(8px);
    }

    span {
      font-size: rem(16);
    }
    p {
      font-size: rem(12);
      opacity: 0.7;
    }
  }
}
</style>
