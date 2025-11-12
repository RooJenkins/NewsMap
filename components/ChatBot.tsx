'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Loader2, Minus } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatBotProps {
  panelOpen?: boolean
}

export default function ChatBot({ panelOpen = false }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)
    setIsExpanded(true)

    try {
      console.log('Sending message to API:', userMessage)

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages
        }),
      })

      console.log('API response status:', response.status)

      if (!response.ok) {
        const errorData = await response.json()
        console.error('API error:', errorData)
        throw new Error(errorData.error || 'Failed to get response')
      }

      const data = await response.json()
      console.log('Got response from API')

      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error: any) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `An error occurred: ${error.message}. Please try again.`
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleMinimize = () => {
    setIsExpanded(false)
  }

  const handleClear = () => {
    setMessages([])
    setIsExpanded(false)
    setInput('')
  }

  return (
    <div
      className={`fixed bottom-8 z-50 w-full px-4 transition-all duration-300 ${
        panelOpen
          ? 'left-0 right-[600px]'
          : 'left-1/2 transform -translate-x-1/2 max-w-3xl'
      }`}
      style={panelOpen ? { maxWidth: 'calc(100vw - 600px)' } : undefined}
    >
      {/* Expanded conversation view with vibrant FT styling */}
      {isExpanded && messages.length > 0 && (
        <div className="mb-4 bg-white border-4 border-ft-oxford rounded-3xl shadow-2xl max-h-96 overflow-y-auto">
          {/* Header with vibrant gradient and accents */}
          <div className="sticky top-0 bg-gradient-to-r from-ft-oxford to-ft-teal border-b-4 border-ft-claret px-6 py-4 flex items-center justify-between shadow-md">
            <h3 className="font-headline text-xl font-black text-white">Analysis by Rory Stewart</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handleMinimize}
                className="ft-pill bg-white text-ft-oxford hover:bg-ft-sky hover:scale-110 transition-all font-bold shadow-md"
                aria-label="Minimize"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={handleClear}
                className="ft-pill bg-ft-claret text-white hover:bg-ft-mandarin hover:scale-110 transition-all font-bold shadow-md"
                aria-label="Clear conversation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages with sleek styling */}
          <div className="px-6 py-6 space-y-5 bg-gradient-to-br from-ft-pink/20 via-white to-ft-sky/10">
            {messages.map((message, index) => (
              <div key={index} className={`${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block max-w-[85%] ${
                  message.role === 'user'
                    ? 'bg-gradient-to-br from-ft-oxford to-ft-teal text-white shadow-lg'
                    : 'bg-white text-ft-black border-l-4 border-ft-oxford shadow-md'
                } px-6 py-4 rounded-2xl transform hover:scale-[1.02] transition-transform`}>
                  {message.role === 'assistant' && (
                    <div className="ft-pill bg-gradient-to-r from-ft-oxford to-ft-teal text-white text-xs mb-3 inline-block px-4 py-1.5 font-bold shadow-sm">Rory Stewart</div>
                  )}
                  <p className="text-sm font-body leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="text-left">
                <div className="inline-block bg-white border-2 border-ft-teal px-5 py-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-ft-oxford animate-spin" />
                    <span className="text-sm text-ft-slate font-medium">Analyzing...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Input pill with sleek, modern FT styling */}
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about world politics..."
          disabled={isLoading}
          className="w-full bg-white border-4 border-ft-oxford text-ft-black rounded-full px-7 py-5 pr-32 focus:outline-none focus:border-ft-teal focus:ring-4 focus:ring-ft-sky/50 disabled:opacity-50 disabled:cursor-not-allowed font-body text-base shadow-2xl transition-all hover:shadow-3xl"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {messages.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="ft-pill bg-ft-claret text-white hover:bg-ft-mandarin hover:scale-110 transition-all px-4 py-2.5 shadow-md font-bold"
              aria-label="Clear"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="ft-pill bg-gradient-to-r from-ft-oxford to-ft-teal hover:from-ft-teal hover:to-ft-oxford disabled:bg-ft-wasabi disabled:cursor-not-allowed text-white px-6 py-2.5 font-bold text-sm uppercase tracking-wide shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Ask
          </button>
        </div>
      </form>
    </div>
  )
}
