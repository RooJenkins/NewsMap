import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Loader2 } from 'lucide-react'

// Dynamically import the GlobalNewsFeed component to avoid SSR issues with Leaflet
const GlobalNewsFeed = dynamic(
  () => import('@/components/GlobalNewsFeed'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-ft-pink">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-ft-oxford animate-spin mx-auto mb-4" />
          <p className="text-ft-black font-headline text-xl">Loading global news...</p>
        </div>
      </div>
    )
  }
)

export const metadata = {
  title: 'Global News - Top 100 Stories | NewsMap',
  description: 'Curated global news briefing featuring the top 100 stories from around the world, written in the style of The Rest is Politics hosts.',
}

export default function GlobalNewsPage() {
  return (
    <main className="h-screen overflow-hidden">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-ft-pink">
            <div className="text-center">
              <Loader2 className="w-16 h-16 text-ft-oxford animate-spin mx-auto mb-4" />
              <p className="text-ft-black font-headline text-xl">Loading global news...</p>
            </div>
          </div>
        }
      >
        <GlobalNewsFeed />
      </Suspense>
    </main>
  )
}
