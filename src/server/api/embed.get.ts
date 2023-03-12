import parser from 'ogp-parser'

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

  const result = await parser(url)
  const siteName = getFirst(result.ogp['og:site_name'])
  const domain = new URL(url).hostname
  const siteIcon = `https://www.google.com/s2/favicons?domain=${domain}`
  const title = getFirst(result.ogp['og:title']) || result.title
  const description =
    getFirst(result.seo.description) || getFirst(result.ogp['og:description'])
  const image = getFirst(result.ogp['og:image'])
  const twitterCard =
    getFirst(result.seo['twitter:card']) || getFirst(result.ogp['twitter:card'])

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
})
