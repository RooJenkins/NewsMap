import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Batch 2: Countries for technology write-ups
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

  // Add country-specific tech keywords
  const countryKeywords: { [key: string]: string[] } = {
    'Bosnia and Herzegovina': ['bosnia', 'bosnian', 'sarajevo', 'balkan tech'],
    'Botswana': ['botswana', 'gaborone', 'african tech'],
    'Brazil': ['brazil', 'brazilian', 'sao paulo', 'nubank', 'mercado libre', 'latin tech'],
    'Bulgaria': ['bulgaria', 'bulgarian', 'sofia', 'outsourcing'],
    'Burkina Faso': ['burkina', 'ouagadougou', 'sahel'],
    'Cambodia': ['cambodia', 'cambodian', 'phnom penh', 'southeast asia tech'],
    'Cameroon': ['cameroon', 'cameroonian', 'yaounde', 'douala', 'african tech'],
    'Canada': ['canada', 'canadian', 'toronto', 'vancouver', 'shopify', 'cohere', 'ai'],
    'Chile': ['chile', 'chilean', 'santiago', 'latin america tech', 'startup'],
    'China': ['china', 'chinese', 'beijing', 'alibaba', 'tencent', 'huawei', 'bytedance', 'ai', 'semiconductor'],
    'Colombia': ['colombia', 'colombian', 'bogota', 'medellin', 'rappi', 'latin tech'],
    'Costa Rica': ['costa rica', 'costa rican', 'san jose', 'central america'],
    'Croatia': ['croatia', 'croatian', 'zagreb', 'infobip', 'adriatic'],
  }

  const extraKeywords = countryKeywords[location.name] || []
  keywords.push(...extraKeywords)

  // Filter stories that mention this location or tech topics
  const relevantStories = allStories.filter(story => {
    const text = `${story.title} ${story.description || ''}`.toLowerCase()
    return keywords.some(keyword => text.includes(keyword)) ||
           (text.includes('tech') || text.includes('ai') || text.includes('startup') || text.includes('digital'))
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
async function generateTechnologySummary(
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
  const storyContext = stories.length > 0 ? stories.map((s, i) =>
    `${i + 1}. "${s.title}" - ${s.source} (${s.pubDate.toLocaleDateString()})\n   ${s.description || 'No description'}`
  ).join('\n\n') : 'No recent tech stories available - rely on general knowledge.'

  const prompt = `You are writing a TECHNOLOGY write-up in the style of Ben Thompson (Stratechery) / Kara Swisher.

CATEGORY: Technology
VOICE: Ben Thompson (Stratechery) / Kara Swisher
STYLE: Sharp analysis of tech trends, startup ecosystems, and digital infrastructure. Focus on what's actually happening versus hype. Cut through buzzwords. Be direct about what works and what doesn't.

FOCUS AREAS FOR TECHNOLOGY:
- Tech startup ecosystem and major companies
- Digital infrastructure (internet penetration, speeds, 5G)
- Government tech policy and regulation
- AI/emerging tech adoption
- Tech talent and education (coding bootcamps, CS programs)
- Cybersecurity and surveillance issues

LENGTH: 2,500-3,500 characters

${additionalContext ? `\nKEY TECHNOLOGY CONTEXT FOR NOVEMBER 2025:\n${additionalContext}\n` : ''}

${storyContext ? `\nRECENT NEWS STORIES:\n${storyContext}\n` : ''}

Write a comprehensive technology summary for ${location.name} that:

1. OPENING HOOK (100-150 words): Lead with the most interesting tech development or state of the ecosystem. Be sharp and direct.

2. CURRENT STATE (300-400 words):
   - What's the startup ecosystem like? Any unicorns or major exits?
   - Digital infrastructure reality (internet penetration, speeds, mobile vs fixed)
   - Major tech companies or sectors
   - Venture capital and funding environment

3. CHALLENGES & OPPORTUNITIES (300-400 words):
   - Government tech policy - helping or hurting?
   - Talent situation: brain drain or retention?
   - AI and emerging tech adoption
   - Cybersecurity threats and surveillance issues
   - Specific examples of what's working or failing

4. FUTURE OUTLOOK (200-300 words):
   - Where is the tech scene heading?
   - What sectors show promise?
   - Risks and opportunities

5. BOTTOM LINE (100 words):
   - Sharp synthesis: Is this a tech market to watch or skip?
   - Key takeaway in Ben Thompson/Kara Swisher style

CRITICAL REQUIREMENTS:
- Use real November 2025 context and recent tech developments
- Be specific: company names, funding rounds, infrastructure stats
- Ben Thompson analytical sharpness - cut through hype
- Compare to regional/global tech trends where relevant
- Be honest: don't oversell weak ecosystems or undersell strong ones
- 2,500-3,500 characters total

Generate the technology write-up now:`

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

    // Extract key issues (look for major tech themes)
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
      issues: JSON.stringify(issues.length > 0 ? issues : ['Tech Ecosystem', 'Digital Infrastructure', 'AI Adoption', 'Tech Policy', 'Talent & Education']),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`Error generating technology summary for ${location.name}:`, error)
    throw error
  }
}

