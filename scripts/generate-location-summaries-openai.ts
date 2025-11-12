import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import OpenAI from 'openai'

const prisma = new PrismaClient()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Major locations to generate summaries for
const LOCATIONS = [
  // Major countries
  { name: 'United States', type: 'country', lat: 39.8283, lng: -98.5795, country: 'US' },
  { name: 'China', type: 'country', lat: 35.8617, lng: 104.1954, country: 'China' },
  { name: 'Russia', type: 'country', lat: 61.5240, lng: 105.3188, country: 'Russia' },
  { name: 'Japan', type: 'country', lat: 36.2048, lng: 138.2529, country: 'Japan' },
  { name: 'United Kingdom', type: 'country', lat: 55.3781, lng: -3.4360, country: 'UK' },
  { name: 'France', type: 'country', lat: 46.2276, lng: 2.2137, country: 'France' },
  { name: 'Germany', type: 'country', lat: 51.1657, lng: 10.4515, country: 'Germany' },
  { name: 'India', type: 'country', lat: 20.5937, lng: 78.9629, country: 'India' },
  { name: 'Brazil', type: 'country', lat: -14.2350, lng: -51.9253, country: 'Brazil' },
  { name: 'Canada', type: 'country', lat: 56.1304, lng: -106.3468, country: 'Canada' },
  { name: 'Ukraine', type: 'country', lat: 48.3794, lng: 31.1656, country: 'Ukraine' },
  { name: 'Israel', type: 'country', lat: 31.0461, lng: 34.8516, country: 'Israel' },
  { name: 'Iran', type: 'country', lat: 32.4279, lng: 53.6880, country: 'Iran' },
  { name: 'Saudi Arabia', type: 'country', lat: 23.8859, lng: 45.0792, country: 'Saudi Arabia' },
  { name: 'Turkey', type: 'country', lat: 38.9637, lng: 35.2433, country: 'Turkey' },
  { name: 'South Korea', type: 'country', lat: 35.9078, lng: 127.7669, country: 'South Korea' },
  { name: 'Australia', type: 'country', lat: -25.2744, lng: 133.7751, country: 'Australia' },
  { name: 'Mexico', type: 'country', lat: 23.6345, lng: -102.5528, country: 'Mexico' },
  { name: 'Italy', type: 'country', lat: 41.8719, lng: 12.5674, country: 'Italy' },
  { name: 'Spain', type: 'country', lat: 40.4637, lng: -3.7492, country: 'Spain' },

  // Major cities
  { name: 'Tokyo', type: 'city', lat: 35.6762, lng: 139.6503, country: 'Japan' },
  { name: 'New York', type: 'city', lat: 40.7128, lng: -74.0060, country: 'US' },
  { name: 'London', type: 'city', lat: 51.5074, lng: -0.1278, country: 'UK' },
  { name: 'Paris', type: 'city', lat: 48.8566, lng: 2.3522, country: 'France' },
  { name: 'Beijing', type: 'city', lat: 39.9042, lng: 116.4074, country: 'China' },
  { name: 'Moscow', type: 'city', lat: 55.7558, lng: 37.6173, country: 'Russia' },
  { name: 'Mumbai', type: 'city', lat: 19.0760, lng: 72.8777, country: 'India' },
  { name: 'São Paulo', type: 'city', lat: -23.5558, lng: -46.6396, country: 'Brazil' },
  { name: 'Los Angeles', type: 'city', lat: 34.0522, lng: -118.2437, country: 'US' },
  { name: 'Chicago', type: 'city', lat: 41.8781, lng: -87.6298, country: 'US' },
  { name: 'Sydney', type: 'city', lat: -33.8688, lng: 151.2093, country: 'Australia' },
  { name: 'Seoul', type: 'city', lat: 37.5665, lng: 126.9780, country: 'South Korea' },
  { name: 'Berlin', type: 'city', lat: 52.5200, lng: 13.4050, country: 'Germany' },
  { name: 'Dubai', type: 'city', lat: 25.2048, lng: 55.2708, country: 'UAE' },
  { name: 'Hong Kong', type: 'city', lat: 22.3193, lng: 114.1694, country: 'China' },
  { name: 'Singapore', type: 'city', lat: 1.3521, lng: 103.8198, country: 'Singapore' },
  { name: 'Toronto', type: 'city', lat: 43.6532, lng: -79.3832, country: 'Canada' },
  { name: 'Istanbul', type: 'city', lat: 41.0082, lng: 28.9784, country: 'Turkey' },
  { name: 'Mexico City', type: 'city', lat: 19.4326, lng: -99.1332, country: 'Mexico' },
  { name: 'Washington', type: 'city', lat: 38.9072, lng: -77.0369, country: 'US' },
]

interface StoryForSummary {
  title: string
  link: string
  source: string
  pubDate: Date
  description: string | null
  importance: number
}

