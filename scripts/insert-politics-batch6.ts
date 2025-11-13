import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Country coordinates
const COUNTRIES = {
  LUXEMBOURG: { name: 'Luxembourg', type: 'country', lat: 49.8153, lng: 6.1296, country: 'Luxembourg' },
  MALAYSIA: { name: 'Malaysia', type: 'country', lat: 4.2105, lng: 101.9758, country: 'Malaysia' },
  MEXICO: { name: 'Mexico', type: 'country', lat: 23.6345, lng: -102.5528, country: 'Mexico' },
  MOLDOVA: { name: 'Moldova', type: 'country', lat: 47.4116, lng: 28.3699, country: 'Moldova' },
  MONTENEGRO: { name: 'Montenegro', type: 'country', lat: 42.7087, lng: 19.3744, country: 'Montenegro' },
  MONGOLIA: { name: 'Mongolia', type: 'country', lat: 46.8625, lng: 103.8467, country: 'Mongolia' },
  MOROCCO: { name: 'Morocco', type: 'country', lat: 31.7917, lng: -7.0926, country: 'Morocco' },
  MOZAMBIQUE: { name: 'Mozambique', type: 'country', lat: -18.6657, lng: 35.5296, country: 'Mozambique' },
  MYANMAR: { name: 'Myanmar', type: 'country', lat: 21.9162, lng: 95.9560, country: 'Myanmar' },
  NEPAL: { name: 'Nepal', type: 'country', lat: 28.3949, lng: 84.1240, country: 'Nepal' },
  NETHERLANDS: { name: 'Netherlands', type: 'country', lat: 52.1326, lng: 5.2913, country: 'Netherlands' },
  NEW_ZEALAND: { name: 'New Zealand', type: 'country', lat: -40.9006, lng: 174.8860, country: 'New Zealand' },
  NICARAGUA: { name: 'Nicaragua', type: 'country', lat: 12.8654, lng: -85.2072, country: 'Nicaragua' }
}

// Politics summaries (Rory Stewart style)

const LUXEMBOURG_POLITICS = `Here's what strikes me about Luxembourg's politics in November 2025: it's boringly competent. And I mean that as the highest compliment. While the rest of Europe lurches from crisis to coalition collapse, this Grand Duchy of 650,000 souls is quietly governed by Prime Minister Luc Frieden's center-right coalition—the CSV and Democratic Party partnership that's been running the show since October 2023. No snap elections. No parliamentary drama. No constitutional crises. Just steady-handed governance from two of Luxembourg's oldest political parties. The next election isn't until 2028. But here's what's interesting: beneath that placid surface, Luxembourg is wrestling with the same tensions plaguing every wealthy European democracy—affordable housing, immigration, financial sector regulation, and whether a country that's built its prosperity on being a corporate tax haven can transition to something more sustainable without killing the golden goose.

**Current Government and Leadership**

Luc Frieden is back. And by "back," I mean he's returned to the Prime Minister's office after more than a decade in the wilderness—a political resurrection that tells you everything about Luxembourg's stable, almost dynastic political culture. Frieden's Christian Social People's Party (CSV) won the October 2023 elections, and he formed a coalition with the liberal Democratic Party (DP). It's a center-right government, fiscally conservative, pro-business, and deeply embedded in Luxembourg's establishment networks—banking, EU institutions, the Chamber of Commerce.

The coalition has a comfortable majority in the 60-seat Chamber of Deputies, so Frieden doesn't face the precarious arithmetic that's paralyzing governments in neighboring countries. His approval ratings hover around respectable-if-unspectacular levels—Luxembourgers don't expect charisma from their leaders, they expect competence. And by that measure, Frieden is delivering. No scandals. No gaffes. No dramatic U-turns. In Westminster terms, it's a government that's passing its bills, keeping the trains running (or rather, the free public transport running—Luxembourg made all public transit free in 2020), and avoiding the kind of self-inflicted wounds that sink administrations.

But there's a complacency risk here. Frieden's government benefits from Luxembourg's economic strength—GDP per capita north of $140,000, unemployment under 6%, and a financial sector that prints money. When the economy's humming, voters forgive a lot. The question is whether Frieden is using this political capital to tackle long-term challenges or just managing the status quo until someone else's problem arrives.

**Opposition and Electoral System**

Luxembourg's opposition is fragmented and ineffective, which is both a feature and a bug of its political system. The main opposition party is the Luxembourg Socialist Workers' Party (LSAP), which governed in coalition with the DP and the Greens from 2013 to 2023 under Prime Minister Xavier Bettel. They lost in 2023, and they're struggling to find a compelling critique of Frieden's government beyond "we'd do it slightly differently." The Greens, once riding high on climate concern, got hammered in 2023 and are now in the wilderness, re-thinking their pitch. The far-left déi Lénk has a few seats but no real path to power.

Then there's the populist right—the Alternative Democratic Reform Party (ADR), which campaigns on immigration restriction and Euroskepticism. They're Luxembourg's attempt at a Geert Wilders-style party, but in a country where 47% of the population is foreign-born and prosperity depends on open borders and EU integration, the ADR's ceiling is low. They'll pick up protest votes, but they're not forming governments anytime soon.

Luxembourg uses proportional representation with four multi-member constituencies, which produces coalition governments as a matter of course. No party has won an outright majority since the 1960s. This system rewards consensus and punishes extremism, which is why Luxembourg's politics feels so stable—but also so stale. There's limited appetite for radical change, because the system filters it out.

**Key Political Debates and Fault Lines**

The big fault line in Luxembourg politics is housing. This isn't sexy, but it's existential. Luxembourg has the most expensive housing market in Europe relative to incomes. The average price for an apartment in Luxembourg City is over €1 million. Young Luxembourgers—and the cross-border workers who make up 45% of the workforce—are being priced out. The government has promised to build more social housing and ease zoning restrictions, but progress is glacial, hamstrung by NIMBYism and a planning system that moves at the speed of continental drift.

Then there's immigration. Nearly half of Luxembourg's residents are foreign nationals—Portuguese, French, Italians, Belgans, plus a growing non-EU population. This diversity is Luxembourg's strength, but it's also a political pressure point. The ADR stokes fears about cultural dilution and welfare abuse, and while most Luxembourgers reject that rhetoric, there's a growing unease about whether the country's integration model is working. The CSV-DP coalition is trying to thread the needle—welcoming skilled migrants the economy needs while tightening asylum rules to appease the restrictionists.

**Corruption, Transparency, and Institutional Health**

Luxembourg scores well on international corruption indices—it's not Italy or Hungary. But there's a coziness to Luxembourg politics that raises eyebrows. The same families, the same networks, the same revolving door between government, banking, and EU institutions. Frieden himself is a former banker. His Finance Minister is tight with the Luxembourg financial lobby. This isn't corruption in the brown-envelope sense, but it's a kind of regulatory capture where the lines between public interest and private profit blur.

The LuxLeaks scandal—where whistleblowers exposed Luxembourg's sweetheart tax deals for multinationals—damaged the country's reputation, and successive governments have promised reform. But progress is slow, because Luxembourg's prosperity depends on being a low-tax, business-friendly jurisdiction. Raise corporate taxes too much, and companies flee to Dublin or Amsterdam. The political class knows this, so they talk tough on tax transparency while quietly preserving the advantages that keep the money flowing.

**The Bottom Line**

Luxembourg's politics in November 2025 is stable, competent, and slightly complacent. Frieden's CSV-DP coalition is governing without drama, benefiting from economic strength and a fragmented opposition. But the long-term challenges—housing, immigration, and the sustainability of the tax-haven model—aren't being tackled with the urgency they require. Watch for whether the 2028 election becomes a reckoning on these issues, or whether Luxembourgers, comfortable and prosperous, decide to stick with the devil they know. For now, boring is winning.`

const MALAYSIA_POLITICS = `Kuala Lumpur, late November 2025, and Anwar Ibrahim—reformasi hero turned prime minister—is staring down the most consequential electoral test of his tenure. On November 29, the state of Sabah goes to the polls, and this isn't just another regional election. Sabah is Malaysia's bellwether state, the East Malaysian stronghold that can make or break a federal government's legitimacy. And Anwar's coalition, battered by economic headwinds and a disastrous legal blunder over Sabah's constitutional revenue rights, is on the back foot. Polls suggest a tight race; insiders whisper about a rout. If Anwar loses Sabah, the narrative shifts from "reformist PM consolidating power" to "lame duck leader limping toward 2028." Meanwhile, his ASEAN chairmanship—crowned by the October 26 Kuala Lumpur Peace Accord that ended the Thailand-Cambodia border crisis—offers international glory but doesn't pay the bills back home. Malaysian politics in November 2025 is a story of a leader caught between diplomatic triumph and domestic turbulence, trying to hold together a fractious coalition while voters ask the hardest question in politics: what have you done for me lately?

**Current Government and Leadership**

Anwar Ibrahim is finally Prime Minister. After 25 years of political drama—jailed on sodomy charges, leading opposition coalitions, surviving coup attempts—he took office in November 2022 at the head of a fragile Pakatan Harapan (PH) coalition. By mid-2025, his approval ratings have stabilized in the mid-50s, respectable but not commanding. He's charismatic, cosmopolitan, and popular with urban Malays, Chinese Malaysians, and the progressive middle class. But he's hemorrhaging support in rural Malay heartlands, where PAS—the conservative Islamic party—is ascendant.

Anwar's coalition is a Frankenstein creation: PH (his reformist alliance), Barisan Nasional (the old UMNO-led coalition that governed for six decades), and a smattering of East Malaysian parties. It's ideologically incoherent—progressive urbanites sitting with conservative Malay nationalists, all held together by Anwar's political skill and the shared fear of PAS. Internal polling from mid-2025 shows PH isn't in a strong position to win the next general election in 2028. The coalition is united by opposition to Islamic conservatism, but divided on nearly everything else—economic policy, affirmative action for Malays, religious freedom.

The economy is the albatross around Anwar's neck. Growth slowed to 4.4% in Q1 2025, down from 4.9% in Q4 2024, and the US tariff threat—24% on Malaysian exports announced in July—has businesses panicking. Inflation is ticking up, the ringgit is weak, and voters are feeling the squeeze. Anwar's government has delivered incremental reforms—subsidy rationalization, anti-corruption measures—but the transformative change he promised in opposition feels distant. Worse, his anti-corruption drive, a signature issue, is undermined by perceptions that he's protecting his own allies while prosecuting his enemies. Fair or not, that's the narrative.

**Opposition and Electoral Dynamics**

The opposition isn't a single bloc—it's a hydra. On the right, you have PAS and its ally Parti Pribumi Bersatu Malaysia (Bersatu), led by former PM Muhyiddin Yassin. Together they form Perikatan Nasional (PN), the hardline Malay-Islamic coalition that's hoovering up rural Malay votes. PAS controls three state governments (Kelantan, Terengganu, Kedah) and is pushing an agenda of Islamic governance, anti-Western rhetoric, and Malay supremacy. They're disciplined, well-funded, and expanding.

Then there's UMNO, once Malaysia's dominant party, now reduced to a junior partner in Anwar's coalition. UMNO is hemorrhaging members to PAS, caught between its old identity as defender of Malay privilege and its new role as Anwar's enabler. UMNO president Ahmad Zahid Hamidi is deeply unpopular, tainted by corruption charges, and the party's base is in open revolt. If UMNO collapses completely, Anwar's coalition math falls apart.

Sabah is different. East Malaysian politics is less about Malay-Islamic identity and more about state autonomy, revenue sharing, and indigenous rights. The main issue driving voter fury in Sabah is the attorney general's proposal to appeal a high court ruling confirming Sabah's constitutional right to 40% of federal revenue collected from the state. This is explosive. Sabahans see federal Kuala Lumpur as a colonial exploiter, siphoning off their oil and gas wealth while leaving them poor. Anwar's government mishandled this spectacularly—the appeal proposal looked like federal overreach, playing directly into the opposition's hands.

**Institutions and Governance**

Malaysia's institutions are weak and politicized. The judiciary has a mixed record—some brave rulings on constitutional rights, but too many judges seen as government-friendly. The Election Commission is under scrutiny for gerrymandering and electoral roll irregularities. The Malaysian Anti-Corruption Commission (MACC) prosecutes opposition figures with zeal but seems reluctant to go after ruling coalition heavyweights.

The monarchy is a wild card. Malaysia's nine Malay sultans rotate as King every five years. The current King, Sultan Ibrahim of Johor, is strong-willed and interventionist. He's clashed with Anwar over appointments and policies, and there's a simmering constitutional tension over the King's reserve powers. If Anwar's coalition fractures, the King could play kingmaker, appointing a new PM without elections. It's happened before.

Parliament is dysfunctional—a circus of walkouts, shouting matches, and procedural warfare. Anwar's government lacks a two-thirds majority, so constitutional amendments are off the table. This limits his reform agenda and forces him into endless horse-trading with coalition partners.

**The ASEAN Triumph and Foreign Policy**

Anwar's diplomatic win in October 2025 was real. As ASEAN chairman, he brokered the Kuala Lumpur Peace Accord between Thailand and Cambodia, ending a dangerous border crisis that threatened regional stability. It was vintage Anwar—personable, persuasive, casting Malaysia as an honest broker. But foreign policy triumphs don't win domestic elections. Voters in Sabah don't care about ASEAN summits; they care about roads, schools, and their missing revenue.

**The Bottom Line**

Anwar Ibrahim in November 2025 is a leader running out of road. The Sabah election on November 29 will be his first major electoral test, and if he loses, the knives will come out. His coalition is fragile, his economic record is underwhelming, and his anti-corruption message is losing credibility. Meanwhile, PAS is building a formidable Malay-Islamic bloc that could dominate the 2028 general election. Anwar's ASEAN success offers international prestige, but it won't save him if Malaysian voters decide he's failed to deliver. Watch Sabah. If the opposition wins big, Anwar's in trouble. If he holds on, he buys time—but the clock is ticking.`

