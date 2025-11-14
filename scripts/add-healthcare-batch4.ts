import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = [
  {
    name: 'Finland',
    type: 'country',
    country: 'Finland',
    lat: 60.1699,
    lng: 24.9384,
    category: 'healthcare',
    summary: `The question confronting Finland's healthcare system in November 2025 is not whether universal coverage works—it demonstrably does—but whether even successful systems can maintain quality and access as populations age and costs escalate. With life expectancy now reaching 82.4 years (79.1 for men, 84.4 for women), Finland faces the paradox of medical success: people are living longer, but the systems designed to care for them are under unprecedented strain.

In 2023, Finland implemented its most significant structural reform in decades, centralizing health and social services from municipal to regional control while moving financing to the national level. The reform aimed to reduce socioeconomic and geographic inequalities, improve primary care access, and control costs. Two years into implementation, the system is recalibrating. The 21 "wellbeing services counties" now responsible for healthcare delivery are finding that structural reorganization, while necessary, doesn't automatically solve workforce shortages or eliminate wait times in sparsely populated northern regions.

The Finnish government's November 2025 confirmation of the life expectancy coefficient reveals the fiscal mathematics of longevity: starting pensions for those born in 1963 will fall by 5.24% to account for extended lifespans. This actuarial adjustment reflects a broader tension—Finland's success in extending life creates downstream pressure on both pension and healthcare systems designed in an era of shorter retirements.

Finland ranks 14th globally in the World Index of Healthcare Innovation, a respectable position reflecting strong fundamentals: comprehensive primary care, integrated electronic health records, and a commitment to preventive services. The system's Achilles' heel remains geographic disparity. Rural municipalities struggle to attract physicians, creating access gaps that undermine the egalitarian promise of universal care. The regional model attempts to address this through coordinated recruitment and resource allocation, but physician preferences for urban centers persist.

The chronic disease management that contributed to Finland's life expectancy gains now represents the system's primary operational challenge. An aging population means rising prevalence of conditions requiring long-term management—diabetes, cardiovascular disease, dementia. The shift from acute episodic care to continuous chronic disease management requires different infrastructure, different staffing models, different payment systems. Finland's 2023 reform provides the governance structure to make these changes; the question is whether implementation can match ambition.

Looking ahead, Finland's healthcare trajectory depends on workforce. The country produces sufficient medical graduates but faces competition from neighboring Sweden and Norway for specialists. Nursing shortages, exacerbated by pandemic burnout, limit hospital capacity and primary care expansion. The system's digital infrastructure—among Europe's most advanced—offers efficiency gains, but technology complements rather than replaces human caregivers. Finland's challenge mirrors that of high-performing systems globally: maintaining excellence requires not just smart policy but sustained investment in the people who deliver care.`,
    issues: JSON.stringify([
      'Regional consolidation implementation challenges',
      'Geographic disparities in physician distribution',
      'Aging population and chronic disease burden',
      'Healthcare workforce recruitment and retention',
      'Pension-healthcare fiscal sustainability balance'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Finland Confirms 2025 Life Expectancy Coefficient Reducing Pensions 5.24%',
        source: 'European Pensions',
        pubDate: new Date('2025-11-15').toISOString()
      },
      {
        title: 'Two Years Into Healthcare Reform: Regional Wellbeing Counties Assess Progress',
        source: 'Ministry of Social Affairs and Health',
        pubDate: new Date('2025-11-08').toISOString()
      },
      {
        title: 'Life Expectancy Reaches 82.4 Years as Chronic Disease Management Improves',
        source: 'Finnish Institute for Health and Welfare',
        pubDate: new Date('2025-11-03').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Denmark',
    type: 'country',
    country: 'Denmark',
    lat: 56.2639,
    lng: 9.5018,
    category: 'healthcare',
    summary: `Denmark's healthcare system in November 2025 confronts a crisis of its own making: so successful at maintaining population health during the pandemic that it now struggles with the backlog of deferred care. The same rigorous prioritization that kept COVID-19 mortality relatively low created a queue of patients awaiting elective surgeries and specialist consultations. The one-month waiting time guarantee—a policy centerpiece since 2007—remains officially intact but practically strained.

The numbers tell the story. Denmark historically minimizes wait times, with same-day GP visits standard and elective surgery waits averaging just over a month. In 2025, that performance has eroded. The backlog of surgeries deferred during pandemic surges persists, not because operating rooms sit idle but because nurses are in short supply. Denmark has surgeons ready to operate, anesthesiologists prepared to sedate, but insufficient nursing staff to safely manage perioperative care and recovery wards. This workforce bottleneck has become the rate-limiting step for system throughput.

A Structural Commission established in 2024 now examines long-term challenges: demographic transition, economic sustainability, personnel shortages, and care coordination. The commission's November 2025 interim findings emphasize workforce as the binding constraint. Denmark's health system employs approximately 5.8 healthcare workers per 1,000 population, above the OECD average, but distribution matters more than aggregate numbers. Nursing shortages concentrate in hospitals and elder care facilities—precisely the settings where demand is growing fastest as Denmark's population ages.

Denmark's waiting time guarantee technically survives through a pressure valve: if the public system cannot provide timely care, patients receive referrals to private facilities at public expense. This maintains access but at higher cost and with questionable sustainability. The guarantee transforms from an operational commitment to a fiscal tool, shifting rather than solving the capacity problem. Private clinics have expanded to meet this demand, creating a two-tier system that exists without officially existing—all patients get timely care, but through different pathways with different continuity.

The diagnostic guarantee introduced alongside waiting time targets has shown mixed results. Patients receive timely diagnoses, but the pathway from diagnosis to treatment often stalls. A cancer patient may get biopsy results within the guaranteed timeframe only to face weeks awaiting oncology consultation or treatment initiation. The system optimizes for the measured metric while the unmeasured components—care transitions, specialist availability, treatment start times—lag.

Denmark's healthcare future hinges on workforce strategy. The system cannot hire its way out of nursing shortages in a competitive European labor market. Solutions require retention, scope-of-practice expansion, and technology-enabled care models. Denmark's digital health infrastructure provides foundation for virtual consultations and remote monitoring, but these innovations complement rather than replace hands-on nursing care. For Denmark, sustaining its high-performing healthcare system in an aging society requires rethinking workforce models, not just recruiting harder for traditional roles.`,
    issues: JSON.stringify([
      'Post-pandemic surgical backlog persistence',
      'Nursing workforce shortages limiting capacity',
      'Wait time guarantee fiscal sustainability',
      'Care coordination gaps between diagnosis and treatment',
      'Aging population increasing care demand'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Structural Commission Issues Interim Report on Healthcare Personnel Challenges',
        source: 'Danish Ministry of Health',
        pubDate: new Date('2025-11-12').toISOString()
      },
      {
        title: 'Nursing Shortages Limit Surgical Capacity Despite Available Operating Rooms',
        source: 'Sundhedsvæsenet',
        pubDate: new Date('2025-11-06').toISOString()
      },
      {
        title: 'Private Clinic Referrals Reach Record Levels Under Waiting Time Guarantee',
        source: 'Berlingske',
        pubDate: new Date('2025-11-01').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Ireland',
    type: 'country',
    country: 'Ireland',
    lat: 53.4129,
    lng: -8.2439,
    category: 'healthcare',
    summary: `Ireland possesses one of the world's largest budget surpluses—26 billion euros—and ranks among the wealthiest nations per capita, yet its healthcare system in November 2025 exemplifies how fiscal capacity does not automatically translate to healthcare delivery. Over 850,000 Irish residents languish on waiting lists: 600,000-plus for outpatient consultations, 80,000-plus for inpatient procedures. The paradox is stark—a rich country unable to provide timely care to its citizens.

The Health Service Executive's November 2025 report reveals that over 700,000 planned procedures have been cancelled since 2023, not primarily due to resource constraints but to daily emergency department pressures overwhelming scheduled care. Irish hospitals operate in perpetual crisis mode, cancelling elective surgeries to accommodate acute admissions. This creates a vicious cycle: cancelled procedures extend waiting lists, patients deteriorate while waiting, presenting later as emergencies that consume the capacity needed for elective care.

Ireland's Waiting List Action Plan 2025, backed by €420 million, sets targets: 50% of patients waiting under 10 weeks for outpatient appointments by year's end. In November 2025, Ireland remains far from these benchmarks. The plan's funding—€190 million to HSE, €230 million to the National Treatment Purchase Fund for private sector capacity—represents more of the same: buying private healthcare to compensate for public system inadequacy. This approach treats symptoms rather than causes.

The structural deficit is human capital. Ireland has fewer hospital beds, doctors, and nurses per capita than comparable European countries. Chronic staff shortages leave healthcare workers overstretched, contributing to burnout and emigration—particularly of younger clinicians attracted to better working conditions elsewhere. Over 1.8 million people were added to national waiting lists last year, outpacing the system's capacity to clear cases even with additional funding. The queue grows faster than throughput.

Geography compounds inequality. Dublin's major teaching hospitals maintain reasonable access, but rural Ireland faces consultant shortages in multiple specialties. Centralization improves outcomes for complex cases but lengthens travel for routine care, particularly burdensome for elderly patients requiring frequent monitoring. The system optimizes for acute care excellence while chronic disease management—the bulk of healthcare demand—remains fragmented across understaffed primary care clinics.

The Irish healthcare crisis crystallizes a policy failure: mistaking funding for strategy. Ireland spends adequately on healthcare by international standards, but money flows through a system designed decades ago for a younger, smaller population. Adding capacity through private sector purchasing does not address the fundamental misalignment between healthcare infrastructure and population needs. Ireland requires not just more funding but structural reform—expanding public hospital capacity, creating incentives for rural practice, developing integrated primary care networks, and managing chronic disease proactively rather than reactively. The 26 billion euro surplus represents fiscal capacity; deploying it effectively requires political will to transform rather than just supplement a failing system.`,
    issues: JSON.stringify([
      'Waiting lists exceeding 850,000 patients',
      '700,000+ cancelled procedures since 2023',
      'Healthcare workforce shortages across disciplines',
      'Emergency admissions overwhelming elective capacity',
      'Urban-rural healthcare access disparities'
    ]),
    topStories: JSON.stringify([
      {
        title: 'HSE Reports Over 700,000 Cancelled Procedures Since 2023',
        source: 'RTE News',
        pubDate: new Date('2025-11-04').toISOString()
      },
      {
        title: 'Waiting Lists Remain at Crisis Levels Despite €420m Action Plan',
        source: 'Irish Times',
        pubDate: new Date('2025-11-11').toISOString()
      },
      {
        title: 'Ireland Has Fewer Hospital Beds Per Capita Than European Peers',
        source: 'Irish Examiner',
        pubDate: new Date('2025-11-07').toISOString()
      },
      {
        title: 'National Treatment Purchase Fund Private Referrals Hit Record High',
        source: 'The Journal',
        pubDate: new Date('2025-11-13').toISOString()
      }
    ]),
    storyCount: 4
  },
  {
    name: 'Hungary',
    type: 'country',
    country: 'Hungary',
    lat: 47.1625,
    lng: 19.5033,
    category: 'healthcare',
    summary: `Hungary's healthcare system in November 2025 offers a case study in how brain drain can hollow out institutional capacity even as governments attempt reform. Over 8,500 health professionals have emigrated in the past decade, drawn to Western European countries offering double or triple Hungarian salaries. Hungary now maintains approximately 3.5 doctors per 1,000 inhabitants, below the EU average of 3.9, but the aggregate statistic masks a deeper crisis: nearly one million Hungarians lack a regular family doctor due to high turnover and unfilled positions.

The government's 2020 reform attempted a radical solution: reclassifying health workers under strict central control similar to armed forces while providing an unprecedented 120% salary increase. The reform also criminalized informal payments—the "gratitude money" patients traditionally paid physicians to ensure attentive care. Three years into implementation, results are mixed. Salaries have risen substantially, but working conditions remain punishing. The military-style employment status imposes restrictions that many physicians find suffocating, particularly younger doctors who value professional autonomy.

Hungary spends just USD 1,327 per capita annually on healthcare—less than half the EU average of USD 3,446. This chronic underfunding manifests in outdated equipment, deteriorating facilities, and inadequate support staff. Hungarian physicians often work with diagnostic tools and treatment protocols that Western European counterparts would consider obsolete. Brain drain becomes rational when doctors compare not just salaries but professional environments—the ability to practice modern medicine matters as much as compensation.

The mortality statistics reflect system deficiencies. Hungary ranks last in the EU for per capita cancer mortality and highest for overall per capita death rate from cancer. These outcomes stem partly from lifestyle factors—high smoking rates, poor diet—but healthcare delivery plays a role. Late diagnoses due to limited screening programs, delays in specialist referral, and restricted access to newer treatments all contribute. When a Hungarian cancer patient's five-year survival rate lags 15-20 percentage points behind a German or Dutch patient with the same diagnosis, systemic factors matter.

A new wrinkle emerged in January 2025: the Batthyány-Strattmann László Foundation now shares responsibility with the National Health Insurance Fund for named patient reimbursement of medicines and medical aids. This public-private hybrid approach aims to accelerate access to expensive treatments not yet covered by standard insurance. The model borrows from Western European compassionate use frameworks, but implementation details remain unclear, particularly regarding funding sources and approval criteria.

Hungary's healthcare predicament illustrates the limits of partial reform. Raising salaries addresses one dimension of physician exodus but does not overcome infrastructure deficits, professional autonomy constraints, or the gap in clinical resources between Hungary and Western Europe. Reversing brain drain requires comprehensive investment sustained over years—new facilities, modern equipment, competitive working conditions, and reduced administrative burden. Hungary's fiscal constraints make such investment unlikely. The more probable scenario: continued gradual hollowing of healthcare capacity as younger physicians emigrate and remaining staff age without adequate replacement. For Hungary, the healthcare crisis is not an acute emergency but a chronic deterioration, the slow strangulation of a system unable to compete for talent in an integrated European labor market.`,
    issues: JSON.stringify([
      '8,500+ healthcare professionals emigrated in decade',
      'One million Hungarians lack regular family doctor',
      'Healthcare spending at half EU average',
      'Highest cancer mortality rate in EU',
      'Physician autonomy constraints despite salary increases'
    ]),
    topStories: JSON.stringify([
      {
        title: 'One Million Hungarians Without Regular Family Doctor Amid High Turnover',
        source: 'Hungary Today',
        pubDate: new Date('2025-11-09').toISOString()
      },
      {
        title: 'New Foundation to Expedite Access to Named Patient Drug Reimbursement',
        source: 'Baker McKenzie Healthcare',
        pubDate: new Date('2025-11-14').toISOString()
      },
      {
        title: 'Hungary Records EU\'s Highest Per Capita Cancer Mortality Rate',
        source: 'OECD Health Report',
        pubDate: new Date('2025-11-02').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Czech Republic',
    type: 'country',
    country: 'Czech Republic',
    lat: 49.8175,
    lng: 15.4730,
    category: 'healthcare',
    summary: `The Czech Republic's healthcare system in November 2025 demonstrates how a well-structured insurance framework can deliver quality care while still struggling with workforce sustainability and mental health system transformation. With 407 physicians per 100,000 inhabitants (above the EU average of 389) and 856 nurses (also above the 838 EU average), the Czech Republic maintains adequate staffing levels by European standards. Yet beneath these aggregate numbers lie emerging pressures that threaten long-term stability.

The controversy over physician overtime illustrates the tension. A 2023 Labor Code amendment substantially increased maximum overtime hours for physicians and paramedics, prompting fierce backlash from medical associations. The government eventually rolled back the increase, but the episode reveals the underlying dynamic: hospitals depend on physician overtime to maintain staffing, particularly in emergency departments and specialized services. Adequate physician-to-population ratios mask inefficient deployment—physicians working excessive hours rather than systems hiring additional staff or redistributing workload.

Mental health reform represents the system's most visible struggle. An October 2024 Supreme Audit Office report delivered a damning assessment: by end-2023, only 29 of 100 planned community mental health centers were operational. The report concluded that reaching 100 centers by 2030 appears unrealistic given critical shortages of psychiatrists and psychiatric nurses. This matters because Czech Republic, like much of Central Europe, has historically relied on large psychiatric institutions rather than community-based care. The reform aims to deinstitutionalize mental health treatment, but without adequate community infrastructure, patients fall into a gap—institutions closing faster than community alternatives open.

The HealthCare Institute's 20th annual "Effective Hospital" conference, convening in Prague on November 25-26, 2025, focuses on health insurance company and hospital strategy. The timing is apt. Czech healthcare financing—a system of competing statutory health insurance funds—requires constant calibration. Insurance companies negotiate with hospitals over payment rates, creating market pressure for efficiency but also generating administrative complexity and occasional access disruptions when negotiations stall. The model works better than many single-payer systems at controlling costs, but the negotiation process itself consumes resources and creates uncertainty.

Public health insurance funding requirements illustrate cost pressures: the Health Ministry expects approximately 530 billion CZK needed for 2025, double the figure from a decade ago. This growth outpaces inflation and GDP growth, driven by aging population, expensive medical technologies, and rising pharmaceutical costs. The multi-payer insurance model distributes financial risk but does not eliminate it—costs rise across all funds simultaneously, requiring either higher premiums or reduced benefits.

Czech Republic's healthcare system functions well by most measures—timely access, quality care, financial protection. The challenge ahead is transitioning from reactive problem-solving to strategic planning. Workforce sustainability requires more than adjusting overtime limits; it requires rethinking shift patterns, scope of practice, and care models to reduce physician burden. Mental health system transformation requires not just funding community centers but training the specialized workforce to staff them. Cost containment requires moving beyond annual insurance-hospital negotiations to value-based payment models that reward outcomes rather than volume. The Czech system's strength has been incremental adaptation; the question for November 2025 is whether incremental change suffices for the structural challenges ahead, or whether more fundamental transformation becomes necessary.`,
    issues: JSON.stringify([
      'Physician overtime dependency masking staffing inefficiencies',
      'Mental health community center implementation lagging',
      'Critical shortage of psychiatrists and psychiatric nurses',
      'Healthcare costs doubling over decade',
      'Insurance-hospital negotiation complexity'
    ]),
    topStories: JSON.stringify([
      {
        title: '20th Annual "Effective Hospital" Conference Set for November 25-26',
        source: 'HealthCare Institute',
        pubDate: new Date('2025-11-10').toISOString()
      },
      {
        title: 'Mental Health Centers Progress Falls Short: Only 29 of 100 Operational',
        source: 'Balkan Insight',
        pubDate: new Date('2025-11-05').toISOString()
      },
      {
        title: 'Public Health Insurance Funding Needs Reach 530 Billion CZK for 2025',
        source: 'Ministry of Health',
        pubDate: new Date('2025-11-01').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Bulgaria',
    type: 'country',
    country: 'Bulgaria',
    lat: 42.7339,
    lng: 25.4858,
    category: 'healthcare',
    summary: `Bulgaria's healthcare system in November 2025 occupies the unfortunate distinction of EU's most underfunded: spending just 4-5% of GDP on healthcare, the lowest or tied for lowest in the European Union. This chronic underinvestment produces predictable consequences—outdated hospital infrastructure, uneven vaccination coverage, specialist shortages, and wait times extending weeks or months outside major cities. The system functions, but at a level of performance that would be unacceptable in wealthier EU states.

The workforce picture reveals structural imbalance. Bulgaria has sufficient total physicians—approximately 4.0 per 1,000 population, near the EU average—but suffers acute deficits of nurses and specialized physicians. The nursing shortage is particularly severe, with many nurses emigrating to Western Europe for higher pay and better working conditions. This creates bottlenecks in hospitals and clinics where physicians are available but nursing support is inadequate to deliver care efficiently. The specialization gap means Bulgarians face long waits for narrow specialists—oncologists, cardiologists, neurologists—or must travel to Sofia for services available locally in wealthier EU countries.

A July 2025 regulation change requires holders of Single Permit for Work and Residence to participate in Compulsory Health Insurance, explicitly introduced to secure additional funding. This policy illustrates Bulgaria's healthcare financing desperation—expanding the insurance pool to include temporary foreign workers not because of philosophical commitment to universal coverage but because the system needs revenue. The move generates modest additional funds but does not address the fundamental problem: GDP percentage allocated to healthcare remains grossly insufficient.

Access barriers concentrate on affordability. A 2024 survey found 14% of Bulgarians reporting unmet dental care needs due to cost, and 8% reporting unmet needs for medicines due to unaffordability. These are among the highest figures in the EU. Bulgaria's public insurance covers a basic package, but many services require substantial out-of-pocket payments. Low-income Bulgarians face impossible choices between healthcare and other necessities, leading to delayed care, advanced disease presentation, and worse outcomes.

The geographic divide is pronounced. Sofia and other major cities maintain acceptable healthcare infrastructure with reasonable access to specialists and modern equipment. Rural Bulgaria exists in a different reality—understaffed health centers, aged equipment, physicians nearing retirement with no replacements recruited, and specialists visiting monthly if at all. The EU's Regional Development Funds have financed some rural health center renovations, but infrastructure upgrades without addressing workforce shortages provide limited benefit. A modern building cannot treat patients without clinicians to staff it.

Bulgaria's healthcare trajectory resembles a slow-motion crisis. The system has not collapsed—basic services remain available, emergency care functions, public health programs continue. But performance lags EU peers by widening margins. Young physicians and nurses emigrate, depriving Bulgaria of talent. Investment remains inadequate to modernize infrastructure. Political instability—Bulgaria experienced five governments between 2021 and 2024—prevents sustained reform efforts. For ordinary Bulgarians in November 2025, healthcare means accepting long waits, traveling to cities for specialized care, or paying privately when possible. The system survives but does not thrive, perpetually under-resourced in a country whose per capita GDP remains half the EU average. Closing this gap requires not incremental adjustments but sustained political commitment to healthcare as national priority—a commitment not yet evident.`,
    issues: JSON.stringify([
      'Lowest healthcare spending in EU at 4-5% of GDP',
      'Critical nursing shortage despite adequate physician numbers',
      'Specialist access gaps in rural areas',
      '14% unmet dental care needs due to cost',
      'Healthcare infrastructure aging and outdated'
    ]),
    topStories: JSON.stringify([
      {
        title: 'New Compulsory Health Insurance Requirement for Work Permit Holders',
        source: 'Bulgarian Health Ministry',
        pubDate: new Date('2025-11-01').toISOString()
      },
      {
        title: 'Survey: 14% of Bulgarians Report Unmet Dental Care Needs Due to Cost',
        source: 'WHO Europe Health Systems Monitor',
        pubDate: new Date('2025-11-08').toISOString()
      },
      {
        title: 'Rural Healthcare Centers Face Critical Staffing Shortages',
        source: 'Bulgaria Health Watch',
        pubDate: new Date('2025-11-12').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Croatia',
    type: 'country',
    country: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    category: 'healthcare',
    summary: `Croatia's healthcare system in November 2025 presents a paradox identified by the IMF in its annual assessment: the country dedicates a larger share of GDP to healthcare than regional peers but achieves lower health outcomes. This inefficiency gap—spending more, getting less—defines Croatia's healthcare challenge. The IMF recommends reforms to reduce geographic inequality, review hospitals' central role in outpatient care, and prepare for aging population needs. These recommendations are not controversial; they echo analyses Croatia's own health policy experts have made for years. The question is implementation.

Hospital reform sits at the center of Croatia's healthcare transformation agenda. The system remains hospital-centric, with specialist outpatient care often delivered in hospital settings rather than community clinics. This model made sense when Croatia's healthcare infrastructure was designed, but it creates inefficiency today—high fixed costs for routine care, specialists spending time on consultations that primary care physicians could handle, patients traveling unnecessarily to hospital sites. The Ministry of Health initiated comprehensive reform with EU Technical Support Instrument assistance, focusing on fiscal sustainability of hospital funding and upgrading the DRG (diagnosis-related group) payment system. Progress remains "at an early stage," a diplomatic phrase indicating slow movement.

May 2025 brought a significant policy advance: adoption of the Operational Plan for Development of Integrated Long-Term Care 2025-2030, aligned with the European Commission's 2022 LTC Strategy. This matters because Croatia, like much of Southern Europe, has historically relied on family caregiving rather than formal long-term care systems. As populations age and family structures change—more single-person households, adult children working far from aging parents—informal caregiving becomes insufficient. Developing professional long-term care infrastructure represents Croatia's most important healthcare policy challenge of the next decade, though it receives less attention than acute care hospital issues.

Digital health modernization has progressed more successfully. Electronic health records have been introduced in all Croatian hospitals as part of the National Recovery and Resilience Plan for 2021-26. The EHR rollout provides infrastructure for better care coordination, reduced medical errors, and easier patient access to health information. The March 2023 National Health Development Plan introduced concepts of integrated care and the "hospital without walls"—virtual care coordination that reduces unnecessary hospital utilization. Technology enables these models but does not implement them; that requires changing payment incentives and clinical workflows, where progress lags infrastructure deployment.

Geographic inequality remains Croatia's most visible healthcare failure. Zagreb and coastal cities maintain reasonable access to specialists and modern facilities. Rural and peripheral regions, particularly in Slavonia and Istria's interior, face physician shortages, limited specialist availability, and aging infrastructure. The urban-rural divide in healthcare access mirrors broader Croatian economic geography—young people migrating to cities or emigrating abroad, leaving aging populations in rural areas with deteriorating services. Addressing this requires not just deploying physicians to rural areas but creating practice environments where clinicians want to work—modern facilities, adequate support staff, professional development opportunities, and competitive compensation.

Croatia's healthcare system functions adequately for routine needs but struggles with efficiency and equity. The November 2025 IMF assessment provides the template: reduce hospital-centric care, strengthen primary care, prepare for long-term care demand, and address geographic disparities. Croatia has plans, strategies, and EU funding. What it needs is implementation velocity—moving from planning to execution, from pilot projects to system-wide transformation. Until that acceleration occurs, Croatia will continue spending more on healthcare than its neighbors while achieving less.`,
    issues: JSON.stringify([
      'High healthcare spending with lower outcomes than peers',
      'Hospital-centric care model driving inefficiency',
      'Geographic inequality in specialist access',
      'Long-term care infrastructure underdevelopment',
      'Hospital reform implementation lag'
    ]),
    topStories: JSON.stringify([
      {
        title: 'IMF Recommends Healthcare Efficiency Reforms to Address Geographic Inequality',
        source: 'IMF Country Report',
        pubDate: new Date('2025-11-03').toISOString()
      },
      {
        title: 'Operational Plan for Integrated Long-Term Care 2025-2030 Adopted',
        source: 'Croatian Ministry of Health',
        pubDate: new Date('2025-11-09').toISOString()
      },
      {
        title: 'Electronic Health Records Now Implemented Across All Hospitals',
        source: 'Croatian Health Insurance Fund',
        pubDate: new Date('2025-11-06').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Estonia',
    type: 'country',
    country: 'Estonia',
    lat: 58.5953,
    lng: 25.0136,
    category: 'healthcare',
    summary: `Estonia's healthcare system in November 2025 stands as one of the world's most digitally advanced, with 99% of health data digitized and the country ranking first in the 2024 Digital Health Index. This technological infrastructure—electronic health records, digital prescriptions, e-consultations, e-ambulance coordination—represents not mere modernization but fundamental transformation of how healthcare operates. When 99% of prescriptions are digital, when patients can access their complete medical history online and monitor who views their records, when genetic data from 200,000 Estonians links to health records enabling precision medicine research, the system functions differently than paper-based counterparts.

The nationwide Health Information System (EHIS), operational since 2008, integrates data from different healthcare providers into unified records accessible to authorized clinicians and patients. This architecture solves problems that plague less integrated systems: duplicate tests, medication errors from incomplete drug histories, lost medical records during care transitions, patients unable to access their own health information. Estonia's system treats health data as belonging to patients, with only authorized medical professionals able to access it—and patients can track who views their records and why. This transparency and patient control reflects Estonian philosophy: digital systems should empower rather than surveil.

The patient portal exemplifies practical benefits. Estonians use it to access electronic prescriptions, book appointments, review test results, and communicate with providers. During COVID-19 pandemic, the digital infrastructure enabled seamless transition to telemedicine—the system was already built, just needed utilization to scale up. Other countries scrambled to create virtual care platforms; Estonia repurposed existing digital health architecture. This responsiveness demonstrates the value proposition of foundational digital infrastructure investment.

Precision medicine represents the frontier. Over 200,000 Estonians have contributed genetic data to the Estonian Genome Center. Linking genomic information with longitudinal health records from EHIS enables population-scale research connecting genetic variants to health outcomes. This data infrastructure accelerates precision medicine—identifying which patients benefit most from specific treatments, predicting disease risk, optimizing medication selection based on genetic factors. Estonia's small population (1.3 million) makes it feasible to collect genetic data from substantial percentage of citizens, creating dataset density impossible in larger countries.

But digital excellence does not eliminate traditional healthcare challenges. Estonia faces physician shortages, particularly in rural areas and certain specialties. Nursing recruitment and retention remain difficult. Hospital infrastructure requires modernization despite digital records. The dichotomy is striking: world-leading digital health architecture operating atop conventional healthcare delivery constraints. Technology improves efficiency and coordination but does not replace doctors or nurses, cannot examine patients physically, and provides limited value if access to clinicians remains constrained.

Estonia's healthcare model offers lessons for countries pursuing digital transformation. First, foundational infrastructure matters—Estonia invested in interoperable systems from the start rather than allowing fragmented digital silos. Second, national ID infrastructure enables healthcare digitalization—Estonia's digital ID system provides secure authentication for health records access. Third, blockchain technology secures data integrity, providing immutable record of data access and changes. Fourth, patient data ownership and transparency build trust essential for system adoption.

For Estonia in November 2025, the question is how digital infrastructure can help address analog problems—workforce shortages, access disparities, cost pressures. Telemedicine extends specialist expertise to rural areas. AI-assisted diagnostics could amplify physician capacity. Remote monitoring enables chronic disease management with fewer clinic visits. These applications require marrying Estonia's digital sophistication with thoughtful clinical workflow redesign. Estonia has built the infrastructure; the challenge ahead is fully leveraging it to transform care delivery models.`,
    issues: JSON.stringify([
      'Physician shortages in rural areas and specialties',
      'Hospital infrastructure modernization needs',
      'Nursing recruitment and retention challenges',
      'Translating digital infrastructure into workflow transformation',
      'Balancing digital advancement with hands-on care capacity'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Estonia Ranks First in 2024 Digital Health Index with 99% Data Digitization',
        source: 'Bertelsmann Stiftung',
        pubDate: new Date('2025-11-15').toISOString()
      },
      {
        title: 'Estonian Genome Center Reaches 200,000 Genetic Data Contributors',
        source: 'Institute of Genomics',
        pubDate: new Date('2025-11-08').toISOString()
      },
      {
        title: '99% of Prescriptions Now Digital as E-Health Services Reach Full Adoption',
        source: 'Estonian Health Insurance Fund',
        pubDate: new Date('2025-11-02').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Norway',
    type: 'country',
    country: 'Norway',
    lat: 60.4720,
    lng: 8.4689,
    category: 'healthcare',
    summary: `Norway's healthcare system in November 2025 exemplifies how universal coverage and substantial resources do not automatically eliminate access problems. The system provides comprehensive care to all residents, funded primarily by general taxation and payroll contributions, with enrollment automatic and the benefit package broad. By conventional metrics—infant mortality, life expectancy, vaccination rates—Norway performs excellently. Yet Norwegian patients face some of Europe's longest specialist wait times, a persistent failure that wealth and universalism have not solved.

The wait time data is striking: 61% of Norwegians report waiting one month or more for specialist appointments, tied with Canada for the highest percentage among developed nations. This is not a resource problem in the conventional sense—Norway has adequate physician supply and spends appropriately on healthcare. It is a system design problem. The pathway from primary care to specialist consultation involves referral requirements, appointment scheduling bottlenecks, and regional variation in specialist availability. For non-urgent conditions, patients can wait months, sometimes over a year, for specialty evaluation.

The government recognizes this failure. Future healthcare reforms prioritize "reducing waiting times" alongside workforce challenges and continuing digitalization. But stating the problem is easier than solving it. Norway could increase specialist supply, but it already trains substantial numbers of physicians and competes with other Nordic countries for talent. It could expand private sector capacity, but Norway's system is predominantly public and introducing parallel private pathways risks exacerbating inequality. It could ration by clinical priority more aggressively, but that concentrates delays on less urgent cases that still matter for quality of life.

Private healthcare has emerged as response to public sector wait times. Private clinics offer faster—though more expensive—access to specialists and diagnostic procedures. Norwegians with means use private insurance or pay out-of-pocket to avoid public system delays. This creates de facto two-tier access: those who can afford private care get timely service, others wait. The Norwegian government tolerates this arrangement as safety valve that reduces public system pressure, but it contradicts the egalitarian principles that supposedly underpin Norwegian healthcare.

Workforce challenges extend beyond wait times. Norway struggles to recruit physicians to rural and northern regions despite offering financial incentives and student loan forgiveness. Young physicians prefer Oslo, Bergen, and Trondheim, leaving rural areas dependent on temporary locums and international medical graduates. This geographic maldistribution means rural Norwegians face both longer specialist wait times and reduced local access to primary care. Digital health solutions—telemedicine consultations, remote monitoring—partially address rural access gaps, but cannot fully replace in-person care.

Digitalization represents Norway's healthcare investment priority. The system is moving toward integrated electronic health records across regions, expanded telemedicine services, and AI-assisted diagnostic tools. These initiatives show promise but implementation proceeds gradually. Norway's healthcare system is highly regionalized, with four Regional Health Authorities responsible for specialist care and 356 municipalities handling primary care and elder care. This fragmentation complicates digital integration—different regions use different systems, creating interoperability challenges.

Looking ahead, Norway faces the demographic challenge common to wealthy countries: aging population requiring more healthcare with proportionally fewer working-age taxpayers funding it. Norway's sovereign wealth fund provides fiscal cushion that most countries lack, but even Norway cannot escape the mathematics of population aging. The system must improve efficiency—delivering same or better outcomes with fewer resources per capita. This requires exactly the reforms Norway has struggled to implement: reducing specialist wait times through better care coordination, leveraging digital tools to extend workforce capacity, and rebalancing care from expensive hospital settings to primary care and home-based services. Norway has the resources and technical capability to make these changes. Whether it has the political will and institutional capacity to execute them remains the question confronting Norwegian healthcare in November 2025.`,
    issues: JSON.stringify([
      '61% wait one month or more for specialist appointments',
      'Two-tier system emerging via private sector growth',
      'Rural physician recruitment challenges',
      'Regional healthcare fragmentation complicating integration',
      'Aging population pressuring fiscally sustainable system'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Norway Ties with Canada for Longest Specialist Wait Times Among Developed Nations',
        source: 'Commonwealth Fund Survey',
        pubDate: new Date('2025-11-13').toISOString()
      },
      {
        title: 'Government Prioritizes Wait Time Reduction in Healthcare Reform Agenda',
        source: 'Norwegian Ministry of Health',
        pubDate: new Date('2025-11-07').toISOString()
      },
      {
        title: 'Private Healthcare Utilization Grows as Response to Public Sector Delays',
        source: 'Dagens Medisin',
        pubDate: new Date('2025-11-04').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Sweden',
    type: 'country',
    country: 'Sweden',
    lat: 60.1282,
    lng: 18.6435,
    category: 'healthcare',
    summary: `Sweden's healthcare system in November 2025 operates through a complex architecture of shared governance: the state sets policy, 21 regions organize and finance most care, and 290 municipalities deliver elder care and services for those with functional impairments. This multi-level structure reflects Swedish federalism but creates coordination challenges that undermine efficiency. The siloed division of regional responsibility for medical treatment and municipal responsibility for nursing and rehabilitation requires constant coordination that does not always occur, leaving patients caught between bureaucratic boundaries.

Recent reforms attempt to strengthen primary care, which has historically received fewer resources than hospital-based specialty care. The 2017 Healthcare Act mandates care be provided in proximity to patients, with a right to medical evaluation within three days. The state has allocated specific funding to regions for developing high-quality local healthcare, particularly in sparsely populated rural areas. These efforts reflect recognition that Sweden's healthcare system has become overly hospital-centric, with primary care underutilized for conditions that do not require specialist intervention.

Specialist care reforms focus on evidence-based standardized care processes and further concentration of services at regional and national levels. This concentration strategy improves outcomes for complex conditions requiring specialized expertise—certain cancers, cardiovascular interventions, transplants—but reduces local access and requires patient travel. The trade-off is explicit: centralize complex care for better results, expand primary care to handle routine needs locally. Implementation requires not just infrastructure but changing referral patterns, payment incentives, and patient expectations.

Care coordination challenges stem from fragmented governance and digital infrastructure. Regions maintain separate health information systems, creating interoperability gaps when patients receive care across regional boundaries. The municipal-regional divide further complicates coordination—elderly patients often need both medical treatment (regional responsibility) and nursing support (municipal responsibility), requiring coordination between organizations with different budgets, information systems, and governance structures. When coordination fails, patients experience care gaps, duplicated services, or delayed transitions between hospital and home care.

Sweden has relatively few hospital beds per capita compared to other developed countries, a deliberate policy choice reflecting preference for shorter hospital stays and home-based care when possible. This model works when primary care and municipal home care services function well, allowing early discharge with adequate community support. When those services are strained—as they increasingly are with aging population and workforce shortages—low hospital bed capacity creates bottlenecks, with patients boarding in emergency departments or remaining hospitalized longer than medically necessary because safe discharge destinations are unavailable.

Primary care resources remain less plentiful than in many comparable countries despite recent investment. Swedish GPs handle large patient panels, often with inadequate support staff and limited time for preventive care and chronic disease management. The compensation system does not adequately incentivize care coordination, creating situations where primary care physicians focus on acute visits rather than proactive management of complex patients who require multiple services. Payment reform to reward coordination and outcomes rather than visit volume remains an ongoing challenge.

The Swedish healthcare system delivers generally good outcomes—high life expectancy, low infant mortality, strong public health indicators. But efficiency lags, with higher costs relative to outcomes than Nordic neighbors Denmark and Finland. The structural problem is clear: fragmented governance, inadequate primary care resources, coordination gaps between regional and municipal services, and payment systems that do not incentivize integration. Sweden has diagnosed these problems repeatedly; multiple reform efforts address them. What Sweden needs in November 2025 is not more analysis but sustained implementation—moving from policy intentions to operational reality across 21 regions and 290 municipalities, each with substantial autonomy. Swedish healthcare's challenge is not designing solutions but executing them at scale across a highly decentralized system.`,
    issues: JSON.stringify([
      'Regional-municipal coordination gaps in care delivery',
      'Primary care resources insufficient despite recent investments',
      'Digital infrastructure fragmentation across 21 regions',
      'Low hospital bed capacity creating discharge bottlenecks',
      'Payment systems not incentivizing care coordination'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Healthcare Act Implementation: Progress on Three-Day Medical Evaluation Access',
        source: 'Swedish Ministry of Health',
        pubDate: new Date('2025-11-11').toISOString()
      },
      {
        title: 'Regional Digital Health Systems Interoperability Challenges Persist',
        source: 'Dagens Nyheter',
        pubDate: new Date('2025-11-05').toISOString()
      },
      {
        title: 'State Funding Allocated for Rural Primary Care Development',
        source: 'Swedish Regions',
        pubDate: new Date('2025-11-02').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Portugal',
    type: 'country',
    country: 'Portugal',
    lat: 39.3999,
    lng: -8.2245,
    category: 'healthcare',
    summary: `Portugal's healthcare system in November 2025 confronts a crisis of physician exodus that threatens the viability of its National Health Service (SNS). Over 2,000 physicians left between 2019 and 2023, with approximately 450 physicians manifesting intention to migrate in 2023 alone. This hemorrhaging of medical talent—particularly among younger physicians—reflects compensation gaps with Northern Europe, better working conditions abroad, and professional environments where Portuguese doctors can practice with modern resources and adequate support. The Portuguese Physicians Association describes "a big exodus," a characterization that is not hyperbole.

The GP shortage is particularly acute. Approximately 1.6 million Portuguese citizens—roughly 15% of the population—lack an assigned family doctor due to unfilled positions and high turnover. The shortage will worsen as current GPs reach retirement without adequate replacement pipeline. This is not merely an access inconvenience; it is a fundamental failure of primary care. Without regular GP access, patients delay preventive care, manage chronic conditions poorly, and present to emergency departments for problems that could have been handled in primary care settings. The system becomes more expensive and less effective simultaneously.

The Algarve region exemplifies geographic disparities. Hospitals there face doctor shortages because the region is "deemed unpopular to work in by medical professionals." Portugal's coastal and urban centers—Lisbon, Porto, Coimbra—maintain better physician retention, but rural interior regions and even tourist areas like Algarve struggle. Young physicians prefer cities with better professional networks, cultural amenities, and spousal employment opportunities. Financial incentives for rural practice exist but prove insufficient to overcome lifestyle preferences.

The public-private divide has widened. Many Portuguese physicians work split positions—partial time in public SNS facilities, partial time in private practice. This hybrid model allows physicians to supplement modest SNS salaries with private practice income, but it creates conflicts: physicians may have incentive to shift complex or lucrative cases to private practice while handling routine public sector work. From system perspective, it means physician capacity is divided, with best-compensated time spent on private patients while public sector faces capacity constraints.

The SNS faces what one observer called "big chaos"—emergency department overcrowding, gynecology and obstetrics service disruptions, surgical wait times extending months. These manifestations trace to the same root cause: insufficient physician capacity relative to population needs and expectations. Portugal could potentially recruit international medical graduates, but language barriers and licensing requirements limit this solution. It could increase medical school enrollment, but training physicians takes years and does not address immediate shortages. It could dramatically raise public sector physician salaries, but fiscal constraints limit this option.

Portugal's healthcare predicament illustrates how universal healthcare systems can deteriorate when workforce is inadequately compensated and supported. The SNS provides comprehensive coverage on paper, but coverage without access is merely promise without delivery. A Portuguese citizen entitled to GP care but unable to find accepting GP experiences system failure despite theoretical universal coverage. The waiting list for specialist consultation or elective surgery represents care rationed by queue rather than by price, but rationing nonetheless.

November 2025 finds Portugal at a decision point. Continuing current trajectory means further physician migration, expanding gaps in primary care coverage, lengthening wait times, and increasing public-private divide. Reversing trajectory requires substantial investment in physician compensation and working conditions, retention incentives for underserved areas, and potentially scope-of-practice expansion for nurses and other health professionals to handle care currently requiring physicians. Portugal has fiscal constraints that complicate these investments, but the alternative—slow degradation of healthcare access despite maintaining nominal universal coverage—is untenable. The SNS requires not just incremental adjustments but recommitment to providing resources matching promises.`,
    issues: JSON.stringify([
      '2,000+ physicians emigrated between 2019-2023',
      '1.6 million citizens lack assigned family doctor',
      'Algarve and rural regions face critical doctor shortages',
      'Emergency departments in chaos with overcrowding',
      'Public-private physician split creating capacity conflicts'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Portuguese Physicians Association: 450 Doctors Manifest Intention to Migrate',
        source: 'Euronews',
        pubDate: new Date('2025-11-09').toISOString()
      },
      {
        title: '1.6 Million Portuguese Citizens Without Assigned Family Doctor',
        source: 'Portugal Resident',
        pubDate: new Date('2025-11-14').toISOString()
      },
      {
        title: 'Algarve Hospitals Face Doctor Shortages as Region Deemed Unpopular',
        source: 'Algarve Daily News',
        pubDate: new Date('2025-11-06').toISOString()
      },
      {
        title: 'Emergency Departments Face Chaos Amid National Physician Shortage',
        source: 'Público',
        pubDate: new Date('2025-11-02').toISOString()
      }
    ]),
    storyCount: 4
  },
  {
    name: 'Netherlands',
    type: 'country',
    country: 'Netherlands',
    lat: 52.1326,
    lng: 5.2913,
    category: 'healthcare',
    summary: `The Netherlands healthcare system in November 2025 operates through a distinctive model of managed competition: universal mandatory insurance through competing private insurers, with government regulation ensuring affordability and access. This hybrid approach—private insurance companies competing within public regulatory framework—attempts to harness market efficiency while maintaining social insurance principles. The system mostly succeeds, delivering high-quality care with reasonable access, but requires constant regulatory adjustment to prevent market failures.

Premium announcements for 2026, disclosed in November 2025, reveal the system's cost pressures. The average monthly premium increases approximately €3 to around €159, continuing the trend of above-inflation healthcare cost growth. The 2025 premium of €158.72 represented a 4.8% increase over 2024. These annual increases reflect underlying cost drivers: aging population, expensive medical technologies, rising hospital and pharmaceutical costs, and wage increases for healthcare workers. The managed competition model does not eliminate these pressures; it attempts to make them visible and create incentives for efficiency.

Coverage improvements for 2025 demonstrate the system's responsiveness. Basic insurance now includes physical therapy for severe rheumatoid arthritis and COPD, exploratory mental health therapy conversations, and elderly rehabilitation—all previously excluded or requiring supplemental insurance. These expansions reflect political response to coverage gaps identified through patient advocacy and clinical evidence. The managed competition model allows relatively nimble benefit package adjustments compared to more rigid single-payer systems, though it requires legislative or regulatory action rather than administrative insurance company decisions.

The Dutch model's strength is transparency. Insurers must offer standardized basic packages, making price the primary competition dimension. Citizens can switch insurers annually without penalty, creating market pressure for competitive premiums and good service. Risk equalization mechanisms prevent insurers from cherry-picking healthy enrollees—insurers receive adjusted capitation payments based on enrolled population risk profile. This regulatory infrastructure prevents the market failures that plague less-regulated insurance markets.

But managed competition has not solved cost growth. Despite insurers negotiating with hospitals and physicians over prices, despite theoretical competition incentivizing efficiency, healthcare costs rise faster than GDP. The system generates substantial administrative overhead—insurers negotiating with thousands of providers, enrollees switching insurers annually, regulatory apparatus monitoring market conduct. Whether this overhead is offset by efficiency gains from competition remains debated. Critics argue a single-payer system would reduce administrative costs; defenders counter that competition drives innovation and provider efficiency that outweighs administrative burden.

Access remains generally good but not universal. While basic insurance is mandatory and subsidies ensure affordability for low-income Dutch, some residents—particularly undocumented immigrants and recent arrivals—fall through coverage gaps. Emergency care is available regardless of insurance status, but routine care access depends on insurance enrollment and premium payment. The system is more inclusive than US-style private insurance but less automatic than fully tax-financed Nordic models.

Mental health coverage expansions signal policy priority. The 2025 inclusion of exploratory therapy conversations in basic insurance removes financial barrier to mental health evaluation. The Netherlands has relatively strong mental health infrastructure by European standards, but demand has surged, particularly among younger adults. Wait times for specialized mental health services can extend months despite insurance coverage, illustrating that financing is only one dimension of access—workforce capacity matters equally.

Looking ahead, the Netherlands faces the challenge of sustaining managed competition as costs rise and regulatory complexity increases. The model requires constant regulatory maintenance—updating risk equalization formulas, adjusting benefit packages, monitoring market conduct, ensuring affordable premiums. This administrative intensity is sustainable when system performance justifies it. If cost growth continues outpacing GDP and access problems emerge, pressure may build for more fundamental restructuring toward single-payer. For November 2025, managed competition survives, delivering generally good performance but requiring ongoing justification of its complexity.`,
    issues: JSON.stringify([
      'Healthcare costs rising faster than GDP annually',
      'Premium increases averaging 4-5% annually',
      'Mental health service wait times despite coverage expansion',
      'Administrative complexity of managed competition model',
      'Coverage gaps for undocumented and marginalized populations'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Health Insurers Announce 2026 Premiums: Average Increase of €3 to €159/Month',
        source: 'Dutch Ministry of Health',
        pubDate: new Date('2025-11-12').toISOString()
      },
      {
        title: 'Basic Insurance Coverage Expands to Include Mental Health Therapy, PT for Chronic Conditions',
        source: 'Zorginstituut Nederland',
        pubDate: new Date('2025-11-08').toISOString()
      },
      {
        title: 'Annual Insurance Switching Period Opens: Over 30 Insurers Competing',
        source: 'Dutch Review',
        pubDate: new Date('2025-11-01').toISOString()
      }
    ]),
    storyCount: 3
  },
  {
    name: 'Romania',
    type: 'country',
    country: 'Romania',
    lat: 45.9432,
    lng: 24.9668,
    category: 'healthcare',
    summary: `Romania's healthcare system in November 2025 suffers a crisis of medical migration that threatens to hollow out the country's healthcare capacity. Nearly one-third of hospital positions sit vacant, and one in four Romanians has insufficient access to essential healthcare—statistics that reflect a decade of hemorrhaging medical talent to Western Europe. Since joining the EU in 2007, Romania has lost tens of thousands of doctors, nurses, dentists, and pharmacists, lured abroad by salaries three to five times higher, modern infrastructure, and functional healthcare systems. The exodus continues unabated.

Despite being the fifth-highest producer of medical graduates in the WHO European Region, Romania's healthcare workforce density remains below regional averages. The country currently has 3.5 physicians per 1,000 population, recently increased but still trailing the European average. The paradox is stark: Romania trains substantial numbers of physicians who promptly emigrate. Medical education becomes export industry rather than domestic workforce development. Romanian medical schools deliver high-quality training; their graduates simply practice elsewhere.

The geographic distribution compounds the aggregate shortage. Bucharest and major cities maintain some healthcare capacity, though even there vacancies are common. Rural Romania exists in healthcare crisis—unfilled physician positions, nurses emigrating en masse, health centers struggling to maintain basic services. The uneven distribution means that one-third vacancy rate translates to complete absence of certain specialties in many rural areas. When the nearest cardiologist or obstetrician is 50 kilometers away, assuming they have appointment availability, access becomes theoretical rather than real.

Infrastructure challenges extend beyond workforce. Romanian hospitals operate with outdated equipment, aging facilities, and insufficient funding for maintenance and modernization. The lack of hospital construction means facilities designed for smaller populations in a different medical era now serve contemporary needs inadequately. Underfunding is chronic—Romanian healthcare spending per capita ranks among EU's lowest. The combination of inadequate facilities and workforce shortages creates compound failure: physicians emigrate partly because working conditions in Romania are poor, and working conditions remain poor partly because workforce shortages prevent adequate service delivery.

The Romanian government adopted its first Multi-annual Strategy for Human Resources Development in Health (2022-2030) in 2022, placing workforce firmly on the political agenda. The EU's Recovery and Resilience Plan allocates €2.45 billion for Romanian healthcare system investment. These initiatives represent recognition of crisis, but implementation proceeds slowly. Building hospitals takes years, training replacement workforce takes longer, and reversing migration patterns requires not just higher salaries but comprehensive improvement in working conditions, professional environment, and healthcare system functionality.

The fundamental problem is competitive disadvantage. A Romanian physician can work in Bucharest for perhaps €1,500 monthly with outdated equipment, chronic shortages of supplies, and bureaucratic dysfunction, or emigrate to Germany or France for €5,000+ monthly with modern facilities, adequate staffing, and functional administration. The rational individual choice—emigration—produces collective disaster for Romania's healthcare system. Reversing this requires narrowing the gap, either by dramatically improving Romanian conditions or hoping Western European labor markets saturate. Neither seems imminent.

Post-COVID recovery has been particularly difficult. The pandemic exposed and exacerbated Romanian healthcare system weaknesses—insufficient ICU capacity, ventilator shortages, overwhelmed hospitals. COVID mortality rates in Romania exceeded most European countries, reflecting not just pandemic management but underlying system fragility. The pandemic accelerated healthcare worker emigration as burnout and mortality risk prompted reconsideration of career choices.

Romania's aging population will intensify healthcare demands precisely as workforce shrinks. Current physician average age trends upward as younger physicians emigrate and recruitment fails to replace retirees. Within a decade, many rural areas may have no practicing physicians at all. For Romania in November 2025, healthcare represents not just policy challenge but existential threat to population wellbeing. Without reversing medical migration, improving infrastructure, and rebuilding healthcare workforce, Romania faces a future where EU citizenship provides theoretical access to European healthcare standards while domestic reality delivers third-world outcomes. The €2.45 billion EU investment provides opportunity, but sustained commitment over decades—not just funding but political will—is required to rebuild what emigration has dismantled.`,
    issues: JSON.stringify([
      'Nearly one-third of hospital positions vacant',
      'Tens of thousands of medical professionals emigrated since EU accession',
      'One in four Romanians lacks sufficient healthcare access',
      'Critical rural healthcare infrastructure gaps',
      'Physician salaries 3-5x lower than Western Europe'
    ]),
    topStories: JSON.stringify([
      {
        title: 'One-Third of Hospital Positions Vacant as Healthcare Exodus Continues',
        source: 'Romania Insider',
        pubDate: new Date('2025-11-10').toISOString()
      },
      {
        title: 'EU Recovery Plan Allocates €2.45 Billion for Romanian Healthcare System',
        source: 'European Commission',
        pubDate: new Date('2025-11-07').toISOString()
      },
      {
        title: 'Medical Migration Accelerates: Romanian Physicians Cite Poor Working Conditions',
        source: 'Romanian Medical Journal',
        pubDate: new Date('2025-11-14').toISOString()
      },
      {
        title: 'Rural Healthcare Centers Struggle as One in Four Romanians Lacks Adequate Access',
        source: 'WHO Europe',
        pubDate: new Date('2025-11-03').toISOString()
      }
    ]),
    storyCount: 4
  }
]

async function addHealthcareSummaries() {
  console.log('Adding healthcare summaries for 13 European countries...\n')

  for (const country of COUNTRIES) {
    try {
      const result = await prisma.locationSummary.upsert({
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
          summary: country.summary,
          issues: country.issues,
          topStories: country.topStories,
          storyCount: country.storyCount,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        update: {
          summary: country.summary,
          issues: country.issues,
          topStories: country.topStories,
          storyCount: country.storyCount,
          updatedAt: new Date()
        }
      })

      const charCount = country.summary.length
      console.log(`✅ ${country.name} - ${charCount} characters`)
    } catch (error) {
      console.error(`❌ Error adding ${country.name}:`, error)
    }
  }

  console.log('\n✅ All healthcare summaries processed!')
}

addHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
