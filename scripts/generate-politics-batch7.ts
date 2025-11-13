import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 7 countries for Politics category
const countries = [
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
]

async function generatePoliticsSummary(countryName: string): Promise<{
  summary: string
  issues: string[]
  topStories: any[]
}> {
  console.log(`\n🏛️  Generating Politics summary for ${countryName}...`)

  const prompt = `You are Rory Stewart from "The Rest is Politics" podcast. Write a deep political analysis for ${countryName} focusing on November 2025 political developments.

**STYLE REQUIREMENTS:**
- Voice: Conversational insider analysis like Rory Stewart
- Tone: Westminster/DC insider but accessible, deeply informed but not academic
- Length: 3,000-4,500 characters
- Focus: Power dynamics, electoral systems, key politicians, institutional health

**FOCUS AREAS:**
1. Current government/leadership and approval ratings
2. Opposition parties and key figures
3. Electoral system and recent/upcoming elections
4. Political institutions and their health
5. Key political debates and fault lines
6. Corruption/transparency levels

**STRUCTURE:**
Opening Hook (vivid, compelling recent political event)
→ Current Political State (government, key players, recent developments)
→ Challenges & Fault Lines (debates, opposition, institutional issues)
→ Future Outlook (upcoming elections, trends to watch)
→ Bottom Line (punchy synthesis)

**REQUIREMENTS:**
- Use real November 2025 political news and developments
- Name specific politicians, parties, approval ratings
- Include recent political events, elections, or crises
- Discuss power dynamics and institutional strengths/weaknesses
- Be honest and nuanced - not propaganda
- Forward-looking: what should readers watch for?

Write the Politics summary for ${countryName} now, focusing on November 2025 developments:`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    temperature: 1.0,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  // Generate issues
  const issuesPrompt = `Based on this Politics write-up for ${countryName}, extract 3-5 key political issues as brief phrases (not full sentences). Focus on the main political challenges, debates, or dynamics.

Write-up:
${summary}

List 3-5 key issues as bullet points:`

  const issuesMessage = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 300,
    messages: [{ role: 'user', content: issuesPrompt }],
  })

  const issuesText =
    issuesMessage.content[0].type === 'text' ? issuesMessage.content[0].text : ''
  const issues = issuesText
    .split('\n')
    .filter((line) => line.trim().startsWith('-') || line.trim().match(/^\d+\./))
    .map((line) => line.replace(/^[-•]\s*/, '').replace(/^\d+\.\s*/, '').trim())
    .filter((issue) => issue.length > 0)
    .slice(0, 5)

  console.log(`✅ Generated Politics summary for ${countryName}`)
  console.log(`   - Length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)

  return {
    summary,
    issues,
    topStories: [], // We'll add relevant political news stories
  }
}

async function main() {
  console.log('🚀 Starting Politics write-ups generation (Batch 7)\n')
  console.log(`📋 Countries: ${countries.map((c) => c.name).join(', ')}\n`)

  const results = []

  for (const country of countries) {
    try {
      const { summary, issues, topStories } = await generatePoliticsSummary(country.name)

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'politics',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'politics',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved Politics summary for ${country.name}`)
      results.push(country.name)

      // Rate limiting - wait 2 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error generating Politics summary for ${country.name}:`, error)
    }
  }

  console.log('\n✅ Politics write-ups generation complete!')
  console.log(`📊 Successfully generated: ${results.length}/${countries.length} countries`)
  console.log(`🏛️  Completed: ${results.join(', ')}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
