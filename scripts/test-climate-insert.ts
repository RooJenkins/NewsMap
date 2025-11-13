import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testInsert() {
  try {
    console.log('Testing climate summary insert...')

    const result = await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: 'Test Country',
          type: 'country',
          category: 'climate'
        }
      },
      create: {
        name: 'Test Country',
        type: 'country',
        country: 'Test Country',
        lat: 0,
        lng: 0,
        category: 'climate',
        summary: 'This is a test climate summary with enough characters to be valid.',
        issues: JSON.stringify(['Climate change', 'Deforestation']),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: 'This is a test climate summary with enough characters to be valid.',
        issues: JSON.stringify(['Climate change', 'Deforestation']),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date()
      }
    })

    console.log('✓ Successfully inserted test record:', result.id)

    // Check count
    const count = await prisma.locationSummary.count({ where: { category: 'climate' } })
    console.log('Total climate summaries:', count)

  } catch (error) {
    console.error('✗ Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testInsert()
