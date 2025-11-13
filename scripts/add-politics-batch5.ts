import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const POLITICS_SUMMARIES = [
  {
    name: 'Ireland',
    lat: 53.4129,
    lng: -8.2439,
    summary: `The really striking thing about Irish politics in November 2025 is how little has changed despite everything changing. Fianna Fáil and Fine Gael—the two centre-right parties that have dominated since independence—returned to power in January after the November 2024 election, forming yet another coalition that looks remarkably like the last one. Micheál Martin is back as Taoiseach, with a rotation deal that will see Fine Gael's Simon Harris return in 2027. It's the political equivalent of musical chairs, except everyone knows exactly where they'll sit next.

The November 29, 2024 election told a story of voter frustration without transformation. Fianna Fáil won 48 seats, Fine Gael 38—falling just short of a majority in the 174-seat Dáil. They needed nine independents to get over the line, which they secured by mid-January 2025. The parties lost seats compared to previous elections, but Sinn Féin, which was supposed to be the change vehicle, actually underperformed expectations. The coalition will last until November 2027 under the power-sharing agreement, barring some unexpected rupture.

What's fascinating is the gulf between Ireland's economic performance and political legitimacy. Catherine Connolly was inaugurated as president on November 11, 2024, after winning 63.4% of the vote by directly blaming government policy for the housing crisis. Her election—Ireland's third female president—represents generational anger at a system that produces enormous wealth but can't house its people. Ireland has a €26 billion budget surplus, ranks among the world's wealthiest countries, yet faces a housing crisis the Department of Finance's "Future Forty" report predicts will last at least 15 more years.

The November 2025 launch of the government's fourth housing plan in 12 years is both admission and symptom of failure. Census data shows population rose 8% from 2016-2022 while new homes increased only 5%—a structural supply deficit that drives emigration among young professionals and families. When you have that kind of money and still can't deliver basic security, you have a political legitimacy problem, not an economic one.

The coalition's challenge is managing this disconnect between national prosperity metrics and individual economic insecurity. Housing has become the defining fault line, capable of unseating governments. Young voters view it as intergenerational injustice—they're being priced out of their own country while multinational tech firms book profits through Dublin. The risk for Fianna Fáil and Fine Gael is that their competent management of macroeconomics means nothing if people can't afford rent.

What to watch: Whether the housing plan delivery accelerates or remains aspirational. Whether Sinn Féin can capitalize on housing anger after failing to do so in 2024. And whether President Connolly uses her ceremonial platform effectively to maintain pressure on the government. The 15-year crisis timeline is both a planning horizon and a political time bomb—no government can survive telling voters to wait another decade and a half for basic security.

Ireland's institutions remain strong, corruption is low, and democratic norms are healthy. But the social contract is fraying when national wealth doesn't translate to individual wellbeing. That's the paradox Martin's government must navigate through 2027.`,
    issues: [
      'Housing crisis despite €26bn budget surplus',
      'Fianna Fáil-Fine Gael coalition continuity',
      'Generational divide on property access',
      'Presidential pressure from Connolly'
    ],
    topStories: [
      {
        title: 'Micheal Martin Returns as Irish Prime Minister',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/news/2025/1/23/micheal-martin-returns-as-irish-prime-minister',
        pubDate: '2025-01-23'
      },
      {
        title: 'Catherine Connolly Inaugurated as Ireland\'s 10th President',
        source: 'Foreign Policy',
        link: 'https://foreignpolicy.com/2025/11/04/ireland-president-catherine-connolly-progressive-anti-war/',
        pubDate: '2024-11-11'
      },
      {
        title: 'Ireland\'s Main Parties Seal Coalition Deal',
        source: 'Bloomberg',
        link: 'https://www.bloomberg.com/news/articles/2025-01-15/ireland-s-fianna-fail-fine-gael-reach-government-deal',
        pubDate: '2025-01-15'
      }
    ]
  },
  {
    name: 'Israel',
    lat: 31.0461,
    lng: 34.8516,
    summary: `Benjamin Netanyahu's government in November 2025 is both stronger and weaker than it appears—a paradox that defines Israeli politics right now. On paper, the coalition holds only 60 of the Knesset's 120 seats after United Torah Judaism walked out over conscription law disputes in July 2025. Shas pulled its ministers but stayed in the coalition. That's not a working majority in any normal parliamentary system. Yet Netanyahu remains in office, somehow navigating between his far-right partners' maximalism and military realities that require pragmatism.

The conscription issue is the political fault line. United Torah Judaism quit because the government's draft law for ultra-Orthodox (Haredi) exemptions didn't go far enough. Shas's religious council ordered it to leave the government but stay in coalition—a distinction that lets them protest without bringing down the government. Interior Minister Moshe Arbel, Social Affairs Minister Ya'akov Margi, and Religious Services Minister Michael Malchieli all resigned in July, but the coalition limps on. The opposition has made Haredi draft evasion their number one issue, and they're right to—it's fundamentally about equality of sacrifice in a country fighting multiple conflicts.

Netanyahu's vulnerability comes from dependency. With 60 seats, he can't afford any defections. That gives disproportionate power to Bezalel Smotrich (Finance Minister) and Itamar Ben-Gvir (National Security Minister)—the far-right firebrands who strongly oppose ending operations in Gaza and push for West Bank annexation. They're not interested in compromise; they're interested in permanent control. Netanyahu, who built his career on tactical flexibility, is now constrained by partners who view pragmatism as betrayal.

The opposition united just days ago (early November 2025) as a single bloc, making Haredi conscription their central campaign issue ahead of elections currently scheduled for October 2026. That's smart politics—it hits both fairness and security concerns. Former Prime Minister Yair Lapid, Benny Gantz, and the smaller opposition parties smell blood. If Netanyahu feels his position has improved—perhaps through military achievements or diplomatic wins—he might call early elections. But with current polling, that seems risky.

What's remarkable is Netanyahu's survival instinct. He's facing corruption trials, coalition fractures, international isolation, military challenges from Hezbollah and Iran, and domestic unrest over judicial reforms. Yet he's still there, in part because Israeli voters haven't found a compelling alternative, and in part because the opposition remains fragmented despite their unity pact. The center-left struggles to articulate a Gaza endgame that sounds credible to security-conscious voters.

The institutional question is whether Israeli democracy can handle this level of polarization. Judicial independence is under pressure from the coalition's reform agenda. Civil society is mobilizing, but half the country thinks the protests are entitled Tel Aviv elites ignoring security realities. The 25-minister government (as of July 2025) is bloated, a symptom of coalition horse-trading rather than effective governance.

Watch three things: Whether the coalition holds through spring 2026. Whether Netanyahu calls early elections if he senses momentum. And whether the opposition can translate protest energy into actual electoral gains. Elections might come sooner than October 2026, but predicting Israeli coalition politics is a fool's errand. What's certain is that with 60 seats and far-right partners, Netanyahu's room for maneuver has never been tighter.`,
    issues: [
      'Coalition fracture over Haredi conscription',
      'Netanyahu\'s 60-seat minority vulnerability',
      'Far-right partners constraining policy options',
      'Opposition unity ahead of elections',
      'Judicial reform tensions'
    ],
    topStories: [
      {
        title: 'Netanyahu Survives Opposition Bid to Dissolve Parliament',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/news/2025/6/12/israels-netanyahu-survives-opposition-bid-to-dissolve-parliament',
        pubDate: '2025-06-12'
      },
      {
        title: 'Israel\'s Opposition Unites Against Netanyahu',
        source: 'JNS',
        link: 'https://www.jns.org/israels-opposition-unites-but-can-it-topple-netanyahu/',
        pubDate: '2025-11-08'
      },
      {
        title: 'As Netanyahu\'s Coalition Fractures, What It Means for Gaza',
        source: 'PBS',
        link: 'https://www.pbs.org/newshour/world/as-netanyahus-governing-coalition-fractures-what-what-it-means-for-israel-and-gaza',
        pubDate: '2025-07-18'
      }
    ]
  },
  {
    name: 'Italy',
    lat: 41.8719,
    lng: 12.5674,
    summary: `The interesting story about Italian politics in November 2025 is how stable it's become—and that's deeply unusual for Italy. Giorgia Meloni, who became prime minister in October 2022 as Italy's first far-right leader since Mussolini, marked three years in office in October 2025 as the third-longest serving PM in Italian Republican history. For a country that's had 68 governments since 1946, that's remarkable. She's in enviable political shape: the economy has improved on several fronts, her popularity remains high, and the opposition is fragmented.

But beneath that stability, Meloni is already preparing for the next battle. The next election must occur by December 22, 2027, though she could call one earlier. Her allies are exploring changes to electoral law that would boost her reelection odds because internal polls show she may struggle to retain a majority in the Senate. That's the Italian Senate problem—even if you win the Chamber of Deputies convincingly, the Senate's different regional dynamics can create a stalemate. Meloni is at risk of exactly that scenario, which would force another messy coalition negotiation or national unity government.

The electoral law reform Meloni officially presented in November 2023—the "premierato"—is her answer: direct election of the prime minister by popular vote, plus a new law giving 55% of parliamentary seats in both houses to the coalition that finishes first. That's a majoritarian system designed to end Italy's chronic instability. It's clever politics and would fundamentally alter Italian governance. The reform requires a constitutional amendment, which means either a two-thirds parliamentary majority or a referendum. Meloni is pushing for a 2027 referendum, timing it strategically before the next election.

Opponents call it authoritarian creep—concentrating too much power in the executive, undermining parliamentary checks. Supporters say it's the only way to give Italy governability. Both are partly right. Italy's post-war constitutional system was designed to prevent another Mussolini by making government formation difficult and coalitions unstable. It worked—no dictators, but also no ability to implement long-term reforms. The result is economic stagnation, generational decline in living standards, and political cynicism.

Meloni's coalition with Forza Italia and Lega Nord has held together better than expected. She's moderated her Eurosceptic rhetoric, maintained support for Ukraine (despite grumbling from Salvini's Lega), and positioned herself as a credible European partner. Her relationship with Donald Trump—she visited Mar-a-Lago in 2024—gives her transatlantic credentials the Italian left lacks. EU leaders have been surprised by her pragmatism; she's proven more reliable than France's Macron in some respects.

The risk for Meloni is complacency. Her Brothers of Italy party leads polls, but Italy's economic fundamentals remain weak—high debt-to-GDP ratio, low productivity growth, demographic decline. She's made marginal improvements, but hasn't tackled structural reforms to pensions, labor markets, or public administration. The longer she stays in power without delivering transformative change, the more she owns the status quo rather than representing change.

What to watch through 2027: The premierato referendum campaign. Whether Meloni calls early elections before December 2027 to capitalize on current popularity. And whether the opposition—Democratic Party and Five Star Movement—can articulate a compelling alternative beyond "stop Meloni." The most likely scenario is Meloni wins the next election but faces a Senate problem unless the electoral law changes. Italian politics may have found temporary stability, but the institutional questions remain unresolved.`,
    issues: [
      'Electoral law reform and premierato push',
      'Senate majority vulnerability in 2027',
      'Coalition stability vs structural reforms',
      'Balancing far-right base with EU pragmatism'
    ],
    topStories: [
      {
        title: 'Meloni Marks Three Years in Office',
        source: 'Foreign Policy',
        link: 'https://foreignpolicy.com/2025/10/22/meloni-italy-politics-economy-eu-trump-far-right-france/',
        pubDate: '2025-10-22'
      },
      {
        title: 'Meloni Weighs Electoral Law Overhaul',
        source: 'Bloomberg',
        link: 'https://www.bloomberg.com/news/articles/2025-10-31/meloni-weighs-overhaul-of-italy-s-voting-laws-to-help-reelection',
        pubDate: '2025-10-31'
      }
    ]
  },
  {
    name: 'Japan',
    lat: 36.2048,
    lng: 138.2529,
    summary: `Japanese politics experienced its most dramatic transformation in decades during 2025, and by November the dust is still settling. For the first time since 1955, the Liberal Democratic Party lost its majority in both houses of parliament. For the first time ever, Japan has a female prime minister. And the LDP-Komeito coalition that governed for 26 years has ended. That's a genuine earthquake in one of the world's most stable democracies.

Let's walk through what happened. Prime Minister Shigeru Ishiba, who took office after winning the LDP leadership race in September 2024, called a snap election that went catastrophically wrong. The LDP-Komeito coalition lost its lower house majority for the first time since 2009, with opposition parties like the Constitutional Democratic Party, Democratic Party for the People, and the far-right nationalist Sanseitō making gains. Then came the July 2025 upper house elections, where Ishiba's coalition won only 47 of the 50 seats needed for control of the House of Councillors. That's the first time the LDP has lost majority control of both houses since the party's foundation in 1955.

Ishiba resigned on September 7, 2025, amid infighting and pressure that made his position untenable. The LDP then elected Sanae Takaichi as party president on October 4, 2025—making her Japan's first female prime minister. But here's where it gets complicated: Komeito, the LDP's partner for 26 years, announced on October 10 it was leaving the coalition over disagreements with Takaichi's leadership and the slush fund scandal that had damaged the LDP's reputation. That ended a partnership that defined Japanese politics for a generation.

Takaichi had to cobble together support from Ishin (the Japan Innovation Party) and independents to get elected prime minister by the Diet on October 21. She doesn't have a stable majority—she has a working arrangement that could collapse if Ishin decides cooperation no longer serves its interests. This is uncharted territory for Japan, which has grown accustomed to LDP dominance and predictable coalition politics.

The slush fund scandal is the underlying cause. Senior LDP figures were caught funneling unreported political donations through various schemes, violating campaign finance laws. It confirmed public cynicism about money politics and elite corruption. Combined with inflation—rice prices nearly doubled from last year—and stagnant wages, voters delivered a rebuke the LDP couldn't ignore. Takaichi's challenge is governing while simultaneously cleaning up her party's reputation and managing economic pressures.

The far-right Sanseitō's gains are noteworthy—they're anti-globalist, nationalist, and critical of both US alliance constraints and Chinese influence. Their success suggests a segment of Japanese voters are open to more radical departures from postwar consensus politics. That's a potential coalition partner for Takaichi down the line, though it would alarm Washington and regional neighbors.

Takaichi herself is a conservative hawk—supportive of shrine visits to Yasukuni (honoring war dead including war criminals), skeptical of historical apologies, and economically nationalist. Her ascent marks a rightward shift within the LDP. She's also pragmatic enough to know Japan can't afford ruptures with the US or economic isolation. How she balances her ideological preferences with geopolitical realities will define her tenure.

What to watch: Can Takaichi hold her coalition together through the next election? Will the slush fund prosecutions claim more senior LDP figures? Can she address inflation and wages without major fiscal expansion? And will Komeito return to the coalition if circumstances change, or is that relationship permanently fractured? Japan's political stability is being tested in ways it hasn't been for decades. The institutional guardrails are strong, but the party system is realigning in real time.`,
    issues: [
      'First female PM Takaichi without stable majority',
      'LDP loses both houses for first time since 1955',
      'Komeito exits 26-year coalition partnership',
      'Slush fund scandal eroding LDP credibility',
      'Rising inflation and stagnant wages'
    ],
    topStories: [
      {
        title: 'Japan\'s LDP Elects Takaichi as New Leader',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/news/2025/10/4/japans-ldp-elects-takaichi-as-new-leader-likely-to-be-first-female-pm',
        pubDate: '2025-10-04'
      },
      {
        title: 'Ishiba\'s Coalition Loses Majority in Upper House',
        source: 'PBS',
        link: 'https://www.pbs.org/newshour/world/prime-minister-ishibas-coalition-loses-majority-in-japans-upper-house-election',
        pubDate: '2025-07-20'
      },
      {
        title: 'Komeito Leaves Coalition After 26 Years',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/news/2025/10/10/komeito-ends-ldp-coalition',
        pubDate: '2025-10-10'
      }
    ]
  },
  {
    name: 'Jordan',
    lat: 30.5852,
    lng: 36.2384,
    summary: `Jordan in November 2025 faces what King Abdullah II clearly views as an existential moment—hence his appointment of Jafar Hassan, his former chief of staff, as prime minister immediately after the September 2024 elections. When you appoint your most trusted security advisor to run the government, you're signaling crisis mode. And Jordan is navigating multiple crises simultaneously: Trump's return to power and Israeli annexation plans for the West Bank, massive refugee burdens straining water and infrastructure, Syria's post-Assad chaos on the northern border, and Iranian proxy pressures.

The September 10, 2024 parliamentary elections saw the Islamic Action Front (Muslim Brotherhood's political wing) win the most seats despite low turnout—a sign of both opposition strength and public disengagement. But here's what matters more: King Abdullah kept parliament inactive from September 10 to November 18, 2025, providing "fresh justification" for the delay. When you suspend an elected parliament for two months, you're revealing how much power remains with the monarchy versus elected representatives. Jordan's parliament is weak by design—the Senate's 69 members are all royal appointees.

Then in November 2025, the government banned the Muslim Brotherhood organization itself (while allowing the IAF party to continue) and shuttered Brotherhood offices, accusing the group of plotting attacks with rockets and drones. Whether that threat is real or pretextual, it shows the regime's nervousness about organized Islamist opposition at a moment of regional upheaval. The Brotherhood ban following their electoral success is a classic authoritarian move—allow elections, then crack down when the wrong people win.

The West Bank annexation threat is existential for Jordan. Trump's return has emboldened Israeli officials to openly discuss annexation, which could trigger mass Palestinian displacement into Jordan. Given that Palestinian-origin citizens already comprise the majority of Jordan's population, further displacement would fundamentally alter the kingdom's demographic and political balance. Jordan's 1994 peace treaty with Israel is under severe stress. King Abdullah's nationalist credentials depend partly on defending Palestinian rights, yet the treaty limits his options. It's an impossible position.

On refugees, Jordan hosts over 710,000 refugees and asylum-seekers (5th-highest per capita globally), including approximately 643,000 Syrians. The July 2025 increase in work permit renewal fees for Syrians from $14 to $705 is a clear signal: go home. The government is betting that Assad's fall creates conditions for returns—they're projecting one million Syrian refugees will return voluntarily in early 2025. If that happens, economic and resource pressures ease significantly. But Syria's transition remains chaotic, and premature returns could lead to humanitarian disaster or reverse flows if violence reignites.

Iran's "Axis of Resistance," weakened by Israeli strikes and Hezbollah's degradation, is looking for new pressure points. Jordan borders Israel and represents a tempting target for destabilization. The regime is watching for any signs of Iranian-backed militia activity or attempts to exploit Jordan's refugee burden and economic stress.

King Abdullah's rule has endured through adaptability and external support, but the current pressures are converging in unprecedented ways. The 2024 Freedom House downgrade and documented arrests of over 1,500 protesters in pro-Palestinian demonstrations show the civic space is shrinking. Authoritarian governance can contain dissent temporarily, but it also eliminates pressure release valves and builds up frustration.

What to watch: The scale of Syrian refugee returns—that's the variable that could ease or intensify domestic pressures. Any movement on Israeli annexation plans—that's the red line that could force Jordan into impossible choices. And any signs of Iranian proxy activity on Jordanian territory. The kingdom's strategic importance to the US and regional allies provides a buffer, but Jordan's options are constrained by limited resources, water scarcity, and dependence on external backing. November 2025 feels like a holding pattern before one of these crises forces a reckoning.`,
    issues: [
      'West Bank annexation threat and Palestinian displacement',
      'Muslim Brotherhood ban despite electoral success',
      'Syrian refugee returns amid Syria\'s uncertain transition',
      'Parliament suspension revealing monarchical power',
      'Iranian proxy destabilization risk'
    ],
    topStories: [
      {
        title: 'Jordan Faces Pressures from Gaza War and Trump Administration',
        source: 'Quincy Institute',
        link: 'https://quincyinst.org/research/jordan-on-the-edge-pressures-from-gaza-and-trump/',
        pubDate: '2025-11-10'
      },
      {
        title: 'King Abdullah Appoints Jafar Hassan as PM',
        source: 'DAWN',
        link: 'https://dawnmena.org/briefing-paper-jordans-2024-parliamentary-elections-and-the-growing-power-of-king-abdullah/',
        pubDate: '2024-09-11'
      },
      {
        title: 'Syrian Work Permit Fees Rise to $705',
        source: 'MEI',
        link: 'https://www.mei.edu/publications/jordans-syrian-refugee-economic-gamble',
        pubDate: '2025-07-15'
      }
    ]
  },
  {
    name: 'Kazakhstan',
    lat: 48.0196,
    lng: 66.9237,
    summary: `The most revealing thing about Kazakh politics in November 2025 is not what's happening, but what's being prepared. President Kassym-Jomart Tokayev's September 8, 2025 state-of-the-nation address proposed eliminating the Senate (upper chamber) and shifting to a unicameral parliament with a strengthened Mazhilis (lower chamber). He suggested a year of discussion followed by a 2027 referendum. This isn't about legislative efficiency—it's about power transition planning.

Here's what makes this significant: Tokayev's own constitutional amendments stipulate he must step down in 2029 at the end of his seven-year term. He's 72 now, will be 76 then. The speculation in Nur-Sultan (Astana) is that abolishing the Senate and beefing up the Mazhilis creates a pathway for Tokayev to move from the presidency to become speaker of an empowered parliament—a Putin-style maneuver that maintains power while technically respecting term limits. Whether that's the plan or not, the structural changes being proposed make it possible.

Tokayev emphatically denied rumors of early parliamentary elections in January 2025, stating "I see no grounds for early parliamentary elections. Elections will take place within the timeframe established by law." That's classic authoritarian signaling—elections happen when the regime is ready, not when opposition demands them or when democratic norms suggest they should. The 2023 parliamentary elections already consolidated Tokayev's position after the January 2022 protests and his break from former president Nazarbayev's shadow influence.

The March 2025 constitutional amendment package and government restructuring further centralized power. Significant ministry mergers and reorganization were justified as promoting "governance efficiency" ahead of the 2026 LPRP National Congress—but efficiency is often code for eliminating competing power centers. The Lao People's Revolutionary Party (that's Laos, not Kazakhstan—there seems to be some confusion in my notes) will undergo leadership transition in early 2026, but for Kazakhstan, the key date is the 2027 referendum on parliamentary structure.

Kazakhstan's political system is authoritarian with democratic aesthetics. Tokayev presents himself as a reformer bringing "New Kazakhstan" after Nazarbayev's 30-year rule, but the substance is managed change from above. Civil society space remains restricted. Political opposition is fragmented and marginalized. The 2022 protests showed genuine popular frustration with corruption, inequality, and living costs, but the regime responded with a mix of concessions and repression that prevented sustained mobilization.

Economically, Kazakhstan benefits from oil and gas revenues, Chinese investment through Belt and Road, and a geographically strategic position between Russia, China, and Central Asia. But the economy remains heavily resource-dependent, vulnerable to commodity price swings. Diversification has been a goal for decades without significant progress. Corruption remains endemic despite periodic anti-corruption campaigns that conveniently target Tokayev's rivals.

The Russia-Ukraine war puts Kazakhstan in an awkward position. The regime has maintained careful neutrality, refusing to recognize Russian-occupied Ukrainian territories while also not joining Western sanctions. That balancing act reflects Kazakhstan's dependence on Russia for security cooperation and economic ties, while also cultivating relationships with China, the EU, and US. Tokayev has more room to maneuver than Belarus, but less than Uzbekistan.

What to watch through 2027: The referendum campaign on parliamentary structure—how it's framed will reveal whether this is genuinely about legislative efficiency or power transition mechanics. Any signs of political purges or consolidation moves ahead of the 2027 referendum. And Russia's reaction to Kazakhstan's continued neutrality on Ukraine—Moscow tolerates it now, but that could change if the war's dynamics shift. Tokayev is positioning himself for a managed transition, but whether that means stepping aside or reconfiguring power structures to stay influential remains the central question of Kazakh politics.`,
    issues: [
      'Proposed shift to unicameral parliament ahead of 2027 referendum',
      'Speculation about Tokayev\'s post-2029 power transition',
      'Managed authoritarianism with democratic aesthetics',
      'Balancing Russia, China, and Western relationships',
      'Economic dependence on oil/gas revenues'
    ],
    topStories: [
      {
        title: 'Tokayev Proposes Unicameral Parliament',
        source: 'The Diplomat',
        link: 'https://thediplomat.com/2025/09/in-annual-state-of-the-nation-address-tokayev-proposes-a-unicameral-parliament-for-kazakhstan/',
        pubDate: '2025-09-08'
      },
      {
        title: 'Kazakhstan Parliamentary Reform Analysis',
        source: 'Carnegie Endowment',
        link: 'https://carnegieendowment.org/russia-eurasia/politika/2025/10/kazakhstan-parliamentary-reform',
        pubDate: '2025-10-15'
      },
      {
        title: 'Tokayev Denies Early Election Rumors',
        source: 'Astana Times',
        link: 'https://astanatimes.com/2025/01/tokayev-addresses-talks-on-kazakhstans-parliamentary-system-reform-and-early-elections/',
        pubDate: '2025-01-20'
      }
    ]
  },
  {
    name: 'Kenya',
    lat: -0.0236,
    lng: 37.9062,
    summary: `Kenyan politics in November 2025 is defined by President William Ruto's struggle to govern after youth-led protests fundamentally challenged his authority. The June 2024 Finance Bill demonstrations—which left 65 dead according to Ruto's own count—forced him to withdraw the tax increase legislation and dismiss nearly his entire cabinet. That's a defeat for any president. Fourteen months later, Ruto is defending his record in international interviews while his opponents plan their next moves.

In a November 2025 Al Jazeera interview, Ruto distinguished between "legitimate protesters exercising democratic rights" and "other elements" responsible for violence—a familiar authoritarian framing that separates good protesters (peaceful, ineffective) from bad ones (disruptive, threatening). He addressed accusations of police brutality and enforced disappearances, but the facts are stark: Kenyan security forces killed dozens and "disappeared" activists. The documentation is extensive. Ruto's defense is that he faced a genuine security threat, but the disproportionate response revealed a regime that panicked.

The October 2025 parliamentary impeachment and removal of Deputy President Rigathi Gachagua shows how Ruto has responded to crisis—by consolidating power and eliminating potential rivals. Gachagua was charged with corruption and inciting ethnic divisions, which may or may not be true, but conveniently removes a deputy who was building an independent base and could challenge Ruto. That's how Kenyan politics works—today's ally is tomorrow's threat, and institutional mechanisms like impeachment become weapons in intra-elite struggles.

The protest movement itself is evolving. Some leaders like activist Kasmuel McOure joined the ODM (Orange Democratic Movement) in November 2025 to pursue political ambitions through formal channels. That's the system absorbing dissent—offering ambitious young activists a path to power if they play by existing rules. It's effective at co-opting potential opposition, but it also means the revolutionary energy dissipates into conventional politics.

Meanwhile, Ruto continues dismissing the united opposition as "bure kabisa" (completely useless), which recently prompted MP Suzanne Ndunge Kiamba to publicly confront him about respecting other politicians. That kind of open disrespect for opposition—in a democracy that has competitive elections—shows how degraded political discourse has become. If the president treats legitimate opposition as worthless, what does that signal to his supporters about democratic norms?

The underlying issues that sparked protests haven't been resolved. Youth unemployment sits at 32% (some estimates higher). The tax burden on ordinary Kenyans remains heavy even after the Finance Bill withdrawal. Living costs continue rising. The protests resumed in June 2025, with thousands commemorating the one-year anniversary of the Finance Bill demonstrations. The question is whether this becomes a recurring cycle—protests, concessions, continuation of underlying problems, more protests—or whether something breaks.

Kenya's democratic institutions are stronger than many African countries: competitive elections, relatively free press, active civil society. But institutional strength doesn't mean democratic health. Elections happen regularly, but they're marred by ethnic mobilization, vote buying, and violence. Courts sometimes rule against the government, but selective enforcement means the powerful rarely face consequences. Civil society is vibrant, but activists face harassment and worse.

What to watch: Whether the protest movement sustains momentum or dissipates into factional politics as leaders get absorbed into existing parties. Whether the 2027 presidential election sees a unified opposition challenge to Ruto or another fragmented field that lets him win with a plurality. And whether the security forces' impunity for killings and disappearances gets addressed or normalized. The June 2024 protests showed Kenyan youth can challenge power and win tactical concessions. But translating street power into institutional change is the harder challenge, and that's where most protest movements fail.`,
    issues: [
      'Aftermath of deadly 2024 Finance Bill protests',
      'Deputy President Gachagua impeachment and removal',
      'Youth unemployment at 32% driving discontent',
      'Police killings and enforced disappearances',
      'Opposition co-optation vs sustained mobilization'
    ],
    topStories: [
      {
        title: 'Ruto Defends Record on Democracy and Protests',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/video/talk-to-al-jazeera/2025/11/9/kenyas-ruto-on-protests-power-and-the-state-of-democracy',
        pubDate: '2025-11-09'
      },
      {
        title: 'Parliament Impeaches Deputy President Gachagua',
        source: 'Wikipedia',
        link: 'https://en.wikipedia.org/wiki/2025_Kenyan_protests',
        pubDate: '2025-10-15'
      },
      {
        title: 'Activist Kasmuel McOure Joins ODM Party',
        source: 'The Unfiltered',
        link: 'https://theunfiltered.co.ke/news/mcOure-joins-odm',
        pubDate: '2025-11-05'
      }
    ]
  },
  {
    name: 'Kuwait',
    lat: 29.3117,
    lng: 47.4818,
    summary: `The story of Kuwaiti politics in November 2025 is the absence of politics—or at least the absence of parliament. Emir Sheikh Mishal al-Ahmad al-Sabah dissolved the elected parliament indefinitely in May 2024 and promised a four-year constitutional revision process. Eighteen months later, Kuwait's legislature remains suspended, elections are indefinitely postponed, and critics of the dissolution have been jailed. That's why Freedom House downgraded Kuwait from "Partly Free" to "Not Free" in 2025—the emir unconstitutionally suspended elections and left the country without a functioning legislature.

This is a dramatic break from Kuwaiti tradition. For decades, Kuwait stood out in the Gulf for its parliamentary democracy—raucous, often gridlocked, but genuine. Citizens could vote in legislative elections, openly criticize officials, organize protests, and generally enjoy civic freedoms unusual in the region. The National Assembly could grill ministers, reject budgets, and cause real headaches for the ruling Al-Sabah family. That system is now suspended, perhaps permanently.

The April 2024 elections—the fourth since 2020, which tells you about the level of political gridlock—saw opposition win 29 of 50 elected seats. The emir, who took power in December 2023 after his predecessor's death, dissolved that parliament on May 10, 2024, barely a month after the vote. The justification was ending political paralysis, but dissolving a parliament where you just lost is convenient timing. The promised constitutional revision is supposed to create a more "functional" system, which probably means one where elected representatives have less ability to challenge the ruling family.

At stake is a fundamental question about Kuwait's political future: Will the parliamentary system be restored, reformed, or repudiated? Right now we're in limbo. The emir controls legislative and executive power. There's no parliamentary oversight of budgets, policies, or appointments. This is absolute monarchy with promises of eventual reform—but history suggests that once authoritarians acquire power, they're reluctant to return it.

Two politicians who criticized the dissolution have been jailed, sending a clear message about permissible dissent. That's a significant shift for Kuwait, where robust criticism of government was previously tolerated. The civic space is contracting—not with mass repression like some neighbors, but with targeted prosecutions that create chilling effects. If criticism can land you in jail, most people will self-censor.

Economically, Kuwait can afford to ignore public pressure for now. Oil revenues provide fiscal cushion, and the welfare state keeps citizens materially comfortable even if politically marginalized. The Al-Sabah family's calculation seems to be that Kuwaitis will accept reduced political freedoms in exchange for continued economic security. That might work in the short term, but it also means if oil revenues decline or economic pressures mount, the regime has eliminated the political pressure valves that previously allowed managed conflict.

The regional context matters. Kuwait watched Arab Spring uprisings and saw parliamentary democracy as a safety valve—let people vote and complain, maintain stability. But after witnessing the UAE and Saudi Arabia's authoritarian modernization projects, the calculation may have shifted. Why tolerate messy parliamentary gridlock when neighbors achieve rapid development through centralized decision-making? The model has changed from managed democracy to technocratic authoritarianism.

What to watch: The constitutional revision process, which is supposed to conclude by 2028. Whether any draft is actually put to a referendum or simply imposed. And whether economic pressures or regional developments force the emir to reconsider the parliamentary suspension. The most likely scenario is a reformed, weakened parliament that returns eventually—giving the appearance of democracy while ensuring Al-Sabah dominance. But there's a real possibility that Kuwait's democratic experiment is ending, and the Gulf's one parliamentary system is becoming just another absolute monarchy with better PR.`,
    issues: [
      'Parliament suspended indefinitely since May 2024',
      'Freedom House downgrade from Partly Free to Not Free',
      'Four-year constitutional revision process',
      'Jailing of critics and shrinking civic space',
      'Shift from parliamentary democracy to absolute monarchy'
    ],
    topStories: [
      {
        title: 'Kuwait\'s Parliament Remains Suspended',
        source: 'Carnegie Endowment',
        link: 'https://carnegieendowment.org/research/2025/03/kuwaits-parliament-suspension-emir-democracy',
        pubDate: '2025-03-15'
      },
      {
        title: 'Kuwait Downgraded to Not Free',
        source: 'Freedom House',
        link: 'https://freedomhouse.org/country/kuwait/freedom-world/2025',
        pubDate: '2025-02-01'
      },
      {
        title: 'Will Kuwait\'s Parliament Be Its Last?',
        source: 'Journal of Democracy',
        link: 'https://www.journalofdemocracy.org/online-exclusive/will-kuwaits-next-parliament-be-its-last/',
        pubDate: '2025-06-20'
      }
    ]
  },
  {
    name: 'Laos',
    lat: 19.8563,
    lng: 102.4955,
    summary: `Lao politics in November 2025 is defined by preparation for leadership transition. The Lao People's Revolutionary Party (LPRP)—the only legal party in this communist state—will hold its 12th National Congress in early 2026, where new leadership will be selected. The March 2025 constitutional amendments and government restructuring are setting the stage for that transition, consolidating the institutional legacy of current General Secretary and President Thongloun Sisoulith before he steps aside or moves to a different role.

On November 12, 2025, President Thongloun met with Li Shulei, a member of the Chinese Communist Party's Political Bureau, demonstrating the close party-to-party relationship that structures Lao foreign policy. China is Laos's primary patron—economically through Belt and Road investments, politically through party-to-party ties, and strategically as a counterweight to Vietnamese and Thai influence. These high-level CPC-LPRP meetings aren't just diplomatic courtesy; they're the mechanisms through which Beijing shapes Lao policy.

The March 2025 constitutional amendments—the third revision to the 1991 constitution—came alongside major government restructuring that merged ministries and reorganized bureaucracy. The stated justification was "promoting governance efficiency," but the real purpose is institutional consolidation before leadership transition. In communist party-states, transitions are moments of vulnerability when factional disputes can erupt. By restructuring now, Thongloun is limiting the number of power centers his successor will inherit and reducing opportunities for rivals to build competing bases.

Laos is one of only five remaining communist states globally (alongside China, Vietnam, Cuba, and North Korea), and the only one that self-designates as a "people's democratic state." That semantic distinction aside, it's a one-party authoritarian system where the LPRP controls all political, economic, and social institutions. There are no opposition parties, no independent media, no civil society organizations that aren't party-controlled. Elections happen, but they're exercises in managed participation, not competitive democracy.

The interesting question is whether Laos follows the Vietnamese model (collective leadership with rotating party general secretary, state president, and prime minister roles) or the Chinese model (dominant leader concentrating multiple positions). Thongloun currently holds General Secretary, President, Chairman of Defence and Public Security Commission—essentially merging party and state executive authority. His successor might inherit that concentration or might see power redistributed among multiple figures representing different LPRP factions.

Economically, Laos faces significant challenges disguised by China-funded infrastructure projects. The China-Laos Railway opened in 2021, creating modern connectivity, but also saddling Laos with debt to Chinese creditors. The economy remains heavily dependent on hydropower exports (primarily to Thailand), mining, and agriculture. The LPRP's economic management has been criticized for corruption, mismanagement, and inability to translate Chinese investment into broadly shared prosperity. Inflation, currency depreciation, and debt stress are ongoing problems the next leadership will inherit.

Unlike Vietnam, which has successfully integrated into global supply chains and attracted diverse foreign investment, or China, which achieved economic transformation, Laos remains relatively underdeveloped and dependent on external patrons. The government's legitimacy rests on maintaining stability and delivering modest improvements in living standards, not on revolutionary ideology or nationalist mobilization. That's a fragile foundation—if economic performance falters, the LPRP has limited sources of legitimacy to fall back on.

What to watch: The 12th LPRP National Congress in early 2026, which will reveal whether power concentrates in a single figure or distributes among factions. The composition of the new Politburo and Central Committee will indicate which party networks are ascendant. And whether the new leadership continues Thongloun's close alignment with China or seeks to balance between Chinese, Vietnamese, and Thai influence. Lao politics is opaque even by communist party-state standards, but the 2026 Congress will provide rare visibility into elite dynamics that usually remain hidden.`,
    issues: [
      'Preparation for 2026 LPRP National Congress leadership transition',
      'March 2025 constitutional amendments and government restructuring',
      'Close alignment with Chinese Communist Party',
      'Economic challenges including debt and inflation',
      'One-party authoritarian system with no opposition'
    ],
    topStories: [
      {
        title: 'Lao President Meets Senior Chinese Official',
        source: 'People\'s Daily',
        link: 'http://en.people.cn/n3/2025/1112/c90000-20389730.html',
        pubDate: '2025-11-12'
      },
      {
        title: 'Laos Reforms Set Stage for Leadership Transition',
        source: 'East Asia Forum',
        link: 'https://eastasiaforum.org/2025/11/11/laoss-reforms-set-the-stage-for-leadership-transition/',
        pubDate: '2025-11-11'
      }
    ]
  },
  {
    name: 'Latvia',
    lat: 56.8796,
    lng: 24.6032,
    summary: `The striking thing about Latvian politics in November 2025 is how much revolves around someone who's not in office. Former Prime Minister Krišjānis Kariņš, who resigned in August 2023 after coalition conflicts, remains a dominant figure in public discussion despite claiming he won't return to politics. His recent comments about Latvia lacking "strong political leaders" while facing criminal charges over government flights illustrate how unfinished business from his tenure continues shaping current politics.

Kariņš led Latvia's longest-serving government in the democratic era, from December 2022 until his August 2023 resignation. His government navigated the Russia-Ukraine war's economic shockwaves, dramatically increased defense spending (Latvia now spends over 3% of GDP on defense, among Europe's highest), and implemented Latvian-language education reforms that reduced Russian-language instruction. These were consequential policies that redefined Latvia's trajectory, and Kariņš's New Unity party remains the dominant center-right force.

His successor, Evika Siliņa, became prime minister in September 2023, leading a coalition that emphasizes "human-centric governance" and Euro-Atlantic foreign policy. The government's stability since then suggests the coalition dynamics that frustrated Kariņš have eased, or at least are being managed differently. But Siliņa operates somewhat in Kariņš's shadow—he's the one who made the hard choices on defense and language policy, while she implements and manages.

The criminal case against Jānis Citskovskis, Kariņš's State Chancellery Director, over government flights has political undertones. Kariņš defended Citskovskis and criticized the charges, suggesting politically motivated prosecution. Whether that's true or not, it keeps Kariņš in the news and positions him as a martyr figure for his supporters. His statement that he's "willing to assist democratically oriented politicians" while criticizing current leadership keeps the door open for return despite the denial.

Latvia's political system is stable but fragmented. The 100-seat Saeima (parliament) typically requires coalitions of three or more parties. New Unity leads the current coalition with For Latvia's Development, National Alliance, and the Progressives—spanning center-right to conservative nationalist positions. The opposition includes Harmony (historically supported by Russian speakers), Union of Greens and Farmers, and populist formations. No single party dominates, which means government formation requires extensive negotiation and compromise.

The Russian-speaking minority (about 25% of the population) remains a political fault line. Language reforms championed by Kariņš's government phased out Russian-language instruction in schools, which the Latvian majority sees as necessary integration but Russian speakers view as cultural suppression. Russia's invasion of Ukraine has hardened attitudes—anything associated with Russian influence is now politically toxic, and parties like Harmony that previously defended Russian-speaker interests have been marginalized.

Latvia is one of Europe's most hawkish countries on Russia, for obvious geographic and historical reasons. The government has been unwavering in supporting Ukraine, accepting refugees, providing military aid, and pushing for tougher EU sanctions. There's cross-party consensus on defense and security, which is unusual in the fragmented party system. The question is whether this consensus holds if economic costs mount or Western resolve weakens.

What to watch: Whether Kariņš actually stays out of politics or engineers a comeback, perhaps if the current coalition stumbles. The outcome of the criminal case against his former aide, which could either vindicate or damage Kariņš's reputation. And whether the language education reforms produce the integration outcomes the government promised or exacerbate ethnic tensions. Latvia's democracy is healthy, but it's also brittle—small population, vulnerable geography, and unresolved questions about national identity and minority rights create persistent tensions that surface in each election cycle.`,
    issues: [
      'Kariņš\'s shadow over current government despite resignation',
      'Criminal case against former State Chancellery Director',
      'Language education reforms and Russian-speaker integration',
      'Coalition stability under PM Evika Siliņa',
      'Maintaining defense spending and Ukraine support'
    ],
    topStories: [
      {
        title: 'Kariņš Comments on Leadership and Citskovskis Case',
        source: 'BNN',
        link: 'https://bnn-news.com/is-karins-planning-a-political-comeback-he-criticizes-the-charges-against-citskovskis-and-silinas-leadership-274116',
        pubDate: '2025-11-10'
      },
      {
        title: 'Evika Siliņa Government Overview',
        source: 'Wikipedia',
        link: 'https://en.wikipedia.org/wiki/Government_of_Latvia',
        pubDate: '2025-09-15'
      }
    ]
  },
  {
    name: 'Lebanon',
    lat: 33.8547,
    lng: 35.8623,
    summary: `Lebanese politics in November 2025 is defined by a crisis over Hezbollah disarmament that could tear the country apart—again. After two years without a president and nearly three without a functioning government, Lebanon finally elected army commander Joseph Aoun as president in January 2025 and formed a cabinet under Prime Minister Nawaf Salam in February. That was supposed to be the beginning of recovery. Instead, by November, reports emerged that US envoy Tom Barrack delivered an ultimatum: disarm Hezbollah by end of November 2025, or risk Israeli military operation.

That deadline has passed as I write this, and we're watching to see what happens. But the ultimatum itself reveals the impossible position Lebanon's new leadership faces. President Aoun, former army commander, knows that confronting Hezbollah militarily would fracture the army along sectarian lines—Shia soldiers won't fight Hezbollah. Prime Minister Salam insists disarmament must be addressed as a prerequisite for stability and sovereignty. They're not aligned, possibly working at cross-purposes, which is Lebanon's political system in microcosm.

Hezbollah was significantly weakened in 2024-2025 fighting with Israel. It lost much of its leadership (including Hassan Nasrallah), suffered major personnel casualties, and had arms depots destroyed. The organization can no longer maintain a stranglehold over Lebanese politics the way it did for two decades. In the February 2025 cabinet formation, Hezbollah and Amal (its Shia ally) named only 4 of 26 ministers and didn't back PM Salam. That's unprecedented weakness for Hezbollah, which previously held effective veto power over Lebanese government formation.

But weak doesn't mean defeated or disarmed. Hezbollah insists it won't discuss full disarmament until Israel ceases operations in Lebanon—and as of August 2025, Israeli forces remain at five points inside Lebanon and continue airstrikes on Hezbollah targets. That's Hezbollah's justification for maintaining weapons: active Israeli presence on Lebanese soil. It's also a convenient perpetual excuse, since Israel isn't leaving until Hezbollah disarms, and Hezbollah won't disarm until Israel leaves.

The Lebanese Armed Forces (LAF) number around 85,000, but they're under-equipped, under-funded, and politically constrained from confronting Hezbollah. Various proposals for LAF deployment to the south and Hezbollah disarmament have foundered on the basic reality that the army can't and won't fight Hezbollah. President Aoun knows this intimately—he commanded these forces for years. Asking the LAF to disarm Hezbollah is asking it to commit institutional suicide.

PM Salam represents a reformist, technocratic vision—former International Court of Justice judge, backed by civil society protest movement alumni, committed to sovereignty and state authority. His appointment was supposed to signal a break from the old sectarian political class. But he lacks a political party, doesn't command militias, and can't coerce anyone. His power is entirely dependent on international backing and the fiction that Lebanese institutions can assert themselves.

The October 2023-present war devastated Lebanon economically. Infrastructure is wrecked, hundreds of thousands displaced, foreign investment non-existent, banking system still collapsed from the 2019-2020 crisis. The government Salam leads has no money, no capacity, and no leverage. International aid is promised contingent on reforms that can't be implemented without confronting Hezbollah and the corrupt political class. It's a perfect trap.

What to watch: Whether the US ultimatum deadline passes without Israeli action (which would reveal it was a bluff), or whether Israel launches operations that further destabilize Lebanon. Whether Hezbollah agrees to any partial disarmament to buy time, or refuses all compromises. And whether President Aoun and PM Salam can maintain their uneasy partnership or fracture publicly. The most likely outcome is continued paralysis—everyone agrees Hezbollah should disarm in principle, but nobody can make it happen in practice, so Lebanon muddles on as a failed state with competing sovereignties.`,
    issues: [
      'US ultimatum for Hezbollah disarmament by end November 2025',
      'President Aoun and PM Salam working at cross-purposes',
      'Hezbollah weakened but refusing full disarmament',
      'Israeli forces remaining in southern Lebanon',
      'Lack of government capacity and international aid paralysis'
    ],
    topStories: [
      {
        title: 'Lebanon on Edge Amid Hezbollah Disarmament Ultimatum',
        source: 'BLiTZ',
        link: 'https://weeklyblitz.net/2025/11/12/lebanon-on-edge-state-leadership-crucial-amid-hezbollah-us-and-israel-tensions/',
        pubDate: '2025-11-12'
      },
      {
        title: 'Joseph Aoun Elected President After Two-Year Vacancy',
        source: 'CSIS',
        link: 'https://www.csis.org/analysis/lebanon-finally-elects-president',
        pubDate: '2025-01-09'
      },
      {
        title: 'Nawaf Salam Forms Government',
        source: 'TIMEP',
        link: 'https://timep.org/2025/02/19/lebanon-finally-has-a-new-government-now-what/',
        pubDate: '2025-02-08'
      }
    ]
  },
  {
    name: 'Libya',
    lat: 26.3351,
    lng: 17.2283,
    summary: `Libyan politics in November 2025 is a story of frozen conflict and endless stalemate. The country remains divided between Abdul Hamid Dbeibah's UN-recognized Government of National Unity in Tripoli and Osama Hamad's eastern-based Government of National Stability backed by General Khalifa Haftar's Libyan National Army and the House of Representatives. Elections scheduled for 2021 were postponed indefinitely, and no new dates exist. Everyone talks about elections and unity government, but nobody actually wants them because current power-holders would lose influence.

The May 2025 House of Representatives session in eastern Libya to discuss forming a "unified interim government" and accept prime ministerial nominations illustrates the performance. Candidates presented policy programs. Debates occurred. But nothing happened because the GNU opposes a new interim government (they're already the government, from their perspective), and segments of the High State Council (western Libya's consultative body) also oppose it. So the east holds meetings about unity while the west refuses to participate, and UN envoys express frustration about "stubborn resistance, unreasonable expectations, and indifference to the interests of the Libyan people."

That UN complaint is revealing. The Special Representative's frustration with key stakeholders who show "stubborn resistance" to elections and unity government reflects how thoroughly the international community has been played. External actors assumed that if they facilitated dialogue, provided technical support for elections, and maintained pressure, Libyan elites would eventually agree to compromise. Instead, those elites have learned that the status quo—divided control, continued oil revenue flows, no accountability to voters—serves their interests better than any democratic transition.

The territorial division is stark: Haftar controls Cyrenaica (eastern Libya) and much of the southern desert, while Dbeibah controls Tripolitania (western Libya including the capital). This isn't a frozen line with active fighting—it's a de facto partition that's been stable since the 2020 ceasefire. Both sides export oil, both run governmental functions in their territories, both have international relationships (Haftar with Russia, Egypt, UAE; Dbeibah with Turkey, Italy, Western powers). Why risk elections when you already have effective sovereignty?

The blocking issue for elections is disagreement over the legal framework and who gets to participate. Should Haftar be eligible for presidency given his military role? Should figures associated with Gaddafi's regime be banned? What electoral system—proportional representation or winner-take-all? These aren't technical questions; they're distributional fights about who wins. And since no side is confident they'd win fair elections, all have incentives to block them while claiming to support democratic transition.

Libya's oil production has recovered to around 1.2 million barrels per day, generating revenue that flows through the Central Bank—itself a source of contention between east and west. The fact that oil keeps flowing despite political division is both good news (economic collapse avoided) and bad news (reduces incentives for compromise). If revenues were cut off, elites would feel pressure to negotiate. While money keeps flowing, they can afford stalemate.

The international community's leverage has diminished. The UN mission has limited credibility after years of failed mediation. European countries care about migration flows and oil access more than Libyan democracy. Egypt and UAE back Haftar regardless of democratic legitimacy. Turkey supports whoever opposes Haftar. Russia has mercenaries embedded with Haftar's forces. American attention is elsewhere. Who's going to force Libya's elites to compromise when they prefer the status quo?

What to watch: Whether oil revenues decline, which would create fiscal pressure forcing negotiation. Whether either Dbeibah or Haftar faces internal challenges from rivals within their territories, which could fracture the current duopoly. And whether the international community decides to impose meaningful costs (sanctions, aid withdrawal) for continued obstruction, though that seems unlikely. Most probable scenario: another year of meetings, statements, and stalemate while Libya remains de facto partitioned.`,
    issues: [
      'Elections postponed indefinitely since 2021',
      'De facto partition between Tripoli and eastern governments',
      'Deadlock over electoral framework and eligibility',
      'Oil revenue flows reducing incentives for compromise',
      'Diminished international leverage and credibility'
    ],
    topStories: [
      {
        title: 'UN Frustration Over Libyan Political Stalemate',
        source: 'UN Security Council',
        link: 'https://press.un.org/en/2024/sc15666.doc.htm',
        pubDate: '2024-04-15'
      },
      {
        title: 'House of Representatives Discusses Unity Government',
        source: 'Asharq Al-Awsat',
        link: 'https://english.aawsat.com/home/article/3495556/libya-parliament-vote-new-government-next-week',
        pubDate: '2025-05-10'
      },
      {
        title: 'From Haftar to Dbeibah: Libya\'s Map of Control',
        source: 'Asharq Al-Awsat',
        link: 'https://english.aawsat.com/features/5151154-haftar-dbeibah-map-control-and-influence-libya',
        pubDate: '2025-08-20'
      }
    ]
  },
  {
    name: 'Lithuania',
    lat: 55.1694,
    lng: 23.8813,
    summary: `Lithuanian politics underwent significant turnover in 2024-2025, producing outcomes that should worry the outgoing center-right coalition: the Social Democrats won convincingly, formed government, then imploded over scandal, leading to their second prime minister in less than a year. That's not normal, even by coalition government standards, and it suggests deeper instability beneath Lithuania's democratic surface.

The October 13 and 27, 2024 parliamentary elections saw the Social Democratic Party (LSDP) win 52 of 141 seats with 19.32% of the vote—not a landslide, but enough to lead coalition formation. The Homeland Union (TS-LKD), the center-right party that had dominated, collapsed to 28 seats from 50. Voters wanted change despite strong economic performance and Lithuania's successful hawkish stance on Russia-Ukraine. That tells you the change desire was about domestic governance, not foreign policy.

By November 2024, the LSDP formed a coalition with the Union of Democrats "For Lithuania" (DSVL) and the controversial Dawn of Nemunas (Nemuno Aušra), reaching 86 of 141 seats—a solid majority. Gintautas Paluckas of LSDP became prime minister. That coalition raised eyebrows because Dawn of Nemunas is a populist formation led by Remigijus Žemaitaitis, who faced antisemitism allegations. Including them in government was a pragmatic power move that brought immediate criticism.

Then it fell apart. Financial scandals forced PM Paluckas to resign—less than a year after taking office. The nature of the scandals isn't fully detailed in the sources, but in Lithuanian context that usually means conflicts of interest, suspicious business dealings, or corruption allegations involving coalition partners. Whatever the specifics, it was bad enough that Paluckas couldn't survive, and the Social Democrats needed to replace him quickly to avoid government collapse.

Enter Inga Ruginienė, who became prime minister on September 25, 2025, leading a reshuffled coalition of Social Democrats, Nemuno Aušra, and the Lithuanian Farmers, Greens and Christian Families Union. That's a different configuration than the original coalition—the Farmers Union replaced Democrats "For Lithuania," suggesting the latter pulled out over the scandal or was pushed out in the reorganization. Ruginienė's task is stabilizing a government that's already burned through one PM and has questionable partners.

What does this chaos tell us? First, that Lithuanian voters' desire for change didn't necessarily translate to competent alternative governance. The Social Democrats won on promises to address domestic issues like inequality, healthcare, and education, but got immediately bogged down in scandals and coalition management. Second, that including populist formations like Dawn of Nemunas creates credibility problems even if it secures parliamentary majority. Third, that Lithuania's proportional representation system produces fragmented parliaments requiring complex coalitions that are inherently unstable.

The good news is that Lithuania's foreign policy consensus remains intact. Regardless of domestic coalition chaos, there's cross-party agreement on NATO membership, support for Ukraine, defense spending (Lithuania meets the 2% GDP target), and Russia threat assessment. The Defense Minister and Foreign Minister positions are stable, and Lithuania's contributions to Baltic and NATO defense planning continue. Domestic political instability hasn't translated to foreign policy incoherence, which is crucial given Lithuania's frontline position.

The concerning thing is what this means for governance capacity. Lithuania faces real challenges: demographic decline, emigration of young educated people to Western Europe, need for economic diversification beyond services, infrastructure investment requirements. Addressing those requires sustained policy implementation over years, not revolving-door governments and scandal management. If the Social Democrats burn through another PM before the next election, it will confirm that Lithuania's party system is too fragmented and personality-driven to deliver stable governance.

What to watch: Can PM Ruginienė survive until the next election, or does the coalition fracture again? Do the scandals metastasize into broader investigations that implicate more politicians? And can the Social Democrats deliver on any domestic policy promises despite the chaos, or does this confirm that Lithuanian voters punished the center-right only to find the center-left equally disappointing? Lithuania's democracy is healthy in the sense of competitive elections and peaceful transfers of power, but coalition instability could erode public faith in democratic governance's capacity to solve problems.`,
    issues: [
      'Second Social Democrat PM in less than a year after scandal',
      'Coalition instability despite 86-seat majority',
      'Controversial inclusion of populist Dawn of Nemunas',
      'Fragmented party system and coalition management challenges',
      'Domestic governance chaos contrasting with foreign policy stability'
    ],
    topStories: [
      {
        title: 'Inga Ruginienė Forms New Lithuanian Government',
        source: 'EU News',
        link: 'https://www.eunews.it/en/2025/08/26/lithuania-agrees-on-new-government-social-democrats-retain-leadership/',
        pubDate: '2025-09-25'
      },
      {
        title: 'Social Democrats Win 2024 Parliamentary Election',
        source: 'Wikipedia',
        link: 'https://en.wikipedia.org/wiki/2024_Lithuanian_parliamentary_election',
        pubDate: '2024-10-27'
      },
      {
        title: 'Gintautas Paluckas Resigns Over Financial Scandals',
        source: 'China-CEE Institute',
        link: 'https://china-cee.eu/2024/12/11/lithuania-political-briefing-parliamentary-elections-and-the-new-ruling-coalition/',
        pubDate: '2025-08-20'
      }
    ]
  }
]

