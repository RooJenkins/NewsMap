'use client'

import { useMemo, useState, useEffect } from 'react'
import { Treemap, ResponsiveContainer } from 'recharts'
import { realNewsTopics as topics, outlets, generateTopicArticleData } from '@/lib/mockData'
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

interface PopupData {
  topicName: string
  changePercent: number
  todayCount: number
  yesterdayCount: number
  outletBreakdown: TopicArticleData['outletBreakdown']
}

export default function InteractiveTreemapView() {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)
  const [popupData, setPopupData] = useState<PopupData | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate hierarchical treemap data
  const treeData = useMemo(() => {
    const articleData = generateTopicArticleData()
    const mainCategories = topics.filter(t => t.category === 'Main')

    // Create hierarchical structure
    const hierarchical: TreemapNode[] = mainCategories.map(mainCat => {
      const subTopics = topics.filter(t => t.parentId === mainCat.id && t.isSubTopic)

      const children: TreemapNode[] = subTopics.map(subTopic => {
        const data = articleData.find(d => d.topicId === subTopic.id)
        if (!data) return null

        // Ultra-smooth color gradient from red through neutral to green
        const getChangeColor = (change: number): string => {
          // Positive changes (green spectrum)
          if (change > 25) return 'rgb(22, 163, 74)'   // Deep green
          if (change > 20) return 'rgb(34, 197, 94)'   // Green
          if (change > 15) return 'rgb(52, 211, 112)'  // Light green
          if (change > 10) return 'rgb(74, 222, 128)'  // Lighter green
          if (change > 7) return 'rgb(100, 232, 148)'  // Very light green
          if (change > 4) return 'rgb(134, 239, 172)'  // Pale green
          if (change > 2) return 'rgb(156, 243, 188)'  // Near neutral green

          // Neutral zone (gray spectrum)
          if (change > -2) return 'rgb(107, 114, 128)' // Neutral gray

          // Negative changes (red spectrum)
          if (change > -4) return 'rgb(254, 205, 211)'  // Near neutral red
          if (change > -7) return 'rgb(254, 178, 188)'  // Pale red
          if (change > -10) return 'rgb(253, 164, 175)' // Very light red
          if (change > -15) return 'rgb(252, 145, 158)' // Light red
          if (change > -20) return 'rgb(248, 113, 113)' // Lighter red
          if (change > -25) return 'rgb(239, 68, 68)'   // Red
          return 'rgb(220, 38, 38)' // Deep red
        }

        return {
          name: subTopic.name,
          size: data.todayCount,
          changePercent: data.changePercent,
          topicId: subTopic.id,
          fill: getChangeColor(data.changePercent),
          data: data // Store full data for popup
        }
      }).filter(Boolean) as TreemapNode[]

      // Sort children by size descending (largest first)
      children.sort((a, b) => (b.size || 0) - (a.size || 0))

      // Calculate total size for main category
      const totalSize = children.reduce((sum, child) => sum + (child.size || 0), 0)

      return {
        name: mainCat.name,
        children,
        size: totalSize
      }
    }).filter(cat => cat.children && cat.children.length > 0)

    // Sort main categories by total size descending
    hierarchical.sort((a, b) => (b.size || 0) - (a.size || 0))

    return hierarchical
  }, [])

  const CustomContent = (props: any) => {
    const { x, y, width, height, name, changePercent, topicId, fill, data } = props

    // Only show label if box is large enough for readability
    const showLabel = width > 70 && height > 40
    const showSmallLabel = !showLabel && width > 45 && height > 25

    const handleMouseEnter = () => {
      setHoveredTopic(topicId)
      if (data && topicId) {
        const topic = topics.find(t => t.id === topicId)
        if (topic) {
          setPopupData({
            topicName: topic.name,
            changePercent: data.changePercent,
            todayCount: data.todayCount,
            yesterdayCount: data.yesterdayCount,
            outletBreakdown: data.outletBreakdown
          })
        }
      }
    }

    const handleMouseLeave = () => {
      setHoveredTopic(null)
      setPopupData(null)
    }

    // Don't render if no topicId (main category boxes)
    if (!topicId) return null

    const isHovered = hoveredTopic === topicId

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: fill,
            stroke: isHovered ? '#ffffff' : 'rgba(0, 0, 0, 0.15)',
            strokeWidth: isHovered ? 3 : 0.5,
            cursor: 'pointer',
            opacity: isHovered ? 1 : 0.95,
            filter: isHovered ? 'brightness(1.1)' : 'none',
            transition: 'all 0.2s ease-in-out'
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
            {/* Change percentage */}
            <text
              x={x + width / 2}
              y={y + height / 2 + 12}
              textAnchor="middle"
              fill="#ffffff"
              fontSize={Math.min(width / 10, height / 4.5, 12)}
              fontWeight="700"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 1px rgba(0,0,0,1)',
                paintOrder: 'stroke fill',
                stroke: 'rgba(0,0,0,0.5)',
                strokeWidth: '0.5px',
                pointerEvents: 'none'
              }}
            >
              {changePercent !== undefined && `${changePercent > 0 ? '+' : ''}${changePercent.toFixed(1)}%`}
            </text>
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

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl shadow-2xl p-3 h-[80vh] overflow-hidden">
      {/* Background pattern for depth */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}/>

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

      {/* Enhanced Floating Popup */}
      {popupData && (
        <div
          className="fixed z-50 pointer-events-none transition-opacity duration-150"
          style={{
            left: `${Math.min(mousePos.x + 25, window.innerWidth - 420)}px`,
            top: `${Math.min(mousePos.y + 15, window.innerHeight - 500)}px`,
          }}
        >
          <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white p-5 rounded-xl shadow-2xl border border-gray-700 max-w-md backdrop-blur-sm"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)'
            }}
          >
            {/* Topic Header */}
            <div className="border-b border-gray-700 pb-3 mb-3">
              <h3 className="font-bold text-lg tracking-tight text-white">{popupData.topicName}</h3>
              <div className="flex items-baseline gap-3 mt-2">
                <span
                  className="text-2xl font-bold tabular-nums"
                  style={{
                    color: popupData.changePercent > 0 ? '#22c55e' :
                           popupData.changePercent < 0 ? '#ef4444' : '#9ca3af'
                  }}
                >
                  {popupData.changePercent > 0 ? '▲' : popupData.changePercent < 0 ? '▼' : '−'}
                  {' '}
                  {Math.abs(popupData.changePercent).toFixed(1)}%
                </span>
                <div className="text-xs text-gray-400 leading-relaxed">
                  <div className="font-semibold text-white">{popupData.todayCount.toLocaleString()} articles today</div>
                  <div>{popupData.yesterdayCount.toLocaleString()} yesterday</div>
                </div>
              </div>
            </div>

            {/* Outlet Breakdown */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                Outlet Coverage
              </h4>
              <div className="max-h-64 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                {popupData.outletBreakdown
                  .filter(o => o.count > 0)
                  .sort((a, b) => b.count - a.count)
                  .slice(0, 12) // Show top 12 outlets
                  .map((outlet, index) => {
                    const outletInfo = outlets.find(o => o.id === outlet.outletId)
                    if (!outletInfo) return null

                    return (
                      <div key={outlet.outletId}
                        className="flex items-center justify-between text-sm p-2 rounded-lg bg-gray-800/40 hover:bg-gray-800/60 transition-colors"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="text-xs text-gray-500 font-mono w-5 shrink-0">#{index + 1}</span>
                          <span className="font-semibold text-white truncate">{outletInfo.shortName}</span>
                          <div className="flex items-center gap-1.5 ml-auto shrink-0">
                            {/* Political Bias Indicator */}
                            <div
                              className="w-2.5 h-2.5 rounded-full ring-2 ring-gray-900"
                              style={{
                                backgroundColor: outlet.bias < -0.2 ? '#3b82f6' :
                                  outlet.bias > 0.2 ? '#ef4444' : '#6b7280'
                              }}
                              title={
                                outlet.bias < -0.2 ? 'Left-leaning' :
                                outlet.bias > 0.2 ? 'Right-leaning' : 'Center'
                              }
                            />
                            {/* Sentiment Indicator */}
                            <span className={`text-xs ${
                              outlet.sentiment > 0.2 ? 'text-green-400' :
                              outlet.sentiment < -0.2 ? 'text-red-400' : 'text-gray-400'
                            }`}>
                              {outlet.sentiment > 0.2 ? '●' : outlet.sentiment < -0.2 ? '●' : '●'}
                            </span>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-gray-200 ml-3 tabular-nums">{outlet.count}</span>
                      </div>
                    )
                  })}
              </div>
            </div>

            {/* Legend */}
            <div className="border-t border-gray-700 pt-3 mt-3 flex gap-5 text-[10px] text-gray-400">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span>Left</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                <span>Center</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span>Right</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
      `}</style>
    </div>
  )
}
