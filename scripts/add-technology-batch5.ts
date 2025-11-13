// TECHNOLOGY WRITEUPS - BATCH 5/10
// Countries: Ireland, Israel, Italy, Japan, Jordan, Kazakhstan, Kenya, Kuwait, Laos, Latvia, Lebanon, Libya, Lithuania
// Style: Ben Thompson (Stratechery) / Kara Swisher
// Length: 2,500-3,500 characters each
// Generated: November 2025

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const BATCH5_WRITEUPS = [
  {
    name: 'Ireland',
    lat: 53.4129,
    lng: -8.2439,
    summary: `Ireland's tech sector in November 2025 is a paradox: the "Silicon Docks" hub hosting Apple, Google, Meta, Microsoft, and Amazon European headquarters while struggling to build a homegrown startup ecosystem beyond their shadows. The multinational presence is staggering—over 950 tech multinationals employ 50,000+ people in Ireland, attracted by the 12.5% corporate tax rate (though the OECD's 15% global minimum tax is forcing adjustments). Ireland's internet infrastructure is world-class: 95% penetration, average broadband speeds of 160 Mbps, and near-universal 5G coverage in Dublin and Cork. The problem? Ireland's startup scene punches below its weight. Despite government initiatives like Enterprise Ireland and €500 million in VC funding annually, Ireland has produced few unicorns (Intercom and Fenergo are exceptions). The talent pool is deep—Trinity College Dublin and University College Dublin produce strong CS graduates—but most are immediately absorbed by Big Tech's generous salaries (€80,000+ for new grads). Brain drain works both ways: Irish talent stays, but they work for American companies.

The Irish government's tech policy is cautious and compliance-focused. The Data Protection Commission, Europe's de facto Big Tech regulator due to Ireland's EU headquarters status, has levied €5.1 billion in GDPR fines since 2018 (including €1.2 billion against Meta in 2023). But critics argue Ireland is too cozy with Big Tech—it took years to prosecute cases, and the tax arrangements have drawn EU scrutiny. Ireland's National AI Strategy launched in 2021 but remains vague on implementation. Cybersecurity is robust for enterprises but lax for SMEs—ransomware attacks surged 300% from 2022-2024. The digital skills gap persists despite government retraining programs.

Ireland's housing crisis is killing its tech ambitions. Rents in Dublin average €2,100/month for a one-bedroom apartment, pricing out young entrepreneurs and even Big Tech workers. Remote work post-COVID has helped, but it's also enabled Irish talent to work for international companies without the visa hassle, reducing startup job creation. The venture capital scene is improving—SOSV, Act Venture Capital, and Elkstone Partners are active—but Ireland still lags London, Paris, and Berlin for startup investment. Enterprise Ireland's supports are generous but bureaucratic.

Ireland's tech future hinges on diversification. The government's "IDA Ireland 2030" strategy aims to attract R&D hubs and advanced manufacturing (semiconductor fabs, data centers), but planning permission fights and energy grid constraints slow progress. The Dublin tech scene is vibrant—meetups, accelerators, coworking spaces—but the "exit to Google" mentality limits ambition. Irish founders often sell early to multinationals rather than scaling independently.

**Bottom line:** Ireland is Europe's tech services hub—great for Big Tech, mediocre for startups. The infrastructure is world-class, the talent is strong, but the ecosystem lacks the risk-taking culture and patient capital to build Irish-owned giants.`,
    issues: ['Big Tech dominance stifling local startups', 'Housing crisis driving talent away', 'GDPR enforcement role', 'VC funding lags European peers', 'Digital skills gap', 'Energy infrastructure constraints for data centers']
  },
  {
    name: 'Israel',
    lat: 31.0461,
    lng: 34.8516,
    summary: `Israel's tech ecosystem in November 2025 remains the "Startup Nation"—but with cracks showing. The October 7, 2023 Hamas attack and subsequent Gaza war triggered a tech reckoning: hundreds of thousands of reservists called up (including CTOs and founders), investor confidence shaken, and the Netanyahu government's judicial overhaul driving talent abroad. Yet Israeli tech is resilient. The country has 100+ unicorns (Wiz valued at $12B, Monday.com at $9B), Tel Aviv ranks 10th globally for startup investment, and exits totaled $15 billion in 2024 (down from $27B in 2021 but still strong). Israel's internet infrastructure is excellent: 90% penetration, fiber-to-home in major cities, and 5G rollout by Cellcom, Partner, and Pelephone. The problem is political instability and emigration—12,000 tech workers left Israel in 2024, mostly to the US and Europe, citing security concerns and government policies.

Israel's startup ecosystem is battle-tested. Unit 8200 (IDF's cyber intelligence unit) produces world-class cybersecurity founders—Check Point, Wiz, CyberArk, and SentinelOne all trace roots to military intelligence. Israel leads globally in cyber investment per capita ($1,500/capita vs. US $300/capita). AI is Israel's next frontier: companies like AI21 Labs (generative AI), OrCam (computer vision), and Mobileye (autonomous vehicles, now Intel-owned) are pushing boundaries. However, funding is concentrated in late-stage deals—seed funding dropped 40% in 2024 as local VCs became cautious and US investors pulled back due to geopolitical risk.

The Israeli government's tech policy is schizophrenic. The Innovation Authority provides R&D grants and incubator support (€600 million annually), but Netanyahu's judicial reforms—allowing the Knesset to override Supreme Court decisions—spooked international investors who fear rule of law erosion. Protests by tech workers in 2023 (including executives from Google, Apple, Microsoft Israel offices) highlighted the divide between the secular tech elite and the nationalist government. Israel's Arab tech scene is growing—initiatives like "Arabs in Tech" and NGO Tsofen—but Arab citizens remain underrepresented (5% of tech workers vs. 21% of population).

Cybersecurity is existential for Israel—constant state-sponsored attacks from Iran, Hezbollah, and Hamas. NSO Group, maker of Pegasus spyware, became notorious for abuses, leading to US sanctions in 2021 and a reputational crisis for Israeli cyber exports. Israel tightened export controls but continues to sell to authoritarian regimes. Digital infrastructure is strong but strained—electricity demand from data centers and Bitcoin mining (Israel has a crypto scene) strains the grid.

Israel's tech future depends on political stability. If the judicial crisis continues and the Gaza conflict drags on, brain drain will accelerate. But Israeli entrepreneurs are adaptive—many run "distributed" companies with R&D in Israel and HQ in Delaware for investor comfort. The talent pipeline remains strong—Technion, Hebrew University, Tel Aviv University—but retention is the challenge.

**Bottom line:** Israel's tech prowess is undeniable, but geopolitics and internal politics threaten the Startup Nation's future. Talent is fleeing, investors are cautious, yet the innovation engine keeps running—for now.`,
    issues: ['Post-Oct 7 war impact on tech sector', 'Brain drain of 12,000 workers', 'Judicial overhaul scaring investors', 'Unit 8200 cybersecurity dominance', 'NSO Group spyware controversy', 'Seed funding collapse']
  },
  {
    name: 'Italy',
    lat: 41.8719,
    lng: 12.5674,
    summary: `Italy's tech sector in November 2025 is a story of missed potential: brilliant engineers, world-class design culture, but a startup ecosystem strangled by bureaucracy, capital scarcity, and brain drain. Italy has internet penetration of 85%, adequate broadband (average 100 Mbps), and improving 5G (Vodafone, TIM, WindTre cover 80% of population), but the digital economy lags Northern Europe. Italy ranks 22nd in the EU's Digital Economy and Society Index (DESI)—ahead of Greece and Romania, behind Spain and Portugal. The startup scene is concentrated in Milan (47% of Italian startups), Rome, and Turin, with emerging hubs in Bologna and Florence. Italy produced its first unicorn in 2021 (Scalapay, buy-now-pay-later), but exits are rare and valuations modest. Italian founders complain of a "valley of death"—seed funding exists (€50-200k from angels, CDP Venture Capital) but Series A rounds (€2-5 million) are scarce, forcing startups to seek foreign VCs or sell early.

Italian tech policy under Prime Minister Giorgia Meloni's government (elected 2022) is nationalist and control-focused. The "Piano Transizione 4.0" provides tax credits for digital transformation and R&D, but implementation is slow. Italy blocked a $565 million Chinese investment in a semiconductor firm in 2023 citing national security, signaling a tougher stance on foreign tech ownership. Meloni's government invested €1 billion in "Piano Italia Digitale" for fiber rollout, e-government, and digital ID (SPID system now has 35 million users), but public sector digitalization remains glacial—government websites crash, bureaucrats resist change, and Italy ranks last in EU for e-government services. Cybersecurity is improving—ACN (National Cybersecurity Agency) launched in 2021—but ransomware attacks on Italian hospitals, cities, and companies surged 180% from 2022-2024. Italy's digital skills gap is acute: 54% of Italians lack basic digital skills (EU average: 46%).

Italy's tech talent problem is existential. Brain drain accelerated post-COVID: 35,000 Italian STEM graduates emigrate annually to Germany, UK, Switzerland, and US, attracted by higher salaries (Italian devs earn €30-45k vs. €60-80k in Germany). Italian universities (Politecnico di Milano, Sapienza Rome) produce excellent engineers, but the private sector can't compete with foreign offers. The "Decreto Rientro" (return decree) offers tax breaks for returning diaspora, but uptake is low. Italy's aging population (median age 48) means fewer young techies entering the workforce.

Italian tech success stories exist: Bending Spoons (productivity apps, bought Evernote in 2023), Musixmatch (music lyrics platform), Prima Assicurazioni (insurtech), and Leonardo (defense tech giant). Italy's design excellence translates to strong UX/UI talent. But the ecosystem lacks "patient capital"—Italian VCs want exits in 3-5 years, not 10-year moonshots. Family businesses (backbone of Italian economy) are slow to digitize. Cryptocurrency adoption is modest but growing—Italy has 3.6 million crypto owners (6% of population), and the government is introducing crypto taxation.

**Bottom line:** Italy has the raw ingredients for tech success—talent, design culture, large domestic market—but it's squandered by risk-averse capital, bureaucratic paralysis, and relentless brain drain. Unless Italy fixes its ecosystem fundamentals, it will remain a talent exporter, not a tech powerhouse.`,
    issues: ['Brain drain of 35,000 STEM grads annually', 'Series A funding gap', 'Last in EU for e-government', 'Digital skills deficit', 'Bureaucratic obstacles', 'Aging population']
  },
  {
    name: 'Japan',
    lat: 36.2048,
    lng: 138.2529,
    summary: `Japan's tech sector in November 2025 is a study in contradictions: world-leading hardware and gaming, but a software startup scene that underperforms. Japan's internet infrastructure is exceptional—97% penetration, average speeds of 180 Mbps (fiber-to-home in cities), and nationwide 5G by NTT Docomo, KDDI, and SoftBank. Japan's digital payment adoption surged post-pandemic—QR codes (PayPay dominates with 65 million users), e-wallets, and contactless payments now account for 40% of transactions (up from 20% in 2019). But Japan still clings to cash (55% of transactions) and fax machines (yes, really—government offices and hospitals still fax). Japan's startup ecosystem is timid: only 5 unicorns (Preferred Networks, SmartNews, Spiber, Liquid, Triple W Japan), total VC funding of $7 billion annually (vs. $180B in US, $30B in China). The problem is cultural—Japanese society punishes failure, favors lifetime employment at Sony or Toyota, and lacks risk-taking entrepreneurship. The government's "Beyond Limits. Unlock Our Potential" startup strategy (2022) aims to create 100 unicorns by 2027—delusional given current trajectory.

Japan's tech giants (Sony, Nintendo, Toyota, Panasonic, SoftBank) remain formidable. Sony's PlayStation 5 dominates gaming (60 million units sold), and Sony Semiconductors supplies image sensors for iPhones. Nintendo's Switch successor ("Switch 2") launches March 2026 amid huge anticipation. Toyota leads in hybrid technology but lags in EVs—Tesla and BYD dominate Japan's EV market. SoftBank's Vision Fund, once the world's largest tech investor ($100B), suffered catastrophic losses (WeWork, Didi, Grab implosions) and is now cautious. Japan's AI strategy is defensive—partnerships with IBM Watson, Google AI, and OpenAI rather than homegrown LLMs. Japan's semiconductor revival is underway: TSMC's $8.6 billion Kumamoto fab (co-funded by Japanese government) started production in 2024, aiming to rebuild Japan's chip-making prowess lost to Taiwan and Korea.

Japanese government tech policy is technocratic but slow. The Digital Agency launched in 2021 to modernize government IT, but progress is glacial—My Number digital ID system (Japan's SSN equivalent) still has low adoption (65%), and government services remain paper-based. Cybersecurity is a national obsession post-Sony hack (2011) and Olympic infrastructure threats (2021)—Japan's National Center of Incident Readiness and Strategy (NISC) coordinates defense, but ransomware attacks on hospitals and local governments are rising. Japan's data privacy law (APPI) is GDPR-lite but enforced weakly.

Japan's tech talent crisis is demographic: aging population (median age 49), shrinking workforce, and aversion to immigration means a shortage of 790,000 IT workers by 2030 (Ministry of Economy estimate). Japan's CS education is traditional—strong in theory, weak in entrepreneurship. Women are underrepresented in tech (15% of engineers vs. 25% in US), and "black company" culture (overwork, low pay) drives talent to foreign firms or abroad. Japan's remote work adoption lags—only 30% of Japanese firms allow remote work vs. 60% in US.

Japan's tech future is automation and robotics. Facing labor shortages, Japan is deploying service robots (hospitality, elderly care), industrial automation (Toyota, Fanuc), and AI-powered logistics. Japan's strengths—precision engineering, quality manufacturing, gaming—remain world-class. But unless Japan fixes its startup culture, immigration policy, and risk aversion, it will be a tech follower, not a leader.

**Bottom line:** Japan excels at hardware, gaming, and robotics but fails at software and startups. Demographic decline and cultural conservatism doom its tech ambitions unless radical reforms happen—which they won't.`,
    issues: ['Only 5 unicorns despite large economy', 'Shortage of 790,000 IT workers by 2030', 'Risk-averse startup culture', 'SoftBank Vision Fund collapse', 'Aging population crisis', 'Cash and fax machine persistence']
  },
  {
    name: 'Jordan',
    lat: 30.5852,
    lng: 36.2384,
    summary: `Jordan's tech sector in November 2025 is the Middle East's quiet achiever—stable, educated, but constrained by small market size and brain drain. Internet penetration is 84% (7.2 million users), 4G coverage is extensive, and 5G launched in Amman in 2024 by Zain and Orange Jordan. Jordan's startup ecosystem punches above its weight: Amman is the Arab world's third-largest tech hub after Dubai and Riyadh, with 600+ startups and $120 million in annual VC funding (modest but growing). Success stories include Fetchr (logistics), Jamalon (Arabic e-commerce, acquired by Alibaba 2023), and Mawdoo3 (Arabic content platform). But Jordan's biggest export is talent—over 50% of Jordanian CS graduates leave for Gulf states, Europe, or US, attracted by salaries 3-5x higher than Jordan's $800-1,200/month developer wages.

Jordan's tech strategy is government-driven. King Abdullah II personally champions tech as Jordan's economic future—he launched the King Abdullah II Fund for Development, which backs tech incubators and coding academies. Oasis500 and Endeavor Jordan are the main accelerators. The Jordan Investment Commission offers tax exemptions and "Golden Visa" residency for foreign tech investors. KADDB (King Abdullah II Design and Development Bureau) develops defense tech, including drones and military software. Jordan's e-government push is the Arab world's most advanced—Jordan's digital ID (used by 80% of adults), online tax filing, and Sanad app for government services are models for the region. But bureaucracy and corruption slow implementation.

Jordan's tech education is strong: Jordan University of Science and Technology (JUST), German Jordanian University, and Princess Sumaya University produce 5,000 CS/IT graduates annually. Coding bootcamps (Coding Academy, Re:Coded) retrain refugees and women. But the private sector can't absorb graduates—Jordan's unemployment rate is 23% (40% for youth), forcing emigration. Jordan's digital skills are high (Arabic and English fluency helps), but the domestic market is too small (10 million population, $50 billion GDP) to support unicorns. Jordanian startups target regional markets (Saudi Arabia, UAE, Egypt) but face competition from better-funded Gulf rivals.

Cybersecurity is Jordan's niche strength—Jordan trains cybersecurity specialists for regional governments and hosts the Royal Jordanian Cyber Security Center. Jordan's internet is relatively free compared to neighbors—no TikTok bans, no VPN crackdowns—but the government monitors online dissent and blocked websites during 2024's economic protests. Data privacy laws are weak, and surveillance by mukhabarat (intelligence services) is pervasive.

Jordan's tech challenges are structural. Water scarcity threatens data centers (water-cooled servers need massive water). Energy costs are high (Jordan imports 97% of energy), making cloud hosting expensive. Venture capital is scarce—most funding comes from Gulf LPs or USAID grants, not local investors. The 2024 Gaza war impacted Jordan economically (refugees, trade disruption), but Jordan's tech sector remained insulated.

Jordan's tech future is as a regional services hub—outsourcing, cybersecurity, Arabic content moderation for global platforms. Jordan won't build unicorns at scale, but it can be the Middle East's "tech back office." The government's "Jordan Digital 2028" plan aims to double tech exports to $2 billion and create 50,000 tech jobs. Achievable if brain drain slows.

**Bottom line:** Jordan is the Middle East's tech success story you haven't heard of—stable, educated, digitally advanced—but too small and underfunded to compete with Gulf giants. Talent export is Jordan's real tech business.`,
    issues: ['50% of CS grads emigrate', 'Small domestic market limits scale', 'VC funding scarce', '23% unemployment rate', 'Energy and water constraints', 'Government surveillance']
  },
  {
    name: 'Kazakhstan',
    lat: 48.0196,
    lng: 66.9237,
    summary: `Kazakhstan's tech sector in November 2025 is defined by two things: cryptocurrency mining and authoritarian digital control. Internet penetration is 88% (17 million users), 4G is widespread, and 5G launched in Almaty and Nur-Sultan (now called Astana again) in 2023. Kazakhstan was briefly the world's second-largest Bitcoin mining destination after China's 2021 ban—cheap electricity (coal-fired, 5 cents/kWh) attracted Chinese miners. At its peak, Kazakhstan represented 18% of global Bitcoin hashrate. Then in January 2022, the government shut down the internet during protests, and miners fled. By 2025, Kazakhstan's hashrate is 6% of global—miners moved to US and Canada. Kazakhstan introduced crypto mining regulations (licensing, higher electricity rates for miners, $0.10/kWh) to manage energy strain. The crypto crackdown revealed Kazakhstan's digital authoritarianism: internet shutdowns, VPN blocks, surveillance.

Kazakhstan's startup ecosystem is nascent. Almaty has 300+ startups, mostly fintech, e-commerce, and logistics. MOST Ventures and Qaztech Ventures provide seed funding, but total VC investment is $30 million annually—microscopic for a country of 20 million. Kaspi.kz is Kazakhstan's tech success story: a super-app combining payments, e-commerce, ride-hailing, and fintech, with 13 million users (65% of population). Kaspi went public on Nasdaq in 2020, valued at $6 billion—Kazakhstan's only unicorn. But Kaspi's dominance (80% of digital payments) stifles competition. Other startups struggle for oxygen. Chocofood (food delivery) and Arbuz (grocery delivery) are regional players but unprofitable.

The Kazakhstani government's tech policy is contradictory. President Kassym-Jomart Tokayev's "Digital Kazakhstan 2025" program aims to digitize government services, boost e-commerce, and attract IT investment. E-government progress is real: Egov.kz portal for public services has 12 million users, digital ID is mandatory, and online tax filing is common. Kazakhstan's "Astana Hub" tech park offers tax breaks and simplified visas for IT workers—400+ companies registered, mostly outsourcing shops. But authoritarianism undermines progress: the government monitors Telegram, Twitter/X, and WhatsApp; arrested activists for online posts; and mandated ISPs install "security certificates" enabling man-in-the-middle surveillance (2019 law, still in force).

Kazakhstan's tech talent is educated but emigrates. Nazarbayev University and Kazakh-British Technical University produce strong CS grads, but salaries are low (€500-800/month for developers) compared to Russia (€1,500-2,500) or Europe (€3,000+). Brain drain accelerated after 2022—both to Russia (Russian tech diaspora fled to Kazakhstan, then Kazakhstan's fled Russia's mobilization) and to EU/US. Women are underrepresented in tech (20% of developers).

Cybersecurity is weak. Kazakhstan faces ransomware attacks on government agencies and companies, but incident response is poor. The National Cyber Security Coordination Center exists but lacks capacity. Data privacy laws are on paper but unenforced—Kazakhstani user data is routinely accessed by security services. Kazakhstan's surveillance apparatus, inherited from Soviet KGB, uses facial recognition (Astana has 10,000+ cameras) and phone tracking.

Kazakhstan's tech future is tied to energy transition and political reform. If Kazakhstan pivots from coal to renewables, crypto mining could return sustainably. If Tokayev liberalizes (unlikely under Russia's shadow), Kazakhstan could be Central Asia's tech hub. But authoritarian drift, brain drain, and energy mismanagement will keep Kazakhstan a tech backwater.

**Bottom line:** Kazakhstan had a crypto mining boom and bust, has one unicorn (Kaspi), and surveillance infrastructure rivals China's. Digital authoritarianism and talent flight doom its tech potential.`,
    issues: ['Crypto mining boom-and-bust', 'Internet shutdowns during protests', 'Government surveillance via ISP backdoors', 'Brain drain to Russia and West', 'Kaspi.kz monopoly', 'Energy grid strain']
  },
  {
    name: 'Kenya',
    lat: -0.0236,
    lng: 37.9062,
    summary: `Kenya's tech sector in November 2025 is Africa's most vibrant—the "Silicon Savannah" moniker is earned, not marketing. Internet penetration is 45% (23 million users), concentrated in Nairobi and Mombasa, with 4G coverage at 75% (Safaricom, Airtel, Telkom Kenya). Kenya's mobile money revolution, led by M-Pesa (launched 2007), is legendary: 95% of Kenyan adults use M-Pesa, processing $500 billion in transactions annually (twice Kenya's GDP). M-Pesa's success spawned a fintech ecosystem: Tala (micro-lending), Chipper Cash (cross-border payments), and Branch (mobile loans). Kenya has 12 tech unicorns and near-unicorns—more than any African country except Nigeria and South Africa. Nairobi's tech scene is concentrated in Westlands and Karen neighborhoods: over 1,000 startups, $1 billion+ in VC funding annually, and multinational presence (Google, Microsoft, Meta have African HQs in Nairobi).

Kenya's startup ecosystem is maturing. iHub, Nailab, and Savannah Fund are established accelerators. Success stories include Twiga Foods (B2B food distribution, raised $100M+), Sendy (logistics), Apollo Agriculture (agritech), and Ajua (customer experience AI). But challenges persist: 80% of Kenyan startups fail within 3 years due to funding gaps (Series A "valley of death"), market fragmentation (40+ African countries, each with unique regulations), and infrastructure failures (electricity blackouts, poor roads). Kenya's "Silicon Savannah" reputation attracts talent from Uganda, Tanzania, Rwanda, and Ethiopia, but brain drain to Europe and US accelerates as Kenyan devs discover 10x salary arbitrage.

The Kenyan government under President William Ruto (elected 2022) is tech-forward but erratic. Ruto's "Bottom-Up Economic Transformation Agenda" includes digital infrastructure investment, but his government imposed controversial taxes in 2024 (16% VAT on digital services, "social media tax"), triggering protests. Kenya's Konza Technopolis, a government-backed tech city south of Nairobi, is incomplete after 10+ years and $10 billion investment—Africa's largest white elephant. Kenya's e-government push (eCitizen portal for licenses, permits, taxes) is functional but plagued by corruption and system crashes. Cybersecurity is weak: ransomware attacks on Kenyan banks, hospitals, and government agencies surged 250% from 2022-2024, and Kenya's cyber law enforcement is under-resourced.

Kenya's tech education is improving. University of Nairobi, Strathmore University, and Jomo Kenyatta University produce 8,000 CS/IT grads annually. Coding bootcamps (Moringa School, AkiraChix for women) proliferate. But quality is inconsistent—many grads lack practical skills, and companies complain of a "skills mismatch." Kenya's digital divide is stark: urban Kenyans are smartphone-savvy, rural Kenyans struggle with 2G coverage and literacy.

Kenya's tech policy is inconsistent. Data Protection Act (2019) modeled on GDPR but rarely enforced. Kenya's Communications Authority regulates telecoms but is criticized for favoring Safaricom (government is 35% shareholder). Kenya blocked Twitter/X, WhatsApp, and Facebook during 2024 tax protests—exposing authoritarian tendencies. Kenya's tech future depends on infrastructure—electricity (Kenya's grid is 90% renewable but unreliable), fiber (Google and Meta fund undersea cables), and roads (last-mile delivery kills e-commerce margins).

Kenya's tech trajectory is upward despite obstacles. If Kenya fixes infrastructure, reduces corruption, and maintains political stability (big ifs), it will lead Africa's digital economy. But competition from Nigeria, South Africa, Egypt, and Rwanda is fierce.

**Bottom line:** Kenya is Africa's tech leader—M-Pesa, fintech, and startup vibrancy are real. But infrastructure failures, funding gaps, and government interference limit potential. Silicon Savannah is impressive but fragile.`,
    issues: ['80% startup failure rate', 'Electricity blackouts', 'Series A funding valley of death', 'Government internet shutdowns during protests', 'Brain drain to West', 'Konza Technopolis white elephant']
  },
  {
    name: 'Kuwait',
    lat: 29.3117,
    lng: 47.4818,
    summary: `Kuwait's tech sector in November 2025 is a study in wasted potential: oil-rich, well-educated population, but a startup ecosystem suffocated by bureaucracy and rent-seeking culture. Internet penetration is 99.6% (4.3 million users, highest in Middle East), 5G coverage is universal (Zain, Ooredoo, stc), and Kuwait's internet speeds average 200 Mbps. But Kuwait's digital economy is tiny—e-commerce is 4% of retail (vs. 20% in UAE, 15% in Saudi Arabia). Kuwait has fewer than 200 startups, $40 million in annual VC funding, and zero unicorns. The problem is cultural and systemic: 76% of Kuwaiti citizens work for the government (public sector jobs are cushy, pay $3,000-6,000/month, and come with pensions), leaving no incentive for entrepreneurship. The private sector is dominated by foreign labor (expatriates are 70% of Kuwait's 4.6 million population), and Kuwaiti nationals avoid startups because "failure" is socially unacceptable.

Kuwait's startup ecosystem is government-funded and performative. The National Fund for SME Development provides loans and grants, but bureaucracy is crushing—12+ months for business registration, opaque regulations, and wasta (connections) determine success. Kuwait's startup scene is concentrated in fintech and food delivery. Tap (payment gateway) is Kuwait's best-known startup. Talabat (food delivery) was Kuwaiti-founded but sold to Germany's Delivery Hero in 2015 for $170 million—Kuwait's biggest exit. Carriage (last-mile delivery) raised $35 million in 2023 but remains unprofitable. Kuwait's problem is market size: 4.6 million people (70% expats who remit earnings abroad) limits scale. Kuwaiti startups target GCC markets but face competition from better-funded Saudi and Emirati rivals.

The Kuwaiti government's tech policy is reactive. Kuwait Vision 2035 promises "knowledge-based economy," but implementation is glacial. The Public Authority for Civil Information (PACI) runs digital ID and e-government services, but government websites crash, and ministries resist digitization. Kuwait banned TikTok in 2024 over "moral concerns" (reversed after public outcry), and the government monitors social media—activists are arrested for "insulting the Emir" on Twitter/X. Cybersecurity is improving post-2020 ransomware attack on Kuwait Petroleum Corporation, but incident response is weak. Data privacy law exists (2020) but enforcement is inconsistent.

Kuwait's tech talent is limited. Kuwait University and American University of Kuwait produce CS grads, but many study abroad (US, UK) and don't return. Salaries for Kuwaiti devs are high ($3,000-5,000/month) but below Gulf peers. Women are well-represented in tech education (45% of CS students) but face workplace discrimination. Expat tech workers (Indians, Egyptians, Filipinos) dominate coding jobs but face visa restrictions and job insecurity.

Kuwait's crypto scene is active—Kuwaitis invest heavily in Bitcoin and Ethereum (no capital gains tax makes Kuwait a crypto haven), but crypto trading is unregulated. Kuwait's remittance economy is huge ($15 billion sent abroad annually by expats), creating opportunities for blockchain-based payment solutions, but regulatory uncertainty stifles innovation.

Kuwait's tech future is bleak without reform. Oil wealth ($100/barrel Brent crude in 2025) keeps the government afloat, but Kuwait's refusal to diversify, cut public sector bloat, or attract foreign investment dooms tech ambitions. Kuwait could be Singapore of the Middle East—instead, it's a rentier state with fast internet.

**Bottom line:** Kuwait has world-class internet, oil money, and zero tech ecosystem. A rentier economy, risk-averse culture, and suffocating bureaucracy ensure Kuwait remains a tech desert despite Gulf wealth.`,
    issues: ['76% of citizens in government jobs', 'Zero unicorns', 'Crushing bureaucracy', 'Market size limits scale', 'TikTok ban and social media monitoring', 'Rent-seeking culture kills startups']
  },
  {
    name: 'Laos',
    lat: 19.8563,
    lng: 102.4955,
    summary: `Laos's tech sector in November 2025 is virtually nonexistent—one of Asia's poorest, most authoritarian states where internet is censored, infrastructure is primitive, and innovation is stifled. Internet penetration is 62% (4.8 million users), but most access is via 3G mobile (Lao Telecom, Unitel, ETL), and speeds average 12 Mbps—among the slowest in Southeast Asia. 4G coverage exists in Vientiane and Luang Prabang but is unreliable. Laos has no undersea fiber cables (landlocked), relying on Chinese and Thai networks, making internet expensive ($30/month for 10 Mbps vs. $10 in Thailand). The Lao People's Democratic Republic's communist government controls telecoms through state-owned Lao Telecom and blocks websites critical of the regime. VPN usage is common but risky—Laos arrested dissidents for Facebook posts.

Laos's startup ecosystem is a fantasy. Vientiane has fewer than 50 "startups," mostly small e-commerce shops and delivery services. There is no VC funding, no accelerators, and no tech success stories. Laos's economy is agricultural (60% of employment), subsistence-based, and dominated by Chinese infrastructure projects (Belt and Road Initiative debt is 60% of GDP). The few Lao "tech" companies are outsourcing shops for Thai and Vietnamese clients or tourism booking platforms (Laos is beautiful—Luang Prabang, Vang Vieng—but tourism tech is basic). Laos has zero unicorns, zero exits, and zero prospect of either.

The Lao government's tech policy is nonexistent beyond censorship. The Ministry of Technology and Communications oversees telecoms but lacks capacity or vision. Laos's "e-government" is a joke—government services are paper-based, officials demand bribes, and corruption is endemic (Transparency International ranks Laos 136/180). Laos banned cryptocurrency in 2022 (Bitcoin mining was briefly popular due to cheap hydropower), and there's no fintech regulation. Cybersecurity doesn't exist—Lao government websites are routinely hacked, and ransomware is common but unreported.

Laos's tech education is abysmal. National University of Laos has a CS department, but curriculum is outdated (teaching Java 8 in 2025), equipment is scarce (one computer per 10 students), and English proficiency is low. Brain drain is total—any Lao with tech skills emigrates to Thailand, Vietnam, or abroad. Salaries in Laos are $150-300/month for developers (vs. $1,000+ in Thailand), and there are no prospects. Women are underrepresented in tech (10% of students) due to cultural barriers.

Laos's digital infrastructure is collapsing. Electricity is unreliable (blackouts common despite hydropower dams), and Laos's power exports to Thailand and Vietnam prioritize revenue over domestic supply. Chinese surveillance technology (Huawei, ZTE) is pervasive—facial recognition cameras in Vientiane, internet monitoring, and phone tapping by Lao security services. Laos's internet freedom is rated "Not Free" by Freedom House—government blocks Facebook during protests, censors news, and surveils activists.

Laos's tech future is nonexistent. The country is a Chinese client state, drowning in debt, ruled by gerontocratic communists who fear the internet. Laos's best-case scenario is becoming a low-cost outsourcing hub for Thailand or China—but even that requires infrastructure investment and education reform that won't happen. Laos will remain Southeast Asia's digital backwater.

**Bottom line:** Laos has no tech sector. Authoritarian communism, Chinese debt colonialism, and abysmal infrastructure ensure Laos stays offline. Brain drain is 100%. Don't expect Lao unicorns.`,
    issues: ['Slowest internet in Southeast Asia', 'No VC funding or startups', 'Communist censorship and surveillance', 'Chinese debt trap 60% of GDP', 'Total brain drain', 'Abysmal tech education']
  },
  {
    name: 'Latvia',
    lat: 56.8796,
    lng: 24.6032,
    summary: `Latvia's tech sector in November 2025 is the Baltics' underdog success—overshadowed by Estonia's e-residency hype but quietly building a solid startup ecosystem. Internet penetration is 91% (1.8 million users), fiber-to-home is ubiquitous (Latvia has Europe's 4th-fastest average speeds at 180 Mbps), and 5G is rolling out. Latvia's startup scene is concentrated in Riga: 400+ startups, €150 million in annual VC funding, and exits like Printful (print-on-demand, valued $1B+ in 2021 secondary sale) and Giraffe360 (real estate tech). Latvia's strengths are fintech and deep tech—companies like Mintos (P2P lending, €500M+ transactions), Nordigen (open banking, acquired by GoCardless 2022), and Aerones (wind turbine robots). But Latvia's tech ecosystem is fragile: population decline (1.9 million in 2025, down from 2.7M in 1989), brain drain to Western Europe, and small domestic market limit scale.

Latvia's government is pro-tech but under-resourced. The Ministry of Economics runs startup incubators and R&D grants (€50 million annually), but funding is a fraction of Estonia's. Latvia's "Smart Specialization Strategy" targets biotech, photonics, and IT, but implementation is patchy. E-government is decent—Latvia's e-signature system and online tax filing work—but Latvia lags Estonia's digital ambition. Latvia joined the EU's Digital Single Market initiatives and implemented GDPR, but data privacy enforcement is weak. Cybersecurity is improving post-2024 ransomware attacks on Latvian hospitals and government agencies—Latvia's CERT.LV (Computer Emergency Response Team) is competent but understaffed.

Latvia's tech talent is strong but shrinking. Riga Technical University and University of Latvia produce quality CS grads, but 30% emigrate to Germany, Sweden, UK, or remote-work for US companies. Salaries for Latvian devs (€1,500-2,500/month) can't compete with Western Europe (€4,000-6,000) or US remote gigs ($80-120k/year). Latvia's Russian-speaking minority (25% of population) is well-represented in tech, but geopolitical tensions post-Russia's Ukraine invasion (2022-ongoing) create social friction. Latvia restricted Russian-language education in 2023, angering the Russian community. Women are underrepresented in Latvian tech (22% of developers).

Latvia's fintech reputation is tarnished by money-laundering scandals. ABLV Bank collapsed in 2018 after US Treasury accused it of laundering Russian and North Korean money—€3.8 billion in suspicious transactions. Latvia's Financial Intelligence Unit cracked down, shuttering 10+ banks, but the damage to Latvia's fintech credibility lingers. Latvia's crypto scene is active—10% of Latvians own crypto—but regulation is unclear. Latvia's payment gateway Paysera is popular in Baltics.

Latvia's tech challenges are demographic and geographic. Population decline (Latvia loses 10,000 people annually to emigration and low birthrate) shrinks the talent pool and domestic market. Latvia's NATO membership and proximity to Russia create geopolitical risk—cyberattacks from Russian state actors are constant. Latvia's economy is small (€40 billion GDP), making it hard to fund large startups. Latvian founders often relocate HQs to London or Delaware while keeping R&D in Riga.

Latvia's tech future is as a nearshore tech hub for Western Europe. Cheaper than Berlin or Stockholm, safer than Ukraine, and more affordable than Estonia, Latvia can attract remote workers and outsourcing. But Latvia must fix brain drain, improve salaries, and rebuild fintech reputation. Latvia's tech sector is solid but will remain tier-2 unless bold reforms happen.

**Bottom line:** Latvia is the Baltics' forgotten tech hub—solid infrastructure, quality talent, but crippled by brain drain, money-laundering legacy, and population collapse. A good place to build a startup, but not to scale it.`,
    issues: ['Population decline to 1.9M', '30% of CS grads emigrate', 'ABLV Bank money-laundering scandal', 'Small domestic market', 'Russian cyberattack threats', 'Brain drain to Western Europe']
  },
  {
    name: 'Lebanon',
    lat: 33.8547,
    lng: 35.8623,
    summary: `Lebanon's tech sector in November 2025 is a miracle of resilience amid collapse—a country with no electricity, hyperinflation, and banking crisis, yet Beirut's developers code by generator light and export services globally. Internet penetration is 83% (5.6 million users), but Lebanon's internet is among the slowest and most expensive in the world: average speeds of 8 Mbps, costing $50/month (25% of median income). Lebanon's electricity grid collapsed in 2021—state power is 2-3 hours daily, forcing businesses to rely on private generators ($200-500/month diesel costs). Beirut's tech scene is a diaspora-in-waiting: 700+ startups, most in fintech, e-commerce, and services, but 60% of founders are planning exit strategies—emigration to UAE, France, Canada, or remote work for Western companies. Lebanon's brain drain is catastrophic: 250,000 Lebanese emigrated from 2019-2024, including doctors, engineers, and developers.

Lebanon's startup ecosystem survives on diaspora funding and remote work arbitrage. Lebanese devs earn $2,000-4,000/month remote for European/US companies (10x local salaries), enabling them to survive hyperinflation (lira lost 98% of value since 2019). Success stories include Myki (password manager, acquired by JumpCloud 2020), Tribe (social media moderation), and Instabug (developer tools). But exits are rare, and VC funding collapsed from $60M in 2020 to $10M in 2025—investors fled Lebanon's instability. Lebanon's banking sector, once the region's most sophisticated, is frozen—depositors can't access USD accounts ("capital controls"), and banks don't process international transfers. Lebanon's central bank (Banque du Liban) is bankrupt, and the lira is worthless. Crypto adoption surged—30% of Lebanese hold Bitcoin or USDT to preserve wealth and receive remittances.

The Lebanese government's tech policy is nonexistent—the state barely functions. Lebanon had no president from October 2022 to July 2024 (political deadlock), and Parliament can't pass laws. Telecom infrastructure is state-owned (Ogero monopoly) and decrepit—fiber rollout stalled, 4G is patchy, and 5G is a fantasy. Lebanon's Ministry of Telecommunications is corrupt—officials siphon funds, and contracts go to cronies. Cybersecurity is a joke—Lebanon has no cyber defense, and ransomware attacks on Lebanese institutions go unpunished. Data privacy laws don't exist—Lebanese ISPs monitor traffic, and political parties surveil opponents.

Lebanon's tech talent is exceptional but fleeing. American University of Beirut (AUB) and Lebanese American University (LAU) produce world-class engineers, but 70% emigrate. Lebanon's multilingual advantage (Arabic, French, English) makes Lebanese devs attractive globally. Lebanon's diaspora is 15 million (vs. 5M in Lebanon), and diaspora funding keeps startups afloat. Women are well-represented in Lebanon's tech scene (35% of developers), and Lebanon's startup culture is pragmatic—founders focus on cash flow, not VC hype.

Lebanon's tech future is purely diaspora-driven. Lebanon's physical infrastructure is collapsing—bridges crack, ports explode (Beirut port explosion, 2020), and water is scarce. But Lebanon's digital infrastructure (subsidized by donors, World Bank, diaspora) persists. Lebanon will become a "remote work nation"—talent stays physically (those who can't afford to leave) but works globally. Lebanon's tech success stories will be founded in Beirut, incorporated in Delaware, and scaled in Dubai. Lebanon's tragedy is that its people are brilliant but its state is criminally incompetent.

**Bottom line:** Lebanon's tech sector is a testament to human resilience—coding by generator light amid collapse. But this isn't sustainable. Brain drain is total, the state has failed, and Lebanon's tech future is entirely diaspora-based.`,
    issues: ['250,000 emigrated since 2019', 'Electricity 2-3 hours daily', 'Banking system frozen', 'Hyperinflation 98% currency collapse', 'Slowest internet in Middle East', '70% of grads emigrate']
  },
  {
    name: 'Libya',
    lat: 26.3351,
    lng: 17.2283,
    summary: `Libya's tech sector in November 2025 is a war zone—literally. A country split between rival governments (Tripoli's Government of National Unity vs. Tobruk's House of Representatives), oil-funded militias, and foreign interference (Turkey, UAE, Russia, Egypt), Libya's tech ecosystem is nonexistent. Internet penetration is 48% (3.3 million users, down from 4M pre-2011 revolution), concentrated in Tripoli, Benghazi, and Misrata. Libya's internet infrastructure is war-damaged: undersea fiber cables (SEA-ME-WE 4) are functional but aging, and domestic fiber networks are shelled periodically. 3G/4G coverage is patchy (Libya Telecom & Technology, Libyana, Almadar operate, but outages during fighting are common). Libya's internet is censored—both rival governments block websites, monitor traffic, and arrest critics. VPNs are common but risky.

Libya's startup ecosystem is a fantasy. Tripoli and Benghazi have fewer than 30 "startups," mostly e-commerce or delivery apps that barely function. There is no VC funding, no accelerators, and no exits. Libya's economy is 90% oil-dependent—when oil prices are high ($85/barrel Brent in 2025), militias fight over revenue; when low, infrastructure collapses. Libya's National Oil Corporation (NOC) is the only functional institution, but even it faces militia extortion and foreign meddling. Libya has zero unicorns, zero tech talent pipeline, and zero prospect of either. The few Libyan techies work remotely for Gulf or European companies or emigrated (Egypt, Tunisia, UAE, Europe).

The Libyan government's tech policy is nonexistent—Libya has TWO governments, neither functional. Tripoli's GNU runs a Ministry of Communications, but it's a patronage mill. Benghazi's HOR has no tech strategy beyond oil extraction. E-government is a joke—Libyan government websites haven't been updated since 2015, and citizens must bribe officials for basic services. Libya banned cryptocurrency in 2023 (Libyan Central Bank fears capital flight), but crypto usage is widespread—Libyans use Bitcoin and USDT to preserve wealth amid dinar collapse. Cybersecurity is nonexistent—Libya's government and corporate networks are hacked routinely by foreign intelligence (UAE, Egypt, Turkey spy on rivals).

Libya's tech education collapsed post-2011. University of Tripoli and Benghazi University have CS departments, but buildings are damaged, professors fled, and curriculum is outdated. Brain drain is total—any Libyan with tech skills leaves. Salaries for developers (those who stay) are $300-500/month, paid irregularly due to banking chaos. Women in tech are invisible—Libya's conservative society, militia rule, and insecurity make female participation in tech near zero.

Libya's digital infrastructure is a ruin. Electricity is sporadic (6-10 hours daily in Tripoli, worse in rural areas), and diesel shortages cause blackouts. Libya's telecom infrastructure is militarized—rival factions control towers and fiber, using them for surveillance and revenue. Libya's oil wealth ($60 billion in foreign reserves) could rebuild infrastructure, but corruption and conflict divert funds. Foreign tech companies avoid Libya—too risky, too unstable.

Libya's tech future is nonexistent until political settlement. Libya's civil war (2014-2020) ended in stalemate, and 2025 elections are postponed indefinitely. Militias won't disarm, foreign backers won't leave, and oil revenue sustains the conflict. Libya could be North Africa's tech hub—educated population, oil money, Mediterranean location—but instead, it's a failed state. Libya's tech tragedy is that pre-2011, Gaddafi's regime (however brutal) invested in telecoms and education; post-2011 "freedom" brought chaos.

**Bottom line:** Libya has no tech sector. Civil war, rival governments, and militia rule make tech entrepreneurship impossible. Libya's techies emigrate. Oil is Libya's only business. Don't expect Libyan unicorns—expect more war.`,
    issues: ['Two rival governments', 'Civil war infrastructure destruction', 'Internet outages during fighting', 'Total brain drain', 'No VC funding or startups', 'Electricity 6-10 hours daily']
  },
  {
    name: 'Lithuania',
    lat: 55.1694,
    lng: 23.8813,
    summary: `Lithuania's tech sector in November 2025 is the Baltics' fintech powerhouse—aggressive, ambitious, and unafraid to poach business from London and Frankfurt. Internet penetration is 89% (2.5 million users), fiber-to-home is widespread (average speeds 170 Mbps), and 5G rollout by Telia, Tele2, and Bite is near-complete. Lithuania's startup ecosystem is concentrated in Vilnius: 600+ startups, €200 million in annual VC funding, and unicorns Vinted (secondhand marketplace, €4.5B valuation 2024) and Nord Security (NordVPN, €1.3B valuation 2023). Lithuania's niche is fintech—post-Brexit, Lithuania licensed 260+ fintech companies (Revolut's banking license is Lithuanian, TransferWise/Wise has a Lithuanian license), making Vilnius Europe's fintech licensing hub. Bank of Lithuania's regulatory sandbox is business-friendly (critics say too friendly—money laundering risks), attracting fintechs fleeing UK's stricter FCA.

Lithuania's government is aggressively pro-tech. The Ministry of Economy runs "Startup Lithuania," an accelerator and visa program for foreign founders. Lithuania's e-government is advanced (behind Estonia but ahead of Latvia): e-signature, digital ID, online tax filing, and business registration in 2 hours. Lithuania's "Innovation Agenda 2025" prioritizes AI, cybersecurity, and biotech, with €300M in EU funding. Lithuania's President Gitanas Nausėda (elected 2019, re-elected 2024) champions tech exports. Lithuania's tech policy is geopolitical—post-Russia's Ukraine invasion, Lithuania positioned itself as the "anti-Russia" tech hub, attracting Ukrainian and Russian diaspora talent fleeing Putin's regime.

Lithuania's tech talent is strong. Vilnius University, Kaunas University of Technology, and ISM produce 3,000 CS grads annually. But brain drain is a problem—20-25% emigrate to Germany, UK, or remote-work for US companies. Salaries for Lithuanian devs (€2,000-3,500/month) lag Western Europe (€4,500-7,000) but beat Poland and Romania. Lithuania's tech workforce is young (median age 29) and multilingual (English, Russian, German). Women are underrepresented (25% of developers) but improving—Lithuania has active women-in-tech programs (Women Go Tech, TechLadies).

Lithuania's fintech boom has a dark side: money laundering. Lithuania shut down 20+ payment institutions from 2020-2023 for compliance failures (Wirecard scandal, Russian sanctions evasion). Bank of Lithuania tightened rules in 2024, but critics say damage is done—Lithuania's fintech reputation is "Cayman Islands of Europe." Lithuania's crypto scene is large—15% of Lithuanians own crypto—and regulation is unclear. Lithuania's gaming industry is underrated—Nordcurrent (mobile games, Cooking Fever), Wargaming (World of Tanks, Belarusian-founded but relocated to Vilnius 2022 after Belarus-Russia war alliance).

Lithuania's cybersecurity is NATO-grade. Lithuania hosts NATO's Cyber Security Center of Excellence and faces constant Russian cyberattacks—DDoS attacks on government, media, and infrastructure are weekly occurrences. Lithuania's National Cyber Security Centre (NKSC) is well-funded and competent. Lithuania's geopolitical risk is existential—Russian Kaliningrad exclave borders Lithuania, and Russia's Suwalki Gap threats (cutting Baltic states from Poland) loom. Lithuania's tech sector depends on NATO and EU security guarantees.

Lithuania's tech future is bright if geopolitics stay stable. Vinted's success proves Lithuanian startups can scale globally. Lithuania's fintech hub status will grow as London fades post-Brexit. But Lithuania must fix money-laundering reputation, slow brain drain, and pray Russia doesn't invade. Lithuania's tech sector is a bet on Western security architecture holding.

**Bottom line:** Lithuania is the Baltics' fintech tiger—Vinted unicorn, NordVPN giant, and Europe's fintech licensing hub. But money-laundering scandals and Russian threat shadow success. High risk, high reward.`,
    issues: ['Money-laundering scandals tarnish fintech reputation', '260+ fintech licenses post-Brexit', '20-25% of CS grads emigrate', 'Russian cyberattacks weekly', 'Geopolitical risk from Kaliningrad', 'Vinted unicorn success story']
  }
]

