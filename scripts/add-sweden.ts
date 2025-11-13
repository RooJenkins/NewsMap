import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SWEDEN_SUMMARY = {
  name: 'Sweden',
  type: 'country',
  lat: 60.1282,
  lng: 18.6435,
  country: 'Sweden',
  summary: `Sweden released its gang crime statistics for November 2025, and the numbers are absolutely brutal. The country now tracks 67,000 individuals connected to organized crime networks—17,500 active gang members plus another 50,000 people linked to gang-related violence. That's up from 14,000 active members just last year. Police Commissioner Petra Lundh, flanked by Justice Minister Gunnar Strömmer at a grim press conference in Stockholm on November 10, called the situation "extremely serious." The euphemism doesn't capture the reality: Sweden averaged more than one bombing per day in early 2025, marking the country's transformation from Nordic success story to Europe's gang violence capital. This isn't hyperbole—the European Parliament held emergency debates in February 2025 specifically on Sweden's gang crisis, with MEPs demanding cross-border cooperation to tackle criminal networks recruiting teenagers for contract killings. Meanwhile, the center-right coalition government has responded with the most restrictive immigration overhaul in Swedish history. Since April 2025, asylum seekers can no longer convert applications into work permits while staying in Sweden—a policy affecting 4,700 people overnight. By June, salary requirements for work permits jumped from 80% to 100% of Sweden's median salary. And from June 2026, citizenship will require eight years of residency (up from five), language proficiency tests, and proof of an "honest way of life" with no debts or criminal record. But here's the contradiction: while Sweden militarizes its borders against migrants, it's simultaneously courting nuclear energy investors with state aid worth billions and reversing a uranium mining ban that had stood since 2018. This is Sweden in November 2025: violent, anxious, and locked in an identity crisis about what kind of country it wants to be.

**The Big Issue 1: Gang Violence Crisis—67,000 Linked to Organized Crime**

Let's be clear about what's happening here: Sweden has lost control of parts of its urban areas to criminal gangs. The November 2025 police briefing laid it out starkly—17,500 active gang criminals, another 50,000 people in their orbit, operating across networks that span Stockholm, Gothenburg, and Malmö. These aren't street corner crews. They're organized crime syndicates running sophisticated operations: drug trafficking through Scandinavia's ports, money laundering via cryptocurrency, and contract violence carried out by teenagers recruited through social media. The signature tactic is bombings—explosives used to intimidate rivals, punish informants, and send messages. In January 2025 alone, Sweden recorded over 30 explosions, a rate exceeding one per day. By November, 2025 was on track to become one of the worst years on record for gang-related violence, rivaling the carnage of 2023 when deadly shootings prompted Prime Minister Ulf Kristersson to summon military chiefs for emergency consultations.

Here's what changed: Swedish police have revised their counting methodology, which partially explains the jump from 14,000 to 17,500 active members. But the revision doesn't account for the broader 67,000 figure—that's real expansion, driven by criminal networks exploiting Sweden's open borders, welfare systems, and legal protections that made prosecution difficult. The gangs recruit heavily among second-generation immigrant youths, particularly in segregated suburbs where unemployment runs high and social trust has collapsed. A November 2025 CNN investigation exposed how Swedish teenagers are being weaponized by gangs and foreign actors, recruited online for vandalism, arson, bombings, and even murder-for-hire. The going rate for a contract killing in Stockholm? As low as €5,000, paid in Bitcoin, carried out by 15-year-olds who face lighter juvenile sentences.

The government's response has been draconian: expanded police powers, military deployment to guard critical infrastructure, and cooperation with Europol to track cross-border crime networks. The February 2025 European Parliament debate saw Swedish MEPs plea for EU-wide intelligence sharing, arguing that gangs operate seamlessly across borders while police remain constrained by national jurisdictions. But here's the ugly political reality: the gang crisis has supercharged anti-immigration sentiment, validating the Sweden Democrats (the far-right party propping up Kristersson's minority government) and their narrative that mass immigration caused Sweden's violence epidemic. Whether that's empirically accurate is beside the point politically—it's become accepted truth for a growing share of Swedish voters, reshaping the country's immigration debate in ways unthinkable a decade ago.

**The Big Issue 2: Immigration Crackdown—The End of Swedish Exceptionalism**

Sweden's immigration system just underwent the most comprehensive restrictive overhaul in modern history, and the message is unmistakable: we're closed. On April 1, 2025, the Track Change Permit ("Sparbyte") was abolished. This had allowed asylum seekers to convert their applications into work permits if they secured employment while in Sweden. The Migration Agency estimates this affected 4,700 people overnight—individuals who had found jobs, established lives, and were now told to leave. No transitional provisions, no grace period. From June 2025, the salary threshold for work permits increased from 80% to 100% of Sweden's median salary, pricing out lower-wage workers. Deportation rules were tightened: expulsion decisions now ban re-entry for five years, and overstaying triggers automatic longer bans. And the headline reform: from June 2026, Swedish citizenship will require eight years of residency (up from five), Swedish language and societal knowledge tests, and an "honest way of life" standard barring anyone with unpaid debts, criminal records, or welfare dependency.

The government's logic is straightforward: reduce immigration pressure, improve integration for those who remain, and signal to voters that Sweden has regained control of its borders. On January 31, 2025, the government adopted a new integration policy objective emphasizing employment, language proficiency, and social cohesion over multiculturalism. The permanent residency rules were tightened, requiring higher income thresholds, spousal employment, and stripping automatic extensions for children over 18. The wealth requirement to support oneself and dependents was raised significantly. The intent: ensure that only economically productive, culturally integrated immigrants gain long-term residency.

But here's the contradiction: while Sweden militarizes its asylum system, it's simultaneously trying to attract highly skilled workers. The EU Blue Card reforms, effective January 2025, lowered salary thresholds and extended validity to four years for unlimited-duration contracts. Processing times for highly qualified talent were reduced to 30 days maximum. The message: Sweden wants engineers, doctors, and tech workers—preferably European or North American—but not refugees, low-wage laborers, or family reunifications from non-Western countries. Critics call it hypocritical and racially coded. The government insists it's pragmatic economic policy designed to sustain the welfare state. What's undeniable: Sweden's self-image as a humanitarian superpower, the country that welcomed more refugees per capita than any EU nation during the 2015 migrant crisis, is dead. The Sweden of 2025 is building walls, not bridges.

**The Big Issue 3: Nuclear Renaissance and Energy Transformation**

While Sweden tightens its borders and battles gang violence, it's also betting big on nuclear power in a dramatic reversal of decades-old energy policy. In May 2025, the Riksdag (parliament) adopted legislation creating a state aid framework for companies investing in new nuclear reactors. As of August 1, 2025, companies can apply for government-backed loans and contracts-for-difference (CfD) schemes to build up to 5,000 MW of new capacity—equivalent to four large-scale reactors. The government's rationale is clear: Sweden needs secure, carbon-free electricity to power its industrial base, electrify transportation, and support the data centers and energy-intensive manufacturing that are relocating to the Nordics for cheap, clean power. Wind and solar can't provide baseload capacity. Nuclear can.

This isn't just about building reactors. It's about reclaiming Sweden's energy independence and reversing the phaseout decisions that closed reactors over the past two decades. In October 2025, the government proposed amendments to the Environmental Code that would permit nuclear facilities along the entire Swedish coastline—not just the currently designated sites at Forsmark, Ringhals, and Oskarshamn. The proposal, subject to consultation until December 15, 2025, aims for the amendments to take force by July 1, 2026. The symbolism is potent: Sweden is reopening land it had closed to nuclear development, signaling that this is a long-term national commitment.

But the nuclear renaissance depends on one critical resource: uranium. And here's where it gets geopolitically interesting. In November 2025, Sweden's parliament reversed a seven-year ban on uranium mining, with the new rules taking effect January 1, 2026. Uranium is now reclassified as a "concession mineral" under Sweden's Minerals Act, opening Sweden's significant uranium deposits—particularly in northern regions—to commercial extraction. This isn't just about domestic energy security. It's about European energy security. The EU is desperate to reduce reliance on Russian uranium and Kazakhstan's state-controlled exports. Swedish uranium offers a secure, Western, environmentally regulated source. Mining companies are already circling, and the economic potential is massive.

Yet the contradictions are glaring. Sweden markets itself as a climate leader, yet it's preparing to extract and export uranium for nuclear reactors worldwide—including countries with questionable safety standards. Environmentalists are furious, arguing that uranium mining poses water contamination risks to Sweden's pristine northern ecosystems and indigenous Sami communities. The government's counter: nuclear power is essential for decarbonization, and Swedish uranium mining under strict environmental oversight is preferable to importing from authoritarian regimes. The deeper truth: Sweden's energy policy is driven by cold geopolitical calculation. Europe needs energy independence from Russia. Sweden has uranium, technical expertise, and capital. The nuclear renaissance is about leveraging those assets.

**The International Angle**

Sweden's NATO membership, formalized in March 2024, has fundamentally reshaped its security posture, and by November 2025, the implications are becoming clear. Sweden is no longer neutral—it's a frontline state in NATO's northern flank, hosting joint military exercises, integrating air defenses with Finland and Norway, and preparing for potential confrontation with Russia in the Baltic Sea. Swedish officials describe frequent Russian military flights testing response times, submarine incursions into Swedish waters, and cyber operations targeting government networks. This isn't hypothetical threat assessment; it's active strategic competition.

On Ukraine, Sweden has been quietly indispensable—providing Archer artillery systems, CV90 infantry fighting vehicles, and financial aid totaling billions. Swedish defense companies are ramping up production, supplying not just Ukraine but replenishing NATO stockpiles depleted by two years of war. The war has validated Sweden's NATO accession in the eyes of most Swedes, who now see neutrality as a dangerous illusion. But NATO membership comes with obligations: Sweden must spend at least 2% of GDP on defense, contribute forces to NATO missions, and align foreign policy with alliance consensus—including on China, where Sweden has significant economic interests.

On immigration, Sweden's crackdown is being watched across Europe. The abolition of Track Change permits, stricter deportation rules, and tougher citizenship requirements are models that right-wing governments in Italy, Austria, and the Netherlands are studying closely. If Sweden—the paradigmatic open, liberal welfare state—can close its borders and reduce asylum flows, so can anyone. Conversely, the gang violence crisis is cited by anti-immigration parties across Europe as proof that multiculturalism failed and that border controls are essential for social order. Sweden has become a cautionary tale, not an example to follow.

**The Bottom Line**

Sweden in November 2025 is a country grappling with the consequences of choices made decades ago—open immigration, generous asylum policies, nuclear phaseout—and now reversing course with a vengeance. The gang violence crisis is real, terrifying, and politically transformative, legitimizing restrictive immigration policies that would have been unthinkable in 2015. The crackdown is comprehensive: no more Track Change permits, higher salary thresholds, eight-year citizenship requirements, and deportations with five-year bans. But while Sweden closes its borders to asylum seekers, it's opening them to nuclear energy investors and uranium mining companies, betting that a nuclear renaissance will secure energy independence and European geopolitical relevance. Watch three things: First, whether the immigration crackdown actually reduces gang violence—if it doesn't, the Sweden Democrats will demand even harsher measures. Second, whether the nuclear buildout attracts investment or stalls on permitting and public opposition. Third, whether Sweden's NATO membership draws it into conflict with Russia, particularly in the Baltic Sea or Arctic. Sweden's social democratic consensus is fracturing. What replaces it will define the country for a generation.`,
  issues: JSON.stringify([
    'Gang Violence Crisis—67,000 Linked to Organized Crime',
    'Immigration Crackdown—The End of Swedish Exceptionalism',
    'Nuclear Renaissance and Energy Transformation'
  ]),
  topStories: JSON.stringify([
    {
      title: 'Sweden\'s gang crime numbers reveal 67,000 linked to organized violence',
      source: 'Euro Weekly News',
      link: 'https://euroweeklynews.com/2025/11/10/swedens-gang-crime-numbers-are-out-and-theyre-brutal/',
      pubDate: new Date('2025-11-10').toISOString()
    },
    {
      title: 'European Parliament debates escalation of gang violence in Sweden',
      source: 'European Parliament',
      link: 'https://www.europarl.europa.eu/news/en/agenda/briefing/2025-02-10/12/parliament-to-debate-increasing-gang-violence-in-sweden',
      pubDate: new Date('2025-02-10').toISOString()
    },
    {
      title: 'Sweden suspends Track Change Permit, affecting 4,700 asylum seekers',
      source: 'Swedish Migration Agency',
      link: 'https://www.migrationsverket.se/en/news-archive/news/2025-03-13-track-change-abolished-and-rules-on-statutory-limitation-period-changed.html',
      pubDate: new Date('2025-04-01').toISOString()
    },
    {
      title: 'Sweden approves state aid framework for new nuclear reactor investments',
      source: 'Government.se',
      link: 'https://www.government.se/press-releases/2025/05/green-light-for-a-new-model-for-financing-and-risk-sharing-for-investments-in-new-nuclear-power/',
      pubDate: new Date('2025-05-01').toISOString()
    },
    {
      title: 'Sweden proposes nuclear facilities permitted along entire coastline',
      source: 'Government.se',
      link: 'https://www.government.se/press-releases/2025/10/the-government-proposes-more-possible-coastal-sites-for-new-nuclear-power-in-sweden/',
      pubDate: new Date('2025-10-01').toISOString()
    },
    {
      title: 'Sweden reverses uranium mining ban, effective January 2026',
      source: 'Discovery Alert',
      link: 'https://discoveryalert.com.au/sweden-uranium-mining-policy-reversal-2025/',
      pubDate: new Date('2025-11-01').toISOString()
    },
    {
      title: 'Sweden increases work permit salary requirement to 100% of median wage',
      source: 'Crown World Mobility',
      link: 'https://www.crownworldmobility.com/insights/sweden-immigration-key-takeaways/',
      pubDate: new Date('2025-06-01').toISOString()
    },
    {
      title: 'CNN investigates Swedish gang exploitation of teenagers',
      source: 'CNN',
      link: 'https://www.cnn.com/2025/04/07/world/video/swedish-gang-violence-digvid',
      pubDate: new Date('2025-04-07').toISOString()
    }
  ]),
  storyCount: 24
}

