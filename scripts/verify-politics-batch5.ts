import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyPoliticsSummaries() {
  const countries = [
    'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kuwait', 'Laos', 'Latvia',
    'Lebanon', 'Libya', 'Lithuania'
  ]

  console.log('Verifying Politics summaries for Batch 5...\n')

  for (const country of countries) {
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
      console.log(`✅ ${country}:`)
      console.log(`   Summary: ${summary.summary.length} characters`)
      console.log(`   Issues: ${JSON.parse(summary.issues).length}`)
      console.log(`   Stories: ${JSON.parse(summary.topStories).length}`)
      console.log(`   Updated: ${summary.updatedAt}`)
    } else {
      console.log(`❌ ${country}: NOT FOUND`)
    }
    console.log()
  }
}

verifyPoliticsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
