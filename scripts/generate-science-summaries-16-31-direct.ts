import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 16-31 (Belize through Costa Rica)
const countries = [
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'Benin', lat: 9.30769, lng: 2.315834 },
  { name: 'Bhutan', lat: 27.5142, lng: 90.4336 },
  { name: 'Bolivia', lat: -16.5, lng: -68.15 },
  { name: 'Bosnia and Herzegovina', lat: 43.9159, lng: 17.6791 },
  { name: 'Botswana', lat: -22.328474, lng: 24.684866 },
  { name: 'Brazil', lat: -14.235, lng: -51.9253 },
  { name: 'Brunei', lat: 4.5353, lng: 114.7277 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Burkina Faso', lat: 12.238333, lng: -1.561593 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.991 },
  { name: 'Cameroon', lat: 7.369722, lng: 12.354722 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Chad', lat: 15.4542, lng: 18.7322 },
  { name: 'Chile', lat: -35.6751, lng: -71.543 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
]

// Science & Research summaries in Ed Yong / Carl Zimmer style
const summaries: { [key: string]: string } = {
  'Belize': `Science unfolds at its own pace in Belize, where the barriers between laboratory and jungle blur in fascinating ways. The country's modest research infrastructure centers around the University of Belize, though the institution operates with limited resources and an R&D spend that barely registers as a fraction of GDP. Yet what Belize lacks in funding, it compensates for with natural abundance—making it a living laboratory for ecological and marine research.

The Belize Barrier Reef, a UNESCO World Heritage Site and the second-largest coral reef system on Earth, draws international scientists like moths to bioluminescence. Researchers from institutions across the Americas descend here to study reef resilience, coral bleaching, and marine biodiversity. The Smithsonian Institution maintains a long-term research presence, and projects like the Healthy Reefs Initiative have transformed local waters into an outdoor classroom for understanding climate adaptation in marine ecosystems.

On land, the dense tropical forests harbor pharmaceutical possibilities that researchers have only begun to catalog. Traditional Maya medicine, passed down through generations, provides ethnobotanists with leads on bioactive compounds. Small-scale collaborations with foreign universities have yielded promising research on antimalarial plants and novel antibiotics, though commercialization remains distant.

The country faces a persistent brain drain, as talented students pursue advanced degrees abroad—often in the United States or Canada—and rarely return. STEM education struggles with resource constraints, limited lab facilities, and a shortage of qualified teachers. The government has made periodic commitments to science funding, but competing priorities in healthcare and infrastructure typically win out. International partnerships remain Belize's greatest scientific asset, providing equipment, expertise, and publication opportunities that would otherwise remain beyond reach. The nation's science story is less about breakthrough discoveries and more about careful stewardship of an irreplaceable natural laboratory.`,

  'Benin': `In Benin's capital of Cotonou and the inland city of Abomey-Calavi, a quiet scientific awakening is underway, though it proceeds against considerable headwinds. The country invests less than 0.5% of GDP in research and development—a figure that places it among Africa's lower performers—yet pockets of excellence persist against the odds. The University of Abomey-Calavi, Benin's flagship institution, houses most of the nation's scientific capacity, with particular strength in agricultural research and tropical medicine.

West African agriculture finds an ally in Benin's researchers, who work on crop varieties resilient to the region's erratic rainfall and degraded soils. Scientists at the National Institute of Agricultural Research have developed improved cassava and yam varieties, staples that feed millions across West Africa. Their work on biological pest control—particularly in managing the devastating fall armyworm—demonstrates how small-scale research can have outsized regional impact.

Medical research centers on diseases that exact a terrible local toll: malaria, HIV/AIDS, and parasitic infections. The Centre de Recherche Entomologique de Cotonou investigates mosquito resistance to insecticides, crucial work as malaria control strategies falter. Partnerships with French institutions like the Institut de Recherche pour le Développement provide funding and training that domestic sources cannot match.

The brain drain runs deep here. Bright students who earn scholarships to study abroad—typically in France, the former colonial power, or increasingly in China—face limited opportunities to conduct meaningful research upon return. Laboratory equipment is scarce, funding for projects sporadic, and academic salaries insufficient to retain talent. Science policy exists more as aspiration than reality. Yet individual researchers persist, often funding their own fieldwork, cobbling together equipment, and publishing findings that might help solve the very local problems their neighbors face daily. The scientific enterprise in Benin is sustained not by institutional support, but by stubborn dedication to discovery.`,

  'Bhutan': `High in the Himalayas, where prayer flags snap in thin air and monasteries cling to cliff faces, Bhutan approaches science through the lens of its unique national philosophy: Gross National Happiness. Research priorities align with environmental conservation, traditional medicine, and sustainable development—a scientific agenda as distinctive as the kingdom itself. R&D investment remains modest by global standards, but the country has made deliberate choices about which knowledge to pursue and how.

The Royal University of Bhutan, established in 2003, coordinates higher education across the kingdom's eleven constituent colleges. Research capacity remains limited—labs are basic, equipment dated, and PhD-holding faculty scarce. Yet the university has carved out research niches that reflect Bhutan's priorities: glacial lake outburst floods (a deadly hazard in a warming climate), medicinal plants cataloged in traditional Sowa Rigpa medicine, and biodiversity surveys of the nation's pristine forests.

Environmental research matters existentially here. Bhutan's constitution mandates that at least 60% of the country remain under forest cover—a requirement already exceeded—and scientists monitor these ecosystems with increasing sophistication. Climate change threatens the massive glaciers feeding Bhutan's rivers, and researchers collaborate with international partners to model flood risks. The country's position as a carbon sink for the entire planet adds global significance to local scientific work.

Traditional medicine enjoys official recognition and research support, an unusual arrangement that validates ancient knowledge systems while subjecting them to modern scrutiny. The Institute of Traditional Medicine Services investigates herbal remedies, though rigorous clinical trials remain rare. Most Bhutanese students pursuing advanced STEM degrees must study abroad—typically in India, Australia, or the United States—and the return rate is low. The government has invested in STEM education initiatives, but opportunities for scientific careers within Bhutan remain limited. Research here proceeds at a contemplative pace, aligned with Buddhist values of sustainability and balance rather than the relentless publish-or-perish pressure of Western academia.`,

  'Bolivia': `Bolivia's scientific landscape mirrors its dramatic geography—peaks of excellence rising from plateaus of limited capacity. At 3,640 meters above sea level, La Paz hosts much of the country's research infrastructure, though chronically underfunded universities and institutes struggle with outdated equipment and brain drain. R&D spending hovers below 0.2% of GDP, among South America's lowest, reflecting decades of political instability and competing budgetary demands.

The Universidad Mayor de San Andrés in La Paz anchors scientific research, with notable work in high-altitude medicine, mining engineering, and archaeology. Bolivia's unique position as a high-altitude nation provides natural experiments for understanding human adaptation—how lungs process thin air, how hearts compensate, how pregnancies proceed at elevations where others struggle to breathe. This research has implications far beyond the Andes, informing our understanding of hypoxia and altitude sickness worldwide.

Lithium—Bolivia possesses perhaps the world's largest reserves, locked in the Salar de Uyuni salt flats—has sparked intense research interest. Extracting lithium from brine presents technical challenges that foreign companies have long grappled with, and the government has invested in developing domestic extraction expertise, though progress has been halting. Materials science research, often in partnership with Chinese institutions, seeks to transform Bolivia from raw material exporter to battery manufacturer.

The Amazon basin covering Bolivia's eastern lowlands harbors pharmaceutical possibilities and ecological mysteries, yet research capacity here is minimal. Brain drain hemorrhages talent—young scientists pursue PhDs abroad and rarely return to limited opportunities at home. Those who remain often support themselves through consulting rather than research. International collaborations with U.S. and European universities provide lifelines: equipment, training, and publication opportunities. Science policy has been more rhetoric than reality, with grand announcements rarely followed by sustained funding. Still, individual researchers persist, documenting the country's remarkable biodiversity and geological wealth, building knowledge that may someday support a more prosperous future.`,

  'Bosnia and Herzegovina': `The scientific infrastructure of Bosnia and Herzegovina still bears scars from the Yugoslav wars of the 1990s, when laboratories were destroyed, researchers fled, and universities became refuges for the displaced. A quarter-century later, research capacity is slowly rebuilding, though underfunding and brain drain continue to constrain what's possible. R&D investment remains below 0.5% of GDP, and the country's fractured governance—divided between the Federation of Bosnia and Herzegovina, Republika Srpska, and Brčko District—complicates coordination of science policy.

The University of Sarajevo and University of Banja Luka anchor research efforts, but both struggle with aging equipment, low salaries, and administrative burdens that leave little time for actual science. Researchers here often work second jobs to make ends meet, conducting studies in spare moments between teaching loads and consulting work. Yet pockets of excellence persist: materials science research building on Yugoslavia's once-strong metallurgical tradition, environmental studies of the country's rivers and forests, and medical research addressing the health legacy of war exposure.

Engineering research has practical applications for a country still rebuilding infrastructure. Work on earthquake-resistant construction (the region sits on seismically active terrain), water treatment systems, and renewable energy reflects immediate needs. Agricultural scientists develop crop varieties suited to the region's climate while addressing soil contamination from wartime activities.

The exodus of talent has been relentless. Young scientists overwhelmingly seek opportunities in Western Europe, particularly Germany and Austria, where salaries are multiples of what they'd earn at home and lab facilities vastly superior. Those who remain are often older researchers committed to the country or unable to relocate. International partnerships, particularly with EU institutions, provide essential funding and equipment. The European Union's Horizon research program has channeled modest resources here, enabling collaborations that would otherwise be impossible. Science in Bosnia and Herzegovina is an act of persistence—researchers solving local problems with minimal resources, training students who will likely build their careers elsewhere, and hoping that gradual economic development might someday restore the research capacity their country once possessed.`,

  'Botswana': `Botswana's scientific emergence mirrors its broader economic story—steady progress built on natural resource wealth and relatively good governance, though challenges remain substantial. R&D investment has crept above 0.5% of GDP, respectable for sub-Saharan Africa, though far below what's needed to build world-class research capacity. The University of Botswana, established in 1982, has grown into a regional player, particularly strong in HIV/AIDS research, wildlife biology, and earth sciences.

Medical research has been transformed by the devastating HIV/AIDS epidemic—Botswana once had the world's highest infection rate. That crisis attracted international research partnerships that have become permanent: the Botswana-Harvard AIDS Institute Partnership conducts cutting-edge work on treatment regimens, drug resistance, and prevention strategies. These collaborations have generated crucial data showing that aggressive treatment can control the epidemic, findings now guiding global health policy.

The country's spectacular wildlife—elephants in the Okavango Delta, the great migrations of the Kalahari—provides another research focus. Conservation biology here isn't abstract; it's about managing human-wildlife conflict, understanding elephant behavior as populations recover, and balancing tourism revenue with ecosystem protection. The Okavango Research Institute investigates the delta's hydrology and ecology, work that becomes more urgent as upstream water extraction threatens this irreplaceable wetland.

Diamond wealth has funded geological research—understanding kimberlite pipes, exploring for minerals, and developing local expertise so Botswana can manage its resources rather than simply export them. The government has made deliberate investments in STEM education, recognizing that diversifying the economy beyond diamonds requires scientific talent.

Yet brain drain persists. Botswana trains scientists who then depart for South Africa, Europe, or North America, lured by better facilities and higher pay. Research funding, while relatively generous by regional standards, remains unpredictable, making long-term projects difficult. Science policy emphasizes practical applications—solving local problems rather than pursuing basic research—a pragmatic choice given limited resources. The scientific community here is small enough that most researchers know each other, a tight-knit network sustained by shared commitment to building capacity in one of Africa's most promising nations.`,

  'Brazil': `Brazil's scientific enterprise operates at a scale befitting South America's giant—a complex ecosystem of world-class research institutes, ambitious universities, and persistent underfunding that leaves potential partially realized. R&D investment fluctuates around 1.2% of GDP, substantial in absolute terms given the economy's size, yet modest compared to developed nations. When funding is consistent, Brazilian science punches above its weight. When budget crises hit, as they frequently do, research grinds to a halt.

The University of São Paulo consistently ranks among Latin America's finest, conducting research across disciplines from particle physics to Amazonian ecology. FAPESP, the São Paulo Research Foundation, provides stable funding that enables long-term projects—a model other Brazilian states struggle to replicate. Brazilian researchers have contributed Nobel-worthy work in tropical medicine, including Carlos Chagas's discovery of Chagas disease and Adolfo Lutz's epidemiological studies, though the prizes themselves have remained elusive.

The Amazon represents both scientific treasure and political battleground. Researchers at INPA (the National Institute of Amazonian Research) catalog biodiversity in forests that may contain millions of undiscovered species, investigate forest-climate interactions crucial for understanding global systems, and document traditional knowledge held by Indigenous peoples. Yet this work proceeds amid pressure from agricultural interests, illegal logging, and political hostility toward environmental research. Funding cuts and intimidation of scientists investigating deforestation have hampered work exactly when it's most urgently needed.

Agricultural research has delivered tangible successes: EMBRAPA (the Brazilian Agricultural Research Corporation) has developed soybean varieties that thrive in tropical conditions, enabling the transformation of the cerrado savanna into one of the world's breadbaskets. Aerospace engineering centers around Embraer, producing regional jets, while petroleum research by Petrobras pushed the boundaries of deepwater drilling.

Brain drain affects Brazil differently than smaller nations—talent often relocates internally, from poorer regions to São Paulo, Rio de Janeiro, or Brasília, rather than leaving the country entirely. Yet many of Brazil's best scientists do work abroad, and return rates are mixed. STEM education has expanded dramatically, with universities across the country producing PhDs in growing numbers, though quality varies widely. The challenge isn't a shortage of trained scientists but rather providing them with the funding, equipment, and job security to conduct meaningful research. Brazilian science, like the country itself, contains multitudes—pockets of excellence operating alongside institutional dysfunction, world-class discoveries emerging from labs that sometimes lack basic supplies, a scientific community that persists through funding crises because the problems they're tackling are too important to abandon.`,

  'Brunei': `In this small, wealthy sultanate on the island of Borneo, oil money provides resources most Southeast Asian nations can only dream of, yet scientific research remains surprisingly underdeveloped. Brunei's R&D investment as a percentage of GDP is negligible, despite enormous government revenues from hydrocarbon exports. The apparent paradox—abundance without advancement—reflects policy choices that have prioritized wealth distribution over knowledge creation.

Universiti Brunei Darussalam, established in 1985, has grown into a well-funded institution by regional standards, with modern facilities and competitive salaries that attract some overseas researchers. Yet research output remains modest, focused primarily on petroleum engineering, Islamic studies, and regional Southeast Asian issues. Science happens here, but not at the intensity one might expect given available resources.

Environmental research on Borneo's tropical rainforests—the patches that remain after logging—provides the most distinctive contribution. The Kuala Belalong Field Studies Centre, nestled in primary rainforest, hosts international researchers studying biodiversity in one of Earth's most species-rich ecosystems. Marine research on coral reefs and mangrove ecology proceeds at a small scale, often in partnership with foreign institutions.

Petroleum geology and engineering dominate applied research, unsurprising given the industry's economic centrality. Brunei Shell Petroleum maintains research facilities addressing technical challenges of mature oil fields and enhanced recovery techniques. The government has intermittently expressed interest in economic diversification and developing a knowledge economy, but follow-through has been limited.

The country faces a unique brain drain pattern: talented Bruneian students study abroad, often in the UK or Australia on government scholarships, and many return home—but to comfortable government jobs or the oil industry rather than research positions. Scientific careers lack the prestige and security of other professions. STEM education has expanded in secondary schools, but university-level research capacity remains thin. International collaborations provide most serious research opportunities, with Bruneian institutions serving as junior partners to foreign universities. For a nation with abundant wealth, scientific impact remains stubbornly modest—a case study in how money alone, absent strategic vision and institutional commitment, cannot build a thriving research ecosystem.`,

  'Bulgaria': `Bulgarian science retains echoes of its communist-era prominence, when Sofia housed institutes conducting serious work in physics, chemistry, and materials science integrated into the Soviet bloc's research networks. After 1989's transition, much of that capacity collapsed—funding evaporated, equipment became obsolete, and thousands of researchers emigrated. Today's Bulgarian science operates in this long shadow, rebuilding but chronically underfunded, with R&D investment around 0.8% of GDP, among the European Union's lowest.

The Bulgarian Academy of Sciences, once prestigious, has fragmented into dozens of institutes, some maintaining international standards while others barely function. Sofia University and several technical universities conduct research, though brain drain hemorrhages talent. Young Bulgarian scientists overwhelmingly pursue careers in Western Europe or North America, where salaries are multiples higher and lab facilities vastly superior. Those who remain often do so from personal commitment rather than professional opportunity.

Yet pockets of excellence persist. Bulgarian researchers contribute to CERN's particle physics experiments, maintaining the country's tradition in high-energy physics. Bioinformatics and computer science research has found niches in Sofia's growing tech sector. Archaeological research on Thracian sites and medieval Bulgarian history leverages unique local resources.

Pharmaceutical research, building on chemical synthesis expertise, has seen private sector investment, particularly in generics development. Agricultural research on crops suited to the Balkans' climate proceeds at modest scale. EU membership since 2007 has provided access to Horizon research funding, enabling international collaborations that would otherwise be impossible.

STEM education faces challenges: secondary schools lack lab equipment, university salaries fail to attract talent, and English-language proficiency (essential for publishing) varies. The government periodically announces science funding increases, but implementation lags rhetoric. Science policy suffers from political instability—frequent government changes prevent sustained strategies.

Bulgarian researchers often work second jobs, conduct experiments with improvised equipment, and depend on international partnerships for access to facilities. It's a scientific culture sustained by individual dedication rather than institutional support—scientists training students who will likely leave, publishing papers that demonstrate capacity without generating local impact, and hoping that gradual EU integration might eventually restore the research infrastructure their predecessors enjoyed decades ago.`,

  'Burkina Faso': `In one of the world's poorest nations, where life expectancy hovers around 60 and most people survive on subsistence agriculture, scientific research might seem a luxury. Yet Burkina Faso's researchers pursue knowledge that could transform their country's prospects, working with determination that compensates somewhat for minimal resources. R&D spending registers as a tiny fraction of GDP, and research infrastructure is rudimentary even by West African standards.

The University of Ouagadougou, rebranded as Université Joseph Ki-Zerbo, houses most national research capacity. Scientists here focus on problems with immediate local relevance: improving crop yields in degraded soils, combating malaria and other tropical diseases, and managing scarce water resources in an increasingly arid climate. Agricultural research at INERA (Institut de l'Environnement et de Recherches Agricoles) has developed drought-resistant sorghum and millet varieties, staple crops for the Sahel region where rainfall grows ever more erratic.

Medical research addresses the diseases killing Burkinabé people: malaria, HIV/AIDS, tuberculosis, and neglected tropical diseases like lymphatic filariasis. The Centre Muraz, established during French colonial rule, continues research on tropical diseases with modest international support. Local scientists investigate traditional medicinal plants, seeking to validate treatments used for generations and perhaps discover new pharmaceutical leads.

Water research has become urgent as the Sahara advances southward. Scientists study groundwater resources, test rainwater harvesting techniques, and model climate impacts on the region's hydrology. This work happens with minimal equipment—researchers improvising methods, relying on foreign partnerships for analysis they cannot perform locally.

Brain drain is catastrophic. Burkina Faso trains scientists who then depart for Côte d'Ivoire, Senegal, or more distant opportunities in France or North America. Those who remain typically cannot pursue research full-time, supporting themselves through teaching, consulting, or government positions. STEM education struggles with overcrowded classrooms, shortages of qualified teachers, and students arriving at university without ever having used microscopes or conducted experiments.

International partnerships—with French, American, and Chinese institutions—provide essential support: training, equipment, and publication opportunities. Yet projects end when funding cycles conclude, leaving little sustainable capacity. Science in Burkina Faso is less an ecosystem than a collection of isolated efforts by dedicated individuals, working against overwhelming odds to generate knowledge that might help their country address seemingly insurmountable challenges.`,

  'Cambodia': `Cambodia's scientific infrastructure, like so much else in this country, is still recovering from the Khmer Rouge genocide that murdered a generation of educated professionals. Between 1975 and 1979, intellectuals were systematically killed—teachers, doctors, scientists, anyone who wore glasses—creating an intellectual void that persists decades later. Today's research capacity is being built essentially from scratch, with R&D investment negligible as a percentage of GDP.

The Royal University of Phnom Penh and several newer institutions conduct modest research, primarily focused on agriculture, public health, and environmental studies. Rice research matters enormously in a country where the grain is both staple food and cultural symbol. Scientists work on varieties resistant to flooding (the Mekong's annual inundation), drought (increasingly frequent), and pests, often collaborating with the International Rice Research Institute in the Philippines.

Medical research centers on the diseases that burden Cambodia most heavily: malaria, dengue fever, HIV/AIDS, and tuberculosis. The Institut Pasteur du Cambodge, linked to France's famous research network, investigates infectious diseases and provides training that Cambodia's universities cannot yet match. Drug resistance research here has global implications—artemisinin-resistant malaria first emerged along the Thai-Cambodian border, threatening the most effective antimalarial treatment we have.

Angkor Wat and the other temple complexes of Angkor provide focus for archaeological and conservation science. Researchers from around the world study how these 12th-century structures have endured (and what threatens them), combining archaeology, materials science, and hydrology to understand the ancient Khmer civilization's sophisticated water management systems.

Brain drain is severe but improving. For decades, any Cambodian who could secure education abroad would stay abroad. Now some return, drawn by NGO positions, international development projects, or growing private sector opportunities, though research careers remain rare. STEM education has expanded dramatically since the 1990s, yet quality lags—teacher training is inadequate, labs are scarce, and rote memorization dominates over experimental investigation.

International partnerships sustain what research exists. Japanese, Australian, and European institutions provide funding, training, and equipment that domestic sources cannot. Yet projects come and go, rarely building lasting institutional capacity. Scientific research in Cambodia is less about breakthrough discoveries than about building the human capital that genocide destroyed—training a new generation of researchers who can address their country's pressing challenges.`,

  'Cameroon': `Cameroon's geographic and cultural diversity—from coastal mangroves to Sahel savanna, from Francophone to Anglophone regions—is reflected in scattered research capacity that has never quite coalesced into a cohesive national system. R&D investment remains well below 1% of GDP, and the country's universities and institutes struggle with underfunding, political interference, and the brain drain that afflicts most of Africa.

The University of Yaoundé, split into two institutions (Yaoundé I and II), anchors research efforts along with universities in Douala and Buea. Scientists here work on agriculture—improving cocoa yields (Cameroon is a major exporter), developing cassava and plantain varieties resistant to local pests—and public health challenges including malaria, HIV/AIDS, and increasingly, non-communicable diseases as urbanization proceeds. Medical research benefits from partnerships with French and American institutions, legacies of colonial ties and ongoing health aid.

Mount Cameroon, an active volcano towering over the coast, provides a natural laboratory for vulcanology and tropical ecology research. The mountain's extraordinary biodiversity gradients—from lowland rainforest to subalpine grasslands—attract ecologists documenting species found nowhere else. Forest research in the Congo Basin portions of eastern Cameroon addresses logging impacts, wildlife conservation, and climate-forest interactions, though capacity is limited and insecurity in some regions complicates fieldwork.

Materials science and chemistry research happens at modest scale, often in partnership with French institutions. Petroleum geology research has grown with offshore oil discoveries, though much technical work is conducted by foreign companies rather than Cameroonian institutions. The government periodically announces commitments to science and technology development, but follow-through is inconsistent, and research funding remains vulnerable to economic shocks.

Brain drain is relentless. Talented students pursue advanced degrees in France, Belgium, or North America and rarely return to limited opportunities. Those who do return often cannot conduct serious research due to lack of equipment, funding, or institutional support. Professors juggle teaching loads with outside consulting to supplement inadequate salaries, leaving little time for research. STEM education has expanded in enrollment but not necessarily in quality, with labs often lacking basic equipment.

International partnerships provide lifelines—equipment donations, training opportunities, and publication pathways—but sustainability remains elusive. Science in Cameroon proceeds through the determination of individual researchers addressing local problems with insufficient resources, training students in methods they cannot fully implement, and hoping that gradual development might eventually build the research infrastructure their work deserves.`,

  'Canada': `Canadian science operates at the frontier of discovery, with research institutions that consistently rank among the world's finest and contributions spanning every field from quantum computing to Arctic ecology. The country invests approximately 1.7% of GDP in R&D, substantial though somewhat below the OECD average, with research distributed across universities, national laboratories, and private sector facilities. Three Canadian researchers have won Nobel Prizes in recent years—Donna Strickland in physics (2018), James Peebles in physics (2019), and David Card in economics (2021)—continuing a tradition of excellence.

The University of Toronto, McGill University, and University of British Columbia consistently rank globally, conducting research across disciplines. Toronto's strength in artificial intelligence, led by Geoffrey Hinton's pioneering work on neural networks, has spawned an ecosystem of AI companies and attracted massive investment. The Vector Institute and similar hubs position Canada as an AI powerhouse, competing with Silicon Valley and China.

Arctic research takes on urgent significance as the region warms faster than anywhere else on Earth. Canadian scientists operate research stations in the far north, documenting permafrost thaw, ice sheet dynamics, and impacts on Indigenous communities. This work contributes to global climate models while addressing immediate challenges for Arctic sovereignty and resource management. The Canadian Arctic Archipelago provides a living laboratory for climate science that has worldwide implications.

Medical research spans from basic science to clinical applications. The discovery of insulin in Toronto in 1921 set a pattern of translational medicine that continues—CRISPR gene editing breakthroughs, stem cell research, and cancer immunotherapy advances have emerged from Canadian labs. Vaccine development, highlighted during the COVID-19 pandemic, builds on decades of infectious disease research.

Particle physics research connects Canada to global science infrastructure—Canadian physicists contribute to CERN's experiments and operate TRIUMF, the country's particle accelerator laboratory. Space research through the Canadian Space Agency has included contributions to the International Space Station (the Canadarm robotic systems) and Mars rovers.

Yet challenges persist. Brain drain to the United States remains significant, with researchers lured by higher salaries, better funding, and access to premier institutions. Research funding, while substantial, hasn't kept pace with ballooning university enrollments and infrastructure needs. STEM education produces well-trained graduates, but retaining them against American offers requires ongoing effort. Immigration has partially compensated, attracting talented researchers from around the world. Canadian science thrives through excellence that commands international respect, practical applications that drive economic growth, and a collaborative culture that makes the most of resources spread across a vast geography.`,

  'Chad': `In one of the world's most challenging research environments—landlocked, impoverished, politically unstable, and dominated by the advancing Sahara—Chad's scientific infrastructure exists more as aspiration than reality. R&D investment is minimal even by African standards, and research capacity is concentrated in N'Djamena, the capital, with limited facilities elsewhere. Yet dedicated researchers persist, addressing problems that could determine whether the country remains viable.

The University of N'Djamena, chronically underfunded and understaffed, conducts modest research despite constraints that would shutter institutions elsewhere. Scientists here focus on immediate survival challenges: Lake Chad's catastrophic shrinking (the lake has lost 90% of its surface area since the 1960s), desertification advancing from the north, and water scarcity that drives conflict and migration.

Environmental research on Lake Chad attracts international attention. The lake, shared with Nigeria, Niger, and Cameroon, supports 30 million people whose livelihoods depend on its continued existence. Researchers study hydrology, climate impacts, and potential restoration strategies, work conducted primarily through international partnerships with European and American institutions that provide equipment and analysis capabilities unavailable locally.

Agricultural research addresses crop survival in increasingly hostile conditions—varieties of sorghum, millet, and cowpeas that can withstand heat, drought, and erratic rainfall. This work happens with minimal resources, researchers often funding their own fieldwork and improvising experimental designs to work around lacking equipment.

Medical research focuses on preventable diseases that kill Chadian people in large numbers: malaria, HIV/AIDS, tuberculosis, and neglected tropical diseases. Most research happens through foreign NGOs and health organizations rather than domestic institutions. Traditional medicine practices are documented, though rigorous scientific study is rare.

Brain drain is near-total. Chadians who manage to obtain scientific education abroad almost never return, facing no research jobs, no equipment, no funding, and political instability that makes long-term planning impossible. STEM education suffers from severe teacher shortages, absent lab facilities, and secondary school graduates who often lack functional literacy in French, the language of instruction.

International partnerships sustain what little research exists. French institutions, legacy of colonial ties, provide the most support, though Chinese and other collaborations have grown. Yet projects rarely build lasting capacity—when funding ends or security deteriorates, research ceases. Science in Chad is less a system than a collection of individual efforts, researchers documenting environmental catastrophe with inadequate tools, training students who will leave, and hoping their work might inform solutions to problems that threaten millions of people.`,

  'Chile': `Chilean science has undergone remarkable transformation over the past three decades, evolving from modest beginnings to producing research that commands international respect. R&D investment has climbed to around 0.4% of GDP—lower than developed nations but growing—with research concentrated in Santiago's universities and northern desert observatories that host some of Earth's most powerful telescopes.

Astronomy is Chile's signature contribution to global science. The Atacama Desert's extraordinary atmospheric clarity and minimal light pollution make it Earth's premier ground-based observing location. The European Southern Observatory operates multiple facilities here, including the Very Large Telescope and the under-construction Extremely Large Telescope, which will be the world's largest when complete. ALMA, the Atacama Large Millimeter Array, studies the universe's coldest objects, and Chilean astronomers share observing time, guaranteeing access to world-class facilities. This has built a strong domestic astronomy community punching far above Chile's size.

Earthquake science matters existently in one of the planet's most seismically active nations. Chilean researchers study subduction zone earthquakes, early warning systems, and engineering approaches to building structures that survive magnitude 8+ shaking. The 2010 earthquake that devastated parts of the country spurred investment in resilience research that now informs construction worldwide. Vulcanology research in the Andes contributes to understanding volcanic hazards that threaten populated areas.

Marine biology leverages Chile's absurdly long coastline stretching across 38 degrees of latitude. Research on the Humboldt Current ecosystem, Antarctica's marginal environments (Chilean Antarctic Territory), and deep-sea organisms near hydrothermal vents contributes to oceanography and fisheries management. Aquaculture research addresses Chile's salmon farming industry, the world's second-largest, though balancing production with environmental protection remains contentious.

The Pontifical Catholic University of Chile, University of Chile, and several newer institutions conduct research across disciplines. Nobel Prize-winner Pablo Neruda was a poet, but Chileans have won scientific recognition including the National Prize in Exact Sciences. Brain drain affects Chile less severely than other Latin American nations—improving domestic opportunities have encouraged some researchers to return from abroad, and international collaborations provide access to facilities beyond local resources.

STEM education has strengthened, with university enrollments growing and quality improving, though inequity between wealthy and poor students persists. The government has made science funding more predictable through competitive grant mechanisms, though researchers complain amounts remain insufficient. Chilean science has built on natural advantages—pristine skies and seismic activity—while developing capacity across disciplines, transforming the country into Latin America's emerging research power.`,

  'Costa Rica': `For a country of just five million people wedged between oceans in Central America, Costa Rica has built surprisingly strong research infrastructure, particularly in ecology and conservation biology. The country invests around 0.4% of GDP in R&D, modest by developed world standards but respectable for Latin America, with research concentrated at the University of Costa Rica and several specialized tropical research stations.

Costa Rica's decision to abolish its army in 1948 and redirect military spending to education and health has yielded dividends. The country protected roughly 25% of its land area in national parks and reserves, creating a living laboratory for tropical ecology. The Organization for Tropical Studies operates La Selva Biological Station and other field sites that attract researchers from around the world, making Costa Rica a nexus for rainforest ecology, animal behavior, and conservation science.

Marine research on both Pacific and Caribbean coasts addresses coral reef ecology, sea turtle conservation, and sustainable fisheries. The Golfo Dulce on the Pacific coast, one of only four tropical fjords worldwide, hosts unique marine environments. Research on humpback whales migrating from both hemispheres to these waters contributes to cetacean biology. Costa Rica's commitment to sustainability has made it a case study in ecotourism economics—how protecting nature can generate revenue that exceeds exploitation.

Medical research benefits from a well-functioning healthcare system that serves as both data source and application target. Research on tropical diseases, including dengue fever and Chagas disease, addresses local health challenges while contributing to regional knowledge. The country's relatively high life expectancy and health outcomes for its income level make it a focus for studying efficient healthcare delivery.

Agricultural research on coffee—still an important export—addresses quality improvement and climate adaptation. Work on sustainable farming practices, organic certification, and specialty crops reflects the country's agricultural evolution from quantity to quality. University research spans engineering, computer science, and materials science, though capacity is limited by funding.

Brain drain is modest by Latin American standards—many Costa Rican researchers trained abroad return, drawn by relatively stable democracy, pleasant climate, and growing opportunities. STEM education has expanded, with strong emphasis on bilingual programs given English's importance in science. The country has positioned itself as a technology hub, attracting medical device companies and service centers that provide employment for STEM graduates.

International collaborations with U.S. and European institutions provide access to equipment and funding beyond domestic capacity. Costa Rican science is characterized less by breakthrough discoveries than by steady accumulation of knowledge about tropical ecosystems and development of sustainable models that other nations might emulate—a scientific culture aligned with the country's "pura vida" philosophy of making the most of limited resources while maintaining quality of life.`
}

async function main() {
  console.log('🚀 Starting science & research summary generation for countries 16-31')
  console.log('📊 Countries:', countries.map(c => c.name).join(', '))
  console.log('')

  let successCount = 0
  let errorCount = 0

  for (const country of countries) {
    try {
      const summary = summaries[country.name]

      if (!summary) {
        console.log(`⚠️  No summary found for ${country.name} - skipping`)
        errorCount++
        continue
      }

      console.log(`\n💾 Saving science summary for ${country.name}...`)
      console.log(`   Length: ${summary.length} characters`)

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'science',
          },
        },
        update: {
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'science',
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ Saved science summary for ${country.name}`)
      successCount++

      // Small delay to avoid overwhelming database
      await new Promise((resolve) => setTimeout(resolve, 100))
    } catch (error) {
      console.error(`❌ Error saving science summary for ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Science & research summary generation complete!')
  console.log(`📈 Success: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
