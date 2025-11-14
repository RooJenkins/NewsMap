import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TRAVEL_WRITEUPS = [
  {
    name: 'Dominican Republic',
    type: 'country',
    country: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    category: 'travel',
    summary: `Landing in Punta Cana feels like stepping into a Caribbean postcard, but scratch beneath the surface and you'll find a country far more complex and compelling than its all-inclusive resorts suggest. The Dominican Republic shares the island of Hispaniola with Haiti, and while the contrast between the two nations is stark, this Spanish-speaking side pulsates with merengue beats, baseball fever, and some of the most diverse landscapes in the Caribbean.

Start in Santo Domingo, the oldest continuously inhabited European settlement in the Americas. The Zona Colonial is where Diego Columbus (yes, Christopher's son) had his palace, and wandering these cobblestone streets at sunset, rum in hand, is as close to time travel as you'll get. The Catedral Primada de América, completed in 1540, predates pretty much every other colonial structure in the New World. But the real magic happens in the local bars where old men play dominoes and argue baseball like their lives depend on it.

Beyond the capital, the country unfolds in surprising ways. The Samaná Peninsula in the northeast offers whale watching from January to March when humpbacks migrate here to breed—some of the best in the world. Las Terrenas, once a fishing village, now hosts a fascinating Franco-Dominican culture where baguettes meet mangú. Head inland to Jarabacoa for whitewater rafting and mountain biking in landscapes that feel more like Switzerland than the Caribbean. The 27 Waterfalls of Damajagua are Instagram bait, sure, but the experience of jumping and sliding down these natural water parks is genuinely thrilling.

Infrastructure varies wildly. The resort corridors of Punta Cana and Puerto Plata run like clockwork with good roads and reliable services. Venture into the interior or smaller coastal towns, and you're looking at potholed roads and inconsistent utilities—part of the adventure, really. Public transportation exists in the form of guaguas (minibuses) and motoconchos (motorcycle taxis), but most travelers opt for rental cars or private transfers. Accommodations range from ultra-luxury resorts charging $500+ per night to charming guesthouses for $30.

Safety is a mixed bag. The resort areas are heavily patrolled and safe, but Santo Domingo and other cities require street smarts. Petty theft is common, particularly targeting distracted tourists. Don't flash expensive jewelry, keep phones secured, and avoid walking alone late at night in urban areas. The tap water isn't drinkable—stick to bottled.

Visa requirements are straightforward for most: Americans, Canadians, Europeans, and many others get 30 days visa-free upon paying a $10 tourist card (often included in airfare). Extensions are available if you fall in love and can't leave.

Best time to visit runs December through April when the weather is dry and temperatures hover around 80-85°F. This is also peak season, meaning higher prices and more crowds. May through November brings cheaper rates and occasional hurricanes—check forecasts carefully. Shoulder season (late April-May, November) offers the sweet spot of decent weather and fewer tourists.

The DR welcomed 9.6 million tourists in 2024, making it the Caribbean's most visited destination. Most stick to the resort bubble, which means anyone willing to explore finds a country where Spanish colonial history, Taino indigenous heritage, and Afro-Caribbean culture blend into something uniquely Dominican. The food alone—mofongo, sancocho, fresh seafood—makes it worth the trip. Just don't spend your whole visit at a swim-up bar. This country has earned better than that.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'East Timor',
    type: 'country',
    country: 'East Timor',
    lat: -8.8742,
    lng: 125.7275,
    category: 'travel',
    summary: `Most travelers miss East Timor entirely, which is precisely why it's worth your attention. This is Southeast Asia's youngest nation—independent only since 2002 after a brutal Indonesian occupation—and it feels like the region did decades ago, before mass tourism smoothed out all the rough edges. Timor-Leste, as locals call it, offers diving that rivals Indonesia and the Philippines, mountain villages that see maybe a dozen foreigners per year, and a fierce, proud culture forged through centuries of Portuguese colonization and recent struggle for freedom.

Dili, the capital, sprawls along a picturesque bay backed by mountains. It's not beautiful in the conventional sense—concrete buildings, dusty streets, the occasional burned-out shell from 1999's violence—but there's an energy here, a sense that this country is still figuring itself out. The Cristo Rei statue, a 27-meter Jesus overlooking the sea, was a gift from Indonesia (ironic, given the history) and offers spectacular views. The Resistance Museum tells the story of Timor's fight for independence with heartbreaking honesty. But the real draw is the diving. The north coast around Dili features pristine coral reefs, WWII wrecks, and some of the best muck diving on earth. Visibility can reach 30+ meters, and you'll often be the only divers on the reef.

Head east to Jaco Island, an uninhabited paradise at the country's tip that locals consider sacred. White sand beaches, turquoise water, complete isolation—bring camping gear and supplies since there's literally nothing here. The journey requires 4WD through challenging roads, but that's half the adventure. In the interior, the mountain town of Maubisse offers cool temperatures, coffee plantations, and trekking through pine forests—yes, pine forests in Southeast Asia, a legacy of Portuguese reforestation efforts.

Infrastructure is basic at best. The roads from Dili east and west along the coast are paved but deteriorating; inland routes require 4WD and local knowledge. Public transportation consists of crowded microlets (minivans) that leave when full. Most visitors rent 4WDs with drivers who double as guides and fixers. Accommodation in Dili ranges from decent hotels ($60-120) to budget guesthouses ($15-30). Outside the capital, options thin dramatically—expect simple homestays and questionable plumbing.

Safety is generally good. Timorese are incredibly welcoming, and violent crime against tourists is rare. Political tensions occasionally flare, but the 2006 crisis is long past. The main risks are traffic accidents (driving is chaotic) and basic health issues. Medical facilities are limited; serious conditions require evacuation to Darwin, Australia, just 600km north.

Visa on arrival ($30, 30 days) is available for most nationalities. Extensions possible but bureaucratically challenging.

Best time to visit is the dry season, May through November. The wet season (December-April) makes rural roads impassable and diving less reliable. Even in dry season, expect occasional tropical downpours.

Tourism numbers are tiny—perhaps 75,000 annual visitors, many on business or visiting family. This isn't a country with tourist infrastructure, English beyond Dili is limited, and things that would take an hour elsewhere might take all day here. But for travelers who remember why they started traveling in the first place—to see places genuinely different from home, to meet people whose lives bear no resemblance to your own—East Timor delivers. The diving alone justifies the journey, but it's the conversations with independence veterans, the mountain vistas, the sense of witnessing history still being written, that makes this one of Asia's last true frontier destinations.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'Ecuador',
    type: 'country',
    country: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    category: 'travel',
    summary: `Ecuador delivers what sounds like marketing hyperbole: you can breakfast in the Amazon, lunch in the Andes, and watch the sunset over the Pacific—all in one very long day. This compact country, roughly the size of Colorado, contains four distinct geographical zones and enough biodiversity to make naturalists weep with joy. Add the Galápagos Islands, where evolution literally wrote its most famous chapter, and you've got one of South America's most rewarding destinations.

Quito, the capital, sits at 9,350 feet in a narrow valley flanked by volcanoes. The colonial old town, a UNESCO World Heritage site, features Spanish colonial architecture so well-preserved you half expect conquistadors to round the corner. La Compañía de Jesús church contains more gold leaf than seems structurally sound, while San Francisco Plaza at sunset offers that perfect mix of history and street life—shoeshine boys, ice cream vendors, couples kissing on benches. Take the TelefériQo cable car up Pichincha volcano for views that'll remind you why altitude sickness is real. The new town (Mariscal and beyond) pulses with restaurants, bars, and South America's best craft beer scene.

But Ecuador's real treasures lie beyond the capital. The Galápagos Islands, 600 miles offshore, need no introduction—blue-footed boobies, giant tortoises, marine iguanas, and an ecosystem that inspired Darwin's theory of evolution. Tourism is carefully controlled through national park regulations; most visitors take cruises ($300-800 per day) though island-hopping on a budget is possible ($100-150 daily). The marine reserve offers world-class diving, particularly around Wolf and Darwin islands where you'll drift with hammerhead schools 100+ strong.

On the mainland, the Quilotoa Loop in the central highlands takes you through indigenous villages and culminates in a stunning crater lake that shifts from turquoise to deep green depending on the light. Baños serves as Ecuador's adventure capital—whitewater rafting, canyoning, the terrifying "swing at the end of the world" suspended above a massive gorge. The Amazon basin, accessible from Coca or Tena, offers jungle lodges ranging from basic ($40/night) to luxury ($400+) where pink dolphins, caimans, and more bird species than you can count await.

Infrastructure varies dramatically. Major cities and tourist routes feature good roads, reliable buses, and modern amenities. The Pan-American Highway runs the country's spine, mostly in excellent condition. Venture off main routes, especially in the Amazon or coastal regions, and you're looking at dirt roads and challenging conditions. Ecuador's bus system is extensive and cheap—Quito to Guayaquil (5 hours) costs under $10. Accommodation ranges from luxury haciendas to $8 hostel beds.

Safety requires awareness. Quito and Guayaquil have seen rising crime rates—muggings, phone thefts, occasional armed robbery. Don't walk alone at night in cities, use registered taxis or Uber, keep valuables hidden. Smaller towns are generally safer. The northern border region (Esmeraldas province) sees drug trafficking activity and should be avoided.

Visa requirements are tourist-friendly: most nationalities get 90 days visa-free. Galápagos requires a separate $100 park fee.

Best times: June-September offers dry weather in the highlands and coast, though the Amazon stays wet year-round. December-May brings rain to most regions but better conditions in the Galápagos. The beauty of Ecuador is that some region always has good weather.

Ecuador welcomed 2.1 million tourists in 2024. The dollar-based economy makes budgeting simple, and your money goes far—a full day's meals can cost $15-20 outside tourist areas. From Charles Darwin to backpackers chasing volcanoes, Ecuador has been proving that great things come in small packages for generations.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'Egypt',
    type: 'country',
    country: 'Egypt',
    lat: 26.8206,
    lng: 30.8025,
    category: 'travel',
    summary: `Egypt doesn't just have history—it practically invented the concept. Standing before the Great Pyramid of Giza, the last surviving Wonder of the Ancient World, you're confronting human achievement from 4,500 years ago. The scale of Egypt's archaeological treasures can be overwhelming: the Valley of the Kings, Karnak Temple, Abu Simbel, the Sphinx—sites that shaped Western civilization's understanding of the ancient world. But modern Egypt, with its 105 million people, chaotic cities, and post-revolution politics, is equally fascinating if you can handle the aggressive touts and occasional bureaucratic nightmare.

Cairo, home to 20+ million souls, assaults your senses immediately. The Egyptian Museum in Tahrir Square houses Tutankhamun's treasures and mummies of pharaohs whose names you learned in school—though many artifacts are migrating to the new Grand Egyptian Museum near the pyramids, set to be the world's largest archaeological museum. The medieval Islamic Cairo neighborhood, with Khan el-Khalili bazaar, delivers that sensory overload you came for—spices, perfumes, copper craftsmen hammering away as their ancestors did centuries ago. Take sunset from the Citadel of Saladin for views across the sprawling metropolis to the pyramids in the distance.

The Pyramids of Giza sit right at Cairo's edge—you can literally see them from Pizza Hut, which tells you something about how urban sprawl has encroached. Yes, there are persistent touts and camel handlers who won't take no for an answer, but the structures themselves remain mind-bending. How did Bronze Age people move 2.5-ton blocks? Nobody fully knows. Saqqara and Dahshur, less-visited pyramid fields nearby, offer similar wonders with fewer crowds.

South to Luxor, often called the world's greatest open-air museum. The Karnak Temple complex sprawls across 200 acres—the Hypostyle Hall alone, with its 134 massive columns, feels like walking among stone giants. Cross the Nile to the West Bank for the Valley of the Kings, where Howard Carter discovered Tut's tomb in 1922. Hot air ballooning at sunrise over these ancient sites (about $80) might be touristy but it's genuinely magical.

Further south, Aswan offers a more relaxed vibe. Take a felucca sailboat to Elephantine Island, visit the Nubian villages with their colorful houses, or splurge on the three-hour drive to Abu Simbel where Ramesses II's massive temple will humble you. The Red Sea coast, particularly Sharm el-Sheikh and Hurghada, delivers world-class diving on pristine coral reefs—though some areas show damage from over-tourism and climate change.

Infrastructure is functional but aging. Cairo's metro is efficient and dirt cheap (about $0.30). Trains connect major cities, though sleeper trains to Aswan/Luxor ($80-120) are the way to go. Domestic flights are affordable. Roads are decent on major routes but driving in Egypt is not for the faint-hearted—traffic rules are suggestions at best. Nile cruises between Luxor and Aswan ($400-1000 for 3-4 nights) remain popular despite being touristy.

Safety has improved since the 2011 revolution and 2013-2014 instability, but terrorism remains a concern, particularly in North Sinai (off-limits to tourists). Tourist areas are heavily policed. Petty crime, especially aggressive scams targeting tourists, is the main issue. Women travelers face harassment—dress conservatively and consider joining tours in cities.

Visas cost $25 on arrival for most nationalities, good for 30 days. Egypt's visa-on-arrival system is straightforward.

Best time: November through February offers pleasant temperatures (65-80°F) but peak crowds. March-April and October are shoulder season sweet spots. May-September brings brutal heat (100°F+), though it's low season with better deals.

Egypt drew 14.9 million tourists in 2024, rebounding strongly after years of political instability. The country runs on tourism—expect to be seen as a walking wallet. Haggling is essential and exhausting. But when you're watching sunrise from Mount Sinai, or sailing past Kom Ombo temple on the Nile at golden hour, or simply staring at the Pyramids trying to wrap your head around the impossible, you'll understand why people have been making pilgrimages here for millennia.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'El Salvador',
    type: 'country',
    country: 'El Salvador',
    lat: 13.7942,
    lng: -88.8965,
    category: 'travel',
    summary: `El Salvador has shed its "murder capital of the world" reputation faster than almost anyone predicted. Under President Nayib Bukele's controversial gang crackdown that began in 2022, homicide rates plummeted from terrifying to remarkably safe—though civil liberties took serious hits in the process. The result? Central America's smallest country is now its safest, with world-class surf breaks, Mayan ruins, and volcanic landscapes that most travelers still bypass on their way to Guatemala or Costa Rica.

San Salvador, the capital, won't win beauty contests—it's sprawling, concrete-heavy, and still processing rapid development—but the Zona Rosa and Colonia Escalón neighborhoods offer excellent restaurants, craft breweries, and nightlife that feels genuinely safe for the first time in decades. The Museo de Arte de El Salvador (MARTE) houses impressive contemporary art, while the Joya de Cerén archaeological site, 30 minutes out, is Central America's Pompeii—a Mayan farming village perfectly preserved under volcanic ash from a 7th-century eruption.

But El Salvador's real draw is the Pacific coast. La Libertad and El Tunco have become pilgrimage sites for surfers, with consistent point breaks and beach breaks that work year-round. Punta Roca is one of Latin America's best waves—long, hollow rights that can run 200+ meters on good days. El Tunco village itself has evolved from crusty surf camp to hipster beach town, with yoga studios, organic cafés, and enough international travelers to support a sustainable scene. Further east, Playa El Cuco and the Gulf of Fonseca offer quieter alternatives.

The Ruta de las Flores in the western highlands delivers colonial towns, coffee plantations, and mountain scenery that feels more Guatemala than beach paradise. Juayúa's weekend food festival draws families from across the country for pupusas, grilled meats, and traditional sweets. Nearby waterfalls and hiking trails around Cerro Verde National Park offer views of the Izalco volcano, Central America's youngest, still occasionally belching smoke.

Infrastructure has improved dramatically. The coastal highway connecting San Salvador to beaches is excellent. The dollarized economy (since 2001) makes transactions simple, though Bitcoin was made legal tender in 2021—you can use it, but most still prefer dollars. Buses are cheap ($0.25-0.50 for local routes) but crowded; rental cars ($30-40/day) give more flexibility. Accommodation ranges from luxury surf resorts ($150-300) to backpacker hostels ($8-15). El Salvador is genuinely budget-friendly—full meals for $3-5, local beer for $1.50.

Safety has transformed remarkably. The megaprison housing 40,000 gang members and Bukele's "state of exception" have brought homicide rates down to 2.4 per 100,000—lower than the United States. Walking in San Salvador at night, previously suicidal, is now common. That said, human rights organizations document over 70,000 arbitrary arrests and due process violations. As a tourist, you benefit from this security without facing its costs, which deserves acknowledging.

Visa requirements are straightforward: most nationalities get 90 days visa-free through the CA-4 agreement (covering Guatemala, Honduras, Nicaragua, and El Salvador).

Best time to visit is the dry season, November through April, with December-February offering the best surf swells. The wet season (May-October) brings afternoon rains but keeps things green and less crowded. Surf works year-round, though conditions vary.

Tourism numbers remain modest—roughly 1.8 million visitors in 2024, many from the large Salvadoran diaspora. The country hasn't fully capitalized on its safety improvements with international marketing, meaning you're still ahead of the curve here.

El Salvador's recent history is complicated—civil war, gang violence, controversial authoritarianism—but the current moment offers travelers something rare: a chance to visit a country genuinely transforming itself. The surf, pupusas, and volcanic landscapes are just bonuses. Whether this transformation is sustainable, democratic, or worth the civil liberty costs remains an open question. For now, though, El Salvador is finally safe enough to explore—and worth it.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'Equatorial Guinea',
    type: 'country',
    country: 'Equatorial Guinea',
    lat: 1.6508,
    lng: 10.2679,
    category: 'travel',
    summary: `Equatorial Guinea is the country almost nobody visits, which tells you most of what you need to know. Despite vast oil wealth (the third-largest economy in sub-Saharan Africa per capita), President Teodoro Obiang's 45-year dictatorship has built a nation of extreme inequality, suspicious bureaucracy, and virtually no tourism infrastructure. Visiting requires jumping through hoops most travelers reasonably decide aren't worth it—though for genuine Africa obsessives or oil industry workers with time to kill, this tiny nation offers untouched rainforest, Spanish colonial remnants, and the surreal experience of one of the world's least-visited countries.

Malabo, the capital, sits on Bioko Island rather than the mainland—a geographic oddity resulting from colonial border-drawing. The city itself is a strange mix of flashy new buildings funded by oil money and crumbling infrastructure. The Cathedral of Santa Isabel, a Spanish neo-Gothic structure, dominates the skyline. The presidential palace is off-limits for photos, as are most government buildings—arbitrary detention for photography is a real risk. The city has improved dramatically since the early 2000s with Chinese-built roads and stadiums (Equatorial Guinea hosted the 2015 African Cup of Nations), but it still feels underdeveloped given the oil wealth.

Bioko Island's real attraction is its biodiversity. The island is home to seven endemic primate species including the critically endangered Pennant's red colobus monkey. Pico Basile, at 3,008 meters, offers cloud forest hiking with stunning views on clear days. The southern part of the island features black sand beaches, though swimming involves rough Atlantic surf. Access requires permits and guides—independent travel is essentially impossible.

The mainland region, Río Muni, sees even fewer visitors. Monte Alén National Park protects pristine rainforest where lowland gorillas, forest elephants, and chimpanzees roam—on paper. In reality, accessing the park requires extensive permits, 4WD vehicles, and local guides willing to navigate official and unofficial checkpoints. The coastal town of Bata, the largest city, has better beaches than Malabo but limited tourist facilities.

Infrastructure is poor despite oil revenues. Roads in Malabo and Bata are paved but deteriorate quickly. Rural areas require 4WD. International flights are expensive and limited—typically routing through Addis Ababa, Paris, or Madrid. Local transportation is minimal. Hotels in Malabo cater to oil workers at oil-worker prices ($150-300 for basic rooms). Budget options barely exist.

Safety is complicated. Violent crime is relatively low, but arbitrary arrest is a real concern. The government is paranoid about espionage, and foreigners are viewed with suspicion. Don't photograph government buildings, military installations, or officials. Police checkpoints are frequent and unpredictable. Corruption is endemic—expect to pay "fees" for various services. LGBTQ+ travelers should be especially cautious as homosexuality is illegal with severe penalties.

Visa requirements are the real killer: tourist visas require a letter of invitation from a local sponsor (hotel or company), advance approval from Equatorial Guinea's Ministry of National Security, and the process can take months with no guarantee of success. Costs run $200-300 just for the visa. Very few countries have Equatoguinean embassies, complicating the process further.

There's no "best time" in the conventional sense—the country experiences tropical heat year-round with two rainy seasons (April-May and October-December). The dry season (December-February) offers slightly better conditions, but tourism infrastructure is so limited it barely matters.

Tourism numbers are almost non-existent—perhaps 10,000 annual visitors, overwhelmingly business travelers and oil industry workers. There are no tourism campaigns, few hotels, minimal English (Spanish and French are official languages, with indigenous Fang widely spoken), and a government that clearly doesn't want casual tourists.

Why would anyone visit? Honestly, most shouldn't. But for completionists working through African countries, wildlife enthusiasts willing to navigate bureaucracy for endemic species, or those fascinated by the intersection of oil wealth and underdevelopment, Equatorial Guinea offers an extreme example of a resource-rich nation failing its people. The natural beauty exists—Bioko's forests, Río Muni's beaches—but accessing it requires patience, money, and acceptance that this won't be a normal travel experience. This is Africa's hardest country to visit, and it's hard for all the wrong reasons.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'Eritrea',
    type: 'country',
    country: 'Eritrea',
    lat: 15.1794,
    lng: 39.7823,
    category: 'travel',
    summary: `Eritrea is the North Korea of Africa—a sealed-off one-party state where mandatory indefinite military service, no free press, and government paranoia create an environment so restrictive that getting a visa is harder than getting into Harvard. But here's the strange thing: if you somehow manage to visit, you'll find Art Deco architecture rivaling Miami, Italian coffee culture, stunning Red Sea coastline, and some of the continent's friendliest people trapped in its most repressive regime. It's a profound contradiction that makes Eritrea one of the world's most fascinating and frustrating destinations.

Asmara, the capital, is a time capsule of Italian colonial architecture frozen in the 1930s. Mussolini planned to make this the center of Italy's African empire, and the result is extraordinary—the Fiat Tagliero Building shaped like an airplane, the Art Deco Cinema Impero, Cubist residential buildings, and wide boulevards lined with palm trees. UNESCO designated the entire city a World Heritage Site in 2017. Walking these streets, sipping macchiato at one of dozens of cafés serving legitimately excellent Italian coffee, you could almost forget the repression—except for the ever-present soldiers and the fact that most young people you see are trying desperately to leave.

The port city of Massawa, on the Red Sea, offers a different architectural heritage—Ottoman and Egyptian influences mixing with Italian. The old town features coral-block buildings and narrow alleys, though much was damaged in the independence war. The nearby Dahlak Archipelago promises pristine diving and untouched coral reefs, but accessing them requires special permits and is virtually impossible for casual tourists.

Infrastructure ranges from surprisingly good to non-existent. Asmara is clean, safe, and functional with decent roads and reliable electricity in the center. The railway from Asmara to Massawa, an engineering marvel built by Italians through impossible mountain terrain, operates occasionally for tourists—a spectacular journey when available. Banking is cash-only (Eritrean nakfa, which you can only get in-country), no ATMs work for foreign cards, no credit cards accepted. Bring all the dollars you'll need.

Accommodation is limited. Asmara has several mid-range hotels ($40-80) and a couple of upscale options ($100-150), all government-monitored. Outside the capital, options thin to basic guesthouses. Tourism infrastructure is minimal—no tour companies really, no hostels, limited restaurants. You're on your own in ways most modern travelers aren't prepared for.

Safety from crime is excellent—Asmara is one of Africa's safest capitals, and violent crime is rare. But safety from the government is another matter. You'll be assigned a government minder for most activities. Photography is restricted—no military sites (which include random buildings), no government facilities, sometimes no people without permission. The government has jailed journalists, activists, and foreigners on vague charges. Keep politics to yourself and assume someone is listening.

Visa requirements are brutally difficult. Tourist visas require a letter of invitation from an Eritrean travel company, advance approval from immigration, and 3-4 weeks minimum processing time. Many embassies discourage applications. Approval is unpredictable and arbitrary. Once in-country, you need travel permits for anywhere outside Asmara—often denied without explanation.

The best time to visit weather-wise is October through March when temperatures are pleasant (70-80°F in Asmara, hotter on the coast). But realistically, visit whenever you can get a visa.

Tourism numbers are tiny—maybe 10,000 annual visitors, including diaspora and aid workers. The government doesn't publish statistics and doesn't particularly want tourists.

Why visit? The architecture, the coffee, the Red Sea diving potential, the sheer rarity of getting in—Eritrea is one of the world's least-visited countries despite significant cultural and natural attractions. But you must understand what you're supporting: President Isaias Afwerki has run this country since independence in 1993 without elections, creating a system so repressive that 12-15% of the population has fled. The UN has documented crimes against humanity.

Visiting Eritrea means confronting uncomfortable questions about whether tourism dollars legitimize repression. Unlike North Korea, where the government openly courts tourists, Eritrea seems ambivalent about visitors, making each trip a bureaucratic battle. If you make it, you'll see one of Africa's most beautiful capitals, drink world-class coffee, and meet warm, resilient people living under impossible conditions. Just don't expect it to feel like a vacation.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'Estonia',
    type: 'country',
    country: 'Estonia',
    lat: 58.5953,
    lng: 25.0136,
    category: 'travel',
    summary: `Estonia is what happens when Nordic sensibility, Soviet history, and Silicon Valley ambition collide in a country the size of New Hampshire. This tiny Baltic nation has transformed itself from a Soviet backwater to one of Europe's most digitally advanced societies—you can vote online, file taxes in three minutes, and hold e-residency even if you've never set foot here. Yet medieval old towns, pristine forests covering 50% of the country, and a coastline dotted with 2,000+ islands preserve a quieter, older Estonia that tech headlines miss.

Tallinn, the capital, deserves its reputation as one of Europe's best-preserved medieval cities. The Old Town, a UNESCO World Heritage site, packs 13th-century city walls, Gothic spires, and cobblestone squares into a walkable area that feels like a film set—except it's real, lived-in, and surrounded by a thoroughly modern city. The Alexander Nevsky Cathedral, with its distinctive onion domes, represents Russian Orthodox architecture imposed during imperial rule. Climb to Toompea Hill for views across terracotta rooftops to Tallinn Bay. The Viru Gates mark the entrance to the old town, and wandering these medieval streets at night, particularly off-season when crowds thin, is genuinely magical.

But Tallinn is more than medieval theme park. The Telliskivi Creative City, in a former industrial area, hosts hipster cafés, vintage shops, street art, and a general Berlin-lite vibe. The city's restaurant scene punches above its weight—modern Nordic cuisine using local ingredients, farm-to-table before it was trendy. Rataskaevu 16 serves Estonian dishes elevated beyond recognition, while F-Hoone in Telliskivi does casual sophistication. And yes, the digital society bit is real: free WiFi throughout the city, government services entirely online, startups per capita rivaling San Francisco.

Beyond the capital, Estonia's 2,000+ islands offer a different pace. Saaremaa, the largest, features windmills, medieval castles (Kuressaare), and the Kaali meteorite crater. The island feels like stepping back decades—Soviet-era farms, quiet roads, traditional fishing villages. Hiiumaa, further north, is even quieter with pristine beaches and lighthouses. These islands see few international visitors, offering authentic Baltic culture without the tourist infrastructure or crowds.

The mainland's Lahemaa National Park protects coastal forests, manor houses, and traditional fishing villages just an hour from Tallinn. The park is Estonia in microcosm—nature, history, and accessibility combining effortlessly. In winter, the frozen Baltic creates surreal landscapes; summer brings white nights and temperatures actually warm enough for swimming (if you're tough).

Infrastructure is excellent. Roads are well-maintained, public transportation is punctual and efficient, and Tallinn's public transport is free for residents (tourists pay €2 per trip or €5 for 72 hours). Trains and buses connect major towns reliably. English is widely spoken, especially by younger generations. Accommodation ranges from luxury hotels ($150-250) to excellent hostels ($15-30). Estonia is more expensive than Eastern Europe but cheaper than Scandinavia—a mid-range sweet spot.

Safety is a non-issue. Estonia ranks among Europe's safest countries, violent crime is rare, and Tallinn's old town is safe even at night. Petty theft targeting tourists exists but is uncommon. The main "danger" is drinking too much Vana Tallinn liqueur and missing your train.

Visa requirements follow Schengen rules: most nationalities get 90 days visa-free within 180 days. EU citizens have full freedom of movement.

Best time to visit depends on preference. Summer (June-August) offers long days, outdoor festivals, and temperatures around 70°F—peak season with higher prices. The Christmas market in Tallinn (November-January) is enchanting and less crowded than Western European equivalents. Winter is cold (20-30°F) but beautiful, especially in forests and islands, with far fewer tourists. Spring and fall are shoulder seasons with good weather and minimal crowds.

Estonia welcomed 4.2 million visitors in 2024, with many on Baltic cruise ships hitting Tallinn for 6 hours. Those who stay longer discover a country that shouldn't work—too small, too northern, too recently independent from the USSR—but absolutely does. The combination of medieval history, cutting-edge digital services, and vast wild spaces creates something unique in Europe.

Estonia is the anti-Italy—no world-famous monuments, no Renaissance art, no mass tourism crushing local life. Instead, it offers a functioning, forward-thinking society that values nature, innovation, and getting things right without making a fuss about it. Very Estonian, really.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'Ethiopia',
    type: 'country',
    country: 'Ethiopia',
    lat: 9.1450,
    lng: 40.4897,
    category: 'travel',
    summary: `Ethiopia challenges everything you think you know about Africa—and travel in general. This is the only African nation never colonized (brief Italian occupation notwithstanding), with its own ancient alphabet, its own calendar (currently 2017 in Ethiopia, eight years behind the Gregorian), its own time system, and a history stretching back to the Kingdom of Aksum and the Queen of Sheba. The rock-hewn churches of Lalibela, the castles of Gondar, the Simien Mountains, and the Danakil Depression create a country so unlike anywhere else that visitors often struggle to process it all.

Addis Ababa, the capital at 7,726 feet elevation, sprawls across mountains with a chaotic energy that's quintessentially African yet distinctly Ethiopian. The National Museum houses "Lucy," the 3.2-million-year-old hominid fossil proving Ethiopia's claim as humanity's birthplace. The Holy Trinity Cathedral, with its stunning architecture and gardens, is where Emperor Haile Selassie is buried. The Merkato, Africa's largest open-air market, overwhelms the senses—anything from frankincense to knock-off sneakers, spices to livestock, all negotiated in Amharic with the occasional Oromo or Tigrinya thrown in.

The rock-hewn churches of Lalibela, carved from solid volcanic rock in the 12th century, are often called the "Eighth Wonder of the World"—hyperbole that feels justified when you're standing before Bet Giyorgis, a massive cross-shaped church carved 15 meters down into the earth. These 11 churches still function as active places of worship, with Orthodox pilgrims in white robes, priests carrying ancient manuscripts, and the thick smell of incense. Tourism has increased but hasn't spoiled it—yet.

Gondar, the former capital, features a complex of medieval castles and palaces that look transplanted from Europe but are thoroughly African. The Simien Mountains National Park offers trekking through landscapes so dramatic—jagged peaks, deep gorges, gelada baboons by the thousand—that it's been called "the Roof of Africa." Multi-day treks can be arranged with guides and pack animals, staying in villages and camping under stars at 13,000+ feet.

For the truly adventurous, the Danakil Depression is one of Earth's most extreme environments—salt flats, sulfur springs, active volcanoes including Erta Ale's permanent lava lake, and daytime temperatures exceeding 120°F. It's dangerous, expensive (tours run $400-600 for 3-4 days), and completely unforgettable. The Afar people, some of the world's hardiest, mine salt here as their ancestors have for centuries.

Infrastructure is developing but inconsistent. Ethiopian Airlines is Africa's best carrier, connecting Addis to regional airports—flying Addis-Lalibela ($150-200) saves two days of rough driving. Roads are improving but long-distance buses remain crowded and slow. Addis has modern hotels ($80-200) and budget options ($10-20), while smaller towns offer simpler guesthouses. English is limited outside tourist areas and the capital.

Safety has been a major concern. The Tigray conflict (2020-2022) devastated the north, killing hundreds of thousands and displacing millions. A ceasefire has held since late 2022, but Tigray region remains largely off-limits. Ethnic tensions persist in Oromia and other regions. Check current advisories carefully—the situation can change quickly. In stable areas, violent crime against tourists is uncommon, though petty theft occurs.

Visa on arrival ($50, single entry) is available at Addis Ababa's Bole Airport for most nationalities. Overland entries require advance visas.

Best time: October through March is the dry season with clear skies and manageable temperatures—ideal for trekking and the Danakil. June through September brings heavy rains making roads impassable but the highlands green and beautiful. Ethiopian Christmas (January 7) and Timkat (January 19) offer spectacular Orthodox celebrations.

Tourism numbers were reaching 1 million annually before COVID and the Tigray conflict—now recovering slowly as stability returns.

Ethiopia is not an easy country. The recent conflict's scars are deep, infrastructure frustrates, and cultural barriers are real. But the rewards match the challenges: churches that rival Petra, mountains that humble Patagonia, and a cultural identity so ancient and intact it makes European nations look like upstarts. The coffee ceremony alone—beans roasted over charcoal, ground by hand, brewed three times, served with popcorn—is reason enough to visit. Just choose your timing carefully and understand you're visiting a nation still healing from recent trauma.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'Falkland Islands',
    type: 'country',
    country: 'Falkland Islands',
    lat: -51.7963,
    lng: -59.5236,
    category: 'travel',
    summary: `The Falkland Islands—or Las Malvinas, depending who's signing your paycheck—sit 300 miles off Argentina's coast but feel like a windswept piece of Scotland teleported to the South Atlantic. This British Overseas Territory of 3,600 people and 500,000 sheep became infamous during the 1982 war with Argentina, but today it's one of the world's premier destinations for sub-Antarctic wildlife: penguins, albatrosses, sea lions, elephant seals, and orcas in such abundance that even jaded nature photographers lose their minds.

Stanley, the capital, is less a city than an overgrown village with about 2,400 residents. Brightly painted corrugated iron houses, British pubs serving fish and chips, red phone booths, and the southernmost Anglican cathedral in the world create a peculiar colonial outpost vibe. The 1982 Liberation Monument and the Historic Dockyard Museum tell the war's story from the British perspective. Christ Church Cathedral's whalebone arch, constructed from blue whale jawbones, has become the islands' iconic photo op.

But Stanley is just the gateway. The outer islands deliver the real magic. Sea Lion Island, the southernmost inhabited island, hosts massive breeding colonies of southern elephant seals, sea lions, and gentoo, rockhopper, and magellanic penguins all in one place. Volunteer Point on East Falkland features the world's most accessible king penguin colony—thousands of these stately, orange-collared birds completely unbothered by visitors maintaining respectful distances. Carcass Island, Saunders Island, and West Point Island each offer different combinations of wildlife, pristine beaches, and total isolation.

The birdlife is extraordinary. Five penguin species breed here, including rare rockhopper colonies. Black-browed albatross nest on cliffs by the thousands, their three-meter wingspans gliding on powerful updrafts. Caracaras (local predatory birds), turkey vultures, and dozens of other species occupy every ecological niche. The complete absence of land predators means wildlife shows zero fear—penguins will waddle within feet of you, utterly indifferent.

Infrastructure is basic but functional. Stanley has decent hotels ($120-180), guesthouses ($80-120), and a few restaurants serving fresh seafood and lamb. The outer islands offer farmhouse accommodation ($100-150 full board)—simple but comfortable, with hosts who are often third or fourth-generation islanders with incredible local knowledge. Transportation between islands relies on government-operated flights (FIGAS—Falkland Islands Government Air Service) in small planes. Book early as seats are limited.

Roads are largely absent outside Stanley—most of the interior is trackless camp (local term for countryside). Rental 4WDs are available but expensive ($100+/day). Most visitors either join organized tours or fly to island lodges.

Safety is a non-issue—crime is virtually nonexistent, and the islands' biggest dangers are weather (sudden changes, high winds) and the odd minefield remnant from 1982, all clearly marked and fenced. Medical facilities in Stanley are adequate for minor issues; serious conditions require air evacuation to Chile or Uruguay.

Visa requirements are simple: British, US, Canadian, EU, and many other nationals get visa-free entry for up to 90 days. However, getting here is expensive and complicated. Most visitors arrive on cruise ships heading to Antarctica—not ideal for wildlife watching as you're rushed. LATAM flies weekly from Santiago, Chile (about $800-1200 return) with a refueling stop in Punta Arenas. A monthly flight from the UK via RAF Mount Pleasant exists but is primarily for military and residents.

Best time to visit: October through March (Southern Hemisphere spring/summer) when wildlife is most active. November-December sees penguins courting and nesting, January-February brings chicks, March offers whale watching opportunities. Outside this window, weather is harsh and many island lodges close.

Tourism numbers hover around 60,000 annually, but most are cruise passengers spending a few hours in Stanley. Actual overnight visitors number perhaps 5,000-8,000—small enough that tourism feels sustainable and personal.

The Falklands are expensive (everything is imported), remote (10-14 hours from nearest cities), and politically complicated (Argentina still claims sovereignty, though 99.8% of islanders voted to remain British in a 2013 referendum). But for wildlife enthusiasts, photographers, and those seeking genuine remoteness, few places deliver like this. You're not just visiting an island group—you're experiencing one of the planet's last wild frontiers, where nature still outnumbers humans hundreds to one.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'Fiji',
    type: 'country',
    country: 'Fiji',
    lat: -17.7134,
    lng: 178.0650,
    category: 'travel',
    summary: `Fiji delivers the South Pacific fantasy—palm-fringed beaches, turquoise lagoons, coral reefs teeming with life—but it's the genuine warmth of the Fijian people, the "Bula!" greeting that feels authentic even after the hundredth time, that transforms it from tropical destination to something more memorable. This archipelago of 300+ islands scattered across the Pacific offers everything from backpacker party islands to ultra-luxury private resorts where celebrities decompress for $3,000 per night.

The main island, Viti Levu, is where most visitors arrive and where most Fijians live. Suva, the capital, is a working city rather than tourist hub—markets, colonial architecture, the excellent Fiji Museum chronicling Polynesian migration and the more complicated British colonial and post-independence history including coups and ethnic tensions. But most visitors head straight to the Coral Coast or northwest to the Mamanuca and Yasawa Islands.

The Mamanuca Islands are Fiji's backpacker heartland. Budget resorts like Beachcomber ($60-80/night) and mid-range spots offer that classic island experience—snorkeling off the beach, sunset drinking, meeting travelers from everywhere. The Yasawas, further north, spread across 80 kilometers of pristine waters. Island hopping via the Yasawa Flyer boat ($120-180 for multi-day passes) lets you sample different islands—Nacula for beaches, Sawa-i-Lau for the stunning cave made famous in "Blue Lagoon," Naviti for traditional village visits.

But Fiji's diving and snorkeling are the real draw. The soft coral capital of the world isn't hyperbole—the Rainbow Reef near Taveuni and the Great Astrolabe Reef off Kadavu feature coral gardens in psychedelic colors. Manta ray encounters at the Yasawas are virtually guaranteed between May-October. The Beqa Lagoon offers shark diving where bull sharks, tigers, and reef sharks feed within arm's reach—safely, with professional dive operators who've been doing this for decades.

Taveuni, the "Garden Island," offers a different Fiji—rugged, rainforested, with few resorts and a slower pace. The Bouma National Heritage Park features waterfalls and hikes through pristine forest. The Lavena Coastal Walk combines beaches, tidal pools, and jungle. The 180th meridian crosses Taveuni, meaning you can straddle yesterday and today—touristy but fun.

Infrastructure varies dramatically. Viti Levu has good roads connecting major towns, reliable buses, and services ranging from international chain hotels to hostels. Outer islands range from luxury private island resorts with seaplanes and infinity pools to basic beach fales (huts) with communal bathrooms. Inter-island transport relies on domestic flights (expensive but efficient), ferries (cheap but slow), or boat transfers included with resort bookings.

Safety is generally good. Fiji has poverty and inequality, particularly in Suva and Nadi, leading to some petty crime—bag snatching, pickpocketing in cities. Resorts and islands are safe. The bigger risks are natural—Fiji sits in cyclone territory (November-April season), and marine hazards like strong currents require attention. Political stability has improved since the 2006 coup, though underlying ethnic tensions between indigenous Fijians and Indo-Fijians (descendants of Indian laborers brought by British) persist beneath the tourist-friendly surface.

Visa-free entry for most nationalities (30-120 days depending on country). Processing is quick and straightforward.

Best time: May through October is dry season with cooler temperatures (70-80°F) and calm seas—ideal for diving. November through April is wet, hot, and cyclone season, though January-February brings Indo-Fijian cultural festivals worth timing for. Prices drop significantly in wet season.

Fiji welcomed 920,000 tourists in 2024, rebounding from COVID shutdowns. Tourism is the economic backbone, meaning infrastructure caters well to visitors.

Fiji has been described as "the way Hawaii was 30 years ago"—before over-development, before mass tourism crushed local culture. That's partially true in the outer islands where village life continues and tourism remains small-scale. The Mamanucas are already developed, and pressure is increasing everywhere. But the kava ceremonies in traditional villages, the genuine joy Fijians take in hospitality, the reefs still healthy enough to leave you breathless—these remain real.

The challenge is balancing accessibility with authenticity. Fiji manages it better than most tropical destinations, offering both party islands and pristine isolation, budget backpacking and lottery-winning luxury. Just get off Viti Levu quickly—the real Fiji is in the outer islands, where boats outnumber cars and the Pacific still feels genuinely vast.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'Finland',
    type: 'country',
    country: 'Finland',
    lat: 61.9241,
    lng: 25.7482,
    category: 'travel',
    summary: `Finland consistently ranks as the world's happiest country, though whether that's despite or because of eight-month winters, near-total darkness above the Arctic Circle, and a cultural commitment to introversion is unclear. What is clear: this Nordic nation does things right—saunas (3.3 million for 5.5 million people), design that's functional and beautiful, vast wilderness areas, and a society that values silence, personal space, and not bothering strangers unless absolutely necessary. It's expensive, remote, and utterly wonderful.

Helsinki, the capital, sits on a peninsula jutting into the Baltic Sea—all Art Nouveau architecture, waterfront markets, and Nordic cool without Copenhagen's crowds. The Senate Square, with its gleaming white Lutheran Cathedral, is neoclassical perfection. The Temppeliaukio Church, built directly into solid rock with a copper dome, offers stunning acoustics and architecture. The Design District showcases why Finnish design—Marimekko textiles, Iittala glassware, Artek furniture—influenced modernism worldwide. The Ateneum Art Museum houses the best collection of Finnish art, including multiple works by Akseli Gallen-Kallela depicting the Kalevala, Finland's national epic.

But Helsinki is just the beginning. The Finnish Lapland, north of the Arctic Circle, delivers winter experiences that justify the expense and cold. Rovaniemi, the "official" home of Santa Claus, leans into the kitsch but also serves as the gateway to serious winter activities—husky sledding, reindeer safaris, Northern Lights hunting, and cross-country skiing under endless stars. The auroras are best from September through March, with peak activity around the equinoxes. The city of Inari, further north, offers indigenous Sami culture and access to Lemmenjoki National Park, Finland's largest wilderness area.

In summer, Finland transforms. The midnight sun north of the Arctic Circle means 24-hour daylight in June-July—disconcerting at first, then liberating. The lakes region (Finland has 188,000 of them) becomes paradise for kayaking, fishing, and cottage life. Renting a traditional summer cottage (mökki) with a sauna on a private lake is the most Finnish experience imaginable—swimming, sauna, repeat, no conversation necessary.

The archipelago between Finland and Sweden features thousands of islands, many connected by free ferries. Turku, the former capital, serves as the gateway. Island hopping by bike, staying in small fishing villages, and eating fresh Baltic herring is summer perfection. The Åland Islands, an autonomous Swedish-speaking region, offer even more island culture with tax-free shopping and a fascinating history.

Infrastructure is superb. Trains connect major cities reliably—Helsinki to Rovaniemi takes 8-12 hours on comfortable overnight sleepers ($80-150). Buses reach everywhere else. Roads are excellent, though winter driving requires serious skills. English is widely spoken, second only to the Nordic countries and Netherlands. Accommodation ranges from international chain hotels ($150-250) to hostels ($30-50) to those precious mökkis ($100-200/night).

Safety is a non-issue—Finland has one of the world's lowest crime rates. The biggest danger is winter cold (temperatures can hit -40°F in Lapland) requiring proper gear, or drowning after sauna drinking (don't laugh, it happens).

