import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// All 114 countries with coordinates
const ALL_COUNTRIES = [
  // Americas (22)
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
  { name: 'United States', lat: 39.8283, lng: -98.5795 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },

  // Europe (31)
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.473 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Romania', lat: 45.9432, lng: 24.9668 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Slovakia', lat: 48.6690, lng: 19.6990 },
  { name: 'Slovenia', lat: 46.1512, lng: 14.9955 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },

  // Asia-Pacific (43)
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Oman', lat: 21.5126, lng: 55.9233 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'Syria', lat: 34.8021, lng: 38.9968 },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478 },
  { name: 'Uzbekistan', lat: 41.3775, lng: 64.5853 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164 },

  // Africa (19)
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 },
]

interface CategoryContent {
  summary: string
  issues: string[]
}

// SCIENCE & RESEARCH (Ed Yong voice - accessible, narrative-driven, sense of wonder)
function generateScienceContent(country: string): CategoryContent {
  const templates: Record<string, string> = {
    'research_powerhouse': `# ${country} - Science & Research

The thing about ${country}'s research landscape that often gets overlooked is how it balances cutting-edge discovery with practical application. While headlines focus on breakthroughs, the real story unfolds in hundreds of labs where scientists navigate funding constraints, international collaboration opportunities, and the challenge of translating research into real-world impact.

## The Big Issue 1: Research Funding and Priority-Setting

${country}'s scientific community faces fundamental questions about resource allocation. With limited budgets competing against infrastructure, healthcare, and education needs, research funding reflects national priorities. Universities and research institutes must balance curiosity-driven basic science with applied research that promises near-term economic returns.

## The Big Issue 2: Talent Development and Brain Drain

The pipeline of scientific talent reveals much about ${country}'s research future. Training the next generation of researchers requires sustained investment in education, mentorship, and career pathways. Many countries face the challenge of "brain drain"—talented scientists leaving for better-resourced institutions abroad. Others are building strategies to retain talent or entice researchers to return home with competitive salaries, modern facilities, and interesting research questions.

## The Big Issue 3: International Collaboration vs. National Capacity

${country}'s research community must navigate the tension between collaborating with international partners (accessing expertise, equipment, and funding) and building domestic capacity. Publishing with well-known foreign institutions brings prestige, but developing strong local research ecosystems requires sustained investment in infrastructure, training, and institutional support.

## The International Angle

In an increasingly interconnected research world, ${country}'s scientists participate in global collaborations, publish in international journals, and compete for multinational grants. Climate science, infectious disease research, and fundamental physics demand cross-border partnerships. The question is whether ${country} is a full partner in these collaborations or a data source for research driven elsewhere.

## The Bottom Line

${country}'s research landscape reflects broader questions about national investment in knowledge creation. Science isn't just about prestigious discoveries—it's about building the infrastructure, training the people, and asking the questions that position a nation for future challenges. The choices ${country} makes about research funding today will determine its capacity to address tomorrow's problems, from climate adaptation to public health to technological innovation.`,

    'emerging_research': `# ${country} - Science & Research

Here's what makes ${country}'s scientific story compelling: it's building research capacity in real-time, deciding which fields to prioritize, which international partnerships to cultivate, and how to balance immediate practical needs against long-term knowledge creation. These aren't abstract questions—they're being answered in university labs, government ministries, and funding agency boardrooms right now.

## The Big Issue 1: Strategic Research Priorities

${country} is making calculated bets about where to concentrate limited resources. Some nations focus on agricultural research aligned with their economies. Others prioritize health sciences, renewable energy, or materials science. These choices reflect both practical considerations (where can we make meaningful contributions?) and aspirational goals (what kind of knowledge economy do we want to build?).

## The Big Issue 2: Building Research Infrastructure

World-class research requires more than smart people with good ideas—it needs equipment, facilities, and institutional support systems. ${country} faces decisions about whether to invest in expensive research infrastructure (electron microscopes, gene sequencers, supercomputers) or collaborate with better-resourced institutions abroad. Each approach has trade-offs for building long-term domestic capacity.

## The Big Issue 3: Connecting Research to Development

For ${country}, research isn't purely academic—it's intertwined with development goals. Can agricultural research help farmers increase yields? Can public health research inform disease prevention? Can environmental science guide sustainable resource management? The pressure to demonstrate practical value shapes what research gets funded and how scientists frame their work.

## The International Angle

${country}'s researchers often find themselves in asymmetric collaborations with institutions in wealthier nations. Foreign researchers bring funding and prestige; local researchers bring local knowledge, access, and partnership. The best collaborations are genuinely mutual. The problematic ones extract data and samples while leaving little institutional capacity behind. ${country} is learning to negotiate these partnerships to ensure they build local strength, not just international publications.

## The Bottom Line

${country}'s research community is in a pivotal phase: establishing priorities, building institutions, and training a generation of scientists. The trajectory isn't predetermined—it depends on sustained political support, strategic investments, and creating environments where talented researchers can do meaningful work. Science is a long game, and ${country} is still establishing the playing field. The exciting part? The potential for unexpected discoveries from researchers asking questions rooted in local contexts that mainstream science might overlook.`,

    'constrained_research': `# ${country} - Science & Research

${country}'s scientific community operates under constraints that would frustrate researchers anywhere: limited funding, aging equipment, brain drain, and sometimes political interference. Yet science continues—in university departments, small research institutes, and through international collaborations. The story isn't about cutting-edge breakthroughs; it's about persistence, adaptation, and the small victories that keep knowledge creation alive in challenging circumstances.

## The Big Issue 1: Surviving on Limited Resources

Research budgets in ${country} are tight, competing with immediate needs like healthcare, infrastructure, and debt service. Scientists become experts in making do: sharing equipment, extending grant timelines, and seeking international partnerships that bring resources. This shapes what research is possible—favoring low-cost observational studies over expensive experimental work, and prioritizing research with obvious practical applications over basic science.

## The Big Issue 2: The Exodus of Scientific Talent

${country} trains scientists who often leave for opportunities abroad. It's rational on an individual level—better pay, modern facilities, stable funding—but devastating for institutional capacity. Universities lose their most productive researchers just as they hit their prime. The diaspora of ${country}'s scientists contributes to research worldwide, but leaves domestic institutions struggling to maintain critical mass.

## The Big Issue 3: Political and Institutional Challenges

Research in ${country} sometimes faces obstacles beyond funding: political priorities that shift with governments, institutional bureaucracy that slows grant administration, or restrictions on certain research areas. Scientists navigate these constraints, focusing on acceptable topics, framing work carefully, or collaborating with foreign institutions where academic freedom is less constrained.

## The International Angle

${country}'s researchers often contribute to international science while their domestic institutions struggle. They're co-authors on papers with European or American universities, participate in global research networks, and attend international conferences. This creates a paradox: ${country}'s scientists are globally connected, but ${country}'s research institutions remain under-resourced. The brain drain becomes a brain circulation—maintaining connections, sometimes returning, but rarely finding the resources they need at home.

## The Bottom Line

Science in ${country} persists despite, not because of, institutional support. Individual researchers carve out space for inquiry, mentoring students who may themselves leave for opportunities abroad. It's a fragile ecosystem—vulnerable to budget cuts, political interference, and the accumulated effect of talented people choosing other careers or other countries. Yet knowledge creation continues, driven by curiosity and commitment that transcend material constraints. The question is whether ${country} will recognize science as an investment in its future, or continue treating it as an expendable luxury.`
  }

  // Categorize countries
  const researchPowerhouses = ['United States', 'United Kingdom', 'Germany', 'France', 'Japan', 'South Korea', 'China', 'Canada', 'Australia', 'Netherlands', 'Switzerland', 'Sweden', 'Singapore', 'Israel']
  const emergingResearch = ['Brazil', 'India', 'Mexico', 'Turkey', 'South Africa', 'Argentina', 'Chile', 'Poland', 'Czech Republic', 'Malaysia', 'Thailand', 'Vietnam', 'Indonesia', 'Egypt', 'Morocco', 'Kenya', 'Ghana', 'Rwanda']

  let template: string
  let issues: string[]

  if (researchPowerhouses.includes(country)) {
    template = templates.research_powerhouse
    issues = [
      'Research Funding and Priority-Setting',
      'Talent Development and International Competition',
      'Balancing Basic Research with Applied Innovation'
    ]
  } else if (emergingResearch.includes(country)) {
    template = templates.emerging_research
    issues = [
      'Strategic Research Investment Priorities',
      'Building Research Infrastructure and Capacity',
      'Connecting Research to National Development Goals'
    ]
  } else {
    template = templates.constrained_research
    issues = [
      'Operating Under Severe Resource Constraints',
      'Brain Drain and Talent Retention Challenges',
      'Political and Institutional Obstacles to Research'
    ]
  }

  return { summary: template, issues }
}

