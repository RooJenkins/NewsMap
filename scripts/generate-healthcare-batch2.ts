import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'file:/home/user/NewsMap/prisma/dev.db'
    }
  }
})

// Country data with coordinates
const COUNTRIES = {
  CUBA: {
    name: 'Cuba',
    type: 'country',
    lat: 21.5218,
    lng: -77.7812,
    country: 'Cuba',
    category: 'healthcare'
  },
  HAITI: {
    name: 'Haiti',
    type: 'country',
    lat: 18.9712,
    lng: -72.2852,
    country: 'Haiti',
    category: 'healthcare'
  },
  DOMINICAN_REPUBLIC: {
    name: 'Dominican Republic',
    type: 'country',
    lat: 18.7357,
    lng: -70.1627,
    country: 'Dominican Republic',
    category: 'healthcare'
  },
  GUATEMALA: {
    name: 'Guatemala',
    type: 'country',
    lat: 15.7835,
    lng: -90.2308,
    country: 'Guatemala',
    category: 'healthcare'
  },
  HONDURAS: {
    name: 'Honduras',
    type: 'country',
    lat: 15.2000,
    lng: -86.2419,
    country: 'Honduras',
    category: 'healthcare'
  },
  EL_SALVADOR: {
    name: 'El Salvador',
    type: 'country',
    lat: 13.7942,
    lng: -88.8965,
    country: 'El Salvador',
    category: 'healthcare'
  },
  NICARAGUA: {
    name: 'Nicaragua',
    type: 'country',
    lat: 12.8654,
    lng: -85.2072,
    country: 'Nicaragua',
    category: 'healthcare'
  },
  COSTA_RICA: {
    name: 'Costa Rica',
    type: 'country',
    lat: 9.7489,
    lng: -83.7534,
    country: 'Costa Rica',
    category: 'healthcare'
  },
  PANAMA: {
    name: 'Panama',
    type: 'country',
    lat: 8.5380,
    lng: -80.7821,
    country: 'Panama',
    category: 'healthcare'
  },
  JAMAICA: {
    name: 'Jamaica',
    type: 'country',
    lat: 18.1096,
    lng: -77.2975,
    country: 'Jamaica',
    category: 'healthcare'
  },
  TRINIDAD_AND_TOBAGO: {
    name: 'Trinidad and Tobago',
    type: 'country',
    lat: 10.6918,
    lng: -61.2225,
    country: 'Trinidad and Tobago',
    category: 'healthcare'
  },
  GUYANA: {
    name: 'Guyana',
    type: 'country',
    lat: 4.8604,
    lng: -58.9302,
    country: 'Guyana',
    category: 'healthcare'
  },
  SURINAME: {
    name: 'Suriname',
    type: 'country',
    lat: 3.9193,
    lng: -56.0278,
    country: 'Suriname',
    category: 'healthcare'
  }
}

// Healthcare summaries in Atul Gawande's voice

const CUBA_SUMMARY = `When a healthcare system praised for decades as a model of equity faces collapse, what does it reveal about the relationship between political ideology and medical reality? Cuba in November 2025 offers a stark case study. In July, Minister of Public Health José Ángel Portal Miranda acknowledged before the National Assembly what doctors had been reporting for months: the system covers only 30% of basic medication needs, and hospitals are overwhelmed by dengue, chikungunya, and oropouche outbreaks without adequate supplies to respond.

The paradox is instructive. Cuba achieved universal coverage and trained physicians at rates that exceeded most developed nations—its doctor-to-population ratio remains impressive on paper. Yet in November 2025, a Cuban physician reported trucks returning to hospitals to remove bodies without diagnosis, echoing scenes from the pandemic but occurring now, in ordinary time. The issue isn't medical knowledge but systemic failure: medications are absent, diagnostic equipment doesn't function, and healthcare workers are emigrating in unprecedented numbers.

The structural problems run deep. Economic crisis, intensified by hurricanes Oscar and Rafael plus two earthquakes in recent months, has devastated infrastructure. But the crisis predates these disasters. U.S. sanctions constrain medical imports, yet government spending priorities and rigid central planning have prevented adaptation. When hospitals can't obtain basic supplies and physicians can't earn livable wages, ideology cannot substitute for insulin or antibiotics.

What makes Cuba's crisis particularly significant is its healthcare diplomacy legacy. For decades, Cuba exported medical missions globally, positioning healthcare as both soft power and economic necessity. Now the same system struggles to serve its own population. Life expectancy, once approaching developed-nation levels, faces downward pressure as chronic disease management falters and acute care capacity diminishes.

The international community faces a dilemma. PAHO has documented the crisis but humanitarian assistance confronts political complexity. Some advocacy groups call for emergency health interventions; the government resists narratives of failure. Meanwhile, Cuban physicians increasingly choose exile over practice in a system that can't provide them tools to help patients.

What happens when a healthcare system built on egalitarian principles encounters resource scarcity it cannot resolve? Cuba suggests the answer: even universal coverage means little when clinics lack medications and hospitals lack capacity. The challenge ahead isn't ideological but practical—finding pathways to restore basic functionality while addressing underlying economic and political constraints. For a nation that once exported medical expertise, the immediate crisis is providing basic care to its own people.`

const HAITI_SUMMARY = `In November 2025, MSF personnel traveling in an ambulance in Port-au-Prince were attacked and held hostage for over four hours by law enforcement and vigilante groups. This incident captures Haiti's healthcare reality: a system where providing medical care has become dangerous work, where basic security cannot be assumed, and where the distinction between authority and chaos has collapsed.

The numbers tell part of the story. Two in five Haitians—4.2 million people—urgently need medical care. In the Ouest department containing Port-au-Prince, 40% of health facilities are closed, 33% partially functional, only 42% operating normally. Of three major metropolitan hospitals, just one remains open due to attacks. But statistics understate the crisis. When MSF, with decades of experience in conflict zones, reports that police directly threaten their staff and prevent ambulances from reaching patients, we've crossed from healthcare scarcity into healthcare impossibility.

The security collapse creates cascading medical failures. Pregnant women cannot reach facilities for deliveries—maternal mortality, already among the hemisphere's highest, is rising. Chronic disease patients miss appointments and run out of medications. Trauma cases from violence overwhelm the few functioning emergency departments. Vaccination programs have stalled. Disease surveillance has broken down. Each gap creates downstream consequences that will persist long after security eventually improves.

The funding picture compounds these challenges. Foreign health aid is projected to decline 30-40% compared to 2023, precisely when needs are escalating. For organizations like Partners in Health, which have operated in Haiti for decades, the withdrawal of previously reliable funding has created impossible choices: which clinics to keep open, which programs to maintain, which populations to reach. These decisions have medical consequences measured in lives—maternal deaths, child deaths, preventable disease progression.

What makes Haiti's situation particularly difficult is the absence of viable short-term solutions. Security improvements require political stability that remains elusive. Infrastructure reconstruction requires resources that aren't available. Workforce development requires safety that doesn't exist—healthcare workers face direct threats, and many have fled. International assistance faces access barriers and coordination challenges.

Yet healthcare somehow continues. Local staff show up to facilities despite risks. Community health workers improvise delivery of basic services. MSF and PIH maintain presence despite attacks. This persistence matters not because it solves the crisis but because it prevents complete collapse—keeping some vaccine cold chains intact, some essential medications flowing, some emergency capacity functioning.

The question for international health is what responsibility exists when a healthcare system faces state failure. Haiti demonstrates that medical needs don't pause for political resolution, that emergency response must continue even when humanitarian space itself is under attack. The challenge ahead isn't restoring Haiti's healthcare system—it's preventing total dissolution while working toward eventual reconstruction.`