const MEXICO_POLITICS = `Mexico City, November 2025, and Claudia Sheinbaum Pardo—scientist, ex-mayor, and now President—is doing something extraordinary: she's maintaining stratospheric approval ratings while navigating a minefield of security crises, diplomatic blow-ups, and the long shadow of her predecessor. At 78%, Sheinbaum ranks as one of Latin America's most popular leaders, just over a year into her term. But November has tested her in ways that lab work never did. On November 5, she was groped by a supporter at a public event in downtown Mexico City—and immediately pressed charges, declaring it a campaign for all Mexican women's dignity. On November 7, Peru banned her from entering the country after Mexico granted asylum to a Peruvian opposition leader accused of coup plotting. And on November 2, the mayor of Uruapan was assassinated at a public event in Michoacán. Three events, three crises, and Sheinbaum's response to all of them? Calm, methodical, and unyielding. This is Mexican politics in 2025: a woman leading a superpower-in-waiting, trying to prove she's more than Andrés Manuel López Obrador's chosen successor while holding together MORENA's electoral juggernaut and managing a security catastrophe that's claimed over 30,000 lives annually for a decade.

**Current Government and Leadership**

Sheinbaum took office on October 1, 2024, becoming Mexico's first female president and first Jewish head of state. She's a political scientist with a PhD in energy engineering, a former mayor of Mexico City, and a protégé of AMLO—though she bristles at that framing. Her coalition, MORENA (Movement for National Regeneration) plus its allies (Green Party, Labor Party), controls a supermajority in Congress, giving her legislative dominance that few Mexican presidents enjoy. She can pass constitutional amendments without opposition support. That's power.

Her governing style is radically different from AMLO's. López Obrador was a charismatic populist who governed via daily morning press conferences (las mañaneras), where he'd ramble, attack enemies, and set the national agenda. Sheinbaum is technocratic, data-driven, and deliberate. She doesn't do the morning show theatrics. She's more "policy brief" than "political rally." Some MORENA loyalists miss AMLO's bombast; others see Sheinbaum as a necessary evolution—proof that MORENA can govern, not just campaign.

Her approval rating—78% in November—reflects a honeymoon period and the fact that she's riding AMLO's legacy. He left office with 70%+ approval, rare for any leader, and Sheinbaum is his anointed heir. But her challenge is differentiation. She can't just be "AMLO 2.0" because the problems she inherited—security, corruption, infrastructure decay—require solutions AMLO didn't deliver.

**Opposition Parties and Electoral Landscape**

Mexico's opposition is in ruins. The PRI (Institutional Revolutionary Party), which governed Mexico for 71 years until 2000, has collapsed. The PAN (National Action Party), the center-right alternative, is barely breathing. Together, they formed a coalition called "Fuerza y Corazón por México" to challenge MORENA in the 2024 elections. They got destroyed. Sheinbaum won with 59.4% of the vote, and MORENA's congressional supermajority gives them control until 2027 at the earliest.

The opposition's problem is they have no message. MORENA has consolidated the left, the working class, the rural poor, and enough of the middle class to be electorally untouchable. The PAN and PRI are seen as corrupt, elitist, and out of touch. The PRD (Party of the Democratic Revolution), once a left-wing force, has evaporated. New opposition movements—citizens' groups, anti-AMLO activists—exist, but they're fragmented and lack national reach.

Mexico's electoral system uses a mixed-member proportional model, which tends to produce dominant-party outcomes when one party is as popular as MORENA. The next federal elections are in 2027 (midterms) and 2030 (presidential). Unless MORENA spectacularly implodes, they're favorites for both.

**Security: The Ungovernable Crisis**

Let's talk about what's not working: security. On November 2, Carlos Manzo, mayor of Uruapan in Michoacán, was shot dead at a public event. He's one of dozens of local officials assassinated in Mexico in 2025. Organized crime—cartels, in plain language—controls vast swaths of Mexican territory. They run extortion rackets, drug trafficking, illegal mining, and human smuggling. They kill mayors, journalists, police chiefs, and anyone who gets in their way.

Sheinbaum inherited AMLO's "hugs not bullets" security strategy, which sounds lovely and has achieved precisely nothing. Homicide rates in Mexico remain catastrophic—over 30,000 murders annually. The cartels are better armed, better funded, and better organized than the Mexican state in many regions. Sinaloa, Michoacán, Guerrero, Tamaulipas—these are contested territories where the state's writ barely runs.

Sheinbaum has tried to signal a tougher approach. She hasn't dissolved the National Guard (AMLO's militarized police force), and she's talked about intelligence-led operations and targeting cartel finances. But talk is cheap. The fundamental problem is corruption. Cartel money flows into police forces, local governments, and even federal institutions. Until that's severed, security operations will fail.

And here's the paradox: Sheinbaum, like AMLO, has chosen not to maintain a Presidential Guard. AMLO dissolved it in 2018 as a symbolic gesture—"I trust the people." Sheinbaum has continued this. It's politically popular (no more elite protection for the president while citizens are gunned down), but it's also reckless. If a mayor can be assassinated at a public event, what's stopping a cartel from targeting the president?

**The Diplomatic Blowup with Peru**

On November 7, Peru banned Sheinbaum from the country after Mexico granted asylum to Betssy Chávez, Peru's former prime minister who's on trial for alleged participation in a 2022 coup attempt by then-President Pedro Castillo. Chávez fled to the Mexican embassy in Lima and requested asylum; Sheinbaum's government granted it. Peru's foreign ministry called this an "unfriendly act."

This is classic Latin American diplomatic theater, but it's serious. Mexico has a long tradition of granting asylum to left-wing exiles (Trotsky, Spanish Republicans, Chilean leftists after Pinochet). Sheinbaum is continuing that tradition, signaling Mexico as a progressive haven. But it pisses off conservative governments like Peru's. The Peru ban is symbolic—Sheinbaum wasn't planning to visit anyway—but it shows the limits of Mexico's soft power. When push comes to shove, regional governments will choose domestic politics over regional solidarity.

**Women's Rights and the Groping Incident**

November 5: Sheinbaum is pressing flesh with supporters in downtown Mexico City. A man gropes her. She immediately presses charges and goes public, declaring "this is something I experienced as a woman—something all women in our country experience." She calls for a nationwide campaign defending women's integrity.

This is politically brilliant and morally right. Mexico has an epidemic of gender-based violence—femicides, domestic abuse, street harassment. Sheinbaum, as the first female president, can't ignore this. By pressing charges and making it a national issue, she's signaling that no woman, not even the president, is immune—and that the state will take this seriously. It's also a reminder that machismo remains embedded in Mexican culture, even as a woman holds the highest office.

**The Bottom Line**

Claudia Sheinbaum in November 2025 is riding high on approval ratings, legislative dominance, and AMLO's legacy. But the challenges are mounting: security is out of control, diplomatic relations with Peru are strained, and gender-based violence is endemic. Her technocratic approach is promising, but it hasn't yet delivered results on the issues that matter most—murders, corruption, impunity. Watch for whether her approval ratings hold once the honeymoon ends and voters demand results. And watch for whether MORENA's supermajority leads to reform or complacency. Mexico has enormous potential, but governing it requires more than popularity—it requires will, strategy, and luck. Sheinbaum has the first two. She'll need the third.`

const MOLDOVA_POLITICS = `Chisinau, November 2025, and Maia Sandu is pushing her chips all-in. The Moldovan president, re-elected in 2024 after surviving a Russian-backed disinformation onslaught, is calling on the EU to "get creative" and fast-track Moldova's accession. Her target? Membership by 2028. Brussels calls this "ambitious but achievable." The Kremlin calls it a provocation. And here's the thing: Sandu might actually pull it off. In September, parliamentary elections returned her pro-EU Party of Action and Solidarity (PAS) to government with 50.2% of the vote—a genuine mandate in a country where elections are battlegrounds for Moscow's hybrid warfare. The European Commission just published a report saying Moldova made "the greatest leap forward in EU accession preparation" of any candidate. But there's a catch: Hungary, under Viktor Orbán, is blocking Moldova's negotiation progress to punish the West over Ukraine. So Moldova is stuck—praised for reforms, promised a pathway, but stymied by geopolitics. And all the while, Russian influence operations grind on, Transnistria sits frozen as a Kremlin puppet, and Moldova's economy teeters between European integration and post-Soviet dysfunction. This is politics on a knife-edge.

**Current Government and Leadership**

Maia Sandu is Moldova's president, elected in 2020 and re-elected in 2024. She's a former World Bank economist, Harvard-educated, fluent in English and Romanian, and Moldova's first female head of state. Her political party, PAS, won the September 2025 parliamentary elections with just over 50%, securing a governing majority. This is huge. In Moldova's fractious, multi-party landscape, winning an outright majority is rare. It means Sandu's government can pass legislation without coalition horse-trading.

Her approval ratings are solid—mid-50s to low-60s—remarkable given the relentless Russian propaganda targeting her. Moscow portrays her as a Western puppet selling out Moldova to NATO and Brussels. State media in Russia and pro-Kremlin outlets in Moldova depict her as anti-family, anti-Orthodox, and anti-Moldovan. None of it's true, but repetition works. The fact that she's still popular despite this onslaught tells you Moldovans are willing to bet on Europe over Russia.

Her government's priority is EU accession. Sandu has staked her presidency on this. In her November statements, she urged the EU to find "creative" solutions to break the Hungary-imposed deadlock. The European Commission recommended opening three negotiation clusters immediately and three more by year-end, which is fast by EU standards. The sticking point? Hungary's veto. Orbán is blocking Moldova (and Ukraine) to leverage concessions from Brussels on rule-of-law issues and to signal loyalty to Moscow. It's cynical, effective, and infuriating.

**Electoral System and Recent Elections**

Moldova uses a proportional representation system for parliamentary elections, with a 5% threshold for parties and 7% for coalitions. The September 2025 elections were fiercely contested. PAS won 50.2%, giving them 52 seats in the 101-seat parliament. The opposition is fragmented: pro-Russian parties, nostalgic communists, and regional blocs representing Gagauzia (the autonomous Turkish-speaking region that leans Moscow).

The elections were credible but not clean. The OSCE reported widespread vote-buying, particularly in rural areas where pro-Russian candidates distributed cash and goods. Cyberattacks targeted Moldova's electoral infrastructure. Russian state media flooded the airwaves with disinformation. And yet, PAS won. This suggests Moldovan voters, particularly younger urbanites and the diaspora (who can vote in embassies abroad), are tilting decisively pro-EU.

The presidential system in Moldova means Sandu has significant powers—she appoints the PM (subject to parliamentary approval), conducts foreign policy, and serves as commander-in-chief. The current PM, Dorin Recean, is a Sandu ally, so there's coherence between the presidency and government. This unity is critical because Moldova's challenges—EU accession, Russian interference, Transnistria—require coordinated action.

**Opposition: Pro-Russian Blocs and Gagauzia**

Moldova's opposition is a motley crew of pro-Russian parties, nostalgic communists, and regional autonomists. The largest opposition party is the Bloc of Communists and Socialists (BCS), led by Igor Dodon, a former president with close Kremlin ties. Dodon styles himself as a defender of Moldovan sovereignty (ironic, given his Russian backing) and Orthodox values. He opposes EU integration, NATO, and anything that smells of Westernization.

Then there's Șor Party, which was banned in 2023 for corruption and Russian funding but operates through proxies. Ilan Șor, the party's founder, is a fugitive oligarch living in Israel, convicted in absentia of stealing $1 billion from Moldovan banks. Yet his network still mobilizes voters, particularly in poorer regions where he funded roads, schools, and festivals. Patronage works.

Gagauzia is a different story. This autonomous region in southern Moldova is majority Gagauz (a Turkic ethnic group), Orthodox Christian, and deeply pro-Russian. In the 2024 EU referendum, Gagauzia voted 95% against EU membership. The regional governor, Yevgenia Gutsul, is openly pro-Kremlin and has accused Sandu's government of authoritarianism. Gagauzia isn't seeking independence (yet), but it's a political thorn and a potential flashpoint if Russia decides to stir unrest.

**Transnistria: The Frozen Conflict**

You can't talk Moldovan politics without Transnistria, the breakaway region on Moldova's eastern border that declared independence in 1990 and has been a Russian-backed pseudo-state ever since. It's not recognized by anyone, including Russia, but it functions as a Kremlin outpost—complete with Russian troops, a Soviet-style economy, and a border that Moldova doesn't control.

Transnistria is leverage. If Moldova gets too cozy with the EU, Russia can destabilize Transnistria, flood Moldova with refugees, or even stage a provocation to justify intervention. The 2022 Ukraine war made this risk acute. Russian forces in Transnistria are cut off from mainland Russia (Ukraine sits between them), but they're still there—1,500 troops guarding an ammunition depot. It's a frozen conflict that could thaw at any moment.

Sandu's government has tried dialogue with Transnistria, but progress is nil. Transnistria's leadership answers to Moscow, not Chisinau. The only solution is a geopolitical shift—either Russia withdraws (unlikely) or Moldova joins the EU and NATO, which gives it security guarantees that neuter Transnistria's utility to the Kremlin. Hence Sandu's EU sprint.

**Corruption, Institutions, and Reform**

Moldova is one of Europe's poorest countries and one of its most corrupt. Transparency International ranks it poorly, and for good reason. Oligarchs have captured state institutions, the judiciary is politicized, and corruption is endemic. Sandu's government has made anti-corruption a flagship issue. She's appointed reformist prosecutors, strengthened anti-corruption agencies, and pushed through judicial reforms. The European Commission praised these efforts in its November report.

But reform is slow. Entrenched interests resist. Judges appointed under previous regimes block anti-corruption cases. Civil servants sabotage reforms. And public patience is limited—Moldovans want results, not promises. The fact that Sandu's PAS won re-election suggests voters trust her more than the alternatives, but if corruption scandals emerge or reforms stall, that trust will erode.

**The EU Gamble**

Sandu's bet on EU membership by 2028 is bold. If she pulls it off, Moldova gets security, prosperity, and a shield against Russian aggression. If she fails, she's vulnerable to a pro-Russian backlash in the next election. The European Commission is on board. Three negotiation clusters opening now, three more by December—that's momentum. But Hungary's veto is a roadblock, and Orbán shows no signs of budging.

Sandu's frustration is palpable. Moldova is doing the work—judicial reform, anti-corruption, aligning with EU regulations—and getting blocked by a political stunt in Budapest. It's the EU's credibility on the line as much as Moldova's. If Brussels can't deliver for a country that's doing everything right, what message does that send to other aspirants?

**The Bottom Line**

Maia Sandu in November 2025 is a leader on a mission. She's won elections, pushed reforms, and bet Moldova's future on the EU. The European Commission is backing her; Hungarian intransigence is blocking her. Meanwhile, Russia prowls in the shadows, Transnistria festers, and Moldova's economy limps along. If Sandu gets Moldova into the EU by 2028, she'll be a historic figure—the leader who pulled a poor, divided, post-Soviet state into Europe's fold. If she fails, Moldova slides back toward Moscow's orbit. November 2025 is a hinge moment. Watch Brussels, watch Budapest, and watch Chisinau. This story isn't over.`

