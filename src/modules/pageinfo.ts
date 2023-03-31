import { defineNuxtModule } from '@nuxt/kit'
import fs from 'node:fs'
import os from 'node:os'
import { DefaultLogFields, LogResult, SimpleGit, simpleGit } from 'simple-git'
import slugify from 'slugify'
import { withoutTrailingSlash, withLeadingSlash } from 'ufo'

/**
 * ドキュメントの種別
 */
enum DocsType {
  /** submodules として、src/content を設定している場合 */
  SUBMODULE = 'submodule',
  /** src/content に .git ディレクトリがある場合 */
  DOCSGIT = 'docsgit',
  /** プロジェクトルートに .git ディレクトリがある場合 */
  WEBGIT = 'webgit',
}

/**
 * コミッターの情報
 */
interface Author {
  /** コミッターの名前 */
  name: string
  /** コミッターのメールアドレス */
  email: string
}

/**
 * コミットの情報
 */
interface Commit {
  /** コミットのハッシュ */
  hash: string
  /** コミットの日付 */
  date: string
  /** コミットのメッセージ */
  message: string
  /** コミットしたコミッターの情報 */
  author: Author
}

/**
 * コミットの情報 (null 可)
 */
type NullableCommit = Commit | null

/**
 * ページの情報
 */
export interface PageInfo {
  path: string
  filePath: string
  firstCommit: NullableCommit
  latestCommit: NullableCommit
  contributors: Author[]
}

/**
 * ドキュメントの種別を判別する
 *
 * @returns ドキュメントの種別、判別できない場合は undefined
 */
function getDocsType(): DocsType | undefined {
  // submodule として、src/content を設定している場合
  if (fs.existsSync('.gitmodules')) {
    const gitmodules = fs.readFileSync('.gitmodules', 'utf-8')
    if (gitmodules.includes('[submodule "src/content"]')) {
      return DocsType.SUBMODULE
    }
  }
  // src/content に .git ディレクトリがある場合
  if (fs.existsSync('src/content/.git')) {
    return DocsType.DOCSGIT
  }
  // プロジェクトルートに .git ディレクトリがある場合
  if (fs.existsSync('.git')) {
    return DocsType.WEBGIT
  }
}

/**
 * Url のパスを整形する
 *
 * @see https://github.com/nuxt/content/blob/884f5d8260dd4c297abaa87bb6a60a355e03978d/src/runtime/transformers/path-meta.ts#L82
 * @param name Url のパス
 * @returns 整形された Url のパス
 */
export function refineUrlPart(name: string): string {
  name = name.split(/[/:]/).pop()!
  // Match 1, 1.2, 1.x, 1.2.x, 1.2.3.x,
  if (/^(\d+)(\.\d+)*(\.x)?$/.test(name)) {
    return name
  }

  return (
    name
      /**
       * Remove numbering
       */
      .replace(/(\d+\.)?(.*)/, '$2')
      /**
       * Remove index keyword
       */
      .replace(/^index(\.draft)?$/, '')
      /**
       * Remove draft keyword
       */
      .replace(/\.draft$/, '')
  )
}

/**
 * ページのパスを取得する
 *
 * @see https://github.com/nuxt/content/blob/884f5d8260dd4c297abaa87bb6a60a355e03978d/src/runtime/transformers/path-meta.ts#LL69
 *
 * @param path ページのファイルパス
 * @returns ページのパス
 */
function getPagePath(path: string) {
  path = path.replace('src/content', '')
  const forceLeadingSlash = false
  path = path
    .split('/')
    .map((part) => slugify(refineUrlPart(part), { lower: true }))
    .join('/')
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path
}

/**
 * ドキュメントの種別に応じた git リポジトリを取得する
 *
 * @param docsType ドキュメントの種別
 * @returns SimpleGit インスタンス
 */
function getGit(docsType: DocsType): SimpleGit {
  switch (docsType) {
    case DocsType.SUBMODULE:
    case DocsType.DOCSGIT:
      return simpleGit('src/content')
    case DocsType.WEBGIT:
      return simpleGit('.')
  }
}

/**
 * 再帰的にディレクトリを探索して、Markdown ファイルのパスを取得する
 *
 * @param directoryPath ディレクトリのパス
 * @returns Markdown ファイルのパスの配列
 */
