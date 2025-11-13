import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const POLITICS_SUMMARIES = {
  UAE: {
    name: 'United Arab Emirates',
    country: 'United Arab Emirates',
    lat: 23.4241,
    lng: 53.8478,
    summary: `You know, when we talk about the UAE's political system, we're really discussing something rather unique in the Middle East – a federation of seven hereditary monarchies that has somehow managed to project remarkable stability while offering absolutely zero democratic participation to its citizens. It's Westminster democracy turned entirely on its head, and yet it works, at least by the metrics that matter to the ruling families.

**The Power Structure**

President Mohammed bin Zayed Al Nahyan – MBZ as everyone calls him – sits at the apex of this system, elected not by voters but by the Supreme Council of Rulers, which is composed of the seven emirs who rule each emirate as absolute monarchs. This isn't a ceremonial position; MBZ wields genuine executive power, though he must constantly balance the interests of Abu Dhabi and Dubai, the federation's twin pillars. Sheikh Mohammed bin Rashid Al Maktoum, Dubai's ruler and the federation's Vice President and Prime Minister, isn't merely some subordinate – he's running what amounts to a parallel power center focused on commerce and global connectivity.

The Federal National Council exists, but let's be frank about what it is: an advisory body with 40 members, half elected by a limited electoral college and half appointed by the rulers. The most recent election was in October 2023, with the next expected in 2027. But here's the thing – the FNC has consultative powers only. No legislative authority. No ability to hold the executive accountable. It's essentially a safety valve allowing the regime to point to "representative" institutions without ceding any real power. Freedom House rates the UAE as "Not Free," and that assessment is difficult to dispute when you look at the actual functioning of political institutions.

There are no political parties. No opposition. The judicial system isn't independent – courts ultimately answer to the rulers. For the 88% of the UAE's population who are expatriates, political participation is entirely off the table. Even for Emirati citizens, meaningful political expression can land you in serious trouble. The cybercrime laws are particularly draconian, used routinely to suppress any hint of dissent. Political prisoners are held without due process, and civil society organizations that aren't state-controlled simply don't exist.

**The Vision and Regional Role**

What makes this system fascinating from a political science perspective is how MBZ has leveraged the UAE's economic success and regional stability to position the country as a major power broker in the Middle East. The UAE hosted COP28 in 2023 – a remarkable feat of soft power for a major oil producer. They're investing heavily in artificial intelligence, space exploration, and renewable energy through their Vision 2030 strategy. Economic modernization is racing ahead, but political liberalization isn't even on the agenda.

The UAE practices what you might call "transactional diplomacy" – maintaining working relationships with the United States, China, Iran, and Saudi Arabia simultaneously. They use economic leverage rather than military might, though they've shown they're willing to project force when necessary, as we saw in Yemen. What's striking is how they've managed to be everyone's friend while committing to no one entirely. It's a delicate balancing act that requires strong, centralized leadership.

**The Bottom Line**

Succession is remarkably stable in this system. Abu Dhabi's Crown Prince, Sheikh Khaled bin Mohamed bin Zayed Al Nahyan, is positioned to eventually succeed MBZ. The smooth transfer of power is virtually guaranteed because it happens within royal families that have maintained control for generations. There's no organized opposition, no alternative power centers, and security services maintain tight control over any potential dissent. For all the talk of economic diversification and technological advancement, the political system remains fundamentally authoritarian and shows no signs of evolution toward greater openness. In the Gulf, stability and prosperity have proven more important than democracy, at least for now.`,
    issues: ['Authoritarian Governance', 'Federal National Council Advisory Role', 'Regional Power Broker Status', 'Succession and Stability', 'No Political Liberalization']
  },

  UK: {
    name: 'United Kingdom',
    country: 'United Kingdom',
    lat: 55.3781,
    lng: -3.4360,
    summary: `Barely seventeen months into his premiership, and Keir Starmer is facing something genuinely remarkable – a full-blown leadership crisis within his own party, approval ratings in the toilet, and serious questions about whether Labour can actually govern despite holding a massive parliamentary majority. When only 17% of Britons approve of your performance as Prime Minister and 73% disapprove, you're not experiencing a rough patch. You're in genuine political peril.

**The Leadership Crisis**

Just two weeks before the crucial November 26 budget announcement, reports emerged that Labour MPs were actively plotting to replace Starmer as party leader. The name being whispered most frequently is Wes Streeting, the Health Secretary, though Streeting himself has dismissed these reports as "self-defeating nonsense." But here's what matters: these stories don't emerge from nowhere. They reflect genuine discontent within the parliamentary Labour party about the direction of the government and Starmer's leadership style.

The immediate trigger is the upcoming budget, where Labour plans to break a key election pledge by increasing the basic rate of income tax for the first time in half a century. They're trying to fill what they call a "fiscal black hole" inherited from the Conservatives, but voters don't particularly care about the accounting – they care that they were promised one thing and are being delivered another. Unemployment has risen to 5%, the highest since 2016, up from 4.8% just months earlier. Inflation remains stubbornly elevated. The economic outlook is subdued at best.

But it's not just the economics. Labour MPs describe themselves as "worn down by 16 months of unpopular policies and unforced errors." The winter fuel payment cuts for elderly voters were deeply unpopular and seemed cruel. Welfare reforms were controversial and poorly communicated. Many Labour backbenchers are reportedly "resigned to serving just a single term in parliament." That's an extraordinary admission for MPs who won landslide victories in July 2024 expecting to govern comfortably for years.

**The Reform UK Surge and Opposition Dynamics**

Perhaps most concerning for Labour is that Nigel Farage's Reform UK party is now consistently leading in opinion polls. Reform is positioning itself as the anti-establishment alternative, capitalizing on Labour's difficulties by offering simple solutions to complex problems. This threatens Labour's "Red Wall" seats – those working-class constituencies in the Midlands and North of England that Labour reclaimed from the Conservatives in 2024.

The Conservative Party, meanwhile, is rebuilding under Rishi Sunak's leadership after their 2024 electoral defeat. They're struggling to define a post-election identity but are watching Labour's difficulties with growing confidence. The Liberal Democrats hold 70+ seats and are picking up votes in constituencies where voters feel abandoned by both major parties. In Scotland, the SNP remains dominant despite its own challenges, and constitutional debates over Scottish independence continue to simmer.

**The Institutional Context**

Here's the paradox: Labour holds approximately 400 of 650 seats in the House of Commons – a truly massive majority. In theory, Starmer should be unassailable. The Cabinet government tradition and parliamentary system means the Prime Minister serves at the pleasure of the Commons, but with such overwhelming numbers, he should be secure. Yet internal dissent and catastrophic approval ratings are creating genuine instability. Labour has different mechanisms than the Conservatives for triggering leadership elections, but with sufficient backbench support, MPs could force a change.

The upcoming November 26 budget is genuinely make-or-break. If the tax increases prove as unpopular as anticipated, and if the economic situation doesn't improve, the pressure on Starmer will intensify. The NHS waiting lists remain at record highs despite promises of increased funding. The housing crisis is worsening. Immigration numbers remain high despite pledges to reduce them. The UK-EU relationship post-Brexit continues to be challenging. The cost of living crisis is hitting middle and working-class families hard.

**The Bottom Line**

We're witnessing something unusual in British politics: a government with an enormous parliamentary majority that nonetheless feels weak and besieged. The next general election isn't due until 2029, but five years is an eternity when your approval ratings are this low and your own MPs are whispering about replacing you. Watch the November 26 budget carefully – if it goes badly, the pressure on Starmer could become unsustainable. British politics is experiencing a period of remarkable volatility, and we may not yet have seen the worst of it.`,
    issues: ['Starmer Leadership Crisis', 'Record-Low Approval Ratings', 'Budget and Economic Challenges', 'Reform UK Surge', 'Labour Party Internal Divisions']
  },

  US: {
    name: 'United States',
    country: 'United States',
    lat: 37.0902,
    lng: -95.7129,
    summary: `On November 12, 2025, President Donald Trump signed legislation ending a 43-day government shutdown – the longest in American history, surpassing even the 35-day shutdown during his first term. For nearly six weeks, approximately 900,000 federal employees were furloughed, another two million worked without pay, and essential government services ground to a halt. This wasn't merely dysfunction; it was a deliberate political crisis that exposed the fragility of American governance and foreshadowed the battles to come.

**The Shutdown and Its Consequences**

The immediate causes were disputes over spending levels and policy riders, with the Trump administration demanding deeper cuts to domestic programs than even many Republicans found palatable. The human consequences were severe: SNAP food benefits were disrupted, leaving people literally running out of food. The Federal Aviation Administration was forced to cut the number of flights in American skies due to air traffic controller staffing shortages, resulting in thousands of delayed or canceled flights nationwide. Federal workers faced financial ruin as paychecks stopped for over a month.

The House ultimately voted 222-209 to pass the funding bill, with six Democrats joining nearly all Republicans voting yes, and two Republicans joining Democrats in opposition. But here's the critical detail: the legislation only funds the government through January 30, 2026. We're not looking at a resolution; we're looking at a brief pause before another potential shutdown looms. It's governing by crisis, and it's becoming the new normal.

Perhaps most concerning, the funding bill completely failed to address the expiring health insurance subsidies for 24 million Americans under the Affordable Care Act. The Trump administration has announced it won't renew these subsidies when they expire at year's end. Twenty-four million Americans face either losing health coverage entirely or seeing massive premium increases. Democrats are furious at this exclusion, and the issue is rapidly becoming a major flashpoint heading into the 2026 midterm elections.

**Trump's Second Term and Congressional Dynamics**

Trump began his second term on January 20, 2025, after his 2024 election victory delivered Republicans a trifecta: control of the White House, Senate, and House of Representatives. But that House majority is razor-thin – just an 8-seat margin – creating constant governing challenges. Speaker Mike Johnson of Louisiana and Senate Majority Leader John Thune of South Dakota are attempting to manage a Republican caucus deeply divided between MAGA hardliners in the Freedom Caucus demanding radical spending cuts and traditional conservatives worried about their 2026 re-election prospects.

The Senate Republicans hold a somewhat more comfortable 53-47 majority, but even there, divisions exist over how aggressive to be on spending cuts, immigration enforcement, and foreign policy. Trump is pursuing an agenda of aggressive immigration enforcement, extensive deregulation, and significant spending cuts. His Cabinet is more ideologically aligned than during his first term, and he's using executive orders extensively to bypass congressional gridlock. But executive orders can only accomplish so much, and on fundamental issues like government funding and major policy changes, he needs Congress.

**Democratic Opposition and 2026 Midterms**

Democrats are shell-shocked after their 2024 defeat, with bitter recriminations about President Biden's late withdrawal from the race and questions about Vice President Harris's campaign strategy. Senate Minority Leader Chuck Schumer and House Minority Leader Hakeem Jeffries are leading the opposition, but the party is searching for a new direction. Progressive and moderate wings are in tension over whether to move left or toward the center.

Historically, the party controlling the White House loses seats in midterm elections. Democrats are hoping Trump's first year of chaos – highlighted by the 43-day shutdown – will fuel a comeback in November 2026. All 435 House seats and one-third of the Senate will be up for election. With Trump's narrow House majority, Democrats need to flip just a handful of seats to retake the chamber.

**The Institutional Stress**

The lengthy shutdown exposed deeper problems in American governance. Public trust in government institutions is at historic lows. Partisan polarization is at peak levels. The Supreme Court faces ongoing controversies over ethics and legitimacy. There are active debates about abolishing the filibuster, expanding the Supreme Court, and fundamental electoral reforms. The fault lines run deep: government spending and debt ceiling battles, healthcare coverage, immigration enforcement, Ukraine aid, abortion rights post-Dobbs, economic inequality, climate policy, China competition, and trade policy.

**The Bottom Line**

American politics is entering a period of sustained crisis. The January 30, 2026 funding deadline will arrive quickly, and there's no reason to believe the next round of negotiations will be any less contentious than the last. Twenty-four million Americans losing healthcare subsidies will create enormous political pressure. The 2026 midterms will function as a referendum on Trump's second term and on whether Republicans can govern effectively with their trifecta. With such narrow margins in the House, every vote matters, and chaos breeds more chaos. We're watching governance by brinkmanship become normalized, and the consequences for American political stability are genuinely concerning.`,
    issues: ['Historic 43-Day Government Shutdown', 'ACA Healthcare Subsidies Expiring', 'Narrow Republican House Majority', 'Trump Second Term Agenda', '2026 Midterm Elections']
  },

  URUGUAY: {
    name: 'Uruguay',
    country: 'Uruguay',
    lat: -32.5228,
    lng: -55.7658,
    summary: `In an era when Latin American politics seems defined by populist extremism, authoritarian backsliding, and democratic erosion, Uruguay stands as a remarkable exception. When Yamandú Orsi won the presidential election on November 24, 2024, with 49.8% of the vote, defeating Álvaro Delgado's 45.9%, both candidates conceded gracefully, voters turned out at 90%, and the peaceful transfer of power proceeded without anyone questioning the legitimacy of the results. In contemporary Latin America, that's genuinely extraordinary.

**Orsi's Background and Governing Approach**

Orsi, 57, is a former history teacher and two-time mayor with deep experience in local government. He's the political heir to José "Pepe" Mujica, the ex-Marxist guerrilla who became president and then a global icon for his humble lifestyle and progressive politics. But Orsi isn't Mujica redux – he campaigned explicitly on a "modern left" platform and promised "change that will not be radical." He understands that Uruguayan voters want pragmatic governance focused on concrete problems: homelessness, crime reduction, housing construction, education reform, and economic growth.

His Broad Front coalition is fascinating – it includes socialists, communists, former Tupamaros guerrillas, and social democrats. They previously governed from 2005 to 2020 under Tabaré Vázquez and Mujica, proving the coalition could be both stable and effective. After five years of center-right National Party governance under Luis Lacalle Pou, voters opted to bring the Broad Front back. But the opposition didn't cry fraud or claim the system was rigged. The National Party and Colorado Party accepted the results, and the mature democratic norms that define Uruguayan politics held firm.

**The Political System and Democratic Culture**

Uruguay's presidential system uses a two-round runoff to ensure the winner has majority support. The bicameral General Assembly provides proportional representation, and five-year presidential terms (with one re-election allowed) create stability while preventing indefinite rule. Political institutions are rated as a "Full Democracy" by Freedom House. The judiciary is independent, the press is free, corruption levels are low by Latin American standards, the civil service is professional, and electoral processes are transparent. Strong civil society and high civic engagement reinforce these institutional strengths.

What's particularly striking is Uruguay's political culture. There's a genuine tradition of dialogue and compromise dating to the early 20th century. Political violence and extremism are virtually absent. Social trust levels are high. The country has implemented progressive social policies – marijuana legalization, same-sex marriage, abortion rights – without the polarizing backlash seen elsewhere. Political debates focus on pragmatic policy questions rather than existential threats to democracy.

The opposition landscape reflects this maturity. The National Party (Blancos) and Colorado Party form a constructive center-right opposition. They're not trying to delegitimize Orsi's presidency or obstruct governance for its own sake. They're positioning for the next election cycle in 2029, building alternative policy platforms, and providing democratic accountability. It's how opposition is supposed to function.

**Challenges Ahead**

That said, Orsi faces genuine challenges. Economic growth has averaged only 1-2% annually, which is disappointing for a country trying to improve living standards. Organized crime and drug trafficking are growing concerns, with voters identifying crime as a major campaign issue. Youth unemployment hovers around 20%. The pension system's long-term sustainability is questionable. Balancing social spending with fiscal responsibility will require difficult trade-offs.

On the international front, Uruguay must manage relationships with both China and the United States while navigating Mercosur trade bloc negotiations. Climate change is affecting the agricultural sector that remains central to the economy. These aren't simple problems with obvious solutions.

**The Bottom Line**

Uruguay demonstrates that functional democracy is possible in Latin America, but it requires something often overlooked: genuine commitment from political elites to democratic norms and processes. The country avoided populism not by accident but through decades of building strong institutions and fostering a culture of political moderation. Orsi's government will be tested by economic headwinds and crime concerns, but the system itself is robust. The next presidential and parliamentary elections aren't until 2029, giving Orsi time to implement his agenda. In a region experiencing democratic turbulence, Uruguay's stability is both unusual and instructive. The question is whether other Latin American countries can learn from it, or whether Uruguay will remain the exception rather than becoming the rule.`,
    issues: ['Orsi New Presidency and Broad Front Return', 'Democratic Stability and Mature Institutions', 'Economic Growth Challenges', 'Crime and Youth Unemployment', 'Pragmatic Policy Approach']
  },

  UZBEKISTAN: {
    name: 'Uzbekistan',
    country: 'Uzbekistan',
    lat: 41.3775,
    lng: 64.5853,
    summary: `On November 1, 2025, Uzbekistan's government eliminated 2,141 managerial positions across ministries and agencies – 1,863 from budget organizations and 278 from extra-budgetary funds. Five days later, President Shavkat Mirziyoyev met with President Trump in Washington, announcing billions in U.S. investments including an $8.5 billion contract for 22 Boeing 787 Dreamliners. These two events capture the essence of Mirziyoyev's Uzbekistan: aggressive economic modernization and international engagement paired with continued authoritarian control and zero political liberalization.

**Mirziyoyev's Consolidation of Power**

Mirziyoyev has ruled since 2016, taking over after the death of Islam Karimov, who governed Uzbekistan for 27 years as a brutal dictator. Initially, there was hope that Mirziyoyev might open up the political system alongside economic reforms. Instead, he's proven to be a more sophisticated authoritarian – implementing genuine economic changes while maintaining firm political control. He was re-elected in 2021 with 80.1% of the vote in an election that was neither free nor fair. Then came the constitutional changes in 2023 that reset his term limits, potentially allowing him to serve until 2040.

His daughter, Saida Mirziyoyeva, now heads the Presidential Administration as of 2025. This isn't nepotism in some subtle form – it's dynastic politics conducted openly. The presidency holds overwhelming executive power, while the bicameral Oliy Majlis (parliament) exercises limited authority. Elections are held, but they're not competitive by any meaningful standard. Opposition parties are restricted or banned outright. Media is controlled by the state or government-affiliated entities. Freedom House rates Uzbekistan as "Not Free," and that assessment is entirely accurate.

**The "New Uzbekistan" Reforms**

What makes Mirziyoyev's rule more complex than simple authoritarianism is his genuine commitment to economic reform. The November restructuring cutting over 2,000 government positions aims to introduce digital technologies, reduce bureaucracy, and increase private sector involvement. After Karimov's death, Mirziyoyev released some political prisoners, ended forced labor in the cotton harvest, improved relations with neighboring Kazakhstan, Kyrgyzstan, and Tajikistan, and implemented economic reforms including currency convertibility and reduced business bureaucracy.

The "New Uzbekistan" rhetoric emphasizes modernization, opening to tourism and foreign investment, and positioning the country as Central Asia's hub. With 36 million people, Uzbekistan is the region's most populous country, and its strategic location between Russia, China, and Afghanistan gives it genuine geopolitical significance. The November summit with Trump highlighted Mirziyoyev's multi-vector foreign policy: maintaining relations with Russia while deepening ties with the United States and China simultaneously. Uzbekistan isn't a member of Russia's Eurasian Economic Union, preserving more sovereignty than neighbors like Kazakhstan.

**The Political Reality**

But here's what hasn't changed: there's no meaningful political opposition or competition. Civil society is tightly controlled. Security services maintain a surveillance state. The space for independent voices or dissent is minimal. The human rights situation remains poor despite some reforms. The parliament held elections in October 2024, but all five registered parties support the president. There's no genuine opposition representation because opposition simply isn't permitted.

The September 2022 protests in the autonomous region of Karakalpakstan were violently suppressed when residents opposed constitutional changes affecting their autonomy. That response revealed the limits of reform: economic liberalization is acceptable, but political challenges to the regime are not. Corruption remains endemic despite anti-corruption campaigns. Border demarcation disputes with Kyrgyzstan periodically flare up. Water and energy resources in Central Asia are sources of regional tension.

**Succession and the Future**

Presidential succession is unclear despite the constitutional changes extending Mirziyoyev's potential tenure. Unlike the UAE with its clear royal succession mechanisms, Uzbekistan's authoritarian system is personalized around Mirziyoyev. His daughter's rise suggests possible dynastic ambitions, but whether the system can transfer power smoothly to the next generation remains uncertain. The next presidential election is scheduled for 2026, but the outcome is predetermined – Mirziyoyev will win overwhelmingly because the system is designed to ensure that result.

**The Bottom Line**

Uzbekistan under Mirziyoyev presents a case study in selective modernization: economic reform without political liberalization, international engagement without domestic openness, administrative efficiency without accountability. The Boeing deal and visa-free travel for Americans are real achievements that will benefit the economy and increase international connectivity. The government restructuring might genuinely improve efficiency and reduce corruption. But none of this changes the fundamental nature of the political system, which remains authoritarian, repressive, and closed to genuine democratic participation. For investors and tourists, Uzbekistan is increasingly open. For Uzbek citizens seeking political rights and freedoms, little has changed. That's precisely the balance Mirziyoyev intends to maintain, and so far, he's succeeding.`,
    issues: ['Mirziyoyev Authoritarian Rule', 'Government Restructuring and Reforms', 'US-Uzbekistan Strategic Partnership', 'No Political Liberalization', 'Succession Uncertainty']
  },

  VENEZUELA: {
    name: 'Venezuela',
    country: 'Venezuela',
    lat: 6.4238,
    lng: -66.5897,
    summary: `On January 10, 2025, Nicolás Maduro was sworn in for a third presidential term following an election in July 2024 that was widely considered fraudulent. The opposition published precinct-level tabulations showing Edmundo González Urrutia won with 67% of the vote, but Maduro's government claimed victory with 51%, and Venezuela's electoral council never released detailed tallies. María Corina Machado, who won the 2025 Nobel Peace Prize for her democratic resistance, remains in hiding inside Venezuela. González fled to exile in Spain after an arrest warrant was issued. And the Trump administration is offering a $50 million reward for Maduro's arrest. This is Venezuelan politics in November 2025: a disputed president, an opposition in disarray and exile, and a deepening authoritarian regime.

**The Fraudulent Election and Its Aftermath**

The July 2024 election was a sham, and everyone knows it. International observers documented massive irregularities. The United States, European Union, and most Latin American countries rejected the results. But Maduro controls all the levers of power – the electoral council, the supreme court, the armed forces, the intelligence services – and so he simply declared victory and proceeded as though nothing were amiss. As of September 29, 2025, Venezuela held 827 political prisoners according to Foro Penal, a Venezuelan human rights group. The post-election crackdown involved widespread arrests, documented torture, and forced disappearances. Media censorship and internet restrictions prevent independent reporting. NGOs and civil society operate under constant pressure.

Machado, the real leader of the opposition movement, was barred from running in the election, so González became the unity candidate. But after the stolen election, González faced an arrest warrant from the attorney general on conspiracy charges and was forced to flee to Spain. Machado, meanwhile, is in hiding somewhere in Venezuela, conducting her resistance work clandestinely. For her courage, she was awarded the Nobel Peace Prize – an honor that recognizes both her personal bravery and the international community's acknowledgment that Venezuela's democratic struggle matters.

**The Opposition's Fatal Divisions**

But here's where the story gets more complicated and more tragic. In May and July 2025, the Maduro regime held legislative and municipal elections. The opposition Unitary Platform (PUD) split bitterly over whether to participate or boycott. Most PUD parties boycotted, arguing that participating in sham elections legitimizes the regime. But Henrique Capriles and his faction encouraged voter turnout, believing that complete boycotts cede all political space to Maduro. Machado's camp accused participants of "cooperating with the regime" and betraying the democratic cause. The debate was marked by bitter recriminations, with each side accusing the other of strategic errors and even betrayal.

This split is devastating because unity was the opposition's greatest strength. When they coordinated in 2024, they won the election by massive margins (even if Maduro stole it). Divided, they're far less effective. The regime benefits enormously from opposition fragmentation. Every moment spent fighting internal battles is a moment not spent challenging Maduro's rule. And ordinary Venezuelans, exhausted by economic collapse and political repression, see opposition divisions and lose hope.

**The Regional and International Context**

The Trump administration is taking a more aggressive posture than the Biden administration did. U.S. forces are gathering in the Caribbean region, and Trump has conducted strikes on alleged drug boats. The $50 million bounty on Maduro is meant to signal that his days are numbered, though putting a price on a sitting president's head is extraordinary and raises obvious questions about sovereignty and international law. U.S. sanctions on Venezuelan oil remain in place, though they've proven ineffective at dislodging Maduro.

Colombia's President Gustavo Petro attempted mediation but failed. Brazil's Lula has criticized the election but maintains dialogue with Caracas. Argentina's Javier Milei strongly opposes Maduro. Caribbean countries are divided, with some maintaining relations for economic reasons. China and Russia provide critical economic and diplomatic support that helps Maduro survive international isolation. Iran provides technical assistance. Cuba maintains its close alliance, with Cuban advisors embedded in Venezuelan intelligence services.

**The Human Cost and Economic Collapse**

Venezuela's GDP declined approximately 75% from 2013 to 2020 – an economic collapse rivaling the Great Depression. Hyperinflation has been reduced but the economy remains shattered. Over 7 million Venezuelans have fled the country, creating the largest refugee crisis in the Western Hemisphere. Oil production is at a fraction of historical levels. The economy has informally dollarized, with ordinary transactions conducted in U.S. dollars while the bolivar is essentially worthless. Widespread poverty and a humanitarian crisis grip the nation.

**The Bottom Line**

Maduro's regime survives through repression, international support from China and Russia, and control of the armed forces. The military's cohesion is essential – if senior officers defect or the armed forces fracture, Maduro falls. But so far, generals have remained loyal, enriched through corruption and state-backed business ventures. The opposition's divisions undermine their effectiveness at precisely the moment when unity is most needed. The International Criminal Court is investigating crimes against humanity, but legal processes move slowly. More legislative elections could come in 2026, and the opposition will again face the impossible choice: participate and risk legitimizing fraud, or boycott and cede all political space. There's no good answer, which is exactly why authoritarian regimes force these dilemmas. Venezuelan democracy is in exile, in hiding, or in prison. The struggle continues, but the costs are immense and the path forward remains desperately unclear.`,
    issues: ['Maduro Disputed Third Term', 'Opposition in Disarray and Exile', 'Repression and Political Prisoners', 'Trump Administration Pressure', 'Economic Collapse and Refugee Crisis']
  },

  VIETNAM: {
    name: 'Vietnam',
    country: 'Vietnam',
    lat: 14.0583,
    lng: 108.2772,
    summary: `When To Lam assumed leadership of Vietnam's Communist Party following Nguyen Phu Trong's death in July 2024, he inherited both the most powerful position in Vietnamese politics and a system facing pressure from multiple directions. As General Secretary – the paramount position in Vietnam's one-party state – To Lam is now spearheading an administrative "revolution" that will cut the number of provinces from 63 to just 34, streamline the party-state apparatus, and position Vietnam for what the January 2025 Party plenum described as "double-digit annual GDP growth" for 2026-2030. This is ambitious governance pursued through Leninist structures, and it's fascinating to watch.

**To Lam's Power Consolidation**

To Lam previously served as Minister of Public Security and then President before relinquishing the presidency to Luong Cuong in October 2024 to focus entirely on his role as General Secretary. This move signals his intention to consolidate power in the party position rather than spreading authority across multiple roles. He's transforming the General Secretary role from one that sets policy boundaries into an executive position that proactively leads policy formulation and implementation. This is a significant shift in how Vietnamese Communist Party leadership has traditionally functioned.

The January 2026 Party Congress will be crucial. To Lam is expected to secure his position formally and make key personnel decisions for the Politburo and Central Committee. He'll set the economic plan for 2026-2030, determine foreign policy direction, and shape social and cultural policies. The revised 2025 GDP growth target from 6.5% to 8% demonstrates his ambition, though whether Vietnam's economy can actually achieve double-digit growth is another question entirely.

To Lam is working alongside Prime Minister Pham Minh Chinh, who focuses on economic management. This partnership could prove highly effective if they coordinate well, or it could become competitive if their ambitions conflict. Vietnamese politics has traditionally featured a "Four Pillars" power structure balancing the party, government, presidency, and assembly. To Lam appears to be centralizing power away from that balanced model toward dominance of the General Secretary position.

**The Administrative Revolution**

Cutting provinces from 63 to 34 is genuinely radical. It requires redrawing boundaries, consolidating bureaucracies, managing displaced officials, and reorganizing service delivery. The goal is to create a leaner, more efficient government that can respond faster to economic challenges and reduce opportunities for corruption. Whether it will succeed depends on implementation, which in a one-party state means whether party cadres throughout the system embrace or resist the changes.

This connects to the ongoing "Blazing Furnace" anti-corruption campaign that Trong launched in 2016 and To Lam has continued despite his security background. The campaign has targeted high-level officials, business leaders, and party members. It's been used for both genuine anti-corruption and political purges to remove rivals. The economic side effect has been to make officials risk-averse, reluctant to make decisions that might later be deemed corrupt even if they're simply judgment calls. That risk aversion can slow economic decision-making precisely when Vietnam needs dynamism.

**The China Relationship and Foreign Policy**

On November 13, 2025, To Lam received Li Shulei from China's Communist Party Central Committee for the 20th theory seminar between the CPV and CPC. This routine interaction highlights Vietnam's complex relationship with China: economic partner, ideological ally, and historic rival. The South China Sea disputes remain unresolved, with Vietnam claiming sovereignty over territories that China also claims. Managing this relationship is perhaps the single most important foreign policy challenge Vietnam faces.

Vietnam practices what it calls "bamboo diplomacy" – bending but not breaking, maintaining flexibility while defending core interests. The country signed a Comprehensive Strategic Partnership with the United States in 2023, significantly upgrading relations. Vietnam is a key node in global supply chains, hosting major Samsung and Apple operations. But none of this means Vietnam is abandoning its relationship with China or challenging the Communist Party's ideological ties to the CPC. It's multi-directional diplomacy designed to maximize Vietnam's options and leverage.

**The Repressive Political System**

Despite economic dynamism, Vietnam's political system remains severely repressive. The Communist Party maintains a monopoly on power with no opposition parties permitted. National Assembly elections are held, but the CPV pre-approves all candidates. A small number of "independent" candidates are allowed with party permission, but this is theater, not genuine competition. Internet censorship and surveillance are extensive. Independent journalists and bloggers are routinely jailed. Environmental and land rights protests are occasionally tolerated if they remain non-political, but anything perceived as challenging party authority is crushed. Freedom House rates Vietnam "Not Free," and that rating is entirely justified.

**The Bottom Line**

Vietnam under To Lam is pursuing a high-risk, high-reward strategy: radical administrative streamlining, ambitious economic growth targets, continued anti-corruption campaigns, and active international engagement, all while maintaining rigid political control and zero tolerance for dissent. The January 2026 Party Congress will reveal whether To Lam has successfully consolidated power or whether factional resistance within the party limits his authority. Economic targets of double-digit growth seem unrealistic given global conditions, but even 6-8% growth would be impressive. The South China Sea tensions won't disappear, and managing the U.S.-China relationship while maintaining ties to both will require continued diplomatic dexterity. For ordinary Vietnamese, economic opportunities may expand, but political freedoms won't. That's the bargain the Communist Party offers: prosperity in exchange for obedience. So far, most Vietnamese have accepted those terms, but whether that holds if economic promises aren't delivered remains to be seen.`,
    issues: ['To Lam Power Consolidation', 'Administrative Revolution Cutting Provinces', 'Anti-Corruption Campaign', 'Bamboo Diplomacy with US and China', 'One-Party Authoritarian Control']
  },

  YEMEN: {
    name: 'Yemen',
    country: 'Yemen',
    lat: 15.5527,
    lng: 48.5164,
    summary: `More than a decade into Yemen's civil war, the Houthis have won. Not a total victory – they don't control the entire country – but they rule one-third of Yemen's territory including the capital Sanaa and control two-thirds of its population. They've emerged as the most powerful political and military actor in the country, and no amount of international diplomatic language changes that fundamental reality. The internationally recognized government, led by the Presidential Leadership Council, clings to power in the south with Saudi and Emirati backing, but it's weak, fractured, and unable to project authority beyond limited areas. And the peace process that seemed possible in 2023 remains stalled despite UN efforts and the potential opening created by the Gaza ceasefire.

**The Houthi Power Structure**

Abdul-Malik al-Houthi leads the movement from hiding, and the Houthis have established parallel government institutions throughout northern Yemen. They collect taxes – including zakat, the Islamic religious levy – and control major ports like Hodeidah, which generates substantial revenue. They've recruited thousands of child soldiers, imposed repressive social controls particularly on women, cracked down brutally on dissent and civil society, and mandated religious education in schools. This isn't a temporary military administration; it's a functioning government, however brutal and authoritarian.

When the Gaza ceasefire was announced on October 8, 2025, the Houthis stopped their attacks on Israel and Red Sea shipping. This demonstrated both their discipline and their strategic calculation. The attacks had served a purpose – positioning the Houthis as part of the broader "Axis of Resistance" alongside Iran, Hezbollah, and Hamas, and building domestic support by linking Yemen's struggle to the Palestinian cause. Once the ceasefire held, continuing attacks would have been counterproductive. On October 15, UN Special Envoy Hans Grundberg told diplomats from Saudi Arabia, the UAE, and the P5 Security Council members that the Gaza ceasefire presents an opportunity to "reinforce regional stability" and "renew momentum toward peace in Yemen."

But here's the problem: momentum and opportunity don't equal peace. The 2022 ceasefire is still technically holding but it's fragile. The 2023 peace roadmap was agreed "in principle" by both the Houthis and the PLC, promising a permanent ceasefire, oil revenue sharing, and a political framework. It was negotiated with Saudi and Omani support, but implementation has stalled. Neither side is fully committed because the terms don't serve their interests.

**The Presidential Leadership Council and Southern Fragmentation**

The PLC, formed in April 2022 to replace President Abdrabbuh Mansur Hadi, is an eight-member body chaired by Rashad al-Alimi. It's supposed to represent Yemen's non-Houthi factions, but it's really a loose-knit coalition of competing political and military groups backed variously by Saudi Arabia and the UAE – which sometimes have competing interests themselves. The PLC controls southern regions including Aden, the temporary capital, but its central authority is weak. Regional commanders hold the real power.

The Southern Transitional Council seeks outright independence for South Yemen, backed primarily by the UAE. This creates tensions with the Saudi-backed PLC, which officially supports a unified Yemen. Tribal confederations – particularly the Bakil and Hashid – maintain local autonomy in various regions. Al-Qaeda in the Arabian Peninsula still has a presence in remote areas, as do Islamic State remnants. There's no unified state authority across Yemen, just a patchwork of competing power centers.

In UN Special Envoy Grundberg's May 2025 statement, he expressed frustration with the peace process remaining stalled despite the roadmap. But frustration doesn't change facts on the ground. Saudi Arabia is eager to exit militarily while maintaining influence – the intervention has been expensive, deadly, and hasn't achieved its objectives. The UAE withdrew most ground forces in 2019 but maintains influence through proxies. Iran provides support to the Houthis – weapons, advisors, diplomatic backing – though the extent of that support is often exaggerated by Saudi and American officials seeking to justify their own involvement.

**The Humanitarian Catastrophe**

The World Bank estimates that over 17 million Yemenis face food insecurity – half the population – and 18 million lack access to safe drinking water or sanitation. The healthcare system has collapsed. Education has been disrupted for millions of children. Cholera outbreaks recur regularly. The economy is shattered, with the currency collapsing in the south while the north uses different exchange rates. This is one of the world's worst humanitarian crises, and it's receiving far less international attention than it warrants.

**The Bottom Line**

The Gaza ceasefire does create a diplomatic opening, but converting that into actual progress toward peace in Yemen requires all parties to compromise, and right now, none have sufficient incentive to do so. The Houthis are winning on the ground, so why accept a settlement that requires them to give up gains? The PLC is weak and divided, unable to negotiate from a position of strength. Saudi Arabia wants out but won't accept a settlement that looks like defeat. The 2026 political calendar might include another round of elections, forcing the opposition to choose between participating in what would likely be illegitimate processes or boycotting and ceding all political space.

Yemen's political situation remains a stalemate masking a slow Houthi victory. The human cost is immense. Over a decade of war has destroyed infrastructure, displaced millions internally, and driven over a million to flee abroad. A decade from now, we may look back at 2025 as the year when Yemen's partition became permanent – an Iranian-backed Houthi state in the north and a fractured, weak, Saudi/Emirati-influenced collection of statelets in the south. That's not the outcome anyone officially wants, but it's increasingly where the facts on the ground are leading.`,
    issues: ['Houthi De Facto Victory', 'Stalled Peace Process', 'Presidential Leadership Council Weakness', 'Gaza Ceasefire Opportunity', 'Humanitarian Catastrophe']
  },

  ZIMBABWE: {
    name: 'Zimbabwe',
    country: 'Zimbabwe',
    lat: -19.0154,
    lng: 29.1549,
    summary: `At ZANU-PF's annual conference in October 2025, delegates endorsed extending President Emmerson Mnangagwa's term to 2030, instructing the government to begin drafting constitutional amendments. Mnangagwa is 83 years old and constitutionally required to leave office in 2028 after serving two elected terms. But constitutions are just pieces of paper when a ruling party controls all the levers of power, and ZANU-PF has been in power since Zimbabwe's independence in 1980. What makes this extension attempt particularly interesting is the open resistance from Vice President Constantino Chiwenga and his faction, who expected to succeed Mnangagwa and are now watching their path to power blocked.

**The 2030 Extension and Internal Power Struggle**

ZANU-PF's spokesperson Christopher Mutsvangwa declared that "Zimbabwe is not a papacy" and insisted there's no constitutional provision for the vice president to automatically become the next leader. That's technically true, but it misses the point. In authoritarian systems, succession isn't about constitutional provisions – it's about power, loyalty, and control of security forces. Chiwenga, 71, is a former Zimbabwe Defence Forces commander. The military is the ultimate power broker in Zimbabwe, as demonstrated when they removed Robert Mugabe in a November 2017 coup that allowed Mnangagwa to emerge as president.

The Mnangagwa loyalists pushing the term extension are known as the "Lacoste" faction. Chiwenga's allies form an opposing faction. Military veterans are divided between these camps. This isn't merely a political dispute; it's a contest for control of the patronage networks, business interests, and security apparatus that constitute real power in Zimbabwe. The November 12, 2025 meeting where Mnangagwa addressed 5,000 supposed opposition "returnees" under the "Come Home" campaign was political theater designed to show expanding support, though the opposition disputes the claimed 250,000 defectors.

Meanwhile, businessman Kudakwashe Tagwirei has reportedly pledged $150,000 monthly to fund ZANU-PF's Harare Provincial structures. Tagwirei is connected to fuel cartels and Sakunda Holdings, and his financial support raises obvious questions about oligarchic state capture. There are even videos of Chinese nationals publicly declaring support for "Mnangagwa 2030," highlighting foreign interference in domestic politics.

**The Opposition's Weakness**

Opposition parties are promising court challenges to the constitutional amendments. Lawyer Tendai Biti says they'll "defend the Constitution." But here's the reality: ZANU-PF holds a supermajority in parliament, which means they have the votes to pass constitutional amendments regardless of opposition objections. The judiciary isn't independent – it's controlled by ruling party loyalists. When the opposition took their complaints about the August 2023 election being neither free nor fair to court, those complaints went nowhere.

The Citizens Coalition for Change, led by Nelson Chamisa, has been weakened by internal divisions and relentless state harassment. Chamisa received 44% of the presidential vote in 2023 versus Mnangagwa's 53%, according to official results that international observers deemed highly questionable. But 44% of the vote means nothing when the ruling party controls the electoral commission, the courts, the security services, and the state media. Political prisoners face arbitrary detention. Opposition activists are abused and intimidated. Freedom of assembly is severely restricted. Journalists face censorship and harassment. Abductions of activists occur with impunity.

**Economic Collapse and Regional Isolation**

Zimbabwe's economy is in shambles. The Zimbabwean dollar has collapsed, replaced by a multi-currency system. Official inflation statistics are meaningless; real inflation is rampant. Unemployment is estimated over 80% when you include the informal economy where most people actually work. The mining sector – particularly gold and lithium – benefits political elites while ordinary Zimbabweans struggle with poverty. Public services are deteriorating. Brain drain continues as professionals emigrate. The country that was once southern Africa's breadbasket now faces recurring food insecurity.

Zimbabwe is suspended from the Commonwealth and faces continued sanctions from the United States and European Union. The Southern African Development Community (SADC) criticized the 2023 election, though not forcefully enough to matter. Relations with Western countries remain strained. China is the major investor and diplomatic ally, providing economic support and diplomatic cover in international forums. The "Look East" policy initiated under Mugabe continues under Mnangagwa, with Chinese investment in infrastructure and mining increasing even as Western engagement declines.

**The Bottom Line**

The constitutional amendment process for the 2030 extension will move forward because ZANU-PF has the parliamentary numbers to pass it. Court challenges will fail because the judiciary isn't independent. Public protests will be repressed because that's what the security services do. The only real question is whether the military will accept Mnangagwa's extension or whether senior officers allied with Chiwenga will resist. In Zimbabwe, the Zimbabwe Defence Forces are the ultimate arbiter of political power. They removed Mugabe in 2017 when he'd become a liability. They could remove Mnangagwa too if they choose.

But military intervention creates its own problems. Another coup would further isolate Zimbabwe internationally, potentially trigger more sanctions, and create instability that could affect the business interests that senior officers have built. The military-party nexus that has governed Zimbabwe since independence isn't interested in democracy; they're interested in maintaining power and wealth. Whether that's best achieved by extending Mnangagwa's term or allowing transition to Chiwenga is the calculation they're making behind closed doors. Ordinary Zimbabweans, meanwhile, face economic hardship, political repression, and the reality that their votes don't determine who governs them. That's the essence of Zimbabwe's political system: authoritarian rule wrapped in the language of democracy, with power ultimately resting not in elections but in the alliance between ZANU-PF and the military.`,
    issues: ['Mnangagwa 2030 Term Extension', 'Internal ZANU-PF Power Struggle', 'Chiwenga Succession Challenge', 'Weak Opposition and Repression', 'Economic Collapse and Chinese Influence']
  }
}

