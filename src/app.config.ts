// App Config
// https://nuxt.com/docs/guide/directory-structure/app-config

import { markRaw } from 'vue'
import IconFile from '@/assets/images/file.svg?component'
import IconPeople from '@/assets/images/people.svg?component'
import IconRocket from '@/assets/images/rocket.svg?component'
import IconSupport from '@/assets/images/support.svg?component'

export default defineAppConfig({
  sitename: 'jao Minecraft Server',
  sitedescription:
    'ここで爆発します、あなたの可能性が。jao Minecraft Server は、Java版Minecraftのクリエイティブサーバです。やべーやつらが独特で最高にイカしたコニュニティをつくっています。',
  tagline: 'ここで爆発します、あなたの可能性が。',
  navigation: [
    {
      label: 'はじめての方へ',
      to: '/guide',
      icon: markRaw(IconRocket),
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
      icon: markRaw(IconFile),
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
      icon: markRaw(IconPeople),
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
      icon: markRaw(IconSupport),
    },
  ],
  social: {
    discord: {
      header: 'https://discord.gg/7fvwYQDaQp',
      footer: 'https://discord.gg/zEGrApgGfB',
    },
    github: 'https://github.com/jaoafa',
    twitter: 'https://twitter.com/jaoafa',
    youtube: 'https://www.youtube.com/channel/UC92wyJyhqXEMiEROeFJKNKg',
  },
})