Visa requirements follow Schengen rules: 90 days visa-free for most developed nations.

Best time depends entirely on what you want. Winter (December-March) for Northern Lights, skiing, and Arctic experiences, though it's brutally cold and dark. Summer (June-August) for midnight sun, lakes, and pleasant temperatures (60-70°F), though this is peak tourist season with higher prices. Autumn (September-October) offers fall colors, fewer crowds, and Northern Lights beginning. Spring (April-May) is mud season—skip it.

Finland welcomed 7.4 million tourists in 2024, with winter tourism to Lapland growing rapidly as Northern Lights chasing becomes popular. Summer remains peak season, though.

Finland is expensive—meals $15-25, beer $8-10, hotels pricey by any standard. But the quality matches the cost. Public transportation works perfectly, design is everywhere, and that Finnish concept of "sisu" (roughly: stoic determination, grit, refusing to give up) permeates the culture in ways visitors notice. Finns might not chat with strangers or smile constantly, but they've built a society that functions exceptionally well while maintaining vast wilderness and a deep connection to nature.

The sauna culture deserves special mention—this isn't spa luxury, it's a fundamental social ritual. Public saunas exist in every city, traditional smoke saunas in the countryside, and private saunas in most homes. You haven't experienced Finland until you've done the sauna-lake swimming cycle in winter through an ice hole. It's shocking, possibly dangerous, and utterly addictive.

