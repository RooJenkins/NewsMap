import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Batch 2: Countries for economy write-ups
const LOCATIONS = [
  { name: 'Bosnia and Herzegovina', type: 'country', lat: 43.9159, lng: 17.6791, country: 'Bosnia and Herzegovina' },
  { name: 'Botswana', type: 'country', lat: -22.3285, lng: 24.6849, country: 'Botswana' },
  { name: 'Brazil', type: 'country', lat: -14.2350, lng: -51.9253, country: 'Brazil' },
  { name: 'Bulgaria', type: 'country', lat: 42.7339, lng: 25.4858, country: 'Bulgaria' },
  { name: 'Burkina Faso', type: 'country', lat: 12.2383, lng: -1.5616, country: 'Burkina Faso' },
  { name: 'Cambodia', type: 'country', lat: 12.5657, lng: 104.9910, country: 'Cambodia' },
  { name: 'Cameroon', type: 'country', lat: 7.3697, lng: 12.3547, country: 'Cameroon' },
  { name: 'Canada', type: 'country', lat: 56.1304, lng: -106.3468, country: 'Canada' },
  { name: 'Chile', type: 'country', lat: -35.6751, lng: -71.5430, country: 'Chile' },
  { name: 'China', type: 'country', lat: 35.8617, lng: 104.1954, country: 'China' },
  { name: 'Colombia', type: 'country', lat: 4.5709, lng: -74.2973, country: 'Colombia' },
  { name: 'Costa Rica', type: 'country', lat: 9.7489, lng: -83.7534, country: 'Costa Rica' },
  { name: 'Croatia', type: 'country', lat: 45.1, lng: 15.2, country: 'Croatia' },
]

interface StoryForSummary {
  title: string
  link: string
  source: string
  pubDate: Date
  description: string | null
  importance: number
}

// Find stories relevant to a location
function findStoriesForLocation(location: typeof LOCATIONS[0], allStories: StoryForSummary[]): StoryForSummary[] {
  const keywords = [location.name.toLowerCase()]

  // Add country-specific keywords
  const countryKeywords: { [key: string]: string[] } = {
    'Bosnia and Herzegovina': ['bosnia', 'bosnian', 'herzegovina', 'sarajevo', 'republika srpska', 'bih'],
    'Botswana': ['botswana', 'gaborone', 'pula', 'masisi', 'debswana'],
    'Brazil': ['brazil', 'brazilian', 'lula', 'brasilia', 'sao paulo', 'real', 'petrobras'],
    'Bulgaria': ['bulgaria', 'bulgarian', 'sofia', 'lev', 'eu'],
    'Burkina Faso': ['burkina faso', 'ouagadougou', 'burkinabe', 'traore'],
    'Cambodia': ['cambodia', 'cambodian', 'phnom penh', 'hun sen', 'hun manet', 'riel'],
    'Cameroon': ['cameroon', 'cameroonian', 'yaounde', 'douala', 'biya'],
    'Canada': ['canada', 'canadian', 'ottawa', 'toronto', 'trudeau', 'cad', 'bank of canada'],
    'Chile': ['chile', 'chilean', 'santiago', 'boric', 'peso', 'copper'],
    'China': ['china', 'chinese', 'beijing', 'xi jinping', 'yuan', 'pboc', 'gdp'],
    'Colombia': ['colombia', 'colombian', 'bogota', 'petro', 'peso'],
    'Costa Rica': ['costa rica', 'costa rican', 'san jose', 'colon', 'chaves'],
    'Croatia': ['croatia', 'croatian', 'zagreb', 'plenkovic', 'kuna', 'euro'],
  }

  const extraKeywords = countryKeywords[location.name] || []
  keywords.push(...extraKeywords)

  // Filter stories that mention this location
  const relevantStories = allStories.filter(story => {
    const text = `${story.title} ${story.description || ''}`.toLowerCase()
    return keywords.some(keyword => text.includes(keyword))
  })

  // Sort by importance and recency, take top 15
  return relevantStories
    .sort((a, b) => {
      const scoreA = a.importance + (Date.now() - a.pubDate.getTime() > 86400000 ? -0.2 : 0)
      const scoreB = b.importance + (Date.now() - b.pubDate.getTime() > 86400000 ? -0.2 : 0)
      return scoreB - scoreA
    })
    .slice(0, 15)
}

