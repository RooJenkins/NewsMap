import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries Taiwan to Zimbabwe for SCIENCE & RESEARCH category
const COUNTRIES = [
  { name: 'Taiwan', type: 'country', lat: 23.6978, lng: 120.9605 },
  { name: 'Tanzania', type: 'country', lat: -6.369, lng: 34.8888 },
  { name: 'Thailand', type: 'country', lat: 15.87, lng: 100.9925 },
  { name: 'Trinidad and Tobago', type: 'country', lat: 10.6918, lng: -61.2225 },
  { name: 'Tunisia', type: 'country', lat: 33.8869, lng: 9.5375 },
  { name: 'Turkey', type: 'country', lat: 38.9637, lng: 35.2433 },
  { name: 'Turkmenistan', type: 'country', lat: 38.9697, lng: 59.5563 },
  { name: 'Uganda', type: 'country', lat: 1.3733, lng: 32.2903 },
  { name: 'Ukraine', type: 'country', lat: 48.3794, lng: 31.1656 },
  { name: 'United Arab Emirates', type: 'country', lat: 23.4241, lng: 53.8478 },
  { name: 'United Kingdom', type: 'country', lat: 55.3781, lng: -3.436 },
  { name: 'United States', type: 'country', lat: 37.0902, lng: -95.7129 },
  { name: 'Uruguay', type: 'country', lat: -32.5228, lng: -55.7658 },
  { name: 'Uzbekistan', type: 'country', lat: 41.3775, lng: 64.5853 },
  { name: 'Venezuela', type: 'country', lat: 6.4238, lng: -66.5897 },
  { name: 'Vietnam', type: 'country', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', type: 'country', lat: 15.5527, lng: 48.5164 },
  { name: 'Zambia', type: 'country', lat: -13.1339, lng: 27.8493 },
  { name: 'Zimbabwe', type: 'country', lat: -19.0154, lng: 29.1549 },
]

// Science & Research summaries for each country (Ed Yong / Carl Zimmer style)
// 2,500-3,500 characters, focusing on research institutions, R&D spending, breakthroughs, STEM education
const SCIENCE_SUMMARIES: { [key: string]: { summary: string; issues: string[] } } = {
  Taiwan: {
    summary: `Taiwan's scientific prowess is inseparable from its semiconductor dominance. This island of 23 million invests an extraordinary 3.5% of GDP in research and development—among the world's highest rates—and the returns are staggering. TSMC, the world's premier chip manufacturer, didn't emerge by accident. It arose from decades of strategic government investment in engineering education, applied research, and public-private partnerships. Taiwan now produces over 90% of the world's most advanced semiconductors, making it indispensable to the global technology supply chain.

But Taiwan's scientific ambitions extend far beyond chips. Academia Sinica, the island's premier research institution, employs over 1,300 scientists across institutes studying everything from molecular biology to astrophysics. Taiwan's National Health Research Institutes conducted cutting-edge COVID-19 research, developing rapid tests and vaccine candidates. Taiwanese researchers contribute significantly to fields like materials science, earthquake engineering (crucial in this seismically active region), and tropical medicine. The country has produced one Nobel laureate: Yuan T. Lee won the 1986 Chemistry Prize for his work on reaction dynamics, though he conducted his research in the United States—a pattern Taiwan has worked hard to reverse.

The STEM education system is formidable. Taiwanese students consistently rank among the world's best in mathematics and science assessments, and the island produces thousands of engineering PhDs annually. National Taiwan University, National Tsing Hua University, and National Chiao Tung University compete globally for talent. Taiwan has largely succeeded in reversing brain drain through competitive salaries, modern facilities, and government programs luring overseas Taiwanese scientists home. The country's research culture emphasizes applied innovation and commercial translation—science that matters economically, not just academically.

Yet Taiwan's scientific future is clouded by geopolitical peril. China's threats of annexation create existential uncertainty that complicates long-term planning and international collaboration. Many countries avoid formal scientific agreements with Taiwan to appease Beijing. The island's aging population and low birth rate threaten the pipeline of young researchers. Taiwan must import talent from Southeast Asia and beyond, but immigration policies remain restrictive. As tensions with China intensify, Taiwan's scientific community finds itself simultaneously essential to global technology and increasingly isolated diplomatically—a paradox that may define the coming decades.`,
    issues: [
      'Geopolitical isolation limiting formal international research agreements',
      'Aging population and low birth rate threatening researcher pipeline',
      'Overconcentration in semiconductor sector creating dependency',
      'China tensions creating uncertainty for long-term research planning',
      'Restrictive immigration policies limiting talent import despite need',
    ],
  },
  Tanzania: {
    summary: `Tanzania's scientific landscape reflects the broader challenges facing sub-Saharan Africa's research ambitions. This East African nation of 60 million invests approximately 0.4% of GDP in R&D—modest but higher than many African peers. Tanzania possesses extraordinary research potential: it harbors portions of the Serengeti, Lake Tanganyika, Mount Kilimanjaro, and rich biodiversity that attracts ecologists and evolutionary biologists worldwide. Yet this natural laboratory is studied primarily by foreign scientists, not Tanzanian ones.

The University of Dar es Salaam and Sokoine University of Agriculture anchor what research capacity exists, focusing on agriculture, tropical medicine, and wildlife conservation. Tanzanian researchers study cassava diseases affecting subsistence farmers, investigate malaria drug resistance, and monitor elephant populations and poaching patterns. The National Institute for Medical Research conducts crucial public health surveillance, particularly for HIV/AIDS, tuberculosis, and neglected tropical diseases. These efforts matter locally and regionally, but operate on minimal budgets with outdated equipment.

Brain drain is relentless and devastating. Tanzania invests in training doctors, biologists, and engineers who then leave for Kenya, South Africa, Europe, or North America. Salaries for researchers are poverty-level—a university lecturer might earn $300 monthly, forcing most to moonlight in private practice or consulting just to survive. Research is essentially unfunded; scientists scramble for grants from international donors or foreign universities, often becoming junior partners on projects studying their own country. The STEM education system has expanded access but quality is dire outside elite schools—laboratories lack equipment, libraries hold no recent journals, internet connectivity is unreliable.

Recent governments have recognized science as essential for development beyond extracting minerals and exporting crops, but recognition hasn't translated into funding. Tanzania's National Research and Development Policy sets ambitious targets that go largely unrealized. International institutions like the Jane Goodall Institute and various public health organizations conduct important work in Tanzania, but in parallel to—not integrated with—domestic scientific capacity. Building genuine Tanzanian research capability would require sustained investment over decades, competitive salaries to retain talent, and infrastructure that currently seems like fantasy.`,
    issues: [
      'Severe brain drain—trained scientists leaving for better opportunities',
      'Low R&D investment at 0.4% GDP insufficient for capacity building',
      'Research on Tanzania biodiversity dominated by foreign scientists',
      'Poverty-level researcher salaries forcing moonlighting to survive',
      'STEM education expansion but quality dire outside elite institutions',
    ],
  },
  Thailand: {
    summary: `Thailand's scientific emergence over the past three decades tells a story of strategic investment paying dividends. The country now invests approximately 1.1% of GDP in R&D—not spectacular by developed country standards, but representative of middle-income country ambitions. Thailand has positioned itself as Southeast Asia's research hub outside Singapore, with particular strengths in agriculture, biotechnology, materials science, and tropical medicine.

Chulalongkorn University, Mahidol University, and the King Mongkut Universities form the backbone of Thai research. The Thailand Science Park outside Bangkok houses research institutes and corporate labs working on everything from rice genomics to advanced manufacturing. Thai researchers have achieved notable breakthroughs in dengue fever treatment, developed new rice varieties that feed millions, and contributed to materials science advances in polymers and nanomaterials. The National Science and Technology Development Agency coordinates research priorities aligned with economic development goals—agricultural productivity, medical devices, automotive technology, smart electronics.

Thailand's STEM education system produces solid graduates, though quality is uneven between Bangkok's elite universities and provincial institutions. The government has invested heavily in science education, building research labs, funding scholarships for Thai students to study abroad (with return requirements), and recruiting foreign researchers to build capacity. Thailand has largely avoided the severe brain drain afflicting many developing countries by offering reasonable salaries, decent infrastructure, and quality of life that retains most researchers.

Yet challenges persist. Thai science remains largely derivative rather than groundbreaking—incremental improvements rather than paradigm shifts. Academic culture can be hierarchical and conservative, with senior professors controlling resources and younger researchers having limited autonomy. Political instability and periodic military coups create uncertainty that affects long-term planning. Thailand's middle-income status creates a trap: too developed to qualify for much development aid, not wealthy enough to compete with Japan, Korea, or Singapore for top talent. Whether Thailand can break through to genuine innovation leadership, or settle into comfortable mediocrity, remains uncertain.`,
    issues: [
      'R&D investment at 1.1% GDP needs increase to escape middle-income trap',
      'Research often derivative rather than groundbreaking—incremental not paradigm-shifting',
      'Political instability and coups creating uncertainty for long-term planning',
      'Hierarchical academic culture limiting younger researcher autonomy',
      'Quality gap between elite Bangkok universities and provincial institutions',
    ],
  },
  'Trinidad and Tobago': {
    summary: `Trinidad and Tobago's scientific story is one of squandered potential. This twin-island nation of 1.5 million sits atop substantial oil and gas reserves that generated wealth for decades, yet invests a mere 0.1% of GDP in research and development. The country possesses the economic means and educational foundation to build genuine research capacity—instead, it has allowed scientific infrastructure to languish while exporting its best minds.

The University of the West Indies (UWI) campus in Trinidad represents the country's primary research institution, conducting modest work in petroleum engineering, tropical agriculture, and Caribbean ecology. Given Trinidad's oil and gas dominance, one might expect world-class energy research—instead, most R&D is conducted by foreign multinationals for proprietary purposes, not shared with local institutions. Some research on natural gas processing, petrochemicals, and offshore drilling occurs, but Trinidad remains primarily an extraction economy that imports technology rather than generating it.

Brain drain is Trinidad's scientific curse. The country produces well-educated graduates, particularly in medicine and engineering, who promptly leave for the United States, Canada, or the United Kingdom. Trinidadian doctors staff hospitals in Brooklyn and Toronto, engineers work for Shell and ExxonMobil abroad, and scientists join universities in North America or Europe. Those who remain find limited research funding, outdated facilities, and salaries that cannot compete with opportunities abroad. The STEM education system is reasonably strong at elite secondary schools and UWI, but public school quality is uneven.

Recent governments have discussed diversifying the economy beyond oil and gas, including investment in technology and innovation, but implementation has been minimal. Economic volatility tied to energy prices, political patronage systems, and short-term thinking prevent sustained scientific investment. Trinidad has the wealth to build Caribbean research leadership in tropical medicine, marine biology, renewable energy, and sustainable development—instead, it remains a scientific backwater despite relative prosperity. The tragedy is that this is a choice, not an inevitability.`,
    issues: [
      'Minuscule R&D investment at 0.1% GDP despite oil wealth',
      'Severe brain drain—medical and engineering graduates leaving abroad',
      'Oil/gas R&D conducted by foreign multinationals not local capacity',
      'Economic volatility and short-term thinking preventing sustained investment',
      'Scientific backwater status despite wealth and education foundation',
    ],
  },
  Tunisia: {
    summary: `Tunisia's scientific traditions run deep in the Arab world. This North African nation of 12 million has historically punched above its weight in education and research, inheriting French academic structures and investing in human capital when regional peers did not. Tunisia spends approximately 0.7% of GDP on R&D—modest but higher than most Arab countries. The country has produced engineers, doctors, and scientists who contribute significantly to research in Europe and North America, even if Tunisia itself struggles to provide opportunities at home.

The University of Tunis El Manar, the University of Carthage, and several engineering schools produce capable graduates. Tunisian researchers work in fields from Mediterranean ecology to renewable energy (abundant solar potential), from archaeological science studying ancient Carthage to medical research on diseases prevalent in North Africa. The country has developed a modest biotechnology sector and pharmaceutical manufacturing capability. Tunisia's relative stability (until recently) and educated population attracted some foreign investment in R&D, though much less than hoped.

But Tunisia's scientific development has been undermined by political upheaval following the 2011 Arab Spring. What began as democratic promise descended into economic crisis, political gridlock, and recently authoritarian backsliding under President Kais Saied. Research funding has been slashed, international collaborations have weakened, and brain drain has accelerated. Young Tunisian scientists see limited future at home—many join the migration flows to Europe, particularly France, where Tunisian engineers and doctors are prized for their training and language skills.

The STEM education system remains Tunisia's strength. Engineering schools and medical faculties maintain reasonable quality, and Tunisian students often excel when they reach European universities for graduate studies. But domestic research careers are increasingly untenable—salaries are low, facilities are aging, and political interference grows. Tunisia had positioned itself as the Arab world's scientific bright spot, a bridge between European and Middle Eastern research networks. Whether it can arrest its decline and fulfill that potential, or whether continued instability will reduce it to another talent exporter, remains uncertain.`,
    issues: [
      'Political instability since 2011 disrupting research funding and planning',
      'Accelerating brain drain to France and Europe',
      'R&D investment at 0.7% GDP insufficient and declining',
      'Authoritarian backsliding threatening academic freedom',
      'Economic crisis making research careers increasingly untenable',
    ],
  },
  Turkey: {
    summary: `Turkey's scientific ambitions have collided with authoritarianism. This nation of 85 million invests approximately 1.1% of GDP in R&D and produces more research papers than any Middle Eastern country. Turkish universities employ tens of thousands of researchers, and the country has built significant capacity in fields from archaeology to aerospace engineering, from medical research to materials science. Yet Turkey's scientific potential is increasingly strangled by political repression, brain drain, and the erosion of academic freedom under President Erdoğan's authoritarian rule.

Turkey's leading universities—Middle East Technical University (METU), Boğaziçi University, Istanbul Technical University—were once genuine centers of excellence attracting international collaboration. Turkish scientists contributed to CERN's Large Hadron Collider, conducted important research on earthquake engineering (crucial in this seismically active region), and studied Anatolian biodiversity and archaeological treasures. The country's position bridging Europe and Asia created opportunities for unique research collaborations and access to diverse ecosystems and historical sites.

Then came the 2016 coup attempt and the subsequent purges. Thousands of academics were dismissed, imprisoned, or forced to flee based on alleged connections to opposition movements. Universities were placed under closer government control, academic freedom was curtailed, and researchers learned to self-censor. International collaborations weakened as foreign partners grew wary of Turkish academic institutions' autonomy. The brain drain, always present, became a flood—Turkish scientists who could leave did, moving to Europe, North America, or the Gulf states. Those who remained face restricted intellectual freedom, limited funding, and political pressure to align research with government priorities.

The STEM education system remains reasonably robust, producing large numbers of engineering and medical graduates. But quality is uneven, and the best students increasingly plan to leave Turkey after graduation. Economic crises, currency collapse, and soaring inflation have eroded researcher salaries and research purchasing power. Turkey has the population, resources, and historical intellectual traditions to be a major scientific power bridging East and West—instead, authoritarianism is squandering this potential, driving away talent and isolating Turkish science from global networks.`,
    issues: [
      'Academic purges and political repression devastating scientific community',
      'Severe brain drain accelerated by authoritarianism and economic crisis',
      'Academic freedom curtailed—self-censorship and government control',
      'International collaborations weakened by concerns about institutional autonomy',
      'Economic collapse eroding real researcher salaries and research budgets',
    ],
  },
  Turkmenistan: {
    summary: `Turkmenistan's scientific capacity is a victim of extreme authoritarian isolation. This Central Asian nation of six million, sitting atop vast natural gas reserves, invests virtually nothing in genuine research and development. Under the bizarre personality cults of Saparmurat Niyazov ("Turkmenbashi") and his successor Gurbanguly Berdimuhamedov, Turkmenistan became perhaps the world's most closed society, where independent thought is dangerous and scientific inquiry exists only to glorify the regime.

Whatever Soviet-era research infrastructure once existed has largely decayed. Turkmen State University and various technical institutes focus almost entirely on teaching, with minimal research activity. What passes for "science" is often propaganda—the former president claimed to write medical textbooks and encouraged research on dubious traditional medicines while neglecting evidence-based medicine. Natural gas engineering research exists, but is largely conducted by foreign companies like China National Petroleum Corporation, not domestic capacity. The country's extraordinary Karakum Desert ecology, Caspian Sea biology, and archaeological riches of ancient Silk Road sites are studied by the occasional foreign researcher who can navigate the bureaucracy, not by Turkmen scientists.

Brain drain is absolute for anyone who can escape. The handful of Turkmen who study abroad—usually in Russia, Turkey, or China—rarely return except under compulsion. There is no concept of a scientific career in Turkmenistan beyond teaching at poorly-funded universities or working for state enterprises. Researchers have no access to international journals, cannot freely collaborate abroad, and face omnipresent surveillance and political control. The STEM education system emphasizes rote memorization and ideological conformity, not critical thinking or inquiry.

Recent modest economic liberalization has done nothing for science. The government prioritizes monument-building and regime glorification over research investment. Turkmenistan will remain a scientific wasteland as long as authoritarian control persists. The country's small population and resource wealth mean it could, in theory, build reasonable research capacity—but this would require political transformation so fundamental as to seem impossible in the near term.`,
    issues: [
      'Extreme authoritarian control eliminating independent scientific inquiry',
      'Essentially zero domestic R&D capacity or investment',
      'Complete brain drain—no viable scientific careers domestically',
      'International isolation limiting any foreign collaboration or training',
      'Education system emphasizing ideology over critical thinking and inquiry',
    ],
  },
  Uganda: {
    summary: `Uganda's scientific story is one of persistent struggle against poverty and limited resources. This East African nation of 47 million invests approximately 0.2% of GDP in R&D—woefully insufficient but representative of competing development priorities in a country where basic health care and education remain inadequate. Uganda possesses research potential: diverse ecosystems from savannah to rainforest, endemic diseases requiring study, agricultural challenges affecting millions of subsistence farmers. Yet domestic scientific capacity remains minimal.

Makerere University in Kampala is Uganda's premier research institution, conducting work in public health, agriculture, and biodiversity. Ugandan researchers study HIV/AIDS (Uganda's early aggressive response to the epidemic in the 1990s was globally influential), malaria drug resistance, crop diseases affecting cassava and bananas (staple foods), and conservation challenges in national parks. The Uganda Virus Research Institute has contributed important work on Ebola and other hemorrhagic fevers. These efforts matter, but operate on tiny budgets with aging equipment and inadequate facilities.

Brain drain devastates Ugandan science. The country trains doctors and scientists who promptly leave for Kenya, South Africa, the United Kingdom, or North America. Ugandan physicians staff hospitals in rural England, researchers join African universities with better resources, and engineers move to the Gulf states. Those who remain earn poverty-level salaries—a university lecturer might make $400 monthly. Research funding comes almost entirely from international donors (NIH, Wellcome Trust, Gates Foundation), not domestic sources, making Ugandan scientists dependent on foreign priorities and partnerships.

The STEM education system has expanded enrollment but quality is dire outside elite schools. Universities lack laboratories, libraries hold outdated materials, and teaching positions are awarded through political patronage as much as merit. Uganda's population growth (one of the world's highest) creates both opportunity—a potential scientific workforce—and challenge—ensuring even basic education for millions. President Museveni's government, in power since 1986, occasionally discusses scientific development but prioritizes military spending and regime security over research investment. Uganda's scientific future remains hostage to poverty, instability, and misguided priorities.`,
    issues: [
      'Extreme underfunding at 0.2% GDP for R&D',
      'Severe brain drain—doctors and scientists leaving for better opportunities',
      'Research dependent on foreign donors not domestic funding',
      'STEM education expansion but catastrophic quality outside elite schools',
      'Government prioritizing military spending over research investment',
    ],
  },
  Ukraine: {
    summary: `Ukraine's scientific heritage is extraordinary; its current devastation is heartbreaking. This nation of 40 million (pre-war) inherits a formidable Soviet scientific legacy. The Ukrainian Academy of Sciences, established in 1918, once rivaled Moscow's in certain fields. Ukraine produced brilliant mathematicians, physicists, and engineers who contributed to Soviet space programs, nuclear physics, and computing. Even after independence in 1991 and the subsequent economic collapse, Ukraine maintained research capacity in aerospace, materials science, computer science, and mathematics that outperformed most post-Soviet states.

Before Russia's full-scale invasion in February 2022, Ukraine invested approximately 0.4% of GDP in R&D—low by European standards but showing slow improvement. The National Academy of Sciences operated dozens of research institutes, and universities in Kyiv, Kharkiv, and Lviv conducted genuine research. Ukrainian scientists contributed to international collaborations, published in respected journals, and maintained connections to European research networks. The IT sector had become a bright spot—Ukrainian programmers and computer scientists earned international reputations, and tech companies thrived.

Then came the war. Russian missiles have destroyed research facilities, killed scientists, and displaced researchers. Kharkiv, Ukraine's second city and a major research center, faced sustained bombardment. Many scientists fled abroad, creating a new brain drain atop the chronic emigration that plagued Ukraine for decades. Those who remained often joined territorial defense or civil emergency response rather than research. International collaborations have largely paused, though European institutions have made heroic efforts to support displaced Ukrainian researchers.

Yet Ukraine's scientific community shows remarkable resilience. Researchers have evacuated equipment, continued work from basements during bombardments, and published papers documenting war crimes using forensic science. The government, despite existential crisis, continues minimal research funding. European institutions have created emergency programs for Ukrainian scientists. Whether Ukraine's research capacity can survive—let alone recover—depends on military outcomes, post-war reconstruction resources, and preventing permanent brain drain. The tragedy is that Ukraine's scientists studied for peace, only to have war destroy their life's work.`,
    issues: [
      'Russian invasion directly destroying research infrastructure and killing scientists',
      'Mass displacement creating brain drain as researchers flee abroad',
      'Pre-war underfunding at 0.4% GDP now catastrophically worse',
      'Research continuity nearly impossible under bombardment conditions',
      'Post-war recovery requiring massive reconstruction resources unlikely to prioritize science',
    ],
  },
  'United Arab Emirates': {
    summary: `The UAE's scientific transformation is among the most rapid in history—and among the most artificial. This young nation of ten million (mostly expatriates) has leveraged oil wealth to build research infrastructure at breakneck pace. The UAE invests approximately 1.3% of GDP in R&D, modest by developed country standards but growing aggressively. What makes the UAE unique is that it has essentially imported an entire scientific ecosystem—universities, researchers, even "innovation culture"—rather than growing one organically.

The Masdar Institute, New York University Abu Dhabi, Khalifa University, and Mohammed Bin Rashid University represent the UAE's research ambitions. These institutions recruit faculty globally, offer salaries and facilities competitive with American universities, and focus on priority areas: renewable energy (transitioning beyond oil), artificial intelligence, space science, and water technology. The UAE Space Agency successfully sent the Hope probe to Mars in 2021—a genuine achievement involving Emirati engineers, though with substantial foreign technical assistance. The country has invested heavily in AI research, positioning Dubai and Abu Dhabi as Middle Eastern tech hubs.

Yet the UAE's scientific enterprise faces fundamental questions of sustainability and authenticity. Research is conducted largely by foreign scientists on temporary contracts, not Emirati nationals. The country produces few PhD graduates—most senior researchers are imported from Egypt, Pakistan, Europe, or North America. Academic freedom is constrained; researchers understand that criticism of government policy is forbidden. The STEM education system for Emirati citizens is improving but still produces relatively few students pursuing research careers—cultural preferences favor business, government, or military positions.

The UAE's model is essentially purchasing scientific prestige and capacity the way one might purchase art or architecture—impressive in scale, questionable in depth. Without genuine academic freedom, home-grown research talent, and cultural shift toward valuing scientific inquiry for its own sake, the UAE's research enterprise may remain permanently dependent on imported expertise. The question is whether this matters—if the UAE's goal is applied research solving practical problems (desalination, solar energy, AI applications), imported talent may suffice. But fundamental scientific breakthroughs typically emerge from the messy freedom of inquiry that authoritarian systems cannot replicate.`,
    issues: [
      'Scientific capacity largely imported—foreign researchers on contracts not domestic',
      'Academic freedom constrained—criticism of government forbidden',
      'Few Emirati PhD graduates or home-grown research talent',
      'Sustainability questions—can purchased scientific prestige endure',
      'Cultural preferences favoring business over research careers',
    ],
  },
  'United Kingdom': {
    summary: `The United Kingdom's scientific traditions are woven into the fabric of modern science itself. This is the nation of Newton, Darwin, Faraday, Turing, Hawking—over 130 Nobel Prize winners, more per capita than any country except perhaps Switzerland. British universities—Oxford, Cambridge, Imperial College London, University College London, Edinburgh—rank among the world's best. The UK invests approximately 1.8% of GDP in R&D, below competitors like the US and Germany but supporting an impressive research enterprise that punches above the country's economic weight.

British scientists continue making major contributions across fields. The UK led COVID-19 vaccine development through the Oxford-AstraZeneca collaboration, demonstrating translational research excellence. British researchers contributed crucially to climate science, gravitational wave detection, AI development, and CRISPR gene editing. The Francis Crick Institute, Wellcome Sanger Institute, and Medical Research Council labs conduct world-class biomedical research. The UK's research culture emphasizes creativity, interdisciplinary collaboration, and public engagement—British science communicators like Brian Cox continue traditions of explaining science to broad audiences.

Yet British science faces existential anxieties. Brexit has severed full participation in EU research programs (though the UK rejoined Horizon Europe in 2023 after contentious negotiations), complicated researcher mobility, and isolated British science from continental collaborations. Funding pressures persist—the government has struggled to meet promised R&D investment increases amid economic challenges. Universities face financial stress, particularly for sciences requiring expensive infrastructure. Brain drain concerns grow as the UK becomes relatively less attractive compared to the US, Germany, or even Singapore for top talent.

British science's future depends on navigating post-Brexit reality, increasing R&D investment toward 2.4% GDP targets, and maintaining global connectedness despite nationalist impulses. The UK cannot compete with American scale or Chinese state-directed investment, but can potentially maintain excellence through specialization, international collaboration, and the cultural strengths—creativity, intellectual freedom, quirky brilliance—that have historically defined British science. Whether politics will allow this, or whether insularity and underinvestment will erode Britain's scientific standing, will define the coming decades.`,
    issues: [
      'Brexit complications—researcher mobility EU collaboration program participation',
      'R&D investment at 1.8% GDP insufficient—needs increase to maintain competitiveness',
      'University financial stress threatening expensive science infrastructure',
      'Brain drain concerns—relative attractiveness declining versus US Germany Singapore',
      'Tension between nationalist politics and science requiring global openness',
    ],
  },
  'United States': {
    summary: `American scientific dominance has defined the post-World War II era. The United States invests over $700 billion annually in R&D—approximately 3.5% of GDP and nearly a third of global spending. This translates into Nobel Prizes by the dozen (over 400 Americans awarded), research universities that dominate global rankings, government labs that drive breakthrough science, and corporate R&D that shapes technological civilization. The NIH funds biomedical research globally, DARPA incubates transformative technologies, NASA explores space, and national laboratories from Los Alamos to Livermore conduct everything from nuclear physics to climate modeling.

American research universities—MIT, Stanford, Harvard, Caltech, and dozens more—attract the world's best talent. The US system's strengths are distinctive: massive scale, diverse funding sources (federal, state, private, philanthropic), competitive meritocracy that rewards brilliance regardless of origin, and cultural embrace of risk-taking and entrepreneurship. American scientists lead fields from artificial intelligence to immunotherapy, from quantum computing to synthetic biology. The country has largely avoided severe brain drain by importing global talent—roughly 30% of US Nobel laureates are foreign-born, and American labs employ researchers from every continent.

Yet American scientific dominance faces unprecedented challenges. R&D investment as percentage of GDP has declined from Cold War peaks. Political polarization increasingly infects science—climate change denial, vaccine hesitancy, attacks on research funding as "wasteful." Immigration restrictions threaten talent pipelines—Chinese, Indian, Iranian students face visa obstacles. Geographic and socioeconomic inequality in STEM education means huge potential talent pools remain untapped. Corporate research has shifted from fundamental inquiry (Bell Labs' glory days) toward shorter-term applied development. Federal science funding stagnates in inflation-adjusted terms, forcing researchers to spend more time grant-writing than researching.

China's scientific rise creates the first peer competitor America has faced since the Soviet Union. Whether the US responds with renewed investment and openness, or with nationalist restrictions and underinvestment, will determine 21st-century scientific leadership. American science's greatest strength has always been openness—to immigrants, to unorthodox ideas, to global collaboration. Preserving this openness while addressing legitimate security concerns represents the central challenge facing American research policy.`,
    issues: [
      'R&D investment declining as percentage of GDP from Cold War peaks despite absolute increases',
      'Political polarization infecting science—climate denial anti-vaccine sentiment funding attacks',
      'Immigration restrictions threatening talent pipeline from China India globally',
      'Geographic and socioeconomic STEM education inequality wasting potential talent',
      'Corporate R&D shifted from fundamental to applied reducing breakthrough potential',
    ],
  },
  Uruguay: {
    summary: `Uruguay's scientific story is one of modest ambition sensibly pursued. This small South American nation of 3.5 million invests approximately 0.5% of GDP in R&D—not impressive by developed country standards, but steady and well-managed by regional comparison. Uruguay lacks the scale for scientific superpower status, but has carved out a reputation for quality over quantity and stability that attracts regional collaboration.

The University of the Republic (UdelaR) in Montevideo dominates Uruguayan research, conducting work in agriculture (beef and dairy industries are economically crucial), renewable energy (transitioning toward wind and solar), biotechnology, and environmental science. The Institut Pasteur de Montevideo, established in 2006 with French collaboration, conducts respected infectious disease and cancer research. Uruguayan researchers study Rio de la Plata ecology, develop climate adaptation strategies for agriculture, and contribute to regional public health networks. The scale is small—Uruguay's entire scientific community numbers perhaps 3,000 researchers—but quality is reasonable.

Uruguay's advantages are political and cultural. The country enjoys South America's most stable democracy, low corruption, good governance, and social cohesion. This stability attracts foreign partnerships and regional organizations—Montevideo hosts various Latin American research networks. Brain drain exists but is less severe than neighbors; Uruguayan scientists can earn decent (if not spectacular) livings at home, and quality of life is good. The STEM education system is solid, emphasizing mathematics and sciences, though university quality is uneven and graduate programs limited.

Uruguay's scientific challenge is scaling up. At 0.5% GDP, R&D investment is insufficient to build world-class capacity. The country needs to increase funding, expand graduate programs, and create more mechanisms linking research to economic development beyond agriculture. Uruguay has positioned itself as the "Switzerland of South America"—stable, prosperous, boring in the best sense—and could potentially build on this reputation to become a regional research hub. This would require political will, sustained investment, and patience to build institutions that cannot emerge overnight. Uruguay may never be a scientific powerhouse, but it could become a respected middle power punching slightly above its weight—an honorable ambition for a small nation.`,
    issues: [
      'Low R&D investment at 0.5% GDP limiting capacity building',
      'Small scale—entire scientific community only 3000 researchers',
      'Limited graduate programs constraining advanced training domestically',
      'Brain drain persists despite better conditions than regional neighbors',
      'Need for mechanisms better linking research to economic development',
    ],
  },
  Uzbekistan: {
    summary: `Uzbekistan's scientific capacity is a slowly decaying remnant of the Soviet era. This Central Asian nation of 35 million inherits research institutes and universities from when it was a Soviet republic, but decades of authoritarian rule, economic stagnation, and isolation have left these institutions shadows of their former selves. Uzbekistan invests perhaps 0.2% of GDP in R&D—official statistics are unreliable—and what research occurs is often politicized, bureaucratized, or irrelevant to actual development needs.

The Uzbekistan Academy of Sciences operates numerous research institutes covering fields from cotton genetics (cotton was the Soviet-era monoculture) to seismology (the region is earthquake-prone) to Central Asian history and archaeology. The National University of Uzbekistan and Tashkent State Technical University conduct some research, but focus primarily on teaching. Whatever capacity exists concentrates in Tashkent, the capital; provincial universities are purely teaching institutions. Uzbek researchers occasionally publish in Russian or international journals, but the volume and impact are minimal.

Brain drain is severe and has been for decades. The best Uzbek scientists left during the Soviet collapse in the 1990s, moving to Russia, Kazakhstan, Turkey, or the West. Recent graduates who can leave typically do, seeking opportunities in Russia, South Korea, Turkey, or increasingly the Gulf states. Those who remain face rock-bottom salaries (often going unpaid for months), obsolete equipment, and authoritarian control over academic life. President Shavkat Mirziyoyev, in power since 2016, has implemented modest economic reforms and slightly reduced repression, but science remains a low priority.

The STEM education system emphasizes rote learning and Soviet-style technical training. Uzbekistan produces engineers and doctors, but educational quality is poor by international standards and corruption is endemic—exam results and degrees can often be purchased. The country sits on natural gas reserves and has substantial agricultural potential beyond cotton monoculture, but develops neither resource with domestic scientific expertise. Uzbekistan will remain a scientific backwater until it achieves genuine political reform, massive education investment, and integration into global research networks—none of which appear imminent.`,
    issues: [
      'Minimal R&D investment approximately 0.2% GDP and unreliable statistics',
      'Decades of brain drain leaving depleted research capacity',
      'Authoritarian control and corruption distorting academic life',
      'Obsolete Soviet-era equipment and rock-bottom researcher salaries',
      'STEM education emphasizes rote learning and suffers endemic corruption',
    ],
  },
  Venezuela: {
    summary: `Venezuela's scientific collapse is among the most dramatic in modern history. This nation of 28 million once boasted Latin America's richest scientific infrastructure, built on oil wealth during more stable decades. The Venezuelan Institute for Scientific Research (IVIC), established in 1959, was once the continent's premier research center. Venezuelan universities conducted respected work in tropical medicine, petroleum engineering, biodiversity, and more. The country spent approximately 0.5% of GDP on R&D in better times and seemed poised for scientific leadership.

Then came the Chavista economic catastrophe. Mismanagement, corruption, collapsing oil production, hyperinflation, and authoritarian repression destroyed Venezuela's scientific capacity. Research funding evaporated—IVIC scientists went months without salaries, laboratories ran out of basic supplies, equipment became obsolete with no resources for replacement. Universities closed, libraries subscribed to no journals, researchers abandoned science for survival. Hyperinflation made researcher salaries worthless; a university professor might earn the equivalent of $5-10 monthly in practical terms.

The brain drain is biblical. Venezuelan scientists fled by the thousands—to Colombia, Chile, Argentina, Spain, the United States. Those who remain are often elderly researchers clinging to institutional positions or trapped by circumstances. Young Venezuelans with scientific talent don't even consider domestic research careers—they plan escape from adolescence onward. Venezuela has exported a generation of trained doctors, engineers, biologists who now strengthen other countries' research capacity while Venezuela's own atrophies to nothing.

What little research continues involves heroic efforts by individuals or international collaborations studying Venezuelan biodiversity, tropical diseases, or political crisis itself. The country's extraordinary ecosystems—portions of the Amazon, the Orinoco Delta, the Andes, Caribbean coast—are studied primarily by foreign researchers who can access them despite chaos. Venezuela's scientific reconstitution would require political transformation, economic stabilization, and decades of patient rebuilding. Instead, the collapse accelerates. Venezuela represents a warning: how quickly scientific capacity can be destroyed when political and economic institutions fail.`,
    issues: [
      'Complete economic collapse destroying research funding and infrastructure',
      'Hyperinflation rendering researcher salaries worthless—5-10 dollars monthly',
      'Biblical brain drain—thousands of scientists fled to Colombia Chile US Europe',
      'Research institutions like IVIC effectively defunct—no supplies obsolete equipment',
      'Young talent viewing science careers as impossible—planning escape instead',
    ],
  },
  Vietnam: {
    summary: `Vietnam's scientific trajectory is one of the developing world's most dynamic. This nation of 98 million has leveraged rapid economic growth, manufacturing success, and strategic investment to build research capacity from an extremely low base. Vietnam now invests approximately 0.5% of GDP in R&D—still modest but growing rapidly. The government has designated science and technology as central to development strategy, viewing research capacity as essential for escaping middle-income status.

The Vietnam Academy of Science and Technology, Hanoi University of Science and Technology, and Vietnam National University system anchor research capacity. Vietnamese researchers focus on areas crucial to national development: agricultural productivity (rice improvement, aquaculture), tropical medicine and public health, environmental science (Mekong Delta ecology, plastic pollution), and increasingly information technology and engineering. Vietnam's experience with Agent Orange contamination and tropical diseases has produced pockets of research excellence. The country contributed meaningfully to COVID-19 response through domestic vaccine development efforts and genomic surveillance.

Vietnam's scientific emergence is inseparable from its manufacturing-led economic growth. Electronics assembly for Samsung, Nike, and others is gradually evolving toward more sophisticated production requiring domestic engineering talent. The government has invested in STEM education, built research infrastructure, and created incentives for Vietnamese scientists abroad to return. Brain drain, while still present, is less severe than many developing countries—economic growth creates opportunities that retain more talent domestically, and some overseas Vietnamese researchers are repatriating.

Yet Vietnam faces significant obstacles. At 0.5% GDP, R&D investment remains insufficient for sustained capacity building. Academic culture can be hierarchical and risk-averse, limiting young researchers' autonomy. The Communist Party's political control restricts academic freedom in politically sensitive areas. Research quality is uneven—Vietnamese scientists publish increasing volumes, but impact remains below international leaders. The STEM education system emphasizes rote learning and test-taking over creativity and critical inquiry. Whether Vietnam can transition from fast follower to genuine innovator—the same question facing China—will determine whether it escapes middle-income status or stagnates.`,
    issues: [
      'R&D investment at 0.5% GDP insufficient—needs significant increase',
      'Research quality uneven—increasing volume but limited international impact',
      'Academic culture hierarchical and risk-averse limiting innovation',
      'Communist Party political control restricting academic freedom',
      'STEM education emphasizes rote learning over creativity and inquiry',
    ],
  },
  Yemen: {
    summary: `Yemen's scientific capacity has been annihilated by war. Before the Saudi-led intervention beginning in 2015, Yemen was already one of the Arab world's poorest countries with minimal research infrastructure. R&D investment was essentially nonexistent, universities were poorly funded, and scientific careers barely existed outside teaching. Still, modest capacity existed: Sana'a University and Aden University conducted some research, Yemeni doctors studied tropical diseases endemic to the region, and a handful of researchers documented Yemen's unique biodiversity and archaeology.

Then came total war. Nine years of brutal conflict have destroyed what little scientific capacity existed. Universities have been bombed, researchers have been killed or displaced, laboratories and libraries have been destroyed or looted. The humanitarian catastrophe—millions facing starvation, cholera epidemics, collapsed health systems—has eliminated any possibility of research activity. Researchers have fled if they could, to Saudi Arabia, Oman, Egypt, or further abroad. Those trapped in Yemen are focused on survival, not science.

The few Yemeni scientists still attempting research do so from exile or in heroic isolation. Some study Yemen's crisis itself—documenting war crimes, tracking disease outbreaks, analyzing humanitarian needs. International organizations conduct crucial work in Yemen on cholera, malnutrition, water access, but entirely separate from any domestic scientific community. Yemen's extraordinary biodiversity (the island of Socotra is a UNESCO World Heritage Site with endemic species found nowhere else) goes unstudied except by occasional foreign researchers who can navigate the war zone.

Yemen's scientific future is nonexistent until peace arrives—if it ever does. Reconstruction would require decades and resources unlikely to materialize in a country this poor and devastated. An entire generation has missed education; those with potential have fled or died. Yemen represents the extreme case of how war destroys not just current research capacity but future potential—the students who would have become scientists are instead malnourished, uneducated, or dead. The tragedy is so complete that discussing "science policy" in Yemen's context seems obscene.`,
    issues: [
      'Nine years of war completely destroying minimal pre-existing research capacity',
      'Universities bombed researchers killed or displaced infrastructure annihilated',
      'Humanitarian catastrophe eliminating any possibility of research activity',
      'Complete brain drain—scientists fled to Saudi Arabia Egypt elsewhere if possible',
      'Entire generation missing education—future scientific potential destroyed',
    ],
  },
  Zambia: {
    summary: `Zambia's scientific landscape reflects the challenges facing landlocked, resource-dependent African nations. This southern African country of 19 million invests approximately 0.3% of GDP in R&D—insufficient but representative of competing priorities in a country grappling with poverty, HIV/AIDS, and economic dependence on copper mining. Zambia possesses research potential—diverse ecosystems, endemic tropical diseases, agricultural challenges, and mineral wealth requiring sustainable management—but lacks resources to develop significant domestic capacity.

The University of Zambia in Lusaka and Copperbelt University represent the country's primary research institutions, conducting modest work in agriculture, public health, mining engineering, and ecology. Zambian researchers study HIV/AIDS (prevalence exceeds 11% in adults), malaria control, nutritional science (addressing malnutrition), and sustainable copper mining. The Tropical Diseases Research Centre conducts important work on diseases affecting the region. These efforts operate on minimal budgets, often depending on international donors like NIH, WHO, or European research councils rather than domestic funding.

Brain drain devastates Zambian science. The country trains doctors, agronomists, and engineers who leave for South Africa, Botswana, the UK, or North America. Researcher salaries are poverty-level—a university lecturer might earn $400-600 monthly. Infrastructure is minimal: laboratories lack modern equipment, libraries hold no recent journals, internet connectivity is unreliable outside cities. Research is essentially unfunded beyond external grants, making Zambian scientists dependent on foreign partnerships where they're often junior partners studying their own country.

The STEM education system has expanded access but quality is poor outside elite schools. Teacher training is inadequate, schools lack laboratories and materials, and university admission is limited by capacity constraints. Recent governments have discussed scientific development as crucial for economic diversification beyond copper, but implementation has been minimal. Zambia faces the classic development trap: too poor to invest meaningfully in science, but unable to escape poverty without scientific capacity. Breaking this cycle would require sustained commitment and resources from both government and international partners.`,
    issues: [
      'Severe underfunding at 0.3% GDP for R&D',
      'Devastating brain drain—trained scientists leaving for South Africa UK North America',
      'Poverty-level researcher salaries and minimal infrastructure',
      'Research dependent on foreign donors rather than domestic funding',
      'STEM education expansion but poor quality outside elite institutions',
    ],
  },
  Zimbabwe: {
    summary: `Zimbabwe's scientific collapse represents one of post-colonial Africa's great tragedies. At independence in 1980, Zimbabwe inherited reasonably robust research infrastructure from the Rhodesian era, particularly in agriculture and mining. The University of Zimbabwe was a respected regional institution, and the country had significant research capacity in tobacco science, maize breeding, mining engineering, and veterinary medicine. Zimbabwe seemed positioned for scientific development alongside its better-resourced neighbor South Africa.

Then came Robert Mugabe's 37-year authoritarian rule, economic mismanagement, hyperinflation, and political repression. Zimbabwe's research capacity has been systematically destroyed. The University of Zimbabwe lost most of its faculty to brain drain, cannot afford to maintain equipment, and struggles to pay even minimal salaries. Research institutes focused on agriculture and mining became dysfunctional as the broader economy collapsed. Hyperinflation in the late 2000s rendered researcher salaries worthless. Political violence and repression drove many academics into exile.

The brain drain has been catastrophic and sustained. Zimbabwean doctors, scientists, and engineers fled by the thousands to South Africa, Botswana, the UK, Australia, and North America. The diaspora now dwarfs those who remained. Young Zimbabweans with scientific talent view leaving the country as the only viable path—there is no conceivable research career at home. Those few scientists who remain do so from inertia, lack of alternatives, or patriotic commitment, not because conditions allow meaningful work.

Recent political changes following Mugabe's 2017 ouster have not reversed scientific decline. The Mnangagwa government has failed to stabilize the economy or reduce repression, and science remains an afterthought. R&D investment is essentially zero. Zimbabwe's universities continue deteriorating, talented youth continue emigrating, and research infrastructure continues decaying. Reconstituting Zimbabwe's scientific capacity would require political transformation, economic recovery, and decades of rebuilding—none of which appear imminent. Zimbabwe stands as a warning of how quickly political and economic failure can destroy scientific institutions that took generations to build.`,
    issues: [
      'Decades of economic collapse and political repression destroying research capacity',
      'Catastrophic sustained brain drain—thousands of scientists fled abroad',
      'Near-zero R&D investment and dysfunctional research institutions',
      'University of Zimbabwe lost most faculty and cannot maintain infrastructure',
      'No viable domestic research careers—all talent planning emigration',
    ],
  },
}

async function main() {
  console.log('🚀 Starting SCIENCE & RESEARCH summary generation (Taiwan to Zimbabwe)\n')
  console.log('Countries to process:', COUNTRIES.map(c => c.name).join(', '))
  console.log('\n' + '='.repeat(80) + '\n')

  let successCount = 0
  let errorCount = 0

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
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
