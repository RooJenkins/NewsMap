import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const scienceSummaries = [
  {
    name: 'Iran',
    summary: `Science in Iran operates within a paradox—a nation that produces more scientific papers than any other country in the Middle East, yet struggles under sanctions that choke access to journals, equipment, and international collaboration. The story is one of brilliant researchers working around obstacles that would paralyze less determined systems.

Tehran, Isfahan, and Shiraz host universities where young scientists crowd into laboratories, many trained abroad but drawn home by nationalism or family ties. Iran's government invests heavily in STEM education, producing a flood of engineering and medical graduates each year. Women make up more than half of university students in scientific fields, a statistic that surprises Western observers but reflects decades of policy emphasis on technical education. The country ranks among the top twenty globally in total research output, with particular strength in chemistry, materials science, and nanotechnology.

Yet the brilliance exists in isolation. Sanctions prevent Iranian researchers from purchasing reagents, specialized equipment, or even subscribing to many international journals. Scientists develop workarounds—synthesizing their own compounds, building equipment from scratch, relying on connections with diaspora colleagues to smuggle in supplies. Pre-print servers and open-access publishing become lifelines. The brain drain accelerates each year as talented young researchers flee for Europe, North America, or the Gulf states, where their work won't be constrained by geopolitical tensions.

Nuclear research remains both Iran's scientific showcase and its political albatross. The country maintains legitimate nuclear research programs—reactor development, medical isotope production, materials science—but international suspicion clouds every achievement. Iranian physicists publish in quantum computing and particle physics, yet their work draws less attention than their government's enrichment facilities. Earthquake engineering thrives by necessity in this seismically active region, with researchers developing innovative building techniques, though implementation lags behind knowledge.

The Royan Institute for stem cell research represents Iran's scientific ambitions—world-class facilities, cutting-edge work on regenerative medicine, publications in Nature and Cell. Yet many of its researchers eventually leave, frustrated by funding uncertainty, international isolation, and the growing gap between Iran's scientific capability and its global integration. Iranian science is world-class research conducted in partial darkness, brilliant but constrained, ambitious but isolated.`,
    issues: [
      'International sanctions blocking access to journals, equipment, and research materials',
      'Accelerating brain drain as top scientists emigrate to Europe, North America, Gulf states',
      'Political isolation preventing meaningful international collaboration and conference participation',
      'Funding volatility tied to oil revenues and economic sanctions undermining long-term projects',
      'Nuclear research achievements overshadowed by international suspicion and political tensions'
    ]
  },
  {
    name: 'Ireland',
    summary: `Ireland's scientific transformation over the past three decades reads like a case study in how a small nation can punch above its weight. What was once an agricultural economy with minimal research infrastructure has become a European hub for biotechnology, pharmaceutical development, and data science—powered by foreign investment, EU funding, and a strategic bet on education.

Trinity College Dublin and University College Dublin anchor the research ecosystem, but the real story unfolds in the enterprise zones clustered around Dublin, Cork, and Galway. Here, multinational pharmaceutical giants like Pfizer, Johnson & Johnson, and Novartis maintain major R&D operations alongside a vibrant indigenous biotech sector. Ireland produces more scientific publications per capita than almost any European nation, with particular strength in immunology, genetics, and clinical research. The country's role as a testing ground for COVID-19 vaccines reflected decades of investment in clinical trial infrastructure and regulatory expertise.

Government funding through Science Foundation Ireland, established in 2000, transformed the research landscape by targeting specific areas of strategic advantage—biotechnology, information technology, sustainable energy. The agency's model of competitive grants, international peer review, and industry collaboration drew researchers from across Europe and beyond. Irish universities recruited aggressively, building research centers that could compete for prestigious European Research Council grants. The CÚRAM Centre for Research in Medical Devices and the Tyndall National Institute represent this strategy at work—world-class facilities studying neural interfaces, biosensors, and photonics.

Yet challenges persist beneath the success story. The cost of living crisis, especially housing shortages in Dublin and Cork, makes it difficult to recruit and retain young researchers. Brexit disrupted established patterns of UK-Irish scientific collaboration, though new EU programs have partially filled the gap. The pharmaceutical industry's dominance means Irish science sometimes feels like an outsourced R&D department rather than an independent ecosystem. Concerns grow about overreliance on foreign direct investment and whether indigenous scientific culture can sustain itself if multinationals relocate.

Climate research gains urgency as Ireland confronts its agricultural emissions—the highest per capita in Europe. Researchers at Teagasc, the agriculture and food development authority, work on breeding low-methane cattle, developing carbon sequestration techniques, and rethinking farming practices. It's science with immediate political implications, where findings about livestock emissions clash with cultural identity and economic interests. Irish science thrives at the intersection of global capital, European integration, and local necessity—prosperous but vulnerable, world-class but dependent.`,
    issues: [
      'Housing crisis and cost of living threatening ability to recruit and retain researchers',
      'Brexit disrupting established UK-Irish research collaboration and funding patterns',
      'Overreliance on multinational pharmaceutical R&D rather than indigenous research culture',
      'Agricultural emissions research clashing with farming interests and cultural identity',
      'Funding vulnerability if foreign direct investment patterns shift away from Ireland'
    ]
  },
  {
    name: 'Ivory Coast',
    summary: `Science in Côte d'Ivoire unfolds at the intersection of colonial legacy, tropical abundance, and West African ambition. The country's research infrastructure remains modest, clustered mainly in Abidjan and Yamoussoukro, yet its natural resources—vast forests, diverse ecosystems, agricultural wealth—make it an essential laboratory for understanding tropical systems.

The Centre Suisse de Recherches Scientifiques, established in 1951, stands as an artifact of colonial cooperation that evolved into something more complex. Swiss and Ivorian scientists work side by side studying tropical diseases, ecology, and anthropology—a model of North-South collaboration that predates such language. More recent institutions like the Université Félix Houphouët-Boigny and the Institut National Polytechnique reflect post-independence aspirations, though chronic underfunding and political instability have constrained their development.

Cocoa research defines Ivorian science in ways both inspiring and constraining. As the world's largest cocoa producer, the country hosts the Centre National de Recherche Agronomique, where scientists work on disease-resistant varieties, sustainable farming practices, and climate adaptation. The research is vital—cocoa swollen shoot virus could devastate the industry—yet it reflects how developing nations often pursue research tied directly to export commodities rather than basic science. International partnerships bring resources but also external priorities, with European chocolate companies funding studies that serve their supply chain interests.

Public health research confronts endemic challenges—malaria, HIV, emerging infectious diseases. The Institut Pasteur de Côte d'Ivoire conducts surveillance and vaccine trials, recently gaining recognition for work on Ebola preparedness. Yet the 2020-2021 Ebola outbreak revealed gaps in laboratory capacity and disease surveillance. Talented researchers often complete PhD programs abroad—in France, Belgium, or increasingly China—and face difficult choices about returning to limited funding and equipment.

Environmental research grows more urgent as forest cover shrinks. Ivory Coast has lost over 80% of its forests since independence, with implications for biodiversity, climate, and water resources. Researchers at the Université Nangui Abrogoua study forest regeneration, wildlife conservation, and sustainable development, often in partnership with international conservation organizations. The science is excellent; the political will to act on it remains sporadic. Ivorian science operates with determination but scarcity, ambition constrained by resources, potential limited by instability.`,
    issues: [
      'Chronic underfunding and political instability disrupting long-term research programs',
      'Brain drain as researchers trained abroad decline to return to limited opportunities',
      'Research agenda dominated by export commodities rather than diversified basic science',
      'Laboratory and equipment shortages limiting ability to respond to disease outbreaks',
      'Forest loss accelerating faster than conservation research can inform effective policy'
    ]
  },
  {
    name: 'Jamaica',
    summary: `Jamaica's scientific story is written in the grammar of smallness—a Caribbean island of three million people conducting research with limited resources but distinctive strengths, particularly in areas where local conditions create natural experiments. The University of the West Indies at Mona anchors the island's research ecosystem, its laboratories and libraries fighting against the gravitational pull of larger, wealthier nations.

Athletic performance science represents Jamaica's most internationally visible research domain, and for good reason. Researchers study the genetic, physiological, and cultural factors behind the island's extraordinary sprinting dominance. Is it genetics? Training methods? Diet? Altitude of certain regions? The scientific answer remains elusive, but the investigation has advanced understanding of muscle fiber composition, anaerobic capacity, and biomechanics. The research gains attention because Jamaica's Olympic success demands explanation, though scientists remain cautious about simplistic genetic determinism.

Cannabis research emerged as a strategic opportunity following decriminalization. The country established a Cannabis Licensing Authority and research programs investigating medical applications, agricultural optimization, and economic potential. Scientists study traditional Rastafarian uses alongside pharmaceutical development, navigating complex terrain between cultural practice, medical research, and economic opportunity. International partnerships have brought resources, though concerns persist about biopiracy and whether local communities will benefit from commercialization.

Marine biology and ecology thrive in necessity. Jamaica's coral reefs, devastated by overfishing, pollution, and climate change, become laboratories for understanding ecosystem collapse and resilience. The Discovery Bay Marine Laboratory, established in the 1960s, documented the transformation of Caribbean reefs from coral-dominated to algae-dominated systems—research that would prove essential for global reef science. Current work focuses on restoration techniques, coral nurseries, and adaptation strategies, though implementation struggles against economic pressures and political short-termism.

Public health research confronts chronic disease patterns—high rates of hypertension, diabetes, and obesity reflecting dietary changes and urbanization. The Caribbean Institute for Health Research coordinates studies on disease prevention, but funding remains precarious. Brain drain accelerates as medical researchers and physicians emigrate to the US, UK, and Canada, drawn by salaries and opportunities impossible to match locally. Jamaica produces talented scientists, then exports them—a pattern of intellectual extraction that mirrors colonial-era resource exploitation. The island's science is real but fragile, ambitious but constrained by scale.`,
    issues: [
      'Brain drain accelerating as researchers and physicians emigrate to US, UK, Canada',
      'Chronic underfunding threatening laboratory maintenance and equipment purchases',
      'Cannabis research benefits uncertain for local communities despite international partnerships',
      'Reef restoration science advancing faster than political will to implement protective policies',
      'Small scale limiting ability to sustain specialized research programs and attract major grants'
    ]
  },
  {
    name: 'Jordan',
    summary: `Science in Jordan operates under constraints that would daunt less resilient nations—water scarcity, refugee crises, regional instability, limited natural resources—yet the kingdom has cultivated a reputation as the Arab world's most education-focused society. Research may be modest in scale, but it reflects strategic priorities and determination to build knowledge economies in hostile environments.

The Jordan University of Science and Technology, established in Irbid in 1986, embodies national aspirations. Unlike older institutions shaped by Baathist ideology or petroleum wealth, JUST was designed from inception as a technical university, emphasizing engineering, medicine, and applied sciences. The campus draws students from across Jordan and the broader Middle East, creating a research culture that punches above its funding weight. Publications focus on practical concerns—solar energy, water treatment, agricultural efficiency—sciences of necessity rather than curiosity.

Water research dominates as existential imperative. Jordan ranks among the world's most water-scarce countries, a situation worsened by Syrian refugee influx and climate change. Scientists at the Water, Energy and Environment Center develop desalination technologies, optimize irrigation systems, and study transboundary water management. The research is excellent because it must be—Jordan's survival depends on wringing every drop from limited aquifers and the Jordan River's diminished flow. International partnerships bring funding, but regional politics complicate collaboration on shared water resources.

The Synchrotron-light for Experimental Science and Applications in the Middle East (SESAME) represents both scientific achievement and diplomatic aspiration. Modeled on CERN, this particle accelerator facility in Allan brings together researchers from Israel, Palestine, Iran, Pakistan, Turkey, and Arab states—nations that barely maintain diplomatic relations. Scientists study protein structures, cultural heritage, materials science, and nanotechnology using powerful X-ray beams, proving that scientific cooperation can transcend political animosity. Yet funding remains precarious, and usage rates lag behind potential.

Archaeology and cultural heritage research leverage Jordan's extraordinary historical sites—Petra, Jerash, and countless other antiquities. Universities collaborate with international teams on excavation, preservation, and heritage science, though the work sometimes feels like managing museums rather than advancing knowledge. The Palestinian refugee presence and Bedouin displacement create sensitive research terrain, where anthropology and sociology navigate political constraints. Jordanian science is strategic and pragmatic, shaped by scarcity, oriented toward survival, occasionally achieving moments of transcendent cooperation.`,
    issues: [
      'Water scarcity driving narrow research focus and limiting basic science diversification',
      'SESAME facility operating below capacity due to funding constraints and regional tensions',
      'Brain drain as scientists and engineers pursue opportunities in Gulf states and West',
      'Research agenda constrained by sensitivity around refugees, Bedouin, and Palestinian issues',
      'Funding dependence on foreign aid creating vulnerability and limiting research independence'
    ]
  },
  {
    name: 'Kazakhstan',
    summary: `Kazakhstan's scientific landscape is haunted by Soviet grandeur and uncertain about its post-independence identity. The country inherited impressive research infrastructure—nuclear facilities, space launch sites, agricultural research stations—but decades of underfunding and brain drain have hollowed out many institutions. Recent oil wealth and government ambition have sparked revival efforts, though the path forward remains contested.

Nazarbayev University, established in 2010 in the gleaming capital Nur-Sultan (formerly Astana), represents the state's attempt to leapfrog into global research competitiveness. Built with oil revenues and partnerships with Duke, Cambridge, and other Western universities, the campus offers world-class facilities, international faculty, and English-language instruction—a deliberate break from the Russian-language Soviet legacy. Research focuses on energy, materials science, and engineering, reflecting both government priorities and the country's resource wealth. Yet questions persist about sustainability and whether this elite institution can transform the broader scientific ecosystem.

Nuclear and particle physics maintain peculiar strength, legacy of Kazakhstan's Soviet role as nuclear testing ground and uranium supplier. The Institute of Nuclear Physics in Almaty continues research on radiation physics, isotope production, and materials science, though stripped of its Cold War prominence. The Baikonur Cosmodrome, leased to Russia, provides some research opportunities but serves mainly as reminder of former glory. Young Kazakhstani physicists still pursue international PhDs, but increasingly look to China, South Korea, or Turkey rather than Russia.

Agricultural research confronts the Aral Sea catastrophe—one of history's worst environmental disasters. Scientists study desertification, soil salinization, and crop adaptation in regions transformed by Soviet irrigation schemes that drained the sea. The research is essential but arrives decades too late, documenting collapse rather than preventing it. Current projects examine climate resilience, water management, and agricultural diversification, though implementation struggles against both environmental degradation and entrenched farming practices.

The challenge facing Kazakhstani science isn't knowledge but application. Researchers publish papers, often in international journals, but connections to industry and policy remain weak. The economy runs on resource extraction—oil, gas, uranium, metals—sectors that import technology rather than developing it locally. A growing tech sector in Almaty shows promise, but Kazakhstan remains locked in the "middle-income trap" where scientific capacity exceeds economic sophistication. Oil wealth allows investment, but hasn't yet purchased scientific renaissance.`,
    issues: [
      'Soviet-era infrastructure decaying faster than replacement capacity being built',
      'Elite institutions like Nazarbayev University disconnected from broader research ecosystem',
      'Brain drain continuing as researchers pursue opportunities in Russia, China, or West',
      'Weak research-to-industry links limiting commercial application of scientific findings',
      'Resource-extraction economy importing technology rather than developing indigenous innovation'
    ]
  },
  {
    name: 'Kuwait',
    summary: `Kuwait's relationship with science reflects the peculiar dynamics of petroleum wealth—impressive facilities and generous funding coexisting with limited research culture and dependence on foreign expertise. The nation can afford world-class equipment and international partnerships, yet struggles to cultivate indigenous scientific traditions that extend beyond petroleum engineering and desalination.

Kuwait University, established in 1966, anchors the research ecosystem with particular strength in petroleum engineering, marine science, and arid-land agriculture. The institution employs faculty from across the Arab world and beyond, creating a cosmopolitan but transient research environment. Kuwaiti nationals make up a minority of scientists, reflecting broader demographic patterns where expatriates dominate technical professions. Research focuses on practical concerns—enhanced oil recovery, water purification, coastal management—sciences of immediate economic value rather than curiosity-driven investigation.

The Kuwait Institute for Scientific Research (KISR) represents the country's most significant research investment. Established in 1967, initially funded by oil companies, KISR conducts applied research on petroleum, environment, water resources, and food security. The institute's work on solar energy, desalination technologies, and marine biology achieves international recognition, yet publications often involve foreign collaborators, and technology transfer to local industry remains limited. KISR functions as a well-funded facility that hosts research more than generates self-sustaining scientific culture.

Environmental research carries special urgency and irony—a nation built on fossil fuels confronting extreme climate vulnerability. Kuwait experiences some of Earth's highest temperatures, regularly exceeding 50°C in summer, making climate adaptation research existential rather than academic. Scientists study heat tolerance, cooling technologies, and urban planning for extreme temperatures, while acknowledging the contradiction of conducting climate science in a petrostate. The 1991 oil well fires, ignited during Iraqi retreat, provided grim research opportunities on environmental catastrophe that scientists spent years documenting.

The challenge facing Kuwaiti science isn't resources but culture. Wealthy nations can purchase equipment and hire researchers, but scientific traditions emerge from educational systems, intellectual freedom, and research cultures that value investigation over application. Kuwait produces few homegrown researchers, and those with advanced degrees often work in administration rather than laboratories. The country's small population and expatriate dependence create structural obstacles that money alone cannot overcome. Kuwaiti science is well-funded but shallow-rooted, modern but borrowed, ambitious but ultimately dependent.`,
    issues: [
      'Limited indigenous research culture despite generous funding and world-class facilities',
      'Dependence on expatriate scientists creating transient research environment',
      'Small national population limiting pool of potential researchers and STEM graduates',
      'Research focus narrowed to petroleum engineering and immediate economic applications',
      'Technology transfer from research to industry remaining weak despite institutional efforts'
    ]
  },
  {
    name: 'Laos',
    summary: `Science in Laos operates at the margins of global research—limited funding, minimal infrastructure, and human capacity constraints that reflect decades of war, political isolation, and poverty. Yet within these constraints, a small research community pursues work on infectious disease, biodiversity, and sustainable development, often in partnership with international organizations that provide the resources Laos cannot.

The National University of Laos in Vientiane anchors what research capacity exists, though "research" often means small-scale surveys and documentation rather than laboratory investigation. Equipment is scarce, funding nearly nonexistent, and faculty spend more time teaching than investigating. Most research is applied rather than basic, focused on immediate development needs—agricultural productivity, public health, natural resource management—sciences of survival rather than curiosity.

Infectious disease research represents Laos's most internationally visible scientific work, driven by the country's position as emerging disease hotspot. The Lao-Oxford-Mahosot Hospital-Wellcome Trust Research Unit brings international resources and expertise to study drug-resistant malaria, dengue, and emerging zoonotic diseases. The COVID-19 pandemic revealed both the value of this partnership and Laos's vulnerability—limited laboratory capacity, weak surveillance systems, and dependence on external support for even basic epidemiological work. The research is genuinely important, but it's largely conducted by foreigners working in Laos rather than by Lao scientists.

Biodiversity research benefits from Laos's extraordinary natural wealth—forests harboring undiscovered species, rivers supporting unique freshwater ecosystems, and agricultural landscapes preserving traditional crop varieties. International conservation organizations fund documentation projects, species surveys, and protected area research, but Lao scientists participate more as field assistants than principal investigators. The pattern mirrors colonial-era natural history, where tropical nations provide specimens while wealthy nations conduct analysis and claim discoveries.

Unexploded ordnance research carries both scientific and tragic necessity. Laos endured more bombing per capita than any nation in history during the Vietnam War era, with millions of cluster munitions remaining unexploded across the countryside. Research on detection technologies, safe removal techniques, and landscape contamination mapping combines engineering, geology, and public health—work that saves lives but exists only because of historical violence. Lao science is embryonic, constrained by resources, dependent on external partnerships, conducting essential work under conditions that would paralyze more developed systems.`,
    issues: [
      'Severe funding constraints limiting equipment, facilities, and research programs',
      'Human capacity shortages with few Lao nationals holding advanced scientific degrees',
      'Dependence on foreign research partners creating neo-colonial dynamics',
      'Research agenda driven by donor priorities rather than indigenous scientific questions',
      'Brain drain as rare scientists trained abroad decline to return to minimal opportunities'
    ]
  }
]

