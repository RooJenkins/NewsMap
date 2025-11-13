import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Get the batch number from command line argument (0-9 for each category)
const args = process.argv.slice(2)
const category = args[0] // 'entertainment' or 'lifestyle'
const batchNum = parseInt(args[1]) // 0-9
const batchSize = 13 // ~128/10 = 12-13 per batch

console.log(`🚀 Starting batch ${batchNum} for ${category} category`)

// ALL COUNTRIES (from comprehensive list)
const ALL_COUNTRIES = [
  // Americas (21)
  { name: 'United States', type: 'country', lat: 39.8283, lng: -98.5795, country: 'US' },
  { name: 'Canada', type: 'country', lat: 56.1304, lng: -106.3468, country: 'Canada' },
  { name: 'Mexico', type: 'country', lat: 23.6345, lng: -102.5528, country: 'Mexico' },
  { name: 'Brazil', type: 'country', lat: -14.2350, lng: -51.9253, country: 'Brazil' },
  { name: 'Argentina', type: 'country', lat: -38.4161, lng: -63.6167, country: 'Argentina' },
  { name: 'Chile', type: 'country', lat: -35.6751, lng: -71.5430, country: 'Chile' },
  { name: 'Colombia', type: 'country', lat: 4.5709, lng: -74.2973, country: 'Colombia' },
  { name: 'Peru', type: 'country', lat: -9.1900, lng: -75.0152, country: 'Peru' },
  { name: 'Venezuela', type: 'country', lat: 6.4238, lng: -66.5897, country: 'Venezuela' },
  { name: 'Ecuador', type: 'country', lat: -1.8312, lng: -78.1834, country: 'Ecuador' },
  { name: 'Bolivia', type: 'country', lat: -16.2902, lng: -63.5887, country: 'Bolivia' },
  { name: 'Paraguay', type: 'country', lat: -23.4425, lng: -58.4438, country: 'Paraguay' },
  { name: 'Uruguay', type: 'country', lat: -32.5228, lng: -55.7658, country: 'Uruguay' },
  { name: 'Cuba', type: 'country', lat: 21.5218, lng: -77.7812, country: 'Cuba' },
  { name: 'Haiti', type: 'country', lat: 18.9712, lng: -72.2852, country: 'Haiti' },
  { name: 'Dominican Republic', type: 'country', lat: 18.7357, lng: -70.1627, country: 'Dominican Republic' },
  { name: 'Guatemala', type: 'country', lat: 15.7835, lng: -90.2308, country: 'Guatemala' },
  { name: 'Honduras', type: 'country', lat: 15.2000, lng: -86.2419, country: 'Honduras' },
  { name: 'Nicaragua', type: 'country', lat: 12.8654, lng: -85.2072, country: 'Nicaragua' },
  { name: 'El Salvador', type: 'country', lat: 13.7942, lng: -88.8965, country: 'El Salvador' },
  { name: 'Costa Rica', type: 'country', lat: 9.7489, lng: -83.7534, country: 'Costa Rica' },
  { name: 'Panama', type: 'country', lat: 8.5380, lng: -80.7821, country: 'Panama' },

  // Europe (32)
  { name: 'United Kingdom', type: 'country', lat: 55.3781, lng: -3.4360, country: 'UK' },
  { name: 'France', type: 'country', lat: 46.2276, lng: 2.2137, country: 'France' },
  { name: 'Germany', type: 'country', lat: 51.1657, lng: 10.4515, country: 'Germany' },
  { name: 'Italy', type: 'country', lat: 41.8719, lng: 12.5674, country: 'Italy' },
  { name: 'Spain', type: 'country', lat: 40.4637, lng: -3.7492, country: 'Spain' },
  { name: 'Poland', type: 'country', lat: 51.9194, lng: 19.1451, country: 'Poland' },
  { name: 'Ukraine', type: 'country', lat: 48.3794, lng: 31.1656, country: 'Ukraine' },
  { name: 'Russia', type: 'country', lat: 61.5240, lng: 105.3188, country: 'Russia' },
  { name: 'Netherlands', type: 'country', lat: 52.1326, lng: 5.2913, country: 'Netherlands' },
  { name: 'Belgium', type: 'country', lat: 50.5039, lng: 4.4699, country: 'Belgium' },
  { name: 'Sweden', type: 'country', lat: 60.1282, lng: 18.6435, country: 'Sweden' },
  { name: 'Norway', type: 'country', lat: 60.4720, lng: 8.4689, country: 'Norway' },
  { name: 'Denmark', type: 'country', lat: 56.2639, lng: 9.5018, country: 'Denmark' },
  { name: 'Finland', type: 'country', lat: 61.9241, lng: 25.7482, country: 'Finland' },
  { name: 'Switzerland', type: 'country', lat: 46.8182, lng: 8.2275, country: 'Switzerland' },
  { name: 'Austria', type: 'country', lat: 47.5162, lng: 14.5501, country: 'Austria' },
  { name: 'Greece', type: 'country', lat: 39.0742, lng: 21.8243, country: 'Greece' },
  { name: 'Portugal', type: 'country', lat: 39.3999, lng: -8.2245, country: 'Portugal' },
  { name: 'Czech Republic', type: 'country', lat: 49.8175, lng: 15.4730, country: 'Czech Republic' },
  { name: 'Romania', type: 'country', lat: 45.9432, lng: 24.9668, country: 'Romania' },
  { name: 'Hungary', type: 'country', lat: 47.1625, lng: 19.5033, country: 'Hungary' },
  { name: 'Serbia', type: 'country', lat: 44.0165, lng: 21.0059, country: 'Serbia' },
  { name: 'Croatia', type: 'country', lat: 45.1, lng: 15.2, country: 'Croatia' },
  { name: 'Bulgaria', type: 'country', lat: 42.7339, lng: 25.4858, country: 'Bulgaria' },
  { name: 'Slovakia', type: 'country', lat: 48.6690, lng: 19.6990, country: 'Slovakia' },
  { name: 'Ireland', type: 'country', lat: 53.4129, lng: -8.2439, country: 'Ireland' },
  { name: 'Lithuania', type: 'country', lat: 55.1694, lng: 23.8813, country: 'Lithuania' },
  { name: 'Latvia', type: 'country', lat: 56.8796, lng: 24.6032, country: 'Latvia' },
  { name: 'Estonia', type: 'country', lat: 58.5953, lng: 25.0136, country: 'Estonia' },
  { name: 'Slovenia', type: 'country', lat: 46.1512, lng: 14.9955, country: 'Slovenia' },
  { name: 'Turkey', type: 'country', lat: 38.9637, lng: 35.2433, country: 'Turkey' },

  // Asia (24)
  { name: 'China', type: 'country', lat: 35.8617, lng: 104.1954, country: 'China' },
  { name: 'India', type: 'country', lat: 20.5937, lng: 78.9629, country: 'India' },
  { name: 'Japan', type: 'country', lat: 36.2048, lng: 138.2529, country: 'Japan' },
  { name: 'South Korea', type: 'country', lat: 35.9078, lng: 127.7669, country: 'South Korea' },
  { name: 'North Korea', type: 'country', lat: 40.3399, lng: 127.5101, country: 'North Korea' },
  { name: 'Indonesia', type: 'country', lat: -0.7893, lng: 113.9213, country: 'Indonesia' },
  { name: 'Pakistan', type: 'country', lat: 30.3753, lng: 69.3451, country: 'Pakistan' },
  { name: 'Bangladesh', type: 'country', lat: 23.6850, lng: 90.3563, country: 'Bangladesh' },
  { name: 'Vietnam', type: 'country', lat: 14.0583, lng: 108.2772, country: 'Vietnam' },
  { name: 'Thailand', type: 'country', lat: 15.8700, lng: 100.9925, country: 'Thailand' },
  { name: 'Philippines', type: 'country', lat: 12.8797, lng: 121.7740, country: 'Philippines' },
  { name: 'Malaysia', type: 'country', lat: 4.2105, lng: 101.9758, country: 'Malaysia' },
  { name: 'Singapore', type: 'country', lat: 1.3521, lng: 103.8198, country: 'Singapore' },
  { name: 'Myanmar', type: 'country', lat: 21.9162, lng: 95.9560, country: 'Myanmar' },
  { name: 'Taiwan', type: 'country', lat: 23.6978, lng: 120.9605, country: 'Taiwan' },
  { name: 'Nepal', type: 'country', lat: 28.3949, lng: 84.1240, country: 'Nepal' },
  { name: 'Sri Lanka', type: 'country', lat: 7.8731, lng: 80.7718, country: 'Sri Lanka' },
  { name: 'Afghanistan', type: 'country', lat: 33.9391, lng: 67.7100, country: 'Afghanistan' },
  { name: 'Uzbekistan', type: 'country', lat: 41.3775, lng: 64.5853, country: 'Uzbekistan' },
  { name: 'Kazakhstan', type: 'country', lat: 48.0196, lng: 66.9237, country: 'Kazakhstan' },
  { name: 'Cambodia', type: 'country', lat: 12.5657, lng: 104.9910, country: 'Cambodia' },
  { name: 'Laos', type: 'country', lat: 19.8563, lng: 102.4955, country: 'Laos' },
  { name: 'Mongolia', type: 'country', lat: 46.8625, lng: 103.8467, country: 'Mongolia' },

  // Middle East (13)
  { name: 'Israel', type: 'country', lat: 31.0461, lng: 34.8516, country: 'Israel' },
  { name: 'Palestine', type: 'country', lat: 31.9522, lng: 35.2332, country: 'Palestine' },
  { name: 'Saudi Arabia', type: 'country', lat: 23.8859, lng: 45.0792, country: 'Saudi Arabia' },
  { name: 'Iran', type: 'country', lat: 32.4279, lng: 53.6880, country: 'Iran' },
  { name: 'Iraq', type: 'country', lat: 33.2232, lng: 43.6793, country: 'Iraq' },
  { name: 'Syria', type: 'country', lat: 34.8021, lng: 38.9968, country: 'Syria' },
  { name: 'Lebanon', type: 'country', lat: 33.8547, lng: 35.8623, country: 'Lebanon' },
  { name: 'Jordan', type: 'country', lat: 30.5852, lng: 36.2384, country: 'Jordan' },
  { name: 'United Arab Emirates', type: 'country', lat: 23.4241, lng: 53.8478, country: 'UAE' },
  { name: 'Kuwait', type: 'country', lat: 29.3117, lng: 47.4818, country: 'Kuwait' },
  { name: 'Qatar', type: 'country', lat: 25.3548, lng: 51.1839, country: 'Qatar' },
  { name: 'Oman', type: 'country', lat: 21.4735, lng: 55.9754, country: 'Oman' },
  { name: 'Yemen', type: 'country', lat: 15.5527, lng: 48.5164, country: 'Yemen' },
  { name: 'Bahrain', type: 'country', lat: 26.0667, lng: 50.5577, country: 'Bahrain' },

  // Africa (20)
  { name: 'Egypt', type: 'country', lat: 26.8206, lng: 30.8025, country: 'Egypt' },
  { name: 'South Africa', type: 'country', lat: -30.5595, lng: 22.9375, country: 'South Africa' },
  { name: 'Nigeria', type: 'country', lat: 9.0820, lng: 8.6753, country: 'Nigeria' },
  { name: 'Ethiopia', type: 'country', lat: 9.1450, lng: 40.4897, country: 'Ethiopia' },
  { name: 'Kenya', type: 'country', lat: -0.0236, lng: 37.9062, country: 'Kenya' },
  { name: 'Morocco', type: 'country', lat: 31.7917, lng: -7.0926, country: 'Morocco' },
  { name: 'Algeria', type: 'country', lat: 28.0339, lng: 1.6596, country: 'Algeria' },
  { name: 'Tunisia', type: 'country', lat: 33.8869, lng: 9.5375, country: 'Tunisia' },
  { name: 'Libya', type: 'country', lat: 26.3351, lng: 17.2283, country: 'Libya' },
  { name: 'Sudan', type: 'country', lat: 12.8628, lng: 30.2176, country: 'Sudan' },
  { name: 'Ghana', type: 'country', lat: 7.9465, lng: -1.0232, country: 'Ghana' },
  { name: 'Tanzania', type: 'country', lat: -6.3690, lng: 34.8888, country: 'Tanzania' },
  { name: 'Uganda', type: 'country', lat: 1.3733, lng: 32.2903, country: 'Uganda' },
  { name: 'Angola', type: 'country', lat: -11.2027, lng: 17.8739, country: 'Angola' },
  { name: 'Mozambique', type: 'country', lat: -18.6657, lng: 35.5296, country: 'Mozambique' },
  { name: 'Zimbabwe', type: 'country', lat: -19.0154, lng: 29.1549, country: 'Zimbabwe' },
  { name: 'Senegal', type: 'country', lat: 14.4974, lng: -14.4524, country: 'Senegal' },
  { name: 'Somalia', type: 'country', lat: 5.1521, lng: 46.1996, country: 'Somalia' },
  { name: 'Democratic Republic of Congo', type: 'country', lat: -4.0383, lng: 21.7587, country: 'DRC' },
  { name: 'Rwanda', type: 'country', lat: -1.9403, lng: 29.8739, country: 'Rwanda' },

  // Oceania (4)
  { name: 'Australia', type: 'country', lat: -25.2744, lng: 133.7751, country: 'Australia' },
  { name: 'New Zealand', type: 'country', lat: -40.9006, lng: 174.8860, country: 'New Zealand' },
  { name: 'Papua New Guinea', type: 'country', lat: -6.3150, lng: 143.9555, country: 'Papua New Guinea' },
  { name: 'Fiji', type: 'country', lat: -17.7134, lng: 178.0650, country: 'Fiji' },
]

