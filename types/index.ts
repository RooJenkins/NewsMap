export type ViewType = 'frequency' | 'sentiment' | 'political' | 'truth-spectrum' | 'treemap' | 'interactive-map'

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
  isSubTopic?: boolean
  parentId?: string
}

export interface TopicArticleData {
  topicId: string
  todayCount: number
  yesterdayCount: number
  changePercent: number
  isBreaking?: boolean
  outletBreakdown: {
    outletId: string
    count: number
    sentiment: number
    bias: number
  }[]
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

export interface TruthSpectrumData {
  outletId: string
  topicId: string
  outletPosition: number // -10 to 10 scale representing outlet's bias on this topic
  truthPosition: number // -10 to 10 scale representing where objective truth lies
  distanceFromTruth: number // absolute distance from truth
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
  value: number // The primary value (-1 to 1 or -10 to 10 for truth spectrum)
  magnitude: number // 0-1 scale
  displayValue?: string
  tooltip?: string
  truthPosition?: number // For truth spectrum view
  distanceFromTruth?: number // For truth spectrum view
}
