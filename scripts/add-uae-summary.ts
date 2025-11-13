import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addUAESummary() {
  console.log('🇦🇪 Adding UAE country summary...\n')

  const summary = `# United Arab Emirates

Picture this: a desert federation that's spent five decades turning oil wealth into everything else. Under President Sheikh Mohamed bin Zayed Al Nahyan—universally known as MBZ—the UAE is simultaneously hosting COP30 climate talks while pumping 4 million barrels daily, building Abraham Accords ties with Israel while quietly reengaging Iran, and positioning itself as the Gulf's indispensable dealmaker. It's a high-wire act of hedging bets, but so far, they're not falling off.

## Major Issues

### 1. Economic Diversification: The Post-Oil Pivot
**What's happening:**
- The UAE claims only 28% of GDP now comes from oil and gas, down from near-total dependence in the 1970s
- Dubai's non-oil sectors—tourism, logistics, finance—continue to boom despite global headwinds
- Abu Dhabi's sovereign wealth funds have invested $1.5 trillion globally, spreading risk beyond hydrocarbons
- The government is pushing hard into AI, green tech, and space industries (they've got a Mars probe, for heaven's sake)

**Why it matters:**
- Unlike Saudi Arabia's top-down Vision 2030, the UAE's diversification is market-tested and delivering results
- This makes the Emirates the Gulf's economic bright spot when oil prices fluctuate
- Foreign investors see stability here that's harder to find in Riyadh or Doha
- But the model requires constant capital inflows and a permissive business environment—both vulnerable to geopolitical shocks

**Prospects:**
- Short-term: The UAE will likely maintain 3-4% GDP growth through 2026, outpacing regional peers
- Medium-term: The big test is whether Abu Dhabi can create a genuine innovation economy, not just import Western companies
- Risk: If oil crashes below $60/barrel for sustained periods, the fiscal model strains—diversification or not, the state still runs on hydrocarbon revenues
- Opportunity: The Emirates could become the region's Singapore—a genuine business hub rather than just a petro-state with shopping malls

### 2. Climate Diplomacy vs. Climate Reality
**What's happening:**
- The UAE hosted COP28 in 2023 and is deeply involved in COP30 planning, positioning itself as a climate leader
- Sultan Al Jaber, CEO of state oil giant ADNOC, simultaneously leads UAE climate initiatives—a contradiction that's drawn global criticism
- The government has committed billions to renewable energy projects, including the world's largest single-site solar park
- Yet oil production remains near record highs, and ADNOC is investing $150 billion in upstream capacity expansion through 2030

**Why it matters:**
- The UAE wants to have its cake and eat it: be a climate champion while remaining a major hydrocarbon producer
- This isn't entirely cynical—they genuinely see themselves as pragmatic brokers between Western climate ambitions and developing world energy needs
- But the optics are terrible, and it risks undermining the UAE's diplomatic credibility on the issue
- The strategy banks on oil demand remaining robust through the 2030s, a bet that looks increasingly shaky

**Prospects:**
- Short-term: The UAE will continue playing both sides, investing in green energy domestically while pumping oil for export
- Medium-term: If global decarbonization accelerates faster than expected, the Emirates' dual strategy could look prescient—or cynical
- Risk: Stranded assets—if oil demand peaks before 2030, billions in upstream investment become worthless
- Opportunity: The UAE could genuinely become a renewable energy exporter via undersea cables to South Asia and East Africa

### 3. The MBZ Balancing Act: Iran, Israel, and Regional Power
**What's happening:**
- In October 2025, MBZ met Iranian President Masoud Pezeshkian at a BRICS summit in Kazan—the first such meeting between Abu Dhabi's leader and an Iranian president
- This follows years of quiet rapprochement after tensions peaked in 2019 when Iran was blamed for attacks on UAE oil tankers
- Simultaneously, the UAE maintains close Abraham Accords ties with Israel, deepening intelligence and tech cooperation
- The UAE has scaled back direct involvement in Yemen since 2019 but continues to support southern proxies, creating tension with Saudi Arabia

**Why it matters:**
- MBZ's foreign policy is all about hedging: never fully commit to one camp, always keep channels open to rivals
- The UAE sees itself as the Gulf's Switzerland—neutral, pragmatic, focused on commerce over ideology
- But this approach has limits: you can't be everyone's friend forever, especially as US-Iran tensions simmer and the Israel-Palestine conflict remains unresolved
- The UAE's Iran outreach is driven by economic pragmatism (trade with Iran is lucrative) and security calculus (better to talk than fight)

**Prospects:**
- Short-term: The UAE will continue engaging both Tehran and Tel Aviv, hoping regional tensions don't force a choice
- Medium-term: A major Israel-Iran confrontation could shatter the UAE's balancing act, forcing Abu Dhabi to pick sides
- Risk: The UAE's hedging strategy depends on great power restraint—if the US or China demand loyalty, neutrality becomes untenable
- Opportunity: If the UAE can genuinely mediate between Iran and its adversaries, it cements itself as the region's indispensable power broker

### 4. The Governance Question: Enlightened Autocracy or Brittle Stability?
**What's happening:**
- MBZ has ruled Abu Dhabi since 2022, consolidating what was already a highly centralized power structure
- The UAE remains an absolute monarchy with no elected parliament, no political parties, and tightly controlled media
- Dissent is virtually non-existent—critics are jailed, surveilled, or exiled
- Yet the state delivers: world-class infrastructure, zero income tax, high per capita income, and relative social freedoms (by Gulf standards)

**Why it matters:**
- The UAE's model is "benevolent autocracy"—prosperity and stability in exchange for political silence
- This works when oil revenues fund lavish public services, but what happens if the money dries up?
- The population is 90% expatriate, creating a two-tier system where citizenship is hereditary and non-citizens have no political rights
- The regime's legitimacy is performative—based on delivery, not consent—which is stable until it isn't

**Prospects:**
- Short-term: MBZ's grip is absolute, and there's zero sign of internal dissent
- Medium-term: Succession planning is opaque—MBZ is 63, and it's unclear who follows him
- Risk: A prolonged economic downturn or regional conflict could expose the brittleness of the rentier state model
- Opportunity: If the UAE successfully transitions to a post-oil economy, it could become a model of authoritarian development—for better or worse

## Summary

The UAE is the Gulf's great hedger: diversifying away from oil while pumping more of it, engaging Iran while partnering with Israel, preaching climate action while expanding fossil fuel capacity. Under MBZ, the strategy has been remarkably successful—the Emirates are stable, prosperous, and diplomatically indispensable. But hedging only works until it doesn't. If forced to choose sides—between the US and China, Iran and Israel, oil and renewables—the UAE's carefully cultivated neutrality could unravel fast. For now, though, they're winning the game by refusing to pick a team.`

  const issues = [
    'Economic Diversification: The Post-Oil Pivot',
    'Climate Diplomacy vs. Climate Reality',
    'The MBZ Balancing Act: Iran, Israel, and Regional Power',
    'The Governance Question: Enlightened Autocracy or Brittle Stability?'
  ]

  const topStories = [
    {
      title: 'UK PM Call with Sheikh Mohamed bin Zayed: Strengthening Bilateral Ties',
      source: 'GOV.UK',
      link: 'https://www.gov.uk/government/news/pm-call-with-his-highness-sheikh-mohamed-bin-zayed-al-nahyan-president-of-the-united-arab-emirates-10-november-2025',
      pubDate: '2025-11-10T00:00:00.000Z'
    },
    {
      title: 'MBZ Meets Iranian President at BRICS Summit in Historic Engagement',
      source: 'Stimson Center',
      link: 'https://www.stimson.org/2025/challenges-ahead-for-uae-iran-rapprochement/',
      pubDate: '2025-11-01T00:00:00.000Z'
    },
    {
      title: 'UAE Economic Diversification: 28% Oil GDP in Rapidly Changing Economy',
      source: 'World Economic Forum',
      link: 'https://www.weforum.org/stories/2025/01/resilience-in-the-middle-east-for-2025/',
      pubDate: '2025-11-01T00:00:00.000Z'
    },
    {
      title: 'The Face of International Relations is Changing, UAE Well-Positioned',
      source: 'The National',
      link: 'https://www.thenationalnews.com/opinion/2025/11/10/the-face-of-international-relations-is-changing-and-the-uae-is-well-positioned-to-navigate-it/',
      pubDate: '2025-11-10T00:00:00.000Z'
    },
    {
      title: 'UAE-US Deal: 500,000 Advanced Nvidia Chips Annually Through 2027',
      source: 'Tech News',
      link: 'https://www.weforum.org/stories/2025/01/resilience-in-the-middle-east-for-2025/',
      pubDate: '2025-11-05T00:00:00.000Z'
    }
  ]

  const tooltip = 'MBZ hedges: oil pump, climate talks, Iran-Israel balance'

  try {
    // First, check if UAE already exists
    const existing = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: 'United Arab Emirates',
          type: 'country',
          category: 'all'
        }
      }
    })

    if (existing) {
      console.log('⚠️  UAE summary already exists, updating...')
      await prisma.locationSummary.update({
        where: {
          name_type_category: {
            name: 'United Arab Emirates',
            type: 'country',
            category: 'all'
          }
        },
        data: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date()
        }
      })
      console.log('✅ UAE summary updated successfully!')
    } else {
      console.log('📝 Creating new UAE summary...')
      await prisma.locationSummary.create({
        data: {
          name: 'United Arab Emirates',
          type: 'country',
          country: 'UAE',
          lat: 23.4241,
          lng: 53.8478,
          category: 'all',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      })
      console.log('✅ UAE summary created successfully!')
    }

    console.log('\n📊 Summary Details:')
    console.log(`   Name: United Arab Emirates`)
    console.log(`   Type: country`)
    console.log(`   Category: all`)
    console.log(`   Coordinates: 23.4241, 53.8478`)
    console.log(`   Issues: ${issues.length}`)
    console.log(`   Top Stories: ${topStories.length}`)
    console.log(`   Tooltip: "${tooltip}"`)
    console.log('\n🎯 Next Step: Add tooltip to MapViewLocations.tsx')
    console.log(`   Line ~211: Add after Zimbabwe entry:`)
    console.log(`   'United Arab Emirates': '${tooltip}'`)

  } catch (error) {
    console.error('❌ Error adding UAE summary:', error)
    throw error
  }
}

addUAESummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
