import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface NewsArticle {
  title: string
  link: string
  pubDate: string
  source: string
  description?: string
  guid?: string
}

// Google News Topic IDs (these are the actual Google News topic identifiers)
const GOOGLE_NEWS_TOPICS = {
  WORLD: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB',
  US: 'CAAqIggKIhxDQkFTRHdvSkwyMHZNRGxqTjNjd0VnSmxiaWdBUAE',
  LOCAL: 'CAAqHAgKIhZDQklTQ2pvSWJHOWpZV3hmZGpJb0FBUAE',
  BUSINESS: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB',
  TECHNOLOGY: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB',
  ENTERTAINMENT: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVAB',
  SPORTS: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB',
  SCIENCE: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pWVXlnQVAB',
  HEALTH: 'CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ',
}

// Major metro areas with Google News geo parameters
const METRO_AREAS = [
  // US Major Cities
  { name: 'New York', geo: 'US_NY', lat: 40.7128, lng: -74.0060, country: 'US', population: 8336000 },
  { name: 'Los Angeles', geo: 'US_CA_Los_Angeles', lat: 34.0522, lng: -118.2437, country: 'US', population: 3979000 },
  { name: 'Chicago', geo: 'US_IL_Chicago', lat: 41.8781, lng: -87.6298, country: 'US', population: 2693000 },
  { name: 'Houston', geo: 'US_TX_Houston', lat: 29.7604, lng: -95.3698, country: 'US', population: 2320000 },
  { name: 'Phoenix', geo: 'US_AZ_Phoenix', lat: 33.4484, lng: -112.0740, country: 'US', population: 1680000 },
  { name: 'Philadelphia', geo: 'US_PA_Philadelphia', lat: 39.9526, lng: -75.1652, country: 'US', population: 1584000 },
  { name: 'San Antonio', geo: 'US_TX_San_Antonio', lat: 29.4241, lng: -98.4936, country: 'US', population: 1547000 },
  { name: 'San Diego', geo: 'US_CA_San_Diego', lat: 32.7157, lng: -117.1611, country: 'US', population: 1423000 },
  { name: 'Dallas', geo: 'US_TX_Dallas', lat: 32.7767, lng: -96.7970, country: 'US', population: 1343000 },
  { name: 'San Jose', geo: 'US_CA_San_Jose', lat: 37.3382, lng: -121.8863, country: 'US', population: 1021000 },
  { name: 'Washington DC', geo: 'US_DC', lat: 38.9072, lng: -77.0369, country: 'US', population: 705000 },
  { name: 'Seattle', geo: 'US_WA_Seattle', lat: 47.6062, lng: -122.3321, country: 'US', population: 753000 },
  { name: 'Denver', geo: 'US_CO_Denver', lat: 39.7392, lng: -104.9903, country: 'US', population: 716000 },
  { name: 'Boston', geo: 'US_MA_Boston', lat: 42.3601, lng: -71.0589, country: 'US', population: 692000 },
  { name: 'Miami', geo: 'US_FL_Miami', lat: 25.7617, lng: -80.1918, country: 'US', population: 467000 },
  { name: 'Atlanta', geo: 'US_GA_Atlanta', lat: 33.7490, lng: -84.3880, country: 'US', population: 498000 },

  // International Major Cities
  { name: 'London', geo: 'GB', lat: 51.5074, lng: -0.1278, country: 'UK', population: 9002000 },
  { name: 'Paris', geo: 'FR', lat: 48.8566, lng: 2.3522, country: 'France', population: 2161000 },
  { name: 'Tokyo', geo: 'JP', lat: 35.6762, lng: 139.6503, country: 'Japan', population: 13960000 },
  { name: 'Delhi', geo: 'IN_DL', lat: 28.7041, lng: 77.1025, country: 'India', population: 32941000 },
  { name: 'Shanghai', geo: 'CN', lat: 31.2304, lng: 121.4737, country: 'China', population: 27059000 },
  { name: 'Mumbai', geo: 'IN_MH_Mumbai', lat: 19.0760, lng: 72.8777, country: 'India', population: 20411000 },
  { name: 'São Paulo', geo: 'BR', lat: -23.5505, lng: -46.6333, country: 'Brazil', population: 22043000 },
  { name: 'Mexico City', geo: 'MX', lat: 19.4326, lng: -99.1332, country: 'Mexico', population: 21782000 },
  { name: 'Cairo', geo: 'EG', lat: 30.0444, lng: 31.2357, country: 'Egypt', population: 20901000 },
  { name: 'Beijing', geo: 'CN', lat: 39.9042, lng: 116.4074, country: 'China', population: 21540000 },
]

