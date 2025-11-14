import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

interface LifestyleWriteup {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

async function loadWriteups() {
  const writeupFiles = [
    'lifestyle-batch-1.json',
    'lifestyle-batch-2.json',
    'lifestyle-batch-3-to-25.json',
    'lifestyle-batch-4-remaining-americas.json',
    'lifestyle-americas-complete.json',
    'lifestyle-batch-to-25.json',
    'lifestyle-batch-11-to-25.json',
    'lifestyle-complete-all-114.json',
    'lifestyle-all-remaining.json'
  ]

  let totalLoaded = 0
  let totalSkipped = 0

  for (const filename of writeupFiles) {
    const filepath = path.join(process.cwd(), filename)

    if (!fs.existsSync(filepath)) {
      console.log(`⏭️  ${filename} not found, skipping`)
      continue
    }

    console.log(`\n📁 Processing ${filename}...`)

    const writeups: LifestyleWriteup[] = JSON.parse(fs.readFileSync(filepath, 'utf-8'))

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
          console.log(`  ⏭️  ${writeup.name} - already exists`)
          totalSkipped++
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

        totalLoaded++
        console.log(`  ✅ ${writeup.name} - loaded successfully`)
      } catch (error) {
        console.error(`  ❌ ${writeup.name} - error:`, error)
      }
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`✅ Loading complete!`)
  console.log(`   Loaded: ${totalLoaded}`)
  console.log(`   Skipped: ${totalSkipped}`)
  console.log(`${'='.repeat(60)}`)

  // Check total count
  const count = await prisma.locationSummary.count({
    where: {
      type: 'country',
      category: 'lifestyle'
    }
  })

  console.log(`\n📊 Total Lifestyle writeups in database: ${count}/114`)
}

loadWriteups()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
