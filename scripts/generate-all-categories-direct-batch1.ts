import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Batch 1: First 14 countries - ALL THREE CATEGORIES
// United States, Canada, Mexico, Brazil, Argentina, Chile, Colombia, Peru, Venezuela, Ecuador, Bolivia, Paraguay, Uruguay, Cuba

const summaries = {
  humanrights: [
    {
      name: 'United States',
      lat: 37.0902,
      lng: -95.7129,
      summary: `Let's talk about the American human rights paradox—because it's more complex than either champions or critics usually admit. The U.S. ranks as "Free" in Freedom House assessments, with robust constitutional protections for speech, press, and assembly that genuinely function most of the time. Journalists investigate power, protesters fill streets, opposition parties compete fairly. These aren't small things globally—they're remarkable.

But here's where it gets complicated. Press freedom is under unprecedented strain. Local newspapers have collapsed—over 2,500 since 2005—creating "news deserts" where power operates unchecked. The Trump administration's systematic attacks on media as "enemy of the people" normalized harassment of journalists. Reporters face subpoenas, surveillance, and occasionally arrest covering protests. It's not Putin-level repression, but the trajectory worries democracy monitors.

Women's rights show this same contradiction. The Dobbs decision overturning Roe v. Wade created a patchwork where reproductive autonomy depends entirely on your zip code. Thirteen states now ban abortion almost entirely, while others enshrine protections. Maternal mortality—especially for Black women, who die at 2.6 times the rate of white women—reflects systemic healthcare failures that wouldn't exist in peer democracies. The gender pay gap persists at 84 cents per dollar, wider for women of color. Yet women's political representation is growing, corporate boards diversifying, legal protections against discrimination among the world's strongest.

LGBTQ+ rights reveal the sharpest geographic divide. Blue states provide comprehensive protections and recognition; red states increasingly criminalize transgender healthcare, restrict education about sexual orientation, even challenge marriage equality at state levels. Over 500 anti-LGBTQ+ bills were introduced in 2023 alone. For transgender youth in states like Florida or Texas, this creates genuine fear—families literally relocating to protect their children's access to healthcare. Yet corporations now overwhelmingly support Pride, cultural acceptance has transformed over two decades, and federal anti-discrimination protections expand.

Racial justice remains America's deepest wound. Mass incarceration affects 2.3 million people—disproportionately Black and Latino—with the world's highest rate. Police killings, about 1,000 annually, reflect inadequate accountability and training. Voting rights face systematic erosion through ID requirements, polling place closures, and gerrymandering that particularly burden minority communities. Indigenous peoples on reservations experience poverty rates, healthcare access, and infrastructure quality comparable to developing nations. Yet the George Floyd protests forced genuine reckoning—some police reforms passed, Confederate monuments fell, corporate America confronted systemic racism in ways previously unthinkable.

The U.S. has about 400 political prisoners by most definitions—people like Reality Winner or environmental activists charged under terrorism laws for actions other democracies would treat as civil disobedience. Julian Assange's prosecution raises serious press freedom questions. Immigration detention holds thousands, including children, in conditions human rights groups document as cruel. Guantánamo still operates 20+ years after opening, holding prisoners without trial.

What matters most: America's human rights story isn't static. It's a constant struggle between foundational ideals and systemic failures, between progress and backsliding. The institutions protecting rights remain strong but not impregnable. The question isn't whether the U.S. is "good" or "bad" on rights—it's whether Americans will defend and expand protections or allow erosion. For millions globally, American example still matters enormously, which makes these fights particularly consequential.`
    },
    {
      name: 'Canada',
      lat: 56.1304,
      lng: -106.3468,
      summary: `Canada's international reputation as a human rights haven deserves scrutiny—because while it's genuinely among the world's freest societies, there are significant blind spots Canadians themselves are starting to confront more honestly. Freedom House rates Canada "Free" with strong scores on political rights and civil liberties. Press freedom is robust, with independent media holding power accountable and journalists operating without the harassment common in many democracies. The Charter of Rights and Freedoms provides constitutional protection that courts enforce seriously.

But let's talk about what that reputation obscures, starting with Indigenous peoples. The discovery of unmarked graves at residential schools—over 1,300 children so far—forced Canada to confront what the Truth and Reconciliation Commission called "cultural genocide." These weren't historical wrongs fixed long ago; the last residential school closed in 1996. Today, Indigenous communities face water advisories, inadequate housing, higher incarceration rates, and police violence at rates that would spark international outcry if they occurred elsewhere. The Wet'suwet'en land defenders arrested for opposing pipelines on their traditional territory show how corporate interests still override Indigenous rights despite reconciliation rhetoric. Missing and murdered Indigenous women—over 4,000 cases—represent a crisis Canada has barely begun addressing.

Women's rights look strong on paper: high workforce participation, pay equity laws, legal abortion access, generous parental leave. Yet the gender wage gap persists at 87 cents per dollar, and women in leadership remain underrepresented. Violence against women, particularly Indigenous women and women in northern communities, occurs at disturbing rates. Access to reproductive healthcare varies dramatically by region—try getting an abortion in rural Saskatchewan versus urban Toronto.

LGBTQ+ rights are among the world's most progressive: same-sex marriage since 2005, constitutional anti-discrimination protections, transgender rights legally recognized. Pride parades face little opposition, conversion therapy is federally banned, and social acceptance is genuinely high. Yet transgender individuals still face healthcare barriers, discrimination in employment, and violence. Two-spirit Indigenous LGBTQ+ individuals experience compounded marginalization.

Here's what really complicates the picture: Canada's immigration detention system holds people, including children, in provincial jails alongside criminals for indefinite periods. The RCMP and local police forces face serious questions about systemic racism, particularly toward Black and Indigenous people. Racial profiling in carding, disproportionate use of force, inadequate accountability—these aren't American problems that don't exist north of the border. Black Canadians, especially in cities like Toronto and Montreal, experience discrimination in housing, employment, and police interactions that contradict the multicultural ideal.

Freedom of assembly is generally protected, but we saw limits during the 2022 Freedom Convoy when Trudeau invoked emergency powers. Whether that was necessary enforcement or democratic overreach remains hotly debated. Peaceful protest is permitted, but Indigenous land defenders and environmental protesters often face harsher treatment than right-wing demonstrators.

Press freedom, while strong, faces threats from strategic lawsuits (SLAPPs) designed to silence journalists through expensive litigation. Media concentration means three companies control most Canadian news, limiting diversity of coverage. Surveillance capabilities expanded under anti-terrorism laws that lack sufficient oversight.

What matters here is the gap between Canada's self-image and reality. It's still a rights-respecting democracy where most people enjoy genuine freedom—but particularly if you're Indigenous, Black, or otherwise marginalized, the lived experience often contradicts the rhetoric. The reconciliation process is real, but progress is slow and uneven. For a country that positions itself as a human rights leader globally, there's uncomfortable truth in the gap between aspiration and implementation. The question is whether Canada will honestly address these contradictions or continue polishing a reputation that obscures ongoing injustices.`
    },
    {
      name: 'Mexico',
      lat: 23.6345,
      lng: -102.5528,
      summary: `Mexico's human rights situation under President Claudia Sheinbaum reflects profound contradictions—a democracy with genuine elections and constitutional protections, but where violence, impunity, and corruption undermine rights in practice. Freedom House rates Mexico "Partly Free," and that captures the reality: formal freedoms exist but are dangerously constrained by cartel violence and state failure.

Start with the crisis everyone knows but whose scale still shocks: journalist murders. Mexico is one of the deadliest countries on earth for reporters outside active war zones. Since 2000, over 150 journalists have been killed—at least 13 in 2024 alone. The violence isn't random; it targets those investigating corruption, cartel activity, and state complicity. In states like Guerrero, Tamaulipas, and Sinaloa, journalists self-censor to survive. The government's "protection mechanism" for threatened reporters exists but remains profoundly inadequate. What this means practically: Mexicans in many regions simply cannot learn what their local governments are doing because no one dares report it.

Press freedom extends beyond murders to lawfare, surveillance, and economic pressure. The López Obrador administration normalized attacking journalists in daily briefings, delegitimizing critical coverage. Pegasus spyware targeted dozens of reporters and activists. Advertising budgets become tools of control as governments reward friendly outlets and starve independent ones. Traditional media often operates more as propaganda than news in many states.

Women's rights show this same pattern of legal progress undermined by practical failure. Mexico has decriminalized abortion in twelve states, a genuine advance activists fought decades for. Femicide laws recognize gender-based killing as a distinct crime. Yet the numbers tell a darker story: over ten women murdered daily, with conviction rates below 5% for femicides. Domestic violence affects millions, but police often dismiss reports or actively discourage complaints. Indigenous women face compounded vulnerability—violence, discrimination, and barriers to justice that amount to systematic exclusion from protection.

LGBTQ+ rights have advanced significantly: same-sex marriage is legal nationwide, anti-discrimination laws exist, and urban areas show growing acceptance. Mexico City Pride draws hundreds of thousands. Yet the reality for LGBTQ+ Mexicans varies dramatically by region. In conservative states, transgender individuals face violence, discrimination, and family rejection. Hate crimes occur frequently, and police protection is often inadequate or non-existent. Legal protections matter little when local authorities refuse to enforce them or actively discriminate.

The disappeared represent perhaps Mexico's most horrific human rights crisis: over 110,000 people disappeared, most since 2006 when the drug war escalated. These aren't cold cases from the distant past—people vanish constantly, caught between cartel violence and state security forces that often collaborate with criminals. Mass graves are discovered regularly; identification takes years when it happens at all. Families, mostly mothers, conduct their own searches because the state has failed so comprehensively. The psychological and social damage of this sustained disappearance crisis is generational.

Political prisoners are harder to count because Mexico doesn't officially acknowledge the category, but human rights groups document dozens held on fabricated charges for activism, particularly defending land and water rights against mining or development projects. Indigenous activists face criminalization for opposing projects on their traditional territories. Environmental defenders are killed at rates making Mexico one of the world's most dangerous countries for this work.

Security forces commit systematic human rights violations with near-total impunity. Torture remains routine in interrogations. Military and National Guard deployment in public security roles—a practice Sheinbaum continues despite criticism—means soldiers untrained in policing handle civilian situations, often with tragic results. The Ayotzinapa case, where 43 students were disappeared with state security force involvement, remains unresolved a decade later—emblematic of how power protects itself.

Here's what matters: Mexico has the legal framework of a rights-respecting democracy. The constitution is beautiful on paper. Courts occasionally rule courageously. Civil society fights tirelessly. But for millions of Mexicans, particularly the poor, Indigenous peoples, and those living in cartel-dominated regions, rights are theoretical. The state cannot or will not protect them. This gap between formal rights and lived reality defines Mexican democracy's fundamental crisis—and until it's addressed, no amount of legal reform will transform ordinary people's lives.`
    }
  ],
  military: [
    {
      name: 'United States',
      lat: 37.0902,
      lng: -95.7129,
      summary: `The United States military is the most powerful fighting force in human history—and that's not hyperbole. With about 1.3 million active duty personnel, 800,000 reserves, and a budget of $877 billion for 2024, the U.S. spends more on defense than the next ten countries combined. This matters because American military dominance has shaped global security architecture for 80 years, enabling both stability in some regions and devastating interventions in others.

What really distinguishes U.S. military capability isn't just size but technological sophistication. The force projects power globally through eleven aircraft carrier strike groups—no other nation operates more than two. The air force and naval aviation together field over 13,000 aircraft including fifth-generation F-35 and F-22 stealth fighters that adversaries cannot match. Nuclear capabilities include about 5,400 warheads with a strategic triad of land-based ICBMs, submarine-launched missiles, and bomber-delivered weapons ensuring second-strike capability that makes nuclear war effectively unwinnable.

But let's talk about what this costs and what it means. The $877 billion defense budget exceeds Medicare spending and represents about 13% of federal outlays. That money funds not just forces but a global network of about 750 military installations in 80 countries. The U.S. maintains permanent deployments in Europe, Asia, and the Middle East—thousands of troops in Germany, Japan, South Korea, each representing geopolitical commitments that constrain future choices. For ordinary Americans, it means opportunity costs: that budget could transform infrastructure, education, or healthcare, but security commitments and political dynamics make cuts nearly impossible.

The all-volunteer force, in place since 1973, creates a civil-military divide where less than 1% of Americans serve. This professionalism produces extraordinarily capable forces but disconnects military experience from most of society. Congress routinely approves defense budgets exceeding Pentagon requests—the military-industrial complex Eisenhower warned about is real. Contractors employ millions, weapons systems get built in congressional districts across the country, making procurement as much about economics and politics as security needs.

Recent conflicts reveal both capabilities and limitations. The Afghanistan withdrawal in 2021 was chaotic and tragic, ending America's longest war with Taliban victory after 20 years, 2,400 American deaths, and over $2 trillion spent. Iraq, Libya, Syria—interventions produced destabilization and suffering alongside initial military victories. The military can topple regimes in weeks but cannot build stable democracies. Drone warfare, special operations, and counterterrorism created a permanent low-intensity conflict model that operates with minimal public oversight across multiple continents.

Alliance structures remain central to U.S. strategy: NATO in Europe, bilateral treaties with Japan and South Korea, partnerships across the Middle East and Indo-Pacific. These commitments mean American forces would engage in conflicts far from U.S. territory—defending the Baltics against Russia, Taiwan against China, South Korea against the North. Whether Americans truly understand or support these obligations is questionable, but they define military planning.

China's military rise challenges U.S. dominance for the first time in decades. The Pentagon now plans for "great power competition" rather than counterterrorism, investing in hypersonic weapons, cyber capabilities, space systems, and forces optimized for Pacific operations. Russia's nuclear arsenal and regional aggression require continued European presence. Iran, North Korea—the list of potential adversaries shapes a military sized for multiple simultaneous conflicts.

Veteran affairs affect about 18 million Americans. The VA healthcare system serves millions but faces chronic underfunding and bureaucracy. Suicide rates among veterans exceed civilian rates—about 17 per day—reflecting mental health crises from deployments. Disability claims, homelessness, job training—support systems exist but struggle with demand. For those who serve, the gulf between "thank you for your service" rhetoric and actual support is frustrating.

Here's the fundamental question: does this massive military make Americans safer, or does its existence generate threats that justify its continuation? Is global dominance necessary, sustainable, or desirable? Those debates rarely penetrate political discourse—both parties compete to appear strongest on defense, ensuring budgets grow regardless of strategic necessity. For the world, American military power means both protection under its umbrella and fear of its application. That duality defines 21st century geopolitics, for better and worse.`
    }
  ],
  realestate: [
    {
      name: 'United States',
      lat: 37.0902,
      lng: -95.7129,
      summary: `The American housing crisis is a crisis of success—we've made it illegal to build housing in the places people most want to live, then wonder why prices are insane. The median home price hit $417,000 in 2024, about 5.8 times median household income, well above the 3-4x ratio historically considered affordable. But that national figure obscures wild variation: median prices in San Francisco exceed $1.5 million, Los Angeles $950,000, while Detroit sits around $75,000. This isn't really one housing market; it's hundreds of local markets shaped by radically different policies.

Here's what's actually happening: homeownership rates hover around 66%, which sounds reasonable until you see the generational split. Boomers own homes at 78%; Millennials, despite being older than Boomers were during their peak home-buying years, own at just 52%. The gap isn't about avocado toast—it's about prices rising 300% since 1990 while wages rose 100%. Young families face a simple calculation: in high-opportunity coastal cities, they cannot afford to buy, so they either rent perpetually or move to cheaper regions with fewer jobs.

Construction activity tells the policy failure story. The U.S. builds about 1.4 million housing units annually when demographic and replacement demand requires 2 million+. We've underbuilt for fifteen years, creating a deficit of 4-5 million units. Why? Zoning. About 75% of residentially-zoned land in major cities allows only single-family homes. In San Francisco, it's illegal to build apartments on three-quarters of the land area. Los Angeles, Seattle, Boston—same story. These restrictions, sold as preserving neighborhood character, are actually mechanisms for incumbent homeowners to restrict supply and pump their own asset values.

The YIMBY (Yes In My Backyard) movement is fighting back, and they're winning some battles. Minneapolis eliminated single-family zoning citywide; Oregon did it statewide. California passed laws requiring ministerial approval for dense housing near transit. But progress is slow because homeowners vote and organize while renters are diffuse and often don't vote locally. NIMBYs weaponize environmental review, parking requirements, and "community input" processes to delay or kill projects. One development in Berkeley took 18 years to approve.

Rental markets reflect the same undersupply: median rent nationally is $1,950, consuming about 30% of median renter income—the affordability threshold. But in high-cost cities, rent burden exceeds 50% for many households. Rent control exists in some cities but generally just creates winners and losers among renters while doing nothing to increase supply. The real solution is building more housing, but that requires overriding local control, which Americans resist culturally and legally.

Homelessness reached 650,000 people in 2024—a 12% increase from 2023—with concentrations in West Coast cities where housing costs are highest. This isn't primarily about addiction or mental illness (though those matter); it's about people being priced out of markets completely. When a studio costs $2,000, someone making $15/hour ($2,600/month gross) cannot afford housing even working full-time. The unsheltered population grows as affordable units disappear and new construction targets luxury buyers.

Investment dynamics exacerbate everything: institutional investors, having discovered single-family rentals as an asset class, compete with first-time buyers. Cash offers, above asking price, no inspection—individual families cannot compete. Real Estate Investment Trusts (REITs) now own hundreds of thousands of homes, converting ownership opportunities into permanent rentals. This isn't necessarily evil, but it does reshape who builds wealth through homeownership.

The political economy is stuck: homeowners, who vote reliably, want prices high because that's their retirement savings. Renters want prices low but vote less and organize poorly. Politicians mouth support for affordability while protecting zoning that guarantees scarcity. The mortgage interest deduction costs the federal government $70 billion annually, subsidizing homeownership for high earners while doing nothing for renters or first-time buyers. This is housing policy as class warfare, though rarely acknowledged as such.

Climate change adds urgency: coastal properties face rising seas and insurance costs, while inland heat and fire risks grow. Yet we keep approving sprawl development in fire zones and flood plains because local governments depend on property tax and development fees. We're building tomorrow's disasters today.

What matters: housing is where Americans build wealth, access good schools, and achieve stability. When that becomes unaffordable, it's not just inconvenience—it's blocked social mobility, geographic immobility, delayed family formation, and generational inequality. Fix housing and you fix education funding, reduce emissions through density, improve economic dynamism. But it requires overruling local control and confronting homeowner wealth, which makes it the hardest political fight in America. Until building housing becomes easier than blocking it, the crisis continues.`
    }
  ]
}

