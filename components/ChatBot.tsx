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
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 transition-all duration-300 ${
        panelOpen ? 'max-w-[calc(100vw-660px)]' : 'max-w-3xl'
      }`}
    >
      {/* Expanded conversation view */}
      {isExpanded && messages.length > 0 && (
        <div className="mb-4 bg-white border border-gray-300 rounded-sm shadow-sm max-h-96 overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-300 px-4 py-3 flex items-center justify-between">
            <h3 className="font-headline text-base font-semibold text-black">Analysis by Rory Stewart</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handleMinimize}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Minimize"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={handleClear}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Clear conversation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="px-4 py-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block max-w-[85%] ${
                  message.role === 'user'
                    ? 'bg-gray-100 text-black'
                    : 'bg-white text-black border border-gray-200'
                } px-4 py-3 rounded-sm`}>
                  {message.role === 'assistant' && (
                    <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Rory Stewart</div>
                  )}
                  <p className="text-sm font-body leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="text-left">
                <div className="inline-block bg-white border border-gray-200 px-4 py-3 rounded-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-gray-600 animate-spin" />
                    <span className="text-sm text-gray-600">Analyzing...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Input pill */}
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about world politics..."
          disabled={isLoading}
          className="w-full bg-white border-2 border-black text-black rounded-full px-6 py-3 pr-24 focus:outline-none focus:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed font-body text-sm shadow-lg transition-all"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {messages.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-600 hover:text-black transition-colors px-2"
              aria-label="Clear"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all"
          >
            Ask
          </button>
        </div>
      </form>
    </div>
  )
}
