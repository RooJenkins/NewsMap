import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const scienceSummaries = [
  {
    name: 'Afghanistan',
    type: 'country' as const,
    country: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    category: 'science',
    summary: `Afghanistan's scientific landscape exists in fragments, sustained by a diaspora of researchers abroad and a skeleton crew of academics within its borders. Under Taliban rule since 2021, research institutions face severe restrictions, particularly affecting women scientists who comprised nearly 40% of university STEM faculty before the takeover. Kabul University, once Afghanistan's premier research institution with programs in geology and agricultural science, now operates under ideological constraints that limit international collaboration and curriculum content.

The country's most significant scientific contribution remains its role in archaeological and geological research. Afghanistan sits atop vast untapped mineral deposits—lithium, rare earth elements, copper—valued at over $1 trillion, making it a site of intense international geological survey work. The National Museum of Afghanistan preserves important archaeological specimens documenting human migration patterns through Central Asia, though the collection suffered devastating losses during decades of conflict.

Afghan researchers in exile continue work on traditional medicine documentation, earthquake prediction (the Hindu Kush experiences frequent seismic activity), and agricultural adaptation for arid climates. The Afghanistan Academy of Sciences, founded in 1979, maintains nominal operations but with drastically reduced capacity. Brain drain has been catastrophic—an estimated 80% of university-educated Afghans have fled since 2021.

Pre-2021, Afghanistan's R&D spending was less than 0.04% of GDP, already among the world's lowest. International development organizations had supported programs in sustainable agriculture, water management, and public health research, most now suspended. The country's scientific infrastructure—what little existed—has effectively collapsed, with laboratory equipment looted, databases lost, and research continuity broken. Young Afghans pursuing STEM education increasingly do so abroad, with no clear pathway to contribute domestically.`,
    issues: JSON.stringify([
      "Taliban restrictions on education decimating research capacity, especially for women scientists",
      "Brain drain: 80% of university-educated population fled since 2021",
      "R&D spending <0.04% of GDP, among world's lowest",
      "Complete collapse of scientific infrastructure and international collaboration",
      "Vast mineral resources ($1T+) unexplored due to security situation"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Albania',
    type: 'country' as const,
    country: 'Albania',
    lat: 41.1533,
    lng: 20.1683,
    category: 'science',
    summary: `Albania's scientific community is small but strategically rebuilding, leveraging EU integration processes to modernize research infrastructure after decades of communist-era isolation and 1990s turmoil. The University of Tirana, the country's flagship institution, leads research in seismology (Albania sits on active fault lines), marine biology in the Adriatic and Ionian seas, and medicinal plant biodiversity in the Albanian Alps.

R&D investment remains modest at approximately 0.15% of GDP, well below the EU average of 2.1%, but trending upward. The Albanian government is prioritizing STEM education as part of its EU accession roadmap, with new initiatives in biotechnology and environmental science. The Academy of Sciences of Albania, established in 1972, coordinates national research priorities and manages collaboration with international institutions.

Albania's most distinctive research strength lies in biodiversity—the country harbors over 3,200 plant species, with many endemic to the Balkans. The Albanian Alps and Prespa Lakes are hotspots for ecological research, attracting international teams studying climate change impacts on Mediterranean ecosystems. Albanian geologists also contribute significantly to earthquake prediction and infrastructure resilience research, critical for a country experiencing frequent seismic activity.

The brain drain challenge persists—Albanian researchers often complete PhDs abroad (particularly in Italy, Germany, and the US) and don't return. However, diaspora networks are strengthening, with Albanian-origin scientists in major universities maintaining collaborations with home institutions. Recent investments include a new science and technology park in Tirana and upgraded laboratory facilities at the University of Tirana's Faculty of Natural Sciences. Albania's scientific future hinges on its ability to retain talent and integrate into European research networks.`,
    issues: JSON.stringify([
      "Very low R&D spending at 0.15% of GDP (EU average: 2.1%)",
      "Severe brain drain with researchers not returning after foreign PhDs",
      "Limited research infrastructure after decades of isolation",
      "Need to meet EU research standards for accession process",
      "Small scientific workforce struggling to compete internationally"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Algeria',
    type: 'country' as const,
    country: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    category: 'science',
    summary: `Algeria stands as North Africa's most research-intensive nation, with R&D spending near 0.5% of GDP—highest in the Maghreb—and a sprawling network of universities and research centers built during the oil boom years. The country's scientific establishment, concentrated in Algiers, Oran, and Constantine, focuses heavily on energy research, desert ecology, and water management technologies critical for a nation that's 80% Sahara Desert.

The Centre de Développement des Énergies Renouvelables (CDER) leads Algeria's push into solar energy, leveraging the country's exceptional solar radiation levels (over 3,000 hours of sunshine annually) to develop concentrated solar power technologies. Algeria has set ambitious targets: 15,000 MW of renewable capacity by 2035. Research teams at the University of Science and Technology Houari Boumediene work on desalination innovations and petroleum engineering, reflecting Algeria's dual identity as an oil producer seeking to diversify.

Algerian astronomy also punches above its weight. The Algiers Observatory, established in 1890, maintains active collaborations with European space agencies, and Algerian researchers contributed to data analysis for the Planck space mission. The country's high-altitude, low-light pollution desert sites make it ideal for astronomical observations.

However, challenges loom large. Algeria's scientific community faces bureaucratic hurdles, limited international collaboration due to visa restrictions and diplomatic isolation, and brain drain to France and Canada. Publications in high-impact journals remain sparse. The country produces around 4,000 PhD graduates annually, but many work in administrative roles rather than active research. Recent political instability and economic pressures from volatile oil prices threaten research budgets. Algeria's scientific infrastructure is substantial but underutilized, a reflection of broader economic and governance challenges.`,
    issues: JSON.stringify([
      "Brain drain to France and Canada depleting research talent",
      "Limited international collaboration due to diplomatic isolation",
      "Bureaucratic obstacles hindering research productivity",
      "Economic dependence on oil prices threatening R&D budgets",
      "PhD graduates often diverted to administrative roles, not research"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Angola',
    type: 'country' as const,
    country: 'Angola',
    lat: -11.2027,
    lng: 17.8739,
    category: 'science',
    summary: `Angola's scientific ecosystem is nascent, emerging from 27 years of civil war (1975-2002) that obliterated most research infrastructure and displaced the academic workforce. R&D spending hovers around 0.01% of GDP, among the continent's lowest, though recent oil revenues have enabled modest investments in higher education and research capacity building.

The Agostinho Neto University in Luanda serves as the country's primary research hub, focusing on petroleum engineering, tropical medicine, and agricultural science. Angola's oil industry drives most applied research—understanding offshore drilling in the Kwanza Basin, improving oil recovery techniques, and managing environmental impacts of extraction. Chinese partnerships dominate technology transfer, particularly in telecommunications and energy infrastructure, though these arrangements prioritize commercial applications over fundamental research.

Angola's biodiversity offers unexplored research potential. The country spans multiple ecological zones—Atlantic coastline, Miombo woodlands, Kalahari desert fringes—with many species yet to be documented scientifically. However, lack of funding and expertise means most biodiversity research is conducted by international teams passing through, with limited Angolan participation. The Instituto de Investigação Veterinária monitors livestock diseases and zoonotic threats, critical work in a country rebuilding its agricultural sector.

The brain drain problem is acute—Angolans who obtain STEM degrees abroad rarely return, finding better opportunities in Portugal, Brazil, or South Africa. Angola sends students for training in Cuba, Brazil, and China, but reintegration remains challenging. The Ministry of Higher Education, Science, Technology and Innovation, created in 2020, signals government commitment to building research capacity, but progress is slow. Angola's scientific development parallels its broader post-war reconstruction: ambitious goals, limited resources, and a multi-generational timeline.`,
    issues: JSON.stringify([
      "Critically low R&D spending at 0.01% of GDP",
      "Scientific infrastructure destroyed during 27-year civil war",
      "Severe brain drain with STEM graduates not returning",
      "Research dominated by foreign oil companies with limited knowledge transfer",
      "Biodiversity research conducted mainly by foreign teams, not Angolans"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Argentina',
    type: 'country' as const,
    country: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    category: 'science',
    summary: `Argentina boasts Latin America's richest scientific tradition, with five Nobel laureates—more than any nation in the region—and a research culture dating to the early 20th century. The country's R&D spending fluctuates between 0.5-0.6% of GDP, respectable for the region though far below OECD averages, and chronic economic instability has created a boom-bust cycle that makes long-term research planning nearly impossible.

The National Scientific and Technical Research Council (CONICET), established in 1958, employs over 10,000 researchers across Argentina and remains the backbone of the country's scientific infrastructure. Argentine researchers excel in theoretical physics, paleontology (the country is rich in dinosaur fossils), agricultural biotechnology, and space technology. The Argentine National Atomic Energy Commission operates the country's research reactors and has developed indigenous nuclear technology for medical and industrial applications.

Argentina's astronomical observatories in the Andes—benefiting from high altitude and clear skies—host international collaborations. The Pierre Auger Observatory in Mendoza Province is the world's largest cosmic ray detector, a collaboration involving 400 scientists from 18 countries. Argentine researchers also lead Latin American efforts in Antarctic research, operating six year-round bases and contributing to climate science and glaciology.

Yet the brain drain hemorrhages talent relentlessly. Economic crises force researchers to seek positions abroad—the United States, Spain, and Germany are primary destinations. University salaries often require second jobs, and laboratory equipment shortages are chronic. Recent political turbulence under President Javier Milei has seen drastic budget cuts to CONICET and public universities, with hundreds of research positions unfilled. Argentina's scientific community fights for survival amid world-class capabilities and third-world funding realities.`,
    issues: JSON.stringify([
      "Chronic economic instability creating boom-bust research funding cycles",
      "Severe brain drain with researchers fleeing to US, Spain, Germany",
      "Recent drastic budget cuts to CONICET and universities under Milei government",
      "Laboratory equipment shortages and researcher salaries requiring second jobs",
      "R&D spending 0.5-0.6% of GDP, far below OECD standards"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Armenia',
    type: 'country' as const,
    country: 'Armenia',
    lat: 40.0691,
    lng: 45.0382,
    category: 'science',
    summary: `Armenia punches well above its weight in mathematics, physics, and astronomy, a legacy of Soviet-era investment in scientific education and an exceptionally strong STEM culture. The country's R&D spending sits around 0.2% of GDP—modest but leveraged effectively by a highly educated workforce and diaspora connections to research institutions worldwide.

The Byurakan Astrophysical Observatory, established in 1946 by Viktor Ambartsumian (one of the 20th century's leading astrophysicists), remains active in international collaborations, contributing to surveys of active galactic nuclei and stellar evolution research. Armenia's tradition in mathematics is formidable, producing Fields Medal-caliber talent despite the country's small size. The Institute of Mathematics of the National Academy of Sciences maintains research programs in algebraic geometry and mathematical physics.

Armenia has made strategic investments in IT and semiconductor research, building on Soviet-era electronics manufacturing expertise. Synopsys, the American chip design giant, operates a significant R&D center in Yerevan, and the Armenian tech sector is a rare post-Soviet success story. The country's "Silicon Mountains" initiative aims to position Armenia as a regional innovation hub, focusing on software development, cybersecurity, and quantum computing research.

Challenges persist: brain drain to Russia, the United States, and Europe is severe, with Armenia losing some of its brightest minds to better-funded opportunities abroad. The conflict with Azerbaijan has disrupted some research collaborations and diverted national resources toward defense. However, the Armenian diaspora maintains strong ties, funding scholarships and research positions, and the country's scientific culture—rooted in chess, mathematics competitions, and rigorous education—continues producing exceptional talent far exceeding what its size and GDP would predict.`,
    issues: JSON.stringify([
      "Severe brain drain to Russia, US, and Europe",
      "Low R&D spending at 0.2% of GDP limiting research capacity",
      "Conflict with Azerbaijan disrupting collaborations and diverting resources",
      "Small domestic market limiting commercialization of research",
      "Dependence on diaspora funding and foreign tech companies for research jobs"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Australia',
    type: 'country' as const,
    country: 'Australia',
    lat: -25.2744,
    lng: 133.7751,
    category: 'science',
    summary: `Australia ranks among the world's top 10 research nations, with R&D investment at 1.8% of GDP and a scientific culture that has produced 15 Nobel laureates. The country's geographic isolation has bred distinctive research strengths in ecology, marine biology, astronomy, and venomous species research, while its mineral wealth fuels world-class mining engineering and geoscience programs.

The Commonwealth Scientific and Industrial Research Organisation (CSIRO), Australia's national science agency, invented WiFi technology, developed extended-wear contact lenses, and pioneered the cervical cancer vaccine (Gardasil). Australia's Group of Eight universities—Melbourne, Sydney, Australian National University, Queensland, among others—compete globally in research output, with ANU particularly strong in theoretical physics and astronomy. The country operates the Square Kilometre Array radio telescope in Western Australia, the world's largest radio telescope project.

Australian researchers lead in climate science and Great Barrier Reef ecology, though findings often clash with government fossil fuel policies. The country's arid interior provides unique opportunities for astrobiology research and extreme environment biology. ANSTO, Australia's nuclear science organization, operates the OPAL research reactor for medical isotope production and materials science.

Challenges include distance from major research hubs, requiring significant travel for collaborations, and recent political interference in research funding priorities, particularly on climate science. The country's R&D investment has declined from a peak of 2.2% in the late 2000s, concerning scientists. Brain drain affects smaller institutions, with researchers migrating to Sydney and Melbourne or overseas. However, Australia remains a powerhouse in publishing output (top 10 globally) and attracts significant international student enrollment in STEM fields, sustaining its research workforce.`,
    issues: JSON.stringify([
      "R&D investment declining from 2.2% peak to 1.8% of GDP",
      "Political interference in research funding, especially climate science",
      "Geographic isolation increasing collaboration costs and complexity",
      "Brain drain from regional institutions to major cities or overseas",
      "Climate research findings clashing with government fossil fuel policies"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Austria',
    type: 'country' as const,
    country: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    category: 'science',
    summary: `Austria combines historical scientific prestige with cutting-edge contemporary research, investing 3.2% of GDP in R&D—among Europe's highest. The country has produced 21 Nobel laureates, including physicists Erwin Schrödinger and Wolfgang Pauli, and maintains a research ecosystem that prioritizes both fundamental science and industrial application.

The Institute of Science and Technology Austria (ISTA), established in 2009, has rapidly ascended to global prominence, recruiting elite researchers in quantum physics, neuroscience, and theoretical biology. Austria's approach mirrors Rockefeller University—small, selective, interdisciplinary, and focused on basic research without teaching obligations. ISTA has already produced two ERC Advanced Grant recipients and consistently ranks in Nature Index's top 100 institutions.

Vienna hosts major research institutions including the Austrian Academy of Sciences, the Technical University of Vienna (strong in materials science and quantum computing), and the Medical University of Vienna, which pioneered antiseptic surgical techniques in the 19th century. Austrian researchers contribute significantly to CERN, with Austria providing substantial funding and personnel to the Large Hadron Collider project. The country's compact size enables tight university-industry partnerships, particularly in automotive engineering (supporting the massive AVL and Magna Steyr operations) and pharmaceutical research.

Austria also excels in alpine ecology and climate research, with monitoring stations tracking glacial retreat and avalanche prediction systems. The country's science policy emphasizes gender equity—over 40% of STEM PhDs go to women, above European averages. Austrian quantum physicist Anton Zeilinger won the 2022 Nobel Prize in Physics for quantum entanglement work, reaffirming the country's strength in fundamental physics. Austria's challenge is maintaining research funding amid economic pressures while competing with larger neighbors for talent.`,
    issues: JSON.stringify([
      "Competition with larger neighbors (Germany, Switzerland) for top talent",
      "High R&D costs in expensive Alpine living environment",
      "Small domestic market limiting commercialization scale",
      "Dependence on German-language scientific networks potentially limiting reach",
      "Pressure to maintain 3.2% GDP R&D spending during economic downturns"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Azerbaijan',
    type: 'country' as const,
    country: 'Azerbaijan',
    lat: 40.1431,
    lng: 47.5769,
    category: 'science',
    summary: `Azerbaijan's scientific establishment remains shaped by Soviet institutional structures, with R&D spending around 0.2% of GDP concentrated heavily in oil and gas technology research. The Azerbaijan National Academy of Sciences, founded in 1945, coordinates most research activity, though its influence has diminished since independence as oil revenues haven't translated into substantial science investment.

Petroleum engineering dominates Azerbaijan's applied research, serving the needs of BP, SOCAR, and other companies extracting Caspian Sea oil and gas. Baku State University hosts the country's most active research programs, including geophysics (Azerbaijan experiences frequent earthquakes), chemistry, and Caspian Sea ecology. The Shamakhi Astrophysical Observatory, established in 1960, continues solar and stellar research despite aging equipment.

Azerbaijan's most notable recent scientific initiative is the development of satellite technology—the country launched its first satellite, Azerspace-1, in 2013, and operates a space monitoring ground station. This represents rare post-Soviet scientific ambition, though heavily dependent on foreign technology partners. Research on mud volcanoes (Azerbaijan has over 400, more than half the world's total) attracts international geologists studying methane seepage and subsurface processes.

The country faces severe challenges: brain drain to Russia, Turkey, and Western countries; limited international collaboration due to political isolation; autocratic governance restricting academic freedom; and minimal private sector R&D. Publications in high-impact journals are rare, and most research remains regionally focused. The government's "Science Development Strategy 2020-2025" promised increased funding and modernization, but implementation has been slow. Azerbaijan's scientific trajectory will likely remain tied to its hydrocarbon economy unless diversification occurs.`,
    issues: JSON.stringify([
      "Very low R&D spending at 0.2% of GDP, mostly oil/gas focused",
      "Severe brain drain to Russia, Turkey, and Western countries",
      "Autocratic governance restricting academic freedom",
      "Limited international collaboration due to political isolation",
      "Oil wealth not translating into science investment or diversification"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Bangladesh',
    type: 'country' as const,
    country: 'Bangladesh',
    lat: 23.6850,
    lng: 90.3563,
    category: 'science',
    summary: `Bangladesh's most celebrated scientific achievement—the development of oral rehydration therapy (ORT) by the International Centre for Diarrhoeal Disease Research, Bangladesh (icddr,b) in the 1960s—has saved tens of millions of lives globally and remains the country's greatest contribution to global health. Yet despite this landmark success, Bangladesh's R&D spending remains below 0.3% of GDP, limiting its capacity to build on this legacy.

The country's scientific community focuses pragmatically on challenges facing a densely populated, climate-vulnerable nation: flood prediction and management, cyclone early warning systems, arsenic contamination in groundwater (affecting millions of tube wells), and rice cultivation in flood-prone areas. The Bangladesh Rice Research Institute has developed flood-resistant rice varieties critical for food security, while the Bangladesh Centre for Advanced Studies conducts climate adaptation research that informs vulnerable communities worldwide.

Dhaka University and Bangladesh University of Engineering and Technology (BUET) lead research in physics, materials science, and engineering. Bangladeshi scientists, including Nobel Peace Prize laureate Muhammad Yunus (economics, though educated in science), have gained recognition, but the country struggles with brain drain—talented graduates often pursue opportunities in the United States, United Kingdom, or Middle East.

The garment industry, Bangladesh's economic pillar, has spurred textile engineering and labor productivity research, though most innovation is imported. Recent government initiatives aim to build a "Digital Bangladesh" with investments in ICT research and technology parks, but progress is slow. Pharmaceutical research has grown, with companies like Square Pharmaceuticals conducting drug development, though mostly generic formulations. Bangladesh's scientific potential is constrained by infrastructure deficits, political instability, and limited funding, yet its researchers have proven resourceful in addressing real-world problems with global implications.`,
    issues: JSON.stringify([
      "Very low R&D spending below 0.3% of GDP",
      "Severe brain drain with STEM graduates leaving for US, UK, Middle East",
      "Limited research infrastructure and chronic underfunding",
      "Political instability disrupting long-term research planning",
      "Arsenic groundwater crisis requiring massive ongoing research effort"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Belarus',
    type: 'country' as const,
    country: 'Belarus',
    lat: 53.7098,
    lng: 27.9534,
    category: 'science',
    summary: `Belarus inherited substantial Soviet-era research infrastructure, particularly in physics, mathematics, and materials science, but political repression since the disputed 2020 election has triggered an unprecedented scientific exodus. R&D spending sits around 0.6% of GDP, but the authoritarian Lukashenko regime's crackdown on academic freedom has devastated independent research.

The National Academy of Sciences of Belarus, established in 1929, once coordinated world-class research in laser physics, optics, and semiconductor technology. The Institute of Physics developed laser systems used internationally, and Belarusian mathematicians contributed to number theory and computational mathematics. The country's IT sector, centered in Minsk's High-Tech Park, grew rapidly in the 2010s, hosting R&D centers for global companies like EPAM Systems.

Post-2020, the scientific landscape has collapsed. Thousands of researchers fled political persecution—estimates suggest 20-30% of the academic workforce has emigrated to Poland, Lithuania, Ukraine (before the war), and Western countries. Universities purged faculty involved in protests; the regime arrested scientists for political activity. International collaborations withered as Western sanctions took effect and researchers cut ties with Belarusian institutions seen as regime-complicit.

What remains is a hollowed-out scientific establishment serving state priorities and isolated from global research networks. The regime has redirected research toward import substitution technologies due to sanctions and propaganda-aligned projects. Belarusian researchers in exile continue work abroad, but the country's domestic scientific capacity may take decades to recover, if political conditions change. The brain drain represents not just lost talent but dismantled research groups and broken institutional memory.`,
    issues: JSON.stringify([
      "Mass exodus of 20-30% of researchers since 2020 due to political repression",
      "Academic freedom destroyed by Lukashenko regime crackdowns",
      "International collaborations collapsed due to sanctions and isolation",
      "Universities purged of faculty involved in protests",
      "Domestic research capacity hollowed out, requiring decades to rebuild"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Belgium',
    type: 'country' as const,
    country: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    category: 'science',
    summary: `Belgium's scientific output defies its small size, with R&D investment at 3.1% of GDP and a research culture that embraces international collaboration—over 70% of Belgian research publications involve foreign co-authors, among the world's highest rates. The country has produced multiple Nobel laureates in medicine, chemistry, and physics, and hosts major European and international research institutions.

The Katholieke Universiteit Leuven (KU Leuven) consistently ranks as Europe's most innovative university, excelling in nanotechnology, stem cell research, and pharmaceutical development. IMEC, the nanoelectronics research center in Leuven, is a global leader in semiconductor R&D, developing next-generation chip architectures for the entire electronics industry. Belgium's compact geography enables tight university-industry collaboration, particularly with pharmaceutical giants Janssen (Johnson & Johnson) and UCB.

Belgium hosts the European Space Agency (ESA) headquarters in Brussels and major CERN operations. Belgian researchers contribute disproportionately to international projects, leveraging the country's position at the heart of European research networks. The country's linguistic division (Flemish/French) creates parallel research systems—KU Leuven in the north, Université catholique de Louvain in the south—but also enables connections to both Germanic and Romance-language scientific communities.

The Flemish region invests particularly heavily in R&D (over 3.5% of GDP), while Wallonia lags slightly behind. Belgian researchers excel in climate science (the Royal Meteorological Institute has contributed significantly to Antarctic research), oncology, and sustainable chemistry. The country's challenge is attracting and retaining top talent despite high tax rates and administrative complexity. However, Brussels' international character and quality of life help Belgium compete for researchers, and its scientific output per capita ranks among the world's highest.`,
    issues: JSON.stringify([
      "Linguistic/regional divide creating parallel research systems",
      "High tax rates and administrative complexity challenging talent retention",
      "Small domestic market limiting commercialization scale",
      "Competition with larger neighbors for research funding",
      "Walloon region lagging behind Flanders in R&D investment"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Belize',
    type: 'country' as const,
    country: 'Belize',
    lat: 17.1899,
    lng: -88.4976,
    category: 'science',
    summary: `Belize's scientific infrastructure is minimal for a nation of 400,000, but its extraordinary biodiversity—the Mesoamerican Barrier Reef, dense tropical forests, extensive cave systems—makes it a living laboratory for international research teams. With R&D spending below 0.1% of GDP and no major research universities, Belizean science operates primarily through collaborations with foreign institutions and environmental NGOs.

The University of Belize, established in 2000, offers undergraduate STEM programs but lacks significant research capacity. Most scientific research in Belize focuses on marine biology, coral reef ecology, and Mayan archaeology. The Belize Barrier Reef Reserve System, a UNESCO World Heritage site, hosts ongoing studies on coral bleaching, reef resilience, and fish population dynamics, with research teams from the United States, Mexico, and Europe conducting long-term monitoring.

The Environmental Research Institute at the University of Belize partners with international organizations on climate change impacts, deforestation monitoring, and sustainable agriculture. Belize's extensive cave systems, including the Actun Tunichil Muknal caves with Mayan archaeological remains, attract speleologists and archaeologists. The country also serves as a site for tropical disease research, particularly studying dengue fever and Zika virus transmission.

Belize sends its few STEM students to universities in the United States, Mexico, or Jamaica, with minimal return rates. There are no advanced research facilities within the country—all laboratory-intensive work must be conducted abroad or in field stations operated by foreign institutions. The Belizean government has recognized science as a development priority, but implementation remains nascent. For now, Belize's scientific contribution is primarily as a research site rather than a producer of scientific knowledge, a common pattern for small Caribbean nations.`,
    issues: JSON.stringify([
      "Extremely low R&D spending below 0.1% of GDP",
      "No major research universities or advanced laboratory facilities",
      "Total dependence on foreign institutions for scientific research",
      "STEM students studying abroad with minimal return rates",
      "Scientific contribution limited to being a research site, not knowledge producer"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Benin',
    type: 'country' as const,
    country: 'Benin',
    lat: 9.3077,
    lng: 2.3158,
    category: 'science',
    summary: `Benin's scientific ecosystem centers on agricultural research, reflecting the country's economic dependence on cotton, palm oil, and subsistence farming. R&D spending hovers around 0.2% of GDP, with most research conducted through regional collaborations and development-focused international partnerships rather than domestic capacity building.

The University of Abomey-Calavi, Benin's largest institution, conducts research in agronomy, tropical medicine, and environmental science. The International Institute of Tropical Agriculture (IITA) operates a significant station in Benin, researching cassava, yam, and cowpea improvement—crops critical for West African food security. These programs have developed disease-resistant crop varieties that benefit millions across the region.

Benin's scientific infrastructure suffers from chronic underfunding, limited laboratory equipment, and brain drain—Beninese researchers with PhDs often find better opportunities in Côte d'Ivoire, Senegal, or France. The country's French colonial legacy means most advanced training occurs in French universities, creating dependency on external networks. The National Institute for Scientific and Technical Research (IRST) coordinates government research priorities but operates with minimal resources.

Public health research focuses on malaria, tuberculosis, and maternal health, with Beninese researchers participating in multinational clinical trials and epidemiological studies. The country's location in the malaria-endemic zone makes it a site for vaccine trials and antimalarial drug testing. Benin also hosts research on voodoo traditional medicine, attempting to document indigenous knowledge systematically.

The government's 2017 Action Plan for Scientific Research aimed to increase R&D spending and modernize universities, but progress has been slow. Benin's scientific future depends heavily on regional integration through the West African Science Service Centre on Climate Change and broader African Union initiatives, as the country lacks the scale to develop major research capacity independently.`,
    issues: JSON.stringify([
      "Very low R&D spending at 0.2% of GDP with chronic underfunding",
      "Severe brain drain with PhDs leaving for Côte d'Ivoire, Senegal, France",
      "Limited laboratory infrastructure and equipment",
      "Dependence on foreign institutions for advanced research",
      "Too small to develop major research capacity independently"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Bhutan',
    type: 'country' as const,
    country: 'Bhutan',
    lat: 27.5142,
    lng: 90.4336,
    category: 'science',
    summary: `Bhutan approaches science through the lens of its unique "Gross National Happiness" development philosophy, prioritizing environmental sustainability and traditional knowledge alongside modern research. With a population under 800,000 and R&D spending below 0.1% of GDP, Bhutan's scientific capacity is minimal, but its environmental commitments have created distinctive research opportunities.

The Royal University of Bhutan, established in 2003 through consolidation of scattered colleges, leads the country's limited research efforts. Focus areas include Himalayan ecology, climate change impacts on glacial lakes (Bhutan faces serious glacial lake outburst flood risks), medicinal plant biodiversity, and sustainable agriculture. Bhutan's constitutional mandate to maintain 60% forest cover makes it a carbon-negative country, attracting international researchers studying forest conservation and carbon sequestration.

Bhutan's isolation and limited infrastructure pose challenges for scientific development. The country has no advanced research laboratories, and all specialized analyses must be conducted in India, Thailand, or further abroad. The handful of Bhutanese researchers with PhDs typically trained in India, Australia, or Japan. Brain drain is moderate—some return due to cultural ties and government incentives, but research opportunities remain extremely limited.

The National Environment Commission leads climate and biodiversity research, often partnering with international organizations. Bhutan's glacial lake monitoring system, developed with support from UNDP and Austria, represents practical applied science addressing critical national risks. Traditional medicine research attempts to validate indigenous healing practices scientifically, though with limited resources.

Bhutan's government recognizes science as essential for development but faces trade-offs between modernization and cultural preservation. The country's scientific trajectory will likely remain focused on environmental monitoring, sustainable development, and niche areas where its unique policies create research opportunities, rather than broad scientific capacity building.`,
    issues: JSON.stringify([
      "Extremely low R&D spending below 0.1% of GDP",
      "Population too small (under 800,000) to sustain major research capacity",
      "No advanced research laboratories in-country",
      "Geographic isolation and limited infrastructure",
      "Few researchers with PhDs; most research done by foreign teams"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Bolivia',
    type: 'country' as const,
    country: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    category: 'science',
    summary: `Bolivia's scientific landscape reflects the country's extreme geography and resource endowments—from Andean peaks exceeding 6,000 meters to Amazon rainforest—creating research opportunities in high-altitude physiology, biodiversity, and lithium extraction. However, R&D spending remains below 0.2% of GDP, political instability disrupts long-term planning, and chronic underfunding leaves most research infrastructure in disrepair.

The Universidad Mayor de San Andrés in La Paz conducts research on high-altitude adaptation, studying populations living above 3,500 meters—the world's highest major urban center. Bolivian researchers contribute to understanding hypoxia adaptation, mountain glaciology, and climate change impacts on Andean ecosystems. The country's Salar de Uyuni, the world's largest salt flat and home to massive lithium deposits, attracts international geologists and materials scientists studying battery technology and mineral extraction.

Bolivia's biodiversity ranks among the world's highest, with ecosystems ranging from cloud forests to wetlands, but research capacity to study it remains limited. Most biodiversity surveys involve foreign researchers, with minimal Bolivian participation beyond field assistance. The brain drain is severe—Bolivian scientists with advanced degrees often work in Argentina, Chile, Brazil, or Spain, finding better funding and stability abroad.

Political turmoil and economic volatility have decimated research continuity. The nationalization of industries under Evo Morales included attempts to develop indigenous lithium battery technology, but projects stalled due to lack of technical expertise. Recent governments have deprioritized science funding. The Bolivian Academy of Sciences exists but with minimal influence or resources.

Bolivia's scientific potential—tied to its unique geography and mineral wealth—remains largely untapped. Without political stability, sustained funding increases, and infrastructure investment, the country will continue as a site for foreign researchers rather than a producer of scientific knowledge.`,
    issues: JSON.stringify([
      "Very low R&D spending below 0.2% of GDP",
      "Political instability disrupting research continuity",
      "Severe brain drain with scientists working in Argentina, Chile, Spain",
      "Research infrastructure in disrepair from chronic underfunding",
      "Lithium resources undeveloped due to lack of technical expertise"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Bosnia and Herzegovina',
    type: 'country' as const,
    country: 'Bosnia and Herzegovina',
    lat: 43.9159,
    lng: 17.6791,
    category: 'science',
    summary: `Bosnia and Herzegovina's scientific infrastructure, once integrated into Yugoslav research networks, has struggled to recover from the devastating 1992-1995 war and subsequent political fragmentation. R&D spending barely reaches 0.2% of GDP, and the country's complex governance structure—divided between Republika Srpska and the Federation of Bosnia and Herzegovina—creates parallel, poorly coordinated research systems.

The University of Sarajevo, once a prominent regional institution, maintains research programs in engineering, medicine, and natural sciences, but with aging equipment and limited international collaboration. Bosnian researchers focus on practical challenges: landmine detection technology (the country remains heavily mined from the war), water resource management, and seismology (Bosnia experiences moderate earthquake activity). The International University of Sarajevo, established in 2004 with Turkish support, brings newer infrastructure but limited research output.

Brain drain devastates Bosnian science—an estimated 150,000 educated citizens left during and after the war, and the outflow continues as young graduates seek opportunities in EU countries, particularly Austria, Germany, and Slovenia. The diaspora maintains some connections, but return rates are minimal. Political paralysis prevents coherent science policy, and the education system's ethnic divisions (separate curricula for Bosniak, Croat, and Serb students) fragment potential research communities.

Some bright spots exist: Bosnian mathematicians maintain a strong tradition, and researchers contribute to European projects through association agreements. Archaeological research on medieval Bosnian kingdoms and Ottoman-era sites attracts international teams. However, overall scientific capacity has regressed to a fraction of pre-war levels.

Bosnia's scientific recovery requires political stability, substantial funding increases, and European integration to access research networks. Current trajectories suggest continued stagnation, with research capacity existing in isolated pockets rather than functioning as a coherent national system.`,
    issues: JSON.stringify([
      "Extremely low R&D spending at 0.2% of GDP",
      "Scientific infrastructure devastated by war, poorly recovered",
      "Complex governance fragmenting research coordination",
      "Massive brain drain of 150,000+ educated citizens",
      "Political paralysis preventing coherent science policy"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Botswana',
    type: 'country' as const,
    country: 'Botswana',
    lat: -22.3285,
    lng: 24.6849,
    category: 'science',
    summary: `Botswana stands out in sub-Saharan Africa for good governance and economic stability, but these strengths haven't translated into substantial scientific capacity. R&D spending hovers around 0.5% of GDP—higher than most African nations—yet research output remains limited. The University of Botswana in Gaborone serves as the country's primary research institution, focusing on arid land ecology, wildlife management, and public health.

Botswana's most distinctive research relates to its diamond wealth and conservation efforts. The Okavango Research Institute studies the unique Okavango Delta ecosystem, a UNESCO World Heritage site where annual floods create one of Africa's most important wetland habitats. Research on elephant populations, predator-prey dynamics, and human-wildlife conflict management attracts international collaborators. The Botswana International University of Science and Technology (BIUST), established in 2012, aims to build STEM capacity but still developing research programs.

HIV/AIDS research dominates Botswana's health science, as the country has one of the world's highest prevalence rates (though much improved from peaks in the 2000s). Botswana partnered with Harvard Medical School to establish the Botswana-Harvard AIDS Institute Partnership, conducting clinical trials and epidemiological research that has influenced global HIV treatment protocols.

Challenges include a small population (2.3 million), brain drain to South Africa and abroad, and limited industrial R&D due to economic dependence on diamond mining. Most advanced analyses require sending samples overseas. The government's Vision 2036 development plan includes science and technology goals, but implementation has been slow.

Botswana's scientific future depends on leveraging its stability and resources to build research capacity that transcends its small scale, likely through regional collaborations and niche specializations in areas like arid ecology and infectious disease research.`,
    issues: JSON.stringify([
      "Small population (2.3 million) limiting research workforce",
      "Brain drain to South Africa and abroad",
      "Limited industrial R&D due to diamond-dependent economy",
      "Most advanced research requiring international partnerships",
      "Vision 2036 science goals slow to implement"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Brazil',
    type: 'country' as const,
    country: 'Brazil',
    lat: -14.2350,
    lng: -51.9253,
    category: 'science',
    summary: `Brazil operates Latin America's largest scientific establishment, with R&D spending around 1.3% of GDP and over 90,000 PhD-level researchers. The country has built impressive research capacity in tropical agriculture, aerospace engineering, biofuels, and biodiversity—leveraging the Amazon's extraordinary biological richness—but chronic underfunding, political interference, and brain drain constrain its potential.

The São Paulo Research Foundation (FAPESP) operates with guaranteed funding from state tax revenues, creating an island of stability that has made São Paulo Brazil's scientific powerhouse. The University of São Paulo (USP) ranks as Latin America's top university, excelling in fields from particle physics to genomics. Brazil's National Institute for Space Research (INPE) monitors Amazon deforestation via satellite, providing crucial data on environmental destruction—data the Bolsonaro government attempted to suppress, sparking international outcry.

Embrapa, Brazil's agricultural research corporation, has transformed the country's farming through development of tropical soybean varieties, integrated pest management, and no-till farming techniques. Brazilian aerospace company Embraer works closely with universities on aviation research. The country's ethanol program, using sugarcane, represents the world's most successful biofuel initiative, born from decades of research and development.

Yet Brazilian science faces existential threats: federal research budgets have been slashed repeatedly, particularly during and after the Bolsonaro administration; political appointments compromise scientific agencies; deforestation undermines the very biodiversity that makes Brazil scientifically unique. Brain drain accelerates as researchers flee to the United States and Europe. The erosion of INPE's independence and attacks on climate scientists signal broader threats to research integrity.

Brazil's scientific community fights for survival amid world-class capabilities and political hostility. The country's ability to study and protect the Amazon has global implications for climate change, yet domestic political forces actively undermine this work.`,
    issues: JSON.stringify([
      "Federal research budgets repeatedly slashed, especially post-Bolsonaro",
      "Political interference compromising scientific agencies and data",
      "Brain drain accelerating with researchers fleeing to US and Europe",
      "Deforestation undermining biodiversity research opportunities",
      "Attacks on climate scientists threatening research integrity"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Brunei',
    type: 'country' as const,
    country: 'Brunei',
    lat: 4.5353,
    lng: 114.7277,
    category: 'science',
    summary: `Brunei's vast oil wealth has paradoxically not translated into significant scientific capacity. R&D spending remains below 0.05% of GDP—among the world's lowest—as the tiny sultanate (population 450,000) has prioritized resource extraction revenue over research investment. Universiti Brunei Darussalam, the country's flagship institution, maintains modest research programs but lacks the scale and ambition found in comparable wealthy states.

The country's scientific efforts focus narrowly on petroleum engineering and Islamic finance research, reflecting the regime's economic base and ideological orientation. Brunei sends students abroad for advanced STEM training—primarily to the United Kingdom, Australia, and Malaysia—but most do not return to research careers. The absence of private sector R&D and limited academic opportunities mean science graduates typically work in government administration or the oil industry, not research.

Some environmental research occurs on Brunei's rainforests, which harbor significant biodiversity, but conducted primarily by foreign researchers from Malaysia, UK, and Singapore. The country's small size and wealth should theoretically enable targeted research excellence (like Qatar or Singapore have achieved), but governance priorities lie elsewhere.

The Sultan's absolute rule and emphasis on conservative Islamic values have shaped educational priorities away from open scientific inquiry. Recent moves toward stricter Sharia law implementation may further constrain research directions and international collaboration. Brain drain isn't severe simply because Brunei trains few researchers to begin with—the problem is a missing research culture entirely.

Brunei's scientific landscape represents a missed opportunity: a wealthy state with resources to build research capacity choosing not to, instead relying on oil revenues and foreign expertise. Without fundamental shifts in national priorities, Brunei will remain a scientific negligible presence despite its economic advantages.`,
    issues: JSON.stringify([
      "Extremely low R&D spending below 0.05% of GDP despite oil wealth",
      "Missing research culture with few researchers trained",
      "Students trained abroad don't return to research careers",
      "No significant private sector R&D",
      "Conservative governance potentially constraining scientific inquiry"
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  }
];

async function insertScienceSummaries() {
  console.log('Starting to insert SCIENCE summaries for countries 1-20...\n');

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

  console.log('\n✅ Batch 1 complete! Countries 1-20 saved to database.');
}

insertScienceSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
