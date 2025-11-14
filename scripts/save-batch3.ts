import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const countries = [
  {
    name: 'Venezuela',
    lat: 6.4238,
    lng: -66.5897,
    summary: `Venezuela's healthcare system isn't struggling—it has collapsed. More than 8 million Venezuelans cannot access basic healthcare, with indigenous and rural communities most affected. Major hospitals lack running water, a failure so fundamental it defines the crisis. Personnel have fled due to salaries that inflation renders worthless; with 270 percent inflation expected by end of 2025 and currency depreciation of 381 percent over the past twelve months, a doctor's monthly wage might not buy a week's groceries. Pharmacies sit empty, and patients who need chemotherapy, insulin, or antiretrovirals often can't obtain them. This is what healthcare system failure looks like.

Venezuela once had Latin America's most advanced healthcare infrastructure, with oil wealth funding hospitals, training programs, and universal access. That system has been destroyed by economic collapse, political dysfunction, corruption, and sanctions that compound shortages. Today, 7.6 million people are affected by lack of basic services. Venezuela ranks among the top three countries globally for increased human fragility, alongside North Korea and Libya—a devastating company for a nation that was relatively prosperous a generation ago.

Disease patterns reflect the collapse. Vaccine-preventable diseases like measles and diphtheria—once eliminated—have resurged. Malaria is endemic in mining regions. Maternal mortality has spiked; women deliver in hospitals without power, water, or supplies. Malnutrition affects children, with stunting and wasting rates rising. Infectious diseases spread through contaminated water and poor sanitation. Chronic diseases go unmanaged; diabetics can't get insulin, hypertension and heart disease go untreated, and preventable complications kill patients who would survive anywhere with functioning healthcare.

The brain drain is catastrophic. An estimated 40,000 doctors have emigrated since 2012, along with nurses and technicians. Those who remain often work without pay or for nominal amounts. Hospitals improvise, reusing supplies meant to be disposable, operating without anesthesia, or simply turning patients away.

International humanitarian assistance provides some relief. The 2025 allocation of €62.5 million from European Civil Protection and Humanitarian Aid supports healthcare, protection, water and sanitation, nutrition, and emergency response. UNICEF, WHO, and NGOs operate programs, but humanitarian aid can't rebuild a collapsed system—it merely prevents total catastrophe.

For Venezuela's healthcare to recover requires economic stabilization, political change, and years of reconstruction. In the meantime, those who can flee; those who cannot suffer.`,
    issues: ['Complete healthcare system collapse', 'Hospitals lacking water, power, supplies, and staff', 'Massive physician emigration and workforce crisis', 'Resurgence of vaccine-preventable diseases', '270% inflation rendering salaries and budgets meaningless']
  },
  {
    name: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    summary: `In November 2025, Ecuador's healthcare challenges extended beyond disease and infrastructure to something more elemental: safety. Dr. Steven Aguirre, a young physician working in the coastal region, was murdered by criminals attempting to kidnap him while traveling to work. Since May 2023, the Guayas Provincial Medical College has received more than 60 reports of extortion attempts against doctors. Rising crime—fueled by drug trafficking organizations that have made Ecuador a transit corridor—now threatens healthcare delivery itself. Physicians work in fear, and some rural areas struggle to recruit doctors unwilling to risk their lives.

Ecuador's healthcare system offers multiple pathways. The Public Health System provides free or low-cost care for the uninsured and low-income population. The Social Security System (IESS) covers formal employees through payroll contributions. The private sector offers faster service and specialized care for those who can afford it. This fragmentation creates inequities: the wealthy access excellent private care, formal workers receive decent IESS coverage, and the poor depend on often-overburdened public facilities.

Health challenges reflect Ecuador's middle-income status and geographic diversity. Coastal and Amazon regions face different disease profiles than the Andes. Dengue, Zika, and other vector-borne diseases circulate in tropical lowlands. Chronic diseases like diabetes and cardiovascular disease are rising with urbanization and dietary changes. Maternal and child health indicators have improved but remain worse in rural indigenous communities. Mental health services are underdeveloped despite high need.

A promising development is digital health transformation. Transform Health Ecuador, a coalition advancing Universal Health Coverage through digital technologies, has engaged community leaders, health professionals, and stakeholders to accelerate digital adoption. The Council for Quality Assurance in Higher Education aims to approve a curriculum integrating digital health subjects for health workers by 2025—recognition that modern healthcare requires digital literacy. Healthcare executive professional development programs running in November signal investment in leadership capacity.

But digital infrastructure alone can't solve Ecuador's healthcare challenges when doctors are extorted and murdered. Security is a precondition for healthcare access. Clinics in dangerous areas struggle to maintain staffing. Patients delay or avoid care rather than risk traveling through areas controlled by criminal groups.

Ecuador's healthcare future depends on whether the state can restore security that makes healthcare delivery possible, while simultaneously addressing system fragmentation and infrastructure gaps. Technology and training matter, but they're luxuries when basic safety cannot be guaranteed.`,
    issues: ['Physician safety threatened by crime and extortion', 'Healthcare system fragmentation and inequities', 'Rural healthcare staffing challenges', 'Vector-borne diseases in tropical regions', 'Security crisis impeding healthcare delivery']
  },
  {
    name: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    summary: `Bolivia's Seguro Único de Salud (SUS), implemented in 2019, represented an ambitious attempt to provide universal health coverage, guaranteeing primary, secondary, and tertiary services to the population—particularly informal workers and their families who previously lacked insurance. The program is part of Bolivia's Economic and Social Development Plan 2021-2025, which places health as a central pillar of the government's agenda. In principle, SUS should have transformed healthcare access for millions. In practice, the 2025 assessment is sobering: "impact in increasing access to quality healthcare has been very limited."

Bolivia's healthcare challenges are fundamental. The country provides 1.4 hospital beds per 1,000 inhabitants, well below the world average. Medical personnel are scarce and unevenly distributed, concentrated in cities like La Paz, Cochabamba, and Santa Cruz while rural and indigenous communities—where needs are greatest—go underserved. The unified family, community, and intercultural health model aims to integrate traditional and Western medicine, respecting indigenous healing practices while providing evidence-based care, but implementation has been inconsistent.

Disease burden reflects Bolivia's geography and development level. At high altitude, respiratory illnesses are common. Malnutrition affects children in poor rural areas, with stunting rates concerning. Maternal mortality remains elevated compared to wealthier nations; women in remote areas often deliver without skilled attendance, and complications that would be routinely managed elsewhere prove fatal. Infectious diseases including tuberculosis, Chagas disease, and dengue affect different regions. Chronic diseases are rising as urbanization and diet changes increase obesity, diabetes, and cardiovascular disease prevalence.

Infrastructure is antiquated in much of the country. Rural health posts lack basic equipment, medications, and reliable power or water. Referral systems from primary to secondary and tertiary care function poorly, meaning seriously ill patients may not reach facilities that could save them. The COVID-19 pandemic exposed these vulnerabilities acutely—Bolivia had among South America's highest per-capita death rates, revealing how weak health systems collapse under stress.

The SUS's limited impact isn't surprising given these structural constraints. Universal coverage is meaningless if clinics lack medicines, hospitals lack beds, and rural communities lack providers. Insurance doesn't create supply.

Bolivia's path forward requires not just policy declarations but sustained investment in infrastructure, workforce training and deployment to underserved areas, and supply chain improvements to ensure medicines and equipment reach where they're needed. The vision of universal coverage is right; achieving it requires resources and execution that have so far proved elusive.`,
    issues: ['SUS universal coverage impact limited by infrastructure', 'Hospital bed shortage and facility inadequacy', 'Severe rural-urban healthcare workforce imbalance', 'High maternal mortality in remote areas', 'Weak referral systems and care coordination']
  },
  {
    name: 'Paraguay',
    lat: -23.4425,
    lng: -58.4438,
    summary: `Paraguay operates one of the world's most fragmented healthcare systems. Three completely separate channels exist: IPS (Instituto de Previsión Social, the social security system), public hospitals, and private healthcare facilities. Each operates under entirely different funding mechanisms, access requirements, and coverage levels, with minimal coordination. This fragmentation creates absurdities: a patient might be IPS-insured for their job but need to go to a public hospital for a service IPS doesn't offer, or pay out-of-pocket for private care to avoid wait times.

Public hospitals provide free care to anyone with valid identification—even foreign tourists and temporary residents. This policy reflects Paraguay's constitutional guarantee of healthcare as a right, but in practice, "free" often means long waits, shortages of medications and supplies, and overcrowded facilities. IPS covers formal sector workers through payroll deductions, offering better resourced facilities but still facing capacity constraints. Private healthcare ranges from affordable prepaid plans at approximately $50 monthly to international insurance at $150-300 monthly, providing the fastest access and highest quality for those who can pay.

The result is stark inequality. Paraguay has been described as "one of the most expensive places in the world to fall ill," with nearly 40 percent of annual health spending coming directly from people's pockets—among the highest out-of-pocket rates globally. This means healthcare decisions are often financial calculations: Can we afford this medication? Should we delay this surgery? For the poor, the answer is often no.

Disease patterns reflect Paraguay's tropical climate and development challenges. Dengue, chikungunya, and Zika are the most frequent vector-borne diseases, with outbreaks during rainy seasons. Respiratory infections and COVID variants circulate. Chronic diseases are rising—diabetes, hypertension, cardiovascular disease—as dietary patterns shift and populations age. Healthcare infrastructure varies dramatically by region, with Asunción and larger cities having adequate facilities while rural areas, particularly in the Chaco, lack even basic services.

A positive development: PAHO initiatives financed by the U.S. government have transformed 31 health facilities in Paraguay's underserved northeast, including hospitals, family health units, and dispensaries. These targeted investments demonstrate what's possible, but they're drops in the ocean of need.

Paraguay's healthcare system won't improve until fragmentation is addressed—either through better coordination between the three channels or, more radically, through unified financing that eliminates the current lottery of coverage quality based on employment status and ability to pay. The system's inequity isn't accidental; it's structural.`,
    issues: ['Extreme system fragmentation across three channels', 'Nearly 40% out-of-pocket healthcare spending burden', 'Stark inequality based on employment and income', 'Vector-borne disease burden (dengue, Zika, chikungunya)', 'Rural healthcare infrastructure deficits']
  },
  {
    name: 'Uruguay',
    lat: -32.5228,
    lng: -55.7658,
    summary: `On November 2025, Uruguay's Minister of Public Health, Cristina Lustemberg, issued a stark warning: 30,000 people wait for mental health treatment, and access "should not be a privilege in some places." Her remarks, delivered during the presentation of the "National Action for Mental Health" initiative, highlighted a crisis hiding in plain sight. While Uruguay's physical healthcare system functions relatively well, mental health is the neglected stepchild—and the statistics are alarming. Twenty-nine percent of the adult population shows symptoms of psychological distress, and 24 percent report the highest levels of loneliness. In a country of 3.5 million, these figures represent hundreds of thousands suffering without adequate care.

Uruguay's healthcare system is among Latin America's most developed. The National Integrated Health System (SNIS), established in 2007, integrates public and private providers under a framework that guarantees universal coverage. Citizens choose between ASSE (public healthcare) or mutualistas (private non-profit cooperatives), with the government subsidizing premiums for the poor. Uruguay's doctor-population ratio ranks second in Latin America and eleventh globally at 4.6 doctors per 1,000 people, indicating strong human resources. Life expectancy exceeds 77 years, infant mortality is low, and healthcare infrastructure is generally good.

Yet quality and access aren't uniform. Mutualistas, funded by monthly fees of $100-200 per person, generally offer better facilities, shorter wait times, and more comprehensive services than ASSE. This creates a two-tier system where the wealthy get better care faster. Mental health services are particularly underdeveloped—the 30,000-person waitlist represents people who sought help but can't access it, likely understating total need since many never seek care due to stigma or perceived futility.

Uruguay faces the health challenges of an aging, middle-income population. Chronic diseases—cardiovascular disease, cancer, diabetes—are leading causes of death. Obesity rates are rising. The mental health crisis reflects both biological causes and social factors: loneliness in an urbanized society, economic stress, and intergenerational trauma from the dictatorship era (1973-1985) that remains under-addressed.

The government's 2025 advancement of AUVISA, an independent agency to regulate medicines and health technologies, signals ongoing system improvements. But regulatory agencies don't treat depression or reduce loneliness.

Uruguay's healthcare future depends on whether mental health receives the investment and priority that physical health enjoys, and whether the two-tier system's inequities can be narrowed. The country has the resources and institutional capacity; the question is political will.`,
    issues: ['30,000 people waiting for mental health treatment', 'High rates of psychological distress and loneliness', 'Two-tier system with mutualista-ASSE quality gaps', 'Rising chronic disease burden in aging population', 'Mental health services underdevelopment and stigma']
  }
];

(async () => {
  for (const c of countries) {
    await prisma.locationSummary.upsert({
      where: { name_type_category: { name: c.name, type: 'country', category: 'healthcare' } },
      create: { ...c, type: 'country', country: c.name, category: 'healthcare', issues: JSON.stringify(c.issues), topStories: '[]', storyCount: 0 },
      update: { summary: c.summary, issues: JSON.stringify(c.issues), updatedAt: new Date() }
    });
    console.log(`✓ ${c.name}: ${c.summary.length} characters`);
  }
  await prisma.$disconnect();
  console.log('\n✅ ALL 13 AMERICAS COUNTRIES SAVED!');
})();
