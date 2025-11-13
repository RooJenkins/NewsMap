import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const foodData = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `The thing that hits you first about Afghan food is the sheer generosity of it—platters piled so high with rice that the lamb or chicken underneath becomes a treasure hunt. Kabuli palaw is the national dish, and when it's done right, it's genuinely transcendent: long-grain rice cooked with lamb, raisins, carrots julienned into sweet ribbons, and almonds that provide this crucial textural contrast. The rice gets cooked in the lamb stock until each grain is separate and glistening, infused with cumin, cardamom, and black pepper. You'll find it at every celebration, every wedding, every Friday family lunch.

Street food culture revolves around kebabs—shami, chapli, seekh—each region claiming superiority. Chapli kebab from Peshawar (which Afghan cuisine shares with Pakistan's Pashtun regions) is beef or mutton mixed with onions, tomatoes, coriander, and pomegranate seeds, formed into flat patties and fried in tail fat. The pomegranate seeds are the genius move—they burst in your mouth with this tart brightness that cuts through the richness. Mantu (steamed dumplings filled with spiced meat and onions, topped with yogurt and split peas) shows the Central Asian influence, while ashak (leek-filled dumplings) demonstrates Afghan cuisine's vegetable sophistication often overlooked by outsiders.

Bread is sacred. Naan-e-afghani is baked in tandoor ovens, the dough slapped onto the vertical walls, emerging with those characteristic char marks and a chew that's both tender and substantial. It's the vehicle for everything—scooping up qorma (rich meat stews), sopping up chaka (strained yogurt with cucumber and mint), wrapping around kebabs. Afghanistan's agricultural products are exceptional: pomegranates from Kandahar are globally renowned, and Afghan melons and grapes achieve sweetness levels that seem almost impossible. The country was once a major producer of almonds, pistachios, and saffron—agricultural exports decimated by decades of war but slowly recovering.

High-end Afghan cuisine barely exists in Afghanistan itself due to ongoing security and economic challenges, but the diaspora has created remarkable restaurants in Dubai, London, and Northern Virginia that elevate traditional dishes. In Kabul, restaurants like Sufi and L'Atmosphere attempt fine dining, though infrastructure challenges persist. The real food action happens in homes and at street vendors—chai khanas (tea houses) serving green tea with cardamom, bakeries producing cakes that show Persian and Indian influences, and markets where you can still find fresh saffron threads and dried mulberries. Afghan cuisine deserves far more attention than it gets—it's the delicious intersection of Persian, Central Asian, and South Asian food traditions, with its own distinct identity forged by mountains and the Silk Road.`,
    issues: [
      'Kabuli palaw: national rice dish with lamb, raisins, carrots, almonds',
      'Chapli kebab with pomegranate seeds shows regional influence',
      'Agricultural exports: Kandahar pomegranates, saffron, pistachios',
      'Diaspora restaurants elevating traditional cuisine globally',
      'Bread culture: naan-e-afghani baked in tandoor ovens'
    ],
    topStories: []
  },
  {
    name: 'Albania',
    lat: 41.1533,
    lng: 20.1683,
    summary: `Albanian food is having a genuine moment of rediscovery—both Albanians reclaiming traditional foodways and outsiders discovering what the Balkans have been eating for centuries. Tavë kosi is the unofficial national dish, and it's brilliantly simple: lamb baked with yogurt and eggs until it forms this golden, tangy custard that's simultaneously rich and refreshing. The yogurt is crucial—Albanian yogurt culture is strong, with every family having preferred methods for straining and culturing. The dish shows Ottoman influence but is distinctly Albanian in its execution and the specific sourness of the yogurt used.

Coastal Albania eats completely differently from the mountain regions. In Saranda and Vlora, you're eating grilled fish—koran (sea bream), levrek (sea bass)—drizzled with olive oil from ancient groves that produce peppery, grassy oil that rivals anything from Tuscany. Albanian olive oil is genuinely world-class and criminally undermarketed. Midye tava (fried mussels) shows the Ottoman legacy, while frëngji me salcë domate (red mullet in tomato sauce) represents the Italian influence from across the Adriatic. The mountain cuisine is hearty, preserved food—fërgesë (a baked dish of peppers, tomatoes, cottage cheese, and sometimes liver) is winter fuel, while the famous Gjirokastër version adds liver and becomes something primal and satisfying.

Street food means byrek everywhere—flaky phyllo pastry filled with cheese, spinach, or meat, sold from bakeries that operate from 5 AM until they sell out, usually by 10 AM. The Albanian diaspora has made byrek famous globally, but eating it fresh from a brick oven in Tirana, when the pastry's still crackling and the cheese is molten, is a completely different experience. Petulla (fried dough) gets sold at beach stands and mountain festivals, dusted with powdered sugar or drizzled with honey. Qofte (meatballs) and qebapa (grilled minced meat) are ubiquitous, each region claiming their version is superior.

High-end dining is emerging in Tirana—restaurants like Mullixhiu focus on hyperlocal ingredients and traditional techniques executed with modern precision. Chef Bledar Kola has become Albania's culinary ambassador, sourcing from small producers and reviving dishes that were disappearing. Albania exports herbs, honey, and increasingly wine—the native grape Kallmet produces robust reds that are finding international markets. Agricultural products include excellent figs, pomegranates, and chestnuts from mountain forests. Albanian food is finally getting recognition as more than "Balkan food"—it's a distinct cuisine shaped by mountains, coast, Ottoman rule, Italian proximity, and stubborn independence. The trick now is developing the infrastructure and marketing to make Albanian restaurants destinations rather than discoveries.`,
    issues: [
      'Tavë kosi: national dish of lamb baked in yogurt custard',
      'World-class olive oil from ancient coastal groves',
      'Byrek (phyllo pastry) dominates street food culture',
      'Chef Bledar Kola at Mullixhiu leading culinary revival',
      'Wine exports growing with native Kallmet grape'
    ],
    topStories: []
  },
  {
    name: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    summary: `Algerian food is North African cooking at its most robust and deeply spiced—couscous is Friday's sacred ritual, tajines simmer for hours, and bread appears at every meal in forms that reflect the country's Berber, Arab, Ottoman, and French influences. Couscous might be North Africa's most famous dish, but Algeria's version is distinctive: steamed over a rich broth of lamb or chicken with vegetables—chickpeas, carrots, turnips, zucchini—and the crucial element is the sauce. Algerian couscous tends toward red (tomato-based) rather than the golden broths of Morocco, and the heat level is serious. Harissa isn't just a condiment; it's a fundamental flavor component.

Tajines in Algeria differ from Moroccan versions—the word refers to the stew rather than the conical pot. Lamb tajine with prunes and almonds balances sweet and savory in that classic Maghrebi way, while chicken tajine with preserved lemons and olives demonstrates how salt, acid, and fat create something transcendent. The preservation culture is strong: lemons preserved in salt and their own juices, olives cured in brine, dried fruits and nuts stored for winter. Chorba (soup) appears during Ramadan as the iftar starter—a rich broth with lamb, chickpeas, vermicelli, and tomatoes, thickened with whipped egg at the end for richness and body.

Street food reflects the French colonial legacy more than Algeria might admit. Mahjouba (thin semolina crepes filled with tomato-pepper sauce and onions) gets sold from carts, folded into quarters and eaten hot. Bourek (phyllo pastry stuffed with meat or potato) is everywhere, the phyllo shattering with each bite. Algerian sandwiches are genuinely excellent—khobz eddar (homemade bread) split and filled with merguez, harissa, and potato frites. The sandwich mixte (French baguette with tuna, hard-boiled egg, olives, harissa) is perfect hangover food or late-night sustenance.

High-end Algerian cuisine barely exists in Algeria—fine dining trends European or pan-Mediterranean. The real food happens in homes and at neighborhood restaurants that have been making the same dishes for three generations. Algeria exports dates, olive oil, and semolina—the Deglet Noor dates are famously sweet and prized internationally. Wine production continues despite religious restrictions—Algerian wine was legendary during French rule, and a few producers maintain serious viticulture in the coastal regions. The challenge for Algerian cuisine is visibility: it's overshadowed by Moroccan and Tunisian food in global perception, despite being equally complex and delicious. Markets like the one in Oran overflow with produce—pomegranates, figs, quince—and the seafood from the Mediterranean coast is excellent but underutilized in national cuisine compared to meat. Algerian food deserves more attention, both for its traditional excellence and for chefs like those at Le Dauphin in Algiers who are beginning to innovate while respecting tradition.`,
    issues: [
      'Couscous: Friday ritual with red sauce and serious heat',
      'Tajines differ from Moroccan style, emphasis on stews',
      'French colonial influence visible in street sandwiches',
      'Deglet Noor dates major agricultural export',
      'Preservation culture: lemons, olives, dried fruits and nuts'
    ],
    topStories: []
  },
  {
    name: 'Angola',
    lat: -11.2027,
    lng: 17.8739,
    summary: `Angolan food is African soul food with Portuguese technique, palm oil richness, and ingredients that reflect both Atlantic coast abundance and inland agricultural traditions. Muamba de galinha is the national dish, and it's a revelation if you've never had it—chicken simmered in palm oil with okra, garlic, chilies, and squash until the sauce becomes this deep orange-red, slightly mucilaginous (in the best way) coating. The palm oil is everything: it gives the dish its color, its richness, and that distinctive flavor that's earthy, almost nutty. Angolans use palm oil the way the French use butter—it's the foundation of flavor.

Calulu is the other essential dish, and it's even better. Dried fish (often bacalhau, that Portuguese staple) or fresh fish cooked with vegetables—onions, tomatoes, okra, sweet potato leaves—in palm oil until everything breaks down into this intensely savory, complex stew. The dried fish adds umami depth that fresh fish can't match, and the sweet potato leaves contribute a slight bitterness that balances the richness. You eat both muamba and calulu with funge, a thick porridge made from cassava flour that functions like Nigerian fufu—you tear off a piece, roll it into a ball, make an indentation with your thumb, and use it to scoop up the stew.

Coastal regions eat extraordinary seafood. Lobster, prawns, and crab are abundant and relatively affordable. Luanda's seafood restaurants like Lookal Mar serve grilled prawns with piri-piri sauce that'll make you weep—not just from the heat but from the perfectly charred, sweet flesh. The Portuguese influence means restaurants also serve dishes like arroz de marisco (seafood rice) and cataplana, but Angolans have made them their own with local fish and more aggressive seasoning.

Street food culture centers on grilled meats and snacks. Churrasqueiras (grill restaurants) serve beef, chicken, and goat with varying degrees of formality—from proper sit-down places to roadside operations with smoke billowing. Cocada amarela (sweet coconut candy made yellow with egg yolks) shows the Portuguese sweet tooth, while roasted cashews, peanuts, and ginguba (peanut paste) get sold everywhere. Angola's coffee culture is resurging—Angolan coffee was world-famous before the civil war destroyed the plantations. Now, small producers are rebuilding, and Angolan beans are making it onto specialty roaster lists again.

High-end dining is emerging in Luanda—places like Baía and Cais de Kwanza are attempting upscale Angolan cuisine. The challenge is that decades of war and oil wealth created a dining scene that skewed heavily Portuguese and international, so reclaiming and elevating Angolan food is still a work in progress. But the ingredients are incredible: Angola produces cassava, palm oil, peanuts, beans, and in the highlands, corn and vegetables. The agricultural potential is enormous if infrastructure improves. Angolan food deserves much more global recognition—it's the missing link in understanding how African and Portuguese foodways merged and created something entirely new.`,
    issues: [
      'Muamba de galinha: national dish with palm oil base',
      'Calulu combines dried fish, vegetables, palm oil complexity',
      'Funge (cassava porridge) accompanies every meal',
      'Coffee production resurging after civil war devastation',
      'Coastal seafood abundance: lobster, prawns, crab'
    ],
    topStories: []
  },
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `Argentine food is beef, obviously, but the obsession with asado goes so deep it becomes a philosophy, a social ritual, a measuring stick for masculinity and skill. A proper asado isn't just grilling meat—it's a six-hour commitment where the asador tends various cuts (bife de chorizo, entraña, vacío, sweetbreads, chorizo, morcilla) over wood coals at carefully calibrated distances from the heat. The crust on perfectly grilled Argentine beef, with just coarse salt and maybe some chimichurri after, achieves this textural contrast between crackly char and butter-tender interior that makes you understand why Argentines are so smug about their meat. The cattle are grass-fed, the beef genuinely tastes different—more minerally, less fatty than American beef, with a cleaner finish.

But Argentine food is so much more than asado. Empanadas are serious business—each province has its own style, and Argentines will fight about whose are best. Tucumán empanadas have more liquid in the filling (you're supposed to bite carefully and slurp the juice), while Salta's are spicier, and Mendoza adds olives and hard-boiled egg. The dough itself varies from flaky to tender to almost bready. Then there's the Italian influence: milanesas (breaded, fried cutlets) are ubiquitous, but the milanesa napolitana—topped with ham, tomato sauce, and melted cheese—is pure Argentine invention and perfect drunk food. Pizza in Argentina is its own thing—thick crust, absurd amounts of cheese, often topped with fainá (chickpea flour flatbread) in what's called pizza a caballo.

Street food culture revolves around choripán (grilled chorizo sausage in crusty bread with chimichurri) and panchos (hot dogs that bear little resemblance to American versions). Buenos Aires has incredible food markets—Mercado de San Telmo is touristy but still functional, while Mercado de Pulgas in Palermo has vendors selling everything from wild boar to fresh pasta to artisanal preserves. The pasta culture deserves more attention—every neighborhood has at least one fábrica de pasta making fresh ñoquis, ravioles, and sorrentinos that families buy for Sunday lunch.

High-end Argentine cuisine has exploded in the past decade. Tegui, Don Julio, and Elena have made Buenos Aires a serious dining destination. Chefs like Mauro Colagreco (born in Argentina, now at Mirazur in France with three Michelin stars) and Francis Mallmann (the master of live-fire cooking) have put Argentine cuisine on the global map. Mendoza's wine region produces Malbec that rivals Bordeaux at a fraction of the price, and Argentine wine tourism is booming—estates like Zuccardi and Catena Zapata offer world-class dining alongside their wines.

The sweet tooth is real: dulce de leche appears in everything, alfajores (cookies sandwiched with dulce de leche and coated in chocolate) are the national snack, and facturas (pastries) accompany every coffee break. Argentina exports beef, wine, honey, and increasingly, olive oil. The country's agricultural wealth is staggering, but the culinary conversation still centers too heavily on beef. There's growing interest in Patagonian lamb, trout from mountain streams, and the indigenous ingredients that are finally getting attention. Argentine food has moved beyond asado as its sole identity, but the challenge is making the world notice everything else Argentina does brilliantly.`,
    issues: [
      'Asado: ritual of grilled meats over wood coals',
      'Empanadas vary by province with fierce regional loyalty',
      'Italian influence: milanesas, pizza a caballo, fresh pasta',
      'Buenos Aires fine dining boom: Tegui, Don Julio, Elena',
      'Mendoza Malbec and wine tourism global destination'
    ],
    topStories: []
  },
  {
    name: 'Australia',
    lat: -25.2744,
    lng: 133.7751,
    summary: `Australian food has had the most remarkable evolution—from the "meat and three veg" British culinary colonialism of the mid-20th century to one of the most exciting, innovative food scenes globally. What happened is that massive immigration from Greece, Italy, Vietnam, China, Lebanon, and Thailand transformed Australian palates, and chefs started paying attention to native ingredients that had been there for 60,000 years. The result is Modern Australian cuisine, which at its best is Japanese technique meets Mediterranean ingredients meets native Australian bush tucker.

The brunch culture is genuinely world-leading. Melbourne especially has perfected the weekend brunch in ways that make American brunch look amateurish. Avocado toast isn't just a millennial cliché—at places like Cumulus Inc. or Higher Ground, it's actually worth the hype: sourdough from a bakery that takes its starter seriously, perfectly ripe avocado, dukkah or chili flakes, a slow-cooked egg with yolk that's still liquid gold. The coffee culture is even more serious—Australia runs on flat whites, and the espresso standards are so high that Starbucks failed catastrophically. Melbourne and Sydney have third-wave coffee culture that influenced the entire world.

Seafood is exceptional and often underappreciated internationally. Sydney rock oysters are brinier and more minerally than Pacific oysters, Moreton Bay bugs (slipper lobsters) are sweet and delicate, and barramundi is flaky perfection when grilled simply. Coastal fish markets like Sydney Fish Market move incredible volume—tuna, kingfish, snapper—much of it for export to Japan. The quality standards are rigorous. Tasmania produces some of the world's best salmon and trout, while South Australian blue fin tuna goes straight to Tsukiji (now Toyosu) Market in Tokyo.

The native ingredients movement is fascinating to watch develop. Chefs like Ben Shewry at Attica, Kylie Kwong, and Jock Zonfrillo (RIP) have championed finger limes (citrus caviar that bursts in your mouth), wattleseed (roasted acacia seeds with coffee-hazelnut notes), lemon myrtle, muntries, and kangaroo. Kangaroo meat is lean, gamey, and sustainable—far lower carbon footprint than beef—but cultural associations with the national animal make it complicated. The fine dining scene is exceptional: Quay in Sydney has kept three hats for years, Attica in Melbourne is globally acclaimed, and Brae in regional Victoria makes the trek worthwhile.

The Asian-Australian fusion happening in cities is some of the most exciting cooking anywhere. Vietnamese bakeries in Cabramatta produce bánh mì that rival anything in Hanoi, Chinese-Australian chefs are creating new dishes that are neither authentically Chinese nor merely Westernized, and Thai restaurants in Sydney cook with a confidence and spice level that's rare outside Thailand. The cultural cringe Australians had about their food has evaporated—replaced by deserved pride in a food scene that's both global in influence and distinctly Australian in execution. Agriculture exports include beef (grass-fed, high quality), wheat, wine, and honey. Australia's wine regions—Barossa, Margaret River, Yarra Valley—produce world-class Shiraz, Chardonnay, and Cabernet. The challenge now is maintaining quality as food tourism booms and ensuring native ingredients become mainstream rather than chef curiosities.`,
    issues: [
      'Modern Australian cuisine: global technique meets native ingredients',
      'Melbourne brunch culture globally influential',
      'Third-wave coffee standards forced Starbucks to fail',
      'Native ingredients: finger limes, wattleseed, lemon myrtle, kangaroo',
      'Asian-Australian fusion creating new distinct cuisine'
    ],
    topStories: []
  },
  {
    name: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    summary: `Austrian food lives in the shadow of German cuisine internationally, which is criminal because Vienna's coffee house culture and schnitzel alone deserve global recognition. Wiener Schnitzel is the national obsession—veal pounded thin, breaded, fried in clarified butter until the coating puffs away from the meat creating these air pockets, served with potato salad and lingonberry jam. The authentic version is veal, never pork (that's Schnitzel Wiener Art), and the size is absurd—it overflows the plate because anything less is considered stingy. The breading technique is precise: flour, egg, breadcrumbs, and the key is keeping the meat and coating separate so it stays crispy rather than soggy.

The coffee house (Kaffeehaus) culture is UNESCO-listed for good reason. Places like Café Central, Café Hawelka, and Café Sacher aren't just coffee shops—they're institutions where you can nurse a melange (coffee with steamed milk) for hours while reading newspapers provided on wooden holders. The cakes are serious business: Sachertorte (chocolate cake with apricot jam, invented at Hotel Sacher) sparked legal battles over the authentic recipe. Apfelstrudel requires pastry dough stretched so thin you can read newspaper through it, filled with apples, raisins, and breadcrumbs, served warm with vanilla sauce or whipped cream.

Austrian cuisine has serious regional variation often overlooked. Styria produces pumpkin seed oil (kürbiskernöl) so dark green it's almost black, with a nutty, slightly bitter flavor drizzled over everything from salads to ice cream. Carinthia has Kärntner Kasnudeln (pasta pockets filled with potatoes, herbs, and cheese), while Vorarlberg's cuisine leans Swiss with Käsespätzle (cheese noodles). Tafelspitz (boiled beef with root vegetables and horseradish) was Emperor Franz Josef's favorite and remains Vienna's comfort food—the beef is simmered for hours until tender, served with three sauces and the cooking broth.

Vienna has serious fine dining emerging alongside traditional spots. Steirereck holds two Michelin stars and focuses on Austrian ingredients executed with modern technique—Alpine trout, game from local forests, vegetables from their own garden. Amador has three stars and pushes molecular gastronomy while respecting Austrian traditions. But the traditional restaurants (Gasthäuser) are where most Austrians eat: places serving goulash, Schweinsbraten (roast pork), and Erdäpfelsalat (warm potato salad with vinegar and oil).

Austrian wine is criminally underrated—Grüner Veltliner is Austria's signature white grape, producing wines from light and peppery to rich and age-worthy. The Wachau region's steep vineyard terraces along the Danube produce stunning Rieslings. Heuriger (wine taverns) around Vienna serve new wine with cold plates of ham, cheese, and spreads—it's casual, convivial, uniquely Austrian. The agricultural products include dairy (Alpine butter and cheese), grains, and stone fruits. Austria exports chocolates (Manner wafers, Mozartkugeln) and increasingly wine. The cuisine deserves more global attention—it's refined, deeply traditional, and capable of genuine innovation when chefs bother to look beyond Vienna's classical repertoire. The challenge is that Austrian food remains tied to ideas of "old Europe" rather than being seen as dynamic and evolving, which is exactly what's happening in Vienna's restaurant scene right now.`,
    issues: [
      'Wiener Schnitzel: veal, precise breading, oversized portions',
      'UNESCO-listed Kaffeehaus culture with legendary cakes',
      'Regional specialties: Styrian pumpkin seed oil, Carinthian dumplings',
      'Steirereck and Amador pushing Austrian fine dining',
      'Grüner Veltliner and Austrian wine criminally underrated'
    ],
    topStories: []
  },
  {
    name: 'Bahrain',
    lat: 26.0667,
    lng: 50.5577,
    summary: `Bahraini food is Gulf Arab cuisine with its own distinct character—less fiery than Yemeni, less subtle than Emirati, shaped by the island's historical role as a trading hub and pearl diving center. Machboos is the national dish, and every family claims their recipe is definitive. It's rice cooked with meat (chicken, lamb, or fish), dried limes (loomi), saffron, cardamom, cinnamon, and cloves. The dried limes are crucial—they add this sour, slightly smoky, almost tea-like flavor that makes the dish recognizable as Gulf rather than Iranian or Indian, though influences from both are obvious. The rice gets cooked in the meat stock until each grain is separate but infused with spice.

The pearl diving history created a food culture designed for sustenance—muhammar is sweet rice cooked with dates and sugar, turning orangey-red from the date syrup, originally eaten by pearl divers for quick energy. Nowadays it accompanies fish or is eaten as breakfast. Samboosa (samosas, showing the Indian influence) are everywhere during Ramadan, filled with meat, cheese, or potato. Harees (wheat and meat slow-cooked until porridge-like) is Ramadan iftar food and winter comfort food—it's basically savory congee, topped with melted ghee and sugar in a sweet-savory combination that sounds wrong but works.

Seafood is central given Bahrain's island geography. Hamour (grouper) is king—grilled, fried, or in curries. Zubaidi (pomfret) gets grilled whole or baked with rice in a dish called machboos samak. Shrimp are abundant and appear in stews and rice dishes. The fish souk in Manama's older neighborhoods smells exactly like you'd expect—not unpleasant if you love fish, overwhelming if you don't—but the quality is excellent, much of it caught locally in the Gulf waters.

Bahrain has invested heavily in becoming a Gulf food destination. Restaurants like Fusions by Tala Bashmi serve modern interpretations of Khaleeji cuisine, while Block 338 in Adliya has concentrated trendy restaurants and cafes attempting fusion and international concepts. The challenge is that Bahrain sits between Saudi Arabia and Dubai—it's not as conservative as Saudi, not as flashy as Dubai, trying to carve out an identity as the "authentic" Gulf dining experience. The café culture is genuinely pleasant—traditional coffee houses serving qahwa (Arabic coffee with cardamom) and dates alongside modern specialty coffee shops.

Bahrain exports dates, though not as famously as Saudi or Iraq, and has a small but growing organic farming movement trying to reduce food import dependence. The halwa (gelatinous sweet flavored with saffron, rosewater, cardamom, and nuts) from Al Jasra is regionally famous—families buy it by the kilo as gifts. Street food isn't as developed as in Kuwait or UAE, but shawarma and falafel stands are everywhere, and the Pakistani and Indian expat communities have made biryanis and parathas widely available. Bahrain's cuisine reflects its position as a trading crossroads—influences from Persia, India, Arabia, and even the Levant visible in dishes and techniques, but synthesized into something distinctly Bahraini that deserves recognition separate from generic "Gulf food."`,
    issues: [
      'Machboos: national rice dish with dried limes (loomi)',
      'Pearl diving history shaped muhammar (sweet date rice)',
      'Hamour (grouper) and zubaidi (pomfret) dominate seafood',
      'Block 338 concentrates trendy dining and fusion concepts',
      'Al Jasra halwa: regionally famous saffron-cardamom sweet'
    ],
    topStories: []
  },
  {
    name: 'Bangladesh',
    lat: 23.6850,
    lng: 90.3563,
    summary: `Bangladeshi food is rice and fish, but that simplicity conceals incredible regional diversity and technique. Bengali cuisine spans the border with India's West Bengal, but Bangladesh's Muslim majority and different agricultural products create distinct dishes. Hilsa (ilish) is the national obsession—this oily, bony river fish achieves almost spiritual significance. During monsoon season when hilsa migrate upriver to spawn, the markets flood with them, and families eat hilsa curry multiple times per week. The bones are annoying, but the flesh is rich and flavorful, and the oil that seeps into the rice is what makes it special. Ilish bhapa (hilsa steamed with mustard paste) is the classic preparation—mustard seeds ground with green chilies and turmeric, wrapped in banana leaf with the fish and steamed until the mustard mellows and the fish oils merge into something transcendent.

Rice is everything—Bangladesh is the fourth-largest rice producer globally, and multiple daily rice meals are standard. Parboiled rice (atap) is fluffier, while older rice (boro) is preferred for pilaf-style dishes. But the genius of Bangladeshi cuisine is the accompaniments: bharta (mashed vegetables or fish with mustard oil and chilies), vorta (similar but usually raw or lightly cooked), torkari (vegetable curries), and dal that ranges from thin soup to thick stew. Mustard oil is the defining flavor—pungent, slightly bitter when raw, it becomes nutty and mellow when heated. Western palates often find it overwhelming at first, but it's the soul of Bengali cooking.

Street food culture is vibrant and chaotic. Dhaka's streets fill with vendors selling fuchka (pani puri—crispy spheres filled with potato, chickpeas, tamarind water, and chili water), jhalmuri (puffed rice mixed with mustard oil, onions, chilies, peanuts—the perfect snack), and chotpoti (chickpeas and potatoes in tamarind sauce). Kacchi biryani is the celebration dish—mutton marinated in yogurt and spices, layered with rice and cooked dum-style (sealed pot) until the meat is fall-apart tender and the rice is infused with all those spices and lamb fat. Bangladeshi biryani is distinct from Hyderabadi or Lucknowi versions—the use of raw meat rather than cooked, the potato that goes in, the specific spice blend.

High-end Bangladeshi restaurants barely exist in Dhaka—most fine dining skews international or pan-Asian. The best food happens in neighborhood restaurants and home kitchens. Star Kabab serves excellent kebabs and nehari (slow-cooked beef stew), while Fakruddin is famous for biryani. The challenge is infrastructure and food safety perception—Dhaka's restaurants struggle with inconsistent electricity and supply chains, making fine dining difficult to execute reliably.

Bangladesh exports shrimp and fish, rice, and tea (the Sylhet region produces excellent black tea). Vegetables like eggplant, bitter melon, and leafy greens are abundant and cheap. The poverty means most Bangladeshis eat simply—rice, dal, a vegetable, maybe a small amount of fish or meat—but the cuisine's complexity emerges when you have resources and time. Bangladeshi food deserves far more recognition than it receives—overshadowed by Indian cuisine globally, despite having distinct techniques (the mustard oil and seed culture, the emphasis on fish over meat, the specific spice blends) that make it its own tradition. The diaspora is beginning to change perceptions, with chefs in London, New York, and Toronto elevating Bengali cuisine and showing it's far more than "curry."`,
    issues: [
      'Hilsa (ilish) fish: national obsession during monsoon season',
      'Mustard oil and mustard seed paste define Bengali flavor',
      'Rice consumption extraordinary: fourth-largest producer globally',
      'Kacchi biryani distinct from Hyderabadi/Lucknowi styles',
      'Shrimp, fish, and tea major agricultural exports'
    ],
    topStories: []
  },
  {
    name: 'Belarus',
    lat: 53.7098,
    lng: 27.9534,
    summary: `Belarusian food is Eastern European peasant cuisine elevated to national identity—potatoes feature in everything, dairy is crucial, and the flavors are subtle, designed for cold climates and agricultural abundance rather than spice or complexity. Draniki (potato pancakes) are the unofficial national dish, and every babushka has her own technique. The potatoes get grated (some leave them coarse, others grate fine), mixed with egg and flour (or sometimes no flour), and fried in oil until golden and crispy. They're served with sour cream (smetana), which is more cultured and tangy than American sour cream, or with machanka (a rich gravy made from pork fat, flour, and meat drippings). The combination of crispy potato and tangy cream is simple perfection.

Borscht is eaten throughout the former Soviet Union, but Belarusian borscht uses sorrel or nettles instead of beet sometimes, creating a green borscht that's more sour and grassy. The beetroot version is still common, always with sour cream swirled in, creating those beautiful pink patterns. Soups in general dominate the cuisine—solyanka (sour soup with meat or fish and pickles), shchi (cabbage soup), and kholodnik (cold beet soup similar to Lithuanian šaltibarščiai) in summer. The use of pickles and fermentation is serious: cucumbers, tomatoes, cabbage, mushrooms all get preserved in brine for winter.

Belarusian sausages (kalbasy) come in dozens of varieties—smoked, fresh, with different meat blends and spice levels. They're sold at markets and eaten cold as snacks or fried with potatoes. Machanka (the gravy mentioned earlier) is traditionally eaten with thick pancakes (bliny) made from yeasted batter, though modern versions use draniki. It's heavy, filling, designed for people doing manual labor in subzero temperatures. Kindziuk (smoked beef or pork sausage) is a delicacy, while salo (cured pork fat) is eaten sliced thin on dark bread—an acquired taste for outsiders but beloved locally.

High-end Belarusian cuisine barely exists—the food culture remains firmly rooted in home cooking and traditional restaurants. Minsk has a few places attempting to elevate traditional dishes (Kamyanitsa, Vasilki) but with mixed results. The Soviet legacy means restaurant culture was underdeveloped, and post-Soviet Belarus hasn't seen the culinary renaissance that Baltic states experienced. Most dining out is either stolovayas (cafeterias serving traditional food cheaply) or international chains.

Belarus exports dairy products, potatoes, and grains. The dairy industry is significant—butter, cheese, and condensed milk are produced for export to Russia and Kazakhstan. Flax is grown for seeds and oil. The agricultural potential is enormous—flat, fertile land and plenty of water—but infrastructure and market access limit exports beyond the former Soviet states. Belarusian food isn't exciting in the way Georgian or Uzbek food can be, but it's honest, sustaining, and represents a foodway shaped by harsh winters and agricultural cycles. The challenge is that Belarusian cuisine lacks a global champion—no diaspora community promoting it, no celebrity chefs reimagining it, no food tourism infrastructure. It remains largely unknown outside the region, appreciated mainly by those who grew up eating it and understand its comforts.`,
    issues: [
      'Draniki (potato pancakes) with sour cream national staple',
      'Green borscht with sorrel/nettles alongside beetroot version',
      'Fermentation culture: pickles, sauerkraut, mushrooms for winter',
      'Dairy exports: butter, cheese, condensed milk to former Soviet states',
      'Limited fine dining; food culture rooted in home cooking'
    ],
    topStories: []
  },
  {
    name: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    summary: `Belgian food is criminally underrated, overshadowed by French cuisine despite having its own distinct traditions and, arguably, better beer. The frites alone deserve more recognition—Belgian fries are double-fried (once at lower temp to cook through, once at high temp to crisp), thick-cut, and served in paper cones with mayonnaise that's richer and eggier than American mayo. The obsession with fries is real: Belgian per-capita potato consumption is among Europe's highest, and proper fritkots (fry stands) are everywhere, each claiming their frying method is superior. The key is using the right potato variety (Bintje) and beef fat or quality vegetable oil, never the cheap stuff.

Moules-frites (mussels with fries) is the national dish, eaten year-round but especially celebrated in mussel season (September to April, when there's an 'R' in the month). The mussels are steamed in white wine, celery, onions, and parsley, and you eat them by using an empty shell as pincers to pluck the meat from other shells. The broth is excellent for dipping fries or bread. Belgian chocolate is world-famous for good reason—pralines (filled chocolates) from shops like Neuhaus, Godiva, and Pierre Marcolini are genuinely exceptional. The ganache fillings are smooth, not too sweet, and the chocolate shells have that perfect snap. Belgians consume more chocolate per capita than almost any country.

Belgian beer culture is UNESCO-listed and deserves every bit of recognition. The variety is staggering: Trappist ales brewed by monks, lambics spontaneously fermented with wild yeast, strong ales, wheat beers, each with specific glassware designed to enhance the experience. Westvleteren 12 is regularly rated the world's best beer, available only from the monastery itself in limited quantities. Beer isn't just a drink in Belgium—it's a culinary ingredient in dishes like carbonnade flamande (beef stewed in dark beer) and lapin à la Kriek (rabbit in cherry beer).

The fine dining scene is exceptional. Belgium has more Michelin stars per capita than anywhere except Luxembourg. Hof van Cleve (three stars), Hertog Jan (three stars before Gert De Mangeleer moved on), and Bon Bon in Brussels are world-class. The cuisine blends French technique with Flemish heartiness—expect game in season, North Sea fish and seafood, and vegetables prepared with the kind of technical precision that comes from serious training. Even more casual restaurants maintain high standards—the concept of gezelligheid (coziness, conviviality) means dining is meant to be leisurely and pleasant.

Waffles are tourists' focus, but locals eat them occasionally, not constantly. Brussels waffles are light and rectangular, while Liège waffles are denser and studded with pearl sugar that caramelizes during cooking. The regional variations matter: Ghent has its waterzooi (creamy chicken or fish stew), Antwerp has its hand cookies, and Wallonia's food culture leans more French. Belgium exports beer, chocolate, endives (they were perfected in Belgium), and increasingly artisanal products. The cuisine deserves recognition as distinct from French—more generous portions, more beer in cooking, less rigid about rules, and capable of the same technical excellence while being more approachable and fun.`,
    issues: [
      'Frites: double-fried in beef fat, served with rich mayonnaise',
      'Chocolate pralines world-famous: Neuhaus, Godiva, Marcolini',
      'UNESCO-listed beer culture: Trappist ales, lambics, strong ales',
      "Michelin stars per capita among world's highest",
      'Regional dishes: waterzooi in Ghent, carbonnade flamande'
    ],
    topStories: []
  }
];

async function main() {
  console.log('🍳 Starting FOOD category insertion for ALL COUNTRIES');
  console.log(`📊 Total countries: ${foodData.length}`);
  console.log('='.repeat(80));

  let successCount = 0;
  let errorCount = 0;

  for (const data of foodData) {
    try {
      console.log(`\n📍 Processing: ${data.name}`);

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: data.name,
            type: 'country',
            category: 'food',
          },
        },
        update: {
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify(data.topStories),
          storyCount: data.topStories.length,
          updatedAt: new Date(),
        },
        create: {
          name: data.name,
          type: 'country',
          country: data.name,
          lat: data.lat,
          lng: data.lng,
          category: 'food',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify(data.topStories),
          storyCount: data.topStories.length,
        },
      });

      console.log(`✅ Saved ${data.name} - ${data.summary.length} characters`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error saving ${data.name}:`, error);
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('✅ FOOD category insertion complete!');
  console.log(`📊 Success: ${successCount} | Errors: ${errorCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
