// TECHNOLOGY - Countries B through K (Botswana through Kuwait)
// Part 2 of remaining technology writeups
// Style: Ben Thompson (Stratechery) / Kara Swisher

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const WRITEUPS = [
  {
    name: 'Botswana',
    lat: -22.3285,
    lng: 24.6849,
    summary: `Botswana's tech sector in November 2025 is Southern Africa's best-governed but smallest—this diamond-rich nation (2.6 million people) has stability, democracy, and investment, but the market is too tiny to scale startups. Internet penetration is 72% (1.9 million users), with 4G LTE covering Gaborone, Francistown, and major towns. The three telecoms (Mascom, Orange Botswana, BTC) compete on price, and data costs dropped to $3/GB in 2024. Fiber is expanding in cities, and 5G pilot launched in Gaborone in late 2024. Botswana's government invests in digital infrastructure: the Botswana Fibre Networks (BoFiNet) laid 7,000km of fiber from 2010-2023, connecting schools, hospitals, and government offices.

The startup scene is microscopic: no unicorns, minimal VC. The few tech companies (iBotswana, local e-commerce; Selibeng, agtech) operate in niches. Botswana's developers work remotely for South African, European, or U.S. companies, earning foreign currency. The government's Startup Botswana initiative provides grants and mentorship, but the ecosystem lacks capital and market scale. Mobile money adoption is 45%: Orange Money and Mascom MyZaka processed $1.8 billion in 2024, bringing financial inclusion to rural areas. E-government is excellent for Africa: Botswana's e-government portal allows tax filing, business registration, and access to services online. The government digitized 80% of services by 2024.

Internet freedom is among Africa's best: no censorship, strong free speech protections, and independent media. Botswana ranks top 5 in Africa for press freedom and digital rights. Cryptocurrency adoption is low but legal—the central bank doesn't regulate crypto, so trading is allowed by default. Botswana's challenge is brain drain: educated youth emigrate to South Africa, UK, or the U.S. The population is stable at 2.6 million, and the domestic market can't support large tech companies. Botswana's stability and governance are assets, but geography and population doom the sector to remain small. The country is a case study in how good governance can't overcome market size.

**Bottom line:** Botswana is Africa's best-governed tech minnow—stable, democratic, and investing in digital infrastructure, but too small to matter globally.`,
    issues: ['72% internet, 4G nationwide coverage', 'Startup Botswana grants, minimal VC', 'Mobile money $1.8B, 45% adoption', 'Top 5 in Africa for internet freedom', 'Brain drain to South Africa/UK', 'Market too small for scale']
  },
  {
    name: 'Brazil',
    lat: -14.2350,
    lng: -51.9253,
    summary: `Brazil's tech sector in November 2025 is Latin America's heavyweight—with 215 million people, a $2 trillion economy, and São Paulo's thriving startup scene, Brazil is the region's only true tech power. But political chaos, inequality, and infrastructure deficits prevent it from challenging Asia or the West. Internet penetration is 84% (181 million users), with 4G covering 95% of urban areas and 5G expanding in São Paulo, Rio, and Brasília. Brazil's telecoms (Vivo, Claro, TIM, Oi) compete fiercely, and data costs dropped to $2/GB. But the digital divide is stark: São Paulo and Rio have world-class connectivity, while the Amazon and Northeast remain offline or stuck on 3G.

Brazil's startup ecosystem is the region's largest: Nubank (neobank valued at $45 billion, 100 million customers) is Latin America's most valuable tech company and a global fintech leader. Other unicorns include Mercado Livre (e-commerce/payments, $95B market cap, also operates in Argentina), iFood (food delivery, valued at $6B), QuintoAndar (proptech), and Gympass (corporate wellness). Brazil has 30+ unicorns, more than the rest of Latin America combined. The ecosystem is funded by global VCs (SoftBank, Tiger Global, Sequoia) and local firms (Kaszek, Monashees). São Paulo is the hub—3,000+ startups, 150,000 tech workers, and a culture of entrepreneurship.

But Brazil's dysfunction is a drag: President Lula's third term (elected 2022) brought political stability after Bolsonaro's chaos, but economic growth is sluggish (2% annually), and the currency (real) is volatile. Corruption scandals are cyclical, and bureaucracy strangles innovation—it takes 80 days to start a business in Brazil, versus 5 in Estonia. The Supreme Court's regulation of social media is aggressive: Justice Alexandre de Moraes banned Twitter/X for 39 days in 2024 (dispute with Elon Musk over misinformation and disinformation orders), and platforms face heavy fines for non-compliance. This creates legal uncertainty. Cryptocurrency adoption is high: Brazil has 25 million crypto users (Chainalysis 2024), and the central bank approved Bitcoin ETFs in 2024. But regulation is tightening—Lula's government wants to tax crypto gains.

Cybersecurity is weak: ransomware attacks on Brazilian businesses and governments tripled in 2024, and data breaches are common. The LGPD (Brazil's GDPR equivalent, enacted 2020) is enforced, but compliance is patchy. Brazil's tech workforce is massive (500,000+ developers) but unevenly distributed—São Paulo has talent saturation, the Northeast has shortages. Remote work is booming: Brazilian developers work for U.S. companies at 40% of Silicon Valley salaries.

**Bottom line:** Brazil is Latin America's tech giant with Nubank and Mercado Livre leading the way, but corruption, inequality, and Supreme Court overreach limit the ceiling. It's a middle-income tech trap.`,
    issues: ['84% internet, 181M users', 'Nubank $45B fintech giant, 100M customers', 'Supreme Court banned Twitter/X for 39 days', '25M crypto users, Bitcoin ETFs approved', 'LGPD data protection enforcement', '80 days to start a business vs 5 in Estonia']
  },
  {
    name: 'Bulgaria',
    lat: 42.7339,
    lng: 25.4858,
    summary: `Bulgaria's tech sector in November 2025 is Eastern Europe's underdog success—low costs, EU membership, and a skilled workforce make Sofia a magnet for outsourcing and startups, but brain drain threatens the boom. Internet penetration is 78% (5.4 million users), with fiber covering 65% of homes (among Europe's highest fiber penetration rates). Bulgaria's broadband is fast (average 90 Mbps) and cheap ($15/month for fiber), making it attractive for remote workers and digital nomads. 5G launched in Sofia and Plovdiv in 2023. Bulgaria's IT sector employs 150,000+ people (8% of the workforce) and generates $5 billion annually—outsourcing for Western Europe and the U.S. dominates.

The startup scene is small but growing: Payhawk (spend management unicorn valued at $1B), Telerik (sold to Progress Software for $262M in 2014), and Chaos Group (3D rendering software) are Bulgarian success stories. Sofia hosts 500+ startups, and the government's Innovation Strategy 2021-2027 offers tax breaks and R&D grants. But venture capital is scarce—startups raise seed rounds in Sofia but Series A+ requires London or Silicon Valley. The domestic market (6.5 million people, declining population) is too small.

Cryptocurrency adoption is high: Bulgaria is a crypto haven—the government seized 213,000 Bitcoin in 2017 (from a criminal network), making it one of the world's largest state holders of BTC. Crypto trading is legal and lightly regulated, and Sofia has a thriving crypto scene. E-government is improving: Bulgaria's e-services portal allows tax filing, business registration, and social security access, but bureaucracy and corruption remain obstacles. Internet freedom is moderate: no systematic censorship, but media is politically controlled, and investigative journalists face pressure.

Brain drain is catastrophic: 1 million+ Bulgarians (15% of the population) emigrated from 1990-2024, mostly to Germany, UK, and Spain. The tech sector loses 5,000+ workers annually to higher-paying Western European jobs. Remote work offsets this—Bulgarian developers earn Western salaries while living cheaply in Sofia, Plovdiv, or Varna. Cybersecurity is weak: Bulgaria faces persistent ransomware attacks, and the 2019 breach of the National Revenue Agency (exposed data of 5 million citizens) was one of Europe's worst.

**Bottom line:** Bulgaria is Eastern Europe's low-cost tech hub with fast, cheap internet and a skilled workforce, but brain drain and corruption cap growth. It's the region's best outsourcing destination, not a startup powerhouse.`,
    issues: ['78% internet, 90 Mbps fiber at $15/month', 'Payhawk unicorn at $1B valuation', 'Government holds 213K seized Bitcoin', '1M+ emigrated, 15% of population', 'Tech sector loses 5K workers annually', '2019 tax agency breach exposed 5M citizens']
  },
  {
    name: 'Burkina Faso',
    lat: 12.2383,
    lng: -1.5616,
    summary: `Burkina Faso's tech sector in November 2025 is a war casualty—jihadist insurgencies, military coups (2022, 2023), and collapsing governance have obliterated what little digital infrastructure existed. Internet penetration is 24% (5.2 million users out of 22 million), concentrated in Ouagadougou; rural areas are offline and under militant control. The three telecoms (Orange Burkina, Telecel Faso, Moov Africa) provide 3G and patchy 4G in the capital, but service is disrupted by attacks on cell towers. Data costs $5/GB, prohibitively expensive for a country where 40% live on under $2/day.

The government's Burkina Numérique 2025 plan (launched before the coups) aimed to expand fiber and digitize services, but it's abandoned. The ruling military junta (led by Captain Ibrahim Traoré) prioritizes security over tech. Electricity is available only 6-8 hours daily in Ouagadougou, less elsewhere, making internet cafes and businesses reliant on generators. Mobile money is the only functional piece of tech infrastructure: Orange Money and Moov Money processed $4 billion in 2024, serving as the primary financial system for millions. 55% of adults use mobile money—higher than bank account ownership (25%).

The startup scene is dead: Ouagadougou once had small tech hubs (Jokkolabs, Yam Pukri), but insecurity and emigration gutted them. Founders fled to Senegal, Côte d'Ivoire, or France. Internet censorship is rising: the junta shut down the internet during the 2023 coup and blocks news sites critical of the military. Social media (Facebook, WhatsApp) is monitored, and activists are arrested. VPN usage is common but risky. Cryptocurrency adoption is minimal—most Burkinabé don't have smartphones or internet access, and crypto is irrelevant in a cash economy. The junta banned French media and expelled French troops, aligning with Russia (Wagner Group operates in-country), but this hasn't brought tech investment—it's brought more instability.

Burkina Faso's tech future is non-existent unless the jihadist insurgency is defeated and democracy is restored. The country is bleeding talent: thousands of educated Burkinabé fled to neighboring countries or France. What little infrastructure existed is crumbling.

**Bottom line:** Burkina Faso's tech sector is a casualty of coups, jihadism, and collapse. Mobile money survives; everything else is dying.`,
    issues: ['24% internet, mostly Ouagadougou', 'Daily 6-8 hour power outages in capital', 'Mobile money $4B, 55% adoption', 'Internet shutdowns during 2023 coup', 'Startup ecosystem fled to Senegal/Côte d\'Ivoire', 'Wagner Group operates, French expelled']
  },
  {
    name: 'Cambodia',
    lat: 12.5657,
    lng: 104.9910,
    summary: `Cambodia's tech sector in November 2025 is Southeast Asia's authoritarian outlier—Hun Manet (Prime Minister since 2023, son of long-time ruler Hun Sen) continues his father's playbook: Chinese investment, digital surveillance, and zero political freedom. Internet penetration is 71% (12 million users out of 17 million), driven by mobile. The five telecoms (Cellcard, Smart Axiata, Metfone, Seatel, CamGSM) provide 4G LTE covering 95% of the population. Data is cheap ($2/GB), and speeds average 25 Mbps. Cambodia's digital infrastructure improved dramatically from 2015-2025, funded almost entirely by China—Huawei built the 4G network, and Chinese firms laid fiber. This gives Beijing surveillance access.

The startup scene is tiny: no unicorns, minimal local VC. Cambodia's tech ecosystem is dominated by regional players—Grab (ride-hailing), Foodpanda (delivery), and ABA Bank (Cambodia's largest bank, mobile-first) lead digital services. Wing (mobile money, 50% owned by Malaysia's CIMB) is Cambodia's success story: 14 million users (more than bank accounts), processing $30 billion in 2024. Wing brought financial inclusion to millions, and Cambodia is Southeast Asia's most cashless society after Singapore. But this also means the government and Chinese investors can track all transactions.

The government's National Digital Economy Framework 2023-2035 aims for a $15 billion digital economy, but implementation is opaque. Cambodia's tech policy is extractive: the government wants revenue (taxing digital services, crypto) but doesn't foster innovation. The 2021 National Internet Gateway (NIG) law mandates all internet traffic route through government-controlled servers, enabling total surveillance. ISPs must block blacklisted sites, and VPN usage is illegal (though common). Cybersecurity laws criminalize online dissent—dozens jailed for Facebook posts in 2024.

Cryptocurrency was booming (Cambodia's Bakong digital currency launched 2020, and crypto adoption was high), but the 2024 crackdown on unlicensed exchanges cooled the sector. The government tolerates crypto for payments but monitors everything. Chinese online gambling companies operated from Cambodia from 2016-2023, employing 100,000+ workers (many trafficked), but the government banned online gambling in 2023 after U.S. pressure. This gutted a chunk of the "tech" economy. Cambodia's youth are digitally savvy but politically silent—criticizing Hun Manet online means prison.

**Bottom line:** Cambodia has good digital infrastructure built and surveilled by China. The tech sector serves the regime and foreign investors, not Cambodians.`,
    issues: ['71% internet, China built infrastructure', 'Wing mobile money 14M users, $30B processed', 'National Internet Gateway enables total surveillance', 'VPN usage illegal, dissidents jailed', 'Bakong digital currency launched 2020', 'Online gambling banned 2023, gutted sector']
  },
  {
    name: 'Cameroon',
    lat: 7.3697,
    lng: 12.3547,
    summary: `Cameroon's tech sector in November 2025 is Central Africa's most promising but politically strangled—President Paul Biya (41 years in power, age 91 in 2024) runs a gerontocracy that fears innovation and youth. Internet penetration is 45% (12 million users out of 27 million), concentrated in Yaoundé and Douala. The three telecoms (MTN Cameroon, Orange Cameroon, Nexttel) provide 3G and expanding 4G, but data costs $4/GB and speeds average 12 Mbps. Rural areas and the Anglophone regions (in civil war since 2017) are digital deserts.

The startup scene is Africa's hidden gem: Cameroon has a tech-savvy diaspora and homegrown talent. Arthur Zang's Cardiopad (portable heart monitor) and Gifted Mom (maternal health app) are Cameroonian innovations with regional impact. Yaoundé and Douala host small tech hubs (ActivSpaces, Silicon Mountain in Buea), but the Anglophone crisis gutted the Buea ecosystem—startups fled to Francophone regions or abroad. Mobile money adoption is 40%: MTN Mobile Money and Orange Money processed $11 billion in 2024, bringing financial inclusion to millions who never had bank accounts.

The government's Plan Stratégique Cameroun Numérique 2020 aimed to digitize services and expand fiber, but implementation is glacial. Corruption and bureaucracy mean contracts go to Biya-connected firms that don't deliver. E-government portals exist but barely function. Internet censorship is aggressive: the government shut down the internet in Anglophone regions for 93 days in 2017 (longest shutdown in African history) and blocks social media during protests. VPN usage is common. The Cybersecurity and Cybercrime Law (2010) criminalizes online dissent, and journalists are jailed for Facebook posts.

Cryptocurrency adoption is low but growing: Cameroon's youth use Bitcoin and USDT for cross-border payments and to evade the CFA franc (controlled by France and the regional central bank BEAC). The central bank banned crypto in 2018, but enforcement is weak, and peer-to-peer trading thrives. Cameroon's tech diaspora is massive: thousands of engineers emigrated to France, Canada, and the U.S. Brain drain is the defining trend—Cameroon produces talent but can't retain it. The Anglophone crisis, authoritarianism, and corruption strangle the sector.

**Bottom line:** Cameroon has talent and potential, but Biya's gerontocracy, the Anglophone war, and internet shutdowns doom the sector. Mobile money is the only success.`,
    issues: ['45% internet, Anglophone regions in crisis', '93-day internet shutdown in 2017, longest in Africa', 'MTN/Orange mobile money $11B, 40% adoption', 'Cybercrime Law jails online critics', 'Central bank banned crypto 2018', 'Brain drain to France/Canada/US']
  },
  {
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    summary: `Canada's tech sector in November 2025 is a paradox—world-class research, top-tier talent, and a thriving ecosystem, but startups scale in the U.S., and the government's regulatory overreach threatens innovation. Internet penetration is 97% (38 million users), with fiber and 5G covering all major cities. But Canada's telecoms (Bell, Rogers, Telus) operate as an oligopoly, charging among the world's highest prices: $80/month for mobile plans, $100/month for home internet. The CRTC (telecom regulator) talks about competition but does little—Canadians pay 2-3x what Americans or Europeans pay for worse service. Rural and Indigenous communities are digital deserts—the government's Universal Broadband Fund ($1.75 billion) is rolling out slowly.

Canada's startup ecosystem is concentrated in Toronto, Vancouver, and Montreal: Shopify (e-commerce platform, $80B market cap at peak) is Canada's tech crown jewel. Other unicorns include Wealthsimple (fintech), Faire (wholesale marketplace), and Clio (legal tech). The country has 25+ unicorns, and the ecosystem is funded by Canadian VCs (OMERS Ventures, Georgian, BDC) and U.S. crossover funds. But the "brain drain 2.0" is real: Canadian startups raise Series A in Toronto, then relocate to San Francisco for Series B because U.S. capital, talent, and market access are unmatched. Shopify stayed Canadian (CEO Tobi Lütke is in Ottawa), but most don't.

Canada's AI sector is world-leading: Geoffrey Hinton (Godfather of AI), Yoshua Bengio, and the Vector Institute (Toronto) put Canada on the AI map. But the commercialization is happening in the U.S.—Canadian AI researchers get poached by OpenAI, Google, Microsoft, and Meta. The government's AI strategy ($443 million invested since 2017) funds research but loses talent. Cryptocurrency regulation is moderate: Canada approved Bitcoin ETFs in 2021 (first in the world), and crypto is legal and taxed as capital gains. But the 2022 Freedom Convoy protests saw the Trudeau government invoke emergency powers to freeze crypto wallets of protesters—this terrified the crypto community and damaged Canada's reputation.

The Online News Act (Bill C-18, 2023) forced Google and Facebook to pay news publishers, and Meta responded by blocking all news on Facebook/Instagram in Canada (still blocked in November 2025). The Online Streaming Act (Bill C-11, 2023) regulates social media content, and the Online Harms Act (proposed 2024) mandates platforms remove harmful content—this regulatory overreach worries Silicon Valley. Cybersecurity is a priority: Canada faces attacks from China, Russia, and Iran, and the Communications Security Establishment (CSE) leads defense.

**Bottom line:** Canada has great tech research and infrastructure but loses talent and companies to the U.S. Regulatory overreach (freezing crypto wallets, forcing Meta to block news) risks killing what it's trying to protect.`,
    issues: ['97% internet but oligopoly charges $80-100/month', 'Shopify $80B e-commerce giant', 'AI research world-class, talent poached by U.S.', 'Bitcoin ETFs first globally in 2021', 'Trudeau froze crypto wallets during Freedom Convoy', 'Meta blocked news after Bill C-18']
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    summary: `Chile's tech sector in November 2025 is Latin America's most stable but politically polarized—President Gabriel Boric's leftist government (elected 2021) is rewriting the economic model, and the tech sector is caught in the crossfire. Internet penetration is 87% (16.5 million users out of 19 million), with fiber covering 75% of urban areas and 4G/5G in Santiago, Valparaíso, and Concepción. Chile's broadband is the region's fastest (average 95 Mbps), and telecoms (Movistar, Entel, Claro, WOM) compete aggressively. Chile is Latin America's digital infrastructure leader.

The startup ecosystem is thriving: NotCo (plant-based food tech valued at $1.5B), Cornershop (grocery delivery acquired by Uber for $3B), and Betterfly (employee benefits unicorn) are Chilean unicorns. Santiago hosts 1,500+ startups, and Start-Up Chile (government accelerator launched 2010) has supported 2,500+ companies from 90 countries. Chile's VC ecosystem is the region's most mature (after Brazil), with local funds (Fen Ventures, Magma Partners) and foreign capital (SoftBank, Andreessen Horowitz). But the political winds shifted: Boric's government proposed higher taxes on tech companies and stricter labor laws, spooking investors. VC funding dropped 40% in 2023-2024.

Chile's 2022 constitutional referendum (rejecting a progressive constitution) created uncertainty, and a second referendum in 2023 (rejecting a conservative constitution) extended the chaos. The tech sector wants stability; politics delivers volatility. Cryptocurrency adoption is high: Chile has 3 million crypto users (Chainalysis 2024), and Bitcoin ATMs are common in Santiago. The central bank doesn't regulate crypto, treating it as a commodity. But left-wing politicians want to ban or heavily tax crypto, creating uncertainty. Internet freedom is excellent: Chile has strong free speech protections, no censorship, and independent media. The country ranks top 3 in Latin America for digital rights.

E-government is world-class: Chile's ChileAtiende portal digitized 95% of public services by 2024, including taxes, health records, and business registration. Digital IDs are universal. Cybersecurity is strong: Chile's CSIRT coordinates national defense, and the country faces fewer attacks than Brazil or Argentina. Chile's challenge is political: the tech sector thrived under center-right governments (2010-2021) that prioritized business-friendly policies. Boric's government wants social equity, which means regulation and taxes. The sector is adapting, but some startups are relocating to Miami or Mexico City.

**Bottom line:** Chile is Latin America's most stable tech hub with excellent infrastructure, but Boric's leftist government and political polarization create uncertainty. It's still the region's best bet after Brazil.`,
    issues: ['87% internet, 95 Mbps average speeds', 'NotCo and Cornershop unicorns', 'Start-Up Chile supported 2,500+ companies', 'VC funding dropped 40% under Boric', '3M crypto users, central bank doesn\'t regulate', 'Political polarization and tax uncertainty']
  },
  {
    name: 'China',
    lat: 35.8617,
    lng: 104.1954,
    summary: `China's tech sector in November 2025 is the world's second superpower—1.4 billion people, $18 trillion economy, and a digital ecosystem that rivals (and in some areas surpasses) the United States. Internet penetration is 77% (1.08 billion users), with 5G covering 95% of urban areas and expanding rural. China leads the world in 5G deployment (2.3 million base stations) and mobile payments (Alipay and WeChat Pay processed $85 trillion in 2024). The digital infrastructure is world-class, but it's a walled garden: the Great Firewall blocks Google, Facebook, Twitter, YouTube, and Western platforms. China's internet is a parallel universe.

The tech giants dominate: Alibaba (e-commerce, cloud, payments), Tencent (WeChat, gaming, social media), ByteDance (TikTok/Douyin), Baidu (search, AI), and Meituan (food delivery, services) are multi-hundred-billion-dollar companies. China has 170+ unicorns, second only to the U.S. But the Xi Jinping era (2012-present, extended indefinitely) brought "common prosperity" crackdowns: Alibaba fined $2.8B in 2021 for antitrust violations, Ant Group's $37B IPO blocked, tech billionaires disappeared (Jack Ma went silent for months), and gaming regulations crushed Tencent's revenue. Xi wants control, not innovation. The 2021-2023 tech crackdown erased $1.5 trillion in market value.

AI is the battleground: China's Baidu (Ernie Bot), DeepSeek, and iFlytek are developing frontier models, but U.S. export controls on Nvidia H100 GPUs crippled progress. China is racing to build domestic chip manufacturing (SMIC, Huawei's Kirin chips), but it's 3-5 years behind TSMC. The U.S.-China tech war is existential. Surveillance is total: China's Social Credit System, facial recognition (600 million cameras), and internet monitoring create an Orwellian state. Xinjiang's surveillance of Uyghurs is weaponized AI. There's zero internet freedom—VPNs are illegal (though millions use them), and dissent is crushed.

Cryptocurrency is banned: China outlawed crypto trading and mining in 2021, driving miners to the U.S. and Kazakhstan. But the central bank's digital yuan (e-CNY) is live in 25 cities, processing $250 billion in 2024. It's a tool for surveillance and control, not freedom. E-commerce is the world's largest: Alibaba's Taobao/Tmall, JD.com, and Pinduoduo dominate $2.8 trillion in annual sales. China's tech future is bifurcated: domestic dominance, global isolation. TikTok faces bans worldwide, Huawei is blacklisted, and U.S. allies are decoupling.

**Bottom line:** China is a tech superpower with 1 billion users and world-class infrastructure, but Xi's authoritarianism and the U.S. tech war are containment walls. Innovation is state-directed, not chaotic—efficient but unfree.`,
    issues: ['1.08B internet users, 77% penetration', 'Alipay/WeChat Pay $85T processed in 2024', 'Tech crackdown erased $1.5T market value', 'U.S. chip export controls cripple AI progress', 'Crypto banned, digital yuan $250B processed', '600M surveillance cameras, Social Credit System']
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: `Colombia's tech sector in November 2025 is Andean resilience—despite decades of conflict (FARC peace deal 2016), narco-violence, and inequality, Bogotá and Medellín are building vibrant startup ecosystems. Internet penetration is 73% (37 million users out of 51 million), with 4G covering 90% of urban areas and 5G launching in Bogotá and Medellín in 2024. Data costs dropped to $2/GB, making internet accessible. Colombia's digital infrastructure improved dramatically post-peace deal as investment flowed into previously conflict-ridden regions. But rural areas and the Pacific coast remain offline.

The startup ecosystem is Latin America's dark horse: Rappi (delivery super-app valued at $5.25B) is Colombia's unicorn, operating across Latin America. Other success stories include Habi (proptech), Frubana (B2B food marketplace), and Addi (buy-now-pay-later). Bogotá and Medellín host 2,000+ startups, and the government's iNNpulsa program provides grants and mentorship. Ruta N (Medellín's innovation hub) transformed the city from the world's murder capital (1990s) to a tech hub. But VC funding is uneven: Colombia raised $1.2 billion in 2021 (peak), then dropped 60% in 2023-2024 as global investors fled emerging markets.

President Gustavo Petro (elected 2022, Colombia's first leftist president) is a wildcard: his government wants to tax tech companies, regulate gig economy platforms (Uber, Rappi), and expand social programs. The tech sector fears regulation will strangle growth. Cryptocurrency adoption is very high: Colombia has 6 million crypto users (Chainalysis 2024), driven by remittances ($10 billion annually from diaspora) and currency volatility (the peso lost 25% against the dollar in 2023). Crypto is legal but unregulated—the government is drafting a framework.

Internet freedom is good but deteriorating: Colombia has independent media and no systematic censorship, but journalists covering narco-trafficking and corruption face assassination. Cybersecurity is weak: ransomware attacks on Colombian businesses and governments tripled in 2024, and narco-cartels use encrypted messaging and crypto. E-government is improving: Colombia's Carpeta Ciudadana portal digitized 70% of public services by 2024. Mobile money adoption is 35%: Nequi (Bancolombia's app) and Daviplata dominate, processing $22 billion in 2024.

**Bottom line:** Colombia is building a tech ecosystem from the ashes of conflict, but Petro's leftist government, narco-violence, and regulatory uncertainty create headwinds. Rappi and Medellín's transformation are the success stories.`,
    issues: ['73% internet, rural Pacific coast offline', 'Rappi delivery unicorn at $5.25B', 'VC funding dropped 60% in 2023-2024', '6M crypto users, remittances $10B annually', 'Petro government considering tech taxes', 'Journalists covering narcos assassinated']
  },
  {
    name: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    summary: `Costa Rica's tech sector in November 2025 is Central America's leader—stable democracy, educated workforce, and strategic position make San José a tech and business process outsourcing (BPO) hub. Internet penetration is 86% (4.4 million users out of 5.1 million), with fiber covering 65% of homes and 4G/5G in cities. The state-owned telecom ICE dominates (70% market share), competing with Movistar and Claro. Data costs $3/GB, and speeds average 50 Mbps. Costa Rica's infrastructure is Central America's best.

The tech sector is dominated by foreign investment: Intel operated a chip manufacturing plant in Costa Rica from 1998-2014 (closed for cost reasons), and multinationals (Hewlett Packard, Amazon, IBM, Cisco) run BPO and R&D centers employing 40,000+ people. Costa Rica's Free Trade Zone regime offers tax breaks (0% corporate tax for 8-12 years) for tech companies. The startup ecosystem is small: no unicorns, but local companies like Multiverse (gaming) and Cuéntica (accounting SaaS) are growing. Costa Rica's strength is services (BPO, call centers, tech support), not product startups. The domestic market (5 million) is too small to scale.

Cryptocurrency adoption is moderate: Costa Rica doesn't regulate crypto, so it's legal by default. Bitcoin is used for tourism (many hotels accept it) and cross-border payments. The central bank is exploring a digital colon (CBDC) but hasn't launched. E-government is excellent: Costa Rica's Digital Government strategy digitized 90% of public services by 2024, including taxes, health, and education. The country's Caja Costarricense de Seguro Social (CCSS) health system is fully digitized. Internet freedom is near-absolute: no censorship, strong free speech protections, and independent media. Costa Rica consistently ranks top 3 in Latin America for press freedom and digital rights.

Cybersecurity is moderate: Costa Rica faced a massive ransomware attack in 2022 (Conti group) that crippled government systems for months. The attack exposed weak cyber defenses, and the government has since invested in the National Cybersecurity Strategy. Costa Rica's challenge is economic: the country abolished its military in 1948 and invests in education and healthcare, but debt is rising (70% of GDP), and fiscal constraints limit tech investment. Brain drain is moderate—educated Costa Ricans emigrate to the U.S., but remote work allows many to stay.

**Bottom line:** Costa Rica is Central America's tech leader with excellent infrastructure and stability, but the ecosystem is BPO-dominated, not startup-driven. It's a safe, boring tech hub—which is valuable in volatile Central America.`,
    issues: ['86% internet, fiber covers 65% of homes', 'Intel, Amazon, HP BPO centers employ 40K+', 'Free Trade Zones offer 0% corporate tax', '2022 Conti ransomware crippled government', 'No unicorns, BPO-driven not startup-driven', 'Top 3 in Latin America for digital rights']
  },
  {
    name: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    summary: `Croatia's tech sector in November 2025 is the Adriatic's digital surprise—this EU member (joined 2013, adopted euro 2023) of 3.9 million is punching above its weight in gaming, cybersecurity, and remote work. Internet penetration is 83% (3.2 million users), with fiber covering 60% of homes and 5G in Zagreb, Split, and Dubrovnik. Croatia's broadband is fast (average 80 Mbps) and affordable ($25/month). The country's tourism-driven economy (20 million visitors annually) pushed digital payments and internet infrastructure.

The startup ecosystem is small but scrappy: Infobip (communications platform valued at $2B+), Rimac Automobili (electric hypercar maker, not pure tech but tech-heavy), and Photomath (math education app acquired by Google in 2024 for undisclosed sum) are Croatian success stories. Zagreb and Split host 300+ startups, and the government's Start-Up Croatia initiative offers grants and tax breaks. But venture capital is scarce—startups raise seed rounds locally, then go to London or Berlin for growth capital. The domestic market (3.9 million) is too small. Croatia's gaming industry is thriving: Croteam (Serious Sam), Nanobit (mobile games), and dozens of indie studios employ 3,000+ developers. Gaming is Croatia's tech niche.

Cryptocurrency adoption is moderate: Croatia doesn't have specific crypto regulations (it's legal by default), and Bitcoin ATMs are common in tourist areas. The European Union's MiCA regulation (Markets in Crypto-Assets, enforced 2024) now applies, bringing regulatory clarity. E-government is excellent: Croatia's e-Citizens portal digitized 95% of public services by 2024, including taxes, health records, and business registration. Digital IDs are mandatory for EU citizens. Internet freedom is strong: no censorship, independent media, and strong GDPR enforcement.

Cybersecurity is improving: Croatia's National Cyber Security Centre (NCSC) coordinates defense, and the country faces attacks from Russia and cybercriminal gangs. Croatia's challenge is depopulation: the country lost 400,000 people (10%) from 1991-2024 due to war, economic emigration, and low birth rates. The tech sector loses talent to Germany, Austria, and Ireland. Remote work offsets this—Croatian developers earn Western European salaries while living on the Adriatic coast. Digital nomad visas (launched 2021) brought 5,000+ remote workers to Croatia by 2025, clustering in Zagreb, Split, and Dubrovnik.

**Bottom line:** Croatia is the Adriatic's tech minnow with strong infrastructure and a gaming niche, but depopulation and small market size limit scale. It's a great place for remote work, not unicorn building.`,
    issues: ['83% internet, 80 Mbps at $25/month', 'Infobip communications unicorn at $2B+', 'Gaming industry 3K+ developers, national niche', '400K population loss since 1991', 'EU MiCA crypto regulation applies 2024', '5K+ digital nomads by 2025']
  },
  {
    name: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    summary: `Cuba's tech sector in November 2025 is communism's digital anachronism—the state controls all internet infrastructure, private enterprise is illegal (until recently), and the U.S. embargo has strangled imports for 60+ years. Internet penetration is 74% (8.3 million users out of 11.2 million), but this figure is misleading: mobile data (launched 2018) is expensive ($10/GB, unaffordable for most Cubans earning $20/month), slow (3G and patchy 4G), and monitored. ETECSA, the state telecom monopoly, controls all access. WiFi hotspots in parks and public squares are the primary access points—Cubans buy scratch-off internet cards ($1/hour) to connect. Home internet is rare and requires government approval.

Cuba's "startup scene" is a contradiction: the Communist Party legalized small private businesses in 2021 (after decades of prohibition), and a few tech entrepreneurs emerged. APKLIS (state-run app store for Android) hosts Cuban apps (messaging, games, services), but innovation is stifled by ideology and scarcity. Cuba's tech talent is world-class—the island's education system produces excellent engineers and doctors—but they emigrate en masse. The U.S. Cuban Adjustment Act allows Cubans to gain residency, and thousands flee annually to Miami, Spain, or Nicaragua (then migrate north). Remote work is nearly impossible: internet is too slow/expensive, and payment processing (blocked by U.S. sanctions) is a nightmare.

Cryptocurrency is Cuba's economic lifeline: Cubans use Bitcoin, USDT, and other stablecoins to receive remittances (diaspora sent $3.7 billion in 2024), evade the dual currency system (Cuban peso CUP and convertible peso CUC), and conduct commerce. The government legalized crypto in 2021 (seeking revenue from mining and transactions), but infrastructure is too weak to support large-scale mining. Peer-to-peer crypto trading via WhatsApp and Telegram is common. Censorship is pervasive but unsophisticated: the government blocks opposition websites and monitors social media, but VPNs (Psiphon, Tor) are widely used. The July 2021 protests (largest since the 1959 revolution) were organized via Facebook and WhatsApp—the government responded by shutting down internet for days.

Cuba's tech future depends on political change. If the Communist Party falls or reforms, the island could become the Caribbean's tech hub (educated population, cheap labor, proximity to the U.S.). But there's no sign of reform—the regime prioritizes control over prosperity.

**Bottom line:** Cuba's tech sector is frozen in 1959 plus smartphones. State control, U.S. embargo, and communism make innovation impossible. Crypto and emigration are the only escape valves.`,
    issues: ['74% internet, $10/GB data on $20/month wages', 'ETECSA state monopoly controls all access', 'WiFi scratch cards $1/hour in public parks', 'Crypto remittances $3.7B evade dual currency', 'July 2021 protests saw internet shutdowns', 'Brain drain to Miami/Spain catastrophic']
  },
  {
    name: 'Cyprus',
    lat: 35.1264,
    lng: 33.4299,
    summary: `Cyprus's tech sector in November 2025 is the Mediterranean's offshore oddity—this island nation (EU member since 2004, population 1.2 million) is a tax haven for Russian oligarchs, crypto companies, and online gambling firms. Internet penetration is 91% (1.1 million users), with fiber covering 70% of homes and 5G in Nicosia, Limassol, and Larnaca. Cyprus's broadband is fast (average 100 Mbps) and reliable. The country's low corporate tax (12.5%), English-speaking workforce, and EU membership make it attractive for tech companies avoiding higher taxes elsewhere.

The "tech sector" is dominated by financial services and online gambling: eToro (social trading platform valued at $3.5B), Plus500 (CFD trading), and dozens of forex/crypto trading platforms are Cyprus-based. The gambling industry employs 5,000+ people and generates $1 billion annually—Cyprus is the online gambling capital of Europe. But this isn't innovation; it's regulatory arbitrage. The startup ecosystem is tiny: no product unicorns, few local VCs. Cyprus's strength is attracting foreign companies (mostly Russian and Israeli) that want EU market access with low taxes.

Cryptocurrency regulation is permissive: Cyprus was an early crypto hub, and the country hosts 50+ crypto exchanges and trading platforms. The EU's MiCA regulation (2024) now applies, but Cyprus remains crypto-friendly. The 2013 banking crisis (haircuts on deposits, capital controls) traumatized Cypriots, and crypto adoption spiked as trust in banks collapsed. Bitcoin ATMs are common in tourist areas. E-government is good: Cyprus's e-government portal digitized 85% of public services by 2024, including taxes and business registration. Internet freedom is absolute: no censorship, strong free speech protections.

Cyprus's challenge is reputation: the country is a money laundering hub (EU blacklisted Cyprus in 2019, then removed it after reforms), and Russian oligarch wealth (pre-Ukraine war sanctions) tainted the island. The Cyprus Investment Program (golden passports for investors) was shut down in 2020 after corruption scandals. Tech talent is scarce locally—Cyprus imports developers from Greece, Bulgaria, and Russia. The island's division (Turkish North, Greek South since 1974) creates legal and infrastructure complexities. North Cyprus has separate internet infrastructure and is not EU-recognized.

**Bottom line:** Cyprus is Europe's offshore tax haven for gambling and crypto, not a real tech hub. It's regulatory arbitrage masquerading as innovation.`,
    issues: ['91% internet, 100 Mbps average', 'eToro social trading platform at $3.5B', 'Online gambling industry $1B annually', '2013 banking crisis drove crypto adoption', 'EU MiCA crypto regulation applies 2024', 'Money laundering hub, golden passports scandal']
  },
  {
    name: 'Czech Republic',
    lat: 49.8175,
    lng: 15.4730,
    summary: `Czech Republic's tech sector in November 2025 is Central Europe's quiet achiever—Prague is cheaper than Berlin or London, draws talent from Eastern Europe, and benefits from EU membership, but the ecosystem lacks the dynamism of larger neighbors. Internet penetration is 89% (9.4 million users out of 10.5 million), with fiber covering 60% of homes and 5G in Prague, Brno, and Ostrava. Czech broadband is fast (average 95 Mbps) and affordable ($20/month). Infrastructure is excellent.

The startup ecosystem is growing: Avast (cybersecurity giant acquired by Norton for $8.6B in 2022), Rohlik Group (grocery delivery valued at $1B+), and Productboard (product management SaaS valued at $1.7B) are Czech unicorns. Prague hosts 1,500+ startups, and the government's CzechInvest program provides grants and support. But venture capital is thin—startups raise seed rounds in Prague, then Series A+ in London or Berlin. The domestic market (10.5 million) is small. Czech Republic's tech workforce is skilled (120,000+ developers) and affordable (average salary $40,000/year, half of Germany's), making Prague a magnet for nearshoring.

Cryptocurrency adoption is moderate: the Czech Republic treats crypto as property (capital gains taxed at 15%), and Prague has 200+ Bitcoin ATMs. The country's tech-savvy population embraced crypto early, and local exchanges (Simplecoin, Anycoin Direct) serve retail traders. But regulation is tightening under EU MiCA rules. E-government is excellent: Czech Point (government portal) digitized 95% of public services by 2024, including taxes, health records, and business registration. Digital IDs are universal for EU citizens. Internet freedom is absolute: no censorship, strong free speech protections, and independent media.

Cybersecurity is a priority: the Czech Republic's National Cyber and Information Security Agency (NÚKIB) coordinates defense, and the country faces persistent attacks from Russia (targeting energy and government infrastructure). The Czech government banned Huawei and ZTE from 5G networks in 2019, aligning with the U.S. Czech Republic's challenge is brain drain: thousands of developers emigrate to Germany, Austria, and the UK for higher salaries. Remote work offsets this—Czech developers earn Western European salaries while living in Prague or Brno.

**Bottom line:** Czech Republic is Central Europe's affordable tech hub with excellent infrastructure and strong cybersecurity, but limited VC and small market size force startups to scale abroad.`,
    issues: ['89% internet, 95 Mbps at $20/month', 'Avast acquired for $8.6B, Rohlik grocery unicorn', 'Prague 1,500+ startups, thin VC ecosystem', 'Huawei/ZTE banned from 5G in 2019', '200+ Bitcoin ATMs, EU MiCA applies', 'Brain drain to Germany/Austria/UK']
  },
  {
    name: 'Democratic Republic of Congo',
    lat: -4.0383,
    lng: 21.7587,
    summary: `DRC's tech sector in November 2025 is Africa's richest-poorest paradox—this vast nation holds 70% of the world's cobalt (essential for EV batteries and smartphones) and immense mineral wealth, but corruption, war, and infrastructure collapse doom the digital economy. Internet penetration is 26% (24 million users out of 95 million), concentrated in Kinshasa and Lubumbashi. The five telecoms (Vodacom, Orange, Airtel, Africell, Tigo) provide 3G and patchy 4G in cities, but data costs $6/GB (among Africa's highest), and speeds average 5 Mbps. Rural areas are offline. Eastern DRC (North Kivu, South Kivu, Ituri) is a war zone—M23 rebels, militias, and Rwandan-backed forces control territory, and telecom infrastructure is destroyed.

Electricity is the bottleneck: only 19% of Congolese have access to power, and Kinshasa (12 million people) suffers daily blackouts lasting 12+ hours. Internet cafes and businesses rely on diesel generators. The government's Plan National du Numérique (2022-2030) aims to expand fiber and digitize services, but corruption means funds vanish. Mobile money is the only functional digital service: M-Pesa, Orange Money, and Airtel Money processed $22 billion in 2024 (nearly 40% of GDP), bringing financial inclusion to millions. 65% of Congolese adults use mobile money—higher than bank account ownership (30%). This is driven by necessity: the banking system is dysfunctional, and cash is scarce.

The startup scene is nearly non-existent: no unicorns, minimal VC, and the few tech hubs (Kinshasa Digital Academy, Ingenious City) struggle with funding and brain drain. Congolese developers emigrate to Rwanda, Kenya, South Africa, or France. Internet censorship is sporadic: the government shut down the internet during the 2018 and 2023 elections to prevent result-sharing and protests. Social media is monitored, and activists are arrested. VPN usage is common. Cryptocurrency adoption is low: most Congolese don't have smartphones or internet, but those who do use Bitcoin and USDT for remittances and to evade the collapsing Congolese franc.

DRC's tech future is non-existent unless governance improves. The country is bleeding talent, infrastructure is crumbling, and war consumes the east. The cobalt wealth enriches foreign companies (Chinese miners dominate) but doesn't benefit Congolese.

**Bottom line:** DRC has 70% of the world's cobalt but 26% internet penetration. Corruption, war, and collapse doom the tech sector. Mobile money is the only success.`,
    issues: ['26% internet, 24M users', '19% electricity access, daily 12+ hour blackouts', 'Mobile money $22B, 65% adoption', 'Internet shutdowns during 2018/2023 elections', 'Eastern DRC war zone, infrastructure destroyed', 'Cobalt wealth benefits China, not Congolese']
  },
  {
    name: 'Denmark',
    lat: 56.2639,
    lng: 9.5018,
    summary: `Denmark's tech sector in November 2025 is Scandinavia's efficient achiever—a nation of 5.9 million with world-class infrastructure, strong digital governance, and a thriving startup scene. Internet penetration is 99% (the highest in Europe), with fiber covering 90% of homes and 5G blanketing the country. Denmark's broadband is among the world's fastest (average 150 Mbps), and the government's Gigabit Strategy aims for universal gigabit access by 2030. Danish telecoms (TDC, Telenor, Telia, 3) compete aggressively, keeping prices reasonable ($40/month for fiber).

The startup ecosystem is Europe's most dynamic per capita: Zendesk (customer service software, $10B+ valuation acquired by private equity in 2022), Unity Technologies (game engine, $20B market cap at peak), Trustpilot (review platform), and Sitecore (digital experience platform) are Danish success stories. Copenhagen hosts 3,000+ startups, and Denmark has 10+ unicorns. The ecosystem is funded by Nordic VCs (Nordic Alpha, Sunstone) and foreign capital (Sequoia, Accel). Denmark's strength is B2B SaaS, cleantech, and healthtech. The government's Innovation Fund Denmark invests $200M annually in R&D.

Cryptocurrency regulation is progressive: Denmark treats crypto as assets (taxed as income or capital gains depending on usage), and the Danish Tax Authority (SKAT) requires detailed crypto reporting. Bitcoin ATMs are rare (Denmark is cashless), but crypto trading is legal and common. Denmark is the world's most cashless society: 73% of transactions are digital (MobilePay, card payments), and cash usage dropped below 10% in 2024. MobilePay (owned by Danske Bank) has 5 million users (85% of the population) and processed $150 billion in 2024.

E-government is world-leading: Denmark's NemID/MitID digital identity system is mandatory for all online services (taxes, banking, health, government), and 98% of public services are digitized. The country pioneered digital governance—borger.dk (citizen portal) has been operational since 2007. Internet freedom is absolute: no censorship, strong free speech protections, and independent media. Cybersecurity is a government priority: Denmark's Center for Cyber Security coordinates defense, and the country faces persistent attacks from Russia and China.

**Bottom line:** Denmark is a tech exemplar—world-class infrastructure, efficient government, and a thriving ecosystem. It's proof that small countries can build tech powerhouses with the right policies.`,
    issues: ['99% internet, 150 Mbps average', 'Zendesk and Unity Danish success stories', '10+ unicorns in nation of 5.9M', '73% cashless transactions, MobilePay 5M users', 'MitID digital identity mandatory', 'World-leading e-government since 2007']
  },
  {
    name: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    summary: `Dominican Republic's tech sector in November 2025 is the Caribbean's BPO hub—this nation of 11 million is leveraging proximity to the U.S., English/Spanish bilingualism, and favorable time zones to build a call center and tech services economy. Internet penetration is 79% (8.7 million users), with 4G covering 95% of urban areas and 5G launching in Santo Domingo and Santiago in 2024. The four telecoms (Claro, Altice, Viva, Tricom) compete aggressively, and data costs dropped to $3/GB. Broadband speeds average 35 Mbps—decent for the region but slower than Chile or Costa Rica.

The tech sector is dominated by foreign BPO companies: Concentrix, Alorica, Teleperformance, and Sitel employ 70,000+ Dominicans in call centers and back-office operations for U.S. companies. The government's Free Trade Zone regime offers tax breaks (0% corporate tax, no import duties) for tech and BPO firms. This created jobs but not innovation—Dominican Republic is a services economy, not a startup hub. The local startup scene is tiny: no unicorns, minimal VC. Higo (insurance tech) and Cocodrink (beverage delivery) are small local successes.

Mobile money adoption is low (18%) compared to Central America or Sub-Saharan Africa because bank account ownership is higher (65%). But digital payments are booming: Banco BHD León's BHD León app and Banreservas's digital wallet processed $8 billion in 2024. Cryptocurrency adoption is moderate: Dominicans use Bitcoin and USDT for remittances ($10.4 billion in 2024, 10% of GDP) and cross-border payments. The central bank doesn't regulate crypto, so it's legal by default.

E-government is improving: the Dominican Republic's e-government portal digitized 60% of public services by 2024, including taxes and business registration. But bureaucracy and corruption remain obstacles. Internet freedom is good: no systematic censorship, independent media, and strong free speech protections. But journalists covering corruption and narco-trafficking face threats. Cybersecurity is weak: ransomware attacks on government and businesses are rising. The country's challenge is diversification: BPO is vulnerable to automation (AI call centers, chatbots), and the Dominican Republic needs to move up the value chain.

**Bottom line:** Dominican Republic is the Caribbean's BPO factory with 70K+ call center jobs, but the startup scene is microscopic. It's a services economy facing automation threats.`,
    issues: ['79% internet, 4G covers 95% urban', 'BPO companies employ 70K+ in call centers', 'Free Trade Zones offer 0% corporate tax', 'Remittances $10.4B, 10% of GDP', 'Crypto legal by default, no regulation', 'Journalists covering corruption threatened']
  },
  {
    name: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    summary: `Ecuador's tech sector in November 2025 is Andean instability—political chaos (six presidents from 2017-2024), narco-violence, and dollarization create a volatile environment for startups. Internet penetration is 72% (12.6 million users out of 17.5 million), with 4G covering 85% of urban areas. Data costs dropped to $3/GB, and speeds average 25 Mbps. Ecuador's infrastructure improved from 2015-2024, but the surge in cartel violence (Sinaloa, CJNG operating in Guayaquil and Esmeraldas) scared off investors.

The startup ecosystem is small: Kushki (payment gateway serving Latin America, valued at $1.5B+) is Ecuador's unicorn. Other local companies (Más Mercado, agricultural marketplace; Runa HR, HR software) are growing but underfunded. Quito and Guayaquil host 300+ startups, but venture capital is scarce. Ecuador's domestic market (17.5 million) is too small, and regional expansion is challenging. President Daniel Noboa (elected late 2023, age 36) is business-friendly and wants to attract tech investment, but the security crisis dominates.

Mobile money adoption is low (12%) because Ecuador is dollarized (adopted the U.S. dollar in 2000 after currency collapse), and bank accounts are common (58%). Digital payments via bank apps are growing. Cryptocurrency adoption is high: Ecuadorians use Bitcoin and USDT for remittances ($4.6 billion in 2024), cross-border trade, and to evade capital controls. Ecuador banned Bitcoin in 2014 (briefly), then reversed course in 2020. Crypto is legal and unregulated. The government launched a failed digital currency (dinero electrónico) in 2014-2018, which nobody used.

Internet freedom is moderate: Ecuador has independent media and no systematic censorship, but President Rafael Correa (2007-2017) harassed journalists, and the Communications Law (2013) restricted press freedom. Noboa's government is less hostile but monitors social media during the security crisis. E-government is improving: Ecuador's Gobierno Electrónico portal digitized 65% of public services by 2024. Cybersecurity is weak: ransomware attacks on businesses and governments are rising, and narco-cartels use encrypted messaging and crypto.

**Bottom line:** Ecuador has a unicorn (Kushki) and potential, but political instability, narco-violence, and small market size limit the tech sector. It's the Andes' most volatile ecosystem.`,
    issues: ['72% internet, narco-violence in Guayaquil', 'Kushki payment unicorn at $1.5B+', 'Dollarized since 2000, crypto adoption high', 'Remittances $4.6B, Bitcoin for cross-border', 'Six presidents 2017-2024, political chaos', 'Sinaloa/CJNG cartels operating in Ecuador']
  },
  {
    name: 'Egypt',
    lat: 26.8206,
    lng: 30.8025,
    summary: `Egypt's tech sector in November 2025 is the Arab world's sleeping giant—105 million people, a $400 billion economy, and a government desperate to diversify from oil/tourism, but authoritarianism and economic mismanagement strangle innovation. Internet penetration is 72% (76 million users), driven by mobile. The four telecoms (Vodafone Egypt, Orange Egypt, Etisalat Misr, WE) provide 4G covering 99% of the population, and data costs dropped to $2/GB. Cairo's internet speeds average 30 Mbps—decent but not world-class.

The startup ecosystem is MENA's most promising: Fawry (payments platform, listed on Egyptian Stock Exchange, valued at $1.2B+), Swvl (mass transit tech, SPAC'd in 2022 but collapsed to under $100M valuation), MNT-Halan (fintech serving the unbanked, valued at $1B+), and Vezeeta (healthtech) are Egyptian unicorns or near-unicorns. Cairo hosts 700+ startups, and the government's Digital Egypt strategy aims for a $15 billion digital economy by 2030. But President Sisi's military regime (2014-present) is a double-edged sword: the government invests in infrastructure (the New Administrative Capital is being built, fiber optic networks expanded), but it crushes dissent and meddles in business.

Egypt's economic crisis is the drag: the pound lost 50% of its value in 2022-2023, inflation hit 35%, and foreign currency shortages strangled imports. Startups can't access dollars to pay for cloud services (AWS, Google Cloud), and international investors fled. The IMF's $8 billion bailout (2024) brought temporary stability, but Egypt's debt is 95% of GDP. Cryptocurrency was booming (Egyptians used Bitcoin and USDT to evade capital controls and preserve wealth), but the central bank banned crypto transactions in 2023, driving adoption underground. Peer-to-peer trading via WhatsApp and Telegram is common.

Internet censorship is pervasive: Egypt blocks 600+ websites (news sites, VPNs, human rights organizations), and the 2018 Cybercrime Law criminalizes online dissent. The government arrested 1,000+ people for social media posts in 2024. VPN usage is widespread but risky—the regime monitors and prosecutes VPN users. E-government is improving: Egypt's digital ID (mandatory for all citizens) and the government's online portal digitized 40% of public services by 2024. But corruption means bribes are often still necessary.

**Bottom line:** Egypt has 105 million people and a thriving startup scene, but Sisi's authoritarianism, currency crisis, and crypto ban doom the sector's potential. It's a case of what could be, not what is.`,
    issues: ['72% internet, 76M mobile users', 'MNT-Halan fintech unicorn for unbanked', 'Pound lost 50%, inflation 35%, dollar shortage', 'Central bank banned crypto 2023', '600+ websites blocked, 1K arrested for posts', 'Debt 95% of GDP, IMF bailout $8B']
  },
  {
    name: 'El Salvador',
    lat: 13.7942,
    lng: -88.8965,
    summary: `El Salvador's tech sector in November 2025 is Bitcoin's experiment—President Nayib Bukele (elected 2019, consolidated power 2024) made Bitcoin legal tender in September 2021, becoming the first country to do so. The gamble hasn't paid off. Internet penetration is 68% (4.5 million users out of 6.6 million), with 4G covering 90% of the country. Data costs $3/GB, and speeds average 20 Mbps. El Salvador's telecoms (Tigo, Claro, Movistar, Digicel) compete aggressively.

The Bitcoin experiment is a mixed bag: Bukele's government bought 6,000+ Bitcoin (worth $600M at November 2025 prices, up from initial purchase prices), built ATMs nationwide, and created Chivo Wallet (government Bitcoin wallet app). Adoption was forced: businesses must accept Bitcoin by law, and the government gave citizens $30 in BTC to download Chivo. But actual usage is low—surveys show only 10-15% of Salvadorans use Bitcoin regularly, preferring dollars (El Salvador dollarized in 2001). The IMF opposed the Bitcoin law and conditioned a $1.4 billion bailout (2023) on scaling back the Bitcoin experiment. Bukele reluctantly agreed to make Bitcoin acceptance voluntary for businesses.

The startup scene is tiny: no unicorns, minimal VC. Bukele's Bitcoin Beach (surf town of El Zonte) and Bitcoin City (proposed crypto metropolis funded by Bitcoin bonds) are PR stunts that haven't delivered economic transformation. El Salvador is a remittance economy: $7.5 billion annually (25% of GDP) sent by diaspora in the U.S. Bitcoin was supposed to reduce remittance fees (currently 6%), but Lightning Network adoption is low. Most Salvadorans still use Western Union or MoneyGram.

Authoritarianism is rising: Bukele suspended constitutional rights in 2022 to fight gangs (MS-13, Barrio 18), arresting 80,000+ people (2% of the population) in "mega-prisons." Crime dropped dramatically (El Salvador was the world's murder capital in 2015, now one of the safest in Latin America), but at the cost of due process. Journalists and opposition figures face harassment. Internet freedom is declining: the government monitors social media and pressures platforms to remove critical content. E-government is improving: El Salvador's digital ID and government portal digitized 70% of public services by 2024.

**Bottom line:** El Salvador bet on Bitcoin and authoritarianism—crime dropped, but the Bitcoin experiment flopped, and democracy died. The tech sector is an afterthought to Bukele's cult of personality.`,
    issues: ['Bitcoin legal tender since 2021', 'Government holds 6,000+ Bitcoin worth $600M', 'IMF bailout conditioned on scaling back Bitcoin', 'Remittances $7.5B, 25% of GDP', '80K+ arrested in gang crackdown, 2% of population', 'Bitcoin adoption only 10-15%']
  },
  {
    name: 'Estonia',
    lat: 58.5953,
    lng: 25.0136,
    summary: `Estonia's tech sector in November 2025 is Europe's digital nation—this Baltic state of 1.3 million has the world's most advanced e-government, a thriving startup ecosystem, and a digital residency program that's attracted 100,000+ global entrepreneurs. Internet penetration is 91% (1.2 million users), with fiber and 5G covering all cities. Estonia's broadband is fast (average 110 Mbps) and affordable ($20/month). The country rebuilt itself after Soviet collapse (1991) by going all-in on digital.

E-government is the crown jewel: Estonia's X-Road platform (launched 2001) connects all government databases, allowing 99% of public services to be accessed online. Estonians vote, pay taxes, access health records, and start businesses (takes 18 minutes) entirely digitally. The mandatory digital ID card (eID) is used for authentication, and blockchain secures health records and legal documents. Estonia's Digital Nomad Visa (launched 2020) and e-Residency program (launched 2014) allow foreigners to establish Estonian companies remotely—100,000+ e-residents from 170 countries have registered by November 2025.

The startup ecosystem punches wildly above its weight: Skype (founded in Tallinn, acquired by Microsoft for $8.5B in 2011), Wise (formerly TransferWise, money transfer unicorn valued at $11B), Bolt (ride-hailing/delivery unicorn valued at $8.4B), and Playtech (gambling software giant) are Estonian. Tallinn hosts 1,500+ startups, and Estonia has 10+ unicorns (more per capita than any country). The ecosystem is funded by local VCs (Tera Ventures, Karma Ventures) and foreign capital.

Cryptocurrency regulation is among Europe's clearest: Estonia was an early crypto hub, licensing exchanges in 2017. But the 2020 $220 million Danske Bank money laundering scandal (routed through Estonia) triggered a regulatory crackdown. Estonia tightened licensing, and hundreds of crypto companies lost permits. The EU's MiCA regulation (2024) now applies. Internet freedom is absolute: no censorship, strong free speech protections. Cybersecurity is obsessive: Estonia suffered the world's first state-level cyberattack (2007, attributed to Russia), and the country built NATO's Cyber Defence Centre and pioneered national cyber defense. Estonia backs up government data in Luxembourg (data embassy) in case of Russian invasion.

**Bottom line:** Estonia is the world's most digitally advanced nation—e-government, unicorns, and e-residency prove small countries can lead in tech. It's a masterclass in digital transformation.`,
    issues: ['91% internet, 110 Mbps at $20/month', 'Skype, Wise, Bolt Estonian unicorns', '99% public services online, 18 min to start business', '100K+ e-residents from 170 countries', '2007 Russian cyberattack, NATO cyber center', 'EU MiCA crypto regulation applies 2024']
  },
  {
    name: 'Ethiopia',
    lat: 9.145,
    lng: 40.4897,
    summary: `Ethiopia's tech sector in November 2025 is East Africa's tragedy—this nation of 120 million had Africa's fastest-growing economy (2015-2020), a reformist Prime Minister (Abiy Ahmed, Nobel Peace Prize 2019), and a booming startup scene. Then came the Tigray War (2020-2022), ethnic violence, and economic collapse. Internet penetration is 30% (36 million users), driven by mobile. The state-owned Ethio Telecom held a monopoly until 2021, when Safaricom Ethiopia (Kenyan telecom consortium) launched, breaking the duopoly. 4G LTE covers 65% of urban areas, but rural Ethiopia is offline. Data costs dropped to $2/GB (down from $15 in 2019), making internet accessible.

The startup scene was vibrant pre-war: Gojo (Ethiopian ride-hailing), Ride (ride-sharing), and iCog Labs (AI research) were growing. Addis Ababa hosted tech hubs (iceaddis, Bluemoon), and the government's Digital Ethiopia 2025 strategy promised fiber expansion and e-government. But the Tigray War (which killed 600,000+) destroyed Tigray's infrastructure, triggered mass atrocities, and scared off investors. The IMF and World Bank suspended lending. VC funding collapsed. Mobile money was booming: M-Birr, HelloCash, and Telebirr (Ethio Telecom's app, launched 2021) processed $15 billion in 2024, bringing financial inclusion to millions. 45% of Ethiopians use mobile money—higher than bank account ownership (35%).

Internet censorship is pervasive: the government shut down the internet nationwide during the 2020 elections, the 2021 Tigray War escalation, and the 2023 ethnic violence. Ethiopia has the worst internet freedom record in East Africa. Social media (Facebook, WhatsApp, Telegram) is blocked regularly, and VPN usage is common but risky. The government monitors all communications via Ethio Telecom's infrastructure. Cryptocurrency adoption is low: Ethiopia's central bank banned crypto, and adoption is underground. The currency (birr) is controlled, and foreign exchange shortages strangle the economy.

Ethiopia's tech future depends on peace and reform. Abiy Ahmed went from Nobel laureate to war criminal in international opinion. The country is fragmenting along ethnic lines (Oromo, Amhara, Tigray, Somali), and the tech sector is a casualty. Brain drain is catastrophic: thousands of engineers fled to Kenya, U.S., or Europe.

**Bottom line:** Ethiopia was Africa's next big tech story, then war and authoritarianism destroyed it. Mobile money survives; everything else is collapsing.`,
    issues: ['30% internet, 36M users', 'Tigray War killed 600K+, destroyed infrastructure', 'Telebirr mobile money $15B, 45% adoption', 'Nationwide internet shutdowns during crises', 'Central bank banned crypto', 'Brain drain to Kenya/US/Europe']
  }
]

async function main() {
  console.log('🚀 TECHNOLOGY - Countries B through K')
  console.log(`Inserting ${WRITEUPS.length} writeups...\n`)

  let success = 0
  let failed = 0

  for (const entry of WRITEUPS) {
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

  console.log(`\n${'='.repeat(60)}`)
  console.log(`✓ Success: ${success}`)
  console.log(`✗ Failed: ${failed}`)
  console.log(`Total: ${WRITEUPS.length}`)
  console.log(`${'='.repeat(60)}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
