import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const moroccoSummary = `Here's the thing about Moroccan football right now—they're on an absolute tear. Sixteen straight wins across all competitions since June 2024, including a 1-0 victory over Congo in Rabat that kept the streak alive through October 2025. They're ranked 12th in the world, first in Africa since December 2022, and they're hosting AFCON 2025 from December 21, 2025 to January 18, 2026. Six cities, nine venues, and the entire continent watching. After that historic 2022 World Cup semi-final run—first African and Arab team to ever reach that stage—Moroccan football is operating on a different level. They've won three African Nations Championships (2018, 2020, 2024) and the 1976 AFCON, and this 16-game winning streak has everyone believing they can win AFCON on home soil.

Domestically, RS Berkane just won their first-ever Botola Pro title in 2024-25, breaking the traditional Wydad/Raja stranglehold on Moroccan football. Raja were defending champions from 2023-24, but Berkane shocked everyone. Wydad finished third on 54 points, missing the Champions League spot that went to AS FAR. Both Wydad and Raja will play in the CAF Confederation Cup next season, which is basically the Europa League of African football. The Casablanca giants still have the history and the fan bases, but Berkane's title shows the league's getting more competitive. That's healthy for Moroccan football long-term, even if it hurts the big clubs' pride.

Paris 2024 Olympics? Soufiane El Bakkali is a legend. He won gold in the men's 3,000m steeplechase on August 7th, becoming the first man to win back-to-back Olympic golds in that event since 1932. That's Tokyo 2020 and Paris 2024, and he's only 28 years old. Morocco qualified 13 athletes in athletics (8 men, 5 women), but El Bakkali was the star. The overall Paris campaign was a bit disappointing beyond him—Morocco expected more medals given their recent success in other sports. But one gold is better than none, and El Bakkali's dominance in the steeplechase is generational stuff.

The national team's unbeaten streak is built on solid tactics, excellent organization, and a generation of players who know how to win. Coach Walid Regragui has them playing aggressive, disciplined football, and the confidence from the 2022 World Cup run hasn't faded. The AFCON 2025 qualifying was a formality since they're hosting, but they played in Group B anyway and dominated. Now the pressure's on: hosting AFCON with this kind of momentum means anything less than a title will feel like failure. The draw happened on January 27, 2025, at the Mohammed V National Theatre in Rabat, and the tournament structure is set. Morocco's got the talent, the home crowd, and the form. Time to deliver.

Bottom line: Moroccan football is in its golden age. Sixteen straight wins, AFCON 2025 at home, world-class players like El Bakkali showing out on the Olympic stage, and domestic football getting more competitive. RS Berkane's title proves the league isn't just a two-horse race anymore. If Morocco wins AFCON in January 2026, this era will be remembered as one of the greatest in African football history. The expectations are sky-high, and right now, they're meeting every single one.`

const moroccoIssues = [
  "16-game winning streak, ranked 1st in Africa heading into AFCON 2025 hosting",
  "RS Berkane wins first Botola Pro title, breaking Wydad/Raja dominance",
  "Soufiane El Bakkali wins back-to-back Olympic steeplechase golds",
  "Hosting AFCON 2025 with massive expectations after 2022 World Cup semi-final"
]

const montenegroSummary = `Let's talk about Montenegro football, because it's been a rollercoaster of near-misses and frustration. They're in the middle of 2026 World Cup qualifying in UEFA Group L with Croatia, Czech Republic, Faroe Islands, and Gibraltar—tough draw, with Croatia being the heavyweight. They've got matches against Gibraltar and Croatia coming up on November 14 and 17, 2025, and those results will define their campaign. The problem is Montenegro always seems to be the team that almost qualifies but never quite gets there. They're stuck in that mid-tier European category where they can beat the minnows and occasionally scare the big boys, but they can't string together the results needed to reach a major tournament.

The 2024-25 UEFA Nations League didn't help their confidence. Montenegro played in League B, Group 4 alongside Wales, Iceland, and Turkey—competitive group, but one they should've done better in. The details are murky on their exact results, but the fact they're not getting promoted to League A tells you everything. They've got talent, they've got a decent youth system, but the final product on the pitch just doesn't deliver when it matters. The Montenegrin Football Association needs to figure out if this is a coaching issue, a player development issue, or just bad luck. Because at some point, "almost" isn't good enough.

Domestically, the Montenegrin First League is a small operation—10-12 teams playing each other multiple times throughout the season. FK Budućnost Podgorica usually dominates, with FK Sutjeska Nikšić and FK Partizan as the main challengers. The league doesn't have the resources or infrastructure of bigger European leagues, and most talented Montenegrin players leave for better opportunities abroad as soon as they can. That's the reality for small Balkan nations—your domestic league is basically a feeder system for Western Europe. The quality varies wildly, attendance is low, and financial issues are constant. But it keeps the game alive locally, and every once in a while, a gem emerges and makes it to a top-five league.

The national team's recent match against Liechtenstein on October 13, 2025, was... well, it's Liechtenstein. Montenegro should dominate that match, and if they didn't, that's a massive red flag. The upcoming World Cup qualifiers against Gibraltar (winnable) and Croatia (extremely difficult) will test whether this generation of players can finally break through. Croatia's packed with talent and experience—think Modrić, even in his late 30s, plus younger stars. Montenegro will need a perfect performance to get anything from that match, and realistically, they're fighting for second place in the group to reach the play-offs.

Bottom line: Montenegro football is stuck in limbo. They're too good for the bottom tier of European football but not good enough to consistently compete with the big nations. The Nations League campaign was underwhelming, World Cup qualifying is an uphill battle, and the domestic league is what it is—small, limited, but functional. They need a breakthrough moment, whether that's a shocking result against Croatia or a deep play-off run. Until then, Montenegro remains the perennial underdog that never quite makes it.`

