export type ViewType = 'frequency' | 'sentiment' | 'political'

export interface NewsOutlet {
  id: string
  name: string
  shortName: string
  logo?: string
  totalArticles: number
}

export interface Topic {
  id: string
  name: string
  category: string
}

export interface FrequencyData {
  outletId: string
  topicId: string
  articleCount: number
  normalized: number // 0-1 scale relative to outlet's total output
}

export interface SentimentData {
  outletId: string
  topicId: string
  sentiment: number // -1 (very negative) to 1 (very positive)
  magnitude: number // 0-1 scale of how strong the sentiment is
}

export interface PoliticalData {
  outletId: string
  topicId: string
  bias: number // -1 (far left) to 1 (far right)
  magnitude: number // 0-1 scale of how strong the bias is
}

export interface JournalistData {
  id: string
  name: string
  outletId: string
  totalArticles: number
  topicCoverage: {
    topicId: string
    count: number
    sentiment: number
    bias: number
  }[]
}

export interface HeatmapCell {
  outletId: string
  topicId: string
  value: number // The primary value (-1 to 1)
  magnitude: number // 0-1 scale
  displayValue?: string
  tooltip?: string
}