async function main() {
  console.log('🔬 Generating and inserting science summaries for Iran to Laos...\n')

  for (const countryData of scienceSummaries) {
    try {
      // Get country coordinates from existing summaries
      const existingLocation = await prisma.locationSummary.findFirst({
        where: { name: countryData.name },
        select: { lat: true, lng: true }
      })

      if (!existingLocation) {
        console.log(`❌ ${countryData.name}: No location data found, skipping`)
        continue
      }

      // Check if summary already exists
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: countryData.name,
            type: 'country',
            category: 'science'
          }
        }
      })

      if (existing) {
        console.log(`⏭️  ${countryData.name}: Science summary already exists, skipping`)
        continue
      }

      // Insert the summary
      await prisma.locationSummary.create({
        data: {
          name: countryData.name,
          type: 'country',
          country: countryData.name,
          lat: existingLocation.lat,
          lng: existingLocation.lng,
          category: 'science',
          summary: countryData.summary,
          issues: JSON.stringify(countryData.issues),
          topStories: JSON.stringify([]),
          storyCount: 0
        }
      })

      console.log(`✅ ${countryData.name}: Science summary inserted (${countryData.summary.length} chars, ${countryData.issues.length} issues)`)
    } catch (error) {
      console.error(`❌ ${countryData.name}: Error -`, error.message)
    }
  }

  // Final verification
  console.log('\n📊 Verification:')
  for (const countryData of scienceSummaries) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: countryData.name,
          type: 'country',
          category: 'science'
        }
      }
    })
    if (summary) {
      console.log(`✓ ${countryData.name}: Confirmed in database`)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
