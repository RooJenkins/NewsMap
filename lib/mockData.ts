import { NewsOutlet, Topic, FrequencyData, SentimentData, PoliticalData, TruthSpectrumData } from '@/types'

export const outlets: NewsOutlet[] = [
  { id: 'nyt', name: 'New York Times', shortName: 'NYT', totalArticles: 5000 },
  { id: 'wsj', name: 'Wall Street Journal', shortName: 'WSJ', totalArticles: 4500 },
  { id: 'wapo', name: 'Washington Post', shortName: 'WaPo', totalArticles: 4800 },
  { id: 'cnn', name: 'CNN', shortName: 'CNN', totalArticles: 6000 },
  { id: 'fox', name: 'Fox News', shortName: 'Fox', totalArticles: 5500 },
  { id: 'bbc', name: 'BBC', shortName: 'BBC', totalArticles: 5200 },
  { id: 'guardian', name: 'The Guardian', shortName: 'Guardian', totalArticles: 4700 },
  { id: 'reuters', name: 'Reuters', shortName: 'Reuters', totalArticles: 5800 },
  { id: 'ap', name: 'Associated Press', shortName: 'AP', totalArticles: 6200 },
  { id: 'politico', name: 'Politico', shortName: 'Politico', totalArticles: 3500 },
  { id: 'hill', name: 'The Hill', shortName: 'Hill', totalArticles: 4000 },
  { id: 'npr', name: 'NPR', shortName: 'NPR', totalArticles: 4300 },
  { id: 'bloomberg', name: 'Bloomberg', shortName: 'Bloomberg', totalArticles: 5100 },
  { id: 'economist', name: 'The Economist', shortName: 'Economist', totalArticles: 2800 },
  { id: 'ft', name: 'Financial Times', shortName: 'FT', totalArticles: 3200 },
]

export const topics: Topic[] = [
  { id: 'biden-admin', name: 'Biden Administration', category: 'Politics' },
  { id: 'crime', name: 'Crime', category: 'Domestic' },
  { id: 'democracy', name: 'Democracy', category: 'Politics' },
  { id: 'education', name: 'Education', category: 'Domestic' },
  { id: 'elections', name: 'Elections', category: 'Politics' },
  { id: 'environment', name: 'Environment', category: 'Policy' },
  { id: 'foreign-policy', name: 'Foreign Policy', category: 'International' },
  { id: 'guns', name: 'Guns', category: 'Domestic' },
  { id: 'healthcare', name: 'Healthcare', category: 'Policy' },
  { id: 'immigration', name: 'Immigration', category: 'Policy' },
  { id: 'economy', name: 'Economy', category: 'Policy' },
  { id: 'tech', name: 'Technology', category: 'Business' },
]

// Generate frequency data based on realistic patterns
export const generateFrequencyData = (): FrequencyData[] => {
  const data: FrequencyData[] = []

  outlets.forEach(outlet => {
    topics.forEach(topic => {
      // Different outlets focus on different topics
      let baseCount = Math.random() * 300

      // NYT covers everything heavily
      if (outlet.id === 'nyt') baseCount *= 1.3

      // WSJ and Bloomberg focus more on economy and tech
      if ((outlet.id === 'wsj' || outlet.id === 'bloomberg') &&
          (topic.id === 'economy' || topic.id === 'tech')) {
        baseCount *= 1.8
      }

      // Fox and CNN focus heavily on politics
      if ((outlet.id === 'fox' || outlet.id === 'cnn') &&
          topic.category === 'Politics') {
        baseCount *= 1.6
      }

      // Politico focuses on politics
      if (outlet.id === 'politico' && topic.category === 'Politics') {
        baseCount *= 2
      }

      const articleCount = Math.floor(baseCount)
      const normalized = articleCount / outlet.totalArticles

      data.push({
        outletId: outlet.id,
        topicId: topic.id,
        articleCount,
        normalized
      })
    })
  })

  return data
}

