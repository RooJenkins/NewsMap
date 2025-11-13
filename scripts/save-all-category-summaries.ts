import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { ENTERTAINMENT_AMERICAS } from '../data/entertainment-americas-complete'
import { ENTERTAINMENT_EUROPE } from '../data/entertainment-europe'
import { ENTERTAINMENT_EUROPE_PART2 } from '../data/entertainment-europe-part2'
import { ENTERTAINMENT_ASIA } from '../data/entertainment-asia'
import { ENTERTAINMENT_REST } from '../data/entertainment-rest-of-world'
import { LIFESTYLE_ALL } from '../data/lifestyle-all-countries'

const prisma = new PrismaClient()

// Combine all entertainment summaries
const ALL_ENTERTAINMENT = [
  ...ENTERTAINMENT_AMERICAS,
  ...ENTERTAINMENT_EUROPE,
  ...ENTERTAINMENT_EUROPE_PART2,
  ...ENTERTAINMENT_ASIA,
  ...ENTERTAINMENT_REST
]

async function saveAllSummaries() {
  console.log(`\n🚀 Saving Entertainment and Lifestyle summaries for 114 countries...\n`)

  let successCount = 0
  let errorCount = 0
  const errors: string[] = []

  // Save Entertainment summaries
  console.log(`📺 Processing ${ALL_ENTERTAINMENT.length} Entertainment summaries...\n`)
  for (const country of ALL_ENTERTAINMENT) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'entertainment',
          },
        },
        update: {
          summary: country.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'entertainment',
          summary: country.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ ${country.name} - entertainment`)
      successCount++
    } catch (error) {
      console.error(`❌ Failed: ${country.name} - entertainment`)
      errors.push(`${country.name} - entertainment: ${error}`)
      errorCount++
    }
  }

  // Save Lifestyle summaries
  console.log(`\n🏃 Processing ${LIFESTYLE_ALL.length} Lifestyle summaries...\n`)
  for (const country of LIFESTYLE_ALL) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'lifestyle',
          },
        },
        update: {
          summary: country.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'lifestyle',
          summary: country.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ ${country.name} - lifestyle`)
      successCount++
    } catch (error) {
      console.error(`❌ Failed: ${country.name} - lifestyle`)
      errors.push(`${country.name} - lifestyle: ${error}`)
      errorCount++
    }
  }

  console.log(`\n${'='.repeat(80)}`)
  console.log(`✅ COMPLETE!`)
  console.log(`   Success: ${successCount} summaries`)
  console.log(`   Errors: ${errorCount}`)
  console.log(`   Entertainment: ${ALL_ENTERTAINMENT.length} countries`)
  console.log(`   Lifestyle: ${LIFESTYLE_ALL.length} countries`)
  console.log(`   Total: ${successCount} of ${ALL_ENTERTAINMENT.length + LIFESTYLE_ALL.length} summaries saved`)
  console.log(`${'='.repeat(80)}`)

  if (errors.length > 0) {
    console.log(`\n❌ Errors encountered:`)
    errors.forEach(err => console.log(`   - ${err}`))
  }
}

saveAllSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
