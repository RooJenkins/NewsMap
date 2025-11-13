import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const BATCH3_COUNTRIES = [
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Democratic Republic of Congo',
  'Denmark',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland'
]

async function verify() {
  console.log('🔍 Verifying Politics write-ups for Batch 3...\n')

  for (const country of BATCH3_COUNTRIES) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'politics'
        }
      }
    })

    if (summary) {
      console.log(`✅ ${country}`)
      console.log(`   Summary: ${summary.summary.substring(0, 100)}...`)
      console.log(`   Length: ${summary.summary.length} characters`)
      console.log(`   Issues: ${JSON.parse(summary.issues).length}`)
      console.log(`   Stories: ${JSON.parse(summary.topStories).length}`)
      console.log('')
    } else {
      console.log(`❌ ${country} - NOT FOUND`)
    }
  }

  console.log('\n✅ Verification complete!')
}

verify()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
