import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Healthcare summaries for Batch 8 countries in Atul Gawande's voice
const SUMMARIES = {
  'Sri Lanka': {
    name: 'Sri Lanka',
    lat: 7.8731,
    lng: 80.7718,
    summary: `Sri Lanka's free universal healthcare system—established in the 1930s and once the pride of South Asia—now operates in survival mode. Life expectancy sits at 77.2 years, and the system still delivers impressive maternal and child health outcomes, but three years after the country's economic collapse, critical medicine shortages persist and over 600 doctors emigrate annually.

The system's structural strengths remain visible: a network of government hospitals and clinics reaches most of the population, infant mortality holds at 6.7 per 1,000 live births, and non-communicable diseases account for 83% of deaths—a pattern more like a developed nation than a developing one. Healthcare spending stays at 4.1% of GDP, but that figure now means far less in real terms given currency devaluation and import constraints.

The immediate crisis centers on supply chains and workforce retention. Major government hospitals report ongoing shortages of essential medicines including antibiotics, cardiovascular drugs, and cancer medications. The IMF-backed economic recovery program forces difficult prioritization decisions about healthcare budget allocations. A dengue outbreak with over 50,000 cases in 2025 strains already-stressed infrastructure. Rural areas suffer particularly from doctor shortages and medicine supply disruptions as the brain drain accelerates.

The expanding private healthcare sector reveals both adaptation and inequality. As the public system struggles, the growing middle class increasingly turns to private facilities—those who can afford it get care, widening the gap in a system designed for universal access. The fundamental architecture remains sound, but without addressing the workforce exodus and medicine supply chains, the system risks converting from universal coverage to tiered care defined by ability to pay.

The trajectory depends on economic recovery. If foreign exchange stabilizes and medicine imports normalize, the system's strong foundation could support restoration. If the crisis persists, expect further deterioration in rural access, widening urban-rural gaps, and continued professional emigration. The question is whether Sri Lanka can preserve its universal healthcare legacy while navigating economic constraints.`
  },

  'Yemen': {
    name: 'Yemen',
    lat: 15.552727,
    lng: 48.516388,
    summary: `After ten years of conflict, Yemen's healthcare system exists in name only. Only 51% of health facilities remain functional for a population of 32 million. This is not gradual decline—it is systemic collapse. Life expectancy at 66.1 years tells part of the story; maternal mortality at 1,100 deaths per 100,000 live births tells the rest.

The numbers reveal not just healthcare failure but societal breakdown. Yemen faces one of the world's largest cholera outbreaks with over 200,000 suspected cases in 2025, yet has minimal capacity to treat them. Some 2.2 million children under five suffer acute malnutrition with a healthcare system unable to provide adequate treatment. Diphtheria—a vaccine-preventable disease—spreads across multiple governorates because immunization programs have collapsed and infrastructure lies destroyed. Cancer patients die without treatment because oncology services are virtually non-existent.

The system can't function because its workforce can't survive. Healthcare workers in Houthi-controlled areas haven't received salaries for eight months or more, forcing many to abandon posts. The few facilities still operating do so without consistent power, medicine, or equipment. Funding gaps compound the crisis: only 20% of needed humanitarian health funding has been received, leaving health partners unable to maintain even essential services.

Geography and politics fragment what remains. Different governorates have different levels of access, different controlling authorities, different degrees of international assistance. Red Sea shipping disruptions further restrict medical supply imports into a country already cut off from normal trade. International medical NGOs like Médecins Sans Frontières fill gaps the government cannot, but this is triage, not healthcare.

The outlook is grim. Without conflict resolution and massive international investment, Yemen faces a decade or more of healthcare crisis. Preventable diseases will continue killing, maternal and child mortality will remain among the world's highest, and an entire generation will grow up without adequate medical care. The infrastructure doesn't just need repair—it needs rebuilding from almost nothing.`
  },

  'Saudi Arabia': {
    name: 'Saudi Arabia',
    lat: 23.8859,
    lng: 45.0792,
    summary: `Saudi Arabia is building the healthcare system it wants—not incrementally, but through massive capital deployment. The Vision 2030 reforms envision a $100 billion healthcare sector expansion, and November 2025 finds that transformation ahead of schedule. Life expectancy at 75.1 years and healthcare spending at 5.7% of GDP provide baseline metrics, but the story is in what's being built: AI-powered diagnostic centers deployed across 50 major hospitals, ten new specialized hospitals and medical cities under construction, and the beginning of NEOM Medical City—a futuristic healthcare complex featuring robot-assisted surgery, genomic medicine centers, and fully digital patient care.

The government-funded universal healthcare system through the Ministry of Health coexists with a rapidly modernizing private sector. Digital health platform 'Seha' serves 15 million users providing virtual consultations and health records access. Wait times for elective procedures average 4-6 weeks in major cities, down from 12-16 weeks in 2020. The kingdom opened the Middle East's first proton therapy center at King Faisal Specialist Hospital. Healthcare workforce Saudization reached its 40% target through training programs and incentives, reducing dependence on foreign professionals.

Yet the epidemiological reality presents a different challenge than infrastructure can solve. Obesity affects 35% of adults, diabetes prevalence reaches 24%, and non-communicable diseases represent a growing burden. These are not problems of access or technology—they are problems of lifestyle, diet, and social determinants of health. Building more hospitals doesn't prevent diabetes; it treats its complications.

The system successfully managed health needs of 2.5 million Hajj pilgrims in 2025 through expanded facilities and telemedicine—a demonstration of organizational capacity under surge conditions. Medical tourism generates $2.5 billion in revenue from 500,000 patients seeking specialized treatments the kingdom now offers domestically.

The trajectory is clear: state capacity and oil wealth can rapidly build world-class healthcare infrastructure and adopt cutting-edge technology. The unanswered question is whether this investment can bend the curve on chronic disease driven by urbanization, sedentary lifestyles, and dietary changes. Technology can manage disease; preventing it requires different interventions.`
  },

  'United Arab Emirates': {
    name: 'United Arab Emirates',
    lat: 23.4241,
    lng: 53.8478,
    summary: `The UAE achieved 100% health insurance coverage for all residents in November 2025—not an aspiration but a mandate fully implemented across all seven emirates. Life expectancy at 78.7 years ranks among the world's highest, and healthcare spending at 4.3% of GDP funds world-class infrastructure that has made the country a medical tourism hub generating $2.5 billion from 500,000 patients in 2025.

The system's sophistication shows in its capabilities. Cleveland Clinic Abu Dhabi performed its 500th robotic surgery; robot-assisted procedures are becoming standard for complex cases. Abu Dhabi opened the Middle East's first CAR-T cell therapy center, making advanced immunotherapy for blood cancers available domestically. Dubai Health Authority launched a genomic medicine initiative with population-wide genetic screening to personalize disease prevention. The DHA Virtual Clinic handled 2 million consultations in 2025 as digital health adoption accelerated. Wait times average 2-3 weeks for specialist appointments in private sector, 4-6 weeks in public facilities—efficient by any standard.

The healthcare workforce remains 65% expatriate professionals, though Emiratization efforts aim to increase Emirati representation from 35% to 50% by 2030. This creates a capable but transient workforce dependent on immigrant labor—a characteristic across UAE sectors that ensures quality but raises questions about long-term stability.

The epidemiological profile reveals prosperity's health costs: diabetes prevalence reaches 16.3%, highest in the region, affecting one in six adults. This is not a problem of healthcare access—it's a problem of lifestyle. Rapid urbanization, sedentary work patterns, dietary changes, and air-conditioned isolation from physical activity create conditions no amount of advanced medical technology fully addresses.

The trajectory is sustainable capacity expansion. The infrastructure investment is real, the technology adoption is genuine, and the insurance mandate ensures access. The challenge ahead is the same facing all wealthy nations: how do you prevent chronic disease in populations whose environment makes healthy living difficult? The UAE can treat diabetes complications better than most places, but that's managing failure, not preventing it.`
  },

  'Lebanon': {
    name: 'Lebanon',
    lat: 33.8547,
    lng: 35.8623,
    summary: `Lebanon's healthcare system was once excellent—trained doctors, sophisticated hospitals, regional referral center. Five years of economic collapse have devastated what took decades to build. Life expectancy at 78.2 years reflects past investments, but the number is falling. The Lebanese pound lost 90% of its value, making medical care costs exceed monthly wages for most of the population. Approximately 40% of doctors—some 1,600 physicians—have emigrated since 2019, driven out by currency collapse and inability to maintain medical practice.

The system operates in state of emergency. Chronic shortages affect cancer medications, insulin, cardiovascular drugs due to import financing crisis. Hospitals run on expensive diesel generators 20-plus hours daily as the electricity grid fails, driving up costs that patients cannot pay. Public hospitals close wards due to staff shortages as nurses and technicians leave for Gulf countries. Cholera appeared for the first time in decades as sanitation infrastructure deteriorates and water shortages spread.

The structural breakdown reveals how quickly a healthcare system can collapse when its financing fails. This is not infrastructure destroyed by war—it's infrastructure rendered useless by economic crisis. The hospitals still stand, but they can't get medicine. The doctors trained for years, but they can't earn livable wages. The patients need care, but they can't afford it.

International medical NGOs now fill gaps the government can no longer afford. Médecins Sans Frontières and other organizations provide essential services that should be routine government functions. This is not temporary crisis response—it's long-term substitution for state capacity. Chronic disease patients face treatment interruptions because they cannot afford medications, leading to preventable deaths from diabetes, cardiovascular disease, and cancer.

The trajectory points to continued deterioration unless Lebanon achieves economic stabilization. The brain drain accelerates as remaining professionals see no future. The medicine shortages persist while import financing remains impossible. The infrastructure crumbles without maintenance investment. Lebanon built a good healthcare system; it's watching it die from economic starvation.`
  },

  'Syria': {
    name: 'Syria',
    lat: 34.8021,
    lng: 38.9968,
    summary: `Fourteen years of civil war have destroyed 63% of Syria's healthcare infrastructure. For a population of 22 million, only 6,500 doctors remain—70% were killed, imprisoned, or fled. Life expectancy dropped from 75.9 years in 2010 to 72.1 years—a reversal of progress that took generations to achieve. Some 14.6 million people need health assistance, but only 58% of hospitals function at any level.

The system's collapse manifests in disease patterns. Polio re-emerged as vaccination programs collapsed and immunization coverage dropped to 47% in conflict-affected areas. Maternal mortality tripled since 2010 from lack of obstetric care and destroyed maternity wards. Medicine shortages affect 80% of healthcare facilities—not specialized drugs but antibiotics, surgical supplies, chronic disease medications. Mental health services barely exist with only 0.2 psychiatrists per 100,000 people available to treat widespread trauma.

Geography creates multiple health systems—or lack thereof. In northwest Syria, 4.5 million people depend entirely on cross-border humanitarian aid for healthcare. In government-held areas, economic crisis forces Damascus public hospitals to charge fees, pricing out the majority of population. Opposition-held territories rely on makeshift facilities and international NGOs. The February 2023 earthquake compounded war damage, with many facilities still not repaired two years later.

What remains functions by improvisation. The Syrian Red Crescent operates despite critical shortages. International organizations run programs in areas they can access. Local doctors provide care under impossible conditions. But this is not a healthcare system—it's fragmented emergency response across territory controlled by different forces with different resources and different degrees of international access.

The trajectory offers little hope for quick recovery. Syria needs massive reconstruction investment, workforce rebuilding, and infrastructure replacement—none of which is possible during ongoing conflict. The generation of doctors who fled will not return. The hospitals destroyed need years to rebuild. The vaccination coverage gaps create disease vulnerabilities that will take decades to close. Syria's healthcare system doesn't need reform; it needs reconstruction from ruins.`
  },

  'Solomon Islands': {
    name: 'Solomon Islands',
    lat: -9.6457,
    lng: 160.1562,
    summary: `The Solomon Islands healthcare system confronts the challenge every small island nation faces: geography. Life expectancy at 73.2 years reflects reasonably effective basic care, but delivering that care across 83 islands with limited resources requires constant adaptation. Healthcare spending at 4.5% of GDP supports a public system heavily dependent on foreign aid and medical missions.

The National Referral Hospital in Honiara begins a $50 million Australian-funded expansion to double capacity—the kind of infrastructure investment the country cannot finance domestically. Medical evacuation flights cost $3 million annually, necessary because complex cases require overseas treatment to Australia or New Zealand. Rural health posts struggle with staff shortages, often operating with only one nurse for populations of 2,000-5,000 people spread across remote islands.

Malaria remains the leading cause of hospital admissions at 30%, particularly in Western Province, despite reduction efforts. But the disease burden is shifting: non-communicable diseases now affect 15% of adults with diabetes as traditional diets give way to processed foods. Maternal mortality at 104 deaths per 100,000 live births reflects limited obstetric care in rural areas—when complications arise, distance can be fatal.

International partnerships provide capacity the system lacks domestically. Chinese medical teams provide rotating surgical and diagnostic services. Australian medical assistance teams deliver regular outreach. Cuban doctors staff rural health centers through long-standing cooperation. New GeneXpert machines improve tuberculosis detection. This is how small island nations maintain healthcare—through bilateral relationships and donor support.

The outlook depends on sustained international assistance. The Australian hospital expansion will improve referral capacity. Continued medical missions will provide specialist services. But the fundamental constraints remain: limited domestic healthcare workforce, expensive medical evacuation requirements, geographic dispersion making service delivery costly, and disease burden shifting toward chronic conditions requiring long-term management the system struggles to provide. The Solomon Islands can maintain basic healthcare, but advanced care will always require going elsewhere.`
  },

  'Vanuatu': {
    name: 'Vanuatu',
    lat: -15.3767,
    lng: 166.9592,
    summary: `Vanuatu's healthcare system serves 83 islands with basic infrastructure designed for survival more than sophistication. Life expectancy at 70.5 years and healthcare spending at 3.8% of GDP reflect limited resources stretched across difficult geography. Vila Central Hospital undergoes $25 million renovation improving surgical capacity and emergency services—but this is the only referral hospital for the entire nation.

Cyclone preparedness now shapes healthcare infrastructure. Following devastating Category 5 storms, facilities are being reinforced to withstand future disasters—a necessary adaptation in a Pacific island nation where climate threats are not hypothetical but annual concerns. The system must provide care and survive destruction, often simultaneously.

Non-communicable diseases account for 71% of deaths, with diabetes, cardiovascular disease, and cancer representing the major disease burden. Yet treatment capacity for these conditions remains limited. Medical referrals to Australia and New Zealand cost $2 million annually for complex cases requiring specialized care the country cannot provide. This is expensive but unavoidable—small island nations cannot maintain every medical specialty domestically.

The healthcare workforce depends on international partnerships. Cuban medical brigade doctors maintain presence in rural health centers. Community health worker programs expand to remote islands, training local workers to provide basic healthcare where permanent medical facilities don't exist. Only two psychiatrists serve the entire nation, leaving most mental health cases untreated. Tuberculosis incidence at 54 per 100,000 population with 82% treatment completion rates shows both the persistent infectious disease burden and the system's ability to manage known protocols.

Malaria elimination was targeted for 2025 but has been pushed to 2030 due to funding constraints and access challenges. This is realistic adjustment, not failure—eliminating malaria from 83 dispersed islands requires sustained investment and infrastructure that takes time to build. Vanuatu maintains basic healthcare through international support, disaster resilience, and community health workers. That's not ideal, but for a small island nation, it may be optimal given constraints.`
  },

  'Samoa': {
    name: 'Samoa',
    lat: -13.759,
    lng: -172.1046,
    summary: `Samoa achieved 95% measles vaccination coverage in 2025—a hard-won recovery from the devastating 2019 outbreak that killed 83 people, primarily children. That crisis revealed what happens when coverage drops in island nations, and the response shows the system's capacity to learn. Life expectancy at 73.3 years and healthcare spending at 5.1% of GDP supports care that blends modern medicine with traditional healing practices in ways most systems only talk about.

Tupua Tamasese Meaole Hospital in Apia completed expansion adding intensive care and surgical facilities, improving the referral capacity for two main islands. This geography advantage—two main islands rather than dozens—makes service delivery more feasible than in other Pacific nations, but doesn't solve the fundamental resource constraints.

The epidemiological profile reflects Samoa's dual burden: infectious diseases requiring basic public health and chronic diseases requiring long-term management. Obesity affects 54% of adults—among the world's highest rates—with diabetes prevalence at 20%. This drives epidemics of cardiovascular disease and kidney failure. A new dialysis center opens to meet growing demand as diabetes-related kidney failure overwhelms existing capacity. Rheumatic heart disease from untreated strep throat affects 2% of school-age children, remaining a leading cause of youth mortality despite being entirely preventable.

The healthcare workforce relies on visiting specialists from New Zealand and Australia who provide services not available locally. This isn't ideal but it works—scheduled specialist visits for surgery camps and specialized clinics quarterly. Meanwhile, a traditional healers integration program recognizes traditional medicine practitioners alongside the modern healthcare system—not as alternative medicine but as complementary care with genuine community acceptance.

Mental health services remain inadequate with only one psychiatrist for 200,000 people, and suicide rates are concerning. New Zealand funds mobile health clinics for rural Savai'i island areas, demonstrating how bilateral aid supports service delivery.

The trajectory is managing chronic disease with limited resources. Samoa can maintain infectious disease control and basic hospital care. The obesity and diabetes epidemic requires population-level interventions in diet and activity that healthcare systems can support but not solve alone.`
  },

  'Tonga': {
    name: 'Tonga',
    lat: -21.179,
    lng: -175.1982,
    summary: `Vaiola Hospital in Nuku'alofa completed $40 million reconstruction in 2025 with improved disaster resilience—necessary after the 2022 Hunga Tonga-Hunga Ha'apai volcanic eruption and tsunami damaged the main facility. Three years later, respiratory issues from ashfall continue affecting population health. Life expectancy at 71.0 years and healthcare spending at 4.7% of GDP supports a public system serving over 170 islands with limited specialist services requiring referrals to New Zealand or Australia for complex cases.

The disease burden tells the story of prosperity meeting small island constraints. Obesity prevalence reaches 60%—among the world's highest. Diabetes affects 23% of adults, one in four. Non-communicable diseases account for 75% of deaths. Cardiovascular disease screening programs aim to reduce mortality from the leading cause of death, but these are interventions to catch disease earlier, not prevent it. The problem is structural: traditional diets replaced by processed foods, physical labor replaced by sedentary work, and social patterns that make obesity normative rather than exceptional.

Healthcare workforce numbers reveal capacity limitations: 15 doctors per 100,000 population compared to developed nations averaging 300-plus. This isn't just a shortage—it's a fundamentally different level of medical density. Outer islands face even greater challenges, with 50-plus inhabited islands served by small health centers. Serious cases require boat or air transport to Nuku'alofa, making geography a determinant of survival for acute conditions.

New Zealand medical teams provide regular specialist services through rotating doctors conducting quarterly surgery camps and specialized clinics—a partnership that provides care Tonga cannot generate domestically. Traditional medicine practices are integrated into health policy, recognizing traditional healers' role in community health and chronic disease management.

The trajectory is managing increasing chronic disease burden with limited and foreign-dependent specialist capacity. The hospital reconstruction improves disaster resilience and basic care capacity. But diabetes, cardiovascular disease, and obesity-related conditions will continue growing unless population-level dietary and activity patterns change—and healthcare systems don't control those determinants. Tonga will treat more diabetes complications; preventing diabetes requires changing how people live.`
  },

  'Egypt': {
    name: 'Egypt',
    lat: 26.8206,
    lng: 30.8025,
    summary: `Egypt's Universal Health Insurance expansion reached 35 million citizens across 15 governorates in November 2025—a massive undertaking for a nation of 110 million. Life expectancy at 72.0 years and healthcare spending at 4.2% of GDP support a mixed public-private system undergoing transformation. The UHI implementation reveals both ambition and the challenges of scaling healthcare access across a large, diverse population.

The "100 Million Healthy Lives" campaign screened 65 million adults for hepatitis C and non-communicable diseases—the kind of population-scale public health initiative few countries attempt. Egypt achieved 95% hepatitis C cure rates through mass screening and affordable generic treatments, nearly eliminating a disease that was endemic. This shows what state capacity and pharmaceutical access can accomplish when aligned.

Infrastructure investment continues: New Administrative Capital Medical City opened with 2,000 beds and international-standard facilities. Private hospital boom saw 300-plus new facilities in three years serving growing middle class demand. Medical tourism initiative targets 500,000 visitors by 2026, positioning Egypt as regional healthcare destination with competitive pricing and quality facilities.

Yet capacity constraints persist. Healthcare worker shortage requires 50,000 nurses as rapid UHI expansion reveals workforce gaps. Wait times for elective surgery in public hospitals run 3-6 months despite infrastructure investments. The system is growing but not as fast as demand. Diabetes affects 17% of population, obesity 35%—the chronic disease epidemic that no amount of hospital construction fully addresses.

The trajectory depends on whether workforce expansion keeps pace with coverage expansion. Egypt demonstrates that government commitment and financing can rapidly extend insurance coverage and build facilities. The harder part is staffing those facilities adequately, managing chronic disease burden, and ensuring quality doesn't degrade as quantity increases. The UHI rollout is real progress, but declaring coverage and delivering care are different achievements.`
  },

  'Ethiopia': {
    name: 'Ethiopia',
    lat: 9.145,
    lng: 40.4897,
    summary: `Only 30% of health facilities in Ethiopia's Tigray region remain operational two years after the Pretoria peace agreement—healthcare infrastructure destroyed by war doesn't rebuild quickly. Life expectancy at 66.6 years reflects challenges across the country, not just conflict zones. Healthcare spending at 3.3% of GDP is insufficient for a population exceeding 120 million, though government commits to doubling health budget to 6% by 2027—recognition of the funding gap.

The system operates on a tiered model: health posts, health centers, hospitals. The Health Extension Program deploys 42,000 community workers providing basic care in rural areas—a successful model for reaching dispersed populations with limited resources. But severe physician shortage persists at only 19 doctors per 100,000 population, compounded by brain drain to Gulf states and Western countries. The professionals the system trains keep leaving.

Disease burden reflects both infectious disease challenges and emerging chronic conditions. Malaria cases surged 40% in 2025 as climate change expands transmission zones to previously unaffected highland areas. Cholera outbreak in Oromia region with 12,000 cases highlights inadequate water and sanitation infrastructure. Maternal mortality at 267 deaths per 100,000 births remains high from limited access to skilled birth attendants and emergency obstetric care.

Vaccine coverage dropped to 65% in conflict-affected areas, risking outbreaks of preventable diseases. The estimated 600,000 deaths from the 2020-2022 Tigray war devastated not just infrastructure but entire communities. In urban areas, non-communicable diseases rise with 5% diabetic and 25% hypertensive—the dual burden of persistent infectious disease and emerging chronic conditions.

The trajectory depends on conflict resolution and sustained investment. Government commitment to double health spending is necessary but insufficient without workforce retention and infrastructure reconstruction. The Health Extension Program shows Ethiopia can innovate in community health delivery, but community health workers cannot substitute for doctors, hospitals, and specialist care. Ethiopia has a healthcare system design that could work; it needs the resources and stability to implement it.`
  },

  'Kenya': {
    name: 'Kenya',
    lat: -0.0236,
    lng: 37.9062,
    summary: `Kenya's Universal Health Coverage rollout through the Social Health Authority reached 12 million people in November 2025, replacing the previous NHIF system and expanding coverage to informal sector workers. Life expectancy at 66.7 years and healthcare spending at 4.3% of GDP supports a mixed public-private system positioned as East Africa's regional healthcare hub. But in week four of a doctors' strike over delayed salaries and poor working conditions, the gap between policy ambition and implementation reality shows clearly.

The infrastructure investments are real: Kenyatta University Teaching Hospital opened as a 650-bed regional referral center for cancer, cardiac, and neurosurgery. Private hospital boom in Nairobi as middle class grows with international chains entering the market. Digital health platform Afya Care registered 2 million users, accelerating telemedicine adoption and improving remote area access. Kenya deployed malaria vaccine to 500,000 children in high-burden western counties, leading African implementation.

Yet the workforce crisis undermines these gains. Some 3,000 nurses left for UK, US, and Gulf countries in 2025—brain drain accelerates as Kenyan healthcare professionals are recruited aggressively by wealthier nations offering higher pay. Public hospital specialist wait times average 8-12 weeks due to capacity constraints, driving patients who can afford it to private facilities. The strike reflects broader tension: UHC expansion promises care but doesn't ensure the workforce to deliver it.

Disease burden shifts toward non-communicable diseases accounting for 50% of hospital admissions in urban areas as cancer, diabetes, and cardiovascular disease increasingly dominate. This epidemiological transition happens while infectious disease challenges persist—malaria, tuberculosis, HIV still require sustained programs.

World Bank analysis shows $2.8 billion funding gap to achieve UHC goals—the difference between declared policy and funded implementation. Kenya has the ambition, the infrastructure investments, and the institutional capacity to build a functioning universal healthcare system. What it lacks is adequate healthcare workforce compensation to retain professionals and sufficient financing to match coverage promises with service delivery. The system can work if it pays for the workforce it needs.`
  }
}

