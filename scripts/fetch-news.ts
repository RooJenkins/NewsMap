import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface NewsArticle {
  title: string
  link: string
  pubDate: string
  source: string
  description?: string
}

// Major cities with coordinates
const majorCities = [
  // North America
  { name: 'New York', country: 'US', lat: 40.7128, lng: -74.0060, region: 'North America' },
  { name: 'Los Angeles', country: 'US', lat: 34.0522, lng: -118.2437, region: 'North America' },
  { name: 'Chicago', country: 'US', lat: 41.8781, lng: -87.6298, region: 'North America' },
  { name: 'Houston', country: 'US', lat: 29.7604, lng: -95.3698, region: 'North America' },
  { name: 'Miami', country: 'US', lat: 25.7617, lng: -80.1918, region: 'North America' },
  { name: 'Washington DC', country: 'US', lat: 38.9072, lng: -77.0369, region: 'North America' },
  { name: 'Boston', country: 'US', lat: 42.3601, lng: -71.0589, region: 'North America' },
  { name: 'San Francisco', country: 'US', lat: 37.7749, lng: -122.4194, region: 'North America' },
  { name: 'Seattle', country: 'US', lat: 47.6062, lng: -122.3321, region: 'North America' },
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, region: 'North America' },
  { name: 'Mexico City', country: 'Mexico', lat: 19.4326, lng: -99.1332, region: 'North America' },

  // South America
  { name: 'São Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333, region: 'South America' },
  { name: 'Buenos Aires', country: 'Argentina', lat: -34.6037, lng: -58.3816, region: 'South America' },
  { name: 'Rio de Janeiro', country: 'Brazil', lat: -22.9068, lng: -43.1729, region: 'South America' },
  { name: 'Lima', country: 'Peru', lat: -12.0464, lng: -77.0428, region: 'South America' },
  { name: 'Bogotá', country: 'Colombia', lat: 4.7110, lng: -74.0721, region: 'South America' },

  // Europe
  { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, region: 'Europe' },
  { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, region: 'Europe' },
  { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050, region: 'Europe' },
  { name: 'Madrid', country: 'Spain', lat: 40.4168, lng: -3.7038, region: 'Europe' },
  { name: 'Rome', country: 'Italy', lat: 41.9028, lng: 12.4964, region: 'Europe' },
  { name: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173, region: 'Europe' },
  { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lng: 4.9041, region: 'Europe' },

  // Asia
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, region: 'Asia' },
  { name: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074, region: 'Asia' },
  { name: 'Shanghai', country: 'China', lat: 31.2304, lng: 121.4737, region: 'Asia' },
  { name: 'Hong Kong', country: 'China', lat: 22.3193, lng: 114.1694, region: 'Asia' },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, region: 'Asia' },
  { name: 'Seoul', country: 'South Korea', lat: 37.5665, lng: 126.9780, region: 'Asia' },
  { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, region: 'Asia' },
  { name: 'Delhi', country: 'India', lat: 28.7041, lng: 77.1025, region: 'Asia' },
  { name: 'Bangkok', country: 'Thailand', lat: 13.7563, lng: 100.5018, region: 'Asia' },

  // Middle East
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, region: 'Middle East' },
  { name: 'Tel Aviv', country: 'Israel', lat: 32.0853, lng: 34.7818, region: 'Middle East' },
  { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784, region: 'Middle East' },

  // Africa
  { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357, region: 'Africa' },
  { name: 'Lagos', country: 'Nigeria', lat: 6.5244, lng: 3.3792, region: 'Africa' },
  { name: 'Johannesburg', country: 'South Africa', lat: -26.2041, lng: 28.0473, region: 'Africa' },
  { name: 'Nairobi', country: 'Kenya', lat: -1.2864, lng: 36.8172, region: 'Africa' },

  // Oceania
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093, region: 'Oceania' },
  { name: 'Melbourne', country: 'Australia', lat: -37.8136, lng: 144.9631, region: 'Oceania' },
  { name: 'Auckland', country: 'New Zealand', lat: -36.8485, lng: 174.7633, region: 'Oceania' },
]

// Categories for broader coverage
const categories = [
  'breaking news',
  'politics',
  'technology',
  'business',
  'sports',
  'entertainment',
  'science',
  'health',
]

async function fetchGoogleNewsRSS(query: string): Promise<NewsArticle[]> {
  try {
    const encodedQuery = encodeURIComponent(query)
    const url = `https://news.google.com/rss/search?q=${encodedQuery}&hl=en-US&gl=US&ceid=US:en`

    console.log(`  → Fetching: ${query}`)

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      },
    })

    if (!response.ok) {
      console.error(`  ✗ RSS fetch failed: ${response.status}`)
      return []
    }

    const xmlText = await response.text()
    const articles: NewsArticle[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    const items = xmlText.match(itemRegex) || []

    for (const item of items.slice(0, 50)) {
      // Handle both CDATA and plain text formats
      let titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
      if (!titleMatch) {
        titleMatch = item.match(/<title>(.*?)<\/title>/)
      }

      const linkMatch = item.match(/<link>(.*?)<\/link>/)
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/)

      let descMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)
      if (!descMatch) {
        descMatch = item.match(/<description>(.*?)<\/description>/)
      }

      if (titleMatch && linkMatch && pubDateMatch) {
        const fullTitle = titleMatch[1]
        const titleParts = fullTitle.split(' - ')
        const source = titleParts.length > 1 ? titleParts[titleParts.length - 1] : 'Google News'
        const title = titleParts.slice(0, -1).join(' - ') || fullTitle

        articles.push({
          title,
          link: linkMatch[1],
          pubDate: pubDateMatch[1],
          source,
          description: descMatch?.[1],
        })
      }
    }

    console.log(`  ✓ Fetched ${articles.length} articles`)
    return articles
  } catch (error) {
    console.error(`  ✗ Error fetching news for "${query}":`, error)
    return []
  }
}

