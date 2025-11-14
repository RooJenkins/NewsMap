import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries for Food Batch 2
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

// Food writeups following Samin Nosrat/David Chang style
const FOOD_WRITEUPS: { [key: string]: string } = {
  'Benin': `To understand Benin's cuisine is to trace the Atlantic slave trade in reverse - this is where the food traditions that became soul food, Creole cooking, and Afro-Brazilian cuisine originated. The country's foodways reflect its position as a crossroads: Fon, Yoruba, and Bariba influences meet French colonial legacies and connections to Brazil's returned slave communities.

The foundation is pâte - a stiff porridge made from fermented corn, cassava, or yam that functions as both plate and utensil. You tear off a piece, shape it into a scoop, and use it to grab sauce. The sauces are where Beninese cooking shines: amiwo (red tomato stew with crab or fish), gboma dessi (spinach-based with okra providing that essential slickness), and peanut sauces enriched with palm oil that stains everything orange. In coastal areas around Cotonou and Ouidah, grilled fish comes with sauce piment that'll remind you this is where chilies went before they conquered West African cooking.

Street food culture centers on acarajé - black-eyed pea fritters sold by women along roadsides, the exact same ones you'll find in Salvador, Brazil, proof that diaspora food travels both ways. There's also wagasi, a local cheese that challenges assumptions about African dairy traditions, grilled and sold at bus stations. The breakfast staple bouillie - fermented millet or corn porridge sweetened with sugar or condensed milk - fuels the morning markets.

Palm products dominate: palm oil for cooking, palm wine (tchoukoutou or sodabi when distilled) for drinking, palm nuts for sauces. The country's agricultural identity is written in corn fields, cassava plots, yam mounds, and the palm groves that line the coast. Pineapples grow impossibly sweet, and the chilies pack legitimate heat.

High-end dining barely exists - Cotonou has a handful of restaurants serving French-influenced cuisine and fresh seafood, but the real eating happens at maquis (open-air eateries) where grilled fish, chicken, and goat come with attieke (fermented cassava couscous adopted from Ivory Coast) and plantains. Women cook in communal spaces, maintaining recipes passed down orally for generations.

Food traditions are communal and celebratory. The annual Vodun festival involves ritual foods and offerings. Weddings feature massive outdoor cooking operations. The concept of eating alone is foreign - meals are shared from common bowls, and hospitality means feeding whoever's present. This is subsistence agriculture meeting ancient tradition, where food is both sustenance and spiritual practice, and every meal connects you to ancestors and soil.`,

  'Bhutan': `Bhutanese cuisine might be the world's most unapologetically spicy - where chilies aren't a condiment but a vegetable, and the national dish is literally cheese and chilies stewed together until they become one molten, incendiary thing. Ema datshi defines Bhutanese cooking: fresh red or green chilies simmered with local yak cheese until it reaches a creamy, throat-searing consistency that you eat over red rice. Miss this and you haven't eaten Bhutan.

The elevation shapes everything. At 7,000-13,000 feet, Bhutan grows buckwheat, barley, and red rice - a nutty, rustic grain that pairs with every curry and stew. Yaks provide dairy in the highlands: churpi (dried yak cheese chews that could break teeth), ara (fermented grain alcohol), and butter tea that tastes like salty soup to the uninitiated but becomes essential fuel in the cold. Potatoes arrived relatively recently but now dominate - kewa datshi swaps potatoes for chilies in the cheese sauce, and whole roasted potatoes appear at every meal.

Momos traveled from Tibet but Bhutan made them their own - steamed dumplings filled with pork, beef, or cheese, served with ezay (fiery chili sauce made with tomatoes, onions, and Sichuan pepper-like timur). Then there's phaksha paa, pork belly with radishes and chilies, the fat rendering into the sauce while dried chilies add smokiness. Sikam paa uses dried pork for preserved mountain flavor. Jasha maroo combines chicken with tomatoes, ginger, and - surprise - more chilies.

Street food is minimal - this isn't Thailand. You'll find momo vendors in Thimphu and paan (betel nut wrapped in leaves) sold everywhere, though technically not food. The market culture revolves around weekly farmers' markets where villagers bring vegetables, dried meats, yak butter, and enormous dried chilies that look decorative but get consumed entirely.

High-end dining is redefining Bhutanese cuisine at places like Bukhari and Zombala in Thimphu, where chefs trained abroad return to elevate traditional dishes. The Michelin guide hasn't reached Bhutan, but restaurants at Amankora and COMO Uma serve refined versions of ema datshi alongside international cuisine for tourists who can't handle the chili overload.

Bhutan grows apples, oranges, and walnuts that get preserved for winter. Suja (butter tea) accompanies every social interaction. Ara flows freely at festivals. Food traditions are deeply Buddhist - no meat is produced domestically (killing violates Buddhist principles), so all meat is imported, creating the odd situation where beef and pork appear in most dishes but no one raises cattle for slaughter. This is mountain food culture: preserved, spicy, dairy-rich, and unapologetically challenging for outsiders.`,

  'Bolivia': `Bolivian food sits at the intersection of altitude, indigenous tradition, and colonial legacy - where potatoes originated (4,000 varieties grow here), where quinoa was cultivated for millennia before becoming a Western superfood, and where Spanish conquest layered pork, beef, and wheat onto Aymara and Quechua diets. This is cooking that fuels life at 12,000+ feet.

Salteñas are Bolivia's breakfast obsession - baked empanadas filled with a slightly sweet, soupy stew of meat (chicken, beef, or lamb), potatoes, peas, olives, and a hard-boiled egg. The trick is eating them without spilling the juice down your shirt. They're only sold in the morning, and every city has legendary salteña vendors with lines out the door. In La Paz, try Salteñeria La Estrella for the standard, or dozens of market stalls making them fresh.

The altiplano's poverty and altitude shaped dishes of remarkable ingenuity: chairo (a thick soup with lamb, chuño - freeze-dried potatoes - and vegetables), sopa de maní (peanut soup enriched with beef and macaroni), and plato paceño (corn, habas beans, potatoes, and cheese - carbs on carbs for energy at elevation). Anticuchos - beef heart skewers marinated in cumin, garlic, and aji pepper, grilled over charcoal - are street food glory, sold by women at night markets from braziers that scent entire blocks.

Regional variations matter. In Cochabamba, you'll find silpancho - a massive breaded beef cutlet buried under rice, potatoes, and a fried egg. Santa Cruz in the lowlands brings tropical fruit, yuca, and dishes like majao (rice with dried beef). Sucre serves mondongo (tripe soup) and produces the best chocolates in Bolivia. Lake Titicaca provides trout that appears grilled, fried, or in soups.

The markets are where food culture lives: Mercado Rodriguez in La Paz, where Api (purple corn drink) vendors serve breakfast with pastries, and the second floor holds restaurant stalls with women ladling out whatever they cooked that morning. The mercados de brujas (witches markets) sell dried llama fetuses for construction blessings alongside culinary herbs.

High-end dining is emerging - Gustu in La Paz, founded by Noma's Claus Meyer, employs indigenous ingredients with fine dining technique: Amazonian fish, highland grains, and ulluco tubers transformed into tasting menus. Ali Pacha serves all-vegetarian Andean cuisine that challenges any notion about needing meat at altitude.

Bolivia grows coffee (Yungas region), cacao (increasingly recognized), and exports quinoa while locals increasingly eat less of it due to prices. Singani - grape brandy distilled at altitude - is the national spirit, best in a chuflay with ginger ale. This is survival food elevated by necessity, where every potato variety has a purpose and cooking at altitude means everything takes longer but tastes more essential.`,

  'Bosnia and Herzegovina': `Bosnian food is the Ottoman Empire's delicious ghost - 400 years of Turkish rule layered over Slavic traditions, creating a cuisine where grilled meats achieve religious significance, coffee rituals shape daily rhythms, and phyllo dough arrives at breakfast, lunch, and dinner. This is Balkan cooking at its richest, where Adriatic and Anatolian influences meet Alpine heartiness.

Ćevapi are the national obsession: small, skinless sausages of mixed beef and lamb, grilled over charcoal until crispy outside and juicy within, served in fresh somun (flatbread) with raw onions and ajvar (roasted red pepper spread). The ćevabdžinica (shops specializing in ćevapi) are everywhere, but Sarajevo's Željo and Mostar's Tima-Irma have cult followings. Ten pieces minimum, twenty if you're hungry, thirty if you're serious. The meat-to-bread ratio, the char, the way ajvar's sweetness cuts the richness - this is simple cooking done obsessively well.

Burek defines breakfast and late-night eating. Real burek contains only meat - beef or lamb cooked with onions, wrapped in hand-stretched phyllo, and baked in massive spiral pans. The variant with cheese is sirnica, with spinach zeljanica, with potato krompiruša. Buy it by the kilo from bakeries where bakers work through the night, the phyllo stretched so thin you can read through it. Pair with thick yogurt and you've accessed the Bosnian soul.

Bosnian pot (bosanski lonac) is the national stew - layers of meat, potatoes, cabbage, and whatever vegetables are around, slow-cooked until everything melds. Klepe are Bosnian ravioli filled with ground meat, served in beef broth. Begova čorba is a rich chicken soup thickened with roux and egg yolks. For river fish, try brudet (fish stew) along the Neretva or Una rivers.

The coffee culture is serious - Bosnian coffee is prepared Turkish-style in a džezva, served in small cups with sugar cubes and rahat lokum (Turkish delight). Sitting for coffee isn't a break, it's a social institution lasting hours. Ćejf - the feeling of contentment while drinking coffee - is the entire point.

Street food in Baščaršija means burek, ćevapi, and pita (savory pies) from vendors who've occupied the same spot for decades. The markets sell kajmak (clotted cream), aged cheeses, and ajvar made from peppers slow-roasted until they collapse into umami concentrate.

High-end dining is small but growing: Park Princeva in Sarajevo and Hindin Han in Mostar serve traditional dishes refined with modern technique. There are no Michelin stars in Bosnia - the guide hasn't arrived - but the cooking at family-run establishments often surpasses restaurants with accolades elsewhere.

Bosnia produces plums (for rakija - fruit brandy that launches a thousand toasts), tobacco, and increasingly, wine in Herzegovina's karst soil. Food traditions are convivial and generous - hosts cook excessively, and refusing seconds insults. This is food shaped by empires and mountains, where grill smoke is perfume and every meal is an excuse to gather, pour rakija, and stay longer than planned.`,

  'Botswana': `Botswanan cuisine is survival food from a harsh environment - the Kalahari Desert covers 70% of the country, making agriculture precarious and pastoral traditions central. This is cooking built on cattle (Botswana's wealth and identity), wild harvests, and the ingenuity required to eat well where water is scarce. It's uncompromising, unfussy, and deeply connected to land.

Seswaa is the national dish: beef or goat, boiled until fall-apart tender, then pounded and shredded until it becomes almost paste-like, seasoned simply with salt. Served with pap (maize porridge, stiff enough to form balls with your hand) and a chakalaka-style vegetable relish. At celebrations - weddings, funerals, national holidays - massive three-legged pots (potjie) cook seswaa for hours over wood fires. The collagen and fat render into the meat, creating richness from the toughest cuts.

Beef dominates because cattle represent status, wealth, and survival - the Tswana people are historically pastoralists. Braai (barbecue) culture rivals South Africa's: boerewors (sausages), steaks, ribs, and chicken grilled over wood or charcoal, consumed with pap, salads, and cold beer. The quality of Botswana beef is exceptional - grass-fed, hormone-free, and increasingly exported.

Mopane worms (actually caterpillars of the emperor moth) are a protein-rich delicacy, harvested from mopane trees, dried, and either eaten as crunchy snacks or rehydrated in tomato sauce. They taste nutty, earthy, and pack serious nutrition. You'll find them in markets and increasingly in upscale restaurants positioned as indigenous superfood. Bogobe jwa lerotse (sorghum porridge with melon) and morogo (wild spinach) represent traditional vegetable dishes, foraged from the bush.

Street food in Gaborone and Maun means vendors selling fat cakes (fried dough), magwinya (similar), and braaied meats from carts. The informal food economy thrives - women cook pap and stew in their yards, selling plates to neighbors and workers.

High-end dining is limited but evolving. Bull & Bush in Gaborone and restaurants in Maun serve game meats - kudu, ostrich, crocodile, and springbok - alongside beef. Safari lodges in the Okavango Delta employ trained chefs who combine traditional ingredients with international technique: mopane worm pâté, wild-harvested vegetables, and locally raised meats served under canvas to guests paying $1,000+ per night.

Botswana produces sorghum, maize, and beans in wetter years, but imports much of its food. The country's famous for its salt pans and nothing grows on the Makgadikgadi. Bojalwa jwa Setswana (traditional sorghum beer, opaque and slightly sour) is brewed at home for communal drinking. Modern beer brands - St. Louis, Castle - dominate urban consumption.

Food traditions emphasize sharing and ceremony - the kgotla (community gathering) includes communal eating. Respect for elders means they eat first and receive choice portions. This is cattle culture cooking: meat when you can get it, starches for bulk, wild harvests for nutrients, and the understanding that food connects you to ancestors, land, and survival in an environment that gives grudgingly. Michelin stars feel irrelevant when dinner means a sunset braai in the Kalahari, stars stretching horizon to horizon.`,

  'Brazil': `Brazilian food is a melting pot that actually melted - African, Indigenous, Portuguese, Italian, Japanese, and Lebanese cuisines colliding and creating something entirely its own. This is a continental country where regions eat as differently as separate nations, united by rice and beans, a love of grilling, and the understanding that eating is a social, day-long affair.

Feijoada is the national dish and the weekend ritual: black beans slow-cooked with pork - ears, tail, feet, ribs, sausage, and whatever cuts have flavor and collagen - served with rice, farofa (toasted cassava flour), orange slices, collard greens, and vinaigrette. It's heavy, rich, and requires a nap. The best versions simmer for hours, the beans thickening into a nearly black gravy. In Rio, traditionalists eat it Wednesdays and Saturdays; in São Paulo, it's Saturday lunch followed by a caipirinha and low ambitions.

Regional cuisines demand exploration. Bahia in the Northeast brings Afro-Brazilian cooking: moqueca (fish stew with dendê palm oil, coconut milk, tomatoes, and peppers), acarajé (black-eyed pea fritters fried in dendê and stuffed with vatapá - a paste of shrimp, cashews, peanuts, and palm oil), and bobó de camarão (shrimp in manioc cream). The dendê oil stains everything orange and tastes unlike anything else - earthy, fruity, essential. In Minas Gerais, the food is simpler and perfect: pão de queijo (cheese bread made from tapioca flour), feijão tropeiro (beans with sausage, bacon, and eggs), and tutu de feijão (mashed beans with cassava flour).

The churrascarias (Brazilian steakhouses) are meat temples: picanha (rump cap, the most prized cut), fraldinha (flank), costela (ribs), and linguiça sausages grilled over charcoal and carved tableside until you flip your token to red, begging them to stop. In the South, where gaúcho (cowboy) culture dominates, churrasco is identity.

São Paulo is where Brazilian food gets serious: D.O.M. (two Michelin stars) showcases Amazonian ingredients - priprioca root, jambu leaves that numb your mouth, tucupi sauce - in avant-garde dishes. Mani by Helena Rizzo elevates indigenous ingredients to fine dining. The city's immigrant communities created bairros (neighborhoods) with authentic Syrian-Lebanese, Italian, Japanese (the largest Japanese diaspora outside Japan), and Korean food. The city's food halls and mercadões (municipal markets) like Mercado Municipal serve mortadella sandwiches the size of your head and pastel (fried dough pockets) filled with everything.

The Amazon contributes açaí (eaten as savory porridge with fish and farinha, not sweet bowls), tucunaré (peacock bass), pirarucu (arapaima - massive river fish), and cupuaçu fruit. The Pantanal brings river fish and beef from fazendas. The Northeast grows cashews, mangoes, and produces cachaça (sugarcane spirit) that ranges from rot-gut to artisanal expressions aged in native wood.

Street food is art: tapioca crepes filled with cheese, coconut, or meat; pastéis (larger than Asian spring rolls, fried until shattering crisp); coxinha (teardrop-shaped chicken croquettes); and espetinho (skewers) grilled on corners at night. Beach culture means vendors selling mate (iced herbal tea), grilled queijo coalho (squeaky cheese), and empadas.

Brazilian agriculture is vast: coffee (the country's identity through the 1800s), soybeans, beef, sugarcane, oranges, and cacao. Food traditions vary by region but share a rhythm - lunch is the main meal, dinner is light, and weekends mean long, multi-course gatherings. The cafezinho (tiny espresso) punctuates the day. This is joyful, abundant, diverse cooking where the only rule is that no one eats alone if they can help it.`,

  'Brunei': `Bruneian cuisine lives in Southeast Asian tradition shaped by Islamic law, Malay roots, Chinese immigration, and oil wealth that makes everything affordable but nothing too fancy. This is food that balances across communities - Malay majority, Chinese minority, indigenous groups - creating a subtle, less fiery version of regional cooking where nasi katok reigns supreme.

Nasi katok is the national dish and the great equalizer: rice, fried chicken (often just one piece), and sambal (chili paste). That's it. Sold from home kitchens, stalls, and restaurants for BND $1-2 (about USD $1), it feeds everyone from laborers to office workers. The chicken is usually good - crispy-skinned and cooked well - but it's the sambal that makes or breaks it. Some are vinegary and sharp, others rich with belacan (shrimp paste), and a few achieve legendary status with lines forming before opening.

Ambuyat is the traditional Bruneian dish that confuses outsiders: sago starch stirred into boiling water until it becomes a translucent, gluey mass, then twirled on a bamboo fork (candas) and dipped into sauces - usually cacah (a sour-spicy mix with shrimp paste), or tempoyak (fermented durian). It's flavorless starch as vehicle for intense flavors, an acquired taste that locals adore and tourists tolerate out of politeness. The ritual of eating ambuyat - the twirling, dipping, and quick swallowing before it cools - is social theater.

The Chinese Bruneian community brings kueh (small cakes and pastries), mee goreng and kuey teow (stir-fried noodles), and kopitiam (coffee shop) culture. Char kuey teow arrives smoky from the wok, thick rice noodles with shrimp, egg, and Chinese sausage. Soto (aromatic soup with chicken or beef) appears everywhere, a breakfast standard with rice or noodles.

Malay curries are milder than elsewhere in the region - beef rendang here cooks down to tender meat in coconut gravy but won't blow your head off. Kelupis (glutinous rice with grated coconut wrapped in palm leaves) and pulut panggang (grilled glutinous rice with spiced filling) are specialty items. The seafood is excellent - Brunei Bay provides prawns, crabs, and fish cooked simply: grilled, steamed with ginger, or in assam pedas (sour-spicy tamarind sauce).

Street food is scattered - hawker centers in Gadong and markets in Bandar Seri Begawan's Tamu Kianggeh sell satay, grilled seafood, and various kueh. The night market (pasar malam) at Gadong is Brunei's closest thing to a food scene: dozens of stalls selling everything from nasi lemak to Western-ish fried chicken to durian tempoyak.

High-end dining barely exists. This is an Islamic country where alcohol is banned, nightlife is nonexistent, and the Sultan's wealth hasn't translated into a restaurant culture. The Empire Hotel has international buffets. A handful of upscale places in Bandar serve fusion Malay-Western food. Most eating happens at home, in hawker centers, or at the ubiquitous nasi katok spots.

Brunei grows rice (though it imports most), tropical fruits (rambutan, mangosteen, durian), and sago from palms. The country's oil wealth means food is subsidized and absurdly cheap - a full meal costs less than coffee in most countries. Teh tarik (pulled tea) and kopi (thick, sweet coffee) fuel the day.

Food traditions follow Islamic practice: no pork, no alcohol, halal meat only. Ramadan transforms eating habits - pre-dawn sahur and evening iftar meals, with markets selling special foods for breaking fast. Food is often eaten with hands, right hand only, following Malay custom. This is gentle, unassuming cooking - nothing trying too hard, nothing revolutionary, just solid Malay food culture adapted to a quiet, wealthy, strictly Islamic environment where nasi katok is democracy on a plate.`,

  'Bulgaria': `Bulgarian food culture is the Balkans' under-sung hero - where yogurt was born (literally, the bacteria Lactobacillus bulgaricus comes from here), where rose oil perfumes the valleys but pepper and herbs season the cooking, and where the mezze spread (like Turkish but don't say that too loudly) makes dinner last hours. This is cooking shaped by Ottoman rule, Slavic traditions, and agricultural abundance that urban Bulgarians are rediscovering.

Shopska salad is the flag on a plate: tomatoes, cucumbers, onions, roasted peppers, and sirene (white brined cheese similar to feta but creamier) grated over top to resemble snow. Simple, fresh, and perfect with rakiya (fruit brandy) or Bulgarian wine. It appears at every meal, a national requirement. Snezhanka (Snow White salad) combines yogurt with cucumbers, garlic, dill, and walnuts - cooling, tangy, essential.

The yogurt here isn't just breakfast - it's a category unto itself. Kisselo mlyako (sour milk) has protected origin status, and locals believe it's responsible for Bulgaria's historically high number of centenarians. It's thicker, tangier, more complex than Western yogurt. Tarator, cold soup made from yogurt, cucumbers, garlic, dill, and walnuts, defines summer eating. The yogurt culture makes Bulgarian dairy products exceptional: sirene, kashkaval (yellow cheese), and katyk (fermented milk drink).

The grilled meats rival anywhere in the Balkans: kebapche and kyufte (grilled minced meat - beef and pork - seasoned with cumin and pepper, shaped into sausages or patties), karnache (spicy sausage), and skara (mixed grill) served with lyutenitsa (pepper and tomato relish that's sweeter and richer than ajvar). Kavarma - meat stew with mushrooms, peppers, and onions cooked and served in an earthenware pot - delivers deep, slow-cooked flavor.

Banitsa is the morning pastry: phyllo layers with sirene cheese, baked until golden and flaky, eaten with yogurt or boza (fermented grain drink that's slightly sweet, malty, and low-alcohol). Regional variations add spinach, pumpkin, or leeks. On New Year's Eve, banitsa contains fortunes - dogwood twigs symbolizing health, coins for wealth.

The Rhodope Mountains bring kachamak (cornmeal mush with cheese and butter), while coastal areas serve tsatsa (small fried fish), stuffed mussels, and Black Sea fish grilled simply. Monastery cuisine preserved vegetarian traditions: the monks make excellent bread, honey, jams, and herbal teas.

High-end dining in Sofia and Plovdiv is reclaiming Bulgarian traditions: Niko'las and Made in Home in Sofia serve elevated versions of classic dishes with seasonal ingredients. The Michelin guide hasn't rated Bulgaria yet, but the cooking at the best places rivals anything in the Balkans. Wine regions around Melnik, Thracian Valley, and Black Sea coast are producing serious reds (Mavrud, Rubin) and whites (Dimyat) that deserve international attention.

Bulgaria's agriculture is its strength: the Rose Valley produces 70% of the world's rose oil (mostly for perfume, but rose jam and liqueur are culinary uses). The country grows tomatoes, peppers, eggplants, and cucumbers with flavor that shames supermarket versions. Walnuts, plums, cherries, and apricots become preserves and rakiya. Spices from the Ottoman era - cumin, paprika, chubritsa (summer savory) - define the flavor profile.

Food traditions emphasize sharing and seasons. Christmas brings recipes preserved since pre-Christian times. Easter means kozunak (sweet bread) and red-dyed eggs. The trapeza (table) is where family gathers, toasting with nazdrave! before each sip of rakiya. This is peasant cooking elevated by quality ingredients, where yogurt is an art form and every grandmother's recipe is the definitive version.`,

  'Burkina Faso': `Burkinabé cuisine is Sahelian survival cooking - built on millet, sorghum, and resilience in one of the world's poorest countries where agricultural cycles dictate eating and nothing goes to waste. This is food culture shaped by scarcity, ingenious fermentation, and communal eating practices that stretch meals to feed everyone. It won't win Instagram likes, but it reflects profound adaptation to a harsh environment.

Tô (or ) is the foundation - a thick porridge made from millet, sorghum, or corn flour, cooked until it forms a sticky, pliable mass that serves as both utensil and sustenance. You tear off a piece, form it into a ball, make an indentation with your thumb, and use it to scoop sauce. The sauces provide the nutrition and flavor: gombo (okra sauce, slippery and thickening), zom koom (leafy greens), and peanut-based sauces enriched with tomatoes, onions, and whatever protein is available - chicken, goat, or dried fish.

Riz gras (fat rice) appears at celebrations: rice cooked with tomato paste, vegetables, and meat - a one-pot meal that's richer than daily tô. Babenda combines okra, baobab leaves, and peanut butter into a thick, nutritious sauce. Poulet bicyclette (bicycle chicken) refers to the local free-range birds, tougher and more flavorful than commercial chickens, usually grilled or stewed.

Street food in Ouagadougou centers on brochettes (meat skewers) grilled over charcoal, beignets (fried dough), and alloco (fried plantains) when available. Women sell bouillie de mil (millet porridge) for breakfast. The markets - especially Ouaga's Rood Woko market - are where food culture lives: women selling vegetables, grains, and shea butter from massive mounds. Zoam koam (a greens-based dish), oseille (hibiscus leaf sauce), and various wild harvests appear seasonally.

Beverages matter: bissap (hibiscus drink, sweet and tart), gnamakoudji (ginger juice), and dolo (millet beer brewed and sold primarily by Mossi women, cloudy and slightly sour). The dolo bars are social centers, communal drinking spaces where transactions happen and news spreads.

High-end dining exists minimally - a few restaurants in Ouagadougou serving French-influenced cuisine or pan-African dishes for expats and the small middle class. The country has no Michelin stars, no fine dining scene. Most eating happens at home or at maquis (open-air eateries) where women cook traditional dishes in courtyards.

Burkina Faso's agriculture struggles against Sahel conditions: erratic rainfall, degraded soil, and climate change hitting hard. The country produces millet, sorghum, peanuts, and cotton (the main export). Shea trees provide nuts that women process into shea butter - valuable for cosmetics but also a cooking fat. Mangoes, when in season, offer sweetness; dried hibiscus flowers export globally.

Food traditions are deeply communal - eating from shared bowls, seated on mats, with elders and men often eating first while women eat after serving. The calebasse (gourd bowl) still serves food in villages. Respect means eating what's offered, not wasting, and understanding that hosts serve their best even when it's humble.

This is cooking born of necessity in a landlocked Sahel nation where poverty is grinding but dignity remains. The fermentation techniques, wild plant harvests, and efficient use of scarce protein reflect sophisticated adaptation. It won't appear in food magazines, but Burkinabé cuisine represents human ingenuity in feeding people where the environment gives little. The food culture matters not for innovation but for survival transformed into tradition, where every grain of millet counts and sharing means community survives.`,

  'Burundi': `Burundian cuisine is East African simplicity defined by altitude, poverty, and agricultural rhythms where bananas (cooking and eating varieties) dominate alongside beans, and meat remains aspirational for most. This is subsistence farming culture where food traditions emphasize sharing scarce resources and extracting maximum nutrition from minimal ingredients. It's unadorned, honest cooking that reflects the reality of being one of the world's poorest nations.

Ubugari (or ugali, though Burundians prefer their own name) forms the foundation: cassava or corn flour cooked with water into stiff porridge, served with everything. You shape it with your hand, use it to pinch up sauce or vegetables, and it provides bulk calories. The skill lies in achieving the right consistency - too thin and it falls apart, too thick and it's gluey.

Beans are protein and identity: ibiharage (red beans) appear daily, sometimes twice daily, boiled with salt and maybe a bit of palm oil if available. When cooked down until creamy, served with ubugari, this is the meal most Burundians eat. Adding meat - goat, chicken, or fish from Lake Tanganyika - elevates it to celebration food. Mukeke (dried fish from the lake) adds flavor and nutrients to bean stews when fresh protein isn't available.

Cooking bananas (matoke, igitoki) get steamed, boiled, or mashed, providing another starch layer. Combined with beans and greens, this forms the agricultural trinity. The greens - isombe (cassava leaves cooked with peanut paste), dodo (amaranth leaves), or other wild-harvested leaves - add vital nutrients. Palm oil, when available, enriches everything with its distinctive orange color and flavor.

Brochettes (meat skewers) represent street food and aspiration: goat, beef, or occasionally organ meats grilled over charcoal, seasoned simply with salt and perhaps pili-pili (hot pepper). In Bujumbura, you'll find vendors selling brochettes alongside boiled eggs, fried plantains, and mandazi (East African donuts). The local favorite drink is Primus beer or Amstel (both brewed locally), drunk warm because electricity for refrigeration is luxury.

Markets like Bujumbura's Central Market show what's available: sweet potatoes, cassava, plantains, avocados (grown in the highlands), tomatoes, onions, and the omnipresent dried fish. During harvest season, fresh lake fish - tilapia, Nile perch, sambaza (small sardine-like fish) - get grilled whole or fried.

High-end dining doesn't exist as a concept for the vast majority. A handful of restaurants in Bujumbura serve Indian, Chinese, or Belgian-influenced food for the tiny expat community and elite. The Michelin guide is irrelevant when most of the population farms subsistence crops on terraced hillsides.

Burundi grows coffee (historically the main export), tea, bananas, cassava, and beans on small hillside plots. The country's highland altitude (5,000+ feet for much of it) shapes what grows. Palm trees near the lake provide palm wine (urwarwa) and oil. Sorghum is fermented into impeke (traditional beer) drunk communally from shared pots through long straws during ceremonies.

Food traditions emphasize commensality: eating from shared bowls, seated on mats, with traditional hierarchy (men and elders first, women and children after). Refusing food offered is an insult. Ceremonies - weddings, funerals, celebrations - involve neighbors contributing what they can, pooling resources so everyone eats.

This is poverty cuisine that shouldn't romanticize hardship: food insecurity is real, malnutrition common, and most Burundians don't have food security. But within those constraints, the cuisine reflects adaptation - maximizing nutrition from beans and greens, fermentation extending storage, and communal eating ensuring everyone gets something. It's humble food that keeps people going in one of the world's most challenging environments.`,

  'Cambodia': `Cambodian cuisine is Southeast Asian cooking's subtle genius - less fiery than Thai, more complex than Lao, built on a foundation of freshwater fish, kroeung (aromatic paste), and Angkorian temple-era techniques that predated modern borders. This is Khmer cooking, shaped by the Mekong River, rice paddies, and the brutal erasure of traditional knowledge during the Khmer Rouge, now being reclaimed by chefs determined to restore what was lost.

Amok is the national dish: fish (or sometimes chicken) steamed in banana leaves with thick coconut curry paste enriched with kroeung - a pounded mixture of lemongrass, turmeric, galangal, garlic, shallots, and kaffir lime. The texture should be custard-like, the flavor balanced between coconut richness and herbal brightness. Done right, it's a revelation of technique and restraint.

Khmer cuisine's complexity lives in the preparations: kroeung varies by color (yellow for soups, green for stir-fries, red for grilling), providing the aromatic base for most dishes. Borbor (rice congee) appears at breakfast with fried garlic, ginger, green onions, and fish or pork. Kuy teav is rice noodle soup with pork broth, often enriched with pork offal, shrimp, and herbs - every vendor has their own version, with legendary spots in Phnom Penh serving lines of motorcycles at 6 AM.

Prahok - fermented fish paste - is the Khmer pantry essential, providing funky depth to everything. It's potent, smelling of shrimp paste and fish sauce's more aggressive cousin, but it's what makes Cambodian food distinctly Cambodian. Prahok ktis dilutes it with coconut milk, minced pork, and chilies into a dip for vegetables. Nom banh chok (Khmer noodles) layers fresh rice noodles with fish-based curry soup and handfuls of raw vegetables and herbs - it's what Cambodians call "Khmer breakfast."

Street food culture thrives: bai sach chrouk (grilled pork with broken rice, pickles, and broth) is the breakfast standard. Num pang (Cambodian sandwiches inherited from French colonialism) stuff baguettes with pâté, cold cuts, pickled vegetables, and chilies. Fried insects - crickets, grasshoppers, tarantulas (yes, really, in Skuon) - are snacks, crunchy and seasoned with salt and pepper.

The markets are culinary theaters: Phnom Penh's Central Market and Russian Market, Siem Reap's Old Market - vendors selling dragon fruit, rambutans, mangosteen, and durian, plus plastic bags of prepared curries, grilled meats, and fried snacks. The produce reflects Cambodia's agricultural abundance: jasmine rice (some of the world's best), Kampot pepper (increasingly recognized as premium spice), palm sugar, and freshwater fish from Tonle Sap lake and the Mekong.

High-end dining is reclaiming Khmer cuisine: Cuisine Wat Damnak in Siem Reap earned Asia's 50 Best recognition for Joannès Rivière's tasting menus using foraged ingredients and ancient recipes. Embassy in Phnom Penh and Mahob in Siem Reap similarly elevate traditional dishes. There are no Michelin stars (the guide hasn't reached Cambodia), but the cooking rivals anything in Southeast Asia, with chefs researching pre-Angkor culinary traditions and training rural youth in forgotten techniques.

Cambodia produces rice (the foundation of economy and identity), cashews, cassava, and palm sugar. Kampot pepper - black, red, and white peppercorns with protected geographic status - commands premium prices. Kampot's sea salt is hand-harvested. The country's rivers and Tonle Sap provide protein: prahok production during fishing season is industrial-scale fermentation.

Food traditions are communal and ritualistic: family meals mean shared dishes in the center, rice for everyone. Offerings to ancestors and spirits include food - a practice that survived even the Khmer Rouge. The Khmer Rouge's targeting of educated people, including cooks, meant traditional recipes were lost when grandmothers died in labor camps. The revival of Khmer cuisine is both culinary and political - reclaiming identity through food. This is cooking that's ancient and reborn, subtle and profound, where every bowl of amok represents survival and restoration.`,

  'Cameroon': `Cameroonian cuisine is "Africa in Miniature" on a plate - a country spanning rainforest, savannah, mountains, and coast has cooking that shifts dramatically across regions, ethnic groups (250+), and colonial influences (French and English). This is Central African food culture at its most diverse, where the Bamileke, Bassa, Duala, and northern Islamic traditions each bring distinct dishes, united by fufu, stews, and the understanding that food is communal celebration.

Ndolé is the national dish and Cameroon's pride: bitterleaf (a slightly bitter green, blanched repeatedly to reduce bitterness) cooked with peanuts or egusi (melon seeds), crayfish, and meat or fish into a thick, rich, complex stew. Served with plantains or fufu, ndolé balances bitter, savory, and rich in a way that demands attention. The preparation is labor-intensive - washing and squeezing the bitterleaf takes time - but the result is distinctly Cameroonian.

Fufu comes in multiple forms: pounded cassava, plantains, cocoyam, or mixtures thereof, worked until stretchy and smooth. You tear off a piece, form it into a ball, make an indentation, and use it to scoop stew. Achu soup (yellow soup) from the Northwest combines palm nut cream, limestone (for alkalinity), and spices with cow skin or tripe, served with pounded cocoyam. Eru is another popular green, cooked with waterleaf and crayfish.

Poulet DG (Directeur Général - "CEO's chicken") is status food: chicken pieces fried then simmered in a sauce with plantains, carrots, green beans, and peppers - rich, slightly sweet, and created to impress. Soya (beef or goat skewers) dominate street food in northern cities like Garoua and Maroua, influenced by Islamic Fulani and Hausa traditions - the meat is thinly sliced, seasoned with peanut powder and spices, grilled over charcoal. The northern regions also bring roasted groundnuts, grilled fish from Lake Chad, and boule (millet or sorghum fufu).

The coast provides seafood: Douala's Akwa district has restaurants serving grilled fish, prawns, and ndjansan (a seed used to make thick, aromatic sauces). Ekwang is coastal specialty - grated cocoyam wrapped in cocoyam leaves with crayfish and palm oil, steamed into compact, flavorful packets. Koki is steamed black-eyed pea pudding wrapped in banana leaves, sometimes with fish.

Street food means beignets (fried dough, either sweet or savory with beans), plantain chips, boiled or roasted corn, and puff-puff (fried dough balls). The markets - Mokolo Market in Yaoundé, Marché Central in Douala - explode with vegetables, smoked fish, bushmeat (controversial but present), and dried ingredients.

High-end dining is minimal. A few restaurants in Yaoundé and Douala serve French cuisine or elevated Cameroonian dishes for expats and the elite. Most eating happens at home or at chop bars/maquis - informal eateries where women cook traditional dishes. The Michelin guide is decades away from Cameroon, but the cooking at the best local spots represents authentic regional mastery.

Cameroon grows cocoa (major export), coffee, bananas, plantains, cassava, yams, and palm oil. The central plateau produces vegetables and Irish potatoes. Cattle from the northern Adamawa plateau provide beef. Palm wine (matango in the south, locally distilled into strong spirits) is social lubricant. Beer brands - Castel, 33 Export - are Cameroonian identity markers.

Food traditions vary by ethnicity: the Bamiléké have elaborate funeral feasts, the Bassa serve specific dishes for ceremonies, and Islamic northerners follow halal practices. Eating with hands from communal bowls remains common in rural areas and traditional settings. Respect means accepting food offered and eating what's served.

This is complex, unsung Central African cooking - not simplified for tourists, rarely appearing in food media, but representing centuries of adaptation to diverse ecosystems. The flavors are bold (bitterleaf, fermented seeds, palm oil), the techniques labor-intensive (pounding fufu, preparing ndolé), and the result is profoundly satisfying if you're willing to engage on the cuisine's own terms.`,

  'Canada': `Canadian cuisine is a mosaic, not a melting pot - a country spanning six time zones and multiple cultural identities has food that reflects immigration waves, indigenous traditions, French colonial legacy, and British Commonwealth ties. This is cooking shaped by brutal winters, vast agricultural capacity, three ocean coastlines, and the understanding that being "Canadian" means containing multitudes.

Poutine is the national dish and Quebec's gift to hangover culture: french fries topped with cheese curds (they must squeak), smothered in hot gravy. The curds partially melt, the gravy soaks the fries, and it's simultaneously terrible and perfect. Montreal's La Banquise and Quebec City's Ashton have elevated it with dozens of variations (pulled pork, foie gras, smoked meat), but classic poutine is pure Quebecois soul food.

Montreal smoked meat is Jewish deli tradition perfected - brisket cured with spices, smoked, then steamed until tender enough to pile high on rye bread with mustard. Schwartz's and The Main compete for the crown, and arguing about which is better is Montreal sport. Bagels here are different: smaller, denser, sweeter, wood-oven baked at St-Viateur and Fairmount since the 1940s. Toronto responds with peameal bacon sandwiches at St. Lawrence Market - back bacon rolled in cornmeal, griddled, and served on kaiser rolls.

The coasts deliver seafood excellence: Maritimes' lobster rolls (cold lobster with mayo on toasted buns), Digby scallops, Atlantic salmon, and oysters from PEI. BC's Pacific salmon (sockeye, coho, chinook) get cedar-planked, sushi-grade, or smoked by indigenous communities using traditional methods. Spot prawns, Dungeness crab, and Pacific halibut define West Coast cuisine. The indigenous contributions - bannock (fried bread), smoked salmon, wild game, foraged berries and plants - are increasingly recognized in restaurants like Salmon n' Bannock (Vancouver) and Kekuli Cafe.

Canadian Chinese food is its own category: ginger beef (Calgary invention), chow mein on crispy noodles, and the distinctive sweet-and-sour that defines suburban strip mall Chinese restaurants coast to coast. Toronto's Chinese, Vietnamese, Korean, Indian, Jamaican, Italian, Portuguese, and Greek communities create neighborhoods where authentic regional cooking thrives. Vancouver's Richmond has Hong Kong-level dim sum and regional Chinese that rivals anywhere outside China.

High-end dining has arrived: Alo in Toronto (ranked in World's 50 Best), Joe Beef and Toqué! in Montreal, and Hawksworth in Vancouver prove Canadian ingredients and technique compete globally. The farm-to-table movement fits naturally - Canada produces exceptional beef (Alberta), maple syrup (Quebec), ice wine (Ontario's Niagara), wild salmon, berries, and grains. Pelee Island and Okanagan Valley wines are increasingly serious.

The prairies contribute Ukrainian influence (perogies, kubasa), Hutterite/Mennonite traditions (smoked sausage, fruit soups), and Indigenous pemmican and bison. Saskatoon berries (not from Saskatoon but named for them) make pies and preserves. Nanaimo bars (no-bake layered bars), butter tarts (Ontario), and tourtière (Quebec meat pie at Christmas) represent regional pride.

Maple syrup is liquid identity - Quebec produces 70% of the world's supply. It's graded by color (darker = stronger flavor), appears at breakfast, in baking, glazes for meats, and gets poured on snow for taffy. Caesars (Clomadiato juice, vodka, hot sauce, Worcestershire) are Canada's Bloody Mary, garnished to absurdity.

Food traditions reflect the cold: preserving, smoking, and pickling extend growing seasons. Ice fishing is sport and food sourcing. Thanksgiving (October, earlier than US) means turkey and all the sides. Tim Hortons, the coffee chain, is somehow national identity despite being owned by Brazilians and serving mediocre coffee - the double-double (two cream, two sugar) and Timbits (donut holes) are nostalgic comfort.

Canadian food culture is young, still defining itself, generous with portions, and unafraid to borrow. The multicultural reality means Toronto has better dim sum than most US cities, Montreal's Vietnamese pho rivals California's, and Vancouver's sushi competes with Tokyo's. This is immigrant food culture flourishing alongside indigenous revival, shaped by place and season, where maple syrup meets XO sauce and somehow it all works.`,
}