const DOMINICAN_REPUBLIC_SUMMARY = `The Dominican Republic presents an increasingly uncommon pattern in Latin America: a middle-income country with functional universal healthcare coverage that actually works for most citizens, though with persistent equity gaps that reveal the limits of coverage expansion without quality improvement.

The system structure merits attention. Following 2007 reforms, the country achieved 90% population affiliation within 15 years through a three-tier model: subsidized coverage for unemployed and poor populations funded by government, contributory coverage funded by workers and employers, and a hybrid subsidized-contributory system for self-employed workers. By 2021, healthcare spending reached 6.1% of GDP—not generous by OECD standards but substantial for the region.

What distinguishes the Dominican system is the private sector's role. Private hospitals in Santo Domingo and Santiago provide care comparable to U.S. regional hospitals at a fraction of the cost—appointments available within 48 hours, same-day diagnostics, modern equipment. For expatriates and middle-class Dominicans, this creates efficient access to quality care. A basic private consultation costs less than typical U.S. insurance copays.

But this two-tier reality creates predictable stratification. Public facilities, serving lower-income populations, face familiar resource constraints: insufficient staffing, medication shortages, aging equipment. While the government provides "free" healthcare, many services carry charges—stitches, X-rays, medications—creating out-of-pocket barriers for those the system intends to serve. The gap between private efficiency and public capacity remains wide.

Recent years have brought infrastructure investment. New hospital construction in tourist areas and urban centers has expanded capacity. The Ministry of Public Health has worked with PAHO on maternal-child health programs, addressing infant and maternal mortality rates that remain above regional averages. Digital health records are gradually being implemented, though progress is uneven.

The Dominican Republic also faces epidemiological transition challenges typical of middle-income countries. Chronic diseases—diabetes, hypertension, cardiovascular disease—now drive healthcare utilization. Vector-borne diseases including dengue remain endemic, requiring sustained public health capacity. The healthcare workforce is generally adequate in urban areas but rural access remains problematic.

What's notable about the Dominican case is relative stability. Unlike neighbors facing acute crises, the system maintains basic functionality. Coverage expansion didn't collapse under resource pressure. Private sector growth didn't entirely undermine public provision. Political transitions haven't dismantled healthcare institutions.

Yet achieving 90% coverage doesn't mean achieving health equity. Indigenous and Haitian-descended populations face access barriers. Rural-urban disparities persist. Quality gaps between public and private care mean coverage doesn't ensure comparable outcomes. The challenge ahead isn't expanding coverage further—it's improving quality and equity within existing structures. For a healthcare system that works but doesn't work equally well for everyone, the question is whether incremental improvement can address structural inequality.`

const GUATEMALA_SUMMARY = `Guatemala's maternal mortality ratio—103 deaths per 100,000 live births—represents not just a statistic but a systematic failure to deliver basic obstetric care to indigenous women in rural areas. The sixth-highest rate in Latin America, it reveals how healthcare access in Guatemala is determined more by ethnicity and geography than by need.

The disparity is stark: indigenous women, comprising 44% of the population, account for two-thirds of maternal deaths. Their maternal mortality ratio exceeds non-indigenous women by more than two-fold. This isn't coincidence but structure—a healthcare system where rural clinics lack basic delivery capacity, where cultural and linguistic barriers prevent women from seeking care, where transportation to referral hospitals can take hours over difficult roads.

The leading cause of maternal death is postpartum hemorrhage—entirely preventable with appropriate immediate care. Yet community birthing centers (Casas Maternas Rurales) that could provide this care remain inadequately equipped and staffed. When complications arise requiring hospital transfer, delays prove fatal. The tragedy is that Guatemala knows how to reduce maternal mortality; international programs have demonstrated effective approaches. The gap isn't knowledge but implementation at scale.

For child health, pneumonia drives under-5 mortality, another marker of inadequate primary care access. Respiratory infections that should be treated early with antibiotics instead progress to life-threatening disease because rural families can't reach clinics, can't afford care, or delay seeking treatment. When children finally arrive at hospitals, they're critically ill, and mortality rates reflect this late presentation.

Guatemala has shown that improvement is possible. The maternal mortality ratio has decreased 37% since 2000, demonstrating sustained progress despite limited resources. Programs like MSH's Utz' Na'n (Healthy Mothers and Babies) now cover 18% of the country across four departments, providing training, supplies, and supportive supervision to rural health posts. Mobile health platforms connect community health workers with physicians for consultation. These interventions work—where they're implemented.

The challenge is scale. Guatemala's rugged geography, linguistic diversity (23 indigenous languages), and limited health budget create implementation barriers. Doctor-to-population ratios in rural indigenous areas fall far below urban levels. Many communities lack even basic health posts. When women do reach facilities, they may encounter providers who don't speak their language or understand traditional practices.

Recent efforts have focused on surveillance and data systems. Guatemala is working with PAHO to automate neonatal and maternal mortality tracking, recognizing that real-time data enables faster response. Digital health tools show promise for connecting rural health workers with specialists. Yet technology alone can't compensate for workforce shortages and infrastructure gaps.

What makes Guatemala's situation particularly difficult is that solutions are known but require sustained investment in rural health infrastructure, community health worker programs, culturally appropriate care models, and emergency transport systems. The question isn't what to do but how to mobilize resources and political will to do it. For the indigenous women of rural Guatemala, the difference between life and death in childbirth depends on whether their healthcare system can extend beyond cities to reach them.`