Finland won't hold your hand or beg you to visit. It's cold, dark, expensive, and the people won't make small talk. But if you value functioning societies, pristine nature, excellent design, and experiences that range from Arctic extremes to summer lake serenity, Finland delivers. Just bring warm clothes and don't expect anyone to chat at the bus stop.`,
    issues: [],
    topStories: [],
    storyCount: 0
  },
  {
    name: 'France',
    type: 'country',
    country: 'France',
    lat: 46.2276,
    lng: 2.2137,
    category: 'travel',
    summary: `France is the world's most visited country (90 million tourists in 2024) for obvious reasons—Paris, wine regions, lavender fields, Alpine skiing, Mediterranean beaches, châteaux, cheese (over 400 varieties), and a cultural supremacy complex that's simultaneously infuriating and justified. But the France of Eiffel Tower selfies and tourist-menu escargot is also the country where farmers still march tractors through Paris when angry, where every village has better bread than American artisan bakeries, and where doing things the "wrong" way is met with Gallic shrugs that communicate entire philosophical positions.

Paris demands acknowledgment first. The Eiffel Tower, Louvre (home to the Mona Lisa and 35,000 other artworks), Notre-Dame (reopening after the 2019 fire), Sacré-Cœur with its views across the city—these are iconic because they've earned it. But Paris's real magic is in wandering: the Marais with its Jewish heritage and current hipster cafés, the Latin Quarter's bookshops, the Canal Saint-Martin at sunset, the Père Lachaise cemetery where Jim Morrison, Oscar Wilde, and Édith Piaf rest. Take the metro like a local ($2 per trip), eat at neighborhood bistros rather than tourist traps, and remember that Parisians aren't rude—they just expect basic politeness like "bonjour" before making demands.

