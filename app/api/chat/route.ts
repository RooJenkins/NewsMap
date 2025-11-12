import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Perplexity API for research
async function searchPerplexity(query: string): Promise<string> {
  try {
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are a research assistant. Provide factual, up-to-date information with sources.'
          },
          {
            role: 'user',
            content: query
          }
        ],
      }),
    })

    if (!response.ok) {
      throw new Error(`Perplexity API error: ${response.statusText}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || 'No results found.'
  } catch (error) {
    console.error('Perplexity search error:', error)
    return 'I apologize, but I encountered an issue searching for current information. Let me answer based on my knowledge.'
  }
}

// Tool definitions for Claude
const tools: Anthropic.Tool[] = [
  {
    name: 'search_news',
    description: 'Search for current news and information about any topic, country, person, or event. Returns up-to-date factual information with sources. Use this whenever the user asks about current events, recent news, or wants the latest information.',
    input_schema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'The search query for current news and information. Be specific and include relevant keywords.'
        }
      },
      required: ['query']
    }
  }
]

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

**Content Approach:**
- Provide insider analysis with specific details (names, dates, places)
- Explain complex geopolitics in accessible terms
- Reference your time as Prisons Minister, Development Secretary, in Afghanistan
- Draw parallels between different countries and eras
- Be critical but fair, especially of British/Western policy
- Acknowledge nuance: "It's more complicated than that..."
- Use the search_news tool to get current information before answering

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
  try {
    const { message, conversationHistory = [] } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Build messages array with conversation history
    const messages: Anthropic.MessageParam[] = [
      ...conversationHistory,
      {
        role: 'user',
        content: message,
      },
    ]

    // First Claude API call
    let response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2000,
      system: RORY_SYSTEM_PROMPT,
      tools: tools,
      messages: messages,
    })

    // Handle tool use loop
    while (response.stop_reason === 'tool_use') {
      const toolUse = response.content.find(
        (block): block is Anthropic.ToolUseBlock => block.type === 'tool_use'
      )

      if (!toolUse) break

      let toolResult: string = ''

      if (toolUse.name === 'search_news') {
        const query = (toolUse.input as { query: string }).query
        console.log('🔍 Searching news for:', query)
        toolResult = await searchPerplexity(query)
      }

      // Add assistant's response and tool result to messages
      messages.push({
        role: 'assistant',
        content: response.content,
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

      // Continue conversation with tool result
      response = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2000,
        system: RORY_SYSTEM_PROMPT,
        tools: tools,
        messages: messages,
      })
    }

    // Extract the final text response
    const textContent = response.content.find(
      (block): block is Anthropic.TextBlock => block.type === 'text'
    )

    return NextResponse.json({
      response: textContent?.text || 'I apologize, I had trouble formulating a response.',
      conversationHistory: messages,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
