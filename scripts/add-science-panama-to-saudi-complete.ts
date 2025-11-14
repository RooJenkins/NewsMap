import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries Panama to Saudi Arabia for SCIENCE & RESEARCH category
const COUNTRIES = [
  { name: 'Panama', type: 'country', lat: 8.538, lng: -80.7821 },
  { name: 'Papua New Guinea', type: 'country', lat: -6.314993, lng: 143.95555 },
  { name: 'Paraguay', type: 'country', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', type: 'country', lat: -9.19, lng: -75.0152 },
  { name: 'Philippines', type: 'country', lat: 12.8797, lng: 121.774 },
  { name: 'Poland', type: 'country', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', type: 'country', lat: 39.3999, lng: -8.2245 },
  { name: 'Qatar', type: 'country', lat: 25.3548, lng: 51.1839 },
  { name: 'Republic of Congo', type: 'country', lat: -0.228, lng: 15.8277 },
  { name: 'Romania', type: 'country', lat: 45.9432, lng: 24.9668 },
  { name: 'Russia', type: 'country', lat: 61.524, lng: 105.3188 },
  { name: 'Rwanda', type: 'country', lat: -1.9403, lng: 29.8739 },
  { name: 'Saudi Arabia', type: 'country', lat: 23.8859, lng: 45.0792 },
]

const SCIENCE_SUMMARIES: { [key: string]: { summary: string; issues: string[] } } = {
  'Panama': {
    summary: `Panama occupies a unique position in global science-literally. This narrow isthmus connecting two continents and two oceans is a living laboratory for studying biogeography, tropical ecology, and the movement of species between worlds. Yet Panama's scientific capacity remains modest, investing just 0.2% of GDP in research and development, among the lowest in Latin America. The potential vastly exceeds the resources.

The crown jewel is the Smithsonian Tropical Research Institute (STRI), established in 1923 and operating with US government support. STRI maintains research stations across Panama-Barro Colorado Island in Gatun Lake, marine labs on both coasts-attracting international scientists to study rainforest ecology, coral reefs, and species evolution. Groundbreaking research on everything from leaf-cutter ant colonies to bird migration patterns emanates from STRI. Yet this is fundamentally a foreign institution serving global science, only tangentially connected to Panama's domestic research capacity.

The University of Panama and the Technological University of Panama conduct most national research, focusing on tropical agriculture, fisheries science, and civil engineering (the Canal requires constant study). Panamanian scientists study diseases like dengue and malaria, agricultural pests affecting bananas and coffee, and the ecological impacts of deforestation. The Ciudad del Saber (City of Knowledge), built on former US Canal Zone territory, aspires to be a regional innovation hub, but remains more aspiration than reality.

Brain drain is severe. Panama trains capable scientists and engineers who often pursue careers in the United States, Costa Rica, or Chile. Academic salaries are low, research funding scarce, and equipment outdated. The STEM education system is weak-elite private schools produce strong students, but the broader public system emphasizes rote memorization and struggles with teacher quality. Panama's service-oriented economy, dominated by banking, logistics, and tourism, creates little demand for domestic R&D.

Recent governments have recognized science as important for economic diversification beyond the Canal. Panama has niche opportunities in marine biology, tropical medicine, and logistics technology. But translating geographic fortune and biodiversity wealth into genuine scientific capacity requires sustained investment, institutional reform, and reversing brain drain-none of which appear imminent. Panama remains a place where science happens, but not yet a scientific nation.`,
    issues: [
      "Very low R&D investment at 0.2% of GDP",
      "Brain drain - scientists leaving for US, Costa Rica, Chile",
      "Research dominated by foreign institutions like STRI, not domestic",
      "Weak STEM education outside elite private schools",
      "Service economy creating minimal demand for domestic R&D",
    ],
  },
  'Papua New Guinea': {
    summary: `Papua New Guinea is among the world's most biodiverse nations-hosting over 5% of global species on just 1% of Earth's land area-yet its scientific capacity to study this extraordinary natural wealth is nearly nonexistent. R&D investment is well below 0.1% of GDP, research institutions are minimal, and the country's few scientists work in almost complete isolation with obsolete equipment and no funding.

The University of Papua New Guinea and Papua New Guinea University of Technology in Lae represent the country's limited research infrastructure. What little research occurs focuses on tropical agriculture (sweet potato, taro, coffee), mining geology (PNG has substantial mineral wealth), and public health (malaria, tuberculosis, HIV). These efforts operate on shoestring budgets, often dependent on Australian or international donor support. Research on PNG's incredible biodiversity-undiscovered species, unique ecosystems found nowhere else on Earth-is conducted almost entirely by foreign scientists from Australia, the US, and Europe.

The human cost is immense. PNG's terrain-dense jungle, rugged mountains, hundreds of isolated communities speaking over 800 distinct languages-makes education delivery extraordinarily difficult. The STEM education system is catastrophically weak: most schools lack laboratories, electricity, even basic textbooks. Teacher training is inadequate. Tertiary education reaches only a tiny elite. Any Papua New Guinean with scientific potential who can possibly leave does so, typically to Australia.

Political instability, corruption, and violent crime undermine what little research infrastructure exists. Universities suffer chronic underfunding, with faculty going unpaid for months. Equipment is obsolete, libraries contain no recent journals, internet access is unreliable. International researchers studying PNG's fauna and flora typically fly in, conduct fieldwork, and publish without meaningful collaboration with local scientists-because few exist.

PNG represents an extreme case of squandered potential. Its rainforests harbor pharmaceutical compounds, its reefs support unique marine life, its isolated populations offer insights into human adaptation and disease. Yet the country invests nothing in building domestic scientific capacity. Without massive, sustained investment in education, infrastructure, and institutions-and fundamental improvements in governance and security-Papua New Guinea will remain a scientific backwater studied by outsiders, not by its own people.`,
    issues: [
      "Near-zero R&D investment (well below 0.1% GDP)",
      "Collapsed research infrastructure and institutions",
      "Research on PNG biodiversity conducted by foreigners, not locals",
      "STEM education catastrophically weak - most schools lack basics",
      "Complete brain drain to Australia for any scientists trained",
    ],
  },
  'Paraguay': {
    summary: `Paraguay's scientific landscape is sparse and struggling, starved of resources in a country where basic infrastructure and social needs consume limited government budgets. R&D investment hovers around 0.1% of GDP-effectively nothing-making Paraguay one of South America's weakest performers in science and technology. The research community is tiny, isolated, and operating with equipment and methods decades out of date.

The National University of Asunción, founded in 1889, conducts most of what passes for research in Paraguay, focusing on agricultural science (soybeans, cattle, subsistence crops), tropical medicine (Chagas disease, dengue), and river ecology (the Paraguay-Paraná river system). The country has few specialized research institutes, and those that exist-the Institute of Agricultural Biotechnology, the National Service of Plant and Seed Quality and Health-operate primarily for regulation and quality control, not fundamental research.

Brain drain is devastating. Paraguay trains agronomists, engineers, and doctors primarily for export to Argentina, Brazil, Uruguay, or Spain. Those with scientific ambitions who remain typically abandon research for private practice or business, as research careers are simply not viable economically. Academic salaries are among South America's lowest, research grants virtually nonexistent, and equipment so outdated as to preclude modern work. Paraguay's scientists studying their own country are vastly outnumbered by Brazilian and Argentine researchers.

The STEM education system reflects broader educational weaknesses. Bilingualism (Spanish and Guaraní) creates pedagogical challenges, rural schools lack qualified teachers and materials, and the culture emphasizes practical skills over scientific inquiry. Elite private schools in Asunción produce capable students, but they typically leave for universities in Argentina or Brazil and rarely return. Paraguay graduates very few PhDs, and those who do earned them abroad.

Recent economic growth driven by soybean exports and hydroelectric power has not translated into scientific investment. The government views science as a luxury, not a development priority. Paraguay's landlocked isolation, small economy, and weak institutions mean building genuine research capacity would require decades of patient investment-political will that has yet to materialize. The country remains dependent on importing technology and expertise, with no path toward scientific self-sufficiency.`,
    issues: [
      "Minimal R&D investment at ~0.1% of GDP",
      "Devastating brain drain to Argentina, Brazil, Spain",
      "No viable research careers - scientists must leave or change fields",
      "STEM education weak, bilingual challenges compound problems",
      "Government viewing science as luxury, not development priority",
    ],
  },
  'Peru': {
    summary: `Peru's scientific story is one of unrealized potential amid chronic underfunding. This country harbors extraordinary biodiversity-portions of the Amazon rainforest, the Andes mountains, coastal ecosystems along the Pacific-and hosts ancient civilizations that offer rich archaeological research opportunities. Yet Peru invests merely 0.1% of GDP in R&D, among Latin America's lowest rates. The disconnect between natural and cultural wealth and scientific investment is stark.

The major research universities-National University of San Marcos in Lima, Cayetano Heredia University, the Pontifical Catholic University-conduct research in tropical medicine, biodiversity, seismology, and archaeology. Peruvian scientists have documented new Amazonian species, studied the impacts of glacier retreat in the Andes, researched quinoa and potato genetics (Peru is the potato's ancestral home), and excavated pre-Columbian sites. The National Institute of Health conducts disease surveillance for tuberculosis, dengue, and diseases of poverty that afflict remote Amazonian and highland communities.

Yet research operates under severe constraints. Funding is scarce and unstable, fluctuating with political winds and commodity prices (copper, gold, fishmeal). Equipment is outdated, salaries uncompetitive, and bureaucratic obstacles to importing scientific materials are formidable. Peru's scientific community is small-perhaps a few thousand active researchers-and operates in relative isolation from international networks. Many researchers must maintain side careers to survive economically.

Brain drain is persistent and accelerating. Talented Peruvian scientists trained abroad often remain in Chile, the US, or Europe. Those who return face frustration with lack of resources and institutional dysfunction. The STEM education system is deeply unequal-elite universities in Lima produce strong graduates, but public universities in the provinces struggle with quality, and the school system is weak by international standards. Indigenous and rural populations are largely excluded from scientific careers.

Recent governments have launched initiatives like CONCYTEC (National Council of Science and Technology) to coordinate research and allocate competitive grants, but funding remains woefully inadequate. Peru's scientific challenges are inseparable from broader development problems: inequality, weak institutions, political instability. The country has the raw materials for scientific excellence-extraordinary ecosystems, cultural heritage, human talent-but lacks the investment and governance to realize this potential.`,
    issues: [
      "Extremely low R&D investment at 0.1% of GDP",
      "Persistent brain drain - trained scientists remaining abroad",
      "Research funding unstable, fluctuating with political and economic cycles",
      "Deep educational inequality excluding rural and indigenous populations",
      "Small, isolated scientific community with weak international links",
    ],
  },
  'Philippines': {
    summary: `The Philippines presents a paradox: a nation of over 110 million people, relatively high literacy, and strong performance in mathematics and science education-yet hobbled by chronic underinvestment in research and catastrophic brain drain. The country invests approximately 0.2% of GDP in R&D, well below Southeast Asian peers like Thailand (1.0%) and Malaysia (1.4%). The result is a scientific community perpetually struggling against resource scarcity and talent exodus.

The University of the Philippines system, particularly the Diliman campus in Quezon City, anchors Philippine science. The Philippine General Hospital, the International Rice Research Institute (IRRI, though technically international), and the Philippine Institute of Volcanology and Seismology (PHIVOLCS) represent pockets of research excellence. Filipino scientists conduct important work in typhoon prediction, seismic monitoring (the Philippines sits on the Pacific Ring of Fire), tropical disease research, and rice genetics. PHIVOLCS saves lives through volcano and earthquake early warning systems.

Yet the brain drain is among the world's most severe. The Philippines trains excellent scientists, engineers, doctors, and nurses-and exports them by the millions. Filipino nurses work in hospitals from Los Angeles to London, engineers in Silicon Valley and Singapore, scientists in laboratories worldwide. Remittances from overseas Filipino workers support the economy but represent a tragic hemorrhage of human capital. Those who remain in research endure low salaries, inadequate funding, and outdated equipment.

The STEM education system shows strength and weakness. Filipino students perform reasonably well in international assessments, the culture values education, and English proficiency (a colonial legacy) facilitates international collaboration. Yet public school quality is uneven, university research funding is scarce, and private companies invest minimally in R&D-the economy is dominated by services (call centers, business process outsourcing) and remittances, not technology or manufacturing requiring research capacity.

Recent administrations have attempted science policy reforms-creating the Department of Science and Technology, establishing competitive research grants, offering scholarships for graduate study-but these remain modest against the scale of need. The Philippines has the population, educational foundation, and diaspora connections to build significant scientific capacity. But without dramatically increasing R&D investment and creating conditions for scientists to stay or return, the country will continue training scientific talent for others to employ.`,
    issues: [
      "Very low R&D investment at 0.2% of GDP",
      "Catastrophic brain drain - training scientists for export worldwide",
      "Service economy (BPO, remittances) creating little R&D demand",
      "Low academic salaries and poor research funding retention problems",
      "Potential unrealized despite strong education and large population",
    ],
  },
  'Poland': {
    summary: `Poland's scientific heritage is formidable: Marie Curie (née Skłodowska), who won Nobel Prizes in both Physics and Chemistry, remains the country's most famous scientist. Poland has produced Nobel laureates in literature and peace, mathematicians who broke the Enigma code, and scholars who enriched fields from logic to astrophysics. Yet today's Polish science navigates the complex legacy of communism and the challenges of building a modern innovation economy.

Poland invests approximately 1.4% of GDP in research and development-higher than most Eastern European peers but below the EU average of 2.1%. The Polish Academy of Sciences coordinates research across dozens of institutes, while Jagiellonian University in Kraków (founded 1364) and the University of Warsaw lead academic research. Polish scientists contribute to CERN's Large Hadron Collider, the European Space Agency, and international collaborations in fields from quantum computing to genomics. The country maintains strengths in mathematics, physics, chemistry, and engineering.

Yet Polish science faces a generational crisis. Many senior researchers trained in the communist era, and institutional cultures resist reform. Academic salaries remain low by Western European standards, fueling persistent brain drain. Talented Polish scientists pursue PhDs and careers in the UK, Germany, the US-and increasingly choose not to return. EU membership opened opportunities but also accelerated talent exodus. Recent nationalist government policies (2015-2023) created tensions over academic freedom, judicial independence, and EU relations, though the 2023 election brought more pro-European leadership.

The STEM education system is solid, producing graduates with strong mathematical and technical fundamentals. Poland's growing IT sector and manufacturing base (automotive, machinery) create some demand for R&D. The country has attempted reforms-competitive grant programs, infrastructure investments, incentives for university-industry collaboration-but progress is incremental. Bureaucratic obstacles remain formidable, and publishing in high-impact international journals is less common than in Western Europe.

Poland's scientific future hinges on several factors: sustained R&D investment increases, successful brain drain reversal, academic reforms that reward merit and innovation, and political stability. The country has historical legacy, EU integration, and a large educated population-ingredients for scientific success. Whether it can build on these advantages or settle into a comfortable middle tier remains to be seen.`,
    issues: [
      "R&D investment at 1.4% GDP, below EU average of 2.1%",
      "Persistent brain drain to Western Europe and North America",
      "Institutional cultures resistant to reform, aging research community",
      "Academic salaries uncompetitive with Western European peers",
      "Recent political tensions over academic freedom and EU relations",
    ],
  },
  'Portugal': {
    summary: `Portugal's scientific transformation over the past three decades is remarkable. Once among Western Europe's poorest and least educated nations under decades of dictatorship (until 1974), Portugal has invested systematically in science and higher education. R&D spending has grown to approximately 1.6% of GDP-still below the EU average but respectable. The country now hosts world-class research in marine science, renewable energy, neuroscience, and space technology.

The University of Lisbon, University of Porto, and University of Coimbra (founded 1290, one of Europe's oldest) anchor Portuguese research. Specialized institutes like the Champalimaud Foundation for neuroscience, the International Iberian Nanotechnology Laboratory, and institutes studying Portugal's unique Atlantic marine ecosystems produce internationally recognized research. Portuguese scientists contributed to the European Southern Observatory's telescopes in Chile, participate in CERN and European Space Agency programs, and lead research on cork oak forests, port wine fermentation science, and sustainable fisheries.

Portugal has made deliberate choices to reverse historical brain drain. The Fundação para a Ciência e a Tecnologia (FCT) provides competitive research grants, funds PhD scholarships, and supports researcher recruitment. The country has successfully attracted some Portuguese scientists back from abroad and recruited international researchers with modern facilities, reasonable salaries (if not matching Northern Europe), and quality of life. EU membership and funding have been transformative, providing resources and integration into European research networks.

Yet challenges persist. R&D investment still lags Western European leaders, private sector research spending is low, and the economy remains less technology-intensive than Portugal's scientific capacity would suggest. The 2008 financial crisis and subsequent austerity severely impacted research funding, causing setbacks from which recovery has been gradual. Brain drain continues-Portuguese researchers still often pursue careers in the UK, Switzerland, the US-though the flow is less one-directional than before.

The STEM education system has improved substantially. Portuguese students now perform near OECD averages in international assessments, a dramatic rise from decades past. Literacy is nearly universal, university enrollment has expanded, and English proficiency facilitates international collaboration. Portugal's scientific story demonstrates how sustained investment, strategic policy, and EU integration can transform research capacity within a generation-though completing the journey to full parity with scientific leaders remains work in progress.`,
    issues: [
      "R&D investment at 1.6% GDP, still below EU average",
      "Private sector low R&D spending despite growing scientific capacity",
      "Continuing brain drain though less severe than past",
      "Economic crisis and austerity set back research funding",
      "Completing transformation to full scientific competitiveness requires sustained effort",
    ],
  },
  'Qatar': {
    summary: `Qatar's scientific ambitions are audacious and oil-fueled. This tiny Gulf nation of under three million (mostly expatriates) has leveraged extraordinary natural gas wealth to build research infrastructure and recruit international scientific talent. Qatar invests approximately 0.5% of GDP in R&D-modest by global standards but growing, and backed by absolute spending power few countries can match. The question is whether money alone can create genuine scientific culture and capacity.

The centerpiece is Education City, a Doha campus hosting branches of American universities-Cornell's medical school, Carnegie Mellon's computer science programs, Northwestern's journalism school, Texas A&M's engineering programs. These are actual degree-granting branches, not merely partnerships, an unprecedented experiment in educational transplantation. Qatar Foundation funds research in energy, water desalination, personalized medicine, and technologies relevant to Gulf conditions. The Qatar Computing Research Institute works on Arabic language processing and AI. Weill Cornell Medicine-Qatar conducts genetics research on diseases prevalent in the region.

Yet Qatar's science is fundamentally imported, not indigenous. The researchers are mostly expatriates on contracts, universities are foreign franchises, and the model depends on sustained hydrocarbon revenues. Qatari nationals remain a small minority in science and engineering-the country's citizens are wealthy enough that many pursue careers in government, business, or avoid technical fields entirely. The STEM education system for Qataris is improving but starting from a low base. Gender segregation and conservative social norms, though relaxing gradually, limit women's participation.

Qatar has hosted major scientific conferences, built world-class research facilities, and attempted to position itself as a knowledge economy hub for the region. The 2022 FIFA World Cup showcased Qatari investment in technology and infrastructure. But scientific excellence requires more than funding-it needs intellectual freedom, merit-based systems, integration into global research networks, and homegrown talent. Qatar's authoritarian governance and restrictions on speech create tensions with academic culture.

The country faces an existential question: What happens when oil and gas revenues eventually decline? Can Qatar transition to a genuine knowledge economy, or will these scientific institutions prove ephemeral, maintained only while hydrocarbons flow? The experiment is ongoing. For now, Qatar demonstrates that money can build impressive infrastructure and recruit talent, but creating enduring scientific culture may require generations and social transformations that wealth alone cannot purchase.`,
    issues: [
      "Science fundamentally imported via expatriate researchers and foreign institutions",
      "Few Qatari nationals pursuing scientific careers",
      "Dependence on hydrocarbon revenues to sustain research spending",
      "Authoritarian governance and speech restrictions tension with academic culture",
      "Question whether genuine scientific culture can be purchased versus organically developed",
    ],
  },
  'Republic of Congo': {
    summary: `The Republic of Congo's scientific capacity is minimal, though significantly better than its neighbor the Democratic Republic of Congo. This oil-rich but poorly governed nation of five million invests essentially nothing in research and development-R&D spending is well below 0.1% of GDP. Whatever research occurs is conducted by international organizations or foreign researchers, not domestic scientists.

The Marien Ngouabi University in Brazzaville represents Congo's primary research institution, but calling it a "research" institution is generous. It focuses almost entirely on teaching, with minimal research activity. What little research exists concentrates on tropical medicine (malaria, tuberculosis, HIV), rainforest ecology (Congo Basin biodiversity), and oil industry geology. These efforts are tiny, underfunded, and typically dependent on partnerships with French, European, or international institutions.

Brain drain is total for those who even get scientific training. Any Congolese with scientific potential who can leave for France (the former colonial power), South Africa, or elsewhere does so. Those who remain abandon research for medicine, engineering consulting, or oil industry jobs that offer actual livelihoods. The concept of a domestic research career is essentially nonexistent. Academic salaries are often unpaid for months, equipment is obsolete or absent, and libraries hold no current journals.

The STEM education system is catastrophically weak. Most schools lack laboratories, qualified science teachers, and basic materials. Rural areas have minimal schooling infrastructure at all. The oil revenues that dominate Congo's economy have enriched political elites but not built education or research infrastructure. Political instability, including periods of civil war, has repeatedly disrupted what little institutional capacity existed.

Congo's scientific potential relates entirely to its natural resources: portions of the Congo Basin rainforest, biodiversity, and geological resources. But research on these topics is conducted by French scientists, international conservation organizations, and oil company geologists-not Congolese scientists, because effectively none exist with the training and resources to do such work. Building scientific capacity would require fundamental state-building: ending corruption, investing massively in education, creating institutions-transformations that show no signs of occurring.`,
    issues: [
      "Near-zero R&D investment (well below 0.1% GDP)",
      "Minimal research institutions or infrastructure",
      "Total brain drain - no viable scientific careers domestically",
      "STEM education catastrophically weak throughout system",
      "Oil revenues enriching elites but not building science capacity",
    ],
  },
  'Romania': {
    summary: `Romania's scientific heritage includes mathematicians, physicists, and engineers who contributed to aviation, mathematics, and cybernetics. Yet decades of communist rule and post-1989 economic chaos damaged research institutions, drove talent abroad, and left Romanian science struggling to rebuild. The country invests approximately 0.5% of GDP in R&D-the EU's lowest rate, and far below the bloc's 2.1% average.

The Romanian Academy coordinates research institutes across fields from chemistry to history, while universities like the University of Bucharest, Babes-Bolyai University in Cluj, and the Polytechnic University of Bucharest conduct academic research. Romanian scientists work in mathematics, computer science, physics, and materials science-traditional strengths inherited from earlier eras. The country has produced notable mathematicians and computer scientists, and Romanian programmers are sought after internationally.

Brain drain is Romania's scientific catastrophe. EU accession in 2007 removed barriers to movement, and the result has been a hemorrhage of talent. Young Romanians pursue higher education and careers in Germany, France, the UK, leaving Romanian universities aging and depleted. Academic salaries are among Europe's lowest, research funding scarce, and equipment outdated. The few who return from PhDs abroad often leave again, frustrated by bureaucracy, corruption, and lack of resources.

Romania's IT sector is growing-Cluj has become a tech hub, international companies operate development centers in Bucharest and other cities-but this creates private sector jobs, not research capacity. Companies want programmers, not researchers. The STEM education system is uneven: elite high schools produce strong students who promptly leave for Western universities, while the broader system struggles with quality and outdated curricula.

Recent governments have acknowledged the R&D crisis and promised increases toward 1% of GDP, but progress is glacial. EU funds provide some research support, but accessing them requires navigating bureaucracy. Whether Romania can reverse brain drain, modernize institutions, and increase research investment remains uncertain. The country has human capital and EU integration, but chronic underfunding and governance problems prevent realizing scientific potential.`,
    issues: [
      "Lowest R&D investment in EU at 0.5% of GDP",
      "Catastrophic brain drain post-EU accession",
      "Academic salaries among Europe's lowest",
      "Research institutions aging and resource-depleted",
      "IT sector growth creating jobs but not research capacity",
    ],
  },
  'Russia': {
    summary: `Russian science inherits a contradictory legacy: extraordinary achievements under Soviet state planning-first satellite, first human in space, advances in mathematics, physics, chemistry-alongside inefficiency, militarization, and isolation from international collaboration. Post-Soviet Russia has seen scientific capacity collapse, partially recover, then face renewed isolation following the 2022 invasion of Ukraine. R&D investment fluctuates with oil prices and political priorities, currently around 1.0% of GDP, down from Soviet-era levels.

The Russian Academy of Sciences, despite political interference and forced reforms, remains a massive institution coordinating hundreds of institutes. Moscow State University, St. Petersburg State University, and specialized institutes conduct research in fields from theoretical mathematics to Arctic science. Russian scientists maintain strengths in mathematics, physics, space science, and chemistry. The country still launches space missions, operates nuclear facilities, and produces internationally competitive mathematicians and physicists.

Yet Russian science is in crisis. Brain drain has been severe since the 1990s-the "Russian diaspora" includes thousands of scientists working in US, European, and Israeli universities. Putin-era efforts to reverse this through higher salaries at flagship institutions and recruitment programs have had limited success. Corruption diverts research funding, political loyalty matters more than merit in many appointments, and academic freedom has contracted sharply, particularly regarding political and social topics.

The 2022 Ukraine invasion and resulting sanctions have isolated Russian science internationally. Collaborations with European and American institutions have largely ceased, access to equipment and materials is disrupted, and Russian researchers are excluded from many international conferences and projects. The brain drain has accelerated as scientists flee both the regime and economic collapse. Russia's STEM education system remains strong in mathematics but is increasingly disconnected from international standards.

Russia retains pockets of excellence-certain mathematics institutes, space technology, nuclear physics-but overall trajectory is decline. The country cannot sustain scientific leadership through state coercion and isolation. Whether post-Putin Russia might reintegrate into international science is uncertain; for now, a once-proud scientific tradition is being squandered through authoritarianism and war.`,
    issues: [
      "Severe brain drain accelerated by Ukraine war and political repression",
      "International isolation due to sanctions and war",
      "Corruption and political interference in research institutions",
      "Academic freedom contracted, especially social sciences",
      "R&D funding at ~1.0% GDP, declining trajectory",
    ],
  },
  'Rwanda': {
    summary: `Rwanda's scientific emergence from genocide is a story of deliberate nation-building under authoritarian conditions. Thirty years after the 1994 genocide killed perhaps a million people and destroyed institutions, Rwanda has invested in education, ICT infrastructure, and healthcare with intensity unusual in sub-Saharan Africa. Yet R&D spending remains very low-estimated at 0.3% of GDP-and the scientific community is tiny, nascent, and heavily dependent on international partners.

The University of Rwanda, formed in 2013 by merging several institutions, represents the country's primary research capacity. Research focuses on practical development needs: agricultural productivity (coffee, tea, subsistence crops), malaria and other disease control, ICT applications, and environmental management. The Rwanda Biomedical Center conducts public health research and played important roles in COVID-19 response. International partnerships are crucial-UK, US, and Belgian universities collaborate on everything from gorilla conservation to health systems research.

Rwanda has made distinctive choices that impact science. The government switched higher education from French to English, betting on global integration over francophone tradition. ICT is emphasized-Rwanda aspires to be an African tech hub, with fiber optic cables, tech incubators, and coding schools. The country's small size (13 million people in a compact territory), relative stability, and low corruption by African standards create conditions for efficient resource use. Women's representation in STEM is encouraged more actively than in most African nations.

Yet limitations are severe. Rwanda is poor, landlocked, densely populated, and resource-constrained. Brain drain is significant-Rwandans with advanced degrees often pursue careers in Kenya, South Africa, or the West. The authoritarian Kagame government, while effective at some development priorities, restricts academic freedom and political speech, creating tensions with scientific culture. STEM education has expanded access but quality remains uneven, particularly in rural areas.

Rwanda's scientific trajectory is closely tied to its unusual development model: authoritarian but competent governance, emphasis on technology and efficiency, ambitions that exceed current capacity. Whether this model can build genuine research capacity or merely create the appearance while real science requires freedoms the regime won't grant remains an open question. For now, Rwanda represents Africa's most interesting experiment in top-down scientific development.`,
    issues: [
      "Very low R&D investment at ~0.3% of GDP",
      "Tiny scientific community heavily dependent on foreign partnerships",
      "Brain drain to Kenya, South Africa, Western countries",
      "Authoritarian governance restricting academic freedom",
      "Quality vs. access tension in rapid STEM education expansion",
    ],
  },
  'Saudi Arabia': {
    summary: `Saudi Arabia's scientific ambitions are vast, oil-funded, and utterly divorced from the country's deeply conservative society-until very recently. The Kingdom invests approximately 0.8% of GDP in R&D, modest by global standards but representing massive absolute spending power. The goal is clear: build a knowledge economy for the post-oil future. The obstacles are formidable: authoritarian governance, religious conservatism, minimal scientific tradition, and dependence on importing talent and institutions.

The centerpiece is King Abdullah University of Science and Technology (KAUST), established in 2009 with a $20 billion endowment-among the world's richest universities. KAUST recruits international faculty with lavish salaries, builds world-class facilities, and conducts research in energy, water, materials science, and biotechnology. It is a bubble of relative intellectual freedom in an otherwise restricted society: men and women study together, religious police are barred, and Western academic norms prevail. Yet KAUST faculty are overwhelmingly foreign, not Saudi.

Other institutions include King Saud University and the petroleum-focused King Fahd University. Saudi Arabia funds large-scale projects: genome sequencing, solar energy research, coral reef studies in the Red Sea. The country has attempted to recruit Saudi students by funding thousands to pursue PhDs abroad with the expectation they'll return-but many don't, or return only to leave again. Saudi nationals remain a minority in Saudi science; the researchers are Pakistani, Egyptian, Western, Chinese-anyone but Saudis.

The fundamental problem is cultural and political. Saudi Arabia's education system, dominated by religious instruction and rote learning, produces few graduates with scientific training or curiosity. Women, half the population, were until very recently excluded from most educational and professional opportunities (reforms under Crown Prince Mohammed bin Salman have begun changing this, but implementation is uneven). Academic freedom is nonexistent-topics from evolution to political science are constrained, and researchers must navigate what can and cannot be studied.

Vision 2030, the Kingdom's diversification plan, bets heavily on technology, innovation, and knowledge economy. But genuine scientific culture cannot be purchased or imposed by decree. It requires intellectual freedom, merit-based systems, homegrown talent, and generations to develop. Saudi Arabia is attempting to compress this timeline through money and imported expertise-an experiment without clear precedent. Whether the Kingdom can build real scientific capacity or merely expensive facades remains uncertain.`,
    issues: [
      "Science imported via foreign researchers, few Saudi nationals in research",
      "Education system dominated by religious instruction and rote learning",
      "No academic freedom - topics constrained by religious and political authorities",
      "Women historically excluded, recent reforms but implementation uneven",
      "Question whether scientific culture can be purchased versus organically developed",
    ],
  },
}

async function main() {
  console.log('🚀 Starting SCIENCE & RESEARCH summary generation: Panama to Saudi Arabia\n')
  console.log('Countries to process:', COUNTRIES.map(c => c.name).join(', '))
  console.log('\n' + '='.repeat(80) + '\n')

  let successCount = 0
  let errorCount = 0
  const completedCountries: string[] = []

  for (const location of COUNTRIES) {
    console.log('\n' + '='.repeat(80))
    console.log(`Processing: ${location.name}`)
    console.log('='.repeat(80))

    try {
      const scienceData = SCIENCE_SUMMARIES[location.name]

      if (!scienceData) {
        console.log(`⚠️  No science summary data for ${location.name} - skipping`)
        errorCount++
        continue
      }

      const { summary, issues } = scienceData

      // Fetch recent stories for this country to include as top stories
      const stories = await prisma.story.findMany({
        where: {
          country: location.name,
        },
        orderBy: [{ pubDate: 'desc' }, { importance: 'desc' }],
        take: 10,
      })

      const topStories = stories.slice(0, 7).map((story) => ({
        title: story.title,
        source: story.source,
        link: story.link,
        pubDate: story.pubDate.toISOString(),
      }))

      console.log(`📝 Summary: ${summary.length} characters`)
      console.log(`📋 Issues: ${issues.length}`)
      console.log(`📰 Top stories: ${topStories.length}`)

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'science',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
          updatedAt: new Date(),
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.name,
          lat: location.lat,
          lng: location.lng,
          category: 'science',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`✅ Successfully saved science summary for ${location.name}`)
      successCount++
      completedCountries.push(location.name)

      // Small delay to avoid overwhelming the database
      await new Promise((resolve) => setTimeout(resolve, 100))
    } catch (error) {
      console.error(`❌ Error saving science summary for ${location.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ SCIENCE & RESEARCH summary generation complete!')
  console.log('='.repeat(80))
  console.log('\n📊 Results:')
  console.log(`   ✅ Successfully generated: ${successCount}`)
  console.log(`   ❌ Errors: ${errorCount}`)
  console.log(`   📝 Total countries: ${COUNTRIES.length}`)
  console.log('\n📍 Completed countries:')
  completedCountries.forEach(country => console.log(`   ✓ ${country}`))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
