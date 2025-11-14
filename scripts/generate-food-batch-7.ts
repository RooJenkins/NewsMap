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
    name: 'Jordan',
    lat: 30.5852,
    lng: 36.2384,
    summary: `Jordan's cuisine is the Levant at its most soulful—where Bedouin generosity meets Palestinian refinement, all held together by the conviction that feeding people is a sacred duty. This is a food culture built on hospitality so profound it's almost confrontational: refuse a second helping at your peril.

Mansaf is the national dish and Jordan's edible identity. Lamb cooked in jameed (fermented dried yogurt), served over rice and shrak (paper-thin flatbread), topped with toasted almonds and pine nuts. It's traditionally eaten communal-style, right hand only, rice compressed into balls that somehow don't fall apart before reaching your mouth. The jameed gives it a funky, tangy complexity that defines Jordanian flavor profiles. Every celebration, every important meal, every gesture of welcome centers on mansaf. Learn to eat it properly and you've unlocked something essential about Jordan.

The street food game in Amman rivals anywhere in the Middle East. Hashem in downtown Amman has served hummus, foul mudammas, and falafel since 1952 to everyone from King Hussein to backpackers, all sitting at communal tables, paying about $3 for breakfast. Kunafa Habibah does the best cheese kunafa—syrup-soaked shredded phyllo over sweet cheese, bright orange from artificial coloring, absolutely worth it. Shawarma stands dot every corner, but Al-Quds downtown sets standards: lamb or chicken shaved to order, tahini, pickles, all wrapped tight.

The downtown souks (markets) reveal Jordan's agricultural backbone. Olives and olive oil from the north, particularly Jerash and Ajloun, compete with Lebanon's best. Za'atar blends vary by vendor—some heavy on sumac, others on sesame. Dates from the Jordan Valley, especially Medjool, are export-quality. Freekeh (roasted green wheat) gets harvested young, then roasted until smoky—it's ancient grain trendiness before trends existed.

Amman's dining scene has evolved dramatically. Fakhreldin serves elevated Levantine cuisine in a restored 1920s villa—their mezzeh selection and grilled meats justify the splurge. Sufra Restaurant near Rainbow Street offers traditional cooking with modern comfort. Tawaheen al-Hawa in a converted mill does regional dishes family-style. No Michelin stars (none in Jordan yet), but quality rivals starred restaurants elsewhere.

Regional variations matter. Zarqa's Circassian community brought dishes from the Caucasus—chicken in walnut sauce, smoked cheeses. Ma'an in the south goes heavier on Bedouin influences: ouzi (rice and lamb cooked underground), camel meat during celebrations. The north shares more with Syria: kibbeh variations, stuffed vegetables, yogurt-based soups.

Food traditions run deep. Mezze spreads before main courses—hummus, baba ghanoush, muhammara, labneh, fattoush salad, grape leaves, kibbeh, each house making their own versions. Tea comes constantly, cardamom-spiced, syrupy sweet unless you specify. Coffee service is ritual: cardamom-spiked, served in small cups, refilled until you shake the cup to signal enough. Breakfast is savory—labneh, olives, za'atar with olive oil, eggs with sumac.

Sweets are serious business. Besides kunafa, there's qatayef during Ramadan (filled pancakes with nuts or cheese), baklava layered impossibly thin, ma'amoul cookies stuffed with dates or pistachios. Zarqa is famous for its knafeh nabulsiyeh. Jordan's Bedouin hospitality tradition means every visit involves tea and sweets, non-negotiable.

What makes Jordanian food distinct is the quality of simple preparation. It's not fussy—it's wheat, lamb, olive oil, yogurt, simple spices—but the techniques passed through generations create depth. The yogurt is tangier, the olive oil more peppery, the lamb more flavorful because of desert grazing. Jordan doesn't shout about its cuisine like Lebanon does, but eat your way through properly and you'll understand why Palestinians, Syrians, and Iraqis who've settled here still cook these dishes with reverence.`
  },
  {
    name: 'Kazakhstan',
    lat: 48.0196,
    lng: 66.9237,
    summary: `Kazakhstan's cuisine tells the story of nomadic horsemen who spent millennia crossing vast steppes, where preservation mattered more than presentation and meat wasn't just sustenance—it was wealth. This is Central Asian cooking filtered through Russian influence, Soviet standardization, and now oil-money modernization, creating a food scene that's simultaneously ancient and rapidly evolving.

Beshbarmak is the national dish, and the name translates to "five fingers"—how it's traditionally eaten. Boiled horse meat (or beef, lamb) served over flat, wide noodles, topped with onions cooked in broth. It's simple to the point of minimalism, but the meat quality and the broth depth reveal everything about proper preparation. Served on enormous platters for sharing, eaten communal-style, accompanied by shorpo (the cooking broth served separately). Every celebration, every toi (feast), every important gathering centers on beshbarmak. The horse meat version is traditional; accepting it is cultural respect.

Kazy, shuzhuk, and other horse meat sausages showcase nomadic preservation techniques perfected over centuries. Kazy (rib meat stuffed into intestines, dried and smoked) appears at every special occasion. The fat-to-meat ratio creates unctuousness that renders beautifully. It's an acquired taste for outsiders, but it's Kazakhstan's charcuterie tradition, complete with regional variations in spicing and smoking methods.

Almaty's Green Bazaar is essential food education. Piles of kurt (dried salted cheese balls—intense, sour, rock-hard, addictive once you adjust), fermented mare's milk (kumis) sold by the liter, smoked fish from Caspian waters, Korean salads (morkovcha, kimchi) from the Korean diaspora deported here under Stalin. The prepared food section offers samsa (meat pastries), plov, lagman (hand-pulled noodles), and various soups. Prices remain shockingly low outside tourist areas.

Street food blends Central Asian traditions with Soviet canteen culture. Samsa (meat, pumpkin, or potato baked in tandoor ovens) from corner bakeries rivals Uzbekistan's. Baursaki (fried dough) appears at every meal—breakfast, tea time, accompanying soups. Plov variations show Uzbek influence but Kazakhstan's version tends less oily, more subtle. Lagman varies from soupy to stir-fried depending on who's cooking and regional traditions.

The high-end scene in Almaty and Nur-Sultan (Astana) has exploded with oil wealth. Line Brew serves modern Kazakh cuisine—deconstructed beshbarmak, elevated horse meat preparations, local ingredients treated with contemporary techniques. Gakku focuses on regional products: Caspian sturgeon, Aral Sea fish (what remains), Tien Shan mountain berries, artisanal dairy from small producers. No Michelin stars (the guide doesn't cover Kazakhstan), but the ambition and execution match European fine dining standards, just without the pretension.

Agricultural products reflect extreme geography. Northern wheat fields feed Soviet-era bread culture and export markets. Southern regions produce apples (Almaty's name derives from "apple"), apricots, melons that rival Uzbekistan's, grapes for increasingly serious wine production. Caspian Sea produces caviar (though post-Soviet overfishing damaged quality), fish, and salt. The steppes still support nomadic herding—sheep, horses, cattle—with meat quality benefiting from extensive grazing.

Korean influence deserves mention: Stalin deported 200,000 Koreans to Kazakhstan in 1937, and their cuisine became integral. Korean restaurants outnumber Kazakh ones in cities. Morkovcha (spicy Korean carrot salad) appears on every table alongside Russian salads and Kazakh dishes—it's cultural fusion through tragic circumstances.

Tea culture is sacred. Black tea, served strong, often with milk, accompanies every meal and social interaction. The dastarqan (low table spread) groans with snacks, sweets, bread, nuts—hospitality expressed through abundance. Refusing tea borders on insult.

What's fascinating is the tension between preservation and modernization. Young urban Kazakhs rediscovering nomadic food traditions their Soviet-educated parents dismissed as backwards, while simultaneously embracing global food trends. The result is Almaty cafe culture serving flat whites alongside kumis, and chefs treating horse meat with Noma-level reverence. Kazakhstan's cuisine is having an identity moment, and it's compelling to witness.`
  },
  {
    name: 'Kenya',
    lat: -0.0236,
    lng: 37.9062,
    summary: `Kenya's food scene reflects its position as East Africa's cosmopolitan crossroads—where indigenous Kikuyu, Luo, and Maasai traditions meet Swahili coast Arab-Indian fusion, British colonial influences, and now global urban dining in Nairobi's rapidly evolving restaurant culture. This is a country that takes its tea seriously, loves nyama choma with religious fervor, and maintains food traditions that connect rural highlands to coastal spice routes.

Nyama choma (grilled meat, typically goat) is Kenya's social glue. Order by the kilo at any of Nairobi's carnivore temples—Asmara, Nyama Mama, or the famous Carnivore Restaurant where game meat roasts on Maasai swords. It arrives on wooden boards with kachumbari (tomato-onion salad), ugali (stiff cornmeal porridge), and maybe sukuma wiki (collard greens). The meat is usually just salt-seasoned before grilling—quality and char do the work. Weekend afternoons see Kenyans packed into nyama choma joints, cold Tusker beers, conversations stretched across hours. It's not fancy; it's essential.

Ugali deserves respect. This cornmeal staple, cooked until it achieves playdough consistency, gets dismissed by outsiders as boring. But watch Kenyans eat it—torn into portions, shaped into scoops for stews, the neutral base that makes everything else work. Paired with sukuma wiki, beans, fish, or meat stews, ugali is the foundation of Kenyan meals. The technique matters: the stirring, the consistency, the timing. Every household has opinions on proper ugali.

The coast brings entirely different flavors. Swahili cuisine around Mombasa and Lamu shows centuries of Arab, Persian, and Indian ocean trade. Biryani, pilau (spiced rice), samosas, bhajias (pakoras), mahamri (cardamom-spiced fried bread for breakfast), and coconut-heavy curries reflect this fusion. Pwani (coast) specialties include octopus curry, grilled lobster, coconut fish stews using daily catches from dhows. The spice markets in Mombasa's old town rival Zanzibar's—cloves, cardamom, cinnamon, imported and grown locally since medieval trade era.

Nairobi's dining scene has exploded in the past decade. Talisman serves Mediterranean-Asian fusion in Karen; their garden setting and wine list attract NGO workers and diplomats. About Thyme offers farm-to-table Kenyan ingredients with European techniques. Mama Oliech does outstanding fish (whole tilapia, Nile perch) with a side of genuine local atmosphere. Fogo Gaucho brings Brazilian churrasco; Artcaffe chains offer Italian-influenced all-day dining. No Michelin stars, but Nairobi's upper-end rivals South African cities for quality and diversity.

Street food and markets reveal everyday eating. Maize roasted over charcoal, sold roadside, especially around long rains. Mutura (Kenyan blood sausage—goat intestines stuffed with meat, blood, spices) from street vendors—it's Kenya's answer to boudin, polarizing but beloved. Githeri (corn and beans cooked together) fills stomachs cheaply. Mandazi (slightly sweet fried dough) accompanies chai ya Tangawizi (ginger tea). City Market in Nairobi and Maasai Market showcase produce: purple passion fruit, tree tomatoes, avocados the size of melons.

Tea culture defines Kenya despite coffee growing here. Kenya is the world's third-largest tea exporter, and locals drink it constantly—milky, sweet, sometimes spiced with ginger. Chai sold from thermoses by hawkers, in offices, at every social gathering. The ritual of tea-and-mandazi breakfast or afternoon chai break structures the day. Meanwhile, Kenya grows some of the world's best coffee (bright, acidic, complex), but most gets exported while instant coffee dominates domestically—a colonial economic hangover.

Regional dishes vary dramatically. The Kikuyu heartland north of Nairobi favors mukimo (mashed peas, potatoes, maize, greens), irio (similar, with added beans), and roasted meat. Luo communities around Lake Victoria excel with fish—tilapia, Nile perch—either fried or in stews. Maasai traditionally consumed milk, blood, and meat; while modern Maasai diets have diversified, mursik (fermented milk in gourds) continues cultural significance.

What makes Kenyan food compelling is its honesty. It's not trying to be the next global cuisine trend. It's fuel, community, tradition, with pockets of innovation in Nairobi's expanding middle class. The ingredients are stunning—high-altitude growing produces incredible vegetables, the coast offers pristine seafood, the livestock from pastoralist communities rivals any terroir-driven meat. Kenya hasn't fully capitalized on its culinary potential internationally, but eat here properly—past the safari lodge buffets into local spots—and you'll taste East Africa's diverse, delicious reality.`
  },
  {
    name: 'Kosovo',
    lat: 42.6026,
    lng: 20.9030,
    summary: `Kosovo's cuisine is the Balkans condensed—Albanian foundations, Turkish Ottoman layers, Serbian influences, Yugoslav standardization, and now a post-conflict generation redefining identity through food. In Europe's youngest country, where political tensions still simmer, restaurants become neutral territory, and the cooking tells a more complicated, more delicious story than any news report.

Flija is Kosovo's edible patience test and greatest culinary achievement. Layer upon layer of crepe-thin batter brushed with cream, each layer cooked over open fire before the next addition, for hours, until you have a cake-like structure 20+ layers deep with crispy edges and creamy interior. Traditionally cooked outdoors for celebrations, weddings, major gatherings. Modern restaurants attempt it, but real flija requires time, skill, and the kind of fire management that can't be rushed. When done right, it's extraordinary—smoky, rich, textural.

Burek reigns supreme for breakfast and late-night fuel. These flaky pastries filled with cheese (me djathë), meat (me mish), or spinach come from börek via Ottoman influence, but Kosovo's versions achieve particular excellence. Burekxhiu shops throughout Pristina turn out fresh batches all day—crisp, greasy in the best way, cheap, satisfying. Pair with ayran (salty yogurt drink) or strong Turkish coffee. Burek discourse is serious: cheese versus meat preferences reveal personality.

Tavë kosi (lamb baked with yogurt and rice) shows Albanian heritage, while sarma (stuffed cabbage rolls) and ajvar (roasted red pepper spread) reflect broader Balkan commonalities. Pite (savory pies) vary by filling: pite me presh (leeks), me kungull (pumpkin), me spinaq. Each family guards their dough technique. The Ottoman influence persists in baklava, tulumba (fried dough soaked in syrup), and the coffee culture that structures social life.

Pristina's food scene has evolved rapidly since independence. Dit' e Nat' serves traditional Albanian-Kosovar cooking in a rustic setting—their tavë kosi and grilled meats draw locals and diaspora returnees. Renaissance does creative takes on regional dishes. The Pishat area north of Pristina offers countryside restaurants where trout from mountain streams gets grilled simply, served with fresh bread and salads. No Michelin presence (Kosovo isn't on their radar), but the cooking quality often surpasses more celebrated Balkan destinations.

Markets reveal Kosovo's agricultural richness despite the country's small size and war-damaged infrastructure. The Pristina bazaar (Çarshia e Madhe) offers honey from mountain apiaries, aged cheese, ajvar sold by the kilo, pickled vegetables, dried peppers, nuts, and seasonal produce. Peja region produces wines increasingly earning respect—Kosovan wine was Yugoslav export quality; the industry is rebuilding. The Metohija valley grows excellent peppers, tomatoes, and stone fruits.

Grilled meats dominate: qebapa (small grilled sausages), pljeskavica (spiced meat patties the size of plates), qofta, all served with lepinja (flatbread), raw onions, kajmak (clotted cream), and ajvar. Meat quality is high—small-scale farms, traditional raising methods. Lamb especially benefits from mountain pasture grazing.

The coffee and rakija (fruit brandy) culture structures social life. Turkish coffee—finely ground, unfiltered, served in small cups with sugar preferences specified—accompanies every meeting, negotiation, celebration. Rakija (usually grape or plum) loosens tongues and seals deals. The ritual of offering coffee and sweets to guests is non-negotiable hospitality.

What's fascinating is food as identity politics. Albanian Kosovars emphasize Albanian dishes and Turkish influences; Serbian Kosovars in enclaves maintain Serbian traditions. Restaurants in mixed areas or Pristina's cosmopolitan center serve both, avoiding flags and politics. Food becomes one space where coexistence still happens, even if menus sometimes use only Albanian or only Serbian depending on neighborhood.

The young population (average age 28) is creating hybrid cuisine—traditional dishes with modern presentations, international influences filtered through local ingredients. Pristina's cafe culture rivals any European capital: specialty coffee, avocado toast, Instagram-worthy presentations, all within blocks of burekxhiu churning out traditional breakfast.

Kosovo's food isn't trying to be the next global trend, but it's real, rooted, and ridiculously affordable. You'll eat better here than in over-touristed Dubrovnik or Belgrade's tourist traps, for a fraction of cost. The warmth of hospitality—that insistence on feeding you more, pouring another rakija, extending the table—reflects a culture that's survived trauma by maintaining community. Eating in Kosovo means accepting generosity, hearing stories, and understanding that food here isn't just fuel or entertainment—it's how identity, memory, and hope get transmitted.`
  },
  {
    name: 'Kuwait',
    lat: 29.3117,
    lng: 47.4818,
    summary: `Kuwait's cuisine reflects its maritime pearl-diving past, Bedouin desert roots, and contemporary oil wealth that's created a Gulf dining scene of surprising sophistication. This is a tiny country where traditional Kuwaiti cooking coexists with global fine dining, where hospitality remains almost aggressive, and where you'll encounter some of the Arab world's best seafood alongside mall food courts that rival Las Vegas for excess.

Machboos is Kuwait's national dish—spiced rice with meat (lamb, chicken) or fish, the Gulf's answer to biryani but distinct. Kuwaiti machboos uses loomi (dried limes) for a citrusy, slightly bitter complexity that defines local flavor profiles. The rice gets colored with saffron or turmeric, studded with raisins and fried onions. Fish machboos, using hamour (grouper) or zubaidi (pomfret), showcases Kuwait's seafood traditions. Each family guards their spice blend—baharat mix, but ratios vary. Served on enormous platters for communal eating, properly eaten with right hand, rice compressed into balls.

The seafood culture runs deep. Kuwait City's fish market (Souk Al-Mubarakiya) reveals daily catches from the Gulf—hamour, safi (rabbitfish), shrimp, crab, zubaidi. Kuwaitis favor grilled preparations: fish marinated with turmeric, cumin, coriander, then grilled until skin crisps. Mutabbaq zubaidi (pomfret stuffed with spiced rice) is celebratory cooking. Robyan (shrimp) appears curried, grilled, or in stews. The fishing heritage from pearl-diving days when Kuwait survived on maritime trade shapes the cuisine.

Street food and traditional eateries cluster in Souk Al-Mubarakiya. Freej Swaileh serves authentic Kuwaiti breakfast—balaleet (sweet vermicelli with saffron and cardamom topped with savory omelet), chebab (cardamom pancakes with date syrup), khanfaroosh (fried dough with cardamom). Mais Alghanim does traditional machboos and muttabaq. The outdoor grills offer tikka, kebabs, and whole grilled fish wrapped in foil with vegetables.

The contemporary dining scene reflects oil wealth and global exposure. Dai Forni serves Italian with imported ingredients and wine lists; Al-Boom, a dhow-turned-restaurant, offers upscale Kuwaiti-Lebanese fusion with Gulf views. Cocoa Room does molecular gastronomy-influenced desserts. Burj Al Hamam brings Lebanese fine dining. No Michelin stars (the guide doesn't cover Kuwait), but execution and ingredients rival starred restaurants globally. The clientele—Kuwaiti families, expats, Gulf tourists—sustains a high-end scene that's refined without the stuffiness of European fine dining.

Sweets are serious: kunafa, baklava, luqaimat (fried dumplings with date syrup), gers ogaily (saffron cakes). Date culture persists—trays of dates and Arabic coffee (cardamom-spiced, unsweetened) welcome guests. Tea (chai) comes constantly, sweet, strong, in small glasses.

Kuwaiti hospitality culture means invitation to homes, where the real cooking happens. Harees (wheat and meat porridge) during Ramadan, gabout (lamb shoulder slowly cooked until falling apart), murabian (grilled lamb ribs), all prepared for gatherings. The diwaniya culture—separate social spaces for male guests—involves endless rounds of tea, coffee, sweets, and conversation. Women's gatherings involve similar hospitality with different dishes.

Regional influences blend: Iranian (Kuwaiti population includes Persian heritage), Indian (from subcontinental expat workers who've been here generations), Levantine (Palestinian, Lebanese refugees brought their cuisines). This creates a food scene more diverse than Kuwait's size suggests. The Iranian influence shows in ghormeh sabzi, koofteh, and rice preparation techniques. Indian flavors appear in street shawarmas, biryanis, and curry houses throughout the city.

Shopping malls dominate modern Kuwaiti life, and food courts reflect it. The Avenues Mall's dining options span global cuisines—Korean, Japanese, American chains, Italian, Gulf fusion. Kuwaitis eat out constantly; the restaurant culture is embedded in social life beyond what most cultures maintain.

What's remarkable is tradition's persistence despite modernization. Young Kuwaitis educated abroad return appreciating grandmothers' cooking, demanding quality traditional dishes alongside international trends. New restaurants like Shemaimaa do heritage cooking with contemporary presentation—machboos deconstructed, seafood with modern techniques, loomi used in unexpected ways.

Coffee culture wars are real: traditional Arabic coffee versus third-wave specialty coffee shops. Both thrive. The cardamom-scented gahwa remains ritual and respect; the flat whites and pour-overs signal cosmopolitan tastes. Both matter, both define modern Kuwaiti identity.

Kuwait's cuisine won't appear on global foodie trend lists, but it's genuinely delicious, exceptionally generous, and far more diverse than stereotypes suggest. The seafood quality rivals anywhere, the hospitality is overwhelming, and the blend of authenticity and sophistication reflects a small, wealthy nation negotiating modernity without abandoning tradition. Just prepare for overeating—refusing second, third, fourth helpings offends.`
  },
  {
    name: 'Kyrgyzstan',
    lat: 41.2044,
    lng: 74.7661,
    summary: `Kyrgyzstan's cuisine is Central Asian nomadic cooking at high altitude—where preservation techniques developed over millennia on horseback, where meat and dairy dominate because the Tien Shan mountains only permit seasonal agriculture, and where hospitality traditions mean every traveler gets fed whether they have money or not. This is one of the world's most remote food cultures, rooted in practicality but capable of surprising beauty.

Beshbarmak rules as the national dish, shared with Kazakhstan but with Kyrgyz variations. Boiled horse, lamb, or beef over flat, wide noodles, topped with onions cooked in broth. The name means "five fingers"—proper eating method. Kyrgyz versions often feature horse meat (et), considered superior, from semi-wild herds grazing alpine meadows. The simplicity is deceptive—the broth must be rich, the meat tender from proper boiling, the noodles handmade to exact thickness. Served at every toi (celebration), every important gathering, from yurt encampments to Bishkek apartments. The shorpo (broth) comes separately in bowls for sipping.

Kuurdak (fried meat and offal with onions and potatoes) is everyday soul food—intensely savory, heavy, perfect after mountain trekking. Traditionally made from whatever meat is available, cooked in its own fat until crispy edges form. Variations exist across regions: southern Osh versions differ from northern Bishkek interpretations. This is stick-to-your-ribs nomadic fuel.

Dairy products define Kyrgyz cooking. Kumis (fermented mare's milk) is the national drink—slightly alcoholic, tangy, probiotic-rich, an acquired taste for outsiders but central to culture. Health claims abound; traditions run deep. Served chilled, especially in spring when mares are producing. Kymyz festivals celebrate the first batches. Beyond kumis: ayran (salted yogurt drink), kaymak (clotted cream), kurut (dried salted cheese balls—intensely sour, rock-hard, addictive), suzmo (strained yogurt), and various fresh cheeses from sheep, cow, or yak milk depending on elevation.

Bishkek's Osh Bazaar is essential food education. Piles of kurut in varying sizes and saltiness, fresh bread (nan, lepyoshka), horse sausages (chuchuk, kazy), smoked meats, honey from mountain wildflowers, walnuts, apricots (fresh and dried), and prepared foods—samsa, plov, lagman, manty (steamed dumplings). Russian influences persist from Soviet times: borscht, pelmeni, Russian salads, pickled everything. Korean salad vendors (diaspora from Stalin's deportations) sell morkovcha and kimchi alongside traditional Kyrgyz items.

Street food leans heavily on Central Asian standards. Samsa (meat or pumpkin baked in tandoor ovens) from bakeries throughout cities and roadside stands. Shashlik (grilled meat skewers) sold from smoky grills—mutton, liver, fat in alternating chunks. Plov (osh in Kyrgyz) reveals Uzbek influence, especially in southern Osh where the Uzbek population maintains distinct preparation methods. Lagman (hand-pulled noodles with meat and vegetables) varies from soupy to stir-fried. Oromo (steamed meat-filled dough rolls) are Osh specialties.

High-end dining in Bishkek has evolved slowly. Supara Ethno Complex does traditional Kyrgyz cooking in yurt settings with some refinement—their beshbarmak and kuurdak aim for quality over quantity. Navigator serves modern European with local ingredients where possible. Chicken Star (despite the name) offers reliable Kyrgyz-Russian fusion. No Michelin presence, no international acclaim, but gradual improvement in presentation and technique while maintaining authentic flavors.

The yurt dining experience matters culturally. Community-based tourism initiatives in Jyrgalan Valley, Song-Kol Lake, and Tash-Rabat offer home-cooked meals in family yurts—fresh bread baked in clay ovens, homemade kaymak and honey for breakfast, boiled meat, shorpo, fresh salads from impossibly high-altitude gardens. The hospitality is profound: refusing food can offend, and portions assume you haven't eaten in days.

Tea culture structures everything. Black tea with milk, served constantly, accompanies all meals and social interactions. The dastarkan (low table spread) groans with bread, butter, kaymak, honey, jam, kurut, candies, nuts—abundance as respect. Vodka appears at celebrations, though Muslim traditions mean alcohol consumption varies regionally and by individual observance.

Seasonal variations matter dramatically. Summer brings fresh vegetables, fruits, dairy abundance. Jams get made—strawberry, raspberry, apricot, cherry—for winter preservation. Fall means slaughtering livestock for winter meat supplies. Winter relies on preserved foods: dried fruits, kurut, smoked meats, root vegetables, pickles. Spring's first kumis and fresh greens are celebrated.

What makes Kyrgyz food compelling is its honesty about harsh realities. This is mountain survival cooking elevated through technique and tradition. The ingredients—grass-fed meats, wild honey, alpine dairy, stone fruits from Soviet-era orchards—are exceptional quality despite basic preparation. There's no pretension, no fusion trends, just nomadic wisdom about what sustains life at 2000+ meters.

The younger generation in Bishkek experiments cautiously—cafes serving flat whites alongside kymyz, Instagram-worthy presentations of traditional dishes, vegetarian options appearing (radical in meat-centric culture). But mostly, Kyrgyzstan's food remains what it's been for centuries: fuel for nomads, expression of hospitality, and connection to a landscape that demands respect. Come hungry, bring an open mind, and prepare for generosity that borders on overwhelming.`
  },
  {
    name: 'Laos',
    lat: 19.8563,
    lng: 102.4955,
    summary: `Laos holds the distinction of being Southeast Asia's most underrated cuisine—less tourist-famous than Thai, less globally trendy than Vietnamese, but equally complex and arguably more true to its roots. This is sticky rice territory (Lao people consume more per capita than anywhere else), where fermented fish sauce padaek defines flavor profiles, where French colonial influence left baguettes and pâté, and where the Mekong River provides both transportation and sustenance.

Larb (sometimes laap) is the national dish and Lao pride. Minced meat (pork, chicken, duck, fish, or mushrooms for vegetarians) tossed with toasted ground rice, lime juice, fish sauce, herbs (mint, cilantro, sawtooth coriander), shallots, and chilies. The toasted rice provides nutty texture; the herbs and lime create brightness; the meat should be borderline overcooked for safety but still juicy. Regional variations abound: northern larb tends herbier and less spicy, southern versions bring heat. Larb dip (made with bile for bitter complexity) is traditional but polarizing—it's an acquired taste even for Lao people. Proper larb requires sticky rice (khao niao) pinched into balls for scooping.

Tam mak hoong (papaya salad, similar to Thai som tam) is daily staple—green papaya pounded with chilies, garlic, lime, fish sauce, tomatoes, and crucially, padaek (fermented fish sauce that smells like death but tastes like umami paradise). The Lao version is funkier, more aggressively flavored than Thai som tam. Variations include tam mak thaeng (cucumber salad) and tam mak teen (banana flower salad). Watching vendors pound these to order at markets—wooden mortar and pestle, rhythmic smashing, taste-adjusting—is Lao street food theater.

Sticky rice isn't a side dish—it's the center of every meal. Steamed in conical baskets, served in lidded baskets, eaten with hands. The ritual of rolling rice balls, using them to scoop up larb, grilled meat, or dipping into jeow (chili paste relishes) structures Lao dining. The rice quality varies—the best is slightly sweet, properly sticky without being gummy, from glutinous varieties grown in Lao paddies. Respect the rice, and Lao people will respect you.

The morning markets (talat sao) throughout Luang Prabang, Vientiane, and Pakse reveal Lao food culture. Fresh herbs by the bundle—sawtooth coriander, Vietnamese coriander, dill, basil varieties, mint. Live fish from the Mekong. Mountains of sticky rice. Pre-made larb. Khao poon (rice noodle soup with red curry or fermented sauce). French baguettes filled with pâté, coriander, chilies, cucumber—banh mi's Lao cousin, thanks to French colonialism's edible legacy.

Street food in Vientiane leans toward evening food stalls: ping gai (grilled chicken), ping pa (grilled fish stuffed with lemongrass), sai oua (Lao herb sausage with lemongrass and kaffir lime), and or lam (a stew from Luang Prabang with eggplant, wood ear mushrooms, chilies, and sawtooth coriander that defines northern Lao cooking). The night market along the Mekong offers everything from fried insects to fruit shakes, fried rice to grilled meats.

The fine dining scene barely exists. Tamarind Restaurant in Luang Prabang does elevated Lao cuisine—their tasting menus introduce dishes rarely found elsewhere, presentation goes beyond street-food pragmatism, and they explain the cultural context. Kualao Restaurant in Vientiane offers upscale Lao in a villa setting. But Laos hasn't developed (or needed) high-end dining infrastructure—the best food remains in markets, street stalls, and family homes. No Michelin stars, no celebrity chefs, just grandmothers who've perfected their larb recipes over decades.

French colonial remnants persist deliciously. Joma Bakery Café in Vientiane and Luang Prabang serves excellent coffee (Lao coffee, grown on the Bolaven Plateau, rivals Vietnamese for quality—strong, dark, often served with condensed milk). Croissants, baguettes, pastries maintain French technique. The Lao pâté sandwich tradition fuses French charcuterie with local flavors—it's cultural colonialism you can eat, complicated and tasty.

Agricultural products define the regions. The Bolaven Plateau grows exceptional coffee—arabica and robusta, sold unroasted in markets, increasingly exported. Sticky rice paddies blanket lowlands. The Mekong and tributaries provide fish—pa dek (fermented fish) for padaek sauce, fresh fish for grilling, catfish for soups. Vegetables and herbs grow abundantly—Laos hasn't industrialized agriculture, so most produce remains small-scale, seasonal, organic by default.

Lao-Lao (rice whisky) appears at every celebration, home visit, and festival. It ranges from smooth to paint-thinner harsh depending on the distiller. Refusing is impolite; sipping slowly is acceptable. Beer Lao, the national lager, is actually good—crisp, sessionable, ubiquitous, and a point of national pride.

What makes Lao food distinctive is the fermentation and the herbs. Padaek, pa dek (whole fermented fish), fermented bamboo shoots—funk levels exceed Thai or Vietnamese cooking. The herb usage—especially sawtooth coriander and dill—creates flavor profiles distinct from neighbors. The sticky rice obsession shapes meal structure differently than anywhere else in Southeast Asia.

Laos hasn't been discovered by food tourists the way Thailand has, which means authenticity persists. You're not eating dumbed-down versions for Western palates—if you order spicy, it's Lao spicy (prepare accordingly). The generosity remains genuine—invitations to eat with families, shared meals, the concept of eating alone being almost rude. This is a food culture still connected to its agricultural roots, still cooking grandmothers' recipes, still centered on community and sharing. Eat well, eat adventurously, and Laos will reward you with some of Southeast Asia's most memorable, funky, herbaceous, delicious meals.`
  },
  {
    name: 'Latvia',
    lat: 56.8796,
    lng: 24.6032,
    summary: `Latvia's cuisine is Baltic survival cooking transformed into national identity—where rye bread borders on sacred, where smoked fish from the Gulf of Riga carries centuries of tradition, and where seasonal eating wasn't a trend but necessity during the Soviet occupation when imports barely existed. This is food shaped by harsh winters, forest resources, and the cultural determination to preserve Latvian identity through every meal.

Rupjmaize (dark rye bread) is Latvia's edible soul. Dense, slightly sweet from malt, made with sourdough starters passed through generations, this bread appears at every meal. Toasted with butter for breakfast, accompanying soup for lunch, the base for smoked fish canapés at celebrations. Latvians consume more rye bread per capita than almost anywhere—the bread culture runs deeper than wine culture in France. The Latvian ethnographic open-air museum demonstrates traditional baking in outdoor ovens, showing why this bread matters beyond nutrition.

Sklandrausis, Latvia's officially designated heritage food, is a savory-sweet tart from Kurzeme region—rye crust filled with mashed potatoes and carrots, sweetened with caraway. It sounds unlikely, tastes extraordinary—earthy, slightly sweet, complex. This is peasant food elevated to protected cultural status. Finding proper sklandrausis requires visiting Kurzeme or specialty bakeries in Riga; most restaurant versions disappoint compared to home-baked.

Smoked fish culture reflects Latvia's Baltic Sea heritage. Smoked sprats (kilkas), smoked eel, smoked salmon from Riga's Central Market, purchased by the kilo. Preparation methods vary—cold smoked for delicate flavor, hot smoked for firmer texture. Served on buttered rye bread with onions, capers, and hard-boiled eggs for celebrations. The sprats (reņģes) also appear pickled, marinated, fried—Latvian culture revolving around these tiny fish.

Riga's Central Market (housed in former Zeppelin hangars) is Europe's largest market and essential food education. The fish pavilion alone could occupy hours—live eels, pike, carp, perch from Latvia's lakes and rivers, plus Baltic catches. The dairy pavilion offers skābais krējums (sour cream—Latvians put this on everything), cottage cheese, and specialty cheeses. The meat pavilion showcases smoked meats, sausages, and pork products central to Latvian diet. Seasonal produce varies dramatically—berries in summer, root vegetables in winter, mushrooms in fall.

Grey peas and bacon (pelēkie zirņi ar speķi) is comfort food embodied—dried grey peas cooked until soft, served with fried bacon, onions, and sour cream. Simple, heavy, perfect for January. Similarly, rasols (beet salad with potatoes, pickles, peas, eggs, and mayonnaise) appears at every celebration—Soviet-era staple that's become tradition. Pīrāgi (bacon-filled pastries) are essential Christmas food but available year-round—yeasted dough pockets with smoked bacon and onions, shaped like half-moons.

The restaurant scene in Riga has evolved dramatically post-independence. Vincents (run by chef Martins Ritins) achieves Michelin-worthy standards—modern European technique applied to Latvian ingredients, tasting menus that showcase local products seasonally. 3 Pavaru Restaurant does chef-driven Latvian-Nordic fusion. Folkklubs Ala Pagrabs offers traditional Latvian in a medieval cellar with live folk music—their pork knuckle, sauerkraut, and beer hall atmosphere deliver authentic experience. No Michelin stars yet (the guide hasn't covered Latvia), but the fine dining scene is quietly excellent.

Seasonal traditions structure the food calendar. Jāņi (midsummer) means Jāņu siers (caraway cheese), pīrāgi, and beer. Christmas involves piparkūkas (gingerbread), sauerkraut, grey peas, and pork. Spring brings birch sap collection—Latvians drink it fresh, slightly sweet, or fermented. Summer means berry picking—strawberries, blueberries, lingonberries, cranberries—for fresh eating, jams, and liqueurs. Fall mushroom foraging is national obsession—chanterelles, boletes, milk caps preserved for winter.

The forest provides beyond mushrooms: wild garlic, nettles, sorrel, and various herbs supplement cultivated vegetables. Latvia's relatively unspoiled forests (over 50% forest coverage) mean wild food gathering remains culturally significant, not nostalgic performance.

Beverages reflect Baltic climate. Kvass (fermented rye bread drink) is summer refreshment—slightly alcoholic, tangy, sweet. Riga Black Balsam, the national liqueur, is herbal, medicinal, intensely flavored—sip it straight, mix with vodka and blackcurrant juice (the most Latvian cocktail), or add to coffee. Beer culture is strong—Užavas, Valmiermuižas, Labietis produce excellent craft beers alongside larger breweries. Honey wines (meads) from local apiaries are experiencing revival.

The Russian influence from Soviet occupation persists in food culture—pelmeni, borscht, Russian salads appear on menus. The Latvian population is about 25% Russian ethnically, creating fusion that's sometimes contentious politically but delicious culinarily.

What defines Latvian food is seasonal extremes and preservation mastery. Pickled cucumbers, sauerkraut, smoked and salted fish, root cellars packed with beets, carrots, potatoes—survival techniques from when fresh food disappeared November through April. These aren't nostalgic trends but living traditions maintained because they work and taste good.

Modern Latvia negotiates global food trends while fiercely protecting traditional dishes. Young Latvian chefs trained abroad return, applying contemporary techniques to heritage ingredients. The result is a food scene that respects the past—that rye bread, those smoked sprats, the foraging traditions—while building something distinctly current. Latvia won't become the next Nordic cuisine darling, but for those who dig deeper than Old Town tourist restaurants, the cooking here is honest, seasonal, rooted, and delicious in ways that resist Instagram but reward actual eating.`
  },
  {
    name: 'Lebanon',
    lat: 33.8547,
    lng: 35.8623,
    summary: `Lebanon's cuisine is the Levant's greatest hits perfected to an art form—where mezzeh culture reaches its apex, where every family guards secret recipes, and where political divisions fade when everyone agrees the hummus from that specific street stall in Tripoli is unmatched. This tiny country has influenced global food culture disproportionately, exporting its flavors worldwide while maintaining that what you eat in Beirut, Tyre, or the Bekaa Valley can't be replicated elsewhere.

Hummus might seem universal, but Lebanon takes it personally. Smooth chickpeas whipped with tahini, lemon, garlic until silky, drizzled with olive oil, maybe topped with pine nuts or whole chickpeas. The ratios matter—too much tahini overwhelms, too much lemon sours it. Served with fresh pita, raw vegetables, or as part of mezzeh spreads. Every region claims superiority; Beirutis swear by certain shops; arguments over best hummus can derail dinner conversations. This is national pride on a plate.

The mezzeh tradition defines Lebanese dining. Twenty, thirty, forty small plates shared communal-style: hummus, moutabal (smoked eggplant with tahini), tabbouleh (parsley salad with bulgur—and it's mostly parsley, not grain salad with green bits), fattoush (mixed greens with fried pita, sumac, pomegranate molasses), labneh, shanklish (aged cheese with zaatar and onions), kibbeh (raw, fried, or baked bulgur-meat preparations), warak enab (stuffed grape leaves), sawda (sautéed liver), and countless others. The progression is social ritual: share everything, taste everything, debate everything. Lebanese don't just eat—they perform eating.

Kibbeh deserves its own discussion. Raw kibbeh nayyeh (like steak tartare but with bulgur and lamb, served with onions, mint, olive oil) tests trust in your butcher and cultural boundaries. Fried kibbeh (football-shaped bulgur shells stuffed with spiced meat and pine nuts) appears at every celebration. Kibbeh bil sanieh (baked layers) is comfort food. Variations exist across regions and families—Tripoli's kibbeh differs from Zahle's, which differs from south Lebanon's. The technique of pounding meat and bulgur to perfect consistency is passed mother to daughter for generations.

Street food in Lebanon rivals sit-down dining. Manakish (flatbreads topped with zaatar-olive oil, cheese, or meat) are breakfast and late-night fuel—cheap, fast, delicious. Falafel and shawarma reach perfection here: crispy fried chickpea balls in pita with tahini, pickles, tomatoes; or chicken/beef shaved to order, garlic sauce, pickles, wrapped tight. Kaak (sesame bread rings) sold from carts, sprinkled with zaatar or filled with cheese. Beirut's Mar Mikhael and Gemmayzeh neighborhoods offer street food theatre nightly.

The high-end scene showcases Lebanon's culinary sophistication. Tawlet serves a different regional Lebanese menu daily, each meal prepared by home cooks from specific villages—this is terroir-driven Lebanese cuisine, preserving recipes that might otherwise disappear. Liza Beirut offers refined Lebanese in a belle époque setting. Enab does modern interpretations without disrespecting tradition. No Michelin stars (the guide suspended Lebanon operations due to instability), but the cooking quality and ingredient sourcing rival any Mediterranean starred restaurant.

The Bekaa Valley produces exceptional wine—Château Ksara, Château Musar, Ixsir, and smaller producers cultivate grapes at altitude with limestone soils creating complexity. Lebanese wine culture dates to Phoenician times; modern production began in the 19th century. The wines—especially reds from Cabernet Sauvignon, Merlot, and indigenous varieties—compete internationally while remaining underrated globally.

Agricultural diversity reflects Lebanon's microclimates. Coastal areas produce citrus, avocados, bananas. Mountain regions grow apples, cherries, stone fruits. The Bekaa Valley is breadbasket—wheat, vegetables, fruits, plus those vineyards. Olive groves throughout produce exceptional oil, especially from mountain villages. The quality of produce—tomatoes that actually taste like tomatoes, cucumbers with flavor—elevates simple preparations.

Sweets are serious: baklava (Lebanon's version rivals Turkey's), mafroukeh (semolina layered with nuts and sugar syrup), knefeh (shredded phyllo with cheese, orange blossom syrup), and countless others. Tripoli's sweet shops are legendary. The use of orange blossom water and rose water creates distinctive aromatics. Hallab, Bohsali, Abdel Rahman Hallab—sweet shop dynasties with century-long reputations.

Coffee culture structures social life. Arabic coffee (ahweh arabiyeh)—finely ground, cardamom-spiced, served in small cups—appears at every visit, every meeting, every pause. White coffee (not coffee—boiled water with orange blossom water) is evening ritual. Espresso culture from French and Italian influences coexists with traditional preparations.

Regional variations matter despite Lebanon's small size. Tripoli's food leans toward Syrian influences, sweeter, heavier on meat. The south shares more with Palestinian cooking. Mountain villages maintain distinct traditions—kishik (fermented yogurt-wheat mixture) from the north, qarqabou (stuffed squash) from Akkar. Coastal areas excel with seafood—grilled, fried, in stews—while Beirut synthesizes everything.

What makes Lebanese cuisine globally influential is the hospitality embedded in every meal. The insistence on abundance, the sharing, the debates over proper preparation, the pride in regional products—this is food as identity, resistance, celebration, and daily practice. Through civil war, economic collapse, political chaos, Lebanese people maintained their food culture as stability when everything else crumbled.

The diaspora spread Lebanese restaurants globally, but nothing matches eating in Lebanon—the produce quality, the generosity, the arguments about whether Tripoli or Beirut makes better hummus, the way meals stretch for hours because leaving the table means conversation ends. Lebanese cuisine isn't just delicious—it's edible proof that culture survives through cooking, sharing, and insisting that eating together matters more than individual hunger.`
  },
  {
    name: 'Lesotho',
    lat: -29.6100,
    lng: 28.2336,
    summary: `Lesotho's cuisine reflects its unique geography—an entire country above 1,000 meters elevation, landlocked within South Africa, where Basotho people developed food traditions around what grows at altitude and what sustains herders in harsh mountain winters. This isn't cuisine seeking global acclaim; it's honest mountain food, shaped by necessity and maintained through cultural pride.

Papa (maize porridge, called pap in South Africa) forms the foundation of Basotho meals. Cooked stiff enough to mold with hands, torn into portions for scooping stews and relishes. This is southern African staple cooking, but Lesotho's version—made from high-altitude maize, often stone-ground—has particular texture and subtle sweetness. Breakfast papa comes thinner, like porridge; lunch and dinner papa is dense, filling, fuel for physical labor and cold temperatures. It's simple food requiring technique: the stirring, the consistency, the timing all matter.

Moroho (wild greens) and other foraged vegetables supplement cultivated crops. The mountain environment provides morogo varieties, watercress from streams, wild spinach—gathered seasonally, cooked with onions, tomatoes, and fat when available. This is subsistence vegetation that's become cultural tradition: knowing which plants, when to harvest, how to prepare knowledge passed through generations.

Meat, when available, centers on mutton and goat from livestock that defines Basotho pastoral culture. Grilled over open fires, stewed with vegetables, or prepared for celebrations. The Basotho blanket-wearing herders manage flocks through mountain pastures; the meat quality from this extensive grazing is exceptional. Chicken appears increasingly, but traditional meals favor lamb and goat. During celebrations, whole sheep or goats get slaughtered—roasted, stewed, every part utilized.

Sorghum beer (joala or traditional beer) is cultural centerpiece. Brewed from sorghum or maize, fermented, slightly sour, mildly alcoholic, served in communal pots during celebrations, ceremonies, and social gatherings. The brewing technique—malting grains, fermenting—requires skill and tradition. Commercial breweries now produce similar products, but home-brewed joala maintains significance for cultural events.

Maseru, the capital, offers limited dining diversity. King's Table does Basotho traditional food in restaurant form—papa, stewed meats, moroho, chakalaka (spicy vegetable relish). No Nice serves Portuguese-influenced fare (reflecting Mozambican immigrants). Most eating happens in homes or small eateries serving papa with chicken, stews, or vegetables. The restaurant scene hasn't developed like neighboring South Africa's—Lesotho's population is under 2.5 million, tourism minimal, and most people eat at home.

Street food leans practical: grilled meats (braaivleis in South African parlance), vetkoek (fried dough filled with mince meat or jam), fried chicken, chips (fries). Vendors cluster near taxi ranks, markets, schools. Prices remain low by regional standards; portions prioritize fullness over presentation.

Agricultural products reflect altitude limitations. Maize, sorghum, wheat grow in valleys. Stone fruits—peaches, apricots, plums—from highland orchards are exceptional quality, though production is small-scale. Potatoes, beans, peas in cooler areas. Asparagus growing has expanded as export crop. Most agriculture is subsistence or small-scale commercial; Lesotho imports significant food from South Africa.

The South African influence is unavoidable and complex. Many Basotho work in South Africa's mines and cities, returning with South African food preferences—bunny chow, boerewors, braai culture. Supermarkets stock South African products. The border is porous for goods and influence. This creates tension between maintaining distinct Basotho food identity and adopting neighboring influences.

Traditional ceremonies and gatherings involve specific foods. Weddings feature whole roasted sheep or goats, joala flowing freely, traditional dishes prepared by community. Initiation ceremonies (both male and female) include specific ritual foods. Funerals mean communal cooking and feeding mourners for days—papa, stews, bread, endless tea.

Tea culture, introduced during British colonial period, remains strong. Black tea, milky, sweet, served constantly. Tea with bread for breakfast, tea breaks throughout the day, tea for visitors—the ritual parallels British tradition adapted to Basotho context.

What's interesting is Lesotho's food sovereignty challenges. Despite being agricultural, food insecurity affects significant populations. Climate variability, land pressure, loss of agricultural knowledge as people urbanize, dependence on South African imports—these create vulnerabilities. Meanwhile, traditional foods and preparation methods risk being lost as younger generations move to cities or abroad for work.

There's no Basotho fine dining renaissance, no fusion cuisine experiments, no global food trends penetrating significantly. But there's also a straightforwardness about Lesotho's food culture—it feeds people, maintains tradition, creates community. The mama selling papa and moroho from a shack isn't performing tradition for tourists; she's cooking what Basotho have cooked for generations because it works.

The mountain environment shapes everything: what grows, what's preserved for winter, how energy-rich foods combat cold. The pastoral lifestyle—herding sheep and goats through highlands—demands portable, sustaining food. The communal culture means food is shared, meals are social, hunger is addressed collectively when possible.

Lesotho's cuisine won't trend on social media or attract food tourists. But it's real, rooted, and represents food culture that hasn't been diluted by globalization or tourism pressures. It's mountain survival cooking maintained with cultural pride—simple ingredients, essential techniques, and the understanding that food is both sustenance and identity. For travelers, eating in Lesotho means accepting hospitality, trying joala, understanding that papa isn't boring—it's the foundation upon which Basotho life is built.`
  },
  {
    name: 'Liberia',
    lat: 6.4281,
    lng: -9.4295,
    summary: `Liberia's cuisine reflects its unique history—founded by freed American slaves in 1847, creating West African foodways filtered through African-American influences, then shaped by civil wars, Ebola, and persistent poverty. This is coastal West African cooking with distinctive twists: cassava leaf stew rivals anywhere in the region, while potato greens and collard greens show American Southern connections, all united by rice-centered meal structure and palm oil's pervasive presence.

Rice is Liberia's staple—not just food but identity. Liberians eat rice at virtually every meal, consuming it in quantities that define "full." A meal without rice isn't really a meal. The rice gets accompanied by soups and stews—but make no mistake, rice is the main event, everything else is sauce to make rice interesting. Liberia produces rice domestically, especially in the interior, though imports supplement production. The cultural attachment to rice runs deeper than nutrition—it's tradition, comfort, necessity.

Cassava leaf is Liberia's national dish and worth seeking out. Cassava leaves (toxic when raw) get pounded, boiled for hours until the bitterness mellows and texture becomes silky. Cooked with meat (chicken, fish, beef, sometimes bush meat), palm oil, onions, and chili peppers, served over rice. The final product is dark green, richly flavored, slightly bitter, intensely satisfying. Preparation is labor-intensive—pounding leaves, long cooking times—but the result justifies effort. Each family guards their variation; debates over proper preparation rival any food culture globally.

Palava sauce (or palaver sauce) comes next in national significance. Made with potato greens, jute leaves, or other greens, cooked with fish, meat, palm oil, and spices. The name possibly derives from "palaver" (discussion)—this is the stew served during long meetings or negotiations. It's sustaining, comforting, adaptable to whatever protein and greens are available. The American influence shows in techniques borrowed from African-American cooking—collard greens prepared similarly to Southern U.S. versions but with West African flavor profiles.

Pepper soup (not really soup—it's stew consistency) features prominently. Fish pepper soup, goat pepper soup, chicken pepper soup—the protein varies, but the preparation involves intense spicing with scotch bonnet peppers, ginger, garlic, creating a broth that's simultaneously medicinal and delicious. Liberians swear by pepper soup's curative properties, especially for hangovers and colds.

Dumboy (or dumboi) is pounded cassava—whole cassava boiled until soft, then pounded in a mortar until it becomes stretchy, glutinous mass. Served with soups or stews, torn by hand, used for scooping. It's labor-intensive (the pounding), heavy (the cassava density), and essential (the cultural significance). Similar to fufu found elsewhere in West Africa but Liberia's version has distinct texture and preparation nuances.

Monrovia's food scene is rebuilding post-Ebola and post-civil war. Restaurants like Mamba Point Hotel serve Liberian dishes with some refinement. Sajj House does Lebanese (significant Lebanese merchant community in Liberia), while Royal Grand Hotel offers international menu. But the best Liberian food comes from street vendors, market stalls, and home cooking. West Point market, Duala market—these are where you'll find cassava leaf, palava sauce, and pepper soup cooked by vendors who've perfected their recipes through necessity.

Street food includes fried plantains, roasted corn, grilled fish (barracuda, snapper from Atlantic waters), and "business" (tough cuts of meat grilled and sold cheaply—workers' fuel). Kala (fried dough) appears morning and evening. Palm wine, tapped fresh from palms, ferments naturally, sold by vendors throughout rural areas and city outskirts.

Palm oil is fundamental—it's the cooking fat, the flavor base, the color (bright orange) that defines Liberian cooking. Used liberally, sometimes alarmingly so to outsiders, but this is West African palm oil culture where the oil isn't subtle accent but foundational ingredient. The palm groves along the coast and interior produce oil used domestically and commercially.

Agricultural products reflect tropical climate: cassava (both leaves and tubers), rice, cocoa (export crop), coffee (historically significant, now rebuilding), rubber (major export but not food), tropical fruits (pineapple, mango, papaya, coconut), and vegetables. Food security remains challenged—civil wars destroyed agricultural infrastructure, Ebola disrupted systems, and poverty limits access. Many Liberians struggle to afford even basic staples despite the country's agricultural potential.

Traditional foods include fufu (pounded cassava, plantain, or yam), jollof rice (Liberian version is less celebrated than Ghanaian or Nigerian but equally defended), fried fish with hot pepper sauce, and various cassava-based dishes. The Kru, Bassa, Vai, and other ethnic groups maintain distinct culinary traditions, but urban Monrovia has created a blended Liberian cuisine that draws from multiple sources.

Drinks include palm wine, ginger beer (non-alcoholic, sweet, spicy), bissap (hibiscus tea), and increasingly, Club Beer (Liberian brewery). "Country chop" refers to traditional Liberian food as opposed to "foreign food"—the terminology itself revealing ongoing negotiations between indigenous, African-American, and international influences.

What's remarkable is resilience. Through civil wars that killed 250,000 people, Ebola that devastated communities, persistent poverty, Liberians maintained their food culture. The cassava leaf recipes survived, the rice-centered meals continued, the palm oil cooking persisted. Food became stability when everything else collapsed.

Liberia's cuisine won't attract food tourists or trend on social media. The infrastructure doesn't exist, safety concerns persist, and poverty makes dining tourism feel obscene. But the cooking is real, rooted, and represents survival through unimaginable hardship. The vendors selling cassava leaf stew near the market aren't performing authenticity—they're feeding their communities the same way their mothers did, maintaining tradition because it's theirs.

For the few visitors who come, eating Liberian means accepting invitations into homes, trying cassava leaf despite unusual appearance, understanding that rice isn't side dish but centerpiece, and respecting a food culture that's survived colonization, civil war, disease, and poverty. It's West African cooking with American echoes, shaped by trauma and maintained through determination. Simple, sustaining, and stubbornly persistent.`
  },
  {
    name: 'Libya',
    lat: 26.3351,
    lng: 17.2283,
    summary: `Libya's cuisine is North African food at the crossroads—Italian colonial influences meeting Bedouin traditions, coastal Mediterranean flavors contrasting with Saharan desert cooking, all complicated by decades of Gaddafi's isolation and current political chaos. This is food shaped by harsh landscapes, tribal traditions, and the reality that Libya's wealth came from oil, not agriculture, creating a food culture more focused on hospitality and tradition than innovation.

Bazin is Libya's national dish and cultural statement. A dome of unleavened barley or wheat dough, cooked and pounded until smooth, served with a depression in the center filled with tomato-based stew (maraq) with lamb, potatoes, and spices. Eaten communal-style, right hand only, tearing chunks and dipping into the central sauce. The technique of making bazin—the pounding, the shaping, achieving the right consistency—requires skill passed through generations. Served at celebrations, important meals, and whenever Libyans want to assert their distinct identity. It's simple food elevated to symbolic status.

Couscous appears throughout Libya, reflecting Berber heritage and Maghrebi commonalities. Libyan versions lean toward fish couscous along the coast (particularly Tripoli), lamb or chicken couscous inland. The grain is steamed multiple times, achieving fluffy texture, served with stew and vegetables. Friday couscous is tradition in many families—the week's main gathering meal.

Italian influence is undeniable and complex. Libya was Italian colony 1911-1943, and the food legacy persists: pasta dishes (especially with seafood), pizza, gelato, coffee culture. Sharba Libya (Libyan soup) shows this fusion—pasta in meat broth with tomatoes, chickpeas, spices creating something distinctly Libyan despite Italian elements. Many older Libyans speak Italian; restaurants serve Italian food alongside traditional dishes; espresso rivals tea for daily consumption.

Asida is celebratory dish—wheat flour cooked into thick paste, served with honey, ghee, and date syrup. Traditionally eaten for births, weddings, and Ramadan. The preparation involves constant stirring until the mixture achieves smooth, dense consistency. Served in communal bowl, eaten with fingers, each person taking portions from their section.

Libyan markets reveal the country's agricultural limits and import dependence. Tripoli's souks offer dates from Fezzan oases (Libya's best agricultural product), olives and olive oil (coastal production), fresh fish from Mediterranean waters, imported vegetables and fruits, spices, nuts. The desert climate limits agriculture severely—Libya imports over 75% of food despite oil wealth. The oases produce exceptional dates, particularly from Ghadames and Sabha, but scale is small.

Street food in Tripoli and Benghazi centers on shawarma, grilled meats, and sandwiches. Libyan shawarma tends heavily spiced compared to Levantine versions. Hareesa (not the Tunisian sauce but a meat and wheat porridge) gets sold from stalls, especially during Ramadan. Mbakbaka (pasta with meat and chickpeas in spicy tomato sauce) appears at simple eateries—this is Italian influence fully Libyanized.

The fine dining scene barely exists. Years of sanctions under Gaddafi, then civil war and ongoing instability, prevented restaurant culture from developing. Hotels in Tripoli offer international menus; traditional restaurants serve Libyan dishes without refinement or innovation. The concept of chef-driven cuisine or culinary experimentation remains foreign—food is tradition, sustenance, hospitality, not performance or art.

Tea culture defines Libyan social life. Green tea with mint, served extremely sweet, in small glasses, prepared with ritual precision. The tea service involves multiple pours, specific techniques, and serves as hospitality's foundation. Refusing tea is insult; accepting means conversation, relationship, trust. This is Maghrebi tea culture extended to ultimate expression—Libyans can stretch tea service across hours.

Ramadan transforms eating patterns. Asida, shorba (soups), dates, and special sweets appear. The iftar meal breaking fast involves specific dishes—bazin, couscous, lamb, pastries. The social aspect intensifies—families gather, neighbors share, mosques distribute food to those in need.

Bedouin influences persist, especially inland. Whole roasted lamb or goat for celebrations, cooked underground or over fires. Dried meat for preservation. Dairy products from desert herding—fresh milk, laban (fermented milk), cheese. The nomadic traditions of hospitality—feeding travelers, sharing food generously, never letting guests leave hungry—shape Libyan culture profoundly. The mechanized oil economy might have sedentarized most Libyans, but the Bedouin values around food and hospitality remain.

Regional variations exist despite political divisions. Tripolitania (west) shows more Italian and Tunisian influence. Cyrenaica (east) leans toward Egyptian connections. Fezzan (south) maintains desert traditions. But civil war and tribal divisions mean talking about unified Libyan cuisine becomes politically complicated.

The current situation complicates everything. Ongoing conflict, multiple governments, militia control of regions, economic collapse—these make discussing Libyan food culture abstractly feel disconnected from reality where many struggle to afford basics despite sitting on Africa's largest oil reserves.

What persists is hospitality. Despite chaos, violence, scarcity, Libyans maintain the tradition of welcoming guests with food. The tea service continues, the bazin gets prepared for celebrations, the dates from desert oases still get served with pride. Food becomes one area where tradition survives political collapse.

Libya's cuisine won't attract food tourism—the security situation prevents it, the infrastructure doesn't exist, and Libyans have more urgent concerns than promoting their food globally. But for those who've eaten in Libyan homes, the generosity is overwhelming. The insistence on feeding guests abundantly, the pride in traditional dishes, the way meals create temporary community despite external chaos—this reveals food's power beyond trend or taste.

The tragedy is Libya's potential—Mediterranean coastline, oasis agriculture, oil wealth that could fund food infrastructure, strategic position between Maghreb and Mashriq. Instead, the country fragments while its food culture persists through individual determination rather than governmental support. The grandmother making bazin, the market vendor selling dates, the family preparing iftar—they maintain Libyan cuisine despite, not because of, the current situation. That's resilience, even when it shouldn't have to be.`
  },
  {
    name: 'Lithuania',
    lat: 55.1694,
    lng: 23.8813,
    summary: `Lithuania's cuisine is Baltic soul food—where potatoes achieve spiritual significance, where dark rye bread borders on sacred, and where forest gathering traditions survive alongside EU modernization. This is cooking shaped by harsh continental winters, Polish-Russian historical influences, and fierce cultural pride that treats food preservation and preparation as acts of national identity, especially after Soviet occupation tried to erase distinction.

Cepelinai (zeppelins—named for their shape) is Lithuania's national dish and a commitment. Grated potato dough formed around meat filling (usually pork), boiled until cooked through, served with sour cream and bacon bits. These are heavy, dense, massive—one zeppelin is a meal, two is a challenge. The technique requires skill: the potato must be drained properly, the dough sealed completely, the cooking time precise. Families guard their cepelinai recipes; regions debate proper fillings (meat, curd cheese, mushrooms); and Lithuanians abroad crave these aggressively starchy comfort bombs. It's not sophisticated—it's winter survival food elevated to national symbol.

Šaltibarščiai (cold beet soup) is summer's answer to winter's cepelinai. Bright pink, served chilled, made with beets, kefir, cucumbers, dill, hard-boiled eggs, sometimes potatoes. Refreshing, tangy, visually striking. Every Lithuanian grandmother makes it; every version differs slightly (more beets or more kefir, sour cream instead of kefir, proportions debated). Served with hot potatoes on the side—the temperature contrast is essential. This is peasant food that's become gourmet through technique and tradition.

Potatoes dominate Lithuanian cuisine beyond cepelinai. Bulviniai blynai (potato pancakes), kugelis (potato pudding baked with eggs, bacon, onions until crispy outside and creamy inside), žemaičių blynai (potato pancakes stuffed with meat). The potato arrived in Lithuania in the 17th century and became the foundation upon which survival depended. The varieties, preparation methods, and cultural significance rival Idaho's potato culture—except Lithuanians actually eat their potatoes in diverse, delicious ways.

Rye bread (ruginė duona) is taken seriously. Dark, dense, slightly sweet, made with sourdough starters maintained for generations. Traditional preparation involved outdoor ovens, long fermentation, specific rye varieties. Modern Lithuanians still consume rye bread daily—toasted with butter for breakfast, accompanying soup for lunch, the base for dark bread dessert (tinginys—chocolate-cookie treat). Bread waste is practically sinful—stale bread becomes kvass, breadcrumbs, or snacks. The cultural reverence parallels religious devotion.

Vilnius's food scene has transformed since EU accession. Lokys (The Bear) serves traditional Lithuanian in a medieval cellar—their game dishes, cepelinai, and forest mushroom preparations attract tourists and locals. Sweet Root achieved international recognition for Nordic-Baltic fine dining—foraged ingredients, seasonal tasting menus, Lithuanian flavors through contemporary technique. Fourteen offers similar ambition. No Michelin stars yet (the guide hasn't covered Vilnius), but the fine dining level rivals Copenhagen or Stockholm at fraction of cost.

Markets reveal Lithuania's agricultural richness and seasonal extremes. Halės turgus (Vilnius market hall) showcases smoked meats (skilandis—smoked meat sausage, a protected Lithuanian product), fresh and smoked fish, wild mushrooms (fall bounty: boletes, chanterelles, winter mushrooms), berries (summer explosion: strawberries, raspberries, blueberries, lingonberries, cranberries), honey, dairy products (fresh curd cheese, sour cream, kefir), and seasonal vegetables. Winter means root vegetables, pickles, preserved foods; summer brings abundance that gets preserved for winter.

Smoked and preserved foods reflect necessity. Skilandis (smoked meat in pig stomach casing), smoked fish (especially eel from Curonian Lagoon), pickled mushrooms, sauerkraut, pickled cucumbers, preserved berries—these weren't trends but survival through months when fresh food disappeared. Modern Lithuanians maintain these traditions because they taste good and connect to heritage.

Forest gathering is national obsession. Mushroom picking in fall brings entire families into forests, with knowledge of species, locations, and preparation passed generationally. Berry picking in summer supplements store-bought produce and provides winter preserves. Wild garlic, nettles, sorrel in spring. Lithuanians maintain intimate knowledge of their forests' edible offerings—this is foraging as culture, not cuisine trend.

Beverages start with beer (alus). Lithuanian beer culture is strong—Švyturys, Utenos, Kalnapilis produce solid lagers, while craft breweries increasingly experiment. Mead (midus) production continues—honey wine in various styles, some historical recipes recreated, others modern interpretations. Starka (grain vodka aged in oak with apple or pear leaves) is traditional spirit. Krupnik (honey liqueur with spices) warms winters. And kvass (fermented rye bread drink) quenches summer thirst.

The Russian and Polish influences are complicated politically but undeniable culinarily. Pelmeni (dumplings), borscht, various Russian salads appear on menus alongside Lithuanian dishes—Soviet occupation left food legacies. Polish connections through historical union (Polish-Lithuanian Commonwealth) show in certain dishes and cooking techniques. Lithuanians navigate these influences, claiming some as their own, distinguishing others as foreign impositions.

Šakotis (tree cake) is celebration centerpiece—a spit cake cooked by rotating batter-covered spit over fire, creating a tree-like shape with dripping layers. It requires special equipment, skill, patience, and appears at weddings and major celebrations. The technique is shared with Polish (sękacz) and German (baumkuchen) traditions but fiercely defended as Lithuanian by Lithuanians.

What defines Lithuanian food is seasonal extremes and preservation mastery meeting fierce cultural pride. The cooking isn't refined in French sense—it's hearty, filling, designed for cold climates and physical labor. But the techniques are sophisticated: proper cepelinai is difficult, good rye bread requires skill, and knowing which mushrooms to pick requires expertise.

Modern Lithuania balances EU integration, Nordic influence, and tradition preservation. Young Lithuanians embrace specialty coffee, craft beer, farm-to-table dining, and Instagram-worthy presentations—while still eating grandmother's cepelinai, drinking kvass, and picking mushrooms in forests. The tension creates a food scene that's exciting: traditional dishes getting refined, foraged ingredients celebrated, local products protected, and pride in Lithuanian food culture at levels unseen during Soviet suppression.

Lithuania's cuisine rewards those who dig beyond Vilnius's Old Town tourist restaurants. The countryside restaurants, the market stalls, the grandmother's kitchen—these reveal food culture that's honest, seasonal, rooted in landscape, and maintained with determination that borders on defiance. It's Baltic cooking that refuses to apologize for being heavy, hearty, and proudly Lithuanian.`
  }
]

async function main() {
  console.log('🍽️  Starting FOOD & CUISINE writeup generation for Batch 7...')
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
  console.log('✨ FOOD BATCH 7 COMPLETE!')
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
