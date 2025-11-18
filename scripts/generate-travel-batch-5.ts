import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const travelWriteups = [
  {
    name: 'French Southern and Antarctic Lands',
    lat: -49.2804,
    lng: 69.3486,
    summary: `Landing in the French Southern and Antarctic Lands isn't for tourists scrolling through beach resorts—this is the edge of the world, where only scientists, support staff, and the occasional intrepid expedition passenger set foot. Comprising five remote territories scattered across the southern Indian Ocean and Antarctica, these lands are France's most extreme overseas territory, accessible only by military or research vessels, or specialized expedition cruises that cost upward of $15,000.

The Kerguelen Islands are the main event for those who make it: 300 islands offering otherworldly volcanic landscapes, penguin colonies numbering in the millions, and elephant seals the size of small cars. Port-aux-Français, the main research station, hosts 50-120 people depending on season. Crozet Islands to the west harbor some of the planet's most important seabird colonies. Then there's Île Amsterdam and Île Saint-Paul, tiny specks in the ocean with unique ecosystems. The Antarctic territory includes Adélie Land, claimed by France but not universally recognized under the Antarctic Treaty.

Infrastructure is nonexistent beyond research stations. You sleep where researchers sleep, eat what they eat. The Marion Dufresne II supply vessel makes four trips yearly from Réunion Island, a five-day crossing through some of Earth's roughest seas. Recent expedition cruises from Australia or New Zealand offer the only "tourist" access, with landings permitted only at designated sites under strict protocols.

Safety concerns center on weather and isolation. Storms appear without warning, temperatures hover near freezing even in summer (November-March), and medical evacuation is measured in days, not hours. There are no tourist facilities, no hotels, no restaurants. This is science infrastructure repurposed for the few civilians willing to endure discomfort for utterly unique experiences.

Visa requirements depend on your route. French citizens need permission from the territory administration. Foreign nationals require special authorization, typically arranged through expedition operators holding permits. The French Polar Institute (IPEV) controls access, and they don't issue tourist visas—you're a passenger on approved vessels, nothing more.

Best time: November to March, the austral summer, when temperatures reach a balmy 5°C (41°F) and twenty-hour daylight illuminates the tundra. Even then, expect horizontal rain and 100 km/h winds. Winter is complete darkness and conditions incompatible with human comfort.

Tourist numbers are negligible—perhaps 200-300 expedition passengers annually, mostly aboard ships stopping while transiting between New Zealand, Australia, and Antarctica. Compare this to Antarctica's 75,000 annual visitors, and you see how truly remote these territories remain. There's talk of expanding controlled tourism, but environmental protection rightly takes precedence. For now, the French Southern and Antarctic Lands remain what they've always been: a scientific frontier where nature dominates absolutely, and humans are temporary guests clinging to the margins of habitability. If you make it here, you've earned serious bragging rights.`,
  },
  {
    name: 'Gabon',
    lat: -0.8037,
    lng: 11.6094,
    summary: `Gabon is the Central African success story nobody talks about—stable, relatively prosperous, and protecting more rainforest than almost anywhere on Earth. While its neighbors grab headlines for the wrong reasons, Gabon quietly preserves 88% forest cover across territory the size of Colorado and offers some of Africa's most pristine wilderness experiences for travelers willing to look beyond the safari brochure circuit.

Libreville, the coastal capital, surprises first-timers with its modern skyline, French-influenced cuisine, and beaches where forest meets Atlantic. The seafront L'Odika and Tropicana Beach clubs draw expats and Gabonese elite, but the real city pulse lives in Mont-Bouët Market's organized chaos. From here, most serious travelers head to the coast or inland parks.

Loango National Park is the crown jewel—one of the few places on Earth where elephants, buffalo, and hippos roam ocean beaches, while humpback whales breach offshore (July-September). Surfing hippos have become Instagram-famous, but witnessing forest elephants emerge onto white sand at sunset remains genuinely surreal. Accommodation ranges from basic camps to the upscale Tassi Lodge, where researchers and wealthy tourists trade wildlife tales over sundowners.

For those seeking untouched wilderness, Ivindo National Park delivers: Kongou and Mingouli Falls thunder through virgin jungle accessible only by multi-day expeditions. Lopé National Park, a UNESCO site, combines savanna and forest ecosystems with archaeological sites showing 400,000 years of human habitation. Budget travelers should know—these parks require planning and expense. Think $200-500 daily for guided trips, required by law and good sense.

Infrastructure is the challenge. Outside Libreville and Port-Gentil, roads are unreliable. The Trans-Gabon Railway connects major towns but not parks. Most serious wildlife viewing requires bush planes ($300-800 per flight) or 4x4 expeditions with specialist operators. Libreville hotels range from adequate mid-range ($80-150) to luxury Radisson Blu ($250+). In parks, accommodation is limited to lodges and camps that must be pre-booked months ahead.

Safety is Gabon's advantage. Political stability under Brice Oligui Nguema's transitional government (since the August 2023 coup) has maintained relative calm. Street crime exists in Libreville—don't flash valuables, take taxis after dark—but it's manageable. The real risks are health-related: yellow fever vaccination is mandatory, malaria prophylaxis essential. Medical facilities in Libreville are decent; elsewhere, you're evacuating.

Visa on arrival is available for most nationals ($50-100), though French citizens need nothing thanks to strong bilateral ties. American and European visitors should verify requirements, which can shift. E-visa systems were being developed in 2024.

Best time: June-September dry season for wildlife viewing and whale watching, though parks operate year-round. November-March rains turn roads to quagmires but bring spectacular birdlife and dramatic landscapes. Gabon sees maybe 250,000 international visitors annually—tiny numbers that keep it wonderfully uncrowded but also expensive, as tourism infrastructure remains underdeveloped.

This is a destination for nature lovers with patience and budget. If pristine rainforest, empty beaches with megafauna, and genuine wilderness appeal more than luxury resorts and tourist hordes, Gabon deserves your attention. Just bring realistic expectations about comfort and cost.`,
  },
  {
    name: 'Gambia',
    lat: 13.4549,
    lng: -15.3087,
    summary: `The Gambia—locals insist on the article—is West Africa's smallest mainland country, a slender finger following the Gambia River inland from the Atlantic. What it lacks in size, it compensates with accessibility, making it West Africa's easiest introduction for nervous first-timers and Britain's favorite beach escape. Don't mistake "easy" for boring: this compact country delivers authentic West African culture, remarkable birdlife, and coastal charm without the chaos that defines neighboring Senegal.

The Atlantic coast is tourist central. Kololi and Kotu Beach pack British package tourists into all-inclusive resorts ($60-150 nightly), while Senegambia Strip's restaurants and bars maintain a perpetual spring break atmosphere. For something authentic, Cape Point Beach offers local scene without the tourist hustle, and smaller guesthouses in Bakau ($30-60) provide character the big resorts lack. The beach experience here is solid—clean sand, warm water, persistent but not aggressive vendors.

Banjul, the capital, occupies an island at the river mouth and feels perpetually sleepy. Albert Market sells everything from Chinese imports to traditional fabrics, while Arch 22 monument offers panoramic city views. Most travelers skip through Banjul quickly, heading upcountry or to beaches, but the old colonial buildings and riverside fish markets reward an afternoon's wandering.

The real Gambia lives along the river. Janjanbureh (formerly Georgetown) sits mid-country on an island, featuring colonial ruins and serving as base for river excursions. Kunta Kinteh Island (James Island) carries heavy history—this slave trading post, now a UNESCO site, was made famous by "Roots." The river trip from Banjul ($80-120 with guide) combines history with birdwatching; The Gambia's 560+ bird species attract serious twitchers November-April, when Palearctic migrants arrive.

Abuko Nature Reserve near the coast offers easy wildlife viewing—monkeys, crocodiles, hundreds of bird species—within walking distance of beach hotels ($5 entry). Serious birders head to River Gambia National Park or Tanji Bird Reserve, where wetlands host flamingos and countless waders.

Infrastructure is straightforward. The coastal strip has good paved roads, frequent taxis, and tourist minibuses. Upcountry, roads deteriorate but remain passable year-round. Banjul International Airport handles direct flights from UK and European cities (legacy of British colonial ties). Bush taxis and local gelli-gelli vans cost pennies but test patience. Private car hire with driver runs $50-80 daily—worthwhile for upcountry exploration.

Safety is The Gambia's selling point. Political stability returned after Yahya Jammeh's 2017 departure, and President Adama Barrow's government maintains peace. Petty theft exists—watch belongings on beaches and in markets—but violent crime against tourists is rare. Police are visible and generally helpful. The main annoyance is bumsters (hustlers) along the coast, offering everything from tours to romance. Firm, polite refusal works; they're persistent but rarely aggressive.

Health precautions matter: yellow fever certificate required, malaria prophylaxis essential. Water isn't safe; stick to bottled. Medical facilities in coastal areas are adequate for minor issues; serious problems require evacuation to Senegal.

Most nationalities receive visa on arrival ($20-50), with UK citizens needing nothing for stays under 90 days. The dalasi is official currency, but euros and pounds are widely accepted in tourist areas.

Best time is November-May dry season, when temperatures (25-30°C) are bearable and rain absent. British tourists flood in November-February for winter sun; birders prefer November-April for migrants. June-October rains make upcountry travel muddy but bring lush landscapes and fewer tourists.

The Gambia welcomes about 200,000 tourists annually, mostly British sun-seekers and Dutch/German package groups. It's neither undiscovered nor overcrowded—a balance that works if you're seeking approachable Africa with beaches, culture, and excellent birdwatching without the intensity of larger West African nations.`,
  },
  {
    name: 'Georgia',
    lat: 42.3154,
    lng: 43.3569,
    summary: `Georgia sits at the crossroads where Europe meets Asia, and it shows in everything from the alphabet to the architecture to the mind-bending hospitality. This is a country that's been making wine for 8,000 years, invented polyphonic singing, and somehow survived between empires by sheer cultural stubbornness. Now it's having a moment—tourism jumped from 2 million in 2010 to 9.4 million in 2023—and for good reason. Georgia delivers ancient culture, dramatic landscapes, and incredible food at prices that make Western Europe look like a joke.

Tbilisi, the capital, is the Georgia most travelers discover first. The Old Town's wooden balconies lean over cobblestone streets, while the glass-and-steel Bridge of Peace spans the Mtkvari River toward the modern Rike Park. Ride the cable car up to Narikala Fortress for sunset views, then descend into Abanotubani's sulfur bathhouses for the tradition that's revived Georgians since medieval times ($10-40 depending on luxury). The food scene is extraordinary: khinkali (soup dumplings), khachapuri (cheese bread), and lobio (bean stew) at local joints cost $5-10 per person. Splurge at Shavi Lomi or Barbarestan ($30-50) for refined Georgian cuisine. Wine bars like Vino Underground showcase natural wines made in qvevri (clay vessels) using methods UNESCO declared intangible heritage.

Beyond Tbilisi, Georgia unfolds in layers. North to Kazbegi brings you to the Caucasus Mountains, where Gergeti Trinity Church perches at 2,170m with Mount Kazbek as backdrop—the postcard shot that launched a thousand Instagram accounts. The drive up the Georgian Military Highway is spectacular; Gudauri ski resort ($30-40 daily lift pass) attracts winter sports crowds December-March. For serious hiking, Mestia in Svaneti is base camp for trails through 3,000m peaks, medieval defensive towers, and villages where hospitality is aggressive (refusing homemade chacha is near-impossible).

West to Kutaisi, Georgia's second city, you access Prometheus Cave's underground chambers and Gelati Monastery, another UNESCO site with 12th-century frescoes. Further west, Batumi on the Black Sea blends beach resort with peculiar architecture—a Vegas-meets-Riviera vibe that somehow works. The boulevard's fountains and Ali and Nino moving statue are crowd-pleasers, while Batumi's botanical gardens showcase subtropical flora.

East to Kakheti wine region is pilgrimage for wine nerds. Sighnaghi, a hilltop town with views over Alazani Valley, serves as base for winery tours ($50-100 per day with driver). Wineries range from traditional qvevri cellars to modern operations. Pheasant's Tears and Okro's Wines please natural wine enthusiasts; Khareba Winery and Schuchmann impress with scale.

Infrastructure has improved massively. Tbilisi metro is efficient ($0.20 per ride), and marshrutkas (minibuses) connect cities cheaply ($5-15 between major towns). Trains run Tbilisi-Batumi ($7-15, overnight sleeper available). Domestic flights are rare; most travel is by road. Car rental costs $30-60 daily, but mountain roads require confidence. Accommodation ranges from homestays ($15-30 including epic home-cooked meals) to Tbilisi's boutique hotels ($60-150) and rare luxury options ($200+).

Safety is generally excellent. Petty crime is rare; Georgians take pride in guest safety. The main concerns are political: avoid South Ossetia and Abkhazia, the Russian-occupied territories closed to most travelers. Tbilisi is safe to wander at night. Driving requires attention—roads are improving but aggressive driving and livestock wandering persist.

Most nationals get visa-free entry (90-365 days depending on country). Americans, Europeans, Australians walk through immigration without formality. It's absurdly easy.

Best time is May-June and September-October: mild weather, green mountains, harvest festivals. July-August brings heat (30-35°C in Tbilisi) and crowds. Winter suits skiing (December-March) and those who love cozy Tbilisi. Spring brings wildflowers; autumn brings grapes and feasting.

Georgia sees 9-10 million annual visitors now, including huge numbers from neighboring countries. It's no longer undiscovered but hasn't been ruined. Prices remain reasonable, hospitality authentic, and landscapes untamed. If you're drawn to places where culture runs deep and modernity hasn't erased tradition, Georgia earns its hype.`,
  },
  {
    name: 'Germany',
    lat: 51.1657,
    lng: 10.4515,
    summary: `Germany is the country everyone thinks they know—beer, sausages, efficiency—until they actually spend time there and discover a place far more complex and compelling. This is Europe's largest economy and most populous nation, a federal republic of 16 states each with distinct character, landscapes ranging from Baltic beaches to Alpine peaks, and cities that were bombed to rubble in 1945 but rebuilt into some of the continent's most livable urban centers. Germany welcomed 88 million international visitors in 2023, making it Europe's third most-visited country, yet it rarely gets the romantic billing of France or Italy. Which is Germany's advantage: less hype, more substance.

Berlin is where most start, and rightly so. This is a city still reconciling with the 20th century's heaviest history while becoming Europe's creative capital. The Brandenburg Gate and Reichstag dome are mandatory, but Berlin reveals itself in neighborhoods: Kreuzberg's Turkish markets and street art, Neukölln's bars where you stumble out at 6am, Prenzlauer Berg's young families and brunch spots. Museum Island's five museums require a full day minimum; the Pergamon Museum's ancient architecture literally transported from the Middle East staggers even museum skeptics. The East Side Gallery's remaining Berlin Wall stretches 1.3km, covered in murals. Berlin's club scene—Berghain, Watergate, Tresor—remains legendary; just expect door policies that judge your vibe, not your wallet. Budget €80-150 for mid-range hotels; food is surprisingly affordable at €8-15 for solid meals.

Munich couldn't be more different: prosperous, traditional, Catholic Bavaria's capital. The beer halls—Hofbräuhaus, Augustiner—deliver exactly what tourists expect, but venture to Viktualienmarkt for local food culture and Chinese Tower beer garden (8,000 seats!) for non-tourist crowds. BMW Museum and Deutsches Museum appeal to gearheads and science nerds. Day-trip to Dachau concentration camp memorial is sobering necessity. Munich's efficient, expensive (€120-200 for decent hotels), and deeply Bavarian—lederhosen isn't costume here.

Beyond the big cities, Germany fragments beautifully. Hamburg's port and Reeperbahn red-light district offer gritty urbanity. Dresden's reconstructed Frauenkirche, obliterated 1945 and rebuilt stone-by-stone, symbolizes German reconstruction. Cologne's cathedral dominates the Rhine, while the Rhine Valley itself—castles perched above vineyards—is Germany's most scenic river cruise (€50-100 for day trips from Koblenz or Boppard).

The Romantic Road tourist route through Bavaria hits medieval-town bingo: Rothenburg ob der Tauber's walled perfection, Neuschwanstein Castle (the Disney inspiration), and Würzburg's Residenz palace. Yes, it's tourist-packed, but there's a reason—these towns survived WWII intact. Book Neuschwanstein tours weeks ahead (€15-20).

Nature delivers too. The Black Forest offers hiking, cuckoo clocks, and Black Forest cake at source. Bavaria's Alps—Zugspitze (Germany's highest at 2,962m), Garmisch-Partenkirchen, and Berchtesgaden—provide mountain experiences without Switzerland's price tag. North, the Baltic coast's beaches and islands (Rügen, Usedom) attract German summer crowds but remain unknown internationally.

Infrastructure is what you'd expect: extensive train network (Deutsche Bahn), excellent autobahns (yes, sections have no speed limit), and public transport that runs on time. Trains can be expensive; book early or use regional passes. Rental cars cost €40-80 daily.

Safety is not a concern. Germany's crime rates are low; major cities have petty theft in tourist zones, but standard precautions suffice. Health care is excellent. Tap water is safe. The main challenge is cost—Germany is Western Europe expensive, though still cheaper than Switzerland or Scandinavia.

EU citizens need nothing; Americans, Canadians, Australians get 90 Schengen days visa-free. Simple.

Best time: May-September brings warm weather (20-25°C) and long days. October's Oktoberfest (actually starts mid-September) draws millions to Munich. Christmas markets (November-December) transform city centers into festive wonderlands—Nuremberg's is most famous, but every city competes. Winter can be cold (0-5°C) but rarely brutal; ski season is December-March.

Germany's 88 million annual tourists concentrate in major cities and tourist routes, leaving plenty of uncrowded territory. It's a country of depth rather than flash—strong beer, good bread, complex history, efficient systems, and understated appeal. If you're seeking Europe without the Italy-France circus, Germany rewards travelers who dig beneath the stereotypes.`,
  },
  {
    name: 'Ghana',
    lat: 7.9465,
    lng: -1.0232,
    summary: `Ghana is West Africa with training wheels off but brakes still working—a country that manages to be authentically African without the intensity that can overwhelm first-timers. Stable democracy, English-speaking, accessible tourism infrastructure, and genuine warmth make Ghana the region's most approachable destination. But approachable doesn't mean sanitized: this is a country grappling with its complicated history as the Gold Coast's colonial center and slave trade hub, while building a modern nation. Tourist arrivals hit 1.1 million in 2023, small numbers keeping it refreshingly uncrowded.

Accra, the coastal capital, pulses with energy that never quite tips into chaos. Osu district (Oxford Street area) concentrates hotels, restaurants, and nightlife. Labadi Beach attracts locals and tourists alike; expect beach bars, horse rides, and weekend crowds. The National Museum provides context, but Kwame Nkrumah Memorial Park honors Ghana's independence hero with more gravitas. For art, Nubuke Foundation and Artists Alliance Gallery showcase contemporary Ghanaian work that's gaining international attention. Food scene mixes local spots serving jollof rice, red-red (bean stew), and banku with fish ($3-8 per meal) and expat-friendly restaurants ($15-30). Buka Restaurant and Asanka Local nail the modern Ghanaian vibe. Accra's accommodations range from basic guesthouses ($30-60) to Movenpick Ambassador Hotel ($150-250).

North of Accra, Aburi Botanical Gardens offers relief from coastal heat. But the essential historical pilgrimage is the Cape Coast-Elmina corridor. Cape Coast Castle and Elmina Castle, UNESCO sites, served as slave dungeons where millions of Africans passed through the "Door of No Return" to ships bound for the Americas. The tours are not comfortable—they shouldn't be—but they're necessary for understanding the transatlantic slave trade's reality. Obama visited in 2009; his emotional response reflected the gravity. Budget $10-15 entry plus guide.

Kumasi, inland in the Ashanti region, is Ghana's cultural heart. The Manhyia Palace Museum explains Ashanti kingdom history, while Kejetia Market is West Africa's largest open-air market—chaotic, colorful, and genuine. Day trip to Lake Bosumtwi, a meteorite crater lake, offers swimming and villages practicing traditional Ashanti life. Kumasi stays are cheaper than Accra ($25-80 for decent hotels).

For nature, Kakum National Park near Cape Coast features a canopy walkway suspended 30m high in rainforest—thrilling and offering the chance to spot forest elephants and 250+ bird species. More adventurous travelers head to Mole National Park in the north, Ghana's largest wildlife refuge with elephants, antelope, baboons, and the occasional leopard. Budget safaris here ($50-100 daily) beat East African prices, though wildlife density is lower.

Infrastructure is solid by West African standards. Accra's Kotoka International Airport connects to major African and European cities. STC and VIP buses link cities comfortably ($10-25 between major towns). Taxis and ride-hailing apps (Uber, Bolt) work in Accra and Kumasi. Roads are paved between major destinations but deteriorate upcountry. Rental cars cost $40-80 daily; self-driving is doable for confident drivers.

Safety is Ghana's selling point. Political stability since 1992's return to democracy, peaceful elections, and rule of law make it West Africa's safest destination. Petty theft exists in crowded markets and beaches—don't flash valuables—but violent crime against tourists is rare. Police are generally professional. The main health concern is malaria; prophylaxis is essential. Yellow fever vaccination is required. Water should be bottled; street food from busy stalls is usually safe.

Most nationalities receive visa on arrival ($75-150) or can apply for e-visa before travel. Process is straightforward, unlike some African countries' bureaucratic nightmares.

Best time is November-March dry season when temperatures (25-35°C) are bearable and northern parks accessible. Harmattan winds (December-February) bring dust but clear skies. April-October rains make some roads impassable but green the landscape beautifully. Coastal areas are hot and humid year-round.

Ghana welcomes over a million tourists annually, with African diaspora visitors forming significant numbers—especially African-Americans exploring roots through "Year of Return" initiatives. It's neither undiscovered nor overcrowded, hitting that sweet spot where tourism infrastructure exists without overwhelming local culture.

If you're seeking approachable West Africa with history, culture, beaches, and wildlife, Ghana delivers without the chaos that can make Senegal or Nigeria overwhelming for first-timers. The Ghanaians call it "Akwaaba"—welcome. They mean it.`,
  },
  {
    name: 'Greece',
    lat: 39.0742,
    lng: 21.8243,
    summary: `Greece is the country where Western civilization got its start, and you can't escape that history—ancient ruins occupy prime real estate in every city, islands scatter across the Aegean like a spilled box of jewels, and the Mediterranean lifestyle of long meals and louder conversations remains vibrantly intact. Tourism is massive—33 million visitors in 2023, nearly triple Greece's population—so crowding is real in famous spots. But Greece is also large enough and fragmented enough that escaping the crowds is entirely possible if you're willing to skip Santorini's caldera and dig deeper.

Athens is where most start, and it's no longer the gritty chaos it was decades ago. The Acropolis and Parthenon are mandatory, best visited at opening (8am) before cruise ship hordes arrive ($20 entry, includes other sites). The Acropolis Museum at the base brilliantly displays original sculptures. But Athens reveals itself in neighborhoods: Plaka's tourist bustle gives way to Monastiraki's flea market and Psyrri's bars and small-plate restaurants. Exarchia is the anarchist/student quarter with cheap eats and political edge. Athens food scene is excellent—€10-20 gets you stuffed at tavernas serving moussaka, souvlaki, and Greek salad. Splurge at Funky Gourmet (Michelin-starred, €120+) or Spondi for refined Greek. Athens hotels range from budget hostels (€20-40) to boutique properties in Plaka/Kolonaki (€100-200).

The islands are why most come. Santorini's white-and-blue architecture clinging to volcanic cliffs is stunning but completely overrun (5.5 million visitors on an island of 15,000 residents). If you go, stay in Oia for sunsets or Fira for access; avoid July-August madness. Mykonos is the party island—beautiful beaches, excellent restaurants, clubs until dawn, and prices to match (€150-300 hotels). Gay-friendly and glamorous, it's worth it if that's your scene.

Skip the famous two and explore: Crete offers everything—Minoan ruins at Knossos, Samaria Gorge hiking, pristine beaches on the south coast, Chania's Venetian harbor, and Rethymno's old town. It's large enough (8,336 km²) to absorb crowds. Naxos has gorgeous beaches, mountain villages, and far fewer tourists than its neighbors. Paros balances development and charm. The Dodecanese—Rhodes' medieval Old Town (UNESCO-listed), Symi's neoclassical harbor, Karpathos' traditional villages—mix history and beach life. The Ionian Islands on the west coast offer green mountains and turquoise water; Kefalonia and Zakynthos are increasingly discovered, but Ithaca and Lefkada stay calmer.

Mainland Greece beyond Athens gets overlooked. Delphi, perched on Mount Parnassus, was ancient Greece's most sacred site; the setting alone justifies the visit (€12 entry, 2.5 hours from Athens). Meteora's monasteries balanced on rock pillars look Photoshopped but are real—six monasteries open to visitors ($3-5 each), reached by stairs carved into rock. The Peloponnese peninsula packs in Olympia (original Olympic Games site), Mycenae's Bronze Age ruins, Nafplio's Venetian charm, and empty beaches. Thessaloniki, Greece's second city, offers Byzantine history, vibrant food scene, and nightlife without Athens' tourist crush.

Infrastructure is solid. Athens' metro is excellent (€1.40 per ride). Ferries connect islands reliably, if not always on schedule—book through Ferryhopper or local agencies. Flights (Olympic Air, Sky Express) link major islands to Athens. Buses reach mainland destinations. Rental cars cost €30-60 daily; Greek driving is aggressive, and parking in island towns is hellish, but having a car opens possibilities. Accommodations range from budget (€40-80) to luxury resorts (€300+).

Safety is not a concern. Greece is very safe; petty theft exists in crowded tourist areas, but violent crime is rare. The main challenge is summer heat (35-40°C in July-August) and crowds. Strikes occasionally disrupt ferries and transportation. Health care is decent; EU citizens use EHIC cards.

EU citizens need nothing; Americans, Canadians, Australians get 90 Schengen days visa-free.

Best time is April-May and September-October: warm weather (20-28°C), fewer crowds, lower prices, and calm seas. July-August brings heat, crowds, and highest prices. Winter (November-March) sees many islands shut down, but Athens, Crete, and major destinations operate year-round with low prices and empty sites.

Greece's 33 million tourists concentrate heavily in Santorini, Mykonos, Athens, and Crete. This creates the paradox: Greece can feel overrun or blissfully empty depending on where you go. Choose wisely—skip the Instagram spots or visit in shoulder season—and you'll find the Greece of long lunches, warm seas, ancient stones, and genuine philoxenia (hospitality). If you chase the famous shots, you'll get crowds and inflated prices. Greece rewards curiosity and flexibility with experiences as rich as any in Europe.`,
  },
  {
    name: 'Greenland',
    lat: 71.7069,
    lng: -42.6043,
    summary: `Greenland is the world's largest island and one of its most extreme destinations—a place where 80% of the landmass lies under permanent ice sheet, towns have no road connections to each other, and polar bears outnumber tourists in many regions. This is not a destination for casual travelers. Everything costs more, requires more planning, and delivers experiences unlike anywhere else. If your idea of travel involves convenience and comfort, book Iceland instead. But if witnessing icebergs the size of apartment buildings calving into fjords and experiencing Inuit culture at the edge of the habitable world appeals, Greenland will floor you.

The island is an autonomous territory of Denmark but distinctly Greenlandic—70,000 people, 90% Greenlandic Inuit, speaking Greenlandic and Danish. Tourism numbers are tiny: about 100,000 annual visitors, mostly arriving on cruise ships that touch coastal towns for hours. Real independent travel requires commitment.

Ilulissat on the west coast is Greenland's most accessible town and the gateway to Ilulissat Icefjord, a UNESCO site where Jakobshavn Glacier dumps Manhattan-sized icebergs into Disko Bay. The icefjord boardwalk offers front-row seats to nature at geological scale; midnight sun (May-July) means 24-hour visibility. Boat tours ($100-200) navigate between bergs, while helicopter tours ($400-600) provide aerial perspective that makes you feel insignificant in the best way. Hotel Arctic ($200-400 nightly) offers the region's nicest accommodation, but guesthouses ($100-200) and hostels exist for budget-conscious travelers—though "budget" is relative in Greenland.

Nuuk, the capital (population 19,000), feels like a small Arctic city trying hard to be cosmopolitan. The National Museum displays the 15th-century Qilakitsoq mummies and tells Greenland's history from Norse settlement to modern home rule. Katuaq Cultural Centre hosts concerts and art shows. Nuuk has actual restaurants—Sarfalik specializes in New Nordic Arctic cuisine featuring musk ox and halibut ($80+ per person)—and bars where locals drink Danish beer and debate politics. It's the most "normal" Greenlandic experience, which might disappoint or relieve depending on expectations.

South Greenland's Norse ruins at Hvalsey and Brattahlíð show where Erik the Red established settlements around 1000 CE. These colonies mysteriously vanished by the 1400s—climate change and cultural isolation theories compete. The ruins are modest but the history profound. Narsarsuaq serves as base; hiking here includes waterfalls, icebergs in fjords, and wildflowers in summer.

East Greenland is wildest—Ittoqqortoormiit has 450 residents and serves as gateway to Northeast Greenland National Park, the world's largest (972,000 km², roughly the size of France and Spain combined). Permits required, infrastructure nonexistent. This is expedition territory for experienced Arctic travelers only. Scoresby Sound, the world's largest fjord system, offers kayaking among icebergs for those with serious outdoor credentials.

Infrastructure barely exists. Towns connect only by boat, helicopter, or small plane. Air Greenland operates flights from Reykjavik and Copenhagen to Nuuk and Ilulissat ($400-800 one-way). Inter-town flights cost $200-500. Arctic Umiaq Line ferry serves west coast towns in summer (June-December)—a beautiful journey but slow. Within towns, everything's walkable. Rental cars exist in Nuuk but there's nowhere to drive beyond town limits. Dog sledding (winter) and boat tours (summer) are primary transport for excursions.

Safety concerns center on environment and isolation. Polar bears are real threats outside settlements; guides are mandatory in bear country. Weather changes instantly; travelers die from exposure. Medical facilities exist in larger towns, but serious emergencies require evacuation to Denmark ($100,000+ without insurance). Never underestimate Arctic conditions.

Visa requirements follow Danish rules: EU citizens need nothing, Americans/Canadians/Australians get 90 Schengen days. Simple entry, complex logistics afterward.

Best time: June-August offers midnight sun, temperatures around 10°C, accessible travel, and wildflowers. September brings northern lights and fewer tourists. October-April is dark, extremely cold (-20 to -30°C), and limits access, though winter travelers witness dog sledding culture and aurora borealis in full glory. Ice conditions affect boat travel; check seasonal access.

Costs are brutal: expect $200-400 daily minimum including accommodation, food, and one tour. Everything is imported from Denmark, and limited competition means high prices. Budget travelers should bring food from Denmark when possible.

Greenland's 100,000 annual tourists mostly come on cruise ships that don't contribute much locally. Independent travelers are rare, infrastructure limited, and experiences unforgettable. This is nature at maximum intensity—immense, indifferent to human comfort, and increasingly threatened by climate change that's melting the ice sheet at accelerating rates. If you have the budget, time, and temperament for genuine Arctic adventure, Greenland delivers experiences no other place can match.`,
  },
  {
    name: 'Guatemala',
    lat: 15.7835,
    lng: -90.2308,
    summary: `Guatemala is Central America condensed—Mayan ruins emerging from jungle, volcanic peaks reaching 4,000m, colonial cities frozen in Spanish baroque, and indigenous culture that never fully surrendered to conquest. It's affordable, accessible, and concentrated enough that you can hit ruins, volcanoes, and highlands in two weeks. Tourism reached 2.5 million in 2023, mostly from the U.S., and growth continues as travelers discover what backpackers have known for decades: Guatemala punches way above its weight for cultural and natural experiences.

Antigua Guatemala is the gateway and highlight for many. This former capital, destroyed by earthquakes in 1773 and preserved in colonial amber, is UNESCO-listed and genuinely beautiful. Cobblestone streets lined with pastel facades, volcanic peaks as backdrop, ruins of churches left deliberately crumbling—it's photogenic without feeling fake. The restaurant scene has evolved beyond backpacker fare; try Hector's Bistro ($15-25) for farm-to-table or Rincon Tipico ($8-15) for traditional pepián and kak'ik stews. Spanish language schools proliferate (one-on-one instruction for $150-250/week including homestay), attracting long-term budget travelers. Hotels range from $30 hostels to $150+ boutique properties. Antigua works as base for volcano hikes—Pacaya's lava flows offer accessible adventure ($35-50 tours), while Acatenango's overnight trek rewards you with sunrise views over erupting Fuego volcano ($80-120).

Lake Atitlán, ringed by three volcanoes and Mayan villages, is Guatemala's most scenic spot. Panajachel serves as arrival point but is touristy; stay instead in San Pedro La Laguna for backpacker vibe and late-night parties, San Marcos for yoga retreats and hippie culture, or Santiago Atitlán for authentic Tz'utujil culture. Water taxis ($2-5) connect villages. Lake activities include kayaking, paddleboarding, and volcano hiking. Accommodations range from $10 dorm beds to $60-120 for lake-view hotels. The lake's beauty is undeniable, though water quality concerns persist—avoid swimming near towns.

Tikal National Park in the Petén jungle is Guatemala's archaeological crown jewel. This massive Mayan city peaked 600-800 CE with 100,000 residents; now temples emerge from rainforest canopy with howler monkeys providing soundtrack. Temple IV's 65m height offers jungle panorama at sunrise ($20 entry, $10 for sunrise access). Stay in nearby Flores, a charming island town on Lake Petén Itzá, where hotels run $30-100. Budget a full day minimum; serious enthusiasts could spend three days exploring.

Semuc Champey in the highlands is adventure-traveler catwalk: turquoise limestone pools stacked above a river that flows beneath them. The setting is stunning, the access improving (roads upgraded recently), and tours from Lanquín include cave tubing and cliff jumping ($20-40). Accommodation is basic ($10-40), drawing the backpacker crowd that doesn't mind rough edges.

Chichicastenango's Thursday and Sunday markets are Guatemala's largest indigenous markets—overwhelming sensory chaos of textiles, masks, produce, and shamanic rituals happening on Santo Tomás church steps. It's touristy but authentic; locals shop here too. Come early (7am) before tour buses arrive. Budget $30-80 for hotels.

Guatemala City, the capital, gets skipped by most tourists—rightfully so. It's gritty, sprawling, and lacks the charm of Antigua. If you must overnight (for flight connections), stay in Zone 10 or Zone 13 near the airport. The National Museum of Archaeology is worth hours for Mayan artifacts ($7 entry).

Infrastructure is improving. La Aurora International Airport in Guatemala City connects to U.S., Mexico, and Central America. Shuttle buses link tourist destinations ($10-30 between major sites)—comfortable and safer than chicken buses. Chicken buses (repurposed U.S. school buses) cost pennies but are slow, crowded, and target for theft. Rental cars cost $30-60 daily; driving is feasible but roads in rural areas can be rough.

Safety is Guatemala's complication. Gang violence and crime exist, especially in Guatemala City and Caribbean coast. But tourist areas—Antigua, Lake Atitlán, Flores/Tikal—are generally safe with standard precautions. Don't flash valuables, use ATMs during daytime in secure locations, and take taxis/Ubers after dark in cities. Armed robbery on hiking trails has occurred—go with groups or guides, never alone. Political protests occasionally block roads.

Health basics: no vaccinations required, but typhoid and hepatitis A are recommended. Malaria risk exists in jungle lowlands; prophylaxis advised for Tikal. Water isn't safe; stick to bottled. Street food from busy stalls is usually fine; Guatemala's black beans and handmade tortillas are daily staples.

Most nationalities get 90 days visa-free. U.S., Canadian, EU, Australian citizens walk through immigration.

Best time: November-April dry season offers clear skies and comfortable temperatures (15-25°C in highlands, hotter in lowlands). December-January brings U.S. holiday crowds. May-October rains arrive—usually afternoon showers, not all-day downpours—but Petén jungle stays humid year-round. May-June and September-October are sweet spots: fewer tourists, green landscapes, manageable rain.

Guatemala's 2.5 million tourists concentrate in Antigua, Atitlán, and Tikal, leaving much of the country uncrowded. It's affordable ($30-60 daily for budget travelers, $80-150 for comfort), culturally rich, and naturally stunning. If you're drawn to living indigenous culture, spectacular landscapes, and Mayan history without Mexico's crowds or Costa Rica's prices, Guatemala delivers.`,
  },
  {
    name: 'Guinea',
    lat: 9.9456,
    lng: -9.6966,
    summary: `Guinea is West Africa without tourist infrastructure, which depending on your travel style is either a deal-breaker or the whole point. This is not a country with guidebook circuits or English-speaking tour guides; it's a challenging, rewarding destination for travelers who want authentic Africa without the polish. Political instability—Colonel Mamady Doumbouya's junta has ruled since the September 2021 coup—adds uncertainty, but day-to-day life continues. Tourism numbers are negligible, maybe 30,000-50,000 annually, mostly business travelers and mining industry workers. If you're here, you're off the beaten path by definition.

Conakry, the capital, sprawls along the Atlantic on the Kaloum Peninsula. It's hot, humid, crowded, and chaotic—classic West African urban experience. The Grand Mosque and Palais du Peuple offer architectural interest, while Îles de Los (Los Islands) offshore provide beach escapes and French colonial history. Take pirogues (traditional boats) from Conakry port ($5-10). Hotels range from budget local spots ($20-50) to mid-range business hotels like Noom Hotel ($80-150). Street food dominates—riz sauce (rice with sauce), grilled fish at beachside shacks—and costs $2-5 per meal. French is essential; English gets you nowhere.

Outside Conakry, Guinea reveals its natural beauty. Fouta Djallon highlands in central Guinea offer cool relief from coastal heat. Rolling hills, waterfalls, and traditional Fula villages create landscapes unlike the rest of West Africa. Dalaba and Pita serve as bases. The Chutes de la Soumba (Soumba Falls) and Chutes de Kinkon offer swimming and picnicking. Trekking between villages is possible with local guides ($20-40 per day). Accommodation is basic guesthouses and auberges ($15-40).

Mount Nimba Strict Nature Reserve, a UNESCO site shared with Côte d'Ivoire and Liberia, protects unique ecosystems at 1,752m. Viviparous toads (they give live birth!) and tool-using chimpanzees justify UNESCO status. Access requires permits and local guides; infrastructure is minimal. Serious nature travelers only.

Guinea's southeast holds more mining operations than tourist attractions, but Nzérékoré region near Liberian border offers forest zones and traditional culture. The Forest Region's masks and dances maintain pre-colonial traditions. You need serious interest and patience to access this area.

Infrastructure is Guinea's challenge. Conakry's Gbessia Airport handles flights from Paris, Brussels, Casablanca, and regional African cities. Roads outside Conakry range from bad to nonexistent. The main routes to Labé and Kankan are paved but deteriorate quickly. Taxis-brousses (bush taxis) connect towns ($10-30 depending on distance) but are slow, crowded, and break down frequently. Rental cars exist in Conakry ($50-100 daily with driver strongly recommended); self-driving requires 4x4 and experience. Electricity is unreliable even in Conakry. Cash is king—ATMs are scarce outside the capital, and cards rarely work.

Safety concerns are real. Political instability, occasional protests, and coup risk are ongoing under military rule. Street crime in Conakry includes robbery and pickpocketing. Police and military checkpoints are frequent; have documents ready. Avoid political gatherings and demonstrations. The mining regions attract armed groups and banditry. Travel after dark is ill-advised.

Health infrastructure is very limited. Malaria is endemic; prophylaxis is essential. Yellow fever vaccination is required for entry. Typhoid, hepatitis A and B vaccines recommended. Water must be bottled or treated. Street food from busy stalls is usually safe, but gut issues are common. Medical facilities in Conakry are basic; serious conditions require evacuation to Senegal or Morocco. Comprehensive travel insurance with evacuation coverage is non-negotiable.

Visa requirements are straightforward but not simple. Most nationalities can obtain visa on arrival ($50-100), but the process is bureaucratic and slow. Some travelers prefer obtaining visas in advance from Guinean embassies. French citizens get 90 days visa-free thanks to colonial ties.

Best time is November-March dry season when temperatures (25-35°C) are bearable and roads passable. April-June is hot pre-rain season. July-October rains make many roads impassable and humidity unbearable. The Fouta Djallon is pleasant year-round, cooler than the coast or savanna regions.

Guinea's tourism sector barely exists. You won't find tourist agencies on every corner or English menus or easy logistics. What you will find is a country making its own way, rich in natural resources (bauxite, gold, diamonds) but poor in development, with cultures that predate colonialism and landscapes that reward effort. This is not a vacation; it's an expedition.

If you're seeking the West Africa that existed before tourism infrastructure, accept discomfort as part of experience, speak French, and bring patience and flexibility, Guinea offers authentic encounters. If you prefer organized travel, English-speaking guides, or political stability, look elsewhere. Guinea is for travelers who want to say they've been somewhere genuinely challenging—and mean it.`,
  },
  {
    name: 'Guinea-Bissau',
    lat: 11.8037,
    lng: -15.1804,
    summary: `Guinea-Bissau is one of those places that appears on world maps but barely in travel consciousness—a small West African nation with a turbulent history, limited infrastructure, and virtually no tourism industry. Political instability defines it: coups, assassinations, and allegations of narco-state involvement have plagued it since independence from Portugal in 1974. Yet for the handful of travelers who venture here (maybe 20,000-30,000 annually), Guinea-Bissau offers the Bijagós Archipelago's pristine islands, Portuguese-Creole culture, and the satisfaction of going somewhere genuinely off-grid.

Bissau, the capital, is small, crumbling, and vaguely charming if you're in the right mindset. Portuguese colonial architecture decays gracefully, giving the city a faded-postcard aesthetic. The old Fortaleza de São José da Amura overlooks the port; the Presidential Palace (scene of the 2009 assassination of President Vieira) is still pockmarked with bullet holes. The Mercado de Bandim is the commercial heart—chaotic, colorful, and offering insight into daily life. Bissau has a few hotels: Hotel Malaika ($80-120) and Azalai Hotel Bissau ($100-150) serve business travelers and the occasional NGO worker. Restaurants are limited; Portuguese-influenced cuisine—grilled fish, rice, and spicy sauces—is standard fare ($8-15 at better restaurants).

The real draw is the Bijagós Archipelago, 88 islands scattered off the coast. Only 20 are inhabited, and the Bijagós people maintain matriarchal traditions and animist beliefs that predate Islam and Christianity. The islands are a UNESCO Biosphere Reserve with pristine beaches, mangroves, sea turtles (green turtles nest here), hippos in saltwater (unusual adaptation), and birdlife that attracts serious ornithologists. Orango Island has hippos, crocodiles, and comfortable eco-lodge accommodation (Orango Parque Hotel, $80-150). Bubaque is the main town, with basic guesthouses ($30-60). Getting here requires flying to Bubaque or taking boats from Bissau—neither option is reliable or scheduled with certainty. Boats ($20-40) leave when full; comfort is relative.

Mainland Guinea-Bissau holds the Cantanhez Forest National Park in the south, protecting chimpanzees and forest ecosystems. Access requires 4x4, guides, and determination. Tourism infrastructure is nonexistent; this is for researchers and hardcore nature travelers.

Infrastructure barely exists. Osvaldo Vieira International Airport in Bissau handles flights from Lisbon, Dakar, and a few regional connections on TAP Air Portugal and smaller carriers. Roads are poor; paved routes connect Bissau to Bafatá and a few larger towns, but most are dirt and turn to mud in rainy season. Bush taxis and candongas (minibuses) are primary transport ($5-20 between towns)—uncomfortable and slow. Rental cars exist in theory ($50-100 daily), but self-driving is not recommended. Boats to the islands are irregular. Electricity is unreliable in Bissau and rare elsewhere. Cash (West African CFA francs) is essential; credit cards rarely work, ATMs are scarce.

Safety is a concern. Political instability, including military coups (most recently in February 2022 attempted coup), creates unpredictability. Crime includes theft and robbery, especially in Bissau. Travel after dark is risky. Police and military checkpoints are common; corruption is endemic—small bribes ($5-10) may be expected. The country's role as cocaine transshipment point from South America to Europe brings organized crime but rarely affects tourists directly. Landmines remain in some border areas near Senegal and Guinea.

Health risks are serious. Malaria is endemic; prophylaxis is mandatory. Yellow fever vaccination is required for entry. Cholera outbreaks occur. Medical facilities are extremely limited even in Bissau; serious illness requires evacuation to Senegal or Europe. Comprehensive travel insurance with medical evacuation is essential. Water must be bottled or purified. Food safety is variable; stick to well-cooked meals.

Visas must be obtained in advance from Guinea-Bissau embassies or consulates ($85-100 typically). Visa on arrival was theoretically available but unreliable. Portuguese citizens get 90 days visa-free. Others should arrange visas before arrival—the process is bureaucratic and slow.

Best time is November-May dry season, when temperatures (25-32°C) are bearable and travel possible. June-October rains flood roads and make island access difficult. Harmattan winds (December-March) bring dust but cooler temperatures.

Guinea-Bissau's tourism is nearly nonexistent. You won't find guidebooks, organized tours, or English-speaking services. Portuguese and Creole dominate; French gets by. This is truly one of West Africa's least-visited countries, infrastructure is minimal, and political instability is real. What does exist is the Bijagós Archipelago's beauty, unique cultural traditions, and the bragging rights of visiting somewhere genuinely challenging.

If you're an experienced Africa traveler seeking the road less traveled, speak Portuguese, bring patience and flexibility, and understand that comfort is not guaranteed, Guinea-Bissau offers experiences unavailable elsewhere. For most travelers, it's a destination to admire on maps rather than visit. Those who go will find a country struggling with poverty and instability but possessing natural beauty and cultures worth understanding—even if getting there and back safely requires luck and planning in equal measure.`,
  },
  {
    name: 'Guyana',
    lat: 4.8604,
    lng: -58.9302,
    summary: `Guyana doesn't fit South America's stereotypes—no Spanish, no Catholicism, no Andes or Amazon fame. Instead, this former British colony offers Caribbean culture on the South American mainland, English-speaking ease, and rainforest that's genuinely pristine. It's the continent's best-kept nature secret, with 80% forest cover, Kaieteur Falls that dwarfs Niagara, and wildlife you'll see nowhere else. Tourism is growing—about 350,000 visitors in 2023, up from 250,000 in 2019—but remains tiny compared to neighbors. Oil discoveries since 2015 are transforming the economy, but for now, Guyana stays authentically rough around the edges.

Georgetown, the capital, sprawls along the coast with wooden Dutch colonial architecture that's either charming or decrepit depending on the block. St. George's Cathedral, a wooden Gothic structure, claims to be the world's tallest wooden building. Stabroek Market offers controlled chaos—spices, fish, Chinese imports—and insight into daily life. The Seawall is where Georgetown strolls, jogs, and hangs out; it's also a reminder that much of the coast sits below sea level, protected by Dutch-built barriers. Hotels range from budget guesthouses ($40-80) to Pegasus Hotel ($120-180), the city's most comfortable option. Restaurants serve Guyanese staples—pepperpot (Amerindian meat stew), curry (large Indo-Guyanese population), and roti. Backyard Café and Oasis Café offer solid meals ($8-15). Georgetown has rough areas; avoid after dark, take taxis, and don't flash valuables.

The interior is why you're really here. Kaieteur Falls, a 226m single-drop waterfall, is the world's largest by volume of water over a single drop. The setting is remote—deep in rainforest with no road access. Day trips from Georgetown via small plane ($200-300) offer the only realistic access. The falls thunder into the gorge with such force that mist creates rainbows even on overcast days. Harpy eagles nest nearby; if you spot one, you've witnessed one of the world's most powerful raptors.

Rupununi Savannas in the south offer different ecosystems: grasslands, giant anteaters, jaguars (rarely seen), and Amerindian communities maintaining traditional lifestyles. Karanambu Ranch ($200-400 per night including meals and tours) is legendary for its work rehabilitating orphaned giant river otters; staying here offers rare wildlife encounters and comfort in the wilderness. Nearby, Iwokrama Rainforest Reserve protects 3,710 km² of pristine jungle. Iwokrama Canopy Walkway lets you explore forest from 30m above ground; the research station offers basic accommodation ($80-150 including meals and guides).

Orinduik Falls near the Brazilian border combines cascades over terraced jasper rock with swimming holes—less dramatic than Kaieteur but accessible and swimmable. Day trips from Lethem or combined overland/flight tours work ($150-250).

Shell Beach on the northwest coast is a 140km stretch where four species of sea turtles nest (March-August). Volunteer programs exist; accommodations are basic eco-lodges ($60-100). Access requires 4x4 and river crossings—this is adventure travel.

Infrastructure is Guyana's weakness. Cheddi Jagan International Airport, 40km from Georgetown, handles flights from New York, Miami, Toronto, and Caribbean islands. Roads outside Georgetown are poor; the main coastal highway is paved but narrow. Interior travel requires 4x4, boats, or small planes. Minibuses connect coastal towns ($2-10), but interior destinations require tour operators. Rental cars exist ($50-80 daily), but driving outside Georgetown tests patience and skill. Electricity is unreliable outside the capital.

Safety is mixed. Georgetown has crime—robbery, theft, opportunistic violence. Don't walk alone after dark, use hotel taxis, avoid Tiger Bay and Albouystown neighborhoods. The interior is safer from crime but presents environmental risks. Tour operators handle logistics and safety for interior trips; going independently is possible but risky.

Health precautions are essential. Yellow fever vaccination is required. Malaria is endemic in interior regions; prophylaxis is mandatory. Dengue and Zika occur. Water in Georgetown is generally safe if filtered; elsewhere, stick to bottled. Medical facilities in Georgetown are adequate; the interior has nothing. Comprehensive insurance with evacuation coverage is essential.

Most nationals receive visa-free entry for 30-90 days. U.S., Canadian, UK, EU citizens get 30 days on arrival. Extensions are available.

Best time is the two dry seasons: mid-February to April and mid-August to November. December-January and May-July bring heavy rains that flood roads and make interior access difficult. Temperatures stay hot (27-32°C) year-round with high humidity. Sea turtle nesting (March-August) dictates timing for Shell Beach visits.

Guyana's 350,000 tourists include significant diaspora visiting family. True nature travelers are fewer—maybe 30,000-50,000 annually. It's not easy travel: costs run higher than expected ($100-150 daily minimum), logistics require planning, and comfort is inconsistent. But Guyana offers South America's most accessible pristine rainforest, wildlife encounters without crowds, and the satisfaction of visiting somewhere genuinely off the typical tourist trail.

If you're drawn to nature over culture, speak English, and accept that adventure comes with discomfort, Guyana delivers experiences—Kaieteur Falls, giant otters, harpy eagles, endless rainforest—that justify the effort. For beach resorts and easy logistics, look elsewhere. Guyana is raw, real, and rewards travelers who meet it on its terms.`,
  },
  {
    name: 'Haiti',
    lat: 18.5944,
    lng: -72.3074,
    summary: `Haiti in late 2025 is not a travel destination—it's a humanitarian catastrophe and failed state where gang violence controls more than 90% of the capital and security has completely collapsed. Advising anyone to visit Haiti right now borders on irresponsible. The U.S. State Department, UK Foreign Office, and every other national advisory maintains "Do Not Travel" warnings. This writeup exists for context and hope that conditions eventually stabilize, but as of now, Haiti is closed to tourism and will remain so for the foreseeable future.

Before the crisis spiraled, Haiti offered extraordinary potential: the Caribbean's most dramatic history—first Black republic, born from the world's only successful slave revolution—Citadelle Laferrière, the mountaintop fortress that's Haiti's sole UNESCO site, and a cultural richness that includes vodou traditions, vibrant art scenes, and music that influenced everything from New Orleans jazz to modern Haitian rap. Port-au-Prince's Iron Market, Jacmel's art galleries, and northern Cap-Haïtien's colonial architecture hinted at what tourism could be.

But the 2010 earthquake (316,000 dead), 2016 Hurricane Matthew, political instability, and now total state collapse under gang rule have destroyed any possibility of safe travel. Since 2021, gangs led by figures like former police officer Jimmy "Barbecue" Chérizier have consolidated control. The presidential assassination in 2021, complete absence of elected officials, and failed international interventions mean no authority functions effectively.

Port-au-Prince is a war zone. Toussaint Louverture International Airport closes intermittently due to gang violence; airlines have suspended service repeatedly. Hotels exist in theory but are cut off by gang checkpoints. The Dominican Republic closed its border intermittently, and the land crossing—once the overland route for adventurous travelers—is now impossible.

If conditions ever stabilize, Haiti has components of compelling destination: beaches along the Côte des Arcadins (Wahoo Bay Beach resort was once popular), the mountains of Kenscoff offering cool relief, and northern Haiti's history centered on Cap-Haïtien. Île-à-Vache off the southern coast promised eco-tourism development. The Citadelle, Palais Sans-Souci, and Ramiers archaeological park form UNESCO's only recognition of Haiti's heritage.

Haitian culture—Carnival, rara music, vodou ceremonies (the real practice, not tourist performance), and art ranging from naive to contemporary—represents African diaspora resilience. Haitian Creole and French provide linguistic connection to both Caribbean and Francophone worlds. The food—griot (fried pork), diri ak djon djon (rice with black mushrooms), and spicy pikliz—deserves wider recognition.

But none of this matters right now. Infrastructure that was barely functional has collapsed. The healthcare system cannot handle routine emergencies. Food insecurity affects half the population. Over 1.3 million people are internally displaced. There are no safe hotels, no functioning tours, no possibility of typical travel.

Visa requirements—usually $100 on arrival—are irrelevant when you can't safely reach the country. The Gourde has collapsed in value. Armed gangs rob, kidnap, and kill with impunity. The Kenya-led MSS international mission has made minimal progress.

The "best time to visit" question is absurd in context, but climatically November-March offers drier weather and more manageable heat (25-31°C) than the hot, rainy May-October period. Hurricane season (June-November) remains a threat.

Tourist numbers have collapsed from a peak of 500,000+ arrivals in the mid-2000s to essentially zero in 2024-2025 beyond a handful of aid workers, journalists, and diaspora members visiting family at great risk.

Haiti's tragedy is profound—a nation that fought for freedom, created the world's first Black republic, and inspired liberation movements globally is now trapped in dysfunction that international intervention has only worsened. The Haitian people deserve better. The culture, history, and landscape deserve visitors. But not now. Not until serious reconstruction of state capacity and security occurs.

For travelers drawn to Haiti's history and culture, read the books—Madison Smartt Bell's trilogy, Edwidge Danticat's novels—watch documentaries, support Haitian artists and mutual aid organizations. Travel to the Dominican Republic and understand that Hispaniola's two nations share geography but vastly different trajectories. Hope that the next few years bring the stability that would allow Haiti to rebuild and eventually welcome visitors to experience its remarkable story.

But in 2025, if you're planning Caribbean travel, go literally anywhere else. Haiti needs international support, not tourists.`,
  },
]

async function generateTravelBatch() {
  console.log('🌍 Generating Travel & Tourism writeups for Batch 5...\n')

  for (const country of travelWriteups) {
    try {
      console.log(`📝 Processing: ${country.name}`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'travel',
          },
        },
        update: {
          summary: country.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'travel',
          summary: country.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ ${country.name} saved to database\n`)
    } catch (error) {
      console.error(`❌ Error processing ${country.name}:`, error)
    }
  }

  console.log('\n🎉 Completed Travel Batch 5!')
  console.log('\nCountries processed:')
  travelWriteups.forEach((country, i) => {
    console.log(`${i + 1}. ${country.name}`)
  })
}

generateTravelBatch()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
