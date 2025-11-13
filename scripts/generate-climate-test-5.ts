import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Test with just 5 countries
const LOCATIONS = [
  { name: 'United States', type: 'country' as const, lat: 37.0902, lng: -95.7129, country: 'United States' },
  { name: 'Canada', type: 'country' as const, lat: 56.1304, lng: -106.3468, country: 'Canada' },
  { name: 'Brazil', type: 'country' as const, lat: -14.2350, lng: -51.9253, country: 'Brazil' },
  { name: 'Germany', type: 'country' as const, lat: 51.1657, lng: 10.4515, country: 'Germany' },
  { name: 'Australia', type: 'country' as const, lat: -25.2744, lng: 133.7751, country: 'Australia' },
]

async function generateClimateSummary(location: typeof LOCATIONS[0]): Promise<{ summary: string; issues: string; topStories: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not found')

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a CLIMATE & ENVIRONMENT write-up in the style of David Attenborough and Bill McKibben.

CATEGORY: Climate & Environment
VOICE: David Attenborough / Bill McKibben - Urgent but not alarmist
LENGTH: 2,500-3,500 characters

Write a comprehensive Climate & Environment summary for ${location.name}.

Focus on:
- Climate vulnerability and recent disasters
- Renewable energy adoption and targets
- Deforestation, biodiversity, protected areas
- Environmental regulations and enforcement
- Carbon emissions trajectory
- Water security and resource management

Requirements:
- 2,500-3,500 characters
- Vivid nature writing
- Specific numbers and data
- Urgent but not apocalyptic
- Real November 2025 context

Generate the write-up now:`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }]
  })

  const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

  return {
    summary: summaryText,
    issues: JSON.stringify(['Climate change', 'Renewable energy', 'Biodiversity', 'Water security']),
    topStories: JSON.stringify([])
  }
}

async function main() {
  console.log('Testing climate generation with 5 countries...\n')

  for (const location of LOCATIONS) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(60))

    try {
      console.log(`Generating summary...`)
      const { summary, issues, topStories } = await generateClimateSummary(location)

      console.log(`✓ Generated (${summary.length} characters)`)
      console.log(`Preview: ${summary.substring(0, 150)}...`)

      console.log(`Saving to database...`)
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'climate'
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          category: 'climate',
          summary,
          issues,
          topStories,
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          updatedAt: new Date()
        }
      })

      console.log(`✓ Saved to database`)

      await new Promise(resolve => setTimeout(resolve, 2000))

    } catch (error) {
      console.error(`✗ Error:`, error)
    }
  }

  const count = await prisma.locationSummary.count({ where: { category: 'climate' } })
  console.log(`\n\nTotal climate summaries in database: ${count}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