const MONTENEGRO_POLITICS = `Podgorica, November 2025, and Montenegro is doing that thing it does best: punching above its weight while teetering on the edge of chaos. This country of 620,000 people—roughly the population of Glasgow—is the EU's most advanced candidate for accession, with Brussels targeting 2026 to wrap up negotiations and 2028 for membership under the slogan "28 by 28." The European Commission's November enlargement report praised Montenegro's reform progress and held it up as a model for the Western Balkans. And yet, simultaneously, Montenegro is gripped by political crisis. Parliament didn't function for all of December 2024 because the opposition blocked it. Prime Minister Milojko Spajić's coalition—a Frankenstein's monster of pro-EU technocrats and pro-Russian nationalists—is fraying. And in late October, anti-Turkish violence erupted in Montenegrin cities, forcing Spajić to impose sudden visa restrictions on Turkish citizens, infuriating Ankara and exposing Montenegro's fragile social fabric. So which is it? A success story speeding toward Europe, or a Balkan powder keg one bad week from implosion? The answer, maddeningly, is both.

**Current Government and Coalition Dynamics**

Milojko Spajić has been Prime Minister since October 2023. He's 37, a former finance minister, and the leader of Europe Now! (PES), a centrist, pro-EU party that positions itself as a break from Montenegro's toxic legacy parties. His coalition includes PES, the Democrats, the Socialist People's Party (SNP—despite the name, they're pro-Russian), and Albanian minority parties. It's an ideologically incoherent mess. PES wants EU integration and economic modernization. The SNP wants closer ties with Serbia and Russia. The Albanian parties want minority rights and autonomy. Holding this together requires Spajić to be a magician, a therapist, and a hostage negotiator all at once.

And it's not holding together well. The coalition nearly collapsed multiple times in 2024 over cabinet appointments, budget priorities, and foreign policy. The SNP resents Spajić's pro-EU tilt and flirts with the opposition. The Democrats are internally divided. Parliament was paralyzed in December 2024 when the opposition—led by the Democratic Party of Socialists (DPS), which governed Montenegro for three decades until 2020—refused to let it function, blocking key legislation including EU-required reforms.

Spajić's approval ratings are middling. He's seen as competent but inexperienced, a technocrat in over his head politically. Montenegrins respect his economic credentials (he was a successful banker before politics), but they doubt his ability to manage the coalition's chaos or deliver on EU promises. The next parliamentary elections are due in 2027, but this government might not last that long.

**Opposition: DPS and the Ghosts of Milo Đukanović**

The main opposition is the Democratic Party of Socialists (DPS), led until recently by Milo Đukanović, who governed Montenegro as either president or prime minister from 1991 to 2023. Đukanović is one of the Balkans' most enduring political figures—autocratic, cunning, and deeply compromised by corruption allegations. He steered Montenegro to independence from Serbia in 2006 and into NATO in 2017, positioning himself as a pro-Western bulwark. But his rule was marred by state capture, media suppression, and ties to organized crime.

DPS lost power in 2020 after 30 years, but it remains Montenegro's largest single party with around 25% support. Đukanović stepped down as party leader in 2023, but he still looms over Montenegrin politics like a specter. DPS's strategy now is obstruction—block the government, highlight its failures, and wait for the coalition to implode. In December 2024, they succeeded: DPS-led opposition boycotts paralyzed parliament, preventing votes on the budget and EU-related reforms. This is political vandalism, but it's effective.

Then there's the nationalist-populist bloc—parties like the Democratic Front (DF), which oppose EU membership, support Serbian identity politics, and have ties to the Serbian Orthodox Church. They're loud, disruptive, and electorally marginal, but they can swing votes and block reforms.

**EU Accession: So Close, Yet So Fragile**

Montenegro opened EU accession negotiations in 2012, making it the region's frontrunner. By November 2025, it's closed most of the 33 negotiating chapters. The European Commission's November report said Montenegro "advanced most on reforms" among Western Balkan candidates and could finalize negotiations by 2026, with membership by 2028.

This is a big deal. If Montenegro joins, it would be the first Western Balkan country to do so since Croatia in 2013, breaking the deadlock and signaling the EU's commitment to enlargement. Brussels sees Montenegro as proof the process works. Podgorica sees EU membership as its economic salvation—access to the single market, structural funds, and a security umbrella that protects against Serbian and Russian interference.

But here's the problem: Montenegro's domestic politics are too unstable to guarantee it crosses the finish line. The December 2024 parliamentary paralysis showed how easily progress can be derailed. Key reforms—judicial independence, anti-corruption, media freedom—are stalled by political infighting and vested interests. The European Commission praises Montenegro's laws, but implementation is patchy. Corruption is endemic. The judiciary is politicized. Organized crime networks still operate with impunity.

And there's the Russia question. While Spajić's government is officially pro-EU, the SNP—his coalition partner—is pro-Russian. The SNP opposes sanctions on Russia, resists Western security alignment, and maintains ties with Moscow and Belgrade. This creates a schizophrenic foreign policy where Montenegro publicly backs EU integration while quietly hedging its bets with the Kremlin.

**The Anti-Turkish Violence and Social Tensions**

In late October 2025, violent incidents targeted Turkish immigrants in Montenegro. The details are murky, but reports suggest coordinated attacks in multiple cities, forcing the Spajić government to impose emergency visa restrictions on Turkish citizens. This was a PR disaster. Turkey, a NATO ally and regional partner, was furious. Ankara accused Montenegro of Islamophobia and failing to protect Turkish nationals. The EU criticized the violence as xenophobic.

What drove this? Montenegro has a complex relationship with its Muslim minority (around 20% of the population, mostly Bosniaks and Albanians) and a history of ethnic tension. The violence likely had local triggers—economic resentment, nationalist provocations—but it exposed how fragile Montenegro's social cohesion is. In a small country where everyone knows everyone, ethnic or religious violence can spiral fast.

Spajić handled it poorly. The visa restrictions looked reactive and panicky, and they strained Montenegro's international relationships without addressing the root causes. This is governing by crisis management, not strategy.

**Institutions and Corruption**

Montenegro's institutions are weak. The judiciary is politicized, with judges appointed based on party loyalty rather than merit. The Anti-Corruption Agency has limited powers and faces political interference. State media is controlled by whoever's in power. Civil society is vibrant but underfunded and often ignored by policymakers.

Corruption is the country's original sin. Đukanović's DPS ruled for 30 years through patronage networks that blurred the line between state and party, politics and crime. Cigarette smuggling, money laundering, and organized crime flourished under DPS rule. Spajić's government promised a clean break, but progress is slow. Some high-profile prosecutions have happened, but many big fish remain untouchable.

**The Bottom Line**

Montenegro in November 2025 is a paradox: the EU's star pupil in the Western Balkans and a political mess on the verge of breakdown. Spajić's coalition is fragile, the opposition is obstructionist, and social tensions are simmering. Yet EU accession is within reach—2026 for negotiations, 2028 for membership. If Montenegro makes it, it's a triumph. If the government collapses or reforms stall, years of progress unravel. Watch for snap elections, coalition fractures, and whether Brussels holds firm on conditionality or cuts Montenegro slack to keep enlargement momentum alive. This is a small country with big ambitions, and November 2025 is a test of whether it can deliver.`

const MONGOLIA_POLITICS = `Ulaanbaatar, November 2025, and Mongolian politics is entering a critical phase—one of those moments where institutional norms meet personal ambition, and nobody's quite sure which wins. The political earthquake here isn't a coup or a scandal; it's a slow-motion constitutional struggle over whether Prime Minister Luvsannamsrai Oyun-Erdene survives a veto by President Ukhnaagiin Khürelsükh. The Speaker of Parliament has resigned. The President vetoed an attempt to oust the PM. And now, in November, the Mongolian People's Party (MPP)—which dominates parliament—is holding a plenary meeting that could determine whether the party splinters or consolidates. Meanwhile, inflation hovers at 9%, household debt has ballooned, and 30% of Mongolians live below the poverty line. This is a country rich in minerals and geopolitical leverage (sandwiched between China and Russia), yet politically gridlocked and economically underperforming. What happens in November will shape whether Mongolia can break this cycle or whether it sinks deeper into the dysfunction that's plagued it since the June 2024 elections.

**The 2024 Elections and Coalition Arithmetic**

Let's rewind to June 2024. Mongolia held parliamentary elections under a new electoral system designed to increase representation and reduce the MPP's dominance. It half-worked. The MPP won 68 of 126 seats in the State Great Khural (parliament)—a majority, but not the overwhelming dominance it once had. The Democratic Party (DP), the main opposition, won 42 seats, a significant improvement. For the first time in years, smaller parties entered parliament: the HUN party (8 seats), the National Coalition (4 seats), and the Civil Will-Green Party (4 seats).

After the election, the MPP formed a coalition government with the DP and HUN—an odd couple. The MPP is historically center-left, rooted in Mongolia's socialist past. The DP is center-right, pro-market, and traditionally the MPP's rival. But Mongolian politics is less about ideology and more about access to power and resources (mining revenues, government contracts, patronage). The coalition was a pragmatic marriage: MPP needed DP and HUN to secure a governing majority; DP and HUN wanted ministries and influence.

The coalition carved up the cabinet: ten ministries to the MPP, eight to the DP, two to HUN. Luvsannamsrai Oyun-Erdene, the MPP leader, remained Prime Minister. But cracks appeared immediately. The coalition lacked a shared vision. The MPP wanted state-led development and redistribution. The DP wanted privatization and foreign investment. HUN wanted... well, it's still not clear what HUN wants beyond survival.

**The Speaker's Resignation and the Prime Minister's Veto**

Fast-forward to late 2024. The Speaker of Parliament resigned under murky circumstances—reports suggest internal MPP pressure, possibly linked to factional disputes over mining contracts or cabinet appointments. Then came the dramatic move: an attempt to vote out Prime Minister Oyun-Erdene. This wasn't led by the opposition (the DP is in coalition with him, after all), but by factions within the MPP itself.

Here's where it gets constitutionally messy. President Khürelsükh, an MPP figure and former PM himself, vetoed the motion to remove Oyun-Erdene. Mongolia's presidential system gives the president limited but important reserve powers, including vetoing parliamentary decisions (subject to override). Khürelsükh's veto was unusual—it signaled he's backing Oyun-Erdene against internal MPP rebels. Why? Possibly loyalty, possibly political calculation (better a weakened ally than a factional rival), possibly external pressure (China and Russia prefer stability in Mongolia, and a leadership crisis complicates that).

The veto held, but it didn't resolve the underlying tension. The MPP is divided. Some factions want Oyun-Erdene gone, blaming him for the party's underperformance in 2024 and the government's failure to deliver economic results. Others back him, fearing that removing him triggers a coalition collapse and snap elections.

**The November Plenary: Make or Break**

Which brings us to November 2025. The MPP's plenary meeting is the venue where these tensions will either erupt or be papered over. If Oyun-Erdene can broker compromises—bringing conservative factions into key committees, distributing patronage, signaling flexibility on policy—he survives, and the MPP holds together. If he can't, the party could splinter. Some MPP MPs might defect to the opposition or form a breakaway faction. The coalition could collapse. Parliament could deadlock.

And here's the kicker: Mongolia's next elections aren't until 2028. If the government falls, either a new coalition forms (unlikely, given the arithmetic) or Mongolia stumbles through years of political paralysis. For a country that needs urgent economic reforms—diversifying beyond mining, tackling debt, improving infrastructure—paralysis is disastrous.

**Economic Woes: Inflation, Debt, and Poverty**

The political drama is playing out against an economic backdrop that's grim. Inflation hit 9% in 2025, driven by food and fuel price increases. Household debt has ballooned—Mongolians are among the most indebted populations in Asia relative to income, thanks to easy consumer credit and stagnant wages. 30% of the population lives below the poverty line, a figure that's barely budged despite Mongolia's mining wealth.

Why? Because mining revenues don't trickle down. Mongolia's economy is dominated by two massive mines: Oyu Tolgoi (copper and gold, majority-owned by Rio Tinto) and Tavan Tolgoi (coal). These generate billions, but the benefits are captured by foreign investors, government elites, and connected businesses. Ordinary Mongolians see little. Infrastructure outside Ulaanbaatar is poor. Healthcare and education are underfunded. Youth unemployment is high, and many young Mongolians emigrate.

The government's response has been reactive. Subsidies on fuel and food, which worsen the fiscal position. Loose monetary policy, which fuels inflation. No structural reforms to diversify the economy or improve governance. The MPP-DP coalition promised change in 2024, but they've delivered continuity. And now, internal political warfare is consuming the bandwidth needed for policymaking.

**Geopolitics: The China-Russia Sandwich**

Mongolia's foreign policy is constrained by geography. It's landlocked between China (which accounts for 90% of Mongolia's exports, mostly minerals) and Russia (its historical patron and security guarantor). Mongolia can't afford to alienate either. This makes it a perpetual balancing act.

Under Oyun-Erdene, Mongolia has tried to cultivate "third neighbors"—the US, Japan, South Korea, EU—to reduce dependency on Beijing and Moscow. There's some success: Japan funds infrastructure, the US provides military training, South Korea invests in mining. But ultimately, China is Mongolia's economic lifeline. Any political instability in Ulaanbaatar makes Beijing nervous, because it threatens mining exports that feed Chinese industry.

Russia matters less economically but remains important for security and energy (Mongolia imports Russian oil). The Kremlin prefers a stable, MPP-led Mongolia that doesn't drift too far westward. If Oyun-Erdene falls and a more nationalist or pro-Western faction takes over, Moscow won't be pleased.

**Institutional Health and Corruption**

Mongolia's democracy is real but flawed. Elections are competitive and mostly free, but marred by vote-buying and patronage. The judiciary is politicized. Corruption is endemic—Transparency International ranks Mongolia poorly. Mining contracts are awarded through opaque processes. Political elites accumulate wealth while ordinary Mongolians struggle.

Civil society is vibrant—independent media, NGOs, and activists hold power to account. But they face harassment, legal pressure, and funding cuts. The government tolerates dissent, but grudgingly. There's no dictator here, but there's also no rule of law in the sense Westminster or DC understand it.

**The Bottom Line**

Mongolia in November 2025 is a country at a crossroads. The MPP's plenary meeting will determine whether Prime Minister Oyun-Erdene survives and whether the coalition holds. If the party splinters, Mongolia faces years of political paralysis at a time when it desperately needs economic reform. Inflation, debt, and poverty are crushing ordinary Mongolians, while elites squabble over mining revenues. Geopolitically, Mongolia is squeezed between China and Russia, trying to carve out autonomy but constrained by dependency. Watch the November plenary. If Oyun-Erdene brokers a deal, Mongolia muddles through. If he fails, the political earthquake becomes a full-blown crisis.`

