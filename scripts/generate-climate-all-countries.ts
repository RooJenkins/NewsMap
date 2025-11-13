import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()

// Helper function to get country coordinates from a mapping
const COUNTRY_COORDS: { [key: string]: { lat: number; lng: number } } = {
  // Americas
  'United States': { lat: 37.0902, lng: -95.7129 },
  'Canada': { lat: 56.1304, lng: -106.3468 },
  'Mexico': { lat: 23.6345, lng: -102.5528 },
  'Brazil': { lat: -14.2350, lng: -51.9253 },
  'Argentina': { lat: -38.4161, lng: -63.6167 },
  'Chile': { lat: -35.6751, lng: -71.5430 },
  'Colombia': { lat: 4.5709, lng: -74.2973 },
  'Peru': { lat: -9.1900, lng: -75.0152 },
  'Venezuela': { lat: 6.4238, lng: -66.5897 },
  'Ecuador': { lat: -1.8312, lng: -78.1834 },
  'Bolivia': { lat: -16.2902, lng: -63.5887 },
  'Paraguay': { lat: -23.4425, lng: -58.4438 },
  'Uruguay': { lat: -32.5228, lng: -55.7658 },
  'Cuba': { lat: 21.5218, lng: -77.7812 },
  'Haiti': { lat: 18.9712, lng: -72.2852 },
  'Dominican Republic': { lat: 18.7357, lng: -70.1627 },
  'Guatemala': { lat: 15.7835, lng: -90.2308 },
  'Honduras': { lat: 15.2000, lng: -86.2419 },
  'El Salvador': { lat: 13.7942, lng: -88.8965 },
  'Nicaragua': { lat: 12.8654, lng: -85.2072 },
  'Costa Rica': { lat: 9.7489, lng: -83.7534 },
  'Panama': { lat: 8.5380, lng: -80.7821 },
  'Jamaica': { lat: 18.1096, lng: -77.2975 },
  'Trinidad and Tobago': { lat: 10.6918, lng: -61.2225 },
  'Guyana': { lat: 4.8604, lng: -58.9302 },
  'Suriname': { lat: 3.9193, lng: -56.0278 },
  'Belize': { lat: 17.1899, lng: -88.4976 },

  // Europe
  'United Kingdom': { lat: 55.3781, lng: -3.4360 },
  'France': { lat: 46.2276, lng: 2.2137 },
  'Germany': { lat: 51.1657, lng: 10.4515 },
  'Italy': { lat: 41.8719, lng: 12.5674 },
  'Spain': { lat: 40.4637, lng: -3.7492 },
  'Poland': { lat: 51.9194, lng: 19.1451 },
  'Ukraine': { lat: 48.3794, lng: 31.1656 },
  'Russia': { lat: 61.5240, lng: 105.3188 },
  'Turkey': { lat: 38.9637, lng: 35.2433 },
  'Greece': { lat: 39.0742, lng: 21.8243 },
  'Belgium': { lat: 50.5039, lng: 4.4699 },
  'Austria': { lat: 47.5162, lng: 14.5501 },
  'Finland': { lat: 61.9241, lng: 25.7482 },
  'Denmark': { lat: 56.2639, lng: 9.5018 },
  'Ireland': { lat: 53.4129, lng: -8.2439 },
  'Hungary': { lat: 47.1625, lng: 19.5033 },
  'Czech Republic': { lat: 49.8175, lng: 15.4730 },
  'Bulgaria': { lat: 42.7339, lng: 25.4858 },
  'Croatia': { lat: 45.1, lng: 15.2 },
  'Estonia': { lat: 58.5953, lng: 25.0136 },
  'Norway': { lat: 60.4720, lng: 8.4689 },
  'Sweden': { lat: 60.1282, lng: 18.6435 },
  'Portugal': { lat: 39.3999, lng: -8.2245 },
  'Netherlands': { lat: 52.1326, lng: 5.2913 },
  'Romania': { lat: 45.9432, lng: 24.9668 },
  'Serbia': { lat: 44.0165, lng: 21.0059 },
  'Switzerland': { lat: 46.8182, lng: 8.2275 },
  'Slovakia': { lat: 48.6690, lng: 19.6990 },
  'Lithuania': { lat: 55.1694, lng: 23.8813 },
  'Latvia': { lat: 56.8796, lng: 24.6032 },

  // Asia-Pacific
  'China': { lat: 35.8617, lng: 104.1954 },
  'India': { lat: 20.5937, lng: 78.9629 },
  'Japan': { lat: 36.2048, lng: 138.2529 },
  'South Korea': { lat: 35.9078, lng: 127.7669 },
  'North Korea': { lat: 40.3399, lng: 127.5101 },
  'Indonesia': { lat: -0.7893, lng: 113.9213 },
  'Australia': { lat: -25.2744, lng: 133.7751 },
  'New Zealand': { lat: -40.9006, lng: 174.8860 },
  'Pakistan': { lat: 30.3753, lng: 69.3451 },
  'Bangladesh': { lat: 23.6850, lng: 90.3563 },
  'Afghanistan': { lat: 33.9391, lng: 67.7100 },
  'Iran': { lat: 32.4279, lng: 53.6880 },
  'Israel': { lat: 31.0461, lng: 34.8516 },
  'Palestine': { lat: 31.9522, lng: 35.2332 },
  'Iraq': { lat: 33.2232, lng: 43.6793 },
  'Jordan': { lat: 30.5852, lng: 36.2384 },
  'Cambodia': { lat: 12.5657, lng: 104.9910 },
  'Laos': { lat: 19.8563, lng: 102.4955 },
  'Myanmar': { lat: 21.9162, lng: 95.9560 },
  'Nepal': { lat: 28.3949, lng: 84.1240 },
  'Mongolia': { lat: 46.8625, lng: 103.8467 },
  'Papua New Guinea': { lat: -6.3150, lng: 143.9555 },
  'Fiji': { lat: -17.7134, lng: 178.0650 },
  'Bahrain': { lat: 26.0667, lng: 50.5577 },
  'Kuwait': { lat: 29.3117, lng: 47.4818 },
  'Oman': { lat: 21.4735, lng: 55.9754 },
  'Qatar': { lat: 25.3548, lng: 51.1839 },
  'Kazakhstan': { lat: 48.0196, lng: 66.9237 },
  'Thailand': { lat: 15.8700, lng: 100.9925 },
  'Vietnam': { lat: 14.0583, lng: 108.2772 },
  'Philippines': { lat: 12.8797, lng: 121.7740 },
  'Malaysia': { lat: 4.2105, lng: 101.9758 },
  'Singapore': { lat: 1.3521, lng: 103.8198 },
  'Taiwan': { lat: 23.6978, lng: 120.9605 },
  'Sri Lanka': { lat: 7.8731, lng: 80.7718 },
  'Yemen': { lat: 15.5527, lng: 48.5164 },
  'Saudi Arabia': { lat: 23.8859, lng: 45.0792 },
  'UAE': { lat: 23.4241, lng: 53.8478 },
  'Lebanon': { lat: 33.8547, lng: 35.8623 },
  'Syria': { lat: 34.8021, lng: 38.9968 },
  'Solomon Islands': { lat: -9.6457, lng: 160.1562 },
  'Vanuatu': { lat: -15.3767, lng: 166.9592 },
  'Samoa': { lat: -13.7590, lng: -172.1046 },
  'Tonga': { lat: -21.1789, lng: -175.1982 },

  // Africa
  'Egypt': { lat: 26.8206, lng: 30.8025 },
  'Ethiopia': { lat: 9.1450, lng: 40.4897 },
  'Kenya': { lat: -0.0236, lng: 37.9062 },
  'Somalia': { lat: 5.1521, lng: 46.1996 },
  'Sudan': { lat: 12.8628, lng: 30.2176 },
  'Algeria': { lat: 28.0339, lng: 1.6596 },
  'Angola': { lat: -11.2027, lng: 17.8739 },
  'Ghana': { lat: 7.9465, lng: -1.0232 },
  'Mozambique': { lat: -18.6657, lng: 35.5296 },
  'Senegal': { lat: 14.4974, lng: -14.4524 },
  'Democratic Republic of Congo': { lat: -4.0383, lng: 21.7587 },
  'Nigeria': { lat: 9.0820, lng: 8.6753 },
  'South Africa': { lat: -30.5595, lng: 22.9375 },
  'Morocco': { lat: 31.7917, lng: -7.0926 },
  'Tunisia': { lat: 33.8869, lng: 9.5375 },
  'Libya': { lat: 26.3351, lng: 17.2283 },
  'Tanzania': { lat: -6.3690, lng: 34.8888 },
  'Uganda': { lat: 1.3733, lng: 32.2903 },
  'Zimbabwe': { lat: -19.0154, lng: 29.1549 },
  'Cameroon': { lat: 7.3697, lng: 12.3547 },
  'Zambia': { lat: -13.1339, lng: 27.8493 },
  'Mali': { lat: 17.5707, lng: -3.9962 },
  'Niger': { lat: 17.6078, lng: 8.0817 },
  'Chad': { lat: 15.4542, lng: 18.7322 },
  'Burkina Faso': { lat: 12.2383, lng: -1.5616 },
  'Rwanda': { lat: -1.9403, lng: 29.8739 },
  'Botswana': { lat: -22.3285, lng: 24.6849 },
  'Namibia': { lat: -22.9576, lng: 18.4904 },
  'Madagascar': { lat: -18.7669, lng: 46.8691 },
  'Malawi': { lat: -13.2543, lng: 34.3015 },
  'South Sudan': { lat: 6.8770, lng: 31.3070 },
  'Eritrea': { lat: 15.1794, lng: 39.7823 },
  'Djibouti': { lat: 11.8251, lng: 42.5903 },
  'Sierra Leone': { lat: 8.4606, lng: -11.7799 },
  'Liberia': { lat: 6.4281, lng: -9.4295 },
  'Guinea': { lat: 9.9456, lng: -9.6966 },
  'Ivory Coast': { lat: 7.5400, lng: -5.5471 },
  'Togo': { lat: 8.6195, lng: 0.8248 },
  'Benin': { lat: 9.3077, lng: 2.3158 },
  'Gambia': { lat: 13.4432, lng: -15.3101 },
  'Mauritania': { lat: 21.0079, lng: -10.9408 },
  'Congo-Brazzaville': { lat: -0.2280, lng: 15.8277 },
}

