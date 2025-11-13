import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 3 Countries (13 countries)
const BATCH3_COUNTRIES = [
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
]

const CLIMATE_PROMPT = `You are writing a CLIMATE & ENVIRONMENT write-up for {COUNTRY} in the voice of David Attenborough and Bill McKibben.

**VOICE & STYLE:**
- David Attenborough / Bill McKibben voice
- Urgent but not alarmist
- Vivid nature writing with specific data
- Connect environmental issues to specific impacts
- Use vivid descriptions of natural landscapes and threats

**FOCUS AREAS:**
1. Climate vulnerability and recent disasters (hurricanes, floods, droughts, heatwaves)
2. Renewable energy adoption, targets, and fossil fuel dependency
3. Deforestation, biodiversity loss, protected areas, unique ecosystems
4. Environmental regulations, enforcement, and policy effectiveness
5. Carbon emissions trajectory and climate commitments
6. Water security, resource management, and pollution

**LENGTH:** 2,500-3,500 characters (strict requirement)

**STRUCTURE:**

**Opening Hook (100-150 words):**
Lead with a vivid environmental feature, recent climate event, or striking natural contrast. Make it visual and immediate.

**Current State (300-400 words):**
- Describe key ecosystems and biodiversity
- Recent climate disasters and their impacts
- Current emissions levels and energy mix
- Climate vulnerability rankings and projections

**Challenges & Responses (300-400 words):**
- Deforestation rates and biodiversity threats
- Water scarcity or flooding issues
- Renewable energy progress and obstacles
- Environmental policy and enforcement gaps
- Pollution and waste management challenges

**Future Outlook (200-300 words):**
- Climate projections and expected impacts
- Renewable energy targets and feasibility
- Adaptation strategies and resilience plans
- International commitments and progress

**Bottom Line (100 words):**
Synthesize the environmental stakes. What makes this country's climate situation unique? What's the trajectory?

**CRITICAL REQUIREMENTS:**
- Use REAL, current data from 2024-2025 (November 2025 context)
- Be SPECIFIC: name actual protected areas, species, recent disasters, policy names, energy projects
- Include concrete numbers: emissions (MtCO2), renewable %, forest cover %, temperatures, sea level rise
- No generic platitudes - every sentence should contain specific information
- Make it engaging and human - how do these issues affect real people?
- Stay between 2,500-3,500 characters

Write the complete climate write-up for {COUNTRY} now:`

async function generateClimateWriteup(country: { name: string; lat: number; lng: number }) {
  console.log(`\n[${BATCH3_COUNTRIES.indexOf(country) + 1}/${BATCH3_COUNTRIES.length}] Generating: ${country.name}`)

  try {
    const prompt = CLIMATE_PROMPT.replace(/{COUNTRY}/g, country.name)

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      temperature: 1,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summary = message.content[0].type === 'text' ? message.content[0].text : ''

    // Generate issues array
    const issuesPrompt = `Based on this climate write-up for ${country.name}, extract 4-5 key environmental issues/topics as a JSON array of strings. Be specific and concise (3-5 words each).

Write-up:
${summary}

Return ONLY a JSON array like: ["Climate vulnerability", "Deforestation crisis", "Renewable energy transition", "Water scarcity", "Biodiversity loss"]`

    const issuesMessage = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 300,
      temperature: 0.5,
      messages: [{
        role: 'user',
        content: issuesPrompt
      }]
    })

    const issuesText = issuesMessage.content[0].type === 'text' ? issuesMessage.content[0].text : '[]'
    let issues: string[]
    try {
      issues = JSON.parse(issuesText.trim())
    } catch {
      // If parsing fails, extract array manually
      const match = issuesText.match(/\[.*\]/)
      issues = match ? JSON.parse(match[0]) : ['Climate change', 'Environmental policy', 'Sustainability']
    }

    console.log(`   ✓ Generated ${summary.length} characters`)
    console.log(`   Preview: ${summary.substring(0, 150)}...`)

    // Insert into database
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: country.name,
          type: 'country',
          category: 'climate'
        }
      },
      create: {
        name: country.name,
        type: 'country',
        category: 'climate',
        country: country.name,
        lat: country.lat,
        lng: country.lng,
        summary: summary,
        issues: JSON.stringify(issues),
        topStories: JSON.stringify([]),
        storyCount: 0,
      },
      update: {
        summary: summary,
        issues: JSON.stringify(issues),
        lat: country.lat,
        lng: country.lng,
        updatedAt: new Date(),
      }
    })

    console.log(`   ✓ Saved to database`)

    return { success: true, country: country.name }
  } catch (error: any) {
    console.error(`   ✗ Error for ${country.name}:`, error.message)
    return { success: false, country: country.name, error: error.message }
  }
}

async function main() {
  console.log('╔════════════════════════════════════════════════════════════════╗')
  console.log('║  CLIMATE & ENVIRONMENT WRITE-UPS - BATCH 3                     ║')
  console.log('║  Countries: Cuba → Finland (13 countries)                      ║')
  console.log('╚════════════════════════════════════════════════════════════════╝\n')

  const results = []

  for (const country of BATCH3_COUNTRIES) {
    const result = await generateClimateWriteup(country)
    results.push(result)

    // Rate limiting: wait 2 seconds between requests
    if (BATCH3_COUNTRIES.indexOf(country) < BATCH3_COUNTRIES.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  }

  // Summary
  const successful = results.filter(r => r.success).length
  const failed = results.filter(r => !r.success)

  console.log('\n╔════════════════════════════════════════════════════════════════╗')
  console.log('║  BATCH 3 COMPLETE                                              ║')
  console.log('╚════════════════════════════════════════════════════════════════╝')
  console.log(`   ✓ Successfully generated: ${successful}/${BATCH3_COUNTRIES.length}`)

  if (failed.length > 0) {
    console.log(`   ✗ Failed: ${failed.length}`)
    failed.forEach(f => console.log(`      - ${f.country}: ${f.error}`))
  }

  console.log('\n✅ Climate Batch 3 generation complete!\n')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
