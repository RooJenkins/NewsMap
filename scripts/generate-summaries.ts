import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

// Major news outlets (global reach, high credibility)
const MAJOR_KEYWORDS = [
  'new york times', 'nyt', 'bbc', 'cnn', 'reuters', 'associated press', 'ap news',
  'guardian', 'washington post', 'bloomberg', 'financial times', 'ft.com',
  'wall street journal', 'wsj', 'al jazeera', 'npr', 'abc news', 'nbc news',
  'cbs news', 'the times', 'economist', 'cnbc', 'fox news', 'msnbc',
  'sky news', 'france 24', 'dw.com', 'deutsche welle'
]

// Medium outlets (national/regional reach)
const MEDIUM_KEYWORDS = [
  'usa today', 'los angeles times', 'chicago tribune', 'boston globe',
  'independent', 'telegraph', 'politico', 'the hill', 'axios',
  'times of india', 'hindu', 'south china morning post', 'japan times', 'nikkei',
  'le monde', 'der spiegel', 'el país', 'globe and mail', 'toronto star',
  'sydney morning herald', 'age.com', 'stuff.co.nz', 'irishtimes'
]

function categorizeSource(source: string): string {
  const lowerSource = source.toLowerCase()

  if (MAJOR_KEYWORDS.some(keyword => lowerSource.includes(keyword))) {
    return 'major'
  }
  if (MEDIUM_KEYWORDS.some(keyword => lowerSource.includes(keyword))) {
    return 'medium'
  }
  return 'local'
}

async function generateSummary(title: string, description: string, source: string): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  try {
    const anthropic = new Anthropic({ apiKey })

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 500,
      messages: [{
        role: 'user',
        content: `Summarize this news story in exactly 3 concise paragraphs. Make it clear, informative, and engaging. Focus on the key facts, context, and implications.

Title: ${title}
Source: ${source}
Description: ${description || 'No description available'}

Write a professional 3-paragraph summary (2-3 sentences each). Be factual and objective.`
      }]
    })

    const summary = message.content[0].type === 'text' ? message.content[0].text : ''
    return summary || null
  } catch (error) {
    console.error(`❌ Error generating summary: ${error}`)
    return null
  }
}

async function main() {
  console.log('🤖 Starting REAL AI summary generation...\n')

  // Check for API key first
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('\n❌ ERROR: ANTHROPIC_API_KEY not found!')
    console.error('\nTo use real AI summaries, add your Anthropic API key to .env:')
    console.error('ANTHROPIC_API_KEY=your-api-key-here\n')
    console.error('Get your API key at: https://console.anthropic.com/\n')
    process.exit(1)
  }

  // Get all stories
  const stories = await prisma.story.findMany({
    orderBy: { importance: 'desc' }
  })

  console.log(`📚 Found ${stories.length} stories`)
  console.log(`⏱️  Estimated time: ~${Math.ceil(stories.length / 60)} minutes (rate limited)\n`)

  let updated = 0
  let skipped = 0
  let errors = 0

  for (let i = 0; i < stories.length; i++) {
    const story = stories[i]

    try {
      // Categorize source quality
      const sourceQuality = categorizeSource(story.source)

      console.log(`[${i + 1}/${stories.length}] ${sourceQuality.toUpperCase()} - ${story.title.substring(0, 60)}...`)

      // Generate REAL AI summary
      const aiSummary = await generateSummary(story.title, story.description || '', story.source)

      if (aiSummary) {
        // Update story with REAL AI summary
        await prisma.story.update({
          where: { id: story.id },
          data: {
            sourceQuality,
            aiSummary
          }
        })
        updated++
        console.log(`   ✅ Real AI summary generated`)
      } else {
        // Update only source quality, no fake summary
        await prisma.story.update({
          where: { id: story.id },
          data: { sourceQuality }
        })
        skipped++
        console.log(`   ⏭️  Skipped (no valid description)`)
      }

      // Rate limit: 1 request per second
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`   ❌ Error: ${error}`)
      errors++
    }
  }

  console.log(`\n✅ AI Summary generation complete!`)
  console.log(`   Real AI summaries: ${updated}`)
  console.log(`   Skipped: ${skipped}`)
  console.log(`   Errors: ${errors}`)

  // Show breakdown
  const majorCount = await prisma.story.count({ where: { sourceQuality: 'major' } })
  const mediumCount = await prisma.story.count({ where: { sourceQuality: 'medium' } })
  const localCount = await prisma.story.count({ where: { sourceQuality: 'local' } })
  const withSummaries = await prisma.story.count({ where: { aiSummary: { not: null } } })

  console.log(`\n📊 Database Stats:`)
  console.log(`   Major outlets: ${majorCount}`)
  console.log(`   Medium outlets: ${mediumCount}`)
  console.log(`   Local outlets: ${localCount}`)
  console.log(`   Stories with AI summaries: ${withSummaries}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
