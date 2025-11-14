import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SPORTS_SUMMARIES = [
  {
    name: 'Namibia',
    country: 'NA',
    lat: -22.5609,
    lng: 17.0658,
    summary: `Namibia's sports scene is all about two things: rugby and making the impossible look routine. The Welwitschias qualified for their eighth consecutive Rugby World Cup in 2023—seriously, eight in a row—yet they've never won a single World Cup match. That's peak Namibia rugby: show up, compete with heart, get hammered by tier-one nations, and come back for more. On October 28, 2024, they named a 30-player squad for the 2027 Rugby World Cup Final Qualification Tournament and then absolutely destroyed UAE in a play-off to book their spot in Dubai. Tiaan Burger, their skipper, promised better performances after that UAE win, and you know what? You've got to respect the grind. They're not winning trophies, but they're building rugby infrastructure in a country where resources are scarce and football dominates most of Africa.

Then there's cricket, where Namibia is quietly becoming a T20 powerhouse. Jan Nicol Loftie-Eaton hit the fastest T20I century ever—33 balls against Nepal in February 2024—and that's not a typo. Cricket Namibia is currently building the country's first-ever national cricket stadium in Windhoek ahead of co-hosting the 2027 ODI World Cup with Zimbabwe. Think about that: a nation of 2.5 million people hosting a Cricket World Cup. They've qualified for multiple T20 World Cups, and while they don't win often, they're competitive. At Paris 2024, Namibia sent athletes across multiple disciplines but didn't medal—standard for a small nation punching above its weight.

Here's the thing about Namibian sports: it's all about infrastructure and investment. The rugby program has German and South African coaching influence, which explains their discipline and set-piece competence. Cricket is growing because of ICC development funding and diaspora talent. But football? Barely a blip. The domestic league struggles with attendance, and the national team hasn't qualified for an Africa Cup of Nations since 2019. Namibia is a two-sport country that somehow makes it work with a GDP per capita of $5,000 and a population smaller than Houston. The 2027 Cricket World Cup will be transformative—new stadiums, global exposure, tourism revenue. If they can leverage that investment into long-term development, Namibia could become the Iceland of African cricket. Until then, it's rugby heartbreak and cricket heroics on repeat.`,
    issues: [
      "Rugby World Cup qualification streak continues despite winless tournament record",
      "Jan Nicol Loftie-Eaton's record-breaking T20I century boosts cricket profile",
      "First national cricket stadium under construction for 2027 ODI World Cup co-hosting",
      "Football lags behind rugby and cricket in national development priorities"
    ]
  },
  {
    name: 'Nepal',
    country: 'NP',
    lat: 28.3949,
    lng: 84.1240,
    summary: `Nepal cricket is having an absolutely absurd run right now, and nobody's talking about it enough. They qualified for back-to-back T20 World Cups (2024 and 2026), they're on a 15-match home ODI winning streak—the fourth-longest in men's ODI history—and captain Rohit Paudel is out here taking 4-22 against Canada like he's Glenn McGrath reincarnated. On February 8, 2024, Nepal beat Canada by 7 runs at Tribhuvan University Ground to extend that winning streak, and the crowd in Kirtipur went absolutely mental. Then in October 2025, Nepal punched their ticket to the 2026 T20 World Cup after results went their way at the Asia & East Asia Pacific Qualifier in Oman. This is a country that didn't have ODI status until 2018, and now they're ranked 17th in the world and competing with established cricket nations.

The 2024 T20 World Cup was a reality check—Nepal got bowled out for 106 against the Netherlands and lost to South Africa by just one run, showing they can compete but lack finishing power. Still, just being there was massive. Cricket in Nepal is exploding: stadiums are packed, kids are playing in the streets, and the government is finally investing in facilities. The Tribhuvan University Ground in Kirtipur is a fortress—15 straight wins don't lie. They've got emerging talent like Sandeep Lamichhane (when he's not dealing with legal issues) and a bowling attack that can trouble anyone on their day.

Football? Totally different story. Nepal named a squad for FIFA World Cup qualifiers in March 2024 but didn't get out of the early rounds. The domestic league barely registers, and the national team is ranked outside the top 150 globally. Football competes with cricket for resources, and right now cricket is winning by a landslide. The other issue is infrastructure: Nepal has mountains, not stadiums. Building world-class facilities at elevation is expensive and complicated.

Here's what to watch: Can Nepal maintain momentum and actually win matches at the 2026 T20 World Cup? The 2024 tournament showed they belong, but belonging and advancing are different. If they can produce one or two genuine match-winners—bowlers who can defend totals, batters who can chase 160+—they could shock someone. The football team needs a complete overhaul, but nobody's prioritizing that when cricket is delivering results. Nepal's sports future is cricket-dominant, and honestly, they should lean into it. Small nations need to specialize, and Nepal found their sport.`,
    issues: [
      "Back-to-back T20 World Cup qualifications (2024, 2026) mark cricket rise",
      "15-match home ODI winning streak ranks fourth-longest in men's cricket history",
      "Football program struggles with FIFA ranking outside top 150 and early World Cup qualifying exits",
      "Infrastructure challenges in mountainous terrain limit facility development"
    ]
  },
  {
    name: 'Netherlands',
    country: 'NL',
    lat: 52.1326,
    lng: 5.2913,
    summary: `The Netherlands at Euro 2024 was classic Oranje: moments of brilliance, defensive chaos, and a semi-final exit that felt both disappointing and inevitable. They beat Poland 2-1, drew 0-0 with France, then lost 3-2 to Austria in the group stage—vintage Dutch inconsistency. But then Ronald Koeman's side flipped a switch: demolished Romania 3-0 in the Round of 16 with Cody Gakpo finally showing up, edged Turkey 2-1 in a tense quarter-final, and then faced England in the semis on July 10 in Dortmund. They lost, because of course they did, but this tournament showed the Dutch are back in the conversation. Gakpo was electric, Virgil van Dijk led the defense (when it wasn't leaking goals), and Memphis Depay did Memphis things—sometimes brilliant, sometimes baffling.

The Eredivisie is in a weird spot right now. Ajax lost 2-1 to AZ Alkmaar on December 7, 2024, and that pretty much sums up their season—once-dominant giants now scrambling for European spots. PSV Eindhoven is running the league, Feyenoord is competitive, and clubs like FC Utrecht and SC Heerenveen are punching above their weight. The problem? Talent drain. Every time a young Dutch star emerges—think Xavi Simons, Jeremie Frimpong, Ryan Gravenberch—they're gone to the Premier League or Bundesliga within a year. The Eredivisie has become a glorified academy league, and while that's great for player development, it's terrible for domestic competitiveness.

Here's the brutal truth: Dutch football is caught between legacy and reality. They expect to compete with France, Germany, and England, but they don't have the money or infrastructure to keep talent. The national team benefits from Dutch players thriving abroad, but the domestic league suffers. Koeman's done a decent job rebuilding after the disaster years (missing Euro 2016, World Cup 2018), but the defense is still sketchy, and they lack a world-class striker. Depay's 36 and Gakpo's inconsistent—where's the next Ruud van Nistelrooy?

The Eredivisie 2024/2025 season is ongoing, and it's entertaining if you like high-scoring chaos and young talent on display before they leave for England. Ajax's struggles are shocking—this is a club that reached the Champions League semis in 2019 and now can't beat mid-table teams. PSV is capitalizing, but even they can't hold onto stars. Long-term, Dutch football needs structural reform: better TV deals, salary caps to retain talent, and academy investment. Otherwise, it's just a pipeline to bigger leagues. The national team will be fine—Dutch player development is world-class—but the Eredivisie will keep bleeding talent.`,
    issues: [
      "Euro 2024 semi-final run shows national team progress but defensive frailties persist",
      "Cody Gakpo's tournament breakthrough overshadowed by lack of consistent striker",
      "Eredivisie talent drain accelerates with Ajax struggles and PSV dominance",
      "Domestic league becoming glorified academy for Premier League and Bundesliga clubs"
    ]
  },
  {
    name: 'New Zealand',
    country: 'NZ',
    lat: -40.9006,
    lng: 174.8860,
    summary: `New Zealand at Paris 2024 was an absolute masterclass in punching above your weight. They matched their highest-ever Olympic medal count—20 medals, equaling Tokyo 2020—and smashed their previous gold medal record with 10 golds (beating the 8 from Los Angeles 1984). The women's rugby sevens team defended their Olympic title, beating Canada 19-12 in the final, marking back-to-back golds after Tokyo. That's dominance. Meanwhile, the men's All Blacks Sevens got knocked out in the quarters by South Africa 14-7, which was a massive disappointment but also shows how competitive sevens has become. New Zealand cleaned up in rowing, kayaking, and sailing—classic Kiwi sports where small nations with coastlines and lakes dominate. This was a statement Olympics: 5 million people, 20 medals, and global respect.

The All Blacks had a rollercoaster 2024-2025. They swept England at home (16-15 and 24-17), destroyed Fiji 47-5 in San Diego, then went 3-3 in the 2024 Rugby Championship—split with Argentina, swept by South Africa, swept Australia. Not great, not terrible. Then in 2025, they found form: swept France 3-0 (31-27 in Dunedin, 43-17 in Wellington, 29-19 in Hamilton) and went 4-2 in the 2025 Rugby Championship. Scott Robertson's first two years as coach have been solid but not spectacular. The problem? South Africa owns them. The Springboks are physical, tactical, and relentless, and the All Blacks don't have an answer. Beating France is nice, but losing to South Africa twice in a Championship is a pattern.

Here's the issue: New Zealand rugby is in transition. The generation that won the 2015 World Cup is retired (Richie McCaw, Dan Carter, Ma'a Nonu), and the new squad is talented but inconsistent. Beauden Barrett and Aaron Smith are aging, and the next wave—Will Jordan, Caleb Clarke—haven't proven they can dominate tier-one nations consistently. The women's sevens team is world-class, but the men's sevens failure in Paris is a concern—that's a sport New Zealand invented, and they're losing ground.

Cricket barely got mentioned in the search results, which is telling. New Zealand cricket is solid (they reached the 2021 World Test Championship final and won it), but rugby is still king. The domestic Super Rugby competition is strong, but Australian teams are weak, and South African teams left for European tournaments. New Zealand needs a tactical shift: they can't out-muscle South Africa, so they need to out-think them. Robertson has time, but the 2027 World Cup is the target. If they don't reach the final, there will be serious questions. For now, it's Olympic glory, rugby competitiveness, and the eternal struggle with the Springboks.`,
    issues: [
      "Paris 2024 Olympics: 20 medals including 10 golds, matching highest medal count in history",
      "Women's rugby sevens back-to-back Olympic golds contrast with men's quarterfinal exit",
      "All Blacks sweep France but lose Rugby Championship series to dominant South Africa",
      "Generational transition struggles as aging stars phase out and new talent develops"
    ]
  },
  {
    name: 'Nicaragua',
    country: 'NI',
    lat: 12.8654,
    lng: -85.2072,
    summary: `Nicaraguan football is basically a regional afterthought, and that's being generous. The national team lost 4-1 to Costa Rica in CONCACAF World Cup qualifying—their next match is against Honduras on November 14, 2025, and spoiler alert: they're not winning. Nicaragua has never qualified for a FIFA World Cup, and at this rate, they never will. The domestic league, Liga Primera de Nicaragua, plays in two tournaments per year (Apertura and Clausura) and determines the 81st and 82nd champions in 2024-25, which sounds impressive until you realize nobody outside Nicaragua is watching. The Apertura runs August to November, Clausura runs January to May, and attendance is abysmal. This is a country where baseball and boxing generate more passion than football, and even those are niche.

The problem with Nicaraguan sports is infrastructure and investment—or lack thereof. Daniel Ortega's authoritarian regime has gutted civil society, including sports federations. There's no money for youth development, no international friendlies to build experience, and no pathway for Nicaraguan players to reach top leagues. The best athletes either leave the country or play in obscurity domestically. Football in Central America is dominated by Costa Rica, Honduras, and Panama—Nicaragua is nowhere near that level.

Baseball is actually Nicaragua's best sport historically. Dennis Martínez pitched 23 seasons in MLB and threw a perfect game in 1991. But even baseball is fading—MLB academies focus on the Dominican Republic, Venezuela, and Puerto Rico, not Nicaragua. Boxing produced Alexis Argüello and Ricardo Mayorga, but that was decades ago. Right now, Nicaragua doesn't have a single athlete competing at an elite international level in any major sport.

The Liga Primera is a mess: low salaries, poor facilities, and matches that sometimes don't finish due to power outages or security issues. Clubs like Real Estelí and Diriangén FC dominate, but "dominate" is relative—they'd struggle in Guatemala's top division. The national team is ranked around 150th globally by FIFA, and that's probably generous. CONCACAF World Cup qualifying is a formality for them: show up, lose to everyone except maybe a Caribbean island nation, go home. There's no plan, no vision, no hope.

Here's the brutal reality: sports in Nicaragua won't improve until the political situation changes. Ortega's regime prioritizes control over development, and sports federations are extensions of state power, not meritocracies. Young talent leaves for the U.S. or Costa Rica as soon as they can. International investment is nonexistent because of sanctions and instability. Until there's regime change and economic recovery, Nicaraguan sports will remain stuck in neutral. The 4-1 loss to Costa Rica isn't an outlier—it's the standard. And that's the tragedy.`,
    issues: [
      "Never qualified for FIFA World Cup with ranking around 150th globally",
      "4-1 loss to Costa Rica in CONCACAF qualifying typifies regional struggles",
      "Liga Primera hampered by low investment, poor infrastructure, and regime control",
      "Historical baseball and boxing success faded with no current elite international athletes"
    ]
  },
  {
    name: 'Niger',
    country: 'NE',
    lat: 17.6078,
    lng: 8.0817,
    summary: `Niger football just pulled off one of the great upsets of AFCON qualifying, and nobody's talking about it. On November 18, 2024, Niger beat Ghana 2-1 in Accra—Ghana, a four-time African champion, lost at home to a team ranked 116th in the world. Badamassi scored from a corner in the 22nd minute, and Sako grabbed a stoppage-time winner after Ghana's defense fell asleep. This was Ghana's final AFCON qualifier, and they needed a result to keep morale up after a disaster campaign. Instead, Niger humiliated them. Earlier in qualifying, Niger drew 1-1 with Ghana at home and only lost 1-0 to Sudan. They finished third in Group F and didn't qualify for AFCON 2025, but that Ghana win was a statement: we're not pushovers anymore.

Here's the problem: Niger is a football nation with zero infrastructure. The domestic league barely functions, players earn poverty wages, and the national team trains in borrowed stadiums because Niger doesn't have a single FIFA-standard facility. Most of the squad plays in lower-tier European or North African leagues—guys grinding in Tunisia, Morocco, or Algeria. The French colonial influence means some Nigerien players develop in France's lower divisions, but they're not reaching Ligue 1 or the Premier League. The talent exists, but the pathway doesn't.

In 2026 World Cup qualifying, Niger lost 1-2 to Morocco on March 21, 2025, which was expected—Morocco is a top-15 global team. But losing narrowly to Morocco and beating Ghana shows Niger can compete when organized. The coaching staff deserves credit: they set up defensively, hit on the counter, and don't concede cheap goals. That's a functional system, even if the talent level is mid-tier.

The bigger issue is political and economic chaos. Niger's military coup in July 2023 led to sanctions, isolation, and economic collapse. ECOWAS (Economic Community of West African States) banned Niger from regional competitions briefly, and international funding for sports dried up. Football federations rely on CAF and FIFA development grants, and when your government is a pariah state, that money disappears. Players couldn't get visas for away matches, and some had to drive across borders to reach games.

Niger's sports future is bleak unless the political situation stabilizes. The Ghana win was brilliant, but it's not sustainable without investment. Youth academies don't exist, coaching education is nonexistent, and the domestic league is semi-professional at best. The national team punches above its weight because of individual talent and coaching discipline, but they'll never qualify for a World Cup or win AFCON without systemic change. The 2-1 win in Accra will be remembered as a fluke, not a turning point—and that's the tragedy.`,
    issues: [
      "Historic 2-1 upset of Ghana in AFCON qualifying shows competitive potential",
      "Failed AFCON 2025 qualification despite finishing third in Group F",
      "Military coup aftermath devastates infrastructure and international funding",
      "Zero FIFA-standard facilities and semi-professional domestic league limit development"
    ]
  },
  {
    name: 'Nigeria',
    country: 'NG',
    lat: 9.0820,
    lng: 8.6753,
    summary: `Nigerian football is simultaneously thriving and imploding, which somehow makes perfect sense. The Super Eagles qualified for AFCON 2025 after smashing Benin 4-0 and beating Lesotho 2-1, but they're on the brink of missing the 2026 World Cup after drawing 1-1 with South Africa and stumbling through qualifying. Victor Osimhen—26 goals for Nigeria, African Footballer of the Year, Napoli's Serie A title hero—is carrying this team on his back. He scored a brace against Rwanda (2-0 away win), and Nigeria wouldn't be anywhere without him. But here's the crisis: they're likely heading to the World Cup play-off tournament facing either Cameroon or DR Congo in November 2025, and if they lose, the Nigeria Football Federation will burn to the ground. Interim coach Augustine Eguavoen is doing okay, but "interim" is the problem—Nigeria hasn't had stable coaching in years.

The domestic scene is even messier. The Nigerian Premier League exists, but search results couldn't even confirm recent standings or results, which tells you everything. Enyimba and Rangers occasionally compete in CAF competitions, but they're outclassed by North African clubs with actual budgets. Nigerian players leave for Europe as teenagers, and the domestic league is a wasteland. Football infrastructure is crumbling: stadiums are half-empty, referees are corrupt, and club owners are either broke or disinterested. Yet Nigeria keeps producing world-class talent—Osimhen, Ademola Lookman, Alex Iwobi, Wilfred Ndidi—because football is in the DNA.

AFCON 2025 in Morocco is make-or-break. Nigeria faces Tanzania (December 23), Tunisia (December 27), and Uganda (December 30) in the group stage. They're favorites to advance, but favorites have meant nothing lately. Nigeria won AFCON three times (1980, 1994, 2013) but hasn't won since 2013, and the pressure is suffocating. The expectation is always the same: Nigeria should dominate Africa. But Ghana, Senegal, Egypt, and Morocco are all stronger or equal, and Nigeria's disorganization is catching up.

Here's the existential question: how does a country of 220 million people with football-obsessed culture keep failing? The answer is governance. The NFF is a corrupt mess, coaching changes happen every six months, and youth development is haphazard. Players like Osimhen succeed despite the system, not because of it. If Nigeria doesn't reach the 2026 World Cup, there will be riots—literally. Fans are already furious after the South Africa draw. The talent is there, the passion is there, but the structure is broken. Nigeria should be a top-10 global football power. Instead, they're scrambling for play-offs and praying Osimhen stays healthy. That's not a plan, that's hope. And hope doesn't win World Cups.`,
    issues: [
      "Victor Osimhen's 26 goals carry Super Eagles through AFCON qualification",
      "World Cup 2026 hopes rest on play-off tournament against Cameroon or DR Congo",
      "Interim coaching and NFF dysfunction undermine team with elite talent pool",
      "Nigerian Premier League infrastructure collapse despite continuous world-class player development"
    ]
  },
  {
    name: 'North Korea',
    country: 'KP',
    lat: 40.3399,
    lng: 127.5100,
    summary: `North Korean football is the ultimate black box—mysterious, unpredictable, and occasionally shocking. After more than five years of international isolation (they withdrew from competitions between 2019 and 2023 due to COVID-19 paranoia), North Korea is back, and they're not messing around. On June 11, 2024, they qualified for the third round of FIFA World Cup qualifying for the first time since 2010, which also secured their spot in the 2027 AFC Asian Cup. After thrashing Myanmar 6-1 at Thuwunna Stadium in November 2023 (Jong Il-gwan scored a hat-trick), they showed they haven't lost a step. But then they got destroyed 3-0 by Iran at Azadi Stadium in June 2025, which is what happens when you face elite opposition after years of isolation.

Here's the weirdness: nobody knows what's happening inside North Korean football. The domestic league exists, but zero information gets out. Players are selected by the state, coaching is military-style, and defection is a constant risk. The women's team is historically strong—they've won multiple Asian championships and competed at World Cups. But the men's team is a mystery. They famously reached the World Cup in 2010 (lost 7-0 to Portugal in one of the great beatdowns) and then disappeared for over a decade.

The problem with North Korea is sustainability. They qualified for the third round of World Cup qualifying, which is impressive, but they're in Group A with Iran, Uzbekistan, and UAE—all stronger teams. They're not making the 2026 World Cup unless something insane happens. And even if they did, would the regime allow the team to travel to the U.S., Canada, and Mexico? Doubtful. The 2010 World Cup squad reportedly faced punishment after losing, and players were allegedly sent to labor camps. That's not confirmed, but it's North Korea, so nothing is off the table.

Tactically, North Korea plays disciplined, defensive football—think 1960s Eastern European bloc style with modern fitness. They don't have individual stars because the system suppresses personality. The 6-1 win over Myanmar was clinical: high press, quick transitions, ruthless finishing. The 3-0 loss to Iran showed their ceiling—they can't match top-tier Asian teams in skill or physicality.

The 2027 AFC Asian Cup qualification is a big deal. If North Korea participates, it'll be their first Asian Cup since 2011. But will they show up? COVID-19 made them withdraw from everything, and the regime's isolationist policies could kill their football program again. The talent is there—North Korean athletes are coached brutally and conditioned to peak performance—but the politics are impossible. For now, they're back in World Cup qualifying, and that's something. Whether they stay engaged or disappear again is anyone's guess. North Korean football: equal parts fascinating and terrifying.`,
    issues: [
      "Return from five-year international isolation with World Cup third round qualification",
      "6-1 demolition of Myanmar contrasts with 3-0 loss to Iran in Group A qualifying",
      "State-controlled system suppresses individual stars but produces disciplined tactics",
      "Regime's isolationist policies risk withdrawal from 2027 AFC Asian Cup and future competitions"
    ]
  },
  {
    name: 'Norway',
    country: 'NO',
    lat: 60.4720,
    lng: 8.4689,
    summary: `Erling Haaland is playing football from another dimension, and Norway still can't qualify for anything that matters. On September 9, 2025, Haaland scored five goals and assisted two in an 11-1 demolition of Moldova in World Cup qualifying—the first male European player to score five in a qualifier since 1977. In October 2025, he scored a hat-trick in a 5-0 win over Israel, becoming the fastest player ever to reach 50 international goals, breaking Harry Kane's record. In November 2024, he scored four against Kazakhstan in a 5-0 win that secured Norway's promotion to Nations League A. In June 2025, he scored in a 3-0 win over Italy—Norway's first victory over Italy in 25 years. The man is unstoppable. And yet, Norway has never qualified for a major tournament with Haaland in the squad. They missed Euro 2024, they've never been to a World Cup since 1998, and it's absolutely maddening.

Here's the problem: Norway has one world-class player and a bunch of solid professionals. Martin Ødegaard (Arsenal captain) is brilliant, but he's injury-prone and can't carry the team alone. The defense is okay, the midfield is functional, and Haaland is generational. That's not enough. They beat Moldova 11-1 and Israel 5-0, but those are mismatches. Against tier-one nations, Norway struggles. The Nations League promotion to League A is progress, but it's not the same as qualifying for the Euros or World Cup.

The Eliteserien (Norway's domestic league) is in decent shape. The 2025 season runs March to November with Bodø/Glimt as defending champions. But let's be honest: the Eliteserien is a feeder league. Haaland left Molde for Red Bull Salzburg as a teenager, Ødegaard left Strømsgodset for Real Madrid at 16, and every Norwegian talent bolts for bigger leagues immediately. The Eliteserien develops players but can't keep them, which is fine for the national team but bad for domestic competitiveness.

Norway's issue is mental and tactical. They dominate weak teams but fold under pressure against equals. The coaching has been inconsistent, and the squad lacks depth. If Haaland gets injured, they're finished. If Ødegaard is out, creativity vanishes. They need to build a system that doesn't rely on individual brilliance, but Norwegian football culture is reactive, not proactive.

The silver lining: Haaland is 25, Ødegaard is 26, and Norway has time. The 2026 World Cup qualifying campaign is ongoing, and if they maintain form, they could finally break through. But "could" and "will" are different. Haaland scoring 50 goals faster than Kane is historic, but it's meaningless if Norway keeps missing tournaments. They need to qualify for the 2026 World Cup or Euro 2028. Otherwise, Haaland's prime will be wasted, and that would be a tragedy. For now, it's individual brilliance masking systemic mediocrity, and Norwegian fans are rightly frustrated.`,
    issues: [
      "Haaland's 50 international goals in record time unable to secure major tournament qualification",
      "11-1 Moldova demolition and 3-0 Italy win contrast with failure to reach Euro 2024",
      "Eliteserien develops talent but loses stars immediately to bigger European leagues",
      "Over-reliance on Haaland and Ødegaard exposes lack of squad depth and tactical system"
    ]
  },
  {
    name: 'Oman',
    country: 'OM',
    lat: 21.4735,
    lng: 55.9754,
    summary: `Oman cricket is quietly building something real. They qualified for the 2026 T20 World Cup in October 2025 after hosting the ICC Men's T20 World Cup Asia and East Asia-Pacific Qualifier, securing one of three spots alongside Nepal and Papua New Guinea. This is Oman's third T20 World Cup appearance, and they're not just making up the numbers—they're competitive. Oman played England at the 2024 T20 World Cup on June 13 and didn't embarrass themselves. They've been grinding in the Cricket World Cup League 2, playing matches against the USA (February 12, 2025) and Namibia (February 10, 2025), and building experience against associate nations. The fact that they're hosting major ICC qualifying tournaments shows how far Omani cricket has come—investment in facilities, coaching, and player development is paying off.

Here's the thing: Oman is a Gulf state with oil money, and they're pouring it into cricket infrastructure. The Al Amerat Cricket Ground is world-class, and they're using it to host international events, which generates revenue and exposure. Unlike other Gulf nations that treat cricket as an expat sport, Oman is developing local talent. They're not at the level of Ireland or Afghanistan (the two best associate nations), but they're in the conversation. The T20 format suits them—short, high-variance matches where upsets happen. If they draw a tier-one nation on a bad day, Oman could pull off a shock.

Football is different. Oman has a national team that competes in World Cup qualifying and Asian Cup tournaments, but they're mid-tier at best. The search results didn't return specific match results for 2024-2025, which tells you how much traction Omani football has globally—basically none. The domestic league exists, but it's filled with expat players and mercenaries. Oman doesn't produce football talent the way they're starting to produce cricketers. The Oman Football Association gets FIFA funding, but results are mediocre.

The smart play for Oman is to go all-in on cricket. They've got the infrastructure, the funding, and regional support (UAE and Qatar are also investing). The 2026 T20 World Cup in India and Sri Lanka will be massive exposure, and if Oman can win a game or two, it'll validate the investment. The October 2025 qualifier (October 8-17) was a statement: Oman can host, compete, and qualify. That's legitimacy.

Long-term, Oman needs to develop homegrown stars. Right now, the squad is a mix of Omani nationals and naturalized players from South Asia. That's fine for building competitiveness quickly, but sustainable success requires local talent pipelines. Youth academies are expanding, and school cricket is growing, so the foundation is being laid. If Oman can produce one world-class player—a bowler who can take wickets in the powerplay or a batter who can finish chases—they'll be dangerous. For now, it's steady progress, smart investment, and realistic ambitions. That's the blueprint for associate cricket success.`,
    issues: [
      "T20 World Cup 2026 qualification secured at home-hosted Asia qualifier",
      "Al Amerat Cricket Ground hosting ICC events showcases infrastructure investment",
      "Football program remains mid-tier with limited international impact",
      "Need to develop homegrown cricket talent beyond naturalized South Asian players"
    ]
  },
  {
    name: 'Pakistan',
    country: 'PK',
    lat: 30.3753,
    lng: 69.3451,
    summary: `Pakistan cricket in 2024-2025 is a rollercoaster of historic highs and crushing lows, which is exactly what you'd expect. They ended 2024 with a heartbreaking two-wicket loss to South Africa in the Centurion Boxing Day Test, but before that, they pulled off historic ODI series wins in Australia and South Africa—two of the toughest places to tour. Islamabad United won PSL 2024, and now the entire cricket world is watching the ICC Champions Trophy 2025, which Pakistan is hosting from February 19 to March 9. Fifteen ODIs, the biggest cricket event in Pakistan in years, and the pressure is suffocating. On top of that, Pakistan has 7 Tests, 34 ODIs, and 74+ T20Is scheduled for 2025—it's a packed calendar, and the scrutiny will be relentless.

Here's the problem: Pakistan cricket is chaotic. Coaching changes, selection drama, and PCB (Pakistan Cricket Board) infighting dominate headlines as much as actual results. The fact that they won series in Australia and South Africa is a miracle given the internal dysfunction. Babar Azam was captain, then he wasn't, then maybe he is again—nobody knows. The bowling attack is world-class (Shaheen Afridi, Naseem Shah, Haris Rauf), but the batting is inconsistent. They'll score 350 one day and collapse for 150 the next.

The Champions Trophy is make-or-break. Pakistan is hosting, the stadiums will be packed, and expectations are sky-high. If they don't at least reach the semi-finals, there will be riots. But here's the catch: the India-Pakistan match on February 23, 2025 in Dubai will be the most-watched cricket match of the year. The rivalry, the pressure, the geopolitical tension—it's bigger than sport. If Pakistan wins, they're heroes. If they lose, the PCB chairman will be fired by morning.

The Pakistan Super League (PSL) moved from February-March to April 10 to May 25, 2025 to accommodate the Champions Trophy, which is smart scheduling. PSL is the second-best T20 league outside the IPL—big crowds, serious talent, and competitive cricket. But the calendar is insane: West Indies touring for two Tests in January, a tri-series with New Zealand and South Africa in February, Champions Trophy, then PSL. Players will be exhausted.

Long-term, Pakistan cricket is financially healthy (ICC revenue, PSL earnings, bilateral tours), but governance is a disaster. The PCB changes leadership every year, selectors make baffling decisions, and politics infects everything. The talent pipeline is strong—Pakistan produces fast bowlers and aggressive batters like clockwork—but the system wastes potential. If they can stabilize leadership and let coaches/captains work for more than six months, Pakistan could dominate. For now, it's chaos, brilliance, and heartbreak on repeat. The Champions Trophy will be electric, and I can't wait to see how they screw it up or shock everyone.`,
    issues: [
      "ICC Champions Trophy 2025 hosting from February 19-March 9 brings massive pressure",
      "Historic ODI series wins in Australia and South Africa offset by Boxing Day Test loss",
      "PCB dysfunction and constant coaching changes undermine world-class talent pool",
      "India-Pakistan match on February 23 in Dubai to be most-watched game of 2025"
    ]
  },
  {
    name: 'Palestine',
    country: 'PS',
    lat: 31.9522,
    lng: 35.2332,
    summary: `Palestine football is operating in impossible circumstances, and somehow they're still competing. At the 2024 AFC Asian Cup, Palestine recorded their first-ever tournament victory (3-0 over Hong Kong on January 23) and reached the knockout stage for the first time. They lost 2-1 to Qatar in the quarterfinals, but they led 1-0 after Oday Dabbagh's 37th-minute goal. Think about that: Palestine, a nation under occupation with no sovereign territory, no control over borders, and players who can't train together regularly, reached the Asian Cup quarterfinals. That's not just a sports story—it's geopolitics, resistance, and identity wrapped in football.

Then there's World Cup qualifying, which is even more absurd. On June 7, 2024, Palestine qualified for the third round of FIFA World Cup qualifying for the first time after a 0-0 draw with Lebanon. They're in Group B with Oman, Iraq, Jordan, Kuwait, and South Korea—a brutal group. They're currently bottom with three points from seven games, but they've had moments. In March 2025, they scored twice in stoppage time to beat Iraq 2-1 in Amman—Tamer Sayem and Wessam Abou Ali were the heroes. Then in June 2025, they beat Kuwait 2-0 in a crucial qualifier. On June 10, 2025, they faced Oman in a must-win match: win and advance to the fourth round, lose or draw and it's over. That's the knife-edge Palestine is operating on.

Here's the brutal reality: Palestinian players live in diaspora. Some play in Europe (lower divisions), some in the Middle East, and some can't leave the West Bank or Gaza due to Israeli restrictions. The national team trains in Jordan or Qatar because they can't assemble in Palestine. FIFA recognizes them, but travel restrictions, checkpoints, and military closures mean players miss matches. The AFC Asian Cup quarterfinal was played while Gaza was being bombed—Palestinian players were mourning families while competing. That's the context.

Tactically, Palestine plays organized, defensive football. They don't have world-class talent, but they're disciplined and motivated. The 3-0 win over Hong Kong was clinical. The 2-1 loss to Qatar was competitive. The 2-1 comeback against Iraq was pure heart. They qualified for the 2027 AFC Asian Cup (their fourth consecutive qualification), which shows consistency.

The issue is infrastructure—or lack thereof. Palestine doesn't control their own stadiums, borders, or airspace. Players get detained at checkpoints, visas get denied, and matches get canceled. FIFA has intervened multiple times, but Israel controls everything. Palestinian football exists as an act of defiance. Every goal, every qualification, every match is political. The fact that they're in World Cup qualifying and competing is a miracle. Will they qualify for 2026? Almost certainly not. But the fact that they're trying, under conditions no other nation faces, is the story. Palestine football is resistance. And it's not stopping.`,
    issues: [
      "First AFC Asian Cup quarterfinal appearance (2024) marks historic breakthrough",
      "World Cup third round qualification achieved despite occupation and travel restrictions",
      "2-1 comeback win over Iraq and 2-0 victory over Kuwait show competitive resilience",
      "Players scattered in diaspora unable to train together due to Israeli military controls"
    ]
  },
  {
    name: 'Panama',
    country: 'PA',
    lat: 8.5380,
    lng: -80.7821,
    summary: `Panama at Copa América 2024 was peak CONCACAF chaos: they beat the United States 2-1 in the group stage—a massive upset that sent shockwaves through American soccer—and then got absolutely demolished 5-0 by Colombia in the quarterfinals. That's Panama in a nutshell: capable of shocking results against regional rivals, but not ready for elite South American competition. The USMNT loss in the group stage was Panama's statement game: organized defense, clinical finishing, and a hostile crowd in Atlanta. Then Colombia came along and reminded everyone that CONCACAF and CONMEBOL are different levels. Still, reaching the Copa América quarters is a big deal for a country of 4.4 million people.

The 2024 overall record was 5 wins, 7 losses, 1 draw—not great, but competitive. The CONCACAF Nations League run was the highlight: they beat Costa Rica 1-0 in the quarterfinals (November 14, 2024) with a José Fajardo penalty, then secured a 3-2 aggregate victory with a 2-2 draw at home. Panama finished as Nations League runners-up in the 2025 finals, which is their best result in a competitive tournament. But they also lost 6-1 to Chile in a February 2025 friendly and 2-0 to the USA in an October 2024 friendly, which shows the inconsistency.

World Cup qualifying is ongoing, with matches against Guatemala and El Salvador scheduled for November 2025. Panama is in the mix for 2026, but they're not favorites. CONCACAF gets 3.5 direct spots (the 0.5 goes to an intercontinental play-off), and with the USA, Mexico, and Canada auto-qualifying as hosts, the competition is wide open. Panama needs to capitalize on home games and steal points from Costa Rica, Honduras, and Jamaica. They've got the defensive organization and set-piece threat, but they lack creativity in the final third.

The domestic Liga Panameña barely registers internationally. Search results returned zero information about standings or results, which tells you everything. Panama's best players (Fajardo, Édgar Bárcenas, Aníbal Godoy) play abroad in MLS, Liga MX, or South America. The domestic league is semi-professional, and nobody's watching.

Here's the thing: Panama is a World Cup nation (they qualified in 2018), and they're capable of doing it again in 2026. The CONCACAF field is weak enough that a well-coached, disciplined team can qualify. But they need consistency. Beating the USMNT and Costa Rica is great, but losing 6-1 to Chile is embarrassing. The Nations League runner-up finish shows they're trending up, but 2026 qualifying will define this generation. If they make it, it's a success. If they don't, the Copa América run will be a footnote. Panama has the talent and coaching to qualify—now they need to execute.`,
    issues: [
      "Copa América 2024: 2-1 upset of USMNT followed by 5-0 quarterfinal loss to Colombia",
      "CONCACAF Nations League runners-up finish in 2025 marks best competitive tournament result",
      "2026 World Cup qualifying ongoing with must-win matches vs Guatemala and El Salvador",
      "Domestic Liga Panameña remains semi-professional with zero international visibility"
    ]
  }
]

async function addSportsSummaries() {
  console.log('Adding sports category summaries for countries 92-104...\n')

  let successCount = 0
  let errorCount = 0

  for (const countryData of SPORTS_SUMMARIES) {
    try {
      const charCount = countryData.summary.length
      console.log(`\n📝 Processing ${countryData.name}...`)
      console.log(`   Character count: ${charCount}`)

      await prisma.locationSummary.create({
        data: {
          name: countryData.name,
          type: 'country',
          country: countryData.country,
          lat: countryData.lat,
          lng: countryData.lng,
          category: 'sports',
          summary: countryData.summary,
          issues: JSON.stringify(countryData.issues),
          topStories: '[]',
          storyCount: 0,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      })

      console.log(`   ✅ ${countryData.name} sports summary added successfully`)
      successCount++
    } catch (error: any) {
      console.error(`   ❌ Error processing ${countryData.name}:`, error.message)
      errorCount++
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`✅ Successfully added: ${successCount}`)
  console.log(`❌ Errors: ${errorCount}`)
  console.log(`${'='.repeat(60)}\n`)
}

addSportsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
