import { NewsOutlet, Topic, FrequencyData, SentimentData, PoliticalData, TruthSpectrumData } from '@/types'

// Outlets ordered from left-leaning to right-leaning for visual clustering
export const outlets: NewsOutlet[] = [
  { id: 'guardian', name: 'The Guardian', shortName: 'Guardian', totalArticles: 4700 }, // -0.6 (left)
  { id: 'cnn', name: 'CNN', shortName: 'CNN', totalArticles: 6000 }, // -0.5
  { id: 'wapo', name: 'Washington Post', shortName: 'WaPo', totalArticles: 4800 }, // -0.4
  { id: 'npr', name: 'NPR', shortName: 'NPR', totalArticles: 4300 }, // -0.3
  { id: 'nyt', name: 'New York Times', shortName: 'NYT', totalArticles: 5000 }, // -0.3
  { id: 'politico', name: 'Politico', shortName: 'Politico', totalArticles: 3500 }, // -0.2
  { id: 'reuters', name: 'Reuters', shortName: 'Reuters', totalArticles: 5800 }, // 0 (center)
  { id: 'ap', name: 'Associated Press', shortName: 'AP', totalArticles: 6200 }, // 0
  { id: 'bbc', name: 'BBC', shortName: 'BBC', totalArticles: 5200 }, // 0
  { id: 'economist', name: 'The Economist', shortName: 'Economist', totalArticles: 2800 }, // 0.1
  { id: 'ft', name: 'Financial Times', shortName: 'FT', totalArticles: 3200 }, // 0.1
  { id: 'hill', name: 'The Hill', shortName: 'Hill', totalArticles: 4000 }, // 0.1
  { id: 'bloomberg', name: 'Bloomberg', shortName: 'Bloomberg', totalArticles: 5100 }, // 0.2
  { id: 'wsj', name: 'Wall Street Journal', shortName: 'WSJ', totalArticles: 4500 }, // 0.4
  { id: 'fox', name: 'Fox News', shortName: 'Fox', totalArticles: 5500 }, // 0.8 (right)
]

