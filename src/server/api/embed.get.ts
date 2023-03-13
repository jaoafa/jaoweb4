import { CheerioAPI, load } from 'cheerio'

interface MetaItems {
  [key: string]: string[]
}

interface PageMeta {
  pageTitle: string
  ogp: MetaItems
  seo: MetaItems
}

async function getHTML(url: string): Promise<string> {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.status}`)
    }
    return await res.text()
  } catch (error) {
    throw new Error(`Failed to fetch ${url}: ${JSON.stringify(error)}`)
  }
}

function getPageMeta($: CheerioAPI): PageMeta {
  const title = $('title').text()

  const meta = $('head meta')
  const ogp: MetaItems = {}
  const seo: MetaItems = {}
  for (let i = 0; i < meta.length; i++) {
    const element = meta[i]
    const isOgp = 'property' in element.attribs
    const isSeo = 'name' in element.attribs

    if (isOgp) {
      const key = element.attribs.property
      const value = element.attribs.content
      ogp[key] = ogp[key] || []
      ogp[key].push(value)
    } else if (isSeo) {
      const key = element.attribs.name
      const value = element.attribs.content
      seo[key] = seo[key] || []
      seo[key].push(value)
    }
  }
  return {
    pageTitle: title,
    ogp,
    seo,
  }
}

function getFirst<T>(array: T[] | undefined): T | undefined {
  if (!array) {
    return undefined
  }
  return array[0]
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url
  if (!url) {
    return { error: 'url is required' }
  }
  if (typeof url !== 'string' || !url.startsWith('http')) {
    return { error: 'url is invalid' }
  }

  try {
    const html = await getHTML(url)
    const $ = load(html)
    const result = getPageMeta($)

    const siteName = getFirst(result.ogp['og:site_name'])
    const domain = new URL(url).hostname
    const siteIcon = `https://www.google.com/s2/favicons?domain=${domain}`
    const title = getFirst(result.ogp['og:title']) || result.pageTitle
    const description =
      getFirst(result.seo.description) || getFirst(result.ogp['og:description'])
    const image = getFirst(result.ogp['og:image'])
    const twitterCard =
      getFirst(result.seo['twitter:card']) ||
      getFirst(result.ogp['twitter:card'])

    return {
      site: {
        name: siteName,
        icon: siteIcon,
        domain,
      },
      page: {
        title,
        description,
        image,
        twitterCard,
      },
    }
  } catch (error) {
    return { error: (error as Error).message || 'Unknown error' }
  }
})
