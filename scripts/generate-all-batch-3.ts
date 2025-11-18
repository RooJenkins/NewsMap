import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 18-50 (33 countries)
const COUNTRIES = [
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  { name: 'Trinidad and Tobago', lat: 10.6918, lng: -61.2225 },
  { name: 'Guyana', lat: 4.8604, lng: -58.9302 },
  { name: 'Suriname', lat: 3.9193, lng: -56.0278 },
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.4730 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
]

const SUMMARIES: Record<string, { summary: string; issues: string[] }> = {
  'Honduras': {
    summary: `# Honduras

Honduras struggles with endemic gang violence, political instability, and corruption that drive mass emigration while undermining development despite some economic growth. President Xiomara Castro's leftist government faces enormous challenges reforming institutions, reducing violence, and addressing poverty amid limited resources and entrenched interests.

## Political Landscape

President Castro, elected in 2021 as Honduras's first female president, represents the leftist Libre party seeking to break decades of conservative rule and corruption. Her government promises anti-corruption reforms, constitutional changes, and social investment, but faces resistance from Congress, judiciary, and established elites protecting interests.

Relations with the U.S. remain critical given migration flows, security cooperation, and economic ties, but tensions emerge over Castro's foreign policy including establishing diplomatic relations with China (ending Taiwan recognition) and criticism of U.S. interventionism. The government balances nationalist rhetoric against practical dependence on U.S. markets, remittances, and cooperation.

Corruption remains pervasive across institutions. Former president Juan Orlando Hernández was extradited to the U.S. and convicted on drug trafficking charges in 2024, confirming long-standing allegations of state-narco nexus. Castro's anti-corruption commission faces obstruction and limited capacity despite high-profile investigations.

## Gang Violence and Security Crisis

Honduras has among the world's highest murder rates (approximately 35-40 per 100,000) driven by powerful gangs MS-13 and Barrio 18 controlling neighborhoods through extortion, drug trafficking, and territorial violence. These transnational gangs, originating from Los Angeles deportees in the 1990s, evolved into sophisticated criminal enterprises.

Extortion ("war tax") affects businesses of all sizes from street vendors to corporations, forcing many to close or pay protection money. Those who resist face violence including assassination of business owners, journalists, and activists. This systematic extortion undermines economic activity and reinforces cycles of poverty and migration.

Government responses oscillate between militarized crackdowns and social prevention programs. State of emergency declarations, military deployments, and mass incarceration strategies show limited effectiveness while raising human rights concerns. The prison system, vastly overcrowded, serves as gang command centers despite isolation attempts.

Drug trafficking routes through Honduras connecting South American cocaine production to U.S. markets generate corruption throughout security forces, judiciary, and politics. The Hernández case demonstrated how trafficking organizations penetrated highest government levels. Institutional rot complicates enforcement efforts.

## Economic Challenges

Economic growth remains moderate around 3-4% annually, insufficient for population needs and poverty reduction. Approximately 60% live in poverty with rural areas and indigenous populations experiencing extreme deprivation. Informal employment dominates limiting tax revenue, labor protections, and social insurance.

Remittances from Hondurans in the U.S. exceed $8 billion annually (over 25% of GDP), providing crucial household income supporting consumption. However, this dependence creates vulnerability to U.S. economic conditions and immigration policies. The migration-remittance cycle perpetuates underdevelopment as working-age population leaves.

Agricultural exports (coffee, bananas, palm oil) and textile manufacturing in free trade zones provide employment and foreign exchange. However, climate change impacts coffee production through irregular rainfall and disease pressure. Manufacturing faces regional competition and modest value addition.

Infrastructure deficits constrain development with inadequate roads, unreliable electricity, limited water access, and poor telecommunications in rural areas. Education and healthcare systems suffer chronic underfunding affecting quality and coverage.

## Migration Crisis

Hundreds of thousands of Hondurans have migrated, primarily to the U.S., fleeing violence, poverty, and lack of opportunity. Migrant caravans in recent years drew international attention to Central American exodus. U.S. immigration policies directly affect Honduran families with deportations, asylum restrictions, and border enforcement separating relatives.

The brain drain and demographic loss affect development capacity as educated professionals, skilled workers, and working-age adults leave. Communities become economically dependent on remittances while losing human capital for local development.

## Social Issues

Gender-based violence remains epidemic with Honduras having among the world's highest femicide rates. Women face systematic discrimination, violence, and limited economic opportunities. LGBTQ+ individuals face persecution with hate crimes common and inadequate legal protections.

Indigenous and Afro-Honduran communities face land conflicts, discrimination, and environmental destruction from extractive industries. Environmental defenders and indigenous leaders are assassinated with impunity. Berta Cáceres' 2016 murder symbolizes this violence against activists.`,
    issues: [
      'Extreme gang violence and extortion affecting all sectors',
      'Mass emigration driven by insecurity and poverty',
      'Deep corruption including narco-state penetration',
      'Economic informality and remittance dependence',
      'Femicide and violence against vulnerable populations'
    ]
  },

  'El Salvador': {
    summary: `# El Salvador

El Salvador undergoes radical transformation under President Nayib Bukele's authoritarian-trending government, which claims success reducing gang violence through mass incarceration while undermining democratic institutions, press freedom, and rule of law. The security gains generate popular support despite international concerns over human rights violations and democratic backsliding.

## Bukele's Authoritarian Turn

President Bukele, first elected in 2019 and reelected in 2024 (despite constitutional prohibition on consecutive terms), consolidates power through control of Congress, Supreme Court, and other institutions. His Nuevas Ideas party holds supermajority enabling constitutional changes, judicial purges, and institutional restructuring without opposition.

In 2021, Bukele-aligned legislators removed Supreme Court justices and attorney general, replacing them with loyalists. This judicial coup eliminated checks on executive power. Constitutional reforms enable presidential reelection previously prohibited, with court rulings conveniently reinterpreting articles to permit Bukele's 2024 candidacy.

Press freedom deteriorated dramatically with journalists facing surveillance, tax investigations, legal harassment, and exile. Independent media outlets struggle against government pressure while official propaganda dominates. International organizations including RSF and CPJ document systemic attacks on press freedom.

Bukele's populist communication style via social media, particularly Twitter/X, bypasses traditional media to connect directly with supporters. His confrontational approach toward critics, international organizations, and established elites resonates with population frustrated by previous governments' failures.

## Gang Crackdown and Human Rights

The March 2022 declaration of "state of exception" following gang violence surge enabled mass arrests without warrants, extended detention without charges, and military deployment. Over 75,000 people have been imprisoned under emergency powers representing approximately 1% of total population.

New mega-prison CECOT (Centro de Confinamiento del Terrorismo) holds 40,000 inmates in harsh conditions designed to break gang structures. Inmates face isolation, limited family contact, and strict control eliminating previous gang rule over prisons. Human rights organizations document torture, deaths in custody, and arbitrary detention of innocents.

Murder rates plummeted from approximately 103 per 100,000 (2015) to under 3 per 100,000 (2024)—among the lowest in Latin America. This dramatic reduction transformed daily life with businesses reopening, extortion declining, and public spaces becoming safer. Popular support for Bukele derives substantially from security improvements.

However, concerns mount over arbitrary detentions with estimates suggesting 5-10% of imprisoned may be innocent, arrested through quotas or mistaken identity. Due process protections were suspended, appeals limited, and legal representation inadequate. Families describe disappeared relatives swept up in mass arrests.

## Economic Policies

Bukele promoted Bitcoin as legal tender in 2021, positioning El Salvador as crypto innovation hub. The initiative generated international attention but limited domestic adoption with most Salvadorans preferring U.S. dollars. Bitcoin investments lost value during crypto market crashes raising fiscal concerns. The Chivo wallet system faced technical problems and limited use.

Economic growth remains moderate around 2-3% annually. Tourism increased responding to improved security perceptions. Remittances from U.S.-based Salvadorans exceed $8 billion annually (over 25% of GDP), providing crucial economic support. Dollarization since 2001 maintains price stability but eliminates monetary policy tools.

Public debt increases toward 80% of GDP with bond market access limited by fiscal concerns and IMF reluctance to lend given governance issues. Bukele's government maintains social spending and ambitious infrastructure projects despite revenue constraints.

## International Relations

Relations with U.S. deteriorated from previous close cooperation. U.S. government sanctioned Bukele officials for corruption, criticized democratic backsliding, and reduced cooperation. However, U.S. deportation policies affect El Salvador significantly with gang members returned fueling violence cycles.

Bukele cultivated relationships with China and others, diversifying diplomatic and economic partnerships. His "El Salvador first" nationalism resonates domestically while complicating traditional regional alliances.

The 2024 reelection with over 80% vote share demonstrated Bukele's dominant popularity despite international criticism. Whether authoritarian governance proves sustainable or eventually faces challenges from economic difficulties or human rights pressures remains uncertain.`,
    issues: [
      'Democratic backsliding and authoritarian consolidation',
      'Mass incarceration and human rights violations',
      'Judicial independence elimination',
      'Bitcoin experiment and fiscal sustainability',
      'Press freedom deterioration'
    ]
  },

  'Nicaragua': {
    summary: `# Nicaragua

Nicaragua descends into authoritarian dictatorship under Daniel Ortega and Rosario Murillo, who systematically eliminate opposition, imprison dissidents, silence independent media, and isolate the country internationally. The 2018 protest crackdown initiated repression wave that continues intensifying, creating refugee crisis and economic stagnation.

## Ortega Dictatorship Consolidation

President Ortega, returned to power in 2007 after earlier presidency (1985-1990), and wife Murillo consolidated authoritarian control eliminating any institutional checks. The 2018 mass protests demanding Ortega's resignation were violently suppressed with approximately 300 killed and thousands imprisoned or exiled.

Post-2018, the regime systematically dismantled remaining democratic institutions. Political opposition leaders were imprisoned on fabricated charges including "treason" and "conspiracy." The 2021 presidential election occurred with all serious opposition candidates jailed, ensuring Ortega's fourth consecutive term in sham vote rejected internationally.

Independent civil society organizations, NGOs, and universities were shuttered with assets confiscated. Hundreds of organizations faced closure including medical associations, business chambers, and charities. The Catholic Church, historically influential, faces persecution with priests and bishops imprisoned or exiled, churches vandalized, and religious activities restricted.

## Repression and Political Prisoners

Over 300 political prisoners face harsh conditions, torture allegations, and show trials. Prominent prisoners include former presidential candidates, businesspeople, journalists, student leaders, and human rights defenders. Families face harassment and intimidation. Some prisoners were stripped of citizenship and forcibly exiled to the U.S. in 2023.

The legal system operates as regime instrument with judges, prosecutors, and police under political control. Arbitrary arrests, fabricated evidence, and predetermined verdicts characterize political trials. Defense lawyers face prosecution for representing regime opponents.

Press freedom was eliminated with all independent media forced into exile, operating from Costa Rica and elsewhere. Journalists face arrest warrants, and consuming independent media becomes risky. State media dominates with propaganda and Murillo's daily speeches.

## Economic Collapse and Emigration

Economic growth stagnated following 2018 crisis with investment fleeing, tourism collapsing, and international isolation increasing. Sanctions from U.S. and Europe target regime officials and limit some trade. Remittances from Nicaraguan emigrants (primarily in Costa Rica and U.S.) provide crucial household income.

Approximately 200,000+ Nicaraguans fled since 2018, seeking refuge primarily in neighboring Costa Rica (straining resources) and through migration to U.S. This exodus includes professionals, business owners, activists, and families creating brain drain.

Poverty increased affecting majority of population with inadequate healthcare, education deterioration, and basic services declining. Informal employment dominates economy with minimal worker protections or benefits.

## International Isolation

Nicaragua faces international isolation with OAS condemnation, EU sanctions, and U.S. restrictions. Relations with Russia, China, Iran, Cuba, and Venezuela provide regime lifelines through political support and some economic cooperation. Ortega's anti-American rhetoric and alliance with authoritarian governments position Nicaragua as Western hemisphere outlier.

The regime expelled OAS, UN human rights representatives, and international observers, rejecting external scrutiny. Ortega withdrew Nicaragua from OAS completely, severing regional diplomatic ties.

## Social Control

The regime maintains control through Sandinista party structures, neighborhood surveillance committees, and fear. Public demonstrations are prohibited with any dissent met with arrest. Society experiences self-censorship with citizens afraid to discuss politics openly.

Nicaragua's transformation from imperfect democracy to full dictatorship represents one of Latin America's most dramatic authoritarian reversals. Whether internal pressures or external factors eventually force political opening remains uncertain, but currently the regime shows no reform inclinations.`,
    issues: [
      'Full authoritarian dictatorship with eliminated opposition',
      'Mass political imprisonment and human rights violations',
      'Economic collapse and emigration crisis',
      'Catholic Church persecution',
      'International isolation and alliance with autocracies'
    ]
  },

  'Costa Rica': {
    summary: `# Costa Rica

Costa Rica maintains its position as Central America's most stable democracy and prosperous nation while confronting challenges of fiscal deficits, organized crime penetration, Venezuelan refugee integration, and environmental pressures. President Rodrigo Chaves's government pursues reforms amid political constraints and social tensions.

## Political Stability and Governance

President Chaves, elected in 2022 representing the Social Democratic Progress Party, governs with limited congressional support requiring constant coalition-building. His technocratic background (former World Bank official, finance minister) emphasizes economic management and anti-corruption but generates friction with traditional parties and civil society over governance style.

Costa Rica's democratic institutions remain robust with independent judiciary, free press, competitive elections, and strong civil society. The Constitutional Court actively defends rights and checks executive power. Electoral processes are transparent and credible generating peaceful transitions.

However, political fragmentation increases with traditional two-party system (PLN, PUSC) giving way to multiparty landscape. This fragmentation complicates legislative consensus and coherent policymaking. Voter disillusionment with politics is reflected in high abstention rates and support for outsider candidates.

Costa Rica abolished its military in 1949, channeling resources toward education and healthcare. This unique status shapes national identity and regional role though creates security vulnerabilities requiring reliance on police and regional cooperation.

## Fiscal Challenges

Public debt approaches 70% of GDP following years of deficits from inflexible spending (public sector wages, pensions) and insufficient revenue. The 2018 fiscal reform increased taxes addressing immediate crisis, but structural challenges persist. Pension system faces sustainability issues from aging demographics and generous benefits.

Costa Rica maintains investment-grade credit rating but faces pressure to demonstrate fiscal discipline. Interest payments consume increasing budget portions limiting social and infrastructure investment. Economic growth around 3-4% annually provides insufficient revenue growth absent reforms.

Tax evasion and avoidance remain problems limiting collection despite relatively high rates. Informal employment (approximately 40%) escapes taxation and regulation. Public sector compensation consumes large budget share with strong union resistance to adjustments.

## Economic Dynamism and Challenges

Costa Rica successfully diversified from agricultural dependence toward services (tourism) and advanced manufacturing (medical devices, electronics). Foreign direct investment from multinational companies attracted by skilled workforce, political stability, and free trade zone incentives drives growth.

Tourism generates significant foreign exchange and employment with eco-tourism, beach destinations, and adventure travel attracting over 3 million annual visitors (pre-pandemic). The sector recovered from COVID-19 impacts approaching previous levels.

However, inequality persists with poverty affecting approximately 25% of population. Rural areas and Caribbean coast lag behind Central Valley prosperity. Indigenous populations face marginalization and limited opportunities. Education quality concerns affect competitiveness with public system declining while private education thrives.

## Security and Crime

Drug trafficking organizations increasingly use Costa Rica as transit route for cocaine from South America to U.S. and Europe. This generates violence including territorial disputes, corruption of officials, and money laundering. Murder rates increased from historically low levels (approximately 5-6 per 100,000) toward 12 per 100,000, though remain moderate regionally.

Port of Limón experiences violence from criminal organizations. Police face capacity constraints and corruption risks. The government increased security spending and international cooperation, but institutional strengthening requires time.

## Immigration and Refugees

Costa Rica hosts approximately 200,000+ Nicaraguan refugees who fled Ortega regime repression, plus smaller populations from Venezuela and elsewhere. Integration challenges include labor market access, service provision, and social tensions. Costa Rica's tradition of welcoming political refugees faces strain from numbers.

Venezuelan migrants numbered over 30,000 with continued arrivals. The government implemented registration programs providing temporary legal status, but employment formalization and social integration require ongoing policy attention.

## Environmental Leadership

Costa Rica leads globally on environmental protection with approximately 25% of territory under protected status. Renewable energy generates over 98% of electricity from hydroelectric, geothermal, wind, and solar sources. The country aims for carbon neutrality by 2050.

However, deforestation pressures from agricultural expansion, illegal logging, and development threaten conservation gains. Climate change impacts include changing precipitation patterns, sea level rise affecting coasts, and hurricane intensity.`,
    issues: [
      'Fiscal deficits and pension system sustainability',
      'Organized crime and drug trafficking penetration',
      'Nicaraguan and Venezuelan refugee integration',
      'Inequality despite prosperity',
      'Environmental protection vs. development pressures'
    ]
  },

  'Panama': {
    summary: `# Panama

Panama maintains economic dynamism centered on the Canal, logistics, and financial services while confronting governance challenges including corruption, inequality, and migration pressures as a transit route. President Laurentino Cortizo's government balances development priorities against fiscal constraints and social demands amid 2024 electoral transition.

## Political Environment

President Cortizo, elected in 2019 from the Democratic Revolutionary Party (PRD), completes his term facing corruption scandals and limited popularity. The 2024 presidential election approaches with fragmented field including former presidents, businesspeople, and political heirs competing. Constitutional single-term prohibition prevents reelection.

Panama's democracy functions with competitive elections, press freedom, and institutional checks, though corruption remains endemic. The Odebrecht construction scandal implicated multiple former presidents and officials in bribery schemes. Periodic massive protests demand accountability and reform, with demonstrators achieving some success on specific issues.

The judiciary faces politicization with Supreme Court decisions often reflecting political considerations. Prosecutors investigating high-level corruption face obstruction and political pressure. Some progress occurs on specific cases, but systematic impunity for elites persists.

## Panama Canal and Logistics

The expanded Panama Canal (2016) accommodates larger vessels increasing capacity and revenue. Annual transits generate approximately $3-4 billion for government representing crucial fiscal resource. However, drought conditions in recent years reduced Gatún Lake water levels constraining daily transit numbers and generating revenue concerns.

Climate change poses existential threat to Canal operations through altered rainfall patterns affecting water availability. The Canal requires massive freshwater amounts for lock operations, sourced from watershed lakes. Water management investments and alternative source explorations become critical.

Logistics sector beyond Canal includes major ports (Balboa, Colón), free trade zone (Zona Libre de Colón for re-export trade), and Tocumen international airport hub. These activities position Panama as Americas logistics center generating employment and foreign exchange.

## Financial Services and Money Laundering

Panama's financial sector handles international banking, offshore company registration, and ship registry (largest globally by tonnage). These services generate significant revenue but create reputational risks around money laundering, tax evasion, and financial opacity despite reforms.

The 2016 "Panama Papers" leak exposed worldwide use of Panamanian structures for hiding assets and evading taxes, damaging reputation. Subsequent reforms improved transparency and anti-money laundering controls moving Panama off some international gray lists, but concerns persist. Financial Action Task Force (FATF) monitoring continues.

Banking sector remains large with numerous international banks operating alongside domestic institutions. Dollarization since 1904 (no domestic currency, U.S. dollar circulates) provides price stability and facilitates international trade but eliminates monetary policy tools.

## Economic Performance and Inequality

Economic growth averages 5-7% annually pre-pandemic, among Latin America's highest, driven by services (logistics, finance, tourism, construction). Recovery from COVID-19 progresses with growth resuming.

However, extreme inequality persists with modern Panama City towers contrasting against urban slums and rural poverty. Indigenous comarcas (autonomous territories) experience development gaps with limited services, healthcare, and education access. Approximately 25% live in poverty with rural and indigenous populations disproportionately affected.

Employment concentrates in services with informal sector significant. Construction boom driven by real estate investment creates jobs but also corruption opportunities and money laundering risks.

## Mining Controversy

The Cobre Panama copper mine, one of world's largest, generated massive 2023 protests over environmental concerns and contract terms. Demonstrators blocked roads nationwide demanding mine closure, citing water contamination fears and inadequate government revenue. The Supreme Court declared mining contract unconstitutional, forcing mine closure with significant economic implications.

This episode demonstrated popular power through sustained mobilization and judicial responsiveness to environmental concerns. However, the mine's closure eliminates substantial GDP contribution and employment, creating fiscal gap.

## Migration Transit

Panama serves as critical transit point for migrants from South America (particularly Venezuela, Ecuador) and global regions traveling northward toward U.S. The dangerous Darién Gap jungle connecting Colombia to Panama sees hundreds of thousands crossing annually risking robbery, assault, and death.

Panama manages migrant flows through processing centers and transportation northward to Costa Rica, effectively facilitating transit rather than retention. The humanitarian challenge strains resources while migration generates business opportunities in affected regions.`,
    issues: [
      'Canal water availability threatened by climate change',
      'Corruption and elite impunity',
      'Extreme inequality despite growth',
      'Money laundering and financial transparency',
      'Migration transit and Darién Gap humanitarian crisis'
    ]
  },

  'Jamaica': {
    summary: `# Jamaica

Jamaica balances vibrant culture, tourism appeal, and democratic traditions against severe challenges of gang violence, economic constraints, and social inequality. Prime Minister Andrew Holness's government pursues security improvements and economic reforms while debates over republican transition and cannabis commercialization continue.

## Political Landscape

Prime Minister Holness, leader of the Jamaica Labour Party (JLP), governs with parliamentary majority following 2020 election victory. Jamaican democracy features competitive two-party system (JLP vs. People's National Party), regular peaceful transitions, press freedom, and active civil society despite patron-client politics and some corruption.

The question of transitioning from constitutional monarchy to republic advances gradually with public consultations. Jamaica shares King Charles III as head of state through Commonwealth, but republican sentiment grows as part of decolonization and Jamaican identity assertion. Constitutional reform requires political consensus and potentially referendum.

Relations with former colonial power Britain remain significant through cultural ties, diaspora connections, and economic links, but historical grievances including slavery reparations demands create friction. Jamaica advocates Caribbean-wide reparations claims.

## Gang Violence and Organized Crime

Violent crime, particularly murder, remains extraordinarily high with rates around 45-50 per 100,000 among world's highest. Gang conflicts drive violence concentrated in Kingston's inner-city communities and other urban areas. These gangs often have political connections with garrison communities controlled by area leaders ("dons") who provide security and services while enforcing political loyalty.

Drug trafficking, particularly marijuana and increasingly cocaine transit, generates gang revenue and corruption. Extortion, lottery scams (targeting U.S. victims), and illegal weapons trafficking diversify criminal income. Police face capacity constraints, corruption issues, and community distrust affecting effectiveness.

States of emergency and security force operations in high-crime zones show temporary effects but limited sustained impact. The Holness government prioritizes security with increased police resources, legislative measures, and community programs, but transforming deep-rooted violence requires long-term institutional and social changes.

## Economic Challenges and IMF Programs

Jamaica's economy grows modestly around 1-3% annually following decades of stagnation and high debt. Successful IMF programs reduced debt-to-GDP from unsustainable 140%+ to approximately 95%, though still among world's highest. Fiscal discipline and structural reforms improved macroeconomic stability.

However, per capita income growth remains insufficient with poverty affecting approximately 20% of population and inequality persistent. Unemployment, particularly youth unemployment, stays elevated. Public sector wages consume large budget portions limiting social investment.

Tourism dominates economy with over 4 million annual visitors (cruise and stay-over) generating foreign exchange and employment. All-inclusive resorts in Montego Bay, Negril, and Ocho Rios provide jobs but limited local economic linkages. The sector recovered post-pandemic approaching previous levels.

Remittances from large Jamaican diaspora (primarily U.S., Canada, UK) exceed $3 billion annually supporting household consumption. Brain drain and demographic loss affect development with skilled professionals emigrating seeking better opportunities.

Bauxite/alumina mining and exports historically significant but facing challenges from global price volatility and production costs. Agriculture includes traditional crops (sugar, coffee, cocoa) and domestic food production, though food import dependence creates vulnerability.

## Cannabis Legalization and Industry

Jamaica decriminalized small marijuana possession in 2015 and created legal framework for medical cannabis, religious use (Rastafarian sacrament), and research. The government promotes cannabis industry development for medical products and wellness tourism positioning Jamaica's cultural cannabis connection commercially.

However, licensed industry development proceeds slowly with regulatory complexity, capital requirements, and international market access challenges. Small farmers face difficulties entering legal market. Illicit cultivation and trade persist alongside legal channels.

## Social Issues

Education system faces quality challenges with skills mismatch affecting youth employment. Brain drain particularly impacts teaching and nursing professions. Healthcare access varies with public system strained and private care for those who afford.

Homophobia remains significant with LGBTQ+ individuals facing discrimination, violence, and social stigma despite gradual legal and social progress. Jamaica's reputation for anti-gay violence affects tourism and international relations.

Infrastructure requires investment with road deterioration, unreliable electricity, and water access problems in some areas. Climate vulnerability includes hurricane exposure and sea level rise affecting coastal communities.`,
    issues: [
      'Extreme violence and gang-controlled communities',
      'High public debt constraining development',
      'Brain drain and youth unemployment',
      'LGBTQ+ discrimination and homophobia',
      'Climate vulnerability and infrastructure needs'
    ]
  },

  'Trinidad and Tobago': {
    summary: `# Trinidad and Tobago

Trinidad and Tobago leverages energy resources maintaining Caribbean's highest per capita income while confronting challenges of gang violence, corruption, and economic diversification beyond oil and gas. Prime Minister Keith Rowley's government balances fiscal pressures from energy sector volatility against social demands and security deterioration.

## Political Situation

Prime Minister Rowley, leading the People's National Movement (PNM), governs following 2020 election victory in stable two-party democracy (PNM vs. United National Congress). Trinidad and Tobago maintains democratic institutions with independent judiciary, press freedom, and regular competitive elections, though corruption remains problematic.

Political debates center on economic management, crime, and ethnic tensions. The population is approximately 35% East Indian descent, 34% African descent, with mixed and other groups. These demographics shape political allegiances with voting often following ethnic lines, though crossover occurs.

Relations with Venezuela are complex given proximity (Trinidad lies 11km from Venezuelan coast). Venezuelan refugee/migrant flows create tensions with thousands arriving by boat seeking economic opportunity and fleeing crisis. Trinidad's response involves deportations and restrictions generating human rights criticisms.

## Energy Sector Dependency

Oil and gas dominate the economy providing government revenue, foreign exchange, and employment. Natural gas production supports petrochemical industry and LNG exports. However, production declining from mature fields without sufficient new discoveries creates fiscal pressures.

Energy price volatility directly affects government budgets and economic growth. High prices during 2022-2023 provided revenue boost, but global market swings create planning difficulties. Diversification efforts advance slowly with economy remaining heavily energy-dependent.

The Heritage and Stabilization Fund (sovereign wealth fund) built from energy revenues provides some buffering against price shocks and intergenerational savings. However, political pressures for withdrawals during downturns reduce effectiveness.

## Crime and Security Crisis

Gang violence and murders reached alarming levels with rates around 30-40 per 100,000. Kidnappings, extortion, and drug trafficking affect business confidence and quality of life. Gangs control some neighborhoods with police struggling to maintain order.

Drug trafficking from Venezuela and South America through Trinidad to other destinations generates criminal revenue and corruption. Weapons smuggling, particularly from Venezuelan sources, arms gangs. Maritime security challenges with porous borders complicate enforcement.

State of emergency declarations and security force operations show limited sustained impact. Police face capacity constraints, corruption allegations, and community distrust. Judicial system inefficiencies mean low conviction rates encouraging impunity.

## Economic Diversification Challenges

Economic growth remains tied to energy sector with modest performance around 1-2% annually in recent years. Non-energy sectors including services, manufacturing, and tourism remain underdeveloped relative to potential.

Tourism lags behind Caribbean competitors with Tobago's beaches and cultural attractions underutilized. Carnival generates cultural pride and some economic activity but limited compared to manufacturing or financial services potential.

Financial services sector exists but faces international pressures around transparency and tax cooperation. Trinidad and Tobago's offshore financial center status attracts some business but regulatory compliance demands increase.

Unemployment affects approximately 4-5% with youth unemployment higher. However, informal employment and underemployment affect larger populations. Public sector employs significant portion of workforce with wage bills consuming large budget shares.

## Social Issues

Education produces relatively skilled workforce, but brain drain affects professionals seeking opportunities abroad. Emigration to North America, UK, and elsewhere reduces human capital availability.

Healthcare system faces pressures from aging demographics, lifestyle diseases (diabetes, hypertension prevalent), and resource constraints. Public system struggles with wait times and equipment while private care serves those who afford it.

Income inequality persists despite overall prosperity with pockets of poverty in both islands. Social programs provide some support but targeting and effectiveness face criticism.

Ethnic relations generally peaceful but occasionally tensions emerge around political patronage, cultural recognition, and resource distribution. The plural society maintains relative harmony through institutional accommodation.

Climate change vulnerability includes sea level rise, hurricane exposure, and coastal erosion affecting infrastructure and settlements. Environmental protection competes with development pressures.`,
    issues: [
      'Gang violence and security deterioration',
      'Energy sector decline and fiscal pressures',
      'Economic diversification challenges',
      'Venezuelan migration management',
      'Corruption and governance effectiveness'
    ]
  },

  'Guyana': {
    summary: `# Guyana

Guyana experiences dramatic transformation from impoverished nation to major oil producer following massive offshore discoveries, generating unprecedented revenue and development opportunities while creating governance challenges, corruption risks, and tensions with Venezuela over territorial claims. President Irfaan Ali's government manages oil wealth amid political divisions and infrastructure deficits.

## Oil Boom Transformation

ExxonMobil-led consortium discovered over 11 billion barrels of recoverable oil equivalent offshore since 2015, transforming Guyana into one of world's fastest-growing economies. Production began 2019 and expands rapidly with multiple platforms producing and more developing.

Oil revenue flows into Natural Resource Fund (sovereign wealth fund) reaching billions of dollars. Government budgets project oil revenues funding massive infrastructure investments, social programs, and development projects. GDP growth exceeds 40% in some recent years—among world's highest—though from small base.

However, oil wealth management presents enormous governance challenges. Ensuring transparent revenue handling, preventing corruption, managing Dutch Disease effects on non-oil sectors, and distributing benefits equitably test weak institutions. International partners and civil society advocate for transparency and accountability mechanisms.

Infrastructure deficits are profound with inadequate roads, unreliable electricity, limited water systems, and basic service gaps. The government announces massive investment programs for highways, bridges, energy, housing, and social infrastructure funded by oil revenues.

## Political Environment

President Ali, representing the People's Progressive Party/Civic (PPP/C), governs following deeply contested 2020 election that required Caribbean Community intervention to ensure vote count integrity after attempted fraud. The PPP/C holds parliamentary majority, but relations with opposition A Partnership for National Unity + Alliance for Change (APNU+AFC) remain tense.

Guyanese politics features strong ethnic dimension with PPP/C supported predominantly by Indo-Guyanese (approximately 40% of population) while APNU+AFC draws primarily Afro-Guyanese support (approximately 30%). These divisions shape political competition and create governance challenges requiring cross-ethnic cooperation.

Corruption concerns persist despite oil boom providing resources. Contract transparency, procurement processes, and revenue management face scrutiny from civil society and international observers. Institutional capacity strengthening remains critical need.

## Venezuela Territorial Dispute

Venezuela claims approximately two-thirds of Guyana's territory (Essequibo region) based on 19th century boundary disputes. This long-dormant claim intensified following oil discoveries offshore the disputed area. Venezuela held December 2023 referendum on annexing Essequibo, escalating tensions dramatically.

The International Court of Justice (ICJ) addresses the boundary dispute with hearings ongoing. However, Venezuela rejects ICJ jurisdiction creating legal impasse. Military buildups and rhetorical escalation raise conflict risks, though outright invasion remains unlikely given international opposition and logistical challenges.

The dispute affects investor confidence, military spending, and diplomatic efforts. CARICOM, OAS, and Western powers support Guyana's territorial integrity, while Venezuela maintains maximalist claims. The situation represents one of Western Hemisphere's most serious territorial disputes.

## Economic Transformation

Non-oil economy includes agriculture (rice, sugar, gold mining, and forestry. However, oil dominance risks Dutch Disease with currency appreciation and resource reallocation threatening traditional sectors. The government emphasizes economic diversification and non-oil sector development.

Population of only approximately 800,000 means per capita oil wealth is enormous—potentially transformative for living standards if managed properly. Poverty affects approximately 40% of population with significant rural and interior (indigenous) poverty requiring targeted interventions.

Infrastructure investment aims to unlock agricultural potential, connect interior regions, and support economic activity. The government announces massive road networks, energy projects, and urban development programs.

## Social and Environmental Issues

Indigenous peoples (approximately 10% of population) in interior regions face development challenges with limited services, land rights issues, and environmental threats from mining and logging. Consultation and benefit-sharing from resource development remain contentious.

Environmental protection competes with development pressures. Guyana maintains vast rainforests with high biodiversity and carbon storage. International climate finance programs (including REDD+) provide revenue for conservation, but extractive pressures persist.

Emigration historically high with large Guyanese diaspora in North America, Caribbean, and UK. Remittances support household incomes. However, oil boom may reverse brain drain if opportunities materialize domestically.

Education and healthcare systems require massive investment to serve population effectively. Oil revenues enable improvements but building capacity takes time. Brain drain affects skilled professions.`,
    issues: [
      'Oil wealth management and corruption prevention',
      'Venezuela territorial threat to Essequibo region',
      'Infrastructure development from extremely low baseline',
      'Ethnic political divisions',
      'Balancing development and environmental protection'
    ]
  },

  'Suriname': {
    summary: `# Suriname

Suriname navigates political transition under President Chan Santokhi while managing major offshore oil discoveries that promise economic transformation, though immediate fiscal crisis, corruption legacy, and infrastructure deficits create urgent challenges. The small multi-ethnic nation balances development ambitions against limited capacity.

## Political Transition

President Santokhi, elected in 2020 representing the Progressive Reform Party (VHP), ended decade-long rule of Desi Bouterse, whose government faced corruption scandals and economic mismanagement. Santokhi's coalition government prioritizes fiscal reforms, anti-corruption measures, and international relationship restoration.

Bouterse, convicted of murder for 1982 killings of political opponents, fled the country in 2024 to avoid imprisonment following exhausted appeals. His absence from politics creates opportunity for reform but also political uncertainty given his enduring support base.

Suriname's complex ethnic composition (27% Hindustani, 21% Maroon, 16% Creole, 13% Javanese, plus indigenous and others) shapes political coalitions and social dynamics. Successful governance requires cross-ethnic cooperation and equitable resource distribution.

## Offshore Oil Discoveries

TotalEnergies and APA Corporation made significant offshore oil discoveries with estimated billions of barrels recoverable. First production projected for late 2020s could transform Suriname's economy similar to neighboring Guyana. These discoveries generate enormous optimism and development expectations.

However, oil production remains years away while Suriname faces immediate fiscal crisis requiring painful adjustments. The government negotiates with IMF on emergency financing and structural reforms. Austerity measures including subsidy reductions provoke social tensions.

Managing future oil wealth effectively requires institutional strengthening, transparency frameworks, and sustainable fiscal policies. Learning from regional examples and avoiding resource curse are priorities. Suriname's small population (approximately 600,000) means potential per capita wealth is substantial.

## Economic Crisis and Recovery

Suriname experienced severe economic crisis during 2010s with high inflation, currency devaluation, fiscal deficits, and debt distress. The Bouterse government's economic mismanagement, corruption, and unsustainable policies generated crisis. COVID-19 pandemic exacerbated difficulties with commodity price collapses and health system strain.

The Santokhi government implements austerity measures, fuel subsidy reductions, and fiscal reforms under IMF program. These adjustments generate short-term hardship with inflation, reduced purchasing power, and social service pressures. However, macroeconomic stabilization progresses with inflation moderating and reserves rebuilding.

Economy relies on mining (gold, oil, bauxite), agriculture, and forestry. Gold mining provides significant exports, though artisanal mining generates environmental destruction and mercury contamination. Commodity price volatility creates revenue unpredictability.

## Infrastructure and Development

Infrastructure deficits constrain development with limited road networks, unreliable electricity, and basic service gaps particularly outside Paramaribo capital. Interior regions populated by Maroon and indigenous communities face severe infrastructure and service limitations.

Healthcare and education systems require investment to serve population effectively. Brain drain affects skilled professionals emigrating to Netherlands (former colonial power with large Surinamese diaspora), Caribbean, and elsewhere.

## Environmental Challenges

Vast rainforests cover most territory providing biodiversity and carbon storage. However, illegal gold mining causes deforestation, river contamination, and environmental destruction. Balancing conservation and development creates policy tensions.

Climate change vulnerability includes coastal flooding (most population lives on coast), sea level rise, and changing precipitation patterns affecting agriculture.

## Regional Relations

Relations with Netherlands remain significant through development cooperation, diaspora ties, and language (Dutch official language). However, post-colonial grievances and policy disagreements create friction.

Guyana border disputes over maritime zones and land boundaries periodically create tensions though generally managed peacefully. Cooperation on oil development and environmental issues provides common interests.

French Guiana border sees informal cross-border movement, smuggling, and regional economic integration despite different administrative status (French overseas department).`,
    issues: [
      'Immediate fiscal crisis despite future oil promise',
      'Bouterse corruption legacy and judicial accountability',
      'Infrastructure deficits and interior development',
      'Illegal gold mining environmental devastation',
      'Managing future oil wealth sustainably'
    ]
  },

  'Belize': {
    summary: `# Belize

Belize balances Caribbean identity, eco-tourism appeal, and cultural diversity while confronting challenges of gang violence, drug trafficking, debt burden, and climate vulnerability. Prime Minister Juan Briceño's government pursues social investment and anti-corruption reforms amid fiscal constraints.

## Political Landscape

Prime Minister Briceño, leader of the People's United Party (PUP), governs with strong parliamentary majority following 2020 landslide victory ending United Democratic Party rule. Belizean democracy features two-party competition, regular elections, and peaceful transitions, though corruption and clientelism affect governance.

The government emphasizes social programs, infrastructure investment, and anti-corruption efforts. However, limited fiscal resources and high debt constrain policy ambitions. Relations with opposition UDP remain contentious with accusations of previous government corruption.

Belize's unique characteristics include English as official language (only Central American country), Commonwealth membership sharing King Charles III as head of state, and Caribbean Community (CARICOM) membership despite Central American location.

## Gang Violence and Crime

Drug trafficking organizations use Belize as transit route for cocaine from South America to Mexico and U.S. This generates gang violence, corruption, and security challenges. Belize City experiences significant violence from gangs controlling neighborhoods and engaging in drug trade, extortion, and turf conflicts.

Murder rates fluctuate around 25-35 per 100,000—high though moderate compared to regional neighbors. Gang violence concentrates in Belize City's Southside district affecting predominantly Creole population. Police face capacity constraints and corruption issues.

Mexican cartels' presence increases as they utilize Belizean territory and offshore islands for trafficking operations. This brings sophisticated criminal operations and corruption pressures. Porous borders with Guatemala and Mexico complicate enforcement.

## Economic Structure

Tourism dominates economy with eco-tourism, barrier reef diving/snorkeling, Mayan ruins, and beach destinations attracting visitors. The Belize Barrier Reef (second-largest globally) provides natural attraction and environmental asset. Cruise tourism to Belize City adds volume though limited economic impact.

Agriculture includes sugar, citrus, bananas, and aquaculture with exports to preferential markets. However, climate impacts, price volatility, and market access challenges affect sector. Remittances from Belizean diaspora (primarily U.S.) support household incomes.

Economic growth remains moderate around 2-4% annually with poverty affecting approximately 40% of population. Inequality persists with rural areas and indigenous populations experiencing worse outcomes.

## Fiscal Challenges and Debt

Public debt exceeds 100% of GDP following multiple restructurings and continued deficits. The government negotiated debt restructuring but fiscal sustainability requires sustained adjustment and growth. Limited tax revenue from small economy and tax evasion constrains resources.

Infrastructure investment needs compete with social spending and debt service. Road networks, electricity reliability, water systems, and internet connectivity require improvement particularly outside main urban areas.

## Environmental Assets and Climate Vulnerability

Belize's environmental assets including barrier reef, rainforests, and biodiversity attract eco-tourists and support livelihoods. The government maintains protected areas and marine reserves though enforcement faces resource constraints.

However, climate change poses existential threats through sea level rise affecting low-lying coastal areas and islands, hurricane intensity, and reef bleaching from ocean warming and acidification. Hurricane damage periodically devastates infrastructure and economy.

Offshore oil exploration generated controversy with environmental groups opposing drilling near the reef. A 2018 referendum rejected offshore drilling reflecting environmental priorities, though foregone revenue creates fiscal implications.

## Social Dynamics

Belize's ethnic diversity includes Mestizo (52%), Creole (25%), Maya (11%), Garifuna (6%), and others creating complex cultural landscape. Generally peaceful ethnic relations face occasional tensions around resource access and political representation.

Maya communities in southern districts maintain cultural practices and land claims. Legal battles over land rights and resource extraction on ancestral territories continue. The government balances development interests against indigenous rights.

Garifuna culture contributes distinctive Afro-Indigenous heritage particularly in Dangriga and southern coastal areas. Cultural preservation efforts maintain language and traditions despite modernization pressures.

Education system faces quality challenges with rural schools particularly under-resourced. Healthcare access varies with Belize City and regional centers better served than remote areas.`,
    issues: [
      'Gang violence and drug trafficking',
      'High public debt constraining development',
      'Climate vulnerability and hurricane exposure',
      'Infrastructure deficits in rural areas',
      'Maya land rights and resource extraction conflicts'
    ]
  },
}

