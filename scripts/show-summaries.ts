import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function showSummaries() {
  const suriname = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: 'Suriname',
        type: 'country',
        category: 'all'
      }
    }
  })

  const trinidad = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: 'Trinidad and Tobago',
        type: 'country',
        category: 'all'
      }
    }
  })

  console.log('\n' + '='.repeat(80))
  console.log('SURINAME SUMMARY')
  console.log('='.repeat(80))
  if (suriname) {
    console.log(suriname.summary.substring(0, 500) + '...\n')
  }

  console.log('\n' + '='.repeat(80))
  console.log('TRINIDAD AND TOBAGO SUMMARY')
  console.log('='.repeat(80))
  if (trinidad) {
    console.log(trinidad.summary.substring(0, 500) + '...\n')
  }

  await prisma.$disconnect()
}

showSummaries()
