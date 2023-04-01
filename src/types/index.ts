import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export type Article = MarkdownParsedContent & {
  /** 作成日 */
  created?: string | null
  /** 更新日 */
  updated?: string | null
  /** タグ */
  tag?: string[]
  /** 著者 */
  author?: {
    /** 著者名 */
    name: string
    /** アイコン画像URL */
    icon?: string
  }[]
}
