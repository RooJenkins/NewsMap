import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// All 114 countries with coordinates
const ALL_COUNTRIES = [
  // Americas (19)
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
  { name: 'United States', lat: 39.8283, lng: -98.5795 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },

  // Europe (36)
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.473 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Romania', lat: 45.9432, lng: 24.9668 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Slovakia', lat: 48.6690, lng: 19.6990 },
  { name: 'Slovenia', lat: 46.1512, lng: 14.9955 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },

  // Asia-Pacific (43)
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Oman', lat: 21.5126, lng: 55.9233 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'Syria', lat: 34.8021, lng: 38.9968 },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478 },
  { name: 'Uzbekistan', lat: 41.3775, lng: 64.5853 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164 },

  // Africa (16)
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 },
]

// Category definitions with voice legends
const CATEGORIES = [
  {
    id: 'politics',
    name: 'Politics',
    voiceLegend: 'Rory Stewart from The Rest is Politics',
    voiceCharacteristics: [
      'Conversational, like explaining to a friend over coffee',
      'Deep insider knowledge with casual delivery',
      'Connects personal anecdotes to broader points',
      '"Here\'s what\'s really going on behind the scenes"',
      'British sophistication with accessibility',
      'Geopolitical connections everywhere'
    ],
    openingStyle: 'Start with a recent event/meeting/decision, then zoom out',
    languagePatterns: '"The thing to understand is...", "What\'s really happening here...", "Now this is where it gets interesting..."',
    avoid: 'Academic jargon, overly formal language'
  },
  {
    id: 'economy',
    name: 'Economy & Business',
    voiceLegend: 'Matt Levine from Bloomberg Money Stuff',
    voiceCharacteristics: [
      'Witty, ironic, playfully skeptical',
      'Explains complex finance concepts with clever metaphors',
      '"Everything is securities fraud" running joke energy',
      'Technically sophisticated but never condescending',
      'Finds absurdity in financial structures',
      'Connects seemingly unrelated business stories'
    ],
    openingStyle: 'Lead with the most absurd/ironic business development',
    languagePatterns: '"Obviously...", "I guess...", "One way to think about this...", parenthetical asides',
    avoid: 'Earnest cheerleading, press release language'
  },
  {
    id: 'technology',
    name: 'Technology',
    voiceLegend: 'Ben Thompson from Stratechery',
    voiceCharacteristics: [
      'Strategic business analysis, not just tech features',
      'Aggregation Theory lens',
      'Platform dynamics and business models',
      'Long-term strategic thinking',
      'Connects tech to broader economic shifts',
      'Critical of hype, focused on fundamentals'
    ],
    openingStyle: 'Frame the strategic context first',
    languagePatterns: '"The key question is...", "This matters because...", "Consider the strategic implications..."',
    avoid: 'Feature lists, specs, gadget enthusiasm'
  },
  {
    id: 'climate',
    name: 'Climate & Environment',
    voiceLegend: 'Bill McKibben',
    voiceCharacteristics: [
      'Urgent but not despairing',
      'Scientific facts with moral clarity',
      'Connects local impacts to global crisis',
      'Solutions-oriented activism',
      'Calls out fossil fuel industry directly',
      'Grassroots movement focus'
    ],
    openingStyle: 'Lead with climate impact or resistance story',
    languagePatterns: '"The physics is clear...", "Here\'s what gives me hope...", "We\'re running out of time, but..."',
    avoid: 'Both-sidesism, corporate greenwashing acceptance'
  },
  {
    id: 'culture',
    name: 'Culture & Arts',
    voiceLegend: 'Wesley Morris from The New York Times',
    voiceCharacteristics: [
      'Deep cultural analysis with accessibility',
      'Connects art to social movements',
      'Race, identity, and representation awareness',
      'Personal yet universal observations',
      'Joyful engagement with culture',
      'Critical without being dismissive'
    ],
    openingStyle: 'Start with a cultural moment that reveals something deeper',
    languagePatterns: 'Vivid, sensory descriptions; rhetorical questions; cultural references',
    avoid: 'Superficial celebrity gossip, mere plot summaries'
  },
  {
    id: 'sports',
    name: 'Sports',
    voiceLegend: 'Bill Simmons',
    voiceCharacteristics: [
      'Fan perspective with insider access',
      'Pop culture references constantly',
      'Storytelling over statistics',
      '"Remember when..." nostalgia',
      'Conspiracy theories (playful)',
      'Parenthetical asides and footnotes'
    ],
    openingStyle: 'Personal reaction or "we need to talk about..."',
    languagePatterns: 'Conversational, exclamation points, rhetorical questions, "Are you kidding me?"',
    avoid: 'Dry play-by-play, pure stats'
  },
  {
    id: 'travel',
    name: 'Travel & Tourism',
    voiceLegend: 'Pico Iyer',
    voiceCharacteristics: [
      'Philosophical and poetic',
      'Deeply immersive sensory details',
      'Cultural observer, not tourist',
      'Stillness and motion themes',
      'East-West cultural bridges',
      'Finds universal in particular'
    ],
    openingStyle: 'Arrive in a place through sensory detail',
    languagePatterns: 'Literary, contemplative, rich imagery',
    avoid: 'Listicles, "top 10" thinking, superficial exoticism'
  },
  {
    id: 'food',
    name: 'Food & Cuisine',
    voiceLegend: 'Anthony Bourdain',
    voiceCharacteristics: [
      'Irreverent but deeply respectful of food culture',
      'Cultural anthropology through food',
      'Working-class perspective',
      'Anti-pretension, pro-authenticity',
      'Travel as connection, not consumption',
      'Dark humor and honesty'
    ],
    openingStyle: 'Land in a place through food scene',
    languagePatterns: 'Sharp, funny, no bullshit, culinary insider slang',
    avoid: 'Foodie preciousness, farm-to-table clichés'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    voiceLegend: 'Atul Gawande',
    voiceCharacteristics: [
      'Medical expertise with narrative storytelling',
      'Patient-centered perspective',
      'Systems thinking about healthcare',
      'Humble about uncertainty',
      'Evidence-based but humanistic',
      'Incremental improvement focus'
    ],
    openingStyle: 'Start with a case or clinical moment',
    languagePatterns: 'Clear, precise medical language explained for general readers',
    avoid: 'Medical jargon without explanation, policy wonkery without human impact'
  },
  {
    id: 'education',
    name: 'Education',
    voiceLegend: 'Diane Ravitch',
    voiceCharacteristics: [
      'Critical of privatization and "reform"',
      'Historical context for current policy',
      'Defends public education fiercely',
      'Data-driven but passionate',
      'Equity and access focus',
      'Teacher advocacy'
    ],
    openingStyle: 'Connect current policy to historical pattern',
    languagePatterns: 'Clear, forceful, evidence-based advocacy',
    avoid: 'Tech-solutionism, charter school boosterism'
  },
  {
    id: 'crime',
    name: 'Crime & Justice',
    voiceLegend: 'Michelle Alexander, author of The New Jim Crow',
    voiceCharacteristics: [
      'Systemic analysis of injustice',
      'Race and class consciousness',
      'Criminal justice as civil rights issue',
      'Connects mass incarceration to broader systems',
      'Moral clarity without self-righteousness',
      'Data + human stories'
    ],
    openingStyle: 'Frame individual story as systemic pattern',
    languagePatterns: 'Powerful, clear, socially conscious',
    avoid: '"Tough on crime" framing, colorblind analysis'
  },
  {
    id: 'energy',
    name: 'Energy',
    voiceLegend: 'Daniel Yergin, energy historian',
    voiceCharacteristics: [
      'Historical sweep and geopolitical depth',
      'Oil/gas as power and conflict driver',
      'Energy transitions are slow and complex',
      'Markets, technology, and politics interplay',
      'Global strategic perspective',
      '"The Prize" lens (energy = power)'
    ],
    openingStyle: 'Set current development in historical context',
    languagePatterns: 'Strategic, authoritative, historically grounded',
    avoid: 'Simplified energy transition narratives'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    voiceLegend: 'Mark Harris',
    voiceCharacteristics: [
      'Industry insider + cultural critic',
      'Business of entertainment focus',
      'Awards season expertise',
      'LGBTQ+ representation awareness',
      'Connects creative and commercial',
      'Cultural zeitgeist tracker'
    ],
    openingStyle: 'Lead with industry shift or cultural moment',
    languagePatterns: 'Insider industry terms explained, cultural analysis',
    avoid: 'Mere box office reporting, celebrity gossip'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    voiceLegend: 'Ezra Klein',
    voiceCharacteristics: [
      'Analytical yet accessible',
      '"How does this work?" curiosity',
      'Connects ideas across domains',
      'Interview insights and expert synthesis',
      'Millennial perspective',
      'Intellectual humility'
    ],
    openingStyle: 'Frame with a question or puzzle',
    languagePatterns: 'Clear, exploratory, "I\'ve been thinking about..."',
    avoid: 'Hot takes, partisan point-scoring'
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    voiceLegend: 'Robert Caro',
    voiceCharacteristics: [
      'Obsessive attention to detail',
      'Power dynamics at every level',
      '"Follow the money" investigative',
      'Long-term consequences focus',
      'Who benefits? Who pays?',
      'Physical space and political power'
    ],
    openingStyle: 'Describe physical infrastructure, then reveal power',
    languagePatterns: 'Detailed, investigative, revelatory',
    avoid: 'Surface-level project descriptions'
  },
  {
    id: 'science',
    name: 'Science & Research',
    voiceLegend: 'Ed Yong from The Atlantic',
    voiceCharacteristics: [
      'Makes science accessible without dumbing down',
      'Narrative-driven research explanation',
      'Sense of wonder and complexity',
      'Nuance over certainty',
      'Connects individual research to broader themes',
      'Diverse scientist voices'
    ],
    openingStyle: 'Lead with surprising finding or researcher moment',
    languagePatterns: 'Vivid science writing, metaphors, narrative arcs',
    avoid: 'Press release science, hype'
  },
  {
    id: 'humanrights',
    name: 'Human Rights',
    voiceLegend: 'Samantha Power',
    voiceCharacteristics: [
      'Diplomatic experience + moral urgency',
      '"Problem from Hell" genocide awareness',
      'Storytelling about individuals',
      'Pragmatic idealism',
      'Power politics meets human rights',
      'Refugee and atrocity focus'
    ],
    openingStyle: 'Personal story reveals larger crisis',
    languagePatterns: 'Passionate but grounded, diplomatic insight',
    avoid: 'Naive idealism, realpolitik cynicism'
  },
  {
    id: 'military',
    name: 'Military & Defense',
    voiceLegend: 'Tom Ricks from Foreign Policy',
    voiceCharacteristics: [
      'Military expertise without jingoism',
      'Critical of Pentagon bureaucracy',
      'Strategic analysis grounded in history',
      'Blunt, no-nonsense assessment',
      'Counterinsurgency doctrine knowledge',
      'Respectful of troops, critical of leadership'
    ],
    openingStyle: 'Lead with strategic failure or doctrinal shift',
    languagePatterns: 'Military terminology explained, strategic clarity, tough questions',
    avoid: 'Cheerleading, uncritical defense industry takes'
  },
  {
    id: 'realestate',
    name: 'Real Estate & Housing',
    voiceLegend: 'Matthew Desmond, author of Evicted',
    voiceCharacteristics: [
      'Housing as human right',
      'Inequality and poverty focus',
      'Eviction crisis awareness',
      'Systemic analysis of housing markets',
      'Personal stories reveal structures',
      'Exploitation and profit in housing'
    ],
    openingStyle: 'Individual housing story opens to systemic issue',
    languagePatterns: 'Sociological insight, narrative power, moral clarity',
    avoid: 'Real estate as mere investment talk'
  },
]