const HONDURAS_SUMMARY = `In January 2025, UNOPS delivered over 427,000 units of medicine to Honduras's social security hospitals—the third such delivery totaling $16 million—while the Inter-American Development Bank approved $150 million for hospital network expansion. These investments reveal both Honduras's healthcare ambitions and its fundamental challenges: a system with expanding infrastructure but persistent gaps in quality, access, and equity.

The IDB financing targets strategic infrastructure: a general hospital in Roatán serving Bay Islands tourism, and two trauma hospitals in Tegucigalpa and San Pedro Sula addressing urban violence-related injuries. These facilities respond to real needs—Honduras has among the hemisphere's highest violent injury rates, and existing emergency capacity is overwhelmed. Yet new buildings don't address underlying problems: inadequate primary care preventing conditions that require hospitalization, insufficient trained personnel to staff new facilities, and weak supply chains that leave hospitals without essential medicines.

The UNOPS partnership represents a pragmatic response to procurement and logistics failures. When the government can't reliably supply its own hospitals with medications, outsourcing to international organizations becomes necessary. This maintains functionality but raises questions about sustainability and sovereignty. What happens when external financing ends? The dependency reflects deeper state capacity limitations.

Honduras is attempting digital transformation alongside physical infrastructure expansion. In July 2024, it became the second Latin American country to integrate birth certificates into the SIP Plus (Perinatal Information System) platform, providing real-time maternal and perinatal data. This matters—timely information enables intervention when complications arise. Yet technology requires reliable electricity, internet connectivity, and trained users to maintain data quality. In rural Honduras, these prerequisites can't be assumed.

The healthcare workforce situation remains challenging. Honduras trains physicians and nurses, but many emigrate seeking better compensation and working conditions elsewhere. Rural areas face severe shortages, leaving communities hours from the nearest trained provider. Community health worker programs show promise but lack consistent support and supervision. When Hospital Escuela, one of the country's premier teaching hospitals, requires UNOPS assistance for basic operations, systemic problems are evident.

Epidemiologically, Honduras faces a double burden. Vector-borne diseases including dengue remain endemic, requiring sustained public health capacity for surveillance and mosquito control. Simultaneously, chronic diseases—diabetes, hypertension, cardiovascular disease—are rising with urbanization and dietary changes. The healthcare system, historically focused on acute infectious disease, struggles to provide continuous chronic disease management.

Access remains highly inequitable. Urban middle-class Hondurans can access private clinics with reasonable care. Rural poor populations face geographic, financial, and cultural barriers to even basic services. Indigenous communities are particularly underserved. The social security system (IHSS) theoretically covers formal sector workers but has faced corruption scandals that undermine public trust.

Recent political stability has enabled more consistent healthcare planning compared to previous turbulent periods. The government has articulated priorities around primary care expansion and maternal-child health. PAHO partnership provides technical support for program development. Yet moving from plans to implementation requires overcoming entrenched challenges: limited fiscal space for health spending, weak institutional capacity, and geographic barriers to service delivery.

The trajectory Honduras follows matters not just domestically but regionally. Can a lower-middle-income country with limited resources build functional universal health coverage? Can infrastructure investment translate to improved outcomes if workforce and supply chain problems persist? Honduras's experience will help answer whether healthcare system strengthening can succeed without first resolving deeper state capacity and governance challenges.`

const EL_SALVADOR_SUMMARY = `The new Rosales Hospital, nearing completion in early 2025 with 90% construction progress and $61.2 million invested, stands as physical monument to President Nayib Bukele's governance contradictions—modernizing infrastructure while simultaneously cutting healthcare budgets and workforce.

The hospital itself represents genuine improvement. Replacing a deteriorating facility with 87 consultation rooms, 44 procedure rooms, modern operating theaters, clinical laboratories, and blood banks expands capacity that El Salvador needs. In a country where public hospitals have historically suffered from overcrowding and outdated equipment, new infrastructure matters. The government has invested $50 million across healthcare facilities, visible evidence of commitment to system modernization.

Yet the 2025 budget tells a different story: $91 million in healthcare funding cuts, elimination of 3,727 government health positions through hiring freezes, and $54 million in reduced allocations across 31 public hospitals. This simultaneous expansion and contraction reveals Bukele's prioritization—investing in flagship projects while reducing operational capacity throughout the broader system.

The contradiction creates predictable problems. New buildings require staff to operate, medications to dispense, and supplies to function. If budget cuts leave positions unfilled and supply chains under-resourced, gleaming new facilities may sit underutilized. El Salvador is building the hardware of healthcare while reducing investment in the ongoing operational costs that determine whether systems actually work.

The Catholic bishops, in June 2025, acknowledged infrastructure improvements while criticizing increasing inequality in healthcare access. Their concern reflects observable reality: urban middle-class Salvadorans can access improved public facilities and private alternatives, while rural poor populations face barriers to even basic services. Infrastructure investment concentrated in cities exacerbates rather than resolves geographic inequity.

Bukele's security policies, which have dramatically reduced gang violence, have indirect health effects worth noting. Emergency departments see fewer gunshot wounds and violent trauma—the trauma hospitals in the previous era of gang control faced overwhelming caseloads. Reduced violence enables healthcare workers to operate with less fear and allows patients to travel to facilities without risk. These are real benefits, even as authoritarian methods raise human rights concerns.

The World Bank's approval of a $120 million, five-year project to improve health services access and quality provides external support and likely conditionality encouraging sustained operational investment. PAHO partnership through the Alliance for Primary Health Care in the Americas focuses El Salvador on foundational primary care strengthening. These relationships may moderate some of the budget reduction impacts.

The epidemiological transition challenges persist regardless of political leadership. El Salvador faces rising chronic disease prevalence—diabetes, hypertension, cardiovascular disease—requiring continuous care management that infrastructure alone doesn't provide. Vector-borne diseases including dengue require sustained public health capacity. The healthcare system must deliver both acute care and chronic disease management with limited resources.

What remains unclear is whether El Salvador can sustain recent security gains while simultaneously strengthening rather than weakening the health system. Bukele's model prioritizes visible accomplishments—new hospitals, reduced violence—over less photogenic operational strengthening. For healthcare, ongoing function depends on workforce, supplies, and maintenance—the unglamorous aspects of system management.

The test ahead is whether infrastructure investment translates to improved population health outcomes. New buildings matter, but health systems succeed or fail based on daily operations: clinics with medications, laboratories with reagents, staff with adequate training. El Salvador in 2025 is betting that selective modernization can compensate for broader budget reductions. Whether this gamble pays off will become evident in maternal mortality rates, chronic disease outcomes, and healthcare access measures over the coming years.`

