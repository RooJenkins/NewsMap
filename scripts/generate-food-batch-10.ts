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
    name: 'Pakistan',
    lat: 30.3753,
    lng: 69.3451,
    summary: `Pakistani cuisine is a masterclass in layered spicing and slow-cooked intensity, where Mughal refinement meets Punjabi abundance and Pashtun ruggedness. This is food built for hospitality, for feeding crowds, for making strangers feel like family over plates piled impossibly high. The foundational truth: nothing here is timid. Chilies, ginger, garlic, and garam masala build flavors that announce themselves boldly, yet the best Pakistani cooking achieves remarkable balance through technique refined over centuries.

Nihari is the dish that tells you everything about Pakistani food philosophy—beef or lamb shanks simmered overnight until the meat surrenders completely, creating a gravy so rich it coats your spoon. Served with naan fresh from the tandoor, brain masala on the side, and enough green chilies to make you sweat, nihari is breakfast food for people who understand that dawn demands substance. Then there's biryani, and Pakistan's versions—Karachi, Sindhi, Hyderabadi—each stake fierce regional claims. Layers of basmati rice and meat cooked in sealed pots, the bottom rice caramelizing into crispy tahdig, the top fragrant with saffron and rose water.

Street food culture thrives with particular intensity in Karachi and Lahore. Burns Road in Karachi serves seekh kebabs, nihari, and haleem to crowds until 3am. Lahore's Food Street in Gawalmandi offers balochi tikka, paya, and brain masala to students and families alike. Chapli kebab from Peshawar—minced meat patties with tomatoes, onions, and pomegranate seeds—represent Pashtun grilling traditions. Every city has its halwa puri breakfast joints, where fried bread meets chickpea curry and semolina halwa in a combination that shouldn't work but absolutely does.

Regional variations reveal Pakistan's diversity. Sindhi cuisine loves tang—imli (tamarind), lemon, and dried mango add brightness. Balochi sajji involves whole lamb marinated minimally, roasted slowly, letting the meat speak for itself. Gilgit-Baltistan in the north brings Central Asian influences: chapshuro (meat pies), harissa (wheat and meat porridge), and apricot-based dishes.

High-end dining in Pakistan means elevated home cooking rather than molecular gastronomy. Places like Café Aylanto in Lahore or Okra in Islamabad refine traditional dishes with premium ingredients and modern presentation, but the soul remains rooted in desi flavors. Pakistan has no Michelin stars—the guide doesn't operate here—but that's irrelevant to anyone who's eaten at a proper dhaba.

Agriculture defines possibilities: Punjab's wheat fields, Sindh's mangoes (Pakistani mangos rival India's best), citrus from Sargodha, dates from Balochistan. Dairy culture runs deep—lassi, yogurt, paneer, and milk-based desserts like kheer and barfi. Meat consumption is high, reflecting Islamic dietary laws and pastoral traditions.

The ritual of desi khana—home cooking—remains paramount. Rotis made fresh for each meal, rice cooked in excessive quantities, multiple curry dishes, raita to cool the palate, pickles for punch. Pakistani hospitality means insisting guests eat more even when they're uncomfortably full, then sending them home with leftovers. Food is love, literally and without metaphor.`
  },
  {
    name: 'Palestine',
    lat: 31.9522,
    lng: 35.2332,
    summary: `Palestinian cuisine exists as an act of cultural preservation and defiance, where recipes passed through generations carry the weight of displacement, occupation, and fierce connection to land. This is Levantine food with distinctive Palestinian character—bright, herbaceous, olive oil-rich, built around ingredients that grow in rocky soil under intense sun. To eat Palestinian food is to engage with history, family, and territory in ways that transcend the plate.

Musakhan might be the most symbolically loaded dish in Palestinian cooking: roasted chicken over taboon bread, smothered in caramelized onions, sumac, and olive oil. Everything about it speaks to Palestinian agricultural identity—the olive oil from ancestral groves, the sumac growing wild in the hills, the bread from village ovens. In the West Bank, musakhan season (October-November) coincides with olive harvest, the year's most culturally significant agricultural moment.

Maqluba ("upside down") layers rice, vegetables, and meat in a pot, then flips it onto a serving platter in a reveal that turns cooking into theater. Every family claims the best version, arguing over spice ratios and proper eggplant preparation. Maftoul, Palestinian couscous rolled by hand, gets cooked with chicken and chickpeas in a dish that demonstrates the labor and skill embedded in Palestinian cooking. These aren't quick meals—they're productions requiring time, technique, and usually multiple generations working together.

Street food culture in cities like Nablus, Ramallah, and Hebron centers on falafel, hummus, and ful medames served from tiny shops that have operated for decades. Nablus kanafeh—cheese pastry soaked in sugar syrup, colored bright orange from natural dyes—is the region's most famous sweet, served hot from metal trays, strings of melted cheese stretching with each portion. Ramallah's downtown offers more cosmopolitan scenes where coffee culture meets traditional sweets.

The za'atar economy tells its own story: wild thyme harvested from hills, mixed with sumac and sesame, sold in markets, sprinkled on everything from bread to labne. Olive oil production in villages like Battir involves stone presses used for centuries. These aren't just ingredients—they're links to land, some of it now inaccessible behind checkpoints or walls.

Fine dining in Palestinian territories is limited but emerging. Fawda in Ramallah and a handful of upscale restaurants in Bethlehem reimagine traditional dishes with modern techniques, though the real culinary excellence lives in home cooking. Michelin doesn't rate Palestinian restaurants, and the occupation makes normal restaurant development nearly impossible.

Palestinian agriculture focuses on olives (the primary cash crop), vegetables, herbs, and some livestock. Water scarcity and land restrictions complicate farming, yet Palestinian farmers maintain practices going back millennia. The vine leaves stuffed and rolled into warak enab, the molasses made from grapes and dates, the preserved lemons and olives—these preserve summer's abundance for winter scarcity.

Food gatherings—whether everyday family meals or weddings and celebrations—function as resistance. To cook and eat Palestinian food is to assert Palestinian existence. The meal isn't complete without bread torn and shared, plates passed around, mint tea after. This cuisine carries memory and homeland in every bite, which gives Palestinian food a gravity that goes beyond flavor, technique, or hospitality. It's delicious, yes, but it's also survival.`
  },
  {
    name: 'Panama',
    lat: 8.5380,
    lng: -80.7821,
    summary: `Panamanian cuisine reflects the country's geographic position as a bridge between continents and cultures—Spanish colonial foundations layered with Afro-Caribbean influences, indigenous traditions, and waves of immigrants from China, India, and the Middle East who came to build the canal and stayed. This is tropical food that favors rice, beans, plantains, and seafood, with regional variations as distinct as the Caribbean and Pacific coasts that define the country's borders.

Sancocho is Panama's national dish and weekend ritual: a chicken soup enriched with yuca, ñame (yam), corn, and culantro that cooks low and slow until flavors merge into something greater than its parts. Families gather for sancocho, often after Friday night's drinking, the soup functioning as hangover cure and social glue. Arroz con pollo is another staple—rice cooked with chicken, sofrito, and enough sazón to color everything a warm gold. Ropa vieja, shredded beef in tomato sauce, shows Spanish influence adapted to tropical ingredients.

The Caribbean coast brings different energy. Afro-Antillean communities in Bocas del Toro and Colón cook with coconut milk, scotch bonnets, and bold spicing reminiscent of Jamaica and San Andrés. Rice and beans cooked in coconut milk, rondon (seafood stew), and patí (meat-filled pastries) reflect these connections. Meanwhile, Pacific coast cooking emphasizes fresh corvina (sea bass), pargo (snapper), and shellfish prepared simply—ceviche, grilled whole fish, or fried crispy.

Panama City's street food scene centers around fondas and kiosks serving carimañolas (yuca fritters stuffed with meat), empanadas, tamales wrapped in banana leaves, and hojaldres (fried dough) eaten with scrambled eggs for breakfast. Mercado de Mariscos offers the freshest ceviche in the city, prepared while you watch, while Avenida Central's street vendors sell raspao (shaved ice) drenched in fruit syrups and condensed milk.

Indigenous Guna, Emberá, and Ngäbe peoples maintain distinct food traditions: plantains and yuca prepared a dozen ways, wild game, river fish, and foods gathered from forests. These traditions remain largely separate from mainstream Panamanian food culture but represent the country's original cuisines.

Panama City's dining scene has evolved considerably. Maito, helmed by Chef Mario Castrellón, serves elevated Panamanian cuisine that earned international recognition—traditional ingredients reimagined through fine-dining techniques. Donde José offers tasting menus exploring Panamanian biodiversity. Neither has Michelin stars (the guide doesn't cover Central America), but both demonstrate Panama's emergence from culinary obscurity.

Agriculture is diverse: coffee from Boquete's highlands rivals Central America's best, seafood from two oceans, tropical fruits like guanabana and mamón chino, and sugarcane for ron (rum) production. The country exports bananas, pineapples, and coffee while importing beef and much of its processed food—a colonial legacy where prime agricultural land served export crops over local consumption.

Panamanian food culture is informal and democratic. Fondas—small family-run restaurants—serve comida corriente (daily specials) for a few dollars: rice, beans, meat, plantain, and salad. The meal isn't fancy, but it's honest, filling, and tastes like someone's grandmother cooked it. Which she probably did. Panama's cuisine doesn't chase international acclaim or culinary trends. It feeds people, tells stories of migration and mixture, and exists as the delicious result of Panama's position as the world's crossroads.`
  },
  {
    name: 'Papua New Guinea',
    lat: -6.3150,
    lng: 143.9555,
    summary: `Papua New Guinea's food culture remains one of the world's least documented and most diverse, with over 800 languages reflecting equally varied culinary traditions. This is a place where many communities still practice subsistence agriculture and hunting-gathering, where introduced foods from colonizers coexist with ingredients cultivated for thousands of years, and where the concept of "national cuisine" barely exists. What you eat in the coastal Sepik region bears little resemblance to highland Huli diets or island Bougainvillean food.

Sago, extracted from the pith of sago palms, forms the staple starch for many lowland communities—laborious to process but providing reliable calories in swampy environments where other crops struggle. Cooked into porridge or dried into flour, sago tastes neutral, its value lying in sustenance rather than flavor. Sweet potato (kaukau) dominates highland diets, introduced relatively recently (16th century) but now central to Papuan identity. Taro, yams, and cassava fill out the starch rotation across different ecological zones.

Mumu is perhaps the closest thing to a unifying culinary tradition—earth oven cooking where hot stones steam layers of sweet potato, greens, pork or chicken, and sometimes fish, all wrapped in banana leaves. The method exists across Oceania, but PNG's versions reflect local ingredients and customs. For many communities, mumu accompanies significant social occasions: births, marriages, initiation ceremonies, and conflict resolutions.

Coastal and riverine peoples rely heavily on fish and seafood—reef fish, prawns, crabs, and turtles (though turtle hunting now faces conservation concerns). Smoked fish preservation extends seafood's utility inland. In the Highlands, protein traditionally came from pigs (deeply important in cultural exchanges and ceremonies), marsupials like tree kangaroos, cassowaries, and insects. Sago grubs, fat beetle larvae that grow in rotting sago palms, are prized protein sources with nutty, creamy flavor when roasted.

Port Moresby and other urban centers show different realities. Imported foods—white rice, tinned fish, instant noodles, mutton flaps—dominate poorer urban diets, creating nutrition transitions with predictable health consequences. Small shops sell "kai bars" (food bars) offering simple fried dishes, rice, and stews. Markets like Port Moresby's Gordons Market overflow with fresh produce, betel nut, and seafood, but urban violence and economic challenges make dining out precarious.

PNG has virtually no fine dining scene. A handful of hotels in Port Moresby serve international cuisine to mining executives and aid workers, but that's disconnected from most Papua New Guineans' food realities. The country has no Michelin presence, no celebrity chefs, no farm-to-table movement (though subsistence farming is, ironically, the original farm-to-table).

Agriculture remains primarily smallholder and subsistence-focused. PNG exports coffee, cocoa, palm oil, and copra, but these cash crops often exist separately from food security crops grown for family consumption. The country imports significant food despite being capable of self-sufficiency—a colonial economic legacy that persists.

Traditional food customs carry deep social meaning. Food exchanges cement relationships and obligations. Certain foods face taboos—pregnant women may avoid specific fish or animals, initiated men have restricted diets. Betel nut, while technically not food, is chewed constantly across PNG, staining teeth red and serving crucial social functions.

PNG's cuisine doesn't fit comfortable narratives. This isn't fusion food or ancient wisdom recipes ripe for Western discovery. It's subsistence food meeting globalization's worst aspects, traditional knowledge eroding while processed food dependency grows. Yet in villages across this impossibly diverse country, people still gather for mumu, still harvest sago, still maintain food practices connecting them to ancestors and land. That continuity, under pressure from every direction, represents PNG's true culinary story.`
  },
  {
    name: 'Paraguay',
    lat: -23.4425,
    lng: -58.4438,
    summary: `Paraguayan cuisine is South America's most overlooked, stuck between Argentina's fame and Brazil's exuberance, yet it offers something distinct: a food culture where indigenous Guaraní traditions merged with Spanish colonial influences, where cassava (mandioca) rivals wheat in importance, and where cheese appears in unexpected forms. This is landlocked, agricultural food—hearty, carb-forward, and built around ingredients that grow abundantly in subtropical soil.

Sopa paraguaya might be the country's most famous culinary contradiction—it's not soup but a dense corn cake made with cheese, eggs, and milk. The story goes that a cook accidentally added too much corn flour to soup, creating something entirely new. Now it's served at every asado, every family gathering, golden-brown squares cut from baking pans. Chipa is equally essential: cheese bread made from mandioca starch, eggs, and plenty of queso Paraguay (a fresh cheese similar to ricotta). Chipa comes in countless variations—chipa guasu (corn version), chipa so'o (meat-filled)—sold by street vendors, at bus stations, outside churches after Sunday mass.

The asado tradition here mirrors Argentina's but with Paraguayan twists. Beef from the Chaco region gets grilled alongside costilla (ribs), chorizo, and morcilla (blood sausage). But Paraguay also embraces vísceras (offal) with enthusiasm: mollejas (sweetbreads), chinchulines (intestines), and kidneys appear routinely. Bori bori is a comfort soup with cornmeal and cheese dumplings in rich broth—Guaraní-influenced soul food. So'o ku'i (ground beef pounded to paste) gets mixed with spices and cassava flour for various preparations.

Street food revolves around chipa sellers who appear everywhere—at traffic lights, on buses, wandering through markets with baskets balanced on heads. Empanadas, especially the empanada paraguaya filled with meat or chicken, are sold from small shops and carts. Markets like Mercado 4 in Asunción offer everything from fresh produce to prepared foods: sopa paraguaya, puchero (meat and vegetable stew), and mazamorra (corn pudding).

Asunción's restaurant scene is modest but evolving. A few establishments like Tierra Colorada and Mburicao elevate traditional Paraguayan dishes with refined techniques and presentations. These places showcase ingredients like palm hearts, Paraguayan cheeses, and native fish like surubí and dorado. There's no Michelin presence, no international foodie attention, which keeps Paraguayan cuisine refreshingly unpretentious.

Agriculture dominates the economy—Paraguay is a major soy exporter (controversial given deforestation concerns), raises significant cattle, and grows cassava, corn, and sugarcane. The country produces excellent beef, though much gets exported. Yerba mate, while not food, is culturally essential—terere (cold mate) is consumed constantly, passed in circles, functioning as social lubricant and national ritual.

Indigenous Guaraní influence persists in ingredients and preparations: cassava in all forms, corn, beans, squash, and wild-gathered foods. The language itself—Paraguayan Guaraní—is unique in South America for being spoken alongside Spanish by most of the population, and food vocabulary reflects this bilingualism. Mbejú (cassava flatbread), reviro (cassava flour porridge), ka'i ladrillo (sweet treat)—these maintain Guaraní names and traditions.

Paraguayan food culture is family-centered and generous. Meals tend toward abundance—no one leaves hungry. The afternoon merienda (snack) might include chipá, cocido (sweet herb tea), and pastries. Sundays mean asado with extended family, hours-long affairs where the quality of gathering matters more than culinary sophistication.

What Paraguayan cuisine offers is authenticity in the original sense—food that evolved from specific historical and geographic circumstances without much outside interference. It's not trying to impress anyone, not competing for international recognition. It feeds Paraguayans, connects them to Guaraní heritage and colonial history, and exists as delicious proof that fame and quality don't always correlate. The world ignores Paraguayan food. Paraguay seems perfectly fine with that arrangement.`
  },
  {
    name: 'Peru',
    lat: -9.1900,
    lng: -75.0152,
    summary: `Peruvian cuisine has emerged as South America's most celebrated food culture, a transformation that feels both sudden and inevitable. This is cooking built on extraordinary biodiversity—from Amazon lowlands to Andean highlands to Pacific coast, Peru's ecosystems produce ingredients found nowhere else. Layer in indigenous, Spanish, African, Chinese, and Japanese influences, add culinary ambition and technical excellence, and you get a cuisine that's captured global attention while remaining deeply rooted in Peruvian identity.

Ceviche is the dish that launched Peru's culinary reputation internationally: raw fish cured in lime juice, mixed with red onion, ají (Peruvian chili), and cilantro, served with sweet potato and toasted corn. Every coastal city claims the best version, but Lima's cevicherías have elevated it to art form. The fish must be impeccably fresh, the tiger's milk (the acidic mariachi juice) balanced precisely, the ají providing heat without obliterating subtlety. Classic ceviche is simple, but variations incorporate octopus, scallops, or mixto (mixed seafood).

Beyond ceviche, Peru's diversity stuns. Lomo saltado—stir-fried beef with tomatoes, onions, ají, and fries—reflects Chinese-Peruvian chifa fusion. Ají de gallina blends European and indigenous traditions: shredded chicken in creamy, nutty, spicy sauce over rice with olives and eggs. Causa is layered potato terrine with various fillings, showcasing Peru's potato diversity (the country has over 3,000 varieties). Anticuchos—grilled beef heart skewers—are street food turned national treasure.

Regional cuisines reveal Peru's complexity. Lima's coast brings seafood sophistication. Arequipa offers rocoto relleno (stuffed peppers) and adobo (pork stew). Cusco and the Andes contribute cuy (guinea pig), alpaca, and high-altitude tubers. The Amazon provides paiche (massive river fish), exotic fruits, and jungle proteins. Each region maintains distinct identities while contributing to the broader Peruvian food narrative.

Lima's restaurant scene has achieved global recognition. Central, helmed by Virgilio Martínez, has ranked among the world's best restaurants, building menus around Peruvian elevation zones and indigenous ingredients. Maido blends Japanese precision with Peruvian products in nikkei cuisine (Japanese-Peruvian fusion). Astrid y Gastón, the restaurant that started Peru's culinary revolution under chef Gastón Acurio, refined traditional dishes with fine-dining techniques. Several Lima restaurants hold Latin America's 50 Best positions, if not Michelin stars (the guide doesn't cover Peru yet, though rumors suggest expansion).

Street food culture remains vibrant: anticuchos sold from carts, picarones (sweet potato and squash donuts), tamales, empanadas, and endless ceviche joints. Markets like Mercado Surquillo offer ingredient education—dozens of ají varieties, exotic Amazonian fruits, fresh fish displays, and fondas serving complete meals for a few soles.

Peru's agricultural wealth is staggering: quinoa, kiwicha, and other ancient grains; potatoes in colors from deep purple to sunshine yellow; corn varieties including giant Cusco kernels; cacao from the Amazon; asparagus and avocados for export; coffee from high-altitude plantations. Seafood from the Humboldt Current's nutrient-rich waters includes everything from anchovies to sea urchins. This biodiversity gives Peruvian chefs an ingredient palette others envy.

Food has become national pride and economic driver. Culinary schools train the next generation, food festivals draw international crowds, and Peru's brand abroad is increasingly culinary. Mistura, Lima's annual food festival, attracts hundreds of thousands, celebrating everything from street vendors to celebrity chefs. The government actively promotes gastrodiplomacy—using food to enhance Peru's image globally.

Peruvian cuisine's rise from obscurity to prominence in just two decades demonstrates what happens when culinary talent, indigenous knowledge, ingredient diversity, and national ambition converge. This isn't fusion for fusion's sake or molecular gastronomy tricks. It's deeply Peruvian food, refined and celebrated, connecting Lima's finest restaurants to Andean farmstands to Amazon communities. The result is a cuisine that honors tradition while embracing innovation, feeds locals and impresses international critics, and has fundamentally changed how the world views South American food.`
  },
  {
    name: 'Philippines',
    lat: 12.8797,
    lng: 121.7740,
    summary: `Filipino cuisine is Asia's most underrated food culture, a blend so complex it reflects the archipelago's layered history: indigenous Austronesian foundations, Chinese trading influences, Spanish colonial imprint, American occupation effects, and Malay connections. This is food that balances sweet, sour, and salty with particular genius, embraces saucy, stew-based dishes perfect for rice, and exhibits regional variations as diverse as the 7,000+ islands that comprise the country.

Adobo is the unofficial national dish, though every Filipino family swears their version is correct—and they're all right. The basic principle: meat (chicken, pork, or both) braised in vinegar, soy sauce, garlic, bay leaves, and black pepper until tender and the sauce reduces to glaze. Some regions add coconut milk, others use different vinegars, variations include adobong puti (white adobo) without soy sauce. The vinegar-based cooking method predates Spanish colonization; the name came later. Adobo is Filipino cooking philosophy in one pot: practical, flavorful, and deeply personal.

Sinigang is the sour soup that defines Filipino comfort food—tamarind-based broth with pork, shrimp, fish, or beef, loaded with vegetables, served steaming hot over rice. The sourness can come from tamarind, guava, calamansi, or green mango, depending on region and availability. Kare-kare is the opposite in some ways: peanut-based stew with oxtail and vegetables, rich and savory, always served with bagoong (fermented shrimp paste) for salty punch.

Street food culture thrives with particular intensity. Balut—fertilized duck egg with partially developed embryo—is the famous (infamous?) example, but Filipino street food goes far beyond shock value. Isaw (grilled intestines), betamax (coagulated pork blood), kwek-kwek (quail eggs in orange batter), fish balls, and banana cue (caramelized saba bananas on skewers) appear at street corners everywhere. Halo-halo, the legendary dessert, layers shaved ice, evaporated milk, sweet beans, fruits, ube ice cream, and leche flan into pure joy.

Regional distinctions matter enormously. Bicol loves gata (coconut milk) and spice—their Bicol express (pork in coconut milk with chilies) delivers heat rare in Filipino cooking. Pampanga is considered the culinary capital, known for sisig (sizzling chopped pork face with onions, chilies, and calamansi). Ilocos brings bagnet (deep-fried crispy pork belly) and pinakbet (vegetable stew). Mindanao shows Muslim influences in rendang-like curries and spice use absent elsewhere.

Manila's dining scene has elevated considerably. Chef Jordy Navarra's Toyo Eatery deconstructs and reimagines Filipino dishes with modern techniques and presentations. Gallery Vask brings Basque precision to Filipino ingredients. Locavore showcases regional dishes in refined settings. Several restaurants now appear on Asia's 50 Best lists. There's no Michelin guide in Manila yet, but the city's food culture—from carinderia (cheap eateries) to fine dining—rewards exploration at every level.

Filipino food exists in its strongest form in home cooking. The boodle fight—military-style communal eating where food gets piled on banana leaves and everyone eats with hands—has become trendy, but it reflects genuine Filipino food culture's communal, generous spirit. Kamayan (eating with hands) remains preferred for many dishes. Food automatically comes with rice—Filipino meals are incomplete otherwise.

Agriculture centers on rice (multiple harvests annually in many regions), coconut (the Philippines is a major producer), tropical fruits, and seafood from extensive coastlines. The country exports calamansi, mangoes, and coconut products while developing a modest coffee industry. Pork is the favorite meat, followed by chicken and fish. Lechon—whole roasted pig—is the special occasion centerpiece, particularly the Cebu version with crispy skin and tender meat.

Filipino cuisine's international recognition has lagged behind Thai, Vietnamese, or Japanese, partly because Filipino migration patterns meant Filipino restaurants abroad served primarily nostalgia-seeking diaspora rather than courting broader audiences. That's changing as a new generation of chefs claims Filipino food's rightness for global audiences. The flavors were always there—bold, complex, comforting. Now the world's finally catching up to what Filipinos have always known: this cuisine, built on centuries of cultural mixing and perfected in countless home kitchens, deserves its place at the table.`
  },
  {
    name: 'Poland',
    lat: 51.9194,
    lng: 19.1451,
    summary: `Polish cuisine is Eastern European comfort food at its most substantial—designed for cold winters, agricultural abundance, and Catholic traditions that shaped eating patterns for centuries. This is food that embraces hearty rather than delicate, satisfying rather than surprising, with flavors built on pickles, smoked meats, root vegetables, and dairy. Modern Poland is rediscovering and refining these traditions, elevating peasant cooking to pride rather than relegating it to babcia's (grandmother's) kitchen.

Pierogi might be Poland's most famous culinary export—dumplings with countless fillings wrapped in unleavened dough, boiled, then sometimes fried. Ruskie pierogi (with potato and cheese, despite the name not being Russian) are classic, but fillings range from sauerkraut and mushrooms to meat to sweet varieties with berries or cheese. Every region, every family has their version. Making pierogi is labor—rolling dough thin, portioning filling, pinching edges—which is why it's often a multi-generational production, grandmothers teaching technique to grandchildren.

Bigos, the hunter's stew, is arguably more essentially Polish: layers of fresh and sauerkraut cooked slowly with various meats (pork, beef, kielbasa, sometimes game), mushrooms, prunes, and spices. Bigos improves with reheating over days, flavors deepening and merging. It's winter food, stick-to-your-ribs sustenance for people who work outdoors. Żurek, a sour rye soup with sausage and hard-boiled eggs, offers another category of Polish comfort—the fermented rye base gives it distinctive tang that cuts the richness.

Polish food culture revolves around substantial breakfasts and dinners, with obiad (lunch) traditionally being the main meal. Śniadanie (breakfast) might include bread, cold cuts, cheese, pickles, eggs, and herring. The Polish love for herring—in cream, in oil, with onions—reflects Baltic access and preservation traditions. Kielbasa (sausage) comes in dozens of regional varieties, from the thick, U-shaped krakowska to thin kabanossi to the white biała kielbasa served at Easter.

Street food has evolved beyond zapiekanka (open-faced baguette pizzas from Communist-era milk bars). Cities now offer international options, but traditional milk bars (bar mleczny) persist as canteen-style spots serving cheap, filling Polish food: kotlet schabowy (breaded pork cutlet—Poland's answer to schnitzel), gołąbki (cabbage rolls), and naleśniki (crepes). These subsidized cafeterias preserve working-class food access while attracting tourists seeking "authentic" experiences.

Warsaw and Krakow have developed serious restaurant scenes. Atelier Amaro in Warsaw earned Poland's first Michelin star in 2012, showcasing Polish ingredients through modernist techniques—foraged forest foods, heirloom vegetables, traditional flavors deconstructed. Poland now has several Michelin-starred establishments, plus numerous restaurants reimagining Polish classics. Krakow's Milk Bar and Warsaw's Bibenda demonstrate that elevated Polish cuisine can honor tradition without museum-ifying it.

Markets like Warsaw's Hala Koszyki or Krakow's Stary Kleparz offer ingredient tours: wild mushrooms (Poland is mushroom-obsessed), smoked fish, fresh produce, regional cheeses like oscypek (smoked sheep cheese from the Tatras), and endless pickles. Polish pickling culture preserves everything—cucumbers, beets, cabbage, mushrooms—creating bright, acidic counterpoints to rich dishes.

Agriculture focuses on potatoes (planted and consumed in massive quantities), cabbage, beets, grains, and rapeseed. Poland is a major exporter of apples and increasingly of specialty products. Dairy production is significant, though much industrial. The country's forests provide mushrooms, berries, and game that appear in traditional cooking.

Catholic traditions shape the food calendar: fried carp on Christmas Eve (though younger Poles are rebelling against this tradition), elaborate Easter breakfasts with blessed foods, Fat Thursday (Tłusty Czwartek) when bakeries can't produce pączki (filled donuts) fast enough. These rituals connect food to identity and continuity.

Polish cuisine suffered decades of Communist-era neglect and then post-1989 fascination with Western fast food. Now there's reclamation—young Poles rediscovering traditional recipes, chefs applying contemporary techniques to historical dishes, and pride in food that nourished generations. Poland isn't trying to become the next Copenhagen or compete with French refinement. It's asserting that food built on preservation, seasonal eating, and communal labor has value, flavor, and rightness. That the stew your babcia made wasn't just nostalgia but genuinely delicious cooking that deserves respect and continuation.`
  },
  {
    name: 'Portugal',
    lat: 39.3999,
    lng: -8.2245,
    summary: `Portuguese cuisine is Europe's most underestimated, overshadowed by Spanish food's international fame despite offering equal depth, more soul, and a global legacy that shaped eating from Brazil to Goa to Macau. This is cooking rooted in the sea—Portugal's coastline defined national character and cuisine—with influences from spice trade conquests, Moorish occupation, and peasant ingenuity that transformed simple ingredients into transcendent dishes through technique and attention.

Bacalhau—salt cod—is so central to Portuguese identity that there are supposedly 365 recipes, one for each day. Salting cod allowed Portuguese fishermen to preserve catches from Newfoundland's Grand Banks for return voyages, and bacalhau became more Portuguese than the fresh fish swimming off the coast. Bacalhau à Brás mixes shredded salt cod with matchstick potatoes, eggs, and parsley into something unexpectedly elegant. Bacalhau com natas layers cod and cream, while grilled versions keep things simple. The fish requires soaking to remove salt, proper preparation being an art passed through generations.

Caldo verde, Galicia/Portugal's green soup, is peasant food perfected: potato purée with shredded collard greens, chouriço, and olive oil. It's served everywhere from village tasca to Lisbon restaurants, proving simplicity done right needs no elevation. Cataplana, a dish and the copper cooking vessel, combines seafood or pork with vegetables, sealed and steamed—a method showing Moorish influence. Francesinha in Porto is the caloric outlier: a sandwich of meats, covered with melted cheese and doused in beer-tomato sauce, finished with an egg and fries, hangover cure taken to extremes.

Portuguese seafood culture goes beyond bacalhau. Percebes (goose barnacles) pried from wave-battered rocks, grilled sardines (especially around Santo António festivals in June), polvo (octopus) grilled or in rice, açorda de marisco (bread stew with seafood), and endless shellfish preparations. Markets like Lisbon's Mercado da Ribeira show the variety—fish stalls displaying the morning's catch, vendors expertly filleting.

Pastéis de nata, the custard tarts from Belém's monastery recipe, have become Portugal's most famous export. The original Pastéis de Belém sells thousands daily, maintaining secret recipe. Every pastelaria offers their version, best eaten warm with cinnamon and powdered sugar. Portuguese sweet culture reflects convent traditions—nuns supported themselves through elaborate egg-yolk-and-sugar creations, birthing a dessert culture of alarming richness.

Lisbon's dining scene has matured significantly. Belcanto, chef José Avillez's flagship, holds two Michelin stars and showcases Portuguese ingredients through contemporary techniques without losing essential Portuguese-ness. Several Lisbon restaurants now carry Michelin recognition, while Porto's scene develops similarly. Yet Portugal's best eating often happens in unassuming tascas—small family restaurants serving whatever's fresh, where lunch menus cost €8 and include wine, soup, main, dessert, and coffee.

Regional differences matter: Alentejo's hearty dishes reflect interior heat and pork culture—carne de porco à alentejana (pork with clams showing coastal connections), açordas (bread-based dishes), and migas. The north brings cozido (meat and vegetable stew), and Porto's tripas (tripe stew). The islands—Azores and Madeira—offer their own specialties: cozido cooked in volcanic heat, espada (scabbard fish) from Madeira's depths.

Portuguese agriculture produces exceptional olive oil (particularly from Alentejo), wine from diverse regions (Douro Valley ports, Vinho Verde, Dão reds, Alentejo blends), cork (Portugal supplies most of the world's wine corks), and seafood from cold Atlantic waters. The country's cheese culture, less famous than France or Spain, includes remarkable varieties like Serra da Estrela made with thistle rennet.

Portuguese food colonialism spread ingredients globally—they introduced chili peppers to India, tempura to Japan (via Jesuit missionaries), and shaped Brazilian, African, and Asian cuisines. That legacy returns home as immigration brings Goan, Brazilian, and African influences into contemporary Portuguese eating.

What distinguishes Portuguese cuisine is its refusal to show off. There's excellence without pretension, quality achieved through respect for ingredients and traditional methods rather than foam and tweezers. The wine is world-class but affordable. The seafood is impeccably fresh and simply prepared. The bread is outstanding everywhere. Portuguese cooking whispers where Spanish cuisine shouts, which means travelers often miss it. Their loss, Portugal's secret, at least until the rest of the world catches up.`
  },
  {
    name: 'Puerto Rico',
    lat: 18.2208,
    lng: -66.5901,
    summary: `Puerto Rican cuisine is Caribbean soul food filtered through Spanish colonialism, African influence, and American annexation, creating something distinctly boricua that asserts identity through flavor. This is the food of la isla del encanto—the island of enchantment—where sofrito forms the aromatic base of nearly everything, where rice and beans manifest in dozens of forms, and where frying is elevated to art. Puerto Rico's complex political status makes food one arena where cultural identity gets expressed without ambiguity.

Mofongo is the dish that defines Puerto Rican cooking for many: mashed fried green plantains mixed with garlic, pork cracklings, and olive oil, formed into a mound and often filled with seafood, meat, or vegetables. Every town claims superior mofongo, every family has its technique. The texture—simultaneously creamy and chunky—and the garlic intensity make mofongo immediately recognizable. Its roots are African (fufu), transformed by Caribbean ingredients into something uniquely Puerto Rican.

Arroz con gandules (rice with pigeon peas) is the island's signature rice dish, essential at Christmas and celebrations. Sofrito—recao, peppers, onions, garlic, cilantro—seasons the rice along with alcaparrado (olives and capers), annatto for color, and often pork. Pernil (roasted pork shoulder) rubbed with adobo appears at every significant gathering, the skin crackling crispy, the meat falling apart. Lechón asado (whole roasted pig) in Guavate's lechoneras (roadside pork joints) draws weekend crowds from across the island.

Street food culture centers around kiosks, particularly in areas like Luquillo and Piñones. Alcapurrias (fried fritters of yautía and green bananas stuffed with meat), bacalaítos (salt cod fritters), pinchos (kebabs), and empanadillas (turnovers) are fried fresh and served wrapped in paper. Cuchifritos stands offer morcilla (blood sausage), chicharrón (fried pork belly), and other fried delights. Piraguas—shaved ice with tropical fruit syrups—cool you down after.

San Juan's dining scene has evolved considerably, particularly in areas like Condado, Ocean Park, and especially Santurce. José Enrique's eponymous restaurant elevated Puerto Rican cuisine by applying fine-dining technique to traditional dishes without losing their soul. Marmalade offers tasting menus showcasing Caribbean ingredients. Cocina Abierta blends local and international influences. Several restaurants now appear on Latin America's 50 Best lists, though Puerto Rico's ambiguous status (U.S. territory, not state, not independent nation) complicates categorizations. The island has no Michelin stars yet, but that reflects guide coverage gaps rather than quality.

Markets like Plaza del Mercado de Santurce overflow with tropical produce: breadfruit, yautía, ñame, plantains at every ripeness level, yuca, and fruit—mango, papaya, quenepas, parcha (passion fruit). Coffee from the central mountains (particularly Yauco) is excellent, though production has declined. The island's rum industry, led by Bacardí and Don Q, reflects Caribbean dominance of rum production, though artisanal distilleries are emerging.

Lunch means arroz y habichuelas—rice and beans—the standard combination that appears daily in homes and restaurants. Could be pink beans, red beans, black beans, white beans; could be rice with corn, rice with coconut. The variations are endless, the concept essential. Amarillos (sweet fried plantains) provide sweet contrast. Tostones (twice-fried green plantains) offer salty crunch.

Puerto Rico's food reflects its history of colonization and exploitation—African enslaved peoples' cooking, indigenous Taíno ingredients (yuca, maize, tropical fruits), Spanish techniques and seasonings. American influence appears in breakfast culture (pancakes and hash browns alongside mallorcas and quesitos), supermarket dominance, and fast food ubiquity that's concerning public health advocates as diabetes and obesity rates climb.

What distinguishes Puerto Rican food is its uncompromising flavor intensity—bold seasoning, generous frying, no apologies. This isn't fusion for outside consumption or restraint for health-conscious visitors. It's unapologetically itself: rich, fried, garlicky, satisfying food that nourishes and declares cultural identity. The political debate about Puerto Rico's status continues, but there's no ambiguity about the food's rightness or its ability to make anyone who eats it understand that boricua cuisine is its own complete, delicious universe.`
  },
  {
    name: 'Qatar',
    lat: 25.3548,
    lng: 51.1839,
    summary: `Qatari cuisine exists at the intersection of Bedouin traditions, Gulf Arab heritage, and petrostate wealth that transformed a pearling backwater into a global crossroads. This is food shaped by harsh desert environment and maritime trade, where hospitality codes remain paramount, and where rapid modernization coexists uneasily with efforts to preserve and even revive traditional foodways. The result is a dining landscape where Michelin-starred European chefs operate alongside traditional majboos restaurants, where camel milk chocolate shares space with French pastries.

Machboos (also called majboos or kabsa across the Gulf) is Qatar's national dish: rice cooked with meat (chicken, lamb, fish, or camel), mixed spices (cardamom, cinnamon, cloves, black lime), and often colored with saffron or turmeric. The rice absorbs the meat's cooking liquid, becoming intensely flavored. Served on large communal platters, machboos is eaten traditionally with the right hand, diners gathering around. Harees appears especially during Ramadan—wheat and meat cooked for hours until it becomes porridge-like, sometimes beaten to smoothness. It's Bedouin food, designed for sustenance in unforgiving conditions.

Seafood reflects Qatar's Gulf location and pearling history. Hamour (grouper) is the preferred fish, grilled whole or cooked into curries. Saloona is a spiced fish or meat stew with vegetables. Madrouba is another porridge-like dish, this time with chicken or fish. These humble preparations connect modern Qatar to its pre-oil past, when the sea provided protein and trade routes brought spices that elevated simple ingredients.

Doha's dining scene is surreal in its variety and luxury. The city has aggressively recruited celebrity chefs—Alain Ducasse, Nobu, Gordon Ramsay, and countless others operate outposts in five-star hotels. Souq Waqif hosts traditional restaurants serving machboos and grills alongside international concepts. Doha has attracted Michelin attention recently, with the guide launching in Qatar in 2022, awarding stars to restaurants like IDAM by Alain Ducasse and Jiwan. This is culinary ambition bought with oil wealth, creating a dining capital in a generation.

Yet traditional Qatari food culture struggles for relevance among Qataris themselves, who are now a minority in their own country (Qataris comprise roughly 12% of the population). Western fast food and international cuisine dominate eating-out habits. The government actively promotes traditional Qatari cuisine through cultural villages, festivals, and mandatory Qatari restaurants in new developments—a forced cultural preservation that reflects anxiety about identity erasure.

Coffee culture in Qatar means Arabic coffee (qahwa)—lightly roasted beans spiced with cardamom, poured from distinctive dallah pots into tiny cups, served with dates. This ritual accompanies every gathering, every business meeting, every social occasion. Tea is equally important. The hospitality is genuine and mandated by cultural codes that long predate oil wealth—guests must be offered refreshment, and refusing is impolite.

Qatar imports nearly all its food—the desert produces little beyond dates, camel milk, and limited vegetables from high-tech greenhouses and farms. Even the fish is increasingly imported as Gulf waters face overfishing and pollution. The country is investing heavily in food security, building massive agricultural facilities and funding overseas farmland purchases. The disconnect between arid reality and luxury consumption is stark.

Street food as understood elsewhere barely exists in Qatar—labor camps house migrant workers who prepare their own meals, while Qataris and wealthy expatriates eat in restaurants or at home with hired help. Souq Waqif offers the closest approximation: shwarma, grilled meats, Iranian sangak bread, Lebanese mezze. The Filipino, Indian, Pakistani, and Nepalese majorities have their own food scenes in areas like Industrial Area, serving communities rather than tourists.

What's fascinating and troubling about Qatar's food landscape is its artificiality. This is a food culture being constructed and marketed even as the underlying social fabric that traditionally supported it has been transformed beyond recognition. The traditional food is real—those Bedouin recipes emerged from genuine conditions and needs. But experiencing them now, in air-conditioned restaurants staffed by South Asian workers serving Qatari dishes to mostly non-Qatari diners, creates cognitive dissonance.

Qatar's food story is petrostate paradox in microcosm: enormous wealth deployed to import everything while anxiously trying to preserve tradition, Michelin stars alongside majboos, global ambitions with local insecurity. The food is often delicious, the hospitality genuine despite the artifice. But it's impossible to eat in Qatar without confronting questions about authenticity, sustainability, and what happens to food culture when everything except oil money becomes imported.`
  }
]

async function main() {
  console.log('🍽️  Starting Food & Cuisine writeup generation for Batch 10...')
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
  console.log('✨ BATCH 10 COMPLETE!')
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
