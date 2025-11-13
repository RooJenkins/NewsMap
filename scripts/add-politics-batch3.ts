import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = [
  {
    name: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    summary: `The thing you have to understand about Cuba in November 2025 is that this isn't just another economic crisis—it's the slow-motion collapse of a political system that's been running on fumes since the Soviet Union fell. Miguel Díaz-Canel sits atop a government that can barely keep the lights on, literally. October's nationwide blackout wasn't a natural disaster; it was the physical manifestation of systemic failure.

What makes this particularly fascinating from a political perspective is how the regime's response reveals its fundamental weakness. When protests erupted in Santiago over food shortages and power cuts, they didn't send in tanks—they sent a local party secretary to actually listen to people. That's not magnanimity; that's desperation. The Communist Party knows it lacks the legitimacy for mass repression anymore, but it also lacks the flexibility to actually reform. You're watching a government trapped between maintaining ideological purity and managing basic state functions, and it's failing at both.

The social media fiasco with Díaz-Canel berating an elderly hurricane victim—which went viral in a country where internet access is severely restricted, mind you—tells you everything about how out of touch this leadership is. When your propaganda apparatus accidentally turns into a public trial of the president's callousness, you've lost control of the narrative. The regime tried to "clarify" the incident and only made it worse. In any functional political system, heads would roll. In Cuba, there's nobody competent waiting in the wings.

Here's what keeps me up at night about Cuba's political trajectory: there's no obvious succession plan beyond Díaz-Canel, no younger generation of leaders being groomed, and critically, no institutional mechanism for peaceful transition. The military holds enormous economic power through state enterprises, creating a parallel structure of authority. But the armed forces also remember what happened when the Soviet subsidies dried up—they know this model is unsustainable.

The Biden administration's slight warming of relations, allowing remittances and some travel, created brief hope for reform. But Havana's gerontocracy sees any opening to the United States as an existential threat. Meanwhile, Havana has cozied up to Russia and China, but those relationships are transactional—neither Moscow nor Beijing is interested in bankrolling Cuban socialism like the Soviets did. China wants nickel and port access; Russia wants a Western Hemisphere irritant. Neither provides enough cash to fix Cuba's crumbling infrastructure or feed its people.

The opposition is fragmented and largely in exile. The 2021 protests showed that spontaneous dissent can mobilize thousands, but the government's subsequent crackdown—hundreds imprisoned, many for years—sent a chilling message. You can protest, but you'll pay dearly for it. This creates a perverse equilibrium: simmering popular resentment without organized opposition, and a government too weak to improve conditions but strong enough to punish dissent.

What's the endgame? Cuba muddles through 2026 with rolling blackouts, sporadic protests, and increasing emigration. The political system doesn't collapse suddenly—it atrophies. Eventually, probably after Díaz-Canel, you'll see either a military-led transition toward something resembling Vietnam's model (authoritarian politics, market economics), or a messier fragmentation if the regime loses control. But betting on when that happens is a fool's errand. Cubans have been predicting imminent collapse for three decades. What's remarkable is how long a failed system can persist through sheer institutional inertia and the population's exhausted resignation.`,
    issues: [
      'Energy Crisis and Infrastructure Collapse',
      'Succession Planning Vacuum',
      'Economic Paralysis and Food Shortages',
      'Emigration Brain Drain',
      'Regime Legitimacy Erosion'
    ],
    topStories: [
      {
        title: 'Cuba authorities warn against blackout protests',
        source: 'Axios',
        link: 'https://www.axios.com/2024/10/22/cuba-blackouts-protest-miguel-diaz-canel',
        pubDate: '2024-10-22'
      },
      {
        title: 'Cuban president faces social media backlash after hurricane response',
        source: 'Cuba Headlines',
        link: 'https://www.cubaheadlines.com/articles/314701',
        pubDate: '2024-11-05'
      }
    ]
  },
  {
    name: 'Cyprus',
    lat: 35.1264,
    lng: 33.4299,
    summary: `Cyprus in November 2025 presents this absolutely fascinating paradox: a country that's politically stable by regional standards but fundamentally stuck on its central existential question—the division of the island. Nikos Christodoulides, who made history in 2023 by winning the presidency without backing from either major party, has tried to position himself as the dealmaker who can finally solve the Cyprus problem. But here's the reality: the gaps between Greek Cypriot and Turkish Cypriot positions haven't narrowed; if anything, Turkey's increasing assertiveness in the Eastern Mediterranean has hardened positions on both sides.

What's interesting about Christodoulides politically is that he represents a post-partisan moment that hasn't quite materialized. He governs with a coalition including DIKO and EDEK, but he doesn't have a parliamentary majority in his own right. Every significant piece of legislation becomes a negotiation. On paper, that should produce consensus-based governance. In practice, it means incremental tinkering rather than bold reform. The big issues—reunification, energy disputes with Turkey, economic restructuring—remain essentially frozen.

The June 2024 European Parliament elections revealed some intriguing fault lines. The center-right DISY won, as expected, but the real story was Fidias Panayiotou—a YouTuber with no political experience—finishing third with nearly 20% of the vote and becoming Cyprus's first independent MEP. When a social media personality outpolls established parties, you're seeing what political scientists call "anti-system voting." It's not that Cypriots are ready to burn down their institutions, but there's deep frustration with traditional politics, particularly among younger voters who see the old guard as incapable of solving the island's fundamental problems.

Immigration has emerged as the sleeper issue in Cypriot politics, and it's starting to dominate discourse in ways that would have been unthinkable a decade ago. Cyprus receives, per capita, one of the highest numbers of asylum seekers in the EU. The government's response has been increasingly restrictive, but that creates tension with Brussels. Nicosia feels abandoned by EU migration policy—they're on the frontline but get little support—and that resentment is being exploited by right-wing politicians.

The energy question is where Cyprus's political future gets really complicated. Discoveries of natural gas in Cypriot waters should be an economic windfall, but they've become another source of conflict with Turkey, which doesn't recognize Cyprus's exclusive economic zone. Turkish warships have literally blocked drilling operations. This isn't just about resources; it's about sovereignty, recognition, and ultimately, the island's political future. Christodoulides has tried to engage Ankara through back channels, but Erdoğan has shown zero interest in compromise, especially with Turkish elections on the horizon.

The Turkish Cypriot leadership, meanwhile, has increasingly aligned with Ankara's position favoring a two-state solution rather than reunification. That's a fundamental shift from the decades-long negotiating framework. For Greek Cypriot politicians, accepting partition is political suicide. But maintaining the status quo indefinitely isn't sustainable either. You're stuck in this awful equilibrium where everyone knows the current situation is untenable, but any movement toward resolution requires political courage nobody's willing to demonstrate.

Looking ahead to 2026, Christodoulides faces legislative elections where his lack of party machinery could prove fatal. The traditional parties—DISY, AKEL, DIKO—still control the organizational infrastructure for winning parliamentary seats. If opposition parties gain ground, his coalition could collapse, forcing either snap presidential elections or a messy technocratic government. The smart money says Cyprus continues muddling through, putting off hard decisions, hoping external events somehow create space for breakthrough. But hope isn't a political strategy, and time isn't on Cyprus's side when it comes to solving its fundamental divisions.`,
    issues: [
      'Cyprus Reunification Stalemate',
      'Immigration Pressures',
      'Energy Disputes with Turkey',
      'Coalition Government Fragility',
      'Anti-Establishment Voter Sentiment'
    ],
    topStories: [
      {
        title: 'YouTuber Fidias Panayiotou becomes first independent MEP elected in Cyprus',
        source: 'Taylor & Francis Online',
        link: 'https://www.tandfonline.com/doi/full/10.1080/13608746.2025.2543812',
        pubDate: '2024-06-09'
      },
      {
        title: 'Cyprus 2024 European Parliament elections reshape political landscape',
        source: 'LSE EUROPP',
        link: 'https://blogs.lse.ac.uk/europpblog/2024/05/09/cyprus-the-2024-european-parliament-elections-a-changing-political-landscape/',
        pubDate: '2024-05-09'
      }
    ]
  },
  {
    name: 'Czech Republic',
    lat: 49.8175,
    lng: 15.4730,
    summary: `The Czech political landscape in November 2025 is defined by one central dynamic: Andrej Babiš is winning, and Petr Fiala's coalition government is floundering. The September 2024 regional and Senate elections were brutal for the ruling coalition—ANO 2011 swept 10 of 13 regions and won the most Senate seats for the first time in party history. This wasn't a close-run thing; it was a repudiation.

What makes this particularly instructive is *why* ANO is dominating. It's not that Czechs have suddenly embraced populism wholesale—ANO's been around since 2011—it's that Fiala's five-party coalition has proven utterly incapable of delivering on its core promises. They came to power in 2021 promising to clean up corruption, restore democratic norms after Babiš's personalist rule, and competently manage the economy. On corruption, they've made marginal progress. On democratic norms, fine, they respect judicial independence. But on the economy—which is what most voters actually care about—they've presided over high inflation, sluggish growth, and a cost-of-living crisis that's hammering ordinary Czechs.

The coalition's internal dynamics are a masterclass in how not to govern. You had five parties—ODS, TOP 09, KDU-ČSL, STAN, and the Pirates—each with their own priorities, their own egos, their own electoral bases. That works fine when you're in opposition united against Babiš. It's a disaster when you're trying to implement coherent policy. The final straw came in October 2024 when Fiala sacked Ivan Bartoš, the Pirate Party leader, from his position overseeing digitalization. Bartoš's dismissal wasn't just a personnel change—the Pirates quit the coalition entirely. You don't lose a coalition partner midterm unless your government is fundamentally dysfunctional.

Here's the broader European context that matters: the Czech Republic is watching Poland's democratic backsliding under PiS, Hungary's drift into soft authoritarianism under Orbán, and Slovakia's return to Fico-style politics. Czech voters are exhausted by ideological battles. They want governments that make their lives materially better. Fiala's coalition has been more focused on signaling virtue—we're the democratic adults in the room—than on delivery. That doesn't win elections.

Babiš, for all his flaws—and there are many, including ongoing criminal proceedings—understands this viscerally. He campaigns on pragmatism, on "getting things done," on not getting bogged down in abstract principles. He's economically centrist, socially conservative, Euroskeptic without being rabidly anti-EU, and crucially, he doesn't lecture voters about their moral failings. That's a formula that works in post-industrial Central Europe.

The European Parliament elections in June 2024 showed the same pattern: losses for all governing parties, gains for ANO. The coalition tried to frame it as a midterm protest vote. But when you lose regional elections, Senate elections, and European elections all in the same year, it's not protest—it's a trend. Parliamentary elections aren't until 2025, but if current trajectories hold, Babiš is heading for a comeback.

What would an ANO government mean? Less confrontation with Russia (though still nominally pro-Ukraine), more transactional relations with Brussels, less emphasis on liberal democratic reforms, more focus on economic populism. Babiš isn't Orbán—he's too pragmatic to burn bridges with Western Europe—but he'd certainly move Czechia away from Fiala's Atlanticist, liberal-democratic orientation.

The opposition to ANO is scattered. The Pirate Party is licking its wounds after losing two of three MEPs. STAN (Mayors and Independents) has been plagued by local corruption scandals. The Social Democrats have collapsed. The Communist Party is irrelevant. There's no credible left-wing alternative to ANO's economic populism, and the liberal parties are too associated with Fiala's unpopular government.

Looking toward 2026, the question isn't whether ANO can win—it probably will—but whether it can govern alone or needs coalition partners. If Babiš gets a majority, he'll have a free hand. If he needs partners, the likeliest scenario is ANO plus smaller parties willing to trade positions for policies. What Czech politics needs is a credible center-left party that can compete with ANO on economic issues without the baggage of the old Communist Party or the ineffectual Social Democrats. But party-building takes time Czechia doesn't have before the next election cycle.`,
    issues: [
      'ANO 2011 Electoral Dominance',
      'Coalition Government Collapse',
      'Cost-of-Living Crisis',
      'Pirate Party Exit from Government',
      'Lack of Credible Opposition'
    ],
    topStories: [
      {
        title: 'ANO dominates Czech regional elections',
        source: 'Euronews',
        link: 'https://www.euronews.com/my-europe/2024/09/22/main-opposition-party-dominates-regional-elections-in-the-czech-republic',
        pubDate: '2024-09-22'
      },
      {
        title: 'Czech Pirate Party exits ruling coalition after Cabinet reshuffle',
        source: 'Wiley Online Library',
        link: 'https://ejpr.onlinelibrary.wiley.com/doi/full/10.1111/2047-8852.70017',
        pubDate: '2024-10-15'
      }
    ]
  },
  {
    name: 'Democratic Republic of Congo',
    lat: -4.0383,
    lng: 23.6528,
    summary: `The fall of Goma in late January 2025 to M23 rebels isn't just a military defeat for Félix Tshisekedi's government—it's a searing indictment of the Congolese state's inability to perform the most basic function of any government: maintaining a monopoly on violence within its territory. A city of one million people, a provincial capital, taken by a rebel group backed by Rwanda. This isn't some remote outpost; this is strategic, economic, and symbolic catastrophe rolled into one.

Let's be clear about what happened politically: Tshisekedi won re-election in December 2023 with 73% of the vote in an election so flawed that even sympathetic observers called it a joke. Low turnout, widespread irregularities, opposition claims of fraud—the whole depressing package. He was sworn in for a second term in January 2024 with a mandate that's essentially fictional. When you build your political legitimacy on a sham election, don't be surprised when the state's authority crumbles under pressure.

The M23 conflict was *the* central issue in Tshisekedi's first term, and it's now defining his second term in the worst possible way. Rwanda's backing of M23 is an open secret—the UN has documented it extensively—but Tshisekedi has been utterly unable to do anything about it. Diplomatic attempts to pressure Kigali have failed. The much-vaunted East African regional force turned out to be performative peacekeeping. Ceasefire agreements in July and December 2024 both collapsed within weeks amid, let's be honest, mutual recriminations where both sides share blame but the end result is continued war.

Here's what's maddening about Congolese politics: the DRC has everything—cobalt, copper, gold, diamonds, coltan. It should be wealthy. Instead, it's a textbook case of the resource curse. Those resources finance rebel groups, corrupt officials, and foreign interventions. The Congolese military (FARDC) is large on paper but plagued by low morale, poor equipment, and command structures compromised by ethnic loyalties and graft. You can't defeat insurgencies with an army that's essentially a patronage network in fatigues.

Tshisekedi's political strategy has been to deflect blame for security failures onto Rwanda, which is partly fair—Kigali *is* backing M23—but also conveniently absolves his own government of responsibility. His refusal to negotiate with M23 might be politically popular (Congolese nationalism runs deep), but strategically it's bankrupt. If you can't defeat them militarily, and you won't negotiate politically, you're left with indefinite war and humanitarian catastrophe. Over two million displaced in eastern DRC alone.

The government formation process after the 2023 election took five months—five months!—because Tshisekedi was trying to balance competing patronage networks, ethnic constituencies, and political factions. When you finally announced a government in May 2024, it was a bloated mess of ministers and deputies designed to buy loyalty rather than govern effectively. That's Congolese politics in microcosm: elite bargaining that has nothing to do with improving ordinary Congolese lives.

The risk now is regional war. If Rwandan forces—not just M23 proxies but actual Rwandan military—are operating in eastern DRC, and if the Congolese government continues to struggle, you could see direct DRC-Rwanda conflict. Uganda's involved through its own proxies. Burundi has sent troops to support Kinshasa. Angola's trying to mediate. The whole Great Lakes region could explode because Tshisekedi can't control his own territory and Paul Kagame sees eastern DRC as Rwanda's security buffer.

What's the political path forward? Tshisekedi needs to either strengthen the military dramatically—which requires money, competence, and time he doesn't have—or accept some form of negotiated settlement that gives eastern regions autonomy, which is politically toxic. The opposition is weak and fragmented; Moïse Katumbi got 18% in the presidential election and cried foul, but he has no mechanism to challenge Tshisekedi's hold on power. The international community issues concerned statements but won't commit the resources needed for actual intervention.

The depressing reality is that the DRC muddles through 2026 with low-intensity conflict in the east, continued displacement, sporadic atrocities, and a government that controls Kinshasa and some provincial capitals but has tenuous authority over vast swathes of territory. State failure in DRC isn't binary; it's gradual, grinding, and seemingly permanent. Tshisekedi will likely survive politically because the alternatives are worse, but survival isn't governance. It's just managed decline with occasional spasms of violence that shock the international conscience before we all move on to the next crisis.`,
    issues: [
      'M23 Rebel Control of Goma',
      'Rwandan Proxy Warfare',
      'Regional War Risk',
      'Electoral Legitimacy Crisis',
      'Military Incompetence and Corruption'
    ],
    topStories: [
      {
        title: 'Fall of DRC\'s Goma: Urgent Action Needed to Avert Regional War',
        source: 'International Crisis Group',
        link: 'https://www.crisisgroup.org/africa/great-lakes/democratic-republic-congo/fall-drcs-goma-urgent-action-needed-avert-regional-war',
        pubDate: '2025-01-28'
      },
      {
        title: 'DR Congo ends impasse to appoint new government',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/news/2024/5/29/dr-congo-ends-impasse-to-appoint-new-government',
        pubDate: '2024-05-29'
      }
    ]
  },
  {
    name: 'Denmark',
    lat: 56.2639,
    lng: 9.5018,
    summary: `Denmark in November 2025 offers a masterclass in how a competent, pragmatic prime minister can maintain power through sheer political skill even as her party's electoral support crumbles. Mette Frederiksen's Social Democrats got absolutely hammered in the June 2024 European Parliament elections—15.6%, their worst result in 120 years. And yet, her position as prime minister feels more secure than most European leaders. How?

The answer is her audacious decision after the 2022 election to form a centrist grand coalition with the center-right Liberals and the new Moderates party. This wasn't just tactical positioning; it was a fundamental reimagining of Danish governance. Instead of the traditional bloc politics—red versus blue—Frederiksen created a "SVM government" (Social Democrats, Venstre, Moderates) that occupies the political center and effectively boxes out both the far-left and the populist right. It's brilliant politics, even if it's ideologically incoherent.

What makes this work is that Danish voters, by and large, aren't ideologues. They want competent administration, economic stability, a robust welfare state, and sensible responses to immigration and security challenges. Frederiksen delivers on all of that. She's introduced conscription for women—a progressive move wrapped in traditional defense policy. She's pushed through the "Green Tripartite" deal on climate, showing she can balance environmental commitments with economic pragmatism. She's taken a hard line on immigration that would make some social democrats elsewhere in Europe blush, but it's what Danish voters want.

The June 2024 assault on Frederiksen in central Copenhagen—a physical attack that resulted in her assailant's conviction and deportation—briefly put her personal security at the center of political debate. But what's telling is how little it changed the political dynamics. There was no rally-around-the-leader moment that boosted her poll numbers. Danish politics is remarkably transactional; sympathy for a political leader doesn't automatically translate into electoral support.

Denmark's political culture has always been consensus-driven, but the SVM coalition takes this to an extreme. With three parties spanning the ideological spectrum from center-left to center-right, every significant policy becomes a negotiation. That's produced stability—no coalition crisis, no snap elections—but it's also created a certain political blandness. There's no grand vision, no transformative agenda. It's managerial politics, which is fine when times are good but potentially problematic if Denmark faces a real economic or security shock.

The European context matters here. Denmark looks at Sweden's gang violence problem, Germany's economic struggles, France's political chaos, and thinks: "We're doing alright, actually." Frederiksen has positioned Denmark as a reliable NATO ally—critical support for Ukraine, defense spending increases, leadership on Baltic security—while maintaining enough independence from Brussels to satisfy Danish Euroskepticism. It's a balancing act, but she's mastered it.

The new ministries Frederiksen created—one focused on Europe, another on the "Green Tripartite," and bizarrely, one on "Prepping" (civil preparedness)—signal governmental priorities. The prepping ministry is particularly revealing: it shows Denmark taking seriously the prospect of hybrid warfare, infrastructure attacks, and the need for civilian resilience. After watching Russian sabotage attempts across Europe, Danish officials aren't taking chances.

Looking ahead, the question is whether Frederiksen can maintain this coalition through a full parliamentary term. The Social Democrats' European Parliament wipeout suggests their traditional base is eroding—probably to the Socialist People's Party on the left and the populist Denmark Democrats on immigration issues. But parliamentary elections operate under different dynamics. Frederiksen's personal popularity remains relatively strong, and she's shown remarkable political flexibility.

The opposition is scattered. The center-right parties are in government, so the main opposition comes from the far-left (Socialist People's Party, Red-Green Alliance) and the populist right (Denmark Democrats, New Right). Neither represents a governing alternative; they're protest vehicles. For Frederiksen to lose power, you'd need either a coalition collapse—possible but unlikely given the parties' mutual interest in stability—or a dramatic shift in voter priorities.

What Danish politics demonstrates is that in mature democracies with strong institutions and high social trust, voters reward competence and stability over ideological purity. Frederiksen understands this intuitively. She's governing as a centrist pragmatist, not as a social democratic crusader. That frustrates party purists, but it wins elections. As long as Denmark's economy remains stable, immigration remains controlled, and security threats remain manageable, expect more of the same: competent, uninspiring, effective governance. Which, honestly, is better than most countries manage.`,
    issues: [
      'Social Democratic Electoral Decline',
      'Grand Coalition Management',
      'Immigration Policy Hardening',
      'Defense and Civil Preparedness Expansion',
      'Traditional Party Base Erosion'
    ],
    topStories: [
      {
        title: 'Denmark European election delivers worst Social Democratic result in 120 years',
        source: 'Courthouse News Service',
        link: 'https://www.courthousenews.com/denmarks-invincible-prime-minister-is-falling-deep/',
        pubDate: '2024-06-09'
      },
      {
        title: 'Mette Frederiksen assaulted in Copenhagen',
        source: 'Wikipedia',
        link: 'https://en.wikipedia.org/wiki/Mette_Frederiksen',
        pubDate: '2024-06-07'
      }
    ]
  },
  {
    name: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    summary: `Luis Abinader's re-election in May 2024 wasn't just a victory—it was a demolition. Sixty percent of the vote in the first round, eliminating any need for a runoff. His Modern Revolutionary Party (PRM) winning supermajorities in both the Senate (24 of 32 seats) and the Chamber of Deputies (105 of 190 seats). The first time in modern Dominican history a party has achieved legislative supermajorities. This is the kind of electoral mandate politicians dream about.

And the remarkable thing is, Abinader earned it. He came to power in 2020 on an anti-corruption platform, which in Dominican politics is usually empty rhetoric. But he actually prosecuted corrupt officials, including figures from previous administrations. He maintained macroeconomic stability even as much of Latin America struggled with inflation and debt crises. His approval ratings sat around 70%—stratospheric by regional standards. One of Latin America's most popular presidents, and with good reason.

But here's the uncomfortable truth lurking beneath Abinader's success: a significant chunk of his political capital rests on Dominican nationalism directed at Haiti. The border wall construction, the mass deportations (175,000 Haitians in 2023 alone according to government figures), the rhetoric about protecting Dominican sovereignty—this is a deliberate political strategy. And it works. In a country where Haitian migration is viewed with deep suspicion by large segments of the population, Abinader's hardline stance is electoral gold.

Now, you can argue this is pragmatic politics—Abinader is responding to genuine concerns from Dominican voters about immigration, security, and national identity. And that's partly true. But the mass deportations and the wall aren't just policy responses; they're performative nationalism designed to outflank any potential opposition from the right. The political genius is that he's combined this with economic competence and anti-corruption credibility, creating a coalition that spans class and regional lines.

The opposition in May 2024 was divided and pathetic. The old Dominican Liberation Party (PLD), which dominated politics for decades, is in ruins—wracked by corruption scandals and internal divisions. The Reformist Social Christian Party couldn't mount a credible challenge. When you win 60% in a multi-party democracy, it's not just that you're popular; it's that your opposition is incompetent or discredited. Abinader benefits from both.

His second term priorities are revealing. He's pushing for constitutional amendments to strengthen presidential term limits—good for democratic consolidation. He wants fiscal and tax reform to manage public debt and boost growth—economically necessary. He's promised to continue the Haiti policies—politically essential for maintaining his base. The package is competent centrism with a nationalist edge.

The supermajorities in Congress give Abinader extraordinary power, but that cuts both ways. With complete control comes complete responsibility. He can't blame opposition obstruction if policies fail. If the economy stumbles, if corruption returns, if the Haiti situation deteriorates, it's all on him. Absolute power in a democracy is a poisoned chalice unless you use it for genuine reform.

The Haiti crisis presents both opportunity and risk for Abinader. The collapse of security in Port-au-Prince, the gang control, the humanitarian catastrophe—all of this validates his tough stance on border security and deportations. But it also creates pressure for Dominican involvement or at least cooperation in international stabilization efforts. Abinader has resisted this, correctly calculating that Dominican voters have zero appetite for their country getting dragged into Haiti's problems. But if the instability spills over—more refugees, violence, disease—Abinader's wall won't be enough.

Regionally, Abinader has positioned the Dominican Republic as a stable, pro-business, pro-democracy anchor in the Caribbean. While Nicaragua slides into dictatorship and Venezuela remains a failed state, the DR looks competent. That attracts investment, tourism, and U.S. support. Abinader's cultivated relationships with Washington, emphasizing security cooperation and economic partnership.

The risk for Dominican democracy isn't that Abinader becomes authoritarian—he's shown no such inclinations—but that his dominance crowds out effective opposition. Healthy democracies need robust opposition parties that can offer alternative visions and hold governments accountable. When one party controls everything, even with democratic legitimacy, institutions can atrophy. The PLD's collapse is bad for Dominican politics long-term, even if it's good for Abinader short-term.

Looking to 2028, Abinader is constitutionally barred from seeking a third consecutive term (though his proposed constitutional amendment would strengthen that prohibition for future presidents). The succession question within the PRM becomes critical. Does the party have leaders who can inherit Abinader's coalition? Or does his personal popularity paper over internal divisions that will explode once he's not on the ballot? The smart money says Dominican politics remains stable through Abinader's second term, but the 2028 transition will test whether his political success has built durable institutions or just a personal political machine.`,
    issues: [
      'Haitian Immigration and Nationalism',
      'Supermajority Governance Challenges',
      'Opposition Party Collapse',
      'Constitutional Reform Implementation',
      '2028 Succession Planning'
    ],
    topStories: [
      {
        title: 'Luis Abinader wins re-election with 60% of vote',
        source: 'NBC News',
        link: 'https://www.nbcnews.com/news/latino/abinader-reelected-dominican-republic-elections-sunday-rcna153018',
        pubDate: '2024-05-20'
      },
      {
        title: 'Modern Revolutionary Party wins historic supermajorities',
        source: 'AS/COA',
        link: 'https://www.as-coa.org/articles/chart-results-dominican-republics-2024-elections',
        pubDate: '2024-05-21'
      }
    ]
  },
  {
    name: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    summary: `Daniel Noboa's political trajectory reads like something from a political thriller. At 37, he's one of the youngest leaders ever re-elected in a free and fair contest, winning 55.7% in April 2025. But the circumstances of his rise and the methods of his governance should give any democrat pause. Ecuador has traded one form of chaos—rampant cartel violence—for another potential danger: militarized authoritarian governance wrapped in democratic legitimacy.

Let's start with the security crisis that propelled Noboa to power. Ecuador's transformation from a peaceful Andean nation to having Latin America's highest murder rate (46 per 100,000 in 2023) is one of the most dramatic security collapses of the 21st century. Sandwiched between Peru and Colombia—the world's top cocaine producers—Ecuador became a crucial transit hub. Mexican and Balkan cartels partnered with local gangs, and suddenly entire neighborhoods in Guayaquil and Quito became war zones. The prison system collapsed into cartel fiefdoms.

Noboa's response was the "mano dura" strategy—iron fist politics. In January 2024, after a major gang leader escaped and gangs attacked media stations, Noboa declared an "internal armed conflict" and designated 22 criminal groups as terrorist organizations. He deployed the military into cities, declared states of emergency (35 and counting), and authorized aggressive tactics that resulted in tens of thousands of arrests. The murder rate dropped to 38.76 per 100,000 in 2024—still catastrophic, but down from the peak.

Here's the political problem: the Constitutional Court has repeatedly rejected Noboa's "internal armed conflict" framing as unconstitutional. He's done it anyway. When four children died after being detained by a military patrol, it revealed the human rights cost of militarized policing. Freedom House and human rights organizations document arbitrary detentions, torture allegations, and due process violations. But here's the brutal political reality—most Ecuadorians don't care. They want security, and Noboa is delivering relative improvement, even if the methods are questionable.

This is the populist authoritarian playbook: identify a real crisis, implement aggressive measures that show visible results, dismiss constitutional constraints as bureaucratic obstacles, and ride popular approval to consolidate power. The April 2025 election showed it works. Noboa's opponent couldn't offer a credible alternative security strategy, so Noboa won going away.

The U.S. has embraced Noboa as a partner against cartels, which tells you everything about Washington's priorities. Human rights concerns get mentioned in diplomatic cables but don't affect material support. Noboa gets American intelligence, equipment, and political backing because he's fighting the same cartels flooding U.S. cities with fentanyl and cocaine. The "Plan Ecuador" being pushed by lobbyists would essentially replicate Plan Colombia's militarized approach. Whether that's wise—given Colombia's mixed results after decades of drug war—is an open question.

What worries me is the institutional damage. Ecuador's Constitutional Court is being ignored. The judiciary is under pressure. Media faces intimidation—remember, gangs attacked TV stations, but the government's also used anti-terrorism laws to crack down on critical coverage. The legislature is weak and fractured. All the institutional checks on executive power are either compromised or sidelined in the name of fighting crime.

Noboa's political skill shouldn't be underestimated. He's young, telegenic, and projects competence. He's not a crude populist like some regional counterparts; he's sophisticated, well-educated (Harvard, Kellogg School of Management), and understands how to message for both domestic and international audiences. That makes him more effective and potentially more dangerous to democratic norms.

The economic underside of the security crisis matters too. Ecuador's unemployment remains high, the economy grew modestly but unevenly, and the security situation has devastated tourism and foreign investment in affected regions. If Noboa can't translate security improvements into economic growth, his support could erode. But if he delivers on both security and economy, he could reshape Ecuadorian politics for a generation.

Opposition is fragmented between traditional parties, leftist movements, and indigenous organizations. None have offered a compelling alternative vision. The correísta left (supporters of former president Rafael Correa) is tainted by association with Venezuela. The traditional right is seen as out of touch. Indigenous movements have grassroots strength but struggle to build national coalitions.

The scenario that keeps me up at night is that Ecuador becomes a competitive authoritarian regime—elections continue, opposition exists, but the playing field is tilted through emergency powers, militarization, and selective application of anti-terrorism laws. Noboa insists he's a democrat, and maybe he is. But the incentives all point toward maintaining emergency powers indefinitely. Why give up tools that work politically, even if they're constitutionally dubious?

The next two years will tell us whether Ecuador's democratic backsliding is temporary emergency response or permanent institutional transformation. If Noboa starts dismantling term limits, packing courts, or crushing opposition, we'll know it's the latter. For now, he's a young leader with a massive mandate facing a genuine security crisis. How he uses that power will define Ecuador's political future.`,
    issues: [
      'Militarized Governance and Human Rights',
      'Constitutional Court Defiance',
      'Cartel Violence and Security Gains',
      'Democratic Institutional Erosion',
      'U.S. Security Partnership Deepening'
    ],
    topStories: [
      {
        title: 'Daniel Noboa wins re-election at age 37 with 55.7% of vote',
        source: 'Atlantic Council',
        link: 'https://www.atlanticcouncil.org/blogs/new-atlanticist/what-noboas-reelection-means-for-us-ecuador-ties/',
        pubDate: '2025-04-13'
      },
      {
        title: 'Ecuador\'s fight against crime eroding human rights',
        source: 'Freedom House',
        link: 'https://freedomhouse.org/article/ecuadors-fight-against-transnational-crime-eroding-human-rights',
        pubDate: '2024-09-15'
      }
    ]
  },
  {
    name: 'Egypt',
    lat: 30.0444,
    lng: 31.2357,
    summary: `Abdel Fattah el-Sisi's re-election in December 2023 with 89.6% of the vote would be laughable if it weren't so depressingly predictable. Opposition candidates were sidelined or jailed, his three competitors were unknown figures who posed zero threat, and the whole exercise was performative democracy designed to give authoritarian rule a constitutional veneer. He was sworn in for a third term in April 2024, extending his rule until 2030. The 69-year-old former military chief now presides over the Arab world's most populous nation at arguably its most precarious moment since the 2011 revolution.

The economic situation is catastrophic, which makes the regime's stability all the more remarkable—and concerning. Egypt was on the brink of currency collapse and sovereign default in early 2024. Then a financial rescue package arrived: over $50 billion in loans and investment deals in Q1 2024 alone, primarily from Gulf states and the IMF. This wasn't charity; it was Gulf monarchies buying Egyptian stability because they're terrified of what happens if Egypt collapses. An Egypt in chaos would send shockwaves through the entire region.

But here's the thing about bailouts: they don't solve structural problems. Egypt's economy is still fundamentally broken. Massive military-owned enterprises crowd out private sector investment. Corruption is endemic. The currency has been devalued multiple times. Inflation is crushing ordinary Egyptians. The bailout keeps the regime afloat, but it doesn't create jobs for Egypt's bulging youth population or fix the underlying dysfunctions that have plagued Egyptian governance for decades.

The Gaza war, raging on Egypt's northeastern border, has become Sisi's defining foreign policy challenge. Egypt is caught between competing pressures: support the Palestinian cause (politically popular domestically and regionally), maintain security cooperation with Israel (essential for Sinai stability and U.S. relations), and absolutely refuse any Palestinian refugee resettlement in Sinai (Sisi's red line). When Israel's campaign in Gaza intensified, there was Western pressure on Egypt to accept refugees. Sisi said no, emphatically and publicly. His calculation: accepting refugees could threaten Egyptian sovereignty, empower militant groups in Sinai, and create a permanent Palestinian presence that undermines their right of return.

This position has drawn criticism, but it's politically astute from Sisi's perspective. Egyptian nationalism runs deep, and the military establishment sees Sinai as a security buffer that cannot be compromised. The refusal to open borders has actually bolstered Sisi's standing among segments of the Egyptian public who view it as principled defense of national interests against Western pressure.

The Sudan conflict on Egypt's southern border adds another security headache. Fighting between the Sudanese Armed Forces and the Rapid Support Forces has created instability, refugees, and the prospect of a failed state next door. Egypt has interests in Sudan—Nile water politics, regional influence, security cooperation—but limited ability to shape outcomes. The Nile water dispute with Ethiopia over the Grand Renaissance Dam remains unresolved, with Ethiopia filling the dam despite Egyptian objections. Sisi has threatened military action in the past but lacks the capability or appetite for war with Ethiopia.

Domestically, Sisi's Egypt is a police state. Tens of thousands of political prisoners, media censorship, NGO crackdowns, and zero tolerance for dissent. The 2011 revolutionary generation is either in prison, in exile, or silenced. The Muslim Brotherhood is crushed. Secular liberals are intimidated. The military and security services control the political system entirely. Sisi has built a system where political opposition is impossible, not just difficult.

What's remarkable is how this is sustained. Partly it's repression—the security apparatus is massive and ruthless. Partly it's economic patronage—the military takes care of its own. Partly it's public exhaustion—Egyptians look at Syria, Libya, Yemen, and think "at least we have stability." Partly it's external support—Gulf money, U.S. military aid, European migration cooperation. Sisi has constructed a remarkably resilient authoritarian system.

But there are cracks. The economic pain is real and growing. Youth unemployment is staggering. The social contract—accept authoritarianism in exchange for stability and modest prosperity—frays when people can't afford food. The 2011 revolution showed that Egyptian street politics can explode when economic conditions deteriorate beyond a certain threshold. The bailouts buy time, but they don't solve the underlying pressure.

Sisi's personalization of power is also a vulnerability. There's no clear succession plan, no obvious number two, no institutional mechanism for transition. The military will obviously play kingmaker when Sisi exits, but how that happens—retirement, death, coup—shapes everything. The lack of succession planning is typical of authoritarian systems but creates instability risks.

Looking ahead to 2026, Egypt muddles through. The bailout money stabilizes the currency and prevents immediate crisis. Sisi maintains his grip on power through repression and patronage. The Gaza and Sudan conflicts continue without resolution. Economic pain persists but doesn't reach revolutionary levels. It's grinding, oppressive stability—the kind that can last for years until suddenly it can't. Predicting when authoritarian systems collapse is nearly impossible; they appear stable until the moment they're not. Sisi's bet is that he can maintain control through 2030 and beyond. History suggests that's harder than it looks, especially when you're governing 100+ million people with a broken economy and regional instability on multiple borders.`,
    issues: [
      'Economic Crisis and Bailout Dependency',
      'Gaza War and Refugee Pressure',
      'Authoritarian Consolidation',
      'Regional Security Threats (Sudan, Ethiopia)',
      'Succession Planning Vacuum'
    ],
    topStories: [
      {
        title: 'Sisi wins third term with 89.6% in tightly controlled election',
        source: 'CBS News',
        link: 'https://www.cbsnews.com/news/egypt-election-results-abdel-fattah-el-sisi-wins-3rd-term-amid-israel-hamas-war/',
        pubDate: '2023-12-18'
      },
      {
        title: 'Egypt receives $50 billion in loans and investments',
        source: 'Atlantic Council',
        link: 'https://www.atlanticcouncil.org/blogs/menasource/sisi-egypt-election-gaza-third-term/',
        pubDate: '2024-03-15'
      }
    ]
  },
  {
    name: 'El Salvador',
    lat: 13.7942,
    lng: -88.8965,
    summary: `Nayib Bukele is the most fascinating and troubling political phenomenon in Latin America right now. His re-election in February 2024—claiming over 85% of the vote, which he called "a record in the entire democratic history of the world"—crystallizes the central tension of 21st-century governance: can you have democratic legitimacy (the people genuinely support him) alongside democratic backsliding (he's systematically dismantling checks and balances)?

Let's start with the facts that explain his popularity. When Bukele took office in 2019, El Salvador was controlled by gangs. MS-13 and Barrio 18 ran entire neighborhoods, collected extortion payments from businesses, and made the country one of the world's most violent. The murder rate was unconscionable. Then in March 2022, after a spike in killings, Bukele launched his "state of exception"—essentially a permanent emergency that suspended constitutional rights. The security forces arrested over 75,000 alleged gang members by January 2024. The murder rate plummeted to 1.9 per 100,000 in 2024, among the lowest in the Americas.

This is transformative. Salvadorans who couldn't leave their homes at night can now. Businesses that paid extortion don't anymore. Parents who feared for their children's safety feel relief. If you've never lived under gang control, it's hard to grasp how liberation from that violence would make you willing to overlook almost anything else. Bukele's approval ratings consistently run 80-90%. He's not popular despite the crackdown; he's popular *because* of the crackdown.

But here's where it gets uncomfortable for anyone who cares about liberal democracy. The mass arrests are arbitrary—you can be detained on suspicion, without charges, indefinitely. Amnesty International and Human Rights Watch document torture in prisons. At least 223 people have died in custody during the state of emergency, some with signs of torture. Due process is nonexistent. The prisons Bukele built—he proudly posts videos of gang members packed into cells—are human rights disasters.

And it's not just security policy where Bukele has blown past constitutional constraints. He couldn't legally run for immediate re-election; the constitution explicitly prohibits consecutive presidential terms. So his legislative allies removed Supreme Court justices and replaced them with loyalists who "reinterpreted" the constitution to allow Bukele to run. This is textbook authoritarian consolidation: pack the courts, change the rules, eliminate term limits.

El Salvador has fallen 61 places in the World Press Freedom Index and 24 places in the Democracy Index since Bukele took power. Critical journalists face harassment. The legislature is a rubber stamp—Bukele's party controls it. Civil society organizations operate under pressure. All the institutional safeguards that prevent democratic backsliding have been systematically dismantled.

So here's the question that haunts anyone analyzing Bukele: is this a temporary emergency response to a genuine security crisis, or is it permanent authoritarian transformation? Bukele insists it's the former. The state of exception will end when gangs are defeated, he says. But authoritarian emergency powers are rarely temporary. Why would Bukele give up tools that have made him politically untouchable?

The international community is deeply conflicted. The United States criticizes human rights abuses while quietly appreciating the security gains—fewer Salvadorans migrating north, fewer MS-13 members operating in U.S. cities. Latin American democracies are uncomfortable but don't want to antagonize a popular leader. International financial institutions continue lending. Bukele has successfully positioned himself as a new model—the millennial authoritarian who uses social media, cryptocurrency (remember El Salvador made Bitcoin legal tender), and tech-savvy governance while crushing democratic institutions.

What's particularly striking is how Bukele has cultivated a personal brand. He calls himself "the world's coolest dictator" on Twitter/X—embracing the label ironically while doing the thing. He's young (43), charismatic, and extremely online. He understands digital-age political communication better than almost any world leader. That makes him more dangerous to democratic norms because he makes authoritarianism look modern, efficient, and popular.

The opposition in El Salvador is decimated. The traditional parties—FMLN and ARENA—are discredited, associated with the violent gang-controlled past. Nobody has a credible alternative vision. If you're an opposition politician, what do you run on? "Restore constitutional rights and risk gang violence returning"? That's not a winning message when people credit Bukele with saving their lives.

The economic situation is shakier than Bukele's political dominance suggests. GDP growth has been modest, Bitcoin adoption was a gimmick that hasn't transformed the economy, and El Salvador remains heavily dependent on remittances from Salvadorans abroad. If economic conditions deteriorate—recession, debt crisis—Bukele's popularity might erode. But as long as security remains dramatically improved and the economy doesn't collapse, he's untouchable.

Looking ahead, the risk is that El Salvador becomes the model for other Latin American countries facing security crises. If you're a politician in Ecuador, Honduras, or Haiti, watching Bukele's success is tempting. Throw out the constitutional rulebook, crack down hard, and ride popular approval to indefinite power. The Bukele model works politically, even if it's disastrous for democracy.

My prediction: Bukele maintains power through 2026 and beyond, the state of exception becomes permanent, El Salvador transitions from flawed democracy to competitive authoritarian regime, and Bukele either changes the constitution to allow indefinite re-election or hand-picks a successor he controls. The gang crackdown's security gains endure in the short term but create long-term human rights legacies and social divisions. El Salvador becomes a cautionary tale about how genuine security crises can be exploited to justify authoritarian governance, and how popular legitimacy doesn't necessarily mean democratic legitimacy.`,
    issues: [
      'Gang Crackdown and Mass Incarceration',
      'Democratic Backsliding and Court Packing',
      'Human Rights Abuses in Prisons',
      'Constitutional Term Limit Violation',
      'Press Freedom Erosion'
    ],
    topStories: [
      {
        title: 'Bukele wins re-election claiming 85% of vote',
        source: 'NPR',
        link: 'https://www.npr.org/2024/02/03/1226456554/el-salvador-election-primer-bukele',
        pubDate: '2024-02-04'
      },
      {
        title: 'El Salvador murder rate drops to 1.9 per 100,000',
        source: 'Bloomberg',
        link: 'https://www.bloomberg.com/news/articles/2024-02-04/el-salvador-s-crime-crackdown-pushes-bukele-toward-a-second-term',
        pubDate: '2024-02-04'
      }
    ]
  },
  {
    name: 'Estonia',
    lat: 58.5953,
    lng: 25.0136,
    summary: `Estonia in November 2025 is Europe's frontline state against Russian aggression, both literally and figuratively. When Russia placed Prime Minister Kaja Kallas on its criminal wanted list in February 2024—making her the first sitting head of government on that list since the Ukraine invasion—it wasn't just symbolic harassment. It was recognition that Kallas represents everything Putin's Russia fears: a former Soviet republic that's thriving in the democratic West, unapologetically supporting Ukraine, and calling out Russian imperialism without diplomatic hedging.

The proximate cause for Russia's warrant was Estonia's removal of Soviet-era World War II monuments. But that's pretext. The real reason is that Kallas has made Estonia the most hawkish voice on Russia in NATO and the EU. Estonia has provided military aid to Ukraine at the highest per capita rate of any country in the world. Kallas sent lethal weapons to Kyiv in December 2021, before the February 2022 invasion, when many Western leaders were still dithering. She's been consistently, uncomfortably right about Putin's intentions while others clung to illusions about negotiation or détente.

What makes Estonian politics so instructive is how living next to an aggressive authoritarian power concentrates the mind wonderfully. Estonia's chief of intelligence warned in early 2024 that Russia is "anticipating a possible conflict with NATO within the next decade," based on Russian military buildups along the border with Baltic states and Finland. This isn't abstract geopolitical theorizing for Estonians; it's survival. Russian forces doubling along your border isn't a hypothetical threat—it's an imminent danger.

Kallas's response has been to push for maximum support for Ukraine and maximum European defense spending. Her argument is crystalline: if Russia wins in Ukraine, the Baltic states are next. Therefore, Ukraine's victory is Estonia's existential interest. This isn't altruism; it's cold strategic calculation. Every dollar spent arming Ukraine is a dollar that prevents war on Estonian soil. Every Russian battalion destroyed in Donbas is one fewer threatening Narva.

The "shadow war" that Kallas has warned about isn't paranoia. Estonia has documented Russian sabotage attempts, electronic warfare, cyberattacks, and espionage operations. GPS jamming, infrastructure probes, disinformation campaigns—the full toolkit of hybrid warfare. Russia is testing NATO's defenses and cohesion, seeing where fault lines exist. Estonia, as a small Baltic state with a Russian-speaking minority (about 25% of the population), is a prime target.

What's remarkable is how Estonia has responded. They've invested heavily in cyber defense—unsurprising for a digital-first society that suffered massive Russian cyberattacks in 2007. They've maintained defense spending above NATO's 2% GDP target. They've cultivated near-total consensus on foreign and security policy across the political spectrum. Estonian politics has domestic left-right divisions on economic and social policy, but on Russia and NATO, there's near unanimity. That's what living under existential threat produces.

Kallas's appointment as the EU's High Representative for Foreign Affairs and Security Policy in 2024 is hugely significant. She's the first leader from a small EU state to get this position, which tells you how seriously the EU is taking the Russian threat. It also means Estonia punches far above its weight geopolitically. A country of 1.3 million people now has one of its leaders setting EU foreign policy. That's extraordinary and speaks to Kallas's political skill and the credibility she's built on Russia issues.

For Estonia domestically, Kallas's government has managed the delicate balance of maintaining social cohesion while preparing for potential conflict. The Russian-speaking minority—many of whom hold Russian citizenship—could be a fifth column in a crisis, or they could be integrated citizens who reject Putin's narrative. The government has invested in integration, media literacy, and building Estonian identity that's civic rather than ethnic. It's working imperfectly but better than skeptics predicted.

The economic context matters too. Estonia has one of Europe's most digital economies, with high growth rates and strong public finances. This isn't a failing state trying to rally nationalism to distract from domestic problems. It's a successful small country that's genuinely threatened by a revanchist neighbor. That credibility—we're doing well, and we're still worried about Russia—makes Estonia's warnings carry weight that they might not otherwise.

Looking ahead, the question is whether Estonia's hawkishness becomes mainstream European policy or remains a Baltic/Nordic outlier. Germany, France, and Italy have been much more cautious about confronting Russia. If Trump returns to the White House and U.S. commitment to NATO wavers, Estonia's security situation becomes much more precarious. Kallas and Baltic leaders have been quietly preparing for this scenario—deepening Nordic defense cooperation, building ammunition production capacity, stockpiling supplies.

The nightmare scenario for Estonia is a Russian attack on NATO territory—likely a "little green men" hybrid operation in the Baltics—that tests Article 5 collective defense. Would NATO actually go to war to defend Estonia? Estonian planners can't take that for granted, which is why they've built one of Europe's most credible territorial defense forces. The Estonian Defense League has 25,000 volunteers—that's nearly 2% of the population trained and organized for guerrilla resistance.

Estonian politics in 2026 will remain dominated by the Russia question. Domestic issues—taxes, healthcare, education—matter, but they're secondary to security. Kallas's eventual departure to Brussels creates a succession question, but whoever leads Estonia next will maintain the hawkish consensus. Russia has ensured that by being exactly the threat Estonian leaders warn about. In a perverse way, Putin has strengthened Estonian democracy and national cohesion by providing such a clear external enemy. Estonia knows who it is (a Western democracy), who its friends are (NATO, EU), and who threatens it (Russia). That clarity is unusual in modern politics and makes for remarkably coherent policy, even if the underlying situation is terrifying.`,
    issues: [
      'Russia Border Militarization',
      'Kaja Kallas on Russian Wanted List',
      'Hybrid Warfare and Sabotage',
      'Russian-Speaking Minority Integration',
      'NATO Article 5 Deterrence'
    ],
    topStories: [
      {
        title: 'Russia places Estonian PM Kaja Kallas on criminal wanted list',
        source: 'CBC News',
        link: 'https://www.cbc.ca/news/world/russia-kallas-watch-list-1.7113384',
        pubDate: '2024-02-13'
      },
      {
        title: 'Estonia intelligence warns Russia planning NATO conflict within decade',
        source: 'Semafor',
        link: 'https://www.semafor.com/article/02/13/2024/russia-puts-estonian-prime-minister-on-wanted-list',
        pubDate: '2024-02-15'
      }
    ]
  },
  {
    name: 'Ethiopia',
    lat: 9.1450,
    lng: 40.4897,
    summary: `Ethiopian politics in November 2025 is a study in how a country can hold elections and claim democratic legitimacy while teetering on the edge of violent fragmentation. Prime Minister Abiy Ahmed, who won the Nobel Peace Prize in 2019 for ending the war with Eritrea, now presides over a country wracked by internal conflicts, ethnic violence, and the very real prospect of state collapse. The legislative and regional elections held in June 2024, which African Union observers called "peaceful and credible," occurred in a country where large parts of Tigray, Amhara, and Oromia regions are beyond government control or remain conflict zones.

Let's start with Tigray, where the catastrophic war from 2020-2022 killed hundreds of thousands and created famine conditions. The peace deal signed in November 2022 was supposed to end that horror. Instead, we're watching the Tigray People's Liberation Front (TPLF) fracture into competing factions. Getachew Reda, the interim regional administration president, is fighting Debretsion Gebremichael, the TPLF president, for control. In early 2025, TPLF-aligned forces seized key areas, threatening to reignite full conflict. The February 10 election board deadline for the TPLF to convene a general assembly only intensified tensions.

This isn't just political infighting; it's about whether Tigray's traumatized population faces another round of war. The broader context matters: Tigray hasn't been disarmed fully, federal forces haven't withdrawn completely, and reconstruction hasn't happened meaningfully. The peace deal was a ceasefire, not reconciliation. When the political structure holding that ceasefire together fractures, you get renewed violence.

The Oromia conflict presents different but equally troubling dynamics. The Oromo Liberation Army (OLA) has fought Abiy's government for years. In December 2024, a faction led by Sanyi Nagasa signed a peace agreement with the government, which should be good news. Except the OLA isn't a unified force—other factions continue fighting. Meanwhile, Oromo civilians face pressure from both sides: the government suspects them of supporting OLA, and OLA accuses them of collaboration if they don't. Oromia, Ethiopia's largest region, remains a low-intensity war zone.

Then there's Amhara, where conflict has escalated dramatically. Amhara militias—Fano fighters—have battled federal forces over issues including regional autonomy and Amhara nationalism. The fighting has caused massive displacement and credible allegations of atrocity crimes by both sides. The Amhara were key supporters of Abiy during the Tigray war; now they're fighting his government. That's how quickly Ethiopian political alignments shift.

Abiy's political position is simultaneously strong and precarious. His Prosperity Party won a parliamentary majority in 2021 elections (reaffirmed in 2024), giving him a democratic mandate. But that mandate is contested by political actors who were excluded or didn't participate. When elections don't include major opposition groups—either because they're barred, boycott, or can't campaign due to security—the legitimacy is hollow.

The crackdown on opposition has intensified. In February 2024, authorities arrested at least five prominent political figures under state of emergency provisions. Members of opposition parties face restrictions on assembly, harassment, and detention. Freedom House rates Ethiopia "Not Free," and the 2024 report documents systematic repression. Abiy has built an increasingly authoritarian system where political opposition exists on paper but is strangled in practice.

Abiy's ethnic politics are particularly contentious. Critics accuse him of Oromo-centric governance, favoring his ethnic group at the expense of others. In a country with over 80 ethnic groups and a history of ethnic federalism that both empowers groups and entrenches divisions, this is political dynamite. The shift from Tigray-led dominance (under TPLF rule until 2018) to Oromo-led dominance (under Abiy) has created backlash from Amhara elites and sustained Tigrayan resistance.

Foreign policy adds another layer. Abiy's appointment of Taye Atske Selassie as president in October 2024, replacing Sahle-Work Zewde (the first female president), signals continuity in foreign affairs—Taye was foreign minister. But Ethiopia's regional relationships are fraught. The Grand Renaissance Dam dispute with Egypt simmers without resolution. Relations with Eritrea have cooled after initial rapprochement. Tensions with Kenya and Sudan over various issues complicate regional diplomacy.

The humanitarian situation is catastrophic and politically destabilizing. Millions displaced, food insecurity widespread, access to conflict zones restricted for aid agencies. The international community's attention has waned since the peak of Tigray crisis, but the humanitarian needs haven't. This creates resentment—Ethiopians feel the world cared briefly and moved on—while the suffering continues.

What's Abiy's endgame? He's trying to consolidate a centralized state that subordinates ethnic federalism to national unity. That's why he created the Prosperity Party, merging the ethnic-based coalition parties into one national party. It's state-building through force and political engineering. The problem is that Ethiopia's diversity and history of ethnic-based politics don't disappear because Abiy wants a different system. You can't impose centralization on a federal system by fiat without triggering exactly the kind of resistance we're seeing.

The succession question is interesting. There's no obvious alternative to Abiy. The opposition is fragmented, regional parties are weak nationally, and the military—while powerful—hasn't shown inclination to intervene. Abiy could rule for years, accumulating power and crushing dissent, until either the conflicts overwhelm the state's capacity or he's challenged from within his coalition.

The most likely scenario for 2026 is continued low-intensity conflicts in multiple regions, sporadic atrocities, massive displacement, political repression, and a government that claims democratic legitimacy through elections while governing through emergency powers and military force. Ethiopia doesn't collapse suddenly; it fragments gradually, with the central government controlling some areas while others slip into warlordism or rebel control. That's not state failure in the dramatic sense—it's state weakness that becomes permanent. And predicting when that tips into complete collapse is impossible. What's clear is that Abiy's Peace Prize looks increasingly like a tragic irony, and Ethiopia's political trajectory is toward more conflict, not less.`,
    issues: [
      'TPLF Factional Conflict in Tigray',
      'Oromia OLA Insurgency',
      'Amhara Fano Rebellion',
      'Political Opposition Crackdown',
      'Ethnic Federalism vs. Centralization'
    ],
    topStories: [
      {
        title: 'TPLF tensions escalate threatening renewed Tigray conflict',
        source: 'ACLED',
        link: 'https://acleddata.com/update/ethiopia-situation-update-5-february-2025',
        pubDate: '2025-02-05'
      },
      {
        title: 'OLA faction signs peace deal with Ethiopian government',
        source: 'BTI Project',
        link: 'https://bti-project.org/en/reports/country-report/ETH',
        pubDate: '2024-12-01'
      }
    ]
  },
  {
    name: 'Fiji',
    lat: -17.7134,
    lng: 178.0650,
    summary: `Fiji in November 2025 is experiencing something remarkable: a democratic government that came to power through peaceful transfer and has survived longer than any previous post-coup Fijian administration. When Sitiveni Rabuka's coalition government crossed the one-year mark on January 1, 2024, it was genuinely historic for a country where democracy has been repeatedly interrupted by military coups—including two that Rabuka himself led in 1987.

The December 2022 election that brought Rabuka to power ended 16 years of Frank Bainimarama's rule. The arithmetic was tight: Bainimarama's FijiFirst won 26 seats, the opposition coalition (Rabuka's People's Alliance and National Federation Party) won 26, and SODELPA won 3. SODELPA joined the opposition to form government, and Rabuka became prime minister. This coalition mathematics means Rabuka governs on a knife's edge—he needs every member present for crucial votes, and defections could bring down the government instantly.

What's Rabuka done with this narrow mandate? He's pursued an ambitious reform agenda that's both democratic consolidation and score-settling. The repeal of the Media Industry Development Act restored press freedom that Bainimarama had curtailed. The reinstatement of the Great Council of Chiefs—abolished by Bainimarama in 2012—was symbolically huge, restoring indigenous Fijian traditional authority structures. The establishment of a Truth and Reconciliation Commission promises (or threatens, depending on perspective) to examine Fiji's coup-plagued history and Bainimarama's 16 years in power.

The pursuit of Bainimarama personally has been aggressive. Within two months of losing power, he was suspended from parliament for three years, charged with abuse of office, and by May 2024, sentenced to a year in prison. Now, you can argue Bainimarama committed crimes while in office—he probably did. But prosecuting your predecessor immediately after defeating him electorally looks like victor's justice, especially in Fiji's context of coup and counter-coup. It sets a precedent that losing power means facing prison, which doesn't incentivize peaceful transfers of power.

The constitutional review process that Rabuka has initiated is the most consequential political question facing Fiji. The 2013 Constitution was Bainimarama's document, designed to entrench his power and marginalize traditional indigenous structures. Rabuka wants comprehensive reform—electoral system changes, restoring indigenous rights, restructuring government institutions. The Electoral Reform Commission, chaired by former Chief Justice Daniel Fatiaki, is reviewing everything. This could strengthen Fijian democracy or create new imbalances that trigger future instability.

The anti-corruption reform plan is where things get concerning. Rabuka wants to integrate FICAC (the Independent Commission Against Corruption) into the Fiji Police Force. This would end FICAC as a fully independent body. The stated reason is efficiency and coordination. The unstated reason might be political control. An independent anti-corruption body can investigate anyone, including the government. A police-integrated anti-corruption section answers to the government. That's a recipe for selective prosecution and corruption going unchecked.

Foreign policy has seen a notable recalibration. Bainimarama pivoted Fiji toward China, accepting significant Chinese investment and diplomatic support. Rabuka has shifted back toward traditional Western partners—Australia, New Zealand, the United States. But his August 2024 10-day visit to China, where he told Xi Jinping that Fiji would continue close cooperation, shows he's hedging. Fiji can't afford to alienate either Washington or Beijing, so Rabuka walks a tightrope, maintaining relationships with both while leaning slightly West.

The apology to King Charles III in May 2024 for the 1987 coup that ended the Fijian monarchy was personally significant for Rabuka—he led that coup. At 75, Rabuka is in his political twilight, and there's a sense he's trying to reconcile his complicated legacy. He overthrew democracy twice, then became the democratic opposition leader, and now governs democratically. That transformation is politically fascinating and morally ambiguous.

The stability question looms over everything. Fiji has had four military coups since independence in 1970. The military, led by Commander Ro Jone Kalouniwai, has stayed in barracks under Rabuka, but institutional memories are long. If Rabuka's government collapses—through coalition breakdown, policy failures, or economic crisis—would the military intervene again? The precedent is certainly there.

What's working in favor of stability: Bainimarama is in prison, not leading opposition. The military hasn't shown inclination to intervene. The economy is recovering post-COVID, with tourism rebounding. Regional partners (Australia, New Zealand) strongly support the democratic government and would oppose any coup. What works against stability: the coalition is fragile, constitutional reform could trigger backlash, and Fiji's political culture hasn't fully internalized democratic norms after decades of coups.

The 2026 trajectory depends largely on the constitutional reform process. If Rabuka manages to build consensus around balanced reforms that address legitimate grievances without creating new injustices, Fiji could emerge with stronger democratic institutions. If the reforms become a power grab or ethnic favoritism, opposition intensifies and instability returns. The electoral system review is particularly sensitive—changing how votes translate to seats can advantage or disadvantage communities and parties.

What Fiji needs is boring politics—competent administration, incremental reform, economic growth, and time for democratic norms to take root. What Fiji has is high-stakes constitutional reform led by a former coup leader governing on a one-seat majority while prosecuting his authoritarian predecessor. That's not boring; that's a political tightrope act. The optimistic scenario is that Rabuka successfully navigates these challenges, his government serves a full term, and the 2026 election produces another peaceful transfer of power, further consolidating democracy. The pessimistic scenario is coalition collapse, political crisis, and the military deciding they need to "restore stability" again. Given Fiji's history, betting against the optimistic scenario feels wise, but hoping for it feels necessary.`,
    issues: [
      'Constitutional Reform Process',
      'Coalition Government Fragility',
      'FICAC Independence Concerns',
      'Bainimarama Prosecution and Reconciliation',
      'China-West Foreign Policy Balancing'
    ],
    topStories: [
      {
        title: 'Rabuka government exceeds one year, longest peaceful transfer in Fiji history',
        source: 'East Asia Forum',
        link: 'https://eastasiaforum.org/2024/01/16/fijis-tenuous-grip-on-political-stability/',
        pubDate: '2024-01-16'
      },
      {
        title: 'Frank Bainimarama sentenced to one year in prison',
        source: 'Freedom House',
        link: 'https://freedomhouse.org/country/fiji/freedom-world/2024',
        pubDate: '2024-05-15'
      }
    ]
  },
  {
    name: 'Finland',
    lat: 61.9241,
    lng: 25.7482,
    summary: `Finland's political transformation in 2023-2024 is one of the most consequential in Europe, even if it happened with characteristic Finnish quietness. When Finland joined NATO in April 2023, ending 75 years of military non-alignment, it fundamentally redefined Finnish identity and security posture. When Sweden followed into NATO in 2024, completing Nordic NATO membership, it created a unified Nordic defense bloc that would have been unthinkable a few years ago. And when Prime Minister Petteri Orpo's center-right government took office in June 2023, it marked a notable rightward shift in Finnish governance.

Orpo's National Coalition Party (KOK) won the April 2023 parliamentary elections, and he formed a coalition that includes the far-right Finns Party. That coalition partnership raised eyebrows in Brussels—the Finns Party has Euroskeptic, anti-immigration, and nationalist elements that make European liberals uncomfortable. But in Finland, it's pragmatic coalition-building. The Finns Party got ministries, policy concessions on immigration, and a seat at the table. In exchange, they support Orpo's economic agenda and Russia policy.

The Russia question dominates Finnish politics in ways that would be hard to overstate. Putin's invasion of Ukraine proved that Finnish realists were right—Russia is an aggressive revanchist power, and Nordic neutrality is a luxury Finland can't afford. The NATO application was approved by parliament with overwhelming cross-party support and public backing. That's Finnish political consensus in action: when national security is at stake, partisan divisions disappear.

But NATO membership is just the start. Finland is militarizing in earnest. Defense spending is increasing. The Finnish Defense Forces, already robust with conscription and 900,000 trained reserves, are integrating into NATO structures. Finland shares an 1,300-kilometer border with Russia—now NATO's longest border with Russia. That geography makes Finland simultaneously a critical alliance asset (strong military, strategic position) and a potential flashpoint (Russian fears of NATO encirclement).

The hybrid warfare that Orpo warned about in his December 2024 New Year's message isn't hypothetical. Russia has weaponized migration, pushing asylum seekers to Finnish border crossings to create pressure. There have been GPS jamming incidents affecting aviation. Cyberattacks targeting Finnish infrastructure. Disinformation campaigns. The full toolkit of below-the-threshold aggression designed to harass without triggering Article 5. Finland's response has been firm: border closures, enhanced security, public education on disinformation, and deepened intelligence sharing with allies.

The relationship with Sweden is particularly important. Orpo's September 2024 joint government session with Sweden in Stockholm signals deepening bilateral cooperation. With all Nordic countries now in NATO—Norway and Denmark were founders, Iceland joined with no military, Finland and Sweden are recent additions—Nordic defense cooperation has intensified. Joint exercises, shared procurement, intelligence cooperation, and coordinated Russia policy. This is a formalized Nordic security bloc within NATO.

Domestically, Orpo faces the typical challenges of center-right governance: balancing fiscal responsibility with welfare state expectations. Finland's economy has struggled with the end of cheap Russian energy, inflation, and sluggish European demand for exports. The government's austerity measures—cuts to public spending, pension reforms—are politically unpopular, especially with public sector unions. But Orpo's coalition has the parliamentary numbers to push through tough reforms.

The immigration debate is where the Finns Party's influence shows most clearly. Finland has tightened immigration policies, made asylum more difficult, and emphasized integration requirements for those who remain. In the broader European context, this is fairly standard center-right immigration policy. But for Finland, which historically had relatively liberal immigration policies and a strong humanitarian tradition, it's a shift. The political calculation is that controlling immigration reduces far-right appeal, even if it requires partnering with far-right parties. Whether that works long-term is an open question.

The EU relationship is pragmatic. Finland isn't a Euroskeptic outlier like Hungary or a frequent dissenter like Poland used to be. But Finnish politics has always had a realistic streak about Brussels. They'll cooperate when it serves Finnish interests—especially on Russia policy, where Finland is now a leading voice—and push back when it doesn't. Orpo's government isn't interested in EU federalist visions; they want effective cooperation on defense, energy, and migration.

Energy security has become inseparable from national security. The end of Russian energy imports forced rapid diversification. Finland has invested heavily in renewables, interconnections with Sweden and Estonia, LNG terminals, and even reconsidered nuclear. The goal is energy independence from Russia, which is both economic and strategic. You can't have national security if your adversary controls your energy supply.

Climate policy illustrates the tensions in Orpo's coalition. The center-right wants market-based climate solutions—carbon pricing, green tech investment. The Finns Party is skeptical of aggressive climate targets if they hurt Finnish industry or living standards. The result is climate policy that's ambitious by global standards but more cautious than the previous left-leaning government. It's political compromise in action.

Looking ahead to 2026, Finnish politics will remain centered on Russia. As long as the Ukraine war continues and Russian aggression threatens European security, Finnish voters will prioritize defense and NATO integration. Domestic policy debates about welfare, taxation, and immigration matter, but they're secondary to the existential question of Russian threat. Orpo's coalition will likely hold together through the full term because the alternatives—either a leftist government or a Finns Party-led coalition—are less palatable to centrist voters.

The municipal elections will test the government's popularity, and if austerity measures bite too hard, there could be backlash. But structural reforms are easier to implement when you can point to security threats and fiscal constraints as justification. Finns are a pragmatic people; they'll accept difficult policies if they believe they're necessary.

The ultimate question is whether Finland's transformation—from neutral bridge between East and West to active NATO member aligned against Russia—proves wise. The bet is that NATO membership enhances security through collective defense and deters Russian aggression. The risk is that it makes Finland a target. Putin's Russia sees NATO expansion as existential threat, and Finland's accession was a strategic defeat for Moscow. Whether that leads to Russian acceptance, escalation, or long-term Cold War-style confrontation will define Finnish security for decades. Orpo's job is to prepare Finland for all scenarios while hoping the deterrent works. So far, it has. Let's hope that continues.`,
    issues: [
      'NATO Integration and Defense Buildup',
      'Russian Hybrid Warfare',
      'Coalition Management with Far-Right',
      'Energy Independence from Russia',
      'Immigration Policy Tightening'
    ],
    topStories: [
      {
        title: 'Finland joins NATO, ending 75 years of military non-alignment',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/news/2023/4/1/finland-having-cleared-last-nato-hurdle-heads-to-elections',
        pubDate: '2023-04-04'
      },
      {
        title: 'PM Orpo warns Russia waging shadow war against Europe',
        source: 'Finnish Government',
        link: 'https://valtioneuvosto.fi/en/-/prime-minister-petteri-orpo-s-new-year-s-message-31-december-2024-1',
        pubDate: '2024-12-31'
      }
    ]
  }
]

async function main() {
  console.log('🚀 Adding Politics write-ups for Batch 3 (13 countries)\n')

  for (const country of COUNTRIES) {
    try {
      console.log(`\n${'='.repeat(80)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(80))

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
          topStories: JSON.stringify(country.topStories),
          storyCount: country.topStories.length,
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
          topStories: JSON.stringify(country.topStories),
          storyCount: country.topStories.length,
        },
      })

      console.log(`✅ ${country.name} Politics write-up added`)
      console.log(`   - Summary length: ${country.summary.length} characters`)
      console.log(`   - Issues: ${country.issues.length}`)
      console.log(`   - Top stories: ${country.topStories.length}`)
    } catch (error) {
      console.error(`❌ Error adding ${country.name}:`, error)
    }
  }

  console.log('\n✅ All 13 Politics write-ups added to database!')
  console.log('\nCountries completed:')
  COUNTRIES.forEach((c, i) => console.log(`${i + 1}. ${c.name}`))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