// Fetch Google News Top Stories (homepage-style priority)
async function fetchTopStories(): Promise<NewsArticle[]> {
  try {
    const url = 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en'
    console.log('  → Fetching: Top Stories (Homepage)')

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const xml = await response.text()
    return parseGoogleNewsXML(xml, 'Top Stories')
  } catch (error) {
    console.error('  ✗ Error fetching top stories:', error)
    return []
  }
}

// Fetch by Google News Topic ID
async function fetchByTopic(topicName: string, topicId: string): Promise<NewsArticle[]> {
  try {
    const url = `https://news.google.com/rss/topics/${topicId}?hl=en-US&gl=US&ceid=US:en`
    console.log(`  → Fetching: ${topicName}`)

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const xml = await response.text()
    return parseGoogleNewsXML(xml, topicName)
  } catch (error) {
    console.error(`  ✗ Error fetching ${topicName}:`, error)
    return []
  }
}

// Fetch local news for a specific geo location
async function fetchLocalNews(location: typeof METRO_AREAS[0]): Promise<NewsArticle[]> {
  try {
    // Google News uses geo parameter for local news
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(location.name)}&hl=en-US&gl=${location.country}&ceid=${location.country}:en`
    console.log(`  → Fetching: ${location.name} local news`)

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const xml = await response.text()
    return parseGoogleNewsXML(xml, location.name)
  } catch (error) {
    console.error(`  ✗ Error fetching ${location.name}:`, error)
    return []
  }
}

function parseGoogleNewsXML(xml: string, category: string): NewsArticle[] {
  const articles: NewsArticle[] = []

  // Parse RSS items
  const items = xml.split('<item>')
  items.shift() // Remove header

  for (const item of items) {
    try {
      // Handle both CDATA and plain text
      let titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
      if (!titleMatch) titleMatch = item.match(/<title>(.*?)<\/title>/)

      let linkMatch = item.match(/<link>(.*?)<\/link>/)

      let pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/)

      let descMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)
      if (!descMatch) descMatch = item.match(/<description>(.*?)<\/description>/)

      let sourceMatch = item.match(/<source.*?>(.*?)<\/source>/)

      let guidMatch = item.match(/<guid.*?>(.*?)<\/guid>/)

      if (titleMatch && linkMatch && pubDateMatch) {
        articles.push({
          title: titleMatch[1].trim(),
          link: linkMatch[1].trim(),
          pubDate: pubDateMatch[1].trim(),
          source: sourceMatch ? sourceMatch[1].trim() : category,
          description: descMatch ? descMatch[1].trim() : undefined,
          guid: guidMatch ? guidMatch[1].trim() : undefined,
        })
      }
    } catch (err) {
      // Skip malformed items
    }
  }

  return articles
}

// Google News-inspired importance calculation
function calculateGoogleNewsScore(article: NewsArticle, context: {
  category: string
  isTopStory: boolean
  population?: number
  sourceCount: number
}): number {
  let score = 0.5

  // 1. Top Story Boost (Google News homepage priority)
  if (context.isTopStory) score += 0.25

  // 2. Recency (Google prioritizes fresh content)
  const ageMinutes = (Date.now() - new Date(article.pubDate).getTime()) / (1000 * 60)
  if (ageMinutes < 60) score += 0.20  // Last hour
  else if (ageMinutes < 180) score += 0.15  // Last 3 hours
  else if (ageMinutes < 360) score += 0.10  // Last 6 hours
  else if (ageMinutes < 720) score += 0.05  // Last 12 hours

  // 3. Source Authority (Google trusts certain sources more)
  const tierOneSources = [
    'Reuters', 'Associated Press', 'AP News', 'Bloomberg', 'BBC',
    'The New York Times', 'The Wall Street Journal', 'Financial Times',
    'The Washington Post', 'The Guardian', 'CNN', 'NPR'
  ]
  const tierTwoSources = [
    'USA Today', 'Los Angeles Times', 'Chicago Tribune', 'NBC News',
    'ABC News', 'CBS News', 'CNBC', 'Fox News', 'Politico', 'The Hill'
  ]

  if (tierOneSources.some(s => article.source.includes(s))) score += 0.15
  else if (tierTwoSources.some(s => article.source.includes(s))) score += 0.08

  // 4. Story Velocity (how many sources covering it)
  if (context.sourceCount >= 10) score += 0.15
  else if (context.sourceCount >= 5) score += 0.10
  else if (context.sourceCount >= 3) score += 0.05

  // 5. Category Importance
  const highPriorityCategories = ['Top Stories', 'World', 'Breaking']
  if (highPriorityCategories.some(c => context.category.includes(c))) score += 0.10

  // 6. Geographic Relevance (larger metros get slight boost)
  if (context.population) {
    if (context.population > 5000000) score += 0.05
    else if (context.population > 1000000) score += 0.03
  }

  // 7. Breaking News Indicators
  const urgentKeywords = ['breaking', 'urgent', 'developing', 'live updates', 'just in', 'alert']
  const title = article.title.toLowerCase()
  if (urgentKeywords.some(kw => title.includes(kw))) score += 0.12

  return Math.min(score, 1.0)
}

// Detect story clusters (similar to Google News grouping)
function detectStoryClusters(articles: NewsArticle[]): Map<string, NewsArticle[]> {
  const clusters = new Map<string, NewsArticle[]>()

  // Simple clustering by title similarity (first 50 chars)
  for (const article of articles) {
    const key = article.title.substring(0, 50).toLowerCase().trim()
    const existing = clusters.get(key) || []
    existing.push(article)
    clusters.set(key, existing)
  }

  return clusters
}

async function main() {
  console.log('🌍 Fetching news Google News style...\n')

  const allArticles: Array<NewsArticle & {
    city?: string
    country: string
    lat: number
    lng: number
    category: string
    isTopStory: boolean
    population?: number
  }> = []

  // 1. Fetch Top Stories (highest priority like Google homepage)
  console.log('⭐ Fetching Top Stories...')
  const topStories = await fetchTopStories()
  console.log(`  ✓ Got ${topStories.length} top stories\n`)

  topStories.forEach(article => {
    // Top stories appear in Washington DC (default for US national news)
    allArticles.push({
      ...article,
      country: 'US',
      lat: 38.9072 + (Math.random() - 0.5) * 0.2,
      lng: -77.0369 + (Math.random() - 0.5) * 0.2,
      category: 'Top Stories',
      isTopStory: true,
    })
  })

  await new Promise(resolve => setTimeout(resolve, 1000))

  // 2. Fetch by Topics (like Google News sections)
  console.log('📰 Fetching Topic News...')
  const topicFetches = [
    { name: 'World', id: GOOGLE_NEWS_TOPICS.WORLD, location: { lat: 51.5074, lng: -0.1278, country: 'UK' } },
    { name: 'Business', id: GOOGLE_NEWS_TOPICS.BUSINESS, location: { lat: 40.7128, lng: -74.0060, country: 'US' } },
    { name: 'Technology', id: GOOGLE_NEWS_TOPICS.TECHNOLOGY, location: { lat: 37.7749, lng: -122.4194, country: 'US' } },
    { name: 'Sports', id: GOOGLE_NEWS_TOPICS.SPORTS, location: { lat: 40.7128, lng: -74.0060, country: 'US' } },
    { name: 'Entertainment', id: GOOGLE_NEWS_TOPICS.ENTERTAINMENT, location: { lat: 34.0522, lng: -118.2437, country: 'US' } },
  ]

  for (const topic of topicFetches) {
    const articles = await fetchByTopic(topic.name, topic.id)
    console.log(`  ✓ Got ${articles.length} ${topic.name} stories`)

    articles.forEach(article => {
      allArticles.push({
        ...article,
        country: topic.location.country,
        lat: topic.location.lat + (Math.random() - 0.5) * 0.3,
        lng: topic.location.lng + (Math.random() - 0.5) * 0.3,
        category: topic.name,
        isTopStory: false,
      })
    })

    await new Promise(resolve => setTimeout(resolve, 800))
  }

  // 3. Fetch Local News for major metros (like Google News local)
  console.log('\n📍 Fetching Local News by Metro Area...')
  for (const metro of METRO_AREAS) {
    const articles = await fetchLocalNews(metro)
    console.log(`  ✓ ${metro.name}: ${articles.length} local stories`)

    articles.forEach(article => {
      allArticles.push({
        ...article,
        city: metro.name,
        country: metro.country,
        lat: metro.lat + (Math.random() - 0.5) * 0.1,
        lng: metro.lng + (Math.random() - 0.5) * 0.1,
        category: 'Local',
        isTopStory: false,
        population: metro.population,
      })
    })

    await new Promise(resolve => setTimeout(resolve, 600))
  }

  // 4. Detect story clusters and calculate importance
  console.log('\n🔗 Clustering similar stories...')
  const clusters = detectStoryClusters(allArticles)
  console.log(`  ✓ Found ${clusters.size} unique story clusters`)

  // 5. Calculate Google News-style importance scores
  console.log('\n📊 Calculating importance scores...')
  const scoredArticles = allArticles.map(article => {
    const cluster = Array.from(clusters.values()).find(c =>
      c.some(a => a.title === article.title)
    ) || []

    const importance = calculateGoogleNewsScore(article, {
      category: article.category,
      isTopStory: article.isTopStory,
      population: article.population,
      sourceCount: cluster.length,
    })

    const isBreaking = importance > 0.85 &&
      (Date.now() - new Date(article.pubDate).getTime()) < (3 * 60 * 60 * 1000)

    return {
      ...article,
      importance,
      isBreaking,
    }
  })

  // 6. Deduplicate and store
  console.log('\n💾 Storing in database...')
  const deduplicated = new Map()
  scoredArticles.forEach(article => {
    if (!deduplicated.has(article.link)) {
      deduplicated.set(article.link, article)
    }
  })

  let stored = 0
  let updated = 0

  for (const article of deduplicated.values()) {
    try {
      const existing = await prisma.story.findUnique({
        where: { link: article.link }
      })

      if (existing) {
        await prisma.story.update({
          where: { link: article.link },
          data: {
            importance: article.importance,
            isBreaking: article.isBreaking,
          }
        })
        updated++
      } else {
        await prisma.story.create({
          data: {
            title: article.title,
            link: article.link,
            pubDate: new Date(article.pubDate),
            source: article.source,
            description: article.description,
            lat: article.lat,
            lng: article.lng,
            city: article.city,
            country: article.country,
            category: article.category,
            importance: article.importance,
            isBreaking: article.isBreaking,
          }
        })
        stored++
      }
    } catch (error) {
      // Skip duplicates
    }
  }

  console.log(`\n✅ Complete!`)
  console.log(`   Stored: ${stored} new stories`)
  console.log(`   Updated: ${updated} existing stories`)
  console.log(`   Total unique: ${deduplicated.size}`)
  console.log(`   Breaking news: ${scoredArticles.filter(a => a.isBreaking).length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
