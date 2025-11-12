'use client'

import { useMemo, useState, useEffect } from 'react'
import { Treemap, ResponsiveContainer } from 'recharts'
import { realNewsTopics as topics, outlets } from '@/lib/mockData'
import type { TopicArticleData } from '@/types'

interface TreemapNode {
  name: string
  children?: TreemapNode[]
  size?: number
  changePercent?: number
  topicId?: string
  fill?: string
  [key: string]: any
}

interface ArticleLink {
  title: string
  url: string
  source: string
  publishedAt: string
  imageUrl?: string
}

interface PopupData {
  topicName: string
  changePercent: number
  todayCount: number
  yesterdayCount: number
  isBreaking: boolean
  summary: string
  outletBreakdown: TopicArticleData['outletBreakdown']
  articles: ArticleLink[]
  heroImageUrl?: string
  location?: {
    city?: string
    country: string
    lat: number
    lng: number
  }
}

const categories = [
  { id: 'all', name: 'All News', mainId: null },
  { id: 'politics-main', name: 'Politics', mainId: 'politics-main' },
  { id: 'conflicts-main', name: 'Wars & Conflicts', mainId: 'conflicts-main' },
  { id: 'economy-main', name: 'Economy', mainId: 'economy-main' },
  { id: 'disasters-main', name: 'Natural Disasters', mainId: 'disasters-main' },
  { id: 'crime-main', name: 'Crime', mainId: 'crime-main' },
  { id: 'tech-main', name: 'Technology', mainId: 'tech-main' },
  { id: 'sports-main', name: 'Sports', mainId: 'sports-main' },
  { id: 'media-main', name: 'Media', mainId: 'media-main' },
  { id: 'climate-main', name: 'Climate', mainId: 'climate-main' },
]

const newsOutlets = [
  { id: 'cnn', name: 'CNN' },
  { id: 'fox', name: 'Fox News' },
  { id: 'nbc', name: 'NBC' },
  { id: 'abc', name: 'ABC' },
  { id: 'cbs', name: 'CBS' },
  { id: 'msnbc', name: 'MSNBC' },
  { id: 'nyt', name: 'NY Times' },
  { id: 'wapo', name: 'Wash Post' },
  { id: 'wsj', name: 'WSJ' },
  { id: 'usa-today', name: 'USA Today' },
  { id: 'ap', name: 'AP' },
  { id: 'reuters', name: 'Reuters' },
  { id: 'bloomberg', name: 'Bloomberg' },
  { id: 'npr', name: 'NPR' },
  { id: 'pbs', name: 'PBS' },
  { id: 'politico', name: 'Politico' },
  { id: 'the-hill', name: 'The Hill' },
  { id: 'axios', name: 'Axios' },
  { id: 'bbc', name: 'BBC' },
  { id: 'guardian', name: 'Guardian' },
  { id: 'ft', name: 'FT' },
  { id: 'economist', name: 'Economist' },
  { id: 'time', name: 'TIME' },
  { id: 'newsweek', name: 'Newsweek' },
  { id: 'atlantic', name: 'Atlantic' },
]

