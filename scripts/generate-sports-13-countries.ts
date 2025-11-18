import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Countries with research data
const COUNTRIES = [
  {
    name: 'Afghanistan',
    code: 'AF',
    lat: 33.9391,
    lng: 67.71,
    research: `Cricket dominates Afghanistan's sports landscape. In 2024-25, they won four ODI series on the trot (Ireland, South Africa, Bangladesh, Zimbabwe). At ICC Champions Trophy 2025, they defeated England by 8 runs (325/7, Ibrahim Zadran century, Azmatullah Omarzai 5/58) but lost to Australia. They reached T20 World Cup semi-final in 2024. In Zimbabwe tour (Dec 2024-Jan 2025), scored highest team total: 699 runs, swept T20I series 3-0. Afghanistan Premier League planned for relaunch in 2025 after 2018 inaugural edition. Football: Failed to advance from World Cup 2026 qualifying second round under coach Ashley Westwood (ranked 151st). Drew 0-0 with India, 0-0 with Qatar, lost 0-4 to Kuwait. No Olympic medals at Paris 2024 (six athletes in athletics, cycling, judo, swimming - three women, three men).`
  },
  {
    name: 'Albania',
    code: 'AL',
    lat: 41.1533,
    lng: 20.1683,
    research: `Historic Paris 2024 Olympics: Albania won first-ever Olympic medals - two bronze in freestyle wrestling (Chermen Valiev 74kg, Islam Dudaev 65kg, both Russian-born). 10th Olympic appearance. Football: Euro 2024 "group of death" - lost 2-1 to Italy, drew 2-2 with Croatia, lost 0-1 to Spain. UEFA Nations League B 2024-25: finished 4th in Group B1 (7 points, 2W-1D-3L, 4GF-6GA). Beat Ukraine 2-1 away, lost 1-2 at home to Ukraine, beat Georgia 1-0 away, lost 0-1 to Georgia at home, drew 0-0 with Czechia home, lost 0-2 to Czechia away. World Cup 2026 qualifying starts Nov 2025 vs Andorra and England. Friendlies: lost 0-3 to Chile, 0-1 to Sweden, beat Liechtenstein 3-0, Azerbaijan 3-1.`
  },
  {
    name: 'Algeria',
    code: 'DZ',
    lat: 28.0339,
    lng: 1.6596,
    research: `AFCON 2025: Qualified unbeaten, topped Group E (5W-1D) over Togo, Equatorial Guinea, Liberia. Crushed Liberia 5-1 (Nov 2024: Mandi, Mahrez, Bounedjah, Gouiri, Amoura). Coach Vladimir Petković took over March 2024. 20th AFCON participation, won 1990 (hosts), 2019 (Egypt). Paris 2024 Olympics: HISTORIC - Imane Khelif won gold in women's boxing 66kg (first Algerian/Arab/African woman boxing gold, first Algerian boxing medal since 2000). Defeated Yang Liu 5-0 amid gender controversy. Second gold medal for Algeria at Paris. Total 2 medals.`
  },
  {
    name: 'Angola',
    code: 'AO',
    lat: -11.2027,
    lng: 17.8739,
    research: `Basketball: AfroBasket Qualifiers - beat Kenya 88-59 (Feb 2025, Childe Dundao 25 pts, 4 reb, 7 stl). Competing in African World Cup Qualifiers. Football: Coach Pedro Gonçalves, avg age 26.6. Friendlies scheduled vs Argentina and Guinea-Bissau (Nov 14, 18, 2025). Recent match vs Cameroon (Oct 13, 2025). Basketball has strong tradition as historically competitive in African basketball.`
  },
  {
    name: 'Argentina',
    code: 'AR',
    lat: -38.4161,
    lng: -63.6167,
    research: `World Cup 2026: FIRST South American team qualified after Brazil lost. Secured qualification March 2025 after Bolivia failed to beat Uruguay, then crushed Brazil 4-1. Messi scored hat-trick + 2 assists vs Bolivia (6-0, Oct 2024), leads qualifying with 6 goals. Missed March 2025 qualifiers (adductor injury), available for Chile/Colombia (June). Says will play 2026 WC if "physically well". Paris 2024 Olympics: Men's football eliminated in quarterfinals 0-1 to France (no medal). Squad had 4 Qatar 2022 winners (Rulli, Otamendi, Álvarez, Almada). Has 2 Olympic golds (Athens 2004, Beijing 2008).`
  },
  {
    name: 'Armenia',
    code: 'AM',
    lat: 40.0691,
    lng: 45.0382,
    research: `Paris 2024 Olympics: 15 athletes, 7 sports. Total 4 medals (3 silver, 1 bronze). Wrestling powerhouse: Artur Aleksanyan silver 97kg Greco-Roman (Olympic champion 2016, silver 2021/2024, bronze 2012, 4x World Champion, 7x European Champion). Team included Malkhas Amoyan, Slavik Galstyan (Greco-Roman), Arsen Harutyunyan, Vazgen Tevanyan (freestyle). Also competed in artistic gymnastics, boxing, swimming, shooting, weightlifting, athletics. Football: Nations League matches vs Faroe Islands (Nov 2024), limited recent results available.`
  },
  {
    name: 'Australia',
    code: 'AU',
    lat: -25.2744,
    lng: 133.7751,
    research: `Paris 2024 Olympics: BEST EVER - 53 medals (18 gold, 19 silver, 16 bronze). Swimming: 41 athletes, 18 medals (7G-10S-3B). Kaylee McKeown first woman to defend 100m/200m backstroke, first Aussie 4 individual golds. Ariarne Titmus defended titles. Mollie O'Callaghan 200m free gold. 4x100m/4x200m relay golds. Cam McEvoy 50m free gold. Athletics: Nina Kennedy first Aussie woman pole vault gold. Bronze in mixed marathon race walk. Swimming: 239 total Olympic medals (77 gold). Matildas (women's football): Coach changes - Gustavsson out after Olympics, Sermanni interim, Joe Montemurro appointed June 2025. Beat Germany 1-2 (first since 2005), lost to Brazil twice. Home record 76,798 vs China (June 2024). New First Nations kit design by Reko Rennie.`
  },
  {
    name: 'Austria',
    code: 'AT',
    lat: 47.5162,
    lng: 14.5501,
    research: `Football Euro 2024: HISTORIC - topped Group D over France and Netherlands! Eliminated Round of 16 by Turkey 2-1. Coach Ralf Rangnick. Winter Sports 2024-25: ÖSV national squad 373 athletes (11 divisions, 235 men, 138 women) across cross-country, biathlon, alpine, ski jump, Nordic combined, snowboard, ski cross, freeski, ski mountaineering, para ski, grass ski. Major ski jumping nation preparing for World Cup season.`
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    lat: 40.1431,
    lng: 47.5769,
    research: `Paris 2024 Olympics: 48 athletes, 15 sports, 7 medals (2G-2S-3B), 30th overall. GOLD: Judokas Hidayat Heydarov 73kg, Zelym Kotsoiev 100kg. SILVER: Taekwondo Gashim Magomedov 58kg, Boxer Alfonso Dominguez 92kg. BRONZE: Greco-Roman wrestler Hasrat Jafarov 67kg, Freestyle wrestlers Magomedkhan Magomedov 97kg, Georgiy Meshvildishvili 125kg. Full 6-man freestyle wrestling team qualified for Paris.`
  },
  {
    name: 'Bahamas',
    code: 'BS',
    lat: 25.0343,
    lng: -77.3963,
    research: `Paris 2024 Olympics: 20 athletes (ALL track and field). First time since 1988 NO MEDALS. Best: Devynne Charlton 6th women's 100m hurdles (world indoor record holder). Three hurdlers: Charlton, Denisha Cartwright, Charisma Taylor. Steven Gardiner and Shaunae Miller-Uibo (both Olympic champions) competed. 18th Olympic appearance (every Summer Games since 1952 except 1980 boycott). Hosted World Athletics Relays Nassau (May 4-5, 2024) for Olympic qualifying.`
  },
  {
    name: 'Bahrain',
    code: 'BH',
    lat: 26.0667,
    lng: 50.5577,
    research: `Paris 2024 Olympics: 14 athletes (8 women, 6 men) in athletics, judo, swimming, weightlifting, wrestling. 4 medals (2 gold, 1 silver, 1 bronze) - DOUBLED nation's total to 8. Gold in athletics and freestyle wrestling. Silver in athletics. Bronze in weightlifting. Football: Won 26th Arabian Gulf Cup (Jan 4, 2025), beat Oman 2-1 (second Gulf Cup title after 2019). World Cup 2026 qualifying struggles: shock losses to China and Indonesia, failed to score in 4 consecutive fixtures (June 2025).`
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    lat: 23.685,
    lng: 90.3563,
    research: `Cricket: HISTORIC 2024 - first Test wins in West Indies since 2009. Won THREE Tests away in calendar year (2 in Pakistan, 1 in West Indies). West Indies tour (Nov-Dec 2024): 2 Tests, 3 ODIs, 3 T20Is. Earned 12 WTC points vs Pakistan (Pakistan 0). ICC Rankings (May 2025): 9th Tests, 9th ODIs, 10th T20Is. West Indies T20I series Oct 2025: lost 3rd T20I by 5 wickets at Chattogram. Hong Kong Cricket Sixes (Nov 2025): beat Sri Lanka by 14 runs.`
  },
  {
    name: 'Barbados',
    code: 'BB',
    lat: 13.1939,
    lng: -59.5432,
    research: `Paris 2024 Olympics: SMALLEST team since 2000 - 4 athletes (2 women, 2 men). Athletics: Sada Williams 400m, Tristan Evelyn 100m. Swimming: Jack Kirby 100m free. Triathlon: Matthew Wright. National Championships June 21-23, 2024 at Usain Bolt Sports Complex. Cricket: Kyle Mayers captain of Barbados Pride Regional Super 50 squad. Barbados Cricket Association 2025 playing conditions for club/national competitions. BOA sustainability strategy 2025-2030.`
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
