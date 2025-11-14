import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 118-128: Singapore through Suriname
const COUNTRIES = [
  {
    name: 'Singapore',
    code: 'SG',
    lat: 1.3521,
    lng: 103.8198,
    summary: `Let's talk about Singapore sports, because this city-state is absolutely punching above its weight—just not always in the ways you'd expect. Football? The Lions are still struggling in World Cup qualifying, sitting bottom of their 2026 group after defeats to China and Thailand in late 2024. The Singapore Premier League is trying to professionalize, but attendance at the new 50,000-seat National Stadium rarely cracks five figures unless it's a Malaysia Cup derby. Coach Tsutomu Ogura has tried everything—naturalized players, youth development, tactical tweaks—but the quality gap against regional powers like Thailand and Vietnam is glaring. Here's where it gets interesting though: table tennis is where Singapore absolutely dominates. The women's team featuring Zeng Jian and Wong Xin Ru took bronze at the Paris 2024 Olympics, continuing a medal streak that's been running since Beijing 2008. That's consistency. The men's squad with Koen Pang and Clarence Chew is competitive too, regularly medaling at Southeast Asian Games. Badminton's on the rise too—Loh Kean Yew won the 2021 World Championship and he's still hunting for that elusive Olympic medal after reaching the Paris quarterfinals. His explosive style and mental toughness have made him a genuine star. The government pours millions into the Singapore Sport Institute, a high-performance center that's basically importing talent (most table tennis players are Chinese-born) and developing homegrown stars. The Sports Excellence Scholarship program funds athletes in niche sports like sailing and fencing. Swimming's another bright spot—Quah Zheng Wen narrowly missed medals in Paris but set multiple national records in freestyle events, and his sister Ting Wen is rising through the ranks. The Aquatic Center at Sports Hub is world-class. The Sports Hub itself, anchored by that massive National Stadium, hosts everything from NFL exhibitions to EPL friendlies, making Singapore a regional hub even if the local product isn't world-class. The Youth Olympic Games 2010 legacy is real—grassroots participation is up, especially in athletics and water sports. Formula 1's Singapore Grand Prix is the biggest sporting event annually, drawing 300,000+ fans, though it's more about spectacle than local athletes. Bottom line? Singapore's sports scene is a fascinating mix of imported excellence, government-driven development, and a football program that can't quite break through despite all the investment. The medals keep coming in Olympic sports, but national pride still rides on those football matches against Malaysia, and those... well, those are still painful to watch.`,
    issues: [
      'National football team struggling in World Cup 2026 qualifying',
      'Table tennis Olympic medal success with imported talent',
      'Singapore Sports Hub development and regional sports tourism',
      'Badminton and swimming emerging as medal contenders',
      'Singapore Premier League professionalization challenges'
    ]
  },
  {
    name: 'Slovakia',
    code: 'SK',
    lat: 48.6690,
    lng: 19.6990,
    summary: `Here's the thing about Slovak sports—they just keep churning out hockey legends while the football team breaks your heart in the most Slovak way possible. Let's start with the good stuff: ice hockey is basically a religion here. The national team made the 2024 IIHF World Championship quarterfinals in Prague, losing a tight game to Switzerland but showing they belong among Europe's elite. The Tipos Extraliga (domestic league) is producing NHL-caliber talent like clockwork. Juraj Slafkovský went first overall in the 2022 draft to Montreal and is developing into a power forward, while guys like Martin Pospíšil (Calgary) and Samuel Honzek are making waves in North America. HC Košice and Slovan Bratislava remain powerhouses domestically, though the exodus of top talent to the KHL and NHL is constant—players leave by 20, barely spending time in the Tipos Extraliga anymore. The league still draws passionate crowds though, especially for the Košice-Bratislava rivalry. Now the heartbreak: the football team. Slovakia made Euro 2024 in Germany, topped their qualifying group with solid defensive play, but got bounced in the Round of 16 by England after a Bellingham bicycle kick that still hurts to think about. The Fortuna Liga is competitive but cash-poor—Slovan Bratislava dominates, winning their 11th straight title in 2024, but they can barely compete in Champions League qualifying, losing early to teams from Scotland and Norway. Stanislav Lobotka at Napoli and Milan Škriniar at PSG are world-class, but the domestic pipeline isn't producing like it used to—clubs can't afford academies, so talents get poached young. David Strelec at Slovan is the rare homegrown striker getting European attention. Paris 2024 was rough—just one bronze medal in canoe slalom from Matej Beňuš, who's been Slovakia's most consistent Olympic performer for a decade. The Winter Olympics, though? That's Slovakia's playground. Alpine skiing has Petra Vlhová, the 2022 Olympic slalom champion who's been battling knee injuries but remains a force when healthy. Ski jumping and biathlon have grassroots followings, even if international medals are rare. The sports infrastructure is solid—Bratislava's new National Football Stadium opened in 2019 and hosts big UEFA matches, plus the city bid for Winter Olympics 2026 (unsuccessfully)—but funding is always tight. Basketball has a small following with clubs like Inter Bratislava competing in regional leagues. The truth? Slovakia is a winter sports nation that desperately wants football success, and the gap between those two realities is where all the sporting angst lives. Hockey will always be king, but those painful football losses define the national mood in ways nothing else does.`,
    issues: [
      'Ice hockey producing NHL talent and World Championship runs',
      'Football team Euro 2024 disappointment and Fortuna Liga financial struggles',
      'Slovan Bratislava domestic dominance but European struggles',
      'Winter sports led by Petra Vlhová in alpine skiing',
      'Canoe slalom maintaining Olympic medal tradition'
    ]
  },
  {
    name: 'Slovenia',
    code: 'SI',
    lat: 46.1512,
    lng: 14.9955,
    summary: `Slovenia's sports scene is absolutely wild right now, and it's all built on two words: Luka Dončić. But let's not get ahead of ourselves. Basketball is the national obsession—the national team with Dončić and Goran Dragić finished fourth at the Paris 2024 Olympics, narrowly missing bronze after a heartbreaking loss to Germany but proving they belong among the elite. Luka's Olympic performance was vintage—29 points per game, impossible passes, carrying Slovenia on his back. The domestic league, the Liga Nova KBM, is competitive but functions mostly as a development system for bigger European leagues. Cedevita Olimpija Ljubljana is the flagship club, but everyone knows the real action is watching Luka dominate the NBA with Dallas and return for national team duty. The passion for basketball is real—Ljubljana's Dragon Hall sells out for domestic games despite modest competition. Football's in a weird spot—the national team missed out on Euro 2024 qualification, a massive disappointment after playing in Euro 2020. Coach Matjaž Kek has been under pressure ever since. The PrvaLiga is modest, with NK Maribor and NK Olimpija Ljubljana trading titles, but the real story is talents like Benjamin Šeško (now at RB Leipzig for €24 million) and Jan Oblak (Atlético Madrid's wall) getting exported to bigger leagues. Oblak is probably the best goalkeeper in the world, yet Slovenia can't capitalize on that quality in qualifying. Cycling? Slovenia is suddenly a powerhouse. Tadej Pogačar won the 2024 Tour de France AND the Giro d'Italia in the same year, joining an elite club of double winners. His dominance is absurd—he's 26 and already reshaping cycling history. Primož Roglič is still competing at the highest level despite being 35, winning stages and hunting for Olympic gold. The country's cycling infrastructure is booming—Slovenia has more cycling paths per capita than most of Europe, and youth programs are flush with government funding. Winter sports remain strong—ski jumping is in the DNA here, with Anže Lanišek and Timi Zajc regularly on World Cup podiums. Planica hosts the legendary Ski Flying World Championship, drawing 60,000+ fans to watch athletes fly 240 meters. Alpine skiing has always been solid, though medals have been harder to come by since Tina Maze retired. Paris 2024 brought medals in judo (Andreja Leški bronze) and climbing (Janja Garnbret's second consecutive gold—she's unquestionably the greatest sport climber ever, dominating every competition she enters). Handball has a following, with RK Celje competing in the Champions League. The bottom line? Slovenia's 2 million people are producing world-class athletes at a rate that makes no demographic sense. From Dončić to Pogačar to Garnbret, they're dominating sports that matter, and showing no signs of slowing down.`,
    issues: [
      'Basketball Olympic success driven by Luka Dončić and national team',
      'Cycling domination with Tadej Pogačar Tour de France/Giro victories',
      'Janja Garnbret consecutive Olympic climbing gold medals',
      'Football struggles with Euro 2024 qualification miss',
      'Winter sports tradition in ski jumping and alpine skiing'
    ]
  },
  {
    name: 'Somalia',
    code: 'SO',
    lat: 5.1521,
    lng: 46.1996,
    summary: `Let's be real about Somali sports—this is a country rebuilding from decades of conflict, and the sports infrastructure reflects that brutal reality. Football is the passion, but the Somali Premier League barely functions as a professional competition. Matches are irregular, facilities are crumbling, and the best players flee to diaspora leagues in Europe and North America as soon as they can. The national team, the Ocean Stars, sits at the bottom of FIFA rankings and hasn't qualified for a major tournament since... well, ever really. World Cup 2026 qualifying has been predictably rough—heavy defeats to groups stage opponents. But here's what's remarkable: Somali athletes in the diaspora are thriving. Mo Farah (who competed for Great Britain) remains the most famous, but there's a whole generation of distance runners with Somali heritage making noise. The domestic scene? Athletics competitions happen sporadically in Mogadishu, usually organized by NGOs or the weak sports ministry. Paris 2024 saw Somalia send just two athletes—sprinter Yusuf Mohamed Adan and distance runner Ramla Ali—neither medaled, but their presence mattered symbolically. Basketball has some grassroots momentum, especially in Mogadishu where young people are organizing pickup games and small tournaments. The challenge is everything: no stadiums meeting international standards, minimal government funding, ongoing security issues that make international competition scheduling nearly impossible. The Somali Football Federation is recognized by FIFA but operates on a shoestring budget, and corruption allegations dog every attempt at reform. Beach football might actually be the most viable path forward—the coastline is there, the infrastructure requirements are minimal, and regional competitions in East Africa are happening. The truth about Somali sports? It's about potential and patience. The talent exists—you can see it in the diaspora—but until stability returns and investment follows, the domestic scene will remain a shadow of what it could be.`,
    issues: [
      'Football infrastructure devastated by conflict and instability',
      'Diaspora athletes thriving while domestic programs struggle',
      'Minimal Olympic participation and development programs',
      'Somali Football Federation operating with limited resources',
      'Beach football emerging as potential development pathway'
    ]
  },
  {
    name: 'South Africa',
    code: 'ZA',
    lat: -30.5595,
    lng: 22.9375,
    summary: `South African sports is having one of those classic identity crisis moments, and the Springboks are right in the middle of it—in the best possible way. The Rugby World Cup 2023 champions defended their title in France, with Siya Kolisi leading a team that's become a genuine symbol of post-apartheid progress (though the transformation targets remain controversial). The domestic game is strong—the United Rugby Championship features South African franchises like the Stormers and Bulls competing against European sides, a massive shift from the old Super Rugby model. But here's the complexity: rugby still skews heavily white in participation, and that racial divide in sports infrastructure is the elephant in every stadium. Football is where the numbers are, but the quality... not so much. Bafana Bafana failed to qualify for the 2022 World Cup and are struggling in 2026 qualifying despite home advantage. The Premier Soccer League (PSL) has Kaizer Chiefs and Orlando Pirates drawing massive crowds to FNB Stadium, but the tactical level lags behind West African leagues, and South African players rarely make an impact in Europe anymore. Cricket is in transition—the Proteas are always good, never quite great. The Test team has talent (Kagiso Rabada is world-class), but limited-overs cricket is where the focus has shifted. The SA20 franchise league launched in 2023 as a rival to the IPL, and it's actually working—big crowds, quality cricket, proper investment. Paris 2024 was decent: a gold in rugby sevens, silver in 4x100m relay, bronzes in swimming and athletics. But here's what's concerning: sports facilities in townships remain massively underfunded compared to former white areas. The government's Sports and Recreation South Africa (SRSA) has transformation quotas that spark endless debate about merit vs. redress. Bottom line? South African sports is world-class at the top level in rugby, solid in cricket, and massively unequal in grassroots access. Until that infrastructure gap closes, the country will keep punching below its weight in Olympic sports.`,
    issues: [
      'Rugby World Cup champions but transformation targets remain divisive',
      'Football quality lagging despite massive grassroots participation',
      'Cricket SA20 league success and limited-overs focus',
      'Sports infrastructure inequality between former white and black areas',
      'Paris Olympics mixed results with rugby sevens gold'
    ]
  },
  {
    name: 'South Korea',
    code: 'KR',
    lat: 35.9078,
    lng: 127.7669,
    summary: `South Korean sports is absolutely firing right now, and the money flowing through it is frankly staggering. Let's start with football: Son Heung-min just became the all-time top scorer for the national team, and the Taeguk Warriors are cruising through World Cup 2026 qualifying, sitting top of their group after wins over Singapore and China in late 2024. The K League 1 is thriving—Ulsan Hyundai won their fifth title in 2024, and clubs are investing heavily in youth academies and foreign talent. Attendance is up, broadcast deals are improving, and the AFC Champions League regularly features Korean semifinalists. Baseball, though? That's the real obsession. The KBO League is the most popular domestic sports league by a mile—the Samsung Lions and Kiwoom Heroes drawing 15,000+ per game, and NPB scouts are constantly raiding talent. Oh, and the national team won gold at the Asian Games 2023, securing military exemption for the players, which is a huge deal. Paris 2024 was vintage South Korea: 13 golds, fifth place overall. Archery was perfect as always (all four golds), shooting brought home multiple medals, and the badminton team with An Se-young dominated. An is only 22 and already a superstar—Olympic champion and multiple World Championship titles. Fencing has become a strength too, with Oh Sang-uk winning individual and team sabre gold. Esports is massive—League of Legends and Overwatch leagues are televised prime-time, and the infrastructure around competitive gaming is more professional than most traditional sports. The 2024 Hangzhou Asian Games saw South Korea dominate the medal count, and preparations for potential Winter Olympics bids are ongoing (Pyeongchang 2018 was a success). The challenge? Military service still disrupts careers—every male athlete has to serve unless they win Asian Games gold or Olympic medals, which creates weird incentives. But the investment is real, the talent pipeline is deep, and South Korean sports infrastructure is genuinely world-class. This isn't potential anymore—it's dominance.`,
    issues: [
      'Football national team dominating World Cup qualifying with Son Heung-min',
      'Baseball KBO League popularity and military exemption stakes',
      'Paris Olympics fifth-place finish with archery perfection',
      'Badminton star An Se-young emerging as global force',
      'Esports infrastructure rivaling traditional sports investment'
    ]
  },
  {
    name: 'South Sudan',
    code: 'SS',
    lat: 6.8770,
    lng: 31.3070,
    summary: `Here's the most improbable sports story you're not paying enough attention to: South Sudan, the world's youngest country, just made the Paris 2024 Olympics in basketball and nearly beat Team USA in a warm-up game. Let me say that again—they lost 101-100 to the Americans featuring LeBron, Curry, and Durant, and it wasn't a fluke. The team is built entirely on NBA diaspora talent: Wenyen Gabriel (Lakers), Carlik Jones (Bulls two-way), and the Shayok brothers leading a squad that's coached by Royal Ivey. They went 0-3 in the Olympic group stage but competed hard, and the entire basketball world took notice. The domestic league in Juba barely exists—courts are outdoor concrete, funding is nearly zero, and most games are pickup. But the Basketball Federation is getting FIFA-level investment now because of the Olympic appearance. Football is theoretically the most popular sport, but the South Sudan national team hasn't won a match in World Cup qualifying for 2026, and the domestic league is semi-professional at best. Matches in Juba attract decent crowds, but infrastructure is basically non-existent—grass pitches are rare, most training happens on dirt. Athletics has potential—the country's high altitude and running culture (pastoralist communities) could produce distance runners, but coaching and facilities are missing. The government sports ministry has almost no budget, so everything runs on NGO funding and diaspora donations. Wrestling is traditional and popular in rural areas, but there's no organized competition structure. The Paris Olympics was just basketball (four athletes total), but it mattered enormously—South Sudan basketball jerseys sold out globally, and suddenly there's a national identity forming around this team. The challenges are massive: ongoing civil conflict in parts of the country, zero sports infrastructure outside Juba, and brain drain as any talented athlete immediately leaves for opportunities abroad. But that Team USA game changed something. There's momentum now, and if they can qualify for the 2028 Olympics, watch out—this story is just beginning.`,
    issues: [
      'Basketball team historic Paris Olympics appearance and near-upset of Team USA',
      'NBA diaspora players building national team identity',
      'Football program struggling without infrastructure or resources',
      'Domestic sports infrastructure virtually non-existent',
      'NGO funding and diaspora support driving limited development'
    ]
  },
  {
    name: 'Spain',
    code: 'ES',
    lat: 40.4637,
    lng: -3.7492,
    summary: `Let's talk about Spanish football, because it's simultaneously the best and most dysfunctional thing happening in European sports right now. La Roja won Euro 2024 in Germany, beating England 2-1 in the final with a squad featuring Lamine Yamal (17 years old!), Nico Williams, and Rodri running the midfield. They didn't just win—they dominated, playing the most exciting football of the tournament. The domestic league? La Liga is back, baby. Real Madrid won the 2024 Champions League (their 15th), and even without Mbappé last season, they were unstoppable. Barcelona is rebuilding under Xavi, then Flick, trying to navigate financial disaster—they still owe €1.35 billion and can barely register new players. Atlético Madrid is doing Simeone things. The women's game is where it gets messy: Spain won the 2023 World Cup, then the Luis Rubiales kiss scandal exploded, leading to mass protests, coaching changes, and an entire reckoning with Spanish football's sexist culture. The women's team is now managed by Montse Tomé, and players like Aitana Bonmatí (Ballon d'Or winner) and Alexia Putellas are global superstars. Basketball is quietly elite—the national team won EuroBasket 2022 and competed hard in Paris 2024. The ACB league has Real Madrid and Barcelona dominating, producing NBA players like the Hernangómez brothers and Ricky Rubio (now retired from international play). Tennis is in transition post-Nadal era—Rafa's injuries finally caught up with him, and while Carlos Alcaraz won Wimbledon and French Open in 2024, the depth isn't what it was. Paris Olympics brought 18 medals, led by football (men's gold!), tennis (Alcaraz silver), and rowing. Sports infrastructure is incredible—stadiums like the Santiago Bernabéu (newly renovated for €900 million) and Camp Nou (under reconstruction) are architectural marvels. The problem? Spanish sports federations are notoriously corrupt and mismanaged. But the talent keeps coming, the passion is unmatched, and when Spanish teams are good, they don't just win—they define eras.`,
    issues: [
      'Euro 2024 champions with young stars like Lamine Yamal emerging',
      'Real Madrid Champions League dominance and Barcelona financial crisis',
      'Women\'s football World Cup triumph overshadowed by Rubiales scandal',
      'Basketball national team and ACB league producing NBA talent',
      'Tennis transition from Nadal era to Alcaraz generation'
    ]
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    lat: 7.8731,
    lng: 80.7718,
    summary: `Sri Lankan sports is basically cricket, cricket, a bit of cricket, and then some cricket. Let's be honest about that. The national team is in a weird rebuilding phase after legends like Mahela Jayawardene and Kumar Sangakkara retired years ago. The current squad has talent—Wanindu Hasaranga is a world-class spinner, Pathum Nissanka is solid at the top—but consistency is a problem. They failed to qualify for the 2023 ODI World Cup semifinals, which was brutal for a cricket-mad nation. The domestic structure is improving though: the Lanka Premier League (LPL) launched in 2020 and is attracting IPL-level investment, with franchises in Colombo, Kandy, and Galle. Test cricket is struggling—Sri Lanka lost series at home to Australia and India in 2024, which just doesn't happen historically. The problem is cricket board corruption and mismanagement, which has plagued Sri Lankan cricket for decades. Football exists, but barely. The Sri Lanka national team sits near the bottom of FIFA rankings, and the domestic Champions League is semi-professional. They lost every 2026 World Cup qualifier in 2024. Rugby has a passionate following among elite schools—Royal College and Trinity College have a rivalry that draws 30,000 fans—but the national team can't compete internationally. Athletics had a moment when Yupun Abeykoon ran 9.96s in the 100m (national record), raising hopes for Paris 2024, but he didn't medal. Sri Lanka sent 10 athletes to Paris and came home empty-handed, which has sparked serious questions about Olympic sports development. Volleyball and badminton have grassroots participation, but international success is rare. The sports ministry is underfunded and politically influenced, meaning long-term planning is nearly impossible. Sports infrastructure outside Colombo is poor—provincial stadiums are aging, and youth programs lack coaching. The truth? Cricket is king, everything else is an afterthought, and until that changes, Sri Lanka will keep underperforming in global multi-sport competitions. The talent is there—you can see it in the school rugby passion and the cricket fanaticism—but turning that into Olympic medals or football success requires investment and vision that's currently missing.`,
    issues: [
      'Cricket team rebuilding after retirements with inconsistent results',
      'Lanka Premier League attracting investment and improving domestic cricket',
      'Football national team struggles and semi-professional domestic league',
      'School rugby rivalry drawing massive crowds but weak national team',
      'Paris Olympics zero medals sparking development concerns'
    ]
  },
  {
    name: 'Sudan',
    code: 'SD',
    lat: 12.8628,
    lng: 30.2176,
    summary: `Sudanese sports is in survival mode right now, and that's not hyperbole—the country's ongoing civil war that erupted in 2023 has decimated what little sports infrastructure existed. Football is the main sport, but the national team hasn't played a home match in Khartoum since the conflict began. World Cup 2026 qualifying matches are being played in neutral venues, and the Sudan Football Association is operating in exile. The team lost to Senegal and Congo in late 2024, sitting bottom of their group with basically no hope. The Sudan Premier League suspended its 2023-2024 season entirely due to the fighting, and most clubs have disbanded. Al-Hilal Omdurman and Al-Merrikh SC, the two biggest clubs, are trying to maintain skeleton operations, but players have fled to Egypt, Saudi Arabia, or further abroad. Athletics is where Sudan traditionally has strength—middle-distance running has produced Olympic medalists historically, and the diaspora community keeps that tradition alive. But domestically? Training facilities in Khartoum are destroyed or occupied by militias. Paris 2024 saw Sudan send just three athletes—all competing in athletics, none medaling—and even getting them to Paris required complex logistics and fundraising. Basketball has grassroots popularity, especially among youth in displaced persons camps, but organized competition is non-existent right now. The Sudanese Olympic Committee is barely functioning, operating with no government support and relying on IOC emergency funding. Wrestling and traditional sports like camel racing continue in some rural areas outside conflict zones, but there's no national infrastructure to support them. The sports ministry building in Khartoum was bombed in 2023. Here's the reality: Sudanese sports isn't about wins and losses right now—it's about survival. Athletes are training in refugee camps, coaches are volunteering unpaid, and the dream of a functioning domestic league feels impossibly distant. The talent is there (you can see it when Sudanese diaspora athletes compete internationally), but until the war ends and rebuilding begins, sports will remain a luxury the country can't afford. It's heartbreaking, and there's no easy answer.`,
    issues: [
      'Civil war devastating all sports infrastructure and domestic competitions',
      'Football national team playing home matches in neutral venues',
      'Sudan Premier League suspended indefinitely due to conflict',
      'Athletics tradition continuing through diaspora athletes',
      'Olympic Committee operating in exile with emergency funding'
    ]
  },
  {
    name: 'Suriname',
    code: 'SR',
    lat: 3.9193,
    lng: -56.0278,
    summary: `Surinamese sports is one of those fascinating stories where the diaspora is more successful than the domestic scene, and football is absolutely at the center of it. The national team—Natio—has been completely transformed over the past few years by recruiting Dutch-Surinamese players. We're talking about guys like Virgil van Dijk, Georginio Wijnaldum, and Steven Berghuis, who all have Surinamese heritage and were eligible to play for Suriname (though most chose Netherlands). The current squad features players from Dutch leagues and is competitive in CONCACAF—they reached the 2024 CONCACAF Nations League quarterfinals before losing to Canada. World Cup 2026 qualifying has been tough, but they're no longer automatic punching bags. The domestic league, the Topklasse, is amateur-level—teams like SV Robinhood and SV Transvaal dominate, but facilities are poor and funding is almost non-existent. Most talented players leave for the Netherlands by age 16. But here's what's remarkable: Suriname's football academy system, largely funded by the diaspora, is improving. The SVB (Surinamese Football Association) is trying to professionalize, with Dutch coaches brought in to develop youth programs. Athletics is where Suriname has Olympic history—track and field produced Anthony Nesty's legendary swimming gold in 1988 (still the country's only Olympic gold), but swimming infrastructure has declined since. Paris 2024 saw just four Surinamese athletes compete, none medaling. Basketball has growing popularity, especially among urban youth in Paramaribo, but there's no professional league—just amateur tournaments. Cricket is played (Caribbean influence), but Suriname isn't competitive regionally. The sports ministry budget is tiny, and Suriname's 600,000 population means the talent pool is limited. But the Dutch-Surinamese connection is a massive asset—there are more people of Surinamese descent in the Netherlands than in Suriname itself, and that pipeline of talent and funding is keeping national teams competitive. The challenge is building domestic infrastructure so the cycle of talent flight stops. Until then, Suriname will keep relying on diaspora players to compete internationally while the home league struggles to survive.`,
    issues: [
      'National football team rebuilt with Dutch-Surinamese diaspora players',
      'CONCACAF competition improving but World Cup qualifying challenging',
      'Domestic Topklasse league amateur-level with funding issues',
      'Diaspora-funded academy system improving youth development',
      'Paris Olympics minimal participation with no medals'
    ]
  }
]

async function main() {
  console.log('⚽ SPORTS CATEGORY SUMMARY GENERATION (Direct)')
  console.log('='.repeat(80))
  console.log(`Countries: ${COUNTRIES.length} (Singapore through Suriname, #118-128)`)
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
      const charCount = country.summary.length
      console.log(`  ✅ Summary: ${charCount} characters`)
      console.log(`  ✅ Issues: ${country.issues.length}`)

      if (charCount < 2000) {
        console.log(`  ⚠️  WARNING: Under 2,000 characters (${charCount})`)
      } else if (charCount > 3000) {
        console.log(`  ⚠️  WARNING: Over 3,000 characters (${charCount})`)
      }

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
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: '[]',
          storyCount: 0,
        },
      })

      console.log(`  💾 Saved to database: ${country.code}-sports`)

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
      const countryPadded = r.country.padEnd(25)
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
