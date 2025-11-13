import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

const countriesWithStories = ['India', 'Iraq', 'Israel', 'Italy', 'Japan', 'Kenya']

async function main() {
  console.log('🚀 Fetching detailed stories for summary generation\n')

  for (const countryName of countriesWithStories) {
    console.log(`\nFetching stories for ${countryName}...`)

    const stories = await prisma.story.findMany({
      where: { country: countryName },
      orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
      take: 100,
    })

    console.log(`Found ${stories.length} stories`)

    // Write to a JSON file for Claude to analyze
    const output = {
      country: countryName,
      storyCount: stories.length,
      stories: stories.map((story, i) => ({
        index: i + 1,
        title: story.title,
        description: story.description,
        source: story.source,
        pubDate: story.pubDate.toISOString(),
        link: story.link,
        importance: story.importance,
        category: story.category
      }))
    }

    fs.writeFileSync(
      `/home/user/NewsMap/scripts/stories-${countryName.toLowerCase().replace(/\s+/g, '-')}.json`,
      JSON.stringify(output, null, 2)
    )
  }

  console.log('\n✅ Stories exported to JSON files')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
