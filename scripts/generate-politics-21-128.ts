import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// This script generates POLITICS writeups for countries 21-128
// Countries 1-20 are already completed in generate-politics-all-128.ts

const countryCoords: Record<string, { lat: number; lng: number }> = {
  'Costa Rica': { lat: 9.7489, lng: -83.7534 },
  'Panama': { lat: 8.7832, lng: -80.7744 },
  'Jamaica': { lat: 18.1096, lng: -77.2975 },
  'Trinidad and Tobago': { lat: 10.6918, lng: -61.2225 },
  'Guyana': { lat: 4.8604, lng: -58.9302 },
  'Suriname': { lat: 3.9193, lng: -56.0278 },
  'Belize': { lat: 17.1899, lng: -88.4976 },
  'United Kingdom': { lat: 55.3781, lng: -3.4360 },
  'France': { lat: 46.2276, lng: 2.2137 },
  'Germany': { lat: 51.1657, lng: 10.4515 },
  'Italy': { lat: 41.8719, lng: 12.5674 },
  'Spain': { lat: 40.4637, lng: -3.7492 },
  'Poland': { lat: 51.9194, lng: 19.1451 },
  'Ukraine': { lat: 48.3794, lng: 31.1656 },
  'Russia': { lat: 61.5240, lng: 105.3188 },
  'Turkey': { lat: 38.9637, lng: 35.2433 },
  'Greece': { lat: 39.0742, lng: 21.8243 },
  'Belgium': { lat: 50.5039, lng: 4.4699 },
  'Austria': { lat: 47.5162, lng: 14.5501 },
  'Finland': { lat: 61.9241, lng: 25.7482 },
  'Denmark': { lat: 56.2639, lng: 9.5018 },
  'Ireland': { lat: 53.4129, lng: -8.2439 },
  'Hungary': { lat: 47.1625, lng: 19.5033 },
  'Czech Republic': { lat: 49.8175, lng: 15.4730 },
  'Bulgaria': { lat: 42.7339, lng: 25.4858 },
  'Croatia': { lat: 45.1, lng: 15.2 },
  'Estonia': { lat: 58.5953, lng: 25.0136 },
  'Norway': { lat: 60.4720, lng: 8.4689 },
  'Sweden': { lat: 60.1282, lng: 18.6435 },
  'Portugal': { lat: 39.3999, lng: -8.2245 },
  'Netherlands': { lat: 52.1326, lng: 5.2913 },
  'Romania': { lat: 45.9432, lng: 24.9668 },
  'Serbia': { lat: 44.0165, lng: 21.0059 },
  'Switzerland': { lat: 46.8182, lng: 8.2275 },
  'Slovakia': { lat: 48.6690, lng: 19.6990 },
  'Lithuania': { lat: 55.1694, lng: 23.8813 },
  'Latvia': { lat: 56.8796, lng: 24.6032 },
  'China': { lat: 35.8617, lng: 104.1954 },
  'India': { lat: 20.5937, lng: 78.9629 },
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
  'Botswana': { lat: -22.3285, lng: 24.6849 },
}

interface PoliticsSummary {
  country: string
  summary: string
  issues: string[]
}

// I (Claude) am generating ALL POLITICS writeups directly in this session
// Following Rest is Politics style: informed, conversational, analytical
// Length: 2,500-3,500 characters per country

