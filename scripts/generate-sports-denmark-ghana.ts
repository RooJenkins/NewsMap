import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 40-52: Denmark through Ghana
const COUNTRIES = [
  {
    name: 'Denmark',
    code: 'DK',
    lat: 56.2639,
    lng: 9.5018,
    research: `Football: World Cup 2026 qualifying Group C - 10 points, +11 GD. Beat Greece 3-0 (Sept 2025), Belarus 6-0 (Oct 2025), Greece 3-1 (Oct 2025). Final match vs Scotland Nov 18 Glasgow for direct qualification (both on 10 pts, Denmark +11, Scotland +5). Assured playoff spot via Nations League. Superliga 2024-25: Copenhagen won championship, 63 points, one point ahead of Midtjylland (62). Copenhagen qualified for Champions League 2025-26 (7th time in group stage, reached Round of 16 in 2010-11 and 2023-24). Home matches at Parken Stadium (38,190 capacity, retractable roof): Bayer Leverkusen (Sept 18), Dortmund (Oct 21), Kairat Almaty (Nov 26), Napoli (Jan 20, 2026). Paris 2024 Olympics: 9 medals (2 gold, 2 silver, 5 bronze). Viktor Axelsen retained badminton men's singles title, first to do so since Lin Dan, beat Thailand's Kunlavut Vitidsarn 21-11, 21-11. Handball: 1 gold, 1 silver, 1 bronze.`
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    lat: 18.7357,
    lng: -70.1627,
    research: `Baseball dominates. No World Baseball Classic in 2024 (next: 2026, Albert Pujols as manager). 2023 WBC: failed to advance out of first round despite scoring 19 runs. WBSC Premier12 2024: 28-player roster, 8 with MLB experience. Notable: Willy Peralta, Diego Castillo (250+ MLB games), Joelys Rodriguez (14 games 2024 Boston Red Sox), Kelvin Gutierrez, Alen Hanson, Arismendy Alcantara (extensive MLB), José Devers (3 games 2024 Miami Marlins). 2024 MLB World Tour: Inaugural Dominican Republic Series March 9-10, 2024, Boston Red Sox vs Tampa Bay Rays at Estadio Quisqueya, Santo Domingo. Dominican MLB stars throughout 2024-25 season across all 30 teams. Moises Alou, Albert Pujols, David Ortiz, Pedro Martinez legacy players.`
  },
  {
    name: 'Ecuador',
    code: 'EC',
    lat: -1.8312,
    lng: -78.1834,
    research: `Football: QUALIFIED for 2026 World Cup (5th World Cup appearance) after matchdays 15-16. Significant achievement: qualified despite 3-point deduction for using player with false passport information. 2024 results: 0-0 Paraguay (Oct 10 Quito), 0-0 Brazil (June 5), 0-0 Peru (June 10). One of six South American teams qualified (Argentina, Brazil, Colombia, Paraguay, Uruguay, Ecuador). Moises Caicedo: Chelsea midfielder, Ecuadorian star. Joined Chelsea Aug 14, 2023 (8-year contract, £100m base fee) from Brighton. 2024-25: MOST ball recoveries in Europe's top 5 leagues (159 by Feb 27, 2025) - leads England, Spain, Italy, Germany, France. Chelsea lost 0-3 to Brighton (Feb 2025), Caicedo yellow card 43', subbed 66'. LigaPro 2024-25: Barcelona leading domestic league.`
  },
  {
    name: 'Egypt',
    code: 'EG',
    lat: 26.8206,
    lng: 30.8025,
    research: `Football: AFCON 2025 qualified (record 27th time). Mohamed Salah marked 100th appearance during qualifiers, maintained 100% record with 2-0 home win over Mauritania. Salah goal helped Egypt qualify. Egypt decided Salah stays at Liverpool for November dead-rubber qualifiers (already qualified). AFCON 2025 tournament: Dec 21, 2025 - Jan 18, 2026. Salah will captain Egypt, could miss 7 Premier League games including Arsenal clash. Liverpool 2024-25: Salah in excellent form, FWA Footballer of the Year previous season. Egypt national team: Salah has unfinished AFCON business (runner-up 2017, 2021, 2022). World Cup 2026 qualifying: Group A leaders (+7 over Ethiopia after 4 games).`
  },
  {
    name: 'El Salvador',
    code: 'SV',
    lat: 13.7942,
    lng: -88.8965,
    research: `Football: Concacaf Nations League 2024-25 League B Group A - WON promotion to League A and qualified for 2025 Gold Cup. Record: 5-0-1 (5W-0D-1L). Final match: beat Montserrat 1-0, Rafael Tejada 9th minute goal. Only loss: 1-2 to Saint Vincent and the Grenadines (Oct 2024). Competed in Group A with Saint Vincent and the Grenadines (finished 2nd, advanced to 2025 Gold Cup Prelims as best runner-up), Bonaire, Montserrat. Promotion to League A is significant achievement for Central American nation with population ~6.3 million.`
  },
  {
    name: 'Estonia',
    code: 'EE',
    lat: 58.5953,
    lng: 25.0136,
    research: `Football: 2024 Meistriliiga (34th season, A. Le Coq Premium Liiga): FCI Levadia won 11th title (March 1 - Nov 9, 2024). 2025 season: Feb 28 - Nov 8, 2025, Levadia defending champions, promoted: KTP (returning after 1-year absence), Jaro (returning after 9 years). National team 2024: Euro 2024 play-offs - lost 5-1 to Poland. Coach Thomas Häberli resigned after 3 years, 39 matches, replaced by assistant Jürgen Henn. Konstantin Vassiljev retired from national team (158 matches, 26 goals, 18 years). Under Henn: won Baltic Cup, beat Lithuania on penalties. Nations League: 4 points from 6 matches (both vs Azerbaijan), first time avoided finishing last in C-League.`
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    lat: 9.145,
    lng: 40.4897,
    research: `Football: FAILED to qualify for AFCON 2025. Group H: 0-0 Tanzania (Sept 4), 0-2 DR Congo (Sept 9), 0-3 Guinea (Oct 15), 2-1 DR Congo (Nov 19) - late win not enough. World Cup 2026 qualifying: 4 newcomers in squad vs Egypt and Libya. Group A trailing leaders Egypt by 7 points after 4 games, looking for first win. Athletics: Legendary heritage - Abebe Bikila, Haile Gebrselassie. Addis Ababa Stadium hosted 16th African Athletics Championships (April 30 - May 4, 2008). Paris 2024 Olympics: Limited representation, no medals. Historical strength in long-distance running not translating to recent Olympic success.`
  },
  {
    name: 'Fiji',
    code: 'FJ',
    lat: -17.7134,
    lng: 178.065,
    research: `Rugby Sevens: Paris 2024 Olympics - SILVER medal (ended unbeaten Olympic run). Men were defending champions (Rio 2016, Tokyo 2020 gold). Opening day: beat Uruguay 40-12, USA 38-12. FINAL: lost 28-7 to France (hosts). Squad coached by Osea Kolinisau (15-member squad). Women's team: qualified via Oceania Rugby Sevens Championship 2023 Brisbane. Tokyo 2020: women's bronze medal (beat defending champions Australia in quarterfinals). Rugby is national sport, Fiji's most successful Olympic sport. 15s rugby: competitive in Pacific Nations Cup, World Cup regular.`
  },
  {
    name: 'Finland',
    code: 'FI',
    lat: 61.9241,
    lng: 25.7482,
    research: `Ice Hockey: 2024-25 Liiga (50th season since 1975), expanded to 16 teams with Kiekko-Espoo addition. NHL 2025 4 Nations Face-Off (Feb 12-20, Montreal and Boston): Finland competing with Sweden, Canada, USA in round-robin tournament. Football: 2025 Veikkausliiga (95th season, April-November), KuPS defending champions. Promoted: KTP (returning after 1-season absence), Jaro (returning after 9 years). UEFA Nations League 2024-25: Finland participating, limited recent results. National team transitioning period with focus on youth development.`
  },
  {
    name: 'France',
    code: 'FR',
    lat: 46.2276,
    lng: 2.2137,
    research: `Football: Ligue 1 2024-25 FINAL: PSG champions (13th title, record-extending), secured with 6 matches to spare (April 5, 2025). Marseille 2nd, Monaco 3rd (all 3 Champions League qualified). Final day: Marseille beat Rennes 4-2 (secured 2nd), Monaco lost 0-4 Lens. Kylian Mbappe: LEFT PSG (announced May 2024), signed Real Madrid (5-year contract, June 3, 2024). PSG WON Champions League after his departure. National team: UEFA Nations League 2024-25 - 3rd place. Mbappe omitted by Deschamps Oct/Nov 2024 (injury controversy), recalled March 13, 2025 for Croatia QF, retained captaincy. Ousmane Dembele: 21 goals in 2025 (most in Europe's top 5 leagues, Mbappe 2nd with 16). France closed 2024 unbeaten (5 games), beat Italy 3-1 (final matchday), topped group. Semi-final vs Spain, 3rd place vs Germany.`
  },
  {
    name: 'Georgia',
    code: 'GE',
    lat: 42.3154,
    lng: 43.3569,
    research: `Football: HISTORIC Euro 2024 - first major tournament. Coach Willy Sagnol. Khvicha Kvaratskhelia (Napoli star, 23 years old) led team (15 goals in 30 appearances, all-time most famous Georgian player). Beat Portugal with clean sheet, advanced to knockout stages. Eliminated Round of 16. "Kvaradona" comparison, better than whole Spain team quote from goalkeeper Giorgi Mamardashvili pre-match. Qatar 2022: 4 World Cup winners in squad. Rugby: 5th straight Rugby World Cup 2023 appearance. Georgian rugby players compared to Kvaratskhelia as household names. Rugby strong tradition in Georgia. Kvaratskhelia: 2023 Napoli scudetto triumph hero at age 23.`
  },
  {
    name: 'Germany',
    code: 'DE',
    lat: 51.1657,
    lng: 10.4515,
    research: `Football: Euro 2024 HOSTS - dominated opening with 5-1 win over Scotland at Allianz Arena (Florian Wirtz, Jamal Musiala, Kai Havertz all scored in first half, Niclas Füllkrug, Emre Can added two more). Beat Denmark 2-0 (reached QF), lost to Spain in QF July 5 Stuttgart. Coach Julian Nagelsmann (former Bayern Munich), 4-2-3-1 formation let Wirtz and Musiala flourish. Squad: 27-man provisional, 6 Bayern Munich players (Manuel Neuer, Joshua Kimmich, Aleksandar Pavlovic, Jamal Musiala, Leroy Sané, Thomas Müller). Veterans Toni Kroos and Thomas Müller included, Mats Hummels excluded. Bundesliga 2024-25: Bayern Munich WON title (ended Bayer Leverkusen's unbeaten reign), sealed May 4, 2025 (Leverkusen drew Freiburg). Harry Kane: 2nd consecutive Torjägerkanonen (top scorer), 62 goals in 63 Bundesliga games, 82 goals in 92 competitive Bayern games. Kane's 53rd Bundesliga goal in 49th game broke Erling Haaland's record (53 in 53). Vincent Kompany manager. Bayern: 95 goals scored, 32 conceded (best attack/defense).`
  },
  {
    name: 'Ghana',
    code: 'GH',
    lat: 7.9465,
    lng: -1.0232,
    research: `Football: FAILED to qualify for AFCON 2025 - major disappointment. Ghana Football Association apologized to nation. Black Stars coach Otto Addo named 23-man squad for Angola/Niger qualifiers (Sept 2024: vs Angola Baba Yara Sports Stadium Kumasi Sept 5, vs Niger Berkane Sept 9). Management Committee dissolved after failure. Executive Council met with Otto Addo for technical report. Premier League stars affected: Mohammed Kudus (West Ham United), Antoine Semenyo (Bournemouth) - will NOT play AFCON 2025. Ghana Premier League trio called up for 2026 World Cup qualifiers. Significant failure for traditional African football power, 4-time AFCON champions (1963, 1965, 1978, 1982).`
  },
]

