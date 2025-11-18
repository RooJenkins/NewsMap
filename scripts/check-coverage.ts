import { PrismaClient } from '@prisma/client'
import { ALL_COUNTRIES } from './ALL_COUNTRIES_WITH_COORDS'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:/home/user/NewsMap/prisma/dev.db'
    }
  }
})

async function check() {
  console.log('Checking coverage of all 128 source countries...\n')
  
  let missingCount = 0
  for (const country of ALL_COUNTRIES) {
    const found = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country.name,
          type: 'country',
          category: 'climate'
        }
      }
    })
    
    if (!found) {
      console.log('✗ MISSING:', country.name)
      missingCount++
    }
  }
  
  if (missingCount === 0) {
    console.log('✓ All 128 countries from source file have climate writeups!')
  } else {
    console.log('Missing countries:', missingCount)
  }
  
  await prisma.$disconnect()
}

check()
