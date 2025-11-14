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
  { name: 'Guyana', lat: 4.8604, lng: -58.9302 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Iceland', lat: 64.9631, lng: -19.0208 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Ivory Coast', lat: 7.5400, lng: -5.5471 },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kosovo', lat: 42.6026, lng: 20.9030 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Kyrgyzstan', lat: 41.2044, lng: 74.7661 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Lesotho', lat: -29.6100, lng: 28.2336 },
  { name: 'Liberia', lat: 6.4281, lng: -9.4295 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Luxembourg', lat: 49.8153, lng: 6.1296 },
  { name: 'Madagascar', lat: -18.7669, lng: 46.8691 },
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
  console.log('⚡ Generating Energy Batch 3 (30 countries)...\n')

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
  console.log('✨ ENERGY BATCH 3 COMPLETE!')
  console.log('='.repeat(70)}')
  console.log(`   Successful: ${successful}/${COUNTRIES.length}`)
  console.log(`   Failed: ${failed}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
