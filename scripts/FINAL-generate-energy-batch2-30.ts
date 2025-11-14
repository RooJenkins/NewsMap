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
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Cyprus', lat: 35.1264, lng: 33.4299 },
  { name: 'Czechia', lat: 49.8175, lng: 15.4730 },
  { name: 'Democratic Republic of the Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Djibouti', lat: 11.8251, lng: 42.5903 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'East Timor', lat: -8.8742, lng: 125.7275 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Equatorial Guinea', lat: 1.6508, lng: 10.2679 },
  { name: 'Eritrea', lat: 15.1794, lng: 39.7823 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Falkland Islands', lat: -51.7963, lng: -59.5236 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'French Southern and Antarctic Lands', lat: -49.2804, lng: 69.3486 },
  { name: 'Gabon', lat: -0.8037, lng: 11.6094 },
  { name: 'Gambia', lat: 13.4432, lng: -15.3101 },
  { name: 'Georgia', lat: 42.3154, lng: 43.3569 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Greenland', lat: 71.7069, lng: -42.6043 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Guinea', lat: 9.9456, lng: -9.6966 },
  { name: 'Guinea-Bissau', lat: 11.8037, lng: -15.1804 },
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
  console.log('⚡ Generating Energy Batch 2 (30 countries)...\n')

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
  console.log('✨ ENERGY BATCH 2 COMPLETE!')
  console.log('='.repeat(70))
  console.log(`   Successful: ${successful}/${COUNTRIES.length}`)
  console.log(`   Failed: ${failed}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
