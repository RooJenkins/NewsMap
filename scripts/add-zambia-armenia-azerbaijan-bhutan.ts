import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const COUNTRIES = {
  ZAMBIA: {
    name: 'Zambia',
    type: 'country',
    lat: -13.1339,
    lng: 27.8493,
    country: 'Zambia'
  },
  ARMENIA: {
    name: 'Armenia',
    type: 'country',
    lat: 40.0691,
    lng: 45.0382,
    country: 'Armenia'
  },
  AZERBAIJAN: {
    name: 'Azerbaijan',
    type: 'country',
    lat: 40.1431,
    lng: 47.5769,
    country: 'Azerbaijan'
  },
  BHUTAN: {
    name: 'Bhutan',
    type: 'country',
    lat: 27.5142,
    lng: 90.4336,
    country: 'Bhutan'
  }
}

const NOVEMBER_2025_CONTEXTS = {
  ZAMBIA: `ZAMBIA - NOVEMBER 2025 SITUATION:

DEBT RESTRUCTURING SUCCESS:
- June 2024: Over 90% of holders of Zambia's $3 billion international bonds accepted restructuring proposal
- March 2024: Struck 76.5 billion kwacha ($3.0 billion) restructuring deal with bondholders
- Bondholders forgave approximately $840 million of claims, providing cash flow relief of ~$2.5 billion during IMF programme period
- June 2023: Agreement in principle to restructure $6.3 billion of debt with bilateral lenders
- Official Creditor Committee co-chaired by China and France, vice chaired by South Africa
- Completed "bruising debt restructuring" process under G20 Common Framework
- Deal includes provisions for larger payouts to creditors if economy outperforms expectations

COPPER MINING TRANSFORMATION:
- President Hichilema (elected 2021) set goal to expand Zambian copper production from 800,000 tonnes/year to 3 million over a decade
- Review of mining tax framework brought taxation to stable and competitive level, ended double taxation
- $10 billion investment driving 2025 growth in copper sector
- Barclays analysts (October 7, 2025 report): "Zambia seems to be on a remarkable turnaround path"
- Major extraction companies responding to business-friendly environment under Hichilema administration
- Leveraging mining growth to accelerate debt reduction

ECONOMIC OUTLOOK 2025:
- Projected GDP growth: World Bank forecasts 4.1%, Zambia's Finance Minister projects 6.6%
- Growth driven by expected improvements in mining, services and manufacturing sectors
- Anticipated rebound in global copper prices boosting outlook
- President Hichilema outlined economic targets and reforms for 2025
- Tourism and services sectors contributing to economic recovery

ONGOING CHALLENGES:
- Public debt remains high despite restructuring
- Debt servicing takes up large share of government revenue
- Debt restructuring provides temporary relief but doesn't adequately address systemic issues driving recurrent debt crises
- Need to maintain reform momentum and attract continued investment
- Global commodity price volatility affecting mining revenues`,

  ARMENIA: `ARMENIA - NOVEMBER 2025 SITUATION:

POST-ARTSAKH TRAUMA AND PEACE NEGOTIATIONS:
- September 2023: Azerbaijan captured Nagorno-Karabakh in "anti-terrorist" operation
- 100,000 ethnic Armenians fled Karabakh - entire Armenian population of region displaced
- PM Pashinyan now acknowledges Karabakh is part of Azerbaijan - controversial domestically
- March 2025: Armenia and Azerbaijan announced they settled differences on text of agreement to normalize relations after three decades of conflict
- MAJOR OBSTACLE: Azerbaijan refuses to sign until Armenian constitution changes to remove language it sees as claim on Azerbaijani territory
- Armenia considering importing Russian goods by rail through Azerbaijan - normalizing regional relations
- Parliamentary elections scheduled for June 2026 - peace deal could dominate campaign

PIVOT AWAY FROM RUSSIA:
- Early 2025: Armenian parliament adopted bill to START PROCESS of joining European Union
- January 14, 2025: U.S. Secretary of State Antony Blinken and Armenian FM Ararat Mirzoyan launched U.S.-Armenia Strategic Partnership Commission
- Pashinyan suspended Armenia's participation in CSTO (Russia-led military alliance) activities
- Refuses to attend CSTO summits - senior government figures say Armenia will never become full participant again, may leave altogether
- CSTO refusal to intervene when Azerbaijan attacked Armenian territory seen as betrayal by Armenians
- Russian peacekeepers stood idly by when Nagorno-Karabakh captured in 2023
- Armenian public views Russia as having abandoned them in critical moment

DOMESTIC POLITICAL CHALLENGES:
- Pashinyan presents choice as "Real Armenia" vs "Historic Armenia"
- Argues Armenia must make peace with Azerbaijan and Turkey, open borders to Europe, free itself from Russian dependence
- Faces accusations of capitulation from opposition
- Asymmetric peace terms likely to fuel Armenian resentment
- Could expose Pashinyan to defeat in June 2026 elections
- Normalizing relations with Turkey also on agenda - decades of hostility potentially ending

EU AND US ALIGNMENT:
- Moving toward EU membership - formal process initiated
- Strategic partnership with United States launched January 2025
- Seeking to diversify security and economic partnerships away from Russia
- West supporting Armenia's pivot as counterbalance to Russian influence in South Caucasus`,

  AZERBAIJAN: `AZERBAIJAN - NOVEMBER 2025 SITUATION:

POST-KARABAKH CONSOLIDATION:
- September 2023: Azerbaijan's "anti-terrorist" operation in Nagorno-Karabakh resulted in full control over region
- Mass exodus of 100,000 ethnic Armenians from Karabakh
- Victory consolidates President Ilham Aliyev's power domestically
- Recaptured territories designated to become "net-zero emission zone" by 2050, powered by hydropower, wind, and solar
- Plans to develop captured territories as showcase of Azerbaijani progress
- Military parade in November 2025 signals post-Karabakh pivot toward NATO standards and regional alliances

COP29 HOSTING (NOVEMBER 2024 - ONGOING IMPACT):
- COP29 wrapped up in Baku on November 24, 2024
- First major multilateral diplomatic event after Nagorno-Karabakh ethnic cleansing
- Demonstrated Azerbaijan can successfully host international events, gained soft power prestige
- CONTROVERSY: Aliyev declared oil and gas "gift from God" in opening remarks
- Used opening speech to criticize U.S. and EU hypocrisy regarding fossil fuels
- Conference highlighted Azerbaijan's dual positioning: energy supplier and climate host
- During COP29: Presidents of Uzbekistan, Kazakhstan, and Azerbaijan signed agreement to build subsea green energy cable under Caspian Sea
- Partnership with Georgia, Romania, Hungary to build undersea electricity cable connecting South Caucasus to southeastern Europe - received $35 million World Bank loan

REGIONAL POWER DYNAMICS:
- Multi-vector foreign policy: maintaining relations with Turkey, Russia, EU, and China
- Presents itself as alternative energy provider to West with "no baggage of sanctions" (unlike Russia)
- Economic ties with Russia remain strong despite Western alignment in some areas
- Growing partnership with Turkey - cultural and linguistic ties strengthening
- Aliyev announced plans to align Azerbaijani armed forces with NATO standards
- U.S.-brokered agreement with Armenia aimed at ending decades of hostility
- Flexible foreign policy enhances Azerbaijan's leverage, protects from overdependence on any single bloc

ENERGY AND ECONOMIC STRATEGY:
- Positioning as critical energy corridor between Central Asia and Europe
- Green energy infrastructure projects connecting Caspian region to EU markets
- Balancing fossil fuel revenues with renewable energy investments
- Using COP29 platform to enhance international standing while defending fossil fuel industry
- Economic growth tied to energy exports and regional connectivity projects`,

  BHUTAN: `BHUTAN - NOVEMBER 2025 SITUATION:

DEMOCRATIC TRANSITION PROGRESS:
- January 2024: Tshering Tobgay returned as Prime Minister after PDP won 30 of 47 National Assembly seats
- Fourth general election since transitioning to democracy in 2008
- Peaceful democratic transition remains remarkable - led by King's vision (announced 2005), not public demand
- First parliamentary elections occurred in 2008 with signing of Constitution
- Tobgay assumed office January 28, 2024 after election in November 2023-January 2024
- Parliamentary elections scheduled for 2028-2029 timeframe
- Freedom House rates Bhutan as "Partly Free" - democracy still consolidating

ECONOMIC CHALLENGES AND TRANSFORMATION PLAN:
- GDP growth averaged only 1.7% over past five years (World Bank data)
- Youth unemployment at 28.6% - forcing mass exodus of young Bhutanese emigrating
- Rural unemployment also remains high
- Tobgay detailed ambitious 12-point economic transformation plan to turn Bhutan into developed nation by 2047
- Implementing 15 billion ngultrum ($181 million) economic stimulus plan
- Struggling economy was main issue in election campaign
- World Bank (May 2025): Economy recovering partly due to recent growth in tourism

TOURISM EXPANSION:
- Sustainable Development Fee (SDF): $100 US per person, per night for non-regional visitors
- Daily levy designed to promote sustainable tourism while generating revenue
- Tourism growth in 2025 contributing to economic recovery
- Climate change poses significant long-term threat to agriculture and tourism sectors
- Balancing GNH principles with need for economic development through tourism

GROSS NATIONAL HAPPINESS EVOLUTION:
- GNH Index increased from 0.743 (2010) to 0.781 (2022)
- Phrase coined by 4th King Jigme Singye Wangchuck in late 1970s: "GNH is more important than GDP"
- Maintained commitment to wellbeing even during COVID-19 pandemic economic downturn
- New government balancing GNH philosophy with economic transformation needs
- Challenge: preserving cultural values while pursuing economic development

CHINA BORDER ISSUES:
- PM Tobgay made first foreign trip after assuming office to India (March 2024) - signaling priorities
- Chinese government continued to encroach on Bhutanese territory with new construction and settlement efforts
- Border negotiations with China ongoing - causing unease in New Delhi
- India traditionally holds sway over Bhutan's defense and foreign policy
- Indian analysts fear border deal with China may be disadvantageous to India
- Relief that negotiations happening under Tobgay's leadership - more sensitivity toward India, more open conversations with New Delhi
- Bhutan walking delicate balance between China and India

RECENT INNOVATIONS (OCTOBER 2025):
- Announced National Digital Identity (NDI) system moving to Ethereum Blockchain Technology by early 2026
- Crown Prince Jigme Namgyel Wangchuck officiated announcement with prominent blockchain figures
- Positioning Bhutan as innovative despite small size
- Pursuing technology-driven development alongside traditional GNH values`
}

