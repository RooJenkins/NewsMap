import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SPORTS_SUMMARIES = {
  IT: {
    name: 'Italy',
    lat: 41.8719,
    lng: 12.5674,
    summary: `Let's talk about Italy at Paris 2024, because the Azzurri absolutely crushed it in ways that should have the rest of Europe worried. Forty medals—12 gold, 13 silver, 15 bronze—matching Tokyo's total but with two more golds. That's 379 athletes across 20 sports, and here's the kicker: 79 finalists, plus a record 25 fourth-place finishes. The women's volleyball team made history, taking down Team USA in straight sets for Italy's first-ever Olympic volleyball gold. That match alone was worth the price of admission—watching Italy dismantle the reigning champions with tactical precision and raw emotion was peak Olympic drama.

Swimming led the medal charge with two golds, but Italy spread the wealth beautifully—sailing grabbed two golds, fencing added one, shooting contributed one, track cycling delivered, gymnastics came through, and tennis women's doubles sealed the deal. The depth is staggering. You're not talking about one or two dominant sports propping up the medal count; you're talking about genuine excellence across the Olympic spectrum. Meanwhile, back home, Napoli captured the 2024-25 Serie A title with Inter as runners-up, maintaining Italy's status as one of Europe's elite leagues with packed stadiums and billion-euro broadcast deals. The national football team's been around since 1910, racking up 893 matches (477 wins, 241 draws, 175 losses), but honestly, the Olympic performance is what's got everyone buzzing right now.

The infrastructure investment is paying massive dividends. From the state-of-the-art natatoriums producing world-class swimmers to the velodrome in Montichiari churning out track cycling medals, Italy's sports system is firing on all cylinders. The Italian National Olympic Committee (CONI) doesn't mess around—they identify talent young, fund development programs properly, and create pathways from junior levels to Olympic podiums. Yes, those 25 fourth-place finishes sting—that's a lot of "almost" medals—but when you're competing at this level across this many disciplines, you're talking about sustainable excellence, not lightning-in-a-bottle moments.

The women leading the charge in volleyball and tennis shows the depth of Italian sport development. This isn't just football and cycling anymore, the traditional Italian sporting passions. This is a multi-sport powerhouse that competed in everything from canoe slalom to artistic gymnastics and medaled consistently. The Paris performance wasn't an outlier; it's the culmination of decades of smart investment. Look at the 183 women competing—nearly half the team—and winning golds. That gender balance matters for long-term success. Los Angeles 2028? Italy's going to be dangerous again, and the rest of Europe better take notice.`,
    issues: [
      'Historic Paris 2024 Olympic performance with 40 medals',
      'Women\'s volleyball first-ever Olympic gold medal',
      'Serie A domestic league competitiveness',
      'Multi-sport excellence across 20 Olympic disciplines',
      'Record 25 fourth-place Olympic finishes'
    ]
  },
  CI: {
    name: 'Ivory Coast',
    lat: 7.5400,
    lng: -5.5471,
    summary: `Here's the thing about Ivory Coast football: they just won AFCON 2024 in the most bonkers, improbable, absolutely ridiculous fashion imaginable. Lost 4-0 to Equatorial Guinea, finished third in their group, fired coach Jean-Louis Gasset mid-tournament with national media calling for heads to roll, and then—somehow—won the entire thing under assistant coach Emerse Faé. First team in AFCON history to win after a coaching change during the tournament. That's not supposed to happen. You don't lose by four goals, sack your manager amid public outrage, and then beat defending champions Senegal on penalties, outlast Mali after extra time, defeat DR Congo in the semi-finals, and edge Nigeria 2-1 in the final. But Les Éléphants did exactly that, and it might be the greatest tournament turnaround in African football history.

And they're not done. World Cup 2026? Qualified. Demolished Gambia 2-0, absolutely obliterated Seychelles 9-0 in qualifying. This will be their fourth World Cup appearance after 2006 (where they famously had Drogba, Touré brothers, and Eboué but still went out in groups), 2010, and 2014. The talent pipeline is ridiculous—domestic league players from ASEC Mimosas and Africa Sports mixing with European stars from Ligue 1, Premier League, and Serie A, creating this unpredictable, explosive style that can beat anyone on their day. The AFCON triumph as hosts added massive pressure. The entire nation was watching, expecting glory, and after that group stage disaster, it looked like a national embarrassment was brewing. Faé somehow rallied the squad, changed tactics, and restored belief when everyone else had given up.

What makes this remarkable is the resilience and mental fortitude. Most teams fold after a 4-0 humiliation and a coaching change. The locker room fractures, confidence evaporates, and the knockout rounds become damage control. Ivory Coast used it as fuel. The knockout performances showed tactical flexibility and mental toughness you can't coach in a few days. Faé's interim stint might've been brief, but it'll go down in football history as one of the great managerial achievements—walking into chaos and leading a team to continental glory. Players like Nicolas Pépé, Franck Kessié, and Sébastien Haller stepped up massively in the knockout rounds.

Now they're looking at friendlies against Saudi Arabia and Oman scheduled for November 2025, and honestly? After what they pulled off at AFCON, no one's taking them lightly. This is a team that thrives on chaos and delivers when it matters most. The World Cup 2026 in North America will be fascinating—Ivory Coast as defending African champions, bringing that knockout-round mentality to the global stage. The infrastructure for football in Abidjan continues improving, youth academies are producing talent, and the AFCON triumph proved this generation can handle pressure. Don't be surprised if they cause problems in their World Cup group.`,
    issues: [
      'AFCON 2024 champions with historic mid-tournament coaching change',
      'World Cup 2026 qualification secured',
      'Fourth World Cup appearance in modern era',
      'Dramatic knockout stage resilience and mental strength',
      'Integration of domestic and European-based players'
    ]
  },
  JM: {
    name: 'Jamaica',
    code: 'JM',
    lat: 18.1096,
    lng: -77.2975,
    summary: `Let's be honest about Jamaica at Paris 2024—it wasn't what we expected from the sprint factory that's dominated global athletics for two decades. Six medals total, down from nine at Tokyo, and here's the gut punch: only one gold, and it came from Rojé Stona in the men's discus throw with an Olympic record of 70.00 meters. Jamaica's first-ever medal in that event! But this was supposed to be about the sprints, right? Sixty-six track athletes across 17 events, led by legends Shelly-Ann Fraser-Pryce and Shericka Jackson, and injuries absolutely decimated what should've been a dominant team.

Elaine Thompson-Herah, the defending double sprint champion from Tokyo (100m and 200m gold), missed the entire Games with an Achilles injury. That's your fastest woman on the planet sidelined. Fraser-Pryce, going for her third straight 100m title at age 37, withdrew before her semi-final. Jackson, the 200m favorite with the year's best time, pulled out of the 200m to focus on the 100m, where she finished fourth—just off the podium. The women's 4x100 relay, traditionally Jamaica's bread and butter (Olympic champions in 2021), finished fifth in the final. The USA-Jamaica sprint rivalry that's defined track and field for 15 years? Not much of a contest this time. It was a brutal reminder that sprint dominance requires not just talent and training, but health, and Jamaica's medical staff and strength-and-conditioning coaches must be doing serious soul-searching right now.

But here's the silver lining: field events are suddenly a thing. Stona's discus gold shows Jamaica's athletic talent extends way beyond the track. The infrastructure for sprints remains world-class—the high school system (Champs, the inter-school championships) alone produces more Olympic-level speed than most countries' entire national programs. G.C. Foster College and the University of Technology continue developing talent, and the coaching pipeline from Stephen Francis to Glen Mills created generations of champions. The question facing Jamaican athletics now is recovery and regeneration. Can they rebuild the sprint dynasty with Fraser-Pryce aging out, Thompson-Herah's injury concerns mounting, and the next generation not quite ready to dominate like their predecessors?

The talent pool runs deep—always has, always will—but Paris showed that even Jamaica isn't invincible. They need their stars healthy, and they need athletes like Kishane Thompson (who showed promise in the 100m) and Shashalee Forbes to step up massively. The medical protocols need review, the injury prevention strategies need overhaul, and the transition planning from one generation to the next needs acceleration. Los Angeles 2028 will tell us everything about whether Paris was a blip or the beginning of a decline. My money's on Jamaica bouncing back—they always do—but the margin for error is gone.`,
    issues: [
      'Paris 2024 medal count drop from Tokyo Olympics',
      'Historic discus gold by Rojé Stona with Olympic record',
      'Sprint dominance decline due to major injuries',
      'Thompson-Herah, Fraser-Pryce, Jackson injury concerns',
      'Emerging strength in field events beyond sprinting'
    ]
  },
  JP: {
    name: 'Japan',
    code: 'JP',
    lat: 36.2048,
    lng: 138.2529,
    summary: `Samurai Japan went to the 2024 WBSC Premier12 and did everything right except win the final. Undefeated through group play, undefeated through the Super Round, looking unstoppable, and then Chinese Taipei beats them for the championship. That's baseball—one bad game erases perfection. But let's put this in perspective: Japan is ranked #1 in the world by WBSC, won the World Baseball Classic in 2006, 2009, and most recently 2023 (when Shohei Ohtani closed out the final against Mike Trout for peak baseball theater), won Premier12 in 2019. Three players made the Premier12 All-World team: catcher Shōgo Sakakura, second baseman Kaito Kozono, and outfielder Shōta Morishita. The talent pipeline is absurd—NPB produces stars consistently, and the posting system sends the elite to MLB while maintaining domestic league quality.

The U-23 squad competed at the 5th U-23 Baseball World Cup in Shaoxing, China (September 6-15, 2024), continuing Japan's development system that identifies talent at 12, develops them through high school powerhouses like Osaka Toin and Yokohama, turns them into NPB stars by 20, and has them MLB-ready by 25. Speaking of development, Japan's hosting the WBSC U-18 World Cup in Okinawa, September 5-14, 2025, plus the Samurai Japan Series against the Netherlands. The infrastructure for baseball in Japan is unmatched globally—high school tournaments (Koshien) draw millions of TV viewers and sell out 50,000-seat stadiums, NPB teams have passionate fan bases with organized cheering sections, and the entire sport is culturally embedded in a way American baseball can only dream about.

Football-wise, the J-League remains Asia's premier domestic competition with clubs like Vissel Kobe, Yokohama F. Marinos, and Kawasaki Frontale competing in AFC Champions League, though it doesn't capture Japanese hearts like baseball does. That's fine. Japan knows what it is: a baseball nation first, with enough football quality to compete respectably in World Cups (reached round of 16 at Qatar 2022, beat Germany and Spain in group stage). The national team continues developing talent like Takefusa Kubo and Kaoru Mitoma who star in Europe's top leagues.

The Samurai Japan loss at Premier12 stings, but when you're competing for championships every year across every age group—U-12, U-15, U-18, U-23, senior—sometimes you come up just short. The scary part for everyone else? Japan's not slowing down. The systems are too good (youth academies, high school baseball, university programs, NPB development), the coaching too advanced (analytics-driven, biomechanics-focused), and the talent pool too deep (millions of kids playing organized baseball). The 2026 World Baseball Classic? Japan will be favored again. They always are, and usually, they deliver.`,
    issues: [
      'WBSC Premier12 runner-up finish to Chinese Taipei',
      'World #1 ranking in baseball with WBC 2023 title',
      'U-23 and U-18 youth development system excellence',
      'J-League as Asia\'s premier football competition',
      'MLB talent pipeline and NPB domestic strength'
    ]
  },
  JO: {
    name: 'Jordan',
    code: 'JO',
    lat: 30.5852,
    lng: 36.2384,
    summary: `June 5, 2025, will go down as the biggest day in Jordanian sports history. Period. Full stop. Jordan beat Oman 3-0 away in Muscat to qualify for their first-ever FIFA World Cup in 2026, and Ali Olwan scored a hat-trick for the ages—penalty in the 45+7th minute after a VAR-awarded spot kick, then the 51st minute to double the lead, then the 64th to seal it. The capital Amman erupted into spontaneous celebration that lasted all night. Car horns blaring, national flags draped from every balcony and car window, thousands flooding downtown streets, King Abdullah II watching from the Jordanian embassy in London wearing the national team jersey. This isn't just football; this is nation-defining, generation-defining stuff.

The path here was extraordinary and improbable. Runner-up finish at the 2024 AFC Asian Cup, losing the final 3-1 to hosts Qatar but playing them off the park for long stretches—already Jordan's best-ever result in that tournament. That Asian Cup run announced Jordan as a serious Asian power: beating Iraq, holding their own against quality opposition, and showing tactical sophistication under pressure. Then came the World Cup qualifiers, where Jordan temporarily led Group B with 16 points in the AFC third round. The football infrastructure in Jordan has been building for years, developing players through domestic academies like those at Al-Faisaly and Al-Wehdat, plus getting players experience in European leagues (Belgium, Romania, Poland), creating a national team that can genuinely compete with anyone in Asia.

Olwan's hat-trick wasn't luck or one player heroics; it was the culmination of systemic investment and tactical evolution under coaching staff who've modernized Jordanian football. The midfield control, defensive organization, and clinical finishing—all hallmarks of a team that's been built properly, not just thrown together for tournaments. What's remarkable is the timing and the snowball effect this creates. Jordan's football was always respectable regionally, but this World Cup qualification elevates the entire program to another stratosphere. Sponsorships will flood in, youth enrollment in football academies will surge, and suddenly Jordan's a World Cup nation with legitimacy on the global stage.

The celebrations weren't just about football—they were about a country of 11 million people proving it belongs on the world's biggest sports stage alongside nations 10 times its size. Los Angeles/Mexico/Canada 2026 is going to be massive for Jordan. First-ever World Cup appearance, passionate traveling fan base (expect thousands in North America's large Jordanian diaspora), and nothing to lose. They'll be everyone's favorite underdog story, and after what they've already accomplished—Asian Cup final, dominant World Cup qualifying—don't bet against them pulling off a shock result or two. Remember Iceland in 2018? Jordan could absolutely be that story in 2026.`,
    issues: [
      'Historic first-ever World Cup 2026 qualification',
      'Ali Olwan hat-trick in crucial 3-0 win over Oman',
      'Runner-up finish at 2024 AFC Asian Cup',
      'National celebrations and King Abdullah II support',
      'Youth development and infrastructure investment paying off'
    ]
  },
  KZ: {
    name: 'Kazakhstan',
    code: 'KZ',
    lat: 48.0196,
    lng: 66.9237,
    summary: `Kazakhstan sent 80 athletes to Paris 2024 across 25 sports and came home with seven medals—one gold, three silver, three bronze. Not flashy compared to their 13-medal haul at Rio 2016, but strategically impressive given the depth of competition. The boxing squad alone entered ten fighters into the Olympic tournament, and Nurbek Oralbay grabbed silver in the men's welterweight division while Nazym Kyzaibay took bronze in women's lightweight. That's Kazakhstan boxing for you—historically dominant since independence, technically superb with Soviet-era coaching lineage, and absolutely unafraid of anyone. The World Boxing Cup Kazakhstan 2025 ran through July 7, bringing over 400 boxers from 31 countries competing across ten weight categories at venues in Astana. That's a statement event showing Kazakhstan's commitment to remaining a boxing powerhouse and hosting major international competitions.

But Kazakhstan's Olympic depth goes way beyond boxing. They competed in judo (historically strong), artistic gymnastics (emerging program), kayaking and canoeing (lake country advantage), shooting (military tradition), fencing (Soviet legacy), and Greco-Roman wrestling (culturally embedded with Central Asian grappling traditions). The wrestling program particularly deserves respect—it's not just sport, it's cultural heritage dating back centuries. Kazakhstan's wrestling produces consistent Olympic and World Championship medalists through a system that identifies talent young, develops them in specialized schools, and provides state support through careers. Football's the most popular spectator sport for watching (Kazakhstan Premier League draws decent crowds), with the Football Federation organizing men's, women's, and futsal national teams, but the Olympic sports drive national pride and international recognition. There's a reason Kazakhstan invests so heavily in individual sports: medals at Olympics and World Championships matter more for a country of 19 million than football results for national prestige and soft power.

The challenge facing Kazakhstan is consistency and maximizing the infrastructure investment. Seven medals at Paris is solid, but Kazakhstan has the facilities, coaching expertise, and financial resources to do significantly better. The coaching systems inherited from Soviet era are there, the training facilities in Almaty and Astana are world-class, and the cultural emphasis on Olympic sports gives them an advantage over countries that prioritize team sports like football and basketball. Weightlifting used to be a monster program—multiple Olympic golds—until doping sanctions gutted the program, but boxing and wrestling remain elite. The World Boxing Cup hosting showed Kazakhstan's commitment to developing talent domestically and maintaining prominence as Central Asia's sporting leader. Los Angeles 2028 should see Kazakhstan push for double-digit medals if investment continues and they rebuild programs beyond boxing and wrestling. The talent pool is there, especially in combat sports and strength/power events. It's about maximizing potential and spreading medals across more disciplines.`,
    issues: [
      'Paris 2024 Olympics seven medals across 25 sports',
      'Boxing powerhouse with World Boxing Cup 2025 hosting',
      'Wrestling and judo traditional strength areas',
      'Football popularity vs Olympic sports investment balance',
      'Infrastructure from Soviet era supporting multiple disciplines'
    ]
  },
  KE: {
    name: 'Kenya',
    code: 'KE',
    lat: -0.0236,
    lng: 37.9062,
    summary: `Kenya led Africa at Paris 2024 with 11 medals—four gold, two silver, five bronze—and every single one came in athletics, as tradition dictates. Let's start with Beatrice Chebet's double gold in the 5000m (14:28.56) and 10000m (30:43.25). Absolute dominance. This woman beat Gudaf Tsegay in the 10K and Faith Kipyegon in the 5K—both world record holders—showing the ridiculous depth of Kenyan distance running. Faith Kipyegon took 1500m gold (3:51.29, pulling away in the final 100m) and 5000m silver (she got outsprinted by her compatriot after trying for the double). Emmanuel Wanyonyi won 800m gold, breaking the Olympic record. Ronald Kwemoi grabbed 5000m silver. Steeplechase bronze for Faith Cherotich (women) and Abraham Kibiwot (men). And in the marathon, Benson Kipruto took bronze in 2:07:00 on his Olympic debut while Hellen Obiri secured bronze in the women's race.

But here's the story everyone's still talking about: Eliud Kipchoge. The greatest marathoner in human history, going for his third straight Olympic marathon gold to cement immortality, dropped out at the 31K mark. DNF. Did not finish. Just like that, on a hot Paris morning, the quest for history ended. Kipchoge, who's won Berlin six times, Chicago, London multiple times, who ran 2:00:25 and broke the two-hour barrier in Vienna (unofficial), who NEVER DNFs, just stopped running. He later said, "This is my worst marathon. I don't know what happened," and hinted it might be his last Olympic appearance. The team also lost Kelvin Kiptum, the 23-year-old world record holder (2:00:35), who died in a car accident in February 2024 before the Games. That's two massive emotional blows for Kenyan distance running—one tragic, one heartbreaking—yet they still came through with 11 medals.

The depth is absolutely ridiculous. Six marathon runners—Kipchoge, Kipruto, and Munyao for men; Jepchirchir, Obiri, and Kosgei for women. Every single one of them capable of winning any marathon on Earth. The training camps in Iten and Eldoret at 2,400 meters elevation produce more elite distance runners per capita than anywhere on the planet. The high-altitude training, the competitive culture (if you're not in the top 5 Kenyan marathoners, you don't make the team even if you'd medal for anyone else), and the economic incentive—distance running is a path out of poverty—all creates this self-sustaining, self-improving distance-running machine.

Kipchoge's DNF hurts emotionally, but Kenya's dominance isn't built on one man, no matter how great. It's systemic. It's 40 years of institutional knowledge, training methodologies, and cultural commitment. Los Angeles 2028 will see the next generation step up—athletes like Chebet, Wanyonyi (who's only 20!), and whoever emerges from the Kenyan trials. Because that's what Kenya does. They reload, not rebuild. The machine keeps running.`,
    issues: [
      'Led Africa with 11 Paris 2024 medals, all in athletics',
      'Beatrice Chebet double gold (5000m, 10000m)',
      'Eliud Kipchoge DNF ending Olympic marathon dynasty',
      'Death of world record holder Kelvin Kiptum',
      'Iten and Eldoret training camps producing elite runners'
    ]
  },
  KW: {
    name: 'Kuwait',
    code: 'KW',
    lat: 29.3117,
    lng: 47.4818,
    summary: `Kuwait qualified for the 2027 AFC Asian Cup after a nine-year absence from continental competition, and honestly, that's huge progress for a program that's been rebuilding after years of FIFA suspensions and administrative chaos. They advanced to the third round of World Cup 2026 qualifying in June 2024, putting them among Asia's top 18 teams, which shows legitimate progress. But then came the chaos that perfectly encapsulates Kuwaiti football's ongoing struggles. The September 10, 2024 match against Iraq at Jaber Al-Ahmad International Stadium ended 0-0, and afterward? Complete organizational meltdown. Kuwait FA board resigned en masse on September 17 after fans suffered in extreme temperatures outside the stadium, ticket holders were inexplicably denied entry despite valid tickets, and the whole event turned into a public relations disaster. That's not just poor organization—that's a governance crisis exposing deeper infrastructure and administrative problems that have plagued Kuwaiti football for decades.

Now Kuwait's got crucial fixtures against Palestine and South Korea coming up in June 2025, sitting at FIFA ranking 138. Not great, not terrible, but the gap to qualification is real. The Arabian Gulf Cup in December 2024 (Kuwait's regional championship) showed some genuine fight: 1-1 draw with Oman, 2-1 win over UAE, 1-1 draw with Qatar to secure qualification for the semi-finals with a game to spare, then a narrow 0-1 loss to Bahrain in the semis (Bahrain went on to win the tournament, beating Oman 2-1 in the final). That semi-final appearance demonstrates Kuwait can absolutely compete regionally when organization and preparation are proper, but the World Cup third-round matches exposed the massive gap between regional and global competition. Playing South Korea, Oman, Palestine, and Jordan is a different beast than Gulf Cup football.

The FA board resignation is actually a rare chance to reset and modernize. New leadership, new administrative structures, maybe actual investment in youth development pipelines instead of just naturalizing players, and stadium infrastructure that doesn't leave paying fans suffering in 45-degree heat without proper crowd management. The 26-man squad called up for World Cup qualifiers has genuine talent—players from the Kuwait Premier League (which has improved in quality) mixed with Gulf-based professionals playing in Saudi Arabia, UAE, and Qatar leagues. Players like Yousef Nasser, Mohammad Daham, and Fahad Al Hajeri can play. But talent alone doesn't fix organizational dysfunction at the federation level.

Kuwait's challenge isn't primarily on the pitch; it's about building a football federation infrastructure that can support sustained success rather than lurching from crisis to crisis. The Asian Cup 2027 qualification matters and gives Kuwait a meaningful tournament to build toward, but unless the governance issues get fundamentally solved with transparent leadership and professional management, they'll keep hitting the same ceiling. The potential is there—Kuwait has money, football history (won three Gulf Cups, Asian Cup in 1980), and passionate fans. They just need competent administration to match the on-field ambition.`,
    issues: [
      '2027 AFC Asian Cup qualification after nine years',
      'Kuwait FA board resignation due to fan chaos',
      'Third-round World Cup qualifying struggles',
      'Arabian Gulf Cup semi-final appearance December 2024',
      'Governance and infrastructure challenges exposed'
    ]
  },
  KG: {
    name: 'Kyrgyzstan',
    code: 'KG',
    lat: 41.2044,
    lng: 74.7661,
    summary: `Wrestling is Kyrgyzstan, and Kyrgyzstan is wrestling—it's that simple and that profound. Paris 2024 proved it again with two medals on the same day, August 6. Meerim Zhumanazrova took silver in women's freestyle 68kg (losing the final to Japan's Ami Ishii but dominating everyone else), and world champion Zholaman Sharshenbekov grabbed bronze in men's Greco-Roman 60kg despite entering as a medal favorite. That's the good news showing Kyrgyzstan can still produce Olympic-level wrestlers. The bad news? The 2024 World Championships in Tirana, Albania (October 28-31) saw Kyrgyzstan come home empty-handed for the first time in eight years. Eight years of consecutive World Championship medals, gone. For a nation of 6.7 million people that built its entire modern sports identity on wrestling success, that's a five-alarm crisis requiring immediate attention and serious soul-searching.

Wrestling here isn't just another sport on the calendar—it's cultural heritage and national identity wrapped into one. Alysh (traditional Kyrgyz belt wrestling), mas-wrestling, Greco-Roman, freestyle—it's all embedded in Kyrgyz culture going back centuries to nomadic warrior traditions. The "golden generation of wrestlers" like Aisuluu Tynybekova (three-time world champion), Zhasulan Abdildayev, and others inspired an entire country, turning athletes into genuine national heroes with government support and private sponsorships. Alliance Altyn sponsors a ten-member national wrestling team, showing meaningful private-sector investment in a program that might otherwise rely solely on government funding. But after eight straight years of World Championship medals establishing Kyrgyzstan as a global wrestling power, going completely blank in Albania raises serious questions that the Wrestling Federation of Kyrgyzstan Republic must answer. Is the talent pipeline drying up at youth levels? Are training methods falling behind as other nations modernize? Is international competition evolving faster with sports science and analytics than Kyrgyzstan can adapt?

The 2025 World Championships in Zagreb, Croatia (September 13-21, with 776 wrestlers from 76 countries competing) is the immediate test of whether Albania was aberration or the beginning of decline. Kyrgyzstan needs to prove that blank was a fluke caused by bad matchups or off-days, not a systemic trend toward irrelevance. The infrastructure exists—training centers in Bishkek, coaching pipelines, government support programs. The coaching knowledge is there from decades of Soviet-era technical expertise mixed with traditional Kyrgyz wrestling wisdom. And the cultural commitment to wrestling as national sport isn't going anywhere; kids still grow up wrestling, it's still a path to glory and financial security. But complacency kills elite sports programs faster than anything. Other nations study Kyrgyzstan's techniques on video, recruit better coaches from the former Soviet republics, and invest more money in sports science. The Olympic medals show the absolute elite level remains intact, but World Championships measure depth across weight classes and styles. Kyrgyzstan needs to rebuild that depth fast and modernize training methods, because in international wrestling, reputations fade quickly when medals stop coming and younger nations like India and Iran keep improving.`,
    issues: [
      'Paris 2024 Olympic medals in freestyle and Greco-Roman wrestling',
      'First World Championship medal drought in eight years',
      'Cultural significance of wrestling in national identity',
      'Private sponsorship from Alliance Altyn supporting team',
      'Need to rebuild depth after 2024 Albania disappointment'
    ]
  },
  LA: {
    name: 'Laos',
    code: 'LA',
    lat: 19.8563,
    lng: 102.4955,
    summary: `Let's be real about Laos and the 2025 SEA Games football tournament (December 3-18 in Thailand), because this is going to be a massive challenge for a program still in early development stages. Men's football Group B: Vietnam (perennial SEA Games contenders), Malaysia (regional power with professional league), and Laos (the clear underdog). The U22 squad requirement (players born January 1, 2003, or later) means no overage players to bail out the youngsters with experience. Group stage matches at Chiang Mai's 700th Anniversary Stadium, semi-finals and final at Rajamangala Stadium in Bangkok. On paper, Laos is facing an uphill battle. Vietnam and Malaysia both have fully professional domestic leagues (V.League 1 and Malaysia Super League) producing talent, better infrastructure with modern training facilities, FIFA-certified coaches throughout their systems, and deeper talent pools from populations of 98 million (Vietnam) and 33 million (Malaysia) versus Laos's 7 million.

The 2024 ASEAN Championship (formerly AFF Championship) showed slight improvement under South Korean coach Ha Hyuk-jun—going from one draw in previous tournaments to two draws. That's... progress? Technically, yes, it's measurable improvement. But it also starkly highlights how far behind Laos remains compared to regional rivals who are winning matches and advancing to knockout rounds. There's no professional league infrastructure in Laos generating talent through competition—the Lao Premier League is semi-professional at best with inconsistent scheduling and limited media coverage. There's no pipeline of Lao players getting experience in European leagues or even top-tier Asian clubs like Thai League 1 or J-League. And there's severely limited investment in youth development compared to Thailand (which has multiple national training centers), Vietnam (which sends coaches to Europe for education), or even Cambodia's recent growth with investment from the Hun Sen family.

But here's the thing about regional tournaments: they create opportunities for upsets when everything clicks. Laos playing at home in Southeast Asia (Thailand is practically next door), with nothing to lose and everything to prove, could potentially spring a surprise result if they catch Malaysia or Vietnam on an off day. The challenge is fundamentally systemic, though, not just tactical. Football development requires sustained, decade-long investment—youth academies identifying talent at age 10, coaching education programs creating qualified coaches for every level, professional league structures with proper stadiums and medical staff, sports science and nutrition programs. Laos is essentially building from scratch while neighbors are already established with infrastructure from the 1990s and 2000s.

The 2025 SEA Games won't realistically be about winning medals for Laos; it'll be about showing measurable progress (maybe getting a draw instead of three losses, maybe scoring goals), competing respectfully without 5-0 drubbings, and using the experience and exposure to develop the next generation of players who'll be 25-28 at the 2032 SEA Games. Long-term thinking is absolutely crucial here. Quick fixes and naturalized players don't build sustainable programs. Laos needs a realistic decade-long development plan with government and private sector investment, not just tournament-by-tournament hope and prayer. The building blocks are there—passionate fans, growing economy, youth population. They just need proper structure.`,
    issues: [
      '2025 SEA Games Group B with Vietnam and Malaysia',
      'U22 squad requirement limiting experience',
      '2024 ASEAN Championship minimal progress (two draws)',
      'Lack of professional league infrastructure',
      'Need for long-term youth development investment'
    ]
  },
  LV: {
    name: 'Latvia',
    code: 'LV',
    lat: 56.8796,
    lng: 24.6032,
    summary: `Ice hockey in Latvia peaked with bronze at the 2023 IIHF World Championships in Tampere, Finland—their best finish ever, beating USA 4-3 in overtime for third place. The entire country celebrated like they'd won Olympic gold. Then 2024 and 2025 rolled around, and Latvia failed to make the playoffs both years at the World Championships. That's the absolutely brutal reality of international hockey: one great year doesn't guarantee sustained success when you're competing against hockey superpowers with 10 times your population. Coach Harijs Vītoliņš named 25 players for the 2024 Worlds in Czech Republic, and they couldn't get out of the group stage despite competitive performances. The 2025 IIHF World Championship roster (listed as of November 8, 2025) faces the same challenge. Can Latvia recapture that 2023 magic where everything clicked—goaltending, power play, defensive structure—or was it a perfect storm that only happens once a generation?

The 2014 Winter Olympics in Sochi quarterfinal run—losing 2-1 to eventual gold medalist Canada in a game Latvia could've won—showed this country of 1.9 million can genuinely compete with anyone when the roster is healthy and luck breaks their way. The domestic Latvian Hockey Higher League develops talent through clubs like Dinamo Riga (which competed in KHL), Latvian players scatter across European leagues (Sweden, Finland, Switzerland, Czech Republic) and occasionally make the NHL (Zemgus Girgensons has been in the NHL for years), and the national passion for hockey is absolutely genuine. Kids grow up playing on frozen ponds and outdoor rinks. But consistency is the fundamental problem for small hockey nations. Limited population means limited talent pool, sparse NHL representation means less high-level experience, and financial constraints mean players can't always train year-round at elite facilities. Latvia's realistic ceiling is making World Championship quarterfinals and occasionally medaling when stars align. That's not criticism—it's demographic and economic reality for a country of under two million people competing against Canada (39 million), USA (333 million), Russia (pre-ban), Sweden (10 million with massive hockey infrastructure).

Then there's 3x3 basketball at Paris 2024. Fourth place finish—lost bronze medal game to Lithuania 21-14. Francis Lacis, Karlis Lasmanis (arguably Latvia's best 3x3 player globally), Nauris Miezis, and Zigmars Raimo—those four came within one game of an Olympic medal in a sport Latvia has absolutely dominated globally for years. Fourth is heartbreaking when you're THAT close to a medal, but it also shows Latvia's found a genuine niche where they can medal consistently. The 3x3 program is elite, internationally respected with multiple FIBA 3x3 World Tour wins, and produces results far above what Latvia's size would suggest. Traditional 5-on-5 basketball doesn't get the same investment or attention (though Latvia has produced some NBA players like Kristaps Porziņģis), but in 3x3, Latvia's a legitimate powerhouse that other nations study and fear. Ice hockey remains the national obsession and cultural touchstone, but 3x3 basketball is actually where Latvia medals at major international competitions. That fourth place at Paris stings deeply, but Los Angeles 2028 offers redemption. Latvia will be back with probably the same core, and they'll be absolutely hungry for that medal that slipped away.`,
    issues: [
      'Ice hockey bronze at 2023 Worlds, then playoff failures',
      '3x3 basketball fourth place at Paris 2024 Olympics',
      'Small population limiting sustained hockey success',
      'Domestic league developing talent for European leagues',
      'Need for consistency in international competitions'
    ]
  },
  LB: {
    name: 'Lebanon',
    code: 'LB',
    lat: 33.8547,
    lng: 35.8623,
    summary: `Lebanon's basketball program is absolutely legit, and the FIBA World Cup 2027 Asian Qualifiers starting November 2025 prove it beyond doubt. Group D draw: Lebanon, Qatar (hosts and auto-qualifiers), India, Saudi Arabia. Lebanon's ranked #29 in the FIBA world rankings—highest in the group by a massive margin. Qatar's at #87, Saudi Arabia #65, India #76. Six qualifying windows from November 24-December 2, 2025 through February 22-March 2, 2027, with each team playing two games per nine-day window across the format. Top three teams plus the best fourth-place team from each group (along with hosts Qatar who get automatic qualification) advance to World Cup 2027 in Doha. Lebanon's not just participating or hoping—they're absolutely expected to qualify based on talent differential and international experience.

Led by star guard Wael Arakji (plays professionally in Japan's B.League), Lebanon's competed in major FIBA tournaments including the 2024 Olympic Qualifying Tournament in Valencia, Spain where they nearly shocked Serbia before falling short. They're genuinely hungry for their first-ever Olympics ticket, and the World Cup 2027 qualifying path gives them a legitimate, realistic shot at finally breaking through. The basketball infrastructure in Lebanon is remarkably strong despite ongoing political instability, economic crisis (currency collapse, banking system failure), and occasional security concerns. The Lebanese Basketball League develops players through clubs like Sagesse, Riyadi Beirut, and others with passionate fan bases, international playing experience comes from Lebanese players competing in European leagues (France, Spain, Germany) and Arab leagues (Egypt, Jordan, Gulf states), and crucially, the national team program maintains continuity and professionalism even when literally everything else in the country is chaotic or dysfunctional.

Here's the massive challenge: sustaining basketball excellence while dealing with Lebanon's severe economic crisis (GDP down 40% since 2019), political dysfunction (government gridlock, no president for extended periods), and infrastructure problems (electricity shortages, damaged facilities from Beirut port explosion). Basketball offers one of the rare moments of national unity in a deeply fractured country, but training facilities need serious investment and maintenance, players need financial support systems beyond just national team stipends, and the Lebanese Basketball Federation needs institutional stability to plan long-term development. The #29 world ranking shows genuine quality and depth, but moving up toward #20-#25 range requires resources that Lebanon struggles to provide right now.

Qualifying for World Cup 2027 would be absolutely massive for Lebanese basketball and national morale—international exposure on global stage, revenue from FIBA prize money and sponsorships, inspiration for youth programs that badly need hope. Lebanon should advance from Group D based purely on talent, but actually winning knockout games in Doha against global competition like Australia, Japan, or European teams? That's where the real test begins and where depth and resources matter. Still, in a country where so much is literally broken—economy, infrastructure, political system—basketball keeps delivering hope, unity, and international success. That matters more than any FIBA ranking. It's why players like Arakji keep coming back to represent Lebanon despite better financial opportunities playing only for clubs.`,
    issues: [
      'FIBA World Cup 2027 qualifiers Group D campaign',
      'World #29 ranking, highest in qualifying group',
      'Led by Wael Arakji, seeking first Olympics ticket',
      'Basketball as unifying force amid national crisis',
      'Infrastructure and resource challenges due to instability'
    ]
  },
  LY: {
    name: 'Libya',
    code: 'LY',
    lat: 26.3351,
    lng: 17.2283,
    summary: `Libya failed to qualify for AFCON 2025 in Morocco after a 0-0 draw with Benin at Tripoli International Stadium ended their hopes. That's disappointing but honestly not surprising given the chaos—Libya's had exactly three AFCON appearances in their history (1982, 2006, 2012) and has never even come close to qualifying for a FIFA World Cup. They did manage a 1-0 victory over Rwanda at Amahoro Stadium in the fifth round of qualifiers, their first win in the entire campaign, but it wasn't nearly enough after dropping points elsewhere. World Cup 2026 qualifying? Group D with Cameroon (African powerhouse), Cape Verde, Angola, Eswatini, and Mauritius. Libya lost 3-1 to Cameroon in March 2025, and that scoreline probably flattered them. The gap between Libya and Africa's elite nations isn't just large—it's growing wider as other nations invest and modernize while Libya stagnates.

Then there's the Nigeria controversy that made international headlines and exposed Libyan football's infrastructure dysfunction to the world. The Super Eagles were awarded a 3-0 forfeit win after Nigerian players and staff were stranded at Al Abraq Airport for over 12 hours upon arrival in Libya in October 2024, with reports of diverted flights, no transportation, no food, and what the Nigerians described as deliberate mistreatment. The entire Nigerian team refused to play the match and flew home immediately. CAF (Confederation of African Football) investigated and awarded the forfeit. That's not just bad logistics or poor planning—that's a diplomatic incident exposing how completely dysfunctional Libyan football infrastructure and organization has become. Political instability since the 2011 revolution and subsequent civil war, ongoing conflict between rival governments in Tripoli and Tobruk, limited investment in sports facilities as the country struggles with basic services, foreign teams reluctant to visit over security concerns—all of it compounds the football problems exponentially.

The domestic Libyan Premier League continues somehow, with clubs like Al-Ittihad, Al-Ahly Tripoli, and Al-Nasr competing, but how do you realistically develop elite international players when your country's been in turmoil for over a decade? Training is inconsistent, facilities are deteriorating, foreign coaches won't come, and players who show promise flee to Egypt, Tunisia, or Europe at the first opportunity. The talent absolutely exists—Libya's a country of 7 million with football passion and athletes who can compete regionally when given proper development. But systemic issues create an impossible environment: poor governance at the Libyan Football Federation (which has faced its own internal power struggles), inadequate training facilities without basic equipment or maintenance, security concerns affecting international matches (most "home" games are played in neutral venues like Tunisia or Egypt), and zero long-term planning or youth development strategy.

Qualifying for AFCON should be realistic for a country of Libya's size, population, and football history (they won bronze at CHAN 2014), but until political stability returns and serious infrastructure investment happens—proper stadiums, training centers, youth academies, professional league structure—they'll keep falling short against nations that have these basics. The Nigeria incident was internationally embarrassing and resulted in CAF sanctions, but it's also just a symptom of much larger problems. Football can't possibly thrive when literally everything else in society is broken or barely functioning. Libya needs peace, governance, and investment before football success becomes remotely feasible again.`,
    issues: [
      'Failed AFCON 2025 qualification after Benin draw',
      'Never qualified for FIFA World Cup (0-3 record)',
      'Nigeria forfeit controversy exposing infrastructure issues',
      'World Cup 2026 Group D struggles vs Cameroon',
      'Political instability undermining football development'
    ]
  }
}