const montenegroIssues = [
  "World Cup 2026 qualifying in tough Group L with Croatia",
  "Nations League League B campaign ends without promotion",
  "Domestic league dominated by Budućnost, limited resources",
  "Perpetual near-misses in major tournament qualification"
]

const moldovaSummary = `Here's the surprising story: Moldova just got promoted from UEFA Nations League D to League C, and honestly, that's a bigger deal than it sounds. They topped Group D2 with 9 points from 4 matches—3 wins, 1 loss—beating Malta 2-0 on September 7, crushing Andorra 2-0 on October 10, then bouncing back from a 1-0 loss to Malta on October 13 to beat Andorra again 1-0 on November 16. Best attack in League D with 5 goals in 4 games, best defense with only 1 goal conceded. For a nation that's usually the whipping boy of European football, that's massive progress. Getting promoted to League C means tougher competition, but it also means more UEFA prize money, better rankings, and a psychological boost.

The Moldovan National Division domestically is... well, it's Moldova. Sheriff Tiraspol dominates everything—they've won the league 21 times since 2000, and they're backed by resources that dwarf the rest of the country. They even made it to the Champions League group stage a few years ago, which was insane. The rest of the league—teams like Petrocub, Milsami, Zimbru Chișinău—they're fighting for second place and hoping to snag a Europa Conference League spot. Attendance is low, funding is minimal, and most matches are played in front of a few hundred die-hard fans. But the league exists, it functions, and it gives young Moldovan players a platform before they (hopefully) move abroad.

The national team's momentum from Nations League promotion needs to carry into the next qualifying cycle. Historically, Moldova's been cannon fodder in World Cup and Euro qualifiers—they lose to everyone except the other minnows, and even then it's not guaranteed. But this Nations League run showed they can be organized, disciplined, and effective against teams at their level. The key players are mostly playing in Eastern European leagues (Romania, Ukraine, Belarus), with a few scattered around lower-tier Western European leagues. They're not world-beaters, but they're professional, and that matters when you're trying to build a cohesive national team strategy.

The 2026 World Cup qualifying hasn't started yet for Moldova, but when it does, they'll likely be in a group with at least two or three much stronger teams. The goal has to be avoiding embarrassment and picking up points where possible. With Nations League promotion under their belt, there's at least some confidence. Maybe they can steal a draw or two, maybe they shock someone. The bar is low, but that's the reality for Moldovan football—progress is measured in small victories, not trophies.

Bottom line: Moldova's Nations League promotion is the best thing to happen to their football in years. They dominated League D, and now they get to test themselves in League C. Sheriff Tiraspol keeps winning domestically because no one else can compete with their resources. The national team's still a long way from being competitive in major tournaments, but at least there's momentum. For Moldova, that's a win.`

const moldovaIssues = [
  "Promoted to Nations League C after dominating League D",
  "Sheriff Tiraspol's domestic dominance continues with vast resource advantage",
  "National team building confidence after successful Nations League campaign",
  "Faces uphill battle in future World Cup and Euro qualifiers"
]

async function main() {
  console.log('Inserting Morocco, Montenegro, and Moldova sports summaries...')

  // Morocco
  console.log(`\nMorocco summary length: ${moroccoSummary.length} characters`)
  await prisma.locationSummary.create({
    data: {
      id: 'MA-sports',
      name: 'Morocco',
      type: 'country',
      country: 'MA',
      category: 'sports',
      lat: 31.7917,
      lng: -7.0926,
      summary: moroccoSummary,
      issues: JSON.stringify(moroccoIssues),
      topStories: '[]',
      storyCount: 0,
    },
  })
  console.log('✅ Morocco sports summary inserted')

  // Montenegro
  console.log(`\nMontenegro summary length: ${montenegroSummary.length} characters`)
  await prisma.locationSummary.create({
    data: {
      id: 'ME-sports',
      name: 'Montenegro',
      type: 'country',
      country: 'ME',
      category: 'sports',
      lat: 42.7087,
      lng: 19.3744,
      summary: montenegroSummary,
      issues: JSON.stringify(montenegroIssues),
      topStories: '[]',
      storyCount: 0,
    },
  })
  console.log('✅ Montenegro sports summary inserted')

  // Moldova
  console.log(`\nMoldova summary length: ${moldovaSummary.length} characters`)
  await prisma.locationSummary.create({
    data: {
      id: 'MD-sports',
      name: 'Moldova',
      type: 'country',
      country: 'MD',
      category: 'sports',
      lat: 47.4116,
      lng: 28.3699,
      summary: moldovaSummary,
      issues: JSON.stringify(moldovaIssues),
      topStories: '[]',
      storyCount: 0,
    },
  })
  console.log('✅ Moldova sports summary inserted')

  console.log('\n=== SUMMARY ===')
  console.log(`Morocco: ${moroccoSummary.length} chars, ${moroccoIssues.length} issues`)
  console.log(`Montenegro: ${montenegroSummary.length} chars, ${montenegroIssues.length} issues`)
  console.log(`Moldova: ${moldovaSummary.length} chars, ${moldovaIssues.length} issues`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
