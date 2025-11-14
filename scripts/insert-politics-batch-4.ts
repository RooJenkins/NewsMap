import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Politics summaries for Hungary through Laos (Batch 4 of 6)
const politicsSummaries = [
  {
    name: 'Hungary',
    type: 'country',
    country: 'Hungary',
    lat: 47.086841,
    lng: 19.447867,
    category: 'politics',
    summary: `Hungarian politics under Prime Minister Viktor Orbán has become the EU's most consolidated authoritarian system. Orbán's Fidesz party has ruled since 2010, systematically dismantling democratic institutions through constitutional changes, electoral manipulation, media capture, and judicial control. What he calls "illiberal democracy" functions as competitive authoritarianism—elections occur but aren't fair, opposition exists but faces overwhelming disadvantages. Orbán has created a template copied by populist authoritarians globally, demonstrating how democracy can be hollowed out while maintaining formal structures.

The mechanics of Orbán's system are sophisticated. Constitutional changes entrench Fidesz power. Electoral laws gerrymander districts and provide disproportionate representation. Public media operates as propaganda. Independent outlets face tax investigations and advertising boycotts forcing closures or sales to Fidesz-friendly oligarchs. Regulatory agencies punish critics. Courts stack with loyalists. EU funds flow to connected businessmen, creating crony capitalism. Universities face political interference, with Central European University forced into exile. Civil society operates under restrictions.

Orbán's ideology combines nationalism, anti-immigration rhetoric, Christian identity politics, and anti-LGBT campaigns. He portrays Hungary as defending European civilization against Brussels bureaucrats, George Soros (a Hungarian-born Jewish financier Orbán demonizes), and "woke" liberalism. The 2015 refugee crisis elevated Orbán internationally as strongman willing to defy EU over migration. His fortress Europe rhetoric resonates with far-right across the continent. Recent anti-LGBT propaganda including "child protection" laws targeting LGBTQ people demonstrate cultural war politics.

Relations with the EU are constantly tense. Hungary blocks or delays decisions on Russia sanctions, Ukraine aid, and rule-of-law enforcement. Orbán maintains the closest EU relationship with Putin's Russia, including energy dependence and political sympathy. The EU has withheld billions in funds over rule-of-law violations, but Hungary exploits unanimity rules for leverage. Domestically, opposition finally united in 2022 elections but still lost, revealing Orbán's system resilience. For Hungarians, particularly young and educated, emigration offers the main outlet—hundreds of thousands have left. The question is whether Orbán's model is sustainable or whether economic pressures and generational change will eventually force opening.`,
    issues: JSON.stringify([
      'Consolidated authoritarian "illiberal democracy"',
      'Media capture and judicial control',
      'Anti-LGBT campaigns and child protection laws',
      'Russia relations and EU sanctions blocking',
      'EU funds withheld over rule-of-law violations'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'India',
    type: 'country',
    country: 'India',
    lat: 22.686852,
    lng: 79.358105,
    category: 'politics',
    summary: `Indian politics under Prime Minister Narendra Modi and the Bharatiya Janata Party (BJP) has been defined by Hindu nationalism, economic ambition, and democratic erosion. Modi won an unprecedented third term in 2024, though with reduced majority that forces coalition dependence. His tenure has witnessed economic growth alongside communal polarization, infrastructure mega-projects alongside media restrictions, and India's global rise alongside minorities' declining security. The BJP's Hindutva ideology—asserting India as fundamentally Hindu nation—increasingly shapes governance in ways that undermine India's constitutional secularism.

The transformation includes renaming cities, rewriting textbooks, building Ram temple at Ayodhya mosque site, and Modi's populist appeals to Hindu majority while marginalizing Muslims (14% of population). Kashmir's autonomous status was revoked, made direct union territory, and political leaders detained. Citizenship Amendment Act fast-tracks citizenship for non-Muslim refugees, combining with National Register of Citizens plans that critics call discriminatory. Cow protection laws enable vigilante violence against Muslims. The rise of majoritarian democracy where majority religious identity trumps pluralism and minority rights marks a profound shift.

Democratic institutions face systematic pressure. Media is largely captured through ownership concentration, advertising threats, and sedition charges against critical journalists. NGOs face foreign funding restrictions eliminating independent civil society. Universities experience political interference and nationalism enforcement. Opposition parties face income tax raids, investigation threats, and defections encouraged through pressure. The judiciary maintains some independence but faces executive pressure. India's democratic rating has declined in freedom indices, with analysts debating whether it remains a democracy or has become electoral autocracy.

Economically, India under Modi pursues development and infrastructure investment through schemes like "Make in India" and massive road/rail projects. However, growth hasn't translated to sufficient job creation for India's youth bulge, agrarian distress persists, and inequality has widened. The 2020 farmer protests revealed rural anger and Modi's political vulnerabilities. Internationally, India positions itself as leading power through G20 presidency, Quad participation, and balancing between U.S. partnership and Russia relations. For India's 1.4 billion people, politics determines whether the country achieves inclusive prosperity and pluralist democracy, or whether Hindu nationalism and authoritarian drift define the trajectory.`,
    issues: JSON.stringify([
      'Hindu nationalism and Muslim marginalization',
      'Kashmir autonomy revocation',
      'Democratic backsliding and media capture',
      'Citizenship Amendment Act discrimination',
      'Farmer protests and agrarian distress'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Indonesia',
    type: 'country',
    country: 'Indonesia',
    lat: -0.954404,
    lng: 101.892949,
    category: 'politics',
    summary: `Indonesian politics under incoming President Prabowo Subianto marks a concerning shift after a decade of Joko "Jokowi" Widodo's pragmatic governance. Prabowo, a former general with Suharto-era dictatorship ties and human rights abuse allegations, won the 2024 elections with Jokowi's son as running mate—raising nepotism and democratic backsliding concerns. Jokowi's legacy is mixed: infrastructure development and economic growth, but also weakened anti-corruption institutions, environmental destruction, and authoritarian tendencies. Indonesia's democracy, celebrated for its post-Suharto transformation, faces tests.

The 2024 elections exposed democratic vulnerabilities. Jokowi's interference on Prabowo's behalf, including Constitutional Court manipulation to allow his son's candidacy despite age requirements, revealed how power can corrupt. The Corruption Eradication Commission (KPK) has been systematically weakened through legal changes that made it more politically controllable. Press freedom has declined through defamation suits, intimidation, and online hate campaigns. The omnibus law on job creation, passed with limited parliamentary debate, reduced environmental and labor protections favoring business interests.

Indonesia's democracy combines Islamic identity with pluralism in the world's largest Muslim-majority nation. Moderate Islam has historically prevailed, but conservative Islamist movements gain influence through local Sharia law implementation, blasphemy prosecutions, and moral policing. Minority religious groups—Christians in Papua, Ahmadis, Shi'ites—face discrimination and sometimes violence. The "Indonesian" identity spans thousands of islands and hundreds of ethnic groups, requiring constant negotiation of diversity. Papua independence movement faces military crackdown with allegations of human rights abuses largely ignored.

Economically, Indonesia seeks to leverage its demographic dividend, natural resources, and strategic location. Jokowi built infrastructure connecting the archipelago. The new capital Nusantara represents his megalomaniac vision, though questions about cost and necessity persist. Palm oil, coal, and nickel drive exports but environmentally devastating. Deforestation, peat fires, and biodiversity loss create regional pollution and climate impacts. Relations with China involve economic engagement while balancing South China Sea territorial disputes. For Indonesia's 280 million people, politics determines whether democratic consolidation continues or whether authoritarianism returns under more sophisticated guise.`,
    issues: JSON.stringify([
      'Prabowo human rights record and authoritarian concerns',
      'Democratic backsliding and KPK weakening',
      'Jokowi nepotism and Constitutional Court manipulation',
      'Papua separatism and military abuses',
      'Environmental destruction from palm oil and mining'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Iran',
    type: 'country',
    country: 'Iran',
    lat: 32.166225,
    lng: 54.931495,
    category: 'politics',
    summary: `Iranian politics is controlled by an authoritarian theocracy where Supreme Leader Ayatollah Ali Khamenei exercises ultimate authority. President Masoud Pezeshkian, elected in 2024 as a "reformist," has extremely limited power within the system where unelected clerics and Revolutionary Guards dominate. The 2022 death of Mahsa Amini after morality police arrest for "improper hijab" sparked "Woman, Life, Freedom" protests—the greatest challenge to the Islamic Republic since the 1979 revolution. The regime's brutal crackdown killed hundreds, imprisoned thousands, and revealed the depth of popular opposition, particularly among women and youth.

The protests exposed fundamental legitimacy crisis. Iranians, especially younger generations, increasingly reject theocratic rule, mandatory hijab, gender apartheid, and the regime's revolutionary ideology. However, the security apparatus—Revolutionary Guards, Basij militia, intelligence services—maintains control through terror. Executions have surged, including protesters and political dissidents. The regime cannot reform—meaningful change threatens its existence—so it can only repress. Yet this creates escalating cycles where each crackdown deepens alienation.

Iran's nuclear program remains the central international issue. The 2015 JCPOA limiting enrichment collapsed after Trump withdrew and reimposed sanctions. Iran has responded by enriching to near-weapons grade, though insists program is peaceful. Israel and Iran engage in shadow war: Iranian proxies threaten Israel, Israel assassinates nuclear scientists and bombs Iranian facilities. The October 2023 Hamas attack and Israel-Gaza war intensified tensions. Iran supports "Axis of Resistance" including Hezbollah, Hamas, Houthis, and Iraqi militias, projecting power across region.

Economically, sanctions have devastated ordinary Iranians. Inflation, unemployment, currency collapse, and corruption create widespread hardship. Oil revenues still flow through sanctions evasion but benefit regime and elites. Brain drain continues as educated Iranians flee. Environmental crises—water scarcity, air pollution, Lake Urmia drying—worsen. Relations with Russia have deepened, providing drones for Ukraine war. China remains major trading partner. For Iranians, politics means living under theocratic dictatorship while economic desperation and social repression drive either submission or dangerous protest. The regime's long-term sustainability faces serious doubt, but its near-term resilience through repression remains strong.`,
    issues: JSON.stringify([
      'Mahsa Amini protests and brutal crackdown',
      'Nuclear program and JCPOA collapse',
      'Revolutionary Guards dominance and repression',
      'Economic sanctions and hardship',
      'Regional proxy conflicts and Israel shadow war'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Iraq',
    type: 'country',
    country: 'Iraq',
    lat: 33.09403,
    lng: 43.26181,
    category: 'politics',
    summary: `Iraqi politics remains paralyzed by sectarianism, corruption, and foreign interference two decades after the U.S. invasion. Prime Minister Mohammed Shia al-Sudani leads a weak government beholden to Iran-backed Shi'ite militias and political factions. The system created by the U.S. after 2003—ethno-sectarian power-sharing—has produced dysfunction, corruption, and state capture by parties representing communal interests rather than national ones. Periodic protest movements demanding services, jobs, and accountability are violently suppressed by militias and security forces.

The 2019-2020 Tishreen protests represented the largest uprising since 2003, with hundreds of thousands demanding system change rather than reform. Young Iraqis rejected the sectarian parties, corruption, and Iranian influence. The response was massacre—600+ killed by security forces and Iran-backed militias. The protests eventually subsided without achieving fundamental change, though they forced some elite reshuffling. The October 2021 elections saw record low turnout reflecting public disillusionment. The political system is irredeemable from within—reform threatens entrenched interests who will kill to maintain power.

Iran exercises overwhelming influence through proxies like Kataib Hezbollah, Asaib Ahl al-Haq, and the broader Popular Mobilization Forces (PMF/Hashd). These militias formed to fight ISIS but have become parallel power structure challenging state authority. They control borders, smuggling, and receive state salaries while answering to Tehran. Iraq has become an Iranian sphere of influence, though U.S. maintains some 2,500 troops and diplomatic presence. The Israel-Iran conflict has seen Iraq used as staging ground for attacks, with Israeli strikes hitting Iraqi territory.

The economy depends on oil—90% of budget revenues—making it vulnerable to price fluctuations. Corruption siphons billions through fake contracts, ghost employees, and elite theft. Electricity provision remains inadequate despite billions spent. Water scarcity worsens from climate change, Turkish and Iranian dams, and mismanagement. Kurdish Regional Government maintains autonomy with own politics, though disputes with Baghdad over oil revenues and territorial control persist. For Iraqis, politics means accepting a failed system delivering neither services nor security, where sovereignty is compromised and hope is emigration.`,
    issues: JSON.stringify([
      'Tishreen protest massacre and repression',
      'Iran-backed militia dominance and sovereignty erosion',
      'Sectarian power-sharing dysfunction',
      'Massive corruption and state capture',
      'Water crisis and climate change impacts'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Ireland',
    type: 'country',
    country: 'Ireland',
    lat: 53.078726,
    lng: -7.798588,
    category: 'politics',
    summary: `Irish politics has been dominated by coalition governments of the center-right Fine Gael and center-left Fianna Fáil—historic rivals who now govern together excluding Sinn Féin. The 2020 elections saw Sinn Féin win the popular vote on housing crisis and cost-of-living promises, shocking the establishment. However, the two traditional parties formed unprecedented coalition to keep Sinn Féin—associated with IRA violence despite decades of peace process involvement—from power. This "grand coalition" has governed through COVID-19, housing emergency, and inflation, but faces Sinn Féin challenge.

The housing crisis dominates Irish politics, particularly affecting young people priced out of Dublin and other cities. Decades of underbuilding, planning restrictions, and property investment have created catastrophic shortage. Rents and prices have skyrocketed while construction lags far behind need. Homelessness is visible scandal. Government responses—subsidies, tax breaks, planning reforms—haven't resolved the crisis despite economic boom. The combination of high rents, childcare costs, and living expenses drives emigration particularly among the young educated workers Ireland needs.

Ireland's economic model based on low corporate taxes attracting multinationals faces pressure. U.S. tech and pharma giants employ many but contribute disproportionately to GDP (creating distorted statistics), pay minimal tax, and could relocate. The EU and U.S. push for minimum corporate tax rates threatens Ireland's competitive advantage. However, the model has delivered prosperity, budget surpluses, and employment. The "leprechaun economics" of multinational accounting produces bizarre GDP figures bearing little relation to Irish reality.

Brexit has complicated relations with Britain while presenting opportunity. Northern Ireland protocol disputes create periodic tensions. However, Ireland's position as English-speaking EU member has attracted business and investment. Relations with the U.S. are close through diaspora and economic ties. The peace process in Northern Ireland remains incomplete, with Sinn Féin now in power there creating cross-border nationalist momentum. For Ireland, politics involves managing economic success while addressing housing, healthcare, and infrastructure deficits that threaten social cohesion and create Sinn Féin opportunity.`,
    issues: JSON.stringify([
      'Housing crisis pricing out young people',
      'Sinn Féin rise and coalition exclusion',
      'Corporate tax model under EU/U.S. pressure',
      'Brexit impacts and Northern Ireland protocol',
      'Healthcare crisis and public service deficits'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Israel',
    type: 'country',
    country: 'Israel',
    lat: 30.911148,
    lng: 34.847915,
    category: 'politics',
    summary: `Israeli politics has been convulsed by Prime Minister Benjamin Netanyahu's far-right coalition, judicial overhaul attempt, and October 7th Hamas attack aftermath. Netanyahu, governing with ultranationalist and ultra-Orthodox parties, pursued judicial reforms stripping Supreme Court powers in 2023—triggering massive protests that divided Israeli society. The judicial crisis was interrupted by the October 7th massacre when Hamas killed 1,200 Israelis and took 250 hostages. Netanyahu's political survival now depends on the Gaza war he prosecutes, creating perverse incentives to prolong conflict.

The judicial overhaul represented attempted constitutional revolution. Netanyahu and coalition partners sought to prevent courts from overturning legislation, control judicial appointments, and eliminate checks on Knesset power. Proponents called it democracy restoration; opponents saw democratic coup enabling corruption and authoritarianism. Hundreds of thousands protested weekly. Military reservists threatened refusal to serve. The U.S. expressed concerns. Israeli society polarized between secular Tel Aviv liberals and religious-nationalist supporters. The October 7th attack temporarily paused the crisis but didn't resolve underlying conflict over Israel's democratic character.

The Gaza war has killed tens of thousands of Palestinians and created humanitarian catastrophe. Netanyahu's stated goals—destroying Hamas and freeing hostages—appear incompatible. The war has united Israelis temporarily but will eventually raise questions about October 7th intelligence failures, military unpreparedness, and Netanyahu's leadership. His coalition includes ministers advocating permanent Gaza occupation and West Bank annexation. Israeli society has shifted rightward after decades of terror and war, with two-state solution support declining. Palestinian citizens of Israel face discrimination and rightward shift marginalizes them further.

The occupation of the West Bank has produced settler movement with over 700,000 Israelis living beyond 1967 lines. Settlers wield enormous political power, particularly in Netanyahu's coalition. West Bank violence has surged with settler attacks on Palestinians and IDF operations killing militants and civilians. The occupation's sustainability is questionable but no political will exists to end it. Relations with Arab states through Abraham Accords created normalization with UAE, Bahrain, Morocco, but October 7th and Gaza war have frozen Saudi normalization. For Israelis, politics means navigating between security threats, democratic erosion, occupation's moral costs, and questions about what kind of state Israel will become.`,
    issues: JSON.stringify([
      'Netanyahu judicial overhaul and democratic crisis',
      'October 7th attack and Gaza war',
      'Far-right coalition with settler extremists',
      'West Bank occupation and settler violence',
      'Two-state solution collapse and annexation pressures'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Italy',
    type: 'country',
    country: 'Italy',
    lat: 44.732482,
    lng: 11.076907,
    category: 'politics',
    summary: `Italian politics under Prime Minister Giorgia Meloni represents the return of post-fascist right to power—the first since Mussolini. Meloni's Brothers of Italy party, with roots in neo-fascist Italian Social Movement, won 2022 elections and formed coalition with Lega and Forza Italia. Meloni has governed more pragmatically than campaign rhetoric suggested—supporting Ukraine, maintaining EU membership, avoiding radical economic policies. However, her cultural agenda targets LGBTQ rights, migration, and promotes traditional family values reflecting her party's roots.

Italy's political instability remains legendary—over 70 governments since World War II. Yet the system muddles through, with bureaucracy and EU constraints limiting dramatic changes. Meloni is Italy's first female prime minister but also someone who praised Mussolini in youth. Her ideological formation in post-fascist tradition shapes worldview even as pragmatism moderates governance. The coalition includes Lega's Matteo Salvini (far-right populist) and late Silvio Berlusconi's Forza Italia (center-right), creating internal tensions.

Migration dominates political discourse. Italy is the Mediterranean's main arrival point for African and Middle Eastern migrants crossing from Libya and Tunisia. Meloni has pursued hardline policies: deals with Tunisia and Libya to stop departures, crackdowns on NGO rescue ships, and plans for offshore processing centers. The policies are controversial but politically popular, marginalizing the left. The Catholic Church's humanitarian concerns create some constraints. Italy's aging population requires immigration economically, but political consensus rejects it culturally.

Economically, Italy struggles with stagnation, debt, and north-south divide. GDP hasn't grown meaningfully in two decades. Public debt exceeds 140% of GDP—third highest globally. Youth unemployment drives emigration of educated young Italians. The north has competitive manufacturing (automotive, fashion, machinery) while the south remains underdeveloped. Organized crime—Mafia, 'Ndrangheta, Camorra—corrupts governance and economy. EU recovery funds provide resources but require reforms Italy historically struggles to implement. For Italians, politics combines European integration with nationalist reaction, economic stagnation with cultural anxieties, creating perfect storm for right-wing populism Meloni represents.`,
    issues: JSON.stringify([
      'Post-fascist government and Meloni Brothers of Italy roots',
      'Migration crackdown and Mediterranean arrivals',
      'Economic stagnation and 140% debt-to-GDP',
      'North-south divide and youth emigration',
      'LGBTQ rights rollback and traditional family agenda'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Ivory Coast',
    type: 'country',
    country: 'Ivory Coast',
    lat: 7.49139,
    lng: -5.568618,
    category: 'politics',
    summary: `Ivorian politics under President Alassane Ouattara has stabilized after the 2010-2011 civil war but remains marred by authoritarian tendencies and unresolved grievances. Ouattara, first elected in 2010 in a vote his predecessor Laurent Gbagbo refused to recognize—triggering war that killed 3,000—secured a controversial third term in 2020. The constitution limits presidents to two terms, but Ouattara argued a new constitution reset the count. Opposition boycotted the election and violent protests erupted, raising fears of renewed conflict. The political settlement remains fragile.

The country's politics reflects north-south, Muslim-Christian, and ethnic divisions exacerbated by decades of competitive patronage. Former president Henri Konan Bédié's PDCI represents old southern establishment, while Ouattara's RDR has northern base. Gbagbo's FPI appeals to southern populism. The 2020 tensions revealed how quickly violence can reignite when politicians manipulate identity. The reconciliation process after 2011 war has been incomplete—Gbagbo was tried at International Criminal Court (eventually acquitted) while Ouattara's side faced limited accountability for war crimes.

Economically, Ivory Coast is West Africa's largest economy and world's top cocoa producer (40% of global supply). Economic growth has been strong under Ouattara, with infrastructure investment, port modernization, and business-friendly policies. However, benefits haven't reached all citizens. Rural cocoa farmers remain poor despite global chocolate industry's billions. Urban youth unemployment creates frustration. Corruption persists despite reform rhetoric. The CFA franc's tie to France creates monetary stability but also resentment over post-colonial dependency.

Security challenges include Sahel jihadist spillover at northern borders and domestic extremism emergence. The 2016 Grand-Bassam resort attack by Al-Qaeda affiliates and 2020 military mutinies revealed vulnerabilities. French military presence and cooperation continue despite anti-French sentiment. Relations with Burkina Faso and Mali have grown tense as those countries' military juntas expelled French forces and turned toward Russia. For Ivorians, politics means accepting stability under Ouattara while questioning whether it rests on genuine reconciliation or imposed peace that could unravel. The succession question looms as Ouattara ages without clear transition plan.`,
    issues: JSON.stringify([
      'Ouattara controversial third term and opposition boycott',
      'Incomplete reconciliation from 2010-2011 civil war',
      'Cocoa farmer poverty versus industry profits',
      'Sahel jihadist spillover and terrorism threats',
      'Succession planning and political transition uncertainty'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Jamaica',
    type: 'country',
    country: 'Jamaica',
    lat: 18.137124,
    lng: -77.318767,
    category: 'politics',
    summary: `Jamaican politics features stable two-party democracy alternating between the Jamaica Labour Party (JLP) and People's National Party (PNP). Prime Minister Andrew Holness's JLP won re-election in 2020, focusing on economic development, infrastructure, and crime reduction. Jamaica maintains Westminster parliamentary system and strong democratic institutions. However, the country struggles with endemic crime, corruption, and economic challenges that successive governments have failed to resolve despite different ideological approaches.

Crime, particularly gang violence and murder rates, dominates political discourse and daily life. Jamaica has one of the world's highest per capita murder rates, concentrated in "garrison communities"—politically controlled neighborhoods where gangs and parties have historically traded votes for protection. States of emergency and military deployments occur regularly but produce temporary effects. The root causes—inequality, unemployment, drug trafficking, deportee gang members from the U.S.—persist. Gun violence devastates communities while creating tourism concerns.

The debate over becoming a republic and removing the British monarch as head of state has gained momentum. Both parties support the transition in principle, though implementation remains elusive. The monarchy represents colonial legacy that many Jamaicans reject, though practical governance changes would be minimal. Reparations for slavery have become political issue, with Jamaica joining Caribbean demands for British acknowledgment and compensation. These post-colonial identity questions shape political discourse.

Economically, Jamaica depends on tourism, bauxite/aluminum, and remittances from diaspora. IMF structural adjustment programs have imposed painful austerity in exchange for debt relief. Public sector wage cuts, tax increases, and spending constraints have improved fiscal indicators but created social hardship. Economic growth remains modest, unemployment (particularly youth) is high, and poverty persists. Brain drain continues as educated Jamaicans emigrate. Relations with the U.S. are close through trade, security cooperation, and massive diaspora. China has become major investor and creditor, creating infrastructure but also debt concerns. For Jamaicans, politics involves addressing crime and poverty within fiscal constraints, while navigating between American sphere and Chinese alternative.`,
    issues: JSON.stringify([
      'Extreme murder rates and gang violence',
      'Garrison politics and crime-politics nexus',
      'Republic debate and removing British monarch',
      'IMF austerity and economic constraints',
      'Brain drain and youth emigration'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Japan',
    type: 'country',
    country: 'Japan',
    lat: 36.142538,
    lng: 138.44217,
    category: 'politics',
    summary: `Japanese politics under Prime Minister Shigeru Ishiba, who took office in 2024, continues the Liberal Democratic Party's (LDP) dominance that has governed Japan for all but four years since 1955. Ishiba, a relative outsider within the LDP, won party leadership after former PM Fumio Kishida resigned amid corruption scandals. The LDP's near-monopoly on power has created de facto one-party democracy where real competition occurs within faction struggles rather than between parties. This system produces stability but also complacency, corruption, and resistance to needed reforms.

The Unification Church scandal, involving decades of LDP politicians' ties to the controversial religious organization (linked to South Korean founder), revealed the depth of corruption and money-politics in Japanese governance. Following Shinzo Abe's 2022 assassination by someone motivated by the church's exploitation of his family, investigations exposed how the organization provided volunteers and funding to LDP politicians in exchange for political influence. The scandal has damaged public trust and forced some accountability, though systemic change remains limited.

Demographically, Japan faces catastrophic challenges no government has solved. The population is shrinking and aging at unprecedented rates—over 30% are over 65, births have plummeted to record lows, and population will decline from 125 million to potentially under 90 million by 2060. This creates impossible fiscal arithmetic: fewer workers supporting more retirees, labor shortages crippling industries, and rural areas becoming ghost towns. The government has resisted large-scale immigration that could ease labor shortages, instead promoting limited "guest worker" programs that avoid permanent immigration.

Geopolitically, Japan faces China's assertive rise and North Korean threats requiring security posture shifts. Ishiba supports stronger military capabilities, though within constitutional constraints and U.S. alliance framework. Japan has increased defense spending, reinterpreted pacifist constitution to allow limited collective self-defense, and strengthened ties with South Korea despite historical grievances. The Russia relationship, once pursued for territorial dispute resolution, has collapsed over Ukraine. Economic challenges include decades of deflation, massive public debt (260% of GDP—highest in developed world), and competitiveness concerns as China's tech and manufacturing advance. For Japanese, politics means coping with managed decline unless fundamental reforms occur.`,
    issues: JSON.stringify([
      'LDP one-party dominance and democratic deficit',
      'Unification Church scandal and money-politics',
      'Demographic catastrophe and aging crisis',
      'Immigration resistance versus labor shortages',
      '260% debt-to-GDP and deflation'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Jordan',
    type: 'country',
    country: 'Jordan',
    lat: 30.805025,
    lng: 36.375991,
    category: 'politics',
    summary: `Jordanian politics operates as a constitutional monarchy where King Abdullah II exercises ultimate authority while allowing limited political participation. The king appoints prime ministers, dissolves parliament, and controls security forces. Elections occur but within strict constraints—parties operate, but parliament has limited power, and reforms are carefully managed to prevent threat to monarchical control. This system has produced stability in a turbulent region, though it also generates frustration among citizens seeking greater voice and accountability.

Jordan's stability is a fragile achievement given its geopolitical position and internal pressures. The country hosts massive refugee populations—over 650,000 registered Syrian refugees plus Palestinians who comprise majority of population (though citizenship and identity politics are complex). Resource scarcity, particularly water, is severe. The economy depends heavily on foreign aid, particularly from the U.S. and Gulf states. Youth unemployment exceeds 40%, creating social tensions. Austerity measures required by IMF loans have sparked periodic protests over subsidies cuts and tax increases.

The Israeli-Palestinian conflict fundamentally shapes Jordanian politics. Jordan's 1994 peace treaty with Israel remains unpopular with many citizens, particularly those of Palestinian origin. The country has strategic role in Jerusalem holy sites administration. The Gaza war and West Bank violence create domestic pressures as Jordanians watch Palestinian suffering. King Abdullah has warned about regional conflagration risks while maintaining pragmatic Israeli relations. Jordan also served as key participant in U.S. coalition against ISIS, hosting bases and providing forces.

Politically, the Muslim Brotherhood's Islamic Action Front represents the main opposition, though it operates within red lines the regime enforces. Tribal East Bank Jordanians dominate military and security services, while Palestinian Jordanians are prominent in business and professional sectors—creating ethnic-economic divisions. Reforms have occurred incrementally—women's rights improvements, some political opening—but within limits ensuring monarchical stability. For Jordanians, politics means accepting limited freedoms in exchange for comparative stability and security in a region where both are scarce. Whether this bargain remains sustainable amid economic pressures and regional upheavals is the question.`,
    issues: JSON.stringify([
      'Constitutional monarchy with limited democracy',
      '650,000 Syrian refugees and resource strain',
      'Water scarcity and environmental stress',
      '40% youth unemployment and austerity protests',
      'Israeli-Palestinian conflict spillover pressures'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Kazakhstan',
    type: 'country',
    country: 'Kazakhstan',
    lat: 49.054149,
    lng: 68.685548,
    category: 'politics',
    summary: `Kazakh politics under President Kassym-Jomart Tokayev has featured surprising turbulence after decades of stability under founding leader Nursultan Nazarbayev. The January 2022 "Bloody January" protests, initially over fuel prices, escalated into the worst unrest since independence. Tokayev called in Russian-led CSTO troops to restore order after security forces killed over 200 protesters. He then used the crisis to sideline Nazarbayev, the "Leader of the Nation" who had ruled 1991-2019 and retained enormous influence. Tokayev has consolidated power while promising reforms, though Kazakhstan remains fundamentally authoritarian.

The political system allows no genuine opposition. Elections are neither free nor fair, media is controlled, and dissent faces repression. However, Tokayev has implemented limited reforms: reducing presidential term limits (which he exempted himself from), limiting relatives' business activities, and prosecuting some Nazarbayev-era officials for corruption. These changes represent elite reshuffling rather than democratization, but they've disrupted the old power structure. The Nazarbayev family's business empire has been partially dismantled, with some members fleeing abroad.

Kazakhstan's economy depends heavily on oil, gas, and minerals, making it vulnerable to commodity price swings. The country has pursued "multi-vector" foreign policy balancing Russia, China, and the West. However, the Ukraine war has complicated this neutrality. Kazakhstan has not recognized Russian-occupied territories and has seen Chinese and Turkish influence grow as Western sanctions limit Russian trade. The Baikonur Cosmodrome lease to Russia provides revenue and strategic importance. Relations with China involve massive investment through Belt and Road, though debt and influence concerns exist.

Ethnic Russians comprise about 18% of the population, concentrated in northern regions. Language policy favoring Kazakh has created some Russian resentment, though Kazakhstan has avoided ethnic conflict. Environmental problems include Aral Sea disaster, Semey nuclear test site legacy, and pollution from extractive industries. For Kazakhstan's diverse population, politics means accepting authoritarian governance while economic opportunities exist for the connected and regime stability prevents the chaos seen in neighbors. Tokayev's post-2022 consolidation suggests authoritarian continuity rather than transformation.`,
    issues: JSON.stringify([
      'Bloody January 2022 protests and Russian intervention',
      'Tokayev power consolidation and Nazarbayev sidelining',
      'Authoritarian system with cosmetic reforms',
      'Ukraine war neutrality and Russia-West balancing',
      'Ethnic Russian minority and language politics'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Kenya',
    type: 'country',
    country: 'Kenya',
    lat: 0.549043,
    lng: 37.907632,
    category: 'politics',
    summary: `Kenyan politics under President William Ruto has been defined by economic crisis, youth protests, and controversial governance decisions. Ruto narrowly won the 2022 elections against Raila Odinga in Kenya's most competitive race, though Odinga contested results claiming fraud. Ruto, a self-styled "hustler" representing the poor against "dynasty" politics of Kenyatta and Odinga families, has governed amid severe economic pressures—high inflation, currency depreciation, massive public debt, and unemployment. His government's attempted tax increases to address fiscal crisis sparked the June 2024 Gen Z protests.

The 2024 protests represented unprecedented youth mobilization organized through social media without traditional political leadership. When Ruto's government proposed finance bill with new taxes, young Kenyans took to streets in massive numbers. The protests turned violent when police fired on demonstrators, killing dozens. Ruto eventually withdrew the bill and dismissed most of his cabinet, but the movement revealed deep generational frustration with the entire political class. Gen Z activists rejected the ethnic politics that has defined Kenyan governance, demanding accountability and systemic change.

Ethnic politics remains central despite youth rejection. Ruto's coalition united his Kalenjin community with sections of Kikuyu, Luhya, and smaller groups against Odinga's Luo-led opposition. However, ethnic mobilization is becoming less reliable as economic hardship transcends tribal identities. Ruto's deputy president Rigathi Gachagua faces impeachment over divisive ethnic rhetoric and corruption allegations—internal power struggle that reveals coalition tensions. The system of ethnic coalition-building that has characterized Kenyan politics since multi-party democracy may be fragmenting.

Corruption remains endemic despite anti-graft rhetoric from all leaders. Grand corruption scandals periodically erupt, involving billions in theft from public coffers, but prosecutions rarely succeed against powerful figures. The judiciary maintains some independence, though it faces political pressure. Kenya's role in regional affairs includes military deployment in Somalia against Al-Shabaab and involvement in Haiti security mission. Relations with China involve massive infrastructure debt from projects like the Standard Gauge Railway, raising sovereignty concerns. For Kenyans, particularly youth, politics means demanding better governance, accountability, and economic opportunity from a system designed to benefit elite networks.`,
    issues: JSON.stringify([
      'Gen Z protests and tax revolt',
      'Economic crisis and IMF debt pressures',
      'Deputy president impeachment and coalition tensions',
      'Corruption impunity and grand theft',
      'Chinese debt and infrastructure projects'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Kuwait',
    type: 'country',
    country: 'Kuwait',
    lat: 29.413628,
    lng: 47.313999,
    category: 'politics',
    summary: `Kuwaiti politics features the Gulf's most democratic system—an elected parliament that actually exercises power and can question ministers. However, chronic conflict between the ruling Al-Sabah family and parliament has produced paralysis. Emir Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah, who took power in 2023, has dissolved parliament multiple times amid deadlock over reforms and investigations. The opposition, including Islamists and tribal representatives, uses parliamentary powers to block government initiatives and demand accountability. This creates governance dysfunction despite democratic forms.

The political system's fundamental tension is between Al-Sabah monopoly on executive power (Emir appoints government, controls military and oil) and parliament's legislative authority and oversight. Opposition MPs grill ministers, sometimes forcing resignations, and can block budgets. The government responds by dissolving parliament and calling new elections, creating cycles where the same issues recur. Electoral laws get manipulated to favor government supporters, though opposition usually wins anyway because of social media and grassroots organizing.

Economically, Kuwait's oil wealth provides generous welfare state—free healthcare, education, subsidies, public sector jobs for citizens. Kuwaitis (only 30% of population, with 70% expatriates) enjoy high living standards without taxation. However, this model faces sustainability questions as oil dependence persists despite diversification rhetoric. Youth unemployment among nationals reflects mismatch between education and private sector needs. The huge expatriate population faces discrimination—limited rights, vulnerability to deportation, and exclusion from benefits. Kuwaiti citizenship is nearly impossible to acquire.

Regional politics involve careful balancing between Saudi Arabia's dominance and Iran's proximity. Kuwait hosts major U.S. military bases providing security umbrella. Relations with Iraq have normalized after the 1990 invasion and liberation, though war's trauma remains in national memory. The GCC crisis (2017-2021) when Saudi-UAE bloc cut ties with Qatar saw Kuwait play mediation role. For Kuwaitis, politics means navigating between demands for democratic accountability and acceptance of monarchical privilege, while the rentier state model papers over contradictions through oil wealth distribution. Whether this system can adapt to post-oil future is Kuwait's existential question.`,
    issues: JSON.stringify([
      'Emir-parliament deadlock and chronic dissolutions',
      'Opposition parliamentary grilling of ministers',
      'Oil dependence and economic diversification failures',
      'Expatriate majority with limited rights',
      'Saudi-Iran balancing and regional diplomacy'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Laos',
    type: 'country',
    country: 'Laos',
    lat: 19.431821,
    lng: 102.533912,
    category: 'politics',
    summary: `Lao politics operates under one-party rule by the Lao People's Revolutionary Party (LPRP), which has governed since 1975 communist revolution. The party controls all state institutions, military, and media. No opposition is tolerated, and dissent faces imprisonment. President Thongloun Sisoulith and Prime Minister Sonexay Siphandone (appointed 2024) maintain this authoritarian system while pursuing economic development. The governance model combines communist political monopoly with market-oriented economic policies—similar to Vietnam and China but with less dynamism.

Chinese influence has grown to overwhelming levels, transforming Laos into what critics call a client state. China is the largest investor, creditor, and trader. The China-Laos Railway, completed in 2021, connects Kunming to Vientiane and represents China's Belt and Road vision. However, it also created massive debt that Laos struggles to service. Chinese investment in special economic zones, banana plantations, casinos, and hydropower projects has brought infrastructure but also debt dependency, environmental damage, and sovereignty concerns. Chinese nationals increasingly dominate businesses in Vientiane and other cities.

The hydropower sector exemplifies Laos's development model and its problems. The country aims to become the "battery of Southeast Asia," building dams on the Mekong and tributaries to export electricity to Thailand and Vietnam. These projects generate revenues but cause severe environmental damage: ecosystem disruption, displacement of communities, reduced fisheries downstream affecting millions, and dangerous safety standards (the 2018 Xe-Pian dam collapse killed dozens). Neighboring countries complain Lao dams worsen droughts and floods.

Laos faces debt crisis potentially requiring default or further Chinese concessions. Public debt exceeds 100% of GDP, foreign reserves are depleted, and currency has depreciated sharply. The government has few options—it can't raise sufficient domestic revenues, international lenders are reluctant given China dominance, and cutting spending amid poverty risks instability. Ethnic minorities (about 50% of population) face discrimination and land dispossession from development projects. For Laotians, politics means accepting one-party rule and Chinese economic colonization while hoping infrastructure development eventually improves living standards. The alternative—resistance—means prison or exile in this closed authoritarian system.`,
    issues: JSON.stringify([
      'One-party communist authoritarian rule',
      'Chinese debt trap and economic colonization',
      'Hydropower environmental devastation',
      'Debt crisis and currency depreciation',
      'Ethnic minority discrimination and displacement'
    ]),
    topStories: JSON.stringify([])
  }
]

async function insertPoliticsBatch4() {
  console.log('🚀 Starting Politics Batch 4 insertion (Hungary - Laos)')
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

  console.log(`\n✅ Batch 4 complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Errors: ${errorCount}`)
}

insertPoliticsBatch4()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
