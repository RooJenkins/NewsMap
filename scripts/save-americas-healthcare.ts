import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SUMMARIES = [
  {
    name: 'United States',
    lat: 37.0902,
    lng: -95.7129,
    summary: `As November 2025 began, millions of Americans faced a healthcare cliff. The enhanced premium tax credits that made Affordable Care Act coverage affordable were set to expire at year's end, and the arithmetic was brutal: an average 60-year-old couple earning $85,000 would see their annual premiums jump from $7,200 to nearly $30,000—from 8.5 percent of income to 25 percent. The government had shut down on October 1 as Congress deadlocked over extending these subsidies, leaving 4.8 million people poised to lose coverage, a 21 percent increase in the uninsured population.

The U.S. healthcare system remains the world's most expensive, consuming nearly 18 percent of GDP, yet delivering paradoxical results. It's a patchwork: employer-sponsored insurance covers about half the population, Medicare serves those 65 and older, Medicaid covers low-income Americans, and the ACA marketplaces fill gaps for those between jobs or self-employed. Yet 26 million remain uninsured even before these subsidies expire, and outcomes lag peer nations despite spending twice as much per capita.

The current crisis exposes three structural challenges. First, the subsidy cliff: middle-income families face impossible choices between coverage and other necessities. Second, rural hospital closures accelerate as proposed Medicaid cuts threaten the revenue that keeps them viable—84 rural hospitals have closed since 2010, with more at risk. Third, chronic disease burden remains staggering: diabetes affects 37 million Americans, heart disease remains the leading killer, and maternal mortality has worsened rather than improved, particularly among Black women who die at three times the rate of white women.

Infrastructure strains are evident. The physician shortage is projected to reach 86,000 by 2036, with primary care most affected. Wait times for specialist appointments average 24 days nationally, longer in rural areas. Emergency departments are overcrowded, with average wait times exceeding four hours. The system excels in advanced tertiary care and innovation but struggles with basic access and coordination.

The November crisis represents more than a funding debate—it's a stress test of whether a market-based system can deliver universal access. If subsidies expire, the uninsured rate will spike for the first time since the ACA's passage. The political impasse reflects deeper tensions about healthcare as right versus commodity.

What happens next depends on whether Congress finds compromise before year-end, or whether millions lose coverage in January, potentially creating the political pressure that gridlock currently prevents.`,
    issues: ['ACA subsidy expiration threatens 4.8M with coverage loss', 'Rural hospital closures from Medicaid cuts', 'Chronic disease burden and maternal mortality crisis', 'Physician shortage and access gaps', 'Political gridlock over healthcare funding']
  },
  {
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    summary: `On November 4, 2025, Canada's federal budget committed $5 billion over three years to shore up a healthcare system under unprecedented strain. The announcement came as three-quarters of Canadians reported that limited healthcare access posed a direct threat to their health—a remarkable statement of crisis in a country proud of universal coverage. Ontario simultaneously pledged to connect 235,000 people languishing on waitlists to primary care teams by spring 2026, a tacit admission that universal coverage means little without accessible providers.

Canada's healthcare system is built on the principle of publicly funded, medically necessary services delivered through provincial and territorial programs. The federal government provides funding transfers; provinces organize and deliver care. The system guarantees hospital and physician services without out-of-pocket costs, though prescription drugs, dental care, and vision remain largely private unless covered by employer plans. It's Medicare writ large—but the cracks are showing.

The demographic challenge is fundamental: nearly one in five Canadians is over 65, a figure projected to reach one in four by 2030. This aging population needs more complex, costly care precisely as workforce shortages intensify. Family physician shortages mean 4.6 million Canadians lack regular access to primary care. Emergency departments are overwhelmed, with wait times often exceeding eight hours. Surgical backlogs, worsened by pandemic disruptions, mean months-long waits for hip replacements or cataract surgery that affect quality of life and economic productivity.

The November infrastructure commitment—$56 billion in Ontario alone over the next decade—targets these bottlenecks. Plans include 3,000 new hospital beds and support for 50 hospital projects. But beds without staff are futile, and Canada faces nursing shortages across provinces. Retention is as critical as recruitment: burnout from pandemic pressures continues driving experienced staff away.

Mental health and addiction services remain the system's blind spot. While physical care is covered, mental health services outside hospitals often aren't, creating a two-tier system where those who can afford private therapy get help, others wait or go without.

The November investments signal recognition that incremental funding won't suffice. But whether capital spending on infrastructure can address workforce retention, wait times, and the fundamental mismatch between growing demand and stagnant capacity remains the defining question for Canadian healthcare's next chapter.`,
    issues: ['Primary care access crisis affecting 4.6M Canadians', 'Aging population and demographic pressures', 'Healthcare workforce shortages and burnout', 'Emergency department overcrowding and surgical backlogs', 'Mental health services gaps and inequities']
  }
]

// Continued in next part due to length...
