import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Countries A-M with coordinates
const COUNTRIES_A_M = [
  { name: 'Afghanistan', type: 'country', lat: 33.9391, lng: 67.7099, country: 'Afghanistan' },
  { name: 'Albania', type: 'country', lat: 41.1533, lng: 20.1683, country: 'Albania' },
  { name: 'Algeria', type: 'country', lat: 28.0339, lng: 1.6596, country: 'Algeria' },
  { name: 'Angola', type: 'country', lat: -11.2027, lng: 17.8739, country: 'Angola' },
  { name: 'Argentina', type: 'country', lat: -38.4161, lng: -63.6167, country: 'Argentina' },
  { name: 'Australia', type: 'country', lat: -25.2744, lng: 133.7751, country: 'Australia' },
  { name: 'Austria', type: 'country', lat: 47.5162, lng: 14.5501, country: 'Austria' },
  { name: 'Bahrain', type: 'country', lat: 26.0667, lng: 50.5577, country: 'Bahrain' },
  { name: 'Bangladesh', type: 'country', lat: 23.685, lng: 90.3563, country: 'Bangladesh' },
  { name: 'Belarus', type: 'country', lat: 53.7098, lng: 27.9534, country: 'Belarus' },
  { name: 'Belgium', type: 'country', lat: 50.5039, lng: 4.4699, country: 'Belgium' },
  { name: 'Benin', type: 'country', lat: 9.3077, lng: 2.3158, country: 'Benin' },
  { name: 'Bolivia', type: 'country', lat: -16.2902, lng: -63.5887, country: 'Bolivia' },
  { name: 'Bosnia and Herzegovina', type: 'country', lat: 43.9159, lng: 17.6791, country: 'Bosnia and Herzegovina' },
  { name: 'Botswana', type: 'country', lat: -22.3285, lng: 24.6849, country: 'Botswana' },
  { name: 'Brazil', type: 'country', lat: -14.2350, lng: -51.9253, country: 'Brazil' },
  { name: 'Bulgaria', type: 'country', lat: 42.7339, lng: 25.4858, country: 'Bulgaria' },
  { name: 'Burkina Faso', type: 'country', lat: 12.2383, lng: -1.5616, country: 'Burkina Faso' },
  { name: 'Cambodia', type: 'country', lat: 12.5657, lng: 104.9910, country: 'Cambodia' },
  { name: 'Cameroon', type: 'country', lat: 7.3697, lng: 12.3547, country: 'Cameroon' },
  { name: 'Canada', type: 'country', lat: 56.1304, lng: -106.3468, country: 'Canada' },
  { name: 'Chile', type: 'country', lat: -35.6751, lng: -71.5430, country: 'Chile' },
  { name: 'China', type: 'country', lat: 35.8617, lng: 104.1954, country: 'China' },
  { name: 'Colombia', type: 'country', lat: 4.5709, lng: -74.2973, country: 'Colombia' },
  { name: 'Costa Rica', type: 'country', lat: 9.7489, lng: -83.7534, country: 'Costa Rica' },
  { name: 'Croatia', type: 'country', lat: 45.1, lng: 15.2, country: 'Croatia' },
  { name: 'Cuba', type: 'country', lat: 21.5218, lng: -77.7812, country: 'Cuba' },
  { name: 'Cyprus', type: 'country', lat: 35.1264, lng: 33.4299, country: 'Cyprus' },
  { name: 'Czech Republic', type: 'country', lat: 49.8175, lng: 15.473, country: 'Czech Republic' },
  { name: 'Democratic Republic of Congo', type: 'country', lat: -4.0383, lng: 21.7587, country: 'Democratic Republic of Congo' },
  { name: 'Denmark', type: 'country', lat: 56.2639, lng: 9.5018, country: 'Denmark' },
  { name: 'Dominican Republic', type: 'country', lat: 18.7357, lng: -70.1627, country: 'Dominican Republic' },
  { name: 'Ecuador', type: 'country', lat: -1.8312, lng: -78.1834, country: 'Ecuador' },
  { name: 'Egypt', type: 'country', lat: 26.8206, lng: 30.8025, country: 'Egypt' },
  { name: 'El Salvador', type: 'country', lat: 13.7942, lng: -88.8965, country: 'El Salvador' },
  { name: 'Estonia', type: 'country', lat: 58.5953, lng: 25.0136, country: 'Estonia' },
  { name: 'Ethiopia', type: 'country', lat: 9.145, lng: 40.4897, country: 'Ethiopia' },
  { name: 'Fiji', type: 'country', lat: -17.7134, lng: 178.065, country: 'Fiji' },
  { name: 'Finland', type: 'country', lat: 61.9241, lng: 25.7482, country: 'Finland' },
  { name: 'France', type: 'country', lat: 46.2276, lng: 2.2137, country: 'France' },
  { name: 'Georgia', type: 'country', lat: 42.3154, lng: 43.3569, country: 'Georgia' },
  { name: 'Germany', type: 'country', lat: 51.1657, lng: 10.4515, country: 'Germany' },
  { name: 'Ghana', type: 'country', lat: 7.9465, lng: -1.0232, country: 'Ghana' },
  { name: 'Greece', type: 'country', lat: 39.0742, lng: 21.8243, country: 'Greece' },
  { name: 'Guatemala', type: 'country', lat: 15.7835, lng: -90.2308, country: 'Guatemala' },
  { name: 'Haiti', type: 'country', lat: 18.9712, lng: -72.2852, country: 'Haiti' },
  { name: 'Honduras', type: 'country', lat: 15.2, lng: -86.2419, country: 'Honduras' },
  { name: 'Hungary', type: 'country', lat: 47.1625, lng: 19.5033, country: 'Hungary' },
  { name: 'India', type: 'country', lat: 20.5937, lng: 78.9629, country: 'India' },
  { name: 'Indonesia', type: 'country', lat: -0.7893, lng: 113.9213, country: 'Indonesia' },
  { name: 'Iran', type: 'country', lat: 32.4279, lng: 53.688, country: 'Iran' },
  { name: 'Iraq', type: 'country', lat: 33.2232, lng: 43.6793, country: 'Iraq' },
  { name: 'Ireland', type: 'country', lat: 53.4129, lng: -8.2439, country: 'Ireland' },
  { name: 'Israel', type: 'country', lat: 31.0461, lng: 34.8516, country: 'Israel' },
  { name: 'Italy', type: 'country', lat: 41.8719, lng: 12.5674, country: 'Italy' },
  { name: 'Japan', type: 'country', lat: 36.2048, lng: 138.2529, country: 'Japan' },
  { name: 'Jordan', type: 'country', lat: 30.5852, lng: 36.2384, country: 'Jordan' },
  { name: 'Kazakhstan', type: 'country', lat: 48.0196, lng: 66.9237, country: 'Kazakhstan' },
  { name: 'Kenya', type: 'country', lat: -0.0236, lng: 37.9062, country: 'Kenya' },
  { name: 'Kuwait', type: 'country', lat: 29.3117, lng: 47.4818, country: 'Kuwait' },
  { name: 'Laos', type: 'country', lat: 19.8563, lng: 102.4955, country: 'Laos' },
  { name: 'Latvia', type: 'country', lat: 56.8796, lng: 24.6032, country: 'Latvia' },
  { name: 'Lebanon', type: 'country', lat: 33.8547, lng: 35.8623, country: 'Lebanon' },
  { name: 'Libya', type: 'country', lat: 26.3351, lng: 17.2283, country: 'Libya' },
  { name: 'Lithuania', type: 'country', lat: 55.1694, lng: 23.8813, country: 'Lithuania' },
  { name: 'Luxembourg', type: 'country', lat: 49.8153, lng: 6.1296, country: 'Luxembourg' },
  { name: 'Malaysia', type: 'country', lat: 4.2105, lng: 101.9758, country: 'Malaysia' },
  { name: 'Mexico', type: 'country', lat: 23.6345, lng: -102.5528, country: 'Mexico' },
  { name: 'Moldova', type: 'country', lat: 47.4116, lng: 28.3699, country: 'Moldova' },
  { name: 'Montenegro', type: 'country', lat: 42.7087, lng: 19.3744, country: 'Montenegro' },
  { name: 'Mongolia', type: 'country', lat: 46.8625, lng: 103.8467, country: 'Mongolia' },
  { name: 'Morocco', type: 'country', lat: 31.7917, lng: -7.0926, country: 'Morocco' },
  { name: 'Mozambique', type: 'country', lat: -18.6657, lng: 35.5296, country: 'Mozambique' },
  { name: 'Myanmar', type: 'country', lat: 21.9162, lng: 95.956, country: 'Myanmar' },
]

