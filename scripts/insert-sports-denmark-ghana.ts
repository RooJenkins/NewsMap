import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SUMMARIES = [
  {
    name: 'Denmark',
    code: 'DK',
    lat: 56.2639,
    lng: 9.5018,
    summary: `Let's talk about Danish football, because this November is absolutely massive. Denmark goes to Glasgow on November 18th with everything on the line—a win over Scotland means direct qualification for the 2026 World Cup, a draw or loss means the playoff route. Both teams sit on 10 points in Group C, but Denmark's got the superior goal difference (+11 vs Scotland's +5) after absolutely demolishing teams in this campaign. They've been clinical: 3-0 over Greece in September, then a ridiculous 6-0 battering of Belarus in October, followed by another 3-1 win against Greece. The scary thing? Even if they stumble in Glasgow, they've already locked up a playoff spot through their Nations League performance.

Back home, Copenhagen just reclaimed the Superliga title with 63 points, edging Midtjylland by a single point in what was a proper title race all season long. That championship means FCK is back in the Champions League for 2025-26—their seventh appearance in the group stage. They've already got a tasty fixture list at Parken Stadium: Bayer Leverkusen on September 18th, Dortmund in October, and Napoli in January 2026. Remember, Copenhagen reached the Round of 16 in 2023-24, so this isn't just a happy-to-be-here situation.

But here's what's really impressive about Denmark right now—it's not just football. At Paris 2024, they hauled in 9 medals across multiple sports. Viktor Axelsen became the first man since Lin Dan to successfully defend an Olympic badminton singles title, absolutely schooling Thailand's Kunlavut Vitidsarn 21-11, 21-11 in the final. The handball teams continued their ridiculous medal run with a gold, a silver, and a bronze between them.

Bottom line: Denmark's punching well above their weight for a nation of 5.9 million people. If they can get the job done in Glasgow, they're going straight to the World Cup without the playoff drama. And with Copenhagen back in the Champions League and Axelsen still dominating badminton, Danish sports is in a genuinely strong place right now. Watch that Scotland match—it's going to be absolutely mental.`,
    issues: [
      "World Cup 2026 qualifying showdown vs Scotland",
      "Copenhagen's Superliga title and Champions League return",
      "Viktor Axelsen's historic badminton Olympic defense",
      "Handball teams' continued international medal success"
    ]
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    lat: 18.7357,
    lng: -70.1627,
    summary: `Here's the thing about Dominican baseball—it's not just a sport, it's basically a national religion, and 2024-25 has been a reminder of both the country's incredible talent pipeline and its frustrating tournament results. The big news is that Albert Pujols, arguably the greatest Dominican player ever, will manage the national team at the 2026 World Baseball Classic. That's significant because the 2023 WBC was an absolute disaster—they failed to advance out of the first round despite scoring 19 runs. For a country that produces this much MLB talent, that's unacceptable.

Look at the WBSC Premier12 2024 roster and you'll see why expectations are always sky-high: 28 players, eight with MLB experience. You've got Willy Peralta and Diego Castillo with 250+ MLB games each, Joelys Rodriguez who pitched 14 games for the 2024 Red Sox, and José Devers who got into three games with the Marlins. The talent factory never stops—every single MLB team has Dominican players on their roster right now. From Fernando Tatís Jr. to Rafael Devers to Juan Soto, the Dominican impact on Major League Baseball is absolutely massive.

March 2024 brought something genuinely cool: the inaugural MLB World Tour Dominican Republic Series at Estadio Quisqueya in Santo Domingo. The Red Sox and Rays played two games on March 9-10, bringing top-level baseball home in a way that felt like a proper celebration of the country's baseball heritage. It's one thing to watch Dominicans dominate MLB on TV, it's another to see big league teams actually playing in Santo Domingo.

The challenge moving forward is translating this incredible individual talent into consistent team success. Pujols taking over as WBC manager in 2026 could be the catalyst they need—he's got the credibility, the baseball IQ, and the legendary status to unite what can sometimes be a collection of MLB stars rather than a cohesive national team. If he can channel even a fraction of that 703-home-run magic into team chemistry, the Dominican Republic could finally win their first World Baseball Classic. The talent's there, it always is. The question is whether they can put it all together when it matters.`,
    issues: [
      "Albert Pujols named 2026 World Baseball Classic manager",
      "2023 WBC first-round exit despite deep talent pool",
      "Inaugural MLB World Tour series at Estadio Quisqueya",
      "Continuous production of elite MLB players across all 30 teams"
    ]
  },
  {
    name: 'Ecuador',
    code: 'EC',
    lat: -1.8312,
    lng: -78.1834,
    summary: `Ecuador just did something genuinely impressive—they've qualified for the 2026 World Cup, their fifth appearance at the tournament, and they did it despite having THREE POINTS DEDUCTED for fielding a player with falsified passport information. Think about that for a second. They basically spotted the rest of CONMEBOL three points and still made it through. That's not luck, that's a proper national team finding a way to get results when it matters.

The qualifying campaign has been frustrating to watch if you like goals—0-0 with Paraguay in Quito in October, 0-0 with Brazil in June, 0-0 with Peru. These aren't pretty matches, but they're effective. Ecuador has figured out how to be incredibly difficult to break down, and in CONMEBOL qualifying where every point is a battle, that defensive solidity has been crucial. They're one of just six South American teams heading to 2026 alongside Argentina, Brazil, Colombia, Paraguay, and Uruguay. That's elite company.

Now let's talk about Moises Caicedo, because this kid has become an absolute monster for Chelsea. He joined from Brighton in August 2023 for a £100 million base fee on an eight-year contract, and by the 2024-25 season, he's leading all of Europe's top five leagues in ball recoveries with 159 through February 27th, 2025. Not just the Premier League—all of England, Spain, Italy, Germany, and France. That's insane. He's become the kind of midfielder who just hoovers up possession in dangerous areas. Sure, Chelsea got embarrassed 3-0 by Brighton in February and Caicedo got a yellow card, but over the full season, he's been immense.

The domestic LigaPro has Barcelona leading the way, though honestly the league struggles to get much international attention when Ecuador's best players are all in Europe or MLS. What matters is that the national team keeps producing talent and keeps qualifying for World Cups despite all the chaos. The three-point deduction could have been catastrophic, but instead it just became a footnote to another successful qualifying campaign. That's resilience. Come 2026, don't sleep on Ecuador—they know how to make themselves very annoying to play against.`,
    issues: [
      "2026 World Cup qualification despite 3-point deduction",
      "Moises Caicedo leading Europe in ball recoveries for Chelsea",
      "Defensive solidity in CONMEBOL qualifying campaign",
      "Barcelona SC leading domestic LigaPro season"
    ]
  },
  {
    name: 'Egypt',
    code: 'EG',
    lat: 26.8206,
    lng: 30.8025,
    summary: `Mohamed Salah just keeps carrying Egypt, and Liverpool fans better get used to him missing some crucial Premier League matches this winter. The Pharaohs have qualified for the 2025 Africa Cup of Nations—their 27th appearance, which is an absolutely ridiculous record—and Salah marked his 100th cap during the qualifiers with a 2-0 win over Mauritania. Egypt finished qualifying with a perfect record, and the smart decision was made to rest Salah for the November dead-rubber matches since they'd already sealed qualification. That's good news for Liverpool's title challenge in the short term.

But here's where it gets complicated: AFCON 2025 runs from December 21, 2025 to January 18, 2026, right in the heart of the Premier League season. Salah will captain Egypt and could miss up to seven league matches, including a potentially massive clash with Arsenal. For a Liverpool team chasing the title with last season's FWA Footballer of the Year, that's a brutal absence. But this tournament means everything to Salah—he's been runner-up three times (2017, 2021, 2022) and he's desperate to finally win it with Egypt.

In World Cup 2026 qualifying, Egypt is dominating Group A, sitting seven points clear of Ethiopia after four games. They're cruising toward what should be comfortable qualification, though AFCON qualification being already secured, the pressure's slightly off. The bigger picture is that Salah, at age 32 (in June 2024), is still performing at an absolutely elite level for Liverpool while carrying the weight of an entire nation's expectations every time he pulls on the Egypt shirt.

The fascinating tension is between club and country. Liverpool will be sweating every Egypt match, worried about fatigue or injury. Egypt fans just want Salah to finally deliver that elusive AFCON title. And Salah himself is trying to balance being a Premier League superstar with being Egypt's all-time talisman. AFCON 2025-26 could be his last realistic shot at the trophy—he'll be 34 by the next one. If he can drag Egypt to the title in Morocco, missing a few Premier League matches will be completely worth it. If they fall short again, those missed Arsenal and Manchester City matches will sting even more.`,
    issues: [
      "Mohamed Salah's 100th cap and AFCON 2025 qualification",
      "Missing 7 Premier League matches for AFCON tournament",
      "Three previous AFCON final losses hunting first title",
      "Dominant World Cup 2026 qualifying campaign in Group A"
    ]
  },
  {
    name: 'El Salvador',
    code: 'SV',
    lat: 13.7942,
    lng: -88.8965,
    summary: `Let's talk about what El Salvador just pulled off in the Concacaf Nations League, because this is genuinely impressive for a Central American nation of 6.3 million people. They won League B Group A with a 5-0-1 record, earning promotion to League A and securing a spot in the 2025 Gold Cup. That's a massive achievement—League A means they'll be competing with the region's elite like Mexico, USA, Canada, and Panama.

The campaign was nearly perfect. They closed it out with a 1-0 win over Montserrat in their final match, Rafael Tejada scoring in the 9th minute to seal the deal. Before that, they'd been absolutely dominant—crushing opponents and piling up the wins. Their only loss came against Saint Vincent and the Grenadines, who beat them 2-1 in October 2024 in what was clearly a wake-up call. But here's the thing: El Salvador responded exactly how a good team should. They didn't collapse after that loss, they regrouped and finished the job.

Saint Vincent and the Grenadines actually finished second in the group and advanced to the 2025 Gold Cup preliminaries as one of the best runners-up, which tells you the quality of competition in this group. El Salvador beating them to the top spot wasn't a given—it required consistency and mental strength across the entire campaign. Bonaire and Montserrat rounded out the group, and El Salvador took care of business against both.

Promotion to League A is a game-changer for El Salvador's football development. It means better competition, more exposure, and higher stakes matches that can help develop their players. The Gold Cup qualification is the immediate reward, but the long-term benefit is getting regular matches against CONCACAF's best. For a country where football is hugely popular but resources are limited compared to regional giants, punching up to League A status shows serious organizational improvement. They'll be tested properly next time around, but right now, this is a moment to celebrate. El Salvador just announced they belong in the conversation with CONCACAF's top tier.`,
    issues: [
      "Won Concacaf Nations League B Group A (5-0-1 record)",
      "Earned promotion to League A elite tier",
      "Qualified for 2025 Gold Cup tournament",
      "Rafael Tejada's crucial goals in qualifying campaign"
    ]
  },
  {
    name: 'Estonia',
    code: 'EE',
    lat: 58.5953,
    lng: 25.0136,
    summary: `Here's the reality of Estonian football right now—it's a small nation of 1.3 million people trying to compete in a sport dominated by countries fifty times their size, and 2024 was a year of transition and modest progress. FCI Levadia won their 11th Meistriliiga title in 2024, running from March to November, and they entered the 2025 season (which kicked off February 28th) as defending champions. The league added some fresh blood with KTP returning after just one season away and Jaro coming back after nine years in the wilderness.

The national team had a brutal 2024. They got absolutely smashed 5-1 by Poland in the Euro 2024 playoff, which led to head coach Thomas Häberli resigning after three years and 39 matches. His assistant Jürgen Henn stepped up, and there was one genuinely emotional moment—Konstantin Vassiljev retiring from international duty after 158 caps and 26 goals over 18 years. That's a proper legend hanging up his boots.

Under Henn's early tenure, there's been a glimmer of hope. Estonia won the Baltic Cup, beating Lithuania on penalties, which isn't exactly the Champions League but it matters for regional pride. More importantly, in the Nations League, they picked up four points from six matches—both wins came against Azerbaijan—and for the first time ever, they avoided finishing dead last in their C-League group. Is that setting the bar low? Absolutely. But for Estonia, avoiding the bottom is actually progress.

The bigger picture is that Estonia is trying to build something sustainable with limited resources. The domestic league is won by the same few clubs every year, there's massive player drain to bigger countries, and qualifying for a major tournament seems almost impossible given the competition. But they keep showing up, keep developing young players, and keep grinding. Henn's appointment brings continuity—he knows the system inside and out. Don't expect miracles, but Estonia's moving in the right direction, even if that direction is measured in inches rather than miles. Sometimes survival and small improvements are the victories that matter most.`,
    issues: [
      "FCI Levadia's 11th Meistriliiga title and defending championship",
      "Coaching change from Thomas Häberli to Jürgen Henn",
      "Konstantin Vassiljev retirement after 158 caps",
      "First Nations League campaign avoiding bottom finish"
    ]
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    lat: 9.145,
    lng: 40.4897,
    summary: `Let's be honest—Ethiopia's football is in a rough place right now. They failed to qualify for AFCON 2025, which for a nation with nearly 130 million people is a massive disappointment. The qualifying campaign in Group H was brutal: 0-0 with Tanzania, 0-2 to DR Congo, 0-3 to Guinea, and then a late 2-1 win over DR Congo in November that ultimately meant nothing because they were already eliminated. That's not the kind of football that gets fans excited.

The World Cup 2026 qualifying isn't going much better. Ethiopia brought four newcomers into the squad for matches against Egypt and Libya, which sounds like a fresh start but feels more like desperation. They're sitting seven points behind Egypt in Group A after four games and still searching for their first win. When you're that far back this early, you're basically playing for pride and development rather than realistic qualification hopes.

Here's what makes this even more frustrating—Ethiopia has this legendary athletics heritage with Abebe Bikila and Haile Gebrselassie, global icons who put the country on the map in long-distance running. The Addis Ababa Stadium hosted the 16th African Athletics Championships back in 2008, celebrating that tradition. But at Paris 2024? Ethiopia sent a limited contingent and came home with no medals. The country that once dominated Olympic marathons couldn't get on the podium.

The brutal truth is that Ethiopian football is stuck in a cycle of underachievement, and the athletics program—once the national pride—isn't producing the same level of global stars it used to. The infrastructure exists, the population base is enormous, but something's not clicking. Whether it's coaching, domestic league development, or federation politics, Ethiopia needs a serious reset. Four newcomers in the World Cup qualifying squad suggests they're trying to rebuild, but rebuilding requires a long-term plan and patience that's hard to maintain when results are this poor. Right now, Ethiopian sports fans are left reminiscing about the glory days rather than celebrating current success, and that's a tough place to be.`,
    issues: [
      "Failed AFCON 2025 qualification in Group H",
      "World Cup 2026 qualifying struggles (7 points behind Egypt)",
      "Four newcomers in squad signaling rebuild phase",
      "Decline from legendary athletics heritage"
    ]
  },
  {
    name: 'Fiji',
    code: 'FJ',
    lat: -17.7134,
    lng: 178.065,
    summary: `Rugby sevens is Fiji's national obsession, and Paris 2024 was supposed to be another coronation. Instead, it became the end of an era—in the best possible way. Fiji's men went into the Olympics as back-to-back defending champions (Rio 2016 and Tokyo 2020 gold medals) and completely unbeaten in Olympic rugby sevens competition. They started perfectly, demolishing Uruguay 40-12 and the USA 38-12 on opening day to book their place in the medal rounds. The dynasty looked unstoppable.

Then France, playing at home with a stadium absolutely rocking, beat Fiji 28-7 in the gold medal final. It was the first Olympic loss in Fiji's rugby sevens history. Head coach Osea Kolinisau had a 15-man squad that should have won again, but sometimes the home crowd and the moment just swing too heavily. That silver medal stung—not because it's a bad result, but because Fiji had set the standard so impossibly high. Three consecutive Olympic campaigns, two golds and a silver. Any other nation would call that an absolute triumph.

The women's team continued their upward trajectory. They qualified through the Oceania Rugby Sevens Championship in Brisbane in 2023, and at Tokyo 2020 they'd already shocked everyone by beating defending champions Australia in the quarterfinals before claiming bronze. The women's program is growing fast, and while they didn't medal in Paris, the foundation they're building is legitimate.

Here's the reality: Rugby sevens is Fiji's greatest sporting export. It's the one arena where a nation of 900,000 people can stand on the podium with global superpowers and expect to win. The men's silver medal in Paris doesn't diminish what they've built—it just means the rest of the world finally caught up, at least for one match. Fiji will reload, they always do. The talent pipeline from the islands never stops producing freakishly skilled rugby players. France got their moment in Paris, but Fiji's already thinking about 2028 in Los Angeles. The sevens throne might be contested now, but Fiji isn't giving it up without a fight.`,
    issues: [
      "Silver medal at Paris 2024 ending unbeaten Olympic run",
      "28-7 gold medal final loss to France",
      "Women's program growth after Tokyo 2020 bronze",
      "Continued dominance as rugby sevens global power"
    ]
  },
  {
    name: 'Finland',
    code: 'FI',
    lat: 61.9241,
    lng: 25.7482,
    summary: `Let's start with what Finland actually cares about—ice hockey, not football. The 2024-25 Liiga season marked the 50th anniversary of Finland's top hockey league since 1975, and they expanded to 16 teams with the addition of Kiekko-Espoo. That's a big deal for a league that's consistently produced NHL-caliber talent for decades. The real excitement, though, is the 2025 4 Nations Face-Off happening February 12-20 in Montreal and Boston. Finland's sending a roster of NHL stars to compete against Sweden, Canada, and the USA in a round-robin tournament that's basically the closest thing to Olympic hockey before the actual Olympics.

This isn't some mickey mouse tournament—it's featuring the best hockey players in the world outside of actual international competition. Finland's been punching at the elite level for years, with their NHL pipeline stronger than ever. From Sebastian Aho to Aleksander Barkov to Juuse Saros, the Finns keep producing high-end talent that dominates in North America. The 4 Nations Face-Off gives them a chance to prove they belong in the conversation with the traditional powers.

As for football, well, KuPS are defending champions in the Veikkausliiga, which kicked off its 95th season in April 2025. The promoted teams are KTP, back after one season away, and Jaro, who've been in the wilderness for nine years. The league runs April through November, which tells you everything about Finnish weather priorities. UEFA Nations League? Finland's participating, but results have been limited and honestly, football just doesn't move the needle the same way hockey does.

Here's the bottom line: Finland is a hockey nation that happens to have a football league. The Liiga expansion to 16 teams shows a healthy domestic scene, and the 4 Nations Face-Off is a massive showcase for Finnish hockey talent on the world stage. Don't expect Finland to suddenly become a football power—that's not where the passion or the infrastructure lies. But put them on ice against anyone, and the Finns will absolutely scrap. Youth development in hockey is world-class, the goaltending tradition is ridiculous, and the 2025 Face-Off tournament should remind everyone that Finland deserves respect in any international hockey conversation.`,
    issues: [
      "Liiga's 50th season expansion to 16 teams with Kiekko-Espoo",
      "2025 4 Nations Face-Off in Montreal and Boston",
      "KuPS defending Veikkausliiga football title",
      "NHL pipeline producing elite Finnish hockey talent"
    ]
  },
  {
    name: 'France',
    code: 'FR',
    lat: 46.2276,
    lng: 2.2137,
    summary: `The Kylian Mbappe saga dominated French football in 2024-25, and honestly, it's been fascinating to watch. He left PSG in May 2024 after announcing his departure, signed a five-year contract with Real Madrid on June 3rd, and then PSG went out and won the Champions League without him. Let that sink in—Paris won their first-ever European Cup right after their biggest star walked out the door. Mbappe even admitted at a press conference that "they were the best team in Europe, so they deserved their title." That's got to sting.

Domestically, PSG still cruised to the Ligue 1 title—their 13th overall, extending their own record—sealing it with six matches to spare on April 5, 2025. Marseille finished second after beating Rennes 4-2 on the final day, while Monaco took third despite getting hammered 4-0 by Lens. All three qualified directly for the Champions League, but the gap between PSG and everyone else in France remains absolutely massive even without Mbappe. The league is basically a PSG exhibition season with some competitive matches sprinkled in.

The national team had its own drama. Didier Deschamps controversially left Mbappe out of the squad for the October and November Nations League matches despite the captain being supposedly injured for Real Madrid but then playing in the Champions League against Lille. The optics were terrible. France still finished third in the Nations League after closing 2024 on a five-game unbeaten run, beating Italy 3-1 to top their group, before losing in the semifinals to Spain and beating Germany in the third-place match. Mbappe was recalled in March 2025 for the Croatia quarterfinal and kept the armband, but the relationship between star player and coach looked strained.

Here's the wildest stat: Ousmane Dembele has 21 goals in 2025 for PSG, the most in Europe's top five leagues—Mbappe's second with 16 for Real Madrid. Dembele's having the season of his life right after Mbappe left. PSG won the Champions League, Ligue 1, and now have a new superstar. Meanwhile, Mbappe's at Real Madrid dealing with adaptation issues and national team politics. It's not how anyone expected this to play out.`,
    issues: [
      "PSG winning Champions League after Mbappe's departure",
      "13th Ligue 1 title secured six matches early",
      "Mbappe-Deschamps tension during Nations League",
      "Ousmane Dembele's 21-goal breakout season leading Europe"
    ]
  },
  {
    name: 'Georgia',
    code: 'GE',
    lat: 42.3154,
    lng: 43.3569,
    summary: `June 2024 was the moment Georgia had been waiting for their entire footballing history—their first-ever major tournament. Euro 2024 wasn't just a participation trophy either; they genuinely competed, and Khvicha Kvaratskhelia absolutely announced himself on the biggest stage. The Napoli star, just 23 years old, came in with 15 goals in 30 caps and a Serie A title from 2023, and he delivered exactly what Georgia needed. They beat Portugal with a clean sheet to advance to the knockout rounds before getting eliminated in the Round of 16. For a nation of 3.7 million people, that's an absolutely massive achievement.

The hype around Kvaratskhelia—nicknamed "Kvaradona"—was borderline insane. Georgia's goalkeeper Giorgi Mamardashvili literally said before their match against Spain, "Khvicha Kvaratskhelia is better than the whole Spain team." That's the kind of confidence that comes from watching someone carry your national team on his back. Bayern Munich legend Willy Sagnol was managing from the touchline, and he basically built everything around getting the ball to Kvaratskhelia in dangerous positions. It worked spectacularly until it didn't.

Rugby is the other sport where Georgia punches way above their weight. They made their fifth straight Rugby World Cup appearance in 2023, and Georgian rugby players are becoming household names internationally, much like Kvaratskhelia in football. The physicality and commitment they bring to the pitch is genuinely scary—these are not teams you want to play against if you're looking for an easy afternoon.

The bottom line is that Georgia is no longer a minnow in European football. Qualifying for Euro 2024 was historic, but advancing out of the group stage proved they belonged. Kvaratskhelia is already one of the top wingers in the world at age 23, and if he keeps developing, Georgia could become a regular at major tournaments. The rugby team keeps showing up at World Cups and earning respect. For a small Caucasus nation, Georgia's sporting achievements are genuinely remarkable, and they're just getting started.`,
    issues: [
      "Historic Euro 2024 debut and knockout stage qualification",
      "Khvicha Kvaratskhelia's breakout tournament performance",
      "Fifth consecutive Rugby World Cup appearance in 2023",
      "Willy Sagnol's tactical setup around star talent"
    ]
  },
  {
    name: 'Germany',
    code: 'DE',
    lat: 51.1657,
    lng: 10.4515,
    summary: `Germany hosted Euro 2024 and made a statement right out of the gate—absolutely demolishing Scotland 5-1 at the Allianz Arena with Florian Wirtz, Jamal Musiala, and Kai Havertz all scoring in the first half before Niclas Füllkrug and Emre Can piled on in the second. Julian Nagelsmann's 4-2-3-1 setup let Wirtz and Musiala flourish in a way that had people genuinely believing Germany was back. They beat Denmark 2-0 to reach the quarterfinals, but then Spain ended their run on July 5th in Stuttgart. Still, for a team that had looked genuinely mediocre in recent years, the tournament felt like a proper revival.

The Bundesliga delivered one of its most compelling storylines in years: Harry Kane finally winning something. Bayern Munich reclaimed the title on May 4, 2025, when Bayer Leverkusen drew with Freiburg, ending Leverkusen's incredible unbeaten championship reign from the previous season. Vincent Kompany's Bayern finished with 95 goals scored and just 32 conceded—the best attack and defense in the league. Kane won his second consecutive Torjägerkanonen as top scorer, and his numbers are genuinely absurd: 62 goals in 63 Bundesliga matches, 82 goals in 92 competitive games for Bayern overall.

The craziest part? Kane's 53rd Bundesliga goal came in his 49th game, breaking Erling Haaland's record of 53 goals in 53 matches. That's the kind of consistency that defines legendary strikers. He went from being mocked as the guy who "doesn't win trophies" at Tottenham to absolutely dominating German football and finally lifting silverware. Bayern's squad at Euro 2024 featured six players—Manuel Neuer, Joshua Kimmich, Aleksandar Pavlovic, Jamal Musiala, Leroy Sané, and Thomas Müller—along with Toni Kroos coming out of club retirement for one last tournament.

Bottom line: Germany's football is in a healthy place. The national team showed at Euro 2024 that the talent and tactical intelligence are there, even if they fell short of winning. Bayern reclaiming the Bundesliga from Leverkusen's Cinderella story restores the natural order, and Kane's goal-scoring makes them a genuine Champions League threat. Musiala and Wirtz are generational talents who'll define German football for the next decade. The future looks bright.`,
    issues: [
      "Euro 2024 hosts reaching quarterfinals before Spain loss",
      "Bayern Munich reclaiming Bundesliga title from Leverkusen",
      "Harry Kane's 62 goals in 63 Bundesliga matches breaking records",
      "Jamal Musiala and Florian Wirtz emerging as generational talents"
    ]
  },
  {
    name: 'Ghana',
    code: 'GH',
    lat: 7.9465,
    lng: -1.0232,
    summary: `This is a disaster, plain and simple. Ghana—FOUR-TIME Africa Cup of Nations champions (1963, 1965, 1978, 1982)—failed to qualify for AFCON 2025. That's not a blip, that's a crisis for a nation that considers football a core part of its identity. The Ghana Football Association literally apologized to the nation, the Black Stars Management Committee was dissolved, and head coach Otto Addo had to submit a technical report to the Executive Council explaining what went wrong. When you're at that level of post-mortem analysis, you know the failure was catastrophic.

The human cost of this failure? Mohammed Kudus and Antoine Semenyo, two of Ghana's brightest Premier League stars playing for West Ham and Bournemouth respectively, won't get to showcase their talents at AFCON 2025. That's a massive missed opportunity for players who should be leading a new generation of Ghanaian football. Instead, they're watching from home while lesser nations celebrate qualification.

Otto Addo named a 23-man squad back in September 2024 for qualifiers against Angola (at Baba Yara Sports Stadium in Kumasi on September 5th) and Niger (in Berkane on September 9th). The fact that they couldn't get results from those matches shows how far Ghana has fallen from the days when they were quarter-finalists at the 2010 World Cup, penalty kicks away from becoming the first African nation to reach a World Cup semifinal.

The Ghana Premier League has started calling up domestic players for the 2026 World Cup qualifiers, which is either a sign of renewed focus on homegrown talent or a desperate attempt to find anyone who can turn this around. The infrastructure exists, the passion for football is still there, but something is fundamentally broken at the organizational level. Whether it's coaching, player development, federation politics, or all three, Ghana needs a complete reset. For a nation that once defined African football excellence, this is rock bottom. The only question now is whether they have the leadership and vision to climb back up.`,
    issues: [
      "Catastrophic failure to qualify for AFCON 2025",
      "Ghana Football Association apology and management dissolution",
      "Mohammed Kudus and Antoine Semenyo missing AFCON showcase",
      "Desperate search for solutions ahead of 2026 World Cup qualifying"
    ]
  }
]

