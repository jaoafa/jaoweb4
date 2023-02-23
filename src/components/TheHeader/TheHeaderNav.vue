<script setup lang="ts">
export type TheHeaderNavProps = {
  /** ナビゲーションの表示状態を指定します */
  open: boolean
}
const props = withDefaults(defineProps<TheHeaderNavProps>(), {
  open: false,
})

const navigation = computed(
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
</script>

<template>
  <TheHeaderNavWrapper :open="props.open">
    <nav>
      <ul>
        <template v-for="(item, index) in navigation" :key="index">
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
    </nav>
  </TheHeaderNavWrapper>
</template>
