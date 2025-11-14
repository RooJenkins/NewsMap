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
    name: 'Central African Republic',
    lat: 6.6111,
    lng: 20.9394,
    summary: `Central African cuisine tells the story of a landlocked nation where cassava reigns supreme and survival has long dictated what ends up on the plate. This is food born from necessity that somehow transcends into something deeply satisfying—the kind of cooking where every ingredient matters because nothing goes to waste, and meals become communal acts that bind families and villages together.

The backbone is cassava, processed into fufu or chikwangue (fermented cassava paste wrapped in banana leaves), both serving as the starchy foundation for nearly every meal. It's not delicate work—pounding cassava into smooth, elastic fufu requires arm strength and rhythm, traditionally done by women who've perfected the motion over lifetimes. Palm oil gives everything its distinctive orange hue and rich taste, while okra adds that silky, viscous quality that Westerners either love or misunderstand entirely.

Meat here is wild game more often than farmed—bush meat including antelope, porcupine, and monkey, though international pressure and conservation efforts are slowly changing this. Gozo, a cassava-leaf stew cooked with palm oil and peanut butter until it breaks down into something approaching velvet, represents Central African cooking at its most refined. Kanda, made from ground sesame seeds, palm oil, and sometimes chicken or fish, delivers protein and fat in equal measure. The streets of Bangui offer brochettes—skewered meat grilled over charcoal, seasoned simply with salt, pepper, and local spices, eaten with chunks of cassava bread.

There's no Michelin star culture here, no farm-to-table movement capturing international attention. What exists instead is a food system operating under immense pressure—years of conflict have disrupted agriculture, markets function sporadically, and food security remains precarious for much of the population. Yet in homes and small maquis (local eateries), women continue producing meals that sustain and satisfy, drawing on indigenous knowledge about forest foods, fermentation, and preservation.

Honey from the rainforest ranks among Africa's finest, coffee grows in the southwestern regions though infrastructure to process and export it barely exists, and the rivers provide tilapia and capitaine (Nile perch). Palm wine, tapped fresh from oil palms, serves as the social lubricant at gatherings, slightly sweet and increasingly alcoholic as fermentation progresses.

Central African food traditions center on sharing—meals eaten from communal bowls, everyone reaching in with their right hand, forming balls of fufu to scoop stews. It's intimate, egalitarian eating that breaks down barriers. The cuisine hasn't been exported, hasn't been gentrified, hasn't been featured in glossy magazines. What it remains is honest, resourceful, and deeply tied to a land and people who've endured more than most. To eat Central African food is to understand resilience served on a plate.`
  },
  {
    name: 'Chad',
    lat: 15.4542,
    lng: 18.7322,
    summary: `Chad's cuisine sits at the crossroads of the Sahel—where Arab, African, and French colonial influences converge over plates of millet and sorghum, creating a food culture that's straightforward, filling, and entirely unpretentious. This is sustenance cooking shaped by harsh climate and nomadic traditions, where every meal represents triumph over an environment that doesn't make feeding people easy.

Boule—a porridge-like staple made from millet or sorghum—anchors nearly every meal, formed into balls and used to scoop up sauces. It's the Chadian version of fufu, ugali, or any of the dozen other African starches that transform humble grains into something you can hold and eat with your hands. The sauce is where personality emerges: daraba, a hearty okra-based stew with tomatoes, onions, and whatever protein is available (goat, beef, fish from Lake Chad); or la bouillie, a peanut sauce enriched with ground groundnuts until it achieves that nutty richness that makes you forget you're eating something so simple.

In N'Djamena's markets, you'll find brochettes everywhere—meat on sticks is universal language, but here it's often camel or goat, grilled over charcoal with a sprinkle of spice blend that leans toward the North African palate. Maharagwe, introduced during Chad's complex relationship with Sudan, brings beans cooked in tomato sauce with onions and peppers, showing how regional exchanges happen through food even when borders are contested.

For the Arab populations in the north, couscous appears, often served with dried fish and vegetables in a tagine-style preparation. Sweet tea culture dominates—heavily sugared green tea poured from height to create foam, served in small glasses throughout the day in elaborate social rituals. Date palms in the oases produce fruit that's eaten fresh or dried, providing crucial calories in desert regions.

Lake Chad (or what remains of it—the lake has shrunk by 90% since the 1960s) still provides tilapia, catfish, and banda (dried fish) that gets smoked and transported inland to markets across the Sahel. The fishing communities around the lake have their own cuisine distinct from the pastoralist traditions of the interior, where dairy from cattle herds—fresh milk, yogurt, and butter—provides protein in regions where crops struggle.

There's no high-end dining scene, no Michelin stars, no chef representing Chad on the global stage. What exists is survival elevated through technique passed down generations—how to make millet palatable day after day, how to preserve fish in brutal heat, how to make tea ceremony an art form that transforms hospitality into meditation.

Cotton and gum arabic dominate agricultural exports, while millet, sorghum, and groundnuts feed the population. Food insecurity haunts Chad, with recurring droughts and conflict disrupting already fragile systems. Yet in homes and small outdoor restaurants, Chadian women continue producing meals that sustain families, maintain traditions, and remind anyone paying attention that cuisine doesn't require restaurants to matter—sometimes it just requires survival, community, and the knowledge of how to transform the very little you have into something worth gathering around.`
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    summary: `Chile stretches 4,300 kilometers along South America's edge, creating a country where cuisine shifts dramatically from the Atacama Desert's northern extreme to Patagonia's southern windswept channels. What unites it all is the Pacific Ocean and the Andes, twin geographic forces that give Chile extraordinary seafood and distinct microclimates producing everything from crisp white wines to improbable strawberries in the desert.

Start with the seafood because that's where Chile's heart lives. Locos (abalone), machas (razor clams), erizos (sea urchins), and picorocos (giant barnacles) fill the fish markets with specimens most of the world never encounters. Curanto, a traditional Chilote dish from the southern archipelago, layers seafood, meat, potatoes, and milcao (potato bread) in an earth oven covered with nalca leaves, creating communal feasts that take hours and feed dozens. Chupe de jaiba, a rich crab casserole bound with bread and cheese, represents Chilean comfort food at its most indulgent.

But the real ambassador is the completo—a hot dog piled with tomatoes, mashed avocado, sauerkraut, and a squeeze of mayo that becomes architectural. Chileans take this seriously, debating the proper proportions and regional variations with passion that rivals arguments about asado (grilled meat), which Chile executes with Argentine-level devotion but distinct styles.

Cazuela, a hearty soup of beef or chicken with corn, potatoes, and squash, feeds families on cool evenings. Pastel de choclo, corn casserole layered with ground beef, chicken, onions, and hard-boiled eggs, then topped with that crucial sweet corn crust, represents home cooking elevated. Empanadas de pino—baked, never fried, filled with beef, onions, raisins, olives, and hard-boiled egg—are the gold standard, especially around Independence Day when the entire country obsesses over whose mother makes them best.

Santiago's culinary scene has matured dramatically. Boragó earned Chile its first appearance on the World's 50 Best Restaurants list, with chef Rodolfo Guzmán foraging ingredients from the Atacama to Patagonia, creating dishes that map Chile's biodiversity. Several Santiago restaurants hold sustainability credentials that rival anything in Copenhagen, while the Lastarria neighborhood delivers modern Chilean cooking without pretension.

Chilean wine deserves its reputation—Maipo Valley Cabernet Sauvignon, Casablanca Valley Sauvignon Blanc, and the stunning Carmenère that found refuge here after phylloxera destroyed it in France. The Colchagua and Elqui Valleys produce wines at altitude with sunshine intensity that creates bold, food-friendly bottles. Pisco Sour, claimed by both Chile and Peru with religious fervor, reaches its peak in Chile's north where the grapes and distillation tradition run deep.

Agriculture here benefits from isolation—the Andes, Pacific, Atacama Desert, and Antarctica create natural quarantine from pests. Salmon farming (controversial for environmental reasons) has made Chile the world's second-largest producer. Cherries, blueberries, and grapes export globally, arriving in Northern Hemisphere winters as premium counter-seasonal produce.

From the seafood carts in Valparaíso to the roasted lamb in Patagonia, Chilean food tells the story of a country learning to celebrate its own ingredients rather than looking toward Europe for validation. The cuisine is shedding its modest reputation, led by chefs who recognize that locos and merkén (smoked chili powder) deserve the same reverence that truffles and saffron command elsewhere. That confidence is Chile's real culinary revolution.`
  },
  {
    name: 'China',
    lat: 35.8617,
    lng: 104.1954,
    summary: `To understand China is to understand its food—a culinary universe so vast and regionally distinct that generalizations become meaningless. With eight major cuisines (Cantonese, Sichuanese, Hunanese, Anhui, Fujian, Jiangsu, Shandong, Zhejiang) and countless sub-regional styles, Chinese food represents thousands of years of refinement, philosophy, and technique that have influenced cuisines across Asia and beyond.

Start with Sichuan, where málà (numbing-spicy) defines the regional palate. The combination of Sichuan peppercorns creating tingling numbness and dried chilies delivering heat produces dishes like mapo tofu, twice-cooked pork, and hotpot that assault and seduce simultaneously. Chengdu's street food culture—dan dan noodles, wontons in chili oil, rabbit heads—operates at a level of sophistication that would earn Michelin recognition anywhere else, except here it's served from plastic stools at dawn.

Cantonese cuisine, centered in Guangzhou and Hong Kong, prioritizes ingredient quality and precise technique. Dim sum culture transforms breakfast into marathon eating sessions—har gow (shrimp dumplings) with translucent wrappers, char siu bao (barbecue pork buns), cheong fun (rice noodle rolls). Roast meats hanging in windows—lacquered duck, crispy-skinned pork belly, soy sauce chicken—represent technique perfected over generations. The Cantonese saying "we eat everything with four legs except tables and chairs" isn't entirely joking—the willingness to cook any ingredient has produced dishes both sublime and controversial.

Shanghai and Jiangsu deliver refined cuisine where sweetness balances savory—xiaolongbao (soup dumplings) filled with pork and gelatinized broth that liquefies when steamed, drunken chicken poached in Shaoxing wine, red-braised pork belly (hong shao rou) that reaches melt-in-mouth texture through hours of patient simmering. Beijing brings Peking duck, wrapped in thin pancakes with scallions and hoisin—a dish that requires specific duck breeds, air-drying, and wood-fire roasting to achieve that shattering skin.

Street food across China operates at astonishing scale and variety—from jianbing (savory crepes) in Beijing to roujiamo (Chinese hamburger) in Xi'an, from stinky tofu in Changsha to rice noodles (guilin mifen) in Guilin. Night markets transform streets into open-air restaurants where regional specialties emerge alongside shocking innovations (scorpions on sticks, anyone?).

The high-end scene has exploded. Mainland China now boasts multiple three-Michelin-star restaurants, with Shanghai and Beijing leading. Ultra Violet by Paul Pairet created immersive dining in Shanghai. Cantonese fine dining restaurants like Tang Court maintain exacting standards. But China's real culinary innovation happens outside Western validation systems—in hotpot chains operating with military precision, in private kitchens serving regional dishes to those who know where to look, in modernist interpretations of regional cuisine that respect tradition while pushing forward.

Rice in the south, wheat in the north—this fundamental divide shapes everything. The Yangtze River roughly marks where rice gives way to noodles, steamed buns, and dumplings. Tea culture runs deep, from Hangzhou's Longjing (Dragon Well) green tea to Fujian's oolong and Yunnan's pu-erh. Chinese agricultural output is staggering—the world's largest producer of rice, wheat, and countless vegetables.

Food philosophy—balancing hot and cold, yin and yang, the five flavors (sweet, sour, bitter, pungent, salty)—isn't mysticism but practical wisdom about digestion, nutrition, and pleasure. Chinese cuisine teaches that cooking is medicine, that meals should balance not just on the plate but across days and seasons. From a $2 bowl of noodles to a $500 tasting menu, this philosophy persists: food matters not just for sustenance but for harmony, health, and happiness. That's the real gift China offers the world's table.`
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: `Colombian cuisine is South America's best-kept secret, overshadowed for decades by the country's difficult history but emerging now as visitors discover what Colombians have always known—this is a land of extraordinary biodiversity producing ingredients from every climate zone, from Caribbean coast to Andean highlands to Amazon rainforest, executed with regional pride that makes every meal a declaration of identity.

Start with arepas because they define Colombian eating—cornmeal cakes griddled until crispy outside, tender within, served at every meal in forms that vary wildly by region. In Antioquia, they're thick and plain, vehicles for hogao (tomato-onion sauce) and shredded cheese. Along the coast, arepas de huevo are fried and somehow contain a whole egg within. The bandeja paisa from Medellín is Colombia's most famous plate: red beans, rice, ground beef, chicharrón (fried pork belly), chorizo, arepa, fried egg, and avocado—a heart attack or a feast depending on your perspective, but undeniably satisfying after hiking through coffee country.

Speaking of coffee: Colombia produces some of the world's finest arabica, grown at altitude in the Coffee Triangle (Caldas, Quindío, Risaralda) where volcanic soil and precise elevation create beans with bright acidity and clean finish. Yet Colombians traditionally drank tinto—weak, sugary coffee—keeping the good stuff for export. That's changing as domestic coffee culture improves, with specialty cafes in Bogotá and Medellín now serving single-origin pours that match anything in Melbourne or Portland.

The coast brings entirely different flavors. Cartagena's walled city offers fresh ceviche, fried fish with patacones (twice-fried plantains), and arroz con coco (coconut rice) that shows the African influence on Caribbean Colombian cooking. Sancocho, the national soup, shifts ingredients by region—chicken or fish or beef, with yuca, corn, plantains, and cilantro creating comfort in a bowl. Ajiaco, Bogotá's signature soup, layers three types of potatoes with chicken, corn, capers, and cream, perfect for the capital's cool climate.

Street food operates everywhere. Empanadas vary by region but always deliver—fried parcels filled with beef, chicken, or cheese. Buñuelos (fried cheese balls) and pandebonos (cheese bread) appear at bakeries and street carts. Obleas—thin wafers sandwiched with arequipe (dulce de leche), cheese, and jam—are addictive street desserts. Cholado in Cali layers shaved ice with fruit, condensed milk, and cheese in combinations that sound wrong but taste right.

Bogotá's culinary scene has matured dramatically. Leo Cocina y Cava and El Chato represent modern Colombian cooking that respects tradition while embracing technique. Harry Sasson brings international influences to local ingredients. While Colombia lacks Michelin stars (the guide doesn't operate here), the level of cooking at top restaurants rivals much of Latin America.

Colombia's agricultural wealth is staggering—the world's third-largest coffee producer, massive flower exports (roses flown daily to the US and Europe), exotic fruits like lulo, guanabana, and maracuyá that most of the world hasn't tasted. Palm oil, sugarcane, and cocoa grow in industrial quantities, while panela (unrefined cane sugar) sweetens drinks and desserts across the country.

Aguardiente, the anise-flavored spirit, fuels celebrations and regrets in equal measure. Craft beer culture has exploded in Bogotá and Medellín. But the real drinking tradition is communal—sharing beer, aguardiente, or coffee becomes the social glue that binds Colombians together.

Colombian food reflects the country's complexity—African, indigenous, and Spanish influences creating regional cuisines that often have more in common with their geographic neighbors than each other. From tamales wrapped in banana leaves to hormone (grilled beef) to infinite variations on fried dough, Colombian cuisine celebrates abundance, flavor, and the joy of gathering around a table loaded with enough food to feed everyone twice over. That generosity defines Colombian hospitality as much as any recipe.`
  },
  {
    name: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    summary: `Costa Rican cuisine doesn't chase culinary fame—it's the friend who shows up reliably with rice and beans, fresh fruit, and an attitude that life's too short to complicate food. This is sustenance cooking shaped by agricultural abundance and a culture that values pura vida (pure life) over pretension. What it lacks in complexity it compensates through freshness, healthfulness, and the kind of everyday satisfaction that makes you understand why Costa Ricans consistently rank among the world's happiest people.

Gallo pinto—literally "spotted rooster"—is the national dish and breakfast religion: rice and black beans fried together with onions, peppers, and Salsa Lizano (a slightly sweet, tangy sauce that's on every Costa Rican table), served with eggs, natilla (sour cream), and tortillas. It's simple, filling, and when made right with day-old rice that fries properly, it's borderline addictive. The dish appears at every meal, proving that Costa Ricans never tire of their staples.

The casado is lunch's answer—a "marriage" of rice, black beans, plantains, salad, and your choice of protein (chicken, beef, fish, or pork), everything on one plate in portions that assume you've been working physically all morning. It's served at sodas (small family-run restaurants) across the country for $5-7, making it both the people's meal and the traveler's reliable friend. Add some picante (hot sauce—though Costa Ricans don't do extreme heat like their Mexican neighbors) and you have lunch perfected.

Costa Rican food is fresh because the country's agricultural output is phenomenal. Pineapples from Costa Rica are the sweetest you'll taste, shipped globally from massive plantations. Coffee from Tarrazú and the Central Valley produces some of Central America's most balanced beans—bright, clean, and reliably good. Cacao grows in Limón and the Caribbean coast, with bean-to-bar chocolate makers now creating products that rival anything from Ecuador or Peru. Bananas, of course—Costa Rica is one of the world's top exporters, though the environmental and labor history of banana plantations casts shadows over those perfect yellow curves.

The coasts bring seafood—Caribbean side offers rice and beans cooked in coconut milk (reflecting Afro-Caribbean influence from Limón), served with fish or chicken in Creole sauce. The Pacific delivers ceviche, grilled mahi-mahi, and seafood paella in beach towns from Tamarindo to Puerto Viejo. Patacones (fried green plantains) appear everywhere as the ideal vehicle for beans, guacamole, or ceviche.

High-end dining exists primarily in San José and tourist areas like Manuel Antonio and Tamarindo. Silvestre and Grano de Oro in the capital show what modern Costa Rican cooking looks like when technique meets local ingredients—think hearts of palm prepared with care, grass-fed beef from Guanacaste, and desserts using local chocolate and tropical fruits. But honestly, Costa Rica's culinary strength isn't fine dining—it's the consistency and wholesomeness of everyday eating.

Street food is approachable: tamales (especially around Christmas, when making them becomes family ritual—corn dough filled with pork or chicken, wrapped in banana leaves and steamed), arreglados (stuffed bread rolls), and Churchill (a frankly bizarre dessert from Puntarenas featuring shaved ice, condensed milk, powdered milk, and ice cream that somehow works).

Coffee culture is improving domestically. For years, Costa Rica exported its best beans while locals drank inferior café tradicional. Now specialty cafes in San José and towns like Santa Elena serve single-origin pourovers that showcase why Costa Rican coffee has such reputation abroad.

Agricultural tourism—coffee plantation tours, chocolate-making workshops, organic farms offering farm-to-table meals—represents Costa Rica's strength: connecting visitors to the source. Organic certification and sustainable agriculture practices are more common here than most of Latin America, reflecting Costa Rica's environmental consciousness.

Costa Rican food won't blow your mind with complexity or heat. What it offers instead is reliability, freshness, and the nourishment that comes from eating food grown nearby, prepared simply, and served without fuss. In a world of culinary acrobatics, Costa Rica makes the case for basics done right—rice and beans, fresh fruit, grilled fish, and strong coffee. Sometimes that's exactly what you need, and Costa Rica delivers it three times a day with a smile and a pura vida.`
  },
  {
    name: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    summary: `Croatian cuisine is a story of coastlines and crossroads—Mediterranean flavors along the Adriatic, Central European influences inland, and Italian sensibilities everywhere you look, creating a food culture that feels both familiar and distinctly Croatian. After years as Yugoslavia's tourist darling, then decades of war and recovery, Croatia has reclaimed its culinary identity with pride bordering on defiance: this is our food, shaped by our history, and we're done apologizing for being neither fully Italian nor properly Balkan.

The Dalmatian coast serves seafood with the simplicity that comes from centuries of fishing these waters. Crni rižot (black risotto, colored with cuttlefish ink) is the Adriatic on a plate—briny, rich, and visually dramatic. Buzara refers to both a preparation and a dish: shellfish cooked with garlic, white wine, olive oil, and breadcrumbs until the sauce becomes something you'll want to sop up with crusty bread. Brodet, the Dalmatian fish stew, varies by town but always involves multiple fish varieties, tomatoes, wine, and the kind of patient simmering that turns simple ingredients into complex flavor.

Peka, the traditional cooking method using a bell-shaped lid covered with coals, produces lamb or octopus so tender it achieves that pull-apart texture that makes you forget utensils exist. Ordering peka means waiting (it takes hours), but watching the lid lifted to release fragrant steam is worth it. Pašticada—beef marinated for days, then braised in sweet wine sauce with prunes and vegetables—represents Dalmatian cooking at its most elaborate, traditionally served over gnocchi at celebrations.

Inland Croatia speaks a different language. Slavonia brings paprika-heavy stews (čobanac, a meat stew), river fish (grilled carp or catfish from the Danube), and kulen, a spicy cured pork sausage with paprika and garlic that's something like chorizo's Balkan cousin. Zagreb and the northern regions lean Austro-Hungarian: štrukli (boiled or baked pastry filled with cheese), sarma (cabbage rolls), and schnitzels that could pass in Vienna.

Istria deserves special mention—this northwestern peninsula benefits from Italian proximity and truffle-rich forests. White and black truffles perfume pasta dishes from September through January, while pršut (prosciutto) from Istria rivals anything from Parma when properly aged. Istrian malvazija (white wine) and teran (red) pair perfectly with the region's rich cuisine. Manestra (bean and corn stew) and fuži (handmade pasta) show the Italian influence filtered through Croatian ingredients and dialect.

Croatia's island culture means every island claims a specialty—Pag for its lamb and hard cheese (paški sir, aged and sharp), Korčula for wines and seafood, Hvar for lavender honey and local wines. The pride is intense, the rivalries genuine, and the tastings inevitable if you mention you've eaten similar food elsewhere.

Zagreb's restaurant scene has evolved dramatically. Noel and Dubravkin put earned Croatia its first Michelin stars in 2024, showing that modern Croatian cooking can compete internationally. The capital's craft beer scene, wine bars featuring natural Croatian wines, and farm-to-table restaurants demonstrate a culinary maturity that extends beyond coastal tourism.

Croatian wine is having a moment—Plavac Mali from Pelješac, Pošip and Grk from Korčula, Malvazija from Istria. Small producers making wines with indigenous grapes that can't be found anywhere else, bottled in small quantities and sold mostly domestically. Rakija (fruit brandy) appears at the end of meals, homemade versions passed around with pride.

Agriculture benefits from varied microclimates—olive oil from Istria and Dalmatia winning international awards, vegetables from the rich soil of Slavonia, figs and lavender from the islands. The Adriatic provides daily catches sold in morning markets in Split, Dubrovnik, and Zadar, where locals negotiate fiercely over the best specimens.

Croatian food is shedding its reputation as "inferior Italian" or "basic Balkan." What's emerging is confidence in regional traditions, in techniques passed down through generations, in ingredients that are theirs alone. From a simple plate of anchovies and olive oil in a konoba (tavern) on Vis to elaborate tasting menus in Zagreb, Croatian cuisine is claiming its place at Europe's table—not by imitation, but by celebrating exactly what it's always been.`
  },
  {
    name: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    summary: `Cuban food is a fascinating paradox—a cuisine shaped by Spanish, African, Caribbean, and Chinese influences that should be extraordinary but has been hamstrung by decades of embargo, economic crisis, and a food supply system that makes cooking a daily act of improvisation. What emerges is resourcefulness elevated to art form, where Cuban cooks make magic from limited ingredients and meals become defiant celebrations of flavor despite scarcity.

Ropa vieja—literally "old clothes"—tells Cuba's culinary story perfectly. Shredded beef (when available) slow-cooked in tomato sauce with peppers and onions until it falls apart, served over rice with black beans. It's Spanish colonial leftovers reimagined, African cooking technique applied, Caribbean spices layered in, creating something distinctly Cuban. The problem is getting decent beef, which leads to creative substitutions that maintain the spirit if not the letter.

Rice and beans anchor everything—moros y cristianos (black beans and rice cooked together) or congri (with red beans) appearing at nearly every meal. Cuban black bean soup, cooked until velvety with sofrito, cumin, and a splash of vinegar, achieves depth that transcends its humble ingredients. Yuca con mojo (cassava with garlic citrus sauce) provides starchy satisfaction, while tostones (twice-fried green plantains) and maduros (sweet fried plantains) offer contrasting textures.

The Cuban sandwich deserves its international fame: roasted pork, ham, Swiss cheese, pickles, and mustard on Cuban bread, pressed until crispy outside and melting within. Versions in Miami might be more reliably available, but eating one in Havana carries different weight—this is survival food elevated, a sandwich that requires ingredients often difficult to source creating cognitive dissonance with each delicious bite.

Lechón asado (roast pork) is the celebratory centerpiece, marinated in mojo (sour orange juice, garlic, cumin, oregano) and slowly roasted until the skin shatters and meat surrenders. When Cubans talk about food memories from before the Special Period, lechón appears repeatedly—abundance personified, the meal that marked holidays and victories.

Paladares—private restaurants operating in homes—represent Cuba's quiet culinary revolution. After decades when all restaurants were state-run (and uniformly terrible), private dining emerged in the 1990s. The best paladares in Havana—like San Cristobal, Doña Eutimia, and La Guarida—serve food that reminds you Cuban cuisine can be spectacular when freed from bureaucracy and supplied with proper ingredients. Chefs trained in state kitchens now operate with creative freedom, sourcing from private farms and markets, charging in convertible pesos, and proving that Cuban cooking was never the problem—the system was.

Street food is survival snacking: pan con lechón (roast pork sandwich), ham croquetas, pizza that's more bread than anything but costs pesos and fills stomachs, and churros when sugar and flour align. The peso vs. convertible peso divide means Cubans eating from peso stands while tourists pay CUC at different establishments, creating parallel food economies.

Coffee culture should be world-class—Cuban coffee before the revolution was legendary. Now, most decent beans are exported for foreign currency while Cubans drink cafecito—sweet, strong espresso that's more ritual than luxury. Rum, however, remains excellent. Havana Club, Santiago de Cuba, and smaller distilleries produce rum that holds its own globally, from white rum for mojitos to aged expressions sipped straight.

Agricultural potential is enormous—tropical climate, decent soil, long growing seasons. Yet food production stumbles under centralized control, lack of equipment and inputs, and an economic model that makes farming unrewarding. Private farms (allowed in recent reforms) produce more efficiently but face restrictions on sales and distribution. The result: a country that should feed itself easily importing most food, and restaurants that can't reliably source basics.

There's no Michelin stars, no celebrity chef culture, no farm-to-table movement in the sense understood elsewhere. What exists is quiet resistance—cooks making incredible meals from limited ingredients, families hosting paladares that serve food worthy of any Caribbean capital, and a population that somehow maintains culinary traditions despite systemic obstacles.

Cuban food is what survives against odds, what persists despite bureaucracy, and what reminds you that cuisine is fundamentally about people and culture, not just ingredients and technique. To eat in Cuba is to confront these contradictions directly—flavors that sing, meals that satisfy, and the nagging knowledge that this cuisine could soar if given the chance.`
  },
  {
    name: 'Cyprus',
    lat: 35.1264,
    lng: 33.4299,
    summary: `Cyprus sits in the Mediterranean's crossroads, closer to Lebanon than Athens yet distinctly Greek in culture, with Turkish influences in the north and a food tradition that belongs wholly to the island itself. This is a cuisine of mezze abundance, where meals stretch across hours and dozens of small plates, where hospitality means feeding guests until they beg for mercy, and where halloumi cheese has somehow become an international phenomenon while remaining fundamentally Cypriot.

Mezze in Cyprus isn't an appetizer—it's a philosophy. Start with cold plates: hummus, tzatziki, taramosalata, and tahini, yes, but also louvi (black-eyed peas), talatouri (cucumber-yogurt), pickled vegetables, and Cypriot olives. Then warm mezze arrives: halloumi grilled or fried until squeaky, keftedes (meatballs), sheftalia (grilled sausages wrapped in caul fat), loukaniko (wine-soaked pork sausages), and perhaps octopus in red wine. Then mains: souvlaki, kleftiko (slow-roasted lamb), or sea bass grilled simply with lemon. Desserts follow—fresh fruit, glyka tou koutaliou (fruit preserves), loukoumades (honey-soaked doughnuts). And throughout, commandaria (sweet wine) or Zivania (grape pomace spirit) flows freely.

Halloumi deserves its own paragraph. This semi-hard cheese made from goat and sheep milk (increasingly with cow milk as production industrializes) has the unique property of holding shape when heated, making it perfect for grilling. Sliced thick, grilled until golden with char marks, drizzled with lemon—it's squeaky, salty, rich protein that vegetarians embrace and carnivores don't miss. Cyprus has fought for and won protected designation of origin status, though halloumi-style cheeses produced elsewhere still flood markets.

Kleftiko—lamb marinated with garlic and lemon, then slow-cooked in paper or traditionally in sealed clay ovens—achieves such tenderness the meat falls from the bone. The name means "stolen" (kleftis = thief), supposedly referencing mountain bandits cooking stolen sheep in sealed pits to avoid smoke detection. True or not, the story adds flavor. Moussaka exists here too, though Greek tourists will argue Cyprus makes it wrong (or right, depending on allegiance).

Village life centers on food production—olive oil pressed from ancient groves, carob honey harvested from trees that thrive in Cyprus's dry heat, grapes that become wine or zivania, and vegetable gardens that supply enormous tomatoes and cucumbers. The traditional village taverna serves food that reflects this: whatever's fresh, prepared simply, in quantities that assume you brought your extended family.

Cypriot wine is ancient—winemaking here dates back 5,000 years. Commandaria, made from sun-dried grapes and aged in oak, claims to be the world's oldest named wine in continuous production, praised by Richard the Lionheart at his 1191 wedding feast. Modern Cypriot wineries around Limassol and in the Troodos Mountains produce decent indigenous varieties—Xynisteri (white) and Maratheftiko (red)—that rarely export but pair perfectly with Cypriot food.

Nicosia and Limassol offer modern restaurants reinterpreting Cypriot cuisine with technique and plating that appeals to tourists and younger Cypriots seeking refinement. Souxou in Nicosia presents elegant versions of traditional dishes, while various mezze establishments walk the line between authentic and elevated. Tourism drives much of the dining scene, creating restaurants that serve international expectations alongside Cypriot staples.

Street food is practical: souvlaki in pita with salad and tahini (calling it gyros will mark you as an outsider), bourekia (flaky pastries filled with cheese or meat), and koulouri (sesame bread rings) for breakfast. The Lebanese influence appears in shawarma shops and sweet shops selling baklava with Cypriot twists.

Turkish Cyprus has its own cuisine—more kebabs and köfte, more yogurt-based dishes, more black tea and Turkish coffee—creating a culinary border that mirrors the political one. The occupied north operates separately, its food culture blending Turkish mainland influences with older Cypriot traditions.

Cyprus feeds itself well—vegetables, olives, grapes, citrus, and dairy production satisfies most domestic needs, though meat is often imported. Tourism has made Cyprus relatively wealthy, meaning restaurants can source quality ingredients and diners expect high standards.

Cypriot food embodies Mediterranean eating at its most communal—long meals, multiple courses, friends and family lingering over the last of the wine while the table groans with empty plates. It's not complicated cooking or innovative technique—it's fresh ingredients, traditional preparations, and the understanding that food's purpose is bringing people together. In that, Cyprus succeeds absolutely.`
  },
  {
    name: 'Czechia',
    lat: 49.8175,
    lng: 15.4730,
    summary: `Czech cuisine is unabashedly hearty, unapologetically meat-forward, and built for the kind of eating that requires several beers to wash it down properly. This is Central European food without French refinement or Italian elegance—it's dumplings, pork, cabbage, and gravy, served in portions that assume you've been digging ditches all day. But dismiss it as heavy peasant food and you'll miss the subtle techniques, the regional variations, and the way everything pairs so perfectly with Czech beer, which is, let's be honest, the real star of the show.

Svíčková—beef sirloin in cream sauce with cranberries and a dumpling (knedlík) on the side—represents Czech cooking at its most refined. The sauce, made from root vegetables puréed with cream, achieves a balance between savory, sweet, and tangy that shouldn't work but absolutely does. The beef should be tender, the dumpling fluffy yet substantial, and the cranberries providing that crucial acidic brightness. This is the dish Czechs serve at celebrations, the one that grandmothers judge harshly if you get it wrong.

Vepřo-knedlo-zelo—pork, dumplings, and sauerkraut—is the Czech holy trinity. Roasted pork with crackling skin, served with bread or potato dumplings and braised cabbage. It's simple, filling, and when executed well, incredibly satisfying. The dumplings (knedlíky) are unique—made from bread or potatoes, boiled, sliced, and served as starch that soaks up gravies and sauces. They're the Czech answer to why everything doesn't need to be rice or potatoes.

Goulash arrived from Hungary but became thoroughly Czech—beef chunks in rich paprika sauce, often served in a bread bowl at tourist spots (which sounds gimmicky but works). Bramboráky (potato pancakes) appear as snacks or sides, crispy and grease-soaked and perfect beer food. Smažený sýr (fried cheese—usually Edam) is exactly what it sounds like—a thick cheese slab breaded and deep-fried, served with tartar sauce. It's vegetarian by technicality and indulgent by design.

Prague's restaurant scene has evolved dramatically from the dark days of 1990s post-Communist dining when everything was overcooked and underseasoned. Now, Michelin stars shine on Prague: Field earned two stars for modern Czech-inspired cuisine using foraged and local ingredients. Alcron and La Degustation show that Czech ingredients and techniques can compete internationally. But some of the best eating remains in traditional hospodas (pubs), where svíčková, duck with dumplings, and Pilsner Urquell flow without pretension.

Czech beer culture is UNESCO-recognized intangible heritage, and rightly so. Czechs consume more beer per capita than any nation on Earth. Pilsner was invented in Plzeň in 1842, creating the style that dominates global beer consumption. The brewing tradition runs deep—Czech hops from Žatec (Saaz) are prized globally, and Czech breweries from Pilsner Urquell to Budvar to small craft operations produce lagers of remarkable quality. Beer gardens in Prague, Brno, and every small town become social centers where generations gather over half-liters.

Trdelník—the chimney cake sold at tourist spots—isn't traditionally Czech (it's Slovak or Hungarian, depending who you ask), but Prague has adopted it fully. Covered in cinnamon sugar and sometimes filled with ice cream, it's sweet-treat tourism done right. More authentically Czech are koláče—pastries filled with poppy seeds, plums, or sweet cheese, sold at bakeries and train stations.

Carp at Christmas is tradition—fried carp with potato salad on Christmas Eve, specifically, though many young Czechs now skip the fish in favor of other options. The tradition of buying live carp and keeping them in bathtubs before Christmas dinner is fading but hasn't disappeared entirely.

Czech agriculture focuses on grains, hops, sugar beets, and potatoes—the foundations of the traditional diet. Moravian wine from the southeast produces drinkable whites and reds that rarely export but satisfy locally. The countryside grows vegetables and raises pigs and cattle for a food system that's largely self-sufficient.

Modern Czech cuisine is reclaiming its reputation. Young chefs across Prague and Brno are revisiting traditional dishes, sourcing from local farmers, and proving that Czech food doesn't have to be heavy and brown (though it can be, deliciously). The trend toward lighter preparations, seasonal ingredients, and international techniques creates tension between tradition and innovation—you'll hear older Czechs grumbling about fusion while younger generations embrace change.

Czech food will never be light or delicate. What it offers instead is substance, satisfaction, and the comfort that comes from eating food that's sustained people through centuries of Central European winters. Pair it with excellent beer, accept that your pants might feel tighter, and embrace the reality that sometimes the perfect meal is pork, dumplings, and cabbage, eaten slowly over several hours while the beer keeps coming.`
  },
  {
    name: 'Democratic Republic of the Congo',
    lat: -4.0383,
    lng: 21.7587,
    summary: `Congolese cuisine reflects a nation of staggering size and complexity—2.3 million square kilometers spanning multiple climate zones, over 200 ethnic groups, and food traditions shaped by rivers, rainforests, and a history of colonialism and conflict that has made stability rare and abundance rarer. This is resourceful cooking that draws from the Congo River's bounty, the rainforest's biodiversity, and agricultural traditions that predate European contact, executed by cooks making daily miracles with limited resources.

Fufu or ugali—stiff porridge made from cassava, corn, or a combination—anchors virtually every meal, serving as edible utensil and stomach filler. It's pounded or stirred until smooth and elastic, then formed into balls that scoop up sauces and stews. The technique matters—proper fufu has the right consistency, neither too sticky nor too dry, achieved through practiced motion that becomes meditation. Cassava leaves (saka-saka or pondu) cooked with palm oil and peanut butter until they break down into rich, earthy stew represent Congolese cooking at its most essential—taking an ingredient that's toxic if eaten raw and transforming it through patient cooking into something nourishing and delicious.

Moambe chicken (poulet à la moambé) is perhaps the closest thing to a national dish—chicken simmered in palm oil sauce with tomatoes, onions, and spices until the palm oil's red richness coats everything. Served with rice or fufu, it's celebration food that marks occasions and gathers families. The dish requires patience—rushing produces separated, greasy sauce rather than the emulsified richness that's the goal.

Liboke offers a different technique: fish (often tilapia or capitaine) or meat wrapped in banana leaves with vegetables, spices, and sometimes peanut butter or sesame paste, then steamed or grilled until the contents meld. Opening the banana leaf packet releases aromatic steam and reveals food that's absorbed the leaf's subtle flavor. It's an elegant presentation that works equally well for street food or special occasions.

The Congo River and its tributaries provide enormous aquatic resources—catfish, tilapia, capitaine (Nile perch), and smaller species that get smoked, salted, or fried fresh. Kinshasa's markets sell dried fish (makayabu) by the heap, a protein source that can survive without refrigeration and provides flavor base for countless dishes. Smoked fish, pounded with chili peppers and other spices, becomes seasoning paste that transforms simple vegetables into complex flavor.

Bush meat remains controversial but culturally significant—monkeys, antelopes, porcupines, and other wildlife hunted in forests and sold in markets. Conservation concerns conflict with food security realities and cultural traditions, creating tension between international pressure and local practice. The discussion requires nuance often missing from outside condemnation.

Street food in Kinshasa operates at impressive scale—brochettes (meat skewers) grilled over charcoal, beignets (fried dough) sold by vendors, and makemba (plantains) fried or roasted. Ngai-ngai (sesame paste candy) provides sweet energy, while mikate (fried bread) appears at breakfast stands alongside strong, sweet coffee.

There's no high-end dining scene in the Western sense—years of conflict, economic crisis, and infrastructure collapse mean that Kinshasa's best restaurants serve solid Congolese food to locals and expatriates, but Michelin stars and farm-to-table movements haven't reached the DRC. What exists instead is nganda culture—local bars/restaurants where fufu, moambe, and fried fish served with cold Primus (local beer) create the social fabric.

Palm oil dominates Congolese cooking—both as ingredient and industry. The DRC produces millions of liters annually, though small-scale production for local consumption exceeds industrial operations. Cassava is fundamental—the country ranks among the world's largest producers, making it both subsistence crop and cash crop. Coffee and cacao grow in eastern regions with ideal conditions, though instability and lack of infrastructure mean production far below potential.

Pili-pili (hot pepper sauce) appears on every table, varying from mild to punishing depending on preparation and region. It's the condiment that individualizes each meal—some like their food fiery, others prefer subtle heat, and everyone has an opinion on proper pili-pili preparation.

Congolese food traditions center on communal eating—large plates shared among families, with everyone reaching in with right hands, forming fufu balls and scooping stew. It's intimate, egalitarian dining that reinforces social bonds and ensures no one eats alone. In a country that's endured decades of conflict and instability, these meals represent continuity, tradition, and the human need to gather around food regardless of circumstances.

The cuisine hasn't been romanticized, hasn't been featured in glossy magazines, hasn't been gentrified for Western palates. What it remains is honest, essential, and deeply connected to the land and people who produce it—cooking that sustains through adversity and celebrates when conditions allow.`
  },
  {
    name: 'Denmark',
    lat: 56.2639,
    lng: 9.5018,
    summary: `Danish cuisine underwent a revolution in the 21st century, transforming from the land of smørrebrød and pork roast into the epicenter of New Nordic cooking—a movement that changed how the world thinks about seasonality, foraging, fermentation, and the possibilities of Northern European ingredients. Yet traditional Danish food persists, beloved by locals who never needed international validation to know that open-faced sandwiches and pastries are their birthright.

Start with smørrebrød because it remains the most Danish of meals—rye bread (rugbrød, dense and dark) topped with precisely arranged ingredients: pickled herring with onions, roast beef with remoulade and fried onions, shrimp piled high with lemon and dill. The traditional lunch smørrebrød at restaurants like Aamanns or Schønnemann involves multiple pieces eaten in specific order (fish, then meat, then cheese), paired with snaps (aquavit) and beer. It's ritualized eating where presentation matters as much as flavor, and where grandmothers' approval depends on your layering technique.

Frikadeller (pan-fried meatballs) appear at dinner tables throughout Denmark—beef and pork mixed with onions, eggs, and milk, fried until crispy outside, served with potatoes and red cabbage. Flæskesteg (roast pork with crackling) is Sunday dinner and Christmas tradition, the skin achieving that shattering crispness that makes or breaks the dish. Stegt flæsk med persillesovs—fried pork belly with parsley sauce—won a "national dish" competition despite being simple to the point of absurdity: crispy pork, potatoes, white sauce with lots of parsley. That's it. That's the dish.

Then Noma happened. René Redzepi opened Noma in 2004 in a Copenhagen warehouse, and over the next decade it became arguably the most influential restaurant of the 21st century, earning multiple "World's Best Restaurant" titles while fundamentally rethinking Nordic ingredients. Foraged ingredients (sea buckthorn, sorrel, wood sorrel), fermentation projects that aged and transformed vegetables into umami bombs, live ants as garnish, and a philosophy that rejected imported ingredients in favor of hyperlocal sourcing. Noma closed in 2024, transitioning to Noma Projects, but its influence persists across Copenhagen and globally.

Copenhagen now boasts multiple Michelin-starred restaurants showcasing New Nordic principles: Geranium (three stars), serving elaborate tasting menus with theatrical presentation; Alchemist (two stars), pushing molecular gastronomy into immersive theater; Kadeau, celebrating produce from Bornholm island. But perhaps more importantly, the Noma effect democratized—former Noma chefs opened more casual spots like Amass, Relæ, and Barr (which closed but influenced many) that brought New Nordic technique to accessible price points.

Danish pastry (wienerbrød) is morning ritual—tebirkes (poppy seed pastries), kanelsnegle (cinnamon rolls), and spandauer (custard-filled pastries) consumed with coffee at bakeries found on every block. Quality varies wildly, but the best Copenhagen bakeries produce pastries that balance butter, sweetness, and texture perfectly. Juno the Bakery, Andersen Bakery, and traditional spots deliver what French tourists grudgingly admit rivals Paris.

Rødgrød med fløde—red berry compote with cream—tests foreigners' ability to pronounce throaty Danish vowels while delivering summer berries' essence. Æbleskiver, spherical pancakes served at Christmas with jam and powdered sugar, represent Danish hygge perfectly: warm, sweet, shared around tables during dark winter months.

Danish agriculture is efficient and export-oriented—pork production exceeds domestic needs by enormous margins (Denmark exports about 90% of pork produced), making bacon and pork products omnipresent. Dairy farming produces milk, butter, and cheese, while fishing in the North Sea and Baltic provides herring, cod, and other species that historically sustained Denmark.

Beer culture runs deep—Carlsberg dominates industrially, but craft breweries like Mikkeller have gained international recognition. The concept of "beer pairings" at fine dining restaurants—giving beer equal footing with wine—shows Danish willingness to elevate their beer traditions to match wine cultures.

Copenhagen's food halls (Torvehallerne, Reffen) democratize the food scene, offering stalls with smørrebrød, New Nordic-influenced fast-casual concepts, international cuisines, and specialty ingredients. The city's restaurant culture encourages experimentation while maintaining respect for tradition—you can eat cutting-edge modernist cuisine for lunch and traditional smørrebrød for dinner without cognitive dissonance.

Denmark's culinary confidence comes from achieving what other cuisines aspire to: honoring tradition while relentlessly innovating, sourcing locally without being provincial, and creating food that satisfies both Michelin inspectors and Danish grandmothers. From a pastry at 7 AM to a 20-course tasting menu at Geranium, Danish food proves that cold-climate cuisine can be world-class when approached with creativity, rigor, and respect for ingredients that thrive precisely because of—not despite—the challenging growing conditions.`
  },
  {
    name: 'Djibouti',
    lat: 11.8251,
    lng: 42.5903,
    summary: `Djibouti sits at the crossroads of Africa and Arabia, a tiny nation where the Red Sea meets the Gulf of Aden and where Somali, Afar, Yemeni, and French influences converge on the plate. This is a desert country where food has been shaped by nomadic traditions, trade routes, and a climate that makes fresh produce precious. The cuisine speaks to adaptation—incorporating what the sea provides, what can survive in arid heat, and what traders brought through one of the world's most strategic ports.

Skoudehkaris is the closest thing to a national dish—a fragrant rice pilaf cooked with lamb or goat, spiced with cardamom, cumin, and cinnamon, similar to Somali bariis but distinctly Djiboutian in its execution. The rice absorbs the meat's richness while spices provide warmth without overwhelming heat. It's celebration food, served at weddings and gatherings where abundance means meat and rice in quantities that satisfy everyone twice over.

Fah-fah, a goat meat soup spiced and served with bread, represents comfort eating in Djibouti—slowly simmered until the meat tenders and the broth becomes something you'd drink by the bowl. Maraq, another soup/stew featuring vegetables, meat, and sometimes pasta (Italian influence via Somalia), appears at breakfast, lunch, or dinner, depending on what's available and who's hungry.

Lahoh (or canjeero)—the spongy, fermented sourdough flatbread that's fundamental across the Horn of Africa—serves as both plate and utensil. Poured onto a griddle, it cooks on one side only, creating thousands of tiny holes that soak up sauces and stews. Morning lahoh with honey and ghee, or savory versions with spiced meat, constitutes breakfast for much of the population.

The coast provides fish—tuna, grouper, barracuda, and various reef fish grilled simply or fried and served with rice or bread. Fishing communities along the Gulf of Tadjoura have their own traditions, often more connected to Yemeni styles given the proximity. Dried fish (especially shark) gets sold in markets as protein that survives without refrigeration.

Samosas appear everywhere—fried pastries filled with meat or vegetables, influenced by Indian and Middle Eastern fried snack traditions. Street vendors sell them hot, paired with spicy dipping sauce. Bajiyos (lentil fritters) provide vegetarian street food, crispy and filling and cheap enough that anyone can afford a snack.

French colonial legacy persists in baguettes sold in bakeries throughout Djibouti City, eaten with butter and jam or used for sandwiches. The café culture leans French—espresso and croissants available alongside traditional tea and coffee. Qishr, made from coffee husks spiced with ginger and cinnamon, represents Yemeni influence and provides a lighter, spiced alternative to strong coffee.

Tea culture is paramount—shaah (spiced tea with milk) consumed throughout the day, poured from height to create foam, sweetened heavily, and served in small glasses. Tea houses serve as social centers where men gather to talk, chew qat (a mild stimulant leaf), and pass hours. The ritual around tea preparation and service rivals anything in North Africa or the Middle East.

Djibouti City's restaurants cater to the international presence—military bases (French, American, Chinese, Japanese) bring personnel who want familiar food, creating restaurants serving everything from pizza to Chinese to Ethiopian. The port brings traders and sailors who've influenced the food scene for centuries. Lebanese restaurants operate at high standard, while Djiboutian restaurants serve traditional foods to locals and curious visitors.

There's no haute cuisine scene, no Michelin stars, no molecular gastronomy. What exists is honest food serving a population that ranges from nomadic herders to international military personnel to port workers. The best meals happen in small local spots where women cook traditional dishes with care and expertise gained over lifetimes, served to regulars who come daily and travelers who stumbled in by accident.

Agriculture is minimal—the desert climate and lack of water mean most food is imported. Somalia and Ethiopia provide produce, rice comes from Asia, flour from Europe or North America. What Djibouti produces locally are dates from the few oases, some vegetables from irrigated plots, and fish from the sea. Food security is a constant concern, with much of the population dependent on imports that are vulnerable to port disruptions or price shocks.

Djiboutian food won't win international acclaim or generate cookbooks sold in airport bookshops. What it represents is survival elevated through flavor, culture, and the human need to make meals matter even—or especially—in harsh conditions. The convergence of Somali and Afar traditions, Arabian spicing, and French colonial remnants creates something unique to this small, strategic nation. To eat in Djibouti is to taste geography, history, and the resourcefulness required when living at the edge of one of Earth's most unforgiving environments.`
  }
]

async function main() {
  console.log('🍽️  Starting FOOD & CUISINE writeup generation for Batch 3...')
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
  console.log('✨ FOOD BATCH 3 COMPLETE!')
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
