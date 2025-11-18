import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 118-128: Singapore through Suriname
const COUNTRIES = [
  {
    name: 'Singapore',
    code: 'SG',
    lat: 1.3521,
    lng: 103.8198,
  },
  {
    name: 'Slovakia',
    code: 'SK',
    lat: 48.6690,
    lng: 19.6990,
  },
  {
    name: 'Slovenia',
    code: 'SI',
    lat: 46.1512,
    lng: 14.9955,
  },
  {
    name: 'Somalia',
    code: 'SO',
    lat: 5.1521,
    lng: 46.1996,
  },
  {
    name: 'South Africa',
    code: 'ZA',
    lat: -30.5595,
    lng: 22.9375,
  },
  {
    name: 'South Korea',
    code: 'KR',
    lat: 35.9078,
    lng: 127.7669,
  },
  {
    name: 'South Sudan',
    code: 'SS',
    lat: 6.8770,
    lng: 31.3070,
  },
  {
    name: 'Spain',
    code: 'ES',
    lat: 40.4637,
    lng: -3.7492,
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    lat: 7.8731,
    lng: 80.7718,
  },
  {
    name: 'Sudan',
    code: 'SD',
    lat: 12.8628,
    lng: 30.2176,
  },
  {
    name: 'Suriname',
    code: 'SR',
    lat: 3.9193,
    lng: -56.0278,
  },
]

interface ResearchResult {
  nationalTeam: string
  domesticLeague: string
  olympics: string
  worldCup: string
}

async function conductResearch(countryName: string): Promise<ResearchResult> {
  console.log(`  🔍 Conducting research for ${countryName}...`)

  const queries = [
    `${countryName} national team 2024 2025 results`,
    `${countryName} domestic league 2024 2025 season`,
    `${countryName} Olympics 2024 Paris medals`,
    `${countryName} World Cup qualifying 2026`,
  ]

  const research: ResearchResult = {
    nationalTeam: '',
    domesticLeague: '',
    olympics: '',
    worldCup: '',
  }

  // Research using Claude with extended knowledge
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]
    console.log(`     → ${query}`)

    try {
      const searchPrompt = `Research ${countryName} sports based on: ${query}

Provide a detailed summary (200-300 words) focusing on:
- Specific results, scores, and dates from 2024-2025
- Player names and performances
- League standings and notable matches
- Tournament participation and results
- Infrastructure and governance developments
- Transfer news and league updates

Be specific with names, dates, scores, and facts. Focus on recent 2024-2025 developments.`

      const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: searchPrompt }],
      })

      const result = message.content[0].type === 'text' ? message.content[0].text : ''

      if (i === 0) research.nationalTeam = result
      else if (i === 1) research.domesticLeague = result
      else if (i === 2) research.olympics = result
      else if (i === 3) research.worldCup = result

      // Rate limiting between searches
      await new Promise((resolve) => setTimeout(resolve, 500))
    } catch (error: any) {
      console.error(`     ✗ Error researching: ${error.message}`)
    }
  }

  return research
}

interface SportsSummaryResult {
  summary: string
  issues: string[]
  charCount: number
}