const NICARAGUA_SUMMARY = `Nicaragua reported 1,164 dengue cases through the first five weeks of 2025—a modest figure compared to regional neighbors, yet one that reveals the endemic persistence of vector-borne disease in a country where healthcare system transparency has diminished alongside political space.

Dengue matters in Nicaragua not because case numbers are highest—they're not—but because the disease tests healthcare system responsiveness. Early 2025 saw PAHO issue an epidemiological alert about DENV-3 serotype circulation increasing outbreak risk across the Americas. Nicaragua, which experienced 92,022 dengue cases in 2024's regional epidemic, faces ongoing transmission requiring sustained surveillance, mosquito control, and clinical management capacity.

The challenge is that Nicaragua's healthcare data has become less reliable as the government has restricted information flow. Independent verification of reported cases, mortality rates, and hospital capacity has grown difficult. When political openness contracts, so does public health transparency. This matters for regional disease control—dengue doesn't respect borders, and accurate surveillance requires trustworthy reporting.

Beyond dengue, pneumonia and malaria remain leading causes of morbidity in early 2025. These diseases reflect broader healthcare access and quality challenges. Pneumonia deaths are preventable with timely antibiotic treatment and access to oxygen therapy. Malaria persists where vector control is inadequate and where populations lack rapid diagnosis and treatment access. That these remain top reported diseases suggests gaps in primary care prevention and early intervention.

Nicaragua's healthcare system structure provides universal coverage on paper, with Ministry of Health facilities theoretically serving the entire population without fees. In practice, quality varies dramatically between Managua's larger hospitals and rural health posts. Workforce distribution favors urban areas, leaving rural communities with limited access to trained providers. Supply chain challenges mean rural clinics frequently lack essential medications.

The political context affects healthcare in ways beyond data transparency. International partnerships have diminished as Nicaragua's government has limited NGO operations and restricted international cooperation. This reduces external support that previously supplemented government health services, particularly in rural areas. Healthcare workers face constraints on professional autonomy and may be reluctant to report data that conflicts with official narratives.

Research collaborations have suffered. Nicaragua hosted long-term dengue cohort studies that contributed valuable scientific knowledge about dengue immunity and vaccine response. These partnerships have become difficult to sustain in the current political environment. The loss affects not just Nicaragua but global understanding of dengue epidemiology and control strategies.

What makes Nicaragua's situation particularly concerning is the gap between system structure and function. Universal coverage exists formally, but actual service delivery depends on resource availability, workforce capacity, and political priorities that emphasize control over transparency. Patients can access facilities, but whether those facilities have medications, functioning equipment, and adequate staffing varies unpredictably.

The healthcare workforce faces pressures found throughout the region—low compensation, difficult working conditions, limited professional development opportunities. Migration to Costa Rica, Panama, and beyond drains trained personnel. Those who remain must manage resource constraints while maintaining service delivery under political oversight that discourages highlighting system failures.

For Nicaragua's population, healthcare access depends increasingly on ability to pay for private services or medications when public facilities lack supplies. This creates stratification where universal coverage formally exists: those with resources manage chronic conditions and receive preventive care; those without defer treatment until conditions become acute, presenting to overwhelmed emergency departments.

The path forward requires political changes that enable transparency, international cooperation, and healthcare system strengthening beyond current constraints. Nicaragua has healthcare infrastructure and trained personnel—the foundations exist. What's missing is the openness to acknowledge gaps, accept international support, and prioritize sustained operational investment over political considerations. Until those conditions change, Nicaragua's healthcare system will operate below its potential, managing acute needs while struggling to deliver consistent preventive and chronic care.`

const COSTA_RICA_SUMMARY = `Costa Rica's healthcare system represents Latin America's most successful model of universal coverage sustained across decades—yet in 2025, the same system faces wait times extending months to years for specialist care and elective surgery, revealing tensions between coverage breadth and service delivery depth.

The Caja Costarricense de Seguro Social (CCSS), established 1941, provides comprehensive coverage to over 90% of the population through mandatory contributions ranging from 6-11% of income. This isn't selective coverage—it includes primary care, specialist consultation, hospitalization, surgery, medications, and chronic disease management. Costa Rica achieves life expectancy exceeding 80 years and infant mortality rates comparable to developed nations, outcomes far surpassing regional neighbors and many wealthier countries.

What makes Costa Rica notable is sustainability. Unlike countries that achieved temporary coverage expansion only to see it collapse under resource pressure, Costa Rica has maintained universal coverage through economic fluctuations and political transitions. The CCSS operates independently of electoral cycles, with tripartite governance including government, employers, and workers. This institutional stability has preserved healthcare funding even when other social programs faced cuts.

Yet coverage doesn't equal timeliness. In 2025, Costa Ricans face primary care appointments available within days to weeks—reasonable—but specialist referrals extending months and elective surgeries delayed a year or more for non-urgent procedures. The wait times reflect supply-demand imbalances: population growth and aging increased demand while fiscal constraints limited corresponding capacity expansion.

The two-tier system creates pressure valves and inequities. Middle-class Costa Ricans increasingly purchase private insurance for faster specialist access while maintaining CCSS coverage for catastrophic needs. This hybrid approach enables those who can afford it to bypass public wait times without abandoning the public system entirely. But it also means healthcare timeliness depends on ability to pay, even within universal coverage.

Costa Rica is attempting to address access bottlenecks through digital transformation. Telemedicine platforms expanded during COVID-19 have been maintained, enabling remote consultation for routine follow-up and chronic disease management. Electronic health records allow information sharing across facilities. These tools improve efficiency but can't create specialist capacity where workforce shortages exist.

The system faces typical middle-income country epidemiological transitions. Chronic diseases—diabetes, hypertension, cardiovascular disease, cancer—now drive healthcare utilization. These conditions require continuous management, regular monitoring, and specialist oversight. The CCSS model, built originally for acute infectious disease and maternal-child health, must adapt to sustained engagement with aging populations managing multiple chronic conditions.

Fiscal sustainability concerns emerge as populations age and healthcare costs rise. Costa Rica's economic growth hasn't kept pace with healthcare demand increases. CCSS faces pressure to control costs while maintaining service breadth. Efficiency improvements and waste reduction can help, but ultimately universal coverage with comprehensive benefits requires sustained funding. Whether Costa Ricans will accept contribution increases or benefit limitations remains politically sensitive.

Recent reforms focus on primary care strengthening and chronic disease management, attempting to prevent complications requiring expensive specialist and hospital care. Community-based programs for diabetes and hypertension management show promise in improving control while reducing emergency department utilization. Prevention initiatives targeting obesity and physical inactivity address root causes of chronic disease burden.

What Costa Rica demonstrates is that universal healthcare coverage is achievable and sustainable in middle-income settings—but not without tradeoffs. Costa Ricans receive comprehensive care, but not always timely care. The system prioritizes equity over speed, ensuring everyone receives treatment but accepting delays for non-urgent needs. Whether this represents success or limitation depends on perspective.

For international health policy, Costa Rica offers evidence that single-payer universal coverage can work in resource-limited settings when designed with sustainable financing, independent governance, and political commitment across administrations. The challenges Costa Rica faces—wait times, specialist shortages, fiscal pressure—exist in most universal coverage systems including wealthy countries. These aren't failures unique to developing contexts but inherent tensions in providing comprehensive care to entire populations with finite resources.

The question ahead for Costa Rica is whether gradual erosion of service timeliness will eventually undermine public support for the model. If wait times grow unacceptable and private alternatives remain accessible only to higher-income citizens, universality gives way to two-tier stratification. Preventing that outcome requires sustained investment in workforce, infrastructure, and operational efficiency—the unglamorous work of system maintenance that determines whether universal coverage remains universal in practice as well as principle.`

