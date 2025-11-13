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
    name: 'Luxembourg',
    lat: 49.8153,
    lng: 6.1296,
    summary: `Luxembourg's cuisine is the rich kid at the European table—literally. The world's wealthiest nation per capita has a food scene that punches way above its tiny size, blending French finesse with German heartiness and creating something distinctly its own. This is a country where Michelin stars outnumber many regions ten times its size, where traditional comfort food coexists with cutting-edge gastronomy, and where wine production thrives despite being one of Europe's smallest appellations.

The national dish is Judd mat Gaardebounen—smoked pork collar with broad beans in a cream sauce that's pure comfort, the kind of thing that sustained farmers and now anchors bistro menus. Bouneschlupp, a green bean soup enriched with bacon and potatoes, appears on every traditional menu. Kuddelfleck (fried tripe) might test adventurous eaters, but it's beloved locally. Gromperekichelcher, crispy potato pancakes sold at markets and festivals, represent Luxembourg's best street food—simple, addictive, perfect with apple sauce or sour cream.

The Moselle Valley runs along Luxembourg's eastern border, producing elegant Rieslings, Pinot Blancs, and Crémant de Luxembourg that hold their own against German and French neighbors. The wine route through villages like Remich and Grevenmacher offers tastings in family cellars that have produced wine for generations. Luxembourg consumes more wine per capita than almost anywhere on Earth, and the quality of local production justifies the habit.

But Luxembourg's real culinary story is its high-end scene. With 13 Michelin-starred restaurants for a population of just 650,000, Luxembourg has one of the world's highest densities of fine dining. Chef Léa Linster brought Luxembourg its first three-star chef recognition (though the restaurant now operates at two stars), while Mosconi has held two stars for years with its refined Italian cuisine. The capital's restaurant scene reflects the country's international banking population—Japanese, Indian, Portuguese, and Italian restaurants operate at levels that would impress in any European capital.

Traditional Luxembourgish cuisine draws heavily from both France and Germany. From France comes technique and refinement; from Germany, portions and a love of pork. Träipen, a blood sausage similar to French boudin noir, appears in autumn. Quetschentaart, a plum tart, celebrates late summer harvests. At Schueberfouer, Luxembourg's massive annual fair, you'll find everything from grilled sausages to Gromperekichelcher to international fair food.

The agricultural side is modest—small-scale dairy farming produces excellent butter and cheese, though Luxembourg imports most food. What they do produce, they do well: artisanal honey, local game from the Ardennes forests, and increasingly, craft beer that's shaking up the wine-dominated drink culture.

Luxembourg City's Grund neighborhood, nestled in a valley beneath the old town, hosts cozy bistros serving traditional fare, while Clausen has become the city's hipster food and nightlife district. The Wednesday and Saturday markets at Place Guillaume II sell local produce, cheeses, and prepared foods that show Luxembourg's agricultural side still exists beneath all that banking wealth.

This is a country where you can eat very, very well, whether you're dropping hundreds at a Michelin temple or grabbing Gromperekichelcher from a market stall. Luxembourg proves that size doesn't matter when you've got resources, talent, and a population that genuinely appreciates good food.`
  },
  {
    name: 'Madagascar',
    lat: -18.7669,
    lng: 46.8691,
    summary: `Madagascar's cuisine is African food reimagined through a distinctly Asian lens, which makes perfect sense once you remember that Malagasy people arrived from Southeast Asia around 350 BCE. The result is a culinary tradition unlike anywhere else in Africa—rice-obsessed, flavor-forward with ginger and vanilla, and featuring ingredients that range from zebu cattle to some of the world's finest vanilla beans.

Romazava, the national dish, is a meat and greens stew that varies by region but typically combines zebu beef with a mix of leafy greens called brèdes, flavored with ginger, tomatoes, and onions. It's comfort food that reflects Madagascar's limited ingredient palette stretched into something deeply satisfying. Ravitoto, shredded cassava leaves cooked with coconut milk and served with pork, shows the West African influence that mingles with the Indonesian. Mofo gasy, rice flour pancakes sold by street vendors every morning, are the Malagasy breakfast—sweet, fluffy, and best eaten hot with coffee.

Rice is everything here. "Tsy misy vary, tsy misy saina" goes the Malagasy saying: "No rice, no sense." Vary (rice) accompanies every meal, often multiple times daily. The rice is typically local red rice or white rice, and Malagasy people consume around 120 kilograms per person annually—among the world's highest rates. The water left over from cooking rice becomes ranonapango, a mildly flavored drink served throughout the day.

The coasts offer seafood diversity: prawns from the northwest, tuna, octopus, and in fancier restaurants, langouste (spiny lobster) that Madagascar exports but locals rarely afford. Street food includes masikita, zebu meat skewers grilled over charcoal, and sambos, a pastry clearly descended from Indian samosas but filled with local ingredients. The markets overflow with tropical fruits—lychees, mangoes, jackfruit, and exotic local fruits like voahangy.

Then there's vanilla. Madagascar produces about 80% of the world's natural vanilla, primarily from the SAVA region in the northeast. The price fluctuations of vanilla beans create boom-and-bust cycles in farming communities, but the quality is unmatched. Locals use vanilla more liberally than the rest of the world—it flavors drinks, desserts, and even savory dishes. The aroma in vanilla-growing regions during harvest is intoxicating.

High-end dining barely exists outside Antananarivo and a few resort areas. In the capital, you'll find French-influenced restaurants—colonial legacy lingers in culinary expectations—and increasingly, fusion spots attempting to elevate traditional Malagasy ingredients with modern technique. But fine dining isn't Madagascar's strength; the food culture is fundamentally about sustenance and family cooking.

The agricultural context is crucial: Madagascar has extraordinary biodiversity but struggles with food security. Small-scale farming dominates, with rice paddies covering much of the highlands, cassava cultivation as a backup starch, and zebu cattle providing both meat and cultural significance—wealth is measured in zebu, and ceremonial sacrifices mark important occasions.

French colonial influence persists in baguettes appearing at every meal, in the prevalence of French-speaking restaurants in cities, and in a fondness for wine among elites despite no local production. But the food remains distinctly Malagasy—a cuisine that developed in isolation, blending its Southeast Asian roots with African ingredients and French technique into something you won't find anywhere else on the continent.`
  },
  {
    name: 'Malawi',
    lat: -13.2543,
    lng: 34.3015,
    summary: `Malawi's food culture centers almost entirely on nsima, a thick maize porridge that's Southern Africa's foundational carbohydrate. To understand Malawian cuisine is to understand that nsima isn't just food—it's the meal, with everything else serving as relish or accompaniment. This is subsistence agriculture translated to the plate, shaped by Lake Malawi's freshwater bounty and limited by being one of Africa's least developed economies.

Nsima (called sadza in Zimbabwe, ugali in East Africa, pap in South Africa) is made from ground white maize cooked with water until it reaches a firm, dough-like consistency. You eat it with your hands, forming a ball and using it to scoop up relishes. The relishes—called ndiwo in Chichewa—provide the flavor: small dried fish called usipa or chambo (Lake Malawi's prized tilapia), leafy greens like mustard greens or pumpkin leaves, beans, or occasionally meat. A typical meal is nsima with a vegetable ndiwo and maybe some protein if you're fortunate.

Lake Malawi, one of Africa's Great Lakes, dominates the food culture along its shores. Chambo, a tilapia species endemic to the lake, is Malawi's most celebrated fish—white-fleshed, mild, and excellent grilled or fried. Usipa, tiny sardine-like fish, are caught with lights at night, dried in the sun, and stored for months. They're a protein staple for lakeside communities. Kampango, a catfish that can grow enormous, appears at special occasions. In markets near the lake, women sell fish fresh or sun-dried, the smell announcing the stalls from blocks away.

Street food is modest but essential. Mandasi, slightly sweet fried dough, serves as breakfast or snack. Samosas, inherited from Malawi's Indian population, are sold everywhere. Roasted maize cobs appear during harvest season. In cities, you'll find vendors selling chips (French fries), often paired with grilled chicken. Skewered meat, when available, gets the generic name "kebab" regardless of preparation.

Malawi grows tea in the highlands—the estates around Thyolo and Mulanje produce quality black teas exported globally, though locals drink heavily sweetened milky tea. Coffee production exists but is smaller scale. The real drinks are Carlsberg (brewed locally under license) and chibuku, a traditional opaque beer made from maize or sorghum, sold in cartons and consumed communally.

High-end dining barely exists. In Lilongwe and Blantyre, a handful of restaurants serve tourists and NGO workers—Indian restaurants are often the best bet, legacy of Malawi's small but influential Indian community. The tourism lodges around the lake and in Liwonde National Park offer the only real fine dining, usually attempting "African fusion" with varying success.

Agricultural products reflect subsistence priorities: maize dominates everything (Malawi suffered severe food shortages when maize harvests fail), followed by cassava, sweet potatoes, and beans. Tobacco has historically been a major cash crop, though global markets have declined. Rice paddies are expanding around the lake. Groundnuts (peanuts) provide both snacks and protein. Mangoes flood markets during their season, often the most exciting culinary event of the year.

Food traditions revolve around sharing. Meals are communal, eaten from shared plates. Hospitality means feeding guests, even if your own supplies are limited. The challenge is that Malawi faces periodic food insecurity—droughts, flooding, and economic instability mean that for many Malawians, getting enough calories matters more than culinary diversity.

There's no pretense about Malawian cuisine—this is food shaped by necessity, by what grows in challenging conditions, by the rhythms of lake and land. It's not a cuisine that will attract food tourism, but it tells an honest story about how millions of people eat, about making something nourishing from limited ingredients, and about Lake Malawi's central role in providing protein to a landlocked nation with few other resources.`
  },
  {
    name: 'Malaysia',
    lat: 4.2105,
    lng: 101.9758,
    summary: `Malaysian food is a controlled chaos of competing flavors—Malay, Chinese, and Indian traditions colliding on one of the world's great culinary crossroads. This is where nasi lemak vendors operate at 2 AM, where hawker centers serve as Malaysia's true temples, and where the question "Have you eaten?" serves as the national greeting. The food scene here rivals anything in Asia for diversity, intensity, and sheer deliciousness, all at prices that make fine dining seem absurd.

Nasi lemak is the unofficial national dish—coconut rice served with sambal, fried anchovies, peanuts, boiled egg, and cucumber. It's breakfast, lunch, or dinner, available from street carts and hotel buffets. The magic is in the sambal, that incendiary chile paste that varies by cook but always delivers heat and depth. Rendang, originally from neighboring Indonesia but claimed enthusiastically by Malaysia, is beef slow-cooked in coconut milk and spices until the sauce reduces to coat the meat—complex, rich, and one of the world's great curries.

Penang is food-obsessed even by Malaysian standards. Char kway teow, flat rice noodles stir-fried with Chinese sausage, prawns, cockles, and bean sprouts over intense heat, epitomizes wok hei—that elusive breath of the wok that separates great stir-fry from merely good. Penang's asam laksa, a sour fish-based noodle soup with tamarind and torch ginger, ranked among the world's best foods by CNN. Roti canai, flaky Indian flatbread served with dal or curry, is the Malaysian breakfast of champions.

The hawker center culture is where Malaysian food lives. These open-air food courts—kopitiam in local parlance—operate from morning to late night. Individual stalls specialize in one dish perfected over years: Hokkien mee here, satay there, cendol for dessert. Ordering is a multilingual dance, and watching the speed and skill of hawker cooks is entertainment itself. Air-conditioned malls now host "hawker centers," attempting to sanitize the experience but losing some soul in translation.

Malay food centers on rice and noodles with curries and sambals. Chinese Malaysian food runs from Cantonese dim sum to Hainanese chicken rice to Hokkien dishes adapted to local tastes. Indian Malaysian food spans South Indian dosas and North Indian tandoori, plus uniquely Malaysian creations like murtabak. Then there's Nyonya cuisine, the Peranakan fusion of Chinese and Malay that produces dishes like ayam pongteh and keluak.

Kuala Lumpur's high-end scene has exploded. The city now has multiple Michelin-starred restaurants (the guide only launched for KL in 2023), from Dewakan's progressive Malaysian cuisine using indigenous ingredients to French and Japanese fine dining that competes with anywhere in Asia. But the beautiful truth is that some of Malaysia's best food costs a few ringgit at hawker stalls where grandmothers have perfected recipes over decades.

Malaysia grows palm oil (controversial but economically massive), tropical fruits that flood markets with rambutans, mangosteens, durian, and jackfruit, rubber, and rice in the northern paddies. The durian obsession reaches peak intensity here—Musang King is the Rolls-Royce of durians, with whole markets devoted to this polarizing fruit. Coffee culture combines traditional kopi (strong coffee with condensed milk) and a booming specialty coffee scene.

Sabah and Sarawak on Borneo add another dimension—indigenous ingredients like jungle ferns, wild boar, and fermented foods unknown in Peninsular Malaysia. Sarawak's laksa is entirely different from Penang's version. This regional diversity means you could spend months eating through Malaysia without repetition.

Food traditions here are inseparable from multicultural coexistence. Malays break fast during Ramadan with special dishes, Chinese celebrate New Year with reunion dinners, Indians mark Deepavali with sweets, and everyone joins every celebration because it means more food. Malaysia's food scene represents pluralism made edible—sometimes tensions exist, but at the hawker center, everyone's equal in the pursuit of deliciousness.`
  },
  {
    name: 'Mali',
    lat: 17.5707,
    lng: -3.9962,
    summary: `Malian cuisine is West African food shaped by the Sahel's harsh realities—millet and rice as foundations, limited vegetables, and cooking techniques designed to stretch scarce ingredients. This is food from one of the world's poorest countries, where the Niger River's bounty and ancient trading traditions provide culinary highlights, but where for most people, eating means subsistence more than pleasure.

Tiguadege na, often called "Malian peanut stew," is the closest thing to a national dish—meat (typically chicken or lamb) cooked in a sauce of tomatoes, peanut butter, and vegetables, served over rice. The peanut provides both protein and richness in a country where neither is guaranteed. Maafe, a similar groundnut stew, appears throughout West Africa but holds particular importance in Mali. The sauce gets its depth from slow cooking and the quality of local peanuts, which Mali produces in quantity.

Jollof rice, the dish that inspires friendly warfare across West Africa, appears in Mali with local variations—rice cooked in tomato sauce with vegetables and sometimes meat or fish. Malian jollof doesn't compete with Nigeria or Ghana for fame, but it feeds people reliably. Riz sauce arachide combines rice with peanut sauce, another variation on Mali's peanut theme. Along the Niger River, fresh fish—capitaine (Nile perch) or tilapia—grilled and served with rice becomes the luxury version.

Millet remains fundamental, particularly in rural areas. Tô, a thick millet porridge similar to West African fufu, serves as the starch base eaten with sauces. It's nutritious, filling, and cheap—qualities that matter enormously. Dégué, sweetened millet porridge with yogurt, serves as breakfast or dessert. Millet's role reflects its ability to grow in the Sahel's difficult conditions where rice cultivation fails.

Street food in Bamako centers on practicality: brochettes (skewered grilled meat), fried plantains, beignets (fried dough), and dibi (grilled lamb). Women sell meals from bowls balanced on their heads—rice with sauce, cooked in large pots and portioned out. Coffee and tea culture here is spectacular—strong espresso-like coffee served in tiny cups, and tea ceremonies where heavily sugared green tea is poured from height to create foam.

Mali's connection to the ancient trans-Saharan trade routes means spices and preserved foods have long history—dried fish, dried meat, and preservation techniques necessary when refrigeration doesn't exist. The markets in Djenné or Mopti show this trade in action, though current instability has disrupted traditional patterns.

High-end dining essentially doesn't exist in Mali. Bamako has a handful of restaurants serving French-influenced cuisine to expats and NGO workers, and tourist hotels attempt international standards. But Mali's food scene isn't about restaurants—it's about home cooking, market meals, and the social aspects of sharing food.

Agriculture dominates Mali's economy: millet, sorghum, and rice cultivation (particularly around the Niger's inland delta), cotton as a cash crop, peanuts, and small-scale vegetable farming. Fishing communities along the Niger and its tributaries provide crucial protein. Shea nuts produce butter used in cooking and cosmetics. The agricultural calendar dictates eating patterns—the "hungry season" before harvests when food supplies run lowest is a genuine annual concern.

The Tuareg, Dogon, Bambara, and other ethnic groups each maintain food traditions, though poverty and instability have eroded some diversity. The Dogon are known for millet beer and specific preparations of millet and grain. The Tuareg's nomadic heritage shows in preserved foods and tea culture.

Eating traditions emphasize communal meals from shared bowls, using the right hand, and hospitality that demands feeding guests regardless of your own circumstances. Malian hospitality is legendary even when resources are scarce—refusing food can cause genuine offense.

Mali's food tells a story of adaptation to difficult environments, of making do with what the Sahel provides, and of a culinary culture that has sustained complex civilizations for centuries despite limited ingredients. This isn't cuisine that will attract food tourism, but it's honest food that reveals how people live in one of Africa's most challenging environments—and how ancient traditions of hospitality and sharing persist despite everything.`
  },
  {
    name: 'Mauritania',
    lat: 21.0079,
    lng: -10.9408,
    summary: `Mauritanian cuisine is Saharan food influenced by Arab Bedouin traditions and West African flavors, creating a distinctive culinary culture where dates and dried meat sustain desert travelers, where thieboudienne arrives from neighboring Senegal, and where tea ceremonies elevate hospitality to art form. This is one of the world's least visited countries, and the food reflects isolation, desert adaptation, and the mixing of Arab and African traditions.

Thieboudienne (pronounced cheb-oo-jen), borrowed from Senegal but beloved in Mauritania, is the national dish—fish cooked with tomato sauce, vegetables, and rice. The fish is often stuffed with parsley, garlic, and pepper, then simmered with tomatoes, cabbage, carrots, and cassava until the rice absorbs everything into a deeply flavored one-pot meal. It's West African food that crossed into Mauritania and stuck.

Mechoui, whole roasted lamb or goat, represents celebration food—special occasions mean communal roasting of meat, often stuffed with rice. In the desert regions, camel meat replaces lamb, and the meat is often dried and preserved as guedid. This dried, spiced meat can last months without refrigeration, essential for nomadic life. Cherchem, another preparation, involves slow-cooking meat with milk—unusual but traditional among Mauritanian herders.

Couscous appears frequently, inherited from North African traditions. It's typically served with vegetables and meat, the small grains steamed and fluffy when done properly. Rice has become more common than couscous in coastal areas with Senegalese influence. Along the Atlantic coast, fresh fish—sea bream, mullet, grouper—is grilled or prepared in sauces, a welcome protein source in a country where food security remains precarious.

The real star is the tea ceremony. Mauritanian tea culture is elaborate: Chinese green tea boiled with sugar (enormous amounts) and fresh mint, served in three rounds with different sugar levels and flavors. "Le premier est amer comme la mort, le deuxième est fort comme la vie, le troisième est doux comme l'amour"—first bitter like death, second strong like life, third sweet like love. The ceremony can last hours, the preparation and pouring a social ritual where business happens, relationships form, and time slows.

Dates provide essential calories and nutrients, growing in oasis towns like Atar. Fresh dates during harvest season are extraordinary, and dried dates become portable energy. Mahfe, a peanut-based sauce, shows West African influence. Lakh, millet porridge with sour milk, serves as breakfast in many homes.

Street food in Nouakchott, the capital, is minimal—small vendors sell sandwiches, fataya (fried pastries with fish or meat), and coffee. The Lebanese diaspora has brought shawarma stands. But street food culture isn't developed like in West African cities; most eating happens in homes or small restaurants.

High-end dining doesn't exist in Mauritania. A few hotels in Nouakchott serve international cuisine to expats, and French influence persists in some restaurant offerings, but this isn't a country where dining out is cultural practice. Home hospitality defines the food experience.

Agriculture fights against the Sahara. The Senegal River valley allows some cultivation—millet, sorghum, dates in oases, and small-scale vegetable farming. But Mauritania imports most food. Fishing along the Atlantic coast provides both domestic protein and export revenue—these are some of the world's richest fishing waters. Livestock—camels, goats, sheep—provide meat, milk, and cultural significance for Arab-Berber nomadic populations.

Food traditions here intertwine with nomadic heritage. Meals are communal, eaten from shared dishes with right hand. Refusing food or tea is serious breach of hospitality. Among traditionally nomadic populations, force-feeding girls (leblouh) to achieve plumpness as beauty standard has ancient roots, though it's increasingly controversial.

Mauritanian cuisine won't make international headlines, but it represents adaptation to one of Earth's most unforgiving environments. The food tells stories of desert survival, of Arab and African fusion, of how ancient trade routes brought tea from China and spices from distant lands. It's cuisine of necessity elevated by hospitality traditions that demand feeding guests abundantly despite scarcity—a tension that defines Mauritanian food culture.`
  },
  {
    name: 'Mexico',
    lat: 23.6345,
    lng: -102.5528,
    summary: `Mexican food is one of the world's great cuisines, elevated to UNESCO Intangible Cultural Heritage status, and for good reason—this is cooking built on 3,000 years of corn cultivation, colonial-era fusion, and regional diversity that means you could eat a lifetime without exhausting the variations. From Oaxacan moles to Yucatecan cochinita pibil, from Mexico City's taco stands to Ensenada's fish tacos, this is food that's simultaneously ancient and constantly evolving.

Let's start with corn. Maíz isn't just an ingredient; it's the foundation of Mexican civilization. Tortillas, made from nixtamalized corn (treated with lime to unlock nutrients), are present at every meal. Tamales wrap corn masa around fillings of chicken, pork, chile, or sweet ingredients, steamed in corn husks or banana leaves. Pozole, hominy stew with pork or chicken, transforms corn into something ceremonial—pre-Hispanic origins meet Spanish influences in a bowl that varies dramatically by region.

Mole represents Mexican cuisine's complexity. Oaxaca claims seven classic moles, each requiring 20-30 ingredients and hours of preparation. Mole negro, dark and mysterious with chocolate, chile, and burnt ingredients. Mole amarillo, bright with guajillo chiles. Puebla's mole poblano, chocolate-rich and served over turkey or chicken, is what most people picture. These aren't sauces you improvise—they're regional heritage encoded in recipes passed through generations.

Tacos deserve their own dissertation. Al pastor—pork marinated in chiles and spices, cooked on a vertical spit, shaved thin and topped with pineapple—comes from Lebanese immigration but is now quintessentially Mexican. Carnitas, pork braised in its own fat until tender, from Michoacán. Barbacoa, lamb or beef wrapped in maguey leaves and slow-cooked underground. Fish tacos from Baja California. Tacos de canasta, steamed and sold from baskets by bicycle vendors. The variations are endless, and every region insists theirs is superior.

Street food in Mexico operates at a level that would bankrupt most restaurants—tlayudas in Oaxaca (massive crispy tortillas), quesadillas in Mexico City (which may not contain cheese despite the name), elotes (grilled corn slathered with mayo, cheese, chile, and lime), churros, marquesitas in Yucatán. The morning torta stands, the nighttime taco carts after bars close—street food provides Mexico's culinary heartbeat.

Regional specialties reveal Mexico's geographic diversity. Yucatán's cochinita pibil (achiote-marinated pork), poc chuc, and papadzules show Mayan influence. Veracruz's seafood and Afro-Caribbean flavors. Baja's wine country and innovative restaurants. Northern Mexico's carne asada and flour tortillas (a northern aberration). Puebla's chiles en nogada, poblano peppers stuffed with picadillo, covered in walnut sauce and pomegranate seeds—the colors of the Mexican flag.

Mexico's high-end dining has exploded. Mexico City now ranks among Latin America's top food cities, with restaurants like Pujol, Quintonil, and Sud 777 reinterpreting Mexican ingredients through modernist techniques. Enrique Olvera at Pujol has become Mexican cuisine's global ambassador. The country has multiple Michelin-starred restaurants since the guide arrived in 2024. But the beautiful truth is that a taco stand might deliver more satisfaction than any fine dining experience—Mexican food doesn't need white tablecloths to achieve greatness.

Mexican agriculture is extraordinary: corn varieties in the hundreds, chile peppers from mild to murderous, avocados (mostly from Michoacán's increasingly conflict-ridden growing regions), tomatoes, beans, cacao, vanilla, tropical fruits, and increasingly, wine from Valle de Guadalupe. Mezcal and tequila—both agave spirits—represent serious craft, not spring break shots. The terroir conversations around mezcal match wine snobbery, with wild-fermented, single-village mezcals commanding serious money.

Food traditions intertwine with identity. Day of the Dead means pan de muerto and favorite foods placed on ofrendas. Tamales at Christmas. Rosca de reyes for Epiphany. Regional festivals celebrate specific dishes. The tradition of multi-generational knowledge transfer, especially from abuelas, keeps authenticity alive even as modernization accelerates.

Mexican food's UNESCO recognition acknowledges what anyone who's eaten well in Mexico knows—this is cuisine with depth, history, and diversity that rivals anywhere on Earth. The ingredients, techniques, and traditions create food culture where the $2 taco and the $200 tasting menu both represent excellence, just expressed differently.`
  },
  {
    name: 'Moldova',
    lat: 47.4116,
    lng: 28.3699,
    summary: `Moldovan cuisine is Eastern European comfort food with Romanian soul, shaped by fertile soil that makes Moldova a garden between empires. This tiny nation—Europe's poorest by some measures—produces extraordinary wine, grows vegetables and fruits with intensity, and cooks food that prioritizes flavor over presentation. The cuisine blends Romanian traditions with Soviet influence and Ukrainian touches, creating something distinct despite cultural overlaps.

Mămăligă, cornmeal porridge similar to Italian polenta or Romanian polenta, serves as Moldova's foundational starch. It's cooked until firm, sliced, and served with sour cream, brânză (local cheese), or alongside stews. During Soviet times when bread was scarce, mămăligă filled stomachs. Today it's comfort food nostalgia. Sarmale, cabbage rolls stuffed with pork and rice, appear at every celebration—Christmas, weddings, Sunday dinners. The preparation is labor-intensive, usually involving multiple generations of women rolling dozens of sarmale.

Plăcintă defines Moldovan food culture—savory or sweet pies filled with brânză (salty cheese), potatoes, cabbage, pumpkin, or cherries. Every household has a plăcintă recipe, and claiming your grandmother made the best is national sport. They're sold in markets, bakeries, and from roadside vendors. The cheese versions, with local brânză de burduf (sheep cheese aged in pine bark), are particularly beloved.

Zeamă, chicken soup with vegetables and noodles, serves as Moldova's cure-all—hangovers, illness, bad moods all supposedly yield to a good zeamă. Ciorbă, sour soups using fermented wheat bran or lemon juice for tang, come in endless variations: ciorbă de burtă (tripe soup), ciorbă de fasole (bean soup), ciorbă de perisoare (meatball soup). The sour note distinguishes them from regular soups and marks Moldovan/Romanian cuisine distinctly.

Moldovan wine is the real story. This is one of Europe's oldest wine regions, with evidence of viticulture dating back 5,000 years. The Mileștii Mici wine cellars extend 200 kilometers underground, holding nearly 2 million bottles—the Guinness record holder for largest wine collection. Cricova's underground wine city includes streets named after grape varieties. The wines themselves—Fetească Neagră, Rara Neagră, Fetească Albă—are indigenous varieties that deserve international recognition but remain obscure due to Moldova's post-Soviet economic struggles.

Soviet legacy appears everywhere: processed meats, Soviet-style salads (Olivier salad remains popular), and a fondness for mayonnaise. Russian and Ukrainian influences mean borscht, pelmeni (dumplings), and vareniki appear alongside Romanian dishes. The food reflects Moldova's geographic position—pulled between Romania, Ukraine, and Russia, creating hybrid cuisine.

Street food includes plăcintă from market stalls, shawarma (introduced by returning migrants), and langos (fried dough from Hungarian influence). In Chișinău, the capital, cafes serve European standards, and an emerging restaurant scene attempts modern Moldovan cuisine. But high-end dining barely exists—a few spots cater to expats and wealthy locals, but Moldova's food culture is fundamentally home-based.

Agriculture is Moldova's strength and curse. The rich black soil grows exceptional produce—tomatoes, peppers, grapes, plums, walnuts, apples. Moldovan markets in summer and fall overflow with fruits and vegetables of quality that would cost premium prices elsewhere. But infrastructure problems, low prices, and migration (a quarter of working-age Moldovans work abroad) mean agriculture doesn't translate to prosperity.

Food preservation remains essential—pickled vegetables, canned tomatoes, frozen berries, dried fruits. The Soviet-era practice of making zaготовки (preserves) for winter continues, with families spending late summer preserving everything. The root cellars and pantries stocked with preserved foods represent both tradition and economic necessity.

Eating traditions emphasize hospitality bordering on aggressive—refusing food or drink offends hosts. Tables groan under food quantities that seem impossible for the number of people. Toasts accompany every drink, and meals can last hours. The tradition of poftă bună (equivalent to bon appétit) and the insistence that guests eat more than humanly possible defines Moldovan hospitality.

Moldovan food won't revolutionize gastronomy, but it offers honest, delicious comfort food made from exceptional ingredients by people who genuinely want to feed you. The wine alone justifies attention, and the realization that Europe's poorest country produces some of its best agricultural products reveals the disconnect between economic statistics and lived culinary reality.`
  },
  {
    name: 'Mongolia',
    lat: 46.8625,
    lng: 103.8467,
    summary: `Mongolian cuisine is nomadic food perfected over millennia—meat and dairy sustaining people in one of Earth's most extreme environments, where vegetables remain scarce and cooking techniques revolve around mobility and harsh winters. This is food that prioritizes calories and warmth over diversity, where mutton dominates everything, and where fermented mare's milk is the national drink. It's not cuisine that will win international acclaim, but it tells the story of how humans adapt food to impossible conditions.

Boodog is peak Mongolian cooking—a goat or marmot cooked from the inside out using hot stones placed inside the cavity, then blowtorched on the outside. The result is meat cooked in its own juices, tender and smoky. It's ceremonial food, prepared for special occasions in the countryside. Khorkhog follows similar principles but uses a metal container—mutton layered with hot stones, vegetables, and water, creating a steam-roasted feast.

Buuz, steamed dumplings filled with mutton and onion, are Mongolia's most common dish—eaten year-round but especially during Tsagaan Sar (Lunar New Year), when families make hundreds. The dumplings should have exactly 33 pleats, though few people count. They're served with hot tea and are surprisingly satisfying, the dough thick and toothsome. Khuushuur, fried versions of buuz, appear at celebrations and from street vendors.

Mutton appears in everything: grilled, boiled, stir-fried, in soups, dried for winter. Mongolians consume meat at levels that would horrify nutritionists—breakfast, lunch, and dinner. Tsuivan, fried noodles with meat and vegetables, offers slight variation. Bansh, smaller soup dumplings, float in mutton broth. Boortsog, fried dough cookies, provide one of the few non-meat staples.

Dairy defines Mongolian food as much as meat. Airag (kumis), fermented mare's milk, is the national drink—slightly alcoholic, sour, and divisive among foreigners. Locals drink it by the liter during summer. Aaruul, dried milk curds, serve as protein-rich snacks that last indefinitely—rock-hard, sour, and acquired taste. Shimiin arkhi, distilled from airag, produces milk vodka with surprising kick. Süütei tsai, salty milk tea, accompanies every meal—black tea with milk, salt, and sometimes butter or fat, more savory than sweet.

Vegetables are almost absent from traditional Mongolian diet. The short growing season and nomadic lifestyle meant vegetables were luxuries. Potatoes, carrots, and cabbage now appear in Ulaanbaatar markets, and restaurants serve "Mongolian food" with vegetables, but traditional cuisine remains overwhelmingly meat and dairy. The lack of vitamin C historically caused health problems, solved by consuming raw liver and blood.

In Ulaanbaatar, the food scene is modernizing. Korean restaurants dominate (Korean pop culture influence is massive), alongside Russian, Chinese, and Western options. A few restaurants attempt to elevate traditional Mongolian ingredients—Modern Nomads serves contemporary takes on classic dishes, and there's growing pride in nomadic food heritage. But high-end Mongolian dining barely exists.

Street food in UB includes buuz stands, khuushuur vendors, and increasingly, international fast food. The markets sell fresh meat (hanging in open air regardless of season, which works given temperatures), dairy products, and a growing selection of imported foods. Food delivery apps have arrived, changing how young Mongolians eat.

Agriculture fights against nature. The short summer allows limited crop cultivation—wheat, barley, vegetables in greenhouses. Livestock herding—sheep, goats, cattle, horses, yaks—remains the primary agricultural activity. Climate change and extreme weather events (dzuds—harsh winters that kill livestock) threaten traditional herding lifestyles. Mongolia imports most food, making it expensive relative to incomes.

Nomadic hospitality traditions persist: arriving at a ger (yurt) means you'll be offered airag and dairy products regardless of time or season. Refusing causes offense. The host serves the khadag (ceremonial scarf) with snuff bottles exchanged in ritual greeting. Meals are communal, and the best meat goes to honored guests.

Food traditions connect to spirituality and seasons. The Lunar New Year involves specific foods and rituals. Naadam Festival (summer) means traditional foods prepared in traditional ways. The respect for animals—thanking them before slaughter, using every part—reflects Buddhist and shamanic beliefs.

Mongolian cuisine is uncompromising. There's no fusion here, no innovation, just food that has sustained nomadic peoples through unimaginable hardships. It's food that makes sense only in context—eating mutton and fermented mare's milk seems extreme until you've experienced Mongolian winter or understood the scarcity that shaped this cuisine over millennia.`
  },
  {
    name: 'Montenegro',
    lat: 42.7087,
    lng: 19.3744,
    summary: `Montenegro's cuisine blends Adriatic coastal flavors with Balkan mountain heartiness, creating food culture split between Italian-influenced seafood along the dramatic coast and Serbian-style grilled meats inland. This tiny country delivers surprising culinary diversity—from Venetian-legacy dishes in Kotor's medieval walls to sheep cheese aged in mountain caves, from fresh Adriatic fish to slow-cooked stews that sustained highlanders through harsh winters.

Along the coast, the Italian influence is unmistakable—centuries of Venetian rule left linguistic traces and culinary ones. Crni rižoto, black risotto colored with cuttlefish ink, appears on every coastal menu. Brudet, fish stew with tomatoes and wine, varies by town and catch. The Bay of Kotor produces exceptional oysters and mussels, farmed in the clean waters and served simply with lemon. Grilled fresh fish—sea bass, sea bream, squid—is the standard, accompanied by blitva (Swiss chard with potatoes and garlic) and olive oil.

Moving inland, the cuisine shifts dramatically. Njeguški pršut, air-dried ham from the village of Njeguši, rivals Italian prosciutto and Spanish jamón—aged in mountain air with specific microclimate. It's sliced paper-thin and melts on the tongue, typically served with Njeguški cheese, a young cheese with subtle smoke. These products from a tiny village have become national symbols, sold throughout Montenegro and exported.

Ćevapi, small grilled sausages of mixed meat, appear everywhere—served with lepinja (flatbread), raw onions, and kajmak (clotted cream). They're Balkan fast food perfected, and every region claims theirs is best. Pljeskavica, a massive grilled meat patty, offers a heartier alternative. Ražnjići, meat skewers, round out the grilled meat trilogy. Vegetarians struggle in Montenegro; vegetables exist primarily as sides to meat.

Kačamak, polenta-like cornmeal with cheese and kajmak, represents mountain food at its most fundamental—cheap, filling, and caloric for people doing physical labor in cold climates. It's peasant food now appearing on restaurant menus as "traditional cuisine." Cicvara, similar but enriched with more cheese and fat, follows the same principle.

Montenegrin wine is gaining recognition. Vranac, the indigenous red grape, produces wines ranging from simple table wines to serious age-worthy bottles. Krstač, a white variety, grows near the coast. The Plantaže winery near Podgorica operates what may be the world's largest single vineyard. Lake Skadar's region produces wines with unique character. Rakija, fruit brandy, follows the Balkan tradition—homemade versions reach dangerous proof levels.

Coastal towns offer seafood at reasonable prices compared to Italy across the Adriatic. Budva and Kotor's old towns have tourist-trap restaurants, but locals know where to eat—konobas (taverns) serve family recipes, fresh catch, and house wine. In Podgorica, the capital, the restaurant scene is growing, with attempts at modern Montenegrin cuisine and international options for the small expat community.

Markets reveal Montenegro's agricultural strengths: olives and olive oil from the southern coast, vegetables from Lake Skadar's basin, mountain cheese, honey, and seasonal fruits. Domestic production is limited—much food is imported—but what grows here grows well. Honey from wild mountain flowers, walnuts, plums for rakija, and figs all find their way to market stalls.

The food traditions reflect Montenegro's warrior culture and Orthodox Christianity. Slava, the family patron saint day, involves elaborate meals and specific ritual breads. Christmas and Easter mean traditional dishes—roasted lamb for Easter, fish for Christmas Eve fasting. The practice of extended family meals, where toasts flow freely and food appears endlessly, defines Montenegrin hospitality.

Montenegrin cuisine isn't innovative—it follows patterns established across the Balkans and Adriatic. But the quality of ingredients, the dramatic coastal setting, and the genuine hospitality make eating in Montenegro a pleasure. Fresh fish grilled simply with olive oil needs no innovation. Pršut aged in mountain air doesn't require fusion. Sometimes the traditional ways are traditional because they work perfectly, and Montenegro's food culture reflects that wisdom—respecting ingredients, keeping preparations simple, and feeding people with generosity that reflects the national character.`
  },
  {
    name: 'Morocco',
    lat: 31.7917,
    lng: -7.0926,
    summary: `Moroccan cuisine is North African food elevated to art form—tagines simmering with preserved lemons and olives, couscous steamed to fluffy perfection, bastilla's savory-sweet shock, and spice markets where sensory overload becomes meditation. This is food shaped by Berber foundations, Arab influences, and centuries as a crossroads between Europe, Africa, and the Middle East. The cuisine has captured international imagination like few others, and it mostly lives up to the hype.

Tagine refers both to the conical clay cooking vessel and the dishes prepared in it. The design creates a steaming environment where ingredients cook slowly, concentrating flavors. Lamb tagine with prunes and almonds balances savory and sweet. Chicken with preserved lemons and olives hits those bright, briny notes. Kefta tagine with eggs and tomato sauce is comfort food. Every region and family has variations, and watching tagines arrive at tables—steam escaping when the lid lifts—is theater that never gets old.

Couscous holds religious significance, traditionally prepared Friday after mosque, steamed above bubbling stew in a couscoussier. The tiny grains should be light and separate, not gummy. It's served with vegetables, chickpeas, and meat (lamb or chicken), with a bowl of broth for moisture. Proper couscous preparation is an art, and grandmothers still hand-roll couscous from semolina, though most buy it dried. The berber version from the Atlas Mountains adds seven vegetables.

Bastilla (or pastilla) is Morocco's most dramatic dish—a pie of layers of warqa pastry (paper-thin, like phyllo) filled with spiced pigeon or chicken, almonds, eggs, and dusted with cinnamon and powdered sugar. The combination of savory meat, sweet elements, and crispy pastry shouldn't work but absolutely does. It's labor-intensive and usually reserved for celebrations, though restaurants in Fez and Marrakech serve it to tourists year-round.

Street food in Morocco operates at high levels. Merguez, spicy lamb or beef sausages, grilled and stuffed into bread. In Marrakech's Jemaa el-Fnaa, the evening food stalls grill everything—kefta, chicken, fish, snails in broth—while smoke and chaos create intoxicating atmosphere. Bissara, a split pea soup, serves as breakfast with olive oil drizzled on top. Msemen, square flatbreads that are fried and flaky, appear at breakfast with honey or cheese.

Moroccan mint tea is the national drink and social ritual. Chinese green gunpowder tea steeped with fresh mint and copious sugar, poured from height to create foam. The ceremony involves multiple pours, testing temperature and sweetness, and offering tea is fundamental hospitality. Refusing is rude; accepting means you'll drink many glasses, each slightly different.

The spice markets—souks in Marrakech, Fez, Tangier—sell ras el hanout (a blend that can contain 30+ spices), cumin, coriander, saffron (Morocco is a major producer), paprika, and more. Preserved lemons, olives cured in dozens of ways, and argan oil from the unique argan trees of southwestern Morocco all fill market stalls. Shopping becomes sensory education.

Moroccan restaurants globally have created expectations, but eating in Morocco reveals deeper complexity. In homes, the food served to guests represents family honor. Riads in the medinas serve traditional recipes, while Marrakech's high-end scene includes restaurants pushing contemporary Moroccan cuisine. The country doesn't have Michelin stars, but establishments like La Maison Arabe, Dar Moha, and Le Jardin offer refined experiences.

Agriculture varies dramatically: coastal plains grow olives, citrus, and vegetables; the Atlas Mountains provide cherries, apples, and walnuts; date palms thrive in oases; and fishing fleets bring sardines, tuna, and other seafood. Berber shepherds move flocks seasonally. The diversity of climates creates diverse ingredients.

Berber food, distinct from Arab-influenced cuisine, emphasizes simple preparations—grilled meats, fresh breads baked in communal ovens, tagines without elaborate spicing. In mountain villages, you'll encounter foods rarely seen in cities: amlou (argan oil, almonds, and honey spread), tighrifin (Berber crepes), and local goat cheese.

Food traditions intertwine with Islam and cultural identity. Ramadan means dates breaking the fast, followed by harira (chickpea and lentil soup), then elaborate iftar meals. Eid celebrations feature mechoui (whole roasted lamb). Moroccan hospitality means you'll be fed constantly, and refusing food requires delicate diplomacy.

Moroccan cuisine succeeds internationally because it balances familiar and exotic—the flavors are bold but not intimidating, the sweet-savory combinations intrigue Western palates, and the visual presentation (tagines, tea ceremonies, the colors of spice markets) provides Instagram fodder. But beyond the hype, Moroccan food represents centuries of culinary tradition, where every dish tells stories of trade routes, religious practice, and family heritage.`
  },
  {
    name: 'Mozambique',
    lat: -18.6657,
    lng: 35.5296,
    summary: `Mozambican cuisine is where Portuguese colonialism meets African ingredients and Indian Ocean trade routes, creating a food culture defined by piri piri (the tiny, fierce African bird's eye chile), by coconut milk curries reflecting centuries of Indian trade, and by fresh seafood from some of Africa's most pristine coastline. This is food that reflects Mozambique's complex history—colonial scars alongside cultural resilience, poverty alongside extraordinary natural resources.

Piri piri dominates everything. The small chiles, called piri piri or peri peri, grow throughout Southern Africa but became particularly associated with Mozambique through Portuguese colonial presence. Piri piri chicken—grilled chicken marinated in chile, garlic, lemon, and oil—is the national dish, eaten with hands, accompanied by fries or rice. The heat varies from tolerable to tears-inducing depending on the cook's generosity. Portuguese brought the combination of African chiles with European grilling techniques, creating something that's spread globally (Nando's built an empire on this basic formula).

Matapa, possibly Mozambique's most distinctly local dish, combines cassava leaves with ground peanuts, coconut milk, and garlic, often with shrimp or crab. It's rich, slightly bitter from the cassava leaves, and requires hours of cooking to break down the leaves' toxins. Xima (or nsima in neighboring countries), a stiff porridge made from maize meal, serves as the foundational starch, eaten with hands to scoop up stews and sauces.

The coastline delivers extraordinary seafood. Prawns from Maputo Bay and along the coast are legendary—massive, sweet, and perfectly grilled with piri piri or garlic butter. Lobster, crab, squid, and countless fish species appear at beachside restaurants in Tofo, Vilanculos, or Pemba. The prices are increasing as Mozambique develops tourism, but seafood here remains far cheaper than in Europe or North America. Caril de caranguejo, crab curry with coconut milk, shows the Indian influence.

Indian and Arab influences arrived through centuries of Indian Ocean trade. Samosas, chapati, and biryani appear throughout Mozambique, adapted to local ingredients. In northern Mozambique, particularly Ilha de Moçambique and Pemba, the Swahili culinary influence is stronger—coconut rice, cassava, and Arab spices.

Street food centers on practicality: grilled chicken or beef, chips, and pãozinho (Portuguese-style bread rolls) filled with whatever's available. In Maputo, the capital, street vendors sell roasted cashews (Mozambique is a major producer), grilled corn, and macassa—deep-fried dough similar to doughnuts. The mercados (markets) sell fresh produce, live chickens, and dried fish.

Portuguese culinary legacy persists beyond piri piri—good bread, strong coffee, pastéis de nata (custard tarts) in Maputo bakeries, and a general approach to seafood that favors simplicity. The mozambican beer, Laurentina (2M), is ubiquitous and pretty decent. Portuguese wines fill restaurant lists.

High-end dining is limited to Maputo and major beach resort areas. The capital has restaurants serving contemporary Mozambican-Portuguese fusion, with a few spots attempting fine dining for the aid workers, expats, and emerging middle class. But most eating happens at neighborhood churrasqueiras (grill houses) where chicken, beef, and prawns come off charcoal grills, or at beach barracas serving fresh catch.

Agriculture faces infrastructure challenges—the civil war (ending in 1992) devastated systems that haven't fully recovered. Mozambique grows cashews (once the world's largest producer), coconuts, cassava, maize, and tropical fruits. Fishing provides both subsistence and export income, though illegal fishing and poor regulation threaten sustainability. The fertile soil and tropical climate mean food should be abundant, but distribution problems and poverty create food insecurity.

Food traditions vary by region and ethnicity. The southern regions around Maputo show more Portuguese influence and better infrastructure. Central regions like Beira maintain distinct traditions. The north, with Swahili and Arab influences, feels culturally different. Traditional ceremonies involve specific foods, and the practice of communal eating from shared plates persists in rural areas.

Mozambican cuisine deserves more recognition than it receives. The combination of African, Portuguese, and Indian flavors creates something distinctive. Piri piri chicken, matapa, and fresh grilled prawns represent food culture that's authentic, delicious, and reflective of Mozambique's complex identity. The challenge is that poverty and limited tourism infrastructure mean most of the world never experiences Mozambican food beyond Nando's sanitized version. But for those who make it to Mozambique, the food—especially the seafood eaten at plastic tables on palm-fringed beaches—represents one of the country's greatest pleasures.`
  },
  {
    name: 'Myanmar',
    lat: 21.9162,
    lng: 95.9560,
    summary: `Myanmar's cuisine is Southeast Asian food that most of the world hasn't discovered—a complex blend of Burmese, Shan, Karen, Mon, and other ethnic cuisines, with influences from India, China, and Thailand creating flavors both familiar and utterly unique. This is food built on fish sauce and fermented ingredients, where tea leaves are eaten not just drunk, where noodle soups define breakfast, and where curries differ fundamentally from Indian or Thai versions. Political turmoil has kept Myanmar isolated, meaning the food culture remains remarkably intact and non-commercialized.

Mohinga is the national dish, eaten primarily for breakfast but available all day—rice noodles in fish broth thickened with banana stem, flavored with lemongrass, ginger, and garlic, topped with boiled egg, fried fritters, and coriander. Street vendors set up mohinga stalls before dawn, the pots simmering while students and workers slurp bowls before starting their day. Every region has variations, and arguments about the "proper" mohinga are endless.

Lahpet, fermented tea leaves, represents Myanmar's most distinctive ingredient. Laphet thoke, tea leaf salad, mixes the slightly bitter, tangy leaves with crunchy components—fried garlic, peanuts, sesame seeds, dried shrimp, and tomatoes. It's served as a salad or as lahpet so, a snack eaten from compartmented trays at social gatherings. Chewing fresh betel leaves with areca nut is still common, staining teeth red and requiring ubiquitous spittoons.

Burmese curries differ from Indian or Thai—they're oil-rich, the spices bloomed in oil until fragrant, then meat or fish added and cooked until the oil separates. The result is less saucy than Indian curry, often with a slick of oil on top (which locals prize but can shock foreigners). Chicken curry, pork curry, fish curry—they're served with rice and an array of side dishes: vegetables, dahl, and always ngapi yay, a watery fish sauce condiment.

Shan cuisine from Shan State offers lighter alternatives to Burmese curries. Shan noodles—rice noodles with chicken or pork in a tomato-based sauce, either as soup or dry. Tohu, Burmese "tofu" made from chickpea flour, unique to Myanmar and served fried or in salads. Shan State's location near the Chinese border shows in the food's influence.

Street food is where Myanmar shines. Samosas and palata (roti) from Indian influence. Mont pyit thalet (a crispy pancake with curry) at tea shops. Ohn no khao swe (coconut chicken noodle soup) from stalls in Yangon. Burmese tea shops culture deserves its own category—these cafes serve strong, sweet tea and endless snacks while patrons discuss politics, business, and football for hours.

Myanmar's markets are essential: Bogyoke Market in Yangon, Zegyo Market in Mandalay—piles of produce, dried fish, ngapi (fermented fish or shrimp paste fundamental to Burmese cooking), betel leaves, and chilies. The wet markets where live fish, chickens, and frogs await purchase reveal how recent the journey from farm to table is.

High-end dining barely existed until Myanmar's brief opening in the 2010s. A few restaurants in Yangon attempted contemporary Burmese cuisine, but the 2021 military coup and subsequent crisis devastated the emerging food scene. Most quality dining happens at established tea houses and family restaurants serving traditional dishes—no white tablecloths needed.

Agriculture dominates Myanmar's economy. The Ayeyarwady Delta is one of Asia's rice bowls, producing surpluses historically exported throughout the region. Pulses and beans (Myanmar is a major exporter), peanut and sesame cultivation, and fishing in the Ayeyarwady and Salween rivers all provide food and income. The diversity of climates from tropical coasts to temperate highlands allows wide agricultural variety.

Ethnic minority cuisines add layers: Karen, Chin, Kachin, and other groups maintain distinct food traditions. Fermentation is common across cultures—dried and fermented fish, fermented soybeans, preserved vegetables. Rice is universal, but the preparations vary. In border regions, the cuisines blend into Thai, Chinese, or Indian styles.

Buddhist traditions influence food culture—many Burmese practice vegetarianism on holy days, and monks receive daily alms of food from laypeople. The practice of sharing food, of communal eating, and of offering food to monasteries weaves through Buddhist practice.

Myanmar's food remains undersold internationally. Thai restaurants are everywhere; Myanmar restaurants barely exist outside of diaspora communities. The reasons are partly political—decades of military rule, current crisis, and international isolation limit cultural export. But for those who've eaten in Myanmar, the food represents one of Asia's most underrated cuisines. The flavors are complex without being overwhelming, the ingredients distinctive, and the food culture remains genuinely local rather than adapted for tourists. That authenticity comes at the cost of accessibility—Myanmar is difficult to visit, ethically complicated given the military situation, and culinarily challenging for those unprepared for intensely flavored, oil-heavy food. But the cuisine itself deserves recognition as one of Southeast Asia's hidden treasures.`
  }
]

async function main() {
  console.log('🍽️  Starting Food & Cuisine writeup generation for Batch 8...')
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
  console.log('✨ BATCH 8 COMPLETE!')
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
