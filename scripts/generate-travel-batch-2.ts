import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries for Travel Batch 2
const COUNTRIES = [
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Bhutan', lat: 27.5142, lng: 90.4336 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Bosnia and Herzegovina', lat: 43.9159, lng: 17.6791 },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Brunei', lat: 4.5353, lng: 114.7277 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Burundi', lat: -3.3731, lng: 29.9189 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'Cameroon', lat: 7.3697, lng: 12.3547 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
]

// Travel writeups following Anthony Bourdain/Rick Steves style
const TRAVEL_WRITEUPS: { [key: string]: string } = {
  'Benin': `Landing in Cotonou, you're stepping into West Africa's best-kept secret - a country that delivers the cultural depth of Ghana without the tourist crowds, and the voodoo authenticity that New Orleans only wishes it still had. This slender nation sandwiched between Togo and Nigeria punches well above its weight in historical significance and travel rewards.

Start in Ouidah, the spiritual heart of the voodoo religion and a sobering memorial to the Atlantic slave trade. The Door of No Return stands where an estimated one million enslaved people took their last steps on African soil. The town's Python Temple and annual Voodoo Festival (January 10th) offer genuine encounters with living traditions - not the Hollywood version. Porto-Novo, the official capital, showcases stunning Afro-Brazilian architecture left by freed slaves who returned from Brazil in the 19th century.

The real treasure lies up north. Abomey's Royal Palaces (UNESCO-listed) tell the story of the powerful Dahomey Kingdom through bas-reliefs and oral historians who've maintained these stories for generations. Further north, Pendjari National Park offers some of West Africa's best wildlife viewing - elephants, lions, hippos, and the rare West African giraffe, with a fraction of the tourists you'd find in East African parks. The fortified Tata Somba houses in the Atakora region look like castles designed by Gaudi on a savannah budget.

Infrastructure is basic but functional. Shared taxis and moto-taxis (zemidjan) dominate transport - bumpy but efficient. Accommodation ranges from guesthouses ($15-30) to decent hotels in Cotonou and Grand-Popo's beach lodges ($80-150). The roads connecting major sites are passable, though the rainy season (April-July) can make northern travel challenging.

Benin is genuinely safe for travelers - locals are famously welcoming, and the country has maintained political stability while neighbors have struggled. Petty theft exists in Cotonou's markets, but violent crime against tourists is rare. Most Western nationals need a visa ($100), obtainable online via e-visa system (allow 72 hours). Yellow fever vaccination is mandatory.

Visit November through February for ideal conditions - dry, comfortable temperatures, and the January Voodoo Festival. March to May gets hot and dusty before the rains. Tourism numbers hover around 300,000 annually - meaning you'll have Pendjari's lions largely to yourself. The country gets a tenth of the visitors that neighboring Ghana receives.

Budget $50-80 daily for mid-range comfort, or stretch to $120+ for the few upscale options. French is the official language, but English works in tourist areas. Fon and Yoruba dominate locally.

Here's the thing about Benin: it requires effort. You'll hire guides who become friends, eat fufu in family compounds, and spend hours bouncing in bush taxis discussing everything from Chinese investment to ancestral spirits. But if you want West Africa without the well-worn trail, with history that'll reshape how you think about the diaspora, and voodoo ceremonies where you're the only foreigner present - Benin delivers authenticity that's increasingly rare on this continent.`,

  'Bhutan': `There's something profoundly subversive about a country that measures Gross National Happiness instead of GDP, requires you to spend $200-250 per day minimum, and banned television until 1999. Bhutan isn't playing the mass tourism game - and that's precisely why it works.

The Kingdom in the Clouds delivers on its mystical billing. Paro's Tiger's Nest Monastery (Taktsang) clings to a cliff face 3,000 feet above the valley floor - yes, you've seen the photos, but the three-hour uphill trek and the moment you step into the temple complex carved into the mountainside earns its status as one of Asia's most spectacular sites. Punakha Dzong, the winter home of Bhutan's monastic body, sits at the confluence of two rivers surrounded by jacaranda trees that bloom purple in spring. Thimphu, the world's only capital without traffic lights, mixes government dzongs, craft markets, and legitimate nightclubs where locals dance to Bollywood remixes.

But venture beyond the greatest hits. The Phobjikha Valley hosts rare black-necked cranes (November-February), where you'll stay in farmhouse homestays and wake to valley fog burning off prayer flags. The eastern districts - Bumthang, Mongar, Trashigang - see far fewer tourists but offer deeper immersion into traditional life. The Trans-Bhutan Trail, fully restored in 2022, traces 250 miles of ancient pathways connecting dzongs and villages across the kingdom.

Here's the deal with Bhutan's tourism model: you pay a $200-250 daily Sustainable Development Fee (lower for Indian/Bangladeshi/Maldivian citizens), which includes accommodation, meals, guide, and transport. No independent travel - you'll book through licensed operators who arrange everything. This keeps numbers manageable (around 100,000 annual visitors pre-COVID, rebuilding toward that now) and ensures tourism revenue reaches communities. You'll have knowledgeable guides explaining Buddhist iconography, local politics, and which chilies go into ema datshi (the national dish of cheese and peppers that appears at every meal).

Infrastructure is surprisingly solid. Druk Air and Bhutan Airlines fly into Paro - the landing between mountain peaks is worth the flight cost alone. Roads are paved but winding (Thimphu to Punakha takes 3 hours for 45 miles). Hotels range from comfortable three-stars to the luxury Amankora and COMO Uma properties ($800+ per night, with the daily fee still on top).

Safety is exceptional - Bhutan has minimal crime and locals follow a Buddhist ethical code that emphasizes compassion. You're more likely to be invited to a family altar room than experience any theft. Visas are processed through your tour operator (no e-visa option). Indian, Bangladeshi, and Maldivian citizens enter visa-free but still pay the SDF.

Visit March-May for rhododendron blooms and clear mountain views, or September-November for festivals (tshechus) with masked dances and post-monsoon clarity. December-February is cold but clear with fewer tourists. Monsoon (June-August) means leeches and clouds.

Bhutan is expensive, highly regulated, and makes no apologies for either. You can't show up with a backpack and wing it. But if you can afford the daily fee and accept structured travel, you're getting something increasingly rare: a Buddhist kingdom that's maintained its cultural identity while modernizing on its own terms, where sustainability isn't marketing spin but actual policy, and where tourism feels like a privilege rather than a transaction.`,

  'Bolivia': `Bolivia is South America's most indigenous nation, its poorest country, and quite possibly its most fascinating - the kind of place where you'll find 19th-century locomotives rusting on salt flats the size of Connecticut and cholitas selling llama fetuses in witch markets before heading to professional wrestling matches in bowler hats and pleated skirts.

The Salar de Uyuni earns its Instagram fame legitimately - the world's largest salt flat creates mirror effects during rainy season (December-April) and blinding white geometric patterns when dry. But the three or four-day tours from Uyuni also take you through the Eduardo Avaroa Reserve with its red lagoons, bizarre rock formations, hot springs, and flamingos at 14,000+ feet. Stay in basic salt-block hotels and prepare for freezing nights. Further southwest, the Siloli Desert looks like Salvador Dalí painted a landscape and left it to erode.

La Paz commands attention by sheer topography - the world's highest capital city (officially it's the seat of government; Sucre is the constitutional capital) spills down a canyon with the snowcapped Illimani looming overhead. The Mi Teleférico cable car system (the world's highest and longest) provides the daily commute for millions and spectacular views for you. The Witches Market sells dried llama fetuses for construction blessings, while the Valley of the Moon offers hiking through bizarre clay formations just outside the city.

Don't skip Sucre, the white city with Spanish colonial architecture and a strong claim to the best climate in South America. Potosí's Cerro Rico, the mountain that funded the Spanish Empire, still operates mines you can tour (claustrophobically) with active miners sharing coca leaves and dynamite. Lake Titicaca's Isla del Sol features Inca ruins and homestays with Aymara families. The Yungas Road, once called "Death Road," is now a mountain biking adventure dropping 11,000 feet from Andes to Amazon.

Infrastructure requires patience and coca leaves. Altitude hits hard - La Paz sits at 11,975 feet, meaning your first days involve headaches, shortness of breath, and accepting that your body needs time. Roads between major sites are paved but winding; expect 12-hour bus rides for 200 miles. Bolivia's extensive bus network is cheap ($2-15 for long distances) and ranges from basic to luxury. Accommodation runs $10-25 for decent budget options, $50-100 for comfort in cities.

Safety is manageable with sensible precautions. Petty theft occurs in cities and on buses - don't flash valuables, watch your bags on night buses. Demonstrations and road blockades happen - locals protest by blocking highways, sometimes for days. Check current political conditions. The police can be helpful but also corrupt (carry only photocopy of your passport). Most nationalities get 90-day tourist visas on arrival free (Americans: check current status, as it fluctuates with diplomatic relations).

Visit May-October for dry season and clear skies, especially for trekking and salt flat tours. November-March brings rain, making some roads impassable but creating the Salar's mirror effect. Altitude affects seasons - the altiplano stays cold year-round, while the lowlands around Santa Cruz are hot and humid.

Tourism reaches around 1.5 million annually - popular routes are well-trodden, but Bolivia sees a fraction of Peru's crowds. Budget travelers thrive here ($25-35 daily), while mid-range comfort runs $60-100.

Bolivia demands resilience - the altitude, the bumpy roads, the bureaucracy, the protests. But it rewards the effort with the most indigenous culture in South America, landscapes that defy description, and the feeling that you're traveling through a country that hasn't homogenized itself for tourist convenience.`,

  'Bosnia and Herzegovina': `Two decades after war ended, Bosnia and Herzegovina remains one of Europe's most misunderstood destinations - travelers arrive expecting ruins and sadness, then spend weeks exploring Ottoman lanes, eating ćevapi, rafting emerald rivers, and wondering why nobody told them about this sooner.

Sarajevo is the emotional core. Baščaršija, the old bazaar, could be Istanbul's little brother - coppersmith lanes, courtyard mosques, burek shops where phyllo dough gets hand-stretched at 3am. Walk Latin Bridge where Gavrilo Princip's assassination of Franz Ferdinand triggered WWI, then follow the Sarajevo Roses - mortar shell scars filled with red resin marking civilian deaths from the 1992-1995 siege. The Tunnel Museum shows the narrow passage under the airport that kept the city alive under Serbian siege. It's heavy history, but Sarajevo balances remembrance with remarkable resilience - sidewalk cafes overflow, beer gardens pump Balkan brass, and the city's legendary nightlife runs until dawn.

Mostar's Stari Most (Old Bridge) is the postcard image - a 16th-century Ottoman arch over the Neretva River, destroyed in 1993, rebuilt by 2004. Local divers leap from the bridge for tips (75 feet down into freezing water - it's as insane as it looks). But stay past the day-trippers: evening light on the limestone cliffs, dinner at riverside restaurants where trout comes straight from the Neretva, and the realization that the city's east-west divide between Bosniak and Croat populations still shapes daily life in uncomfortable ways.

The countryside delivers what travelers come to the Balkans hoping to find. Jajce has a waterfall in the town center and medieval fortifications. Blagaj's Tekke monastery emerges from a cliff at the Buna River spring - photograph it, then have trout at cliffside restaurants. Počitelj looks frozen in the 16th century - stone houses climbing a hillside with a tower offering valley views. The Una River near Bihać offers rafting, kayaking, and waterfalls in Bosnia's greenest corner. Sutjeska National Park shelters primeval forest (UNESCO-listed) and Maglić, the country's highest peak at 7,828 feet.

Infrastructure works well in the Federation (Bosniak-Croat entity) but varies in Republika Srpska (Serb entity) - this complex governance structure remains a war legacy. Buses connect all major sites reliably and cheaply ($5-15 between cities). Roads are decent, though rural mountain routes get winding. Accommodation ranges from hostels ($12-20) to guesthouses ($30-50) to boutique hotels in Sarajevo and Mostar ($80-120).

Safety is generally good - war-era minefields are marked and cleared near tourist areas, but hiking off-trail in remote regions carries risk. Petty crime is low; Sarajevo and Mostar are safe to walk at night. The ethnic tensions that fueled war haven't disappeared, but violence is rare. Avoid political discussions unless locals initiate. Most nationalities get 90 days visa-free. The currency is the Convertible Mark (BAM), pegged to the Euro.

Visit May-June or September for ideal weather without peak crowds. July-August brings tourists and heat. Winter (December-March) is cold but great for skiing at Jahorina and Bjelašnica (yes, the 1984 Olympics mountains). Tourism has climbed to around 1.5 million annually - still modest by European standards, meaning you'll have many sites largely to yourself.

Budget $40-60 daily for comfortable independent travel. Meals are absurdly cheap - a plate of ćevapi with kajmak cream runs $4-6, coffee $1-2. English works in tourist areas; learning basic Bosnian/Croatian/Serbian phrases earns smiles.

Bosnia won't coddle you - war history confronts you, bureaucracy confuses you (two entities, three official languages, rotating presidency), and some destinations require effort. But it offers the Balkans before mass tourism arrived: profound history, mountain scenery, genuine hospitality, and the satisfaction of discovering a place before everyone else does.`,

  'Botswana': `Botswana wrote the manual on how to do African tourism right: prioritize quality over quantity, protect ecosystems over profit, and charge rates that fund conservation while keeping visitor numbers sustainable. The result is Southern Africa's most exclusive safari destination, where wildlife encounters rival Tanzania's but in settings you might have to yourself.

The Okavango Delta is the jewel - the world's largest inland delta, where the Okavango River fans across 6,000 square miles of Kalahari sand creating a wetland paradise. Traditional mokoro (dugout canoe) trips glide through lily-covered channels where elephants wade belly-deep, hippos grunt warnings, and fish eagles call from leadwood trees. Game drives from camps find lions on termite mounds, leopards in sausage trees, and those legendary African wild dog packs that Botswana protects better than anywhere. Stay at luxury tented camps ($600-1,500 per person per night, all-inclusive) or opt for more affordable mobile camping safaris ($300-500).

Chobe National Park hosts Africa's highest elephant concentration - 50,000+ animals that gather along the Chobe River in dry season (May-October). Boat safaris at sunset deliver herds crossing the river, hippos surfacing, crocodiles sunning on banks. The northern riverfront gets busy; the remote Savuti and Linyanti areas see fewer vehicles and more predators.

The Makgadikgadi Pans - vast salt flats left by a prehistoric superlake - flood during rains (December-April) attracting zebra and wildebeest migrations, then dry into alien white emptiness where you can quad bike across the pancake-flat horizon. Camp on the pans under stars so thick you'll understand why Botswana has Africa's best astro-tourism. The Central Kalahari Game Reserve sprawls larger than Switzerland with black-maned Kalahari lions, springbok, and the San (Bushmen) who've adapted to this harsh environment for millennia.

Infrastructure reflects Botswana's high-value, low-volume model. Most Okavango camps are fly-in only (light aircraft between dirt airstrips), limiting numbers and impact. Maun serves as the gateway town - functional rather than charming. Self-drive is possible in Chobe and along main routes with 4x4 rental ($80-150/day), though many parks require advance permits and camping bookings. Roads connecting towns are paved; game reserve tracks are sand and require high-clearance 4x4s.

Botswana is exceptionally safe - stable democracy since independence, low corruption, minimal crime. Wildlife is the main safety concern: hippos and elephants kill more people than lions. Follow guide instructions, never walk between camp and river after dark. Medical facilities in Gaborone and Maun are adequate; serious issues get airlifted to South Africa. Most nationalities get 90-day tourist visas on arrival free.

Visit dry season (May-October) for easiest wildlife viewing as animals concentrate around water sources. June-August is peak - cooler temperatures but higher prices and more visitors. Green season (November-April) brings rains, lush landscapes, newborn animals, lower prices ($400-800 vs. $800-1,500), and incredible birding, though some areas become inaccessible.

Tourism numbers stay deliberately low - around 300,000 annually, with strict quotas in protected areas. This isn't Kenya-scale safari operations; you'll pay more but share the delta with herons and bee-eaters rather than tour buses.

Budget $250-400 daily for camping safaris and mid-range lodges, $500-1,000+ for luxury camps. It's expensive, unapologetically so. Cheaper options exist - self-drive camping in national parks, mobile safaris, guesthouses in Maun and Kasane ($40-80) - but Botswana fundamentally targets the higher end.

Botswana demands deep pockets and advance planning - the spontaneous budget backpacker scene doesn't exist here. But what you're buying is Africa as it should be: protected, uncrowded, and so wildlife-rich that your lodge sundowner gets interrupted by elephants ambling through camp. If you can afford it, few places on earth deliver this combination of wilderness quality and conservation integrity.`,

  'Brazil': `Brazil is continental in scale and ambition - the country spans three time zones, holds 60% of the Amazon rainforest, hosts the world's most famous carnival, and moves to rhythms that make the rest of South America look conservative. You could spend years here and barely scratch the surface.

Rio de Janeiro delivers the iconic images: Christ the Redeemer spreading arms over Guanabara Bay, Sugarloaf rising from the water, Copacabana and Ipanema beaches where cariocas perfect the art of the beach body. But Rio's real magic lives in the botecos of Santa Teresa, the samba clubs of Lapa where locals dance until sunrise, and Sunday afternoon rodas de samba where percussion circles in the parks. Favela tours (book with community-run outfits like Favela Tour or local guides) show the 25% of Rio's population living in hillside communities the postcard shots ignore. The Selaron Steps, Botanical Gardens, and sunset views from Arpoador Rock round out the standard Rio hits.

São Paulo is Brazil's economic engine and cultural heavyweight - 22 million people, world-class restaurants (D.O.M., Maní), museums (MASP's collection, Pinacoteca), street art covering entire neighborhoods (Vila Madalena), and nightlife that makes Rio look sleepy. It's concrete and chaotic, but food-focused travelers find paradise in everything from Japanese-Brazilian fusion in Liberdade to Syrian-Lebanese in Bom Retiro to modernist fine dining.

The Northeast delivers Brazil's African soul. Salvador's Pelourinho district mixes Portuguese colonial architecture with Candomblé ceremonies and Afro-Brazilian culture that pulses through capoeira circles and acarajé stalls. Olinda's carnival rivals Rio's but stays more accessible and traditional. Beach towns from Maragogi to Jericoacoara offer reef-protected swimming, dune landscapes, and seafood grilled over coconut husks. Lençóis Maranhenses National Park is pure surrealism - vast white sand dunes filled with turquoise lagoons (June-September).

Iguaçu Falls does the impossible - exceeds the hype. The Brazilian side offers panoramic views of 275 falls crashing into the jungle canyon. Cross to Argentina's side for walkways that put you directly into the Devil's Throat - prepare to be soaked. The Pantanal is the accessible Amazon - the world's largest wetland spreads across 54,000 square miles with jaguar populations so dense you have legitimate chances of seeing them (dry season, July-October). Stay at fazenda lodges ($150-400 per night) for game drives, horseback rides, and piranha fishing.

The actual Amazon requires commitment. Manaus serves as the gateway - tour the opera house left from rubber boom wealth, then head upriver to jungle lodges. Multi-day riverboat trips on the Amazon and Negro rivers range from basic hammock-slung transport to comfortable expedition vessels. Pink river dolphins, howler monkeys, three-toed sloths, and the realization that you're in the planet's most biodiverse ecosystem.

Infrastructure varies wildly. São Paulo, Rio, and major cities have metro systems, good buses, and Uber. Flights connect distant regions - Brazil's huge, and buses take 30+ hours between distant cities. Roads near coasts and cities are solid; interior routes can be rough. Accommodation runs from R$50 ($10) hostels to R$500+ ($100+) boutique hotels. Brazil's hospitality industry is well-developed across all budgets.

Safety requires awareness. Rio and São Paulo have high crime rates - don't flash expensive cameras, phones, or jewelry. Use registered taxis or Uber. Avoid favelas without local guides. Beach theft is common - bring minimum valuables. After dark, stick to well-lit tourist areas or go with locals. Police can be corrupt; carry photocopies of documents, not originals. That said, millions travel Brazil safely - just stay alert.

Most nationalities get 90-day tourist visas on arrival (Americans: check current reciprocity requirements). Yellow fever vaccination is recommended for Amazon, Pantanal, and Iguaçu regions.

Visit December-March for summer (carnival is February/March), though this is peak season with higher prices and crowds. April-June and August-November offer better deals and weather. Avoid July (Brazilian winter vacation) for domestic tourism. Regional climates vary enormously - the Amazon is hot and rainy year-round, the Northeast is warmest December-March, the South gets genuinely cold June-August.

Brazil hosts around 6-7 million international tourists annually, though domestic tourism dwarfs that. Popular sites get crowded during holidays and carnival.

Budget $50-80 daily for hostel/guesthouse, street food, and buses. Comfort runs $100-150 with hotels, restaurants, and some flights. Luxury travelers easily spend $300+ in top-end Rio or São Paulo. The real (R$) fluctuates but generally offers value.

Portuguese is essential - English works in tourist hotels but nowhere else. Learning basic phrases opens doors. Brazilians are famously warm, social, and patient with terrible Portuguese attempts.

Brazil is complicated - the economic inequality shocks, the bureaucracy frustrates, the distances exhaust. But it's also transcendent: nowhere else combines this natural diversity, cultural richness, musical genius, and human warmth. You'll leave planning the return trip before you've even left.`,

  'Brunei': `Brunei Darussalam is one of the world's wealthiest nations per capita, an absolute monarchy where the Sultan's palace has 1,788 rooms, citizens pay no income tax, and gold-domed mosques announce a strictly observant Islamic state on Borneo's north coast. It's also one of Southeast Asia's least-visited countries - which makes it either intriguingly off-radar or skippably dull, depending on your appetite for unconventional destinations.

The Omar Ali Saifuddien Mosque in Bandar Seri Begawan (the capital) gleams with Italian marble, Shanghai granite, and English chandeliers - pure opulence as state architecture. Its lagoon reflection shot is Brunei's postcard image. The even larger Jame' Asr Hassanil Bolkiah Mosque features 29 golden domes (one for each Sultan). The Royal Regalia Museum showcases the Sultan's coronation chariot, gifts from world leaders, and enough ceremonial regalia to fill a wing of Versailles - and it's free.

Kampong Ayer, the "Venice of the East," is a water village built on stilts over the Brunei River where 30,000 people live in wooden houses connected by 23 miles of boardwalks. It's been here for centuries - homes have WiFi and satellite dishes, while boats serve as taxis. Take a water taxi tour ($20-30) to see village life, visit homes (if invited), and understand that this isn't a tourist attraction but an actual living community.

The Ulu Temburong National Park offers Brunei's best nature experience - pristine rainforest accessed by longboat up the Temburong River, then a canopy walkway rising 165 feet above the jungle floor. Day trips run from BSI ($100-150) including permits, transport, and guides. The untouched dipterocarp forest hosts hornbills, proboscis monkeys, and the knowledge that oil wealth has allowed Brunei to protect 70% of its land as forest.

Here's what you need to know about Brunei's restrictions: it's a "dry" country - no alcohol sold or consumed (officially), though some hotels quietly allow non-Muslim guests to bring duty-free amounts to rooms. Sharia law has been controversial - homosexuality is criminalized, though enforcement focuses on Muslims and prosecutions are rare for tourists. Dress modestly - cover shoulders and knees. Ramadan significantly affects restaurant hours.

Infrastructure is excellent but limited. Bandar Seri Begawan is small, clean, and quiet - almost unnervingly quiet, as nightlife basically doesn't exist. The country has good roads, clean buses ($1 anywhere in the capital), cheap taxis, and everything closes by 9pm except for a few restaurants. The airport connects to Singapore, Kuala Lumpur, Manila, and a handful of other cities. English is widely spoken alongside Malay.

Brunei is extraordinarily safe - crime rates are among the world's lowest. You'll see women walking alone at night, valuables left unattended. The biggest danger is boredom. Many nationalities get visa-free entry (14-90 days depending on nationality). The Brunei dollar is pegged 1:1 with Singapore dollars, and both are accepted.

Visit year-round - it's hot (80-90°F) and humid always, with more rain November-February. Tourism numbers are tiny - around 200,000 annually, many just day-tripping from Malaysia.

Budget $60-100 daily. Hotels run $40-80 for mid-range, $150+ for the Empire Hotel & Country Club (a monument to excess built by the Sultan's brother). Food is cheap ($3-8 for local meals at hawker centers) and excellent - nasi katok (chicken with rice and sambal) is the national dish, plus Malay curries, ambuyat (a tapioca dish), and strong Chinese Bruneian food scene.

Brunei is unusual: ultra-wealthy but not flashy (publicly), Islamic but not militant, pristine but not adventure-focused. It's often combined with Malaysian Borneo trips - fly into Brunei, see the mosques and water village, then continue to Sabah or Sarawak. As a standalone destination, it's for travelers who appreciate quiet, curious about absolute monarchies, or collecting undervisited countries.

Nobody goes to Brunei for wild nightlife or backpacker scenes. You come because it's a functioning anomaly: peace and prosperity maintained through oil wealth and authoritarian stability, where you can admire spectacular mosques, explore genuine stilt villages, trek pristine rainforest, and contemplate what a country looks like when it has no external debt and subsidizes citizens' entire lives.`,

  'Bulgaria': `Bulgaria is the Balkans' bargain secret - a country with Black Sea beaches, ski resorts, Roman ruins, Orthodox monasteries, and some of Europe's best hiking, all priced at a fraction of Western European costs. It's also where yogurt (kiselo mlyako) was allegedly invented, where the Cyrillic alphabet originated, and where rose oil production perfumes entire valleys.

Sofia surprises visitors who expect Balkan grit and instead find café culture, Roman ruins beneath the metro, the stunning Alexander Nevsky Cathedral with its gold-domed Byzantine grandeur, and Mount Vitosha looming over the city offering hiking in summer and skiing in winter - all reachable by metro ($1.50). The city mixes Ottoman mosques, Soviet monuments, trendy bars in the Oborishte district, and an emerging foodie scene reclaiming traditional Bulgarian cuisine. The National History Museum showcases Thracian gold treasures that rival anything in Athens.

Plovdiv, Europe's oldest continuously inhabited city and 2019 European Capital of Culture, spreads over seven hills with its Old Town of National Revival-era houses in pastel blues and ochres, a stunning Roman amphitheater still hosting concerts, and the Kapana creative district filled with galleries, craft beer bars, and street art. Wander the cobblestones, have wine in courtyard restaurants, and realize Plovdiv delivers what travelers loved about Prague before it got expensive.

The Rila Monastery, Bulgaria's most iconic sight, sits in a mountain valley surrounded by forests - vivid frescoes covering every inch of the arcade, the black-and-white striped church, monks still in residence. Nearby, the Seven Rila Lakes offer alpine hiking through glacial lakes reflecting pine forests and rocky peaks. The Pirin and Rhodope Mountains provide endless trekking, while ski resorts like Bansko and Borovets offer reliable snow (December-March) at $25-40 daily lift passes.

The Black Sea coast balances beach resorts with historic towns. Nesebar's ancient peninsula, connected to the mainland by a narrow isthmus, packs Byzantine churches and wooden houses into a UNESCO-listed Old Town. Sozopol offers a similar vibe with better seafood. Sunny Beach is mass-tourism beach sprawl - avoid unless that's your scene. Burgas and Varna have city beaches, culture, and ferry connections.

Veliko Tarnovo cascades down hillsides overlooking the Yantra River, with the Tsarevets Fortress perched on a hilltop where Bulgaria's medieval tsars ruled. The town's cobblestone lanes, artisan workshops, and the Samovodska Charshia craft market make it worth several days. The nearby village of Arbanasi preserves stone houses and frescoed churches from the Ottoman era.

Infrastructure works well. Trains connect major cities slowly and cheaply ($5-10 for long routes), though buses are faster and more extensive. Roads are improving - major routes are fine, rural mountain roads can be rough. Sofia has a metro and good buses; other cities rely on buses and taxis. Accommodation ranges from $12-20 hostels to $40-70 mid-range hotels to luxury Black Sea resorts.

Safety is generally good. Sofia and beach towns have pickpockets - watch bags in crowds. After dark, stick to well-lit areas. Stray dogs roam some cities but rarely cause problems. Scams targeting tourists exist (inflated taxi fares, restaurant bill padding) - agree on prices beforehand. Most EU citizens enter visa-free for 90 days; many other nationalities get the same.

Visit May-June or September for ideal weather and fewer crowds. July-August are hot and bring beach resort crowds. December-March is ski season. Spring brings rose harvest in the Valley of Roses (early June) - a fragrant spectacle and festival time.

Bulgaria attracts around 9-10 million tourists annually, mostly to Black Sea resorts, meaning inland attractions stay pleasantly uncrowded.

Budget $30-50 daily for comfortable backpacker travel - hostels, local meals ($5-8), buses. Mid-range comfort runs $60-90. Food is a highlight: banitsa (cheese pastry), shopska salad, kebapche and kyufte (grilled meats), tarator (cold yogurt soup), and wine from regions that have been producing since Thracian times.

English works in tourist areas and with younger people; older generations speak Russian from Soviet days. Learning Cyrillic helps enormously with signs and menus.

Bulgaria offers exceptional value and variety - you can hike pristine mountains, tour Roman ruins, soak in Ottoman baths, and feast on grilled meats and red wine for less than you'd pay for lunch in London. It's not undiscovered - beach resorts get packed with Russian and Romanian tourists - but the interior feels genuinely overlooked by Western travelers who haven't yet realized what a gem this is.`,

  'Burkina Faso': `Burkina Faso translates to "Land of Upright People" - a Sahel nation of resilient dignity facing challenges that would break lesser places. Be upfront: as of 2025, ongoing jihadist insurgency across the north and east, plus recent coups, make much of Burkina Faso unsafe for travelers. Western governments advise against all but essential travel to large regions. This writeup acknowledges those realities while describing what makes Burkina Faso culturally significant for the minority of travelers - aid workers, journalists, researchers - who still go.

Ouagadougou, "Ouaga," serves as the capital and cultural heart. FESPACO, the Pan-African Film and Television Festival (held every odd year in February), transforms the city into Africa's Cannes - filmmakers from across the continent screen works that challenge, celebrate, and critique African realities. The festival demonstrates Burkina's outsize cultural influence despite economic hardship. The National Museum showcases traditional masks, royal artifacts, and contemporary art. The Grand Mosque blends Sudano-Sahelian architecture with modern elements.

Bobo-Dioulasso, the country's second city, retains a relaxed vibe with the old quarter of Kibidwe offering traditional mud-brick architecture, the Grand Mosque built in characteristic West African clay style, and live music venues keeping Burkinabè music traditions alive. The nearby Dômes de Fabédougou features surreal rock formations, while the Karfiguela Falls offers a swimming hole and picnic spot.

The artistic traditions remain powerful. Masks from the Bwa, Mossi, and Gurunsi peoples represent complex cosmologies - you'll see them in museum collections worldwide, but understanding them in cultural context requires respectful engagement with living traditions. The pottery and painted houses of Tiébélé in the southeast showcase Kassena architecture - geometric mud-brick compounds decorated with mineral-based paints in striking patterns. Women maintain these designs, repainting after each rainy season.

Infrastructure is basic. Ouaga has functional hotels, restaurants, and an international airport with connections to regional hubs (Abidjan, Accra, Dakar, Casablanca). Roads connecting major cities are paved but potholed; rural roads are often dirt tracks impassable during rainy season (June-October). Shared taxis and bush taxis connect towns. Electricity and water can be intermittent outside the capital.

Security is the paramount concern. Jihadist groups affiliated with JNIM (al-Qaeda) and Islamic State operate across northern and eastern regions, conducting attacks on military targets and civilians. Kidnapping risk exists, particularly for Westerners. Military checkpoints are common. The 2022 coup and subsequent government changes have created political uncertainty. If you go, hire local security consultants, follow embassy guidance, and accept that large portions of the country are inaccessible.

For those who must travel there: French is the official language and widely spoken. Mossi and Dioula are major local languages. Yellow fever vaccination is mandatory; malaria prophylaxis essential. Most nationalities can get visas on arrival ($35-50) at Ouagadougou airport, though check current regulations given political instability.

Visit dry season (November-February) when temperatures are cooler (though still hot - 85-95°F) and roads are passable. March-May is brutally hot (100°F+). Rainy season (June-October) brings humidity and flooding.

Tourism numbers have collapsed - from never-huge peaks of around 300,000 annually to a fraction of that as security deteriorated. The industry that existed served regional travelers, aid workers, and cultural tourists coming for FESPACO or artisan traditions.

Budget $50-80 daily if you're there for work - hotels in Ouaga run $40-100, meals $8-15 at decent restaurants, transport adds up with security considerations. This isn't budget backpacker travel.

Burkina Faso's challenges are real and ongoing - grinding poverty (among the world's poorest countries), security threats, political instability, and climate change hitting Sahel agriculture. Yet the culture persists: the filmmakers still make movies, the musicians still perform, the artisans still create. If you encounter Burkinabè people - in the diaspora or if work takes you there - you'll find the dignity and uprightness the country's name promises. Just understand that leisure tourism to Burkina Faso isn't currently advisable for the vast majority of travelers.`,

  'Burundi': `Burundi is among Africa's least-visited countries - a tiny, landlocked nation on Lake Tanganyika's northeastern shore, still recovering from civil war that ended in 2005 and recent political instability that keeps most travelers away. Western governments maintain travel warnings. Yet for the few who go - NGO workers, missionaries, intrepid travelers, and those with regional connections - Burundi offers a glimpse of East Africa before tourism industries transformed it.

Bujumbura, the lakeside capital (the official capital moved to Gitega in 2019, though government functions remain split), stretches along Lake Tanganyika with the Rusizi National Park at its northern edge where hippos and crocodiles gather. The city has faded colonial architecture, the Livingstone-Stanley Monument marking where Stanley allegedly found Livingstone in 1871 (actually nearby Ujiji in Tanzania, but the monument stands here anyway), and lakeshore beaches where locals play drums and drink Primus beer. The Musée Vivant showcases Burundian culture through traditional dance, crafts, and a small menagerie.

Lake Tanganyika is the real draw - the world's longest (420 miles) and second-deepest freshwater lake, home to hundreds of cichlid species found nowhere else. Swimming is possible in designated areas (avoid bilharzia), while boat trips offer fishing (Nile perch, tilapia) and visiting lakeside villages. Saga Beach and Plage des Cocotiers provide weekend escape for Bujumbura residents and the small expat community.

Gitega, in the central highlands, became the official capital in 2019. The National Museum holds the karyenda, the royal drums of Burundi's monarchy (abolished in 1966 but culturally significant), plus ethnographic exhibits. The Source du Nil monument south of Gitega marks the Nile's southernmost source - more symbolic than dramatic, but significant for geography nerds.

The Kibira National Park protects montane rainforest in the northwest with chimpanzees, black-and-white colobus monkeys, and over 200 bird species. Access is difficult - poor roads, limited infrastructure, guides necessary through Bujumbura tour operators ($150-250 per day all-in). Rusizi National Park and Ruvubu National Park exist but have minimal tourist infrastructure and wildlife populations diminished by poaching during conflict years.

Infrastructure is extremely basic. Bujumbura has a few hotels ($40-100/night for decent options), restaurants serving brochettes (grilled meat skewers), whole grilled fish from the lake, and ubiquitous ugali. Outside the capital, lodging is scarce and basic. Roads connecting main towns are paved but potholed; rural roads are dirt tracks. Public transport relies on buses and shared minibuses - overcrowded, slow, cheap ($2-5 for long routes).

Security requires serious consideration. The 2015 political crisis saw violence, and tensions remain. The 2020 elections brought new leadership but international concerns about human rights persist. Armed robbery occurs, particularly at night. Travel after dark is risky. Grenade attacks and armed groups operate in some areas. Check current embassy warnings and hire local contacts who understand ground reality.

Most nationalities need visas ($90 for most Western countries), obtainable at the airport - bring exact USD cash. Yellow fever vaccination is mandatory if arriving from endemic areas; malaria prophylaxis is essential. Medical facilities are extremely limited - serious issues require evacuation to Nairobi or Kigali.

Visit dry seasons (June-August or December-February) when roads are passable and lake weather is calmer. Wet seasons (March-May, September-November) bring heavy rains making rural travel difficult.

Tourism numbers barely register - perhaps 5,000-10,000 annually, mostly business travelers, aid workers, and regional visitors. Leisure tourism infrastructure essentially doesn't exist.

Budget $60-100 daily minimum - hotels, meals, and hiring drivers/guides add up. This is not a budget backpacker destination despite being one of the world's poorest countries. The Burundian franc (BIF) is the currency; bring USD or Euros to exchange.

French is the official language along with Kirundi. English is limited outside international organizations. Swahili works in Bujumbura.

Burundi is not for casual tourists. It's among the world's poorest countries (bottom 5 by GDP per capita), faces ongoing political fragility, and lacks tourism infrastructure. If work or curiosity brings you, you'll find beautiful mountain landscapes, lake vistas, and welcoming people navigating extraordinary hardship with dignity. The drumming traditions, the lake culture, and the resilience are real - but this is a destination that requires serious preparation, risk acceptance, and understanding that comfort and ease won't be part of the experience.`,

  'Cambodia': `Cambodia has transformed from Southeast Asia's tragic outlier to its thriving mid-range destination - a country where Angkor Wat lives up to impossible hype, where the Killing Fields confront you with genocide's horror, and where a young population (median age 26) drives a palpable energy toward the future while grappling with the past.

Angkor Archaeological Park deserves its UNESCO status and the 2+ million annual visitors. Angkor Wat at sunrise is touristy for good reason - the temple's reflection in the lotus pond, the scale of the largest religious monument on earth, the intricate bas-reliefs depicting Hindu epics. But skip the crowds by hitting Ta Prohm (the "Tomb Raider temple" where spung trees devour stone galleries) at opening, climbing Phnom Bakheng at sunset instead of Angkor Wat, and exploring outer temples - Banteay Srei's pink sandstone carvings, the remote Beng Mealea being swallowed by jungle, and the massive faces of Bayon. Get a three-day pass ($62) minimum, hire a knowledgeable guide ($35-50/day), and escape the selfie crowds by going deep.

Siem Reap, the gateway town, has evolved from backpacker strip to boutique hotel destination. Pub Street delivers exactly what it promises - cheap beer ($0.50), amok curry ($3-5), and crowds. Escape to the Old French Quarter's galleries, the Angkor Night Market's crafts, or cooking classes at Khmer restaurants. Phare Circus showcases acrobatics and Cambodian stories through performance that rivals Cirque du Soleil at a fraction of the price ($18).

Phnom Penh demands emotional engagement. The Royal Palace gleams with Khmer architecture, the National Museum holds Angkor-era sculpture, and the riverfront promenade gets lively at sunset. But S-21 Prison and the Choeung Ek Killing Fields are essential, devastating visits. S-21 (Tuol Sleng) was a high school converted to Khmer Rouge interrogation center where 17,000 people were tortured; the classrooms still hold metal bed frames and photographs of victims. The Killing Fields outside town mark mass graves where at least 1.4 million Cambodians died 1975-1979. Audio guides include survivor testimonies. It's brutal, necessary history.

The coast offers beach time without Thai resort development (yet). Sihanoukville has declined into Chinese casino sprawl - skip it unless you enjoy construction noise. Instead, hit the southern islands: Koh Rong and Koh Rong Sanloem offer white sand, bioluminescent plankton, and beach bungalows ($10-50). Kampot and Kep provide riverside/seaside colonial charm, pepper plantations, crab markets, and slower paces.

Battambang makes an excellent detour - French-colonial architecture, the bamboo train (a single-track railway where bamboo platforms carry passengers and cargo), Phnom Sampeau's temple and cave sheltering thousands of bats that stream out at sunset, and the countryside's rural Khmer life. Tonle Sap Lake's floating villages near Siem Reap show communities entirely on water - homes, schools, churches floating and moving with the seasons.

Infrastructure has improved dramatically. Roads connecting Phnom Penh, Siem Reap, and Sihanoukville are paved and decent. Buses are comfortable and cheap ($5-15 between cities). Siem Reap and Phnom Penh have international airports. Accommodation ranges from $5-10 dorm beds to $30-60 mid-range hotels to luxury properties like Park Hyatt and Raffles ($200-400+). Tuk-tuks are everywhere ($2-5 for short trips).

Safety is generally good for tourists. Bag snatching by moto occurs in Phnom Penh - don't carry bags on the street-side shoulder. Landmines remain in remote areas - stick to marked paths. The police are often corrupt - carry passport photocopies, not originals. Petty scams exist (tuk-tuk overcharging, etc.), but violent crime against tourists is relatively rare. Most nationalities get 30-day e-visas ($36 plus $7 processing) or visas on arrival at airports.

Visit November-March for dry season and cooler temperatures (80-85°F). April-May is brutally hot (95°F+). June-October is rainy season - Angkor is greener, prices lower, and crowds thinner, but expect afternoon downpours.

Cambodia hosts around 5-6 million international tourists annually (recovering from COVID drops), with Angkor Wat the main draw.

Budget $25-40 daily for hostel/guesthouse, street food, temples. Mid-range comfort runs $60-90. The Cambodian riel exists, but US dollars are used everywhere (you'll get riel as change for small amounts). ATMs dispense dollars.

English is widely spoken in tourist areas. Khmer is the local language - learning a few words earns smiles.

Cambodia is no longer cheap backpacker Asia - Siem Reap's prices increasingly match Bangkok's. But it offers one of the world's most spectacular archaeological sites, beaches still in development stages, and a complex recent history that demands reckoning. The warmth of Khmer hospitality, the food (from street noodles to refined haute cuisine reclaiming traditional recipes), and the sense of a country rapidly transforming make it one of Southeast Asia's most rewarding destinations - just come prepared to engage with history that's anything but ancient.`,

  'Cameroon': `Cameroon bills itself as "Africa in Miniature" - a country spanning rainforests, savannahs, mountains, beaches, and the Sahel edge, with 250+ ethnic groups, French and English official languages, and geographic diversity that packs the continent's ecosystems into one nation. It's also firmly off the beaten path, attracting fewer than 400,000 annual tourists despite having some of Central Africa's most accessible wildlife and culture.

Mount Cameroon dominates the southwest coast - West Africa's highest peak at 13,255 feet, an active volcano (last major eruption 2000) that rises straight from the Atlantic. Climbing it requires 2-3 days, guides from Buea (around $150-200 for organized climbs), and fitness to tackle steep volcanic slopes. The summit rewards with views across the Gulf of Guinea when clouds cooperate.

The real wildlife experience happens in the north. Waza National Park, near the Chad border, offers Sahel savannah wildlife - elephants, giraffes, lions, various antelope species - best visited January-June during dry season. Bénoué and Bouba Njida National Parks offer similar wildlife with even fewer tourists, though access requires 4x4s and advance planning through tour operators in Garoua or N'Gaoundéré ($150-250/day all-inclusive).

The coastal region around Kribi delivers palm-fringed beaches and the Chutes de la Lobé, where waterfalls pour directly into the Atlantic - a rare sight that makes for dramatic photos. Limbe, at Mount Cameroon's base, has black volcanic sand beaches, the Limbe Wildlife Centre rehabilitating orphaned primates and endangered species, and the Botanic Garden dating to German colonial times.

Yaoundé, the capital, sprawls over seven hills with minimal tourist infrastructure but worth a stop for the National Museum, Mvog-Betsi Zoo (ethically questionable but hosting forest elephants, gorillas, and other regional wildlife), and the Benedictine Monastery of Mont Fébé. Douala, the economic capital and main entry point, is hot, humid, and chaotic - most travelers pass through rather than linger, though the Doual'art contemporary art center and lively Akwa district nightlife offer glimpses of modern urban Cameroon.

The cultural depth requires effort to access. The Grassfields region around Foumban showcases the Bamoun kingdom's palace (a stunning multistory structure with museum inside), traditional chiefs maintaining pre-colonial authority, and artisan workshops producing brass, bronze, and textile work. The Far North's Rhumsiki rock formations and the Mandara Mountains host unique Kapsiki and other ethnic groups with traditional compounds built into mountainsides. Visiting requires local guides, cultural sensitivity, and acceptance that this isn't performative tourism but engagement with living traditions.

Infrastructure is challenging. Roads connecting major cities are paved but potholed; rural roads are often impassable during rains (May-October in south, July-September in north). Buses connect cities but take forever (Yaoundé to Maroua is 15+ hours for 800 miles). Internal flights on Camair-Co are unreliable. Accommodation in cities runs $30-80 for decent hotels; outside urban areas, expect basic guesthouses or lodges near parks. Electricity is intermittent outside major cities.

Safety requires consideration. The Anglophone crisis since 2016 has made Northwest and Southwest regions dangerous - armed groups, kidnappings, and government crackdowns persist. The Far North near Nigeria and Chad borders faces Boko Haram activity - check current security reports. Yaoundé and Douala have petty crime (bag snatching, pickpocketing) and corrupt police who may demand bribes at checkpoints. After dark, use taxis arranged by hotels rather than random street hails.

Visas ($100-150 depending on nationality) must be obtained before arrival - no visa on arrival option. The process through embassies can be slow and bureaucratic. Yellow fever vaccination is mandatory; malaria prophylaxis essential. Medical facilities are limited - serious issues require evacuation to Europe.

Visit November-February for dry season across most of the country, ideal for northern parks and pleasant coastal weather. March-April heats up before the rains. Rainy seasons vary by region but generally May-October in the south, making roads muddy and wildlife viewing difficult.

Tourism numbers are low - around 300,000-400,000 annually, with most being regional travelers or business visitors. Western leisure tourists are rare, meaning you'll need to be comfortable with minimal tourist infrastructure.

Budget $70-120 daily for mid-range travel - hotels, guides, transport, and meals add up. This is not budget backpacker territory despite being a developing economy. The CFA franc (Central African franc) is the currency, roughly 600 CFA to 1 USD/Euro.

French dominates 80% of the country; English is official in Anglophone regions (Northwest and Southwest) but given the ongoing crisis there, travel to those areas is not advised. Neither language guarantees smooth communication everywhere - 250+ local languages mean guides are essential.

Cameroon demands serious travelers - those willing to navigate bureaucracy, accept basic infrastructure, handle logistics through local operators, and travel where English guidebooks barely exist. What you get is authentic Central African experience: wildlife without the Kenya price tag, cultural traditions still lived rather than performed, and the satisfaction of going somewhere few others bother to reach. Just understand it's not easy, not always comfortable, and requires accepting that tourism infrastructure simply hasn't developed here the way it has elsewhere on the continent.`,

  'Canada': `Canada is the world's second-largest country by area, and somehow still feels like there's room to breathe - a place where you can hike for days without seeing another person, where multicultural cities embrace diversity that puts most Western nations to shame, and where "sorry" functions as greeting, apology, and punctuation.

The Canadian Rockies deliver landscapes that shouldn't exist outside screensavers. Banff National Park's turquoise glacial lakes (Moraine Lake, Lake Louise), surrounded by jagged peaks, draw photographers at ridiculous early hours for the perfect reflection shot. The Icefields Parkway from Jasper to Banff ranks among the world's most spectacular drives - 145 miles of glaciers, waterfalls, elk grazing roadside, and pull-offs where you'll genuinely want to stop every mile. Jasper National Park offers darker skies for stargazing (it's a Dark Sky Preserve) and the Columbia Icefield, where you can walk on glaciers from a snowcoach tour ($100+). Further west, Yoho and Kootenay National Parks see fewer crowds but equal beauty.

Vancouver balances Pacific Rim culture, mountains rising straight from the city, Stanley Park's seawall for biking/running, Granville Island's markets, and neighborhoods from Gastown's Victorian charm to Commercial Drive's immigrant communities. The food scene is world-class - authentic regional Chinese beyond most North American cities, Japanese, Korean, Vietnamese, plus farm-to-table West Coast cuisine showcasing salmon, Dungeness crab, and local wines. Whistler, two hours north, offers North America's best skiing and summer mountain biking.

The Canadian Maritimes - Nova Scotia, New Brunswick, Prince Edward Island - deliver coastal charm: Halifax's waterfront and historic maritime culture, Cape Breton's Cabot Trail (jaw-dropping coastal drive with Celtic music traditions), PEI's red cliffs and Anne of Green Gables nostalgia, and lobster rolls that ruin you for anywhere else. Newfoundland's Gros Morne National Park features fjords that rival Norway's, icebergs floating past in spring (May-June), and Viking settlements at L'Anse aux Meadows proving Norse reached North America 500 years before Columbus.

Toronto is Canada's New York - relentlessly multicultural (over 50% foreign-born), Kensington Market's global food stalls, world-class museums (Royal Ontario Museum, AGO), the CN Tower (more impressive from outside than inside), and neighborhoods from Little Italy to Greektown to massive Chinese, Indian, and Caribbean communities. Montreal, four hours east, swings Francophone - cobblestoned Old Montreal, the Plateau's bagel shops and smoked meat delis, the underground city for winter survival, Mount Royal for views, and festivals that run year-round (Jazz Fest, Just for Laughs, etc.).

Quebec City is Europe without the flight - stone fortifications (the only walled city north of Mexico), Château Frontenac looming over the St. Lawrence, French everywhere, crêperies and bistros, winter carnival with ice palaces. It's touristy but legitimately beautiful, especially under snow.

Out west, Calgary offers urban polish and the Calgary Stampede (July) - part rodeo, part corporate party, fully Western kitsch. The Prairies - Saskatchewan, Manitoba - reward drivers with big sky landscapes and Ukrainian-Canadian traditions (churches, perogies). Churchill, Manitoba, is the polar bear capital - you'll stay in tundra buggies ($6,000+ for week trips October-November) watching bears wait for Hudson Bay to freeze.

The North - Yukon, Northwest Territories, Nunavut - is expensive, remote, and spectacular. Whitehorse and Yellowknife offer aurora viewing (September-March), indigenous culture, and staging grounds for Arctic adventures. Dawson City maintains Gold Rush nostalgia. Reaching truly remote Arctic communities requires bush planes and budgets to match.

Infrastructure is first-world excellent in cities and major tourist zones, minimal in remote areas. Distances are vast - Toronto to Vancouver is 4,300km (2,700 miles), driving coast-to-coast takes weeks. Domestic flights connect cities; VIA Rail offers scenic but slow train routes. Highways are well-maintained, though winter driving requires preparation. Cities have good public transit; rural areas need cars. Accommodation runs $80-150 for mid-range hotels, $200-400 for upscale.

Safety is extremely high - Canada consistently ranks among the world's safest countries. Wildlife poses more danger than people: bear encounters require food storage protocols, moose hit cars in the Maritimes, and hiking grizzly country demands bear spray.

Most visitors get visa-free entry or eTA (Electronic Travel Authorization - $7 CAD) for up to six months. Americans need only passports. Healthcare is excellent but expensive for non-residents - get travel insurance.

Visit June-September for warmest weather and full access (mountain passes, northern roads). Ski season runs December-March. Fall colors peak September-October in Eastern Canada. Winter (November-March) is cold (-4°F to 14°F common) but beautiful - embrace it with winter sports or head to coastal BC for milder temps.

Canada hosts around 22 million annual international visitors, most from the US, China, UK. Popular sites get busy July-August; shoulder seasons offer deals.

Budget $100-150 daily for hostel/budget hotel, public transit, grocery meals. Mid-range comfort runs $200-300. Canada is expensive - meals cost $15-25, gas $1.20-1.50/liter, parks charge entry ($10-15/day). The Canadian dollar fluctuates around $0.70-0.75 USD.

English dominates except Quebec (French essential in rural areas). Indigenous languages are spoken in northern communities.

Canada is vast, multicultural, expensive, and breathtakingly beautiful. It won't challenge you the way developing countries do - infrastructure works, water is drinkable, rules are followed. But it offers landscapes from Arctic tundra to temperate rainforest, cities as diverse as anywhere on earth, and the space to genuinely get lost in wilderness that still feels wild. Just budget accordingly and accept that seeing it all requires either months or return trips.`,
}