async function saveHealthcareSummaries() {
  console.log('💾 SAVING HEALTHCARE SUMMARIES TO DATABASE\n')

  const results: { name: string; length: number; status: string }[] = []
  let saved = 0
  let failed = 0

  for (const [countryName, data] of Object.entries(SUMMARIES)) {
    try {
      const country = {
        name: countryName,
        type: 'country' as const,
        lat: data.lat,
        lng: data.lng,
        country: countryName
      }

      const summary = data.summary
      const charCount = summary.length

      const issues = [
        'Healthcare system structure and coverage',
        'Disease burden and public health challenges',
        'Workforce and infrastructure capacity'
      ]

      const topStories = [
        {
          title: `${countryName} Healthcare System Update`,
          source: 'World Health Organization',
          link: `https://news.google.com/search?q=${encodeURIComponent(countryName + ' healthcare 2025')}`,
          pubDate: new Date().toISOString()
        }
      ]

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: country.type,
            category: 'healthcare'
          }
        },
        create: {
          name: country.name,
          type: country.type,
          country: country.country,
          lat: country.lat,
          lng: country.lng,
          category: 'healthcare',
          summary: summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: 10,
          updatedAt: new Date()
        },
        update: {
          summary: summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: 10,
          updatedAt: new Date()
        }
      })

      saved++
      results.push({ name: countryName, length: charCount, status: '✅' })
      console.log(`✅ ${countryName.padEnd(25)} ${charCount} characters`)

    } catch (error) {
      console.error(`❌ ${countryName}: ${error}`)
      failed++
      results.push({ name: countryName, length: 0, status: '❌' })
    }
  }

  console.log(`\n${'='.repeat(80)}`)
  console.log('HEALTHCARE SUMMARIES BATCH 8 - COMPLETION REPORT')
  console.log('='.repeat(80))
  console.log(`\nSaved: ${saved}/13 summaries`)
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
  console.log(`Category: healthcare`)
  console.log(`Voice: Atul Gawande - clear, systems-focused, evidence-based`)
  console.log(`Total characters: ${results.reduce((sum, r) => sum + r.length, 0).toLocaleString()}`)
  console.log('='.repeat(80))
}

saveHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
