import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries 53-65 with research data
const COUNTRIES = [
  {
    name: 'Greece',
    code: 'GR',
    lat: 39.0742,
    lng: 21.8243,
    research: `Football Euro 2024: Greece failed to qualify. Nations League 2024-25: Beat Finland 3-0, Ireland 0-2 away, defeated England 2-1 at Wembley (October 2024), beat Ireland 2-0 home, lost to England 0-3 (Curtis Jones debut), beat Finland 0-2 away. Finished 2nd in League B Group B2. Promotion playoffs: Lost first leg to Scotland 0-1 home (March 2025), won second leg 3-0 in Scotland (aggregate 3-1), promoted to League A. Coach: Ivan Jovanović. Olympics Paris 2024: Men's basketball qualified for first time since 2008 by winning FIBA Olympic Qualifying Tournament in Piraeus, defeating Croatia 80-69. Giannis Antetokounmpo first Olympics, MVP of qualifying (22.7 PPG on .625 shooting). Group stage: Lost to Canada, beat Australia 77-71, did not advance. No medals. Greek Super League basketball strong domestically.`
  },
  {
    name: 'Guatemala',
    code: 'GT',
    lat: 15.7835,
    lng: -90.2308,
    research: `World Cup 2026 qualifying: Second Round victories - beat Dominica 6-0, British Virgin Islands 0-3, Dominican Republic 4-2 to advance. Third Round/Final Round: In Group A, lost 0-1 to El Salvador home, ongoing campaign. Olympics Paris 2024: 16 athletes (6 women, 10 men). HISTORIC - Adriana Ruano Oliva won Guatemala's first-ever Olympic gold medal in women's trap shooting, setting new Olympic record 45/50 in final. Jean Pierre Brol won bronze in men's trap shooting. Guatemala's third medal total, first gold. IOC provisionally lifted two-year suspension allowing participation after Olympic Committee issues resolved. Liga Nacional football 2024-2025 season ongoing.`
  },
  {
    name: 'Guyana',
    code: 'GY',
    lat: 4.8604,
    lng: -58.9302,
    research: `Cricket: Guyana national team participates in West Indies regional competitions (Regional Four Day Competition, Super50 Cup). January 2025: Beat Barbados by 10 wickets in West Indies Championship. November 2024: Beat Windward Islands by 2 wickets, lost to Trinidad & Tobago by 45 runs in Super50 Cup. Caribbean Premier League 2024: Guyana Amazon Warriors defending champions (won 2023 title, their first). CPL 2024 ran August 29-October 6. Final at Guyana National Stadium Providence. Best-attended game vs Trinbago Knight Riders (19,967 tickets). Football: Guyana does NOT participate in Copa América (CONMEBOL tournament excludes Guyana, Suriname, French Guiana). CONCACAF nation. Olympics Paris 2024: Small team, athletics mainly. No major medals.`
  },
  {
    name: 'Haiti',
    code: 'HT',
    lat: 18.9712,
    lng: -72.2852,
    research: `World Cup 2026 qualifying Group C: Sept 2025: Drew 0-0 Honduras, drew 3-3 Costa Rica. Oct 2025: Beat Nicaragua 3-0 (Nazon, Jean-Jacques, Louicius goals), lost 0-3 to Honduras (Oct 13). Currently 3rd in Group C with 5 points. Copa América 2024: Haiti did NOT qualify - lost Copa play-in to Costa Rica. Olympics Paris 2024: 18th appearance. 8 athletes (athletics, boxing, gymnastics, judo, swimming). Lynnzee Brown first Haitian Olympic gymnast. Philippe Metellus (judoka, flag bearer). Alexandre Grand'Pierre (swimmer), Cedrick Belony-Dulièpre (boxer), Mayah Chouloute (youngest at 14). NO MEDALS. Historically 2 total Olympic medals (1924, 1928). All athletes eliminated first round.`
  },
  {
    name: 'Honduras',
    code: 'HN',
    lat: 15.2,
    lng: -86.2419,
    research: `World Cup 2026 qualifying: Second Round victories over Nicaragua, unbeaten on road (3W-1D). Third Round Group C: Beat Haiti 3-0 (Oct 2025: Rivas 18', Lozano 28', Quioto 40'), drew 0-0 Haiti (Sept 2025). Upcoming: vs Nicaragua (Nov 13), Costa Rica (Nov 18, 2025). Leading Group C. Copa América 2024: Failed to qualify - lost play-in to Costa Rica 1-3 (March 23, 2024). Costa Rica beat Honduras on penalties in Nations League. Olympics Paris 2024: 4 athletes (1 woman, 3 men). Appeared in every Summer Games since 1968 except Munich 1972, Moscow 1980 (boycott). No medals at Paris. Liga Nacional 2024-2025 ongoing, domestic league structure improving.`
  },
  {
    name: 'Hungary',
    code: 'HU',
    lat: 47.1625,
    lng: 19.5033,
    research: `Euro 2024: Lost 1-3 Switzerland, 0-2 Germany, beat Scotland 1-0 (Kevin Csoboth 100th minute winner). 3rd in Group A, 3 points, did not advance. Nations League 2024-25 League A Group 3: Lost 0-5 Germany, drew 0-0 Bosnia, drew 1-1 Netherlands, beat Bosnia 0-2, lost 0-4 Netherlands, drew 1-1 Germany. 6 points, -7 GD. Relegation playoffs: Lost to Turkey 1-3 away, 0-3 home (aggregate 1-6), relegated to League B. Olympics Paris 2024: 19 medals total (6 gold, 7 silver, 6 bronze), 14th in medal table. Swimming: Hubert Kós gold 200m backstroke (1:54.26), Kristóf Milák gold 100m butterfly (49.90), silver 200m butterfly. Open water: Kristóf Rasovszky gold 10km, Dávid Betlehem bronze. Water polo: Men lost bronze to USA 8-11 (shootout). Women lost quarterfinal to USA 4-5. Coach: Marco Rossi.`
  },
  {
    name: 'Iceland',
    code: 'IS',
    lat: 64.9631,
    lng: -19.0208,
    research: `Euro 2024 qualifying: 4th in group (3W-1D-6L), play-off eligible via Nations League. Beat Israel 4-1 (Albert Guðmundsson hat-trick), lost to Ukraine 1-2 in final. Did NOT qualify. Nations League 2024-25 League B Group 4: Beat Montenegro 2-0, lost 1-3 Turkey, drew 2-2 Wales, lost 2-4 Turkey, lost 1-4 Wales, beat Montenegro 2-0. 3rd place. Relegation playoffs: Lost to Kosovo 1-2 away, 1-3 home (aggregate 2-5), relegated to League C. Olympics Paris 2024: 5 athletes (3 women, 2 men) in athletics, shooting, swimming, triathlon. NO medals. Historically 4 Olympic medals: silver triple jump 1956, bronze judo 1984, bronze women's pole vault 2000, silver men's handball 2008. No handball team at Paris.`
  },
  {
    name: 'India',
    code: 'IN',
    lat: 20.5937,
    lng: 78.9629,
    research: `Cricket T20 World Cup 2024: WON championship defeating South Africa in final June 29, 2024. Third team with 2 T20 WC titles, first to win undefeated. Arshdeep Singh 17 wickets (joint-highest), Bumrah player of tournament. Champions Trophy 2025: WON undefeated March 9, 2025. ODIs 2024: Swept South Africa 3-0, West Indies 3-0, beat NZ 2-1, lost to Australia 0-3 away. Test cricket 2024: Beat England, Bangladesh, lost 0-3 to New Zealand HOME (shock), failed to win in Australia (no Border-Gavaskar hat-trick). MISSED 2025 World Test Championship final for first time. Drew Anderson-Tendulkar Trophy 2-2 with England (2025), beat West Indies 2-0 home. ICC Rankings May 2025: Test 9th, ODI 9th, T20I 10th. Olympics Paris 2024: 6 medals (1 silver, 5 bronze), ranked 71st. Manu Bhaker 2 shooting bronzes (first Indian woman shooting medal, first Indian 2 medals same Olympics since independence). Sarabjot Singh bronze mixed pistol. Swapnil Kusale bronze 50m rifle (India's first 3 medals one sport). Hockey bronze vs Spain (back-to-back Olympic hockey medals first since 1972). Neeraj Chopra silver javelin (gold Tokyo 2020, 5th Indian multiple medalist). Aman Sehrawat bronze wrestling 57kg (youngest Indian Olympic medalist at 21).`
  },
  {
    name: 'Indonesia',
    code: 'ID',
    lat: -0.7893,
    lng: 113.9213,
    research: `Badminton Asia Mixed Team Championships 2025: WON for first time, beat China 3-1 (Feb 16, 2025). Sudirman Cup 2025: Seeded 2nd, won Group D, advanced to quarterfinals. Beat India 4-1. Indonesia Open 2025 ongoing. Olympics Paris 2024: 3 medals (2 gold, 1 bronze), 39th place. HISTORIC - Veddriq Leonardo gold speed sport climbing (4.75 seconds, Aug 8). Rizki Juniansyah gold weightlifting 73kg (155kg snatch, 199kg clean/jerk, Olympic record). Both Indonesia's first golds OUTSIDE badminton, first in original Summer Olympic sports. Gregoria Mariska Tunjung bronze badminton women's singles (first Indonesian women's singles medal since 2008). Indonesia failed to win badminton gold for only second time since 1992 (other: 2012). Best result since Barcelona 1992 (2G-1S-1B). World Cup qualifying: Shock losses to China, Bahrain. AFC qualifying ongoing.`
  },
  {
    name: 'Iran',
    code: 'IR',
    lat: 32.4279,
    lng: 53.688,
    research: `World Cup 2026 qualifying: QUALIFIED March 25, 2025 after 2-2 draw vs Uzbekistan (Mehdi Taremi 2 goals). Oct 2024: Beat Qatar 4-1 in Dubai (Azmoun 2, Mohebi 2), topped Group A with 10 points. Seventh World Cup qualification overall. Asian Cup 2023: Lost semi-final to Qatar (hosts). Youth: Japan beat Iran 4-3 penalties in U20 Asian Cup quarterfinal, U17 qualified for 2025 Asian Cup. Olympics Paris 2024: 12 medals (3 gold, 6 silver, 3 bronze), 21st overall. All medals from wrestling/taekwondo. Greco-Roman wrestling: Golds Saeed Esmaeili 67kg, Mohammad-Hadi Saravi 97kg. Silver Alireza Mohmadi 87kg. Bronze Amin Mirzazadeh 130kg. Freestyle wrestling: Silvers Hassan Yazdani 86kg, Amir-Hossein Zare 125kg, Rahman Amouzad 65kg. Bronze Amir-Ali Azarpira 97kg. Taekwondo: Gold Arian Salimi +80kg (first in 16 years). Silvers Mehran Barkhordari 80kg, Nahid Kiani 57kg (first Iranian female taekwondo silver). Bronze Mobina Nematzadeh 49kg. Four-member taekwondo team historic 4 medals.`
  },
  {
    name: 'Iraq',
    code: 'IQ',
    lat: 33.2232,
    lng: 43.6793,
    research: `Gulf Cup: Iraq hosted and won 25th Arabian Gulf Cup, beat Oman 3-2 after extra time in final. World Cup 2026 qualifying: Second Round Group F: 4 wins vs Vietnam, Philippines, Indonesia, advanced. Third Round Group B (vs South Korea, Jordan, Palestine, Oman, Kuwait): Lost 1-2 Palestine (March 27, 2025), coach Jesús Casas dismissed. Graham Arnold appointed (former Australia coach, 2022 WC Round of 16). Finished 3rd, to Fourth Round. Fourth Round: Zidane Iqbal 76' goal beat Indonesia. Drew 0-0 Saudi Arabia in Jeddah, missed direct qualification, enters global play-offs. Olympics Paris 2024: 16th appearance. Men's football U23: Beat Ukraine 2-1, lost to Argentina 1-3, lost to Morocco 0-3. 1W-2L, 3 points, did not advance from Group B (Morocco/Argentina advanced). Qualified via 3rd place at 2024 AFC U-23 Asian Cup.`
  },
  {
    name: 'Ireland',
    code: 'IE',
    lat: 53.4129,
    lng: -8.2439,
    research: `Football Nations League 2024-25: Lost to Greece 0-2 away, 0-2 home, drew with England, finished 3rd in League B Group B2. Rugby Six Nations 2024: Won title second successive year, beat Scotland 17-13 final day. 2025 Six Nations: Beat England 27-22, Scotland 32-18, Wales 27-18, lost to France 27-42, beat Italy 22-17. Autumn Nations 2024: Beat Australia 22-19 (Nov 30). Summer 2025: Beat Georgia 34-5, Portugal 106-7. Olympics Paris 2024: BEST EVER - 10 medals (4 gold, 3 silver, 3 bronze), breaking previous record of 6 (London 2012). Rowing: Golds Paul O'Donovan/Fintan McCarthy lightweight double sculls (defended Tokyo title). Bronze Philip Doyle/Daire Lynch men's pairs (first Irish heavyweight rowing medal). Bronze women's four (Keogh/Lambe/Murtagh/Hegarty). Boxing: Gold Kellie Harrington women's lightweight (defended Tokyo title). Bronze Aidan Walsh welterweight. Swimming: Gold Daniel Wiffen. Bronze Mona McSharry. Gymnastics: Gold Rhys McClenaghan pommel horse. Athletics: Rhasidat Adeleke 4th 400m final (49.28, first Irish woman Olympic sprint final).`
  },
  {
    name: 'Israel',
    code: 'IL',
    lat: 31.0461,
    lng: 34.8516,
    research: `Euro 2024 qualifying: Finished group 4th, playoff eligible. Beat Belarus 2-1, lost to Iceland 1-4 (Guðmundsson hat-trick), did NOT qualify. Home matches moved to Hungary due to security. Nations League 2024-25 League A Group 2 (first time in top tier): Lost to Belgium 1-3, Italy 1-2, France 1-4, Italy 1-4. Drew 0-0 France, beat Belgium 1-0 (final matchday). Finished 4th, relegated to League B. Olympics Paris 2024: BEST EVER - 7 medals (1 gold, 5 silver, 1 bronze). Judo 3 medals: Raz Hershko silver women's +78kg, Inbar Lanir silver 78kg, Peter Paltchik bronze 100kg (9 of Israel's 20 total Olympic medals now in judo). Gymnastics 2 medals: Artem Dolgopyat silver floor exercise (first Israeli consecutive Olympics medals), rhythmic gymnastics team silver all-around (Paritzki/Shaham/Svertsov/Friedmann/Bakanov). Sailing 2 medals. Flag bearers: Peter Paltchik, Andrea Murez (swimmer).`
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
  console.log('⚽ SPORTS CATEGORY SUMMARY GENERATION - COUNTRIES 53-65')
  console.log('='.repeat(80))
  console.log(`Countries: ${COUNTRIES.length}`)
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
