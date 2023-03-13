import { MarkdownRoot, ParsedContent } from '@nuxt/content/dist/runtime/types'

/**
 * <p><a>...</a></p> な要素を :content-embed{url="..."} に変換する
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
    const rootBody = result.body as MarkdownRoot
    const children = rootBody.children
    if (!children) {
      return
    }

    // <p><a>...</a></p> な要素を探す
    const urlParagraphs = children.filter(
      (child) =>
        child.type === 'element' &&
        child.tag === 'p' &&
        child.children &&
        child.children.length === 1 &&
        child.children[0].type === 'element' &&
        child.children[0].tag === 'a' &&
        child.children[0].children &&
        child.children[0].children.length === 1 &&
        child.children[0].children[0].type === 'text'
    )
    for (const paragraph of urlParagraphs) {
      const anchor = paragraph.children && paragraph.children[0]
      if (!anchor || !anchor.props || !anchor.props.href) {
        continue
      }
      const href = anchor.props.href
      const index = children.indexOf(paragraph)
      if (index === -1) {
        continue
      }
      children.splice(index, 1, {
        type: 'element',
        tag: 'content-embed',
        props: {
          url: href,
        },
      })
    }
  })
})