// Calculate batch
const startIdx = batchNum * batchSize
const endIdx = Math.min(startIdx + batchSize, ALL_COUNTRIES.length)
const batchCountries = ALL_COUNTRIES.slice(startIdx, endIdx)

console.log(`📊 Processing countries ${startIdx + 1}-${endIdx} of ${ALL_COUNTRIES.length}`)
console.log(`📍 Countries in this batch:`, batchCountries.map(c => c.name).join(', '))

// Category-specific prompts
const CATEGORY_PROMPTS = {
  entertainment: {
    voice: 'Wesley Morris / Mark Kermode',
    length: '2,000-3,000 characters',
    focus: 'Film industry, music scene, popular artists, TV and streaming content, gaming industry and esports, social media influencers, entertainment exports',
    prompt: (countryName: string) => `You are a cultural critic writing in the voice of Wesley Morris or Mark Kermode about ${countryName}'s entertainment landscape.

Write a 2,000-3,000 character analysis covering:
- Film industry (production, notable films, directors, international recognition)
- Music scene (genres, popular artists, music exports, festivals)
- TV and streaming content (local productions, international reach)
- Gaming industry and esports (game development, competitive gaming, gaming culture)
- Social media influencers and digital entertainment
- Entertainment exports and cultural soft power

Voice: Engaging, knowledgeable, with wit and cultural insight. Like The Rest is Politics - accessible but substantive. Balance high and low culture. Celebrate achievements while noting challenges.

Structure as flowing prose with clear themes. Avoid bullet points. Make it feel like a smart magazine piece.`
  },
  lifestyle: {
    voice: 'Refined observer (accessible not pretentious)',
    length: '2,000-3,000 characters',
    focus: 'Work-life balance, fashion industry, nightlife, dating culture, demographics, wellness trends, gym culture, cost of living, quality of life',
    prompt: (countryName: string) => `You are a lifestyle correspondent writing about daily life in ${countryName}.

Write a 2,000-3,000 character analysis covering:
- Work-life balance (working hours, vacation culture, career attitudes)
- Fashion industry and style trends
- Nightlife and social scenes
- Dating culture and relationship norms
- Demographics and generational trends
- Wellness trends and health culture
- Gym culture and fitness
- Cost of living and affordability
- Overall quality of life indicators

Voice: Refined observer who's accessible, not pretentious. Like a sophisticated friend sharing insights over coffee. Honest about both positives and challenges.

Structure as flowing prose with clear themes. Avoid bullet points. Make it feel like a perceptive travel or lifestyle piece.`
  }
}

