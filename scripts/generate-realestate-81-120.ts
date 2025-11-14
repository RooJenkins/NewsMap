#!/usr/bin/env npx tsx
/**
 * Generate and save Real Estate & Housing summaries for countries 81-120
 * Countries: Kuwait through Zimbabwe
 * Uses Claude API to generate detailed 2,000-3,000 character analyses
 */

import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'
import { countryCoordinates } from '../lib/countryCoordinates'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 81-120 from the countryData list (0-based indices 80-119)
const countryList = Object.keys(countryData).slice(80, 120)

interface RealEstateAnalysis {
  summary: string
  issues: string[]
}

async function generateRealEstateSummary(
  countryName: string,
  countryStats: typeof countryData['United States']
): Promise<RealEstateAnalysis> {
  console.log(`🏠 Generating Real Estate summary for ${countryName}...`)

  const prompt = `You are a housing market expert and urban policy analyst with a YIMBY (Yes In My Back Yard) perspective, deeply knowledgeable about housing affordability, real estate development, and urban planning across different economic contexts. You write in a conversational style similar to Matt Yglesias - accessible, evidence-based, and sharply focused on housing supply and zoning as core issues affecting prosperity.

Generate a comprehensive, detailed Real Estate & Housing market analysis for ${countryName}. Use the following country data as context:
- Government: ${countryStats.government}
- Population: ${countryStats.population}
- GDP: ${countryStats.gdp}
- GDP Per Capita: ${countryStats.gdpPerCapita}
- Primary Export: ${countryStats.primaryExport}
- Leader: ${countryStats.leader} (${countryStats.leaderTitle})
- Freedom Status: ${countryStats.freedomStatus}

Your analysis should be 2,000-3,000 characters and provide comprehensive coverage of:

1. **Housing Affordability & Prices**: Current housing price levels, price-to-income ratios, rental prices, trends in residential property values. Are homes becoming more or less affordable? How do prices compare across regions and urban vs rural areas? What's driving cost dynamics?

2. **Homeownership vs Rental Markets**: Homeownership rates vs rental proportions. Cultural attitudes toward owning vs renting. Tenant protections and landlord incentives. How accessible is homeownership for average citizens? What income multiplier do homes require?

3. **Construction Activity**: Current building permits, new housing starts, development pipeline. Is there adequate housing supply growth? What's the pace of new residential construction relative to population growth and household formation?

4. **Zoning & Regulation**: Land use regulations, zoning laws, restrictions on development, height limits, density maximums. Are regulations restrictive or permissive? How do they affect housing supply, sprawl, and property costs? Are there reform movements?

5. **Density vs Sprawl**: Urban density patterns, suburban expansion trajectories, public transit infrastructure. Is the country experiencing sprawl or densification? What are the implications for sustainability and affordability?

6. **Real Estate Investment**: Foreign investment in property, institutional investment trends (REITs, funds), speculation patterns. Is real estate treated primarily as shelter or investment commodity? Are price-to-rent ratios indicating overvaluation?

7. **Homelessness & Housing Security**: Homelessness rates, housing insecurity, informal settlements. What percentage of population faces housing challenges? What policies exist to address housing gaps?

Write in a conversational, informed tone that educates without being academic. Include specific observations about the country's unique housing challenges and opportunities. Think like someone who understands that housing supply directly affects affordability, that zoning restrictions cause real economic problems, and that these issues have measurable impacts on people's lives.

Format your response EXACTLY as follows:

## Real Estate & Housing Summary
[Your detailed 2,000-3,000 character analysis here - comprehensive coverage of all seven dimensions above]

## Major Issues
- Issue 1 (brief phrase)
- Issue 2 (brief phrase)
- Issue 3 (brief phrase)
- Issue 4 (brief phrase)
- Issue 5 (brief phrase, optional)

Be specific to ${countryName}'s situation. Focus on actionable insights about housing markets and policy implications.`

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
  console.log('🏗️  Real Estate & Housing Summary Generator')
  console.log('=' .repeat(80))
  console.log(`📍 Countries 81-120: ${countryList.length} countries`)
  console.log(`First: ${countryList[0]} | Last: ${countryList[countryList.length - 1]}`)
  console.log('=' .repeat(80))
  console.log()

  let savedCount = 0
  let errorCount = 0
  const errors: { country: string; error: string }[] = []

  for (const countryName of countryList) {
    try {
      const stats = countryData[countryName]
      const coords = countryCoordinates[countryName] || { lat: 0, lng: 0 }

      const { summary, issues } = await generateRealEstateSummary(countryName, stats)

      // Get stories for top stories list
      const stories = await prisma.story.findMany({
        where: { country: countryName },
        orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
        take: 7,
      })

      const topStories = stories.map(s => ({
        title: s.title,
        source: s.source,
        link: s.link,
        pubDate: s.pubDate.toISOString(),
      }))

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
          storyCount: stories.length,
          updatedAt: new Date(),
        },
        create: {
          name: countryName,
          type: 'country',
          country: countryName,
          lat: coords.lat,
          lng: coords.lng,
          category: 'realestate',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: stories.length,
        },
      })

      console.log(`  ✅ ${countryName}`)
      console.log(`     Characters: ${summary.length} | Issues: ${issues.length}`)
      savedCount++

    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error)
      console.error(`  ❌ ${countryName}: ${errorMsg}`)
      errorCount++
      errors.push({ country: countryName, error: errorMsg })
    }

    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  console.log()
  console.log('=' .repeat(80))
  console.log('✅ Real Estate & Housing Summary Generation Complete!')
  console.log('=' .repeat(80))
  console.log(`📊 Results:`)
  console.log(`   - Successfully saved: ${savedCount}`)
  console.log(`   - Errors: ${errorCount}`)
  console.log(`   - Total processed: ${countryList.length}`)

  if (errors.length > 0) {
    console.log('\n⚠️  Failed Countries:')
    errors.forEach(({ country, error }) => {
      console.log(`   - ${country}: ${error}`)
    })
  }

  console.log()
  console.log('📋 Summary Details:')
  console.log(`   Category: realestate`)
  console.log(`   Perspective: YIMBY-focused housing market expert (Matt Yglesias style)`)
  console.log(`   Summary Length: 2,000-3,000 characters`)
  console.log(`   Issues per country: 3-5`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
