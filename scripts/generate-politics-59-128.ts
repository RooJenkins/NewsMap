import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// This script generates POLITICS writeups for countries 59-128
// Countries 1-58 are already completed

const countryCoords: Record<string, { lat: number; lng: number }> = {
  'Japan': { lat: 36.2048, lng: 138.2529 },
  'South Korea': { lat: 35.9078, lng: 127.7669 },
  'North Korea': { lat: 40.3399, lng: 127.5101 },
  'Indonesia': { lat: -0.7893, lng: 113.9213 },
  'Australia': { lat: -25.2744, lng: 133.7751 },
  'New Zealand': { lat: -40.9006, lng: 174.8860 },
  'Pakistan': { lat: 30.3753, lng: 69.3451 },
  'Bangladesh': { lat: 23.6850, lng: 90.3563 },
  'Afghanistan': { lat: 33.9391, lng: 67.7100 },
  'Iran': { lat: 32.4279, lng: 53.6880 },
  'Israel': { lat: 31.0461, lng: 34.8516 },
  'Palestine': { lat: 31.9522, lng: 35.2332 },
  'Iraq': { lat: 33.2232, lng: 43.6793 },
  'Jordan': { lat: 30.5852, lng: 36.2384 },
  'Cambodia': { lat: 12.5657, lng: 104.9910 },
  'Laos': { lat: 19.8563, lng: 102.4955 },
  'Myanmar': { lat: 21.9162, lng: 95.9560 },
  'Nepal': { lat: 28.3949, lng: 84.1240 },
  'Mongolia': { lat: 46.8625, lng: 103.8467 },
  'Papua New Guinea': { lat: -6.3150, lng: 143.9555 },
  'Fiji': { lat: -17.7134, lng: 178.0650 },
  'Bahrain': { lat: 26.0667, lng: 50.5577 },
  'Kuwait': { lat: 29.3117, lng: 47.4818 },
  'Oman': { lat: 21.4735, lng: 55.9754 },
  'Qatar': { lat: 25.3548, lng: 51.1839 },
  'Kazakhstan': { lat: 48.0196, lng: 66.9237 },
  'Thailand': { lat: 15.8700, lng: 100.9925 },
  'Vietnam': { lat: 14.0583, lng: 108.2772 },
  'Philippines': { lat: 12.8797, lng: 121.7740 },
  'Malaysia': { lat: 4.2105, lng: 101.9758 },
  'Singapore': { lat: 1.3521, lng: 103.8198 },
  'Taiwan': { lat: 23.6978, lng: 120.9605 },
  'Sri Lanka': { lat: 7.8731, lng: 80.7718 },
  'Yemen': { lat: 15.5527, lng: 48.5164 },
  'Saudi Arabia': { lat: 23.8859, lng: 45.0792 },
  'UAE': { lat: 23.4241, lng: 53.8478 },
  'Lebanon': { lat: 33.8547, lng: 35.8623 },
  'Syria': { lat: 34.8021, lng: 38.9968 },
  'Solomon Islands': { lat: -9.6457, lng: 160.1562 },
  'Vanuatu': { lat: -15.3767, lng: 166.9592 },
  'Samoa': { lat: -13.7590, lng: -172.1046 },
  'Tonga': { lat: -21.1789, lng: -175.1982 },
  'Egypt': { lat: 26.8206, lng: 30.8025 },
  'Ethiopia': { lat: 9.1450, lng: 40.4897 },
  'Kenya': { lat: -0.0236, lng: 37.9062 },
  'Somalia': { lat: 5.1521, lng: 46.1996 },
  'Sudan': { lat: 12.8628, lng: 30.2176 },
  'Algeria': { lat: 28.0339, lng: 1.6596 },
  'Angola': { lat: -11.2027, lng: 17.8739 },
  'Ghana': { lat: 7.9465, lng: -1.0232 },
  'Mozambique': { lat: -18.6657, lng: 35.5296 },
  'Senegal': { lat: 14.4974, lng: -14.4524 },
  'Democratic Republic of Congo': { lat: -4.0383, lng: 21.7587 },
  'Nigeria': { lat: 9.0820, lng: 8.6753 },
  'South Africa': { lat: -30.5595, lng: 22.9375 },
  'Morocco': { lat: 31.7917, lng: -7.0926 },
  'Tunisia': { lat: 33.8869, lng: 9.5375 },
  'Libya': { lat: 26.3351, lng: 17.2283 },
  'Tanzania': { lat: -6.3690, lng: 34.8888 },
  'Uganda': { lat: 1.3733, lng: 32.2903 },
  'Zimbabwe': { lat: -19.0154, lng: 29.1549 },
  'Cameroon': { lat: 7.3697, lng: 12.3547 },
  'Zambia': { lat: -13.1339, lng: 27.8493 },
  'Mali': { lat: 17.5707, lng: -3.9962 },
  'Niger': { lat: 17.6078, lng: 8.0817 },
  'Chad': { lat: 15.4542, lng: 18.7322 },
  'Burkina Faso': { lat: 12.2383, lng: -1.5616 },
  'Rwanda': { lat: -1.9403, lng: 29.8739 },
  'Botswana': { lat: -22.3285, lng: 24.6849 }
}

