import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries to generate sports summaries for
const COUNTRIES = [
  { name: 'Afghanistan', code: 'AF', lat: 33.9391, lng: 67.71, capital: 'Kabul' },
  { name: 'Albania', code: 'AL', lat: 41.1533, lng: 20.1683, capital: 'Tirana' },
  { name: 'Algeria', code: 'DZ', lat: 28.0339, lng: 1.6596, capital: 'Algiers' },
  { name: 'Angola', code: 'AO', lat: -11.2027, lng: 17.8739, capital: 'Luanda' },
  { name: 'Argentina', code: 'AR', lat: -38.4161, lng: -63.6167, capital: 'Buenos Aires' },
  { name: 'Armenia', code: 'AM', lat: 40.0691, lng: 45.0382, capital: 'Yerevan' },
  { name: 'Australia', code: 'AU', lat: -25.2744, lng: 133.7751, capital: 'Canberra' },
  { name: 'Austria', code: 'AT', lat: 47.5162, lng: 14.5501, capital: 'Vienna' },
  { name: 'Azerbaijan', code: 'AZ', lat: 40.1431, lng: 47.5769, capital: 'Baku' },
  { name: 'Bahamas', code: 'BS', lat: 25.0343, lng: -77.3963, capital: 'Nassau' },
  { name: 'Bahrain', code: 'BH', lat: 26.0667, lng: 50.5577, capital: 'Manama' },
  { name: 'Bangladesh', code: 'BD', lat: 23.685, lng: 90.3563, capital: 'Dhaka' },
  { name: 'Barbados', code: 'BB', lat: 13.1939, lng: -59.5432, capital: 'Bridgetown' },
]

interface SportsSummaryResult {
  summary: string
  issues: string[]
  charCount: number
}

