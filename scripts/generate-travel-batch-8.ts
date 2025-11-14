import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = [
  {
    name: 'Luxembourg',
    type: 'country',
    country: 'Luxembourg',
    category: 'travel',
    lat: 49.6116,
    lng: 6.1319,
    summary: `Landing in Luxembourg feels like discovering Europe's best-kept secret—a country so small you can cross it in two hours, yet so wealthy and culturally layered that three days barely scratches the surface. This Grand Duchy punches spectacularly above its weight, offering medieval fortresses, Michelin-starred restaurants, and some of the continent's most dramatic river valley scenery.

Luxembourg City itself is a UNESCO World Heritage site, built across dramatic gorges and connected by soaring viaducts. The Bock Casemates—17 kilometers of underground tunnels carved into sandstone—tell centuries of military history, while the Grand Ducal Palace offers a glimpse of constitutional monarchy in action. The Grund quarter, nestled in the valley below, transforms into a romantic maze of cobblestone streets and riverside cafes at sunset. Don't miss the MUDAM contemporary art museum, housed in an I.M. Pei-designed building that bridges Luxembourg's historical and cosmopolitan identities.

Beyond the capital, the Müllerthal region—"Little Switzerland"—delivers hiking trails through sandstone formations and beech forests that rival anything in the Alps. Vianden Castle, perched above the Our River, ranks among Europe's finest feudal residences. The Moselle Valley wine route offers Rieslings and Crémants that shock first-time visitors with their quality, best experienced at family-run domains where the vintner pours tastings personally.

Infrastructure is flawless: trains and buses run precisely on time, and since 2020, all public transport is free nationwide—yes, completely free. English is widely spoken alongside French, German, and Luxembourgish. Accommodation ranges from boutique hotels in converted monasteries to modern business chains; book ahead during EU institutional meetings when Brussels bureaucrats flood the hotels.

Safety is exceptional—Luxembourg consistently ranks among Europe's safest destinations, though petty theft can occur in tourist areas. EU and Schengen citizens need no visa; Americans get 90 days visa-free. The country sees about 1.1 million overnight visitors annually, remarkably low given its accessibility, meaning you'll rarely face crowds outside peak summer weekends.

Visit May through September for ideal weather, though spring brings wildflowers to Müllerthal and fall delivers harvest festivals in wine country. Winters are gray but festive, with Christmas markets that rival bigger neighbors without the tourist mobs. Budget 150-200 euros daily for comfortable mid-range travel; Luxembourg is pricey but not unreasonably so given quality standards.

The real magic is Luxembourg's layered identity: deeply European yet distinctly its own, historically significant yet thoroughly modern, small enough to feel intimate yet cosmopolitan enough to surprise. It's the Europe you imagined—efficient, beautiful, cultured—delivered at a human scale.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Madagascar',
    type: 'country',
    country: 'Madagascar',
    category: 'travel',
    lat: -18.7669,
    lng: 46.8691,
    summary: `Madagascar isn't just off the beaten path—it's off the map entirely for most travelers, which is precisely why the fourth-largest island on Earth remains one of the planet's most extraordinary biodiversity hotspots and one of its most challenging destinations to navigate. If you can handle rough roads, inconsistent infrastructure, and genuine adventure, Madagascar delivers wildlife encounters and landscapes found literally nowhere else on Earth.

Start in Antananarivo, the highland capital where French colonial architecture crumbles alongside bustling markets. It's a base camp, not a destination—quickly move on to Andasibe-Mantadia National Park, three hours east, where lemurs bark from the canopy at dawn and the indri's haunting call echoes through montane rainforest. The Avenue of the Baobabs near Morondava delivers the iconic Madagascar image: ancient trees silhouetted against crimson sunsets. Tsingy de Bemaraha, a UNESCO site of limestone karst "forests," requires serious effort to reach but rewards with alien landscapes of razor-sharp pinnacles.

The real Madagascar lies in its extremes: Nosy Be offers beach resort escapes with decent diving, while Île Sainte-Marie draws humpback whales from July to September. Isalo National Park showcases sandstone formations and canyon hiking. Ranomafana's rainforests harbor rare lemurs and chameleons. The spiny forests of the south present surreal desert ecosystems with octopus trees and ring-tailed lemurs.

Infrastructure is Madagascar's defining challenge. Roads are mostly terrible—bone-rattling dirt tracks that become impassable in rainy season (November-March). Domestic flights via Air Madagascar are unreliable but often necessary. Hotels range from comfortable eco-lodges to basic guesthouses; bring flexibility and patience. English is limited outside tourist areas; French is essential for navigation.

Safety requires caution: Antananarivo has crime issues, particularly after dark. Stick to established tour operators for remote areas—banditry occurs in southern regions. Political stability is fragile but violence rarely targets foreigners. Malaria prophylaxis is essential for coastal regions; dengue is also present.

Most nationalities receive 30-60 day visas on arrival for about $50. Tourism infrastructure is developing but remains limited—Madagascar sees only about 350,000 visitors annually, one-tenth of Mauritius. May through October offers the dry season sweet spot: passable roads, moderate temperatures, wildlife active.

Budget $80-120 daily for mid-range travel including guides (often mandatory in parks). Serious wildlife enthusiasts should plan 2-3 weeks minimum; Madagascar's size and poor roads make quick visits frustrating. This is expedition travel dressed up as tourism—come prepared for discomfort, delays, and the occasional bureaucratic nightmare. But for those who persist, Madagascar delivers encounters with lemurs, fossas, chameleons, and landscapes that exist nowhere else on a planet rapidly running short of genuine wilderness.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Malawi',
    type: 'country',
    country: 'Malawi',
    category: 'travel',
    lat: -13.2543,
    lng: 34.3015,
    summary: `Malawi earns its nickname "The Warm Heart of Africa" honestly—this is one of the continent's most welcoming, accessible, and underrated destinations, anchored by the massive Lake Malawi that dominates nearly a third of the country. Budget travelers and adventure seekers have known about Malawi for decades, but it remains refreshingly free of mass tourism, offering genuine African experiences without the crowds or premium prices of East African safari circuits.

Lake Malawi is the star attraction: 365 miles of freshwater coastline with some of the world's best snorkeling. Lake Malawi National Park, at the lake's southern end, protects cichlid fish diversity found nowhere else—over 1,000 endemic species in crystalline waters. Cape Maclear and Nkhata Bay offer backpacker scenes with kayaking, diving, and island hopping. Further north, Likoma Island feels like a Caribbean escape transported to freshwater, with baobabs replacing palms.

Beyond the lake, Liwonde National Park delivers excellent wildlife viewing—elephants, hippos, crocodiles, and strong lion and leopard populations—without the tourist infrastructure or prices of Kenya or Tanzania. Nyika Plateau offers montane grasslands with rare antelopes, wildflowers, and mountain biking trails. Mulanje Massif provides serious hiking with tea plantations at its base and granite peaks above. Zomba Plateau, the former colonial capital's highland retreat, combines history with forest walks.

Infrastructure is basic but functional. The M1 highway from north to south is mostly paved but potholed. Minibuses cover most routes cheaply but uncomfortably. Domestic flights are limited. Accommodation ranges from excellent lake lodges to simple guesthouses; mid-range travelers can find comfort for reasonable prices. English is widely spoken—Malawi's education system is relatively strong.

Safety is generally good by regional standards, though petty theft occurs in cities like Lilongwe and Blantyre. Don't display valuables, use registered taxis, and avoid walking after dark in urban areas. Most nationalities pay $50-75 for visas on arrival, valid 30 days. The country sees about 900,000 visitors annually—modest numbers that keep experiences authentic.

May through October is the dry season sweet spot: pleasant temperatures, wildlife concentrated around water sources, and passable roads. November to April brings rains that make some areas inaccessible but transform landscapes into lush green. Budget $40-70 daily for comfortable mid-range travel—Malawi is one of Africa's genuine bargains.

The challenges are real: Malawi ranks among the world's poorest countries, infrastructure is limited, and services can be unpredictable. Bring patience, flexibility, and realistic expectations. But the rewards—swimming in pristine lake waters at sunset, spotting elephants in uncrowded parks, sharing meals with locals who seem genuinely pleased you visited—make Malawi one of Africa's most fulfilling destinations for travelers willing to embrace simplicity.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Malaysia',
    type: 'country',
    country: 'Malaysia',
    category: 'travel',
    lat: 4.2105,
    lng: 101.9758,
    summary: `Malaysia has cracked the code on modern Asian travel—delivering street food that rivals Bangkok's, rainforests older than the Amazon, beaches competing with Thailand's, and a multicultural urban energy uniquely its own, all wrapped in infrastructure that actually works and prices that won't bankrupt you. This is Southeast Asia with guardrails: adventurous enough to feel exotic, organized enough to never feel overwhelming.

Kuala Lumpur anchors the experience: the Petronas Towers still impress, but dig deeper into neighborhoods like Kampung Baru for Malay village life amid skyscrapers, Brickfields for South Indian textiles and banana leaf curry, and Jalan Alor for night market chaos. George Town, Penang's UNESCO-listed capital, is where Malaysia's soul lives—street art, shophouses, and arguably the country's best food scene mixing Hokkien, Malay, Indian, and Peranakan cuisines. Melaka offers similar heritage with Portuguese, Dutch, and British colonial layers.

Malaysian Borneo is where adventure escalates: Kinabalu National Park protects Southeast Asia's highest peak (4,095m, climbable with guides), while the Kinabatangan River offers wildlife safaris spotting orangutans, proboscis monkeys, and pygmy elephants. Mulu National Park shelters the world's largest cave chamber. The Perhentian Islands and Tioman deliver tropical beach perfection with excellent diving. The Cameron Highlands offer tea plantations and cool relief from tropical heat.

Infrastructure is excellent: KL's trains rival Singapore's, highways are modern, and budget airlines make island-hopping affordable. English is widely spoken, especially in cities. WiFi is ubiquitous. Accommodation spans from backpacker dorms to Raffles-level luxury; mid-range hotels deliver shocking value. Street food is exceptional and safe—hawker stalls in Penang and KL serve some of Asia's best meals for $2-5.

Safety is strong—Malaysia ranks as Southeast Asia's safest country after Singapore. Petty theft occurs in tourist areas; watch belongings on public transport. Scams targeting tourists exist but are manageable with basic precautions. Most Western nationals get 90-day visa-free entry. Malaysia welcomes about 26 million tourists annually, making it one of the region's top destinations, though crowds concentrate in KL and major islands.

Visit November to March for the west coast (Penang, Langkawi), April to October for the east coast (Perhentian, Redang). KL and highlands work year-round. Budget $50-80 daily for comfortable mid-range travel including excellent food. Islamic dress codes apply at religious sites and conservative states like Kelantan, but Malaysia is generally relaxed—you'll see hijabs and bikinis in the same mall.

Malaysia's genius is its balance: modern enough for comfort-loving travelers, traditional enough for cultural immersion, wild enough for adventure seekers, and welcoming enough that solo travelers and families both thrive. It's the Southeast Asian destination that delivers everything without demanding too much in return.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Mali',
    type: 'country',
    country: 'Mali',
    category: 'travel',
    lat: 17.5707,
    lng: -3.9962,
    summary: `Mali occupies a tragic position in travel history: home to Timbuktu, Djenné, and the Niger River's cultural riches, yet currently off-limits to almost all travelers due to terrorism, insurgency, and military instability. This is one of West Africa's most historically significant destinations rendered inaccessible—a reminder that not every place is available for visiting, no matter how compelling its attractions.

In more stable times, Mali offered extraordinary experiences: Timbuktu, the legendary Saharan trading city and Islamic learning center, with ancient manuscripts and earthen mosques. Djenné's Grand Mosque, the world's largest mud-brick building, rebuilt annually by the community. The Dogon Country's cliff villages, where animist traditions persisted for centuries. Bamako's vibrant music scene, where desert blues and West African rhythms created world-famous artists like Ali Farka Touré. The Niger River's annual flood supporting rice cultivation and fishing cultures. The Festival au Désert near Timbuktu, which once drew international music fans to Saharan dunes.

But since 2012, Mali has descended into sustained conflict. Northern regions face Tuareg separatism, jihadist insurgency linked to al-Qaeda and Islamic State, and inter-ethnic violence. Military coups in 2020 and 2021 destabilized governance. Foreign embassies, including the U.S. and UK, advise against all travel to Mali. The Festival au Désert was forced to relocate to Burkina Faso. Tourism infrastructure has collapsed. Aid workers and peacekeepers face kidnapping and attack risks.

For the record, if Mali were accessible: Bamako would be the entry point, with domestic flights to Timbuktu and Mopti (though safety cannot be guaranteed). The dry season (November-February) offers cooler temperatures for Saharan regions. Visas require invitation letters and considerable bureaucratic navigation. French is essential—English rarely spoken. Tourist numbers have collapsed from modest peaks of 150,000-200,000 annually to virtually zero.

The infrastructure that existed was always basic—dusty roads, simple hotels, limited services. Adventure tour operators specialized in Mali gradually closed operations or shifted to safer West African destinations like Senegal and Ghana. Even as recently as 2010, experienced Saharan travelers considered Mali manageable with proper planning and guides. That era has ended, with no clear timeline for revival.

Mali's importance to African history and Islamic civilization cannot be overstated—Timbuktu's manuscripts represent irreplaceable intellectual heritage, and the Niger Inland Delta ecosystem supports millions. But until political stability returns and security threats recede, Mali remains firmly on the "not now, maybe someday" list. For travelers drawn to West African culture, music, and history, Senegal offers accessible alternatives. For desert landscapes, Morocco and Tunisia provide safer Saharan experiences. Mali's treasures will hopefully emerge from this dark chapter, but responsible travel requires acknowledging when destinations are simply too dangerous, regardless of their appeal. This is one of those times.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Mauritania',
    type: 'country',
    country: 'Mauritania',
    category: 'travel',
    lat: 21.0079,
    lng: -10.9408,
    summary: `Mauritania is where the Sahara meets the Atlantic in a vast, sparsely populated landscape that appeals to exactly one type of traveler: hardcore desert adventurers willing to embrace discomfort, bureaucracy, and genuine remoteness for the privilege of experiencing one of Earth's emptiest quarters. This is not a casual destination—it's an expedition that happens to allow tourists.

The Adrar region delivers Mauritania's highlights: ancient ksour (fortified villages) at Chinguetti and Ouadane, UNESCO-listed trading posts from caravan routes that once connected West Africa to North Africa and Europe. Chinguetti's medieval libraries preserve manuscripts in family collections, while sand dunes increasingly encroach on stone architecture—you're witnessing a town slowly consumed by the Sahara. The Richat Structure, also called the "Eye of the Sahara," is a 40-kilometer geological formation visible from space, reachable only by serious 4x4 expedition.

Nouakchott, the coastal capital, is a sprawl of sand streets with a massive fishing port where traditional boats land Atlantic catches. The iron ore train from Zouérat to Nouadhibou—one of the world's longest and heaviest trains—offers an infamous journey: locals ride free atop ore cars on 700-kilometer overnight hauls through absolute emptiness. Nouadhibou harbors a "ship graveyard" of hundreds of rusting vessels, eerily photogenic if you can arrange access. Banc d'Arguin National Park protects globally important bird migrations and traditional fishing cultures, though reaching it requires planning and permits.

Infrastructure barely exists outside Nouakchott. Roads are sand tracks; GPS and experienced guides are mandatory. Accommodation ranges from basic hotels in cities to camping in the desert. Water scarcity is real—carry supplies. English is almost non-existent; French is essential, and Arabic (Hassaniya dialect) helps in rural areas. Internet is limited. Expect frequent military checkpoints and bureaucratic delays.

Safety requires serious consideration: Mauritania borders Mali and has experienced terrorism incidents. Northern regions near Western Sahara carry landmine risks from historical conflicts. Most foreign embassies advise against travel to northern and eastern regions. Nouakchott and Nouadhibou are relatively safer but require caution. Slavery's legacy persists despite official abolition—Mauritania was the last country to criminalize slavery (2007).

Visas are expensive ($120-150) and require invitation letters or tour company arrangements. Mauritania sees only about 30,000 tourists annually—among Africa's lowest. November to March offers cooler desert temperatures (though still hot by most standards). Ramadan affects restaurant hours and travel logistics significantly in this conservative Islamic republic.

Budget $100-150+ daily for organized desert travel with guides, vehicles, camping equipment—going independent is possible but dangerous and impractical. Mauritania demands expedition mindset: mechanical breakdowns, bureaucratic hassles, and significant discomfort are features, not bugs. But for travelers who've exhausted Morocco's tourist circuits and seek authentic Saharan remoteness, Mauritania delivers landscapes and cultures unchanged by mass tourism. Just understand you're visiting one of the world's most challenging destinations—logistically, politically, and physically.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Mexico',
    type: 'country',
    country: 'Mexico',
    category: 'travel',
    lat: 23.6345,
    lng: -102.5528,
    summary: `Mexico is the rare destination that actually exceeds its hype—yes, it's that close, that diverse, and that affordable, offering everything from world-class beaches to ancient ruins, colonial cities to cutting-edge dining, all delivered with a warmth that makes you reconsider wherever you currently call home. With 45 million tourists annually, Mexico is the Americas' most visited country, yet it still holds pockets of authentic magic if you know where to look.

Mexico City anchors the cultural experience: the Zócalo plaza, Chapultepec's museums (the anthropology museum ranks among the world's finest), Frida Kahlo's Casa Azul, and Roma Norte's cafe culture. Oaxaca delivers southern Mexico's soul—mezcal, mole, indigenous markets, and Zapotec ruins at Monte Albán. San Miguel de Allende and Guanajuato showcase colonial architecture and expat scenes. Merida provides gateway access to Mayan sites: Chichen Itza (crowded but spectacular), Uxmal (better acoustics and fewer people), and dozens of lesser-known temples buried in Yucatan jungle.

Beach options span every preference: Cancun and Playa del Carmen for spring break energy and resort infrastructure; Tulum for Instagram-ready boho-beach clubs (though overdeveloped and expensive by Mexican standards); Puerto Vallarta for gay-friendly Pacific Coast charm; Zipolite for nude beach hippie vibes; Isla Holbox for car-free tranquility and whale shark encounters; Puerto Escondido for surf. The Baja peninsula deserves its own trip: Sea of Cortez marine life, desert landscapes, wine valleys around Ensenada, and gray whale watching in Magdalena Bay.

Infrastructure is mixed: excellent in tourist zones, basic elsewhere. Luxury buses (ADO, ETN) rival business class flights with comfort. Mexico City's metro is extensive but crowded. Domestic flights are affordable. Accommodations range from backpacker hostels to world-class luxury—mid-range delivers excellent value. Mexican cuisine is UNESCO-recognized intangible heritage: street tacos, mole complexity, seafood ceviches, regional specialties in every state. Budget $40-80 daily for comfortable travel outside expensive beach resorts.

Safety is Mexico's reputational challenge, and honesty is essential: cartel violence is real but rarely targets tourists. Northern border cities like Tijuana and Ciudad Juárez have violence issues. State Department warnings apply to specific regions, mostly rural areas involved in drug trafficking. Tourist zones in Yucatan, Oaxaca, central Mexico, and major resorts are generally safe with basic precautions. Use authorized taxis, don't display wealth, avoid drugs, and research specific regions. Solo women travelers report positive experiences in tourist areas with sensible precautions.

Americans get 180 days visa-free; most nationalities receive similar treatment. Visit October-April for ideal weather in most regions, though Oaxaca's Day of the Dead (November 1-2) and Holy Week draw crowds and premium prices. Hurricane season (June-November) affects Caribbean coasts.

Mexico rewards curiosity: learn basic Spanish, venture beyond resort walls, eat where locals eat, and you'll discover why so many visitors end up relocating permanently. It's that good, that accessible, and that welcoming—if you can navigate the safety considerations thoughtfully.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Moldova',
    type: 'country',
    country: 'Moldova',
    category: 'travel',
    lat: 47.4116,
    lng: 28.3699,
    summary: `Moldova embraces its status as Europe's least-visited country with a mix of resignation and secret pride—why would you come here when Romania and Ukraine offer more dramatic landscapes and history? But that's precisely Moldova's unexpected appeal: it's authentically unprepared for tourism, which means the wine is world-class and dirt cheap, the countryside remains genuinely rural, and the capital Chisinau offers Soviet-era time capsule vibes without the tourist infrastructure or prices.

Chisinau won't win beauty contests after Soviet planners bulldozed much of its architectural heritage, but the city has gritty appeal: Parcul Catedralei for people-watching, the Soviet-era leftover apartment blocks, Orthodox churches with golden domes, and a cafe culture fueled by some of Europe's strongest coffee. The Cricova and Milestii Mici wine cellars, just outside Chisinau, store vast collections in former limestone mines—Cricova's underground streets stretch 120 kilometers, and tours include generous tastings of surprisingly good wines at laughably cheap prices.

Orheiul Vechi, Moldova's standout sight, delivers a cliff-top Orthodox monastery overlooking the Răut River's horseshoe bend, with cave churches carved into limestone. Stay overnight in village homestays for authentic rural Moldova. Soroca has the "Candle of Gratitude" monument and Roma baron mansions—architecturally wild and sociologically fascinating. Transnistria, the breakaway region, functions as a frozen Soviet republic complete with hammer-and-sickle flags, KGB offices, and Kvint cognac factory tours—it's weird, bureaucratically annoying to enter (but possible), and unlike anywhere else in Europe.

Infrastructure is basic: roads are potholed, trains are slow Soviet-era stock, marshrutkas (minibuses) connect most destinations cheaply but uncomfortably. English is rare outside Chisinau's hostels and upscale hotels; Russian is widely spoken, Romanian/Moldovan is official. Accommodation options are limited—Chisinau has decent hotels and hostels, elsewhere expect homestays or Soviet-era hotels. Food is hearty Eastern European fare: mămăligă (polenta), sarmale (stuffed cabbage), placinte (pastries), and endless wine.

Safety is good—Moldova has low crime rates, though petty theft occurs. Avoid political demonstrations and be cautious near Transnistria's "border." Most nationalities get 90 days visa-free; Americans get this on arrival. Moldova sees only about 160,000 tourists annually—among Europe's lowest—and most are diaspora visiting family. Visit May to October for decent weather; winters are cold and gray with limited heating in budget accommodations.

Budget $30-50 daily for comfortable travel—Moldova ranks among Europe's cheapest destinations. Wine tourism is the genuine draw: estates in Codru and Purcari regions offer tours and tastings for tiny fees, and the quality shocks wine snobs. This is bargain-hunting Europe for travelers tired of Prague's crowds and Barcelona's selfie sticks.

Moldova's challenges are real: it's Europe's poorest country, emigration has hollowed out villages, and Transnistria remains a frozen conflict zone. But for travelers seeking authentic Eastern Europe before it's polished for tourism, Moldova delivers unvarnished post-Soviet reality with surprising hospitality and excellent wine. Just manage expectations—you're not coming for luxury or Instagram perfection. You're coming because everyone else isn't.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Mongolia',
    type: 'country',
    country: 'Mongolia',
    category: 'travel',
    lat: 46.8625,
    lng: 103.8467,
    summary: `Mongolia isn't just off the beaten path—it is the beaten path, or rather the unpaved, axle-breaking, GPS-confounding track across the world's most sparsely populated country, where nomadic culture persists in a landscape so vast and empty that you'll recalibrate your understanding of remoteness. This is bucket-list territory for adventurous travelers ready to embrace discomfort for encounters with a way of life disappearing from the planet.

Ulaanbaatar, the capital, is where half of Mongolia's 3.3 million people live—a sprawling mix of Soviet-era blocks, glass towers, ger districts (yurt settlements), and monasteries. The Gandantegchinlen Monastery remains Mongolia's spiritual center, while the National Museum provides essential context on nomadic history and Chinggis Khaan's empire. Zaisan Memorial offers views over the city and surrounding hills. But Ulaanbaatar is a staging point, not the destination—get out to the countryside quickly.

The Gobi Desert delivers the iconic Mongolia experience: Khongoryn Els sand dunes (the "Singing Sands"), Bayanzag's "Flaming Cliffs" where dinosaur fossils were discovered, Yolyn Am's ice gorge persisting through summer. The Orkhon Valley, a UNESCO site, combines waterfalls, ancient Turkish monuments, and excellent horse trekking. Khövsgöl Lake—"Mongolia's Blue Pearl"—offers alpine scenery, reindeer herders, and pristine waters in the north. Terelj National Park provides easy access from UB for rock formations, hiking, and tourist ger camps.

The real Mongolia happens between destinations: staying in nomadic families' gers, drinking fermented mare's milk (airag), helping herd livestock, and experiencing hospitality that feels both generous and pragmatic—they genuinely welcome guests, and you genuinely need their help in this emptiness. The Naadam Festival (mid-July) showcases Mongolia's "three manly games": wrestling, horse racing, and archery—authentic cultural spectacle, not tourist performance.

Infrastructure barely exists outside Ulaanbaatar: roads are tracks across open steppe requiring 4x4 vehicles and GPS. Domestic flights on MIAT Mongolian Airlines connect major centers but are expensive. Tourist infrastructure concentrates in ger camps—permanent settlements of traditional yurts with beds, meals, and occasional hot showers—ranging from basic to surprisingly comfortable. Bring layers: even summer nights are cold, and weather shifts violently.

Safety is generally good—violent crime is rare, though Ulaanbaatar has pickpocketing and occasional assaults in nightlife areas. The vast emptiness poses greater risks: get lost or break down without proper equipment and communication, and you're in serious trouble. Always travel with experienced guides and drivers outside UB. Most nationalities get 30-day visa-free entry. Mongolia welcomes about 550,000 tourists annually—modest numbers concentrated in summer.

Visit June to September—the only realistic window for travel outside Ulaanbaatar. May and October offer fewer crowds but colder temperatures. Winter (November-April) is brutally cold (-30°C common) and logistically challenging. Budget $80-120 daily for organized tours including transport, guides, ger camp accommodation, and meals. Independent travel is possible but requires serious logistics and some Russian language skills.

Mongolia demands adventure mindset: you'll be uncomfortable, dusty, and occasionally wondering why you didn't just go to Iceland. But watching sunset over endless steppe, racing horses with nomadic families, and sleeping under stars unobscured by light pollution delivers perspective on human scale and nature's dominance that's increasingly rare on an urbanized planet.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Montenegro',
    type: 'country',
    country: 'Montenegro',
    category: 'travel',
    lat: 42.7087,
    lng: 19.3744,
    summary: `Montenegro compressed the best of the Balkans into a country smaller than Connecticut: Adriatic coastline rivaling Croatia's, mountains matching Albania's drama, and medieval towns holding their own against anything in the region—all delivered with fewer crowds and slightly lower prices, at least for now. This is the Balkans' breakout destination, discovered but not yet overrun.

Kotor Bay is the showstopper: a fjord-like inlet lined with Venetian-era towns, where Kotor itself clusters below mountains in a maze of marble streets, baroque churches, and defensive walls. Climb the 1,350 steps to San Giovanni fortress at dawn before cruise ship passengers arrive—the bay views justify the quad burn. Perast, a smaller bay town, offers elegant waterfront dining and boat trips to Our Lady of the Rocks island church. Budva balances medieval old town charm with Adriatic beach resort energy—ancient walls by day, beach clubs by night.

The Bay of Kotor steals attention, but Montenegro's interior rewards equally: Durmitor National Park delivers alpine hiking, Tara River Canyon (Europe's deepest), and the dramatic Đurđevića Tara Bridge. Biogradska Gora protects one of Europe's last primeval forests. Skadar Lake, shared with Albania, offers birdwatching, wine tasting in lakeside villages, and kayaking through water lilies. Lovćen National Park contains Njegoš Mausoleum atop Mount Lovćen with 360-degree views.

Infrastructure has improved dramatically: the coastal highway is excellent, though summer traffic crawls. Buses connect major towns reliably. Podgorica's airport handles European connections, while Tivat serves the coast. Accommodation ranges from boutique hotels in restored stone buildings to modern beachfront resorts. English is widely spoken in tourist areas. The coast is developed but not ruined—yet. Prices creep upward annually as Montenegro positions itself as "the new Croatia."

Safety is excellent by regional standards—violent crime is rare, petty theft occurs in tourist zones. Use caution with nightlife and unregistered taxis. Most nationalities get 90 days visa-free; Americans included. Montenegro sees about 2.5 million tourists annually, concentrated on the coast from June to September. This creates summer crowds in Kotor that approach pre-tourism-boom Dubrovnik levels, diminishing the experience.

Visit May, September, or October for ideal weather without peak crowds—the Bay of Kotor is magical in shoulder seasons. Winter (December-March) brings skiing to Kolašin and Žabljak, though facilities are basic by Alpine standards. Budget $60-90 daily for comfortable mid-range travel on the coast, less inland. The Euro makes pricing transparent but limits budget bargains.

Montenegro's challenge is managing success: development pressure increases, especially along the coast, and locals debate how much tourism the country can handle before losing the authenticity that attracts visitors. Inland regions remain wonderfully undiscovered—base yourself in Žabljak or Kolašin to escape coastal crowds entirely.

The country's small size is an advantage: you can swim in the Adriatic in the morning and hike mountains by afternoon. Three days covers the coast, a week adds the interior properly. Montenegro delivers the Balkan experience—complex history, dramatic landscapes, excellent food, and welcoming people—in an accessible, increasingly polished package. Go soon, before everyone else figures out what you already suspected.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Morocco',
    type: 'country',
    country: 'Morocco',
    category: 'travel',
    lat: 31.7917,
    lng: -7.0926,
    summary: `Morocco has perfected the art of accessible exoticism—close enough for weekend breaks from Europe, foreign enough to feel genuinely transported, and organized enough that even cautious travelers can navigate it successfully. This is Africa and the Arab world's gateway destination, welcoming 14 million tourists annually with a tourism infrastructure that mostly works, at least in the well-worn circuits.

Marrakech remains the anchor: the Jemaa el-Fna square's nightly chaos of snake charmers, juice sellers, and storytellers; the labyrinthine souks where you'll buy carpets you don't need after negotiations you'll lose; the Majorelle Garden's blue tranquility; riads (traditional courtyard houses converted to hotels) offering rooftop breakfast with Atlas Mountain views. Fes delivers Morocco's medieval soul more authentically—its medina is larger and less touristified, with leather tanneries and artisan quarters still functioning. Chefchaouen's blue-washed buildings in the Rif Mountains have become Instagram catnip, which tells you both why to go (it's beautiful) and why to hesitate (crowds).

The Sahara beckons from Merzouga and Erg Chebbi: camel treks into dunes, overnight camps under ridiculous stars, sunrise over sand seas. It's touristy and formulaic, but also genuinely magical if you accept the theater. The Atlas Mountains offer Berber villages, hiking from Imlil to Toubkal (North Africa's highest peak), and valleys that see far fewer tourists than coastal cities. Essaouira provides coastal relief: medina without the intensity, beach wind for kitesurfing, grilled sardines, and chilled-out vibes.

Infrastructure is solid where it matters: highways connect major cities, trains link Casablanca, Rabat, Fes, and Marrakech efficiently. Buses (CTM, Supratours) are reliable. Riads range from budget to luxury, often delivering excellent value in restored historic properties. Food is good—tagines, couscous, pastillas—though less varied than Morocco's reputation suggests. Mint tea is ritualistic. English is increasingly common in tourist areas, French remains useful, Arabic and Berber indigenous.

Safety requires street smarts: aggressive touts in medinas, fake guides, persistent sales pressure, occasional scams. Women travelers report significant harassment, especially solo; modest dress helps but doesn't eliminate attention. Petty theft occurs. Use registered guides, negotiate prices firmly upfront, and keep your guard up in tourist areas. That said, violent crime against tourists is rare. Most nationalities get 90 days visa-free.

Visit March-May or September-November for ideal temperatures. Summer heat in Marrakech and desert areas is punishing; winter brings snow to Atlas Mountains and chilly evenings in cities. Budget $50-80 daily for comfortable mid-range travel including decent riad accommodation and guided excursions.

Morocco's mass tourism creates contradictions: the ease of travel comes with commercialization that can feel inauthentic. The souks are working markets but also tourist traps. The hospitality is genuine but also transactional. You'll have magical moments—mint tea in a Saharan camp, getting lost in Fes's medina, Atlas Mountain sunsets—alongside frustrating ones of pushy salesmen and tourist circus atmospheres.

The country has diversified beyond Marrakech: coastal towns like Agadir serve beach resort crowds, Tangier has gentrified significantly, and the Atlas offers trekking infrastructure. But the classic circuit—Marrakech, Fes, Sahara, Chefchaouen—remains popular because it works, delivering an accessible taste of North African culture for travelers who need some comfort with their adventure. Morocco rewards both types: those following well-worn paths and those venturing into Berber villages where tourism hasn't yet transformed every interaction into a transaction.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Mozambique',
    type: 'country',
    country: 'Mozambique',
    category: 'travel',
    lat: -18.6657,
    lng: 35.5296,
    summary: `Mozambique occupies a complicated position in Southern African tourism: blessed with 2,500 kilometers of Indian Ocean coastline, marine parks, and Portuguese colonial heritage, yet burdened by poor infrastructure, northern insurgency, and development that's stalled despite decades of peace since civil war ended in 1992. This is Africa for travelers willing to work for rewards—stunning when it delivers, frustrating when it doesn't.

The Bazaruto and Quirimbas Archipelagos offer Mozambique's headline attractions: luxury island lodges with pristine beaches, world-class diving and snorkeling, dugong and turtle encounters, and Arabian trading post heritage. These cater to high-end safari circuits and South African holiday crowds with helicopter transfers and all-inclusive packages. Tofo Beach provides backpacker alternatives with manta rays, whale sharks, and beach shack vibes. Vilanculos serves as the gateway to Bazaruto, with dhow cruises and budget beach accommodation.

Maputo, the capital, has Portuguese colonial architecture crumbling alongside modern development—the train station is magnificent, the fortress museum worthwhile, the seafood excellent. Ilha de Moçambique, a UNESCO World Heritage site, preserves Swahili-Portuguese trading post history on a coral island with decaying colonial mansions and working fishing communities. Gorongosa National Park has recovered dramatically from civil war devastation, offering safari experiences with fewer crowds than East African parks, though wildlife density remains lower.

Infrastructure is Mozambique's persistent challenge: roads are poor outside main routes, domestic flights are expensive and unreliable, and the north-south route (EN1) requires days of travel with uncertain conditions. Accommodation ranges from luxury lodges to basic pensions, with a frustrating gap in quality mid-range options outside major centers. English is limited—Portuguese is essential outside top-end resorts. Power cuts are frequent, internet is patchy, and malaria is endemic.

Safety requires careful navigation: Cabo Delgado province in the north faces Islamist insurgency—avoid entirely. Maputo has crime issues including muggings and carjackings; use caution after dark and avoid displaying wealth. Land mines from the civil war persist in rural areas—stick to established routes. Petty theft targets tourists throughout. Most nationalities need visas ($50-80), obtainable at borders or airports though land border crossings can be bureaucratic nightmares.

Mozambique sees about 2.8 million tourists annually, many from neighboring South Africa for beach holidays. Visit May to November for the dry season; December to April brings rains, heat, and cyclone risk along the coast. June to October offers best diving conditions. Budget $60-100 daily for mid-range travel, though luxury island lodges run $500+ per night.

The country presents stark contrasts: world-class marine environments alongside extreme poverty, Portuguese charm alongside crumbling infrastructure, friendly locals alongside persistent corruption. Mozambique rewards patient, flexible travelers with African beach experiences that rival Tanzania's Zanzibar or Kenya's coast, usually with fewer crowds. But it punishes rigid planners and those expecting things to work smoothly.

The southern coast from Maputo to Vilanculos is most accessible and developed. Northern Mozambique around Pemba and Quirimbas offers adventure but requires more resources and flexibility. Mozambique is getting there—slowly—as investment improves infrastructure and tourism develops. For now, it remains a destination for travelers who've already done the easier African countries and are ready for one that demands more effort but offers authentic experiences away from safari circuit polish.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  },
  {
    name: 'Myanmar',
    type: 'country',
    country: 'Myanmar',
    category: 'travel',
    lat: 21.9162,
    lng: 95.9560,
    summary: `Myanmar (Burma) presents one of travel's most ethically complex situations: a country of extraordinary cultural and natural beauty rendered off-limits by military dictatorship, civil war, and humanitarian crisis since the February 2021 coup. This is not a "travel with caution" situation—visiting Myanmar currently means funding a brutal regime while traveling through active conflict zones. The honest answer for ethical travelers is: don't go now.

Before 2021, Myanmar was Southeast Asia's emerging destination: Bagan's 2,000 Buddhist temples spread across plains with hot air balloon sunrises; Inle Lake's leg-rowing fishermen and floating gardens; Yangon's golden Shwedagon Pagoda and colonial architecture; Mandalay's monasteries and royal palace; remote hill tribe villages in Shan and Chin states; Ngapali Beach's Bay of Bengal coastline. Tourism grew from barely 300,000 visitors in 2010 to 4.4 million by 2019 as the country opened after decades of isolation.

The 2021 military coup destroyed this progress. The Tatmadaw (military) overthrew the elected government, imprisoned Aung San Suu Kyi, and violently suppressed protests. Civil war erupted between the military and ethnic armed groups plus newly formed resistance forces. Thousands have been killed, entire towns burned, and displacement affects millions. The economy collapsed, infrastructure deteriorated, and international airlines suspended routes.

Visiting Myanmar now is problematic on multiple levels: visa fees, airport taxes, hotel payments, and many tourism services directly fund the military regime. The kyat currency manipulation forces visitors to use military-controlled exchange rates. Security is genuinely dangerous—active combat in multiple states, arbitrary arrests, and civil unrest. Most Western governments advise against all travel to Myanmar, with specific warnings for border regions where fighting is intense.

The tourism infrastructure that existed has largely collapsed: hotels have closed, tour operators suspended operations, domestic flights are unreliable, and internet is heavily restricted with periodic shutdowns. The few tourists who visit now are mostly regional visitors or those with family connections, not independent travelers. International hotel chains have withdrawn, and responsible tour operators refuse to operate in Myanmar.

For those who insist on information: e-visas are nominally available but difficult to obtain. Most nationalities required visas even before the coup. The dry season (November-February) was optimal for travel, but weather is irrelevant when the fundamental situation is unsafe and unethical. Prices were among Southeast Asia's cheapest, but the moral cost is unacceptable.

Myanmar's people are suffering—economically, politically, and physically. Many inside the country argue that tourism boycotts hurt ordinary citizens who depend on the industry. This is true and tragic. But the counterargument is stronger: tourism revenue sustains the military regime's control. The international community, including most responsible tour operators and travel writers, has concluded that visiting Myanmar now is irresponsible.

If you're drawn to Myanmar's culture: Thailand's northern regions, Bangladesh's Buddhist sites, and Sri Lanka offer alternatives. For those specifically connected to Myanmar through family or humanitarian work, the calculation differs. But for standard tourism? Myanmar is closed—not officially, but ethically. The temples, lakes, and people will still be there when the political situation resolves. Responsible travel sometimes means choosing not to visit, regardless of personal desire. Myanmar, tragically, is one of those times.`,
    issues: JSON.stringify([]),
    topStories: JSON.stringify([]),
    storyCount: 0
  }
]

async function addTravelSummariesToDatabase() {
  console.log('🗺️  Adding Travel & Tourism summaries for Batch 8 (13 countries)...\n')

  for (const country of COUNTRIES) {
    try {
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: country.type,
            category: country.category
          }
        },
        create: {
          name: country.name,
          type: country.type,
          country: country.country,
          category: country.category,
          lat: country.lat,
          lng: country.lng,
          summary: country.summary,
          issues: country.issues,
          topStories: country.topStories,
          storyCount: country.storyCount,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        update: {
          summary: country.summary,
          issues: country.issues,
          topStories: country.topStories,
          storyCount: country.storyCount,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${country.name} - Travel & Tourism summary added`)
    } catch (error) {
      console.error(`❌ Error adding ${country.name}:`, error)
    }
  }

  console.log('\n🎉 Travel Batch 8 Complete!')
  console.log('📊 Countries processed: Luxembourg, Madagascar, Malawi, Malaysia, Mali,')
  console.log('   Mauritania, Mexico, Moldova, Mongolia, Montenegro, Morocco,')
  console.log('   Mozambique, Myanmar')
}

addTravelSummariesToDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
