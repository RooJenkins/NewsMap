import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Cache for global news stories
let cachedGlobalStories: any = null
let cacheTimestamp = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export async function GET() {
  try {
    // Check cache
    if (cachedGlobalStories && Date.now() - cacheTimestamp < CACHE_DURATION) {
      console.log('✅ Returning cached global news stories:', cachedGlobalStories.length)
      return NextResponse.json({
        stories: cachedGlobalStories,
        count: cachedGlobalStories.length,
        cached: true
      })
    }

    // Fetch active global news stories (top 100)
    console.log('🔄 Fetching global news stories from database...')

    const stories = await prisma.globalNewsStory.findMany({
      where: {
        isActive: true
      },
      orderBy: [
        { rank: 'asc' },
      ],
      take: 100
    })

    // Format stories for response
    const formattedStories = stories.map(story => ({
      id: story.id,
      rank: story.rank,
      title: story.title,
      narrative: story.narrative,
      authorStyle: story.authorStyle,
      globalSignificance: story.globalSignificance,
      affectedPopulation: story.affectedPopulation,
      category: story.category,
      location: {
        lat: story.lat,
        lng: story.lng,
        city: story.city,
        country: story.country,
        region: story.region
      },
      sources: JSON.parse(story.sources),
      generatedAt: story.generatedAt.toISOString(),
      publishDate: story.publishDate.toISOString(),
    }))

    // Update cache
    cachedGlobalStories = formattedStories
    cacheTimestamp = Date.now()

    console.log(`✅ Loaded ${formattedStories.length} global news stories`)

    return NextResponse.json({
      stories: formattedStories,
      count: formattedStories.length,
      cached: false
    })
  } catch (error) {
    console.error('❌ Error fetching global news stories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch global news stories' },
      { status: 500 }
    )
  }
}