async function generateSportsSummary(
  countryName: string,
  researchData: string
): Promise<SportsSummaryResult> {
  console.log(`  🤖 Generating summary for ${countryName}...`)

  const prompt = `You are a sports journalist writing in the energetic, analytical style of Bill Simmons and Gary Neville.

Based on this research about ${countryName}'s sports scene, write a comprehensive sports summary.

RESEARCH DATA:
${researchData}

REQUIREMENTS:
- Length: 2,000-3,000 characters (STRICT)
- Voice: Energetic, analytical, insider knowledge, slightly irreverent (like Bill Simmons/Gary Neville)
- Tone: Sports talk radio (smart version) - conversational but informed

WHAT TO COVER:
- Popular sports (not just soccer - what the country ACTUALLY cares about)
- Domestic leagues: structure, attendance, TV deals, current standings
- National teams: recent results, World Cup/Olympics qualifying, upcoming fixtures
- Infrastructure: stadiums, training facilities, investment
- Stars & Icons: current athletes making waves, rising talents
- Olympic performance (Paris 2024 if applicable)
- World Cup qualifying (2026) status and prospects
- Governance: controversies, reforms, federation issues
- Investment: ownership models, broadcast rights, sports betting
- Emerging sports and youth development

WRITING STYLE:
Opening (1 paragraph, ~250 chars):
- Lead with most dramatic recent result or controversy
- Make it feel like sports talk radio
- Hook the reader immediately

Body (3-4 topics, ~400 chars each):
- Recent results with SPECIFIC scores, dates, player names
- Analysis of WHY things happened (tactical, strategic)
- Star performances and emerging talents
- Infrastructure and investment updates
- What's next (upcoming matches, tournaments, transfers)

Closing (1 paragraph, ~200 chars):
- Bottom line on country's sports scene
- Predictions or watch-outs
- Punchy conclusion

KEY PRINCIPLES:
- Be SPECIFIC: Scores, dates, player names, transfer fees, attendance figures
- Be analytical: Explain WHY, not just WHAT
- Be honest: Call out poor performance, corruption, mismanagement
- Be current: Focus on 2024-2025 developments
- Be inclusive: Don't ignore women's sports, Paralympic sports, emerging sports
- Be contextual: Explain leagues for international audience

AVOID:
- Generic statements like "football is popular here"
- Ignoring controversies or poor performance
- Being too technical without explanation
- Only covering one sport if multiple are important

Generate the sports summary now in this EXACT format:

## Summary
[Your 2,000-3,000 character sports summary here - energetic, specific, analytical]

## Issues
- Issue 1
- Issue 2
- Issue 3
- Issue 4
- Issue 5

Issues should be 3-5 brief sports topics like:
- "National team World Cup qualification campaign"
- "Domestic league corruption scandal"
- "Olympic medal surge in athletics"
- "New stadium construction boom"
`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText = message.content[0].type === 'text' ? message.content[0].text : ''

  // Parse the response
  const summaryMatch = responseText.match(/## Summary\s+([\s\S]*?)(?=\n## Issues|$)/i)
  const issuesMatch = responseText.match(/## Issues\s+([\s\S]*?)$/i)

  const summary = summaryMatch ? summaryMatch[1].trim() : responseText
  const issues = issuesMatch
    ? issuesMatch[1]
        .split('\n')
        .filter((line) => line.trim().startsWith('-'))
        .map((line) => line.replace(/^-\s*/, '').trim())
        .filter((issue) => issue.length > 0)
    : []

  const charCount = summary.length

  console.log(`  ✅ Generated summary: ${charCount} characters`)
  console.log(`  📋 Issues: ${issues.length}`)

  // Validate length
  if (charCount < 2000) {
    console.log(`  ⚠️  Warning: Summary is under 2,000 characters (${charCount})`)
  } else if (charCount > 3000) {
    console.log(`  ⚠️  Warning: Summary exceeds 3,000 characters (${charCount})`)
  }

  return { summary, issues, charCount }
}

async function main() {
  console.log('⚽ Starting Sports Category Summary Generation')
  console.log('=' .repeat(80))
  console.log(`Countries: ${COUNTRIES.length}`)
  console.log('Category: sports')
  console.log('Voice: Bill Simmons / Gary Neville')
  console.log('Length: 2,000-3,000 characters')
  console.log('=' .repeat(80))
  console.log('')

  const results: { country: string; charCount: number; success: boolean }[] = []

  for (const country of COUNTRIES) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`📍 Processing: ${country.name} (${country.code})`)
    console.log('='.repeat(80))

    try {
      // Use Claude's knowledge to generate sports summary
      // Note: In a production system with Perplexity MCP, you would do web searches here
      console.log(`  🔍 Generating based on sports knowledge...`)

      const researchData = `Generate a comprehensive sports summary for ${country.name} covering:
- National team performance in 2024-2025
- Domestic league developments
- Paris 2024 Olympic results (if applicable)
- 2026 World Cup qualifying status
- Key athletes and emerging stars
- Infrastructure and governance issues
- Popular sports and leagues

Use your knowledge of ${country.name}'s sports landscape to create an engaging, specific summary.`

      const { summary, issues, charCount } = await generateSportsSummary(
        country.name,
        researchData
      )

      // Save to database
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

      console.log(`  💾 Saved to database with ID: ${country.code}-sports`)

      results.push({
        country: country.name,
        charCount,
        success: true
      })

      // Rate limiting - wait 2 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 2000))

    } catch (error) {
      console.error(`  ❌ Error processing ${country.name}:`, error)
      results.push({
        country: country.name,
        charCount: 0,
        success: false
      })
    }
  }

  // Final report
  console.log('\n\n' + '='.repeat(80))
  console.log('📊 GENERATION COMPLETE - FINAL REPORT')
  console.log('='.repeat(80))
  console.log('')

  const successful = results.filter(r => r.success)
  const failed = results.filter(r => !r.success)

  console.log(`✅ Successful: ${successful.length}/${COUNTRIES.length}`)
  console.log(`❌ Failed: ${failed.length}/${COUNTRIES.length}`)
  console.log('')

  if (successful.length > 0) {
    console.log('CHARACTER COUNTS:')
    successful.forEach(r => {
      const status = r.charCount >= 2000 && r.charCount <= 3000 ? '✓' : '⚠'
      console.log(`  ${status} ${r.country.padEnd(20)} ${r.charCount} characters`)
    })
  }

  if (failed.length > 0) {
    console.log('\nFAILED COUNTRIES:')
    failed.forEach(r => {
      console.log(`  ❌ ${r.country}`)
    })
  }

  console.log('\n' + '='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
