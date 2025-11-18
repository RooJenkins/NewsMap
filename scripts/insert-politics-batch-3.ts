import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Politics summaries for Cyprus through Honduras (Batch 3 of 6)
const politicsSummaries = [
  {
    name: 'Cyprus',
    type: 'country',
    country: 'Cyprus',
    lat: 34.913329,
    lng: 33.084182,
    category: 'politics',
    summary: `Cypriot politics is dominated by the island's partition since 1974 Turkish invasion and occupation of the northern third. The Republic of Cyprus, internationally recognized, controls the south and is an EU member, while the Turkish Republic of Northern Cyprus (TRNC) is recognized only by Turkey. President Nikos Christodoulides, elected in 2023 as an independent backed by center-right parties, leads efforts to resolve the Cyprus problem while managing EU relations and economic policy. The reunification question has defined Cypriot politics for half a century, with multiple negotiation attempts failing to bridge fundamental differences.

The political spectrum divides between those favoring a federal solution (bizonal, bicommunal federation) and those increasingly skeptical that reunification is achievable. Right-wing parties like Democratic Rally (DISY) and left-wing AKEL both support reunification in principle but differ on details and compromise willingness. The Turkish Cypriot side under President Ersin Tatar has hardened toward a two-state solution backed by Turkey's President Erdoğan. This creates an impasse: Greek Cypriots reject two states as legitimizing occupation, while Turkish Cypriots reject federal models they fear would leave them politically marginalized.

Domestically, Cyprus has recovered from the 2013 banking crisis that required EU bailout and deposit haircuts. The economy now relies on tourism, professional services, shipping registry, and increasingly becoming a business hub for international firms. However, the passport-for-investment scandal damaged Cyprus's reputation, with the EU forcing program cancellation due to corruption and security concerns. Relations with neighboring states are complex—tensions with Turkey over maritime zones and gas exploration, close ties with Greece, warming relations with Israel and Egypt through energy partnerships. The British sovereign base areas add another layer to Cyprus's complex sovereignty arrangements. For Cypriots, politics means living with division while hoping for reunification that grows more distant with each passing year. Younger generations increasingly accept partition as reality rather than temporary anomaly.`,
    issues: JSON.stringify([
      'Cyprus partition and reunification impasse',
      'Turkish occupation and two-state solution push',
      'Maritime zones disputes and gas exploration',
      'Passport-for-investment scandal and corruption',
      'Turkish Cypriot political marginalization'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Czech Republic',
    type: 'country',
    country: 'Czech Republic',
    lat: 49.882364,
    lng: 15.377555,
    category: 'politics',
    summary: `Czech politics under Prime Minister Petr Fiala's center-right coalition represents a return to pro-European, Atlanticist orientation after populist disruption under Andrej Babiš. Fiala's five-party coalition—spanning liberals, Christian democrats, and conservatives—won in 2021 promising to restore democratic norms, fight corruption, and strengthen EU ties. The government has strongly supported Ukraine, providing weapons and hosting over 400,000 refugees. However, economic challenges including inflation and energy costs have eroded public support, with Babiš's ANO party leading in opinion polls.

President Petr Pavel, a former NATO general elected in 2023, provides strong pro-Western leadership contrasting with his predecessor Miloš Zeman's Russia-friendly positions. The presidency is largely ceremonial but symbolically important, and Pavel has used his office to strengthen ties with NATO allies and support Ukraine. Czech politics also features a populist right represented by Freedom and Direct Democracy (SPD) party, which opposes immigration and EU integration, though it remains outside governing coalitions.

The Czech Republic has one of Europe's strongest economies, with low unemployment and diverse manufacturing base including auto industry and engineering. However, energy dependence on Russian supplies created vulnerability exposed by Ukraine war, requiring painful adjustments. Corruption remains a concern despite anti-graft efforts—Babiš himself faces fraud charges related to EU subsidies, though prosecutions have been politically contentious. Relations with Slovakia, the former federation partner, are cooperative though tensions occasionally surface. Czech society is highly secular, pragmatic, and Eurosceptical in parts—many Czechs support EU membership for economic benefits while opposing deeper integration. The rise of the Pirates and Mayors party reflected demand for new politics, though they've struggled in government. For Czechs, politics involves balancing Western integration with concerns about sovereignty, migration, and maintaining the social market model that has brought relative prosperity since communism's end.`,
    issues: JSON.stringify([
      'Coalition unpopularity and Babiš comeback threat',
      'Energy crisis and inflation pressures',
      'Ukraine support and refugee integration',
      'Corruption and Babiš fraud trials',
      'Euroscepticism versus EU membership benefits'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Democratic Republic of Congo',
    type: 'country',
    country: 'Democratic Republic of Congo',
    lat: -1.858167,
    lng: 23.458829,
    category: 'politics',
    summary: `The Democratic Republic of Congo under President Félix Tshisekedi has experienced both hope and disappointment since his 2019 election ended Joseph Kabila's 18-year rule. Tshisekedi's re-election in December 2023 was marred by serious irregularities, delays, and opposition allegations of fraud—raising questions about democratic progress. The son of historic opposition leader Étienne Tshisekedi, he initially governed in uncomfortable coalition with Kabila before breaking free to form his own majority. However, promises of reform, anti-corruption, and peace have largely failed to materialize amid entrenched interests and structural challenges.

Eastern DRC remains engulfed in conflict involving over 120 armed groups, with the M23 rebel movement (backed by Rwanda) controlling significant territory and displacing millions. The humanitarian catastrophe is staggering: over 7 million internally displaced, widespread sexual violence, and regular massacres of civilians. Government forces, often unpaid and undisciplined, are themselves perpetrators of abuses. UN peacekeeping mission MONUSCO is withdrawing despite ongoing insecurity, at government request following public hostility to its perceived ineffectiveness. Regional dynamics drive conflict—Rwanda and Uganda pursue security and economic interests, while DRC accuses them of sponsoring proxies to plunder minerals.

The economy presents a paradox: DRC possesses perhaps the world's greatest mineral wealth—cobalt, copper, gold, diamonds, coltan—yet its population endures extreme poverty. Mining contracts signed under Kabila enriched elites while providing minimal state revenues. Tshisekedi has attempted renegotiating deals but faces powerful interests and lack of institutional capacity. Chinese companies dominate mining sector through infrastructure-for-minerals deals. Corruption permeates all levels—DRC consistently ranks among the world's most corrupt countries. Infrastructure is catastrophically inadequate even by African standards. For Congolese, politics means a predatory state unable to provide security or services, where mineral wealth funds conflict rather than development. The question is whether this vast country can escape the resource curse and build functional institutions, or whether it remains a collapsed state with formal sovereignty.`,
    issues: JSON.stringify([
      'Eastern conflict and M23 rebel control',
      '7 million displaced and humanitarian catastrophe',
      'Rwanda-Uganda proxy involvement and mineral plunder',
      'Resource curse and mineral wealth corruption',
      'Electoral fraud and democratic backsliding'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Denmark',
    type: 'country',
    country: 'Denmark',
    lat: 55.966965,
    lng: 9.018163,
    category: 'politics',
    summary: `Danish politics has shifted rightward on immigration and integration despite a center-left government led by Prime Minister Mette Frederiksen's Social Democrats. Frederiksen has pursued a "tough on immigration" approach unusual for European social democracy, implementing policies like offshore asylum processing, jewelry confiscation from refugees, and Syrian refugee return policies. This represents a calculated response to right-wing populist Danish People's Party (DF) that reshaped Danish politics in the 2000s-2010s. The strategy has successfully reclaimed working-class voters from the far-right while generating criticism from human rights groups.

Frederiksen governs a minority coalition dependent on parliamentary support, requiring constant negotiation. The 2022 election saw the Social Democrats win but needing to form Denmark's first true left-center-right government, including Liberals and Moderates. This reflects Danish political culture's emphasis on consensus and compromise, though it also creates policy moderation that frustrates ideological factions. The far-right DF has declined as mainstream parties adopted their immigration positions, while newer parties across the spectrum fragment the landscape.

Denmark maintains a generous welfare state funded by high taxes and strong public support for the "Nordic model." The country consistently ranks among the world's happiest, least corrupt, and most economically competitive. However, challenges accumulate: aging population straining healthcare and pensions, climate adaptation for a low-lying nation, and debates about work-life balance as employment rates approach maximum. The Faroe Islands and Greenland self-governing territories periodically revive independence discussions, particularly Greenland where climate change, mineral resources, and geopolitics intersect.

Denmark's NATO membership includes strong support for Ukraine and defense spending increases responding to Russian aggression. Relations with Sweden remain close despite symbolic competition, while ties with Germany sometimes feature historical sensitivities. The monarchy remains popular and uncontroversial. For Danes, politics involves defending a successful social model against pressures from immigration, globalization, and changing geopolitics—a balancing act between openness and protectiveness, welfare generosity and fiscal sustainability, that Denmark has managed better than most.`,
    issues: JSON.stringify([
      'Immigration restrictions and Social Democrat rightward shift',
      'Offshore asylum processing controversy',
      'Welfare state sustainability and aging population',
      'Greenland independence sentiment and Arctic geopolitics',
      'NATO expansion and Ukraine support'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Dominican Republic',
    type: 'country',
    country: 'Dominican Republic',
    lat: 19.104137,
    lng: -70.653998,
    category: 'politics',
    summary: `Dominican politics is dominated by President Luis Abinader's Modern Revolutionary Party (PRM), which won power in 2020 ending the Dominican Liberation Party's (PLD) long dominance. Abinader secured re-election in 2024 with a landslide, reflecting public approval of anti-corruption efforts, COVID-19 management, and economic growth. His presidency has pursued institutional reforms, infrastructure investment, and tourism development while facing criticism over Haitian migration policies. The PRM's success reflects voter exhaustion with PLD corruption scandals and desire for political renewal.

The Haitian migration issue dominates political discourse and reveals deep tensions. The Dominican Republic hosts hundreds of thousands of Haitian migrants, many undocumented, who work in construction, agriculture, and services. The government has implemented mass deportations, border wall construction, and canal disputes with Haiti—policies popular domestically but internationally controversial. The 2013 Constitutional Court ruling retroactively stripping citizenship from Dominicans of Haitian descent exposed racial and national identity anxieties. Relations with Haiti are characterized by economic interdependence and social hostility, with Dominicans fearful of instability spillover.

Economically, the Dominican Republic has been the Caribbean's growth star, with tourism, free trade zones, remittances, and services driving expansion. The country has diversified beyond sugar into medical tourism, call centers, and business services. However, inequality persists, informal economy employs many, and corruption remains problematic despite reforms. Infrastructure has improved dramatically with new metros, roads, and ports. U.S. diaspora maintains strong ties and sends billions in remittances.

The political system features competitive elections, peaceful power transfers, and vibrant civil society. However, challenges include judicial independence concerns, police violence, gender-based violence rates, and drug trafficking transit routes. The electricity system's chronic dysfunction frustrates citizens despite privatization attempts. For Dominicans, politics involves defending prosperity and stability against perceived threats from Haiti while addressing inequality and corruption. The country's trajectory—economic success with democratic stability—stands in sharp contrast to regional neighbors.`,
    issues: JSON.stringify([
      'Haitian migration and mass deportation policies',
      'Border tensions and canal dispute with Haiti',
      'Citizenship stripping of Dominicans of Haitian descent',
      'Corruption legacy and institutional reforms',
      'Electricity system dysfunction'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Ecuador',
    type: 'country',
    country: 'Ecuador',
    lat: -1.259076,
    lng: -78.188375,
    category: 'politics',
    summary: `Ecuadorian politics has been convulsed by the rise of drug trafficking violence that has transformed a relatively peaceful country into one of Latin America's most dangerous. President Daniel Noboa, elected in 2023 at age 35 as a political outsider, governs amid a security crisis that has seen murder rates quintuple since 2018. His declaration of "internal armed conflict" against drug gangs, deployment of military to prisons, and hardline security approach reflect desperation as Mexican and Balkan cartels battle for control of cocaine routes to Europe and the U.S., using Ecuador's Pacific ports.

The crisis reached symbolism with the January 2024 live television storming by armed gang members—an unprecedented display of impunity that shocked the nation. Prisons have become cartel headquarters where massacres kill hundreds, politicians face assassination, journalists are murdered, and state authority has collapsed in certain areas. Noboa's emergency measures have produced some results but raised human rights concerns. The violence has overwhelmed Ecuador's inexperienced security forces and exposed deep state corruption—police and prison officials collude with gangs.

Politically, Ecuador swung from Rafael Correa's left-wing "Citizen Revolution" (2007-2017) to center-right governance under Lenín Moreno and Guillermo Lasso. Correa's populist socialism brought infrastructure, poverty reduction, and Chinese investment, but also authoritarianism, corruption, and economic mismanagement. His political movement ISMO remains influential though Correa lives in Belgian exile avoiding corruption convictions. Lasso's presidency ended early when he dissolved Congress to avoid impeachment—a constitutional mechanism producing fresh elections.

Economic challenges compound security crisis: dollarization prevents monetary policy tools, oil dependence creates fiscal vulnerability, debt levels constrain spending, and violence devastates tourism and investment. Indigenous movements periodically paralyze the country through protests over fuel subsidies and resource extraction. Relations with neighbors are generally stable, though Colombian and Venezuelan criminal networks drive violence. For Ecuadorians, politics now means desperate search for security as their country's transformation from peaceful to violent has been shockingly rapid.`,
    issues: JSON.stringify([
      'Drug cartel violence and murder rate explosion',
      'Prison massacres and gang control',
      'Internal armed conflict declaration',
      'Political instability and Correa movement persistence',
      'Economic dollarization constraints'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Egypt',
    type: 'country',
    country: 'Egypt',
    lat: 26.186173,
    lng: 29.445837,
    category: 'politics',
    summary: `Egyptian politics under President Abdel Fattah el-Sisi remains authoritarian after his 2013 military coup against elected Islamist president Mohamed Morsi. Sisi secured a third term in 2023 elections that were neither free nor fair, with genuine opposition excluded, imprisoned, or exiled. The security state exercises total control—dissent is crushed, independent media eliminated, civil society destroyed, and tens of thousands of political prisoners languish in brutal conditions. The brief Arab Spring democratic opening of 2011-2013 has been thoroughly reversed, with repression arguably worse than under Hosni Mubarak.

Sisi justifies authoritarianism through security and stability narratives. He points to chaos in Libya, Syria, and Yemen to argue Egypt avoided similar fate through strong leadership. The regime has waged counterinsurgency in Sinai against ISIS affiliate, though with limited transparency about casualties and tactics. The Muslim Brotherhood, once Egypt's most powerful opposition, has been decimated through mass arrests, death sentences, and terrorist designations. Liberal and secular opposition faces similar repression—activists, journalists, and human rights defenders risk imprisonment for any criticism.

Economically, Egypt faces severe crisis despite massive infrastructure projects. The pound has been repeatedly devalued, inflation devastates purchasing power, debt has ballooned to unsustainable levels, and IMF bailouts come with painful conditions. Sisi's megaprojects—new capital city, expanded Suez Canal, roads and bridges—have consumed resources while failing to deliver promised growth. The military controls perhaps 40% of the economy through business empire that crowds out private sector. Subsidies for bread and fuel drain budgets but are politically untouchable. Currency shortage creates import crisis affecting medicines and essentials.

Regionally, Egypt seeks leadership through mediation—Gaza conflicts, Sudan crisis, Libya stabilization. Relations with Israel remain cold but functional, based on security cooperation and peace treaty. Gulf states, particularly UAE and Saudi Arabia, provide financial support essential for regime survival. U.S. relationship continues despite human rights concerns, with Egypt receiving $1.3 billion annual military aid. For Egyptians, politics means accepting authoritarian stability while economic hardship deepens, with emigration the main outlet for frustration.`,
    issues: JSON.stringify([
      'Sisi authoritarianism and mass political imprisonment',
      'Economic crisis and currency devaluation',
      'Military economic dominance and crowding out',
      'Sinai insurgency and counterterrorism',
      'Debt crisis and IMF bailout conditions'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'El Salvador',
    type: 'country',
    country: 'El Salvador',
    lat: 13.685371,
    lng: -88.890124,
    category: 'politics',
    summary: `Salvadoran politics has been revolutionized by President Nayib Bukele's "war on gangs" that has made him Latin America's most popular leader while alarming human rights observers. Bukele, first elected in 2019 and re-elected in 2024 with 85% despite constitutional prohibition, has imprisoned over 75,000 suspected gang members under states of emergency suspending constitutional rights. Murder rates have plummeted from among the world's highest to relative safety, transforming daily life for Salvadorans terrorized by MS-13 and Barrio 18 gangs. This security miracle has generated overwhelming popular support despite authoritarian methods.

Bukele's approach involves mass arrests without due process, prison conditions that international organizations call inhumane, and security forces given broad impunity. His mega-prison—Terrorism Confinement Center—houses 40,000 inmates in deliberately harsh conditions broadcast on social media as deterrent. Bukele markets himself through Twitter and memes as a millennial strongman fighting corruption and crime that traditional parties enabled. He has systematically undermined democratic institutions: dismissing Supreme Court judges, removing the attorney general, controlling legislature through his New Ideas party, and eliminating independent media criticism.

The economic agenda includes adopting Bitcoin as legal tender—a global first that has largely failed in practice, with most Salvadorans not using it and IMF refusing support. However, tourism has surged as crime fell, foreign investment increased, and remittances from U.S. diaspora continue flowing. Bukele has cultivated ambiguous international positioning—engaging with both Trump and leftist leaders, hosting Bitcoin conferences, and keeping great powers guessing about El Salvador's alignment.

The transformation's sustainability is questionable. Can gang structure be permanently destroyed or will it regenerate? Will imprisoned members eventually be released, and with what process? Has Bukele created a security state that won't voluntarily relinquish emergency powers? Opposition parties are decimated, civil society cowed, and no credible alternatives exist. For Salvadorans, politics means accepting the Bukele bargain: trading freedoms and democratic norms for security and order after decades of gang terror. Whether this represents a replicable model or cautionary tale about authoritarian populism remains debated across Latin America.`,
    issues: JSON.stringify([
      '75,000+ imprisoned under gang crackdown',
      'Emergency powers and constitutional rights suspension',
      'Democratic backsliding and institutional control',
      'Bitcoin adoption failure and economic experimentation',
      'Re-election despite constitutional prohibition'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Estonia',
    type: 'country',
    country: 'Estonia',
    lat: 58.724865,
    lng: 25.867126,
    category: 'politics',
    summary: `Estonian politics is defined by its frontline position facing Russia and determination to maintain independence through NATO, EU, and digital innovation. Prime Minister Kaja Kallas, who led since 2021, became the EU's first female prime minister and one of Europe's most hawkish voices on Russia. Her Reform Party government has been the loudest advocate for maximum pressure on Russia, military aid to Ukraine, and European rearmament. This reflects existential understanding from Estonia's history—Soviet occupation, deportations, and 1991 independence gained as USSR collapsed.

Kallas's uncompromising stance has won international admiration but created domestic political vulnerability. The 2023 elections saw her Reform Party win but requiring coalition with conservative and social democratic parties. Estonia's Russian-speaking minority (about 25% of population) complicates politics—many hold Russian citizenship or are "undetermined" stateless persons, creating integration challenges and security concerns. The government has pushed Estonian language requirements and citizenship naturalization while investigating Russian influence networks. Relations with Moscow are hostile, with Estonia among the staunchest supporters of Ukraine.

Economically, Estonia has embraced digital transformation more thoroughly than any nation. E-residency, digital signatures, blockchain healthcare, and online voting make Estonia a "digital republic." Tech startups per capita exceed most countries, with Skype and Wise (formerly TransferWise) the most famous examples. However, challenges include aging population, limited domestic market, and exposure to EU economic cycles. Inflation has hit hard, eroding living standards despite overall prosperity. Estonia's NATO membership includes hosting allied troops and significant defense spending increases.

The political system features proportional representation producing coalition governments, robust rule of law, and very low corruption. Russian disinformation and cyber threats require constant vigilance—Estonia experienced massive cyberattacks in 2007 and has since built sophisticated digital defenses and cyber doctrine. Relations with Latvia and Lithuania through Baltic cooperation are close, while Nordic ties (particularly Finland) are culturally and economically significant. For Estonians, politics means permanent readiness against Russian threat while building a modern digital society—combining security vigilance with innovation optimism.`,
    issues: JSON.stringify([
      'Russia threat and frontline NATO position',
      'Russian-speaking minority integration and citizenship',
      'Kallas hardline stance and Ukraine support',
      'Cyber security and digital infrastructure defense',
      'Inflation and cost of living pressures'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Ethiopia',
    type: 'country',
    country: 'Ethiopia',
    lat: 8.032795,
    lng: 39.0886,
    category: 'politics',
    summary: `Ethiopian politics under Prime Minister Abiy Ahmed has traversed from Nobel Peace Prize to civil war catastrophe. Abiy came to power in 2018 promising democratic opening, ethnic reconciliation, and peace with Eritrea after decades of authoritarian rule. Initially he delivered reforms, released political prisoners, and invited exiled opposition home. However, his centralization efforts clashed with Ethiopia's ethnic federalism system, triggering the devastating Tigray War (2020-2022) that killed hundreds of thousands and created famine conditions. A November 2022 ceasefire has held, but peace remains fragile.

The Tigray conflict revealed Ethiopia's deep fractures. Abiy's Prosperity Party sought to replace ethnic-based politics with pan-Ethiopian nationalism, threatening regional power structures. The Tigray People's Liberation Front (TPLF), which dominated Ethiopia for nearly three decades until 2018, refused subordination. The resulting war involved massacres, mass rape, ethnic cleansing, and deliberate starvation. Eritrean forces and Amhara militias fought alongside federal troops against Tigray Defense Forces. The humanitarian catastrophe drew international condemnation, though African Union mediation eventually produced ceasefire.

Other conflicts compound instability: Oromo Liberation Army insurgency continues, Amhara region faces unrest over regional status changes, and localized ethnic violence flares across the federation. The ethnic federalism model—granting regional autonomy to nationality groups—has produced both minority empowerment and centrifugal tensions. Abiy's project of centralization challenges this architecture without clear alternative. The military has grown increasingly powerful, human rights violations are systematic, and political space has contracted despite reform rhetoric.

Economically, Ethiopia pursued ambitious development under the Ethiopian People's Revolutionary Democratic Front, achieving strong growth. However, debt distress, inflation, and war damage have created crisis. The Grand Ethiopian Renaissance Dam project proceeds despite Egyptian opposition over Nile waters. U.S.-Ethiopia relations soured over Tigray atrocities, though some normalization has occurred. For Ethiopians, politics determines survival in a country fracturing along ethnic lines, where Abiy's promise of unity has produced fragmentation and violence. Whether Ethiopia can achieve genuine federal democracy or fragments further remains uncertain.`,
    issues: JSON.stringify([
      'Tigray War aftermath and fragile ceasefire',
      'Ethnic federalism versus centralization tensions',
      'Oromo insurgency and Amhara unrest',
      'Humanitarian crisis and atrocities accountability',
      'GERD dispute with Egypt over Nile waters'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Fiji',
    type: 'country',
    country: 'Fiji',
    lat: -17.826099,
    lng: 177.975427,
    category: 'politics',
    summary: `Fijian politics has been dominated by ethnic tensions between indigenous iTaukei and Indo-Fijian communities since independence. Prime Minister Sitiveni Rabuka's return to power in 2022 marked a democratic transition after Voreqe Bainimarama's 16-year rule that began with a 2006 coup. Rabuka himself led two coups in 1987, but now presents as a democrat committed to constitutional governance. His coalition government faces the challenge of balancing ethnic interests, managing the economy, and navigating great power competition between China and the West in the Pacific.

Fiji's politics reflects the country's unusual demographics—roughly 57% iTaukei and 37% Indo-Fijians (descendants of British colonial-era indentured laborers). The 1987 and 2000 coups were explicitly motivated by iTaukei nationalism against Indo-Fijian political power. Bainimarama's 2006 coup, while also unconstitutional, claimed to end ethnic politics and promote "Fijian" identity over ethnic divisions. His FijiFirst party created a more inclusive framework but governed increasingly autocratically. Rabuka's return in democratic elections suggests both democratic resilience and unfinished business around ethnic power-sharing.

Economically, Fiji depends on tourism, sugar, remittances, and services. COVID-19 devastated tourism, exposing vulnerability. Chinese investment and debt have grown significantly, creating concerns about influence and sovereignty. Fiji hosts important regional institutions and positions itself as Pacific leader. Climate change poses existential threat to this low-lying island nation—sea level rise, cyclone intensity, and coral reef destruction. Relations with neighbors involve both cooperation through Pacific Islands Forum and rivalry for regional influence.

The 2013 constitution removed ethnic voting rolls and reserved seats, creating more civic than ethnic identity framework. However, iTaukei affirmative policies in land ownership and public service persist, reflecting indigenous rights versus equal citizenship tensions. The military has intervened repeatedly in politics, and its role remains ambiguous. For Fijians, politics involves managing ethnic diversity, economic development, and sovereignty in an era where climate change and geopolitics threaten small island nations. Rabuka's democratic governance test is whether he can avoid the authoritarian instincts that marked his earlier career.`,
    issues: JSON.stringify([
      'iTaukei-Indo-Fijian ethnic tensions and power-sharing',
      'Coup legacy and democratic consolidation',
      'Chinese investment and debt sustainability',
      'Climate change existential threat',
      'Tourism dependency and COVID-19 recovery'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Finland',
    type: 'country',
    country: 'Finland',
    lat: 63.252361,
    lng: 27.276449,
    category: 'politics',
    summary: `Finnish politics has been transformed by NATO accession in 2023—ending 75 years of military non-alignment in direct response to Russia's Ukraine invasion. Prime Minister Petteri Orpo's center-right coalition governs with the nationalist Finns Party, marking a rightward shift in traditionally centrist Finnish politics. This government has pursued tighter immigration policies, fiscal discipline, and assertive security posture. The inclusion of Finns Party leader Riikka Purra as finance minister represents mainstreaming of right-wing populism that was unthinkable a decade ago.

Finland's relationship with Russia fundamentally changed after February 2022. The 1,300 km border—EU's longest with Russia—is now heavily militarized NATO frontier. Russia has responded with hybrid threats: instrumentalizing migrants, closing border crossings, and threatening consequences. Finland has demonstrated remarkable unity and resolve in response, with over 80% supporting NATO membership. The "Finlandization" era, when Finland carefully managed Soviet/Russian sensitivities while maintaining independence, is definitively over. This represents one of European security's most significant reconfigurations.

Economically, Finland combines competitive market economy with generous welfare state. The country consistently ranks highest in happiness, education quality, and low corruption. However, challenges mount: aging population strains welfare costs, Nokia's decline left industrial gaps, Russian trade cutoff impacts eastern regions, and public debt has grown. The economy has struggled with low growth and competitiveness concerns. Labor markets feature strong unions and consensus-based decision-making through the "Nordic model."

Immigration has become increasingly contentious politically. The Finns Party has grown by opposing refugee resettlement and criticizing multiculturalism. Finland accepted fewer refugees than other Nordic countries and has implemented restrictive policies. Language and integration requirements are strict. Relations with Sweden remain close through Nordic cooperation, while EU membership is pragmatically supported though Finns are cooler on integration than some members. For Finns, politics now means adapting to being a frontline NATO state while preserving the social model and navigating between security necessities and democratic values.`,
    issues: JSON.stringify([
      'NATO accession and Russia border militarization',
      'Finns Party in government and rightward shift',
      'Immigration restrictions and integration debates',
      'Economic stagnation and competitiveness challenges',
      'Russian hybrid threats and border incidents'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'France',
    type: 'country',
    country: 'France',
    lat: 46.696113,
    lng: 2.552275,
    category: 'politics',
    summary: `French politics under President Emmanuel Macron has been marked by chronic instability, violent protests, and far-right surge. Macron won a second term in 2022 by defeating Marine Le Pen's National Rally, but his centrist coalition lost its parliamentary majority, forcing uncomfortable compromises. His pension reform raising retirement age from 62 to 64 sparked massive protests and strikes, while he used constitutional mechanism to bypass parliament—fueling accusations of democratic deficit. Macron's technocratic liberalism has failed to build lasting political movement, leaving French politics polarized between center, far-right, and far-left.

The rise of National Rally represents French politics' most significant transformation. Once a pariah party, it now polls as France's largest, with Le Pen's "de-demonization" strategy making it acceptable to mainstream voters. The party has moderated economic positions while maintaining hardline immigration and national identity stances. On the left, Jean-Luc Mélenchon's France Unbowed has consolidated left-wing opposition through anti-establishment populism. The traditional center-left Socialists and center-right Republicans have collapsed, leaving French politics realigned around Macronism, far-right nationalism, and far-left populism.

France faces multiple crises testing its republican model. Banlieue riots following police killings reveal deep integration failures, racial discrimination, and urban segregation. The Muslim minority, Europe's largest, faces both Islamophobia and challenges integrating secular republican values with religious identity. Terrorism has struck repeatedly, creating security anxieties that benefit the far-right. Economic challenges include high unemployment (especially youth), public debt, industrial decline, and competitiveness problems despite strong aerospace and luxury sectors.

Internationally, France seeks to maintain influence despite relative decline. Macron positioned himself as EU leader particularly after Merkel's departure, though with mixed success. Relations with post-Brexit Britain are tense. France maintains military presence across Africa but faces ejections from former colonies like Mali and Niger. Nuclear deterrence remains central to security doctrine. The Ukraine war has seen France support sanctions and arms deliveries while Macron periodically attempts mediation that critics call naive. For the French, politics involves defending a particular civilizational model—laïcité, universalism, social solidarity—that faces pressures from globalization, immigration, and changing international order.`,
    issues: JSON.stringify([
      'Far-right National Rally surge and Le Pen normalization',
      'Pension reform protests and democratic legitimacy',
      'Banlieue riots and integration failures',
      'Islamic terrorism and secularism debates',
      'African influence decline and military ejections'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Georgia',
    type: 'country',
    country: 'Georgia',
    lat: 41.870087,
    lng: 43.735724,
    category: 'politics',
    summary: `Georgian politics has been rocked by the ruling Georgian Dream party's authoritarian turn, exemplified by the controversial "foreign agents" law passed in 2024 despite massive protests. The law, modeled on Russian legislation, requires NGOs and media receiving foreign funding to register as "agents of foreign influence"—a mechanism for government control over civil society. Prime Minister Irakli Kobakhidze's government pushed the law through parliament despite hundreds of thousands protesting, EU condemnation, and fears Georgia is abandoning its Euro-Atlantic path for Russian-style authoritarianism.

Georgian Dream, founded by billionaire Bidzina Ivanishvili, has ruled since 2012 and increasingly concentrates power. The party maintains nominal commitment to EU membership (enshrined in constitution) while implementing policies that contradict European values. Opposition parties—United National Movement of exiled former president Mikheil Saakashvili and various smaller parties—face harassment, biased prosecution, and limited media access. The 2020-2021 political crisis over disputed parliamentary elections revealed deep institutional problems and required EU mediation.

Georgia's geopolitical position between Russia and the West defines its politics. Russia occupies 20% of Georgian territory—South Ossetia and Abkhazia—since the 2008 war. The occupation is permanent fixture, with Russia fortifying positions and gradually absorbing the territories. Georgian Dream's ambiguous relationship with Russia generates constant controversy—officially seeking territorial integrity while maintaining economic ties and avoiding actions that might provoke Moscow. This contrasts with public sentiment: over 80% support EU membership, and young Georgians overwhelmingly identify with Europe.

Economically, Georgia has implemented liberal reforms creating business-friendly environment, though benefits haven't reached all citizens. Tourism, agriculture, and remittances drive the economy. Poverty remains significant, particularly in rural areas. Emigration continues as young Georgians seek opportunities abroad. The EU granted candidate status in 2023 but has frozen the process over democratic backsliding. U.S.-Georgia relations have cooled over governance concerns. For Georgians, politics is about whether they will join Europe as desired or drift toward Russian orbit under a government that increasingly resembles authoritarian neighbors.`,
    issues: JSON.stringify([
      'Foreign agents law and civil society crackdown',
      'Georgian Dream authoritarian drift',
      'Russian occupation of South Ossetia and Abkhazia',
      'EU membership frozen due to democratic backsliding',
      'Bidzina Ivanishvili shadow rule'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Germany',
    type: 'country',
    country: 'Germany',
    lat: 50.961733,
    lng: 9.678348,
    category: 'politics',
    summary: `German politics under Chancellor Olaf Scholz's traffic light coalition (Social Democrats, Greens, Free Democrats) has been defined by managing multiple crises with limited political capital. The coalition, formed in 2021, immediately faced Russian gas cutoff, Ukraine war support, inflation, and industrial competitiveness challenges. Internal tensions between the fiscally conservative FDP and spending-oriented SPD/Greens paralyze decision-making. The constitutional debt brake limits fiscal flexibility, creating bitter fights over climate investment, defense spending, and welfare protection. Scholz, lacking Merkel's authority, struggles to impose coherence.

The far-right Alternative for Germany (AfD) has surged to unprecedented levels, polling around 20% nationally and leading in eastern states. The party feeds on immigration anxieties, economic resentment in former East Germany, and backlash against energy transition costs. Mainstream parties maintain a firewall refusing AfD coalition, but this creates governance difficulties in states where AfD is largest party. The party faces internal extremism—some state branches classified as extremist threats—yet continues growing. This represents Germany's most significant far-right movement since World War II, challenging postwar political consensus.

Germany's economic model faces existential questions. Energy-intensive industry suffered from Russian gas loss, forcing expensive transition. Auto industry confronts electric vehicle disruption, with Chinese competition and Tesla challenging German manufacturers. Demographic aging threatens welfare state sustainability and labor force. Immigration is both economic necessity and political flashpoint—Germany needs workers but integration failures and cultural tensions fuel backlash. The energy transition (Energiewende) involves phasing out nuclear and coal while building renewable capacity, creating reliability and cost concerns.

Internationally, Germany has reluctantly embraced rearmament and leadership. The "Zeitenwende" (turning point) declared after Russia's invasion meant massive defense spending increases and end to post-Cold War demilitarization. However, weapons deliveries to Ukraine came slowly amid domestic debates. Relations with China are contentious—economic interdependence versus security concerns and values conflicts. France-Germany EU axis shows strain. For Germans, politics involves adapting to a more dangerous world while preserving the social market economy and managing the far-right challenge to liberal democracy.`,
    issues: JSON.stringify([
      'AfD far-right surge and extremism challenge',
      'Coalition paralysis and debt brake constraints',
      'Energy crisis and industrial competitiveness',
      'Demographic aging and immigration tensions',
      'Ukraine support and Zeitenwende rearmament'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Ghana',
    type: 'country',
    country: 'Ghana',
    lat: 7.717639,
    lng: -1.036941,
    category: 'politics',
    summary: `Ghanaian politics features one of Africa's most robust democracies, with regular peaceful power alternations between the National Democratic Congress (NDC) and New Patriotic Party (NPP). The 2024 elections saw NDC's John Mahama defeat incumbent NPP, returning to power after his previous presidency (2012-2017). This marked Ghana's fourth consecutive democratic transfer of power, cementing its status as West African democratic anchor. However, the election occurred amid severe economic crisis that dominated voter concerns and drove NPP's defeat.

Ghana has suffered dramatic economic collapse despite previously being a success story. Public debt spiraled to unsustainable levels under NPP President Nana Akufo-Addo, requiring IMF bailout in 2022. Currency depreciation, inflation exceeding 50%, youth unemployment, and rising poverty have created widespread hardship. The government defaulted on external debt, implementing painful restructuring. The economic crisis exposed governance failures: corruption in public procurement, fiscal indiscipline, over-borrowing for poorly planned projects, and elite impunity. Anti-corruption rhetoric hasn't produced accountability.

The extractive industries dominate Ghana's economy—gold, oil, cocoa—creating resource curse vulnerabilities. Illegal gold mining (galamsey) has become environmental and governance catastrophe: rivers polluted with mercury, forests destroyed, Chinese criminal networks involved, and political protection of illegal miners. Cocoa sector faces production crisis from disease, aging trees, and farmer poverty despite Ghana being world's second-largest producer. Oil revenues have failed to transform economy, instead funding consumption and debt service.

Regional instability affects Ghana as Sahel jihadist violence edges southward. Burkina Faso and Mali coups and French force withdrawals create security concerns. Ghana hosts refugees and faces its own northern region vulnerabilities. Relations with Ivory Coast are cooperative though sometimes competitive. U.S. ties are close, with significant aid and security cooperation. China has become major investor and lender, though debt sustainability concerns grow. For Ghanaians, politics demonstrates that democratic rotation doesn't guarantee good governance—both NDC and NPP have governed poorly, creating frustration with the entire political class despite democratic forms.`,
    issues: JSON.stringify([
      'Economic crisis and IMF bailout',
      'Galamsey illegal mining environmental disaster',
      'Public debt default and restructuring',
      'Corruption and governance failures',
      'Sahel instability spillover concerns'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Greece',
    type: 'country',
    country: 'Greece',
    lat: 39.492763,
    lng: 21.72568,
    category: 'politics',
    summary: `Greek politics under Prime Minister Kyriakos Mitsotakis's New Democracy government has emphasized stability, business-friendly reforms, and center-right governance after the turbulent SYRIZA years. Mitsotakis won re-election in 2023 with outright majority—rare in Greece's proportional system—reflecting public appetite for competence after the 2010s debt crisis chaos. His government has pursued tax cuts, privatization, infrastructure investment, and tourism development. However, challenges include corruption scandals, surveillance abuse, migration pressures, and tensions with Turkey.

The wiretapping scandal involving intelligence service monitoring of politicians, journalists, and businessman revealed disturbing surveillance state practices. Mitsotakis's government initially denied then minimized the scandal, damaging its reformist credentials. Opposition parties and civil society demanded accountability, but investigations have produced limited results. This follows Greece's patterns: scandals erupt, promises of transparency made, but systemic change rarely occurs. The deep state and political-business nexus persist despite reform rhetoric.

Migration dominates Greek politics given its position as EU's southeastern frontier. The 2015 refugee crisis overwhelmed Greek islands, creating humanitarian catastrophe and political backlash. Mitsotakis has implemented hardline policies: pushbacks of migrant boats (illegal under international law), detention centers on islands, and border wall with Turkey. These controversial measures enjoy domestic support as Greeks feel abandoned by EU burden-sharing promises. Relations with Turkey involve constant tension over Aegean territorial waters, airspace violations, Cyprus, and migrants.

Economically, Greece has recovered from the devastating 2010s crisis that saw 25% GDP contraction, unemployment exceeding 27%, and brutal austerity under Troika supervision. Tourism has rebounded, reforms have improved business environment, and debt is more sustainable. However, youth emigration continues, productivity lags, corruption persists, and the crisis's scars remain in reduced living standards and depleted public services. The rise of far-right parties reflects social polarization. Climate change threatens tourism through heat waves and fires, while floods reveal infrastructure inadequacies. For Greeks, politics involves rebuilding after crisis while navigating between European integration and national sovereignty assertions.`,
    issues: JSON.stringify([
      'Wiretapping scandal and surveillance state',
      'Migration pushbacks and human rights violations',
      'Turkey tensions over Aegean and Cyprus',
      'Debt crisis recovery and austerity legacy',
      'Climate change threats to tourism'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Guatemala',
    type: 'country',
    country: 'Guatemala',
    lat: 14.982133,
    lng: -90.497134,
    category: 'politics',
    summary: `Guatemalan politics underwent a democratic miracle with Bernardo Arévalo's 2024 inauguration after corrupt elites and prosecutors attempted to block his victory. Arévalo's Seed Movement won the 2023 elections on anti-corruption platform, shocking the political establishment. The outgoing regime, led by Alejandro Giammattei and attorney general María Consuelo Porras, spent months trying to overturn results through legal harassment, electoral tribunal manipulation, and attempted congressional coups. Massive protests and international pressure, particularly from the U.S., ultimately forced transition—but the fight continues.

Guatemala's politics is controlled by what reformers call the "Pact of the Corrupt"—an alliance of traditional politicians, business elites, military officers, organized crime, and prosecutors who have captured state institutions. This network systematically dismantled the UN-backed CICIG anti-corruption commission that successfully prosecuted high-level corruption and connections to drug cartels. Since CICIG's 2019 expulsion under Jimmy Morales, impunity has reigned. Judges, prosecutors, and journalists who challenge the system face persecution, exile, or worse.

The country faces severe structural problems. Indigenous majority (over 40% of population) endures systemic discrimination, land dispossession, and political marginalization. Rural poverty is extreme—Central America's highest—while a tiny elite controls most wealth. Weak state presence in many regions allows gangs and drug traffickers to operate with impunity. Violence, particularly gender-based violence and attacks on indigenous and environmental defenders, occurs at alarming rates. Emigration to the U.S. continues massively, driven by violence and poverty.

Arévalo's presidency represents hope but faces enormous obstacles. The corrupt establishment retains control of congress, courts, and prosecutor's office. They can block reforms, investigate the president on fabricated charges, and maintain their networks. U.S. support is crucial—sanctions on corrupt actors and diplomatic pressure. Relations with neighbors Honduras and El Salvador involve migration coordination. For Guatemalans, politics is about whether democratic breakthrough can overcome decades of corrupt elite control, or whether the system will defeat yet another reformer. The indigenous majority's political awakening and demand for inclusion adds urgency and complexity to this historic moment.`,
    issues: JSON.stringify([
      'Pact of the Corrupt attempts to block Arévalo',
      'Captured institutions and impunity',
      'Indigenous marginalization and land conflicts',
      'Extreme poverty and mass U.S. migration',
      'Drug trafficking and gang violence'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Guyana',
    type: 'country',
    country: 'Guyana',
    lat: 5.124317,
    lng: -58.942643,
    category: 'politics',
    summary: `Guyanese politics has been transformed by massive offshore oil discoveries since 2015 that will make this small South American nation one of the world's richest per capita. President Irfaan Ali's People's Progressive Party (PPP) government, elected in 2020 after contentious elections, manages this windfall while navigating ethnic tensions, corruption risks, and Venezuelan territorial threats. Oil revenues are projected to reach tens of billions annually in a country of only 800,000 people—an unprecedented resource boom that creates both opportunity and curse potential.

Guyanese politics remains deeply divided along ethnic lines between Afro-Guyanese (supporting APNU coalition) and Indo-Guyanese (supporting PPP). This division has characterized politics since independence, producing winner-takes-all governance and periodic electoral crises. The 2020 elections saw attempted fraud by the outgoing APNU government to deny PPP victory, requiring months of recounts and international intervention to uphold results. The ethnic political tribalism means consensus on national development remains elusive, with each community fearing marginalization.

The oil boom's governance will determine Guyana's trajectory. ExxonMobil leads a consortium extracting oil under contracts critics say heavily favor the company—low royalty rates, tax exemptions, and limited transparency. The government has established a sovereign wealth fund but faces pressure for immediate spending on infrastructure, healthcare, and poverty relief. Corruption risks are severe—institutions are weak, oversight limited, and political financing opaque. The contrast between potential prosperity and current poverty (significant portions still lack electricity, roads, clean water) creates impatience for transformation.

Venezuela's claim to Guyana's Essequibo region—two-thirds of the country including oil fields—has intensified with the discoveries. Venezuelan President Maduro held 2023 referendum claiming Essequibo and has threatened annexation. Brazil, U.S., and Caribbean community support Guyana, but the threat is serious given Venezuela's military size and desperation. Relations with Caribbean neighbors through CARICOM are close, though Guyana's oil wealth creates diverging interests. For Guyanese, politics determines whether oil brings broad prosperity or Dutch disease, corruption, and conflict. The next decade will reveal if Guyana avoids the resource curse that has destroyed so many petrostates.`,
    issues: JSON.stringify([
      'Oil boom governance and corruption risks',
      'Ethnic political divisions and winner-takes-all politics',
      'ExxonMobil contract terms and revenue fairness',
      'Venezuelan territorial claim to Essequibo region',
      'Resource curse prevention and sovereign wealth fund'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Haiti',
    type: 'country',
    country: 'Haiti',
    lat: 19.263784,
    lng: -72.224051,
    category: 'politics',
    summary: `Haitian politics has collapsed into gang rule and state failure unprecedented even by this country's tragic standards. Following President Jovenel Moïse's 2021 assassination, unelected Prime Minister Ariel Henry governed through international support until forced to resign in 2024 as gangs took control of Port-au-Prince. A transitional presidential council now attempts to govern what remains of the state. Gangs control an estimated 80% of the capital, operate with impunity, and have paralyzed the country through violence, kidnapping, and territorial control. Haiti has no elected officials at any level—a democracy without democracy.

The gang crisis represents complete security sector collapse. Police are overwhelmed, outgunned, and often complicit. The military was disbanded in 1995 and reconstituted in 2017 but remains weak. Gangs like G9 federation led by former police officer Jimmy "Barbecue" Chérizier control ports, slums, and roads. They massacre residents, commit mass rape, and rule through terror. Weapon flows from the United States (particularly Florida) and ammunition from the Dominican Republic fuel violence. Political elites have historically employed gangs to intimidate opponents, creating Frankenstein monsters now beyond control.

A Kenya-led multinational force authorized by the UN arrived in 2024 to help restore order, but with limited numbers and unclear mandate, success is doubtful. Previous interventions—UN missions that lasted decades—failed to build sustainable security. The international community debates whether another intervention can succeed or if Haiti requires fundamentally different approach. Meanwhile, humanitarian catastrophe deepens: famine, cholera, displacement, school closures, and healthcare system collapse.

Economically, Haiti was already the Western Hemisphere's poorest country before collapse. Now commerce barely functions, currency has collapsed, inflation is rampant, and survival economics prevail. Haitian diaspora remittances are the largest income source. Centuries of exploitation, environmental destruction, political instability, and international neglect have produced this crisis. The Dominican Republic, sharing the island, has closed borders and deports Haitians amid tensions. For Haitians, politics means survival in a failed state where armed gangs replace government. Whether Haiti can recover or represents irreversible collapse remains tragically uncertain.`,
    issues: JSON.stringify([
      'Gang control of 80% of capital and state failure',
      'No elected government at any level',
      'Jovenel Moïse assassination aftermath',
      'Kenya-led intervention force effectiveness doubts',
      'Humanitarian catastrophe and famine'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Honduras',
    type: 'country',
    country: 'Honduras',
    lat: 14.794801,
    lng: -86.887604,
    category: 'politics',
    summary: `Honduran politics underwent historic change with Xiomara Castro's 2022 election as the first female president, ending 12 years of right-wing National Party rule marked by corruption and authoritarianism. Castro, wife of former president Manuel Zelaya who was ousted in a 2009 coup, campaigned on fighting corruption, reducing violence, and social programs. Her Libre Party victory represented popular rejection of the political establishment. However, governing has proven difficult amid institutional resistance, limited resources, and the narco-state legacy she inherited.

The 2009 coup against Zelaya and subsequent restoration of oligarchic rule through fraud created deep wounds. The National Party government of Juan Orlando Hernández became a narco-state, with Hernández himself now serving 45 years in U.S. prison for drug trafficking. His brother also imprisoned. The systematic corruption involved military, police, politicians, and business elites in cocaine transshipment from Colombia to the United States. Dismantling these networks while they retain power in institutions presents Castro with an impossible challenge. The police and military remain compromised.

Violence remains extreme despite some improvements. Honduras has long had one of the world's highest murder rates, driven by gangs, drug cartels, and impunity. Extortion rackets terrorize businesses and poor neighborhoods alike. Femicide rates are catastrophic. The weak justice system convicts a tiny fraction of crimes. Castro has attempted reforms but faces resistance from entrenched interests. Economic desperation drives mass migration to the United States—caravans that periodically trek north fleeing violence and poverty.

Castro's controversial recognition of China over Taiwan reflected pragmatic economics over ideology, though it strained U.S. relations. The country depends heavily on remittances from Hondurans abroad—over 25% of GDP. Free trade zones employing textile workers in poor conditions drive exports. Agriculture, particularly coffee and bananas, remains important though farmers face climate and market pressures. Relations with neighbors El Salvador and Guatemala involve migration coordination. For Hondurans, politics is about whether Castro can deliver transformation or whether the corrupt narco-political elite she displaced will sabotage reforms and return to power. The stakes are whether Honduras remains a failing narco-state or builds functional democracy.`,
    issues: JSON.stringify([
      'Narco-state legacy and Hernández imprisonment',
      'Extreme violence and impunity',
      'Institutional resistance to Castro reforms',
      'Mass migration to U.S. driven by violence and poverty',
      'Taiwan-China switch and U.S. relations strain'
    ]),
    topStories: JSON.stringify([])
  }
]

async function insertPoliticsBatch3() {
  console.log('🚀 Starting Politics Batch 3 insertion (Cyprus - Honduras)')
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

  console.log(`\n✅ Batch 3 complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Errors: ${errorCount}`)
}

insertPoliticsBatch3()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
