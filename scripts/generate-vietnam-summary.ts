import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Vietnam location data
const VIETNAM = {
  name: 'Vietnam',
  type: 'country',
  lat: 14.0583,
  lng: 108.2772,
  country: 'Vietnam',
  category: 'all'
}

// Tooltip (max 60 characters)
const TOOLTIP = 'To Lam\'s revolution, US-China tightrope, growth surge'

// Rest is Politics style summary for Vietnam
const SUMMARY = `# Vietnam

Here's a country that's become Asia's most interesting balancing act. After General Secretary Nguyen Phu Trong's death in July 2024, new Communist Party chief To Lam has launched what he calls an "administrative revolution"—slashing the number of provinces from 63 to 34 and promising to lead Vietnam into a "new era." But behind the reorganization lies a fundamental question: can Vietnam maintain its strategic non-alignment while both Beijing and Washington demand it choose sides?

## Major Issues

### 1. To Lam's Administrative Revolution
**What's happening:**
- Following Nguyen Phu Trong's death in July 2024, To Lam became Communist Party chief and initiated sweeping restructuring
- Central government reducing provinces and centrally-run cities from 63 to just 34—the most dramatic administrative overhaul in decades
- Prime Minister Pham Minh Chinh targeting double-digit GDP growth rates for coming decades, with 2025 growth target revised upward from 6.5% to 8%
- January 2025 Central Committee plenum enshrined aggressive economic expansion as key policy objective for 2026-2030

**Why it matters:**
- This consolidation gives Hanoi unprecedented central control over a historically fragmented administrative system
- The ambitious growth targets signal Vietnam's determination to escape the middle-income trap and compete with regional rivals
- Success would cement the Communist Party's legitimacy through economic performance rather than just political control
- Failure could expose the limits of state-directed development and fuel demands for broader political reform

**Prospects:**
- Administrative streamlining likely to improve policy coordination and reduce bureaucratic friction in the short term
- Achieving 8%+ growth faces headwinds from global economic uncertainty and trade tensions
- To Lam's consolidation of power suggests the Party will double down on technocratic governance rather than political liberalization
- Economic performance over the next 2-3 years will determine whether this restructuring succeeds or creates new bottlenecks

### 2. The Great Hedging Act: US-China Strategic Rivalry
**What's happening:**
- January 24, 2025: US Secretary of State Marco Rubio emphasized trade issues and "aggressive behavior" in South China Sea during call with Deputy PM Bui Thanh Son
- Trump administration imposed 20% tariff on Vietnamese exports and 40% tariff on transshipped goods, overshadowing 30th anniversary of US-Vietnam normalization in July 2025
- Despite tensions, Vietnam upgraded partnership with US to Comprehensive Strategic Partnership level
- Simultaneously maintaining "comrades and brothers" rhetoric with China while defending sovereignty claims in South China Sea

**Why it matters:**
- Vietnam's "bamboo diplomacy"—bending with the wind but not breaking—is under unprecedented pressure as US-China competition intensifies
- Trade war tariffs threaten Vietnam's export-driven growth model, with US being largest export destination
- Communist Party's political legitimacy rests significantly on defending territorial integrity against China in South China Sea
- Vietnam cannot afford to alienate either superpower: needs US security partnership and Chinese economic integration

**Prospects:**
- Vietnam will continue refusing formal alliances, despite pressure from both sides to pick a team
- Expect more bilateral deals balancing both powers—defense cooperation with Washington, Belt and Road participation with Beijing
- South China Sea disputes will remain flashpoint, with Vietnam likely to quietly strengthen military capabilities
- Long-term success depends on maintaining strategic ambiguity while global bipolarity deepens—an increasingly difficult tightrope

### 3. South China Sea: The Sovereignty-Legitimacy Nexus
**What's happening:**
- Defending national sovereignty and territorial integrity remains central pillar of Communist Party's political legitimacy
- Persistent tensions with China over overlapping claims continue despite surface-level diplomatic engagement
- Vietnam strengthening maritime capabilities and international legal positioning
- Balancing economic dependence on China with need to push back against territorial encroachment

**Why it matters:**
- The Party's nationalist credentials depend on being seen as defender of Vietnamese sovereignty
- Any perception of weakness toward China could undermine domestic political stability
- Economic interests (fishing, oil/gas exploration) directly affected by territorial control
- Regional security architecture increasingly defined by South China Sea dynamics

**Prospects:**
- Vietnam will continue "cooperation and struggle" strategy—engaging China diplomatically while quietly resisting
- Expect increased defense spending and military modernization, particularly naval capabilities
- International legal mechanisms and ASEAN diplomacy will remain key tools
- Risk of military incidents remains, though both sides have incentive to avoid escalation

## Summary

Vietnam in November 2025 embodies the paradox of Communist Party rule in a globalized economy: a one-party state pursuing double-digit growth while navigating great-power rivalry. To Lam's "new era" promises technocratic efficiency and economic dynamism, but the real test lies in whether Vietnam can maintain its strategic autonomy as the US-China rivalry intensifies. The South China Sea disputes ensure that economic pragmatism will always be constrained by nationalist imperatives. Watch for signs of whether the administrative revolution delivers growth results, how Vietnam manages Trump-era trade tensions, and whether the Party can sustain its balancing act between Beijing and Washington. The next 12 months will reveal whether "bamboo diplomacy" can still work when the storm becomes a hurricane.`

// Issues array for database
const ISSUES = [
  "To Lam's Administrative Revolution",
  "The Great Hedging Act: US-China Strategic Rivalry",
  "South China Sea: The Sovereignty-Legitimacy Nexus"
]

// Top stories (empty array since we're manually creating this)
const TOP_STORIES: any[] = []

async function generateVietnamSummary() {
  console.log('Generating Vietnam summary...\n')

  try {
    // Store in database with category 'all'
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: VIETNAM.name,
          type: VIETNAM.type,
          category: VIETNAM.category
        }
      },
      create: {
        name: VIETNAM.name,
        type: VIETNAM.type,
        country: VIETNAM.country,
        lat: VIETNAM.lat,
        lng: VIETNAM.lng,
        category: VIETNAM.category,
        summary: SUMMARY,
        issues: JSON.stringify(ISSUES),
        topStories: JSON.stringify(TOP_STORIES),
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: SUMMARY,
        issues: JSON.stringify(ISSUES),
        topStories: JSON.stringify(TOP_STORIES),
        storyCount: 0,
        updatedAt: new Date()
      }
    })

    console.log('Vietnam summary saved to database!')
    console.log(`\nTooltip: ${TOOLTIP}`)
    console.log(`\nSummary preview:`)
    console.log(SUMMARY.split('\n').slice(0, 15).join('\n'))
    console.log('\n...')

  } catch (error) {
    console.error('Failed to save Vietnam summary:', error)
    throw error
  }
}

generateVietnamSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
