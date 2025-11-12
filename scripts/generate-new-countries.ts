import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// New countries to add
const NEW_COUNTRIES = [
  { name: 'El Salvador', type: 'country', lat: 13.7942, lng: -88.8965, country: 'El Salvador' },
  { name: 'Estonia', type: 'country', lat: 58.5953, lng: 25.0136, country: 'Estonia' },
  { name: 'Ethiopia', type: 'country', lat: 9.145, lng: 40.4897, country: 'Ethiopia' },
  { name: 'Fiji', type: 'country', lat: -17.7134, lng: 178.065, country: 'Fiji' },
]

// Curated news context for each country based on November 2025 research
const NEWS_CONTEXT = {
  'El Salvador': `Recent News Stories (November 2025):

1. "El Salvador's Bitcoin Reserve Reaches 6,043 BTC Worth $611M" - Reuters (Nov 2025)
   El Salvador became the first country to establish a national Bitcoin reserve. As of January 2025, the reserve holds 6,043 bitcoins valued at $611.2 million.

2. "Bukele Agrees to Make Bitcoin Voluntary for $1.4B IMF Credit" - Financial Times (Nov 2025)
   To secure a $1.4 billion credit from the IMF, President Bukele agreed to make Bitcoin use voluntary, ending its status as mandatory national-level currency.

3. "The Economist: El Salvador's Bitcoin Experiment a Failure" - The Economist (Nov 2025)
   Analysis concludes the Bitcoin experiment brought more costs than benefits to the Salvadoran economy.

4. "El Salvador Gang Crackdown: 83,000 Arrested Under Emergency Powers" - BBC (Nov 2025)
   State of emergency renewed multiple times, allowing police to jail over 83,000 suspected gang members (1.5% of population) - highest imprisonment rate globally. Around 8,000 released due to lack of evidence.

5. "El Salvador Homicide Rate Drops to 1.9 per 100,000" - Al Jazeera (Nov 2025)
   El Salvador achieved one of the lowest homicide rates in the Americas at 1.9 per 100,000 in 2024, down from being the world's murder capital.

6. "Bukele Cuts Deal with Trump to House Deported Gang Members" - Washington Post (Nov 2025)
   El Salvador's leader negotiated with Trump administration to accept and house alleged gang members deported from the US.

7. "Salvadoran Troops Deploy to Haiti Security Mission" - Associated Press (Nov 2025)
   First Salvadoran soldiers arrived in Port-au-Prince on January 3, 2025, to conduct street patrols and aerial surveillance for the Multinational Security Support Mission in Haiti.

8. "Human Rights Groups Condemn Arbitrary Arrests in Gang Crackdown" - Human Rights Watch (Nov 2025)
   International organizations report widespread arbitrary arrests and human rights abuses in anti-gang operations, despite security improvements.`,

  'Estonia': `Recent News Stories (November 2025):

1. "Russian MiG-31s Violate Estonian Airspace for 12 Minutes" - Reuters (Nov 2025)
   Three Russian MiG-31 fighter jets entered Estonian airspace over the Gulf of Finland without permission in September 2025. Italian F-35s stationed in Estonia as part of NATO's Eastern Sentry operation responded alongside Swedish and Finnish aircraft.

2. "NATO Chief Rutte Clashes with Estonian PM Over Article 4 Invocation" - Financial Times (Nov 2025)
   Secretary General Mark Rutte clashed with Estonian Prime Minister Kristen Michal after Estonia invoked NATO's Article 4 clause following Russian violations. Rutte argued frequent invocations would diminish the clause's impact.

3. "Estonia Commits 5.4% of GDP to Defense Spending" - Defense News (Nov 2025)
   Estonia, currently around 3 percent, is on track to hit 5.4 percent of GDP for defense next year, well above NATO's 2% target, leading by example as a small frontline state.

4. "Baltic Sea Tensions: Russian Su-35 Violates Estonian Airspace" - BBC (Nov 2025)
   Russia deployed a Sukhoi Su-35 fighter jet that briefly violated Estonian airspace. NATO deployed Polish MiG-29 jets to tail the Russian warplane, bringing the two sides dangerously close to direct confrontation.

5. "Estonia Warns of 'Different Kind of War' with Putin" - Newsweek (Nov 2025)
   Estonian defense officials urge NATO to prepare for hybrid warfare tactics including drone incursions, cyberattacks, and airspace violations as part of Russia's broader strategy.

6. "One of Baltic States May Test NATO Article 5" - Euromaidan Press (Nov 2025)
   Analysis suggests Estonia could become the next testing ground for NATO's Article 5 collective defense clause and Russia's ambitions in the region.

7. "Estonia President: Europe Needs U.S. Military Support" - Foreign Policy (Nov 2025)
   Estonian President emphasizes Europe's continued dependence on U.S. military capabilities amid uncertainty about Trump administration's NATO commitments.

8. "Italian F-35s Lead Eastern Sentry Air Policing Mission" - Defense News (Nov 2025)
   Italian F-35 fighters stationed in Estonia coordinate with Swedish and Finnish aircraft for NATO's enhanced air policing operations in response to increased Russian activity.`,

  'Ethiopia': `Recent News Stories (November 2025):

1. "Tigray Forces Enter Ethiopia's Afar Region, Stoking Conflict Fears" - Al Jazeera (Nov 6, 2025)
   Afar authorities accused forces from neighbouring Tigray of crossing into its territory on November 7, seizing villages and attacking civilians, marking significant escalation in tensions.

2. "Ethiopian Federal Forces Conduct Drone Strike on Tigray-Afar Border" - Reuters (Nov 2025)
   At approximately 3:30 a.m. on November 7, 2025, federal forces allegedly carried out a drone strike on Tigray forces in the border area, causing casualties and property destruction.

3. "Abiy Ahmed Disavows Pretoria Peace Agreement in Parliament Speech" - BBC (Nov 2025)
   Prime Minister Abiy Ahmed reportedly publicly disavowed the Pretoria Agreement and disparaged the TPLF in his recent address to the Ethiopian Parliament, signaling potential abandonment of peace process.

4. "TPLF Takes Control of Mekelle and Ad Gudan" - The Africa Report (Nov 2025)
   The Tigray People's Liberation Front has taken effective control of Tigray's two largest cities as federal authority in the region rapidly shrinks.

5. "TPLF Removed from Ethiopia's Political Party List" - Associated Press (Nov 2025)
   The TPLF was officially removed from the country's list of political parties in May 2025 amid internal divisions and growing mistrust from the federal government.

6. "Pretoria Peace Agreement Implementation Stalls" - Foreign Affairs (Nov 2025)
   Analysis shows the Federal Government has failed to implement key provisions of the November 2022 Pretoria Peace Agreement that ended the devastating two-year war.

7. "600,000 Estimated Dead from 2020-2022 Tigray War" - UN Report (Nov 2025)
   New estimates suggest at least 600,000 people died during the conflict between the TPLF and Ethiopia's federal army between 2020 and 2022.

8. "Fears of Regional War Involving Eritrea" - Al Jazeera (Nov 2025)
   International observers express concern that renewed Tigray conflict could expand into broader regional war involving neighboring Eritrea.

9. "Afar Authorities: Tigray Incursion 'Destroys Pretoria Peace Agreement'" - Africa News (Nov 2025)
   Afar regional government declares that Tigray forces' actions "openly destroy the Pretoria peace agreement" signed in 2022.`,

  'Fiji': `Recent News Stories (November 2025):

1. "PM Rabuka: World Falling Dangerously Behind on Climate Targets" - Fiji Times (Nov 11, 2025)
   Prime Minister Sitiveni Rabuka warns at COP30 that the world is falling dangerously behind on climate targets and time for decisive action is running out.

2. "Fiji Calls for Dignified Climate Mobility at COP30" - PINA (Nov 11, 2025)
   Fiji advocates for global action to support climate-induced migration, referencing its Climate Change Act 2021 and NDC 3.0 which integrate climate mobility into national development planning.

3. "Fiji Secures $27M for Nature, People and Climate Investment Plan" - Fiji Times (Nov 2025)
   Major funding secured to strengthen country's resilience by restoring ecosystems, creating sustainable jobs, and improving food security through the NPC Investment Plan.

4. "Pacific Resilience Facility to Provide Direct Climate Funding" - RNZ (Nov 2025)
   Fiji and other Pacific countries will soon access direct funding for climate and disaster resilience through new regional facility, improving access to adaptation resources.

5. "Fijian Economy Growth Expected to Moderate to 3% in 2025" - IMF (Nov 2025)
   IMF Article IV mission reports economy grew 3.75% in 2024 but will moderate to around 3% in 2025 as tourist arrivals revert to pre-pandemic trends.

6. "Paul Scurrah Appointed Fiji Airways CEO" - Fiji Airways (Nov 1, 2025)
   National carrier appoints Paul Scurrah as new Managing Director and Chief Executive Officer, effective November 1, 2025.

7. "8,391 Foreign Nationals Overstaying Visas in Fiji" - Immigration Ministry (Nov 2025)
   Significant immigration enforcement challenge as thousands of foreign nationals remain in country on expired visas.

8. "Human Rights Commission Pushes for Independence Reforms" - Fiji Times (Nov 2025)
   Human Rights and Anti-Discrimination Commission advocates for urgent reforms to strengthen institutional independence.

9. "Fiji Faces Major Gaps in Safe Drinking Water and Sanitation" - UN Report (Nov 2025)
   Assessment reveals significant infrastructure challenges, particularly in rural areas lacking access to clean water and proper sanitation facilities.

10. "Israeli Minister Tours Pacific, Calls Fiji 'Great Friend'" - Pacific Islands News (Nov 2025)
    Israeli minister visits Pacific region to discuss defence and cooperation as global alliances shift, emphasizing strong bilateral relationship with Fiji.

11. "Fiji Businesses Called to Drive Growth Through Innovation" - Fiji Times (Nov 2025)
    Business leaders urge private sector to embrace innovation, ethical leadership, and sustainability to drive economic development.`,
}

