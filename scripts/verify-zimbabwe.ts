import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function verifyZimbabwe() {
  console.log('Verifying Zimbabwe entry in database...\n')

  const zimbabwe = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: 'Zimbabwe',
        type: 'country',
        category: 'all'
      }
    }
  })

  if (zimbabwe) {
    console.log('✅ Zimbabwe found in database!')
    console.log('   ID:', zimbabwe.id)
    console.log('   Name:', zimbabwe.name)
    console.log('   Type:', zimbabwe.type)
    console.log('   Country:', zimbabwe.country)
    console.log('   Location:', `${zimbabwe.lat}, ${zimbabwe.lng}`)
    console.log('   Category:', zimbabwe.category)
    console.log('   Story Count:', zimbabwe.storyCount)
    console.log('   Updated At:', zimbabwe.updatedAt)
    console.log('\n📋 Issues:')
    const issues = JSON.parse(zimbabwe.issues)
    issues.forEach((issue: string, index: number) => {
      console.log(`   ${index + 1}. ${issue}`)
    })
    console.log('\n📰 Top Stories:')
    const stories = JSON.parse(zimbabwe.topStories)
    stories.forEach((story: any, index: number) => {
      console.log(`   ${index + 1}. ${story.title}`)
      console.log(`      Source: ${story.source}`)
      console.log(`      Date: ${new Date(story.pubDate).toLocaleDateString()}`)
    })
    console.log('\n📝 Summary Preview:')
    console.log(`   ${zimbabwe.summary.substring(0, 300)}...`)
  } else {
    console.log('❌ Zimbabwe not found in database')
  }
}

verifyZimbabwe()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
