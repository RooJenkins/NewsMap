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
    name: 'French Southern and Antarctic Lands',
    lat: -49.2804,
    lng: 69.3486,
    summary: `The French Southern and Antarctic Lands don't have cuisine—they have survival rations elevated by French stubbornness to refuse mediocrity even at the end of the world. The 50-120 researchers and support staff rotating through stations like Port-aux-Français on Kerguelen survive on supplies shipped four times yearly from Réunion Island, but this being France, those supplies include real cheese, wine, and espresso machines that would make Parisian baristas jealous.

Research station kitchens serve communal meals where fresh ingredients are memory. Dehydrated vegetables, canned meats, and shelf-stable carbohydrates dominate, but station chefs—yes, France sends actual chefs to Antarctica—transform limitations into competent French cooking. A visiting scientist described Christmas dinner 2024: roasted tinned duck with potato gratin made from powder, followed by aged Comté cheese and chocolate mousse from UHT cream. Wine flowed despite weight restrictions because priorities matter.

The occasional fresh element comes from the sea. Kerguelen waters teem with Patagonian toothfish (marketed as Chilean sea bass elsewhere), though fishing is strictly regulated. When permits allow, station kitchens serve toothfish simply—pan-seared with butter and lemon—and researchers say it's the best fish they've ever eaten, though isolation and monotony might bias judgment. Langouste, the local rock lobster, also appears when conditions permit fishing, grilled and served with more butter than health authorities would approve.

The Antarctic territories proper prohibit all fishing and resource extraction under environmental protocols, so bases there rely entirely on imported provisions. Bread gets baked fresh—flour and yeast arrive with resupply ships, and the aroma of baking bread in research stations provides psychological comfort against horizontal winds and endless ice.

There are no restaurants, no markets, no Michelin stars chasing molecular gastronomy at -30°C. The "food scene" is institutional dining elevated by French culinary standards that refuse to accept defeat. Alcohol rations are generous by polar expedition standards but controlled—cognac warms but also impairs judgment in environments where mistakes kill.

The real cuisine here is what researchers bring mentally: memories of cassoulet in Toulouse, bouillabaisse in Marseille, croissants on Sunday mornings in Lyon. Food in the French Southern and Antarctic Lands is what you miss, what you dream about during the long austral winter, and what you promise yourself you'll appreciate properly when you finally return to civilization. It's cuisine defined by absence, by longing, and by the very French insistence that even at Earth's most inhospitable margins, one must eat with dignity.`
  },
  {
    name: 'Gabon',
    lat: -0.8037,
    lng: 11.6094,
    summary: `Gabonese cuisine is Central African soul food filtered through French colonial influence, where cassava meets béchamel and forest bushmeat shares menus with imported Bordeaux. This is a country 88% covered in rainforest, blessed with Atlantic coastline, and wealthy enough from oil revenues that its food culture reflects both traditional substance and modern aspiration. In Libreville's markets and Port-Gentil's restaurants, you'll find cooking that most of the world has never encountered—and that's precisely what makes it compelling.

Start with nyembwé, Gabon's national dish and a masterclass in using what the forest provides. It's a rich sauce built on palm nut pulp, simmered with chicken, fish, or smoked meat, thickened with cassava leaves or spinach, and served over manioc (cassava) or plantains. The palm nuts get pounded into paste, boiled, and strained—labor-intensive work that grandmothers still do properly, though modern shortcuts exist. The result is russet-red, fatty, deeply savory, with a richness that coats your mouth. Palm oil isn't optional in Gabonese cooking; it's fundamental, providing both flavor and the calories that fueled forest communities for centuries.

Smoked fish appears everywhere—bonga (a small herring) smoked over wood fires and sold in every market, its intense flavor adding depth to stews and sauces. The Central Market in Libreville overflows with smoked fish, fresh catches from the Atlantic, forest snails the size of your fist, and vegetables like eggplant, okra, and bitter leaf. Women vendors control the food economy here, negotiating prices in Fang, French, or whatever language moves product.

Poulet Nyembwé is the chicken version—bird simmered until tender in that palm nut sauce, often with hard-boiled eggs added because why not. Poisson salé (salted fish) with plantains and sauce appears as daily fuel. Then there's mbongo tchobi, a black stew using mbongo spice (bark burned and ground) that creates an earthy, almost charcoal flavor profile. It's an acquired taste, but locals swear by it, especially with river fish.

Libreville's restaurant scene caters to oil executives and the country's wealthy elite. Le Patio serves French-Gabonese fusion—think nyembwé reimagined with presentation that wouldn't look out of place in Paris ($30-50 per person). Le Batéké specializes in grilled fish and traditional dishes prepared for international palates. No Michelin stars here, but the standards are high by Central African measures.

Street food culture thrives despite Libreville's wealth. Brochettes (grilled meat skewers) smoke on corners, often using beef, goat, or the more controversial bushmeat—porcupine, antelope, even protected species when enforcement lags. Beignets (fried dough) and accra (fried bean fritters) provide quick energy. Dibiterie spots serve Senegalese-style grilled lamb, reflecting West African influence.

Gabon's agriculture struggles despite ideal growing conditions—oil wealth made importing cheaper than farming. Cassava, plantains, and palm oil come from smallholder farms. Fishing boats bring in capitaine, barracuda, and prawns. The central highlands produce some vegetables, but supermarkets stock French imports for the expat community and wealthy Gabonese who prefer familiar brands.

There's no codified haute cuisine movement here, no chefs competing for international recognition. Instead, Gabon offers authentic Central African cooking that's increasingly rare as globalization homogenizes regional cuisines. The food is rich—palm oil and calories abound—but it's honest cooking that connects directly to the forest, the ocean, and the cultures that learned to thrive in one of Earth's most biodiverse environments. Visiting Gabon means eating food that hasn't been packaged for tourists, and that's precisely its value.`
  },
  {
    name: 'Gambia',
    lat: 13.4549,
    lng: -15.3087,
    summary: `Gambian food is West African comfort cooking without pretension—rice dishes that stick to your ribs, peanut sauces that define an entire region's cuisine, and fish so fresh it was swimming in the Atlantic at sunrise. This tiny country, wrapped around the Gambia River like a geographic peculiarity, shares culinary DNA with Senegal and broader Senegambia culture, but Gambians will insist their versions are better. And honestly, when done right, they might be onto something.

Benachin, which translates to "one pot," is Gambia's national dish—essentially jollof rice by another name, and yes, this sparks the same heated debates. It's rice cooked with tomatoes, onions, fish or meat, and vegetables until the bottom gets that coveted crispy layer called the xoon (or socarrat for Spanish rice fans). The key is using broken rice, which absorbs flavors differently than intact grains, and not skimping on palm oil or tomato paste. Gambians cook benachin for celebrations, family gatherings, and whenever the household needs feeding with minimal fuss. Every grandmother has her method; everyone else's is inferior.

Domoda is where Gambian cuisine gets serious. This peanut stew—groundnut soup in local parlance—simmers beef, chicken, or fish in a thick sauce made from ground peanuts, tomatoes, and spices. The result is creamy, slightly sweet, earthy from the peanuts, with heat from scotch bonnet peppers. It's served over rice, because everything here is served over rice, and the combination is pure satisfaction. The Gambia produces excellent peanuts; domoda showcases them at their best.

Yassa is the other pillar: chicken or fish marinated in lemon juice, onions, and mustard, then grilled or fried before being simmered in the marinade until the onions nearly melt. The acidity cuts through the richness of oil, creating balance. Yassa typically appears at celebrations and special meals—it's cooking that requires attention and time.

Street food thrives in markets and roadsides. Tapalapa bread, crusty baguettes baked in wood-fired ovens, gets sold at dawn still warm. Vendors fill them with mayonnaise, spicy bean paste, or fried fish for breakfast sandwiches. Akara (black-eyed pea fritters) fry in oil at market stalls, served with spicy pepper sauce. Fresh oysters appear along the coast, shucked and served with chili and lime for pennies.

Markets like Albert Market in Banjul and Serrekunda Market overflow with produce: mangoes, papayas, hibiscus flowers for bissap (hibiscus tea), baobab fruit, and cassava. Fish markets near the coast showcase bonga (small fish), barracuda, and butterfish—much of it destined for smoking, which preserves it for inland transport.

High-end dining barely exists beyond Senegambia Strip's tourist-oriented restaurants catering to British package holidaymakers seeking "African experience" with European comfort. Ngala Lodge and Mandina Lodges in the interior serve elevated Gambian cuisine for ecotourists, using traditional recipes with better ingredients and presentation.

The Gambia's agricultural base is peanuts—groundnuts historically drove the colonial economy, and they still dominate farming. Rice comes from the river valley, though imports supplement local production. Fishing employs thousands; the river and Atlantic both provide daily catches. Oyster harvesting by women in mangrove forests supplies local consumption.

Food traditions center on communal eating—large bowls placed centrally, everyone eating with their right hand from their section. Hospitality demands feeding guests generously; refusing food insults your hosts. Attaya, Chinese-style green tea prepared in three rounds with increasing sugar and ceremony, is the social glue. The first round is bitter, the second sweet, the third somewhere between—"strong as death, sweet as love, gentle as life" goes the saying.

Gambian cuisine won't win international awards or Michelin recognition. It's everyday cooking done with ingredients that define West Africa—rice, peanuts, fish, palm oil—combined with techniques passed through generations. It's food that fills you up, costs little, and tastes like a place most travelers overlook. Which is precisely why it matters.`
  },
  {
    name: 'Georgia',
    lat: 42.3154,
    lng: 43.3569,
    summary: `Georgian cuisine is having its moment, and it's about damn time. This is food culture that predates French technique by millennia, includes 8,000 years of unbroken wine tradition, and approaches hospitality with an intensity that borders on aggressive generosity. The country that invented polyphonic singing also developed flavor combinations—walnut sauces, fermented milk, pickled everything—that feel simultaneously ancient and perfectly suited to modern palates. If you haven't eaten khinkali until the broth drips down your chin or experienced a proper supra feast, you're missing one of Europe's great culinary traditions.

Start with khinkali, the soup dumplings that test both cooking skill and eating technique. These pleated pouches—traditionally 19 folds, though who's counting—hold spiced meat (beef and pork typically, though lamb appears) and a broth that forms during steaming. The proper method: grab the knob, bite the side, suck the broth, eat the dumpling, discard the knob. Count the discarded knobs at meal's end to track who ate most—it's competitive. Khinkali originated in the mountain regions, but now every Georgian city has specialized khinkali houses. Pasanauri in Tbilisi serves some of the capital's best.

Khachapuri is Georgia's gift to anyone who's ever loved bread and cheese. The Adjarian version—a boat-shaped bread filled with molten sulguni and imeruli cheese, topped with butter and raw egg you mix in while it's lava-hot—is pure indulgence. The Imeretian style keeps it flatter, cheese inside the dough. Megruli adds cheese on top too, because excess is a virtue. Khachapuri appears at every meal, from breakfast to late-night snacks. It's street food, it's fine dining, it's the food Georgians abroad crave most desperately.

The walnut sauces deserve their own essay. Pkhali (chopped vegetables with walnut paste and spices) comes in varieties—spinach, beet, eggplant—each vibrantly colored and herbaceous. Badrijani (eggplant rolls with walnut paste) combines creamy nuts with smoky eggplant. Satsivi, a cold chicken in walnut sauce traditionally served at New Year, showcases Georgian spice mastery—coriander, fenugreek, marigold petals, garlic—ground with walnuts into complex, silky sauce.

Georgian feasting culture centers on the supra, a table laden with dozens of dishes and overseen by a tamada (toastmaster) who controls the flow of wine and speeches. Toasts are mandatory, elaborate, and deeply felt. The table might include chakhokhbili (chicken in tomato-herb sauce), chakapuli (lamb stew with tarragon and plums), mtsvadi (grilled meat skewers), various pkhali, cheese, bread, and enough wine to float a small boat. Refusing hospitality is nearly impossible—Georgians view feeding guests as sacred duty.

Wine culture runs deep. Georgia claims to have invented wine 8,000 years ago, and the qvevri method—fermenting in buried clay vessels—is UNESCO-recognized. Natural wine enthusiasts worldwide geek out over Georgian amber wines (white grapes fermented with skins, creating orange-hued, tannic wines). Kakheti region is wine country, with wineries like Pheasant's Tears and Iago's Wine leading the natural wine movement. Traditional Georgian wine is unfiltered, often slightly cloudy, and meant to pair with the fatty, rich cuisine.

Tbilisi's restaurant scene has exploded. Barbarestan recreates 19th-century recipes from a Georgian princess's cookbook. Shavi Lomi serves modern Georgian in an intimate setting. Café Gabriadze combines theater and food. High-end spots charge $30-50 per person—still reasonable by European standards. Street food thrives at markets: Dezerter Bazaar overflows with spices, churchkhela (walnut strings dipped in grape must), matsoni (yogurt), and cheese.

Georgian agriculture benefits from diverse microclimates. The lowlands produce citrus and persimmons, mountains yield honey and dairy, Kakheti grows grapes. Walnuts, herbs, and pomegranates are fundamental. Tklapi (fruit leather) and pickled vegetables preserve summer's abundance.

No Michelin stars yet, but that's coming. Georgian chefs are opening restaurants in London, New York, Berlin—exporting this cuisine beyond the diaspora. Georgia itself doesn't need outside validation. They've been perfecting this food for millennia, through Persian invasions, Russian occupation, Soviet deprivation, and post-independence rebuilding. The result is cuisine that feels both timeless and excitingly fresh, especially for travelers just discovering it. This is food worth seeking out.`
  },
  {
    name: 'Germany',
    lat: 51.1657,
    lng: 10.4515,
    summary: `German food suffered decades of unfair reputation—heavy, boring, nothing but sausages and sauerkraut—until the world finally noticed that Germany had quietly built one of Europe's most dynamic food scenes. Yes, the traditional dishes remain (and they're better than you remember), but Germany now boasts 327 Michelin-starred restaurants as of 2024, a thriving farm-to-table movement, and regional pride driving innovation while respecting tradition. This is a country that takes food as seriously as engineering, which means when Germans decided to modernize their cuisine, they did it with typical thoroughness.

Start with the traditions: schnitzel done properly is a revelation. The Wiener Schnitzel (yes, technically Austrian) gets pounded thin, breaded, fried in clarified butter until golden, and served with lemon and potato salad. But Germans make Jägerschnitzel (with mushroom sauce), Zigeunerschnitzel (with bell pepper sauce), and dozens of regional variations. The key is the technique—the breading should puff slightly away from the meat, creating air pockets.

Currywurst is Berlin's gift to street food: sliced bratwurst topped with curry-spiced ketchup, sprinkled with curry powder, served with fries or bread. It's simultaneously terrible for you and exactly what you need at 2am after clubbing. Konnopke's Imbiss in Prenzlauer Berg has served it since 1930, though everyone has their favorite spot.

Bread is where Germany excels obsessively. Germans recognize over 3,000 types of bread—from dense rye Schwarzbrot to seeded Vollkornbrot to pretzel-like Laugengebäck. Bakeries (Bäckerei) are everywhere, and Germans are fussy about quality. A proper German breakfast spread includes multiple breads, cold cuts, cheese, soft-boiled eggs, jam—and it's legitimately excellent.

Regional diversity matters enormously. Bavaria gives you Weisswurst (white sausage eaten before noon traditionally), Schweinshaxe (roasted pork knuckle), and Leberkäse (a smooth meatloaf that's better than it sounds). Swabia contributes Maultaschen (meat-filled pasta) and Spätzle (egg noodles). The north coast serves Labskaus (corned beef hash with beetroot and pickles) and Fischbrötchen (fish sandwiches). The Rhineland has Sauerbraten (marinated beef roast) and Reibekuchen (potato pancakes).

Beer halls remain cultural institutions. Munich's Hofbräuhaus is tourist-packed but genuine—liter steins of lager, pretzels the size of dinner plates, roasted pork, and oompah bands. Smaller beer gardens like Augustiner-Bräu's Biergarten offer locals-heavy crowds under chestnut trees. Germany's beer purity law (Reinheitsgebot) dating to 1516 still influences brewing, though craft beer movement has pushed boundaries.

The Michelin revolution happened quietly. Germany's 327 stars in 2024 include three 3-star restaurants: Vendôme in Bergisch Gladbach, Aqua in Wolfsburg, and Atelier in Munich. Restaurants like Rutz in Berlin showcase modern German cuisine—local ingredients, refined technique, wine pairings featuring German Rieslings. Prices run €200+ for tasting menus, but the quality justifies it.

Christmas markets (Weihnachtsmärkte) transform German food culture November-December. Glühwein (mulled wine), Bratwurst, Lebkuchen (gingerbread), Stollen (fruit bread), and roasted almonds scent every city center. Nuremberg's Christkindlesmarkt is most famous, but Dresden's Striezelmarkt and smaller markets often offer better experiences.

Agriculture emphasizes wheat, barley (for beer), potatoes, and hops. The Rhine and Mosel valleys produce excellent Rieslings—these are world-class white wines that pair beautifully with Germany's rich cuisine. Asparagus season (Spargelsaison) from April-June sees white asparagus (Spargel) appearing on every menu, often served with hollandaise and potatoes.

Turkish immigration created a parallel food culture. Döner kebab was invented in Berlin by Turkish immigrants, and now Germany has some of the world's best döner. Mustafa's Gemüse Kebap in Kreuzberg draws hour-long lines. Vietnamese and Greek communities added their cuisines, making German cities remarkably cosmopolitan.

The farm-to-table movement (Bauernhof-zu-Tisch doesn't sound as catchy) emphasizes local sourcing, seasonal menus, and sustainability. Restaurants like Nobelhart & Schmutzig in Berlin serve only ingredients from around Berlin, creating hyper-local modern German cuisine.

German food has evolved from post-war scarcity cooking to a sophisticated, regional, and increasingly plant-forward cuisine (while still respecting meat traditions). It's beer and bread culture refined over centuries, regional pride driving quality, and a modern generation of chefs proving that German cuisine deserves space alongside French, Italian, and Spanish in culinary conversations. The stereotypes are outdated—Germany's food scene rewards exploration.`
  },
  {
    name: 'Ghana',
    lat: 7.9465,
    lng: -1.0232,
    summary: `Ghanaian cuisine is West African cooking at its most approachable—bold flavors without overwhelming heat, ingredients that reflect tropical abundance, and techniques refined over centuries of feeding communities. This is a cuisine built on cassava, plantains, yams, rice, and fish from the Atlantic, spiced with ginger, pepper, and nutmeg, and tied together by the most important question in Ghana: jollof or waakye? Choose your side carefully; Ghanaians have opinions.

Jollof rice is where national pride lives. Ghana claims to have invented it (Senegalese and Nigerians vehemently disagree), and Ghanaian jollof distinguishes itself with a smokier, richer tomato base using local tomatoes, plenty of pepper, and that essential scorched bottom layer. The rice should be slightly oily, deeply orange-red, fragrant with ginger and garlic, and served with fried plantains, chicken, or fish. Every cookout, party, and celebration centers on jollof. Cooking it poorly is social suicide; nailing it is heroic.

But waakye might be Ghana's true soul food—rice and beans cooked together with millet leaves (or sorghum leaves) that turn everything purple-brown. It's traditionally breakfast, served with shito (black pepper sauce), gari (cassava granules), fried plantains, spaghetti (yes, spaghetti), boiled eggs, and your choice of protein. The combination is chaotic and perfect. Waakye sellers at Makola Market in Accra pack it into brown bags with precision, creating portable energy for the workday.

Banku and tilapia is the coastal classic—fermented corn and cassava dough formed into balls, steamed until slightly sour, served with grilled tilapia and pepper sauce heavy with tomatoes, onions, and scotch bonnets. You break off pieces of banku, dip into the sauce, add tilapia meat, and eat with your hands. The sourness of banku cuts through the richness of fish and oil beautifully.

Fufu is technique and tradition: cassava, plantains, or yams pounded with enormous pestles until they become sticky, elastic dough. It's hard work—the rhythmic pounding of fufu echoes through neighborhoods. Fufu serves as vehicle for soups: groundnut soup (peanut-based), palm nut soup (rich and orange from palm fruit), or light soup (tomato-based with goat or chicken). You pinch off fufu, make an indentation with your thumb, scoop soup, swallow without chewing—that's the traditional method.

Kelewele is one of the world's great street foods—ripe plantains cubed, tossed with ginger, pepper, salt, and sometimes nutmeg, then deep-fried until caramelized and spicy-sweet. Sold in newspaper cones at roadside stalls and markets, kelewele is simultaneously snack and addiction.

Ghanaian street food thrives: red-red (black-eyed peas in palm oil with fried plantains), tatale (plantain pancakes), bofrot (fried dough balls, basically donuts), and kebabs grilled over charcoal. Chop bars—informal eateries serving local food—are where Ghanaians eat daily. Auntie Muni's in Accra is legendary for traditional cooking at reasonable prices ($3-8 per meal).

Accra's restaurant scene is modernizing. Buka Restaurant serves contemporary Ghanaian—jollof rice elevated, grilled meats with local spices, and cocktails using sobolo (hibiscus) and palm wine. Asanka Local offers refined versions of classics in stylish settings. No Michelin stars (Michelin doesn't cover Ghana), but the quality is rising as Ghana's middle class demands better dining.

Markets define food culture. Makola Market, Kaneshie Market in Accra, and Kejetia Market in Kumasi overflow with vegetables, smoked fish, spices, and live chickens. Women dominate market food economy, negotiating prices and controlling distribution.

Ghana grows cocoa (it's the world's second-largest producer), yams, cassava, plantains, and maize. Fishing communities along the coast supply tilapia, barracuda, and herring—much of it smoked for preservation. Palm oil and coconut are fundamental fats. Kenkey (fermented corn dough) and gari (fermented cassava) showcase preservation techniques in tropical climates.

Food traditions emphasize communal eating—one large bowl, multiple people eating from their section with right hands. Funerals feature massive feasts; weddings demand jollof rice quality that won't embarrass the family. Hospitality means feeding guests generously; refusing food insults hosts.

Ghanaian diaspora is spreading this cuisine globally. London, New York, and Toronto now have serious Ghanaian restaurants introducing jollof, waakye, and fufu to wider audiences. Ghana itself isn't chasing fine-dining recognition or fusion trends—they're confident in their food traditions, cooking the way grandmothers taught, with flavors that need no apology. For travelers seeking authentic West African food without the intimidation factor, Ghana's kitchens, chop bars, and markets deliver satisfaction with every meal. Just be prepared to defend your jollof preference.`
  },
  {
    name: 'Greece',
    lat: 39.0742,
    lng: 21.8243,
    summary: `Greek cuisine is the Mediterranean diet's poster child—olive oil, vegetables, seafood, grains, the occasional lamb—but that framing undersells the reality. This is food culture refined over millennia, influenced by Ottomans, Venetians, and ancient traditions, where every region fights over who makes the best moussaka and summer means eating outside until midnight. Modern Greek restaurants worldwide serve a sanitized version; real Greek cooking—the stuff you find in island tavernas and mountain villages—is simpler, bolder, and utterly confident in its ingredients.

Moussaka is the dish everyone knows: layers of eggplant and spiced meat sauce (usually beef and lamb) topped with béchamel, baked until golden. When done right—eggplant properly salted and fried to remove bitterness, meat sauce rich with cinnamon and tomato, béchamel silky—it's comfort food that happens to be Greek. When done badly, it's greasy and heavy. The difference is care and proper technique, which Greek grandmothers guard jealously.

Souvlaki and gyros dominate street food. Souvlaki is grilled meat (usually pork) on skewers, served in pita with tomatoes, onions, and tzatziki. Gyros is meat roasted on a vertical spit, shaved thin, wrapped in pita with fries inside (yes, inside). It's fast, cheap (€2-4), and exactly what you need after drinking too much ouzo. Every Greek has their preferred souvlaki spot; tourists arguing about authenticity is comedy to locals who just want good meat and fresh pita.

Greek salad (horiatiki) is summer distilled: tomatoes, cucumbers, onions, olives, feta, olive oil, oregano. No lettuce—if there's lettuce, it's not Greek salad. The key is using proper Greek feta (sheep's milk, brined, crumbly) and tomatoes that actually taste like tomatoes. Eaten with crusty bread to soak up the olive oil-vinegar-tomato juice at the bottom.

Mezze culture means sharing small plates with drinks: tzatziki (yogurt, cucumber, garlic), melitzanosalata (smoky eggplant dip), taramasalata (fish roe dip), dolmades (stuffed grape leaves), spanakopita (spinach pie), saganaki (fried cheese). Mezze pairs with ouzo or tsipouro, both anise-flavored spirits that turn cloudy with water. Greeks drink slowly, eat slowly, argue politics passionately.

Island cooking varies regionally. Crete has dakos (barley rusk topped with tomatoes and feta), kalitsounia (cheese or herb pies), and uses more snails than mainland Greeks. The Cyclades emphasize seafood—grilled octopus, fried calamari, kakavia (fish soup). The Ionian islands show Italian influence with pasta and veal. Each island claims their version is correct; everyone else is wrong.

Seafood is central but expensive. Grilled sardines, sea bass, and bream appear on menus priced by the kilo (€45-60/kg typically). Octopus gets grilled after tenderizing (traditional method: pound it against rocks or freeze it), drizzled with lemon and olive oil, served with fava (yellow split pea puree). Shrimp saganaki bakes shrimp in tomato sauce with feta melted on top—rich, shareable, excellent with bread for dipping.

Lamb plays starring roles: kleftiko (slow-roasted lamb shoulder with lemon and herbs, traditionally cooked in sealed clay ovens), giouvetsi (lamb with orzo pasta in tomato sauce), and arnaki psito (roast lamb for Easter). Greeks roast whole lambs on spits for celebrations, families gathering around as fat drips onto coals and smoke flavors meat.

Athens' restaurant scene balances tradition and innovation. Funky Gourmet and Spondi hold Michelin stars, serving modern Greek tasting menus ($150+). But the real action is in neighborhood tavernas: Karamanlidika tou Fani for aged cheeses and charcuterie, Ta Karamanlidika for cured meats, Nikitas in Psyrri for traditional cooking. Monastiraki's souvlaki joints feed late-night crowds fresh from bars.

Greek agriculture provides olive oil (Kalamata and Koroneiki olives make world-class oil), honey (thyme honey from islands is extraordinary), feta and other cheeses, yogurt (strained Greek yogurt is properly thick), and wine. Greek wines—Assyrtiko from Santorini, Xinomavro from northern Greece, Muscat from Samos—are finally getting international respect.

Food traditions: Greeks eat late (9pm dinner is normal), lunches are long, coffee is serious business (Greek coffee or frappé, the iced coffee Greeks invented). Hospitality means feeding guests until uncomfortable; refusing seconds insults the cook. Name days matter more than birthdays and require celebration with food.

Michelin came late to Greece—only Athens has starred restaurants currently, though that's changing. The tourism industry serves millions but often defaults to mediocre versions of classics. Seek out where locals eat: family tavernas on back streets, island towns outside tourist centers, mountain villages where they still roast lamb in wood ovens. Greek food doesn't need tricks or fusion—it needs good ingredients, proper technique, and Greeks willing to feed you like family.`
  },
  {
    name: 'Greenland',
    lat: 71.7069,
    lng: -42.6043,
    summary: `Greenlandic cuisine is Arctic survival refined into cultural identity—a food tradition built on what can be hunted, fished, or gathered in one of Earth's harshest climates. This is not vegetarian-friendly. This is seal, whale, reindeer, fish, and seabirds prepared using Inuit techniques perfected over millennia. Modern Greenland combines traditional foods with Danish colonial influence and imported goods flown or shipped at shocking expense. The result is a cuisine most travelers have never encountered and might find challenging—but it's profoundly connected to place and climate.

Suaasat is Greenland's national dish—a soup of seal, whale, reindeer, or seabird boiled with onions, potatoes, and not much else. Traditional suaasat uses whatever meat is available, cut into chunks, simmered until tender. It's sustenance food, designed to warm bodies and provide calories against cold. Served with rice or simply with broth, suaasat appears in homes and restaurants as daily fare. The flavor depends entirely on the meat: seal is rich and gamey, reindeer milder, whale beef-like but denser.

Mattak is where Greenlandic food gets serious—raw whale skin with a thin layer of blubber attached, cut into bite-sized pieces, eaten fresh or slightly fermented. The texture is chewy, almost rubbery, with a nutty flavor. Mattak is rich in vitamin C, essential in a place where vegetables don't grow. For Inuit communities, mattak isn't exotic—it's tradition, celebration, and nutrition combined. For visitors, it's an acquired taste and a test of cultural openness.

Kiviak represents fermentation at its most extreme: whole auks (small seabirds) stuffed into a seal carcass, buried under rocks, left to ferment for several months. The result is intensely flavored, pungent, and considered a delicacy for special occasions. It's not commonly available and requires serious commitment to try. Think of it as Greenland's century egg or hákarl—food that exists at the edge of palatability, sustained by tradition.

Fish is daily protein. Arctic char, halibut, cod, and shrimp appear fresh or dried. Capelin (small fish) gets dried and eaten as snacks. Greenlandic halibut—massive flatfish from cold waters—is extraordinarily tender, often served simply poached or pan-fried. Shrimp from Greenlandic waters are sweet and prized; the town of Ilulissat's fish market sells them fresh off boats.

Danish influence brought rye bread (rugbrød), potatoes, and coffee culture. Many Greenlandic meals combine traditional meat with Danish sides—suaasat served with rye bread and butter, for instance. Nuuk's restaurants like Sarfalik embrace New Nordic Arctic cuisine: local ingredients—musk ox, Arctic char, crowberries, Greenlandic herbs—prepared with modern technique and presentation. Expect $80-120 per person for fine dining by Greenlandic standards.

Musk ox, reintroduced to Greenland, now appears on menus. The meat is lean, slightly sweet, similar to beef but gamier. Smoked musk ox or grilled musk ox steaks show up in restaurants catering to tourists seeking "Arctic experience." Reindeer (caribou) is traditional and appears in stews, roasted, or as dried strips.

Crowberries, blueberries, and angelica grow during brief summers. Greenlandic women pick berries for jams, desserts, and eating fresh. Angelica, an herb, flavors sauces and appears in modern cooking. Otherwise, vegetables and fruits fly in from Denmark at prices that shock ($8 for a bell pepper, $6 for an apple).

Hunting culture remains strong. Regulations control seal, whale, and seabird hunting, but for many Greenlanders, hunting provides food security and cultural continuity. Meat sharing within communities follows traditional patterns—successful hunters distribute catches, maintaining social bonds.

High-end dining is emerging but limited. Sarfalik in Nuuk serves modern Arctic cuisine with wine pairings. Katuaq Cultural Centre hosts dinners featuring traditional foods. Elsewhere, hotel restaurants serve safe versions of Greenlandic dishes. No Michelin stars (Michelin doesn't cover Greenland), but the creativity exists—chefs are reimagining traditional ingredients through contemporary techniques.

Food costs are brutal. Everything imported—which is most things—arrives by ship or plane. A supermarket shop in Nuuk rivals Manhattan prices. A basic meal out costs $25-40; fine dining $80-150. Travelers should budget accordingly or bring snacks from Denmark.

Traditional food preparation—drying fish, fermenting meat, rendering blubber—happens less as Greenlandic youth urbanize and adopt globalized diets. The tension between preserving food culture and embracing modern conveniences is ongoing. Climate change affects hunting patterns and ice conditions, threatening traditional practices.

Greenlandic food challenges Western palates and ethics. Seal hunting remains controversial internationally; to Greenlanders, it's sustenance and culture. The cuisine is unapologetically carnivorous, fat-heavy, and tied to hunting traditions under pressure from climate change and globalization. For travelers willing to engage respectfully, Greenlandic food offers insight into how humans have thrived in the Arctic for thousands of years—through adaptation, resourcefulness, and deep knowledge of the environment. It's not comfort food; it's survival cuisine elevated to identity.`
  },
  {
    name: 'Guatemala',
    lat: 15.7835,
    lng: -90.2308,
    summary: `Guatemalan cuisine is Mayan food culture with Spanish colonial overlay—corn, beans, chilies, and chocolate prepared using techniques that predate Cortés, mixed with European ingredients that created something entirely new. This is the food that sustained one of history's great civilizations, and while modern Guatemala has adopted global influences, the heart remains indigenous: handmade tortillas, tamales wrapped in banana leaves, and sauces that require 30+ ingredients and all-day preparation. It's complex, labor-intensive, deeply regional, and vastly underappreciated outside Central America.

Start with the tortilla. Not the factory-made discs—these are made from nixtamalized corn (soaked in lime water to release nutrients), ground into masa, hand-patted, and cooked on a comal until they puff slightly and develop char spots. Every meal includes fresh tortillas, still warm, used as utensil and sustenance. The tortilla ladies (tortilleras) in markets slap out hundreds daily, maintaining rhythm developed over lifetimes. Proper Guatemalan tortillas are thicker, smaller, and more substantial than Mexican versions—they need to hold up to serious sauces.

Pepián is Guatemala's national dish and a masterclass in pre-Columbian technique. This thick stew simmers chicken or beef with pumpkin seeds (pepitoria), sesame seeds, tomatoes, tomatillos, chilies, and spices until everything melds into complex, earthy, slightly nutty sauce. Pepián appears brown, russet, or green depending on the chilies and seeds. It's Mayan cooking at its essence—taking available ingredients, roasting them to develop flavor, grinding by hand (or now in blenders), simmering patiently. Served with rice and tortillas, pepián is celebration food, Christmas food, Sunday food.

Kak'ik is the other essential soup, particularly among the Q'eqchi' Maya of Alta Verapaz. It's a turkey soup made red with achiote (annatto) and chilies, flavored with coriander seeds and served with white rice and tamales. Traditional kak'ik requires sourcing indigenous turkey (smaller, more flavorful than commercial breeds) and takes hours of simmering. The result is spicy, aromatic, and deeply satisfying.

Tamales in Guatemala are elaborate affairs. Tamales colorados (red tamales) use masa colored and flavored with achiote, stuffed with meat, wrapped in banana leaves, and steamed for hours. Tamales negros use chocolate and sesame in the masa, creating dark, slightly sweet versions. Chuchitos are smaller, simpler—corn masa wrapped in corn husks with chicken or pork, served with tomato sauce. Guatemalans eat tamales for breakfast, celebrations, and whenever comfort food calls.

Street food thrives: tostadas (fried tortillas piled with vegetables, meat, and cheese), garnachas (small fried tortillas with meat and sauce), elotes locos (corn on the cob slathered with mayo, cheese, and chili), and rellenitos (mashed plantains stuffed with sweetened black beans, fried). Antigua's markets and Parque Central in Guatemala City have vendors who've perfected these for decades.

Jocon is a distinctive green sauce made with tomatillos, green chilies, cilantro, and peppers, typically served with chicken. The color is vibrant, the flavor bright and herbal—completely different from pepián but equally traditional. Both showcase how Guatemalan cooking creates complex sauces from simple ingredients through technique.

Coffee culture runs deep. Guatemala produces some of the world's finest Arabica beans—Antigua, Huehuetenango, and Atitlán regions are renowned. Traditional preparation is sweetened and strong, but specialty coffee shops in Antigua and Guatemala City now serve pour-overs and espresso that showcase the beans properly. Coffee fincas (farms) offer tours explaining cultivation at altitude.

Antigua's restaurant scene caters to expats and tourists. Hector's Bistro does farm-to-table with local ingredients, contemporary presentation, and solid technique ($15-25 per person). La Cocina de Señora Nica serves traditional cooking in home settings. No Michelin stars (Michelin doesn't cover Guatemala), but the quality exists—chefs trained abroad are returning to elevate traditional recipes.

Markets define food culture. Chichicastenango's Thursday and Sunday markets overflow with produce, chilies, chocolate, and street food. Antigua's market has vendors selling fresh tortillas, chilis rellenos (stuffed peppers), and atol (warm corn drink). Guatemala City's La Terminal market is chaotic but authentic.

Guatemalan agriculture centers on corn (over 50 varieties), black beans, coffee, cardamom (second-largest producer globally), sugar cane, and vegetables at various altitudes. The microclimates allow everything from tropical fruits at sea level to temperate vegetables in highlands. Chocolate is sacred—the Maya used cacao as currency and in ceremonies.

Food traditions remain strongly indigenous in rural areas. Mayan communities maintain pre-Columbian cooking methods: clay pots, wood fires, stone grinding tools. The tuj (traditional sauna-like structure) sometimes doubles for steaming tamales. Spanish conquest imposed new ingredients—pork, chicken, wheat, dairy—but didn't erase indigenous foodways.

Guatemalan cuisine deserves wider recognition. It's more complex than Mexican (which gets all the attention), more indigenous than Costa Rican, more diverse than Salvadoran. Every region offers distinct dishes: Cobán's kak'ik, Lake Atitlán's fish, Quetzaltenango's tacos. For travelers willing to eat where Guatemalans eat—in markets, at street stalls, in family comedores—the food is both deeply traditional and vibrantly alive.`
  },
  {
    name: 'Guinea',
    lat: 9.9456,
    lng: -9.6966,
    summary: `Guinean cuisine is West African cooking in its purest form—rice, sauces, palm oil, cassava, and fish or meat, prepared with techniques unchanged for generations. This isn't food designed for tourists; Guinea barely has tourists. This is everyday cooking for a country that's 85% Muslim, ethnically diverse (Fulani, Malinké, Soussou each with distinct dishes), and economically struggling despite natural resource wealth. The food reflects scarcity and abundance simultaneously: palm oil flows freely, but imported goods cost dearly. If you're eating in Guinea, you're experiencing authentic West Africa.

Rice is the foundation—specifically, broken rice called malo mali, which absorbs sauces better than intact grains. Guineans consume over 100kg of rice per person annually, one of the world's highest rates. Most meals center on a large bowl of rice with sauce poured over, eaten communally with right hands.

Maafe (peanut sauce) is ubiquitous: groundnut paste cooked with tomatoes, onions, okra, and whatever protein is available—chicken, fish, or beef. The sauce should be thick, rust-colored, slightly sweet from peanuts, with oil pooling at the surface. Served over rice, maafe is comfort food—rich, filling, and made from ingredients every Guinean household keeps stocked.

Footi is Guinea's distinctive contribution—black-eyed pea sauce thickened with baobab leaf powder (lalo), cooked with palm oil, smoked fish, and hot peppers. It's green, thick, slightly slimy from the okra-like quality of baobab leaves, and deeply savory from the fish. Footi divides people—the texture is challenging for outsiders, but Guineans love it as traditional food that connects to the Sahel's culinary traditions.

Sauce d'arachide (groundnut soup) appears at celebrations: meat (often beef) simmered in peanut sauce enriched with egusi (melon seeds), vegetables, and palm oil until everything melds. This is longer-cooking, more elaborate than daily maafe, reserved for guests and special occasions.

Tô (or fonio porridge) is Fulani/Peul staple—millet or fonio (an ancient grain native to West Africa) cooked into thick porridge, formed into balls, eaten with sauces. Fonio is Guinea's specialty; it grows in the Fouta Djallon highlands and is nutritionally superior to rice. Recent years have seen fonio marketed internationally as a "superfood," but in Guinea, it's peasant food—which doesn't diminish its importance.

Street food in Conakry: brochettes (grilled meat skewers), often beef or goat, charred over charcoal and sprinkled with spice mix. Akara (black-eyed pea fritters) fry at market stalls. Fried plantains appear everywhere. Baguette sandwiches—a French colonial legacy—get filled with omelets, mayonnaise, or Laughing Cow cheese.

Seafood dominates coastal Conakry. The Grand Marché and Madina Market sell fresh catches: barracuda, capitaine (Nile perch), bonga (small herring that's dried and smoked), and prawns. Grilled fish with onion-tomato relish and attiéké (fermented cassava couscous, borrowed from neighboring Côte d'Ivoire) is classic coastal eating.

Palm wine (bangui) and ginger juice are traditional drinks. Palm wine is fresh tree sap fermentation, sweet when fresh, increasingly alcoholic and sour as it ages. Ginger juice—fresh ginger blended with pineapple, sugar, and sometimes vanilla—is ubiquitous, sweet, spicy, refreshing in Guinea's heat.

High-end dining barely exists. Conakry has a handful of restaurants catering to expats and NGO workers: Le Petit Bateau serves French-Guinean fusion, Noom Hotel's restaurant offers international menus. Otherwise, food is street stalls, market vendors, and informal restaurants serving heaping plates for $2-5.

Agriculture centers on rice (though Guinea imports rice despite having arable land—infrastructure and investment gaps), cassava, palm oil, and peanuts. The Fouta Djallon highlands grow fonio, potatoes, and vegetables. Fishing employs coastal communities. Guinea exports cashews, though value-added processing happens elsewhere.

Food culture emphasizes communal eating—everyone around one large bowl, right hand only, eating from your section. Hosts serve guests first and most generously. Refusing food insults hospitality. Meals happen on floor mats or at low tables; cutlery is rare in traditional settings.

Guinean cuisine hasn't evolved toward haute gastronomy or fusion. There's no fine dining movement, no chefs seeking international recognition. The food remains rooted in necessity—feeding families with what grows locally, supplemented by imports when possible. The quality varies wildly: market food can be excellent when made with care, terrible when corners are cut.

For travelers, eating in Guinea means accepting that comfort and hygiene standards differ dramatically from Western expectations. Street food vendors may lack running water, refrigeration is inconsistent, and ingredients sit in tropical heat. Yet millions of Guineans eat this food daily without issue—it's a question of adaptation and caution. Stick to busy vendors with high turnover, avoid raw vegetables, drink bottled water, and embrace that this is food culture untouched by tourism.

Guinea's cuisine is challenging, unglamorous, and deeply authentic. It's West African cooking that hasn't been adapted, softened, or presented for outside palates. That authenticity is precisely its value—this is how people eat when they're not performing for visitors, when the food exists purely to sustain communities in a difficult environment. It's not a destination for foodies seeking the next trend, but for travelers interested in how the majority of West Africans actually eat, Guinea offers unvarnished truth.`
  },
  {
    name: 'Guinea-Bissau',
    lat: 11.8037,
    lng: -15.1804,
    summary: `Guinea-Bissau's cuisine is West African cooking with Portuguese colonial overlay and not enough prosperity to develop beyond sustenance. This is one of the world's poorest countries, politically unstable, with barely any tourism infrastructure—and the food reflects that reality. You're eating what locals eat because there's nothing else, and what locals eat is cashew fruit, fish, rice, and palm oil prepared using techniques that haven't changed in generations. It's simple, occasionally excellent when done with care, and utterly lacking in pretension.

Caldo de peixe is Guinea-Bissau's most recognizable dish—fish stew with onions, tomatoes, and palm oil, served over rice. The fish is whatever was caught that day: grouper, barracuda, sea bream. The broth should taste intensely of the sea, enriched with palm oil's richness and balanced with lime or lemon. Every coastal family makes their version; every grandmother claims hers is best. Served with white rice or occasionally with funge (cassava mash), caldo de peixe is daily eating.

Arroz de marisco (seafood rice) shows Portuguese influence—rice cooked with shrimp, crab, or mixed seafood, sofrito of tomatoes and peppers, finished with cilantro. It's Guinea-Bissau's version of paella or jollof, though simpler and more straightforward. The Bijagós Archipelago's fishing communities make excellent versions using fresh-caught seafood.

Chicken cafreal comes directly from Portuguese colonizers: chicken marinated in piri-piri (bird's eye chilies), garlic, paprika, and lime, then grilled or roasted. It's spicy, tangy, and one of the few dishes that transcends daily rice-and-sauce monotony. Cafreal appears in Bissau's better restaurants and at celebrations.

Cashews are Guinea-Bissau's primary export and cultural marker. The country produces huge quantities (ranked among world's top 10 producers), but most cashews get exported raw for processing elsewhere. The cashew fruit—the "apple" attached to the nut—goes to waste commercially but locals eat it fresh, juice it, or ferment it into strong liquor (caju). Cashew fruit is astringent, slightly sweet, with tannic bite. The fermented liquor tastes like harsh brandy with fruity undertones.

Street food in Bissau consists of fried fish, grilled meat skewers, and pão com chouriço (bread with Portuguese sausage). Fresh oysters appear at coastal markets, shucked to order, served with lime and piri-piri. They're exceptional—cold Atlantic waters produce clean-tasting bivalves—and cost almost nothing ($0.50-1 per dozen).

Mancarra (peanut sauce) appears frequently: groundnuts ground into paste, cooked with onions, tomatoes, and palm oil, served over rice with chicken or fish. It's the West African standard, found throughout the region with minor variations.

Palm wine is cultural glue—fresh sap tapped from palm trees, fermented naturally. Drink it fresh (sweet, only slightly alcoholic) or aged (sour, strongly alcoholic). Men gather to drink palm wine and discuss village affairs; it's social lubricant and tradition combined.

Portuguese pastéis (pastries) and flan appear in Bissau's few bakeries, remnants of colonial influence. They're inconsistent quality—good when made with care, terrible when shortcuts are taken.

Bissau has minimal restaurant scene—maybe a dozen sit-down places serving grilled fish, Portuguese-style chicken, and rice dishes. Hotel Azalai and Malaika have restaurants catering to NGO workers and business travelers, serving international menus at inflated prices ($15-25 per meal). Otherwise, food is market stalls and informal eateries.

Agriculture centers on cashews (70% of exports), rice (not self-sufficient; imports supplement), palm oil, peanuts, and fish. The Bijagós Archipelago's unique ecosystems include saltwater hippos and sea turtles but limited agricultural production. Most farming is subsistence-level; infrastructure gaps prevent commercial development.

Markets in Bandim (Bissau's main market) sell dried fish, palm oil, cassava, rice, vegetables, and fruit. Women dominate market vending. The commercial activity is vibrant despite the country's poverty—people need to eat, trade continues.

Food culture emphasizes communal eating from shared bowls, right hand only. Meals happen at floor level or low tables. Tea ceremony (ataya) follows Senegalese pattern—Chinese green tea prepared in three rounds, increasingly sweet, served in small glasses with much ceremony. It's hospitality and socializing, hours spent over tea and conversation.

Guinea-Bissau's cuisine hasn't developed beyond traditional forms. There's no fine dining, no fusion movement, no chefs innovating. The reasons are economic and political—a country struggling with coups, poverty, and narco-trafficking doesn't produce culinary innovation. The food serves its purpose: feeding people with available resources, maintaining cultural practices, providing comfort through familiar flavors.

For the rare travelers who visit Guinea-Bissau, food is not a highlight—it's fuel and cultural insight. The fresh seafood can be excellent, the Portuguese-influenced dishes offer variety, and the traditional cooking provides authenticity. But you're not coming here for the food; you're coming for the Bijagós Archipelago's pristine beauty, the cultural traditions, and the bragging rights. The food just happens to be what sustains you while you're here—simple, honest, and occasionally surprisingly good when circumstances align.`
  },
  {
    name: 'Guyana',
    lat: 4.8604,
    lng: -58.9302,
    summary: `Guyanese cuisine is Caribbean confusion in the best way—Indigenous Amerindian, African, Indian, Chinese, and British colonial influences crashed together creating food that doesn't fit South American stereotypes. The population is roughly 40% Indo-Guyanese, 30% Afro-Guyanese, plus Indigenous, Chinese, and mixed communities, each contributing dishes. The result is curries that rival anything in Trinidad, pepperpot that predates Columbus, and chow mein served with hot sauce. It's eclectic, unapologetically multicultural, and utterly unique to this sliver of South America that speaks English and cooks with scotch bonnets.

Pepperpot is the national dish and Amerindian in origin—a dark, sweet-salty stew made with cassareep (cassava root boiled down to thick, black syrup), meat (beef, pork, sometimes wild meat), cinnamon, and hot peppers, simmered for hours until everything melds. Cassareep both flavors and preserves the meat; traditional pepperpot kept at a low simmer could last weeks with meat added continually. Served with homemade bread or rice, pepperpot appears at Christmas especially, but year-round in Guyanese homes. The flavor is complex—sweet from cassareep, spicy from peppers, richly meaty, with cinnamon adding unexpected warmth.

Curry and roti came with Indian indentured laborers post-slavery, and Guyanese curry is now iconic. Chicken curry, goat curry, shrimp curry—all cooked with potatoes, Guyanese curry powder (heavy on cumin and turmeric), scotch bonnet peppers, and served with roti or rice. The curries are oil-rich, deeply spiced, and fiery. Roti comes two ways: dhalpuri (filled with ground split peas) or sada (plain). Tear off pieces, scoop curry, eat with your hands. Curry shops in Georgetown like Shanta's or Hack's Halaal serve massive portions for $5-8.

Cook-up rice is Afro-Guyanese comfort food—one-pot rice dish with beans (pigeon peas or black-eyed peas), coconut milk, and whatever meat or fish is available, cooked until rice develops a crispy bottom layer. It's Guyana's version of Caribbean rice-and-peas, but richer from coconut milk and often enhanced with salted meat or fish. Saturday cooking, celebration food, hangover cure.

Chinese influence brought fried rice and chow mein, but Guyanese versions are distinctly local—chow mein comes with curry powder and scotch bonnet peppers, creating fusion that confused Chinese visitors describe as "interesting." Chinese restaurants in Georgetown serve this hybrid cooking to everyone's satisfaction.

Metemgee is another Amerindian-origin dish: root vegetables (cassava, eddoe, yams, plantains) cooked in coconut milk with dumplings and salted fish or meat. It's starchy, filling, and perfect for fueling physical labor. The coconut milk richness balances the dense vegetables.

Street food and market culture thrive. Stabroek Market in Georgetown has vendors selling pholourie (fried split pea fritters) with tamarind sauce, bara (fried flatbread), and egg balls (hard-boiled eggs wrapped in split pea batter, fried). These are Indo-Guyanese snacks adapted from Indian chaat culture. Roasted corn, coconut water drunk straight from the nut, and black pudding (blood sausage) appear at stalls.

Guyana's rum culture is serious. Demerara rum (El Dorado brand) comes from sugar plantations along the Demerara River, aged in oak barrels, and rivals Caribbean rums. Banks beer is the local lager. Guyanese drink mauby (bittersweet bark drink), sorrel (hibiscus drink at Christmas), and ginger beer (the real kind, spicy and fermented).

Seafood is excellent despite being underutilized. Bangamary (a river fish) gets curried or fried. Butter fish, snapper, and shrimp appear in coastal restaurants. The fish are either ocean-caught or river-caught—Georgetown sits on the Atlantic but the Demerara and other rivers also provide.

Cassava bread is Indigenous tradition—cassava root grated, squeezed to remove poisonous liquid (handled properly, otherwise you die), toasted on griddles into flatbread. It's still made in Amerindian communities, sold in Georgetown markets. Farine (cassava meal) gets eaten as breakfast or side dish, cooked with butter and sugar.

Georgetown's restaurant scene is limited. Backyard Café serves elevated Guyanese—pepperpot, curries, metemgee—with contemporary presentation ($10-20). Oasis Café does fusion. International hotels like Pegasus serve safe, boring menus for business travelers. Otherwise, food is street stalls, cook shops (small eateries), and rum shops.

Agriculture centers on rice (Guyana exports rice regionally), sugar cane (colonial plantation crops), coconut, cassava, and tropical fruits. Fishing employs coastal communities. The interior provides wild game—deer, capybara, agouti—though hunting regulations have tightened.

Food traditions emphasize multicultural celebration—Diwali brings Indian sweets, Christmas means pepperpot, Easter brings hot cross buns (British influence). Marriages blend cultures: Indian-Guyanese weddings serve both curries and cook-up rice. The food reflects Guyana's diversity, everyone borrowing from everyone else.

No Michelin stars (Michelin doesn't cover Guyana), no fine dining movement. Guyanese cuisine remains proudly unpretentious, cooked in home kitchens and small shops, served in massive portions, intensely flavored. The diaspora in New York, Toronto, and London maintains these traditions—Guyanese restaurants in Queens serve the same pepperpot and curry that Georgetown's shops do.

For travelers, Guyanese food is discovery—this isn't cuisine with international reputation, media coverage, or cookbook canonization. It's fusion that happened organically through centuries of people living together, adopting each other's ingredients and techniques. The result is delicious, distinctive, and wholly underappreciated beyond Guyanese communities. Come hungry; the portions are massive and refusing seconds insults your hosts.`
  },
  {
    name: 'Haiti',
    lat: 18.5944,
    lng: -72.3074,
    summary: `Haiti's food culture is one of the Caribbean's richest and most tragically underappreciated—a Creole cuisine born from African, French, Taíno Indigenous, and Spanish influences, refined over centuries into something distinctly Haitian. But writing about Haitian cuisine in late 2025 feels absurd when most Haitians can't access adequate food due to gang violence and state collapse. Still, Haitian cuisine exists, persists in diaspora communities, and deserves recognition as culinary heritage that will outlive the current crisis. When conditions eventually stabilize, the food traditions will remain as a bridge back to normalcy.

Griot is Haiti's soul food—pork shoulder marinated in citrus and scotch bonnet peppers, boiled until tender, then fried until crispy. Proper griot has crunchy exterior, succulent interior, acidic brightness from the marinade, and enough flavor to make you understand why Haitians crave it. Served with pikliz (spicy pickled vegetables—cabbage, carrots, onions, scotch bonnets in vinegar), fried plantains, and rice with beans. Street vendors traditionally fried griot in huge pots over charcoal; the smoke and sizzle were Port-au-Prince's soundtrack. Now, with collapse, even this basic pleasure is often unavailable.

Diri ak djon djon is special-occasion rice—cooked with black mushrooms (djon djon) endemic to Haiti that turn the rice gray-black and impart an earthy, almost truffle-like flavor. Reserved for weddings, holidays, celebrations. The mushrooms are expensive and increasingly rare due to overharvesting. When made properly, djon djon rice is elegant, complex, and unmistakably Haitian. Served with sauce pwa (bean sauce) and meat, it represents Haitian cuisine at its most refined.

Soup joumou (pumpkin soup) carries profound symbolism—it was forbidden to enslaved Haitians but enjoyed by French colonizers. After independence in 1804, freed Haitians reclaimed it, and now every Haitian family eats soup joumou on January 1st to celebrate independence. The soup includes pumpkin, beef, pasta, vegetables, and spices, simmered into hearty, golden stew. It's not just food; it's resistance, freedom, and national identity in a bowl.

Lambi (conch) appears grilled, in stews, or creole-style with tomatoes, peppers, and spices. Conch is tough and requires pounding or pressure-cooking to tenderize, but when done right, it's tender and sweet. Overfishing has depleted conch populations, making it increasingly expensive and less available.

Tassot (fried beef or goat) is deeply seasoned meat, boiled to remove fat, then fried crispy. Similar to griot but using beef or goat instead of pork. Served with the same accompaniments—pikliz, plantains, rice—tassot is protein-forward comfort food.

Pikliz deserves standalone mention—Haiti's hot sauce consists of shredded cabbage, carrots, onions, and scotch bonnet peppers pickled in vinegar. It sits on every table, gets spooned onto everything, and defines Haitian flavor profiles. Each family's pikliz is different—more or less spicy, various vegetables, aging time. The vinegar brightness and pepper heat cut through rich fried foods perfectly.

Haitian coffee was once world-renowned. The country produced premium beans exported to France. Post-earthquake and with infrastructure collapse, production has declined dramatically. Still, when you find properly prepared Haitian coffee—dark-roasted, strong, sweet—it's extraordinary.

Rum culture thrives despite everything—Barbancourt rum, Haiti's premium brand, has been produced since 1862 using double distillation and sugar cane (not molasses). The aged versions rival French Martinique's rhum agricole. Clairin, raw unaged cane spirit, is peasant fuel—rough, powerful, variable quality.

Street food historically defined Port-au-Prince: fritay (fried foods—griot, plantains, marinad/fried dough), tablet (peanut brittle), pen patat (sweet potato bread), and akasan (cornmeal drink). Women vendors (madan sara) transported food from rural areas to cities, controlling informal food economy. Gang violence has decimated this system—vendors can't travel, markets are unsafe, the food economy has collapsed.

The diaspora—massive Haitian communities in Miami, New York, Montreal, Paris—maintains food traditions. Restaurants like Chef Creole in Miami and Naomi's Garden in Brooklyn serve authentic griot, djon djon rice, and soup joumou. These diaspora restaurants preserve cuisine that's increasingly difficult to experience in Haiti itself.

Haitian agriculture produced mangoes (excellent variety called Madame Francis), sugar cane, coffee, cacao, rice, and beans. Farming employed the majority of Haitians before recent collapse. The countryside traditionally fed the cities; now, with transportation controlled by gangs, even that basic function fails.

Food traditions emphasize communal eating, festival foods, and hospitality. Despite extreme poverty, Haitians shared what they had. The practice of sharing meals builds social bonds that have been stressed but not broken by crisis.

Writing about Haitian cuisine feels like describing a ghost—the food exists primarily in memory and diaspora now. The recipes, techniques, and flavors persist, but the context has been destroyed. Port-au-Prince's restaurants, street vendors, and markets that once defined daily life are shuttered or operating sporadically. Food insecurity affects half the population; discussing fine points of djon djon preparation seems obscene when people are starving.

Yet Haitian cuisine matters precisely because of this crisis. Food traditions are cultural heritage, resilience, and identity. When (if) stability returns, the food will be part of rebuilding—street vendors will fry griot again, families will gather for soup joumou, and the diaspora will return to share techniques preserved abroad. Until then, Haitian food lives in Brooklyn, Miami, Montreal, and in the memories of those who remember when eating well in Haiti was possible. The recipes are resistance, the continuation of tradition is hope, and recognizing Haitian cuisine's richness is one small way of insisting that this crisis is not permanent, that Haiti's culture survives, and that better days must come.`
  }
]

async function main() {
  console.log('🍽️  Starting Food & Cuisine writeup generation for Batch 5...')
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
  console.log('✨ FOOD BATCH 5 COMPLETE!')
  console.log('='.repeat(70))
  console.log(`   Successful: ${successful}/${FOOD_WRITEUPS.length}`)
  console.log(`   Failed: ${failed}`)
  console.log('\n📊 Countries processed:')
  FOOD_WRITEUPS.forEach(w => console.log(`   ✓ ${w.name}`))
  console.log('\n🎉 All food & cuisine writeups have been saved to the database!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