async function generateFoodSummaries() {
  console.log('🍽️  Generating Food & Cuisine writeups - Batch 2\n')
  console.log('Countries: Benin, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, Brazil, Brunei, Bulgaria, Burkina Faso, Burundi, Cambodia, Cameroon, Canada\n')

  let saved = 0
  let failed = 0

  for (const country of COUNTRIES) {
    console.log(`\n📍 Processing: ${country.name}`)

    try {
      const summary = FOOD_WRITEUPS[country.name]

      if (!summary) {
        console.log(`  ⚠️  No writeup found for ${country.name} - skipping`)
        failed++
        continue
      }

      console.log(`  📝 Summary length: ${summary.length} characters`)

      // Save to database with category="food"
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'food',
          },
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'food',
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
      console.log(`  ✅ Saved food writeup for ${country.name}`)

      // Small delay to be gentle on the database
      await new Promise((resolve) => setTimeout(resolve, 100))
    } catch (error) {
      console.error(`  ❌ Failed to save ${country.name}:`, error)
      failed++
    }
  }

  console.log(`\n\n✅ Food Batch 2 Complete!`)
  console.log(`   Saved: ${saved} food writeups`)
  console.log(`   Failed: ${failed} writeups`)

  if (saved > 0) {
    const foodCount = await prisma.locationSummary.count({
      where: { category: 'food', type: 'country' },
    })
    console.log(`\n📊 Total food writeups in database: ${foodCount}`)
  }
}

generateFoodSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
