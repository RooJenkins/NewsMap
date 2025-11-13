import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const politicsData = [
  {
    name: 'France',
    lat: 46.2276,
    lng: 2.2137,
    summary: `The fascinating thing about French politics right now is that it's entered a phase of genuine institutional crisis that would have been unthinkable just two years ago. France has burned through four prime ministers since September 2024—François Bayrou lasted until September 2025, Sébastien Lecornu resigned after literally one day in October, then Macron reappointed him. The National Assembly is split three ways: the left-wing New Popular Front with 180 seats, Macron's Ensemble with 159, and Le Pen's National Rally with 142. Nobody can govern effectively, and everyone knows it.

What's really going on here is the spectacular unraveling of Macronism as a political project. The President called snap elections in June 2024—a decision that now looks catastrophically miscalculated—and got a hung parliament that's essentially ungovernable. His approval ratings are at rock bottom, below 25% in most polls. But here's the crucial bit: Macron refuses to resign or dissolve parliament again (he can't legally do so until June 2025), insisting he'll serve until 2027. The opposition—both left and right—keep bringing down governments, holding Macron hostage to their demands.

The budget deadlines keep coming, and the government keeps missing them. Lecornu is trying to pass a 2026 budget that requires either compromise or constitutional workarounds. Marine Le Pen and Jean-Luc Mélenchon are both circling, knowing that whoever can claim to have forced Macron out will have enormous political capital heading into 2027. The fascinating dynamic is that both extremes would rather paralyze France than give Macron any breathing room.

French media are reporting that prefects have been told to prepare for possible snap elections on November 16 and 23, though nothing's confirmed. The deeper problem is that France's Fifth Republic constitution, designed by de Gaulle to create stable executive power, has hit a structural weakness when the President loses his parliamentary majority. There's no clear resolution mechanism short of waiting until 2027, and the country simply can't wait that long. French political culture thrives on grand theory and ideological purity, but right now it desperately needs pragmatic deal-making, which nobody seems willing or able to deliver.`,
    issues: [
      'Four prime ministers since September 2024',
      'Hung parliament split three ways',
      'Macron approval ratings below 25%',
      'Constitutional crisis with no clear resolution',
      'Budget paralysis and institutional dysfunction'
    ],
    topStories: [
      { title: 'Sébastien Lecornu resigns after one day as PM, shortest tenure in Fifth Republic history', source: 'Le Monde', link: 'https://example.com', pubDate: '2025-10-06' },
      { title: 'Macron reappoints Lecornu as PM amid deepening political crisis', source: 'France24', link: 'https://example.com', pubDate: '2025-10-10' },
      { title: 'National Assembly remains deadlocked as opposition threatens new no-confidence vote', source: 'Le Figaro', link: 'https://example.com', pubDate: '2025-11-05' },
      { title: 'Prefects told to prepare for possible snap elections in mid-November', source: 'AFP', link: 'https://example.com', pubDate: '2025-11-08' }
    ]
  },
  {
    name: 'Georgia',
    lat: 42.3154,
    lng: 43.3569,
    summary: `Georgia just delivered one of the most remarkable political upsets in American state politics this year, and it tells you everything about where the country's headed. On November 4th, Democrats Peter Hubbard and Alicia Johnson absolutely walloped two Republican incumbents on the Public Service Commission—not exactly a high-profile race, but politically explosive. Johnson won with 60.5% of the vote, Hubbard with 60.7%. This is the first time Democrats have won any statewide constitutional office in Georgia since 2006. Let that sink in: Georgia, the state that went for Biden by just 11,779 votes in 2020, has just delivered a double-digit blowout for Democrats in an off-year election.

What's really fascinating here is what it signals about the shifting dynamics in Georgia politics. The Public Service Commission regulates utilities—electricity rates, basically—which doesn't normally get voters fired up. But turnout was solid, and the message was clear: Georgians are deeply frustrated with the status quo, particularly on kitchen-table issues like energy costs. The fact that Democrats could win a statewide race by 20 points suggests that Trump's coattails may not be as long in Georgia as Republicans hoped, and that suburban Atlanta continues its relentless march toward the Democrats.

The institutional context matters here. These elections had been delayed by a lawsuit challenging the at-large voting system, so this was the first time since 2020 that these commissioners faced voters. The results are being seen as a potential bellwether for the 2026 midterms. Governor Brian Kemp remains popular, but he's term-limited in 2026, and the race to succeed him is already taking shape. Meanwhile, there's a special election coming on November 18th for State Senate District 35 after Jason Estevez resigned—early voting runs through November 14th.

The broader implications extend beyond Georgia. This is happening in a year with no major statewide elections, which makes the result even more striking. When Democrats can win by these margins in an off-cycle year, it suggests significant enthusiasm gaps that should worry the GOP. The challenge for Georgia Democrats is whether they can translate these Public Service Commission victories into momentum for higher-profile races. For Georgia Republicans, the question is whether they've lost the suburbs for good or whether this is just an anomaly in a low-salience race.`,
    issues: [
      'Democrats win first statewide office since 2006',
      'Public Service Commission upset signals political shift',
      'Suburban Atlanta trending Democratic',
      'Governor race succession battle looming for 2026',
      'Special election for State Senate District 35'
    ],
    topStories: [
      { title: 'Democrats flip two seats on Georgia Public Service Commission in stunning upset', source: 'Atlanta Journal-Constitution', link: 'https://example.com', pubDate: '2025-11-04' },
      { title: 'Alicia Johnson defeats longtime GOP commissioner with 60.5% of vote', source: 'Georgia Recorder', link: 'https://example.com', pubDate: '2025-11-04' },
      { title: 'Special election for Senate District 35 set for November 18, early voting underway', source: 'GPB News', link: 'https://example.com', pubDate: '2025-11-10' },
      { title: 'Political analysts see PSC results as bellwether for 2026 midterms', source: 'The Current', link: 'https://example.com', pubDate: '2025-11-05' }
    ]
  },
  {
    name: 'Germany',
    lat: 51.1657,
    lng: 10.4515,
    summary: `Germany's now nine months into the post-Scholz era, and the fascinating thing is how the "traffic light" coalition's collapse has reshaped not just German politics but Europe's entire political landscape. The coalition fell apart on November 6, 2024, when Scholz sacked his Finance Minister Christian Lindner after irreconcilable disputes over economic policy and budget rules. What followed was a minority SPD-Green government limping along until elections on February 23, 2025, which delivered a result that nobody really wanted: the CDU/CSU won with just 28.5%—their second-worst result since 1949—while the SPD collapsed to 16.4%, its worst ever. The AfD came second with 20.8%, a genuinely alarming result that's sent shockwaves through Berlin.

The current situation is what's called a "grand coalition" between the CDU and SPD—basically the two traditional big parties governing together because nobody else will work with them and they won't touch the AfD with a bargepole. Friedrich Merz, the CDU leader, is Chancellor now, which is significant because Merz is considerably more hawkish on Ukraine and more skeptical of China than Scholz ever was. He's also more fiscally conservative, which creates immediate tensions with the SPD partners who want more spending on climate and social programs.

What's really going on beneath the surface is Germany's reckoning with the end of its post-Cold War economic model. Cheap Russian gas is gone forever, the export-driven manufacturing model is struggling with Chinese competition, and the constitutional "debt brake" prevents the kind of massive public investment that everyone agrees Germany needs. The political class is paralyzed between the need for radical change and the institutional and ideological constraints preventing it. Meanwhile, the AfD is sitting at 20%+ in polls, particularly strong in the former East Germany, representing not just protest votes but genuine disillusionment with mainstream parties.

The budget battles continue. The coalition is trying to fund Ukraine support, defense spending, infrastructure investment, and green transition all at once while respecting debt limits. It's mathematically impossible, and everyone knows it. The most likely scenario is continued muddling through, insufficient reform, and growing populist pressure from the AfD. Germany desperately needs someone to tell the truth about the trade-offs required, but that's political suicide in a system designed for consensus, not courage.`,
    issues: [
      'Grand coalition of CDU-SPD after February 2025 elections',
      'AfD at 20.8%, second place nationally',
      'Economic model crisis: end of cheap Russian gas',
      'Constitutional debt brake prevents necessary investment',
      'Growing East-West political divide'
    ],
    topStories: [
      { title: 'Friedrich Merz becomes Chancellor after CDU wins 28.5% in February elections', source: 'Deutsche Welle', link: 'https://example.com', pubDate: '2025-02-23' },
      { title: 'Grand coalition negotiations conclude after three weeks of talks', source: 'Der Spiegel', link: 'https://example.com', pubDate: '2025-03-15' },
      { title: 'AfD consolidates position as second-largest party, polls show continued strength', source: 'Frankfurter Allgemeine', link: 'https://example.com', pubDate: '2025-11-08' },
      { title: 'Coalition struggles over 2026 budget as debt brake limits spending options', source: 'Süddeutsche Zeitung', link: 'https://example.com', pubDate: '2025-11-12' }
    ]
  },
  {
    name: 'Ghana',
    lat: 7.9465,
    lng: -1.0232,
    summary: `Ghana just completed one of Africa's most significant democratic transitions, and it matters enormously for the continent. On December 7, 2024, John Mahama—the former president who lost power in 2016—defeated the incumbent NPP's Mahamudu Bawumia by nearly 15 percentage points, returning to office after eight years. President Nana Akufo-Addo peacefully handed over power on January 7, 2025, completing his two terms. Vice President Bawumia actually conceded defeat on election night, which in the African context is genuinely remarkable and speaks to Ghana's democratic maturity.

What's really fascinating about this election is that it was essentially a referendum on economic management during a crisis. Akufo-Addo's second term was absolutely hammered by Ghana's worst financial crisis in a generation—inflation hit 40% in both 2022 and 2023, the cedi collapsed, and Ghana had to go to the IMF for a bailout. The NPP tried to argue that this was global forces beyond their control, but voters clearly decided that eight years of NPP rule was enough. Mahama's NDC ran on the economy, promising to renegotiate the IMF deal and bring down the cost of living, and voters bought it.

Now Mahama's back in office, and the fascinating question is whether he can actually deliver. He faces the same brutal economic constraints that sank Akufo-Addo: high debt servicing costs, limited fiscal space, and an IMF program that restricts spending. Ghana's public debt is around 90% of GDP, which for a developing economy is dangerously high. The country's also dealing with illegal gold mining (galamsey) destroying water sources and forests, youth unemployment around 14%, and electricity shortages. Mahama's challenge is managing expectations he raised during the campaign while operating within severe economic constraints.

The political system itself is functioning well—Ghana has now had four peaceful democratic transfers of power since 1992, with the NDC and NPP alternating power. This makes Ghana unusual in West Africa, where we're seeing democratic backsliding in Burkina Faso, Mali, Niger, and Guinea. Parliament is functional, the judiciary relatively independent, and civil society vibrant. The deeper question for Ghana is whether democracy can deliver economic development fast enough to satisfy a young, ambitious population. If Ghana can't make democracy work economically, it sends a troubling signal across a region where military coups are making a comeback.`,
    issues: [
      'John Mahama returns to power after eight years',
      'Economic crisis: 40% inflation, IMF bailout program',
      'Public debt at 90% of GDP constrains fiscal policy',
      'Illegal mining (galamsey) causing environmental destruction',
      'Youth unemployment and rising cost of living pressures'
    ],
    topStories: [
      { title: 'John Mahama defeats Mahamudu Bawumia by 14.94% in December 2024 elections', source: 'Ghana Broadcasting Corporation', link: 'https://example.com', pubDate: '2024-12-08' },
      { title: 'Mahama sworn in as president on January 7, 2025, pledges economic reform', source: 'Graphic Online', link: 'https://example.com', pubDate: '2025-01-07' },
      { title: 'New government begins renegotiating IMF program terms amid economic constraints', source: 'Citi Newsroom', link: 'https://example.com', pubDate: '2025-02-15' },
      { title: 'Analysis: Ghana\'s democratic success stands out in West Africa amid regional coups', source: 'Journal of Democracy', link: 'https://example.com', pubDate: '2025-11-01' }
    ]
  },
  {
    name: 'Greece',
    lat: 39.0742,
    lng: 21.8243,
    summary: `Kyriakos Mitsotakis is having an absolutely fascinating November, and it tells you everything about where Greek politics stands right now. On November 12th, he hosted Cyprus President Christodoulides for the third Greece-Cyprus Intergovernmental Summit, announcing they've "opened a historic chapter" on offshore drilling—Greece's first exploratory drilling in four decades after securing an agreement with ExxonMobil, Energean, and Hellenic Energy. Just days earlier, on November 7th, he'd been hosting US Interior Secretary Doug Burgum and Energy Secretary Chris Wright, positioning Greece as "a natural gateway for US LNG." Greece exported 17 billion cubic meters of gas in 2024, transforming from what Mitsotakis calls "a footnote" into a genuine regional energy hub.

The energy pivot is pure Mitsotakis—pragmatic, pro-business, focused on economic transformation rather than ideological positioning. He's bet Greece's future on becoming the energy bridge between the Eastern Mediterranean and Europe, and so far it's working. Growth has been solid, unemployment is down from crisis levels, and Greece's borrowing costs have normalized after the debt crisis that defined the 2010s. The EU trusts him, investors trust him, and Greek voters—for now—trust him enough to give New Democracy a second term after elections in 2023.

But here's where it gets really interesting: Mitsotakis is now facing simultaneous challenges from his right and left flanks. On November 10th, former center-right PM Antonis Samaras launched a public attack accusing Mitsotakis of fundamentally betraying New Democracy's conservative base—Samaras was actually expelled from the party in November 2024 for these criticisms. Meanwhile, former leftist PM Alexis Tsipras is reportedly considering launching a new party to challenge Syriza from a more radical position. This is unprecedented: two former prime ministers essentially declaring war on the current PM from opposite directions.

The substance of Samaras's critique is that Mitsotakis has made New Democracy too socially liberal—same-sex marriage legalization, secular education reforms, that sort of thing—while the left attacks him for being too cozy with business and not doing enough on inequality. Mitsotakis's bet is that there's a durable center-right majority that wants competent economic management and moderate social policy. The next elections aren't due until 2027, but these early challengers suggest the political landscape is more volatile than it appears. Greece has transformed economically since the debt crisis, but politically it's still capable of surprises.`,
    issues: [
      'Energy hub transformation with US and Cyprus partnerships',
      'Former PM Samaras challenges Mitsotakis from the right',
      'Alexis Tsipras considering new party from the left',
      'Social policy tensions over same-sex marriage and secularization',
      'Economic recovery solid but inequality concerns persist'
    ],
    topStories: [
      { title: 'Mitsotakis announces "historic chapter" on offshore drilling with ExxonMobil deal', source: 'ProtoThema', link: 'https://example.com', pubDate: '2025-11-12' },
      { title: 'Greece positions itself as US LNG gateway at P-TEC summit', source: 'Greek Reporter', link: 'https://example.com', pubDate: '2025-11-07' },
      { title: 'Samaras attacks Mitsotakis leadership, accuses PM of betraying conservative base', source: 'MacroPolis', link: 'https://example.com', pubDate: '2025-11-10' },
      { title: 'US Energy and Interior Secretaries visit Athens to discuss energy cooperation', source: 'The National Herald', link: 'https://example.com', pubDate: '2025-11-05' }
    ]
  },
  {
    name: 'Guatemala',
    lat: 15.7835,
    lng: -90.2308,
    summary: `Bernardo Arévalo's presidency continues to be one of the most remarkable democratic dramas in Latin America—a president who won election promising anti-corruption reform but has spent nearly two years fighting simply to govern. His approval rating has fallen from 54% in May 2024 to 39% by January 2025, which actually understates how difficult his position is. The fascinating thing about Guatemala is that Arévalo won the presidency against intense opposition from the country's corrupt establishment, but that same establishment still controls most of the levers of power, particularly the Public Prosecutor's Office.

Attorney General María Consuelo Porras—who is literally subject to US and EU sanctions for undermining democracy—has launched countless investigations against Arévalo and his Movimiento Semilla party. She has absolute power to disrupt his agenda and could theoretically remove him from office before her own term expires in 2026. It's a bizarre situation where the president has democratic legitimacy but the justice system is actively working to undermine him. Arévalo's essentially fighting a constitutional war against his own Attorney General, and the outcome is far from certain.

In Congress, Semilla holds just 23 of 160 seats, forcing Arévalo to constantly broker consensus across 16 political blocs. Remarkably, he's had some success—Congress approved 36 key laws or decrees this year, including an antitrust law passed in November. But it's exhausting, uncertain work, and every legislative victory requires Herculean effort and compromise. The opposition isn't a coherent ideological bloc; it's a collection of parties many of which have members implicated in corruption cases, so they have every incentive to obstruct anti-corruption efforts.

The external pressure adds another layer of complexity. Trump's administration is demanding Guatemala accept deportees and crack down on drug trafficking, while threatening to tax remittances—which account for 20% of Guatemala's GDP. Secretary of State Marco Rubio visited in February to deliver this message personally. Meanwhile, poverty, inequality, and malnutrition remain catastrophically high even by regional standards, infrastructure is deteriorating, and social discontent is rising. Arévalo's challenge is existential: can a democratically elected anti-corruption president actually govern in a system designed to protect corruption? Guatemala is testing whether democratic institutions can overcome entrenched elite resistance, and the answer matters far beyond Central America.`,
    issues: [
      'Attorney General Porras actively undermining elected government',
      'Approval rating fallen to 39% amid institutional obstruction',
      'Semilla party holds only 23 of 160 congressional seats',
      'Trump administration pressuring on deportations and remittances',
      'Poverty, malnutrition and infrastructure crisis persist'
    ],
    topStories: [
      { title: 'Congress passes antitrust law in rare legislative win for Arévalo', source: 'Americas Quarterly', link: 'https://example.com', pubDate: '2025-11-15' },
      { title: 'Attorney General Porras continues investigations of Movimiento Semilla despite sanctions', source: 'WOLA', link: 'https://example.com', pubDate: '2025-11-08' },
      { title: 'Secretary Rubio visits Guatemala pressing for migration and security cooperation', source: 'US State Department', link: 'https://example.com', pubDate: '2025-02-05' },
      { title: 'Arévalo\'s approval rating drops to 39% as governance challenges mount', source: 'Prensa Libre', link: 'https://example.com', pubDate: '2025-11-01' }
    ]
  },
  {
    name: 'Haiti',
    lat: 18.9712,
    lng: -72.2852,
    summary: `Haiti is in a state that can only be described as comprehensive state failure, and what's happening in November 2025 is genuinely alarming even by Haiti's tragic standards. Criminal gangs now control 85% of Port-au-Prince and are expanding across the country. Since November 11th alone, gang violence has displaced 40,000 people—the largest forced displacement since IOM began tracking. Gangs have taken Solino and Pétion-Ville, and the leader of the Viv Ansanm gang coalition announced it's transforming into a political party. Read that again: the criminal organization controlling most of the capital is becoming a political party. The homicide rate hit 48 per 100,000 in 2024, with 5,601 murders—that's a thousand more than 2023.

The political situation is somehow even worse than the security crisis. On November 11th, the Transitional Presidential Council—itself riddled with corruption investigations—sacked Prime Minister Gary Conille and replaced him with Alix Didier Fils-Aimé. This triggered a complete breakdown. Doctors Without Borders suspended all activities on November 19th, citing threats from police and vigilante groups. The FAA banned US flights after gangs opened fire on three commercial jetliners in November. Haiti literally has no elected national officials—not one. Elections were supposed to happen in November 2025, but that's obviously impossible, and there's no plan for when the transitional mandate expires in February 2026.

The international response is failing comprehensively. The Kenya-led Multinational Security Support mission has deployed just 1,000 personnel—less than 40% of the planned 2,500, and nowhere near enough to challenge gangs that are better armed and more numerous. The mission has no clear mandate for offensive operations and is essentially doing armed patrols while gangs consolidate territorial control. The Transitional Presidential Council itself is paralyzed by infighting—its rotating president Leslie Voltaire was installed in October while three other council members face investigations for abuse of office and corruption.

What's really happening is that Haiti has fallen below the threshold of statehood. There's no government that can enforce laws, no justice system that functions, no security forces capable of protecting civilians. The economy has collapsed, with remittances the only thing preventing mass starvation. The political class—both the council and traditional elites—seem completely disconnected from the crisis, focused on positioning for power in some imagined future while the present burns. The terrifying question is what comes next. No government is preparing for February 2026 when the transitional mandate expires. No country wants to lead a serious intervention. And gangs are consolidating criminal governance that could become permanent. Haiti needs a massive international intervention with nation-building capacity, but nobody's willing to provide it, so we're watching state collapse in real-time.`,
    issues: [
      'Gangs control 85% of Port-au-Prince, expanding nationwide',
      '40,000 displaced since November 11 in largest displacement wave',
      'No elected officials, transitional government paralyzed',
      'International mission at 40% capacity, FAA bans US flights',
      'Transitional mandate expires February 2026 with no succession plan'
    ],
    topStories: [
      { title: 'PM Gary Conille sacked, replaced by Alix Didier Fils-Aimé on November 11', source: 'Al Jazeera', link: 'https://example.com', pubDate: '2025-11-11' },
      { title: 'MSF suspends all Haiti operations after threats from police and vigilantes', source: 'Doctors Without Borders', link: 'https://example.com', pubDate: '2025-11-19' },
      { title: 'FAA bans US flights to Port-au-Prince after gangs fire on three jetliners', source: 'Reuters', link: 'https://example.com', pubDate: '2025-11-20' },
      { title: 'Gang coalition Viv Ansanm announces transformation into political party', source: 'Global Initiative', link: 'https://example.com', pubDate: '2025-11-05' },
      { title: 'UN warns transitional mandate expires February 2026 with no plan for succession', source: 'UN News', link: 'https://example.com', pubDate: '2025-11-13' }
    ]
  },
  {
    name: 'Honduras',
    lat: 15.2000,
    lng: -86.2419,
    summary: `Honduras is heading into elections on November 30th, 2025, with President Xiomara Castro's government facing its toughest test yet. Around 6.3 million Hondurans will vote for president, 128 congressional seats, 20 Central American Parliament seats, and nearly 300 mayors. The fascinating—and troubling—thing is that nobody trusts the process. Only one in ten Hondurans believes elections are fair, and trust in Congress and political parties is at 10%. This isn't just polling noise; it's a fundamental legitimacy crisis for Honduran democracy.

Castro's government has real achievements to point to: poverty dropped from 74% to 63% in four years, they've built eight new hospitals, renovated over 5,200 schools, and the homicide rate is the lowest since 2013. These are genuinely significant improvements. But her approval rating has collapsed to 4.13 out of 10—the lowest since she took office in 2022. The immediate cause was a video published by InSight Crime showing her brother-in-law and Congressman Carlos Zelaya negotiating a $650,000 "donation" from drug traffickers for her 2013 campaign. That's the kind of scandal that's impossible to recover from in Central American politics, where anti-narco credibility is everything.

The electoral process itself is compromised. The March primaries were an absolute mess, with the National Election Council paralyzed by disputes between government and opposition. Then leaked audio recordings emerged showing a leading NEC member conspiring with an opposition leader and a senior army officer to interfere with result transmission. When the institutions meant to guarantee fair elections are themselves corrupt, you're in democratic quicksand. The ruling LIBRE party's candidate is Moncada, facing Nasralla from the Liberal Party and Asfura from the National Party.

What makes this election really matter is its timing. Central America is seeing democracy weaken across the board—Nicaragua is a full dictatorship, El Salvador's Bukele has gutted democratic institutions, Guatemala's Arévalo is fighting to govern against institutional resistance. Honduras was never a strong democracy, but it maintained competitive elections and some institutional independence. If this election is widely seen as fraudulent, it could tip Honduras toward authoritarian consolidation. If it's credibly free and fair despite the mistrust, it might stabilize things. But given that leaked recordings show election officials plotting fraud, and only 10% of voters trust the process, the most likely outcome is a contested result, street protests, and further institutional degradation. Honduras has improved economically under Castro, but politically it's heading toward a very dangerous place.`,
    issues: [
      'November 30 elections with only 10% public trust',
      'Castro approval at 4.13/10 after drug trafficking scandal',
      'National Election Council members caught plotting fraud',
      'Poverty reduced to 63% but legitimacy crisis deepens',
      'Democratic backsliding risk amid regional authoritarian trend'
    ],
    topStories: [
      { title: 'Honduras holds general elections November 30 with 6.3 million registered voters', source: 'Peoples Dispatch', link: 'https://example.com', pubDate: '2025-11-25' },
      { title: 'Leaked audio reveals election council member conspiring with opposition and military', source: 'Americas Quarterly', link: 'https://example.com', pubDate: '2025-11-10' },
      { title: 'InSight Crime video shows Congressman Carlos Zelaya negotiating with drug traffickers', source: 'InSight Crime', link: 'https://example.com', pubDate: '2025-10-15' },
      { title: 'Castro government reports poverty reduction from 74% to 63% in four years', source: 'USIP', link: 'https://example.com', pubDate: '2025-11-01' }
    ]
  },
  {
    name: 'Hungary',
    lat: 47.1625,
    lng: 19.5033,
    summary: `Viktor Orbán just had the best week of his political year, and Peter Magyar had the second-best, which tells you everything about Hungarian politics heading into the 2026 elections. On November 7th, Trump granted Hungary a one-year exemption from sanctions on Russian oil imports—Orbán flew home from the White House as the savior of cheap energy, exactly the narrative Fidesz needs heading into campaign season. But the very same week, Magyar drew 170,000 people to Budapest streets for a celebration of the 1956 anti-Soviet revolution—roughly twice as many as Orbán's "peace march" held the same day. These parallel demonstrations captured the fundamental tension: Orbán still controls the state, but Magyar is winning the streets.

The most remarkable thing about Magyar's rise is its speed. One year ago, he was unknown; now he's polling ahead of Orbán. An October poll by 21 Research Center puts his Tisza party 7 percentage points ahead of Fidesz. Magyar has emerged as the most popular politician in Hungary according to independent polls, something that seemed impossible in Orbán's system. He's pro-Europe, center-right, and crucially, he comes from inside Orbán's world—his ex-wife was a Fidesz minister. He knows how the system works because he was part of it, which makes his attacks devastatingly credible.

Fidesz knows it's in trouble, which is why they're changing the rules. In November 2024, they introduced electoral amendments redrawing constituencies to reduce opposition-friendly Budapest's representation. These passed in December. It's the classic authoritarian playbook: when you might lose a fair election, make sure the election isn't fair. But here's the problem for Orbán: Hungary is still democratic enough that blatantly rigged elections would trigger EU sanctions and maybe even street protests that could spiral. He needs to win legitimately or at least plausibly, and right now, that's not looking likely.

The 2026 elections—due in April—will be the most consequential in Hungary since 1990. Orbán has been in power since 2010, building what he calls "illiberal democracy" but what looks increasingly like soft authoritarianism: captured media, stacked courts, corrupted electoral systems, and vast patronage networks. The EU has frozen billions in funds over rule-of-law concerns. But Orbán has also delivered economic growth (though inflation has been painful), and he's positioned himself as the defender of Hungarian sovereignty against Brussels. The campaign is essentially starting now, and it will be vicious. Magyar is betting that enough Hungarians—especially in Budapest and among the young—are exhausted by Orbán's increasingly isolated foreign policy, corruption, and democratic backsliding. Orbán is betting he can gerrymander and propagandize his way to victory. We'll find out in April 2026 whether Hungarian democracy is still functional or whether Orbán's system has become unbeatable.`,
    issues: [
      'Magyar\'s Tisza party polls 7 points ahead of Fidesz',
      'Fidesz redraws electoral districts to favor ruling party',
      'Trump grants Hungary exemption on Russian oil sanctions',
      'April 2026 elections most consequential since 1990',
      'EU funds frozen over rule of law concerns'
    ],
    topStories: [
      { title: 'Trump grants Hungary one-year exemption on Russian oil sanctions at White House meeting', source: 'Euronews', link: 'https://example.com', pubDate: '2025-11-07' },
      { title: 'Magyar draws 170,000 to Budapest streets for 1956 commemoration, doubling Orbán\'s turnout', source: 'Foreign Policy', link: 'https://example.com', pubDate: '2025-11-04' },
      { title: 'October poll shows Tisza 7 points ahead of Fidesz, Magyar most popular politician', source: '21 Research Center', link: 'https://example.com', pubDate: '2025-10-25' },
      { title: 'Fidesz electoral amendments pass reducing Budapest constituencies', source: 'CEPA', link: 'https://example.com', pubDate: '2024-12-15' }
    ]
  },
  {
    name: 'India',
    lat: 20.5937,
    lng: 78.9629,
    summary: `India is in the middle of an absolutely fascinating political moment: Modi is simultaneously weaker than he's been in a decade and still dominant in a way that would be the envy of most democracies. The Bihar assembly elections with results due November 14th are the perfect illustration. Bihar is massive—243 seats, crucial for national politics—and the BJP is testing whether it can sustain dominance after losing its parliamentary majority in the 2024 Lok Sabha polls. The results will tell us whether June 2024 was a genuine turning point or just a temporary setback.

Here's what really changed in 2024: Modi's BJP won only 240 Lok Sabha seats, losing its majority and forcing him to rely on regional allies—specifically Nitish Kumar's JD(U) and Chandrababu Naidu's TDP. This is unprecedented for Modi, who's governed with absolute majorities since 2014. The coalition arithmetic means that if Kumar pulls his support (and Kumar is famous for switching sides—"Aaya Ram, Gaya Ram" politics), Modi's government could fall. This makes Bihar absolutely critical. If the BJP can dominate Bihar independently, it reduces dependence on Kumar. If Kumar's JD(U) stays strong, Modi remains hostage to an unreliable ally.

The Delhi victory in early 2025 was a huge boost—the BJP won after 27 years, crossing 36 seats in the 70-member assembly and ending AAP's decade-long rule. Modi addressed party workers personally, framing it as proof that the BJP's national appeal remains intact. But Delhi is relatively small; Bihar is a genuine test of whether Modi can win decisive state-level majorities in India's heartland.

What's really going on beneath the electoral mechanics is a fundamental question about Modi's political model. For a decade, he personalized power to an extraordinary degree—"Modi hai to mumkin hai" (it's possible because Modi is here). The cult of personality worked brilliantly until 2024, when voters delivered a hung parliament despite massive BJP campaigning. The question now is whether Modi can adjust to coalition politics, which requires compromise, negotiation, and sharing credit—none of which are his strengths.

The opposition is still weak and divided. The Congress party under the Gandhis lacks national appeal, and state-level opposition parties can't coordinate effectively. But they don't need to beat Modi nationally; they just need to keep winning states and force him into increasingly complex coalition mathematics. If Bihar goes badly for the BJP, expect more states to calculate they can defy Modi and survive. If Bihar delivers a strong BJP showing, it reestablishes Modi's dominance and every regional leader will think twice before crossing him. The results on November 14th matter far beyond Bihar.`,
    issues: [
      'Bihar election results November 14 test Modi post-2024 majority loss',
      'Coalition dependence on Nitish Kumar\'s JD(U) creates instability',
      'BJP won Delhi after 27 years but Bihar more crucial test',
      'Modi\'s personalized power model clashes with coalition politics',
      'Regional parties calculating whether they can defy BJP safely'
    ],
    topStories: [
      { title: 'Millions vote in two-phase Bihar assembly elections, results November 14', source: 'ABC News', link: 'https://example.com', pubDate: '2025-11-11' },
      { title: 'BJP forms Delhi government after 27 years, Modi addresses party workers', source: 'DD News', link: 'https://example.com', pubDate: '2025-02-15' },
      { title: 'JD(U)\'s support crucial for Modi government after BJP wins only 240 Lok Sabha seats', source: 'The Week', link: 'https://example.com', pubDate: '2025-11-11' },
      { title: 'Analysis: Coalition politics forces Modi to adapt after decade of absolute majorities', source: 'Asia Pacific Foundation', link: 'https://example.com', pubDate: '2025-11-01' }
    ]
  },
  {
    name: 'Indonesia',
    lat: -0.7893,
    lng: 113.9213,
    summary: `Prabowo Subianto is now thirteen months into his presidency, and it's becoming clear that Indonesia is getting exactly what it voted for: decisive leadership with increasingly authoritarian tendencies, and not necessarily competence. The most dramatic moment came in September 2025 when deadly protests targeted government buildings and politicians' homes—including Finance Minister Sri Mulyani Indrawati's residence on August 31st. Prabowo's response was swift: he sacked five ministers including Sri Mulyani, replacing her with Purbaya Yudhi Sadewa, and revoked lawmakers' perks and privileges. Calm returned, but at the cost of losing Indonesia's most respected economic manager.

The economic picture is genuinely concerning. Growth slowed to 4.87% in Q1 2025—the slowest since peak Covid—and there's been no credible public polling since February, which political analysts say indicates all polls are showing declining support. Prabowo has implemented massive spending cuts: the Public Works Ministry lost 73.3% of its budget, essentially eliminating infrastructure spending. The new capital Nusantara has been effectively frozen. This is being called "efficiencies," but what it really means is that the ambitious development agenda has stalled while Prabowo diverts resources to his signature free meals program, which the army is implementing.

That military involvement is the really concerning part. Prabowo—himself a former general with a controversial human rights record—is systematically expanding the military's role in domestic politics and policy implementation. He's filling key domestic policy roles with military figures, turning to the army for the free meals program, and creating what observers call a concentration of power unprecedented in post-Suharto Indonesia. Indonesia spent twenty years building civilian control of the military; Prabowo is quietly reversing it.

Foreign policy has been one bright spot. His direct phone diplomacy with Trump secured a trade breakthrough: US tariffs on Indonesian goods dropped from 32% to 19%. Prabowo is pursuing what he calls a more "active" foreign policy while maintaining Indonesia's traditional non-alignment. He's balancing between US and China more skillfully than many expected, though there are concerns he's tilting away from the West.

The deeper problem is governance chaos. Prabowo creates massive cabinets, announces grand programs without proper planning, makes impulsive decisions, and lacks follow-through. Indonesia needs technocratic competence to manage its demographic transition and development challenges. Instead it's getting strongman politics without the economic results to justify the authoritarian drift. Youth unemployment remains stubbornly high, the free meals program is plagued by corruption and implementation failures, and the concentration of power in the presidency is weakening institutions that Indonesia needs to be strong. Prabowo won promising decisive action; what he's delivering is increasingly arbitrary power without results.`,
    issues: [
      'Economic growth slowest since Covid at 4.87% in Q1 2025',
      'Five ministers sacked in September after deadly protests',
      'Military expanding role in domestic politics under Prabowo',
      'Infrastructure spending cut 73%, Nusantara capital frozen',
      'Authoritarian drift without delivering economic results'
    ],
    topStories: [
      { title: 'Prabowo sacks five ministers including Sri Mulyani after August protests', source: 'Al Jazeera', link: 'https://example.com', pubDate: '2025-09-09' },
      { title: 'Economic growth slows to 4.87% in Q1 2025, slowest since pandemic', source: 'Bloomberg', link: 'https://example.com', pubDate: '2025-10-20' },
      { title: 'Public Works Ministry budget slashed 73%, infrastructure spending collapses', source: 'The Jakarta Post', link: 'https://example.com', pubDate: '2025-11-05' },
      { title: 'Prabowo secures trade deal with Trump: US tariffs cut from 32% to 19%', source: 'The Diplomat', link: 'https://example.com', pubDate: '2025-03-15' }
    ]
  },
  {
    name: 'Iran',
    lat: 32.4279,
    lng: 53.6880,
    summary: `Masoud Pezeshkian's presidency is turning into a masterclass in how a reformist president with no real power faces an impossible situation. The most dramatic development in November is the fuel price announcement—the regime's three branches approved a three-tier gasoline pricing plan with increases up to 5,000 tomans per liter. Then Pezeshkian publicly blamed his own government for rising consumer prices, which is either refreshingly honest or a sign of complete political desperation. A state-affiliated economist just warned that 10% of Iranians currently suffer from malnutrition and hunger, and that could hit 40% if current trends continue. These are catastrophic numbers for a middle-income country.

What's really happening is that Iran's economic model has completely failed. Sanctions have devastated oil revenues, inflation is crushing ordinary Iranians, and the government has no fiscal space. Raising fuel prices will spark protests—Iranians remember November 2019 when fuel price protests led to over 1,000 deaths. But not raising prices means the budget collapses. Pezeshkian is stuck between triggering mass unrest and presiding over fiscal meltdown, and he controls neither the security forces nor economic policy. He's essentially a spokesman for a regime where he has no power.

The water crisis adds another layer of catastrophe. Pezeshkian stated that if rainfall doesn't continue through late November, Tehran might face water rationing, and if drought persists, "the evacuation of Tehran" could become a serious consideration. Think about that: the president is publicly discussing evacuating a capital city of 9 million people due to water shortages. This isn't normal political discourse; this is systems failure in slow motion.

On foreign policy, Pezeshkian is trying to restart nuclear diplomacy, speaking with Macron on November 5th, urging the US and Europe to "demonstrate sincerity" and "stop raising excessive demands." But he has zero credibility because everyone knows the Supreme Leader Ayatollah Khamenei controls nuclear policy, not the president. Pezeshkian can make all the moderate noises he wants; the IRGC and Khamenei decide whether Iran builds a bomb or negotiates.

The fundamental dynamic is that Iran has a president elected to reform who can't reform anything. The regime allowed a relatively moderate candidate to win in 2024 to release domestic pressure, but hasn't granted him power to actually change policy. Pezeshkian's presidency is exposing this contradiction: he speaks honestly about crises (fuel, water, inflation, malnutrition) but can't solve any of them because real power lies elsewhere. The question is how long this charade can continue before either he resigns in frustration or protesters decide that blaming specific ministers is pointless when the system is unreformable.`,
    issues: [
      'Fuel price increases up to 5,000 tomans threaten protests',
      '10% of population suffering malnutrition, could reach 40%',
      'Tehran water crisis may require capital evacuation',
      'Pezeshkian has presidential title but no real power',
      'Nuclear diplomacy deadlocked with Supreme Leader in control'
    ],
    topStories: [
      { title: 'Regime approves three-tier gasoline pricing plan, prices rise up to 5,000 tomans per liter', source: 'NCRI', link: 'https://example.com', pubDate: '2025-11-10' },
      { title: 'Pezeshkian warns Tehran may face water rationing, possible evacuation if drought continues', source: 'Press TV', link: 'https://example.com', pubDate: '2025-11-02' },
      { title: 'President blames own government for soaring inflation in unprecedented admission', source: 'Times of Israel', link: 'https://example.com', pubDate: '2025-11-08' },
      { title: 'Pezeshkian calls Macron urging US and Europe to show sincerity on nuclear talks', source: 'Press TV', link: 'https://example.com', pubDate: '2025-11-05' }
    ]
  },
  {
    name: 'Iraq',
    lat: 33.2232,
    lng: 43.6793,
    summary: `Iraq just held elections on November 11th, and the results announced November 12th are genuinely significant: Prime Minister Mohammed Shia al-Sudani's Reconstruction and Change coalition came first with 1.3 million votes—370,000 more than the next competitor. Turnout was 56%, a massive jump from 41% in 2021, which Sudani is calling "clear evidence of another success" and "restoration of confidence in the political system." In Iraqi terms, where elections are usually low-turnout affairs dominated by sectarian blocs and militia-aligned parties, this is remarkable. It suggests Sudani has actually built genuine popular support, not just elite backing.

What makes this fascinating is who Sudani is and how he got here. He was brought to power three years ago by an alliance of pro-Iran groups—the Coordination Framework—after the 2021 elections produced deadlock and Muqtada al-Sadr withdrew his MPs and triggered a year-long crisis. Sudani was seen as a compromise figure, acceptable to Iran but not entirely controlled by them. The bet was he'd be a weak caretaker. Instead, he's emerged as a major political force in his own right, and this election victory cements that transformation.

His record is actually impressive by Iraqi standards. Baghdad has been transformed into a construction hub—new tunnels, bridges, infrastructure projects that were unimaginable during the chaos of the 2010s. Security has improved, ISIS is contained, and there's a sense that government is at least trying to deliver services rather than just stealing everything. This matters enormously in a country where previous governments were defined by spectacular corruption and incompetence. Sudani hasn't eliminated corruption—this is Iraq, that's impossible—but he's improved governance enough that people notice.

The challenge now is government formation. Iraq's 329-member legislature requires coalition-building that typically takes months. Sources close to Sudani say his coalition likely has around 50 seats, making it the largest bloc and giving him the upper hand in negotiations. But he'll still need to cut deals across sectarian and ethnic lines—Shia, Sunni, Kurdish parties all need to be accommodated. The Iranian-backed militias remain powerful, and they'll want their pound of flesh. The question is whether Sudani can translate electoral victory into actual governing power, or whether he'll be forced into a weak coalition that constrains his agenda.

The broader context is that Iraq is at a genuinely pivotal moment. It could consolidate as a functional (if imperfect) democracy with improving services and rebuilding its destroyed infrastructure, or it could slide back into the militia-dominated chaos that defined the post-2003 period. Sudani's election victory gives hope for the first path, but Iraqi politics has a long history of promising moments that end in disappointment. The next few months of coalition talks will determine which Iraq emerges.`,
    issues: [
      'Sudani\'s coalition wins election with 56% turnout, up from 41% in 2021',
      'Government formation negotiations starting with ~50-seat coalition',
      'Iranian-backed militias remain powerful force in politics',
      'Infrastructure improvements in Baghdad under Sudani',
      'Iraq at pivot point between democratic consolidation and militia chaos'
    ],
    topStories: [
      { title: 'Al-Sudani\'s coalition wins November 11 elections with 1.3 million votes', source: 'Al Jazeera', link: 'https://example.com', pubDate: '2025-11-12' },
      { title: 'Voter turnout jumps to 56%, highest since 2018, signaling confidence restoration', source: 'France24', link: 'https://example.com', pubDate: '2025-11-12' },
      { title: 'Preliminary results show Sudani coalition with ~50 seats, largest bloc', source: 'US News', link: 'https://example.com', pubDate: '2025-11-12' },
      { title: 'Baghdad transformation: new infrastructure projects completed under Sudani government', source: 'The National', link: 'https://example.com', pubDate: '2025-11-10' }
    ]
  }
]

async function main() {
  console.log('🏛️  Starting Politics summaries insertion (Batch 4)')
  console.log(`📊 Countries: ${politicsData.length}`)
  console.log('=' .repeat(80))

  for (const data of politicsData) {
    try {
      console.log(`\n📍 Processing: ${data.name}`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: data.name,
            type: 'country',
            category: 'politics',
          },
        },
        update: {
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify(data.topStories),
          storyCount: data.topStories.length,
          updatedAt: new Date(),
        },
        create: {
          name: data.name,
          type: 'country',
          country: data.name,
          lat: data.lat,
          lng: data.lng,
          category: 'politics',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify(data.topStories),
          storyCount: data.topStories.length,
        },
      })

      console.log(`✅ Saved ${data.name} - ${data.summary.length} characters`)
    } catch (error) {
      console.error(`❌ Error saving ${data.name}:`, error)
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Politics summaries insertion complete!')
  console.log(`📊 Processed ${politicsData.length} countries`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
