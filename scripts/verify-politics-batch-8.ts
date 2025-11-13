import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = [
  'Qatar',
  'Russia',
  'Rwanda',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Somalia',
  'South Africa',
  'South Korea'
]

async function verifyPoliticsSummaries() {
  console.log('Verifying Politics summaries for Batch 8...\n')

  for (const countryName of COUNTRIES) {
    try {
      const summary = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: countryName,
            type: 'country',
            category: 'politics'
          }
        }
      })

      if (summary) {
        const issues = JSON.parse(summary.issues)
        const stories = JSON.parse(summary.topStories)

        console.log(`✅ ${countryName}`)
        console.log(`   Category: ${summary.category}`)
        console.log(`   Summary: ${summary.summary.length} characters`)
        console.log(`   Issues: ${issues.length}`)
        console.log(`   Stories: ${stories.length}`)
        console.log(`   Updated: ${summary.updatedAt.toISOString()}`)
        console.log()
      } else {
        console.log(`❌ ${countryName} - NOT FOUND`)
        console.log()
      }
    } catch (error) {
      console.error(`❌ Error checking ${countryName}:`, error)
    }
  }

  // Get total count
  const total = await prisma.locationSummary.count({
    where: {
      category: 'politics',
      type: 'country'
    }
  })

  console.log(`\nTotal Politics summaries in database: ${total}`)
}

verifyPoliticsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
