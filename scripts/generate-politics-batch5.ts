import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 5 countries for Politics category
const COUNTRIES = [
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
]

const POLITICS_PROMPT = `You are Rory Stewart from "The Rest is Politics" podcast - conversational, deeply informed, with insider knowledge of how political systems actually work.

Write a POLITICS summary for {COUNTRY} focusing on November 2025 political developments.

**Style Guide:**
- Voice: Conversational insider analysis like Rory Stewart
- Connect political dynamics to human impact
- Explain "why this matters" and power dynamics
- Deep political analysis with Westminster/DC insider tone
- Length: 3,000-4,500 characters

**Focus Areas:**
- Current government/leadership and approval ratings
- Opposition parties and key figures
- Electoral system and recent/upcoming elections
- Political institutions and their health
- Key political debates and fault lines
- Corruption/transparency levels

**Structure:**
1. Opening Hook (100-150 words) - Most compelling recent political event
2. Current Political State (300-400 words) - What's happening right now politically
3. Political Challenges & Controversies (300-400 words) - Main political problems and debates
4. Future Political Outlook (200-300 words) - Trends to watch, upcoming elections
5. Bottom Line (100 words) - Key political takeaway

**Important:**
- Research actual November 2025 political news for {COUNTRY}
- Use real politician names, parties, recent elections/events
- Be specific with dates, numbers, poll ratings
- Honest assessment - don't oversell or undersell
- Forward-looking - what should readers watch for next?

After the summary, provide:

## Issues
- 3-5 key political issues (brief phrases)

## Top Stories
- 3-5 recent political news stories with realistic details

Format as:
## Summary
[Your 3,000-4,500 character summary here]

## Issues
- Issue 1
- Issue 2
- Issue 3

## Top Stories
1. [Title] - [Source] - [Date]
2. [Title] - [Source] - [Date]
3. [Title] - [Source] - [Date]`

async function generatePoliticsSummary(
  countryName: string
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🤖 Generating Politics summary for ${countryName}...`)

  const prompt = POLITICS_PROMPT.replace(/{COUNTRY}/g, countryName)

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    temperature: 1,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText =
    message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`📝 Generated ${responseText.length} characters for ${countryName}`)

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
        .filter((issue) => issue.length > 0)
    : []

  // Parse top stories
  const topStories: any[] = []
  if (storiesMatch) {
    const storyLines = storiesMatch[1]
      .split('\n')
      .filter((line) => line.trim())
      .slice(0, 5)

    for (const line of storyLines) {
      // Parse format: "1. [Title] - [Source] - [Date]"
      const match = line.match(/^\d+\.\s*(.+?)\s*-\s*(.+?)\s*-\s*(.+)$/)
      if (match) {
        const [, title, source, date] = match
        topStories.push({
          title: title.trim(),
          source: source.trim(),
          link: `https://news.google.com/search?q=${encodeURIComponent(countryName + ' politics')}`,
          pubDate: new Date(date.trim()).toISOString(),
        })
      }
    }
  }

  console.log(`✅ Parsed summary for ${countryName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting Politics summary generation for Batch 5\n')
  console.log(`Countries: ${COUNTRIES.map((c) => c.name).join(', ')}\n`)

  const results: string[] = []

  for (const country of COUNTRIES) {
    try {
      const { summary, issues, topStories } = await generatePoliticsSummary(
        country.name
      )

      // Save to database with category='politics'
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

      console.log(`💾 Saved Politics summary for ${country.name}`)
      results.push(country.name)

      // Rate limiting - wait 3 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 3000))
    } catch (error) {
      console.error(`❌ Error generating Politics summary for ${country.name}:`, error)
    }
  }

  console.log('\n✅ Politics summary generation complete!')
  console.log(`\nCompleted Politics for: ${results.join(', ')}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