async function generateTravelSummaries() {
  console.log('🌍 Generating Travel & Tourism writeups - Batch 2\n')
  console.log('Countries: Benin, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, Brazil, Brunei, Bulgaria, Burkina Faso, Burundi, Cambodia, Cameroon, Canada\n')

  let saved = 0
  let failed = 0

  for (const country of COUNTRIES) {
    console.log(`\n📍 Processing: ${country.name}`)

    try {
      const summary = TRAVEL_WRITEUPS[country.name]

      if (!summary) {
        console.log(`  ⚠️  No writeup found for ${country.name} - skipping`)
        failed++
        continue
      }

      console.log(`  📝 Summary length: ${summary.length} characters`)

      // Save to database with category="travel"
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'travel',
          },
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'travel',
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        update: {
          summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
      })

      saved++
      console.log(`  ✅ Saved travel writeup for ${country.name}`)

      // Small delay to be gentle on the database
      await new Promise((resolve) => setTimeout(resolve, 100))
    } catch (error) {
      console.error(`  ❌ Failed to save ${country.name}:`, error)
      failed++
    }
  }

  console.log(`\n\n✅ Travel Batch 2 Complete!`)
  console.log(`   Saved: ${saved} travel writeups`)
  console.log(`   Failed: ${failed} writeups`)

  if (saved > 0) {
    const travelCount = await prisma.locationSummary.count({
      where: { category: 'travel', type: 'country' },
    })
    console.log(`\n📊 Total travel writeups in database: ${travelCount}`)
  }
}

generateTravelSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