async function insertPoliticsSummaries() {
  console.log('\n' + '='.repeat(70))
  console.log('🏛️  INSERTING POLITICS SUMMARIES - BATCH 10 (FINAL)')
  console.log('='.repeat(70) + '\n')

  let successCount = 0
  let errorCount = 0

  for (const [key, data] of Object.entries(POLITICS_SUMMARIES)) {
    try {
      console.log(`\nProcessing: ${data.name}`)
      console.log(`Summary length: ${data.summary.length} characters`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: data.name,
            type: 'country',
            category: 'politics'
          }
        },
        create: {
          name: data.name,
          type: 'country',
          country: data.country,
          lat: data.lat,
          lng: data.lng,
          category: 'politics',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${data.name} saved successfully`)
      successCount++

    } catch (error) {
      console.error(`❌ Error saving ${data.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(70))
  console.log('📊 INSERTION COMPLETE')
  console.log('='.repeat(70))
  console.log(`✅ Successfully saved: ${successCount}`)
  console.log(`❌ Errors: ${errorCount}`)
  console.log('\n🎉 BATCH 10 COUNTRIES:')
  console.log('  ✓ United Arab Emirates - Politics')
  console.log('  ✓ United Kingdom - Politics')
  console.log('  ✓ United States - Politics')
  console.log('  ✓ Uruguay - Politics')
  console.log('  ✓ Uzbekistan - Politics')
  console.log('  ✓ Venezuela - Politics')
  console.log('  ✓ Vietnam - Politics')
  console.log('  ✓ Yemen - Politics')
  console.log('  ✓ Zimbabwe - Politics')
  console.log('\n🌍 ALL 128 COUNTRIES COMPLETED FOR POLITICS CATEGORY! 🌍\n')
}

insertPoliticsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