function calculateImportance(article: NewsArticle, category: string): number {
  let score = 0.5

  // Recency boost (newer = more important)
  const ageHours = (Date.now() - new Date(article.pubDate).getTime()) / (1000 * 60 * 60)
  if (ageHours < 2) score += 0.3
  else if (ageHours < 6) score += 0.2
  else if (ageHours < 12) score += 0.1

  // Category boost
  if (category === 'breaking news') score += 0.2
  else if (category === 'politics') score += 0.1

  // Source reputation boost
  const premiumSources = [
    'New York Times', 'Washington Post', 'BBC', 'Reuters', 'AP',
    'CNN', 'Bloomberg', 'Wall Street Journal', 'The Guardian', 'Financial Times'
  ]
  if (premiumSources.some(s => article.source.includes(s))) {
    score += 0.1
  }

  // Breaking news keywords
  const breakingKeywords = ['breaking', 'urgent', 'alert', 'developing', 'live', 'just in']
  if (breakingKeywords.some(kw => article.title.toLowerCase().includes(kw))) {
    score += 0.15
  }

  return Math.min(score, 1.0) // Cap at 1.0
}

function isBreakingNews(article: NewsArticle, importance: number): boolean {
  const breakingKeywords = ['breaking', 'urgent', 'alert', 'live', 'just in']
  const hasBreakingKeyword = breakingKeywords.some(kw => article.title.toLowerCase().includes(kw))
  const isRecent = (Date.now() - new Date(article.pubDate).getTime()) < (2 * 60 * 60 * 1000) // 2 hours
  return (hasBreakingKeyword || importance > 0.85) && isRecent
}

async function fetchAndStoreNews() {
  console.log('🌍 Starting global news fetch...\n')

  const allArticles: Array<NewsArticle & {
    city: string
    country: string
    region: string
    lat: number
    lng: number
    category: string
  }> = []

  // Fetch city-specific news
  console.log('📍 Fetching city-specific news...')
  for (const city of majorCities) {
    const articles = await fetchGoogleNewsRSS(city.name)
    articles.forEach(article => {
      allArticles.push({
        ...article,
        city: city.name,
        country: city.country,
        region: city.region,
        lat: city.lat + (Math.random() - 0.5) * 0.3, // Add variation
        lng: city.lng + (Math.random() - 0.5) * 0.3,
        category: 'local',
      })
    })
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  // Fetch category-based news (assign to major cities)
  console.log('\n📰 Fetching category news...')
  for (const category of categories) {
    const articles = await fetchGoogleNewsRSS(category)
    articles.forEach(article => {
      // Assign to a random major city
      const city = majorCities[Math.floor(Math.random() * majorCities.length)]
      allArticles.push({
        ...article,
        city: city.name,
        country: city.country,
        region: city.region,
        lat: city.lat + (Math.random() - 0.5) * 0.3,
        lng: city.lng + (Math.random() - 0.5) * 0.3,
        category,
      })
    })
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  console.log(`\n✨ Total articles fetched: ${allArticles.length}`)

  // Deduplicate by link
  const uniqueArticles = Array.from(
    new Map(allArticles.map(a => [a.link, a])).values()
  )
  console.log(`🔍 Unique articles after deduplication: ${uniqueArticles.length}`)

  // Store in database
  console.log('\n💾 Storing articles in database...')
  let stored = 0
  let skipped = 0

  for (const article of uniqueArticles) {
    try {
      const importance = calculateImportance(article, article.category)
      const isBreaking = isBreakingNews(article, importance)

      await prisma.story.upsert({
        where: { link: article.link },
        update: {
          importance,
          isBreaking,
        },
        create: {
          title: article.title,
          link: article.link,
          description: article.description,
          source: article.source,
          pubDate: new Date(article.pubDate),
          lat: article.lat,
          lng: article.lng,
          city: article.city,
          country: article.country,
          region: article.region,
          importance,
          isBreaking,
          category: article.category,
        },
      })
      stored++
    } catch (error: any) {
      if (error.code === 'P2002') {
        // Unique constraint violation - skip
        skipped++
      } else {
        console.error(`Error storing article: ${error.message}`)
      }
    }
  }

  console.log(`✓ Stored: ${stored} articles`)
  console.log(`⊘ Skipped: ${skipped} duplicates`)

  // Clean up old stories (older than 24 hours)
  console.log('\n🧹 Cleaning up old stories...')
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
  const deleted = await prisma.story.deleteMany({
    where: {
      pubDate: {
        lt: oneDayAgo,
      },
    },
  })
  console.log(`🗑️  Deleted ${deleted.count} old stories`)

  // Stats
  const totalStories = await prisma.story.count()
  const breakingCount = await prisma.story.count({ where: { isBreaking: true } })
  console.log('\n📊 Database Stats:')
  console.log(`   Total stories: ${totalStories}`)
  console.log(`   Breaking news: ${breakingCount}`)

  console.log('\n✅ News fetch complete!\n')
}

// Run the fetch
fetchAndStoreNews()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
