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
  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: writeup.name,
        type: 'country',
        category: 'technology'
      }
    },
    create: {
      name: writeup.name,
      type: 'country',
      country: writeup.name,
      lat: writeup.lat,
      lng: writeup.lng,
      category: 'technology',
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
}

async function main() {
  const writeups: Writeup[] = process.env.WRITEUPS_JSON
    ? JSON.parse(process.env.WRITEUPS_JSON)
    : []

  console.log(`\n📱 Saving ${writeups.length} Technology writeups to database...\n`)

  let completed = 0

  for (const writeup of writeups) {
    try {
      await saveWriteup(writeup)
      completed++
      console.log(`✅ ${completed}. ${writeup.name} (${writeup.summary.length} chars)`)
    } catch (error) {
      console.error(`❌ Error saving ${writeup.name}:`, error)
    }
  }

  // Show overall progress
  const total = await prisma.locationSummary.count({
    where: {
      type: 'country',
      category: 'technology'
    }
  })

  console.log(`\n📊 PROGRESS: ${total}/114 Technology writeups completed\n`)

  await prisma.$disconnect()
}

main().catch(console.error)
