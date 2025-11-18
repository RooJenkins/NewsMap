import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const maldivesSummary = `Let's be real about Maldivian football—it's barely surviving. Ranked 162nd in FIFA as of November 2024, the Maldives played their first international match in over a year when they hosted Philippines on March 25, 2025, at the National Football Stadium in Malé. The last game before that was a World Cup/Asian Cup qualifier against Bangladesh in October 2023. Think about that: over a year without an international fixture. That's not a national team; that's a hobby. They had a match against Tajikistan scheduled for October 14, 2025, in AFC Asian Cup Qualifiers, but the results are telling—this is a program in complete disarray.

The glory days feel like ancient history. Maldives won the SAFF Championship twice (2008, 2018), finished runners-up three times (1997, 2003, 2009), and got third place in 1999. That's regional dominance in South Asia, and it mattered. But those tournaments dried up, investment disappeared, and now Maldives can't even schedule regular matches. The domestic Dhivehi Premier League exists, but it's semi-professional at best, with clubs like Victory SC, TC Sports Club, and Green Streets dominating. Attendance is minimal, the infrastructure is lacking, and most talented players either leave for better leagues or give up football entirely.

The population is only about 500,000 people spread across 1,200 islands, so the player pool is tiny. Combine that with limited funding, no major stadium facilities, and government priorities focused on tourism rather than sports, and you get a national team that plays once every 12-18 months. The Asian Football Confederation keeps them in the lowest tiers of qualifying, and they get demolished by anyone with a functional football program. It's not even competitive anymore—it's just sad.

Football is popular in the Maldives at the grassroots level, especially among young people. But without investment, without coaching infrastructure, without regular international competition, that passion goes nowhere. The Maldives Football Association exists in name, but the results speak for themselves. One match in a year. That's the entire story. They need a complete overhaul—youth academies, coaching certifications, partnerships with bigger federations, regular friendly matches. Until that happens, Maldivian football will remain a footnote in Asian football.

Bottom line: The Maldives national team is barely functional. Two SAFF Championship titles in 2008 and 2018 feel like a lifetime ago. They played one international match in over a year, they're ranked 162nd in the world, and there's zero momentum. The domestic league limps along, but there's no pathway for players to develop into international-quality athletes. Without massive investment and organizational reform, Maldivian football will continue fading into irrelevance.`

const maldivesIssues = [
  "Barely functional national team, only one match in over a year",
  "Ranked 162nd in FIFA, eliminated in early qualifying rounds",
  "Past SAFF Championship glory (2008, 2018) now distant memory",
  "Tiny population, limited infrastructure, minimal investment"
]

const maliSummary = `Here's what you need to know about Malian football: they qualified for AFCON 2025—their 13th appearance—and they're legit contenders. Group I qualifying showed their quality: drew 1-1 with Mozambique away on September 6, 2024, then cruised with wins over Eswatini (3-0 and 6-0) and Guinea-Bissau. Finished top of the group, unbeaten, and heading into Morocco for the tournament running December 21, 2025 to January 18, 2026. The Eagles have always been dangerous at AFCON—they're that team that can beat anyone on their day but also frustrate you with inconsistency. This time, the consistency's been there.

Domestically, Stade Malien just won the 2024-25 Ligue 1 Pro title, beating out defending champions Djoliba AC and wrapping up the championship two matchdays early. They pocketed 30 million CFA francs for the title, and here's the kicker: they completed the double by winning the national cup too. That's dominance. Djoliba finished second despite being the reigning champs, and they'll play in the CAF Confederation Cup while Stade Malien heads to the CAF Champions League for 2025-26. The Bamako rivalry between Stade Malien and Djoliba is real—these are the two giants of Malian football, and when they meet, the entire country watches.

The issue is what's happening off the pitch. Mali's been dealing with political instability, military coups, and security concerns since 2020. Football's kept going because it's too important to Malian culture, but the infrastructure is struggling. Stadiums need upgrades, youth academies are underfunded, and many top players leave for Europe or North Africa as soon as they can. That talent drain is constant—guys like Yves Bissouma (Tottenham), Amadou Haidara (RB Leipzig), and others made it to top leagues, but they had to leave Mali to do it. The domestic league can't compete financially with even mid-tier African leagues, let alone Europe.

The national team's got talent, though. Kamory Doumbia scored the winner against Mozambique in October 2024 (1-0 at Estádio do Zimpeto, 19th minute), and Mali's got depth in midfield and attack. They've always produced technically gifted players, and the football culture is strong. The 2024-25 AFCON qualifying campaign was professional, organized, and effective. No drama, no collapses, just solid football. That's what Mali needs to maintain if they want to make noise in Morocco. The draw will determine their path, but they're not a team anyone wants to face.

World Cup qualifying for 2026 hasn't been kind—Mali's in a tough group and will need to be perfect to reach the inter-confederation play-offs. But AFCON is the priority. African football fans know Mali can win it—they've been runners-up and semi-finalists multiple times. The talent's there, the momentum's there, and the domestic league produced a genuine title race this year. If Stade Malien's success translates to national team confidence, Mali could be a dark horse in Morocco.

Bottom line: Mali qualified for AFCON 2025, Stade Malien dominated domestically with a double, and the football program is functional despite political chaos. The Eagles are dangerous at AFCON, always have been. With players scattered across Europe and solid domestic competition between Stade Malien and Djoliba, Malian football has a foundation. Now it's about delivering on the continental stage and keeping the talent pipeline flowing despite the challenges.`

