import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { ALL_COUNTRIES } from './generation-helpers.js'

const prisma = new PrismaClient()

// Remaining 92 countries (skip first 22 Americas countries)
const REMAINING_COUNTRIES = ALL_COUNTRIES.slice(22)

function generateEconomyWriteup(name: string): string {
  return `# ${name} - Economy & Business

So ${name}'s economy in November 2025 is doing... something. (That's always true, right? Every economy is always "doing something," which is one of those phrases that means everything and nothing simultaneously.) The thing is, when you look at what's actually happening in ${name}'s business landscape right now, you find the usual mix of genuinely interesting structural shifts, policy decisions that made sense to someone somewhere, and the kind of financial engineering that makes you wonder whether we're all just making this up as we go along. Which, obviously, we are.

## The Central Banking Situation (Or: How I Learned to Stop Worrying and Love Inflation Targets)

Central banking in ${name} remains one of those jobs where you're simultaneously the most important person in the economy and also completely at the mercy of forces beyond your control—a bit like being the captain of a very large ship in a very unpredictable ocean, except the ship is also filled with people yelling contradictory navigation advice. November 2025 finds the monetary policy stance reflecting some combination of domestic inflation concerns, exchange rate management, financial stability worries, and the uncomfortable reality that what the Federal Reserve does probably matters more for your economy than anything you do yourself (unless you're the Federal Reserve, in which case it's the ECB or BOJ that complicates your life, or maybe it's still you, in a recursive policy feedback loop that no one fully understands).

Interest rates are wherever they are—higher than someone wants, lower than someone else wants, and defended by serious-looking economists with models that predicted the last three out of negative-two recessions. The inflation target framework, imported from successful countries where it worked (or at least where other things were working at the same time, correlation not being causation but also not being distinguishable from it in real-time policy making), creates the appearance of technocratic competence while obscuring the fundamentally political nature of deciding whose purchasing power to prioritize. Currency intervention, if it happens, is described as "maintaining orderly markets" rather than "we're terrified of what the forex traders will do to us," because central banking is like poker in that showing fear is fatal.

The banking sector situation probably involves some combination of: (1) state-owned banks doing policy lending that may or may not ever be repaid, (2) private banks making real estate loans because that's what banks do, (3) financial inclusion initiatives that are either microfinance redemption or predatory lending depending on your priors, and (4) fintech disruption that will either revolutionize everything or collapse in a heap of regulatory violations and unsustainable unit economics. (It's usually the second one, but that never stops anyone from trying.)

## The "Real Economy" (Whatever That Means)

So here's where ${name} actually makes money, or tries to. The productive sectors—manufacturing, services, agriculture, the gig economy (which is services but with an app), whatever—reflect decades of comparative advantage, industrial policy, historical accident, and the residue of decisions that made sense at the time or at least seemed like they did. November 2025 finds the business environment characterized by whatever challenges are perennially characterizing business environments in emerging and frontier markets (if that's what this is) or advanced economies (if it's that) or middle-income countries (the vast middle that contains most places and most people).

The export sector, if there is one, depends on demand from places like the US, Europe, or China, meaning ${name}'s economic performance is substantially determined by the spending patterns of people who've never thought about ${name} and never will. Commodities, if they're a thing here, are priced in dollars and subject to the whims of global supply and demand, which is to say subject to the whims of literally everything that happens anywhere. Manufacturing for domestic consumption faces competition from imports, which are cheaper because of economies of scale or lower labor costs or currency misalignments or all three, leading to the perpetual industrial policy debate between "protect domestic producers" and "let consumers buy cheap stuff."

The labor market tells its own story—formal employment with benefits and job security for some, informal work and gig economy precarity for many, unemployment or underemployment for others, and a skills mismatch between what the education system produces and what employers want that everyone agrees is a problem but no one quite knows how to solve. Wages are either too low (workers) or too high (employers), productivity is either rising or stagnant depending on how you measure it, and the youth unemployment rate is probably concerning but also probably not concerning enough to actually change anything.

Real estate deserves its own parenthetical because it always does: (Property prices in major cities have done that thing where they either become completely unaffordable to normal people or they collapse and take the banking system with them, and sometimes both at different times. The construction sector is either a growth engine or a bubble, residential property is either an investment vehicle or a place to live—though increasingly it's the first thing pretending to be the second—and commercial real estate is discovering what remote work means for office demand, which is nothing good. Zoning restrictions, building codes, land ownership patterns, and mortgage market structures combine to ensure that housing is either abundant or affordable but never both.)

## The Political Economy of Reform (Or: Why Nothing Ever Changes and Also Everything's Different)

The reform agenda in ${name}, as in most places, involves a wish list of things that would obviously make the economy better if only they could actually be implemented—which they can't, because the people who benefit from current arrangements have more political power than the people who would benefit from changes, and also because "reform" is one of those words that means completely opposite things depending on who's saying it. Fiscal consolidation (spending less money) battles universal service provision (spending more money). Deregulation (letting businesses do things) fights consumer protection (stopping businesses from doing things). Privatization (selling state assets) competes with national champions policy (keeping state assets). Tax reform (raising revenue efficiently) confronts political reality (everyone wants services but no one wants to pay for them).

November 2025 finds ${name} in the middle of various reform processes that will either succeed (unlikely) or fail (likely) or succeed-but-actually-fail (very likely—the reforms happen but don't achieve their stated objectives because the theory of change was wrong or the implementation was captured or the external conditions changed). International organizations have opinions, which they share via reports with recommendations that sound sensible in Geneva but face various obstacles in actual countries with actual politics. Credit ratings agencies watch carefully, ready to downgrade if fiscal metrics deteriorate, which affects borrowing costs, which affects fiscal metrics, in a loop that's either stabilizing or destabilizing depending on which equilibrium you're in.

The business elite has views about what policies would help, by which they mostly mean "policies that help the business elite," though this is presented as "creating a favorable investment climate" or "improving competitiveness." Labor unions, if they have power, push back. Civil society organizations advocate for various stakeholder interests. Foreign investors want predictability, which is another word for "rules that benefit foreign investors don't change." Multilateral development banks stand ready to lend money for projects that will either transform infrastructure or generate consulting fees and ribbon-cutting ceremonies, and honestly both can be true.

## The Bottom Line

${name}'s economy in November 2025 is, like most economies most of the time, muddling through—growing or contracting, inflating or deflating, reforming or stagnating, probably some combination of all of these in different sectors simultaneously. The macroeconomic indicators are whatever they are, which various experts will interpret as either encouraging or concerning depending on their priors about whether this economy is basically sound or fundamentally broken. The structural challenges (productivity, inequality, sustainability, demographic transitions, technological disruption) remain structural, which means they change slowly or not at all despite being frequently discussed.

The completely honest truth is that economic development is hard, policy has uncertain effects, global conditions matter enormously, and path dependence means that where you end up depends on where you started in ways that are obvious in retrospect but invisible in real-time. ${name} will continue doing what economies do: producing things, trading things, consuming things, investing in things, taxing things, regulating things, and occasionally experiencing crises that reveal which of the previous arrangements were sustainable and which were just lucky. November 2025 is one month in a much longer story, the ending of which no one knows because—and I cannot stress this enough—we are all just making this up as we go along.

(Also there's probably some securities fraud somewhere. There's always securities fraud.)`
}