// Generate prompt for specific country and category
function generatePrompt(country: string, category: typeof CATEGORIES[0]): string {
  return `You are writing in the distinctive voice and style of ${category.voiceLegend}.

**Voice Characteristics:**
${category.voiceCharacteristics.map(c => `- ${c}`).join('\n')}

**Opening Style:** ${category.openingStyle}

**Language Patterns:** ${category.languagePatterns}

**Avoid:** ${category.avoid}

---

Generate a comprehensive summary of **${category.name}** in **${country}** based on the latest November 2025 news.

Use web search or your knowledge to find real, current events related to ${category.name.toLowerCase()} in ${country}.

**Format:**

# ${country} - ${category.name}

[Opening hook in ${category.voiceLegend}'s distinctive style - ~150 words]

## The Big Issue 1: [Title]
[Deep dive ~200 words in ${category.voiceLegend}'s voice]

## The Big Issue 2: [Title]
[Deep dive ~200 words in ${category.voiceLegend}'s voice]

## The Big Issue 3: [Title]
[Deep dive ~200 words in ${category.voiceLegend}'s voice]

## The International Angle
[~150 words on global implications in ${category.voiceLegend}'s style]

## The Bottom Line
[~100 words synthesis and forward look in ${category.voiceLegend}'s voice]

**CRITICAL REQUIREMENTS:**
- Write EXACTLY as ${category.voiceLegend} would write
- Use ONLY real, current November 2025 news and events
- Be specific: names, dates, numbers, quotes
- Target: 4,000-6,000 characters
- Make it engaging and character-driven
- Stay true to the voice throughout

Generate the summary now:`
}

