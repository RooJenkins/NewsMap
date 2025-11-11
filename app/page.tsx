'use client'

import { useState } from 'react'
import NewsHeatmap from '@/components/NewsHeatmap'
import { ViewType } from '@/types'

export default function Home() {
  const [viewType, setViewType] = useState<ViewType>('frequency')
  const [normalized, setNormalized] = useState(false)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">NewsMap</h1>
          <p className="text-gray-600 text-lg">
            Visualize and analyze how different news outlets cover topics
          </p>
        </header>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            {/* View Type Selector */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewType('frequency')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewType === 'frequency'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Frequency
              </button>
              <button
                onClick={() => setViewType('sentiment')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewType === 'sentiment'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Sentiment
              </button>
              <button
                onClick={() => setViewType('political')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewType === 'political'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Political Bias
              </button>
            </div>

            {/* Normalization Toggle */}
            <div className="flex items-center gap-2 ml-auto">
              <label htmlFor="normalized" className="text-sm font-medium text-gray-700">
                Normalized
              </label>
              <button
                id="normalized"
                onClick={() => setNormalized(!normalized)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  normalized ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    normalized ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* View Type Description */}
          <div className="mt-4 text-sm text-gray-600">
            {viewType === 'frequency' && (
              <p>
                ↑ and ↓ arrows show how frequently each outlet covers each topic.
                {normalized && ' Values are normalized relative to total article output.'}
              </p>
            )}
            {viewType === 'sentiment' && (
              <p>
                Green (positive) and Red (negative) colors show the sentiment of coverage.
                Arrow direction indicates positive/negative lean.
              </p>
            )}
            {viewType === 'political' && (
              <p>
                ← and → arrows show political bias in coverage.
                Blue indicates left-leaning, pink indicates right-leaning.
              </p>
            )}
          </div>
        </div>

        {/* Heatmap */}
        <NewsHeatmap viewType={viewType} normalized={normalized} />

        {/* Legend */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <h3 className="font-semibold text-gray-900 mb-4">Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {viewType === 'frequency' && (
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Frequency</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">↑</span>
                    <span>High coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">↓</span>
                    <span>Low coverage</span>
                  </div>
                  <div className="text-gray-500">Size indicates magnitude</div>
                </div>
              </div>
            )}
            {viewType === 'sentiment' && (
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Sentiment</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-positive rounded"></div>
                    <span>Positive coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-negative rounded"></div>
                    <span>Negative coverage</span>
                  </div>
                  <div className="text-gray-500">Intensity shows magnitude</div>
                </div>
              </div>
            )}
            {viewType === 'political' && (
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Political Bias</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-left rounded"></div>
                    <span className="text-2xl">←</span>
                    <span>Left-leaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-right rounded"></div>
                    <span className="text-2xl">→</span>
                    <span>Right-leaning</span>
                  </div>
                  <div className="text-gray-500">Arrow size shows magnitude</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
