import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface FoodWriteup {
  name: string
  lat: number
  lng: number
  summary: string
}

const FOOD_WRITEUPS: FoodWriteup[] = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `Afghan cuisine is a masterclass in making humble ingredients transcendent—a necessity born from centuries of mountain living and Silk Road crossroads. This is food that survived empires and invasions, absorbing Persian refinement, Indian spice traditions, and Central Asian techniques while maintaining distinctly Afghan soul. At its heart sits rice, but not just any rice: Afghan cooks elevate it to art form through patience and layering that would make any Persian grandmother nod in approval.

Kabuli pulao is the national dish and for good reason. This isn't simple pilaf—it's a construction project. Long-grain basmati rice, steamed to individual grain perfection, gets crowned with caramelized carrots, raisins, and almonds, built on a foundation of tender lamb or chicken. The technique involves parboiling the rice, then steaming it with meat stock until it achieves that crucial balance: fluffy but never dry, fragrant with cardamom and cumin, each grain separate yet cohesive. Served at weddings, celebrations, and whenever honor demands excellence.

But daily Afghan food tells different stories. Mantu—steamed dumplings filled with spiced ground meat and onions, topped with garlicky yogurt and a meaty lentil sauce—showcases the country's position between Chinese and Turkish dumpling traditions. Ashak, similar but filled with leeks, gets the same yogurt treatment. Kormas—not the cream-heavy versions you know from Indian restaurants, but lighter, tomato-based stews—simmer with lamb, chicken, or vegetables. The bread culture is serious: naan-e-afghani, baked in tandoor ovens, creates the base for every meal, its blistered surface perfect for scooping up stews.

Street food means kebabs—ground meat kebabs (seekh), lamb tikka, and chapli kebabs from Peshawar (technically Pakistan but beloved in Afghanistan) flattened and spiced with tomatoes and peppers. Ashak pazi sold from carts, qabili eaten standing up at the bazaar. The bazaars themselves, particularly Kabul's Mandawi and Herat's old city markets, sell everything from saffron to dried mulberries, pomegranates to fresh herbs. The scent of freshly baked bread mixes with roasting meat and the sweetness of halwa.

High-end dining doesn't really exist in Afghanistan's current state, though before the decades of war, Kabul had sophisticated restaurants serving Afghan cuisine with refinement. Now, the best food comes from homes and simple restaurants where technique hasn't been compromised by conflict.

Afghanistan's agricultural backbone is impressive despite constant disruption. The pomegranates from Kandahar are legendary—sweet-tart juice bursting from ruby seeds. Afghan melons, particularly from Balkh, have been prized for centuries. The country produces excellent grapes, apricots, and almonds. Saffron cultivation has grown in recent years, with Herat Province producing some of the world's finest. Wheat, of course, is fundamental—bread is life here.

Food traditions center on hospitality that can feel overwhelming. Refusing food insults the host. Tea—green tea in the north, black in the south—accompanies every interaction, poured from height into small cups, sweetened with sugar cubes held between teeth. The dastarkhan (tablecloth spread on the floor) turns meals into communal affairs where hierarchy matters: honored guests sit furthest from the door, hosts serve personally.

Afghan cuisine is evolving under unimaginable pressure. War has disrupted agricultural systems, scattered families, and made simple cooking sometimes impossible. Yet the cuisine persists, carried by refugees to diaspora communities in Europe, America, and beyond, where Afghan restaurants become cultural anchors. The food's resilience mirrors the people's—adapting without losing essence, maintaining tradition despite chaos, proving that some things survive even when everything else falls apart.`
  },
  {
    name: 'Albania',
    lat: 41.1533,
    lng: 20.1683,
    summary: `Albanian cuisine has been hiding in plain sight, overshadowed by Greek and Italian neighbors who share ingredients but not the specific magic Albania works with them. This is Mediterranean food with Balkan soul, Ottoman technique, and a healthy dose of isolation that preserved traditions other countries modernized out of existence. The food here is earnest, intensely local, and completely unpretentious—which is exactly why it works.

Start with tavë kosi, the national dish that embodies Albanian cooking philosophy: simple ingredients, careful technique, profound results. It's baked lamb and rice in a yogurt sauce that curdles intentionally during baking, creating a tangy, creamy crust that browns beautifully. The yogurt must be Albanian—thick, slightly sour, made from sheep's milk. Everything else is secondary to getting that yogurt right. Serve it with crusty bread for soaking up every drop.

But Albania's real genius is in its byrek game. Every Balkan country claims byrek/börek superiority, but Albania's version—flaky phyllo layered with spinach and cheese, or meat, or leeks, or wild greens—achieves textural perfection. The best come from family bakeries where grandmothers still make the phyllo by hand, stretching it impossibly thin. Eat byrek fresh from the oven with dhallë (buttermilk) for the complete experience.

Coastal Albania leans Mediterranean: grilled fish, octopus salad, mussels cultivated in Butrint lagoon. The Adriatic and Ionian provide sea bass, bream, and red mullet that gets the simplest treatment—olive oil, lemon, wild herbs. Inland, particularly in the mountains, the cuisine turns heartier. Fergësë from Tirana combines peppers, tomatoes, and cheese (or liver, depending on the version) into a baked dish that's pure comfort. Qofte (meatballs) and qebapa (grilled minced meat) show Ottoman influence, while pite (savory pies) vary by region and season.

Street food means byrek grabbed on morning commutes, roasted corn in summer, and chestnuts in winter. Tirana's Pazari i Ri (New Bazaar) and Berat's market offer produce, cheese, and meat, but also prepared foods—olives cured in a dozen ways, honey from mountain hives, raki (grape brandy) sold from unmarked bottles.

Albania doesn't have Michelin stars or internationally recognized chefs—yet. But Tirana's restaurant scene has exploded in the past decade. Mullixhiu focuses on Albanian ingredients and traditional techniques with modern presentation. Oda offers traditional food in a beautiful Ottoman house setting. The wine bars showcase Albanian wines that are finally getting the attention they deserve.

Agriculture drives Albanian food's authenticity. The country produces exceptional olive oil, particularly from the south. Tomatoes taste like tomatoes should—sweet, acidic, alive. Fresh cheese, especially djathë i bardhë (white cheese similar to feta), comes from sheep and goats grazing mountain meadows. Figs, pomegranates, persimmons—whatever grows gets used immediately at peak ripeness.

Food traditions here reflect Ottoman and pre-Ottoman layers. Fasting for religious reasons (both Christian and Muslim) means many traditional dishes are naturally vegetarian or vegan. Summer means preserves—every family puts up ajvar (pepper spread), turshi (pickled vegetables), and tomato sauce for winter. Coffee culture is Turkish style: strong, unfiltered, drunk slowly while socializing.

Albanian cuisine is having a moment of recognition, driven by diaspora chefs, tourism growth, and a generation proud to reclaim traditions communism tried to standardize. The food has always been good; the world is just catching up. What makes it special isn't innovation but integrity—cooking that's true to place, season, and history, proving that the best cuisine doesn't need validation from critics. It just needs to feed people well.`
  },
  {
    name: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    summary: `Algerian cuisine is North African food at its most complex—Arab, Berber, French, Ottoman, and Spanish influences layered over centuries into something distinctly Algerian. This is a cuisine of extremes: the Mediterranean coast's fish and produce abundance meets the Sahara's date palms and preserved ingredients. French colonialism left baguettes and patisserie culture while barely touching the home cooking that defines Algerian tables. The result is food that moves between refinement and rusticity, between couscous that takes hours and street food devoured in minutes.

Couscous is Algeria's soul food, declared Intangible Cultural Heritage by UNESCO in 2020 (shared with neighboring countries, causing predictable arguments about who does it best). But Algerian couscous has its own character. Every Friday, families gather for couscous prepared in couscoussiers, the hand-rolled semolina steamed multiple times above a bubbling stew of lamb or chicken, chickpeas, vegetables, and complex spice blends. The grains must be light, each separate, never gummy—this requires technique passed down through generations. Regional variations abound: couscous with fish on the coast, with dried meat in the desert, with wild herbs in Kabylie.

Chakchouka, while popular across North Africa, might be Algeria's most influential export. Eggs poached in a spicy tomato and pepper sauce, seasoned with cumin and paprika, finished with fresh herbs. Served sizzling in a clay tagine with bread for dipping. Every family has their version—some add merguez sausage, others keep it vegetarian. This is breakfast, lunch, or dinner depending on need.

But start any discussion of Algerian food with bread. Khobz eddar (house bread), kesra (semolina flatbread), and the French baguette that's been thoroughly Algerianized all serve as utensils and vehicles. Algerians eat with bread, using it to scoop up stews, grab meat, collect sauce. The texture matters—slightly chewy, sturdy enough to hold weight, with enough character to contribute flavor.

Algiers' street food scene centers on mahjouba (crêpes folded with spiced tomato and pepper paste), bourek (fried pastry tubes filled with meat or vegetables), and merguez sandwiches. The capital's Casbah markets sell spices in impossible color gradients, fresh dates, and seasonal produce. Oran on the coast adds seafood to the mix—fresh sardines grilled by the dozen, served with charmoula sauce bright with cilantro and preserved lemon.

Fine dining in Algeria is limited but growing. Algiers has restaurants serving elevated Algerian cuisine with French technique and plating. But the best food still comes from homes and simple neighborhood restaurants where techniques haven't been diluted by commercialization.

Algerian agriculture reflects geographic diversity. The Tell Atlas region produces wheat, citrus, and vegetables. The Sahara provides dates—Deglet Nour dates from Biskra are prized worldwide, translucent and honey-sweet. Olives and olive oil from Kabylie compete with any Mediterranean production. Saffron cultivation in the Hauts Plateaux creates another export crop. Wine production, established under French rule, continues despite religious tensions—Algerian wine was historically excellent, and recent quality improvements suggest potential renaissance.

Food traditions center on hospitality and season. Ramadan brings night markets with special sweets—qalb el louz (almond paste shaped like hearts), makroud (date-filled semolina cookies), zlabia (fried dough soaked in honey syrup). Wedding feasts can stretch for days, with couscous, whole roasted lamb, and endless pastries. Mint tea—poured from height to create foam, sweetened generously—punctuates every social interaction.

Algerian cuisine deserves more international attention than it receives. Political isolation and tourism difficulties mean few outsiders experience this food in its proper context. Diaspora communities in France maintain traditions, but the full spectrum of Algerian cooking—from Berber mountain dishes to Saharan preserved meats to coastal seafood—remains largely unknown beyond North Africa. That's both a shame and a kind of preservation, keeping these traditions alive without the pressure to perform for foreign expectations.`
  },
  {
    name: 'Angola',
    lat: -11.2027,
    lng: 17.8739,
    summary: `Angolan cuisine reflects its Portuguese colonial history while remaining firmly African at its core—this is food born from Atlantic trade routes, tropical abundance, and centuries of blending that created something unique in the Portuguese-speaking world. The cuisine shares techniques with Brazil and Portugal but uses distinctly Angolan ingredients and sensibilities. Palm oil, cassava, plantains, and seafood create the foundation for a food culture that's both comforting and vibrant.

Muamba de galinha is the national dish, and it's a revelation if you've never encountered it. Chicken simmered in a sauce built on palm oil (dendê), garlic, okra, and gindungo (Angolan chili peppers that pack serious heat). The palm oil gives the sauce its characteristic orange-red color and rich, earthy flavor. Served over funge (or funje)—a stiff porridge made from cassava flour that's Angola's staple starch. You eat funge with your hands, rolling it into balls and using it to scoop up the muamba's sauce. The technique is specific: smooth, elastic, dense but not gluey.

Calulu, another signature dish, combines dried fish or fresh fish with vegetables—sweet potato leaves, okra, onions, tomatoes—in palm oil with a touch of vinegar for brightness. Sometimes it includes smoked fish for depth. The flavor profile is complex: smoky, slightly acidic, rich from the oil, herbal from fresh greens. Every family has their version, and regional variations across Angola's provinces create endless debates about authenticity.

Street food in Luanda means grilled fish at waterfront stalls—fresh catch from the Atlantic, scaled and gutted right in front of you, grilled over charcoal, served with chili sauce. Moamba de ginguba (chicken in peanut sauce) from roadside stands. Fresh sugarcane juice squeezed while you wait. The Mercado do Roque Santeiro (before recent changes) was Africa's largest open-air market, selling everything from produce to live chickens.

Angolan cuisine's Portuguese influence appears in pãozinho (bread rolls) served with everything, bacalhau (salted cod) dishes that mirror Portuguese versions, and pastéis (fried pastries). But Angola transformed these imports: the bread gets dipped in muamba sauce, the bacalhau cooks with palm oil and African spices, and the pastéis fill with Angolan fillings.

Luanda's restaurant scene caters primarily to oil industry expats, with prices to match. A few restaurants showcase elevated Angolan cuisine—Lookal Market focuses on local ingredients with modern technique. But most authentic food comes from family restaurants and home kitchens where women (predominantly) maintain traditional cooking methods.

Angola's agricultural sector is rebuilding after civil war devastation. Coffee was once a major export, and production is recovering—Angolan coffee is returning to quality levels that once competed with Brazil. The country grows cassava, corn, and sweet potatoes as staples. Palm oil production centers in the north. The coastal waters provide abundant fish—grouper, tuna, mackerel—though overfishing is becoming a concern. The interior has potential for livestock, currently underdeveloped.

Food traditions reflect both African and Portuguese patterns. Christmas means eating well—roasted pork, special sweets, and imported Portuguese delicacies for those who can afford them. Daily meals traditionally center on a large afternoon meal, with lighter breakfasts and dinners. Sharing food is fundamental—plates get passed, serving yourself without offering to others is rude, and eating alone is unusual.

Angolan cuisine outside Angola exists primarily in Portugal, where a significant Angolan diaspora maintains traditions. Lisbon has excellent Angolan restaurants serving muamba and calulu to homesick immigrants and curious Portuguese. But the cuisine hasn't achieved the international recognition of Brazilian or even Mozambican food, partly due to Angola's isolation during the civil war years.

The food itself is deeply satisfying: rich but balanced, spicy without being painful, complex in flavor while remaining approachable. It's cuisine that nourished people through decades of conflict, that adapts ingredients without losing identity, and that deserves far more attention than it receives. Angola's food tells stories of resilience, adaptation, and the fundamental human need to create delicious things even—especially—in difficult circumstances.`
  },
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `Argentine cuisine is beef and wine, yes, but reducing it to steak and Malbec misses the complexity of a food culture shaped by massive Italian and Spanish immigration, indigenous ingredients, and a landscape that stretches from subtropical north to sub-Antarctic south. This is a country that takes food seriously without taking itself seriously—where the parrilla (grill) is a social institution and dinner at 10 PM is considered early.

Let's start with asado, because you can't understand Argentina without understanding this. It's not just grilled meat—it's a ritual, a gathering, a philosophy. The asador (grill master) commands respect earned through years of tending wood fires and understanding meat. The cuts are specific: tira de asado (short ribs), vacío (flank steak), chorizo (sausage), morcilla (blood sausage), mollejas (sweetbreads), and rinones (kidneys). Everything goes on the parilla, positioned carefully according to heat needs. The fire is wood, never charcoal or gas—Argentines will fight you on this. Chimichurri sauce—parsley, garlic, oregano, oil, vinegar—accompanies everything. Hours pass, wine flows, and the eating happens in stages as different cuts finish.

Buenos Aires is where Italian immigration created Río de la Plata cuisine. Pizza and empanadas dominate street food—but Argentine pizza is its own thing, thick-crusted and heavy on cheese, often eaten standing at a counter with a glass of moscato. Empanadas vary by province: tucumanas are small and spicy, cordobesas are sweet, salteñas are juicier. Milanesas (breaded, fried meat cutlets) are everywhere, often massive, served as sandwiches or with papas fritas.

But look beyond beef and you find regional diversity. The northwest around Salta and Jujuy shares Andean cuisine with Bolivia—locro (hearty corn and meat stew), humitas (corn tamales), empanadas filled with spiced meat. Patagonia adds lamb, wild boar, and trout. The coast brings seafood largely ignored by the beef-obsessed interior. Mendoza produces 70% of Argentina's wine and pairs it with sophisticated restaurant culture that rivals any wine region globally.

Buenos Aires's restaurant scene has exploded in quality and creativity over the past two decades. Don Julio in Palermo is consistently ranked among the world's best steakhouses, but the real excitement is in chefs elevating Argentine ingredients with modern technique. Tegui, Aramburu, and Proper showcase new Argentine cuisine without abandoning tradition. Closed-door restaurants (puertas cerradas) offer intimate dining in residential settings.

Argentine agriculture is world-class. The pampas produce some of earth's best beef—grass-fed cattle on endless grasslands create beef with distinct flavor, leaner than US grain-fed but more flavorful. Malbec transformed from a French reject to Argentina's signature grape, thriving in Mendoza's high-altitude vineyards. Torrontés from Salta produces aromatic white wines. The country exports wheat, corn, soybeans, and wine to the world.

Dulce de leche is Argentina's other national obsession—milk caramelized slowly until spreadable, used in everything from alfajores (cookie sandwiches) to ice cream to eaten by the spoonful. Heladerías (ice cream shops) take gelato technique and Argentine-ize it with dulce de leche, mango, or mate flavors.

Food traditions center on social eating. Mate—the herbal tea consumed from a gourd through a metal straw—is a social glue, shared among friends and colleagues throughout the day. Merienda (afternoon tea) means medias lunas (croissants) or facturas (pastries) around 5 PM. Sunday asado with family is sacred. Restaurants don't fill until 9 PM at earliest; dining at midnight is common.

Argentine cuisine is evolving while maintaining its meat-centric identity. Vegetarianism is growing, particularly in Buenos Aires, challenging traditional notions. Young chefs are exploring pre-Hispanic ingredients and techniques. Economic volatility means restaurant scenes boom and crash with currency fluctuations.

What makes Argentine food special isn't technical complexity—it's confidence. Confidence that excellent beef doesn't need much besides salt and fire. Confidence that wine and food and conversation are the point of existence. Confidence that eating well is a fundamental right, not a luxury. This is food culture as lifestyle, where quality matters more than innovation, where tradition evolves without apology, and where the meal itself is never just about the food.`
  },
  {
    name: 'Armenia',
    lat: 40.0691,
    lng: 45.0382,
    summary: `Armenian cuisine is one of the world's oldest, with techniques and dishes documented back 2,500 years, and it shows. This is food that survived empires, genocides, and diaspora by being fundamental to Armenian identity—you can scatter a people, but their food travels with them. The cuisine exists at the intersection of Mediterranean, Middle Eastern, and Eastern European influences, but it's distinctly Armenian: herb-forward, bread-obsessed, and engineered for hospitality that borders on aggressive.

Start with lavash, the flatbread that UNESCO designated Intangible Cultural Heritage. Watching lavash-making is hypnotic: dough stretched thin, slapped against the walls of a tonir (underground clay oven), then peeled off blistered and chewy. Fresh lavash is extraordinary—slightly charred, pliable, perfect for wrapping cheese and herbs or scooping up stews. Dried lavash keeps for months and gets reconstituted with water. Every meal involves lavash; it's utensil, vessel, and main character.

Khorovats (Armenian barbecue) rivals any global grilling tradition. Pork, lamb, or chicken gets marinated simply—perhaps just salt, pepper, and time—then grilled over fruitwood until charred outside and juicy within. Served with grilled vegetables, fresh herbs, and lavash. No sauce needed; quality meat and fire do the work. Georgians will argue about whose kebabs are better, but Armenians know.

Dolma exists across the Middle East and Caucasus, but Armenia claims ancient ownership. Grape leaves wrapped around spiced meat and rice, cooked until tender, served with matsoni (Armenian yogurt) mixed with garlic. But Armenians stuff everything: peppers, tomatoes, eggplants, even cabbage leaves. Summer brings tolma (with "t" distinguishing the meat-filled version), while winter versions use preserved vegetables and dried meat.

Harissa isn't the North African chili paste—Armenian harissa is a porridge of wheat and meat, cooked for hours until the wheat dissolves and the meat shreds, creating a savory, stick-to-your-ribs dish served with butter. It's ritual food, particularly for Easter, and requires patience that modern cooking rarely demands. Every grandmother has the definitive version.

Yerevan's restaurant scene has modernized rapidly. The Cascade complex offers hip cafes and bars serving modern Armenian cuisine. Sherep Restaurant focuses on regional dishes from Artsakh. Dolmama serves upscale Armenian food in a beautiful setting. But the best food remains in home kitchens, where women (still predominantly) make everything from scratch.

Armenian markets overflow with produce—pomegranates so red they look fake, apricots sweet and tangy, vegetables and herbs piled in stunning arrays. The Vernissage market in Yerevan sells dried fruits, nuts, and churchkhela (walnut strings dipped in grape must, creating candy that resembles candles).

Agriculture is central to Armenian identity. The country grows exceptional apricots—the fruit appears on the national symbol. Grapes thrive in the Areni region, where winemaking dates back 6,000 years, evidenced by the world's oldest known winery discovered in a cave. Modern Armenian wine is having a renaissance, with ancient indigenous grapes like Areni and Voskehat producing wines that compete internationally. Cognac production, started under the Russian Empire, continues—Armenian brandy is excellent, less known globally than it deserves.

Food traditions reflect Christian and pre-Christian layers. Easter means elaborate feasts with colored eggs, sweet bread, and harissa. Christmas on January 6 brings fish and rice dishes. Every gathering involves endless dishes—Armenians pride themselves on abundance, and refusing food insults the host. Coffee is Turkish-style (don't call it that in Armenia—it's Armenian or Caucasian coffee), thick and sweet, often with fortunes read from the grounds.

The Armenian diaspora—largest in Los Angeles, also significant in France, Lebanon, and Russia—maintains food traditions fanatically. Glendale, California, has Armenian bakeries, restaurants, and markets rivaling anything in Yerevan. The food becomes identity marker, connecting generations to a homeland many have never seen.

Armenian cuisine's strength is its foundation: quality ingredients treated with respect, techniques honed over millennia, and food's role as cultural glue. It's not fusion or trendy, doesn't chase Michelin stars or Instagram moments. It's just extraordinarily good food that has sustained a people through unimaginable hardship, maintained by a culture that understands food isn't just fuel—it's history, identity, and defiance. Every meal says "we're still here," and that's powerful.`
  },
  {
    name: 'Australia',
    lat: -25.2744,
    lng: 133.7751,
    summary: `Australian cuisine spent decades suffering from a cultural cringe—British colonial food with inferior ingredients, defined by meat pies and Vegemite. Then something shifted. Immigration from Asia, the Mediterranean, and the Middle East, combined with a generation of chefs who stopped apologizing for not being European, created what's now called "Modern Australian" cuisine. It's eclectic, ingredient-focused, and increasingly confident, built on exceptional produce, indigenous ingredients, and a willingness to blend influences without getting precious about "authenticity."

Modern Australian food means Sydney harbor-side restaurants serving Morton Bay bugs (a type of lobster) with XO sauce, or kangaroo tartare with native pepperberries. It's Melbourne laneways hiding Vietnamese pho shops next to Italian espresso bars next to Sri Lankan hoppers specialists. This country absorbed global food cultures and synthesized them into something distinctly Australian—not fusion in the dated sense, but genuine integration where a chef's Chinese-Malaysian background and French training and Australian ingredients all inform the same dish.

But let's talk about the indigenous ingredient revolution, because this matters. For 65,000 years, Aboriginal Australians developed sophisticated food systems using plants and animals most European settlers ignored or couldn't identify. Native ingredients—wattleseed, finger lime, Kakadu plum, lemon myrtle, bush tomato—are finally appearing on high-end menus. Kangaroo and emu, lean game meats, are moving from novelty to normality. Barramundi, mud crab, and Moreton Bay bugs represent distinctly Australian seafood now featured proudly.

Melbourne is Australia's food capital, and that's not just chauvinism. The city's cafe culture is world-class—flat whites (yes, Australia invented them) and avocado toast executed with precision. The restaurant scene spans every cuisine, with particularly excellent Vietnamese, Greek, and Italian communities. Lygon Street's Italian heritage, Victoria Street Richmond's Vietnamese enclave, and suburban Chinese restaurants in Box Hill or Glen Waverley rival anything in their origin countries.

Sydney counters with harbor views and seafood. The Sydney Fish Market is the southern hemisphere's largest seafood market. Restaurants like Quay, Bennelong, and Aria deliver special-occasion dining with Opera House views. But Sydney's real strength is neighborhood restaurants—Thai in Newtown, Lebanese in Punchbowl, Korean in Strathfield—where immigrant communities maintain authentic food cultures.

Beyond the big cities, regional Australia is developing food identities. Tasmania's cool climate produces excellent wine, cheese, and oysters—Hobart's restaurant scene punches above its size. Adelaide's Central Market offers outstanding produce, while the Barossa Valley combines German heritage with world-class wine. Queensland's tropical north provides mangoes, barramundi, and prawn, while the Gold Coast's multicultural population brings global cuisines.

Australian fine dining now commands international respect. Attica in Melbourne consistently ranks among the world's best, focusing on Australian ingredients and indigenous flavors. Brae in regional Victoria embraces hyperlocal cooking. Quay in Sydney delivers technically brilliant food with those harbor views. These restaurants prove Australian cuisine exists beyond steaks and seafood.

Agriculture drives Australia's food quality. Beef from grass-fed cattle, lamb from vast stations, wheat from the interior—Australia exports food globally. Wine regions across the country produce excellent Shiraz, Cabernet, and increasingly, lighter Mediterranean varieties suited to changing climates. Organic and biodynamic farming is growing, supported by affluent urban consumers.

Food traditions are being invented in real-time. The Sunday roast is British heritage, but increasingly it's yum cha in Chinese restaurants. Christmas in summer means seafood and salads, not heavy roasts. The sausage sizzle (grilled sausages on white bread with onions at hardware stores and polling places) is peak Australian pragmatism. Meat pies remain beloved despite being objectively mediocre—they're tradition more than cuisine.

Coffee culture deserves specific mention—Australians take coffee seriously enough that Starbucks mostly failed here. Independent roasters, skilled baristas, and quality-obsessed cafes define the morning ritual. Third-wave coffee essentially is Australian coffee culture exported.

Australian food is still evolving, still figuring out what it means beyond "put good ingredients on a plate." Indigenous ingredients are being reclaimed thoughtfully (mostly—there's always risk of appropriation). Sustainability matters increasingly, with nose-to-tail eating, reduced food waste, and ethical sourcing becoming expectations rather than trends.

What Australian cuisine has become is confident without being cocky, diverse without losing coherence, and ingredient-focused without being boring. It's food that reflects a multicultural nation still processing its colonial history while creating something genuinely new. At its best, Australian food is exciting, generous, and very good—and that's enough.`
  },
  {
    name: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    summary: `Austrian cuisine is comfort food elevated to art form, a beautiful contradiction where imperial Viennese refinement meets Alpine mountain heartiness. This is food that sustained an empire while remaining fundamentally unpretentious—yes to white-gloved service at Demel, but also yes to a massive schnitzel hanging off the plate at a neighborhood gasthof. The cuisine reflects Austria's position as the German-speaking world's southern anchor, absorbing Hungarian, Italian, and Balkan influences while maintaining distinctly Austrian identity.

Wiener schnitzel is the undisputed national dish, and Austrians take it seriously. It's veal (pork substitutes exist but are properly called "schnitzel Wiener art"), pounded thin, breaded carefully—flour, egg, breadcrumbs—then fried in clarified butter or lard until golden and puffy. The coating should separate slightly from the meat, creating texture contrast. Served traditionally with potato salad, lingonberry jam, and a lemon wedge. Figlmüller in Vienna serves schnitzels the size of dinner plates, but countless gasthofs execute this perfectly without fanfare.

But Austrian food is more than schnitzel. Tafelspitz, boiled beef with root vegetables and horseradish, was Emperor Franz Joseph's favorite and remains a Viennese Sunday lunch staple. Goulash arrived from Hungary and became thoroughly Austrian, thicker and less paprika-heavy than the original. Käsespätzle brings spätzle (egg noodles) with melted cheese and crispy onions, perfect for cold mountain nights. Knödel (dumplings) come in endless varieties—bread, potato, liver, plum—serving as sides or main dishes.

Vienna's cafe culture is UNESCO-protected for good reason. Kaffeehäuser aren't just coffee shops—they're institutions where time moves differently. Sachertorte at Hotel Sacher or Café Sacher (slightly different recipes, long-standing rivalry) delivers chocolate cake with apricot jam and chocolate glaze, served with unsweetened whipped cream. Apfelstrudel with vanilla sauce. Kaiserschmarrn, shredded pancakes with plum compote. Melange (similar to cappuccino) or Einspänner (black coffee with whipped cream in a glass) to drink. The cakes are good, but the experience is about sitting, reading newspapers, and taking up space without guilt.

The Naschmarkt in Vienna offers produce, spices, and prepared foods reflecting Vienna's multicultural reality—Turkish, Persian, Italian, and traditional Austrian vendors creating a sensory overload. Farmers markets throughout Austria provide seasonal produce, cheese, and charcuterie.

Austrian fine dining has come into its own. Steirereck in Vienna's Stadtpark consistently ranks among Europe's best, serving modern Austrian cuisine with foraged ingredients and technical brilliance. Silvio Nickol at Palais Coburg holds two Michelin stars for avant-garde interpretations. But Austria's strength is the comfortable middle—quality restaurants throughout the country serving excellent traditional food without pretension.

Austrian agriculture produces outstanding raw materials. The Wachau Valley grows apricots so good they have protected status. Alpine dairies make cheese rivaling Swiss production—Bergkäse, Vorarlberger Bergkäse, and Tyrolean Graukäse each reflect specific mountain terroirs. Pumpkin seed oil from Styria is dark, nutty, and addictive on salads. Wine regions along the Danube, in Burgenland, and Styria produce excellent Grüner Veltliner and Riesling whites, plus increasingly impressive reds.

Bread deserves specific attention—Austrian bakeries offer countless varieties, from Semmel (crusty rolls) to dark rye breads to sweet breads filled with poppy seeds or nuts. The Schnittlauchbrot (bread with chives) and Bauernbrot (farmer's bread) reflect regional traditions.

Food traditions center on seasons and celebrations. Fasching (Carnival) means Faschingskrapfen, jelly-filled donuts. Christmas brings Christkindlmärkte (Christmas markets) selling roasted chestnuts, Glühwein (mulled wine), and Lebkuchen (gingerbread). Martinigans (St. Martin's goose) on November 11. Wild game in autumn—venison, wild boar, pheasant appear on menus when seasons dictate.

Austrian cuisine isn't trying to be innovative or impress—it's trying to be good in a reliable, satisfying way. Portions are generous, quality is non-negotiable, and the cooking respects tradition without becoming fossilized. There's room for creativity (Steirereck proves this), but the baseline is high-quality traditional food executed properly.

The challenge for Austrian food is avoiding complacency. It's easy to coast on schnitzel and strudel, serving tourists what they expect. The best Austrian restaurants and chefs push boundaries while respecting foundations—using heritage grains, reviving forgotten dishes, treating vegetables as seriously as meat. Austrian cuisine has the ingredients, techniques, and cultural foundation to remain relevant. It just needs to remember that tradition can evolve without disappearing.`
  },
  {
    name: 'Azerbaijan',
    lat: 40.1431,
    lng: 47.5769,
    summary: `Azerbaijani cuisine occupies a delicious geographic crossroads, pulling from Persian sophistication, Turkish kebab culture, and Central Asian techniques while adding Caspian Sea flavors and local innovations. This is food where pomegranate molasses and saffron meet grilled meats, where herb-filled flatbreads emerge from tandoor ovens, and where tea is strong enough to dissolve spoons. The cuisine reflects Azerbaijan's position between Europe and Asia, creating something familiar to anyone who knows Turkish or Iranian food but distinctly Azeri in execution.

Plov (pilaf) is Azerbaijan's culinary crown jewel, and the country takes it as seriously as Italians take risotto. The rice must be basmati or similar long-grain, each grain separate and fluffy. The bottom rice forms a crispy crust called gazmag—achieving perfect gazmag is a cook's badge of honor. Plovs vary by occasion and season: shah plov with dried fruits and nuts, toyuq ploviu with chicken, sabzi qovurma plov with lamb and herbs. The rice typically cooks separately from the meat and toppings, then gets assembled at serving for maximum visual impact. Served with sumac on the side for tartness.

Dolma in Azerbaijan means more than stuffed grape leaves. Yarpaq dolması uses grape leaves, but Azeris stuff peppers (biber dolması), eggplants (badımjan dolması), tomatoes (pomidor dolması), and even quince (heyva dolması). The filling is rice and ground lamb with herbs—mint, dill, cilantro—and the slow cooking makes everything tender and rich. Served with yogurt mixed with garlic and sometimes fresh herbs.

Kebabs dominate Azerbaijani grilling. Lüla kebab (ground meat formed around flat skewers), tike kebab (lamb chunks), balıq kebab (fish from the Caspian). Everything grills over charcoal, served with flatbread (lavaş or tandir bread), grilled tomatoes and peppers, and raw onions. No sauce needed—the meat's quality and the char provide all the flavor.

Baku's restaurant scene reflects oil wealth and cultural ambition. Restaurants like Firuze serve upscale Azerbaijani cuisine in beautiful settings. The Old City contains courtyard restaurants offering traditional dishes in historic buildings. But the best experiences often come from simpler places—çayxana (tea houses) serving kebabs and plov, bakeries selling fresh gutab (thin stuffed flatbreads with herbs or meat).

Street food means gutab hot off the saj (griddle), lavangi (stuffed chicken or fish), and fresh pomegranate juice pressed while you wait. The Taza Bazaar in Baku overwhelms senses with produce, spices, dried fruits, and fresh herbs piled in artistic arrangements. Narsharab (pomegranate molasses) in jars, saffron from local harvests, and walnuts by the kilo.

Azerbaijani cuisine shines in its slow-cooked stews. Piti, a soup of lamb, chickpeas, and potatoes cooked in individual clay pots, gets eaten in stages—first the broth, then the solid ingredients mashed together. Dovga, yogurt soup with herbs and rice, serves hot in winter and cold in summer. Bozbash combines lamb, beans, potatoes, and sometimes fruit for sweet-savory complexity.

Agriculture centers on produce that loves the climate. Pomegranates grow sweet and tart, featuring in countless dishes from fesenjan-style stews to fresh juice. Saffron cultivation in the Absheron region produces high-quality threads. The Caspian provides sturgeon (though caviar production has declined), kutum (Caspian white fish), and other seafood. Tea plantations in the Lankaran region produce black tea that Azerbaijanis drink constantly—in pear-shaped glasses with jam or sugar cubes, served with pastries.

Pastries reflect Persian and Turkish influences. Pakhlava (baklava) with walnuts and honey, shekerbura (sweet pastries filled with nuts and spices), gogal (saffron-scented bread rings). Halva in Azerbaijan means rice flour halva or semolina halva, served at weddings and celebrations.

Food traditions center on hospitality that can overwhelm. Refusing food or tea insults hosts. Azerbaijani tables groan with dishes—even simple meals involve multiple courses, salads, pickles, bread, and sweets. Nowruz (Persian New Year) brings specific dishes: samani (wheat sprout pudding), plov with fish, and pakhlava arranged in precise geometric patterns.

Azerbaijani cuisine's challenge is finding identity between larger neighbors. Turkey and Iran both claim many of these dishes, and Azerbaijan's smaller size means less international recognition. But the cuisine has distinct elements—the Caspian fish, the specific herb blends, the way saffron is used, the tea culture—that mark it as uniquely Azerbaijani.

The food is deeply satisfying: rich but not heavy, spiced but not fiery, complex in flavor while remaining approachable. It's cuisine built for hospitality and abundance, where quality ingredients meet careful technique, and where the table serves as the center of social and family life. Azerbaijan's food deserves more attention than it receives, offering a window into a culture that has maintained its culinary identity despite centuries of imperial pressure.`
  },
  {
    name: 'Bangladesh',
    lat: 23.6850,
    lng: 90.3563,
    summary: `Bangladeshi cuisine swims in water—literally and figuratively. This is food shaped by rivers, delta plains, and monsoons that turn the country into a vast floodplain. Rice and fish define everything, earning Bangladesh the nickname "macher bhaat" (rice and fish) country. The cuisine shares much with Bengali Indian food but has distinct identity: more fish, more mustard oil, different regional traditions, and cooking shaped by Islamic dietary laws alongside Hindu influences.

Start with ilish (hilsa), the national fish that Bangladeshis treat with religious reverence. This silvery fish spawns in rivers during monsoon season, and its arrival triggers celebrations. Ilish has countless bones and oily flesh that requires expertise to eat and prepare. Ilish bhapa (steamed with mustard paste), ilish paturi (wrapped in banana leaf), ilish bhorta (mashed with chilies and mustard oil)—each preparation showcases different aspects. The fish is expensive, so eating ilish demonstrates status and celebration.

But Bangladesh has incredible fish diversity beyond ilish: rui (rohu), katla (catla), pangas, tilapia—freshwater fish that feature in every meal. Curries using these fish, cooked with onions, garlic, ginger, turmeric, and chilies in mustard oil until the fish absorbs the spices. Shutki (dried fish) provides intense umami and protein storage—fermented, pungent, and absolutely fundamental to rural Bangladeshi cooking.

Rice accompanies everything—not just any rice, but specific varieties. Bangladeshis eat white rice daily, but special occasions mean pulao (pilaf with meat and spices) or khichuri (rice and lentils cooked together, comfort food for rainy days). Panta bhat—fermented rice soaked overnight—is traditional breakfast served with fried fish, onions, and chilies on Pohela Boishakh (Bengali New Year).

Dhaka's street food scene delivers intensity. Fuchka (crispy shells filled with spicy tamarind water) rivals any chaat in India. Chotpoti (chickpea curry with boiled eggs and tamarind) sold from carts. Biryani—Dhaka's version is distinct, using short-grain rice and mustard oil, different from Hyderabadi or Lucknowi styles. Tehari, a Muslim alternative to biryani using beef instead of expensive mutton, represents working-class Dhaka.

But Bangladeshi cuisine extends beyond Dhaka. Sylhet in the northeast offers different traditions: manipuri (indigenous) influences, more use of lime and aromatic herbs. Chittagong's mezban tradition involves community feasts featuring beef (unusual in a region where goat is more common). Cox's Bazar means seafood—dried fish, fresh catches grilled with minimal spice.

Home cooking in Bangladesh centers on simplicity: a fish curry, dal (lentils), vegetable sides (shak—leafy greens—or mixed vegetables), and rice. This is daily food, nourishing and inexpensive. Mustard oil provides the base for almost everything, giving Bangladeshi food its characteristic pungent flavor. Panch phoron (five-spice blend of fenugreek, fennel, nigella, mustard, cumin) seasons many dishes.

Sweets reflect Bengal's famous mishti tradition. Roshogolla (spongy cheese balls in syrup), chomchom, sandesh—these sweets are Indian Bengali too, but Bangladeshi versions have nuanced differences. Borhani, spiced yogurt drink, accompanies biryani. Cha (tea)—strong, milky, very sweet—fuels the nation.

Agricultural reality shapes Bangladeshi cuisine. Rice paddies cover the delta, producing multiple harvests yearly. Vegetables grow abundantly during winter—cauliflower, cabbage, eggplant, bitter gourd. Ponds are managed for fish farming—aquaculture is crucial protein source. Mangoes in summer are anticipated with joy—Bangladeshi mangoes, particularly Himsagar and Langra varieties, rival any in South Asia.

Food traditions reflect religious and cultural layers. Muslims avoid pork and worship beef; Hindus avoid beef and worship certain fish. Ramadan brings evening iftars with dates, chickpeas, fritters, and special sweet drinks. Weddings mean elaborate feasts with multiple meat curries, pulao, and enormous quantities of mishti.

Bangladeshi cuisine outside Bangladesh exists primarily in UK Bengali communities—London's Brick Lane is famous, though the restaurants often serve Anglicized "Indian" food rather than authentic Bangladeshi home cooking. The gap between restaurant food and home food is vast.

The cuisine's challenge is visibility. Indian food dominates global perception of South Asian cuisine, and Bangladeshi food gets folded into "Bengali food" without distinction. Lack of tourism means few outsiders experience Bangladeshi food in its proper context—where the fish is fresh-caught that morning, the mustard oil is sharp and pungent, and the rice is fluffy perfection.

Bangladeshi food is not trying to impress—it's trying to nourish. In one of the world's most densely populated countries, where poverty is real and climate change threatens rice production, food is fundamental survival and daily pleasure. The cuisine is water-born, river-fed, monsoon-shaped, and resilient. It's food that has sustained generations through floods, cyclones, and political upheaval, proving that simplicity executed well is enough.`
  },
  {
    name: 'Belarus',
    lat: 53.7098,
    lng: 27.9534,
    summary: `Belarusian cuisine is Eastern European comfort food in its purest form—potatoes, cabbage, pork, mushrooms, and sour cream combine into dishes designed for cold winters and hard labor. This is peasant food that makes no apologies, Soviet-era cuisine that changed little when the USSR collapsed, and increasingly, a food culture trying to assert distinct identity separate from Russian and Ukrainian neighbors with whom Belarus shares many dishes. It's not refined, rarely innovative, but deeply satisfying in its straightforward approach to feeding people well.

Draniki might be the national dish, though neighboring countries call them by other names (latkes, kartoffelpuffer). These potato pancakes reach peak form in Belarus—grated potatoes mixed with onions, salt, and maybe flour, fried until crispy outside and tender inside, served with sour cream. Every family has their version, and debates rage about proper thickness, whether to squeeze all moisture from potatoes, and the ideal ratio of crispy to soft. They're breakfast, lunch, dinner, or snack depending on need.

But Belarus has other potato obsessions. Kolduni (potato dumplings stuffed with meat), babka (grated potato casserole with meat), tsybriki (hash brown-style fried potatoes), and tsibriny (potato pancakes with meat filling). The joke that Belarusians eat potatoes in every form contains truth—potatoes sustained people through famines and wars, earning permanent place at the center of the cuisine.

Beyond potatoes, Belarusian food centers on what grows in a harsh climate. Beets appear everywhere—borscht (though Russians and Ukrainians make similar claims), beet salads, beet kvass (fermented drink). Cabbage gets fermented for sauerkraut, made into soups, or stuffed for golubtsi (cabbage rolls). Mushrooms foraged from vast forests appear fresh in season and dried or pickled for winter.

Khaladnik (or khalodnik) is cold beet soup—pink, refreshing, served with cucumbers, dill, boiled eggs, and sour cream. Perfect for brief summer heat. Solyanka combines meat, vegetables, and pickles into hearty soup. Pea soup thick enough to stand a spoon in. Soup is serious business in Belarus—substantial, filling, and appearing at most meals.

Minsk's restaurant scene is developing beyond Soviet-era monotony. Restaurants like Kamyanitsa serve traditional Belarusian food in atmospheric settings—wooden interiors, ceramic dishes, and menus featuring draniki, machanka (pork stew with pancakes for dipping), and vereshchaka (meat in rich sauce). Zyamnaya Harka focuses on potato dishes elevated beyond cafeteria level. But fine dining is limited, and most eating happens at home or in simple establishments.

Markets in Belarus offer seasonal produce, preserved foods, and homemade products. The Komarovsky Market in Minsk sells everything from fresh mushrooms to homemade pickles to smoked meats. Dairy products—sour cream, tvorog (farmer's cheese), ryazhenka (fermented baked milk)—reflect Eastern European dairy traditions.

Belarusian agriculture produces potatoes (obviously), grains, sugar beets, and flax. Dairy farming is significant, producing milk, cheese, and butter. The Belovezhskaya Pushcha National Park region is known for bison—European bison meat occasionally appears on menus. Honey from forest beekeeping provides sweetener and ingredient for sbiten (hot spiced honey drink) and honey cake.

Bread is fundamental—dark rye bread with caraway, eaten with butter and salt, accompanies every meal. Salo (cured pork fat, sliced thin) is beloved, eaten on bread with vodka. The combination of rye bread, salo, pickles, and vodka represents Belarus in edible form—practical, preservable, and satisfying.

Belarusian sweets are mostly Soviet-era holdovers. Napoleon cake (layers of puff pastry and custard), Ptichye Moloko ("bird's milk" chocolate-covered soufflé), and Zefir (marshmallow-like confection). The Spartak chocolate factory in Gomel produces chocolates since 1929.

Food traditions center on Orthodox Christian holidays (though Soviet atheism interrupted these). Maslenitsa (Butter Week) means blini (thin pancakes) with every filling imaginable. Christmas Eve features twelve dishes. Easter brings kulich (sweet bread) and paskha (cheese dessert). Radunitsa, remembrance day, involves visiting cemeteries with food and vodka to honor the dead.

Belarusian cuisine struggles for recognition—too similar to Russian and Ukrainian food, too associated with Soviet blandness, and too simple to attract food tourism. The challenge is distinguishing what's specifically Belarusian versus regionally shared. Draniki appears in Polish cuisine as placki ziemniaczane, in Ukrainian as deruny. Borscht is claimed by multiple countries. Even the language for many foods is Russian rather than Belarusian.

Yet there's something honest about Belarusian food. It doesn't try to be more than it is—hearty, filling, made from what's available, optimized for cold weather and limited ingredients. The potatoes, the pork, the pickles, the sour cream—these aren't trendy or exotic, but they work. They've worked for generations of Belarusians who needed food that sustained through harsh conditions.

The cuisine's future depends partly on Belarus's political future. Increased tourism requires political opening that seems unlikely under current government. Young chefs interested in elevating Belarusian ingredients face limited audiences and resources. But the food persists in homes and simple restaurants, maintaining traditions whether anyone outside the country notices or not. That's very Belarusian—surviving regardless of external validation.`
  },
  {
    name: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    summary: `Belgian cuisine has been fighting a reputation battle for decades—dismissed as French food's less sophisticated cousin, reduced to waffles, chocolate, and fries. That's deeply unfair. Belgian food is distinctive, delicious, and reflects complex cultural identity split between Flemish and Wallonian traditions. This is food that takes its beer as seriously as France takes wine, that invented praline chocolates, and that has more Michelin stars per capita than almost anywhere in Europe. Belgium doesn't cook like France; it cooks like Belgium, and that's worth respecting on its own terms.

Start with the fries, because Belgians won't let you forget they invented them (the French dispute this violently). Belgian frites are double-fried in beef fat—once at lower temperature to cook through, then again at high heat for crispy exterior. The result is fluffy inside, crispy outside, served in paper cones with mayonnaise, andalouse sauce, or dozens of other options. Friteries (fry shops) dot Belgium, each claiming superiority. Maison Antoine in Brussels has lines regardless of weather. These aren't sides—frites are the main event.

Moules-frites (mussels and fries) is the national dish, especially in Flanders. Mussels steamed with white wine, shallots, parsley, and butter, served in the pot with fries on the side. The ritual is specific: pick up a shell, use it as pincers to extract other mussels, sop up the liquid with fries and bread. Mussels season runs September through April, and quality varies—the best come from Zeeland in Netherlands, though Belgian sources in Oostende and Yerseke compete.

But Belgian cuisine goes deep. Waterzooi, from Ghent, is a cream-based stew with chicken or fish, vegetables, and eggs, rich enough to require bread and beer for balance. Carbonnade flamande (Flemish beef stew) braises beef in Belgian beer—preferably a dark abbey ale—with onions and sometimes gingerbread for sweetness and thickness. Stoofvlees in Flemish, this is Sunday lunch food that improves with reheating.

Belgian beer culture is UNESCO-protected because Belgium produces over 1,500 beers, each with specific glassware, serving temperature, and food pairings. Trappist ales from monastery breweries (Westvleteren is the holy grail, Chimay the most accessible), lambics (spontaneously fermented, often with fruit), saisons, and strong golden ales like Duvel. Beer is ingredient, accompaniment, and cultural identity. Restaurants pair dishes with specific beers the way French pair with wine.

Brussels has exceptional restaurant scene. Comme Chez Soi holds two Michelin stars for classic Belgian-French cuisine. Le Rabassier serves truffle-focused dishes. But the best experiences often come from simpler places—brasseries serving stoemp (mashed potatoes with vegetables), boudin (blood sausage), or grey shrimp croquettes that are worth the high price.

Belgian chocolate deserves its reputation. Pralines—shells of chocolate filled with ganache, nuts, or flavored creams—were invented here in 1912. Neuhaus, Leonidas, Godiva, and countless smaller chocolatiers compete for supremacy. The chocolate is Belgian (often made from Callebaut couverture), the technique precise, and the variety overwhelming. Forget what you know from American chocolate—Belgian chocolate is higher cocoa content, less sugar, proper tempering.

Belgian waffles come in two types: Brussels waffles (lighter, rectangular) and Liège waffles (denser, with pearl sugar creating caramelized pockets). Tourist trap waffles with excessive toppings are not how Belgians eat them—Liège waffles are eaten plain, as street food or breakfast.

Agriculture in Belgium focuses on intensive production in limited space. The country grows excellent endive (chicory), asparagus, and potatoes. Cheese production includes Herve (pungent, washed-rind), Chimay (from the Trappist brewery), and Passendale. Belgian pork is quality—the country is major pork exporter.

Food traditions reflect regional splits and religious history. Speculoos (spiced cookies) appear at Saint Nicholas Day. Boterkoek (butter cake) in Flanders. Liège produces syrup from pears and apples (sirop de Liège) used in regional dishes. Fish restaurants in coastal towns like Oostende serve North Sea catches—sole, turbot, grey shrimp.

Belgian cuisine's evolution faces interesting tensions. The Flemish-Wallonian split sometimes plays out in food—Flemish identity emphasizes distinct traditions separate from French-influenced Wallonia. Young Belgian chefs are exploring local ingredients, reviving forgotten recipes, and trying to define Belgian cuisine beyond beer, chocolate, and fries.

Fine dining in Belgium is serious business. Beyond the Michelin stars in Brussels, Antwerp, and Bruges, regional restaurants maintain high standards. De Karmeliet in Bruges held three stars for years. Hertog Jan in Bruges (now closed but influential) pushed Belgian ingredients and techniques. The Flemish emphasis on quality, careful sourcing, and technique creates a strong fine dining culture.

What makes Belgian food work is its unpretentiousness paired with high standards. This is food that knows it's good without needing to prove anything. The fries are perfect because generations perfected them. The beer is world-class because brewing is taken seriously. The chocolate is exceptional because Belgian chocolatiers set standards others follow.

Belgian cuisine's challenge is fighting perceptions—too often seen as French food's poorer relative or reduced to tourist stereotypes. But anyone who has eaten waterzooi in Ghent, drunk abbey beer at a Flemish cafe, or bought pralines from a proper chocolatier knows better. Belgian food is its own thing—confident, delicious, and worth seeking out for reasons beyond waffles and fries.`
  },
  {
    name: 'Belize',
    lat: 17.1899,
    lng: -88.4976,
    summary: `Belizean cuisine reflects the country's wild cultural mix—Mayan, Creole, Garifuna, Mestizo, Mennonite, Chinese, and Lebanese influences somehow coexist in a country of just 400,000 people. This is food shaped by Caribbean coast, Central American rainforest, and the kind of cultural diversity that makes "national cuisine" a complicated concept. Rice and beans anchor everything, but how they're prepared varies dramatically by community and region. The result is delicious, if occasionally surprising.

Rice and beans is the national dish, though calling it that simplifies. This isn't just rice and beans thrown together—the beans (red kidney beans) cook with coconut milk, recado (a local spice paste similar to achiote), and sometimes meat, then mix with rice. Served with stewed chicken, potato salad, and fried plantains. Every restaurant, household, and street vendor serves some version, and Belizeans eat it multiple times weekly. It's comfort, identity, and practical nutrition.

But Belizean food is really several cuisines operating simultaneously. Creole food (Afro-Caribbean) brings boil-up (boiled eggs, fish, and ground foods like cassava and plantains), cowfoot soup, and hudut. Garifuna cuisine contributes hudut specifically—fish cooked in coconut broth with mashed plantains. Mestizo cooking (Mexican/Guatemalan influence) adds tamales, garnaches (fried tortillas with beans and pickled onions), and escabeche (onion soup with chicken).

Then there's Mennonite contributions—yes, Mennonite. German-speaking Mennonite communities produce much of Belize's dairy, poultry, and vegetables. Their influence means fresh milk, cheese, and ice cream widely available. Chinese Belizeans run restaurants serving Americanized Chinese food that somehow became Belizean—rice with beef or chicken in brown sauce, fried rice, and chow mein.

Seafood defines coastal Belizean food. Fresh lobster (in season), conch (often in fritters or ceviche), snapper, grouper, and barracuda. The lobster is Caribbean spiny lobster, smaller than Maine lobster but sweet and abundant. Grilled whole fish with rice and beans is tourist trap territory but also genuinely good when done properly. Caye Caulker and Ambergris Caye have restaurants serving fresh catches grilled or fried.

Street food means tacos (soft corn tortillas, not hard shells—served with cabbage slaw and hot sauce), salbutes (fried tortillas topped with chicken or fish), and panades (fried corn patties with beans or fish inside). Johnny cakes (fried dough) appear at breakfast, served with beans or eggs. Marie Sharp's hot sauce, made in Belize from habaneros and carrots, appears on every table—multiple heat levels, but even the mild has kick.

Belize City's markets offer produce, but much food is imported—vegetables from Guatemala and Mexico, processed goods from the US. Local produce includes mangoes, papayas, plantains, and cassava. Fresh coconuts sell roadside, hacked open with machetes for the water.

Fine dining is limited. San Pedro has upscale restaurants serving fusion cuisine to tourists and expats. Maya cuisine is being revived by places like Ka'ana Resort, featuring traditional ingredients like cacao, corn, and wild game. But most eating happens at simple restaurants, beach shacks, and home kitchens.

Agriculture in Belize is small-scale. Sugar is a major crop, along with citrus (oranges and grapefruit), bananas, and papaya. Cacao grows in southern Belize—small chocolate makers are emerging using local beans. Hot sauce production (Marie Sharp's and others) uses Belizean habaneros. Marine products dominate exports when seasons allow.

Belizean food traditions reflect British colonial history—breakfast can mean fry jacks (fried dough) with beans or eggs, influenced by British fry-ups. Gibnut (paca, a large rodent) is prized meat, famously served to Queen Elizabeth II in 1985, earning the nickname "royal rat." Wild game like deer, armadillo, and iguana appear in rural areas, though touchy legally.

The challenge for Belizean cuisine is identity. It's not exactly Caribbean, not quite Central American, not solely any of its constituent cultures. This creates delicious diversity but makes defining "Belizean food" difficult. Is Chinese Belizean food Chinese or Belizean? Are Mennonite products Belizean or separate? Does Mayan cuisine practiced by Mopan and Q'eqchi' communities get counted, or is it treated as indigenous tradition rather than national cuisine?

What works about Belizean food is its honesty. This isn't fusion cuisine trying to be clever—it's actual multicultural food where different communities maintain distinct traditions while sharing ingredients and techniques. You can eat rice and beans with Creole stew chicken, then have Garifuna hudut for dinner, buy Mennonite cheese, and finish with Chinese stir-fry, all within a day, all authentically Belizean.

The food is simple, unpretentious, and heavily coconut-influenced from Caribbean traditions. Spice levels are moderate by regional standards—hot sauce is always on the table for those who want heat. Portions are generous, prices reasonable, and the attitude laid-back. That's Belize itself: easy-going, diverse, and comfortable with contradictions that would confuse more rigid cultures. The food reflects this perfectly—a delicious mess that somehow works.`
  }
]

