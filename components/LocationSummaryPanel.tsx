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
    <div className="fixed top-0 right-0 w-[600px] h-full bg-white shadow-2xl overflow-y-auto z-[10000] animate-slideIn border-l border-gray-300">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b-2 border-black p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 hover:bg-gray-100 rounded-sm p-2 transition-colors"
          aria-label="Close"
        >
          <X size={20} className="text-black" />
        </button>

        <div className="pr-12">
          <h2 className="font-headline text-4xl font-bold text-black mb-2 leading-tight">
            {location.name}
          </h2>
          <p className="font-body text-sm text-gray-600 uppercase tracking-wide">
            {location.type === 'country' ? 'Country Analysis' : `${location.country}`}
          </p>
        </div>
      </div>

      {/* Metadata */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between text-xs font-body">
          <div className="flex items-center gap-6 text-gray-700">
            <span>
              <strong className="font-semibold">{location.storyCount}</strong> stories
            </span>
            <span>
              <strong className="font-semibold">{location.issues.length}</strong> issues
            </span>
          </div>
          <div className="text-gray-500">
            Updated {timeAgo(location.updatedAt)}
          </div>
        </div>
      </div>

      {/* AI Summary */}
      <div className="p-6">
        <div className="prose prose-sm max-w-none font-body">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="font-headline text-3xl font-bold mb-6 text-black leading-tight">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-black border-b border-gray-300 pb-2">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-headline text-xl font-semibold mt-6 mb-3 text-black">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-800 leading-relaxed mb-4 text-base">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-black">{children}</strong>
              ),
            }}
          >
            {location.summary}
          </ReactMarkdown>
        </div>

        {/* Top Stories Section */}
        {location.topStories && location.topStories.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-300">
            <h3 className="font-headline text-xl font-bold mb-4 text-black">
              Latest News
            </h3>
            <div className="space-y-3">
              {location.topStories.map((story, index) => (
                <a
                  key={index}
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 hover:bg-gray-50 border border-gray-200 hover:border-gray-400 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-body font-semibold text-black group-hover:text-gray-700 mb-1 leading-snug text-sm">
                        {story.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500 font-body">
                        <span className="font-medium">{story.source}</span>
                        <span>•</span>
                        <span>{new Date(story.pubDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-black flex-shrink-0 mt-1"
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
        <div className="mt-8 p-4 bg-gray-50 border-l-2 border-gray-400 text-xs text-gray-700 font-body">
          <p className="font-semibold mb-1 text-black">About This Analysis</p>
          <p className="leading-relaxed">
            This analysis examines {location.storyCount} recent news stories
            about {location.name} to identify key developments, trends, and implications.
            Generated for policy, business, and research professionals.
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
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
