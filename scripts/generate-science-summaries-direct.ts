import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 31-45 for SCIENCE & RESEARCH category
const COUNTRIES = [
  { name: 'China', type: 'country', lat: 35.0, lng: 105.0 },
  { name: 'Colombia', type: 'country', lat: 4.5709, lng: -74.2973 },
  { name: 'Croatia', type: 'country', lat: 45.1, lng: 15.2 },
  { name: 'Cuba', type: 'country', lat: 21.5218, lng: -77.7812 },
  { name: 'Cyprus', type: 'country', lat: 35.1264, lng: 33.4299 },
  { name: 'Czech Republic', type: 'country', lat: 49.8175, lng: 15.473 },
  { name: 'Democratic Republic of Congo', type: 'country', lat: -4.0383, lng: 21.7587 },
  { name: 'Denmark', type: 'country', lat: 56.2639, lng: 9.5018 },
  { name: 'Dominican Republic', type: 'country', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', type: 'country', lat: -1.8312, lng: -78.1834 },
  { name: 'Egypt', type: 'country', lat: 26.8206, lng: 30.8025 },
  { name: 'El Salvador', type: 'country', lat: 13.7942, lng: -88.8965 },
  { name: 'Estonia', type: 'country', lat: 58.5953, lng: 25.0136 },
  { name: 'Ethiopia', type: 'country', lat: 9.145, lng: 40.4897 },
]

// Science & Research summaries for each country (Ed Yong / Carl Zimmer style)
// 2,500-3,500 characters, focusing on research institutions, R&D spending, breakthroughs, STEM education
const SCIENCE_SUMMARIES: { [key: string]: { summary: string; issues: string[] } } = {
  'China': {
    summary: 'China's scientific ambitions have crystallized into something remarkable-and unsettling. The country now produces more research papers than any other nation, accounting for nearly a quarter of global scientific output. But this is not just about quantity. Chinese researchers are increasingly driving breakthroughs in fields from quantum computing to CRISPR gene editing, artificial intelligence to materials science. Tsinghua University and Peking University now rank among the world's top institutions for engineering and computer science, while the Chinese Academy of Sciences coordinates research across hundreds of institutes employing over 60,000 scientists.

The numbers tell a compelling story: China invests 2.4% of its GDP in research and development-over $400 billion annually, second only to the United States in absolute terms. This sustained investment is yielding results. Chinese scientists have achieved quantum teleportation over record distances, developed the world's fastest supercomputers, and made major advances in fusion energy research. The country leads in patent applications, particularly in AI and telecommunications, with Huawei and other firms challenging Western technological dominance.

Yet China's scientific rise is inseparable from its authoritarian governance. The government prioritizes research in strategic sectors-semiconductors, biotechnology, aerospace-while maintaining tight control over academic freedom. Researchers face pressure to align their work with party directives. The brain drain that once plagued China has partially reversed through aggressive recruitment programs like the Thousand Talents Plan, luring overseas Chinese scientists home with generous funding. But concerns about intellectual property theft, lack of research transparency, and potential military applications of civilian research strain international scientific collaboration.

The STEM education pipeline is formidable: China graduates more engineering PhDs than any other country, and Chinese students dominate international science olympiads and standardized math assessments. Yet the system emphasizes rote learning and test-taking over creativity and critical thinking-skills essential for fundamental breakthroughs. Whether China can transition from fast follower to true innovator remains an open question. The upcoming decades will test whether authoritarian state planning can sustain scientific excellence, or whether innovation ultimately requires the messy freedom of open societies.',
    issues: [
      'Intellectual property theft and research transparency concerns',
      'Academic freedom restrictions and party control over research',
      'Brain circulation - reversing drain but international collaboration strained',
      'STEM education emphasizes testing over creativity and critical inquiry',
      'Dual-use research raising military application concerns',
    ],
  },
  'Colombia': {
    summary: 'Colombia's scientific landscape is undergoing a quiet transformation, even as political instability and limited funding create persistent headwinds. The country invests just 0.3% of GDP in research and development-far below Latin American peers like Brazil (1.2%) and Chile (0.4%). Yet within these constraints, Colombian researchers have carved out niches of excellence, particularly in biodiversity research, tropical medicine, and agricultural science.

The University of the Andes and the National University of Colombia anchor the research ecosystem, producing most of the country's scientific output. Colombian scientists study the megadiverse ecosystems of the Amazon, the Chocó rainforest, and the Andean páramos-critical both for conservation and for discovering new compounds with pharmaceutical potential. The country's bitter experience with dengue, Zika, and other tropical diseases has fueled strong public health research capacity, with institutions like the National Institute of Health conducting surveillance and vaccine development.

But Colombia's scientific community operates on a shoestring. Researchers cobble together international grants, battle bureaucratic obstacles to import equipment, and watch talented graduates leave for opportunities abroad. The brain drain is severe: Colombia trains excellent scientists, particularly in medicine and engineering, only to lose many to universities and companies in the US, Europe, and increasingly Mexico and Chile. Political instability, fluctuating government priorities, and the recent COVID-19 economic shock have repeatedly derailed efforts to expand research funding.

Recent governments have recognized science as essential for economic development beyond resource extraction. Colombia has modest but growing biotech and pharmaceutical sectors, and Medellín has positioned itself as a regional tech hub. Yet STEM education remains uneven-elite universities produce world-class graduates, but the broader education system struggles with quality and access. Without sustained investment in research infrastructure, competitive salaries for scientists, and stable funding mechanisms, Colombia risks remaining a scientific backwater despite its extraordinary natural laboratory and human talent.',
    issues: [
      'Severe underfunding at 0.3% of GDP for R&D',
      'Persistent brain drain - losing trained scientists abroad',
      'Research infrastructure deficits and equipment import challenges',
      'Political instability disrupting long-term scientific planning',
      'Uneven STEM education quality between elite and public institutions',
    ],
  },
  'Croatia': {
    summary: 'Croatia's scientific story is one of resilience amid constraint. This small Balkan nation of just under four million people invests approximately 1.0% of GDP in research and development-respectable by Eastern European standards but well below the EU average of 2.1%. The legacy of Yugoslavia's once-robust scientific institutions lingers in pockets of excellence, but chronic underinvestment, brain drain, and bureaucratic inertia hamper progress.

The University of Zagreb, founded in 1669, remains the anchor of Croatian science, alongside the Ruđer Bošković Institute, which conducts research in physics, chemistry, and marine science. Croatian researchers have made notable contributions to fields like mathematics (the "Croatian school" of mathematics has historical significance), marine biology studying the Adriatic ecosystem, and medical research. The country produced one Nobel laureate: Vladimir Prelog won the 1975 Chemistry Prize, though he did his prize-winning work in Switzerland-a pattern that persists today.

Brain drain is Croatia's scientific curse. The best graduates leave for Germany, Austria, the UK, or North America, lured by better funding, modern facilities, and higher salaries. EU accession in 2013 accelerated this exodus by removing barriers to movement. Croatian universities struggle to compete: academic salaries are low, research grants are scarce and bureaucratically burdensome to obtain, and equipment is often outdated. The few who return from abroad face frustration with rigid hierarchies and slow institutional reform.

Yet Croatia has assets. EU membership provides access to Horizon Europe research funding, and the country has niche strengths in tourism-related environmental science, sustainable agriculture, and digital technologies. The STEM education system is solid if unspectacular, producing graduates with strong fundamentals. Whether Croatia can reverse the brain drain, modernize its research institutions, and increase R&D investment to EU levels will determine whether it joins the ranks of Europe's innovation economies or remains a scientific periphery.',
    issues: [
      'Severe brain drain to Western Europe and North America',
      'R&D investment at 1.0% GDP, below EU average',
      'Aging research infrastructure and equipment deficits',
      'Bureaucratic obstacles to research funding and administration',
      'Academic salary and career prospects uncompetitive with Western Europe',
    ],
  },
  'Cuba': {
    summary: 'Cuba's scientific achievements are improbable, even miraculous. Under a US embargo for over six decades and hobbled by economic crisis, this island nation developed one of the developing world's most sophisticated biotechnology sectors. The story begins with Fidel Castro's obsession with science as a path to national sovereignty and economic development. In the 1980s, Cuba invested heavily in molecular biology and vaccine research, building a network of institutes that would produce original treatments for cancer, meningitis, and hepatitis.

The crown jewel is the Center for Genetic Engineering and Biotechnology in Havana, which developed innovative therapies including CIMAvax for lung cancer and Heberprot-P for diabetic foot ulcers. These are not cutting-edge by global standards, but they represent genuine innovation emerging from resource scarcity. Cuba's biotech sector employs over 20,000 scientists and technicians, exports vaccines and pharmaceuticals to the developing world, and has become a rare source of hard currency. During COVID-19, Cuba developed its own vaccines (Abdala and Soberana) rather than waiting for imports-a feat achieved by few countries.

Yet Cuban science operates within severe constraints. R&D spending is difficult to calculate but estimated at around 0.4% of GDP. Researchers work with outdated equipment, endure electricity blackouts, and earn salaries of perhaps $50 per month in official terms (though the real economy is more complex). The US embargo restricts access to scientific equipment, journals, and international collaboration. Brain drain is relentless: Cuban doctors and scientists flee to Chile, Spain, the US-anywhere offering better pay and working conditions.

The STEM education system is Cuba's hidden strength. Universal education emphasized science, producing literacy rates and math proficiency on par with developed nations. Medical education is world-class, and Cuba exports doctors to dozens of countries. But economic collapse, internet restrictions, and political repression strangle scientific potential. Whether Cuba's biotech sector can survive the slow transition beyond the Castro era, or whether it represented a unique historical moment, remains uncertain.',
    issues: [
      'US embargo restricting access to equipment and collaboration',
      'Economic crisis and low R&D funding (~0.4% GDP)',
      'Severe brain drain of doctors and scientists',
      'Aging infrastructure and equipment obsolescence',
      'Political restrictions on academic freedom and internet access',
    ],
  },
  'Cyprus': {
    summary: 'Cyprus occupies a peculiar position in the global scientific landscape-geographically at the crossroads of Europe, Asia, and Africa, but scientifically a modest player punching slightly above its weight. This island nation of 1.2 million invests roughly 0.7% of GDP in research and development, below the EU average but growing. EU membership since 2004 has accelerated scientific integration, providing access to European research networks and funding.

The University of Cyprus, established only in 1989, has rapidly developed into a respectable research institution, particularly in oceanography, solar energy, and archaeology. The Cyprus Institute, launched in 2005 with international backing, focuses on computational science, energy, and cultural heritage preservation. Cyprus benefits from its role as a regional hub-its universities attract students from Greece, the Middle East, and beyond, and international research collaborations leverage the island's unique position and climate for projects in renewable energy and climate science.

Yet Cyprus faces structural challenges. The economy is heavily service-oriented, dominated by tourism, shipping, and financial services, with minimal manufacturing or high-tech sectors. This limits demand for R&D and creates brain drain: talented Cypriot scientists typically pursue careers in the UK, Germany, or the United States rather than returning home. The 2013 financial crisis severely impacted research funding, and recovery has been gradual. The island's division since 1974 creates inefficiencies-Turkish Cyprus has separate, less developed institutions with minimal collaboration across the Green Line.

STEM education is reasonably strong, with emphasis on mathematics and engineering, though the small population limits scale. Cyprus has niche advantages: abundant sunshine for solar energy research, proximity to the Eastern Mediterranean for marine studies, and archaeological richness for heritage science. The challenge is translating these advantages into sustainable research capacity and economic impact. Whether Cyprus can build a knowledge economy or remains primarily a service economy with modest scientific capacity will depend on sustained R&D investment and success in retaining talent.',
    issues: [
      'Low R&D investment at 0.7% GDP despite EU membership',
      'Brain drain - scientists pursue careers abroad',
      'Limited high-tech industry creating weak demand for research',
      'Island division impeding collaboration and resource pooling',
      'Small scale limiting critical mass in most research fields',
    ],
  },
  'Czech Republic': {
    summary: 'The Czech Republic inherits a proud scientific tradition from its Austro-Hungarian and Czechoslovak past. This is the land that gave the world genetic pioneer Gregor Mendel, chemist Jaroslav Heyrovský (1959 Nobel Prize in Chemistry), and immunologist Peter Medawar (1960 Nobel in Physiology). Yet the Czech scientific community today navigates the complex legacy of communist-era research structures and the challenges of post-1989 market transition.

The country invests approximately 2.0% of GDP in R&D-significantly higher than most Central European peers and approaching the EU average of 2.1%. The Czech Academy of Sciences operates dozens of research institutes covering fields from molecular biology to astrophysics, while Charles University in Prague (founded 1348) and Masaryk University in Brno anchor academic research. Czech scientists maintain strength in traditional areas like materials science, chemistry, and physics, and increasingly in computer science and engineering.

But Czech science faces a crisis of renewal. The research community skews old-many senior scientists trained in the Soviet era, and institutional cultures resist reform. Salaries for researchers remain low compared to Western Europe, fueling brain drain. Talented Czech scientists often pursue PhDs and careers in Germany, the UK, or the US, with limited incentive to return. EU membership provides access to Horizon Europe funding, but bureaucratic obstacles and limited English proficiency among older researchers hinder full participation.

The Czech Republic's thriving manufacturing sector, particularly automotive and machinery, creates demand for applied research and engineering talent. The STEM education system is solid, emphasizing mathematics and technical fields, though university quality is uneven. Recent governments have recognized the need to increase R&D investment and reform academic institutions, but progress is slow. Whether the Czech Republic can leverage its scientific heritage, EU integration, and industrial base to build a modern innovation economy-or whether it settles into a comfortable but unremarkable middle tier-remains to be seen.',
    issues: [
      'Aging research community and slow institutional reform',
      'Brain drain to Western Europe and North America',
      'Academic salaries uncompetitive with Western Europe',
      'Bureaucratic obstacles to EU research funding access',
      'English proficiency gap among older generation limiting collaboration',
    ],
  },
  'Democratic Republic of Congo': {
    summary: 'The Democratic Republic of Congo's scientific capacity is a casualty of decades of conflict, kleptocracy, and state failure. Here lies one of the world's most biodiverse countries-rainforests harbor undiscovered species, mineral wealth includes rare earths essential for modern technology, and tropical diseases endemic to Central Africa demand research. Yet DRC invests essentially nothing in science. R&D spending is below 0.1% of GDP, most research institutions are defunct, and the country's few remaining scientists work in isolation with almost no resources.

The University of Kinshasa and the University of Lubumbashi were once respectable institutions during the early post-independence years. Today they are shadows-professors go unpaid for months, laboratories lack basic equipment, libraries hold no recent journals. Congolese scientists studying their own country's biodiversity must collaborate with (and are often overshadowed by) foreign researchers from Europe and North America. The Institut National de Recherche Biomédicale conducts crucial work on Ebola, mpox, and other diseases, but operates largely through international donor funding, not domestic support.

The human cost is immeasurable. Bright students who might become scientists instead flee abroad if they can, or abandon science for more immediately remunerative paths. The DRC has effectively exported its scientific potential-Congolese doctors, engineers, and researchers work in Belgium, France, Canada, South Africa, contributing to those countries' research while DRC's own capacity atrophies. The STEM education system is catastrophically underfunded, with schools lacking textbooks, laboratories, even consistent electricity.

Yet the DRC's research potential is extraordinary. Its rainforests may harbor cures for diseases, its minerals are essential for green energy transition, its experience with epidemics holds lessons for global health. International institutions like the Gorilla Doctors and various tropical disease researchers work in DRC, but in isolation from domestic scientific community. Rebuilding Congolese science would require sustained peace, massive investment in education and infrastructure, and decades of patient institution-building. None of this appears imminent.',
    issues: [
      'Near-zero R&D investment (well below 0.1% GDP)',
      'Collapsed research institutions and infrastructure',
      'Complete brain drain - scientists leaving or abandoning field',
      'STEM education system catastrophically underfunded',
      'Research on DRC conducted by foreigners, not domestic scientists',
    ],
  },
  'Denmark': {
    summary: 'Denmark punches far above its weight in global science. This nation of under six million invests approximately 3.0% of GDP in research and development-among the world's highest rates. The returns are impressive: Danish researchers contribute disproportionately to fields like renewable energy, quantum computing, diabetes research, and particle physics. The country has produced thirteen Nobel Prize winners, most recently Morten Meldal in Chemistry (2022) for click chemistry.

The University of Copenhagen, the Technical University of Denmark (DTU), and Aarhus University form the backbone of Danish research, combining strong fundamental science with applied innovation. Denmark's pharmaceutical sector, led by Novo Nordisk's groundbreaking work on diabetes and obesity treatments, demonstrates successful translation of research into economic value. Danish physicists contributed to CERN's Large Hadron Collider, Danish climate scientists study ice core data from Greenland revealing millennia of climate history, and Danish engineers pioneer wind energy technology-Vestas and Ørsted exemplify how research drives industrial leadership.

Denmark's scientific success stems from sustained public investment, strong university-industry collaboration, and cultural values emphasizing education and innovation. The STEM education system is world-class, balancing rigor with creativity, and Danish universities attract international talent. Government science policy is stable across political cycles, providing predictable funding and strategic priorities. The country actively combats brain drain by offering competitive salaries, excellent research infrastructure, and quality of life that retains Danish scientists and attracts foreign researchers.

Yet challenges loom. Denmark's small population limits the absolute scale of its research enterprise. Competition from larger EU countries and the United States for top talent is fierce. Recent debates around immigration policy and EU skepticism could impact international collaboration and recruitment. Maintaining R&D investment at 3% GDP requires political will as populations age and social spending pressures mount. Still, Denmark's model-stable funding, strategic focus, openness to collaboration-offers lessons for countries aspiring to build innovation economies.',
    issues: [
      'Small population limiting absolute scale of research enterprise',
      'Competition from larger countries for top scientific talent',
      'Sustaining 3% GDP R&D investment amid aging population',
      'Immigration policy debates potentially impacting researcher recruitment',
      'Dependence on international collaboration requiring continued openness',
    ],
  },
  'Dominican Republic': {
    summary: 'The Dominican Republic's scientific ambitions are nascent and fragile. This Caribbean nation of eleven million invests roughly 0.1% of GDP in research and development-among the world's lowest rates. Universities focus primarily on teaching, research infrastructure is minimal, and the concept of a scientific career barely exists outside medicine. Yet within these severe constraints, pockets of research emerge, particularly in tropical medicine, agriculture, and Caribbean ecology.

The Autonomous University of Santo Domingo (UASD), founded in 1538, is the Western Hemisphere's oldest university, but its research capacity is modest. The Institute of Tropical Medicine and the National Botanical Garden conduct studies relevant to Dominican challenges-dengue, Zika, sugarcane diseases, coral reef degradation. These efforts operate on shoestring budgets, often relying on international partnerships with US or European institutions. Dominican researchers study their own country's biodiversity and public health, but are vastly outnumbered and outfunded by visiting foreign scientists.

Brain drain is overwhelming. The Dominican Republic trains doctors, engineers, and scientists primarily for export-to the United States, Puerto Rico, Spain. Those who remain often abandon research for clinical practice (medicine) or private sector jobs (engineering) that offer sustainable livelihoods. Salaries for the handful of full-time researchers are low, equipment is outdated or absent, and grant funding is virtually nonexistent. The STEM education system emphasizes rote learning and credentialism over inquiry and critical thinking.

Recent economic growth has not translated into scientific investment. The government prioritizes tourism, infrastructure, and social spending over research, viewing science as a luxury rather than an engine of development. Civil society organizations and international donors occasionally fund specific projects-sustainable agriculture, disaster preparedness, marine conservation-but these are ad hoc, not part of a coherent scientific strategy. For the Dominican Republic to build genuine research capacity would require a fundamental shift in priorities, massive investment in education and infrastructure, and patient institution-building over decades.',
    issues: [
      'Near-zero R&D investment at 0.1% of GDP',
      'Brain drain - scientists leaving for US, Puerto Rico, Europe',
      'Minimal research infrastructure and funding',
      'STEM education emphasizes rote learning over inquiry',
      'Government viewing science as luxury, not development priority',
    ],
  },
  'Ecuador': {
    summary: 'Ecuador's scientific landscape mirrors its geography-rich in biodiversity and potential, but fragmented and challenging. The country invests approximately 0.4% of GDP in R&D, well below Latin American leaders but showing slow improvement. Ecuador's greatest scientific asset is also its most fragile: it contains portions of the Amazon rainforest, the high Andes, coastal ecosystems, and the Galápagos Islands-extraordinary living laboratories that attracted Charles Darwin and continue to draw researchers worldwide.

The National Polytechnic School in Quito and the University of Guayaquil lead domestic research, focusing on biodiversity, volcanology, seismic science, and agricultural innovation. The Galápagos Science Center, operated jointly with University of North Carolina, represents Ecuador's highest-profile research facility, studying evolution, conservation, and marine ecology. Ecuadorian scientists have documented new species, monitored volcanic activity (crucial for public safety in this seismically active country), and researched sustainable agriculture for small farmers. Yet most cutting-edge research on Ecuador's ecosystems is still conducted by foreign scientists.

Political instability and economic volatility undermine scientific development. Research funding fluctuates with commodity prices (oil, bananas, shrimp) and political priorities. The brief Rafael Correa presidency (2007-2017) saw ambitious investments in higher education and science, including scholarships for Ecuadorians to earn PhDs abroad with the expectation they'd return-but many didn't, and subsequent governments have scaled back these programs. Brain drain persists: talented Ecuadorian scientists often remain in Chile, Argentina, the US, or Europe after training.

STEM education is uneven-urban elite institutions produce capable graduates, but rural and public schools struggle with quality and resources. Ecuador recently launched initiatives in biotechnology, renewable energy (abundant hydropower potential), and sustainable tourism, but these remain small-scale. The scientific community is tiny, perhaps a few hundred active researchers, operating in relative isolation from international networks. Ecuador's scientific future hinges on political stability, sustained R&D investment, and reversing brain drain-none of which appear imminent.',
    issues: [
      'Low and volatile R&D funding at 0.4% GDP',
      'Brain drain - PhD recipients often not returning after foreign training',
      'Political instability disrupting long-term research planning',
      'Research on Ecuador ecosystems dominated by foreign scientists',
      'Small scientific community operating in relative isolation',
    ],
  },
  'Egypt': {
    summary: 'Egypt's scientific story is one of unrealized potential. This nation of over 100 million boasts ancient scholarly traditions-the Library of Alexandria was antiquity's great knowledge center-and modern Egypt has the Arab world's largest scientific community. Yet chronic underinvestment, political instability, and brain drain prevent Egypt from translating population and heritage into scientific leadership.

Egypt invests approximately 0.7% of GDP in R&D, low by international standards but the highest absolute spending in Africa after South Africa. Cairo University, Ain Shams University, and Alexandria University produce tens of thousands of graduates annually. Egyptian researchers work in fields from Egyptology (naturally) to renewable energy, from Nile River ecology to vaccine development. The government operates research institutes for agriculture, petroleum, nuclear energy, and more. During COVID-19, Egypt developed testing capacity and conducted clinical trials, demonstrating latent scientific capability.

Yet the system is deeply dysfunctional. Research institutes are bureaucratic and politicized, dominated by aging scientists who control resources and resist change. Salaries for researchers are low-many moonlight as private consultants or taxi drivers to survive. Equipment is often decades old, international journals are unaffordable, and publishing in high-impact journals is rare. Academic positions are awarded through patronage as much as merit. The Sisi government's authoritarian turn since 2013 has further restricted academic freedom and international collaboration.

Brain drain is severe and accelerating. Egypt trains doctors, engineers, and scientists who promptly leave for the Gulf states, Europe, or North America. The STEM education system produces large numbers but uneven quality-rote memorization prevails, critical thinking is discouraged. A few elite institutions (American University in Cairo, German University in Cairo, various private universities) offer higher quality but serve tiny fractions of students. Egypt has the population, the history, and the regional influence to lead Arab science, but lacks the governance, investment, and intellectual freedom to realize this potential.',
    issues: [
      'Low R&D investment at 0.7% GDP despite large population',
      'Severe and accelerating brain drain to Gulf, Europe, North America',
      'Authoritarian governance restricting academic freedom',
      'Dysfunctional, bureaucratic research institutions',
      'STEM education emphasizes rote memorization over critical thinking',
    ],
  },
  'El Salvador': {
    summary: 'El Salvador's scientific capacity is vestigial, the victim of civil war, poverty, and political instability. This small Central American nation of 6.5 million invests well under 0.1% of GDP in research and development-effectively nothing. There is no scientific tradition to speak of, no major research universities, no meaningful R&D infrastructure. The handful of Salvadoran scientists work in isolation or abroad, and the concept of a domestic research career is nearly nonexistent.

The University of El Salvador (UES), the country's largest and oldest, focuses almost entirely on teaching with minimal research capacity. What little research occurs involves agricultural science (coffee, sugarcane diseases), public health (dengue, Zika surveillance), and environmental studies (deforestation, water quality). These efforts are tiny, underfunded, and often dependent on international NGOs or foreign universities. Salvadoran researchers studying their own country's ecology or public health are vastly outnumbered by visiting scientists from the US or Europe.

The brain drain is absolute. Any Salvadoran with scientific ambitions who can possibly leave does so-to the United States primarily, but also to Costa Rica, Panama, or Mexico. The country's violent gang problem, poverty, and lack of opportunities mean even discussing "scientific careers" seems absurd when basic security and livelihoods are uncertain. The STEM education system is catastrophically weak outside a handful of private schools serving the elite. Public schools lack laboratories, qualified teachers, and often basic materials.

Recent governments under Nayib Bukele have prioritized security and Bitcoin experiments over scientific investment. There is no coherent science policy, no research funding agencies, no infrastructure for innovation. El Salvador would need fundamental state-building-political stability, economic development, massive education investment-before it could even begin to develop scientific capacity. The country's small size and limited resources mean it will likely remain dependent on importing technology and expertise for the foreseeable future.',
    issues: [
      'Essentially zero R&D investment (well below 0.1% GDP)',
      'Complete brain drain - no viable scientific careers domestically',
      'Minimal research infrastructure or universities',
      'STEM education catastrophically weak outside elite private schools',
      'Political priorities focused on security, not science or education',
    ],
  },
  'Estonia': {
    summary: 'Estonia's scientific transformation is perhaps Europe's most remarkable post-Soviet success story. This tiny Baltic nation of 1.3 million invests approximately 1.6% of GDP in R&D-above the EU new member average-and has built a modern, digitally-native research ecosystem from the ruins of Soviet institutions. Estonia's digital society, cyber defense expertise, and e-governance innovations make it a living laboratory for studying technology's societal impact.

The University of Tartu, founded in 1632, has evolved into a respectable research university, particularly strong in computer science, genetics, and environmental science. Tallinn University of Technology specializes in engineering and ICT. Estonian researchers contribute to European research networks, often punching above their weight in digital technologies, cyber security, and health informatics. The country leverages its unique digital infrastructure-e-residency, digital identity, paperless government-as both research subject and research tool.

Yet Estonia's scientific capacity faces structural limits. The tiny population means the absolute number of researchers is small, limiting critical mass in most fields. Brain drain is persistent-talented Estonian scientists are recruited to Finland, Germany, the UK, Silicon Valley. Salaries remain below Western European levels, though higher than other Baltic states. Estonia has successfully retained some talent by offering quality of life, modern infrastructure, and access to EU research funding, but competing with larger, richer countries remains difficult.

The STEM education system is world-class, consistently ranking among Europe's best in international assessments. Estonian students excel in mathematics and science, supported by modern digital learning tools and well-trained teachers. Government policy has been remarkably consistent and strategic, designating ICT and biotechnology as priority sectors and investing accordingly. Estonia's scientific future likely involves deepening specialization in digital technologies, cyber security, and niche areas where small size is not a disadvantage-quality over quantity, precision over scale.',
    issues: [
      'Tiny population limiting critical mass of researchers',
      'Persistent brain drain to larger, richer European countries',
      'R&D investment at 1.6% GDP, needs increase to compete',
      'Academic salaries lower than Western Europe',
      'Need for continued specialization in niches where scale doesn't matter',
    ],
  },
  'Ethiopia': {
    summary: 'Ethiopia's scientific emergence from extreme poverty is fragile but real. Africa's second-most populous nation has invested in higher education and research with newfound ambition, though starting from a catastrophically low base. R&D spending remains below 0.3% of GDP, but the trajectory has been upward. Ethiopia has built new universities at a breakneck pace-from a handful in the 1990s to over forty today-and sent thousands of students abroad for graduate training with the expectation they'll return and build research capacity.

Addis Ababa University, established in 1950, anchors Ethiopian science, conducting research in agriculture, public health, and Ethiopian biodiversity. The country's scientific priorities are dictated by development needs: improving subsistence agriculture, combating malaria and other diseases, managing water resources in a drought-prone region. Ethiopian researchers study indigenous crops like teff and enset, livestock diseases, and climate adaptation strategies. The Ethiopian Public Health Institute played crucial roles in responding to Ebola threats and COVID-19.

Yet Ethiopia's scientific development is imperiled by political instability. The Tigray War (2020-2022) devastated education and research in the north, destroyed university campuses, and killed or displaced researchers. Ethnic tensions, authoritarian governance, and periodic internet shutdowns undermine academic freedom and international collaboration. Brain drain is severe: Ethiopian doctors and scientists trained at public expense flee to Kenya, South Africa, the Gulf, or the West, seeking better pay and stability. Those who remain often work with obsolete equipment, limited funding, and unreliable infrastructure.

The STEM education system has expanded rapidly but quality is uneven. Primary education enrollment has soared, but teacher training and resources lag. Ethiopia's population growth (over 110 million and growing) creates both opportunity-a large potential scientific workforce-and challenge-ensuring quality education for millions. Whether Ethiopia can sustain scientific investment amid political crisis, or whether instability will derail its development ambitions once again, remains uncertain. The country's scientific future hangs on peace, governance, and sustained political will.',
    issues: [
      'Very low R&D investment (below 0.3% GDP)',
      'Political instability and Tigray War devastating research capacity',
      'Severe brain drain to Kenya, Gulf states, Western countries',
      'Rapid university expansion but uneven quality',
      'Infrastructure deficits - obsolete equipment, unreliable power',
    ],
  },
}

async function main() {
  console.log('🚀 Starting SCIENCE & RESEARCH summary generation (direct method)\n')
  console.log('Countries to process:', COUNTRIES.map(c => c.name).join(', '))
  console.log('\n' + '='.repeat(80) + '\n')

  let successCount = 0
  let errorCount = 0

  for (const location of COUNTRIES) {
    console.log('\n${'='.repeat(80)}')
    console.log('Processing: ${location.name}')
    console.log('='.repeat(80))

    try {
      const scienceData = SCIENCE_SUMMARIES[location.name]

      if (!scienceData) {
        console.log('⚠️  No science summary data for ${location.name} - skipping')
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

      console.log('📝 Summary: ${summary.length} characters')
      console.log('📋 Issues: ${issues.length}')
      console.log('📰 Top stories: ${topStories.length}')

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

      console.log('✅ Successfully saved science summary for ${location.name}')
      successCount++

      // Small delay to avoid overwhelming the database
      await new Promise((resolve) => setTimeout(resolve, 100))
    } catch (error) {
      console.error('❌ Error saving science summary for ${location.name}:', error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ SCIENCE & RESEARCH summary generation complete!')
  console.log('='.repeat(80))
  console.log('\n📊 Results:')
  console.log('   ✅ Successfully generated: ${successCount}')
  console.log('   ❌ Errors: ${errorCount}')
  console.log('   📝 Total countries: ${COUNTRIES.length}')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
