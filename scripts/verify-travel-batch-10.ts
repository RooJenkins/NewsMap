import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const countries = [
  'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay',
  'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar'
]

async function main() {
  console.log('🔍 Verifying Travel Batch 10 writeups in database...\n')

  for (const country of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'travel',
        },
      },
      select: {
        name: true,
        category: true,
        summary: true,
        updatedAt: true,
      },
    })

    if (summary) {
      console.log(`✅ ${country}`)
      console.log(`   Category: ${summary.category}`)
      console.log(`   Length: ${summary.summary.length} characters`)
      console.log(`   Updated: ${summary.updatedAt.toISOString()}`)
      console.log()
    } else {
      console.log(`❌ ${country} - NOT FOUND`)
    }
  }

  console.log('✅ Verification complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
