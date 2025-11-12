import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Cache for location summaries
let cachedSummaries: any = null
let cacheTimestamp = 0
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

export async function GET() {
  try {
    // Check cache
    if (cachedSummaries && Date.now() - cacheTimestamp < CACHE_DURATION) {
      console.log('✅ Returning cached location summaries:', cachedSummaries.length)
      return NextResponse.json({
        locations: cachedSummaries,
        count: cachedSummaries.length,
        cached: true
      })
    }

    // Fetch all location summaries from database
    console.log('🔄 Fetching location summaries from database...')

    const summaries = await prisma.locationSummary.findMany({
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

    // Update cache
    cachedSummaries = formattedSummaries
    cacheTimestamp = Date.now()

    console.log(`✅ Loaded ${formattedSummaries.length} location summaries`)

    return NextResponse.json({
      locations: formattedSummaries,
      count: formattedSummaries.length,
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