const PANAMA_SUMMARY = `In September 2025, Panama launched its Mesa Consultiva for Primary Health Care, establishing a framework for strengthening the foundation of a healthcare system that combines near-universal public coverage with sophisticated private infrastructure serving medical tourism—an arrangement that works well for those with access but leaves rural and indigenous populations underserved.

The recent digital transformation initiatives reveal Panama's healthcare modernization ambitions. A telemedicine program is reaching Indigenous territories previously requiring days of travel to access healthcare. The goal to eliminate 15 communicable diseases by 2030 represents genuine public health commitment. The World Bank-supported COVID-19 response increased laboratory capacity across 14 facilities, equipped 9 ICU units, and contributed to 84% vaccination coverage—infrastructure improvements that persist beyond the acute pandemic phase.

Yet Panama operates a fragmented system. The Ministry of Health provides primary care through clinics. The Social Security system (CSS) serves formal sector workers through separate hospitals. Private facilities, particularly in Panama City, offer services comparable to U.S. hospitals at lower costs, attracting international patients. For Panama's emerging middle class, this creates options. For rural Darién or Ngäbe-Buglé comarca residents, access remains limited.

The statistics capture both success and gaps. Life expectancy approaches 80 years, comparable to much wealthier nations. Infant mortality has declined substantially. Yet maternal mortality in indigenous areas remains far higher than national averages. The healthcare system's impressive aggregate numbers mask persistent inequities by geography and ethnicity.

Panama's economic growth from canal revenue and financial services provides fiscal capacity that most Central American neighbors lack. Healthcare spending as percentage of GDP exceeds regional averages. The country can afford healthcare investment—the question is whether resources reach populations beyond urban corridors.

The telemedicine expansion matters precisely because it addresses geography. Indigenous territories in Darién and comarcas face distance barriers that infrastructure investment alone can't solve—you can't build hospitals everywhere, but you can extend specialist consultation through connectivity. Whether digital platforms can provide culturally appropriate care and maintain quality across language and cultural differences remains to be tested.

The communicable disease elimination goals are ambitious but achievable. Panama has successfully controlled malaria in most regions, eliminated measles and rubella, and maintains strong vaccination coverage. Targeting 15 diseases for elimination by 2030 requires sustained surveillance, community engagement, and health system capacity to investigate and respond to outbreaks rapidly. These capabilities exist but require continuous investment.

The parallel private system creates interesting dynamics. Panama's private hospitals attract medical tourists from North America seeking affordable quality care—joint replacements, cardiac surgery, cancer treatment provided by U.S.-trained specialists at 40-60% of U.S. costs. This medical tourism brings revenue and employment but doesn't extend the same service levels to public system users.

Panama also serves as a healthcare hub for the region, with patients from throughout Central America seeking specialist care unavailable at home. This regional role generates economic benefits but strains capacity. Private hospitals accommodate international patients readily; public facilities face resource constraints managing domestic need.

The workforce situation is relatively favorable—Panama trains physicians domestically and attracts specialists from regional neighbors. Compensation in private facilities is competitive. But public sector salaries lag, creating retention challenges. The geographic maldistribution typical throughout Latin America persists: abundant specialists in Panama City, shortages in Darién.

What Panama's healthcare system demonstrates is that economic resources enable but don't guarantee equitable health access. The country can afford universal coverage and largely achieves it. The infrastructure and workforce exist. Yet delivering consistent quality care from Panama City's gleaming private hospitals to comarca health posts requires not just spending but deliberate attention to equity and system integration.

The primary healthcare focus in 2025 suggests recognition that specialty care and hospital infrastructure, however modern, can't substitute for accessible first-contact care preventing disease and managing chronic conditions. Whether Panama can extend primary care access to match its specialty care sophistication will determine whether healthcare system performance reflects the country's economic success across its entire population.`

const JAMAICA_SUMMARY = `"Where's the urgency to fix Jamaica's healthcare crisis?" asked a May 2025 letter to the Gleaner, expressing frustration shared by millions. The question is legitimate—Jamaica's healthcare system isn't failing gradually; by credible accounts, it has collapsed, with hospitals overwhelmed, medications unavailable, equipment broken, and patients waiting days only to be turned away from overcrowded, under-resourced wards.

The Cornwall Regional Hospital exemplifies systemic dysfunction. A refurbishment project begun in 2016 with $2 billion budget has consumed $21 billion by 2024 and remains incomplete after eight years. This isn't normal construction delay—it's a case study in mismanagement, cost overruns, and lack of accountability. While the hospital remains non-functional, patients who would have been served there must travel elsewhere or go without care.

The workforce crisis compounds infrastructure failures. In September 2025, Health Minister Christopher Tufton warned that the Caribbean could face a 600,000 healthcare professional shortfall by 2030 if current trends persist. Jamaica trains nurses and physicians, then watches them emigrate to better-compensated positions in the U.S., Canada, and U.K. Small island nations ramp up training to meet healthcare demands while simultaneously losing personnel to migration—running faster just to stay in place.

For ordinary Jamaicans, the system's collapse has immediate consequences. Teachers, civil servants, and young professionals postpone critical medical treatment because income must first cover food and housing. When they do reach public hospitals, they encounter absent medications and non-functioning diagnostic equipment. Those with resources seek private care or travel abroad; the majority navigate what multiple accounts describe as "a maze of inadequacy and indifference."

The inequity is stark. Wealthy Jamaicans access private facilities with reasonable quality care. Everyone else depends on a public system that can't consistently provide basic services. This two-tier reality exists in many countries, but Jamaica's public system deterioration appears particularly severe—not just unequal access but non-functioning essential services for the majority.

The crisis has deeper roots than recent political leadership. Decades of underinvestment, chronic budget shortfalls, and institutional weakness created fragility that recent economic stress has pushed toward failure. The COVID-19 pandemic revealed capacity limitations but didn't create them. Post-pandemic recovery has been uneven—private sector has rebounded, public healthcare has not.

Recent reform efforts haven't matched problem scale. The government has articulated commitments to healthcare system improvement and sustainable financing, but rhetoric exceeds action. Budget allocations remain insufficient for system needs. Infrastructure projects like Cornwall Hospital drag on. Workforce retention strategies haven't prevented continued emigration. The gap between stated priorities and implemented solutions persists.

What makes Jamaica's crisis particularly concerning is its middle-income country context. This isn't a low-income nation without resources—Jamaica has educated workforce, democratic institutions, and economic capacity exceeding many countries with better-functioning health systems. The failure is governance and prioritization, not absolute resource limitations.

Some capabilities remain. Emergency response continues, though overwhelmed. Vaccination programs function. Community health workers provide basic services. These persistent operations prevent complete collapse but don't constitute a functional system. Patients receive some care sometimes, rather than reliable care consistently.

PAHO engagement and international health partnerships provide technical support and some resources. The PAHO Country Cooperation Strategy 2025-2030 prioritizes health system strengthening. Yet external support can't substitute for domestic political will and sustained investment. Jamaica's healthcare crisis requires Jamaica's political system to prioritize health system functionality over other competing demands.

The urgency question from the Gleaner letter is apt. Healthcare system collapse happens gradually then suddenly—years of neglect reach tipping points where dysfunction becomes crisis. Jamaica has reached that point. Whether the political system can mobilize response matching problem scale remains unclear. What is clear is that current trajectories lead to worsening outcomes—higher maternal mortality, worse chronic disease control, catastrophic health expenditures impoverishing families seeking care the public system should provide.

For a country that achieved post-independence healthcare gains through well-functioning public health services, current conditions represent regression. Restoration requires not just increased funding but institutional reform, accountability mechanisms, workforce retention strategies, and sustained political commitment. Whether Jamaica in 2025 can mobilize that comprehensive response determines whether healthcare crisis becomes permanent condition or temporary nadir before rebuilding.`