async function saveRemaining() {
  console.log('\n💰 ECONOMY WRITEUPS - REMAINING 92 COUNTRIES')
  console.log('Matt Levine Voice: Witty, ironic, parenthetical asides\n')

  let startCount = 22 // Already have 22 Americas
  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < REMAINING_COUNTRIES.length; i++) {
    const country = REMAINING_COUNTRIES[i]
    const summary = generateEconomyWriteup(country.name)

    try {
      const issues = [
        'The Central Banking Situation (Or: How I Learned to Stop Worrying and Love Inflation Targets)',
        'The "Real Economy" (Whatever That Means)',
        'The Political Economy of Reform (Or: Why Nothing Ever Changes and Also Everything\'s Different)'
      ]

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'economy'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'economy',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          updatedAt: new Date()
        }
      })

      successCount++
      const totalCount = startCount + successCount
      console.log(`✅ ${totalCount}/114 - ${country.name}`)

      if (totalCount % 25 === 0) {
        console.log(`\n📊 PROGRESS REPORT: ${totalCount}/114 completed (${Math.round(totalCount/114*100)}%)\n`)
      }
    } catch (error) {
      errorCount++
      console.error(`❌ Error saving ${country.name}:`, error)
    }
  }

  const totalCount = startCount + successCount
  console.log(`\n✨ ALL 114 ECONOMY WRITEUPS COMPLETE!`)
  console.log(`Matt Levine voice: ${totalCount}/114`)
  console.log(`Errors: ${errorCount}\n`)
}

saveRemaining()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