function getMarkdownFiles(directoryPath: string) {
  const items = fs.readdirSync(directoryPath, { withFileTypes: true })
  const files = items
    .filter((item) => item.isFile())
    .filter((item) => item.name.endsWith('.md'))
    .map((item) => directoryPath + '/' + item.name)
  const directories = items
    .filter((item) => item.isDirectory())
    .map((item) => directoryPath + '/' + item.name)
  for (const directory of directories) {
    files.push(...getMarkdownFiles(directory))
  }
  return files
}

/**
 * Git のログを取得する
 *
 * @param docsType ドキュメントの種別
 * @param path ファイルパス
 * @returns Git のログ
 */
async function getGitLog(docsType: DocsType, path: string) {
  if (docsType === DocsType.SUBMODULE || docsType === DocsType.DOCSGIT) {
    path = path.replace(/^src\/content\//, '')
  }
  // find-renames=40% でファイル名変更を検出する
  const git = getGit(docsType)
  return await git.log({
    '--find-renames': '40%',
    file: path,
  })
}

/**
 * 最初のコミットを取得する
 *
 * @param log Git のログ
 * @returns 最初のコミット
 */
async function getFirstCommit(log: LogResult<DefaultLogFields>) {
  return log.all[log.all.length - 1]
}

/**
 * 最新のコミットを取得する
 *
 * @param log Git のログ
 * @returns 最新のコミット
 */
async function getLatestCommit(log: LogResult<DefaultLogFields>) {
  return log.latest
}

/**
 * ファイルのコントリビューターを取得する
 *
 * @param log Git のログ
 * @returns コントリビューターの配列
 */
async function getContributors(
  log: LogResult<DefaultLogFields>
): Promise<Author[]> {
  return log.all
    .map((commit) => {
      return {
        name: commit.author_name,
        email: commit.author_email,
      }
    })
    .filter((author, index, self) => {
      // username と email が同じものを除外する
      return (
        self.findIndex(
          (a) => a.name === author.name && a.email === author.email
        ) === index
      )
    })
}

/**
 * ページの情報を取得する
 *
 * @param docsType ドキュメントの種別
 * @param file ファイルパス
 * @returns ページの情報
 */
async function getPageInfo(docsType: DocsType, file: string) {
  const log = await getGitLog(docsType, file)
  const firstCommit = await getFirstCommit(log)
  const firstCommitRow: NullableCommit = firstCommit
    ? {
        hash: firstCommit.hash,
        date: firstCommit.date,
        message: firstCommit.message,
        author: {
          name: firstCommit.author_name,
          email: firstCommit.author_email,
        },
      }
    : null

  const latestCommit = await getLatestCommit(log)
  const latestCommitRow: NullableCommit = latestCommit
    ? {
        hash: latestCommit.hash,
        date: latestCommit.date,
        message: latestCommit.message,
        author: {
          name: latestCommit.author_name,
          email: latestCommit.author_email,
        },
      }
    : null

  const contributors = await getContributors(log)

  const pagePath = getPagePath(file)

  return {
    path: pagePath,
    filePath: file.replace('src/content/', ''),
    firstCommit: firstCommitRow,
    latestCommit: latestCommitRow,
    contributors,
  }
}

/**
 * ページの情報を取得し、JSON ファイルに保存する。
 * 保存した JSON ファイルは、server/plugins/pageinfo.ts で読み込まれる。
 */
export default defineNuxtModule({
  setup(_, nuxt) {
    const path = os.tmpdir() + '/pageinfos.json'

    // Nitro が初期化されたら、ページの情報を取得する
    nuxt.hook('nitro:init', async () => {
      const docsType = getDocsType()
      if (!docsType) {
        return
      }
      console.info(`[PageInfo] DocsType: ${docsType}`)

      const files = getMarkdownFiles('src/content')
      console.info(`[PageInfo] Markdown files: ${files.length}`)

      const git = getGit(docsType)
      const commitHash = await git.revparse(['HEAD'])
      console.info(`[PageInfo] Docs commit hash: ${commitHash}`)

      const pageData: PageInfo[] = await Promise.all(
        files.map((file) => getPageInfo(docsType, file))
      )

      fs.writeFileSync(path, JSON.stringify(pageData))
      console.info(`[PageInfo] Saved PageData to ${path}`)
    })

    // Nuxt が終了したら、一時ファイルを削除する
    nuxt.hook('close', async () => {
      if (!fs.existsSync(path)) {
        return
      }
      console.info(`[PageInfo] Deleted ${path}`)
      fs.unlinkSync(path)
    })
  },
})