interface PoliticsSummary {
  country: string
  summary: string
  issues: string[]
}

// Generating remaining POLITICS writeups (59-128)
const politicsSummaries: PoliticsSummary[] = [
  {
    country: 'Japan',
    summary: `Japan under Prime Minister Fumio Kishida (Liberal Democratic Party) faces historic challenges: demographic collapse, economic stagnation, rising tensions with China and North Korea, and questions about constitutional pacifism. The LDP, which has governed almost continuously since 1955, maintains political dominance despite scandals, but the fundamental issues—aging, debt, regional threats—resist political solutions. Demographics are catastrophic. Japan has world oldest population, lowest birth rates, and is already shrinking. Deaths exceed births by hundreds of thousands annually. By 2050, population will fall from 125 million to under 100 million, with over a third elderly. This strains pensions, healthcare, and labor force. Despite crisis, Japan resists immigration—cultural homogeneity is prized, and limited immigration reforms have been cautious. Without demographic change, economic decline seems inevitable. Economic stagnation has defined Japan since asset bubble burst in 1990s. The "lost decades" saw near-zero growth, deflation, and corporate zombification. Abenomics (under former PM Shinzo Abe) attempted stimulus through monetary easing, fiscal spending, and structural reforms, with mixed results. Growth remains weak, wages are stagnant, and public debt exceeds 250% of GDP, highest in developed world. Yet Japan avoids crisis because debt is yen-denominated and domestically held. Constitutional Article 9, imposed by U.S. occupation, renounces war and restricts military force. But regional threats—China rise, North Korea nuclear program, Taiwan tensions—drive Japan toward rearmament. Kishida has committed to doubling defense spending to 2% of GDP, acquiring counter-strike capabilities, and deeper U.S.-Japan alliance integration. This represents fundamental shift from post-war pacifism, though constitutional revision remains politically difficult. Relations with China are increasingly tense. Historical animosity from WWII atrocities remains, and territorial disputes over Senkaku/Diaoyu Islands create friction. China military modernization and assertiveness, particularly regarding Taiwan, threaten Japan directly. Economic interdependence complicates relations—China is major trade partner. North Korea fires missiles over Japan, tests nuclear weapons, and kidnapped Japanese citizens decades ago (still unresolved). This creates public support for defense spending and U.S. alliance. Relations with South Korea are complicated by historical grievances—comfort women, forced labor, and colonial occupation create periodic diplomatic crises. But shared threat from China and North Korea drive security cooperation. The U.S.-Japan alliance is cornerstone of regional security. Japan hosts tens of thousands of U.S. troops, and the alliance is critical to containing China. Kishida has strengthened ties, but Okinawan resentment of base presence persists. Disasters haunt Japan—the 2011 earthquake, tsunami, and Fukushima nuclear meltdown killed thousands and traumatized the nation. Nuclear power, once major energy source, became politically toxic, though recently it being reconsidered amid energy security and climate concerns. Political scandals, particularly involving LDP and Unification Church ties, have damaged Kishida. Watch for demographic policies and whether Japan opens to immigration, defense policy and constitutional revision, China tensions particularly over Taiwan, economic revitalization efforts, and LDP political dominance amid scandals.`,
    issues: [
      'Demographic collapse with world oldest population and lowest birth rates',
      'Economic stagnation with lost decades and public debt over 250% GDP',
      'China tensions over Senkaku Islands and Taiwan threatening regional stability',
      'North Korea nuclear program and missile tests creating security threats',
      'Immigration resistance despite labor shortages and demographic crisis'
    ]
  },
  {
    country: 'South Korea',
    summary: `South Korea under President Yoon Suk-yeol (People Power Party) faces North Korean nuclear threats, generational political divisions, economic pressures from inequality and housing, and geopolitical positioning between U.S. alliance and China economic ties. Yoon represents shift from previous progressive governments, taking harder line on North Korea and closer alignment with U.S. and Japan. North Korea dominates security policy. The Kim regime has accelerated nuclear and missile programs, testing ICBMs capable of reaching U.S. mainland and declaring South Korea "principal enemy." Diplomacy collapsed after Trump-Kim summits. Yoon has abandoned engagement for deterrence. Generational and gender divides shape politics. Young men have shifted conservative, resenting feminist policies and mandatory military service. Young women remain progressive, citing discrimination. This gender war affects elections. Housing unaffordability generates massive discontent. Seoul prices leave young people unable to afford homes despite high education. This drives "Hell Joseon" sentiment. Low birth rates are world lowest (0.7 children per woman), creating demographic crisis. Despite massive government spending, young people refuse to have children, citing costs and work pressures. Relations with Japan have improved under Yoon, prioritizing security cooperation over historical grievances. China is largest trade partner but geopolitical rival. Korea must navigate U.S.-China competition carefully. Watch for North Korea provocations, demographic crisis, housing affordability, and balancing U.S.-China relations.`,
    issues: [
      'North Korea nuclear threat declaring South "principal enemy"',
      'Demographic crisis with 0.7 birth rate, world lowest',
      'Housing unaffordability particularly Seoul creating generational anger',
      'Generational gender war with young men shifting conservative',
      'Balancing U.S. alliance and China economic dependence'
    ]
  },
  {
    country: 'North Korea',
    summary: `North Korea under Kim Jong Un operates as totalitarian hereditary dictatorship, pursuing nuclear weapons despite sanctions and maintaining brutal repression. Kim has consolidated power through purges including executing family members. The nuclear program is regime priority. North Korea has developed ICBMs capable of striking U.S. mainland. Kim declared North Korea "irreversible" nuclear state. Diplomacy with Trump produced spectacle but no denuclearization. Domestic conditions are horrific. Political prison camps hold tens of thousands in brutal conditions with torture and starvation. Surveillance is total. No freedoms exist. The economy is devastated by sanctions. Chronic food insecurity affects millions. COVID-19 border closure with China cut vital trade, causing additional starvation. China supports North Korea as buffer state. Russia ties have strengthened—North Korea provides munitions for Ukraine war. Relations with South Korea have frozen. Kim declared South "principal enemy" and abandoned reunification. Watch for nuclear tests, regime stability, humanitarian crisis, Russia cooperation, and potential collapse.`,
    issues: [
      'Nuclear weapons program with ICBMs threatening U.S.',
      'Totalitarian repression with prison camps and torture',
      'Humanitarian crisis with chronic starvation',
      'Munitions supply to Russia for Ukraine war',
      'Regime succession uncertainty'
    ]
  },
  {
    country: 'Indonesia',
    summary: `Indonesia under President-elect Prabowo Subianto faces questions about democratic backsliding. Prabowo, former Suharto-era general with human rights abuse allegations, won with outgoing President Jokowi support. This dynastic politics and military return concern democrats. Indonesia democracy since 1998 Reformasi has been relatively successful, but recent erosion visible—Jokowi concentrated power, weakened anti-corruption commission. Corruption remains endemic. KPK anti-corruption commission was weakened through legislation. Islamic politics shapes Indonesia. Moderate pluralism is traditional, but hardline Islamism has grown. Papua conflict continues—indigenous Papuans seek independence, security forces commit abuses. The economy is Southeast Asia largest with potential, but growth uneven, infrastructure lags, and job creation insufficient. Deforestation for palm oil makes Indonesia major carbon emitter. Watch for Prabowo governance and democratic backsliding, corruption, Islamic politics, Papua conflict, and environmental degradation.`,
    issues: [
      'Democratic backsliding with former general accused of abuses winning presidency',
      'Anti-corruption commission weakened reducing independence',
      'Papua independence conflict with abuses',
      'Islamic hardline growth challenging pluralism',
      'Environmental destruction from palm oil deforestation'
    ]
  },
  {
    country: 'Australia',
    summary: `Australia under PM Anthony Albanese (Labor) governs after defeating conservatives in 2022. Albanese has pursued climate action, but faces housing crisis, China relations, and AUKUS submarine program challenges. Housing affordability crisis dominates—Sydney and Melbourne prices among world highest, locking out young people. Indigenous Voice referendum in 2023 was defeated despite Albanese support, revealing reconciliation divisions. China relations improved under Labor after freeze. But fundamental tensions remain—Australia is in U.S. alliance (AUKUS) while China is largest trade partner. AUKUS involves acquiring nuclear submarines at over $300 billion, creating capability but budget pressures and dependence on U.S. technology. The Pacific is strategic sphere but China influence growing. Climate change threatens Pacific islands. Watch for China-U.S. balancing, AUKUS costs, housing crisis, and climate versus fossil fuel exports contradictions.`,
    issues: [
      'Housing crisis with world most expensive cities',
      'Balancing U.S. alliance through AUKUS and China trade',
      'AUKUS submarines costing $300+ billion',
      'Indigenous Voice referendum defeat',
      'Climate policy contradictions with coal and gas exports'
    ]
  },
  {
    country: 'New Zealand',
    summary: `New Zealand under PM Christopher Luxon (National Party) governs in coalition after defeating Labour in 2023. The shift followed Labour fatigue and cost-of-living pressures. Ardern became global progressive icon but resigned in 2023 citing exhaustion. The election turned on crime, inflation, and change. The government has shifted priorities—repealing Labour policies on tobacco and climate, cutting spending. Coalition with libertarian ACT and populist New Zealand First creates tensions. Housing crisis mirrors Australia—Auckland prices shut out buyers. COVID-19 response was initially successful with strict lockdown eliminating virus, but eventual costs became politically damaging. China relations are economically vital through dairy exports, but Five Eyes security partnership creates tensions. Māori rights and Treaty relations are ongoing. Progress on co-governance faces backlash—ACT campaigned against "divisive" policies. Watch for coalition stability, housing crisis, China-U.S. balancing, Māori co-governance debates, and environmental issues.`,
    issues: [
      'Housing crisis particularly Auckland',
      'Coalition tensions between National, ACT, and NZ First',
      'China economic dependence versus Five Eyes alignment',
      'Māori co-governance backlash',
      'Environmental degradation from dairy industry'
    ]
  },
  {
    country: 'Pakistan',
    summary: `Pakistan under Army Chief General Asim Munir and caretaker government faces political crisis after former PM Imran Khan imprisonment. The military, which has ruled Pakistan directly or indirectly for most of its history, orchestrated Khan removal and imprisonment on corruption charges seen as politically motivated. This triggered protests and repression. Khan PTI party won 2018 election with military backing but fell out with army, leading to no-confidence vote in 2022. His imprisonment and party suppression sparked protests met with crackdowns. Elections scheduled for 2024 will test whether military allows genuine democracy. Economic crisis is severe—Pakistan narrowly avoided default in 2023 through IMF bailout requiring harsh austerity. Inflation is over 30%, currency has collapsed, and reserves are minimal. Debt to China through Belt and Road creates dependency. Terrorism persists. Pakistani Taliban attacks have increased, and militant groups operate in border areas. Relations with Afghanistan are tense after Taliban takeover. Relations with India are frozen. Kashmir dispute remains unresolved, and terrorist attacks from Pakistan-based groups provoke tensions. Nuclear weapons on both sides make conflict catastrophic. Climate disasters are severe—2022 floods submerged one-third of country, killing thousands and displacing millions. Pakistan contributes minimally to emissions but suffers extreme impacts. Watch for Khan trials and whether military allows democracy, economic crisis and IMF compliance, terrorism, India tensions, and climate vulnerability.`,
    issues: [
      'Military interference with Imran Khan imprisoned on political charges',
      'Economic crisis with near-default and IMF bailout requiring austerity',
      'Terrorism from Pakistani Taliban increasing',
      'India tensions over Kashmir with nuclear risks',
      'Climate disasters with 2022 floods submerging one-third of country'
    ]
  },
  {
    country: 'Bangladesh',
    summary: `Bangladesh faces political crisis after controversial January 2024 election boycotted by opposition, giving PM Sheikh Hasina (Awami League) another term amid authoritarianism accusations. Hasina has governed since 2009, increasingly concentrating power, suppressing opposition, and controlling media. The 2024 election saw BNP opposition boycott, claiming rigged process. Turnout was low, and credibility questioned. Democratic space has shrunk—opposition leaders face arrest, media is censored, extrajudicial killings occur, and judiciary is politicized. Economic growth has been strong (6-7% annually), lifting millions from poverty. Garment exports drive economy, but labor conditions and building safety remain concerns after Rana Plaza collapse killed over 1,000. Climate vulnerability is extreme—low-lying delta faces floods, cyclones, and sea level rise threatening millions. Bangladesh contributes little to emissions but suffers greatly. Rohingya refugee crisis persists—nearly 1 million refugees from Myanmar genocide strain resources. Bangladesh seeks repatriation but Myanmar refuses. Relations with India are close given Awami League ties and shared security concerns. China provides infrastructure through Belt and Road, creating debt. Watch for authoritarianism, economic sustainability, climate disasters, Rohingya crisis, and political violence.`,
    issues: [
      'Authoritarian drift with opposition suppressed and elections boycotted',
      'Extrajudicial killings and media censorship',
      'Climate vulnerability with delta facing floods and sea level rise',
      'Rohingya crisis with nearly 1 million refugees',
      'Garment industry safety concerns after Rana Plaza'
    ]
  },
  {
    country: 'Afghanistan',
    summary: `Afghanistan under Taliban rule since August 2021 U.S. withdrawal faces humanitarian catastrophe, economic collapse, and international isolation. The Taliban return ended two decades of U.S.-backed government but restored harsh Islamist rule. Women and girls face severe oppression—banned from secondary education, most employment, and public life. This gender apartheid is unprecedented globally. The economy has collapsed—international aid stopped, assets frozen, and sanctions imposed. Poverty is universal, and starvation widespread. Humanitarian crisis affects millions. The Taliban govern through religious edicts enforced by morality police. Dissent is crushed, media controlled, and former government officials targeted. Ethnic minorities, particularly Hazaras, face persecution. Terrorism threat persists—ISIS-K (Islamic State affiliate) conducts attacks, and Al-Qaeda maintains presence despite Taliban promises to prevent terrorism. Drug production (opium) initially decreased under Taliban ban but is reportedly resuming. Relations with neighbors Pakistan, Iran, and Central Asian states are tense. No country officially recognizes Taliban government. The U.S. and international community face dilemma: engagement could help humanitarian situation but legitimizes brutal regime. Watch for women rights deterioration, humanitarian catastrophe, terrorism threats, and international isolation impacts.`,
    issues: [
      'Gender apartheid with women banned from education and employment',
      'Economic collapse with universal poverty and starvation',
      'Humanitarian catastrophe affecting millions',
      'ISIS-K terrorism and Al-Qaeda presence',
      'International isolation with no recognition'
    ]
  },
  {
    country: 'Iran',
    summary: `Iran under Supreme Leader Ayatollah Ali Khamenei and President Ebrahim Raisi operates as theocratic authoritarian regime facing economic crisis, protests, and regional proxy conflicts. The 2022-2023 "Woman, Life, Freedom" protests, triggered by Mahsa Amini death in morality police custody, challenged the regime. Security forces killed hundreds and imprisoned thousands, but protests revealed deep discontent particularly among youth and women. The nuclear program remains contentious. The 2015 JCPOA deal collapsed after Trump withdrawal and Iran escalation. Iran has enriched uranium close to weapons-grade. Negotiations have stalled. Israel and U.S. threaten military action. Sanctions have devastated the economy—inflation exceeds 40%, currency has collapsed, and unemployment is high. Corruption and mismanagement compound problems. The regime prioritizes military and proxies over citizens. Regional proxy strategy involves support for Hezbollah (Lebanon), Hamas (Palestine), Houthis (Yemen), and militias in Iraq and Syria. This extends Iranian influence but creates tensions with Israel, Saudi Arabia, and the West. Israel conducts covert attacks on nuclear facilities and assassinates scientists. Relations with Saudi Arabia, historically hostile, have improved through China-mediated normalization, though fundamental differences remain. Succession looms—Khamenei is in his 80s, and transition could be turbulent. Watch for protests and repression, nuclear program developments, economic crisis, proxy conflicts particularly Israel tensions, and succession dynamics.`,
    issues: [
      'Woman Life Freedom protests revealing deep discontent with hundreds killed',
      'Nuclear program near weapons-grade enriching uranium',
      'Economic collapse with 40%+ inflation from sanctions',
      'Regional proxy conflicts with Israel, Saudi Arabia tensions',
      'Succession uncertainty as Khamenei ages'
    ]
  },
  {
    country: 'Israel',
    summary: `Israel under PM Benjamin Netanyahu faces unprecedented internal crisis from judicial overhaul protests, Gaza war aftermath, and political polarization. Netanyahu, Israel longest-serving PM, returned to power in late 2022 leading most right-wing government in history, including ultra-nationalist and ultra-Orthodox parties. Judicial overhaul proposals triggered mass protests in 2023—hundreds of thousands demonstrated weekly against plans to weaken Supreme Court and increase political control over judiciary. Critics warned of democratic backsliding; supporters argued for elected government sovereignty over unelected judges. The divisions paralyzed Israel. October 2023 Hamas attack from Gaza killed over 1,200 Israelis, triggering war. Netanyahu government launched massive military response, devastating Gaza and killing tens of thousands of Palestinians. The war created humanitarian catastrophe and international condemnation. Netanyahu faces political survival threats—corruption trials continue, October 7 intelligence failures generated blame, and war management is questioned. The Palestinian conflict remains unresolved. Two-state solution is effectively dead—settlements have expanded, and right-wing government opposes Palestinian state. One-state reality of Israeli control over millions of stateless Palestinians raises apartheid accusations. Relations with U.S. are strained under Biden, who criticizes settlement expansion and Gaza war conduct. Relations with Arab states improved through Abraham Accords normalizing ties with UAE, Bahrain, and Morocco, though Gaza war complicates this. Iran is existential threat—nuclear program, proxy forces, and explicit threats drive Israeli military preparedness and covert operations. Watch for judicial overhaul outcome, Netanyahu political survival, Gaza war consequences, Palestinian conflict trajectory, and Iran nuclear program responses.`,
    issues: [
      'Judicial overhaul triggering massive protests and democratic backsliding fears',
      'October 7 Hamas attack and Gaza war killing tens of thousands',
      'Netanyahu corruption trials and political survival',
      'Two-state solution collapse with settlement expansion',
      'Iran nuclear threat and proxy conflicts'
    ]
  },
  {
    country: 'Palestine',
    summary: `Palestine is divided between Palestinian Authority governing parts of West Bank and Hamas controlling Gaza, both facing crises. The PA under President Mahmoud Abbas has lost legitimacy—no elections since 2006, widespread corruption, security cooperation with Israel that many Palestinians see as collaboration, and inability to resist Israeli settlement expansion. Abbas is in his late 80s, and succession could be chaotic. Hamas, designated terrorist organization by U.S. and Israel, controls Gaza through authoritarian rule. The October 2023 attack on Israel killing over 1,200 triggered devastating Israeli response, killing tens of thousands of Gazans and destroying infrastructure. Gaza faces humanitarian catastrophe. The two-state solution is effectively dead. Israeli settlements have fragmented West Bank, making contiguous Palestinian state impossible. Right-wing Israeli government opposes Palestinian statehood. One-state reality of Israeli control over millions of stateless Palestinians exists, but Palestinians lack rights, creating apartheid accusations. The economy is dependent on international aid and remittances. Israeli restrictions on movement, trade, and construction limit development. Unemployment is high, particularly in Gaza. Palestinian refugees from 1948 and 1967 wars number millions across Jordan, Lebanon, and Syria. Right of return is core Palestinian demand but Israeli red line. Watch for PA collapse and succession crisis, Gaza reconstruction or continued devastation, settlement expansion, international recognition efforts, and intifada possibilities.`,
    issues: [
      'PA legitimacy crisis with no elections since 2006 and Abbas aging',
      'Gaza humanitarian catastrophe after October 2023 war',
      'Two-state solution effectively dead with settlement expansion',
      'Stateless Palestinians under Israeli control raising apartheid accusations',
      'Hamas authoritarian rule and terrorism designation'
    ]
  },
  {
    country: 'Iraq',
    summary: `Iraq faces political dysfunction, Iranian influence, sectarian tensions, and economic challenges despite oil wealth. The country struggles to consolidate democracy after 2003 U.S. invasion ended Saddam Hussein dictatorship, ISIS occupation and defeat, and ongoing instability. Political system is based on sectarian and ethnic quotas—Shia Arabs dominate government, Sunni Arabs are marginalized, and Kurds maintain semi-autonomous region. This creates paralysis and corruption. Government formation takes months of negotiations, and services fail despite oil revenues. Protests in 2019-2020 demanded end to corruption and sectarianism, with security forces killing hundreds. Iranian influence is pervasive. Shia militias tied to Iran operate outside government control, and Iran shapes Iraqi politics through proxies. U.S. maintains troop presence but influence has declined. Security remains fragile. ISIS is degraded but not eliminated, conducting attacks. Militias clash with government and each other. Assassinations and violence continue. The economy depends almost entirely on oil exports, creating vulnerability to price fluctuations. Unemployment is high, particularly youth. Corruption siphons billions. Infrastructure, electricity, and water systems fail. The Kurdistan region maintains autonomy with own government and military (Peshmerga). Tensions with Baghdad over oil revenues and disputed territories persist. Kirkuk and other areas are contested. Watch for Iran influence and U.S. withdrawal possibilities, sectarian tensions and protests, ISIS resurgence, corruption and economic management, and Kurdistan autonomy disputes.`,
    issues: [
      'Iranian influence through Shia militias operating outside government control',
      'Sectarian political system creating paralysis and corruption',
      'ISIS degraded but still conducting attacks',
      'Economic dependence on oil with massive corruption',
      'Kurdistan autonomy disputes over oil and territory'
    ]
  },
  {
    country: 'Jordan',
    summary: `Jordan under King Abdullah II faces economic pressures, refugee burden, and balancing regional relationships. The Hashemite Kingdom maintains stability in volatile region through careful diplomacy and security control, but underlying challenges mount. The economy struggles with high unemployment, particularly youth, limited natural resources, and dependence on foreign aid and remittances. Austerity measures required by IMF spark periodic protests. Water scarcity is severe—Jordan is among world most water-poor countries, and climate change worsens situation. Syrian refugee crisis has strained resources—Jordan hosts over 1 million registered refugees plus many unregistered, placing pressure on services, employment, and infrastructure. This generates social tensions. Political reform is limited. King Abdullah retains ultimate power, appointing governments and dissolving parliament. Elections occur but parliament is weak, and political parties underdeveloped. Tribal and family loyalties dominate. Islamist opposition, primarily Muslim Brotherhood, faces restrictions. Relations with Israel are complex—1994 peace treaty provides stability and water/energy cooperation, but is unpopular with many Jordanians. Palestinian majority population sympathizes with Palestinians, creating domestic pressure. Relations with Saudi Arabia and Gulf states are critical for aid and investment. Relations with U.S. provide military aid and support. Watch for economic crisis and IMF compliance, refugee pressures, water scarcity, political reform demands, and regional conflicts impacts particularly Palestinian issue.`,
    issues: [
      'Economic crisis with high unemployment and IMF austerity',
      'Syrian refugee burden with over 1 million straining resources',
      'Water scarcity among world worst',
      'Limited political reform with king retaining power',
      'Palestinian majority creating pressure over Israel peace treaty'
    ]
  },
  {
    country: 'Cambodia',
    summary: `Cambodia under PM Hun Manet, son of longtime ruler Hun Sen, represents dynastic transition consolidating authoritarian control. Hun Sen governed for 38 years (1985-2023) before transferring power to his son in carefully orchestrated succession. The Cambodian People Party (CPP) dominates through systematic suppression of opposition. In 2023, only credible opposition party was dissolved before elections, and CPP won all seats in sham contest. Democracy is dead. Independent media is crushed, civil society restricted, and dissent criminalized. The judiciary is politicized, serving regime interests. Economic growth has been strong, driven by garment exports and tourism, particularly Angkor Wat. But development is uneven, corruption is massive, and land grabbing displaces rural poor. Chinese investment and loans have made Cambodia economically dependent on Beijing, and Hun Sen aligned Cambodia firmly with China over U.S. and regional partners. Relations with Vietnam are close but complicated by historical resentment. Relations with Thailand involve border disputes and economic competition. Human rights abuses are systematic—forced evictions, labor rights violations, and environmental destruction from illegal logging and development. Watch for Hun Manet consolidating power versus potential instability, Chinese influence, economic sustainability, human rights deterioration, and regional isolation.`,
    issues: [
      'Dynastic succession with Hun Sen transferring power to son',
      'Opposition dissolved with CPP winning all seats in sham election',
      'Media crushed and dissent criminalized',
      'Economic dependence on China through massive loans',
      'Land grabbing and forced evictions displacing rural poor'
    ]
  },
  {
    country: 'Laos',
    summary: `Laos under one-party communist rule faces economic crisis from Chinese debt, regional development pressures, and authoritarian control. The Lao People Revolutionary Party has ruled since 1975, tolerating no opposition and maintaining tight control over society. Economic crisis emerged from massive Chinese debt through Belt and Road infrastructure projects. Laos borrowed billions for dams, railways, and roads but cannot repay. Currency collapsed, inflation soared, and debt restructuring negotiations with China give Beijing enormous leverage. The economy depends on hydropower exports to Thailand and mining. Dams flood agricultural land and displace communities. Environmental destruction is severe. Mekong River dams (by Laos and upstream China) devastate downstream ecosystems and fisheries. Opium production persists in remote areas despite eradication efforts. Human rights abuses include disappearances of critics, restrictions on speech and assembly, and ethnic minority marginalization. Hmong and other minorities face discrimination. Land grabbing for development displaces rural communities without compensation. Relations with Vietnam are close, reflecting shared communist ideology and Vietnamese influence. Relations with Thailand involve trade and hydropower. Relations with China dominate—economic dependence gives Beijing political control. Watch for debt crisis and potential Chinese takeover of assets, economic collapse risks, Mekong water conflicts, human rights abuses, and Chinese influence consolidation.`,
    issues: [
      'Economic crisis from massive Chinese debt unable to repay',
      'Currency collapse and inflation from over-borrowing',
      'Mekong dams devastating ecosystems and downstream fisheries',
      'One-party communist rule with no opposition tolerated',
      'Land grabbing displacing rural communities for development'
    ]
  },
  {
    country: 'Myanmar',
    summary: `Myanmar descends into civil war after February 2021 military coup overthrew elected government and detained Aung San Suu Kyi. The military junta faces armed resistance from ethnic groups and pro-democracy forces, creating humanitarian catastrophe. The coup ended decade of limited democratic opening. The military (Tatmadaw) never relinquished ultimate power but allowed elections and civilian government. When Suu Kyi NLD party won landslide 2020 victory, military staged coup claiming fraud. Protests were met with massacres—security forces killed over 1,000 civilians. Armed resistance formed. Ethnic armed organizations (Karen, Kachin, Shan, others) fighting military for decades were joined by new People Defense Forces. Large areas are controlled by resistance, and military has lost control of border regions. Fighting is brutal with airstrikes on civilians, village burnings, and atrocities. Humanitarian crisis affects millions—displacement, food insecurity, and destroyed healthcare and education. Rohingya genocide continues. Over 700,000 Rohingya fled to Bangladesh after 2017 military campaign. Those remaining in Rakhine state face apartheid conditions. The economy has collapsed—sanctions, business exodus, and conflict destroyed growth. Currency collapsed, and poverty surged. Neighboring countries struggle with response. ASEAN calls for dialogue but has no leverage. China and Russia support military while Western countries sanction it. Watch for resistance progress and potential military defeat, humanitarian catastrophe, Rohingya crisis, regional spillover, and international intervention possibilities.`,
    issues: [
      'Civil war after 2021 coup with military fighting ethnic groups and resistance',
      'Humanitarian catastrophe with massacres and displacement',
      'Rohingya genocide with 700,000+ fled to Bangladesh',
      'Economic collapse from sanctions and conflict',
      'Military losing control of border regions to resistance'
    ]
  },
  {
    country: 'Nepal',
    summary: `Nepal operates as federal republic after 2008 end of monarchy, but faces political instability, economic challenges, and geopolitical pressures between India and China. Coalition governments form and collapse frequently, creating policy paralysis. The 2015 constitution established federalism with provinces and local governments, but implementation is incomplete and contested. Communist parties (Nepal Communist Party factions) and Nepali Congress alternate power through shifting coalitions. The economy depends on remittances—nearly one-third of GDP comes from Nepalis working abroad, particularly in Gulf states and Malaysia. Agriculture employs majority of population but productivity is low. Tourism, particularly mountaineering, is significant but seasonal. Earthquake vulnerability is severe—2015 earthquake killed 9,000 and devastated infrastructure. Reconstruction was slow and plagued by corruption. Climate change threatens Himalayan glaciers, affecting water supply for Nepal and downstream countries. Geopolitical balancing between India and China is delicate. India has historically dominant influence through trade, open border, and cultural ties. But China has increased investment and influence through Belt and Road. Nepal seeks benefits from both while maintaining sovereignty, but this creates tensions. Watch for political stability and corruption, remittance dependence vulnerability, earthquake and climate risks, India-China balancing, and federalism implementation.`,
    issues: [
      'Political instability with coalition governments frequently collapsing',
      'Economic dependence on remittances nearly one-third of GDP',
      'Earthquake vulnerability with 2015 disaster killing 9,000',
      'Climate change threatening Himalayan glaciers and water supply',
      'Geopolitical balancing between India and China creating tensions'
    ]
  }
]