// Technology context for November 2025 (researched)
const TECH_CONTEXT: { [key: string]: string } = {
  'Bosnia and Herzegovina': `- IT sector growing: ~30,000 employed in tech, many working for foreign clients
- Internet penetration: ~75%, 4G widely available, 5G limited to Sarajevo/Banja Luka
- Brain drain major issue: talented developers leave for Germany, Austria, Western Europe (2-3x salary)
- No major unicorns, but growing outsourcing/nearshoring hub for EU companies
- Startup scene nascent: limited VC, founders bootstrap or seek diaspora funding
- Tech education: Universities in Sarajevo, Banja Luka produce CS graduates, but curriculum outdated
- Government digital services improving slowly; e-government adoption low
- Cybersecurity weak; frequent scams targeting elderly
- Remote work boom during COVID helped retain some talent earning Western salaries locally
- Political dysfunction and corruption hinder tech policy progress`,

  'Botswana': `- Internet penetration: ~50%, mobile dominates (4G coverage in cities)
- Government investing in digital transformation: "Smart Botswana" initiative, e-government push
- Startup ecosystem small: few VCs, mostly bootstrapped businesses in fintech, e-commerce
- Major sectors: Mobile money (Orange Money, MyZaka), agri-tech, tourism tech
- No unicorns; biggest exits modest by global standards
- Brain drain: talented developers often move to South Africa, UAE for better pay
- Tech education: University of Botswana, BIUST produce graduates, but scale is limited
- Innovation Hub Botswana supports startups, but funding scarce
- Cybersecurity concerns: digital literacy low, scams prevalent
- Fiber optic infrastructure improving; Botswana connected via multiple undersea cables
- Positives: political stability, low corruption help business environment`,

  'Brazil': `- Latin America's largest tech ecosystem: Multiple unicorns (Nubank $50B+ valuation, 99, iFood, QuintoAndar, Gympass)
- November 2025: VC funding rebounded after 2023-24 slowdown; fintech and e-commerce still hot
- Internet penetration: ~85%, strong 4G/5G rollout in cities, rural areas lag
- São Paulo is hub: vibrant startup scene, accelerators (Google Campus, Station F partnership), active VC market
- Major players: Nubank (world's largest digital bank by customers ~100M), MercadoLibre dominates e-commerce
- AI adoption growing: startups in AI for agriculture, healthcare, fraud detection
- Tech talent: strong CS programs (USP, UNICAMP), but many developers leave for US or remote work
- Government tech policy mixed: Lula administration pushing digital inclusion, but bureaucracy remains
- Cybersecurity major concern: Brazil leads globally in banking trojans, PIX fraud epidemic
- Challenges: economic volatility, high taxes (over 30% on SaaS), complex labor laws
- Remote work revolution helped retain talent; developers can earn global salaries locally`,

  'Bulgaria': `- EU's outsourcing champion: ~50,000+ IT workers, sector worth ~€1.5B annually
- Sofia is tech hub: Google, HP, SAP, VMware, Cisco all have major offices
- Internet penetration: 75%+, excellent infrastructure (fastest EU broadband in some rankings)
- Startup scene modest: No major unicorns, but growing SaaS/B2B companies (Payhawk, Dronamics)
- AI adoption: Increasing in outsourcing services, limited homegrown AI companies
- Tech education: Strong CS programs (Sofia University, Technical University), coding bootcamps growing
- Government digitalization improving: e-government services expanding, but bureaucracy remains
- Brain drain persistent: many developers move to Germany, UK, Netherlands for 2x salary
- Low corporate tax (10%) attracts companies, but wages still 1/3 of Western Europe
- Cybersecurity: Decent frameworks, but ransomware and phishing common
- EU membership helps: Access to EU tech funding, Digital Europe Programme
- Challenges: aging population, political instability affects long-term tech strategy`,

  'Burkina Faso': `- Internet penetration: ~25%, mostly mobile, 4G in cities (Ouagadougou, Bobo-Dioulasso)
- Tech ecosystem minimal: Security crisis since 2022 jihadist insurgency severely impacts development
- Startup scene tiny: Few VCs, most funding from international development orgs
- Mobile money dominant: Orange Money, Moov Africa Money for financial inclusion (~30% usage)
- No tech unicorns; e-commerce and fintech are primary sectors
- Tech education: University of Ouagadougou, few coding bootcamps, limited scale
- Government digital strategy stalled: Political instability (military coups 2022), security crisis priority
- Brain drain severe: Engineers leave for Côte d'Ivoire, Senegal, France
- Infrastructure challenges: unreliable electricity, limited fiber optic coverage
- Cybersecurity nearly nonexistent: Scams widespread, low digital literacy
- French language advantage for outsourcing, but instability prevents investment
- Current reality: Tech development essentially frozen due to security/political crisis`,

  'Cambodia': `- Internet penetration: ~60%, mobile-first market (4G widespread, 5G launching in cities)
- Tech ecosystem emerging: Growing startup scene in fintech, delivery, e-commerce
- Major players: Wing (mobile payments, ~12M users), Pi Pay, ABA Bank digital services
- Delivery wars: Nham24, FoodPanda competing; ride-hailing dominated by Grab, InDrive
- No unicorns yet, but startups raising Series A/B rounds (primarily regional VC)
- Government digitalization: PM Hun Manet (took office 2023) pushing "Digital Cambodia 2030"
- Bakong (central bank digital currency) launched 2020, gaining traction for payments
- Tech education: Growing coding bootcamps (Slash, SabaiCode), universities improving CS programs
- Brain drain moderate: Many study abroad (US, Australia), some return; salaries 1/5 of Singapore
- Challenges: Corruption, weak IP protection, authoritarian controls on internet/speech
- Cybersecurity: Scams epidemic (online gambling, pig butchering schemes), government surveillance
- Chinese investment heavy: Huawei builds infrastructure, but US tech companies wary
- Remote work growing: Enables earning regional salaries while living in low-cost Phnom Penh`,

  'Cameroon': `- Internet penetration: ~40%, mobile dominates, 4G in cities (Yaoundé, Douala)
- Tech ecosystem small: Francophone Africa's startup scene trails Anglophone (Kenya, Nigeria, South Africa)
- Startup scene nascent: Limited VC, most funding from development finance institutions
- Mobile money: Orange Money, MTN Mobile Money drive financial inclusion (~25% usage)
- No unicorns; e-commerce (Jumia), fintech, agri-tech are key sectors
- Tech hubs: ActivSpaces (Douala, Yaoundé, Buea) supports startups, limited scale
- Government digital strategy weak: Corruption, bureaucracy hinder tech policy implementation
- Anglophone crisis (since 2016): Tech talent in English-speaking regions (Silicon Mountain in Buea) fled or operates under constraints
- Brain drain severe: Developers leave for France, Canada, US
- Tech education: Universities produce graduates, but curriculum outdated, limited coding bootcamps
- Infrastructure: Unreliable electricity major barrier, fiber optic expanding slowly
- Cybersecurity: Low digital literacy, scams common, government internet shutdowns in Anglophone regions
- Challenges: Political repression, corruption, infrastructure gaps block tech growth`,

  'Canada': `- Robust tech ecosystem: Multiple unicorns (Shopify $70B+, Cohere AI $5B+ valuation, Wealthsimple)
- November 2025: AI boom accelerating; Toronto-Waterloo corridor is AI powerhouse (Geoffrey Hinton legacy)
- Internet penetration: 95%+, excellent infrastructure, but rural broadband gaps persist
- Major hubs: Toronto (fintech, AI), Vancouver (gaming, VR), Montreal (AI, gaming, aerospace tech), Waterloo (enterprise SaaS)
- Tech giants: Shopify leads e-commerce; Big Tech has major offices (Google, Meta, Amazon, Microsoft)
- AI dominance: Vector Institute, Mila (Quebec AI Institute), Element AI alumni building new startups; Cohere competes with OpenAI
- VC funding strong: $5-10B annually, but many startups still exit to US acquirers
- Tech talent: Strong immigration draws global talent, but brain drain to US (2x salaries) continues
- Government support: SR&ED tax credits, innovation grants, but startup visa program underutilized
- Challenges: High cost of living (Toronto, Vancouver rents), telecom oligopoly (Rogers, Bell, Telus), US acquisition culture
- Cybersecurity: Growing sector (BlackBerry Cybersecurity), but ransomware attacks on healthcare/infrastructure rising
- Remote work: Enabled Canadians to earn US salaries while living locally, easing brain drain`,

  'Chile': `- Latin America's #3 tech ecosystem after Brazil, Mexico: Santiago is regional startup hub
- November 2025: Post-pandemic VC rebound; fintech and e-commerce lead sectors
- Internet penetration: ~85%, excellent 4G/5G in cities, fiber broadband widespread
- Startup scene mature: Government-backed Start-Up Chile (since 2010) attracted global founders
- Near-unicorns: Cornershop (acquired by Uber 2020 for $3B), NotCo (plant-based food tech ~$1.5B valuation), Betterfly
- Major sectors: Fintech (Khipu, Fintual), e-commerce, mining tech, agri-tech
- AI adoption growing: Startups in mining optimization, precision agriculture
- Tech education: Strong universities (U. Chile, PUC), coding bootcamps (Desafío Latam, Laboratoria)
- Brain drain moderate: Many study/work in US but return; remote work helps retain talent
- Government digitalization: Strong e-government (ChileAtiende), but new leftist Boric administration increased regulation (concerns over "over-regulation")
- Cybersecurity: Better than regional peers, but ransomware targeting mining/retail rising
- Challenges: 2019 social unrest legacy, new constitution debates created uncertainty (rejected 2022, 2023)
- Lithium boom: Tech for mining sector growing as Chile dominates global lithium supply (EVs, batteries)`,

  'China': `- Global tech superpower: Multiple mega-caps (Alibaba, Tencent, ByteDance, Huawei, Baidu, Xiaomi)
- November 2025: US-China tech cold war intensifies; semiconductor restrictions bite hard
- Internet penetration: ~75% (~1B users), world-class 5G (largest 5G network), but Great Firewall严控
- Startup ecosystem: VC funding down 50% from 2021 peak; government crackdown on tech giants (2021-23) chilled IPOs
- AI race: Baidu (Ernie Bot), Alibaba (Tongyi Qianwen), ByteDance (doubao) competing with GPT; DeepSeek AI models gaining traction
- Semiconductor crisis: US export controls (2022, 2023, 2024) block advanced chips (NVIDIA A100/H100); SMIC can't produce sub-7nm at scale
- Tech giants recovering: After 2021-23 regulatory crackdown (Jack Ma, Didi, tutoring), Xi Jinping eased pressure in 2024-25 to boost economy
- E-commerce: Taobao, JD.com, Pinduoduo (Temu global expansion) dominate; live-streaming commerce massive
- Surveillance tech: Facial recognition, social credit systems, AI surveillance ubiquitous; exports to authoritarian regimes
- Tech talent: Huge pool (millions of CS grads annually), but economic slowdown drives unemployment; "lying flat" trend among youth
- Government policy: "Made in China 2025" pushes self-sufficiency in chips, AI, quantum; massive state subsidies
- Challenges: US decoupling, demographic decline, real estate crisis impacts tech spending, brain drain to Singapore/US`,

  'Colombia': `- Latin America's #4 tech ecosystem: Bogotá and Medellín are startup hubs
- November 2025: VC funding rebounding after 2023 slowdown; fintech and delivery apps lead
- Internet penetration: ~75%, 4G widespread, 5G rolling out in major cities
- Startup scene vibrant: Multiple near-unicorns (Rappi delivery ~$5B valuation, Habi proptech, Addi fintech)
- Major sectors: Fintech (Nequi, Daviplata digital wallets), e-commerce, delivery, proptech
- Rappi dominance: Super-app model (delivery, payments, groceries) competes with regional giants
- AI adoption: Early stage; startups in fraud detection, customer service automation
- Tech education: Universities improving (U. de los Andes, U. Nacional), coding bootcamps growing (Holberton, Platzi)
- Medellín's turnaround: Former cartel city now "innovation hub" (Ruta N, tech parks), but sustainability questioned
- Brain drain: Many developers leave for US, Spain; remote work helps retain some
- Government digitalization: Improving under Petro admin, but bureaucracy remains
- Cybersecurity: Ransomware attacks rising, banking fraud common (especially mobile)
- Challenges: Economic volatility, Petro's leftist policies scare some investors, ongoing security issues in rural areas
- Positives: Young population, growing middle class, improving infrastructure`,

  'Costa Rica': `- Central America's tech leader: San José is regional hub for tech services and startups
- November 2025: Steady growth; not as flashy as Mexico/Brazil but stable ecosystem
- Internet penetration: ~80%, good 4G coverage, fiber broadband expanding
- Tech services: Major outsourcing hub (Intel had major operations 1998-2024, now smaller R&D), HP, IBM, Accenture offices
- Startup scene modest: No unicorns, but growing fintech, e-commerce, tourism tech sectors
- Major companies: BAC Credomatic (fintech), Gorilla Logic (software services), small SaaS startups
- AI adoption: Limited; mostly in customer service automation for BPO sector
- Tech education: Strong universities (UCR, TEC), government invests in STEM, English proficiency high (advantage for US outsourcing)
- Brain drain: Moderate; stable democracy and quality of life help retain talent, but US salaries still 3x higher
- Government digitalization: Good e-government services, transparent bureaucracy (by regional standards)
- Cybersecurity: Better than regional peers; data protection laws improving
- Challenges: Small domestic market (5M people), limited VC ecosystem, dependence on US market
- Positives: Political stability, educated workforce, no army (funds education/healthcare instead), biodiversity attracts eco-tech
- Intel's 2024 downsizing: Lost ~1,500 jobs, but ecosystem diversified enough to absorb`,

  'Croatia': `- EU's emerging outsourcing hub: Zagreb and coastal cities (Split, Dubrovnik) attract remote workers
- November 2025: Growing tech scene, but still small by EU standards
- Internet penetration: ~80%, good 4G/5G in cities, fiber broadband expanding
- Startup scene: Few unicorns, but Infobip (cloud communications platform, ~$1B+ valuation) is success story
- Major sectors: Outsourcing (nearshoring for Western Europe), gaming, SaaS, tourism tech
- Gaming: Croteam (Serious Sam), Nanobit (mobile games) are notable; sector worth ~€150M
- AI adoption: Early stage; mostly in existing software services companies adding AI features
- Tech education: Universities (Zagreb, Split) produce CS graduates, but brain drain severe (Germany, Austria, Ireland 2-3x salary)
- Government digitalization: Improving; e-Croatia portal for government services, but bureaucracy remains
- Cybersecurity: Moderate; EU cybersecurity frameworks apply, but ransomware attacks increasing
- Brain drain: Major issue; young developers leave for Western Europe immediately after graduation
- Digital nomad visa: Attracts remote workers (2021 program), boosting ecosystem but not creating local startups
- Challenges: Small domestic market (3.8M people), aging population, limited VC funding
- Positives: EU membership, Adriatic coast attracts talent, lower costs than Western Europe for nearshoring`,
}

