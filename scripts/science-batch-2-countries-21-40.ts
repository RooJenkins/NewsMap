import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const scienceSummaries = [
  {
    name: 'Bulgaria',
    type: 'country' as const,
    country: 'Bulgaria',
    lat: 42.7339,
    lng: 25.4858,
    category: 'science',
    summary: `Bulgaria preserves fragments of its once-robust Soviet-era scientific establishment, but three decades of underfunding, brain drain, and economic stagnation have hollowed out research capacity. R&D spending hovers around 0.8% of GDP—respectable on paper but dramatically lower in real terms than during the communist period. The Bulgarian Academy of Sciences, established in 1869, remains the country's central research institution, though its influence and resources have declined precipitously since 1989.

Bulgarian researchers maintain strengths in mathematics, computer science, and theoretical physics—legacies of Cold War-era investment in these fields. Sofia University and the Technical University of Sofia conduct research in ICT, materials science, and engineering. Bulgaria's geographic position makes it a site for biodiversity research at the intersection of Mediterranean, Alpine, and continental ecosystems, and the country hosts several biosphere reserves that attract international ecologists.

The IT sector represents Bulgaria's most dynamic science-adjacent industry, with Sofia emerging as a regional tech hub. Companies like Telerik (now part of Progress) and Chaos Group (rendering software used in Hollywood) demonstrate Bulgarian technical talent. However, most cutting-edge development occurs for foreign clients rather than domestic innovation.

Brain drain devastates Bulgarian science catastrophically. EU accession in 2007 opened labor markets, and young researchers flood to Germany, the UK, and Western Europe for better pay and resources. Bulgaria loses an estimated 50,000 educated citizens annually—doctors, engineers, scientists—creating a demographic crisis that threatens the entire higher education system. Remaining researchers often juggle multiple jobs due to low academic salaries.

Recent scandals involving plagiarism and degree mills have tarnished Bulgarian academia's reputation. Corruption in research funding allocation and political interference in university leadership appointments further degrade scientific integrity. Bulgaria's scientific revival requires not just money but governance reforms, ethical standards enforcement, and stemming the relentless talent exodus.`,
    issues: JSON.stringify([
      "Catastrophic brain drain: 50,000 educated citizens lost annually to EU countries",
      "R&D spending 0.8% of GDP, much lower in real terms than Soviet era",
      "Academic plagiarism scandals and degree mills tarnishing reputation",
      "Corruption in research funding and political interference in universities",
      "Low academic salaries forcing researchers into multiple jobs"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Burkina Faso',
    type: 'country' as const,
    country: 'Burkina Faso',
    lat: 12.2383,
    lng: -1.5616,
    category: 'science',
    summary: `Burkina Faso's scientific infrastructure remains rudimentary, with R&D spending below 0.3% of GDP and research capacity concentrated in a few institutions in Ouagadougou. The University of Ouagadougou (now Université Joseph Ki-Zerbo) leads what limited research occurs, focusing primarily on agricultural science, public health, and environmental studies relevant to Sahel sustainability.

The country's most significant scientific contribution comes through participation in regional agricultural research networks. Burkina Faso hosts stations for the International Crops Research Institute for the Semi-Arid Tropics (ICRISAT) and conducts research on drought-resistant crops—sorghum, millet, cowpeas—essential for food security in the arid Sahel. Research on water conservation, desertification prevention, and sustainable land management addresses existential challenges for Burkinabè farmers.

Public health research focuses on malaria, meningitis (Burkina Faso lies in the "meningitis belt"), and maternal health. The Centre Muraz in Bobo-Dioulasso conducts infectious disease research and has participated in international clinical trials for malaria treatments and HIV therapies. However, facilities are basic, and most advanced analyses require sending samples to labs in Europe or South Africa.

Brain drain is severe—Burkinabè students who pursue advanced degrees in France, Senegal, or Côte d'Ivoire rarely return to research careers, finding better opportunities abroad. The country's ongoing security crisis, with jihadist insurgencies controlling parts of the north, has displaced populations and disrupted educational institutions, threatening what fragile research capacity exists.

The Centre National de la Recherche Scientifique et Technologique (CNRST) coordinates national research priorities, but with minimal funding and resources. Burkina Faso's scientific development requires peace, stability, sustained investment, and regional collaboration to address challenges too large for any single Sahel nation to tackle alone.`,
    issues: JSON.stringify([
      "Extremely low R&D spending below 0.3% of GDP",
      "Security crisis and jihadist insurgencies disrupting education and research",
      "Severe brain drain with advanced degree holders not returning",
      "Rudimentary research infrastructure and laboratory facilities",
      "Most research focused on survival challenges: drought, food security, disease"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Burundi',
    type: 'country' as const,
    country: 'Burundi',
    lat: -3.3731,
    lng: 29.9189,
    category: 'science',
    summary: `Burundi's scientific capacity is among Africa's weakest, a casualty of decades of ethnic conflict, extreme poverty, and political instability. R&D spending is negligible—likely below 0.1% of GDP—and the country lacks basic research infrastructure. The University of Burundi in Bujumbura maintains nominal science faculties, but with outdated equipment, minimal funding, and a brain drain that has stripped the institution of qualified faculty.

What limited research occurs focuses on agricultural productivity (coffee and tea are economic lifelines), public health (particularly malaria and malnutrition), and freshwater ecology of Lake Tanganyika. International organizations conduct most scientific work in Burundi, with minimal local participation beyond field assistance. The Institut des Sciences Agronomiques du Burundi (ISABU) attempts agricultural research but operates with resources inadequate for the challenges faced.

Burundi's location on Lake Tanganyika, one of the world's oldest and deepest lakes with extraordinary endemic species, should make it a biodiversity research hub. However, insecurity, lack of funding, and absence of research facilities mean most Lake Tanganyika research occurs from Tanzanian or Congolese shores. Burundian researchers who obtain advanced degrees—almost always abroad—rarely return, finding the country offers no research careers.

The 2015-2020 political crisis and subsequent repression further devastated higher education, with university closures, faculty purges, and student protests met with violence. Many academics fled to Rwanda, Tanzania, or further afield. The country's scientific community exists in diaspora more than domestically.

Burundi's scientific future requires fundamental political transformation and massive investment—neither likely in the near term. For now, the country remains almost entirely dependent on international organizations for any research conducted within its borders, representing a complete absence of indigenous scientific capacity.`,
    issues: JSON.stringify([
      "Negligible R&D spending likely below 0.1% of GDP",
      "Scientific infrastructure destroyed by decades of conflict",
      "Complete brain drain with virtually no researchers remaining",
      "Political repression devastating universities and academic freedom",
      "Total dependence on foreign organizations for research"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Cambodia',
    type: 'country' as const,
    country: 'Cambodia',
    lat: 12.5657,
    lng: 104.9910,
    category: 'science',
    summary: `Cambodia's scientific establishment is rebuilding from near-total annihilation under the Khmer Rouge, which systematically murdered intellectuals and destroyed educational institutions. Four decades later, R&D spending remains below 0.1% of GDP, and research capacity is extremely limited. The Royal University of Phnom Penh and the Institute of Technology of Cambodia lead what research exists, focusing on practical development challenges.

The country's research priorities center on rice cultivation (Cambodia's staple crop), Mekong River ecology and fisheries management, tropical disease control (particularly dengue fever and malaria), and landmine detection. The Cambodian Mekong University and the Royal Academy of Cambodia coordinate limited research initiatives, often in partnership with international organizations and foreign universities.

Angkor Wat and Cambodia's archaeological treasures attract international researchers studying Khmer civilization, conservation science, and restoration techniques, though Cambodian participation in these projects remains limited. The Authority for the Protection and Management of Angkor (APSARA) employs some Cambodian archaeologists and conservators, representing a rare domestic research capacity.

Brain drain is severe—Cambodian students who obtain scholarships for STEM education abroad (often in Thailand, Vietnam, Japan, or Australia) typically don't return, finding better opportunities elsewhere. The handful of PhD-level Cambodian researchers often work for international NGOs or development agencies rather than universities.

Cambodia's manufacturing sector, particularly garment factories, involves minimal R&D and relies entirely on foreign technology and management. Recent Chinese investment in infrastructure hasn't translated into research capacity building. The country's scientific future depends on sustained economic growth, educational investment, and a multi-generational commitment to rebuilding what the Khmer Rouge destroyed—a process still in its early stages decades later.`,
    issues: JSON.stringify([
      "Scientific establishment annihilated by Khmer Rouge, still recovering decades later",
      "Extremely low R&D spending below 0.1% of GDP",
      "Severe brain drain with scholarship students not returning",
      "Minimal research infrastructure and PhD-level researchers",
      "Manufacturing sector involves zero R&D, complete tech dependence"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Cameroon',
    type: 'country' as const,
    country: 'Cameroon',
    lat: 7.3697,
    lng: 12.3547,
    category: 'science',
    summary: `Cameroon's research landscape reflects its status as "Africa in miniature"—diverse ecosystems from rainforests to savannas—but chronic underfunding and governance problems constrain its scientific potential. R&D spending hovers around 0.5% of GDP, concentrated in agricultural research, tropical medicine, and biodiversity studies. The Universities of Yaoundé and Douala lead research efforts, though facilities and funding remain inadequate.

The International Institute of Tropical Agriculture (IITA) operates a major station in Cameroon, researching cassava, plantain, and cocoa improvement—crops critical for the region's food security and export economy. Cameroonian researchers participate in these programs, though leadership and funding come from international sources. The Institute of Agricultural Research for Development (IRAD) conducts applied agricultural research but struggles with budget constraints.

Cameroon's biodiversity offers extraordinary research opportunities. The country harbors rainforest populations of gorillas, chimpanzees, and forest elephants, making it important for primatology and conservation biology. However, most wildlife research involves foreign scientists, with Cameroonian participation limited by lack of training and resources. The Dja Faunal Reserve, a UNESCO World Heritage site, hosts ongoing ecological studies.

Public health research focuses on malaria, HIV/AIDS, and neglected tropical diseases. Cameroon participates in international clinical trials and epidemiological studies, with research centers in Yaoundé conducting vaccine trials. The country's linguistic duality (French and English) sometimes facilitates collaboration with both Francophone and Anglophone research networks.

Brain drain is substantial—Cameroonian scientists with PhDs often work in France, Belgium, Canada, or other African countries with better research conditions. Political instability in Anglophone regions since 2016 has disrupted universities and displaced academics. Corruption in research funding and political interference in university appointments further degrade scientific capacity. Cameroon's scientific potential remains largely untapped.`,
    issues: JSON.stringify([
      "R&D spending around 0.5% of GDP insufficient for needs",
      "Substantial brain drain to France, Belgium, Canada",
      "Political instability in Anglophone regions disrupting universities",
      "Corruption in research funding allocation",
      "Most biodiversity research led by foreigners, not Cameroonians"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Canada',
    type: 'country' as const,
    country: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    category: 'science',
    summary: `Canada operates one of the world's most productive research systems, with R&D spending around 1.7% of GDP and a tradition of scientific excellence that has produced 27 Nobel laureates. The country's universities—particularly Toronto, McGill, British Columbia, and Alberta—combine with federal research agencies to create a scientific ecosystem that punches above Canada's population would suggest.

The National Research Council of Canada, established in 1916, coordinates government research priorities and operates laboratories across the country. Canadian researchers excel in artificial intelligence (the "deep learning revolution" originated partly at the University of Toronto with Geoffrey Hinton's work), quantum computing (the Perimeter Institute in Waterloo is a global leader in theoretical physics), and Arctic research. The Canadian Space Agency, though smaller than NASA or ESA, contributes significantly to space robotics—the Canadarm is perhaps Canada's most famous technological export.

Canada's vast geography and climate extremes create unique research opportunities and necessities: permafrost dynamics and Arctic ecosystem change (critical for indigenous communities), boreal forest ecology, and freshwater science (Canada holds 20% of the world's freshwater). The country's medical research has been transformative—insulin was discovered at the University of Toronto in 1921, and Canadian researchers continue leading in diabetes, cancer immunotherapy, and stem cell science.

Challenges include brain drain to the United States (particularly for AI researchers courted by Google, Microsoft, and other tech giants), regional disparities in research funding (Ontario and Quebec dominate), and recent federal budget cuts affecting granting agencies. Canada's research strength in AI has attracted massive investment, but translating discoveries into Canadian companies rather than American ones remains difficult.

Immigration fills much of Canada's research workforce, particularly in STEM fields. The country's relatively open immigration policies and quality of life attract talent globally, though housing costs in Toronto and Vancouver strain postdoc budgets. Canada's scientific future appears solid but requires sustained funding and strategies to retain homegrown talent.`,
    issues: JSON.stringify([
      "Brain drain to US tech giants, especially AI researchers",
      "R&D spending declining from previous highs, recent funding cuts",
      "Regional disparities with Ontario and Quebec dominating research",
      "Challenge converting discoveries into Canadian companies vs American acquisitions",
      "Housing costs in major cities straining postdoc and early-career budgets"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Central African Republic',
    type: 'country' as const,
    country: 'Central African Republic',
    lat: 6.6111,
    lng: 20.9394,
    category: 'science',
    summary: `The Central African Republic possesses virtually no functional scientific infrastructure, a casualty of decades of instability, extreme poverty, and ongoing conflict. R&D spending is effectively zero, the University of Bangui operates sporadically when security permits, and the country has no research laboratories or scientific institutions of note. CAR represents one of the world's most complete scientific voids.

What little research occurs in CAR is conducted entirely by international organizations and foreign researchers, primarily focused on public health (particularly neglected tropical diseases like sleeping sickness and river blindness), wildlife conservation (CAR has populations of forest elephants, gorillas, and other endangered species), and conflict-related humanitarian research. The Institut Pasteur de Bangui, part of the international Pasteur network, conducts disease surveillance but has been repeatedly disrupted by violence.

The country's rainforests and biodiversity should make it an ecological research priority, but insecurity makes most regions inaccessible to researchers. The Dzanga-Sangha Protected Areas complex, a UNESCO World Heritage site, hosts some ongoing wildlife research when security permits, but studies are frequently interrupted by rebel activity. Most knowledge of CAR's ecosystems comes from brief surveys rather than sustained research programs.

There are no CAR nationals with significant research careers—the handful of Central Africans who obtain university education abroad do not return to a country offering no professional opportunities whatsoever. The state lacks capacity to support any scientific activity, focusing instead on basic survival and security challenges.

CAR's scientific future is non-existent under current conditions. Until fundamental peace and state-building occur—processes that could take decades—the country will remain entirely dependent on external actors for any research conducted within its borders, and even that is minimal due to danger and logistical impossibility.`,
    issues: JSON.stringify([
      "Zero functional scientific infrastructure due to ongoing conflict",
      "No research laboratories, institutions, or domestic researchers",
      "University of Bangui operates sporadically when security permits",
      "Biodiversity research prevented by insecurity and rebel activity",
      "Complete absence of CAR nationals in research careers"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Chad',
    type: 'country' as const,
    country: 'Chad',
    lat: 15.4542,
    lng: 18.7322,
    category: 'science',
    summary: `Chad's scientific capacity is minimal, constrained by extreme poverty, political instability, and geographic isolation. R&D spending is negligible—well below 0.1% of GDP—and research infrastructure barely exists. The University of N'Djamena maintains nominal science programs, but chronic underfunding, lack of equipment, and brain drain mean research output is virtually nonexistent.

What limited scientific work occurs in Chad focuses on survival challenges: desertification and Lake Chad's dramatic shrinkage (it has lost 90% of its surface area since the 1960s), pastoral systems and livestock management, and public health threats including malaria, meningitis (Chad lies in the meningitis belt), and malnutrition. International organizations conduct most research, with minimal Chadian participation beyond logistical support.

Chad's paleontology is globally significant—the Sahara preserves extraordinary fossil records, and the discovery of Sahelanthropus tchadensis in 2001, possibly the oldest known hominin species at 7 million years old, was found in Chad's Djurab Desert. However, this discovery was made by French researchers, and Chad lacks the expertise and facilities to study or protect its own paleontological heritage.

The country's oil industry, which began production in 2003, involves zero domestic R&D—all technology and expertise is foreign. Chad sends minimal students abroad for higher education, and those who go rarely return. The handful of Chadian researchers work primarily for international NGOs or remain in exile.

Chad's security situation, with Boko Haram insurgency in the Lake Chad Basin and periodic coups, makes sustained research impossible. The country's scientific development is not merely stalled but essentially absent. Building research capacity would require fundamental state transformation, decades of investment, and peace—none of which appear imminent. For the foreseeable future, Chad will remain one of the world's scientific blank spots.`,
    issues: JSON.stringify([
      "Negligible R&D spending well below 0.1% of GDP",
      "Virtually no research infrastructure or domestic researchers",
      "Security threats from Boko Haram and political instability",
      "Paleontological treasures studied only by foreign teams",
      "Oil industry involves zero domestic R&D or technology transfer"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Chile',
    type: 'country' as const,
    country: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    category: 'science',
    summary: `Chile has built Latin America's second-strongest scientific establishment (after Brazil), with R&D spending around 0.4% of GDP and strategic investments in areas leveraging the country's unique geography. The country's stability and exceptional astronomical observation conditions have made it a global hub for astronomy, while copper mining wealth has funded research in mining engineering, geology, and seismology.

Chile hosts roughly 40% of the world's astronomical observation capacity, with facilities including the Very Large Telescope (VLT), ALMA (Atacama Large Millimeter Array), and Las Campanas Observatory dotting the Atacama Desert's high-altitude, exceptionally clear skies. While these facilities are operated by international consortia (ESO, Carnegie Institution), Chilean astronomers have guaranteed observation time and the country has developed strong astronomical research programs. The University of Chile and Pontifical Catholic University of Chile excel in astrophysics.

Seismology and earthquake engineering are critical research priorities—Chile experiences frequent major earthquakes, and the 2010 Maule earthquake (magnitude 8.8) drove advances in building codes and early warning systems. The country's 4,000-kilometer coastline and subduction zone make it a natural laboratory for tectonic processes. Chilean researchers also study volcanology (the country has over 90 active volcanoes) and glaciology in Patagonia.

The National Commission for Scientific and Technological Research (CONICYT, now ANID) funds research through competitive grants, though total funding remains below OECD averages. Brain drain persists—Chilean researchers often complete PhDs abroad and struggle to find comparable positions at home. The 2019-2020 social protests and subsequent political upheaval have created uncertainty around research funding.

Chile's Antarctic research program, operating multiple bases including the Eduardo Frei station, contributes to climate science and Southern Ocean ecology. The country's science policy emphasizes applied research tied to economic priorities—mining, agriculture, aquaculture—sometimes at the expense of basic research. Chile's scientific strength is real but constrained by funding limitations and persistent inequality in access to research careers.`,
    issues: JSON.stringify([
      "R&D spending only 0.4% of GDP, below OECD standards",
      "Brain drain with PhD-trained researchers struggling to find home positions",
      "Political upheaval creating research funding uncertainty",
      "Emphasis on applied research potentially limiting basic science",
      "Inequality in access to research careers and STEM education"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'China',
    type: 'country' as const,
    country: 'China',
    lat: 35.8617,
    lng: 104.1954,
    category: 'science',
    summary: `China has transformed into a scientific superpower in barely three decades, with R&D spending exceeding 2.4% of GDP (over $500 billion annually in absolute terms) and research output now rivaling the United States. The country produces more scientific publications than any other nation, has built world-class infrastructure, and increasingly leads in fields from artificial intelligence to quantum communications. Yet questions persist about research quality, academic freedom, and the sustainability of state-directed scientific development.

China's research ecosystem is vast: Tsinghua and Peking Universities compete globally, the Chinese Academy of Sciences operates hundreds of research institutes, and massive investment has created centers of excellence in Shenzhen, Shanghai, and Beijing. Chinese researchers have made genuine breakthroughs—quantum satellite communications (the Micius satellite), CRISPR applications, and supercomputing (Sunway TaihuLight). The country has positioned itself at the forefront of AI research and development, with companies like Baidu, Alibaba, and Tencent operating significant research labs.

However, serious concerns shadow these achievements. Publication metrics may be inflated by quantity-over-quality incentives, citation manipulation, and predatory journals. High-profile cases of scientific fraud and plagiarism have damaged credibility. Political interference in research directions is pervasive—the Chinese Communist Party's priorities determine funding and research agendas, potentially distorting science. Academic freedom is severely constrained, with censorship on politically sensitive topics and surveillance of researchers.

The "reverse brain drain" that brought Chinese-trained scientists back from Western universities has slowed, complicated by US-China tensions and concerns about intellectual freedom. China's space program, COVID-19 origins research controversies, and military-civil fusion policies raise questions about transparency and the boundaries between civilian and military research.

China's scientific trajectory is undeniable—from peripheral to central player in global research. But whether quantity will translate to transformative quality, whether authoritarian control will ultimately constrain innovation, and whether China can lead without the open inquiry fundamental to science remains uncertain. The 21st century's scientific landscape will be profoundly shaped by how these tensions resolve.`,
    issues: JSON.stringify([
      "Academic freedom severely constrained by CCP control and censorship",
      "Publication quality concerns: citation manipulation, predatory journals, fraud cases",
      "Political interference directing research agendas and priorities",
      "US-China tensions slowing reverse brain drain and international collaboration",
      "Transparency questions around COVID origins, military-civil fusion research"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Colombia',
    type: 'country' as const,
    country: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    category: 'science',
    summary: `Colombia has built significant scientific capacity despite decades of internal conflict, with R&D spending around 0.3% of GDP and research strengths in biodiversity, tropical medicine, and agricultural science. The country's extraordinary biological richness—second only to Brazil in total species—drives much of its research focus, though violence and limited funding constrain scientific potential.

The National University of Colombia, University of the Andes, and University of Antioquia lead research efforts. Colombia's Amazon and Andean regions harbor immense biodiversity, making it a priority for ecology, taxonomy, and conservation biology. The Alexander von Humboldt Institute coordinates biodiversity research and has cataloged thousands of endemic species. Colombian researchers also excel in tropical medicine—diseases like leishmaniasis, dengue, and Chagas disease are endemic, necessitating local research capacity.

Coffee research is economically critical, with Cenicafé (the National Coffee Research Center) developing disease-resistant varieties and improving cultivation practices that benefit the entire industry. Colombia's geography—spanning rainforest to páramo ecosystems, Caribbean to Pacific coasts, Andes to Amazon—creates unique research opportunities across altitudinal and climatic gradients. Recent peace agreements with FARC have opened previously inaccessible regions to researchers, revealing unexplored biodiversity.

Challenges are substantial: brain drain (Colombian scientists often pursue opportunities in the United States or Europe), limited funding (0.3% of GDP is far below the Latin American average), and remaining security issues in some regions. Colombia's oil industry conducts minimal domestic R&D, relying on foreign technology. The science funding system, managed by Colciencias (now MinCiencias), operates through competitive grants but with inadequate resources.

Colombia's scientific future depends on sustained peace dividend investments and increasing R&D funding. The country's biodiversity represents irreplaceable research assets, but converting this potential into actual scientific leadership requires resources and stability that have historically been elusive.`,
    issues: JSON.stringify([
      "Low R&D spending at 0.3% of GDP, below Latin American average",
      "Persistent brain drain to US and Europe",
      "Oil industry involves minimal domestic R&D",
      "Some regions still inaccessible due to security concerns",
      "Inadequate funding through MinCiencias despite competitive grant system"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Costa Rica',
    type: 'country' as const,
    country: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    category: 'science',
    summary: `Costa Rica punches above its weight scientifically through strategic focus on biodiversity, ecology, and environmental science, leveraging the country's exceptional conservation ethos and biological richness. R&D spending sits around 0.4% of GDP—modest but effectively deployed. The country's decision to abolish its military in 1949 and invest instead in education and conservation has created a distinctive research culture.

The Organization for Tropical Studies (OTS), a consortium of universities headquartered in Costa Rica, operates three biological stations that have trained generations of ecologists. Costa Rica's national park system and conservation areas cover over 25% of the country's territory, creating natural laboratories. Researchers study everything from leafcutter ant behavior to cloud forest ecology to sea turtle nesting. The country's early commitment to conservation has made it a global leader in sustainable development research.

The University of Costa Rica (UCR) leads research in tropical medicine, seismology and volcanology (Costa Rica sits on the Pacific Ring of Fire with several active volcanoes), and agricultural science. The National Biodiversity Institute (INBio) pioneered bioprospecting approaches, attempting to convert biodiversity into pharmaceutical discoveries, though this model has had mixed success. Costa Rican researchers contribute significantly to climate change research, particularly on tropical forest carbon dynamics.

Costa Rica has attracted significant foreign direct investment in medical devices and pharmaceuticals, with companies like Boston Scientific and Baxter operating manufacturing facilities. However, this has not translated into substantial domestic R&D—most advanced development occurs abroad. The country's small size (5 million population) limits the scale of research infrastructure it can support.

Brain drain is moderate—Costa Rica's stability and quality of life encourage some researchers to stay, but opportunities in the United States and Europe still lure talent away. Recent fiscal pressures have threatened university budgets, and expanding research capacity requires funding increases that compete with other national priorities. Costa Rica's scientific niche—tropical ecology and conservation—is secure, but broader research diversification faces constraints.`,
    issues: JSON.stringify([
      "R&D spending at 0.4% of GDP limiting expansion beyond niche strengths",
      "Foreign companies' manufacturing doesn't translate to domestic R&D",
      "Small population limiting scale of research infrastructure",
      "Moderate brain drain to US and Europe",
      "Fiscal pressures threatening university and research budgets"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Croatia',
    type: 'country' as const,
    country: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    category: 'science',
    summary: `Croatia maintains a respectable research tradition despite its small size and recent turbulent history, with R&D spending around 1.0% of GDP and scientific strengths in fields ranging from mathematics to Adriatic marine biology. The country produced several notable scientists, including Nikola Tesla (though born in what is now Croatia, he worked primarily abroad), and continues generating research output disproportionate to its 4 million population.

The University of Zagreb, founded in 1669, leads Croatian research, with strengths in mathematics, chemistry, and biomedical sciences. The Ruđer Bošković Institute, Croatia's leading research center, conducts work in nuclear physics, materials science, and environmental research. Croatian mathematicians have particularly strong reputations, contributing to number theory and algebraic topology. The country's Adriatic coastline creates opportunities for marine biology and oceanography research.

Croatia's R&D ecosystem benefits from EU integration, with Croatian researchers increasingly participating in Horizon Europe and other EU research programs. This has brought funding and collaboration opportunities but also increased brain drain, as Croatian scientists can now easily work elsewhere in Europe. The country struggles to retain talent, particularly young researchers, who find better-paid positions in Germany, Austria, or the United Kingdom.

The Croatian Science Foundation, established in 2001, funds competitive research grants, but total resources remain limited. Croatia's pharmaceutical and technology sectors conduct some R&D, including companies like Pliva (now part of Teva) which developed azithromycin (Zithromax). However, most cutting-edge development has moved abroad following acquisitions.

Croatia's post-independence transition destroyed some research capacity, and demographic decline (the country's population is shrinking) threatens to undermine universities. Recent political interference in university governance and concerns about academic freedom have also damaged Croatia's research environment. The country's scientific future depends on reversing brain drain and increasing R&D investment, challenging goals for a small, middle-income nation.`,
    issues: JSON.stringify([
      "Brain drain to Germany, Austria, UK accelerated by EU integration",
      "R&D at 1.0% of GDP insufficient to compete for talent",
      "Population decline threatening university sustainability",
      "Recent political interference in university governance",
      "Pharmaceutical R&D moved abroad after company acquisitions"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Cuba',
    type: 'country' as const,
    country: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    category: 'science',
    summary: `Cuba has developed an improbable biomedical research capacity despite six decades of US embargo and economic crisis, driven by socialist government investment in healthcare and education. R&D spending is difficult to verify but estimated around 0.4-0.6% of GDP, with resources concentrated in biotechnology and pharmaceutical research. The country's scientific achievements—developing multiple vaccines, including a homegrown COVID-19 vaccine (Abdala)—demonstrate what centralized state investment can accomplish, though also highlighting the costs of isolation.

The Center for Genetic Engineering and Biotechnology (CIGB) in Havana has developed cancer treatments, vaccines, and diagnostic technologies. Cuban researchers created the world's first effective vaccine against Haemophilus influenzae type b (Hib), which has saved countless lives globally. The country's public health research, informed by its universal healthcare system, has produced insights into community medicine and preventive health that influence global health policy.

Cuba's emphasis on medical education has created an oversupply of doctors relative to its economy but also a research workforce. The Latin American School of Medicine (ELAM) has trained tens of thousands of doctors from across the developing world. Cuban researchers also work on tropical agriculture, climate adaptation, and marine biology—the island's position in the Caribbean creates unique ecological research opportunities.

However, Cuba's scientific isolation is profound. US embargo restrictions limit access to equipment, journals, and collaboration. Internet connectivity is limited and expensive, hampering research communication. Brain drain is catastrophic—Cuban scientists who travel abroad for conferences frequently don't return, seeking opportunities in the United States, Spain, or elsewhere. The economic collapse following Soviet Union's dissolution decimated research budgets.

Recent political repression and economic crisis have driven a new exodus of professionals, including scientists. Cuba's biotech success story is real but constrained by poverty, authoritarianism, and isolation. The country's scientific future depends on political and economic transformation that seems distant.`,
    issues: JSON.stringify([
      "US embargo limiting equipment, journals, and collaboration access",
      "Catastrophic brain drain with scientists defecting during travel",
      "Economic crisis and poverty constraining research resources",
      "Limited internet connectivity hampering research communication",
      "Recent repression driving new professional exodus"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Cyprus',
    type: 'country' as const,
    country: 'Cyprus',
    lat: 35.1264,
    lng: 33.4299,
    category: 'science',
    summary: `Cyprus operates a modest but growing research ecosystem, with R&D spending around 0.6% of GDP and scientific activity concentrated at the Universities of Cyprus and Cyprus University of Technology. The country's small size (1.2 million population) limits research scale, but EU membership has provided access to European research networks and funding that have accelerated development since 2004.

The Cyprus Institute, established in 2005, represents the country's most ambitious scientific project—a research center focusing on archaeology and cultural heritage (Cyprus has exceptional archaeological sites spanning millennia), climate and atmosphere research (the Eastern Mediterranean is a climate change hotspot), and computational sciences. The institute houses advanced research facilities including climate modeling capabilities and archaeogenetics labs.

Cyprus's Mediterranean position creates research opportunities in marine science, solar energy (the country has exceptional solar radiation levels), and earthquake engineering (Cyprus sits near active tectonic boundaries). Research on desalination and water management is critical—Cyprus faces severe water scarcity. The country also contributes to astronomy, with the Cyprus Space Exploration Organisation developing satellite technology.

Brain drain is moderate—Cypriot students typically study abroad (UK, Greece, US) for graduate degrees, and many don't return. However, the island's quality of life, EU membership, and English-language accessibility help retain some talent. The division of the island (northern Turkish-occupied zone, southern Greek-controlled Republic of Cyprus) fragments potential research collaboration and resources.

Recent economic crises (the 2013 banking collapse) devastated research budgets, though recovery is underway. Cyprus's research strategy emphasizes leveraging its geographic position and heritage, focusing on niche areas where small size isn't prohibitive. The country will likely remain a small but respectable player in Mediterranean and Eastern Mediterranean regional research networks.`,
    issues: JSON.stringify([
      "Small population (1.2M) limiting research scale and infrastructure",
      "Moderate brain drain with grad students not returning from abroad",
      "Island division fragmenting research collaboration",
      "2013 economic crisis devastated research budgets, recovery ongoing",
      "R&D at 0.6% of GDP below EU averages"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Czechia',
    type: 'country' as const,
    country: 'Czechia',
    lat: 49.8175,
    lng: 15.4730,
    category: 'science',
    summary: `Czechia (Czech Republic) boasts a proud scientific heritage dating to the Austro-Hungarian Empire, with R&D spending around 2.0% of GDP and research strengths in chemistry, physics, materials science, and life sciences. The country has produced notable scientists including chemist Jaroslav Heyrovský (Nobel Prize 1959 for polarography) and continues punching above its weight in research output.

Charles University in Prague, founded in 1348, is Central Europe's oldest university and remains Czechia's research powerhouse. The Czech Academy of Sciences coordinates a network of research institutes covering fields from astronomy to molecular biology. Czech researchers contribute significantly to international collaborations, including CERN (Czech physicists have worked on particle physics experiments for decades) and ESO astronomical observatories.

The country's industrial heritage—particularly in automotive (Škoda), aerospace, and manufacturing—supports applied research and engineering. Czechia's glass and crystal traditions have evolved into advanced optical and laser technologies. Prague's scientific infrastructure includes synchrotron facilities and high-performance computing centers that serve regional researchers.

Post-communist transition initially devastated Czech science through brain drain and funding cuts, but EU accession in 2004 brought recovery. However, challenges persist: salaries remain below Western European levels, driving continued talent loss to Germany, Austria, and beyond. Recent concerns about academic freedom have emerged, with political pressure on university leadership and research funding decisions. Corruption in grant allocation has also been documented.

Czechia's scientific community is relatively small (10 million population total), limiting the scale of big science projects it can lead independently. The country's research future depends on maintaining EU integration benefits while increasing domestic R&D funding and competitive salaries to retain talent. Czech science is solid but constrained by size and economic limitations relative to larger European neighbors.`,
    issues: JSON.stringify([
      "Continued brain drain to Germany, Austria due to salary gaps",
      "Recent concerns about academic freedom and political pressure",
      "Corruption in research grant allocation documented",
      "Small population limiting scale of major research projects",
      "R&D at 2.0% of GDP, need increases to compete for talent"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Democratic Republic of the Congo',
    type: 'country' as const,
    country: 'Democratic Republic of the Congo',
    lat: -4.0383,
    lng: 21.7587,
    category: 'science',
    summary: `The Democratic Republic of Congo possesses extraordinary scientific potential—the Congo Basin rainforest is the world's second-largest, biodiversity is immense, and mineral deposits include significant cobalt, copper, and coltan reserves—yet decades of conflict and state collapse have destroyed nearly all research capacity. R&D spending is negligible, universities barely function, and the country has essentially no indigenous scientific establishment.

The University of Kinshasa and University of Lubumbashi exist nominally but with such limited resources that research is nearly impossible. Faculty salaries often go unpaid for months, laboratories lack basic equipment, and libraries are devastated. The handful of Congolese with PhDs typically obtained them abroad and work for international organizations, NGOs, or have permanently emigrated. There is no functioning national research coordination body.

What scientific work occurs in DRC is conducted almost entirely by international teams, focusing on tropical medicine (particularly Ebola, which was first identified in DRC in 1976), rainforest ecology, and great ape conservation (DRC harbors populations of both mountain and lowland gorillas, bonobos, and chimpanzees). The Institut National pour l'Étude et la Recherche Agronomiques (INERA) attempts agricultural research but operates with virtually no resources.

The country's ongoing conflicts in eastern provinces make much of DRC inaccessible to researchers. Virunga National Park, a UNESCO World Heritage site and biodiversity hotspot, has seen rangers and researchers killed in violence. The mining sector, despite being economically dominant, involves zero domestic R&D—all technology and expertise is foreign, with minimal knowledge transfer.

DRC's scientific development requires fundamental political and economic transformation that could take generations. The country's forest and biodiversity are globally significant, but local capacity to study and protect these resources is essentially absent. Without peace, state-building, and massive investment, DRC will remain one of the world's largest scientific voids.`,
    issues: JSON.stringify([
      "Negligible R&D spending; universities barely functional",
      "Decades of conflict destroyed scientific infrastructure",
      "Virtually no indigenous researchers; complete foreign dependence",
      "Ongoing violence making much of country inaccessible to research",
      "Mining sector involves zero domestic R&D or tech transfer"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Denmark',
    type: 'country' as const,
    country: 'Denmark',
    lat: 56.2639,
    lng: 9.5018,
    category: 'science',
    summary: `Denmark consistently ranks among the world's most research-intensive nations, with R&D spending exceeding 3.0% of GDP and a scientific culture that emphasizes collaboration, innovation, and practical application. The country has produced 13 Nobel laureates and maintains research excellence across fields from renewable energy to quantum computing to biomedicine.

The University of Copenhagen, Technical University of Denmark (DTU), and Aarhus University lead Danish research. DTU particularly excels in engineering and applied sciences, contributing to Denmark's wind energy leadership—Danish companies like Vestas and Ørsted dominate the global wind power industry, supported by decades of R&D. Denmark's district heating systems, bicycle infrastructure, and sustainable urban design all reflect applied research translated into implementation.

Danish pharmaceutical giant Novo Nordisk invests heavily in diabetes and obesity research—the company's GLP-1 drugs like Ozempic and Wegovy represent major medical breakthroughs. Denmark's biotech sector is world-class, including companies like Genmab in cancer therapeutics. The country's compact size enables tight university-industry collaboration that accelerates innovation commercialization.

The Niels Bohr Institute maintains Denmark's physics tradition (Bohr won the Nobel Prize in 1922), contributing to quantum mechanics and currently working on quantum computing and information. Danish researchers also excel in archaeology and Viking studies, climate science (Greenland ice cores provide critical paleoclimate data), and marine biology.

Challenges are modest compared to most countries: Denmark's small population (6 million) limits the absolute scale of its research enterprise, and competition for talent from larger neighbors is intense. However, quality of life, research funding stability, and English-language proficiency help Denmark retain and attract researchers. The country's scientific model—high investment, practical focus, strong university-industry links—serves as an exemplar for others.`,
    issues: JSON.stringify([
      "Small population limiting absolute scale of research enterprise",
      "Competition for talent from larger neighbors (Germany, UK)",
      "High costs of living and taxation potentially deterring some researchers",
      "Dependence on continued political will to maintain 3%+ GDP spending",
      "Limited domestic market size for commercialization"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Djibouti',
    type: 'country' as const,
    country: 'Djibouti',
    lat: 11.8251,
    lng: 42.5903,
    category: 'science',
    summary: `Djibouti's scientific capacity is minimal, reflecting its small population (under 1 million) and economic constraints. R&D spending is negligible, and the country has virtually no research infrastructure. The University of Djibouti, established in 2006, offers undergraduate programs but conducts minimal research. Most scientific work in Djibouti is performed by foreign researchers or international organizations.

Djibouti's unique geography—positioned at the junction of the Red Sea and Gulf of Aden, atop the East African Rift—creates geological research opportunities. The country experiences high seismic and volcanic activity, including the active Ardoukoba volcano. The Afar region, which extends into Djibouti, represents one of the few places where mid-ocean ridge spreading occurs on land, making it scientifically significant for tectonic research. However, this research is conducted almost entirely by French, American, and other foreign geologists.

Marine biology research occurs around Djibouti's coral reefs and the Gulf of Tadjoura, though again led by international teams. The country's extreme climate (one of the world's hottest) and salt lakes (Lake Assal is the lowest point in Africa) provide opportunities for extremophile research, but local capacity to conduct such studies is absent.

Djibouti's strategic importance as a military base location (hosting French, American, Chinese, and other nations' facilities) has not translated into scientific collaboration or capacity building. The country sends minimal students abroad for higher education, and those who go rarely return to research careers that don't exist domestically.

Djibouti's scientific future depends on leveraging its geographic position and geological uniqueness to attract research partnerships that build local capacity. However, given economic priorities and limited resources, significant indigenous research development seems unlikely. The country will likely remain a site for foreign research rather than a producer of scientific knowledge.`,
    issues: JSON.stringify([
      "Negligible R&D spending and virtually no research infrastructure",
      "University of Djibouti conducts minimal research",
      "Geological uniqueness studied only by foreign researchers",
      "Military bases haven't led to scientific collaboration",
      "Too small and resource-constrained to develop research capacity"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Dominican Republic',
    type: 'country' as const,
    country: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    category: 'science',
    summary: `The Dominican Republic's scientific infrastructure is developing but remains limited, with R&D spending below 0.3% of GDP and research capacity concentrated at a handful of institutions. The country's universities, including the Autonomous University of Santo Domingo and Pontifical Catholic University, conduct modest research programs, primarily in public health, agriculture, and environmental science.

Research priorities reflect practical challenges: hurricane and tropical storm impacts (the Dominican Republic is frequently hit by Caribbean hurricanes), sustainable tourism development, tropical agriculture (particularly cacao, coffee, and organic farming), and coastal ecosystem management. The country's diverse ecosystems—from cloud forests in the central mountains to coral reefs along the coasts—provide research opportunities, but capacity to study them remains limited.

Public health research focuses on mosquito-borne diseases (dengue, Zika, chikungunya are endemic), HIV/AIDS, and maternal health. The Dominican Republic participates in international clinical trials and epidemiological studies, though primarily as a research site rather than research leader. The country's medical schools produce doctors, but few pursue research careers.

Brain drain is substantial—Dominican students who obtain advanced degrees abroad (primarily in the United States, Spain, or Puerto Rico) overwhelmingly don't return, finding better opportunities elsewhere. The country's economy, based on tourism, remittances, and free-trade zones, involves minimal R&D. Foreign companies operating in free-trade zones conduct no significant research within the Dominican Republic.

The National Council for Higher Education, Science and Technology (MESCYT) coordinates research policy and provides some competitive funding, but resources are minimal. The Dominican Republic's scientific development requires sustained investment, creation of research career pathways that can compete with emigration incentives, and building collaborations with regional partners. Current trajectory suggests slow progress rather than transformation.`,
    issues: JSON.stringify([
      "Very low R&D spending below 0.3% of GDP",
      "Substantial brain drain with advanced degree holders not returning",
      "Economy involves minimal R&D (tourism, remittances, free-trade zones)",
      "Limited research infrastructure and career pathways",
      "Primarily research site for foreign studies, not research leader"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  }
];

async function insertScienceSummaries() {
  console.log('Starting to insert SCIENCE summaries for countries 21-40...\n');

  for (const summary of scienceSummaries) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: summary.name,
            type: summary.type,
            category: summary.category
          }
        },
        update: {
          summary: summary.summary,
          issues: summary.issues,
          topStories: summary.topStories,
          lat: summary.lat,
          lng: summary.lng,
          storyCount: summary.storyCount,
          updatedAt: new Date()
        },
        create: summary
      });

      console.log(`✅ ${summary.name}: ${summary.summary.length} characters`);
    } catch (error) {
      console.error(`❌ Error inserting ${summary.name}:`, error);
    }
  }

  console.log('\n✅ Batch 2 complete! Countries 21-40 saved to database.');
}

insertScienceSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
