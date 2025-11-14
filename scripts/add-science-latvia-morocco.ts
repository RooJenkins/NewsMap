import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// SCIENCE & RESEARCH summaries for Latvia through Morocco
// Generated in Ed Yong / Carl Zimmer style, 2,500-3,500 characters each

const scienceSummaries = [
  {
    name: 'Latvia',
    lat: 56.8796,
    lng: 24.6032,
    summary: `Latvia's scientific landscape bears the fingerprints of its Soviet past while reaching toward European integration, creating a hybrid research culture that bridges Eastern traditions and Western standards. The country invests approximately 0.6% of GDP in R&D—below the EU average of 2.3% but growing steadily—with a focus on wood chemistry, information technology, and biomedicine that reflect Latvia's natural resources and emerging economic sectors.

The Latvian Academy of Sciences, established in 1946, coordinates research across 13 institutes, though its influence has diminished since independence as universities have gained prominence. The University of Latvia in Riga, founded in 1919, anchors the nation's scientific output, producing about 2,500 publications annually. Latvian physicists maintain a surprising legacy: the Institute of Solid State Physics operates one of Eastern Europe's most powerful research reactors, studying materials science and training nuclear specialists for the region.

Wood science represents Latvia's most distinctive research niche. Forests cover 50% of the country, and researchers at the Latvian State Institute of Wood Chemistry have pioneered lignin extraction methods and developed bio-based materials from timber waste. These studies position Latvia as an unlikely leader in sustainable biomaterials, with patents licensing to Scandinavian manufacturers. IT research thrives in parallel: Riga Technical University's cybersecurity programs train specialists defending Estonia's famous digital infrastructure, and Latvian programmers helped develop Skype in neighboring Estonia's tech boom.

Biomedical research focuses on genetics and oncology. The Latvian Biomedical Research and Study Centre maintains one of the Baltic region's most comprehensive biobanks, with 25,000 genotyped samples supporting population health studies. Researchers discovered genetic variants affecting vitamin D metabolism in Baltic populations, findings relevant given the region's limited sunlight and high osteoporosis rates. Brain drain poses challenges: an estimated 20% of STEM graduates emigrate to Germany and Scandinavia, attracted by better salaries, though EU research programs increasingly enable Latvians to participate in international projects while remaining based at home.

STEM education benefits from Latvia's high overall literacy—99.9%—and women comprise 45% of engineering graduates, among Europe's highest rates. The government's "Smart Specialization Strategy" targets photonics, biomedicine, and knowledge-intensive services for research investment. Whether these commitments can reverse demographic decline—Latvia has lost 25% of its population since 1990—remains uncertain, but the country's scientists work to transform timber and Baltic amber into 21st-century competitive advantages.`,
    issues: [
      'Brain drain of STEM graduates to Germany and Scandinavia',
      'R&D investment below EU average (0.6% vs 2.3% of GDP)',
      'Demographic decline reducing potential research workforce',
      'Legacy infrastructure from Soviet era requiring modernization',
      'Need to strengthen international research collaboration networks'
    ]
  },
  {
    name: 'Lebanon',
    lat: 33.8547,
    lng: 35.8623,
    summary: `Lebanon's scientific community operates in survival mode, struggling to maintain research excellence amid economic collapse, political dysfunction, and recurrent conflict. Once the intellectual hub of the Arab world, with the American University of Beirut (AUB) founded in 1866 serving as the region's premier research institution, Lebanon today sees its scientists fleeing abroad while those who remain work with intermittent electricity, depleted budgets, and vanishing hope.

The country traditionally invested around 0.3% of GDP in R&D, but this figure has become meaningless as the Lebanese pound lost 98% of its value since 2019. AUB and the Lebanese University in Beirut still produce competitive research—about 3,000 publications annually—particularly in medicine, civil engineering, and environmental science. Lebanese physicians pioneered Middle Eastern organ transplantation and trauma surgery, skills honed during decades treating war casualties. The country's seismologists study the Dead Sea Transform fault, where tectonic stresses could trigger destructive earthquakes.

Medical research focuses on diseases prevalent in refugee populations. With over 1.5 million Syrian refugees, Lebanon became an unintended laboratory for studying trauma, infectious disease transmission in crowded camps, and mental health interventions. Researchers at AUB's Global Health Institute conduct epidemiological surveillance that informs WHO policies across the Levant. Agricultural scientists work on water scarcity—Lebanon's freshwater resources are critically depleted—developing drought-resistant crop varieties and drip irrigation systems adapted to mountainous terrain.

The 2020 Beirut port explosion devastated research infrastructure, destroying laboratories at the Lebanese University and damaging AUB facilities. Brain drain has accelerated catastrophically: an estimated 40% of Lebanese physicians have left since 2019, and STEM faculty positions go unfilled as salaries, paid in devalued pounds, can't support basic living. Chemists can't afford reagents; physicists lack equipment maintenance funding. Students study by candlelight during power cuts, using outdated textbooks because libraries can't afford journal subscriptions.

Despite this, Lebanese diaspora scientists maintain remarkable global prominence, holding senior positions at MIT, Stanford, and European research centers. Science policy is nonexistent—government institutions barely function—but international NGOs and the Lebanese Academy of Sciences try to preserve minimal research capacity. Lebanon's scientific story now is one of endurance: keeping laboratories open, training the next generation, and hoping political stability might eventually return to allow the intellectual tradition that flourished for a century to survive into another.`,
    issues: [
      'Catastrophic brain drain with 40% of physicians emigrating since 2019',
      'Economic collapse rendering R&D funding effectively zero',
      'Intermittent electricity disrupting research operations',
      'Port explosion destroyed significant research infrastructure',
      'Political dysfunction preventing coherent science policy'
    ]
  },
  {
    name: 'Libya',
    lat: 26.3351,
    lng: 17.2283,
    summary: `Libya's scientific institutions exist in fragments, shattered by the 2011 revolution that toppled Muammar Gaddafi and the civil wars that followed. Once adequately funded during the oil boom years—Libya invested up to 0.5% of GDP in R&D in the 1980s—the country's research infrastructure now operates sporadically, with universities caught in factional fighting and scientists fleeing to Tunisia, Egypt, and Europe.

The University of Tripoli and Benghazi University, Libya's flagship institutions, have struggled to maintain operations amid militia clashes and foreign intervention. Petroleum engineering dominated Libyan science during Gaddafi's era, training geologists and engineers to manage the country's vast hydrocarbon reserves. The Libyan Petroleum Institute conducted research on enhanced oil recovery and desert geology, contributing to North African understanding of sedimentary basins. These programs collapsed after 2011; laboratories were looted, and faculty scattered.

Archaeological research represents an unlikely bright spot. Libya hosts some of the Mediterranean's most spectacular Roman ruins, including Leptis Magna and Sabratha. International teams, working intermittently when security permits, study these UNESCO World Heritage sites, collaborating with Libyan archaeologists trained during the Gaddafi period. Marine biologists have documented the Libyan coast's biodiversity, including Mediterranean monk seal populations, among the world's most endangered marine mammals, surviving in remote caves along the Cyrenaican coast.

Medical research focuses on tropical diseases endemic to Libya's desert and Mediterranean climates: leishmaniasis, tuberculosis, and waterborne parasites. The National Centre for Disease Control, established with WHO support, monitors outbreaks in a country where health infrastructure has deteriorated severely. Brain drain has been devastating: an estimated 70% of Libyan STEM PhDs now work abroad, primarily in the Gulf states and Europe, with few incentives to return to a country divided between rival governments.

STEM education limps forward in universities that operate on and off depending on local security. Women comprised 40% of engineering students before 2011, but enrollment has plummeted as families prioritize safety over education. Science policy is nonexistent—there is no functional government capable of coordinating research priorities. International collaborations have mostly ceased, and Libyan scientists publish perhaps 500 papers annually, down from 2,000 in 2010. Libya's scientific community now exists mainly in diaspora, its members hoping political settlement might eventually allow them to rebuild what decades of conflict destroyed.`,
    issues: [
      'Research infrastructure destroyed by civil war and looting',
      'Severe brain drain with 70% of STEM PhDs working abroad',
      'Absence of functional government to coordinate science policy',
      'University operations disrupted by factional fighting',
      'Collapse of petroleum research despite oil-dependent economy'
    ]
  },
  {
    name: 'Lithuania',
    lat: 55.1694,
    lng: 23.8813,
    summary: `Lithuania's scientific rebirth after Soviet occupation showcases how a small nation can leverage EU integration to build competitive research capacity. Investing approximately 1.0% of GDP in R&D—double the rate of neighboring Latvia—Lithuania has focused on laser physics, biotechnology, and information security, creating centers of excellence that attract international collaboration and reverse some brain drain that plagued the post-independence years.

Vilnius University, founded in 1579, ranks among Europe's oldest universities, with a research tradition that survived both Tsarist and Soviet rule. Today it leads Lithuanian science alongside Kaunas University of Technology, together producing about 4,000 publications annually. Lithuanian laser physics has achieved global prominence: the Center for Physical Sciences and Technology developed some of the world's most powerful femtosecond lasers, tools essential for precision material processing and medical applications. These innovations attracted Japanese and German manufacturers to establish partnerships, creating a high-tech manufacturing cluster around Vilnius.

Biotechnology represents Lithuania's second research strength. The Institute of Biotechnology works on cancer immunotherapy and develops diagnostic tools for infectious diseases. Lithuanian researchers participate in EU-wide genomic consortia, contributing Baltic population data to pharmacogenomic studies. The country's genetic isolation—Lithuanians maintained distinct Baltic language and culture—makes their genomic data valuable for understanding European population history. Agricultural scientists develop crops adapted to northern climates, particularly winter rye and flax varieties.

Information security research grew directly from Lithuania's geopolitical position bordering Russia and Belarus. Cybersecurity centers in Vilnius train specialists defending critical infrastructure against persistent attacks, sharing expertise with NATO allies. Lithuanian mathematicians have contributed to cryptography and number theory, with several winning European Mathematical Society prizes. Women comprise 35% of engineering graduates, below Nordic levels but improving.

Brain drain remains challenging: an estimated 15% of STEM graduates emigrate, though this rate has declined as Lithuanian wages approach Western European levels. The government's "Smart Specialization" strategy concentrates research funding in laser technology, health technologies, and agro-innovation, avoiding diffusion of limited resources. EU structural funds supplement domestic R&D investment, enabling Lithuania to participate in prestigious projects like CERN collaborations. Science policy emphasizes commercialization—Lithuania has launched more research-based startups per capita than any other Baltic state, transforming photonics research into export products. For a country of 2.8 million, Lithuania demonstrates how focused strategy can build scientific competitiveness despite limited scale.`,
    issues: [
      'Continued brain drain despite improving, with 15% of STEM graduates emigrating',
      'R&D investment at 1.0% of GDP still below EU average',
      'Small domestic market limiting commercialization potential',
      'Aging research workforce with insufficient young researcher recruitment',
      'Need to strengthen international research collaboration networks'
    ]
  },
  {
    name: 'Luxembourg',
    lat: 49.8153,
    lng: 6.1296,
    summary: `Luxembourg has engineered a scientific transformation as remarkable as its financial sector success, evolving from research obscurity to hosting one of Europe's most powerful supercomputers and a world-class biomedicine center. The country invests approximately 1.2% of GDP in R&D—below its 2.3% target but rising—with a strategic focus on data security, personalized medicine, and space resources that leverage Luxembourg's unique regulatory environment and capital density.

The University of Luxembourg, founded only in 2003, has grown explosively, recruiting internationally renowned faculty with competitive salaries funded by the country's exceptional wealth. The Luxembourg Centre for Systems Biomedicine (LCSB) leads European research on Parkinson's disease, operating one of the world's largest biobanks for movement disorders. Researchers here conduct integrative studies combining genetics, molecular biology, and computational modeling, work enabled by the country's sophisticated health registry—Luxembourg's 630,000 citizens provide a well-documented population for epidemiological research.

Luxembourg's MelUXina supercomputer, operational since 2021, ranks among Europe's top 20 most powerful systems, serving researchers across the EU. The Luxembourg Centre for Contemporary and Digital History pioneered digital humanities methods, analyzing vast archives with AI tools. But Luxembourg's most audacious scientific gambit is space resources: the country passed legislation in 2017 establishing property rights for asteroid mining, and the Luxembourg Space Agency funds research on resource extraction technologies. While asteroid mining remains speculative, this positions Luxembourg at the forefront of space law and off-world industrial research.

Cybersecurity research thrives at the Interdisciplinary Centre for Security, Reliability and Trust (SnT), where 300+ researchers develop encryption methods and secure communication protocols. Luxembourg's role as a financial hub creates demand for cutting-edge security research, and findings transition quickly into commercial applications. The country hosts major data centers, requiring research on energy-efficient computing—data centers consume 15% of Luxembourg's electricity.

Luxembourg produces only about 1,500 scientific publications annually, but citation rates are high, reflecting focus on quality over quantity. There are no traditional brain drain concerns—Luxembourg actively imports talent, with 60% of researchers foreign-born. Science policy emphasizes "smart specialization" in ICT, health, and materials science. The country's scientific model is essentially unique: using financial wealth to build research excellence in targeted niches rather than comprehensive coverage. Whether this strategy remains viable if Luxembourg's banking advantages erode is uncertain, but for now, the Grand Duchy demonstrates how capital can accelerate scientific development when strategically deployed.`,
    issues: [
      'Heavy reliance on imported scientific talent (60% foreign-born)',
      'R&D investment at 1.2% of GDP below 2.3% national target',
      'Limited scale requiring hyper-specialization in research niches',
      'Vulnerability to economic shifts affecting financial sector funding',
      'Need to develop domestic STEM talent pipeline alongside recruitment'
    ]
  },
  {
    name: 'Malaysia',
    lat: 4.2105,
    lng: 101.9758,
    summary: `Malaysia's scientific ambitions reflect its journey from commodity exporter to aspiring knowledge economy, with R&D investment climbing to 1.4% of GDP—the highest in Southeast Asia outside Singapore—and research priorities balancing Islamic identity with technological modernization. The country has built impressive research infrastructure over three decades, yet struggles to translate investment into innovation that generates high-value exports beyond palm oil and semiconductors.

Universiti Malaya in Kuala Lumpur and Universiti Sains Malaysia in Penang anchor Malaysian research, producing about 25,000 publications annually—a tenfold increase since 2000. Materials science and electrical engineering dominate, reflecting Malaysia's electronics manufacturing sector. Researchers developed halal-certified nanomaterials and Islamic finance algorithms, innovations targeting Muslim-majority markets. The Malaysian Genome Institute works on oil palm genetics, seeking to maximize yields while addressing environmental concerns—palm oil production drives deforestation but sustains millions of livelihoods.

Tropical medicine research leverages Malaysia's biodiversity and disease burden. The Institute for Medical Research studies dengue fever transmission in urban environments, where Aedes mosquitoes breed in Kuala Lumpur's construction sites and water storage tanks. Malaysian researchers contributed to developing dengue vaccines and participate in WHO disease surveillance networks. The country's rainforests, among the world's oldest, attract ecologists studying biodiversity—over 200 mammal species inhabit Malaysian Borneo, including orangutans and pygmy elephants.

STEM education has expanded dramatically: university enrollment increased from 5% of the population in 1980 to 45% today, though quality varies widely between elite institutions and newer universities. Women earn 55% of STEM degrees, one of Asia's highest rates, yet cultural expectations often channel them toward teaching rather than research careers. Brain drain affects top talent—Malaysian scientists hold senior positions at American and British universities—but the government's diaspora engagement programs maintain research links.

Science policy centralizes through the Ministry of Science, Technology and Innovation, which sets targets for publications and patents, sometimes encouraging quantity over quality. Malaysia has built synchrotron facilities and invested in nanotechnology centers, infrastructure that exceeds current research community capacity to fully utilize. The country collaborates extensively with Japan and South Korea through technology transfer agreements. For Malaysian science to fulfill its potential, research must shift from incremental to transformative, creating innovations that justify the substantial public investment of recent decades.`,
    issues: [
      'Gap between research infrastructure and innovation output',
      'Brain drain of top researchers to Western universities',
      'Emphasis on publication quantity sometimes sacrificing quality',
      'Cultural barriers limiting women in research careers despite high STEM degrees',
      'Environmental tensions between palm oil research and conservation'
    ]
  },
  {
    name: 'Maldives',
    lat: 3.2028,
    lng: 73.2207,
    summary: `The Maldives confronts an existential scientific question: how does a nation preserve itself when climate change threatens to submerge it entirely? This archipelago of 1,190 coral islands, none more than 2.4 meters above sea level, has transformed climate science and marine biology from academic pursuits into survival imperatives. R&D spending remains minimal—perhaps 0.1% of GDP—but the Maldives hosts research that punches far above its weight in global significance.

The Maldives Marine Research Institute (MMRI), the country's primary scientific institution, studies coral reef ecology with urgency born of watching reefs bleach and die during warming events. The 1998 El Niño killed 90% of Maldivian corals; while many recovered, the 2016 bleaching event struck reefs still recovering, raising questions about resilience limits. MMRI researchers collaborate with Australian and British marine biologists, monitoring ocean acidification and coral spawning patterns, seeking to understand if assisted evolution might help corals adapt to warming waters.

Climate research extends beyond marine science. Maldivian meteorologists track sea level rise with precision GPS stations, providing data to IPCC reports. The country's position astride the equator makes it valuable for studying Indian Ocean climate patterns, including monsoon dynamics that affect a billion people across South Asia. The Maldives meteorological service operates weather stations across the archipelago, feeding data to regional cyclone prediction models.

The Maldives National University, established in 2011, has limited research capacity but focuses on applied marine science and sustainable tourism studies. Brain drain is severe—virtually all Maldivian PhD holders trained abroad, in India, Malaysia, or Australia, and many remain there. The country has perhaps 50 doctoral-level scientists total for a population of 530,000. STEM education emphasizes vocational training for tourism and fishing industries rather than research careers.

Science policy centers on climate adaptation. The government funded a 2018 study on artificial island construction and investigated floating structures as potential havens if atolls submerge. Former president Mohamed Nasheed hosted an underwater cabinet meeting in 2009 to dramatize climate threats, transforming the Maldives into a symbol of climate vulnerability. International research collaborations focus on coral restoration, sustainable fishing, and renewable energy—the Maldives aims for carbon neutrality despite depending entirely on diesel generators. For this island nation, science isn't about discovery for its own sake; it's about buying time, understanding whether human ingenuity can preserve a country that nature seems determined to erase.`,
    issues: [
      'Existential threat from sea level rise and climate change',
      'Minimal R&D funding (approximately 0.1% of GDP)',
      'Severe shortage of PhD-level researchers (approximately 50 total)',
      'Heavy brain drain with most scientists trained and remaining abroad',
      'Complete dependence on international collaboration for research capacity'
    ]
  },
  {
    name: 'Mali',
    lat: 17.5707,
    lng: -3.9962,
    summary: `Mali's scientific landscape reflects the challenges of conducting research in one of the world's poorest nations, where conflict, climate change, and minimal resources constrain even basic inquiry. R&D spending hovers around 0.1% of GDP, with most funding from international donors rather than government budgets. Yet Malian scientists persist, studying desertification, infectious diseases, and the rich archaeological heritage of a land that hosted medieval Africa's greatest centers of learning.

The University of Bamako serves as Mali's research hub, though political instability—coups in 2012, 2020, and 2021—repeatedly disrupted operations. Medical research takes priority: Mali suffers endemic malaria, and the Malaria Research and Training Centre collaborates with NIH and European institutions on vaccine trials and drug resistance studies. Bamako hosts one of Africa's largest field sites for malaria research, with decades of epidemiological data tracking parasite evolution. Infectious disease research extends to tuberculosis, HIV, and neglected tropical diseases like schistosomiasis.

Agricultural science addresses desperate food security needs. Desertification advances southward as the Sahara expands, threatening farming communities. Researchers at the Institut d'Economie Rurale study millet and sorghum varieties adapted to increasingly arid conditions, working with CGIAR centers to develop drought-resistant crops. Traditional knowledge holds valuable insights—Malian farmers cultivated rice in the Niger River inland delta for millennia, and scientists document indigenous water management practices threatened by climate change.

Mali's deepest scientific legacy is historical. Timbuktu's medieval manuscripts, numbering in the hundreds of thousands, reveal sophisticated astronomical observations, mathematical treatises, and medical texts from the 14th-16th centuries when the city anchored trans-Saharan trade in ideas as well as gold. Modern Malian scholars work to preserve these fragile documents, many damaged during the 2012 jihadist occupation when extremists burned libraries. Digitization projects, supported by UNESCO, aim to preserve knowledge that demonstrates Africa's intellectual traditions.

Brain drain depletes Mali's already scarce scientific capacity. The country produces perhaps 100 STEM PhDs per decade, most trained abroad, and many remain in France, the United States, or Senegal. STEM education reaches only a fraction of the population—primary school enrollment is 60%, and girls face particular barriers. Science policy barely exists amid security crises and political instability. International collaborations, particularly with French research institutes through colonial-era ties, provide Mali's primary link to global science. Research here operates in survival mode, scientists working to document biodiversity, study disease, and preserve ancient knowledge even as contemporary institutions struggle to function.`,
    issues: [
      'Minimal R&D funding (0.1% of GDP) dependent on donor support',
      'Political instability with repeated coups disrupting research',
      'Severe brain drain with most PhD holders remaining abroad',
      'Desertification and climate change threatening agricultural research',
      'Low STEM education access, particularly for girls'
    ]
  },
  {
    name: 'Mauritania',
    lat: 21.0079,
    lng: -10.9408,
    summary: `Mauritania's scientific infrastructure barely exists, reflecting the challenges facing one of Africa's most sparsely populated and economically marginalized nations. R&D spending is negligible—well below 0.1% of GDP—and the country has perhaps two dozen PhD-level researchers for a population of 4.6 million. Yet Mauritanian scientists, working with international partners, conduct research on desertification, fisheries, and archaeological sites that illuminate trans-Saharan trade routes and pre-Islamic West African civilizations.

The University of Nouakchott, Mauritania's sole significant research institution, operates with chronic underfunding and frequent closures due to student protests over unpaid scholarships and deteriorating facilities. Marine biology represents the country's most developed research area: Mauritania's Atlantic coast hosts extraordinarily productive cold-water upwelling zones that support vast fish populations. The Institut Mauritanien de Recherches Océanographiques et des Pêches studies octopus, sardine, and bream populations, work essential for managing fisheries that comprise 25% of government revenue. Overfishing by foreign vessels threatens these stocks, and Mauritanian researchers document declining catches while lacking enforcement capacity to prevent illegal fishing.

Environmental science focuses on desertification. The Sahara covers 90% of Mauritania, and sand dunes increasingly engulf agricultural land and oases. Researchers study how Bedouin herders manage scarce water resources and track vegetation changes using satellite remote sensing, collaborating with French and Spanish institutions that provide technical expertise Mauritania lacks. Climate change has shifted rainfall patterns, turning already marginal lands uninhabitable and driving migration to overcrowded coastal cities.

Archaeological research uncovers Mauritania's deep history. The ancient cities of Chinguetti and Ouadane, UNESCO World Heritage sites, served as staging posts for trans-Saharan caravans. Archaeologists, mostly European teams working with Mauritanian counterparts, study rock art, megalithic structures, and medieval Islamic manuscripts preserved in desert libraries. These findings challenge assumptions about pre-colonial Africa's isolation, revealing sophisticated trade networks and intellectual exchange.

STEM education reaches only a privileged few. Secondary school enrollment is below 30%, among Africa's lowest, and girls face particular barriers in conservative society where only 31% of women are literate. Virtually all Mauritanian scientists hold degrees from universities abroad—primarily in France, Morocco, or Senegal—and brain drain is absolute; research careers are essentially non-existent domestically. Science policy is rudimentary, and international collaborations driven by foreign research agendas rather than Mauritanian priorities. The country's scientific story is one of potential—rich marine resources, unique desert ecosystems, deep cultural heritage—but without investment in human capital and infrastructure, potential remains unrealized.`,
    issues: [
      'Negligible R&D funding and research infrastructure',
      'Extreme shortage of PhD-level researchers (fewer than 30 total)',
      'Absolute brain drain with no domestic research career paths',
      'Very low STEM education access, particularly for women',
      'Overfishing threatening marine resources despite research documenting decline'
    ]
  },
  {
    name: 'Mexico',
    lat: 23.6345,
    lng: -102.5528,
    summary: `Mexico's scientific output has surged over the past three decades, transforming the country from Latin America's underperformer into its second-largest research producer after Brazil. Investing approximately 0.5% of GDP in R&D—modest but stable—Mexico generates about 20,000 scientific publications annually, with research strengths in seismology, biodiversity, astronomy, and public health. Yet structural challenges persist: precarious research funding, brain drain to the United States, and concentration of resources in elite institutions while regional universities languish.

The National Autonomous University of Mexico (UNAM) in Mexico City dominates the country's scientific landscape, producing one-third of all Mexican publications and hosting state-of-the-art facilities including Latin America's fastest supercomputer. Mexican seismologists operate the world's most sophisticated earthquake early warning system, essential in a country where tectonic activity threatens millions. The devastating 1985 Mexico City earthquake, which killed 10,000 people, catalyzed investment in geophysics research. Today, sensors detect P-waves from earthquakes along the Pacific coast, providing 60-second warnings before S-waves strike the capital.

Biodiversity research leverages Mexico's exceptional natural wealth—the country ranks fourth globally in species richness with over 200,000 documented species and likely twice that undiscovered. The National Commission for the Knowledge and Use of Biodiversity (CONABIO) maintains massive databases on Mexican flora and fauna, work crucial as deforestation and climate change threaten ecosystems from cloud forests to coral reefs. Monarch butterfly migration, a spectacular phenomenon where millions journey from Canada to central Mexican forests, has become a long-term ecological study tracking climate impacts on animal behavior.

Astronomy thrives in Mexico's clear mountain skies. The Large Millimeter Telescope in Puebla, the world's largest single-dish millimeter telescope, probes star formation in distant galaxies. Mexican astronomers collaborate in international projects including the Event Horizon Telescope. Public health research addresses Mexico's dual disease burden: persistent infectious diseases like dengue and an explosion of diabetes and obesity—Mexico has the world's highest per-capita soft drink consumption, and 75% of adults are overweight.

The National Council of Science and Technology (CONACYT) coordinates research policy and funds graduate scholarships, though political interference has periodically disrupted priorities. President López Obrador's administration slashed CONACYT's budget and appointed ideologically driven leadership, sparking fierce protests from the scientific community. Brain drain remains chronic: an estimated 500,000 Mexicans with STEM degrees work in the United States, attracted by higher salaries and better research infrastructure. Women earn 35% of STEM PhDs, improving but below parity. Mexican science demonstrates Latin America's potential while illustrating how political volatility and limited resources constrain research in middle-income nations.`,
    issues: [
      'Political interference in science policy and CONACYT funding cuts',
      'Massive brain drain with 500,000+ STEM degree holders in the United States',
      'R&D investment at 0.5% of GDP insufficient for research ambitions',
      'Resource concentration in UNAM while regional universities underfunded',
      'Gender disparity with women earning only 35% of STEM PhDs'
    ]
  },
  {
    name: 'Moldova',
    lat: 47.4116,
    lng: 28.3699,
    summary: `Moldova's scientific infrastructure survives in diminished form, a shadow of its Soviet-era prominence when Chișinău hosted substantial research institutes within the USSR's centralized science system. Since independence in 1991, chronic underfunding—R&D spending is approximately 0.2% of GDP, among Europe's lowest—and catastrophic brain drain have hollowed out Moldovan research capacity. Yet pockets of excellence persist in agricultural science, materials physics, and computer science, sustained by scientists who refuse to abandon institutions their predecessors built.

The Academy of Sciences of Moldova, established in 1946, coordinates research across diminishing institutes. The Institute of Applied Physics, once a Soviet center for semiconductor research, struggles to maintain operations with antiquated equipment and a workforce depleted by emigration to Romania and Western Europe. Yet Moldovan physicists continue publishing in materials science, studying oxide thin films and photovoltaic materials. Agricultural research addresses immediate needs: Moldova's economy depends heavily on wine, fruits, and vegetables, and the Institute of Genetics, Physiology and Plant Protection develops disease-resistant grape varieties and studies climate change impacts on viticulture.

Computer science represents Moldova's unexpected bright spot. The Technical University of Moldova produces highly skilled programmers who either emigrate or work remotely for Western companies while remaining in Moldova, where living costs are Europe's lowest. This IT sector, worth over $1 billion annually, creates a feedback loop: companies fund computer science programs, improving education quality and research capacity. Moldovan cybersecurity researchers have contributed to cryptography and network security, though much of this work occurs in private companies rather than academic institutes.

Brain drain has devastated Moldovan science on a scale difficult to overstate. An estimated 30% of the population works abroad, including most PhD-level scientists. Young researchers face a stark choice: stay in Moldova with salaries around $500/month and minimal research funding, or leave for Romania (accessible via citizenship claims) or further west. Women comprise 45% of STEM graduates but face limited advancement opportunities in traditional hierarchical institutions.

Science policy exists primarily on paper. The government proclaimed science priorities—renewable energy, agriculture, ICT—but budgets rarely materialize. International collaborations, particularly with Romanian institutions, provide Moldova's lifeline to European research networks. EU association agreements allow Moldovan scientists to compete for Horizon Europe grants, though success rates remain low. Moldova's scientific community now exists in two parts: a diaspora conducting competitive research abroad, and a remnant at home, maintaining laboratories, teaching students, and hoping political stability and economic growth might eventually allow rebuilding what decades of neglect destroyed.`,
    issues: [
      'Catastrophic brain drain with 30% of population working abroad',
      'Minimal R&D funding (0.2% of GDP) among Europe\'s lowest',
      'Antiquated research equipment and deteriorating infrastructure',
      'Low salaries ($500/month) making research careers unviable',
      'Disconnect between declared science policy priorities and actual funding'
    ]
  },
  {
    name: 'Mongolia',
    lat: 46.8625,
    lng: 103.8467,
    summary: `Mongolia's scientific landscape reflects its unique position as a vast, sparsely populated land caught between Russian and Chinese spheres of influence while developing independent research identity. R&D investment stands at approximately 0.3% of GDP—modest but growing—with research priorities shaped by Mongolia's extraordinary natural resources: mining, paleontology, environmental science, and astronomy thrive in a country where deserts, steppes, and mountains cover territories larger than Western Europe but inhabited by just 3.3 million people.

The Mongolian Academy of Sciences, founded in 1961 during close Soviet ties, coordinates research across 16 institutes. Paleontology represents Mongolia's most internationally recognized science: the Gobi Desert yields exceptional dinosaur fossils, including the first discovered dinosaur eggs in the 1920s and numerous species unknown elsewhere. The Institute of Paleontology collaborates with American, Japanese, and Korean teams, though illegal fossil smuggling remains a persistent problem—Mongolia fights to repatriate specimens smuggled to private collectors.

Mining research drives Mongolia's economy. The country possesses vast copper, gold, coal, and rare earth deposits, and geologists at the Mongolian University of Science and Technology study resource extraction methods while grappling with environmental impacts. Rio Tinto's massive Oyu Tolgoi copper mine has spurred metallurgy and mining engineering research, creating demand for Mongolian expertise even as concerns grow about water depletion and pollution in desert regions where ecosystems are fragile.

Astronomy benefits from Mongolia's exceptional dark skies and high-altitude plateaus. The Institute of Astronomy and Geophysics operates observatories in remote locations, contributing to space weather monitoring and collaborating in international satellite tracking networks. Environmental science research addresses desertification and climate change—Mongolia has warmed at twice the global average rate, altering permafrost dynamics and grassland ecosystems that sustain nomadic herders and endangered species like snow leopards and wild Bactrian camels.

STEM education struggles with geographic dispersity. The National University of Mongolia in Ulaanbaatar concentrates resources, but rural students face barriers accessing quality education. Brain drain affects top talent—Mongolian scientists study and often remain in South Korea, Japan, and the United States—though diaspora networks maintain research connections. Women earn 55% of STEM degrees but remain underrepresented in senior research positions.

Science policy balances resource extraction with environmental protection, a tension embodied in debates over mining near sacred sites and water sources. International collaborations span political boundaries: Mongolia works with Russian institutes on seismology and climate, with Chinese researchers on biodiversity, and with Western partners on paleontology and astronomy. For a landlocked nation between two giants, science offers Mongolia a way to assert independence and global relevance beyond its strategic location.`,
    issues: [
      'Brain drain with many researchers studying and remaining abroad',
      'R&D funding at 0.3% of GDP insufficient for research ambitions',
      'Geographic dispersity limiting STEM education access in rural areas',
      'Environmental tensions between mining research and conservation',
      'Illegal fossil smuggling undermining paleontological research'
    ]
  },
  {
    name: 'Montenegro',
    lat: 42.7087,
    lng: 19.3744,
    summary: `Montenegro's scientific community is emerging from the shadow of former Yugoslavia, building independent research capacity since the country's 2006 independence while leveraging EU association to access European research networks. With a population of only 620,000—smaller than most cities—Montenegro invests approximately 0.4% of GDP in R&D and has adopted a niche strategy focusing on marine biology, sustainable tourism research, and seismology where small scale can still generate meaningful contributions.

The University of Montenegro in Podgorica serves as the country's primary research institution, producing about 500 scientific publications annually. Marine biology research centers on the Bay of Kotor, a spectacular fjord-like inlet that hosts unique Mediterranean ecosystems. Montenegrin marine biologists study endemic species, coral communities, and the impacts of yacht tourism on water quality—the bay attracts superyachts whose sewage and anchor damage threaten ecosystems. The Institute of Marine Biology in Kotor collaborates with Croatian and Italian researchers, contributing to Adriatic Sea environmental monitoring.

Seismology research carries urgency in a country prone to devastating earthquakes. The 1979 quake that struck near the coast killed 136 people and destroyed historic towns. Montenegro's Seismological Observatory monitors the complex tectonic zone where the Adriatic microplate collides with the Dinaric Alps, contributing data to regional early-warning systems. Structural engineering research focuses on earthquake-resistant construction methods for traditional stone buildings that comprise UNESCO heritage sites.

Environmental science addresses tourism impacts—Montenegro's pristine coastline and mountain national parks attract millions of visitors, straining infrastructure and ecosystems. Researchers study carrying capacity for sustainable tourism, water resource management, and biodiversity conservation in the Tara River canyon, Europe's deepest gorge. Climate change research documents retreating glaciers in the Prokletije Mountains and shifting vegetation zones.

Brain drain challenges Montenegro severely. The country produces fewer than 50 PhDs annually across all fields, and many remain abroad after training in Serbia, Croatia, or Western Europe. STEM education enrollment is growing, but small population limits the talent pool. Women comprise 40% of engineering graduates, typical for the Balkans. Science policy emphasizes EU integration: Montenegro participates in Horizon Europe programs and adopted EU research standards for institutional funding.

International collaborations provide Montenegro's primary link to global science. The country joined CERN as an associate member, allowing physicists to participate in particle physics research impossible to conduct domestically. For Montenegro, science policy is less about comprehensive coverage than strategic niches where quality can compensate for limited scale, demonstrating how micro-states can maintain research presence through selective focus and international partnership.`,
    issues: [
      'Severe brain drain due to small domestic research job market',
      'R&D funding at 0.4% of GDP limiting research capacity',
      'Very small population (620,000) constraining STEM talent pool',
      'Tourism pressures threatening ecosystems being studied',
      'Dependence on international collaboration for research capacity'
    ]
  },
  {
    name: 'Morocco',
    lat: 31.7917,
    lng: -7.0926,
    summary: `Morocco's scientific ambitions reflect its position as North Africa's most politically stable nation, investing heavily in research infrastructure to diversify beyond agriculture and phosphates—Morocco controls 70% of global phosphate reserves. R&D spending has climbed to approximately 0.8% of GDP, highest in the Maghreb, with a strategic focus on renewable energy, water management, and materials science that leverage Morocco's geographic and resource advantages while addressing development challenges.

Morocco's research is led by Mohammed V University in Rabat and Hassan II University in Casablanca, together producing about 8,000 publications annually—quadruple the output from 2000. Solar energy research represents Morocco's flagship scientific initiative: the country operates the Noor Ouarzazate complex, the world's largest concentrated solar power plant, generating both electricity and research questions about thermal storage, materials degradation in desert conditions, and grid integration. Moroccan engineers collaborate with German and Spanish institutes, positioning themselves as renewable energy experts for African and Middle Eastern markets.

Water scarcity drives agricultural and environmental research. Morocco faces severe water stress, and the Institut National de la Recherche Agronomique studies drought-resistant crops, precision irrigation, and traditional water-harvesting techniques like khettara underground channels. Desalination research has intensified as coastal cities grow and aquifers deplete. Climate change modeling suggests Morocco's agricultural heartland could face catastrophic droughts, lending urgency to adaptation research.

Phosphate chemistry represents another research strength. Morocco's phosphate deposits, mined since 1920, supply fertilizers globally, and the OCP Group funds research on fertilizer efficiency, phosphate recycling from wastewater, and new materials derived from phosphate minerals. These applied programs connect industry to universities, creating research funding beyond government budgets. Moroccan chemists publish prolifically on catalysis and materials science, with increasing international citations.

STEM education has expanded dramatically: university enrollment grew from 10% to 35% of the population since 2000, though quality varies widely. Women earn 30% of engineering degrees, improving but below global averages and constrained by social norms. Brain drain affects top researchers—Moroccan scientists hold positions in French and North American universities—though diaspora networks maintain research connections.

Science policy emphasizes applied research aligned with national development priorities. King Mohammed VI has championed science investment, launching initiatives including the Moroccan Innovation Strategy and partnerships with MIT and other elite institutions. Morocco aspires to become Africa's knowledge economy leader, hosting conferences and positioning Casablanca as a continental tech hub. Whether sustained investment and institutional reforms can translate scientific infrastructure into innovation that drives economic transformation remains uncertain, but Morocco's trajectory suggests intentional, if uneven, progress toward research competitiveness.`,
    issues: [
      'Brain drain with many top researchers at French and North American universities',
      'Gender disparity with women earning only 30% of engineering degrees',
      'Quality variation between elite and regional universities',
      'Need to translate research into economic innovation and commercialization',
      'Water scarcity threatening agricultural research sustainability'
    ]
  }
]

