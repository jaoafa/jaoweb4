interface Request {
  roundTrip: number
}

interface Format {
  highlighting: number
  total: number
}

interface AfterFetch {
  format: Format
  total: number
}

interface ProcessingTimingsMs {
  afterFetch: AfterFetch
  request: Request
  total: number
}

interface RenderingContent {}

interface Exhaustive {
  nbHits: boolean
  typo: boolean
}

interface Heading {
  value: string
  matchLevel: string
  matchedWords: string[]
  fullyHighlighted?: boolean
}

interface Content {
  value: string
  matchLevel: string
  fullyHighlighted?: boolean
  matchedWords: string[]
}

interface Path {
  value: string
  matchLevel: string
  matchedWords: any[]
}

interface PageTitle {
  value: string
  matchLevel: string
  matchedWords: string[]
  fullyHighlighted?: boolean
}

interface HighlightResult {
  pageTitle?: PageTitle
  path: Path
  content: Content
  heading?: Heading
}

export interface AlgoliaSearchHit {
  pageTitle?: string
  path: string
  heading?: string
  content: string
  objectID: string
  _highlightResult: HighlightResult
}

export interface AlgoliaSearchResult {
  hits: AlgoliaSearchHit[]
  nbHits: number
  page: number
  nbPages: number
  hitsPerPage: number
  exhaustiveNbHits: boolean
  exhaustiveTypo: boolean
  exhaustive: Exhaustive
  query: string
  params: string
  renderingContent: RenderingContent
  processingTimeMS: number
  processingTimingsMS: ProcessingTimingsMs
  serverTimeMS: number
}