// Main execution
async function generateTechnologySummaries() {
  console.log('Generating TECHNOLOGY write-ups for Batch 2...\n')
  console.log('Countries:', LOCATIONS.map(l => l.name).join(', '))
  console.log()

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
    console.log(`Processing: ${location.name} - TECHNOLOGY`)
    console.log('='.repeat(60))

    // Find relevant stories
    const relevantStories = findStoriesForLocation(location, allStories)
    console.log(`  Found ${relevantStories.length} relevant stories`)

    console.log(`  Generating TECHNOLOGY summary with Claude Sonnet 4.5...`)

    try {
      const { summary, issues, topStories } = await generateTechnologySummary(
        location,
        relevantStories,
        TECH_CONTEXT[location.name] || ''
      )

      console.log(`  Character count: ${summary.length}`)

      // Store in database with category='technology'
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'technology'
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          category: 'technology',
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
      console.log(`  ✓ TECHNOLOGY summary saved to database`)

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
  console.log(`BATCH 2 TECHNOLOGY WRITE-UPS COMPLETE`)
  console.log('='.repeat(60))
  console.log(`   Generated: ${generated} technology summaries`)
  console.log(`   Skipped: ${skipped} locations`)
  console.log(`   Total countries: ${LOCATIONS.length}`)
  console.log('='.repeat(60))
}

generateTechnologySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
