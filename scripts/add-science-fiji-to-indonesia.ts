import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Country {
  name: string
  type: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

const COUNTRIES: Country[] = [
  {
    name: 'Fiji',
    type: 'country',
    lat: -17.7134,
    lng: 178.0650,
    summary: `Fiji's scientific enterprise may seem modest, but it punches above its weight in fields where geography becomes destiny. The University of the South Pacific, headquartered in Suva, serves as the intellectual hub for twelve Pacific island nations, making it one of the world's most geographically dispersed universities. Here, climate science isn't an abstract exercise--it's existential. Fijian researchers lead globally significant work on coral reef resilience, sea-level rise impacts, and climate adaptation strategies, their findings informing Pacific island nations facing the front lines of global warming.

With less than 0.03% of GDP invested in research and development, Fiji's scientific infrastructure remains fragile. Yet innovation emerges from constraint. The Pacific Centre for Environment and Sustainable Development pioneered community-based marine conservation techniques now replicated across the tropics. Fijian scientists have documented over 1,200 fish species and developed traditional ecological knowledge databases that blend indigenous wisdom with modern taxonomy. This bioculturalism--the recognition that cultural and biological diversity are intertwined--represents Fiji's unique contribution to conservation science.

Marine biology dominates research priorities, but tropical medicine and infectious disease surveillance have grown urgent. Dengue, Zika, and leptospirosis require constant monitoring in Fiji's warm, wet climate. The Fiji Centre for Communicable Disease Control collaborates with Australian and New Zealand institutions, creating early-warning systems for disease outbreaks that could ripple across the Pacific. Brain drain remains severe: promising Fijian students often pursue advanced degrees in Australia, New Zealand, or the United States, with few incentives drawing them home.

Science education faces twin challenges of resource scarcity and geographic dispersion. Remote islands rely on intermittent internet connectivity for distance learning. The University of the South Pacific pioneered satellite-based education delivery in the 1970s--a remarkable innovation for its time--but maintaining technological infrastructure across vast ocean distances strains limited budgets. Still, Fiji's science community persists, driven by the knowledge that their research carries implications far beyond their shores.`,
    issues: [
      'Minimal R&D investment (0.03% of GDP) limits research infrastructure',
      'Severe brain drain with scientists emigrating to Australia and New Zealand',
      'Climate research critical but underfunded despite existential threats',
      'Geographic isolation hampers collaboration and equipment access',
      'STEM education challenged by resource scarcity across dispersed islands'
    ]
  },
  {
    name: 'Finland',
    type: 'country',
    lat: 61.9241,
    lng: 25.7482,
    summary: `Finland's scientific prowess belies its population of 5.5 million. This Nordic nation invests 2.8% of GDP in research and development, among the highest rates globally, and the results ripple through fields from mobile technology to materials science. Nokia may have stumbled in the smartphone era, but the engineers it trained seeded hundreds of startups and research initiatives. The University of Helsinki, Aalto University, and VTT Technical Research Centre form a triangle of innovation that has produced breakthrough discoveries in quantum computing, clean energy, and forest bioeconomy.

The numbers tell a story of sustained commitment: Finland boasts more researchers per capita than almost any nation--over 7,000 per million inhabitants. Three Finnish scientists have won Nobel Prizes, including Artturi Virtanen in chemistry and Ragnar Granit in medicine. But Finland's true distinction lies in applied research that solves real-world problems. The country pioneered heart rate monitors, Linux operating system, and the world's first commercial 5G network. Finnish researchers developed the Nokia Bell Labs innovations that enabled modern cellular networks, and today lead European efforts in 6G wireless technology.

Education undergirds everything. Finnish schools consistently rank among the world's best in PISA assessments, and the country's approach--minimal standardized testing, highly trained teachers, emphasis on equity--has become a global model. Nearly 40% of young Finns complete tertiary education, with strong representation in engineering and natural sciences. Women comprise almost half of doctoral graduates in science fields, far exceeding most developed nations.

Yet challenges loom. Finland's scientific budget has stagnated in recent years, squeezed by economic headwinds and aging demographics. The country's traditional strength in forestry and paper research must pivot toward bioeconomy and sustainable materials as industries transform. Climate change brings both threat and opportunity: warming temperatures alter Nordic ecosystems while opening new Arctic research frontiers. Finland's location at the intersection of East and West--geographically, politically, scientifically--positions it as a crucial bridge in an increasingly fragmented research landscape.`,
    issues: [
      'R&D budget stagnation threatening sustained scientific leadership',
      'Aging demographics straining higher education and research funding',
      'Traditional forestry research requiring transformation to bioeconomy focus',
      'Brain circulation with talent flowing to larger EU research hubs',
      'Arctic climate change creating new research opportunities and challenges'
    ]
  },
  {
    name: 'France',
    type: 'country',
    lat: 46.2276,
    lng: 2.2137,
    summary: `France's scientific tradition stretches from Pasteur's microbiology to Curie's radioactivity, and the nation continues to anchor European research despite economic headwinds. With 2.2% of GDP invested in R&D--approximately €55 billion annually--France maintains world-class institutions like the CNRS (National Centre for Scientific Research), CEA (Alternative Energies and Atomic Energy Commission), and INSERM (National Institute of Health and Medical Research). These organizations employ over 50,000 researchers conducting everything from particle physics at CERN to climate modeling in the French Alps.

French scientists have claimed 70 Nobel Prizes, more than any nation except the United States, United Kingdom, and Germany. Recent achievements span diverse fields: mathematician Cédric Villani won the Fields Medal, geneticist Emmanuelle Charpentier co-discovered CRISPR gene editing (though working in Germany), and astrophysicist Françoise Combes maps dark matter in distant galaxies. The country excels in mathematics--producing Fields Medal winners at extraordinary rates--and maintains leadership in aerospace through CNES, Europe's largest space agency, which operates satellites monitoring climate, weather, and Earth's changing surface.

Yet French science faces structural challenges. Research funding remains heavily centralized and bureaucratic, with scientists spending excessive time on administrative tasks rather than investigation. The country's elite grandes écoles system--Polytechnique, École Normale Supérieure, CentraleSupélec--produces exceptional engineering talent but can feel disconnected from universities where most research occurs. Brain drain accelerates: young French scientists increasingly seek positions in the United States, United Kingdom, or Switzerland, attracted by better funding, less hierarchy, and more entrepreneurial research cultures.

Climate research has intensified urgency. French scientists contribute significantly to IPCC reports, and institutions like IPSL (Pierre-Simon Laplace Institute) lead climate modeling efforts. Nuclear energy research remains politically fraught but scientifically robust, with France's 56 reactors providing test beds for next-generation reactor designs. Meanwhile, President Macron's "Innovation 2030" plan aims to position France as a quantum computing, artificial intelligence, and biotechnology leader--ambitions that require reversing funding stagnation and bureaucratic sclerosis.`,
    issues: [
      'Bureaucratic research administration diverting scientist time from investigation',
      'Brain drain to US, UK, and Switzerland accelerating among young researchers',
      'Funding stagnation threatening competitive position in emerging fields',
      'Elite grandes écoles system disconnected from university research ecosystem',
      'Nuclear energy research excellence undermined by political uncertainty'
    ]
  },
  {
    name: 'Georgia',
    type: 'country',
    lat: 42.3154,
    lng: 43.3569,
    summary: `Georgia's scientific heritage reaches back to the Soviet era, when Tbilisi State University and the Georgian Academy of Sciences formed key nodes in Moscow's research network. Those institutions persist, but decades of political instability and economic collapse following independence devastated Georgian science. R&D investment plummeted to just 0.3% of GDP, laboratories crumbled, and the brain drain became a hemorrhage. Yet something unexpected is happening: a scientific renaissance driven by international partnerships and a new generation refusing to abandon their country's intellectual traditions.

The numbers remain grim--Georgia invests perhaps $150 million annually in research, produces fewer than 100 PhD graduates per year, and sees many of its best minds migrate to Western Europe or North America. But pockets of excellence persist. The Ilia State University has modernized rapidly, attracting international faculty and establishing research centers in neuroscience, molecular biology, and computer science. The Georgian Agricultural University leads regional research on climate-adapted crops, critical as temperature and precipitation patterns shift across the Caucasus. The Kharadze Abastumani Astrophysical Observatory, despite aging telescopes, continues observations that feed international astronomy databases.

Georgia's greatest scientific asset may be its biodiversity. Positioned where European, Asian, and Middle Eastern ecosystems converge, the country harbors extraordinary species diversity, including endemic plants found nowhere else. The Caucasus Mountains form one of Earth's 35 biodiversity hotspots, and Georgian scientists collaborate with international teams studying everything from glacial retreat to ancient wheat varieties preserved by subsistence farmers. This traditional agricultural biodiversity--over 500 grape varieties alone--attracts geneticists studying crop domestication and climate adaptation.

Science policy remains underdeveloped. The government recognizes research as essential for economic development but lacks coherent strategy or sustained funding. European Union integration offers hope: access to Horizon Europe programs could channel resources to Georgian institutions and reverse brain drain. Meanwhile, young Georgian scientists practice what they call "guerrilla science"--pursuing research despite obstacles, improvising equipment, and maintaining international collaborations through sheer determination.`,
    issues: [
      'Catastrophically low R&D investment (0.3% GDP) since Soviet collapse',
      'Severe brain drain with limited incentives for scientist retention',
      'Crumbling research infrastructure from decades of underfunding',
      'Lack of coherent national science policy and strategic priorities',
      'EU integration offering potential funding access but requiring institutional reforms'
    ]
  },
  {
    name: 'Germany',
    type: 'country',
    lat: 51.1657,
    lng: 10.4515,
    summary: `Germany's scientific dominance rests on a foundation built over centuries--from Kepler's planetary laws to Einstein's relativity, from Koch's bacteriology to Planck's quantum theory. Today, Germany invests over 3% of GDP in research and development, approximately €110 billion annually, maintaining its position as Europe's undisputed research powerhouse. The Max Planck Society operates 86 institutes conducting fundamental research across disciplines. The Fraunhofer Society's 76 institutes focus on applied research and technology transfer. The Helmholtz Association coordinates research in energy, Earth sciences, and health. This tiered system--basic research, applied research, and technological development--creates an innovation pipeline envied worldwide.

German scientists have won 111 Nobel Prizes, more than any nation except the United States. Recent achievements include developing mRNA vaccine technology (BioNTech's Özlem Türeci and Uğur Şahin), advancing gravitational wave detection, and leading European contributions to CERN's particle physics discoveries. German universities--Technical University of Munich, Heidelberg, LMU Munich--consistently rank among Europe's finest. The country produces roughly 28,000 doctoral graduates annually, with engineering and natural sciences strongly represented.

Yet Germany faces structural challenges threatening its scientific preeminence. Universities remain chronically underfunded compared to research institutes, creating a two-tier system where teaching suffers. The rigid habilitation system--requiring a second thesis beyond the PhD for permanent positions--creates career bottlenecks and drives talented researchers to more flexible systems abroad. While Germany attracts international researchers, particularly from Eastern Europe and Asia, concerns about xenophobia and bureaucratic immigration procedures limit competitiveness with the United States and United Kingdom.

Energy transition science has become urgent. Germany's Energiewende--commitment to renewable energy and nuclear phase-out--demands breakthroughs in energy storage, grid management, and industrial decarbonization. The country leads battery research, wind turbine technology, and industrial process innovation. Climate science anchors policy: German institutions contribute heavily to IPCC reports and European climate modeling. As Europe's largest economy confronts the imperative of sustainable transformation, German science must deliver solutions at unprecedented speed and scale.`,
    issues: [
      'University underfunding creating two-tier system with neglected teaching',
      'Rigid habilitation system creating career bottlenecks and brain drain',
      'Bureaucratic immigration hampering international researcher recruitment',
      'Energy transition demanding accelerated innovation in storage and grid technology',
      'Competition from US and UK for top talent intensifying despite strong funding'
    ]
  },
  {
    name: 'Ghana',
    type: 'country',
    lat: 7.9465,
    lng: -1.0232,
    summary: `Ghana's scientific aspirations outpace its resources, yet the nation has emerged as West Africa's research leader. The University of Ghana in Legon, Kwame Nkrumah University of Science and Technology in Kumasi, and the University of Cape Coast form a research triangle that anchors anglophone African science. With approximately 0.4% of GDP invested in R&D--roughly $300 million annually--Ghana cannot compete with developed nations on funding, but focuses strategically on tropical agriculture, infectious disease, and renewable energy research where local expertise offers global value.

Cocoa genetics exemplifies Ghana's research niche. As the world's second-largest cocoa producer, Ghana hosts critical research on cacao disease resistance, climate adaptation, and sustainable farming practices. The Cocoa Research Institute conducts work directly applicable to farmer livelihoods while contributing to global understanding of tropical crop science. Similarly, the Noguchi Memorial Institute for Medical Research leads studies of malaria, HIV, and neglected tropical diseases, collaborating with international partners while addressing urgent local health challenges. Ghana's participation in the Human Heredity and Health in Africa (H3Africa) initiative positions Ghanaian scientists at the forefront of genetic diversity research.

Science education shows promise but faces resource constraints. Ghana produces approximately 400 PhD graduates annually, though many in social sciences rather than STEM fields. Brain drain accelerates at higher degree levels: ambitious students pursue doctorates abroad--typically in Europe or North America--with return rates below 40%. The government recognizes science as essential for development, launching initiatives like the Science Technology and Innovation Policy, but implementation lags and funding remains insufficient.

Ghana's scientific community demonstrates remarkable resilience. Researchers improvise equipment, maintain international collaborations despite connectivity challenges, and publish in respected journals. The country increasingly hosts regional conferences and training programs, asserting leadership in West African science. Solar energy research grows urgent as Ghana confronts electricity access challenges and climate change. If sustained investment materializes--particularly from international partnerships and diaspora engagement--Ghana could anchor a continental scientific resurgence.`,
    issues: [
      'Low R&D investment (0.4% GDP) limiting infrastructure and equipment',
      'Brain drain severe with PhDs emigrating and low return rates',
      'STEM education underfunded despite recognition of importance',
      'Research concentrated in few institutions with regional disparities',
      'International collaboration critical but connectivity and funding gaps persist'
    ]
  },
  {
    name: 'Greece',
    type: 'country',
    lat: 39.0742,
    lng: 21.8243,
    summary: `Greece gave birth to Western science--Aristotle's natural philosophy, Archimedes' mathematics, Hippocrates' medicine--and modern Greek researchers maintain this intellectual tradition despite a decade of economic catastrophe. The debt crisis slashed research budgets by over 40%, triggering a scientific exodus as young researchers fled to Germany, the United Kingdom, and the United States. Yet Greek science persists, anchored by institutions like the National Centre for Scientific Research "Demokritos," the Foundation for Research and Technology-Hellas, and universities in Athens and Thessaloniki that continue producing internationally recognized research.

Greece invests approximately 1.2% of GDP in R&D--roughly €2.5 billion annually--below the EU average but recovering from crisis lows. Greek scientists contribute significantly to fields where Mediterranean geography and history converge: archaeology and cultural heritage preservation, marine biology and oceanography, seismology and earthquake engineering, renewable energy (particularly solar and wind), and ancient DNA studies revealing human migration patterns. The Antikythera mechanism--an ancient Greek astronomical calculator whose complexity astounded modern researchers--symbolizes both Greece's scientific heritage and its capacity to surprise.

The brain drain remains Greece's gravest scientific challenge. An estimated 400,000 Greeks emigrated during the crisis years, including disproportionate numbers of scientists and engineers. Universities struggle to retain faculty, with salaries and research funding far below Western European standards. Yet diaspora networks offer unexpected advantages: Greek scientists abroad maintain collaborations with home institutions, and some are beginning to return as economic conditions stabilize. The Stavros Niarchos Foundation and other philanthropies partially compensate for government funding gaps.

Climate change hits the Mediterranean with particular force--rising temperatures, extreme droughts, wildfires, and ecosystem transformation. Greek scientists lead research on climate impacts to olive cultivation, fisheries, and tourism-dependent coastal communities. Marine research benefits from Greece's extensive coastline and island ecosystems, with studies of Mediterranean biodiversity feeding global databases. The European Union's Horizon Europe program provides crucial funding access, integrating Greek researchers into continent-wide collaborations that transcend national resource limitations.`,
    issues: [
      'Debt crisis devastated R&D budgets with 40%+ cuts triggering exodus',
      'Brain drain of 400,000+ emigrants including disproportionate scientists',
      'University funding and salaries far below Western European standards',
      'Research infrastructure aging and requiring modernization investment',
      'Climate impacts on Mediterranean ecosystems demanding urgent research response'
    ]
  },
  {
    name: 'Guatemala',
    type: 'country',
    lat: 15.7835,
    lng: -90.2308,
    summary: `Guatemala's scientific infrastructure remains fragile, yet the nation's position at the intersection of multiple ecosystems--Caribbean coast, Pacific coast, volcanic highlands, tropical rainforest--creates research opportunities that attract international scientists while local institutions struggle. The University of San Carlos, Central America's oldest university founded in 1676, anchors Guatemalan science, though chronic underfunding and political instability have constrained its potential. Guatemala invests perhaps 0.05% of GDP in research and development, among the lowest rates globally, yet pockets of scientific excellence persist against formidable odds.

The numbers are sobering: Guatemala produces fewer than 50 PhD graduates annually, most in education or social sciences rather than STEM fields. Brain drain is severe, with promising students pursuing graduate education abroad and rarely returning. Research infrastructure barely exists outside Guatemala City, and even there, laboratories lack modern equipment and reliable funding. Yet Guatemalan scientists pursue critical work in fields where local knowledge proves essential: volcanology and seismology (Guatemala sits atop multiple active volcanoes and fault lines), tropical ecology and conservation biology, Mayan archaeology and cultural heritage, and coffee genetics and sustainable agriculture.

Coffee research exemplifies Guatemala's scientific niche. As a major arabica producer facing climate change threats, Guatemala hosts essential studies of disease-resistant varieties, shade-growing systems, and climate adaptation strategies. The National Coffee Institute conducts research with direct economic implications, though funding constraints limit scope. Similarly, volcanology research at INSIVUMEH (National Institute of Seismology, Volcanology, Meteorology and Hydrology) provides crucial eruption monitoring and earthquake early warning despite aging equipment and minimal budgets.

International partnerships offer lifelines. U.S. and European institutions collaborate with Guatemalan researchers on biodiversity studies, particularly in the Maya Biosphere Reserve where rainforest conservation intersects with climate science and indigenous knowledge systems. The Smithsonian Institution maintains long-term ecological research sites. Yet without sustained domestic investment and coherent science policy, Guatemala risks becoming merely a research site for foreign scientists rather than building indigenous scientific capacity. The country's young population--median age just 22--represents either opportunity or crisis, depending on education and research investment choices made now.`,
    issues: [
      'Catastrophically low R&D investment (0.05% GDP) among world\'s lowest',
      'Severe brain drain with minimal PhD production and high emigration',
      'Political instability and corruption undermining research institutions',
      'Research infrastructure mostly absent outside capital city',
      'Dependence on international partnerships without indigenous capacity building'
    ]
  },
  {
    name: 'Guyana',
    type: 'country',
    lat: 4.8604,
    lng: -58.9302,
    summary: `Guyana holds 80% of its land area under forest--the highest forest cover percentage of any nation--making this small South American country disproportionately important to global climate science and biodiversity research. Yet Guyana's scientific infrastructure scarcely exists. The University of Guyana produces graduates mainly in humanities and social sciences, with minimal research capacity. The country invests virtually nothing in R&D as a percentage of GDP, and brain drain is catastrophic: ambitious Guyanese students pursue education abroad, predominantly in the United States, Canada, or the United Kingdom, with negligible return rates.

The scientific story of Guyana is written largely by outsiders. International research teams descend on the Iwokrama Rainforest, Kaieteur National Park, and coastal mangroves to document extraordinary biodiversity--over 8,000 plant species, 800 bird species, rare jaguars and giant river otters--while Guyanese participation remains minimal. Climate scientists study Guyana's forests as crucial carbon sinks, calculating that the country's standing forests store approximately 19.5 gigatons of carbon. The REDD+ (Reducing Emissions from Deforestation and Forest Degradation) program channels funding toward forest conservation, but capacity to conduct indigenous research and monitoring remains limited.

Oil discovery in 2015 has transformed Guyana's economic prospects--production now exceeds 350,000 barrels daily--yet threatens its environmental reputation and complicates scientific priorities. The country faces a profound paradox: oil revenues could finally fund research infrastructure and STEM education, but exploitation threatens the very ecosystems that make Guyana scientifically significant. The University of Guyana has announced plans to establish petroleum engineering and environmental science programs, though implementation lags.

Medical research focuses on tropical diseases endemic to the region: malaria, dengue, yellow fever, and leptospirosis. The country participates in regional disease surveillance networks coordinated by PAHO (Pan American Health Organization), but conducting research rather than just reporting data requires capacity Guyana lacks. Science education remains woefully inadequate--few secondary schools have functional laboratories, university faculty lack research training, and the scientific method receives minimal emphasis. Without urgent investment in human capital and infrastructure, Guyana risks remaining scientifically colonized: a research site for others rather than a generator of its own knowledge.`,
    issues: [
      'Virtually nonexistent R&D investment and research infrastructure',
      'Catastrophic brain drain with negligible PhD production or return',
      'Scientific research dominated by foreign institutions with limited local capacity',
      'Oil development threatening forest ecosystems before scientific baseline established',
      'STEM education inadequate with dysfunctional school laboratories and untrained faculty'
    ]
  },
  {
    name: 'Haiti',
    type: 'country',
    lat: 18.9712,
    lng: -72.2852,
    summary: `Haiti's scientific capacity has been devastated by political instability, economic collapse, and natural disasters--most catastrophically the 2010 earthquake that killed over 200,000 people and destroyed much of the country's already minimal research infrastructure. The State University of Haiti, the nation's largest higher education institution, operates with crumbling facilities, irregular electricity, and faculty who often work second jobs to survive. Haiti invests essentially nothing in research and development--no meaningful percentage of GDP can be calculated--and the concept of sustained scientific research has become almost theoretical.

The numbers reflect tragedy: Haiti produces fewer than 10 PhD graduates annually, essentially all in social sciences or humanities. Brain drain isn't just severe--it's nearly absolute. Virtually every Haitian with scientific ambitions pursues education abroad, predominantly in France, Canada, or the United States, with return rates approaching zero. The country's small Haitian Medical Association struggles to maintain basic health surveillance, let alone conduct research. International organizations like Médecins Sans Frontières and Partners In Health conduct medical interventions and gather data, but Haitian scientific participation remains minimal.

Yet Haiti's challenges create urgent research needs. Seismology and earthquake engineering are critical: Haiti sits atop the boundary between the Caribbean and North American tectonic plates, with major fault lines threatening future disasters. The country's complete deforestation--less than 2% original forest cover remains--creates cascading environmental crises: soil erosion, agricultural collapse, flooding, and landslides. Climate change compounds vulnerabilities through sea-level rise, hurricane intensity, and drought. Understanding and addressing these threats requires scientific capacity Haiti simply doesn't possess.

Public health research focuses on infectious disease: cholera introduced by UN peacekeepers, HIV/AIDS, tuberculosis, malaria, and vaccine-preventable diseases where immunization coverage has collapsed. The Haitian Groupe d'Etude du Sarcome de Kaposi et des Infections Opportunistes (GHESKIO) provides HIV treatment and research in collaboration with Cornell University, representing rare sustained scientific work. Rebuilding Haitian science requires more than funding--it demands political stability, basic infrastructure (reliable electricity, internet connectivity, clean water), and a generation-long commitment to education. The diaspora offers hope: Haitian-American scientists sometimes return temporarily, establishing partnerships and mentoring students, planting seeds for a scientific future that remains frustratingly distant.`,
    issues: [
      'Research infrastructure destroyed by political instability and natural disasters',
      'Essentially zero R&D investment and governmental science capacity',
      'Near-total brain drain with virtually no PhD production or return',
      'Scientific research dominated by international NGOs with minimal local participation',
      'Urgent research needs (seismology, climate, health) unmet due to capacity absence'
    ]
  },
  {
    name: 'Honduras',
    type: 'country',
    lat: 15.2000,
    lng: -86.2419,
    summary: `Honduras's scientific development languishes despite the nation's remarkable biodiversity and urgent research needs. The National Autonomous University of Honduras in Tegucigalpa serves as the country's primary higher education institution, but research capacity remains minimal. Honduras invests approximately 0.04% of GDP in research and development--among Central America's lowest rates--and produces fewer than 30 PhD graduates annually, predominantly in education and social sciences rather than STEM fields. Political instability, corruption, and violence have driven massive emigration, including a devastating brain drain of educated professionals.

The country's biodiversity could anchor significant research: Honduras contains portions of the Mesoamerican Barrier Reef (the world's second-largest), cloud forests harboring endemic species, and the Mosquitia region's vast wetlands. Yet scientific study remains limited. International teams conduct marine research in the Bay Islands, studying coral reef resilience and fish populations, but Honduran participation is minimal. The Cusuco National Park's cloud forests attract biologists documenting amphibian decline and climate change impacts, again primarily from foreign institutions. Honduras risks becoming a research site exploited by others rather than building indigenous scientific capacity.

Coffee research represents a rare exception. Honduras produces substantial coffee--recently surpassing Guatemala as Central America's top producer--and the Honduran Coffee Institute (IHCAFE) conducts applied research on disease resistance, climate adaptation, and sustainable cultivation practices. This work directly affects farmer livelihoods and demonstrates what sustained investment in strategic research can achieve. Similarly, tropical medicine research addresses urgent needs: Chagas disease, dengue, Zika, and neglected parasitic infections that disproportionately affect impoverished rural populations.

Science education faces catastrophic challenges. Most secondary schools lack functional laboratories or science-trained teachers. Universities emphasize rote memorization over investigation and critical thinking. The few students who excel typically emigrate for graduate education and rarely return, drawn to opportunities in the United States, Europe, or more stable Latin American nations. Without addressing root causes--political instability, endemic corruption, violence, and poverty--Honduras cannot build the sustained institutions that scientific research requires. The country's young population represents enormous potential, but realizing it demands investments Honduras has been unable or unwilling to make.`,
    issues: [
      'Minimal R&D investment (0.04% GDP) among Central America\'s lowest',
      'Severe brain drain with emigration driven by violence and instability',
      'Scientific research dominated by foreign teams with limited local capacity',
      'STEM education catastrophically underfunded with dysfunctional school labs',
      'Political instability and corruption preventing sustained institutional development'
    ]
  },
  {
    name: 'Hungary',
    type: 'country',
    lat: 47.1625,
    lng: 19.5033,
    summary: `Hungary's scientific tradition stretches from Ignác Semmelweis discovering antisepsis to Albert Szent-Györgyi isolating vitamin C to John von Neumann pioneering computer science. This small nation of 10 million has produced 13 Nobel laureates--an extraordinary per-capita achievement--and continues punching above its weight despite political challenges. Hungary invests approximately 1.6% of GDP in R&D (€2.4 billion annually), below the EU average but supporting research across mathematics, physics, chemistry, and biomedical sciences where Hungarian excellence persists.

The Hungarian Academy of Sciences coordinates research through dozens of institutes, though its autonomy has been challenged by the Orbán government's centralizing tendencies. Leading universities--Eötvös Loránd, Semmelweis Medical, Technical University of Budapest--maintain research programs integrated into European networks. Hungarian scientists contribute to CERN particle physics, European space missions, and international genetics consortia. Mathematics remains a particular strength: Hungary's problem-solving tradition produces exceptional mathematicians, many of whom work abroad but maintain home country connections.

Yet Hungarian science confronts serious challenges. Government interference in academic freedom has intensified, most notoriously with the forced departure of Central European University to Vienna--a blow to Hungary's international scientific reputation. Research funding, while stable, grows more politically directed, with favored institutes receiving support while others face cuts. Brain drain accelerates: young Hungarian scientists increasingly seek positions in Western Europe or North America, drawn by better funding, academic freedom, and research cultures less constrained by nationalism.

EU membership provides crucial support. Hungarian researchers access Horizon Europe funding, collaborate across borders, and participate in continent-wide infrastructure projects. Climate research has grown urgent as Hungary faces temperature extremes, droughts, and Danube River management challenges. The country's agricultural research tradition--essential for a nation where farming remains economically significant--now focuses on climate adaptation and sustainable intensification. Hungary's scientific future depends on reversing democratic backsliding and reaffirming commitment to academic freedom and international collaboration that enabled past achievements.`,
    issues: [
      'Government interference in academic freedom damaging international reputation',
      'Brain drain accelerating with scientists fleeing to Western Europe and North America',
      'Research funding increasingly politically directed rather than merit-based',
      'Forced closure of Central European University symbolizing illiberal turn',
      'EU integration critical but tensions over rule of law threatening access to programs'
    ]
  },
  {
    name: 'Indonesia',
    type: 'country',
    lat: -0.7893,
    lng: 113.9213,
    summary: `Indonesia's scientific ambitions are as vast as its archipelago--17,000 islands stretching across three time zones--yet execution has lagged vision. The world's fourth-most populous nation invests only 0.3% of GDP in research and development, approximately $3 billion annually for 270 million people. This chronic underinvestment has consequences: Indonesia produces roughly 8,000 doctoral graduates per year, but many in education and social sciences rather than STEM fields. Brain drain accelerates at higher education levels, with talented students pursuing opportunities abroad and return rates around 30%.

Yet Indonesia's biodiversity and geological dynamism create research imperatives that attract global attention. The country harbors extraordinary species diversity--12% of Earth's mammals, 16% of reptiles and amphibians, positioned within the Coral Triangle where marine biodiversity peaks. Indonesian scientists collaborate with international teams studying everything from orangutan conservation to coral reef resilience. Volcanology and seismology research carries existential importance: Indonesia sits atop the Ring of Fire with 127 active volcanoes and frequent devastating earthquakes and tsunamis. The Center for Volcanology and Geological Hazard Mitigation monitors this geological chaos, though resources rarely match risks.

The Indonesian Science Institute (LIPI) coordinates research across dozens of centers, while leading universities--University of Indonesia, Institut Teknologi Bandung, Gadjah Mada University--conduct research despite funding constraints. Recent achievements include genome sequencing of Indonesian rice varieties, development of COVID-19 diagnostic tools, and contributions to climate science documenting deforestation and peatland degradation. Palm oil cultivation has destroyed vast rainforests, creating urgent research needs around sustainable agriculture, forest restoration, and climate change mitigation.

President Jokowi's administration has emphasized research and innovation, establishing new research agencies and increasing scholarships for STEM education abroad. The Indonesia Endowment Fund for Education supports thousands of graduate students. Yet implementation remains uneven, bureaucracy stifles entrepreneurship, and corruption diverts resources. Indonesia's young population--median age 30--represents enormous potential. Whether this demographic dividend translates into scientific capacity depends on sustained investment in education, research infrastructure, and institutions that can retain talent rather than exporting it to Singapore, Australia, and Western nations.`,
    issues: [
      'Low R&D investment (0.3% GDP) inadequate for 270 million population',
      'Brain drain severe with only 30% return rate after foreign education',
      'Deforestation and environmental degradation creating urgent research needs',
      'Research bureaucracy and corruption hampering innovation and efficiency',
      'Scientific capacity concentrated in Java with regional institutions underdeveloped'
    ]
  }
]

async function main() {
  console.log('🔬 Adding SCIENCE & RESEARCH summaries for countries Fiji to Indonesia...\n')

  let successCount = 0
  let errorCount = 0

  for (const country of COUNTRIES) {
    try {
      const { name, type, lat, lng, summary, issues } = country

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name,
            type,
            category: 'science'
          }
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        create: {
          name,
          type,
          country: name,
          lat,
          lng,
          category: 'science',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0
        }
      })

      console.log(`✅ ${name} - ${summary.length} characters, ${issues.length} issues`)
      successCount++
    } catch (error) {
      console.error(`❌ Error adding ${country.name}:`, error)
      errorCount++
    }
  }

  console.log(`\n📊 Summary:`)
  console.log(`   ✅ Successfully added: ${successCount} countries`)
  console.log(`   ❌ Errors: ${errorCount}`)
  console.log(`\n🎯 All summaries generated directly in this session (no API calls)`)
  console.log(`   Style: Ed Yong / Carl Zimmer`)
  console.log(`   Length: 2,500-3,500 characters each`)
  console.log(`   Category: science`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