async function main() {
  console.log('🍽️  Starting Food & Cuisine writeup generation for Batch 1...')
  console.log(`📝 Generating ${FOOD_WRITEUPS.length} country writeups\n`)

  let successful = 0
  let failed = 0

  for (const writeup of FOOD_WRITEUPS) {
    try {
      console.log(`\n${'='.repeat(70)}`)
      console.log(`Processing: ${writeup.name}`)
      console.log('='.repeat(70))

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'food'
          }
        },
        update: {
          summary: writeup.summary,
          issues: '[]',
          topStories: '[]',
          storyCount: 0,
          updatedAt: new Date()
        },
        create: {
          name: writeup.name,
          type: 'country',
          country: writeup.name,
          lat: writeup.lat,
          lng: writeup.lng,
          category: 'food',
          summary: writeup.summary,
          issues: '[]',
          topStories: '[]',
          storyCount: 0
        }
      })

      successful++
      console.log(`✅ Successfully saved food writeup for ${writeup.name}`)
      console.log(`   Character count: ${writeup.summary.length}`)

      // Show preview
      const preview = writeup.summary.substring(0, 150)
      console.log(`   Preview: ${preview}...`)

    } catch (error) {
      failed++
      console.error(`❌ Failed to save ${writeup.name}:`, error)
    }
  }

  console.log(`\n${'='.repeat(70)}`)
  console.log('✨ FOOD BATCH 1 COMPLETE!')
  console.log('='.repeat(70))
  console.log(`   Successful: ${successful}/${FOOD_WRITEUPS.length}`)
  console.log(`   Failed: ${failed}`)
  console.log('\n📊 Countries processed:')
  FOOD_WRITEUPS.forEach(w => console.log(`   ✓ ${w.name}`))
  console.log('\n🎉 All food writeups have been saved to the database!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