// Adding major European nations...
SUMMARIES['United Kingdom'] = {
  summary: `# United Kingdom

The United Kingdom navigates post-Brexit adjustment, political instability, and economic challenges under Labour government led by Prime Minister Keir Starmer elected in 2024. The nation confronts NHS crisis, cost-of-living pressures, immigration debates, and questions about national unity as Scotland and Northern Ireland dynamics evolve.

## Political Transition

Labour won the July 2024 general election decisively ending 14 years of Conservative governance. Prime Minister Starmer's government inherits multiple crises including public service deterioration, economic stagnation, and social divisions. Labour's manifesto emphasizes NHS restoration, economic growth, and governance competence.

The Conservative Party enters opposition facing internal recriminations over electoral collapse, leadership questions, and ideological direction following successive prime ministers (Johnson, Truss, Sunak) and Brexit's mixed outcomes. The party faces potential realignment or fragmentation.

Liberal Democrats gained seats as third force while Reform UK (Nigel Farage's right-wing populist party) emerged as disruptive element fragmenting right-wing vote. Scottish National Party weakened following governance scandals though independence sentiment persists.

## Economic Challenges

Economic growth remains sluggish around 1% annually with productivity stagnation, investment deficits, and Brexit trade friction affecting performance. Cost-of-living crisis driven by inflation (moderating from 2022-2023 peaks but household impacts persist) strains budgets particularly for lower-income families.

Housing affordability reaches crisis levels with property prices and rents far exceeding wage growth in London, Southeast, and other regions. Younger generations face home ownership barriers requiring massive deposits and high mortgage rates. Social housing waiting lists are extensive.

Public finances are strained with high debt-to-GDP, expensive debt service, and pressure for public service investment after years of austerity. The Bank of England's interest rate increases to combat inflation raise mortgage costs and constrain consumer spending.

Brexit impacts include trade friction with EU, labor shortages in agriculture and hospitality (EU workers departed), financial services partially relocated to EU, and Northern Ireland protocol complications. Benefits remain debated with some regulatory freedoms gained but economic costs substantial.

Regional inequality persists with London and Southeast prosperous while Northern England, Wales, and parts of Scotland face deindustrialization legacy, lower incomes, and limited opportunities. "Levelling up" rhetoric under Conservatives produced limited tangible progress.

## NHS and Public Service Crisis

The National Health Service faces worst crisis in its history with record waiting lists (over 7 million for treatment), staff shortages (doctors, nurses emigrating or leaving profession), emergency room delays, and deteriorating infrastructure. Pandemic impacts, funding constraints, and workforce pressures create system strain.

Junior doctors and nurses conducted multiple strikes over pay, conditions, and staffing levels. The Labour government promises substantial NHS investment and workforce expansion, but transforming massive system requires sustained resources and reforms.

Social care system collapse affects elderly and disabled populations with underfunded local authorities cutting services. Hospital discharge delays from lack of social care placements worsen NHS pressures.

Education faces challenges including teacher shortages (pay stagnation, workload, retention), school building deterioration (concrete crisis), and attainment gaps. Universities confront financial pressures from frozen international student fees and research funding constraints.

## Immigration and Integration

Immigration remains politically contentious despite Brexit promises of "taking back control." Net migration reached record levels (700,000+ in some recent years) from non-EU sources including international students, skilled workers, and asylum seekers.

Small boat crossings of English Channel from France generate political controversy and humanitarian concerns. Thousands of asylum seekers cross dangerous waters with tragic deaths occurring. Previous Conservative government's Rwanda deportation scheme was blocked by courts; Labour cancelled it seeking alternative approaches.

Integration challenges include housing pressures, public service strain, and community tensions in some areas. However, UK's multicultural cities generally function successfully with significant immigrant contributions to economy and society.

## Scotland and Wales Devolution

Scottish National Party, despite recent weaknesses, maintains independence as long-term goal. Whether UK government permits another independence referendum remains contentious. The 2014 referendum rejected independence 55-45%, but Brexit (which Scotland opposed 62-38%) shifted dynamics.

Wales has less strong independence sentiment but devolution provides significant autonomy. Welsh language revitalization succeeds with education and public signage.

## Northern Ireland

The Northern Ireland Protocol/Windsor Framework governing post-Brexit trading arrangements creates ongoing complexity. Power-sharing government at Stormont functions intermittently with Democratic Unionist Party tensions over protocol arrangements affecting stability.

The Good Friday Agreement's 25th anniversary (2023) celebrated peace process success, but Brexit created new tensions affecting Irish unity question. Demographics shift toward Catholic majority potentially affecting future border poll prospects.

## Foreign Policy

UK maintains "special relationship" with United States, NATO leadership role, and Five Eyes intelligence partnership. Support for Ukraine against Russian invasion represents major foreign policy priority with military aid, training, and political support.

Post-Brexit "Global Britain" vision emphasizes Commonwealth ties, Indo-Pacific engagement (AUKUS partnership with Australia and U.S.), and bilateral trade deals. However, economic weight remains European-focused despite political distance from EU.`,
    issues: [
      'NHS crisis with record waiting lists and staff shortages',
      'Economic stagnation and cost-of-living pressures',
      'Immigration debates and Channel crossings',
      'Scottish independence question and national unity',
      'Post-Brexit economic adjustment and trade friction'
    ]
  },

  'France': {
    summary: `# France

France under President Emmanuel Macron faces political paralysis following 2024 snap elections that produced hung parliament, complicating governance amid pension protests, immigration tensions, and economic challenges. The nation balances between centrist pragmatism, resurgent left-wing coalition, and far-right National Rally strength reflecting deep social divisions.

## Political Gridlock

President Macron's risky decision to call snap legislative elections in June 2024 backfired dramatically, producing three-bloc parliament with no absolute majority. The left-wing New Popular Front alliance (including France Unbowed, Socialists, Greens, Communists) won plurality, Macron's centrist Ensemble alliance weakened significantly, and Marine Le Pen's far-right National Rally gained substantially though fell short of majority.

This fragmentation creates governance paralysis with difficulty forming stable government and passing legislation. Prime Minister appointments face potential no-confidence votes from opposed coalitions. Budget negotiations, reforms, and policy initiatives face enormous obstacles requiring cross-bloc cooperation rarely achieved.

The left alliance itself contains internal tensions between moderate Socialists and radical France Unbowed led by Jean-Luc Mélenchon, complicating coherent positioning. Whether coalitions can govern pragmatically or if instability persists through Macron's 2027 term completion remains uncertain.

## Pension Reform and Social Protests

Macron's forced passage of pension reform raising retirement age from 62 to 64 generated massive 2023 protests with millions demonstrating and strikes disrupting transport and services. The reform's passage without parliamentary vote using constitutional mechanism (Article 49.3) inflamed opposition and damaged Macron's legitimacy.

Unions, left-wing parties, and significant public opposed reform defending France's social model. However, demographic realities of aging population and pension system deficits motivated government despite political costs. Implementation proceeds amid ongoing opposition.

Labor relations remain contentious with French traditions of strikes and protests as political expression. Recent years saw Yellow Vest movement (gilets jaunes) protests over fuel taxes evolving into broader anti-elite sentiment, pension protests, and periodic sectoral strikes (transport, education, refineries).

## Immigration and National Identity

Immigration remains highly politicized with National Rally and portions of Republicans demanding restrictions, border control, and integration requirements. Macron's government attempted balanced approach combining enforcement against irregular migration with legal immigration pathways for needed labor.

The 2023-2024 immigration law debate exposed divisions with right-wing demanding restrictions, left-wing defending migrant rights, and centrists seeking pragmatic middle ground. Final legislation toughened some provisions satisfying right while maintaining pathways satisfying business needs, but satisfied few fully.

Integration challenges affect France's substantial immigrant and minority populations (North African, Sub-Saharan African, Middle Eastern heritage) concentrated in banlieue suburbs. Periodic riots (most recently 2023 following police shooting) reflect persistent inequalities, discrimination, and youth frustration.

France's secular tradition (laïcité) creates tensions over religious expression particularly affecting Muslim populations. Debates over headscarves, public religious symbols, and values create polarized discussions.

## Economic Performance

France's economy, eurozone's second-largest, grows modestly around 1% annually with competitiveness challenges. High public spending (approximately 57% of GDP among world's highest), rigid labor markets, and regulatory complexity affect business environment despite skilled workforce and infrastructure quality.

Public debt approaches 110% of GDP following pandemic spending and structural deficits. EU fiscal rules require deficit reduction creating tensions between austerity demands and social program protections. Tax burden is among world's highest funding extensive social protections.

Unemployment declined to approximately 7% from higher levels, though youth unemployment remains elevated. Labor market reforms under Macron aimed to increase flexibility and employment with mixed results and strong union opposition.

Tech sector and startups develop with Paris positioning as European hub. However, taxation and regulation affect competitiveness against U.S. and Asian rivals. Brain drain affects some sectors as French talent emigrates.

## Foreign Policy and EU Leadership

France under Macron pursues activist foreign policy emphasizing EU leadership (particularly with Germany), strategic autonomy from U.S., and multipolarity. Support for Ukraine against Russian invasion represents major commitment with military aid, refugee reception, and political leadership.

Macron's "strategic autonomy" vision for Europe aims to reduce defense dependence on U.S./NATO and develop independent capability. However, Ukraine war reinforced NATO centrality and transatlantic solidarity.

Relations with Africa evolve from traditional Françafrique neo-colonial patterns toward more equal partnerships, though anti-French sentiment and coups in former colonies (Mali, Burkina Faso, Niger) challenge influence.

Nuclear deterrent and permanent UN Security Council seat provide global status. However, domestic constraints and social demands limit international ambitions' resources.

## Social Issues

Education system faces challenges including teacher shortages, funding constraints, and attainment gaps. However, France maintains strong educational traditions including elite grandes écoles system.

Healthcare system (among world's best) faces pressures from aging demographics, chronic disease burden, and resource demands. Rural areas experience doctor shortages.

Climate policy includes ambitious emissions targets, renewable energy expansion, and nuclear power maintenance. However, implementation faces resistance over costs and lifestyle changes.`,
    issues: [
      'Political paralysis from hung parliament',
      'Pension reform protests and social unrest',
      'Immigration tensions and integration challenges',
      'High public debt and fiscal constraints',
      'Far-right National Rally political strength'
    ]
  },

  'Germany': {
    summary: `# Germany

Germany under Chancellor Olaf Scholz's coalition government confronts economic stagnation, energy transformation challenges, and political polarization including far-right AfD surge. Europe's largest economy struggles with industrial competitiveness decline, defense spending increases, and migration policy debates amid global uncertainty.

## Political Environment

Chancellor Scholz leads "traffic light" coalition (Social Democrats/SPD-red, Greens-green, Free Democrats/FDP-yellow) governing since 2021 following Angela Merkel's 16-year chancellorship. The unusual three-party coalition demonstrates internal tensions over policy priorities particularly energy, fiscal policy, and social spending.

The SPD, Greens, and FDP represent different constituencies and ideologies creating compromise challenges. Greens prioritize climate action and social progressivism, FDP emphasizes fiscal discipline and free markets, while SPD seeks middle ground. Coalition agreements enable governance but limit bold action.

Far-right Alternative for Germany (AfD) polls strongly particularly in eastern states, reflecting immigration backlash, economic anxiety, and establishment frustration. AfD's radical positions on EU, immigration, and democracy create "firewall" from other parties refusing coalition, but their electoral strength indicates significant voter discontent.

The Christian Democrats (CDU/CSU), traditional governing party, remain in opposition rebuilding after Merkel era. Internal debates over AfD cooperation, programmatic direction, and leadership affect party positioning.

## Economic Stagnation

Germany's economy, Europe's largest, experienced recession/stagnation in 2023-2024 with minimal growth forecasted. Industrial sector, Germany's traditional strength, faces multiple challenges: high energy costs following Russian gas cutoff, Chinese competition in key sectors (automotive, machinery), and global demand weakness.

The automotive industry undergoes painful transition to electric vehicles with German manufacturers lagging behind Chinese and some U.S. competitors on battery technology, software, and cost competitiveness. Legacy manufacturers (VW, BMW, Mercedes) face existential challenges transforming business models.

Energy costs remain elevated despite emergency measures after Russia cut gas supplies following Ukraine invasion. Germany's dependence on Russian energy exposed vulnerability requiring rapid diversification to LNG imports, renewable acceleration, and efficiency. Industrial competitiveness suffered from high energy costs compared to U.S. and Asian competitors.

Public investment needs in infrastructure, digitalization, and green transition conflict with constitutional debt brake limiting fiscal deficits. The 2023 Constitutional Court ruling striking down climate fund transfers exacerbated fiscal constraints forcing spending cuts.

## Energy Transition (Energiewende)

Germany shut down its last nuclear power plants in 2023 despite energy crisis, reflecting anti-nuclear consensus. However, this increased reliance on coal and gas temporarily contradicting climate goals. The decision generates ongoing debate about pragmatism versus ideology.

Renewable energy expansion progresses with wind and solar capacity increasing, though grid limitations, permitting delays, and local opposition slow deployment. Offshore wind potential remains partially untapped despite North and Baltic Sea resources.

Industrial decarbonization requires massive investments in hydrogen, electrification, and process changes. However, competitiveness concerns affect pace as higher costs threaten jobs and production.

## Defense and Security

Russia's Ukraine invasion forced Germany's dramatic defense policy shift (Zeitenwende) including 100 billion euro special fund, commitment to 2% NATO GDP spending target, and weapons deliveries to Ukraine (reversing historical restrictions).

This transformation challenges German post-WWII pacifist traditions and fiscal conservatism. Public debates over military readiness, conscription reinstatement, and defense industrial capacity intensify. Germany accepts leadership responsibility as Europe's strongest economy amid transatlantic uncertainty.

## Migration and Integration

Migration remains politically divisive with AfD exploiting concerns over integration, cultural change, and crime. Approximately 15-20 million Germans have migration background reflecting decades of immigration.

Ukraine war generated over 1 million Ukrainian refugee admissions with relatively smooth integration given skills and education levels. However, this adds to pressures from earlier Middle Eastern and African migration.

Integration challenges include housing availability, labor market access, education system capacity, and social cohesion. Germany's aging demographics require immigration for workforce replacement, but cultural and political tensions complicate rational policy-making.

## Social and Demographic Challenges

Aging population creates fiscal pressures on pensions, healthcare, and eldercare. Pension age debates recur though politically sensitive. Healthcare costs increase while rural areas face doctor shortages.

Education system faces challenges including teacher shortages (particularly STEM), infrastructure deterioration, and digitalization gaps exposed by pandemic. PISA scores show concerning declines in student performance.

Housing shortages affect major cities with rental markets extremely tight and purchase prices elevated despite recent corrections. Construction costs, labor shortages, and regulatory complexity limit new supply.

Climate change impacts intensify including flooding (Ahr Valley 2021 disaster), drought affecting agriculture and waterways, and forest dieback. Adaptation infrastructure and policies require acceleration.`,
    issues: [
      'Economic stagnation and industrial competitiveness decline',
      'Energy transition and high costs post-Russian gas cutoff',
      'Far-right AfD surge and political polarization',
      'Defense spending transformation and NATO commitments',
      'Aging demographics and fiscal pressures'
    ]
  },

  'Italy': {
    summary: `# Italy

Italy under Prime Minister Giorgia Meloni's right-wing government balances populist rhetoric with pragmatic governance while confronting chronic economic stagnation, aging demographics, migration pressures, and North-South inequality. The nation navigates between EU commitment and nationalist sentiment amid political evolution.

Meloni, leader of Brothers of Italy party with post-fascist roots, became Italy's first female prime minister in 2022 leading right-wing coalition with League and Forza Italia. Her government combines conservative social positions, tough migration rhetoric, and EU-skeptic traditions with pragmatic economic and foreign policy.

Economic growth remains weak around 1% annually with persistent structural problems including low productivity, rigid labor markets, bureaucratic complexity, and demographic decline. Public debt exceeds 140% of GDP among Europe's highest creating fiscal constraints under EU rules. Youth unemployment affects approximately 20% creating emigration pressures.

The banking sector recovered from crisis years but NPL legacy and exposure to sovereign debt create vulnerabilities. Major banks (Intesa Sanpaolo, UniCredit) are stable but economic weakness affects lending and growth support.

Migration from North Africa and Middle East via Mediterranean generates political controversy despite declining arrival numbers from 2015-2016 peaks. Meloni's tough rhetoric and agreements with Tunisia and Libya to restrict departures demonstrate enforcement emphasis, though human rights concerns persist.

North-South divide persists with prosperous industrial north (Milan, Turin, Veneto) contrasting against poorer south (Mezzogiorno) facing unemployment, organized crime, and limited opportunities. Regional inequality affects national cohesion and development.

Organized crime including Mafia, 'Ndrangheta, and Camorra maintain significant power in southern regions through extortion, drug trafficking, and political infiltration despite law enforcement efforts. Anti-mafia prosecutions continue but systemic corruption and criminal economy persist.

Aging population creates severe fiscal pressures with world's second-oldest demographic profile. Pension costs consume enormous budget portions while healthcare and eldercare demands increase. Fertility rates among world's lowest ensure continued aging without immigration offsetting.`,
    issues: [
      'Economic stagnation and low productivity growth',
      'Extremely high public debt constraining policy',
      'Aging demographics and pension burdens',
      'North-South regional inequality',
      'Migration management and Mediterranean crossings'
    ]
  },

  'Spain': {
    summary: `# Spain

Spain under Prime Minister Pedro Sánchez's Socialist government confronts political fragmentation, Catalan independence tensions, and economic challenges while maintaining eurozone recovery progress. Coalition politics, regional autonomy debates, and social polarization shape governance amid European integration commitments.

Sánchez governs through minority coalition with far-left Unidas Podemos and support from regional parties including Catalan and Basque nationalists. This fragmented support requires constant negotiation and compromises, often generating controversial concessions particularly on Catalan amnesty issue that sparked massive protests.

The November 2023 amnesty law for Catalan independence leaders involved in 2017 illegal referendum generated intense opposition from right-wing parties, judiciary, and significant public. However, Sánchez pursued it to secure Catalan party support for government formation, demonstrating pragmatic power politics over principle.

Catalonia independence question remains unresolved with society divided between independence supporters and unionists. The 2017 referendum attempt, subsequent crisis, and leader flights/imprisonments created ongoing tensions. Regional elections and negotiations continue with no clear resolution path satisfying all parties.

Economic recovery from pandemic and earlier eurozone crisis shows progress with growth around 2-3% annually and unemployment declining to approximately 12% from crisis peaks exceeding 25%. However, youth unemployment remains elevated around 25%, temporary employment dominates, and productivity growth lags.

Tourism provides crucial economic pillar generating employment and foreign exchange with Spain among world's most visited countries. However, over-tourism concerns affect Barcelona, Málaga, Balearic and Canary Islands creating housing pressures, environmental stress, and local resident backlash.

Housing affordability crisis affects major cities with rental prices soaring beyond wage growth. Young people face home ownership barriers and rental market scarcity. Government interventions including rent controls generate debates over effectiveness.

Regional autonomy system (17 autonomous communities with varying powers) creates complex governance with constant center-periphery tensions. Besides Catalonia, Basque Country maintains strong identity and autonomy demands though ETA terrorism ended. Other regions seek increased powers creating centrifugal pressures.`,
    issues: [
      'Catalan independence tensions and amnesty controversy',
      'Political fragmentation requiring unstable coalitions',
      'Youth unemployment and precarious employment',
      'Housing affordability crisis in major cities',
      'Over-tourism environmental and social impacts'
    ]
  },

  'Poland': {
    summary: `# Poland

Poland undergoes political transformation following 2023 elections that ended Law and Justice (PiS) party's authoritarian-trending rule, with new centrist-liberal coalition under Prime Minister Donald Tusk pursuing democratic restoration, EU relationship repair, and rule of law reforms while confronting judicial independence battles and Ukraine support challenges.

Tusk's coalition (Civic Platform, Third Way, New Left) won parliamentary majority ending eight years of PiS government that undermined judicial independence, attacked press freedom, restricted abortion and LGBTQ+ rights, and created EU conflict. The transition represents dramatic democratic recovery attempt.

However, President Andrzej Duda (PiS-aligned) retains veto power until 2025 term completion, enabling obstruction of Tusk government reforms. This divided power creates governance tensions with legislative action blocked by presidential vetoes requiring constitutional court challenges and creative workarounds.

Judicial independence restoration faces complexity as PiS-appointed judges control Constitutional Tribunal and significant judiciary portions. Reversing illegitimate appointments while respecting legal procedures creates dilemmas with domestic and EU legal implications. Rule of law restoration proceeds gradually amid legal battles.

EU relations improved dramatically with Tusk government's commitment to democratic norms enabling unfreezing of funds previously blocked over rule of law concerns. Billions in pandemic recovery and cohesion funds flow to Poland supporting investment and development.

Economic performance remains strong with growth around 3-4% annually among EU's best. However, inflation persists affecting household budgets despite moderating from peaks. Labor shortages across sectors drive wage growth but create competitiveness concerns.

Ukraine support continues under Tusk though with greater burden-sharing demands on EU partners. Poland hosts over 1 million Ukrainian refugees, provided massive military aid, and advocates strong European response to Russian aggression. However, agricultural trade disputes with Ukraine generate farmer protests and bilateral tensions.

Ukraine border security and EU eastern flank defense require continuous investment with Poland strengthening military capabilities dramatically. Defense spending increases toward 4% of GDP among NATO's highest supporting modernization and U.S. equipment purchases.`,
    issues: [
      'Judicial independence restoration vs. PiS appointments',
      'Presidential veto power blocking reforms until 2025',
      'Inflation and cost-of-living pressures',
      'Ukrainian refugee integration and support sustainability',
      'Agricultural sector competition with Ukrainian imports'
    ]
  },

  'Ukraine': {
    summary: `# Ukraine

Ukraine endures existential war against Russian invasion now exceeding 1,000 days while maintaining democratic governance, pursuing EU and NATO integration, and managing massive reconstruction needs. President Volodymyr Zelenskyy's wartime leadership navigates military challenges, international support dependency, and domestic pressures amid ongoing combat.

Russian full-scale invasion beginning February 2022 sought regime change and territorial conquest but faced unexpectedly fierce Ukrainian resistance. Ukrainian forces, supported by Western military aid, defended Kyiv, recaptured Kharkiv oblast and parts of Kherson, but face grinding attritional warfare particularly in Donbas and southern fronts.

Territorial situation stabilized along approximately 1,000km frontline with neither side achieving major breakthroughs in 2023-2024 despite Ukrainian 2023 counteroffensive attempts and Russian assaults particularly toward Bakhmut and Avdiivka. Static warfare, extensive fortifications, and artillery/drone dominance characterize current phase.

Western military aid continues but debates over ammunition supplies, advanced weapons systems, and long-term sustainability affect Ukrainian planning. U.S. political dysfunction delayed aid packages, European production increases delivery, and restrictions on attacking Russian territory with supplied weapons frustrate Ukrainian strategy.

Economic survival depends on international financial support with billions in budget assistance from U.S., EU, and others covering government operations, pensions, and basic services. GDP contracted severely in 2022 but partially recovered with 2024 growth estimated around 3-4% from collapsed baseline.

Infrastructure attacks from Russian missile and drone campaigns target electricity, heating, and water systems particularly during winter months creating civilian hardship and economic damage. Air defense systems provided by partners reduce but don't eliminate strikes.

Reconstruction needs exceed hundreds of billions of dollars with destroyed cities, damaged infrastructure, de-mining requirements, and economic recovery demanding massive investment. International donor conferences pledge support but actual fund flows and coordination face challenges.

Corruption remains concern despite wartime reforms with international donors demanding accountability and transparency for aid. Zelenskyy's government dismisses corrupt officials but systemic risks persist given historical patterns and wartime emergency conditions.`,
    issues: [
      'Grinding attritional warfare with high casualties',
      'Western aid dependency and ammunition shortages',
      'Massive reconstruction costs exceeding $400 billion',
      'Infrastructure damage from Russian attacks',
      'Long-term mobilization sustainability and morale'
    ]
  },

  'Russia': {
    summary: `# Russia

Russia under President Vladimir Putin's authoritarian regime prosecutes war against Ukraine while facing Western sanctions, economic adjustment, international isolation, and domestic repression. The invasion's failure to achieve quick victory transforms into long war testing Russian society, economy, and political stability.

Putin's February 2022 Ukraine invasion decision, based on miscalculations about Ukrainian resistance and Western response, generated massive strategic failure transforming Russia's international position and domestic trajectory. Unable to capture Kyiv or overthrow government, Russia occupies approximately 18% of Ukrainian territory but faces continuing conflict.

Domestic repression intensified dramatically silencing war opposition, imprisoning critics, and eliminating remaining independent media and civil society. Political opponents including Alexei Navalny (who died in Arctic prison February 2024 under suspicious circumstances) face imprisonment or exile. Any dissent risks prosecution under harsh laws criminalizing "discrediting" military or "false information."

March 2024 presidential election, lacking genuine opposition, gave Putin another six-year term extending rule potentially to 2030 (in power since 2000). The electoral exercise demonstrated authoritarian control rather than democratic choice.

Western sanctions target energy, finance, technology, and individuals but haven't collapsed economy due to oil/gas exports (particularly to China and India), import substitution, sanctions evasion, and central bank management. However, long-term impacts include technological isolation, brain drain, and reduced living standards.

Military mobilization affects society with hundreds of thousands killed/wounded creating family impacts. September 2022 partial mobilization prompted exodus of draft-age men. Authorities avoid broader mobilization fearing public backlash, instead recruiting prisoners, offering high salaries, and relying on contract soldiers.

Economic situation shows resilience short-term but severe long-term problems. Oil and gas revenues, though reduced from sanctions, provide fiscal resources. Military spending exceeds 6% of GDP crowding out civilian investment. Inflation, labor shortages, and technological isolation hurt competitiveness. Brain drain of hundreds of thousands of professionals, especially in tech, damages innovation capacity.`,
    issues: [
      'Ukraine war stalemate and massive casualties',
      'Western sanctions and technological isolation',
      'Severe domestic repression eliminating all opposition',
      'Economic long-term decline despite short-term stability',
      'International isolation and pariah status'
    ]
  },

  'Turkey': {
    summary: `# Turkey

Turkey under President Recep Tayyip Erdoğan's increasingly authoritarian rule confronts severe economic crisis featuring hyperinflation, currency collapse, and unorthodox policies while navigating complex foreign relations balancing NATO membership against Russia ties and regional ambitions. May 2023 elections extended Erdoğan's rule despite economic pain.

Erdoğan won May 2023 presidential runoff extending rule beyond 20 years despite economic catastrophe and significant opposition. His AKP party lost parliamentary majority requiring coalition with nationalist MHP, but presidential system concentration of power enables continued dominance.

Economic crisis features inflation exceeding 60-70% officially (likely higher practically) destroying savings and purchasing power. Lira depreciated dramatically against dollar/euro despite central bank interventions. Erdoğan's unorthodox beliefs that high interest rates cause inflation (opposite standard economics) led to delayed monetary tightening.

Eventually, authorities appointed more orthodox economic team in 2023 raising interest rates toward 45-50% attempting stabilization. However, damage from years of mismanagement, depleted reserves, and lost credibility hamper recovery. Inflation moderates slowly while real economy suffers.

Earthquake devastation in February 2023 killed over 50,000 across southern/southeastern Turkey and northern Syria. Inadequate building standards enforcement, rescue coordination failures, and corruption in construction generated public anger. Massive reconstruction needs strain resources while political impacts appear limited as Erdoğan won election months later.

Syrian refugee population (approximately 3.5 million) generates social tensions with opposition demanding forced returns. Economic hardship increases scapegoating despite refugees' contributions. Erdoğan government uses refugee leverage in EU negotiations demanding funds and concessions.

Foreign policy balances between NATO membership and independent approach including Russia ties. Turkey opposes Sweden NATO membership initially (later approved), maintains close Erdoğan-Putin relationship despite Ukraine war, and pursues regional influence through Libya, Syria, Caucasus involvement.

Kurdish question remains unresolved with PKK insurgency continuing sporadically. Southeastern regions predominantly Kurdish face development gaps and political marginalization. HDP (pro-Kurdish party) faces closure attempts and leader imprisonment. Turkish military operations in Syria target Kurdish forces allied with U.S. against ISIS creating transatlantic tensions.`,
    issues: [
      'Hyperinflation and economic mismanagement',
      'Authoritarian consolidation and opposition repression',
      'Syrian refugee tensions and xenophobia',
      'Earthquake reconstruction challenges',
      'Kurdish conflict and political exclusion'
    ]
  },

  'Greece': {
    summary: `# Greece

Greece under Prime Minister Kyriakos Mitsotakis's conservative government demonstrates economic recovery from eurozone crisis decade while confronting migration pressures, Turkey tensions, and climate change impacts. Political stability and market confidence contrast against earlier turmoil though challenges persist.

Mitsotakis's New Democracy party governs with strong majority following 2023 election victory demonstrating voter acceptance of center-right policies emphasizing economic growth, investment attraction, and fiscal stability. The opposition Syriza party, which governed during crisis years, fractured and weakened significantly.

Economic growth reaches 2-3% annually with tourism recovery, foreign investment, and infrastructure projects driving expansion. Public debt declined from crisis peaks exceeding 180% GDP toward 160% though remains among Europe's highest. Investment-grade credit rating restored ending pariah status from crisis years.

However, cost-of-living crisis affects households with inflation, high housing costs (particularly Athens), and wage growth lagging. Youth unemployment declined but remains elevated. Brain drain continues with educated young Greeks emigrating for opportunities.

Migration from Turkey and across Aegean islands generates political tensions and humanitarian challenges. Greece faced massive flows during 2015-2016 crisis overwhelming reception capacity. Current policy emphasizes border enforcement with pushback allegations generating human rights concerns from NGOs and international monitors. EU support provides funding but burden-sharing remains contentious.

Turkey relations oscillate between cooperation and confrontation over territorial waters, continental shelf rights, Cyprus division, and Aegean islands militarization. Erdoğan's inflammatory rhetoric and sovereignty challenges generate tensions though military conflict appears unlikely given NATO membership and economic interests.

Climate change impacts intensify including catastrophic wildfires destroying forests and communities, heat waves killing hundreds, and flooding. The 2023 Evros fires and floods demonstrated vulnerability requiring adaptation infrastructure and emergency response improvements.

Tourism dominates economy with over 30 million annual visitors generating employment and foreign exchange. Santorini, Mykonos, Athens, and other destinations attract global tourists. However, over-tourism strains infrastructure, drives housing unaffordability, and generates environmental pressures.`,
    issues: [
      'Migration management and Aegean border pressures',
      'Turkey territorial disputes and sovereignty challenges',
      'Climate change wildfires and extreme weather',
      'High public debt despite improvements',
      'Over-tourism and housing affordability'
    ]
  },
}

