import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addUzbekistanSummary() {
  console.log('🇺🇿 Adding Uzbekistan country summary...\n')

  const summary = `# Uzbekistan

Here's the Central Asian riddle: Shavkat Mirziyoyev wants to be the region's economic tiger whilst running one of its most suffocating autocracies. Something has to give.

## Major Issues

### 1. The Great Liberalization Lie
**What's happening:**
- On paper, it's a reformist's dream. The World Bank projects 6.2% GDP growth for 2025, the IMF gushes about "virtuous cycles," and WTO accession is slated for 2026
- Since 2016, Mirziyoyev has unified exchange rates, privatized state enterprises, and opened trade
- Bilateral trade with Russia hit new heights in November 2025, with Putin personally ringing to discuss "strategic partnership" energy deals
- Annual GDP growth has averaged 5-6% since 2016, with the national poverty rate falling to 8.9%
- Market-oriented reforms include unifying exchange rates, lifting currency restrictions, simplifying customs and tax rules, and liberalizing trade

**Why it matters:**
- While your currency can move freely, you cannot. Political pluralism is an afterthought
- The five parties allowed to contest elections are all loyal to Mirziyoyev
- OSCE observers didn't mince words: voters have "no genuine choice"
- You can open a business, just don't open your mouth
- As Mirziyoyev moves to liberalize the economy, he keeps a tight lid on political life—individual rights and political pluralism remain afterthoughts

**Prospects:**
- Short-term: Economic growth will likely continue at 5-6% through 2026, attracting foreign investment and WTO membership
- Medium-term: The contradiction between economic openness and political repression will intensify
- Risk: Without political release valves, economic frustrations have nowhere to go except into silence or explosion
- Opportunity: If Mirziyoyev allows even modest political liberalization to match economic reforms, Uzbekistan could become Central Asia's development model

### 2. The Soviet Toolkit Returns
**What's happening:**
- February 2025 brought the death in custody of YouTuber Mustafa Tursynbayev, sentenced alongside fellow blogger Salamat Seitmuratov to five years in a closed trial on fabricated charges
- The real crime: insulting the president online—now punishable by five years imprisonment
- Blogger Valijon Kalonov has been held in forced psychiatric detention since August 2021 for criticizing Mirziyoyev before elections
- Shahida Salomova sits in a Tashkent psychiatric hospital for the same "offense"
- Human Rights Watch's 2025 report catalogues 21 journalists and bloggers prosecuted between 2022-2025
- The brief media thaw after 2016 is over

**Why it matters:**
- This is textbook Soviet repression: critics aren't just jailed, they're declared insane
- The misuse of psychiatric detention for political persecution is a deeply troubling practice reminiscent of Soviet-era abuses
- Torture in police custody persists with impunity
- Religious freedom is strangled—23 Muslims arrested in 2024 alone for alleged Hizb-ut Tahrir membership on vague extremism charges
- Investigations uncovered $100 million in overpriced natural gas contracts awarded to a company linked to Mirziyoyev's son-in-law
- Prior investigations established a pattern of state contracts and investments going to networks of companies owned by the president's extended family

**Prospects:**
- Short-term: Repression will intensify as Mirziyoyev consolidates power ahead of future elections
- Medium-term: International pressure from the West is unlikely to change behavior while Russia and China offer unconditional support
- Risk: Forced psychiatric detention and custodial deaths will further isolate Uzbekistan from Western partnerships
- Opportunity: None—this is pure autocratic consolidation with no upside except regime survival

### 3. Playing the Regional Power Broker
**What's happening:**
- Uzbekistan has positioned itself as Central Asia's diplomatic bridge to Taliban-ruled Afghanistan, going furthest among regional powers to engage post-US withdrawal Kabul
- Tashkent and the Taliban signed agreements targeting $3 billion in bilateral trade, electricity cooperation, and a joint free economic zone
- The Trans-Afghan Railway linking Uzbekistan, Afghanistan, and Pakistan represents a multibillion-dollar bet on regional integration
- October 2025's Pakistan-Afghanistan ceasefire—brokered in Istanbul after deadly border clashes—exposed the fragility
- Trade was "severely disrupted," threatening the railway, the TAPI gas pipeline, and CASA-1000 electricity projects
- At a late-October forum in Shymkent, Kazakhstan, Afghan and Central Asian officials discussed economic cooperation

**Why it matters:**
- The stakes are enormous: Afghanistan and Uzbekistan have signed numerous agreements to grow bilateral trade, expand electricity cooperation, and establish joint markets
- Several big Central Asia-South Asia projects require close Afghanistan-Pakistan collaboration: the Trans-Afghan Railway, TAPI natural gas pipeline, and CASA-1000 electricity project
- Mirziyoyev is gambling Uzbekistan's future on Taliban stability and Pakistani cooperation—two historically unreliable bets
- Can you build a Silk Road on quicksand?

**Prospects:**
- Short-term: Uzbekistan will continue leading Central Asian engagement with Afghanistan, betting on economic pragmatism over ideology
- Medium-term: Afghanistan's internal stability will determine whether these infrastructure investments pay off or become stranded assets
- Risk: Another Pakistan-Afghanistan conflict, Taliban factional fighting, or terrorist resurgence could destroy billions in investments
- Opportunity: If Afghanistan stabilizes, Uzbekistan becomes the indispensable transit hub between Central Asia and South Asia

## Summary

Mirziyoyev has built a gleaming economic façade with Soviet-era dungeons in the basement. His bet is that 6% growth buys enough stability to crush dissent indefinitely, and that Afghanistan's chaos makes Uzbekistan look like the region's safe harbour. He may be right—Central Asia's history suggests economics can outrun politics for decades. But bloggers in psychiatric hospitals and closed trials for YouTube videos aren't signs of confidence. They're signs of fear. The question isn't whether this model is sustainable. It's how long the international community will pretend economic reform and political repression can coexist without consequence. So far, the answer is: indefinitely.`

  const issues = [
    'The Great Liberalization Lie: 6.2% growth, zero political freedom',
    'The Soviet Toolkit Returns: Psychiatric detention for bloggers, 21 prosecuted',
    'Playing the Regional Power Broker: $3B Taliban bet, infrastructure gamble'
  ]

  const topStories = [
    {
      title: 'Russia-Uzbekistan Trade & Investment Relations: November 2025 Update',
      source: "Russia's Pivot to Asia",
      link: 'https://russiaspivottoasia.com/russia-uzbekistan-trade-investment-relations-november-2025-update/',
      pubDate: '2025-11-01T00:00:00.000Z'
    },
    {
      title: 'Uzbekistan Emerges as One of Europe and Central Asia\'s Fastest-Growing Economies',
      source: 'The Times Of Central Asia',
      link: 'https://timesca.com/uzbekistan-emerges-as-one-of-europe-and-central-asias-fastest-growing-economies/',
      pubDate: '2025-11-01T00:00:00.000Z'
    },
    {
      title: 'World Report 2025: Uzbekistan - Human Rights Concerns Intensify',
      source: 'Human Rights Watch',
      link: 'https://www.hrw.org/world-report/2025/country-chapters/uzbekistan',
      pubDate: '2025-11-01T00:00:00.000Z'
    },
    {
      title: 'Pakistan and Afghanistan Ceasefire Agreement - Regional Impact',
      source: 'NPR',
      link: 'https://www.npr.org/2025/10/31/g-s1-95838/pakistan-afghanistan-ceasefire-taliban-turkey-qatar',
      pubDate: '2025-10-31T00:00:00.000Z'
    },
    {
      title: 'Afghanistan Seeks Alternatives to Pakistan Trade - Central Asia Fallout',
      source: 'The Times Of Central Asia',
      link: 'https://timesca.com/afghanistan-seeks-alternatives-to-pakistan-trade-fallout-likely-for-central-asia/',
      pubDate: '2025-11-05T00:00:00.000Z'
    }
  ]

  const tooltip = '6% growth, Soviet repression, Taliban gamble'

  try {
    // First, check if Uzbekistan already exists
    const existing = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: 'Uzbekistan',
          type: 'country',
          category: 'all'
        }
      }
    })

    if (existing) {
      console.log('⚠️  Uzbekistan summary already exists, updating...')
      await prisma.locationSummary.update({
        where: {
          name_type_category: {
            name: 'Uzbekistan',
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
      console.log('✅ Uzbekistan summary updated successfully!')
    } else {
      console.log('📝 Creating new Uzbekistan summary...')
      await prisma.locationSummary.create({
        data: {
          name: 'Uzbekistan',
          type: 'country',
          country: 'Uzbekistan',
          lat: 41.3775,
          lng: 64.5853,
          category: 'all',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      })
      console.log('✅ Uzbekistan summary created successfully!')
    }

    console.log('\n📊 Summary Details:')
    console.log(`   Name: Uzbekistan`)
    console.log(`   Type: country`)
    console.log(`   Category: all`)
    console.log(`   Coordinates: 41.3775, 64.5853`)
    console.log(`   Issues: ${issues.length}`)
    console.log(`   Top Stories: ${topStories.length}`)
    console.log(`   Tooltip: "${tooltip}"`)
    console.log('\n🎯 Next Step: Add tooltip to MapViewLocations.tsx')
    console.log(`   Line ~219: Add after United Arab Emirates entry:`)
    console.log(`   'Uzbekistan': '${tooltip}'`)

  } catch (error) {
    console.error('❌ Error adding Uzbekistan summary:', error)
    throw error
  }
}

addUzbekistanSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