But France extends far beyond the capital. Provence in the south delivers lavender fields (June-July), Roman ruins (the Pont du Gard aqueduct, Arles amphitheater), and hilltop villages like Gordes where time hasn't just slowed—it's given up. The French Riviera offers Mediterranean glamour from Saint-Tropez to Monaco, though it's pricey and crowded. Corsica, the Mediterranean island birthplace of Napoleon, feels more Italian than French with dramatic mountains meeting pristine beaches.

The wine regions deserve pilgrimages. Bordeaux produces some of the world's finest reds, with châteaux offering tours and tastings. Burgundy's Côte d'Or yields legendary Pinot Noirs and Chardonnays from tiny vineyards whose names (Romanée-Conti, Montrachet) make wine collectors weep. Champagne, the region, is where Dom Pérignon perfected the bubbly stuff—tours of houses like Moët & Chandon or smaller producers are essential. The Loire Valley combines wine with Renaissance châteaux—Chambord, Chenonceau, Amboise—that showcase French royal extravagance.

The Alps offer world-class skiing. Chamonix, beneath Mont Blanc (Western Europe's highest peak at 4,808m), is legendary for expert terrain and mountaineering history. Courchevel and Val d'Isère deliver luxury skiing. Summer brings hiking, climbing, and the Tour de France spectacle winding through mountain passes.

Infrastructure is excellent. The TGV high-speed train network connects major cities efficiently—Paris to Lyon in 2 hours, Paris to Marseille in 3. Regional trains and buses reach smaller towns. Roads are superb, though tolls add up on autoroutes (highways). Every village has a bakery, post office, and strong opinions about who makes the best cheese. English is increasingly spoken in cities and tourist areas, though attempting French, however badly, opens doors and hearts.

Accommodation spans every budget: Paris luxury hotels ($400+), charming countryside gîtes ($80-150), hostels ($20-40). French hospitality varies from warmly welcoming to coldly professional, often depending on whether you've bothered learning basic French phrases.

Safety is generally good, though Paris and major cities see pickpocketing targeting tourists, particularly around attractions and on metro. Recent terrorist attacks have left France on edge with heavy security at major sites. Exercise normal vigilance.

Visa requirements: Schengen rules apply—90 days visa-free for most developed nations.

Best time: Spring (April-June) and fall (September-October) offer pleasant weather, fewer crowds, and reasonable prices. Summer (July-August) is peak season—hot, crowded, expensive, but this is when France itself takes vacation (many businesses close in August). Winter works for skiing (December-March) but much of rural France essentially hibernates.

France's 90 million annual tourists create both infrastructure and frustration. Popular sites are mobbed—book Louvre tickets weeks in advance, expect lines at Versailles. But venture to secondary cities—Lyon's food scene, Strasbourg's Alsatian charm, Toulouse's aerospace history—and crowds thin dramatically.

French food culture deserves extended discussion. The baguette laws (yes, actual laws defining what constitutes a proper baguette), the two-hour lunch as sacred right, the regional specialties from Breton crêpes to Provençal bouillabaisse—food here isn't fuel, it's identity. Markets in every town sell produce, cheese, charcuterie that make supermarkets look like sad jokes. Bistros serve classic dishes executed properly: coq au vin, duck confit, tarte tatin. Michelin stars abound for those with budget, but even truck stop cafés serve better food than most American restaurants.

France can be expensive (Paris especially), occasionally frustrating (bureaucracy is Byzantine), and yes, some people will be rude if you barrel in speaking loud English. But the art, food, wine, landscapes, and history justify the hype. This is a country where beauty and pleasure are taken seriously, where walking into a random village bakery at 7am for a still-warm pain au chocolat is a transcendent experience, where centuries of culture have produced something genuinely special. The trick is avoiding the tourist clichés while embracing the country's real rhythms—which means slowing down, learning some French, and accepting that France will do things its way regardless of what you think.`,
    issues: [],
    topStories: [],
    storyCount: 0
  }
]

