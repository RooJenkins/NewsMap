import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const healthcareSummaries = [
  {
    name: 'Indonesia',
    lat: -0.7893,
    lng: 113.9213,
    summary: `Indonesia's Jaminan Kesehatan Nasional (JKN) program has achieved something remarkable: coverage of over 260 million people by December 2023, making it the world's largest single-payer health insurance system. This represents over 95% of Indonesia's population—an extraordinary accomplishment for a middle-income nation of 275 million people spread across 17,000 islands. By November 2025, JKN has minimized out-of-pocket health expenses for most Indonesians and established a framework for universal health coverage that developing nations worldwide study as a potential model.

But aggregate coverage statistics obscure profound inequities. While 95% coverage sounds comprehensive, the reality on the ground varies dramatically between Jakarta and rural eastern Indonesia. Remote regions covering 27.8% of districts face critical shortages of healthcare infrastructure and medical personnel. The geographic maldistribution is striking—health workforce availability correlates intensely with remoteness, creating a system where archipelago geography determines health outcomes.

In districts where over 20% of villages have restricted access to healthcare services, constrained availability associates with lower utilization, lower insurer spending, and lower out-of-pocket spending on health, especially for inpatient services. This isn't good news—it doesn't mean people in remote areas need less care or face lower costs. It means they simply cannot access services, so they don't use them, don't spend on them, and go without needed care. Unmet need is invisible in utilization statistics.

Private healthcare facilities have proliferated under JKN, but they concentrate overwhelmingly in urban areas serving high-income populations. This creates a two-tier system: urban Indonesians access modern private facilities with well-trained specialists and current equipment, while rural populations depend on understaffed public clinics that may lack basic supplies and medications. The JKN insurance card provides theoretical access to both, but practical access depends entirely on where you live.

Medical specialists are particularly scarce outside major cities. A rural clinic might have a general practitioner and a few nurses, but patients requiring cardiology, oncology, or other specialized care must travel hours or days to reach appropriate facilities. The financial and time costs of this travel, even with insurance coverage, create barriers that prevent many people from seeking needed specialist care. Geographic barriers function as financial barriers for populations with limited resources.

Since 2018, evaluations consistently show that JKN members have inequitable access to high-quality health services. This represents a fundamental challenge: Indonesia has built insurance coverage faster than it has built healthcare delivery capacity. The insurance mechanism exists, but the clinics, hospitals, equipment, and workforce to deliver care lag behind, particularly in remote areas.

The fiscal dimension is equally challenging. JKN operates with chronic deficits—expenditures exceed revenues, requiring government subsidies to maintain operations. This reflects partly inadequate premium collection from informal sector workers (who represent a large share of Indonesia's workforce) and partly the fundamental challenge of providing comprehensive healthcare on a middle-income country budget. Expanding coverage to near-universal levels was the right moral choice, but it created fiscal obligations that strain government capacity.

Indonesia's healthcare challenge in 2025 is less about insurance coverage—that's been largely achieved—and more about delivery system capacity. Can Indonesia train, recruit, and retain enough doctors, nurses, and specialists to staff facilities across the archipelago? Can it build and equip hospitals and clinics in remote regions? Can it finance this expansion sustainably while maintaining quality?

The comparison with India is instructive. Both are large, geographically diverse developing nations attempting to achieve universal health coverage. Both face urban-rural disparities, workforce shortages, and fiscal constraints. India's Ayushman Bharat targets the poorest 40%, while Indonesia's JKN aims for true universality. Neither has fully solved the delivery system capacity problem, though both have made impressive progress on insurance enrollment.

What Indonesia likely needs in the coming years is sustained investment in healthcare infrastructure and workforce, particularly in remote regions. Incentive programs to attract medical professionals to underserved areas—higher salaries, better working conditions, career advancement opportunities. Telemedicine to partially offset specialist shortages. These interventions require money and political commitment.

The achievement of 95% insurance coverage shouldn't be minimized—it represents genuine political will and administrative capacity to enroll and track a population spread across thousands of islands. But insurance coverage is merely the first step toward universal health coverage. The harder work—building delivery systems that actually provide equitable, high-quality care to all populations regardless of geography—remains ongoing.

November 2025 finds Indonesia consolidating its impressive coverage gains while working to address the delivery system challenges that prevent those gains from translating into truly equitable health outcomes. The JKN program demonstrates that middle-income countries can achieve near-universal insurance enrollment. The question is whether they can build healthcare systems that make that insurance meaningful for remote and marginalized populations.`,
    issues: [
      "Geographic maldistribution of healthcare workforce and facilities",
      "Remote regions (27.8% of districts) critically underserved",
      "Private facilities concentrated in urban areas",
      "Specialist shortages outside major cities",
      "JKN fiscal deficits requiring government subsidies"
    ]
  },
  {
    name: 'Australia',
    lat: -25.2744,
    lng: 133.7751,
    summary: `Between October 2024 and January 2025, only 20.7% of Australian GP clinics bulk-billed for all standard consultations. The average out-of-pocket cost per GP visit reached $43. Overall bulk billing rates have fallen from 88.5% in 2022 to 77.5% by 2025—a collapse that represents Medicare's most significant retreat since the program's creation over 40 years ago. Out-of-pocket costs for specialist appointments rose 158% from 2010 to 2025, more than triple the 49% wage growth over the same period. For a country that built its social contract around universal healthcare access, these numbers represent a genuine crisis.

Medicare was established to ensure that all Australians could access necessary healthcare regardless of ability to pay. Bulk billing—where doctors bill Medicare directly and patients pay nothing—was the mechanism that delivered this promise. When nearly 90% of GP visits were bulk-billed in 2022, Medicare functioned as designed. When only 20.7% of clinics bulk-bill for all consultations by 2025, Medicare has fundamentally changed character.

The math is straightforward. Medicare rebates haven't kept pace with practice costs, doctor wages, and medical inflation. GP clinics face rising rents, staff salaries, equipment costs, and regulatory burdens. When the Medicare rebate for a standard consultation doesn't cover the actual cost of delivering that consultation, clinics have three choices: operate at a loss (unsustainable), reduce consultation time to see more patients per hour (compromising quality), or charge gap payments (abandoning bulk billing). Most have chosen the third option.

For patients, this means healthcare costs that were once negligible now accumulate to significant annual expenditures. A family with chronic conditions requiring regular GP visits, specialist consultations, and diagnostic tests can easily face thousands of dollars in out-of-pocket costs even with Medicare coverage. These costs deter people from seeking early care, leading to delayed diagnosis and more expensive interventions later. False economy on a system level, but rational individual behavior when facing immediate costs.

Wait times have deteriorated alongside bulk billing. Stories of patients waiting weeks for GP appointments, months for specialist consultations, and hours in emergency departments reflect a system under severe stress. With costs rising and bulk billing rare, many Australians report feeling rushed through consultations—a symptom of volume-driven practice economics where doctors must maximize patient throughput to maintain financial viability.

The 2025-26 federal budget represents the Labor government's response: $7.9 billion to provide more bulk billing (described as the largest single investment in Medicare since its creation), expanding bulk billing incentive eligibility to all Australians from November 1, 2025 (adding 15 million individuals to eligibility), with a goal of nine out of ten GP visits being bulk-billed by 2030. Additionally, $644 million will establish 50 more Medicare Urgent Care Clinics (bringing the total to 137), and $1.8 billion supports public hospitals and health services.

These are substantial commitments. Whether they're sufficient depends on whether the increased bulk billing incentives are large enough to make bulk billing financially viable for GP practices. If the incentives merely slow the decline rather than reversing it, Australia will continue drifting toward a two-tier system where those who can afford gap payments access timely care and those who cannot delay seeking treatment.

The Medicare Urgent Care Clinics represent a sensible intervention—walk-in facilities for acute but non-emergency conditions, reducing pressure on emergency departments while providing bulk-billed care. Emergency departments have become de facto primary care providers for people unable to access affordable GP care, creating inappropriate and expensive utilization patterns. Urgent care clinics can partially address this, though they're not substitutes for ongoing primary care relationships.

The specialist cost crisis requires separate attention. A 158% increase in out-of-pocket costs over 15 years means specialist care has effectively been partially privatized for much of the population. People delay seeing specialists due to cost, or they choose between recommended care and financial stability. This particularly affects people with chronic conditions requiring ongoing specialist management—the exact populations who most need reliable access.

Australia's healthcare challenge in 2025 reflects a broader question facing many developed nations: Can social insurance systems designed in the mid-20th century adapt to 21st-century cost pressures and demographic changes? Australia's aging population drives increased healthcare utilization. Medical technology advances enable treatments that didn't exist decades ago but at significant cost. Workforce shortages—particularly in rural areas and certain specialties—constrain capacity.

The comparison with the UK's NHS is instructive. Both systems face similar pressures—underfunding relative to demand, workforce challenges, deteriorating access. But the UK maintains free at point of service for NHS care, whereas Australia is allowing costs to shift to patients through reduced bulk billing. Different political choices, same underlying fiscal constraints.

What Australia needs is sustained funding increases that make bulk billing financially viable for practices, coupled with workforce investments to expand capacity. The 2025-26 budget moves in this direction. Whether it's sufficient depends on implementation details and whether the government sustains this commitment across electoral cycles. Medicare didn't deteriorate overnight—it degraded gradually as rebates failed to keep pace with costs. Restoring it will similarly require sustained effort.

For Australians in November 2025, the healthcare landscape means calculating whether they can afford to see a doctor, waiting longer for appointments and procedures, and experiencing increased financial stress from medical costs. The 2025-26 budget offers hope for improvement, but the proof will come in whether bulk billing rates actually reverse their decline and whether wait times begin to decrease. Political promises are one thing; actual restoration of accessible, affordable healthcare is another. The next two years will show whether Australia is serious about saving Medicare or whether it's witnessing a managed transition to a more privatized system.`,
    issues: [
      "Bulk billing collapse (88.5% to 77.5% since 2022)",
      "Only 20.7% of GP clinics bulk-bill all consultations",
      "Out-of-pocket specialist costs up 158% in 15 years",
      "Long wait times for GP and specialist appointments",
      "Emergency departments overcrowded with primary care patients"
    ]
  },
  {
    name: 'New Zealand',
    lat: -40.9006,
    lng: 174.8860,
    summary: `In August 2025, leaked data showed New Zealand's 23 hospitals processing only 69-71% of emergency department patients within six hours, falling short of government targets of 74% for 2024/25 and 77% for 2025/26. At Nelson Hospital, patients waited up to 50 hours in the emergency department before admission. A Christchurch ED doctor reported that "patients are dying now really because of substandard care" with "patients dying in the waiting room and corridors or who leave and literally drop dead in the car park." In June 2025, over 99% of hospital beds were in use across the system. By September, more than 10,000 New Zealanders had been waiting over a year for specialist appointments or elective surgeries. This isn't a healthcare system under strain—it's a system in crisis.

The emergency department situation represents acute system failure. When patients wait 50 hours for admission, when ambulances spend 2,800 hours waiting outside hospitals across two weeks in July, when people die in waiting rooms—these aren't unfortunate isolated incidents. They're symptoms of a system operating beyond its capacity with insufficient beds, inadequate staffing, and no surge capacity for managing demand fluctuations.

The six-hour ED target—getting patients admitted, treated and discharged, or transferred within six hours of arrival—is a reasonable standard used internationally. Falling short at 69-71% means nearly one-third of patients experience unsafe delays. For time-sensitive conditions like heart attacks, strokes, or severe infections, these delays directly increase mortality and morbidity. Even for less acute conditions, extended ED boarding creates suffering and compromises care quality.

The bed capacity crisis drives ED overcrowding. When hospitals operate at 99% bed occupancy, there's nowhere to admit ED patients requiring hospitalization. They remain in ED beds waiting for floor beds to open, which requires discharging other patients. But those discharges can't happen if patients aren't medically ready or lack appropriate post-discharge support. The entire system becomes gridlocked, with ED bearing the most visible consequences.

Staffing shortages compound the problem. ED doctors penned an open letter to Health New Zealand on September 5, pleading for urgent solutions. In July, doctors voted 85% in favor of a two-day strike after Health NZ offered inflation below pay increases—1.16% annually for three years for 90% of union members. When you offer healthcare professionals pay increases below inflation, you're offering pay cuts in real terms. This during a crisis where those same professionals are working under impossible conditions watching patients die due to system failures.

The industrial relations dimension reveals government priorities. Health workers facing overwhelming workloads, moral injury from inadequate care, and burnout don't ask for strikes—they ask for reasonable compensation and working conditions. When government responds with below-inflation offers, it signals that healthcare workforce retention isn't a genuine priority despite rhetoric about system improvement.

The elective surgery and specialist appointment waitlists represent the chronic care crisis underlying the acute ED failures. Over 10,000 people waiting more than a year for specialist appointments or surgeries means people suffering with treatable conditions, postponing needed surgeries, managing chronic pain and disability while waiting for care that's indefinitely delayed. Hip replacements delayed mean people living with immobility and pain. Cancer surgeries delayed mean poorer prognosis. Cataract surgeries delayed mean vision impairment and fall risks.

These aren't discretionary procedures—"elective" in healthcare means "scheduled" rather than emergency, not "optional." A scheduled hip replacement is elective; it's also medically necessary for someone whose hip joint has failed. When over 10,000 people face year-plus waits, you're looking at a population living with significant health impairment and reduced quality of life.

The systemic nature of the crisis is crucial. You cannot fix ED wait times without addressing bed capacity. You cannot address bed capacity without adequate staffing. You cannot maintain adequate staffing without competitive compensation and safe working conditions. You cannot fund these improvements without budgetary commitment that prioritizes healthcare spending. Everything connects.

New Zealand's healthcare system historically performed reasonably well by international standards—not as generously funded as some European systems, but providing comprehensive coverage with acceptable quality and access. The current crisis represents significant deterioration, not from some external shock but from sustained underinvestment relative to demographic aging, increasing chronic disease burden, and rising healthcare costs.

The comparison with Australia is telling. Both nations face similar challenges—aging populations, healthcare inflation, workforce shortages. Both are watching their healthcare systems deteriorate. Australia is responding with substantial budget increases; New Zealand is offering healthcare workers below-inflation pay increases. These are political choices that reveal priorities.

What New Zealand needs is obvious to anyone who understands health systems: significant sustained funding increases, workforce investments (including competitive compensation), bed capacity expansion, and primary care strengthening to reduce preventable ED visits. The technical solutions aren't mysterious. What's lacking is political will to make healthcare funding a genuine priority.

Healthcare spending represents investment in population health and economic productivity. Healthy populations work, contribute, and prosper. Unhealthy populations suffer and require expensive interventions. Delaying a needed hip replacement doesn't save money—it forces someone to live with disability and often leads to falls, complications, and more expensive care later. Understaffing EDs doesn't save money—it leads to adverse outcomes, malpractice risk, and workforce attrition requiring expensive recruitment.

November 2025 finds New Zealand's healthcare system in its worst state in decades. The government faces a choice: commit the resources necessary to restore functionality, or accept ongoing deterioration with all its human and economic consequences. The leaked data, the doctors' open letter, the strike vote, the patient deaths—these are not abstract problems. They're urgent warnings that the current trajectory is unsustainable.

The tragedy is that this was preventable. New Zealand didn't face some catastrophic shock that overwhelmed its healthcare system. It simply failed to invest adequately over time, allowing gradual degradation until reaching the crisis point we see today. Reversing this requires acknowledging the crisis, committing resources, and sustaining investment over years. Quick fixes won't work—system rebuilding takes time. But it starts with admitting there's a problem and committing to solve it. Whether New Zealand's government makes that commitment remains to be seen.`,
    issues: [
      "Only 69-71% of ED patients seen within 6 hours (target: 77%)",
      "Patients waiting up to 50 hours in ED, deaths in waiting rooms",
      "Hospital bed capacity at 99% (system gridlock)",
      "10,000+ people waiting over a year for specialist/surgery",
      "Healthcare workers offered below-inflation pay (1.16% annually)"
    ]
  }
]

async function addHealthcareSummaries() {
  console.log('Adding healthcare category summaries (Batch 5 - Part 4/4)...\n')

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

  console.log('\n✅ Part 4 complete! Countries: Indonesia, Australia, New Zealand')
}

addHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
