import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const batch1Continued = [
  {
    name: 'Brazil',
    lat: -14.2350,
    lng: -51.9253,
    summary: `# Brazil - Technology

This matters because: Brazil is building what could become the Global South's first genuinely independent technology stack, and whether it succeeds or fails will determine whether developing nations can escape permanent dependence on American and Chinese platforms. Under President Lula, Brazil is simultaneously: (1) fighting with Elon Musk over X/Twitter's refusal to comply with content moderation laws, culminating in a nationwide ban that forced 40 million users onto alternatives; (2) pushing a controversial "fake news" bill that critics call censorship and supporters call necessary platform regulation; (3) investing heavily in semiconductor fab capacity and AI development to reduce technology import dependence; and (4) positioning itself as a privacy-respecting alternative to both American surveillance capitalism and Chinese state control. The X ban, which began in September 2024 after Musk refused Supreme Court orders to block certain accounts and pay fines, became a referendum on whether sovereign nations can actually regulate global platforms or whether platform owners hold ultimate power. Brazil chose sovereignty, even at significant economic and user experience cost. From a strategic perspective, this is fascinating: Brazil has 215 million people and the world's ninth-largest economy, making it large enough to matter but not large enough to simply dictate terms. What we're watching is whether middle powers can chart a third path in technology—neither full embrace of American platforms nor Chinese alternatives, but indigenous development with selective partnerships.

## The Big Issue 1: The X Ban and Platform Sovereignty

The Musk-Brazil showdown crystallizes the fundamental question of our era: do platforms serve national law, or does their global nature place them above it? Justice Alexandre de Moraes, who leads Brazil's Supreme Court efforts against disinformation, ordered X to block accounts spreading antidemocratic content and disinformation. Musk refused, calling it censorship, and dissolved X's Brazilian legal entity to avoid having anyone locally who could be held responsible. Brazil responded by banning X entirely in September 2024, blocking access for 40 million users and threatening VPN users with $9,000 daily fines. This isn't just content moderation theater—it's a genuine clash of frameworks. Musk's position is that free speech is absolute and American First Amendment principles should apply globally. Brazil's position is that democracies have the right to defend themselves against disinformation and that platforms operating in Brazilian territory must follow Brazilian law. From a business model perspective, Musk's stance is strategically incoherent: you can't operate a global advertising business while telling major governments their laws don't apply to you. Advertising revenue requires brand safety, which requires content moderation, which requires acknowledging some form of regulatory authority. By positioning X as a free speech absolutist platform, Musk has made it radioactive for advertisers and unsustainable in regulatory environments outside the U.S. Brazil's ban worked, in the sense that X lost 40 million users and significant revenue. Users migrated to Bluesky, Threads, and WhatsApp for news sharing. But it also showed the costs: losing access to a global communication platform, creating enforcement challenges with VPNs, and potentially establishing precedents that authoritarian governments will abuse. The strategic question is whether other countries follow Brazil's lead. If the EU, India, and others start enforcing platform takedowns for regulatory non-compliance, Musk's business model collapses globally. If they don't, Brazil looks isolated.

## The Big Issue 2: The Fake News Bill and Digital Regulation

Brazil's Congress is advancing Bill 2630, dubbed the "fake news bill," which would create comprehensive platform regulation including: requiring platforms to identify and label misleading content, establishing criminal penalties for coordinated disinformation campaigns, mandating transparency about algorithms and content moderation, and creating government oversight mechanisms. Supporters, including many in Lula's government, argue this is necessary to protect democracy from the kind of disinformation that preceded the January 8, 2023 insurrection attempt in Brasília. Critics, including tech companies and civil liberties groups, argue it gives government too much power to determine truth and will be weaponized for political censorship. From a strategic technology perspective, this raises a critical question about platform regulation's business models. The current tech model is: platforms are not publishers, bear minimal responsibility for user content, and use algorithmic amplification to maximize engagement (and thus ad revenue). This model generates enormous value for platform companies but creates massive negative externalities—disinformation, radicalization, election interference. Brazil is trying to change the model: platforms would have publisher-like responsibilities, algorithmic amplification would be regulated, and government would have enforcement authority. This fundamentally changes unit economics—content moderation at scale is expensive, limiting algorithmic amplification reduces engagement (and revenue), and compliance costs are significant. If Brazil succeeds, it creates a template for other countries. If it fails or overreaches into censorship, it discredits the regulatory approach. What's fascinating is that Brazil is moving faster than the EU on this, despite less regulatory capacity, because the political threat feels more immediate—Brazilian democracy nearly collapsed in January 2023, making the case for aggressive regulation stronger.

## The Big Issue 3: Indigenous Tech Development and Semiconductor Ambitions

Beyond regulation, Brazil is pursuing indigenous technology development, particularly in semiconductors and AI. The government announced investments in chip fabrication capacity, partnering with TSMC and Samsung to establish fabs in Brazil. The stated goal is reducing import dependence (Brazil imports 95%+ of semiconductors) and capturing value in the chip supply chain. This is strategically ambitious and economically questionable. Semiconductor fabrication is among the most capital-intensive, technically complex industries in existence. Leading-edge fabs cost $20+ billion and require supporting ecosystems of suppliers, engineers, and specialized infrastructure. Taiwan, South Korea, and (with massive subsidies) the U.S. can do this; whether Brazil can is unclear. The business case depends on: significant and sustained government subsidies, access to advanced process technology (which TSMC controls and protects carefully), a skilled engineering workforce (which Brazil has in limited numbers), and sufficient domestic and regional demand to justify production scale. Brazil has the demand (it's a huge consumer electronics market) and could develop the workforce, but the subsidy requirements and technology access are challenging. From an Aggregation Theory perspective, trying to build domestic chip capacity fights against powerful global concentration dynamics—chip design concentrates in the U.S., fabrication in Taiwan and Korea, advanced equipment in the Netherlands. Breaking into this requires not just capital but sustained political commitment across multiple administrations. Brazil's AI development is more plausible: the country has strong computer science programs, growing AI startups (particularly in agricultural tech and fintech), and could potentially develop AI capabilities optimized for Portuguese language and Brazilian applications. But competing with American AI giants requires massive compute resources (controlled by U.S. cloud providers) and access to cutting-edge research (concentrated in the U.S. and China). The strategic question is whether Brazil is serious about indigenous tech development or whether this is largely rhetorical. If serious, it requires decade-long commitments and tens of billions in sustained investment. If rhetorical, it's a waste of limited resources.

## The International Angle

Brazil's technology strategy has global implications as a test of whether large developing nations can resist permanent platform dependency. The X ban was watched closely by governments in India, the EU, and elsewhere who want to regulate platforms but fear economic and political costs. If Brazil's ban succeeded without major backlash, it emboldens regulators globally. The fake news bill is similarly precedent-setting: if Brazil implements effective platform regulation that balances free expression with disinformation control, it provides a model for democracies everywhere. The U.S. tech industry views Brazil's approach with alarm—aggressive regulation, willingness to ban platforms, government intervention in content decisions. This is precisely the model American tech companies fear spreading globally, as it threatens the advertising-based business model that generates their profits. China watches with interest: Brazil's approach shares some features with Chinese internet governance (government authority over platforms, content restrictions) but maintains democratic accountability and free expression norms that China lacks. For other Latin American countries, Brazil's actions matter enormously: if Brazil can effectively regulate platforms and develop indigenous tech capacity, it suggests a path for regional technology sovereignty. If it fails, it validates continued dependence on American and Chinese platforms. And for global south nations generally, Brazil represents a middle power trying to chart an independent technology path between U.S. and Chinese dominance. Whether that's realistic or quixotic will shape technology geopolitics for decades.

## The Bottom Line

Brazil is attempting something genuinely difficult: asserting platform sovereignty while building indigenous technology capacity, all while maintaining democratic norms and economic openness. The X ban proved Brazil can enforce its laws against even the most libertarian tech billionaires, but the economic and user experience costs were real. The fake news bill could provide a model for democratic platform regulation or slide into government censorship—implementation matters enormously. And semiconductor ambitions are strategically important but economically questionable without sustained commitment. Brazil's success or failure will determine whether developing nations can escape technology dependency or whether platform power remains essentially unregulatable except by China and the EU. The next two years will be definitive.`,
    issues: ['The X Ban and Platform Sovereignty', 'The Fake News Bill and Digital Regulation', 'Indigenous Tech Development and Semiconductor Ambitions']
  },
  {
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    summary: `# Canada - Technology

The key strategic question about Canadian technology isn't capability—the country produces world-class AI research, has a thriving startup ecosystem, and generates technical talent that competes globally—but capture: how does Canada retain the value its technology sector creates when Silicon Valley systematically acquires every successful company and poaches every significant researcher? Canada's AI sector epitomizes this dilemma. Geoffrey Hinton, Yoshua Bengio, and Yann LeCun pioneered deep learning from Canadian universities, creating the intellectual foundation for modern AI. Yet the commercial value accrues overwhelmingly to American companies: Google DeepMind, OpenAI, Meta, Microsoft. Toronto, Montreal, and Vancouver have vibrant AI research communities, but they function increasingly as R&D outposts for U.S. tech giants rather than foundations for Canadian companies. Now Mark Carney's government faces this tension while dealing with Trump administration threats of tariffs and economic pressure. The technology sector represents Canada's best path to high-wage economic growth independent of natural resources, but achieving that requires solving the perpetual Canadian challenge: building globally competitive companies that remain Canadian-owned and based. Shopify is the rare exception—Canada's first genuine tech giant, valued at $120+ billion, with Tobi Lütke determined to build from Ottawa rather than relocating to Silicon Valley. Whether Canada can replicate Shopify's success across sectors, or whether it remains a talent exporter and acquisition target, will determine the country's economic future.

## The Big Issue 1: AI Leadership Without Value Capture

Canada's AI story is simultaneously triumphant and tragic. The intellectual foundation of modern AI—deep learning and neural networks—was developed largely in Canada by Geoffrey Hinton (University of Toronto), Yoshua Bengio (Université de Montréal), and their students. This wasn't industrial policy but pure research, often poorly funded, that happened to revolutionize computing. When deep learning became commercially valuable around 2012-2015, the stampede began: Google acquired Hinton's research group and hired him, Meta established AI research labs in Montreal to be near Bengio, Microsoft invested heavily in Montreal, Amazon opened AI research facilities in Toronto and Vancouver, and virtually every significant commercial AI breakthrough involved Canadian-educated researchers. Canada responded with government programs: CIFAR's AI strategy, significant research funding, immigration policies to retain talent. But the fundamental problem persists—research concentrates in Canada, commercialization happens in Silicon Valley. From a business model perspective, this makes sense for researchers: Google can offer 10x the compensation, unlimited compute resources, and direct path to deployment at global scale. What Canadian company or university can compete with that? The Canadian government's strategy has been to accept this dynamic while trying to maximize spillover benefits—if Google has a major AI lab in Toronto employing 500 people, that creates local economic activity, trains more researchers, and supports the ecosystem. But it means Canada captures only a fraction of the value its intellectual capital creates. The strategic alternative is building Canadian AI companies that can compete globally, which requires patient capital, willingness to sustain losses during growth phases, and enough success stories to create a virtuous cycle. Shopify proves it's possible; whether it's replicable in AI remains unclear. Vector Institute and other organizations are trying to bridge research and commercialization, but they're fighting against powerful gravitational forces pulling talent and companies to Silicon Valley.

## The Big Issue 2: The Acquisition Treadmill

Canadian tech companies face a systematic pattern: build innovative products, achieve product-market fit, raise venture capital, grow rapidly, and then get acquired by American companies before reaching true scale. This has happened repeatedly across sectors: OpenText acquired by U.S. firms, Nortel collapsed with assets acquired by foreign competitors, countless startups sold to American tech giants. From an individual founder perspective, this makes total sense—getting acquired by Google or Microsoft for hundreds of millions represents life-changing liquidity and validates years of effort. From a national economic perspective, it's disastrous: Canada incubates innovation that gets monetized elsewhere, capturing only the early-stage value while foregoing the compound growth phase where real wealth accumulates. Shopify is the exception that proves the rule—Tobi Lütke repeatedly refused acquisition offers, committed to building from Ottawa, and created Canada's first $100B+ tech company. But Shopify's success has been insufficient to change the broader pattern. The root causes are structural: Canadian venture capital is smaller and more risk-averse than U.S. counterparts, limiting growth capital; public markets are thin, making IPO difficult for tech companies; and proximity to Silicon Valley makes acquisition offers constant and tempting. Successive Canadian governments have tried to address this through tax incentives, grants, and innovation programs, but none have fundamentally changed dynamics. Carney's government talks about "economic sovereignty" and retaining technology companies, but the actual policy tools are limited. You can't force founders to refuse acquisitions, and in some cases, acquisition is the right outcome (if the company would fail independently or if the technology genuinely needs larger platform resources). The strategic challenge is creating an ecosystem where staying independent and Canadian is both financially viable and strategically attractive—which requires deeper capital markets, more patient investors, and different cultural norms around long-term company building.

## The Big Issue 3: Trump, Tariffs, and Tech Sector Vulnerability

Mark Carney faces a specific technology challenge related to Trump: the incoming administration has threatened tariffs on Canadian goods, rattled trade relationships, and created enormous uncertainty for Canadian businesses. While tariffs focus on traditional sectors (lumber, agriculture, autos), they affect technology indirectly but significantly. Canadian tech companies are deeply integrated into North American supply chains, many sell primarily to U.S. customers, and the sector depends on cross-border talent flows. Disrupting any of these through tariffs, immigration restrictions, or regulatory hostility would damage Canadian tech severely. Carney's challenge is managing Trump without either capitulating (which would be politically unsustainable) or escalating (which would be economically damaging given asymmetric U.S.-Canada economic power). The technology sector gives Canada some leverage: the U.S. tech industry depends on Canadian talent, particularly in AI, and aggressive immigration restrictions would hurt American companies as much as Canadian ones. But that leverage is limited—if pushed, U.S. companies can recruit globally, and many Canadian engineers would simply move to the U.S. if forced to choose. From a business model perspective, the Trump uncertainty makes Canadian tech less attractive to investors: why invest in a country where your largest export market might become hostile overnight? This creates a vicious cycle where uncertainty reduces investment, which reduces company formation, which reduces future value creation. Carney needs to stabilize the relationship quickly while also pursuing longer-term economic diversification—expanding Canadian tech companies' presence in European and Asian markets so they're less dependent on U.S. customers. But that's a decade-long project, and Trump's threats are immediate.

## The International Angle

Canada's technology trajectory matters because it represents a test case for whether a sophisticated, well-educated, resource-rich country can build an independent technology sector when geographically adjacent to the dominant global tech power. For other countries in similar situations—Australia near China, Mexico near the U.S., countries in Eastern Europe near both—Canada's experience offers lessons about the challenges of value capture and company building. The U.S.-Canada technology relationship is both collaborative (deep talent sharing, cross-border investment, integrated supply chains) and extractive (systematic acquisition of Canadian companies, talent drain to Silicon Valley, minimal Canadian ownership of platforms). For the European Union, Canada represents a cautionary tale about what happens when you don't maintain industrial policy for strategic sectors—even with world-class research and strong fundamentals, you can end up as a technology colony. For China, Canada's AI strength but commercial weakness validates their approach of maintaining strict controls on technology companies to prevent foreign acquisition and ensure value capture domestically. And for global AI governance, Canada positions itself as a responsible middle power advocating for safety and ethics—Bengio is a leading voice on AI alignment—but whether that moral authority translates to actual policy influence is questionable when the U.S. and China dominate commercial development.

## The Bottom Line

Canada has the talent, research capabilities, and fundamental ingredients for technology leadership, but structural forces—proximity to Silicon Valley, acquisition pressure, capital market limitations—have prevented sustained value capture. Shopify proves Canadian companies can compete globally if they resist acquisition and commit to long-term building. Carney's challenge is creating conditions where Shopify's success becomes the norm rather than the exception, while managing Trump's economic threats without sacrificing Canada's technology sector. The AI opportunity is genuine, but only if Canada can translate research excellence into commercial success and retain ownership of the results. The next five years will determine whether Canada becomes a technology power or remains a talented tributary to Silicon Valley.`,
    issues: ['AI Leadership Without Value Capture', 'The Acquisition Treadmill', 'Trump, Tariffs, and Tech Sector Vulnerability']
  }
]

async function main() {
  console.log('\\n📱 BATCH 1 (CONTINUED): Saving Technology writeups for countries 3-4/114\\n')

  let completed = 0

  for (const writeup of batch1Continued) {
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

  // Get total progress
  const total = await prisma.locationSummary.count({
    where: {
      type: 'country',
      category: 'technology'
    }
  })

  console.log(`\\n📊 PROGRESS: ${total}/114 Technology writeups completed (${Math.round(total/114*100)}%)\\n`)

  await prisma.$disconnect()
}

main().catch(console.error)
