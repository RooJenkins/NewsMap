import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries for Travel Batch 3 with their writeups
const countries = [
  {
    name: 'Central African Republic',
    lat: 6.6111,
    lng: 20.9394,
    writeup: `The Central African Republic isn't on anyone's bucket list, and that's putting it mildly. This is one of the world's least-visited countries, with tourism hovering around 10,000-15,000 visitors annually—most of them aid workers, diplomats, or researchers. But for the truly adventurous traveler who's exhausted the usual "off-the-beaten-path" destinations, CAR offers something increasingly rare: genuine remoteness and wildlife spectacles that rival anywhere in Africa.

Dzanga-Sangha Special Reserve in the southwest is the crown jewel—a UNESCO World Heritage site where you can witness forest elephants gathering by the dozens at mineral-rich clearings called "bais." The experience of sitting meters from these giants as they emerge from pristine rainforest is otherworldly. Manovo-Gounda St. Floris National Park, though severely impacted by poaching, still holds populations of elephants, lions, and the critically endangered black rhino in its northern savannas. Bangui, the capital, offers the Boganda Museum and lively riverside markets along the Ubangi River, though don't expect much tourist infrastructure.

Let's be honest about the challenges: CAR ranks among the world's most dangerous destinations for travelers. Since 2013, the country has experienced ongoing conflict between armed groups, with violence particularly acute outside Bangui. Roads are abysmal when they exist at all, and most of the country becomes inaccessible during the rainy season (May-October). What few hotels exist are basic and expensive. Most visitors fly into Bangui's M'Poko International Airport, where visa-on-arrival is theoretically available but pre-arranging entry with CAR's embassies abroad is strongly recommended. You'll need a yellow fever certificate and comprehensive evacuation insurance.

Travel here requires armed escorts, pre-arranged security, and partnering with specialized operators like African Parks who manage Dzanga-Sangha. The French Foreign Ministry and U.S. State Department maintain Level 4 "Do Not Travel" advisories. That said, Dzanga-Sangha itself has remained relatively stable under conservation management, and several operators run gorilla tracking and elephant viewing experiences there, though at premium prices (permits around $400).

The dry season (December-April) offers the best access, though "best" is relative—expect heat, dust, and serious logistical challenges. If you make it here, you'll likely have those elephant clearings entirely to yourself. This is travel at its most raw and unfiltered, where the wildlife encounters rival anywhere on Earth, but only for those with serious resources, risk tolerance, and a genuine sense of adventure over comfort.`
  },
  {
    name: 'Chad',
    lat: 15.4542,
    lng: 18.7322,
    writeup: `Chad is Africa's least-visited country, receiving fewer than 20,000 international tourists annually. Most travelers who do venture here are safari enthusiasts chasing one of the continent's last great wildlife secrets or adventurers drawn to the Sahara's most dramatic landscapes. This is not a destination for casual tourists—but for those willing to embrace serious logistical challenges, Chad delivers experiences impossible to find elsewhere.

The Zakouma National Park in the southeast has undergone a remarkable conservation turnaround. Once decimated by poaching, it now hosts one of Central Africa's largest elephant populations (over 500) along with lions, giraffes, and seasonal migrations of thousands of buffalo and topi. African Parks manages the reserve superbly, and the semi-luxury tented camps here rival anywhere on the continent. Meanwhile, the Ennedi Plateau in the northeast is a mind-bending landscape of sandstone arches, canyons, and rock formations that wouldn't look out of place on Mars, dotted with ancient rock art dating back 7,000 years. Guelta d'Archei, a permanent waterhole in a canyon, attracts one of the Sahara's last wild camel populations.

N'Djamena, the capital, is a gritty frontier city with a lively Grand Marché and surprising Franco-African restaurant culture. Infrastructure across Chad is minimal—paved roads barely exist outside N'Djamena, and overland travel requires 4x4 vehicles, experienced drivers, and serious preparation. The country spans three climate zones, from Sahara desert in the north to Sahelian grasslands in the center to tropical savanna in the south, meaning travel conditions vary dramatically by region.

Security remains a significant concern. The Lake Chad Basin area faces Boko Haram activity, and northern border regions with Libya see occasional instability. Most visitors stick to organized tours with experienced operators. Tourist visas require pre-arrangement through Chadian embassies and a letter of invitation, typically provided by tour companies. Yellow fever vaccination is mandatory. Travel insurance with evacuation coverage is essential.

Zakouma is accessible December through May during the dry season when wildlife viewing peaks. Ennedi expeditions run October through March when temperatures are tolerable (Saharan summer heat exceeds 45°C/113°F). Expect costs to run high—getting here requires international flights through Paris, Addis Ababa, or Khartoum to N'Djamena, then charter flights to remote areas. But if you're chasing authentic wilderness experiences and landscapes that feel genuinely undiscovered, Chad rewards intrepid travelers with encounters few others will ever have.`
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    writeup: `Chile is the answer to the question "What if a country were a 2,700-mile longitudinal adventure?" Stretching from the Atacama Desert—the driest place on Earth—down through wine country, glacial lakes, and temperate rainforests, all the way to the wind-scoured wilderness of Patagonia, Chile packs absurd geographical diversity into one narrow strip hugging the Pacific. It's South America's most stable and developed economy, making it an ideal entry point for nervous first-timers, while still offering raw adventure that rivals anywhere on the continent.

Santiago is where most journeys begin—a cosmopolitan capital of 6 million nestled against the Andes with world-class museums, thriving culinary scene, and one of Latin America's best metro systems. But the real draws lie north and south. The Atacama around San Pedro de Atacama delivers otherworldly salt flats, geysers, and sunset over Mars-like valleys. Torres del Paine National Park in Patagonia is simply one of the world's great trekking destinations, with the W Trek and O Circuit winding past turquoise lakes, granite spires, and the Southern Patagonian Ice Field. Easter Island (Rapa Nui), though a five-hour flight from Santiago, offers those iconic moai statues and Polynesian culture utterly unlike mainland Chile. Valparaíso's colorful hillside neighborhoods and bohemian vibe provide the perfect counterpoint to Santiago's business-district energy. Wine enthusiasts shouldn't miss the Maipo, Colchagua, and Casablanca valleys—Chile's wine regions rival Napa at a fraction of the price.

Chile sees around 5.5 million international visitors annually, concentrated December-March (summer) when Patagonia is accessible and beach towns like Viña del Mar fill up. But shoulder seasons (September-November and March-April) offer better deals and fewer crowds in places like Torres del Paine. The country's infrastructure is excellent by South American standards—domestic airlines connect major destinations, long-distance buses are comfortable and reliable, and toll highways link key cities. Accommodation ranges from budget hostels (around $15/night) to luxury lodges in Patagonia ($500+).

Most travelers need no visa for stays under 90 days, and crime rates are relatively low outside certain Santiago neighborhoods. That said, Chile isn't cheap—prices approach European levels in popular tourist areas. The cuisine has evolved dramatically, with Santiago now boasting innovative restaurants like Boragó showcasing native ingredients, while street food like completos (loaded hot dogs) and fresh seafood markets offer budget-friendly options.

Chile's appeal lies in its combination of adventure and accessibility. You can trek glaciers in the morning and sip Carmenère in a vineyard by evening, all without the infrastructure anxieties that plague travel elsewhere in South America. Whether you're chasing Patagonia's mountains, the Atacama's starscapes, or simply excellent wine and ceviche, Chile delivers without making you work too hard for it.`
  },
  {
    name: 'China',
    lat: 35.8617,
    lng: 104.1954,
    writeup: `China doesn't do half-measures. With 55 UNESCO World Heritage sites, landscapes ranging from Himalayan peaks to tropical beaches, 5,000 years of recorded history, and cities that make New York look quaint, this is travel at overwhelming scale. Over 65 million international visitors annually pre-2020 made China one of the world's most-visited countries, though those numbers are rebuilding post-pandemic. The challenge isn't finding things to see—it's accepting you'll barely scratch the surface.

The Great Wall, Forbidden City, and Terracotta Army are the obvious headliners, and yes, they're mandatory. But China's real magic happens when you venture beyond the Beijing-Xi'an-Shanghai circuit. Guilin's karst limestone peaks rising from emerald rivers look like classical scroll paintings come to life. The Tibetan Plateau around Lhasa delivers high-altitude spirituality and landscapes that feel otherworldly. Zhangjiajie's sandstone pillars inspired Avatar's Hallelujah Mountains. The Silk Road cities of Kashgar and Dunhuang blend Central Asian culture with Chinese influences. Hangzhou's West Lake and surrounding tea plantations offer respite from megacity chaos. And provinces like Yunnan and Guizhou showcase ethnic minority cultures—Miao, Dong, Yi—with traditions and architecture utterly distinct from Han Chinese culture.

Modern China is an infrastructure marvel. High-speed rail connects 350+ cities at 200mph+, making cross-country travel faster and more comfortable than flying. Shanghai's Bund juxtaposes 1930s art deco with Pudong's sci-fi skyline. Shenzhen has transformed from fishing village to tech megalopolis in 40 years. WeChat Pay and Alipay have made China nearly cashless, though foreign credit cards can be problematic—bring cash and prepare for tech frustrations.

The elephant in the room: travel here requires navigating China's political reality. Internet censorship means no Google, Facebook, or Western social media without VPNs (which authorities increasingly block). Surveillance is pervasive, especially in Xinjiang and Tibet, where travel requires special permits and monitoring. English is limited outside major tourist sites. Most travelers need a visa arranged in advance through Chinese consulates—plan 2-4 weeks for processing.

October-November brings ideal weather across most of China with autumn colors and bearable temperatures. Spring (March-May) works too, though air quality in northern cities can be problematic. Avoid Golden Week holidays (early October, Lunar New Year) when domestic tourism explodes and sites become unbearably crowded. Costs run the spectrum—budget backpackers can survive on $30-40/day using hostels and street food, while luxury travelers can spend $500+ daily at international hotels and high-end restaurants. Chinese cuisine varies wildly by region—Sichuanese fire, Cantonese dim sum, hand-pulled Lanzhou noodles, Uighur lamb skewers—making it one of the world's great food adventures.

China demands patience, flexibility, and cultural sensitivity. The rewards—breathtaking landscapes, fascinating history, dynamic cities—are immense, but only for travelers willing to engage on China's terms rather than expecting it to accommodate theirs.`
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    writeup: `Colombia has pulled off one of tourism's greatest comebacks. Once synonymous with narco-violence and no-go zones, it now welcomes over 4.5 million international visitors annually, drawn by Caribbean beaches, Andean coffee country, Amazon rainforest, and cities that pulse with energy. The transformation isn't complete—security concerns persist in rural areas—but most of Colombia is now safer than many major U.S. cities, and travelers who've avoided it for decades are realizing what they've missed.

Cartagena's walled colonial old town is the postcard image—colorful buildings, bougainvillea-draped balconies, and Caribbean coastline creating one of South America's most photogenic cities. But linger beyond the tourist crowds and you'll find Getsemaní's street art and local bars offering a grittier, more authentic vibe. Medellín has reinvented itself from cartel capital to innovative urban center, with cable cars connecting hillside barrios, world-class museums, and nightlife that rivals anywhere in Latin America. Bogotá, at 8,600 feet, is a sprawling capital mixing Spanish colonial heritage in La Candelaria with cutting-edge restaurants and museums like the Gold Museum (Museo del Oro) showcasing pre-Colombian treasures.

The real revelation is Colombia's landscapes. The Zona Cafetera around Salento delivers hillsides of coffee plantations, the world's tallest palm trees in Valle de Cocora, and fincas where you can learn harvest-to-cup coffee production. Tayrona National Park on the Caribbean coast combines pristine beaches with jungle-covered mountains. San Agustín's mysterious stone statues date back over 1,000 years. The Amazon accessed via Leticia puts you in pristine rainforest. And coastal Nuquí on the Pacific offers whale-watching and surf breaks in nearly tourist-free isolation.

Getting around requires planning. Domestic flights connect major cities efficiently, but overland travel via bus is slow (though comfortable on major routes). Some rural areas remain affected by armed groups, so check current advisories before venturing off main tourist circuits. That said, places like Cartagena, Medellín, Bogotá, and the coffee region are thoroughly safe and well-touristed. Most nationalities receive visa-free entry for 90 days.

Colombia's climate varies dramatically by altitude—Cartagena swelters year-round, while Bogotá requires layers. December-March and July-August are peak dry seasons in most regions, though Caribbean coast and coffee country are pleasant year-round. Budget travelers can get by on $30-40/day using hostels and street food, while mid-range travelers will spend $80-100/day comfortably. Colombian food deserves more credit than it gets—bandeja paisa (the massive Antioquian platter), arepas in every regional variation, fresh tropical fruit, and increasingly sophisticated restaurant scenes in major cities.

Colombians are famously warm and proud of their country's turnaround, eager to share their culture with visitors who've finally started showing up. The country's diversity—geographically, culturally, ecologically—means you could spend months here and barely repeat an experience. Whether you're dancing salsa in Cali, diving off San Andrés, or sipping single-origin coffee overlooking emerald valleys, Colombia delivers the energy and authenticity that makes South American travel addictive.`
  },
  {
    name: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    writeup: `Costa Rica perfected the art of accessible adventure. This tiny Central American nation (smaller than West Virginia) packs an absurd density of biodiversity—5% of the world's species in 0.03% of its landmass—into cloud forests, volcanic peaks, Caribbean and Pacific coastlines, and rainforests teeming with wildlife. Over 3 million visitors annually make it Central America's tourism heavyweight, and it's easy to see why: Costa Rica figured out how to offer nature experiences that feel wild without actually being difficult.

The hits are genuine: Manuel Antonio National Park combines pristine beaches with jungle trails where sloths, monkeys, and iguanas are practically guaranteed sightings. Monteverde Cloud Forest feels like walking through mist-shrouded Jurassic Park vegetation, with hanging bridges and zip lines for those who need adrenaline with their ecology. Arenal Volcano, though no longer actively erupting, still dominates the landscape near La Fortuna, where hot springs and adventure activities abound. Tortuguero's canals on the Caribbean side offer boat-based wildlife watching and sea turtle nesting (July-October). And the Osa Peninsula's Corcovado National Park is where serious wildlife enthusiasts go—scarlet macaws, tapirs, jaguars (if you're lucky), and far fewer tourists than the northern parks.

Costa Rica's "pura vida" ethos isn't just marketing—it's a genuine cultural approach to life that translates into relaxed, welcoming travel. The country abolished its military in 1949 and invested in education and conservation instead, protecting over 25% of its territory in parks and reserves. Most visitors fly into San José's Juan Santamaría Airport, though Liberia in the northwest offers easier access to Guanacaste beaches. Domestic flights on SANSA or Aerobell connect major destinations, while rental cars give you flexibility (4x4 recommended for wet season and remote areas). Roads range from decent highways to bone-rattling dirt tracks depending on where you're headed.

No visa required for most nationalities for stays under 90 days, and Costa Rica is among Latin America's safest destinations. That safety and ease comes at a price—literally. Costa Rica is expensive by regional standards, with tourist areas charging near-U.S. prices. Budget travelers can manage on $40-50/day staying in hostels and eating at sodas (local diners), while mid-range comfort runs $100-150/day. All-inclusive beach resorts and eco-lodges push into the $200-400+ per day range.

Dry season (December-April) brings the best weather and crowds, with prices peaking during Christmas/New Year and Easter. Green season (May-November) sees afternoon rains but also lush landscapes, fewer tourists, and significant discounts—plus it's when turtles nest and rivers run full for rafting. The Pacific coast stays drier than the Caribbean generally.

The food won't blow your mind—gallo pinto (rice and beans), casados (set meals), and fresh fruit are staples—but fresh seafood on both coasts and the growing farm-to-table scene in places like Santa Teresa offer highlights. The real attraction is the ease with which you can go from surfing world-class breaks to spotting quetzals in cloud forest to soaking in volcanic hot springs, all without the infrastructure headaches that plague much of the developing world. Costa Rica might be the closest thing to eco-tourism done right at scale.`
  },
  {
    name: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    writeup: `Croatia went from war-torn former Yugoslav republic to Mediterranean darling in the span of two decades. The Dalmatian Coast's azure waters, medieval walled cities, and over 1,000 islands create a nearly perfect summer holiday formula—one that hasn't escaped attention. Over 20 million visitors annually now descend on a country of just 4 million people, concentrating heavily on coastal highlights that risk loving Dubrovnik and Split to death. But venture beyond peak season and the main attractions, and Croatia still delivers that rare combination of natural beauty, rich history, and Mediterranean lifestyle.

Dubrovnik is the obvious showstopper—George Bernard Shaw called it "paradise on Earth," and walking the limestone walls encircling the Old Town as sunset colors the Adriatic, you'll understand why. Game of Thrones filming here only intensified the crowds, so visit early morning or late evening, or better yet, come in shoulder season. Split's Diocletian's Palace is a living Roman ruin—4th-century walls now house bars, apartments, and shops in a fantastically atmospheric maze. Hvar and Korčula offer island glamour with medieval cores, while Vis and Mljet provide more isolated escapes. Plitvice Lakes National Park, with its cascading turquoise lakes and waterfalls, is Croatia's inland masterpiece, though it too gets mobbed in summer.

The surprise is how much Croatia exists beyond the coastal resort circuit. Zagreb, the capital, is an underrated city with Austro-Hungarian architecture, excellent museums, and a café culture that rivals Vienna. Istria in the northwest blends Italian and Croatian influences—hilltop towns like Motovun and Rovinj, truffle-rich forests, and excellent wines. The Paklenica National Park offers serious hiking and climbing in the Velebit mountains. And war history remains visible in places like Vukovar, a sobering reminder of 1990s conflicts.

Getting around is straightforward: rental cars offer flexibility, while ferries connect islands and coastal towns. Croatia uses the kuna (soon converting to Euro), and English is widely spoken in tourist areas. EU and many other nationals need no visa for stays under 90 days. The country's infrastructure is excellent—roads are well-maintained, accommodation ranges from family-run pansions to luxury resorts, and Croatia is safe by any measure.

Summer (June-September) brings perfect beach weather and peak crowds—Dubrovnik's cruise ship arrivals can overwhelm the Old Town. May and September-October offer better balance of good weather and fewer tourists. Expect higher prices along the coast: budget travelers might manage €50-60/day, mid-range €100-120/day, while coastal hotels in peak season easily hit €150-250+ per night.

Croatian food leans heavily on seafood along the coast—fresh fish, octopus salad, black risotto—while the interior favors heartier meat-based dishes with Austrian and Hungarian influences. The wine scene is underrated, particularly Istrian Malvazija whites and Plavac Mali reds from Dalmatia. Croatian craft beer has taken off too, offering alternatives to the ubiquitous Karlovačko and Ožujsko lagers.

Croatia's appeal is obvious—dramatic coastlines, well-preserved history, great weather, and EU standards without Western European prices (though the gap is closing). It's deservedly popular, but timing and willingness to explore beyond Dubrovnik-Split-Hvar make the difference between fighting cruise crowds and discovering why locals love this place.`
  },
  {
    name: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    writeup: `Cuba is frozen in time—except it's not, and therein lies its strange appeal. Yes, you'll find 1950s Chevys cruising past colonial facades and Revolutionary rhetoric painted on weathered walls. But you'll also find paladares (private restaurants) serving creative nueva cocina cubana, boutique casas particulares with rooftop bars, and a generation of young Cubans navigating socialism meets limited capitalism in real time. Roughly 4.5 million tourists visit annually, with Canadians and Europeans dominating since U.S. travel restrictions remain byzantine. This is a complicated place—beautiful, frustrating, compelling, and unlike anywhere else you'll travel.

Havana is the main event—Habana Vieja's crumbling baroque architecture, the Malecón seawall where locals gather at sunset, vintage cars that are both photogenic cliché and actual daily transportation, and a music scene that permeates every corner. Beyond the capital, Viñales Valley offers limestone mogotes rising from tobacco fields (the source of Cuba's famous cigars), horseback riding, and rural Cuban life. Trinidad is a perfectly preserved Spanish colonial town—cobblestone streets, pastel houses, salsa music in the plazas. Santiago de Cuba in the east pulses with Afro-Caribbean culture distinct from Havana. Varadero provides the beach resort experience if that's your thing, though it's also the most sanitized, least Cuban part of the island.

Travel here requires patience and lowered expectations. Hotels range from all-inclusive resorts to state-run joints with spotty service to increasingly common casas particulares (private homestays) that offer the best value and local insight. Infrastructure is rough—roads deteriorate rapidly outside main routes, internet is limited to WiFi parks and hotel lobbies, and air conditioning is a luxury. Viazul buses connect major tourist destinations, though they're often booked solid. Renting cars is possible but expensive and comes with its own headaches. Domestic flights work for longer distances.

The U.S.-Cuba dance remains complicated. American travelers need to select one of 12 authorized categories (Support for the Cuban People is most common), keep records, and avoid certain government entities. Most other nationalities obtain tourist cards easily through airlines or embassies. Cuba uses two currencies—CUC (tourist pesos, now being phased out) and CUP (regular pesos)—creating a confusing dual economy. Bring cash (euros or Canadian dollars preferred; U.S. dollars incur extra fees) since credit cards don't work, and ATMs are unreliable.

Timing matters: November-April offers dry, comfortable weather and peak crowds. Summer (May-October) brings heat, humidity, and hurricane risk but fewer tourists and potentially better deals. That said, tourism has increased prices dramatically—Cuba is no longer the budget destination it was a decade ago. Budget travelers might scrape by on $40-50/day, while comfortable travel runs $80-120/day or more.

Cuban food has a terrible reputation, and much of it is deserved—state restaurants serve monotonous combinations of rice, beans, pork, and chicken. But the expanding paladar scene in Havana and Trinidad showcases talented chefs working with limited ingredients. Mojitos, cuba libres, and Havana Club rum flow freely. Don't expect luxury or efficiency, but do expect music everywhere—son, salsa, rumba—played with genuine skill and passion.

Cuba is travel's ultimate love-it-or-hate-it destination. Some find it romantic and real; others find it dilapidated and difficult. Either way, you should go soon. The island is changing—slowly by global standards, rapidly by Cuban ones—and whatever comes next won't be this particular version of frozen-in-time socialist Caribbean.`
  },
  {
    name: 'Cyprus',
    lat: 35.1264,
    lng: 33.4299,
    writeup: `Cyprus is three islands in one—Greek Cyprus in the south, Turkish Cyprus in the north, and a UN buffer zone down the middle. This divided Mediterranean island has been caught between empires for millennia: Greek, Roman, Byzantine, Ottoman, British. The result is a layered cultural palimpsest with excellent beaches, impressive archaeological sites, and a complicated political situation that most of its 4 million annual visitors happily ignore while working on their tans.

The Greek Cypriot south is where most visitors land—Larnaca and Paphos international airports connect to Europe via budget carriers. Paphos Archaeological Park delivers Greco-Roman mosaics that rival anything in Pompeii. Limassol blends beach resort vibe with a revitalized old town and wine region access. Ayia Napa and Protaras are the party/beach resort epicenters—think Ibiza lite with better weather and worse music. But venture inland to the Troodos Mountains, and you'll find Byzantine painted churches (ten are UNESCO-listed), mountain villages clinging to hillsides, and Cyprus's surprising wine culture producing Commandaria, one of the world's oldest named wines still in production.

Cross into Turkish-controlled northern Cyprus (technically the unrecognized Turkish Republic of Northern Cyprus), and the atmosphere shifts. Kyrenia (Girne) offers a gorgeous harbor castle and mountain backdrop. Famagusta's walled old city contains Gothic ruins and the eerie abandoned resort district of Varosha, frozen since 1974. North Nicosia showcases Ottoman architecture and a more affordable, less touristy vibe. Crossing is straightforward these days—you can walk across at Nicosia/Lefkosia or drive through at several checkpoints, though rental cars from the south can't always go north (check in advance).

Cyprus enjoys 300+ days of sunshine, making it nearly year-round viable. Summer (June-September) is hot (35°C+/95°F+) and busy, especially in beach areas. Spring (March-May) and fall (September-November) offer ideal conditions—warm enough for swimming, cool enough for hiking, and fewer crowds. Winter is mild but rainy, with Troodos mountains receiving enough snow for skiing (yes, really—tiny but ski-able).

EU citizens need no visa; most others get 90-day entry stamps. Cyprus uses the euro in the south, Turkish lira in the north. English is widely spoken, a vestige of British colonial rule. Infrastructure is excellent in the south—modern highways, extensive bus networks, and accommodation ranging from backpacker hostels to luxury beach resorts. The north is rougher around the edges but cheaper.

The food scene is excellent: mezze spreads featuring hummus, halloumi (Cyprus's salty cheese), dolmades, grilled meats, and local wines. Greek Cypriot tavernas and Turkish Cypriot kebab houses offer overlapping but distinct cuisines reflecting each community's traditions. Fresh fish along the coast, mountain trout in Troodos, and surprisingly good local craft beer add variety.

Cyprus often gets dismissed as just another Mediterranean beach destination, but that sells it short. The archaeology is genuinely impressive, the mountain villages offer authentic escapes from resort sprawl, and the divided-island dynamic adds an unexpected geopolitical dimension. It's accessible, affordable (especially the north), safe, and offers more substance than typical sun-and-sand destinations—provided you're willing to venture beyond the beach lounger.`
  },
  {
    name: 'Czechia',
    lat: 49.8175,
    lng: 15.4730,
    writeup: `Czechia (Czech Republic if you insist on the longer form) has been riding a tourism wave since the Velvet Revolution, with over 21 million international visitors annually—many of them making a beeline for Prague and calling it a trip. That's a shame because while Prague deserves its reputation as one of Europe's most beautiful cities, the country beyond offers castle-studded countryside, world-class beer culture, spa towns, and medieval cores without the crush of tourists photographing the Astronomical Clock for the thousandth time.

Prague is unavoidable and rightly so: the Charles Bridge at dawn, Prague Castle's Gothic majesty, Old Town Square's architectural feast, the Vltava River cutting through it all. But the city strains under 8+ million annual visitors, with the center feeling like a theme park version of itself. Get beyond Old Town—explore Vinohrady's cafés and parks, Žižkov's alternative edge, Letná's beer gardens overlooking the city. Day trips to Kutná Hora (Gothic bone church and medieval silver-mining town) or Karlštejn Castle provide easy escapes.

Head to Český Krumlov in South Bohemia for a fairy-tale Renaissance town curled around the Vltava, though be warned it's discovered by tour groups now. Olomouc offers a UNESCO-listed city center with a fraction of Prague's crowds. Brno, the country's second city, has evolved into a surprisingly hip university town with good nightlife and access to the Moravian wine region—yes, Czech wine exists and doesn't suck. Plzeň (Pilsen) and České Budějovice (Budweis) are pilgrimage sites for beer lovers, where you can tour the breweries that gave their names to beer styles drunk worldwide.

The Bohemian Switzerland National Park near the German border features sandstone formations and the iconic Pravčická Gate arch. The Moravian Karst's limestone caves and the Macocha Abyss offer dramatic underground landscapes. And Czech "spa towns" like Karlovy Vary and Mariánské Lázně showcase ornate Belle Époque architecture built around thermal springs—less about bikini selfies, more about "taking the waters" in grand colonnades.

Czech infrastructure is excellent: efficient trains connect major cities, roads are well-maintained, and public transport in Prague rivals Western European capitals. The country uses the Czech crown (koruna), and while it's EU, it hasn't adopted the euro. Czechia is very affordable by Western European standards—a half-liter of excellent Czech beer costs around $1-2, hearty meals $8-12, and mid-range hotels $60-80/night.

Food is hearty Central European fare: svíčková (beef in cream sauce), goulash, roast pork with dumplings, and trdelník (tourist-trap sweet pastry) everywhere in Prague. The real revelation is the beer—Czechs consume more per capita than anyone globally. Pilsner Urquell, Budvar, and Kozel are the famous exports, but every region has local breweries producing fantastic lagers and increasingly creative craft beers.

Most visitors come April-September, with May and September offering the best balance of good weather and manageable crowds. Christmas markets (November-December) transform Prague into winter wonderland but also attract massive crowds. Visa-free for EU, US, Canada, and many others for 90 days within Schengen area.

Czechia delivers that rare combination of stunning architecture, genuine cultural depth, and affordability that's increasingly hard to find in Western Europe. Prague deserves a few days, but the country's soul lies in those provincial towns, castle ruins, and traditional pubs where locals still gather over half-liters of pilsner, debating everything and nothing.`
  },
  {
    name: 'Democratic Republic of the Congo',
    lat: -4.0383,
    lng: 21.7587,
    writeup: `The DRC is not for casual tourists. Africa's second-largest country by area sees perhaps 50,000-100,000 foreign visitors annually—mostly business travelers, aid workers, and diplomats, with a handful of hardcore wildlife enthusiasts chasing mountain gorillas or bonobo encounters. This is one of the world's most challenging travel destinations: decades of conflict, crumbling infrastructure, minimal tourist facilities, and active instability in eastern regions. But it also contains some of the continent's most spectacular wildlife and landscapes, including half the world's remaining mountain gorillas.

Virunga National Park in the east is the main draw for the few travelers who do venture here. Africa's oldest national park harbors mountain gorillas in misty volcanic highlands (gorilla permits around $400), plus the lava lake of Mount Nyiragongo—one of the world's largest—which you can trek to and camp beside overnight. The experience of watching a churning cauldron of molten rock under stars is genuinely otherworldable. However, Virunga sits in North Kivu, where M23 rebels and various armed groups create ongoing security concerns. The park closes periodically when fighting flares up.

Salonga National Park in the center hosts bonobos—our closest relatives alongside chimps, found only in the DRC—though reaching it requires serious logistics. Okapi Wildlife Reserve protects the rare forest giraffe. Garamba National Park in the northeast once had Africa's last northern white rhinos (before they were poached to local extinction) but still holds elephants and other wildlife in savanna landscapes. Kahuzi-Biéga National Park offers eastern lowland gorilla tracking, though it too faces security challenges.

Kinshasa, the capital, is a sprawling megalopolis of 15+ million where French colonial architecture decays next to modern towers. The city pulses with Congolese rumba and soukous music—this is where much of modern African popular music was born. But it's also chaotic, with terrible traffic, limited tourist infrastructure, and a reputation for corruption. Kisangani and Goma serve as gateways to eastern parks but are rough-edged frontier towns.

Getting here requires visas arranged through DRC embassies, often requiring invitation letters. Yellow fever vaccination is mandatory. Infrastructure is nearly non-existent—paved roads barely exist outside Kinshasa, and the country's massive size makes overland travel extremely difficult. Most visitors fly domestically on carriers like Congo Airways, though safety records vary. Travel outside Kinshasa and specific parks generally requires organized tours with experienced operators.

Security is the overwhelming concern. Eastern provinces (North Kivu, South Kivu, Ituri) experience ongoing armed group activity. Even relatively stable areas can see rapid deterioration. U.S. State Department maintains Level 3-4 advisories for most of DRC. Travel insurance with evacuation coverage isn't optional—it's mandatory survival planning.

Costs run surprisingly high given conditions—logistical challenges, security requirements, and limited tourism infrastructure mean park visits easily run $500-1,000+ per day when you factor permits, guides, security, transport, and accommodation. The dry seasons (December-February and June-September) offer best travel conditions, though "best" is relative in a country where roads become impassable rivers during rains.

The DRC isn't a destination to romanticize. It's been devastated by conflict that's killed millions and displaced even more. But for the small number of travelers with serious resources and risk tolerance, encounters with gorillas in Virunga or watching Nyiragongo's lava lake offer experiences possible almost nowhere else—assuming security allows access at all.`
  },
  {
    name: 'Denmark',
    lat: 56.2639,
    lng: 9.5018,
    writeup: `Denmark consistently ranks among the world's happiest countries, and after spending time here, you understand why—even if your credit card takes a beating in the process. This small Scandinavian kingdom combines Copenhagen's urban cool with countryside dotted with thatched-roof villages, Viking history, world-class design, and the hygge lifestyle that's been endlessly marketed but genuinely practiced here. Over 10 million visitors annually appreciate Denmark's mix of historical sites, modern comforts, and cycling culture that makes even winter feel civilized.

Copenhagen is Scandinavia's most approachable capital—compact, bike-friendly, and brimming with attractions. Nyhavn's colorful townhouses and harbor boats are peak Instagram bait, but the city offers substance beyond selfie spots. Tivoli Gardens, opened in 1843, remains one of the world's most charming amusement parks. The Little Mermaid statue is underwhelming (yet mandatory). Christiansborg Palace, Rosenborg Castle, and the National Museum deliver history and royal pomp. But Copenhagen's real appeal is its neighborhoods—Nørrebro's multicultural energy, Vesterbro's transformed meatpacking district (Kødbyen) with galleries and restaurants, Islands Brygge's harbor baths where locals swim year-round.

Beyond Copenhagen, Aarhus on Jutland's east coast has emerged as a cultural hub with the ARoS art museum and compact old town. Viking history comes alive at Roskilde (cathedral and Viking ship museum) and Jelling (UNESCO-listed runestones). Kronborg Castle in Helsingør (Hamlet's Elsinore) overlooks the narrow strait to Sweden. The North Sea coast offers windswept beaches and dunes. Ribe, Denmark's oldest town, and Odense (Hans Christian Andersen's birthplace) showcase provincial Danish charm. For pure nature escape, Skagen at Jutland's northern tip presents dramatic seascapes where two seas meet, while Bornholm island in the Baltic offers cliff-side beaches and forest trails.

Denmark is expensive. Budget travelers will struggle under $80-100/day, mid-range comfort requires $150-200/day, and everything from beer ($8-10) to coffee ($5-7) to dinner ($30-50+) costs more than you expect. But you get what you pay for: excellent infrastructure, spotless public transport, reliably good food, and a level of English fluency that makes communication effortless.

Getting around is easy: trains connect cities efficiently, buses fill gaps, and cycling is the national sport—Copenhagen has more bikes than cars. Rental bikes are everywhere, and even winter cycling is common (just dress properly). EU citizens need no visa; most others get 90 days visa-free within Schengen area.

Danish cuisine has evolved dramatically from the potatoes-and-pork stereotype. New Nordic cuisine, pioneered by restaurants like Noma, celebrates local ingredients and seasonal cooking. Smørrebrød (open-faced sandwiches) range from simple lunch items to elaborate culinary creations. Danish pastries (wienerbrød) are better here than anywhere—try them fresh from bakeries, not tourist shops. Craft beer culture has exploded with breweries like Mikkeller leading the charge. And yes, Danes consume impressive amounts of coffee, taken seriously in third-wave cafés across Copenhagen.

Summer (June-August) brings long days (sunset around 10 PM in midsummer), warmest weather (18-22°C/64-72°F), and peak prices. Shoulder seasons (April-May, September-October) offer better value with still-decent weather. Christmas markets make November-December appealing despite cold and darkness. Winters are dark (sunset by 4 PM) and cold but also offer hygge coziness—candles, thick sweaters, and the Danish art of making winter comfortable.

Denmark won't blow your mind with dramatic landscapes or exotic otherness. Its appeal lies in livable cities, smart design, functional society, and a quality of life that's both aspirational and actually attainable. It's expensive, but you're paying for a country that largely works as intended—clean, safe, efficient, and genuinely pleasant. Sometimes that's exactly what you need.`
  },
  {
    name: 'Djibouti',
    lat: 11.8251,
    lng: 42.5903,
    writeup: `Djibouti is about as far from a tourist trail as Africa gets while still being reasonably accessible. This tiny nation wedged between Eritrea, Ethiopia, and Somalia at the mouth of the Red Sea sees perhaps 50,000-70,000 visitors annually—many of them French military personnel (France maintains a major base here) or workers supporting Djibouti's role as the Horn of Africa's main port. But adventurous travelers drawn to otherworldly landscapes and unusual geopolitical positioning are slowly discovering what this overlooked country offers.

Lake Assal is the main draw—at 155 meters below sea level, it's Africa's lowest point and one of the saltiest bodies of water on Earth (more saline than the Dead Sea). The landscape surrounding it feels extraterrestrial: white salt pans, black volcanic rock, and turquoise water in one of Earth's hottest inhabited places. Lac Abbé near the Ethiopian border features limestone chimneys erupting from a salt lake like a Dr. Seuss landscape—it's where they filmed the opening planet scenes in Planet of the Apes. The Gulf of Tadjoura offers diving and snorkeling with whale sharks (November-January) in waters connecting to the Red Sea's coral reefs. Day Forest National Park in the north provides rare greenery in this otherwise arid country, with juniper forests and bird life.

Djibouti City is a working port capital rather than tourist hub—dusty, hot, and functional. The central market pulses with Somali, Afar, and Yemeni traders. European Quarter cafés serve French pastries and coffee, reflecting colonial history. But don't expect much in the way of tourist attractions beyond the port watching and people-watching.

Infrastructure is basic but functional: a paved highway connects Djibouti City to the Ethiopian border; getting to outlying areas requires 4x4s and guides. Accommodation in the capital ranges from budget guesthouses to international business hotels catering to aid workers and military contractors. Most tourists arrange tours through operators like Djibouti Travel—attempting independent travel to places like Lake Assal or Lac Abbé without local knowledge and transport is ill-advised.

Visas are available on arrival for most nationalities (around $90 for 30 days), though pre-arranging through embassies provides more certainty. French is the official language along with Arabic, though Somali and Afar are widely spoken. The Djiboutian franc is pegged to the dollar, and U.S. currency is accepted widely. Djibouti is expensive for what you get—a legacy of military base economics and import dependence—with budget travel difficult under $60-80/day and decent hotels easily $100-150/night.

November-March offers relatively bearable temperatures (25-30°C/77-86°F), though "bearable" is relative—this is one of the hottest countries on Earth. Summer (June-September) sees temperatures exceeding 45°C/113°F regularly, making outdoor exploration brutally uncomfortable. Most visitors come for the cooler months.

The food reflects Djibouti's position at a cultural crossroads: Somali-style canjeero (pancakes), Ethiopian injera, French baguettes, and fresh fish from the Red Sea all feature. It's not a culinary destination, but you won't starve. Qat (the mild stimulant leaf chewed throughout the Horn of Africa and Yemen) is ubiquitous, especially in the afternoons.

Security is generally stable—Djibouti avoided the conflicts plaguing its neighbors, though proximity to Somalia and Yemen means staying aware. The country has leaned into hosting foreign military bases (U.S., France, China, Japan) as a development strategy, which has brought investment and stability but also geopolitical complexity.

Djibouti will never be a major destination—it's too hot, too expensive, and too niche. But for travelers drawn to bizarre geology, unusual geopolitics, and destinations where tourism infrastructure barely exists, it offers landscapes you'll see nowhere else and the satisfaction of visiting one of Africa's least-touristed nations.`
  }
]

async function main() {
  console.log('🚀 Starting Travel Batch 3 generation\n')
  console.log(`Saving travel writeups for ${countries.length} countries:\n`)
  countries.forEach(c => console.log(`  - ${c.name}`))
  console.log()

  for (const country of countries) {
    try {
      console.log(`\n💾 Saving travel writeup for ${country.name}...`)
      console.log(`   Length: ${country.writeup.length} characters`)

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'travel',
          },
        },
        update: {
          summary: country.writeup,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'travel',
          summary: country.writeup,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ Saved travel writeup for ${country.name}`)
    } catch (error) {
      console.error(`❌ Error saving travel writeup for ${country.name}:`, error)
    }
  }

  console.log('\n✅ Travel Batch 3 generation complete!')
  console.log(`\nCompleted Travel Batch 3: ${countries.map(c => c.name).join(', ')}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
