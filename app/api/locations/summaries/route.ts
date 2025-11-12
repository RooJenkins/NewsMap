import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Cache for location summaries by category
const summaryCache = new Map<string, { data: any[], timestamp: number }>()
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

export async function GET(request: Request) {
  try {
    // Get category from query parameters
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || 'all'

    // Check cache for this category
    const cached = summaryCache.get(category)
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log(`✅ Returning cached location summaries for category ${category}:`, cached.data.length)
      return NextResponse.json({
        locations: cached.data,
        count: cached.data.length,
        category,
        cached: true
      })
    }

    // Fetch location summaries from database for this category
    console.log(`🔄 Fetching location summaries from database for category: ${category}`)

    const summaries = await prisma.locationSummary.findMany({
      where: {
        category: category
      },
      orderBy: [
        { type: 'asc' }, // Countries first, then cities
        { name: 'asc' },
      ],
    })

    // Format summaries for response
    const formattedSummaries = summaries.map(loc => {
      let issues = []
      let topStories = []

      try {
        issues = JSON.parse(loc.issues)
      } catch (e) {
        console.warn(`Failed to parse issues for ${loc.name}:`, e)
      }

      try {
        topStories = JSON.parse(loc.topStories)
      } catch (e) {
        console.warn(`Failed to parse topStories for ${loc.name}:`, e)
      }

      return {
        id: loc.id,
        name: loc.name,
        type: loc.type,
        country: loc.country,
        location: {
          lat: loc.lat,
          lng: loc.lng,
        },
        summary: loc.summary,
        issues,
        topStories,
        storyCount: loc.storyCount,
        updatedAt: loc.updatedAt.toISOString(),
      }
    })

    // Update cache for this category
    summaryCache.set(category, {
      data: formattedSummaries,
      timestamp: Date.now()
    })

    console.log(`✅ Loaded ${formattedSummaries.length} location summaries for category: ${category}`)

    return NextResponse.json({
      locations: formattedSummaries,
      count: formattedSummaries.length,
      category,
      cached: false
    })
  } catch (error) {
    console.error('❌ Error fetching location summaries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch location summaries' },
      { status: 500 }
    )
  }
}