// HUMAN RIGHTS (Samantha Power voice - diplomatic + moral urgency, individual stories, pragmatic idealism)
function generateHumanRightsContent(country: string): CategoryContent {
  const templates: Record<string, string> = {
    'democratic_tensions': `# ${country} - Human Rights

In ${country}, human rights discussions often center on the gap between legal protections and lived realities. On paper, constitutional guarantees and international treaty obligations provide a framework for rights protection. In practice, vulnerable populations—migrants, minorities, women, LGBTQ individuals—face discrimination that laws don't fully prevent or remedy. This isn't about failure versus success; it's about the constant work required to translate principles into practice.

## The Big Issue 1: Structural Discrimination and Marginalized Communities

Despite formal equality before the law, certain communities in ${country} face systemic disadvantages. This might involve minority ethnic or religious groups experiencing discrimination in employment, housing, and education. It could mean women confronting violence and economic inequality despite legal protections. Or LGBTQ individuals facing social stigma that laws alone can't eliminate. The challenge is moving from non-discrimination on paper to genuine inclusion in practice.

## The Big Issue 2: Migration, Asylum, and Border Enforcement

${country}'s treatment of migrants and asylum seekers reveals tensions between security concerns, economic interests, and humanitarian obligations. Border enforcement policies, detention practices, and asylum processing systems face criticism from human rights advocates who see violations of dignity and due process. The debate pits those emphasizing state sovereignty and security against those highlighting individual rights and international protection obligations.

## The Big Issue 3: Police Accountability and Criminal Justice Reform

How ${country} balances public safety with civil liberties shows up starkly in policing and criminal justice. Questions about excessive force, discriminatory enforcement, prison conditions, and due process protections generate ongoing controversy. Reform advocates push for greater accountability, while others defend existing practices as necessary for maintaining order. The space between these positions is where human rights debates play out daily.

## The International Angle

${country} participates in international human rights frameworks—UN treaty bodies, regional human rights systems, bilateral dialogues—while maintaining that domestic institutions should address problems. This creates productive tension: international scrutiny provides leverage for domestic activists, while sovereignty concerns limit external influence. ${country} must balance learning from international standards with resisting what it perceives as cultural imperialism or political interference.

## The Bottom Line

Human rights in ${country} aren't absent or guaranteed—they're contested terrain. Legal protections exist but require enforcement. Vulnerable populations have advocates but face ongoing discrimination. Progress happens through sustained pressure: litigation, activism, journalism, and political organizing. The work is incremental, frustrating, and essential. Rights aren't bestowed by enlightened leaders; they're claimed by people insisting on dignity and backed by those willing to fight for principles even when convenient to ignore them.`,

    'authoritarian_context': `# ${country} - Human Rights

To understand human rights in ${country}, start with the constraints under which activists, journalists, and ordinary citizens operate. Peaceful dissent carries risk: detention, harassment, job loss, or worse. International observers document violations—arbitrary arrests, torture, unfair trials, restrictions on expression and assembly. But the reality is more complex than catalogs of abuses. People navigate repression, find spaces for resistance, and maintain dignity even when formal rights protections are absent or selectively enforced.

## The Big Issue 1: Repression of Dissent and Civil Society

${country}'s government treats independent civil society, media, and political opposition as threats rather than essential democratic components. Activists face surveillance, harassment, and arrest on vague charges like "undermining state security" or "spreading false information." Human rights organizations operate under constant pressure, sometimes forced to register as "foreign agents" or shut down entirely. This doesn't eliminate dissent—it drives it underground, into diaspora communities, or into carefully coded language that evades censorship.

## The Big Issue 2: Systemic Torture, Detention, and Enforced Disappearances

For those who openly challenge ${country}'s government, consequences can be severe. Reports document torture in detention, forced confessions, disappeared activists, and political prisoners serving lengthy sentences for peaceful advocacy. Families spend years seeking information about detained relatives. International organizations call for release and accountability, but domestic legal systems offer little recourse when the state itself is the violator. These aren't abstractions—they're individual stories of suffering that deserve attention even when solutions aren't obvious.

## The Big Issue 3: Ethnic, Religious, or Political Persecution

Certain groups in ${country} face particular targeting: ethnic minorities, religious communities, political opponents, or anyone deemed insufficiently loyal. This can involve mass surveillance, movement restrictions, forced assimilation policies, or outright violence. The government frames these measures as counter-terrorism, national security, or maintaining social stability. Human rights advocates see systematic persecution designed to eliminate dissent and enforce conformity.

## The International Angle

${country} faces international criticism through UN mechanisms, sanctions, and diplomatic pressure. Sometimes this has impact—securing prisoner releases, preventing specific abuses, or providing cover for domestic activists. Often it doesn't—governments dismiss criticism as interference, double standards, or Western imperialism. The challenge for international human rights advocates is balancing vocal condemnation (which validates domestic activists) with pragmatic engagement (which might create space for incremental improvement). There are no easy answers when dealing with governments fundamentally opposed to rights-based governance.

## The Bottom Line

Human rights in ${country} exist primarily through people's courageous insistence on dignity despite repression. Formal protections are weak or absent. Accountability is rare. Yet resistance continues: underground media, exile activism, quiet acts of solidarity, and refusal to be silenced despite enormous personal cost. International attention matters—not because it quickly changes government behavior, but because it validates those suffering, provides a record of abuse, and maintains pressure that occasionally creates openings. The work is often thankless, progress is uncertain, but bearing witness and supporting those resisting injustice remains a moral imperative.`,

    'conflict_humanitarian': `# ${country} - Human Rights

Human rights in ${country} are inseparable from ongoing conflict, displacement, and humanitarian crisis. Civilians bear the brunt: indiscriminate attacks, sexual violence, forced displacement, lack of access to food, water, and medical care. Multiple armed actors—government forces, rebel groups, foreign militaries, militias—commit abuses with impunity. International humanitarian law is routinely violated. And millions of people simply try to survive day to day, their basic rights to life, security, and dignity under constant threat.

## The Big Issue 1: Civilian Protection in Active Conflict

${country}'s conflict directly threatens civilian lives. Airstrikes hit residential areas, hospitals, and schools—sometimes deliberately, sometimes with reckless disregard. Ground fighting traps civilians in crossfire. Siege tactics cut off food, water, and medical supplies. International humanitarian law prohibits deliberate targeting of civilians and requires distinction between military and civilian targets. In practice, these rules are violated constantly, with no immediate accountability. Civilian suffering isn't collateral damage—it's a predictable consequence of warfare where protecting non-combatants takes second priority to military objectives.

## The Big Issue 2: Displacement, Refugees, and Humanitarian Access

Millions have fled ${country}'s violence—internally displaced, living in camps, or seeking refuge abroad. Those who remain in conflict zones face restricted humanitarian access as armed groups block aid delivery, sometimes deliberately weaponizing hunger and medical care. Refugees in neighboring countries strain resources, face discrimination, and often lack legal status or work rights. Children grow up in camps without education. Families spend years in limbo. The international response—humanitarian aid, resettlement programs—addresses some immediate needs but can't solve the fundamental problem: ongoing conflict that makes return impossible.

## The Big Issue 3: Accountability for War Crimes and Atrocities

Documented abuses in ${country} include mass killings, torture, sexual violence used as a weapon of war, and deliberate starvation of civilians. International mechanisms—UN investigations, International Criminal Court proceedings, human rights documentation—create records of abuse and sometimes issue arrest warrants. But accountability is rare when perpetrators control territory, enjoy foreign backing, or operate in contexts where domestic legal systems are non-functional. Victims want justice; they often get, at best, acknowledgment of their suffering and promises of future accountability that may never materialize.

## The International Angle

${country}'s crisis demands international response: humanitarian aid, refugee protection, diplomatic efforts to end conflict, and accountability mechanisms for war crimes. But international engagement is constrained by competing geopolitical interests, limited appetite for intervention, and the complexity of conflicts with multiple actors and no clear good guys. The result is often inadequate: aid that doesn't reach everyone who needs it, diplomatic initiatives that stall, and accountability processes that move slowly while abuses continue. Human rights advocates push for more action while recognizing that external actors can't solve conflicts rooted in domestic and regional power struggles.

## The Bottom Line

In ${country}, human rights are not abstract principles—they're survival questions for millions of people. Will today's airstrike hit your neighborhood? Can you access food? Is the route out still open? These are the realities of life under conflict. International human rights frameworks matter because they insist that even in war, some protections are absolute: don't target civilians, allow humanitarian access, treat detainees humanely. These rules are violated constantly in ${country}, but maintaining them as standards is essential. It creates accountability frameworks for eventual justice, guides humanitarian response, and affirms that what's happening to civilians isn't acceptable or inevitable—it's a series of choices by armed actors who should be held responsible.`
  }

  // Categorize countries
  const democratic = ['United States', 'United Kingdom', 'Germany', 'France', 'Canada', 'Australia', 'Japan', 'South Korea', 'Spain', 'Italy', 'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Switzerland', 'Austria', 'Ireland', 'New Zealand', 'Portugal', 'Czech Republic', 'Poland', 'Chile', 'Uruguay', 'Argentina', 'Costa Rica']
  const authoritarian = ['China', 'Russia', 'Iran', 'North Korea', 'Saudi Arabia', 'United Arab Emirates', 'Egypt', 'Turkey', 'Vietnam', 'Cuba', 'Venezuela', 'Nicaragua', 'Belarus', 'Uzbekistan', 'Kazakhstan', 'Azerbaijan', 'Bahrain', 'Qatar', 'Oman', 'Rwanda', 'Ethiopia', 'Algeria']
  const conflict = ['Syria', 'Yemen', 'Afghanistan', 'Myanmar', 'Sudan', 'Somalia', 'Libya', 'Iraq', 'Democratic Republic of Congo', 'Haiti', 'Palestine', 'Ukraine']

  let template: string
  let issues: string[]

  if (conflict.includes(country)) {
    template = templates.conflict_humanitarian
    issues = [
      'Civilian Protection Amid Active Armed Conflict',
      'Mass Displacement and Restricted Humanitarian Access',
      'Accountability for War Crimes and Atrocities'
    ]
  } else if (authoritarian.includes(country)) {
    template = templates.authoritarian_context
    issues = [
      'Systematic Repression of Dissent and Civil Society',
      'Torture, Arbitrary Detention, and Enforced Disappearances',
      'Persecution of Ethnic, Religious, or Political Minorities'
    ]
  } else {
    template = templates.democratic_tensions
    issues = [
      'Structural Discrimination Against Marginalized Communities',
      'Migration, Asylum Processing, and Border Enforcement',
      'Police Accountability and Criminal Justice Reform'
    ]
  }

  return { summary: template, issues }
}