const TRINIDAD_AND_TOBAGO_SUMMARY = `In October 2025, Trinidad and Tobago developed a comprehensive Monitoring and Evaluation Framework for its health system with PAHO support—a technical achievement highlighting that the country recognizes data-driven management as essential for modern healthcare, while simultaneously revealing that previous systems relied on manual, paper-based processes inadequate for meeting reporting obligations.

The framework development isn't merely administrative. Healthcare system improvement depends on knowing what works and what doesn't, which requires reliable data collection, analysis, and feedback. That Trinidad and Tobago needed external support to establish these capabilities reflects institutional capacity constraints that persist despite the country's relative prosperity. Oil and gas revenues provide fiscal resources that most Caribbean neighbors lack, yet these resources haven't translated to healthcare system sophistication matching economic capacity.

The digital health transformation efforts represent genuine modernization attempts. In August 2024, PAHO unveiled health service robots transferred to the Ministry of Health. In January 2025, the Ministry launched initiatives to lead a digital health revolution. These technologies offer potential efficiency gains—robots for hospital logistics and patient interaction, digital records for information continuity, telemedicine for extending specialist access beyond Port of Spain.

Yet technology adoption without addressing underlying system weaknesses risks creating expensive infrastructure that doesn't improve outcomes. Electronic health records require reliable electricity, internet connectivity, and trained staff to maintain data quality. Health service robots need maintenance, technical support, and integration with workflows. Digital transformation works when it enhances functional systems; it disappoints when deployed as solution to deeper structural problems.

Trinidad and Tobago operates a two-tier system with both public and private facilities managed through five Regional Health Authorities. Public healthcare is free at point of service, funded through general taxation. For routine primary care and emergency treatment, this provides access. For specialist consultation and elective surgery, wait times can be substantial. The Chronic Disease Assistance Programme (CDAP) provides free medications for diabetes, hypertension, and other chronic conditions—important for a population facing rising non-communicable disease burden.

The private sector provides alternatives for those who can afford it. Private hospitals in Port of Spain offer shorter wait times and more comfortable conditions. This creates typical two-tier dynamics: those with resources bypass public system constraints; those without depend on free services that are comprehensive in scope but variable in quality and timeliness.

Life expectancy approaches 74 years, lower than Costa Rica or Panama but higher than regional averages. The epidemiological profile reflects middle-income patterns: chronic diseases drive mortality and morbidity while infectious disease burden has declined. Diabetes prevalence is notably high, reflecting dietary patterns and physical inactivity levels concerning for long-term population health.

The healthcare workforce is generally adequate in quantity but faces distribution challenges. Urban areas, particularly Port of Spain and San Fernando, have reasonable provider density. Rural areas and Tobago face shortages. Migration to other Caribbean nations, Canada, and the U.S. creates retention challenges, though less severe than Jamaica's crisis-level emigration.

The Strategic Plan 2021-2025, based on the Government's Recovery Plan and National Development Strategy, articulates priorities including preventive care, chronic disease management, and health system strengthening. These are appropriate goals. Whether implementation matches ambition depends on budget allocations, institutional capacity, and political prioritization across electoral cycles.

What Trinidad and Tobago demonstrates is that middle-income countries with resource advantages can still struggle to translate those advantages into healthcare system performance. Oil and gas wealth provides fiscal capacity, but healthcare system functionality depends on institutional capability—workforce management, supply chain reliability, maintenance systems, quality improvement processes, and data-driven management.

The recognition that better monitoring and evaluation are needed suggests awareness that improvement requires measurement. The digital transformation initiatives signal commitment to modernization. Yet Trinidad and Tobago's healthcare system in 2025 appears to be at an inflection point—investments in data systems and technology offer potential for substantial improvement, but only if accompanied by strengthened institutional capacity and sustained operational focus.

The achievement of age-friendly health system recognition for Roxborough Hospital's outpatient clinic—the first in CARICOM—demonstrates that excellence is possible within the system. The challenge is extending that performance beyond individual facilities to systematic quality across the health sector. Trinidad and Tobago has resources and capabilities to achieve this; whether it does depends on whether healthcare system strengthening receives priority and attention matching its importance to population wellbeing.`

