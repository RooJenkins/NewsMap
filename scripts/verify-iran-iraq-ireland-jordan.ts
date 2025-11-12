import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyCountries() {
  const countries = ['Iran', 'Iraq', 'Ireland', 'Jordan']

  console.log('=== VERIFYING IRAN, IRAQ, IRELAND, JORDAN ===\n')

  for (const countryName of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type: {
          name: countryName,
          type: 'country'
        }
      }
    })

    if (summary) {
      console.log(`✅ ${countryName} - FOUND`)
      console.log(`   Stories: ${summary.storyCount}`)
      console.log(`   Updated: ${summary.updatedAt.toISOString()}`)

      const issues = JSON.parse(summary.issues)
      console.log(`   Issues (${issues.length}):`)
      issues.forEach((issue: string, i: number) => {
        console.log(`     ${i + 1}. ${issue}`)
      })
      console.log()
    } else {
      console.log(`❌ ${countryName} - NOT FOUND\n`)
    }
  }
}

verifyCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
