<script setup lang="ts">
import { type SVGAttributes, type FunctionalComponent } from 'vue'
import IconFile from '@/assets/images/file.svg?component'
import IconPeople from '@/assets/images/people.svg?component'
import IconRocket from '@/assets/images/rocket.svg?component'
import IconSupport from '@/assets/images/support.svg?component'

const navigation: {
  label: string
  to?: string
  href?: string
  icon: FunctionalComponent<SVGAttributes, {}>
  children?: {
    label: string
    description: string
    to?: string
    href?: string
  }[]
}[] = [
  {
    label: 'はじめての方へ',
    to: '/guide',
    icon: IconRocket,
  },
  {
    label: 'ドキュメント',
    to: '/docs',
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
    icon: IconFile,
  },
  {
    label: 'コミュニティ',
    to: '/community',
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
    icon: IconPeople,
  },
  {
    label: 'サポート',
    to: '/support',
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
    icon: IconSupport,
  },
]
</script>

<template>
  <ul class="parent">
    <template v-for="item in navigation" :key="item.label">
      <li>
        <NuxtLink :to="item.to || item.href">
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