// Complete remaining European countries Belgium through Portugal
SUMMARIES['Belgium'] = { summary: `# Belgium\n\nBelgium maintains prosperity and EU capital status while navigating linguistic divisions, complex coalition governance, and terrorism security concerns. Political fragmentation between Dutch-speaking Flanders and French-speaking Wallonia creates constant governance challenges.`, issues: ['Linguistic community divisions', 'Political coalition complexity', 'Terrorism and security risks', 'Public debt and fiscal pressures', 'Regional economic disparities'] }
SUMMARIES['Austria'] = { summary: `# Austria\n\nAustria balances prosperity, neutrality traditions, and far-right political strength under coalition governments managing immigration debates, Russian energy dependence, and EU integration questions. The nation maintains high living standards while confronting political polarization.`, issues: ['Far-right FPÖ political strength', 'Russian energy dependency', 'Immigration and asylum debates', 'Neutrality vs. EU defense integration', 'Housing affordability in cities'] }
SUMMARIES['Finland'] = { summary: `# Finland\n\nFinland navigates NATO accession following Russia's Ukraine invasion while maintaining welfare state model, managing immigration debates, and pursuing technological innovation. The nation's security transformation represents dramatic strategic shift abandoning decades of neutrality.`, issues: ['NATO integration and Russia tensions', 'Fiscal pressures on welfare state', 'Immigration and integration debates', 'Aging demographics', 'Climate change Arctic impacts'] }
SUMMARIES['Denmark'] = { summary: `# Denmark\n\nDenmark maintains Nordic welfare model, economic competitiveness, and selective EU integration while managing immigration restrictions, climate leadership ambitions, and center-left governance. The nation balances openness and social protection.`, issues: ['Immigration restrictions and integration', 'Welfare state sustainability', 'Climate policy implementation costs', 'Labor market pressures', 'EU opt-outs and integration questions'] }
SUMMARIES['Ireland'] = { summary: `# Ireland\n\nIreland balances remarkable economic success as tech/pharma hub against housing crisis, healthcare strains, and Northern Ireland Brexit complications. The Celtic Tiger's transformation creates prosperity but severe inequality and infrastructure deficits.`, issues: ['Severe housing crisis and unaffordability', 'Healthcare system strain', 'Corporate tax model sustainability', 'Northern Ireland protocol impacts', 'Infrastructure deficits despite wealth'] }
SUMMARIES['Hungary'] = { summary: `# Hungary\n\nHungary under Viktor Orbán's authoritarian government confronts EU conflicts over rule of law, judicial independence, press freedom, and LGBTQ+ rights while maintaining economic growth and nationalist policies. The nation represents EU's most controversial member challenging democratic norms.`, issues: ['Authoritarian governance and democratic backsliding', 'EU rule of law conflicts', 'Judicial independence elimination', 'Press freedom restrictions', 'LGBTQ+ rights attacks and discrimination'] }
SUMMARIES['Czech Republic'] = { summary: `# Czech Republic\n\nCzech Republic under center-right government pursues pro-EU, pro-Ukraine policies while managing energy transition, economic inflation, and populist opposition. The nation balances Western integration against domestic political divisions.`, issues: ['Energy transition from coal dependency', 'Inflation and living costs', 'Populist opposition strength', 'Labor shortages', 'Ukrainian refugee integration'] }
SUMMARIES['Bulgaria'] = { summary: `# Bulgaria\n\nBulgaria struggles with political instability, corruption, organized crime, and EU's lowest living standards despite membership. Frequent elections and coalition collapses prevent coherent governance while judicial reform and rule of law remain elusive.`, issues: ['Political instability and coalition collapses', 'Endemic corruption', 'Organized crime infiltration', 'EU's lowest per capita income', 'Brain drain and emigration'] }
SUMMARIES['Croatia'] = { summary: `# Croatia\n\nCroatia balances tourism-driven prosperity, eurozone/Schengen entry achievements, and EU integration against political corruption, demographic decline, and regional inequality. The Adriatic nation develops while confronting governance and development challenges.`, issues: ['Political corruption scandals', 'Severe demographic decline', 'Regional inequality and development gaps', 'Seasonal employment tourism dependency', 'Emigration to Western Europe'] }
SUMMARIES['Estonia'] = { summary: `# Estonia\n\nEstonia maintains digital governance leadership, strong economic performance, and robust Russia security stance following Ukraine invasion while managing energy independence, inflation pressures, and demographic challenges. The Baltic nation demonstrates post-Soviet success.`, issues: ['Russia security threat proximity', 'Energy independence and costs', 'Demographic decline', 'Russian minority integration', 'Inflation and living costs'] }
SUMMARIES['Norway'] = { summary: `# Norway\n\nNorway leverages oil wealth maintaining prosperity, welfare state, and sovereign wealth fund while pursuing green transition, managing immigration, and balancing EU non-membership against EEA integration. The nation's resource management provides global model.`, issues: ['Oil sector decline management', 'Green transition costs', 'Labor market immigration dependency', 'Welfare state sustainability', 'EU relationship and EEA limitations'] }
SUMMARIES['Sweden'] = { summary: `# Sweden\n\nSweden confronts gang violence crisis, NATO accession following neutrality abandonment, and welfare state pressures under center-right government pursuing tough law enforcement and immigration restrictions. The nation's transformation from social democratic model raises questions about sustainability.`, issues: ['Gang violence and shootings epidemic', 'Immigration integration failures', 'Welfare state fiscal pressures', 'NATO integration and Sweden Democrats influence', 'Energy policy and nuclear expansion'] }
SUMMARIES['Portugal'] = { summary: `# Portugal\n\nPortugal balances tourism prosperity, political stability, and EU integration against housing crisis, low wages, emigration, and public debt burdens. The nation's economic recovery from eurozone crisis shows progress but structural challenges persist.`, issues: ['Severe housing crisis from tourism', 'Low wages and emigration', 'High public debt', 'Aging demographics', 'Healthcare system pressures'] }
}

async function generateAllCategoryBatch3() {
  console.log('🚀 Generating ALL category summaries for Batch 3 (33 countries)\n')

  let successCount = 0
  let errorCount = 0

  for (const country of COUNTRIES) {
    try {
      const data = SUMMARIES[country.name]

      if (!data) {
        console.log(`⚠️  No summary data for ${country.name} - skipping`)
        errorCount++
        continue
      }

      console.log(`Processing: ${country.name}`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'all',
          },
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'all',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        update: {
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
      })

      console.log(`✅ ${country.name} - Saved (${data.summary.length} chars)`)
      successCount++

    } catch (error) {
      console.error(`❌ Error saving ${country.name}:`, error)
      errorCount++
    }
  }

  console.log(`\n📊 Batch 3 Complete:`)
  console.log(`   ✅ Success: ${successCount}`)
  console.log(`   ❌ Errors: ${errorCount}`)
  console.log(`   📝 Total: ${COUNTRIES.length}`)
  console.log(`\n📈 Overall Progress: ${17 + successCount}/128 countries`)
}

generateAllCategoryBatch3()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
