<script setup lang="ts">
const navigation: {
  label: string
  to?: string
  href?: string
  children?: {
    label: string
    to?: string
    href?: string
  }[]
}[] = [
  {
    label: 'はじめての方へ',
    to: '/guide',
  },
  {
    label: 'ドキュメント',
    to: '/docs',
    children: [
      {
        label: 'サービス仕様',
        to: '/docs/spec',
      },
      {
        label: 'ガイドライン',
        to: '/docs/guidelines',
      },
      {
        label: '利用規約',
        to: '/docs/terms',
      },
      {
        label: '運営方針',
        to: '/docs/policies',
      },
    ],
  },
  {
    label: 'コミュニティ',
    to: '/community',
    children: [
      {
        label: 'ブログ',
        to: '/community/blog',
      },
      {
        label: 'お知らせ',
        to: '/community/news',
      },
      {
        label: 'wiki',
        href: 'https://wiki.jaoafa.com/',
      },
    ],
  },
  {
    label: 'サポート',
    to: '/support',
    children: [
      {
        label: 'お問い合わせ',
        to: '/support/inquiry',
      },
      {
        label: 'よくあるご質問',
        to: '/support/faq',
      },
      {
        label: '運営者情報',
        to: '/support/profiles',
      },
    ],
  },
]
</script>

<template>
  <ul class="parent">
    <template v-for="item in navigation" :key="item.label">
      <li>
        <NuxtLink :to="item.to || item.href">
          <span>{{ item.label }}</span>
        </NuxtLink>
        <ul v-if="item.children" class="child">
          <template v-for="child in item.children" :key="child.label">
            <li>
              <NuxtLink :to="child.to || child.href">
                <span>{{ child.label }}</span>
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
  grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  gap: 32px 24px;
  width: 100%;

  & > li {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;

    & > a {
      position: relative;
      padding-bottom: 4px;
      font-size: rem(15);
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
  gap: 8px;

  & > li > a {
    display: block;
    font-size: rem(13);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