async function main() {
  console.log('='.repeat(60))
  console.log('TECHNOLOGY WRITEUPS - BATCH 5/10')
  console.log('='.repeat(60))
  console.log(`Countries: ${BATCH5_WRITEUPS.map(w => w.name).join(', ')}`)
  console.log(`Total: ${BATCH5_WRITEUPS.length} countries\n`)

  let success = 0
  let failed = 0

  for (const entry of BATCH5_WRITEUPS) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: entry.name,
            type: 'country',
            category: 'technology'
          }
        },
        update: {
          summary: entry.summary,
          issues: JSON.stringify(entry.issues),
          topStories: JSON.stringify([]),
          lat: entry.lat,
          lng: entry.lng,
          country: entry.name,
          updatedAt: new Date()
        },
        create: {
          name: entry.name,
          type: 'country',
          category: 'technology',
          summary: entry.summary,
          issues: JSON.stringify(entry.issues),
          topStories: JSON.stringify([]),
          lat: entry.lat,
          lng: entry.lng,
          country: entry.name,
          storyCount: 0
        }
      })
      console.log(`✓ ${entry.name}`)
      success++
    } catch (error) {
      console.error(`✗ ${entry.name}:`, error)
      failed++
    }
  }

  console.log('\n' + '='.repeat(60))
  console.log(`✓ Success: ${success}`)
  console.log(`✗ Failed: ${failed}`)
  console.log(`Total: ${BATCH5_WRITEUPS.length}`)
  console.log('='.repeat(60))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
