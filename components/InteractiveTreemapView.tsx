'use client'

import { useMemo, useState, useEffect } from 'react'
import { Treemap, ResponsiveContainer } from 'recharts'
import { topics, outlets, generateTopicArticleData } from '@/lib/mockData'
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

        // Color based on change percent
        const getChangeColor = (change: number): string => {
          if (change > 20) return '#16a34a' // Deep green
          if (change > 10) return '#22c55e' // Green
          if (change > 5) return '#4ade80' // Light green
          if (change > -5) return '#6b7280' // Gray (neutral)
          if (change > -10) return '#f87171' // Light red
          if (change > -20) return '#ef4444' // Red
          return '#dc2626' // Deep red
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

      // Calculate total size for main category
      const totalSize = children.reduce((sum, child) => sum + (child.size || 0), 0)

      return {
        name: mainCat.name,
        children,
        size: totalSize
      }
    }).filter(cat => cat.children && cat.children.length > 0)

    return hierarchical
  }, [])

  const CustomContent = (props: any) => {
    const { x, y, width, height, name, changePercent, topicId, fill, data } = props

    // Only show label if box is large enough
    const showLabel = width > 50 && height > 25

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
            stroke: isHovered ? '#fff' : '#222',
            strokeWidth: isHovered ? 2 : 0.5,
            cursor: 'pointer',
            opacity: isHovered ? 1 : 0.9,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showLabel && (
          <>
            <text
              x={x + width / 2}
              y={y + height / 2 - 6}
              textAnchor="middle"
              fill="#fff"
              fontSize={Math.min(width / 10, height / 4, 11)}
              fontWeight="bold"
            >
              {name}
            </text>
            <text
              x={x + width / 2}
              y={y + height / 2 + 8}
              textAnchor="middle"
              fill="#fff"
              fontSize={Math.min(width / 12, height / 5, 10)}
              fontWeight="600"
            >
              {changePercent !== undefined && `${changePercent > 0 ? '+' : ''}${changePercent.toFixed(1)}%`}
            </text>
          </>
        )}
      </g>
    )
  }

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-2 h-[80vh]">
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={treeData}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#222"
          fill="#8884d8"
          content={<CustomContent />}
        />
      </ResponsiveContainer>

      {/* Floating Popup next to mouse cursor */}
      {popupData && (
        <div
          className="fixed z-50 bg-gray-900 text-white p-4 rounded-lg shadow-2xl border border-gray-700 max-w-sm"
          style={{
            left: `${mousePos.x + 20}px`,
            top: `${mousePos.y + 10}px`,
            pointerEvents: 'none' // Don't interfere with mouse events
          }}
        >
          {/* Topic Header */}
          <div className="border-b border-gray-700 pb-2 mb-2">
            <h3 className="font-bold text-base">{popupData.topicName}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold" style={{
                color: popupData.changePercent > 0 ? '#22c55e' : popupData.changePercent < 0 ? '#ef4444' : '#6b7280'
              }}>
                {popupData.changePercent > 0 ? '+' : ''}{popupData.changePercent.toFixed(1)}%
              </span>
              <span className="text-xs text-gray-400">
                {popupData.todayCount} articles today ({popupData.yesterdayCount} yesterday)
              </span>
            </div>
          </div>

          {/* Outlet Breakdown */}
          <div className="space-y-1">
            <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Outlet Coverage</h4>
            <div className="max-h-48 overflow-y-auto space-y-1.5">
              {popupData.outletBreakdown
                .filter(o => o.count > 0)
                .sort((a, b) => b.count - a.count)
                .slice(0, 10) // Show top 10 outlets
                .map(outlet => {
                  const outletInfo = outlets.find(o => o.id === outlet.outletId)
                  if (!outletInfo) return null

                  return (
                    <div key={outlet.outletId} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="font-semibold">{outletInfo.shortName}</span>
                        <div className="flex-1 flex items-center gap-1">
                          {/* Bias indicator */}
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: outlet.bias < -0.2 ? '#3b82f6' :
                                outlet.bias > 0.2 ? '#ef4444' : '#6b7280'
                            }}
                            title={outlet.bias < 0 ? 'Left-leaning' : outlet.bias > 0 ? 'Right-leaning' : 'Center'}
                          />
                          {/* Sentiment indicator */}
                          <span className={`text-[10px] ${
                            outlet.sentiment > 0.2 ? 'text-green-400' :
                            outlet.sentiment < -0.2 ? 'text-red-400' : 'text-gray-400'
                          }`}>
                            {outlet.sentiment > 0.2 ? '😊' : outlet.sentiment < -0.2 ? '😞' : '😐'}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-gray-300">{outlet.count}</span>
                    </div>
                  )
                })}
            </div>
          </div>

          {/* Legend */}
          <div className="border-t border-gray-700 pt-2 mt-2 flex gap-4 text-[10px] text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Left</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-gray-500" />
              <span>Center</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span>Right</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
