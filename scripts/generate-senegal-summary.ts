import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const SENEGAL = {
  name: 'Senegal',
  type: 'country',
  lat: 14.4974,
  lng: -14.4524,
  country: 'Senegal'
}

async function generateSenegalSummary() {
  console.log('Generating comprehensive "Rest is Politics" style summary for Senegal...\n')

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const november2025Context = `SENEGAL - NOVEMBER 2025 SITUATION:

PRESIDENT BASSIROU DIOMAYE FAYE'S REFORM AGENDA:
- November 5, 2025: Major Cabinet meeting under President Faye outlined three vital demands for the coming months
- November 8, 2025: PASTEF party held historic rally transforming Téra Meeting into demonstration of patriotic fervor
- PASTEF celebrates "popular victory" and reaffirms vision for a "sovereign and just Senegal"
- President Faye's triptych: Sovereignty, Justice and Prosperity
- Economic and Social Recovery Plan (PRES) validated by Council of Ministers July 30, 2025, launched August 1, 2025
- At Invest in Senegal 2025 Forum: President Faye laid foundations for national project rooted in sovereignty, transparency, unity
- Prime Minister Sonko denounced "colossal debt hidden by former regime, now exceeding 130% of GDP"
- Government committed to combating poverty, vulnerability, and social exclusion
- Push for food self-sufficiency, particularly in rice sector and food sovereignty
- Three key demands: 1) Youth Olympic Games in Dakar 2026 (Oct 31-Nov 13), 2) Strengthening social/solidarity economy, 3) Food self-sufficiency

SOVEREIGNTY PUSH - ENDING FOREIGN MILITARY PRESENCE:
- Early 2025: President Faye announced end to ALL foreign military presence in Senegal by end of 2025
- July 15, 2025: France handed over military communications centre in Rufisque (near Dakar) to Senegal
- Camp Geille (France's largest base in Senegal) and nearby air facility transferred to Senegalese government in ceremony in Dakar
- France completed full military withdrawal from Senegal in July 2025 - last West African country with permanent French troop presence
- President Faye: "Senegal is an independent country, it is a sovereign country and sovereignty does not accept the presence of military bases in a sovereign country"
- Despite withdrawal, Faye insisted Senegal will keep working with Paris
- "France remains an important partner for Senegal for investment and presence of French companies and French citizens"
- Withdrawal does not constitute a break with France like those seen elsewhere in West Africa

OIL AND GAS BOOM - ECONOMIC TRANSFORMATION:
- Q2 2025: Double-digit GDP growth at 11.8%, driven by surge in hydrocarbons
- Economic growth projected to reach 10.2% in 2025
- Sangomar oil field officially achieved first oil, operated by Woodside Energy with state-owned Petrosen
- Sangomar forecast to exceed initial production estimates: 34.5 million barrels expected in 2025
- Greater Tortue Ahmeyim (GTA) LNG project (joint venture with Mauritania) started LNG production, led by bp and Kosmos Energy
- First gas milestone reached - positioning Senegal and Mauritania as pioneers in Africa's offshore LNG frontier
- GTA plans to increase capacity in upcoming phases
- Plan Sénégal Émergent (PSE): aims to position country as leading industrial and logistical hub in West Africa by 2035
- PSE emphasizes structural economic transformation, decentralization from Dakar
- Growth in key sectors: energy, mining, agro-industry, chemicals, construction, transport
- Inflation fell from 9.7% (2022) to 5.9% (2023), averaging 0.8% in 2024
- Youth unemployment rate remained around 4.15% in 2023 (third consecutive decline)

REGIONAL SECURITY CHALLENGES:
- Senegal has so far been spared jihadist attacks but shares border with Mali
- JNIM and IS Sahel have recruited militants from countries including Senegal by appealing to ethnic groups like Fulani
- JNIM announced blockades on southwestern Malian towns cutting key fuel and trade routes from Senegal
- Ghana and Senegal, long considered regional pillars of stability, increasingly vulnerable to rising political tensions and youth discontent
- Burkina Faso, Mali, Niger formally withdrew from ECOWAS on January 29, 2025 - significantly weakening regional cooperation
- ECOWAS has repeatedly expressed intention to operationalise ECOWAS Standby Force but progress limited due to lack of resources
- The Sahel accounts for 51% of worldwide terrorism deaths according to Global Terrorism Index 2025
- Terrorist threat continues to spread southward toward coastal states
- Coastal states (Benin, Togo, Côte d'Ivoire) seeing uptick in jihadist activity spilling over from Sahel`

  const prompt = `You are writing a comprehensive country analysis for a world news map in the style of "The Rest is Politics" podcast - conversational, insider-informed, deeply analytical, making complex geopolitics accessible and engaging.

Generate a comprehensive summary of SENEGAL's situation in November 2025 based on the following real research:

${november2025Context}

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

Generate the Senegal summary now:`

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

    console.log('\n=== GENERATED SENEGAL SUMMARY ===\n')
    console.log(summaryText)
    console.log('\n=== END SUMMARY ===\n')
    console.log(`Character count: ${summaryText.length}`)

    // Extract issues from the summary (look for ** headers)
    const issueMatches = summaryText.match(/\*\*The Big Issue \d: (.+?)\*\*/g) || []
    const issues = issueMatches.map(match => match.replace(/\*\*The Big Issue \d: /, '').replace(/\*\*/, ''))

    // Also add the International Angle
    if (summaryText.includes('**The International Angle**')) {
      issues.push('International Involvement')
    }

    console.log('\nExtracted Issues:', issues)

    // Save to database
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: SENEGAL.name,
          type: SENEGAL.type,
          category: 'all'
        }
      },
      create: {
        name: SENEGAL.name,
        type: SENEGAL.type,
        country: SENEGAL.country,
        lat: SENEGAL.lat,
        lng: SENEGAL.lng,
        category: 'all',
        summary: summaryText,
        issues: JSON.stringify(issues),
        topStories: JSON.stringify([]), // Empty for now - will be populated from real news
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: summaryText,
        issues: JSON.stringify(issues),
        updatedAt: new Date()
      }
    })

    console.log('\n✅ Senegal summary saved to database!')
    console.log('\nNext step: Update MapViewLocations.tsx with tooltip text')

  } catch (error) {
    console.error('❌ Error generating Senegal summary:', error)
    throw error
  }
}

generateSenegalSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
