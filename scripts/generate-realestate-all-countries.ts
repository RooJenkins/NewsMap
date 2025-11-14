import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// All 143 countries with coordinates
const countries = [
  // Americas (27)
  { name: 'United States', lat: 37.0902, lng: -95.7129 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Brazil', lat: -14.235, lng: -51.9253 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Chile', lat: -35.6751, lng: -71.543 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Peru', lat: -9.19, lng: -75.0152 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Honduras', lat: 15.2, lng: -86.2419 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Panama', lat: 8.538, lng: -80.7821 },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  { name: 'Trinidad and Tobago', lat: 10.691, lng: -61.2225 },
  { name: 'Guyana', lat: 4.8604, lng: -58.9302 },
  { name: 'Suriname', lat: 3.9193, lng: -56.0278 },
  { name: 'Belize', lat: 17.1899, lng: -88.7979 },

  // Europe (30)
  { name: 'United Kingdom', lat: 55.3781, lng: -3.436 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'Russia', lat: 61.524, lng: 105.3188 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'Denmark', lat: 56.26, lng: 9.5018 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.4730 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Norway', lat: 60.472, lng: 8.4689 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'Romania', lat: 45.9432, lng: 24.9668 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Slovakia', lat: 48.669, lng: 19.699 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },

  // Asia-Pacific (43)
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.886 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Afghanistan', lat: 33.9391, lng: 67.3099 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Palestine', lat: 31.9454, lng: 35.2338 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'Laos', lat: 19.8523, lng: 102.4955 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Oman', lat: 21.4735, lng: 55.9754 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.6964 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164 },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
  { name: 'UAE', lat: 23.4241, lng: 53.8478 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Syria', lat: 34.8021, lng: 38.9968 },
  { name: 'Solomon Islands', lat: -9.6412, lng: 160.1562 },
  { name: 'Vanuatu', lat: -15.3767, lng: 166.9592 },
  { name: 'Samoa', lat: -13.7590, lng: -172.1046 },
  { name: 'Tonga', lat: -21.1789, lng: -175.1982 },

  // Africa (43)
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Ghana', lat: 7.3697, lng: -5.3677 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 },
  { name: 'Cameroon', lat: 3.8480, lng: 11.5021 },
  { name: 'Zambia', lat: -13.1339, lng: 27.8493 },
  { name: 'Mali', lat: 17.5707, lng: -3.9962 },
  { name: 'Niger', lat: 17.6078, lng: 8.6753 },
  { name: 'Chad', lat: 15.4542, lng: 18.7322 },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Rwanda', lat: -1.9536, lng: 29.8739 },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  { name: 'Namibia', lat: -22.9375, lng: 18.6531 },
  { name: 'Madagascar', lat: -18.7669, lng: 46.8691 },
  { name: 'Malawi', lat: -13.2543, lng: 34.3015 },
  { name: 'South Sudan', lat: 6.8770, lng: 31.3070 },
  { name: 'Eritrea', lat: 15.1794, lng: 39.7823 },
  { name: 'Djibouti', lat: 11.8254, lng: 42.5905 },
  { name: 'Sierra Leone', lat: 8.4606, lng: -11.7799 },
  { name: 'Liberia', lat: 6.4281, lng: -9.4295 },
  { name: 'Guinea', lat: 9.9456, lng: -9.6966 },
  { name: 'Ivory Coast', lat: 7.5400, lng: -5.5471 },
  { name: 'Togo', lat: 6.1256, lng: 1.2324 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Gambia', lat: 13.4549, lng: -15.5790 },
  { name: 'Mauritania', lat: 21.0079, lng: -10.9408 },
  { name: 'Congo-Brazzaville', lat: -4.0383, lng: 21.7587 },
]

async function generateRealEstateSummary(countryName: string): Promise<{
  summary: string
  issues: string[]
}> {
  const stats = countryData[countryName]

  if (!stats) {
    console.log(`⚠️  No country data found for ${countryName}`)
    return { summary: '', issues: [] }
  }

  // Generate AI summary in Matt Yglesias YIMBY / housing economist voice
  const prompt = `You are writing as a housing policy expert in the style of Matt Yglesias - YIMBY advocate, housing economist, deeply informed about housing markets and policy. You're analyzing the real estate and housing situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- GDP per capita: ${stats.gdpPerCapita}
- Capital: ${stats.capital}

Write a comprehensive real estate & housing analysis (2,000-3,000 characters) that covers:

1. HOUSING AFFORDABILITY & PRICES: Current state of housing costs relative to incomes, price trends, affordability crisis or stability
2. HOMEOWNERSHIP VS RENTAL: Ownership rates, rental market dynamics, which is more common and why
3. CONSTRUCTION ACTIVITY: New housing supply, building boom or shortage, development constraints
4. ZONING & REGULATION: How land use regulations affect housing supply, NIMBYism vs YIMBYism, regulatory barriers
5. DENSITY VS SPRAWL: Urban development patterns, apartment vs single-family housing, transit-oriented development
6. REAL ESTATE INVESTMENT: Role of investors in housing market, speculation, foreign investment
7. HOMELESSNESS: Scale of the issue, causes, policy responses

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect housing policy to real human impact - who can afford to live where, how this shapes cities
- Be analytical about what drives housing costs and what policies actually work
- Use the YIMBY perspective: more housing supply generally helps affordability
- Acknowledge trade-offs and political economy challenges
- Show why this matters: housing costs shape everything from family formation to economic mobility
- Length: 2,000-3,000 characters (not words - characters)

After the summary, list 3-5 major housing issues as brief phrases.

Format your response EXACTLY as follows:

## Summary
[Your 2,000-3,000 character housing analysis here]

## Issues
- Issue 1
- Issue 2
- Issue 3
- Issue 4
- Issue 5`

  const message = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText =
    message.content[0].type === 'text' ? message.content[0].text : ''

  // Parse the response
  const summaryMatch = responseText.match(/## Summary\s+([\s\S]*?)(?=\n## Issues|$)/i)
  const issuesMatch = responseText.match(/## Issues\s+([\s\S]*?)$/i)

  const summary = summaryMatch ? summaryMatch[1].trim() : responseText
  const issues = issuesMatch
    ? issuesMatch[1]
        .split('\n')
        .filter((line) => line.trim().startsWith('-'))
        .map((line) => line.replace(/^-\s*/, '').trim())
    : []

  return { summary, issues }
}

async function main() {
  console.log('🚀 Starting real estate & housing summary generation for ALL 143 countries\n')
  console.log(`Processing ${countries.length} countries...\n`)

  let successCount = 0
  let errorCount = 0
  const startTime = Date.now()

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i]
    const progress = `[${i + 1}/${countries.length}]`

    console.log(`${progress} Processing: ${country.name}`)

    try {
      const { summary, issues } = await generateRealEstateSummary(country.name)

      // Skip if no data found
      if (!summary) {
        console.log(`   ⏭️  Skipped - no data available`)
        errorCount++
        continue
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'realestate',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'realestate',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`   ✅ Saved (${summary.length} chars, ${issues.length} issues)`)
      successCount++

      // Rate limiting - wait 2 seconds between API calls to be respectful
      if (i < countries.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    } catch (error) {
      console.error(`   ❌ Error:`, error instanceof Error ? error.message : error)
      errorCount++
      // Still rate limit on errors
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  const endTime = Date.now()
  const duration = ((endTime - startTime) / 1000 / 60).toFixed(2)

  console.log('\n' + '='.repeat(80))
  console.log('✅ GENERATION COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log(`⏱️  Duration: ${duration} minutes`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
