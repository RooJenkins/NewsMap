import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// EXACTLY 128 COUNTRIES for Travel & Tourism writeups (major tourism destinations + all regions represented)
const ALL_COUNTRIES = [
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100, country: 'Afghanistan' },
  { name: 'Albania', lat: 41.3275, lng: 19.8187, country: 'Albania' },
  { name: 'Algeria', lat: 36.7538, lng: 3.0588, country: 'Algeria' },
  { name: 'Angola', lat: -8.8383, lng: 13.2344, country: 'Angola' },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167, country: 'Argentina' },
  { name: 'Armenia', lat: 40.0691, lng: 45.0382, country: 'Armenia' },
  { name: 'Australia', lat: -25.2744, lng: 133.7751, country: 'Australia' },
  { name: 'Austria', lat: 47.5162, lng: 14.5501, country: 'Austria' },
  { name: 'Azerbaijan', lat: 40.1431, lng: 47.5769, country: 'Azerbaijan' },
  { name: 'Bahamas', lat: 25.0343, lng: -77.3963, country: 'Bahamas' },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577, country: 'Bahrain' },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563, country: 'Bangladesh' },
  { name: 'Barbados', lat: 13.1939, lng: -59.5432, country: 'Barbados' },
  { name: 'Belarus', lat: 53.7098, lng: 27.9534, country: 'Belarus' },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699, country: 'Belgium' },
  { name: 'Belize', lat: 17.1899, lng: -88.4976, country: 'Belize' },
  { name: 'Benin', lat: 9.3077, lng: 2.3158, country: 'Benin' },
  { name: 'Bhutan', lat: 27.5142, lng: 90.4336, country: 'Bhutan' },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887, country: 'Bolivia' },
  { name: 'Bosnia and Herzegovina', lat: 43.9159, lng: 17.6791, country: 'Bosnia and Herzegovina' },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849, country: 'Botswana' },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253, country: 'Brazil' },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858, country: 'Bulgaria' },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616, country: 'Burkina Faso' },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910, country: 'Cambodia' },
  { name: 'Cameroon', lat: 7.3697, lng: 12.3547, country: 'Cameroon' },
  { name: 'Canada', lat: 56.1304, lng: -106.3468, country: 'Canada' },
  { name: 'Chile', lat: -35.6751, lng: -71.5430, country: 'Chile' },
  { name: 'China', lat: 35.8617, lng: 104.1954, country: 'China' },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973, country: 'Colombia' },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534, country: 'Costa Rica' },
  { name: 'Croatia', lat: 45.1, lng: 15.2, country: 'Croatia' },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812, country: 'Cuba' },
  { name: 'Cyprus', lat: 35.1264, lng: 33.4299, country: 'Cyprus' },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.4730, country: 'Czech Republic' },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587, country: 'Democratic Republic of Congo' },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018, country: 'Denmark' },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627, country: 'Dominican Republic' },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834, country: 'Ecuador' },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025, country: 'Egypt' },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965, country: 'El Salvador' },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136, country: 'Estonia' },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897, country: 'Ethiopia' },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650, country: 'Fiji' },
  { name: 'Finland', lat: 61.9241, lng: 25.7482, country: 'Finland' },
  { name: 'France', lat: 46.2276, lng: 2.2137, country: 'France' },
  { name: 'Georgia', lat: 42.3154, lng: 43.3569, country: 'Georgia' },
  { name: 'Germany', lat: 51.1657, lng: 10.4515, country: 'Germany' },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232, country: 'Ghana' },
  { name: 'Greece', lat: 39.0742, lng: 21.8243, country: 'Greece' },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308, country: 'Guatemala' },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852, country: 'Haiti' },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419, country: 'Honduras' },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033, country: 'Hungary' },
  { name: 'Iceland', lat: 64.9631, lng: -19.0208, country: 'Iceland' },
  { name: 'India', lat: 20.5937, lng: 78.9629, country: 'India' },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213, country: 'Indonesia' },
  { name: 'Iran', lat: 32.4279, lng: 53.6880, country: 'Iran' },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793, country: 'Iraq' },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439, country: 'Ireland' },
  { name: 'Israel', lat: 31.0461, lng: 34.8516, country: 'Israel' },
  { name: 'Italy', lat: 41.8719, lng: 12.5674, country: 'Italy' },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975, country: 'Jamaica' },
  { name: 'Japan', lat: 36.2048, lng: 138.2529, country: 'Japan' },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384, country: 'Jordan' },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237, country: 'Kazakhstan' },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062, country: 'Kenya' },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818, country: 'Kuwait' },
  { name: 'Laos', lat: 19.8563, lng: 102.4955, country: 'Laos' },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032, country: 'Latvia' },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623, country: 'Lebanon' },
  { name: 'Libya', lat: 26.3351, lng: 17.2283, country: 'Libya' },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813, country: 'Lithuania' },
  { name: 'Luxembourg', lat: 49.8153, lng: 6.1296, country: 'Luxembourg' },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758, country: 'Malaysia' },
  { name: 'Maldives', lat: 3.2028, lng: 73.2207, country: 'Maldives' },
  { name: 'Malta', lat: 35.9375, lng: 14.3754, country: 'Malta' },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528, country: 'Mexico' },
  { name: 'Moldova', lat: 47.4116, lng: 28.3699, country: 'Moldova' },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467, country: 'Mongolia' },
  { name: 'Montenegro', lat: 42.7087, lng: 19.3744, country: 'Montenegro' },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926, country: 'Morocco' },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296, country: 'Mozambique' },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560, country: 'Myanmar' },
  { name: 'Namibia', lat: -22.9576, lng: 18.4904, country: 'Namibia' },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240, country: 'Nepal' },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913, country: 'Netherlands' },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860, country: 'New Zealand' },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072, country: 'Nicaragua' },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753, country: 'Nigeria' },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101, country: 'North Korea' },
  { name: 'Norway', lat: 60.4720, lng: 8.4689, country: 'Norway' },
  { name: 'Oman', lat: 21.4735, lng: 55.9754, country: 'Oman' },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451, country: 'Pakistan' },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332, country: 'Palestine' },
  { name: 'Panama', lat: 8.5380, lng: -80.7821, country: 'Panama' },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555, country: 'Papua New Guinea' },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438, country: 'Paraguay' },
  { name: 'Peru', lat: -9.1900, lng: -75.0152, country: 'Peru' },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740, country: 'Philippines' },
  { name: 'Poland', lat: 51.9194, lng: 19.1451, country: 'Poland' },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245, country: 'Portugal' },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839, country: 'Qatar' },
  { name: 'Romania', lat: 45.9432, lng: 24.9668, country: 'Romania' },
  { name: 'Russia', lat: 61.5240, lng: 105.3188, country: 'Russia' },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739, country: 'Rwanda' },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792, country: 'Saudi Arabia' },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524, country: 'Senegal' },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059, country: 'Serbia' },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, country: 'Singapore' },
  { name: 'Slovakia', lat: 48.6690, lng: 19.6990, country: 'Slovakia' },
  { name: 'Slovenia', lat: 46.1512, lng: 14.9955, country: 'Slovenia' },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996, country: 'Somalia' },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375, country: 'South Africa' },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669, country: 'South Korea' },
  { name: 'Spain', lat: 40.4637, lng: -3.7492, country: 'Spain' },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718, country: 'Sri Lanka' },
  { name: 'Sudan', lat: 15.5007, lng: 32.5599, country: 'Sudan' },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435, country: 'Sweden' },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275, country: 'Switzerland' },
  { name: 'Syria', lat: 34.8021, lng: 38.9968, country: 'Syria' },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605, country: 'Taiwan' },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888, country: 'Tanzania' },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925, country: 'Thailand' },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375, country: 'Tunisia' },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433, country: 'Turkey' },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903, country: 'Uganda' },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656, country: 'Ukraine' },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478, country: 'United Arab Emirates' },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360, country: 'United Kingdom' },
  { name: 'United States', lat: 37.0902, lng: -95.7129, country: 'United States' },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658, country: 'Uruguay' },
  { name: 'Uzbekistan', lat: 41.3775, lng: 64.5853, country: 'Uzbekistan' },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897, country: 'Venezuela' },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772, country: 'Vietnam' },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164, country: 'Yemen' },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549, country: 'Zimbabwe' }
]

