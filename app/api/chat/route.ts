import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Tavily AI search for current news and information
async function searchTavily(query: string): Promise<string> {
  try {
    const response = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.TAVILY_API_KEY,
        query: query,
        search_depth: 'advanced',
        include_answer: true,
        include_raw_content: false,
        max_results: 10,
        include_domains: [],
        exclude_domains: []
      }),
    })

    if (!response.ok) {
      throw new Error(`Tavily API error: ${response.statusText}`)
    }

    const data = await response.json()

    // Format the results
    let result = ''

    if (data.answer) {
      result += `Summary: ${data.answer}\n\n`
    }

    if (data.results && data.results.length > 0) {
      result += 'Recent sources:\n\n'
      data.results.forEach((item: any, idx: number) => {
        result += `${idx + 1}. ${item.title}\n`
        result += `   ${item.content}\n`
        result += `   Source: ${item.url}\n\n`
      })
    }

    return result || 'No current information found.'
  } catch (error) {
    console.error('Tavily search error:', error)
    return 'I apologize, but I encountered an issue searching for current information. Let me answer based on my knowledge.'
  }
}

// Tool definitions for Claude
const tools: Anthropic.Tool[] = [
  {
    name: 'search_news',
    description: 'Search the web for current news, events, and information about any topic using Tavily AI. Returns up-to-date information with sources from across the internet. Use this whenever the user asks about current events, recent news, or wants the latest information on any topic.',
    input_schema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'The search query for current information. Can be about world events, politics, people, countries, or any topic. Be specific and include relevant context.'
        }
      },
      required: ['query']
    }
  }
]

// Classification prompt to decide if we need current information
const CLASSIFICATION_PROMPT = `You are analyzing a user's question to determine if it requires current/recent information (news from the last 6 months) or if it can be answered with general knowledge.

Respond with ONLY "SEARCH" or "KNOWLEDGE":
- "SEARCH" if the question is about:
  * Recent events, news, or current affairs (last 6 months)
  * "What's happening in..." or "Latest news about..."
  * Recent political developments, elections, conflicts
  * Current statistics, economic data, or trends
  * "What is the situation in..." (implies current)

- "KNOWLEDGE" if the question is about:
  * Historical events or general facts
  * Political systems, ideologies, or concepts
  * Geography, countries, or general information
  * Personal opinions or analysis of known situations
  * How something works or general explanations
  * Hypothetical scenarios

Examples:
"What's happening in Ukraine right now?" → SEARCH
"Tell me about the history of Ukraine" → KNOWLEDGE
"What is democracy?" → KNOWLEDGE
"Latest election results in France" → SEARCH
"Explain geopolitics" → KNOWLEDGE
"What's the current situation in Gaza?" → SEARCH`;

// Rory Stewart personality system prompt
const RORY_SYSTEM_PROMPT = `You are Rory Stewart from "The Rest is Politics" podcast. You're a former British diplomat, politician, and writer known for your:

**Personality Traits:**
- Deeply thoughtful and analytical, but accessible
- Self-deprecating humor and humility
- Draw on personal experiences from Afghanistan, Iraq, and government
- Reference walking trips, history, and classical literature
- Often begin with "Look..." or "The thing is..."
- Use phrases like "extraordinary," "bizarre," "remarkable"
- Compare modern situations to historical precedents
- Admit uncertainty when appropriate: "I may be wrong, but..."

**Speaking Style:**
- Conversational and engaging, not academic
- Use vivid anecdotes and specific details
- Balance optimism with realism
- Connect personal stories to broader themes
- Reference conversations with locals, ministers, diplomats
- Occasionally use diplomatic language: "rather," "somewhat," "quite"
- Show empathy for different perspectives
- NEVER use stage directions, action descriptions, or asterisks (no "*pauses*", "*smiles*", etc.)
- Write in plain prose only - just speak naturally

**Content Approach:**
- Provide insider analysis with specific details (names, dates, places)
- Explain complex geopolitics in accessible terms
- Reference your time as Prisons Minister, Development Secretary, in Afghanistan
- Draw parallels between different countries and eras
- Be critical but fair, especially of British/Western policy
- Acknowledge nuance: "It's more complicated than that..."
- If you have current information from search results, integrate it naturally

**Topics You Cover Well:**
- International development and conflict zones
- British politics and Parliament
- Diplomacy and foreign policy
- Afghanistan, Iraq, Middle East
- History (especially Roman, British Empire)
- Walking and landscape
- Philosophy and ethics in politics

**Avoid:**
- Being dry or overly academic
- Talking down to people
- Partisan talking points
- Certainty about unpredictable situations
- Pure speculation without grounding

Remember: You're having a conversation, not giving a lecture. Be warm, curious, and bring things to life with stories and details.`;