async function generateCategorySummary(country: any, category: string) {
  console.log(`\n${'='.repeat(80)}`)
  console.log(`🎬 Generating ${category} summary for ${country.name}`)
  console.log('='.repeat(80))

  const categoryConfig = CATEGORY_PROMPTS[category as keyof typeof CATEGORY_PROMPTS]

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      temperature: 0.8, // More creative for lifestyle/entertainment
      messages: [{
        role: 'user',
        content: categoryConfig.prompt(country.name)
      }],
    })

    const summary = message.content[0].type === 'text' ? message.content[0].text : ''

    console.log(`📝 Generated summary (${summary.length} chars)`)
    console.log(`Preview: ${summary.substring(0, 200)}...`)

    // Save to database
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: country.name,
          type: country.type,
          category: category,
        },
      },
      update: {
        summary,
        issues: JSON.stringify([]), // No specific issues for these categories
        topStories: JSON.stringify([]), // No news stories for lifestyle/entertainment
        storyCount: 0,
        updatedAt: new Date(),
      },
      create: {
        name: country.name,
        type: country.type,
        country: country.country,
        lat: country.lat,
        lng: country.lng,
        category: category,
        summary,
        issues: JSON.stringify([]),
        topStories: JSON.stringify([]),
        storyCount: 0,
      },
    })

    console.log(`✅ Saved ${category} summary for ${country.name}`)

    // Rate limiting - 1 second between requests
    await new Promise(resolve => setTimeout(resolve, 1000))

  } catch (error) {
    console.error(`❌ Error generating ${category} summary for ${country.name}:`, error)
    throw error
  }
}

async function main() {
  console.log(`\n🚀 Starting ${category} category generation`)
  console.log(`📦 Batch ${batchNum}: Countries ${startIdx + 1}-${endIdx}`)
  console.log(`📊 ${batchCountries.length} countries in this batch\n`)

  let successCount = 0
  let errorCount = 0

  for (const country of batchCountries) {
    try {
      await generateCategorySummary(country, category)
      successCount++
    } catch (error) {
      console.error(`Failed to process ${country.name}:`, error)
      errorCount++
    }
  }

  console.log(`\n✅ Batch ${batchNum} complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Errors: ${errorCount}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