// Find stories relevant to a location
function findStoriesForLocation(location: typeof LOCATIONS[0], allStories: StoryForSummary[]): StoryForSummary[] {
  const keywords = [location.name.toLowerCase()]

  // Add country-specific keywords
  if (location.type === 'country') {
    const countryKeywords: { [key: string]: string[] } = {
      'United States': ['america', 'american', 'us', 'usa', 'washington dc'],
      'United Kingdom': ['britain', 'british', 'uk', 'england', 'scotland', 'wales'],
      'China': ['chinese', 'beijing', 'shanghai', 'xi jinping'],
      'Russia': ['russian', 'moscow', 'putin', 'kremlin'],
      'Japan': ['japanese', 'tokyo'],
      'India': ['indian', 'delhi', 'mumbai'],
      'Ukraine': ['ukrainian', 'kyiv', 'kiev', 'zelenskyy'],
      'Israel': ['israeli', 'jerusalem', 'tel aviv', 'netanyahu'],
      'Iran': ['iranian', 'tehran'],
      'Saudi Arabia': ['saudi', 'riyadh'],
      'South Korea': ['korean', 'seoul'],
    }

    const extraKeywords = countryKeywords[location.name] || []
    keywords.push(...extraKeywords)
  }

  // Filter stories that mention this location
  const relevantStories = allStories.filter(story => {
    const text = `${story.title} ${story.description || ''}`.toLowerCase()
    return keywords.some(keyword => text.includes(keyword))
  })

  // Sort by importance and recency, take top 15
  return relevantStories
    .sort((a, b) => {
      const scoreA = a.importance + (Date.now() - a.pubDate.getTime() > 86400000 ? -0.2 : 0)
      const scoreB = b.importance + (Date.now() - b.pubDate.getTime() > 86400000 ? -0.2 : 0)
      return scoreB - scoreA
    })
    .slice(0, 15)
}

// Generate AI summary using OpenAI GPT-4o-mini
async function generateLocationSummary(
  location: typeof LOCATIONS[0],
  stories: StoryForSummary[]
): Promise<{ summary: string; issues: string; topStories: string }> {
  // Prepare story context for AI
  const storyContext = stories.map((s, i) =>
    `${i + 1}. "${s.title}" - ${s.source} (${s.pubDate.toLocaleDateString()})\n   ${s.description || 'No description'}`
  ).join('\n\n')

  const prompt = `You are a geopolitical and regional analyst. Based on these recent news stories about ${location.name}, generate a comprehensive one-page summary of the current situation.

Recent News Stories:
${storyContext}

Generate a summary following this EXACT format:

# ${location.name}

[Opening paragraph: 1-2 sentences setting context for the current situation]

## Major Issues

### 1. [Issue Title]
**What's happening:**
- [Bullet point describing current events]
- [Bullet point with specific examples and citations]

**Why it matters:**
- [Bullet point explaining strategic/economic/social significance]
- [Bullet point on stakeholder impacts]

**Prospects:**
- [Bullet point on likely short-term trajectory]
- [Bullet point on medium-term scenarios]
- [Bullet point on risks and opportunities]

### 2. [Second Issue Title]
[Same format as above]

### 3. [Third Issue Title]
[Same format as above]

## Summary
[Final paragraph synthesizing the key themes and watch-words for anyone tracking this location]

IMPORTANT REQUIREMENTS:
- Focus on 3-4 major issues maximum
- Each issue should be specific, current, and evidence-based
- Use concrete details from the news stories provided
- Maintain a professional, analytical tone
- Avoid speculation - stick to what's happening and logical implications
- Make it actionable for business, investment, or policy professionals

Generate the summary now:`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Fast and cost-effective
      messages: [
        {
          role: 'system',
          content: 'You are a professional geopolitical and regional analyst providing executive summaries for business and policy professionals.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 3000,
      temperature: 0.7,
    })

    const summaryText = completion.choices[0]?.message?.content || ''

    // Extract issues (rough parsing - look for ### headers)
    const issueMatches = summaryText.match(/### \d\.\s+(.+)/g) || []
    const issues = issueMatches.map(match => match.replace(/### \d\.\s+/, ''))

    // Top 10 stories for links
    const topStories = stories.slice(0, 10).map(s => ({
      title: s.title,
      source: s.source,
      link: s.link,
      pubDate: s.pubDate.toISOString()
    }))

    return {
      summary: summaryText,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`❌ Error generating summary for ${location.name}:`, error)
    throw error
  }
}

// Main execution
async function generateLocationSummaries() {
  console.log('🌍 Generating location summaries with OpenAI GPT-4o-mini...\n')

  // Load all stories
  const allStories = await prisma.story.findMany({
    select: {
      title: true,
      link: true,
      source: true,
      pubDate: true,
      description: true,
      importance: true
    },
    where: {
      pubDate: {
        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
      }
    }
  })

  console.log(`📊 Found ${allStories.length} recent stories\n`)

  let generated = 0
  let skipped = 0

  for (const location of LOCATIONS) {
    console.log(`\n📍 Processing: ${location.name} (${location.type})`)

    // Find relevant stories
    const relevantStories = findStoriesForLocation(location, allStories)

    if (relevantStories.length < 5) {
      console.log(`  ⚠️  Only ${relevantStories.length} stories found - skipping (need 5+)`)
      skipped++
      continue
    }

    console.log(`  ✓ Found ${relevantStories.length} relevant stories`)
    console.log(`  🤖 Generating AI summary with GPT-4o-mini...`)

    try {
      const { summary, issues, topStories } = await generateLocationSummary(location, relevantStories)

      // Store in database
      await prisma.locationSummary.upsert({
        where: {
          name_type: {
            name: location.name,
            type: location.type
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`  ✅ Summary generated and saved!`)

      // Rate limit: 1 request per second
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`  ❌ Failed:`, error)
    }
  }

  console.log(`\n\n✅ Complete!`)
  console.log(`   Generated: ${generated} summaries`)
  console.log(`   Skipped: ${skipped} locations (insufficient stories)`)
  console.log(`\n📊 Location Summary Database:`)

  const counts = await prisma.locationSummary.groupBy({
    by: ['type'],
    _count: true
  })

  counts.forEach(({ type, _count }) => {
    console.log(`   ${type}: ${_count}`)
  })
}

generateLocationSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
