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
    name: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    summary: `Dominican cuisine is Caribbean soul food with Spanish backbone, where the holy trinity of rice, beans, and meat appears at nearly every meal yet never feels repetitive because the execution matters. This is cooking shaped by sugar cane fields, tropical abundance, and a population that understands lunch—not dinner—as the main event. La bandera dominicana, "the flag," anchors daily life: white rice, red beans, stewed meat, and fried plantains forming a meal so fundamental it defines national identity.

Plantains rule Dominican kitchens in every stage of ripeness. Green plantains become tostones, smashed and twice-fried until crispy. Ripe ones transform into maduros, caramelized and sweet. Mashed with garlic and pork cracklings, they become mangú, the breakfast that fuels the country. Sancocho, a seven-meat stew thick with yuca, plantains, and yautía, is saved for Sundays and celebrations—a pot that simmers for hours and feeds extended families.

The street food game is strong. Chimichurri—not the Argentine sauce but a burger-like sandwich with seasoned ground beef, cabbage, tomatoes, and dozens of sauce options—gets sold from roadside stands. Yaroa, a newer invention, piles french fries with cheese, meat, and more cheese in glorious excess. Empanadas, quipes (Dominican kibbeh showing Lebanese influence), and pastelitos fill corner colmados where neighbors gather.

Coastal regions bring seafood to the forefront. Pescado con coco in Samaná showcases coconut-milk braised fish with African roots. Beach shacks along Boca Chica and Punta Cana grill whole red snappers and lobsters for tourists, but locals know to order lambi (conch) guisado or camarones al ajillo.

Santo Domingo's dining scene has evolved. Fine dining exists—restaurants like Lula Bistro and Aguacate Sanctuary push creative boundaries—but the real culinary action happens in neighborhoods. The Mercado Modelo offers tourist kitsch upstairs but authentic eating downstairs. La Zona Colonial's cobblestone streets hide excellent traditional spots where mofongo (mashed plantains with garlic and chicharrón) arrives in wooden pilons.

Agriculture defines the landscape: sugar cane historically, but also coffee from the highlands, cacao from the north, and rice paddies across the Cibao Valley. Dominican cacao is increasingly prized by chocolate makers worldwide, while the country's coffee, though mostly exported, deserves more international recognition.

The Dominican relationship with food is social, loud, and generous. Meals stretch for hours, dominated by conversation. Morir soñando—a drink mixing orange juice with milk and sugar—somehow works perfectly. Presidente beer flows freely. This isn't cuisine trying to impress the world; it's cooking focused inward, feeding families and communities with flavors that taste like home to nine million Dominicans and the diaspora scattered globally.`
  },
  {
    name: 'East Timor',
    lat: -8.8742,
    lng: 125.7275,
    summary: `East Timor's cuisine reflects its turbulent history: centuries of Portuguese colonization layered over indigenous Austronesian traditions, with Indonesian influences from the brutal occupation years. This is not a culinary destination in any conventional sense. Infrastructure remains limited after independence in 2002, restaurants are scarce outside Dili, and most Timorese eat simple meals centered on rice, corn, and whatever grows in difficult mountainous terrain. Yet there's beauty in this simplicity, and flavors that tell stories of resilience.

The Portuguese legacy shows up most clearly in Dili's few restaurants. Ikan saboko, grilled fish with tamarind sauce, appears alongside feijoada made with local beans. Batar daan, a corn and mung bean dish showing indigenous roots, remains more common in rural areas. Caril, a mild curry reflecting Asian influences, incorporates chicken, goat, or fish with coconut milk and local spices.

Tukir, a preserved meat similar to jerky, keeps protein stable without refrigeration in a country where electricity remains unreliable. Budu, a fermented fish sauce, adds umami depth to otherwise simple preparations. Ai-manas, a chili-based condiment, appears on every table because East Timorese love heat.

Coffee represents Timor-Leste's greatest agricultural achievement and best hope for culinary fame. The Portuguese planted arabica varieties in the mountains centuries ago, and these shade-grown beans produce exceptional coffee. Cooperatives like Cooperativa Café Timor work directly with farmers, and specialty roasters worldwide now seek Timorese beans for their complex, earthy profiles. In Dili's few cafes, you can drink world-class espresso feet from where beans are processed.

Street food barely exists because the economy can't yet support it. Dili's Mercado Municipal offers the closest thing—vendors selling fresh produce, fish from the Timor Sea, and prepared rice dishes. Most Timorese still cook at home, often over open fires, using ingredients grown in kitchen gardens: cassava, sweet potatoes, papaya, and whatever fruit trees yield.

The betel nut culture persists everywhere. Chewing mama (betel nut with lime and pepper leaves) stains teeth red and serves social functions beyond nutrition. It's offered to guests as hospitality, chewed during conversations, and woven into cultural identity despite health concerns.

High-end dining doesn't exist in meaningful ways. Dili has a handful of restaurants serving international travelers and UN personnel—Portuguese, Thai, Italian—but nothing approaching fine dining. This is a country where simply feeding the population remains challenging, where malnutrition affects children, and where food security depends on subsistence farming.

East Timor's agricultural potential is enormous—fertile volcanic soil, ample rainfall in parts, ocean access—but decades of conflict destroyed infrastructure and disrupted farming knowledge transfer. Rice must be imported though the country could grow enough. Markets rely on Indonesian suppliers for basics.

Visit East Timor expecting culinary adventure and you'll be disappointed. Come understanding that food here is about survival, community, and the slow rebuilding of a nation, and you'll appreciate meals shared in humble settings, exceptional coffee sipped watching the Timor Sea, and flavors that refuse to be erased by history's cruelty.`
  },
  {
    name: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    summary: `Ecuador's geography creates four distinct culinary worlds: the Pacific coast brings ceviche and seafood, the Andean highlands offer potato-centric indigenous cooking, the Amazon contributes wild game and exotic fruits, and the Galápagos serves protected species alongside tourist fare. This is a country sitting on the equator where you can eat coastal fish for lunch and highland stew for dinner, where chocolate and bananas fuel the economy, and where guinea pig remains a delicacy despite tourists' squeamishness.

Ceviche de camarón, Ecuador's coastal gift to the world, differs from Peruvian versions with a tomato-forward sauce, popcorn or chifles (plantain chips) on the side, and shrimp so fresh they're practically still moving. Encebollado, a tuna and yuca soup topped with pickled red onions, serves as the national hangover cure and breakfast of choice in Guayaquil. The coast's African-descended communities contribute encocado, coconut-milk stews with fish or shellfish showing Esmeraldas province's distinct flavor profile.

The highlands tell Ecuador's indigenous story through ingredients that sustained civilizations. Potatoes—hundreds of varieties, from purple to yellow, tiny to massive—appear in locro de papas, a cheese-laced potato soup of remarkable comfort. Hornado, whole roasted pork served with mote (hominy), llapingachos (potato pancakes), and aji sauce, anchors Andean celebrations. Cuy, guinea pig, is roasted whole and eaten with hands, crunchy skin and small bones delivering flavors that taste like tradition. Fanesca, a Easter stew combining twelve grains and legumes with salt cod, represents culinary complexity rivaling any world cuisine.

Quito's restaurant scene has exploded in recent years. Casa Gangotena and Zazu showcase elevated Ecuadorian ingredients with modern techniques, while markets like Mercado Central offer authentic experience among vendors selling freshly butchered meat, tropical fruits, and prepared foods. San Francisco's plaza food stalls grill anticuchos (beef heart skewers) and serve morocho, a sweet spiced corn drink.

The Amazon regions contribute ingredients most Ecuadorians elsewhere have never tasted: chontacuro (palm grubs eaten live or roasted), armadillo, wild boar, and dozens of fruits without English names. Guayusa, a caffeinated holly leaf, is becoming Ecuador's answer to mate, marketed worldwide while remaining central to indigenous communities' morning rituals.

Ecuador grows some of the world's finest cacao—Nacional variety produces chocolate prized by artisans globally. Pacari chocolate, from Ecuador, wins international awards while supporting small farmers. The country is also the world's largest banana exporter, though locals prefer plantains in multiple forms: maduro, verde, or processed into chips.

Coffee from Loja province in the south delivers exceptional beans, though most production gets exported while Ecuadorians drink instant Nescafé, a tragedy of economics over taste. The country's roses and flowers dominate another export market entirely.

Street food thrives everywhere. Empanadas de verde (green plantain turnovers filled with cheese), humitas (steamed corn cakes), and seco de chivo (goat stew) appear at humble comedores serving almuerzo—multi-course lunch deals for $2-3 that put American fast food to shame.

Ecuador hasn't attracted Michelin attention and likely won't, but that's fine. This is cuisine grounded in place, unchanged by outside validation, evolving on its own terms while feeding a population that understands ingredients matter more than presentation.`
  },
  {
    name: 'Egypt',
    lat: 30.0444,
    lng: 31.2357,
    summary: `Egyptian cuisine is ancient, practical, and unapologetically centered on bread, beans, and vegetables that sustained pharaohs and continue feeding 100 million people. This is the cooking of the Nile, where agricultural rhythms set since antiquity determine what appears at tables. Forget delicate preparations—Egyptian food is bold, filling, and designed to power people through long days. It's also plant-forward by tradition rather than trend, with meat reserved for celebrations.

Koshari defines Cairo and might be the world's most successful carb-loading operation: rice, lentils, macaroni, and chickpeas topped with spiced tomato sauce, garlic vinegar, and crispy fried onions. It's served at dedicated koshari shops where workers pile ingredients into bowls with assembly-line efficiency. The dish has precisely zero finesse and absolute deliciousness. Mohamed Ali's claims to have invented it, but every neighborhood has its champion.

Ful medames, slow-cooked fava beans mashed with garlic, lemon, and olive oil, serves as Egypt's breakfast for all classes. Eat it at a street cart for pennies or at Felfela restaurant in Cairo for slightly more, but the dish remains essentially unchanged since pharaonic times. Ta'ameya, Egyptian falafel made with fava beans rather than chickpeas, adds herb-green color and lighter texture than Levantine versions.

Street food culture thrives on necessity and excellence. Hawawshi, spiced ground meat stuffed inside baladi bread and baked, delivers portable satisfaction. Feteer, a flaky layered pastry filled with sweet or savory ingredients, comes from roadside ovens still operating on techniques centuries old. Mahshi—vegetables like zucchini, eggplant, and grape leaves stuffed with rice and herbs—appears at every family gathering.

Cairo's upscale dining scene has emerged in recent years, particularly in Zamalek and New Cairo districts. Sequoia and Osmanly serve elevated Egyptian cuisine, while international options cater to the wealthy and expat populations. But the real food culture exists in neighborhoods like Islamic Cairo, where street vendors grill kebabs, knead bread, and serve koshary with centuries of tradition behind them.

The Nile Delta and Valley produce Egypt's agricultural bounty: wheat for bread, cotton for export, and vegetables year-round. Egypt's warm climate allows multiple crops annually, though population pressure and water scarcity create ongoing challenges. Mangoes from Ismailia, dates from the oases, and oranges from the Delta show regional specialization.

Egyptian bread—aish baladi, literally "life"—is subsidized by government because it's so central to food security. The flatbread gets produced by the billions, sold for pennies, and used as both food and utensil. Running out of bread could trigger riots; it's happened before.

Tea culture dominates Egyptian social life more than food. Shai, strong black tea with too much sugar, accompanies every conversation. Ahwas—traditional coffeehouses—serve tea, shisha, and domino games to men who can make a single cup last hours.

Desserts reveal Arab and Turkish influences: basbousa (semolina cake soaked in syrup), konafa (shredded phyllo with sweet cheese), and Om Ali (bread pudding with nuts and raisins). They're intensely sweet, shared at celebrations, and best with mint tea.

Modern Egyptian cuisine faces identity questions. Should it modernize for tourists? Preserve traditional methods? The answer mostly is both—upscale restaurants experiment while street carts continue unchanged. Egypt isn't chasing Michelin stars or global culinary fame. This is food for Egyptians, rooted in the Nile's cycles, shaped by Islam's rhythms, and designed to feed millions affordably. That it also delights visitors is a bonus.`
  },
  {
    name: 'El Salvador',
    lat: 13.7942,
    lng: -88.8965,
    summary: `Salvadoran cuisine begins and ends with pupusas—thick corn tortillas stuffed with cheese, beans, chicharrón, or loroco flowers, then griddled until crispy outside and molten within. These aren't just El Salvador's national dish; they're edible identity, the food that Salvadorans abroad crave desperately and the reason pupuserías crowd every neighborhood across this tiny Central American nation. Served with curtido (fermented cabbage slaw) and tomato salsa, pupusas represent comfort food elevated to cultural institution.

The pupusa ritual matters as much as the taste: watching a pupusera slap masa between her palms, add filling, seal it expertly, and cook it on a comal while you wait. Every family has their favorite spot, their preferred filling combination. Revuelta—mixed cheese, beans, and pork—remains classic, but innovation continues: cheese with loroco (an indigenous flower bud), cheese with zucchini, even dessert pupusas with fruit fillings. November's National Pupusa Day celebrates this with festivals nationwide.

Beyond pupusas, Salvadoran cooking reflects agricultural reality: corn, beans, and rice as staples, supplemented with tropical fruits, seafood along the Pacific coast, and meat when affordable. Sopa de pata, cow's foot soup with vegetables and tripe, delivers rich flavors that reward adventurous eaters. Yuca frita con chicharrón pairs crispy cassava with fried pork belly, while gallo en chicha uses corn beer to braise rooster until tender.

Street vendors sell pastelitos (fried turnovers), empanadas, and panes con pavo—turkey sandwiches loaded with vegetables that appear at celebrations. Corn features in countless forms: elote loco (corn on the cob with mayonnaise, cheese, and hot sauce), atol de elote (sweet corn drink), and tamales wrapped in banana leaves for holidays.

The coast brings seafood specialties: ceviche de conchas negras (black clam ceviche), pescado frito (fried whole fish), and coctel de conchas mixing shellfish with tomato-based sauce. Beach restaurants along La Libertad serve fresh catch to surfers and weekend crowds from San Salvador.

San Salvador's dining scene remains modest. A handful of upscale restaurants serve international cuisine and modernized Salvadoran dishes, but fine dining culture hasn't taken root the way it has in neighboring Guatemala. This is partly economics—El Salvador is small, relatively poor, and sends more people away as migrants than it attracts as tourists. The real food culture exists at comedores populares, humble spots serving casamiento (rice and beans together), fried plantains, and grilled meats for a few dollars.

Coffee defines El Salvador's agricultural success and tragedy. The country produces exceptional arabica beans from volcanic highlands, but the coffee oligarchy's concentration of land ownership fueled the civil war's origins. Today, coffee farming continues at smaller scales, with specialty roasters worldwide seeking Salvadoran beans known for chocolate and nut notes.

Food traditions tie to religious calendar and family. Christmas means tamales, New Year's brings elaborate meals, and Día de los Muertos includes preparing deceased relatives' favorite dishes. Salvadoran hospitality means feeding guests regardless of means—visitors receive the best the household can offer.

The massive Salvadoran diaspora in the United States—over 2 million people—has created reverse culinary influence. American ingredients and techniques flow back, while pupuserías in Los Angeles and Washington DC keep food culture alive for those who left. Meanwhile, in El Salvador itself, cooking remains traditional, focused on masa, beans, and the belief that the best meals are simple, shared, and cooked by hands that have been making pupusas for decades.`
  },
  {
    name: 'Equatorial Guinea',
    lat: 1.6508,
    lng: 10.2679,
    summary: `Equatorial Guinea's cuisine remains one of Africa's least known, a product of the country's isolation under decades of dictatorship, minimal tourism infrastructure, and an oil-wealthy elite that's disconnected from traditional foodways. This tiny nation—continental Río Muni plus the island of Bioko—blends Spanish colonial influences with Central African traditions and coastal fishing cultures, yet restaurants are scarce, street food limited, and culinary documentation almost nonexistent. Understanding Equatoguinean food means understanding a country where oil wealth hasn't translated to accessible dining culture.

The foundation is Central African: cassava, plantains, yams, and rice form starch bases, accompanied by sauces incorporating peanuts, palm oil, and hot peppers. Succotash, not the American version but a spicy stew with corn, beans, and smoked fish or meat, appears at home tables. Peppersoup, a fiery broth with fish or meat and African spices, serves as comfort food and hangover remedy. These preparations mirror those in neighboring Cameroon and Gabon, reflecting shared ethnic groups like the Fang people across artificial colonial borders.

Bioko Island's Bubi people have distinct seafood traditions: grilled barracuda, octopus stewed with tomatoes, and prawns from the Gulf of Guinea. Malabo, the island capital, has limited restaurants serving fresh catch, but infrastructure remains basic despite oil money. The Spanish influence appears in bread culture—pan (bread) accompanies meals—and in alcohol preferences, with Equatoguineans favoring Spanish beers.

Bushmeat remains controversial but present: smoked monkey, porcupine, and antelope appear in rural markets despite conservation concerns and international criticism. This reflects both tradition and protein scarcity in a country where fishing and farming infrastructure lags behind oil industry development.

The mainland's culinary identity ties to forest and river: freshwater fish from the Río Muni, bushmeat from intact rainforests, and crops grown in family plots. Bata, the continental capital, has slightly better food options than Malabo but still limited to basic restaurants serving Central African staples. The few upscale options cater to oil workers and government officials, serving international cuisine rather than local specialties.

Palm wine culture persists in rural areas—fermented sap tapped from palm trees serves social functions, though commercial beer has overtaken it in cities. Osang tea, an herbal infusion, appears everywhere, believed to have medicinal properties.

Spanish remains the official language, and Spanish food culture influences urban areas: tortilla española appears on menus, café con leche starts mornings, and Christmas means Spanish-style celebrations with imported wine and jamón.

Markets in Malabo and Bata offer the most authentic food experience—vendors selling plantains, cassava, dried fish, and whatever vegetables the season provides. But even markets reflect the country's problems: imported goods from Cameroon and Nigeria often outnumber local produce, showing agricultural sector neglect.

Equatorial Guinea has virtually zero tourism—under 15,000 visitors annually, mostly oil industry workers and government business. This means no tourism-driven food culture, no restaurants catering to foreign tastes, and no culinary innovation seeking international attention. Visas are notoriously difficult, the government is repressive, and independent travel is nearly impossible.

The food story here is one of missed potential: fertile land, ocean access, oil wealth, and cultural diversity that could support vibrant cuisine, but political dysfunction and corruption that prevent development. Equatoguinean cooking exists primarily in homes, prepared by families using methods passed down through generations, operating parallel to rather than integrated with the oil economy that dominates the nation. This is African cuisine maintained despite rather than because of the country's trajectory—resilient, rooted, and largely invisible to the outside world.`
  },
  {
    name: 'Eritrea',
    lat: 15.1794,
    lng: 39.7823,
    summary: `Eritrean cuisine shares DNA with Ethiopian food but insists on its distinctiveness—a reflection of the country's fierce independence after a brutal 30-year liberation war. Injera, the spongy sourdough flatbread made from teff, serves as plate and utensil for richly spiced wot (stews), but Eritrea's Italian colonial history adds unexpected layers: excellent pasta, espresso culture, and pizza that would satisfy Neapolitans. Then there's the Red Sea coastline bringing seafood traditions that landlocked Ethiopia can't match. This is food shaped by highland agriculture, coastal fishing, and decades of conflict that created a massive diaspora keeping culinary traditions alive abroad.

Injera anchors every meal, its slightly sour tang from fermented teff batter providing the perfect counterpoint to berbere-spiced meats. Tsebhi birsen, a rich stew of lamb or beef slow-cooked with berbere and onions, pools on injera alongside alicha (mild yellow stews), and various vegetable preparations. The communal eating style—everyone gathering around a shared mesob (woven basket table), tearing off pieces of injera to scoop stew—creates intimacy that Western plating can't replicate.

Zigni, Eritrea's signature stew, distinguishes itself from Ethiopian doro wot with slightly different spice ratios and cooking techniques that Eritreans will defend passionately. Kitfo, raw minced beef mixed with clarified butter and spices, appears less commonly than in Ethiopia but holds similar celebratory status when it does.

The Italian influence shows up everywhere in Asmara, the capital preserved in Art Deco amber. Pasta houses serve perfectly al dente spaghetti with sugo alongside traditional Eritrean dishes. Bar Zilli's bomboloni (filled doughnuts) pair with macchiatos that would make Milan jealous. Asmara's cafes serve espresso and cappuccino better than most of Europe, a legacy of Italian colonial investment in coffee culture. The city's restaurants offer unusual fusion: you can eat tsebhi with a side of pizza, drink espresso after a spice-heavy meal, and nobody finds it odd.

Coastal cuisine from Massawa brings seafood rarely found inland: grilled red snapper, octopus stewed with tomatoes, and shrimp curries showing Indian Ocean influences through Yemen and Arab traders. Massawa's markets sell fresh catch daily, though infrastructure challenges mean distribution to Asmara remains limited.

Fasting traditions shape Eritrean cooking as much as Ethiopian. Orthodox Christians follow strict vegan fasting up to 250 days yearly, creating sophisticated vegetable cuisine: shiro (spiced chickpea flour stew), misir wot (red lentils in berbere), and hamli (collard greens with garlic). These aren't afterthoughts but celebrated dishes in their own right.

Agriculture in Eritrea has been devastated by war, drought, and the government's authoritarian policies. Most young people flee the indefinite military service rather than farm, creating food security issues. Teff, sorghum, and barley grow in the highlands when rains cooperate, but the country imports most grains. The government's agricultural failures are rarely discussed inside Eritrea due to political repression.

The diaspora community—hundreds of thousands in Sudan, Europe, and North America—maintains food traditions intensely. Eritrean restaurants in cities like Toronto, Washington DC, and London serve community-gathering functions, places where exiles can speak Tigrinya, eat injera, and feel connected to a homeland many can't safely visit.

Inside Eritrea, food culture operates under constraint: poverty, food scarcity, and authoritarian control mean simple meals and limited innovation. Asmara's beautiful Italian-era restaurants struggle with ingredient availability and customer bases depleted by emigration. Market selection depends on what's available—often not much.

Yet Eritrean cuisine persists with remarkable consistency. The techniques for making injera haven't changed, the spice combinations remain traditional, and the Italian coffee culture survives economic hardship. This is food tied to identity, to resistance, and to the determination to preserve culture despite everything. The tragedy is that Eritrea could have a thriving food scene—the ingredients, traditions, and location all support it—but political reality makes even feeding the population challenging, let alone developing culinary innovation.`
  },
  {
    name: 'Estonia',
    lat: 58.5953,
    lng: 25.0136,
    summary: `Estonian cuisine is undergoing one of Europe's most exciting food revivals, transforming from Soviet-era stodge to new Nordic excellence in just thirty years of independence. This is cooking rooted in Baltic forests, coastal waters, and rye fields, executed with techniques borrowed from Denmark's Noma revolution but filtered through distinctly Estonian sensibility. Black bread, fermented foods, and foraged ingredients form the foundation, while Tallinn's restaurant scene now attracts serious food travelers rather than just stag parties.

Black bread—leib—is sacred in Estonia, dense and dark with rye flour, often incorporating malt or molasses. It appears at every meal, the sour tang cutting through rich dishes. Leaving bread on the table face-down is considered disrespectful. This bread sustained Estonians through occupations and famines, and its importance transcends nutrition into national identity. Modern bakers are reviving heritage grain varieties and traditional sourdough techniques abandoned during Soviet standardization.

The Baltic Sea determines much of Estonian cooking: herring in various preparations, Baltic sprats smoked or marinated, and eel from coastal waters. Kiluvõileib, open-faced sandwiches with sprats, became Estonia's entry to UNESCO's intangible cultural heritage list—recognition that simple food can carry profound meaning. Silgusoust, pickled herring with sour cream and beets, appears at every celebration.

Forest foraging shapes Estonian cuisine seasonally. Spring brings wild garlic, summer delivers berries (strawberries, blueberries, lingonberries), and autumn means mushroom hunts that empty cities as families head to the woods. This isn't lifestyle foraging but practiced necessity that's evolved into culinary sophistication. Restaurants like Noa in Tallinn and Lore in Hiiumaa build menus around foraged ingredients, highlighting what's available rather than importing everything year-round.

Traditional dishes include kartulisalat (potato salad with pickles and eggs, mandatory at New Year), verivorst (blood sausage served at Christmas with lingonberry jam), and sült (aspic made from pork). These preparations reflect preservation needs in a climate where fresh produce disappears for months, but modern chefs are elevating them. Ööbik restaurant in Tallinn turns rosolje (beet salad) into art.

The new Estonian cuisine movement, championed by restaurants like Rataskaevu 16 and NOA, emphasizes local ingredients, seasonal menus, and techniques that respect tradition while pushing boundaries. Fermentation, smoking, and pickling—once just preservation methods—now create complexity. Chefs smoke fish using juniper, ferment vegetables with wild yeasts, and incorporate sea buckthorn (Estonia's vitamin C powerhouse) into desserts and sauces.

Tallinn's Old Town balances tourist traps with genuine quality. Avoid places advertising "Medieval Dinners," but seek out the spots locals patronize: Põrgu for modern Estonian, Leib Resto ja Aed for bread-focused cuisine, and F-hoone in the Telliskivi Creative City for casual excellence. Outside Tallinn, Pärnu and Tartu offer emerging food scenes, while islands like Saaremaa maintain traditional foodways.

Dairy culture remains strong: kefir, sour cream, and quark appear in savory and sweet applications. Kohuke, sweet curd snacks covered in chocolate, induce nostalgia in every Estonian who ate them as children during Soviet times.

The craft food movement extends beyond restaurants. Estonian craft beer rivals Germany's variety, small-batch vodka producers create artisanal spirits, and Vana Tallinn liqueur (a sweet, spiced spirit) remains the gift every tourist carries home.

Agriculture in Estonia focuses on organic and sustainable practices at rates higher than most EU countries. Small farms produce exceptional dairy, heritage vegetable varieties are being revived, and the food culture increasingly values local over imported. This is partly environmental consciousness and partly reaction to Soviet-era dependence on imports.

Estonia won't challenge France or Italy for culinary supremacy, but that's not the goal. This is food expressing Estonian identity—resilient, innovative within tradition, and increasingly confident. The cuisine that once barely registered on European consciousness now earns Michelin recognition and attracts chefs from abroad studying how to build food culture rooted in place. For travelers, Estonia offers the thrill of discovering excellence before it becomes crowded.`
  },
  {
    name: 'Ethiopia',
    lat: 9.1450,
    lng: 40.4897,
    summary: `Ethiopian cuisine is a complete sensory universe, built on injera and wot but extending into coffee ceremonies, fasting traditions, and flavor profiles that owe nothing to Europe or Asia. This is food shaped by Orthodox Christianity, highland agriculture, and an empire that stayed independent when colonizers divided the rest of Africa. The communal eating style—gathering around shared mesob baskets, tearing injera with your right hand, feeding each other gursha bites as intimacy—makes eating Ethiopian food a cultural immersion as much as a meal.

Injera, the spongy sourdough flatbread made from fermented teff flour, serves as plate, utensil, and starch. Its slightly sour taste from three-day fermentation complements the richly spiced wot (stews) spooned on top. Doro wot, chicken slow-cooked in berbere spices with hard-boiled eggs, anchors celebrations. Kitfo, finely minced raw beef mixed with spiced clarified butter and mitmita chili powder, tests adventurous eaters and delights Ethiopians who consider it a delicacy. Tibs, sautéed meat with vegetables and rosemary, offers simpler flavors but equally satisfying results.

Berbere, the spice blend underlying most wot, combines chili peppers, fenugreek, coriander, cardamom, black pepper, cinnamon, and more—each household tweaking ratios. Niter kibbeh, clarified butter infused with garlic, ginger, turmeric, and spices, adds depth. These fundamentals create Ethiopian cuisine's backbone, complex flavor layering that rewards attention.

Fasting traditions create sophisticated vegetarian cuisine. Orthodox Christians abstain from animal products Wednesdays and Fridays plus extended periods (Lent, Advent), totaling 180-250 days yearly. This isn't deprivation but celebration: shiro (chickpea flour stew), misir wot (red lentils in berbere), gomen (collard greens with garlic), and various lentil and bean preparations form beyaynetu, the vegetable combination platter that showcases kitchen skill. Many Ethiopians eat vegan meals more often than meat by religious tradition, making Ethiopian restaurants havens for vegetarians worldwide.

Coffee is Ethiopian birthright—the plant originated in Kafa region, and coffee ceremonies remain central to social life. The process takes hours: green beans roasted over charcoal, ground by hand in a mortar, brewed in a jebena clay pot, and served in three rounds (abol, tona, baraka) accompanied by popcorn or kolo (toasted barley). Rushing coffee is missing the point—it's meditation, conversation, and community.

Addis Ababa's restaurant scene ranges from humble bunna bets (coffee houses) serving traditional food to upscale spots like Yod Abyssinia with cultural dance performances. Merkato, one of Africa's largest open-air markets, offers every ingredient: berbere piled in pyramids, fresh teff, live chickens, and incense. Street food includes sambusas (fried pastries with lentil or meat fillings) and fir-fir (shredded injera mixed with berbere sauce).

Regional variations exist: Harar's unique sorghum injera and spice markets, Tigray's different wot preparations, and the Italian influence in Asmara (now Eritrea but historically connected). Ethiopia's diverse ethnic groups each contribute distinct dishes, though Amhara and Tigrayan cuisines dominate restaurant menus.

Teff, the tiny grain producing injera, grows primarily in Ethiopia's highlands and contains exceptional nutrition—complete amino acids, high iron, gluten-free. Global health trends have driven international demand, creating export opportunities but also inflating domestic prices. Other grains—sorghum, wheat, barley—also support Ethiopian cooking, alongside pulses and vegetables grown in highlands' volcanic soil.

Honey wine (tej) fermented with gesho (buckthorn) provides traditional alcohol, served in berele flasks. St. George beer, brewed since 1922, remains the national favorite. Araki, a strong distilled spirit, appears at celebrations.

Ethiopian diaspora communities worldwide—from Washington DC to Toronto to London—maintain food traditions intensely. Ethiopian restaurants serve as community centers, political organizing spaces, and links to homeland. The food hasn't diluted abroad; if anything, it's preserved more carefully than some modernizing Addis establishments.

This is cuisine that demands engagement. You can't eat Ethiopian food passively—the communal style, the hand eating, the spice heat all require attention. It rewards that attention with flavors found nowhere else, cooking techniques refined over millennia, and the satisfaction of connecting to one of Africa's greatest food cultures.`
  },
  {
    name: 'Falkland Islands',
    lat: -51.7963,
    lng: -59.5236,
    summary: `Falkland Islands cuisine is British home cooking stranded in the South Atlantic, supplemented by whatever the cold waters and sheep-covered hills provide. This is not a culinary destination. With a population of 3,500 split between Stanley and remote farms, dining options are limited, ingredients arrive by ship, and the food culture reflects 180 years of British settlement more than innovation. Yet there's honesty in the simplicity—fresh lamb, seafood from pristine waters, and the comfort food that's kept islanders fed through howling winds and geopolitical tensions.

Lamb defines Falklands agriculture and tables. The islands support half a million sheep, outnumbering humans 140 to 1. The meat is exceptional: animals graze on grass flavored by salt spray and wild thyme, creating lamb with mineral complexity city-farmed versions can't match. It's typically roasted simply—no fancy preparations, just good meat with potatoes and vegetables. Mutton, from older sheep, appears in stews where long cooking renders it tender.

Seafood should be extraordinary given location, and it can be when you're at the source. Squid (loligo) fishing drives the economy, though most gets exported frozen to Spain. Fresh off the boat, lightly grilled or fried, it's excellent. King crab from deep waters around the islands is prized, though fishing is tightly controlled. Toothfish (marketed as Chilean sea bass elsewhere) appears occasionally. Trout from inland streams offers fly-fishing rewards that translate to dinner.

Stanley, the capital, has limited restaurants. The Waterfront Kitchen and Malvina House Hotel dining room serve the closest thing to fine dining: fresh seafood, local lamb, imported wines. The Globe Tavern pulls pints and serves fish and chips that would satisfy Yorkshire. But mostly, Falklanders cook at home, relying on imported goods from the UK—tea, biscuits, tinned goods—supplemented by local protein.

The British influence is total: full English breakfasts, Sunday roasts, tea with milk and sugar, and desserts like spotted dick and sticky toffee pudding. Pies—steak and kidney, shepherd's pie, fish pie—appear constantly because they use local ingredients and suit the climate. Camp (countryside) cooking trends toward even simpler preparations: meat, potatoes, bread, tea.

Vegetables grow in gardens despite the challenging climate—potatoes, carrots, cabbages—but selection is limited. The short growing season and constant wind restrict agriculture. Most produce arrives from Chile or Britain, fresh selection depending on shipping schedules. The Falkland Islands Company store in Stanley stocks what's available, but variety is never guaranteed.

Diddle-dee berries, native to the islands, make preserves and desserts—they're similar to cranberries and grow wild across the camp. Sea cabbage, harvested from beaches, gets cooked like spinach by those who know how. These wild foods see more use on remote farms than in Stanley.

Penguin and seal were eaten historically but are now protected. Early settlers and passing sailors relied on them for fresh meat, but modern sensibilities and wildlife regulations mean they're only seen in tourist photos now.

The isolation creates unusual food realities: supplies arrive every few weeks, so stocking up matters. Freezers hold meat and fish. Pantries contain British staples that can wait. Fresh milk comes from the small dairy herd at Stanley, but UHT and powdered milk serve as backups. Bread is baked locally, but many households still bake their own.

The pub culture remains strong—the Globe, Victory, and Rose pubs serve as social centers where islanders gather over pints, sharing news and watching rugby on satellite TV. These aren't culinary destinations but are essential to understanding island life.

Tourism brings seasonal influx—cruise ships stopping for day visits and wildlife enthusiasts staying longer. This supports Stanley's few restaurants but hasn't transformed food culture. The islands' appeal is nature, history, and wildlife, not cuisine.

Chilean influence exists along the margins—empanadas sometimes appear, and Spanish is heard from fishing industry workers—but hasn't integrated into island food culture the way you might expect given proximity.

The Falklands' food story is ultimately about resilience: making do with what's available, celebrating good ingredients when you have them, and finding comfort in familiar flavors 8,000 miles from Britain. It's honest, unpretentious, and suited to the place—which, for food, might be the highest compliment.`
  },
  {
    name: 'Fiji',
    lat: -17.7134,
    lng: 178.0650,
    summary: `Fijian cuisine is a beautiful mess of influences: indigenous Melanesian traditions, Indian indentured labor legacy, Chinese migration, and British colonialism all colliding in the South Pacific with tropical abundance as foundation. This creates food that's simultaneously familiar and unique—curry houses alongside underground earth ovens, roti stands next to raw fish ceviche. The result isn't fusion exactly but coexistence, each tradition maintaining identity while sharing space on islands where community matters more than culinary purity.

Indigenous Fijian cooking centers on the lovo, an earth oven where meat, fish, root vegetables, and wrapped parcels cook underground over hot stones for hours. This is feast cooking, reserved for celebrations and village gatherings. Kokoda, Fiji's answer to ceviche, marinates fresh mahi-mahi or snapper in citrus and coconut cream—the combination is pure Pacific, bright and rich simultaneously. Duruka, seasonal asparagus-like shoots from Fiji cane plant, appear briefly each year and get devoured in curries and stir-fries.

The Indian-Fijian food culture, developed from workers brought by British to harvest sugar cane starting in 1879, has evolved into something distinct from Indian subcontinent cooking. Fiji curries are less complex than Indian versions but deeply satisfying: curry powder rather than spice combinations from scratch, sweeter profiles, and adaptations to available ingredients. Roti—both the wrapped version with curry fillings and the unleavened flatbread—is ubiquitous. You'll find roti shops in every town serving lamb, chicken, or vegetable curries wrapped in soft flatbread for a few dollars.

Suva's markets reveal Fiji's ingredient diversity: cassava, taro, breadfruit, plantains, and sweet potatoes alongside tropical fruits like papaya, pineapple, and soursop. The seafood is extraordinary—waters that brought divers now also supply tables with fresh tuna, wahoo, parrotfish, and octopus. Mud crabs from mangroves get steamed or curried, while prawns from farms supply restaurants.

Street food thrives on contrasts: Indian-Fijian vendors sell samosas, pakoras, and puri, while Fijian stalls offer fish and chips (British influence), and Chinese shops serve quick noodles. The bus stations become food courts by necessity, feeding travelers with whatever's popular. Chop suey, Fiji's Chinese contribution, bears little resemblance to Chinese-Chinese food but fills the role perfectly.

Resort dining on the Manatuca and Yasawa islands caters to honeymooners and divers with international menus and tropical cocktails. This is fine but tells you nothing about Fiji. The real food culture exists in towns like Nadi, Lautoka, and Suva where locals eat—modest restaurants serving curry and rice for lunch, fish markets selling the day's catch, and bakeries producing sweet buns and coconut biscuits.

Kava culture dominates Fijian social life more than food. This muddy-looking drink from ground yaqona root creates mild sedation and is central to ceremonies, village politics, and just hanging out. Drinking kava (called "grog") follows ritual: clap once when receiving the bilo (cup), drink it all, clap three times after. It numbs your mouth and leads to long conversations. Every village has a kava ceremony for visitors, a greeting and bonding experience that tourists sometimes find boring until the relaxation kicks in.

Fijian-Chinese cuisine deserves its own category: restaurants serving lo mein and fried rice adapted to Fijian tastes, with soy sauce sweetened and spice heat from local chilies. These aren't authentic Chinese restaurants but something evolved over generations of Chinese-Fijian families cooking.

Agriculture in Fiji centers on sugar cane historically, though the industry has declined. Copra (dried coconut), cassava, and tropical fruits support export and local consumption. Fiji water comes from here, though locals question why their water gets bottled and sold to rich countries while infrastructure problems persist.

The communal eating style spans cultures: Fijians traditionally eat together, sitting on mats, sharing dishes. Indian-Fijians practice similar hospitality—guests receive food regardless of timing or means. This generosity defines island life across ethnic divisions.

Fiji's food doesn't aspire to Michelin stars or international recognition—it feeds locals and satisfies visitors who take time to explore beyond resort buffets. The genius is in the peaceful coexistence: you can eat fantastic curry for lunch and kokoda for dinner, have kava with Fijian villagers and Indian sweets in town, and recognize that food culture here reflects the complicated, beautiful reality of island life where different histories create shared space.`
  },
  {
    name: 'Finland',
    lat: 61.9241,
    lng: 25.7482,
    summary: `Finnish cuisine has evolved from survival food to new Nordic darling in just a generation, transforming rye bread, reindeer, and foraged mushrooms into Michelin-starred excellence. This is cooking shaped by brutal winters, midnight sun summers, and 188,000 lakes that define both landscape and larder. Finns have always known their ingredients are exceptional—pristine forests, clean waters, and short growing seasons that concentrate flavors—but only recently has the world caught on. Helsinki now competes with Copenhagen for Nordic culinary supremacy, while traditional foods maintain fierce loyalty.

Rye bread (ruisleipä) anchors Finnish identity as deeply as sauna. Dark, dense, and slightly sour, it appears at every meal in forms from soft limpu to crispy näkkileipä crackers with holes for storing on poles. Leaving Finland means missing this bread desperately—it's umami-rich, deeply satisfying, and carries childhood memories for every Finn. Modern bakers are reviving heritage grain varieties and stone-ground flours, creating bread culture that rivals Germany's.

The lake culture brings exceptional freshwater fish: vendace (muikku), perch, pike, and salmon. Vendace fried in butter is Lakeland's signature dish, tiny fish eaten whole. Smoked fish from summer cottages perfumes forests, while kalakukko, fish baked inside rye bread for hours, represents Savonia region's genius—portable, preserved, perfect for logging camps or modern picnics.

Reindeer (poro) from Lapland appears in elegant preparations at restaurants and humble karistys (sautéed reindeer) at roadside diners. The meat is lean, slightly gamey, and sustainable—Sami herders have managed reindeer populations for millennia. Paired with lingonberries and mashed potatoes, it's comfort food elevated. Elk hunting in autumn provides another protein, carefully portioned among hunters and treated with respect.

Foraging is national obsession bordering on mania. Everyone's Right (jokamiehenoikeus) allows anyone to pick berries, mushrooms, and wild plants on any land. August through October sees families disappear into forests collecting cloudberries, blueberries, lingonberries, and mushrooms (especially chanterelles and porcini). These aren't boutique ingredients but free groceries that also provide spiritual renewal. Restaurants like Olo, Demo, and Palace in Helsinki transform foraged goods into twelve-course tasting menus that have earned Michelin stars.

Helsinki's restaurant scene rivals any European capital. Chef-driven spots embrace new Nordic principles: seasonal, local, minimal waste, maximum flavor. Ask in Helsinki serves set menus with wine pairings that showcase Finnish ingredients. Grön pushes boundaries with vegetable-forward cooking and fermentation. But even casual spots like Ravintola Kuurna serve exceptional food—Finnish quality standards mean even neighborhood bistros execute at high levels.

Traditional foods persist: karjalanpiirakka (Karelian pies with rice filling), maksalaatikko (liver casserole), and mämmi (Easter rye pudding that looks terrifying but tastes like molasses). These aren't restaurant foods but home cooking that appears at holidays and reminds Finns who they are. The Christmas spread features ham, various casseroles, fish preparations, and prune tart.

The coffee culture is obsessive—Finns consume more coffee per capita than any nation. Kahvi accompanies every gathering, every meeting, every contemplation. It's light roast brewed strong, drunk throughout the day, served with pulla (cardamom sweet rolls) during coffee breaks that are legally mandated in workplaces.

Crayfish parties in August celebrate short-lived season with feasts of boiled crayfish, aquavit, and silly paper hats. Midsummer means grilling, drinking, and sauna at summer cottages—ritual as important as food. These traditions survive modernization because they connect Finns to landscape and each other.

Finnish agriculture focuses on dairy (excellent butter and cheese), grains (barley, oats, rye), and greenhouse vegetables to extend growing season. Organic farming rates are high, food safety standards strict, and traceability excellent. This creates trust in local food that supports new Nordic movement.

Alcohol policy is restrictive—state monopoly controls wine and spirits sales—but craft beer scene has exploded. Microbreweries throughout Finland produce creative beers, often incorporating local ingredients like spruce tips or berries.

The Sami indigenous culture brings unique food traditions: dried reindeer meat, fish preserved in whey, and seasonal preparations tied to nomadic herding. These remain distinct from broader Finnish cuisine, though some crossover exists.

Finland's food story is confidence earned through quality. This is no longer cuisine apologizing for being Nordic or explaining itself to Mediterranean-trained palates. Finnish cooking now stands on its own terms: exceptional ingredients, skillful preparation, deep respect for seasons and landscape. It feeds a population that values nature, sustainability, and honest craftsmanship—values reflected in every meal from gas station cinnamon rolls to tasting menus in Helsinki's finest restaurants.`
  },
  {
    name: 'France',
    lat: 46.2276,
    lng: 2.2137,
    summary: `French cuisine is the foundation of Western culinary tradition, the yardstick against which everything else gets measured. This is where cooking became haute, where techniques were codified by Escoffier, where the Michelin guide originated, and where terroir—that untranslatable concept linking food to place—matters more than almost anywhere. But France is also butter-drenched croissants eaten standing at zinc bars, cheese carts requiring doctoral degrees to navigate, and market culture that turns ingredient shopping into daily ritual. The genius isn't just technique but the democratic insistence that good food matters at every level, from Alain Ducasse temples to neighborhood bistros.

Paris concentrates absurd culinary density: over 100 Michelin-starred restaurants, markets like Marché d'Aligre selling ingredients that would cost triple elsewhere, and bistros where the daily plat du jour receives as much care as haute cuisine. But Paris is just the beginning. Lyon claims culinary capital status with its bouchons serving quenelles, andouillette, and offal preparations that challenge modern squeamishness. Provence brings Mediterranean brightness with bouillabaisse, ratatouille, and lavender honey. Brittany offers crêpes, butter from grass-fed cows, and shellfish from cold Atlantic waters. Burgundy means boeuf bourguignon and wines that need no introduction. Each region insists its food is best, and they're all correct.

Bread culture approaches religious devotion. The baguette—crispy crust, chewy interior, gone stale by afternoon—gets purchased twice daily. Pain de campagne, levain, and specialty breads from artisan boulangeries show France's relationship with wheat and fermentation. The croissant, a seemingly simple viennoiserie, requires three days of laminating butter into dough to create layers that shatter properly. Every neighborhood has its champion boulanger, and Parisians walk blocks past closer options to get their preferred bread.

Cheese is civilization. France produces over 400 varieties, each with AOC regulations, aging requirements, and passionate defenders. Comté, Roquefort, Camembert, Époisses—these aren't just foods but expressions of microclimates, cattle breeds, and centuries of knowledge. The cheese course isn't a quaint tradition but essential progression in proper meals, served after main course but before dessert, paired with wine and bread.

French technique underlies global cooking: mother sauces, knife skills, stock making, sauce reductions. Culinary schools worldwide teach French fundamentals because they work. But France itself is simultaneously preserving tradition and evolving. Young chefs challenge rules while respecting foundations. Septime in Paris serves natural wine and vegetables in ways that would confuse Escoffier but exemplify modern French cooking. Meanwhile, traditional restaurants like Allard continue serving duck confit exactly as they have for a century.

The market culture makes France function. Every town has its weekly marché where farmers sell direct: vegetables picked that morning, cheese from specific producers, charcuterie sliced to order, and whole fish from coast or river. These aren't tourist attractions but where locals shop, building relationships with producers and ensuring quality. The Rungis market outside Paris supplies restaurants—it's the world's largest wholesale food market, operating through the night.

Wine is infrastructure, not luxury. Every region produces wine, every meal includes it, and the breadth from Champagne sparklers to Bordeaux reds to Sancerre whites means there's always appropriate pairing. Natural wine movement is exploding, challenging industrial production with low-intervention methods and surprising results. French wine isn't just beverage but agriculture, history, and cultural identity bottled.

Pastry deserves separate mention: éclairs, tarts, macarons, mille-feuille, and seasonal specialties like galette des rois. Pâtisseries are engineer-precise, balancing sweetness, texture, and appearance. Pierre Hermé revolutionized macarons, Cédric Grolet makes fruits that aren't fruits, and every neighborhood pâtisserie maintains standards that would represent high-end elsewhere.

Regional specialties could fill encyclopedias: cassoulet from Southwest, choucroute garnie from Alsace, socca from Nice, oysters from Brittany, foie gras from Périgord. Each has defenders claiming authenticity and criticizing variations. This passion for correctness can seem precious until you taste why details matter.

The café culture provides daily rhythm: morning espresso and croissant standing at counter, lunch as proper meal not desk sandwich, afternoon coffee with friends, apéritif before dinner. These rituals structure French life and resist fast-food homogenization more successfully than most cultures.

Fine dining in France reaches pinnacles: Alain Ducasse, Guy Savoy, L'Arpège, and countless others where meals cost monthly salaries and deliver experiences justifying prices. Michelin's three-star ratings started here, and the pressure to maintain stars drives chefs to perfection or breakdowns—sometimes both.

But French food greatness isn't just Michelin temples. It's in the boulangerie baguette, the neighborhood bistro's steak-frites, the market strawberries tasting like childhood, and the conviction that eating well is human right, not privilege. France gave the world systematic cuisine, then demonstrated that excellence can exist at any price point. This is food culture that's simultaneously aspirational and accessible, precious about quality but democratic in spirit—the most profound contribution being the belief that food matters, always.`
  }
]

async function main() {
  console.log('🍽️  Starting Food & Cuisine writeup generation for Batch 4...')
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
  console.log('✨ FOOD BATCH 4 COMPLETE!')
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
