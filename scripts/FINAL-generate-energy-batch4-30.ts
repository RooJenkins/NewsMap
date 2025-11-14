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
  { name: 'Malawi', lat: -13.2543, lng: 34.3015 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Mali', lat: 17.5707, lng: -3.9962 },
  { name: 'Mauritania', lat: 21.0079, lng: -10.9408 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Moldova', lat: 47.4116, lng: 28.3699 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Montenegro', lat: 42.7087, lng: 19.3744 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Namibia', lat: -22.9576, lng: 18.4904 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'New Caledonia', lat: -20.9043, lng: 165.6180 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Niger', lat: 17.6078, lng: 8.0817 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'North Macedonia', lat: 41.6086, lng: 21.7453 },
  { name: 'Northern Cyprus', lat: 35.1856, lng: 33.3823 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Oman', lat: 21.4735, lng: 55.9754 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
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
  console.log('⚡ Generating Energy Batch 4 (30 countries)...\n')

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
  console.log('✨ ENERGY BATCH 4 COMPLETE!')
  console.log('='.repeat(70))
  console.log(`   Successful: ${successful}/${COUNTRIES.length}`)
  console.log(`   Failed: ${failed}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
