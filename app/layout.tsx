import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NewsMap - Media Coverage Analysis',
  description: 'Visualize and analyze how different news outlets cover topics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
