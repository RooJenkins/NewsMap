import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Cache for all stories
let cachedStories: any = null
let cacheTimestamp = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export async function GET() {
  try {
    // Check cache
    if (cachedStories && Date.now() - cacheTimestamp < CACHE_DURATION) {
      console.log('✅ Returning cached stories:', cachedStories.length)
      return NextResponse.json({
        stories: cachedStories,
        count: cachedStories.length,
        cached: true
      })
    }

    // Fetch all stories from database
    console.log('🔄 Fetching all stories from database...')

    const stories = await prisma.story.findMany({
      orderBy: [
        { importance: 'desc' },
        { pubDate: 'desc' },
      ],
    })

    // Format stories for response
    const formattedStories = stories.map((story: any) => ({
      id: story.id,
      title: story.title,
      link: story.link,
      pubDate: story.pubDate.toISOString(),
      source: story.source,
      description: story.description,
      aiSummary: story.aiSummary,
      sourceQuality: story.sourceQuality,
      location: {
        lat: story.lat,
        lng: story.lng,
        city: story.city,
        country: story.country,
      },
      importance: story.importance,
      isBreaking: story.isBreaking,
      category: story.category,
    }))

    // Update cache
    cachedStories = formattedStories
    cacheTimestamp = Date.now()

    console.log(`✅ Loaded ${formattedStories.length} total stories`)

    return NextResponse.json({
      stories: formattedStories,
      count: formattedStories.length,
      cached: false
    })
  } catch (error) {
    console.error('❌ Error fetching all stories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stories' },
      { status: 500 }
    )
  }
}
