import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

interface CountryData {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

interface SummariesData {
  countries: CountryData[]
}

async function insertPoliticsSummaries() {
  console.log('Inserting POLITICS summaries for Batch 9...\n')

  // Read the JSON file
  const jsonPath = path.join(process.cwd(), 'politics-batch9-summaries.json')
  const data: SummariesData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

  let inserted = 0
  let updated = 0
  let failed = 0

  for (const country of data.countries) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`Processing: ${country.name} - POLITICS`)
    console.log('='.repeat(60))

    try {
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'politics'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'politics',
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          updatedAt: new Date()
        }
      })

      if (result.createdAt.getTime() === result.updatedAt.getTime()) {
        inserted++
        console.log(`  ✓ Created new POLITICS entry`)
      } else {
        updated++
        console.log(`  ✓ Updated existing POLITICS entry`)
      }

      console.log(`  Character count: ${country.summary.length}`)
      console.log(`  Issues: ${country.issues.join(', ')}`)

      // Show preview
      const previewLines = country.summary.split('\n').slice(0, 3)
      console.log(`\n  Preview:`)
      previewLines.forEach(line => console.log(`    ${line.substring(0, 100)}${line.length > 100 ? '...' : ''}`))

    } catch (error) {
      console.error(`  ✗ Failed:`, error)
      failed++
    }
  }

  console.log(`\n\n${'='.repeat(60)}`)
  console.log(`BATCH 9 POLITICS INSERTION COMPLETE`)
  console.log('='.repeat(60))
  console.log(`   Inserted: ${inserted} new entries`)
  console.log(`   Updated: ${updated} existing entries`)
  console.log(`   Failed: ${failed} entries`)
  console.log('='.repeat(60))
}

insertPoliticsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