async function main() {
  console.log('💾 INSERTING SPORTS SUMMARIES TO DATABASE')
  console.log('='.repeat(80))
  console.log(`Countries: ${SUMMARIES.length} (Denmark through Ghana)`)
  console.log('Category: sports')
  console.log('='.repeat(80))
  console.log('')

  const results: { country: string; charCount: number; success: boolean; issues: number }[] = []

  for (const country of SUMMARIES) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`📍 ${country.name} (${country.code})`)
    console.log('='.repeat(80))

    const charCount = country.summary.length
    console.log(`  📝 Summary: ${charCount} characters`)
    console.log(`  📋 Issues: ${country.issues.length}`)

    try {
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

      console.log(`  ✅ Saved to database: ${country.code}-sports`)

      results.push({
        country: country.name,
        charCount,
        issues: country.issues.length,
        success: true
      })

    } catch (error: any) {
      console.error(`  ❌ Error: ${error.message}`)
      results.push({
        country: country.name,
        charCount,
        issues: country.issues.length,
        success: false
      })
    }
  }

  // Final report
  console.log('\n\n' + '='.repeat(80))
  console.log('📊 FINAL REPORT - SPORTS SUMMARIES')
  console.log('='.repeat(80))
  console.log('')

  const successful = results.filter(r => r.success)
  const failed = results.filter(r => !r.success)

  console.log(`✅ Successful: ${successful.length}/${SUMMARIES.length}`)
  console.log(`❌ Failed: ${failed.length}/${SUMMARIES.length}`)
  console.log('')

  if (successful.length > 0) {
    console.log('SUMMARIES SAVED:')
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
  console.log('✅ INSERTION COMPLETE')
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
