import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'
import * as fs from 'fs'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

// All 128 countries from Afghanistan to Zimbabwe
const ALL_COUNTRIES = [
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  { name: 'Albania', lat: 41.3275, lng: 19.8187 },
  { name: 'Algeria', lat: 36.7538, lng: 3.0588 },
  { name: 'Andorra', lat: 42.5063, lng: 1.5218 },
  { name: 'Angola', lat: -8.8383, lng: 13.2344 },
  { name: 'Antigua and Barbuda', lat: 17.0608, lng: -61.7964 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Armenia', lat: 40.0691, lng: 45.0382 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Azerbaijan', lat: 40.1431, lng: 47.5769 },
  { name: 'Bahamas', lat: 25.0343, lng: -77.3963 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Barbados', lat: 13.1939, lng: -59.5432 },
  { name: 'Belarus', lat: 53.7098, lng: 27.9534 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Bhutan', lat: 27.5142, lng: 90.4336 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Bosnia and Herzegovina', lat: 43.9159, lng: 17.6791 },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Brunei', lat: 4.5353, lng: 114.7277 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Burundi', lat: -3.3731, lng: 29.9189 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'Cameroon', lat: 7.3697, lng: 12.3547 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Cape Verde', lat: 16.5388, lng: -23.0418 },
  { name: 'Central African Republic', lat: 6.6111, lng: 20.9394 },
  { name: 'Chad', lat: 15.4542, lng: 18.7322 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Comoros', lat: -11.6455, lng: 43.3333 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Cyprus', lat: 35.1264, lng: 33.4299 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.4730 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Djibouti', lat: 11.8251, lng: 42.5903 },
  { name: 'Dominica', lat: 15.4150, lng: -61.3710 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Equatorial Guinea', lat: 1.6508, lng: 10.2679 },
  { name: 'Eritrea', lat: 15.1794, lng: 39.7823 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Eswatini', lat: -26.5225, lng: 31.4659 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Gabon', lat: -0.8037, lng: 11.6094 },
  { name: 'Gambia', lat: 13.4432, lng: -15.3101 },
  { name: 'Georgia', lat: 42.3154, lng: 43.3569 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Grenada', lat: 12.1165, lng: -61.6790 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Guinea', lat: 9.9456, lng: -9.6966 },
  { name: 'Guinea-Bissau', lat: 11.8037, lng: -15.1804 },
  { name: 'Guyana', lat: 4.8604, lng: -58.9302 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Iceland', lat: 64.9631, lng: -19.0208 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Ivory Coast', lat: 7.5400, lng: -5.5471 },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kiribati', lat: -3.3704, lng: -168.7340 },
  { name: 'Kosovo', lat: 42.6026, lng: 20.9030 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Kyrgyzstan', lat: 41.2044, lng: 74.7661 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Lesotho', lat: -29.6100, lng: 28.2336 },
  { name: 'Liberia', lat: 6.4281, lng: -9.4295 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Liechtenstein', lat: 47.1660, lng: 9.5554 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Luxembourg', lat: 49.8153, lng: 6.1296 },
  { name: 'Madagascar', lat: -18.7669, lng: 46.8691 },
  { name: 'Malawi', lat: -13.2543, lng: 34.3015 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Maldives', lat: 3.2028, lng: 73.2207 },
  { name: 'Mali', lat: 17.5707, lng: -3.9962 },
  { name: 'Malta', lat: 35.9375, lng: 14.3754 },
  { name: 'Marshall Islands', lat: 7.1315, lng: 171.1845 },
  { name: 'Mauritania', lat: 21.0079, lng: -10.9408 },
  { name: 'Mauritius', lat: -20.3484, lng: 57.5522 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Micronesia', lat: 7.4256, lng: 150.5508 },
  { name: 'Moldova', lat: 47.4116, lng: 28.3699 },
  { name: 'Monaco', lat: 43.7384, lng: 7.4246 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Montenegro', lat: 42.7087, lng: 19.3744 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Namibia', lat: -22.9576, lng: 18.4904 },
  { name: 'Nauru', lat: -0.5228, lng: 166.9315 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Niger', lat: 17.6078, lng: 8.0817 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'North Macedonia', lat: 41.6086, lng: 21.7453 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Oman', lat: 21.4735, lng: 55.9754 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Palau', lat: 7.5150, lng: 134.5825 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Republic of Congo', lat: -0.2280, lng: 15.8277 },
  { name: 'Romania', lat: 45.9432, lng: 24.9668 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739 },
  { name: 'Saint Kitts and Nevis', lat: 17.3578, lng: -62.7830 },
  { name: 'Saint Lucia', lat: 13.9094, lng: -60.9789 },
  { name: 'Saint Vincent and the Grenadines', lat: 12.9843, lng: -61.2872 },
  { name: 'Samoa', lat: -13.7590, lng: -172.1046 },
  { name: 'San Marino', lat: 43.9424, lng: 12.4578 },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Seychelles', lat: -4.6796, lng: 55.4920 },
  { name: 'Sierra Leone', lat: 8.4606, lng: -11.7799 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Slovakia', lat: 48.6690, lng: 19.6990 },
  { name: 'Slovenia', lat: 46.1512, lng: 14.9955 },
  { name: 'Solomon Islands', lat: -9.6457, lng: 160.1562 },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'South Sudan', lat: 6.8770, lng: 31.3070 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Suriname', lat: 3.9193, lng: -56.0278 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Syria', lat: 34.8021, lng: 38.9968 },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605 },
  { name: 'Tajikistan', lat: 38.8610, lng: 71.2761 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'Timor-Leste', lat: -8.8742, lng: 125.7275 },
  { name: 'Togo', lat: 8.6195, lng: 0.8248 },
  { name: 'Tonga', lat: -21.1789, lng: -175.1982 },
  { name: 'Trinidad and Tobago', lat: 10.6918, lng: -61.2225 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Turkmenistan', lat: 38.9697, lng: 59.5563 },
  { name: 'Tuvalu', lat: -7.1095, lng: 177.6493 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },
  { name: 'United States', lat: 37.0902, lng: -95.7129 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Uzbekistan', lat: 41.3775, lng: 64.5853 },
  { name: 'Vanuatu', lat: -15.3767, lng: 166.9592 },
  { name: 'Vatican City', lat: 41.9029, lng: 12.4534 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164 },
  { name: 'Zambia', lat: -13.1339, lng: 27.8493 },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 }
]

const STYLE_GUIDE = `
# Travel & Tourism Category - Style Guide

**Voice:** Anthony Bourdain / Rick Steves - Adventurous, curious, honest
**Length:** 2,500-3,500 characters
**Date:** November 2025

## Focus Areas:
- Must-see destinations and hidden gems
- Tourist infrastructure and accessibility
- Safety for travelers and common issues
- Visa requirements and entry process
- Best times to visit and seasonal considerations
- Tourist numbers and economic impact

## Structure:

### Opening Hook (~150 words)
- Lead with compelling recent tourism stat or development
- Paint vivid picture of the destination
- Hook reader with authentic detail

### Infrastructure & Destinations (~400 words)
- Must-see attractions and hidden gems
- Quality of hotels, transport, restaurants
- Ease of getting around
- Tourist traps vs authentic experiences
- Regional variations (beach vs mountains vs cities)

### Safety & Practicalities (~300 words)
- Real talk on safety (crime, scams, health)
- Common tourist problems
- What to watch out for
- LGBT/women travelers considerations
- Environmental/health hazards

### Visa & Logistics (~250 words)
- Visa requirements (specific countries)
- Entry process complexity
- Best airports/border crossings
- Best time to visit (weather, crowds, prices)
- Peak vs off-season trade-offs

### Economic Impact & Hidden Gems (~300 words)
- Tourism numbers and revenue
- Impact on local economy and culture
- Overtourism concerns
- Undiscovered destinations
- Where tourism is headed

### Bottom Line (~100 words)
- Should you visit? When? Why?
- What's the vibe right now?
- Insider tip or warning

## Writing Style:
- Bourdain-esque honesty ("Don't eat at that tourist trap")
- Specific details (prices, distances, times)
- Real experiences, not brochure language
- Acknowledge problems (overcrowding, scams, safety)
- Celebrate authenticity
- Practical advice
`

const BATCH_SIZE = 10 // Process 10 countries at a time
const OUTPUT_FILE = '/home/user/NewsMap/travel-writeups-progress.json'

interface GeneratedCountry {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

async function generateTravelWriteup(country: { name: string; lat: number; lng: number }): Promise<GeneratedCountry | null> {
  const prompt = `${STYLE_GUIDE}

Generate a Travel & Tourism write-up for: **${country.name}**

Requirements:
- 2,500-3,500 characters
- Anthony Bourdain / Rick Steves voice (adventurous, curious, honest)
- Current as of November 2025
- Cover: must-see destinations, hidden gems, tourist infrastructure, safety, visa requirements, best times to visit, tourist numbers, economic impact
- Be specific: use real places, prices, statistics, recent developments
- Be honest about problems (overcrowding, scams, safety issues)

Return ONLY a JSON object in this exact format:
{
  "summary": "full write-up text here (2,500-3,500 chars)",
  "issues": ["issue 1", "issue 2", "issue 3", "issue 4", "issue 5", "issue 6"]
}

The issues array should be 4-6 short phrases describing key tourism topics for this country.`

  try {
    console.log(`\nGenerating writeup for ${country.name}...`)

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      temperature: 1,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const responseText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      console.error(`Failed to parse JSON for ${country.name}`)
      return null
    }

    const parsed = JSON.parse(jsonMatch[0])

    return {
      name: country.name,
      lat: country.lat,
      lng: country.lng,
      summary: parsed.summary,
      issues: parsed.issues
    }
  } catch (error) {
    console.error(`Error generating ${country.name}:`, error)
    return null
  }
}

async function saveToDatabase(country: GeneratedCountry) {
  try {
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: country.name,
          type: 'country',
          category: 'travel'
        }
      },
      update: {
        summary: country.summary,
        issues: country.issues,
        lat: country.lat,
        lng: country.lng
      },
      create: {
        name: country.name,
        type: 'country',
        category: 'travel',
        summary: country.summary,
        issues: country.issues,
        lat: country.lat,
        lng: country.lng,
        topStories: []
      }
    })
    console.log(`✓ Saved ${country.name} to database`)
  } catch (error) {
    console.error(`✗ Failed to save ${country.name}:`, error)
  }
}

async function loadProgress(): Promise<string[]> {
  try {
    if (fs.existsSync(OUTPUT_FILE)) {
      const data = fs.readFileSync(OUTPUT_FILE, 'utf-8')
      return JSON.parse(data).completed || []
    }
  } catch (error) {
    console.log('No previous progress found, starting fresh')
  }
  return []
}

async function saveProgress(completed: string[]) {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ completed, lastUpdated: new Date().toISOString() }, null, 2))
}

