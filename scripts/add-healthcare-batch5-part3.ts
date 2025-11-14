import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const healthcareSummaries = [
  {
    name: 'China',
    lat: 35.0,
    lng: 105.0,
    summary: `By November 2025, China's Medicare Fund is projected to enter deficit—a fiscal marker that signals the collision between the world's most rapid demographic aging and one of its most ambitious healthcare expansions. China's population aged 60 and above will rise from 263 million in 2020 to 522 million by 2050, with the acceleration particularly acute after 2030. By 2040, adults 65 and older will comprise 27% of the population. The arithmetic is unforgiving: fewer workers contributing to health insurance, more elderly consuming healthcare services, and a Medicare Fund whose balances decrease annually until the crossing point arrives.

China's basic medical insurance system now covers over 95% of the population—a remarkable achievement for a country that, as recently as the early 2000s, had left hundreds of millions without health coverage. The creation of the National Healthcare Security Administration in March 2018 consolidated management of all insurance programs, bringing technocratic coordination to what had been fragmented provincial systems. During the 14th Five-Year Plan period (2021-2025), reforms have focused on expanding coverage, improving equity, and boosting efficiency through price negotiations that reduced generic drug costs and freed budgetary space for innovative treatments.

But here's the challenge that health economists would recognize as fundamental: China built a near-universal insurance system just as its demographic profile began shifting from young to old, from workers to retirees, from low-cost to high-cost patients. The timing could hardly be worse. Approximately 20% of the increase in healthcare costs by 2025 is attributed directly to population aging, and this is just the beginning. The proportion aged 80 and above—the highest-cost patients requiring the most intensive services—will surge from current levels to 54 million by 2030 and 133 million by 2050.

Out-of-pocket healthcare expenditures, currently lower than in other aging countries, are forecast to grow at 7% compound annual growth rate between 2024-2030, reaching $568 billion by 2030. This represents a massive transfer of costs from the insurance system to households—essentially a stealth privatization as the public system cannot keep pace with demand. When insurance funds run deficits, benefits must be cut or patient cost-sharing must increase. China is choosing the latter.

The infrastructure challenges are equally daunting. China has made substantial investments in hospital construction and medical equipment, particularly in tier-1 and tier-2 cities. But healthcare workforce capacity remains constrained relative to demand. The ratio of doctors to population has improved but still lags developed nations. More critically, the distribution of medical talent concentrates in urban centers, leaving rural populations with limited access to specialists and advanced care. Telemedicine initiatives attempt to bridge this gap, but remote consultations cannot fully substitute for local capacity.

The government's response has been technocratic and systematic—exactly what you'd expect from China's state capacity. Pharmaceutical price negotiations have reduced costs for many medications. Hospital payment reforms shift from fee-for-service toward bundled payments, creating incentives for efficiency rather than volume. Digital health infrastructure enables remote monitoring and consultation. These are all evidence-based interventions that international health policy experts would endorse.

Yet the fundamental problem remains: an aging population consumes more healthcare than a young one, and no amount of efficiency can eliminate that reality. China's demographic trajectory is among the world's most severe—the one-child policy created a population structure that ages rapidly without the buffer of younger cohorts. The consequences are now arriving.

The political economy dimension matters too. Healthcare cost inflation creates pressure on the Medicare Fund, which creates pressure on the central government to either increase contributions (taxing workers) or reduce benefits (angering retirees). Neither option is politically attractive. The Party's legitimacy rests substantially on delivering rising living standards and social protection. A healthcare system that provides insurance in name but requires substantial out-of-pocket payments risks undermining that social contract.

Looking forward, China faces difficult trade-offs. It can attempt to maintain comprehensive benefits and accept escalating deficits, it can reduce benefit generosity to match available funding, or it can substantially increase mandatory contributions. Most likely, it will pursue some combination—marginal benefit reductions, moderate contribution increases, continued efficiency drives. But the underlying mathematics doesn't change. An aging population requires either more healthcare spending or acceptance of unmet need.

China's healthcare challenge in 2025 is a preview of what many countries will face in coming decades. The difference is that China's aging is compressed into a shorter timeframe, and its healthcare system is younger and less established than those in Japan or Europe. The experiment underway—building a sustainable healthcare system for the world's largest aging population—will provide lessons, positive and negative, for the rest of the world. The projected 2025 Medicare Fund deficit is just the beginning of a multi-decade reckoning.`,
    issues: [
      "Medicare Fund entering deficit in 2025",
      "Rapid aging (263M to 522M elderly by 2050)",
      "Out-of-pocket costs rising 7% annually",
      "Urban-rural healthcare access disparities",
      "Workforce capacity constraints amid surging demand"
    ]
  },
  {
    name: 'India',
    lat: 20.5937,
    lng: 78.9629,
    summary: `India's Ayushman Bharat scheme—the world's largest health assurance program—covers 550 million beneficiaries with up to ₹5 lakhs (approximately $6,000) in annual hospitalization coverage. In October 2024, the program expanded to include 60 million seniors aged 70 and above regardless of socioeconomic status. By November 2025, the scheme has established over 1.2 million health and wellness centers and transformed 170,000 facilities to provide primary healthcare services, particularly in rural and underserved regions. These are extraordinary numbers that signal genuine political commitment to universal health coverage. Yet India's path to UHC by its 2030 target reveals fundamental tensions between ambitious goals and constrained resources.

The core challenge is mathematical: India's public health expenditure remains at 2.1% of GDP as of 2022-23, below the 2.5% recommended by the 15th Finance Commission and far below the 5-7% typical of countries with mature universal health systems. When you attempt to provide comprehensive healthcare to 1.4 billion people on 2.1% of GDP, something has to give. What gives is quality, accessibility, and financial protection—exactly what Ayushman Bharat promises to provide.

Approximately 400 million Indians remain uninsured despite Ayushman Bharat's expansion. The scheme targets the bottom 40% of the population based on socioeconomic deprivation criteria, which means the working poor and lower middle class often fall through the cracks—too wealthy for subsidized coverage, too poor to afford private insurance. They face catastrophic health expenditures when serious illness strikes, precisely the scenario that universal health coverage is meant to prevent.

The infrastructure achievements are real. Converting 1.2 million facilities into health and wellness centers represents the largest primary care expansion in human history. The eSanjeevani telemedicine platform extends specialist consultations to remote areas. Community health workers provide basic services and health education. These interventions matter—they save lives and reduce suffering in populations that previously had no healthcare access.

But here's what the aggregate numbers obscure: enormous regional disparities. Southern states show higher awareness and utilization of Ayushman Bharat benefits. Bihar and Maharashtra—highly populous states with substantial poverty—have very low rates of both Ayushman Bharat card creation and hospital admissions under the scheme. This suggests implementation failures: poor outreach, lack of empaneled hospitals, bureaucratic barriers, or simple lack of awareness among eligible populations.

The public-private balance remains deeply problematic. India's private healthcare sector is projected to reach $610 billion by 2026, serving those who can afford to pay while the public system struggles with overcrowding, equipment shortages, and workforce constraints. Doctors and nurses overwhelmingly prefer private sector employment due to better compensation and working conditions. Public facilities, particularly in rural areas, face chronic understaffing and operate with outdated equipment.

The Ayushman Bharat scheme attempts to bridge public and private through empanelment—private hospitals can treat Ayushman Bharat beneficiaries and receive government reimbursement. This theoretically expands access while leveraging private sector capacity. In practice, many private hospitals are reluctant to participate due to low reimbursement rates and payment delays. Beneficiaries sometimes face informal out-of-pocket demands even for supposedly covered services. The public-private partnership model works better in some states than others, reflecting variations in governance capacity.

Workforce challenges are severe. India has made progress training doctors and nurses, but production lags demand. The distribution problem is even worse—medical professionals concentrate in urban areas, leaving rural facilities desperately understaffed. A health and wellness center in rural Rajasthan may exist on paper but lack a doctor, nurse, or even reliable drug supplies. Infrastructure without workforce is just empty buildings.

The pharmaceutical sector presents a different dynamic. India is a global leader in generic drug manufacturing, which should create cost advantages. And indeed, drug prices in India are generally lower than in developed countries. But the last-mile distribution problem persists—getting affordable medications to remote populations requires logistics, cold chain infrastructure, and reliable supply chains that don't always exist.

Looking at 2025 specifically, the scheme's expansion to all seniors over 70 is politically popular and morally justified—this is a vulnerable population that faces both high healthcare costs and limited earning capacity. But it increases fiscal pressure on a program that's already stretching budgets. The question becomes sustainability. Can India maintain and expand Ayushman Bharat while keeping public health spending at 2.1% of GDP? The mathematics suggests no.

What India likely needs is a gradual increase in public health spending toward that 2.5% target, coupled with efficiency improvements through digitization, better procurement, and payment reforms that reward primary care and prevention rather than just hospitalization. The technical solutions are well-understood. The challenge is political—mobilizing resources and sustaining commitment across electoral cycles.

Ayushman Bharat represents genuine progress toward health equity in the world's most populous nation. But the distance between 550 million covered beneficiaries and true universal health coverage remains vast. India's 2030 UHC goal is achievable, but only if political will translates into sustained fiscal commitment and implementation capacity at state and local levels. The infrastructure is being built. The question is whether the financing and governance will follow.`,
    issues: [
      "Public health spending only 2.1% of GDP (below 2.5% target)",
      "400 million Indians remain uninsured",
      "Severe regional disparities (Bihar, Maharashtra lag)",
      "Chronic workforce shortages in rural areas",
      "Private sector dominance creates access inequities"
    ]
  },
  {
    name: 'Japan',
    lat: 36.2048,
    lng: 138.2529,
    summary: `Japan confronts what demographers call the "2025 Problem"—the year when the enormous baby boomer generation reaches age 75 and older, fundamentally reshaping healthcare demand and long-term care needs. The ratio of working-age people (20-64) to elderly (65+) has collapsed from 5.1:1 in 1990 to a projected 1.8:1 in 2025. By mid-2025, Japan faces an estimated shortage of 60,000 to 270,000 nurses, with some projections suggesting 320,000 nursing workers will be lacking. In the first six months of the year, 81 nursing homes declared bankruptcy—the highest recorded for any six-month period since 2000. This isn't a looming crisis; it's a crisis that has arrived.

Japan's healthcare system has historically been exceptional by international standards. Universal coverage since 1961, comprehensive benefits, minimal wait times, excellent health outcomes including the world's longest life expectancy—these achievements are real and sustained. The system delivers high-quality care efficiently. But the demographic transition now underway tests whether any healthcare system, however well-designed, can accommodate a population structure this elderly.

The nursing shortage numbers deserve unpacking. Japan needs to recruit and retain hundreds of thousands of additional nursing professionals just to maintain current service levels, let alone meet surging demand from the 75+ population. But the labor pool is shrinking—Japan's working-age population declines each year due to low birth rates and restrictive immigration policies. You cannot solve workforce shortages by drawing from a population that's simultaneously shrinking.

Healthcare burnout accelerated during COVID-19, pushing many nurses to leave the profession entirely. Those who remain face grueling conditions—long hours, physically demanding work, emotional exhaustion from caring for dying patients, and compensation that doesn't adequately reflect the difficulty. Younger Japanese workers increasingly choose other careers, viewing nursing as undervalued despite its social importance.

Long-term care presents even more acute challenges. Japan pioneered comprehensive long-term care insurance in 2000, recognizing that an aging population would need services beyond acute medical care. The system covers home care, assisted living, and nursing home placement. But the 81 nursing home bankruptcies in early 2025 reveal system stress. These facilities cannot recruit adequate staff, cannot manage rising costs, and cannot survive on reimbursement rates that haven't kept pace with expenses.

The government's response has been characteristically systematic. Japan is rapidly integrating digital technology into nursing and long-term care—robotic assistance for patient lifting and movement, remote monitoring systems, AI-assisted care planning. The "community-based integrated care" model attempts to keep elderly people in their homes and communities as long as possible, coordinating medical care, prevention services, welfare, housing, and lifestyle support. These are sensible, evidence-based interventions.

But technology cannot substitute entirely for human caregivers. An elderly person with dementia needs human interaction and supervision. A patient requiring assistance with bathing and eating needs hands-on care. Japan is betting on technology to augment a limited workforce, but the fundamental constraint remains—not enough workers to care for rapidly growing numbers of elderly people.

Immigration represents an obvious potential solution. Japan has begun accepting more foreign care workers, primarily from Southeast Asia, under specific visa programs. But the numbers remain modest relative to need, and language barriers create challenges for care quality and worker integration. Japan's cultural homogeneity and historical reluctance toward immigration make large-scale workforce importation politically difficult.

The fiscal dimension is equally daunting. Healthcare and long-term care spending consume an ever-larger share of Japan's national budget. The working-age population paying into social insurance shrinks while the elderly population drawing benefits grows. Japan can sustain this temporarily through deficit spending—the government runs large fiscal deficits financed by domestic borrowing. But long-term sustainability requires either substantial tax increases, benefit reductions, or some combination.

For healthcare professionals, the situation means impossible choices. Hospitals must decide which services to maintain and which to cut. Nursing homes must limit admissions or close entirely. Home care agencies must ration visits. Emergency departments become overwhelmed as elderly patients with complex conditions seek acute care that outpatient and long-term care systems cannot provide.

For elderly Japanese citizens, the system still functions but with increasing strain. Wait times for nursing home placement lengthen. Home care services may not be available when needed. Family members—disproportionately women—provide unpaid caregiving that compensates for system gaps, but at enormous personal cost.

Japan's experience offers crucial lessons for other nations entering demographic aging. First, even a well-designed, well-financed healthcare system struggles with these demographic ratios. Second, workforce is the binding constraint—you cannot deliver care without caregivers, regardless of funding levels. Third, technology helps but cannot solve the problem. Fourth, long-term care is not optional—the need exists whether or not the system can meet it.

November 2025 finds Japan attempting to manage a challenge that has no perfect solution. The country will continue muddling through—expanding technology, recruiting foreign workers, raising taxes incrementally, adjusting benefits marginally. But the fundamental mismatch between elderly population needing care and working-age population providing care persists. Japan is pioneering the future that South Korea, China, and eventually much of the world will face. The lesson so far: demographic aging imposes hard limits that even capable governments struggle to overcome.`,
    issues: [
      "Shortage of 60,000-270,000 nurses in 2025",
      "81 nursing home bankruptcies in six months",
      "Demographic ratio collapse (5.1:1 to 1.8:1 workers to elderly)",
      "Severe healthcare worker burnout",
      "Unsustainable fiscal trajectory for health/long-term care"
    ]
  },
  {
    name: 'South Korea',
    lat: 35.9078,
    lng: 127.7669,
    summary: `In February 2024, 12,000 junior doctors resigned and 14,000 medical students boycotted classes, protesting the government's plan to increase medical school admissions by 2,000 students annually—a 65% enrollment expansion. By November 2025, only 8% of junior doctors are staffing South Korea's 211 general hospitals, creating one of the world's longest medical strikes and triggering a healthcare crisis that reveals fundamental contradictions in how modern societies train, deploy, and compensate physicians.

The government's rationale appears straightforward. South Korea has 2.6 doctors per 1,000 people, well below the OECD average of 3.7. The country is projected to become a "super-aged" society by 2035 with 30% of the population over 65, and the world's oldest nation by 2044. More elderly people means more healthcare demand, which requires more doctors. The medical school expansion aims to produce those doctors before the demographic crunch arrives.

The doctors' position is more complex and frankly, more compelling. Their immediate complaint is that simply increasing doctor numbers doesn't address underlying system problems—harsh working conditions, low wages in essential specialties, maldistribution of physicians between specialties and regions. Trainee doctors often work over 80 hours weekly and constitute one-third or more of the workforce in major hospitals. They function as both learners and essential labor, and hospitals have structured operations around their availability. When they walk out, systems collapse.

But the deeper issue is economic. South Korean medical students understand that physician incomes depend partly on scarcity. A 65% increase in medical school enrollment means 65% more doctors competing for patients and positions, which will eventually depress wages—particularly in high-income specialties. Current doctors oppose this for rational self-interest. The government is asking them to support a policy that will reduce their future earnings.

Here's where the analysis gets interesting from a health systems perspective. South Korea's doctor shortage isn't actually a shortage in aggregate—it's a distribution problem. Seoul and other major cities have plenty of doctors, many in lucrative specialties like plastic surgery and dermatology. Rural areas and essential specialties like pediatrics, emergency medicine, and obstetrics face severe shortages. The high-income specialties are overcrowded; the socially essential ones are understaffed.

Simply training more doctors doesn't solve this distribution problem. Without complementary policies—higher compensation for essential specialties, incentives for rural practice, service requirements—the new doctors will likely concentrate in the same specialties and locations as current doctors. South Korea would have more plastic surgeons in Seoul and still lack pediatricians in rural provinces.

The government's heavy-handed response escalated the crisis. Threatening to suspend medical licenses of striking doctors, ordering them back to work, treating the walkout as insubordination rather than legitimate labor action—these moves hardened positions on both sides. When President Yoon declared martial law in December 2024 and ordered doctors back to work, the decree lasted 24 hours before being overturned. Yoon was subsequently impeached and removed from office, but the healthcare crisis persisted.

By April 2025, the government backtracked, reducing the 2026 medical school quota to 3,058—essentially back to pre-strike levels. This represented a tactical retreat but not a strategic resolution. The underlying problem—projected doctor shortages as the population ages—remains unaddressed. The doctors won the immediate battle but the demographic reality doesn't change.

The strike also revealed healthcare system vulnerability. When junior doctors walked out, hospitals struggled to maintain emergency services, surgeries were cancelled, and patients were diverted to facilities that could still function. This exposed how dependent South Korean hospitals are on trainee labor. Medical residents provide essential services while earning relatively modest wages—a system that benefits hospitals financially but creates resentment among the trainees themselves.

The long-term implications are troubling. South Korea's medical students observed a year-long strike, saw the government back down, and learned that collective action works. This could encourage future labor actions. It also may discourage people from pursuing medicine—why enter a profession with brutal training requirements, intense work hours, and uncertain future compensation? South Korea needs to recruit more people into medicine, but the strike may have the opposite effect.

From a comparative perspective, South Korea's crisis echoes struggles in other countries. The UK has seen repeated junior doctor strikes over pay and conditions. France faces similar tensions. The United States debates physician compensation and training system reforms. The common thread: societies want more healthcare services but are unwilling to adequately compensate the professionals who deliver them.

What South Korea likely needs is not just more medical school seats but comprehensive health workforce reform. Higher compensation for essential specialties, funded through differential payment rates. Service requirements for medical graduates—work in underserved specialties or regions for specified years. Better working conditions—hour limits, adequate support staff, safer clinical environments. These require money and political will, both of which are easier to promise than deliver.

November 2025 finds South Korea in an uneasy stalemate. The strike has nominally ended, but only 8% of junior doctors have returned. The government has retreated on medical school expansion but faces the same aging-population pressures. The medical community has flexed its power but hasn't articulated a comprehensive alternative vision for health workforce planning.

The underlying question remains: How does a rapidly aging society with below-average doctor density train and retain adequate medical workforce? South Korea's medical strike didn't answer that question—it just demonstrated that the current approach won't work. Finding an approach that does work requires moving beyond the quota increase versus no quota increase binary toward serious engagement with specialty distribution, regional equity, working conditions, and compensation models. That conversation hasn't begun in earnest, which means South Korea's healthcare crisis is likely to continue in some form, even if the acute strike phase has passed.`,
    issues: [
      "Medical strike leaving only 8% of junior doctors working",
      "Doctor shortage (2.6 per 1,000 vs 3.7 OECD average)",
      "Distribution problem (specialty/geographic maldistribution)",
      "Trainee exploitation (80+ hour weeks, low wages)",
      "Super-aged society approaching (30% elderly by 2035)"
    ]
  },
  {
    name: 'North Korea',
    lat: 40.3399,
    lng: 127.5101,
    summary: `North Korea's healthcare system exists in a state that researchers describe as risking "system-wide internal collapse"—not an imminent dramatic failure, but rather a slow grinding deterioration driven by decrepit infrastructure, chronic malnutrition affecting 42% of the population, and complete vulnerability to any external shock such as pandemic or natural disaster. By November 2025, the system maintains the facade of universal coverage while operating hospitals without reliable electricity or heating, facing critical medicine shortages, and serving a population where roughly half live in extreme poverty and 10.5 million people are undernourished.

The irony is that North Korea, in theory, has one of the most comprehensive healthcare systems on paper. Free universal healthcare, extensive primary care network, prevention-focused public health programs—the Pyongyang government's official narrative describes a socialist health system that prioritizes people's welfare. The reality documented by defector testimonies and humanitarian workers tells a different story.

High informal costs and lack of medicines create the primary barriers to healthcare access. In surveys of North Korean defectors, 53.8% cited high costs and 39.5% reported lack of medicines as reasons they couldn't get needed care. This drives extensive self-medication—people buying drugs from informal markets, using expired or counterfeit medications, attempting to treat serious conditions without professional guidance. When the official healthcare system cannot provide medicines or services, a shadow system emerges.

The pharmaceutical shortage creates particularly serious consequences for communicable disease control. Tuberculosis remains endemic, and medicine rationing triggered by drug shortages risks creating drug-resistant TB strains. This isn't just a North Korean problem—drug-resistant TB can spread internationally. The same applies to other communicable diseases. A failing healthcare system in a closed society creates epidemiological risks that don't respect borders.

Infrastructure problems run deeper than just medicine shortages. Hospitals operate without consistent electricity, which means no refrigeration for vaccines and temperature-sensitive medications, no reliable lighting for procedures, no functioning medical equipment that requires power. Heating failures during harsh Korean winters create conditions where patients face hypothermia in hospital beds. Medical equipment is outdated and poorly maintained—when something breaks, replacement parts are unavailable due to sanctions and economic isolation.

The centralized health system suffers from chronic underfunding and lack of essential supplies. The government prioritizes military spending and nuclear weapons programs over healthcare and social services. This is a rational choice from the regime's perspective—military strength ensures regime survival, whereas healthcare system failures affect ordinary citizens who lack political power. The elite in Pyongyang access better care through special facilities, creating a two-tier system in a supposedly egalitarian socialist state.

Malnutrition intersects with healthcare in devastating ways. Chronic malnutrition weakens immune systems, making people more susceptible to infectious diseases. It impairs child development, creating lifelong health consequences. Malnourished patients recover more slowly from illness and injury. Healthcare workers cannot effectively treat patients whose fundamental problem is lack of adequate nutrition—you cannot medicate your way out of starvation.

Interestingly, in 2025 the Ministry of Health launched a smartphone app providing drug ordering and delivery service and online medical consultations. This suggests some attempt at modernization and recognition that the physical healthcare infrastructure is failing. If people cannot reach hospitals or hospitals cannot provide services, perhaps telemedicine offers partial solutions. But this requires smartphones, internet connectivity, and digital literacy—all of which are limited outside Pyongyang elite circles. It also requires medicines to be available for ordering, which brings us back to the shortage problem.

The external health and humanitarian infrastructure that international organizations built in North Korea over the past decade faces potential collapse. International aid workers and organizations provided essential medicines, technical assistance, and humanitarian support that partially compensated for system failures. But sanctions, political tensions, and North Korea's increasing isolation have reduced this support. If current trends persist, much of that infrastructure may collapse, leaving the domestic system to cope alone with challenges it cannot manage.

Healthcare workforce quality is difficult to assess from outside, but defector accounts suggest inadequate training, lack of continuing education, and inability to maintain skills due to missing equipment and medicines. A surgeon cannot practice modern techniques without functioning operating rooms. A physician cannot stay current on treatment protocols without access to medical literature and professional development. Isolation from the global medical community means North Korean healthcare workers are increasingly practicing 20th-century medicine in the 21st century.

For ordinary North Koreans, the healthcare reality means difficult choices. Seek care at official facilities that may lack medicines and equipment, or spend scarce resources on informal healthcare and self-medication. Trust doctors who lack tools to help, or attempt traditional remedies and hope for the best. When serious illness strikes, watch family members suffer and die from conditions that would be treatable in functional healthcare systems.

November 2025 finds North Korea's healthcare system in a slow-motion crisis that could persist for years or could reach a breaking point if a pandemic or natural disaster exposes the system's complete inability to respond. The smartphone app for telemedicine is a bandage on a systemic wound—it may help marginally but doesn't address fundamental problems of infrastructure, financing, medicines, equipment, and nutrition.

The tragedy is that this is preventable. North Korea could choose to prioritize healthcare and social services over military programs. It could accept international assistance and open its system to external support. It could implement economic reforms that generate resources for health system investment. The technical knowledge of how to build functioning health systems exists—North Korea simply doesn't apply it.

The humanitarian imperative is clear: ordinary North Koreans deserve access to basic healthcare, and the international community has obligations to assist populations in need regardless of political considerations. But sanctions, regime opacity, and geopolitical tensions make meaningful health system support nearly impossible. So the deterioration continues, and the people suffer the consequences.`,
    issues: [
      "System at risk of total collapse",
      "42% of population undernourished (10.5M people)",
      "Critical medicine shortages (53.8% cite high costs, 39.5% lack of drugs)",
      "Hospitals without electricity or heating",
      "Drug-resistant TB emerging from medicine rationing"
    ]
  }
]

async function addHealthcareSummaries() {
  console.log('Adding healthcare category summaries (Batch 5 - Part 3/4)...\n')

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

  console.log('\n✅ Part 3 complete! Countries: China, India, Japan, South Korea, North Korea')
}

addHealthcareSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