async function generateSportsSummary(
  countryName: string,
  research: ResearchResult
): Promise<SportsSummaryResult> {
  console.log(`  🤖 Generating Bill Simmons/Gary Neville style summary...`)

  const researchData = `
NATIONAL TEAM 2024-2025:
${research.nationalTeam}

DOMESTIC LEAGUE 2024-2025:
${research.domesticLeague}

OLYMPICS 2024 PARIS:
${research.olympics}

WORLD CUP 2026 QUALIFYING:
${research.worldCup}
  `.trim()

  const prompt = `You are a sports journalist writing in the energetic, analytical style of Bill Simmons and Gary Neville - smart sports talk radio, not dry reporting.

COUNTRY: ${countryName}

RESEARCH DATA (2024-2025):
${researchData}

WRITE A SPORTS SUMMARY EXACTLY 2,000-3,000 CHARACTERS.

VOICE & TONE:
- Bill Simmons/Gary Neville: Energetic, analytical, insider knowledge, slightly irreverent
- Like smart sports talk radio - conversational but deeply informed
- Lead with drama, controversy, or biggest recent result
- Use specific names, scores, dates, transfer fees
- Be honest about poor performance and controversies
- Explain WHY things happened, not just WHAT

STRUCTURE:

OPENING (1 paragraph, ~250 chars):
- Hook with most dramatic recent result or controversy
- "Let's talk about [Country] [sport], because..." or "Here's the thing about..."
- Set up the narrative

BODY (3-4 distinct topics, ~400 chars each):
- Cover popular sports (not just soccer if other sports matter more)
- Recent results with SPECIFIC details (scores, player names, dates)
- Tactical/strategic analysis (accessible, not overly technical)
- Stars and emerging talents
- Governance, infrastructure, investment issues
- Olympic/World Cup performance and prospects

CLOSING (1 paragraph, ~200 chars):
- Bottom line assessment
- Predictions or what to watch
- Punchy conclusion

CRITICAL REQUIREMENTS:
- 2,000-3,000 characters (COUNT CAREFULLY)
- Be SPECIFIC: actual scores, player names, dates, fees
- Be ANALYTICAL: explain why, not just what
- Be CURRENT: focus on 2024-2025 only
- Cover what the country ACTUALLY cares about (if basketball > football, lead with basketball)
- Don't ignore women's sports or Paralympic sports if relevant
- Be honest about failures, corruption, controversies

Generate ONLY the summary text (no headings, no "## Summary"). Just the energetic sports write-up.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''
  const charCount = summary.length

  // Generate issues
  const issuesPrompt = `Based on this sports summary for ${countryName}, extract 3-5 brief sports topics (NOT full sentences). Examples: "National team World Cup qualification campaign", "Domestic league corruption scandal", "Olympic medal surge in athletics"

SUMMARY:
${summary}

Provide ONLY a bullet list of 3-5 brief topics (starting with -):`

  const issuesMessage = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 500,
    messages: [{ role: 'user', content: issuesPrompt }],
  })

  const issuesText = issuesMessage.content[0].type === 'text' ? issuesMessage.content[0].text : ''
  const issues = issuesText
    .split('\n')
    .filter((line) => line.trim().startsWith('-'))
    .map((line) => line.replace(/^-\s*/, '').trim())
    .filter((issue) => issue.length > 0)

  console.log(`  ✅ Generated: ${charCount} characters, ${issues.length} issues`)

  if (charCount < 2000) {
    console.log(`  ⚠️  WARNING: Under 2,000 characters (${charCount})`)
  } else if (charCount > 3000) {
    console.log(`  ⚠️  WARNING: Over 3,000 characters (${charCount})`)
  }

  return { summary, issues, charCount }
}

async function main() {
  console.log('⚽ SPORTS CATEGORY SUMMARY GENERATION')
  console.log('='.repeat(80))
  console.log(`Countries: ${COUNTRIES.length} (Singapore through Suriname, #118-128)`)
  console.log('Category: sports')
  console.log('Voice: Bill Simmons / Gary Neville')
  console.log('Target: 2,000-3,000 characters')
  console.log('='.repeat(80))
  console.log('')

  const results: { country: string; charCount: number; success: boolean; issues: number }[] = []

  for (const country of COUNTRIES) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`📍 ${country.name} (${country.code})`)
    console.log('='.repeat(80))

    try {
      // Step 1: Research
      const research = await conductResearch(country.name)

      // Step 2: Generate summary
      const { summary, issues, charCount } = await generateSportsSummary(
        country.name,
        research
      )

      // Step 3: Save to database
      await prisma.locationSummary.create({
        data: {
          id: `${country.code}-sports`,
          name: country.name,
          type: 'country',
          country: country.code,
          category: 'sports',
          lat: country.lat,
          lng: country.lng,
          summary: summary,
          issues: JSON.stringify(issues),
          topStories: '[]',
          storyCount: 0,
        },
      })

      console.log(`  💾 Saved to database: ${country.code}-sports`)

      results.push({
        country: country.name,
        charCount,
        issues: issues.length,
        success: true
      })

      // Rate limiting between countries
      await new Promise((resolve) => setTimeout(resolve, 2000))

    } catch (error: any) {
      console.error(`  ❌ Error: ${error.message}`)
      results.push({
        country: country.name,
        charCount: 0,
        issues: 0,
        success: false
      })
    }
  }

  // Final report
  console.log('\n\n' + '='.repeat(80))
  console.log('📊 FINAL REPORT - SPORTS SUMMARIES GENERATION')
  console.log('='.repeat(80))
  console.log('')

  const successful = results.filter(r => r.success)
  const failed = results.filter(r => !r.success)

  console.log(`✅ Successful: ${successful.length}/${COUNTRIES.length}`)
  console.log(`❌ Failed: ${failed.length}/${COUNTRIES.length}`)
  console.log('')

  if (successful.length > 0) {
    console.log('SUMMARIES GENERATED:')
    console.log('-'.repeat(80))
    successful.forEach(r => {
      const status = r.charCount >= 2000 && r.charCount <= 3000 ? '✓' : '⚠'
      const countryPadded = r.country.padEnd(25)
      const charsPadded = `${r.charCount} chars`.padEnd(12)
      const issuesPadded = `${r.issues} issues`.padEnd(10)
      console.log(`  ${status} ${countryPadded} ${charsPadded} ${issuesPadded}`)
    })
    console.log('')
  }

  if (failed.length > 0) {
    console.log('FAILED:')
    failed.forEach(r => {
      console.log(`  ❌ ${r.country}`)
    })
    console.log('')
  }

  const withinRange = successful.filter(r => r.charCount >= 2000 && r.charCount <= 3000).length
  console.log(`Character count compliance: ${withinRange}/${successful.length} within 2,000-3,000 range`)

  console.log('\n' + '='.repeat(80))
  console.log('✅ GENERATION COMPLETE')
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
