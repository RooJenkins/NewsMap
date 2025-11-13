import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const philippines = await prisma.locationSummary.findFirst({
    where: {
      name: 'Philippines',
      type: 'country'
    }
  })

  if (philippines) {
    console.log('\n✅ Philippines summary found in database!')
    console.log('\nID:', philippines.id)
    console.log('Name:', philippines.name)
    console.log('Type:', philippines.type)
    console.log('Country:', philippines.country)
    console.log('Coordinates:', philippines.lat, philippines.lng)
    console.log('Category:', philippines.category)
    console.log('Summary length:', philippines.summary.length, 'characters')
    console.log('Created:', philippines.createdAt)
    console.log('Updated:', philippines.updatedAt)
    console.log('\nIssues:')
    const issues = JSON.parse(philippines.issues)
    issues.forEach((issue: string, i: number) => {
      console.log(`  ${i + 1}. ${issue}`)
    })
    console.log('\nFirst 500 characters of summary:')
    console.log(philippines.summary.substring(0, 500) + '...')
  } else {
    console.log('❌ Philippines summary not found in database')
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
