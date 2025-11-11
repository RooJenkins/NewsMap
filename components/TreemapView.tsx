'use client'

import { useMemo, useState } from 'react'
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts'
import { topics, outlets, generateFrequencyData, generatePoliticalData } from '@/lib/mockData'

interface TreemapViewProps {
  normalized: boolean
}

interface TreemapNode {
  name: string
  size: number
  bias: number // -1 to 1
  fill: string
  value: number
  [key: string]: any // Allow additional properties for Recharts compatibility
}

export default function TreemapView({ normalized }: TreemapViewProps) {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)

  // Aggregate data by topic
  const treeData = useMemo(() => {
    const frequencyData = generateFrequencyData()
    const politicalData = generatePoliticalData()

    const topicMap = new Map<string, { totalFreq: number, totalBias: number, count: number }>()

    // Sum up frequency and bias across all outlets for each topic
    topics.forEach(topic => {
      const topicFreqs = frequencyData.filter(d => d.topicId === topic.id)
      const topicBiases = politicalData.filter(d => d.topicId === topic.id)

      const totalFreq = topicFreqs.reduce((sum, d) => sum + (normalized ? d.normalized : d.articleCount), 0)
      const avgBias = topicBiases.reduce((sum, d) => sum + d.bias, 0) / topicBiases.length

      topicMap.set(topic.id, {
        totalFreq,
        totalBias: avgBias,
        count: topicFreqs.length
      })
    })

    // Convert to treemap format
    const nodes: TreemapNode[] = topics.map(topic => {
      const data = topicMap.get(topic.id)!
      const bias = data.totalBias

      // Color based on bias: blue (left) to red (right)
      const getBiasColor = (bias: number): string => {
        if (bias < -0.4) return '#1e40af' // deep blue (far left)
        if (bias < -0.2) return '#3b82f6' // blue (left)
        if (bias < -0.1) return '#60a5fa' // light blue (center-left)
        if (bias < 0.1) return '#6b7280' // gray (center)
        if (bias < 0.2) return '#f87171' // light red (center-right)
        if (bias < 0.4) return '#ef4444' // red (right)
        return '#dc2626' // deep red (far right)
      }

      return {
        name: topic.name,
        size: data.totalFreq,
        bias: bias,
        fill: getBiasColor(bias),
        value: data.totalFreq
      }
    })

    // Sort by size (largest first)
    return nodes.sort((a, b) => b.size - a.size)
  }, [normalized])

  const CustomContent = (props: any) => {
    const { x, y, width, height, name, bias, size, fill } = props
    const isHovered = hoveredTopic === name

    // Only show label if box is large enough
    const showLabel = width > 60 && height > 30

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: fill,
            stroke: isHovered ? '#000' : '#fff',
            strokeWidth: isHovered ? 3 : 1,
            cursor: 'pointer',
            opacity: isHovered ? 0.9 : 0.85,
          }}
          onMouseEnter={() => setHoveredTopic(name)}
          onMouseLeave={() => setHoveredTopic(null)}
        />
        {showLabel && (
          <>
            <text
              x={x + width / 2}
              y={y + height / 2 - 8}
              textAnchor="middle"
              fill="#fff"
              fontSize={Math.min(width / 8, height / 4, 14)}
              fontWeight="bold"
            >
              {name}
            </text>
            <text
              x={x + width / 2}
              y={y + height / 2 + 8}
              textAnchor="middle"
              fill="#fff"
              fontSize={Math.min(width / 10, height / 5, 11)}
              opacity={0.9}
            >
              {bias > 0 ? '+' : ''}{(bias * 100).toFixed(0)}%
            </text>
          </>
        )}
      </g>
    )
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-gray-900 text-white p-3 rounded-lg shadow-lg border border-gray-700">
          <div className="font-bold text-sm mb-1">{data.name}</div>
          <div className="text-xs">
            <div>Coverage: {data.size.toFixed(0)}</div>
            <div>Bias: {data.bias > 0 ? 'Right' : data.bias < 0 ? 'Left' : 'Center'} ({(data.bias * 100).toFixed(1)}%)</div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-[75vh]">
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={treeData}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          content={<CustomContent />}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  )
}
