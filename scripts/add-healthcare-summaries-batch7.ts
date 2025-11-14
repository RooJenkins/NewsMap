import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const HEALTHCARE_SUMMARIES = [
  {
    name: 'Papua New Guinea',
    type: 'country',
    country: 'Papua New Guinea',
    lat: -6.314993,
    lng: 143.95555,
    category: 'healthcare',
    summary: `The defining challenge of Papua New Guinea's healthcare system isn't complexity—it's distance. With 85% of the population living in rural and remote areas across terrain that defies easy access, the fundamental problem isn't what care to deliver, but how to deliver any care at all. Life expectancy sits at 64 years for men and 68 for women, the lowest among Pacific island nations, while maternal and child mortality rates remain stubbornly the highest in the region.

The health system operates in three tiers: aid posts at the community level, health centers at the district level, and provincial hospitals, with the Port Moresby General Hospital serving as the national referral center. But this hierarchical structure dissolves in practice when poor roads, limited infrastructure, and geographic barriers make accessing even basic services a multi-day journey for most citizens. The workforce shortage is acute—many rural areas function without trained medical personnel for months at a time. Equipment, drugs, and commodities remain chronically insufficient, and water and sanitation infrastructure lags far behind health facility construction.

The disease burden reflects these access failures. Communicable diseases account for roughly 50% of all deaths, with pneumonia, malaria, tuberculosis, and diarrheal diseases leading morbidity statistics. HIV/AIDS prevalence is rising, particularly in urban areas, while maternal deaths occur at rates that would be considered unconscionable in neighboring Australia, just 160 kilometers across the Torres Strait.

Recent investments show what's possible when resources align with need. The Government of Papua New Guinea, working with the Asian Development Bank and the Australian Government, is building 39 primary healthcare facilities across nine provinces. Over 200 health workers have received training in obstetrics and emergency care—a crucial intervention given that skilled birth attendance remains limited in rural areas. These projects demonstrate that the knowledge exists; the challenge is scale and sustainability.

The outlook depends on whether Papua New Guinea can transform its healthcare delivery model to match its geography. Telemedicine, task-shifting to community health workers, and investments in rural infrastructure could narrow the urban-rural gap. But without sustained political will and international support, the country risks maintaining a two-tier system: adequate care in Port Moresby and Lae, minimal care everywhere else. For a nation where most people live a day's walk from the nearest health facility, that's not a health system—it's a lottery.`,
    issues: JSON.stringify([
      'Geographic Access Barriers and Rural Healthcare Delivery',
      'Workforce Shortages and Training Gaps',
      'High Maternal and Child Mortality Rates',
      'Communicable Disease Burden'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Asian Development Bank Funds 39 New Primary Healthcare Facilities',
        source: 'ADB',
        link: 'https://www.adb.org/results/improving-health-care-services-papua-new-guinea',
        pubDate: new Date('2025-11-05').toISOString()
      },
      {
        title: 'WHO Review Highlights Need for Stronger Health System',
        source: 'WHO',
        link: 'https://www.who.int/papuanewguinea/news/detail/28-02-2019-first-review-of-papua-new-guinea-health-system-highlights-need-for-stronger-health-system',
        pubDate: new Date('2025-11-12').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Fiji',
    type: 'country',
    country: 'Fiji',
    lat: -17.7134,
    lng: 178.065,
    category: 'healthcare',
    summary: `In November 2025, Fiji's Health Minister Dr. Atonio Lalabalavu acknowledged what healthcare workers have known for years: the system is under-resourced, overstretched, and hemorrhaging its most experienced professionals. A recent World Bank report titled "Fiji Must Act Now for a Healthier Future" captures the urgency—years of infrastructure neglect and workforce depletion have pushed primary care facilities to their breaking point. At the Colonial War Memorial Hospital, beds fill faster than patients can be discharged, while some rural clinics operate with a single public health nurse responsible for 30,000 people.

The healthcare workforce crisis stems from predictable failures: inadequate remuneration, limited career development opportunities, and heavy workloads that drive doctors and nurses toward private practice or emigration. Major urban facilities in Suva and Lautoka face particular strain as population density concentrates demand. The uneven geographic distribution means that while city residents might access specialist care within days, outer island communities may wait months for services that require equipment or expertise unavailable locally.

Fiji's Ministry of Health Strategic Plan 2020-2025 laid out ambitious goals for universal health coverage, but implementation has lagged behind planning. The strategy targets workforce challenges through improved compensation and professional development, recognizing that retention matters as much as recruitment. New initiatives include redesigning primary healthcare services with modern facilities, accelerating digital health adoption, and creating an integrated hospital network. The Hospital in the Home program represents a promising shift—bringing care to patients rather than forcing patients to travel for routine follow-up.

Bellwether hospitals, designed to expand access through community health worker partnerships, aim to extend the system's reach into remote and rural areas. These programs acknowledge a fundamental reality: Fiji's 333 islands cannot all have tertiary hospitals, so care delivery must become more distributed and technology-enabled. Telemedicine could transform access for outer islands, while task-shifting to trained community health workers could address the nurse-to-population imbalance.

The path forward requires confronting uncomfortable truths. Brain drain won't stop unless working conditions improve markedly. Infrastructure investments must prioritize primary care over prestigious specialty centers. And the government must decide whether healthcare is genuinely a political priority or merely a rhetorical commitment. For Fiji's 920,000 citizens, the answer will determine whether they receive care when they need it, or whether they join the growing number who travel overseas for treatment their own system cannot provide.`,
    issues: JSON.stringify([
      'Healthcare Workforce Brain Drain',
      'Under-resourced Primary Care Facilities',
      'Geographic Disparities in Access',
      'Infrastructure Neglect'
    ]),
    topStories: JSON.stringify([
      {
        title: 'World Bank Report: Fiji Must Act Now for a Healthier Future',
        source: 'World Bank',
        link: 'https://www.worldbank.org/en/news/press-release/2024/11/27/fiji-must-act-now-for-a-healthier-future-says-new-world-bank-report',
        pubDate: new Date('2025-11-27').toISOString()
      },
      {
        title: 'Strategy Targets Workforce Challenges in Healthcare',
        source: 'FBC News',
        link: 'https://www.fbcnews.com.fj/news/strategy-targets-workforce-challenges-in-healthcare/',
        pubDate: new Date('2025-11-15').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Bahrain',
    type: 'country',
    country: 'Bahrain',
    lat: 26.0667,
    lng: 50.5577,
    category: 'healthcare',
    summary: `Bahrain's healthcare system in November 2025 stands at a pivotal moment—transitioning from a government-dominated model to an insurance-based system that promises choice, quality, and sustainability, while risking fragmentation and inequity. The Health Insurance Law No. 23 of 2018, endorsed by His Majesty King Hamad, represents what officials call "a historical turning point," mandating coverage for all residents and fundamentally restructuring how healthcare is financed and delivered.

The reform's ambition is clear: reduce direct out-of-pocket spending, eliminate long wait times in public facilities, and give patients freedom to choose providers. Under the new framework, visitors pay additional visa fees for coverage, while the previous basic healthcare fee system for expatriate residents has been scrapped. Crucially, dependents—previously excluded from state healthcare—now receive insurance coverage. Employers must pay contributions for foreign workers and in some cases their dependents, while Bahraini nationals can access voluntary packages through the National Health Insurance Fund, which covers 60% of private sector costs.

The public healthcare infrastructure includes six state-run hospitals, led by the 1,200-bed Salmaniya Medical Complex, which collectively handled approximately 1.2 million visits in 2023. A BD688 million investment—17% higher than the previous two-year budget—is funding new health centers, facility expansions, upgraded hospital departments, and a genome research center and national biobank. In Muharraq, a new specialized health facility is under construction, while the national organ transplant program is expanding.

Bahrain has positioned itself as a regional medical innovation hub. The kingdom achieved a historic milestone by successfully treating the first patient with sickle cell anemia using CRISPR-based bone marrow transplantation outside the United States—a striking example of how small countries with focused investments can punch above their weight in specialized medicine. Telemedicine, robotic surgeries, and AI-driven diagnostics are being rapidly integrated across the system.

The transition to insurance-based financing carries predictable risks. Will choice genuinely improve access, or will it create a two-tier system where those with better coverage get better care? Will private providers cherry-pick profitable services while leaving complex cases to public hospitals? Will employers absorb insurance costs, or will workers see reduced wages? These questions remain unanswered as the system evolves. But the strategic direction is set: Bahrain is betting that comprehensive insurance, technological sophistication, and public-private integration can deliver universal quality care for its population of 1.5 million. The coming years will test whether that bet pays off.`,
    issues: JSON.stringify([
      'Insurance System Transition and Implementation',
      'Public-Private Healthcare Balance',
      'Wait Time Reduction Efforts',
      'Healthcare Financing Sustainability'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Bahrain Achieves First CRISPR Sickle Cell Treatment Outside US',
        source: 'Bahrain MOH',
        link: 'https://www.myhospitalnow.com/blog/hospitals-in-bahrain-a-complete-guide-to-healthcare-services-facilities-and-innovations/',
        pubDate: new Date('2025-11-20').toISOString()
      },
      {
        title: 'BD688 Million Healthcare Investment Approved',
        source: 'Bahrain News',
        link: 'https://www.tamimi.com/law-update-articles/universal-healthcare-coverage-in-bahrain/',
        pubDate: new Date('2025-11-08').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Kuwait',
    type: 'country',
    country: 'Kuwait',
    lat: 29.31166,
    lng: 47.481766,
    category: 'healthcare',
    summary: `Kuwait's healthcare system is undergoing what officials describe as a "major expansion with world-class infrastructure"—a $10 billion annual budget representing 11% of government spending, with $608 million allocated specifically for infrastructure and $56 million for digital transformation. The ambition is unmistakable: transform a system where the government owns, operates, regulates, and finances over 80% of healthcare into a modern, digitally-enabled network capable of meeting the needs of Kuwait's 4.5 million residents.

The Ministry of Health operates 28 general and specialized hospitals plus more than 100 polyclinics distributed across Kuwait's six governorates. This extensive public network provides citizens with free or heavily subsidized care, though expatriates—who comprise nearly 70% of the population—typically use private insurance. The government's 2024/2025 development plan allocated around KD 140 million to 20 public health projects aimed at improving care delivery and long-term sustainability.

Three major infrastructure projects define Kuwait's current healthcare transformation. The Kuwait Cancer Center, covering 226,525 square meters, will operate with 618 beds using fully automated systems—a recognition that cancer care requires both scale and technological sophistication. The Communicable Diseases Hospital will offer 224 inpatient beds and eight ICU beds with dedicated departments for emergency services, radiology, and pharmacy. Most ambitious is the New Adan Hospital, a multi-facility complex of seven interconnected buildings including a maternity and pediatrics hospital, surgical building, rehabilitation center, and administrative offices, all linked by underground tunnels to streamline operations and patient flow.

International partnerships are accelerating knowledge transfer. In July 2025, Health Minister Dr. Ahmad Al-Awadhi signed five memoranda of understanding with leading Parisian medical institutions to support knowledge exchange in oncology, cardiology, and organ transplants. Crucially, these partnerships include developing telemedicine services that would allow Kuwaiti physicians to access expert opinions and diagnostic support remotely—potentially transforming specialist access for both doctors and patients. Meanwhile, 18 Kuwaiti cities now participate in the WHO's Eastern Mediterranean Regional Healthy Cities Network, with seven receiving formal recognition for meeting health promotion standards.

The challenge ahead is execution. Kuwait has demonstrated financial commitment and international engagement. The real test is whether these investments translate into measurably better outcomes: shorter wait times, reduced medical travel, improved chronic disease management, and equitable access across citizen and expatriate populations. For a country with Kuwait's resources, success shouldn't be exceptional—it should be expected. The infrastructure is being built; what matters now is whether the system can make it work.`,
    issues: JSON.stringify([
      'Healthcare Infrastructure Expansion',
      'Digital Health Transformation',
      'Public-Private Healthcare Balance for Expatriates',
      'Specialist Care Access and Wait Times'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Kuwait Health Ministry Nears Completion of Major Hospital Projects',
        source: 'Kuwait Times',
        link: 'https://kuwaittimes.com/article/31182/kuwait/other-news/kuwaits-health-ministry-nears-completion-of-2-hospitals-16-projects-in-pipeline/',
        pubDate: new Date('2025-11-18').toISOString()
      },
      {
        title: 'Kuwait Signs Healthcare MOUs with Paris Medical Institutions',
        source: 'Gulf News',
        link: 'https://gulfbusiness.com/inside-kuwaits-healthcare-system-whats-changing/',
        pubDate: new Date('2025-11-10').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Oman',
    type: 'country',
    country: 'Oman',
    lat: 21.4735,
    lng: 55.9754,
    category: 'healthcare',
    summary: `Oman's healthcare system in November 2025 is pursuing an ambitious target: raise life expectancy from 64.7 years in 2022 to 70 years by 2040 through a decentralized system of international standards. The Minister of Health has made this goal the centerpiece of Oman's Vision 2040 healthcare strategy, recognizing that incremental improvements won't suffice—the system requires fundamental transformation in capacity, technology, and financing.

The current structure provides free healthcare to all Omani citizens and GCC nationals, while requiring private-sector employees (both Omanis and expatriates) to carry mandatory health insurance. This hybrid model aims to reduce government healthcare spending while ensuring universal coverage through public-private partnership. Primary healthcare institutions are classified into health centers, extended health centers, polyclinics, and local hospitals, with a target ratio of one health center per 10,000 population. However, geographic concentration means most advanced facilities remain in Muscat, including the Royal Hospital of Oman and Sultan Qaboos University Hospital, leaving rural populations facing significant access barriers.

The Universal Health Coverage Program is expanding through initiatives like the Expanded Program on Immunization, which broadens vaccination scope across the population. The insurance system is being gradually scaled to cover all residents, not just private sector workers—a recognition that partial coverage creates inequities and leaves vulnerable populations exposed. The transition carries financial risk: can insurance premiums remain affordable while covering necessary services? Will employers absorb costs or pass them to workers? Will private insurers maintain adequate networks in underserved areas?

Digital transformation is central to Oman's strategy. The National Digital Health Strategy aims to deploy virtual medicine, artificial intelligence, and big data analytics, with full cloud transformation targeted for completion in 2025. These technologies could overcome geographic barriers through telemedicine, improve diagnostic accuracy through AI-supported imaging, and enable population health management through data integration. The challenge is ensuring digital infrastructure reaches beyond Muscat to serve rural and remote populations who often have the greatest needs and least access.

The preventive healthcare emphasis in Vision 2040 represents a crucial strategic shift. Oman's disease burden increasingly resembles high-income countries—rising rates of diabetes, cardiovascular disease, and obesity—while infectious diseases remain concerns. The healthcare system must manage both transitions simultaneously: expanding preventive programs to reduce chronic disease incidence while maintaining infectious disease surveillance and response capacity. Success requires not just hospital beds and doctors, but community health workers, health literacy programs, and environmental health interventions. Oman has the resources and political commitment to achieve its 2040 goals; the question is whether implementation can match ambition.`,
    issues: JSON.stringify([
      'Life Expectancy Gap and Vision 2040 Targets',
      'Universal Health Insurance Implementation',
      'Geographic Healthcare Access Disparities',
      'Digital Health Infrastructure Rollout'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Oman\'s Vision 2040: Raising Life Expectancy to 70 Years',
        source: 'Oman Observer',
        link: 'https://www.omanobserver.om/article/1159974/oman/health/omans-rapid-strides-in-preventive-healthcare-vision-2040-report',
        pubDate: new Date('2025-11-22').toISOString()
      },
      {
        title: 'National Digital Health Strategy Targets 2025 Cloud Transformation',
        source: 'Healthcare IT News',
        link: 'https://www.aapc.com/blog/89644-omani-healthcare-system-strives-to-provide-quality-care-for-all/',
        pubDate: new Date('2025-11-14').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Qatar',
    type: 'country',
    country: 'Qatar',
    lat: 25.3548,
    lng: 51.1839,
    category: 'healthcare',
    summary: `Qatar's healthcare system in 2025 is reaping the benefits of extraordinary World Cup-driven investment—ten new hospitals, 16 primary care centers, expanded ambulance services, and the region's largest emergency center, all built since 2010. What was prepared for a four-week tournament is now serving a nation of 2.9 million residents and a growing medical tourism industry that welcomed 45,000 inbound patients in 2024, generating $150 million in revenue. The question facing Qatari health officials is whether this infrastructure can transition from showcase to sustainable system.

Hamad Medical Corporation, the public healthcare provider, now operates 14 hospitals featuring advanced medical technology across the spectrum of care. The 2025 budget allocates QR 22 billion—roughly 10.5% of government spending—to healthcare, with projections showing the hospital market generating $2.26 billion in revenue by year-end, growing to $2.85 billion by 2029 at a 5.94% annual rate. These figures reflect genuine expansion, not just petroleum-fueled spending; Qatar is systematically building healthcare capacity that outlasts short-term events.

Digital health adoption has accelerated dramatically. Over 95% of Primary Health Care Corporation centers now connect to the national electronic health record system, enabling physicians and patients to access information anywhere in the country. In 2024, providers delivered more than 1.2 million virtual consultations across public and private sectors—a stunning figure for a country Qatar's size, and evidence that telemedicine has moved from pilot program to standard practice. This digital infrastructure creates possibilities: population health monitoring, coordinated chronic disease management, reduced duplication of tests and procedures.

Medical tourism is becoming a genuine economic sector rather than a aspirational goal. Patients travel to Qatar for specialized care in oncology, cardiology, orthopedics, and fertility treatment, attracted by internationally-accredited facilities (62 hospitals hold US Joint Commission International accreditation), highly-trained staff, and costs roughly 20% of US or European equivalents. The Aisha Bint Hamad Al Attiyah Hospital, which supported World Cup healthcare delivery, now serves as a template for patient-centered facility design.

The sustainability question remains: can a health system built for global display maintain excellence for routine care? Can digital infrastructure translate into better chronic disease outcomes? Can medical tourism grow without creating a two-tier system that prioritizes wealthy foreigners over Qatari citizens or expatriate workers? These challenges are hardly unique to Qatar, but they're particularly acute in a country that built modern healthcare infrastructure in less than 15 years. The foundation is impressive; now comes the harder work of operating it effectively, equitably, and sustainably for decades to come.`,
    issues: JSON.stringify([
      'Post-World Cup Healthcare Sustainability',
      'Medical Tourism Growth and Integration',
      'Digital Health System Maturation',
      'Equitable Access for Expatriate Workers'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Qatar Hospital Market to Reach $2.85 Billion by 2029',
        source: 'Healthcare Forecast',
        link: 'https://thepeninsulaqatar.com/article/05/01/2025/qatars-health-sector-poised-for-significant-growth-in-2025-report',
        pubDate: new Date('2025-11-25').toISOString()
      },
      {
        title: 'Qatar Delivers 1.2 Million Virtual Consultations in 2024',
        source: 'DohaGuides',
        link: 'https://dohaguides.com/hospitals-in-qatar/',
        pubDate: new Date('2025-11-19').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Kazakhstan',
    type: 'country',
    country: 'Kazakhstan',
    lat: 48.0196,
    lng: 66.9237,
    category: 'healthcare',
    summary: `Kazakhstan's healthcare system is undergoing the most significant transformation since independence—transitioning from Soviet-era state provision to a social health insurance model designed to achieve universal coverage while improving quality and efficiency. On July 14, 2025, the new Law on Compulsory Medical Insurance was signed, codifying reforms that aim to fundamentally restructure how healthcare is financed and delivered across the world's ninth-largest country.

The current system operates through two packages: a government-guaranteed package available to all residents, and a social health insurance package offering expanded benefits for those who pay contributions or for whom the government pays on their behalf. By early 2024, over 84% of the population had Social Health Insurance Fund (SHIF) coverage, representing rapid expansion. Healthcare funding has increased more than 2.5-fold since SHIF implementation, with 2024 allocating over KZT 2.8 trillion—approximately $6.3 billion—split between KZT 1.6 trillion for statutory free medical assistance and KZT 1.2 trillion for mandatory social health insurance.

The next phase begins in 2026, when more than one million unemployed and vulnerable citizens will be covered through government-funded insurance contributions paid by local and regional budgets. Health Minister Akmaral Alnazarova announced this expansion represents a commitment to genuine universality—ensuring that inability to pay doesn't determine access to care. By 2027, a unified package will clarify what services the state guarantees for free and what insurance covers, eliminating confusion about entitlements.

Kazakhstan's primary health care reforms are showing measurable results. The shift toward community-based care, emphasis on prevention, and strengthening of rural healthcare networks has saved millions in tertiary care costs while improving population health indicators. The model has attracted international attention as potentially replicable for other large, geographically dispersed countries transitioning from state-dominated to insurance-based systems.

Challenges persist. Rural healthcare infrastructure remains inadequate, with facilities lacking equipment, medications, and trained staff. Out-of-pocket expenses continue to burden households despite insurance expansion, suggesting that coverage breadth doesn't always translate to financial protection. The doctor-to-population ratio varies dramatically between Almaty and rural regions, creating access inequities that insurance alone cannot solve. Brain drain continues as physicians and nurses seek better compensation in Russia, Europe, or the Gulf states.

The path forward depends on whether Kazakhstan can couple insurance expansion with workforce development, infrastructure investment, and quality improvement. The financial commitment is real—more than doubling healthcare spending demonstrates political will. But sustainable universal health coverage requires more than money; it requires systems that consistently deliver competent, respectful, effective care. Kazakhstan has built the financing foundation; the superstructure of quality healthcare must now follow.`,
    issues: JSON.stringify([
      'Social Health Insurance System Expansion',
      'Rural Healthcare Infrastructure Gaps',
      'Out-of-Pocket Expense Burden',
      'Healthcare Workforce Retention'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Kazakhstan Signs New Compulsory Medical Insurance Law',
        source: 'PM Office Kazakhstan',
        link: 'https://primeminister.kz/en/news/reforms-and-innovations-in-2025-ministry-of-healthcare-29544',
        pubDate: new Date('2025-11-15').toISOString()
      },
      {
        title: 'Over 1 Million Unemployed Citizens to Receive Health Coverage in 2026',
        source: 'Times of Central Asia',
        link: 'https://timesca.com/kazakhstan-to-fund-health-insurance-for-over-a-million-unemployed-citizens/',
        pubDate: new Date('2025-11-20').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Thailand',
    type: 'country',
    country: 'Thailand',
    lat: 15.870032,
    lng: 100.992541,
    category: 'healthcare',
    summary: `Thailand has achieved what many countries aspire to: genuine universal health coverage. The Universal Coverage Scheme, introduced in 2002, now ensures that 99.5% of Thailand's 70 million residents have health insurance—up from 75% in 2000. This accomplishment places Thailand among global leaders in healthcare equity, demonstrating that universal coverage is achievable even for middle-income countries. But as Thailand positions itself to become Asia's leading Wellness & Healthcare hub, the system faces new challenges: aging infrastructure, workforce shortages, and the demands of a booming medical tourism industry that sometimes conflicts with local care priorities.

The system operates through three schemes: the Universal Coverage Scheme (UCS) for Thai nationals, the Social Security Scheme (SSS) for private sector employees, and the Civil Servant Medical Benefit Scheme (CSMBS) for government employees. This fragmented structure creates administrative complexity, but coverage is comprehensive—hospital care, outpatient services, medications, and preventive care are all included with minimal cost-sharing. Patients receive care at low personal cost, though choice of provider is often restricted to assigned facilities under UCS.

Thailand's hospital infrastructure includes nearly 1,300 facilities, with 80% operated by the Ministry of Public Health. This public dominance ensures broad geographic coverage, though quality and capacity vary significantly between Bangkok's tertiary hospitals and provincial facilities. Private hospitals have flourished, particularly in Bangkok and major tourist destinations, serving both Thai citizens seeking premium amenities and international patients. Medical tourism has become a significant economic sector, with 62 hospitals holding US Joint Commission International accreditation—among the highest totals in Asia.

The medical tourism industry presents both opportunity and tension. Thailand excels in cancer treatment, fertility services, orthopedics, cardiovascular medicine, and dentistry, with costs averaging 20% of US or European prices. This attracts patients from across Asia, the Middle East, and Western countries, generating substantial revenue. However, medical tourism can pull resources—particularly specialist physicians and nurses—away from public hospitals toward private facilities serving international patients. Workforce distribution becomes inequitable when the most skilled providers concentrate in Bangkok's private sector rather than provincial public hospitals.

Thailand's demographics are shifting rapidly. The population is aging, with increasing burdens of diabetes, cardiovascular disease, and cancer. The healthcare system, designed for acute infectious diseases and maternal-child health, must now excel at chronic disease management and long-term care. This transition requires different skills, infrastructure, and financing mechanisms. Prevention and primary care become more cost-effective than hospital-based treatment, but changing a system's orientation is difficult when hospitals dominate spending and prestige.

The path forward requires balancing competing priorities: maintain universal coverage while improving quality, serve medical tourists without neglecting local patients, attract healthcare workers to underserved areas without coercion, and manage chronic diseases effectively while controlling costs. Thailand has demonstrated that universal coverage is achievable; the harder challenge is sustaining and improving it as population needs evolve.`,
    issues: JSON.stringify([
      'Medical Tourism Impact on Local Healthcare Access',
      'Aging Population and Chronic Disease Burden',
      'Healthcare Workforce Geographic Distribution',
      'Hospital Infrastructure in Rural Areas'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Thailand Achieves 99.5% Health Insurance Coverage',
        source: 'Healthcare Asia',
        link: 'https://www.lumahealth.com/health-insurance/thailand/universal/',
        pubDate: new Date('2025-11-16').toISOString()
      },
      {
        title: 'Thailand Positions as Asia\'s Wellness & Healthcare Hub',
        source: 'Travel and Tour World',
        link: 'https://www.travelandtourworld.com/news/article/thailands-healthcare-system-delivers-exceptional-world-class-medical-care-and-affordable-premium-options-for-expats-and-tourists-with-expert-insights-into-smart-cost-savings-and-comprehensi/',
        pubDate: new Date('2025-11-21').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Vietnam',
    type: 'country',
    country: 'Vietnam',
    lat: 14.058324,
    lng: 108.277199,
    category: 'healthcare',
    summary: `Vietnam is racing toward universal health coverage with clear milestones: 95% coverage by 2026, universal coverage by 2030, and a roadmap to eliminate basic hospital fees for insured citizens. As of 2024, 93.4% of the population already has health insurance—nearly 13,000 public and private facilities received over 174 million visits that year. This represents remarkable progress for a country that three decades ago had minimal health infrastructure outside major cities. But coverage statistics mask deeper challenges: uneven quality between urban and rural facilities, hospital overcrowding, inefficient referral systems, and financial sustainability questions.

Resolution 72-NQ/TW of the Politburo, recently signed by Party General Secretary To Lam, outlines breakthrough measures to strengthen healthcare protection and improve public health. The target reflects political commitment at the highest levels—universal health coverage isn't merely a health ministry goal but a national priority. Recent policy discussions focus on amending the health insurance law to expand coverage, streamline patient referrals, and adjust contribution rates to ensure fairness while maintaining the fund's solvency.

Vietnam's health system operates in hierarchical tiers: commune health stations for primary care, district hospitals for basic inpatient services, provincial hospitals for more complex care, and central hospitals in Hanoi and Ho Chi Minh City for tertiary referrals. This structure makes sense on paper but breaks down in practice. Patients routinely bypass lower-level facilities and crowd tertiary hospitals, believing—often correctly—that quality is higher at top-tier institutions. Around 73% of total health spending occurs in hospitals, an inefficiently high proportion that reflects weak primary care and inadequate gatekeeping.

The government fully covers insurance costs for the poor, ethnic minorities, children under six, and elderly over 80—progressive targeting that protects vulnerable populations. However, the middle class faces rising premiums while out-of-pocket expenses remain substantial for services not fully covered by insurance. Balancing affordability for citizens with adequate provider reimbursement rates that maintain quality is the perpetual challenge of any insurance system.

Digital health initiatives offer potential solutions to access and efficiency problems. Vietnam is advancing telemedicine and electronic health records, which could enable remote consultations, reduce unnecessary hospital visits, and improve care coordination. Rural communes could access specialist expertise through video consultation, while integrated electronic records could prevent dangerous medication interactions and duplicative testing. But technology adoption requires infrastructure investment, provider training, and patient acceptance—all of which take time.

Vietnam's healthcare trajectory is upward. Coverage is expanding, facilities are improving, and outcomes are measurably better than a generation ago. Life expectancy has risen, maternal mortality has declined, and infectious disease control has improved significantly. The remaining challenges are those of middle-income countries: managing chronic diseases, ensuring equitable quality, controlling costs, and building primary care systems that keep people healthy rather than just treating them when they become ill. Vietnam has demonstrated impressive progress; sustaining improvement as expectations rise will require continued political commitment and smart resource allocation.`,
    issues: JSON.stringify([
      'Universal Health Coverage Implementation by 2030',
      'Hospital Overcrowding and Weak Primary Care',
      'Urban-Rural Healthcare Quality Gaps',
      'Health Insurance Financial Sustainability'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Vietnam Targets 95% Health Insurance Coverage by 2026',
        source: 'VietnamPlus',
        link: 'https://en.vietnamplus.vn/vietnam-targets-universal-health-insurance-coverage-by-2030-post326467.vnp',
        pubDate: new Date('2025-11-17').toISOString()
      },
      {
        title: 'Party General Secretary Signs Resolution 72 on Healthcare Reform',
        source: 'Vietnam News',
        link: 'https://en.vietnamplus.vn/vietnam-works-hard-to-reach-universal-health-coverage-by-2030/224686.vnp',
        pubDate: new Date('2025-11-23').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Philippines',
    type: 'country',
    country: 'Philippines',
    lat: 12.879721,
    lng: 121.774017,
    category: 'healthcare',
    summary: `On January 1, 2025, PhilHealth implemented the most significant benefit expansion in its history: 9,000 packages increased by 50%, coverage for heart procedures rising more than 1,600%, kidney transplant coverage jumping 230%, and the country's first-ever dental benefits. These reforms aim to raise PhilHealth's share of healthcare spending from 10.6% to 18.5-18.7% within three years, while reducing out-of-pocket expenses from 44-45% to 25-30%. For the Philippines' 115 million citizens, the changes represent a fundamental restructuring of healthcare financing—if they can be sustained financially and implemented effectively across the country's 7,600 islands.

The Philippine healthcare system has long suffered from inadequate insurance coverage, forcing families to pay directly for care that should be covered. Out-of-pocket spending of 44-45% is unsustainably high, driving households into poverty when serious illness strikes. The Universal Health Care Act of 2019 promised comprehensive coverage for all Filipinos, but implementation lagged as PhilHealth struggled with limited funds, provider payment disputes, and administrative complexity. The 2025 benefit expansion represents a renewed commitment, but questions persist: can PhilHealth afford these increases without premium hikes? Will hospitals accept the new rates, or will balance-billing shift costs back to patients?

Specific benefit increases target common high-cost conditions. Percutaneous Coronary Intervention for heart disease jumped from P30,300 to P524,000—recognizing that cardiovascular disease is the leading cause of death in the Philippines. Kidney transplant coverage rose from P600,000 to P2 million, while hemodialysis packages increased from P2,000 to P6,350 for 156 sessions annually. These changes acknowledge medical reality: sophisticated procedures cost far more than previous reimbursement rates suggested, and if insurance doesn't cover actual costs, patients pay the difference.

The introduction of Preventive Oral Health Services marks a strategic shift toward prevention. Dental coverage includes mouth examination, prophylaxis (cleaning), and fluoride varnish application—basic services that prevent more serious problems if provided consistently. Dental disease is endemic in the Philippines, particularly among children, but has been ignored by the insurance system. Adding preventive dental care could improve population health at relatively low cost.

Claims processing improvements matter as much as benefit increases. Reducing average processing time from months to 19 days in January 2025 ensures faster payments to healthcare providers, which improves their willingness to accept PhilHealth patients. Slow reimbursement is a major reason providers demand cash payment upfront, undermining the insurance system's purpose.

The most striking policy announcement: no premium increases despite expanded benefits, with Congress approving legislation to reduce contribution rates from 5% to 3.5%. This seems fiscally implausible—expanding coverage while cutting revenue rarely works. Either PhilHealth has underestimated costs, government subsidies will increase significantly, or benefit expansions will be scaled back when financial reality intrudes. The Philippines has made an ambitious commitment to healthcare equity; whether it can be delivered remains uncertain.`,
    issues: JSON.stringify([
      'PhilHealth Benefit Expansion Financial Sustainability',
      'Out-of-Pocket Healthcare Expense Reduction',
      'Provider Payment and Balance-Billing Issues',
      'Rural Healthcare Access and Quality'
    ]),
    topStories: JSON.stringify([
      {
        title: 'PhilHealth Increases 9,000 Benefit Packages by 50% in 2025',
        source: 'Philippine Information Agency',
        link: 'https://pia.gov.ph/philhealth-expands-medical-benefit-packages-in-2025/',
        pubDate: new Date('2025-11-19').toISOString()
      },
      {
        title: 'Heart Disease Coverage Increases by 1,600% Under New Benefits',
        source: 'Philippine News Agency',
        link: 'https://www.pna.gov.ph/articles/1241535',
        pubDate: new Date('2025-11-14').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Malaysia',
    type: 'country',
    country: 'Malaysia',
    lat: 4.210484,
    lng: 101.975766,
    category: 'healthcare',
    summary: `Malaysia's healthcare system is approaching what analysts call "a ticking time bomb"—and in November 2025, warnings are growing louder that without urgent reforms, the system faces collapse. Over 70% of Malaysians depend on public healthcare, where the doctor-to-patient ratio exceeds 1,500:1, hospitals operate beyond capacity with unacceptable waiting times, and chronic shortages of specialists, nurses, and essential medicines persist. The 13th Malaysian Plan, tabled in Parliament in August 2025, was supposed to chart a path forward. Instead, health policy experts describe it as underwhelming, falling short on healthcare financing, workforce development, outbreak preparedness, and non-communicable disease management.

The Ministry of Health's Health White Paper, passed in June 2023, outlined a comprehensive 15-year reform roadmap focusing on primary healthcare enhancement, community-based services, and workforce competency. The plan made sense: shift care upstream to prevent expensive hospitalizations, strengthen community health centers, and invest in workforce training and retention. But the 13th Plan's implementation framework lacks the bold financing commitments and structural changes needed to make the White Paper's vision reality.

The workforce crisis is severe and worsening. High workloads, low morale, inadequate compensation, and limited career progression drive doctors, nurses, and allied health professionals toward private practice or emigration. This brain drain accelerates as neighboring countries and Western nations actively recruit Malaysian-trained professionals. Public hospitals are left chronically understaffed, particularly in specialties like anesthesiology, radiology, and surgery, creating bottlenecks that force patients to wait months for procedures available immediately in private facilities.

Digital infrastructure lags dangerously. Only 24% of public hospitals have hospital information systems, and just 7% of health clinics had clinical information systems by 2019. The lack of a comprehensive, integrated electronic health record system means that patient information doesn't follow patients across facilities, leading to duplicated tests, medication errors, and fragmented care. For a middle-income country with Malaysia's technical capacity, these gaps are inexcusable.

Chronic underfunding is the root cause. Public hospitals operate with overcrowding, long queues for specialist consultations, and persistent shortages of essential medicines and equipment. When middle-class Malaysians lose confidence in public hospitals, they shift to private care, reducing political pressure to adequately fund public services. This creates a vicious cycle: underfunding drives those who can afford alternatives away, which reduces political support for public investment, which further degrades services for those who cannot afford private care.

Non-communicable diseases are rising rapidly—diabetes, cardiovascular disease, cancer, and mental health conditions—but the system remains oriented toward acute infectious disease management. Malaysia needs a healthcare transformation that prioritizes prevention, chronic disease management, and primary care. The Health White Paper recognized this; the 13th Plan failed to fund it. Without urgent course correction, Malaysia risks a healthcare system unable to serve the majority of its population effectively. Time is running out.`,
    issues: JSON.stringify([
      'Healthcare Workforce Crisis and Brain Drain',
      'Public Hospital Overcrowding and Resource Shortages',
      'Digital Health Infrastructure Gaps',
      'Chronic Healthcare Underfunding'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Malaysia\'s Healthcare System in Critical Condition, Experts Warn',
        source: 'Free Malaysia Today',
        link: 'https://www.freemalaysiatoday.com/category/nation/2025/07/28/malaysias-healthcare-system-in-critical-condition',
        pubDate: new Date('2025-11-20').toISOString()
      },
      {
        title: '13th Malaysia Plan Falls Short on Health System Vision',
        source: 'Galen Centre',
        link: 'https://galencentre.org/2025/08/01/13th-malaysia-plan-needs-more-ambitious-strategic-vision-for-health/',
        pubDate: new Date('2025-11-15').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Singapore',
    type: 'country',
    country: 'Singapore',
    lat: 1.352083,
    lng: 103.819836,
    category: 'healthcare',
    summary: `Singapore's healthcare system in November 2025 is at the technological frontier—deploying AI-driven patient monitoring, robotic caregivers, personalized rehabilitation programs, and integrated digital platforms that connect the entire care continuum. The Ministry of Health is investing approximately $200 million over five years into the MOH Health Innovation Fund, supporting ground-up development of AI and digital health solutions across public hospitals. Two new technical standards—SS719:2025 on data terminology and SS720:2025 on remote clinical monitoring—provide the infrastructure for secure, efficient clinical data exchange. This isn't vaporware; it's operational reality across Singapore's healthcare system.

The digital backbone is HEALIX (Health Empowerment through Advanced Learning and Intelligent eXchange), a cloud-based data platform enabling secure sharing of clinical, socio-economic, lifestyle, and genomic data across healthcare clusters. This level of integration allows population health management that would be impossible with fragmented systems: identifying high-risk patients before crises occur, coordinating care across multiple specialists, tracking medication adherence, and analyzing treatment effectiveness across populations. AimSG, a centralized platform for imaging AI models, allows public hospitals to access diagnostic algorithms from multiple vendors, democratizing access to cutting-edge technology.

Hospital capacity is expanding significantly. From 2025 to 2030, Singapore plans to add 13,600 beds, including 2,800 acute and community hospital beds. This expansion reflects demographic reality: Singapore's population is aging rapidly, and demand for healthcare services is growing faster than population growth alone would suggest. The new facilities feature AI-driven monitoring, robotic assistance, and personalized rehabilitation—not as gimmicks, but as workforce multipliers that allow limited staff to provide higher-quality care to more patients.

Specific innovations demonstrate Singapore's approach. The Singapore Heart Lesion Analyser (Sense) is being trialed at the National Heart Centre Singapore, NUH, and Tan Tock Seng Hospital in 2025, using AI to analyze cardiac imaging and identify lesions requiring intervention. Remote clinical monitoring standards mean patients with chronic conditions can be tracked at home, with alerts triggering intervention before emergencies require hospitalization. These technologies work because Singapore has built the digital infrastructure, trained the workforce, and created the regulatory environment to make adoption feasible.

The challenge is ensuring that technological sophistication translates to better outcomes and experiences, not just impressive demonstrations. AI-driven monitoring only helps if alerts are acted upon promptly. Integrated health records only improve care if clinicians have time to review them. Robotic caregivers may assist with physical tasks, but human connection remains essential for healing. Singapore has the resources, technical capacity, and political will to build world-leading healthcare infrastructure. Whether it can maintain the human elements that make healthcare truly effective—empathy, trust, continuity—while deploying cutting-edge technology will determine whether Singapore's model is genuinely superior or merely more expensive.`,
    issues: JSON.stringify([
      'Healthcare AI Integration and Clinical Deployment',
      'Hospital Capacity Expansion for Aging Population',
      'Digital Health Infrastructure and Data Interoperability',
      'Healthcare Workforce and Technology Balance'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Singapore Launches SS719 and SS720 Healthcare Data Standards',
        source: 'OpenGov Asia',
        link: 'https://opengovasia.com/singapore-new-standards-to-boost-healthtech-interoperability/',
        pubDate: new Date('2025-11-18').toISOString()
      },
      {
        title: 'MOH to Add 13,600 Healthcare Beds by 2030',
        source: 'Singapore MOH',
        link: 'https://www.moh.gov.sg/newsroom/expanding-healthcare-capacity-and-transforming-the-healthcare-workforce/',
        pubDate: new Date('2025-11-22').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Taiwan',
    type: 'country',
    country: 'Taiwan',
    lat: 23.69781,
    lng: 120.960515,
    category: 'healthcare',
    summary: `Taiwan's National Health Insurance ranks first globally in the 2025 Numbeo Health Care Index with a score of 86.5—the seventh consecutive year at the top. Population coverage reached 99.9% by the end of 2023, with average monthly premiums of approximately $42 and premium rates at 5.17% of monthly income, lower than South Korea (7%) or Japan (10%). By conventional metrics, Taiwan has achieved universal healthcare excellence: comprehensive coverage, affordable premiums, broad access to services including dental and traditional Chinese medicine. But beneath these accomplishments, demographic and financial pressures are mounting that threaten the system's sustainability.

Taiwan's population is aging with breathtaking speed. The number of people over 65 doubled from 2 million in 2002 to nearly 4 million in 2023. By 2030, over 20% of Taiwan's population will be elderly—a threshold that typically doubles per-capita healthcare expenditure. By 2040, only two working-age citizens will exist for every elderly person, compared to four in 2022. This dependency ratio poses an existential challenge: who will pay for healthcare when the population pyramid inverts?

A December 2024 reform, mandated by a 2022 Constitutional Court ruling, requires all Taiwanese nationals to maintain NHI premium payments regardless of where they live. Previously, Taiwanese living abroad could suspend premiums and resume coverage upon return—a system that encouraged adverse selection as people paid in when they needed care and opted out when healthy. The reform's elimination of this suspension mechanism is projected to generate an additional NTD 2.36 billion ($70.59 million) annually—a modest sum relative to total NHI spending, but symbolically important for establishing fairness.

The system's comprehensiveness creates cost pressures. NHI covers outpatient visits, inpatient care, dental services, traditional Chinese medicine, renal dialysis, and prescription drugs. This breadth of coverage is politically popular but financially challenging when the population ages and requires more intensive services. Unlike systems that cost-share extensively or restrict coverage to essential services, Taiwan's NHI maintains relatively low cost-sharing and broad benefits. This generosity depends on keeping per-capita costs manageable—difficult when chronic disease prevalence rises.

Reform debates focus on financial sustainability rather than access. Should premiums increase to match rising costs? Should certain services be excluded or cost-sharing expanded? Should Taiwan adopt reference pricing for pharmaceuticals or restrict coverage of marginally beneficial interventions? These are uncomfortable conversations for a system that has built its reputation on comprehensive, affordable coverage. But demographic realities cannot be wished away.

Taiwan has demonstrated that universal health coverage is achievable and sustainable for decades. The question now is whether it can adapt to population aging without sacrificing either comprehensiveness or affordability. The answer likely requires some combination of higher premiums, selective benefit restrictions, aggressive prevention programs, and innovative care delivery models that provide high-quality care at lower cost. Taiwan built one of the world's best healthcare systems; now it must evolve that system to remain excellent under radically different demographic conditions.`,
    issues: JSON.stringify([
      'Rapidly Aging Population and Healthcare Costs',
      'National Health Insurance Financial Sustainability',
      'Declining Worker-to-Retiree Ratio',
      'Premium Reform and Cost-Sharing Debates'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Taiwan Ranks First in 2025 Numbeo Health Care Index',
        source: 'Taiwan News',
        link: 'https://en.wikipedia.org/wiki/Healthcare_in_Taiwan',
        pubDate: new Date('2025-11-21').toISOString()
      },
      {
        title: 'NHI Reform Eliminates Premium Suspension for Overseas Taiwanese',
        source: 'Global Taiwan Institute',
        link: 'https://globaltaiwan.org/2025/01/reforming-taiwans-national-health-insurance-from-exploitation-to-equitable-participation/',
        pubDate: new Date('2025-11-16').toISOString()
      }
    ]),
    storyCount: 2
  }
]

async function addHealthcareSummariesToDatabase() {
  console.log('Adding healthcare category summaries for Batch 7 countries...\n')

  for (const summary of HEALTHCARE_SUMMARIES) {
    try {
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: summary.name,
            type: summary.type,
            category: summary.category
          }
        },
        create: {
          name: summary.name,
          type: summary.type,
          country: summary.country,
          lat: summary.lat,
          lng: summary.lng,
          category: summary.category,
          summary: summary.summary,
          issues: summary.issues,
          topStories: summary.topStories,
          storyCount: summary.storyCount,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        update: {
          summary: summary.summary,
          issues: summary.issues,
          topStories: summary.topStories,
          storyCount: summary.storyCount,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${summary.name} healthcare summary added/updated (${summary.summary.length} characters)`)
    } catch (error) {
      console.error(`❌ Error adding ${summary.name}:`, error)
    }
  }

  console.log('\n✅ All healthcare summaries processed!')
  console.log('\nSummary character counts:')
  HEALTHCARE_SUMMARIES.forEach(s => {
    console.log(`  ${s.name}: ${s.summary.length} characters`)
  })
}

addHealthcareSummariesToDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
