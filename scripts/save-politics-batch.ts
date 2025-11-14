import { PrismaClient } from '@prisma/client'
import { ALL_COUNTRIES } from './generation-helpers.js'

const prisma = new PrismaClient()

// Writeups will be passed as a parameter
type Writeup = {
  summary: string
  issues: string[]
}

async function saveBatch(writeups: Record<string, Writeup>) {
  let saved = 0
  let skipped = 0
  let errors = 0

  for (const [countryName, writeup] of Object.entries(writeups)) {
    const country = ALL_COUNTRIES.find(c => c.name === countryName)

    if (!country) {
      console.log(`⚠️  ${countryName} not found in ALL_COUNTRIES`)
      errors++
      continue
    }

    try {
      // Check if exists
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'politics'
          }
        }
      })

      if (existing) {
        console.log(`⊘ ${country.name} - already exists, skipping`)
        skipped++
        continue
      }

      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'politics',
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      console.log(`✓ ${country.name} saved successfully`)
      saved++
    } catch (error: any) {
      console.error(`✗ Error saving ${country.name}:`, error.message)
      errors++
    }
  }

  console.log(`\n📊 Batch Complete: ${saved} saved, ${skipped} skipped, ${errors} errors`)
  await prisma.$disconnect()
}

export { saveBatch }
