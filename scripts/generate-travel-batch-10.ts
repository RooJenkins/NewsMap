import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries for Travel Batch 10 with pre-generated travel writeups
const travelWriteups = [
  {
    name: 'Pakistan',
    lat: 30.3753,
    lng: 69.3451,
    writeup: `Landing in Lahore at dawn, you're immediately hit by the contradiction: this is one of the world's most misunderstood destinations, where ancient Mughal splendor collides with modern chaos, and where hospitality reaches levels that make other cultures look stingy. Pakistan welcomes roughly 900,000 international visitors annually—a fraction of what it deserves—but those who make the journey discover a country that rewrites their preconceptions with every mile.

The must-sees are genuinely unmissable. Lahore's Badshahi Mosque and Lahore Fort form a UNESCO World Heritage complex that rivals anything in South Asia. Further north, the Karakoram Highway snakes through landscapes so dramatic they feel computer-generated, passing Hunza Valley where apricot blossoms frame 7,000-meter peaks. The ancient Buddhist ruins at Taxila tell stories from when this was the crossroads of empires. But the hidden gems reveal Pakistan's soul: the 900-year-old Derawar Fort rising from the Cholistan Desert like a fever dream, the Kalash valleys where pre-Islamic traditions survive in mountain isolation, the truck art workshops where craftsmen turn cargo vehicles into moving murals.

Infrastructure has improved dramatically. The Orange Line Metro in Lahore and Islamabad's modern airport show serious investment. Luxury hotels exist in major cities—the Pearl Continental chain offers international standards—while guesthouses in Hunza and Skardu provide genuine warmth for $15-30 nightly. Domestic flights connect major hubs, though road travel remains the authentic experience (hire a driver, trust me). Tourist police units now operate in key areas, specifically trained to assist foreign visitors.

Let's address the elephant: safety. The situation has improved markedly since 2015. Most tourist areas—particularly Gilgit-Baltistan, Lahore, and Islamabad—see virtually zero incidents involving foreign tourists. That said, Balochistan and parts of Khyber Pakhtunkhwa remain restricted. Register with your embassy, hire registered guides in mountain areas, and you'll find Pakistanis themselves are your best security—locals take personal responsibility for guest safety with almost alarming seriousness.

Visa requirements have eased considerably. Pakistan now offers e-visas to citizens of 175 countries, processing in 3-5 days for $60-80. The application is straightforward, though bureaucracy varies by embassy. Some nationalities still face restrictions or require letters of invitation, so check current requirements for your passport well in advance. Tourist visas typically grant 90 days.

Timing matters enormously. Spring (March-May) brings moderate temperatures and the famous apricot blossoms in the north. October-November offers crisp air and clear mountain views—arguably the prime window. Summer (June-August) scorches in the plains but opens high-altitude treks. Winter blankets the north in snow, beautiful but limiting. Avoid monsoon season (July-September) in the south. Tourist numbers peak in October, but "peak" here means you'll still have World Heritage Sites nearly to yourself.

Pakistan operates on a cash economy outside cities—bring USD or GBP to exchange. Dress modestly (this isn't optional). Learn basic Urdu phrases; the effort alone opens doors. Most importantly, accept every third cup of chai offered, and prepare for hospitality that transforms cynical travelers into advocates. This isn't a country you simply visit—it's one that demands you reconsider everything you thought you knew about South Asia.`
  },
  {
    name: 'Palestine',
    lat: 31.9522,
    lng: 35.2332,
    writeup: `Arriving in Palestine means navigating complexity before you taste your first knafeh. This is travel as education, where every stone carries contested histories and where the mundane act of moving between cities becomes a lesson in geopolitics. Yet roughly 600,000 tourists annually make the journey, drawn by some of humanity's most significant religious and historical sites, and by Palestinian culture that has preserved itself against enormous odds.

The must-sees center on profound religious significance. Bethlehem's Church of the Nativity, built over Jesus's traditional birthplace, anchors Christian pilgrimage alongside the Milk Grotto and Shepherd's Field. In Hebron, the Cave of the Patriarchs/Ibrahimi Mosque is sacred to Jews, Christians, and Muslims—though its holiness is marred by heavy security and division. Jericho claims status as the world's oldest continuously inhabited city, with Tel es-Sultan ruins dating back 11,000 years. Ramallah has emerged as Palestine's cultural capital, with contemporary art galleries, film festivals, and a café scene that rivals any Middle Eastern city.

The hidden gems surprise visitors expecting only conflict narratives. Battir's ancient terraced gardens, now UNESCO-protected, produce vegetables using Roman-era irrigation. The Tent of Nations farm near Bethlehem demonstrates steadfast persistence ("We refuse to be enemies"). Sebastia's Roman ruins receive almost no tourists despite their magnificence. Taybeh, the last all-Christian village, produces the Middle East's first microbrewed beer—yes, Palestinian craft beer exists, and it's good. Nablus's old city soap factories still make olive oil soap using medieval methods.

Infrastructure varies wildly. Ramallah and Bethlehem offer modern hotels (Jacir Palace in Bethlehem occupies a converted Ottoman mansion), reliable internet, and excellent restaurants. Budget guesthouses run $30-50 nightly, while upscale options reach $150-200. Transportation requires patience. Service taxis (shared minivans) connect Palestinian cities cheaply but on no fixed schedule. Checkpoints between areas can add unpredictable delays. There is no Palestinian airport; visitors enter via Israel (Tel Aviv or Amman, Jordan, then overland).

Safety is contextual and ever-changing. Palestinian cities generally pose little threat to tourists—crime rates are low, and hospitality culture means locals actively help visitors. However, the political situation creates volatility. Clashes occur, particularly near settlements and checkpoints. The U.S. State Department maintains warnings, though thousands of pilgrims visit annually without incident. Avoid demonstrations, register with your embassy, hire local guides who know current conditions, and understand that access restrictions can change suddenly.

Entry requirements depend entirely on your route. Most international visitors fly to Tel Aviv, Israel, which controls access to the West Bank. You'll receive an Israeli entry card (not a stamp, in a small concession to those visiting Arab nations next). Palestinians cannot prevent entry if Israel permits it, but Israeli authorities can and do deny entry to those suspected of pro-Palestinian activism. From Jordan, cross at the Allenby Bridge—a bureaucratic endurance test. Some nationalities need Israeli visas in advance.

Timing avoids extremes and peak pilgrimage. Spring (March-May) brings moderate weather and Easter crowds. Fall (September-November) is ideal—pleasant temperatures, manageable tourist numbers. Summer scorches, winter brings rain and chill (yes, snow in Bethlehem). Christmas attracts masses to Bethlehem—spiritually powerful but logistically challenging. Ramadan transforms rhythms; respect fasting hours but enjoy evening festivities.

This isn't leisure travel in conventional terms. You'll navigate checkpoints, confront separation barriers covered in Banksy murals and protest art, and grapple with seeing ancient religious sites amid modern military presence. You'll also eat some of the Levant's finest food, drink sage tea on Ramallah rooftops, and meet people whose generosity and dignity amid hardship will humble you. Palestine demands engagement, not passive tourism—come with open eyes and willingness to sit with complexity.`
  },
  {
    name: 'Panama',
    lat: 8.5380,
    lng: -80.7821,
    writeup: `Panama punches way above its geographical weight. This slim bridge of land connecting two continents and two oceans has leveraged its geography into a cosmopolitan crossroads where Manhattan-style skylines rise beside colonial neighborhoods, where indigenous Guna people maintain island autonomy, and where biodiversity rivals anywhere on Earth. About 2.5 million international visitors arrive annually—impressive for a country the size of South Carolina—and most leave wondering why it took them so long.

Panama City demands immediate attention. The canal itself remains mesmerizing—watching massive container ships ride the locks up and down feels like witnessing planetary engineering. The Miraflores Visitor Center offers viewing platforms and excellent historical exhibits. But the capital's real magic lives in its contradictions: Casco Viejo's UNESCO-listed colonial district where restored Spanish architecture houses rooftop bars and boutique hotels, standing defiant against the glass towers of banking district that wouldn't look out of place in Singapore. The Biomuseo, designed by Frank Gehry, explains how this land bridge transformed global biology.

Beyond the capital, Panama reveals extraordinary range. Bocas del Oro archipelago on the Caribbean side delivers Robinson Crusoe fantasies—thatched overwater bungalows, luminescent plankton, sloth sanctuaries, and surf breaks. The San Blas Islands, controlled by the Guna people, offer 365 postcard-perfect islands with authentic indigenous culture (ask permission before photographing anyone). Boquete in the highlands grows some of the world's most expensive coffee and offers hiking through cloud forests where resplendent quetzals still fly. For the committed, the Darién Gap remains one of Earth's wildest places—though only experienced jungle trekkers with serious guides should consider it.

Hidden gems proliferate. Pipeline Road in Soberanía National Park is considered one of the planet's premier birding sites—500+ species spotted here. Cinta Costera, Panama City's waterfront park, reveals local life at sunset. The Anton Valley, in an extinct volcanic crater, hosts a Sunday market where campesinos sell everything from orchids to golden frogs (Panama's national symbol, now critically endangered). The Panama Railway, rebuilt paralleling the canal, offers the commute of a lifetime—45 minutes ocean-to-ocean through primary rainforest.

Infrastructure is genuinely first-world. Tocumen International Airport serves as Copa Airlines' hub with connections throughout the Americas. Panama City's Metro actually works—clean, safe, punctual. Highways are generally excellent. Hotels span every range: backpacker hostels in Casco Viejo for $15, beachfront eco-lodges for $80-120, and yes, Ritz-Carltons and Waldorfs. Internet is fast, tap water is potable, and English is widely spoken (though Spanish opens doors). Domestic flights reach remote areas quickly—40 minutes to Bocas del Toro beats eight hours by bus.

Safety-wise, Panama ranks as Central America's most secure nation. Panama City has standard urban precautions (don't flash valuables, avoid certain neighborhoods at night), but violent crime against tourists is rare. Police presence is visible. The Darién region near Colombia requires serious research due to smuggling activity and lack of infrastructure, but tourist areas are well-monitored. Solo travelers, including women, report generally positive experiences with usual awareness.

Visa requirements favor most visitors. Citizens from around 150 countries, including the U.S., EU, Canada, and Australia, get 90-180 days visa-free on arrival. Some nationalities can enter with valid U.S., UK, or Schengen visas. Your passport needs six months validity. Tourist extensions are straightforward if you fall for the place (many do).

Best times avoid the wettest months. Dry season (mid-December to April) brings sunshine and higher prices—ideal for islands and beaches. Green season (May to November) means afternoon thunderstorms but fewer tourists, lush landscapes, and significant savings. Caribbean side (Bocas) sees less seasonal variation. Whale watching peaks July-October on the Pacific side. Hurricane season largely spares Panama due to its southerly position.

Panama works as both quick layover and extended exploration. The dollar economy (USD is legal tender) eliminates currency confusion. The country's compact size means you can watch ships traverse the canal at breakfast, explore cloud forest at lunch, and sip cocktails on a Caribbean beach by sunset—genuinely. This is efficient paradise, where infrastructure meets biodiversity, where you can have your adventure and your air conditioning too.`
  },
  {
    name: 'Papua New Guinea',
    lat: -6.3150,
    lng: 143.9555,
    writeup: `Papua New Guinea occupies the extreme edge of adventure travel—a place where 800+ languages are spoken, where tribes in the highlands only contacted the outside world in the 1930s, where WWII wreckage rusts in steaming jungle, and where the underwater world rivals anything on the planet. Only about 200,000 international visitors arrive annually, and PNG prefers it that way. This isn't a destination for the unprepared or those seeking comfort tourism. This is anthropology, ecology, and adrenaline compressed into one wild island.

The "must-sees" require commitment. The Kokoda Track, where Australian and Japanese forces fought brutal WWII jungle warfare, now serves as a challenging 96km multi-day trek—porters and guides mandatory. Mt. Hagen in the Western Highlands hosts tribal gatherings where warriors still wear bird-of-paradise plumes and paint their faces for sing-sings (ceremonial dances). The Sepik River region, accessible only by boat, contains some of the Pacific's most intact traditional cultures—villages where spirit houses display ancestor carvings and where life revolves around the river's rhythms. Port Moresby's National Museum and Art Gallery provides essential context, though the capital itself is honestly forgettable beyond that.

But PNG's hidden treasures justify the journey. Tufi on the northern coast features fjords that could be Norway's if Norway had coral reefs and jungle. The Tari Basin's Huli wigmen maintain elaborate ceremonial traditions. Kaveing's WWII wrecks (including Betty bombers and Zero fighters) lie in diveable depths surrounded by pristine coral. The Highlands Highway—despite its rough reputation—passes through landscapes of terraced gardens and villages clinging to impossible slopes. Varirata National Park near Port Moresby offers accessible birding for those seeking birds-of-paradise and cassowaries without multi-day expeditions.

Infrastructure is basic to non-existent outside urban centers. Port Moresby and major towns have adequate hotels ($80-200), but luxury is relative here. Most highland and coastal destinations involve guesthouses, eco-lodges, or staying in villages (arranged through tour operators). Air Niugini connects main centers, but flights cancel unpredictably. Roads are rough when they exist—many communities are accessible only by boat or small plane. Internet is patchy. Electricity is intermittent. Bring flexibility, backup plans, and a sense of humor about logistics.

Safety demands honest conversation. PNG has high crime rates, particularly in Port Moresby and Lae, where "raskol" gangs operate. Tourists are advised not to walk city streets after dark, to use secured accommodation, and to arrange airport transfers in advance. Tribal conflicts flare in highlands regions. That said, organized tourism with reputable operators mitigates risk significantly—guides know current conditions, have local connections, and provide security through relationships. Solo, independent travel is not recommended unless you have extensive PNG experience. Women travelers face additional challenges and should not travel alone.

Visa requirements are straightforward but costly. Most nationalities can obtain a 60-day visa on arrival at Port Moresby's Jackson International Airport for approximately $50 USD (have cash). Some nationalities need advance visas. Officially, you should show onward tickets and sufficient funds. Processing is usually quick, though arrive prepared for bureaucratic inconsistency. Extensions are possible but involve paperwork marathons.

Timing your visit around climate and culture matters. June to September offers the driest weather highlands-wide, crucial for Kokoda Track trekking. Coastal regions have less seasonal variation but November to April brings more rain. The Mt. Hagen Show (mid-August) and Goroka Show (September) attract tribes from across PNG for spectacular cultural displays—book accommodation months ahead. Diving is year-round excellent, though visibility peaks October-May in most areas.

PNG requires serious budgeting. Domestic flights are expensive. Quality tours cost $200-400+ per day all-inclusive, reflecting logistics and small group sizes. Village stays can be cheaper but still require guides and arrangements. Bring cash (PGK and USD)—ATMs exist in cities but aren't reliable. Credit cards work in major hotels only.

This is not a country for casual tourists. It demands physical fitness, cultural sensitivity, health precautions (malaria prophylaxis is essential), and acceptance that things will go wrong. But for those seeking authentic cultural immersion, world-class diving, birding unmatched anywhere, and landscapes untouched by mass tourism, Papua New Guinea delivers experiences that have vanished almost everywhere else. You're not here to relax—you're here to remember what "remote" actually means.`
  },
  {
    name: 'Paraguay',
    lat: -23.4425,
    lng: -58.4438,
    writeup: `Paraguay might be South America's most overlooked nation—landlocked between flashier neighbors, absent from most bucket lists, receiving perhaps 1.5 million tourists annually (mostly regional visitors). But this "island surrounded by land" rewards the curious with Jesuit mission ruins rivaling anything in the Americas, the vast wilderness of the Gran Chaco, a resilient Guaraní culture that survived colonization more intact than most, and a certain unpretentious charm that comes from never having been trendy.

Asunción, the capital, surprises those expecting provinciality. The Costanera waterfront promenade bustles with tereré drinkers (cold yerba mate—Paraguay's social fuel), while the historic center's colonial buildings face off against the modernist Palacio de López. The Museo del Barro showcases indigenous and folk art that tells Paraguay's story better than any textbook. But Asunción functions more as gateway than destination—the real Paraguay lies beyond.

The Jesuit Missions, particularly Jesús de Tavarangue and Trinidad del Paraná (both UNESCO sites), stand as red sandstone testaments to the controversial "reductions" where Jesuits created autonomous indigenous communities in the 17th-18th centuries. The ruins—massive churches, cloisters, and communal buildings—rival Angkor for atmospheric decay. Yet you might share them with a dozen others, maximum. Nearby, the Itaipu Dam on the Brazil border remains one of the world's largest hydroelectric facilities—tours showcase engineering at continental scale.

For hidden gems, head to the Chaco. This sparsely populated wilderness covering 60% of Paraguay's territory hosts jaguars, giant anteaters, and Mennonite communities whose German-speaking residents farm improbable gardens in semi-arid scrubland. Estancia Laguna Blanca offers accessible Chaco wildlife experiences. The Ybycuí National Park contains waterfalls and the ruins of Paraguay's first iron foundry—history layered in nature. San Cosme y Damián, another Jesuit site, includes a working astronomical observatory from 1616.

Infrastructure exists but requires patience. Asunción's Silvio Pettirossi Airport connects to regional hubs (São Paulo, Buenos Aires, Panama). Domestic buses are decent and cheap—the main transport method. Roads vary from paved highways to rutted red-dirt tracks. Hotels in Asunción range from international chains ($80-150) to family-run spots ($30-50). Outside the capital, options thin considerably—think simple posadas and estancias. English is rare; Spanish and Guaraní dominate. Internet works in cities, less so elsewhere.

Safety-wise, Paraguay ranks mid-level for South America. Asunción has petty crime and areas to avoid at night (Chacarita, parts of the city center), but violent crime against tourists is uncommon. The northern border regions near Brazil see drug trafficking and should be avoided. Standard precautions apply: don't flash valuables, use official taxis, stay aware. Solo travelers report generally positive experiences. The bigger risk is probably traffic—driving is aggressive and chaotic.

Visa requirements are refreshingly simple. U.S., EU, Canadian, Australian, and many other passport holders get 90 days visa-free on arrival. Ensure six months passport validity. Extensions are straightforward if you want to stay longer. At land borders, make absolutely sure you get entry stamps—officials sometimes wave you through, but you'll regret it at exit.

Best times target comfortable weather. Winter (May-September) brings pleasant temperatures, especially for Chaco exploration—summer there exceeds 40°C regularly and is genuinely brutal. Spring (September-November) offers wildflowers and manageable heat. Rainy season (December-March) makes roads muddy and flooding possible, though the country greens beautifully. Tourist "peaks" barely exist—Paraguay sees steady trickles year-round.

Paraguay operates on a cash economy outside Asunción. Bring USD to exchange (guaraníes have absurd exchange rates—you'll carry millions). Budget travelers can manage on $30-50 daily. Mid-range comfort runs $70-100. The country remains genuinely affordable compared to neighbors.

What Paraguay offers isn't adventure adrenaline or pristine beaches—it's authenticity without performance, culture without commercialization, and the odd satisfaction of going where almost no one else bothers. The Guaraní language survives in daily use. The tereré ritual continues unbroken. The pace is unhurried, the people are genuinely welcoming, and you'll have significant historical sites nearly to yourself. This is South America without the Instagram crowds, and for some travelers, that's precisely the point.`
  },
  {
    name: 'Peru',
    lat: -9.1900,
    lng: -75.0152,
    writeup: `Peru has achieved the rare balance: globally famous yet still capable of surprise. Yes, everyone knows about Machu Picchu—roughly 4.5 million international visitors annually make the pilgrimage—but Peru's depth extends far beyond that one iconic ruin. This is a country where the Amazon, Andes, and coastal desert converge, where culinary innovation meets 5,000-year-old traditions, and where pre-Columbian civilizations left wonders that still confound archaeologists.

Machu Picchu anchors the classic Gringo Trail, and for good reason—the Inca citadel genuinely deserves its wonder-of-the-world status. Cusco, the gateway city, charms with colonial churches built atop Inca foundations and a plaza that pulses with tourist energy and local life. The Sacred Valley offers gentler altitude acclimatization and ruins like Ollantaytambo and Pisac that rival the main event. Lake Titicaca, straddling the Bolivia border, floats Uros reed islands and pre-Inca ruins on Isla del Sol. Lima has transformed into South America's culinary capital—restaurants like Central and Maido regularly top world lists, while street ceviche remains transcendent.

But Peru's hidden dimension rewards deeper exploration. The northern coast harbors Chan Chan, the world's largest adobe city, and the Moche pyramids at Huaca de la Luna with their vivid friezes. Chachapoyas region features Kuelap—a massive pre-Inca fortress predating Machu Picchu and seeing a fraction of visitors—plus the Gocta waterfall that drops 771 meters through cloud forest. The Colca Canyon, twice as deep as the Grand Canyon, hosts Andean condors soaring at eye level. Huacachina, a literal desert oasis, offers sandboarding and buggy rides in Sahara-like dunes. The Amazon section around Iquitos or Puerto Maldonado delivers rainforest biodiversity accessible from comfortable lodges.

Infrastructure has modernized significantly. Lima's Jorge Chávez Airport serves as the continental hub. Domestic flights connect major destinations quickly—essential given Peru's size and topography. Tourist buses (Cruz del Sur, Oltursa) offer surprisingly comfortable overnight service. The Belmond Hiram Bingham train to Machu Picchu provides luxury; PeruRail's Vistadome offers value. Hotels span every range: Lima and Cusco have international five-stars ($300+), charming mid-range colonial hotels ($80-150), and hostels under $20. Tourist infrastructure along the main routes is well-developed. Outside those corridors, expect more basic conditions but genuine cultural immersion.

Safety requires urban awareness and basic precautions. Lima has neighborhoods to avoid (parts of downtown, Callao port area) and petty theft targeting tourists, especially around Plaza de Armas and Miraflores. Cusco sees bag-slashing and distraction theft. Violent crime against tourists is relatively rare. Political protests occasionally flare, blocking roads—particularly between Cusco and Machu Picchu during labor disputes or national unrest. Rural areas are generally safe, though coca-growing regions in certain valleys warrant caution. Solo travelers, including women, navigate Peru successfully with standard awareness.

Visa requirements are tourist-friendly. Most Western nationalities, plus many Asian and Latin American countries, get 183 days visa-free on arrival—among the most generous in South America. Ensure six months passport validity. At entry, specify if you want fewer days (some do for subsequent extensions), but most get the full 183 stamp. Overstay fines exist but aren't crippling. No vaccinations are mandatory, though yellow fever is recommended (and required by some lodges) for Amazon travel.

Timing balances weather against crowds. Dry season (May-September) brings perfect Andean conditions and peak tourist numbers—book Machu Picchu permits months ahead for July-August. Shoulder seasons (April, October) offer better value and reasonable weather. Wet season (November-March) sees fewer visitors and occasional trail closures but also lush landscapes and authentic solitude. The coast is year-round mild (though Lima gets May-October gray garúa mist). Amazon visits work anytime, though wet season (December-May) means higher rivers and better wildlife viewing.

Altitude is the sleeper issue. Cusco sits at 3,400m, La Paz at 4,150m. Arrive, rest, drink coca tea, and ascend gradually. Altitude sickness is real and non-discriminatory—fitness doesn't prevent it. Diamox helps some people. If symptoms worsen, descend.

Peru balances accessibility with authenticity. The infrastructure exists for comfortable travel, yet traditional Quechua communities maintain ancestral practices. You can eat at world-class restaurants and from street carts (do both). You can ride luxury trains and cram into collectivo vans. This isn't ease or challenge—it's both, layered across a country that contains deserts, jungles, mountains, coasts, and 5,000 years of continuous civilization. Peru has earned its popularity but retained depth beneath the surface—you could return five times and still find something new.`
  },
  {
    name: 'Philippines',
    lat: 12.8797,
    lng: 121.7740,
    writeup: `The Philippines sprawls across 7,641 islands, which means you could visit a different island every day for 21 years and still have some left over. This geographical absurdity creates a traveler's paradise and logistical puzzle—world-class diving, pristine beaches, Spanish colonial history, vibrant cities, rice terraces carved into mountains, and some of Asia's warmest hospitality, all scattered across an archipelago the size of Italy. About 8.2 million tourists visit annually, though most cluster around well-worn routes, leaving countless islands wonderfully empty.

Manila, the chaotic capital, demands a day or two: Intramuros preserves Spanish colonial walled city vibes, the National Museum complex impresses, and the food scene (sisig, halo-halo, the best adobo you'll ever taste) justifies the urban chaos. But Manila mostly serves as transit hub. The real Philippines lies beyond.

Boracay pioneered Philippine beach tourism—4km of powdered-sugar sand, epic sunsets, water sports, nightlife. Post-2018 closure for environmental rehabilitation, it's returned more managed but still beautiful. Palawan delivers the fantasy: El Nido's limestone karsts jut from turquoise lagoons—kayak between them or island-hop to secluded beaches. Coron offers WWII wreck diving among the world's best. Puerto Princesa Underground River snakes through cathedral-sized caves (UNESCO-listed, but tourist numbers feel industrial now). The Banaue Rice Terraces in Northern Luzon, carved 2,000 years ago by the Ifugao people, cascade down mountainsides in impossible geometry—these are living terraces still farmed traditionally.

Hidden gems proliferate thanks to sheer island numbers. Siargao became the Philippines' surf capital—Cloud 9 break is legendary, but the island maintains chill vibes and unspoiled mangroves. Camiguin Island packs seven volcanoes into a space smaller than Singapore, plus hot springs, waterfalls, and almost zero crowds. Siquijor retains its mystical reputation (witches, faith healers) alongside beautiful beaches and cenote-like Cambugahay Falls. Batanes, the northernmost islands, looks more Scotland than Southeast Asia—windswept hills, stone houses, crashing waves. The Chocolate Hills of Bohol—1,200+ symmetrical mounds turning brown in dry season—remain genuinely weird geological phenomena.

Infrastructure varies wildly. Manila and Cebu have modern airports, international hotels, and first-world services. The domestic flight network is extensive—budget carriers like Cebu Pacific connect even remote islands cheaply. Island-hopping often involves bangkas (outrigger boats), ferries, or habal-habal (motorcycle taxis). Roads range from decent to "tracks" to non-existent. Accommodation spans every level: Manila and Cebu have five-stars ($150-300), beach resorts run $50-150, and beachfront bamboo huts with hammocks cost $15-25. Internet is generally available but often slow. English is widely spoken—a legacy of American occupation and current education system.

Safety-wise, most of the Philippines is welcoming and safe. Petty theft occurs in Manila and tourist areas—watch belongings, avoid flashing valuables. Typhoons hit June-November, causing disruption. The current significant caveat: parts of Mindanao (western and central areas including Marawi, Sulu Archipelago) face terrorism and kidnapping risks—most governments advise against travel there. However, Siargao (northeast Mindanao) and Davao generally receive all-clear. The Visayas, Palawan, and Luzon are safe for tourists with standard precautions.

Visa policies are generous. Citizens of most countries get 30 days visa-free (some nationalities get 59 days). Extensions are easy and cheap, available from immigration offices—many travelers extend repeatedly, as the Philippines tolerates serial tourism. Passport needs six months validity and proof of onward travel (strictly enforced at check-in, less so on arrival).

Best timing avoids typhoon season and heat extremes. November to February brings cooler, drier weather—peak season but "peak" in the Philippines means manageable crowds outside Boracay. March to May is hot and dry—perfect for beaches, brutal for cities. June to October is rainy season and typhoon time—cheaper, emptier, but riskier for weather disruptions. Diving is generally year-round, though conditions vary by region.

The Philippines operates affordably. Budget backpackers manage on $25-35 daily. Mid-range comfort (nice hotels, activities, good food) runs $60-80. You can splurge at resorts for $200+. Local food is cheap and delicious—eat at karinderias (local eateries) without fear.

What makes the Philippines special isn't any single island—it's the sheer variety compressed into an accessible, affordable, English-speaking package. You can dive, surf, hike, and beach-hop, sampling different islands' personalities. The Filipino hospitality isn't marketing—people genuinely welcome visitors with warmth that feels almost aggressive to Westerners used to transactional tourism. This is Southeast Asia's least visited major destination relative to its attractions, which means you're getting in before the masses wise up.`
  },
  {
    name: 'Poland',
    lat: 51.9194,
    lng: 19.1451,
    writeup: `Poland has quietly emerged from historical shadows to become one of Europe's most rewarding destinations—medieval town squares meticulously rebuilt after WWII's devastation, forests that remember bison, amber-coast beaches, mountain hiking in the Tatras, and a cultural resilience that transformed tragedy into thriving creativity. About 21 million tourists visit annually, though many are regional visitors. International tourists are discovering what Poles already know: this country offers extraordinary value, depth, and fewer selfie sticks than Western Europe's greatest hits.

Kraków demands extended time. The Old Town, centered on Europe's largest medieval market square (Rynek Główny), functions as an architectural time capsule—the Cloth Hall, St. Mary's Basilica with its hourly trumpet call, streets where every building tells stories. Wawel Castle crowns the Vistula River with royal splendor. But Kraków's power lies in proximity to Auschwitz-Birkenau—the Nazi concentration camp preserved as memorial and museum. Visiting is profoundly difficult and utterly essential. Wieliczka Salt Mine nearby offers remarkable medieval underground chapels carved entirely from salt.

Warsaw presents reinvention as art form. The Old Town appears centuries-old but was actually reconstructed brick-by-brick from rubble after 1944, using old paintings and photos—this dedication earned UNESCO status. The Warsaw Rising Museum immerses visitors in the 1944 uprising's desperate courage. Modern Warsaw pulses with energy—hipster Praga district, Vistula riverbank boulevards, brutalist architecture alongside glass towers. The Copernicus Science Centre rivals any interactive museum globally.

Hidden gems abound across Poland's diversity. Wrocław's gnome statues (300+ scattered citywide) add whimsy to beautiful architecture. Gdańsk's amber-merchants quarter glows golden, while nearby Malbork Castle ranks among Europe's largest medieval fortresses. Białowieża Forest, spanning the Belarus border, preserves Europe's last primeval forest—home to 800 European bison. The Tatra Mountains around Zakopane offer alpine hiking, distinctive wooden architecture, and highlander culture with its own dialect. Toruń, Copernicus's birthplace, maintains pristine medieval fabric including leaning tower and gingerbread traditions. The Baltic coast, particularly Sopot and the Hel Peninsula, surprises with beaches, dunes, and sealing resorts.

Infrastructure is modern and efficient. Warsaw and Kraków airports connect internationally. PKP trains (including high-speed Pendolino services) link major cities comfortably and affordably. Buses fill gaps comprehensively. Roads have improved dramatically—EU funding has transformed highways. Hotels span every range: boutique properties in historic buildings ($80-150), modern chains ($60-100), and hostels under $20. English is common in cities and tourist areas, less so in countryside. Internet is fast and widely available. Tap water is potable.

Safety ranks high. Poland is one of Europe's safest countries. Violent crime against tourists is extremely rare. Petty theft exists in crowded tourist areas and on night trains. Football hooliganism occasionally erupts but doesn't typically involve tourists. Political tensions around borders and migration sometimes manifest in protests. Solo travelers, including women, report very positive experiences. The main "danger" is probably overindulgence in pierogi and vodka.

Visa requirements follow Schengen rules. U.S., Canadian, Australian, and many other nationalities get 90 days visa-free within any 180-day period across the Schengen zone. EU citizens enjoy full freedom of movement. Passport needs validity beyond stay. Border checks are minimal or nonexistent when entering from other Schengen countries.

Best timing depends on priorities. Summer (June-August) brings warmth, long days, and peak crowds—but Poland's crowds are modest by Western European standards. Spring (April-May) and fall (September-October) offer ideal temperatures, autumn colors in forests, and better value. Christmas markets (late November-December) transform cities into festive wonderlands. Winter (January-March) is cold and gray in cities but great for Tatra skiing. Easter traditions are colorful and deeply observed.

Poland remains remarkably affordable. Budget travelers manage on €30-40 daily. Mid-range comfort (nice hotels, restaurant meals, attractions) runs €60-80. Even splurging rarely exceeds €150. Restaurant meals cost half Western European prices for equal quality. Museum entry is often free one day weekly.

Poland's appeal lies partly in defying expectations. Those expecting grimness find vitality. Those expecting backwardness find sophistication. The historical weight is real—Jewish heritage sites, communist-era architecture, WWII memorials demand engagement with difficult history. But contemporary Poland pulses with youth culture, craft beer scenes, contemporary art, and pride in surviving and thriving. The hospitality is genuine, the food (yes, beyond pierogi—wild mushroom dishes, żurek sour rye soup, Baltic fish) is excellent, and you'll explore world-class sights without Western Europe's crowds or prices. Poland rewards those willing to look beyond headline history into a complex, dynamic present.`
  },
  {
    name: 'Portugal',
    lat: 39.3999,
    lng: -8.2245,
    writeup: `Portugal has become one of Europe's most celebrated destinations—and for once, the hype is justified. This Atlantic-facing nation offers Lisbon's hilly charm, Porto's port wine cellars, Algarve beaches, medieval towns frozen in amber, pastéis de nata that justify transcontinental flights, and a melancholic beauty captured in fado music. About 27 million tourists now visit annually, transforming once-sleepy neighborhoods and driving prices upward, but Portugal retains authenticity beneath the Instagram surface—if you know where to look.

Lisbon sprawls across seven hills, each neighborhood revealing different character. Alfama's narrow lanes carry fado from tiny taverns. Belém showcases Age of Discovery monuments—the Jerónimos Monastery and Tower of Belém are UNESCO masterpieces, while the original pastéis de nata bakery draws lines around the block (worth it). Bairro Alto transitions from quiet residential to nightlife chaos after dark. LX Factory repurposes industrial space as creative hub. The city's tiled facades, vintage trams, and miradouros (viewpoints) create endless wandering opportunities.

Porto, smaller and somehow more authentic, centers on Ribeira's riverfront warren. Cross the Dom Luís I bridge to Vila Nova de Gaia for port wine tastings in historic cellars. The Livraria Lello bookshop influenced Harry Potter's Hogwarts. The São Bento station features 20,000 azulejo tiles depicting Portuguese history. Porto's food scene—francesinha sandwiches, fresh seafood—rivals Lisbon's without the capital's tourist markup.

Beyond cities, Portugal delivers remarkable diversity. The Douro Valley terraces produce port wine from impossibly steep slopes—river cruises and quinta stays combine scenery with sustained intoxication. Coimbra preserves Europe's oldest continuously operating university (since 1290) with baroque library that bans photography to protect manuscripts. Évora, a UNESCO city, features Roman ruins, medieval walls, and a chapel decorated with 5,000 human skeletons. Sintra's fairy-tale palaces—especially Pena Palace's Disney-on-steroids color scheme—perch in misty hills 40 minutes from Lisbon. The Algarve delivers beach resorts, dramatic cliffs at Cabo de São Vicente (Europe's southwestern extremity), and charming towns like Lagos and Tavira.

Hidden gems resist tourist saturation. The Azores archipelago, 1,500km into the Atlantic, offers volcanic landscapes, whale watching, hot springs, and surreal blue-green crater lakes—each island feels distinct. Madeira, similarly isolated, combines subtropical gardens, levada hikes along irrigation channels, and Funchal's wine lodges. On the mainland, Guimarães (Portugal's birthplace as a nation) maintains medieval integrity. Óbidos, a walled town, rewards early morning visits before tour buses arrive. The Alentejo region east of Lisbon offers cork forests, medieval castles, and exceptional wines without crowds. Berlengas Islands off Peniche provide snorkeling and sea caves accessible on day trips.

Infrastructure is excellent. Lisbon and Porto airports connect internationally. High-speed Alfa Pendular trains link major cities comfortably. Regional trains serve most towns. Buses fill remaining gaps affordably. Rental cars open rural areas—highways are well-maintained, though tolls add up. Accommodation spans every budget: Lisbon and Porto have luxury five-stars ($200-400), charming pousadas (historic building conversions) at $120-200, and hostels under $25. Internet is fast and ubiquitous. English is widely spoken. Tap water is safe.

Safety ranks very high. Portugal is one of Europe's safest countries. Violent crime against tourists is extremely rare. Petty theft targets tourists in Lisbon and Porto—watch bags in crowded areas, on trams, and at miradouros. Never leave valuables in parked cars (rental car break-ins are common). Solo travelers, including women, report very positive experiences. The main risks are sunburn and excessive wine consumption.

Visa requirements follow Schengen rules. U.S., Canadian, Australian, and many nationalities get 90 days visa-free within any 180-day period across Schengen countries. EU citizens have unrestricted access. Portugal has also introduced a digital nomad visa for remote workers planning longer stays. Passport needs six months validity.

Best timing balances weather and crowds. Summer (June-August) brings guaranteed sunshine and peak tourist madness—Lisbon and Algarve get packed, prices spike. Shoulder seasons (April-May, September-October) offer ideal conditions, manageable crowds, and better value. Winter (November-March) is mild (especially Algarve), much cheaper, and perfectly pleasant—though Lisbon gets rainy. Christmas and New Year see domestic tourism surges.

Portugal's cost has risen but remains below Western European averages. Budget travelers manage on €40-50 daily. Mid-range comfort (nice accommodation, restaurants, activities) runs €80-120. Splurging reaches €200+. A full meal with wine costs €15-25. Pastéis de nata are €1-2 each (eat many). Port wine tastings run €10-20. Lisbon and Porto are pricier than elsewhere.

The Portugal paradox: it's become hugely popular while somehow maintaining soul. The saudade (untranslatable melancholy/longing) permeates culture. The food combines Atlantic freshness with centuries of spice-route influence. The architecture layers Roman, Moorish, Manueline, and contemporary. Yes, Lisbon's Baixa crawls with tourists, and yes, locals complain about rising rents from Airbnb invasion. But walk 15 minutes from any hotspot and you'll find neighborhood cafés where old men debate over espresso, family-run restaurants with no English menus, and azulejo-covered buildings no one bothers photographing—which is exactly where Portugal's real magic persists.`
  },
  {
    name: 'Puerto Rico',
    lat: 18.2208,
    lng: -66.5901,
    writeup: `Puerto Rico occupies a unique space: U.S. territory with Caribbean soul, where American infrastructure meets Latin culture, where you can travel without passports (for U.S. citizens) yet immerse in distinctly non-mainland rhythms. Hurricane Maria's 2017 devastation tested the island's resilience—recovery continues unevenly, but tourism has rebounded to pre-storm levels, welcoming about 5 million visitors annually. This is the Caribbean without most Caribbean hassles: U.S. dollars, no currency exchange, cell phones work, yet beaches, rainforest, and Spanish colonial history deliver tropical escape.

Old San Juan demands multiple days. This walled city contains two massive Spanish fortresses—El Morro and San Cristóbal—where kids fly kites on ramparts and sunset views span the Atlantic. The city's colonial core, with its blue cobblestones (ballast from Spanish ships), pastel buildings, and flower-draped balconies, functions as living museum and residential neighborhood. Museums like Museo de las Américas and Casa Blanca (Ponce de León's family residence) provide historical context. The food scene thrives—from mofongo at Casita Miramar to cocktails at La Factoría, regularly ranked among world's best bars.

Beyond San Juan, the island rewards exploration despite its compact size (100x35 miles). El Yunque National Forest, the only tropical rainforest in the U.S. National Forest system, offers waterfalls, hiking trails, and coquí frog symphonies. Culebra and Vieques islands deliver the Caribbean fantasy: Flamenco Beach's powdered sand and crystalline water rank among the world's finest, while Vieques's Mosquito Bay bioluminescent bay glows with dinoflagellates (swimming in literal starlight feels surreal). The interior mountains around Jayuya reveal coffee plantations, Taíno petroglyphs, and landscapes more Appalachia than Caribbean. Ponce, the "Pearl of the South," showcases distinct architecture and the excellent art museum Museo de Arte de Ponce.

Hidden gems punctuate the island. Guavate, the "Pork Highway," features dozens of lechoneras (roast pork restaurants) where locals feast on pernil, morcilla, and alcapurrias. Cabo Rojo's salt flats and Los Morrillos lighthouse access wild southwestern beaches. Arecibo Observatory (though damaged by cable collapse in 2020, the site remains impressive) appeared in Contact and GoldenEye. Gilligan's Island off Guánica offers mangrove-ringed snorkeling. The Camuy River Caves system descends into massive underground chambers.

Infrastructure is solid—it's America, after all. San Juan's Luis Muñoz Marín Airport offers direct flights from major U.S. cities and some international routes. Rental cars are essential for exploring beyond San Juan—driving is easy on main roads, adventurous on rural routes, and parking can be challenging in Old San Juan. Hotels range from Old San Juan boutiques ($150-300), mid-range beach resorts ($100-200), to simple guesthouses ($60-80). Airbnb proliferation is extensive. English is widely spoken alongside Spanish. Internet works reliably. U.S. cell service applies—no roaming charges for American carriers.

Safety is mixed. Most tourist areas are safe with standard precautions. However, San Juan has neighborhoods with high crime rates—avoid La Perla, parts of Santurce, and driving after dark in unfamiliar areas. Car break-ins and rental car targeting are common—never leave valuables visible. Beach theft occurs; don't leave belongings unattended. Violent crime against tourists is less common but not unknown. Solo travelers, especially women, should exercise evening caution. Recent years have seen protests over political corruption and hurricane recovery—generally peaceful but worth monitoring.

U.S. citizens need only valid ID—no passport required, making Puerto Rico uniquely accessible for Americans. International visitors follow same U.S. entry requirements (ESTA for visa waiver countries, visas for others). Once in Puerto Rico, movement is unrestricted. Traveling to/from U.S. Virgin Islands also requires no passport.

Best timing avoids hurricane season's worst and peak crowds. Winter (December-April) brings perfect weather, peak prices, and significant tourist numbers—book ahead. Summer (June-August) is hot, humid, and hurricane season officially runs June-November (peak August-October)—Maria hit in September 2017. Shoulder seasons (May, November) offer good value and decent weather. San Juan festivals like Fiestas de la Calle San Sebastián (January) showcase local culture intensely.

Costs fall mid-range Caribbean. Budget travelers manage on $60-80 daily if careful. Mid-range comfort (nice hotel, restaurants, car rental, activities) runs $150-200. Luxury resorts easily exceed $300-400 nightly. Restaurants range from $8 roadside meals to $50+ fine dining. Groceries and supplies cost similar to U.S. mainland. Beach access is generally free. Domestic flights to islands run $50-100 each way.

Puerto Rico's appeal lies in its hybrid nature. You get Latin American warmth, music (reggaeton was born here), and cuisine, with U.S. infrastructure convenience. The colonial history is rich, the natural beauty genuine, and the cultural pride fierce—Puerto Ricans navigate complex identity between independence, statehood, and current territorial status. Post-Maria, grassroots recovery efforts and community resilience shine through ongoing challenges. This isn't paradise without complications, but it offers accessible tropical escape with depth beneath the beaches—and genuinely world-class beaches, to be clear. Just don't call it "exotic" to locals; it's home, complicated and beloved.`
  },
  {
    name: 'Qatar',
    lat: 25.3548,
    lng: 51.1839,
    writeup: `Qatar occupies an improbable space: a thumb of desert jutting into the Persian Gulf that has leveraged natural gas wealth into a gleaming, air-conditioned vision of 21st-century ambition. The 2022 FIFA World Cup spotlight revealed to millions what business travelers already knew—this is Gulf modernity with ambitions beyond oil, where futuristic Doha meets traditional souqs, where museum collections rival European capitals, and where hospitality blends Bedouin roots with luxury-hotel polish. About 4 million tourists now visit annually, up dramatically post-World Cup, discovering a destination that's easier to navigate than Dubai and more culturally invested than Abu Dhabi.

Doha concentrates the action. The Museum of Islamic Art, designed by I.M. Pei, houses one of the world's finest Islamic collections in a building as arresting as its contents—the interior courtyard view across the bay is alone worth the visit. The National Museum of Qatar, shaped like intersecting desert roses, tells the nation's story through immersive galleries that work surprisingly well. The Souq Waqif, restored traditional market, maintains authenticity despite tourist traffic—spices, textiles, falcons, and evening crowds give it life. The Corniche waterfront promenade showcases Doha's skyline (dominated by the twisting tornado of the Burj Qatar tower) and provides evening strolling for locals and visitors alike.

The Pearl-Qatar and Katara Cultural Village represent different facets of development: The Pearl is Doha's Monaco-style artificial island with marinas, luxury retail, and Mediterranean-villa aesthetics. Katara houses galleries, performance spaces, and waterfront dining—it's where culture gets official. For something rawer, the inland sea at Khor Al Adaid, where dunes meet ocean, is accessible via 4x4 tour and offers genuine desert beauty—camping under stars here feels appropriately Bedouin despite arriving in Land Cruisers.

Hidden gems exist despite the small size. Al Zubarah Fort and archaeological site on the northwest coast preserves Qatar's pre-oil history as a pearling and trading center—UNESCO-listed but rarely crowded. The Singing Sand Dunes near Mesaieed produce musical tones when sand cascades down their slopes. The Falcon Souq remains authentically weird—falconry is serious business here, with birds costing up to $100,000. Purple Island (Al Khor Island) mangrove forests provide kayaking among ecosystems thriving despite surrounding desert.

Infrastructure is world-class. Hamad International Airport functions as gleaming hub for Qatar Airways—connectivity is excellent, and the airport itself features art installations and luxury shopping. The Doha Metro, opened for the World Cup, is ultramodern, clean, and connects major sites efficiently. Taxis and ride-hailing apps are plentiful and affordable. Driving is easy if you can handle aggressive traffic. Hotels span every luxury level—five-star properties like the St. Regis, Mandarin Oriental, and W charge $200-500+ nightly. Mid-range chains ($100-150) exist, though budget options are limited. English is widely spoken. Internet is fast everywhere. Infrastructure assumes wealth—budget travelers will struggle.

Safety is exceptional. Qatar has extremely low crime rates. Violent crime against tourists is virtually nonexistent. Women travelers, including solo travelers, report feeling very safe—though dress modestly (shoulders and knees covered) in public spaces. Laws are strict: no public displays of affection, alcohol only in hotels, no drugs whatsoever (possession carries severe penalties), respect Islamic practices especially during Ramadan. LGBTQ+ travelers should exercise caution—homosexuality is illegal, though enforcement varies. The legal system is Sharia-based; what's minor in other countries can be serious here.

Visa requirements have liberalized dramatically. Citizens of 95 countries (including U.S., UK, EU, Canada, Australia) get free visa on arrival for up to 90 days—making Qatar among the easiest Gulf states to visit. The process at immigration is quick and painless. Some nationalities can arrange visas online in advance. Passport needs six months validity. Qatar has positioned itself as accessible transit hub—even long layovers get free hotel stays and transit visas.

Best times avoid the infernal heat. November to March offers pleasant weather (20-28°C)—ideal for outdoor activities, desert trips, and exploration. This is peak season; book ahead. April-May and October are transitional—warming but manageable. Summer (June-September) is brutally hot (40-50°C), though everything is air-conditioned and hotel rates drop significantly. Ramadan (dates shift annually) transforms rhythms—restaurants close daytime, evenings come alive, it's fascinating culturally but challenging logistically for non-Muslim visitors.

Qatar is expensive. This is Gulf-state luxury positioning, not Southeast Asia backpacking. Meals at restaurants run $15-30 at mid-range, $50-100+ at upscale. Coffee is $5-8. Desert tours cost $80-150. Museum entry is often free or cheap ($10-15), which is generous. Alcohol (hotel bars only) is exorbitant—$15-20 for a beer. You can budget travel if determined ($100-150 daily), but Qatar naturally suits mid-range to luxury spending ($200-400+ daily). The metro and museum circuit offers value, but overall, bring a healthy budget.

Qatar works best as stopover or specific-interest destination rather than traditional vacation spot. If Islamic art, ultramodern architecture, and Arabian Gulf culture appeal, it delivers impressively. The museum quality genuinely rivals major capitals—MIA and NMoQ are world-class. The contrasts fascinate: traditional dhow boats bobbing beside glass towers, falcons perched in air-conditioned malls, Ferraris driving past camels near desert edges. The 2022 World Cup infrastructure (stadiums, metro, hotels) left lasting tourist benefit. What Qatar offers isn't beaches or history's depth—it's a hyper-modern Gulf vision, impeccably executed, where petrodollar wealth meets genuine cultural investment. It's bizarre, impressive, problematic, and undeniably interesting—an Arabian Gulf city-state that rewards curiosity over expectations.`
  },
]

async function main() {
  console.log('🚀 Starting Travel Batch 10 generation\n')
  console.log(`Saving travel writeups for ${travelWriteups.length} countries:\n`)
  travelWriteups.forEach(c => console.log(`  - ${c.name}`))
  console.log()

  for (const country of travelWriteups) {
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

  console.log('\n✅ Travel Batch 10 generation complete!')
  console.log(`\nCompleted Travel Batch 10: ${travelWriteups.map(c => c.name).join(', ')}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