const MOROCCO_POLITICS = `Rabat, November 2025, and Morocco is in the middle of a quiet revolution—or maybe a carefully managed performance of reform, depending on your cynicism. King Mohammed VI, who's ruled since 1999, is driving an unprecedented wave of electoral reforms ahead of the September 2026 general elections. The Ministry of Interior, acting under direct royal mandate, is implementing financial monitoring to stop vote-buying, tightening controls on campaign spending, and trying to clean up a system notorious for corruption. This follows years of protests—Gen Z Moroccans flooding the streets demanding transparency, jobs, and an end to elite impunity. The King is responding, but in the Moroccan way: top-down, controlled, with the monarchy firmly in charge. Prime Minister Aziz Akhannouch's government, elected in 2021, is running the show day-to-day, but everyone knows the real power sits in the palace. Morocco isn't a dictatorship, but it's not quite a democracy either. It's a monarchical hybrid where elections matter, but the King can always overrule them. And as 2026 approaches, the question is whether these reforms are real or just theater to defuse public anger while preserving the system.

**The Monarchy: Power Behind the Throne (and in Front of It)**

Let's be clear: Morocco is a monarchy first, a parliamentary democracy second. King Mohammed VI is both head of state and "Commander of the Faithful," a religious title that gives him authority over Morocco's Islamic identity. He appoints the Prime Minister (after elections, but it's his choice), chairs the Council of Ministers, and has final say on foreign policy, security, and major economic decisions. The 2011 constitution—adopted after Arab Spring protests—was supposed to strengthen parliament and limit royal power. It didn't. The King retained all his key prerogatives.

Mohammed VI is 62, been in power for 26 years, and his style is different from his father, Hassan II, who ruled with an iron fist. Mohammed VI is more subtle—he allows dissent (within limits), tolerates a relatively free press (mostly), and projects an image of modernization. He's pushed women's rights, reformed family law, and invested in infrastructure (the Tangier-Casablanca high-speed train is a showcase project). But he's also presided over growing inequality, youth unemployment above 30%, and a political system where real accountability doesn't exist because ultimate power rests with the palace, not parliament.

In November 2025, the King's electoral reform push is his response to Gen Z unrest. Young Moroccans—educated, digitally savvy, and economically frustrated—have been protesting for years, demanding jobs, transparency, and an end to corruption. The monarchy's calculation is that limited reform (cleaner elections, better oversight) will satisfy enough of them to prevent a broader uprising. It's a gamble. If the reforms look cosmetic, anger grows. If they go too far, entrenched interests push back.

**The Government: Akhannouch and the RNI**

Aziz Akhannouch has been Prime Minister since October 2021, when his National Rally of Independents (RNI) won a plurality in parliamentary elections. The RNI is a center-right, pro-business party with deep ties to the palace and Morocco's economic elite. Akhannouch himself is one of Morocco's richest men—his family owns a petroleum distribution empire. He's competent, business-friendly, and politically safe. The King appointed him because he's reliable, not because he's transformative.

Akhannouch's coalition includes the RNI, the Authenticity and Modernity Party (PAM, another palace-friendly centrist party), and the Istiqlal Party (an old nationalist party with declining influence). Together they control a comfortable majority in the 395-seat House of Representatives. But this majority is hollow. The coalition exists to execute the King's agenda, not to drive independent policy. Parliament debates, but the King decides.

Akhannouch's government has focused on economic recovery post-COVID, managing drought (a recurring crisis in Morocco), and infrastructure investment. Growth in 2025 is around 3%, respectable but not enough to dent unemployment. Inflation is moderate. The dirham is stable. But the structural problems—youth unemployment, rural poverty, education quality—remain unaddressed. The government talks about reform but delivers incrementalism.

**Opposition: Islamists in Decline, Leftists Fragmented**

Morocco's political opposition is weak and divided. The main opposition party used to be the Justice and Development Party (PJD), a moderate Islamist party that governed from 2011 to 2021. They lost badly in 2021, dropping from 125 seats to 13, a collapse widely seen as engineered by the palace. The King never liked the PJD—they were too independent, too populist, too willing to criticize the elite. So the system marginalized them. By November 2025, the PJD is a spent force, struggling for relevance.

The left is fragmented into small parties—socialists, communists, labor unions—with limited electoral reach. They critique the monarchy's economic model, demand redistribution and labor rights, but they can't unify or mobilize mass support. Morocco's political system rewards palace-aligned centrists and punishes outsiders. The electoral rules (proportional representation with regional lists) favor established parties with money and networks. Independents and small parties struggle.

So the real opposition isn't in parliament—it's in the streets. Gen Z protesters, civil society groups, independent journalists. They're demanding transparency, jobs, and accountability. The monarchy tolerates this (to a point), but it's a tightrope. Too much repression, and Morocco looks authoritarian. Too much freedom, and dissent spreads.

**Electoral Reforms: Real Change or Theater?**

The Ministry of Interior's electoral reforms are the big story in November 2025. They're implementing:
- **Financial monitoring** to track illicit campaign money and prevent vote-buying (which is rampant in Morocco—parties distribute cash, food, and goods to secure votes).
- **Technical mechanisms** to detect and block charitable donations or social spending used for electoral purposes.
- **Stricter oversight** of campaign spending and transparency requirements.

If implemented, these reforms could clean up Morocco's notoriously corrupt elections. But there's massive skepticism. Morocco has promised electoral reform before (after the 2011 protests, after the 2016 protests), and delivered little. The system is too entrenched. Political parties, local bosses, and business elites all benefit from the status quo. The Ministry of Interior, which oversees elections, is directly controlled by the palace—so the reforms will go as far as the King wants, and no further.

The Gen Z protesters are watching. If the September 2026 elections look cleaner and more transparent, the reforms gain credibility. If vote-buying continues and nothing changes, anger will spike. The King is betting he can manage this, but it's risky. Youth movements in digital age don't need formal organization—they mobilize via social media, and they're harder to co-opt or repress.

**Corruption and Institutional Weakness**

Morocco ranks middling on corruption indices—better than most African and Arab countries, worse than Europe. Corruption is systemic, not episodic. Contracts are awarded through connections. Public sector jobs go to party loyalists. Business success requires palace ties or political patrons. Independent anti-corruption agencies exist, but they're weak and politically constrained.

The judiciary is nominally independent but effectively controlled by the palace. Judges are appointed through processes the King influences. High-profile cases (especially involving royal interests or national security) are decided politically, not legally. Civil liberties are selectively enforced—critical journalism is tolerated until it crosses a red line (criticizing the King, the monarchy, or territorial integrity), then prosecutions follow.

**The Western Sahara Question**

No discussion of Moroccan politics is complete without the Western Sahara. Morocco claims the territory (a former Spanish colony) as its own and has occupied it since 1975. The Polisario Front, backed by Algeria, claims independence. The UN calls it a disputed territory. For Morocco, this is non-negotiable—any politician or party that questions Moroccan sovereignty over the Sahara is banned.

In November 2025, the issue remains frozen. Morocco controls the territory, and has won diplomatic recognition of its claim from the US (under Trump in 2020, continued under Biden) and several African and Arab states. But Algeria still backs Polisario, and tensions simmer. The King uses the Sahara as a nationalist rallying point—it unites Moroccans and distracts from domestic problems. Expect this to feature in the 2026 election campaign.

**The Bottom Line**

Morocco in November 2025 is a controlled political space where the King holds all the cards, parliament plays its assigned role, and real dissent happens outside formal institutions. The electoral reforms are a test: if they're genuine, they could channel Gen Z frustration into the political system and stabilize the monarchy's legitimacy. If they're theater, expect more protests and deeper cynicism. Akhannouch's government is competent but uninspiring, executing palace policy without vision. The opposition is weak, fragmented, and unable to challenge the system. Watch the September 2026 elections. If they're cleaner, Morocco's hybrid monarchy survives another cycle. If they're business as usual, the pressure builds.`

const MOZAMBIQUE_POLITICS = `Maputo, January 2025, and Daniel Chapo takes the oath of office as Mozambique's fifth president amid a capital city that's literally burning. Over 350 people are dead. Four thousand detained. Entire neighborhoods are battlegrounds between police and protesters. The Constitutional Council confirmed Chapo's victory in the October 2024 election, but they revised his vote share down from a preposterous 70% to a slightly-less-preposterous 65%. His opponent, Venâncio Mondlane, claims he won with 53% based on his own observers' tallies and has called for sustained civil disobedience. The EU documented ballot-stuffing, voter roll manipulation, and result alteration. This isn't an election—it's an imposition. And Mozambique, after 50 years of Frelimo rule, is convulsing. The party that liberated Mozambique from Portuguese colonialism in 1975 and has governed ever since has become a machine of authoritarianism, impunity, and violence. Chapo's inauguration isn't a democratic transfer of power; it's a coronation by force. And the question in November 2025, ten months into his presidency, is whether Frelimo can sustain this through brute repression or whether Mozambique is entering a revolutionary moment.

**The Fraudulent Election and Frelimo's Grip**

Let's be blunt: the October 2024 election was stolen. The EU observer mission documented systemic fraud—over-registration of Frelimo-friendly voters, ballot-stuffing, alteration of vote counts, and pro-Frelimo polling staff rigging results. The Constitutional Council, which is supposed to be independent but answers to Frelimo, confirmed Chapo's victory but quietly reduced his vote share from 70% to 65%, a tacit admission the original numbers were absurd.

The opposition candidate, Venâncio Mondlane, is a charismatic 50-year-old independent backed by the PODEMOS party. He's young, social media-savvy, and popular with Mozambique's enormous youth demographic (70% of Mozambicans are under 30). His campaign drew massive crowds. His observers recorded him winning 53%. When the official results declared Chapo the winner, Mondlane called it a "constitutional coup" and urged Mozambicans to resist.

And they did. Protests erupted in Maputo, Beira, Nampula—every major city. Initially peaceful, they turned violent when security forces opened fire. Over 350 people have been killed, according to watchdog organizations, with police blamed for most deaths. Over 4,000 have been detained, many without charge. It's some of the worst political violence Mozambique has seen in 30 years, since the end of the civil war in 1992.

Frelimo's strategy is repression. They're not negotiating, not compromising, not offering dialogue. They're shooting protesters, arresting activists, and choking off internet access to disrupt organizing. Chapo, in a moment of stunning tone-deafness, blamed an "invisible hand" for the violence—suggesting foreign interference rather than acknowledging that Mozambicans are furious about a rigged election.

**Frelimo: From Liberation Movement to Authoritarian Machine**

Frelimo (Frente de Libertação de Moçambique) was the guerrilla movement that fought Portuguese colonial rule and won independence in 1975. For decades, it governed Mozambique as a Marxist-Leninist one-party state. After the Cold War and the civil war (1977-1992), Frelimo embraced multiparty democracy and market economics, but it never relinquished power. It's won every election since 1994, often through fraud, intimidation, and patronage.

By November 2025, Frelimo is an authoritarian party clinging to power through violence and state capture. It controls the judiciary, the electoral commission, the security forces, and much of the media. Opposition parties exist, but they operate in a rigged system. Civil society is harassed. Independent journalists are threatened. Corruption is endemic—Frelimo elites siphon off state resources, award contracts to cronies, and accumulate wealth while most Mozambicans live in poverty.

Chapo, at 48, represents a generational shift within Frelimo, but not an ideological one. He's younger than his predecessor, Filipe Nyusi, but he's a Frelimo apparatchik through and through. He was governor of Inhambane Province, a Frelimo stronghold, before being anointed as the party's presidential candidate. His message is continuity, not change. And his presidency, born from fraud and sustained by violence, is Frelimo's starkest expression of contempt for democracy.

**The Opposition: Mondlane and the Youth Movement**

Venâncio Mondlane is the face of Mozambique's opposition, but he's more than a candidate—he's a symbol. Young, articulate, and unafraid, he's tapped into the rage of a generation that's seen Frelimo steal their futures. Unemployment among Mozambican youth is catastrophic. Education is poor. Healthcare is non-existent in rural areas. Meanwhile, Frelimo leaders live in mansions, drive luxury cars, and send their children to European universities.

Mondlane's backers, the PODEMOS party, are a relatively new force, appealing to urban youth and disaffected Frelimo voters. But PODEMOS doesn't have the machinery or resources to compete with Frelimo's patronage networks in rural areas. So Mondlane's strategy is mass mobilization—protests, strikes, civil disobedience. He's calling for a complete overhaul of Mozambique's electoral system and a new, clean vote. Frelimo's response is bullets.

The opposition faces a strategic dilemma. Mondlane can mobilize protests, but protests alone don't topple governments unless the security forces defect or the economy collapses. So far, Mozambique's military and police remain loyal to Frelimo (they're paid to be). And while the economy is struggling, it hasn't imploded. Frelimo is betting it can outlast the protests—that fatigue, repression, and fragmentation will eventually break the movement.

**The Cabo Delgado Insurgency: A Parallel Crisis**

While Maputo burns over the election, northern Mozambique is still fighting a deadly Islamist insurgency. Since 2017, militants linked to ISIS have waged a brutal campaign in Cabo Delgado Province, killing thousands, displacing nearly a million, and threatening the region's massive natural gas projects (Mozambique has some of the world's largest offshore gas reserves).

The government's response has been militarized and ineffective. Mozambican forces, backed by Rwandan troops and Southern African Development Community (SADC) forces, have pushed the insurgents out of major towns, but they haven't defeated them. The militants retreat into the bush, regroup, and strike again. Meanwhile, the humanitarian crisis is catastrophic—displaced people living in camps, no access to food or healthcare, and the government offers little relief.

Frelimo uses Cabo Delgado as a justification for authoritarianism—"we're fighting terrorism, we need strong security measures." But the insurgency is partly Frelimo's fault. Cabo Delgado is one of Mozambique's poorest regions despite its gas wealth. Locals see no benefit from the gas projects (the profits go to Frelimo elites and foreign companies), so they're susceptible to insurgent recruitment. If Frelimo had governed inclusively and shared the wealth, the insurgency might never have taken root.

**Corruption, State Capture, and the "Hidden Debt" Scandal**

Mozambique is one of the world's most corrupt countries. In 2016, the "hidden debt" scandal exposed how Frelimo officials borrowed $2 billion in secret loans (guaranteed by the government) to buy fishing boats and maritime security equipment. The loans were actually embezzled—the boats were never delivered, and the money vanished into offshore accounts. The scandal triggered an economic crisis, donor withdrawal, and criminal prosecutions (mostly abroad—Mozambican courts did little).

The scandal is a microcosm of Frelimo's governance: kleptocratic, secretive, and indifferent to consequences. Mozambique is rich in resources—gas, coal, minerals, agricultural potential—but the wealth is looted, not invested. Infrastructure is crumbling. Public services barely function. And ordinary Mozambicans, especially the youth, are left with nothing.

**International Response: Indifference and Complicity**

The international community's response to Mozambique's crisis has been pathetic. The EU issued statements of concern. The US called for dialogue. The African Union said nothing of substance. Portugal, Mozambique's former colonizer and still a major partner, has been mealy-mouthed. SADC, which has troops in Cabo Delgado, is dominated by ruling parties like South Africa's ANC and Zimbabwe's ZANU-PF, who have no interest in criticizing fellow liberation movements turned autocracies.

The silence is partly about gas. Mozambique's offshore reserves are huge, and Western energy companies (TotalEnergies, ExxonMobil) have billions invested. Governments don't want to jeopardize those projects by condemning Frelimo too loudly. So they issue bland statements while Mozambicans die in the streets.

**The Bottom Line**

Mozambique in November 2025 is a country on the brink. Chapo's presidency is illegitimate, sustained by violence and fraud. Frelimo has held power for 50 years, but the costs—authoritarianism, corruption, impunity—are finally triggering mass resistance. The youth-led protest movement is real, angry, and growing. But Frelimo still controls the guns, the courts, and the resources. This is a test of endurance: can Frelimo repress its way through, or does something break—military defections, economic collapse, international pressure? Watch for whether the protests sustain through 2026 or fatigue sets in. Watch for whether Mondlane can translate street energy into political power. And watch for whether the international community finally cares enough to act. Mozambique's cycles of violence won't end until Frelimo's grip is broken. The question is whether that happens through reform or revolution.`

