import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const countriesData = [
  {
    name: 'Nigeria',
    lat: 9.0820,
    lng: 8.6753,
    summary: `The great paradox of Nigerian politics in November 2025 is this: President Bola Tinubu has never looked more politically dominant, yet the country has never felt more fragile. When the Guild of Editors gathered in Abuja on November 12th, Tinubu delivered a remarkably confident speech, praising the press while warning about social media misinformation—the kind of thing you say when you're worried about controlling the narrative. And he has reason to worry, doesn't he? His ruling All Progressives Congress has been hoovering up defectors like some irresistible force field, with governors and legislators crossing over in droves, creating what increasingly resembles a one-party state dressed up in democratic clothing.

The November governorship election in Anambra offered a telling snapshot. INEC declared it credible—which in Nigerian terms means "not as bad as it could have been." But what's really happening is more subtle: Tinubu is positioning himself for 2027, slowing down his controversial economic reforms as reelection looms. The APC has already declared him their sole candidate, eighteen months out. That's not confidence; that's inevitability being manufactured. And yet his approval ratings remain dismal, because Nigerians are living through a cost-of-living crisis that makes Britain's look like a minor inconvenience.

Here's where it gets internationally complicated. In October, Donald Trump redesignated Nigeria as a "Country of Particular Concern" for religious freedom violations—bureaucratic language for threatening military intervention if the government doesn't stop the killings of Christians in the north. Think about that for a moment: the United States threatening to invade Africa's most populous nation. Tinubu finds himself performing a delicate balancing act, managing American pressure while dealing with Islamist insurgencies and farmer-herder conflicts that his government has utterly failed to resolve.

The institutional picture is equally troubling. In November, Tinubu gets to appoint a new INEC chairman, replacing Mahmood Yakubu. This matters enormously because INEC is supposed to be the referee, and in Nigerian politics, controlling the referee is half the game. The opposition—such as it exists—is hemorrhaging talent to the ruling party, motivated by the age-old logic of patronage over principle. Democratic in appearance, authoritarian in practice—that's the trajectory.

The 2027 elections will be the real test. Can Nigeria sustain competitive democracy when the ruling party has absorbed nearly everyone who matters? When the institutions meant to check executive power keep getting weaker? When the international community is threatening intervention rather than supporting reform? Tinubu has demonstrated remarkable political mastery—he's survived this long in Nigerian politics by being smarter and more ruthless than his competitors. But building a nation requires something more than political skill; it requires institutions that outlast individuals. And right now, those institutions are being hollowed out from within, even as the externals look increasingly impressive. Watch what happens with that INEC appointment. It'll tell you everything about where Nigeria is heading.`,
    issues: [
      'De facto one-party state emerging through APC defections',
      'Trump administration threatens military intervention over religious violence',
      'Cost-of-living crisis undermining Tinubu\'s popularity despite political dominance',
      'Critical INEC chairman appointment in November shapes 2027 election integrity',
      'Economic reforms slowing as president eyes reelection'
    ]
  },
  {
    name: 'North Korea',
    lat: 40.3399,
    lng: 127.5101,
    summary: `The remarkable thing about North Korea in November 2025 isn't that Kim Jong Un is open to talking with Trump again—it's that this time, he's negotiating from genuine strength. When Trump visited South Korea in late October and spoke warmly about working "very hard" with Kim to bring peace, he was talking to a fundamentally different North Korea than the one he met in Singapore back in 2018. This North Korea has roughly 50 assembled nuclear warheads and fissile material for 40 more, according to Stockholm peace researchers. It has constitutionally enshrined its nuclear status—written it into the founding documents. And crucially, it has Russia's back in a way that changes the entire strategic calculation.

Kim's conditions for dialogue, laid out to the legislature this autumn, are beautifully straightforward: drop the "hollow obsession with denuclearization" and pursue peaceful coexistence based on "recognition of reality." In diplomatic terms, that's Kim saying: I'm a nuclear power, accept it, and then we can talk. He even added that he retains "good memories" of President Trump—a personal touch that costs nothing but keeps the door slightly ajar. The brilliance of Kim's position is that he's made denuclearization non-negotiable while leaving everything else potentially on the table. It's a masterclass in setting the terms of debate.

What's changed since 2018? Three things. First, the nuclear arsenal has expanded dramatically—Kim called for "limitless" expansion in November 2024 and has delivered on it. Second, North Korea has deepened strategic cooperation with Russia to an extent that was unthinkable a few years ago. Moscow needs artillery shells for Ukraine; Pyongyang needs diplomatic cover and probably hard currency. It's a marriage of convenience that gives Kim leverage he's never had. Third, ideological control at home has tightened to the point where Kim faces essentially zero domestic pressure to compromise.

The geopolitical context makes this even more complex. China and Russia are backing Pyongyang in ways that give Kim room to maneuver. The great power rivalry Trump loves to talk about means North Korea isn't isolated the way it was. There's talk in Washington about various scenarios—deals, deadlocks, deterrence—but the uncomfortable reality is that Kim holds more cards than Trump does. The North Korea expert community is remarkably consistent on this: 2025 Kim is not 2018 Kim.

So what happens next? Trump might get his summit—he loves the spectacle, the historic handshake, the Nobel Prize speculation. But any deal would have to acknowledge North Korea's nuclear status in some form, which would represent a massive shift in American policy. The alternative is continued deadlock, with periodic saber-rattling to remind everyone the problem hasn't gone away. Either way, the Korean Peninsula isn't getting denuclearized. The question is whether we can build a stable deterrence framework that prevents catastrophe. And that requires accepting realities we'd rather not accept—which is exactly what Kim is counting on.`,
    issues: [
      'Nuclear arsenal expanded to 50 warheads with material for 40 more',
      'Kim demands US accept nuclear status before negotiations',
      'Deepened Russia-North Korea cooperation reshapes strategic balance',
      'Constitutional codification of nuclear state makes denuclearization impossible',
      'Trump-Kim diplomacy possible but from position of Pyongyang strength'
    ]
  },
  {
    name: 'Norway',
    lat: 60.4720,
    lng: 8.4689,
    summary: `Norway in 2025 offers a fascinating lesson in how European coalition politics can simultaneously fracture and stabilize, often within the same year. Jonas Gahr Støre's government started January in crisis when the Centre Party walked out over EU energy directives—the kind of technical policy dispute that becomes existential when you're dealing with Norway's fraught relationship with Brussels. For a country that rejected EU membership twice but remains deeply integrated through the EEA, energy policy touches every raw nerve about sovereignty and identity.

What looked like a death spiral in January turned into something rather unexpected by September. The red-green bloc—Labour, Centre Party, Socialist Left, Greens, and even the hard-left Reds—secured 88 seats, a working majority. Støre, who had endured years of dismal polling that would have finished most prime ministers, pulled off a political comeback by running a minority Labour government effectively and letting voters compare his steady handling with the alternatives. The centre-left coalition now governs with confidence and supply from parties outside the cabinet, which in Norwegian terms is a stable arrangement.

But here's the complication: the populist Progress Party achieved its best result ever, becoming Norway's second-largest party. They couldn't form a government with their right-wing allies, but their surge tells you something important about Norwegian society in 2025. Immigration is no longer a fringe concern—it dominated the election alongside taxes, healthcare, and inequality. The Progress Party channeled that anxiety into votes, even if they couldn't convert votes into power.

The energy dispute that broke the coalition in January remains unresolved in any deeper sense. Norway is Europe's energy supplier, flooding the continent with gas while pursuing aggressive climate targets at home. That tension—between fossil fuel wealth and green ambitions—defines Norwegian politics more than any party programme. The EU's fourth energy package represented a line the Centre Party wouldn't cross, but the underlying question persists: how integrated with Europe does Norway want to be?

Støre now governs with a complex arrangement requiring him to keep multiple parties onside without giving any one of them veto power. It's a high-wire act. The Socialist Left and Reds pull him leftward on climate and welfare; the Centre Party demands protection for rural interests and suspicion of Brussels; his own Labour Party tries to occupy the sensible middle ground. Watch how he handles the next EU directive that touches Norwegian sovereignty—that's when you'll see whether this arrangement is genuinely stable or just a temporary equilibrium.

The broader picture is of a wealthy, stable democracy trying to figure out its place in an unstable Europe. Norway has the luxury of debating these questions from a position of enormous prosperity—the sovereign wealth fund, North Sea revenues, low unemployment. But prosperity doesn't make the questions easier; if anything, it makes them more acute. What kind of country does Norway want to be? How European? How open? How green while remaining oil-rich? Støre has bought himself time to answer these questions, but September's election shows that Norway is increasingly divided on the answers.`,
    issues: [
      'Coalition rebuilt after Centre Party departure over EU energy policy',
      'Progress Party achieves best result ever as second-largest party',
      'Immigration emerges as central political issue alongside inequality',
      'Red-green minority government sustained through confidence and supply',
      'EU integration tensions persist despite electoral stability'
    ]
  },
  {
    name: 'Oman',
    lat: 21.4735,
    lng: 55.9754,
    summary: `Sultan Haitham bin Tarik is attempting something genuinely remarkable in the Gulf: modernizing an absolute monarchy without destabilizing it. When he declared November 26-27 as holidays for Oman's 55th National Day, it was more than ceremonial. Five years into his reign, Haitham has fundamentally restructured Omani governance in ways his predecessor never contemplated—and he's done it while maintaining the stability that defines successful Gulf statecraft.

The November 12th Royal Decrees ratifying visa waivers with Azerbaijan and Belarus might seem trivial, but they reflect a broader strategy: opening Oman to the world through careful, calibrated steps. This is a ruler who has given up the titles of defense minister, foreign minister, finance minister, and Central Bank chairman—extraordinary in a region where monarchs typically accumulate power, not distribute it. Some portfolios have gone to non-royals, which in Gulf terms is practically revolutionary. The succession reform is even more significant: Haitham has moved to primogeniture, appointing his son as heir, replacing the old system where the royal family chose successors. That's institutional modernization.

On the economic front, Haitham has been ruthless in ways his beloved predecessor Qaboos never was. The fiscal deficit was halved in 2021, became a $3.64 billion surplus in 2022. More dramatically, Oman became the first Gulf state to impose personal income tax—5% on earnings over 42,000 rials annually, starting 2028. Think about the political courage that requires in a region where citizens expect government largesse, not taxation. The Oman Investment Authority has been overhauled; the Medium Term Financial Plan actually means something; economic diversification is more than a slogan.

But here's the central tension: Haitham is modernizing governance while maintaining absolute monarchy. There are no elections, no parliament with real power, no independent judiciary in any meaningful sense. What you have instead is enlightened autocracy—effective, reformist, responsive to economic reality, but ultimately concentrated in one man's hands. The question is whether this model is sustainable, or whether economic modernization inevitably creates pressure for political liberalization.

The international positioning is classically Omani: neutral broker, mediator, friendly with everyone from Tehran to Washington. Oman didn't join the Saudi-led boycott of Qatar; it won't join anti-Iran coalitions; it maintains its own path. That independence is possible because Oman isn't threatening to anyone—it's not large enough, rich enough, or ambitious enough to challenge regional order. It's the Switzerland of the Gulf, which is both its strength and its limitation.

Looking forward, watch whether Haitham can maintain reform momentum as oil prices fluctuate and regional tensions rise. The income tax doesn't start until 2028, giving citizens time to grumble before they actually pay. The succession reform works brilliantly until the moment it doesn't—primogeniture is only stable if the heir is competent and accepted. And the governance reforms depend entirely on Haitham's continued wisdom and health. There's no institutional check if he makes catastrophic decisions; there's no mechanism for course correction beyond palace politics.

What Haitham has achieved is genuinely impressive: taking a country that was basically Qaboos's personal project and institutionalizing it without crisis. But Oman remains fragile in ways that won't show up until something goes wrong. The test isn't how well absolute monarchy works with an enlightened Sultan; it's how well it works when you get an incompetent one. And no constitution, no matter how well drafted, can guarantee you won't.`,
    issues: [
      'Sultan devolves power to non-royals in unprecedented governance reform',
      'First Gulf state to impose personal income tax starting 2028',
      'Primogeniture succession system replaces traditional royal family selection',
      'Fiscal surplus achieved through aggressive economic diversification',
      'Balancing economic modernization with maintained absolute monarchy'
    ]
  },
  {
    name: 'Pakistan',
    lat: 30.3753,
    lng: 69.3451,
    summary: `Pakistani politics in late 2025 remains locked in the same impossible dynamic it's been stuck in for decades: the military controls power without formally holding it, civilian politicians fight over the scraps, and the institutional foundations keep eroding. Imran Khan, sitting in prison since 2023, penned a letter to Chief Justice Yahya Afridi in September claiming his PTI won a "landslide victory" in February 2024 that was "stolen overnight." He's probably right about winning; he's definitely right about it being stolen. But that's almost beside the point. The real story is that Pakistan's power structure won't allow Khan back into government, even if voters overwhelmingly want him there.

The February 2024 election results tell you everything: independent candidates (mostly PTI-backed because the Election Commission banned PTI from fielding official candidates) won 103 seats. But PML-N and PPP formed a coalition government anyway, with Shehbaz Sharif as Prime Minister. This is democracy as theater—you hold elections, count votes, then form a government based on who the military will tolerate rather than who won. The PTI has been systematically dismantled: Khan jailed on what are almost certainly politically motivated charges, party officers intimidated, candidates prevented from running under party symbols. It's state-directed political engineering, and it's working.

The October 2024 constitutional amendments make this worse by reducing Supreme Court authority. Think about what that means: the one institution that might check executive power gets neutered right as the government needs checking most. Chief Justice Afridi, to whom Khan addressed his September letter, knows the judiciary's independence is under assault but has limited tools to fight back. The 26th Amendment wasn't a reform; it was a capture.

What's remarkable about Khan's continued popularity is that it persists despite everything. The military and its civilian partners have used every tool available—prosecution, intimidation, media control—and Khan remains the most popular politician in Pakistan. That tells you something about the bankruptcy of the alternatives. PML-N and PPP represent dynastic politics and economic mismanagement; their coalition exists to keep Khan out, not to govern effectively. And Pakistanis know it.

The international dimension adds another layer. Pakistan is economically desperate, dependent on IMF programs and Chinese investment, navigating between Washington and Beijing while dealing with Taliban-controlled Afghanistan next door. None of these challenges are being addressed because the political system is paralyzed by its own contradictions. You can't have sustainable economic reform when governments lack legitimacy. You can't build institutional strength when institutions are being actively weakened.

The 2024 elections were supposed to be a reset; instead they've entrenched the crisis. Khan won't be released unless the military decides he's sufficiently broken or the political cost becomes unbearable. The coalition government won't attempt serious reforms because they're focused on political survival. The judiciary can't assert independence without risking constitutional crisis. And the military won't step back because they genuinely believe civilian politicians are incompetent and dangerous.

What's next? Probably more of the same: political instability dressed up as democracy, economic crisis management rather than reform, and slow institutional decay. The 2024 election offered a path out; Khan's victory could have been acknowledged, some accommodation reached. Instead, the system chose control over legitimacy. That choice has consequences, and Pakistan will be living with them for years.`,
    issues: [
      'Imran Khan imprisoned despite PTI electoral victory in 2024',
      'Coalition government formed against electoral mandate',
      '26th Constitutional Amendment undermines judicial independence',
      'Military maintains control without formal governance role',
      'Economic crisis deepens amid political paralysis'
    ]
  },
  {
    name: 'Palestine',
    lat: 31.9522,
    lng: 35.2332,
    summary: `Palestinian politics in November 2025 is less a functioning system than a catastrophe suspended in amber. Mahmoud Abbas, whose four-year term expired in 2009, continues ruling through the Palestinian Authority with no democratic mandate, no elections in sight, and no plausible succession plan. In April, he called Hamas "sons of dogs" and demanded they release hostages—language that tells you everything about the state of Palestinian internal politics. Meanwhile, Hamas, despite being devastated militarily in Gaza, is gaining support in West Bank polls, which is darkly ironic given that Hamas's October 2023 actions triggered the catastrophe that's killed tens of thousands of Palestinians.

The governing situation is surreal. Abbas fired his finance minister in November—palace intrigue while Gaza starves. He met with Pope Leo to discuss the "urgent need for aid"—photo ops while the humanitarian situation deteriorates. The PA hasn't held presidential elections in twenty years; Abbas's Fatah movement and Hamas remain locked in a blood feud that makes any reconciliation impossible while Abbas lives. As one analyst put it brutally: "so long as Mahmoud Abbas remains on the scene, there can be no reconciliation between these two movements because he will always act to sabotage it."

Gaza itself is in a state beyond description. Israel renewed military action in March after Hamas rejected an extension of the January ceasefire agreement. Since early March, new food aid has been blocked. We're talking about 40,000 people displaced in the West Bank alone from Israeli military operations, while Gaza's infrastructure is obliterated. The international community speaks vaguely about "reconstruction, security, and governance," with Arab and European states supporting the PA's return to Gaza. But how does a corrupt, unpopular, democratically illegitimate authority govern a devastated territory where Hamas retains underground networks and popular sympathy?

The political vacuum is total. Abbas can't make peace because he lacks legitimacy and support. Hamas can't govern because they're designated terrorists and their Gaza leadership is decimated. Israel won't engage with either because Abbas is seen as weak and Hamas is the enemy. The two-state solution—which Abbas still invokes at the UN—looks more like historical artifact than plausible future. Meanwhile, the West Bank is being carved up by settlements, with Israeli military operations treating it increasingly like Gaza.

What's the endgame? No one knows because there isn't one. The international consensus—such as it exists—is that the PA should return to Gaza and govern both territories, enabling eventual statehood. But that requires Abbas to reconcile with Hamas, which he won't do. It requires Hamas to accept PA authority, which they won't do. It requires Israel to support a viable Palestinian state, which they've shown no interest in doing. And it requires Abbas to hold elections and accept he'd probably lose, which is laughable.

The tragedy is that this paralysis serves everyone's interests except Palestinians themselves. Abbas clings to power without accountability. Hamas claims resistance legitimacy while operating from tunnels. Israel avoids difficult decisions about occupation's endgame. The international community issues statements without consequences. And ordinary Palestinians in Gaza and the West Bank live through a nightmare with no political horizon, no functioning governance, and no prospect of change.

November 2025 in Palestine isn't really about politics—it's about the absence of politics, the vacuum where politics should be. Abbas will eventually die or be removed; the question is whether that triggers reform or further collapse. Hamas will eventually reconstitute or fade; the question is whether anything legitimate replaces them. Gaza will eventually be rebuilt; the question is under whose authority and toward what end. Until those questions get answers, Palestinian politics will remain frozen in dysfunction while the humanitarian catastrophe continues.`,
    issues: [
      'Abbas rules without mandate since 2009, no elections scheduled',
      'Hamas-Fatah reconciliation impossible while Abbas leads PA',
      'Gaza humanitarian catastrophe amid Israeli aid blockade since March',
      'PA lacks legitimacy to govern Gaza post-conflict reconstruction',
      '40,000 West Bank displaced as Israeli military operations intensify'
    ]
  },
  {
    name: 'Panama',
    lat: 8.5380,
    lng: -80.7821,
    summary: `José Raúl Mulino's presidency, which began in July 2024, faces challenges that would test any leader: a drought-compromised canal, unprecedented migration through the Darién Gap, post-mining protest economic fallout, and now Donald Trump threatening to seize the canal. That last bit emerged in January 2025, with Trump making noises about U.S. control over the waterway that generates nearly $5 billion annually for Panama. Mulino pushed back aggressively—on social media, in local media—because surrendering an inch on canal sovereignty would be political suicide in Panama. The canal isn't just economics; it's national identity.

Mulino came to power in peculiar circumstances: he replaced Ricardo Martinelli on the May 2024 ballot after Martinelli's money laundering conviction disqualified him. So from day one, Mulino has governed in Martinelli's shadow—supported by his political machinery but nominally independent. He won with 34% in a fragmented field, which is a mandate but not an overwhelming one. His government is defined by crisis management rather than vision, which is both a limitation and perhaps the only realistic approach given what Panama faces.

The Darién Gap migration issue shows Mulino's pragmatism and its limits. Hours after inauguration, he signed a memorandum with the U.S. to "close" the gap—which is partly genuine border control, partly performative politics for Washington and Panamanian voters concerned about migration. You can't actually close a jungle border, but you can signal you're trying. Meanwhile, Panama takes its seat as a non-permanent UN Security Council member for 2025-26, giving Mulino an international platform precisely when he needs to defend Panama's interests against Trump-era U.S. unilateralism.

The canal drought is the existential challenge. Climate change has reduced water levels to the point where transit is compromised, threatening the revenue stream that underwrites the Panamanian state. Mulino has promised a massive damming project on the Río Indio to shore up water supply—the kind of infrastructure that takes years and billions but has to happen if Panama's economic model is to survive. The political difficulty is that major environmental projects now trigger mass protests, as the anti-mining demonstrations in 2023 showed. Panamanians want the canal revenues but increasingly resist the environmental costs of maintaining them.

The economic picture is sluggish: growth slowed by canal constraints, migration pressures, and the aftermath of shutting down the mining sector that was a major revenue source. Mulino's government is trying to balance fiscal responsibility with the infrastructure spending needed to secure the canal's future. It's a nearly impossible balance, especially when Trump is suggesting the U.S. might just take the canal anyway—undermining investor confidence and Panama's international standing.

The 2027 municipal and legislative elections are already on the horizon, which means Mulino's governing coalition needs to show results while managing these multiple crises. His political base is center-right, business-friendly, U.S.-aligned—but Trump's canal rhetoric complicates that alignment. How do you maintain close U.S. ties when Washington is threatening your sovereign control over national infrastructure? Mulino is learning that Panamanian politics in 2025 requires managing contradictions: environmental protection and canal maintenance, U.S. partnership and sovereignty defense, fiscal discipline and infrastructure investment.

Watch how he handles the Río Indio dam project. If he can build political consensus around massive infrastructure spending while addressing environmental concerns, that would be genuinely impressive. If protests derail it like they derailed mining, Panama faces a future where canal revenues decline from drought while alternatives are politically impossible. That's not a crisis you manage—that's an existential question about Panama's viability as currently structured.`,
    issues: [
      'Trump threats to seize Panama Canal create sovereignty crisis',
      'Canal drought threatens $5 billion annual revenue stream',
      'Darién Gap migration pressures despite U.S. border cooperation',
      'Río Indio damming project critical but environmentally contentious',
      'Governing in shadow of convicted predecessor Martinelli'
    ]
  },
  {
    name: 'Papua New Guinea',
    lat: -6.3150,
    lng: 143.9555,
    summary: `James Marape, Papua New Guinea's prime minister since 2019, finds himself facing yet another vote of no confidence in November 2025—and his reaction tells you everything about PNG's peculiar political culture. The opposition filed their motion on October 29th; Parliament adjourned to November 18th; and Marape welcomed it, saying he holds "no fear or resentment" and would even travel out of the country to give MPs "total freedom" to make their choice. This is either remarkable democratic confidence or brilliant political theater—probably both.

Marape has survived no-confidence votes before: September 2024, April 2025 (losing 16-89), and now November 2025. The April vote was crushing—89 MPs backed him against only 16 for opposition leader Sir Peter Ipatas. That kind of margin suggests Marape has either built an unbeatable coalition or mastered the art of patronage politics that keeps MPs loyal. In PNG's political system, these amount to the same thing. Coalitions shift constantly; party loyalty is weak; individual MPs calculate their interests based on immediate benefits rather than ideological commitment.

The constitutional context makes this particularly interesting. If Marape survives the November vote, it triggers the recently inserted 18-month grace period that would protect him right through to the final 12 months before the 2027 general election. Think about that: one successful defense, and he's essentially untouchable until the voters decide. It's a constitutional innovation designed to bring stability to PNG's notoriously unstable politics, where governments used to face constant no-confidence threats. Whether it actually creates stability or just entrenches whoever happens to be in power is an open question.

Marape's political positioning is clever: he frames these votes as democratic processes he respects, even welcomes. It makes him look confident and democratic while his machinery works behind the scenes to ensure MPs stay loyal. He explicitly mentioned the 2027 election in his October 29th statement, reminding MPs and voters that the real judgment comes from the ballot box. It's a way of saying: you can try to remove me in Parliament, but the people will have their say soon enough.

The broader challenge for PNG is whether parliamentary democracy can function effectively when coalitions are so fluid and personality-driven. Marape has provided relative stability compared to his predecessors—six years in office is significant by PNG standards. But what has that stability produced? Infrastructure remains inadequate, corruption endemic, governance weak outside Port Moresby. The country's immense natural resource wealth—gold, gas, timber—hasn't translated into broad-based development. PNG consistently ranks poorly on governance indicators, and that hasn't fundamentally changed under Marape.

The opposition's calculation in filing this November motion is probably about positioning for 2027 rather than genuine expectation of success. Marape survived April by a massive margin; nothing has changed fundamentally since then. But by forcing the vote, they keep themselves visible, show they're fighting, and maybe peel off a few MPs if Marape's patronage machine has weakened. PNG politics is transactional, and transactions require constant renegotiation.

What should observers watch for? Whether Marape survives (he probably will), what margin he wins by (anything close to 89-16 means his coalition is solid), and whether the 18-month grace period actually brings the promised stability or just freezes a flawed government in place. The 2027 election will be the real test—can Marape convince voters he deserves another term, or will PNG's traditional pattern of throwing out incumbents reassert itself? Either way, the November 2025 vote of no confidence is less about removing Marape than about political positioning for the real contest ahead.`,
    issues: [
      'Third no-confidence vote since 2024 filed for November 2025',
      'April 2025 vote showed 89-16 crushing victory for Marape',
      '18-month grace period would protect PM until 2027 election if survives',
      'Coalition stability masking persistent governance and corruption challenges',
      'Parliamentary democracy functioning but transactional rather than ideological'
    ]
  },
  {
    name: 'Paraguay',
    lat: -23.4425,
    lng: -58.4438,
    summary: `Santiago Peña's Paraguay in 2025 represents something genuinely unusual in contemporary Latin America: a stable, conservative, economically successful country that's also becoming a case study in soft authoritarianism and narco-state dynamics. When Paraguay hosted CPAC in mid-September—the Conservative Political Action Conference, Trump world's traveling circus—Peña gave a keynote condemning "free abortion," "alternative ideas of the family," and "radical social experiments." This wasn't dog whistle politics; this was saying the quiet part loud and proud.

The Colorado Party has ruled Paraguay for all but five years since 1947—think about that institutional continuity in a region defined by political volatility. Peña won in 2023 and took office as the youngest president at 44, a technocrat who previously worked at the IMF and Inter-American Development Bank. On economics, he's delivered: Paraguay had Latin America's highest GDP growth in early 2025. The conservative model—low taxes, light regulation, agricultural exports—works, at least in GDP terms. But there's something rotten underneath.

The real power isn't Peña; it's Horacio Cartes, the former president who leads the Honor Colorado faction that controls Parliament absolutely. The United States canceled Cartes' visa and declared him corrupt—they basically called him a narco-trafficker in diplomatic language. And he's "practically the president in the shadows," with Peña following his orders. Think about what that means: a U.S.-designated corrupt figure runs Paraguay's ruling party and controls its government, and there's nothing remotely secret about it. Freedom House says "several cabinet ministers have links to organised crime." This isn't conspiracy theory; this is documented fact.

September 2025 brought Paraguay's first mass protests since 2021—Gen Z rising up, inspired by Peru's demonstrations. Indigenous resistance in October forced the government to back down on certain policies, showing there are limits to what Cartes and Peña can impose. But the Colorado Party's parliamentary supermajority means institutional checks barely exist. The opposition is fragmented and weak. Civil society is constrained. The judiciary is compromised. You have democratic forms—elections, parliament, constitution—without democratic substance.

The international positioning is equally revealing. Paraguay is one of the few countries that recognizes Taiwan over China, which brings U.S. support and Chinese economic pressure. Hosting CPAC signals alignment with the global hard right: Bolsonaro's Brazil (when he was in power), Trump's America, Orbán's Hungary. Peña's September speech wasn't just conservative; it was explicitly anti-progressive, anti-LGBTQ, anti-feminist—cultural warfare as governing philosophy.

Here's the central question: can you have sustained economic success built on this foundation? Paraguay grows because agriculture works, because taxes are low, because the state is small. But when state institutions are captured by organized crime, when corruption is endemic at the highest levels, when democratic accountability doesn't function—that's not sustainable development. It's resource extraction dressed up as growth.

The United States faces a policy dilemma. Paraguay is technically an ally: anti-China, anti-left, pro-business. But it's also run by people Washington has designated corrupt and linked to narcotics trafficking. Do you overlook governance failures because Paraguay votes right at the UN and the OAS? Or do you push for reform and risk pushing Paraguay toward China? Biden's team put Cartes on the blacklist; Trump's team might not care as much.

What happens next depends partly on whether Paraguay's youth and indigenous movements can sustain pressure. The September protests fizzled, but they showed discontent exists beneath the surface. The Colorado Party's dominance looks unbreakable until suddenly it isn't—that's the lesson from other one-party systems. But for now, Peña governs effectively as Cartes' front man, delivering economic growth while democratic institutions hollow out and organized crime gets more sophisticated. It's a model that's working in the short term while storing up catastrophic risk for the future.`,
    issues: [
      'Horacio Cartes controls government despite U.S. corruption designation',
      'Cabinet ministers linked to organized crime per Freedom House',
      'Colorado Party supermajority enables soft authoritarianism',
      'Highest GDP growth in Latin America masks governance failures',
      'CPAC hosting signals alignment with global hard-right movement'
    ]
  },
  {
    name: 'Peru',
    lat: -9.1900,
    lng: -75.0152,
    summary: `Peru on October 10, 2025 became a case study in how democratic institutions can remove deeply unpopular leaders—and also a reminder that removal doesn't solve underlying crises. Congress voted 124-0 shortly after midnight to impeach President Dina Boluarte, who never showed up to defend herself. They swore in José Jerí, the Congress president, as Peru's seventh president in less than ten years. And on Wednesday, protesters were back in the streets, police fired tear gas, one person died, over 100 were wounded. Nothing was solved; the crisis just changed management.

Boluarte's approval ratings were between 2% and 4%—statistically indistinguishable from zero. The impeachment grounds were her government's failure to stem crime: 6,041 murders between January and mid-August, 15,989 extortion complaints (up 28% from 2024). Those numbers are catastrophic. Peru has become genuinely dangerous in ways it wasn't a decade ago, with organized crime operating openly and the state appearing helpless. Lawmakers scheduled the impeachment trial late Thursday night; Boluarte was summoned for 11:30pm but didn't appear; Congress proceeded after midnight; she was gone by dawn.

The constitutional absurdity is that Congress—Peru's least trusted institution—keeps removing presidents. This is the Peruvian pattern: president elected, becomes unpopular, Congress impeaches for "permanent moral incapacity," next person up becomes president. It's musical chairs as constitutional process. The problem is that Congress itself is catastrophically unpopular, fragmented into a dozen parties with no coherent majority, and incapable of governing effectively. So you get this doom loop: failed president removed by failed Congress, replaced by Congressional president who inherits the same unsolvable problems.

José Jerí now leads until the next election. What's his mandate? What's his base? He's Congress president, which means he excelled at parliamentary maneuvering, not governing. Peru's challenges—organized crime, economic stagnation, regional inequality, indigenous rights, corruption—require sustained policy attention and political capital. Jerí has neither. He's a caretaker managing decline until voters get another go, at which point they'll probably elect someone who becomes equally unpopular within two years.

The protests continuing after impeachment tell you everything. Youth movements, unions, indigenous groups aren't demonstrating for Boluarte—she was despised. They're demonstrating because impeaching presidents doesn't address structural failure. Peru's institutions are broken: police corrupt and ineffective, judiciary weak, Congress fragmented, political parties vehicles for personal ambition rather than policy platforms. Crime flourishes not because any particular president is incompetent (though they are) but because state capacity has collapsed.

The economic picture compounds everything. Peru was a growth success story for two decades—mining boom, poverty reduction, emerging middle class. But that model has stalled, inequality remains extreme, and the benefits of growth never reached large parts of the country, particularly indigenous highlands. When you combine economic frustration with security breakdown and political dysfunction, you get the protests that never quite end, just ebb and flow with the political calendar.

International observers watch Peru with increasing alarm because this instability is self-reinforcing. Why would investors commit long-term capital to a country that's had seven presidents in ten years? How do you implement serious policy when governments know they'll be gone within two years? What incentive do politicians have to make hard choices when they're focused on short-term survival? The answers are: they wouldn't, you can't, and they don't.

The November 2025 question is whether Jerí can provide even temporary stability or whether Peru spirals into deeper crisis. The protests suggest the latter. One person dead, over 100 wounded—that's not a country celebrating better governance. That's a country where anger has nowhere productive to go. Boluarte deserved to be removed; the 124-0 vote was about as clear as democratic accountability gets. But accountability without capability just means you're efficiently replacing failed leaders with other failed leaders. And Peru seems stuck in that cycle with no obvious exit.`,
    issues: [
      'Boluarte impeached October 10 with 2-4% approval amid crime crisis',
      'Peru\'s seventh president in ten years sworn in as protests continue',
      '6,041 murders and surging extortion reveal state capacity collapse',
      'Congress removes presidents but lacks legitimacy or governing capacity',
      'Doom loop of failed institutions removing failed leaders continues'
    ]
  },
  {
    name: 'Philippines',
    lat: 12.8797,
    lng: 121.7740,
    summary: `Philippine politics in 2025 is dominated by a spectacular political blood feud between the country's two most powerful families—and the Dutertes are winning. When voters went to the polls in May for midterm elections, they were voting in the shadow of Vice President Sara Duterte's February impeachment and her father Rodrigo's March arrest by the International Criminal Court for crimes against humanity. You might think that would devastate the family politically. Instead, their allies swept the Senate races: Christopher Go, Rodrigo's former aide, topped the voting; Ronald dela Rosa, the former police chief who ran the drug war, came third. The Dutertes aren't finished; they're resurgent.

The backstory is pure Filipino political drama. Bongbong Marcos and Sara Duterte ran as a unity ticket in 2022—president and vice president from rival dynasties, joining forces to dominate the election. It worked brilliantly until they started governing, at which point the alliance collapsed into mutual recrimination. The House, controlled by Marcos allies, impeached Sara in February on corruption charges and threatening to kill the president. Think about that: the vice president allegedly threatened to assassinate the president. This isn't subtle politics; this is Game of Thrones with better weather.

Rodrigo's ICC arrest in March would have destroyed most political careers. The Hague accusing you of crimes against humanity for 30,000 deaths in your drug war—that's supposed to be terminal. But Rodrigo ran for the Senate from jail, and while detailed results are still being tallied, his candidacy energized Duterte supporters who see the ICC as foreign interference and the drug war as necessary violence. The family has successfully framed persecution as proof they're fighting for ordinary Filipinos against corrupt elites and international busybodies.

Sara's impeachment trial is tentatively scheduled for July, which means the Senate that was just elected will serve as the jury. The Marcos camp needed to win big to ensure conviction; instead, Duterte allies won big. The math now looks terrible for conviction, which means Sara likely survives, remains vice president, and is positioned to run for president in 2028. She's already Filipinos' preferred candidate for the next election, according to polls. An impeachment conviction would bar her from office permanently; surviving it makes her a martyr and front-runner.

Marcos Jr.'s approval ratings have plummeted, partly from economic performance issues—inflation, unemployment, slow growth—and partly from this dynastic feud consuming his presidency. The final three years of his term will be defined by division and challenge rather than accomplishment. He can't remove Sara, can't prosecute the Dutertes effectively, can't even control the political narrative. Meanwhile, the Duterte family is playing victim and strong-man simultaneously: persecuted by elites but tough enough to fight back.

The institutional damage is severe. Using impeachment as a weapon in dynastic rivalry debases the process. The Senate trial will be political theater, not legal judgment. The ICC's involvement—whether you think it's justified or not—sets a precedent for international courts prosecuting Filipino leaders, which raises genuine sovereignty questions. And the entire spectacle shows voters that politics is about family power and revenge, not policy or public service.

What's remarkable is that none of this has triggered mass protests or institutional crisis. Filipinos are somewhat accustomed to political drama; this is more extreme than usual but not categorically different. The May elections were free and fair by Filipino standards, which is to say: competitive, sometimes violent, definitely clientelistic. The result is that the Dutertes have reasserted influence through democratic means while facing prosecution for crimes against humanity. Only in the Philippines.

Looking to 2028, you've got Sara Duterte probably running against whoever Marcos backs—maybe his sister, maybe another Marcos ally. Philippine politics as dynastic succession with democratic characteristics. The drug war, the extrajudicial killings, the ICC charges—none of it seems to matter electorally as much as patron-client networks, family loyalty, and who can deliver benefits to supporters. It's functional democracy producing outcomes that horrify human rights observers but make perfect sense in Filipino political logic.`,
    issues: [
      'Duterte family resurgence despite Sara impeachment and Rodrigo ICC arrest',
      'May 2025 Senate elections won by Duterte allies ensuring Sara survives trial',
      'Marcos-Duterte alliance collapsed into dynastic blood feud',
      'ICC prosecution of former president raises sovereignty concerns',
      'Sara positioned as 2028 front-runner despite impeachment charges'
    ]
  },
  {
    name: 'Poland',
    lat: 51.9194,
    lng: 19.1451,
    summary: `Poland in November 2025 is living through the hangover from June's presidential election—and it's the kind of hangover that doesn't fade quickly. Karol Nawrocki, backed by the far-right Law and Justice party, defeated liberal mayor Rafał Trzaskowski by the thinnest possible margin: 50.89% to 49.11%. He's now president, Donald Tusk is still Prime Minister, and Poland's political system is designed to make them fight each other constantly. Constitutional cohabitation, French-style, except with more historical resentment and less wine.

Tusk survived a confidence vote in June that rules out snap elections until autumn 2027, giving his fractious coalition breathing room. But "breathing room" might be optimistic when your coalition consists of Civic Platform (center-right), Polish People's Party (agrarian conservatives), Third Way, and Poland 2050. They agree on opposing PiS; they agree on approximately nothing else. The PSL wants immigration curbs and traditional values; the liberal wing wants abortion reform and secular governance. Holding this together requires Tusk to be simultaneously everyone's ally and no one's friend.

The October party reorganization shows the pressure. Tusk merged Civic Platform with two smaller groups—Modern and Polish Initiative—rebranding as Civic Coalition. This is consolidation born of weakness, not strength. Polling shows KO remains Poland's favorite party, but the coalition partners are polling below the threshold to enter parliament. If that holds until 2027, Tusk could win the most seats but lose his majority, forcing him to govern with parties that have drifted rightward to survive.

President Nawrocki has pledged to obstruct Tusk's agenda, particularly judicial reform. Poland's Constitutional Tribunal is staffed by PiS appointees of dubious legitimacy; Tusk wants to fix it; Nawrocki has veto power. This matters because Poland's rule-of-law crisis with the EU remains unresolved. Brussels wants judicial independence guaranteed; PiS politicized the courts; Tusk promised to depoliticize them; Nawrocki will prevent it. So Poland stays in constitutional limbo, EU funds remain partly frozen, and the judiciary remains a political weapon.

The policy failures are mounting. Tusk promised abortion liberalization—hasn't delivered because coalition partners oppose it. Promised higher tax-free income threshold—hasn't delivered because fiscal constraints. Promised swift judicial reform—can't deliver because presidential veto. The gap between campaign promises and governing reality is creating the kind of disillusionment that helps populists, and PiS is very good at populism.

The broader European context makes this worse. Poland has been central to supporting Ukraine, hosting refugees, facilitating arms transfers, maintaining tough line on Russia. This requires political capital and public support, both of which are being consumed by domestic infighting. Tusk's coalition can't afford to look weak on security, but it can't afford to keep spending on Ukraine when Polish voters want spending at home. Classic guns-versus-butter, except the guns are for someone else's war.

What happens next depends partly on whether Nawrocki governs as a constructive conservative or a PiS proxy. If he's genuinely independent—which is possible, he's not a PiS member formally—there's room for accommodation on some issues. If he's a wrecking ball, Tusk spends the next few years vetoing vetoes and achieving nothing. The 2027 parliamentary elections become a referendum on whether Poland wants continued liberal governance or a return to PiS control.

The stakes are European as much as Polish. Poland under PiS was drifting toward soft authoritarianism—captured courts, politicized media, democratic backsliding. Tusk represents the counter-revolution: restore rule of law, re-Europeanize, strengthen democratic institutions. But counter-revolutions are only successful if they deliver tangible results, and Tusk's coalition is struggling to deliver anything except continued conflict with a president they can't remove.

November 2025 in Poland is the moment when everyone realizes that defeating populism electorally is much easier than undoing the damage populism caused. The institutions PiS corrupted can't be quickly repaired when the president blocks reform. The social divisions PiS exploited don't heal because liberals won an election. And the economic problems that made populism attractive in the first place—inequality, regional disparity, generational conflict—are still there, unsolved and perhaps unsolvable within the constraints of coalition governance and presidential obstruction. Tusk has time until 2027, but time alone won't save him. He needs results, and the system is designed to prevent them.`,
    issues: [
      'Far-right Nawrocki narrowly wins presidency, pledges to obstruct Tusk agenda',
      'Coalition partners polling below parliamentary threshold for 2027',
      'Judicial reform blocked by presidential veto, EU rule-of-law crisis continues',
      'Abortion liberalization and tax promises unfulfilled due to coalition splits',
      'Ukraine support straining domestic political capital and public patience'
    ]
  },
  {
    name: 'Portugal',
    lat: 39.3999,
    lng: -8.2245,
    summary: `Portuguese politics in November 2025 is experiencing something unusual for a traditionally stable democracy: rapid-fire instability and far-right normalization happening simultaneously. Luís Montenegro's center-right Democratic Alliance governs as a minority with 91 seats out of 230—well short of the 116 needed for a majority—while the far-right Chega sits with 60 seats as parliament's second-largest party. That's the new Portuguese reality: Chega isn't fringe anymore; they're mainstream opposition with real power.

The calendar tells the story. March: government loses confidence vote. May: elections produce hung parliament. June: Montenegro forms minority government. October: local elections see PSD (Montenegro's party) take major municipalities, becoming largest party in local government for first time in years. And November 29-30: the Left Bloc holds leadership convention where longtime leader Mariana Mortágua won't seek reelection after the party's electoral collapse. Portuguese politics is moving fast-forward, and the left is in crisis.

Chega's rise from essentially nothing to 23% of the vote represents the most significant shift in Portuguese politics in decades. They're Eurosceptic, anti-immigration, populist in the "elites versus the people" mode that's succeeded elsewhere in Europe. What's particularly striking is how quickly they've gone from outsider protest party to potential coalition partner. Montenegro governs alone now, but he needed Chega's support to pass new immigration restrictions—legislation that makes Portugal significantly less welcoming to migrants than it was under previous governments.

The immigration debate shows how Chega has shifted the Overton window. Portugal had relatively liberal migration policy; Chega campaigned against it; now even the center-right is tightening restrictions to prevent Chega from outflanking them. This is the classic far-right playbook: you don't need to govern to win if you can make the governing party adopt your policies to prevent you from gaining more votes. Chega is executing this perfectly.

Montenegro's governing challenge is arithmetic: 91 seats means he needs support from somewhere for everything he does. He can't rely on Chega for everything without being seen as their coalition partner, which would alienate moderate voters. He can't work with the Socialists on everything or his own base rebels. So he governs issue by issue, deal by deal, crisis by crisis. It's exhausting, it's unstable, and it makes long-term policy planning nearly impossible.

The policy problems are mounting. The National Health Service is in genuine crisis—long waits, staff shortages, facilities deteriorating. The housing crisis is catastrophic, particularly in Lisbon and Porto, where young Portuguese literally cannot afford to live. The welfare state is failing in visible ways that undermine the post-revolution social contract. Montenegro can diagnose these problems eloquently; solving them requires legislative majorities and sustained effort he doesn't have.

The Left Bloc leadership crisis is emblematic of the broader left's problem. They've been bleeding votes for years, can't articulate a compelling alternative to center-right governance, and are now leaderless going into what will be a difficult rebuilding period. The Socialists are larger but equally directionless—they lost power in 2024 amid corruption scandals and haven't figured out what they stand for besides "not the right." When the left is this weak and divided, the right doesn't need to be particularly good to win.

The November leadership convention for the Left Bloc will be fascinating. Do they move toward the center, trying to win back moderate voters? Do they move further left, trying to energize the base? Do they focus on opposing Chega, making anti-fascism the organizing principle? Each option has advocates; none has an obvious path to success. Meanwhile, Chega grows stronger by default as the only party with a clear, simple message that resonates with voter frustrations.

Looking ahead, Portugal faces a choice it hasn't faced since the Carnation Revolution: what kind of country does it want to be? The post-1974 consensus—European, democratic, socially progressive, welcoming—is under challenge from Chega and being renegotiated by Montenegro. The October local elections suggest voters are willing to give the center-right a chance, but if health and housing crises persist, Chega waits in the wings with authoritarian solutions to problems democracy is failing to solve. That's the November 2025 snapshot: Portugal stable for now, but with the far-right more powerful than anyone imagined five years ago, and the institutional foundations of Portuguese democracy facing their sternest test in generations.`,
    issues: [
      'Chega becomes second-largest party with 23%, shifts immigration policy right',
      'Montenegro governs minority coalition with only 91 of 230 seats',
      'National Health Service and housing crises undermining social contract',
      'Left Bloc leadership crisis after electoral collapse',
      'Immigration restrictions passed with Chega support normalize far-right influence'
    ]
  }
]

async function main() {
  console.log('🏛️  Adding Politics write-ups for Batch 7 countries...\n')

  for (const country of countriesData) {
    try {
      console.log(`\n📝 Processing ${country.name}...`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'politics',
          },
        },
        update: {
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: JSON.stringify([]),
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'politics',
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ Saved Politics summary for ${country.name}`)
      console.log(`   - Summary length: ${country.summary.length} characters`)
      console.log(`   - Issues: ${country.issues.length}`)
    } catch (error) {
      console.error(`❌ Error saving ${country.name}:`, error)
    }
  }

  console.log('\n🎉 Politics write-ups for Batch 7 complete!')
  console.log(`📊 Processed ${countriesData.length} countries`)
  console.log('🌍 Countries:', countriesData.map(c => c.name).join(', '))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