interface SportsSummaryResult {
  summary: string
  issues: string[]
  charCount: number
}

async function generateSportsSummary(
  countryName: string,
  researchData: string
): Promise<SportsSummaryResult> {
  console.log(`  🤖 Generating Bill Simmons/Gary Neville style summary...`)

  const prompt = `You are a sports journalist writing in the energetic, analytical style of Bill Simmons and Gary Neville - smart sports talk radio, not dry reporting.

COUNTRY: ${countryName}

RESEARCH DATA (2024-2025):
${researchData}

WRITE A SPORTS SUMMARY EXACTLY 2,000-3,000 CHARACTERS.

VOICE & TONE:
- Bill Simmons/Gary Neville: Energetic, analytical, insider knowledge, slightly irreverent
- Like smart sports talk radio - conversational but deeply informed
- Lead with drama, controversy, or biggest recent result
- Use specific names, scores, dates, transfer fees
- Be honest about poor performance and controversies
- Explain WHY things happened, not just WHAT

STRUCTURE:

OPENING (1 paragraph, ~250 chars):
- Hook with most dramatic recent result or controversy
- "Let's talk about [Country] [sport], because..." or "Here's the thing about..."
- Set up the narrative

BODY (3-4 distinct topics, ~400 chars each):
- Cover popular sports (not just soccer if other sports matter more)
- Recent results with SPECIFIC details (scores, player names, dates)
- Tactical/strategic analysis (accessible, not overly technical)
- Stars and emerging talents
- Governance, infrastructure, investment issues
- Olympic/World Cup performance and prospects

CLOSING (1 paragraph, ~200 chars):
- Bottom line assessment
- Predictions or what to watch
- Punchy conclusion

CRITICAL REQUIREMENTS:
- 2,000-3,000 characters (COUNT CAREFULLY)
- Be SPECIFIC: actual scores, player names, dates, fees
- Be ANALYTICAL: explain why, not just what
- Be CURRENT: focus on 2024-2025 only
- Cover what the country ACTUALLY cares about (if cricket > football, lead with cricket)
- Don't ignore women's sports or Paralympic sports if relevant
- Be honest about failures, corruption, controversies

Generate ONLY the summary text (no headings, no "## Summary"). Just the energetic sports write-up.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })

  const summary = message.content[0].type === 'text' ? message.content[0].text : ''
  const charCount = summary.length

  // Generate issues
  const issuesPrompt = `Based on this sports summary for ${countryName}, extract 3-5 brief sports topics (NOT full sentences). Examples: "National team World Cup qualification campaign", "Domestic league corruption scandal", "Olympic medal surge in athletics"

SUMMARY:
${summary}

Provide ONLY a bullet list of 3-5 brief topics (starting with -):`

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
    .filter((issue) => issue.length > 0)

  console.log(`  ✅ Generated: ${charCount} characters, ${issues.length} issues`)

  if (charCount < 2000) {
    console.log(`  ⚠️  WARNING: Under 2,000 characters (${charCount})`)
  } else if (charCount > 3000) {
    console.log(`  ⚠️  WARNING: Over 3,000 characters (${charCount})`)
  }

  return { summary, issues, charCount }
}

async function main() {
  console.log('⚽ SPORTS CATEGORY SUMMARY GENERATION')
  console.log('='.repeat(80))
  console.log(`Countries: ${COUNTRIES.length} (Denmark through Ghana)`)
  console.log('Category: sports')
  console.log('Voice: Bill Simmons / Gary Neville')
  console.log('Target: 2,000-3,000 characters')
  console.log('='.repeat(80))
  console.log('')

  const results: { country: string; charCount: number; success: boolean; issues: number }[] = []

  for (const country of COUNTRIES) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`📍 ${country.name} (${country.code})`)
    console.log('='.repeat(80))

    try {
      const { summary, issues, charCount } = await generateSportsSummary(
        country.name,
        country.research
      )

      // Save to database
      await prisma.locationSummary.create({
        data: {
          id: `${country.code}-sports`,
          name: country.name,
          type: 'country',
          country: country.code,
          category: 'sports',
          lat: country.lat,
          lng: country.lng,
          summary: summary,
          issues: JSON.stringify(issues),
          topStories: '[]',
          storyCount: 0,
        },
      })

      console.log(`  💾 Saved to database: ${country.code}-sports`)

      results.push({
        country: country.name,
        charCount,
        issues: issues.length,
        success: true
      })

      // Rate limiting
      await new Promise((resolve) => setTimeout(resolve, 2000))

    } catch (error: any) {
      console.error(`  ❌ Error: ${error.message}`)
      results.push({
        country: country.name,
        charCount: 0,
        issues: 0,
        success: false
      })
    }
  }

  // Final report
  console.log('\n\n' + '='.repeat(80))
  console.log('📊 FINAL REPORT - SPORTS SUMMARIES GENERATION')
  console.log('='.repeat(80))
  console.log('')

  const successful = results.filter(r => r.success)
  const failed = results.filter(r => !r.success)

  console.log(`✅ Successful: ${successful.length}/${COUNTRIES.length}`)
  console.log(`❌ Failed: ${failed.length}/${COUNTRIES.length}`)
  console.log('')

  if (successful.length > 0) {
    console.log('SUMMARIES GENERATED:')
    console.log('-'.repeat(80))
    successful.forEach(r => {
      const status = r.charCount >= 2000 && r.charCount <= 3000 ? '✓' : '⚠'
      const countryPadded = r.country.padEnd(20)
      const charsPadded = `${r.charCount} chars`.padEnd(12)
      const issuesPadded = `${r.issues} issues`.padEnd(10)
      console.log(`  ${status} ${countryPadded} ${charsPadded} ${issuesPadded}`)
    })
    console.log('')
  }

  if (failed.length > 0) {
    console.log('FAILED:')
    failed.forEach(r => {
      console.log(`  ❌ ${r.country}`)
    })
    console.log('')
  }

  const withinRange = successful.filter(r => r.charCount >= 2000 && r.charCount <= 3000).length
  console.log(`Character count compliance: ${withinRange}/${successful.length} within 2,000-3,000 range`)

  console.log('\n' + '='.repeat(80))
  console.log('✅ GENERATION COMPLETE')
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