// MILITARY & DEFENSE (Tom Ricks voice - expertise without jingoism, critical analysis, strategic focus)
function generateMilitaryContent(country: string): CategoryContent {
  const templates: Record<string, string> = {
    'major_military': `# ${country} - Military & Defense

Let's be blunt about ${country}'s military posture: it reflects strategic choices about threats, alliances, and the role of military power in national policy. Defense budgets, force structure, and operational priorities reveal what leadership actually believes about security—not what they say in speeches, but where they put resources and personnel. Right now, ${country}'s military faces questions about modernization, readiness, and whether force structure matches actual strategic requirements or just reflects bureaucratic momentum.

## The Big Issue 1: Defense Spending and Procurement Priorities

${country} allocates substantial resources to defense—billions annually for personnel, operations, and equipment. The question is whether that money buys the right capabilities. Legacy procurement programs consume budgets with weapons systems designed for past threats. New technologies—drones, cyber capabilities, AI-enabled systems—require different investments. Meanwhile, personnel costs keep rising, maintenance backlogs grow, and readiness suffers when funds go to shiny new equipment rather than spare parts and training.

The deeper problem is that defense budgets are political documents. They reflect domestic constituencies (defense contractors, military bases in key districts) as much as strategic analysis. Canceling programs means job losses. Closing bases triggers congressional opposition. So ${country} often funds military capabilities it doesn't need while under-resourcing actual requirements. That's not strategy—it's politics.

## The Big Issue 2: Force Structure and Operational Readiness

${country}'s military maintains certain force structure—number of brigades, ships, aircraft—based on planning assumptions about what wars it might fight. But readiness is different from raw numbers. Are units trained? Is equipment maintained? Can the military actually deploy and sustain operations? Often the answer is more complex than leadership admits.

Budget constraints mean training gets cut, maintenance gets deferred, and units report "ready" when they're really not. Then when operations start, the military discovers what it actually can and can't do. Afghanistan and Iraq taught this lesson repeatedly: American military could topple governments quickly but struggled with counterinsurgency, local politics, and building functional partner forces. The problem wasn't courage or equipment—it was strategic mismatch between what military could do versus what policymakers asked it to do.

## The Big Issue 3: Alliance Management and Strategic Commitments

${country}'s security doesn't exist in isolation—it's embedded in alliances, partnerships, and strategic commitments. These relationships provide forward presence, intelligence sharing, burden-sharing, and political legitimacy. They also create obligations: treaty commitments, basing agreements, and expectations of support in crises.

Managing these relationships requires balancing reassurance (convincing allies you'll honor commitments) with restraint (not getting dragged into others' conflicts). Right now, ${country} faces questions about the credibility of its security guarantees, burden-sharing with allies, and whether alliance structures designed for past threats still serve current strategic needs.

## The International Angle

${country}'s military posture shapes regional security dynamics. Allies calibrate their own defense investments based on confidence in ${country}'s commitments. Adversaries test resolve through gray-zone operations—activities below the threshold of armed conflict. Regional powers pursue their own military modernization, creating action-reaction cycles where everyone claims to be responding defensively but collectively drives arms competition.

The challenge is strategic stability: maintaining credible deterrence without triggering arms races or accidental escalation. That requires clear signaling about intentions, transparent military activities, and communication channels even with adversaries. It's boring, unglamorous work—but it's how you avoid wars that no one actually wants.

## The Bottom Line

${country}'s military faces a fundamental challenge: aligning force structure, operational capabilities, and strategic commitments with actual security requirements in a resource-constrained environment. That means making hard choices about what to prioritize, what to cut, and what risks to accept. It means resisting the bureaucratic tendency to protect every program and base. And it means honest assessment of what military power can and can't achieve—because the worst military failures come from politicians assigning missions that sound good but aren't actually accomplishable with available resources and realistic timelines.

Strategic clarity matters more than equipment quantities. Readiness matters more than raw force size. And honesty about limits matters more than confident promises that everything's under control. ${country}'s military is professionally competent, but it can't succeed without leadership willing to make strategic choices and accept political costs of necessary reforms.`,

    'regional_military': `# ${country} - Military & Defense

${country}'s military operates in a specific regional context—neighbors with different capabilities, territorial disputes, potential flashpoints, and shifting power dynamics. Its force structure reflects these realities: not global power projection, but credible defense, deterrence of regional threats, and possibly limited offensive capabilities. Understanding ${country}'s military requires looking at who it's designed to fight and what scenarios keep defense planners awake at night.

## The Big Issue 1: Regional Threat Assessment and Force Modernization

${country} structures its military around specific threats—border disputes, historical adversaries, insurgent groups, or great power pressure. This shapes procurement priorities: fighter aircraft for air defense, armor for land warfare, or coastal defense systems for maritime security. The challenge is modernizing against current threats while preparing for future scenarios with finite budgets.

Older equipment needs replacement. Personnel require modern training. But weapons systems are expensive, and ${country} faces choices about whether to buy foreign equipment (getting capability quickly but creating dependency) or develop domestic systems (building industrial capacity but taking longer and risking cost overruns). There's no obviously right answer—just trade-offs between readiness, sovereignty, and fiscal constraints.

## The Big Issue 2: Civil-Military Relations and Defense Governance

How ${country}'s military relates to civilian leadership matters enormously. Professional militaries subordinate themselves to elected civilians, provide honest advice even when unwelcome, and implement policy they might disagree with. But civil-military relations are complicated—especially in countries where military has historically played political roles, where coup risks exist, or where defense establishments have independent economic interests.

Even in stable democracies, tensions arise over defense budgets, operational authorities, and accountability for failures. The question is whether ${country} has institutions and norms that maintain civilian control while respecting military professionalism. When that balance breaks—either through military overreach or civilian incompetence in defense policy—strategic effectiveness suffers.

## The Big Issue 3: Regional Security Architecture and Alliance Choices

${country} doesn't provide for its own security in isolation—it participates in regional security arrangements, bilateral alliances, or maintains strategic ambiguity about partnerships. These choices matter: alliances provide reassurance and capabilities but also create obligations. Non-alignment provides flexibility but might mean isolation in crises.

Right now, regional security dynamics are shifting. Great power competition intrudes into regional conflicts. Historical alliances face strain. New partnerships form around shared concerns. ${country} must navigate these shifts while maintaining credible deterrence and avoiding escalation spirals it can't control.

## The International Angle

${country}'s military capabilities and posture get attention beyond its borders—from allies assessing reliability, adversaries calculating risks, and great powers considering regional influence. Arms sales, training partnerships, and joint exercises signal relationships. Military modernization prompts neighbors' responses. And in any regional crisis, ${country}'s military choices (mobilize, stand down, reinforce borders) send signals that can escalate or defuse tensions.

The goal is strategic communication: making clear what ${country} will and won't do militarily, what red lines exist, and how it will respond to various scenarios. Ambiguity sometimes serves deterrence ("don't test us because we might respond"), but it can also invite miscalculation. Clarity risks constraining options but reduces accident risks.

## The Bottom Line

${country}'s military isn't competing for global dominance—it's addressing specific regional security requirements with limited resources. Success means credible deterrence, sufficient readiness to respond to likely contingencies, and professional forces that can execute missions without creating worse problems. It means avoiding the procurement death spiral of expensive weapons that consume budgets without matching actual needs. And it means honest assessment of capabilities—because promising more than you can deliver invites adversaries to test you and creates domestic political pressure for military action you can't successfully execute.

Regional military balance is dynamic—${country}'s choices affect neighbors' choices in ongoing security competitions. The challenge is maintaining sufficient capability to deter threats without bankrupting the budget or triggering arms races that leave everyone less secure. That requires strategic discipline, procurement reform, and civilian leadership willing to make hard choices about what military can and should do.`,

    'constrained_military': `# ${country} - Military & Defense

${country}'s military operates under severe constraints—limited budgets, obsolete equipment, training deficiencies, and sometimes questionable loyalty to civilian authority. The gap between official force structure (divisions on paper, aircraft in inventory) and actual combat capability can be enormous. Understanding ${country}'s military means recognizing these gaps and assessing what it can actually do versus what leadership claims.

## The Big Issue 1: Resource Constraints and Capability Gaps

Defense budgets in ${country} struggle to maintain basic readiness, let alone modernize. Equipment is aging—vehicles, aircraft, weapons systems purchased decades ago and kept running through improvisation. Spare parts are scarce. Ammunition stocks are limited. Training is minimal due to fuel costs and ammunition shortages.

The result is hollow force structure: units that exist on paper but can't deploy or fight effectively. Leadership often obscures this reality, inflating readiness reports for political reasons. But in any actual conflict, these deficiencies become brutally apparent. The question isn't whether ${country}'s military looks impressive in parades—it's whether it can execute actual operations with available resources.

## The Big Issue 2: Professionalism, Corruption, and Morale

Military effectiveness requires more than equipment—it needs professional leadership, well-trained troops, and institutional cultures that prioritize mission over personal enrichment. In ${country}, the military sometimes struggles with corruption (officers diverting funds, phantom soldiers on payrolls), nepotism in promotions, and morale problems stemming from low pay and poor conditions.

These problems are hard to fix because they're embedded in broader governance issues. If civilian government is corrupt, military will be too. If rule of law is weak, military justice systems won't function properly. If meritocracy doesn't exist in society, it won't exist in officer corps. Reforming the military requires reforming the state—which is much harder than buying new weapons.

## The Big Issue 3: Internal Security vs. External Defense

${country}'s military often focuses more on internal security—counterinsurgency, regime protection, border control—than external defense. This makes sense when domestic threats seem more immediate than foreign invasion. But it shapes force structure away from conventional war-fighting toward policing roles.

This creates problems: military gets pulled into politics, officer corps prioritizes loyalty over competence, and capabilities for territorial defense atrophy. If external threat actually emerges, the military might not be prepared. Meanwhile, using military for internal security can mean human rights abuses, alienation of populations, and political role for institution that should remain subordinate to civilians.

## The International Angle

${country} often depends on security assistance from stronger powers—military aid, training programs, equipment sales. This provides access to capabilities it couldn't otherwise afford, but creates dependencies. Donor countries use security assistance for influence, sometimes pushing ${country} toward partnerships it might not otherwise choose.

There's also risk of capability mismatch: foreign donors provide equipment suited to their own strategic context, not necessarily ${country}'s actual needs. Advanced fighter aircraft sound impressive, but if ${country} can't afford to fly them or lacks trained pilots, they're hangar decorations. Better might be basic infantry equipment, logistics support, and professional military education—less glamorous but more useful.

## The Bottom Line

${country}'s military faces a harsh reality: limited resources, significant capability gaps, and missions that often exceed realistic capacity. Honest assessment requires acknowledging these limits rather than pretending capability exists when it doesn't. That means prioritizing ruthlessly—focusing on core missions it can accomplish rather than trying to be a well-rounded force that does everything poorly.

It means investing in people—recruitment, training, pay, professionalism—because motivated, competent troops matter more than fancy equipment. And it means civilian leadership understanding military limitations and not assigning missions the force can't execute. The worst outcome is sending underprepared, under-resourced military into operations where failure is foreordained. That wastes lives, undermines institutions, and solves nothing. Better to maintain modest but credible capability focused on realistic missions than to pretend strength that doesn't exist.`
  }

  // Categorize countries
  const majorMilitary = ['United States', 'China', 'Russia', 'United Kingdom', 'France', 'India', 'Japan', 'South Korea', 'Turkey', 'Israel', 'Germany', 'Australia', 'Canada', 'Italy', 'Spain', 'Poland', 'Ukraine', 'Taiwan', 'Saudi Arabia', 'Iran']
  const regionalMilitary = ['Brazil', 'Pakistan', 'Indonesia', 'Mexico', 'Egypt', 'Thailand', 'Vietnam', 'South Africa', 'Argentina', 'Chile', 'Colombia', 'Philippines', 'Singapore', 'Malaysia', 'Kazakhstan', 'Greece', 'Netherlands', 'Sweden', 'Norway', 'Finland', 'United Arab Emirates', 'Kuwait', 'Jordan', 'Morocco']

  let template: string
  let issues: string[]

  if (majorMilitary.includes(country)) {
    template = templates.major_military
    issues = [
      'Defense Spending, Procurement, and Budget vs Strategy Mismatch',
      'Force Structure, Readiness, and Capability-Mission Alignment',
      'Alliance Management and Strategic Commitment Credibility'
    ]
  } else if (regionalMilitary.includes(country)) {
    template = templates.regional_military
    issues = [
      'Regional Threat Assessment and Force Modernization Priorities',
      'Civil-Military Relations and Defense Governance',
      'Regional Security Architecture and Alliance Strategy'
    ]
  } else {
    template = templates.constrained_military
    issues = [
      'Severe Resource Constraints and Capability Gaps',
      'Professionalism, Corruption, and Morale Challenges',
      'Internal Security Focus vs External Defense Preparedness'
    ]
  }

  return { summary: template, issues }
}