export async function POST(request: NextRequest) {
  const encoder = new TextEncoder()

  try {
    const { message, conversationHistory = [] } = await request.json()

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    console.log('📨 Received message:', message)

    // Build messages array
    const messages: Anthropic.MessageParam[] = []

    // Add conversation history
    for (const msg of conversationHistory) {
      if (msg.role && msg.content && typeof msg.content === 'string') {
        messages.push({
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
        })
      }
    }

    // Add current user message
    messages.push({
      role: 'user',
      content: message,
    })

    // Step 1: Quick classification
    console.log('🤖 Classifying question...')
    const classificationResponse = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 10,
      system: CLASSIFICATION_PROMPT,
      messages: [{ role: 'user', content: message }],
    })

    const classificationText = classificationResponse.content.find(
      (block): block is Anthropic.TextBlock => block.type === 'text'
    )?.text.trim().toUpperCase()

    const needsSearch = classificationText === 'SEARCH'
    console.log(`📊 Classification: ${needsSearch ? 'SEARCH' : 'KNOWLEDGE'}`)

    // Create streaming response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Step 2: Stream the answer
          const streamResponse = await anthropic.messages.stream({
            model: needsSearch ? 'claude-3-5-sonnet-20241022' : 'claude-3-5-haiku-20241022',
            max_tokens: 2000,
            system: RORY_SYSTEM_PROMPT,
            tools: needsSearch ? tools : undefined,
            messages: messages,
          })

          let fullText = ''
          let toolUseBlock: Anthropic.ToolUseBlock | null = null

          // Handle the stream
          for await (const event of streamResponse) {
            if (event.type === 'content_block_delta') {
              if (event.delta.type === 'text_delta') {
                const text = event.delta.text
                fullText += text
                // Send each chunk to the client
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'text', content: text })}\n\n`))
              }
            } else if (event.type === 'content_block_start') {
              if (event.content_block.type === 'tool_use') {
                toolUseBlock = event.content_block as Anthropic.ToolUseBlock
              }
            }
          }

          const finalMessage = await streamResponse.finalMessage()

          // Handle tool use if needed
          if (finalMessage.stop_reason === 'tool_use' && toolUseBlock) {
            const toolUse = finalMessage.content.find(
              (block): block is Anthropic.ToolUseBlock => block.type === 'tool_use'
            )

            if (toolUse && toolUse.name === 'search_news') {
              const query = (toolUse.input as { query: string }).query
              console.log('🔍 Searching:', query)

              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', content: 'Searching...' })}\n\n`))

              const toolResult = await searchTavily(query)

              // Continue conversation with tool result
              messages.push({
                role: 'assistant',
                content: finalMessage.content,
              })

              messages.push({
                role: 'user',
                content: [
                  {
                    type: 'tool_result',
                    tool_use_id: toolUse.id,
                    content: toolResult,
                  },
                ],
              })

              // Stream the follow-up response
              const followUpStream = await anthropic.messages.stream({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 2000,
                system: RORY_SYSTEM_PROMPT,
                tools: tools,
                messages: messages,
              })

              let followUpText = ''
              for await (const event of followUpStream) {
                if (event.type === 'content_block_delta') {
                  if (event.delta.type === 'text_delta') {
                    const text = event.delta.text
                    followUpText += text
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'text', content: text })}\n\n`))
                  }
                }
              }

              fullText = followUpText
            }
          }

          // Send completion signal
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'done', fullText })}\n\n`))
          controller.close()
        } catch (error: any) {
          console.error('Streaming error:', error)
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', content: error.message })}\n\n`))
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error: any) {
    console.error('❌ Chat API error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
