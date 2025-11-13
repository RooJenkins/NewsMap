import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import * as fs from 'fs'
import * as path from 'path'

// Countries N-Z with coordinates
const NZ_COUNTRIES = [
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Oman', lat: 21.4735, lng: 55.9754 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Romania', lat: 45.9432, lng: 24.9668 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739 },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Slovakia', lat: 48.6690, lng: 19.6990 },
  { name: 'Slovenia', lat: 46.1512, lng: 14.9955 },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Syria', lat: 34.8021, lng: 38.9968 },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },
  { name: 'United States', lat: 37.0902, lng: -95.7129 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Uzbekistan', lat: 41.3775, lng: 64.5853 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164 },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 }
]

const STYLE_GUIDE = `
**CATEGORY:** Food & Cuisine
**VOICE:** Samin Nosrat (Salt, Fat, Acid, Heat) / David Chang
**STYLE:** Sensory, specific, celebrates food culture. Explains techniques and ingredients with enthusiasm.
**LENGTH:** 2,000-3,000 characters

**FOCUS AREAS:**
- National dishes and regional specialties
- Street food culture and markets
- High-end dining scene and Michelin stars
- Agricultural products and food exports
- Food safety and health standards
- Culinary traditions and innovations

**WRITING PRINCIPLES:**
1. Use real, current data (November 2025) - No mock data
2. Be specific - Names of dishes, restaurants, chefs, markets, ingredients
3. Make it engaging - Vivid sensory language, enthusiasm for food
4. Connect to broader context - How does this cuisine relate to culture/geography?
5. Include insider knowledge - Details that make you sound like a food expert
6. Be honest - Don't oversell, give nuanced assessment
7. Forward-looking - What should food lovers watch for?
8. Human impact - How does food connect people and culture?

**STRUCTURE:**
- Opening Hook: Lead with most compelling dish or food scene detail
- Current State: National dishes, regional specialties, cooking techniques
- Street Food & Markets: Where locals eat, what's sold, market culture
- High-End Dining: Michelin stars, notable restaurants, chef scene
- Agricultural Products: What's grown/produced, exports, quality
- Traditions & Future: Culinary heritage, innovations, what's next

Write in a passionate, knowledgeable voice. Use sensory details. Be specific about techniques, ingredients, and flavors.
`

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

interface CountryWriteup {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

async function generateFoodWriteup(country: { name: string; lat: number; lng: number }): Promise<CountryWriteup> {
  console.log(`Generating FOOD writeup for ${country.name}...`)

  const prompt = `${STYLE_GUIDE}

Generate a comprehensive FOOD & CUISINE writeup for **${country.name}** following the style guide above.

Requirements:
- 2,000-3,000 characters
- Samin Nosrat / David Chang voice (passionate, sensory, specific)
- Cover: national dishes, regional specialties, street food, markets, high-end dining, agricultural products, traditions
- Use specific names of dishes, restaurants, chefs, markets, ingredients
- Be enthusiastic but honest
- Include current/recent information (November 2025)

Return ONLY a JSON object with this exact structure:
{
  "summary": "full writeup text (2,000-3,000 characters)",
  "issues": ["topic1", "topic2", "topic3", "topic4", "topic5", "topic6"]
}

The "issues" array should list 5-6 key topics covered (e.g., "National dishes", "Street food culture", "Michelin dining", "Agricultural exports", "Regional specialties", "Culinary traditions").`

  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    temperature: 1,
    messages: [{ role: 'user', content: prompt }],
  })

  const content = message.content[0]
  if (content.type !== 'text') {
    throw new Error('Unexpected response type')
  }

  // Extract JSON from response
  const jsonMatch = content.text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error(`No JSON found in response for ${country.name}`)
  }

  const parsed = JSON.parse(jsonMatch[0])

  return {
    name: country.name,
    lat: country.lat,
    lng: country.lng,
    summary: parsed.summary,
    issues: parsed.issues,
  }
}

async function generateAllWriteups() {
  const writeups: CountryWriteup[] = []

  // Process countries in batches of 5 to avoid rate limits
  for (let i = 0; i < NZ_COUNTRIES.length; i += 5) {
    const batch = NZ_COUNTRIES.slice(i, i + 5)
    console.log(`\nProcessing batch ${Math.floor(i/5) + 1}/${Math.ceil(NZ_COUNTRIES.length/5)}...`)

    const batchPromises = batch.map(country => generateFoodWriteup(country))
    const batchResults = await Promise.all(batchPromises)
    writeups.push(...batchResults)

    console.log(`Completed ${writeups.length}/${NZ_COUNTRIES.length} countries`)

    // Brief pause between batches
    if (i + 5 < NZ_COUNTRIES.length) {
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  }

  // Save to JSON file
  const output = {
    generated: new Date().toISOString(),
    category: 'food',
    count: writeups.length,
    countries: writeups,
  }

  const outputPath = path.join(process.cwd(), 'food-n-z-countries.json')
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2))

  console.log(`\n✅ Generated ${writeups.length} FOOD writeups`)
  console.log(`📁 Saved to: ${outputPath}`)

  return writeups
}

// Run the generation
generateAllWriteups().catch(console.error)