// Generate sentiment data
export const generateSentimentData = (): SentimentData[] => {
  const data: SentimentData[] = []

  outlets.forEach(outlet => {
    topics.forEach(topic => {
      let sentiment = (Math.random() - 0.5) * 2 // -1 to 1

      // Fox tends more positive on certain topics
      if (outlet.id === 'fox' && topic.id === 'guns') sentiment = Math.abs(sentiment) * 0.7
      if (outlet.id === 'fox' && topic.id === 'biden-admin') sentiment = -Math.abs(sentiment) * 0.8

      // Guardian tends more negative on climate
      if (outlet.id === 'guardian' && topic.id === 'environment') sentiment = -Math.abs(sentiment) * 0.6

      // CNN tends negative on certain topics
      if (outlet.id === 'cnn' && topic.id === 'crime') sentiment = -Math.abs(sentiment) * 0.5

      const magnitude = Math.abs(sentiment)

      data.push({
        outletId: outlet.id,
        topicId: topic.id,
        sentiment,
        magnitude
      })
    })
  })

  return data
}

// Generate political bias data
export const generatePoliticalData = (): PoliticalData[] => {
  const data: PoliticalData[] = []

  // Define outlet political leanings
  const outletBias: Record<string, number> = {
    'nyt': -0.3,
    'wsj': 0.4,
    'wapo': -0.4,
    'cnn': -0.5,
    'fox': 0.8,
    'bbc': 0,
    'guardian': -0.6,
    'reuters': 0,
    'ap': 0,
    'politico': -0.2,
    'hill': 0.1,
    'npr': -0.3,
    'bloomberg': 0.2,
    'economist': 0.1,
    'ft': 0.1,
  }

  outlets.forEach(outlet => {
    topics.forEach(topic => {
      let bias = outletBias[outlet.id] || 0

      // Add topic-specific variation
      const variation = (Math.random() - 0.5) * 0.3
      bias += variation

      // Clamp to -1 to 1
      bias = Math.max(-1, Math.min(1, bias))

      const magnitude = Math.abs(bias)

      data.push({
        outletId: outlet.id,
        topicId: topic.id,
        bias,
        magnitude
      })
    })
  })

  return data
}

// Generate truth spectrum data showing outlet positions vs truth
export const generateTruthSpectrumData = (): TruthSpectrumData[] => {
  const data: TruthSpectrumData[] = []

  // Define where "truth" lies for each topic (-10 to 10 scale)
  // Negative = left-leaning truth, Positive = right-leaning truth
  const topicTruthPositions: Record<string, number> = {
    'biden-admin': -2,        // Slightly left of center
    'crime': 1,              // Slightly right (law and order)
    'democracy': 0,          // Center
    'education': -1,         // Slightly left
    'elections': 0,          // Center
    'environment': -3,       // Left-leaning (climate science)
    'foreign-policy': 0,     // Center
    'guns': 2,               // Slightly right
    'healthcare': -2,        // Slightly left
    'immigration': 0,        // Center (polarizing issue)
    'economy': 1,            // Slightly right
    'tech': 0,               // Center
  }

  // Define outlet baseline positions (-10 to 10)
  const outletPositions: Record<string, number> = {
    'nyt': -4,
    'wsj': 5,
    'wapo': -5,
    'cnn': -6,
    'fox': 8,
    'bbc': 0,
    'guardian': -7,
    'reuters': 0,
    'ap': 0,
    'politico': -2,
    'hill': 1,
    'npr': -3,
    'bloomberg': 2,
    'economist': 1,
    'ft': 1,
  }

  outlets.forEach(outlet => {
    topics.forEach(topic => {
      const basePosition = outletPositions[outlet.id] || 0
      const truthPos = topicTruthPositions[topic.id] || 0

      // Add some topic-specific variation to outlet position
      const variation = (Math.random() - 0.5) * 3
      const outletPos = Math.max(-10, Math.min(10, basePosition + variation))

      const distance = Math.abs(outletPos - truthPos)

      data.push({
        outletId: outlet.id,
        topicId: topic.id,
        outletPosition: Math.round(outletPos),
        truthPosition: truthPos,
        distanceFromTruth: distance
      })
    })
  })

  return data
}
