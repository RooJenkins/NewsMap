import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries 7-20 to complete batch 1 (Americas region)
const writeups = [
  {
    name: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    summary: `# Costa Rica - Technology

The strategic insight: Costa Rica succeeded at nearshoring before "nearshoring" became fashionable, building a technology services economy worth $4B+ annually by making deliberate choices about education, infrastructure, and policy stability that neighboring countries didn't. Intel's decision to build a chip plant in Costa Rica in 1997 wasn't random—it was the culmination of decades of investment in education, democratic stability, and business-friendly environment. Though Intel closed the manufacturing facility in 2014 (shifting to R&D), the demonstration effect persisted: multinational tech companies viewed Costa Rica as reliable, educated, and stable. Today, Amazon, Microsoft, IBM, and hundreds of smaller companies operate significant operations in Costa Rica, employing tens of thousands in software development, customer support, and business services. This matters because it validates a specific development model: invest heavily in education even when poor, maintain democratic stability even when neighbors don't, welcome foreign investment even when resource nationalism is fashionable. The result is Costa Rica has Latin America's highest Human Development Index, stable institutions, and a knowledge economy that generates middle-class wages for significant population share. But there are strategic vulnerabilities: heavy dependence on U.S. companies (if nearshoring trends reverse, Costa Rica suffers), limited indigenous tech company development (value capture remains with foreign firms), and infrastructure constraints as electricity and internet demand grows faster than supply.

## The Big Issue 1: From Intel to Amazon—The Multinational Dependency Model

Intel's 1997 decision to build a chip assembly plant in Costa Rica transformed the country's economy and self-image. The facility employed thousands, trained workers in advanced manufacturing, and signaled to global tech industry that Costa Rica was viable location for sophisticated operations. When Intel closed manufacturing in 2014, it was interpreted as crisis—but what happened instead was diversification: Intel maintained R&D operations employing 1,500+ engineers, while Amazon, Microsoft, VMware, and others expanded presence. The business model is straightforward: Costa Rica provides educated, bilingual workforce at 40-50% cost of U.S. domestic hiring; multinationals provide technology, capital, and market access; government provides infrastructure and political stability. This has generated genuine prosperity—technology sector wages are significantly above national average, and the sector employs over 50,000 people directly. But the strategic limitation is value capture: Costa Rica functions as service provider to American companies rather than developer of indigenous technology. When Microsoft engineers in Costa Rica build cloud services, the intellectual property and value accrue to Microsoft, not Costa Rica. Compare this to Israel, where multinational presence catalyzed indigenous company formation (Israeli founders who worked at Intel or Microsoft then built their own companies). Costa Rica has less of this—partly because market is tiny (5 million people), partly because capital markets are thin, partly because entrepreneurial culture is less developed. The question is whether Costa Rica should try to move up the value chain (building its own tech companies) or optimize the current model (maximizing employment and wages from multinational operations). The latter is safer and proven; the former is riskier but offers higher potential returns.

## The Big Issue 2: Education Investment and Human Capital Limits

Costa Rica abolished its military in 1948 and redirected defense spending to education and healthcare—a decision that created long-term advantages but also reveals current constraints. The country has 98% literacy, strong primary and secondary education, and expanding university system. But technology sector growth is straining capacity: companies report difficulty finding enough qualified engineers, particularly with advanced skills in AI, cloud computing, and cybersecurity. The pipeline problem is real: Costa Rica produces roughly 3,000 engineering graduates annually, but technology sector wants to hire 5,000+ new workers per year. This creates wage inflation (good for workers, challenging for companies) and limits growth (companies can't expand operations if they can't find talent). The government response has been expanding public university capacity and approving private universities, but quality concerns arise when enrollment grows faster than faculty and resources. From a business model perspective, this is the perpetual developing country challenge: you need educated workforce to attract investment, but building education capacity requires money you don't have until investment arrives. Costa Rica solved this initially by investing in education despite poverty, creating preconditions for Intel and others. But maintaining advantage requires continued investment, and Costa Rica's fiscal situation is strained—high debt levels, growing deficits, political pressure to increase social spending. The strategic risk is losing competitiveness to Mexico (larger scale, lower costs) or Colombia (cheaper labor, improving education). Costa Rica's advantage has been quality and stability rather than cost; if quality slips while costs stay high, the value proposition erodes.

## The Big Issue 3: Infrastructure and Electricity Constraints

Technology operations require reliable electricity and internet, and Costa Rica is hitting infrastructure limits. The electricity grid, while nearly 100% renewable (a genuine achievement), struggles with growing demand from data centers and expanded operations. Internet speeds are good by regional standards but lag global leaders, and coverage outside San José is spotty. This matters because modern technology work is infrastructure-intensive: cloud services require massive electricity for servers, AI training needs enormous compute, distributed teams need high-bandwidth connectivity. Costa Rica's renewable electricity should be advantage—tech companies increasingly want green energy for operations—but only if supply scales with demand. The government has approved new renewable projects but implementation is slow due to regulatory processes and NIMBY opposition. Meanwhile, competitors are investing aggressively: Panama is building major data center capacity, Mexico is expanding infrastructure with nearshoring boom. From strategic perspective, infrastructure is prerequisite for continued technology sector growth. If Costa Rica can't provide reliable, affordable electricity and world-class connectivity, companies will locate operations elsewhere. The business model requires infrastructure investment that anticipates growth rather than reacts to it—building capacity before companies need it rather than after bottlenecks emerge. This requires government to take risk on infrastructure spending that might not immediately pay off, politically difficult when fiscal resources are constrained and competing priorities exist.

## The International Angle

Costa Rica's technology success has made it a model for other small countries: show that education investment, institutional stability, and welcoming foreign investment can build knowledge economies even without natural resources or large populations. For U.S. companies, Costa Rica represents the gold standard of nearshoring—reliable, English-speaking, aligned with American interests, and significantly cheaper than domestic operations. As U.S.-China tensions drive supply chain reorganization, Costa Rica benefits from being firmly in American economic and political orbit. For neighbors, Costa Rica creates both inspiration and frustration: Nicaragua and Honduras have similar geography but vastly worse outcomes due to corruption and instability; Panama competes directly for same investments but with different model (logistics and finance versus technology services). The Pacific Alliance (Chile, Colombia, Mexico, Peru, Costa Rica) has discussed regional technology cooperation, but implementation has been limited. And for technology policy globally, Costa Rica validates the argument that you don't need industrial policy or state intervention to build tech sector—you just need education, stability, and openness to foreign investment. Critics counter that this creates dependency without building indigenous capacity, and that Costa Rica's success may not be replicable in larger, more complex countries. Both perspectives have validity.

## The Bottom Line

Costa Rica built Latin America's most successful technology services economy through education investment, political stability, and welcoming multinationals. The model generates real prosperity—middle-class wages, stable employment—but value capture remains limited because intellectual property and ownership stay with foreign companies. Scaling requires solving infrastructure constraints and expanding engineering talent pipeline while maintaining stability that made Costa Rica attractive initially. The next decade will show whether Costa Rica can move beyond services to indigenous technology development, or whether the current model represents the ceiling for small countries in global tech economy.`,
    issues: ['From Intel to Amazon—The Multinational Dependency Model', 'Education Investment and Human Capital Limits', 'Infrastructure and Electricity Constraints']
  },
  {
    name: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    summary: `# Cuba - Technology

This matters because: Cuba represents the extreme case of technological isolation—what happens when a country is excluded from global technology systems for 60+ years through U.S. sanctions and its own authoritarian governance. The result is fascinatingly dystopian: an entire population with minimal internet access (38% of Cubans online, mostly via mobile data that costs 10% of monthly wages per GB), essentially zero domestic technology industry, smartphone penetration around 50% but with devices years out of date, and a totalitarian government that views unrestricted internet access as existential threat. Yet there's remarkable ingenuity: "El Paquete" (The Package) is a weekly offline sneakernet delivering digital content—movies, music, apps, news—via USB drives and hard disks, functioning as shadow internet that government tolerates because blocking it entirely would trigger unrest. From a strategic perspective, Cuba is a cautionary tale about technology isolation: you can't simply wish away global platforms and infrastructure, but attempting to catch up after decades of isolation faces nearly insurmountable obstacles. The government wants economic benefits of technology—tourism bookings, remittances, communication—without political risks of unrestricted information flow. This is fundamentally unworkable. Meanwhile, Trump's return to hardline sanctions has eliminated what little progress occurred under Obama's détente, cutting off remittance apps, internet infrastructure investment, and travel that brought devices and connectivity.

## The Big Issue 1: El Paquete and the Offline Internet

El Paquete Semanal (The Weekly Package) is one of the most fascinating technology adaptations globally—an entire population's media consumption delivered offline because internet access is too expensive and restricted. Every week, a terabyte of content (Hollywood movies, telenovelas, music, apps, YouTube videos, PDFs, advertising) is compiled in Havana, distributed to provincial dealers via courier, and sold to consumers for roughly $1-2. At its peak, El Paquete reached millions of Cubans, functioning as de facto national media distribution despite having no official existence—government tolerated it while occasionally prosecuting distributors to maintain control. From a business model perspective, this is brilliantly adapted to constraints: internet is expensive and censored, but USB drives and hard disks are available, and demand for content is insatiable. The compilation process is sophisticated: teams rip content from global internet, curate based on Cuban preferences, add advertising (local businesses pay to include ads), and distribute through network of dealers operating like informal franchises. What's strategic here is that El Paquete demonstrates technology demand exists even in most isolated environments—people will find ways to access content regardless of government restrictions. But it also shows limits of offline systems: El Paquete is one-way (consumption only, no interaction or real-time updates), government-tolerated rather than rights-based, and vulnerable to crackdowns if political winds shift. As internet access slowly expands via mobile data, El Paquete's relevance declines—but for now it remains crucial infrastructure for millions of Cubans' digital lives. For technology strategists, El Paquete is case study in adaptation: when normal infrastructure is unavailable, determined populations build alternatives, however inefficient.

## The Big Issue 2: Sanctions and Technology Infrastructure Collapse

U.S. sanctions have devastated Cuba's technology sector—not through direct prohibition on consumer technology (phones and laptops aren't sanctioned) but through secondary effects: payment systems don't work (Visa/Mastercard blocked, PayPal unavailable), cloud services are prohibited (AWS, Google Cloud, Microsoft Azure all blocked from serving Cuban users), telecommunications infrastructure can't access Western equipment (Huawei and ZTE fill gap, creating dependence on Chinese technology), and software licensing is complicated (Microsoft, Adobe, Apple services either blocked or operating in gray zones). The result is Cuba operates in parallel technology universe: Chinese Android phones instead of iPhones, Russian or Chinese social networks instead of Facebook/Instagram, Cuban government email instead of Gmail, improvised payment systems instead of digital wallets. From strategic perspective, this is exactly what U.S. sanctions intended—making it difficult for Cuban government to access advanced technology that might extend authoritarian control or generate revenue. But consequences fall overwhelmingly on ordinary Cubans who can't access tools that rest of world takes for granted. Cuban programmers exist and are quite skilled—education system produces engineers despite economic collapse—but they can't access global opportunities because payment systems don't work and sanctions create legal risks for foreign companies hiring Cubans remotely. This is tragic waste of human capital: talented people prevented from contributing to global economy because of political conflict between governments. Trump's return to hardline approach has made this worse: Obama-era openings that allowed some technology infrastructure investment and remittance apps have been reversed, leaving Cuban technology access worse than five years ago.

## The Big Issue 3: Government Control and Authoritarian Internet Model

Cuban government views internet access as national security threat: unrestricted information flow could trigger political dissent, coordination of protests, or exposure to alternative governance models. So the government maintains sophisticated censorship: social media monitoring, VPN blocking, arresting activists for online speech, restricting internet-capable devices, and making access expensive enough that casual browsing is unaffordable for most. This is authoritarian internet playbook similar to China but with far less technological sophistication and resources. The key difference is China built domestic technology platforms (WeChat, Weibo, Baidu) that provide functionality while allowing government surveillance; Cuba has none of that, just restrictions without alternatives. The business model is surveillance and control rather than service provision—opposite of what modern technology requires. The July 2021 protests, largely organized via social media despite government restrictions, terrified authorities and triggered crackdown on internet access and online organizing. Since then, restrictions have tightened: mobile internet throttled during politically sensitive periods, activists' internet cut off entirely, VPNs aggressively blocked. From strategic perspective, this is unsustainable: global economy requires internet connectivity, Cuban economy desperately needs tourism and remittance revenue that depend on communication, and population increasingly demands access. But government prioritizes regime survival above economic growth, so accepting risks of unrestricted internet is unthinkable. The result is perpetual half-measures: enough internet to enable minimum economic functions, not enough to threaten political control. This equilibrium satisfies nobody—not government (protests still happen), not population (access remains terrible), not foreign investors (can't operate normally). Whether this changes depends entirely on political liberalization, which seems unlikely under current government.

## The International Angle

Cuba's technology isolation is entirely political: U.S. sanctions could be lifted overnight if political relationship changed, just as they were temporarily relaxed under Obama. But both U.S. domestic politics (Florida's Cuban exile community has veto power over Cuba policy) and Cuban government's refusal to democratize make normalization unlikely. For China, Cuba represents opportunity: technology infrastructure sales that Western companies can't provide, ideological alignment around authoritarian internet control, and geopolitical value of presence near U.S. For Europe, Cuba is frustrating—European companies could provide internet infrastructure and drive economic development, but U.S. sanctions' extraterritorial reach makes this legally risky. And for technology policy globally, Cuba demonstrates what complete isolation looks like: not just slower development but fundamental exclusion from global platforms, infrastructure, and opportunities. It's cautionary tale for any country considering technology nationalism or isolation—once you're outside the global technology ecosystem, getting back in is extraordinarily difficult because dependencies compound over time.

## The Bottom Line

Cuba's technology situation is dystopian: government-imposed isolation compounded by U.S. sanctions creates environment where basic internet access is luxury, global platforms are unavailable, and talented population is cut off from opportunities. El Paquete's existence proves demand and ingenuity, but offline solutions can't replace real internet infrastructure. The government's fundamental calculation—regime survival requires information control, which requires internet restriction—prevents meaningful improvement. Until political changes occur, Cuba remains technological backwater despite having human capital that could contribute to global economy. Trump's sanctions reversal has made a bad situation worse, and no relief is visible on the horizon.`,
    issues: ['El Paquete and the Offline Internet', 'Sanctions and Technology Infrastructure Collapse', 'Government Control and Authoritarian Internet Model']
  }
]

async function main() {
  console.log('\\n📱 BATCH 1 COMPLETE: Countries 7-8/114\\n')

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
