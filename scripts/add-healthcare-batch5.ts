import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const healthcareSummaries = [
  {
    name: 'Serbia',
    lat: 44.0165,
    lng: 21.0059,
    summary: `In November 2025, Serbia's healthcare system stands at a critical juncture—one that healthcare systems researchers would recognize as a classic middle-income trap. The country has achieved near-universal coverage through its National Health Insurance Fund, reaching 98% of the population. Life expectancy has climbed to 76 years, a testament to post-conflict recovery and health system investments. Yet Serbia remains approximately five years behind EU averages in longevity, and the gap reveals structural weaknesses that insurance coverage alone cannot fix.

The system architecture appears sound on paper: mandatory payroll contributions of 10.3% fund a single-payer model that theoretically guarantees access to primary, secondary, and tertiary care. Since 2012, reforms have focused on strengthening primary care as the system's foundation—encouraging patient registration with chosen physicians, implementing integrated health information systems, and modernizing infrastructure. These are the right moves. The evidence consistently shows that strong primary care systems improve population health outcomes while controlling costs.

But here's the problem: out-of-pocket payments still account for over 40% of total health expenditure. When patients must pay nearly half of healthcare costs directly, you don't have universal coverage in any meaningful sense. What you have is financial catastrophe waiting to happen for families facing serious illness. The data on self-reported unmet medical needs confirms this—significant portions of the population delay or forgo necessary care due to cost barriers.

The COVID-19 pandemic exposed additional fault lines. Serbia experienced some of the highest excess mortality rates in Europe during 2020-2021, revealing capacity constraints in hospital systems and intensive care units. While life expectancy is now recovering, the pandemic's impact lingers in both mortality statistics and in the psychological toll on an already strained health workforce.

Workforce retention remains perhaps the most pressing challenge. Like many Eastern European nations, Serbia faces brain drain as doctors and nurses seek better compensation in Western Europe. The Ministry of Health has attempted to address this through salary increases and improved working conditions, but the wage differential with EU countries remains substantial. Without competitive compensation, it's difficult to maintain adequate staffing levels, particularly in rural areas and specialized fields.

Infrastructure improvements since 2019 have been noteworthy—new equipment purchases, hospital renovations, and the rollout of electronic health records across primary care facilities. These investments matter. But technology alone doesn't solve the access inequities that persist across different regions and socioeconomic groups. Urban-rural disparities in healthcare quality remain significant, with specialist services concentrated in Belgrade and Novi Sad.

The path forward requires confronting the fundamental question: Will Serbia continue trying to maintain a European-style healthcare system on a much smaller budget, or will it make the difficult political choices necessary to adequately fund its commitments? The current model—universal coverage in principle, high out-of-pocket costs in practice—represents the worst of both worlds. Citizens lack both the security of true social insurance and the efficiency of properly functioning markets.

What Serbia needs is not revolutionary change but rather the political will to fully fund the system it has designed. That means either increasing payroll contributions, finding alternative revenue sources, or accepting a more limited benefits package. The technical solutions are well-understood. The challenge is political.`,
    issues: [
      "High out-of-pocket costs (40% of health spending)",
      "Brain drain of medical professionals to Western Europe",
      "Urban-rural healthcare access disparities",
      "Post-pandemic capacity constraints",
      "Life expectancy 5 years below EU average"
    ]
  },
  {
    name: 'Switzerland',
    lat: 46.8182,
    lng: 8.2275,
    summary: `Swiss health insurance premiums will rise 6% in 2025, bringing the average adult premium to CHF 449.20 per month—an increase of CHF 25.30. This continues a relentless upward trajectory that has made Switzerland's healthcare system simultaneously one of the world's best and most expensive. Total healthcare spending is projected to reach CHF 103 billion in 2025, approximately 12% of GDP, with further increases to CHF 106 billion expected by 2026. These are not abstract numbers. For Swiss families, healthcare costs represent a larger share of household budgets than housing in many cantons.

Switzerland's healthcare model is unique among developed nations—mandatory private insurance with community-rated premiums, competing insurers, and significant consumer choice. The system delivers exceptional outcomes: life expectancy of 84 years (among the world's highest), minimal wait times, comprehensive access to cutting-edge treatments, and patient satisfaction that ranks near the top of international surveys. If you want your hip replacement next week rather than next year, Switzerland delivers. If you need access to the latest cancer immunotherapy, you'll get it. The clinical quality is extraordinary.

But the cost trajectory is unsustainable. The 6% premium increase for 2025 exceeds wage growth and inflation, meaning healthcare consumes an ever-larger share of household income. For young adults, premiums will reach CHF 314.10 monthly; even children's coverage will cost nearly CHF 118. These premiums represent only the baseline—deductibles and co-payments add thousands more francs in annual out-of-pocket costs for families with significant health needs.

What's driving costs upward? The usual suspects: demographic aging (Switzerland's population over 65 continues growing), new medical technologies and pharmaceuticals (particularly biologics and cancer treatments), and utilization increases. But Switzerland also has system-specific factors. The shift from inpatient to outpatient care—generally a cost-saving measure—paradoxically increases premiums because outpatient services are funded entirely through mandatory insurance, whereas inpatient care has cantonal subsidies.

The fragmented insurance market creates administrative complexity. Switzerland has dozens of competing insurers, each maintaining separate administrative overhead, billing systems, and provider networks. While competition theoretically drives efficiency, the reality is that insurers compete primarily on premium pricing rather than quality improvement or care coordination. The opportunities for genuine system-level innovation—integrated care models, prevention programs, population health management—remain largely untapped.

Switzerland also lacks the hard budget constraints that control costs in single-payer systems. Unlike the UK's NHS or Canada's provincial systems, which face explicit funding limits and must make trade-offs, Switzerland's system has no global budget cap. Providers order what they believe patients need; insurers pay; premiums rise to cover costs. This fee-for-service dynamic, while supporting clinical autonomy, offers limited incentives for efficiency or value-based care.

The November 30 cancellation deadline creates an annual ritual where Swiss residents scramble to compare insurance offers and potentially switch carriers. This consumerist approach places the burden of cost control on individual households rather than on system-level mechanisms. It's a fundamentally different philosophy than other European nations employ.

Looking ahead, Switzerland faces a choice. It can maintain its current model and accept that healthcare costs will continue consuming a growing share of GDP—a politically viable path given Switzerland's wealth. Or it can contemplate more fundamental reforms: global budgets, stronger price controls on pharmaceuticals and procedures, or even the kind of public insurance option that other nations employ. The technical capacity exists. What's lacking is political consensus that the current trajectory is untenable.

For now, Swiss voters appear willing to pay the premium for premium care. But generational change may shift this calculus. Younger Swiss citizens, facing higher lifetime healthcare costs and lower relative wages than their parents, may demand different trade-offs. The 2025 premium increase is just another data point in an ongoing experiment—how much will a wealthy democracy pay for healthcare before demanding systemic change?`,
    issues: [
      "Premium increases outpacing wage growth (6% in 2025)",
      "Healthcare costs reaching 12% of GDP",
      "Administrative complexity from fragmented insurance market",
      "Lack of system-level cost controls",
      "Growing burden on younger generations"
    ]
  },
  {
    name: 'Slovakia',
    lat: 48.6690,
    lng: 19.6990,
    summary: `In late 2024, over 2,700 hospital doctors in Slovakia—more than half of the country's 6,000 hospital physicians—prepared mass resignations unless the government met their demands for adequate wages and healthcare funding. By November 2025, Slovakia's healthcare system teeters on the edge of collapse, a case study in what happens when political short-termism collides with health workforce economics.

The immediate crisis stems from broken promises. In 2022, the government signed a memorandum committing to 9% annual salary increases for doctors. When budget time arrived, Health Minister Zuzana Dolinková resigned in protest after the government proposed just 6.4% increases alongside €260 million in healthcare cuts. Her replacement, Kamil Šaško—an economist rather than a physician—became Slovakia's 21st health minister in recent history, a turnover rate that itself signals system dysfunction. You cannot build coherent long-term health policy when leadership changes constantly and political will evaporates with each budget cycle.

Slovakia's doctors aren't being unreasonable. Their exodus tells you everything about the underlying economics. Approximately 2,400 Slovak-trained physicians work in the Czech Republic, with another 1,200 in Germany and 350 in Austria. These aren't random migrations—they're rational responses to wage differentials that often exceed 200-300%. When a doctor can earn two or three times more across the border while working fewer hours under better conditions, the surprising thing isn't that so many leave—it's that any stay.

This brain drain creates a vicious cycle. As experienced physicians depart, those remaining face heavier workloads, longer shifts, and increased burnout. Working conditions deteriorate, prompting more departures. Rural areas and smaller hospitals suffer most acutely—specialists concentrate in Bratislava while regional facilities struggle to maintain adequate staffing for basic services. Emergency departments operate below safe staffing levels. Surgical wait times lengthen. The entire system degrades.

Slovakia's healthcare model resembles other post-communist European systems: mandatory insurance, public hospitals, and a mix of public and private providers. A hospital network reform implemented in January 2024 established five tiers of hospitals based on specialization and scope, attempting to rationalize care delivery and reduce duplication. On paper, this is sensible health system planning. In practice, reforms fail when you cannot staff the facilities you've designed.

The fundamental problem is political economy, not technical healthcare policy. Slovakia's government faces competing fiscal pressures—debt service, pension obligations, EU funding requirements. Healthcare competes with education, infrastructure, and defense for limited budget resources. When the government must choose between meeting wage commitments to doctors or satisfying bond markets and EU fiscal rules, doctors lose.

But here's what politicians often miss: healthcare workforce investments aren't discretionary spending—they're essential infrastructure. Lose your doctors, and you cannot deliver care regardless of how much equipment you buy or how many hospitals you build. The production function for healthcare is fundamentally human. Physicians require a decade of training; you cannot quickly replace them once they've departed.

Slovakia's crisis also reveals the limitations of EU labor mobility. Free movement of workers benefits individuals but creates challenges for sending countries. Western European nations effectively import skilled medical professionals trained at Eastern European expense, creating transfer payments from poorer to richer countries. Slovakia invests in medical education; Germany captures the returns.

The immediate outlook is grim. Without significant wage increases and renewed healthcare funding commitments, the mass resignations will proceed. Emergency care will be maintained, but elective procedures will be cancelled. Patients requiring specialized treatment will face impossible choices—wait months for care in Slovakia or pay for treatment abroad. Those without resources will simply suffer.

Longer-term, Slovakia faces a choice between three paths: substantially increase healthcare spending to competitive levels, accept accelerated brain drain and system deterioration, or fundamentally redesign its healthcare model around reduced capacity. None of these options is politically attractive, which is precisely why the crisis has reached this point.

What Slovakia needs is what it's least likely to get: sustained political commitment to health workforce investment over multiple budget cycles, insulated from short-term fiscal pressures. That requires either exceptional political leadership or a crisis so severe that it forces change. Slovakia is rapidly approaching the latter.`,
    issues: [
      "Mass physician resignations (2,700+ doctors)",
      "Severe brain drain to Western Europe",
      "Broken wage commitments and budget cuts",
      "Chronic understaffing and deteriorating conditions",
      "Political instability (21st health minister)"
    ]
  }
]

async function addHealthcareSummaries() {
  console.log('Adding healthcare category summaries (Batch 5 - Part 1/4)...\n')

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

  console.log('\n✅ Part 1 complete! Countries: Serbia, Switzerland, Slovakia')
}

addHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
