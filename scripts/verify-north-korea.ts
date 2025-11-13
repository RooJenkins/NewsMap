import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyNorthKoreaSummary() {
  try {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: 'North Korea',
          type: 'country',
          category: 'all'
        }
      }
    })

    if (!summary) {
      console.log('❌ North Korea summary NOT found in database')
      return
    }

    console.log('✅ North Korea summary found in database!\n')
    console.log('Name:', summary.name)
    console.log('Type:', summary.type)
    console.log('Country:', summary.country)
    console.log('Coordinates:', `${summary.lat}, ${summary.lng}`)
    console.log('Category:', summary.category)
    console.log('Character count:', summary.summary.length)
    console.log('Issues:', JSON.parse(summary.issues))
    console.log('Created:', summary.createdAt)
    console.log('Updated:', summary.updatedAt)
    console.log('\nFirst 500 characters of summary:')
    console.log(summary.summary.substring(0, 500) + '...')

  } catch (error) {
    console.error('Error verifying North Korea summary:', error)
    throw error
  }
}

verifyNorthKoreaSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