// Generate AI travel writeup using Claude
async function generateTravelWriteup(country: typeof ALL_COUNTRIES[0]): Promise<{ summary: string; issues: string[] }> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a TRAVEL & TOURISM write-up in the style of Anthony Bourdain and Rick Steves.

CATEGORY: Travel & Tourism
VOICE: Anthony Bourdain / Rick Steves blend - honest, vivid, practical, with Bourdain's edge and Steves' helpful detail
STYLE: Raw honesty about what works and what doesn't. Vivid scene-setting. Practical advice. No bullshit marketing speak.

FOCUS AREAS FOR TRAVEL:
- Must-see destinations and hidden gems
- Tourist infrastructure (airports, hotels, transport)
- Safety and practical concerns
- Visa requirements and entry process
- Best times to visit
- Tourism numbers and economic impact
- Costs and value for money
- Local food and culture experiences
- Overtourism or underdevelopment issues

LENGTH: 2,500-3,500 characters

Write a comprehensive travel summary for ${country.name} (November 2025) that:

1. OPENING HOOK (150-200 words): Paint a vivid scene of arriving in ${country.name}. What's the first thing that hits you? Airport? Street? Smell? Sound? Make it visceral and honest.

2. THE PITCH (300-400 words):
   - What draws tourists here? (beaches, mountains, culture, history, adventure, etc.)
   - Key destinations and experiences
   - Current tourism numbers and trends
   - Who visits and why?