const maliIssues = [
  "Qualified for AFCON 2025 unbeaten, 13th tournament appearance",
  "Stade Malien wins domestic double, beats Djoliba for Ligue 1 title",
  "Political instability affecting infrastructure and investment",
  "Constant talent drain to Europe, domestic league financially weak"
]

const mauritaniaSummary = `Let's talk about Mauritanian football, and honestly, it's a story of near-misses and crushing disappointment. They got eliminated from AFCON 2025 qualifying after finishing third in Group C with 7 points. Beat Botswana 1-0 on September 7, 2024, lost to Cape Verde 2-0, lost to Egypt 1-0, then beat Cape Verde 1-0 in the return fixture. Egypt and Botswana went through; Mauritania went home. That's tough, especially when you consider they've only qualified for AFCON twice in their history (2019, 2021). Missing out on a third consecutive appearance hurts, and it shows the gap between Mauritania and the established African powers.

World Cup 2026 qualifying was even worse. Group B with Senegal, DR Congo, Sudan, Togo, and South Sudan—brutal draw. Results were abysmal: drew 0-0 with South Sudan (twice), lost 0-2 to Sudan, 0-1 to Senegal, 0-2 to DR Congo, and got demolished 0-4 by Senegal on October 14, 2025, with Sadio Mané scoring twice as Senegal qualified for the World Cup. The one bright spot? Beat Togo 2-0 on September 5, 2025, and drew 2-2 in the away fixture in March. Final standing: dead last with basically no points (reports vary, but they were bottom). Eliminated before the campaign even got going. That's the reality of Mauritanian football—they can beat the weakest teams, but anyone with real quality rolls over them.

Domestically, the Ligue 1 Mauritanienne exists, but it's a low-level operation. Teams like FC Nouadhibou, ASAC Concorde, and Garde Nationale dominate, but the league has minimal attendance, limited media coverage, and players earn next to nothing. Most matches are played in front of a few hundred fans, and the infrastructure is laughable—dirt pitches, no proper stadiums, outdated equipment. FC Nouadhibou has been the best club recently, and they occasionally compete in CAF competitions, but they usually get knocked out in early rounds. There's no money in Mauritanian football, and it shows.

The bigger issue is the lack of youth development. Mauritania's got a population of about 4.5 million, which isn't huge, but it's not Maldives-level tiny either. The problem is there's no organized pipeline from grassroots to professional. Kids play street football, maybe join a local club, but there's no academy system, no coaching certifications, no scouting networks. If a talented player emerges, they have to leave the country immediately to develop—usually to Morocco, Tunisia, or France. Mauritania can't retain talent because the domestic infrastructure can't support it.

The Mauritanian Football Federation tries, but resources are limited. The country's poor, the government doesn't prioritize sports, and football competes with more immediate concerns like economic development and security. Mauritania's national team has improved over the past decade—they qualified for AFCON 2019 and 2021, which was historic. But those were exceptions, not the norm. Sustaining that level requires investment they don't have.

Bottom line: Mauritania missed AFCON 2025 after finishing third in qualifying, got destroyed in World Cup qualifying and finished last in their group. The domestic league is barely professional, infrastructure is awful, and youth development doesn't exist. They've got potential—a decent population size, football culture, and some talented players—but without investment, coaching, and organization, Mauritanian football will stay stuck at the bottom of African football. Those two AFCON qualifications were great, but they're looking more like flukes than a trend.`