// Generate AI sports summary using Claude
async function generateSportsSummary(
  location: typeof COUNTRIES_A_M[0]
): Promise<{ summary: string; issues: string; topStories: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a SPORTS write-up in the style of Bill Simmons and Gary Neville.

CATEGORY: Sports
VOICE: Bill Simmons / Gary Neville - Enthusiastic fan perspective with insider knowledge
STYLE: Uses specific player names, stats, and recent match details. Passionate about sports culture.

FOCUS AREAS FOR SPORTS:
- Most popular sports and leagues
- National teams and recent performance
- Major sporting events and infrastructure
- Rising stars and legendary athletes
- Sports betting and football culture
- Olympic/World Cup history

LENGTH: 2,000-3,000 characters

Write a comprehensive sports summary for ${location.name} as of November 2025 that:

1. OPENING HOOK (100-150 words): Lead with the most exciting recent sporting moment or compelling stat. Make it vivid and get fans pumped.

2. POPULAR SPORTS & LEAGUES (400-500 words):
   - What sports dominate? (football/soccer, cricket, rugby, basketball, baseball, etc.)
   - Domestic leagues and their quality
   - Club teams that matter - names, recent titles, legendary players
   - Attendance figures, TV viewership, sports culture
   - Where people watch games - stadiums, pubs, home
   - Sports betting culture if relevant

3. NATIONAL TEAMS & PERFORMANCE (400-500 words):
   - Men's and women's national teams across sports
   - Recent World Cup, Olympics, regional tournament performance
   - Qualifying campaigns and upcoming tournaments
   - Star players everyone knows
   - Historic moments and legendary players from the past
   - Rivalries that define the sporting culture
   - World rankings and competitive standing

4. INFRASTRUCTURE & FUTURE (300-400 words):
   - Major stadiums and sporting venues
   - Youth development and academies
   - Rising stars to watch
   - Upcoming tournaments or bids (World Cup, Olympics, etc.)
   - Investment in sports infrastructure
   - Emerging sports gaining popularity

5. BOTTOM LINE (100-150 words):
   - What defines this country's sporting identity?
   - The passion, the heartbreak, the glory
   - What should sports fans know?
   - Punchy, enthusiastic conclusion

CRITICAL REQUIREMENTS:
- Use real November 2025 sports data - recent match results, tournament standings, player transfers
- Be specific: player names, scores, tournament results, world rankings
- Enthusiastic Bill Simmons/Gary Neville tone - love of the game shines through
- Include both mainstream and culturally important sports for that country
- Be honest about both successes and disappointments
- Celebrate sporting culture and fan passion
- 2,000-3,000 characters total

If you don't have recent November 2025 data for this country, use your knowledge of their sporting culture, Olympic/World Cup history, popular sports, major athletes, and sporting infrastructure to create an engaging write-up. Focus on what makes their sports scene unique.

Generate the sports write-up now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 3500,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract key sports/issues
    const issueMatches = summaryText.match(/(?:^|\n)(?:#{2,3})\s*(.+?)(?:\n|$)/g) || []
    const issues = issueMatches
      .map(match => match.replace(/^#+\s*/, '').trim())
      .filter(issue => issue.length > 5 && issue.length < 100)
      .slice(0, 5)

    // Create placeholder top stories (since we're generating without real news)
    const topStories = [
      {
        title: `${location.name} Sports Update - November 2025`,
        source: 'Sports News',
        link: `https://news.google.com/search?q=${encodeURIComponent(location.name + ' sports')}`,
        pubDate: new Date().toISOString()
      }
    ]

    return {
      summary: summaryText,
      issues: JSON.stringify(issues.length > 0 ? issues : ['National Teams', 'Popular Sports', 'Major Athletes']),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`Error generating sports summary for ${location.name}:`, error)
    throw error
  }
}

// Main execution
async function generateSportsAM() {
  console.log('⚽ Generating SPORTS write-ups for countries A-M...\n')
  console.log(`Total countries: ${COUNTRIES_A_M.length}`)
  console.log('Voice: Bill Simmons / Gary Neville')
  console.log('Length: 2,000-3,000 characters\n')

  let generated = 0
  let failed = 0
  let skipped = 0

  for (const location of COUNTRIES_A_M) {
    console.log(`\n📍 [${generated + skipped + failed + 1}/${COUNTRIES_A_M.length}] Processing: ${location.name}`)

    try {
      // Check if sports summary already exists
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: location.name,
            type: 'country',
            category: 'sports'
          }
        }
      })

      if (existing) {
        console.log(`  ⏭️  Sports summary already exists, skipping...`)
        skipped++
        continue
      }

      const { summary, issues, topStories } = await generateSportsSummary(location)

      // Store in database with category='sports'
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'sports'
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          category: 'sports',
          summary,
          issues,
          topStories,
          storyCount: 1,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`  ✅ Sports summary generated and saved!`)
      console.log(`  📊 Key topics: ${JSON.parse(issues).slice(0, 3).join(', ')}`)
      console.log(`  📏 Length: ${summary.length} characters`)

      // Rate limit: 1 request per 2 seconds to be safe
      await new Promise(resolve => setTimeout(resolve, 2000))

    } catch (error) {
      console.error(`  ❌ Failed:`, error)
      failed++

      // Continue with next country even if one fails
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  console.log(`\n\n⚽ SPORTS A-M GENERATION COMPLETE!`)
  console.log(`   Generated: ${generated} summaries`)
  console.log(`   Skipped (already exist): ${skipped} summaries`)
  console.log(`   Failed: ${failed} summaries`)
  console.log(`   Total countries: ${COUNTRIES_A_M.length}`)

  if (generated > 0) {
    console.log(`\n📊 Database Status:`)
    const totalSports = await prisma.locationSummary.count({
      where: { category: 'sports', type: 'country' }
    })
    console.log(`   Total sports write-ups: ${totalSports} countries`)
  }

  console.log(`\n✅ SPORTS A-M COMPLETE: ${generated} countries`)
}

generateSportsAM()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