// 100 topics organized by category for natural clustering
export const topics: Topic[] = [
  // Politics & Government (15)
  { id: 'biden-admin', name: 'Biden Administration', category: 'Politics' },
  { id: 'congress', name: 'Congress', category: 'Politics' },
  { id: 'democracy', name: 'Democracy', category: 'Politics' },
  { id: 'elections', name: 'Elections', category: 'Politics' },
  { id: 'voting-rights', name: 'Voting Rights', category: 'Politics' },
  { id: 'supreme-court', name: 'Supreme Court', category: 'Politics' },
  { id: 'senate', name: 'Senate', category: 'Politics' },
  { id: 'house', name: 'House of Representatives', category: 'Politics' },
  { id: 'political-polls', name: 'Political Polling', category: 'Politics' },
  { id: 'campaign-finance', name: 'Campaign Finance', category: 'Politics' },
  { id: 'lobbying', name: 'Lobbying', category: 'Politics' },
  { id: 'government-spending', name: 'Government Spending', category: 'Politics' },
  { id: 'federal-budget', name: 'Federal Budget', category: 'Politics' },
  { id: 'state-politics', name: 'State Politics', category: 'Politics' },
  { id: 'local-government', name: 'Local Government', category: 'Politics' },

  // Economy & Business (12)
  { id: 'economy', name: 'Economy', category: 'Economy' },
  { id: 'stock-market', name: 'Stock Market', category: 'Economy' },
  { id: 'unemployment', name: 'Unemployment', category: 'Economy' },
  { id: 'inflation', name: 'Inflation', category: 'Economy' },
  { id: 'federal-reserve', name: 'Federal Reserve', category: 'Economy' },
  { id: 'interest-rates', name: 'Interest Rates', category: 'Economy' },
  { id: 'housing-market', name: 'Housing Market', category: 'Economy' },
  { id: 'corporate-earnings', name: 'Corporate Earnings', category: 'Economy' },
  { id: 'trade', name: 'Trade', category: 'Economy' },
  { id: 'small-business', name: 'Small Business', category: 'Economy' },
  { id: 'labor-unions', name: 'Labor Unions', category: 'Economy' },
  { id: 'wages', name: 'Wages', category: 'Economy' },

  // International Affairs (12)
  { id: 'foreign-policy', name: 'Foreign Policy', category: 'International' },
  { id: 'china-relations', name: 'China Relations', category: 'International' },
  { id: 'russia-ukraine', name: 'Russia-Ukraine', category: 'International' },
  { id: 'middle-east', name: 'Middle East', category: 'International' },
  { id: 'nato', name: 'NATO', category: 'International' },
  { id: 'israel-palestine', name: 'Israel-Palestine', category: 'International' },
  { id: 'iran', name: 'Iran', category: 'International' },
  { id: 'north-korea', name: 'North Korea', category: 'International' },
  { id: 'afghanistan', name: 'Afghanistan', category: 'International' },
  { id: 'european-union', name: 'European Union', category: 'International' },
  { id: 'global-terrorism', name: 'Global Terrorism', category: 'International' },
  { id: 'humanitarian-crisis', name: 'Humanitarian Crisis', category: 'International' },

  // Social Issues (12)
  { id: 'immigration', name: 'Immigration', category: 'Social' },
  { id: 'border-security', name: 'Border Security', category: 'Social' },
  { id: 'police-reform', name: 'Police Reform', category: 'Social' },
  { id: 'racial-justice', name: 'Racial Justice', category: 'Social' },
  { id: 'lgbtq-rights', name: 'LGBTQ Rights', category: 'Social' },
  { id: 'abortion', name: 'Abortion', category: 'Social' },
  { id: 'gun-control', name: 'Gun Control', category: 'Social' },
  { id: 'gun-rights', name: 'Gun Rights', category: 'Social' },
  { id: 'homelessness', name: 'Homelessness', category: 'Social' },
  { id: 'poverty', name: 'Poverty', category: 'Social' },
  { id: 'income-inequality', name: 'Income Inequality', category: 'Social' },
  { id: 'social-security', name: 'Social Security', category: 'Social' },

  // Environment & Climate (8)
  { id: 'climate-change', name: 'Climate Change', category: 'Environment' },
  { id: 'renewable-energy', name: 'Renewable Energy', category: 'Environment' },
  { id: 'fossil-fuels', name: 'Fossil Fuels', category: 'Environment' },
  { id: 'environmental-policy', name: 'Environmental Policy', category: 'Environment' },
  { id: 'natural-disasters', name: 'Natural Disasters', category: 'Environment' },
  { id: 'water-resources', name: 'Water Resources', category: 'Environment' },
  { id: 'conservation', name: 'Conservation', category: 'Environment' },
  { id: 'pollution', name: 'Pollution', category: 'Environment' },

  // Technology (10)
  { id: 'tech-industry', name: 'Tech Industry', category: 'Technology' },
  { id: 'artificial-intelligence', name: 'Artificial Intelligence', category: 'Technology' },
  { id: 'social-media', name: 'Social Media', category: 'Technology' },
  { id: 'cybersecurity', name: 'Cybersecurity', category: 'Technology' },
  { id: 'privacy', name: 'Privacy', category: 'Technology' },
  { id: 'big-tech', name: 'Big Tech', category: 'Technology' },
  { id: 'cryptocurrency', name: 'Cryptocurrency', category: 'Technology' },
  { id: 'space-exploration', name: 'Space Exploration', category: 'Technology' },
  { id: 'electric-vehicles', name: 'Electric Vehicles', category: 'Technology' },
  { id: 'tech-regulation', name: 'Tech Regulation', category: 'Technology' },

  // Healthcare (8)
  { id: 'healthcare', name: 'Healthcare', category: 'Healthcare' },
  { id: 'covid-19', name: 'COVID-19', category: 'Healthcare' },
  { id: 'vaccines', name: 'Vaccines', category: 'Healthcare' },
  { id: 'medicare', name: 'Medicare', category: 'Healthcare' },
  { id: 'medicaid', name: 'Medicaid', category: 'Healthcare' },
  { id: 'opioid-crisis', name: 'Opioid Crisis', category: 'Healthcare' },
  { id: 'mental-health', name: 'Mental Health', category: 'Healthcare' },
  { id: 'healthcare-costs', name: 'Healthcare Costs', category: 'Healthcare' },

  // Education (6)
  { id: 'education', name: 'Education', category: 'Education' },
  { id: 'public-schools', name: 'Public Schools', category: 'Education' },
  { id: 'higher-education', name: 'Higher Education', category: 'Education' },
  { id: 'student-debt', name: 'Student Debt', category: 'Education' },
  { id: 'critical-race-theory', name: 'Critical Race Theory', category: 'Education' },
  { id: 'school-choice', name: 'School Choice', category: 'Education' },

  // Justice & Legal (8)
  { id: 'crime', name: 'Crime', category: 'Justice' },
  { id: 'criminal-justice', name: 'Criminal Justice', category: 'Justice' },
  { id: 'mass-shootings', name: 'Mass Shootings', category: 'Justice' },
  { id: 'death-penalty', name: 'Death Penalty', category: 'Justice' },
  { id: 'prison-reform', name: 'Prison Reform', category: 'Justice' },
  { id: 'civil-rights', name: 'Civil Rights', category: 'Justice' },
  { id: 'legal-system', name: 'Legal System', category: 'Justice' },
  { id: 'corruption', name: 'Corruption', category: 'Justice' },

  // Media & Culture (9)
  { id: 'media-bias', name: 'Media Bias', category: 'Culture' },
  { id: 'free-speech', name: 'Free Speech', category: 'Culture' },
  { id: 'cancel-culture', name: 'Cancel Culture', category: 'Culture' },
  { id: 'misinformation', name: 'Misinformation', category: 'Culture' },
  { id: 'entertainment', name: 'Entertainment', category: 'Culture' },
  { id: 'sports', name: 'Sports', category: 'Culture' },
  { id: 'religion', name: 'Religion', category: 'Culture' },
  { id: 'cultural-issues', name: 'Cultural Issues', category: 'Culture' },
  { id: 'diversity', name: 'Diversity', category: 'Culture' },
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
