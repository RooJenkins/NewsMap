import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CountrySummary {
  name: string;
  lat: number;
  lng: number;
  summary: string;
  issues: string[];
}

const summaries: CountrySummary[] = [
  {
    name: 'Senegal',
    lat: 14.4974,
    lng: -14.4524,
    summary: `Science in Senegal pulses with an energy that mirrors the drum rhythms echoing through Dakar's streets. The country has positioned itself as West Africa's intellectual hub, with institutions like Cheikh Anta Diop University and Institut Pasteur de Dakar attracting researchers from across the continent. While R&D spending hovers around 0.5% of GDP—modest by global standards—Senegal punches above its weight in targeted research domains where tropical expertise matters most.

The Institut Pasteur de Dakar stands as a continental powerhouse in infectious disease research, tracing its lineage back to 1896. During the COVID-19 pandemic, its laboratories became one of Africa's first to sequence viral genomes, demonstrating capabilities that typically concentrate in wealthier nations. Today, researchers there wrestle with everything from yellow fever to antimicrobial resistance, their work informed by decades of local epidemiological data. The institute's vaccine production facilities supply immunizations across francophone Africa, making basic research immediately translatable into public health outcomes.

Marine science finds fertile ground along Senegal's Atlantic coastline, where overfishing threatens artisanal livelihoods that stretch back centuries. The Centre de Recherches Océanographiques de Dakar-Thiaroye monitors fish stocks and ocean chemistry, providing data that informs both policy and preservation. Researchers track upwelling patterns, measure microplastic concentrations, and document how climate change reshapes the underwater geography that feeds millions.

STEM education faces the persistent challenge of language—balancing instruction in French, Arabic, and indigenous languages while ensuring students can participate in global scientific discourse. The government's 2025 science policy emphasizes renewable energy research, particularly solar technology suited to Senegal's abundant sunshine. Yet brain drain remains acute, as talented graduates eye opportunities in France, Canada, or the Gulf states. Those who stay often juggle teaching loads that leave little time for research, though collaborative networks with European and American institutions provide lifelines of funding and equipment. Senegal's scientific story is one of strategic focus—choosing battles it can win and building institutions that serve not just national but continental needs.`,
    issues: [
      "Limited R&D funding at 0.5% of GDP constrains research infrastructure and equipment acquisition",
      "Brain drain of talented scientists to Europe and North America reduces research capacity",
      "Language barriers in STEM education between French, Arabic, and local languages",
      "Balancing teaching loads with research output at underfunded universities",
      "Building sustainable research collaborations that don't depend on foreign funding cycles"
    ]
  },
  {
    name: 'Serbia',
    lat: 44.0165,
    lng: 21.0059,
    summary: `Serbian science carries the weight of a complicated history—brilliant mathematical traditions inherited from Yugoslavia, interrupted by decades of isolation, now rebuilding connections to European research networks. The country spends roughly 0.9% of GDP on R&D, a figure that reflects both aspiration and constraint. Institutions like the University of Belgrade and the Serbian Academy of Sciences maintain research programs across disciplines, though funding pressures force difficult choices about which fields to nurture and which to let wither.

Mathematics and theoretical physics shine brightest in Serbia's research constellation. Belgrade's mathematical community produced Milutin Milanković, whose astronomical calculations revolutionized climate science, and continues training mathematicians who populate universities worldwide. The Petnica Science Center, a rare gem of informal STEM education, has mentored generations of young researchers through intensive summer programs that would be the envy of many wealthier nations. Students there learn by doing—conducting actual experiments rather than reading about them—in a model that counters the rote memorization that still dominates much of Serbian schooling.

The BioSense Institute in Novi Sad represents Serbia's bet on precision agriculture and environmental monitoring. Researchers there deploy sensor networks across farmland, using real-time data to optimize irrigation and detect crop diseases before they spread. It's pragmatic science, addressing immediate needs while building technical capabilities that could pivot to other applications. The institute collaborates with international partners, leveraging Serbia's position between EU and non-EU markets.

Yet Serbian science operates in a state of perpetual emigration anxiety. Bright students earn degrees at state expense, then depart for postdocs in Germany, the UK, or North America—a pattern so entrenched that universities plan around it. EU accession negotiations promise more research funding and program access, but also threaten to accelerate brain drain by making departure even easier. The government's 2024 innovation strategy emphasizes commercialization and startup creation, trying to build an ecosystem where scientific talent might actually stay. COVID-19 paradoxically boosted Serbian science visibility when researchers at the Torlak Institute worked on vaccine development and the country became a testing ground for multiple vaccine platforms. Whether this momentum translates into sustained investment remains an open question, one that will shape whether Serbia becomes a regional research leader or continues exporting its intellectual capital to wealthier neighbors.`,
    issues: [
      "Severe brain drain as researchers leave for better-funded positions in Western Europe",
      "Low R&D spending at 0.9% of GDP limits infrastructure and competitive salaries",
      "Aging research equipment and laboratory facilities from Yugoslav era",
      "Uncertain EU accession timeline creates planning difficulties for long-term research",
      "Disconnect between academic research output and commercial innovation"
    ]
  },
  {
    name: 'Singapore',
    lat: 1.3521,
    lng: 103.8198,
    summary: `Singapore's approach to science resembles its approach to everything else—meticulously planned, generously funded, and executed with the precision of a Swiss watch assembled by engineers who studied at MIT. The city-state invests over 2% of GDP in R&D, comparable to European leaders, transforming what was a trading port into a biomedical and technology research powerhouse within a single generation. This isn't organic scientific growth; it's engineered ambition backed by sovereign wealth.

The centerpiece of Singapore's scientific strategy crystallizes in Biopolis, a purpose-built research campus where glass towers house institutes focusing on genomics, bioengineering, and drug discovery. Agency for Science, Technology and Research (A*STAR) coordinates a network of research centers that recruited internationally renowned scientists with salaries and facilities that would make Harvard department chairs jealous. The strategy worked—Singapore now publishes more high-impact papers per capita than most nations, and companies like Genentech and Novartis established major research operations here, drawn by tax incentives and regulatory efficiency.

The Genome Institute of Singapore exemplifies this model in action. Researchers there sequence genomes specific to Asian populations, addressing a blind spot in genomic databases dominated by European ancestry data. They've identified genetic variants affecting drug metabolism in Southeast Asians, work with immediate clinical implications. It's strategic science—solving problems that matter locally while building capabilities with global applications. Similar focus characterizes the Singapore Immunology Network, which pivoted rapidly during COVID-19 to study immune responses, contributing to vaccine development timelines.

Water research occupies special priority in a nation with virtually no natural freshwater. The Nanyang Environment and Water Research Institute develops membrane technologies and water treatment processes that Singapore both uses domestically and exports as expertise. PUB, the national water agency, operates like a living laboratory where research immediately transfers to implementation.

Yet Singapore's scientific prowess comes with uncomfortable questions about sustainability. The small population means constant talent importation—roughly half of researchers come from abroad, creating brain gain that mirrors other nations' brain drain. STEM education emphasizes excellence through intense competition, producing outstanding students who sometimes burn out before reaching their potential. The government's top-down science planning achieves focus but risks missing unexpected discoveries that emerge from investigator-driven curiosity. And as U.S.-China tensions reshape global science, Singapore's strategy of bridging East and West research communities faces pressure to choose sides. Still, Singapore proves that with sufficient resources, clear strategy, and political will, a small nation can build scientific capabilities that rival much larger countries—though whether this model transfers elsewhere remains debatable.`,
    issues: [
      "Heavy dependence on foreign talent with ~50% of researchers from abroad creates sustainability concerns",
      "Pressure to choose sides between US and Chinese research partnerships amid geopolitical tensions",
      "Top-down research planning may limit serendipitous discovery and investigator-led innovation",
      "Intense STEM education competition creates student burnout and mental health challenges",
      "Questions about whether Singapore's high-investment model can scale beyond biomedical focus"
    ]
  },
  {
    name: 'Slovakia',
    lat: 48.6690,
    lng: 19.6990,
    summary: `Slovakia's scientific landscape reflects the particular challenges of a small European nation emerging from socialist legacy while competing in a continent of research heavyweights. The country dedicates around 0.9% of GDP to R&D, significantly below the EU average of 2.3%, resulting in research institutions that must be strategic about where to invest limited resources. The Slovak Academy of Sciences, inherited from Czechoslovak times, coordinates research across disciplines but operates facilities where equipment often predates Slovakia's 1993 independence.

Materials science and metallurgy carry forward Slovakia's industrial heritage—when this was Czechoslovakia's steel heartland, research focused on alloys and manufacturing processes. That expertise persists at institutions like the Institute of Materials Research, where scientists develop advanced ceramics and study material behavior under extreme conditions. It's pragmatic research connected to manufacturing realities, though the sector struggles as heavy industry declines. The Technical University of Košice maintains capabilities in applied physics and engineering, training graduates who often depart for better-funded labs in Germany or Austria.

Life sciences cluster around Comenius University in Bratislava, where researchers investigate everything from molecular biology to clinical medicine. The Biomedical Research Center brings together basic and applied research, though funding constraints mean sophisticated equipment often sits idle due to maintenance costs or reagent shortages. Slovak researchers frequently join international collaborations—participating in EU Framework Programme projects provides not just funding but access to facilities and networks that would otherwise remain out of reach.

The COVID-19 pandemic exposed both capabilities and weaknesses in Slovak science. Researchers quickly established PCR testing protocols and contributed to epidemiological modeling, but genome sequencing capacity lagged behind neighbors, requiring samples to be sent abroad for analysis. This pattern—capable people, insufficient infrastructure—repeats across disciplines.

Slovakia's deepest scientific challenge is demographic. Young researchers face a stark calculation: stay and struggle with low salaries and limited facilities, or emigrate to better-funded institutions in Western Europe. The brain drain is so pronounced that some departments struggle to fill faculty positions. EU membership provides research funding opportunities but also makes departure easier, creating a paradox where the same integration meant to strengthen Slovak science facilitates its hollowing out. The government's 2030 innovation strategy promises increased R&D investment, but similar promises have been made before. Whether Slovakia can retain and attract talent depends less on policy documents and more on whether those increased investments actually materialize—and whether young scientists believe they can build careers at home rather than treating Slovak education as preparation for professional lives abroad.`,
    issues: [
      "Extremely low R&D spending at 0.9% of GDP, well below EU average of 2.3%",
      "Severe brain drain as young researchers emigrate to Western Europe for better opportunities",
      "Aging research infrastructure and equipment from Czechoslovak era",
      "Difficulty competing with neighboring countries for EU research funding and talent",
      "Small population limits domestic talent pool and specialization opportunities"
    ]
  },
  {
    name: 'Slovenia',
    lat: 46.1512,
    lng: 14.9955,
    summary: `Slovenia punches above its weight in European science, a distinction harder won than its size might suggest. This nation of just two million people invests approximately 2.0% of GDP in R&D, matching many larger EU members and reflecting priorities inherited from Yugoslavia when Slovenia served as the federation's technological leader. The Jožef Stefan Institute in Ljubljana stands as Central Europe's largest research organization, its reactor facility and materials science programs maintaining capabilities that many larger nations would envy.

Physics and materials science form Slovenia's research bedrock. The institute's TRIGA reactor supports neutron activation analysis and materials testing, while particle physicists from the University of Ljubljana participate in CERN experiments, contributing to discoveries like the Higgs boson despite Slovenia's modest size. These aren't peripheral collaborations—Slovenian researchers hold leadership roles in detector development and data analysis, their work enabled by decades of sustained investment in fundamental physics.

The country's mountainous geography makes it a natural laboratory for climate science and ecology. Researchers at the Slovenian Forestry Institute monitor how warming temperatures push tree lines higher, document shifting animal ranges, and study karst hydrology in one of Europe's most extensive limestone cave systems. The underground research at Postojna Cave combines tourism with science, where biological studies of endemic cave species reveal evolutionary adaptations to permanent darkness.

Biotechnology research centers at the National Institute of Biology and various university labs, where scientists investigate everything from extremophile microorganisms to plant genetics. Slovenia's pharmaceutical sector, including companies like Krka, provides unusual synergy between academic research and commercial development—a connection that in many countries requires deliberate policy but here emerged organically from industrial history.

Yet Slovenia faces the same demographic pressure afflicting much of Central Europe. The birth rate hovers below replacement, and while brain drain proves less severe than in neighboring countries, the small population means every talented researcher who departs creates outsized impact. STEM education remains strong by European standards, though Slovenian universities can't match the salaries or facilities of institutions in Switzerland, Germany, or Scandinavia. The strategy has been quality over quantity—maintaining excellence in selected fields rather than attempting comprehensive coverage across all scientific domains. Slovenia's EU membership provides crucial research funding and network access, though grants increasingly require matching funds that strain institutional budgets. The next generation of Slovenian science depends on whether the country can maintain current investment levels even as an aging population creates competing demands for healthcare and pension resources.`,
    issues: [
      "Small population of 2 million limits talent pool and forces selective research focus",
      "Aging population creates competing demands for research funding versus healthcare/pensions",
      "Difficulty matching salaries and facilities of richer EU neighbors leads to talent loss",
      "Heavy dependence on EU research grants that require challenging matching funds",
      "Geographic isolation from major European research hubs limits spontaneous collaboration"
    ]
  },
  {
    name: 'Somalia',
    lat: 5.1521,
    lng: 46.1996,
    summary: `To speak of organized science in Somalia requires acknowledging decades of state collapse, civil war, and institutional destruction that gutted what little research infrastructure existed. The country's R&D spending is effectively unmeasurable—not because data is classified but because sustained research activity barely exists in any formal sense. Yet even in this environment, scientific impulses persist in forms adapted to extreme constraint, and recent stabilization efforts have sparked tentative rebuilding.

The Somali National University in Mogadishu reopened in 2014 after being shuttered since 1991, its campus scarred by bullet holes and its laboratories long since looted. Faculty members who spent decades abroad—in exile communities across East Africa, the Gulf, and the West—have begun returning to teach new generations. But "research" here means basic instruction with minimal equipment, where biology students might study anatomy from textbooks because preserved specimens are unavailable, and chemistry experiments happen theoretically rather than practically.

What research does occur focuses necessarily on immediate survival concerns. Public health workers, often funded by WHO or aid organizations, conduct disease surveillance for cholera, measles, and tuberculosis outbreaks. These aren't academic exercises but emergency responses where data collection merges with intervention. Veterinary research, crucial in a pastoralist economy where livestock represents wealth, occurs through partnerships with institutions in Kenya and Ethiopia. Scientists study rinderpest elimination, drought resilience in camel and goat breeds, and tick-borne diseases—work that directly impacts millions of herders.

Environmental monitoring happens piecemeal through satellite data analyzed by foreign institutions and NGOs. Researchers track desertification, document the collapse of fishing stocks off Somalia's coast (partly due to illegal foreign trawling during the state collapse period), and map climate vulnerability. The actual Somali participation in this research is limited, though diaspora scientists sometimes collaborate remotely, contributing expertise from universities abroad.

The fundamental challenge is that science requires stable institutions, sustained funding, and physical security—luxuries Somalia has lacked for a generation. Young Somalis with scientific aptitude face impossible choices: pursue education in an environment with minimal facilities and uncertain futures, or join the diaspora and likely never return. The country's scientific revival, if it comes, will take decades even under optimistic scenarios. For now, Somali science exists primarily in the diaspora, where Somali-born researchers contribute to institutions in Minnesota, London, and Nairobi, their expertise benefiting other nations while their homeland rebuilds the most basic educational infrastructure. It's a sobering reminder that science depends on conditions of peace and stability that much of the world takes for granted.`,
    issues: [
      "Decades of civil war destroyed virtually all research infrastructure and institutions",
      "No measurable R&D spending or organized government science policy",
      "Extreme brain drain with scientific talent concentrated in diaspora communities abroad",
      "Lack of basic laboratory equipment and research facilities at universities",
      "Security instability prevents long-term research planning and international collaboration"
    ]
  },
  {
    name: 'South Africa',
    lat: -30.5595,
    lng: 22.9375,
    summary: `South African science inhabits a paradox—world-class capabilities in specific domains coupled with profound inequalities that mirror the nation's broader social divisions. The country invests around 0.8% of GDP in R&D, modest by developed-world standards but substantial for Africa, supporting research institutions whose excellence challenges simplistic narratives about continental science. The legacy of apartheid shapes everything, creating centers of excellence that served white minority interests while systematically excluding the Black majority from scientific careers.

Astronomy showcases South Africa at its scientific best. The Square Kilometre Array, currently under construction in the Karoo desert, will become the world's largest radio telescope when completed, its unprecedented sensitivity opening new windows on cosmic phenomena. The South African Radio Astronomy Observatory coordinates this international mega-project, demonstrating capabilities in complex engineering and data processing. The Southern African Large Telescope near Sutherland already ranks among the world's largest optical telescopes, its primary mirror collecting photons from distant galaxies. These aren't vanity projects—South African astronomers make real contributions to cosmology and astrophysics, publishing in top-tier journals.

Medical research carries particular weight in a nation deeply scarred by HIV/AIDS. The University of Cape Town's Institute of Infectious Disease and Molecular Medicine became a global leader in TB and HIV research, conducting clinical trials that shaped treatment protocols worldwide. During COVID-19, South African scientists first identified the Beta and Omicron variants through genomic surveillance capabilities that exceeded most African nations combined. The National Health Laboratory Service processes millions of tests annually, generating epidemiological data crucial for public health responses.

Paleontology benefits from South Africa's extraordinary fossil record—the Rising Star cave system yielded Homo naledi, a hominin species that complicated human evolutionary trees. The University of the Witwatersrand's Evolutionary Studies Institute continues revealing how our ancestors lived and died, literally unearthing human prehistory.

Yet these successes coexist with harsh realities. Most South Africans receive science education in underfunded township schools where lab facilities are nonexistent and teachers lack training. Black researchers remain underrepresented in senior positions, a legacy of apartheid's exclusions that transformation policies have addressed too slowly. Brain drain affects all racial groups as talented scientists depart for opportunities in Australia, the UK, and North America. State-owned enterprises like Eskom's power crisis disrupts research through load-shedding that shuts down experiments and corrupts data. The National Research Foundation struggles with budget constraints, forcing difficult choices about which projects to fund. South Africa demonstrates that scientific excellence can emerge even in challenging conditions—but also shows how national dysfunction and historical injustice limit what might otherwise flourish far more broadly.`,
    issues: [
      "Persistent racial inequality in research positions reflecting apartheid legacy",
      "Brain drain of talented researchers to Australia, UK, and North America",
      "Power grid instability disrupts experiments and research continuity",
      "Vast disparities in STEM education quality between wealthy and township schools",
      "R&D funding constraints at 0.8% GDP despite strong research capabilities in select fields"
    ]
  },
  {
    name: 'South Korea',
    lat: 35.9078,
    lng: 127.7669,
    summary: `South Korea transformed itself from an agrarian nation to a technological powerhouse within a single lifetime, and its science infrastructure mirrors that extraordinary trajectory. The country now invests over 4.8% of GDP in R&D—the second-highest rate globally after Israel—channeling resources into research institutions and corporate labs with an intensity that reflects both ambition and anxiety about maintaining competitiveness. This isn't gentle academic science; it's research conducted at sprint pace, driven by national development imperatives and corporate competition.

KAIST, the Korea Advanced Institute of Science and Technology, stands as the crown jewel of this system. Founded in 1971 with advice from American consultants, it pioneered research-focused education when Korean universities emphasized teaching. Today KAIST researchers push boundaries in AI, robotics, materials science, and bioengineering. The Daejeon research complex surrounding it hosts government labs including the Korea Institute of Science and Technology and the Korea Basic Science Institute, their facilities matching those anywhere globally.

Electronics and materials research benefit from unprecedented synergy between academia and industry. Samsung operates research labs whose budgets dwarf many national science foundations, developing everything from next-generation semiconductors to flexible displays. LG, Hyundai, and SK similarly maintain substantial research operations, while government initiatives like the Institute for Basic Science received billion-dollar commitments to pursue fundamental research without immediate application requirements—unusual in Korea's historically utilitarian approach to science.

Biomedical research has accelerated dramatically, though not without controversy. Stem cell researcher Hwang Woo-suk's 2005 fraud scandal shocked the scientific community and prompted soul-searching about pressure to produce dramatic results. Since then, Korean science has implemented more rigorous oversight while maintaining ambitious goals. Seoul National University Hospital and the Asan Medical Center conduct clinical trials, and researchers contributed significantly to COVID-19 testing technology, developing PCR kits deployed worldwide.

The country faces demographic crisis that threatens this scientific infrastructure. Birth rates hit record lows, raising questions about future talent pipelines, while the intense competition for university placement creates stress that some argue stifles creativity. Most research funding flows to applied areas with commercial potential, leaving fundamental science comparatively underfunded despite recent reforms. And as U.S.-China technological competition intensifies, South Korea finds itself pressured to limit collaboration with Chinese institutions—complicated by geography, trade ties, and research networks built over decades. South Korean science succeeded by making strategic bets and executing them with remarkable discipline. Whether this model sustains through demographic decline and geopolitical turbulence will determine if the next generation matches the previous one's extraordinary achievements.`,
    issues: [
      "Demographic crisis with world's lowest birth rate threatens future scientific talent pipeline",
      "Geopolitical pressure to limit research collaboration with China despite deep ties",
      "Intense competition culture may stifle scientific creativity and risk-taking",
      "Funding bias toward applied research over fundamental science despite recent reforms",
      "Academic pressure and work culture contribute to mental health challenges for researchers"
    ]
  },
  {
    name: 'South Sudan',
    lat: 6.8770,
    lng: 31.3070,
    summary: `South Sudan became the world's newest nation in 2011, inheriting almost no scientific infrastructure from the Sudanese state that had systematically neglected southern regions for decades. Attempting to discuss organized research here confronts the reality that the country has spent most of its independent existence in civil war, famine, and state dysfunction. R&D spending is essentially nonexistent—not as a policy choice but because basic governmental functions barely operate. Yet even in these conditions, the impulse toward knowledge and problem-solving persists in forms adapted to extreme adversity.

The University of Juba reopened after independence, its campus damaged by years of conflict but attempting to provide higher education to a population desperate for it. Science instruction happens largely without laboratories—students learn chemistry from chalkboards, biology from diagrams, physics through thought experiments. Faculty members who studied abroad during the civil war years have returned with PhDs from Kenyan, Ugandan, and Egyptian universities, trying to build something from essentially nothing. But textbooks are scarce, electricity unreliable, and student fees unpaid as the economy collapses.

What scientific activity exists focuses on survival imperatives. Agricultural research, mostly conducted through partnerships with USAID and FAO, studies how to improve sorghum and cassava yields in degraded soils. These aren't controlled laboratory studies but desperate attempts to help subsistence farmers grow more food. Public health surveillance, coordinated by WHO and Médecins Sans Frontières, tracks disease outbreaks—cholera, malaria, kala-azar—though "research" is barely distinguishable from emergency response. Data collection happens on paper forms later entered into databases, if internet connectivity permits.

Environmental monitoring occurs remotely, through satellite imagery analyzed by institutions abroad. Scientists track deforestation, document wildlife populations, and map wetlands, but South Sudanese participation in this research is minimal. The country's oil industry, concentrated in Unity and Upper Nile states, operates without meaningful environmental oversight or impact studies, pollution concerns ignored amid economic desperation.

The deeper tragedy is human capital—bright students who might become scientists instead languish without opportunities, or flee to refugee camps in Uganda and Kenya where education access is limited. Those with means study abroad and rarely return, joining a diaspora that includes talented individuals contributing to institutions in East Africa and beyond while their homeland lacks even basic educational infrastructure. South Sudan represents science's absolute dependence on peace, stable institutions, and resources. Without these foundations, even the most dedicated individuals can do little beyond teaching from damaged textbooks in buildings without electricity, hoping someday conditions will improve enough to actually conduct research.`,
    issues: [
      "No functional research infrastructure due to ongoing civil conflict since independence",
      "Essentially zero government R&D spending amid state dysfunction and economic collapse",
      "Complete brain drain with educated population fleeing to neighboring countries",
      "Universities lack basic laboratory equipment, reliable electricity, and textbooks",
      "Scientific activity limited to emergency disease surveillance and survival-focused agriculture"
    ]
  },
  {
    name: 'Spain',
    lat: 40.4637,
    lng: -3.7492,
    summary: `Spanish science has traveled a complicated path from Franco-era isolation to European integration, now operating as a respected if sometimes overlooked member of the global research community. The country invests approximately 1.4% of GDP in R&D, below the EU average but supporting institutions with genuine capabilities across diverse fields. Spain's geographic position—bridging Europe and Africa, Atlantic and Mediterranean—shapes research priorities from marine science to renewable energy, while its language opens collaboration across Latin America.

The Consejo Superior de Investigaciones Científicas (CSIC), Spain's largest research organization, coordinates over 120 institutes covering everything from molecular biology to astronomy. CSIC researchers participate in major international projects—the Gran Telescopio Canarias on La Palma ranks among the world's largest optical telescopes, exploiting the Canary Islands' exceptional seeing conditions. Spanish physicists contribute to CERN experiments, while the Barcelona Supercomputing Center houses MareNostrum, one of Europe's most powerful computers used for climate modeling and molecular simulations.

Biomedical research clusters around institutions like the Spanish National Cancer Research Centre and the Barcelona Institute for Science and Technology. Spanish researchers contributed important work on Alzheimer's disease, stem cell biology, and immunology, publishing regularly in high-impact journals. The country's healthcare system provides research advantages—universal coverage means population-level health data that epidemiologists elsewhere might envy. COVID-19 showcased both strengths and weaknesses: Spanish scientists conducted important research on viral transmission and vaccine efficacy, but the health system's overwhelm during early pandemic phases exposed infrastructure weaknesses.

Renewable energy research reflects national imperatives—Spain pioneered concentrated solar power technology, and research institutions study everything from photovoltaics to offshore wind engineering. The country's long coastlines support marine science, with institutions studying Mediterranean ecology, Atlantic fisheries, and climate change impacts on both.

Yet Spanish science operates under persistent constraints. The 2008 financial crisis devastated research budgets, forcing brain drain as young researchers departed for positions in the UK, Germany, and United States. While funding has partially recovered, precarious employment dominates—researchers cycle through temporary contracts well into their careers, creating instability that hinders long-term planning. Regional politics complicates matters, as Catalonian research institutions navigate tensions between Barcelona and Madrid. The administrative burden researchers face—byzantine grant applications, slow reimbursements, bureaucratic procedures—consumes time better spent at the bench. Spain produces good science despite these obstacles rather than because of supportive systems. The country's challenge is translating capabilities into the kind of innovation ecosystem that retains talent and attracts international researchers, rather than serving as a training ground for careers built elsewhere.`,
    issues: [
      "R&D spending at 1.4% GDP remains below EU average despite innovation potential",
      "Persistent brain drain of young researchers to better-funded positions in Northern Europe",
      "Precarious employment with researchers stuck in temporary contracts into mid-career",
      "Heavy bureaucratic burden and slow grant processing hampers research efficiency",
      "Regional political tensions particularly affecting Catalonian institutions"
    ]
  },
  {
    name: 'Sri Lanka',
    lat: 7.8731,
    lng: 80.7718,
    summary: `Sri Lankan science emerges from a history shaped by colonial legacy, post-independence ambition, and decades of civil conflict that diverted resources from everything not directly related to survival. The country dedicates roughly 0.1% of GDP to R&D, among the world's lowest rates, a figure that explains much about why talented students view science careers as paths to emigration rather than domestic opportunity. Yet within these constraints, research continues at universities and institutes whose capabilities exceed what funding levels might suggest possible.

The University of Colombo and University of Peradeniya anchor academic research, their science faculties training most Sri Lankan doctors, engineers, and researchers. Tropical medicine research carries forward work begun during British colonial rule, with scientists studying dengue epidemiology, leptospirosis transmission, and snakebite treatment. Sri Lanka's position in the monsoon belt makes it ideal for studying vector-borne diseases, and researchers have contributed valuable work on insecticide resistance in mosquitoes and climate change impacts on disease ranges. The Medical Research Institute, Sri Lanka's oldest research facility, focuses on vaccine research and infectious disease surveillance despite equipment limitations.

Agricultural research centers on tea, rubber, and coconut—colonial plantation crops that remain economic mainstays. The Tea Research Institute in Talawakelle studies pest management, soil conservation on steep hillsides, and how climate change affects tea quality. This work matters economically but lacks glamour, rarely leading to international publications or citations. Rice research at the Department of Agriculture develops varieties resistant to flooding and drought, addressing food security concerns that intensified during the 2022 economic crisis.

Marine biology benefits from exceptional biodiversity—coral reefs, mangroves, and whale migration routes provide natural laboratories. Yet research infrastructure remains minimal, with universities lacking research vessels and sophisticated monitoring equipment. Scientists often collaborate with foreign institutions that provide boats, sensors, and funding that Sri Lankan agencies cannot.

The country's economic collapse in 2022 devastated what little research capacity existed. University laboratories ran out of basic reagents, unable to purchase imports as foreign currency evaporated. Power cuts interrupted experiments, and researchers struggled to reach labs during fuel shortages. This crisis accelerated existing brain drain—talented graduates already inclined toward opportunities abroad now see no reason to stay. STEM education emphasizes rote memorization for university entrance exams rather than experimental thinking, producing students skilled at test-taking but less prepared for actual research. Those who do pursue science often aim for medical degrees leading to emigration, or engineering degrees for IT sector jobs, rather than research careers. Sri Lankan science's fundamental challenge is circular—without investment, research remains weak; without strong research demonstrating value, investment remains unlikely. Breaking this cycle requires resources the country currently lacks.`,
    issues: [
      "Critically low R&D spending at 0.1% of GDP, among world's lowest rates",
      "2022 economic crisis caused research shutdown due to inability to purchase supplies",
      "Severe brain drain with science graduates viewing research as path to emigration",
      "STEM education emphasizes exam memorization over experimental thinking",
      "Minimal research infrastructure including lack of vessels for marine science"
    ]
  },
  {
    name: 'Sudan',
    lat: 12.8628,
    lng: 30.2176,
    summary: `Sudanese science navigates an obstacle course of political instability, economic crisis, and infrastructure collapse that has only worsened since the 2019 revolution toppled Omar al-Bashir's regime. The country spends negligible amounts on R&D—exact figures are unavailable but certainly below 0.2% of GDP—leaving research institutions to operate on fumes while talented individuals flee abroad. Yet despite these conditions, scientific activity persists at the University of Khartoum, regional universities, and specialized institutes, driven by researchers who remain despite better opportunities elsewhere.

Medical research necessarily dominates given Sudan's disease burden and healthcare challenges. The Institute of Endemic Diseases at the University of Khartoum studies tropical diseases that disproportionately affect Sudan—visceral leishmaniasis, schistosomiasis, meningitis. Researchers there work with minimal resources, conducting field studies in remote regions where conflict and infrastructure gaps create challenging logistics. The National Public Health Laboratory provides disease surveillance, though limited capacity means samples sometimes travel to foreign labs for analysis. Sudan's experience with infectious disease outbreaks provides grim opportunities for epidemiological research, though findings often reach international journals only through collaboration with foreign institutions.

Agricultural research occurs at universities and the Agricultural Research Corporation, studying sorghum and millet varieties suited to semi-arid conditions, and investigating how to maintain productivity as rainfall patterns shift with climate change. The Blue Nile and White Nile create irrigation possibilities but also conflicts over water allocation that pit upstream farmers against downstream needs—hydrological research has immediate political implications. Range management research addresses desertification and the tensions between settled farmers and nomadic herders, work that intersects ecology, climatology, and social conflict.

Archaeology and anthropology benefit from Sudan's extraordinary heritage—more pyramids than Egypt, ancient Nubian civilizations, and human evolution sites. Yet most excavation and analysis happens through foreign expeditions, with Sudanese researchers often junior partners in projects studying their own history. The National Museum in Khartoum preserves artifacts but lacks climate control that proper conservation demands.

The ongoing civil conflict that erupted in 2023 has devastated what little research capacity remained. Universities closed, laboratories were looted, and researchers fled to Egypt, Uganda, or further abroad. The brain drain that was already severe has become total—young Sudanese with scientific training see no future in a country descended into warfare. Before the current crisis, Sudan's scientific diaspora maintained connections, occasionally collaborating remotely or returning for short periods. Now those connections fray as the country's institutions cease functioning. Sudanese science's revival, if it comes, awaits not just funding or equipment but the basic condition of peace that has eluded the country for most of its independent existence.`,
    issues: [
      "Ongoing civil conflict since 2023 has closed universities and destroyed research facilities",
      "R&D spending below 0.2% of GDP among world's lowest national investments",
      "Complete brain drain as researchers flee to Egypt, Uganda, and beyond",
      "Critical shortages of basic laboratory supplies and equipment",
      "Foreign archaeological research extracts knowledge without building local capacity"
    ]
  },
  {
    name: 'Suriname',
    lat: 3.9193,
    lng: -56.0278,
    summary: `Science in Suriname operates at the margins of visibility, a small South American nation whose research infrastructure barely registers on continental scales yet maintains surprising capabilities in specific domains. The country spends roughly 0.1% of GDP on R&D, reflecting both limited resources and competing priorities in a developing economy. Anton de Kom University in Paramaribo hosts most research activity, its faculties training the doctors, engineers, and scientists that Suriname produces in modest numbers—many destined for careers in the Netherlands, Suriname's former colonial ruler.

Biodiversity research capitalizes on Suriname's extraordinary natural endowment—over 90% forest cover makes it one of the world's most heavily forested nations. The Amazon Conservation Team works with indigenous communities to document traditional ecological knowledge, mapping plant species used in indigenous medicine. These ethnobotanical studies have identified promising compounds for pharmaceutical research, though commercialization requires partnerships with foreign institutions that often capture most benefits. Conservation International maintains research presence in Suriname's interior, studying primate populations, bird migrations, and jaguar ecology. The data generated contributes to global biodiversity databases, though Surinamese scientists are often junior partners in projects conducted on their territory.

Medical research focuses on tropical diseases prevalent in Suriname's interior—malaria remains endemic in mining areas, while dengue periodically erupts in coastal regions. The Ministry of Health conducts disease surveillance with support from the Pan American Health Organization, though analysis capacity is limited. HIV research gained prominence due to Suriname's relatively high prevalence rates, with studies examining transmission patterns in the ethnically diverse population. The country's medical schools train competent physicians, but research expectations are minimal and facilities rudimentary.

Mining research has complicated implications—gold mining drives much of Suriname's interior economy, often through small-scale operations using mercury amalgamation that poisons rivers. Environmental research documents this damage, studying mercury levels in fish and human populations, but economic dependence on gold complicates policy responses. Climate research monitors sea level rise threatening Paramaribo and coastal agriculture, where much of Suriname's population concentrates.

The fundamental challenge is scale—Suriname's population of 600,000 cannot support specialized research institutions across multiple domains. Talented students study abroad, usually in the Netherlands, and many never return. The Dutch language connection facilitates European collaboration but limits engagement with Spanish and Portuguese-speaking neighbors. Suriname's science strategy, such as it exists, involves partnerships where foreign institutions provide equipment and expertise while Surinamese researchers contribute local knowledge and access. It's an asymmetric arrangement that produces some scientific output while reinforcing dependence on external support.`,
    issues: [
      "Extremely low R&D spending at ~0.1% GDP limits research infrastructure",
      "Small population of 600,000 cannot sustain specialized research institutions",
      "Brain drain to Netherlands as Dutch language connection facilitates emigration",
      "Foreign biodiversity research often extracts value without building local capacity",
      "Language barriers limit collaboration with Spanish/Portuguese-speaking regional neighbors"
    ]
  },
  {
    name: 'Sweden',
    lat: 60.1282,
    lng: 18.6435,
    summary: `Swedish science operates with the quiet confidence of a system that has worked well for generations. The country invests over 3.4% of GDP in R&D, consistently ranking among global leaders and reflecting a social consensus that science drives prosperity and wellbeing. This isn't new—Sweden's scientific tradition stretches back centuries through figures like Linnaeus, Celsius, and Nobel himself. Today's research landscape blends academic excellence, strong industry R&D, and government support in ways that many nations attempt to emulate but few successfully replicate.

The Karolinska Institute in Stockholm stands among the world's elite medical research institutions, its faculty awarding the Nobel Prize in Physiology or Medicine annually. Researchers there make genuine contributions to immunology, neuroscience, and clinical medicine, publishing in top journals and spinning off biotech companies. Sweden's universal healthcare system provides research advantages—comprehensive health registries enable epidemiological studies tracking outcomes across entire populations over decades. Studies on disease progression, treatment effectiveness, and genetic factors benefit from data quality and completeness that privacy-concerned Americans or fragmented European systems struggle to match.

Physics and engineering research clusters around universities in Stockholm, Uppsala, Gothenburg, and Lund, the latter hosting the European Spallation Source, a next-generation neutron research facility that will enable materials science studies impossible elsewhere. Swedish physicists contribute to CERN, ESA space missions, and gravitational wave detection. The technical universities maintain close industry ties—Ericsson, Volvo, Scania, and other companies fund university research and recruit graduates, creating innovation pipelines that academia-industry separation elsewhere often disrupts.

Environmental and climate research carries particular Swedish emphasis. Researchers study Arctic warming, Baltic Sea ecology, and forest carbon dynamics, work that informs both national policy and international climate negotiations. The Stockholm Resilience Centre developed the planetary boundaries framework that has shaped sustainability discussions globally. Sweden's own transition away from fossil fuels provides living laboratory for energy system transformation research.

Yet Swedish science faces emerging challenges. Research funding increasingly concentrates in established groups and institutions, making it harder for young investigators to establish independence. The internationalization of Swedish universities—instruction increasingly in English, more foreign students and faculty—brings diversity but also raises questions about losing distinctly Swedish approaches. Industry R&D has declined as companies move research abroad or cut long-term programs under shareholder pressure. Immigration politics complicates international recruitment of researchers. And the Swedish model's sustainability depends on continued political consensus around science funding—consensus that some populist movements question. Still, Sweden demonstrates what sustained investment, institutional quality, and social trust can achieve—a research system producing scientific advances, economic benefits, and trained talent in proportions far exceeding the country's modest population.`,
    issues: [
      "Research funding increasingly concentrated in established groups makes it hard for young investigators",
      "Declining industry R&D as companies move research abroad or cut long-term programs",
      "Tension between internationalization benefits and preserving Swedish research traditions",
      "Immigration politics complicating international recruitment of research talent",
      "Potential threat to funding consensus from populist political movements"
    ]
  },
  {
    name: 'Switzerland',
    lat: 46.8182,
    lng: 8.2275,
    summary: `Swiss science occupies an almost unfair position in the global research landscape, combining extraordinary wealth, political stability, multilingual access to European and American networks, and a cultural commitment to excellence that produces results disproportionate even to generous investment. The country dedicates over 3.4% of GDP to R&D, with funding split roughly evenly between government support and corporate research—pharmaceutical giants Roche and Novartis, specialty chemical companies, and precision engineering firms maintain research operations whose budgets rival those of small nations. This is science conducted with resources that most researchers can only imagine.

ETH Zurich and EPFL in Lausanne rank among the world's elite technical universities, their laboratories equipped with whatever instruments research demands, their salaries attracting top international talent. Einstein did his revolutionary physics at Bern's patent office and the University of Zurich—a legacy that ETH cultivates carefully. Today's researchers pursue quantum computing, synthetic biology, climate science, and materials engineering at frontiers of their fields. The Swiss Federal Institutes of Technology system maintains standards where mediocrity simply isn't tolerated, producing Nobel laureates with regularity that would seem improbable if the results weren't so consistent.

CERN straddles the Swiss-French border near Geneva, its Large Hadron Collider discovering the Higgs boson through collaboration involving thousands of physicists globally—but with Switzerland providing stable headquarters and much of the administrative and technical infrastructure. This pattern repeats across fields: Switzerland hosts international organizations, provides neutral ground for collaboration, and ensures excellent logistics that let researchers focus on science rather than bureaucratic obstacles.

Pharmaceutical research dominates Basel, where Roche and Novartis employ thousands in drug discovery and development. The industry concentration creates spillovers—talented medicinal chemists, clinical researchers, and regulatory specialists clustering where opportunities exist. Swiss universities benefit from proximity, their graduates recruited immediately, their professors consulting and collaborating with industry labs. It's a innovation ecosystem that functions smoothly because resources are ample and institutional quality high.

Climate research benefits from Alpine glaciers that serve as climate archives, where ice cores preserve atmospheric records stretching back millennia. Swiss researchers study glacier retreat, permafrost stability, and how climate change affects mountain ecosystems—work with implications beyond Swiss borders as warming threatens water supplies across Asia and South America dependent on mountain snowpack. Yet Swiss science faces its own challenges, mostly involving success's complications rather than failure's constraints. Extremely high costs make research expensive—a PhD student's stipend in Zurich exceeds faculty salaries in many countries. The small population means limited domestic talent, requiring constant international recruitment that has sparked political backlash from conservative parties uncomfortable with immigration. And Swiss participation in EU research programs has become complicated by political tensions over immigration policy, threatening the easy access to European networks that Swiss science has long enjoyed. These are problems of prosperity, certainly, but they still matter for maintaining the excellence Switzerland has built.`,
    issues: [
      "Extremely high costs make research expensive compared to other nations",
      "Small population requires constant international talent recruitment amid immigration politics",
      "EU research participation threatened by political tensions over immigration policy",
      "Wealth disparities create pressure on researchers from abroad facing high living costs",
      "Dependence on pharmaceutical industry creates vulnerability to corporate research priorities"
    ]
  },
  {
    name: 'Syria',
    lat: 34.8021,
    lng: 38.9968,
    summary: `To speak of Syrian science in the present tense requires acknowledging what civil war has destroyed—universities shelled, laboratories looted, researchers killed or scattered across continents in a diaspora that gutted the country's intellectual infrastructure. Before 2011, Syria maintained a modest research capacity centered at Damascus University, Aleppo University, and specialized institutes. That system has been decimated by over a decade of conflict, sanctions that prevent equipment imports, and brain drain so severe that entire academic departments ceased functioning as faculty fled to Turkey, Lebanon, Europe, or North America.

Damascus University, the Arab world's second-oldest university founded in 1923, once hosted research across science disciplines. Chemistry departments conducted pharmaceutical research, physicists taught and experimented, medical faculties trained doctors and pursued clinical studies. The Higher Institute for Applied Sciences and Technology represented Syria's attempt at elite technical education. These institutions still technically exist, but in forms so degraded that calling what happens there "research" strains the term's meaning. Laboratories lack reagents, equipment broke years ago without spare parts, and libraries haven't received new journals since sanctions cut academic subscriptions. Students learn from outdated textbooks if textbooks exist at all.

Medical research, such as it occurs, focuses on documenting war's health impacts—chemical weapons effects on civilian populations, trauma surgery techniques developed in desperate circumstances, epidemiology of diseases that resurged when vaccination programs collapsed. Syrian doctors published papers on treating war injuries with minimal resources, performing surgeries in basement hospitals during airstrikes. This is research born from catastrophe, where methodology sections describe adapting techniques when proper facilities don't exist.

Archaeological research, which once studied Syria's extraordinary historical sites spanning Mesopotamian, Roman, and Islamic civilizations, now documents destruction rather than discovery. Researchers abroad use satellite imagery to assess damage to Palmyra, Aleppo's ancient souq, and countless other sites looted or destroyed during conflict. Syrian archaeologists who managed to escape contribute to this documentation, their expertise employed in cataloging what was lost rather than conducting new excavations.

The Syrian scientific diaspora—researchers now scattered globally—represents both tragedy and potential. Talented scientists trained in Damascus or Aleppo now work in Turkish universities, German research institutes, Canadian hospitals, or American tech companies, their skills benefiting other nations while Syria burns. Some maintain hope of eventual return, participating in initiatives planning for postwar reconstruction. But the scale of destruction—physical, institutional, human—means Syrian science, if it rebuilds at all, faces decades of recovery even after peace arrives. Meanwhile, a generation grows up without proper science education, their potential unrealized because the basic conditions for learning and discovery simply don't exist. Syrian science has become another casualty of war, its revival awaiting a peace that remains desperately distant.`,
    issues: [
      "Civil war has destroyed research infrastructure and caused universities to cease normal function",
      "International sanctions prevent importing laboratory equipment and scientific supplies",
      "Complete brain drain with researchers fled to Turkey, Europe, and North America",
      "Generation growing up without proper STEM education due to collapsed school systems",
      "Decades of recovery needed even after peace due to scale of institutional destruction"
    ]
  }
];

async function insertSummaries() {
  console.log('Starting to insert Science & Research summaries...\n');

  let successCount = 0;
  let failureCount = 0;

  for (const summary of summaries) {
    try {
      // Check if summary already exists
      const existing = await prisma.locationSummary.findFirst({
        where: {
          name: summary.name,
          type: 'country',
          category: 'science'
        }
      });

      if (existing) {
        console.log(`❌ ${summary.name}: Summary already exists, skipping`);
        failureCount++;
        continue;
      }

      // Insert new summary
      await prisma.locationSummary.create({
        data: {
          name: summary.name,
          type: 'country',
          country: summary.name,
          lat: summary.lat,
          lng: summary.lng,
          category: 'science',
          summary: summary.summary,
          issues: JSON.stringify(summary.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      });

      console.log(`✅ ${summary.name}: Inserted (${summary.summary.length} chars)`);
      successCount++;
    } catch (error) {
      console.log(`❌ ${summary.name}: Error - ${error}`);
      failureCount++;
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Total countries: ${summaries.length}`);
  console.log(`Successfully inserted: ${successCount}`);
  console.log(`Failed/Skipped: ${failureCount}`);
}

insertSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