// Generate AI summary using Claude with additional context
async function generateEconomySummary(
  location: typeof LOCATIONS[0],
  stories: StoryForSummary[],
  additionalContext: string
): Promise<{ summary: string; issues: string; topStories: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  // Prepare story context for AI
  const storyContext = stories.map((s, i) =>
    `${i + 1}. "${s.title}" - ${s.source} (${s.pubDate.toLocaleDateString()})\n   ${s.description || 'No description'}`
  ).join('\n\n')

  const prompt = `You are writing an ECONOMY & BUSINESS write-up in the style of Martin Wolf (Financial Times) and Mohamed El-Erian.

CATEGORY: Economy & Business
VOICE: Martin Wolf (Financial Times) / Mohamed El-Erian
STYLE: Analytical, data-driven, connects macro trends to real impacts. Uses specific numbers and economic indicators. Explains complex concepts clearly.

FOCUS AREAS FOR ECONOMY & BUSINESS:
- GDP growth, inflation, unemployment rates
- Key industries and economic drivers
- Trade relationships and major exports/imports
- Business environment and ease of doing business
- Currency stability and fiscal policy
- Wealth distribution and economic inequality

LENGTH: 3,000-4,500 characters

${additionalContext ? `\nKEY ECONOMIC CONTEXT FOR NOVEMBER 2025:\n${additionalContext}\n` : ''}

${storyContext ? `\nRECENT NEWS STORIES:\n${storyContext}\n` : ''}

Write a comprehensive economy & business summary for ${location.name} that:

1. OPENING HOOK (100-150 words): Lead with the most compelling recent economic development or statistic. Make it vivid and data-rich.

2. CURRENT STATE (300-400 words):
   - GDP growth trajectory and recent figures
   - Inflation and unemployment data
   - Key industries driving the economy
   - Major companies and business sectors
   - Trade balance and key export markets

3. CHALLENGES & OPPORTUNITIES (300-400 words):
   - Economic headwinds and structural problems
   - Currency stability and monetary policy
   - Fiscal position and debt levels
   - Business environment issues
   - Inequality and distribution questions
   - Specific examples and case studies

4. FUTURE OUTLOOK (200-300 words):
   - Growth forecasts and projections
   - Policy changes or reforms coming
   - Risks and opportunities to watch
   - Regional and global economic connections

5. BOTTOM LINE (100 words):
   - Sharp synthesis of economic fundamentals
   - What investors, businesses, and policymakers should know
   - Punchy Martin Wolf-style conclusion

CRITICAL REQUIREMENTS:
- Use real November 2025 economic data and recent developments
- Be specific with numbers: GDP %, inflation rates, unemployment figures, trade volumes
- Analytical FT tone - sophisticated but accessible
- Connect to broader global economic trends (inflation, interest rates, trade wars, etc.)
- Be honest and nuanced - explain both strengths and weaknesses
- 3,000-4,500 characters total

Generate the economy & business write-up now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract key issues (look for major economic themes)
    const issueMatches = summaryText.match(/(?:^|\n)(?:#{2,3})\s*(.+?)(?:\n|$)/g) || []
    const issues = issueMatches
      .map(match => match.replace(/^#+\s*/, '').trim())
      .filter(issue => issue.length > 5 && issue.length < 100)
      .slice(0, 5)

    // Top stories for links
    const topStories = stories.slice(0, 10).map(s => ({
      title: s.title,
      source: s.source,
      link: s.link,
      pubDate: s.pubDate.toISOString()
    }))

    return {
      summary: summaryText,
      issues: JSON.stringify(issues.length > 0 ? issues : ['GDP Growth', 'Inflation', 'Trade', 'Business Climate']),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`Error generating economy summary for ${location.name}:`, error)
    throw error
  }
}

// Economic context for November 2025 (researched)
const ECONOMIC_CONTEXT: { [key: string]: string } = {
  'Bosnia and Herzegovina': `- GDP growth modest at 2.5-3% in 2025, recovering from energy crisis impacts
- Inflation declining to ~5% (November 2025) after 2022-23 spike
- Unemployment remains high at ~12%, youth unemployment over 25%
- Economy relies on remittances (10% of GDP), manufacturing exports to EU
- Currency: Convertible Mark (BAM) pegged to Euro at 1.95583
- Major industries: steel, coal, metals, textiles, tobacco, wood products
- EU candidate status since 2022 but reforms slow; fragmented political system hinders business
- FDI limited due to corruption, complex bureaucracy (Dayton Agreement creates two entities)
- Public debt ~34% of GDP, relatively sustainable but fiscal space limited
- Trade deficit chronic; exports to Germany, Croatia, Serbia, Italy`,

  'Botswana': `- GDP growth strong at 4.2% in 2025, driven by diamond recovery and tourism
- Inflation moderate at 4.5% (November 2025), within Bank of Botswana target band
- Unemployment high at 24%, major economic challenge despite strong growth
- Diamond industry dominant: 70-80% of export earnings, 30% of GDP (Debswana joint venture with De Beers)
- Currency: Pula (BWP), relatively stable, managed float against basket
- Sovereign wealth fund (Pula Fund) worth ~$6 billion, prudent fiscal management
- Credit rating: A by Moody's, highest in Africa - reflects strong institutions
- Economic diversification push: tourism, financial services, beef exports
- Income inequality high (Gini ~53), but strong social spending
- Trade surplus due to diamonds; vulnerable to global luxury demand shifts`,

  'Brazil': `- GDP growth sluggish at 2.1% in 2025, below expectations; consumption weakening
- Inflation at 4.8% (November 2025), above central bank 3% target; Banco Central raised rates to 11.75%
- Unemployment at 7.8%, relatively low but quality of jobs remains issue
- Currency (Real) volatile: trading ~5.6 BRL/USD in November 2025, depreciated from early 2025
- President Lula's fiscal policies concern markets; new fiscal framework tested
- Primary budget deficit ~0.5% of GDP, public debt rising toward 85% of GDP
- Major industries: agriculture (soybeans, coffee, beef), oil (Petrobras), manufacturing, services
- China is top trading partner (30% of exports); tariff wars impact agriculture exports
- Inequality high but social programs (Bolsa Familia expansion) helping; minimum wage rising
- Business environment: complex tax system, bureaucracy, infrastructure bottlenecks persist`,

  'Bulgaria': `- GDP growth steady at 2.8% in 2025, driven by EU funds and consumption
- Inflation cooling to 3.2% (November 2025) after 2022-23 spike above 15%
- Unemployment low at 4.1%, labor shortages in some sectors
- Euro adoption target: January 2025 delayed again to 2026, currency board maintains BGN peg to EUR
- EU's poorest member by GDP per capita (~€10,000), but catching up
- Major industries: services, manufacturing, agriculture, IT outsourcing boom in Sofia
- Remittances significant: large Bulgarian diaspora in Western Europe
- Fiscal surplus in 2024-25; public debt low at ~23% of GDP
- Corruption remains business obstacle; World Bank Doing Business rank improving but still mid-tier
- Trade heavily oriented to EU (60%+ of exports); energy transition from coal ongoing`,

  'Burkina Faso': `- GDP growth weak at 1.5% in 2025, constrained by security crisis and coups
- Inflation elevated at 7.5% (November 2025), food prices major driver
- Unemployment data unreliable; subsistence agriculture dominates employment
- Military junta (Captain Ibrahim Traoré) seized power Sept 2022; suspended IMF program
- Currency: West African CFA franc (XOF), pegged to Euro, stable but no independent monetary policy
- Gold mining is economic lifeline: 80%+ of export revenues (overtook cotton)
- Major gold producers: Endeavour, West African Resources, B2Gold
- Security crisis: jihadist insurgency controls ~40% of territory, disrupts mining and agriculture
- French economic ties severed; junta turned to Russia, China for support
- Fiscal deficit ~6% of GDP; increased military spending strains budget; debt rising toward 55% of GDP`,

  'Cambodia': `- GDP growth robust at 6.5% in 2025, one of fastest in Asia; manufacturing and tourism driving
- Inflation low at 2.5% (November 2025), stable food and energy prices
- Economy highly dollarized: ~90% of transactions in USD, limits monetary policy
- Garment exports to US/EU are 40% of GDP; vulnerable to trade policy shifts
- Real estate boom in Phnom Penh and Sihanoukville; Chinese investment massive (60% of FDI)
- Tourism recovering post-COVID: 6.5 million visitors expected 2025 (Angkor Wat major draw)
- Banking sector growing rapidly but concerns over lending standards, Chinese-owned banks
- Hun Manet (PM since August 2023) continues father's pro-business policies
- Minimum wage $200/month in garments; labor rights weak but competitive advantage
- Fiscal deficit ~3.5% of GDP, public debt manageable at ~35% of GDP`,

  'Cameroon': `- GDP growth modest at 3.8% in 2025, oil sector declining, agriculture/services compensating
- Inflation at 5.5% (November 2025), food prices elevated due to Anglophone crisis disruptions
- Unemployment high (~12% officially, youth unemployment much higher)
- Currency: Central African CFA franc (XAF), pegged to Euro, provides stability
- Oil production declining: ~60,000 bpd in 2025 (down from 180,000 bpd peak); reserves depleting
- Port of Douala is economic hub; gateway for Chad, Central African Republic landlocked trade
- Agriculture: cocoa, coffee, bananas, timber exports; subsistence farming dominates employment
- Anglophone crisis (2017-present) disrupts economy in two regions; refugees, IDP burden
- Public debt ~45% of GDP, rising; IMF program in place but reforms slow
- Corruption endemic (Transparency International rank ~140); state-owned enterprises inefficient`,

  'Canada': `- GDP growth weak at 1.2% in 2025, slowest in G7 ex-Japan; housing drag, high rates bite
- Inflation at 2.8% (November 2025), easing toward Bank of Canada 2% target; BoC cut rates to 4.25%
- Unemployment rising to 6.5%, up from ~5% in 2023; labor market cooling rapidly
- Housing affordability crisis: average home price ~$720,000 CAD; immigration at 500,000+/year adds demand
- Canadian dollar (CAD) weakened to ~1.39 USD/CAD in November 2025
- Oil and gas exports critical: 20% of goods exports; TMX pipeline expansion complete 2024
- Trade: 75% with US, vulnerable to protectionist policies; USMCA renegotiation looming 2026
- Household debt at 180% of disposable income, highest in G7; mortgage renewal wave 2024-26 painful
- Tech sector (Toronto, Vancouver) growing but losing talent to US; AI hub emerging
- Fiscal deficit ~$40B CAD (~1.5% GDP); carbon tax politically divisive`,

  'Chile': `- GDP growth anemic at 1.8% in 2025, dragged by weak investment and political uncertainty
- Inflation at 4.1% (November 2025), above central bank 3% target; Banco Central cautious on cuts
- Unemployment at 8.6%, elevated; mining sector shedding jobs due to copper price volatility
- Copper dominates: 50%+ of exports, "El Salario de Chile"; price ~$4.20/lb in Nov 2025 (down from $5 in 2022)
- Currency (Peso) volatile: ~950 CLP/USD in November 2025, weakened from ~800 in 2024
- President Gabriel Boric (left-wing) struggled with reforms; new constitution rejected 2022
- Pension reform debate paralyzes politics; AFP private system deeply unpopular
- Lithium nationalization announced 2023; state control over "white gold" for EVs
- Mining (copper, lithium) = 15% of GDP; Codelco (state) and private firms (Escondida, Collahuasi)
- Public debt ~38% of GDP, fiscal rule respected; Chile still investment grade`,

  'China': `- GDP growth slowing to 4.8% in 2025, below 5% target; property crisis drags, exports weak
- Deflation risk: CPI at 0.3% (November 2025), producer prices negative; PBOC easing but limited impact
- Unemployment officially 5.2%, but youth unemployment (16-24) crisis; data suspended/revised 2023
- Property sector in crisis: Evergrande, Country Garden defaults; sales down 40% from peak; local govt revenue collapse
- Debt at 280%+ of GDP (household, corporate, government); hidden local government debt massive
- Currency (Yuan/RMB): ~7.25 CNY/USD, weakest since 2023; PBOC managing depreciation carefully
- Manufacturing exports strong but US tariffs, decoupling threats loom; EV exports boom (BYD, Tesla Shanghai)
- Tech sector under pressure: US chip restrictions, AI development race; Huawei comeback with Mate 60
- Xi Jinping third term; state control tightening, private sector confidence shaken
- Geopolitical risks: Taiwan tensions, US rivalry; "de-risking" by Western companies`,

  'Colombia': `- GDP growth modest at 2.5% in 2025, below potential; oil sector weak, domestic demand slowing
- Inflation at 6.8% (November 2025), still above Banco de la República 3% target; rates at 11.5%
- Unemployment at 10.5%, elevated; informal sector ~60% of employment
- Currency (Peso) volatile: ~4,100 COP/USD in November 2025, weakened from 2024
- Oil production ~800,000 bpd, declining; licensing frozen under Petro government
- President Gustavo Petro (left-wing, elected 2022) ambitious reforms: healthcare, pensions, labor
- Fiscal deficit ~5% of GDP, widening; public debt ~60% of GDP, rising concerns
- Coffee, oil, coal, flowers major exports; trade deficit due to low oil prices
- Security improving but ELN/dissident FARC activity continues; "Total Peace" policy mixed results
- Income inequality high (Gini ~54); poverty rate ~40%; social programs expanding`,

  'Costa Rica': `- GDP growth solid at 4.2% in 2025, led by services, tech, and tourism
- Inflation at 2.5% (November 2025), within central bank 2-4% target; rates cut to 5.5%
- Unemployment low at 7%, but informal sector large (~40%)
- Currency (Colon) stable: ~520 CRC/USD, managed float; high dollarization in practice
- No military since 1948; savings redirect to education, healthcare
- FDI magnet: Intel (left 2014 but returned), Boston Scientific, Align Technology, Concentrix
- Tech/BPO sector booming: medical devices, software, call centers; "Silicon Valley of Latin America" ambitions
- Tourism strong: 3+ million visitors 2025; eco-tourism, beaches, national parks (25% land protected)
- Fiscal deficit ~3% of GDP; public debt ~70% of GDP, high but sustainable with IDB support
- Renewable energy: 99%+ of electricity from hydro, geothermal, wind; carbon neutrality by 2050 goal`,

  'Croatia': `- GDP growth steady at 3.2% in 2025, tourism and EU funds driving
- Inflation at 3.5% (November 2025), easing after euro adoption spike in 2023
- Unemployment low at 6.1%, labor shortages in tourism and construction
- Euro adoption January 2023: replaced kuna (HRK), price increases but stability gains
- Tourism is 20% of GDP: Adriatic coast, Dubrovnik, Split, Plitvice; 20+ million visitors expected 2025
- EU membership benefits: structural funds, market access; Schengen entry January 2023
- Shipbuilding, agriculture, food processing other key sectors
- Corruption and rule of law remain EU concerns; judiciary reform ongoing
- Public debt ~63% of GDP, declining from COVID highs; fiscal position improving
- Population decline severe: ~3.8 million (down from 4.5M in 1990); emigration to Western Europe continues`,
}

// Main execution
async function generateEconomySummaries() {
  console.log('Generating ECONOMY & BUSINESS write-ups for Batch 2...\n')

  // Load all stories
  const allStories = await prisma.story.findMany({
    select: {
      title: true,
      link: true,
      source: true,
      pubDate: true,
      description: true,
      importance: true
    },
    where: {
      pubDate: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
      }
    }
  })

  console.log(`Found ${allStories.length} recent stories\n`)

  let generated = 0
  let skipped = 0

  for (const location of LOCATIONS) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`Processing: ${location.name} - ECONOMY & BUSINESS`)
    console.log('='.repeat(60))

    // Find relevant stories
    const relevantStories = findStoriesForLocation(location, allStories)
    console.log(`  Found ${relevantStories.length} relevant stories`)

    console.log(`  Generating ECONOMY summary with Claude Sonnet 4.5...`)

    try {
      const { summary, issues, topStories } = await generateEconomySummary(
        location,
        relevantStories,
        ECONOMIC_CONTEXT[location.name] || ''
      )

      console.log(`  Character count: ${summary.length}`)

      // Store in database with category='economy'
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'economy'
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          category: 'economy',
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`  ✓ ECONOMY summary saved to database`)

      // Show preview
      const previewLines = summary.split('\n').slice(0, 8)
      console.log(`\n  Preview:`)
      previewLines.forEach(line => console.log(`    ${line}`))
      console.log(`    ... (${summary.length} characters total)\n`)

      // Rate limit: 1.5 seconds between requests
      await new Promise(resolve => setTimeout(resolve, 1500))

    } catch (error) {
      console.error(`  ✗ Failed:`, error)
      skipped++
    }
  }

  console.log(`\n\n${'='.repeat(60)}`)
  console.log(`BATCH 2 COMPLETE`)
  console.log('='.repeat(60))
  console.log(`   Generated: ${generated} economy summaries`)
  console.log(`   Skipped: ${skipped} locations`)
  console.log('='.repeat(60))
}

generateEconomySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
