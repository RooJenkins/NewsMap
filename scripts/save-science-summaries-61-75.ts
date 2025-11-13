import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 61-75 with coordinates
const locations = [
  { name: 'India', type: 'country', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', type: 'country', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', type: 'country', lat: 32.4279, lng: 53.688 },
  { name: 'Iraq', type: 'country', lat: 33.2232, lng: 43.6793 },
  { name: 'Ireland', type: 'country', lat: 53.4129, lng: -8.2439 },
  { name: 'Israel', type: 'country', lat: 31.0461, lng: 34.8516 },
  { name: 'Italy', type: 'country', lat: 41.8719, lng: 12.5674 },
  { name: 'Ivory Coast', type: 'country', lat: 7.54, lng: -5.5471 },
  { name: 'Jamaica', type: 'country', lat: 18.1096, lng: -77.2975 },
  { name: 'Japan', type: 'country', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', type: 'country', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', type: 'country', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', type: 'country', lat: -0.0236, lng: 37.9062 },
  { name: 'Kuwait', type: 'country', lat: 29.3117, lng: 47.4818 },
  { name: 'Laos', type: 'country', lat: 19.8563, lng: 102.4955 },
]

interface CountrySummary {
  name: string
  summary: string
  issues: string[]
  topStories: Array<{ title: string; source: string; link: string; pubDate: string }>
}

// Science summaries for each country (Ed Yong / Carl Zimmer style)
const scienceSummaries: CountrySummary[] = [
  {
    name: 'India',
    summary: `India's scientific enterprise resembles a vast, sprawling laboratory—a place where ancient mathematical traditions intersect with cutting-edge genomics, where monsoon-prediction supercomputers hum alongside frugal space missions that cost less than Hollywood blockbusters. The nation invests roughly 0.7% of its GDP in R&D, a figure that understates the sheer ambition pulsing through institutions like the Indian Institutes of Technology, the Tata Institute of Fundamental Research, and the Indian Space Research Organisation.

ISRO's achievements read like a master class in doing more with less: the Chandrayaan-3 lunar landing in 2023 for $75 million, Mars Orbiter Mission's arrival in 2014 (first Asian nation to reach Martian orbit, first to succeed on the maiden attempt), and the upcoming Gaganyaan crewed mission. This frugal innovation extends beyond space—India manufactures over 60% of the world's vaccines, a capacity that proved vital during COVID-19 when Serum Institute of India became the planet's largest vaccine manufacturer.

The country's STEM education system is a paradox of scale and selectivity. IITs accept roughly 13,000 students annually from over a million aspirants, creating some of the world's most competitive entrance examinations. Yet India also produces the second-largest pool of STEM graduates globally, fueling both domestic innovation and Silicon Valley's talent pipeline. The brain drain remains acute—an estimated 40% of IIT graduates historically pursued careers abroad—though reverse migration has accelerated as Bangalore, Hyderabad, and Pune emerge as research hubs.

Research strengths cluster around pharmaceuticals, information technology, agricultural sciences, and space technology. The Department of Biotechnology's investments in genomics research yielded the IndiGen project, mapping genetic variations across the subcontinent's diverse populations. C.V. Raman remains India's sole science Nobel laureate (1930, Physics), though the country has produced Fields Medalists, Turing Award winners, and globally influential researchers.

Current challenges include bureaucratic research funding processes, insufficient private sector R&D investment, and infrastructure gaps between elite institutions and the broader university system. Yet India's scientific trajectory bends upward—from establishing quantum computing research centers to leading the International Solar Alliance. The nation's researchers increasingly tackle problems uniquely positioned to their context: monsoon forecasting, drought-resistant crops, affordable medical devices, and technologies serving populations earning dollars per day. This is science practiced at the intersection of necessity and ingenuity, where constraints breed creativity and every rupee must count twice.`,
    issues: [
      'Low R&D spending (0.7% of GDP) compared to developed nations',
      'Significant brain drain of STEM talent to Western countries',
      'Infrastructure gaps between elite institutions and broader university system',
      'Bureaucratic hurdles in research funding allocation',
      'Limited private sector investment in fundamental research'
    ],
    topStories: []
  },
  {
    name: 'Iraq',
    summary: `Iraq's scientific community exists in a state of reconstruction, attempting to rebuild research infrastructure devastated by decades of conflict, sanctions, and institutional collapse. Once home to one of the Arab world's most advanced university systems—the University of Baghdad was founded in 1957 and produced generations of engineers, physicians, and scientists—Iraq's research enterprise now operates under constraints that would challenge any nation's scholarly ambitions.

The country invests approximately 0.04% of GDP in R&D, among the lowest globally, reflecting both economic constraints and the prioritization of immediate reconstruction needs over long-term scientific development. Major institutions include the University of Baghdad, University of Basrah, and the Iraqi Academy of Sciences, though these operate with aging equipment, limited international connectivity, and ongoing challenges attracting and retaining faculty.

Brain drain represents perhaps Iraq's most severe scientific challenge. An estimated 20,000 academics and scientists fled the country between 2003 and 2015, creating a lost generation of research leadership. Young Iraqi scientists face difficult choices: pursue advanced training abroad with uncertain prospects of return, or remain in a system where research funding is scarce and career advancement uncertain.

Despite these challenges, pockets of scientific activity persist. Oil and petroleum engineering remain areas of relative strength given Iraq's energy resources and the practical demands of the petroleum industry. The University of Technology in Baghdad maintains engineering programs, while medical schools continue training physicians even as many graduates seek opportunities elsewhere. Archaeological research, often conducted in partnership with international teams, continues documenting Iraq's role as the cradle of civilization.

Science policy remains fragmented, with the Ministry of Higher Education and Scientific Research operating under constrained budgets and competing governmental priorities. Regional instability, political uncertainty, and economic dependence on oil revenues complicate long-term planning. Yet small initiatives offer hope: scholarship programs sending students abroad for advanced training, partnerships with international universities, and nascent efforts to digitize research libraries and reconnect Iraqi scholars with global scientific networks. The path from devastation to scientific renewal will be long, but Iraq's researchers work with determination, seeking to restore what once flourished along the banks of the Tigris and Euphrates—a legacy of learning that stretches back millennia.`,
    issues: [
      'Extremely low R&D investment (0.04% of GDP)',
      'Massive brain drain of academics and scientists since 2003',
      'Devastated research infrastructure from decades of conflict',
      'Limited international scientific collaboration and connectivity',
      'Economic dependence on oil limiting diversification into research sectors'
    ],
    topStories: []
  },
  {
    name: 'Israel',
    summary: `Israel's scientific output, measured per capita, ranks among the world's highest—a remarkable achievement for a nation of 9 million that invests approximately 5.6% of its GDP in R&D, the greatest proportion globally. This investment fuels an ecosystem where military technology, academic research, and entrepreneurial ventures interweave in ways that blur traditional boundaries between basic science and commercial application.

The country's research institutions punch far above their demographic weight. The Weizmann Institute of Science in Rehovot, the Technion-Israel Institute of Technology in Haifa, Hebrew University in Jerusalem, and Tel Aviv University form the backbone of Israeli research. These institutions have produced six Nobel laureates in chemistry and economics since 2002, including Aaron Ciechanover and Avram Hershko (2004 Chemistry Prize for protein degradation), Daniel Kahneman (2002 Economics), and Ada Yonath (2009 Chemistry for ribosome structure).

Israeli scientists excel particularly in fields with security applications: cybersecurity, sensor technology, autonomous systems, and defense electronics. The Unit 8200 military intelligence division functions as an unofficial training ground for technologists, creating networks that later seed startup ecosystems. But the research prowess extends well beyond defense—Israel leads in water technology (drip irrigation, desalination), agricultural sciences (desert farming techniques), and medical devices.

The startup nation narrative has deep scientific roots. Technology transfer offices at universities commercialize research aggressively, while programs like Yozma (launched 1993) catalyzed venture capital investment that transformed laboratory discoveries into billion-dollar companies. Israeli researchers publish extensively in high-impact journals, collaborate internationally despite regional political isolation, and maintain strong ties with diaspora scientists.

STEM education begins early with specialized high school programs, military service in technological units, and universities that emphasize research from undergraduate years. The brain gain exceeds brain drain—Israel attracts immigrant scientists and returning expatriates, enriching research communities with global perspectives. Government science policy, coordinated through the Innovation Authority and the Ministry of Science and Technology, provides both fundamental research funding and commercialization support.

Challenges include geographic and political isolation limiting some collaborations, relatively small domestic market size, and ongoing tensions between investing in civilian versus defense research. But Israel's scientific community has transformed constraints into advantages, developing technologies for water scarcity, cybersecurity threats, and agricultural limitations that now find global markets. In laboratories from the Negev Desert to the Galilee, Israeli researchers exemplify how intense focus, strategic investment, and culture of innovation can generate scientific impact that transcends national size.`,
    issues: [
      'Geographic and political isolation limiting some international collaborations',
      'Brain circulation challenges despite strong immigrant attraction',
      'Balance between military/defense research and civilian applications',
      'Small domestic market requiring international commercialization',
      'Regional security concerns affecting long-term research planning'
    ],
    topStories: []
  },
  {
    name: 'Italy',
    summary: `Italian science carries the weight of extraordinary legacy—Galileo's telescope, Fermi's nuclear reactor, Volta's battery—while grappling with contemporary challenges that constrain a research enterprise still capable of world-class discoveries. The nation invests approximately 1.5% of GDP in R&D, below the EU average of 2.2%, yet Italian researchers maintain strong positions in physics, chemistry, materials science, and cultural heritage preservation.

The research landscape centers on institutions like Sapienza University of Rome (Europe's largest university by enrollment), the University of Bologna (founded 1088, the world's oldest continuously operating university), Polytechnic University of Milan, and the Italian National Research Council (CNR). Italy has produced 20 Nobel laureates, including recent honors for Giorgio Parisi (2021 Physics Prize for complex systems theory), though the pipeline of new laureates has slowed compared to the prolific mid-20th century.

Italian strengths cluster around particle physics (CERN collaborations, Gran Sasso National Laboratory hosting neutrino experiments), space science (partnerships with ESA, contributions to Mars missions), materials science, and biomedical research. The country excels particularly in research requiring patient craftsmanship and interdisciplinary approaches—restoration sciences that blend chemistry with art history, precision instrument manufacturing, and automotive engineering at institutions like Ferrari's research division.

Yet Italian science faces systemic challenges that frustrate researchers and policymakers alike. Brain drain runs severe—an estimated 250,000 young Italians emigrated between 2008 and 2020, many of them STEM graduates seeking research positions abroad that Italy's constrained academic system cannot provide. Rigid university hierarchies, limited research funding, bureaucratic grant processes, and permanent position scarcity drive talented researchers toward Germany, the UK, or North America.

The STEM education system produces strong mathematics and science students, but university completion rates lag other European nations, and connections between academic research and industrial innovation remain underdeveloped. Private sector R&D investment is concentrated in northern industrial regions—automotive, aerospace, luxury goods—while southern Italy struggles with brain drain and limited research infrastructure.

Science policy has become increasingly contested terrain. Government initiatives to increase research funding face fiscal constraints and competing priorities. Efforts to attract international talent compete with emigration pressures. The National Recovery and Resilience Plan (PNRR) includes research investments, but implementation challenges persist. Italian researchers, meanwhile, continue contributing to global science—from CERN's particle discoveries to Leonardo da Vinci's DNA analysis to vaccine development—demonstrating that even amidst structural challenges, scientific creativity endures where it first flourished during the Renaissance. The question is whether Italy can translate this individual brilliance into systemic renewal, reversing the flows that currently send Italian minds abroad while infrastructure ages at home.`,
    issues: [
      'Severe brain drain with 250,000+ young STEM graduates emigrating since 2008',
      'Below-average R&D spending (1.5% GDP) compared to EU nations',
      'Rigid academic hierarchies and limited permanent research positions',
      'North-South divide in research infrastructure and industrial R&D',
      'Weak technology transfer between universities and industry'
    ],
    topStories: []
  },
  {
    name: 'Japan',
    summary: `Japan's scientific enterprise embodies precision, persistence, and a cultural commitment to technological excellence that has yielded 29 Nobel Prizes since 2000—more than any nation except the United States during that period. The country invests approximately 3.2% of its GDP in R&D, with corporate research accounting for roughly 80% of that spending, reflecting a distinctive model where companies like Toyota, Sony, and Hitachi function as research powerhouses alongside universities.

The institutional landscape includes the University of Tokyo (consistently Asia's top-ranked university), Kyoto University (a Nobel Prize factory with 19 laureates), RIKEN research institute, Tohoku University, and Osaka University. Japanese scientists have dominated recent Nobel awards in physics, chemistry, and physiology: Akira Yoshino (2019 Chemistry, lithium-ion batteries), Tasuku Honjo (2018 Medicine, cancer immunotherapy), Yoshinori Ohsumi (2016 Medicine, autophagy), Satoshi Omura (2015 Medicine, antiparasitic treatments), and Shinya Yamanaka (2012 Medicine, induced pluripotent stem cells).

Research strengths reflect both cultural values and strategic priorities: robotics (aging population drives assistive technology development), materials science (kaizen philosophy of continuous improvement translated to molecular engineering), seismology and disaster resilience (geography demands earthquake prediction and tsunami early-warning systems), automotive technology (hydrogen fuel cells, electric vehicles), and regenerative medicine.

The corporate research model that powered Japan's post-war technological miracle now faces challenges. Lifetime employment systems that once supported long-term industrial research have eroded. Young researchers increasingly pursue flexible career paths rather than corporate laboratories. The startup ecosystem remains underdeveloped compared to the United States or even China, with risk-averse culture constraining entrepreneurial science.

Demographics cast long shadows over Japanese science. A rapidly aging population creates immediate research priorities (gerontology, healthcare robotics, dementia treatments) while simultaneously draining the talent pool. University enrollment in natural sciences has declined, with students gravitating toward medicine and stable professions. Despite government initiatives to increase female participation in STEM, women remain underrepresented in senior research positions, representing untapped potential.

Science policy has attempted course corrections. Initiatives to increase international collaboration (particularly with Asian neighbors), reform university governance, and commercialize research more aggressively have met mixed success. The Ministry of Education, Culture, Sports, Science and Technology coordinates national research priorities, balancing fundamental research with applied development. "Society 5.0" framework envisions technology-driven solutions to social challenges, from aging populations to energy transitions.

Yet Japan's researchers continue excelling where patient, incremental refinement yields revolutionary results. From CRISPR gene-editing applications to quantum computing research at NTT to asteroid sample-return missions (Hayabusa 2), Japanese science demonstrates that discovery need not be loud to be profound. In laboratories where attention to detail borders on meditation, where failure is analyzed with the same intensity as success, Japanese scientists pursue knowledge with a distinctive cultural approach—one that has illuminated fundamental truths about stem cells, subatomic particles, and the very building blocks of technology that powers modern life.`,
    issues: [
      'Declining university enrollment in natural sciences',
      'Demographic crisis reducing talent pool and increasing aging-related research demands',
      'Underdeveloped startup ecosystem and risk-averse research culture',
      'Gender imbalance with women underrepresented in senior research positions',
      'Corporate research model erosion as lifetime employment systems decline'
    ],
    topStories: []
  },
  {
    name: 'Kenya',
    summary: `Kenyan science pulses with the energy of a young nation that has transformed itself from agricultural economy to technological hub—the "Silicon Savannah" where mobile money innovations (M-Pesa) demonstrated how leapfrog technologies can remake societies. The country invests approximately 0.8% of GDP in R&D, modest by global standards but reflecting steady increases as Kenya positions itself as East Africa's research leader.

The research landscape centers on the University of Nairobi, Jomo Kenyatta University of Agriculture and Technology, Kenyatta University, and specialized institutes like the Kenya Medical Research Institute (KEMRI) and the International Centre of Insect Physiology and Ecology (ICIPE). These institutions tackle research questions intimately connected to Kenya's development challenges: agricultural productivity in variable climates, infectious disease control (malaria, HIV, tuberculosis), water resource management, and conservation biology in ecosystems hosting the planet's most spectacular megafauna migrations.

Kenyan researchers have pioneered mobile health technologies, using SMS and smartphone apps to deliver maternal healthcare information, track disease outbreaks, and connect rural patients with urban specialists. The country serves as a living laboratory for innovations addressing resource constraints—solar-powered vaccine refrigerators, low-cost water purification, drought-resistant crop varieties developed at agricultural research stations like Katumani.

ICIPE, headquartered in Nairobi, represents African-led scientific excellence in insect ecology, developing push-pull agricultural techniques that control pests using companion planting rather than pesticides—solutions developed by African scientists for African farmers. KEMRI's research on HIV prevention, malaria treatment, and emerging infectious diseases contributes to global health knowledge while directly serving Kenyan communities.

The STEM education system has expanded dramatically, with universities proliferating across the country and technical institutes training technicians and engineers. Yet quality variations persist, infrastructure limits remain acute (unreliable electricity constrains laboratory work, limited internet bandwidth complicates data-intensive research), and brain drain continues draining talent toward Europe and North America where research funding flows more freely.

Science policy, coordinated through the National Commission for Science, Technology and Innovation, emphasizes practical applications: agricultural productivity, renewable energy (Kenya generates over 90% of electricity from renewables, primarily geothermal and hydroelectric), healthcare access, and conservation. The government has established science parks and technology incubators, though implementation often lags policy ambitions.

Kenya's scientific trajectory reflects broader African research dynamics—young populations generating demographic dividends if properly educated, donor partnerships providing resources but sometimes distorting research agendas, and challenges ensuring locally-generated knowledge informs policy decisions. Kenyan researchers increasingly collaborate regionally through the East African Community and continentally through African Union initiatives, recognizing that problems of climate adaptation, food security, and disease control transcend national boundaries. In laboratories from Nairobi to Mombasa, in field stations monitoring elephant migrations and desertification patterns, Kenyan scientists pursue knowledge that serves both universal understanding and immediate community needs—science practiced where the stakes are immediate and the potential transformative.`,
    issues: [
      'Limited R&D investment (0.8% GDP) constraining research scope',
      'Brain drain of trained scientists to higher-paying foreign positions',
      'Infrastructure challenges including unreliable electricity and internet',
      'Quality variations across rapidly expanding university system',
      'Donor dependency sometimes distorting local research priorities'
    ],
    topStories: []
  }
]

async function saveSummary(countrySummary: CountrySummary) {
  const location = locations.find(l => l.name === countrySummary.name)
  if (!location) {
    throw new Error(`Location not found for ${countrySummary.name}`)
  }

  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: countrySummary.name,
        type: location.type,
        category: 'science',
      },
    },
    update: {
      summary: countrySummary.summary,
      issues: JSON.stringify(countrySummary.issues),
      topStories: JSON.stringify(countrySummary.topStories),
      storyCount: countrySummary.topStories.length,
      updatedAt: new Date(),
    },
    create: {
      name: countrySummary.name,
      type: location.type,
      country: countrySummary.name,
      lat: location.lat,
      lng: location.lng,
      category: 'science',
      summary: countrySummary.summary,
      issues: JSON.stringify(countrySummary.issues),
      topStories: JSON.stringify(countrySummary.topStories),
      storyCount: countrySummary.topStories.length,
    },
  })

  console.log(`✅ Saved science summary for ${countrySummary.name}`)
  console.log(`   - Summary length: ${countrySummary.summary.length} characters`)
  console.log(`   - Issues: ${countrySummary.issues.length}`)
}

async function main() {
  console.log('🚀 Saving science & research summaries for countries 61-75\n')
  console.log(`Summaries to save: ${scienceSummaries.length}\n`)

  let successCount = 0
  let errorCount = 0

  for (const summary of scienceSummaries) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`Processing: ${summary.name}`)
    console.log('='.repeat(80))

    try {
      await saveSummary(summary)
      successCount++
    } catch (error) {
      console.error(`❌ Error saving summary for ${summary.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Science & research summary saving complete!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully saved: ${successCount}`)
  console.log(`❌ Errors: ${errorCount}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