async function main() {
  console.log('🔬 Inserting SCIENCE & RESEARCH summaries for Latvia through Morocco\n')
  console.log('Countries: 14 total (Latvia, Lebanon, Libya, Lithuania, Luxembourg, Malaysia, Maldives, Mali, Mauritania, Mexico, Moldova, Mongolia, Montenegro, Morocco)\n')

  let successCount = 0
  let errorCount = 0
  const errors: string[] = []

  for (const location of scienceSummaries) {
    const separator = '='.repeat(80)
    console.log(`\n${separator}`)
    console.log(`Processing: ${location.name}`)
    console.log(separator)

    try {
      console.log(`Summary length: ${location.summary.length} characters`)
      console.log(`Issues count: ${location.issues.length}`)

      // Verify character count is within range
      if (location.summary.length < 2500 || location.summary.length > 3500) {
        console.warn(`⚠️  Warning: ${location.name} summary length ${location.summary.length} is outside 2,500-3,500 range`)
      }

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: 'country',
            category: 'science',
          },
        },
        update: {
          summary: location.summary,
          issues: JSON.stringify(location.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          lat: location.lat,
          lng: location.lng,
          country: location.name,
          updatedAt: new Date(),
        },
        create: {
          name: location.name,
          type: 'country',
          country: location.name,
          lat: location.lat,
          lng: location.lng,
          category: 'science',
          summary: location.summary,
          issues: JSON.stringify(location.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ Saved SCIENCE summary for ${location.name}`)
      successCount++
    } catch (error) {
      console.error(`❌ Error saving SCIENCE summary for ${location.name}:`, error)
      errors.push(location.name)
      errorCount++
    }
  }

  const finalSeparator = '='.repeat(80)
  console.log(`\n${finalSeparator}`)
  console.log('✅ SCIENCE & RESEARCH summary insertion complete!')
  console.log(`Successfully inserted: ${successCount}/${scienceSummaries.length} summaries`)
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount}`)
    console.log(`Failed countries: ${errors.join(', ')}`)
  }
  console.log(finalSeparator)

  console.log('\n📊 Verification:')
  const scienceRecords = await prisma.locationSummary.findMany({
    where: { category: 'science' },
    select: { name: true, category: true },
    orderBy: { name: 'asc' },
  })
  console.log(`Total SCIENCE summaries in database: ${scienceRecords.length}`)

  console.log('\n📝 Countries with SCIENCE summaries:')
  scienceRecords.forEach((r) => {
    console.log(`  ✅ ${r.name}`)
  })

  console.log('\n🎯 Character count verification for new entries:')
  for (const location of scienceSummaries) {
    const inRange = location.summary.length >= 2500 && location.summary.length <= 3500
    const status = inRange ? '✅' : '⚠️ '
    console.log(`  ${status} ${location.name}: ${location.summary.length} characters`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
