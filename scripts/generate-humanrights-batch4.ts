import * as dotenv from 'dotenv'
import * as path from 'path'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { getCountryStats } from '../lib/countryData'

// Load environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env') })

const prisma = new PrismaClient()

// Initialize Anthropic client - it will use env variables or Claude Code's built-in auth
const anthropic = new Anthropic()

// Batch 4: Countries 45-59
const countries = [
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Norway', lat: 60.472, lng: 8.4689 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'Romania', lat: 45.9432, lng: 24.9668 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Slovakia', lat: 48.669, lng: 19.699 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'China', lat: 35.0, lng: 105.0 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
]

async function generateHumanRightsSummary(
  countryName: string,
  lat: number,
  lng: number
): Promise<{ summary: string; issues: string[]; topStories: any[] }> {
  console.log(`\n🤖 Generating human rights summary for ${countryName}...`)

  // Fetch recent stories for this country
  const stories = await prisma.story.findMany({
    where: {
      country: countryName,
    },
    orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
    take: 100,
  })

  console.log(`📰 Found ${stories.length} stories for ${countryName}`)

  if (stories.length === 0) {
    console.log(`⚠️  No stories found for ${countryName} - generating summary anyway`)
  }

  // Prepare story summaries for AI
  const storySummaries = stories
    .slice(0, 100)
    .map(
      (story, i) =>
        `${i + 1}. [${story.source}] ${story.title}\n   Published: ${story.pubDate.toISOString()}`
    )
    .join('\n\n')

  // Get country stats for context
  const stats = getCountryStats(countryName)

  // Generate AI summary with Samantha Power / human rights journalist voice
  const prompt = `You are a human rights journalist in the tradition of Samantha Power - passionate, knowledgeable, and deeply committed to documenting both progress and abuses. Write in the "Rest is Politics" style: conversational but deeply informed, connecting abstract rights to real human impact, explaining "why this matters."

Analyze the human rights situation in ${countryName}.

COUNTRY CONTEXT:
- Government: ${stats.government}
- Leader: ${stats.leader} (${stats.leaderTitle})
- Ruling Party: ${stats.rulingParty}
- Population: ${stats.population}
- Freedom House Status: ${stats.freedomStatus}
- Capital: ${stats.capital}

${stories.length > 0 ? `RECENT NEWS STORIES (${stories.length} total):\n${storySummaries}\n\n` : ''}Based on your knowledge of ${countryName}'s human rights record and current situation, create a comprehensive human rights assessment.

Focus on these key areas:
- Freedom of press, speech, and assembly
- Women's rights and gender equality
- LGBTQ+ rights and protections
- Minority rights (ethnic, religious, linguistic minorities)
- Discrimination and systemic inequalities
- Political prisoners and dissent
- International human rights rankings and assessments
- Recent developments, laws, and controversies

Write a 2,500-3,500 character summary that:
1. Opens with the current state of human rights in ${countryName}
2. Discusses specific freedoms: press, speech, assembly, association
3. Addresses women's rights and gender issues
4. Covers LGBTQ+ rights and recent developments
5. Examines minority rights and discrimination patterns
6. Notes any political prisoners or restrictions on dissent
7. References international rankings (Freedom House, Reporters Without Borders, etc.)
8. Highlights recent positive or negative trends
9. Ends with the key challenges or opportunities ahead

STYLE ("Rest is Politics" + Samantha Power):
- Write conversationally but with deep expertise - like explaining to an intelligent friend
- Connect abstract rights to real human stories and impact ("why this matters")
- Be passionate but analytical, holding power accountable while recognizing complexity
- Include specific examples, laws, or incidents where relevant
- Avoid jargon - make human rights accessible
- Show the human cost of rights violations
- Be direct about abuses while acknowledging progress where it exists

Also provide:

2. List 3-5 major human rights issues in ${countryName} (brief phrases)

3. If stories were provided, select the top 5-7 most relevant stories for human rights

Format your response EXACTLY as follows:

## Summary
[Your 2,500-3,500 character human rights assessment here]

## Issues
- Issue 1
- Issue 2
- Issue 3

## Top Stories
1. Story number from list
2. Story number from list
3. Story number from list

Keep the summary length between 2,500-3,500 characters. Be passionate but precise.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText =
    message.content[0].type === 'text' ? message.content[0].text : ''

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

  // Extract story numbers and map to actual stories
  const topStories = []
  if (storiesMatch && stories.length > 0) {
    const storyNumbers = storiesMatch[1]
      .split('\n')
      .filter((line) => line.trim())
      .map((line) => parseInt(line.match(/^\d+/)?.[0] || '0'))
      .filter((num) => num > 0 && num <= stories.length)

    for (const num of storyNumbers.slice(0, 7)) {
      const story = stories[num - 1]
      topStories.push({
        title: story.title,
        source: story.source,
        link: story.link,
        pubDate: story.pubDate.toISOString(),
      })
    }
  }

  // If no top stories extracted, use the most recent important ones
  if (topStories.length === 0 && stories.length > 0) {
    topStories.push(
      ...stories.slice(0, 5).map((story) => ({
        title: story.title,
        source: story.source,
        link: story.link,
        pubDate: story.pubDate.toISOString(),
      }))
    )
  }

  console.log(`✅ Generated human rights summary for ${countryName}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting HUMAN RIGHTS summary generation (Batch 4: Countries 45-59)\n')
  console.log(`Countries (${countries.length}): ${countries.map(c => c.name).join(', ')}\n`)

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${country.name}`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, topStories } = await generateHumanRightsSummary(
        country.name,
        country.lat,
        country.lng
      )

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'humanrights',
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
          category: 'humanrights',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`💾 Saved human rights summary for ${country.name}`)
      successCount++

      // Rate limiting - wait 2 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error generating summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Human rights summary generation complete!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully generated: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${successCount + errorCount}/${countries.length} countries processed`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
