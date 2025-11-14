import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function showSamples() {
  const countries = ['Japan', 'Germany', 'South Africa']

  for (const countryName of countries) {
    const writeup = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: countryName,
          type: 'country',
          category: 'economy'
        }
      }
    })

    if (writeup) {
      const issues = JSON.parse(writeup.issues)
      console.log(`\n${'='.repeat(60)}`)
      console.log(`${countryName.toUpperCase()} - ECONOMY & BUSINESS`)
      console.log('='.repeat(60))
      console.log(writeup.summary.substring(0, 900))
      console.log(`\n[...continues with ${writeup.summary.length - 900} more characters...]\n`)
      console.log(`Issues: ${issues.join(' | ')}`)
      console.log(`Total length: ${writeup.summary.length} characters`)
    }
  }

  await prisma.$disconnect()
}

showSamples()
