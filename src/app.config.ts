// App Config
// https://nuxt.com/docs/guide/directory-structure/app-config

import { markRaw } from 'vue'
import {
  CheckBadgeIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
  UsersIcon,
} from '@heroicons/vue/20/solid'

export default defineAppConfig({
  sitename: 'jao Minecraft Server',
  address: 'play.jaoafa.com',
  tagline: 'ここで爆発します、あなたの可能性が。',
  navigation: [
    {
      label: 'はじめての方へ',
      to: '/guide',
      icon: markRaw(RocketLaunchIcon),
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
          label: '利用規約',
          description: 'サービス利用時のルールをみる',
          to: '/docs/terms',
        },
        {
          label: 'ガイドライン',
          description: '一緒に楽しむためのガイドラインをみる',
          to: '/docs/guidelines',
        },
        {
          label: '運営方針',
          description: '運営チームが目指す方針をみる',
          to: '/docs/policies',
        },
      ],
      icon: markRaw(DocumentTextIcon),
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
      icon: markRaw(UsersIcon),
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
      icon: markRaw(CheckBadgeIcon),
    },
  ],
  social: {
    discord: {
      url: 'https://discord.gg/jaoafa',
    },
    github: {
      url: 'https://github.com/jaoafa',
    },
    twitter: {
      id: '@jaoafa',
      url: 'https://twitter.com/jaoafa',
    },
    youtube: {
      url: 'https://www.youtube.com/channel/UC92wyJyhqXEMiEROeFJKNKg',
    },
  },
  gtmId: 'GTM-58VVRGD',
})
