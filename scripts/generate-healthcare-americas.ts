import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Country coordinates and November 2025 healthcare search results
const COUNTRIES = [
  {
    name: 'United States',
    lat: 37.0902,
    lng: -95.7129,
    searchResults: `November 2025 Healthcare News:
- ACA subsidies expire at end of 2025; millions face soaring health costs
- Premium costs for average subsidized ACA plan will more than double: $888/year in 2025 → $1,904/year in 2026
- 60-year-old couple earning $85,000 will see annual costs increase by $22,600 (from 8.5% to 25% of income)
- Federal government shutdown (Oct 1) over budget impasse; Democrats demand ACA subsidy extension
- Estimated 4.8 million people will become uninsured if subsidies expire (21% increase in uninsured population)
- Medicaid cuts proposed could leave millions vulnerable and threaten rural hospital closures
- Political standoff as open enrollment began November 1, 2025
- Enhanced premium tax credits extended through 2025 by Inflation Reduction Act now expiring`
  },
  {
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    searchResults: `November 2025 Healthcare News:
- Federal Budget 2025 (Nov 4): Created $5 billion Health Infrastructure Fund over 3 years for hospitals, ERs, urgent care, medical schools
- Budget limits spending reductions on research granting agencies; commits to planned increases in core grants, scholarships
- Ontario Fall Statement: Committed to connecting 235,000 people on Health Care Connect waitlist to family doctor/primary care team by spring 2026
- Ontario investing $56 billion over next decade in health infrastructure ($43B in capital grants)
- Supporting 50+ hospital projects, delivering ~3,000 new hospital beds
- Canada Healthcare Innovation Summit: Nov 20 in Montreal
- Healthcare Quality Canada Conference: Nov 20-21 in Toronto
- Key challenges: Nearly 1 in 5 Canadians over 65; expected to reach 1 in 4 by 2030
- 3 in 4 Canadians believe limited healthcare access poses direct threat to their health`
  },
  {
    name: 'Mexico',
    lat: 23.6345,
    lng: -102.5528,
    searchResults: `November 2025 Healthcare News:
- Budget cuts hit healthcare: MX$20.5 billion ($1.06B USD) reduction in general healthcare
- MX$10 billion ($516M USD) drop in vaccination programs
- IMSS-Bienestar projects 50 million consultations in 2025 (27% drop from 2016's 90.1 million under Seguro Popular)
- Government allocated 130 billion pesos ($6.4B USD) to purchase medicine/medical supplies for 2025-2026; distribution begins March 2025
- Junk food ban in schools begins March 2025 to combat childhood obesity
- Healthcare system remains segmented and inequitable across federal, state, municipal levels
- Expenditure gap between insured/non-insured groups likely to increase in 2025 as part of deficit reduction
- Healthcare costs average 50% lower than US
- More than half of Mexican employees report declining physical, emotional, cognitive well-being`
  },
  {
    name: 'Brazil',
    lat: -14.2350,
    lng: -51.9253,
    searchResults: `November 2025 Healthcare News:
- AI becoming concrete reality in Brazilian public health (SUS): algorithms analyzing exams, prioritizing urgent cases, suggesting clinical courses
- Ministry of Health presentation at Chamber of Deputies: AI applied in clinical diagnosis, health surveillance, service management
- Brazil lacks basic elements to consolidate AI policy: digital infrastructure issues, poorly integrated hospital systems
- Brazil is largest healthcare market in Latin America: 9.7% of GDP ($135 billion)
- SUS provides services for ~72% of population (164 million people)
- ~25% of population access healthcare through private insurance
- Major medical conferences in November 2025:
  * World Congress on Patient Safety & Nursing Healthcare (Rio, Nov 8)
  * International Conference on Oncology Nursing (Brasilia, Nov 11)
  * International Conference on Healthcare and Clinical Gerontology (Brasilia, Nov 15)
  * World Congress on Infectious Diseases (Vitoria, Nov 15)`
  },
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    searchResults: `November 2025 Healthcare News:
- President Javier Milei slashed healthcare budget by 48% since late 2023
- Fired 2,000+ employees from Ministry of Health
- Curtailed financing for essential drug-access programs (including cancer medications for uninsured)
- Froze federal funding for immunization campaigns
- Dismantled National Directorate for HIV, Hepatitis, and Tuberculosis
- Alarming disease statistics (Q1-Q3 2025 vs 2020-2024):
  * Measles: +1,650%
  * Hepatitis A: +296%
  * Leptospirosis: +222%
  * Pertussis: +59%
  * Tuberculosis: +31%
  * Syphilis: +71%
- Nov 12, 2024: Ministry of Health + PAHO met to advance access to safe, effective, low-cost medicines
- Ongoing deregulation of social security and pre-paid medicine systems remains central debate topic
- New requirement (July 2025): Tourists must have valid health insurance for entry and public facility access`
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    searchResults: `November 2025 Healthcare News:
- Study published Nov 2025 examines Primary Health Care policy investments toward Universal Health Coverage
- Chile emphasizes central governance but struggles with municipal funding capacity and infrastructure renewal
- May 2025: Chile's Ministry of Health joined Alliance for Primary Health Care in the Americas (PAHO/IDB/World Bank initiative)
- Chile is third country in region with agreement to operationalize the Alliance
- Mixed public-private system:
  * FONASA (public): funded through taxes, provides free/subsidized care
  * Since Sept 1, 2022: public healthcare free for all FONASA beneficiaries
  * ~17-18% opt for private coverage through ISAPRE
- Chile has made significant progress implementing efficiency policies with population health impact`
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    searchResults: `November 2025 Healthcare News:
- Health insurance premium (CPU) increased by only 5.36% for 2025 (close to inflation) - controversy erupted
- Multiple stakeholders protested: patient associations, medical societies, civil society, academia, hospitals, think tanks
- Insufficient CPU increase raises probability of systematic risk materialization, deepens financial unsustainability
- International Conference on Family Planning (ICFP): Nov 3-6, 2025 in Bogotá (first Latin American host city)
  * Pre-conferences, side events, site visits starting Nov 1
  * Ágora Bogotá Convention Center
- Mounting healthcare crisis: experts warn system could collapse
- Years of structural problems, financial instability, political tensions culminate in precarious moment
- October 2025: Council of State suspended Decree 0858 of 2025 (President Petro's new healthcare model focused on prevention)`
  },
  {
    name: 'Peru',
    lat: -9.1900,
    lng: -75.0152,
    searchResults: `November 2025 Healthcare News:
- 2025 OECD Review published: Peru made remarkable progress in healthcare delivery
- Insurance coverage increased from 61% (2009) to over 97% (2023) - near universal coverage
- Integral Health Insurance (Seguro Integral de Salud) crucial in reaching poor and underserved rural communities
- Life expectancy rose ~13 years since 1980: reached 72.4 years in 2022
- Infant mortality declined: 83 deaths per 1,000 births (1980) → 11 (2021)
- Maternal mortality halved: 101.9 per 100,000 births (2002) → 51.9 (2023)
- Ongoing challenges: health system remains segmented and fragmented
- Multiple public sub-systems serve different population groups; lacks integration/coordination
- Regional inequalities: Puno (Andean/indigenous) unmet medical needs nearly double Lima's (40% vs 23%)
- Unmet medical needs higher among women (33%) than men (29%)`
  },
  {
    name: 'Venezuela',
    lat: 6.4238,
    lng: -66.5897,
    searchResults: `November 2025 Healthcare News:
- 8 million+ Venezuelans struggling to receive healthcare, especially in indigenous and rural communities
- Public services collapsed: 7.6 million affected by lack of basic services and health access
- Health system under strain: personnel departure due to low salaries, disrupted primary healthcare, hospital infrastructure failures
- Shortages of drugs and medical supplies
- Many health facilities lack essential supplies for primary healthcare
- Most major hospitals lack running water
- Economic crisis: inflation rate 270% expected by end of 2025
- Currency depreciation: 381% over past 12 months (October 2025)
- Venezuela ranks among top 3 countries globally with highest increase in human fragility (with North Korea and Libya)
- 2025 international allocation: €62.538 million for crisis response (inside country and region)
- Funding focuses on: healthcare, protection, WASH, education in emergencies, nutrition, food support, disaster preparedness`
  },
  {
    name: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    searchResults: `November 2025 Healthcare News:
- November 2025: Dr. Steven Aguirre murdered (young physician in coastal region) killed by criminals attempting kidnapping while traveling to work
- Since May 2023: Guayas Provincial Medical College received 60+ reports of extortion attempts against doctors
- Rising crime rates create significant risks for rural healthcare workers
- Transform Health Ecuador coalition advancing Universal Health Coverage through digital technologies and data
- Council for Quality Assurance in Higher Education aims to approve new curriculum integrating digital health subject for health workers by 2025
- Healthcare executive professional development programs running as 100-hour programs in November 2025
- System structure: Public Health System (free/low-cost for uninsured/low-income) + Social Security System (formal employees via payroll) + Private Sector (faster/specialized care)
- Digital health transformation accelerating with stakeholder engagement`
  },
  {
    name: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    searchResults: `November 2025 Healthcare News:
- Economic and Social Development Plan 2021-2025 structured around 10 strategic axes
- Linked to 13 pillars of Patriotic Agenda for 2025 Bicentennial
- Pillar 3 focuses on health, education, sport: aiming to guarantee right and access to health through Unified Health System (SUS)
- 2019: National health insurance SUS (Seguro Único de Salud) implemented for primary, secondary, tertiary services
- Impact in increasing access to quality healthcare has been very limited
- Unified family, community, and intercultural health model established universal coverage for informal workers and families in 2019
- COVID-19 pandemic exposed vulnerabilities and strengths of this health policy
- Medical care below world average: 1.4 hospital beds per 1,000 inhabitants
- No specific healthcare news from Bolivia in November 2025`
  },
  {
    name: 'Paraguay',
    lat: -23.4425,
    lng: -58.4438,
    searchResults: `November 2025 Healthcare News:
- Medical system operates through three separate channels: IPS (Social Security), public hospitals, private facilities
- Each channel has different funding mechanisms, access requirements, coverage levels
- Free public healthcare access for anyone with valid ID (including foreign tourists and temporary residents)
- PAHO initiative (US-financed): 31 health facilities transformed in underserved northeast region (hospitals, family health units, dispensaries)
- Private healthcare costs: international insurance $150-300/month; prepaid medicine plans ~$50/month
- Major health challenges: dengue, chikungunya, Zika most frequent tropical diseases + respiratory infections + COVID variants
- Paraguay is one of most expensive places in world to fall ill: nearly 4 out of 10 dollars in annual health spending comes directly from people's pockets
- No specific healthcare news from Paraguay in November 2025`
  },
  {
    name: 'Uruguay',
    lat: -32.5228,
    lng: -55.7658,
    searchResults: `November 2025 Healthcare News:
- Minister of Public Health Cristina Lustemberg warned: 30,000 people on waiting list for mental health treatment
- Access to mental health care should not be "a privilege in some places"
- Remarks made during presentation of "National Action for Mental Health" initiative
- 29% of adult population shows symptoms of psychological distress
- 24% at highest level of loneliness
- National Integrated Health System (SNIS) integrates public and private providers
- Uruguay's doctor/population ratio: 2nd in Latin America, 11th in world (4.6 doctors/1,000 people - World Bank)
- 2025: Government advancing plans to establish AUVISA (independent agency for regulating medicines and health technologies)
- Public healthcare (ASSE) and private mutualista options available
- Mutualista monthly fees: $100-200 USD per person`
  },
]

