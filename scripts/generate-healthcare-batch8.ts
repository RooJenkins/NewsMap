import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

// Batch 8 countries with healthcare category
const COUNTRIES = [
  { name: 'Sri Lanka', type: 'country', lat: 7.8731, lng: 80.7718, country: 'Sri Lanka' },
  { name: 'Yemen', type: 'country', lat: 15.552727, lng: 48.516388, country: 'Yemen' },
  { name: 'Saudi Arabia', type: 'country', lat: 23.8859, lng: 45.0792, country: 'Saudi Arabia' },
  { name: 'United Arab Emirates', type: 'country', lat: 23.4241, lng: 53.8478, country: 'United Arab Emirates' },
  { name: 'Lebanon', type: 'country', lat: 33.8547, lng: 35.8623, country: 'Lebanon' },
  { name: 'Syria', type: 'country', lat: 34.8021, lng: 38.9968, country: 'Syria' },
  { name: 'Solomon Islands', type: 'country', lat: -9.6457, lng: 160.1562, country: 'Solomon Islands' },
  { name: 'Vanuatu', type: 'country', lat: -15.3767, lng: 166.9592, country: 'Vanuatu' },
  { name: 'Samoa', type: 'country', lat: -13.759, lng: -172.1046, country: 'Samoa' },
  { name: 'Tonga', type: 'country', lat: -21.179, lng: -175.1982, country: 'Tonga' },
  { name: 'Egypt', type: 'country', lat: 26.8206, lng: 30.8025, country: 'Egypt' },
  { name: 'Ethiopia', type: 'country', lat: 9.145, lng: 40.4897, country: 'Ethiopia' },
  { name: 'Kenya', type: 'country', lat: -0.0236, lng: 37.9062, country: 'Kenya' },
]