3. INFRASTRUCTURE REALITY (400-500 words):
   - How do you get there? (flights, visas, entry requirements)
   - Hotels/accommodation quality and prices
   - Transport within country (trains, buses, cars, flights)
   - English language prevalence
   - Tourist facilities and services
   - Specific examples of what works and what's a hassle

4. SAFETY & PRACTICALITIES (300-400 words):
   - Real talk on safety (crime, scams, health, terrorism, whatever's relevant)
   - Visa process (easy? nightmare? costs?)
   - Best times to visit and why
   - Costs: Is it budget, mid-range, or expensive?
   - Specific warnings or tips

5. TOURISM IMPACT & FUTURE (300-400 words):
   - Tourism's role in economy (% GDP, jobs)
   - Overtourism issues or desperate for more visitors?
   - Government plans or problems
   - Climate/political risks to tourism
   - Hidden gems still undiscovered

6. BOTTOM LINE (150 words):
   - Sharp, honest verdict
   - Who should go and why
   - Who should skip it and why
   - Bourdain-style memorable conclusion

CRITICAL REQUIREMENTS:
- Use real November 2025 context and current tourism stats
- Be specific: actual destinations, hotel names, prices, visa costs, airport codes
- Honest about problems: scams, dangers, bad infrastructure, overtourism
- Conversational voice - like you're giving advice to a friend
- Mix Bourdain's edge ("this place is a tourist trap") with Steves' helpfulness ("here's how to avoid it")
- 2,500-3,500 characters total

Generate the travel write-up now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract key issues from the writeup
    const issues: string[] = []

    // Look for tourism statistics, safety issues, visa info
    if (summaryText.toLowerCase().includes('million visitors') || summaryText.toLowerCase().includes('m visitors')) {
      const visitorMatch = summaryText.match(/(\d+(?:\.\d+)?)\s*m(?:illion)?\s*visitors/i)
      if (visitorMatch) issues.push(`${visitorMatch[1]}M annual visitors`)
    }

    if (summaryText.toLowerCase().includes('visa')) {
      if (summaryText.toLowerCase().includes('visa-free') || summaryText.toLowerCase().includes('no visa')) {
        issues.push('Visa-free entry')
      } else if (summaryText.toLowerCase().includes('visa nightmare') || summaryText.toLowerCase().includes('visa complex')) {
        issues.push('Complex visa requirements')
      }
    }

    if (summaryText.toLowerCase().includes('overtourism') || summaryText.toLowerCase().includes('over-tourism')) {
      issues.push('Overtourism concerns')
    }

    if (summaryText.toLowerCase().includes('dangerous') || summaryText.toLowerCase().includes('unsafe') || summaryText.toLowerCase().includes('do not travel')) {
      issues.push('Safety concerns')
    }

    if (summaryText.toLowerCase().includes('expensive') || summaryText.toLowerCase().includes('costly')) {
      issues.push('High costs')
    } else if (summaryText.toLowerCase().includes('budget') || summaryText.toLowerCase().includes('cheap') || summaryText.toLowerCase().includes('affordable')) {
      issues.push('Budget-friendly')
    }

    // Default issues if none found
    if (issues.length === 0) {
      issues.push('Tourism destination', 'Infrastructure', 'Safety', 'Visa requirements')
    }

    return {
      summary: summaryText,
      issues: issues.slice(0, 6) // Max 6 issues
    }
  } catch (error) {
    console.error(`Error generating travel writeup for ${country.name}:`, error)
    throw error
  }
}

