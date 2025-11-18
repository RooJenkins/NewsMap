import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const healthcareSummaries = [
  {
    name: 'Lithuania',
    lat: 55.1694,
    lng: 23.8813,
    summary: `Lithuania has emerged as one of the Baltic states' digital health leaders, with its Electronic Health Services and Cooperation Infrastructure Information System (ESPBI IS) now containing 357 million ICD-10 coded diagnoses from 126 million outpatient visits covering 3.7 million unique patients. By November 2025, the system has issued 25 permits for health data reuse under its 2025 Health Data Reuse law—a framework that positions Lithuania ahead of many larger European nations in health data governance.

This digital infrastructure isn't merely impressive on technical grounds—it represents a fundamentally different approach to healthcare delivery. The ESPBI IS integrates inpatient and outpatient visits, referrals, diagnostic reports, drug prescriptions, births, vaccinations, and preventive services into a single accessible platform. Patients can access their complete health records through a web portal and mobile application. Clinicians receive clinical decision support tools. The system enables e-prescriptions, reducing medication errors and pharmacy wait times. Administrative burden decreases as data flows seamlessly rather than requiring manual documentation.

The October 2019 architectural redesign replaced Lithuania's previous e-health framework with a modular system that includes specialized subsystems for medical imaging, pregnant women and newborns, preventive services, auditing, and analysis. This isn't just digitization of existing paper processes—it's genuine system redesign around digital capabilities. Telemedicine consultations have grown rapidly, particularly in rural areas where specialist access previously required hours of travel.

For a country of 2.8 million people, these investments represent strategic thinking about competitive advantage. Lithuania cannot match Western European healthcare budgets in absolute terms, but it can deploy technology to improve efficiency, attract health tech investment, and retain clinical talent through better working conditions. Digital infrastructure also creates secondary benefits—health researchers can access de-identified data for epidemiological studies, pharmaceutical companies can conduct real-world evidence studies, and public health officials can track disease patterns in near real-time.

However, digital infrastructure alone cannot solve Lithuania's fundamental healthcare challenges. The system still faces significant workforce constraints, with many physicians and nurses emigrating to Western Europe for higher salaries. While e-health tools improve clinician efficiency, they cannot fully substitute for adequate staffing levels. Rural areas struggle to maintain basic services despite telemedicine capabilities—you still need a local clinician available for consultations, even if they can connect with specialists remotely.

Financing remains a challenge. Lithuania's healthcare spending as a percentage of GDP lags behind Western European averages. The public system provides universal coverage, but out-of-pocket payments for certain services create access barriers for lower-income populations. The tension between maintaining comprehensive digital infrastructure and funding adequate clinical services persists.

The Health Data Reuse framework enacted in 2025 represents forward-thinking policy, but implementation challenges remain. Data privacy protections must balance with research access. The 25 permits issued so far suggest careful governance, but the real test comes as the system scales. Lithuania must navigate the same tensions other nations face—enabling innovation while protecting patient privacy, promoting data sharing while preventing misuse.

Looking forward, Lithuania's digital health strategy positions it well for emerging healthcare trends. As precision medicine, AI-assisted diagnosis, and population health management become standard practice, nations with mature health data infrastructure will have significant advantages. Lithuania has built that foundation.

The question is whether the country can leverage its digital capabilities to address its workforce and financing challenges. Can better data analytics help optimize resource allocation? Can telemedicine partially offset emigration of specialists? Can health tech sector growth create economic value that funds better clinical compensation? These are the questions Lithuania's health system must answer in the coming years.

For now, Lithuania demonstrates that small nations can punch above their weight in healthcare innovation through strategic technology investments. The ESPBI IS is genuinely impressive—not just for the Baltic states, but by European standards. The challenge ahead is translating digital excellence into sustained improvements in population health outcomes and healthcare system sustainability.`,
    issues: [
      "Workforce emigration to Western Europe",
      "Healthcare spending below EU averages",
      "Out-of-pocket payment barriers for low-income groups",
      "Rural healthcare service gaps despite telemedicine",
      "Data privacy and research access balance"
    ]
  },
  {
    name: 'Latvia',
    lat: 56.8796,
    lng: 24.6032,
    summary: `Latvia's healthcare system is heading toward a crisis that healthcare workforce economists would recognize as entirely predictable—yet politically, it appears unstoppable. By November 2025, the country faces a projected shortage of 2,400 medical workers by 2030, with over 8,000 current healthcare employees aged 60-64 while only 7,000 workers are under age 29. The demographic math is brutal: a mass retirement wave approaches while young professionals flee to Western Europe.

The healthcare union LVSADA has demanded a 13.5% salary increase effective January 2026, plus €120 monthly raises for non-medical staff—requiring €133 million in additional budget allocation. The government's response? The 2025 budget provides just €34.5 million for healthcare, primarily directed toward maternal and child health services. No salary increases are planned for 2025 or 2026, even as healthcare worker competitiveness has fallen back to 2020 levels. This is not health policy; it's fiscal austerity dressed up as budgeting.

When Minister of Health Hosams Abu Meri faces a potential vote of no confidence, it reflects not his personal failures but rather the impossible position he occupies. He cannot simultaneously satisfy healthcare workers' wage demands and the Finance Ministry's budget constraints. Something must give—and historically, in these standoffs, it's the health workers who leave.

The brain drain numbers tell the story: Latvian doctors and nurses are seeking employment in Germany, the UK, and Scandinavia, where salaries often triple what they earn domestically. For a young physician completing training in Riga, the economic calculus is stark. Stay in Latvia, work in overloaded conditions for €30,000-40,000 annually, or move to Germany and earn €80,000-100,000 with better hours and support staff. This isn't a difficult decision.

Regional hospitals bear the brunt. The Latgale region, already Latvia's poorest and least developed, struggles to maintain adequate medical staffing. When specialists leave, services consolidate in Riga, requiring rural patients to travel hours for care that should be locally available. This creates a vicious cycle: reduced services make regions less attractive to both medical professionals and potential residents, accelerating economic decline.

Latvia's healthcare financing model follows the standard European social insurance pattern—mandatory contributions fund a universal system. But "universal" coverage means little when facilities cannot staff services. Wait times lengthen, quality deteriorates, and those with resources increasingly seek private care or medical tourism. The system stratifies by ability to pay, even while maintaining the fiction of universal access.

The 2030 projection of a 2,400-worker shortage probably understates the problem. These models typically assume steady-state emigration rates, but policy failures create tipping points. When working conditions deteriorate past a threshold, departures accelerate. Junior doctors see senior colleagues leaving and conclude there's no future in staying. Nurses burn out from chronic understaffing. The system enters free-fall.

What Latvia needs is obvious: salary competitiveness with Western Europe, or at least meaningful movement in that direction. Investments in working conditions—adequate support staff, reasonable hours, modern equipment. Retention incentives that make staying financially viable. These are not mysteries. Healthcare workforce economics are well-understood.

But here's the political economy problem: Latvia's economy cannot easily afford Western European healthcare wages. The country's per-capita GDP is roughly one-third of Germany's. Matching German medical salaries would require dedicating an unsustainable share of national budget to healthcare compensation. Latvia faces a fundamental competitiveness challenge—it competes in a unified European labor market while operating on a developing-country budget.

The EU's free movement of labor is beneficial in aggregate but creates winners and losers. Western European health systems benefit from importing trained professionals they didn't pay to educate. Latvia invests in medical training, then loses the workforce. This represents a transfer from poorer to richer regions—exactly the opposite of the EU's cohesion objectives.

Potential solutions exist, though none is politically simple. The EU could provide specific funding for healthcare workforce retention in sending countries. Latvia could implement service obligations—medical graduates work domestically for several years as condition of subsidized education. Salaries could rise even if below Western levels, narrowing the gap. Telemedicine might partially offset specialist shortages.

But these require sustained political commitment and creative policymaking. Latvia's 2025 budget suggests the government is choosing fiscal restraint over health system sustainability. That's a gamble. Healthcare systems degrade slowly until suddenly they don't. When the 60-64 age cohort retires en masse without replacement, Latvia will face a genuine crisis—emergency departments that cannot maintain 24-hour coverage, surgical services that must close, specialties that simply disappear from regional hospitals.

The question for 2026 is whether the union's demands and threatened no-confidence vote create enough political pressure to shift priorities. Or whether Latvia will continue down the current path until crisis forces change. Either way, the country's healthcare workforce challenge isn't going away. It's only getting worse.`,
    issues: [
      "Projected 2,400 medical worker shortage by 2030",
      "Aging workforce (8,000 workers aged 60-64)",
      "Massive brain drain to Western Europe",
      "Government refusing wage increases despite union demands",
      "Collapsing regional healthcare in areas like Latgale"
    ]
  }
]

async function addHealthcareSummaries() {
  console.log('Adding healthcare category summaries (Batch 5 - Part 2/4)...\n')

  for (const item of healthcareSummaries) {
    console.log(`Processing ${item.name}...`)

    try {
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: item.name,
            type: 'country',
            category: 'healthcare'
          }
        },
        create: {
          name: item.name,
          type: 'country',
          country: item.name,
          lat: item.lat,
          lng: item.lng,
          category: 'healthcare',
          summary: item.summary,
          issues: JSON.stringify(item.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        update: {
          summary: item.summary,
          issues: JSON.stringify(item.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${item.name}: ${result.summary.length} characters`)
    } catch (error) {
      console.error(`❌ Error adding ${item.name}:`, error)
    }
  }

  console.log('\n✅ Part 2 complete! Countries: Lithuania, Latvia')
}

addHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
