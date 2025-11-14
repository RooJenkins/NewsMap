import { PrismaClient } from '@prisma/client'
import { ALL_COUNTRIES } from './generation-helpers'

const prisma = new PrismaClient()

// Technology writeups for remaining 94 countries (21-114)
// Voice: Ben Thompson - Strategic business analysis, Aggregation Theory, platform dynamics
const TECH_WRITEUPS = [
  // AMERICAS REMAINING (2)
  {
    name: 'Uruguay',
    lat: -32.5228,
    lng: -55.7658,
    summary: `# Uruguay - Technology

The strategic question about Uruguay's technology sector isn't whether it can compete with Brazil or Argentina in absolute scale—it obviously cannot with 3.5 million people—but whether it can create a differentiated position as Latin America's most stable, institutionally sound jurisdiction for technology operations. This is precisely what Uruguay has attempted, positioning itself as the "Switzerland of South America" for digital businesses. The country offers political stability rare in the region, strong rule of law, competitive tax treatment for technology exports, excellent telecommunications infrastructure (near-universal fiber optic coverage), and a well-educated workforce. From a business model perspective, Uruguay is arbitraging its institutional advantages: companies can operate with First World legal certainty while accessing emerging market cost structures and Latin American time zones. This matters for specific technology subsectors—fintech, gaming, enterprise software development, business process outsourcing—where regulatory certainty and infrastructure reliability are critical. The strategy has shown results: technology service exports exceeded $2 billion annually, representing roughly 25% of total exports. Major operations include Mercado Libre's technology center, Globant, dLocal (payments processor), and numerous gaming companies. But the fundamental constraint is scale: Uruguay cannot build hyperscale data centers or develop complete semiconductor supply chains. Success requires finding niches where small scale with high quality beats large scale with institutional friction.

## The Big Issue 1: The Regulatory Arbitrage Play

Uruguay's core technology strategy is regulatory and institutional arbitrage—creating business-friendly rules that attract digital operations from larger neighbors. This manifests in several ways: the free trade zone regime provides tax benefits for service exports, cryptocurrency regulation is progressive and clear (unlike Brazil's historical ambiguity), data privacy laws are substantive but business-practical, and intellectual property protection is reliable. From an Aggregation Theory perspective, Uruguay is attempting to become a preferred operations node for platform businesses serving the broader Latin American market. Mercado Libre, headquartered in Uruguay despite operating across 18 countries, exemplifies this: the company benefits from Uruguayan legal certainty while accessing regional markets. dLocal, which processes payments in 38 emerging markets, is similarly structured—Uruguayan incorporation provides regulatory clarity while the business model is inherently global. The gaming sector illustrates the approach particularly well: companies like Popcore (casual gaming), Ironhide (tower defense games), and numerous others operate from Montevideo, accessing global markets through digital distribution while benefiting from Uruguayan talent and institutional environment. The unit economics work: developer salaries are lower than Silicon Valley or Western Europe but higher than other Latin American locations, creating acceptable costs with superior quality. The strategic risk is commoditization—if other Latin American countries improve institutions and regulatory frameworks, Uruguay's differentiation erodes. Brazil under recent administrations has made efforts to improve business environment; Argentina under Milei is explicitly pursuing technology-friendly policies. Uruguay must continuously improve to maintain advantage.

## The Big Issue 2: Talent Pool Constraints and Brain Circulation

With 3.5 million population, Uruguay faces fundamental human capital limits. The university system (Universidad de la República) produces approximately 1,500 technology graduates annually—impressive per capita but small in absolute terms. This creates a strategic choice: either accept scale constraints or integrate into global talent networks through remote work and diaspora engagement. Uruguay has pursued both: immigration policy explicitly targets technology workers, offering straightforward residency pathways (this attracted some Argentine and Venezuelan technologists escaping economic chaos), while simultaneously embracing remote work for Uruguayan professionals serving international companies. The business model logic is clear: if Uruguayan developers can work remotely for U.S. or European companies while remaining in Uruguay, the country captures the consumption and some tax revenue even if intellectual property and primary value creation occur elsewhere. This is a fundamentally different model than trying to build complete domestic technology ecosystems—it's accepting position as a node in global networks rather than an autonomous center. The government has facilitated this through infrastructure: Uruguay has Latin America's best residential internet (90% fiber optic coverage, 250+ Mbps typical speeds), making remote work technically feasible. The challenge is retention: Uruguayan technology talent is globally mobile, and while quality of life advantages (safety, education, healthcare, beaches) provide retention factors, total compensation from U.S. tech giants or eventual emigration remain constant pressures. The strategic response has been creating "good enough" opportunities domestically—salaries that, while not matching Silicon Valley, are solid by Uruguayan standards, combined with quality of life that is genuinely superior to São Paulo or Buenos Aires.

## The Big Issue 3: Infrastructure as Differentiator

Uruguay has made telecommunications infrastructure a strategic priority, with results that differentiate it in Latin America. ANTEL, the state-owned telecom, deployed fiber optic to over 90% of households—one of the highest rates globally and exceptional for a developing country. This wasn't just about consumer service; it was explicit infrastructure-led development strategy to position Uruguay for digital economy participation. From a competitive dynamics perspective, this matters enormously: reliable, high-speed connectivity is prerequisite for fintech operations, software development, business process outsourcing, and online gaming. Brazil has excellent infrastructure in major cities but poor coverage in smaller cities; Argentina has chronic connectivity issues outside Buenos Aires. Uruguay offers nationwide reliability. The data center sector has developed accordingly: several international-grade facilities operate in Uruguay serving latency-sensitive applications for the Southern Cone market. The business model is serving regional demand where Uruguayan infrastructure reliability and regulatory clarity justify premium over pure cost locations. The electricity grid presents similar dynamics—99%+ reliability from renewable energy mix (primarily hydroelectric and wind), contrasting with frequent outages in neighboring countries. For data center operations or technology manufacturing requiring uninterrupted power, this matters. The strategic challenge is that infrastructure advantages are replicable with sufficient investment. Uruguay's current position reflects both genuine investment and neighbors' historical underinvestment. As Brazil, Argentina, Chile improve infrastructure, Uruguay's differential narrows unless it continues advancing.

## The International Angle

Uruguay's technology positioning matters primarily as a model for small countries in the digital economy: rather than attempting autarchy or competing on absolute scale, find niches where institutional quality, infrastructure, and talent create competitive advantages. Singapore pursued similar strategy in Southeast Asia; Estonia in Northern Europe; Ireland in Western Europe. The approach requires genuine commitment to rule of law, transparent regulation, infrastructure investment, and education—precisely where many developing countries struggle. For international technology companies, Uruguay represents a "safe harbor" in a sometimes turbulent region: if you need reliable operations for Latin America but want to minimize country risk, Uruguay is an option. This matters for fintech particularly, where regulatory certainty is critical. In U.S.-China technology competition dynamics, Uruguay maintains neutrality—open to Chinese investment but aligned with Western IP and data governance norms. This balanced approach allows access to both technology ecosystems, valuable for a small country without capacity to pick sides definitively.

## The Bottom Line

Uruguay has successfully leveraged small scale with high institutional quality to carve a technology niche in Latin America. The business model is fundamentally about arbitrage—providing reliability, infrastructure, and regulatory clarity at price points attractive to companies serving regional or global markets. This has generated legitimate technology sector growth, with service exports now material to the economy. The strategic challenge is sustainability: institutional advantages are maintainable only through continuous improvement, talent constraints require creative solutions through remote work and immigration, and larger neighbors improving their business environments could compress margins. Uruguay has proven that small countries can succeed in digital economy, but success requires executing excellence across institutions, infrastructure, education, and policy coherently and continuously. The next five years will test whether Uruguay can maintain differentiation or whether larger markets inevitably dominate through scale advantages.`,
    issues: ['The Regulatory Arbitrage Play', 'Talent Pool Constraints and Brain Circulation', 'Infrastructure as Differentiator']
  },
  {
    name: 'Venezuela',
    lat: 6.4238,
    lng: -66.5897,
    summary: `# Venezuela - Technology

Consider what happens when a country with significant human capital, some technology infrastructure, and previous digital economy participation experiences complete economic collapse: you get Venezuela, where technology sector remnants survive primarily through cryptocurrency adoption, remote work for foreign companies, and emigration of talent. The strategic question isn't whether Venezuela can build a competitive technology sector under current conditions—it manifestly cannot with hyperinflation, electricity blackouts, internet censorship, and institutional breakdown—but rather whether the diaspora and remaining technical capacity can position for recovery if and when economic and political stabilization occurs. Venezuela had, prior to the Bolivarian economic disaster, legitimate technology capabilities: strong engineering education, petroleum sector technical sophistication, early internet adoption in Latin America, and emerging software development. All of this has been decimated by capital flight, talent emigration, infrastructure deterioration, and policy incompetence. What remains is fascinating from a business model perspective: Venezuelans have become perhaps the world's most crypto-adopted population out of necessity, using cryptocurrency as store of value, payment mechanism, and inflation hedge when the bolivar became worthless. This organic, survival-driven crypto adoption provides real-world stress testing of cryptocurrency functionality that no amount of Silicon Valley theorizing could replicate. Whether this positions Venezuela advantageously for eventual recovery or is merely a coping mechanism for ongoing crisis remains uncertain.

## The Big Issue 1: Cryptocurrency Adoption as Economic Survival

Venezuela has among the highest cryptocurrency adoption rates globally, and unlike El Salvador's government-mandated Bitcoin adoption or wealthy country speculative trading, Venezuelan use is driven by economic necessity. When your currency loses 99.9% of value and capital controls prevent accessing dollars, cryptocurrency becomes a rational alternative despite volatility and technical complexity. From a business model perspective, Venezuelans are solving real unit economics problems with crypto: remittances from diaspora (over 7 million Venezuelans have emigrated), cross-border payments for remote work, savings that maintain some value rather than disappearing overnight, and even retail transactions in areas with sufficient smartphone penetration and internet access. The payment flows are material: Venezuela consistently ranks near the top in cryptocurrency transaction volumes on peer-to-peer exchanges. Bitcoin, Ethereum, stablecoins (particularly USDT and USDC), and even smaller cryptocurrencies see real usage. The government's response has been characteristically incoherent: launching the Petro, an oil-backed cryptocurrency that was essentially a fraud and fundraising scheme; simultaneously cracking down on cryptocurrency mining while also engaging in it through state entities; and recently attempting to regulate and tax crypto transactions while maintaining capital controls. This creates a bizarre equilibrium: cryptocurrency provides genuine utility for population survival, government nominally opposes it for control reasons but tacitly permits it because suppression would be both unpopular and practically difficult. The infrastructure exists despite obstacles: local exchanges operate (Cryptobuyer, Reserve, others), peer-to-peer trading is extensive, and merchants increasingly accept cryptocurrency payments. The strategic question is whether this positions Venezuela advantageously when (if) economic stabilization occurs. If cryptocurrency becomes increasingly important in global finance, Venezuela has genuine grassroots expertise and adoption infrastructure. But if crypto remains niche or regulatory crackdowns globally intensify, survival-driven adoption may be merely that—survival—with no long-term competitive advantage created.

## The Big Issue 2: The Diaspora Technology Economy

Venezuelan technology talent has largely emigrated, creating a diaspora economy where professionals work for international companies while maintaining some connection to Venezuela. This matters because Venezuelan engineering education, particularly from universities like Universidad Simón Bolívar and Universidad Central de Venezuela, was historically strong. These graduates now work across Latin America (Colombia, Chile, Argentina are major destinations), the United States, Spain, and increasingly anywhere remote work permits. From a value capture perspective, Venezuela gets minimal benefit—perhaps some remittances, but the intellectual property, corporate value, and career progression accrue elsewhere. This is brain drain in its most literal form: the country invested in education (which was high quality and largely state-funded), then economic collapse drove talent abroad, with receiving countries capturing all value. Within Venezuela, those who remain and have technical skills increasingly work remotely for foreign companies, receiving payment in cryptocurrency or foreign currency. This provides income substantially above local wage levels (which are crushed by hyperinflation), creating a small but notable class earning First World incomes while living with Third World costs and infrastructure. The business model is straightforward: arbitrage global wage differences while accepting Venezuela's infrastructure deficiencies. This requires solutions to electricity unreliability (backup generators, battery systems), internet instability (redundant connections, mobile data backup), and security concerns. For Venezuelan remote workers, the unit economics work despite difficulties—$3,000-4,000 monthly income goes much farther in Caracas than in Bogotá or Miami. The limitation is scale: this supports thousands of professionals, not an economy. And the infrastructure constraints mean anyone who can emigrate generally does, as soon as financial resources permit.

## The Big Issue 3: Infrastructure Collapse and Reconstruction Challenge

Venezuela's technology infrastructure has deteriorated catastrophically: electricity blackouts are routine (the March 2019 blackout lasted nearly a week, and subsequent failures occur regularly), internet connectivity is unreliable and increasingly censored, mobile networks are degraded, and physical infrastructure like data centers barely function. This isn't hyperbole—Venezuela's internet penetration has declined from over 60% to below 30%, telecommunications infrastructure maintenance has essentially stopped, and CANTV (state-owned telecom) provides service that is frequently non-functional. From a competitive positioning perspective, this is devastating: you cannot run fintech, e-commerce, cloud services, gaming, or any digital business when electricity and internet are unreliable. The few technology operations that persist do so through extraordinary measures—backup generators, satellite internet, redundant systems—that destroy unit economics. The strategic challenge for any Venezuelan recovery scenario is that rebuilding technology infrastructure requires massive capital investment that the country has no capacity to finance, and foreign investment requires political/economic stability that doesn't exist. This creates a vicious cycle: without infrastructure, technology sector cannot develop; without economic growth including from technology, resources don't exist for infrastructure investment. Breaking this cycle requires external financing (World Bank, IDB, bilateral aid) contingent on political change and economic reform. The technical talent exists (or existed, pre-emigration), market size is significant (28 million people), and location provides advantages for serving Latin American markets. But none of this matters without functioning electricity and telecommunications.

## The International Angle

Venezuela's technology story matters internationally primarily as cautionary tale: economic mismanagement can destroy even relatively developed sectors remarkably quickly. For the technology diaspora, Venezuela represents both tragedy and opportunity—the tragedy of squandered potential, but opportunity in that Venezuelan technologists have proven adaptable, entrepreneurial, and capable when given functional operating environments. Numerous technology startups in Colombia, Chile, Argentina, and the United States have Venezuelan founders or significant Venezuelan technical teams. If Venezuela eventually stabilizes (which requires political change, economic reform, and multi-year reconstruction), the diaspora could potentially be mobilized for recovery—but this requires both stabilization and incentives for return, neither currently present. In terms of U.S.-China dynamics, Venezuela under Maduro has aligned with China (and Russia, Iran) including for technology and surveillance infrastructure, though Venezuela's inability to pay means even these partnerships are limited. A democratic Venezuela could reorient toward Western technology ecosystems, but this is speculative given current political realities.

## The Bottom Line

Venezuela's technology sector has been essentially destroyed by economic collapse, with remnants surviving through cryptocurrency adoption (driven by necessity), remote work for foreign companies, and emigration of talent. The underlying human capital existed and partially remains, but without functioning infrastructure, political stability, or economic sanity, technology sector development is impossible. The cryptocurrency adoption is genuinely significant and driven by real-world utility rather than speculation, providing a fascinating stress test of crypto's actual functionality. The diaspora represents both loss (brain drain) and potential future asset (knowledge and networks that could support recovery). The fundamental strategic question is whether economic and political stabilization will occur, because without it, technology discussion is theoretical. If stabilization happens, Venezuela has location advantages, significant market size, historical technical capacity, and a diaspora with relevant expertise. But the infrastructure reconstruction required is enormous, and the institutional reforms necessary—rule of law, property rights, central bank independence, anti-corruption—are politically difficult. Current trajectory suggests continued decline rather than recovery, making Venezuela's technology sector primarily a case study in how policy failure destroys economic capacity across all sectors.`,
    issues: ['Cryptocurrency Adoption as Economic Survival', 'The Diaspora Technology Economy', 'Infrastructure Collapse and Reconstruction Challenge']
  }
]

// Note: This file will be completed with all 94 countries in subsequent edits
// due to length constraints. This is the framework and first 2 countries.

async function saveBatch(writeups: typeof TECH_WRITEUPS) {
  let completed = 0

  for (const writeup of writeups) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'technology'
          }
        },
        create: {
          name: writeup.name,
          type: 'country',
          country: writeup.name,
          lat: writeup.lat,
          lng: writeup.lng,
          category: 'technology',
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

      completed++
      console.log(`✅ ${writeup.name} (${writeup.summary.length} chars)`)
    } catch (error) {
      console.error(`❌ Error saving ${writeup.name}:`, error)
    }
  }

  return completed
}

async function main() {
  console.log('📱 Saving Technology writeups - Ben Thompson voice\n')

  const completed = await saveBatch(TECH_WRITEUPS)

  console.log(`\n📊 Saved ${completed} countries`)
  console.log(`📈 Total technology writeups: ${20 + completed}/114\n`)

  await prisma.$disconnect()
}

main().catch(console.error)