// REAL ESTATE & HOUSING (Matthew Desmond voice - housing as human right, inequality focus, systemic analysis)
function generateRealEstateContent(country: string): CategoryContent {
  const templates: Record<string, string> = {
    'housing_crisis': `# ${country} - Real Estate & Housing

The housing market in ${country} has become a sorting mechanism—determining not just where people live, but their access to opportunity, economic security, and basic stability. Rising costs, insufficient supply, and financialization of housing have transformed what should be a fundamental need into a speculative asset class. For millions, the question isn't finding their dream home—it's finding any affordable place to live.

## The Big Issue 1: Affordability Crisis and Wage-Rent Gap

In ${country}, housing costs have outpaced income growth for decades. What once took 25-30% of median income now consumes 40-50% or more in major cities. Young people can't afford to buy. Working families spend so much on rent that other necessities—healthcare, childcare, food—get squeezed. The elderly on fixed incomes face displacement as neighborhoods gentrify.

This isn't a natural market outcome—it's the result of policy choices. Zoning restrictions limit new construction. Tax policies favor homeowners over renters and treat housing as investment rather than necessity. Wages stagnate while housing becomes a wealth-building asset for those who already own, and an increasingly unaffordable burden for those who don't. The affordability gap is fundamentally about inequality: housing reflects and reinforces broader economic disparities.

## The Big Issue 2: Supply Constraints and Land Use Politics

${country} faces a housing supply shortage, but not because of any physical scarcity of land or construction capacity. It's political: existing homeowners resist new development that might affect property values or neighborhood character. Local zoning boards block apartment buildings. Environmental reviews become tools for preventing construction. "Affordable housing" requirements make projects financially nonviable.

The result is insufficient housing supply in places where people want to live and where jobs exist. Workers commute longer distances, increasing transportation costs and carbon emissions. Essential workers—teachers, nurses, service employees—can't afford to live in the communities they serve. And homelessness grows because the math is simple: when housing supply doesn't meet demand, prices rise until the poorest can't compete.

Behind the supply crisis is a fundamental question: who has the right to live in a community? Existing residents argue for neighborhood preservation and local control. But when "local control" means excluding anyone who can't afford million-dollar homes, it's not democratic planning—it's exclusionary zoning that perpetuates segregation by class and often by race.

## The Big Issue 3: Financialization and Housing as Investment

Increasingly in ${country}, housing is treated as a financial asset rather than a place to live. Investors—from individual landlords to massive private equity firms—purchase properties to generate returns, not provide homes. This drives prices up, removes units from owner-occupied stock, and prioritizes profit over housing stability for residents.

When rent is seen primarily as investment yield, tenant concerns become obstacles to maximizing returns. Maintenance gets deferred. Evictions become business strategy when tenant turnover allows rent increases. And housing policy debates get dominated by property rights arguments that treat homeownership and landlord profits as sacrosanct while treating housing access as a privilege to be earned rather than a basic necessity.

Matthew Desmond's research on eviction shows this dynamic clearly: in many markets, eviction is routine business practice, with enormous consequences for families—job loss, school disruption, health impacts, and downward mobility spirals. Yet it's treated as individual failure rather than systemic exploitation embedded in housing markets that extract maximum profit from vulnerable people with few options.

## The International Angle

Housing challenges in ${country} mirror global patterns: in London, Vancouver, Sydney, Mumbai, and São Paulo, housing costs squeeze working families while investors treat real estate as safe wealth storage. International capital flows into property markets, sometimes as legitimate investment, sometimes as money laundering or capital flight from unstable economies. This drives prices further from local wage levels.

Meanwhile, different countries try different policy responses: Vienna's social housing program keeps most housing affordable through public ownership. Singapore's public housing serves 80% of the population. But in many markets, including ${country}, policy tilts toward treating housing as commodity and investment, with predictable results for those priced out.

## The Bottom Line

Housing in ${country} is a crisis of choices—policy choices about taxation, zoning, tenant protections, and whether housing is primarily a human right or an investment asset. The current trajectory benefits property owners and investors while creating precarity for renters, excluding the poor, and pushing essential workers to the margins.

Solving this requires confronting uncomfortable truths: housing abundance requires building more, especially in high-demand areas, which means overriding local opposition to density. It requires treating tenant stability as seriously as property rights. It means reconsidering tax policies that subsidize homeownership for the wealthy while doing little for renters. And fundamentally, it means asking what kind of society ${country} wants: one where housing security is broadly accessible, or one where it's a luxury reserved for those who can afford escalating costs.

The answers aren't just technical—they're moral and political questions about whose interests matter in how communities develop and who has the right to stable housing in places where opportunities exist.`,

    'emerging_market': `# ${country} - Real Estate & Housing

Housing in ${country} is undergoing rapid transformation: urbanization, rising incomes, property development booms, and emerging mortgage markets. Millions are moving from rural areas to cities, seeking economic opportunities and modern amenities. But this transition is creating housing challenges as supply struggles to keep pace with demand, informal settlements expand, and questions arise about who benefits from urban development.

## The Big Issue 1: Rapid Urbanization and Informal Settlements

${country}'s cities are growing faster than formal housing markets can accommodate. The result: informal settlements where residents build incrementally on land they don't legally own, without connections to water, sewerage, or electricity grids. These communities house substantial populations—hardworking people contributing to urban economies while living in precarious conditions.

Governments face difficult choices: forcibly clear informal settlements (displacing residents and destroying their self-built homes), ignore them (allowing expansion but leaving residents without basic services), or attempt upgrading (providing infrastructure and legal recognition). Each approach has costs. Clearance is traumatic and often just moves people elsewhere. Ignoring settlements means entire communities lack basic services. Upgrading is expensive and complex but acknowledges reality: people need to live somewhere, and if formal markets don't provide affordable options, informal settlement is rational response.

## The Big Issue 2: Property Development, Speculation, and Displacement

As ${country}'s economy grows, property becomes an investment vehicle. Developers build for profit, often targeting wealthier buyers while affordable housing remains scarce. This creates paradox: construction booms exist alongside housing shortages for working-class families.

Speculation drives prices beyond local wage levels. Land prices in urban centers soar. Long-time residents face displacement as neighborhoods redevelop. The urban poor get pushed to peripheries with longer commutes and less access to jobs and services. Development benefits property owners and investors while creating insecurity for tenants and informal dwellers who lack ownership claims.

The question is whether ${country}'s urbanization serves its population or primarily generates profits for developers and speculators. Sustainable urban development requires housing for all income levels, infrastructure investment that serves everyone, and policies preventing displacement of vulnerable populations.

## The Big Issue 3: Housing Finance and Mortgage Market Development

${country} is developing mortgage markets, allowing more people to purchase rather than rent. This can build middle-class wealth and housing security. But it also creates risks: household debt increases, property bubbles form, and financial crises can follow if mortgage markets aren't properly regulated.

Additionally, mortgage access often correlates with existing inequality—those with formal employment, documented income, and credit history can borrow; informal workers can't. This means mortgage markets help some households while leaving others dependent on rental markets where tenant protections are weak and housing quality varies widely.

## The International Angle

${country}'s housing challenges reflect patterns across developing economies: rapid urbanization, emerging property markets, and tensions between economic development and housing accessibility. International institutions promote various approaches—land titling programs, mortgage market development, slum upgrading—with mixed results. The challenge is adapting policies to local contexts rather than importing models that worked elsewhere under different conditions.

Foreign investment in ${country}'s property markets can bring capital but also price volatility. When international investors see ${country} as emerging market opportunity, they bid up property prices beyond local affordability. This benefits sellers but excludes local buyers and creates vulnerability to capital flight.

## The Bottom Line

Housing in ${country} is at a crossroads: urbanization and economic development create opportunities but also risks. The trajectory depends on policy choices about land use, tenant protections, informal settlement recognition, and whether development serves population needs or primarily investment returns.

The optimistic scenario: ${country} learns from others' mistakes, building inclusive cities with mixed-income housing, good public transit, and recognition that housing security enables economic participation and social stability. The pessimistic scenario: speculative development, displacement of the poor, sprawling informal settlements, and housing inequality that embeds class divisions in urban geography.

Which path ${country} takes depends on whether policymakers, developers, and citizens recognize housing not just as real estate market but as foundation for inclusive urban development. That requires prioritizing housing accessibility alongside economic growth—not as competing goals but as mutually reinforcing elements of sustainable development.`,

    'constrained_housing': `# ${country} - Real Estate & Housing

Housing in ${country} reflects broader challenges of poverty, limited state capacity, and resource constraints. Formal housing markets serve a small slice of the population. Most people find shelter through informal arrangements, extended family, self-construction, or precarious rentals. Government housing programs exist but reach only a fraction of those in need. The question isn't finding ideal homes—it's achieving basic habitability and security of tenure for millions living in inadequate conditions.

## The Big Issue 1: Housing Scarcity and Inadequate Conditions

Much of ${country}'s population lives in housing that lacks basic amenities: reliable electricity, clean water, sanitation, weatherproofing. Some occupy structures they built themselves on land they don't own. Others crowd multiple families into small spaces. Still others have no housing at all, sheltering wherever possible.

This isn't about preferences or lifestyle—it's about survival on limited means in contexts where formal housing is unaffordable and government capacity to provide alternatives is constrained. People display remarkable resourcefulness in creating shelter, but resourcefulness doesn't substitute for adequate housing. Children growing up without clean water, adequate space, or secure tenure face lifelong disadvantages. Housing inadequacy perpetuates poverty across generations.

## The Big Issue 2: Insecure Tenure and Forced Evictions

Many residents in ${country} lack formal ownership or tenancy rights. They occupy land informally, rent without contracts, or live in structures that could be demolished without notice. This insecurity is psychologically and economically devastating: you can't improve a home you might lose tomorrow, you can't use housing as collateral for business loans, and you live with constant threat of displacement.

Forced evictions—whether for infrastructure projects, urban redevelopment, or arbitrary enforcement—destroy people's lives. They lose not just shelter but also proximity to jobs, children's schools, and social networks. Compensation is often inadequate or absent. And alternative housing is rarely provided. International human rights frameworks recognize housing rights and protection from arbitrary eviction, but enforcing these rights requires state capacity and political will that ${country} often lacks.

## The Big Issue 3: Limited State Capacity and Housing Policy

${country}'s government faces enormous demands: health, education, infrastructure, economic development. Housing competes with other urgent needs for scarce resources. Public housing programs exist but reach small percentages of those in need. Subsidies for private housing primarily benefit those who can already nearly afford housing. And regulatory capacity to ensure housing quality or protect tenant rights is limited.

International development assistance sometimes funds housing projects, but these tend to be small-scale demonstrations rather than systemic solutions. The fundamental challenge is that adequate housing for everyone in ${country} would require sustained investment well beyond available resources. This leaves most people finding housing through informal means—which works to an extent but creates precarity and inadequate conditions that formal markets and strong states in wealthier countries have largely addressed.

## The International Angle

Housing challenges in ${country} mirror those across the developing world: rapid population growth, rural-to-urban migration, limited resources, and weak institutional capacity. International focus has shifted over decades—from massive public housing projects (often failures) to enabling private markets (which exclude the poor) to upgrading informal settlements (helpful but limited in scope).

The reality is that adequate housing for billions in low-income countries requires resources those countries don't have. International assistance helps at the margins but can't substitute for domestic resources and institutional capacity that take decades to build. Meanwhile, people in ${country} continue finding shelter however possible, demonstrating resilience that doesn't excuse the injustice of so many living in inadequate conditions.

## The Bottom Line

Housing in ${country} won't be solved quickly or easily. Resources are scarce, needs are enormous, and competing priorities are equally urgent. But policy choices still matter: recognizing informal settlements and providing basic services is better than clearance and displacement. Protecting tenant rights even in informal markets is better than treating housing as pure property owner prerogative. Investing in incrementally upgrading housing stock is better than ignoring reality of how most people actually live.

Matthew Desmond's core insight applies globally: housing is foundational to everything else—health, education, economic participation, dignity. ${country} faces housing challenges at a scale that seems overwhelming. But that can't mean accepting inadequate conditions as inevitable. It means sustained commitment to incremental improvement, protecting residents from the worst harms of housing insecurity, and recognizing that policy choices—even within severe constraints—create more or less exploitative, more or less humane housing systems. Progress might be slow, but direction matters.`
  }

  // Categorize countries
  const housingCrisis = ['United States', 'United Kingdom', 'Canada', 'Australia', 'New Zealand', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Ireland', 'France', 'Spain', 'Portugal', 'Israel', 'Singapore', 'Hong Kong', 'South Korea', 'Japan']
  const emergingMarket = ['China', 'India', 'Brazil', 'Mexico', 'Indonesia', 'Turkey', 'South Africa', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Thailand', 'Vietnam', 'Philippines', 'Malaysia', 'Egypt', 'Morocco', 'Kenya', 'Ghana', 'Nigeria', 'Poland', 'Czech Republic', 'Romania']

  let template: string
  let issues: string[]

  if (housingCrisis.includes(country)) {
    template = templates.housing_crisis
    issues = [
      'Affordability Crisis and Growing Wage-Rent Gap',
      'Supply Constraints and NIMBYism in Land Use Politics',
      'Financialization of Housing and Eviction as Business Model'
    ]
  } else if (emergingMarket.includes(country)) {
    template = templates.emerging_market
    issues = [
      'Rapid Urbanization and Expansion of Informal Settlements',
      'Speculative Development and Urban Displacement',
      'Emerging Mortgage Markets and Financial Inclusion Gaps'
    ]
  } else {
    template = templates.constrained_housing
    issues = [
      'Widespread Housing Scarcity and Inadequate Living Conditions',
      'Insecure Tenure and Forced Eviction Risks',
      'Limited State Capacity for Housing Policy Implementation'
    ]
  }

  return { summary: template, issues }
}

// Main generation function
async function generateAllCategories() {
  console.log('='.repeat(70))
  console.log('FOUR-CATEGORY DIRECT GENERATION - ALL 114 COUNTRIES')
  console.log('='.repeat(70))
  console.log('Categories:')
  console.log('  1. Science & Research (Ed Yong voice)')
  console.log('  2. Human Rights (Samantha Power voice)')
  console.log('  3. Military & Defense (Tom Ricks voice)')
  console.log('  4. Real Estate & Housing (Matthew Desmond voice)')
  console.log()
  console.log(`Total writeups to generate: ${ALL_COUNTRIES.length} × 4 = ${ALL_COUNTRIES.length * 4}`)
  console.log('='.repeat(70))
  console.log()

  const categories = [
    { id: 'science', name: 'Science & Research', generator: generateScienceContent },
    { id: 'humanrights', name: 'Human Rights', generator: generateHumanRightsContent },
    { id: 'military', name: 'Military & Defense', generator: generateMilitaryContent },
    { id: 'realestate', name: 'Real Estate & Housing', generator: generateRealEstateContent },
  ]

  for (const category of categories) {
    console.log(`\n${'='.repeat(70)}`)
    console.log(`CATEGORY: ${category.name.toUpperCase()}`)
    console.log(`${'='.repeat(70)}\n`)

    let generated = 0
    let skipped = 0
    let errors = 0

    for (let i = 0; i < ALL_COUNTRIES.length; i++) {
      const country = ALL_COUNTRIES[i]

      // Progress report every 30 countries
      if (i > 0 && i % 30 === 0) {
        console.log(`\n${'─'.repeat(70)}`)
        console.log(`📊 PROGRESS REPORT [${category.name}]`)
        console.log(`   Processed: ${i}/${ALL_COUNTRIES.length} countries`)
        console.log(`   Generated: ${generated} | Skipped: ${skipped} | Errors: ${errors}`)
        console.log(`${'─'.repeat(70)}\n`)
      }

      console.log(`[${(i + 1).toString().padStart(3)}/${ALL_COUNTRIES.length}] ${country.name}`)

      try {
        // Check if already exists
        const existing = await prisma.locationSummary.findUnique({
          where: {
            name_type_category: {
              name: country.name,
              type: 'country',
              category: category.id
            }
          }
        })

        if (existing) {
          console.log(`        ⏭️  Already exists - skipping`)
          skipped++
          continue
        }

        // Generate content
        const { summary, issues } = category.generator(country.name)

        // Save to database
        await prisma.locationSummary.create({
          data: {
            name: country.name,
            type: 'country',
            country: country.name,
            lat: country.lat,
            lng: country.lng,
            category: category.id,
            summary,
            issues: JSON.stringify(issues),
            topStories: JSON.stringify([]),
            storyCount: 0,
            updatedAt: new Date()
          }
        })

        generated++
        console.log(`        ✅ Generated (${summary.length} chars, ${issues.length} issues)`)

      } catch (error) {
        console.error(`        ❌ Error:`, error)
        errors++
      }
    }

    console.log(`\n${'='.repeat(70)}`)
    console.log(`${category.name.toUpperCase()} - COMPLETE`)
    console.log(`Generated: ${generated} | Skipped: ${skipped} | Errors: ${errors}`)
    console.log(`Total: ${generated + skipped}/${ALL_COUNTRIES.length}`)
    console.log(`${'='.repeat(70)}`)
  }

  console.log(`\n\n${'='.repeat(70)}`)
  console.log('ALL FOUR CATEGORIES COMPLETE!')
  console.log(`${'='.repeat(70)}`)

  // Final summary
  const allSummaries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: { in: ['science', 'humanrights', 'military', 'realestate'] }
    }
  })

  const byCategory = allSummaries.reduce((acc, s) => {
    acc[s.category] = (acc[s.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  console.log('\n📊 FINAL SUMMARY:')
  categories.forEach(cat => {
    const count = byCategory[cat.id] || 0
    const percent = Math.round((count / ALL_COUNTRIES.length) * 100)
    const bar = '█'.repeat(Math.floor(percent / 2)) + '░'.repeat(50 - Math.floor(percent / 2))
    console.log(`   ${cat.name.padEnd(25)} ${count.toString().padStart(3)}/${ALL_COUNTRIES.length} [${bar}] ${percent}%`)
  })

  const totalGenerated = Object.values(byCategory).reduce((a, b) => a + b, 0)
  const totalPossible = ALL_COUNTRIES.length * 4
  const overallPercent = Math.round((totalGenerated / totalPossible) * 100)
  console.log(`\n   ${'TOTAL'.padEnd(25)} ${totalGenerated.toString().padStart(3)}/${totalPossible} ${'█'.repeat(Math.floor(overallPercent / 2))}░${50 - Math.floor(overallPercent / 2) > 0 ? '░'.repeat(50 - Math.floor(overallPercent / 2)) : ''} ${overallPercent}%`)
  console.log(`\n${'='.repeat(70)}`)
}

generateAllCategories()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
