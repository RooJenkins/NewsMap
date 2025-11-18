import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyCultureSummaries() {
  console.log('Verifying Culture & Arts summaries for countries 118-128...\n')

  const countries = [
    'Singapore', 'Slovakia', 'Slovenia', 'Somalia', 'South Africa',
    'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname'
  ]

  for (const countryName of countries) {
    const summary = await prisma.locationSummary.findFirst({
      where: {
        name: countryName,
        type: 'country',
        category: 'culture'
      }
    })

    if (summary) {
      console.log(`✅ ${countryName}`)
      console.log(`   Category: ${summary.category}`)
      console.log(`   Summary length: ${summary.summary.length} characters`)
      const issues = JSON.parse(summary.issues)
      console.log(`   Issues: ${issues.length}`)
      console.log(`   First issue: ${issues[0]}`)
      console.log(`   Preview: ${summary.summary.substring(0, 150)}...\n`)
    } else {
      console.log(`❌ ${countryName} - NOT FOUND\n`)
    }
  }
}

verifyCultureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