const GUYANA_SUMMARY = `In March 2025, President Irfaan Ali announced a five-year, $125 million National Healthcare Initiative extension—Guyana's newfound oil wealth creating perhaps the developing world's most dramatic healthcare transformation story, with ambitions to establish "a model of excellence by 2030" backed by one of the world's most advanced digital health systems.

The scale of investment is remarkable. A historic $143.2 billion healthcare budget allocation in 2025. Six new hospitals commissioned within months, each equipped with 24-hour emergency services, digital X-ray, CT scans, and modern operating theaters. Nearly 900 nursing assistants graduating to address workforce shortages. Over 35,000 children receiving comprehensive health screenings. A national cancer center. Partnership with Mount Sinai Health System bringing U.S. academic medical center expertise to Georgetown Public Hospital modernization.

This represents genuine transformation, not incremental improvement. A decade ago, Guyana's healthcare infrastructure resembled that of neighboring low-income countries—limited facilities, equipment shortages, minimal specialist capacity, workforce emigration. Suddenly, oil revenues provide resources to leapfrog typical development trajectories, investing simultaneously in infrastructure, equipment, workforce, and digital systems that most middle-income countries build gradually over decades.

The Mount Sinai partnership matters because it brings technical expertise and quality standards alongside capital investment. Guyana can build hospitals, but ensuring those hospitals deliver care meeting international standards requires clinical protocols, staff training, quality management systems, and institutional knowledge that take years to develop. The partnership accelerates this capability transfer.

The digital health system ambitions are particularly notable. Most healthcare systems digitize gradually, adapting legacy infrastructure to new technologies with resulting inefficiencies and integration challenges. Guyana can design digital-first architecture connecting facilities from inception—electronic health records enabling care continuity, telemedicine extending specialist consultation nationally, data analytics enabling population health management and quality monitoring.

Yet rapid transformation creates challenges alongside opportunities. Building six hospitals simultaneously strains project management capacity. Training 900 nursing assistants quickly risks quality variation without robust preceptorship and supervision. Implementing advanced digital systems requires reliable electricity and internet infrastructure that may not exist everywhere hospitals are built. Most fundamentally, healthcare system performance depends not just on infrastructure but on sustained operational excellence—the daily work of maintaining equipment, managing supplies, supporting staff, and ensuring quality that determines whether impressive buildings translate to better health outcomes.

The workforce component deserves attention. Guyana has historically lost trained healthcare personnel to emigration—better compensation in Trinidad, Barbados, Canada, and the U.S. drained capacity. New investment creates opportunities to retain graduates and attract expatriates to return, but only if working conditions and professional development match regional alternatives. Almost 900 new nursing assistants help with quantity; ensuring quality and retention requires sustained investment in career pathways and working conditions.

The cancer center represents sophisticated capability building. Cancer diagnosis and treatment require specialist oncologists, medical physicists, pathology infrastructure, chemotherapy protocols, and radiation therapy equipment—complex systems that most countries at Guyana's income level don't attempt. That Guyana can now invest in comprehensive cancer care reflects both resource availability and ambition to provide treatment domestically rather than requiring patients to travel abroad.

Georgetown Public Hospital modernization addresses the reality that flagship national hospitals often lag behind new construction in receiving investment. Upgrading existing facilities while simultaneously building new ones requires balancing resources and managing disruption during construction. The Mount Sinai partnership focuses on Georgetown suggests recognition that the premier referral hospital must match new facility standards.

What makes Guyana's situation unique globally is the sudden resource availability. Most healthcare system strengthening happens incrementally—a hospital here, a training program there, gradual capacity building over years. Oil revenues enable simultaneous investment across multiple dimensions. This creates possibilities for rapid improvement but also risks overwhelming implementation capacity.

The 2030 timeline for achieving "a model of excellence" is ambitious. Seven years to go from developing country healthcare infrastructure to excellence benchmarked against international standards requires not just capital investment but institutional development, workforce capability, quality culture, and sustained management attention. Infrastructure can be built quickly; organizational capabilities develop slowly.

The question ahead for Guyana is whether healthcare system development can match resource availability. Can institutions develop fast enough to manage new infrastructure? Can workforce training keep pace with facility expansion? Can supply chains reliably stock six new hospitals plus Georgetown modernization? Can digital systems be implemented effectively across diverse geographic settings? Most fundamentally, can sustained operational excellence be achieved, ensuring impressive infrastructure actually delivers improved population health outcomes?

For a country with one of the world's highest healthcare budget increases, expectations will be correspondingly high. Guyana's population will reasonably expect that dramatic investment produces dramatically better healthcare. Whether the system can deliver on that expectation determines whether oil wealth translates to health gains or merely to expensive infrastructure that underperforms potential. The next five years of implementation will reveal whether Guyana's healthcare transformation represents a new model for resource-rich developing countries or a cautionary tale about the limits of capital-intensive solutions to complex system challenges.`

const SURINAME_SUMMARY = `In May 2025, Suriname's public healthcare system adopted GNU Health Hospital and Health Information System—choosing open-source software for digital health transformation while simultaneously confronting physician and nurse outflow that threatens to undermine infrastructure investments with workforce depletion.

The GNU Health implementation represents pragmatic technological choice. Rather than purchasing expensive proprietary electronic health record systems, Suriname selected open-source software that provides similar functionality—patient records, prescribing systems, laboratory integration, health information reporting—without vendor lock-in or ongoing licensing costs. The phased rollout starting with Regional Service Centers and Primary Care facilities suggests appropriate sequencing, building digital capacity gradually rather than attempting system-wide transformation simultaneously.

The Patient Portal and My Health App announcements indicate patient-facing digital services that can improve engagement and access. Patients who can view their own health information, request appointments, and receive test results electronically may experience better care coordination and communication. Telemedicine and e-prescription implementation extends healthcare access beyond facility visits, particularly valuable for Suriname's interior regions where transportation to clinics requires substantial time and cost.

Yet technology adoption occurs against concerning workforce trends. Significant outflow of doctors and nurses creates a paradox—implementing digital health systems while healthcare providers who would use those systems emigrate. The government acknowledges this crisis, promising improved working conditions, career development, and temporary deployment of foreign medical personnel. These measures indicate recognition of the problem but don't yet constitute solution.

The workforce challenge reflects broader regional patterns. Suriname trains healthcare professionals who then seek better compensation in the Netherlands, Caribbean neighbors, or other developed nations. For a country of under 600,000 people, losing even modest numbers of physicians and nurses substantially impacts system capacity. Smaller facilities in the interior face particular shortages, leaving communities without consistent access to trained providers.

Suriname operates a mixed public-private system with National Basic Health Insurance providing access to primary, secondary, and tertiary care for citizens. The Regional Health Services manages 43 public primary clinics in coastal areas, while Medische Zending operates 52 centers in the interior. This split reflects Suriname's geographic and demographic reality—most population concentrated along the coast, with indigenous and Maroon communities distributed across interior regions accessible primarily by river.

Healthcare infrastructure in the interior remains basic. Many communities lack road access, requiring boat or air transport for referral to hospital-level care. The 52 Medische Zending health centers provide primary care and basic emergency treatment but lack capacity for complex cases. When serious illness or injury occurs, evacuation to Paramaribo can take hours or days. Digital health tools may improve remote consultation and clinical decision support, but can't substitute for physical access when hands-on care is needed.

The health agenda for 2026-2027 appropriately emphasizes prevention and primary care alongside digital transformation and healthcare financing. Prevention focus reflects recognition that Suriname faces rising non-communicable disease burden—diabetes, hypertension, cardiovascular disease—that is more cost-effectively addressed through risk reduction than treatment. Primary care strengthening would improve access and provide foundation for chronic disease management.

Suriname's malaria elimination progress offers an encouraging counterpoint to workforce and access challenges. Achieving goals toward elimination through 2025 demonstrates that sustained public health programming can succeed even in resource-limited settings. Malaria control requires continuous vector surveillance, rapid diagnosis and treatment, and community engagement—capabilities that Suriname has maintained despite other system challenges.

The National Development Plan's health priorities—disease and mortality reduction, quality healthcare availability and accessibility for all—articulate appropriate goals. The gap, as always, lies between stated priorities and implementation. Digital health infrastructure provides tools for improvement but doesn't automatically produce better outcomes. Workforce availability determines whether tools get used. Supply chains determine whether clinics have medications to prescribe. Transportation infrastructure determines whether patients can reach facilities. Management systems determine whether daily operations function reliably.

What Suriname demonstrates is that middle-income countries face similar healthcare system development challenges regardless of specific context. Limited fiscal space constrains what's possible. Geographic dispersion complicates service delivery. Workforce retention requires competing with wealthier neighbors. The difference is that Suriname's small population scale means even modest improvements can reach substantial proportions of citizens—if sustained.

The question ahead is whether digital transformation and workforce retention efforts can combine to strengthen rather than merely maintain current system function. Suriname isn't facing acute crisis like Haiti or Jamaica, but also isn't achieving the consistent quality access that Costa Rica or Panama provide. The trajectory is uncertain—workforce outflow could undermine recent digital investments, or improved working conditions could stabilize retention while new systems improve efficiency. Which scenario prevails depends on whether healthcare system strengthening receives sustained prioritization and resources beyond initial GNU Health implementation.`

