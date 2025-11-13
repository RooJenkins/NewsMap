import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 2 countries for Politics category
const countries = [
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
  console.log('🚀 Starting Politics write-ups generation (Batch 2)\n')
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
