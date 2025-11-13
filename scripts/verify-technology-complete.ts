// VERIFY TECHNOLOGY CATEGORY - ALL 128 COUNTRIES
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 VERIFYING TECHNOLOGY CATEGORY COMPLETION\n')

  const technologyWriteups = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'technology'
    },
    select: {
      name: true,
      summary: true
    },
    orderBy: {
      name: 'asc'
    }
  })

  console.log(`Total Technology Writeups: ${technologyWriteups.length}`)
  console.log(`Expected: 128 countries\n`)

  if (technologyWriteups.length === 128) {
    console.log('✅ TECHNOLOGY COMPLETE - ALL 128 COUNTRIES!')
  } else {
    console.log(`⚠️  Missing ${128 - technologyWriteups.length} countries`)
  }

  console.log('\n📋 All countries with Technology writeups:\n')
  technologyWriteups.forEach((w, idx) => {
    const summaryLength = w.summary.length
    console.log(`${(idx + 1).toString().padStart(3)}. ${w.name.padEnd(25)} (${summaryLength} chars)`)
  })

  // Character length stats
  const lengths = technologyWriteups.map(w => w.summary.length)
  const avgLength = Math.round(lengths.reduce((a, b) => a + b, 0) / lengths.length)
  const minLength = Math.min(...lengths)
  const maxLength = Math.max(...lengths)

  console.log('\n📊 Summary Statistics:')
  console.log(`Average length: ${avgLength} characters`)
  console.log(`Min length: ${minLength} characters`)
  console.log(`Max length: ${maxLength} characters`)
  console.log(`Target range: 2,500-3,500 characters`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
