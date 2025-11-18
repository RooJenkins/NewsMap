import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = [
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  { name: 'Trinidad and Tobago', lat: 10.6918, lng: -61.2225 },
  { name: 'Guyana', lat: 4.8604, lng: -58.9302 },
  { name: 'Suriname', lat: 3.9193, lng: -56.0278 },
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
]

const SUMMARIES: Record<string, { summary: string; issues: string[] }> = {
  'Bolivia': {
    summary: `# Bolivia

Bolivia experiences significant political and economic turmoil under President Luis Arce's government, marked by internal conflicts within the ruling MAS party, economic crisis with currency and foreign reserve shortages, and escalating social tensions including a failed coup attempt in June 2024. The nation's lithium potential offers promise while governance challenges threaten stability.

## Political Crisis and MAS Division

The Movement Toward Socialism (MAS) party faces dramatic internal division between President Arce and former president Evo Morales, who aims to run again in 2025 elections despite constitutional prohibitions. This intra-party warfare paralyzes governance and generates street confrontations between rival factions. Morales supporters blockade roads and mobilize in Cochabamba strongholds, while Arce controls state institutions and security forces.

The June 2024 attempted coup by military commander Juan José Zúñiga shocked the nation when armored vehicles stormed the presidential palace. Though quickly suppressed, the incident exposed security vulnerabilities and deep institutional tensions. Investigations continue into whether the event was genuine or staged, with opposition figures suggesting government manipulation to consolidate power and suppress dissent.

Congress remains gridlocked with Morales-aligned legislators blocking Arce initiatives while Arce loyalists resist Morales' political ambitions. Judicial system faces politicization with prosecutors and courts weaponized by both factions. The 2025 electoral calendar intensifies conflicts as registration deadlines, primary processes, and constitutional interpretation battles consume political energy.

## Economic Emergency

Bolivia confronts severe economic crisis with foreign currency reserves critically depleted to approximately $1.7 billion—barely covering two months of imports. The boliviano faces devaluation pressure with parallel exchange rates emerging as dollar availability disappears from official channels. Fuel shortages persist with long lines at gas stations and diesel scarcity affecting transportation and agriculture.

Government maintains unsustainable subsidies for fuel, electricity, and basic goods that consume enormous budget resources without sufficient revenue. Public debt increases rapidly while credit access tightens. Inflation accelerates affecting food prices and household purchasing power. Economic growth stagnates near zero with private investment discouraged by uncertainty and foreign exchange controls.

Natural gas production declines dramatically from peak levels due to field depletion and insufficient exploration investment. Gas exports to Argentina and Brazil—historically crucial foreign exchange sources—diminish, eliminating important revenue. The economic model built on commodity export revenue and state spending faces fundamental sustainability crisis.

## Lithium Opportunity and Challenges

Bolivia possesses the world's largest lithium reserves in Uyuni salt flats, positioning advantageously for electric vehicle battery supply chains. However, exploitation remains minimal compared to Chile and Argentina due to technical challenges (brine processing complexity), political instability deterring investment, and nationalist resource policies limiting foreign participation.

The government promotes state-led industrialization strategy seeking to develop domestic battery production rather than simply export raw materials. While ambitious, this approach requires massive capital investment, technology transfer, and expertise that Bolivia currently lacks. Direct lithium extraction (DLE) technologies could overcome some processing challenges if partnerships materialize.

## Social Dynamics

Indigenous movements maintain political influence with significant MAS base support, though divided between Morales and Arce camps. Coca grower unions (cocaleros) in Chapare remain Morales strongholds while highlands indigenous communities show more varied allegiances. Land rights, resource sovereignty, and cultural recognition remain priority demands.

Drug trafficking organizations increase operations in Chapare and Beni regions with cocaine production facilities and trafficking routes through Brazilian and Paraguayan borders. Security forces face corruption and limited capacity to control remote areas where cartels establish presence.

## Regional Tensions

Landlocked Bolivia's persistent grievance over Pacific Ocean access lost in 19th century war affects relations with Chile. Despite International Court of Justice ruling that Chile has no obligation to negotiate, Bolivia maintains claims. Relations with Chile remain functional but distant. Tensions with Brazil emerge over smuggling, migration, and border security.

The 2025 elections will determine whether Bolivia achieves peaceful democratic transition or experiences destabilization if results are contested or constitutional conflicts prevent Morales candidacy.`,
    issues: [
      'MAS party internal warfare between Arce and Morales',
      'Economic crisis with foreign reserve depletion and fuel shortages',
      'Failed coup attempt and institutional instability',
      'Lithium development challenges despite massive reserves',
      'Drug trafficking expansion in Chapare and Beni'
    ]
  },

  'Paraguay': {
    summary: `# Paraguay

Paraguay maintains relative economic and political stability under President Santiago Peña's conservative government while confronting major challenges from transnational organized crime, particularly Brazilian criminal factions that have transformed border regions into drug trafficking and money laundering hubs. The agricultural economy performs well but faces corruption and inequality concerns.

## Political Environment

President Peña, inaugurated in August 2023 representing the long-dominant Colorado Party, pursues pro-business policies with strong ties to agricultural exporters and ranching interests. His government emphasizes foreign investment attraction, infrastructure development, and maintaining fiscal discipline. The Colorado Party's decades of dominance—interrupted only briefly—ensures institutional continuity but raises questions about political competition and accountability.

Relations with Taiwan remain a key foreign policy commitment, making Paraguay the only South American nation recognizing Taipei over Beijing. This position reflects historical ties but creates economic trade-offs as China represents the major market for Paraguayan agricultural exports (soybeans, beef). Business sectors periodically debate switching recognition to access Chinese investment and markets directly, though Peña maintains the Taiwan relationship.

Corruption remains endemic despite reform rhetoric. Investigations into smuggling networks, public procurement fraud, and political financing irregularities periodically emerge but rarely produce meaningful accountability. The Colorado Party's deep penetration of state institutions complicates anti-corruption efforts.

## Security Crisis

Brazilian criminal organizations, particularly the PCC (Primeiro Comando da Capital) and Comando Vermelho, established major operations in Paraguay's border regions with Brazil and Argentina (the tri-border area). These groups control drug trafficking routes, marijuana cultivation areas, and money laundering networks with complicity from local officials, police, and politicians.

The Pedro Juan Caballero region experiences regular cartel violence including assassinations, prison massacres, and territorial disputes. Organized crime generates corruption throughout the system from local police to national politics, with significant campaign financing allegations. The small size and limited resources of Paraguayan security institutions create asymmetric challenge against well-financed criminal enterprises.

Money laundering through real estate, casinos, currency exchange houses, and agricultural businesses flows enormous criminal profits into legitimate economy. The tri-border area's commercial complexity and multiple jurisdictions complicate enforcement. Regional cooperation with Brazil, Argentina, and international partners provides some capability but criminal organizations adapt rapidly.

## Agricultural Economy

Paraguay's economy centers on agricultural exports with soybeans, beef, corn, wheat, and other commodities generating most foreign exchange. Large-scale mechanized farming operations (often Brazilian-owned) dominate eastern regions, creating wealth but also land concentration and displacement of small farmers. Agribusiness lobbies hold significant political influence over policy.

Hydroelectric power from Itaipú (shared with Brazil) and Yacyretá (shared with Argentina) dams provides abundant cheap electricity and export revenue. Energy surplus positions Paraguay advantageously for attracting industries requiring intensive power. The Itaipú treaty renegotiation with Brazil remains ongoing issue affecting revenue distribution.

Economic growth performs relatively well around 4-5% annually with low inflation and manageable public debt. However, informal employment affects over 60% of workers, limiting tax revenue and social protections. Poverty and inequality persist particularly in rural areas and among indigenous populations.

## Social Issues

Land conflicts continue between large landowners and landless peasant movements demanding agrarian reform and land distribution. These disputes occasionally turn violent with evictions and protests generating casualties. Indigenous communities face marginalization with limited land titling, service access, and economic opportunities.

## Infrastructure and Development

Road network improvements progress slowly with rural areas lacking connectivity. The Paraguay-Paraná waterway provides crucial export route for agricultural products. Port modernization in Asunción and along the Paraguay River enhances logistics capacity.

The Peña government pursues infrastructure partnerships with international investors while maintaining fiscal prudence. However, execution capacity and corruption risks affect project implementation.`,
    issues: [
      'Brazilian criminal organizations dominating border regions',
      'Corruption and organized crime infiltration of institutions',
      'Land conflicts between agribusiness and peasant movements',
      'Taiwan diplomatic recognition vs. China trade opportunities',
      'Inequality and informal employment'
    ]
  },

  'Uruguay': {
    summary: `# Uruguay

Uruguay maintains its reputation as Latin America's most stable and prosperous democracy while facing challenges of moderate economic growth, aging demographics, and governance questions following the return of the leftist Frente Amplio to power in 2024 elections under President Yamandú Orsi. The nation's progressive social policies and institutional strength provide foundation for continued development.

## Political Transition

President Yamandú Orsi won the November 2024 runoff election, returning the Frente Amplio coalition to power after five years of center-right government under Luis Lacalle Pou. Orsi, a former history teacher and mayor mentored by popular ex-president José Mujica, campaigned on protecting social programs while maintaining fiscal responsibility and investor confidence.

The transition occurred peacefully with institutional respect and democratic norms upheld. Lacalle Pou's government left office with relatively positive approval ratings unusual in Latin America, reflecting effective pandemic management and crime reduction efforts. The Frente Amplio now governs with congressional majorities enabling legislative agenda advancement.

Key policy debates include pension reform sustainability as demographics shift, education quality improvements, and whether to adjust previous government's security and economic policies or maintain continuity. Orsi emphasizes pragmatism over ideology, seeking to reassure markets while addressing social demands from the Frente Amplio base.

## Economic Performance

Uruguay's economy shows moderate growth around 3% annually with inflation moderating toward central bank targets. The country maintains investment-grade credit ratings and sound macroeconomic management. Agricultural exports (beef, soybeans, dairy, rice, wool) provide economic base with free trade zones and logistics services adding value.

Tourism from Argentina and Brazil contributes significantly though dependent on neighboring economies' performance. The UPM pulp mill—one of the world's largest—began operations in 2022, boosting exports. Renewable energy generates over 95% of electricity with wind, solar, hydroelectric, and biomass eliminating fossil fuel dependence for power generation.

However, economic dynamism remains limited with moderate growth rates insufficient for rapid development convergence. Small domestic market and peripheral location constrain manufacturing. Brain drain affects skilled workers seeking opportunities abroad. Aging population creates fiscal pressures for pension and healthcare systems.

## Security Situation

Drug trafficking and organized crime increased in recent years though Uruguay remains far safer than most Latin American countries. Port of Montevideo serves as transit point for cocaine shipments to Europe and Africa, attracting criminal organization attention. Street crime and homicides rose from historically low levels, prompting government responses.

Lacalle Pou's government implemented tougher law enforcement measures including Live Night policing strategy, controversial reforms enabling nighttime raids, and increased prison construction. These measures generated human rights debates while crime rates stabilized. The Orsi government will balance security concerns against progressive constituencies' emphasis on rehabilitation and social prevention.

## Progressive Social Policies

Uruguay pioneered legal cannabis market regulation in 2013, allowing licensed cultivation, pharmacy sales, and social clubs. The system functions relatively smoothly though tourism restrictions and banking complications persist. Marijuana consumption remains limited with alcohol remaining dominant substance.

LGBTQ+ rights protections are comprehensive including marriage equality, adoption rights, gender identity law, and anti-discrimination measures. Abortion access is legal and available through healthcare system. These progressive policies reflect Uruguay's secular tradition and left's political strength during formative policy periods.

## Regional Relations

Uruguay maintains independent foreign policy sometimes diverging from Mercosur partners. Interest in trade agreements beyond the customs union creates tensions with Argentina and Brazil who prefer collective bloc negotiations. Relations with neighbors are generally constructive though commercial disputes over pulp mills, port competition, and river management periodically emerge.

The country's political stability, rule of law, and quality of life attract foreign retirees and remote workers, particularly from Argentina. Real estate investment in coastal areas and Montevideo responds to regional instability driving Argentines and others to seek stable environments.`,
    issues: [
      'Pension system sustainability with aging demographics',
      'Moderate economic growth and brain drain',
      'Drug trafficking through Montevideo port',
      'Mercosur tensions over independent trade policy',
      'Balancing progressive policies with fiscal constraints'
    ]
  },

  'Cuba': {
    summary: `# Cuba

Cuba endures its worst economic crisis since the 1990s "Special Period" with severe shortages of food, medicine, fuel, and electricity generating unprecedented emigration and social unrest. The Communist government faces legitimacy challenges while resisting meaningful political or economic reforms, maintaining repressive control despite deteriorating conditions.

## Economic Collapse

The Cuban economy contracted severely in 2020-2021 due to pandemic tourism collapse and remains depressed with minimal recovery. Food shortages affect basic staples with rationing insufficient and parallel market prices unaffordable for most. Medicine availability is critically limited with pharmacies empty and chronic disease patients unable to access treatments. Electricity blackouts occur daily with grid failures lasting hours affecting homes, businesses, and hospitals.

Fuel scarcity constrains transportation with bus services reduced and private vehicles off roads. Agricultural production suffers from input shortages (fertilizer, fuel, spare parts) and inefficient state farm system. Remittances from U.S.-based Cubans provide crucial household support for those with diaspora connections, creating inequality between recipients and others.

Currency confusion continues with multiple exchange rates (official, informal, state stores) distorting economy. Inflation destroys purchasing power with food price increases exponential. State salaries and pensions worth approximately $10-20 monthly cannot sustain families, forcing reliance on remittances, black market activity, or emigration.

## Emigration Crisis

Unprecedented numbers of Cubans flee seeking better lives, primarily to the United States via Nicaragua route (where visa requirements ended, creating pathway to U.S. border) or dangerous boat crossings to Florida. Estimates suggest over 400,000 departed from 2021-2024 from population of 11 million—representing massive brain drain and demographic loss particularly of working-age population.

Professional exodus includes doctors, engineers, teachers, and skilled workers leaving despite government investment in education. This emigration reflects hopelessness about internal change prospects and attraction of opportunities abroad despite risks and family separation.

## Political Repression

The July 2021 protests—the largest since 1959 revolution—saw thousands demonstrate across multiple cities demanding freedom, better conditions, and political change. Government response involved mass arrests with hundreds imprisoned under harsh sentences for "sedition" and related charges. Repression intensified with increased surveillance, internet restrictions during protests, and criminalization of dissent.

President Miguel Díaz-Canel and Communist Party leadership resist political liberalization despite economic crisis. Limited economic reforms (allowing small private businesses, dollar stores) aim to relieve pressures without surrendering political control. Opposition figures face imprisonment, harassment, or forced exile. Independent journalists, artists (San Isidro Movement), and activists operate under constant threat.

## U.S. Relations and Sanctions

U.S. economic embargo remains in place with Trump-era restrictions maintained under Biden administration despite campaign promises of engagement. Sanctions target regime revenues while humanitarian exemptions exist for food and medicine. Debate continues over sanctions effectiveness and humanitarian impact, with Cuban government blaming all problems on embargo while critics emphasize government mismanagement and system failures.

## Healthcare and Social Services

Healthcare system deterioration shows in hospital conditions, equipment failures, and supply shortages despite Cuba's historical pride in medical system. Doctors' salaries remain poverty-level prompting emigration. Education quality declines with teacher shortages and school infrastructure problems. Social safety net that provided basic security erodes with ration inadequacy and service collapses.

## Future Prospects

The government shows no inclination toward meaningful political reform or economic system change beyond marginal adjustments. Generational transition from Castro-era leaders to younger technocrats like Díaz-Canel brings little policy shift. Whether system can sustain itself amid crisis or faces eventual transformation remains uncertain. The population's coping capacity nears exhaustion while exit option drives continued emigration of those who can leave.`,
    issues: [
      'Severe economic crisis with food, medicine, and fuel shortages',
      'Mass emigration and brain drain',
      'Political repression following 2021 protests',
      'Electricity grid failures and infrastructure collapse',
      'Currency distortions and hyperinflation'
    ]
  },

  'Haiti': {
    summary: `# Haiti

Haiti descends into near-state failure as heavily armed gangs control approximately 80% of Port-au-Prince and significant territory nationwide, rendering government authority largely theoretical. A Kenyan-led international security force attempts to restore order while political transitions occur through appointed councils without electoral legitimacy, prolonging the humanitarian catastrophe affecting millions.

## Gang Violence and Security Collapse

Gangs emerged as dominant power in Haiti following President Jovenel Moïse's 2021 assassination, power vacuum, and institutional disintegration. The G9 alliance led by former police officer Jimmy "Barbecue" Chérizier and rival G-Pèp control neighborhoods, ports, fuel terminals, and main roads. They extort businesses, kidnap for ransom, engage in sexual violence, displace populations, and massacre rivals.

Port-au-Prince becomes segmented territory with gangs controlling distinct zones. Residents cannot travel between neighborhoods without gang permission and payment. The national police force (PNH) is severely under-resourced with approximately 9,000 officers for 11+ million people, facing gang forces with superior firepower including automatic weapons and armored vehicles.

Gang leaders often have political connections with elites who funded them as armed wings for electoral purposes and protection. These relationships complicate confronting violence as powerful interests benefit from insecurity. Attempts at gang negotiations and truces proved futile as violence dynamics are self-sustaining with kidnapping and extortion highly profitable.

The Multinational Security Support (MSS) mission led by Kenya and authorized by UN Security Council deployed limited forces in 2024. Kenyan police contingent of approximately 400 officers represents insufficient force to reclaim territory or defeat well-armed gangs. The mission faces funding, logistical, and political challenges affecting effectiveness.

## Political Dysfunction

President Moïse's assassination in July 2021 remains incompletely investigated with multiple suspects arrested but murky conspiracy involving Haitian business figures, foreign mercenaries, and U.S. connections. Interim Prime Minister Ariel Henry assumed power without clear constitutional authority, resigned in 2024 under pressure as violence peaked.

A Transitional Presidential Council (CPT) appointed by various factions attempts governance, but lacks electoral legitimacy or popular mandate. Council infighting and corruption allegations undermine effectiveness. No elections have occurred since 2016, leaving institutions without democratic legitimacy. Electoral organization appears impossible given security situation.

## Humanitarian Catastrophe

Approximately 5.5 million Haitians require humanitarian assistance—roughly half the population. Food insecurity reaches emergency levels with outright famine conditions in some areas. Healthcare system collapse means diseases like cholera resurge. Over 700,000 people are internally displaced fleeing gang violence.

Schools remain closed in many areas preventing education for millions of children. Economic activity collapses outside informal survival mechanisms. Port closures by gang control disrupted imports of food, fuel, and medicine. International aid delivery faces enormous challenges accessing populations through gang-controlled areas.

## Economic Collapse

GDP contracted significantly with formal economy largely non-functional. Currency (gourde) depreciates rapidly with inflation above 30%. Remittances from Haitian diaspora (U.S., Canada, Dominican Republic, France, Chile) provide crucial household survival resources. However, money transfer during extreme violence and kidnapping risks creates complications.

## Migration

Haitians flee in large numbers seeking refuge, primarily to Dominican Republic (facing mass deportations and discrimination), United States (by boat and through southern border), and Chile/Brazil (facing deteriorating conditions prompting onward migration). The Dominican Republic constructs border wall and conducts aggressive deportation campaigns affecting hundreds of thousands, generating human rights concerns.

The international community faces difficult questions about intervention scope, resource commitment, and strategy. Previous interventions (MINUSTAH 2004-2017) achieved temporary stability but failed to build sustainable security or governance. Whether current minimal approach can succeed remains doubtful.`,
    issues: [
      'Gang control of 80% of Port-au-Prince and state failure',
      'Humanitarian catastrophe affecting 5.5+ million people',
      'Political vacuum without electoral legitimacy',
      'Inadequate international security mission',
      'Economic collapse and regional migration crisis'
    ]
  },

  // Continue with remaining countries...
  'Dominican Republic': {
    summary: `# Dominican Republic

The Dominican Republic maintains political stability and economic growth under President Luis Abinader while confronting challenges of Venezuelan and Haitian migration, electricity sector difficulties, and inequality despite tourism-driven prosperity. The government balances development ambitions against fiscal constraints and social demands.

## Political Environment

President Abinader, reelected in May 2024 for his second term, governs with Partido Revolucionario Moderno (PRM) majorities providing legislative capacity. His administration emphasizes anti-corruption efforts, security improvements, and infrastructure development. Approval ratings remain relatively strong compared to regional norms despite criticism over specific policies.

The 2024 elections concluded without major incidents, reflecting institutional stability. Opposition from traditional parties (PLD, PRSC) remains fragmented and weakened by corruption scandals from previous administrations. Abinader's centrist positioning appeals to business sectors and middle-class voters.

Key policy priorities include constitutional reform proposals addressing judicial independence and electoral procedures, though progress faces political resistance. Anti-corruption prosecutions targeted PLD-era officials including former presidents, generating political tensions but demonstrating rule of law efforts.

## Migration Pressures

Venezuela and Haiti migration creates significant challenges. Over 500,000 Venezuelans reside in Dominican Republic with continued arrivals. The government implements registration programs providing temporary legal status, though integration challenges include employment formalization and service access.

Haitian migration generates greater controversy and social tension. An estimated 500,000-750,000 Haitians live in Dominican Republic (many undocumented) with continued arrivals by land and sea despite border security efforts. The government conducts deportations drawing international criticism over due process and treatment. Construction of border wall aims to control irregular crossings.

Dominican nationalism often manifests in anti-Haitian sentiment with discrimination affecting Haitian workers despite economy's dependence on their labor in construction, agriculture, and services. Citizenship issues for Dominican-born children of Haitian parents generate ongoing human rights concerns following 2013 court ruling that retroactively denied citizenship.

## Economic Performance

The economy grows robustly around 5% annually, among Latin America's fastest rates. Tourism remains crucial with beach resorts (Punta Cana, Puerto Plata, Samaná) attracting millions annually. U.S. visitors dominate with European and Canadian markets significant. All-inclusive resort model generates employment and foreign exchange.

Free trade zones (manufacturing for export) produce textiles, medical devices, and other products with duty-free access to U.S. markets. Remittances from Dominican diaspora (primarily U.S.) exceed $10 billion annually, supporting household consumption.

However, electricity sector faces chronic deficits with distribution losses (theft, non-payment, technical losses) exceeding 30%. Government subsidies burden fiscal accounts while service reliability problems affect businesses and households. Electricity remains expensive and unreliable despite generation capacity.

Inequality persists with poverty affecting approximately 25% of population. Informal employment dominates limiting social protections and tax revenue. Rural areas lag urban centers in services and opportunities.

## Social and Development Issues

Education quality remains concern despite increased investment. Healthcare access varies by region and income with public system strained. Crime including drug trafficking, money laundering, and gang activity affects urban areas though murder rates remain moderate compared to Central America.

Infrastructure development progresses with metro expansion in Santo Domingo, road improvements, and port modernization. However, corruption risks affect public procurement. Water access and sanitation require continued investment.

Climate vulnerability from hurricanes and tropical storms demands resilient infrastructure and disaster preparedness. Tourism sector faces climate change risks from rising seas and storm intensity.`,
    issues: [
      'Haitian migration management and discrimination concerns',
      'Electricity sector inefficiencies and fiscal drain',
      'Inequality despite strong economic growth',
      'Border security and deportation policy controversies',
      'Infrastructure demands for continued development'
    ]
  },

  'Guatemala': {
    summary: `# Guatemala

Guatemala confronts profound governance challenges under President Bernardo Arévalo, whose reformist agenda faces systematic obstruction from entrenched corruption networks controlling prosecutors, courts, and Congress. The dramatic political standoff threatens democratic institutions while economic informality, violence, and Central American migration dynamics create additional pressures.

Arévalo won the 2023 election promising anti-corruption reforms after popular mobilizations demanded change. However, the "Pacto de Corruptos" (corruption pact) comprising prosecutors, judges, politicians, and business elites orchestrate legal persecution against Arévalo's party Semilla, attempting to prevent his inauguration through criminal investigations and party suspension maneuvers.

Attorney General Consuelo Porras, sanctioned by the U.S. for corruption and democratic backsliding, weaponizes the prosecutor's office against reformers, journalists, and civil society. The Constitutional Court, controlled by conservative interests, issues contradictory rulings creating legal chaos. Arévalo's government operates under constant judicial attack with officials facing criminal charges for performing duties.

Economic informality affects over 70% of workers limiting tax revenue (Guatemala has among the world's lowest tax collection rates at approximately 12% of GDP). Poverty affects majority of indigenous population concentrated in rural highlands. Inequality remains extreme with small elite controlling land, wealth, and political influence.

Violence from gangs, drug trafficking organizations, and common crime generates homicide rates around 17 per 100,000. Extortion affects businesses forcing closures. Corruption facilitates criminal operations with police, prosecutors, and officials compromised.

Migration to the United States continues with hundreds of thousands departing seeking economic opportunities and security. Remittances exceed $15 billion annually (over 15% of GDP), providing crucial household income. U.S. policies significantly affect Guatemala through migration management, anti-corruption support, and trade.

Indigenous Maya populations (over 40% of total) face discrimination, land conflicts, and limited political representation despite demographic significance. Extractive industries (mining, hydroelectric dams) generate conflicts with communities over environmental impacts and consultation rights.`,
  issues: [
    'Corruption networks obstructing reformist government',
    'Extreme inequality and poverty',
    'High violence and organized crime',
    'Mass migration and remittance dependence',
    'Indigenous rights and extractive industry conflicts'
  ]
  }
}

async function generateAllCategoryBatch2() {
  console.log('🚀 Generating ALL category summaries for Batch 2 (20 countries)\n')

  let successCount = 0
  let errorCount = 0

  for (const country of COUNTRIES) {
    try {
      const data = SUMMARIES[country.name]

      if (!data) {
        console.log(`⚠️  No summary data for ${country.name} - skipping`)
        errorCount++
        continue
      }

      console.log(`Processing: ${country.name}`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'all',
          },
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'all',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        update: {
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
      })

      console.log(`✅ ${country.name} - Saved (${data.summary.length} chars)`)
      successCount++

    } catch (error) {
      console.error(`❌ Error saving ${country.name}:`, error)
      errorCount++
    }
  }

  console.log(`\n📊 Batch 2 Complete:`)
  console.log(`   ✅ Success: ${successCount}`)
  console.log(`   ❌ Errors: ${errorCount}`)
  console.log(`   📝 Total: ${COUNTRIES.length}`)
}

generateAllCategoryBatch2()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