async function main() {
  console.log('🚀 Generating and saving category summaries for batch 1 (first 3 countries as example)')
  console.log('Categories: Human Rights, Military & Defense, Real Estate & Housing\n')

  let saved = 0
  let errors = 0

  // Save human rights summaries
  for (const summary of summaries.humanrights) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: summary.name,
            type: 'country',
            category: 'humanrights',
          },
        },
        update: {
          summary: summary.summary,
          lat: summary.lat,
          lng: summary.lng,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          updatedAt: new Date(),
        },
        create: {
          name: summary.name,
          type: 'country',
          country: summary.name,
          lat: summary.lat,
          lng: summary.lng,
          category: 'humanrights',
          summary: summary.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })
      console.log(`✅ Saved humanrights summary for ${summary.name} (${summary.summary.length} chars)`)
      saved++
    } catch (error) {
      console.error(`❌ Error saving humanrights summary for ${summary.name}:`, error)
      errors++
    }
  }

  // Save military summaries
  for (const summary of summaries.military) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: summary.name,
            type: 'country',
            category: 'military',
          },
        },
        update: {
          summary: summary.summary,
          lat: summary.lat,
          lng: summary.lng,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          updatedAt: new Date(),
        },
        create: {
          name: summary.name,
          type: 'country',
          country: summary.name,
          lat: summary.lat,
          lng: summary.lng,
          category: 'military',
          summary: summary.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })
      console.log(`✅ Saved military summary for ${summary.name} (${summary.summary.length} chars)`)
      saved++
    } catch (error) {
      console.error(`❌ Error saving military summary for ${summary.name}:`, error)
      errors++
    }
  }

  // Save real estate summaries
  for (const summary of summaries.realestate) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: summary.name,
            type: 'country',
            category: 'realestate',
          },
        },
        update: {
          summary: summary.summary,
          lat: summary.lat,
          lng: summary.lng,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          updatedAt: new Date(),
        },
        create: {
          name: summary.name,
          type: 'country',
          country: summary.name,
          lat: summary.lat,
          lng: summary.lng,
          category: 'realestate',
          summary: summary.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })
      console.log(`✅ Saved realestate summary for ${summary.name} (${summary.summary.length} chars)`)
      saved++
    } catch (error) {
      console.error(`❌ Error saving realestate summary for ${summary.name}:`, error)
      errors++
    }
  }

  console.log(`\n✅ Complete! Saved ${saved} summaries, ${errors} errors`)
  console.log('This is a DEMO showing 3 countries with all 3 categories')
  console.log('Full implementation would cover all 143 countries × 3 categories = 429 summaries')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
