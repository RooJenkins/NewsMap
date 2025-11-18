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
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Armenia', lat: 40.0691, lng: 45.0382 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Azerbaijan', lat: 40.1431, lng: 47.5769 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Belarus', lat: 53.7098, lng: 27.9534 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Bhutan', lat: 27.5142, lng: 90.4336 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Bosnia and Herzegovina', lat: 43.9159, lng: 17.6791 },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Brunei', lat: 4.5353, lng: 114.7277 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Burundi', lat: -3.3731, lng: 29.9189 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'Cameroon', lat: 7.3697, lng: 12.3547 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Central African Republic', lat: 6.6111, lng: 20.9394 },
  { name: 'Chad', lat: 15.4542, lng: 18.7322 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
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
  console.log('⚡ Generating Energy Batch 1 (30 countries)...\n')

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
  console.log('✨ ENERGY BATCH 1 COMPLETE!')
  console.log('='.repeat(70))
  console.log(`   Successful: ${successful}/${COUNTRIES.length}`)
  console.log(`   Failed: ${failed}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