const MYANMAR_POLITICS = `Naypyidaw, November 2025, and Myanmar isn't a country anymore—it's a war zone with borders. Four years after the military coup that overthrew Aung San Suu Kyi's elected government, Myanmar has disintegrated into a grinding civil war. The junta, led by Senior General Min Aung Hlaing, controls maybe 21% of the country (some analysts say as low as 15%). Ethnic armed organizations (EAOs) and People's Defence Forces (PDFs) hold around 42-45%, and the rest is contested. Over 3,400 people died in a March 2025 earthquake, prompting brief ceasefires that evaporated within days. In July, the junta dissolved itself and transferred power to a "National Defence and Security Council" under—surprise—Min Aung Hlaing, a cosmetic restructuring that changes nothing. In October, junta forces retook Kyaukme in northern Shan State, a rare military success, but it was achieved with Chinese backing. Because that's the story now: China is propping up the junta, helping it regain territory, while the National Unity Government (NUG)—Myanmar's shadow government in exile—struggles to unify a fractured resistance. And the junta, cornered and desperate, has announced elections for late 2025 or early 2026, a farcical exercise designed to legitimize military rule. This is Myanmar politics in November 2025: a failed state, a brutal junta, a divided resistance, and a population that's endured four years of hell with no end in sight.

**The Junta: Min Aung Hlaing's Crumbling Regime**

Min Aung Hlaing is the face of Myanmar's catastrophe. Commander-in-Chief of the Tatmadaw (Myanmar's military) since 2011, he orchestrated the February 2021 coup after his party lost the 2020 elections. His justification? Unproven claims of electoral fraud. The real reason? The military's refusal to cede power to civilians. Myanmar had been in a troubled transition since 2011, with the military maintaining a constitutionally guaranteed political role (25% of parliamentary seats reserved for military appointees). But the National League for Democracy (NLD), led by Aung San Suu Kyi, won landslide victories in 2015 and 2020, threatening the military's grip. So Min Aung Hlaing seized power.

The coup triggered mass protests, a general strike, and a civil disobedience movement. The junta's response was slaughter. Security forces killed over 1,400 protesters in the first year. Thousands more were arrested, tortured, and disappeared. Suu Kyi was jailed on fabricated charges and remains imprisoned. But the repression didn't crush resistance—it militarized it. The NUG, formed by ousted NLD lawmakers and ethnic leaders, declared a "people's defensive war" and established the PDFs—citizen militias fighting the Tatmadaw.

By November 2025, the junta controls only major cities (Yangon, Naypyidaw, Mandalay) and some strategic towns. Vast rural areas are in rebel hands. The Tatmadaw is overstretched, demoralized, and bleeding defectors. But it still has heavy weapons, air power, and—crucially—Chinese support. In October, China helped the junta retake Kyaukme, signaling Beijing's willingness to intervene to stabilize its chaotic neighbor. For Min Aung Hlaing, Chinese backing is a lifeline. Without it, the junta collapses.

In July, Min Aung Hlaing dissolved the State Administration Council (SAC), the junta's governing body, and transferred power to a new National Defence and Security Council. This was pure window-dressing—the same people, the same policies, a new name. The purpose was to prepare for the junta's planned elections, which it announced for late 2025 or early 2026. These elections are a joke. Opposition parties are banned, the NLD is dissolved, candidates are handpicked, and campaigning happens under martial law. The goal isn't democracy—it's to create a veneer of legitimacy for international consumption, particularly to appease China and ASEAN.

**The National Unity Government (NUG): A Government Without Territory**

The NUG is Myanmar's shadow government, formed in April 2021 by ousted lawmakers, ethnic leaders, and civil society activists. Its acting president is Duwa Lashi La, an ethnic Kachin. Its ministers operate from exile (mostly Thailand and India) or underground in Myanmar. The NUG's strategy is to unite Myanmar's fractured opposition—ethnic armed organizations (EAOs), PDFs, and pro-democracy activists—into a federal democratic coalition.

It's not working. The NUG faces a fundamental problem: the EAOs aren't fighting for democracy—they're fighting for autonomy or independence in their ethnic states (Kachin State, Shan State, Karen State, etc.). The EAOs have been at war with the Tatmadaw for decades, long before the 2021 coup. They see the NUG as a Bamar (ethnic majority) institution that, if it takes power, will replicate Myanmar's centralized, Bamar-dominated governance. So while some EAOs coordinate with the NUG, they don't take orders from it. They're allies of convenience, not subordinates.

The PDFs are even more fragmented. They're local militias, often poorly armed and trained, operating semi-independently. Some align with the NUG, others with EAOs, and some are warlord-led groups pursuing local agendas. The NUG has declared 2025 the "end game" and talks about liberating Naypyidaw, but it lacks the military capacity. The junta has helicopters, artillery, and air strikes. The PDFs have rifles, improvised explosives, and courage. That's not enough.

Politically, the NUG's legitimacy is contested. It claims to represent Myanmar's democratic will (the elected NLD won the 2020 elections, after all), but the NLD's leader, Suu Kyi, is in prison and can't lead. The NUG is led by figures with limited popular recognition. And its "federal democratic vision" is vague—ethnic groups want concrete commitments on autonomy, resource-sharing, and power-devolution, and the NUG hasn't delivered.

**The Ethnic Armed Organizations: Pursuing Their Own Agendas**

Myanmar's civil war isn't binary (junta vs. resistance)—it's multi-sided chaos. The EAOs are key players: the Kachin Independence Army (KIA), the Arakan Army (AA), the Karen National Union (KNU), the Ta'ang National Liberation Army (TNLA), and others. These groups control territory, run local governance, and tax trade routes. They've been fighting the Tatmadaw since Myanmar's independence in 1948, seeking autonomy or independence for their ethnic states.

The 2021 coup gave the EAOs an opportunity. With the Tatmadaw tied down fighting PDFs and urban resistance, the EAOs seized territory. By November 2025, they control around 45% of Myanmar. But they're not unified. The KIA fights in Kachin State, the AA in Rakhine State, the KNU in Karen State—each with its own objectives. Some coordinate loosely under the "Federal Political Negotiation and Consultative Committee," but there's no central command.

The critical question is whether the EAOs want a unified Myanmar or independence. If the junta falls, what replaces it? A federal Myanmar where ethnic states have real autonomy? A fragmented state where ethnic regions secede? The NUG promises federalism, but Myanmar's history is one of Bamar domination. Ethnic groups are skeptical. So the EAOs hedge—they fight the junta, cooperate with the NUG when convenient, but keep their options open.

**China's Role: Propping Up the Junta**

China is the kingmaker in Myanmar's war. Beijing has billions invested in Myanmar—pipelines, ports, infrastructure projects. It needs stability, and it prefers a pliable military regime to a messy federal democracy or a fragmented state. So China is backing the junta. In October 2025, Chinese support helped the Tatmadaw retake Kyaukme in Shan State, a significant victory for Min Aung Hlaing.

But China also talks to the EAOs. Beijing has leverage over several groups (the KIA, TNLA, and others operate near the Chinese border and rely on cross-border trade). China's game is to manage Myanmar's chaos, prevent spillover into Yunnan Province, and ensure its economic projects aren't threatened. If the junta stabilizes, great. If the EAOs gain ground, China will negotiate with them.

The NUG despises China's role but can't do much about it. Western support for the NUG is rhetorical, not material. The US and EU impose sanctions on the junta but won't arm the resistance. So the NUG is outgunned, out-resourced, and diplomatically isolated.

**The Planned Elections: Farcical Legitimization**

The junta announced elections for late 2025 or early 2026. This is a farce. The NLD is banned. Suu Kyi is imprisoned. Opposition candidates can't campaign. Media is controlled. The junta will handpick a compliant parliament, rubber-stamp a new constitution, and declare Myanmar "democratic." It's a script borrowed from every military dictatorship: stage fake elections, claim legitimacy, hope the international community accepts it because they're tired of the issue.

It won't work domestically—Burmese people aren't stupid—but it might work internationally. China will recognize the election. ASEAN, which includes fellow autocracies, might too. If enough countries accept the junta's "elected government," Myanmar's isolation eases, sanctions lift, and Min Aung Hlaing survives.

**The Humanitarian Catastrophe**

Four years of civil war have destroyed Myanmar. The economy has collapsed. The kyat is worthless. Inflation is rampant. Millions are displaced. Healthcare and education systems have disintegrated. The March 2025 earthquake killed over 3,400 people and left hundreds of thousands homeless. Both the junta and the NUG declared temporary ceasefires after the quake, but fighting resumed within days because neither side trusts the other.

The international response is woefully inadequate. Humanitarian aid is blocked by the junta or stolen by armed groups. UN agencies operate under severe restrictions. Neighboring countries (Thailand, India, Bangladesh) host refugees but offer limited support.

**The Bottom Line**

Myanmar in November 2025 is a failed state locked in a grinding civil war. The junta controls cities but is losing the countryside. The NUG claims legitimacy but lacks unity or military strength. The EAOs control territory but pursue their own agendas. China props up the junta to protect its interests. And the Myanmar people suffer. The junta's planned elections are a farce. The NUG's "end game" is wishful thinking. Barring external intervention (highly unlikely), Myanmar faces years more of war, fragmentation, and humanitarian disaster. Watch for whether the junta's Chinese-backed counteroffensive gains momentum or whether the resistance can regroup. Watch for whether the EAOs splinter further or coalesce. And watch for whether the international community decides Myanmar matters enough to act. As of November 2025, the answer is no.`

