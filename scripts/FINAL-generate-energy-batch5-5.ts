import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const STYLE_GUIDE = `# Energy Style Guide

Write in the style of **Daniel Yergin** (energy historian and analyst):
- Strategic, big-picture analysis of energy systems
- Historical context and future trajectory
- Geopolitical and economic implications
- Balance between fossil fuels and renewables transition
- Data-driven but accessible

## Content Focus (2,500-3,500 characters):
- **Energy mix**: Breakdown of energy sources (fossil fuels, nuclear, renewables)
- **Major energy resources**: Oil, gas, coal reserves, renewable potential
- **Energy independence/dependence**: Import/export dynamics, strategic vulnerabilities
- **Power grid infrastructure**: Electricity generation, transmission, reliability
- **Energy prices**: Consumer and industrial energy costs, subsidies, market dynamics
- **Future energy strategy**: Government plans, investment trends, transition policies
- **Climate implications**: Emissions, targets, renewable energy commitments`

const COUNTRIES = [
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Puerto Rico', lat: 18.2208, lng: -66.5901 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
]

async function generateEnergySummary(countryName: string): Promise<string> {
  const prompt = `Write an Energy summary for ${countryName}.

${STYLE_GUIDE}

Requirements:
- Length: 2,500-3,500 characters
- Write in Daniel Yergin style: strategic, historical context, geopolitical
- Cover: energy mix, resources, independence, infrastructure, prices, strategy, climate
- Be specific with data, projects, and strategic considerations
- Professional and analytical tone

Write ONLY the summary text, no title or headers.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }]
  })

  const content = message.content[0]
  if (content.type === 'text') {
    return content.text
  }
  throw new Error('Unexpected response type')
}

async function main() {
  console.log('⚡ Generating Energy Batch 5 (FINAL 5 countries)...\n')

  let successful = 0
  let failed = 0

  for (const country of COUNTRIES) {
    try {
      console.log(`\n${'='.repeat(70)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(70))

      const summary = await generateEnergySummary(country.name)

      console.log(`Generated ${summary.length} characters`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'energy'
          }
        },
        update: {
          summary,
          issues: '[]',
          topStories: '[]',
          storyCount: 0,
          updatedAt: new Date()
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'energy',
          summary,
          issues: '[]',
          topStories: '[]',
          storyCount: 0
        }
      })

      successful++
      console.log(`✅ Successfully saved energy writeup for ${country.name}`)

    } catch (error) {
      failed++
      console.error(`❌ Failed to process ${country.name}:`, error)
    }
  }

  console.log(`\n${'='.repeat(70)}`)
  console.log('✨ ENERGY BATCH 5 COMPLETE!')
  console.log('='.repeat(70))
  console.log(`   Successful: ${successful}/${COUNTRIES.length}`)
  console.log(`   Failed: ${failed}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