async function generateHealthcareSummary(
  countryName: string,
  searchResults: string
): Promise<{ summary: string; issues: string[]; characterCount: number }> {
  console.log(`\n🏥 Generating healthcare summary for ${countryName}...`)

  const prompt = `You are writing in the voice of Atul Gawande - surgeon, public health researcher, and New Yorker writer. Generate a comprehensive HEALTHCARE summary for ${countryName} as of November 2025.

VOICE & STYLE (Atul Gawande):
- Clear, narrative-driven medical writing that tells the human story behind the data
- Evidence-based but accessible to general readers
- Focus on systems, outcomes, and how policies affect real people
- Balance statistics with real-world implications
- Analytical but empathetic tone
- Explore how systems work (or fail) and why
- Use specific examples and concrete details
- Draw connections between policy decisions and patient outcomes

NOVEMBER 2025 HEALTHCARE NEWS & DATA:
${searchResults}

STRUCTURE YOUR SUMMARY (2,500-3,500 characters total):

**Opening Hook (1 paragraph):** Start with the most pressing healthcare challenge or a recent development that captures the current moment. Make it vivid and specific - perhaps a statistic that shocks, a policy decision with profound implications, or a crisis point that reveals system dysfunction.

**System Overview (~150 words):** How is healthcare organized and funded in ${countryName}? Describe the structure (public/private mix, universal coverage, insurance models), who pays for what, and how citizens access care. Explain the system's basic architecture and its historical evolution.

**Major Health Challenges (~200 words):** Identify the top 3-4 health issues facing ${countryName}. For each:
- Provide specific data (prevalence rates, mortality figures, life expectancy trends)
- Explain why this is a critical challenge systemically
- Show how it affects different populations
Consider: chronic diseases, infectious diseases, maternal/infant health, mental health, health inequities, access barriers

**Infrastructure & Access (~150 words):** Examine the healthcare delivery system:
- Hospital capacity and distribution (beds per capita, urban/rural gaps)
- Healthcare workforce (doctor-patient ratios, shortages, training)
- Insurance coverage rates and gaps in access
- Wait times and system efficiency or bottlenecks
- Technology, digital health, infrastructure quality

**Current Developments (~100 words):** What's happening NOW in November 2025 based on the search results:
- Recent reforms, policy changes, or budget decisions
- Health crises, disease outbreaks, or system failures
- Innovations, partnerships, or new initiatives
- Political debates affecting healthcare
- Use specific details from the search results

**Outlook (~50 words):** What should observers watch in the coming months? What are the key questions about ${countryName}'s healthcare future? What will determine whether the system improves or deteriorates?

KEY REQUIREMENTS:
- Write in Gawande's characteristic style: systems-focused, evidence-based, humanistic
- Use concrete data and metrics throughout (from search results)
- Length: 2,500-3,500 characters
- Include specific statistics where available
- Ground analysis firmly in November 2025 context from search results
- Avoid jargon - write for an educated general audience
- Show how systems and policies affect real people's lives and health outcomes
- Be analytical about what works and what doesn't

Generate the healthcare summary now. Write as Atul Gawande would - with clarity, empathy, and systems-level insight:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3000,
      messages: [{ role: 'user', content: prompt }],
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract major issues
    const issuesPrompt = `Based on this healthcare summary for ${countryName}, extract 3-5 major healthcare issues as brief phrases (not full sentences). Each should be 3-8 words maximum.

${summaryText}

List them as:
- Issue 1
- Issue 2
- Issue 3`

    const issuesMessage = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: [{ role: 'user', content: issuesPrompt }],
    })

    const issuesText = issuesMessage.content[0].type === 'text' ? issuesMessage.content[0].text : ''
    const issues = issuesText
      .split('\n')
      .filter((line) => line.trim().startsWith('-'))
      .map((line) => line.replace(/^-\s*/, '').trim())

    const characterCount = summaryText.length

    console.log(`✅ Generated ${countryName}: ${characterCount} characters, ${issues.length} issues`)

    return { summary: summaryText, issues, characterCount }
  } catch (error) {
    console.error(`❌ Error generating summary for ${countryName}:`, error)
    throw error
  }
}

async function main() {
  console.log('🚀 HEALTHCARE CATEGORY SUMMARIES - AMERICAS BATCH')
  console.log('Voice: Atul Gawande | Target: 2,500-3,500 characters per country')
  console.log('='.repeat(80))

  const results: { country: string; characters: number; success: boolean }[] = []

  for (const country of COUNTRIES) {
    try {
      console.log(`\n📍 Processing: ${country.name}`)

      const { summary, issues, characterCount } = await generateHealthcareSummary(
        country.name,
        country.searchResults
      )

      // Validate character count
      if (characterCount < 2300) {
        console.log(`⚠️  Warning: ${country.name} is SHORT at ${characterCount} characters`)
      } else if (characterCount > 3700) {
        console.log(`⚠️  Warning: ${country.name} is LONG at ${characterCount} characters`)
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'healthcare',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'healthcare',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved to database`)

      results.push({
        country: country.name,
        characters: characterCount,
        success: true,
      })

      // Rate limiting - 2 API calls per country, wait 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Failed to process ${country.name}:`, error)
      results.push({
        country: country.name,
        characters: 0,
        success: false,
      })
    }
  }

  // Final report
  console.log('\n\n' + '='.repeat(80))
  console.log('📊 GENERATION COMPLETE - HEALTHCARE SUMMARIES')
  console.log('='.repeat(80))

  const successful = results.filter((r) => r.success)
  const failed = results.filter((r) => !r.success)

  console.log(`\n✅ Successfully generated: ${successful.length}/${COUNTRIES.length} countries\n`)

  successful.forEach((r) => {
    const status =
      r.characters >= 2500 && r.characters <= 3500
        ? '✓'
        : r.characters < 2500
        ? '⚠ SHORT'
        : '⚠ LONG'
    console.log(`   ${status} ${r.country}: ${r.characters} characters`)
  })

  if (failed.length > 0) {
    console.log(`\n❌ Failed: ${failed.length} countries\n`)
    failed.forEach((r) => {
      console.log(`   ${r.country}`)
    })
  }

  const totalChars = successful.reduce((sum, r) => sum + r.characters, 0)
  const avgChars = successful.length > 0 ? Math.round(totalChars / successful.length) : 0

  console.log(`\n📈 Statistics:`)
  console.log(`   Total characters: ${totalChars.toLocaleString()}`)
  console.log(`   Average per country: ${avgChars} characters`)
  console.log(`   Target range: 2,500-3,500 characters`)

  console.log('\n' + '='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
