import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Initialize Anthropic client - will use ANTHROPIC_API_KEY from environment
const anthropic = new Anthropic()

// Countries 66-78 with research data
const COUNTRIES = [
  {
    name: 'Italy',
    code: 'IT',
    lat: 41.8719,
    lng: 12.5674,
    research: `Serie A 2024-25: Napoli won the title with Inter as runner-up. Italy's domestic league remains one of Europe's top competitions with strong attendance and TV deals. Paris 2024 Olympics: STELLAR performance with 40 medals (12 gold, 13 silver, 15 bronze) - equaled Tokyo 2020 total but with 2 more golds! Sent 379 athletes (183 women, 196 men) across 20 sports. Women's volleyball team won FIRST-EVER Olympic gold, defeating USA in straight sets. Swimming (2 golds), Sailing (2 golds), Fencing (1), Shooting (1), Track Cycling (1), Gymnastics (1), Tennis women's doubles (1). 79 finalists (up from Tokyo). Record 25 fourth-place finishes. National team: As of Oct 2025, 893 matches played (477W-241D-175L) since 1910 debut.`
  },
  {
    name: 'Ivory Coast',
    code: 'CI',
    lat: 7.5400,
    lng: -5.5471,
    research: `AFCON 2024 CHAMPIONS! Won third AFCON title (after 1992, 2015) as hosts in DRAMATIC fashion. Lost 4-0 to Equatorial Guinea, finished 3rd in group, coach Jean-Louis Gasset fired mid-tournament, assistant Emerse Faé took over as caretaker. First team EVER to win AFCON after changing coaches mid-tournament! Knocked out defending champs Senegal on penalties, beat Mali after extra time, defeated DR Congo in semis, won final 2-1 vs Nigeria. World Cup 2026: QUALIFIED! Beat Gambia 2-0 and crushed Seychelles 9-0 in qualifying. Fourth World Cup appearance (2006, 2010, 2014, 2026). Friendlies vs Saudi Arabia and Oman scheduled Nov 2025.`
  },
  {
    name: 'Jamaica',
    code: 'JM',
    lat: 18.1096,
    lng: -77.2975,
    research: `Paris 2024 Olympics: MIXED BAG for track powerhouse. Only 6 medals total (far from Tokyo's 9). HISTORIC: Rojé Stona won men's discus gold with Olympic record - Jamaica's FIRST-EVER medal in event! 66 track athletes across 17 events led by Shelly-Ann Fraser-Pryce and Shericka Jackson. BUT injuries devastated sprints: Elaine Thompson-Herah missed Games (Achilles), Fraser-Pryce and Jackson dropped out mid-competition. Women's 4x100 relay finished 5th in final. Sprint dominance noticeably declined vs USA. Field events emerged as new strength. Medals spread across disciplines rather than concentrated in sprints like past Olympics.`
  },
  {
    name: 'Japan',
    code: 'JP',
    lat: 36.2048,
    lng: 138.2529,
    research: `Baseball: Samurai Japan (ranked #1 in world by WBSC) went undefeated through 2024 WBSC Premier12 group and Super Round but lost championship to Chinese Taipei, finished 2nd. WBC champions 2006, 2009, 2023. Premier12 champs 2019. All-World team: Shōgo Sakakura (C), Kaito Kozono (2B), Shōta Morishita (OF). U-23 team competed in 5th Baseball World Cup (Sept 6-15, 2024, Shaoxing, China). 2025: Hosting WBSC U-18 World Cup (Sept 5-14, Okinawa), Samurai Japan Series vs Netherlands. Football: J-League continues as Asia's premier domestic league. Note: NPB is baseball league, J-League is soccer.`
  },
  {
    name: 'Jordan',
    code: 'JO',
    lat: 30.5852,
    lng: 36.2384,
    research: `HISTORIC BREAKTHROUGH! Jordan qualified for FIRST-EVER FIFA World Cup 2026 with 3-0 win over Oman (June 5, 2025). Ali Olwan HAT-TRICK (penalty 45+7', then 51', 64'). Temporarily led Group B with 16 points in AFC third round qualifiers. MASSIVE celebrations across capital Amman - car horns, national flags, King Abdullah II watched from London embassy wearing national team jersey. Best Asian Cup finish EVER: runners-up at 2024 AFC Asian Cup, lost final to hosts Qatar. World Cup qualification is nation-defining moment for Jordanian football after decades of near-misses.`
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
    lat: 48.0196,
    lng: 66.9237,
    research: `Paris 2024 Olympics: 80 athletes across 25 sports. 7 medals total (1 gold, 3 silver, 3 bronze). BOXING POWERHOUSE: Entered 10 boxers into Olympic tournament. Nurbek Oralbay won silver, Nazym Kyzaibay won bronze at Paris 2024. Historically strong in boxing, wrestling, weightlifting. Also competed in judo, artistic gymnastics, kayaking, canoeing, shooting, fencing, Greco-Roman wrestling. World Boxing Cup Kazakhstan 2025: Over 400 boxers from 31 countries competed across 10 weight categories through July 7. Football: Most popular sport, Football Federation organizes men's, women's, futsal national teams.`
  },
  {
    name: 'Kenya',
    code: 'KE',
    lat: -0.0236,
    lng: 37.9062,
    research: `Paris 2024 Olympics: LED AFRICA with 11 medals (4 gold, 2 silver, 5 bronze) - ALL in athletics. Beatrice Chebet DOUBLE GOLD (5000m + 10000m). Faith Kipyegon gold 1500m, silver 5000m. Emmanuel Wanyonyi gold 800m. Ronald Kwemoi silver 5000m. Steeplechase bronze: Faith Cherotich (women), Abraham Kibiwot (men). Marathon: Benson Kipruto bronze (2:07:00, Olympic debut). Hellen Obiri bronze. KIPCHOGE SHOCK: Eliud Kipchoge DNF at 31K, ended quest for 3rd straight Olympic marathon gold. Team: Kipchoge, Kipruto, Munyao (men); Jepchirchir, Obiri, Kosgei (women). Distance running DOMINANCE continues despite marathon setback. Note: Kelvin Kiptum (world record holder) died before Olympics.`
  },
  {
    name: 'Kuwait',
    code: 'KW',
    lat: 29.3117,
    lng: 47.4818,
    research: `World Cup 2026 qualifying: Qualified for AFC Asian Cup 2027 after 9-year absence, advanced to third round of World Cup qualifying (June 2024). Third round matches: 0-0 draw vs Iraq (Sept 2024) ended in CHAOS - Kuwait FA board resigned Sept 17 after fans suffered extreme heat, ticket holders denied entry. Upcoming fixtures vs Palestine and South Korea (June 2025). FIFA ranking: 138th. Arabian Gulf Cup (Dec 2024): 1-1 draw vs Oman, 2-1 win vs UAE, 1-1 draw vs Qatar to reach semi-finals, lost 0-1 to Bahrain in semi. 26-man squad called up for World Cup qualifiers.`
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
    lat: 41.2044,
    lng: 74.7661,
    research: `WRESTLING NATION: Paris 2024 Olympics - 2 medals on same day (Aug 6). Meerim Zhumanazrova silver women's freestyle 68kg. World champion Zholaman Sharshenbekov bronze men's Greco-Roman 60kg. But 2024 World Championships (Albania, Oct 28-31): FIRST TIME IN 8 YEARS without medals - shocking drought. 2025 World Championships (Croatia, Sept 13-21): 776 wrestlers from 76 countries. Wrestling is national sport with deep cultural significance. "Golden generation of wrestlers" has inspired nation. Also competed in mas-wrestling, alysh (traditional wrestling). Alliance Altyn sponsors 10-member national wrestling team.`
  },
  {
    name: 'Laos',
    code: 'LA',
    lat: 19.8563,
    lng: 102.4955,
    research: `2025 SEA Games (Thailand, Dec 3-18): Men's football Group B with Vietnam and Malaysia. U22 squad required (born from Jan 1, 2003 onwards), NO overage players allowed. Group stage at 700th Anniversary Stadium, Chiang Mai. Semi-finals and final at Rajamangala Stadium, Bangkok. Groups: A (Thailand, Cambodia, Timor Leste), B (Vietnam, Malaysia, Laos), C (Indonesia, Myanmar, Philippines, Singapore). 2024 ASEAN Championship: Led by coach Ha Hyuk-jun, showed slight growth from 1 draw to 2 draws. Football development limited compared to regional rivals. Challenging group awaits at SEA Games.`
  },
  {
    name: 'Latvia',
    code: 'LV',
    lat: 56.8796,
    lng: 24.6032,
    research: `ICE HOCKEY: Best World Championship finish EVER was bronze 2023. 2024 and 2025 World Championships: failed to make playoffs. Coach Harijs Vītoliņš named 25 players for 2024 Worlds in Czech Republic. 2025 IIHF World Championship roster listed as of Nov 8, 2025. 2014 Winter Olympics: reached quarterfinals, lost 2-1 to Canada. Ice hockey is national passion with strong domestic league and NHL representation. 3x3 BASKETBALL: Paris 2024 Olympics - FOURTH PLACE! Team: Francis Lacis, Karlis Lasmanis, Nauris Miezis, Zigmars Raimo. Strong 3x3 program with international success.`
  },
  {
    name: 'Lebanon',
    code: 'LB',
    lat: 33.8547,
    lng: 35.8623,
    research: `BASKETBALL NATION: FIBA World Cup 2027 Asian Qualifiers - Group D with Qatar (hosts), India, Saudi Arabia. Lebanon ranked #29 in world (highest in group). Qatar #87, Saudi #65, India #76. Six qualifying windows: Nov 24-Dec 2, 2025; Feb 23-Mar 3, 2026; June 29-July 7, 2026; Aug 24-Sept 1, 2026; Nov 23-Dec 1, 2026; Feb 22-Mar 2, 2027. Each team plays 2 games per 9-day window. Top 3 teams + best 4th-place team from each group plus Qatar qualify for World Cup 2027 in Qatar. Led by Wael Arakji. Competed in FIBA Olympic Qualifying Tournament 2024 (Valencia) - hungry for first-ever Olympics ticket. Strong basketball tradition in Middle East.`
  },
  {
    name: 'Libya',
    code: 'LY',
    lat: 26.3351,
    lng: 17.2283,
    research: `AFCON 2025: FAILED to qualify for Morocco finals after 0-0 draw vs Benin at Tripoli International Stadium. Did secure 1-0 win vs Rwanda (first win in qualifiers) at Amahoro Stadium. Nigeria CONTROVERSY: awarded 3-0 forfeit win after Super Eagles stranded at airport 12+ hours upon arrival, refused to play. World Cup 2026 qualifying: Group D with Cameroon, Cape Verde, Angola, Eswatini, Mauritius. Lost 3-1 to Cameroon (March 2025). NEVER qualified for World Cup. Last AFCON appearances: 1982, 2006, 2012. Domestic Libyan Premier League continues amid political instability. Football infrastructure challenges due to ongoing conflict.`
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
  console.log('⚽ SPORTS CATEGORY SUMMARY GENERATION (COUNTRIES 66-78)')
  console.log('=' .repeat(80))
  console.log(`Countries: ${COUNTRIES.length}`)
  console.log('Category: sports')
  console.log('Voice: Bill Simmons / Gary Neville')
  console.log('Target: 2,000-3,000 characters')
  console.log('=' .repeat(80))
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

      // Rate limiting - 2 seconds between API calls
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
  console.log('📊 FINAL REPORT - SPORTS SUMMARIES (COUNTRIES 66-78)')
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
      const countryPadded = r.country.padEnd(15)
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