async function addSweden() {
  console.log('Adding Sweden to database...\n')

  try {
    const result = await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: SWEDEN_SUMMARY.name,
          type: SWEDEN_SUMMARY.type,
          category: 'all'
        }
      },
      create: {
        name: SWEDEN_SUMMARY.name,
        type: SWEDEN_SUMMARY.type,
        country: SWEDEN_SUMMARY.country,
        lat: SWEDEN_SUMMARY.lat,
        lng: SWEDEN_SUMMARY.lng,
        category: 'all',
        summary: SWEDEN_SUMMARY.summary,
        issues: SWEDEN_SUMMARY.issues,
        topStories: SWEDEN_SUMMARY.topStories,
        storyCount: SWEDEN_SUMMARY.storyCount,
        updatedAt: new Date()
      },
      update: {
        summary: SWEDEN_SUMMARY.summary,
        issues: SWEDEN_SUMMARY.issues,
        topStories: SWEDEN_SUMMARY.topStories,
        storyCount: SWEDEN_SUMMARY.storyCount,
        updatedAt: new Date()
      }
    })

    console.log('✅ Sweden added/updated successfully')
    console.log('   ID:', result.id)
    console.log('   Name:', result.name)
    console.log('   Location:', `${result.lat}, ${result.lng}`)
    console.log('   Issues:', JSON.parse(result.issues).length)
    console.log('   Stories:', JSON.parse(result.topStories).length)
    console.log()
  } catch (error) {
    console.error('❌ Error processing Sweden:', error)
    throw error
  }
}

addSweden()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
