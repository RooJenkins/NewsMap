import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const UGANDA_SUMMARY = `# Uganda

Yoweri Museveni, 80, is seeking his seventh term in office—and the January 2026 election is already written. The opposition leader was shot by police, activists jailed by the dozen, and Kenya has become the regime's kidnapping zone. Meanwhile, Uganda's oil dreams edge closer to reality, but only after crushing environmental protesters and arresting 81 activists for daring to question EACOP. This is Museveni's endgame: an oil-rich autocracy where critics disappear and "sovereignty" means no one can tell him no.

## Major Issues

### 1. The Election That's Already Over
**What's happening:**
- Museveni, 80, seeking seventh term in January 2026 election amid virtually no opposition
- Bobi Wine (Robert Kyagulanyi), his most prominent challenger, shot in the leg by security agents on September 3 in Kampala
- Kizza Besigye, veteran opposition leader, disappeared in Kenya in November and was forcibly returned to Uganda, detained by military court
- Besigye accused of "seeking to acquire weapons from foreigners"—charges he denies
- Two Kenyan activists, Bob Njagi and Nicholas Oyoo, detained for over a month after attending Bobi Wine rally on October 1
- President Museveni personally confirmed their arrests, accusing them of working with opposition to unseat him
- Activists arrested by armed men and detained without transparency until international pressure mounted
- No meaningful opposition within governing National Resistance Movement (NRM) party

**Why it matters:**
- Museveni has ruled Uganda for 39 years since 1986—one of Africa's longest-serving leaders
- Critics warn he has "veered into authoritarianism" with no checks on power
- Cross-border kidnappings in Kenya signal regime's extraterritorial reach and impunity
- Shooting of Bobi Wine demonstrates willingness to use lethal force against opposition
- International community largely silent—regional stability prioritized over democratic governance
- Electoral façade provides veneer of legitimacy while opposition systematically crushed

**Prospects:**
- January 2026 election outcome already predetermined—Museveni will "win" another term
- Opposition fragmented and leaderless, unable to mount credible challenge
- Regional neighbors (Kenya, Tanzania, Rwanda) unlikely to criticize—they face similar democratic deficits
- Western donors torn between human rights concerns and counterterrorism cooperation
- Youth unemployment and frustration building, but no organized outlet for dissent
- Post-election violence likely if opposition protests rigged results

### 2. Oil Dreams and Environmental Nightmares
**What's happening:**
- Oil production expected to commence in 2026 with estimated 1.4 billion barrels of recoverable reserves
- Target production: 230,000 barrels per day
- East African Crude Oil Pipeline (EACOP) moving forward despite massive environmental concerns
- 81 environmental rights defenders arrested since May 2025 for protesting large-scale oil projects
- 12 activists (eight of them students) given go-ahead for trial in Kampala court on November 6
- Authorities routinely threaten and arbitrarily arrest environmental activists for raising EACOP concerns
- Museveni promises "qualitative leap" in infrastructure, industrial output, social services
- IMF predicts 7% GDP growth in 2025, potentially 12% in 2026 when oil production begins

**Why it matters:**
- Oil revenues could transform Uganda's economy—but at massive environmental cost
- EACOP will transport oil 900 miles through Uganda and Tanzania to Indian Ocean
- Pipeline threatens Lake Victoria water supplies, displaces communities, endangers biodiversity
- Climate activists globally oppose project—but Uganda government frames opposition as Western imperialism
- Oil money will further entrench Museveni's patronage networks and military spending
- Environmental destruction permanent—but political and economic benefits flow to elite
- Pattern mirrors Nigeria's Niger Delta: oil wealth, environmental devastation, local impoverishment

**Prospects:**
- Oil production will proceed regardless of environmental concerns or activist resistance
- Museveni will use oil revenues to buy loyalty, fund security apparatus, extend rule
- International oil companies prioritize profits over human rights and environmental standards
- Climate movement's moral authority limited—Uganda argues West developed using fossil fuels
- Long-term: oil curse likely—corruption, Dutch disease, resource conflict
- Environmental degradation will outlast Museveni's regime and burden future generations

### 3. The Sovereignty Weapon: Anti-LGBTQ Laws and Western Sanctions
**What's happening:**
- Museveni defending Uganda's "cultural values and sovereignty" despite international pressure over homosexuality laws
- Western nations cut aid in response to Uganda's harsh Anti-Homosexuality Act (2023)
- Museveni claims Uganda's economy "remains strong and resilient" despite aid cuts
- Speaking at campaign rally in Mbale City, Museveni frames Western criticism as neocolonial interference
- Anti-LGBTQ legislation includes death penalty for "aggravated homosexuality" and life imprisonment for same-sex acts
- Law passed in May 2023 after intense international condemnation, became rallying point for Museveni's base
- Government uses "cultural sovereignty" narrative to mobilize support and deflect human rights criticism

**Why it matters:**
- Anti-LGBTQ laws provide Museveni with populist wedge issue—frames regime as defender of African values
- Western aid cuts limited in impact—Uganda increasingly turns to China, Gulf states for financing
- Human Rights Watch and Freedom House document severe restrictions on free expression, assembly, dissent
- LGBTQ Ugandans face violence, discrimination, imprisonment—many flee to Kenya, South Africa
- International isolation provides domestic political benefit—Museveni portrays himself as standing up to West
- Precedent for other African leaders: authoritarian measures justified as "cultural sovereignty"

**Prospects:**
- Museveni will not repeal anti-LGBTQ laws—too politically valuable domestically
- Western sanctions ineffective—alternative funding sources available (China, oil revenues)
- LGBTQ Ugandans will continue facing persecution, with limited international recourse
- Other African countries watching closely—some may replicate Uganda's "sovereignty" playbook
- Oil revenues will reduce Uganda's dependence on Western aid, further insulating regime
- Long-term: Uganda's international reputation damaged, but Museveni doesn't care

## International Angle

Uganda is becoming a case study in authoritarian resilience: Museveni has mastered the art of deflecting Western pressure while diversifying his patron base. Where aid cuts once might have forced concessions, oil revenues and Chinese financing now provide alternatives. Cross-border kidnappings in Kenya signal regional complicity—neighbors won't risk confrontation over opposition activists when they face their own democratic challenges. The U.S. remains torn between human rights rhetoric and counterterrorism cooperation (Uganda is a major contributor to African Union peacekeeping missions). Meanwhile, the EU's response has been toothless—symbolic condemnations without meaningful consequences. Museveni has calculated correctly: in a multipolar world, autocrats can shop for patrons and ignore critics. Uganda's January 2026 election will test whether the West still has leverage in Africa—or whether "sovereignty" has become the autocrat's ultimate shield.

## Bottom Line

Uganda is entering the oil age as an entrenched autocracy where elections are theater and opposition means exile, injury, or worse. Museveni's seventh-term coronation in January 2026 is already decided—the only question is whether the world will bother pretending otherwise. Oil revenues promise economic transformation but will fund authoritarian consolidation, not democratic opening. Environmental activists crushed, LGBTQ Ugandans persecuted, political opponents shot or kidnapped—all framed as "sovereignty." For Museveni, this is victory: an oil-rich, China-backed, West-proof dictatorship where 39 years in power is just the beginning. The tragedy isn't that it's happening—it's that no one with leverage cares enough to stop it.`