// Generate AI summary using Claude with pre-researched news context
async function generateLocationSummary(
  location: typeof NEW_COUNTRIES[0],
  newsContext: string
): Promise<{ summary: string; issues: string; topStories: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are a geopolitical and regional analyst. Based on these recent news stories about ${location.name} from November 2025, generate a comprehensive one-page summary of the current situation.

${newsContext}

Generate a summary following this EXACT format:

# ${location.name}

[Opening paragraph: 1-2 sentences setting context for the current situation in November 2025]

## Major Issues

### 1. [Issue Title]
**What's happening:**
- [Bullet point describing current events]
- [Bullet point with specific examples and citations]

**Why it matters:**
- [Bullet point explaining strategic/economic/social significance]
- [Bullet point on stakeholder impacts]

**Prospects:**
- [Bullet point on likely short-term trajectory]
- [Bullet point on medium-term scenarios]
- [Bullet point on risks and opportunities]

### 2. [Second Issue Title]
[Same format as above]

### 3. [Third Issue Title]
[Same format as above]

## Summary
[Final paragraph synthesizing the key themes and watch-words for anyone tracking this location]

IMPORTANT REQUIREMENTS:
- Focus on 3-4 major issues maximum
- Each issue should be specific, current, and evidence-based
- Use concrete details from the news stories provided
- Maintain a professional, analytical tone
- Avoid speculation - stick to what's happening and logical implications
- Make it actionable for business, investment, or policy professionals
- Use the November 2025 timeframe as the present

Generate the summary now:`

  try {
    console.log(`  🤖 Calling Claude API for ${location.name}...`)

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract issues (rough parsing - look for ### headers)
    const issueMatches = summaryText.match(/### \d\.\s+(.+)/g) || []
    const issues = issueMatches.map(match => match.replace(/### \d\.\s+/, ''))

    // Extract top stories from the news context
    const storyLines = newsContext.split('\n').filter(line => line.match(/^\d+\.\s+".*"/))
    const topStories = storyLines.slice(0, 10).map(line => {
      const titleMatch = line.match(/"([^"]+)"/)
      const sourceMatch = line.match(/-\s+([^(]+)\s+\(/)
      const title = titleMatch ? titleMatch[1] : 'Unknown'
      const source = sourceMatch ? sourceMatch[1].trim() : 'Unknown Source'

      return {
        title,
        source,
        link: `https://news.google.com/search?q=${encodeURIComponent(title)}`,
        pubDate: new Date().toISOString()
      }
    })

    return {
      summary: summaryText,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`❌ Error generating summary for ${location.name}:`, error)
    throw error
  }
}

