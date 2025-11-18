import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 Verifying sports summaries for countries 105-117\n')

  const countries = ['PG', 'PY', 'PE', 'PH', 'PL', 'PT', 'QA', 'RO', 'RU', 'RW', 'SA', 'SN', 'RS']
  const names = ['Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Senegal', 'Serbia']

  for (let i = 0; i < countries.length; i++) {
    const summary = await prisma.locationSummary.findFirst({
      where: {
        country: countries[i],
        category: 'sports'
      }
    })

    if (summary) {
      const issues = JSON.parse(summary.issues)
      console.log(`✅ ${names[i]} (${countries[i]})`)
      console.log(`   - ID: ${summary.id}`)
      console.log(`   - Summary: ${summary.summary.length} characters`)
      console.log(`   - Issues: ${issues.length} items`)
      console.log(`   - First 100 chars: "${summary.summary.substring(0, 100)}..."`)
      console.log()
    } else {
      console.log(`❌ ${names[i]} (${countries[i]}) - NOT FOUND`)
      console.log()
    }
  }

  console.log('\n📊 Summary Statistics:')
  const allSummaries = await prisma.locationSummary.findMany({
    where: {
      country: { in: countries },
      category: 'sports'
    }
  })

  console.log(`Total summaries: ${allSummaries.length}/13`)
  console.log(`\nCharacter counts:`)
  allSummaries.forEach(s => {
    const inRange = s.summary.length >= 2000 && s.summary.length <= 3000
    const status = inRange ? '✅' : (s.summary.length < 2000 ? '⚠️  SHORT' : '⚠️  LONG')
    console.log(`${status} ${s.name}: ${s.summary.length} characters`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