// Generate real static map URL from coordinates
function getStaticMapUrl(lat: number, lng: number, width: number = 400, height: number = 150): string {
  const zoom = 6
  // Using OpenStreetMap tiles with marker overlay
  // Format: center on lat,lng with zoom level
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-1}%2C${lat-1}%2C${lng+1}%2C${lat+1}&layer=mapnik&marker=${lat}%2C${lng}`
}

export default function InteractiveTreemapView() {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)
  const [expandedData, setExpandedData] = useState<PopupData | null>(null)
  const [expandedBoxRect, setExpandedBoxRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null)
  const [newsData, setNewsData] = useState<TopicArticleData[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedOutlets, setSelectedOutlets] = useState<Set<string>>(new Set(newsOutlets.map(o => o.id)))
  const [showOutletFilter, setShowOutletFilter] = useState(false)

  // Date state - default to today, allow going back 90 days
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const [selectedDate, setSelectedDate] = useState(today)
  const [daysBack, setDaysBack] = useState(0) // 0 = today, 1 = yesterday, etc.

  const toggleOutlet = (outletId: string) => {
    const newSelected = new Set(selectedOutlets)
    if (newSelected.has(outletId)) {
      newSelected.delete(outletId)
    } else {
      newSelected.add(outletId)
    }
    setSelectedOutlets(newSelected)
  }

  const selectAllOutlets = () => {
    setSelectedOutlets(new Set(newsOutlets.map(o => o.id)))
  }

  const deselectAllOutlets = () => {
    setSelectedOutlets(new Set())
  }


  // Update selected date when daysBack changes
  useEffect(() => {
    const newDate = new Date(today)
    newDate.setDate(newDate.getDate() - daysBack)
    setSelectedDate(newDate)
  }, [daysBack])

  // Fetch real news data when date changes
  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/news?date=${selectedDate.toISOString()}`)
        if (!response.ok) {
          throw new Error('Failed to fetch news data')
        }
        const data = await response.json()
        setNewsData(data.topics)
      } catch (error) {
        console.error('Error fetching news data:', error)
        // Fallback to empty array on error
        setNewsData([])
      } finally {
        setLoading(false)
      }
    }

    fetchNewsData()
  }, [selectedDate])

  // Generate hierarchical treemap data based on selected date and category
  const treeData = useMemo(() => {
    const articleData = newsData
    let mainCategories = topics.filter(t => t.category === 'Main')

    // Filter by selected category
    if (selectedCategory !== 'all') {
      mainCategories = mainCategories.filter(t => t.id === selectedCategory)
    }

    // Create hierarchical structure
    const hierarchical: TreemapNode[] = mainCategories.map(mainCat => {
      const subTopics = topics.filter(t => t.parentId === mainCat.id && t.isSubTopic)

      const children: TreemapNode[] = subTopics.map(subTopic => {
        const data = articleData.find(d => d.topicId === subTopic.id)
        // Show all topics even with low counts, but skip if completely missing
        if (!data || data.todayCount === 0) return null

        // Color gradient based on story size (article count)
        const getSizeBasedColor = (articleCount: number): string => {
          // FT-style color palette - warm, muted tones
          // Breaking news (800+) - Deep maroon/burgundy
          if (articleCount >= 800) return '#7F1D1D' // red-900
          // Major news (600-800) - Dark red
          if (articleCount >= 600) return '#991B1B' // red-800
          // High importance (400-600) - Red
          if (articleCount >= 400) return '#DC2626' // red-600
          // Significant (300-400) - Lighter red
          if (articleCount >= 300) return '#EF4444' // red-500
          // Notable (200-300) - Salmon
          if (articleCount >= 200) return '#F87171' // red-400
          // Medium (150-200) - Light salmon
          if (articleCount >= 150) return '#FCA5A5' // red-300
          // Moderate (100-150) - Very light salmon
          if (articleCount >= 100) return '#FECACA' // red-200
          // Regular (75-100) - Pale pink
          if (articleCount >= 75) return '#FEE2E2' // red-100
          // Standard (50-75) - Light teal
          if (articleCount >= 50) return '#CCFBF1' // teal-100
          // Minor (25-50) - Beige
          if (articleCount >= 25) return '#E7E5E4' // stone-200
          // Small (10-25) - Light beige
          if (articleCount >= 10) return '#F5F5F4' // stone-100
          // Minimal (< 10) - Very light beige
          return '#FAFAF9' // stone-50
        }

        return {
          name: subTopic.name,
          size: data.todayCount,
          changePercent: data.changePercent,
          topicId: subTopic.id,
          fill: getSizeBasedColor(data.todayCount),
          isBreaking: data.isBreaking,
          data: data // Store full data for popup
        }
      }).filter(Boolean) as TreemapNode[]

      // Sort children by size ascending (smallest first, largest on right)
      children.sort((a, b) => (a.size || 0) - (b.size || 0))

      // Calculate total size for main category
      const totalSize = children.reduce((sum, child) => sum + (child.size || 0), 0)

      return {
        name: mainCat.name,
        children,
        size: totalSize
      }
    }).filter(cat => cat.children && cat.children.length > 0)

    // Sort main categories by total size ascending (smallest first, largest on right)
    hierarchical.sort((a, b) => (a.size || 0) - (b.size || 0))

    return hierarchical
  }, [newsData, selectedCategory])

  const CustomContent = (props: any) => {
    const { x, y, width, height, name, changePercent, topicId, fill, data, isBreaking } = props

    // Only show label if box is large enough for readability
    const showLabel = width > 70 && height > 40
    const showSmallLabel = !showLabel && width > 45 && height > 25

    const handleMouseEnter = (e: any) => {
      setHoveredTopic(topicId)
      if (data && topicId) {
        const topic = topics.find(t => t.id === topicId)
        if (topic) {
          // Store the box position and size for expansion animation
          setExpandedBoxRect({ x, y, width, height })
          setExpandedData({
            topicName: topic.name,
            changePercent: data.changePercent,
            todayCount: data.todayCount,
            yesterdayCount: data.yesterdayCount,
            isBreaking: data.isBreaking || false,
            summary: data.summary || '',
            outletBreakdown: data.outletBreakdown,
            articles: data.articles || [],
            heroImageUrl: data.heroImageUrl,
            location: topic.location
          })
        }
      }
    }

    const handleMouseLeave = () => {
      setHoveredTopic(null)
      setExpandedData(null)
      setExpandedBoxRect(null)
    }

    // Don't render if no topicId (main category boxes)
    if (!topicId) return null

    const isHovered = hoveredTopic === topicId

    return (
      <g>
        {/* Card shadow layer */}
        <rect
          x={x + 2}
          y={y + 2}
          width={width}
          height={height}
          rx={8}
          ry={8}
          style={{
            fill: 'rgba(0, 0, 0, 0.2)',
            pointerEvents: 'none'
          }}
        />
        {/* Main card */}
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={8}
          ry={8}
          style={{
            fill: fill,
            stroke: isHovered ? '#DC2626' : 'rgba(255, 255, 255, 0.1)',
            strokeWidth: isHovered ? 4 : 1,
            cursor: 'pointer',
            opacity: 0.95,
            filter: isHovered ? 'brightness(1.1) drop-shadow(0 6px 16px rgba(220, 38, 38, 0.4))' : 'drop-shadow(0 1px 3px rgba(0,0,0,0.2))',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showLabel && (
          <>
            {/* Topic name */}
            <text
              x={x + width / 2}
              y={y + height / 2 - 6}
              textAnchor="middle"
              fill="#ffffff"
              fontSize={Math.min(width / 8, height / 3.5, 13)}
              fontWeight="700"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 1px rgba(0,0,0,1)',
                paintOrder: 'stroke fill',
                stroke: 'rgba(0,0,0,0.5)',
                strokeWidth: '0.5px',
                pointerEvents: 'none'
              }}
            >
              {name}
            </text>
            {/* BREAKING badge or Change percentage pill */}
            {isBreaking ? (
              <>
                {/* Breaking badge pill background */}
                <rect
                  x={x + width / 2 - 30}
                  y={y + height / 2 + 3}
                  width={60}
                  height={16}
                  rx={8}
                  ry={8}
                  fill="#ef4444"
                  style={{ pointerEvents: 'none' }}
                />
                <text
                  x={x + width / 2}
                  y={y + height / 2 + 14}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize={10}
                  fontWeight="800"
                  style={{ pointerEvents: 'none' }}
                >
                  BREAKING
                </text>
              </>
            ) : changePercent !== undefined && (
              <>
                {/* Percentage change pill background */}
                <rect
                  x={x + width / 2 - 22}
                  y={y + height / 2 + 3}
                  width={44}
                  height={16}
                  rx={8}
                  ry={8}
                  fill={changePercent > 0 ? '#10b981' : changePercent < 0 ? '#ef4444' : '#6b7280'}
                  style={{ pointerEvents: 'none' }}
                />
                <text
                  x={x + width / 2}
                  y={y + height / 2 + 14}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize={10}
                  fontWeight="700"
                  style={{ pointerEvents: 'none' }}
                >
                  {changePercent > 0 ? '↑' : changePercent < 0 ? '↓' : ''}{Math.abs(changePercent).toFixed(0)}%
                </text>
              </>
            )}
          </>
        )}
        {!showLabel && showSmallLabel && (
          <text
            x={x + width / 2}
            y={y + height / 2 + 4}
            textAnchor="middle"
            fill="#ffffff"
            fontSize={Math.min(width / 9, height / 3, 10)}
            fontWeight="700"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 1px rgba(0,0,0,1)',
              paintOrder: 'stroke fill',
              stroke: 'rgba(0,0,0,0.5)',
              strokeWidth: '0.5px',
              pointerEvents: 'none'
            }}
          >
            {changePercent !== undefined && `${changePercent > 0 ? '+' : ''}${changePercent.toFixed(0)}%`}
          </text>
        )}
      </g>
    )
  }

  // Format date for display
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    return date.toLocaleDateString('en-US', options)
  }

  const goToPreviousDay = () => {
    if (daysBack < 90) setDaysBack(daysBack + 1)
  }

  const goToNextDay = () => {
    if (daysBack > 0) setDaysBack(daysBack - 1)
  }

  const goToToday = () => {
    setDaysBack(0)
  }

  return (
    <div className="flex flex-col h-screen gap-3 p-4 overflow-hidden" style={{ backgroundColor: '#FFF5EB' }}>
      {/* Main Container with Sidebar + Treemap */}
      <div className="flex gap-3 flex-1 overflow-hidden">
        {/* Left Sidebar - Story Panel (1/3 width) */}
        <div className="w-1/3 bg-white rounded-2xl shadow-lg border border-stone-200/50 overflow-hidden flex flex-col">
          {expandedData ? (
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-6">
                {/* Hero Image */}
                {expandedData.heroImageUrl && (
                  <div className="mb-5 -mt-6 -mx-6">
                    <img
                      src={expandedData.heroImageUrl}
                      alt={expandedData.topicName}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                {/* Topic Header */}
                <div className="mb-5">
                  <h2 className="text-3xl font-bold text-stone-900 mb-3">
                    {expandedData.topicName}
                  </h2>

                  {/* Metadata Pills */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {expandedData.isBreaking && (
                      <div className="inline-flex items-center px-3 py-1.5 bg-red-100 text-red-800 rounded-full font-semibold text-xs uppercase tracking-wide border-2 border-red-300 shadow-sm">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span>
                        Breaking News
                      </div>
                    )}

                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-sm shadow-sm ${
                      expandedData.changePercent > 0
                        ? 'bg-emerald-500 text-white'
                        : expandedData.changePercent < 0
                        ? 'bg-red-500 text-white'
                        : 'bg-stone-300 text-stone-800'
                    }`}>
                      {expandedData.changePercent > 0 ? '↑' : expandedData.changePercent < 0 ? '↓' : '●'}
                      {Math.abs(expandedData.changePercent).toFixed(1)}%
                    </div>

                    <div className="inline-flex items-center px-3 py-1.5 bg-orange-500 text-white rounded-full font-bold text-sm shadow-sm">
                      {expandedData.todayCount.toLocaleString()} articles
                    </div>
                  </div>
                </div>

                {/* Location Map */}
                {expandedData.location && (
                  <div className="mb-5">
                    <div className="relative rounded-xl overflow-hidden border-2 border-stone-300 h-48 bg-stone-100 shadow-md">
                      <iframe
                        src={getStaticMapUrl(expandedData.location.lat, expandedData.location.lng)}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title={`Map of ${expandedData.location.city || expandedData.location.country}`}
                        allow="geolocation"
                      />
                      <div className="absolute bottom-3 left-3 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full border-2 border-red-600 flex items-center gap-2 shadow-lg">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-bold text-stone-900">
                          {expandedData.location.city ? `${expandedData.location.city}, ${expandedData.location.country}` : expandedData.location.country}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Summary */}
                {expandedData.summary && (
                  <div className="mb-5 p-4 bg-stone-50 border-2 border-stone-200 rounded-xl">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-stone-600 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                      </svg>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Story Summary</div>
                        <p className="text-base text-stone-800 leading-relaxed">{expandedData.summary}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Top Articles with Images */}
                {expandedData.articles && expandedData.articles.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-sm font-bold text-stone-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                      </svg>
                      Top Articles
                    </h3>
                    <div className="space-y-4">
                      {expandedData.articles.slice(0, 3).map((article, index) => (
                        <a
                          key={index}
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-xl bg-white border-2 border-stone-200 hover:border-red-600 transition-all overflow-hidden shadow-sm hover:shadow-lg group"
                        >
                          {article.imageUrl && (
                            <div className="w-full h-40 overflow-hidden bg-stone-100">
                              <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="p-3">
                            <div className="flex items-start gap-2 mb-2">
                              <span className="text-sm text-stone-400 font-mono shrink-0 font-bold">#{index + 1}</span>
                              <h4 className="text-sm font-semibold text-stone-900 leading-snug flex-1">
                                {article.title}
                              </h4>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-stone-500">
                              <span className="font-medium">{article.source}</span>
                              <span>•</span>
                              <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-center">
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Hover over a story</h3>
                <p className="text-stone-600">Details will appear here</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Treemap (2/3 width) */}
        <div className="w-2/3 flex flex-col gap-3">

      {/* Category Filter Buttons */}
      <div className="bg-white rounded-2xl shadow-sm p-4 border border-stone-200/50 flex-shrink-0">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap flex-1">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-2">Categories:</span>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-red-800 text-white shadow-md scale-105'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300 hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Outlet Filter Toggle */}
          <button
            onClick={() => setShowOutletFilter(!showOutletFilter)}
            className="px-5 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-full font-semibold text-sm transition-all hover:scale-105 flex items-center gap-2 shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Outlets ({selectedOutlets.size})</span>
            <svg className={`w-4 h-4 transition-transform ${showOutletFilter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Collapsible Outlet Filter */}
        {showOutletFilter && (
          <div className="mt-4 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Filter News Outlets:</span>
              <div className="flex gap-2">
                <button
                  onClick={selectAllOutlets}
                  className="px-4 py-1.5 text-xs bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all hover:scale-105"
                >
                  Select All
                </button>
                <button
                  onClick={deselectAllOutlets}
                  className="px-4 py-1.5 text-xs bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all hover:scale-105"
                >
                  Clear All
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {newsOutlets.map((outlet) => (
                <button
                  key={outlet.id}
                  onClick={() => toggleOutlet(outlet.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                    selectedOutlets.has(outlet.id)
                      ? 'bg-red-800 text-white shadow-md'
                      : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                  }`}
                >
                  {outlet.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Timeline Controls */}
      <div className="bg-white rounded-2xl shadow-sm p-3 border border-stone-200/50 flex-shrink-0">
        <div className="space-y-2">
          {/* Date Display - Top */}
          <div className="flex items-center justify-between">
            <div className="text-stone-900">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Viewing Date</div>
              <div className="text-xl font-bold mt-1">{formatDate(selectedDate)}</div>
              {daysBack > 0 && (
                <div className="text-sm text-stone-500 mt-0.5">{daysBack} {daysBack === 1 ? 'day' : 'days'} ago</div>
              )}
            </div>

            {/* Navigation Controls - Right side */}
            <div className="flex items-center gap-2">
              <button
                onClick={goToPreviousDay}
                disabled={daysBack >= 90}
                className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 disabled:bg-stone-100 disabled:text-stone-400 text-stone-700 rounded-full font-semibold text-sm transition-all hover:scale-105 disabled:hover:scale-100 flex items-center gap-2"
              >
                <span>←</span>
                <span>Back</span>
              </button>

              {daysBack > 0 && (
                <button
                  onClick={goToToday}
                  className="px-5 py-2.5 bg-red-800 hover:bg-red-900 text-white rounded-full font-semibold text-sm transition-all hover:scale-105 shadow-md"
                >
                  Today
                </button>
              )}

              <button
                onClick={goToNextDay}
                disabled={daysBack === 0}
                className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 disabled:bg-stone-100 disabled:text-stone-400 text-stone-700 rounded-full font-semibold text-sm transition-all hover:scale-105 disabled:hover:scale-100 flex items-center gap-2"
              >
                <span>Forward</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Date Slider - Bottom */}
          <div className="w-full">
            <input
              type="range"
              min="0"
              max="90"
              value={90 - daysBack}
              onChange={(e) => setDaysBack(90 - Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${daysBack / 90 * 100}%, #374151 ${daysBack / 90 * 100}%, #374151 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>← 90 days ago</span>
              <span>Today →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Treemap Visualization */}
      <div className="relative bg-white rounded-xl shadow-sm p-3 flex-1 overflow-hidden min-h-0 border border-stone-200/50">
        {/* Background pattern for depth */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #78716C 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}/>

        {/* Loading State */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-10">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-stone-200 border-t-red-800 mb-4"></div>
              <div className="text-stone-900 text-lg font-semibold">Loading news data...</div>
              <div className="text-stone-500 text-sm mt-2">Fetching real-time articles</div>
            </div>
          </div>
        )}

      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={treeData}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="rgba(0,0,0,0.15)"
          fill="#8884d8"
          content={<CustomContent />}
          animationDuration={300}
        />
      </ResponsiveContainer>
      </div>
    </div>
  </div>

      {/* Custom scrollbar, slider, and animation styles */}
      <style jsx>{`
        @keyframes expandIn {
          0% {
            opacity: 0;
            transform: translateY(-50%) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.4);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(220, 38, 38, 0.6);
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  )
}
