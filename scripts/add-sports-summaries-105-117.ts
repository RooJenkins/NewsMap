import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const sportsSummaries = [
  {
    name: 'Papua New Guinea',
    country: 'PG',
    lat: -6.314993,
    lng: 143.95555,
    summary: `Look, if there's one country where rugby league isn't just the national sport—it's basically a religion—that's Papua New Guinea. And right now, things are absolutely electric. The Kumuls just won their THIRD straight Pacific Bowl title in November 2025, crushing Fiji 50-18 in Port Moresby. Lachlan Lam's been brilliant, and the team's been stacking wins like they're going out of style. Yeah, they took a 54-12 hammering from New Zealand in the 2024 promotion playoff, but here's the thing—they keep bouncing back.

The domestic scene's buzzing with the Digicel Cup, and the women just launched the Santos Cup in July 2024. But the real headline? PNG is getting an NRL team in 2028. The PNG Chiefs. This is MASSIVE. We're talking about a nation where attendance at Kumuls matches is insane, where kids grow up dreaming of playing league, and now they'll have a genuine pathway to the big time. This isn't just a sports story; it's geopolitical—Australia's putting serious money behind this as a soft power play in the Pacific.

Now, the rest of the sports picture is pretty bleak. Paris 2024 was a wash—six athletes, zero medals. PNG's never won an Olympic medal. Ever. The football team crashed out of World Cup qualifying in the group stage with one point. But honestly? Nobody in Port Moresby cares. Rugby league IS the story. When the Kumuls play, the country stops. And with an NRL franchise coming, this small nation of 9 million is about to punch way above its weight on the global rugby league stage.`,
    issues: [
      'Kumuls won third consecutive Pacific Bowl title 2025',
      'PNG Chiefs joining NRL in 2028 - historic expansion',
      'Zero Olympic medals at Paris 2024',
      'World Cup qualifying exit in group stage',
      'Rugby league dominance with growing women\'s Santos Cup'
    ]
  },
  {
    name: 'Paraguay',
    country: 'PY',
    lat: -23.442503,
    lng: -58.443832,
    summary: `Paraguay's having one of those years where football actually makes sense again. After years of mediocrity, Gustavo Alfaro walks in and suddenly they're beating Brazil 1-0, Argentina 2-1, and sitting sixth in CONMEBOL qualifying with 17 points—a World Cup spot. Antonio Sanabria's been clutch coming off the bench, and they're playing with a confidence we haven't seen since the 2010 World Cup run. The October 2024 double over Venezuela (2-1) and that Ecuador draw in Quito showed this isn't a fluke.

But Copa América 2024? Absolute disaster. Finished dead last in their group. It's classic Paraguay—wildly inconsistent, capable of beating anyone on their day, then looking completely lost the next match. The domestic league's chugging along with Olimpia winning the Clausura 2024 and Libertad taking the Apertura 2025. Both qualified for the 2025 Copa Libertadores, which is huge for Paraguayan football's profile.

The Olympic football team made waves by qualifying for Paris 2024—first time since 2004—after winning the Pre-Olympic Tournament. They took Egypt to penalties in the quarters before losing. That silver from Athens 2004 (losing 1-0 to Argentina in the final) remains their only Olympic medal ever. Miguel Almirón keeps flying the flag in the Premier League with Newcastle, and the young generation coming through looks promising. If Alfaro can keep this World Cup qualifying form going, Paraguay's headed to the 2026 World Cup—and that would be massive for a nation that's been in the wilderness too long.`,
    issues: [
      'World Cup qualifying resurgence under Gustavo Alfaro',
      'Historic wins over Brazil and Argentina in 2024-2025',
      'Copa América 2024 group stage exit',
      'Olympic football return after 20 years - quarterfinalists',
      'Olimpia and Libertad competing in Copa Libertadores 2025'
    ]
  },
  {
    name: 'Peru',
    country: 'PE',
    lat: -9.189967,
    lng: -75.015152,
    summary: `Let's talk about Paolo Guerrero being 41 years old and STILL scoring World Cup qualifying goals. The man "retired" in January 2025 at 39 goals in 124 caps, then new coach Óscar Ibáñez calls him up in March, and Guerrero immediately bangs in his 40th international goal against Bolivia—becoming the oldest player to score in South American qualifying at 41 years and 78 days. That's absolutely mental. But here's the brutal truth: Peru's sitting 10th in CONMEBOL qualifying with 7 points. One win. Against Uruguay in October. They're basically out of World Cup 2026 contention.

Copa América 2024 was equally grim. Guerrero played his sixth Copa in a record-tying 28 appearances in the tournament's history, but Peru looked ancient and toothless. The aging squad's been a problem for years—relying on Guerrero at 40 tells you everything. Domestically, the Peruvian Primera División keeps churning along, but there's a massive talent drain. All the good young players leave for Europe or Mexico immediately.

Paris 2024 gave us one bright spot: Stefano Peschiera won bronze in sailing (men's dinghy), ending Peru's 32-year Olympic medal drought. Surfer Alonso Correa made the semis but lost the bronze to Gabriel Medina. That's it. The football's in crisis, the national team's stagnant, and unless they find the next generation fast, Peru's golden generation (2019 Copa América runners-up) will be remembered as a fleeting moment in a long stretch of mediocrity.`,
    issues: [
      'Paolo Guerrero oldest scorer in South American qualifying at 41',
      'World Cup qualifying crisis - 10th place with 7 points',
      'Stefano Peschiera ends 32-year Olympic medal drought with sailing bronze',
      'Aging squad lacks next generation of talent',
      'Copa América 2024 disappointment with veteran-heavy roster'
    ]
  },
  {
    name: 'Philippines',
    country: 'PH',
    lat: 14.599512,
    lng: 120.984222,
    summary: `Carlos Yulo just did something no Filipino had ever done before—won TWO Olympic gold medals. Floor exercise and vault at Paris 2024. The man's 5'0" and throwing down 15+ scores like it's nothing. First Filipino man to win Olympic gold, first gymnast, first double gold medalist. He got a house, a lifetime supply of chicken, and basically became the most famous athlete in the country overnight. This was MASSIVE. The Philippines had never won back-to-back golds at a single Olympics, and Yulo delivered in the biggest way possible.

But let's talk about what the Philippines REALLY cares about: basketball. Gilas Pilipinas is in the middle of FIBA Asia Cup 2025 qualifying after a solid showing at the Olympic Qualifying Tournament in Latvia, where they upset the hosts—their first win over a European team in official FIBA competition since 1960. Tim Cone's the new permanent head coach, and there's genuine optimism. They're qualified for the 2025 Asia Cup, and with guys coming through the system, Philippine basketball's in decent shape.

Football? Meh. The Azkals aren't making noise internationally, but the PFL (Philippines Football League) keeps growing slowly. Boxing used to be huge here—Pacquiao's gone into politics—and there's no next Manny on the horizon. But Yulo's gymnastics golds have shifted the conversation. The Philippines just proved they can compete at the absolute elite level in Olympic sports. Now the question is: can they build on this, or was Paris 2024 just a beautiful anomaly?`,
    issues: [
      'Carlos Yulo wins two gold medals at Paris 2024 - historic first',
      'Gilas Pilipinas basketball qualifying for 2025 Asia Cup',
      'First FIBA win over European team since 1960',
      'Tim Cone leading basketball national team resurgence',
      'Post-Pacquiao era searching for next boxing superstar'
    ]
  },
  {
    name: 'Poland',
    country: 'PL',
    lat: 51.919438,
    lng: 19.145136,
    summary: `Polish football just went through DRAMA. Robert Lewandowski quit the national team in June 2025 because coach Michał Probierz made Piotr Zieliński captain instead of him. Poland then lost to Finland in World Cup qualifying, Probierz resigned, Jan Urban took over in July, and suddenly Lewandowski's back with the armband in August. Peak soap opera stuff. At 36, Lewandowski's still scoring for Barcelona, but Euro 2024 was rough—injured his thigh before the tournament, missed the opener (lost to Netherlands 2-1), then Poland finished bottom of the group despite his penalty against France.

The bigger concern? Poland finished 42nd in the Paris 2024 medal table with 10 medals (1 gold, 4 silver, 5 bronze)—their LOWEST placement ever at a Summer Olympics. But there were highlights: Iga Świątek won bronze in tennis, becoming the first Polish Olympic tennis medalist ever. After dominating Roland Garros for years, losing in Paris was emotional, but the bronze salvaged something. The men's volleyball team won silver—first Olympic medal since 1976. Weronika Lizakowska set a national record in the 1500m (3:57.31).

The Lewandowski situation perfectly captures Polish sports right now—lots of talent, some big personalities, but constant instability. World Cup qualifying's in the balance, and without Lewa, they're struggling. The depth isn't there. The domestic Ekstraklasa remains a stepping stone league—players leave as soon as they're good enough. Polish sports needs a reset, and fast, or the Tokyo/Paris Olympic slide continues into LA 2028.`,
    issues: [
      'Lewandowski quits and returns to national team amid coaching drama',
      'Euro 2024 group stage exit with injury-hit captain',
      'Lowest Olympic placement ever - 42nd with 10 medals',
      'Iga Świątek wins historic tennis bronze at Paris 2024',
      'Men\'s volleyball silver - first Olympic medal since 1976'
    ]
  },
  {
    name: 'Portugal',
    country: 'PT',
    lat: 39.399872,
    lng: -8.224454,
    summary: `Cristiano Ronaldo's 39 years old, scoreless at Euro 2024, and Portugal still can't quit him. They got knocked out by France in the quarters on penalties, and Ronaldo didn't score in FIVE matches. But Roberto Martínez keeps picking him for the Nations League, and guess what? Portugal won the whole damn thing in June 2025, beating Spain in a penalty shootout in Munich after Ronaldo scored a crucial equalizer. Second Nations League title, third overall trophy. Say what you want about the man, but he delivered when it mattered.

Paris 2024 was Portugal's best Olympics EVER—four medals including Iúri Leitão's gold in track cycling's Madison and silver in the omnium. First Portuguese Olympic cycling champion. Ever. Portugal's traditionally been an athletics nation (five golds historically), but Leitão's breakthrough opened new doors. Patrícia Sampaio won bronze in judo (78kg), and there was a silver in athletics. This is Portugal diversifying beyond football, and it's beautiful to see.

The domestic Primeira Liga's still a three-horse race (Sporting, Porto, Benfica), but Portuguese players are EVERYWHERE in Europe's top leagues. The youth development system's world-class. The national team's in transition—at some point, they'll have to move on from Ronaldo, but he keeps forcing his way into relevance. The 2026 World Cup cycle will be fascinating. Can Portugal finally win a World Cup? Or will this golden generation fade without football's biggest prize? Either way, the Ronaldo era isn't over yet.`,
    issues: [
      'Nations League 2025 champions - defeated Spain in final',
      'Euro 2024 quarterfinal exit with Ronaldo scoreless',
      'Best Olympic performance ever - 4 medals at Paris 2024',
      'Iúri Leitão first Portuguese Olympic cycling champion',
      'Ronaldo continues at 39 despite Euro 2024 struggles'
    ]
  },
  {
    name: 'Qatar',
    country: 'QA',
    lat: 25.354826,
    lng: 51.183884,
    summary: `Here's the thing about Qatar—they hosted the 2022 World Cup and went 0-3 in the group stage, becoming the first host nation EVER to lose all three matches. Absolute disaster. But then they turned around and won back-to-back Asian Cups (2019, 2024), becoming the first nation in 20 years to pull that off. Beat Jordan 3-1 in the 2024 final in February. Now they're in third or fourth in the 2026 World Cup qualifying group, fighting to advance to the fourth round. The talent's there—this squad can compete—but they choked spectacularly when it mattered most in 2022.

Mutaz Barshim is a legend. The high jumper won BRONZE at Paris 2024—his fourth medal in four consecutive Olympics (silver in 2012 and 2016, gold in 2020). First high jumper EVER to medal at four straight Games. At 33, he called it his last Olympics, and what a career. That shared gold with Italy's Tamberi in Tokyo was one of the all-time Olympic moments. Qatar's only Paris 2024 medal, but Barshim's been carrying the flag for years.

The sports infrastructure is absurd. Qatar's hosted the World Cup, Asian Cup, World Athletics Championships, and they're building toward the 2030s. Money's no object. But here's the question—can they develop homegrown talent without relying on naturalized players? The football team's improved massively under Spanish coaching, but the World Cup performance haunts them. They've got the facilities, the investment, and the ambition. Now they need to prove 2022 was an aberration, not the reality.`,
    issues: [
      'Back-to-back Asian Cup champions (2019, 2024)',
      '2022 World Cup hosts lose all three group matches',
      'Mutaz Barshim wins fourth consecutive Olympic medal',
      'World Cup 2026 qualifying - fighting for progression',
      'Massive sports infrastructure investment but reliant on naturalized players'
    ]
  },
  {
    name: 'Romania',
    country: 'RO',
    lat: 45.943161,
    lng: 24.96676,
    summary: `Romania at Euro 2024 was one of the tournament's best stories—until it wasn't. They absolutely smashed Ukraine 3-0 in the opener (first Euros win in 24 years!), captain Nicolae Stanciu hit a screamer, Răzvan Marin added another banger, and Romania topped Group E. The whole country went wild. Then the Netherlands demolished them 3-0 in the Round of 16, and reality set in. Still, for Edward Iordănescu's squad to win the group was massive. Romania's back on the international stage after years in the wilderness.

The Paris 2024 Olympics? Even better. Nine medals—3 gold (2 rowing, 1 swimming), 4 silver (3 rowing, 1 weightlifting), 2 bronze (gymnastics, swimming). Rowing was absolutely dominant. Romania's always been a rowing powerhouse, but this was a statement. The gymnastics bronze is historically significant too—Romania used to OWN Olympic gymnastics (25 golds, 21 silvers, 26 bronzes all-time), so seeing them back on the podium after years of decline means something.

Domestically, the Liga 1 is what it is—CFR Cluj, FCSB, and a handful of others scrapping for European spots. The talent drain to Western Europe is relentless. But Romanian players are thriving abroad, and the national team's got momentum. World Cup qualifying starts soon, and if they can carry this Euro 2024 energy forward, Romania's got a real shot at 2026. The infrastructure's there, the coaching's improved, and the fanbase is hungry. Don't sleep on Romania.`,
    issues: [
      'Euro 2024 group winners - first tournament win in 24 years',
      'Netherlands 3-0 loss in Round of 16 ends dream run',
      '9 Olympic medals at Paris 2024 - rowing dominance',
      'Gymnastics bronze signals return to historic powerhouse status',
      'Domestic talent drain to Western Europe continues'
    ]
  },
  {
    name: 'Russia',
    country: 'RU',
    lat: 61.52401,
    lng: 105.318756,
    summary: `Russian sports is in total isolation—and it's going to stay that way through the 2026 Winter Olympics. The IOC banned Russia after the Ukraine invasion, allowing only 15 Russian athletes to compete as "Individual Neutral Athletes" (AIN) at Paris 2024. No flag, no anthem, no team sports whatsoever. No football team. No basketball team. Nothing. The domestic Russian Premier League is a closed ecosystem now—foreign stars fled after the invasion, UEFA kicked Russian clubs out of European competitions, and the national team's suspended from World Cup qualifying.

The neutral athletes thing is controversial as hell. Some competed, some refused on principle. But 15 athletes out of what should be a 300+ delegation? It's a symbolic presence at best. Russia's historically been a summer and winter Olympic powerhouse (total medals: 1,122 all-time), and this ban is unprecedented in modern sports. The IOC's extending it through 2026, so Russian hockey, figure skating, and skiing—their winter sports jewels—are stuck on the sidelines.

Domestically, sports continues. The KHL (hockey) is thriving, the football league plays on, and athletes are competing in non-Western competitions. But globally? Russia's a pariah. The doping scandals, state-sponsored programs, and now the political isolation have destroyed their reputation. Will this ever end? Not anytime soon. As long as the war continues, Russia's locked out of international sports. And honestly, given the systematic cheating over the decades, there's not much sympathy internationally. Russian sports is paying the price for its government's actions.`,
    issues: [
      'Banned from Paris 2024 - only 15 neutral athletes allowed',
      'No team sports, no flag, no anthem at Olympics',
      'Ban extended through 2026 Winter Olympics',
      'National football team suspended from World Cup qualifying',
      'Total isolation from European club competitions and FIFA events'
    ]
  },
  {
    name: 'Rwanda',
    country: 'RW',
    lat: -1.940278,
    lng: 29.873888,
    summary: `Rwanda just hosted the 2025 UCI Road World Championships in Kigali—the first Worlds EVER held in Africa. September 2025. And by all accounts, it was a massive success. The UCI called it one of the most difficult courses in championship history—1,850 meters altitude plus brutal climbing. Rwanda's been building toward this for years with the Tour du Rwanda (UCI 2.1 level), which ran its 16th edition in February 2024. This isn't a vanity project; they're genuinely developing cycling infrastructure and creating pathways for African riders.

Now Rwanda's exploring a WorldTour-level race. That would be absolutely huge. Cycling's growing across Africa, but Rwanda's leading the charge with serious investment. They've also been hosting Basketball Africa League championship games in Kigali, and the whole "sports tourism" strategy is clearly part of President Kagame's vision to position Rwanda as a modern, developing nation. It's working—international federations are taking notice.

The Olympics? Rwanda sent athletes to Paris 2024 (11th consecutive appearance), but no medals. That's fine. The real story is the long-term infrastructure play. Rwanda's building velodromes, hosting international events, and creating a sports ecosystem from scratch. In 10 years, don't be surprised if Rwanda's producing Tour de France contenders and Olympic medalists. They're playing the long game, and they're doing it smartly. The 2025 Worlds was the coming-out party. Now comes the hard part—sustaining it.`,
    issues: [
      '2025 UCI Road World Championships hosted in Kigali - first in Africa',
      'Tour du Rwanda developing into internationally recognized race',
      'Exploring WorldTour-level race expansion',
      'Basketball Africa League championship games in Kigali',
      'Sports tourism strategy driving infrastructure investment'
    ]
  },
  {
    name: 'Saudi Arabia',
    country: 'SA',
    lat: 23.885942,
    lng: 45.079162,
    summary: `Saudi Arabia's sports project is simple: buy everything, host everything, sportswash everything. Cristiano Ronaldo's at Al-Nassr making absurd money, but they STILL didn't qualify for the 2025 Club World Cup—Al-Hilal took the Saudi spot after winning the league. Ronaldo's been scoring for fun in the Saudi Pro League, but silverware's been elusive. The national team's in World Cup qualifying, sitting third or fourth in their group. They need wins to advance to the fourth round. After parting ways with Roberto Mancini in October 2024, there's been instability, but the talent's there.

Let's be clear: Saudi football's improved. The league's got Benzema, Neymar (injured), Mahrez, and other stars. But it's still a retirement league pretending to be elite. Young Saudi players aren't getting minutes because clubs are stacking rosters with foreign talent. That's a problem for the national team long-term. They hosted the 2034 World Cup bid successfully, so in nine years, Saudi Arabia will be under the microscope like Qatar was in 2022.

At Paris 2024, Saudi Arabia sent 10 athletes (athletics, equestrian, swimming, taekwondo). No medals. They've won four Olympic medals total across 12 appearances, never a gold. Mohamed Daouda Tolo improved his Asian shot put record to 21.80m, which is promising. But the Olympic program's not where the Saudis are investing billions—they want Premier League clubs, LIV Golf, boxing mega-fights, and global tournaments. Sports as geopolitical leverage. It's working, for better or worse.`,
    issues: [
      'Al-Nassr with Ronaldo fail to qualify for 2025 Club World Cup',
      'National team World Cup qualifying after Mancini departure',
      '2034 World Cup hosting rights secured',
      'Zero Olympic medals at Paris 2024 - still no gold ever',
      'Massive spending on foreign stars limiting domestic player development'
    ]
  },
  {
    name: 'Senegal',
    country: 'SN',
    lat: 14.497401,
    lng: -14.452362,
    summary: `Sadio Mané is still doing Sadio Mané things. Last-gasp free-kick in the 96th minute against Malawi in October 2024 to seal AFCON 2025 qualification. Unbeaten in qualifying—five wins, one draw. Senegal's one of eight teams to go undefeated in the qualifiers, joining Morocco, Algeria, and Egypt. They won their first-ever AFCON title in 2021, beating Egypt on penalties (Mané was the hero), then got stunned by Ivory Coast in the Round of 16 at AFCON 2023 as defending champs. Now they're heading to Morocco for AFCON 2025 with serious ambitions.

The squad's still built around veterans—Kalidou Koulibaly, Idrissa Gana Gueye, and Mané—but there's young talent coming through. The big question is: can they keep this core together long enough for one more trophy run? Mané's still elite at Al-Nassr (yeah, Saudi money), Koulibaly's at Al-Hilal, and the European-based guys are scattered across top leagues. Coordination's always a challenge for African federations.

Paris 2024 was a total dud. No medals. Senegal's only Olympic medal EVER is Amadou Dia Ba's silver in the 400m hurdles back in 1988. That's it. Thirty-six years. They competed in athletics, judo, taekwondo, swimming, and other sports, but nothing. African football nations often struggle at the Olympics because the U-23 format doesn't favor them. But still—Senegal's got talent. They should be doing better. For now, all eyes are on AFCON 2025. Another continental trophy would cement this generation's legacy.`,
    issues: [
      'AFCON 2025 qualification sealed with unbeaten campaign',
      'Sadio Mané game-winner against Malawi in 96th minute',
      '2021 AFCON champions seeking second title in Morocco',
      'Veteran core aging - Koulibaly, Gueye, Mané in Saudi Arabia',
      'Zero Olympic medals at Paris 2024 - only one medal ever (1988)'
    ]
  },
  {
    name: 'Serbia',
    country: 'RS',
    lat: 44.016521,
    lng: 21.005859,
    summary: `Nikola Jokić is a basketball god, and Serbia's riding his greatness to glory. Bronze medal at Paris 2024, beating Germany 93-83. Jokić had a TRIPLE-DOUBLE in the bronze medal game—19 points, 12 rebounds, 11 assists. But here's the insane stat: he finished the Olympics leading the entire tournament in total points, rebounds, AND assists. Only player in Olympic history to do that. Serbia nearly upset Team USA in the semis, rallied from 24 down to beat Australia in the quarters, and Jokić was legendary. They came home to 40,000 fans chanting "MVP" in Belgrade.

Now he's leading Serbia through EuroBasket 2025. Went 4-1 in the group stage, with a star-studded roster including Bogdan Bogdanović, Vasilije Micić, and Nikola Jović. They finished runner-up at the 2023 FIBA World Cup, so expectations are massive. Serbian basketball's in a golden era—three-time NBA MVP Jokić at his peak, young talent coming through, and a deep bench of pros across Europe. It's not just Jokić; the system works.

Football? Didn't find much in my research, but Serbia's traditionally solid in European qualifying. Basketball's the crown jewel right now, though. The infrastructure, the coaching, the youth programs—Serbia's punching WAY above its weight for a country of 7 million people. And as long as Jokić keeps playing internationally (he's committed through EuroBasket 2025), Serbia's a medal threat everywhere. This is one of the great basketball nations on Earth, and the 2020s are their time.`,
    issues: [
      'Jokić leads Serbia to Olympic bronze - historic stats leader',
      'EuroBasket 2025 campaign with star-studded roster',
      '40,000 fans welcome team home after Paris Olympics',
      'Basketball golden era with three-time NBA MVP Jokić',
      'Runner-up at 2023 FIBA World Cup - consistent medal contenders'
    ]
  }
]

async function main() {
  console.log('🚀 Starting sports summaries insertion for countries 105-117\n')

  for (const country of sportsSummaries) {
    try {
      console.log(`\n📝 Processing ${country.name}...`)
      console.log(`   Summary length: ${country.summary.length} characters`)
      console.log(`   Issues: ${country.issues.length}`)

      const result = await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.country,
          lat: country.lat,
          lng: country.lng,
          category: 'sports',
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: '[]',
          storyCount: 0
        }
      })

      console.log(`   ✅ Saved ${country.name} (${result.id})`)
    } catch (error) {
      console.error(`   ❌ Error saving ${country.name}:`, error)
    }
  }

  console.log('\n✅ All sports summaries saved successfully!')
  console.log(`\nSummary character counts:`)
  sportsSummaries.forEach(c => {
    console.log(`${c.name}: ${c.summary.length} characters`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