// Will add remaining countries in next batches...

console.log(`\n🌍 POLITICS GENERATION - Countries 59-128`)
console.log(`=`.repeat(60))

if (politicsSummaries.length === 0) {
  console.log('⚠️  No summaries ready yet. Adding countries now in rapid succession...\n')
} else {
  console.log(`Processing ${politicsSummaries.length} countries\n`)
}

async function saveSummaries(summaries: PoliticsSummary[]) {
  let successCount = 0
  let errorCount = 0

  for (const item of summaries) {
    try {
      const coords = countryCoords[item.country]
      if (!coords) {
        console.log(`❌ ${item.country}: No coordinates found, skipping`)
        errorCount++
        continue
      }

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: item.country,
            type: 'country',
            category: 'politics'
          }
        },
        update: {
          summary: item.summary,
          issues: JSON.stringify(item.issues),
          topStories: JSON.stringify([]),
          updatedAt: new Date(),
          storyCount: 0
        },
        create: {
          name: item.country,
          type: 'country',
          country: item.country,
          lat: coords.lat,
          lng: coords.lng,
          category: 'politics',
          summary: item.summary,
          issues: JSON.stringify(item.issues),
          topStories: JSON.stringify([]),
          storyCount: 0
        }
      })

      console.log(`✅ ${item.country}: Politics summary saved (${item.summary.length} chars)`)
      successCount++
    } catch (error) {
      console.error(`❌ ${item.country}: Error saving:`, error)
      errorCount++
    }
  }

  return { successCount, errorCount }
}

async function main() {
  if (politicsSummaries.length === 0) {
    console.log('No summaries to process. Add countries to politicsSummaries array.')
    return
  }

  console.log(`Starting database save for ${politicsSummaries.length} countries...\n`)

  const result = await saveSummaries(politicsSummaries)

  console.log(`\n${'='.repeat(60)}`)
  console.log(`✅ Successfully saved: ${result.successCount}`)
  console.log(`❌ Errors: ${result.errorCount}`)
  console.log(`📊 Total processed: ${politicsSummaries.length}`)
  console.log(`${'='.repeat(60)}\n`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
