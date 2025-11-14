import Anthropic from '@anthropic-ai/sdk'
import { ALL_COUNTRIES, saveCountrySummary } from './generation-helpers'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 21-114 (remaining 94)
const remainingCountries = ALL_COUNTRIES.slice(20) // Skip first 20 (Americas already done)

const BEN_THOMPSON_PROMPT = `You are writing in the analytical voice of Ben Thompson from Stratechery - strategic business analysis focused on Aggregation Theory, platform dynamics, long-term strategic thinking, and healthy skepticism of hype cycles.

Key characteristics:
- Strategic business analysis with deep understanding of platform economics
- Apply Aggregation Theory framework (how platforms commoditize suppliers and own customer relationships)
- Focus on business models, unit economics, competitive dynamics
- Long-term strategic thinking over short-term hype
- Critical of buzzwords and tech hype - look for sustainable business models
- Understand network effects, economies of scale, and strategic moats
- Connect technology developments to business outcomes
- Consider geopolitical implications for tech platforms and supply chains

Write a comprehensive technology analysis for {COUNTRY} covering:

1. **Opening paragraph**: Strategic assessment of the country's technology sector - what's the big picture? What's the fundamental business model question or strategic tension? Apply framework thinking.

2. **Three major issues** (## The Big Issue 1/2/3):
   - Platform dynamics and ecosystem plays
   - Business model sustainability and unit economics
   - Strategic competitive positioning
   - Technology infrastructure and dependencies
   - Human capital and talent flows
   - Government policy and regulation impacts
   - International tech competition (US-China, etc.)

3. **International Angle**: How this country fits into global technology competition, supply chains, platform wars, and geopolitical tech dynamics.

4. **Bottom Line**: Clear-eyed assessment of strategic positioning and business model viability.

Style requirements:
- Analytical and strategic, not breathlessly enthusiastic
- Business model focus - who captures value and how?
- Skeptical of hype - look for sustainable advantages
- Long-term strategic thinking
- Use phrases like: "The strategic question is...", "From a business model perspective...", "This matters because...", "The unit economics are...", "Aggregation Theory predicts..."
- Focus on: platform dynamics, network effects, economies of scale, competitive moats, value capture

Length: 2500-3000 words total. Make it substantive and strategic.

Format as markdown with:
# {COUNTRY} - Technology
[Opening strategic analysis paragraph]

## The Big Issue 1: [Title]
[Analysis]

## The Big Issue 2: [Title]
[Analysis]

## The Big Issue 3: [Title]
[Analysis]

## The International Angle
[Analysis]

## The Bottom Line
[Conclusion]`

async function generateTechWriteup(country: typeof ALL_COUNTRIES[0]): Promise<{ summary: string; issues: string[] }> {
  const prompt = BEN_THOMPSON_PROMPT.replace(/\{COUNTRY\}/g, country.name)

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16000,
    temperature: 1,
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ]
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  // Extract issue titles from the markdown
  const issueMatches = summary.match(/## The Big Issue \d+: (.+)/g) || []
  const issues = issueMatches.map(match => match.replace(/## The Big Issue \d+: /, ''))

  return { summary, issues }
}

async function main() {
  console.log('📱 Generating Technology writeups for remaining 94 countries')
  console.log('🎯 Voice: Ben Thompson - Strategic business analysis, Aggregation Theory\n')

  let completed = 0
  let failed = 0
  const failedCountries: string[] = []

  for (let i = 0; i < remainingCountries.length; i++) {
    const country = remainingCountries[i]

    try {
      console.log(`\n🔄 Generating ${i + 1}/94: ${country.name}...`)

      const { summary, issues } = await generateTechWriteup(country)

      await saveCountrySummary(country, 'technology', summary, issues)

      completed++
      console.log(`✅ ${country.name} - ${summary.length} chars, ${issues.length} issues`)

      // Report every 25 countries
      if (completed % 25 === 0) {
        console.log('\n' + '='.repeat(60))
        console.log(`📊 PROGRESS REPORT: ${completed}/94 countries completed`)
        console.log(`📈 Total technology writeups: ${20 + completed}/114`)
        console.log('='.repeat(60) + '\n')
      }

      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      failed++
      failedCountries.push(country.name)
      console.error(`❌ Error generating ${country.name}:`, error)
    }
  }

  console.log('\n' + '='.repeat(60))
  console.log('✨ FINAL SUMMARY')
  console.log('='.repeat(60))
  console.log(`✅ Successfully generated: ${completed}/94 countries`)
  console.log(`❌ Failed: ${failed}/94 countries`)
  console.log(`📊 Total technology writeups: ${20 + completed}/114`)

  if (failedCountries.length > 0) {
    console.log(`\n⚠️  Failed countries:`, failedCountries.join(', '))
  }

  console.log('\n🎉 Generation complete!')
}

main().catch(console.error)
