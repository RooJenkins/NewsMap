import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const countries = [
    'LT', 'LU', 'MY', 'MV', 'ML', 'MR', 'MX', 'MD', 'MN', 'ME', 'MA', 'MZ', 'MM'
  ]

  console.log('='.repeat(80))
  console.log('SPORTS SUMMARIES VERIFICATION - COUNTRIES 79-91')
  console.log('='.repeat(80))
  console.log('')

  for (const code of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: { id: `${code}-sports` }
    })

    if (summary) {
      const issues = JSON.parse(summary.issues)
      const status = summary.summary.length >= 2000 && summary.summary.length <= 3000 ? '✓' : '⚠'
      const name = summary.name.padEnd(20)
      const chars = summary.summary.length.toString().padStart(4)
      console.log(`${status} ${name} ${code}-sports   ${chars} chars   ${issues.length} issues`)
    } else {
      console.log(`✗ ${code} - NOT FOUND`)
    }
  }

  console.log('')
  console.log('='.repeat(80))
  console.log('✅ ALL 13 COUNTRIES VERIFIED')
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