const NEPAL_POLITICS = `Kathmandu, November 2025, and Nepal is in full election mode. In September, mass protests—led by students and young citizens furious at yet another coalition collapse—forced the dissolution of Parliament. The King (actually, Nepal has a ceremonial president, Ram Chandra Poudel, but "King" captures the gravitas) appointed Sushila Karki as interim Prime Minister and announced elections for March 5, 2026. Now, in November, the Election Commission is registering political parties. Seventeen new parties have applied, including the "Ujyaalo Nepal Party" backed by celebrity Energy Minister Kulman Ghising, who's parlaying his reputation for fixing Nepal's chronic electricity shortages into a political brand. Meanwhile, the old guard—Nepal Congress (NC) and Communist Party of Nepal-Unified Marxist Leninist (UML)—are scrambling. Their July 2024 power-sharing deal (K.P. Oli as PM for two years, Sher Bahadur Deuba for the next two, then elections in 2027) lasted all of two months before imploding. Nepal's politics is a maddening cycle: coalitions form, govern briefly, collapse over personal rivalries or patronage disputes, then new coalitions form. Rinse, repeat. And all the while, ordinary Nepalis endure the consequences—dysfunctional governance, stalled development, and a political class more interested in power games than public service.

**The Coalition Collapse and September Crisis**

Let's rewind to July 2024. The UML and Nepal Congress—Nepal's two largest parties and bitter rivals—shocked everyone by forming a coalition government. The deal: UML's K.P. Sharma Oli would serve as Prime Minister for the first two years, then NC's Sher Bahadur Deuba would take over until elections in 2027. On paper, it looked like stability. Two big parties, a clear succession plan, enough parliamentary seats to govern.

It lasted maybe eight weeks. By September, the coalition was in chaos. The UML and NC couldn't agree on cabinet portfolios, budgets, or policy. Personal enmities between Oli and Deuba—two of Nepal's most experienced and ruthless politicians—poisoned cooperation. Meanwhile, the third-largest party, the Maoist Centre (led by Pushpa Kamal Dahal, known as Prachanda), was causing havoc from outside the coalition, peeling off MPs and threatening no-confidence votes.

Then the protests started. Students and young Nepalis, fed up with the coalition's dysfunction, took to the streets on September 8, 2025. The demonstrations were massive—Kathmandu, Pokhara, Biratnagar, every major city. The message was clear: dissolve Parliament, stop the circus, hold fresh elections. President Poudel, facing a legitimacy crisis, dissolved Parliament on September 12 and appointed Sushila Karki—a former Chief Justice with a reputation for integrity—as interim PM to oversee elections.

Karki's appointment was smart politics. She's not a party operative, she's seen as clean, and she commands respect across the political spectrum. Her job is narrow: run the country, ensure free elections, and step aside once the new government is formed. But even this has been contentious. The UML and NC are both maneuvering to ensure the March 2026 elections favor them—gerrymandering constituency boundaries, influencing the Election Commission, and mobilizing patronage networks.

**The New Party Registration Period**

Between October 6 and November 16, the Election Commission accepted applications for new political parties. Seventeen parties applied—ten before the election date was announced, seven after. This is typical for Nepal. Every election cycle, dozens of new parties register, hoping to capture protest votes or regional constituencies. Most fail. Nepal's electoral system uses a mixed-member proportional model—165 seats elected via first-past-the-post constituencies, 110 via proportional representation. This rewards established parties with strong local machines (NC, UML, Maoists) and punishes newcomers without resources or name recognition.

But one new party is different: the Ujyaalo Nepal Party, backed by Kulman Ghising. Ghising is Nepal's Energy Minister and a genuine public hero. For years, Nepal suffered crippling power cuts—8-12 hours a day, collapsing the economy and infuriating citizens. Ghising, as head of the Nepal Electricity Authority, fixed it. He overhauled the grid, cracked down on theft, and negotiated electricity imports from India. By 2025, Nepal has surplus power. Ghising is seen as competent, non-corrupt, and results-oriented—rare in Nepali politics.

His entry into electoral politics is a wild card. If Ujyaalo Nepal can mobilize young, urban, educated voters who are disgusted with the old parties, they could win 15-20 seats and become kingmakers in a hung parliament. But Nepal's politics rewards patronage, not competence. Ghising's party will struggle in rural constituencies where NC and UML control village councils, distribute cash and jobs, and rely on caste and kinship networks. Still, his candidacy signals a generational shift—Nepal's youth want leaders who deliver, not political dynasties who trade power.

**The Old Guard: NC and UML**

Nepal Congress and UML have dominated Nepali politics since the 1990s. Both are catch-all parties with vague ideologies (NC is nominally centrist, UML is nominally communist, but both are patronage machines). Both are led by aging politicians—Sher Bahadur Deuba (NC) is 79, K.P. Oli (UML) is 73. They've been PM multiple times (Deuba five times, Oli twice), and their rivalry is personal, not ideological.

The NC's base is upper-caste Hindus, business elites, and some rural constituencies with historical Congress loyalty. The UML's base is broader—it absorbed Nepal's Communist Party factions and appeals to workers, peasants, and ethnic minorities. But in practice, both parties govern the same way: distribute patronage, reward loyalists, and avoid structural reforms.

The March 2026 election is existential for both. If NC and UML lose significant seats to Maoists or new parties like Ujyaalo Nepal, their duopoly ends. If they hold, they'll form another coalition, fight over who's PM, collapse within a year, and repeat the cycle. Nepali voters are exhausted by this, but the electoral system and patronage culture make change hard.

**The Maoist Centre: Prachanda's Endless Maneuvering**

Pushpa Kamal Dahal, known as Prachanda ("the fierce one"), led the Maoist insurgency that killed 17,000 people in Nepal's civil war (1996-2006). After the war, the Maoists entered politics and briefly governed (Prachanda was PM in 2008-09 and 2022-24). Now, the Maoist Centre is the third-largest party, holding around 32 seats in the last parliament.

Prachanda is Nepal's ultimate political operator—shifting alliances, making deals, breaking deals, all to stay relevant. He's allied with NC, then UML, then back to NC, depending on who offers him power. In the March 2026 election, the Maoists face a strategic choice: align with NC or UML (and hope for ministerial posts in a coalition), or position themselves as a radical alternative (and risk being shut out).

Prachanda's problem is that the Maoists' revolutionary credibility is gone. They promised to transform Nepal into a socialist republic, uplift the poor, and break elite dominance. Instead, they've become part of the establishment—taking ministerial salaries, distributing patronage, and enriching cadres. Younger Nepalis see them as hypocrites. The Maoists' base is eroding, particularly among Dalits and ethnic minorities who feel betrayed.

**Regional Parties and Ethnic Politics**

Nepal is ethnically and regionally diverse—Madhesis (plains-dwellers of Indian origin), indigenous Janajatis, Dalits, and upper-caste hill Hindus. Regional parties representing Madhesis (concentrated in the southern Terai region) have won seats in past elections and demanded federalism, autonomy, and reserved representation.

The 2015 constitution created a federal structure with seven provinces, but implementation has been weak. Madhesi parties complain they're shut out of central power and that federalism is a sham. Ethnic tensions simmer, and in some constituencies, Madhesi parties can win. But they're fragmented—multiple Madhesi parties compete, splitting the vote and losing to NC or UML. If they unified, they'd be kingmakers. They won't.

**Institutional Dysfunction and Corruption**

Nepal's institutions are weak. The judiciary is politicized—judges are appointed through party deals. The civil service is bloated, inefficient, and corrupt. The Election Commission is nominally independent but subject to political pressure. Anti-corruption agencies exist but rarely prosecute powerful politicians.

Corruption is endemic. Public contracts go to party donors. Civil service jobs are bought and sold. Development budgets are embezzled. Transparency International ranks Nepal poorly, and ordinary Nepalis know it. The September protests weren't just about coalition collapse—they were about systemic dysfunction.

**The Bottom Line**

Nepal in November 2025 is gearing up for yet another election, the latest iteration of its maddening political cycle. The old parties—NC and UML—dominate, but they're stale and discredited. New parties like Ujyaalo Nepal offer hope for change, but Nepal's electoral system and patronage culture favor incumbents. The interim government under Sushila Karki is a brief respite, but after March 2026, expect another coalition, more infighting, and eventual collapse. The real question is whether Nepal's voters—especially the youth who protested in September—can force a break from this pattern. If Ghising's party or other reformers win enough seats to disrupt the NC-UML duopoly, there's a chance. If not, it's business as usual. Watch the March 2026 results. Nepal's politics is exhausting, but it's also consequential—this is a country sandwiched between China and India, strategically vital and perpetually unstable.`

const NETHERLANDS_POLITICS = `Amsterdam, November 2025, and Dutch politics just delivered a plot twist nobody saw coming. On October 29, the Netherlands held snap elections after Geert Wilders' far-right coalition collapsed. Wilders, who won the 2023 elections and spent months assembling a coalition of his PVV (Party for Freedom), the center-right VVD, the farmer's party BBB, and the new centrist NSC, couldn't hold it together. His government, led by technocratic Prime Minister Dick Schoof (not a PVV member, but Wilders' pick), fell apart after barely a year. So the Dutch went back to the polls. And what happened? Wilders got hammered. The PVV lost 11 seats, dropping from 37 to 26. Meanwhile, Rob Jetten's social liberal D66 surged, also winning 26 seats and edging Wilders by a razor-thin 29,668 votes to claim the largest party status. On November 7, the Dutch Electoral Council officially declared Jetten the winner, making the 38-year-old likely to become the Netherlands' youngest-ever PM. It's a stunning rebuke to Wilders and a potential turning point for European populism. But—and it's a big but—Jetten now has to form a coalition in the Netherlands' notoriously fractious system. And every mainstream party ruled out working with Wilders before the election. Can Jetten build a majority? Or does the Netherlands slide into another messy coalition or even a third election? November 2025 is coalition-formation limbo, and Dutch politics is holding its breath.

**The October 2025 Election: Wilders' Defeat and Jetten's Triumph**

Let's start with the result. The PVV and D66 tied at 26 seats each in the 150-seat House of Representatives, but D66's Jetten won the popular vote by 29,668 votes, enough to claim victory. Jetten, who's been D66 leader since 2020, ran a campaign against Wilders' anti-Islam, anti-immigration populism, framing the election as a choice between open, liberal Netherlands and Wilders' nativist vision. And Dutch voters, particularly in cities like Amsterdam, Utrecht, and Rotterdam, chose Jetten.

Wilders' PVV collapse was spectacular. He went from 37 seats (the largest party in 2023) to 26, losing 11 seats. Some former PVV voters switched to Jetten's D66. Others backed Forum for Democracy (FvD), another hard-right party led by Thierry Baudet, which gained four seats to finish with seven. But overall, the far-right lost ground.

The other big story is the annihilation of Pieter Omtzigt's NSC (New Social Contract), which won 20 seats in 2023 as a new centrist anti-corruption party and joined Wilders' coalition. NSC lost all 20 seats. Dutch voters punished them for enabling Wilders. The VVD (the traditional center-right party of Mark Rutte, who governed for 14 years until 2023) and BBB (the farmer's party) also lost seats. The coalition that governed the Netherlands for barely a year was obliterated.

**Why Did Wilders Lose?**

Wilders' defeat has several causes. First, he governed poorly. His coalition was ideologically incoherent—the PVV (anti-Islam, anti-EU), VVD (pro-business, centrist), NSC (anti-corruption, technocratic), and BBB (rural, agrarian) had nothing in common except opposition to the previous government. The Schoof cabinet (named after the technocratic PM Wilders installed because he knew he couldn't be PM himself and govern effectively) lasted only months before collapsing over infighting.

Second, Wilders' rhetoric frightened moderates. His anti-Islam statements, calls to ban the Quran, and proposals to close mosques energized his base but repelled swing voters. The Netherlands is a tolerant, multicultural society—Rotterdam is 50% immigrant-origin, Amsterdam is hyper-diverse. Wilders' messaging plays in rural, white provinces but alienates cities. And Dutch elections are won in cities.

Third, the economy didn't help him. The Netherlands' economy is strong (low unemployment, robust exports), but housing is a crisis. Prices in Amsterdam and Utrecht are insane, young Dutch people can't afford to buy, and Wilders' coalition had no credible housing plan. D66 promised aggressive housebuilding, zoning reform, and a YIMBY approach (Yes In My Backyard—build more housing, fast). That resonated.

Fourth, Jetten ran a brilliant campaign. He's young, articulate, and progressive without being preachy. He's gay and open about it, which plays well in liberal Netherlands. He framed the election as a choice: "Do we want Wilders' divisive fear, or Jetten's inclusive optimism?" Enough voters chose the latter.

**Coalition Formation: Jetten's Challenge**

Now comes the hard part: forming a government. Jetten's D66 has 26 seats. He needs 76 for a majority. And he's ruled out working with Wilders (as have all mainstream parties). So where does he find 50 more seats?

Option 1: A left-progressive coalition with GroenLinks-PvdA (the merged Green-Labor party, which won around 25 seats), smaller left parties, and possibly the Christian Democrats (CDA). This gets Jetten to maybe 60-65 seats. Not enough. He'd need other small parties—liberal, centrist, or regional—to join. It's possible but fragile.

Option 2: A broad centrist coalition including VVD (even though they lost seats, they still have around 20), CDA, and smaller centrist parties. This is ideologically messy—D66 is left-liberal, VVD is center-right—but Dutch politics is pragmatic. They've governed together before (under Rutte). It's doable, but it means compromises on taxation, climate, and immigration that D66's base won't love.

Option 3: A grand coalition with GroenLinks-PvdA, VVD, and CDA. This would be a rainbow coalition spanning left to right, united only by opposition to Wilders. It's happened in Germany (repeatedly). It could happen here. But it's unwieldy, and policy coherence would be a nightmare.

Jetten is negotiating now (November 2025). Dutch coalition talks typically take months—sometimes half a year. The longest (2017) took 225 days. Jetten's priority is excluding Wilders while building a stable majority. If he fails, the Netherlands could face a third election, voter fatigue, and a possible Wilders comeback.

**Wilders' Future: Opposition or Oblivion?**

Wilders, after his defeat, offered to join Jetten's coalition. Jetten refused. Every mainstream party refused. Wilders is toxic. His anti-Islam rhetoric violates Dutch norms of tolerance. His party is a one-man show (the PVV has no members, just Wilders). Governing with him is politically suicidal, as the VVD and NSC just learned.

So Wilders is back in opposition, where he's most comfortable. He'll attack Jetten's government, stoke anti-immigration sentiment, and wait for the next crisis (a terror attack, a refugee influx, an economic downturn). The far-right doesn't disappear—it waits. Wilders has been in Dutch politics for 25 years. He's patient.

But his brand is damaged. The 2023-2025 coalition experiment proved the PVV can't govern. Voters punished him for failure. If D66 and its coalition partners deliver—build housing, manage immigration humanely, keep the economy strong—Wilders' appeal diminishes. If they fail, he's back.

**The Far-Right Spillover: Forum for Democracy**

Thierry Baudet's FvD gained seats (from three to seven), suggesting some far-right voters abandoned Wilders for a more radical alternative. Baudet is more extreme than Wilders—conspiracy theorist, anti-vax, pro-Russia. He's charismatic and appeals to young men radicalized online. The FvD is too extreme to join any coalition, but seven seats gives them a platform. Watch for whether they grow or whether Baudet's radicalism repels voters.

**The Broader European Context**

The Netherlands' election result is significant beyond its borders. Far-right parties have been surging across Europe—Meloni in Italy, Le Pen's National Rally in France, AfD in Germany, Sweden Democrats, etc. Wilders' defeat is the first major far-right setback in years. It suggests voters, when confronted with far-right governance, find it wanting.

This is the Jetten thesis: far-right populism thrives in opposition, but it can't govern. Wilders proved it. Now Jetten has to prove the alternative works—that centrist, liberal governance can solve problems (housing, immigration, climate) without lurching to extremes.

**Institutional Health and Dutch Democracy**

The Netherlands' democracy is robust. Elections are free and fair. Turnout is high. Institutions are strong. Coalition formation is messy but functional—it's how multiparty democracies work. The Dutch media is independent and aggressive. Civil society is vibrant.

But there are strains. Housing is a crisis. Immigration is divisive. The gap between cities (progressive, multicultural) and rural areas (conservative, homogenous) is widening. The PVV's 26 seats (and FvD's seven) mean a third of Dutch voters still back the far-right. They won't disappear. Jetten's government has to deliver for them too, or polarization deepens.

**The Bottom Line**

The Netherlands in November 2025 is in coalition limbo. Jetten's D66 won the election, but forming a government will take months. If he succeeds, the Netherlands has a center-left government that can serve as a model for countering far-right populism—proof that liberal, inclusive governance works. If he fails, the Netherlands faces a third election, more chaos, and possibly a Wilders comeback. Wilders, meanwhile, is wounded but not finished. He'll rebuild in opposition. Watch for whether Jetten's coalition can deliver housing, manage immigration, and govern competently. If they do, the far-right recedes. If not, Wilders is waiting.`