const politicsSummaries: PoliticsSummary[] = [
  // BATCH 3: Countries 21-30
  {
    country: 'Costa Rica',
    summary: `Costa Rica stands as Central America\\'s democratic success story, having abolished its military in 1949 and built a stable political system centered on competitive elections, peaceful power transfers, and relatively strong institutions. President Rodrigo Chaves, elected in 2022, represents a shift toward technocratic leadership after decades of traditional party dominance, but his confrontational style and institutional tensions raise questions about Costa Rica\\'s democratic maturity. The 2022 election marked the collapse of the traditional two-party system. The National Liberation Party (PLN) and Social Christian Unity Party (PUSC), which governed Costa Rica for decades, were rejected by voters frustrated with corruption and economic stagnation. Chaves, a former World Bank economist who served briefly as finance minister, ran as an outsider promising anti-corruption and economic reform. His Social Democratic Progress Party (PPSD), created only in 2018, won without traditional party machinery. Chaves\\' presidency has been marked by conflict with other institutions. He has clashed with the Legislative Assembly, where no party holds a majority and his PPSD has limited representation. Major reforms require legislative consensus that proves elusive. The Constitutional Court has ruled against several of Chaves\\' initiatives, and he has publicly criticized the court in language that concerns legal experts about respect for judicial independence. The media, traditionally robust in Costa Rica, has faced presidential attacks labeling critical coverage as biased. Economic challenges drive political tensions. Costa Rica faces high public debt (over 60% of GDP), fiscal deficits requiring IMF program conditionality, and a large informal economy. Inequality remains high despite relative prosperity. The pension system faces sustainability crisis as the population ages. Tourism, a major economic driver, recovered post-pandemic but faces climate vulnerability and over-tourism concerns in some regions. Foreign investment, particularly in tech and services, has diversified the economy beyond traditional agriculture (coffee, bananas, pineapples), but benefits are unevenly distributed. Social policy remains progressive: Costa Rica maintains universal healthcare, strong environmental protections (over 25% of territory in national parks and reserves), and commitment to renewable energy. But funding pressures and management challenges strain public services. Education quality has declined, and healthcare wait times have increased. Indigenous communities face marginalization despite constitutional protections. Corruption, while lower than regional averages, persists. High-level cases involving politicians and business figures generate public frustration. Judicial capacity to prosecute complex financial crimes is limited. Security is deteriorating relative to Costa Rica\\'s historically safe status. Drug trafficking organizations use Costa Rica as a transit point, generating violence particularly in Caribbean port areas. Organized crime has penetrated some communities, and homicide rates, while still far below regional levels, are rising. Geopolitically, Costa Rica maintains close U.S. relations while diversifying partnerships. China\\'s economic influence has grown, and Costa Rica was the first Central American country to recognize Beijing over Taiwan (2007). Relations with Nicaragua are tense—territorial disputes and Nicaraguan refugee flows create friction. The fundamental question is whether Costa Rica can maintain its democratic exceptionalism amid economic pressures and regional instability. Chaves\\' confrontational governance style risks eroding institutional norms that have protected Costa Rica\\'s democracy. Watch for fiscal reform implementation, institutional conflicts particularly with judiciary, security trends, 2026 election dynamics, and whether traditional party system continues collapsing or reconsolidates.`,
    issues: [
      'Presidential conflicts with legislature and judiciary threatening institutional balance',
      'High public debt over 60% GDP and IMF conditionality constraining policy options',
      'Rising crime and drug trafficking eroding traditional reputation for safety',
      'Traditional party system collapse creating volatile electoral landscape',
      'Pension system sustainability crisis with aging population'
    ]
  },
  {
    country: 'Panama',
    summary: `Panama under President José Raúl Mulino, elected in May 2024, faces the challenge of restoring public trust after years of corruption scandals and economic inequality despite the country\\'s status as a regional financial hub. Mulino, representing the interests of former President Ricardo Martinelli (convicted of money laundering but barred from running), inherited political divisions and institutional weaknesses that threaten Panama\\'s democratic stability. The 2024 election was turbulent. Martinelli, a popular former president (2009-2014) facing criminal convictions, was initially the candidate but was disqualified. Mulino stepped in as his replacement, campaigning essentially as Martinelli\\'s proxy. This raised constitutional questions and concerns about convicted politicians exercising power indirectly. The opposition, fragmented across multiple candidates, failed to consolidate, allowing Mulino\\'s victory with a plurality. Panama\\'s political system is dominated by personalist parties built around wealthy businessmen rather than ideological platforms. Corruption is endemic—multiple former presidents face criminal charges or convictions. The Panama Papers (2016) exposed Panama\\'s role in global money laundering and tax evasion, generating international pressure for reforms but minimal domestic accountability for elites. Economic inequality is stark. Panama has high GDP per capita driven by the Canal, banking sector, shipping registry, and services, but wealth concentration is extreme. Indigenous communities and rural populations face poverty and marginalization. The Canal, operated by the Panama Canal Authority since the 1999 handover from the U.S., generates substantial revenue but distribution of benefits remains politically contentious. Water scarcity threatens Canal operations—climate change and competing demands strain watersheds. Migration has become a defining challenge. The Darién Gap, the jungle border between Panama and Colombia, is the route for hundreds of thousands of migrants from South America (particularly Venezuela), the Caribbean, and even Asia and Africa seeking to reach the United States. Panama struggles to manage this flow—humanitarian concerns, security risks, and logistical challenges overwhelm capacity. The U.S. pressures Panama to stem migration, while Panama seeks international support to share the burden. Mining has generated massive social conflict. A controversial copper mine concession sparked nationwide protests in 2023, with Panamanians demanding environmental protection and objecting to the contract\\'s favorable terms for the foreign company. President Cortizo (Mulino\\'s predecessor) was forced to cancel the contract, but the dispute revealed deep mistrust between citizens and political elites willing to sacrifice environmental protection for revenue. Corruption prosecutions, when they occur, often target political opponents rather than represent genuine accountability. The judiciary faces political pressure and capacity limitations. The Attorney General\\'s office has pursued high-profile cases, but convictions of powerful figures are rare and appeals processes lengthy. Indigenous rights remain contested—constitutional recognition exists but implementation of autonomy and land rights is incomplete. The Guna, Ngäbe-Buglé, and other indigenous peoples face displacement by development projects, mining, and hydroelectric dams. Geopolitically, Panama maintains close U.S. relations rooted in Canal history and security cooperation, but China\\'s influence has grown dramatically through investment, infrastructure, and trade. Taiwan relations were severed in 2017 in favor of Beijing recognition. The Canal remains globally strategic—any disruption would have major economic consequences. Watch for Martinelli\\'s influence over Mulino\\'s government, corruption prosecutions, migration management, water sustainability for Canal operations, Chinese influence, and whether 2019-2023 protest movements can translate into political organization. Panama\\'s prosperity is real but fragile, built on geographic advantage and financial services while governance remains weak and inequality stark.`,
    issues: [
      'Convicted former president Martinelli governing indirectly through proxy raising rule of law concerns',
      'Endemic corruption with multiple former presidents facing charges but minimal elite accountability',
      'Darién Gap migration crisis with hundreds of thousands transiting Panama toward U.S.',
      'Mining conflicts revealing deep mistrust and willingness of elites to sacrifice environment for revenue',
      'Water scarcity threatening Panama Canal operations amid climate change'
    ]
  },
  {
    country: 'Jamaica',
    summary: `Jamaica\\'s democracy functions with competitive elections and peaceful power transfers, though the country grapples with violent crime, economic challenges, and political clientelism. Prime Minister Andrew Holness, leading the Jamaica Labour Party (JLP), won re-election in 2020 and governs with a parliamentary majority. The political system operates within Westminster traditions inherited from British colonial rule, with significant institutional strength but persistent challenges in governance and security. The two-party system dominates: the JLP and the People\\'s National Party (PNP) have alternated power since independence in 1962. Political competition is intense, and elections are generally free and fair, though campaigns can feature violence and intimidation in garrison communities—neighborhoods with deep partisan loyalties where party affiliations can determine access to resources and protection. These communities, often controlled by local strongmen with gang connections, represent the intersection of politics and organized crime. Crime is Jamaica\\'s defining challenge. The country has one of the world\\'s highest homicide rates, driven by gang warfare, lottery scams, extortion, and drug trafficking. Kingston and Spanish Town are particularly violent. Gangs operate with sophisticated weapons and territorial control. The security forces\\'   response has been criticized for extrajudicial killings and human rights abuses, particularly during states of emergency that grant expanded police powers. The Holness government has declared multiple states of emergency in high-crime areas, suspending certain constitutional rights to combat violence. These measures show temporary results but haven\\'t addressed root causes. Corruption persists across political and economic institutions. Major infrastructure projects and government contracts are often mired in allegations of political favoritism and financial irregularities. The judiciary is independent but faces massive case backlogs, and the justice system struggles with witness intimidation and slow prosecutions. Economic challenges compound governance problems. Jamaica has high public debt (though reduced from crisis levels), requiring fiscal discipline that limits social spending. Unemployment and underemployment affect large portions of the population, particularly youth. Remittances from the large Jamaican diaspora (especially in the U.S., UK, and Canada) constitute a significant portion of GDP. Tourism is the economic backbone, but benefits are unevenly distributed. Social inequality is stark—wealthy enclaves contrast sharply with impoverished inner-city communities. Education and healthcare face funding constraints. Brain drain is significant as professionals emigrate seeking better opportunities. The Holness government has pursued economic reforms and infrastructure investment, but poverty reduction remains slow. Jamaica maintains close relations with the United States while also engaging with China for infrastructure financing. The debate over removing the British monarch as head of state and becoming a republic continues, reflecting ongoing questions about post-colonial identity. Watch for crime statistics especially homicide rates, states of emergency implementation and human rights concerns, economic indicators particularly debt and unemployment, political violence in garrison communities, and republic transition debates. Jamaica\\'s democratic institutions are relatively strong, but the intertwining of politics with organized crime and persistent violence threaten social stability and economic development.`,
    issues: [
      'Highest homicide rates in world driven by gang warfare and organized crime',
      'Garrison communities where politics and crime intersect creating violence',
      'States of emergency suspending rights raising human rights concerns',
      'High public debt constraining social spending and development',
      'Brain drain with professionals emigrating for better opportunities'
    ]
  },
  {
    country: 'Trinidad and Tobago',
    summary: `Trinidad and Tobago operates as a stable parliamentary democracy with competitive elections and peaceful power transfers, but the twin-island nation faces rising crime, economic challenges from oil price volatility, and governance concerns. Prime Minister Keith Rowley, leading the People\\'s National Movement (PNM), governs amid economic pressures and security threats. The political system features two main parties: the PNM, traditionally supported by Afro-Trinidadians, and the United National Congress (UNC), with strong Indo-Trinidadian support. This ethnic dimension shapes politics, though not absolutely. Elections are generally free and fair, and institutions function within Westminster parliamentary traditions. The economy depends heavily on oil and natural gas, making Trinidad and Tobago vulnerable to commodity price fluctuations. The energy sector generates substantial revenue but employment is limited. Economic diversification efforts have had mixed results. When oil prices were high, the country enjoyed prosperity, but recent declines have strained public finances. Subsidies for fuel and food, politically popular but fiscally expensive, consume significant resources. Crime has escalated dramatically, particularly violent crime and homicides. Gang warfare, drug trafficking, and kidnapping for ransom have increased. Port of Spain and certain areas experience significant violence. The security response has been criticized as inadequate—police are under-resourced, and the justice system is slow. Corruption allegations affect both major parties. Major infrastructure projects and government contracts face scrutiny over procurement processes and cost overruns. The judiciary is independent but faces massive backlogs. Prosecutions of high-level corruption are rare. The country maintains good relations with the United States and participates in regional Caribbean organizations. Relations with Venezuela are complicated by maritime boundaries, refugee flows (tens of thousands of Venezuelans have fled to Trinidad), and energy sector competition. Watch for crime statistics, economic diversification efforts, oil price impacts on fiscal position, corruption prosecutions, and management of Venezuelan refugee flows. Trinidad and Tobago\\'s democratic institutions are solid, but economic and security challenges test governance capacity.`,
    issues: [
      'Rising violent crime and homicides driven by gangs and drug trafficking',
      'Economic dependence on oil and gas creating vulnerability to price fluctuations',
      'Venezuelan refugee crisis with tens of thousands straining resources',
      'Corruption in government contracts and infrastructure projects',
      'Slow justice system with massive court backlogs'
    ]
  },
  {
    country: 'Guyana',
    summary: `Guyana has experienced dramatic political and economic transformation following the 2020 discovery of massive offshore oil reserves, turning one of South America\\'s poorest countries into a potentially wealthy petro-state. President Irfaan Ali, leading the People\\'s Progressive Party/Civic (PPP/C), governs amid oil boom opportunities and the challenge of managing resource wealth without repeating the "resource curse" that has plagued other oil-rich developing nations. The 2020 election was highly contentious. The PPP/C defeated the incumbent APNU+AFC coalition, but the results were disputed for months with allegations of electoral fraud. International pressure, particularly from the U.S. and Caribbean Community (CARICOM), eventually forced acceptance of results showing PPP/C victory. The extended crisis revealed institutional weaknesses and deep political divisions. Guyanese politics is significantly shaped by ethnicity. The PPP/C draws support primarily from the Indo-Guyanese population (about 40%), while APNU+AFC is supported by Afro-Guyanese (about 30%). This ethnic polarization affects electoral competition and governance. The oil boom is transforming Guyana\\'s economy at breathtaking speed. ExxonMobil-led consortiums have discovered over 11 billion barrels of oil equivalent offshore. Production began in 2019 and is ramping up rapidly. Government oil revenues are projected to reach billions annually, dwarfing the country\\'s previous GDP. This creates enormous opportunities but also massive governance challenges. The key question is whether Guyana can manage oil wealth effectively. The government has established a sovereign wealth fund to save oil revenues, but transparency and accountability mechanisms face scrutiny. Corruption risks are enormous—oil contracts, licensing, and revenue management create opportunities for misappropriation. The opposition and civil society have raised concerns about contract terms with oil companies, particularly profit-sharing arrangements that critics argue favor companies over Guyana. Infrastructure is rapidly developing—new roads, bridges, hotels, and facilities are being built with oil revenues. But capacity constraints and governance weaknesses create risks of waste and corruption. The construction boom has attracted foreign workers and created labor market tensions. Environmental concerns are significant. Oil production carries spill risks in ecologically sensitive waters. The country also faces pressure from the international community regarding its vast rainforests—Guyana has maintained low deforestation rates and seeks compensation for forest preservation through carbon credit schemes. Relations with Venezuela are tense. Venezuela claims the Essequibo region, which constitutes about two-thirds of Guyana\\'s territory and includes the offshore oil fields. Venezuela held a referendum in 2023 asserting sovereignty over Essequibo and has increased military rhetoric. This territorial dispute, dormant for decades, has been revived by oil discoveries. International law and arbitration support Guyana\\'s claim, and the U.S., UK, and regional partners back Guyana, but Venezuela\\'s military is far larger. Watch for oil revenue management and transparency, corruption in contracts and infrastructure, electoral system reforms to reduce ethnic polarization, Venezuela territorial tensions, and environmental protection amid rapid development. Guyana\\'s trajectory over the next decade will determine whether it becomes a prosperous, well-governed petro-state or succumbs to corruption, inequality, and instability that oil wealth often brings to developing countries with weak institutions.`,
    issues: [
      'Managing massive oil wealth without corruption in country with weak institutions',
      'Ethnic polarization between Indo-Guyanese and Afro-Guyanese shaping politics',
      'Venezuela territorial claim over Essequibo region threatening sovereignty',
      '2020 election crisis revealing institutional weaknesses and political divisions',
      'Rapid development straining capacity and creating environmental risks'
    ]
  },
  {
    country: 'Suriname',
    summary: `Suriname is navigating political transition and economic challenges, with President Chan Santokhi\\'s administration attempting reforms after years of alleged corruption under former president Desi Bouterse. The country faces economic crisis, debt, and the challenge of developing newly discovered offshore oil while managing ethnic diversity and building institutional capacity. Santokhi, elected in 2020, leads a coalition that defeated Bouterse, who had dominated Surinamese politics for decades either directly as president or through proxies. Bouterse, a former military strongman who led a 1980 coup, was convicted in absentia by Dutch courts for drug trafficking and by Surinamese courts for the 1982 killings of political opponents. His conviction and political defeat represented a significant accountability moment, though his National Democratic Party retains political support. The political system features multiple parties representing Suriname\\'s ethnically diverse population: Creoles, Indo-Surinamese, Javanese, Maroons, Indigenous peoples, and others. Coalition governments are typical, and ethnic politics shapes party support and policy debates. The economy faces severe challenges. Suriname is heavily indebted, and Santokhi\\'s government negotiated an IMF bailout requiring fiscal reforms and austerity. Inflation has been high, and the Surinamese dollar has depreciated dramatically. The government removed fuel subsidies to meet IMF conditions, generating public protests. Gold mining, both legal and illegal, is economically significant but environmentally destructive. Illegal mining operations, often controlled by Brazilian garimpeiros, devastate rainforests and pollute rivers with mercury. The government lacks capacity to control remote mining areas. Offshore oil discoveries, similar to neighboring Guyana, offer hope for economic transformation. TotalEnergies and other companies are developing fields, with production expected to begin in the late 2020s. But questions about contract terms, revenue management, and governance capacity mirror concerns in Guyana. Suriname\\'s small population (about 600,000) and weak institutions create vulnerability to mismanagement. Corruption remains a concern across government. The judiciary is underfunded and faces capacity limitations. Civil society is relatively active but constrained by limited resources. Relations with the Netherlands, the former colonial power, are significant—many Surinamese have Dutch citizenship and move between countries. Dutch development aid and investment are important, though relations are complicated by colonial history and Bouterse\\'s drug conviction in Dutch courts. Relations with neighbors Brazil and Guyana involve border management, trade, and increasingly, coordination on oil sector development. Watch for oil sector development and revenue management, IMF program compliance and social impacts, illegal mining control, Bouterse\\'s political movement, and ethnic coalition stability. Suriname\\'s trajectory depends on whether weak institutions can be strengthened before oil wealth creates overwhelming governance challenges.`,
    issues: [
      'Severe economic crisis with high debt and inflation requiring IMF bailout',
      'Former president Bouterse convicted of killings and drug trafficking but retains political support',
      'Illegal gold mining devastating rainforests and polluting rivers with mercury',
      'Weak institutions facing challenge of managing coming oil wealth',
      'Ethnic diversity requiring coalition governments and careful political balance'
    ]
  },
  {
    country: 'Belize',
    summary: `Belize operates as a stable parliamentary democracy within the Commonwealth, with competitive elections and functioning institutions, though the small nation faces challenges of corruption, drug trafficking, and economic dependence on tourism. Prime Minister John Briceño, leading the People\\'s United Party (PUP), won decisive victory in 2020, defeating the United Democratic Party (UDP) after allegations of corruption scandals. The two-party system has dominated since independence in 1981, with power alternating through generally free and fair elections. Institutions function within Westminster traditions, and the judiciary is independent, though capacity limitations exist. Corruption has been a persistent issue. The previous UDP administration faced multiple scandals involving land deals, offshore transactions, and infrastructure contracts. The Briceño government has promised accountability and transparency, including establishing a commission of inquiry into alleged corruption. But prosecutions are slow, and political will to pursue powerful figures is questioned. The economy depends heavily on tourism, particularly cruise ships and coastal resorts, along with agriculture (sugar, citrus, bananas) and offshore financial services. The small economy (population around 400,000) is vulnerable to external shocks—COVID-19 devastated tourism revenues. Public debt is high, constraining spending on education, healthcare, and infrastructure. Crime, particularly in Belize City, is driven by gang violence and drug trafficking. Belize serves as a transit point for cocaine from South America to Mexico and the United States. Gang warfare generates violence, though rates are far lower than in neighboring Central American countries. Security forces have limited resources. Environmental protection is a significant issue. Belize has extensive marine reserves, including the Belize Barrier Reef, a UNESCO World Heritage site. Balancing tourism development, offshore oil exploration proposals, and environmental conservation creates policy tensions. The government has banned offshore oil drilling near the reef, prioritizing conservation and tourism over oil revenues. Relations with Guatemala are defined by territorial dispute. Guatemala claims roughly half of Belize\\'s territory and all its maritime space, based on colonial-era treaties. The dispute has been referred to the International Court of Justice, with proceedings ongoing. This creates ongoing security concerns and affects development in disputed areas. Belize maintains close ties with the United Kingdom and the United States. It\\'s a member of Caribbean Community (CARICOM) despite being on the Central American mainland. Relations with neighboring Central American countries are developing. Watch for corruption prosecutions from previous administration, economic recovery especially tourism, gang violence and drug trafficking management, Guatemala territorial dispute ICJ proceedings, and environmental protection versus development tensions. Belize\\'s small size allows for close-knit governance but also creates vulnerability to corruption, economic shocks, and external pressures.`,
    issues: [
      'Corruption scandals from previous administration requiring accountability',
      'Guatemala territorial claim threatening roughly half of Belize territory',
      'Economic dependence on tourism creating vulnerability to external shocks',
      'Gang violence and drug trafficking in Belize City',
      'High public debt constraining spending on services and infrastructure'
    ]
  }
]

// NOTE: Continuing to add remaining countries in batches...

console.log(`\n🌍 POLITICS GENERATION - Countries 21-128`)
console.log(`=`.repeat(60))
console.log(`Processing remaining ${politicsSummaries.length} countries\n`)

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
    console.log('⚠️  No summaries to process yet. Add countries to politicsSummaries array.')
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