async function insertSportsSummaries() {
  console.log('⚽ INSERTING SPORTS SUMMARIES TO DATABASE (COUNTRIES 66-78)')
  console.log('=' .repeat(80))
  console.log('')

  const countries = Object.keys(SPORTS_SUMMARIES)
  let successful = 0
  let failed = 0

  for (const code of countries) {
    const data = SPORTS_SUMMARIES[code as keyof typeof SPORTS_SUMMARIES]

    try {
      console.log(`📍 ${data.name} (${code})`)
      console.log(`   Characters: ${data.summary.length}`)
      console.log(`   Issues: ${data.issues.length}`)

      await prisma.locationSummary.create({
        data: {
          id: `${code}-sports`,
          name: data.name,
          type: 'country',
          country: code,
          category: 'sports',
          lat: data.lat,
          lng: data.lng,
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: '[]',
          storyCount: 0,
        },
      })

      console.log(`   ✅ Saved to database`)
      successful++

    } catch (error: any) {
      console.error(`   ❌ Error: ${error.message}`)
      failed++
    }
    console.log('')
  }

  console.log('='.repeat(80))
  console.log('📊 FINAL REPORT')
  console.log('='.repeat(80))
  console.log(`✅ Successful: ${successful}/${countries.length}`)
  console.log(`❌ Failed: ${failed}/${countries.length}`)
  console.log('')

  // Display character counts
  console.log('CHARACTER COUNTS:')
  console.log('-'.repeat(80))
  Object.keys(SPORTS_SUMMARIES).forEach(code => {
    const data = SPORTS_SUMMARIES[code as keyof typeof SPORTS_SUMMARIES]
    const charCount = data.summary.length
    const status = charCount >= 2000 && charCount <= 3000 ? '✓' : '⚠'
    console.log(`  ${status} ${data.name.padEnd(15)} ${charCount} chars  ${data.issues.length} issues`)
  })

  console.log('')
  console.log('='.repeat(80))
  console.log('✅ COMPLETE')
  console.log('='.repeat(80))
}

insertSportsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
