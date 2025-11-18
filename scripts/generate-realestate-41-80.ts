import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 41-80 from the countryData list
const countryList = Object.keys(countryData).slice(40, 80)

interface RealEstateAnalysis {
  summary: string
  issues: string[]
}

async function generateRealEstateSummary(
  countryName: string,
  countryStats: typeof countryData['United States']
): Promise<RealEstateAnalysis> {
  console.log(`🏠 Generating Real Estate summary for ${countryName}...`)

  const prompt = `You are a housing market expert and urban policy analyst with a YIMBY (Yes In My Back Yard) perspective, knowledgeable about housing affordability, development, and urban planning. You write in a conversational style similar to Matt Yglesias - accessible, evidence-based, and focused on housing supply as a key issue.

Generate a comprehensive, detailed Real Estate & Housing market analysis for ${countryName}. Use the following country data as context:
- Government: ${countryStats.government}
- Population: ${countryStats.population}
- GDP: ${countryStats.gdp}
- GDP Per Capita: ${countryStats.gdpPerCapita}
- Primary Export: ${countryStats.primaryExport}
- Leader: ${countryStats.leader} (${countryStats.leaderTitle})

Your analysis should be 2,000-3,000 characters and cover:

1. **Housing Affordability & Prices**: Current housing price levels, price-to-income ratios, trends in residential property values. Are homes becoming more or less affordable? How do prices compare regionally within the country?

2. **Homeownership vs Rental Markets**: Homeownership rates vs rental proportion. Cultural attitudes toward owning vs renting. Rental market conditions and regulations. How accessible is homeownership for average citizens?

3. **Construction Activity**: Current building permits, new housing starts, development pipeline. Is there adequate housing supply growth? What's the pace of new residential construction relative to population growth?

4. **Zoning & Regulation**: Land use regulations, zoning laws, restrictions on development. Are regulations restrictive or permissive? How do they affect housing supply and urban sprawl?

5. **Density vs Sprawl**: Urban density patterns, suburban expansion, public transit infrastructure. Is the country experiencing sprawl or densification? What are the implications?

6. **Real Estate Investment**: Foreign investment in property, institutional investment trends, speculation issues. Is real estate treated as an investment asset vs. shelter?

7. **Homelessness & Housing Security**: Homelessness rates, housing insecurity, policies to address gaps. What percentage of population faces housing challenges?

Write in a conversational, engaging tone that's informative without being academic. Include specific observations about the country's unique housing challenges and opportunities. Reference the economic context where relevant. Think like someone who understands that housing supply matters and that restrictive zoning causes real problems.

Format your response EXACTLY as follows:

## Real Estate & Housing Summary
[Your detailed 2000-3000 character analysis here - comprehensive coverage of all topics above]

## Major Issues
- Issue 1 (brief phrase)
- Issue 2 (brief phrase)
- Issue 3 (brief phrase)
- Issue 4 (brief phrase)
- Issue 5 (brief phrase, optional)

Be specific to ${countryName}'s situation. Focus on actionable insights about housing markets.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 3500,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText =
    message.content[0].type === 'text' ? message.content[0].text : ''

  // Parse the response
  const summaryMatch = responseText.match(
    /## Real Estate & Housing Summary\s+([\s\S]*?)(?=\n## Major Issues|$)/i
  )
  const issuesMatch = responseText.match(
    /## Major Issues\s+([\s\S]*?)$/i
  )

  const summary = summaryMatch ? summaryMatch[1].trim() : responseText
  const issues = issuesMatch
    ? issuesMatch[1]
        .split('\n')
        .filter((line) => line.trim().startsWith('-'))
        .map((line) => line.replace(/^-\s*/, '').trim())
        .filter((issue) => issue.length > 0)
    : []

  console.log(
    `✅ Generated Real Estate summary for ${countryName} (${summary.length} chars, ${issues.length} issues)`
  )

  return { summary, issues: issues.slice(0, 5) }
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌ Error: ANTHROPIC_API_KEY environment variable is not set')
    console.error('Please set the ANTHROPIC_API_KEY in your .env file or as an environment variable')
    process.exit(1)
  }

  console.log(
    `🚀 Starting Real Estate & Housing summary generation for countries 41-80\n`
  )
  console.log(`Countries: ${countryList.join(', ')}\n`)

  const results = {
    success: 0,
    failed: 0,
    skipped: 0,
  }

  for (const countryName of countryList) {
    const countryStats = countryData[countryName]

    if (!countryStats) {
      console.log(`⏭️  Skipping ${countryName} - not found in countryData`)
      results.skipped++
      continue
    }

    try {
      const { summary, issues } = await generateRealEstateSummary(
        countryName,
        countryStats
      )

      // Prepare top stories (empty array since we're generating original content)
      const topStories = [
        {
          title: `${countryName} Real Estate Market Overview`,
          source: 'Generated Analysis',
          pubDate: new Date().toISOString(),
        },
      ]

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: countryName,
            type: 'country',
            category: 'realestate',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: 1,
          updatedAt: new Date(),
        },
        create: {
          name: countryName,
          type: 'country',
          country: countryName,
          lat: 0, // Placeholder coordinates
          lng: 0,
          category: 'realestate',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: 1,
        },
      })

      console.log(`💾 Saved Real Estate summary for ${countryName}`)
      results.success++

      // Rate limiting - wait 1.5 seconds between API calls to be respectful
      await new Promise((resolve) => setTimeout(resolve, 1500))
    } catch (error) {
      console.error(
        `❌ Error generating Real Estate summary for ${countryName}:`,
        error
      )
      results.failed++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Real Estate & Housing summary generation complete!')
  console.log(`Success: ${results.success} | Failed: ${results.failed} | Skipped: ${results.skipped}`)
  console.log(
    `Generated summaries for ${results.success} countries (41-80)`
  )
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
