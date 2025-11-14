import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface LifestyleWriteup {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

async function saveLifestyleBatch(writeups: LifestyleWriteup[]) {
  let saved = 0
  let skipped = 0

  for (const writeup of writeups) {
    try {
      // Check if already exists
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'lifestyle'
          }
        }
      })

      if (existing) {
        console.log(`  ⏭️  ${writeup.name} already exists - skipping`)
        skipped++
        continue
      }

      await prisma.locationSummary.create({
        data: {
          name: writeup.name,
          type: 'country',
          country: writeup.name,
          lat: writeup.lat,
          lng: writeup.lng,
          category: 'lifestyle',
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      saved++
      console.log(`  ✅ ${writeup.name} saved`)
    } catch (error) {
      console.error(`  ❌ ${writeup.name} failed:`, error)
    }
  }

  console.log(`\n📊 Batch complete: ${saved} saved, ${skipped} skipped\n`)
}

// Read writeups from stdin
const input = require('fs').readFileSync(0, 'utf-8')
const writeups = JSON.parse(input)

saveLifestyleBatch(writeups)
  .catch(console.error)
  .finally(() => prisma.$disconnect())