// Generate summary using Claude API
async function generateCategorySummary(
  country: string,
  category: typeof CATEGORIES[0],
  anthropic: Anthropic
): Promise<{ summary: string; issues: string[]; tooltip: string }> {
  const prompt = generatePrompt(country, category)

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract issues (look for ## The Big Issue headers)
    const issueMatches = summaryText.match(/## The Big Issue \d+: (.+)/g) || []
    const issues = issueMatches.map(match => match.replace(/## The Big Issue \d+: /, ''))

    // Generate short tooltip (first sentence or ~60 chars)
    const firstParagraph = summaryText.split('\n\n')[1] || summaryText.split('\n')[1] || ''
    const tooltip = firstParagraph.slice(0, 100).trim() + '...'

    return {
      summary: summaryText,
      issues,
      tooltip
    }
  } catch (error) {
    console.error(`❌ Error generating ${category.name} summary for ${country}:`, error)
    throw error
  }
}

// Main generation function
async function generateMultiCategorySummaries() {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  console.log('🌍 Multi-Category Summary Generation')
  console.log(`📊 Total task: ${ALL_COUNTRIES.length} countries × ${CATEGORIES.length} categories = ${ALL_COUNTRIES.length * CATEGORIES.length} writeups`)
  console.log()

  // Get category from command line args
  const categoryId = process.argv[2]

  if (!categoryId) {
    console.log('Usage: npm run generate-category <category-id>')
    console.log('\nAvailable categories:')
    CATEGORIES.forEach(cat => console.log(`  - ${cat.id}: ${cat.name} (${cat.voiceLegend})`))
    process.exit(1)
  }

  const category = CATEGORIES.find(c => c.id === categoryId)

  if (!category) {
    console.error(`❌ Category '${categoryId}' not found`)
    process.exit(1)
  }

  console.log(`📝 Generating: ${category.name} (${category.voiceLegend})`)
  console.log(`📍 Countries: ${ALL_COUNTRIES.length}`)
  console.log()

  let generated = 0
  let skipped = 0
  let errors = 0

  for (const country of ALL_COUNTRIES) {
    console.log(`\n📍 ${country.name} - ${category.name}`)

    try {
      // Check if already exists
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: category.id
          }
        }
      })

      if (existing) {
        console.log(`  ⏭️  Already exists - skipping`)
        skipped++
        continue
      }

      console.log(`  🤖 Generating with ${category.voiceLegend} voice...`)

      const { summary, issues, tooltip } = await generateCategorySummary(
        country.name,
        category,
        anthropic
      )

      // Save to database
      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: category.id,
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]), // No specific stories for these generated summaries
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`  ✅ Generated and saved (${summary.length} chars, ${issues.length} issues)`)

      // Rate limit: 1 request per second
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`  ❌ Failed:`, error)
      errors++
    }
  }

  console.log(`\n\n✅ ${category.name} Generation Complete!`)
  console.log(`   Generated: ${generated}`)
  console.log(`   Skipped: ${skipped}`)
  console.log(`   Errors: ${errors}`)
  console.log()

  // Show progress across all categories
  const allSummaries = await prisma.locationSummary.findMany({
    where: { type: 'country' }
  })

  const byCategory = allSummaries.reduce((acc, s) => {
    acc[s.category] = (acc[s.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  console.log('📊 Overall Progress:')
  CATEGORIES.forEach(cat => {
    const count = byCategory[cat.id] || 0
    const percent = Math.round((count / ALL_COUNTRIES.length) * 100)
    console.log(`   ${cat.id.padEnd(15)} ${count}/${ALL_COUNTRIES.length} (${percent}%)`)
  })

  const totalGenerated = Object.values(byCategory).reduce((a, b) => a + b, 0)
  const totalPossible = ALL_COUNTRIES.length * CATEGORIES.length
  const overallPercent = Math.round((totalGenerated / totalPossible) * 100)
  console.log(`\n   TOTAL: ${totalGenerated}/${totalPossible} (${overallPercent}%)`)
}

generateMultiCategorySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
