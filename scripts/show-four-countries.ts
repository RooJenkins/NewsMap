import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function showFourCountries() {
  const countries = [
    'Democratic Republic of Congo',
    'Dominican Republic',
    'Ecuador',
    'Egypt'
  ]

  console.log('=== REST IS POLITICS SUMMARIES ===\n')

  for (const countryName of countries) {
    const location = await prisma.locationSummary.findFirst({
      where: {
        name: countryName,
        type: 'country'
      }
    })

    if (location) {
      console.log(`\n${'='.repeat(60)}`)
      console.log(`Country: ${location.name}`)
      console.log(`${'='.repeat(60)}`)

      const issues = JSON.parse(location.issues)
      console.log(`\nShort Summary (Tooltip):`)
      const shortSummaries: { [key: string]: string } = {
        'Democratic Republic of Congo': 'M23 entrenchment, peace talks, political repression',
        'Dominican Republic': 'Growth slowdown, fiscal reform deadlock, tourism push',
        'Ecuador': 'Nov 16 referendum, crime surge, democratic backsliding',
        'Egypt': 'Parliamentary elections, economic crisis, Gaza mediation'
      }
      console.log(`  "${shortSummaries[location.name]}"`)

      console.log(`\nMajor Issues:`)
      issues.forEach((issue: string, i: number) => {
        console.log(`  ${i + 1}. ${issue}`)
      })

      console.log(`\nFull Summary Preview (first 500 chars):`)
      console.log(location.summary.substring(0, 500) + '...')
    } else {
      console.log(`\n❌ ${countryName} not found in database`)
    }
  }

  await prisma.$disconnect()
}

showFourCountries().catch(console.error)
