import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const scienceSummaries = [
  { name: 'Namibia', type: 'country' as const, country: 'Namibia', lat: -22.9576, lng: 18.4904, category: 'science',
    summary: `Namibia's scientific capacity is modest but benefits from political stability and good governance relative to many African nations. R&D spending is around 0.4% of GDP, and research focuses on arid land ecology, wildlife management, and marine resources along the Skeleton Coast. The University of Namibia in Windhoek leads research efforts.

Research strengths include desert ecology—the Namib is the world's oldest desert, creating unique evolutionary adaptations—wildlife conservation (Namibia has pioneered community-based conservation models), marine biology (the cold Benguela Current creates rich fisheries), and sustainable land management. The Gobabeb Research Station in the Namib Desert attracts international researchers studying desert adaptations.

Namibia's uranium mining and diamond industries involve foreign technology with limited domestic R&D. Brain drain is moderate—Namibians who pursue advanced degrees often study in South Africa and many don't return, but governance quality helps retain some talent. The country's small population (2.5 million) fundamentally limits research scale. German colonial legacy means some research partnerships with Germany continue.

Recent investments in science education and the University of Science and Technology aim to build capacity, but progress is gradual. Namibia's scientific future involves maintaining niches in desert ecology and conservation while dependent on partnerships for most sophisticated research.`,
    issues: JSON.stringify(["Small population (2.5M) limiting research scale", "Moderate brain drain to South Africa", "Mining industries involve limited domestic R&D", "R&D at 0.4% GDP insufficient for expansion", "German colonial disruption still affecting institutions"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Nepal', type: 'country' as const, country: 'Nepal', lat: 28.3949, lng: 84.1240, category: 'science',
    summary: `Nepal's scientific capacity is limited, with R&D spending below 0.3% of GDP and research infrastructure concentrated in Kathmandu. Tribhuvan University and the Nepal Academy of Science and Technology coordinate limited research, focusing on Himalayan ecology, earthquake engineering, and public health challenges affecting mountainous terrain.

Research priorities include seismology and earthquake-resistant construction (the 2015 Gorkha earthquake killed 9,000 and revealed infrastructure vulnerabilities), glaciology and climate change impacts on Himalayan glaciers feeding major Asian rivers, high-altitude physiology and medicine, and hydropower engineering. Nepal's position along the Himalayan front makes it critical for understanding tectonic processes and mountain ecosystem dynamics.

International research teams study Everest and other peaks extensively, but Nepalese scientific participation is limited. Brain drain is severe—Nepali students who obtain degrees abroad (India, US, UK, Australia) overwhelmingly don't return. Political instability, Maoist insurgency legacy, and frequent government changes disrupt research planning. The country's landlocked position and difficult terrain complicate logistics.

Recent emphasis on hydropower development and tourism requires scientific management, but capacity is insufficient. Climate change threatens glacier-fed water supplies for hundreds of millions downstream, requiring research Nepal cannot conduct independently. Chinese and Indian geopolitical competition affects research collaborations and funding access.`,
    issues: JSON.stringify(["R&D below 0.3% GDP with limited infrastructure", "Severe brain drain to India, US, UK, Australia", "Himalayan research dominated by foreign expeditions", "Political instability disrupting research planning", "Climate threats requiring research capacity that doesn't exist"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Netherlands', type: 'country' as const, country: 'Netherlands', lat: 52.1326, lng: 5.2913, category: 'science',
    summary: `The Netherlands operates one of Europe's most productive research systems, with R&D spending around 2.3% of GDP and scientific excellence across fields from physics to agricultural science to water management. The country has produced 21 Nobel laureates and maintains research capacity that far exceeds what its modest size (17 million) would predict.

Dutch research strengths include water management and hydraulic engineering (essential for a country where 26% of land is below sea level), agricultural science (Wageningen University is world-leading in food systems research), astronomy (Dutch researchers contribute significantly to radio astronomy and the Square Kilometre Array), and materials science. The Netherlands hosts major research facilities including ASML's extreme ultraviolet lithography technology, critical for advanced semiconductor manufacturing worldwide.

Universities including Delft Technical University, University of Amsterdam, Leiden University, and Utrecht University combine with independent institutes like AMOLF and NIOZ to create a comprehensive research ecosystem. The Netherlands excels at university-industry collaboration, particularly in high-tech manufacturing and life sciences. Dutch pharmaceutical companies (like former DSM, now spun off) conduct significant R&D.

Challenges include competition for talent from larger neighbors, relatively high costs constraining some research, and Brexit's impact on UK collaborations. However, English proficiency, quality of life, and cycling infrastructure help attract international researchers. The Netherlands' compact size enables efficient collaboration networks.

Dutch science's future appears secure—sustained funding, strong institutions, international integration, and focus on practical applications alongside fundamental research position the Netherlands to remain a major European research player despite modest population.`,
    issues: JSON.stringify(["Competition for talent with Germany, UK", "High costs constraining some research areas", "Brexit affecting UK research collaborations", "Small domestic market for commercialization", "Dependence on international talent and partnerships"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'New Zealand', type: 'country' as const, country: 'New Zealand', lat: -40.9006, lng: 174.8860, category: 'science',
    summary: `New Zealand operates a highly regarded research system despite its small size (5 million population) and remote location, with R&D spending around 1.4% of GDP and scientific strengths in ecology, agricultural science, seismology, and Antarctic research. The country has produced 3 Nobel laureates and maintains research quality recognized globally.

The University of Auckland, University of Otago, and specialized Crown Research Institutes conduct research across fields. New Zealand's geographic isolation has created unique evolutionary outcomes—the country had no land mammals before human arrival, enabling distinctive ecology and conservation biology research. Kiwi, kakapo, and other endemic species attract researchers studying island biogeography and extinction prevention.

Agricultural research excellence reflects economic importance—dairy, sheep, and wine industries depend on scientific innovation. New Zealand developed pastoral agriculture systems now used globally. The country's seismic activity (part of the Pacific Ring of Fire) drives earthquake engineering and volcanology research. New Zealand operates Scott Base in Antarctica, contributing to climate science and Southern Ocean research.

Challenges include brain drain to Australia (geographical proximity and higher salaries make this constant), small population limiting research workforce scale, and extreme distance from major research hubs increasing collaboration costs. However, quality of life and environmental amenities help retain some talent. Recent increases in R&D funding aim to address gaps.

New Zealand's scientific future involves maintaining excellence in niches (ecology, agriculture, seismology) while expanding capacity strategically. The country punches above its weight but faces fundamental constraints from size and geography.`,
    issues: JSON.stringify(["Constant brain drain to Australia due to proximity and higher pay", "Small population (5M) limiting workforce scale", "Extreme distance increasing collaboration costs", "R&D at 1.4% GDP below OECD average", "Recent funding increases but from low base"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Nicaragua', type: 'country' as const, country: 'Nicaragua', lat: 12.8654, lng: -85.2072, category: 'science',
    summary: `Nicaragua's scientific capacity is extremely limited, with R&D spending below 0.1% of GDP and research infrastructure devastated by decades of conflict, dictatorship, and economic crisis. The National Autonomous University of Nicaragua (UNAN) conducts minimal research, focused on immediate development challenges rather than advancing scientific knowledge.

Research priorities reflect vulnerabilities: volcanic and seismic hazard monitoring (Nicaragua is part of the Central American volcanic arc with active volcanoes), hurricane and climate disaster management, tropical disease control, and agricultural research on coffee and basic grains. The recent political crisis under Ortega dictatorship has further damaged universities, with faculty purged and students repressed.

Brain drain is catastrophic—Nicaraguans who obtain higher education frequently emigrate to Costa Rica, US, or elsewhere fleeing repression and poverty. The 2018 protests and subsequent crackdown saw universities attacked and academics arrested or expelled. International research collaborations have collapsed as the Ortega regime isolated Nicaragua diplomatically.

Nicaragua's natural resources—volcanoes, lakes, biodiversity—require research for sustainable management, but capacity doesn't exist. Foreign researchers study these features but with minimal Nicaraguan participation. The economy, based on agriculture and remittances, involves zero R&D.

Nicaragua's scientific future is bleak under current authoritarian governance. Recovery requires regime change and decades of rebuilding—neither imminent. The country will remain entirely dependent on foreign expertise, unable to study or manage its own resources.`,
    issues: JSON.stringify(["R&D below 0.1% GDP; Ortega dictatorship destroying universities", "Catastrophic brain drain fleeing repression", "2018 protests crackdown: universities attacked, academics expelled", "International collaborations collapsed due to diplomatic isolation", "Political repression making research careers impossible"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Niger', type: 'country' as const, country: 'Niger', lat: 17.6078, lng: 8.0817, category: 'science',
    summary: `Niger's scientific capacity is minimal, with R&D spending below 0.2% of GDP and research infrastructure barely existing. Abdou Moumouni University in Niamey conducts limited research, but security crisis, extreme poverty, and recent military coups have prevented development. Niger ranks near the bottom of global development indicators.

Research priorities focus on survival: drought and desertification (Niger is mostly Sahara and Sahel), agriculture and livestock for arid environments, water resource management, and public health—Niger has some of Africa's worst health indicators including highest fertility rate globally. International agricultural research centers conduct work on pearl millet and cowpeas adapted to Sahel conditions.

Niger's uranium deposits (significant nuclear fuel source for France historically) are exploited with French technology and zero Nigerien R&D. Jihadist insurgencies in the west (Boko Haram) and elsewhere have displaced populations and closed schools. Recent military coups (2023) and alliance with Russia/Wagner have isolated Niger diplomatically, cutting Western research partnerships.

Brain drain is total—Nigeriens who obtain education flee to Senegal, Côte d'Ivoire, France, or elsewhere. The handful with advanced degrees work for international organizations or remain abroad. Climate change threatens to make parts of Niger uninhabitable, but research to address this is conducted by foreigners if at all.

Niger's scientific future is nonexistent under current conditions. The country faces existential challenges—climate change, population growth, extremism—requiring research to address, but circumstances make this impossible. Niger will remain entirely dependent on external expertise indefinitely.`,
    issues: JSON.stringify(["R&D below 0.2% GDP; near-bottom global development", "Security crisis and jihadist insurgencies closing schools", "Recent military coup isolating Niger diplomatically", "Total brain drain: educated flee to Senegal, France", "Uranium mining involves zero Nigerien R&D"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Nigeria', type: 'country' as const, country: 'Nigeria', lat: 9.0820, lng: 8.6753, category: 'science',
    summary: `Nigeria operates Africa's largest scientific establishment by population potential (220 million people), with R&D spending around 0.2% of GDP—woefully inadequate for the continent's most populous nation. Universities including University of Ibadan, University of Lagos, and Ahmadu Bello University conduct research, but chronic underfunding, brain drain, and insecurity constrain capacity dramatically.

Nigerian research focuses on tropical agriculture (cassava, yam, sorghum, oil palm), petroleum engineering (supporting the massive oil industry, though most sophisticated R&D occurs abroad), tropical medicine (malaria, Lassa fever, other endemic diseases), and renewable energy. The International Institute of Tropical Agriculture (IITA) headquarters in Ibadan leads regional agricultural research.

Nigeria's scientific potential is enormous—educated diaspora population rivals domestic researchers, with thousands of Nigerian-born scientists working at top global institutions. However, the brain drain is catastrophic: Nigerian PhDs overwhelmingly seek positions in the US, UK, South Africa, or elsewhere rather than return to universities plagued by strikes, unpaid salaries, and dysfunctional infrastructure. Boko Haram insurgency in the northeast has devastated education, kidnapping students and destroying schools.

Oil wealth has not translated into research investment—corruption and mismanagement divert resources. Private sector R&D is minimal despite industrial presence. Recent tech sector growth in Lagos shows potential, but remains focused on applications rather than fundamental research. Academic quality varies wildly across institutions.

Nigeria's scientific future depends on governance reform, sustained funding increases, and creating conditions that retain talent. With political will, Nigeria could become Africa's research leader given demographic scale. Without change, continued underperformance relative to potential.`,
    issues: JSON.stringify(["Woefully inadequate R&D at 0.2% for 220M population", "Catastrophic brain drain: Nigerian PhDs flee to US, UK, SA", "University strikes, unpaid salaries, dysfunctional infrastructure", "Boko Haram destroying education in northeast", "Oil wealth not translating to research investment due to corruption"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'North Korea', type: 'country' as const, country: 'North Korea', lat: 40.3399, lng: 127.5101, category: 'science',
    summary: `North Korea's scientific capacity is shrouded in secrecy, with R&D spending unknown but clearly concentrated on military applications—nuclear weapons, ballistic missiles, and conventional arms. Kim Il Sung University and specialized military research institutes conduct work, but information is extremely limited and unreliable due to regime control.

North Korea has demonstrated technical capacity through nuclear weapons development (multiple tests since 2006) and intercontinental ballistic missile technology, indicating sophisticated physics and engineering expertise despite international sanctions and isolation. The country operates a small nuclear reactor and uranium enrichment facilities. However, these military programs absorb resources while civilian research languishes.

Non-military research capacity is minimal—agriculture barely feeds the population (periodic famines kill thousands), healthcare is primitive outside Pyongyang elite facilities, and environmental degradation proceeds unchecked. The regime's juche ideology of self-reliance theoretically emphasizes science, but in practice means isolation from global research networks and autarkic development that fails to meet needs.

Brain drain affects even totalitarian North Korea—defectors include scientists and engineers who flee to South Korea or China. The country's severe poverty, malnutrition affecting children's cognitive development, and political surveillance create conditions hostile to genuine scientific inquiry. Access to information is controlled, and researchers cannot participate in international collaborations.

North Korea's scientific trajectory under current regime is stagnation in civilian sectors while maintaining military research sufficient for weapons programs. Genuine scientific development requires regime change—until then, North Korean science will remain isolated, militarized, and irrelevant to global research.`,
    issues: JSON.stringify(["R&D unknown but concentrated on military: nuclear weapons, missiles", "Complete isolation from global research networks", "Civilian research minimal: famines, primitive healthcare", "Brain drain even from totalitarian state via defections", "Information control and surveillance preventing genuine inquiry"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'North Macedonia', type: 'country' as const, country: 'North Macedonia', lat: 41.6086, lng: 21.7453, category: 'science',
    summary: `North Macedonia's scientific capacity is limited, with R&D spending around 0.4% of GDP and research infrastructure struggling since independence from Yugoslavia. Saints Cyril and Methodius University in Skopje leads research, but resources are minimal and brain drain is severe.

Yugoslav-era Macedonia had modest research infrastructure serving the federation. Independence, Greek naming dispute (resolved only in 2019), ethnic tensions, and economic underdevelopment have prevented research capacity growth. What research occurs focuses on seismology (the region is seismically active), agriculture, and public health.

Brain drain devastates Macedonian science—educated citizens emigrate to EU countries (particularly Germany, Austria, Slovenia) seeking opportunities. The country's small size (2 million population) limits research workforce. Recent EU candidacy status may eventually provide access to research funding, but progress is slow.

North Macedonia's scientific future depends on EU integration pathway potentially bringing funding and reducing brain drain. Current trajectory suggests continued modest capacity in limited areas, heavily dependent on regional and international partnerships. The country's scale fundamentally constrains independent research development.`,
    issues: JSON.stringify(["R&D at 0.4% GDP for small population (2M)", "Severe brain drain to Germany, Austria, Slovenia", "Yugoslav research infrastructure declined since independence", "Greek naming dispute delayed development until 2019", "EU candidacy not yet providing significant research funding"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Norway', type: 'country' as const, country: 'Norway', lat: 60.4720, lng: 8.4689, category: 'science',
    summary: `Norway operates a highly developed research system, with R&D spending around 2.1% of GDP and scientific capacity that leverages oil wealth, strategic focus areas, and Nordic cooperation. The country's universities and specialized institutes conduct excellent research in fields from marine science to renewable energy to Arctic studies.

Norwegian research strengths include petroleum engineering (supporting the massive North Sea oil industry), marine and fisheries science (Norway's coastline and fisheries are economically vital), Arctic research (Svalbard provides unique high-latitude access), and renewable energy—particularly hydropower (Norway generates nearly 100% of electricity from hydro). The Institute of Marine Research and SINTEF (Scandinavia's largest research organization) are world-class.

Universities including University of Oslo, Norwegian University of Science and Technology (NTNU), and University of Bergen maintain strong programs. Norwegian researchers contribute significantly to climate science, oceanography, and polar research. The country's sovereign wealth fund (from oil revenues) provides unusual financial security enabling long-term research planning.

Challenges include Norway's small population (5.4 million) limiting workforce scale, high costs making research expensive, and tension between oil industry dependence and climate research findings. Brain drain is moderate—some researchers seek larger environments abroad, but quality of life helps retain talent. Norway's geographic peripherality can complicate collaborations.

Norway's scientific future appears secure—oil wealth funding research, strategic focus on national strengths, Nordic cooperation, and high quality of life position Norway to maintain research excellence despite small scale. The challenge is managing transition from oil economy while maintaining research investment.`,
    issues: JSON.stringify(["Small population (5.4M) limiting workforce scale", "Extremely high costs making research expensive", "Tension between oil dependence and climate research", "Geographic peripherality complicating collaborations", "Future research funding threatened by oil transition"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Oman', type: 'country' as const, country: 'Oman', lat: 21.4735, lng: 55.9754, category: 'science',
    summary: `Oman's scientific capacity is modest despite oil wealth, with R&D spending around 0.2% of GDP—low for a high-income country. Sultan Qaboos University conducts most research, focusing on petroleum engineering, desalination, marine science, and archaeology. The country's late development (modern era begins only in 1970) means research traditions are recent.

Research priorities include oil and gas technology (Oman uses enhanced oil recovery extensively), water resources and desalination (critical in arid environment), marine science (the Arabian Sea and Gulf of Oman support fisheries and shipping), and Omani cultural heritage and archaeology. The country's frankincense trees and unique desert ecosystems attract some ecological research.

Oman sends students abroad for advanced education (primarily to UK, US, Australia) but many don't return to research careers offering fewer rewards than other professions. The country's small citizen population (Omanis are a minority in their own country due to expatriate workers) limits research workforce. Oil industry R&D involves foreign companies with limited technology transfer.

Recent economic diversification efforts under Vision 2040 include modest science and technology initiatives, but implementation is slow. Oman lacks the research ambitions seen in UAE or Qatar—the country prioritizes stability over rapid transformation. Authoritarian governance constrains academic freedom, though less repressively than some Gulf neighbors.

Oman's scientific trajectory is gradual capacity building from a low base, with research remaining secondary to other development priorities. The country will likely remain dependent on foreign expertise and partnerships for sophisticated research.`,
    issues: JSON.stringify(["Low R&D at 0.2% of GDP despite oil wealth", "Late development (modern era only from 1970)", "Brain drain: students abroad don't return to research", "Small citizen population limiting workforce", "Oil industry involves limited Omani R&D"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Pakistan', type: 'country' as const, country: 'Pakistan', lat: 30.3753, lng: 69.3451, category: 'science',
    summary: `Pakistan's scientific capacity is substantial in absolute terms but inadequate for its population (230 million), with R&D spending around 0.3% of GDP—far too low for a nuclear-armed state with regional ambitions. Universities including Quaid-i-Azam, LUMS, and NUST conduct research, but chronic underfunding, brain drain, and political instability constrain potential.

Pakistani research focuses on nuclear technology (Pakistan developed nuclear weapons indigenously), agriculture (wheat, rice, cotton are vital), water resources (the Indus River system is Pakistan's lifeline), and seismology (frequent devastating earthquakes). The Pakistan Atomic Energy Commission operates research reactors and nuclear facilities. Agricultural research addresses food security for a rapidly growing population.

Pakistan's scientific paradox: capable of sophisticated nuclear and missile programs while basic research infrastructure crumbles. Military research absorbs resources while civilian universities struggle. The country produces many STEM graduates, but brain drain is catastrophic—Pakistani scientists and engineers flood to the Gulf, UK, US, and elsewhere. Terrorism and violence have made some regions inaccessible for research.

Recent political instability, economic crisis, and the ousting of Imran Khan have created uncertainty affecting research planning. Madrasah education produces minimal STEM graduates despite enrolling millions. Women's participation in science is limited by social constraints. Funding crises force university closures and unpaid faculty.

Pakistan's scientific future requires dramatic increases in civilian R&D spending, addressing brain drain, and political stability. The demographic scale means Pakistan should be a major regional research player, but current trajectory suggests continued underperformance relative to potential.`,
    issues: JSON.stringify(["Extremely low R&D at 0.3% for 230M population", "Catastrophic brain drain to Gulf, UK, US", "Military research absorbing resources from civilian science", "Political instability and economic crisis disrupting planning", "Terrorism making some regions inaccessible"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Palestine', type: 'country' as const, country: 'Palestine', lat: 31.9522, lng: 35.2332, category: 'science',
    summary: `Palestinian scientific capacity exists under extreme constraints of occupation, with R&D spending unknown but certainly minimal amid ongoing conflict. Universities including Birzeit, An-Najah National, and Islamic University of Gaza conduct research despite movement restrictions, military incursions, and violence that repeatedly disrupt operations.

Palestinian researchers focus on fields relevant to their situation: water resource management (critical in water-scarce environment where Israel controls resources), olive tree cultivation and agriculture under occupation constraints, public health challenges in Gaza and West Bank, and archaeology of Palestinian heritage. Research continuity is constantly interrupted by conflict.

The 2023-2024 Gaza war has devastated higher education—universities bombed, academics killed, students displaced, and research infrastructure destroyed. Before the current war, Gaza's universities operated under blockade with severe restrictions on equipment imports and scholar travel. West Bank universities face military raids, student arrests, and closure orders.

Brain drain is substantial—Palestinians who obtain advanced degrees often remain abroad or work in Gulf countries, finding research careers impossible under occupation. International partnerships are complicated by political constraints. Some Palestinian researchers in diaspora maintain connections to homeland institutions when possible.

Palestinian scientific development is impossible under current conditions of occupation and war. Research requires peace, sovereignty, and freedom of movement—none of which exist. Palestinian academics' resilience in conducting any research amid such constraints is remarkable, but sustainable scientific development requires political resolution.`,
    issues: JSON.stringify(["R&D minimal; occupation creating impossible research conditions", "2023-24 Gaza war destroying universities, killing academics", "Movement restrictions preventing research collaboration", "Substantial brain drain: researchers remain abroad", "Equipment imports blocked; scholar travel restricted"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Panama', type: 'country' as const, country: 'Panama', lat: 8.5380, lng: -80.7821, category: 'science',
    summary: `Panama's scientific capacity is modest, with R&D spending around 0.2% of GDP and research focused on tropical biology, marine science, and canal-related studies. The Smithsonian Tropical Research Institute (STRI) in Panama represents the country's most significant research facility, though operated by the Smithsonian Institution rather than Panamanian institutions.

STRI on Barro Colorado Island has conducted tropical biology research since 1923, producing major contributions to ecology and evolution. However, this is fundamentally foreign research conducted in Panama rather than Panamanian research capacity. The University of Panama and Technological University of Panama conduct limited research, but resources are minimal.

Research priorities include canal operations and engineering (the expanded canal requires ongoing study), tropical marine biology (Pacific and Caribbean coasts provide unique comparisons), tropical disease research, and biodiversity conservation. Panama's position as a land bridge connecting Americas creates unique biogeographical research opportunities.

Brain drain is moderate—Panamanians who pursue advanced degrees abroad often don't return. The economy, based on services (banking, logistics, canal revenues), involves minimal R&D. Recent focus on becoming a "knowledge economy" has produced limited results. Panama's small population (4.3 million) constrains research workforce scale.

Panama's scientific future likely involves continuing to host foreign research institutions like STRI while slowly building domestic capacity. The country benefits from stability and canal revenues that could fund research, but political will to invest in science has been limited.`,
    issues: JSON.stringify(["R&D at 0.2% of GDP minimal", "STRI is foreign research in Panama, not Panamanian capacity", "Moderate brain drain with advanced degrees not returning", "Services economy involves minimal R&D", "Small population (4.3M) limiting scale"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Papua New Guinea', type: 'country' as const, country: 'Papua New Guinea', lat: -6.3150, lng: 143.9555, category: 'science',
    summary: `Papua New Guinea's scientific capacity is extremely limited despite extraordinary biodiversity and linguistic diversity (800+ languages). R&D spending is below 0.1% of GDP, and research infrastructure barely exists. The University of Papua New Guinea and University of Technology conduct minimal research, focusing on tropical agriculture and public health.

PNG's biodiversity rivals the Amazon—the country harbors unique species from birds of paradise to tree kangaroos—but domestic capacity to study it is essentially absent. Foreign researchers from Australia, US, and Europe study PNG's ecology, anthropology, and geology, but Papuan participation is limited to field assistance. The country's rugged terrain and tribal diversity create logistical challenges.

Research priorities include tropical agriculture (coffee, cocoa, palm oil), mining geology (PNG has massive gold, copper, and natural gas deposits exploited by foreign companies with zero domestic R&D), tropical disease control (malaria, tuberculosis), and seismology—PNG experiences frequent earthquakes and volcanic eruptions. All sophisticated research involves foreign partners.

Brain drain is total—PNGs who obtain higher education overwhelmingly remain in Australia or elsewhere. The country's weak governance, tribal conflicts, violence against women, and extreme poverty make research careers impossible. The extractive industry—mining and petroleum—operates as an enclave with minimal knowledge transfer to PNG institutions.

PNG's scientific development would require decades of peace, educational investment, and governance reform—all distant prospects. The country possesses extraordinary natural resources requiring research and management, but capacity doesn't exist and likely won't develop for generations.`,
    issues: JSON.stringify(["R&D below 0.1% GDP; minimal infrastructure", "Total brain drain: educated remain in Australia", "Extraordinary biodiversity studied only by foreigners", "Mining/petroleum industry zero PNG R&D", "Weak governance and tribal conflicts preventing development"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Paraguay', type: 'country' as const, country: 'Paraguay', lat: -23.4425, lng: -58.4438, category: 'science',
    summary: `Paraguay's scientific capacity is limited, with R&D spending below 0.2% of GDP and research infrastructure concentrated in Asunción. The National University of Asunción conducts modest research, but resources are minimal and political interference in universities is common.

Research priorities include agricultural science (soybeans dominate the economy), Chaco ecosystem studies (the Gran Chaco is South America's second-largest forest system), Guaraní language and cultural research, and public health challenges. Paraguay's landlocked position and the Itaipu Dam (world's second-largest hydroelectric facility, shared with Brazil) drive some hydroelectric engineering research.

Brain drain is severe—Paraguayans who obtain advanced degrees emigrate to Argentina, Brazil, Spain, or US. The country's small population (7 million) and poverty limit research workforce potential. Paraguay's economy, based on agriculture (increasingly dominated by Brazilian soybean farmers) and contraband trade, involves virtually no R&D.

Recent political instability and the Colorado Party's prolonged dominance have created governance issues affecting universities. Academic freedom is constrained, and research funding is politically allocated. The Guaraní aquifer beneath Paraguay represents a massive freshwater resource requiring research, but domestic capacity is insufficient.

Paraguay's scientific future requires political reform, sustained investment, and addressing brain drain—all challenging given current political economy. The country will likely remain dependent on partners from Argentina and Brazil for sophisticated research.`,
    issues: JSON.stringify(["R&D below 0.2% GDP with minimal resources", "Severe brain drain to Argentina, Brazil, Spain, US", "Political interference in universities constraining freedom", "Agricultural economy dominated by Brazilian farmers, not locals", "Small population (7M) limiting workforce"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Peru', type: 'country' as const, country: 'Peru', lat: -9.1900, lng: -75.0152, category: 'science',
    summary: `Peru's scientific capacity is developing but remains modest, with R&D spending around 0.1% of GDP—far too low for Latin America's fourth-largest economy. Universities including San Marcos (oldest in the Americas), Cayetano Heredia, and Pontifical Catholic University conduct research, but chronic underfunding constrains potential.

Peruvian research appropriately focuses on Andean ecology and agriculture (potato diversity center with thousands of varieties, quinoa, alpaca), Amazon rainforest biodiversity (Peru contains significant Amazon territory with extraordinary species richness), seismology and earthquake engineering (frequent devastating quakes), and archaeology—Peru's Inca, Moche, and other pre-Columbian civilizations attract global research.

The country's geographic diversity—coast, Andes, Amazon—creates unique research opportunities across ecosystems. Machu Picchu and other archaeological sites require conservation science. Peru's anchovy fishery (one of world's largest) needs sustainable management research. Climate change threatens Andean glaciers feeding cities and agriculture.

Brain drain is substantial—Peruvian scientists often work in Chile, Brazil, US, or Europe finding better conditions. Political instability (Peru has had 6 presidents since 2016, with protests and violence) disrupts research planning. Mining (copper, gold, silver) involves foreign technology with minimal Peruvian R&D despite being economically dominant.

Peru's scientific future depends on political stability and dramatic funding increases from dismal current levels. The country's biodiversity and cultural heritage create research opportunities, but capacity to pursue them independently remains limited.`,
    issues: JSON.stringify(["Extremely low R&D at 0.1% of GDP", "Substantial brain drain to Chile, Brazil, US, Europe", "Political instability (6 presidents since 2016) disrupting research", "Mining industry minimal Peruvian R&D despite dominance", "Amazon deforestation proceeding faster than research"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Philippines', type: 'country' as const, country: 'Philippines', lat: 12.8797, lng: 121.7740, category: 'science',
    summary: `The Philippines operates Southeast Asia's fourth-largest scientific system, with R&D spending around 0.2% of GDP—inadequate for a nation of 115 million. The University of the Philippines, Ateneo de Manila, and specialized institutes conduct research, but chronic underfunding and massive brain drain constrain capacity.

Philippine research focuses on tropical agriculture (rice, coconut, Manila hemp), typhoon prediction and disaster management (the country is hit by ~20 typhoons annually), marine biology and coral reef research (the Coral Triangle's center), volcanology and seismology (frequent eruptions and earthquakes), and tropical medicine. The Philippine Institute of Volcanology and Seismology (PHIVOLCS) provides critical hazard monitoring.

The country's biodiversity is extraordinary—endemic species across 7,000+ islands—but research capacity to study it lags. Philippine coral reefs face severe threats requiring conservation research. Mount Pinatubo's 1991 eruption drove advances in volcano monitoring. The country's position in the Pacific Ring of Fire and typhoon belt creates urgent research needs.

Brain drain is catastrophic—Filipino scientists, doctors, engineers, and nurses emigrate en masse to the US, Canada, Middle East, and elsewhere. Remittances exceed 10% of GDP, dwarfing science spending. The diaspora includes exceptional talent working globally rather than building domestic capacity. Recent political turmoil under Duterte and now Marcos Jr. has disrupted universities.

The Philippines' scientific potential is substantial given population and geographic significance, but requires dramatic funding increases and addressing brain drain to realize. Current trajectory suggests continued underperformance relative to potential.`,
    issues: JSON.stringify(["Extremely low R&D at 0.2% for 115M population", "Catastrophic brain drain to US, Canada, Middle East", "Remittances 10%+ GDP, vastly exceeding science spending", "Political turmoil under Duterte/Marcos disrupting universities", "Urgent research needs (typhoons, earthquakes) outstrip capacity"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Poland', type: 'country' as const, country: 'Poland', lat: 51.9194, lng: 19.1451, category: 'science',
    summary: `Poland operates Central Europe's second-largest research system (after Germany), with R&D spending around 1.4% of GDP and scientific capacity that has grown substantially post-communism. The country has produced 5 Nobel laureates including Marie Curie, and Polish researchers contribute across fields from mathematics to chemistry to astronomy.

Universities including Jagiellonian University (one of Europe's oldest), University of Warsaw, and Warsaw University of Technology lead research. Polish mathematicians maintain exceptional reputations—the country's mathematical traditions are formidable. Polish researchers contribute to CERN, ESA, and other international projects. Chemistry and materials science are strengths, as is astronomy (Polish astronomers co-discovered planets and contribute to major surveys).

Recent EU membership has transformed Polish science—access to Horizon funding, international collaborations, and infrastructure investment have upgraded capacity substantially. However, challenges remain: Brain drain to Western Europe (UK, Germany) is severe, particularly after EU accession opened labor markets. Recent political interference in universities under the PiS government (2015-2023) damaged academic autonomy, though the current government is reversing some measures.

Polish industrial R&D is growing but remains below Western European levels. The country's position as a manufacturing hub hasn't yet translated into major innovation centers, though tech sector growth in Warsaw, Krakow, and Wrocław shows potential. Academic salaries remain low compared to Western Europe, driving emigration.

Poland's scientific trajectory is generally positive—EU integration benefits, growing economy, and reversal of recent political interference suggest continued capacity building. However, brain drain and need for sustained R&D investment increases remain challenges.`,
    issues: JSON.stringify(["R&D at 1.4% GDP insufficient to compete with West", "Severe brain drain to UK, Germany post-EU accession", "Recent PiS government interference damaged autonomy (reversing now)", "Low academic salaries driving emigration", "Manufacturing hub not yet translating to innovation centers"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Portugal', type: 'country' as const, country: 'Portugal', lat: 39.3999, lng: -8.2245, category: 'science',
    summary: `Portugal has substantially upgraded its scientific capacity over recent decades, with R&D spending around 1.6% of GDP and research quality that increasingly competes with larger European neighbors. Universities including Lisbon, Porto, and Coimbra (one of Europe's oldest) combine with specialized institutes to create a growing research ecosystem.

Portuguese research strengths include marine science and oceanography (the country's Atlantic position and historical maritime tradition drive this), renewable energy (particularly wind and wave power), cork science (Portugal produces ~50% of world cork), and biomedicine. The Champalimaud Foundation has created a world-class neuroscience and cancer research center in Lisbon, attracting international talent.

EU membership has transformed Portuguese science—structural funds built infrastructure, Framework Programme funding supports research, and mobility programs enable collaborations. Portuguese researchers increasingly publish in top journals and participate in prestigious projects. The country's moderate cost of living and quality of life help attract some international researchers.

However, challenges persist: Economic crisis (2010-2014) devastated research budgets and drove massive emigration including scientists. Recovery has been slow. Brain drain continues—young Portuguese researchers often work in UK, Germany, Switzerland, or US. Academic career paths remain precarious with limited permanent positions. R&D at 1.6% GDP is respectable but below EU averages.

Portugal's scientific future appears cautiously optimistic—continued EU integration, gradual funding increases, and growing research quality suggest upward trajectory. However, competition for talent with wealthier neighbors and need to reverse brain drain remain ongoing challenges.`,
    issues: JSON.stringify(["2010-14 economic crisis devastated budgets, drove emigration", "Continued brain drain to UK, Germany, Switzerland, US", "Precarious academic careers with limited permanent positions", "R&D at 1.6% GDP below EU averages", "Competition for talent with wealthier neighbors"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Qatar', type: 'country' as const, country: 'Qatar', lat: 25.3548, lng: 51.1839, category: 'science',
    summary: `Qatar has invested massive hydrocarbon wealth in building research capacity from scratch, with R&D spending around 0.5% of GDP and ambitious science strategy. Qatar Foundation's Education City hosts branch campuses of elite US universities, and Qatar National Research Fund provides substantial competitive funding. However, results are mixed—money alone doesn't create research excellence overnight.

Qatar's research strategy focuses on national priorities: energy and environment (natural gas is the economic foundation, with research on carbon capture, water-energy nexus, and desert sustainability), health sciences (establishing specialized research hospitals), sports science (2022 World Cup drove investment), and Islamic studies. Weill Cornell Medicine-Qatar and other branch campuses conduct research, though whether this builds Qatari capacity or remains foreign-controlled is debated.

The country's tiny citizen population (~300,000 nationals among 3 million residents) means research workforce is almost entirely expatriate. This creates dependency—researchers come for tax-free salaries but may not build lasting institutions. Qatar University and other domestic institutions struggle to compete with branch campuses. Academic freedom concerns persist given authoritarian governance.

Challenges include: Can purchased research capacity become self-sustaining? Will Qatari nationals develop research careers or remain minority in their institutions? How does authoritarian governance affect academic inquiry? The economic blockade by Saudi Arabia and UAE (2017-2021) forced some diversification but also revealed vulnerabilities.

Qatar's scientific experiment—building research capacity through petrodollar investment—is unprecedented in scale. Success requires time to assess. Current state: significant infrastructure, growing research output, but questions about sustainability and indigenous capacity development remain unanswered.`,
    issues: JSON.stringify(["R&D at 0.5% GDP modest despite massive wealth", "Tiny citizen population means workforce almost entirely expatriate", "Branch campuses question: building Qatari capacity or foreign control?", "Authoritarian governance raising academic freedom concerns", "Unclear if purchased research capacity becomes self-sustaining"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Romania', type: 'country' as const, country: 'Romania', lat: 45.9432, lng: 24.9668, category: 'science',
    summary: `Romania maintains respectable research capacity despite post-communist challenges, with R&D spending around 0.5% of GDP and scientific traditions particularly strong in mathematics, physics, and chemistry. Babeș-Bolyai University, University of Bucharest, and specialized institutes conduct research, though funding remains inadequate.

Romanian mathematicians have exceptional reputations globally, with traditions in number theory, algebra, and logic producing talent far exceeding what the country's size would predict. Physics research includes contributions to particle physics at CERN and the Magurele laser facility (ELI-NP), one of the world's most powerful lasers. Romanian computer scientists have founded successful companies and contributed to theoretical computer science.

EU membership since 2007 has brought research funding access and collaboration opportunities, but also accelerated brain drain. Massive emigration—Romania has lost 3-4 million people since 1990, including many educated youth—devastates research workforce. Young Romanian researchers overwhelmingly seek positions in Western Europe (Germany, UK, France) or US, finding better salaries and conditions.

Recent corruption scandals affecting research funding and political interference in university leadership have damaged the research environment. Academic salaries are among Europe's lowest, forcing multiple jobs. However, Romania's tech sector growth shows potential—cities like Cluj, Bucharest, and Iași host growing IT industries conducting some R&D.

Romania's scientific future depends on reversing emigration through improved salaries and conditions, addressing corruption, and sustaining R&D investment increases. Current trajectory suggests continued brain drain constraining what traditional strengths in mathematics and physics could achieve with adequate support.`,
    issues: JSON.stringify(["Extremely low R&D at 0.5% of GDP", "Catastrophic emigration: 3-4M lost since 1990, including researchers", "Among Europe's lowest academic salaries forcing multiple jobs", "Corruption scandals affecting research funding", "Brain drain to Germany, UK, France, US overwhelming"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Russia', type: 'country' as const, country: 'Russia', lat: 61.5240, lng: 105.3188, category: 'science',
    summary: `Russia inherited the Soviet Union's once-formidable scientific establishment but has seen dramatic decline, with R&D spending around 1.0% of GDP and brain drain accelerated massively by the 2022 Ukraine invasion. The country retains significant capacity in physics, mathematics, chemistry, and space technology, but international isolation and repression threaten further deterioration.

The Russian Academy of Sciences, Moscow State University, St. Petersburg State University, and specialized institutes maintain research programs. Russian strengths include theoretical physics and mathematics (traditions remain strong despite emigration), nuclear technology, aerospace engineering (Roscosmos continues operating despite setbacks), and Arctic research. Russia contributes to CERN though participation may be suspended, and ISS collaboration continues but likely ending.

The Soviet collapse devastated Russian science—funding disappeared, equipment aged without replacement, and massive brain drain saw thousands of scientists emigrate to the West in the 1990s. Modest recovery under Putin has been reversed by the Ukraine war: Western sanctions cut collaboration and equipment access, international projects expelled Russian participants, and renewed emigration surge sees scientists fleeing repression and draft.

Recent political repression has destroyed academic freedom—researchers avoid politically sensitive topics, universities purge dissenting faculty, and speaking against the war risks arrest. Putin's regime prioritizes military research while civilian science starves. The war has isolated Russian science internationally, potentially irreversibly in some fields. Demographic crisis and alcoholism compound workforce problems.

Russia's scientific trajectory under current regime is decline—brain drain, isolation, repression, and militarization are destroying what Soviet legacy remained. Without political transformation, Russian science faces irrelevance beyond military applications and mathematics where isolation matters less.`,
    issues: JSON.stringify(["R&D declining to 1.0% of GDP; war prioritizing military over civilian", "Catastrophic brain drain accelerated by Ukraine invasion and repression", "International isolation: sanctions, collaboration cut, projects expelled", "Academic freedom destroyed; researchers arrested for opposing war", "Demographic crisis and alcoholism compounding problems"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Rwanda', type: 'country' as const, country: 'Rwanda', lat: -1.9403, lng: 29.8739, category: 'science',
    summary: `Rwanda's scientific capacity is rebuilding from near-total annihilation during the 1994 genocide that killed ~800,000 people including much of the educated population. R&D spending is around 0.6% of GDP—high for sub-Saharan Africa—and the Kagame government has prioritized science and technology as development strategy, though results are mixed.

The University of Rwanda (consolidated from scattered institutions in 2013) leads research, focusing on agriculture (coffee, tea), public health (genocide trauma, HIV/AIDS, malaria), ICT development, and mountain gorilla conservation. Rwanda's "Singapore of Africa" ambitions include science and tech investment, with government rhetoric emphasizing STEM education and innovation economy.

Research priorities appropriately include genocide studies and reconciliation research, agricultural productivity for food security, renewable energy (Rwanda aims for universal electrification), and gorilla conservation—mountain gorillas in Volcanoes National Park are economically vital for tourism. Carnegie Mellon and other foreign universities have established Rwanda presence.

However, challenges are severe: The genocide destroyed human capital catastrophically—most educated Rwandans were killed or fled. Brain drain continues as those trained abroad often don't return. Authoritarian governance constrains research directions and academic freedom—Kagame's regime tolerates no dissent, affecting social science particularly. The small population (13 million) and poverty limit scale.

Rwanda's scientific future depends on whether authoritarian development model can build capacity while restricting freedom. Current trajectory shows infrastructure investment and policy commitment, but whether this produces genuine research excellence or performative science without substance remains to be seen.`,
    issues: JSON.stringify(["1994 genocide annihilated educated population", "Authoritarian governance constraining academic freedom", "Brain drain: trained abroad don't return", "Small population (13M) and poverty limiting scale", "Questions if development model produces real vs performative science"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Saudi Arabia', type: 'country' as const, country: 'Saudi Arabia', lat: 23.8859, lng: 45.0792, category: 'science',
    summary: `Saudi Arabia has invested massive oil wealth in building research capacity, with R&D spending around 0.8% of GDP and the Kingdom's Vision 2030 prioritizing science and technology for economic diversification. King Abdullah University of Science and Technology (KAUST), established in 2009, represents the flagship—a well-funded research university recruiting internationally.

KAUST operates as an island of relative academic freedom with co-education and no religious police, unusual for Saudi Arabia. The university focuses on energy research (renewable energy, desalination, carbon capture), materials science, marine science (Red Sea research), and computational sciences. Research output has grown rapidly, though questions persist about quality versus quantity and whether KAUST builds Saudi capacity or remains expatriate-dominated.

Other universities including King Fahd University of Petroleum and Minerals conduct research on oil-related technologies, though most Saudi higher education emphasizes religious over scientific education. Women's participation in science has increased but faces social constraints. The Kingdom sends thousands abroad for degrees but retention rates for research careers are unclear.

Challenges include: Can purchased research capacity become self-sustaining? Does KAUST integrate with broader Saudi society or remain elite enclave? How does authoritarian governance, Wahhabi religious conservatism, and human rights record affect recruitment? The Khashoggi murder and Yemen war damaged international reputation, potentially affecting collaborations.

Saudi Arabia's scientific experiment—building research capacity through petrodollar investment similar to Qatar but larger scale—shows growth in publications and infrastructure. However, converting money into genuine research excellence requires time, and whether Vision 2030 succeeds in diversifying from oil remains uncertain.`,
    issues: JSON.stringify(["R&D at 0.8% GDP modest despite massive wealth", "KAUST questions: building Saudi capacity or expatriate enclave?", "Wahhabi conservatism constraining research in some areas", "Khashoggi murder and Yemen war damaging international reputation", "Unclear if Vision 2030 diversification from oil succeeding"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Senegal', type: 'country' as const, country: 'Senegal', lat: 14.4974, lng: -14.4524, category: 'science',
    summary: `Senegal operates West Africa's most stable research environment, with R&D spending around 0.5% of GDP and scientific capacity that makes Dakar a regional hub. Cheikh Anta Diop University and specialized institutes conduct research, benefiting from Senegal's democratic governance and Francophone research networks.

Research priorities include agriculture (groundnuts, millet, sorghum for Sahel conditions), marine and fisheries science (Atlantic fishing is economically vital), public health (malaria, tuberculosis, tropical diseases), and renewable energy—Senegal is developing significant solar capacity. The Institut Pasteur de Dakar, part of the international Pasteur network, conducts important infectious disease research and COVID-19 vaccine trials occurred in Senegal.

Senegal's political stability relative to neighbors makes it a regional research hub—conferences, collaborations, and international organizations base operations in Dakar. The country's Francophone links provide research network access, though this creates some dependency on France. Recent discovery of offshore oil and gas may provide revenues for research investment if well managed.

Challenges include limited funding (0.5% GDP insufficient for ambitions), brain drain to France and other Francophone countries, small population (17 million) limiting scale, and dependence on agriculture and fishing economy with minimal industrial R&D. However, Senegal's democratic consolidation (rare in the region) provides stability enabling long-term research planning.

Senegal's scientific trajectory is gradual capacity building—the country has clear advantages (stability, location, networks) but requires sustained investment and addressing brain drain to realize potential as a regional research leader.`,
    issues: JSON.stringify(["R&D at 0.5% GDP insufficient for regional leadership ambitions", "Brain drain to France and Francophone countries", "Small population (17M) limiting workforce scale", "Economy (agriculture, fishing) involves minimal R&D", "Oil/gas discoveries: opportunity or curse depending on governance"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Serbia', type: 'country' as const, country: 'Serbia', lat: 44.0165, lng: 21.0059, category: 'science',
    summary: `Serbia maintains respectable research capacity despite post-Yugoslav challenges, with R&D spending around 0.9% of GDP and scientific traditions particularly strong in mathematics, physics, and engineering. The University of Belgrade, Serbian Academy of Sciences and Arts, and specialized institutes conduct research, though resources are limited and brain drain is severe.

Yugoslav-era Serbia had significant research infrastructure serving the federation. Wars, sanctions (1990s), and economic crisis devastated capacity, but recovery has been gradual. Serbian researchers contribute to mathematics, theoretical physics, materials science, and computer science. The country's IT sector has grown substantially, with Belgrade emerging as a tech hub—companies like Microsoft, Google, and Nvidia operate R&D centers, employing Serbian engineers.

Challenges are substantial: Brain drain is catastrophic—young Serbian researchers overwhelmingly emigrate to EU countries (particularly Germany, Austria, Switzerland) or US seeking better opportunities. Serbia has lost population since the 1990s, with educated youth particularly likely to leave. Recent authoritarianism under Vučić has created governance concerns, though less severe than some neighbors.

EU candidacy status provides some research funding access, but accession process is stalled over Kosovo recognition and other issues. Academic salaries are low, forcing multiple jobs. However, Serbia's relative stability compared to the 1990s, growing IT sector, and traditional research strengths provide foundation for gradual improvement.

Serbia's scientific future depends on EU integration pathway (which could bring funding and reduce brain drain), political reforms, and sustained R&D investment increases. Current trajectory suggests slow recovery from 1990s devastation but constrained by emigration and limited resources.`,
    issues: JSON.stringify(["R&D at 0.9% GDP insufficient; wars/sanctions devastated capacity", "Catastrophic brain drain to Germany, Austria, Switzerland, US", "Population declining since 1990s with educated youth leaving", "Vučić authoritarianism creating governance concerns", "EU accession stalled, limiting funding access"]),
    topStories: JSON.stringify([]), storyCount: 0 },
  { name: 'Singapore', type: 'country' as const, country: 'Singapore', lat: 1.3521, lng: 103.8198, category: 'science',
    summary: `Singapore operates Southeast Asia's most sophisticated research system, with R&D spending around 2.2% of GDP and strategic investments making the city-state a biomedical and technology research hub. National University of Singapore (NUS) and Nanyang Technological University (NTU) rank among Asia's best, while A*STAR institutes focus on applied research and commercialization.

Singapore's research strategy leverages limited land and lack of natural resources by focusing on brain-intensive industries: biomedical research (Biopolis houses pharmaceutical and biotech companies), water technology (NEWater demonstrates reclaimed water expertise), semiconductor and advanced manufacturing, and finance technology. The government invests heavily in research infrastructure and recruits top international talent to compensate for tiny population (5.7 million).

Research strengths include genomics and precision medicine, synthetic biology, materials science, and AI applications. Singapore's smart city initiatives drive research on urban systems, logistics, and governance technologies. The country's position as a trading hub informs supply chain and maritime research. Singapore excels at translating research to commercial application—the "lab to market" pathway is unusually efficient.

Challenges include dependence on foreign talent (most top researchers are expats, raising questions about sustainability), small domestic market limiting commercialization scale, authoritarian governance constraining some research directions (social science, politics), and need to continually reinvent to stay ahead of larger neighbors with cost advantages.

Singapore's scientific model—strategic focus, high investment, international recruitment, tight university-industry links—has succeeded remarkably for a city-state with no natural resources. Sustaining this requires maintaining competitiveness for global talent and continued government commitment to R&D spending.`,
    issues: JSON.stringify(["Heavy dependence on foreign researchers raising sustainability questions", "Small domestic market limiting commercialization scale", "Authoritarian governance constraining some research areas", "Need to stay ahead of larger neighbors (China, India) gaining capacity", "High costs potentially undermining competitiveness"]),
    topStories: JSON.stringify([]), storyCount: 0 }
];

async function insertScienceSummaries() {
  console.log('FINAL BATCH 6: countries 101-128...\n');
  for (const s of scienceSummaries) {
    try {
      await prisma.locationSummary.upsert({
        where: { name_type_category: { name: s.name, type: s.type, category: s.category } },
        update: { summary: s.summary, issues: s.issues, topStories: s.topStories, lat: s.lat, lng: s.lng, storyCount: s.storyCount, updatedAt: new Date() },
        create: s
      });
      console.log(`✅ ${s.name}`);
    } catch (error) {
      console.error(`❌ ${s.name}:`, error);
    }
  }
  console.log('\n🎉 BATCH 6 COMPLETE! ALL 128 COUNTRIES DONE! 🎉');
}

insertScienceSummaries().catch(console.error).finally(() => prisma.$disconnect());
