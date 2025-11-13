import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const BATCH2_COUNTRIES = [
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Bulgaria',
  'Burkina Faso',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Chile',
  'China',
  'Colombia',
  'Costa Rica',
  'Croatia'
]

async function verifyTechnologyBatch2() {
  console.log('Verifying TECHNOLOGY write-ups for Batch 2...\n')

  let found = 0
  let missing = 0

  for (const country of BATCH2_COUNTRIES) {
    try {
      const writeup = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country,
            type: 'country',
            category: 'technology'
          }
        }
      })

      if (writeup) {
        found++
        const issues = JSON.parse(writeup.issues as string)
        console.log(`✓ ${country}`)
        console.log(`  - Summary: ${writeup.summary.length} characters`)
        console.log(`  - Issues: ${issues.length} items`)
        console.log(`  - Updated: ${writeup.updatedAt.toISOString()}`)
        console.log()
      } else {
        missing++
        console.log(`✗ ${country} - NOT FOUND`)
        console.log()
      }
    } catch (error) {
      missing++
      console.error(`✗ ${country} - ERROR:`, error)
      console.log()
    }
  }

  console.log('='.repeat(60))
  console.log('VERIFICATION SUMMARY')
  console.log('='.repeat(60))
  console.log(`   Found: ${found}/${BATCH2_COUNTRIES.length}`)
  console.log(`   Missing: ${missing}/${BATCH2_COUNTRIES.length}`)
  console.log('='.repeat(60))

  if (found === BATCH2_COUNTRIES.length) {
    console.log('\n✓ SUCCESS: All Batch 2 technology writeups are in the database!')
  } else {
    console.log(`\n✗ INCOMPLETE: ${missing} writeup(s) missing`)
  }
}

verifyTechnologyBatch2()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