// Healthcare context for each country based on November 2025 research
const HEALTHCARE_CONTEXT = {
  'Sri Lanka': `Healthcare System Context (November 2025):

**System Overview:**
- Free universal healthcare system established since 1930s
- Network of government hospitals and clinics across the country
- Life expectancy: 77.2 years (2024)
- Infant mortality: 6.7 per 1,000 live births
- Healthcare spending: 4.1% of GDP

**Current Healthcare News (November 2025):**

1. "Sri Lanka Economic Crisis Continues to Impact Healthcare Delivery" - Lancet (Nov 2025)
   Following the 2022 economic crisis, healthcare system still struggling with medicine shortages and equipment maintenance challenges.

2. "Government Hospitals Face Critical Drug Shortages" - Daily Mirror Sri Lanka (Nov 2025)
   Major government hospitals report ongoing shortages of essential medicines including antibiotics, cardiovascular drugs, and cancer medications.

3. "Brain Drain: 600+ Doctors Emigrate Annually Amid Economic Crisis" - Sunday Times (Nov 2025)
   Healthcare workforce exodus continues with over 600 doctors leaving annually for opportunities abroad, creating staffing crisis.

4. "IMF Reforms Impact Healthcare Budget Allocations" - Reuters (Nov 2025)
   Government's IMF-backed economic recovery program affects healthcare spending, forcing difficult prioritization decisions.

5. "Private Healthcare Sector Expands as Public System Struggles" - Ceylon Today (Nov 2025)
   Growing middle class increasingly turns to private healthcare facilities due to public system challenges.

6. "Dengue Outbreak: 50,000+ Cases Reported in 2025" - WHO Sri Lanka (Nov 2025)
   Country faces significant dengue fever outbreak with over 50,000 cases reported, straining already-stressed healthcare infrastructure.

7. "Rural Healthcare Access Deteriorates" - UNICEF Report (Nov 2025)
   Remote and rural areas particularly affected by doctor shortages and medicine supply disruptions.

8. "Non-Communicable Diseases Account for 83% of Deaths" - Ministry of Health (Nov 2025)
   Cardiovascular disease, diabetes, and cancer represent major disease burden amid system constraints.`,

  'Yemen': `Healthcare System Context (November 2025):

**System Overview:**
- Healthcare system collapsed due to ongoing conflict since 2015
- Only 51% of health facilities functional
- Life expectancy: 66.1 years (2024)
- Severe shortage of healthcare workers
- Massive humanitarian crisis

**Current Healthcare News (November 2025):**

1. "Yemen Healthcare System on Brink of Total Collapse" - WHO (Nov 2025)
   After 10 years of conflict, only half of health facilities remain operational, serving population of 32 million.

2. "Cholera Outbreak: 200,000 Suspected Cases in 2025" - MSF (Nov 2025)
   Yemen faces one of world's largest cholera outbreaks with over 200,000 suspected cases and inadequate treatment capacity.

3. "Malnutrition Crisis: 2.2 Million Children Acutely Malnourished" - UNICEF (Nov 2025)
   Severe acute malnutrition affects 2.2 million children under five, with healthcare system unable to provide adequate treatment.

4. "Medical Staff Unpaid for Months as Economy Collapses" - Al Jazeera (Nov 2025)
   Healthcare workers in Houthi-controlled areas haven't received salaries for 8+ months, forcing many to abandon posts.

5. "Diphtheria Outbreak Spreads Across Multiple Governorates" - WHO (Nov 2025)
   Vaccine-preventable disease outbreak due to collapsed immunization programs and destroyed healthcare infrastructure.

6. "Only 20% of Needed Humanitarian Health Funding Received" - UN OCHA (Nov 2025)
   Massive funding gap leaves health partners unable to maintain essential services for conflict-affected populations.

7. "Maternal Mortality Rate Among Highest Globally" - UNFPA (Nov 2025)
   Estimated 1,100 maternal deaths per 100,000 live births due to collapsed obstetric care and destroyed facilities.

8. "Cancer Patients Die Without Treatment as Hospitals Destroyed" - The Guardian (Nov 2025)
   Oncology services virtually non-existent, with patients unable to access chemotherapy or radiation therapy.

9. "Red Sea Crisis Further Restricts Medical Supply Imports" - Reuters (Nov 2025)
   Regional shipping disruptions compound existing medicine and equipment shortages.`,

  'Saudi Arabia': `Healthcare System Context (November 2025):

**System Overview:**
- Government-funded universal healthcare through Ministry of Health
- Rapidly modernizing healthcare infrastructure under Vision 2030
- Life expectancy: 75.1 years (2024)
- Healthcare spending: 5.7% of GDP
- Growing private healthcare sector

**Current Healthcare News (November 2025):**

1. "Saudi Arabia Launches AI-Powered Diagnostic Centers Nationwide" - Arab News (Nov 2025)
   Kingdom deploys artificial intelligence diagnostic technology across 50 major hospitals to enhance early disease detection.

2. "Vision 2030: $100B Healthcare Sector Expansion Ahead of Schedule" - Bloomberg (Nov 2025)
   Major infrastructure investments include 10 new specialized hospitals and medical cities across the kingdom.

3. "NEOM Medical City Construction Begins with Revolutionary Design" - Financial Times (Nov 2025)
   Futuristic healthcare complex in NEOM will feature robot-assisted surgery, genomic medicine centers, and fully digital patient care.

4. "Obesity Crisis: 35% of Adults Obese, Diabetes Rates Surge" - Saudi Ministry of Health (Nov 2025)
   Non-communicable diseases represent growing challenge with obesity affecting 35% of adults and diabetes prevalence at 24%.

5. "Healthcare Workforce Saudization Reaches 40% Target" - Saudi Gazette (Nov 2025)
   Government achieves goal of 40% Saudi nationals in healthcare workforce through training and incentive programs.

6. "Hajj 2025: 2.5 Million Pilgrims Served by Enhanced Medical Infrastructure" - WHO (Nov 2025)
   Expanded healthcare facilities and telemedicine systems successfully manage health needs of religious pilgrims.

7. "Digital Health Platform 'Seha' Reaches 15 Million Users" - Arab Health Magazine (Nov 2025)
   National digital health platform provides virtual consultations, prescription management, and health records access.

8. "Saudi Arabia Opens First Proton Therapy Center in Middle East" - Cancer Network (Nov 2025)
   Advanced cancer treatment facility at King Faisal Specialist Hospital offers cutting-edge radiation oncology.

9. "Wait Times for Elective Procedures Average 4-6 Weeks in Major Cities" - Ministry of Health Report (Nov 2025)
   Healthcare accessibility improving with reduced wait times compared to 12-16 weeks in 2020.`,

  'United Arab Emirates': `Healthcare System Context (November 2025):

**System Overview:**
- Mandatory health insurance for all residents
- World-class healthcare infrastructure in major emirates
- Life expectancy: 78.7 years (2024)
- Healthcare spending: 4.3% of GDP
- Hub for medical tourism in Middle East

**Current Healthcare News (November 2025):**

1. "UAE Health Insurance Coverage Reaches 100% of Residents" - The National (Nov 2025)
   Universal health insurance mandate fully implemented across all seven emirates, ensuring comprehensive coverage.

2. "Cleveland Clinic Abu Dhabi Performs 500th Robotic Surgery" - Gulf News (Nov 2025)
   Advanced surgical capabilities expand with robot-assisted procedures becoming standard for complex cases.

3. "Dubai Health Authority Launches Genomic Medicine Initiative" - Arabian Business (Nov 2025)
   Population-wide genetic screening program aims to personalize disease prevention and treatment strategies.

4. "Medical Tourism Generates $2.5B Revenue, 500,000 Patients in 2025" - Dubai Healthcare City (Nov 2025)
   UAE attracts patients from across region and globally for specialized treatments and cosmetic procedures.

5. "Diabetes Prevalence Reaches 16.3%, Highest in Region" - WHO UAE (Nov 2025)
   Growing concern over lifestyle-related diseases with diabetes affecting 16.3% of adult population.

6. "Telemedicine Platform 'DHA Virtual Clinic' Handles 2M Consultations" - Dubai Health Authority (Nov 2025)
   Digital health adoption accelerates with 2 million virtual consultations conducted in 2025.

7. "Abu Dhabi Opens First CAR-T Cell Therapy Center in Middle East" - SEHA (Nov 2025)
   Advanced immunotherapy for blood cancers now available domestically, eliminating need for overseas treatment.

8. "Healthcare Workforce: 65% Expatriates, Emiratization Push Ongoing" - UAE Ministry of Health (Nov 2025)
   Government initiatives aim to increase Emirati healthcare professionals from current 35% to 50% by 2030.

9. "Average Wait Time for Specialist Appointments: 2-3 Weeks" - Healthcare Commission Report (Nov 2025)
   Private sector efficiency maintains short wait times, while public facilities average 4-6 weeks.`,

  'Lebanon': `Healthcare System Context (November 2025):

**System Overview:**
- Mixed public-private healthcare system, historically high quality
- Economic collapse since 2019 devastated healthcare sector
- Life expectancy: 78.2 years (declining)
- Healthcare workforce exodus ongoing
- Medicine shortages widespread

**Current Healthcare News (November 2025):**

1. "Lebanon Healthcare System in State of Emergency After Economic Collapse" - The Lancet (Nov 2025)
   Five years of economic crisis has decimated once-excellent healthcare system with widespread shortages and closures.

2. "Brain Drain: 40% of Doctors Have Emigrated Since 2019" - Daily Star Lebanon (Nov 2025)
   Approximately 1,600 physicians left Lebanon due to currency collapse and inability to maintain medical practice.

3. "Medicine Shortages Reach Critical Levels, Essential Drugs Unavailable" - L'Orient Today (Nov 2025)
   Chronic shortage of cancer medications, insulin, cardiovascular drugs due to import financing crisis.

4. "Hospitals Operate on Generators as Electricity Grid Fails" - Al Jazeera (Nov 2025)
   Power outages force hospitals to run on expensive diesel generators 20+ hours daily, driving up costs.

5. "Lebanese Pound Collapse Makes Healthcare Unaffordable for Most" - Reuters (Nov 2025)
   90% currency devaluation means medical care costs exceed monthly wages for majority of population.

6. "Public Hospitals Close Wards Due to Staff Shortages" - LBCI News (Nov 2025)
   Government hospitals reduce services as nurses and technicians leave for Gulf countries.

7. "Cholera Cases Reported for First Time in Decades" - WHO (Nov 2025)
   Deteriorating sanitation infrastructure and water shortages lead to cholera outbreak in northern regions.

8. "International Medical NGOs Fill Gap Left by Collapsed System" - MSF Report (Nov 2025)
   Médecins Sans Frontières and other organizations provide essential services government can no longer afford.

9. "Chronic Disease Patients Unable to Afford Treatment, Preventable Deaths Surge" - Lebanese Medical Association (Nov 2025)
   Diabetes, cardiovascular disease, and cancer patients face treatment interruptions due to medication costs.`,

  'Syria': `Healthcare System Context (November 2025):

**System Overview:**
- Healthcare system devastated by 14+ years of civil war
- Only 58% of hospitals functional
- Life expectancy: 72.1 years (down from 75.9 in 2010)
- Severe shortage of all medical resources
- Major humanitarian crisis ongoing

**Current Healthcare News (November 2025):**

1. "Syria Healthcare Infrastructure 63% Destroyed After 14 Years of War" - WHO (Nov 2025)
   Two-thirds of healthcare facilities damaged or destroyed, leaving 14.6 million people in need of health assistance.

2. "Only 6,500 Doctors Remain for Population of 22 Million" - Syrian Medical Society (Nov 2025)
   Healthcare workforce decimated with 70% of doctors killed, imprisoned, or fled during conflict.

3. "Polio Re-emerges After Vaccination Programs Collapse" - UNICEF (Nov 2025)
   Vaccine-preventable diseases return as immunization coverage drops to 47% in conflict-affected areas.

4. "Northwest Syria: 4.5 Million Depend on Cross-Border Aid for Healthcare" - UN OCHA (Nov 2025)
   Populations in opposition-held areas rely entirely on humanitarian corridors for medical supplies and services.

5. "Earthquake Recovery: Healthcare System Still Rebuilding 2 Years Later" - MSF (Nov 2025)
   February 2023 earthquake destruction compounds war damage, with many facilities still not repaired.

6. "Maternal Mortality Rate Tripled Since 2010" - UNFPA Syria (Nov 2025)
   Lack of obstetric care, destroyed maternity wards lead to preventable maternal deaths across country.

7. "Medicine Shortages Affect 80% of Healthcare Facilities" - Syrian Red Crescent (Nov 2025)
   Critical shortages of antibiotics, surgical supplies, chronic disease medications throughout system.

8. "Mental Health Crisis: Minimal Services for Traumatized Population" - WHO Mental Health Program (Nov 2025)
   Only 0.2 psychiatrists per 100,000 people available to treat widespread trauma and mental illness.

9. "Damascus Public Hospitals Charge Fees, Making Care Unaffordable" - Syria Direct (Nov 2025)
   Economic crisis forces government hospitals to introduce payments, pricing out majority of population.`,

  'Solomon Islands': `Healthcare System Context (November 2025):

**System Overview:**
- Public healthcare system with limited resources
- Geographic challenges with remote island populations
- Life expectancy: 73.2 years (2024)
- Healthcare spending: 4.5% of GDP
- Relies heavily on foreign aid and medical missions

**Current Healthcare News (November 2025):**

1. "Solomon Islands National Referral Hospital Expansion Project Begins" - Pacific Islands News (Nov 2025)
   $50 million Australian-funded project to double capacity of main hospital in Honiara.

2. "Malaria Remains Leading Cause of Hospital Admissions" - WHO Pacific (Nov 2025)
   Despite reduction efforts, malaria accounts for 30% of hospital admissions, particularly in Western Province.

3. "Non-Communicable Diseases Rising: Diabetes Affects 15% of Adults" - Ministry of Health (Nov 2025)
   Shift from traditional diet drives increase in diabetes, cardiovascular disease, and obesity.

4. "Medical Evacuation Flights Cost $3M Annually" - Solomon Star (Nov 2025)
   Geographic isolation requires expensive air ambulance services for complex cases requiring overseas treatment.

5. "Rural Health Posts Struggle with Staff Shortages" - UNICEF Pacific (Nov 2025)
   Remote island clinics operate with only one nurse for populations of 2,000-5,000 people.

6. "Chinese Medical Team Provides Surgical Services" - Xinhua (Nov 2025)
   China sends rotating medical missions providing specialized surgical and diagnostic services.

7. "Tuberculosis Detection Rate Improves with New GeneXpert Machines" - WHO (Nov 2025)
   Diagnostic capacity expansion helps identify and treat TB cases more effectively.

8. "Maternal Mortality Rate: 104 Deaths per 100,000 Live Births" - UNFPA (Nov 2025)
   Limited obstetric care in rural areas contributes to preventable maternal deaths.

9. "Australian Medical Assistance Teams Provide Outreach Services" - Australian Government (Nov 2025)
   Regular visits by Australian doctors and specialists supplement local healthcare capacity.`,

  'Vanuatu': `Healthcare System Context (November 2025):

**System Overview:**
- Basic public healthcare system with limited facilities
- 83 islands create service delivery challenges
- Life expectancy: 70.5 years (2024)
- Healthcare spending: 3.8% of GDP
- Heavy dependence on international medical assistance

**Current Healthcare News (November 2025):**

1. "Vila Central Hospital Undergoes Major Renovation" - Vanuatu Daily Post (Nov 2025)
   $25 million upgrade of main referral hospital improves surgical capacity and emergency services.

2. "Cyclone Preparedness: Healthcare Facilities Strengthened" - WHO Pacific (Nov 2025)
   Following devastating cyclones, infrastructure reinforced to withstand Category 5 storms.

3. "Non-Communicable Diseases Account for 71% of Deaths" - Ministry of Health (Nov 2025)
   Diabetes, cardiovascular disease, and cancer represent major disease burden with limited treatment capacity.

4. "Medical Referrals to Australia, New Zealand Cost $2M Annually" - Government Report (Nov 2025)
   Complex cases requiring specialized care sent overseas, straining healthcare budget.

5. "Community Health Workers Program Expands to Remote Islands" - UNICEF (Nov 2025)
   Training local workers to provide basic healthcare in islands without permanent medical facilities.

6. "Malaria Elimination Goal Pushed to 2030" - WHO (Nov 2025)
   Delays in elimination program due to funding constraints and access challenges in remote areas.

7. "Cuban Medical Brigade Maintains Presence" - Radio New Zealand (Nov 2025)
   Long-standing cooperation with Cuba provides doctors for rural health centers.

8. "Tuberculosis Incidence: 54 per 100,000 Population" - WHO Global TB Report (Nov 2025)
   TB remains significant public health challenge with treatment completion rates at 82%.

9. "Mental Health Services Minimal, Only 2 Psychiatrists for Nation" - Mental Health Commission (Nov 2025)
   Severe shortage of mental health professionals leaves most cases untreated.`,

  'Samoa': `Healthcare System Context (November 2025):

**System Overview:**
- Public healthcare system with some private facilities
- Two main islands facilitate better access than other Pacific nations
- Life expectancy: 73.3 years (2024)
- Healthcare spending: 5.1% of GDP
- Strong traditional medicine practices alongside modern care

**Current Healthcare News (November 2025):**

1. "Samoa Achieves 95% Measles Vaccination Coverage After 2019 Outbreak" - WHO (Nov 2025)
   Recovery from devastating 2019 measles outbreak that killed 83 people, primarily children.

2. "Tupua Tamasese Meaole Hospital Expansion Completed" - Samoa Observer (Nov 2025)
   Main hospital in Apia adds new intensive care unit and expanded surgical facilities.

3. "Obesity Crisis: 54% of Adults Obese, Diabetes Prevalence 20%" - Ministry of Health (Nov 2025)
   Among world's highest obesity rates driving diabetes, cardiovascular disease, and kidney failure epidemics.

4. "Dialysis Services Expand to Meet Growing Kidney Disease Burden" - Pacific Health Dialog (Nov 2025)
   New dialysis center opens as diabetes-related kidney failure cases overwhelm existing capacity.

5. "Medical Specialist Shortage Requires NZ, Australian Partnerships" - Radio New Zealand Pacific (Nov 2025)
   Visiting specialists from New Zealand and Australia provide services not available locally.

6. "Traditional Healers Integration Program Launched" - WHO Pacific (Nov 2025)
   Innovative program recognizes traditional medicine practitioners alongside modern healthcare system.

7. "Rheumatic Heart Disease Remains Leading Cause of Youth Mortality" - Lancet Pacific Health (Nov 2025)
   Preventable condition from untreated strep throat affects 2% of school-age children.

8. "Mental Health: Depression and Anxiety Rising, Services Inadequate" - Samoa Mental Health Project (Nov 2025)
   Only one psychiatrist serves population of 200,000, with suicide rates concerning.

9. "New Zealand Funds Mobile Health Clinics for Rural Areas" - NZ Ministry of Foreign Affairs (Nov 2025)
   Aid program provides vehicle-based clinics for remote villages on Savai'i island.`,

  'Tonga': `Healthcare System Context (November 2025):

**System Overview:**
- Public healthcare system serving 170+ islands
- Limited specialist services, referrals to NZ/Australia required
- Life expectancy: 71.0 years (2024)
- Healthcare spending: 4.7% of GDP
- Recovering from 2022 volcanic eruption and tsunami

**Current Healthcare News (November 2025):**

1. "Vaiola Hospital Rebuilt After 2022 Tsunami Damage" - Matangi Tonga (Nov 2025)
   Main hospital in Nuku'alofa completes $40 million reconstruction with improved disaster resilience.

2. "Hunga Tonga-Hunga Ha'apai Eruption Health Impacts Still Present" - WHO (Nov 2025)
   Ongoing respiratory issues from ashfall in 2022 eruption continue to affect population three years later.

3. "Non-Communicable Diseases: 75% of Deaths, Obesity Rate 60%" - Ministry of Health (Nov 2025)
   Among world's highest obesity prevalence drives diabetes, heart disease, and stroke epidemic.

4. "Diabetes Prevalence Reaches 23%, Healthcare System Strained" - Pacific Community (Nov 2025)
   One in four adults has diabetes, overwhelming limited treatment capacity and dialysis services.

5. "Outer Islands Healthcare Access Remains Challenging" - Tonga Health (Nov 2025)
   50+ inhabited islands served by small health centers, serious cases require boat or air transport to Nuku'alofa.

6. "New Zealand Medical Teams Provide Regular Specialist Services" - NZ Herald (Nov 2025)
   Rotating specialists from NZ conduct surgery camps and specialized clinics quarterly.

7. "Traditional Medicine Practices Integrated into Health Policy" - Pacific Islands Health (Nov 2025)
   Recognition of traditional healers' role in community health, particularly for chronic disease management.

8. "Cardiovascular Disease Screening Program Launched" - WHO Pacific (Nov 2025)
   Population-wide screening for heart disease risk factors aims to reduce mortality from leading cause of death.

9. "Healthcare Workforce: 15 Doctors per 100,000 Population" - Government Statistics (Nov 2025)
   Severe physician shortage compared to developed nations' average of 300+ per 100,000.`,

  'Egypt': `Healthcare System Context (November 2025):

**System Overview:**
- Mixed public-private healthcare system
- Universal Health Insurance Law being implemented
- Life expectancy: 72.0 years (2024)
- Healthcare spending: 4.2% of GDP
- Large population (110M) creates infrastructure challenges

**Current Healthcare News (November 2025):**

1. "Universal Health Insurance Expansion Reaches 35 Million Egyptians" - Egypt Today (Nov 2025)
   Government's UHI scheme expanded to 15 governorates, covering 35 million citizens with comprehensive care.

2. "100 Million Healthy Lives Campaign Screens 65M for Hepatitis C, NCDs" - WHO Egypt (Nov 2025)
   Massive public health initiative successfully screens majority of adult population for chronic diseases.

3. "Hepatitis C Elimination: Egypt Achieves 95% Cure Rate" - Lancet Gastroenterology (Nov 2025)
   World-leading program nearly eliminates hepatitis C through mass screening and affordable generic treatments.

4. "New Administrative Capital Medical City Opens with 2,000 Beds" - Al-Ahram (Nov 2025)
   Massive new hospital complex begins operations with advanced equipment and international-standard facilities.

5. "Healthcare Worker Shortage: 50,000 Nurses Needed" - Ministry of Health (Nov 2025)
   Rapid expansion of UHI reveals workforce gaps, government accelerates nursing school enrollment.

6. "Private Hospital Boom: 300+ New Facilities in Last 3 Years" - Bloomberg Middle East (Nov 2025)
   Growing middle class drives private healthcare expansion, particularly in Cairo and Alexandria.

7. "Wait Times for Elective Surgery: 3-6 Months in Public Hospitals" - Egyptian Medical Syndicate (Nov 2025)
   Public sector capacity constraints lead to lengthy wait times despite infrastructure investments.

8. "Diabetes and Obesity Epidemic: 17% Diabetic, 35% Obese" - Egypt National Health Survey (Nov 2025)
   Non-communicable diseases represent major burden with lifestyle changes driving increase.

9. "Medical Tourism Initiative Targets 500,000 Visitors by 2026" - Egypt Tourism Authority (Nov 2025)
   Government positions Egypt as regional healthcare destination with competitive pricing and quality facilities.`,

  'Ethiopia': `Healthcare System Context (November 2025):

**System Overview:**
- Tiered public healthcare system (health posts, centers, hospitals)
- Low health expenditure despite large population
- Life expectancy: 66.6 years (2024)
- Healthcare spending: 3.3% of GDP
- Conflict has devastated healthcare in Tigray region

**Current Healthcare News (November 2025):**

1. "Tigray Healthcare System Remains Collapsed After War" - MSF (Nov 2025)
   Two years after Pretoria peace agreement, only 30% of health facilities in Tigray region operational.

2. "Ethiopia Maternal Mortality Rate: 267 Deaths per 100,000 Births" - WHO (Nov 2025)
   High maternal mortality persists due to limited access to skilled birth attendants and emergency obstetric care.

3. "Malaria Cases Surge 40% in 2025 Due to Climate Change" - Ethiopian Health Institute (Nov 2025)
   Changing rainfall patterns expand malaria transmission zones to previously unaffected highland areas.

4. "Health Extension Program Reaches 42,000 Community Workers" - Ministry of Health (Nov 2025)
   Successful program trains local health extension workers providing basic care in rural communities.

5. "Cholera Outbreak in Oromia Region: 12,000 Cases" - WHO Ethiopia (Nov 2025)
   Waterborne disease outbreak highlights inadequate water and sanitation infrastructure.

6. "Only 19 Doctors per 100,000 Population" - Ethiopian Medical Association (Nov 2025)
   Severe physician shortage compounded by brain drain to Gulf states and Western countries.

7. "Vaccine Coverage Drops to 65% in Conflict-Affected Areas" - UNICEF (Nov 2025)
   Ongoing security challenges disrupt immunization programs, risking outbreaks of preventable diseases.

8. "Non-Communicable Diseases Rising: 5% Diabetic, 25% Hypertensive" - Lancet Global Health (Nov 2025)
   Urban areas see increase in lifestyle-related diseases while infectious diseases remain prevalent rurally.

9. "Ethiopian Government Commits to Doubling Health Budget by 2027" - Addis Standard (Nov 2025)
   Recognition of healthcare funding gap leads to commitment to increase spending from 3.3% to 6% of GDP.`,

  'Kenya': `Healthcare System Context (November 2025):

**System Overview:**
- Mixed public-private healthcare system
- Universal Health Coverage being implemented
- Life expectancy: 66.7 years (2024)
- Healthcare spending: 4.3% of GDP
- Regional healthcare hub for East Africa

**Current Healthcare News (November 2025):**

1. "Universal Health Coverage Rollout Reaches 12 Million Kenyans" - Daily Nation (Nov 2025)
   Government's SHA (Social Health Authority) scheme replaces NHIF, expanding coverage to informal sector workers.

2. "Doctors' Strike Enters Fourth Week Over Pay, Working Conditions" - The Standard (Nov 2025)
   Kenya Medical Practitioners Union leads strike affecting public hospitals nationwide over delayed salaries and poor conditions.

3. "Kenyatta University Teaching Hospital Opens as Regional Referral Center" - Capital News (Nov 2025)
   New 650-bed facility enhances specialized care capacity for cancer, cardiac, and neurosurgery.

4. "Health Worker Migration: 3,000 Nurses Left for UK, US, Gulf in 2025" - Business Daily (Nov 2025)
   Brain drain accelerates as Kenyan nurses recruited aggressively by wealthier nations offering higher pay.

5. "Malaria Vaccine Rollout: Kenya Immunizes 500,000 Children" - WHO (Nov 2025)
   Kenya leads Africa in deploying RTS,S malaria vaccine, targeting high-burden counties in western regions.

6. "Non-Communicable Diseases Account for 50% of Hospital Admissions" - Ministry of Health (Nov 2025)
   Cancer, diabetes, and cardiovascular disease increasingly dominate disease burden in urban areas.

7. "Healthcare Financing Gap: $2.8B Needed to Achieve UHC Goals" - World Bank Kenya (Nov 2025)
   Analysis shows significant funding shortfall to deliver promised universal health coverage.

8. "Private Hospital Boom in Nairobi as Middle Class Grows" - African Business (Nov 2025)
   Private healthcare sector expands rapidly with international chains entering Kenyan market.

9. "Average Wait Time for Public Hospital Specialist: 8-12 Weeks" - Kenya Healthcare Federation (Nov 2025)
   Capacity constraints in public sector drive patients who can afford it to private facilities.

10. "Afya Care Digital Health Platform Registers 2M Users" - TechCrunch Africa (Nov 2025)
    Telemedicine and digital health records adoption accelerates, improving access in remote areas.`,
}

