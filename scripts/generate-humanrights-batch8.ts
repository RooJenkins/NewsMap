import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Batch 8: Countries 105-119 for human rights summaries
const COUNTRIES = [
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 }
]

interface StoryForSummary {
  title: string
  link: string
  source: string
  pubDate: Date
  description: string | null
  country: string | null
  importance: number
}

// Generate human rights summary using Claude with Samantha Power voice
async function generateHumanRightsSummary(
  countryName: string,
  stories: StoryForSummary[]
): Promise<{ summary: string; issues: string; topStories: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  // Prepare story context for AI
  const storyContext = stories.length > 0
    ? stories.map((s, i) =>
        `${i + 1}. "${s.title}" - ${s.source} (${s.pubDate.toLocaleDateString()})\n   ${s.description || 'No description'}`
      ).join('\n\n')
    : 'Limited recent news stories available. Generate summary based on general human rights context.'

  const prompt = `You are writing in the passionate, informed voice of Samantha Power - a human rights journalist who combines moral clarity with geopolitical expertise. You understand that human rights aren't abstract concepts but lived realities that shape nations and lives.

Write a compelling human rights summary for ${countryName} based on recent developments and the country's human rights landscape.

Recent News Stories:
${storyContext}

FOCUS AREAS FOR ${countryName.toUpperCase()} HUMAN RIGHTS:
- Freedom of press, speech, and assembly
- Women's rights and gender equality
- LGBTQ+ rights and protections
- Minority rights and discrimination
- Political prisoners and arbitrary detention
- Civil society restrictions
- International human rights rankings and assessments
- State violence and accountability
- Judicial independence
- Electoral freedoms

Write following this structure (2,500-3,500 characters total):

[OPENING HOOK - 200-300 words]
Lead with the most urgent or revealing human rights situation in ${countryName}. Make it personal and concrete - this is about real people facing real consequences. Set the stakes clearly. What's the defining human rights challenge right now?

**Civil and Political Rights** (~400-500 words)
Analyze freedom of expression, press freedom, assembly, political participation. Are journalists being harassed? Is civil society being squeezed? What about political prisoners? Use specific examples if available in the news. Connect to international standards and rankings. Channel Power's ability to call out abuses while understanding complex political contexts.

**Vulnerable Populations** (~400-500 words)
Deep dive into women's rights, LGBTQ+ rights, ethnic/religious minorities, refugees, or other marginalized groups. What legal protections exist or don't exist? What's happening on the ground versus what's written in law? Include recent incidents or policy changes. Be unflinching about discrimination while recognizing grassroots resistance and resilience.

**Accountability and International Pressure** (~300-400 words)
How does the government respond to human rights concerns? What role do international mechanisms play? Any recent UN reports, sanctions, or diplomatic pressure? Is there judicial independence? Transitional justice? This is where Power's diplomatic experience shines - understanding leverage points and reform pathways.

**The Way Forward** (~200-300 words)
What gives you hope? What keeps you up at night? What are the realistic next steps for improvement? Who are the key actors - activists, institutions, international partners? End with moral clarity about what's at stake and what progress looks like.

CRITICAL STYLE REQUIREMENTS:
- Write with moral conviction but avoid melodrama
- Use specific examples and concrete details whenever possible
- Channel Samantha Power's voice: principled, informed, clear-eyed about power dynamics
- Include statistics, rankings, or specific incidents when relevant
- Balance criticism with recognition of progress or civil society courage
- Make it about people, not just policies
- Accessible to general readers but sophisticated in analysis
- 2,500-3,500 characters (aim for ~3,000)
- Use bold headers exactly as shown above

Generate the human rights summary now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract issues (look for bold headers or key phrases)
    const issueMatches = summaryText.match(/\*\*([^*]+)\*\*/g) || []
    const issues = issueMatches
      .map(match => match.replace(/\*\*/g, '').trim())
      .filter(issue => issue.length > 5 && issue.length < 100)
      .slice(0, 5)

    // Top stories for links
    const topStories = stories.slice(0, 8).map(s => ({
      title: s.title,
      source: s.source,
      link: s.link,
      pubDate: s.pubDate.toISOString()
    }))

    return {
      summary: summaryText,
      issues: JSON.stringify(issues.length > 0 ? issues : ['Human Rights Situation', 'Press Freedom', 'Civil Liberties']),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`Error generating human rights summary for ${countryName}:`, error)
    throw error
  }
}

// Find relevant stories for a country
async function findRelevantStories(countryName: string): Promise<StoryForSummary[]> {
  // Try to find stories directly tagged with country
  let stories = await prisma.story.findMany({
    select: {
      title: true,
      link: true,
      source: true,
      pubDate: true,
      description: true,
      country: true,
      importance: true
    },
    where: {
      country: countryName,
      pubDate: {
        gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) // Last 60 days
      }
    },
    orderBy: [
      { importance: 'desc' },
      { pubDate: 'desc' }
    ],
    take: 30
  })

  // If we found some stories, return them
  if (stories.length >= 5) {
    console.log(`  Found ${stories.length} stories directly tagged for ${countryName}`)
    return stories
  }

  // Otherwise, search by keyword in title/description
  console.log(`  Only ${stories.length} tagged stories, searching by keyword...`)

  const allRecentStories = await prisma.story.findMany({
    select: {
      title: true,
      link: true,
      source: true,
      pubDate: true,
      description: true,
      country: true,
      importance: true
    },
    where: {
      pubDate: {
        gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
      }
    }
  })

  const keywords = countryName.toLowerCase().split(' ')
  const keywordStories = allRecentStories.filter((story: StoryForSummary) => {
    const text = `${story.title} ${story.description || ''}`.toLowerCase()
    return keywords.some(keyword => text.includes(keyword))
  })

  stories = [...stories, ...keywordStories]
    .filter((story, index, self) =>
      index === self.findIndex(s => s.link === story.link)
    )
    .sort((a, b) => b.importance - a.importance)
    .slice(0, 20)

  console.log(`  Found ${stories.length} total relevant stories`)
  return stories
}

// Main execution
async function generateHumanRightsBatch() {
  console.log('='.repeat(80))
  console.log('GENERATING HUMAN RIGHTS SUMMARIES - BATCH 8 (Countries 105-119)')
  console.log('Voice: Samantha Power / Human Rights Journalist')
  console.log('Countries: 15 African nations (Somalia to Uganda)')
  console.log('='.repeat(80))
  console.log('')

  let successCount = 0
  let errorCount = 0

  for (const country of COUNTRIES) {
    console.log(`\n${'─'.repeat(80)}`)
    console.log(`Processing: ${country.name}`)
    console.log('─'.repeat(80))

    try {
      // Find relevant stories
      const stories = await findRelevantStories(country.name)

      // Generate summary
      console.log(`  Generating human rights summary...`)
      const { summary, issues, topStories } = await generateHumanRightsSummary(
        country.name,
        stories
      )

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'humanrights'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'humanrights',
          summary,
          issues,
          topStories,
          storyCount: stories.length,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          storyCount: stories.length,
          updatedAt: new Date()
        }
      })

      console.log(`  ✓ Summary saved (${summary.length} characters)`)
      console.log(`  ✓ Issues extracted: ${JSON.parse(issues).length}`)
      console.log(`  ✓ Stories linked: ${JSON.parse(topStories).length}`)

      successCount++

      // Rate limiting - wait 2 seconds between API calls
      if (country !== COUNTRIES[COUNTRIES.length - 1]) {
        console.log(`  Waiting 2 seconds before next country...`)
        await new Promise(resolve => setTimeout(resolve, 2000))
      }

    } catch (error) {
      console.error(`  ✗ Error processing ${country.name}:`, error)
      errorCount++

      // Continue with next country after error
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('BATCH COMPLETE')
  console.log('='.repeat(80))
  console.log(`✓ Successful: ${successCount}/${COUNTRIES.length}`)
  console.log(`✗ Errors: ${errorCount}/${COUNTRIES.length}`)
  console.log('')
}

generateHumanRightsBatch()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
