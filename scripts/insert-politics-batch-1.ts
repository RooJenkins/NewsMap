import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Politics summaries for Afghanistan through Bhutan (Batch 1 of 10)
const politicsSummaries = [
  {
    name: 'Afghanistan',
    type: 'country',
    country: 'Afghanistan',
    lat: 34.164262,
    lng: 66.496586,
    category: 'politics',
    summary: `The Taliban's return to power in August 2021 marked Afghanistan's most dramatic political transformation since their original overthrow in 2001. The Islamic Emirate has consolidated control with surprising efficiency, eliminating the provincial warlordism that plagued previous governments. Yet this stability comes at an extraordinary cost. Women have been systematically erased from public life through education bans, employment restrictions, and severe mobility constraints—policies that have drawn international condemnation and complicated diplomatic recognition.

The regime faces a fundamental contradiction: it achieved military victory but inherited a collapsed economy dependent on international aid that has largely evaporated. The banking system remains paralyzed by sanctions, civil servants go unpaid for months, and humanitarian crisis deepens. The Taliban's governing challenge is compounded by internal tensions between pragmatic administrators in Kabul and hardline ideologues, particularly regarding girls' education.

Internationally, Afghanistan exists in diplomatic limbo. No country formally recognizes the Taliban government, though neighboring states maintain working relationships driven by security concerns, particularly regarding ISIS-K. China and Russia engage cautiously, seeking influence without endorsement. Pakistan's relationship has deteriorated from patron to rival, as Kabul accuses Islamabad of harboring militants. The withdrawal of U.S. forces removed Afghanistan from Western strategic priorities, leaving the country isolated. For ordinary Afghans, politics means navigating an increasingly restrictive social order while economic desperation drives mass emigration.`,
    issues: JSON.stringify([
      'Taliban governance and international non-recognition',
      'Women\'s rights restrictions and education bans',
      'Economic collapse and humanitarian crisis',
      'ISIS-K terrorism threat',
      'Regional security concerns and border tensions'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Albania',
    type: 'country',
    country: 'Albania',
    lat: 40.654855,
    lng: 20.11384,
    category: 'politics',
    summary: `Albania has achieved a remarkable political transformation over three decades, evolving from Europe's most isolated communist dictatorship to a NATO member and EU candidate country. Prime Minister Edi Rama's Socialist Party has dominated since 2013, winning four consecutive elections despite opposition allegations of electoral irregularities. Rama has pursued an ambitious reform agenda focused on judicial independence, anti-corruption measures, and economic development, though critics accuse him of consolidating power through media influence and politicized institutions.

The European integration process drives Albanian politics, with Brussels' conditionality reports shaping domestic reform priorities. The country has made genuine progress in vetting judges and prosecutors, dismantling some corrupt networks, but implementation remains uneven. Albania's strategic importance has grown with the Ukraine conflict, as its strong pro-Western orientation and vocal support for NATO enlargement contrast with Balkan ambivalence. The country hosts international organizations and has positioned itself as a regional diplomatic player.

Domestically, political discourse remains intensely partisan and polarized. Opposition protests periodically challenge the government, but the Socialist majority maintains control. Corruption persists despite reform efforts, particularly in public procurement and construction permits. Young Albanians continue emigrating in large numbers, frustrated by limited economic opportunities and political dysfunction. Regional identity politics occasionally surface, particularly regarding northern-southern divides. Relations with Kosovo remain emotionally significant but politically delicate, while Serbia relations show slow improvement. For a small Balkan nation, Albania punches above its weight in Euro-Atlantic institutions while still addressing democratic deficits at home.`,
    issues: JSON.stringify([
      'EU accession negotiations and reform requirements',
      'Corruption and judicial reform implementation',
      'Political polarization and democratic quality',
      'Youth emigration and demographic decline',
      'Kosovo relations and regional diplomacy'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Algeria',
    type: 'country',
    country: 'Algeria',
    lat: 27.397406,
    lng: 2.808241,
    category: 'politics',
    summary: `Algeria's political system remains dominated by an opaque constellation of military, intelligence, and business elites—the pouvoir—despite formal democratic institutions. President Abdelmadjid Tebboune, elected in 2019 following the Hirak protest movement's forced resignation of longtime ruler Abdelaziz Bouteflika, presents himself as a reformer. Yet meaningful change remains limited. The military establishment, led by army chief Said Chengriha, exercises decisive influence behind civilian facades. Constitutional amendments and anti-corruption campaigns have targeted political opponents more than systemic problems.

The 2019-2020 Hirak movement represented Algeria's most significant popular mobilization since independence, with millions demanding political renewal and an end to military dominance. The regime alternated between concessions and repression, ultimately containing the movement through targeted arrests, media restrictions, and COVID-19 measures. Many Hirak activists and journalists remain imprisoned on vague charges. The government's response revealed both the system's brittleness and its survival mechanisms—controlling vast hydrocarbon revenues that fund security forces and subsidies that maintain social peace.

Algeria's foreign policy reflects domestic priorities: stability and sovereignty. The Western Sahara conflict with Morocco has intensified, straining regional relations and consuming diplomatic resources. Relations with France remain complex, mixing economic interdependence with post-colonial grievances. Algeria positions itself as a Mediterranean energy supplier and Sahel security partner while maintaining strategic autonomy. Domestically, the regime faces demographic pressures from a youthful population with limited economic prospects, irregular migration increasing, and Islamist movements contained but not eliminated. The political question is whether the system can evolve gradually or will face another eruption of popular frustration.`,
    issues: JSON.stringify([
      'Military influence and democratic deficit',
      'Hirak movement suppression and political prisoners',
      'Hydrocarbon dependence and economic diversification',
      'Western Sahara conflict with Morocco',
      'Youth unemployment and social pressures'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Angola',
    type: 'country',
    country: 'Angola',
    lat: -12.182762,
    lng: 17.984249,
    category: 'politics',
    summary: `Angolan politics has been dominated by the MPLA (People's Movement for the Liberation of Angola) since independence in 1975, creating one of Africa's most entrenched single-party systems. President João Lourenço, who succeeded José Eduardo dos Santos in 2017, has pursued a surprising anti-corruption campaign targeting the previous regime's kleptocracy, most notably prosecuting dos Santos' daughter Isabel. This represented a rare intra-elite accountability moment, though critics question whether it constitutes genuine systemic reform or selective purging of rivals.

The MPLA's grip on power remains firm despite economic challenges that have eroded its petroleum-based patronage system. The 2022 elections saw the opposition UNITA (National Union for the Total Independence of Angola) make significant gains, winning 43% of votes and challenging MPLA dominance in ways unseen for decades. The narrowing of the ruling party's majority—from overwhelming landslides to a 51% showing—suggests shifting political dynamics, though questions about electoral transparency persist. Angola's politics still reflects its civil war legacy, with MPLA and UNITA representing political identities shaped by that conflict.

Economically, oil price volatility has forced difficult adjustments. The government has implemented IMF-backed reforms, cutting subsidies and devaluing currency, which have improved macroeconomic indicators while causing social hardship. Corruption remains pervasive despite high-profile prosecutions, with oil revenues still insufficiently benefiting ordinary Angolans. Regional politics features growing influence, particularly in the Democratic Republic of Congo and the Great Lakes region. Domestically, Lourenço faces the challenge of managing MPLA internal factions while addressing a frustrated youth population seeking economic opportunities in a country where oil wealth has historically concentrated among political elites.`,
    issues: JSON.stringify([
      'MPLA dominance and democratic space limitations',
      'Anti-corruption efforts and selective prosecution',
      'Oil dependence and economic diversification',
      'Electoral transparency and UNITA opposition growth',
      'Youth unemployment and inequality'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Argentina',
    type: 'country',
    country: 'Argentina',
    lat: -33.501159,
    lng: -64.173331,
    category: 'politics',
    summary: `Argentina's 2023 presidential election delivered a political earthquake with Javier Milei's victory—a self-described anarcho-capitalist who campaigned with a chainsaw symbolizing his promise to slash the state. Milei represents a dramatic break from Argentina's traditional political duopoly of Peronists and center-right Juntos por el Cambio. His outsider status and radical libertarian rhetoric captured voter frustration with recurring economic crises, triple-digit inflation, and endemic corruption. The political establishment that has governed Argentina for decades suddenly faces an existential challenge.

Milei's agenda includes dollarizing the economy, abolishing the Central Bank, and drastically reducing government size—proposals that would fundamentally reshape Argentina's economic model. His administration has implemented severe austerity measures and deregulation, sparking fierce resistance from trade unions, social movements, and Peronist governors who control key provinces. The political battle lines are drawn between Milei's "libertarian revolution" and entrenched interests defending the social welfare system Peronism built. Congressional opposition limits his maneuvering room, forcing negotiations that dilute his most radical proposals.

Argentina's politics reflects deeper questions about economic models and national identity. Decades of economic mismanagement, debt crises, and IMF interventions have left Argentines deeply skeptical of their political class. Peronism, which dominated politics for 75 years through its ability to mobilize working-class support, now struggles to maintain relevance. Social unrest has intensified as poverty exceeds 40%, affecting a country that once boasted Latin America's largest middle class. Internationally, Milei has aligned with conservative leaders and broken with Argentina's traditional non-aligned foreign policy. Whether his "shock therapy" can rescue Argentina's economy or will deepen social divisions remains the central political question.`,
    issues: JSON.stringify([
      'Economic crisis and hyperinflation',
      'Milei\'s radical economic reforms and political polarization',
      'Peronism\'s future and traditional party system collapse',
      'Poverty and social unrest',
      'IMF debt obligations and dollarization debate'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Armenia',
    type: 'country',
    country: 'Armenia',
    lat: 40.459077,
    lng: 44.800564,
    category: 'politics',
    summary: `Armenia's politics has been transformed by consecutive traumas: the 2020 Nagorno-Karabakh war defeat and the 2023 loss of the territory entirely. Prime Minister Nikol Pashinyan, who came to power in 2018's Velvet Revolution promising democratic reforms and anti-corruption efforts, now navigates between geopolitical realities that have shattered national aspirations. The loss of Nagorno-Karabakh—territory Armenians had controlled since the 1990s—represents a generational wound that has fundamentally reshaped political discourse.

Pashinyan faces domestic opposition accusing him of betraying national interests through concessions to Azerbaijan, while he argues he inherited an untenable situation from previous corrupt regimes. Mass protests have periodically challenged his government, though he retains parliamentary majority. The political opposition includes old-guard elites tied to former president Robert Kocharyan and nationalist groups demanding more confrontational policies toward Azerbaijan and Turkey. This creates a paradox: Pashinyan's democratic credentials are strongest, but his pragmatic foreign policy alienates those who see any territorial compromise as capitulation.

Armenia's geopolitical position has become increasingly precarious. Traditional patron Russia proved unable or unwilling to prevent Azerbaijan's 2023 offensive, fundamentally undermining the security relationship. Armenia has begun diversifying, strengthening ties with Western institutions, EU monitoring missions, and even tentative French and U.S. security cooperation. Relations with Turkey show glacial improvement, though the genocide recognition issue remains unresolved. The Azerbaijan peace process continues fitfully, with border demarcation disputes and corridor demands unresolved. Domestically, Armenia faces demographic pressures from emigration, economic challenges despite tech sector growth, and fundamental questions about national security strategy in a hostile neighborhood.`,
    issues: JSON.stringify([
      'Nagorno-Karabakh loss and national trauma',
      'Peace negotiations with Azerbaijan and Turkey',
      'Russia relationship deterioration and Western pivot',
      'Political polarization and opposition protests',
      'Emigration and demographic decline'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Australia',
    type: 'country',
    country: 'Australia',
    lat: -24.129522,
    lng: 134.04972,
    category: 'politics',
    summary: `Australian politics in the 2020s reflects a nation navigating between economic interdependence with China and security alignment with the United States—a tension that defines contemporary debates. Prime Minister Anthony Albanese's Labor government, elected in 2022, has sought to recalibrate after nine years of Coalition rule, pursuing climate action, Indigenous voice recognition, and social reforms while maintaining bipartisan consensus on China containment and AUKUS security cooperation. The political center has largely held despite global polarization trends, though new pressures are emerging.

The relationship with China dominates foreign policy thinking. Australia experienced firsthand Beijing's economic coercion through trade restrictions on barley, wine, and coal during 2020-2021 tensions. The government has worked to stabilize relations while deepening security ties with the U.S., U.K., and Japan through AUKUS and Quad arrangements. This balancing act—managing the largest trading partner relationship while preparing for potential conflict scenarios—creates constant domestic political friction. The nuclear submarine program represents the largest defense procurement in Australian history and a generational strategic commitment.

Domestically, Australia grapples with familiar challenges: housing affordability crisis pricing out young people, cost of living pressures, and climate policy debates. The 2023 referendum on Indigenous constitutional voice failed despite government support, revealing limits to social change consensus. Politics remains relatively stable compared to peer democracies—regular leadership changes have moderated, coalition discipline is strong, and extremism remains marginal. Yet underlying anxieties about national sovereignty, economic security, and cultural identity increasingly shape debates. The political system must address how a middle-power nation protects interests in an era of great power competition while maintaining the social cohesion that has been Australia's political strength.`,
    issues: JSON.stringify([
      'China-U.S. strategic competition and balancing',
      'AUKUS nuclear submarine program',
      'Housing affordability and cost of living crisis',
      'Indigenous voice referendum defeat',
      'Climate policy and energy transition'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Austria',
    type: 'country',
    country: 'Austria',
    lat: 47.518859,
    lng: 14.130515,
    category: 'politics',
    summary: `Austrian politics has been shaken by the rise of the far-right Freedom Party (FPÖ), which won the September 2024 elections with nearly 29%—the first far-right victory in the EU since World War II. Herbert Kickl's FPÖ capitalized on migration anxiety, inflation concerns, and COVID-policy backlash to break the traditional dominance of the center-right People's Party (ÖVP) and center-left Social Democrats (SPÖ). Yet winning elections and forming government are different matters. Other parties' refusal to partner with Kickl has led to tortuous coalition negotiations, potentially producing a "grand coalition" of former rivals to keep the FPÖ from power.

Austria's political culture reflects its unique position as a neutral EU member with historical ties to Eastern Europe and Alpine conservatism. The country has absorbed significant immigration relative to its size, creating social tensions the FPÖ exploits skillfully. Issues of national identity—Austrian versus pan-German, traditional values versus cosmopolitanism—surface regularly. The far-right's influence extends beyond electoral politics into media narratives and policy boundaries, pulling mainstream parties rightward on migration even when keeping FPÖ from government.

Economically, Austria has weathered recent crises relatively well, with strong industrial sectors and high living standards. However, Russian gas dependence exposed vulnerabilities during the Ukraine crisis, forcing expensive adjustments. The political consensus on neutrality faces pressure as EU security integration deepens. Corruption scandals have periodically rocked the establishment, including the "Ibiza affair" that brought down a previous ÖVP-FPÖ government in 2019. Austrian politics demonstrates how prosperous, stable democracies aren't immune to populist disruption, as economic anxiety and cultural backlash combine to challenge post-war political settlements. The question is whether mainstream parties can contain far-right influence or whether Austrian politics has fundamentally realigned.`,
    issues: JSON.stringify([
      'FPÖ far-right electoral victory and coalition challenges',
      'Migration and national identity politics',
      'Neutrality debate and EU security integration',
      'Russian gas dependence and energy security',
      'Corruption scandals and political reform'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Azerbaijan',
    type: 'country',
    country: 'Azerbaijan',
    lat: 40.402387,
    lng: 47.210994,
    category: 'politics',
    summary: `Azerbaijan under President Ilham Aliyev operates as a personalized authoritarian state where the Aliyev family has ruled since 1993—first under Heydar Aliyev, then his son since 2003. The 2020 and 2023 military victories over Armenia in Nagorno-Karabakh have dramatically strengthened Aliyev's domestic position and regional leverage. Azerbaijan reclaimed territories it considers integral to national sovereignty, achieving through force what decades of negotiations could not. This has generated genuine popular support alongside the government's extensive control mechanisms.

The political system tolerates virtually no genuine opposition. Elections are neither free nor fair, media is tightly controlled, and civil society operates under severe restrictions. Prominent journalists and activists face imprisonment on fabricated charges. However, the regime's stability rests on more than just repression—oil and gas revenues fund patronage networks, public sector employment, and development projects that maintain social peace. Baku has modernized impressively, showcasing wealth from hydrocarbon exports while rural areas lag behind. The ruling elite has successfully managed resource wealth to prevent the regime instability seen in some petrostates.

Internationally, Azerbaijan has leveraged its energy resources brilliantly. The country positions itself as Europe's alternative to Russian gas, with the Southern Gas Corridor and expanded production making Azerbaijan strategically valuable to the EU. Relations with Turkey have reached unprecedented closeness, creating a Turkic axis. Russia maintains influence but Azerbaijan preserves more autonomy than other post-Soviet states. Relations with Iran remain tense over Azerbaijan's Israel ties and Turkic nationalism. The Nagorno-Karabakh victory has emboldened Azerbaijan to press territorial claims and demand transit corridors, reshaping the South Caucasus balance of power. Domestically, the challenge is whether oil dependence and authoritarian governance can sustain stability amid global energy transitions.`,
    issues: JSON.stringify([
      'Authoritarian governance and political repression',
      'Nagorno-Karabakh victory and territorial consolidation',
      'Oil and gas dependence and European energy role',
      'Relations with Armenia and peace process',
      'Human rights violations and political prisoners'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Bahamas',
    type: 'country',
    country: 'Bahamas',
    lat: 26.401789,
    lng: -77.146688,
    category: 'politics',
    summary: `The Bahamas operates a stable Westminster parliamentary democracy with regular peaceful power transitions between the Progressive Liberal Party (PLP) and Free National Movement (FNM). Prime Minister Philip "Brave" Davis leads the PLP government elected in 2021, focusing on economic recovery from COVID-19's devastating impact on tourism, constitutional reform, and addressing crime. Bahamian politics features robust debate and competitive elections, though both major parties share similar centrist positions, creating policy continuity despite leadership changes.

The country faces distinct governance challenges stemming from its archipelagic geography and economic structure. Tourism and financial services dominate, making the economy vulnerable to external shocks and international regulatory pressures. The COVID-19 pandemic exposed this vulnerability catastrophically, with borders closing and tourism evaporating. Recovery has been uneven, with Nassau and Paradise Island rebounding while outer islands struggle. The government has pursued Chinese investment in infrastructure and tourism, creating political debates about sovereignty and economic dependence.

Crime, particularly in Nassau, dominates domestic political discourse. Gang violence and murder rates have shocked a nation traditionally proud of its safety. The government has struggled to address root causes—youth unemployment, drug trafficking transit routes, and proliferation of illegal firearms from the United States. Constitutional reform discussions include moving toward republic status, replacing the British monarch as head of state—a debate that engages questions of post-colonial identity versus traditional institutions. Climate change poses an existential threat to a low-lying island nation, making environmental policy increasingly political. Migration from Haiti creates social tensions as the Bahamas balances humanitarian concerns with resource limitations. For a small island democracy, managing tourism-dependent prosperity while addressing security and sovereignty challenges defines political priorities.`,
    issues: JSON.stringify([
      'Tourism dependency and COVID-19 recovery',
      'Crime and gang violence in Nassau',
      'Chinese investment and economic sovereignty',
      'Constitutional reform and republic debate',
      'Climate change vulnerability and Haitian migration'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Bahrain',
    type: 'country',
    country: 'Bahrain',
    lat: 26.0667,
    lng: 50.5577,
    category: 'politics',
    summary: `Bahrain remains an absolute monarchy where the Al Khalifa family exercises ultimate authority, despite cosmetic constitutional and parliamentary forms. King Hamad bin Isa Al Khalifa and Crown Prince Salman bin Hamad Al Khalifa control all meaningful political decisions through a system that combines traditional tribal legitimacy with modern security apparatus. The 2011 Arab Spring uprising, brutally suppressed with Saudi military assistance, marked the end of even limited political reform experiments. The Sunni monarchy's rule over a majority Shia population creates fundamental sectarian tensions the government manages through repression and patronage.

The political opposition has been systematically dismantled since 2011. The main Shia opposition society Al-Wefaq was dissolved, its leaders imprisoned or exiled, and political space has contracted dramatically. Elections occur but involve only a consultative lower house with limited powers, while the appointed upper house and royal prerogatives maintain control. Prominent human rights activists like Nabeel Rajab have faced imprisonment for criticizing the government. The regime portrays opposition as Iranian-backed sedition, framing repression as national security rather than sectarian control.

Bahrain's politics cannot be separated from its position within Gulf regional dynamics. The country hosts the U.S. Fifth Fleet, making it strategically vital for American Middle East military operations—a relationship that mutes Western criticism of human rights violations. Saudi Arabia views Bahrain as effectively a client state and intervened decisively in 2011 to prevent regime change. The Abraham Accords normalized ties with Israel, adding another layer to regional alignments. Economically, Bahrain has diversified more than neighbors, developing financial services and manufacturing, but oil price fluctuations still impact state finances. The unresolved sectarian divide, where the majority Shia population faces systematic discrimination in employment, housing, and political participation, remains Bahrain's central political reality beneath the surface stability.`,
    issues: JSON.stringify([
      'Authoritarian monarchy and political repression',
      'Sunni-Shia sectarian tensions',
      'Political prisoners and human rights violations',
      'Saudi Arabia influence and security dependence',
      'U.S. Fifth Fleet presence and regional alignments'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Bangladesh',
    type: 'country',
    country: 'Bangladesh',
    lat: 24.214956,
    lng: 89.684963,
    category: 'politics',
    summary: `Bangladesh experienced a dramatic political upheaval in August 2024 when student-led protests over civil service job quotas escalated into a mass movement that forced Prime Minister Sheikh Hasina to flee the country after 15 years in power. Her Awami League government had become increasingly authoritarian, characterized by rigged elections, opposition suppression, and enforced disappearances. The violent crackdown on protesters that killed hundreds ultimately backfired, as the military refused to continue supporting her rule. An interim government led by Nobel laureate Muhammad Yunus now faces the monumental task of managing the transition and potentially organizing credible elections.

For decades, Bangladeshi politics has been defined by bitter rivalry between the Awami League and Bangladesh Nationalist Party (BNP), with Hasina and Khaleda Zia (or their families) dominating. This personalized political culture produced governance dysfunction, with each party using power to prosecute opponents and stack institutions. Hasina's long tenure brought economic development—garment industry growth, infrastructure megaprojects, poverty reduction—but also systematic corruption and democratic backsliding. The BNP and Jamaat-e-Islami were essentially banned from political participation through legal harassment and violence.

The current transition is deeply uncertain. Student coordinators who led the protests demand fundamental political reform, not just leadership change. The interim government must navigate between military influence, political party ambitions, civil society demands, and international pressure. Bangladesh's economic success story—moving from basket case to lower-middle-income country—faces risks from political instability. The garment industry that drives exports requires predictability. Relations with India, historically close under Hasina, may shift as New Delhi adjusts to new political realities. For Bangladesh's young, urban population, the uprising represents hope for genuine democracy after decades of dynastic politics and authoritarian drift. Whether institutions can be built to break the cycle of winner-takes-all politics will determine the country's trajectory.`,
    issues: JSON.stringify([
      'Post-uprising political transition and interim government',
      'Democratic reform and breaking dynastic politics',
      'Economic stability and garment industry concerns',
      'Military role in politics',
      'India relations and regional dynamics'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Barbados',
    type: 'country',
    country: 'Barbados',
    lat: 13.1931,
    lng: -59.5432,
    category: 'politics',
    summary: `Barbados made global headlines in November 2021 when it removed Queen Elizabeth II as head of state, becoming a republic while remaining in the Commonwealth. Prime Minister Mia Mottley led this historic transition, which enjoyed broad national consensus and occurred without rupturing institutional continuity. The move represented a symbolic but meaningful assertion of post-colonial sovereignty for a nation that had maintained Westminster parliamentary democracy throughout independence. Mottley's Barbados Labour Party (BLP) swept all 30 parliamentary seats in both 2018 and 2022 elections—unprecedented dominance that reflects her personal popularity and effective crisis management during COVID-19.

Barbadian politics is characterized by remarkable stability and democratic maturity. The two-party system alternates between the BLP and Democratic Labour Party, with both accepting electoral outcomes and democratic norms. Political debate is vigorous but rarely violent, institutions function effectively, and corruption levels are relatively low by regional standards. This political culture has produced one of the Caribbean's most successful societies, with high literacy, relatively low crime compared to neighbors, and strong social cohesion.

Yet challenges mount beneath the surface stability. The economy depends overwhelmingly on tourism, creating vulnerability to external shocks demonstrated painfully during the pandemic. Public debt levels are concerning, requiring careful fiscal management and difficult choices about public services. Climate change poses an existential threat to a small island nation, with coastal erosion, hurricane intensity, and water scarcity all worsening. Mottley has emerged as an international voice on climate justice, arguing that wealthy nations must support vulnerable small island developing states. Brain drain continues as educated Barbadians seek opportunities abroad. The question for Barbados is whether its strong political institutions and social capital can navigate the mounting economic and environmental pressures facing small island nations in the 21st century.`,
    issues: JSON.stringify([
      'Transition to republic and post-colonial identity',
      'Tourism dependency and economic vulnerability',
      'Public debt management and fiscal sustainability',
      'Climate change existential threat',
      'Brain drain and demographic challenges'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Belarus',
    type: 'country',
    country: 'Belarus',
    lat: 53.821888,
    lng: 28.417701,
    category: 'politics',
    summary: `Belarus under Alexander Lukashenko has become Europe's last dictatorship—and since 2020, one of its most repressive. Lukashenko has ruled since 1994, but the fraudulent 2020 presidential election and subsequent mass protests marked a turning point. When hundreds of thousands demanded he step down, he unleashed brutal crackdown: beatings, torture, mass arrests, and forced exile of opposition leaders like Sviatlana Tsikhanouskaya. The security forces' loyalty ensured regime survival, though only through terror. Any semblance of political pluralism has been eliminated.

The 2020 events also marked Belarus's complete integration into Russia's orbit. Lukashenko, previously balancing between Moscow and the West, became entirely dependent on Putin's support—financial, political, and security. Belarus allowed Russian forces to stage the invasion of Ukraine from its territory, making it a co-belligerent despite not officially joining the war. This has resulted in international isolation: Western sanctions, diplomatic expulsion, and Belarus's transformation into a pariah state. The regime has responded by strengthening ties with Russia, China, and other authoritarian governments.

Domestically, Belarus has witnessed the destruction of civil society. Independent media has been outlawed, journalists imprisoned, NGOs liquidated, and the Catholic Church pressured. Thousands of political prisoners languish in harsh conditions. The educated, urban middle class—the protest movement's core—faces a choice between exile, imprisonment, or acquiescence. Economically, Belarus's Soviet-style state sector struggles with sanctions and isolation, while regime cronies profit from sanctions-busting trade. The opposition-in-exile maintains some international profile but limited domestic leverage. For ordinary Belarusians, politics means living under surveillance in a police state while their country becomes increasingly absorbed into Russia's geopolitical project. The question is whether Lukashenko's regime can survive his eventual departure or whether Belarus faces another upheaval.`,
    issues: JSON.stringify([
      'Lukashenko dictatorship and 2020 protest crackdown',
      'Russia dependence and Ukraine war complicity',
      'Political prisoners and civil society destruction',
      'International sanctions and isolation',
      'Opposition-in-exile and domestic resistance'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Belgium',
    type: 'country',
    country: 'Belgium',
    lat: 50.785392,
    lng: 4.800448,
    category: 'politics',
    summary: `Belgian politics is defined by its complex federal structure dividing power between French-speaking Wallonia, Dutch-speaking Flanders, and bilingual Brussels. This linguistic division produces a fragmented party system—there are no national parties, only Flemish and Francophone versions—making coalition formation notoriously difficult. Belgium holds the world record for longest time without a federal government (541 days in 2010-2011), yet somehow the country functions reasonably well. The current federal government, led by Prime Minister Alexander De Croo, is a seven-party coalition spanning ideological and linguistic divides.

The fundamental political question is whether Belgium will hold together or gradually dissolve. Flemish nationalism has grown stronger, with parties like N-VA (New Flemish Alliance) calling for increased autonomy or eventual independence. Flanders is wealthier, economically more dynamic, and politically more conservative than Wallonia, creating resentment over transfer payments. The far-right Vlaams Belang has surged in Flemish politics, complicating the nationalist landscape with anti-immigration and anti-establishment themes. Meanwhile, Francophone parties defend the federal structure that guarantees their influence despite being a demographic minority.

Brussels adds complexity as a majority-Francophone city within Flemish territory that also serves as the de facto EU capital. European integration has produced benefits—EU institutions employ thousands and generate economic activity—but also resentments about bureaucracy and immigration. Coalition governments must balance competing regional demands, often producing policy paralysis. Recent challenges include terrorism threats that exposed intelligence failures, migration disputes that divided communities, and COVID-19 response that tested federal coordination. Yet Belgium's chocolate-box Brussels, prosperous Flanders, and resilient Wallonia muddle through, suggesting that institutional dysfunction and societal functioning can coexist—perhaps Belgium's greatest political trick.`,
    issues: JSON.stringify([
      'Flemish-Walloon linguistic division and nationalism',
      'Coalition government complexity and paralysis',
      'Far-right Vlaams Belang rise',
      'Federal structure sustainability',
      'Brussels European capital role and immigration'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Belize',
    type: 'country',
    country: 'Belize',
    lat: 17.202068,
    lng: -88.712962,
    category: 'politics',
    summary: `Belizean politics operates through stable Westminster parliamentary democracy with regular power alternation between the People's United Party (PUP) and United Democratic Party (UDP). Prime Minister John Briceño's PUP government, elected in 2020, focuses on economic recovery, reducing public debt, and addressing crime. Belize's small population (under 400,000) creates a politics of personal relationships where leaders are accessible and patronage networks matter. Both major parties share centrist economic policies, though the PUP leans slightly more toward social programs while the UDP emphasizes business development.

The country's unique position as Central America's only English-speaking nation and Commonwealth member shapes its politics. Belize maintains closer Caribbean cultural and political ties than Central American ones, participating in CARICOM while navigating complicated relationships with Spanish-speaking neighbors. The decades-long territorial dispute with Guatemala—which claims half of Belize—was finally resolved through a 2019 referendum agreeing to send the matter to the International Court of Justice. This has removed a major political irritant, though nationalistic sensitivities remain.

Economically, Belize depends heavily on tourism, agriculture, and offshore financial services—sectors vulnerable to external shocks. The COVID-19 pandemic devastated tourism, exposing fiscal fragility and requiring painful debt restructuring. The government has promoted sustainable tourism and protecting the Belize Barrier Reef, a UNESCO World Heritage site. Crime, particularly drug trafficking violence, has worsened as Mexican cartels use Belize as a transit route. Gang activity in Belize City creates security challenges disproportionate to the country's size. Environmental issues grow more pressing as climate change threatens coastal areas and reef ecosystems. For this small, young nation (independence only came in 1981), politics involves balancing development needs against environmental protection, managing diverse ethnic communities (Creole, Mestizo, Mayan, Garifuna), and maintaining sovereignty while building regional relationships.`,
    issues: JSON.stringify([
      'Guatemala territorial dispute and ICJ proceedings',
      'Tourism dependency and COVID-19 recovery',
      'Drug trafficking and crime',
      'Public debt management',
      'Climate change and reef protection'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Benin',
    type: 'country',
    country: 'Benin',
    lat: 10.324775,
    lng: 2.352018,
    category: 'politics',
    summary: `Benin was once celebrated as West Africa's democratic success story, with smooth transfers of power and vibrant civil society. That reputation has deteriorated under President Patrice Talon, first elected in 2016 and controversially re-elected in 2021 in a vote boycotted by opposition. Talon, a wealthy businessman, has systematically consolidated power through institutional manipulation, opposition marginalization, and media restrictions. Electoral law changes essentially barred opposition parties from competing, turning multi-party democracy into a managed system where only Talon-aligned parties can participate.

The political shift represents a broader trend of democratic backsliding in West Africa. Talon's defenders argue he has brought economic development, infrastructure investment, and reduced corruption compared to previous kleptocratic regimes. Cotonou's port has been modernized, digital services expanded, and cotton production—Benin's main export—improved. However, these gains come alongside growing authoritarianism: journalists harassed, civil society organizations restricted, and political opponents facing prosecution on dubious charges. The 2021 election saw internet shutdowns and violence, marking a departure from Benin's democratic norms.

Regionally, Benin faces spillover from Sahel instability, with Burkina Faso and Niger conflicts creating security threats along northern borders. Jihadist groups have conducted attacks in Benin's north, requiring military responses and creating displacement. The country has maintained ties with France while also engaging with China for infrastructure financing. Relations with Nigeria are critical given economic interdependence—Benin serves as a transit hub for Nigerian trade. Domestically, the Vodun (voodoo) religion and traditional culture remain important alongside Christianity and Islam. Youth unemployment drives emigration, particularly dangerous journeys to Europe. Benin's political challenge is whether Talon's economic development agenda can succeed without democratic legitimacy, or whether authoritarian drift will undermine the stability that enabled progress.`,
    issues: JSON.stringify([
      'Democratic backsliding and electoral manipulation',
      'Opposition marginalization and political restrictions',
      'Sahel security threats and northern jihadist attacks',
      'Economic development versus authoritarianism trade-off',
      'Youth emigration and unemployment'
    ]),
    topStories: JSON.stringify([])
  },
  {
    name: 'Bhutan',
    type: 'country',
    country: 'Bhutan',
    lat: 27.536685,
    lng: 90.040294,
    category: 'politics',
    summary: `Bhutan represents a unique political experiment: a monarchy that voluntarily transformed itself into a democracy. The Fourth King Jigme Singye Wangchuck initiated democratic reforms culminating in the 2008 constitution that established parliamentary democracy while maintaining the monarchy as a revered institution. The Fifth King, Jigme Khesar Namgyel Wangchuck, exercises moral authority rather than direct political power, embodying national unity while allowing democratic politics to function. This unusual top-down democratization has produced stable governance that balances tradition and modernity.

Bhutanese politics features regular peaceful elections between parties that differ more in personalities than ideologies. The country operates a two-party system—only the top two vote-getters in primaries advance to general elections—which produces clear governing majorities. The current government, led by Prime Minister Tshering Tobgay's People's Democratic Party, focuses on economic development, youth employment, and maintaining Bhutan's distinctive development philosophy of Gross National Happiness (GNH), which prioritizes holistic well-being over GDP growth alone.

Geopolitically, Bhutan navigates carefully between giant neighbors India and China. India essentially controls Bhutan's foreign policy through a special relationship providing security guarantees, economic assistance, and diplomatic support. Bhutan has no diplomatic relations with China, and their disputed border became a flashpoint during the 2017 Doklam standoff where Indian and Chinese troops faced off on Bhutanese territory. Climate change poses severe threats—glacial lake outburst floods, changing monsoon patterns—to this Himalayan kingdom. Youth unemployment and emigration challenge a country trying to preserve traditional Buddhist culture while modernizing economically. The experiment of whether a small Buddhist kingdom can maintain sovereignty, democracy, environmental sustainability, and cultural identity amid geopolitical and economic pressures defines Bhutanese politics.`,
    issues: JSON.stringify([
      'Balancing monarchy and democracy',
      'India-China geopolitical pressures and Doklam dispute',
      'Youth unemployment and emigration',
      'Gross National Happiness versus economic growth',
      'Climate change and glacial lake threats'
    ]),
    topStories: JSON.stringify([])
  }
]

async function insertPoliticsBatch1() {
  console.log('🚀 Starting Politics Batch 1 insertion (Afghanistan - Bhutan)')
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

  console.log(`\n✅ Batch 1 complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Errors: ${errorCount}`)
}

insertPoliticsBatch1()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