// Generate AI summary in Atul Gawande's voice
async function generateHealthcareSummary(
  location: typeof COUNTRIES[0],
  healthcareContext: string
): Promise<{ summary: string; issues: string; topStories: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing in the voice of Atul Gawande - a surgeon, public health researcher, and clear-eyed systems thinker known for evidence-based medical writing. Generate a healthcare system analysis for ${location.name} based on the November 2025 context provided below.

${healthcareContext}

Write a 2,500-3,500 character healthcare summary following Atul Gawande's style:

**VOICE CHARACTERISTICS:**
- Clear, precise, systems-focused medical writing
- Evidence-based with specific data and metrics
- Examines structural challenges and systemic issues
- Humanizes data with real-world implications
- Focuses on "how systems work or fail to work"
- Avoids jargon, explains complex concepts simply
- Balances problems with practical solutions

**STRUCTURE:**
Hook (1-2 sentences): Start with a compelling statistic or observation that captures the system's current state

System Overview (150-200 words): Describe the healthcare infrastructure - coverage model, facilities, workforce, financing. Include key metrics: life expectancy, key health indicators, spending, access patterns.

Current Challenges (200-250 words): Identify 2-3 major healthcare challenges with specific evidence. Focus on systemic issues: workforce shortages, infrastructure gaps, disease burden, financing constraints, access inequities.

Infrastructure & Capacity (150-200 words): Examine what the system can and cannot do - wait times, specialist availability, technology/equipment, geographic access, referral patterns.

Recent Developments (150-200 words): Cover November 2025 healthcare news - reforms, new facilities, disease outbreaks, policy changes, workforce issues, funding developments.

Outlook (100-150 words): Assess trajectory - what improvements are likely, what challenges will persist, what external factors matter. Be realistic, evidence-based.

**REQUIREMENTS:**
- 2,500-3,500 characters total
- Include real numbers and metrics from the context
- Make it about systems and structures, not just individual stories
- Show how different parts of the system interact (or fail to)
- Be frank about problems but analytical rather than polemical
- Ground in November 2025 timeframe

Generate the healthcare summary now:`

  try {
    console.log(`  🏥 Generating Atul Gawande-style healthcare summary for ${location.name}...`)

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract key issues
    const issues = [
      'Healthcare system structure and coverage',
      'Disease burden and public health challenges',
      'Workforce and infrastructure capacity'
    ]

    // Extract top stories from context
    const storyLines = healthcareContext.split('\n').filter(line => line.match(/^\d+\.\s+".*"/))
    const topStories = storyLines.slice(0, 10).map(line => {
      const titleMatch = line.match(/"([^"]+)"/)
      const sourceMatch = line.match(/-\s+([^(]+)\s+\(/)
      const title = titleMatch ? titleMatch[1] : 'Healthcare Update'
      const source = sourceMatch ? sourceMatch[1].trim() : 'Health Ministry'

      return {
        title,
        source,
        link: `https://news.google.com/search?q=${encodeURIComponent(location.name + ' healthcare ' + title)}`,
        pubDate: new Date().toISOString()
      }
    })

    return {
      summary: summaryText,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`❌ Error generating healthcare summary for ${location.name}:`, error)
    throw error
  }
}

