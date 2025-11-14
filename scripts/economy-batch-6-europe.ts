import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const writeups = [
  {
    name: "Austria",
    lat: 47.5162,
    lng: 14.5501,
    summary: `# Austria - Economy & Business

Austria is Europe's quiet achiever—GDP per capita of $57,000 (higher than Germany), unemployment at 5.3% (basically full employment), and inflation down to 3.1% after spiking to 11% in 2022. The economy grew 1.4% in 2024 (slow but positive), and Vienna routinely ranks as the world's most livable city (for what that's worth economically). Chancellor Karl Nehammer's center-right government is managing to keep things boring, which in European politics is an achievement. The economic model is high-value manufacturing (machinery, vehicles, industrial equipment), services (banking, insurance, tourism), and a massive dependence on Russian energy that's been awkwardly renegotiated since Ukraine. Austria's banks have deep exposure to Central and Eastern Europe (CEE)—Erste Bank and Raiffeisen are major players in Czech Republic, Hungary, Poland—which creates both opportunity and risk. The far-right Freedom Party (FPÖ) won the September 2024 election with 29% (campaigning on immigration and EU skepticism), but can't form a government because other parties refuse to coalition with them, so Nehammer is trying to form a three-party coalition. Meanwhile, the EU is pressuring Austria to reduce Russian energy ties, but Austrian businesses and consumers like cheap gas, creating political tension.

## The Big Issue 1: The Russian Energy Dependency Nobody Wants to Fix

Austria gets 80% of its natural gas from Russia via long-term contracts with Gazprom. (When Germany was frantically diversifying away from Russian gas after Ukraine, Austria was quietly keeping the supply flowing.) This is economically rational—Russian gas is cheap, pipelines are built, contracts are locked—but geopolitically awkward. The EU wants member states to reduce Russian energy dependency (sanctions, diversification, LNG terminals), but Austria has been slow. Why? Because Austrian industry needs cheap energy (steel, chemicals, manufacturing), consumers don't want higher heating bills, and OMV (Austria's state oil company) has profitable Russian operations. The government's position is basically: we'll diversify gradually, but we're not going to tank our economy for geopolitical symbolism. In November 2024, OMV announced it would end Russian gas imports by 2025... except nobody believes this because there's no alternative supply at comparable prices. The economic risk is that if Russia cuts supplies (retaliation for sanctions, political leverage), Austria faces energy shortages and industrial shutdowns. The alternative—importing LNG from the U.S. or Qatar—is 2-3x more expensive and requires infrastructure (regasification terminals, pipelines) that doesn't exist. So Austria is stuck: dependent on Russian gas, pressured by the EU, and unable to diversify quickly without economic pain. The business community is quietly relieved—they want cheap energy—but the foreign policy establishment is nervous about being seen as pro-Russian. It's a classic European contradiction: everyone wants energy security except when it costs money.

## The Big Issue 2: Central European Banking Exposure and Geopolitical Risk

Austrian banks are massively exposed to Central and Eastern Europe—Erste Bank and Raiffeisen have operations in Czech Republic, Poland, Hungary, Slovakia, Serbia, Croatia, and Ukraine. This was a genius strategy in the 2000s: Western European banks entering growing CEE markets, earning high returns, and diversifying portfolios. But now it's a geopolitical liability. Raiffeisen Bank International (RBI) has significant operations in Russia, making it the largest Western bank still operating there post-sanctions. The ECB and U.S. Treasury have pressured RBI to exit Russia, but RBI argues it's legally obligated to serve clients and that exiting would require selling at fire-sale prices (destroying shareholder value). In November 2024, RBI announced it would reduce Russian operations "gradually," which is banker-speak for "we're not leaving." The profits are too good: Russian operations generated €1.5 billion in profit in 2023 (about one-third of RBI's total). Austrian regulators are caught between: (1) allowing RBI to operate in Russia and face international criticism, or (2) forcing an exit and taking a massive loss. The CEE exposure more broadly is profitable but risky: if Poland or Hungary face economic crisis, Austrian banks get hit. If Ukraine's reconstruction requires debt write-downs, Austrian banks take losses. The opportunity is that CEE is still growing faster than Western Europe, so Austrian banks have higher returns than German or French banks stuck in stagnant Western European markets. The risk is geopolitical: if anything bad happens in CEE (war, economic crisis, political instability), Austrian banks are first in the line of fire.

## The Big Issue 3: The Far-Right Election Win and Coalition Chaos

The Freedom Party (FPÖ) won the September 2024 election with 29%—a historic high for a far-right party in Austria. (Their founding members included former Nazis, which is not a great brand in post-war Austria.) The FPÖ campaigned on immigration restriction, EU skepticism, and ending sanctions on Russia. They won. But nobody will govern with them: the center-right People's Party, Social Democrats, and Greens all refuse to form a coalition with FPÖ because of their extremism. So Austria is in political limbo: the election winner can't govern, and Nehammer is trying to cobble together a three-party coalition (center-right, center-left, liberals) that's ideologically incoherent. The economic consequence is policy paralysis: no major reforms, no fiscal stimulus, no long-term planning. Markets don't care much (Austria's economy functions fine without active government), but businesses want certainty on energy policy, EU relations, and taxation. The FPÖ's rise reflects voter frustration: Austria has low unemployment and high living standards, but housing is expensive, energy costs spiked during the Ukraine crisis, and immigration is visible (particularly in Vienna). The FPÖ offers simple answers (close borders, leave EU, cozy up to Russia), which voters found appealing even if other parties view them as extreme. If Austria can't form a stable government, there's a risk of new elections, which the FPÖ might win again with even higher support. The economic policy question is whether Austria continues its EU-integrated, high-regulation, high-welfare model, or whether it drifts toward Orbán's Hungary (nationalist, EU-skeptical, economically opportunistic).

## The International Angle

Austria matters as a Central European hub, a bridge between Western and Eastern Europe, and a financial center for the CEE region. For Germany, Austria is both partner and competitor: similar industrial model, but Austria often undercuts German wages and regulations. For Russia, Austria is the most friendly Western European country: deep energy ties, banking presence, and political parties sympathetic to Russian interests. For the EU, Austria is a headache: slow on Russian sanctions, reluctant on migration quotas, and now with a far-right party winning elections. For CEE countries, Austria is the banker: Austrian banks fund much of the region's growth, which creates dependency but also integration. For global banking, Raiffeisen's Russian operations are a test case: can Western banks remain in Russia while maintaining access to U.S. financial systems? So far yes, but pressure is increasing.

## The Bottom Line

Austria's economy is stable—high income, low unemployment, solid industries—but facing challenges: Russian energy dependency is geopolitically awkward, Austrian banks have risky CEE exposure, and far-right electoral gains create political uncertainty. Nehammer's coalition will likely limp along, avoid major reforms, and hope energy prices stay manageable. Austrian banks will gradually reduce Russian exposure while maximizing profits in the meantime. The economy will keep growing slowly, Vienna will keep ranking as most livable, and Austria will continue being Europe's comfortable underachiever.`,
    issues: ["The Russian Energy Dependency Nobody Wants to Fix", "Central European Banking Exposure and Geopolitical Risk", "The Far-Right Election Win and Coalition Chaos"]
  }
]

async function main() {
  console.log('Saving economy writeups batch 6 - Europe (Austria)...\n')

  for (const writeup of writeups) {
    console.log(`Processing ${writeup.name}...`)

    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: "country",
            category: "economy"
          }
        },
        create: {
          name: writeup.name,
          type: "country",
          country: writeup.name,
          lat: writeup.lat,
          lng: writeup.lng,
          category: "economy",
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          updatedAt: new Date()
        }
      })
      console.log(`✓ ${writeup.name} saved (${writeup.summary.length} chars)\n`)
    } catch (error) {
      console.error(`✗ Error saving ${writeup.name}:`, error)
    }
  }

  await prisma.$disconnect()
  console.log('Batch 6 complete!')
}

main().catch(console.error)
