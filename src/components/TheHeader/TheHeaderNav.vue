<script setup lang="ts">
import { type FunctionalComponent, type SVGAttributes } from 'vue'
import { siDiscord, siGithub, siTwitter, siYoutube } from 'simple-icons'
import IconFile from '@/assets/images/file.svg?component'
import IconPeople from '@/assets/images/people.svg?component'
import IconRocket from '@/assets/images/rocket.svg?component'
import IconSupport from '@/assets/images/support.svg?component'

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
    icon: FunctionalComponent<SVGAttributes, {}>
  }[] => [
    { label: 'はじめての方へ', to: '/guide', icon: IconRocket },
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
)
</script>

<template>
  <TheHeaderNavWrapper :open="props.open">
    <nav class="container">
      <ul class="globalnav">
        <template v-for="(item, index) in navigation" :key="index">
          <li class="navitem">
            <template v-if="item.to">
              <NuxtLink :to="item.to" class="label">
                <LIcon size="20px" color="#fff">
                  <component :is="item.icon" />
                </LIcon>
                <span>{{ item.label }}</span>
              </NuxtLink>
            </template>
            <template v-else>
              <a :href="item.href" target="_blank" class="label">
                <LIcon size="20px" color="#fff">
                  <component :is="item.icon" />
                </LIcon>
                <span>{{ item.label }}</span>
              </a>
            </template>

            <ul v-if="item.children" class="sub">
              <template
                v-for="(childItem, childIndex) in item.children"
                :key="childIndex"
              >
                <li class="subitem">
                  <template v-if="childItem.to">
                    <NuxtLink :to="childItem.to">
                      <span class="subitemlabel">
                        {{ childItem.label }}
                      </span>
                      <p class="subitemdescription">
                        {{ childItem.description }}
                      </p>
                    </NuxtLink>
                  </template>
                  <template v-else>
                    <a :href="childItem.href" target="_blank">
                      <span class="subitemlabel">
                        {{ childItem.label }}
                      </span>
                      <p class="subitemdescription">
                        {{ childItem.description }}
                      </p>
                    </a>
                  </template>
                </li>
              </template>
            </ul>
          </li>
        </template>
      </ul>

      <div class="side">
        <div class="service">
          <div class="logo">
            <AppLogo />
          </div>
          <p class="lead">ここで爆発します、あなたの可能性が。</p>
        </div>
        <ul class="social">
          <li>
            <a href="http://discord.gg/7fvwYQDaQp" target="_blank">
              <LIcon size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path :d="siDiscord.path" />
                </svg>
              </LIcon>
            </a>
          </li>
          <li>
            <a href="https://github.com/jaoafa" target="_blank">
              <LIcon size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path :d="siGithub.path" />
                </svg>
              </LIcon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jaoafa" target="_blank">
              <LIcon size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path :d="siTwitter.path" />
                </svg>
              </LIcon>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC92wyJyhqXEMiEROeFJKNKg"
              target="_blank"
            >
              <LIcon size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path :d="siYoutube.path" />
                </svg>
              </LIcon>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </TheHeaderNavWrapper>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 120px;
}
.globalnav {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-row: 1;
  grid-column: 2;
  gap: 24px;
  list-style: none;
}
.navitem {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
.label {
  position: relative;
  display: inline-flex;
  gap: 12px;
  align-items: center;
  padding: 0 8px 2px 8px;
  font-size: rem(16);
  color: inherit;
  text-decoration: none;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    content: '';
    background-color: var(--primary);
    transition-duration: 0.2s;
    transition-property: transform;
    transform: scale(0, 1) translateY(200%);
    transform-origin: right center;
  }
  &:hover {
    &::after {
      transform: scale(1, 1) translateY(200%);
      transform-origin: left center;
    }
  }
}
.sub {
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
}
.subitem {
  a {
    display: block;
    padding: 8px;
    color: inherit;
    text-decoration: none;
  }
}
.subitemlabel {
  font-size: rem(16);
}
.subitemdescription {
  font-size: rem(12);
  opacity: 0.6;
}
.side {
  display: flex;
  flex-direction: column;
  grid-row: 1;
  grid-column: 1;
  gap: 32px;
  align-items: flex-start;
}
.service {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.logo {
  width: 240px;
}
.lead {
  font-size: rem(12);
}
.social {
  display: flex;
  gap: 24px;
  padding: 0 2px;
  list-style: none;

  a {
    color: currentcolor;
    transition-duration: 0.1s;
    transition-property: opacity;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