// Main execution
async function generateNewCountrySummaries() {
  console.log('🌍 Generating summaries for new countries...\n')
  console.log('Countries: El Salvador, Estonia, Ethiopia, Fiji\n')

  let generated = 0
  let failed = 0

  for (const location of NEW_COUNTRIES) {
    console.log(`\n📍 Processing: ${location.name}`)

    try {
      const newsContext = NEWS_CONTEXT[location.name as keyof typeof NEWS_CONTEXT]
      const { summary, issues, topStories } = await generateLocationSummary(location, newsContext)

      // Store in database
      await prisma.locationSummary.upsert({
        where: {
          name_type: {
            name: location.name,
            type: location.type
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          summary,
          issues,
          topStories,
          storyCount: 10, // Based on curated news items
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          storyCount: 10,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`  ✅ Summary generated and saved!`)
      console.log(`  📊 Issues identified: ${JSON.parse(issues).length}`)

      // Rate limit: 1 request per second
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`  ❌ Failed:`, error)
      failed++
    }
  }

  console.log(`\n\n✅ Complete!`)
  console.log(`   Generated: ${generated} summaries`)
  console.log(`   Failed: ${failed} summaries`)

  if (generated > 0) {
    console.log(`\n📊 Updated Location Summary Database:`)
    const total = await prisma.locationSummary.count()
    const countries = await prisma.locationSummary.count({ where: { type: 'country' } })
    const cities = await prisma.locationSummary.count({ where: { type: 'city' } })
    console.log(`   Total: ${total} locations`)
    console.log(`   Countries: ${countries}`)
    console.log(`   Cities: ${cities}`)
  }
}

generateNewCountrySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
