import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import fs from 'node:fs'
import os from 'node:os'
import { PageInfo } from '../../modules/pageinfo'

/**
 * Git log を元に作成・更新日時などを設定する
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (result: ParsedContent) => {
    if (!result._id.endsWith('.md')) {
      return
    }
    if (!result.body) {
      return
    }

    if (result.body.type !== 'root') {
      return
    }

    const path = os.tmpdir() + '/pageinfos.json'
    if (!fs.existsSync(path)) {
      return
    }

    const pageInfos = fs.readFileSync(os.tmpdir() + '/pageinfos.json', 'utf-8')
    const pageInfo: PageInfo = JSON.parse(pageInfos).find(
      (pageInfo: PageInfo) => pageInfo.filePath === result._file
    )

    if (!pageInfo) {
      console.warn(
        `[PageInfo] PageInfo corresponding to ${result._file} was not found.`
      )
      return
    }

    // すでに Markdown front matter で設定されている場合は上書きしない

    // front matter の型定義はあるのだろうか？

    // 作成日時
    if (!result.created && pageInfo.firstCommit) {
      result.created = pageInfo.firstCommit.date
    }
    // 更新日時
    if (!result.updated && pageInfo.latestCommit) {
      result.updated = pageInfo.latestCommit.date
    }
    // コントリビューター
    if (!result.contributors) {
      result.contributors = pageInfo.contributors
    }
  })
})
