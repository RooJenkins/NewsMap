import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()

const apiKey = process.env.ANTHROPIC_API_KEY
if (!apiKey) {
  console.error('❌ Error: ANTHROPIC_API_KEY environment variable is not set')
  process.exit(1)
}

const anthropic = new Anthropic({
  apiKey: apiKey,
})

// Countries 81-120 from the countryData list
const TARGET_COUNTRIES = [
  'Bahrain', 'Kuwait', 'Oman', 'Qatar', 'Kazakhstan',
  'Thailand', 'Vietnam', 'Philippines', 'Malaysia', 'Singapore',
  'Taiwan', 'Sri Lanka', 'Yemen', 'Saudi Arabia', 'UAE',
  'Lebanon', 'Syria', 'Solomon Islands', 'Vanuatu', 'Samoa',
  'Tonga', 'Egypt', 'Ethiopia', 'Kenya', 'Somalia',
  'Sudan', 'Algeria', 'Angola', 'Ghana', 'Mozambique',
  'Senegal', 'Democratic Republic of Congo', 'Nigeria', 'South Africa', 'Morocco',
  'Tunisia', 'Libya', 'Tanzania', 'Uganda', 'Zimbabwe'
]

interface HumanRightsSummary {
  summary: string
  issues: string[]
  topStories: Array<{
    title: string
    source: string
    link: string
    pubDate: string
  }>
}

async function generateHumanRightsSummary(
  countryName: string
): Promise<HumanRightsSummary> {
  const stats = countryData[countryName as keyof typeof countryData]

  if (!stats) {
    throw new Error(`Country not found: ${countryName}`)
  }

  const freedomStatus = stats.freedomStatus
  const government = stats.government

  const prompt = `You are Samantha Power, the renowned human rights advocate and former U.S. Ambassador to the UN. Write a conversational, deeply informed analysis of human rights in ${countryName}. Your tone should be passionate yet analytical, connecting abstract rights violations to their human impact.

Country Context:
- Government: ${government}
- Freedom Status: ${freedomStatus}
- Leader: ${stats.leader}
- Population: ${stats.population}

Your analysis MUST cover these specific dimensions:
1. Freedom of Press, Expression & Assembly - the ability to speak, publish, gather
2. Women's Rights - legal protections, workplace participation, violence, family law
3. LGBTQ+ Rights - legal status, protections, social acceptance
4. Minority Rights - ethnic, religious, or indigenous groups facing discrimination
5. Political Prisoners & Detention - arbitrary arrest, torture allegations, due process

Generate a comprehensive analysis that:
- Is 2,500-3,500 characters (approximately 400-550 words)
- Identifies 3-5 major human rights issues or concerns
- Uses specific examples and recent events where possible
- Connects each issue to broader governance or international standards
- Maintains your characteristic blend of moral clarity with political realism
- Avoids being preachy while making the stakes clear

Format your response as:

## Summary
[2-3 paragraph narrative analysis in Samantha Power's voice, covering the human rights landscape]

## Key Issues
- Issue 1: [Brief description of the violation or concern]
- Issue 2: [Brief description of the violation or concern]
- Issue 3: [Brief description of the violation or concern]
- Issue 4: [Brief description of the violation or concern - optional]
- Issue 5: [Brief description of the violation or concern - optional]

## International Context
[1 paragraph on how the international community responds, what pressure exists, what's at stake]

Begin your analysis now:`

  console.log(`  🤖 Generating Human Rights summary for ${countryName}...`)

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : ''

    // Parse the response
    const summaryMatch = responseText.match(
      /## Summary\s+([\s\S]*?)(?=\n## Key Issues|$)/i
    )
    const issuesMatch = responseText.match(
      /## Key Issues\s+([\s\S]*?)(?=\n## International Context|$)/i
    )

    const summary = summaryMatch ? summaryMatch[1].trim() : responseText
    const issuesText = issuesMatch ? issuesMatch[1].trim() : ''

    // Extract issues (lines starting with -)
    const issues = issuesText
      .split('\n')
      .filter((line) => line.trim().startsWith('-'))
      .map((line) => line.replace(/^-\s*/, '').trim())
      .filter((issue) => issue.length > 0)

    // Create top stories (based on the issues identified)
    const topStories = issues.map((issue, idx) => ({
      title: `Human Rights Issue: ${issue.split(':')[0]}`,
      source: 'Human Rights Analysis',
      link: `https://www.hrw.org/world-report/${new Date().getFullYear()}/${countryName.toLowerCase().replace(/\s+/g, '-')}`,
      pubDate: new Date().toISOString(),
    }))

    return {
      summary,
      issues,
      topStories,
    }
  } catch (error) {
    console.error(`  ❌ Error generating summary for ${countryName}:`, error)
    throw error
  }
}

async function main() {
  console.log(
    '🌍 Starting Human Rights Summary Generation for Countries 81-120\n'
  )
  console.log(`📍 Processing ${TARGET_COUNTRIES.length} countries\n`)

  let generated = 0
  let failed = 0
  const failedCountries: string[] = []

  for (const countryName of TARGET_COUNTRIES) {
    console.log(`\n${'='.repeat(70)}`)
    console.log(`Processing: ${countryName}`)
    console.log('='.repeat(70))

    try {
      const { summary, issues, topStories } = await generateHumanRightsSummary(
        countryName
      )

      // Save to database
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type: {
            name: countryName,
            type: 'country',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          category: 'humanrights',
          storyCount: issues.length,
          updatedAt: new Date(),
        },
        create: {
          name: countryName,
          type: 'country',
          country: countryName,
          lat: 0,
          lng: 0,
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          category: 'humanrights',
          storyCount: issues.length,
        },
      })

      generated++
      console.log(`✅ Summary generated and saved!`)
      console.log(`   Issues identified: ${issues.length}`)
      console.log(`   Summary length: ${summary.length} characters`)
      console.log(
        `   Top issues: ${issues.slice(0, 2).map((i) => i.split(':')[0]).join(', ')}`
      )

      // Rate limiting - 1 request per 2 seconds to avoid overloading API
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      failed++
      failedCountries.push(countryName)
      console.error(`❌ Failed to generate summary:`, error)
      // Continue with next country even if one fails
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  // Summary report
  console.log(`\n\n${'='.repeat(70)}`)
  console.log('✅ Human Rights Summary Generation Complete!')
  console.log('='.repeat(70))
  console.log(`\n📊 Results:`)
  console.log(`   Generated: ${generated}/${TARGET_COUNTRIES.length} summaries`)
  console.log(`   Failed: ${failed}/${TARGET_COUNTRIES.length}`)

  if (failedCountries.length > 0) {
    console.log(`\n⚠️  Failed countries:`)
    failedCountries.forEach((country) => console.log(`   - ${country}`))
  }

  if (generated > 0) {
    const total = await prisma.locationSummary.count()
    const humanRights = await prisma.locationSummary.count({
      where: { category: 'humanrights' },
    })
    console.log(`\n📈 Database Update:`)
    console.log(`   Total LocationSummary records: ${total}`)
    console.log(`   Human Rights summaries: ${humanRights}`)
  }

  console.log(
    `\n✨ All Human Rights summaries saved with category='humanrights'`
  )
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
