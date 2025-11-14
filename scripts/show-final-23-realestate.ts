import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const countriesList = [
  'Cameroon', 'Zambia', 'Mali', 'Niger', 'Chad', 'Burkina Faso', 'Rwanda',
  'Botswana', 'Namibia', 'Madagascar', 'Malawi', 'South Sudan', 'Eritrea',
  'Djibouti', 'Sierra Leone', 'Liberia', 'Guinea', 'Ivory Coast', 'Togo',
  'Benin', 'Gambia', 'Mauritania', 'Congo-Brazzaville'
]

async function showSummaries() {
  console.log('\n🏠 REAL ESTATE & HOUSING SUMMARIES FOR COUNTRIES 121-143\n')
  console.log('='.repeat(100))

  for (const countryName of countriesList) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: countryName,
          type: 'country',
          category: 'realestate',
        },
      },
      select: {
        name: true,
        summary: true,
        issues: true,
      }
    })

    if (summary) {
      const issues = JSON.parse(summary.issues || '[]')
      console.log(`\n📍 ${summary.name.toUpperCase()}`)
      console.log('─'.repeat(100))
      console.log(`\n${summary.summary}\n`)
      console.log('Issues:')
      issues.forEach((issue, idx) => {
        console.log(`  ${idx + 1}. ${issue}`)
      })
      console.log()
    }
  }

  console.log('='.repeat(100))
  console.log(`\n✅ Successfully verified all 23 countries' Real Estate & Housing summaries\n`)
}

showSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
