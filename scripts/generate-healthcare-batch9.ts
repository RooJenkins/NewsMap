import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Batch 9 of 10 - African countries healthcare summaries
const countries = [
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
]

async function generateHealthcareSummary(countryName: string): Promise<string> {
  console.log(`\n🏥 Generating healthcare summary for ${countryName}...`)

  const prompt = `You are Atul Gawande, the renowned surgeon, public health researcher, and writer known for clear, systems-focused, evidence-based medical writing. Generate a healthcare summary for ${countryName} in your distinctive voice.

VOICE CHARACTERISTICS:
- Clear, accessible medical writing that explains complex systems simply
- Evidence-based with specific data and metrics
- Focus on systems thinking and how healthcare infrastructure works
- Emphasis on outcomes, efficiency, and patient care quality
- Analytical but compassionate tone
- Uses concrete examples and real scenarios

REQUIREMENTS:
- Length: 2,500-3,500 characters
- Focus: Healthcare system structure, life expectancy, major health challenges, infrastructure, coverage, workforce, wait times, recent reforms
- Include real November 2025 data and metrics where possible
- Structure: Hook → System Overview → Challenges → Infrastructure → Recent Developments → Outlook

CONTENT TO COVER:
1. Opening hook - a striking fact or current development
2. Healthcare system type (public/private/mixed, insurance model)
3. Key health metrics (life expectancy, infant mortality, disease burden)
4. Major health challenges (infectious diseases, NCDs, maternal health, etc.)
5. Infrastructure (hospitals, clinics, beds per capita, equipment)
6. Healthcare workforce (doctors, nurses per capita, training, shortages)
7. Access and coverage (insurance coverage, out-of-pocket costs, rural access)
8. Wait times and service delivery
9. Recent reforms or developments (November 2025)
10. Future outlook

Write as Gawande - analytical, systems-focused, evidence-driven. Include specific metrics.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''

  console.log(`✅ Generated summary for ${countryName} (${summary.length} characters)`)
  return summary
}

async function saveHealthcareSummary(
  name: string,
  lat: number,
  lng: number,
  summary: string
) {
  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: name,
        type: 'country',
        category: 'healthcare',
      },
    },
    update: {
      summary,
      issues: JSON.stringify([]),
      topStories: JSON.stringify([]),
      storyCount: 0,
      updatedAt: new Date(),
    },
    create: {
      name: name,
      type: 'country',
      country: name,
      lat: lat,
      lng: lng,
      category: 'healthcare',
      summary,
      issues: JSON.stringify([]),
      topStories: JSON.stringify([]),
      storyCount: 0,
    },
  })

  console.log(`💾 Saved healthcare summary for ${name}`)
}

async function main() {
  console.log('🚀 Generating HEALTHCARE summaries - Batch 9 of 10')
  console.log('📝 Voice: Atul Gawande - clear, systems-focused, evidence-based')
  console.log(`📊 Countries to process: ${countries.length}\n`)

  const results: { name: string; chars: number }[] = []

  for (const country of countries) {
    try {
      const summary = await generateHealthcareSummary(country.name)
      await saveHealthcareSummary(country.name, country.lat, country.lng, summary)

      results.push({ name: country.name, chars: summary.length })

      // Rate limiting - wait 2 seconds between API calls
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Error processing ${country.name}:`, error)
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ BATCH 9 COMPLETE - Healthcare Summaries Generated')
  console.log('='.repeat(80))
  console.log('\nSUMMARY REPORT:')
  results.forEach((r, i) => {
    console.log(`${i + 1}. ${r.name}: ${r.chars} characters`)
  })
  console.log(`\nTotal: ${results.length} countries processed`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