async function generateCountrySummary(countryKey: keyof typeof COUNTRIES) {
  const country = COUNTRIES[countryKey]
  const context = NOVEMBER_2025_CONTEXTS[countryKey]

  console.log(`\n${'='.repeat(60)}`)
  console.log(`Generating "Rest is Politics" style summary for ${country.name}...`)
  console.log(`${'='.repeat(60)}\n`)

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of ${country.name.toUpperCase()}'s situation in November 2025 based on the following real research:

${context}

WRITE IN THIS EXACT FORMAT:

[OPENING HOOK - 1 paragraph, ~150 words]
- Lead with the most dramatic/recent event
- Set the scene with vivid details
- Make it feel like insider analysis
- Pull readers in immediately

**The Big Issue 1: [Title]** (~200 words)
- Deep dive into the primary crisis/event
- Include specific details: dates, names, numbers
- Explain the stakes and consequences
- Use conversational tone, not dry reporting
- Make readers understand WHY this matters

**The Big Issue 2: [Title]** (~200 words)
- Second major storyline
- Connect to broader trends
- Include international implications
- Show how pieces connect

**The Big Issue 3: [Title]** (~200 words)
- Third storyline or emerging issue
- Can be economic, social, or political
- Forward-looking angle
- What's coming next?

**The International Angle** (~150 words)
- How this affects other countries
- Regional and global implications
- Power dynamics and alliances
- The great power game

**The Bottom Line** (~100 words)
- Synthesis of all threads
- What to watch next
- Punchy conclusion
- Leave readers informed and engaged

CRITICAL REQUIREMENTS:
- Use REAL details from the November 2025 context above
- Include specific names, dates, statistics
- Write conversationally - like you're explaining to a smart friend over coffee
- Use vivid language and dramatic framing where appropriate
- Make it engaging - use rhetorical questions, show stakes for real people
- Total length: 4,000-6,000 characters
- Be specific, not vague
- Connect local events to global trends

Generate the ${country.name} summary now:`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    console.log(`\n=== GENERATED ${country.name.toUpperCase()} SUMMARY ===\n`)
    console.log(summaryText)
    console.log('\n=== END SUMMARY ===\n')
    console.log(`Character count: ${summaryText.length}`)

    // Extract issues from the summary (look for ** headers)
    const issueMatches = summaryText.match(/\*\*The Big Issue \d: (.+?)\*\*/g) || []
    const issues = issueMatches.map(match => match.replace(/\*\*The Big Issue \d: /, '').replace(/\*\*/, ''))

    // Also add the International Angle
    if (summaryText.includes('**The International Angle**')) {
      issues.push('International Implications')
    }

    console.log('\nExtracted Issues:', issues)

    // Save to database
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: country.name,
          type: country.type,
          category: 'all'
        }
      },
      create: {
        name: country.name,
        type: country.type,
        country: country.country,
        lat: country.lat,
        lng: country.lng,
        category: 'all',
        summary: summaryText,
        issues: JSON.stringify(issues),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: summaryText,
        issues: JSON.stringify(issues),
        updatedAt: new Date()
      }
    })

    console.log(`\n✅ ${country.name} summary saved to database!\n`)

  } catch (error) {
    console.error(`❌ Error generating ${country.name} summary:`, error)
    throw error
  }
}

async function generateAllSummaries() {
  console.log('\n🌍 Starting generation of summaries for 4 countries...\n')

  try {
    // Generate summaries sequentially to avoid rate limits
    await generateCountrySummary('ZAMBIA')
    await generateCountrySummary('ARMENIA')
    await generateCountrySummary('AZERBAIJAN')
    await generateCountrySummary('BHUTAN')

    console.log('\n' + '='.repeat(60))
    console.log('✅ ALL SUMMARIES GENERATED AND SAVED SUCCESSFULLY!')
    console.log('='.repeat(60))
    console.log('\nCountries processed:')
    console.log('  1. Zambia')
    console.log('  2. Armenia')
    console.log('  3. Azerbaijan')
    console.log('  4. Bhutan')
    console.log('')

  } catch (error) {
    console.error('\n❌ Error in batch generation:', error)
    throw error
  }
}

generateAllSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
