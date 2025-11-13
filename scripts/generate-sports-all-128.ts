import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// All 128 countries from countryData.ts
const ALL_COUNTRIES = [
  // Americas
  { name: 'United States', type: 'country', lat: 37.0902, lng: -95.7129, country: 'United States' },
  { name: 'Canada', type: 'country', lat: 56.1304, lng: -106.3468, country: 'Canada' },
  { name: 'Mexico', type: 'country', lat: 23.6345, lng: -102.5528, country: 'Mexico' },
  { name: 'Brazil', type: 'country', lat: -14.2350, lng: -51.9253, country: 'Brazil' },
  { name: 'Argentina', type: 'country', lat: -38.4161, lng: -63.6167, country: 'Argentina' },
  { name: 'Chile', type: 'country', lat: -35.6751, lng: -71.5430, country: 'Chile' },
  { name: 'Colombia', type: 'country', lat: 4.5709, lng: -74.2973, country: 'Colombia' },
  { name: 'Peru', type: 'country', lat: -9.19, lng: -75.0152, country: 'Peru' },
  { name: 'Venezuela', type: 'country', lat: 6.4238, lng: -66.5897, country: 'Venezuela' },
  { name: 'Ecuador', type: 'country', lat: -1.8312, lng: -78.1834, country: 'Ecuador' },
  { name: 'Bolivia', type: 'country', lat: -16.2902, lng: -63.5887, country: 'Bolivia' },
  { name: 'Paraguay', type: 'country', lat: -23.4425, lng: -58.4438, country: 'Paraguay' },
  { name: 'Uruguay', type: 'country', lat: -32.5228, lng: -55.7658, country: 'Uruguay' },
  { name: 'Cuba', type: 'country', lat: 21.5218, lng: -77.7812, country: 'Cuba' },
  { name: 'Haiti', type: 'country', lat: 18.9712, lng: -72.2852, country: 'Haiti' },
  { name: 'Dominican Republic', type: 'country', lat: 18.7357, lng: -70.1627, country: 'Dominican Republic' },
  { name: 'Guatemala', type: 'country', lat: 15.7835, lng: -90.2308, country: 'Guatemala' },
  { name: 'Honduras', type: 'country', lat: 15.2, lng: -86.2419, country: 'Honduras' },
  { name: 'El Salvador', type: 'country', lat: 13.7942, lng: -88.8965, country: 'El Salvador' },
  { name: 'Nicaragua', type: 'country', lat: 12.8654, lng: -85.2072, country: 'Nicaragua' },
  { name: 'Costa Rica', type: 'country', lat: 9.7489, lng: -83.7534, country: 'Costa Rica' },
  { name: 'Panama', type: 'country', lat: 8.538, lng: -80.7821, country: 'Panama' },
  { name: 'Jamaica', type: 'country', lat: 18.1096, lng: -77.2975, country: 'Jamaica' },
  { name: 'Trinidad and Tobago', type: 'country', lat: 10.6918, lng: -61.2225, country: 'Trinidad and Tobago' },
  { name: 'Guyana', type: 'country', lat: 4.8604, lng: -58.9302, country: 'Guyana' },
  { name: 'Suriname', type: 'country', lat: 3.9193, lng: -56.0278, country: 'Suriname' },
  { name: 'Belize', type: 'country', lat: 17.1899, lng: -88.4976, country: 'Belize' },

  // Europe
  { name: 'United Kingdom', type: 'country', lat: 55.3781, lng: -3.436, country: 'United Kingdom' },
  { name: 'France', type: 'country', lat: 46.2276, lng: 2.2137, country: 'France' },
  { name: 'Germany', type: 'country', lat: 51.1657, lng: 10.4515, country: 'Germany' },
  { name: 'Italy', type: 'country', lat: 41.8719, lng: 12.5674, country: 'Italy' },
  { name: 'Spain', type: 'country', lat: 40.4637, lng: -3.7492, country: 'Spain' },
  { name: 'Poland', type: 'country', lat: 51.9194, lng: 19.1451, country: 'Poland' },
  { name: 'Ukraine', type: 'country', lat: 48.3794, lng: 31.1656, country: 'Ukraine' },
  { name: 'Russia', type: 'country', lat: 61.524, lng: 105.3188, country: 'Russia' },
  { name: 'Turkey', type: 'country', lat: 38.9637, lng: 35.2433, country: 'Turkey' },
  { name: 'Greece', type: 'country', lat: 39.0742, lng: 21.8243, country: 'Greece' },
  { name: 'Belgium', type: 'country', lat: 50.5039, lng: 4.4699, country: 'Belgium' },
  { name: 'Austria', type: 'country', lat: 47.5162, lng: 14.5501, country: 'Austria' },
  { name: 'Finland', type: 'country', lat: 61.9241, lng: 25.7482, country: 'Finland' },
  { name: 'Denmark', type: 'country', lat: 56.2639, lng: 9.5018, country: 'Denmark' },
  { name: 'Ireland', type: 'country', lat: 53.4129, lng: -8.2439, country: 'Ireland' },
  { name: 'Hungary', type: 'country', lat: 47.1625, lng: 19.5033, country: 'Hungary' },
  { name: 'Czech Republic', type: 'country', lat: 49.8175, lng: 15.473, country: 'Czech Republic' },
  { name: 'Bulgaria', type: 'country', lat: 42.7339, lng: 25.4858, country: 'Bulgaria' },
  { name: 'Croatia', type: 'country', lat: 45.1, lng: 15.2, country: 'Croatia' },
  { name: 'Estonia', type: 'country', lat: 58.5953, lng: 25.0136, country: 'Estonia' },
  { name: 'Norway', type: 'country', lat: 60.472, lng: 8.4689, country: 'Norway' },
  { name: 'Sweden', type: 'country', lat: 60.1282, lng: 18.6435, country: 'Sweden' },
  { name: 'Portugal', type: 'country', lat: 39.3999, lng: -8.2245, country: 'Portugal' },
  { name: 'Netherlands', type: 'country', lat: 52.1326, lng: 5.2913, country: 'Netherlands' },
  { name: 'Romania', type: 'country', lat: 45.9432, lng: 24.9668, country: 'Romania' },
  { name: 'Serbia', type: 'country', lat: 44.0165, lng: 21.0059, country: 'Serbia' },
  { name: 'Switzerland', type: 'country', lat: 46.8182, lng: 8.2275, country: 'Switzerland' },
  { name: 'Slovakia', type: 'country', lat: 48.669, lng: 19.699, country: 'Slovakia' },
  { name: 'Lithuania', type: 'country', lat: 55.1694, lng: 23.8813, country: 'Lithuania' },
  { name: 'Latvia', type: 'country', lat: 56.8796, lng: 24.6032, country: 'Latvia' },

  // Asia-Pacific
  { name: 'China', type: 'country', lat: 35.8617, lng: 104.1954, country: 'China' },
  { name: 'India', type: 'country', lat: 20.5937, lng: 78.9629, country: 'India' },
  { name: 'Japan', type: 'country', lat: 36.2048, lng: 138.2529, country: 'Japan' },
  { name: 'South Korea', type: 'country', lat: 35.9078, lng: 127.7669, country: 'South Korea' },
  { name: 'North Korea', type: 'country', lat: 40.3399, lng: 127.5101, country: 'North Korea' },
  { name: 'Indonesia', type: 'country', lat: -0.7893, lng: 113.9213, country: 'Indonesia' },
  { name: 'Australia', type: 'country', lat: -25.2744, lng: 133.7751, country: 'Australia' },
  { name: 'New Zealand', type: 'country', lat: -40.9006, lng: 174.886, country: 'New Zealand' },
  { name: 'Pakistan', type: 'country', lat: 30.3753, lng: 69.3451, country: 'Pakistan' },
  { name: 'Bangladesh', type: 'country', lat: 23.685, lng: 90.3563, country: 'Bangladesh' },
  { name: 'Afghanistan', type: 'country', lat: 33.9391, lng: 67.7099, country: 'Afghanistan' },
  { name: 'Iran', type: 'country', lat: 32.4279, lng: 53.688, country: 'Iran' },
  { name: 'Israel', type: 'country', lat: 31.0461, lng: 34.8516, country: 'Israel' },
  { name: 'Palestine', type: 'country', lat: 31.9522, lng: 35.2332, country: 'Palestine' },
  { name: 'Iraq', type: 'country', lat: 33.2232, lng: 43.6793, country: 'Iraq' },
  { name: 'Jordan', type: 'country', lat: 30.5852, lng: 36.2384, country: 'Jordan' },
  { name: 'Cambodia', type: 'country', lat: 12.5657, lng: 104.9910, country: 'Cambodia' },
  { name: 'Laos', type: 'country', lat: 19.8563, lng: 102.4955, country: 'Laos' },
  { name: 'Myanmar', type: 'country', lat: 21.9162, lng: 95.956, country: 'Myanmar' },
  { name: 'Nepal', type: 'country', lat: 28.3949, lng: 84.124, country: 'Nepal' },
  { name: 'Mongolia', type: 'country', lat: 46.8625, lng: 103.8467, country: 'Mongolia' },
  { name: 'Papua New Guinea', type: 'country', lat: -6.315, lng: 143.9555, country: 'Papua New Guinea' },
  { name: 'Fiji', type: 'country', lat: -17.7134, lng: 178.065, country: 'Fiji' },
  { name: 'Bahrain', type: 'country', lat: 26.0667, lng: 50.5577, country: 'Bahrain' },
  { name: 'Kuwait', type: 'country', lat: 29.3117, lng: 47.4818, country: 'Kuwait' },
  { name: 'Oman', type: 'country', lat: 21.4735, lng: 55.9754, country: 'Oman' },
  { name: 'Qatar', type: 'country', lat: 25.3548, lng: 51.1839, country: 'Qatar' },
  { name: 'Kazakhstan', type: 'country', lat: 48.0196, lng: 66.9237, country: 'Kazakhstan' },
  { name: 'Thailand', type: 'country', lat: 15.87, lng: 100.9925, country: 'Thailand' },
  { name: 'Vietnam', type: 'country', lat: 14.0583, lng: 108.2772, country: 'Vietnam' },
  { name: 'Philippines', type: 'country', lat: 12.8797, lng: 121.774, country: 'Philippines' },
  { name: 'Malaysia', type: 'country', lat: 4.2105, lng: 101.9758, country: 'Malaysia' },
  { name: 'Singapore', type: 'country', lat: 1.3521, lng: 103.8198, country: 'Singapore' },
  { name: 'Taiwan', type: 'country', lat: 23.6978, lng: 120.9605, country: 'Taiwan' },
  { name: 'Sri Lanka', type: 'country', lat: 7.8731, lng: 80.7718, country: 'Sri Lanka' },
  { name: 'Yemen', type: 'country', lat: 15.5527, lng: 48.5164, country: 'Yemen' },
  { name: 'Saudi Arabia', type: 'country', lat: 23.8859, lng: 45.0792, country: 'Saudi Arabia' },
  { name: 'UAE', type: 'country', lat: 23.4241, lng: 53.8478, country: 'UAE' },
  { name: 'Lebanon', type: 'country', lat: 33.8547, lng: 35.8623, country: 'Lebanon' },
  { name: 'Syria', type: 'country', lat: 34.8021, lng: 38.9968, country: 'Syria' },
  { name: 'Solomon Islands', type: 'country', lat: -9.6457, lng: 160.1562, country: 'Solomon Islands' },
  { name: 'Vanuatu', type: 'country', lat: -15.3767, lng: 166.9592, country: 'Vanuatu' },
  { name: 'Samoa', type: 'country', lat: -13.759, lng: -172.1046, country: 'Samoa' },
  { name: 'Tonga', type: 'country', lat: -21.1790, lng: -175.1982, country: 'Tonga' },

  // Africa
  { name: 'Egypt', type: 'country', lat: 26.8206, lng: 30.8025, country: 'Egypt' },
  { name: 'Ethiopia', type: 'country', lat: 9.145, lng: 40.4897, country: 'Ethiopia' },
  { name: 'Kenya', type: 'country', lat: -0.0236, lng: 37.9062, country: 'Kenya' },
  { name: 'Somalia', type: 'country', lat: 5.1521, lng: 46.1996, country: 'Somalia' },
  { name: 'Sudan', type: 'country', lat: 12.8628, lng: 30.2176, country: 'Sudan' },
  { name: 'Algeria', type: 'country', lat: 28.0339, lng: 1.6596, country: 'Algeria' },
  { name: 'Angola', type: 'country', lat: -11.2027, lng: 17.8739, country: 'Angola' },
  { name: 'Ghana', type: 'country', lat: 7.9465, lng: -1.0232, country: 'Ghana' },
  { name: 'Mozambique', type: 'country', lat: -18.6657, lng: 35.5296, country: 'Mozambique' },
  { name: 'Senegal', type: 'country', lat: 14.4974, lng: -14.4524, country: 'Senegal' },
  { name: 'Democratic Republic of Congo', type: 'country', lat: -4.0383, lng: 21.7587, country: 'Democratic Republic of Congo' },
  { name: 'Nigeria', type: 'country', lat: 9.082, lng: 8.6753, country: 'Nigeria' },
  { name: 'South Africa', type: 'country', lat: -30.5595, lng: 22.9375, country: 'South Africa' },
  { name: 'Morocco', type: 'country', lat: 31.7917, lng: -7.0926, country: 'Morocco' },
  { name: 'Tunisia', type: 'country', lat: 33.8869, lng: 9.5375, country: 'Tunisia' },
  { name: 'Libya', type: 'country', lat: 26.3351, lng: 17.2283, country: 'Libya' },
  { name: 'Tanzania', type: 'country', lat: -6.369, lng: 34.8888, country: 'Tanzania' },
  { name: 'Uganda', type: 'country', lat: 1.3733, lng: 32.2903, country: 'Uganda' },
  { name: 'Zimbabwe', type: 'country', lat: -19.0154, lng: 29.1549, country: 'Zimbabwe' },
  { name: 'Cameroon', type: 'country', lat: 7.3697, lng: 12.3547, country: 'Cameroon' },
  { name: 'Zambia', type: 'country', lat: -13.1339, lng: 27.8493, country: 'Zambia' },
  { name: 'Mali', type: 'country', lat: 17.5707, lng: -3.9962, country: 'Mali' },
  { name: 'Niger', type: 'country', lat: 17.6078, lng: 8.0817, country: 'Niger' },
  { name: 'Chad', type: 'country', lat: 15.4542, lng: 18.7322, country: 'Chad' },
  { name: 'Burkina Faso', type: 'country', lat: 12.2383, lng: -1.5616, country: 'Burkina Faso' },
  { name: 'Rwanda', type: 'country', lat: -1.9403, lng: 29.8739, country: 'Rwanda' },
  { name: 'Botswana', type: 'country', lat: -22.3285, lng: 24.6849, country: 'Botswana' },
  { name: 'Namibia', type: 'country', lat: -22.9576, lng: 18.4904, country: 'Namibia' },
  { name: 'Madagascar', type: 'country', lat: -18.7669, lng: 46.8691, country: 'Madagascar' },
  { name: 'Malawi', type: 'country', lat: -13.2543, lng: 34.3015, country: 'Malawi' },
  { name: 'South Sudan', type: 'country', lat: 6.877, lng: 31.307, country: 'South Sudan' },
  { name: 'Eritrea', type: 'country', lat: 15.1794, lng: 39.7823, country: 'Eritrea' },
  { name: 'Djibouti', type: 'country', lat: 11.8251, lng: 42.5903, country: 'Djibouti' },
  { name: 'Sierra Leone', type: 'country', lat: 8.4606, lng: -11.7799, country: 'Sierra Leone' },
  { name: 'Liberia', type: 'country', lat: 6.4281, lng: -9.4295, country: 'Liberia' },
  { name: 'Guinea', type: 'country', lat: 9.9456, lng: -9.6966, country: 'Guinea' },
  { name: 'Ivory Coast', type: 'country', lat: 7.54, lng: -5.5471, country: 'Ivory Coast' },
  { name: 'Togo', type: 'country', lat: 8.6195, lng: 0.8248, country: 'Togo' },
  { name: 'Benin', type: 'country', lat: 9.3077, lng: 2.3158, country: 'Benin' },
  { name: 'Gambia', type: 'country', lat: 13.4432, lng: -15.3101, country: 'Gambia' },
  { name: 'Mauritania', type: 'country', lat: 21.0079, lng: -10.9408, country: 'Mauritania' },
  { name: 'Congo-Brazzaville', type: 'country', lat: -0.228, lng: 15.8277, country: 'Congo-Brazzaville' },
]

// Generate AI sports summary using Claude
async function generateSportsSummary(
  location: typeof ALL_COUNTRIES[0]
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
async function generateAllSportsSummaries() {
  console.log('⚽ Generating SPORTS write-ups for ALL 128 countries...\n')
  console.log('Voice: Bill Simmons / Gary Neville')
  console.log('Length: 2,000-3,000 characters\n')

  let generated = 0
  let failed = 0
  let skipped = 0

  for (const location of ALL_COUNTRIES) {
    console.log(`\n📍 [${generated + skipped + failed + 1}/128] Processing: ${location.name}`)

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

  console.log(`\n\n⚽ SPORTS GENERATION COMPLETE!`)
  console.log(`   Generated: ${generated} summaries`)
  console.log(`   Skipped (already exist): ${skipped} summaries`)
  console.log(`   Failed: ${failed} summaries`)
  console.log(`   Total countries: 128`)

  if (generated > 0) {
    console.log(`\n📊 Database Status:`)
    const totalSports = await prisma.locationSummary.count({
      where: { category: 'sports', type: 'country' }
    })
    console.log(`   Total sports write-ups: ${totalSports}/128 countries`)
  }

  console.log(`\n✅ Report: Completed Sports for ${generated} countries.`)
}

generateAllSportsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