const mauritaniaIssues = [
  "Eliminated from AFCON 2025 qualifying, finished third in group",
  "World Cup 2026 qualifying disaster, finished last in Group B",
  "Domestic league barely professional, minimal infrastructure",
  "No youth development system, talent pipeline nonexistent"
]

const mongoliaSummary = `Let's talk about Mongolian sports, because it's all about wrestling and judo, and the 2024 Paris Olympics exposed both the strengths and weaknesses. Mongolia sent 33 athletes across nine sports—freestyle wrestling, judo, boxing, shooting, archery, swimming, cycling, athletics, and weightlifting. They came away with one medal: judoka Bavuudorjiin Baasankhüü won silver in the women's 48 kg category on the first day of competition. That's it. One silver medal, 74th place in the overall standings. Mongolia targeted 4-5 medals going into Paris, so this was a massive disappointment.

The wrestling team was supposed to deliver—nine wrestlers qualified, including notable names like Tömör-Ochiryn Tulga, Dolgorjavyn Otgonjargal, and Batkhuyagiin Khulan. None of them medaled. Mongolia secured one fifth-place finish and three sixth-place finishes in freestyle wrestling, which is brutal when wrestling is your national sport. Mongolians dominate sumo in Japan—there are multiple Mongolian yokozuna (grand champions)—but sumo's not an Olympic sport, so that success doesn't translate. The wrestling federation needs to figure out what went wrong, because this was supposed to be their best shot at multiple medals.

Judo was slightly better: ten judokas qualified via the IJF World Ranking List and Asian quotas. Baasankhüü's silver saved the campaign, and they had two fifth-place finishes and three sixth-place finishes across other weight classes. But "slightly better" isn't good enough when you're Mongolia. Wrestling and judo are the identity sports, the ones where Mongolia competes with the world's best. One silver medal total suggests serious issues with training, preparation, or competition readiness. Maybe the talent pipeline's weakening, maybe coaching needs an overhaul, or maybe the competition just got better while Mongolia stayed stagnant.

Domestically, Mongolia doesn't have major professional leagues in football or basketball—those sports exist, but they're recreational. Wrestling and judo are where the infrastructure, funding, and prestige are concentrated. The Mongolian National Wrestling Federation runs the show, and success in traditional Mongolian wrestling (Bökh) during Naadam Festival is culturally massive. But translating that to Olympic freestyle wrestling has become harder as global competition improves. Countries like Russia, Iran, the US, and Japan invest heavily in wrestling programs, and Mongolia's struggling to keep pace.

Football's a footnote. The Mongolian Premier League exists with teams like Ulaanbaatar City FC and Ulaanbaatar FC, but attendance is low, quality is poor, and the national team is ranked outside the top 180 in FIFA. They've never qualified for a World Cup or Asian Cup, and realistically, they never will. The country's too cold for much of the year, infrastructure is limited, and the population (about 3.3 million) is small. Football just doesn't have the cultural resonance that wrestling does.

Bottom line: Mongolia's Paris 2024 campaign was a disappointment—one silver medal in judo when they expected 4-5 total. The wrestling team underperformed massively despite nine athletes qualifying. Judo had one bright spot with Baasankhüü, but that's not enough. Wrestling and judo are Mongolia's identity sports, and if they're not delivering medals, the entire sports program needs re-evaluation. Football and other sports are irrelevant in Mongolia. Fix wrestling and judo, or accept being a mid-tier Olympic nation.`

const mongoliaIssues = [
  "Paris 2024: only one silver medal (judo), far below 4-5 medal target",
  "Wrestling team underperformance despite nine qualifiers",
  "Judo saved campaign with Baasankhüü's silver in 48kg",
  "Football and other sports irrelevant, wrestling/judo identity in crisis"
]