async function generateAllTravelWriteups() {
  console.log(`🌍 Generating Travel & Tourism write-ups for all ${ALL_COUNTRIES.length} countries...`)
  console.log(`Style: Anthony Bourdain / Rick Steves`)
  console.log(`Length: 2,500-3,500 characters per country`)
  console.log(`Category: travel\n`)

  const completed = await loadProgress()
  const remaining = ALL_COUNTRIES.filter(c => !completed.includes(c.name))

  console.log(`Progress: ${completed.length}/${ALL_COUNTRIES.length} completed`)
  console.log(`Remaining: ${remaining.length}\n`)

  if (remaining.length === 0) {
    console.log('✅ All countries already completed!')
    return
  }

  for (let i = 0; i < remaining.length; i += BATCH_SIZE) {
    const batch = remaining.slice(i, i + BATCH_SIZE)
    console.log(`\n📦 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(remaining.length / BATCH_SIZE)}`)
    console.log(`Countries: ${batch.map(c => c.name).join(', ')}`)

    for (const country of batch) {
      const result = await generateTravelWriteup(country)
      if (result) {
        await saveToDatabase(result)
        completed.push(country.name)
        await saveProgress(completed)

        console.log(`✅ ${country.name} complete (${completed.length}/${ALL_COUNTRIES.length})`)
        console.log(`   Summary length: ${result.summary.length} chars`)
        console.log(`   Issues: ${result.issues.length}`)
      }

      // Rate limiting: wait 2 seconds between requests
      await new Promise(resolve => setTimeout(resolve, 2000))
    }

    console.log(`\n✓ Batch complete. Total progress: ${completed.length}/${ALL_COUNTRIES.length}`)
  }

  console.log(`\n🎉 COMPLETE! Generated Travel write-ups for all ${ALL_COUNTRIES.length} countries.`)
  console.log(`\nFinal report: Completed Travel for ALL ${ALL_COUNTRIES.length} countries.`)
}

generateAllTravelWriteups()
  .then(() => process.exit(0))
  .catch(console.error)
