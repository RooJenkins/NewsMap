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
    name: 'Honduras',
    lat: 15.2000,
    lng: -86.2419,
    summary: `Honduran cuisine is Central American soul food—unassuming, deeply satisfying, and built on corn, beans, and the kind of slow-cooked flavors that come from necessity turned into tradition. This isn't a cuisine that's conquered the international stage, but spend time in a Honduran kitchen or market and you'll understand how corn becomes identity, how the simplest ingredients create profound comfort.

Baleadas are the national obsession, and rightfully so. A flour tortilla—soft, slightly charred—folded around refried beans, crema, and crumbled queso fresco. That's the basic version, but baleadas evolve throughout the day: scrambled eggs for breakfast, carne asada for lunch, avocado and plantains anytime. Street vendors slap these together in minutes, the tortillas cooking on hot griddles, and Hondurans eat them constantly. They're proof that you don't need complexity when you've perfected fundamentals.

The coastal regions tell a different story. On the Caribbean side, Garífuna communities maintain African-Caribbean traditions through food. Tapado is a magnificent seafood stew—coconut milk, plantains, yuca, and whatever fish and shellfish came in that morning, all simmered into something that tastes like the ocean and jungle had a delicious conversation. Conch soup, cassava bread, and hudut (mashed plantains with fish in coconut broth) represent culinary traditions that predate Spanish colonization.

Plato típico, found everywhere, showcases the everyday brilliance of Honduran cooking: rice, beans, fried plantains, eggs or grilled meat, crema, and fresh cheese. It's peasant food elevated through proper execution—the beans slow-cooked with bay leaf and onion, the plantains fried until caramelized edges give way to sweet interior, the rice fluffy and fragrant. Pupusas, borrowed from El Salvador but embraced enthusiastically, stuff thick corn masa with beans, cheese, or chicharrón before hitting the griddle.

Markets reveal Honduras's agricultural wealth. Mangoes, papaya, pineapple, and the local anona (custard apple) fill vendors' stalls. Coffee from the highlands around Copán represents some of Central America's finest beans, though most premium stuff gets exported. Honduran cacao is making a comeback after being wiped out by disease in the 1990s—small-batch chocolate makers are reviving traditions dating to Mayan times.

Street food goes beyond baleadas. Carne asada on the grill, marinaded in bitter orange and herbs. Tajaditas—plantain chips sold in bags. Licuados blending fresh fruit with milk or water. Yuca frita with cabbage curtido cutting through the starch. And pastelitos, savory fried pastries filled with meat or potatoes that vanish in two bites.

Fine dining in Honduras means Tegucigalpa's handful of upscale restaurants and the resort zones of Roatán, where international cuisine meets tropical ingredients. There's no Michelin presence, no modernist movement, and that's fine—Honduras's culinary strength lies in everyday excellence, in the way grandmothers still make tortillas by hand, in the market comedores where $3 buys lunch that tastes like home.

What Honduras does brilliantly is maintain authenticity. The food hasn't been polished for tourists, hasn't been reinterpreted through haute cuisine trends. It's sustenance, celebration, and cultural preservation all at once—corn tortillas still made the way Maya did centuries ago, recipes passed down through generations, flavors that prioritize satisfaction over sophistication.`
  },
  {
    name: 'Hungary',
    lat: 47.1625,
    lng: 19.5033,
    summary: `Hungarian cuisine is paprika-stained poetry, a convergence of Magyar pastoral traditions, Ottoman influence, and Austro-Hungarian imperial grandeur that somehow created comfort food worthy of literature. This is cooking that takes cheap cuts and turns them into national treasures, that transformed a New World spice into cultural identity, that understands fat and slow cooking and the way winter demands serious sustenance.

Gulyás (goulash) is the heart of Hungarian cooking, though what most of the world calls goulash is actually pörkölt—a thicker stew. Real gulyás is a soup, ruby-red with paprika, where beef shin or chuck slow-cooks with onions, potatoes, and caraway until the meat surrenders and the broth becomes liquid comfort. It's shepherd food, cooked in kettles over open fires on the Great Plain, now the national dish and still perfect on cold Budapest evenings.

Paprika isn't just a spice here—it's identity. Hungary produces sweet, hot, and smoked varieties, each with distinct uses. Chicken paprikash showcases the sweet kind: chicken braised with onions and paprika, finished with sour cream for a sauce that's simultaneously rich and bright. Fisherman's soup (halászlé) from the Danube and Tisza rivers uses hot paprika with carp or catfish in a broth so intensely flavored it almost glows.

Then there's pörkölt—what happens when you take gulyás and reduce it to pure essence. Pork pörkölt, beef pörkölt, even venison in hunting season. The Mangalica pig, a Hungarian breed with curly hair and marbled fat, produces pork that tastes like pork used to taste. Kolbász (sausages) come in dozens of varieties, many made from Mangalica, smoked and spiced to survive winters. Debreceni sausage is so beloved it's protected by EU designation.

Street food means lángos—deep-fried flatbread topped with sour cream and cheese, though vendors offer countless variations. Markets like Budapest's Great Market Hall sell kürtőskalács (chimney cakes), spiral dough cooked over coals and rolled in cinnamon sugar or walnuts. Pogácsa, savory scones studded with crackling or cheese, vanish warm from bakery counters.

Hungarian fine dining has evolved dramatically. Budapest now claims two Michelin-starred restaurants—Costes and Onyx (though Onyx closed recently, the scene continues evolving). Chefs like István Veres and Tamás Széll are reinterpreting traditional dishes through modern techniques while respecting the flavors that define Hungarian cooking. Foie gras production remains significant and controversial—Hungary is Europe's largest producer after France.

The Tokaj wine region produces aszú, one of the world's great dessert wines. Botrytized grapes create liquid gold that age for decades. The Bull's Blood of Eger, despite its metal band name, is a serious red blend. Pálinka—fruit brandy—is national obsession, made from everything from apricots to plums to pears, distilled to proof that could fuel vehicles.

Hungarian desserts deserve their own novel. Dobos torte layers thin sponge with chocolate buttercream, topped with caramel. Kürtőskalács, the chimney cake. Somlói galuska, a trifle-like creation with chocolate, vanilla, and rum. Rétes, the strudel that Austria claims but Hungary perfected, apple or cherry or sour cherry, the dough stretched until transparent.

What makes Hungarian food work is its unflinching embrace of richness. This is winter food, survival food transformed into celebration. Lard is a virtue, sour cream mandatory, and paprika the thread connecting everything. It's cuisine that hasn't compromised for modern dietary trends, that still believes food should make you full and happy, that understands the poetry in a well-cooked stew.`
  },
  {
    name: 'Iceland',
    lat: 64.9631,
    lng: -19.0208,
    summary: `Icelandic food is survival cuisine meeting Nordic sophistication, a story of resourcefulness in an environment that gives grudgingly. For centuries, Icelanders preserved meat by fermenting, pickling, and drying because winters meant no fresh food and volcanic soil meant limited agriculture. Now that preservation heritage coexists with a fine dining scene punching way above its weight for an island of 380,000 people.

Hákarl—fermented shark—is the Icelandic dish everyone discusses and few enjoy. Greenland shark is toxic when fresh (it contains trimethylamine oxide), so traditionally it's buried for months to ferment, then hung to dry. The result tastes like ammonia and fishy regret. Locals treat it as cultural hazing; tourists try it once to prove something. It's important historically but hardly everyday eating.

The real Icelandic food story is better. Lamb raised on volcanic highlands, grazing on wild herbs and grasses, produces meat with distinct gamey sweetness. Kjötsúpa, lamb soup with root vegetables, is national comfort food. Hangikjöt, smoked lamb, gets sliced thin for Christmas celebrations or piled on rye bread. The sheep roam free all summer then get rounded up in September—the réttir, sheep roundups, are communal celebrations.

Fish, obviously, defines the cuisine. Plokkfiskur, a fish stew with potatoes, onions, and béchamel, turns cod or haddock into something homey. Harðfiskur—wind-dried fish, usually haddock or cod—gets torn into strips and eaten like jerky, often with butter. It's polarizing but protein-dense and historically crucial. The Atlantic waters provide cod, haddock, halibut, and Arctic char, along with langoustines that rival the Mediterranean's best.

Skyr isn't yogurt, though supermarkets worldwide market it that way. It's cultured skim milk, technically a cheese, that's been Icelandic breakfast and snack for over a thousand years. Thick, tangy, high-protein, traditionally eaten with cream and berries. Kleinur, twisted fried dough, appears at every gas station and bakery—Iceland's answer to donuts.

Reykjavík's restaurant scene has become legitimately world-class. Dill Restaurant holds Iceland's only Michelin star, where chef Gunnar Karl Gíslason sources everything possible from Iceland—foraged herbs, wild game, fish caught that morning, vegetables from geothermal greenhouses. The New Nordic movement fits naturally here; Icelandic chefs were foraging and preserving by necessity for centuries before Copenhagen made it fashionable.

Hot dog stands—pylsur—are Icelandic institutions. The stand by Reykjavík's harbor has served lamb and pork hot dogs with crunchy onions, raw onions, remoulade, ketchup, and sweet brown mustard for decades. Bill Clinton ate one. The entire country eats them.

Greenhouses heated by geothermal energy grow tomatoes, cucumbers, even bananas in a country below the Arctic Circle. It's wildly inefficient by traditional agriculture standards but represents Icelandic determination to produce more food locally. Craft beer has exploded since full-strength beer was legalized in 1989—yes, 1989. Brennivín, the caraway-flavored schnapps called "Black Death," remains the traditional spirit.

Icelandic dairy products, from the skyr to butter to cheese, benefit from cows eating grass and herbs in pure air. The ingredients are exceptional—clean water, unpolluted environment, short supply chains. What was once survival food—preserving fish, eating every part of the lamb, foraging for berries and herbs—now informs a cuisine that's both rooted in tradition and confidently contemporary.

The cost is brutal. Reykjavík ranks among the world's most expensive cities for dining. But you're eating lamb that roamed mountains, fish caught this morning, vegetables grown in volcanic soil under midnight sun. Iceland's food tells a story of resilience, innovation, and a landscape that demands respect—and occasionally, fermented shark.`
  },
  {
    name: 'India',
    lat: 20.5937,
    lng: 78.9629,
    summary: `Indian cuisine isn't one thing—it's a dozen major culinary traditions, hundreds of regional variations, and millennia of technique, spice knowledge, and agricultural diversity that created arguably the world's most complex food culture. From Kashmiri wazwan to Kerala's seafood, from Bengali sweets to Rajasthani desert cooking, India contains more culinary diversity than most continents.

Start with the fundamentals: masala isn't a spice, it's philosophy. The way spices bloom in fat, the sequencing of additions, the balance of heat and sweet and sour and bitter—this is cooking as architecture. Turmeric, cumin, coriander, cardamom, cinnamon, cloves, fenugreek, asafetida, mustard seed—Indian cooks work with a palette that most cuisines can't imagine, adjusting ratios for every dish, every region, every family recipe.

North Indian food dominates internationally but represents just one tradition. Butter chicken, dal makhani, tandoori cooking—these Punjabi-Mughlai dishes conquered the world through immigration and restaurant culture. The tandoor, a clay oven reaching scorching temperatures, produces naan, roti, and kebabs with charred edges and smoky interiors. Biryani, with its Persian-Mughal roots, varies dramatically: Hyderabadi biryani layered with dum-cooked perfection, Lucknowi biryani fragrant with saffron and rose water, Kolkata biryani with potatoes.

South Indian food is an entirely different conversation. Dosas—fermented rice and lentil crepes—come paper-thin and crackling, wrapped around spiced potato masala, served with sambar and coconut chutney. Idli, steamed rice cakes, represent breakfast perfection when served hot with sambar. Kerala's coconut-rich curries, fish molee, and appam (fermented rice pancakes with crispy edges) showcase coastal sophistication. Tamil Nadu's Chettinad cuisine brings heat through dried chilies and complex spice pastes.

Street food is where Indian genius shines brightest. Mumbai's vada pav—spiced potato fritter in a bun—costs pennies and delivers joy. Pani puri across the country, those crispy spheres filled with spiced water, tamarind chutney, and chickpeas, eaten in rapid succession. Delhi's chaat—papdi chaat, aloo tikki chaat—balancing crispy, creamy, tangy, spicy. Kolkata's kati rolls, Bengaluru's dosas, Amritsar's kulcha, Hyderabad's haleem during Ramadan.

Regional specialties run deep. Bengali cooking might be India's most subtle—mustard oil, panch phoron spice blend, freshwater fish, and sweets like rasgulla and mishti doi that prove dairy desserts can be ethereal. Goan food blends Portuguese influence with coastal ingredients—vindaloo properly made with vinegar and garlic, xacuti rich with coconut and complex spice pastes. Northeastern cuisine—Naga, Manipuri, Assamese—uses ingredients and techniques entirely distinct from the rest of India, with fermented bamboo shoots, bhut jolokia chilies, and smoked pork.

India's fine dining scene has matured dramatically. Indian Accent in Delhi and its international outposts reinterpret Indian flavors through modern techniques. Gaggan in Bangkok (by an Indian chef) held Asia's #1 spot for years with progressive Indian cuisine. Mumbai, Delhi, and Bengaluru host dozens of restaurants where Indian ingredients meet global techniques. Yet the Michelin guide only recently entered India, with the Mumbai guide debuting in 2024.

Indian agriculture produces nearly everything: rice paddies in the east, wheat belts in Punjab, tea estates in Assam and Darjeeling, coffee in Karnataka, cashews in Goa, mangoes everywhere, bananas, coconuts, spices from Kerala. The vegetarian tradition, driven by religious practice and geography, created unmatched sophistication in vegetable cooking—paneer, dal, vegetable curries, breads, and chutneys that never feel like compromise.

What makes Indian food work is its fundamental understanding of balance and complexity. Every meal involves multiple dishes—dal with rice, vegetables, bread, raita, pickles—each component balancing the others. Heat isn't about punishment; it's about awakening the palate. The cuisine respects ingredients, honors tradition, and contains more regional variation than any food culture on Earth. You could spend a lifetime exploring Indian food and still discover new dishes, techniques, and flavors.`
  },
  {
    name: 'Indonesia',
    lat: -0.7893,
    lng: 113.9213,
    summary: `Indonesian food is 17,000 islands, 300 ethnic groups, and centuries of trade routes converging into a cuisine so diverse that calling it one thing misses the point entirely. From Sumatran rendang to Javanese gudeg, from Balinese babi guling to Sulawesi's extremes, Indonesian cooking brings heat, complexity, and a commitment to flavor layering that rivals anywhere on Earth.

Rendang might be the world's most perfect curry—West Sumatran beef cooked slowly in coconut milk, lemongrass, galangal, garlic, turmeric, ginger, and chilies until the liquid evaporates and the meat becomes tender, dark, and intensely spiced. Proper rendang cooks for hours, the coconut milk breaking and frying the meat in its own fat. It's caramelization, spice, and time creating something that improves over days. Rendang has topped multiple "world's best food" polls, and for once, the polls got it right.

Nasi goreng—fried rice—is Indonesian soul food. Simple done right: day-old rice stir-fried with kecap manis (sweet soy sauce), garlic, shallots, chilies, whatever protein and vegetables are around, topped with a fried egg and kerupuk (crackers). Every family has their version; every warung serves it for breakfast. It's proof that fried rice, executed properly with good technique and the right balance of sweet-salty-spicy, can be transcendent.

Satay, skewers of meat grilled over coconut shell charcoal, varies dramatically by region. Sate padang comes with thick, spicy curry sauce. Sate madura uses sweet soy marinade. Sate lilit from Bali mixes minced seafood or meat with coconut and spices, pressed onto lemongrass stalks. The peanut sauce everyone associates with satay is just one regional variation; Indonesia has dozens of approaches to grilled skewers.

Gado-gado assembles blanched vegetables, hard-boiled eggs, fried tofu and tempeh, rice cakes, and crackers, bound together with peanut sauce. It's Indonesian salad, and the sauce—peanuts, palm sugar, tamarind, garlic, chilies, lime—makes vegetables crave-worthy. Tempeh, fermented soy cake with nutty flavor and firm texture, originated in Java and represents Indonesia's gift to global vegetarian cuisine.

Each island tells different stories. Balinese food centers on babi guling—spit-roasted suckling pig stuffed with spice paste, the skin crackling, served with lawar (minced meat and vegetable salad). Javanese cooking tends sweeter—gudeg, young jackfruit stewed with palm sugar and coconut milk until mahogany-colored. Padang food from West Sumatra arrives in countless small dishes covering the table; you pay for what you eat. Manado cuisine from North Sulawesi brings extreme heat and dishes like paniki (bat soup) that test boundaries.

Indonesian street food is relentless. Bakso, meatball soup with noodles, from vendors announcing themselves with distinctive bells. Martabak, both the savory stuffed pancake and the sweet thick pancake with toppings. Gorengan, assorted fried snacks sold by street vendors. Soto, clear soup with regional variations—soto ayam, soto betawi, soto banjar, each distinct. Es campur, shaved ice with fruit and jellies and condensed milk.

Indonesian ingredients define the cooking: coconut in every form, palm sugar's caramel notes, tamarind's sourness, galangal's medicinal sharpness, and an entire library of chilies. Sambal, the chili paste that appears on every table, comes in hundreds of varieties—sambal terasi with shrimp paste, sambal matah from Bali, sambal bajak, each with distinct heat and flavor profiles.

Fine dining in Indonesia means Jakarta's growing scene and Bali's resort restaurants, where chefs are finally treating Indonesian ingredients with modern techniques. Locavore in Ubud sources everything from Balinese farms and markets, creating tasting menus that showcase regional ingredients. But Indonesia's real culinary treasure is the warungs—small family-run restaurants where dishes cost $2 and taste like someone's grandmother has been perfecting the recipe for decades.

Indonesian coffee—from Sumatra's earthy Mandheling to Sulawesi's Toraja—ranks among the world's finest. The coffee culture involves strong, sweet kopi tubruk and the controversial kopi luwak (civet coffee). Indonesian cacao is increasingly recognized for quality chocolate production.

What Indonesian food does brilliantly is balance. Sweet, salty, sour, spicy, and umami all on one plate, nothing overwhelming, everything in conversation. It's cuisine shaped by trade—Indian spice knowledge, Chinese technique, Arab influences, Dutch colonization—yet distinctly its own. The diversity means you could spend years eating through Indonesia and still encounter new dishes, new techniques, new flavor combinations that redefine what you thought you knew about this extraordinary archipelago's food.`
  },
  {
    name: 'Iran',
    lat: 32.4279,
    lng: 53.6880,
    summary: `Persian cuisine is ancient sophistication—saffron-stained rice, slow-cooked stews, and a sweet-savory balance that predates most world cuisines by millennia. This is cooking that influenced everywhere from India to the Ottoman Empire, that turned rice into art form, that understood how fruit belongs in savory dishes, and that maintains techniques and flavor profiles dating back to pre-Islamic Persia.

Rice is everything. Proper tahdig—the crispy golden rice crust at the bottom of the pot—is Persian cooking's highest achievement. Getting it right requires technique: parboiling basmati, blooming saffron in hot water, layering rice with butter or oil, cooking low and slow until the bottom forms that crackling, buttery crust. Zereshk polo (rice with barberries) mixes jewel-like tart berries with saffron rice. Tahchin bakes rice with yogurt and egg into a cake with crispy exterior and creamy interior.

Stews—khoresh—define Persian comfort food. Ghormeh sabzi, the national dish, combines herbs (parsley, cilantro, fenugreek), kidney beans, dried limes, and lamb into something dark green and deeply complex. The dried limes—limoo omani—bring a sourness that's almost medicinal, essential to Persian cooking. Fesenjan uses pomegranate molasses and ground walnuts with chicken or duck, creating sweet-sour-nutty complexity that seems impossible until you taste it. Gheimeh adds split peas and dried limes to lamb with tomatoes, topped with crispy potato sticks.

Kebabs in Iran aren't street food—they're serious cooking. Koobideh, ground meat mixed with onions and spices, formed onto wide flat skewers, grilled over charcoal. Barg, marinated lamb or beef filet. Joojeh, saffron-marinated chicken. They're served with rice, grilled tomatoes, raw onions, and sumac—always sumac, the tart crimson spice sprinkled over everything. The kebab is properly done when you can taste the charcoal smoke, when the meat is juicy, when the rice is fluffy with tahdig on the side.

Persian breakfast means sangak—flatbread baked in a stone-bottom oven—with feta cheese, fresh herbs, walnuts, and sweet tea. Noon barbari, another flatbread, has ridges and sesame seeds. Ash-e reshteh, a thick soup with herbs, legumes, and reshteh (thin noodles), topped with kashk (fermented whey), appears at celebrations.

Sweets balance floral and not-too-sweet in ways Western desserts don't. Bastani sonnati, saffron and rosewater ice cream with pistachios and frozen cream chunks, served between wafers. Faloodeh, thin rice noodles in a frozen sorbet of rosewater and lime. Sholeh zard, saffron rice pudding topped with cinnamon and slivered almonds. These aren't cloying—they're perfumed, complex, interesting.

Tehran's restaurant scene operates under restrictions but maintains quality. Iran has no alcohol, no Michelin guide, no international fine dining presence due to sanctions, but the cooking in homes and traditional restaurants reaches heights most cuisines envy. Places like Moslem Restaurant in Tehran have served perfect dizi (lamb and chickpea stew) for generations.

Iran's geography produces extraordinary ingredients: pistachios from Kerman (Iran is the world's largest producer), saffron from Khorasan (the world's finest and most expensive spice), pomegranates that define sweet-tart balance, dates from the south, caviar from the Caspian, lamb raised on mountain pastures. The herbs—sabzi—appear fresh on every table: basil, mint, tarragon, cilantro, fenugreek, chives, eaten by the handful with cheese and bread.

Tea culture is serious business. Black tea served in small glasses with rock sugar held between the teeth as you drink. Tea houses—chaikhaneh—serve as social spaces where men gather, smoke qalyan (water pipes), drink tea, and talk for hours. Coffee exists but tea is identity.

The tahdig democracy is real: when serving rice, everyone watches to see how the crispy bottom gets divided. Getting a good tahdig piece is considered lucky. Arguments about whose grandmother makes the best fesenjoon or ghormeh sabzi are family tradition.

What Persian food understands is patience. The rice can't be rushed. The stews need hours for flavors to marry. The kebabs require proper marinating. Nothing about Persian cooking is quick, but the results—that perfect tahdig, that complex fesenjoon, that saffron-scented rice—justify every minute. It's cuisine that respects ingredients, honors tradition, and maintains techniques passed down through generations. Despite sanctions, despite isolation, despite everything, Persian food culture remains vibrant, sophisticated, and utterly distinct. To eat well in Iran is to understand why this civilization has endured for millennia.`
  },
  {
    name: 'Iraq',
    lat: 33.2232,
    lng: 43.6793,
    summary: `Iraqi cuisine sits at the crossroads of the ancient world—Mesopotamian, Persian, Turkish, Bedouin traditions converging into a food culture that's survived empires, wars, and displacement. This is the land where agriculture began, where wheat cultivation started civilization, where date palms have grown for millennia. Despite decades of conflict, Iraqi food culture persists through diaspora communities and resilient cooks maintaining recipes that predate Islam.

Masgouf is Iraq's national dish—Tigris River carp butterflied, impaled on stakes around an open fire, slow-cooked until the skin crisps and the flesh barely needs chewing. Traditionally eaten along Baghdad's riverbanks at restaurants specializing in this single dish, masgouf represents Iraqi identity: ancient technique, simple ingredients, communal eating. The fish gets marinated with tamarind or lemon, olive oil, and salt before the fire works its magic. Eating it means picking through bones with your hands, mixing the smoky fish with flatbread and pickles.

Tashreeb is comfort in a bowl. Torn flatbread soaked in lamb or chicken broth thickened with chickpeas, topped with tender meat and sometimes rice. It's peasant food turned celebration dish, the bread absorbing all the broth's flavor, the whole thing garnished with fried onions and almonds. Quzi, whole roasted lamb stuffed with rice, almonds, and raisins, appears at weddings and Eid celebrations—it's Iraqi cooking at its most festive.

Rice dishes show Persian influence filtered through Iraqi sensibility. Biryani exists but timman ou keema (rice with ground meat, raisins, and almonds) is more distinctly Iraqi. Tepsi baytinijan—rice baked with eggplant and meat in tomato sauce—comes out of the oven like a Middle Eastern lasagna. Dolma, vegetables stuffed with spiced rice and meat, includes grape leaves, zucchini, eggplant, and tomatoes, the whole pot steaming together.

Samoon—Iraqi flatbread with a distinctive diamond shape—comes out of tandoor-style ovens all day. It's softer than pita, perfect for wrapping kebabs or scooping stews. Kleicha, date-filled cookies spiced with cardamom, represent Iraq's sweet tradition—dates stuffed into dough and baked until golden. Iraq produces some of the world's finest dates; the country once had over 600 date varieties, though modern conflicts have devastated palm groves.

Baghdad's street food scene, battered but persistent, offers kebabs, falafel (though that's more Levantine), and pacha—a soup made from sheep's head and trotters that's traditionally eaten for breakfast after a night out. Shawarma stands operate across the country, though instability has challenged food vendors.

Iraqi Jews, before nearly the entire community was expelled in the 1950s, contributed significantly to the cuisine. Dishes like tbit (Shabbat chicken and rice), sabich (eggplant and egg dish), and certain preparation methods reflect this lost heritage. The diaspora—in London, Sydney, Detroit, Tel Aviv—keeps these traditions alive.

Modern Iraqi fine dining barely exists. Decades of sanctions, war, and ongoing instability mean restaurant culture focuses on survival, not innovation. Baghdad once had sophisticated dining, but many chefs and restaurateurs fled. What remains is home cooking, kebab houses, and resilient restaurants serving traditional dishes.

Iraqi tea, black and strong, sweetened heavily, served in small glasses, accompanies every meal and meeting. The tea culture mirrors Iranian and Turkish traditions but maintains Iraqi character—the way it's poured, the social rituals, the endless refills during conversations.

Amba, pickled mango sauce, is the condiment that defines Iraqi eating. Brought by Iraqi Jews from India, it's turmeric-yellow, tangy, and appears on everything from falafel to fish. Turshi, mixed pickles, provides the acidity and crunch to balance rich meat dishes. Mango pickle, pickled lemons, turnips, beets—all essential.

The agricultural heartland between the Tigris and Euphrates—once the Fertile Crescent—still produces wheat, barley, dates, and vegetables despite infrastructure damage. Iraqi farmers maintain ancient irrigation techniques, though water scarcity and climate change threaten traditions.

What Iraqi food represents is resilience. Through Ottoman rule, British occupation, Ba'athist dictatorship, sanctions that devastated the population, two American invasions, ISIS occupation, and ongoing instability, Iraqi food culture persists. Grandmothers still make dolma, masgouf still cooks on riverbanks (where safe), and the diaspora carries recipes across continents. Iraqi cuisine deserves recognition beyond conflict, beyond stereotypes—it's ancient, sophisticated, and deeply tied to land that birthed civilization. Every bite connects to Sumerian, Babylonian, Abbasid traditions, to the idea that food is culture, memory, and stubborn survival against all odds.`
  },
  {
    name: 'Ireland',
    lat: 53.4129,
    lng: -8.2439,
    summary: `Irish food has undergone a revolution in a single generation, transforming from boiled potatoes and suspicion of spices into one of Europe's most exciting culinary destinations. The ingredients were always there—pristine dairy, grass-fed beef and lamb, wild Atlantic seafood, exceptional produce. What changed was the confidence to do more than apologize for it.

The traditional food still matters. Irish stew, properly made with mutton or lamb neck, potatoes, onions, and carrots, slow-cooked until the meat falls apart and the potatoes thicken the broth—that's comfort that crosses generations. Colcannon mixes mashed potatoes with cabbage or kale and enough butter to make cardiologists weep. Boxty, potato pancakes, turn staples into something that works breakfast through dinner. These are poverty dishes made with skill and good ingredients, nothing to apologize for.

Full Irish breakfast is an institution: rashers (back bacon), sausages, black and white pudding, eggs, grilled tomato, mushrooms, sometimes baked beans. It's a meal that acknowledges hangovers and rainy mornings with proper seriousness. The black pudding—blood sausage with oatmeal—can be transcendent when made well, the white pudding less challenging but equally traditional.

The seafood defines modern Irish cooking. Wild Atlantic oysters from Galway, served with Guinness. Dublin Bay prawns, actually langoustines, sweet and delicate. Mussels from Bantry Bay. Smoked salmon from Burren Smokehouse or other artisanal producers. Fish and chips, done properly with fresh haddock or cod, remains perfect coastal food. Seafood chowder thick with cream and chunks of fish appears in every seaside pub.

Irish dairy is exceptional. The grass-fed cows produce butter so yellow it seems fictional, cream that's almost too rich, and cheese that's finally getting international recognition. Cashel Blue, Durrus, Gubbeen—Irish farmhouse cheesemakers are creating world-class products from milk that benefits from year-round grass grazing and Atlantic climate.

The pub food revolution matters. Where once Irish pubs served generic comfort food, now they're sourcing locally and cooking with pride. Beef and Guinness pie, made with proper stout and slow-cooked beef. Oysters and brown bread. Seafood platters. These aren't fancy, but they're honest and well-executed.

Irish fine dining has arrived emphatically. Patrick Guilbaud in Dublin has held two Michelin stars for years. Chapter One, Liath, and others showcase Irish ingredients with technique that doesn't need to defer to France or Spain. Young chefs are reinterpreting Irish ingredients—seaweed, wild garlic, traditional cheeses—through modern approaches. Cork, Galway, and smaller towns have restaurants that would impress anywhere in Europe.

The ingredients drive everything. Irish beef, grass-fed and finished, has flavor that grain-fed can't match. The lamb, especially from coastal regions where sheep graze on salt marshes, has a distinct sweetness. Potatoes—yes, still important—come in varieties suited to specific dishes. Root vegetables, brassicas, and increasingly sophisticated produce from Irish farmers and greenhouses fill markets.

Bread culture is serious. Brown bread, made with wholemeal flour and buttermilk, dense and slightly sweet, essential with butter and smoked salmon. Soda bread, both white and brown, quick breads leavened with baking soda instead of yeast. Barmbrack, a sweet tea bread studded with dried fruit.

Irish whiskey is experiencing renaissance after nearly dying out. Single pot still whiskey from Midleton, Redbreast, Powers—these are spirits that rival Scotch. The craft distillery boom means new producers everywhere, experimenting with barrels and techniques. Irish craft beer has similarly exploded, moving far beyond Guinness (though a proper pint in Dublin remains essential).

Food markets like Dublin's Temple Bar Market or Cork's English Market showcase Irish produce and artisan products. Small producers making salami, farmhouse cheese, preserves, fresh vegetables, baked goods—this is where you see Irish food culture's vibrancy.

What makes Irish food's evolution impressive is that it didn't abandon tradition—it elevated it. The same ingredients that kept people alive through famine and poverty now appear in Michelin-starred restaurants. The food culture maintains connections to rural traditions, to the seasons, to the idea that good ingredients simply prepared can be enough. There's no molecular gastronomy revolution here, no need to prove anything through complication. Irish food has grown confident: grass-fed beef needs little help, fresh oysters need lemon and bread, potatoes made properly with good butter are worthy of celebration. The revolution was recognizing that Irish ingredients, treated with respect and skill, compete with anywhere in the world.`
  },
  {
    name: 'Israel',
    lat: 31.0461,
    lng: 34.8516,
    summary: `Israeli cuisine is a young country's food identity still being negotiated, a collision of diaspora traditions, Middle Eastern ingredients, Mediterranean climate, and startup-nation innovation that created something distinct from its components. This is food that sparks arguments—about origins, authenticity, ownership—but also produces extraordinary eating in a country obsessed with food quality and intense about flavor.

The breakfast culture is legendary. Israeli breakfast spreads include shakshuka (eggs poached in spicy tomato sauce), varieties of salads, olives, fresh vegetables, hummus, tahini, labneh, various cheeses, fresh bread, and endless coffee. It's not a light meal—it's an event. Shakshuka has gone global, but in Israel it's everyday breakfast, the eggs barely set, the sauce bright with peppers and tomatoes, scooped up with fresh bread.

Hummus is serious business. Tel Aviv, Jerusalem, Akko all claim the best hummus, with shops that serve nothing else—just hummus, some warm chickpeas on top, raw onions, pickles, and pita. The debates are passionate: how much tahini, how smooth, what temperature, which olive oil. Eating proper hummus in Israel—creamy, rich with tahini, slightly warm—redefines what you thought you knew. Abu Hassan in Jaffa, Hummus Said in Akko, Abu Shukri in Jerusalem—these are pilgrimage sites.

Falafel stands compete on every corner. Fried chickpea balls tucked into pita with hummus, tahini, salad, pickles, amba (Iraqi mango pickle), and whatever sauces the vendor prides themselves on. It's vegetarian by tradition, perfect by practice. The best falafel is crispy outside, fluffy inside, deeply spiced, and costs a few shekels.

Sabich—Iraqi Jewish contribution—stuffs pita with fried eggplant, hard-boiled eggs, hummus, tahini, Israeli salad, pickles, and amba. It shouldn't work as well as it does. Shawarma, spit-roasted meat shaved thin, appears everywhere, though the cooking style is Levantine, not invented here.

Israeli salad—tomatoes and cucumbers, tiny dice, lemon juice, olive oil—appears at every meal. Fattoush, tabbouleh, baba ganoush, matbucha (cooked tomato and pepper salad)—these are Israeli by adoption, not invention, part of the complicated conversation about Palestinian food and Israeli appropriation.

The fine dining scene is genuinely world-class. Multiple Tel Aviv restaurants approach Michelin levels (the guide doesn't rate Israel). Chefs like Eyal Shani celebrate vegetables—his roasted cauliflower has achieved cult status. Machneyuda in Jerusalem brings market cooking energy to fine dining. Mizlala serves elevated Mizrahi (Middle Eastern Jewish) cuisine. The food scene is innovative, quality-obsessed, and benefits from Mediterranean produce and Middle Eastern spice knowledge.

Israeli wine has matured dramatically. The Golan Heights Winery, Domaine du Castel, and others produce serious wines from high-altitude vineyards. The Judean Hills, Galilee, Golan regions all have distinct terroir. Israeli wine has moved far beyond sweet Manischewitz stereotypes.

Street food extends beyond falafel. Burekas—flaky pastries filled with cheese, potato, or spinach—from Balkan Jewish traditions. Yemenite jachnun, dough rolled thin and slow-baked overnight, served with grated tomato and hard-boiled eggs for Saturday lunch. Ethiopian-Israeli restaurants serving injera, kitfo, and spicy stews represent recent immigration waves.

Markets define Israeli food culture. Carmel Market in Tel Aviv, Mahane Yehuda in Jerusalem, Akko's market—these pulse with energy, vendors selling spices, fresh produce, halva, dried fruits, nuts, fresh-baked bread, juice stands pressing pomegranates and oranges.

The fusion is real and sometimes controversial. Iraqi-Jewish, Moroccan-Jewish, Yemenite-Jewish, Polish-Jewish, Ethiopian traditions all contribute. The result is either Israeli cuisine or appropriation, depending who you ask. The politics are inescapable—eating in Israel means navigating questions of land, ownership, and whose food this is.

Israeli agriculture is impressive: drip irrigation technology, desert farming, dairy production, citrus, dates, avocados, olives. The country exports agricultural technology globally while producing exceptional local ingredients.

What Israeli food does brilliantly is intensity. Everything is aggressively fresh, boldly spiced, deeply flavored. The shakshuka isn't timid, the hummus isn't bland, the salads aren't afterthoughts. There's confidence bordering on arrogance, startup energy applied to food, constant innovation within tradition. Whether you call it Israeli cuisine or recognize it as collected traditions from elsewhere, the eating in Israel—the market breakfasts, the hummus pilgrimages, the vegetable-forward cooking, the wine, the way food creates community despite conflict—delivers experiences that linger long after you leave. Just be ready for the arguments.`
  },
  {
    name: 'Italy',
    lat: 41.8719,
    lng: 12.5674,
    summary: `Italian food is the foundation, the reference point, the cuisine most of the world thinks they know but actually understands about as well as Americans understand pizza. This is cooking where region matters more than nation, where tomatoes aren't traditional in the north, where simplicity masks complexity, and where respecting ingredients approaches religious doctrine.

Start with the fact that "Italian food" barely exists. Piedmont's white truffle dishes share almost nothing with Sicilian seafood. Roman cacio e pepe, just pecorino and black pepper with pasta water creating sauce, bears no resemblance to Venetian risotto al nero di seppia, black with squid ink. Neapolitan pizza, Bologna's ragú, Milan's risotto alla Milanese, Genoa's pesto—these are regional identities that happen to fall within political borders.

Pasta is religion. Not the overcooked, oversauced versions served globally, but al dente pasta where you taste the wheat, where sauce clings but doesn't drown, where shape matches sauce logically. Carbonara in Rome: guanciale (cured pork jowl), eggs, pecorino, black pepper, pasta water creating creamy sauce without cream. Amatriciana: guanciale, tomatoes, pecorino, the pork fat carrying tomato sweetness. Aglio e olio: garlic, olive oil, chili flakes, parsley, nothing else, perfect in its simplicity. The pasta itself varies—fresh egg pasta in Emilia-Romagna, dried durum wheat pasta in the south, each shape designed for specific sauces.

Pizza Napoletana has protected designation status. The dough, the San Marzano tomatoes, the buffalo mozzarella, the wood-fired oven reaching 900°F, the barely-cooked edge puffing into leopard-spotted cornicione—this is technique perfected over centuries. Eating pizza in Naples is understanding what pizza should be: minimal toppings, perfect crust, ingredients tasting like themselves.

Northern Italian cooking speaks in butter, cream, and rice. Risotto cooked properly, stirring constantly, adding broth gradually, until the rice is creamy but each grain distinct. Osso buco, braised veal shanks with gremolata. Polenta, cornmeal stirred into submission. Piedmont's vitello tonnato, cold veal with tuna sauce that sounds wrong but tastes right. The white truffles from Alba, shaved over fresh pasta, might be the most expensive and sublime ingredient on Earth.

Central Italy brings Tuscany's bistecca alla Fiorentina—massive porterhouse from Chianina cattle, grilled rare, rubbed with olive oil and rosemary. Tuscan bread has no salt, a historical quirk that makes sense with salty meats and cheeses. Umbria's black truffles, less expensive than Piedmont's white but still luxurious. Lazio's Jewish-Roman cuisine: carciofi alla giudia (fried artichokes), pizza ebraica (dried fruit cake).

Southern Italian cooking brings heat, seafood, and vegetables. Sicilian caponata, sweet-sour eggplant dish. Arancini, fried rice balls stuffed with ragú or cheese. Pasta con le sarde, sardines with fennel and pine nuts. The influence of Arab occupation shows in Sicilian sweets—cassata, cannoli, granita. Naples gave the world pizza, but also sfogliatella, pastry engineering that produces dozens of crispy layers.

Italian fine dining means numerous Michelin three-stars: Osteria Francescana (Massimo Bottura in Modena), Le Calandre (the Alajmo brothers), Piazza Duomo (Enrico Crippa). These chefs reinterpret Italian ingredients and traditions through modern techniques while maintaining respect for fundamentals. But Italy's strength is everyday excellence—the neighborhood trattoria serving pasta that would cost five times more elsewhere, executed perfectly.

Italian ingredients define quality: Parmigiano-Reggiano aged 36 months, proper aged balsamic from Modena, San Marzano tomatoes, buffalo mozzarella from Campania, prosciutto di Parma, olive oils from Liguria or Tuscany or Sicily each with distinct character. The DOP and IGP designations protect authenticity.

Italian wine requires its own education. Barolo and Barbaresco from Piedmont, Brunello from Tuscany, Amarone from Veneto, Nero d'Avola from Sicily—the regional diversity rivals food. Italian wine culture integrates with food more naturally than anywhere else; the right wine with the right dish isn't pretentious, it's just correct.

Coffee culture is serious: espresso standing at the bar, cappuccino only before 11am, never with food. The rules seem arbitrary but reflect genuine belief in proper ways.

What Italian cooking teaches is that ingredients matter more than technique. Perfect tomatoes need little help. Great olive oil transforms simple pasta. Fresh mozzarella needs only salt. The cuisine isn't simple—making proper ragú Bolognese takes hours, proper pizza requires years to master—but it respects ingredients above all. Italian food culture maintains regional identity, seasonal eating, and multi-generational knowledge transfer that most cuisines have lost. It's why Italian food conquered the world, and why actually eating in Italy still surprises people who thought they knew Italian food.`
  },
  {
    name: 'Ivory Coast',
    lat: 7.5400,
    lng: -5.5471,
    summary: `Ivorian food is West African cooking filtered through French colonial influence and driven by abundance—this is one of the region's most agriculturally productive countries, which means markets overflow with cassava, plantains, yams, fresh fish, and increasingly, cacao that makes Ivory Coast the world's largest chocolate producer. The cuisine balances indigenous Akan, Malinke, and Kru traditions with urban sophistication in Abidjan, creating food culture that's distinctly Ivorian.

Attiéké might be the most important dish you've never heard of. It's fermented cassava, grated and steamed into fluffy grains resembling couscous but with slightly sour tang from fermentation. Attiéké appears at nearly every meal, the base for countless combinations. With grilled fish and spicy tomato-onion sauce, it's street food and home cooking. With braised chicken, it's celebration food. The fermentation process, traditionally done by Ébrié women, transforms toxic cassava into West Africa's most versatile starch.

Alloco—fried plantains—reaches perfection on Ivorian streets. Ripe plantains sliced and deep-fried until caramelized outside and creamy inside, served with spicy tomato-onion sauce and sometimes hard-boiled eggs or grilled fish. It's simple but addictive, the plantain's sweetness balanced by the sauce's heat. Every vendor claims the best recipe; the real variable is plantain ripeness and frying technique.

Kedjenou is Ivorian comfort food—chicken or guinea fowl sealed in a terracotta pot with vegetables, peppers, and tomatoes, no liquid added. The pot gets placed over low heat and occasionally shaken, never opened. The chicken steams in its own juices until falling-apart tender, the vegetables breaking down into concentrated sauce. It's cooking technique as heritage, the sealed pot method producing flavors that braising can't match.

Bangui is the sauce that defines Ivorian eating—palm nut pulp cooked down with peppers, tomatoes, onions, and smoked fish. Bright orange from palm oil, slightly thick, deeply savory. It goes over rice, attiéké, or fufu (pounded cassava and plantain). Palm nuts give it distinct richness and earthy sweetness. Every Ivorian grandmother has her version.

Fufu appears across West Africa but Ivorian versions often mix cassava and plantain, pounded together until smooth and stretchy. Eaten with soups and stews, fufu is pulled off in small pieces and used to scoop sauce and meat. It's labor-intensive—traditional preparation requires two people pounding in rhythm—and culturally significant as ceremonial food.

Abidjan's street food scene rivals any West African city. Brochettes (kebabs) grilling on every corner. Placali, fermented corn dough cooked into thick paste, served with palm nut soup. Garba, attiéké with fried tuna and onion sauce, the dish that Abidjan's youth eat late-night. Bofloto, banana beignets sold by street vendors in the morning.

Ivorian markets burst with produce. Eggplants, okra, tomatoes, peppers, leafy greens like gboma (spinach relative) and dah (amaranth). Protein means fresh fish from the Atlantic, bushmeat (though increasingly restricted), chicken, and goat. The aromatic soups combine dried fish, smoked fish, and fresh fish for layered umami.

Ivory Coast's cacao dominance—40% of global production—is complicated. The chocolate goes to Europe; most Ivorians have never eaten finished chocolate. Child labor and deforestation issues taint the industry. But increasingly, Ivorian chocolatiers like Instant Chocolat are creating bean-to-bar chocolate in-country, reclaiming value from raw cacao.

Coffee cultivation, once significant, has declined, but kiosks selling strong Nescafé with condensed milk remain social hubs. Bandji and koutoukou—palm wine and distilled palm spirit—represent traditional alcohol, though beer dominates drinking culture.

French influence shows in Abidjan's boulangeries, where baguettes and pastries maintain French standards, served with Laughing Cow cheese triangles at breakfast. The fusion of French technique and African ingredients creates dishes like poulet braisé with French fries and spicy sauce.

Fine dining in Abidjan means restaurants like Le Toit d'Abidjan or hotels serving French-influenced continental cuisine alongside Ivorian dishes. But the real culinary action is maquis—informal outdoor restaurants serving grilled fish and meat with attiéké and allocco, where business deals happen over shared plates and cold beer.

Ginger juice—gnamankoudji—is everywhere, fresh ginger blended with pineapple or lemon, sometimes with cloves, served ice-cold. Bissap, hibiscus tea, drinks sweet and tart. Fresh coconuts get macheted open by vendors who'll add condensed milk if you ask.

Ivorian cuisine hasn't achieved international recognition like Nigerian or Senegalese food, partly because the country's turbulent recent history (civil wars, political instability) limited cultural export. But the food traditions remain strong, maintained by home cooks and street vendors, by the attiéké producers and maquis owners who keep Ivorian food culture alive. The ingredients are exceptional—West African abundance combined with Atlantic fishing and agricultural diversity—and the techniques, from fermentation to the sealed-pot cooking, represent sophisticated traditional knowledge. Ivorian food deserves wider recognition; it's West African cooking at its most vibrant, where every meal balances carbs and protein and sauce, where food means community and sharing, where the simplest street food delivers complete satisfaction.`
  },
  {
    name: 'Jamaica',
    lat: 18.1096,
    lng: -77.2975,
    summary: `Jamaican food is heat, spice, and swagger—jerk cooking, Scotch bonnet peppers, the African-British-Indian-Chinese convergence that created Caribbean's boldest flavors. This is cuisine that never apologizes for intensity, that understands smoke and spice as foundations, that turned limited island ingredients into internationally craved cooking. From Boston Bay jerk pits to Kingston patty shops, Jamaican food delivers flavor with confidence.

Jerk is everything. Not the dry-rub pretenders served globally, but proper Jamaican jerk: chicken or pork marinated in Scotch bonnet peppers, allspice, thyme, garlic, ginger, and scallions, slow-cooked over pimento wood (allspice tree) until smoke-infused and falling off the bone, with charred edges that bite back. Boston Bay on the northeastern coast claims jerk's birthplace, where pit masters guard recipes and argue about technique. The smoke from pimento wood isn't negotiable—that's what makes it jerk, along with the allspice that gives Jamaican jerk its distinct warm-spicy-sweet profile.

Ackee and saltfish, the national dish, combines scrambled ackee fruit (which must be properly ripened or it's toxic) with salted cod, onions, tomatoes, and Scotch bonnet pepper. Ackee's creamy texture and mild flavor absorbs the salt cod and heat, served with fried dumplings (festivals), breadfruit, or hard dough bread. It's breakfast of champions, though eaten any time. The ackee tree came from West Africa via slave ships; the saltfish from North Atlantic trade—it's diaspora history on a plate.

Curry goat is Jamaican-Indian fusion done right. Goat chunks curried with potatoes, Scotch bonnet, curry powder, and allspice, slow-cooked until tender. The curry powder is British-influenced, but the result is distinctly Jamaican—hotter, more aromatic, with that allspice note threading through. It appears at every celebration, served with rice and peas (actually rice and kidney beans cooked in coconut milk with thyme and Scotch bonnet).

Oxtail is braised until the collagen breaks down and the meat becomes unctuous, the sauce thick and rich, butter beans soaking up everything. It's the dish that turns cheap cuts into luxury, proper braising over hours creating flavor that shortcuts can't match. Jamaicans take oxtail seriously—proper brown stew technique, the right balance of tomato and browning sauce, enough Scotch bonnet to wake you up.

Patties—beef, chicken, or vegetable filling spiced with curry and Scotch bonnet, wrapped in flaky turmeric-yellow pastry, baked until crispy—are Jamaica's answer to hand pies. Patty shops across Kingston sell these hot from the oven, often sandwiched in coco bread (sweet roll). It's street food that crossed all class boundaries, from school lunch to late-night fuel.

Jamaican street food extends to festival (sweet fried dumplings), bammy (cassava flatbread), roasted breadfruit, and conch soup. Rastafarian ital food—vegetarian cooking without salt or processed ingredients—represents another Jamaican tradition, vegetables seasoned with herbs and coconut milk, eaten by Rastas following biblical dietary laws.

Escoveitch fish—whole fried snapper topped with vinegar-based sauce of onions, carrots, peppers—brings Spanish influence (escabeche). The sweet-sour-spicy combination over crispy fried fish is perfect beach eating. Pepper pot soup, with callaloo greens and salted meat, dates to indigenous Taino people.

Scotch bonnet peppers define Jamaican heat. Fruity and floral before the burn hits, essential to nearly every dish. They're not about pain—they're about flavor that happens to bring serious heat. Jerk seasoning without fresh Scotch bonnets is cosplay.

Jamaican bakeries sell hard dough bread—slightly sweet, dense white bread that's become cultural icon—along with gizzada (coconut tart), grater cake (coconut candy), and plantain tarts. Sugar was Jamaica's cash crop during slavery; the sweet tooth persists.

Jamaica's coffee, Blue Mountain beans grown at high altitude, ranks among the world's finest—mild, smooth, expensive, mostly exported to Japan. Most Jamaicans drink instant. Rum production is serious business: Appleton Estate has operated since 1749, producing rums that range from white mixing rum to aged expressions rivaling fine whiskey.

Fine dining in Jamaica means resort restaurants and a few Kingston establishments, but the soul is in cook shops and roadside jerk stands. Scotchies, with locations in Montego Bay and Ocho Rios, keeps it simple: jerk chicken, jerk pork, festivals, and Red Stripe beer. That's all you need.

The agricultural products—coffee, cacao, allspice, sugarcane, tropical fruit, Blue Mountain peppers—grow in volcanic soil and tropical climate. Fishing brings snapper, king fish, mahi-mahi, conch, and lobster from Caribbean waters.

What Jamaican food does brilliantly is uncompromising flavor. The cooking doesn't cater to timid palates—if you can't handle heat, order something else. The jerk isn't mild, the pepper shrimp aren't decorative, the Scotch bonnets aren't optional. It's cooking with attitude, with cultural pride, with understanding that flavor means impact. Jamaican food culture, carried globally by diaspora, has influenced Caribbean cooking everywhere while maintaining distinct island identity. To eat well in Jamaica is to embrace intensity—the smoke, the spice, the boldness that turns simple ingredients into food that demands attention and delivers satisfaction.`
  },
  {
    name: 'Japan',
    lat: 36.2048,
    lng: 138.2529,
    summary: `Japanese cuisine is precision, seasonality, and umami-forward philosophy refined over centuries into possibly the world's most technically demanding food culture. This is cooking where knife skills take years to master, where rice preparation is art form, where the perfect piece of sushi represents the intersection of ingredient quality, aging technique, and hand temperature. Japan's food culture respects ingredients to the point of reverence, treats meals as seasonal expression, and maintains standards that make perfectionism look casual.

Sushi at its highest level—edomae-style sushi in Tokyo—bears little resemblance to California rolls. Chef selects and ages fish for optimal flavor, rice is seasoned precisely with red vinegar or white, hand temperature warms the rice while shaping nigiri that dissolves on tongue. Fish like tuna gets aged for days, sometimes weeks. The shari (rice) matters as much as the neta (fish). Omakase at places like Sukiyabashi Jiro or Sushi Saito represents 20+ pieces, each perfectly timed, temperature-controlled, seasoned. It's edible haiku—complete thought in two bites.

Ramen is equally obsessive. Tonkotsu broth from Hakata, simmered pork bones for 12-18 hours until milky white and unctuous. Shoyu ramen in Tokyo, clear brown broth with soy sauce base. Miso ramen in Sapporo, rich and warming against Hokkaido winters. Each bowl involves hours of preparation—the chashu pork, the soft-boiled egg with jammy yolk, the noodles with specific texture and thickness. Ramen shops specialize in one style, perfecting it endlessly. Tsuta in Tokyo held a Michelin star for shoyu ramen that cost $10, proof that excellence doesn't require luxury prices.

Kaiseki, Japanese haute cuisine, is theater. Multi-course meals following seasonal progression: sakizuke (appetizer), owan (soup), hassun (seasonal celebration), sashimi, yakimono (grilled), mushimono (steamed), and on through 7-14 courses. Each dish expresses the season through ingredients, presentation, even the dishware—ceramic bowls chosen for specific dishes, seasonal motifs. It's edible philosophy, Buddhist temple cooking evolved into high art. Kyoto's kaiseki restaurants like Kikunoi or Hyotei have operated for centuries.

Street food runs deep. Takoyaki, octopus balls from Osaka, crispy outside and molten inside. Okonomiyaki, savory pancakes loaded with cabbage, protein, topped with sauce, mayo, bonito flakes. Yakitori, chicken skewers grilled over binchotan charcoal, seasoned with salt or tare sauce—liver, skin, thigh, each part with specific cooking time. Izakayas serve countless small plates with beer and sake—edamame, karaage (fried chicken), grilled fish, pickles, tofu preparations.

Japanese ingredients drive everything. A5 Wagyu beef, marbled beyond belief, melts at body temperature. Kobe, Matsusaka, Omi—different regions, different breeds, all extraordinary. Uni (sea urchin) from Hokkaido, sweet and oceanic. Matsutake mushrooms in fall, pine-scented and precious. Yuzu, the citrus that appears in everything from ponzu to desserts. Dashi—kombu and bonito broth—is the foundation, the umami base that underlies Japanese cooking.

Michelin loves Japan. Tokyo has more three-star restaurants than any city on Earth. Kyoto's traditional kaiseki houses. Osaka's casual excellence. But the real story is the thousands of restaurants specializing in one thing—tempura houses frying vegetables and seafood in perfect batter, soba shops making buckwheat noodles by hand, yakitori joints grilling chicken parts with obsessive focus.

Regional cuisines matter enormously. Hokkaido's seafood and dairy. Kyoto's refined vegetarian shojin ryori. Osaka's street food culture. Okinawa's distinct Ryukyuan cuisine with pork, goya (bitter melon), and longevity-promoting foods. Each region maintains identity through ingredients and techniques.

Japanese sweets—wagashi—emphasize presentation and seasonal themes. Mochi, anko (sweet red bean paste), matcha flavors, delicate confections shaped like flowers or leaves. The tea ceremony involves specific sweets designed to balance matcha's bitterness.

Sake, shochu, and Japanese whisky all command international respect. Sake production involves parallel fermentation of rice that's been polished to varying degrees—daiginjo uses rice polished to 50% of original size. Whisky distilleries like Yamazaki and Hakushu produce expressions rivaling Scotch. Japanese craft beer scene is emerging but beer culture remains dominated by lagers.

Japanese convenience stores (konbini) serve better food than many countries' restaurants—onigiri (rice balls), bento boxes, fried chicken, fresh sandwiches, all surprisingly good. It's Japanese quality control applied to convenient eating.

What Japanese food culture teaches is that mastery requires time, that ingredients deserve respect, that there's no shortcut to excellence. The sushi chef trains for years before serving customers. The ramen cook tests broth daily. The kaiseki chef sources ingredients seasonally from specific producers. Nothing is casual, nothing is approximate. Japanese food isn't fusion, isn't creative destruction—it's refinement toward ideals of purity, seasonal appropriateness, and flavors that honor ingredients. To eat well in Japan is to witness craft becoming art, to understand that food can be both deeply traditional and endlessly evolving, to experience a culture where eating well matters as much as living well.`
  }
]

async function main() {
  console.log('🍽️  Starting Food & Cuisine writeup generation for Batch 6...')
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
  console.log('✨ FOOD BATCH 6 COMPLETE!')
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
