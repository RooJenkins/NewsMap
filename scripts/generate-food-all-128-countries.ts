import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import * as fs from 'fs'
import * as path from 'path'

// All 128 countries with coordinates
const ALL_COUNTRIES = [
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  { name: 'Albania', lat: 41.3275, lng: 19.8187 },
  { name: 'Algeria', lat: 36.7538, lng: 3.0588 },
  { name: 'Angola', lat: -8.8383, lng: 13.2344 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Belarus', lat: 53.7098, lng: 27.9534 },
  { name: 'Belgium', lat: 50.8503, lng: 4.3517 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Bosnia and Herzegovina', lat: 43.9159, lng: 17.6791 },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'Cameroon', lat: 7.3697, lng: 12.3547 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Cyprus', lat: 35.1264, lng: 33.4299 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.4730 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Georgia', lat: 42.3154, lng: 43.3569 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Luxembourg', lat: 49.8153, lng: 6.1296 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Maldives', lat: 3.2028, lng: 73.2207 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Moldova', lat: 47.4116, lng: 28.3699 },
  { name: 'Montenegro', lat: 42.7087, lng: 19.3744 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
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
  { name: 'The Bahamas', lat: 25.0343, lng: -77.3963 },
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

interface CountryWriteup {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

async function generateFoodWriteup(country: typeof ALL_COUNTRIES[0]): Promise<CountryWriteup> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a FOOD & CUISINE write-up in the style of Samin Nosrat (Salt Fat Acid Heat) and David Chang (Ugly Delicious).

CATEGORY: Food & Cuisine
VOICE: Samin Nosrat / David Chang
STYLE: Sensory-rich, enthusiastic, deeply informed about technique and ingredients. Make readers taste the food through your words. Be specific about flavors, textures, cooking methods. Celebrate both street food and high-end dining. Show genuine passion and curiosity.

FOCUS AREAS FOR FOOD:
- National dishes and what makes them special (technique, ingredients, history)
- Regional specialties and how they differ across the country
- Street food culture - where to find it, what's iconic, why it matters
- Markets and food culture (morning markets, fish markets, spice bazaars)
- High-end dining scene (Michelin stars if applicable, innovative chefs)
- Agricultural products and major food exports
- Culinary traditions (festivals, cooking methods, family recipes)
- Modern innovations and fusion trends

LENGTH: 2,000-3,000 characters

Write a comprehensive food & cuisine summary for ${country.name} that:

1. OPENING HOOK (150-200 words): Lead with the most compelling dish, market, or food experience. Make it vivid and sensory - describe smell, taste, texture, the scene. Make readers hungry.

2. NATIONAL DISHES & STAPLES (400-500 words):
   - What are the iconic national dishes?
   - What techniques and ingredients define the cuisine?
   - Regional variations and specialties
   - Why do these dishes matter culturally?
   - Be specific about cooking methods, key ingredients, flavor profiles

3. STREET FOOD & MARKETS (300-400 words):
   - Iconic street foods and where to find them
   - Market culture (famous markets, what they sell, the experience)
   - Food vendors and street food traditions
   - Price points and accessibility

4. HIGH-END DINING & INNOVATION (200-300 words):
   - Fine dining scene (Michelin stars, acclaimed restaurants, innovative chefs)
   - How chefs are modernizing traditional cuisine
   - Restaurant culture and dining trends
   - If not applicable, focus on culinary innovations or food exports

5. AGRICULTURAL & EXPORTS (150-200 words):
   - Major agricultural products
   - Food exports and what the country is known for globally
   - Specialty ingredients or products (wine, coffee, spices, seafood, etc.)

6. BOTTOM LINE (100 words):
   - Sharp, enthusiastic synthesis
   - What makes this cuisine special and worth exploring
   - Samin/David style: passionate, specific, hungry for more

CRITICAL REQUIREMENTS:
- Be sensory and specific - describe flavors, textures, aromas, cooking techniques
- Use real dish names, restaurant names, chef names, ingredient names
- Show enthusiasm and genuine curiosity about the food
- Balance street food and high-end dining
- Connect food to culture and history
- 2,000-3,000 characters total
- Be accurate and researched - use real culinary knowledge

Generate the food write-up now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      temperature: 1,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const content = message.content[0]
    if (content.type !== 'text') {
      throw new Error('Unexpected response type from Claude')
    }

    const summary = content.text.trim()

    // Extract key issues/topics from the writeup
    const issues = extractIssues(country.name, summary)

    return {
      name: country.name,
      lat: country.lat,
      lng: country.lng,
      summary,
      issues
    }
  } catch (error) {
    console.error(`Error generating writeup for ${country.name}:`, error)
    throw error
  }
}

function extractIssues(countryName: string, summary: string): string[] {
  // Extract key themes/topics from the summary
  const issues: string[] = []

  if (summary.toLowerCase().includes('street food') || summary.toLowerCase().includes('street vendor')) {
    issues.push('Street food culture')
  }
  if (summary.toLowerCase().includes('michelin') || summary.toLowerCase().includes('fine dining')) {
    issues.push('Fine dining scene')
  }
  if (summary.toLowerCase().includes('market')) {
    issues.push('Food markets')
  }
  if (summary.toLowerCase().includes('export') || summary.toLowerCase().includes('agricultural')) {
    issues.push('Agricultural exports')
  }
  if (summary.toLowerCase().includes('regional') || summary.toLowerCase().includes('specialty')) {
    issues.push('Regional specialties')
  }
  if (summary.toLowerCase().includes('tradition') || summary.toLowerCase().includes('cultural')) {
    issues.push('Culinary traditions')
  }

  // Always include national dishes
  issues.unshift('National dishes')

  return issues.slice(0, 6)
}

async function main() {
  console.log('🍳 GENERATING FOOD & CUISINE WRITEUPS FOR ALL 128 COUNTRIES')
  console.log('=' .repeat(70))
  console.log(`Total countries: ${ALL_COUNTRIES.length}`)
  console.log('Voice: Samin Nosrat / David Chang')
  console.log('Length: 2,000-3,000 characters each')
  console.log('=' .repeat(70))
  console.log()

  const results: CountryWriteup[] = []
  let successCount = 0
  let failCount = 0

  for (let i = 0; i < ALL_COUNTRIES.length; i++) {
    const country = ALL_COUNTRIES[i]
    console.log(`\n[${i + 1}/${ALL_COUNTRIES.length}] Generating ${country.name}...`)

    try {
      const writeup = await generateFoodWriteup(country)
      results.push(writeup)
      successCount++

      console.log(`  ✓ Generated (${writeup.summary.length} characters)`)
      console.log(`  Issues: ${writeup.issues.join(', ')}`)

      // Show preview
      const preview = writeup.summary.substring(0, 150).replace(/\n/g, ' ')
      console.log(`  Preview: ${preview}...`)

      // Rate limiting - wait 1 second between requests
      if (i < ALL_COUNTRIES.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    } catch (error) {
      console.error(`  ✗ Failed: ${error}`)
      failCount++

      // On error, wait a bit longer before continuing
      await new Promise(resolve => setTimeout(resolve, 3000))
    }
  }

  console.log('\n' + '='.repeat(70))
  console.log('GENERATION COMPLETE')
  console.log('='.repeat(70))
  console.log(`Success: ${successCount}`)
  console.log(`Failed: ${failCount}`)
  console.log()

  // Save to JSON file
  const outputPath = path.join(process.cwd(), 'food-all-128-countries.json')
  const output = {
    generated: new Date().toISOString(),
    category: 'food',
    count: results.length,
    countries: results
  }

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2))
  console.log(`✓ Saved ${results.length} writeups to: ${outputPath}`)
  console.log()
  console.log('🎉 ALL FOOD WRITEUPS GENERATED!')
}

main()
  .catch(console.error)
