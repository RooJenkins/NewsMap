import { PrismaClient } from '@prisma/client'
import { ALL_COUNTRIES } from './generation-helpers'

const prisma = new PrismaClient()

// Countries 1-20 (Americas)
const batch1Countries = ALL_COUNTRIES.slice(0, 20)

const writeups = [
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `# Argentina - Technology

The key question about Argentina's technology sector isn't whether it can produce talent—it already does, at remarkable scale—but whether Javier Milei's radical economic experiment will keep that talent in Buenos Aires or send it fleeing to Miami. Argentina has long been Latin America's most sophisticated technology market: strong engineering education, a startup culture that predates the current boom, and a cost structure that made it attractive for outsourcing before "nearshoring" became fashionable. But inflation exceeding 200% annually doesn't just destroy consumer purchasing power; it obliterates the unit economics of any business operating in pesos. What we're seeing now is fascinating from an Aggregation Theory perspective: Milei has fully dollarized technology contracting, eliminated currency controls for tech exports, and positioned Argentina as a libertarian paradise for digital businesses. Mercado Libre, Latin America's Amazon, is headquartered here and now valued at over $90 billion. But the government is simultaneously cutting science funding by 30%, shuttering the Ministry of Science and Technology, and eliminating subsidies that supported early-stage startups. This matters because Argentina's tech sector represents the country's most realistic path to First World status—more than agriculture, more than natural resources. Whether it survives Milei's creative destruction will determine Argentina's economic future.

## The Big Issue 1: Mercado Libre and Platform Dominance

Mercado Libre is the strategic story here, and it's a perfect validation of Aggregation Theory. Marcos Galperin built what is essentially the Amazon of Latin America—e-commerce, payments (Mercado Pago), logistics, credit—from Buenos Aires, defying everyone who said you couldn't build a platform business in an emerging market. The company now operates across 18 countries, processes $40 billion in payment volume annually, and has become indispensable infrastructure. This matters strategically because platform businesses create compounding advantages: more buyers attract more sellers, which attracts more buyers, while payment data enables credit offerings that further entrench the platform. Amazon spent two decades trying to crack Latin America and failed; Mercado Libre won by understanding local conditions—cash-on-delivery, installment payments, dealing with unreliable postal systems. But here's the tension: as Argentina's economy implodes, Mercado Libre increasingly looks Brazilian (it derives more revenue from Brazil than Argentina) or pan-Latin American rather than Argentine. The company maintains significant engineering operations in Buenos Aires, employing thousands of highly skilled developers, but it's hedging by expanding elsewhere. For Argentina, this is the strategic risk: your most successful technology company is diversifying away from dependence on you. If Mercado Libre succeeds globally while Argentina continues failing economically, it proves that Argentina can produce world-class technology talent but cannot retain the value that talent creates. That's a damning indictment.

## The Big Issue 2: The Brain Drain Calculus

Buenos Aires has produced a disproportionate share of Latin America's engineering talent for decades. The university system, particularly Universidad de Buenos Aires (UBA), offers free education and produces technically sophisticated graduates. But inflation at 200%+ fundamentally breaks the economic logic of staying. A senior software engineer in Buenos Aires might earn $30,000 annually in peso terms; that same person in Miami earns $150,000+, and in the current environment, there's no currency risk eating away at savings. What we're seeing is a calculated acceleration of brain drain. Milei's government has made it easier to work remotely for foreign companies while living in Argentina—no currency controls on tech services exports, simplified tax treatment—but that's a temporary patch. The fundamental issue is that Argentina cannot offer the economic stability that knowledge workers require for long-term planning. Tech workers aren't like agricultural laborers; they're globally mobile and can take their expertise anywhere. This creates a perverse equilibrium: Argentina educates engineers at public expense, those engineers work remotely for American companies while living in Buenos Aires (enjoying low cost of living), and then emigrate once they want to buy property or start families. The country captures none of the long-term value. Historically, Argentina retained talent through cultural attachment—Buenos Aires is a genuinely cosmopolitan city, with culture rivaling European capitals. But when you can't afford to eat out or cultural institutions are closing due to budget cuts, culture becomes insufficient. The strategic question is whether Milei's dollarization and deregulation can stabilize the economy fast enough to reverse brain drain, or whether the short-term pain accelerates it catastrophically.

## The Big Issue 3: The Science Funding Collapse

Here's where Milei's libertarian experiment collides with technological reality: he's cut government science funding by 30% and shuttered the Ministry of Science and Technology entirely, arguing that market forces should determine research priorities. This is ideologically pure and strategically foolish. Technology development requires patient capital and basic research that doesn't immediately commercialize—exactly what markets underprovide. Argentina had built legitimate scientific capabilities: biotechnology, agricultural technology, nuclear research, and increasingly AI research. CONICET, the National Scientific and Technical Research Council, employed 10,000 researchers and supported thousands more. Milei views this as state waste; scientists view it as the foundation for innovation. The business model question is: who funds research if government doesn't? In the U.S., it's a combination of government (NIH, NSF, DARPA), universities with massive endowments, and corporate R&D. Argentina has none of those at scale. Venture capital exists but focuses on near-term commercialization, not basic research. Universities are chronically underfunded. Corporations are mostly foreign multinationals with R&D located elsewhere. So cutting government research funding doesn't shift innovation to the private sector; it simply eliminates innovation. For context, Israel—another small country punching above its weight in technology—spends 5% of GDP on R&D, with significant government support. Argentina is moving toward zero. This matters because technological development isn't just about coding; it's about the broader ecosystem of research, experimentation, and knowledge creation. If you gut that, you become a source of cheap labor for foreign companies rather than a creator of valuable intellectual property.

## The International Angle

Argentina's technology sector is being watched closely as a test case for whether radical free-market policies can jumpstart innovation in emerging markets. Silicon Valley libertarians are genuinely excited about Milei's experiment—eliminate regulation, slash government, let markets allocate resources—and some are betting real money on Argentine startups. Y Combinator has funded several Argentine companies; Andreessen Horowitz is looking at opportunities. But the flip side is that China, which had been investing in Argentine technology infrastructure, is now pulling back as the government pivots toward Washington. This matters for 5G networks, cloud infrastructure, and AI development, where Chinese companies had been competitive bidders. The U.S.-China technology competition is playing out in Argentina's policy choices: align with American tech platforms and capital, or maintain openness to Chinese infrastructure and investment. Milei has chosen the former, which brings American capital but also American dependencies. For European observers, Argentina is a cautionary tale about what happens when you don't maintain industrial policy for strategic sectors. And for other Latin American countries—Brazil, Mexico, Colombia—Argentina is both inspiration (Mercado Libre proves you can build globally competitive platforms) and warning (economic instability will destroy even your most promising sectors).

## The Bottom Line

Argentina's technology sector is genuinely world-class but existentially threatened by economic chaos. Milei's bet is that dollarization, deregulation, and fiscal discipline will create stability that allows tech to flourish; the risk is that gutting government support while the economy contracts drives irreplaceable talent abroad and collapses the research ecosystem that feeds future innovation. Mercado Libre proves Argentina can build platform businesses that matter globally, but it also shows that success means becoming less Argentine over time. The next two years will determine whether Argentina becomes a technology powerhouse or a cautionary tale about squandering human capital.`,
    issues: ['Mercado Libre and Platform Dominance', 'The Brain Drain Calculus', 'The Science Funding Collapse']
  },
  {
    name: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    summary: `# Bolivia - Technology

Consider the strategic implications of a country sitting on potentially half the world's lithium reserves—the critical input for electric vehicle batteries—while lacking the technological capacity to extract and process it profitably. This is Bolivia's fundamental technology dilemma, and it reveals everything about the gap between natural resources and technological capability. Under Evo Morales and the MAS government, Bolivia pursued "resource nationalism": lithium would be extracted by state companies, processed domestically, with Bolivia capturing maximum value. It was economically nationalistic and technologically naive. Lithium extraction requires specific chemical and engineering expertise, particularly in Bolivia where deposits are in salt flats at high altitude, requiring different techniques than Australian hard-rock mining. After 15 years of state-led development, Bolivia has barely begun commercial production while Argentina and Chile—with smaller reserves but better technology and foreign partnerships—dominate the market. Now Rodrigo Paz's new government promises to open lithium development to foreign investment and technology partnerships, abandoning resource nationalism for pragmatic commercialization. This matters because electric vehicle adoption globally depends on lithium supply, and Bolivia's failure to develop its reserves represents a massive misallocation of resources. But technology transfer isn't automatic—Chinese companies have the expertise and capital, but Paz is pivoting toward American partnerships for geopolitical reasons. Whether Bolivia can actually develop its lithium while capturing sufficient value domestically will determine whether technological backwardness condemns it to perpetual poverty despite enormous natural wealth.

## The Big Issue 1: Lithium and the Technology Transfer Problem

The fundamental question is: why does Bolivia, with 50% of global lithium reserves, produce less than 1% of global supply? The answer is technological capability and capital access. Lithium extraction from Bolivia's Uyuni salt flats requires dissolving lithium from brine, which is chemically complex and capital-intensive. The MAS government created state enterprise YLB (Yacimientos de Litio Bolivianos) and insisted on domestic processing, refusing foreign partnerships that would involve technology transfer but also profit-sharing. For 15 years, they built pilot plants that never scaled, signed memoranda with Chinese and Russian partners that never materialized, and watched Chile and Argentina become major exporters. From a business model perspective, this was a classic resource curse compounded by technological nationalism. Bolivia wanted to capture 100% of value from lithium but lacked the capability to create that value. It's like insisting on manufacturing iPhones domestically without understanding semiconductor fabrication or supply chain logistics. Now Paz is reversing course, promising to welcome foreign investment and technology partnerships. Chinese companies—particularly CATL and BYD—have the battery technology and manufacturing expertise, but Paz is reportedly prioritizing American and European partners for political reasons, given the U.S.-China technology competition. This creates a dilemma: Chinese technology transfer might be faster and cheaper, but accepting it has geopolitical consequences. American companies are interested but more risk-averse and slower-moving. Meanwhile, every year of delay means Bolivia foregoes billions in revenue while global lithium demand grows exponentially. The strategic failure here is treating technology as something you can simply will into existence through nationalism rather than something you must either build painstakingly or acquire through partnerships that involve trade-offs.

## The Big Issue 2: Digital Infrastructure and Connectivity Gaps

Beyond lithium, Bolivia faces prosaic but critical technology challenges around basic digital infrastructure. Internet penetration is around 50%, mobile connectivity is limited outside major cities, and fixed broadband is rare. This isn't just about consumer inconvenience; it's about whether Bolivia can participate in the digital economy at all. E-commerce barely exists, fintech is embryonic, remote work is impossible for most Bolivians, and government services remain paper-based. The previous government made connectivity a priority rhetorically but implementation was poor: Chinese company Huawei built some infrastructure, there were plans for a Bolivian satellite (built by China), but nothing reached transformative scale. The new government faces a strategic choice about technology dependencies: continue Chinese infrastructure partnerships (cheaper, faster deployment, but creates long-term dependencies), pursue Western alternatives (more expensive, politically safer), or try to build domestic capacity (unrealistic given funding constraints). From an Aggregation Theory perspective, Bolivia is being excluded from global digital platforms—WhatsApp business tools, cloud computing, digital payments—because the infrastructure doesn't support them at scale. This creates a vicious cycle: without connectivity, you can't build digital businesses; without digital businesses, there's no economic justification for connectivity investments. Breaking this cycle requires patient capital that Bolivia doesn't have and foreign investment with terms Bolivia historically hasn't accepted. The World Bank and IDB offer development financing, but it comes with conditions about privatization and market liberalization that the MAS government rejected. Whether Paz accepts them will determine whether Bolivia gets digital infrastructure this decade or remains disconnected.

## The Big Issue 3: Education and Human Capital Deficits

The deeper technology challenge is human capital: Bolivia simply doesn't produce enough engineers, scientists, and technologists to support a knowledge economy. University enrollment has grown, but quality is poor, engineering programs are outdated, and brain drain is severe—anyone with technical skills emigrates to Chile, Argentina, Brazil, or further abroad. This matters because technological development isn't just about importing equipment; it's about having people who can deploy, maintain, and innovate with that technology. Consider lithium extraction again: even if Bolivia partners with foreign companies, it needs Bolivian engineers who understand the process, can troubleshoot problems, and eventually can lead operations themselves. If those people don't exist, Bolivia remains permanently dependent on foreign expertise, and value capture is minimal. The previous government invested in free university education but quality declined as enrollment exploded without corresponding funding. Scientific research was chronically underfunded, laboratories lacked equipment, and salaries were so low that anyone with expertise left. Paz's market-oriented approach might attract foreign companies but won't automatically fix education. In fact, cutting government spending—which Paz has promised to do—might make education worse. The strategic challenge is that human capital development requires decades of patient investment with delayed returns, exactly what market-based systems typically underprovide and what poor governments can't afford. Countries that successfully built technology capacity—Taiwan, South Korea, Israel—all used heavy government intervention in education and industrial policy. Whether Bolivia can replicate that with free-market policies is genuinely questionable.

## The International Angle

Bolivia's technology trajectory matters globally primarily because of lithium: electric vehicle adoption worldwide depends on battery supply, and Bolivia's failure to develop its reserves creates supply constraints that raise prices and slow the energy transition. China has been the dominant player in Bolivia's technology sector—Huawei built telecoms infrastructure, Chinese companies pursued lithium partnerships, Chinese satellite technology supported connectivity. Paz's pivot toward the U.S. and away from China is part of the broader U.S.-China technology competition playing out globally, where America is trying to secure supply chains for critical minerals while excluding Chinese companies. For Europe, Bolivia represents both an opportunity (lithium supply for European battery manufacturers and EV makers) and a frustration (endless delays in development due to political instability). The IMF and World Bank see Bolivia as a test case for whether market-based reforms can unlock development in resource-rich but technologically backward countries. And for other resource-rich developing nations—Mongolia, Democratic Republic of Congo, Afghanistan—Bolivia's experience offers lessons about the limits of resource nationalism when you lack technological capacity. The energy transition requires enormous amounts of lithium, copper, cobalt, and rare earths, mostly located in developing countries. If those countries can't develop resources profitably themselves and won't allow foreign partnerships, the transition stalls.

## The Bottom Line

Bolivia possesses resources that should make it wealthy but lacks the technological capacity to monetize them, creating a textbook case of the resource curse compounded by technological nationalism. Paz's pivot toward foreign partnerships and market economics offers a path to development, but success requires solving technology transfer, human capital deficits, and infrastructure gaps simultaneously—a genuinely difficult challenge. Lithium should be Bolivia's ticket to prosperity, but only if the government can accept the trade-offs between resource sovereignty and technological capacity. The next five years will determine whether Bolivia finally develops its lithium reserves or watches global battery production shift to synthetic alternatives because Bolivian supply remains unreliable.`,
    issues: ['Lithium and the Technology Transfer Problem', 'Digital Infrastructure and Connectivity Gaps', 'Education and Human Capital Deficits']
  }
]

async function main() {
  console.log('📱 BATCH 1: Generating Technology writeups for countries 1-20 (Americas)\n')

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

  console.log(`\n📊 PROGRESS: ${completed}/114 countries completed\n`)

  await prisma.$disconnect()
}

main().catch(console.error)
