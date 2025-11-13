import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Batch 2 Countries (13 countries: Bosnia → Croatia)
const BATCH2_COUNTRIES = [
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Bulgaria',
  'Burkina Faso',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Chile',
  'China',
  'Colombia',
  'Costa Rica',
  'Croatia'
]

// Country coordinates mapping
const COUNTRY_COORDS: { [key: string]: { lat: number; lng: number } } = {
  'Bosnia and Herzegovina': { lat: 43.9159, lng: 17.6791 },
  'Botswana': { lat: -22.3285, lng: 24.6849 },
  'Brazil': { lat: -14.2350, lng: -51.9253 },
  'Bulgaria': { lat: 42.7339, lng: 25.4858 },
  'Burkina Faso': { lat: 12.2383, lng: -1.5616 },
  'Cambodia': { lat: 12.5657, lng: 104.9910 },
  'Cameroon': { lat: 7.3697, lng: 12.3547 },
  'Canada': { lat: 56.1304, lng: -106.3468 },
  'Chile': { lat: -35.6751, lng: -71.5430 },
  'China': { lat: 35.8617, lng: 104.1954 },
  'Colombia': { lat: 4.5709, lng: -74.2973 },
  'Costa Rica': { lat: 9.7489, lng: -83.7534 },
  'Croatia': { lat: 45.1, lng: 15.2 }
}

const LOCATIONS = BATCH2_COUNTRIES.map(name => ({
  name,
  type: 'country' as const,
  lat: COUNTRY_COORDS[name]?.lat || 0,
  lng: COUNTRY_COORDS[name]?.lng || 0,
  country: name
}))

console.log(`\n🌍 CLIMATE BATCH 2: Generating write-ups for ${LOCATIONS.length} countries\n`)

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
      'habitat loss', 'sea level rise', 'extreme weather', 'pollution',
      'wildfires', 'desertification', 'coral bleaching', 'glacier retreat'
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
async function generateClimateBatch2() {
  console.log('═'.repeat(80))
  console.log('CLIMATE BATCH 2/10: Generating write-ups for 13 countries')
  console.log('Countries: Bosnia → Croatia')
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
  console.log(`CLIMATE BATCH 2 GENERATION COMPLETE`)
  console.log('═'.repeat(80))
  console.log(`   Successfully generated: ${generated} summaries`)
  console.log(`   Failed/Skipped: ${skipped} countries`)
  console.log(`   Total time: ${Math.round(totalTime / 60)} minutes`)
  console.log(`   Average per country: ${(totalTime / generated).toFixed(1)} seconds`)
  console.log('═'.repeat(80))

  if (generated === LOCATIONS.length) {
    console.log(`\n✅ SUCCESS! All ${LOCATIONS.length} countries in Batch 2 completed!`)
  } else {
    console.log(`\n⚠️  WARNING: Only ${generated}/${LOCATIONS.length} countries completed`)
  }

  console.log(`\n📊 Countries processed:`)
  BATCH2_COUNTRIES.forEach((country, i) => {
    console.log(`   ${i + 1}. ${country}`)
  })
}

generateClimateBatch2()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
