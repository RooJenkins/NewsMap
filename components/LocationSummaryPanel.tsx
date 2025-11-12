'use client'

import { X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface LocationSummary {
  id: string
  name: string
  type: string
  country: string
  summary: string
  issues: string[]
  topStories: Array<{
    title: string
    source: string
    link: string
    pubDate: string
  }>
  storyCount: number
  updatedAt: string
}

interface LocationSummaryPanelProps {
  location: LocationSummary
  onClose: () => void
}

export default function LocationSummaryPanel({ location, onClose }: LocationSummaryPanelProps) {
  const timeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))

    if (diffHours < 1) return 'Just now'
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
  }

  return (
    <div className="fixed top-0 right-0 w-[600px] h-full bg-white shadow-2xl overflow-y-auto z-[10000] animate-slideIn">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-lg z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 hover:bg-white/20 rounded-full p-2 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="pr-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">
              {location.type === 'country' ? '🌍' : '🏙️'}
            </span>
            <h2 className="text-3xl font-bold">{location.name}</h2>
          </div>
          <p className="text-blue-100 text-sm">
            {location.type === 'country' ? 'Country Analysis' : `City in ${location.country}`}
          </p>
        </div>
      </div>

      {/* Metadata */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              📊 <strong>{location.storyCount}</strong> stories analyzed
            </span>
            <span className="text-gray-600">
              ⚠️ <strong>{location.issues.length}</strong> major issues
            </span>
          </div>
          <div className="text-gray-500 text-xs">
            Updated {timeAgo(location.updatedAt)}
          </div>
        </div>
      </div>

      {/* AI Summary */}
      <div className="p-6">
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mb-6 text-gray-900">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-gray-900">{children}</strong>
              ),
            }}
          >
            {location.summary}
          </ReactMarkdown>
        </div>

        {/* Top Stories Section */}
        {location.topStories && location.topStories.length > 0 && (
          <div className="mt-8 pt-8 border-t-2 border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <span>📰</span> Latest {location.name} News
            </h3>
            <div className="space-y-3">
              {location.topStories.map((story, index) => (
                <a
                  key={index}
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 mb-1 leading-snug">
                        {story.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="font-medium">{story.source}</span>
                        <span>•</span>
                        <span>{new Date(story.pubDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm text-gray-700">
          <p className="font-semibold mb-1">About this analysis</p>
          <p className="text-xs leading-relaxed">
            This AI-generated summary analyzes {location.storyCount} recent news stories
            about {location.name} to identify key issues, trends, and prospects. The analysis
            is designed for business, investment, and policy professionals tracking
            developments in this region.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .prose strong {
          font-weight: 700;
        }
      `}</style>
    </div>
  )
}
