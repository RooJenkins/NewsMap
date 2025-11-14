import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Writeup {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

async function saveWriteup(writeup: Writeup) {
  try {
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: writeup.name,
          type: 'country',
          category: 'healthcare'
        }
      },
      create: {
        name: writeup.name,
        type: 'country',
        country: writeup.name,
        lat: writeup.lat,
        lng: writeup.lng,
        category: 'healthcare',
        summary: writeup.summary,
        issues: JSON.stringify(writeup.issues),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: writeup.summary,
        issues: JSON.stringify(writeup.issues),
        updatedAt: new Date()
      }
    })
    console.log(`✓ ${writeup.name} saved (${writeup.summary.length} chars)`)
  } catch (error) {
    console.error(`✗ Error saving ${writeup.name}:`, error)
    throw error
  }
}

// Read writeup from stdin as JSON
const input = JSON.parse(require('fs').readFileSync(0, 'utf-8'))
saveWriteup(input)
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