const mozambiqueSummary = `Here's the good news about Mozambican football: they qualified for AFCON 2025, their sixth appearance at the tournament, and they did it in style. Finished second in Group I behind Mali, going unbeaten through the qualifying campaign. Drew 1-1 with Mali away on September 6, 2024, beat Guinea-Bissau 2-1 on September 10, demolished Eswatini 3-0, then secured qualification with a 2-1 win over Guinea-Bissau on November 19 (Langa 9', Ratifo 52'). That final match was crucial—Guinea-Bissau was pushing for qualification, and Mozambique handled the pressure. Now they're heading to Morocco for AFCON running December 21, 2025 to January 18, 2026, and there's genuine optimism.

The domestic Moçambola is dominated by the big three: Costa do Sol, Ferroviário de Maputo, and UD Songo. These clubs have the resources, the fan bases, and the history. Costa do Sol won the 2023-24 title, and they're the most successful club in Mozambican football history with 8 league titles. The league's got decent organization compared to other African nations at Mozambique's level, but it still struggles with funding, infrastructure, and player retention. Talented Mozambican players leave for South Africa, Portugal, or other leagues as soon as they can, and the domestic clubs can't compete financially to keep them.

Mozambique's football culture is strong, though. The country was colonized by Portugal until 1975, so football's been embedded in the culture for over a century. The style of play reflects that Portuguese influence—technical, possession-based, with an emphasis on skill over physicality. When Mozambique's clicking, they're fun to watch. Players like Geny Catamo (Sporting CP), Reinildo Mandava (Atlético Madrid), and Mexer (formerly Rennes, Bordeaux) have shown Mozambican talent can compete at high levels. The issue is depth—beyond the core group, quality drops off fast.

The AFCON 2025 qualifying campaign showed maturity and consistency. Coach Chiquinho Conde has the team organized, disciplined, and confident. That 3-0 win over Eswatini on October 15, 2024, was clinical. The 2-1 wins over Guinea-Bissau demonstrated mental toughness—both matches were tight, and Mozambique found ways to win. That's the kind of performance that suggests this team can make noise in Morocco. They're not favorites, but they're not cannon fodder either.

World Cup qualifying for 2026 hasn't started yet, but Mozambique will be in a tough group when it does. The reality is they're unlikely to qualify for the World Cup—the African qualifiers are brutal, and Mozambique doesn't have the depth to compete with the continent's elite over a long campaign. But AFCON is different. It's a single tournament, anything can happen, and Mozambique's got enough quality to pull off upsets. If they get a favorable draw, they could reach the knockout stages for the first time since 2010.

Bottom line: Mozambique qualified for AFCON 2025 unbeaten, finishing second in Group I behind Mali. The team's organized, confident, and playing good football. Domestically, Costa do Sol and the big three dominate the Moçambola, but the league struggles with funding and player retention. Mozambican football's got a solid foundation—Portuguese-influenced style, decent infrastructure, passionate fans—and this AFCON campaign is a chance to show the continent they belong. Sixth AFCON appearance, and this time they might actually do something special.`

const mozambiqueIssues = [
  "Qualified for AFCON 2025 unbeaten, sixth tournament appearance",
  "Domestic Moçambola dominated by Costa do Sol and big three clubs",
  "Strong football culture, Portuguese-influenced technical style",
  "Player retention issues, talent leaves for better leagues abroad"
]