async function saveTravelWriteups() {
  console.log('🌍 Starting Travel & Tourism Batch 4 - 13 countries\n')

  let saved = 0
  let failed = 0

  for (const writeup of TRAVEL_WRITEUPS) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`Processing: ${writeup.name}`)
    console.log('='.repeat(60))

    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: writeup.type,
            category: writeup.category,
          },
        },
        create: {
          name: writeup.name,
          type: writeup.type,
          country: writeup.country,
          lat: writeup.lat,
          lng: writeup.lng,
          category: writeup.category,
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify(writeup.topStories),
          storyCount: writeup.storyCount,
          updatedAt: new Date(),
        },
        update: {
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify(writeup.topStories),
          storyCount: writeup.storyCount,
          updatedAt: new Date(),
        },
      })

      saved++
      console.log(`✅ Saved travel writeup for ${writeup.name}`)
      console.log(`   Character count: ${writeup.summary.length}`)

    } catch (error) {
      console.error(`❌ Failed to save ${writeup.name}:`, error)
      failed++
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`BATCH 4 COMPLETE!`)
  console.log('='.repeat(60))
  console.log(`   ✅ Saved: ${saved} travel writeups`)
  console.log(`   ❌ Failed: ${failed} writeups`)
  console.log(`\nAll travel writeups stored in database with category="travel"`)
}

saveTravelWriteups()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
