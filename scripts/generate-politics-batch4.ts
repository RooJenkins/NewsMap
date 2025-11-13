import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

interface CountryData {
  name: string
  lat: number
  lng: number
}

const countries: CountryData[] = [
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
]

async function generatePoliticsSummary(country: CountryData): Promise<{
  summary: string
  issues: string[]
  topStories: any[]
}> {
  console.log(`\n🏛️  Generating Politics summary for ${country.name}...`)

  const prompt = `You are Rory Stewart from "The Rest is Politics" podcast. Write a comprehensive POLITICS analysis for ${country.name} as of November 2025.

**CRITICAL REQUIREMENTS:**
- Write in Rory Stewart's conversational insider style
- Focus on POLITICS ONLY: government, leadership, opposition, electoral systems, institutions, political debates, corruption
- Length: 3,000-4,500 characters
- Use real November 2025 political developments and recent news
- Be specific with names, dates, numbers, events
- Conversational but deeply informed Westminster/DC insider tone

**Structure:**

**Opening Hook (150 words):**
Lead with the most compelling recent political development in ${country.name}. Make it vivid and engaging.

**Current Political State (400 words):**
- Who's in power and their approval ratings
- Government composition and stability
- Recent political developments (November 2025)
- Key political figures and their influence

**Political Challenges & Debates (400 words):**
- Opposition parties and their strategies
- Major political fault lines and controversies
- Electoral system issues
- Corruption and transparency concerns
- Institutional strengths/weaknesses

**Future Outlook (200 words):**
- Upcoming elections or political events
- Trends to watch
- Potential scenarios

**Bottom Line (100 words):**
Sharp synthesis of what matters most politically in ${country.name}.

**STYLE NOTES:**
- Use phrases like "The fascinating thing about..." or "What's really going on here is..."
- Include insider details that show deep knowledge
- Connect to broader democratic trends
- Be honest about problems without being preachy
- Make it feel like a smart conversation over dinner

Please provide:

1. The full Politics write-up (3,000-4,500 characters)
2. 4-5 key political issues (brief phrases)
3. 3-5 recent political news stories with realistic details for November 2025

Format your response EXACTLY as:

## Summary
[Your full Politics write-up here - 3,000-4,500 characters]

## Issues
- Issue 1
- Issue 2
- Issue 3
- Issue 4

## Top Stories
1. [Specific political story with date and details]
2. [Specific political story with date and details]
3. [Specific political story with date and details]`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText = message.content[0].type === 'text' ? message.content[0].text : ''

  // Parse the response
  const summaryMatch = responseText.match(/## Summary\s+([\s\S]*?)(?=\n## Issues|$)/i)
  const issuesMatch = responseText.match(/## Issues\s+([\s\S]*?)(?=\n## Top Stories|$)/i)
  const storiesMatch = responseText.match(/## Top Stories\s+([\s\S]*?)$/i)

  const summary = summaryMatch ? summaryMatch[1].trim() : responseText
  const issues = issuesMatch
    ? issuesMatch[1]
        .split('\n')
        .filter((line) => line.trim().startsWith('-'))
        .map((line) => line.replace(/^-\s*/, '').trim())
    : []

  // Parse top stories
  const topStories: any[] = []
  if (storiesMatch) {
    const storyLines = storiesMatch[1]
      .split('\n')
      .filter((line) => line.trim() && /^\d+\./.test(line.trim()))

    storyLines.forEach((line) => {
      const cleaned = line.replace(/^\d+\.\s*/, '').trim()
      if (cleaned) {
        topStories.push({
          title: cleaned,
          source: 'Political Analysis',
          link: `https://news.example.com/${country.name.toLowerCase()}-politics`,
          pubDate: new Date().toISOString(),
        })
      }
    })
  }

  console.log(`✅ Generated Politics summary for ${country.name}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting Politics summary generation (Batch 4)\n')
  console.log(`📊 Countries to process: ${countries.length}`)
  console.log(`📝 Category: Politics (Rory Stewart style)`)
  console.log(`📏 Target length: 3,000-4,500 characters\n`)

  const results = []

  for (const country of countries) {
    try {
      console.log(`\n${'='.repeat(80)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(80))

      const { summary, issues, topStories } = await generatePoliticsSummary(country)

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
          storyCount: topStories.length,
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
          storyCount: topStories.length,
        },
      })

      console.log(`💾 Saved Politics summary for ${country.name} to database`)
      results.push({ country: country.name, success: true, length: summary.length })

      // Rate limiting - wait 2 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error generating Politics summary for ${country.name}:`, error)
      results.push({ country: country.name, success: false, error: String(error) })
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('📊 FINAL RESULTS')
  console.log('='.repeat(80))

  const successful = results.filter(r => r.success)
  const failed = results.filter(r => !r.success)

  console.log(`\n✅ Successful: ${successful.length}/${countries.length}`)
  successful.forEach(r => {
    console.log(`   - ${r.country}: ${r.length} characters`)
  })

  if (failed.length > 0) {
    console.log(`\n❌ Failed: ${failed.length}/${countries.length}`)
    failed.forEach(r => {
      console.log(`   - ${r.country}: ${r.error}`)
    })
  }

  console.log('\n✅ Politics summary generation complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