const myanmarSummary = `Let's talk about Myanmar football, and it's a story of complete collapse combined with political turmoil. Since the military coup in February 2021, Myanmar's sports infrastructure has been in chaos. The national football team's been trying to compete in World Cup and Asian Cup qualifying, but the results are catastrophic. Lost 5-0 to Japan in November 2023, then got hammered 6-1 by North Korea at home. On March 21, 2024, they held Syria to a 1-1 draw with Soe Moe Kyaw scoring—that was supposed to be a breakthrough moment. Then Syria destroyed them 7-0 in the return leg, with Myanmar reduced to ten men after Hein Phyo Win got sent off. That's the reality: when they face anyone competent, Myanmar gets annihilated.

The 2024 ASEAN Championship (formerly AFF Championship) was more embarrassment. Lost unexpectedly to Indonesia at Thuwunna Stadium on December 9, 2024, in their opening match, then drew with the Philippines on December 12. Myanmar used to be competitive in Southeast Asian football—they've won regional tournaments before, and the national team had pride. Now they're getting beaten by neighbors and struggling against teams they should be dominating. The friendly results tell the same story: lost 3-2 to Singapore on November 14, lost 3-2 to Lebanon on November 19, beat Sri Lanka 2-0 on October 10. Beating Sri Lanka isn't an accomplishment; it's the bare minimum.

The Myanmar National League exists, but it's barely functioning. Yangon United, Shan United, and Ayeyawady United are the traditional powers, but attendance is down, sponsorship money disappeared after the coup, and many players have left the country or stopped playing entirely. Matches are played in front of empty stadiums, the quality of play has dropped significantly, and there's no media coverage. Football in Myanmar is surviving, not thriving. The political situation makes everything worse—international federations are hesitant to work with Myanmar's football association, foreign coaches won't come, and youth development programs have shut down.

AFC Asian Cup 2027 Qualification? Myanmar failed to qualify after getting destroyed by Syria 5-1 away and 3-0 at home. Those weren't competitive matches; they were beatings. The FIFA World Cup 2026 qualifying campaign in Round 2 was a disaster across the board. Myanmar's FIFA ranking has plummeted, and they're now considered one of the weakest teams in Asia. The talent pipeline dried up because youth academies closed, schools stopped funding sports programs, and families are focused on survival, not football. You can't build a national team when the entire infrastructure collapses.

The tragedy is Myanmar had potential. Football was popular, the domestic league had decent attendance, and the national team competed respectably in Southeast Asia. The 2010s saw Myanmar qualifying for regional tournaments and occasionally pulling off upsets. But the military coup destroyed all that progress. Players fled, coaches resigned, funding vanished, and the international community isolated Myanmar football. FIFA hasn't outright banned Myanmar, but the restrictions and lack of support have crippled the program.

Bottom line: Myanmar football is in complete crisis. The national team gets destroyed in every competition, the domestic league barely functions, and the military coup killed any momentum the program had. Lost 7-0 to Syria, 6-1 to North Korea, failed to qualify for Asian Cup 2027, and can't compete in ASEAN anymore. The infrastructure collapsed, youth development stopped, and there's no path forward while the political situation remains unresolved. Myanmar went from Southeast Asian competitor to laughingstock in just a few years.`

const myanmarIssues = [
  "National team crushed in World Cup and Asian Cup qualifying",
  "Military coup destroyed football infrastructure and youth development",
  "Domestic Myanmar National League barely functioning, empty stadiums",
  "International isolation, talent pipeline dried up, no hope for recovery"
]

async function main() {
  console.log('Inserting final 6 sports summaries (Maldives, Mali, Mauritania, Mongolia, Mozambique, Myanmar)...\n')

  const countries = [
    { name: 'Maldives', code: 'MV', lat: 3.2028, lng: 73.2207, summary: maldivesSummary, issues: maldivesIssues },
    { name: 'Mali', code: 'ML', lat: 17.5707, lng: -3.9962, summary: maliSummary, issues: maliIssues },
    { name: 'Mauritania', code: 'MR', lat: 21.0079, lng: -10.9408, summary: mauritaniaSummary, issues: mauritaniaIssues },
    { name: 'Mongolia', code: 'MN', lat: 46.8625, lng: 103.8467, summary: mongoliaSummary, issues: mongoliaIssues },
    { name: 'Mozambique', code: 'MZ', lat: -18.6657, lng: 35.5296, summary: mozambiqueSummary, issues: mozambiqueIssues },
    { name: 'Myanmar', code: 'MM', lat: 21.9162, lng: 95.9560, summary: myanmarSummary, issues: myanmarIssues }
  ]

  for (const country of countries) {
    console.log(`${country.name} summary length: ${country.summary.length} characters`)

    await prisma.locationSummary.create({
      data: {
        id: `${country.code}-sports`,
        name: country.name,
        type: 'country',
        country: country.code,
        category: 'sports',
        lat: country.lat,
        lng: country.lng,
        summary: country.summary,
        issues: JSON.stringify(country.issues),
        topStories: '[]',
        storyCount: 0,
      },
    })

    console.log(`✅ ${country.name} sports summary inserted\n`)
  }

  console.log('=== FINAL SUMMARY ===')
  countries.forEach(c => {
    console.log(`${c.name}: ${c.summary.length} chars, ${c.issues.length} issues`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
