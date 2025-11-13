import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verify() {
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

  console.log('\n=== SURINAME ===')
  console.log('Found:', !!suriname)
  if (suriname) {
    console.log('Summary length:', suriname.summary.length)
    console.log('Issues:', suriname.issues)
    console.log('Updated:', suriname.updatedAt)
    console.log('Coordinates:', `${suriname.lat}, ${suriname.lng}`)
  }

  console.log('\n=== TRINIDAD AND TOBAGO ===')
  console.log('Found:', !!trinidad)
  if (trinidad) {
    console.log('Summary length:', trinidad.summary.length)
    console.log('Issues:', trinidad.issues)
    console.log('Updated:', trinidad.updatedAt)
    console.log('Coordinates:', `${trinidad.lat}, ${trinidad.lng}`)
  }

  await prisma.$disconnect()
}

verify()
