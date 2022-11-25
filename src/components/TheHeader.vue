<script setup lang="ts">
import { siDiscord } from 'simple-icons/icons'

const navItems = computed(
  (): {
    label: string
    to?: string
    href?: string
    children?: {
      label: string
      description: string
      to?: string
      href?: string
    }[]
  }[] => [
    { label: 'はじめての方へ', to: '/guide' },
    {
      label: 'ドキュメント',
      children: [
        {
          label: 'サービス仕様',
          description: 'Minecraftサーバの仕様をみる',
          to: '/docs/spec',
        },
        {
          label: 'ガイドライン',
          description: '一緒に楽しむためのガイドラインをみる',
          to: '/docs/guidelines',
        },
        {
          label: '利用規約',
          description: 'サービス利用時のルールをみる',
          to: '/docs/terms',
        },
        {
          label: '運営方針',
          description: '運営チームが目指す方針をみる',
          to: '/docs/policies',
        },
      ],
    },
    {
      label: 'コミュニティ',
      children: [
        {
          label: 'ブログ',
          description: 'コミュニティの活動をみる',
          to: '/community/blog',
        },
        {
          label: 'お知らせ',
          description: '運営チームからのお知らせをみる',
          to: '/community/news',
        },
        {
          label: 'wiki',
          description: '最高にイカした百科事典をみる',
          href: 'https://wiki.jaoafa.com/',
        },
      ],
    },
    {
      label: 'サポート',
      children: [
        {
          label: 'お問い合わせ',
          description: '困ったときのお問合せ先をみる',
          to: '/support/inquiry',
        },
        {
          label: 'よくあるご質問',
          description: 'よくあるお困りごとの一覧をみる',
          to: '/support/faq',
        },
        {
          label: '運営者情報',
          description: '運営チームの情報をみる',
          to: '/support/profiles',
        },
      ],
    },
  ]
)

const showOverlayMenu = ref<boolean>(false)
</script>

<template>
  <header class="header">
    <LCenter max="var(--max)" gutters="var(--gutters)">
      <LCluster align-items="center" justify-content="space-between">
        <NuxtLink to="/" class="header__logo">
          <AppLogo />
        </NuxtLink>

        <nav
          :class="{ 'header__nav--active': showOverlayMenu }"
          class="header__nav"
        >
          <ul>
            <template v-for="(item, index) in navItems" :key="index">
              <li>
                <template v-if="item.to || item.href">
                  <template v-if="item.to">
                    <NuxtLink :to="item.to">
                      {{ item.label }}
                    </NuxtLink>
                  </template>
                  <template v-else>
                    <a :href="item.href" target="_blank">
                      {{ item.label }}
                    </a>
                  </template>
                </template>

                <template v-else>
                  <span>{{ item.label }}</span>
                  <ul>
                    <template
                      v-for="(childItem, childIndex) in item.children"
                      :key="childIndex"
                    >
                      <li>
                        <template v-if="childItem.to">
                          <NuxtLink :to="childItem.to">
                            <span>
                              {{ childItem.label }}
                            </span>
                            <p>
                              {{ childItem.description }}
                            </p>
                          </NuxtLink>
                        </template>
                        <template v-else>
                          <a :href="childItem.href" target="_blank">
                            <span>
                              {{ childItem.label }}
                            </span>
                            <p>
                              {{ childItem.description }}
                            </p>
                          </a>
                        </template>
                      </li>
                    </template>
                  </ul>
                </template>
              </li>
            </template>
          </ul>

          <div class="header__actions">
            <LCluster space="16px">
              <LIcon size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path :d="siDiscord.path" />
                </svg>
              </LIcon>
              <LIcon size="20px">
                <template v-if="$colorMode.value === 'light'">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      d="M24 31q2.9 0 4.95-2.05Q31 26.9 31 24q0-2.9-2.05-4.95Q26.9 17 24 17q-2.9 0-4.95 2.05Q17 21.1 17 24q0 2.9 2.05 4.95Q21.1 31 24 31Zm0 3q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425ZM24 24Z"
                    />
                  </svg>
                </template>
                <template v-if="$colorMode.value === 'dark'">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z"
                    />
                  </svg>
                </template>
              </LIcon>
            </LCluster>
          </div>
        </nav>

        <button
          :class="{ 'header__button--active': showOverlayMenu }"
          class="header__button"
          type="button"
          @click="showOverlayMenu = !showOverlayMenu"
        />
      </LCluster>
    </LCenter>
  </header>
</template>

<style lang="scss" scoped>
.header {
  --header: #{$size-height-header-md};
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--bg);

  @include bp(md) {
    --header: #{$size-height-header-lg};
  }

  &--dense {
    --header: #{$size-height-header-sm};

    @include bp(md) {
      --header: #{$size-height-header-md};
    }
  }
}
.header__logo {
  display: flex;
  align-items: center;
  width: calc(var(--header) * 2);
  height: var(--header);
  color: inherit;
  transition: opacity, width, height 0.1s;

  &:hover {
    opacity: 0.8;
  }
}
.header__nav {
  position: fixed;
  top: var(--header);
  left: 0;
  display: grid;
  width: 100%;
  height: calc(100vh - var(--header));
  overflow: auto;
  overscroll-behavior: contain;
  pointer-events: none;
  background-color: var(--bg);
  opacity: 0;
  transition-duration: 0.2s;
  transition-property: opacity, transform;
  transform: translateX(40px);

  @include bp(md) {
    position: static;
    width: auto;
    height: auto;
    pointer-events: auto;
    opacity: 1;
    transition-property: none;
    transform: none;
  }

  &--active {
    pointer-events: auto;
    opacity: 1;
    transform: translateX(0);
  }
}
.header__actions {
  color: var(--text-muted);
}
.header__button {
  position: relative;
  width: var(--header);
  height: var(--header);
  padding: 0;
  margin-right: calc(var(--gutters) * (-1));
  color: inherit;
  cursor: pointer;
  background-color: transparent;
  border: none;

  @include bp(md) {
    display: none;
  }

  &::before,
  &::after {
    position: absolute;
    left: 30%;
    display: block;
    height: 2px;
    content: '';
    background-color: currentcolor;
    border-radius: 2px;
    transition-duration: 0.2s;
    transition-property: top, width, transform;
  }
  &::before {
    top: 44%;
    width: 40%;
  }
  &::after {
    top: 56%;
    width: 24%;
  }

  &--active {
    &::before {
      top: 50%;
      transform: rotate(-45deg);
    }
    &::after {
      top: 50%;
      width: 40%;
      transform: rotate(45deg);
    }
  }
}
</style>
