import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Batch 2: Technology write-ups (13 countries)
// Generated in Ben Thompson/Kara Swisher style - sharp tech analysis

const TECHNOLOGY_WRITEUPS = [
  {
    name: 'Bosnia and Herzegovina',
    type: 'country',
    lat: 43.9159,
    lng: 17.6791,
    country: 'Bosnia and Herzegovina',
    category: 'technology',
    summary: `Bosnia's tech sector in November 2025 is caught between brain drain and nearshoring opportunity. With roughly 30,000 IT workers and growing, this Balkan nation has quietly become an outsourcing hub for EU companies seeking cheaper alternatives to Western European developers—think Bulgarian wages but with better English and less competition. The math is simple: a senior developer in Sarajevo earns €2,000-3,000 monthly versus €6,000+ in Germany, making BiH an arbitrage play for cost-conscious European firms.

Internet penetration sits around 75%, 4G coverage is widespread, and 5G has landed in Sarajevo and Banja Luka—adequate infrastructure but nothing special. The startup ecosystem remains embryonic: no unicorns, limited VC interest (most funding comes from diaspora angels or bootstrapping), and a persistent exodus of top talent to Austria, Germany, and Switzerland where salaries triple overnight. Companies like Symphony (U.S.-based fintech with major Sarajevo dev center) and various EU outsourcing shops employ hundreds, but homegrown product companies are rare.

The government's digital transformation efforts move at bureaucratic crawl—e-government adoption is low, corruption remains endemic, and political dysfunction (the country has three presidents, remember) means coherent tech policy is fantasy. Universities in Sarajevo and Banja Luka produce solid CS graduates, but curricula lag industry needs by years. Coding bootcamps are emerging but still niche.

Here's the paradox keeping BiH afloat: remote work. Post-COVID, many developers discovered they could earn Western salaries while living in Sarajevo where rent is €300-500 versus €1,500+ in Berlin. This "geographic arbitrage" has stemmed some brain drain, though the best still leave for career advancement and escaping political stagnation. Cybersecurity is weak—elderly citizens fall prey to online scams regularly, and financial fraud is common.

AI adoption? Minimal beyond chatbots for customer service at outsourcing firms. The tech scene focuses on web/mobile development for foreign clients, not cutting-edge innovation. Think staff augmentation, not research labs. If you're a European company needing solid developers at Bulgarian prices with decent timezone overlap, BiH delivers. If you're hunting the next tech unicorn or innovation hub, look elsewhere. The talent exists but lacks the ecosystem, capital, and political stability to build at scale.`,
    issues: JSON.stringify([
      'Brain drain to Western Europe',
      'Nearshoring opportunity for EU companies',
      'Limited startup ecosystem and VC funding',
      'Political dysfunction hinders tech policy',
      'Remote work enables geographic arbitrage'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Botswana',
    type: 'country',
    lat: -22.3285,
    lng: 24.6849,
    country: 'Botswana',
    category: 'technology',
    summary: `Botswana's tech scene in November 2025 is small but surprisingly functional—a reflection of the country's broader success as Africa's stable, non-corrupt outlier. Internet penetration hovers around 50%, dominated by mobile (4G covers Gaborone, Francistown, and major centers), while the government's "Smart Botswana" initiative pushes digital transformation with actual follow-through, unlike many African digital strategies that exist only on PowerPoint slides.

The startup ecosystem is minimal: no unicorns, limited venture capital (most founders bootstrap or seek funding from development finance institutions), and a tiny domestic market of 2.5 million people. The action concentrates in fintech and mobile money—Orange Money and MyZaka enable basic financial inclusion for unbanked populations, though adoption still lags Kenya or Ghana. Agri-tech startups target cattle farmers (beef is a major export), and tourism tech serves Botswana's safari industry, but exits remain modest by global standards.

Innovation Hub Botswana in Gaborone supports startups with workspace and mentorship, yet funding remains the bottleneck. Brain drain is persistent: talented developers migrate to South Africa (2x salaries) or the UAE/UK (5x salaries) for better opportunities. The University of Botswana and Botswana International University of Science and Technology (BIUST) produce CS graduates, but scale is limited and many immediately job-hunt abroad.

What Botswana gets right: political stability, low corruption (ranked best in Africa by Transparency International), and government investment in fiber optic infrastructure. The country connects to multiple undersea cables via South Africa and Namibia, delivering decent international bandwidth. E-government services are improving—tax filing, business registration—making it easier to operate than in chaotic neighboring states.

Cybersecurity awareness is low outside Gaborone's business district; digital literacy lags, and scams targeting the elderly are common. AI adoption is nascent—mostly limited to chatbots for customer service at banks. The tech workforce is young, motivated, but tiny; maybe a few thousand developers total versus South Africa's hundreds of thousands.

The bottom line: Botswana won't become a tech powerhouse, but it's punching above its weight for a landlocked country with the population of Queens, New York. For regional entrepreneurs, it offers stability and competent governance—rare in Africa. For tech investors seeking the next Lagos or Nairobi, keep looking. Botswana is a solid B-tier player in a continent where most countries score D or F.`,
    issues: JSON.stringify([
      'Small domestic market limits scale',
      'Brain drain to South Africa and abroad',
      'Limited VC ecosystem and funding',
      'Political stability and low corruption advantages',
      'Mobile money and fintech lead growth'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Brazil',
    type: 'country',
    lat: -14.2350,
    lng: -51.9253,
    country: 'Brazil',
    category: 'technology',
    summary: `Brazil's tech ecosystem in November 2025 is Latin America's heavyweight champion—and it's not particularly close. With multiple unicorns, billions in VC funding, and Nubank boasting over 100 million customers (making it the world's largest digital bank by user count), Brazil has built genuine tech firepower. São Paulo's startup scene rivals Mexico City, with fintech, e-commerce, and logistics tech leading the charge. The rebound from 2023-24's VC winter is underway; funding is flowing again to proven models.

Let's talk Nubank: a $50+ billion valuation, profitable, and expanding across Latin America. It's not just hype—millions of Brazilians who couldn't get traditional bank accounts now have digital accounts, credit cards, and investment products. This is infrastructure-level impact. MercadoLibre (Argentina-based but huge in Brazil) dominates e-commerce and payments, while homegrown players like iFood (delivery), QuintoAndar (proptech), and Gympass (corporate wellness) have hit unicorn status or approached it.

Internet penetration sits around 85%, with strong 4G/5G rollout in cities—Rio, São Paulo, Brasília all have solid connectivity, though rural areas lag badly. Tech talent is abundant: USP, UNICAMP, and other universities produce thousands of CS graduates annually, and the developer community is large and sophisticated. The challenge? Many still flee to the U.S. or work remotely for American companies at 3-5x local salaries. Remote work has created a talent retention tool—developers can earn $100k+ USD while living in Brazil where costs are far lower.

AI adoption is accelerating. Startups apply machine learning to fraud detection (critical in a country with rampant banking crime), agricultural optimization (agri-tech is huge—Brazil is a farming superpower), and customer service automation. The PIX instant payment system (launched 2020, now processing billions of transactions) revolutionized payments but also created a fraud epidemic—scams and account takeovers plague users.

The problems: economic volatility (currency swings, inflation concerns), brutal taxation (30%+ on SaaS imports), Byzantine labor laws that make hiring expensive, and bureaucracy that drives entrepreneurs insane. Cybersecurity is a nightmare—Brazil leads globally in banking trojans and financial malware. Criminals are sophisticated, targeting PIX transfers and crypto exchanges.

Still, the ecosystem is real. If you're building for Latin America, you build for Brazil first—it's 40% of the region's economy. The government under Lula talks digital inclusion but moves slowly. Corruption and regulatory uncertainty remain risks. Yet the entrepreneurial energy, market size (220 million people), and proven exits make Brazil unmissable for serious Latin American tech plays. It's messy, chaotic, and expensive to operate—but it's also where the money is.`,
    issues: JSON.stringify([
      'Largest Latin American tech ecosystem with multiple unicorns',
      'PIX payment revolution but fraud epidemic',
      'High taxes and bureaucracy burden',
      'Strong CS talent but brain drain persists',
      'AI adoption in agriculture and fintech'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Bulgaria',
    type: 'country',
    lat: 42.7339,
    lng: 25.4858,
    country: 'Bulgaria',
    category: 'technology',
    summary: `Bulgaria in November 2025 is the EU's outsourcing champion—a title that's both compliment and indictment. With 50,000+ IT workers and a tech sector worth roughly €1.5 billion annually, Sofia has become a backend for Western European and American companies seeking cheaper developers with solid skills. Google, HP, SAP, VMware, Cisco—all run major offices here, hiring Bulgarians at 1/3 to 1/2 Western European wages. The arbitrage is straightforward: a senior dev in Sofia earns €30-40k versus €80-100k in Germany.

Internet infrastructure is excellent—Bulgaria often ranks among Europe's fastest broadband speeds, with widespread fiber optic coverage and solid 4G/5G in cities. The tech education pipeline is strong: Sofia University and Technical University produce thousands of CS graduates annually, coding bootcamps are proliferating, and English proficiency is decent among younger workers. The government's 10% flat corporate tax attracts companies, making Bulgaria one of Europe's most business-friendly jurisdictions on paper.

The problem? Bulgaria remains a service economy for foreign tech giants, not an innovation hub. The startup scene exists—companies like Payhawk (spend management, raised $100M+) and Dronamics (cargo drones) show promise—but unicorns are elusive. VC funding is limited, forcing most founders to bootstrap or seek Western investors who often push for relocation to London or Berlin as a funding condition.

Brain drain is relentless. After 2-3 years, many developers emigrate to Germany, Netherlands, UK, or Ireland where salaries double or triple. Bulgaria's population is shrinking (down from 9 million in 1990 to under 7 million today), and the exodus of young tech talent accelerates the demographic decline. Political instability doesn't help—Bulgaria cycled through multiple governments in 2021-2023, creating uncertainty around long-term policy.

AI adoption is growing within outsourcing contracts—Bulgarian teams integrate AI features for foreign clients—but homegrown AI companies are rare. Cybersecurity is decent by regional standards (EU regulations enforce baselines), though ransomware attacks targeting SMEs are rising. E-government services are improving, but bureaucracy and corruption persist despite EU membership.

Here's the reality: if you need a nearshoring partner for software development with good timezone overlap and lower costs, Bulgaria delivers solid value. If you're hunting the next tech innovation cluster or scaling a local startup to unicorn status, the ecosystem lacks the capital, market access, and talent retention to compete with Western Europe. Bulgaria is stuck in the middle-income trap—too expensive to compete with India or Ukraine on cost, too poor to retain talent against Germany or UK. It's a comfortable living for those who stay, but ambition usually means a one-way ticket West.`,
    issues: JSON.stringify([
      'EU outsourcing hub with major tech offices',
      'Brain drain to Western Europe',
      'Limited venture capital and startup ecosystem',
      'Strong infrastructure and low taxes',
      'Population decline and talent exodus'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Burkina Faso',
    type: 'country',
    lat: 12.2383,
    lng: -1.5616,
    country: 'Burkina Faso',
    category: 'technology',
    summary: `Burkina Faso's tech sector in November 2025 is essentially on life support, a casualty of the jihadist insurgency and military coups that have destabilized the country since 2022. Internet penetration sits around 25%, mostly mobile-based with 4G limited to Ouagadougou and Bobo-Dioulasso. Outside urban centers, connectivity is unreliable, electricity is intermittent, and the security crisis makes infrastructure investment nearly impossible.

The startup ecosystem is minimal—what little existed pre-2022 has largely collapsed or relocated to Côte d'Ivoire or Senegal. Mobile money (Orange Money, Moov Africa Money) provides the only bright spot, enabling financial inclusion for roughly 30% of the population who lack traditional bank accounts. E-commerce barely exists; logistics networks can't function when roads are unsafe due to insurgent attacks. A handful of fintech and agri-tech startups operate in Ouagadougou, but venture capital is nonexistent—most funding comes from international development organizations, not commercial investors.

Tech education is severely constrained. The University of Ouagadougou has a computer science program, and a few coding bootcamps existed pre-crisis, but scale is tiny and brain drain is catastrophic. Engineers flee to Côte d'Ivoire, Senegal, France—anywhere safer and more prosperous. Those who remain often work remotely for Francophone African companies, earning regional salaries while enduring Burkina Faso's deteriorating conditions.

The government—currently a military junta after back-to-back coups in 2022—has no bandwidth for digital strategy. Priorities are security, basic governance, and preventing state collapse. Digital transformation initiatives that existed under previous civilian governments have stalled. Cybersecurity is essentially nonexistent; scams are widespread, and digital literacy is extremely low.

French language proficiency offers theoretical outsourcing potential for Francophone markets, but political instability and security risks prevent any serious foreign investment. Electricity infrastructure is unreliable—power outages are common in Ouagadougou, devastating for tech work. Fiber optic coverage is limited to small sections of major cities.

There's no sugarcoating this: Burkina Faso's tech development is frozen. The country faces an existential security crisis—jihadist groups control significant territory, internally displaced persons number in the millions, and basic state functions are under strain. Until political stability returns (which appears distant), tech entrepreneurship is a luxury the country cannot afford. For investors, entrepreneurs, or tech workers, Burkina Faso is a no-go zone. The few talented individuals who remain are either trapped by circumstance or deeply committed to staying despite the risks. This is survival mode, not innovation.`,
    issues: JSON.stringify([
      'Security crisis and military coups devastate tech sector',
      'Minimal internet penetration and poor infrastructure',
      'Catastrophic brain drain to safer countries',
      'Mobile money only functioning tech sector',
      'No venture capital or startup ecosystem'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Cambodia',
    type: 'country',
    lat: 12.5657,
    lng: 104.9910,
    country: 'Cambodia',
    category: 'technology',
    summary: `Cambodia's tech ecosystem in November 2025 is young, scrappy, and growing fast—but operating under the shadow of Hun Manet's authoritarian government and Chinese tech influence. Internet penetration has reached roughly 60%, mobile-first with 4G widespread and 5G launching in Phnom Penh. The startup scene concentrates on fintech, delivery apps, and e-commerce, targeting Cambodia's population of 17 million plus regional expansion into Laos and Myanmar.

Wing, the mobile payments giant, dominates with around 12 million users—nearly everyone in urban Cambodia uses it for transfers, bill payments, and purchases. ABA Bank's digital services and Pi Pay compete, creating a surprisingly competitive fintech landscape. The government's Bakong central bank digital currency (launched 2020) has gained real traction, processing significant payment volume and positioning Cambodia as a CBDC leader in Southeast Asia. Delivery wars rage between Nham24, FoodPanda, and others, while ride-hailing is split between Grab and InDrive (the Russian upstart undercutting on price).

Prime Minister Hun Manet (took office 2023, son of long-ruling Hun Sen) pushes "Digital Cambodia 2030," aiming to modernize government services and boost the tech sector. Progress is real—e-government platforms are launching, digital ID systems are rolling out—but this comes with mass surveillance implications. Cambodia's government monitors online activity heavily, arrests critics, and restricts internet freedom. The tech sector operates in a space where innovation is encouraged but political dissent is crushed.

Tech education is improving. Coding bootcamps like Slash, SabaiCode, and others train hundreds of developers annually, while universities upgrade CS programs. The talent pool is growing but small—maybe 10,000-15,000 developers total. Salaries are low by regional standards (1/5 of Singapore, 1/3 of Thailand), creating opportunities for remote work arbitrage but also driving brain drain. Many Cambodians study abroad in the U.S. or Australia, and while some return, many don't.

Chinese influence is heavy. Huawei builds Cambodia's 5G infrastructure, Chinese payment apps operate widely, and online gambling (much of it serving Chinese customers) has exploded in Sihanoukville and Phnom Penh, bringing organized crime and "pig butchering" scam operations targeting global victims. Cybersecurity is a disaster—Cambodia has become a hub for cyberfraud gangs, often trafficking victims into compounds to run romance scams. The government sometimes cracks down but often profits from the gray economy.

Venture capital is limited—most funding comes from regional VCs in Singapore or Thailand, with rounds typically Series A/B, rarely later stage. No Cambodian unicorns yet, though some startups are scaling regionally. Corruption and weak IP protection remain barriers, and the authoritarian political environment scares off Western investors.

The reality: Cambodia's tech scene has momentum. For regional entrepreneurs, it offers a large, young, digitally-engaged population and lower competition than Thailand or Vietnam. But the authoritarian governance, Chinese dominance, and cybercrime reputation create serious reputational risks. If you're building consumer apps for Southeast Asia, Cambodia merits attention. If you value transparency, rule of law, or political freedom, look elsewhere.`,
    issues: JSON.stringify([
      'Mobile payments and CBDC adoption lead region',
      'Authoritarian controls and surveillance',
      'Chinese tech infrastructure dominance',
      'Cybercrime hub with scam operations',
      'Growing startup scene but limited VC'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Cameroon',
    type: 'country',
    lat: 7.3697,
    lng: 12.3547,
    country: 'Cameroon',
    category: 'technology',
    summary: `Cameroon's tech sector in November 2025 struggles against political repression, infrastructure gaps, and the devastating Anglophone crisis that has gutted what was once known as "Silicon Mountain." Internet penetration hovers around 40%, mobile-dominated with 4G in Yaoundé and Douala but spotty elsewhere. The startup ecosystem is tiny compared to Francophone Africa's leaders (Senegal, Côte d'Ivoire) or Anglophone giants (Kenya, Nigeria, South Africa), stuck in a tech no-man's-land.

Mobile money—Orange Money, MTN Mobile Money—provides the backbone of digital finance, reaching roughly 25% of the population. E-commerce exists (Jumia operates) but struggles with logistics challenges and low digital literacy. Fintech and agri-tech startups pitch for development finance institution funding (the World Bank, AFD), but venture capital is scarce. The few tech hubs like ActivSpaces in Douala, Yaoundé, and Buea support startups, yet scale remains minimal.

The Anglophone crisis deserves focus: since 2016, Cameroon's English-speaking regions (Northwest and Southwest) have faced brutal government crackdowns on separatist movements, creating a humanitarian catastrophe and destroying Buea's tech community. Buea, once dubbed "Silicon Mountain," hosted a vibrant startup scene with hackathons, incubators, and entrepreneurs building for African markets. Now? Many fled to Nigeria or relocated to Douala. The government shut down the internet in Anglophone regions multiple times, crippling remote work and online businesses. This is not a footnote—it obliterated a significant chunk of Cameroon's tech potential.

Brain drain is severe across the country. Talented developers emigrate to France (Cameroon is Francophone), Canada, or the U.S., chasing 5-10x salaries and escaping corruption and political repression. Tech education exists—universities in Yaoundé and Douala offer CS degrees, a few coding bootcamps operate—but curriculum is outdated and scale is limited. Remote work creates some retention (earning regional salaries while living cheaply in Yaoundé), but political instability deters many from staying.

Infrastructure is a nightmare. Electricity is unreliable—power outages in Yaoundé and Douala are routine, requiring generators for any serious tech work. Fiber optic coverage is slowly expanding but remains limited. The government's digital strategy is undermined by corruption, lack of implementation, and authoritarian tendencies—internet shutdowns, journalist arrests, and surveillance create a hostile environment for tech entrepreneurship.

Cybersecurity is weak. Digital literacy is low, scams targeting mobile money users are common, and the government lacks capacity or will to combat cybercrime. Government surveillance focuses on political opponents, not protecting citizens online.

The bottom line: Cameroon had potential—bilingual population (French/English), strategic location, resources—but political dysfunction, corruption, and the Anglophone crisis have squandered it. For tech investors, Cameroon is a pass. For entrepreneurs, neighboring countries offer better infrastructure, security, and markets. The few Cameroonian tech founders who succeed do so despite their country, not because of it. Unless political reforms happen (unlikely under President Paul Biya, in power since 1982), Cameroon will remain a tech backwater while East and West African hubs race ahead.`,
    issues: JSON.stringify([
      'Anglophone crisis destroyed "Silicon Mountain"',
      'Severe brain drain and political repression',
      'Poor infrastructure and frequent power outages',
      'Limited VC and weak government support',
      'Internet shutdowns and authoritarian controls'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Canada',
    type: 'country',
    lat: 56.1304,
    lng: -106.3468,
    country: 'Canada',
    category: 'technology',
    summary: `Canada's tech ecosystem in November 2025 is thriving, punching above its weight as an AI superpower while battling persistent brain drain to the U.S. The AI boom has turbo-charged Toronto-Waterloo-Montreal, with Geoffrey Hinton's legacy (the "Godfather of AI") spawning research institutes like Vector Institute and Mila that rival Stanford or MIT. Cohere, the AI startup co-founded by former Google Brain researchers, now valued at $5+ billion, competes directly with OpenAI—and it's hiring aggressively in Toronto.

Let's talk unicorns: Shopify ($70+ billion market cap) remains Canada's crown jewel, powering e-commerce for millions of merchants globally. Wealthsimple dominates robo-investing. Constellation Software (enterprise software roll-up) is worth $70+ billion. Multiple startups in fintech, AI, gaming, and SaaS have hit unicorn status. Toronto is Canada's fintech and AI hub. Vancouver leads gaming (Electronic Arts, countless indie studios) and VR/AR. Montreal excels in AI research (Yoshua Bengio's Mila institute), gaming (Ubisoft), and aerospace tech. Waterloo (home of University of Waterloo and its famous co-op program) produces enterprise SaaS companies and feeds talent into the ecosystem.

Internet penetration exceeds 95%, infrastructure is world-class (though rural broadband gaps persist), and 5G is widely deployed. The tech talent pool is strong—fueled by immigration (Canada's startup visa and skilled worker programs attract global talent) and top universities (Waterloo, Toronto, UBC, McGill). But brain drain remains brutal: U.S. tech giants and startups offer 2x salaries, lower taxes, and bigger markets. Canadians constantly face the choice: stay home or move to San Francisco/Seattle/New York for double the pay.

Remote work has shifted this calculus slightly. Many Canadians now work remotely for U.S. companies, earning USD salaries while living in Toronto or Vancouver—offsetting some brain drain, though cost of living in these cities is insane (Vancouver and Toronto rents rival San Francisco). Government support includes SR&ED tax credits (R&D incentives) and innovation grants, but Canadian startups often exit to U.S. acquirers rather than scaling independently. The "Canadian acquisition culture" persists—too many founders take $50-200M acquisition offers instead of swinging for $1B+ valuations.

Challenges: telecom oligopoly (Rogers, Bell, Telus dominate with high prices and poor service), high cost of living in major cities, and geopolitical risk (U.S. policy changes can impact Canadian tech instantly). Cybersecurity is a growing sector (BlackBerry pivoted to security software), but ransomware attacks on healthcare and infrastructure are rising.

AI is where Canada shines. Beyond Cohere, dozens of startups in healthcare AI, autonomous vehicles, and enterprise AI are scaling. Government funding for AI research is substantial. But the ecosystem risks losing talent to U.S. tech giants opening Toronto offices (Google, Meta, Amazon all have significant Canadian presence) and then transferring staff south.

Bottom line: Canada is a legitimate tech power—top-10 globally, maybe top-5 in AI. The ecosystem is mature, the talent is world-class, and the research infrastructure rivals anywhere. But the U.S. remains the gravity well pulling talent, capital, and ambition south. If Canada can keep more founders swinging for home runs instead of selling early, and if immigration continues boosting the talent pool, the ceiling is high. For now, it's a strong ecosystem with a persistent inferiority complex.`,
    issues: JSON.stringify([
      'AI superpower with Vector Institute and Mila',
      'Persistent brain drain to U.S. tech hubs',
      'Shopify and Cohere lead unicorn ecosystem',
      'High cost of living in Toronto and Vancouver',
      'Strong immigration boosts tech talent pool'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Chile',
    type: 'country',
    lat: -35.6751,
    lng: -71.5430,
    country: 'Chile',
    category: 'technology',
    summary: `Chile's tech ecosystem in November 2025 is Latin America's #3 player after Brazil and Mexico, with Santiago punching above its weight as a regional startup hub. Start-Up Chile, the government-backed accelerator launched in 2010, attracted hundreds of global entrepreneurs and seeded a culture of innovation that persists today. The ecosystem has matured: multiple near-unicorns, active VC scene, and strong digital infrastructure (85% internet penetration, widespread 4G/5G, excellent fiber broadband in cities).

The winners: NotCo (plant-based food tech, ~$1.5B valuation) uses AI to replicate animal products and has expanded to the U.S. Betterfly (employee benefits platform) raised $125M+ and operates across Latin America. Cornershop (grocery delivery) sold to Uber for $3 billion in 2020—Chile's biggest exit. Fintechs like Khipu (payments) and Fintual (robo-investing) serve Chilean and regional markets. Mining tech is huge—Chile dominates global lithium supply (critical for EV batteries), and startups optimize mining operations, water management, and automation.

Tech education is solid: Universidad de Chile and Pontificia Universidad Católica produce quality CS graduates, coding bootcamps like Desafío Latam and Laboratoria train hundreds more annually. Brain drain is moderate—many Chileans study or work in the U.S. but return, especially with remote work enabling U.S. salaries in Santiago. The capital offers good quality of life (despite social unrest in 2019 and ongoing inequality), and the tech community is tight-knit.

Government digitalization is strong by Latin American standards: ChileAtiende (e-government portal) consolidates services, and the state embraced digital transformation earlier than neighbors. But President Gabriel Boric's leftist administration (elected 2021) has increased regulation and proposed higher taxes, spooking some investors. Two failed constitution referendums (2022, 2023) created uncertainty. Political stability is shakier than Chile's historical norm.

Challenges: Small domestic market (19 million people), forcing startups to expand regionally fast. Venture capital is active but still thin compared to Brazil or Mexico. Cybersecurity is better than regional peers but improving—ransomware attacks target retail, banking, and mining companies. The 2019 social unrest exposed deep inequality; tech prosperity hasn't spread beyond Santiago's wealthier neighborhoods.

AI adoption is growing in mining (predictive maintenance, autonomous vehicles) and agriculture (precision farming—Chile exports wine, fruit, salmon). Startups integrate AI for fraud detection and customer service, but cutting-edge AI research is limited—most innovation is applied, not foundational.

The lithium boom is Chile's wild card. As the world electrifies, Chile controls massive lithium reserves in the Atacama Desert. Tech companies optimizing lithium extraction, processing, and battery supply chains could become major players. The government is nationalizing more of the lithium industry, creating opportunities and risks for tech entrepreneurs in the sector.

Bottom line: Chile is a solid Tier 2 tech ecosystem—good infrastructure, decent talent, some capital, and a track record of exits. It's not Brazil's scale or Mexico's proximity to the U.S., but it's stable, sophisticated, and punching above its weight. For regional entrepreneurs, Santiago is a smart base. For investors, there's signal here—not just noise. The political uncertainty is real, but compared to Argentina's chaos or Colombia's security issues, Chile still looks good.`,
    issues: JSON.stringify([
      'Strong regional hub with Start-Up Chile legacy',
      'Lithium boom drives mining tech innovation',
      'Political uncertainty after constitution failures',
      'Small domestic market requires regional expansion',
      'Solid infrastructure and moderate brain drain'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'China',
    type: 'country',
    lat: 35.8617,
    lng: 104.1954,
    country: 'China',
    category: 'technology',
    summary: `China's tech sector in November 2025 is a story of constrained ambition—still a global superpower but increasingly isolated, battered by U.S. sanctions, regulatory crackdowns, and economic slowdown. The mega-caps remain: Alibaba, Tencent, ByteDance, Huawei, Baidu, Xiaomi—collectively worth hundreds of billions. But the vibes are off. VC funding is down 50%+ from 2021's peak, IPO markets are frozen after Beijing's 2021-23 regulatory crackdown on tech giants, and entrepreneurs are cautious after watching Jack Ma disappear for months and Didi get destroyed for listing in the U.S.

The U.S.-China tech cold war defines everything. Semiconductor sanctions (imposed 2022-2024) block China from accessing cutting-edge chips—NVIDIA's A100/H100 GPUs are banned, crippling AI development. SMIC, China's leading chipmaker, can't produce sub-7nm chips at scale despite massive state subsidies. This is an existential bottleneck: AI requires compute, compute requires advanced chips, and China can't make or buy them. Workarounds exist (smuggling, older chips, custom ASICs), but China is years behind the U.S. in frontier AI hardware.

Still, China's AI race is real. Baidu's Ernie Bot, Alibaba's Tongyi Qianwen, ByteDance's Doubao, and DeepSeek AI compete with OpenAI and Google. Models are good—sometimes very good—but lag GPT-4/Claude 3.5 in benchmarks and struggle with censorship constraints (any topic touching Xinjiang, Taiwan, Tiananmen triggers blocks). The government mandates AI companies filter politically sensitive content, hobbling chatbots' usefulness.

E-commerce remains massive: Taobao, JD.com, Pinduoduo (whose international arm Temu is conquering global markets with absurdly cheap goods) dominate. Live-streaming commerce is everywhere—hosts sell products to millions of viewers nightly, generating billions in GMV. Mobile payments (Alipay, WeChat Pay) are ubiquitous; cash is nearly extinct in cities. China is years ahead of the U.S. in payment infrastructure and super-app ecosystems.

Surveillance tech is world-class and terrifying. Facial recognition is everywhere—metro stations, apartment buildings, streets. Social credit systems track behavior, punishing "untrustworthy" citizens. China exports surveillance tech to authoritarian regimes globally—helping dictators monitor populations. The Great Firewall blocks Google, Facebook, Twitter, YouTube; VPNs are illegal but widely used.

The economic slowdown hits hard. Youth unemployment is over 20% (official stats are massaged downward), the real estate collapse destroyed household wealth, and consumer confidence is tanking. Tech layoffs are rampant; even Alibaba and Tencent cut staff. The "lying flat" (tangping) movement reflects disillusionment—young Chinese opt out of the rat race, rejecting 996 work culture (9am-9pm, 6 days/week).

Xi Jinping's "Common Prosperity" campaign and regulatory crackdowns (2021-23) hammered tech giants—antitrust fines, forced restructurings, blocked IPOs. The message was clear: no tech billionaire is bigger than the Party. By 2024-25, Xi eased pressure to revive growth, but damage was done. Entrepreneurs know the Party can destroy their companies overnight.

Brain drain is accelerating. Top talent moves to Singapore, the U.S., or anywhere freer and more stable. Those who stay face a slowing economy, authoritarian constraints, and uncertain prospects.

Bottom line: China is still a tech titan—largest internet user base (~1 billion), world-class infrastructure, massive domestic market. But the trajectory is down. U.S. decoupling, demographic decline, real estate collapse, and authoritarianism are binding constraints. China won't collapse, but the days of 10% growth and endless optimism are over. For Western companies, China is increasingly a walled garden—accessible but risky. For Chinese entrepreneurs, it's a golden cage: huge market, but the Party owns the keys.`,
    issues: JSON.stringify([
      'U.S. chip sanctions cripple AI development',
      'Regulatory crackdowns chilled startup ecosystem',
      'Surveillance tech ubiquitous and exported globally',
      'Economic slowdown and youth unemployment',
      'E-commerce and mobile payments dominate'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Colombia',
    type: 'country',
    lat: 4.5709,
    lng: -74.2973,
    country: 'Colombia',
    category: 'technology',
    summary: `Colombia's tech ecosystem in November 2025 is Latin America's #4 player, with Bogotá and Medellín emerging as legitimate startup hubs. The vibe is optimistic but fragile—economic volatility and President Gustavo Petro's leftist policies create uncertainty, yet the fundamentals (young population, improving infrastructure, growing middle class) remain strong. Internet penetration is around 75%, 4G is widespread, and 5G is rolling out in major cities.

The star: Rappi, the delivery super-app valued around $5 billion. Founded in Bogotá in 2015, Rappi delivers food, groceries, cash, medicines—anything—across Latin America. It's expanded into fintech (RappiPay), trying to build a WeChat-style super-app for the region. Other near-unicorns include Habi (proptech, buying/selling homes), Addi (buy-now-pay-later fintech), and Truora (identity verification). Fintech dominates: Nequi and Daviplata (digital wallets with tens of millions of users) have driven financial inclusion, bringing banking to millions of unbanked Colombians.

Medellín's turnaround is the headline. Once the world's murder capital under Pablo Escobar (1980s-90s), the city rebranded as an "innovation hub" with Ruta N tech park, coworking spaces, and a supportive local government. The "Medellín miracle" attracted entrepreneurs, digital nomads, and investors. But sustainability is questioned—beyond Rappi, how many global tech companies has Medellín produced? The innovation narrative is partly marketing.

Tech education is improving: Universidad de los Andes, Universidad Nacional, and others offer solid CS programs. Coding bootcamps like Holberton School and Platzi (edtech unicorn founded by Colombian Freddy Vega) train thousands. Still, brain drain persists—developers leave for the U.S., Spain, or remote work for foreign companies at 2-3x local salaries.

President Petro's administration (elected 2022) scares some investors. His rhetoric is leftist, anti-business at times, and he's pushed tax hikes and labor reforms that make hiring more expensive. The government's chaotic execution and confrontational style create uncertainty. Yet so far, the tech sector hasn't faced major crackdowns—fintech regulation is improving, and e-government services are expanding.

Challenges: Economic volatility (inflation, currency swings), ongoing security issues (drug cartels still operate, though violence is far below 1990s levels), and corruption. Cybersecurity is weak—ransomware attacks target businesses, and banking fraud is common, especially mobile wallet scams. The government struggles to combat cybercrime effectively.

AI adoption is early stage: startups use machine learning for fraud detection (critical in fintech), customer service automation, and logistics optimization. But cutting-edge AI research is minimal—most innovation is applied, not foundational.

VC funding rebounded in 2025 after a 2023-24 slowdown. Regional VCs (Monashees, Kaszek, Softbank Latin America Fund) invest actively, though funding still concentrates in Brazil and Mexico. Colombian startups often need to prove regional traction beyond Colombia's 50 million people.

Bottom line: Colombia has momentum. Rappi proves Colombian founders can build at scale. The talent pool is growing, infrastructure is improving, and optimism persists despite political uncertainty. But the ecosystem is still maturing—more exits needed, more VC funding, more global breakout companies. For regional entrepreneurs, Bogotá and Medellín are legit options. For investors, Colombia is riskier than Chile but more exciting—high beta, high potential. Petro's policies remain the wild card; if he doesn't kill the momentum, Colombia could become a Tier 1 Latin American tech hub by 2030.`,
    issues: JSON.stringify([
      'Rappi super-app leads fintech and delivery',
      'Medellín reinvention from cartel city to tech hub',
      'Petro administration creates policy uncertainty',
      'Strong fintech adoption and financial inclusion',
      'Economic volatility and cybersecurity challenges'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Costa Rica',
    type: 'country',
    lat: 9.7489,
    lng: -83.7534,
    country: 'Costa Rica',
    category: 'technology',
    summary: `Costa Rica's tech sector in November 2025 is Central America's quiet overachiever—steady, stable, and boring in the best way. Internet penetration is around 80%, 4G coverage is good, fiber broadband is expanding, and infrastructure is reliable by regional standards. The country has built a reputation as a tech services and outsourcing hub, leveraging political stability, educated workforce, high English proficiency (rare in Latin America), and proximity to the U.S.

The history matters: Intel operated a major chip manufacturing and R&D facility in Costa Rica from 1998 to 2014, employing thousands and training a generation of engineers. When Intel downsized manufacturing in 2014 (keeping smaller R&D operations), the ecosystem absorbed the talent. HP, IBM, Accenture, and other multinationals run large BPO and software development centers in San José. This is Costa Rica's niche—tech services for U.S. companies, not flashy startups or unicorns.

The startup scene is modest. No unicorns, limited VC funding, and a tiny domestic market (5 million people) force founders to target regional or U.S. markets immediately. Fintech (BAC Credomatic digital banking), software services (Gorilla Logic), and small SaaS companies operate, but exits are small by global standards. The ecosystem lacks the capital and ambition of Brazil, Mexico, or even Colombia.

Tech education is strong: Universidad de Costa Rica (UCR) and Tecnológico de Costa Rica (TEC) produce solid CS graduates. Government investment in STEM education is higher than neighbors, and literacy rates are among Latin America's best. English proficiency is a competitive advantage—Costa Rican developers can work directly with U.S. clients without language barriers, unlike many Latin American peers.

Brain drain is moderate. The U.S. offers 3x salaries, but Costa Rica's quality of life (stable democracy, no military since 1948, "Pura Vida" culture, biodiversity) and safety help retain talent. Remote work during COVID proved many could earn U.S. salaries while living in San José or beach towns, easing some exodus.

Government digitalization is solid. E-government services work (by regional standards), bureaucracy is less kafkaesque than neighbors, and corruption is lower than most of Latin America. Transparency International ranks Costa Rica among the region's cleanest countries. Cybersecurity is decent—data protection laws are improving, digital literacy is higher, and financial fraud is less rampant than in Brazil or Mexico.

AI adoption is limited to customer service automation in BPO sector and basic machine learning for fraud detection. Cutting-edge AI research is nonexistent—Costa Rica is an implementer, not an innovator in frontier tech.

Challenges: Small domestic market limits startup scale, VC ecosystem is thin (most funding comes from U.S. angels or regional VCs), and the country depends heavily on the U.S. economy (recession in the U.S. hits Costa Rican outsourcing firms). Intel's 2024 decision to further downsize Costa Rican operations (eliminating ~1,500 jobs) reminded everyone of the risks in relying on foreign multinationals.

The tourism sector drives some tech innovation—booking platforms, eco-tourism apps, hospitality tech—but scale is limited. Biodiversity and sustainability attract "green tech" interest, but actual deals are rare.

Bottom line: Costa Rica is Latin America's reliable, B-tier tech market. If you need nearshoring for software development with good English, solid talent, and political stability, Costa Rica delivers. If you're hunting unicorns or cutting-edge innovation, look elsewhere. It's a comfortable, safe, steady ecosystem—perfect for risk-averse businesses, underwhelming for venture capitalists seeking 100x returns. For Costa Ricans, it's a decent living in a beautiful country. Sometimes boring is good.`,
    issues: JSON.stringify([
      'Nearshoring hub for U.S. tech services',
      'Small domestic market limits startup scale',
      'High English proficiency and educated workforce',
      'Political stability and quality of life retain talent',
      'Intel downsizing reminder of dependency risks'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Croatia',
    type: 'country',
    lat: 45.1,
    lng: 15.2,
    country: 'Croatia',
    category: 'technology',
    summary: `Croatia's tech scene in November 2025 is the EU's emerging nearshoring play—smaller than Poland or Romania, but growing as Western European companies discover cheaper developers with Mediterranean charm. Internet penetration is around 80%, 4G/5G covers cities well, fiber broadband is expanding in Zagreb, Split, and Dubrovnik, and infrastructure is solid by regional standards. The country attracts digital nomads (thanks to a 2021 digital nomad visa), but does it create homegrown tech companies? Barely.

The one success story: Infobip, the cloud communications platform valued north of $1 billion, serving enterprise clients globally with SMS, WhatsApp, and omnichannel messaging APIs. Founded in Croatia, still headquartered in Zagreb, Infobip is proof Croatia can produce tech companies that scale internationally. Beyond Infobip? Slim pickings. The gaming sector punches above its weight—Croteam (Serious Sam franchise) and Nanobit (mobile games) are notable, with the sector worth roughly €150 million annually—but no giants.

The startup ecosystem is tiny. VC funding is scarce, forcing founders to bootstrap or seek Western European investors who often demand relocation to Berlin, London, or Amsterdam as a funding condition. The domestic market is minuscule (3.8 million people, smaller than Connecticut), so any serious startup must go international immediately. EU membership helps—access to single market, EU tech funding, Digital Europe Programme—but Croatian startups still face disadvantages versus Western European peers in capital access and network effects.

Brain drain is devastating. After graduation, young Croatian developers flee to Germany, Austria, Ireland, Netherlands—anywhere offering 2-3x salaries. Tech companies in Zagreb struggle to retain talent against Western European recruiters offering remote roles or relocation packages. The population is aging and shrinking (down from 4.8 million in 1991), and the exodus of young, educated workers accelerates the decline.

The digital nomad visa (launched 2021, allowing non-EU remote workers to live in Croatia up to a year) has brought thousands of remote workers, especially to Split, Dubrovnik, and Zagreb. This injects money into the economy and creates networking opportunities, but doesn't build local startups—nomads work for foreign companies, earn foreign salaries, and often leave after a year.

Tech education is adequate: University of Zagreb and University of Split offer CS programs, but curricula lag Western European standards. Coding bootcamps are emerging but limited. English proficiency among young people is decent, and proximity to Western Europe (2-hour flights to Germany, Austria) helps culturally.

Government digitalization is improving. E-Croatia portal consolidates government services, and EU funds drive digital transformation projects. But bureaucracy remains frustrating, and corruption (though lower than Balkans' neighbors) persists. The government talks startup support but provides little substantive funding or policy innovation.

AI adoption is nascent. Outsourcing firms integrate AI features for Western European clients, but homegrown AI companies are rare. Cybersecurity is moderate—EU regulations enforce baselines (GDPR, NIS2), but ransomware attacks targeting SMEs are rising.

Bottom line: Croatia is a nice place to live (gorgeous coastline, EU member, decent infrastructure) but a weak place to build a tech company. For nearshoring software development to serve Western European clients, it works—lower costs than Germany, better timezone than India, EU regulatory alignment. For building the next unicorn, the ecosystem lacks capital, market size, and talent retention. Brain drain will continue until Croatian salaries approach Western Europe (unlikely anytime soon). Infobip succeeded despite Croatia, not because of it. For digital nomads, Croatia is paradise. For Croatian founders, it's a launchpad to get out.`,
    issues: JSON.stringify([
      'Infobip success story proves scale is possible',
      'Devastating brain drain to Western Europe',
      'Small domestic market forces immediate internationalization',
      'Digital nomad visa attracts remote workers',
      'Limited VC funding and startup ecosystem'
    ]),
    topStories: JSON.stringify([]),
    storyCount: 0
  }
]

async function insertTechnologyWriteups() {
  console.log('Inserting TECHNOLOGY write-ups for Batch 2...\n')
  console.log(`Total writeups: ${TECHNOLOGY_WRITEUPS.length}\n`)

  let inserted = 0
  let updated = 0
  let failed = 0

  for (const writeup of TECHNOLOGY_WRITEUPS) {
    try {
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: writeup.type as 'country',
            category: writeup.category
          }
        },
        create: writeup,
        update: {
          summary: writeup.summary,
          issues: writeup.issues,
          topStories: writeup.topStories,
          storyCount: writeup.storyCount,
          updatedAt: new Date()
        }
      })

      const action = result.updatedAt.getTime() === result.createdAt.getTime() ? 'CREATED' : 'UPDATED'

      if (action === 'CREATED') {
        inserted++
        console.log(`✓ ${writeup.name} - CREATED (${writeup.summary.length} chars)`)
      } else {
        updated++
        console.log(`✓ ${writeup.name} - UPDATED (${writeup.summary.length} chars)`)
      }

    } catch (error) {
      failed++
      console.error(`✗ ${writeup.name} - FAILED:`, error)
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log('BATCH 2 TECHNOLOGY WRITE-UPS INSERTION COMPLETE')
  console.log('='.repeat(60))
  console.log(`   Created: ${inserted}`)
  console.log(`   Updated: ${updated}`)
  console.log(`   Failed: ${failed}`)
  console.log(`   Total: ${TECHNOLOGY_WRITEUPS.length}`)
  console.log('='.repeat(60))
}

insertTechnologyWriteups()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
