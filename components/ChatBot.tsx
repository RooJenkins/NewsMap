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
  const [loadingStatus, setLoadingStatus] = useState<string>('Thinking...')
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
    setLoadingStatus('Thinking...')

    // Add placeholder for streaming response
    const assistantMessageIndex = messages.length + 1

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

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let streamedText = ''

      if (!reader) {
        throw new Error('No reader available')
      }

      // Add empty assistant message that we'll update
      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()

        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6))

              if (data.type === 'text') {
                streamedText += data.content
                // Update the assistant message in real-time
                setMessages(prev => {
                  const newMessages = [...prev]
                  newMessages[assistantMessageIndex] = {
                    role: 'assistant',
                    content: streamedText
                  }
                  return newMessages
                })
              } else if (data.type === 'status') {
                setLoadingStatus(data.content)
              } else if (data.type === 'done') {
                console.log('Stream complete')
              } else if (data.type === 'error') {
                throw new Error(data.content)
              }
            } catch (parseError) {
              // Ignore parse errors for incomplete chunks
            }
          }
        }
      }
    } catch (error: any) {
      console.error('Chat error:', error)
      setMessages(prev => {
        const newMessages = [...prev]
        if (newMessages[assistantMessageIndex]) {
          newMessages[assistantMessageIndex] = {
            role: 'assistant',
            content: `An error occurred: ${error.message}. Please try again.`
          }
        } else {
          newMessages.push({
            role: 'assistant',
            content: `An error occurred: ${error.message}. Please try again.`
          })
        }
        return newMessages
      })
    } finally {
      setIsLoading(false)
      setLoadingStatus('Thinking...')
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
          ? 'left-0 right-[800px]'
          : 'left-1/2 transform -translate-x-1/2 max-w-3xl'
      }`}
      style={panelOpen ? { maxWidth: 'calc(100vw - 800px)' } : undefined}
    >
      {/* Expanded conversation view with vibrant FT styling */}
      {isExpanded && messages.length > 0 && (
        <div className="mb-4 bg-white border-2 border-ft-oxford rounded-2xl shadow-2xl max-h-96 overflow-hidden flex flex-col">
          {/* Header with vibrant gradient and accents */}
          <div className="sticky top-0 z-10 bg-ft-oxford border-b-2 border-ft-oxford px-6 py-4 flex items-center justify-end shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={handleMinimize}
                className="p-2.5 bg-white/90 hover:bg-white rounded-full transition-all border-2 border-ft-oxford shadow-lg"
                aria-label="Minimize"
              >
                <Minus className="w-5 h-5 text-ft-oxford" />
              </button>
              <button
                onClick={handleClear}
                className="p-2.5 bg-white/90 hover:bg-white rounded-full transition-all border-2 border-ft-claret shadow-lg"
                aria-label="Clear conversation"
              >
                <X className="w-5 h-5 text-ft-claret" />
              </button>
            </div>
          </div>

          {/* Messages with sleek styling */}
          <div className="px-4 py-4 space-y-3 bg-ft-pink/30 overflow-y-auto flex-1">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] min-w-0 ${
                  message.role === 'user'
                    ? 'bg-white text-black border border-ft-oxford'
                    : 'bg-white text-ft-black border border-ft-wheat'
                } px-4 py-3 rounded-2xl shadow-sm`}>
                  <p className="text-sm font-body leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-ft-wheat px-4 py-3 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-ft-oxford animate-spin" />
                    <span className="text-sm text-ft-slate font-medium">{loadingStatus}</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Input pill with pixel-perfect thin border */}
      <form onSubmit={handleSubmit} className="relative z-10">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about world politics..."
          disabled={isLoading}
          className={`w-full bg-white border-2 border-ft-oxford text-black rounded-full px-6 py-4 ${
            messages.length > 0 ? 'pr-16' : 'pr-6'
          } focus:outline-none focus:border-ft-teal focus:ring-2 focus:ring-ft-oxford/20 disabled:opacity-50 disabled:cursor-not-allowed font-body text-base shadow-xl transition-all hover:border-ft-teal placeholder:text-gray-400`}
        />
        {messages.length > 0 && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20">
            <button
              type="button"
              onClick={handleClear}
              className="ft-pill bg-ft-claret text-white hover:bg-ft-mandarin hover:scale-105 transition-all p-2.5 shadow-lg"
              aria-label="Clear"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