// Main execution
async function generateAllTravelWriteups() {
  console.log('╔════════════════════════════════════════════════════════════╗')
  console.log('║  GENERATING TRAVEL & TOURISM WRITEUPS FOR ALL 128 COUNTRIES  ║')
  console.log('╚════════════════════════════════════════════════════════════╝')
  console.log('')
  console.log(`Total countries: ${ALL_COUNTRIES.length}`)
  console.log(`Voice: Anthony Bourdain / Rick Steves`)
  console.log(`Length: 2,500-3,500 characters each`)
  console.log(`Category: travel`)
  console.log('')

  let success = 0
  let failed = 0
  const errors: Array<{ country: string; error: string }> = []

  for (let i = 0; i < ALL_COUNTRIES.length; i++) {
    const country = ALL_COUNTRIES[i]
    const progress = `[${i + 1}/${ALL_COUNTRIES.length}]`

    console.log(`\n${'='.repeat(70)}`)
    console.log(`${progress} ${country.name}`)
    console.log('='.repeat(70))

    try {
      console.log(`  → Generating writeup with Claude Sonnet 4.5...`)

      const { summary, issues } = await generateTravelWriteup(country)

      console.log(`  → Character count: ${summary.length}`)
      console.log(`  → Issues: ${issues.join(', ')}`)

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'travel'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.country,
          lat: country.lat,
          lng: country.lng,
          category: 'travel',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          lat: country.lat,
          lng: country.lng,
          updatedAt: new Date()
        }
      })

      success++
      console.log(`  ✓ SAVED to database`)

      // Preview first 5 lines
      const previewLines = summary.split('\n').slice(0, 5)
      console.log(`\n  Preview:`)
      previewLines.forEach(line => console.log(`    ${line.substring(0, 80)}${line.length > 80 ? '...' : ''}`))
      console.log(`    ... (${summary.length} total characters)\n`)

      // Rate limit: 2 seconds between requests to avoid API limits
      if (i < ALL_COUNTRIES.length - 1) {
        console.log(`  ⏱  Rate limit delay (2s)...`)
        await new Promise(resolve => setTimeout(resolve, 2000))
      }

    } catch (error) {
      failed++
      const errorMsg = error instanceof Error ? error.message : String(error)
      errors.push({ country: country.name, error: errorMsg })
      console.error(`  ✗ FAILED: ${errorMsg}`)
    }
  }

  // Final report
  console.log(`\n\n${'═'.repeat(70)}`)
  console.log(`TRAVEL WRITEUP GENERATION COMPLETE`)
  console.log('═'.repeat(70))
  console.log(`  ✓ Successful: ${success} countries`)
  console.log(`  ✗ Failed: ${failed} countries`)
  console.log(`  📊 Success rate: ${((success / ALL_COUNTRIES.length) * 100).toFixed(1)}%`)
  console.log('═'.repeat(70))

  if (errors.length > 0) {
    console.log(`\nErrors encountered:`)
    errors.forEach(({ country, error }) => {
      console.log(`  • ${country}: ${error}`)
    })
  }

  if (success === ALL_COUNTRIES.length) {
    console.log(`\n🎉 TRAVEL COMPLETE: All 128 countries saved!`)
  } else {
    console.log(`\n⚠️  ${failed} countries failed - review errors above`)
  }
}

generateAllTravelWriteups()
  .catch(error => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
