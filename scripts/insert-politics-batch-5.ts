import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Politics summaries for Latvia through Pakistan (Batch 5 of 7)
const politicsSummaries = [
  {
    name: 'Latvia',
    type: 'country',
    country: 'Latvia',
    lat: 57.066872,
    lng: 25.458723,
    category: 'politics',
    summary: `Latvian politics, like Estonia, is defined by frontline position facing Russia and determination to maintain independence through NATO and EU integration. The center-right coalition led by various parties has governed with strong pro-Western, anti-Russia orientation. Latvia's Russian-speaking minority comprises about 25% of population, many Soviet-era settlers or their descendants who never acquired citizenship. Language and citizenship policies favoring ethnic Latvians create tensions, though less acute than during the 1990s. The Ukraine war has intensified security concerns and hardened attitudes toward Russia.

Latvia's politics features fragmented party system requiring coalitions. National Alliance combines conservative and nationalist elements, while New Unity represents liberal center-right. The social democratic Harmony party historically drew Russian-speaker support but has declined as those voters' political participation decreases due to citizenship restrictions. Election campaigns feature debate over language policy, relations with Russia, and economic development. The political consensus strongly supports EU and NATO membership, with minimal support for closer Russia ties after 2014 Crimea annexation and especially after 2022 Ukraine invasion.

Economically, Latvia recovered from devastating 2008-2010 crisis that saw GDP contract 25%. Austerity measures were painful but restored stability, allowing euro adoption in 2014. The economy now grows modestly, though challenges include demographic decline from emigration and low birth rates, regional inequality between Riga and rural areas, and labor shortages. Latvia's geographic position makes it a logistics hub, but also exposes it to economic shocks. The country has transitioned from post-Soviet economy to modern EU state, though corruption and oligarch influence persist.

Security dominates political thinking. Latvia hosts NATO troops, has increased defense spending significantly, and views Russia as existential threat. The long border with Russia and proximity to Belarus create vulnerability. Cyber threats, propaganda, and hybrid warfare require constant vigilance. Relations with Estonia and Lithuania through Baltic cooperation are extremely close. For Latvians, politics means maintaining independence through Western integration while managing Russian-speaking minority and demographic decline—the existential questions of whether Latvia can survive as distinct nation-state.`,
    issues: JSON.stringify([
      'Russian-speaking minority citizenship and integration',
      'NATO frontline and Russia threat perception',
      'Demographic decline and emigration',
      'Language policy favoring Latvian',
      'Economic recovery but regional inequality'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Lebanon',
    type: 'country',
    country: 'Lebanon',
    lat: 34.133368,
    lng: 35.992892,
    category: 'politics',
    summary: `Lebanese politics has collapsed into economic catastrophe, state failure, and humanitarian crisis. The country has had no president since 2022, with parliament deadlocked over Hezbollah's demands. Prime Minister Najib Mikati leads a caretaker government with limited authority. The 2019-2020 uprising against corruption and sectarian elite was met with violence and economic collapse. The August 2020 Beirut port explosion—killing 218 and devastating the capital—epitomized state failure. Investigations have been blocked by political interference protecting the responsible officials. Lebanon represents a failed state maintained by sectarian power-sharing that prevents reform.

The economic collapse is among history's worst. Currency has lost over 95% of value, banks froze deposits trapping savings, inflation has destroyed purchasing power, and over 80% of population lives in poverty. This isn't war or sanctions—it's elite theft and mismanagement. Decades of corruption, clientelism, and Ponzi-scheme economics (banks paying high interest through new deposits rather than productivity) created inevitable crash. The ruling class—traditional sectarian leaders and warlords—looted state resources while providing nothing. Power cuts last 20+ hours daily, water is scarce, medicine unavailable, and public services non-existent.

Hezbollah, the Shi'ite militia-party, operates as state within state. More powerful militarily than the Lebanese army, it answers to Iran not Lebanese government. Hezbollah's involvement in Syria war and confrontation with Israel create security risks Lebanon can't control. The October 2023 conflict saw Hezbollah launch attacks on Israel in solidarity with Hamas, provoking Israeli strikes on Lebanon. Israel's 2024 offensive killed Hezbollah leader Hassan Nasrallah and degraded the organization, but also devastated southern Lebanon. Lebanese have no say in Hezbollah's decisions yet bear the consequences.

The sectarian political system—dividing power between Christians, Sunnis, Shi'ites, and Druze—is irreformable. Each sect's leaders protect their networks while society suffers. Syrian refugees (1.5 million) strain resources. Relations with Arab states, once close, soured over Hezbollah. For Lebanese, politics means daily survival: securing electricity, medicine, fuel, and food while their country disintegrates. Mass emigration, particularly of youth and professionals, accelerates. Whether Lebanon survives as functioning state or becomes permanently failed is open question.`,
    issues: JSON.stringify([
      'Economic collapse and currency devaluation',
      'No president since 2022 and political paralysis',
      'Hezbollah state-within-state and Iran control',
      'Beirut port explosion impunity',
      '80%+ poverty rate and humanitarian crisis'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Libya',
    type: 'country',
    country: 'Libya',
    lat: 26.638944,
    lng: 18.011015,
    category: 'politics',
    summary: `Libyan politics remains divided between competing governments and militias 13 years after NATO intervention toppled Muammar Gaddafi. The country is split between the UN-recognized Government of National Unity (GNU) in Tripoli led by Abdul Hamid Dbeibah and the eastern-based House of Representatives backed by General Khalifa Haftar's Libyan National Army. Attempts at reunification through elections repeatedly fail as powerholders prefer the status quo where they control resources and militias. The 2011 revolution that promised democracy produced state collapse, civil war, and foreign intervention.

Haftar, a former Gaddafi general turned warlord, controls eastern Libya and much of the south through his LNA. He is backed by Egypt, UAE, and Russia (Wagner Group mercenaries). Haftar launched offensive to capture Tripoli in 2019-2020 but was defeated by Turkish military intervention supporting the GNU. The frontlines have since stabilized, creating de facto partition. Both sides maintain militias whose loyalty is bought through patronage from oil revenues. These armed groups operate with impunity, running detention centers, smuggling networks, and protection rackets.

Libya's oil wealth—the largest reserves in Africa—funds competing authorities but hasn't brought prosperity to citizens. Oil production fluctuates based on political deals and force majeure shutdowns by militias demanding payoffs. The Central Bank, National Oil Corporation, and key infrastructure become battlegrounds for control. International efforts at mediation—UN, Egypt, Turkey, various European states—have achieved ceasefires but not political settlement. Foreign fighters from Syria, Sudan, Chad remain. Russia seeks permanent military bases.

The humanitarian situation involves migrants and refugees trapped in detention centers with documented torture, sexual violence, and slavery. Libya serves as main departure point for migrants attempting Mediterranean crossing to Europe—tens of thousands drown or are returned to abuses. For Libyans, daily life means power cuts, water shortages, cash crises (despite oil wealth), militia checkpoints, and arbitrary violence. The younger generation knows only instability. Whether Libya can reunify or partition formalizes remains unclear. The NATO intervention's legacy is state collapse, regional instability, and human suffering.`,
    issues: JSON.stringify([
      'East-West division between rival governments',
      'Haftar warlord control and LNA military power',
      'Militia impunity and oil wealth battles',
      'Foreign intervention (Russia, Turkey, UAE, Egypt)',
      'Migrant detention centers and Mediterranean deaths'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Lithuania',
    type: 'country',
    country: 'Lithuania',
    lat: 55.103703,
    lng: 24.089932,
    category: 'politics',
    summary: `Lithuanian politics is dominated by security concerns regarding Russia and determination to support Ukraine. The 2024 elections saw the opposition Social Democrats defeat the governing Homeland Union-Lithuanian Christian Democrats, though both parties share strong pro-Western, anti-Russia positions. The new government under Prime Minister Gintautas Paluckas will continue NATO and EU integration, support for Ukraine, and military preparedness. Lithuania's politics features robust democracy, regular power alternation, and consensus on fundamental foreign policy despite domestic policy differences.

Lithuania has been most vocal Baltic state in opposing Russian aggression. The country provided weapons to Ukraine early, hosts NATO troops and facilities, and advocates maximum pressure on Russia. Lithuania's Suwałki Gap—the corridor connecting to Poland and rest of NATO—is considered vulnerable in war scenarios. Defense spending has increased dramatically, with conscription reintroduced and civil defense planning accelerated. The Russian exclave Kaliningrad's proximity creates specific threats. Belarus, once neutral neighbor, is now seen as Russian proxy after 2020 crackdown and 2022 Ukraine invasion staging.

The Russian-speaking minority (about 5% of population) faces less integration pressure than in Latvia and Estonia. However, Lithuania has implemented language requirements and cultural policies emphasizing Lithuanian identity. The historical memory of Soviet occupation, deportations, and resistance shapes politics. Independence in 1991 after 50 years of occupation remains recent memory for older generations. EU membership since 2004 and euro adoption in 2015 solidified Western orientation.

Economically, Lithuania has grown impressively since EU accession. The country has developed fintech sector, transit services between EU and Asia, and diversified industry. However, challenges include emigration (population declined from 3.7 to 2.8 million), demographic aging, and Vilnius-rural inequality. Inflation and energy costs have created pressures. Energy independence from Russia was achieved through LNG terminal and connections to European grids. For Lithuanians, politics means defending freedom through Western integration while building prosperous society that retains citizens rather than losing them to emigration.`,
    issues: JSON.stringify([
      'Russia threat and Suwałki Gap vulnerability',
      'Ukraine support and military buildup',
      'Demographic decline from emigration',
      'Energy independence from Russia achieved',
      'Social Democrat election victory and policy shifts'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Luxembourg',
    type: 'country',
    country: 'Luxembourg',
    lat: 49.733732,
    lng: 6.07762,
    category: 'politics',
    summary: `Luxembourg's politics is characterized by stable coalition governance, consensus-building, and pragmatic centrism. Prime Minister Luc Frieden's Christian Social People's Party (CSV) returned to power in 2023 coalition with Democrats, ending the long tenure of Xavier Bettel's liberals. Luxembourg's political culture emphasizes compromise, social partnership, and moderation. The small size (650,000 population) creates personal politics where leaders are accessible and policy-making involves extensive consultation with social partners—unions, business, civil society.

The country faces identity questions as foreigners comprise nearly half the population. Portuguese, French, Italians, Germans, and others work in Luxembourg's financial sector, EU institutions, and services. This creates tensions over housing affordability (among Europe's most expensive), integration, and linguistic identity. Luxembourg maintains three official languages—Luxembourgish, French, German—reflecting its position between Romance and Germanic worlds. However, English increasingly dominates in finance and EU work, diluting traditional trilingualism.

Economically, Luxembourg is the world's wealthiest country per capita through financial services—investment funds, private banking, insurance. EU institutions and headquarters of many multinationals provide employment. The economy is sophisticated but vulnerable to regulatory changes, tax competition, and financial sector fluctuations. The country has faced criticism and pressure over tax arrangements allowing multinationals to minimize liabilities. Reforms have been implemented, though Luxembourg remains tax-friendly by European standards.

Politics also involves Luxembourg's role in EU affairs. As founding member and host to key institutions, the country punches above its weight in European decision-making. Luxembourgers are among Europe's most pro-EU citizens. The COVID-19 pandemic exposed vulnerabilities in cross-border worker arrangements—many residents work in Luxembourg but live in neighboring countries. Housing crisis affects young Luxembourgers unable to afford property despite high wages. For this wealthy nation, politics means managing prosperity's complications: inequality amid riches, identity amid diversity, and sustainability of financial services model.`,
    issues: JSON.stringify([
      'Foreigners nearly half population and integration',
      'Housing affordability crisis',
      'Financial services model sustainability',
      'Tax haven criticism and EU pressure',
      'Linguistic identity and multilingualism'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Malaysia',
    type: 'country',
    country: 'Malaysia',
    lat: 2.528667,
    lng: 113.83708,
    category: 'politics',
    summary: `Malaysian politics under Prime Minister Anwar Ibrahim marks the reformist's long-delayed rise to power after decades of persecution by the establishment. Anwar's Pakatan Harapan coalition won the 2022 elections with unexpected ally—the Barisan Nasional coalition that had ruled Malaysia for 60+ years until 2018. Anwar, imprisoned twice on sodomy charges widely seen as politically motivated, represents hope for reform, anti-corruption, and progressive governance. However, governing requires constant negotiation in Malaysia's complex ethnic and religious landscape.

The Malay-Muslim majority's political dominance through race-based politics has defined Malaysia since independence. UMNO, the traditional Malay party, used affirmative action (bumiputera policies), Islamic identity, and patronage to maintain power. The 2018 elections broke this monopoly briefly when Mahathir Mohamad returned to defeat his former party amid the 1MDB corruption scandal. However, the reformist government collapsed after 22 months through defections. The period since has featured political instability, four prime ministers in five years, and constant coalition reshuffling.

Anwar's government faces immense challenges. Corruption remains endemic despite reform rhetoric—the 1MDB scandal saw billions stolen by Prime Minister Najib Razak, who is now imprisoned though UMNO seeks his pardon. Economic inequality between Malays and Chinese/Indian minorities persists despite decades of affirmative action. Islamic conservatism has grown, with religious authorities increasingly intrusive and progressive voices facing prosecution for insulting Islam. LGBT+ persecution has intensified. Opposition PAS party combines Islamism with Malay nationalism, appealing to rural conservative voters.

Ethnic politics involves careful balancing. Malays comprise 60%, Chinese 23%, Indians 7%, with indigenous groups in East Malaysia. Race and religion intertwine—Malays defined as Muslim by constitution, creating "social contract" where Malay political dominance exchanges for minority economic participation. However, Chinese and Indian Malaysians face discrimination in education, employment, and business. East Malaysian states Sabah and Sarawak have distinct identities and resent Peninsular control. For Malaysia's diverse society, politics means navigating racial, religious, and regional divides while addressing corruption and inequality that transcend ethnic lines.`,
    issues: JSON.stringify([
      'Anwar rise after decades of persecution',
      '1MDB corruption scandal and Najib imprisonment',
      'Racial politics and bumiputera affirmative action',
      'Islamic conservatism and religious authority expansion',
      'Political instability and coalition fluidity'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Maldives',
    type: 'country',
    country: 'Maldives',
    lat: 4.1755,
    lng: 73.5093,
    category: 'politics',
    summary: `Maldivian politics under President Mohamed Muizzu has shifted dramatically toward China and away from India. Muizzu, elected in 2023 on "India Out" campaign, immediately requested withdrawal of small Indian military presence and has pursued closer Beijing ties. This represents geopolitical realignment for the strategic island nation straddling Indian Ocean shipping lanes. Previous president Ibrahim Mohamed Solih maintained close India relations, but Muizzu's Maldives reflects broader regional trend of countries balancing or pivoting between India and China.

The Maldives has experienced tumultuous democratic development since 2008 when dictator Maumoon Abdul Gayoom was finally voted out after 30 years. Mohamed Nasheed became first democratically elected president but was forced out in disputed 2012 transfer. Gayoom's half-brother Abdulla Yameen then ruled 2013-2018 in increasingly authoritarian manner—jailing opponents, crushing dissent, and warming to China—before electoral defeat. Solih's interregnum restored some democratic norms, but Muizzu's victory shows authoritarian tendencies remain popular with voters frustrated by economic pressures.

Economically, the Maldives depends overwhelmingly on tourism—luxury resorts on pristine atolls attract wealthy visitors. Chinese loans financed infrastructure including airports, bridges, and housing, creating debt concerns echoing Sri Lankan debt trap fears. India has provided grants and soft loans, but Muizzu's government prefers Chinese financing despite sustainability questions. The economy recovered from COVID-19 tourism collapse but faces vulnerabilities from over-dependence and climate change threats.

Climate change poses existential threat to these low-lying islands—the average elevation is barely above sea level. Rising seas, coral bleaching, and extreme weather could render the nation uninhabitable this century. Nasheed became international climate advocate, though domestic priorities often contradict environmental concerns. Islamic conservatism has grown, with strict interpretation of Sunni Islam becoming more influential and limiting individual freedoms. For Maldivians, politics means navigating between geopolitical giants, managing tourism-dependent prosperity, and confronting whether their nation has a long-term future against rising seas.`,
    issues: JSON.stringify([
      'China pivot and India relations deterioration',
      'Chinese debt and infrastructure dependence',
      'Climate change existential threat',
      'Democratic backsliding and authoritarian tendencies',
      'Tourism over-dependence and economic vulnerability'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Mali',
    type: 'country',
    country: 'Mali',
    lat: 18.692713,
    lng: -2.038455,
    category: 'politics',
    summary: `Malian politics has been controlled by military junta since the 2020 coup that overthrew elected president Ibrahim Boubacar Keïta. Colonel Assimi Goïta leads the junta after executing a second coup in 2021 removing the transitional civilian president. The military has repeatedly postponed elections and now rules indefinitely, backed by nationalist rhetoric about sovereignty and anti-French sentiment. Mali has joined Burkina Faso and Niger in military-ruled bloc withdrawing from ECOWAS and French security cooperation, turning instead toward Russia and Wagner Group.

The jihadist insurgency that triggered the coups continues worsening. Al-Qaeda and ISIS affiliates control vast rural territories, conducting massacres of civilians and attacking military positions. The junta claimed it could defeat terrorists better than elected governments or French forces, but violence has actually intensified. Wagner mercenaries operate alongside Malian forces with documented involvement in atrocities including the 2022 Moura massacre where 300+ civilians were killed. The security situation is catastrophic—over 400,000 displaced, schools closed, and state authority absent in much of the country.

The junta has crushed civil society, independent media, and political opposition. UN peacekeeping mission MINUSMA was expelled in 2023. The transitional government operates without democratic legitimacy or timeline for elections. Media critical of the junta face closure or prosecution. Economic sanctions by ECOWAS were lifted after Mali's withdrawal from the organization. The economy suffers from conflict, displacement, and sanctions impacts, with cotton and gold production disrupted.

France's military withdrawal after decade of intervention reflected mutual recriminations—French frustration with coups and Russian pivot, Malian anger at perceived neocolonialism and failure to defeat jihadists. Wagner's presence has geopolitical implications but hasn't improved security. Relations with neighbors are tense—Ivory Coast and Senegal worry about instability spillover, while Mali, Burkina Faso, and Niger form authoritarian bloc. For Malians, politics means accepting military rule while jihadist violence, economic hardship, and humanitarian crisis define reality. Whether the junta can deliver security to justify its authoritarian rule appears increasingly doubtful.`,
    issues: JSON.stringify([
      'Military junta rule since 2020 coup',
      'Jihadist insurgency intensifying despite promises',
      'Wagner Group mercenaries and Moura massacre',
      'French expulsion and Russia pivot',
      'ECOWAS withdrawal and regional isolation'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Mauritania',
    type: 'country',
    country: 'Mauritania',
    lat: 19.587062,
    lng: -9.740299,
    category: 'politics',
    summary: `Mauritanian politics under President Mohamed Ould Ghazouani has maintained relative stability in the volatile Sahel region. Ghazouani, a former general elected in 2019 and re-elected in 2024, represents continuity with predecessor Mohamed Ould Abdel Aziz who came to power in 2008 coup. The system operates as electoral authoritarianism—elections occur but under conditions favoring incumbents, opposition faces obstacles, and military maintains decisive influence. However, Mauritania has avoided the democratic collapse seen in Mali, Burkina Faso, and Niger.

Mauritania's success in preventing jihadist takeover contrasts with Sahel neighbors. The country faces terrorist threats from Al-Qaeda in the Islamic Maghreb but has contained them through military operations and community engagement strategies. The security forces are relatively professional and haven't launched coups against civilian authority—unusual in the region. However, this security comes at cost of limited political freedoms and human rights concerns. The military-security establishment exercises veto power over political decisions.

Slavery's legacy haunts Mauritania—the country was last globally to outlaw slavery (1981), and despite official abolition, hereditary servitude persists. The Haratine (descendants of slaves) comprise significant population and face systematic discrimination. Anti-slavery activists face harassment and imprisonment. Ethnic tensions between Arab-Berber (30%), Haratine (40%), and sub-Saharan African groups (30%) shape politics and society. The Arabic language and Islamic identity are emphasized by state, marginalizing African groups who faced repression historically.

Economically, Mauritania has fishing, iron ore, gold, and emerging natural gas through offshore BP project. However, prosperity hasn't reached most citizens—poverty is widespread, infrastructure limited, and inequality high. The country has maintained close French ties while also engaging with China and Gulf states. Mauritania's position on Atlantic coast and as Sahel-Maghreb bridge gives it strategic importance. For Mauritanians, politics means accepting authoritarian stability as preferable to neighbors' chaos, while slavery's legacy and ethnic discrimination persist largely unaddressed. Whether democratic development can occur without threatening security remains unresolved.`,
    issues: JSON.stringify([
      'Electoral authoritarianism and military influence',
      'Slavery legacy and Haratine discrimination',
      'Ethnic tensions between Arab-Berber and African groups',
      'Jihadist containment success versus neighbors',
      'Anti-slavery activist persecution'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Mexico',
    type: 'country',
    country: 'Mexico',
    lat: 23.919988,
    lng: -102.289448,
    category: 'politics',
    summary: `Mexican politics has been transformed by Claudia Sheinbaum's historic 2024 election as the country's first female president and first Jewish leader. Sheinbaum continues the "Fourth Transformation" agenda of her mentor Andrés Manuel López Obrador (AMLO), who governed 2018-2024. AMLO's Morena party now dominates federal and state levels with supermajorities enabling constitutional changes. This concentration of power concerns those who see democratic erosion, while supporters celebrate policies addressing inequality and corruption. Mexico's democracy faces tests around judicial independence, media freedom, and institutional checks.

The security crisis defines Mexican politics and daily life. Cartels—Sinaloa, Jalisco New Generation, and fragmented groups—control territories, engage in spectacular violence, and corrupt institutions. Over 30,000 murdered annually in recent years, with massacres, disappearances, and mass graves regular occurrences. AMLO's "hugs not bullets" strategy avoided confrontation but violence continued. Cartels profit from U.S.-bound drug trafficking, extortion, kidnapping, and human smuggling. Military has been deployed domestically, raising human rights concerns. The "war on drugs" launched in 2006 has killed over 350,000 with no victory in sight.

AMLO's administration pursued nationalist energy policy reversing liberalization, expanded cash transfer programs for poor and elderly, built infrastructure including contentious Maya Train and new oil refinery, and centralized power while weakening autonomous institutions. Electoral authority, transparency institutes, and anti-corruption bodies faced budget cuts and political pressure. Media critical of government experienced intimidation. However, AMLO maintained genuine popularity through direct communication, anti-elite rhetoric, and social programs. His voluntary one-term limit and democratic transition to Sheinbaum demonstrated restraint unusual for populist leaders.

Relations with the United States are critical given shared border, USMCA trade agreement, migration flows, and security cooperation. The Trump administration created tensions over migration, tariffs, and border wall. Biden improved relations but migration, fentanyl trafficking, and cartel violence remain friction points. China has increased investment particularly in manufacturing. For Mexicans, politics means navigating between hope for transformation under Morena and fear of democratic backsliding, while cartel violence and corruption undermine state authority and human security.`,
    issues: JSON.stringify([
      'Cartel violence and 30,000+ annual murders',
      'Democratic erosion and institutional weakening',
      'Sheinbaum historic election as first female president',
      'Fentanyl trafficking and U.S. pressure',
      'Morena supermajority and power concentration'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Moldova',
    type: 'country',
    country: 'Moldova',
    lat: 47.434999,
    lng: 28.487904,
    category: 'politics',
    summary: `Moldovan politics under President Maia Sandu has pursued EU integration against fierce Russian interference. Sandu's pro-European Action and Solidarity party won parliamentary majority in 2021, enabling reform agenda. The October 2024 EU accession referendum and presidential election occurred amid unprecedented Russian interference—vote buying, propaganda, cyberattacks, and threats. Despite this, the referendum narrowly passed and Sandu won re-election, demonstrating Moldovan resilience. However, the narrow margins revealed deep divisions between pro-European urban areas and pro-Russian rural regions.

The Transnistria frozen conflict complicates Moldova's sovereignty. This breakaway region along the Ukrainian border has been de facto independent since 1992 war, controlled by Russia-backed authorities with 1,500 Russian troops stationed there. Moldova cannot join NATO or fully secure borders while Transnistria exists. The territory serves as Russian leverage and potential destabilization tool. The Ukraine war increased fears Russia might connect Transnistria to occupied Ukraine, though military realities have prevented this. Transnistria's future—reintegration, continued limbo, or formal separation—remains unresolved.

Economically, Moldova is Europe's poorest country with heavy dependence on remittances, agriculture, and wine exports. Energy dependence on Russia created vulnerability exploited through supply cutoffs and price manipulation. The economy suffered from COVID-19, energy crisis, and inflation. EU accession process provides reform impetus and financial assistance. Corruption remains endemic despite anti-graft efforts. Oligarchic interests, particularly those of fugitive businessman Ilan Shor (convicted and fled, orchestrating Russian interference from abroad), corrupt politics and capture institutions.

Moldova's identity is contested—some see themselves as distinct from Romania, others as Romanians separated by Soviet occupation. Language politics reflect this: is it Moldovan or Romanian? The Gagauz autonomous region (Turkic Christian minority) leans pro-Russian. For Moldovans, politics means choosing between European future of reform and prosperity versus Russian sphere offering familiarity but authoritarianism. Sandu's narrow victories show how divisive this choice is, with geography, age, and urban-rural divides determining positions. Whether Moldova can complete European integration while managing Russian interference and Transnistria problem defines the political challenge.`,
    issues: JSON.stringify([
      'Russian interference in elections and referendum',
      'Transnistria frozen conflict and Russian troops',
      'EU accession narrow referendum victory',
      'Oligarch Ilan Shor orchestrating destabilization',
      'Extreme poverty and energy dependence'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Mongolia',
    type: 'country',
    country: 'Mongolia',
    lat: 45.997488,
    lng: 104.150405,
    category: 'politics',
    summary: `Mongolian politics under Prime Minister Luvsannamsrain Oyun-Erdene's Mongolian People's Party (MPP) continues to navigate between giant neighbors China and Russia. The MPP has dominated since democratic transition in 1990, though peaceful power alternations with Democratic Party have occurred. The 2024 parliamentary elections saw MPP maintain majority, though opposition contested results citing violations. Mongolia maintains robust democracy by regional standards—competitive elections, free media, civil society—though corruption, elite capture, and mining politics create challenges.

Mongolia's geopolitics is precarious—sandwiched between Russia (north) and China (south) with no access to sea, requiring "third neighbor" policy to maintain independence. The country cultivates relations with U.S., Japan, South Korea, EU, and India to avoid excessive dependence on either giant. However, economic reality is 90%+ of exports go to China (primarily coal and copper), while Russian energy and Soviet legacy ties remain important. The Ukraine war created difficulties as Mongolia seeks neutrality while maintaining these relationships. Mongolia is International Criminal Court member but did not arrest Putin when he visited in 2023, illustrating constraints.

Economically, mining dominates through vast coal, copper, gold, and rare earth deposits. The Oyu Tolgoi copper mine is one of world's largest, though disputes with foreign investors create tensions. Resource wealth hasn't translated to broad prosperity—significant poverty persists, particularly in rural areas. Ulaanbaatar hosts nearly half the population (2 million of 3.3 million), with extreme urban-rural divide. The capital suffers severe air pollution from coal heating during brutal winters. Nomadic herding, Mongolia's traditional economy, faces pressure from mining, climate change, and market fluctuations.

Climate change hits Mongolia severely—warming faster than global average, with desertification, dzud (extreme winter disasters killing livestock), and grassland degradation. Environmental degradation from mining and overgrazing threatens ecosystems and livelihoods. For Mongolians, politics means balancing between Chinese economic gravity and independence preservation, extracting value from mineral wealth without Dutch disease, and maintaining democratic norms amid corruption pressures. The country's success in democratic governance while surrounded by authoritarianism is remarkable but fragile.`,
    issues: JSON.stringify([
      'Sandwiched between China and Russia with limited options',
      '90% export dependence on China',
      'Mining dominance and environmental degradation',
      'Severe air pollution in Ulaanbaatar',
      'Climate change impacts and dzud disasters'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Montenegro',
    type: 'country',
    country: 'Montenegro',
    lat: 42.803101,
    lng: 19.143727,
    category: 'politics',
    summary: `Montenegrin politics has been marked by instability and polarization since ending three decades of rule by Milo Đukanović's Democratic Party of Socialists (DPS) in 2020. The current government led by Prime Minister Milojko Spajić represents a coalition of diverse parties including pro-Serbian and reformist elements. Montenegro's politics divides between those identifying as Montenegrin and supporting independence from Serbia (2006) versus those with Serbian identity questioning statehood. This identity cleavage intertwines with EU membership debates, relations with Serbia, and NATO membership (achieved 2017).

The Serbian Orthodox Church's status has been contentious. The 2020 elections centered on religious property law that church and opposition claimed targeted Serbian identity. Mass protests and church mobilization helped defeat DPS. The new government has sought balance, though tensions persist. Identity politics involves questions of language (is Montenegrin distinct from Serbian?), history (interpreting Yugoslav era and independence), and cultural orientation (toward Serbia and Russia versus EU and NATO). These aren't just symbolic—they determine foreign policy, education content, and national priorities.

Economically, Montenegro is small (620,000 people) and relies on tourism, aluminum, and services. The Adriatic coast attracts visitors, though over-development threatens environment. Chinese loans for highway project created massive debt (over 80% of GDP), requiring EU assistance to avoid default. This debt trap experience became cautionary tale about Belt and Road pitfalls. Corruption remains problematic—DPS governed through patronage and organized crime links. EU accession negotiations proceed but require judiciary reforms and organized crime prosecution.

Russian influence operates through pro-Serbian parties, Orthodox Church, business investments, and alleged coup attempt in 2016 aimed at preventing NATO membership. The Ukraine war has intensified pressure on Montenegro to align with EU sanctions, creating domestic tensions. Relations with Serbia are complex—significant trade and cultural ties but also resentment over Montenegrin independence and competing national narratives. For Montenegrins, politics means constructing identity and sovereignty for a young state facing external pressures and internal divisions, while pursuing European integration as anchor for independence and development.`,
    issues: JSON.stringify([
      'Identity politics: Montenegrin versus Serbian',
      'Chinese debt crisis and highway project',
      'Serbian Orthodox Church property disputes',
      'Russian influence and alleged 2016 coup plot',
      'EU accession and organized crime reforms'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Morocco',
    type: 'country',
    country: 'Morocco',
    lat: 31.650723,
    lng: -7.187296,
    category: 'politics',
    summary: `Moroccan politics operates as constitutional monarchy where King Mohammed VI exercises ultimate authority despite nominal parliament and prime minister. The king controls military, religious affairs, foreign policy, and can dissolve parliament. Prime Minister Aziz Akhannouch leads government drawn from pro-monarchy parties, but real power resides in the palace. Morocco's political system combines authoritarian monarchy with limited pluralism—elections occur, parties compete, but within boundaries the makhzen (deep state) enforces. This has produced stability but also limits democratic development.

The Western Sahara conflict remains Morocco's core political issue. Morocco controls about 80% of the territory it claims, with Polisario Front (backed by Algeria) controlling the remainder. The dispute has lasted since Spanish colonial withdrawal in 1975, with neither side yielding. Morocco has pursued normalization agreements offering autonomy while Algeria supports independence. The 2020 U.S. recognition of Moroccan sovereignty during Trump administration (in exchange for Israel normalization) represented major diplomatic victory. However, UN still considers it disputed and Polisario hasn't accepted defeat.

The 2011 Arab Spring protests led to constitutional reforms granting parliament and prime minister more powers, but the changes were limited. The king retained veto over all major decisions. Morocco avoided the upheavals of Tunisia, Egypt, Libya, and Syria through timely concessions and repression balance. The Justice and Development Party (PJD), moderate Islamists, governed 2011-2021 but were crushed in 2021 elections through rule changes favoring establishment parties. This demonstrated makhzen ability to limit any force becoming too powerful.

Economically, Morocco has diversified beyond agriculture and phosphates into automotive manufacturing, aerospace, and renewable energy. However, inequality persists, youth unemployment is high, and Rif region remains marginalized. The 2016-2017 Hirak Rif protests exposed regional grievances, with activists imprisoned. Relations with Europe are critical—trade, migration management, and security cooperation. The controversial 2021 spy software scandal revealed Morocco purchased Pegasus to surveil critics. For Moroccans, politics means accepting monarchical authority while hoping for economic opportunity and gradual reform. The king's health and eventual succession will be critical test of system stability.`,
    issues: JSON.stringify([
      'King Mohammed VI authoritarian control',
      'Western Sahara conflict and Polisario dispute',
      'Rigged 2021 elections crushing Islamist party',
      'Rif region marginalization and Hirak protests',
      'Pegasus spy software scandal'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Mozambique',
    type: 'country',
    country: 'Mozambique',
    lat: -13.94323,
    lng: 37.83789,
    category: 'politics',
    summary: `Mozambican politics is dominated by Frelimo, the liberation movement-turned-party that has ruled since independence in 1975. President Filipe Nyusi governs in a system where elections occur but aren't free or fair, opposition faces obstacles, and patronage networks maintain power. The 2024 elections saw Frelimo's Daniel Chapo declared winner amid opposition allegations of fraud, sparking violent protests that have killed dozens. Mozambique exemplifies African liberation movements becoming entrenched ruling parties resistant to genuine democracy, enriching elites while populations remain poor.

The Cabo Delgado insurgency has become Mozambique's greatest crisis. Since 2017, Islamic State-linked militants have conducted brutal attacks in the northern gas-rich province—beheadings, mass killings, and displacing nearly one million people. The insurgency revealed state weakness: poorly equipped and demoralized military, corruption diverting defense spending, and northern region grievances over poverty amid gas wealth. Rwanda deployed troops in 2021 with surprising success containing insurgency, though militants retain capacity. Southern African Development Community forces also operate. The gas projects by TotalEnergies and others remain suspended, depriving government of anticipated revenues.

The $2 billion hidden debt scandal exposed corruption and state capture. Mozambique secretly borrowed money for maritime security projects that were actually meant to enrich officials and international accomplices. When revealed in 2016, it collapsed the economy, forced IMF program suspension, and led to prosecutions in the U.S. and Mozambique. Former finance minister was convicted in U.S. while bankers at Credit Suisse faced charges. The scandal epitomizes how ruling elites prioritize theft over development.

Economically, Mozambique has huge untapped potential—vast natural gas reserves, coal, hydropower, arable land, tourism. However, conflict, corruption, and weak infrastructure prevent realization. Most Mozambicans endure poverty, with rural areas lacking basic services. Climate change brings cyclones and flooding causing devastation. Relations with neighbors involve dependency on South African trade routes and employment while contributing Southern African regional organizations. For Mozambicans, politics means Frelimo dominance, resource wealth stolen, and violence unresolved. Whether the system can reform or insurgency spreads determines Mozambique's trajectory.`,
    issues: JSON.stringify([
      'Cabo Delgado Islamic insurgency and displacement',
      'Frelimo entrenched rule and electoral fraud',
      '$2 billion hidden debt corruption scandal',
      'Gas project suspension and lost revenues',
      'Rwanda military intervention in counterinsurgency'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Myanmar',
    type: 'country',
    country: 'Myanmar',
    lat: 21.573855,
    lng: 95.804497,
    category: 'politics',
    summary: `Myanmar has been devastated by civil war since the February 2021 military coup overthrew Aung San Suu Kyi's elected government. The military junta, led by General Min Aung Hlaing, faces armed resistance from People's Defense Forces allied with ethnic armed organizations. What began as peaceful protests was met with massacres, triggering armed rebellion. The country has fragmented into territories controlled by junta, resistance forces, or ethnic armies. Over 60,000 killed, millions displaced internally and as refugees, and economy has collapsed. Myanmar represents one of the world's worst humanitarian crises.

The military justified the coup through false fraud claims in 2020 elections. The real motivation was military resentment at losing power and fear that Suu Kyi's National League for Democracy would further reduce military prerogatives. The constitution already guaranteed 25% of parliament seats to military and control over key ministries—but the junta wanted more. The brutality of repression—shooting protesters, torching villages, airstrikes on civilians—has been systematic and documented. International Criminal Court investigations proceed, though accountability seems distant.

Resistance has achieved remarkable success. The junta controls urban centers and strategic points but has lost vast rural territories. Ethnic armed organizations—Karen, Kachin, Shan, Arakan Army—have gained ground. Operation 1027 in 2023 saw coordinated offensive capture significant territory. The junta faces military setbacks, defections, economic collapse, and international isolation. However, it retains brutal capacity, Chinese and Russian support, and institutional control over remaining state apparatus. The conflict has stalemated with neither side able to achieve victory.

The Rohingya genocide legacy haunts Myanmar. The military's 2017 campaign drove 740,000 to Bangladesh, with documented atrocities. Suu Kyi's shameful defense of military actions destroyed her international reputation. The Rohingya remain stateless, facing persecution if they return. Ethnic conflicts beyond Rohingya involve complex histories—the Wa, Kokang, Shan all have armed groups and territory. China, Thailand, and India have interests protecting borders and investments. ASEAN remains ineffective. For Myanmar's 55 million people, politics means survival amid civil war, economic collapse, and state disintegration with no resolution in sight.`,
    issues: JSON.stringify([
      '2021 military coup and civil war',
      'Junta atrocities and 60,000+ killed',
      'Ethnic armed resistance territorial gains',
      'Rohingya genocide legacy and statelessness',
      'Economic collapse and humanitarian catastrophe'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Namibia',
    type: 'country',
    country: 'Namibia',
    lat: -20.575298,
    lng: 17.108166,
    category: 'politics',
    summary: `Namibian politics is dominated by SWAPO (South West Africa People's Organisation), the liberation movement that led independence struggle and has governed since 1990. President Nangolo Mbumba serves after predecessor Hage Geingob's death in 2024. The 2024 elections will test whether SWAPO's long dominance continues or whether opposition can capitalize on economic frustrations and governance failures. Namibia maintains democratic forms—competitive elections, free press, independent judiciary—but SWAPO's entrenchment creates democratic quality concerns despite peaceful transfers of power.

Namibia's politics cannot escape the genocide legacy. Germany colonized Namibia and conducted the 20th century's first genocide against Herero and Nama peoples (1904-1908), killing 80% of Herero and 50% of Nama. Descendants seek reparations and Germany has acknowledged genocide but offered only development aid, not reparations. The land issue connects to this history: white Namibians (6% of population) still own much of prime farmland while black Namibians remain marginalized. Land reform has been cautious, avoiding Zimbabwe-style chaos but also not addressing historical injustice meaningfully.

Economically, Namibia has mining (diamonds, uranium), tourism, fishing, and emerging sectors. Chinese investment is substantial. However, unemployment exceeds 30%, inequality is severe (among world's highest Gini coefficients), and many Namibians live in poverty despite mineral wealth. The economy grew post-independence but benefits haven't reached most citizens. Youth unemployment drives frustration. Corruption has increased, with SWAPO elites enriching themselves while preaching liberation ideology.

Relations with neighbors are generally good, though Angola border disputes occasionally flare. South African economic dominance continues post-apartheid. The LGBTQ+ community faces discrimination despite constitutional protections. Climate change threatens Namibia's arid environment, with droughts worsening and desertification expanding. For Namibians, politics involves questioning whether SWAPO's liberation credentials still justify rule given governance failures and corruption, or whether opposition can offer credible alternative. The democratic foundations are stronger than many African countries, but economic disappointments create pressure for change.`,
    issues: JSON.stringify([
      'SWAPO long dominance and governance fatigue',
      'German genocide reparations dispute',
      'Land reform and racial economic inequality',
      '30%+ unemployment and poverty amid mineral wealth',
      'Corruption and SWAPO elite enrichment'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Nepal',
    type: 'country',
    country: 'Nepal',
    lat: 28.297925,
    lng: 83.639914,
    category: 'politics',
    summary: `Nepalese politics features chronic instability and coalition fluidity since becoming a republic in 2008 after Maoist insurgency and monarchy's end. Prime Minister Pushpa Kamal Dahal "Prachanda," the former Maoist rebel leader, currently governs in yet another fragile coalition. Nepal has had 13 governments in 16 years, with prime ministers constantly reshuffling coalitions among the main parties—Nepali Congress, Communist Party of Nepal (Unified Marxist-Leninist), and Prachanda's Maoists. This creates governance paralysis where short-term power grabs trump long-term policymaking.

The transition from Hindu kingdom to secular federal republic involved contentious debates about secularism, federalism, and inclusion. The 2015 constitution established federalism creating seven provinces, but implementation has been difficult. Madhesi communities in southern Terai region protested the constitution claiming marginalization, blocking India border for months. Ethnic and caste-based identity politics has intensified, with historically marginalized groups demanding representation. The old hill Hindu elite dominance faces challenges from Madhesis, Janajatis (indigenous groups), and Dalits.

Geopolitically, Nepal is sandwiched between India and China—two giants with conflicting interests. India historically treated Nepal as sphere of influence, with open border, cultural ties, and economic integration. However, Chinese investment and influence have grown dramatically. Nepal attempts balancing act but limited room to maneuver. India's 2015 blockade during constitution crisis revealed Indian pressure tactics. China's Belt and Road involvement brings infrastructure but also debt and dependence concerns. Nepal joined the Chinese initiative despite Indian concerns.

Economically, Nepal remains among Asia's poorest countries. Remittances from Nepali workers abroad (primarily India and Gulf) comprise 25% of GDP. Agriculture employs most workers but contributes little to GDP. Tourism (Everest, trekking, culture) has potential but infrastructure and political instability limit growth. Corruption is endemic, with politicians enriching themselves. Climate change threatens Himalayan glaciers, water resources, and causes disasters. For Nepalis, politics means frustration at constant government reshuffling, corruption, and failure to deliver development despite resources from remittances and foreign aid. The 2015 earthquake reconstruction was marred by delays and corruption, epitomizing governance failures.`,
    issues: JSON.stringify([
      'Chronic political instability and coalition shuffling',
      'Madhesi marginalization and federalism tensions',
      'India-China balancing act and geopolitical pressures',
      'Remittance dependency (25% of GDP)',
      'Corruption and earthquake reconstruction failures'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Netherlands',
    type: 'country',
    country: 'Netherlands',
    lat: 52.422211,
    lng: 5.61144,
    category: 'politics',
    summary: `Dutch politics has shifted dramatically rightward with Geert Wilders' Freedom Party (PVV) winning the 2023 elections—the first far-right victory in the Netherlands. Wilders, who has campaigned for decades against Islam, immigration, and EU integration, leads a coalition government with center-right parties. His anti-Islam rhetoric, proposals to ban mosques and Quran, and hardline nationalism have transformed from fringe positions to governing agenda. This represents the Netherlands' most significant political realignment in decades, following broader European far-right trend.

The coalition formation required Wilders to moderate some positions—he won't be prime minister (Dick Schoof, a technocrat, holds the role) and most extreme anti-Islam policies were dropped. However, immigration restriction, asylum reduction, and nationalist economic policies define the government. The Netherlands, known for liberal tolerance, has grown less tolerant as integration challenges, housing shortages, and cultural anxieties fuel backlash. The murder of filmmaker Theo van Gogh in 2004 by Islamist extremist marked a turning point in Dutch attitudes toward Islam and immigration.

Economically, the Netherlands is prosperous through trade, agriculture, ports (Rotterdam), and financial services. However, housing crisis affects young Dutch unable to afford homes, nitrogen emissions restrictions anger farmers, and cost of living has risen. These material concerns combine with cultural anxieties about immigration and EU to fuel PVV support. The traditional Dutch political system—consensus-based coalition governance across ideological spectrum—has been disrupted by polarization.

Climate change threatens low-lying Netherlands existentially. Sea level rise, river flooding, and land subsidence require massive investments in water management. The Dutch pioneered flood control but face accelerating challenges. Nitrogen crisis involves emissions from intensive agriculture damaging ecosystems, requiring restrictions that infuriate farming sector. Relations with EU are pragmatic—Netherlands benefits economically but has grown more Eurosceptical. For Dutch, politics now involves tension between traditional tolerance and rising nativism, prosperity and housing crisis, and climate reality versus short-term political expediency.`,
    issues: JSON.stringify([
      'Wilders far-right election victory',
      'Anti-Islam rhetoric becoming mainstream',
      'Housing crisis and affordability',
      'Nitrogen emissions and farmer protests',
      'Climate change threat to low-lying country'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'New Zealand',
    type: 'country',
    country: 'New Zealand',
    lat: -39.759,
    lng: 172.787,
    category: 'politics',
    summary: `New Zealand politics under Prime Minister Christopher Luxon's National Party has shifted right after six years of Jacinda Ardern and Chris Hipkins' Labour government. The 2023 elections saw voters reject Labour over cost-of-living crisis, housing unaffordability, and crime concerns. Luxon leads coalition with ACT (libertarian) and New Zealand First (populist) parties—requiring balancing divergent agendas. The new government has reversed some Labour initiatives including smoking ban phasing and Māori co-governance proposals, while pursuing tax cuts and infrastructure investment.

Māori relations and Treaty of Waitangi interpretation define major political fault line. Labour pursued "Māori co-governance" in health and water management, arguing Treaty requires partnership. The political right opposed this as race-based governance contradicting democratic equality. ACT leader David Seymour has pushed referendum on Treaty principles—highly divisive proposal. Māori constitute 17% of population but experience disproportionate poverty, health disparities, and incarceration. How to address historical injustice while maintaining democratic principles without racial division creates ongoing tension.

Economically, New Zealand's small population (5 million) and remote location create vulnerabilities. The economy relies heavily on agriculture (dairy, meat, wine), tourism, and services. Housing crisis is severe—prices relative to incomes among world's worst, particularly in Auckland. Cost of living pressures from inflation have squeezed middle class. Immigration debates involve skill shortages requiring workers versus infrastructure/housing pressures. The country faces productivity challenges and needs economic diversification beyond commodity exports.

Foreign policy involves balancing between Five Eyes security partnerships (U.S., UK, Canada, Australia) and economic relations with China (largest trading partner). New Zealand maintains more independent stance than Australia on China, angering some allies. Climate change threatens Pacific Island neighbors, making New Zealand morally obligated to leadership. Relations with Australia are extremely close despite sporting rivalry. For New Zealanders, politics involves preserving quality of life, addressing inequality including Māori disparities, and navigating between security and economic priorities in great power competition.`,
    issues: JSON.stringify([
      'Māori co-governance controversy and Treaty debate',
      'Housing affordability crisis',
      'Cost of living and inflation pressures',
      'China-U.S. balancing and Five Eyes tensions',
      'National-ACT-NZ First coalition compromises'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Nicaragua',
    type: 'country',
    country: 'Nicaragua',
    lat: 12.670697,
    lng: -85.069347,
    category: 'politics',
    summary: `Nicaraguan politics has devolved into brutal dictatorship under Daniel Ortega and his wife Vice President Rosario Murillo. Once a Sandinista revolutionary hero who fought Somoza dictatorship in the 1970s, Ortega has become the autocrat he once opposed. After losing power in 1990 elections, he returned in 2007 and has since eliminated all opposition, imprisoned critics, exiled dissidents, and created family dynasty. The 2018 protests against pension reforms escalated to demands for Ortega's resignation; his response was massacre—over 300 killed and thousands imprisoned.

The regime operates through systematic repression. Opposition politicians, journalists, priests, students, and activists face imprisonment on fabricated charges. In 2021, Ortega arrested all credible presidential candidates before "elections" that the international community rejected as fraudulent. The Catholic Church has been targeted—Bishop Rolando Álvarez imprisoned, nuns expelled, Church media closed. Over 5,000 NGOs have been shut down, including charities and professional organizations. Media independent of state has been eliminated. Nicaragua has become one of the Western Hemisphere's most repressive states.

Economically, Nicaragua was Central America's poorest country before 2018, then the crisis devastated it further. Foreign investment fled, sanctions hit, and tourism collapsed. The regime maintains power through state employment, security forces loyalty, and Cuban/Venezuelan intelligence assistance. Russian and Chinese support provides international backing. Relations with the U.S. are hostile—sanctions target regime officials, though they haven't forced change. Regional isolation is growing as Costa Rica hosts Nicaraguan exiles and other democracies condemn Ortega.

Ortega and Murillo have created personality cult mixing revolutionary nostalgia with spiritualism and family dynasty. Their children hold power positions. The couple appears paranoid and increasingly isolated. Opposition operates from exile, with no avenue for change within Nicaragua. Whether the regime can survive Ortega's eventual death or whether Nicaragua faces explosion is uncertain. For Nicaraguans, politics means accepting dictatorship, fleeing (hundreds of thousands have emigrated), or suffering imprisonment. The Sandinista revolution's ideals have been utterly betrayed by its leader.`,
    issues: JSON.stringify([
      'Ortega-Murillo family dictatorship',
      '2018 massacre and ongoing repression',
      'Catholic Church persecution and Bishop imprisonment',
      'All opposition imprisoned or exiled',
      'Economic collapse and mass emigration'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Niger',
    type: 'country',
    country: 'Niger',
    lat: 17.446195,
    lng: 9.504356,
    category: 'politics',
    summary: `Niger's politics was upended by July 2023 military coup overthrowing elected President Mohamed Bazoum. The junta, led by General Abdourahamane Tchiani, suspended the constitution, dissolved institutions, and arrested Bazoum (who remains detained despite international condemnation). The coup followed the pattern of Mali and Burkina Faso—military seizing power citing security failures against jihadist insurgency. Niger has joined the anti-French, pro-Russian bloc of Sahel states, expelled French and U.S. troops, withdrew from ECOWAS, and turned toward Russia including Wagner Group presence.

The jihadist insurgency that justified the coup continues unabated. Boko Haram, ISIS West Africa, and Al-Qaeda affiliates operate across Niger's vast territories, killing soldiers and civilians. The junta claimed it could address security better than elected government, but violence has intensified since the coup. The country faces terrorism from multiple directions—Boko Haram in southeast near Nigeria, ISIS in southwest near Mali/Burkina Faso, and attacks in west. The military has struggled despite Russian support, with mass casualty attacks on soldiers regular occurrences.

Economically, Niger was already one of world's poorest countries, then the coup brought sanctions and aid suspensions. The economy depends on subsistence agriculture, uranium exports, and foreign assistance. ECOWAS sanctions were lifted after Niger withdrew from the organization. Food insecurity is severe, with cycles of famine and malnutrition. Niger also has world's highest fertility rate (6.7 children per woman), creating demographic pressures the economy cannot absorb. Youth unemployment drives migration to Libya/Algeria and recruitment by armed groups.

The coup had geopolitical dimensions. France maintained military presence and influence in former colony, with significant uranium imports from Niger. The junta's anti-French stance reflected popular resentment of neocolonial relationships. Russia has eagerly filled vacuum, providing military support, propaganda, and diplomatic backing. U.S. closure of its drone base removed counterterrorism capabilities. For Nigeriens, politics means accepting military rule while security deteriorates, democracy is suspended, and humanitarian crisis deepens. Whether the junta delivers security improvements to justify its coup appears increasingly unlikely.`,
    issues: JSON.stringify([
      '2023 military coup and Bazoum detention',
      'Jihadist insurgency intensifying despite junta promises',
      'French and U.S. troop expulsions',
      'Russia/Wagner Group pivot',
      'Extreme poverty and world-highest fertility rate'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Nigeria',
    type: 'country',
    country: 'Nigeria',
    lat: 9.439799,
    lng: 7.50322,
    category: 'politics',
    summary: `Nigerian politics under President Bola Tinubu, elected in 2023, has been defined by bold but painful economic reforms. Tinubu removed fuel subsidies and floated the naira currency—long-overdue measures that have caused severe hardship. Inflation has soared, purchasing power collapsed, and cost-of-living crisis has devastated Nigerians. These reforms, while potentially necessary for fiscal sustainability, demonstrate the disconnect between technocratic policy and social reality. Tinubu, a political godfather and Lagos power broker, governs through patronage networks while attempting structural reforms.

Nigeria's security crises span the entire country. Boko Haram and Islamic State West Africa Province continue insurgency in the northeast. Banditry and kidnapping plague the northwest—armed gangs terrorize communities, kidnap for ransom, and operate with impunity. The Middle Belt experiences farmer-herder conflicts with ethnic and religious dimensions, killing thousands. The southeast sees Indigenous People of Biafra (IPOB) separatist agitation and violence. Piracy affects oil-rich Niger Delta. The military is overstretched, poorly equipped, and sometimes complicit. Corruption diverts defense budgets while Nigerians live in terror.

Corruption remains Nigeria's defining challenge despite anti-graft rhetoric from all leaders. Oil revenues have enriched elites for decades while most Nigerians live in poverty. The petroleum sector epitomizes dysfunction—massive theft through oil bunkering, contracts inflated, refineries non-functional despite billions spent. Nigeria imports refined petroleum despite being major crude producer. Politicians loot treasuries, judges are bribed, police demand bribes, and civil servants steal. Economic growth cannot occur amid such systemic corruption.

Nigeria's diversity—over 250 ethnic groups, split roughly between Muslim north and Christian south—creates complex politics. The informal power-sharing system alternates presidency between north and south. Tinubu, a Yoruba southerner (Muslim), follows Hausa northerner Buhari. Regional tensions involve resource control—Niger Delta produces oil but sees limited benefits—and religious conflicts. For Nigeria's 220 million people, Africa's largest population, politics determines whether the country achieves its potential as continental power or remains trapped in insecurity, corruption, and poverty despite vast resources.`,
    issues: JSON.stringify([
      'Fuel subsidy removal and economic hardship',
      'Nationwide insecurity across all regions',
      'Boko Haram, banditry, kidnapping, IPOB',
      'Massive corruption and oil theft',
      'Ethnic and religious tensions'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'North Korea',
    type: 'country',
    country: 'North Korea',
    lat: 39.885252,
    lng: 126.444516,
    category: 'politics',
    summary: `North Korean politics remains the world's most closed totalitarian system under Kim Jong Un's absolute rule. The Kim dynasty—grandfather Kim Il Sung, father Kim Jong Il, now grandson Kim Jong Un—has ruled since 1948 through personality cult, total information control, surveillance state, and brutal repression. No opposition exists, no civil society, no independent thought. Citizens are classified by songbun (loyalty) system determining life opportunities. The state controls everything: where people live, work, marry, and what they believe. Dissent means imprisonment, torture, or execution, often extending to three generations of family.

The nuclear weapons program defines North Korea's international position and domestic legitimacy. Kim Jong Un has accelerated nuclear and missile development, testing ICBMs capable of reaching U.S. mainland. This creates deterrence against regime change but also international isolation through UN Security Council sanctions. The nuclear program is tied to regime survival narrative—without nuclear weapons, the U.S. would overthrow Kim like Hussein or Gaddafi. Negotiations have repeatedly failed: denuclearization for sanctions relief sounds simple but neither side trusts the other to implement in verifiable ways.

Economically, North Korea is impoverished beyond measure, though regime elites live lavishly. Sanctions have bitten hard, but China provides enough economic lifeline to prevent collapse. Markets have gradually expanded despite ideological concerns, with quasi-capitalism emerging in grey areas of official control. The country suffered devastating famine in 1990s that killed perhaps 1-3 million. Food insecurity persists, malnutrition is widespread, and most citizens struggle for basic survival. COVID-19 border closure (2020-2023) created further isolation and hardship.

Relations with South Korea have deteriorated under Kim Jong Un. Initial optimism from 2018-2019 Trump-Kim summits and Moon Jae-in's engagement have evaporated. Kim has declared reunification impossible and South Korea as permanent enemy. The nuclear arsenal is now explicitly directed at South Korea, not just U.S. Relations with Russia have grown closer, with North Korea providing weapons for Ukraine war in exchange for technology. For North Koreans, politics doesn't exist—only survival under totalitarian rule, with escape to China or defection to South Korea the only options for those willing to risk death.`,
    issues: JSON.stringify([
      'Kim dynasty totalitarian control',
      'Nuclear weapons program and ICBM tests',
      'Economic collapse and food insecurity',
      'Total information control and repression',
      'Russia weapons trade for Ukraine war'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Norway',
    type: 'country',
    country: 'Norway',
    lat: 61.357092,
    lng: 9.679975,
    category: 'politics',
    summary: `Norwegian politics under Prime Minister Jonas Gahr Støre's Labour-Center coalition has managed Norway's transformation from reliable Russian gas partner to Europe's essential energy supplier post-Ukraine invasion. The Ukraine war made Norway geopolitically vital—its North Sea gas production partially replaces Russian supplies to Europe. This windfall revenue (oil and gas export boom) has enriched the already massive sovereign wealth fund (over $1.6 trillion, world's largest). However, debates continue over climate commitments versus hydrocarbon production, and how to spend wealth versus save for future generations.

Norway's political culture emphasizes equality, consensus, and social solidarity through the Nordic model. The Labour Party and Conservatives alternate in power, though both accept welfare state fundamentals, high taxes, and active government. Coalition governments are normal, requiring negotiation and compromise. The political spectrum is narrow compared to other countries—extremism is marginal and democratic norms deeply rooted. The Progress Party on right and Left/Socialist Left on left represent more ideological positions but operate within consensus framework.

The sovereign wealth fund—built from oil revenues since the 1990s—represents intergenerational thinking rare in politics. Only 3% annual withdrawal is permitted, ensuring sustainability. The fund invests globally, making Norway significant shareholder in many companies. This creates ethical debates about investments in weapons, fossil fuels, and authoritarian states. Norway combines oil production with electric vehicle adoption (over 80% of new car sales), illustrating pragmatism over ideological purity on climate.

Relations with Russia have become tense after years of cooperative management of Arctic and Barents Sea affairs. Norway shares Arctic border with Russia, creating security concerns amplified by Ukraine war. NATO membership is central to security, with increased defense cooperation and U.S. presence. Relations with EU are complex—Norway is not a member (referendums in 1972 and 1994 rejected membership) but participates in single market through European Economic Area. For Norwegians, politics means managing wealth responsibly, maintaining welfare state, and navigating between prosperity's comforts and global responsibilities around climate and security.`,
    issues: JSON.stringify([
      'Energy windfall from replacing Russian gas',
      'Climate commitments versus oil production',
      '$1.6 trillion sovereign wealth fund management',
      'Russia Arctic border security concerns',
      'EU relations without membership'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Oman',
    type: 'country',
    country: 'Oman',
    lat: 22.120427,
    lng: 57.336553,
    category: 'politics',
    summary: `Omani politics under Sultan Haitham bin Tariq operates as absolute monarchy where the sultan exercises ultimate authority. Sultan Haitham succeeded Sultan Qaboos bin Said in 2020 after the latter's 50-year reign transformed Oman from isolated backwater to modern state. Qaboos was revered for bringing development, maintaining peace, and positioning Oman as regional mediator. Haitham has continued this approach while facing economic pressures requiring reforms. Oman's political system allows no opposition, limited freedom, but also avoids repression levels seen in other Gulf states.

Oman's foreign policy is distinctive in the Gulf—maintaining relations with all sides rather than joining Saudi-UAE axis against Iran. Oman has historically mediated between rivals, hosting back-channel talks including those leading to Iran nuclear deal. This neutrality reflects Ibadi Islam (distinct from Sunni/Shi'a), strategic autonomy tradition, and pragmatic assessment that Oman lacks power for confrontational policies. Relations with Iran are functional despite Arab neighbors' hostility. The Yemen war saw Oman refuse participation in Saudi-led coalition, maintaining humanitarian access and mediation role.

Economically, Oman faces challenges unlike wealthier Gulf neighbors. Oil and gas provide revenues but reserves are smaller and production declining. The country needs economic diversification but has struggled despite Vision 2040 plans. Youth unemployment creates social pressures. Tourism, logistics, and renewable energy are targeted sectors. Public debt has grown significantly, requiring fiscal consolidation including subsidy cuts and tax introductions that are unpopular. Oman lacks the vast wealth to buy social peace like Saudi Arabia or UAE can.

Succession planning worked smoothly in 2020, contrary to fears of instability. Sultan Haitham has modernized some policies—women's rights improvements, modest economic liberalization—while maintaining traditional monarchical authority. Relations with neighbors have improved, with Saudi rapprochement after years of tension. Relations with the West remain strong through defense ties and shared security interests. For Omanis, politics means accepting monarchical rule in exchange for stability, gradual development, and avoidance of regional conflicts that devastated neighbors like Yemen. Whether economic pressures force faster political reform remains to be seen.`,
    issues: JSON.stringify([
      'Absolute monarchy with limited freedoms',
      'Economic pressures and diversification challenges',
      'Declining oil reserves and debt growth',
      'Regional neutrality and Iran relations',
      'Youth unemployment and fiscal reforms'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Pakistan',
    type: 'country',
    country: 'Pakistan',
    lat: 29.328389,
    lng: 68.545632,
    category: 'politics',
    summary: `Pakistani politics has been dominated by military's removal of populist Prime Minister Imran Khan and his party's subsequent persecution. Khan was ousted through April 2022 no-confidence vote that he claims was U.S.-backed coup. His Pakistan Tehreek-e-Insaf (PTI) party was crushed through arrests, forced defections, media blackouts, and election rigging. Khan himself imprisoned on multiple charges widely seen as politically motivated. The current coalition government under Prime Minister Shehbaz Sharif operates under military control, while Khan remains popular martyr-figure among supporters who believe democratic process was stolen.

The military's influence—called "the establishment"—defines Pakistani politics. The army has directly ruled for nearly half of Pakistan's history through coups and continues exercising decisive power even under civilian governments. Inter-Services Intelligence (ISI) agency operates parallel power structure. The military determines foreign policy, particularly regarding India, Afghanistan, and nuclear weapons. Politicians who challenge military prerogatives face removal—as Khan discovered despite initially enjoying military support. The PPP (Bhutto family) and PML-N (Sharif family) dynastic parties accommodate military influence to remain in politics.

Economic crisis threatens Pakistan's stability. The country has lurched from IMF bailout to IMF bailout, with foreign reserves depleted, currency collapsing, and inflation devastating ordinary Pakistanis. The circular debt in energy sector, subsidies draining budget, tax base too narrow, and elite tax evasion create fiscal impossibility. Each government makes promises of reform, implements painful measures for IMF loans, then fails to address structural problems. Chinese debt from CPEC (China-Pakistan Economic Corridor) infrastructure projects adds burden without delivering promised transformation.

Terrorism and religious extremism remain serious threats. Tehrik-i-Taliban Pakistan (TTP) has resurged since Afghan Taliban takeover, conducting attacks from Afghan sanctuary. Balochistan separatist insurgency continues. Sectarian violence targets Shi'a minority. Kashmir dispute with India creates constant tensions and has led to nuclear-armed crises. Relations with Afghanistan are hostile over TTP. For Pakistan's 240 million people, politics means accepting military dominance, economic instability, and security threats while democratic development remains stunted. Khan's imprisonment has radicalized many young Pakistanis against the establishment, though whether this translates to meaningful change is unclear.`,
    issues: JSON.stringify([
      'Imran Khan imprisonment and PTI persecution',
      'Military establishment control of politics',
      'Economic crisis and IMF bailout dependency',
      'TTP terrorism resurgence',
      'Kashmir dispute and India tensions'
    ]),
    topStories: JSON.stringify([])
  }
]

async function insertPoliticsBatch5() {
  console.log('🚀 Starting Politics Batch 5 insertion (Latvia - Pakistan)')
  console.log(`📊 ${politicsSummaries.length} countries to insert\n`)

  let successCount = 0
  let errorCount = 0

  for (const summary of politicsSummaries) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: summary.name,
            type: summary.type,
            category: summary.category,
          },
        },
        update: {
          summary: summary.summary,
          issues: summary.issues,
          topStories: summary.topStories,
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: summary,
      })

      console.log(`✅ Inserted Politics summary for ${summary.name}`)
      successCount++
    } catch (error) {
      console.error(`❌ Error inserting ${summary.name}:`, error)
      errorCount++
    }
  }

  console.log(`\n✅ Batch 5 complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Errors: ${errorCount}`)
}

insertPoliticsBatch5()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