const NEW_ZEALAND_POLITICS = `Wellington, November 2025, and Christopher Luxon's National-led coalition government is feeling the squeeze. Luxon, who became Prime Minister in late 2023 after National's election victory, is watching his political capital evaporate. A 1 News-Verian poll from August showed National on 34%, barely ahead of Labour's 33%—a statistical tie. Luxon's personal approval has dropped to its lowest in two years. If those numbers hold, neither centre-left (Labour, Greens, Te Pāti Māori) nor centre-right (National, ACT, NZ First) can form a majority. Both blocs would have 61 seats each in a 122-seat Parliament, which is a recipe for gridlock, minority government, or a third election. And this is New Zealand—a country that prides itself on stable, competent governance, where coalition governments usually last their full three-year terms and political drama is rare. But November 2025 feels different. Luxon's coalition is struggling on cost of living, the economy is sluggish, and Labour, under former PM Chris Hipkins, has clawed back support. The next election isn't until late 2026, but the mood is shifting. Luxon's honeymoon is over. The question is whether he can reset, or whether Labour's return is already baked in.

**The Luxon Government: Centre-Right Coalition Under Pressure**

Christopher Luxon is a former CEO of Air New Zealand who entered politics in 2020 and became National Party leader in 2021. He's polished, corporate, and projects competence—very much the business-executive-turned-politician archetype. National won the 2023 election after six years of Labour government under Jacinda Ardern and then Chris Hipkins, campaigning on economic management, tax cuts, and getting tough on crime. Luxon formed a coalition with ACT (a libertarian-right party led by David Seymour) and New Zealand First (a populist party led by Winston Peters, the eternal kingmaker of NZ politics).

It's an awkward coalition. ACT wants radical free-market reforms—cut spending, slash regulations, shrink the state. NZ First wants populist interventions—restrict immigration, protect pensioners, boost regional spending. National sits in the middle, trying to satisfy both while governing for the mainstream. The result is policy incoherence. Tax cuts were promised but diluted. Crime policies are tough on rhetoric but light on results. Cost-of-living relief is minimal.

And voters are noticing. Luxon's preferred PM rating is around 20%, tied with Labour's Hipkins. That's dire for a sitting PM barely two years into the job. The August poll showing National at 34% and Labour at 33% is a warning: if an election were held today, Luxon might lose. No sitting New Zealand PM wants to be in that position 18 months out from an election.

**Labour's Resurgence: Hipkins Rebuilds**

Chris Hipkins became Labour leader and PM in early 2023 after Jacinda Ardern resigned. He led Labour into the 2023 election and lost, but not catastrophically—Labour won 33% and 43 seats, remaining the largest opposition party. Hipkins is a political operator—less charismatic than Ardern, but more pragmatic and grounded. He's repositioned Labour as the party of economic fairness, healthcare, and competence.

And it's working. Labour's 33% in the August poll is a significant recovery. They've hammered National on cost of living, pointing out that Luxon's tax cuts mostly benefit the wealthy while ordinary Kiwis struggle with grocery prices, rent, and mortgage rates. Labour's message is simple: National promised relief and delivered for the rich. We'll deliver for working families.

Labour's coalition partners—the Greens (polling around 10-12%) and Te Pāti Māori (around 5%)—are stable. If Labour can edge up to 35-36%, they're back in government. Hipkins knows this. He's playing a long game: let Luxon's coalition fracture, let economic dissatisfaction grow, and position Labour as the competent, caring alternative.

**The Economy: The Defining Issue**

New Zealand's economy is the story of November 2025. Growth is sluggish—around 1-2%, below trend. Unemployment is creeping up. Inflation has moderated from its 2022-2023 peaks but remains elevated, and the Reserve Bank of New Zealand (RBNZ) has kept interest rates high to choke off price pressures. That means mortgage rates are painful, hitting homeowners hard.

Cost of living is the killer issue. Groceries are expensive (New Zealand's supermarket duopoly—Woolworths and Foodstuffs—keeps prices high). Rent is unaffordable in Auckland and Wellington. Petrol prices spike whenever global oil markets hiccup. And wages, while rising, haven't kept pace. Middle-class Kiwis—the swing voters who decide elections—are feeling squeezed.

Luxon's response has been underwhelming. His government passed modest tax cuts, but they were delayed and watered down to keep the coalition intact. ACT wanted bigger cuts; NZ First wanted none (they're funded by pensioners who don't pay much tax). The compromise satisfied no one. National's rhetoric is about "fiscal responsibility" and "growing the economy," but there's no bold vision. It's managerialism without inspiration.

Labour's pitch is redistribution: tax the wealthy, fund public services, and directly support struggling families. It's not revolutionary, but it's clear. And in a cost-of-living crisis, clarity wins.

**Coalition Dynamics: Herding Cats**

Luxon's coalition is fragile. ACT's David Seymour is a sharp-tongued libertarian who thinks National is too timid. He wants cuts to health and education spending, welfare reform, and deregulation. National knows this is electoral poison—Kiwis love their public healthcare and schools. So National ignores Seymour, who then attacks National publicly, undermining coalition unity.

Winston Peters and NZ First are the opposite. Peters, who's 80 and has been in parliament since 1978, is a populist who demands more spending on regions (where his voters live), protections for pensioners (his base), and immigration restrictions (his signature issue). He's also mercurial, prone to public outbursts and conspiracy theories. Luxon has to manage Peters carefully—NZ First's nine seats are essential to the coalition's 71-seat majority (out of 122). If Peters walks, the government falls.

This dynamic—Seymour pulling right, Peters pulling populist, Luxon trying to hold centre—produces paralysis. Major reforms stall. Bold policies are diluted. And voters see a government that can't deliver.

**The Opposition: Labour, Greens, and Te Pāti Māori**

Labour's strategy is patience. Hipkins is letting Luxon's coalition self-destruct while Labour projects unity and competence. Labour's caucus is disciplined (no leaks, no infighting). Their messaging is consistent. And they're not promising the moon—just competent, fair governance.

The Greens, led by co-leaders Marama Davidson and James Shaw, are stable at 10-12%. They're pushing hard on climate (New Zealand has ambitious emissions targets but is struggling to meet them), housing (they want massive public housing builds), and inequality. The Greens are Labour's natural coalition partner, and if Labour returns to government in 2026, expect a Labour-Green coalition.

Te Pāti Māori, the Māori rights party, is interesting. They hold six seats (New Zealand has reserved Māori electorates, a legacy of the 1867 Māori Representation Act). They're radical—demanding Māori sovereignty, reparations, and co-governance in public services. They're Labour's coalition partner, but they're also Labour's critic from the left, pushing them to do more for Māori communities. If Labour wins in 2026, managing Te Pāti Māori will be tricky. They'll demand ministries and policy concessions Labour might not want to give.

**Electoral System: MMP and Coalition Math**

New Zealand uses Mixed Member Proportional (MMP), which produces coalition governments. You need 61 seats (out of 122) to govern. Single-party majorities are rare (Labour won one in 2020, the only time since MMP was adopted in 1996). So coalitions are inevitable.

The August poll suggested a 61-61 tie between centre-left and centre-right. If that happens in 2026, New Zealand faces a constitutional crisis. Who governs? The incumbent (Luxon) gets first chance to form a coalition, but if he can't, the Governor-General invites the opposition. If neither can form a majority, you get a minority government (which is unstable and usually triggers a snap election within a year) or a grand coalition (National-Labour, which has never happened in NZ and probably won't).

More likely, the numbers shift by election day. If Labour edges to 35% and National drops to 32%, Labour governs with Greens and Te Pāti Māori. If National holds 34% and Labour slips to 31%, Luxon survives. The next 12 months are about those marginal shifts.

**Key Issues: Housing, Healthcare, Climate**

Housing is New Zealand's permanent crisis. Prices in Auckland and Wellington are among the highest in the world relative to incomes. Young Kiwis can't afford to buy. Labour, when in government (2017-2023), promised to fix this and failed. National is promising to fix this and is also failing. The problem is structural: restrictive zoning, NIMBYism, slow consenting processes, and insufficient construction. Neither party has the political will to override local councils and force density.

Healthcare is strained. New Zealand's public health system is good but underfunded. Wait times for surgeries are long. GP shortages are worsening. National promised to fix this with "back to basics" efficiency. Labour says National is underfunding it. The truth is the system needs more money and more doctors, neither of which is easy to deliver.

Climate is divisive. New Zealand has ambitious targets (net zero by 2050), but achieving them means hard choices—restricting dairy farming (New Zealand's biggest export), carbon pricing, and banning petrol cars. Farmers hate this (they vote National or NZ First). Urban progressives demand it (they vote Labour or Greens). National is watering down climate policies to appease farmers. Labour is promising to restore them if they return to power.

**The Bottom Line**

New Zealand in November 2025 is politically competitive. Luxon's National-led coalition is struggling—coalition tensions, economic sluggishness, cost-of-living pressures—and Labour is resurgent. The next election is late 2026, but the trajectory is worrying for Luxon. If he can't deliver economic relief and hold his coalition together, Hipkins returns to power. Watch for whether National's polling recovers or continues sliding. Watch for coalition fractures (especially NZ First). And watch for Labour's discipline—if they avoid scandals and keep hammering cost of living, they're favorites for 2026. New Zealand politics is rarely dramatic, but November 2025 feels like a turning point.`

