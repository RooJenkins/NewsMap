import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

interface EconomyWriteup {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

async function main() {
  const batchFile = process.argv[2]

  if (!batchFile) {
    console.error('Usage: ts-node save-economy-batch.ts <batch-file.json>')
    process.exit(1)
  }

  const writeups: EconomyWriteup[] = JSON.parse(fs.readFileSync(batchFile, 'utf-8'))

  console.log(`\n💰 Saving ${writeups.length} ECONOMY writeups to database...\n`)

  let saved = 0
  let failed = 0

  for (const writeup of writeups) {
    try {
      console.log(`Processing: ${writeup.name}`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'economy'
          }
        },
        update: {
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        create: {
          name: writeup.name,
          type: 'country',
          country: writeup.name,
          lat: writeup.lat,
          lng: writeup.lng,
          category: 'economy',
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${writeup.name}: Saved (${writeup.summary.length} chars, ${writeup.issues.length} issues)`)
      saved++
    } catch (error) {
      console.error(`❌ ${writeup.name}: Failed - ${error}`)
      failed++
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`✅ Saved: ${saved} writeups`)
  console.log(`❌ Failed: ${failed} writeups`)
  console.log('='.repeat(60))
}

main()
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
