'use client'

import { useMemo, useState } from 'react'
import { ViewType, HeatmapCell } from '@/types'
import {
  outlets,
  topics,
  generateFrequencyData,
  generateSentimentData,
  generatePoliticalData
} from '@/lib/mockData'

interface NewsHeatmapProps {
  viewType: ViewType
  normalized: boolean
}

export default function NewsHeatmap({ viewType, normalized }: NewsHeatmapProps) {
  const [hoveredCell, setHoveredCell] = useState<HeatmapCell | null>(null)

  // Generate heatmap cells based on view type
  const cells: HeatmapCell[] = useMemo(() => {
    if (viewType === 'frequency') {
      const data = generateFrequencyData()
      return data.map(d => ({
        outletId: d.outletId,
        topicId: d.topicId,
        value: normalized ? d.normalized : d.articleCount / 300, // Normalize for display
        magnitude: normalized ? d.normalized : d.articleCount / 300,
        displayValue: normalized
          ? `${(d.normalized * 100).toFixed(1)}%`
          : `${d.articleCount} articles`,
        tooltip: `${outlets.find(o => o.id === d.outletId)?.name} - ${topics.find(t => t.id === d.topicId)?.name}: ${d.articleCount} articles${normalized ? ` (${(d.normalized * 100).toFixed(1)}%)` : ''}`
      }))
    }

    if (viewType === 'sentiment') {
      const data = generateSentimentData()
      return data.map(d => ({
        outletId: d.outletId,
        topicId: d.topicId,
        value: d.sentiment,
        magnitude: d.magnitude,
        tooltip: `${outlets.find(o => o.id === d.outletId)?.name} - ${topics.find(t => t.id === d.topicId)?.name}: ${d.sentiment > 0 ? 'Positive' : 'Negative'} (${(d.sentiment * 100).toFixed(0)}%)`
      }))
    }

    // political
    const data = generatePoliticalData()
    return data.map(d => ({
      outletId: d.outletId,
      topicId: d.topicId,
      value: d.bias,
      magnitude: d.magnitude,
      tooltip: `${outlets.find(o => o.id === d.outletId)?.name} - ${topics.find(t => t.id === d.topicId)?.name}: ${d.bias < 0 ? 'Left' : 'Right'}-leaning (${Math.abs(d.bias * 100).toFixed(0)}%)`
    }))
  }, [viewType, normalized])

  const getCell = (outletId: string, topicId: string): HeatmapCell | undefined => {
    return cells.find(c => c.outletId === outletId && c.topicId === topicId)
  }

  const renderCell = (outletId: string, topicId: string) => {
    const cell = getCell(outletId, topicId)
    if (!cell) return null

    const isHovered = hoveredCell?.outletId === outletId && hoveredCell?.topicId === topicId

    if (viewType === 'frequency') {
      // Show up/down arrows based on magnitude
      const arrow = cell.value > 0.5 ? '↑' : '↓'
      const size = Math.max(0.5, cell.magnitude) // Min size for visibility
      const opacity = Math.max(0.3, cell.magnitude)

      return (
        <div
          className={`relative flex items-center justify-center h-full transition-all ${
            isHovered ? 'bg-blue-100 scale-110 z-10' : 'bg-gray-50'
          }`}
          style={{
            fontSize: `${size * 2}rem`,
            opacity: opacity,
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHoveredCell(cell)}
          onMouseLeave={() => setHoveredCell(null)}
        >
          <span className="text-gray-700">{arrow}</span>
        </div>
      )
    }

    if (viewType === 'sentiment') {
      // Show color based on sentiment
      const isPositive = cell.value > 0
      const intensity = cell.magnitude
      const bgColor = isPositive
        ? `rgba(34, 197, 94, ${intensity})` // green
        : `rgba(239, 68, 68, ${intensity})` // red
      const arrow = isPositive ? '↑' : '↓'
      const size = Math.max(0.5, intensity)

      return (
        <div
          className={`relative flex items-center justify-center h-full transition-all ${
            isHovered ? 'scale-110 z-10' : ''
          }`}
          style={{
            backgroundColor: bgColor,
            fontSize: `${size * 1.5}rem`,
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHoveredCell(cell)}
          onMouseLeave={() => setHoveredCell(null)}
        >
          <span className="text-white font-bold">{arrow}</span>
        </div>
      )
    }

    // Political bias view
    const isLeft = cell.value < 0
    const intensity = cell.magnitude
    const bgColor = isLeft
      ? `rgba(59, 130, 246, ${intensity})` // blue
      : `rgba(236, 72, 153, ${intensity})` // pink
    const arrow = isLeft ? '←' : '→'
    const size = Math.max(0.5, intensity)

    return (
      <div
        className={`relative flex items-center justify-center h-full transition-all ${
          isHovered ? 'scale-110 z-10' : ''
        }`}
        style={{
          backgroundColor: bgColor,
          fontSize: `${size * 1.5}rem`,
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHoveredCell(cell)}
        onMouseLeave={() => setHoveredCell(null)}
      >
        <span className="text-white font-bold">{arrow}</span>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 overflow-x-auto">
      {/* Tooltip */}
      {hoveredCell && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm">
          <strong>{hoveredCell.tooltip}</strong>
          {hoveredCell.displayValue && (
            <span className="ml-2 text-gray-600">({hoveredCell.displayValue})</span>
          )}
        </div>
      )}

      {/* Heatmap Grid */}
      <div className="inline-block min-w-full">
        <div className="grid gap-0 border border-gray-300">
          {/* Header Row */}
          <div className="contents">
            <div className="sticky left-0 bg-gray-100 border-b border-r border-gray-300 p-2 font-semibold min-w-[150px]">
              Topic / Outlet
            </div>
            {outlets.map(outlet => (
              <div
                key={outlet.id}
                className="bg-gray-100 border-b border-r border-gray-300 p-2 text-center font-semibold min-w-[80px] text-xs"
              >
                {outlet.shortName}
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {topics.map(topic => (
            <div key={topic.id} className="contents">
              {/* Topic Label */}
              <div className="sticky left-0 bg-gray-50 border-b border-r border-gray-300 p-2 font-medium min-w-[150px] text-sm">
                {topic.name}
              </div>

              {/* Cells */}
              {outlets.map(outlet => (
                <div
                  key={`${topic.id}-${outlet.id}`}
                  className="border-b border-r border-gray-300 min-w-[80px] h-16"
                >
                  {renderCell(outlet.id, topic.id)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
