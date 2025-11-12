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
    <div className="fixed top-0 right-0 w-[600px] h-full bg-white shadow-2xl overflow-y-auto z-[10000] animate-slideIn border-l-8 border-ft-oxford">
      {/* Header with vibrant gradient and blue/red accents */}
      <div className="sticky top-0 bg-gradient-to-br from-ft-pink via-white to-ft-sky/20 border-b-4 border-ft-oxford p-6 z-10 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 ft-pill bg-ft-claret text-white hover:bg-ft-oxford transition-all hover:scale-110 shadow-md"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="pr-14">
          <h2 className="font-headline text-5xl font-black text-ft-oxford mb-3 leading-tight border-l-6 border-ft-claret pl-4 bg-gradient-to-r from-ft-oxford to-ft-teal bg-clip-text text-transparent">
            {location.name}
          </h2>
          <p className="ft-pill bg-gradient-to-r from-ft-oxford to-ft-teal text-white text-sm font-bold shadow-md inline-block">
            {location.type === 'country' ? 'Country Analysis' : location.country}
          </p>
        </div>
      </div>

      {/* Metadata bar with clean spacing */}
      <div className="bg-gradient-to-r from-ft-oxford/10 via-ft-sky/20 to-ft-claret/10 border-b-2 border-ft-teal px-6 py-3">
        <div className="flex items-center justify-between text-xs font-body">
          <div className="flex items-center gap-3">
            <span className="ft-pill bg-white border-2 border-ft-oxford text-ft-oxford font-bold shadow-sm">
              {location.storyCount} stories
            </span>
            <span className="ft-pill bg-white border-2 border-ft-claret text-ft-claret font-bold shadow-sm">
              {location.issues.length} issues
            </span>
          </div>
          <span className="ft-pill bg-white border-2 border-ft-teal text-ft-slate font-semibold shadow-sm">
            Updated {timeAgo(location.updatedAt)}
          </span>
        </div>
      </div>

      {/* AI Summary with FT styling */}
      <div className="p-6 bg-white">
        <div className="prose prose-sm max-w-none font-body">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="font-headline text-3xl font-bold mb-6 text-ft-oxford leading-tight border-b-4 border-ft-oxford pb-3 border-l-6 border-ft-claret pl-4 bg-gradient-to-r from-ft-oxford to-ft-teal bg-clip-text text-transparent">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-ft-oxford border-l-6 border-ft-claret pl-4 py-3 bg-gradient-to-r from-ft-pink to-ft-sky/30 shadow-sm">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-headline text-xl font-bold mt-6 mb-3 text-ft-claret border-b-2 border-ft-oxford/30 pb-2">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-ft-slate leading-relaxed mb-4 text-base">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-ft-slate">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-ft-black">{children}</strong>
              ),
            }}
          >
            {location.summary}
          </ReactMarkdown>
        </div>

        {/* Top Stories Section with clean layout */}
        {location.topStories && location.topStories.length > 0 && (
          <div className="mt-8 pt-8 border-t-4 border-ft-oxford">
            <h3 className="font-headline text-2xl font-bold mb-6 text-ft-oxford border-l-6 border-ft-claret pl-4 bg-gradient-to-r from-ft-oxford to-ft-teal bg-clip-text text-transparent">
              Latest News
            </h3>
            <div className="space-y-4">
              {location.topStories.map((story, index) => (
                <a
                  key={index}
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 p-5 bg-gradient-to-r from-white to-ft-pink/30 hover:from-ft-sky/20 hover:to-ft-pink rounded-2xl border-l-4 border-ft-oxford hover:border-ft-claret hover:shadow-xl transition-all group transform hover:-translate-y-1"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body font-bold text-ft-black group-hover:text-ft-oxford mb-3 leading-snug text-base">
                      {story.title}
                    </h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="ft-pill bg-gradient-to-r from-ft-oxford to-ft-teal text-white text-xs px-4 py-1.5 font-bold shadow-sm whitespace-nowrap">
                        {story.source}
                      </span>
                      <span className="ft-pill bg-white border-2 border-ft-wheat text-ft-slate text-xs px-3 py-1 whitespace-nowrap">
                        {new Date(story.pubDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="ft-pill bg-ft-claret group-hover:bg-ft-oxford text-white p-2.5 shadow-md transition-all flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

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
