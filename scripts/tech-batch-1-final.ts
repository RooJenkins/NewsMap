import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 5-20 to complete batch 1
const writeups = [
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    summary: `# Chile - Technology

This matters because: Chile is positioning itself as Latin America's technology leader through a combination of favorable startup regulation, strategic lithium reserves, and aggressive pursuit of digital transformation—but November's presidential election between far-left and far-right candidates could derail everything. The country has built impressive technology fundamentals: fastest internet speeds in Latin America, highest digital adoption rates, a thriving Santiago startup ecosystem that produced exits like Cornershop (acquired by Uber for $3B) and NotCo (plant-based foods unicorn). But the strategic asset is lithium—Chile sits on the world's second-largest reserves after Bolivia and actually produces commercially, unlike Bolivia's failed state-led approach. This positions Chile as crucial infrastructure for electric vehicle batteries and energy storage. The key question is whether Chile's next government maintains the market-friendly policies that enabled technology growth or pivots toward resource nationalism and state intervention. If Jeannette Jara wins, she's promised to nationalize lithium extraction under state control, potentially repeating Bolivia's mistakes. If José Antonio Kast wins, he'll likely maintain openness to foreign investment but with Chinese partnerships complicated by geopolitical tensions. From a strategic perspective, Chile represents the clearest test of whether market-oriented policies can build technology sectors in developing economies, or whether state intervention is necessary to capture value from natural resources and technical capacity.

## The Big Issue 1: Lithium Economics and Technology Dependencies

Chile produces about 26% of global lithium, making it the world's second-largest supplier after Australia. Unlike Bolivia's resource nationalism, Chile partnered with private companies—SQM (partially owned by China's Tianqi) and Albemarle—to extract and process lithium profitably. This pragmatic approach has made Chile wealthy from lithium while Bolivia remains poor despite larger reserves. The business model is straightforward: foreign companies bring capital and technology, Chile provides resources and takes royalties/taxes, everyone profits. But Jara's campaign promises to end this, arguing Chile should capture 100% of lithium value through state ownership. This is economically questionable for the same reasons Bolivia failed: lithium extraction requires specialized chemical engineering, massive capital investment, and integration into global battery supply chains. State companies can theoretically do this, but Chile's historical experience with state enterprises is mixed at best. The strategic tension is real—lithium revenues fund Chile's social programs and infrastructure investment, so mismanaging development would have immediate fiscal consequences. Meanwhile, the technology dependencies are complex: Chinese companies (Tianqi, Ganfeng) are major players in Chilean lithium, creating geopolitical risk if U.S.-China tensions escalate. American and European companies want access to Chilean lithium for their own battery supply chains, offering partnerships but demanding favorable terms. Kast would likely maintain openness to all bidders; Jara might prioritize "strategic partnerships" with China or pursue full nationalization. For global electric vehicle adoption, Chilean lithium is genuinely important—Tesla, VW, and other manufacturers depend on battery supply, and disrupting Chilean production would increase prices and slow the energy transition globally.

## The Big Issue 2: Startup Ecosystem and Regulatory Environment

Santiago has emerged as one of Latin America's strongest technology ecosystems, with notable successes: Cornershop (Uber acquisition for $3B), NotCo (plant-based unicorn backed by Jeff Bezos), Mercado Libre engineers (though headquartered in Argentina), and hundreds of smaller startups. This happened because Chile offered: stable macroeconomic environment relative to neighbors, business-friendly regulations, relatively uncorrupt government, and good infrastructure. Startup Chile, a government accelerator launched in 2010, seeded the ecosystem by bringing global entrepreneurs to Santiago and creating demonstration effects. But success also revealed limitations: Chilean startups that achieve scale often relocate headquarters to U.S. or expand regionally because Chilean market is too small (19 million people). This is the perpetual emerging market challenge—you can build technology capacity locally, but scaling requires either massive addressable markets (like India/China) or regional expansion (challenging in fragmented Latin America). The election matters because regulatory environment determines whether startups continue forming and growing. Jara's platform includes stricter labor regulations, higher corporate taxes, and more extensive social obligations—all of which increase costs for startups operating on thin margins. Kast promises lighter regulation and lower taxes, which helps startups but may exacerbate inequality that drove the 2019 social explosion. From a business model perspective, the optimal policy is probably moderate—enough regulation to maintain social stability and rule of law, but not so much that it strangles innovation. Whether either candidate can thread that needle is questionable.

## The Big Issue 3: Digital Infrastructure and Connectivity

Chile leads Latin America in internet infrastructure: 98% mobile coverage, average internet speeds faster than Portugal or Greece, and government commitment to digital public services. This provides foundation for technology sector growth—e-commerce, fintech, remote work, digital health all require reliable connectivity. The government has invested heavily through subsidies and regulations requiring providers to extend coverage to rural areas. But maintaining this lead requires continued investment as technology evolves: 5G deployment, fiber expansion, data center capacity, cloud infrastructure. Here's where technology dependencies and geopolitical tensions create challenges: Huawei built significant portions of Chile's 4G infrastructure and bid aggressively for 5G contracts. The U.S. pressured Chile to exclude Huawei, arguing security risks and Five Eyes intelligence sharing concerns. Chile partially complied, banning Huawei from critical infrastructure but allowing equipment in less sensitive applications. This creates a fractured approach that may limit system efficiency. Kast would likely align more closely with U.S. preferences, fully excluding Chinese technology. Jara might maintain pragmatic approach or even embrace Chinese infrastructure as cost-effective alternative. For Chilean consumers and businesses, the question is whether political considerations should override technical and economic optimization. Huawei offers cheaper equipment and faster deployment; Western alternatives are more expensive but politically safer. This choice repeats across developing nations globally, and Chile's approach will influence neighbors.

## The International Angle

Chile's technology trajectory matters disproportionately because of lithium: global energy transition depends on battery supply, and Chilean policy toward lithium extraction directly affects electric vehicle prices and adoption timelines. If Jara nationalizes lithium and production drops (as happened in Bolivia), battery costs increase globally and climate goals become harder to achieve. For the U.S., Chile represents both opportunity (lithium supply for American manufacturers, democratic ally in tech-dependent sectors) and risk (Chinese ownership stakes in lithium companies, potential nationalization). Europe sees Chile similarly—a crucial lithium supplier where political stability and market access matter enormously. China has invested heavily in Chilean lithium and sees the country as key to battery supply chains; losing access would force greater reliance on Australian production or risky African mining. For other Latin American nations, Chile's experience offers lessons: market-friendly policies can build technology sectors and monetize natural resources, but inequality and social instability can quickly destroy those gains. The 2019 protests that paralyzed Santiago showed that technology sector success and macroeconomic stability aren't sufficient if most citizens feel left behind. Whether Chile's next government can balance innovation, resource development, and social equity will determine whether the country remains a regional technology leader or follows neighbors into economic instability.

## The Bottom Line

Chile built Latin America's strongest technology ecosystem through market-friendly policies, strategic lithium development, and digital infrastructure investment. The presidential election poses an existential question: continue the model that generated success but created inequality, or pivot toward state intervention that promises equity but risks economic stagnation. For technology specifically, Jara's lithium nationalization threatens to repeat Bolivia's failures while Kast's market approach may exacerbate the social tensions that nearly collapsed Chilean democracy in 2019. The strategic challenge is that there's no obviously correct answer—pure market economics didn't prevent social explosion, but state intervention has failed repeatedly across the region. Chile's choice will reverberate across Latin America and global lithium markets for decades.`,
    issues: ['Lithium Economics and Technology Dependencies', 'Startup Ecosystem and Regulatory Environment', 'Digital Infrastructure and Connectivity']
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: `# Colombia - Technology

The key question: can Colombia transform from cocaine cartel reputation to legitimate technology powerhouse, or will security challenges and political instability perpetually limit its potential? Under President Gustavo Petro, Colombia is experiencing a technology inflection point—Bogotá and Medellín have emerged as serious startup hubs, digital nomad destinations, and nearshoring alternatives to Mexico. But drug violence, rural insurgency, and political polarization create persistent risks that spook investors and drive talent abroad. What's fascinating is the Medellín transformation: a city once synonymous with Pablo Escobar and cartel violence has deliberately reinvented itself as "the Silicon Valley of Latin America," with innovation districts, startup accelerators, and aggressive government support for technology entrepreneurship. Whether this rebrand succeeds depends on whether security improvements prove durable and whether political stability allows sustained economic policy. The numbers are genuinely impressive: Colombia has produced multiple tech unicorns (Rappi, valued at $5.25B), growing software exports ($1.2B annually), and expanding software engineer pipelines from improving universities. But brain drain remains severe—top talent still leaves for U.S. or European opportunities. From a strategic perspective, Colombia represents nearshoring opportunity for American companies: similar time zones to U.S., improving English language skills, cost advantages over domestic hiring. Whether Colombia captures this opportunity or remains perpetually troubled depends largely on Petro's next two years in office.

## The Big Issue 1: The Nearshoring Opportunity and Competitive Position

Colombia is competing aggressively for nearshoring business—U.S. companies moving operations from China or India to geographically and temporally closer locations. The value proposition is strong: overlapping work hours with U.S. East Coast, costs 40-60% below U.S. domestic hiring, improving English proficiency, and geographic proximity for occasional travel. This has driven growth in software development outsourcing, customer service operations, and increasingly sophisticated engineering work. But Colombia faces stiff competition from Mexico (larger economy, USMCA membership, closer proximity to U.S.) and Costa Rica (more stable, stronger English, better infrastructure). Colombia's advantages are cost (cheaper than Mexico or Costa Rica) and talent availability (major universities producing thousands of engineers annually). Disadvantages are security concerns (rural areas still unstable), infrastructure gaps (electricity reliability, internet speeds outside major cities), and political uncertainty under Petro's left-wing government. From a business model perspective, nearshoring works when you can maintain quality while reducing costs significantly. Colombia can offer 50% cost reduction versus U.S. domestic hiring, which creates genuine arbitrage opportunity. But only if quality is comparable and operational risks are manageable. Security incidents, political instability, or currency volatility can quickly eliminate cost advantages by increasing risk premiums and operational complexity. The strategic play for Colombia is moving up the value chain—going from basic outsourcing (customer service, simple coding) to sophisticated software engineering, AI development, and eventually product creation. Companies like Rappi show this is possible; whether it's replicable at scale depends on education investment and ecosystem development.

## The Big Issue 2: Rappi and Platform Business Ambitions

Rappi is Colombia's great technology success story—a delivery platform that grew from Bogotá to operate across nine Latin American countries, raising billions in venture funding and achieving $5.25B valuation. The business model is classic platform economics: aggregate demand (customers wanting delivery), aggregate supply (restaurants, stores, couriers), take percentage of transactions. What's interesting is how Rappi adapted global platform models (like DoorDash or Uber Eats) to Latin American context: cash-on-delivery, informal economy integration, expansion into financial services (RappiPay), and pharmaceutical delivery. This matters strategically because it shows Colombian companies can build and scale platform businesses that compete with American giants—Rappi has held off Uber Eats and DoorDash in several markets. But it also reveals limits: despite billions in funding and regional expansion, Rappi remains unprofitable and vulnerable to competition. The unit economics are challenging—delivery is expensive, customer acquisition costs are high, and competition drives down margins. The path to profitability likely runs through financial services: if RappiPay can become the primary payment method for unbanked and underbanked Latin Americans, the data and transaction fees could subsidize delivery operations. This is the "super app" strategy that worked for Grab in Southeast Asia and Gojek in Indonesia. Whether Rappi can execute remains unclear, but the strategic ambition is correct—becoming infrastructure for Latin America's digital economy rather than just a delivery company. For Colombia, Rappi's success validates the technology ecosystem and demonstrates that Colombian companies can build at global scale. But sustainability requires actual profitability, which hasn't yet materialized.

## The Big Issue 3: The Petro Factor and Political Risk

Gustavo Petro is Colombia's first leftist president, and his government has created enormous uncertainty for the technology sector. He's proposed: higher taxes on corporations and wealthy individuals, expanded labor protections that increase hiring costs, stricter environmental regulations, and dialogue with guerrilla groups that business community fears legitimizes criminal organizations. For technology startups operating on thin margins, higher costs and regulatory uncertainty are existential threats. Many founders and investors have expressed concerns about Petro's policies driving capital and talent abroad. But there's complexity here: Petro also supports technology development rhetorically, has maintained infrastructure investment, and hasn't implemented radical changes that would immediately damage the sector. The question is whether moderate rhetoric translates to moderate policy, or whether more aggressive left-wing measures are coming. From a business model perspective, political risk is genuinely hard to price: if Petro's full term proves stable and policies stay moderate, Colombia could attract significant investment. If he implements radical redistribution or security deteriorates, capital flees immediately. Investors hate uncertainty, and Petro creates it even when policies are moderate because the fear is that radicalism is coming. This manifests in currency volatility, higher risk premiums on Colombian assets, and slower investment deployment. The counterfactual is whether a right-wing government would be better for technology: probably from business perspective (lower taxes, lighter regulation), but potentially worse from social stability perspective if inequality and violence increase. Colombia's fundamental challenge is that neither pure market economics nor state intervention has solved persistent violence, inequality, and institutional weakness. Technology sector growth happened despite these challenges, but whether it can continue without addressing root causes is questionable.

## The International Angle

Colombia matters to U.S. technology companies as a nearshoring alternative—if Mexico becomes too expensive or politically complicated, Colombia represents the next-best option. For China, Colombia was attractive for infrastructure investment and technology partnerships, but U.S. pressure has limited Chinese presence in sensitive sectors. Europe sees Colombia as an emerging market with potential but also significant risk—more adventurous than Costa Rica, cheaper than Brazil, but more volatile than either. For other Latin American countries, Colombia's technology development path offers lessons: you can build startup ecosystems even with significant security and governance challenges, but scaling requires foreign investment and brain drain management. The cocaine trade's historical role in Colombian economy creates unique reputational challenges—every security incident or violence story reinforces negative stereotypes that technology sector must overcome. Peace deal with FARC guerrillas was supposed to end rural conflict and allow economic development in previously unstable regions, but implementation has been partial and security improvements uneven. For global technology companies considering Colombia, the calculus is: cost savings and talent availability versus operational risks and political uncertainty. Whether that calculus tilts positive depends enormously on next few years of political and security development.

## The Bottom Line

Colombia's technology sector has genuine momentum: successful companies like Rappi, growing nearshoring business, improving startup ecosystem. But political uncertainty under Petro, persistent security challenges, and fierce competition from Mexico and Costa Rica create headwinds. The transformation from cartel economy to technology hub is underway but incomplete—success requires sustained political stability, security improvements, and education investment over the next decade. Medellín's reinvention shows what's possible; whether that success scales nationally or remains localized will determine Colombia's technology future.`,
    issues: ['The Nearshoring Opportunity and Competitive Position', 'Rappi and Platform Business Ambitions', 'The Petro Factor and Political Risk']
  }
]

async function main() {
  console.log('\\n📱 BATCH 1 FINAL: Countries 5-6/114\\n')

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
      console.log(`✅ ${completed}. ${writeup.name} (${writeup.summary.length} chars)`)
    } catch (error) {
      console.error(`❌ Error saving ${writeup.name}:`, error)
    }
  }

  const total = await prisma.locationSummary.count({
    where: {
      type: 'country',
      category: 'technology'
    }
  })

  console.log(`\\n📊 PROGRESS: ${total}/114 Technology writeups (${Math.round(total/114*100)}%)\\n`)

  await prisma.$disconnect()
}

main().catch(console.error)
