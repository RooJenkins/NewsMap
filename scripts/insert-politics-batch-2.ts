import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Politics summaries for Bolivia through Cuba (Batch 2 of 8)
const politicsSummaries = [
  {
    name: 'Bolivia',
    type: 'country',
    country: 'Bolivia',
    lat: -16.666015,
    lng: -64.593433,
    category: 'politics',
    summary: `Bolivian politics remains deeply polarized between supporters and opponents of Evo Morales, who dominated the country's political landscape for over a decade. Morales's 2019 ouster amid election fraud allegations and military pressure sparked fierce controversy—supporters called it a coup, opponents deemed it constitutional succession. Current President Luis Arce, from Morales's Movement Toward Socialism (MAS), won convincingly in 2020, demonstrating the party's enduring working-class and indigenous base. However, Arce now faces an bitter split with his former ally Morales, who seeks to run again despite constitutional prohibitions.

The MAS internal war between Arce (arcistas) and Morales (evistas) factions has paralyzed governance and fractured Bolivia's dominant political movement. Morales supporters have blocked roads and organized protests demanding he be allowed to run in 2025 elections. Legal battles over candidacy eligibility, party control, and corruption investigations have turned Bolivian politics into a constant crisis. The opposition remains fragmented across regional and ideological lines, unable to capitalize on MAS divisions. This creates political gridlock where neither governing nor opposing effectively occurs.

Bolivia's politics reflects deep structural tensions: highlands versus lowlands, indigenous majority versus mixed-race and white minority, state-led economy versus market liberalization, coca growers' interests versus anti-drug cooperation with the U.S. The country has struggled with economic stagnation after commodity prices fell from the heights of Morales's boom years. Natural gas revenues that funded social programs have declined, requiring difficult fiscal adjustments. Regional autonomy movements, particularly in opposition stronghold Santa Cruz, periodically challenge central government authority. Relations with neighbors remain complicated—maritime access dispute with Chile persists, migration flows to Argentina and Brazil continue, and coca trafficking creates U.S. relations friction. For ordinary Bolivians, politics determines access to patronage, social programs, and economic opportunity in one of South America's poorest countries.`,
    issues: JSON.stringify([
      'MAS party split between Arce and Morales factions',
      'Constitutional crisis and 2025 election disputes',
      'Economic stagnation and declining gas revenues',
      'Regional autonomy tensions (Santa Cruz)',
      'Indigenous rights and political representation'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Bosnia and Herzegovina',
    type: 'country',
    country: 'Bosnia and Herzegovina',
    lat: 44.091051,
    lng: 18.06841,
    category: 'politics',
    summary: `Bosnia and Herzegovina remains trapped in the constitutional architecture created by the 1995 Dayton Peace Agreement, which ended the war but institutionalized ethnic division. The country operates through complex power-sharing among Bosniaks (Bosnian Muslims), Serbs, and Croats, with a rotating presidency and parallel government structures. This produces chronic dysfunction: vetoes paralyze decision-making, nationalism dominates discourse, and the international High Representative still wields ultimate authority. The system prevents majority ethnic domination but also prevents effective governance.

Serbian nationalist leader Milorad Dodik dominates Republika Srpska, one of Bosnia's two entities, through increasingly secessionist rhetoric and obstructionism. Dodik regularly threatens RS independence, celebrates war criminals, and blocks state-level reforms. His Alliance of Independent Social Democrats (SNSD) maintains power through patronage networks and media control. In the Federation entity, Bosniak and Croat nationalist parties similarly exploit ethnic fears while enriching themselves through corruption. Occasional reformist parties emerge but struggle against entrenched ethno-nationalist machines.

EU integration theoretically drives reform, but progress has stalled. Bosnia received candidate status in 2022, but actually implementing reforms proves nearly impossible given political gridlock. The country suffers from mass youth emigration—Bosnia's population has shrunk dramatically as educated young people flee dysfunction for opportunities abroad. Economic stagnation, corruption, and nepotism drive this brain drain. Periodic political crises erupt, often over symbolic issues like genocide denial laws or state symbols, revealing unhealed war wounds. The international community maintains presence through the Office of the High Representative and EU peacekeeping forces, preventing renewed conflict but unable to break political paralysis. Bosnia demonstrates how ending war doesn't necessarily produce functional peace if underlying divisions are merely frozen rather than resolved.`,
    issues: JSON.stringify([
      'Dayton constitutional dysfunction and ethnic gridlock',
      'Republika Srpska secessionism and Dodik\'s obstructionism',
      'EU integration stalled by reform paralysis',
      'Mass youth emigration and brain drain',
      'Corruption and nationalist party dominance'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Botswana',
    type: 'country',
    country: 'Botswana',
    lat: -22.102634,
    lng: 24.179216,
    category: 'politics',
    summary: `Botswana stands as Africa's most successful continuous democracy since independence in 1966, with regular free elections, peaceful power transfers, and respect for rule of law. The Botswana Democratic Party (BDP) has governed since independence—extraordinary longevity for a democratic system—though more through competent governance than authoritarian control. President Mokgweetsi Masisi leads the current government, focusing on economic diversification beyond diamonds and addressing youth unemployment. Botswana's political culture emphasizes consensus, traditional kgotla community meetings, and gradual reform rather than revolutionary change.

The BDP's dominance faces new challenges. Opposition parties, particularly the Umbrella for Democratic Change (UDC), have gained strength by mobilizing frustrated youth who see limited opportunities despite national diamond wealth. The 2019 elections saw the BDP's majority narrow significantly—still winning but with increased competition. Unemployment, particularly among educated youth, creates political vulnerability as Botswana's small population (2.4 million) struggles to diversify an economy built on diamonds, beef, and tourism. The diamond industry dominance makes Botswana vulnerable to market fluctuations and raises questions about sustainability.

Despite democratic success, challenges mount. Income inequality remains high—diamond revenues benefit the state but concentrated wealth persists. The San (Bushmen) minority faces marginalization and land disputes, exposing tensions between traditional rights and conservation policies. Botswana has clashed with international conservation groups over elephant management and hunting policies, asserting sovereignty over wildlife decisions. Relations with neighbors are generally stable, though Zimbabwean migration creates social pressures. Regional drought and climate change threaten water security and agriculture. Corruption remains relatively low but concerns grow about cronyism in government contracts. The political question is whether Botswana can maintain its democratic exceptionalism while addressing economic diversification, inequality, and generational renewal—whether the BDP's long tenure reflects genuine competence or incumbency advantage that eventually must yield to democratic alternation.`,
    issues: JSON.stringify([
      'BDP long dominance and democratic alternation debate',
      'Youth unemployment and economic diversification',
      'Diamond dependence and revenue sustainability',
      'San minority rights and land disputes',
      'Climate change and water security'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Brazil',
    type: 'country',
    country: 'Brazil',
    lat: -12.098687,
    lng: -49.55945,
    category: 'politics',
    summary: `Brazilian politics entered a new phase with Luiz Inácio Lula da Silva's narrow 2022 electoral victory over incumbent Jair Bolsonaro—the most consequential election in decades. Lula's return after imprisonment on corruption charges (later annulled) that many saw as politically motivated marked a dramatic comeback. His victory represented rejection of Bolsonaro's far-right populism, environmental destruction, and COVID-19 denialism. Yet with the narrowest margin since democratization (50.9%), Lula governs a deeply divided country where Bolsonaro's movement remains powerful and his supporters questioned the election's legitimacy.

The January 8, 2023 riots, when Bolsonaro supporters stormed government buildings in Brasília, revealed the depth of polarization and anti-democratic sentiment. Thousands were arrested, and Bolsonaro himself faces investigations for inciting insurrection and plotting a coup. Yet he retains massive support—70+ million voters—and Bolsonarismo as a political movement survives without its leader. The conservative congress and powerful agribusiness lobby constrain Lula's governing capacity, forcing compromises on environmental, social, and economic policy.

Lula's agenda emphasizes reversing Bolsonaro's Amazon destruction, restoring social programs, reducing inequality, and reasserting Brazil's international role on climate and democracy. However, economic constraints limit ambitions—inflation, fiscal pressures, and orthodox Central Bank policies create tensions between PT's progressive base and market realities. Corruption remains endemic despite anti-graft efforts. Violence, particularly in favelas and against indigenous peoples, persists. Evangelical Christian political power has grown dramatically, complicating progressive social policies. Brazil's racial reckoning over systematic inequality against Black and mixed-race majority proceeds slowly. Regionally, Brazil seeks to lead South American integration while balancing China and U.S. relationships. For the world's fourth-largest democracy, politics determines whether Bolsonaro's authoritarian moment was an aberration or whether Brazilian democracy has been fundamentally transformed by polarization.`,
    issues: JSON.stringify([
      'Political polarization and January 8 riot aftermath',
      'Bolsonaro investigations and movement persistence',
      'Amazon deforestation and environmental protection',
      'Economic pressures and fiscal sustainability',
      'Racial inequality and evangelical political power'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Brunei',
    type: 'country',
    country: 'Brunei',
    lat: 4.448298,
    lng: 114.551943,
    category: 'politics',
    summary: `Brunei operates as an absolute monarchy under Sultan Hassanal Bolkiah, who has ruled since 1967 and serves simultaneously as head of state, head of government, prime minister, defense minister, and finance minister. The sultan's wealth from oil and gas revenues funds a generous welfare state that provides citizens with free healthcare, education, subsidized housing, and no income tax—a social contract trading political freedom for material security. This arrangement has produced remarkable stability in a region often characterized by democratic tumult.

The 2019 implementation of strict Sharia penal code provisions—including death by stoning for homosexuality and adultery—sparked international outrage and boycotts. The sultan later announced a moratorium on death penalty, though the laws remain on books. This episode revealed tensions between Brunei's traditional Islamic monarchy and international pressure. The Malay Islamic Monarchy (MIB) ideology—combining Malay culture, Islamic faith, and monarchical system—shapes national identity and legitimizes absolute rule. Political parties are banned, no elections occur, and dissent is not tolerated.

Economically, Brunei faces the challenge confronting all petrostates: oil and gas dependence in an era of energy transition. Revenues have declined from peak years, requiring some fiscal adjustments though the sovereign wealth fund provides cushion. Diversification efforts have achieved limited success. The small population (around 450,000) includes a significant non-citizen minority who perform much labor but enjoy limited rights. Regionally, Brunei participates in ASEAN and maintains close ties with Singapore and Malaysia, though South China Sea territorial disputes create occasional tensions. Relations with Britain, the former colonial power, remain close. For this small, wealthy sultanate, politics is about managing the eventual transition from oil dependency, succession planning (the sultan is aging without clear rules), and balancing Islamic governance with international integration. The welfare state model works while revenues last, but structural questions about political sustainability and economic diversification loom.`,
    issues: JSON.stringify([
      'Absolute monarchy and no political pluralism',
      'Sharia law implementation and international criticism',
      'Oil and gas dependence and economic diversification',
      'Succession planning and monarchical stability',
      'Non-citizen labor force and minority rights'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Bulgaria',
    type: 'country',
    country: 'Bulgaria',
    lat: 42.508785,
    lng: 25.15709,
    category: 'politics',
    summary: `Bulgarian politics has been trapped in chronic instability since 2020, with seven parliamentary elections in three years producing revolving-door governments and deepening voter apathy. The cycle began with massive anti-corruption protests demanding resignation of then-Prime Minister Boyko Borissov, whose GERB party had dominated for over a decade. Despite losing power, Borissov's influence persists, and GERB remains the largest party—though unable to form stable coalitions. New protest parties rise promising reform but quickly splinter or disappoint, perpetuating fragmentation.

The current government led by Nikolai Denkov represents yet another attempt at reformist coalition, bringing together anti-corruption parties with pro-European orientation. The challenge is implementing actual reforms while managing a fractious majority and Borissov's shadow influence. Bulgaria struggles with endemic corruption that permeates institutions, public procurement, and judicial system. EU pressure has intensified, with rule-of-law conditionality holding back funds Bulgaria desperately needs. The country's media environment is compromised by oligarchic ownership and political pressure.

Bulgaria occupies a vulnerable position as EU and NATO's poorest member on the frontline with Turkey and close to Russia. The Ukraine war exposed divisions over energy dependence (Bulgaria relied heavily on Russian gas) and historical pro-Russian sympathies among parts of the population. The government has supported Ukraine and EU sanctions, but societal divisions persist. Turkish minority politics through the Movement for Rights and Freedoms (DPS) adds complexity, often serving as kingmaker in coalition formations. Bulgaria's Revival party has grown by combining nationalism, Russophilia, and EU skepticism. Demographically, Bulgaria faces catastrophic decline—population has shrunk from 9 million to under 6.5 million through emigration and low birth rates. Young, educated Bulgarians leave for Western Europe in massive numbers, creating brain drain. For Bulgarians, politics seems trapped in cycles of disappointment, where each new government promises change but delivers dysfunction, while corruption and decline continue.`,
    issues: JSON.stringify([
      'Political instability and seven elections in three years',
      'Endemic corruption and rule-of-law deficits',
      'Energy dependence and Russia relations',
      'Demographic catastrophe and mass emigration',
      'EU fund access blocked by reform failures'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Burkina Faso',
    type: 'country',
    country: 'Burkina Faso',
    lat: 12.673048,
    lng: -1.36388,
    category: 'politics',
    summary: `Burkina Faso has experienced two military coups since January 2022, ending a fragile democratic period and joining the wave of military takeovers sweeping the Sahel. Captain Ibrahim Traoré seized power in September 2022, overthrowing the previous coup leader Lieutenant-Colonel Paul-Henri Damiba, citing continued security failures against jihadist insurgency. Traoré leads a young military junta (he's in his 30s) that has suspended the constitution, dissolved parliament, and rules by decree while promising eventual return to civilian rule. The pattern echoes neighboring Mali and Niger—elected governments unable to contain terrorism, military intervention claiming nationalist legitimacy, and uncertain democratic prospects.

The jihadist insurgency dominates Burkina Faso's political reality. Islamic State and Al-Qaeda affiliated groups control significant territory, have killed thousands, and displaced over 2 million people—nearly 10% of the population. The military junta justifies its rule through security promises, but violence has actually intensified since the coups. Mass civilian massacres, military abuses, and militia proliferation have created humanitarian catastrophe. The junta's turn toward Russia and Wagner Group mercenaries, while expelling French forces, represents a geopolitical realignment seen across francophone Sahel states.

Domestically, the junta maintains power through nationalist rhetoric about sovereignty and anti-French sentiment. Civil society operates under severe restrictions, media faces censorship, and political opposition is suppressed. The economy suffers from conflict, displacement, and sanctions pressures. Gold mining provides revenues but also attracts criminal groups. Burkina Faso withdrew from ECOWAS alongside Mali and Niger, creating a bloc of military-ruled Sahel states resistant to regional and international pressure. Relations with coastal neighbors like Ivory Coast and Benin are tense over security spillover and political divergence. For ordinary Burkinabè, politics means living under military rule while jihadist violence, economic hardship, and displacement define daily reality. The question is whether the junta can deliver security improvements to justify its authoritarianism or whether Burkina Faso descends further into conflict and isolation.`,
    issues: JSON.stringify([
      'Military junta rule and democratic suspension',
      'Jihadist insurgency and humanitarian crisis',
      'Wagner Group/Russia pivot and French expulsion',
      '2 million internally displaced persons',
      'ECOWAS withdrawal and regional isolation'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Burundi',
    type: 'country',
    country: 'Burundi',
    lat: -3.332836,
    lng: 29.917086,
    category: 'politics',
    summary: `Burundian politics remains dominated by the CNDD-FDD (National Council for the Defense of Democracy-Forces for the Defense of Democracy), the former rebel group that has controlled power since 2005. President Évariste Ndayishimiye, elected in 2020, succeeded the late Pierre Nkurunziza whose controversial third term in 2015 sparked crisis, violence, and mass exodus. Ndayishimiye has presented a more pragmatic image than his predecessor, releasing some political prisoners and engaging diplomatically, but the fundamental authoritarian system persists. Power remains concentrated in the hands of military-security elites from the ruling party.

The 2015 crisis marked Burundi's democratic collapse. Nkurunziza's decision to run for a disputed third term triggered protests brutally suppressed by security forces and Imbonerakure youth militia. Hundreds were killed, torture became systematic, and opposition figures were assassinated or fled into exile. Over 400,000 Burundians became refugees, mostly in Tanzania. The violence had ethnic undertones—Burundi's Hutu-Tutsi divisions never fully healed after the civil war—though the conflict was primarily political. The international community responded with sanctions and suspended aid, though engagement has partially resumed under Ndayishimiye.

Burundi operates under severe restrictions: independent media banned, opposition parties marginalized, civil society organizations closed, and international monitors expelled. The economy suffers from aid cuts, mismanagement, and overpopulation pressures. Burundi is one of the world's poorest countries, with most citizens dependent on subsistence agriculture in a densely populated, landlocked territory. The government maintains control through ruling party structures reaching village level, security force loyalty, and systematic repression. Regional relations are tense—Rwanda accuses Burundi of supporting rebels, while Burundi claims Rwanda interferes. Relations with Tanzania are critical given refugee populations. For Burundians, politics means living under authoritarian one-party rule with limited freedoms while extreme poverty persists. The tragedy is that Burundi's democratic opening in the 2000s, achieved after devastating civil war, has been reversed into renewed authoritarianism.`,
    issues: JSON.stringify([
      'Authoritarian one-party rule and political repression',
      '2015 crisis legacy and 400,000+ refugees',
      'Imbonerakure militia violence and human rights abuses',
      'Extreme poverty and aid suspension',
      'Rwanda tensions and regional conflicts'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Cambodia',
    type: 'country',
    country: 'Cambodia',
    lat: 12.647584,
    lng: 104.50487,
    category: 'politics',
    summary: `Cambodian politics is synonymous with Hun Sen's authoritarian rule—38 years as prime minister before transferring power to his son Hun Manet in 2023. This dynastic succession represents not democratization but power consolidation within the Cambodian People's Party (CPP), which has governed since the 1980s. Hun Sen eliminated meaningful opposition through legal harassment, forced exile of leaders, and dissolution of the main opposition CNRSP party. The 2023 "election" occurred without viable opposition, giving the CPP predictable landslide in a process observers called neither free nor fair.

The CPP maintains control through sophisticated authoritarianism combining patronage, development, nationalism, and repression. Hun Sen delivered decades of economic growth, infrastructure development, and stability after the Khmer Rouge genocide—achievements he leverages for political legitimacy. However, this growth increasingly benefits the elite while inequality widens. Chinese investment has transformed Cambodia, with massive infrastructure projects and political support making Cambodia arguably Beijing's closest Southeast Asian client state. This dependence shapes foreign policy, including uncritical support for China's South China Sea claims and resistance to Western human rights pressure.

Civil society operates under constant threat—critical journalists face lawsuits or imprisonment, NGOs navigate restrictive laws, and online speech is monitored. Opposition figures live in exile, including former CNRSP leader Sam Rainsy. Land grabbing by connected elites has displaced rural communities, fueling resentment that can't find political expression. Cambodia's politics also cannot escape the Khmer Rouge legacy—Hun Sen himself was a low-level Khmer Rouge cadre, and the regime carefully manages memory and justice around genocide. The economy depends heavily on garment manufacturing, tourism, and construction—all vulnerable to external shocks. Labor rights remain restricted despite sector importance. For young Cambodians who know only CPP rule, politics means accepting authoritarian stability or risking persecution by challenging it. The Hun family's succession suggests this system will persist, with cosmetic adjustments rather than fundamental change.`,
    issues: JSON.stringify([
      'Dynastic succession and Hun family rule',
      'Opposition elimination and political repression',
      'Chinese dependence and client state dynamics',
      'Land grabbing and rural displacement',
      'Garment industry labor rights and inequality'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Cameroon',
    type: 'country',
    country: 'Cameroon',
    lat: 4.585041,
    lng: 12.473488,
    category: 'politics',
    summary: `Cameroon has been ruled by President Paul Biya since 1982—among the world's longest-serving leaders at 91 years old. His Cameroon People's Democratic Movement (CPDM) dominates through control of state institutions, security forces, and resources. Elections occur but are neither free nor fair, with the 2018 presidential vote marred by irregularities that gave Biya yet another term. The government tolerates limited opposition space while ensuring the ruling party faces no genuine threat. Biya's age and health spark succession speculation, but the system prevents transparent discussion of transition.

The Anglophone crisis has become Cameroon's most severe political challenge since reunification. Cameroon's English-speaking regions (about 20% of population) have long felt marginalized by the Francophone-dominated government. Protests that began in 2016 over language and legal system grievances were violently suppressed, radicalizing the movement toward armed separatism. The conflict has killed over 6,000, displaced hundreds of thousands, and seen atrocities by both military forces and separatist fighters. The government rejects federalism or meaningful autonomy, while separatists increasingly demand full independence. This intractable conflict reflects Cameroon's colonial legacy—British and French territories merged into one state with inadequate recognition of linguistic and cultural differences.

Boko Haram spillover from Nigeria affects Cameroon's Far North, creating a second security crisis. The military response has involved human rights abuses and displacement. Cameroon hosts over 400,000 refugees from Central African Republic, adding strain. The economy depends on oil, agriculture, and port revenues, but corruption and mismanagement limit development. Youth unemployment is high despite Cameroon's natural resources and educated population. French influence remains strong, with France supporting Biya diplomatically and militarily. The political system's brittleness is masked by authoritarian control, but the Anglophone crisis reveals deep fractures. For Cameroonians, politics means navigating between authoritarian stability and unresolved conflicts, while waiting for the inevitable succession that could bring instability or reform—no one knows which.`,
    issues: JSON.stringify([
      'Biya\'s 42-year rule and succession uncertainty',
      'Anglophone separatist conflict and humanitarian crisis',
      'Boko Haram terrorism in Far North',
      'French influence and postcolonial dependencies',
      'Corruption and economic underperformance'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Canada',
    type: 'country',
    country: 'Canada',
    lat: 60.324287,
    lng: -101.9107,
    category: 'politics',
    summary: `Canadian politics under Prime Minister Justin Trudeau's Liberal government has grown increasingly turbulent after nearly a decade in power. Trudeau, who won in 2015 promising "sunny ways" and progressive governance, faces voter fatigue, economic anxiety, and scandals that have eroded his initial popularity. The Liberals govern with a minority, dependent on New Democratic Party (NDP) support through a confidence-and-supply agreement. Opinion polls show Conservatives led by Pierre Poilievre significantly ahead, suggesting the Liberals may face defeat in the next election due by late 2025.

Canadian politics reflects deepening polarization imported partly from American culture wars but with distinct Canadian characteristics. Poilievre's Conservatives have embraced right-wing populism, criticizing Trudeau as elitist and out of touch, attacking carbon pricing, and adopting cryptocurrency and anti-establishment rhetoric. The "Freedom Convoy" trucker protests against vaccine mandates in 2022 revealed societal divisions and government overreach concerns. Regional tensions persist—Western alienation over energy policy, Quebec's nationalist assertions, and Atlantic Canada's economic struggles create centrifugal pressures. Yet Canadian political culture remains generally moderate compared to peers.

Major policy challenges include housing affordability crisis pricing out young people in major cities, healthcare system strains with doctor shortages and wait times, and Indigenous reconciliation. Trudeau's government has pursued carbon pricing to meet climate targets, expanded child benefits, and supported immigration—policies the Conservatives promise to reverse. Relations with China have been deeply strained over Huawei executive detention, Chinese interference allegations, and human rights. The India relationship deteriorated dramatically over allegations of Indian government involvement in killing a Canadian Sikh activist. U.S. relationship remains central, with Trump's return creating uncertainty about trade and defense. The question for Canada is whether it can maintain its distinctive social model—universal healthcare, multiculturalism, progressive values—amid economic pressures, populist challenges, and superpower neighborhood realities.`,
    issues: JSON.stringify([
      'Liberal government fatigue and Conservative polling lead',
      'Housing affordability crisis',
      'Healthcare system strains',
      'China and India relations deterioration',
      'Regional divisions and energy policy'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Chad',
    type: 'country',
    country: 'Chad',
    lat: 15.142959,
    lng: 18.645041,
    category: 'politics',
    summary: `Chadian politics underwent dynastic succession in 2021 when President Idriss Déby, who had ruled for 30 years, was killed during fighting against rebels. His son, Mahamat Idriss Déby, immediately seized power through a military council, dissolving parliament and promising transition to civilian rule. The 2024 constitutional referendum and subsequent presidential election—both won overwhelmingly by Déby fils—completed a managed transition that essentially formalized military rule under new constitutional cover. Opposition parties boycotted or faced severe restrictions, making the process's democratic legitimacy questionable.

Chad has served as a crucial Western security partner in the Sahel, providing capable military forces against jihadist groups in the region. This strategic importance—especially for France and the U.S.—has translated into tolerance for authoritarianism and dynasty. The Chadian military is considered the most effective in the Sahel, conducting operations in Mali, Niger, and neighboring regions against ISIS and Al-Qaeda affiliates. However, this security role comes at domestic cost: military dominance of politics, resources diverted to security rather than development, and human rights abuses with impunity.

Economically, Chad struggles despite oil revenues, ranking among the world's poorest countries. Oil wealth has enriched the ruling elite while most Chadians endure extreme poverty. The country faces severe humanitarian challenges: food insecurity, refugee populations from Sudan and CAR, climate change destroying Lake Chad, and limited infrastructure. Ethnic and regional divisions persist, particularly between the Sara-dominated south and the Arab and Toubou groups of the north and east. Relations with Sudan are tense due to Darfur conflict spillover and border disputes. The unexpected withdrawal from a French military cooperation agreement in 2024 signaled shifting regional dynamics, though Chad maintains Western security ties. For Chadians, politics means accepting military rule justified by security necessities while development and democracy remain distant promises. Whether the younger Déby can maintain his father's balancing act—satisfying Western partners while managing domestic pressures—remains uncertain.`,
    issues: JSON.stringify([
      'Dynastic military rule and managed transition',
      'Security state and Sahel counter-terrorism role',
      'Extreme poverty despite oil revenues',
      'Sudan conflict spillover and refugees',
      'Lake Chad climate crisis and food insecurity'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Chile',
    type: 'country',
    country: 'Chile',
    lat: -38.151771,
    lng: -72.318871,
    category: 'politics',
    summary: `Chilean politics underwent a remarkable transformation triggered by 2019's social explosion—massive protests against inequality, privatized services, and elite disconnect. President Gabriel Boric, a young leftist elected in 2021, represented the protest generation's ascent to power. His ambitious agenda included new constitution, expanded social programs, pension reform, and environmental protection. However, Chilean voters rejected two successive constitutional referendums (2022 left-wing version and 2023 right-wing version), revealing limits to transformative change and the country's ideological divisions.

The constitutional process's failure exposed Chile's political fragmentation. The left overreached in 2022 with proposals that scared moderate voters on issues like indigenous rights, property, and judicial system. The right's 2023 version swung too conservative on abortion, gender, and state role. Chileans essentially said no to both ideological extremes, demanding pragmatic centrism. Boric's government has struggled with this reality, facing congressional opposition, economic headwinds, and governing inexperience. His approval ratings have declined sharply as promised transformation proves slower and more difficult than campaign rhetoric suggested.

Immigration has become a contentious political issue. Venezuelan and Haitian migration has increased significantly, creating social tensions and xenophobic backlash in a country historically homogeneous. Crime and insecurity dominate public concern, with organized crime expanding and murder rates rising from Chile's traditionally low levels. The Mapuche conflict in southern regions involves land disputes, violence, and questions about indigenous autonomy. Chile's economy, dependent on copper exports, has slowed after commodity boom years, forcing fiscal constraints on social spending promises. The right-wing Republican Party led by José Antonio Kast has grown by exploiting crime, immigration, and economic anxiety. For Chile, the political question is whether it can address legitimate inequality and social demands through institutional reform, or whether the country remains trapped between incompatible visions unable to forge workable consensus.`,
    issues: JSON.stringify([
      'Failed constitutional reforms and political fragmentation',
      'Boric government struggles and declining approval',
      'Immigration backlash and rising xenophobia',
      'Crime increase and Mapuche conflict',
      'Economic slowdown and copper dependence'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'China',
    type: 'country',
    country: 'China',
    lat: 32.498178,
    lng: 106.337289,
    category: 'politics',
    summary: `Chinese politics is defined by Xi Jinping's concentration of power unprecedented since Mao. Xi secured a norm-breaking third term in 2022, eliminated term limits, and purged rivals through anti-corruption campaigns that also served political purposes. He has centralized authority, elevated ideology, and positioned himself as core leader whose thought guides the Communist Party. This represents a fundamental shift from the collective leadership model that prevailed since Deng Xiaoping, concentrating decision-making and reducing space for policy debate within the party elite.

The party-state system has tightened control across all domains. The economy sees greater state intervention despite earlier liberalization promises—tech sector crackdowns, regulatory campaigns against private enterprise, emphasis on "common prosperity" to address inequality. Social control has intensified through surveillance technology, social credit systems, and increasingly sophisticated censorship. Xinjiang's mass detention of Uyghurs represents the most extreme application of party control. Hong Kong's National Security Law destroyed the "one country, two systems" framework, criminalizing dissent and eliminating political freedoms. The Taiwan question has become more acute as Xi emphasizes "reunification" as inevitable, raising military tensions and fears of forceful annexation.

Internationally, China under Xi has abandoned Deng's "hide and bide" approach for assertive great power nationalism. Belt and Road Initiative extends Chinese economic and political influence globally. Wolf warrior diplomacy aggressively defends China's image and interests. Relations with the U.S. have deteriorated into strategic competition across technology, military, economic, and ideological dimensions. China positions itself as leader of the developing world against Western dominance. Domestically, Xi faces significant challenges despite authoritarian control: property sector debt crisis, demographic decline from aging and low birth rates, youth unemployment, local government debt, and economic growth slowdown. Zero-COVID policy's sudden abandonment after protests revealed tensions between control and reality. The question is whether Xi's system can deliver continued prosperity and stability that legitimizes one-party rule, or whether accumulated problems will eventually force political opening that the current system prevents.`,
    issues: JSON.stringify([
      'Xi Jinping power concentration and collective leadership end',
      'Uyghur detention and Hong Kong crackdown',
      'Economic slowdown and property sector crisis',
      'U.S. strategic competition and Taiwan tensions',
      'Demographic decline and youth unemployment'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Colombia',
    type: 'country',
    country: 'Colombia',
    lat: 3.373111,
    lng: -73.174347,
    category: 'politics',
    summary: `Colombian politics entered a new phase with Gustavo Petro's 2022 election as the country's first leftist president—a historic break for a nation where the left was long associated with armed rebellion. Petro, a former M-19 guerrilla turned politician, defeated the traditional elite with promises of "total peace" negotiations with armed groups, environmental protection, and social programs addressing deep inequality. His vice president, Francia Márquez, is an Afro-Colombian environmental activist, symbolizing representation long denied. However, governing has proven far more difficult than campaigning.

Petro's "total peace" strategy involves simultaneous negotiations with multiple armed groups—ELN guerrillas, dissident FARC factions, and criminal gangs. This ambitious approach has produced mixed results: ceasefires periodically collapse, violence continues in contested territories, and criminal groups exploit negotiations to consolidate control. The 2016 FARC peace accord's incomplete implementation haunts new efforts—land reform stalled, rural development lagged, and former combatant reintegration faced obstacles. Colombia's armed conflict has morphed rather than ended, with criminal organizations controlling drug trafficking routes and illegal mining.

Economically, Petro has pursued progressive taxation, increased social spending, and energy transition away from fossil fuels. This agenda faces fierce resistance from business elites, conservative opposition, and economic orthodoxy. His approval ratings have declined sharply amid inflation, crime concerns, and governing mishaps. Corruption scandals have hit the administration. The coalition is fragile, Congress opposes key reforms, and Petro's polarizing style alienates potential allies. Relations with Venezuela improved dramatically after years of hostility, while U.S. relationship navigates tensions over drug policy and political orientation. For Colombia, the question is whether Petro can use his historic mandate to finally address inequality and violence, or whether he becomes another frustrated reformer unable to overcome entrenched interests and structural constraints. The country remains trapped between peace aspirations and violence realities.`,
    issues: JSON.stringify([
      'Total peace negotiations with multiple armed groups',
      'FARC accord incomplete implementation',
      'Drug trafficking and criminal group control',
      'Economic reform resistance and declining approval',
      'Political polarization and coalition fragility'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Costa Rica',
    type: 'country',
    country: 'Costa Rica',
    lat: 10.0651,
    lng: -84.077922,
    category: 'politics',
    summary: `Costa Rican politics reflects one of Latin America's most stable democracies, with uninterrupted civilian rule since 1949 and no military since constitutional abolition. President Rodrigo Chaves, elected in 2022, broke the traditional two-party dominance of PLN (National Liberation Party) and PUSC that had characterized Costa Rican politics for decades. Chaves ran as an outsider criticizing political establishment corruption and promising to clean up government. His Social Democratic Progress Party had minimal congressional representation, forcing constant negotiation with a fragmented legislature resistant to his agenda.

Chaves's presidency has been marked by conflicts with the Legislative Assembly, judiciary, and media. His confrontational style and attacks on institutions have raised concerns about democratic norms in a country proud of its institutional strength. International organizations and press freedom groups have criticized his rhetoric against journalists. Constitutional checks limit executive power in Costa Rica's system, meaning Chaves's reform ambitions face institutional constraints. The political establishment that he rails against has sufficient power to block or moderate his initiatives.

Economically, Costa Rica has achieved relative prosperity through tourism, agriculture (coffee, pineapples, bananas), medical devices manufacturing, and services. The country attracts foreign investment through political stability, educated workforce, and strategic location. However, high public debt constrains fiscal flexibility, requiring IMF support and austerity measures that sparked social protests. Inequality persists despite middle-income status, and informal economy employs many. Immigration from Nicaragua creates social tensions, particularly around public services and jobs. Costa Rica has led on environmental protection—25% of territory in protected areas, renewable energy dominance—creating international reputation. Yet deforestation pressures and coastal development threaten conservation gains. Regional gang violence and drug trafficking have increased crime, though levels remain lower than neighbors. For Costa Ricans, politics involves defending democratic institutions against populist challenges while addressing economic pressures and preserving the environmental and social model that distinguishes their country.`,
    issues: JSON.stringify([
      'Chaves populism and institutional conflicts',
      'High public debt and IMF austerity measures',
      'Nicaraguan immigration tensions',
      'Crime increase and gang violence spillover',
      'Environmental protection versus development pressures'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Croatia',
    type: 'country',
    country: 'Croatia',
    lat: 45.805799,
    lng: 16.37241,
    category: 'politics',
    summary: `Croatian politics is dominated by the conservative Croatian Democratic Union (HDZ), which has governed for most of the post-independence period. Prime Minister Andrej Plenković has led since 2016, pursuing EU integration and economic development while managing the party's nationalist right wing. Croatia successfully joined the Eurozone and Schengen Area in 2023—major achievements demonstrating European integration progress. However, domestic politics features persistent issues: corruption, emigration, and unresolved questions from the 1990s independence war.

Nationalism remains a powerful force in Croatian politics. The HDZ skillfully navigates between EU membership obligations and nationalist base expectations. War legacy issues surface regularly—debates over general Ante Gotovina's conviction (later overturned), commemorations that divide along ethnic lines, and disputes with Serbia over war narratives. Croatia's ethnic Serb minority (12% in 1991, now under 4% after ethnic cleansing) faces discrimination despite legal protections. The political discourse sometimes tolerates historical revisionism regarding World War II Ustasha fascist regime, troubling international observers.

Economically, Croatia depends heavily on tourism along the stunning Adriatic coast. The sector drives growth but creates seasonal employment and regional disparities—coastal regions prosper while inland areas struggle. Emigration has become catastrophic: over 10% of population has left since EU accession in 2013, mainly young educated workers seeking opportunities in Western Europe. This brain drain threatens long-term economic viability and has created labor shortages. Corruption remains problematic despite anti-graft efforts—public procurement irregularities, political patronage, and weak judicial independence persist. Relations with neighbors are generally stable but sometimes tense—Bosnia over border and political issues, Serbia over history and property disputes. Croatia has strongly supported Ukraine, seeing parallels to its own independence war. For Croatians, politics involves balancing European integration benefits against nationalist identity politics, while addressing whether the country can reverse emigration trends and build sustainable prosperity beyond tourism.`,
    issues: JSON.stringify([
      'Nationalism and war legacy politics',
      'Catastrophic emigration and brain drain',
      'Tourism over-dependence and seasonal economy',
      'Corruption and rule of law weaknesses',
      'Ethnic Serb minority discrimination'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Cuba',
    type: 'country',
    country: 'Cuba',
    lat: 21.334024,
    lng: -77.975855,
    category: 'politics',
    summary: `Cuban politics remains defined by one-party Communist rule, though leadership has transitioned from the Castro brothers (Fidel died in 2016, Raúl retired in 2021) to President Miguel Díaz-Canel and Prime Minister Manuel Marrero. This generational change represents continuity rather than reform—Díaz-Canel is a party loyalist committed to the socialist system, not a liberalizer. The July 2021 protests, the largest since 1959 revolution, revealed deep popular frustration with economic crisis, shortages, and political restrictions. The government responded with arrests, prosecutions, and hundreds imprisoned—demonstrating the regime's priority of control over reform.

Cuba faces its worst economic crisis in decades. U.S. sanctions tightened under Trump and maintained by Biden have devastated an already struggling economy. Tourism collapsed during COVID-19 and hasn't fully recovered. Venezuelan subsidies that sustained Cuba for years have diminished as Venezuela itself struggles. The result: food shortages, power blackouts, medicine scarcity, and inflation destroying savings. Cubans endure queues for basic goods, remittances from abroad are essential for survival, and dollarization proceeds informally. The government has attempted limited economic opening—allowing small private businesses, internet access expansion—but resists meaningful liberalization.

Mass emigration has reached unprecedented levels, with over 400,000 Cubans leaving since 2021, primarily via dangerous irregular routes to the U.S. This exodus includes doctors, engineers, and other professionals the education system trained but the economy cannot employ. Demographics are dire: low birth rates, aging population, and emigration create a shrinking, aging society. Cuba's international position has shifted—Cold War alliances are irrelevant, Venezuela relationship is damaged, Russia provides limited support, and China engages primarily for strategic not ideological reasons. Relations with the U.S. remain frozen in Cold War antagonism despite geographic proximity. For ordinary Cubans, politics means navigating a system where loyalty is demanded but rewards are scarce, while economic desperation drives the exit option. The question is whether the party can maintain control through repression alone, or whether economic collapse will eventually force political change.`,
    issues: JSON.stringify([
      'Worst economic crisis in decades and shortages',
      'Mass emigration exceeding 400,000 since 2021',
      'July 2021 protests and repression',
      'U.S. sanctions and international isolation',
      'Demographic crisis and aging society'
    ]),
    topStories: JSON.stringify([])
  }
]

async function insertPoliticsBatch2() {
  console.log('🚀 Starting Politics Batch 2 insertion (Bolivia - Cuba)')
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

  console.log(`\n✅ Batch 2 complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Errors: ${errorCount}`)
}

insertPoliticsBatch2()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