const NICARAGUA_POLITICS = `Managua, November 2025, and Nicaragua is no longer a democracy—it's a family dictatorship masquerading as one. Daniel Ortega, the former Sandinista revolutionary who's been president since 2007 (and ruled in the 1980s before that), has transformed Nicaragua into an authoritarian state where no independent institutions remain, opposition voices are silenced, and dissent is punished with exile, imprisonment, or worse. And now, the final pieces are falling into place. In February 2025, Ortega elevated his wife, Rosario Murillo, to "co-president"—a position created by constitutional amendments that also extended presidential terms to six years, expanded executive powers, and gave the government control over media. Murillo, who's been Vice President and the regime's enforcer, is now Ortega's equal on paper and his successor in waiting. Ortega, 79 and reportedly in poor health (rumors of lupus, kidney failure), is preparing the transition. Meanwhile, the repression deepens. In September 2024, 135 political prisoners were expelled to Guatemala and stripped of citizenship—bringing the total arbitrarily denationalized to 452. The Catholic Church is under siege. Independent media is extinct. And the international community? It issues statements and does nothing. Nicaragua is a dictatorship in full view, and the Ortega-Murillo regime doesn't care who knows it.

**The Co-Presidency and Constitutional Coup**

In February 2025, Nicaragua's National Assembly—entirely controlled by Ortega's Sandinista Front (FSLN)—approved constitutional amendments that fundamentally altered the country's governance. The changes:
- **Co-presidency**: Ortega and Murillo are now co-presidents, equal in power. This isn't ceremonial. Murillo now has constitutional authority over domestic policy, security, and administration.
- **Six-year terms**: Presidential terms increased from five to six years, ensuring Ortega and Murillo stay in power until at least 2031.
- **Expanded executive powers**: The amendments give the presidency control over the judiciary, electoral authority, and media. Any pretense of separation of powers is gone.
- **State control of media**: The government now has legal authority to shut down any media outlet deemed a threat to "national stability."

The amendments were rammed through with no debate, no public consultation, and no opposition (because there's no opposition left in the Assembly). They're a constitutional coup, formalizing what's been true for years: Nicaragua is a dictatorship.

Murillo's elevation is significant. She's 73, a former guerrilla fighter, poet, and new-age spiritualist who speaks in cryptic, quasi-religious language. She's been the regime's enforcer since 2007—orchestrating repression, controlling state media, and managing patronage networks. She's more feared than Ortega. And now she's co-president, positioning herself to take full control when Ortega dies or becomes incapacitated.

**Ortega's Health and the Succession**

Ortega is visibly declining. In recent public appearances, he's struggled to walk, looked pale, and appeared frail. Exiled physician Richard Saenz, who treated the Ortega-Murillo family, says Ortega suffers from lupus and kidney failure. How long he has is unclear, but the regime is planning for his death. Murillo's co-presidency ensures a seamless transition. When Ortega dies, Murillo becomes sole president, likely anointing one of their children (they have seven) as vice president or successor.

This is dynastic politics in the crudest form. The Ortegas aren't just running Nicaragua—they're preparing to bequeath it like a monarchy. And there's no one to stop them. The military and police are loyal (they're well-paid and deeply implicated in the regime's crimes). The judiciary is controlled. The electoral system is a farce. Civil society is crushed.

**The Repression: Political Prisoners, Exile, and Denationalization**

The Ortega-Murillo regime's repression is methodical and expanding. Since the 2018 protests (when hundreds of thousands of Nicaraguans demanded Ortega's resignation), the regime has:
- **Imprisoned hundreds**: Over 600 political prisoners have been jailed on fabricated charges (terrorism, treason, money laundering). Conditions are brutal—torture, solitary confinement, denial of medical care. Some have died in custody.
- **Expelled and denationalized**: In September 2024, 135 political prisoners were forcibly expelled to Guatemala and stripped of Nicaraguan citizenship. This brings the total arbitrarily denationalized to 452—including priests, journalists, opposition leaders, and human rights activists. Stripping citizenship is a form of civil death: these people can't return, can't reclaim property, and are stateless unless another country grants them citizenship.
- **Targeted the Church**: The Catholic Church, one of the last institutions with moral authority, is under siege. Bishops have been arrested, churches raided, and priests exiled. Pope Francis has condemned the regime, but Ortega-Murillo ignore him.
- **Crushed independent media**: All independent media outlets have been shut down, their journalists jailed or exiled. State media is pure propaganda, broadcasting Murillo's rambling speeches and Ortega's rants.

The United Nations Group of Human Rights Experts on Nicaragua documented all of this in their 2025 report. They found the regime has "deliberately transformed the country into an authoritarian state where no independent institutions remain, opposition voices are silenced, and the population—both inside and outside Nicaragua—faces persecution, forced exile, and economic retaliation."

**The Farce of Elections**

Nicaragua held presidential elections in November 2021. It was a sham. Ortega arrested all credible opposition candidates months before the vote, ensuring he ran unopposed. He "won" with 75%. International observers called it a farce. The OAS (Organization of American States) condemned it. The US and EU imposed sanctions. Ortega didn't care. He declared victory, claimed the election was the most democratic in Nicaragua's history, and accused the West of imperialism.

There are no more elections scheduled until 2027 (now 2031 under the new six-year term). Even if elections happen, they'll be meaningless. The electoral authority is controlled by the regime. Opposition parties are banned. Candidates are handpicked. Voting is compulsory, but the results are predetermined.

**Economic Collapse and Emigration**

Nicaragua's economy is in dire straits. GDP growth is anemic. Remittances from Nicaraguans abroad (mostly in the US) keep the country afloat—they account for over 15% of GDP. Investment has collapsed. Sanctions have limited access to international financing. The World Bank and IMF suspended aid after the 2021 election fraud.

The regime survives through patronage. Sandinista loyalists get government jobs, contracts, and handouts. Everyone else struggles. Poverty is widespread—over 40% of Nicaraguans live below the poverty line. Youth unemployment is catastrophic.

So Nicaraguans leave. Over 500,000 have fled since 2018—to Costa Rica, the US, Spain. It's a brain drain and a demographic crisis. The people leaving are young, educated, and skilled. They're not coming back.

**International Response: Sanctions Without Bite**

The international response to Nicaragua's dictatorship has been pathetic. The US imposed sanctions on Ortega-Murillo and their cronies (asset freezes, visa bans). The EU did the same. The European Parliament passed resolutions condemning the regime. The OAS suspended Nicaragua's membership.

And none of it matters. Ortega-Murillo don't have assets in the US or EU—they keep their wealth in shell companies and safe havens. Visa bans are irrelevant—they don't travel to the West. And Nicaragua has pivoted to Russia, China, and Iran for diplomatic and economic support. Russia backs Nicaragua in the UN. China provides loans and infrastructure investment. Iran sells oil and shares intelligence on repression tactics.

The West could do more—comprehensive trade sanctions, pressure on allies to isolate Nicaragua, support for the Nicaraguan diaspora. But Nicaragua is small, strategically irrelevant, and not a priority. So Ortega-Murillo get away with it.

**The Opposition in Exile**

Nicaragua's opposition exists, but it's in exile. Prominent figures—like journalist Carlos Fernando Chamorro, opposition leader Félix Maradiaga, and former presidential candidate Cristiana Chamorro—live in Costa Rica, the US, or Europe. They organize, lobby governments, and keep international attention on Nicaragua. But they have no leverage inside the country.

Inside Nicaragua, dissent is whispered, not shouted. Fear is pervasive. Informants are everywhere. Protest is met with imprisonment or worse. The regime has atomized society—trust is destroyed, organizing is impossible.

**The Sandinista Legacy: From Revolution to Repression**

The Sandinistas were heroes once. In 1979, they overthrew the Somoza dictatorship (which had ruled Nicaragua for 43 years) in a popular revolution. They promised land reform, literacy, healthcare, and social justice. The US, fearing communism in its backyard, funded the Contras (anti-Sandinista guerrillas), plunging Nicaragua into a bloody civil war in the 1980s. Ortega led the Sandinistas through the war and governed until 1990, when he lost elections and stepped down.

He returned to power in 2007, this time via democratic elections. But the revolutionary ideals were gone. Ortega made deals with the oligarchy, the Church, and the business elite. He accumulated power, rigged institutions, and crushed dissent. The Sandinistas who once fought dictatorship became the dictatorship.

By November 2025, the Sandinista Front is a hollowed-out party. It's not a revolutionary movement—it's Ortega-Murillo's personal vehicle. The rank-and-file are either loyalists paid to show up at rallies or cynics who mouth the slogans because dissent is dangerous.

**The Bottom Line**

Nicaragua in November 2025 is a family dictatorship. Ortega and Murillo rule as co-presidents, having rewritten the constitution to formalize their power and prepare Murillo's succession. Opposition is crushed—political prisoners are jailed or exiled, independent institutions are destroyed, and dissent is punished. The economy is stagnant, emigration is mass, and international sanctions are ineffective. The Catholic Church is persecuted, media is state-controlled, and elections are a farce. The Sandinista revolution's promise—justice, equality, liberation—has been betrayed utterly. What remains is a regime clinging to power through fear, repression, and dynastic succession. There is no near-term path to change. Ortega will die, Murillo will rule, and Nicaragua will remain a dictatorship until either the regime implodes or external pressure finally forces change. As of November 2025, neither seems imminent.`

const ISSUES = {
  LUXEMBOURG: [
    "Luc Frieden's center-right coalition governing with comfortable majority until 2028",
    "Housing crisis pricing out young Luxembourgers and cross-border workers",
    "Immigration pressures in country where 47% are foreign-born",
    "Tax haven sustainability and post-LuxLeaks reform challenges"
  ],
  MALAYSIA: [
    "November 29 Sabah election as crucial test for Anwar Ibrahim's coalition",
    "Attorney general's appeal over Sabah's 40% revenue rights inflaming East Malaysian anger",
    "Fragile Pakatan Harapan coalition facing PAS Islamic conservative surge",
    "Anwar's ASEAN chairmanship triumph vs domestic economic headwinds"
  ],
  MEXICO: [
    "Claudia Sheinbaum maintaining 78% approval ratings despite security crises",
    "November groping incident and women's rights campaign",
    "Peru diplomatic crisis over asylum granted to opposition leader",
    "Uruapan mayor assassination highlighting cartel violence and security failure"
  ],
  MOLDOVA: [
    "Maia Sandu pushing for EU membership by 2028 after September election victory",
    "Hungary blocking Moldova's EU accession negotiations despite reform progress",
    "Russian hybrid warfare and Transnistria frozen conflict",
    "PAS winning 50.2% majority in face of massive disinformation campaigns"
  ],
  MONTENEGRO: [
    "EU targeting 2026 for accession negotiations completion, 2028 for membership",
    "Milojko Spajić's fragile coalition between pro-EU and pro-Russian factions",
    "Late October anti-Turkish violence forcing emergency visa restrictions",
    "Parliamentary paralysis and opposition obstruction threatening reform progress"
  ],
  MONGOLIA: [
    "November MPP plenary meeting determining PM Oyun-Erdene's survival",
    "President's veto blocking attempt to oust Prime Minister",
    "9% inflation and 30% poverty rate amid political paralysis",
    "MPP-DP-HUN coalition fractures threatening government collapse"
  ],
  MOROCCO: [
    "King Mohammed VI driving electoral reforms ahead of September 2026 elections",
    "Ministry of Interior implementing financial monitoring to combat vote-buying",
    "Gen Z protest movement demanding transparency and jobs",
    "Akhannouch's palace-friendly government managing incremental economic recovery"
  ],
  MOZAMBIQUE: [
    "Daniel Chapo inaugurated as president amid violence that killed 350+ people",
    "October 2024 election fraud confirmed by EU observers",
    "Venâncio Mondlane's opposition claiming 53% victory and calling for resistance",
    "Frelimo's 50-year rule sustained through repression and denationalization"
  ],
  MYANMAR: [
    "Military junta controlling only 15-21% of Myanmar, rebels holding 42-45%",
    "Chinese backing helping junta retake Kyaukme in October counteroffensive",
    "National Unity Government lacking unity as EAOs pursue independence not federalism",
    "Planned 2025-2026 elections as farcical legitimization exercise"
  ],
  NEPAL: [
    "September protests forcing Parliament dissolution and March 5, 2026 elections",
    "Kulman Ghising's Ujyaalo Nepal Party challenging NC-UML duopoly",
    "July 2024 UML-NC power-sharing deal collapsing after two months",
    "Seventeen new parties registering between October-November 2025"
  ],
  NETHERLANDS: [
    "Rob Jetten's D66 winning October 29 election with razor-thin margin over Wilders",
    "Geert Wilders' PVV losing 11 seats, dropping from 37 to 26",
    "NSC coalition partner annihilated, losing all 20 seats",
    "Jetten facing months of coalition negotiations to form government"
  ],
  NEW_ZEALAND: [
    "Luxon's approval dropping to 2-year low, National-Labour tied at 34-33%",
    "Coalition tensions between National, ACT, and NZ First causing policy paralysis",
    "Cost of living crisis eroding middle-class support for National",
    "Labour's Hipkins positioning for possible 2026 election victory"
  ],
  NICARAGUA: [
    "February 2025 constitutional amendments creating Ortega-Murillo co-presidency",
    "Presidential terms extended to six years, media control formalized",
    "452 Nicaraguans arbitrarily denationalized including September 2024 expulsion of 135",
    "Ortega's declining health and Murillo's positioning as dynastic successor"
  ]
}

async function insertPoliticsSummary(country: any, summary: string, issues: string[]) {
  console.log(`\nInserting ${country.name} Politics summary...`)

  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: country.name,
        type: country.type,
        category: 'politics'
      }
    },
    create: {
      name: country.name,
      type: country.type,
      country: country.country,
      lat: country.lat,
      lng: country.lng,
      category: 'politics',
      summary: summary,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify([]),
      storyCount: 0,
      updatedAt: new Date()
    },
    update: {
      summary: summary,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify([]),
      storyCount: 0,
      updatedAt: new Date()
    }
  })

  console.log(`✅ ${country.name} Politics summary inserted (${summary.length} characters)`)
}

async function main() {
  console.log('Starting Politics summaries insertion for Batch 6...\n')

  await insertPoliticsSummary(COUNTRIES.LUXEMBOURG, LUXEMBOURG_POLITICS, ISSUES.LUXEMBOURG)
  await insertPoliticsSummary(COUNTRIES.MALAYSIA, MALAYSIA_POLITICS, ISSUES.MALAYSIA)
  await insertPoliticsSummary(COUNTRIES.MEXICO, MEXICO_POLITICS, ISSUES.MEXICO)
  await insertPoliticsSummary(COUNTRIES.MOLDOVA, MOLDOVA_POLITICS, ISSUES.MOLDOVA)
  await insertPoliticsSummary(COUNTRIES.MONTENEGRO, MONTENEGRO_POLITICS, ISSUES.MONTENEGRO)
  await insertPoliticsSummary(COUNTRIES.MONGOLIA, MONGOLIA_POLITICS, ISSUES.MONGOLIA)
  await insertPoliticsSummary(COUNTRIES.MOROCCO, MOROCCO_POLITICS, ISSUES.MOROCCO)
  await insertPoliticsSummary(COUNTRIES.MOZAMBIQUE, MOZAMBIQUE_POLITICS, ISSUES.MOZAMBIQUE)
  await insertPoliticsSummary(COUNTRIES.MYANMAR, MYANMAR_POLITICS, ISSUES.MYANMAR)
  await insertPoliticsSummary(COUNTRIES.NEPAL, NEPAL_POLITICS, ISSUES.NEPAL)
  await insertPoliticsSummary(COUNTRIES.NETHERLANDS, NETHERLANDS_POLITICS, ISSUES.NETHERLANDS)
  await insertPoliticsSummary(COUNTRIES.NEW_ZEALAND, NEW_ZEALAND_POLITICS, ISSUES.NEW_ZEALAND)
  await insertPoliticsSummary(COUNTRIES.NICARAGUA, NICARAGUA_POLITICS, ISSUES.NICARAGUA)

  console.log('\n✅ All 13 Politics summaries successfully inserted!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
