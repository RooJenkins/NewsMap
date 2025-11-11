'use client'

import { useMemo, useState } from 'react'
import { ViewType, HeatmapCell } from '@/types'
import {
  outlets,
  topics,
  generateFrequencyData,
  generateSentimentData,
  generatePoliticalData,
  generateTruthSpectrumData
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

    if (viewType === 'truth-spectrum') {
      const data = generateTruthSpectrumData()
      return data.map(d => ({
        outletId: d.outletId,
        topicId: d.topicId,
        value: d.outletPosition,
        magnitude: d.distanceFromTruth / 20, // Normalize to 0-1
        truthPosition: d.truthPosition,
        distanceFromTruth: d.distanceFromTruth,
        displayValue: `${d.outletPosition}`,
        tooltip: `${outlets.find(o => o.id === d.outletId)?.name} - ${topics.find(t => t.id === d.topicId)?.name}: Position ${d.outletPosition} | Truth at ${d.truthPosition} | Distance: ${d.distanceFromTruth.toFixed(1)}`
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

  // Helper function to interpolate between colors
  const interpolateColor = (color1: number[], color2: number[], factor: number): string => {
    const r = Math.round(color1[0] + (color2[0] - color1[0]) * factor)
    const g = Math.round(color1[1] + (color2[1] - color1[1]) * factor)
    const b = Math.round(color1[2] + (color2[2] - color1[2]) * factor)
    return `rgb(${r}, ${g}, ${b})`
  }

  const getCellColor = (cell: HeatmapCell): string => {
    if (viewType === 'frequency') {
      // Blue (low) to Red (high) gradient
      const white = [255, 255, 255]
      const lightBlue = [147, 197, 253]
      const blue = [59, 130, 246]
      const yellow = [234, 179, 8]
      const orange = [249, 115, 22]
      const red = [220, 38, 38]

      if (cell.magnitude < 0.2) {
        return interpolateColor(white, lightBlue, cell.magnitude * 5)
      } else if (cell.magnitude < 0.4) {
        return interpolateColor(lightBlue, blue, (cell.magnitude - 0.2) * 5)
      } else if (cell.magnitude < 0.6) {
        return interpolateColor(blue, yellow, (cell.magnitude - 0.4) * 5)
      } else if (cell.magnitude < 0.8) {
        return interpolateColor(yellow, orange, (cell.magnitude - 0.6) * 5)
      } else {
        return interpolateColor(orange, red, (cell.magnitude - 0.8) * 5)
      }
    }

    if (viewType === 'sentiment') {
      // Red (negative) through white (neutral) to green (positive)
      const red = [220, 38, 38]
      const lightRed = [254, 202, 202]
      const white = [255, 255, 255]
      const lightGreen = [187, 247, 208]
      const green = [22, 163, 74]

      if (cell.value < 0) {
        // Negative: red gradient
        const absValue = Math.abs(cell.value)
        if (absValue < 0.5) {
          return interpolateColor(white, lightRed, absValue * 2)
        } else {
          return interpolateColor(lightRed, red, (absValue - 0.5) * 2)
        }
      } else {
        // Positive: green gradient
        if (cell.value < 0.5) {
          return interpolateColor(white, lightGreen, cell.value * 2)
        } else {
          return interpolateColor(lightGreen, green, (cell.value - 0.5) * 2)
        }
      }
    }

    if (viewType === 'truth-spectrum') {
      // Color based on distance from truth
      // Close to truth = green, far from truth = red
      const green = [22, 163, 74]
      const yellow = [234, 179, 8]
      const orange = [249, 115, 22]
      const red = [220, 38, 38]

      const distance = cell.distanceFromTruth || 0
      if (distance < 3) {
        return interpolateColor(green, yellow, distance / 3)
      } else if (distance < 7) {
        return interpolateColor(yellow, orange, (distance - 3) / 4)
      } else {
        return interpolateColor(orange, red, Math.min((distance - 7) / 6, 1))
      }
    }

    // Political: Red (right) through white (center) to blue (left)
    const red = [220, 38, 38]
    const lightRed = [254, 202, 202]
    const white = [255, 255, 255]
    const lightBlue = [191, 219, 254]
    const blue = [29, 78, 216]

    if (cell.value > 0) {
      // Right-leaning: red gradient
      if (cell.value < 0.5) {
        return interpolateColor(white, lightRed, cell.value * 2)
      } else {
        return interpolateColor(lightRed, red, (cell.value - 0.5) * 2)
      }
    } else {
      // Left-leaning: blue gradient
      const absValue = Math.abs(cell.value)
      if (absValue < 0.5) {
        return interpolateColor(white, lightBlue, absValue * 2)
      } else {
        return interpolateColor(lightBlue, blue, (absValue - 0.5) * 2)
      }
    }
  }

  const renderCell = (outletId: string, topicId: string) => {
    const cell = getCell(outletId, topicId)
    if (!cell) return null

    const isHovered = hoveredCell?.outletId === outletId && hoveredCell?.topicId === topicId
    const bgColor = getCellColor(cell)

    // For truth spectrum, always show numbers
    if (viewType === 'truth-spectrum') {
      return (
        <div
          className={`relative flex items-center justify-center h-full transition-all duration-200 cursor-pointer ${
            isHovered ? 'ring-4 ring-purple-500 ring-inset z-10 shadow-lg' : ''
          }`}
          style={{
            backgroundColor: bgColor,
          }}
          onMouseEnter={() => setHoveredCell(cell)}
          onMouseLeave={() => setHoveredCell(null)}
        >
          <div className="flex flex-col items-center justify-center text-xs font-bold">
            <span className="text-gray-900">{cell.value}</span>
            {cell.truthPosition !== undefined && (
              <span className="text-[10px] text-gray-700 mt-0.5">
                T:{cell.truthPosition}
              </span>
            )}
          </div>
        </div>
      )
    }

    return (
      <div
        className={`relative flex items-center justify-center h-full transition-all duration-200 cursor-pointer ${
          isHovered ? 'ring-4 ring-blue-500 ring-inset z-10 shadow-lg' : ''
        }`}
        style={{
          backgroundColor: bgColor,
        }}
        onMouseEnter={() => setHoveredCell(cell)}
        onMouseLeave={() => setHoveredCell(null)}
      >
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 text-xs font-bold text-white">
            {viewType === 'frequency' && (
              <span>{(cell.magnitude * 100).toFixed(0)}%</span>
            )}
            {viewType === 'sentiment' && (
              <span>{cell.value > 0 ? '+' : ''}{(cell.value * 100).toFixed(0)}</span>
            )}
            {viewType === 'political' && (
              <span>{cell.value > 0 ? 'R' : 'L'} {(Math.abs(cell.value) * 100).toFixed(0)}</span>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 overflow-x-auto">
      {/* Tooltip */}
      {hoveredCell && (
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg text-sm shadow-sm">
          <strong className="text-gray-900">{hoveredCell.tooltip}</strong>
          {hoveredCell.displayValue && (
            <span className="ml-2 text-gray-600">({hoveredCell.displayValue})</span>
          )}
        </div>
      )}

      {/* Heatmap Table */}
      <div className="overflow-x-auto">
        <table className="border-collapse border-2 border-gray-300 w-full">
          {/* Header Row - Outlets across top */}
          <thead>
            <tr>
              <th className="sticky left-0 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 p-3 font-bold text-gray-800 text-left min-w-[200px] z-20">
                Topic
              </th>
              {outlets.map(outlet => (
                <th
                  key={outlet.id}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 p-3 text-center font-bold text-xs text-gray-800 min-w-[80px]"
                >
                  {outlet.shortName}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body - Topics down left side */}
          <tbody>
            {topics.map(topic => (
              <tr key={topic.id}>
                {/* Topic Label */}
                <td className="sticky left-0 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 p-3 font-semibold text-sm text-gray-800 z-10">
                  {topic.name}
                </td>

                {/* Data Cells */}
                {outlets.map(outlet => (
                  <td
                    key={`${topic.id}-${outlet.id}`}
                    className="border border-gray-200 p-0 h-20 w-20"
                  >
                    {renderCell(outlet.id, topic.id)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
