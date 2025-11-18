'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Filter, Loader2, Globe2 } from 'lucide-react'
import GlobalStoryCard from './GlobalStoryCard'

// Dynamically import Leaflet to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface GlobalStory {
  id: string
  rank: number
  title: string
  narrative: string
  authorStyle: string
  globalSignificance: string
  affectedPopulation: string
  category: string
  location: {
    lat: number
    lng: number
    city: string | null
    country: string
    region: string | null
  }
  sources: Array<{
    title: string
    url: string
    outlet: string
  }>
  generatedAt: string
  publishDate: string
}

export default function GlobalNewsFeed() {
  const [stories, setStories] = useState<GlobalStory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedStoryId, setExpandedStoryId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [mapInstance, setMapInstance] = useState<any>(null)

  const storyRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    fetchGlobalNews()
  }, [])

  const fetchGlobalNews = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/global-news')
      if (!response.ok) {
        throw new Error('Failed to fetch global news')
      }
      const data = await response.json()
      setStories(data.stories || [])
    } catch (err: any) {
      console.error('Error fetching global news:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleStoryClick = (story: GlobalStory) => {
    // Toggle expansion
    if (expandedStoryId === story.id) {
      setExpandedStoryId(null)
    } else {
      setExpandedStoryId(story.id)

      // Pan and zoom map to story location
      if (mapInstance) {
        mapInstance.flyTo([story.location.lat, story.location.lng], 6, {
          duration: 1.5
        })
      }

      // Scroll to story
      setTimeout(() => {
        storyRefs.current[story.id]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 100)
    }
  }

  const categories = ['all', ...Array.from(new Set(stories.map(s => s.category.toLowerCase())))]

  const filteredStories = selectedCategory === 'all'
    ? stories
    : stories.filter(s => s.category.toLowerCase() === selectedCategory)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-ft-pink">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-ft-oxford animate-spin mx-auto mb-4" />
          <p className="text-ft-black font-headline text-xl">Loading global news...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-ft-pink">
        <div className="text-center p-8 bg-white rounded-lg shadow-xl border-2 border-ft-claret">
          <p className="text-ft-claret font-headline text-xl mb-2">Error loading news</p>
          <p className="text-ft-slate text-sm">{error}</p>
          <button
            onClick={fetchGlobalNews}
            className="mt-4 px-6 py-2 bg-ft-oxford text-white rounded-full hover:bg-ft-claret transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-ft-pink">
      {/* Map Section - Left Side */}
      <div className="w-1/2 h-full relative">
        <div className="absolute top-4 left-4 z-[1000] bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border-2 border-ft-oxford">
          <div className="flex items-center gap-2 mb-2">
            <Globe2 className="text-ft-oxford" size={24} />
            <h2 className="font-headline text-2xl font-bold text-ft-black">
              Global News Map
            </h2>
          </div>
          <p className="text-sm text-ft-slate">
            Click stories to see their location
          </p>
        </div>

        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '100%', width: '100%' }}
          ref={setMapInstance}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredStories.map((story) => (
            <Marker
              key={story.id}
              position={[story.location.lat, story.location.lng]}
              eventHandlers={{
                click: () => {
                  setExpandedStoryId(story.id)
                  storyRefs.current[story.id]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  })
                }
              }}
            >
              <Popup>
                <div className="max-w-xs">
                  <p className="font-semibold text-sm mb-1">#{story.rank} - {story.title}</p>
                  <p className="text-xs text-gray-600">{story.location.country}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Stories List - Right Side */}
      <div className="w-1/2 h-full overflow-y-auto bg-ft-pink/50">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6 sticky top-0 bg-ft-pink/95 backdrop-blur-sm pb-4 pt-2 z-10">
            <h1 className="font-headline text-4xl font-bold text-ft-black mb-2">
              Top 100 Global Stories
            </h1>
            <p className="text-ft-slate mb-4">
              Curated daily by our analysts at 5am • Written in the style of The Rest is Politics
            </p>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-ft-oxford" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-3 py-1 rounded-full text-xs font-semibold transition-all
                    ${selectedCategory === cat
                      ? 'bg-ft-oxford text-white border-2 border-ft-oxford'
                      : 'bg-white text-ft-oxford border-2 border-ft-wheat hover:border-ft-oxford'
                    }
                  `}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
              <span className="text-xs text-ft-slate ml-2">
                ({filteredStories.length} stories)
              </span>
            </div>
          </div>

          {/* Stories Grid */}
          <div className="space-y-4">
            {filteredStories.length === 0 ? (
              <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <p className="text-ft-slate">No stories found in this category</p>
              </div>
            ) : (
              filteredStories.map((story) => (
                <div
                  key={story.id}
                  ref={(el) => {
                    storyRefs.current[story.id] = el
                  }}
                >
                  <GlobalStoryCard
                    story={story}
                    onClick={() => handleStoryClick(story)}
                    isExpanded={expandedStoryId === story.id}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