const UGANDA_ISSUES = [
  'The Election That\'s Already Over',
  'Oil Dreams and Environmental Nightmares',
  'The Sovereignty Weapon: Anti-LGBTQ Laws and Western Sanctions'
]

const UGANDA_TOP_STORIES = [
  {
    title: "World Report 2025: Uganda",
    source: "Human Rights Watch",
    link: "https://www.hrw.org/world-report/2025/country-chapters/uganda",
    pubDate: new Date("2025-11-01").toISOString()
  },
  {
    title: "Uganda Continues Targeting Fossil Fuel Activists",
    source: "Human Rights Watch",
    link: "https://www.hrw.org/news/2025/11/06/uganda-continues-targeting-fossil-fuel-activists",
    pubDate: new Date("2025-11-06").toISOString()
  },
  {
    title: "Kenyan activists released from Ugandan detention after Museveni confirms arrest",
    source: "Washington Times",
    link: "https://www.washingtontimes.com/news/2025/nov/9/kenyan-activists-released-ugandan-detention-museveni-confirms-arrest/",
    pubDate: new Date("2025-11-09").toISOString()
  },
  {
    title: "Uganda: Freedom in the World 2025 Country Report",
    source: "Freedom House",
    link: "https://freedomhouse.org/country/uganda/freedom-world/2025",
    pubDate: new Date("2025-11-01").toISOString()
  },
  {
    title: "Museveni: Economy Thriving Despite Western Sanctions Over Anti-Homosexuality Law",
    source: "ChimpReports",
    link: "https://chimpreports.com/museveni-economy-thriving-despite-western-sanctions-over-anti-homosexuality-law/",
    pubDate: new Date("2025-11-10").toISOString()
  },
  {
    title: "Uganda: Current Issues and U.S. Relations",
    source: "Congressional Research Service",
    link: "https://www.congress.gov/crs-product/R48513",
    pubDate: new Date("2025-04-21").toISOString()
  }
]

async function generateUgandaSummary() {
  console.log('Generating Uganda country summary...\n')

  try {
    // Store in database with coordinates 1.3733, 32.2903
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: 'Uganda',
          type: 'country',
          category: 'all'
        }
      },
      create: {
        name: 'Uganda',
        type: 'country',
        country: 'Uganda',
        lat: 1.3733,
        lng: 32.2903,
        category: 'all',
        summary: UGANDA_SUMMARY,
        issues: JSON.stringify(UGANDA_ISSUES),
        topStories: JSON.stringify(UGANDA_TOP_STORIES),
        storyCount: UGANDA_TOP_STORIES.length,
        updatedAt: new Date()
      },
      update: {
        summary: UGANDA_SUMMARY,
        issues: JSON.stringify(UGANDA_ISSUES),
        topStories: JSON.stringify(UGANDA_TOP_STORIES),
        storyCount: UGANDA_TOP_STORIES.length,
        updatedAt: new Date()
      }
    })

    console.log('✅ Uganda summary generated and saved to database!')
    console.log('\nPreview:')
    console.log(UGANDA_SUMMARY.split('\n').slice(0, 15).join('\n'))
    console.log('\n...')
    console.log('\n✅ Complete!')

  } catch (error) {
    console.error('Error generating Uganda summary:', error)
    throw error
  }
}

generateUgandaSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
