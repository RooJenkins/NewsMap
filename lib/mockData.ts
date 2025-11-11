import { NewsOutlet, Topic, FrequencyData, SentimentData, PoliticalData, TruthSpectrumData, TopicArticleData } from '@/types'
import { realNewsTopics } from './realNewsTopics'

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

// Export real news topics for interactive map
export { realNewsTopics }

// Legacy hierarchical topics for other views
export const topics: Topic[] = realNewsTopics

// Old topics (kept for reference but not exported)
const legacyTopics: Topic[] = [
  // Main category: Politics
  { id: 'politics', name: 'Politics', category: 'Main' },
  // Politics sub-topics
  { id: 'biden-admin', name: 'Biden Admin', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'congress', name: 'Congress', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'democracy', name: 'Democracy', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'elections', name: 'Elections', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'voting-rights', name: 'Voting Rights', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'supreme-court', name: 'Supreme Court', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'senate', name: 'Senate', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'house', name: 'House', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'political-polls', name: 'Polls', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'campaign-finance', name: 'Campaign Finance', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'lobbying', name: 'Lobbying', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'government-spending', name: 'Gov Spending', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'federal-budget', name: 'Fed Budget', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'state-politics', name: 'State Politics', category: 'Politics', isSubTopic: true, parentId: 'politics' },
  { id: 'local-government', name: 'Local Gov', category: 'Politics', isSubTopic: true, parentId: 'politics' },

  // Main category: Economy
  { id: 'economy-main', name: 'Economy', category: 'Main' },
  // Economy sub-topics
  { id: 'stock-market', name: 'Stock Market', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'unemployment', name: 'Unemployment', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'inflation', name: 'Inflation', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'federal-reserve', name: 'Fed Reserve', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'interest-rates', name: 'Interest Rates', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'housing-market', name: 'Housing', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'corporate-earnings', name: 'Corp Earnings', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'trade', name: 'Trade', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'small-business', name: 'Small Business', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'labor-unions', name: 'Labor Unions', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'wages', name: 'Wages', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },

  // Main category: International
  { id: 'international-main', name: 'International', category: 'Main' },
  // International sub-topics
  { id: 'foreign-policy', name: 'Foreign Policy', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'china-relations', name: 'China', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'russia-ukraine', name: 'Russia-Ukraine', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'middle-east', name: 'Middle East', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'nato', name: 'NATO', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'israel-palestine', name: 'Israel-Palestine', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'iran', name: 'Iran', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'north-korea', name: 'N. Korea', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'afghanistan', name: 'Afghanistan', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'european-union', name: 'EU', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'global-terrorism', name: 'Terrorism', category: 'International', isSubTopic: true, parentId: 'international-main' },
  { id: 'humanitarian-crisis', name: 'Humanitarian', category: 'International', isSubTopic: true, parentId: 'international-main' },

  // Main category: Social
  { id: 'social-main', name: 'Social Issues', category: 'Main' },
  // Social sub-topics
  { id: 'immigration', name: 'Immigration', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'border-security', name: 'Border', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'police-reform', name: 'Police Reform', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'racial-justice', name: 'Racial Justice', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'lgbtq-rights', name: 'LGBTQ', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'abortion', name: 'Abortion', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'gun-control', name: 'Gun Control', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'gun-rights', name: 'Gun Rights', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'homelessness', name: 'Homelessness', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'poverty', name: 'Poverty', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'income-inequality', name: 'Inequality', category: 'Social', isSubTopic: true, parentId: 'social-main' },
  { id: 'social-security', name: 'Social Security', category: 'Social', isSubTopic: true, parentId: 'social-main' },

  // Main category: Environment
  { id: 'environment-main', name: 'Environment', category: 'Main' },
  // Environment sub-topics
  { id: 'climate-change', name: 'Climate', category: 'Environment', isSubTopic: true, parentId: 'environment-main' },
  { id: 'renewable-energy', name: 'Renewables', category: 'Environment', isSubTopic: true, parentId: 'environment-main' },
  { id: 'fossil-fuels', name: 'Fossil Fuels', category: 'Environment', isSubTopic: true, parentId: 'environment-main' },
  { id: 'environmental-policy', name: 'Env Policy', category: 'Environment', isSubTopic: true, parentId: 'environment-main' },
  { id: 'natural-disasters', name: 'Disasters', category: 'Environment', isSubTopic: true, parentId: 'environment-main' },
  { id: 'water-resources', name: 'Water', category: 'Environment', isSubTopic: true, parentId: 'environment-main' },
  { id: 'conservation', name: 'Conservation', category: 'Environment', isSubTopic: true, parentId: 'environment-main' },
  { id: 'pollution', name: 'Pollution', category: 'Environment', isSubTopic: true, parentId: 'environment-main' },

  // Main category: Technology
  { id: 'technology-main', name: 'Technology', category: 'Main' },
  // Technology sub-topics
  { id: 'artificial-intelligence', name: 'AI', category: 'Technology', isSubTopic: true, parentId: 'technology-main' },
  { id: 'social-media', name: 'Social Media', category: 'Technology', isSubTopic: true, parentId: 'technology-main' },
  { id: 'cybersecurity', name: 'Cybersecurity', category: 'Technology', isSubTopic: true, parentId: 'technology-main' },
  { id: 'privacy', name: 'Privacy', category: 'Technology', isSubTopic: true, parentId: 'technology-main' },
  { id: 'big-tech', name: 'Big Tech', category: 'Technology', isSubTopic: true, parentId: 'technology-main' },
  { id: 'cryptocurrency', name: 'Crypto', category: 'Technology', isSubTopic: true, parentId: 'technology-main' },
  { id: 'space-exploration', name: 'Space', category: 'Technology', isSubTopic: true, parentId: 'technology-main' },
  { id: 'electric-vehicles', name: 'EVs', category: 'Technology', isSubTopic: true, parentId: 'technology-main' },
  { id: 'tech-regulation', name: 'Tech Regulation', category: 'Technology', isSubTopic: true, parentId: 'technology-main' },

  // Main category: Healthcare
  { id: 'healthcare-main', name: 'Healthcare', category: 'Main' },
  // Healthcare sub-topics
  { id: 'covid-19', name: 'COVID-19', category: 'Healthcare', isSubTopic: true, parentId: 'healthcare-main' },
  { id: 'vaccines', name: 'Vaccines', category: 'Healthcare', isSubTopic: true, parentId: 'healthcare-main' },
  { id: 'medicare', name: 'Medicare', category: 'Healthcare', isSubTopic: true, parentId: 'healthcare-main' },
  { id: 'medicaid', name: 'Medicaid', category: 'Healthcare', isSubTopic: true, parentId: 'healthcare-main' },
  { id: 'opioid-crisis', name: 'Opioids', category: 'Healthcare', isSubTopic: true, parentId: 'healthcare-main' },
  { id: 'mental-health', name: 'Mental Health', category: 'Healthcare', isSubTopic: true, parentId: 'healthcare-main' },
  { id: 'healthcare-costs', name: 'Costs', category: 'Healthcare', isSubTopic: true, parentId: 'healthcare-main' },

  // Main category: Education
  { id: 'education-main', name: 'Education', category: 'Main' },
  // Education sub-topics
  { id: 'public-schools', name: 'Public Schools', category: 'Education', isSubTopic: true, parentId: 'education-main' },
  { id: 'higher-education', name: 'Higher Ed', category: 'Education', isSubTopic: true, parentId: 'education-main' },
  { id: 'student-debt', name: 'Student Debt', category: 'Education', isSubTopic: true, parentId: 'education-main' },
  { id: 'critical-race-theory', name: 'CRT', category: 'Education', isSubTopic: true, parentId: 'education-main' },
  { id: 'school-choice', name: 'School Choice', category: 'Education', isSubTopic: true, parentId: 'education-main' },

  // Main category: Justice
  { id: 'justice-main', name: 'Justice', category: 'Main' },
  // Justice sub-topics
  { id: 'crime', name: 'Crime', category: 'Justice', isSubTopic: true, parentId: 'justice-main' },
  { id: 'criminal-justice', name: 'Criminal Justice', category: 'Justice', isSubTopic: true, parentId: 'justice-main' },
  { id: 'mass-shootings', name: 'Mass Shootings', category: 'Justice', isSubTopic: true, parentId: 'justice-main' },
  { id: 'death-penalty', name: 'Death Penalty', category: 'Justice', isSubTopic: true, parentId: 'justice-main' },
  { id: 'prison-reform', name: 'Prison Reform', category: 'Justice', isSubTopic: true, parentId: 'justice-main' },
  { id: 'civil-rights', name: 'Civil Rights', category: 'Justice', isSubTopic: true, parentId: 'justice-main' },
  { id: 'legal-system', name: 'Legal System', category: 'Justice', isSubTopic: true, parentId: 'justice-main' },
  { id: 'corruption', name: 'Corruption', category: 'Justice', isSubTopic: true, parentId: 'justice-main' },

  // Main category: Culture
  { id: 'culture-main', name: 'Culture', category: 'Main' },
  // Culture sub-topics
  { id: 'media-bias', name: 'Media Bias', category: 'Culture', isSubTopic: true, parentId: 'culture-main' },
  { id: 'free-speech', name: 'Free Speech', category: 'Culture', isSubTopic: true, parentId: 'culture-main' },
  { id: 'cancel-culture', name: 'Cancel Culture', category: 'Culture', isSubTopic: true, parentId: 'culture-main' },
  { id: 'misinformation', name: 'Misinformation', category: 'Culture', isSubTopic: true, parentId: 'culture-main' },
  { id: 'entertainment', name: 'Entertainment', category: 'Culture', isSubTopic: true, parentId: 'culture-main' },
  { id: 'sports', name: 'Sports', category: 'Culture', isSubTopic: true, parentId: 'culture-main' },
  { id: 'religion', name: 'Religion', category: 'Culture', isSubTopic: true, parentId: 'culture-main' },
  { id: 'cultural-issues', name: 'Cultural Issues', category: 'Culture', isSubTopic: true, parentId: 'culture-main' },
  { id: 'diversity', name: 'Diversity', category: 'Culture', isSubTopic: true, parentId: 'culture-main' },
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

// Generate topic article data with day-over-day tracking and outlet breakdown
export const generateTopicArticleData = (): TopicArticleData[] => {
  const data: TopicArticleData[] = []

  // Only generate data for sub-topics (not main categories)
  const subTopics = topics.filter(t => t.isSubTopic)

  // Outlet bias for realistic distribution
  const outletBias: Record<string, number> = {
    'nyt': -0.3, 'wsj': 0.4, 'wapo': -0.4, 'cnn': -0.5, 'fox': 0.8,
    'bbc': 0, 'guardian': -0.6, 'reuters': 0, 'ap': 0, 'politico': -0.2,
    'hill': 0.1, 'npr': -0.3, 'bloomberg': 0.2, 'economist': 0.1, 'ft': 0.1,
  }

  subTopics.forEach(topic => {
    // Assign realistic article counts based on story importance
    // Major breaking news: 600-850 articles
    // High-profile stories: 350-600 articles
    // Medium coverage: 150-350 articles
    // Standard coverage: 50-150 articles

    let todayCount: number

    // Major breaking news stories
    if (['govt-shutdown', 'trump-pardons', 'philippines-floods', 'typhoon-kalmaegi',
         'delhi-explosion', 'us-china-trade', 'ukraine-war'].includes(topic.id)) {
      todayCount = Math.floor(Math.random() * 250) + 600 // 600-850
    }
    // High-profile stories
    else if (['nyc-mayor-race', 'giuliani-pardon', 'israel-hamas', 'china-rare-earth',
              'russian-strikes', 'japan-female-pm', 'nasdaq-rally', 'amazon-gains',
              'hurricane-melissa', 'ovechkin-900', 'bbc-resignation'].includes(topic.id)) {
      todayCount = Math.floor(Math.random() * 250) + 350 // 350-600
    }
    // Medium coverage stories
    else if (['senate-deal', 'sudan-conflict', 'wendys-closures', 'housing-market',
              'climate-failure', 'ai-advances', 'cybersecurity', 'mlb-bribery'].includes(topic.id)) {
      todayCount = Math.floor(Math.random() * 200) + 150 // 150-350
    }
    // Standard coverage
    else {
      todayCount = Math.floor(Math.random() * 100) + 50 // 50-150
    }

    // Yesterday's count varies -30% to +30% from today
    const changeMultiplier = 0.7 + (Math.random() * 0.6) // 0.7 to 1.3
    const yesterdayCount = Math.floor(todayCount / changeMultiplier)

    // Calculate percentage change
    const changePercent = ((todayCount - yesterdayCount) / yesterdayCount) * 100

    // Generate outlet breakdown
    const outletBreakdown = outlets.map(outlet => {
      // Each outlet contributes proportionally to total count
      const outletContribution = Math.random() * 0.3 // 0-30% of total
      const count = Math.floor(todayCount * outletContribution)

      // Sentiment varies by outlet and topic
      let sentiment = (Math.random() - 0.5) * 2 // -1 to 1

      // Apply outlet-specific sentiment tendencies
      if (outlet.id === 'fox' && topic.id === 'biden-admin') sentiment = -Math.abs(sentiment) * 0.8
      if (outlet.id === 'cnn' && topic.id === 'biden-admin') sentiment = Math.abs(sentiment) * 0.6

      const bias = outletBias[outlet.id] || 0

      return {
        outletId: outlet.id,
        count,
        sentiment,
        bias
      }
    })

    data.push({
      topicId: topic.id,
      todayCount,
      yesterdayCount,
      changePercent,
      outletBreakdown
    })
  })

  return data
}