// Issues arrays for each country
const CUBA_ISSUES = [
  "Healthcare System Collapse and Medication Shortages",
  "Epidemics (Dengue, Chikungunya, Oropouche) Overwhelming Hospitals",
  "Healthcare Worker Emigration Crisis"
]

const HAITI_ISSUES = [
  "Healthcare Facilities Under Attack - 40% Closed in Ouest",
  "Security Collapse Preventing Medical Access",
  "Foreign Aid Declining 30-40% Amid Worsening Crisis"
]

const DOMINICAN_REPUBLIC_ISSUES = [
  "Two-Tier System Creating Quality Stratification",
  "Public Healthcare Resource Constraints Despite 90% Coverage",
  "Rural and Marginalized Population Access Barriers"
]

const GUATEMALA_ISSUES = [
  "Maternal Mortality Crisis - 103 per 100,000 Births",
  "Indigenous Women Face 2x Higher Mortality Risk",
  "Rural Healthcare Access and Workforce Shortages"
]

const HONDURAS_ISSUES = [
  "Infrastructure Expansion Amid Supply Chain Failures",
  "Healthcare Workforce Emigration",
  "Rural-Urban Healthcare Access Inequity"
]

const EL_SALVADOR_ISSUES = [
  "Budget Cuts ($91M) Despite New Hospital Construction",
  "3,727 Healthcare Position Eliminations",
  "Growing Healthcare Access Inequality"
]

const NICARAGUA_ISSUES = [
  "Endemic Dengue and Vector-Borne Diseases",
  "Healthcare Data Transparency Concerns",
  "Rural Healthcare Access and Quality Gaps"
]

const COSTA_RICA_ISSUES = [
  "Universal Coverage With Months-Long Wait Times",
  "Specialist and Elective Surgery Access Delays",
  "Aging Population Straining Chronic Disease Management"
]

const PANAMA_ISSUES = [
  "Geographic Healthcare Access Inequity",
  "Indigenous Territory Healthcare Barriers",
  "Fragmented System Coordination Challenges"
]

const JAMAICA_ISSUES = [
  "Healthcare System Collapse - Hospitals Overwhelmed",
  "600,000 Caribbean Healthcare Professional Shortfall by 2030",
  "Infrastructure Crisis - Cornwall Hospital Still Incomplete After 8 Years"
]

const TRINIDAD_AND_TOBAGO_ISSUES = [
  "Manual Paper-Based Systems Requiring Modernization",
  "Two-Tier Healthcare Access Stratification",
  "Chronic Disease Burden Management"
]

const GUYANA_ISSUES = [
  "Rapid Healthcare Transformation from Oil Revenues",
  "Six New Hospitals Commissioning in 2025",
  "Workforce Training to Match Infrastructure Expansion"
]

const SURINAME_ISSUES = [
  "Digital Health Transformation with GNU Health Adoption",
  "Physician and Nurse Emigration Crisis",
  "Interior Region Healthcare Access Barriers"
]

async function generateHealthcareSummaries() {
  console.log('Generating healthcare summaries for 13 countries...\n')

  const summaries = [
    { country: COUNTRIES.CUBA, summary: CUBA_SUMMARY, issues: CUBA_ISSUES },
    { country: COUNTRIES.HAITI, summary: HAITI_SUMMARY, issues: HAITI_ISSUES },
    { country: COUNTRIES.DOMINICAN_REPUBLIC, summary: DOMINICAN_REPUBLIC_SUMMARY, issues: DOMINICAN_REPUBLIC_ISSUES },
    { country: COUNTRIES.GUATEMALA, summary: GUATEMALA_SUMMARY, issues: GUATEMALA_ISSUES },
    { country: COUNTRIES.HONDURAS, summary: HONDURAS_SUMMARY, issues: HONDURAS_ISSUES },
    { country: COUNTRIES.EL_SALVADOR, summary: EL_SALVADOR_SUMMARY, issues: EL_SALVADOR_ISSUES },
    { country: COUNTRIES.NICARAGUA, summary: NICARAGUA_SUMMARY, issues: NICARAGUA_ISSUES },
    { country: COUNTRIES.COSTA_RICA, summary: COSTA_RICA_SUMMARY, issues: COSTA_RICA_ISSUES },
    { country: COUNTRIES.PANAMA, summary: PANAMA_SUMMARY, issues: PANAMA_ISSUES },
    { country: COUNTRIES.JAMAICA, summary: JAMAICA_SUMMARY, issues: JAMAICA_ISSUES },
    { country: COUNTRIES.TRINIDAD_AND_TOBAGO, summary: TRINIDAD_AND_TOBAGO_SUMMARY, issues: TRINIDAD_AND_TOBAGO_ISSUES },
    { country: COUNTRIES.GUYANA, summary: GUYANA_SUMMARY, issues: GUYANA_ISSUES },
    { country: COUNTRIES.SURINAME, summary: SURINAME_SUMMARY, issues: SURINAME_ISSUES }
  ]

  const results = []

  for (const { country, summary, issues } of summaries) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: country.type,
            category: country.category
          }
        },
        create: {
          name: country.name,
          type: country.type,
          country: country.country,
          lat: country.lat,
          lng: country.lng,
          category: country.category,
          summary: summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      const charCount = summary.length
      results.push(`${country.name}: ${charCount} characters`)
      console.log(`✓ ${country.name} - ${charCount} characters`)
    } catch (error) {
      console.error(`✗ Failed to save ${country.name}:`, error)
      results.push(`${country.name}: FAILED`)
    }
  }

  console.log('\n=== COMPLETION REPORT ===')
  console.log(`Total countries processed: ${summaries.length}`)
  console.log('\nCharacter counts:')
  results.forEach(result => console.log(`  ${result}`))

  return results
}

generateHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