// Generate all 128 countries from countryData
const LOCATIONS = Object.keys(countryData).map(name => ({
  name,
  type: 'country' as const,
  lat: COUNTRY_COORDS[name]?.lat || 0,
  lng: COUNTRY_COORDS[name]?.lng || 0,
  country: name
}))

console.log(`Prepared ${LOCATIONS.length} countries for Climate & Environment write-ups\n`)

// Generate Climate & Environment summary using Claude
async function generateClimateSummary(
  location: typeof LOCATIONS[0]
): Promise<{ summary: string; issues: string; topStories: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a CLIMATE & ENVIRONMENT write-up in the style of David Attenborough and Bill McKibben.

CATEGORY: Climate & Environment
VOICE: David Attenborough / Bill McKibben - Urgent but not alarmist
STYLE: Connects environmental issues to specific impacts. Uses vivid descriptions of natural landscapes and threats. Urgent but not alarmist.

FOCUS AREAS FOR CLIMATE & ENVIRONMENT:
- Climate vulnerability and recent disasters
- Renewable energy adoption and targets
- Deforestation, biodiversity, protected areas
- Environmental regulations and enforcement
- Carbon emissions trajectory
- Water security and resource management

LENGTH: 2,500-3,500 characters

Write a comprehensive Climate & Environment summary for ${location.name} that:

1. OPENING HOOK (100-150 words): Lead with the most compelling environmental feature or recent climate event. Make it vivid - describe the landscape, the ecosystem, or a dramatic climate impact.

2. CURRENT STATE (300-400 words):
   - Natural environment: key ecosystems, biodiversity hotspots, unique landscapes
   - Climate vulnerabilities: floods, droughts, heatwaves, rising seas, extreme weather
   - Recent climate disasters and their toll
   - Current emissions levels and trajectory

3. CHALLENGES & RESPONSES (300-400 words):
   - Deforestation, habitat loss, or ecosystem degradation
   - Water security issues: droughts, floods, water stress
   - Renewable energy progress (or lack thereof)
   - Environmental policy and enforcement
   - Balance between development and conservation
   - Specific examples of environmental conflicts

4. FUTURE OUTLOOK (200-300 words):
   - Climate projections for this region
   - Renewable energy targets and feasibility
   - Conservation efforts and protected areas
   - Adaptation strategies
   - Risks if action isn't taken

5. BOTTOM LINE (100 words):
   - Sharp synthesis of the environmental stakes
   - What makes this place environmentally unique or vulnerable
   - Attenborough-style conclusion with urgency but also wonder

CRITICAL REQUIREMENTS:
- Use real November 2025 context and recent climate/environmental events
- Be specific with numbers: emissions figures, renewable percentages, protected area coverage, species counts
- Vivid nature writing - make readers SEE the landscapes and ecosystems
- Connect local environmental issues to global climate patterns
- Be honest about both progress and failures
- Urgent tone but grounded in science, not apocalyptic
- 2,500-3,500 characters total

Generate the Climate & Environment write-up now:`

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

    // Extract key issues (environmental themes)
    const issuePatterns = [
      'climate change', 'deforestation', 'water stress', 'biodiversity loss',
      'renewable energy', 'emissions', 'drought', 'flooding', 'conservation',
      'habitat loss', 'sea level rise', 'extreme weather', 'pollution'
    ]

    const foundIssues: string[] = []
    const lowerText = summaryText.toLowerCase()

    issuePatterns.forEach(pattern => {
      if (lowerText.includes(pattern)) {
        foundIssues.push(pattern.charAt(0).toUpperCase() + pattern.slice(1))
      }
    })

    const issues = foundIssues.slice(0, 5)

    // No top stories for category write-ups
    const topStories: any[] = []

    return {
      summary: summaryText,
      issues: JSON.stringify(issues.length > 0 ? issues : ['Climate vulnerability', 'Environmental policy', 'Renewable energy', 'Biodiversity']),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`Error generating climate summary for ${location.name}:`, error)
    throw error
  }
}

// Main execution
async function generateClimateSummaries() {
  console.log('═'.repeat(80))
  console.log('Generating CLIMATE & ENVIRONMENT write-ups for ALL 128 countries')
  console.log('═'.repeat(80))
  console.log()

  let generated = 0
  let skipped = 0
  const startTime = Date.now()

  for (const location of LOCATIONS) {
    console.log(`\n${'─'.repeat(80)}`)
    console.log(`[${generated + skipped + 1}/${LOCATIONS.length}] Processing: ${location.name}`)
    console.log('─'.repeat(80))

    try {
      console.log(`  Generating CLIMATE summary with Claude Sonnet 4.5...`)

      const { summary, issues, topStories } = await generateClimateSummary(location)

      console.log(`  Character count: ${summary.length}`)

      // Store in database with category='climate'
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'climate'
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          category: 'climate',
          summary,
          issues,
          topStories,
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`  ✓ CLIMATE summary saved to database`)

      // Show preview
      const previewLines = summary.split('\n').slice(0, 5)
      console.log(`\n  Preview:`)
      previewLines.forEach(line => console.log(`    ${line.substring(0, 120)}`))
      console.log(`    ... (${summary.length} characters total)\n`)

      // Progress update
      const elapsed = (Date.now() - startTime) / 1000
      const avgTime = elapsed / generated
      const remaining = (LOCATIONS.length - generated - skipped) * avgTime
      console.log(`  Progress: ${generated}/${LOCATIONS.length} | Est. remaining: ${Math.round(remaining / 60)} minutes`)

      // Rate limit: 2 seconds between requests to avoid overwhelming API
      await new Promise(resolve => setTimeout(resolve, 2000))

    } catch (error) {
      console.error(`  ✗ Failed:`, error)
      skipped++

      // If we hit rate limits, wait longer
      if (error instanceof Error && error.message.includes('rate')) {
        console.log(`  ⏳ Rate limit hit, waiting 30 seconds...`)
        await new Promise(resolve => setTimeout(resolve, 30000))
      }
    }
  }

  const totalTime = (Date.now() - startTime) / 1000

  console.log(`\n\n${'═'.repeat(80)}`)
  console.log(`CLIMATE & ENVIRONMENT GENERATION COMPLETE`)
  console.log('═'.repeat(80))
  console.log(`   Successfully generated: ${generated} summaries`)
  console.log(`   Failed/Skipped: ${skipped} countries`)
  console.log(`   Total time: ${Math.round(totalTime / 60)} minutes`)
  console.log(`   Average per country: ${(totalTime / generated).toFixed(1)} seconds`)
  console.log('═'.repeat(80))

  if (generated === 128) {
    console.log(`\n✅ SUCCESS! All 128 countries completed!`)
  } else {
    console.log(`\n⚠️  WARNING: Only ${generated}/128 countries completed`)
  }
}

generateClimateSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
