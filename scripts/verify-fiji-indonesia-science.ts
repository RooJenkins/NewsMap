import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const countries = [
    'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Ghana',
    'Greece', 'Guatemala', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Indonesia'
  ]

  console.log('✅ Verified science summaries in database:\n')

  for (const country of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'science'
        }
      },
      select: {
        name: true,
        category: true,
        updatedAt: true,
        summary: true,
        issues: true
      }
    })

    if (summary) {
      const issues = JSON.parse(summary.issues)
      console.log(`   ✓ ${summary.name} - ${summary.summary.length} chars, ${issues.length} issues`)
    } else {
      console.log(`   ✗ ${country} - NOT FOUND`)
    }
  }

  console.log(`\n📊 Total: ${countries.length} countries processed`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
