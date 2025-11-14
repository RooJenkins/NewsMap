import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const countries = [
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `The numbers from Argentina are staggering, and they tell a story of public health collapse. Comparing the first three quarters of 2025 to recent years: measles incidence up 1,650 percent, hepatitis A up 296 percent, leptospirosis up 222 percent, whooping cough up 59 percent, tuberculosis up 31 percent, syphilis up 71 percent. These aren't marginal fluctuations—they're the signature of a healthcare system in crisis, vaccine-preventable diseases resurging at rates that would shock any epidemiologist.

The cause is clear and deliberate. Since assuming office in late 2023, President Javier Milei has slashed the healthcare budget by 48 percent, fired more than 2,000 Ministry of Health employees, curtailed financing for drug-access programs including cancer medications for the uninsured, froze federal funding for immunization campaigns, and dismantled the National Directorate for HIV, Hepatitis, and Tuberculosis. The disease statistics are the predictable consequence of these policy choices.

Argentina's healthcare system traditionally operated through three overlapping sectors: public hospitals providing free care, obras sociales (mandatory health insurance for formal workers through union-managed funds), and private prepaid medicine plans. This fragmented structure created inequities but generally functioned. Now, austerity has fractured it. Public hospitals lack medications and supplies. Immunization coverage has collapsed, creating pockets of susceptibility that infectious diseases exploit. Cancer patients who once received subsidized medications now go without or rely on charity.

Beyond infectious disease resurgence, Argentina faces rising chronic disease burden. Cardiovascular disease and cancer are leading killers, while diabetes prevalence climbs. Mental health services were inadequate before the cuts and are now virtually absent in the public sector. As of July 2025, even tourists must have health insurance to enter the country—a tacit acknowledgment that public facilities can no longer absorb additional patients.

The November 2024 meeting between the Ministry of Health and PAHO to advance access to affordable medicines seems almost quaint given the budget demolition. Words about access mean little when programs are defunded.

Argentina's healthcare crisis is a controlled experiment in what happens when a middle-income country dismantles public health infrastructure. The disease resurgence is the early warning; the long-term costs in preventable deaths, disability, and lost productivity will compound for years. Whether this trajectory can be reversed depends on political choices, but the epidemiological damage is already done.`,
    issues: ['48% healthcare budget cut causing system collapse', 'Massive resurgence of vaccine-preventable diseases', 'Cancer medication access eliminated for uninsured', 'Dismantled HIV, hepatitis, tuberculosis programs', 'Immunization coverage collapse creating disease susceptibility']
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    summary: `Chile represents one of Latin America's more successful healthcare stories, though November 2025 research highlights persistent structural challenges. A study examining primary health care policy investments found that while Chile has made significant progress toward Universal Health Coverage, the system struggles with municipal funding capacity and infrastructure renewal—endemic problems that limit what central governance can achieve when implementation depends on local resources.

Chile operates a mixed public-private system that reflects the country's market-oriented history. FONASA (Fondo Nacional de Salud) is the public insurance system funded through taxes and payroll contributions; since September 2022, it has provided completely free care to all beneficiaries, eliminating copayments. About 82 percent of Chileans are FONASA members. The remaining 17-18 percent opt for private insurance through ISAPREs (Instituciones de Salud Previsional), which offer faster access to specialists and private facilities in exchange for higher premiums.

This two-tier structure creates predictable inequities. FONASA patients receive competent care but face longer wait times for specialists and elective procedures. Private insurance holders access care quickly but pay substantially more. The system's efficiency has improved—Chile has implemented targeted policies to reduce wait times for specific conditions, and health outcomes have advanced notably over recent decades. Life expectancy now exceeds 80 years, infant mortality is among Latin America's lowest, and chronic disease management has improved.

Yet challenges remain. Primary care clinics, run by municipalities, vary in quality and capacity based on local funding. Wealthier communes provide better-equipped facilities with more staff; poorer areas struggle. The central government can set policies but can't fully overcome municipal disparities. Mental health services are underdeveloped despite rising depression and anxiety rates, particularly among youth. An aging population is increasing demand for chronic disease management and geriatric care.

In May 2025, Chile joined the Alliance for Primary Health Care in the Americas, a PAHO-led initiative, becoming the third country to operationalize this partnership. The commitment signals Chile's focus on strengthening primary care as the system's foundation—preventive care, chronic disease management, and coordination.

Chile's healthcare trajectory is one of incremental improvement constrained by structural dualities: public versus private, wealthy versus poor communes, central policy versus municipal implementation. Progress continues, but equity remains elusive.`,
    issues: ['Municipal funding disparities creating primary care gaps', 'Public-private system inequities and wait times', 'Infrastructure renewal challenges', 'Underdeveloped mental health services', 'Aging population pressures on system capacity']
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: `Colombia's healthcare system in November 2025 teeters on the edge. Experts warn of potential collapse after years of structural problems, financial instability, and political dysfunction culminated in what many describe as the most precarious moment for public health in recent history. The immediate crisis involves money, but the underlying problems are systemic.

The flashpoint is the Capitation Payment Unit (CPU)—the per-person payment that funds health insurers who contract with hospitals and providers. For 2025, the Ministry of Health increased the CPU by just 5.36 percent, barely matching inflation. This sounds reasonable until you consider that healthcare costs typically rise faster than general inflation, that hospitals are already underfunded, and that the pandemic left debts and deferred maintenance. Patient associations, medical societies, civil society groups, academia, hospitals, and think tanks protested the decision. The insufficient increase raises the probability of systematic financial failure, particularly threatening public hospitals that serve the poorest Colombians.

Colombia's system, established by the 1993 health reform, is insurance-based. Citizens are enrolled in either the contributory regime (for formal workers who pay via payroll) or the subsidized regime (for the poor, funded by government). Private insurers called EPS (Entidades Promotoras de Salud) manage care, contracting with hospitals and clinics. In theory, this creates competition and efficiency. In practice, it's created complexity, corruption, and payment delays that starve providers of operating funds.

Health outcomes show the strain. While Colombia has made progress on infectious disease control and maternal/child health, inequality persists. Urban areas have good facilities; rural and conflict-affected regions lack even basic services. Mental health care is inadequate despite trauma from decades of internal conflict. Non-communicable diseases like diabetes and cardiovascular disease are rising with urbanization and dietary changes.

The November 2025 International Conference on Family Planning, hosted in Bogotá—the first in Latin America—represented a bright spot, showcasing Colombia's engagement with global health. But conferences don't pay hospital bills.

In October 2025, the Council of State suspended President Petro's Decree 0858, which sought to establish a new healthcare model focused on prevention. Political battles over reform distract from the immediate financial crisis.

Colombia's healthcare system needs both short-term stabilization—adequate CPU increases to prevent hospital failures—and long-term reform to address fragmentation and inequity. Whether either happens soon enough to prevent collapse remains uncertain.`,
    issues: ['Insufficient insurance premium increase risking system collapse', 'Hospital financial instability and payment delays', 'Fragmented insurance-based system complexity', 'Rural-urban healthcare access disparities', 'Political gridlock blocking needed reforms']
  },
  {
    name: 'Peru',
    lat: -9.1900,
    lng: -75.0152,
    summary: `Peru's 2025 OECD health systems review documents a remarkable transformation. Insurance coverage increased from 61 percent in 2009 to over 97 percent in 2023—near-universal coverage achieved in just fourteen years. Life expectancy has risen approximately 13 years since 1980, reaching 72.4 years in 2022. Infant mortality plummeted from 83 deaths per 1,000 births in 1980 to 11 in 2021. Maternal mortality halved from 101.9 per 100,000 births in 2002 to 51.9 in 2023. These are genuine public health victories that have saved thousands of lives and improved outcomes for millions.

The Seguro Integral de Salud (SIS)—Peru's public health insurance—has been crucial to this progress, particularly in reaching poor and underserved rural communities in the Andes and Amazon. The 2009 health reforms expanded coverage systematically, and political commitment sustained expansion even through government changes. Peru demonstrates that middle-income countries can achieve near-universal coverage with sustained policy focus.

Yet the OECD review also highlights persistent challenges. Peru's health system remains segmented and fragmented. Multiple public sub-systems serve different population groups: SIS for the poor and informal workers, EsSalud for formal private sector workers, military and police systems for security forces, and private insurance for the wealthy. These systems don't coordinate well. A patient might be insured but unable to access care if the needed specialist or facility isn't in their system's network.

Geographic inequality is stark. In Puno—the Andean region with high indigenous population—40 percent report unmet medical needs, nearly double Lima's 23 percent. This reflects both supply issues (fewer doctors and hospitals in rural areas) and demand barriers (poverty, language, cultural factors). Women report higher unmet needs than men (33 percent versus 29 percent), suggesting gender inequities in access.

Infrastructure and workforce remain unevenly distributed. Urban areas have adequate facilities and specialists; rural regions struggle with basic primary care coverage. Provider quality varies, and coordination between levels of care (primary, secondary, tertiary) is weak, leading to inefficiencies.

Peru has achieved impressive coverage expansion, proving that universal health coverage is feasible for countries at its income level. The next challenge is translating coverage into effective access—ensuring that everyone who is insured can actually get the care they need, when and where they need it. That requires integration, investment in rural infrastructure, and addressing the persistent inequities that data reveal.`,
    issues: ['Segmented health system lacking integration', 'Geographic inequities in access and outcomes', 'Rural-urban infrastructure and workforce gaps', 'Higher unmet medical needs among women', 'Coordination gaps between care levels']
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
})();