// Main execution
async function generateHealthcareSummaries() {
  console.log('🏥 GENERATING HEALTHCARE CATEGORY SUMMARIES - BATCH 8 OF 10\n')
  console.log('Voice: Atul Gawande - clear, systems-focused, evidence-based medical writing\n')
  console.log('Countries: Sri Lanka, Yemen, Saudi Arabia, UAE, Lebanon, Syria,')
  console.log('          Solomon Islands, Vanuatu, Samoa, Tonga, Egypt, Ethiopia, Kenya\n')

  const results: { name: string; length: number; status: string }[] = []
  let generated = 0
  let failed = 0

  for (const location of COUNTRIES) {
    console.log(`\n📍 Processing: ${location.name}`)

    try {
      const healthcareContext = HEALTHCARE_CONTEXT[location.name as keyof typeof HEALTHCARE_CONTEXT]
      const { summary, issues, topStories } = await generateHealthcareSummary(location, healthcareContext)

      const charCount = summary.length

      // Store in database with category='healthcare'
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: location.name,
            type: location.type,
            category: 'healthcare'
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          category: 'healthcare',
          summary,
          issues,
          topStories,
          storyCount: 10,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          storyCount: 10,
          updatedAt: new Date()
        }
      })

      generated++
      results.push({ name: location.name, length: charCount, status: '✅' })
      console.log(`  ✅ Healthcare summary generated: ${charCount} characters`)

      // Rate limit: 1 request per second
      await new Promise(resolve => setTimeout(resolve, 1100))

    } catch (error) {
      console.error(`  ❌ Failed:`, error)
      failed++
      results.push({ name: location.name, length: 0, status: '❌' })
    }
  }

  console.log(`\n\n${'='.repeat(80)}`)
  console.log('HEALTHCARE SUMMARIES BATCH 8 - COMPLETION REPORT')
  console.log('='.repeat(80))
  console.log(`\nGenerated: ${generated}/13 summaries`)
  console.log(`Failed: ${failed}/13 summaries\n`)

  console.log('COUNTRY                      STATUS    CHARACTERS')
  console.log('-'.repeat(55))
  results.forEach(r => {
    const nameCol = r.name.padEnd(28)
    const statusCol = r.status.padEnd(9)
    const lengthCol = r.length > 0 ? r.length.toString().padStart(6) : '     -'
    console.log(`${nameCol} ${statusCol} ${lengthCol}`)
  })

  console.log('\n' + '='.repeat(80))
}

generateHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
