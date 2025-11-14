import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Travel & Tourism writeups for Batch 6
// Following Anthony Bourdain/Rick Steves voice - adventurous yet practical
const travelWriteups = [
  {
    name: 'Honduras',
    lat: 15.2,
    lng: -86.2419,
    summary: `Landing in Honduras feels like discovering Central America's best-kept secret, one that most travelers rush past on their way to more famous neighbors. Big mistake. This is where the ancient Maya built Copán, one of Mesoamerica's most sophisticated cities, with hieroglyphic staircases that still leave archaeologists speechless. The Bay Islands—Roatán, Utila, and Guanaja—offer some of the Caribbean's most affordable diving on the world's second-largest barrier reef, where you can get PADI certified for a fraction of what you'd pay elsewhere.

Beyond the tourist circuit, Honduras reveals itself slowly. The colonial gem of Gracias, nestled in the western highlands, sees maybe a dozen foreign visitors a week. The Moskitia rainforest in the northeast remains one of Central America's last true wilderness areas, accessible only by boat or small plane. Lake Yojoa, the country's largest natural lake, is a birder's paradise with over 400 species.

Infrastructure varies wildly. San Pedro Sula and Tegucigalpa have modern amenities, but rural areas require patience and flexibility. The bus network is extensive and dirt-cheap, though comfort isn't guaranteed. Mid-range hotels run $30-50, luxury beach resorts $150-300. Let's address the elephant: Honduras has struggled with crime, particularly in urban areas. Tourist zones like the Bay Islands and Copán are generally safe, but stick to established routes, avoid night travel between cities, and check current advisories.

Most visitors need only a passport for stays up to 90 days under the CA-4 agreement (Guatemala, El Salvador, Nicaragua, Honduras). The sweet spot for visiting is December through April—dry season with perfect beach and diving conditions. Hurricane season (June-November) brings rain and humidity. The country welcomed about 2.8 million visitors in 2024, mostly cruise passengers hitting Roatán for a day.

Come for world-class diving at budget prices, stay for the Maya ruins and empty mountain towns where you'll be the only foreigner in sight. Honduras rewards the curious traveler who looks beyond the headlines.`,
  },
  {
    name: 'Hungary',
    lat: 47.1625,
    lng: 19.5033,
    summary: `Budapest is the gateway drug—thermal baths at sunset, ruin bars in the Jewish Quarter, the Danube glittering between Buda and Pest—but if you stop there, you're missing Hungary's real soul. This landlocked heart of Europe has perfected the art of melancholy beauty, where thermal springs bubble up in castle towns, paprika colors everything red, and history weighs heavy but never boring.

Start in Budapest, obviously. The Széchenyi Baths are touristy but magical, especially in winter when steam rises off the outdoor pools into freezing air. Across the river, Buda's Castle District offers Habsburg grandeur and views that justify every Instagram cliché. But then push out: Eger in the north combines baroque architecture, fierce red wines, and Ottoman-era thermal baths. The Great Plain (Puszta) stretches endlessly, where cowboys still do trick riding and the horizon goes on forever. Lake Balaton becomes Central Europe's beach resort in summer, while Pécs in the south blends Ottoman and Hungarian influences with early Christian crypts that predate most of Europe's churches.

Hidden gems? The wine regions of Tokaj produce some of Europe's most prized dessert wines. Hortobágy National Park shows you Hungary's wild side—Europe's largest continuous natural grassland. Szentendre, just outside Budapest, offers art galleries and Serbian baroque architecture without the crowds.

Infrastructure is excellent: high-speed trains connect major cities, buses reach everywhere else, and Budapest's metro is Europe's second-oldest. Accommodation ranges from $25 hostels to $200+ luxury hotels. Hungary is impressively safe, with tourist-targeted crime limited to pickpockets in Budapest's busy areas.

Schengen visa rules apply—Americans get 90 days visa-free. Visit May-June or September-October for ideal weather and fewer crowds. Summer brings heat and tourists; winter means thermal bath season. Hungary welcomed 32 million visitors in 2024, with Budapest capturing most of that traffic.

Come for the baths and ruin bars, discover a country that's been conquered, divided, and rebuilt so many times it's learned to hold onto beauty despite everything.`,
  },
  {
    name: 'Iceland',
    lat: 64.9631,
    lng: -19.0208,
    summary: `Iceland sells itself as fire and ice, and for once, the marketing isn't lying. This volcanic rock in the North Atlantic defies all logic—treeless, expensive, dark half the year, yet somehow it's become one of the world's most desired destinations. The landscape looks like another planet: waterfalls every few miles, geothermal areas where the earth steams and bubbles, black sand beaches where Atlantic waves crash with primordial force.

The Golden Circle has become Iceland's tourist factory—Þingvellir (where continents literally drift apart), Geysir (which gave geysers their name), and Gullfoss waterfall—but do it early morning to beat the tour buses. The real Iceland reveals itself on the Ring Road: the South Coast's mind-bending waterfalls (Seljalandsfoss, Skógafoss), Jökulsárlón glacier lagoon where icebergs float like sculptures, the East Fjords where you'll drive for hours seeing maybe three other cars. The north has Mývatn's lunar landscapes, Akureyri's charm, and the powerful Dettifoss waterfall.

Skip the expensive Blue Lagoon tourist trap—locals prefer Mývatn Nature Baths in the north or dozens of free hot springs if you know where to look. The Westfjords remain Iceland's least-visited region: empty roads, dramatic cliffs, arctic foxes, and Ísafjörður's mountain-ringed remoteness. In Reykjavík, the world's northernmost capital offers surprising art, music venues where everyone seems to be in a band, and restaurant scenes mixing New Nordic cuisine with traditional lamb and fish.

Infrastructure is first-world excellent: well-maintained roads (though F-roads require 4WD), clean accommodations, reliable services. But it's expensive—expect $30 for basic meals, $150-300 for hotels, $80+ daily for car rental. Iceland is exceptionally safe—crime is nearly non-existent, though nature kills the unprepared. Check weather constantly; respect barriers at geothermal areas.

No visa needed for Americans (90 days). Summer (June-August) brings midnight sun and accessible highlands but peak prices and crowds. September-October offers northern lights potential and autumn colors. Winter is dark, icy, but magical if you're prepared. Iceland hosted 2.3 million visitors in 2024—impressive for a nation of 380,000.

It's expensive, yes. Worth it? Absolutely. This is Earth at its most raw and powerful.`,
  },
  {
    name: 'India',
    lat: 20.5937,
    lng: 78.9629,
    summary: `India doesn't ease you in—it throws you into the deep end of humanity, color, chaos, spirituality, and contradiction. With 1.4 billion people, 22 official languages, and every major religion, India isn't a country; it's a civilization-scale experience that will exhaust, inspire, and fundamentally change how you see the world. Nothing prepares you for the sensory overload: the colors of Rajasthan, the sounds of Delhi streets, the smell of street food mixing with incense and diesel fumes.

The golden triangle (Delhi-Agra-Jaipur) introduces most visitors, and for good reason: the Taj Mahal delivers on every expectation, Jaipur's pink palaces and forts showcase Rajput grandeur, and Delhi contains layers of empires from Mughal monuments to British colonial architecture. But India's vastness demands choices: Kerala's backwaters and Ayurvedic tradition in the south; Goa's Portuguese-influenced beaches and churches; Varanasi's ancient ghats where life and death meet on the Ganges; Himalayan regions like Ladakh, Sikkim, and Himachal Pradesh offering Buddhist culture and mountain beauty; Mumbai's Bollywood dreams and colonial architecture; Kolkata's cultural sophistication and Bengali warmth.

Hidden India? Rural villages where foreigners are still events, Northeast states (Meghalaya, Nagaland) with distinct tribal cultures, the Andaman Islands' pristine beaches, and countless temples and festivals most travelers never reach. The infrastructure gap is massive: luxury trains and five-star hotels exist alongside rural areas with basic facilities. Overnight trains (book AC classes) connect cities; domestic flights have exploded in affordability. Budget travelers can survive on $20-30 daily; comfort requires $50-100; luxury knows no limits.

Safety requires street smarts: scams targeting tourists are common, women travelers should take extra precautions, and food hygiene matters. That said, millions travel India safely every year. Most nationalities need e-visas (easily obtained online). October-March is ideal for most of India—comfortable temperatures, clear skies. April-June brings brutal heat; July-September is monsoon season (though great for Kerala and the Northeast).

India welcomed 9.2 million foreign visitors in 2024—a fraction of its potential given its size and attractions. Domestic tourism is massive, with 2.3 billion trips annually. You'll hear about spiritual journeys and finding yourself—clichés that happen to be true. India forces you to confront assumptions about comfort, personal space, and what's possible. It's not for everyone, but for those who engage with it, India becomes addictive.`,
  },
  {
    name: 'Indonesia',
    lat: -0.7893,
    lng: 113.9213,
    summary: `Seventeen thousand islands scattered between Asia and Australia—Indonesia is absurdly diverse, impossibly photogenic, and criminally underexplored beyond Bali. Yes, Bali lives up to the hype with its Hindu temples, rice terraces, surf breaks, and yoga retreats. But that's where most travelers stop, missing a country that contains more: the world's largest Buddhist monument (Borobudur), the most active volcanic zone on Earth, pristine coral reefs, orangutans in Borneo, and Komodo dragons on their namesake islands.

Start with Java if you want culture and history: Yogyakarta balances traditional Javanese arts, batik workshops, and access to both Borobudur and Prambanan temples. Jakarta, the megalopolis capital, rewards urban explorers with food scenes and nightlife. Move to Sumatra for rainforest adventures, Lake Toba's volcanic crater lake (larger than Singapore), and the surf breaks of the Mentawai Islands. Flores combines dramatic landscapes, traditional villages, and access to Komodo National Park where those dragons await. Sulawesi offers the otherworldly Tana Toraja culture with elaborate funeral ceremonies, and world-class diving in Bunaken and the Togean Islands.

Raja Ampat in West Papua might be Earth's most biodiverse marine ecosystem—1,500 fish species, 600 coral species, visibility that goes on forever. But few make it there due to cost and logistics. Similarly, Borneo's Indonesian side (Kalimantan) sees far fewer visitors than Malaysian Borneo despite equivalent wildlife and river journeys. The Gili Islands and Lombok offer Bali's beauty with fewer crowds.

Infrastructure varies dramatically. Bali and Java have excellent roads, abundant accommodations ($15-300+), and easy transport. Outer islands require more planning, flexibility, and often boats or small planes. Indonesia is generally safe, though petty theft occurs in tourist areas, and some regions have specific security concerns (check advisories for Papua). Natural disasters—earthquakes, tsunamis, volcanic eruptions—are real risks given the Ring of Fire location.

Most nationalities get 30-day visa-free entry; 60-day visas on arrival are available at major airports. Dry season (April-October) is ideal for most islands, though Indonesia's size means different regions have different patterns. December-March brings rain and rougher seas. Indonesia welcomed about 14 million international visitors in 2024—impressive but still just scratching the surface of its potential.

The travel can be challenging—long bus rides, ferries that leave when full rather than on schedule, basic facilities outside tourist zones—but that's exactly why it works. Indonesia rewards the traveler willing to move beyond the postcard version of Bali and engage with one of Earth's most extraordinary archipelagos.`,
  },
  {
    name: 'Iran',
    lat: 32.4279,
    lng: 53.6880,
    summary: `Landing in Iran breaks every stereotype you've absorbed. Women in colorful headscarves chat on smartphones beneath turquoise-tiled mosques. Tehran's cafés buzz with art students and poets. Strangers invite you to their homes for tea and dinner with a hospitality so genuine it's almost overwhelming. This is Persia—an ancient civilization with 7,000 years of history that happens to be wrapped in modern political complexity. Few places offer such a disconnect between perception and reality.

Start in Isfahan, where the UNESCO-listed Naqsh-e Jahan Square showcases Safavid architecture at its most spectacular: the Shah Mosque's perfect proportions, the Sheikh Lotfollah Mosque's shifting colors, bridges over the Zayandeh River where locals gather at sunset. Shiraz combines the poetry of Hafez and Saadi's gardens with access to Persepolis, the ceremonial capital of the Achaemenid Empire where Darius and Xerxes ruled half the ancient world. Yazd, the world's oldest continually inhabited city, shows Zoroastrian fire temples and the most beautiful desert architecture you'll see anywhere—wind towers and adobe buildings designed for extreme heat.

Tehran often surprises visitors: the Grand Bazaar's labyrinthine passages, the National Museum's treasures, the Golestan Palace's mirrored halls, and mountain access just north of the city. The real hidden gems lie further out: the Caspian forests of Gilan and Mazandaran provinces (lush and green, nothing like the desert Persia you imagined), the Kurdish regions of Kermanshah with Bisotun's ancient inscriptions, the remote Kaluts desert badlands near Kerman, and the Persian Gulf islands of Qeshm and Hormuz with surreal geology and traditional culture.

Infrastructure is surprisingly good: domestic flights connect cities cheaply, intercity buses are comfortable and reliable, trains serve major routes. Hotels range from basic ($20) to comfortable ($60-100). The catch? International sanctions mean no credit cards, no international ATMs—you must bring euros or dollars and exchange them. Internet is restricted; VPNs are essential. Tourism infrastructure exists but isn't polished for mass tourism.

Safety-wise, Iran is one of the Middle East's safest countries—violent crime is rare, and you'll experience hospitality that borders on aggressive. Women travelers do fine but must observe hijab rules (headscarf, long sleeves, loose clothing). Political demonstrations should be avoided. Getting there requires more planning: Americans, Canadians, and Brits need guided tours; most other nationalities can get visas on arrival or e-visas. Best times are spring (March-May) and autumn (September-November) when temperatures are pleasant.

Iran welcomed about 7 million foreign visitors in 2024 (not counting religious pilgrims from neighboring countries), though numbers fluctuate with political tensions. The tragedy is that many potential visitors never come due to political concerns, missing one of travel's most rewarding experiences. The Islamic Republic's restrictions are real, but so is the warmth of Iranian people who go out of their way to show you their country isn't the villain portrayed on TV. You'll leave questioning everything you thought you knew.`,
  },
  {
    name: 'Iraq',
    lat: 33.3152,
    lng: 44.3661,
    summary: `Iraq is not on anyone's bucket list, and that's exactly why it matters. This is Mesopotamia—the cradle of civilization where writing, agriculture, and cities were invented. Where Babylon's hanging gardens once stood, where Abraham was supposedly born in Ur, where the Tigris and Euphrates still flow through lands that birthed human history. Years of conflict have kept tourists away, but those restrictions are slowly lifting, revealing a country desperate to show the world it's more than headlines.

Iraqi Kurdistan offers the most accessible entry point: Erbil's ancient citadel has been continuously inhabited for 6,000 years, making it possibly the oldest city on Earth. The modern city below has malls, restaurants, and relative stability. Sulaymaniyah combines cosmopolitan café culture with access to mountain landscapes and the Amna Suraka prison museum—a sobering reminder of Saddam-era atrocities. Dohuk's mountains and gorges provide hiking and ancient monasteries.

Southern Iraq contains the real historical treasures but requires more careful planning. Babylon's reconstructed Ishtar Gate and palace foundations sit 85km south of Baghdad. Ur's ziggurat still dominates the desert landscape—Abraham's birthplace according to tradition. The marshlands of the south, drained by Saddam and now recovering, show a way of life unchanged for millennia. Baghdad itself is complex: the National Museum (finally reopened after being looted in 2003) contains treasures from Assyria and Babylon; the Mutanabbi Street book market pulses with intellectual life; the city's resilience is remarkable.

Infrastructure is challenging. Hotels exist in major cities ($40-150), but booking ahead is essential. Transport between regions requires planning—shared taxis, domestic flights, or organized tours. Erbil has the best facilities; Baghdad and Basra require more flexibility. The security situation has improved dramatically since ISIS's defeat, but check current advisories carefully. Kurdistan is generally safe; areas that saw recent conflict require caution. Travel outside major cities needs local guidance.

Visas depend on nationality and entry point—Kurdistan has different rules than federal Iraq. Many nationalities can get Kurdistan visas on arrival at Erbil airport; Iraqi visas require more advance planning. The safest approach for most travelers is organized tours with local specialists. Best times are October-April when temperatures are bearable (summer heat is brutal). Spring brings green landscapes.

Exact tourism numbers are hard to pin down—maybe 200,000 international visitors in 2024, mostly business travelers, aid workers, and diaspora returnions. True tourism is just beginning to revive. This isn't comfortable travel. It's not safe by most standards. But for those with the right risk tolerance and genuine historical interest, Iraq offers access to the birthplace of civilization with almost no other tourists in sight. The locals you meet—educated, multilingual, eager to share their heritage—make it clear: Iraq wants to be known for its past achievements and future potential, not just its recent traumas.`,
  },
  {
    name: 'Ireland',
    lat: 53.4129,
    lng: -8.2439,
    summary: `Ireland delivers exactly what you hope for—green hills, stone walls, pubs where music sessions start spontaneously—then surprises you with sophistication you didn't expect. This island of five million punches well above its weight: literary giants from Joyce to Yeats, tech giants from Google to Meta, and a culture that somehow balances ancient traditions with thoroughly modern attitudes. The craic, as they say, is mighty.

Dublin anchors everything: Temple Bar's tourist-trap pubs give way to neighborhoods like Stoneybottom and Portobello where locals actually drink. Trinity College's Book of Kells is worth the crowds, but so is the Chester Beatty Library's collection of Islamic and Asian manuscripts. Georgian architecture, the Guinness Storehouse (touristy but done well), and literary walking tours connecting Joyce, Wilde, and Beckett fill days. But Dublin is expensive—escape to the real Ireland outside the capital.

The Wild Atlantic Way, stretching 2,500km along the west coast, offers everything Ireland promises: the Cliffs of Moher (crowded but magnificent), the Burren's lunar limestone landscape, Connemara's wild mountains and empty roads, Galway's music-filled streets, and Donegal's remote peninsulas where tourists thin out considerably. Cork and the southern coast combine foodie culture, colorful towns like Kinsale, and the Beara Peninsula's dramatic coastal roads. Northern Ireland adds Giant's Causeway's geological wonder, Belfast's complicated history and vibrant present, and the Causeway Coast's dramatic scenery.

Hidden Ireland hides in plain sight: the Aran Islands' stone-walled fields and ancient forts, the Skellig Islands' dramatic early Christian monastery (if you can get a boat permit), the Dingle Peninsula's combination of beauty and isolation, and countless small towns where traditional music sessions happen because locals want to play, not because tourists paid to watch.

Infrastructure is excellent: rental cars (book left-hand drive ahead), buses connect towns, trains serve major cities. Roads are narrow and winding but well-maintained. Accommodations range from $25 hostels to $200+ hotels; B&Bs ($80-120) offer the best value and local connection. Ireland is very safe—crime is low, though Dublin has pickpockets. Weather is the real challenge: unpredictable, often rainy, requiring layers and waterproofs any time of year.

Americans need just a passport (90 days visa-free). May-September offers the longest days and warmest weather (relative term—15-20°C), but July-August brings crowds. April-May and September-October balance decent weather with fewer tourists and better prices. Winter is quiet but short days and cold rain test your enthusiasm.

Ireland welcomed 11.2 million visitors in 2024, with Americans representing the largest group. Dublin captures most arrivals, but the real Ireland lives in the small towns and wild coasts where strangers still buy you pints and music sessions last until early morning. Come for the scenery, stay for the people who somehow make even the rain seem charming.`,
  },
  {
    name: 'Israel',
    lat: 31.0461,
    lng: 34.8516,
    summary: `Israel compresses more history, religion, innovation, and conflict into a space smaller than New Jersey than seems physically possible. Three major religions claim Jerusalem as holy. Tel Aviv parties like Berlin. The Dead Sea is literally the lowest point on Earth. And yes, the political situation is complicated—understatement of the century. But travel here is about engaging with layers of civilization, ancient and modern, that exist nowhere else quite like this.

Jerusalem is the obvious start: the Old City's four quarters (Jewish, Christian, Muslim, Armenian) contain the Western Wall, Church of the Holy Sepulchre, and Al-Aqsa Mosque compound within walking distance of each other. Friday sunsets bring Shabbat preparations in the Jewish Quarter while the Muslim Quarter fills with worshippers. The Israel Museum houses the Dead Sea Scrolls. Yad Vashem ensures the Holocaust is never forgotten. The modern light rail connects ancient stones to shopping malls and high-tech offices.

Tel Aviv, 60km away, feels like another planet: Mediterranean beaches, Bauhaus architecture (White City is UNESCO-listed), 24/7 nightlife, startup culture, pride parades, and food scenes spanning Yemeni to Ethiopian to modern Israeli fusion. The Carmel Market buzzes with life; Jaffa's ancient port offers artists' studios and restaurants. Haifa up the coast showcases religious coexistence with the Bahá'í Gardens and mixed neighborhoods.

The real variety comes beyond the cities: the Negev Desert's Ramon Crater and ancient Nabatean cities, the Dead Sea's surreal floating experience and Masada's fortress history, Galilee's Christian pilgrimage sites and Sea of Galilee's historic towns, the Golan Heights' volcanic landscapes, and Eilat's Red Sea diving. The West Bank contains Bethlehem, Hebron, Jericho, and Palestinian culture—politically fraught but culturally essential.

Infrastructure is first-world: modern highways, reliable buses, rental cars (though skip East Jerusalem and West Bank with rental cars). Accommodation spans $30 hostels to $300+ Tel Aviv hotels. Hebrew and Arabic are official languages, but English is widely spoken. Israel is generally safe for tourists despite the headlines—security is omnipresent, sometimes uncomfortably so. The West Bank requires more caution and awareness. Gaza is off-limits.

Most visitors need just a passport (90 days visa-free), though certain nationalities face scrutiny. Be aware that entry/exit stamps can complicate travel to some Arab countries. March-May and September-November offer ideal weather—summer is hot, winter is mild but rainy. Visit religious sites outside major holidays unless you want crowds.

Israel welcomed about 4.5 million visitors in 2024—numbers fluctuate dramatically with political situations. Tourism infrastructure is well-developed and used to accommodating pilgrims, business travelers, and curious tourists. You'll encounter opinions on everything—Israelis and Palestinians both want to tell their stories. Listen to both. The food alone justifies the trip: hummus, shakshuka, sabich, dozens of dishes that blend Middle Eastern, North African, and European influences. The archaeology takes you back millennia. The innovation shows you the future. And the complexity reminds you that simple narratives rarely capture full truths.`,
  },
  {
    name: 'Italy',
    lat: 41.8719,
    lng: 12.5674,
    summary: `Italy ruins you for everywhere else. After weeks of eating regional pasta dishes, standing in Renaissance churches dripping with Caravaggio and Bernini, and sipping espresso in piazzas where Romans gathered two thousand years ago, the rest of the world feels slightly flat. This boot-shaped peninsula contains more UNESCO World Heritage Sites (58) than any other country, plus food culture so refined that every region will insist theirs is the authentic version.

Rome demands at least three days: the Colosseum and Forum where emperors ruled the known world, the Vatican's overwhelming art collections and Sistine Chapel, neighborhoods like Trastevere where locals actually live, and the simple pleasure of walking streets where every layer of history sits on top of ancient foundations. Florence is the Renaissance in concentrated form: Uffizi and Accademia galleries, Duomo's engineering marvel, Ponte Vecchio's goldsmiths, and gelato that sets standards. Venice floats like a dream—yes it's crowded, yes it's expensive, but there's nothing else like it on Earth. Get lost in Dorsoduro and Cannaregio where tourists thin out.

But Italy's depth comes in its regions: Tuscany's hilltop towns (San Gimignano, Siena, Montepulciano) and Chianti vineyards, Umbria's understated cousin with Assisi and Perugia, Cinque Terre's five villages clinging to coastal cliffs, Lake Como's Alpine beauty, the Dolomites' dramatic peaks and via ferratas, Bologna's porticos and authentic food culture, Emilia-Romagna's food valley (Parma, Modena) where Parmigiano, prosciutto, and balsamic vinegar reach art form.

Southern Italy changes the tempo: Naples' chaotic energy and pizza perfection, Pompeii's frozen-in-time Roman city, the Amalfi Coast's vertical towns (Positano, Amalfi, Ravello), Puglia's white-washed trulli houses and olive groves, Sicily's Greek temples, Norman cathedrals, Baroque cities (Noto, Ragusa), and Mt. Etna's active volcanic drama. Each region insists its food is the real Italian cuisine—and they're all right.

Infrastructure is excellent: high-speed trains connect major cities (book ahead for best prices), local trains reach smaller towns, rental cars open up rural areas. Accommodations span €20 hostels to €500+ luxury hotels; agriturismos (farm stays) offer authentic rural experiences. Italy is safe—petty theft in tourist areas is the main concern; watch your bags in crowded places.

Americans get 90 days visa-free under Schengen rules. April-June and September-October offer ideal weather, smaller crowds, better prices. July-August brings heat, crowds, and inflated prices, though beach destinations thrive. November-March is quiet (many coastal spots close) but mild in the south.

Italy welcomed 58 million international visitors in 2024—one of the world's most visited countries. The challenge isn't finding reasons to visit; it's choosing which regions to prioritize when you realize two weeks barely scratches the surface. The art, architecture, and history would be enough. The food culture would justify the trip alone. The landscapes range from Alpine to Mediterranean. And somehow Italians have mastered the art of living well—slow meals, strong coffee, afternoon pauses, prioritizing beauty and pleasure—in ways that make you question your entire approach to life. Italy doesn't just offer great travel; it offers a masterclass in civilization.`,
  },
  {
    name: 'Ivory Coast',
    lat: 7.5400,
    lng: -5.5471,
    summary: `Côte d'Ivoire doesn't appear on many travelers' radars, and honestly, that's part of its appeal. While Ghana next door soaks up the visitors, this West African nation quietly goes about being one of the region's most stable, prosperous, and culturally rich countries. The economic capital Abidjan pulses with energy—Africa's Manhattan, they call it, with skyline ambitions, French-inflected sophistication, and a music scene (Coupé-Décalé) that's conquered the continent.

Abidjan splits across lagoons connected by bridges: the Plateau district shows off modern towers and government buildings, Treichville thrives with markets and nightlife, and Cocody presents leafy residential areas. The Basilica of Our Lady of Peace in Yamoussoukro, the political capital, is one of the world's largest churches—think St. Peter's Basilica but in West Africa, a surreal sight rising from the savanna. Grand-Bassam, the old colonial capital 40km east of Abidjan, offers crumbling French architecture, African art markets, and Atlantic beaches.

The real Ivory Coast reveals itself beyond the cities: Taï National Park in the southwest protects West Africa's last major rainforest with chimpanzees and pygmy hippos. Comoé National Park in the north combines savanna, forest, and rare species like lions, elephants, and countless birds. Man, in the mountainous west, offers hiking, waterfalls, and the famous liana bridges (traditional vine bridges still in use). The coastal towns—Sassandra, San-Pédro—mix fishing culture, palm-lined beaches, and laid-back Caribbean vibes.

Infrastructure is decent by West African standards: paved highways connect major cities, domestic flights reach regional centers, and Abidjan has modern hotels ($60-200+), restaurants, and services. Rural areas require more patience—bush taxis, basic guesthouses, occasionally challenging roads. French is essential—English is rarely spoken outside tourist contexts. The country is relatively stable after 2011's post-election crisis, though northern border areas near Burkina Faso require caution.

Most visitors need visas in advance, though e-visas are available for many nationalities. November-March is dry season—best for national parks and travel. April-June and September-October bring rain. Coastal areas remain humid year-round. Ivory Coast welcomed about 1.8 million visitors in 2024, with most being regional business travelers and diaspora returns. True leisure tourism is still developing.

This is a country still finding its footing in tourism after years of instability. That means authentic experiences—village festivals, local markets, traditional ceremonies—without tourist infrastructure polish. The payoff? You'll be one of the few foreigners wandering Abidjan's neighborhoods or exploring northern savannas. West Africa isn't easy travel, but Ivory Coast offers a relatively accessible introduction with French flair, coffee plantations that supply the world, and cacao farms that make your chocolate possible. The beaches are beautiful, the people are welcoming, and the music scene alone justifies the detour.`,
  },
  {
    name: 'Jamaica',
    lat: 18.1096,
    lng: -77.2975,
    summary: `Jamaica is where reggae's bass lines pulse through every interaction, where jerk smoke drifts over beaches, and where Bob Marley's philosophy still permeates an island that's been punching above its weight culturally for decades. Yes, there are all-inclusive resorts where tourists never leave the property. Skip those. Real Jamaica—complicated, creative, sometimes challenging—waits just beyond the resort gates.

Montego Bay serves as most visitors' entry point: decent beaches, cruise ship crowds, and the jumping-off point for better destinations. Negril offers seven miles of white sand and spectacular cliff diving at Rick's Café, though it's gone commercial. The real Jamaica lives in places like Port Antonio in the northeast—lush, laid-back, with the Blue Lagoon's impossibly turquoise water, Frenchman's Cove's perfect beach, and river rafting on the Rio Grande. The Blue Mountains, rising 7,400 feet, produce some of the world's most expensive coffee and offer hiking through misty forests to villages where life moves slowly.

Kingston confronts you with urban Jamaica: Bob Marley Museum in his former home, Trench Town Culture Yard where reggae was born, Devon House's colonial architecture and legendary ice cream, and a music scene where dancehall and reggae evolution continue. It's grittier than tourist Jamaica, but it's the cultural heart. Treasure Beach on the south coast remains refreshingly undeveloped—local guesthouses, fishing culture, and community tourism that actually benefits residents.

Infrastructure varies. North coast tourist areas have good roads, plenty of hotels ($80-400+), rental cars, and services. Rural areas and Kingston require street smarts. Jamaica is generally safe in tourist zones, but poverty-driven crime exists, particularly in Kingston's ghettos and parts of Montego Bay. Stay aware, avoid flashing wealth, and skip sketchy areas after dark. That said, millions visit safely every year.

Americans need just a passport (90 days visa-free). December-April is peak season—dry, pleasant, expensive. May-November brings heat, humidity, hurricane potential, better prices, and fewer crowds. Locals prefer rainy season when tourists thin out. Jamaica welcomed 3.7 million stopover visitors in 2024, plus millions more from cruise ships.

The challenges are real: aggressive vendors, marijuana offers, occasional hassles, and inequality that's hard to ignore. But so is the creativity, the music that changed global culture, the food (jerk everything, ackee and saltfish, patties), the beauty of rivers meeting seas, and the philosophical approach to life that invented "One Love." Jamaica isn't trying to be Disney—it's a real place with real problems and extraordinary culture. Engage with it on those terms, and you'll understand why this small island has such outsized influence on how the world sounds, moves, and thinks.`,
  },
  {
    name: 'Japan',
    lat: 36.2048,
    lng: 138.2529,
    summary: `Japan is where ancient temples coexist with robot restaurants, where precision engineering meets centuries-old tea ceremonies, and where the trains run so punctually you can set your watch by them. This is a country that's managed to modernize without abandoning its soul—the attention to detail, the aesthetic refinement, the social harmony that can feel both beautiful and constraining. Few places offer such a perfect blend of the utterly foreign and the completely functional.

Tokyo overwhelms first, then reveals its patterns: Shibuya's crossing and neon chaos, Harajuku's youth fashion, Shinjuku's skyscraper canyons and tiny izakayas hidden in alleyways, Asakusa's Senso-ji temple and traditional streets, Tsukiji Outer Market's seafood breakfast. The city contains countless neighborhoods, each with distinct character. Kyoto preserves traditional Japan: 2,000 temples and shrines, geisha districts in Gion, zen gardens, bamboo groves in Arashiyama, and kaiseki meals that elevate food to art. Osaka balances it with urban energy, street food culture, and locals who talk to strangers—rare in Japan.

Beyond the big three: Hiroshima confronts you with Peace Park's emotional weight before showing you Miyajima Island's iconic floating torii gate. Nara has deer wandering freely around massive temples. The Japan Alps offer onsen towns like Takayama with wooden merchant houses, Shirakawa-go's thatched-roof villages, and ski resorts rivaling anywhere in the world. Hokkaido in the north provides wilderness, powder snow, and Ainu indigenous culture. Kyushu in the south has active volcanoes, samurai history in Kumamoto, and subtropical Yakushima Island's ancient cedar forests.

Infrastructure is world-class: the Shinkansen bullet train connects cities with speed and precision that makes flying seem primitive. Local trains, subways, and buses run on time, always. Hotels range from $25 capsule hotels to $500+ ryokans (traditional inns with kaiseki meals and onsen baths). The language barrier is real—English signage helps in cities, but learn basic phrases and kanji for getting around. Japan is extraordinarily safe: you can walk anywhere at night, lost wallets are returned, crime is minimal.

Most visitors get 90 days visa-free. Spring (March-May) brings cherry blossoms and crowds; autumn (September-November) offers fall colors and comfortable weather. Summer is hot and humid but offers festivals. Winter means skiing in the mountains and fewer tourists in cities. Japan welcomed 31.9 million visitors in 2024—numbers bouncing back post-pandemic toward the 32 million pre-COVID peak.

The cost? Moderate to high—budget travel is possible ($50-70/day), comfort runs $100-150, and luxury knows no ceiling. But the value is extraordinary: Michelin-starred ramen for $10, stunning temples for free, experiences impossible to replicate elsewhere. Japan rewards the curious: learn the etiquette (shoes off, bow slightly, no tipping), respect the rules (no eating while walking, quiet on trains), and you'll access a culture that's spent centuries perfecting everything from sword-making to rice cultivation to customer service. It's organized, clean, safe, beautiful, delicious, and deeply foreign in ways that make you reconsider assumptions about how societies can function. You'll want to stay longer. Everyone does.`,
  },
]

async function main() {
  console.log('🚀 Starting Travel & Tourism Batch 6 generation\n')
  console.log(`📝 Generating writeups for ${travelWriteups.length} countries\n`)

  for (const country of travelWriteups) {
    try {
      console.log(`\n${'='.repeat(60)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(60))

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
          summary: country.summary,
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
          summary: country.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ Saved travel writeup for ${country.name}`)
      console.log(`   Length: ${country.summary.length} characters`)
    } catch (error) {
      console.error(`❌ Error processing ${country.name}:`, error)
    }
  }

  console.log('\n' + '='.repeat(60))
  console.log('✅ Travel & Tourism Batch 6 Complete!')
  console.log('='.repeat(60))
  console.log(`\n📊 Summary:`)
  console.log(`   Total countries: ${travelWriteups.length}`)
  console.log(`   Category: travel`)
  console.log(`   Type: country`)
  console.log(`\n🌍 Countries completed:`)
  travelWriteups.forEach((c, i) => {
    console.log(`   ${i + 1}. ${c.name}`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