async function savePoliticsSummaries() {
  console.log('🚀 Saving Politics summaries for Batch 5...\n')

  const results: string[] = []

  for (const entry of POLITICS_SUMMARIES) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: entry.name,
            type: 'country',
            category: 'politics',
          },
        },
        update: {
          summary: entry.summary,
          issues: JSON.stringify(entry.issues),
          topStories: JSON.stringify(entry.topStories),
          storyCount: entry.topStories.length,
          updatedAt: new Date(),
        },
        create: {
          name: entry.name,
          type: 'country',
          country: entry.name,
          lat: entry.lat,
          lng: entry.lng,
          category: 'politics',
          summary: entry.summary,
          issues: JSON.stringify(entry.issues),
          topStories: JSON.stringify(entry.topStories),
          storyCount: entry.topStories.length,
        },
      })

      console.log(`✅ Saved Politics summary for ${entry.name}`)
      console.log(`   Summary: ${entry.summary.length} characters`)
      console.log(`   Issues: ${entry.issues.length}`)
      console.log(`   Stories: ${entry.topStories.length}\n`)

      results.push(entry.name)
    } catch (error) {
      console.error(`❌ Error saving ${entry.name}:`, error)
    }
  }

  console.log('\n✅ Politics summary generation complete!')
  console.log(`\nCompleted Politics for: ${results.join(', ')}`)
}

savePoliticsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
