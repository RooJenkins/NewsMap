import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// All 114 countries with coordinates
const ALL_COUNTRIES = [
  // Americas (19)
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
  { name: 'United States', lat: 39.8283, lng: -98.5795 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },

  // Europe (36)
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.473 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Romania', lat: 45.9432, lng: 24.9668 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Slovakia', lat: 48.6690, lng: 19.6990 },
  { name: 'Slovenia', lat: 46.1512, lng: 14.9955 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },

  // Asia-Pacific (43)
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Oman', lat: 21.5126, lng: 55.9233 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'Syria', lat: 34.8021, lng: 38.9968 },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478 },
  { name: 'Uzbekistan', lat: 41.3775, lng: 64.5853 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164 },

  // Africa (16)
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 },
]

// Food writeup content for each country (Bourdain voice)
const FOOD_WRITEUPS: Record<string, { summary: string; issues: string[] }> = {
  'Argentina': {
    summary: `# Argentina - Food & Cuisine

Look, I've been to Buenos Aires more times than I can count on both hands, and every damn time I land at Ezeiza, the first thing I need—and I mean NEED—is a properly charred bife de chorizo at some neighborhood parrilla where the smoke hangs thick and the wine flows cheap. This is a country that understands that meat isn't just food, it's religion, politics, and national identity all rolled into one blood-red package. But here's what the steak-house tourists miss: Argentina's food story in 2025 is way more complicated than beef and Malbec.

The country's locked in this bizarre culinary civil war between the old guard—your traditional asadores who've been tending fires for forty years—and a new generation of chefs who actually give a shit about vegetables. Yeah, you heard that right. In Buenos Aires, you've got places now serving locally foraged greens, Patagonian lamb with indigenous ingredients, even (gasp) creative vegetable-forward menus. The economic chaos means importing costs are insane, so smart cooks are finally looking around at what's actually growing in their own country. Revolutionary stuff, apparently.

## The Big Issue 1: The Beef Crisis Nobody Wants to Talk About

Here's the dirty secret: Argentina's running out of good beef. Not beef, period—there's still plenty of industrial feedlot garbage pumped full of hormones. I'm talking about the grass-fed, free-range, properly aged beef that made Argentina famous. Climate change has hammered the pampas. Droughts, floods, the whole catastrophic playlist. Ranchers are selling off herds they can't afford to feed. The 2025 beef export numbers are through the roof because the government needs dollars desperately, which means less quality meat staying in-country.

What's left? You've got your high-end parrillas charging $80 USD for a steak that would've cost $20 five years ago. You've got your neighborhood joints cutting corners, serving younger beef, shorter aging times. The working-class family that used to grill out every Sunday? They're eating chicken now, or—horror of horrors—making pasta. The social fabric is tearing along the grain lines of a ribeye.

And the asadores, these masters of fire and meat, they're furious. They blame the government, they blame climate change, they blame vegetarians (seriously). But the truth is simpler and sadder: the golden age of cheap, abundant, world-class Argentine beef might be over. That's not just culinary news. That's an identity crisis.

## The Big Issue 2: The Rise of the Empanada Economy

While everyone's crying about steak prices, the real story is happening at street level. Empanadas have become the new economic indicator. Forget the dollar exchange rate—you want to know how Argentina's doing? Check the price and quality of empanadas in working-class neighborhoods. These handheld beauties—beef, chicken, ham and cheese, humita—they're what people actually eat when money's tight.

And business is booming. Every corner in every barrio has someone making them. Home cooks selling out of their apartments, food trucks, fancy restaurants doing "artisanal" versions with imported cheeses. The empanada economy is entirely cash-based, mostly unreported, and absolutely essential to how millions of Argentines survive. It's the parallel food system that keeps running when the official economy goes to hell.

The fillings tell the story. Beef empanadas are getting smaller, the meat stretched with more onion and spices. Vegetable versions—spinach, chard, squash—are suddenly everywhere, not because of some trendy plant-based movement, but because vegetables are cheaper than meat. It's economic adaptation disguised as culinary tradition. Bourdain's law: follow the empanadas, understand the country.

## The Big Issue 3: Wine Country's Climate Reckoning

Mendoza's wine industry, that beautiful landscape of malbec vines against Andean peaks, is in crisis mode. The snowpack that feeds the irrigation system is half what it used to be. Harvests are coming earlier, alcohol levels are creeping up, acidity is dropping. Winemakers are planting higher up the mountains, experimenting with drought-resistant varieties, installing elaborate (expensive) irrigation systems.

But here's what's fascinating: this crisis is producing some of the most interesting wine Argentina's made in years. Necessity, mother of invention, all that. Winemakers are rediscovering old techniques, blending different regions, getting creative because the old playbook doesn't work anymore. The bulk wine business—the cheap stuff that made Argentina a global player—is struggling. But the ambitious winemakers, the ones willing to adapt and experiment, they're making wines with actual character and a sense of place.

The culinary angle? Buenos Aires restaurants are finally taking wine seriously. Not just "here's your Malbec with your steak" but actual thoughtful pairings, natural wines, smaller producers. It's only taken, what, twenty years for Argentina's restaurants to catch up with its wine quality? The economic disaster has forced everyone to look inward, to value what they have instead of worshiping imported labels.

## The International Angle

Argentina's food scene has always been weirdly isolated—Italian immigrants from a hundred years ago, Spanish colonial influence, indigenous ingredients mostly ignored. But the economic crisis is forcing Buenos Aires to engage with the world differently. With traveling abroad prohibitively expensive, Argentine chefs are staying home, digging deeper into regional ingredients and techniques. Patagonian cuisine, Andean flavors, subtropical northeastern traditions—suddenly BA chefs care about what's happening in Salta or Jujuy.

And the Argentine diaspora, spreading across Latin America and Europe, is carrying food culture with them. You've got Argentine parrillas in Madrid, Santiago, São Paulo serving as cultural embassies. Mate culture is spreading globally—that bitter tea is Argentina's most successful food export, though nobody wants to admit it. The country that always looked to Europe for culinary validation is finally, grudgingly, accepting that its own food traditions might actually be worth preserving and evolving.

## The Bottom Line

Argentina's food scene in 2025 is defined by scarcity, creativity, and stubborn pride. The beef industry is facing existential challenges. The empanada economy is how people survive. Wine country is adapting to climate chaos. But underneath the crisis, there's something interesting happening: a generation of cooks and eaters is being forced to look beyond the same old steak-and-Malbec playbook.

Will Argentina figure it out? Hell, I don't know. But I'll tell you this: the next time I'm in Buenos Aires, I'm going straight to some neighborhood parrilla, ordering whatever they're grilling that day, and washing it down with cheap red wine. Because even in crisis—especially in crisis—this country knows how to eat. That's not changing anytime soon.`,
    issues: [
      'The Beef Crisis Nobody Wants to Talk About',
      'The Rise of the Empanada Economy',
      'Wine Country\'s Climate Reckoning'
    ]
  },
  'Bolivia': {
    summary: `# Bolivia - Food & Cuisine

Let me tell you about Bolivia's food, because most of you probably don't know a damn thing about it beyond "isn't that where quinoa comes from?" Yeah, it is. And that's both Bolivia's blessing and curse—they've been growing this ancient grain for thousands of years, and then suddenly in 2010 every yoga instructor in Los Angeles decided it was a superfood, prices exploded, and now Bolivians can't afford their own traditional staple. That's globalization, baby. But Bolivia's food story runs way deeper than quinoa hipster irony.

This is high-altitude cooking. La Paz sits at 12,000 feet—thin air, brutal sun, potatoes that have evolved over millennia to grow in conditions that would kill anything else. The food here is indigenous at its core: Aymara and Quechua traditions that predate colonization. It's heavy, filling, designed for people working physical jobs in cold mountain climates. Chuño (freeze-dried potatoes), salteñas (breakfast empanadas that explode with juice if you bite them wrong), anticuchos (beef heart skewers), api morado (purple corn drink)—this is working-class food that the rest of the world is just now discovering.

## The Big Issue 1: Quinoa's Double-Edged Sword

So yeah, quinoa. The global superfood boom made Bolivian farmers rich—by Bolivian standards—for about five minutes. Quinoa prices peaked around 2013, and suddenly peasant farmers in the Altiplano were buying trucks and building concrete houses. Then came the inevitable crash as Peru ramped up production, as the U.S. started growing it, as the market got flooded. By 2025, quinoa prices have stabilized at levels that are profitable but not life-changing.

The more interesting story is what happened to Bolivian food culture. When quinoa got expensive, locals stopped eating it. They switched to rice and pasta, cheaper imported carbs. An entire generation of Bolivian kids grew up not eating quinoa regularly—their ancestral grain. Now there's this weird reverse movement: Bolivian chefs trying to "reintroduce" quinoa to Bolivian eaters, making it trendy in La Paz restaurants, which is just... the food system is so broken, man.

The environmental damage is real too. Quinoa monoculture in the south exhausted soil that took centuries to build. Llamas—which traditionally provided manure for fields—got sidelined in the cash crop rush. Now farmers are realizing they destroyed the sustainable agricultural system that kept their ancestors alive for generations, all for a decade-long boom. Food is politics. Quinoa proved it.

## The Big Issue 2: The Coca Leaf Culinary Revolution

Coca leaf—yes, that coca leaf, the one cocaine comes from—is sacred in Bolivia. It's legal, it's traditional, it's chewed by workers and grandmothers and taxi drivers for altitude and energy. And in 2025, Bolivian chefs are finally saying, "What if we actually cooked with this?"

There's a whole coca leaf culinary movement happening. Coca-infused liqueurs, coca tea pairings with food, dishes using coca flour. It's still niche, still controversial, but it's happening. The government under President Arce is cautiously supportive—coca leaf is culturally important, and distinguishing traditional use from drug production is a huge political priority. Food is their PR strategy.

The international angle is tricky. Some Bolivian chefs want to take coca cuisine global, but the drug war stigma is real. Still, there's something powerful about reclaiming this plant's culinary and cultural identity. In Bolivia, coca isn't a drug—it's medicine, culture, tradition. Using it in cooking is an act of resistance against decades of U.S.-led demonization. Every coca-infused dessert is a middle finger to the DEA. I respect that.

## The Big Issue 3: Street Food Wars and Indigenous Pride

La Paz's street food scene is thriving, chaotic, and increasingly political. The cholitas—indigenous women in traditional pollera skirts and bowler hats—run the game. They're the ones grilling anticuchos on street corners, serving steaming bowls of fricasé (pork stew), making salteñas before dawn. This is the economic engine of Bolivia's food culture, and it's entirely female-dominated.

But there's tension. The municipal government keeps trying to "formalize" and "regulate" street food—fancy talk for pushing vendors into sterile market halls where foot traffic disappears. Vendors resist because they know what tourists and locals know: the best food in Bolivia is cooked on streets, not in approved locations. The fight over where and how food is sold is really a fight over indigenous economic autonomy versus modernization and outside control.

The younger generation of Bolivian chefs—many trained abroad—are trying to walk a tightrope. They want to elevate Bolivian cuisine, get international recognition, maybe a goddamn Michelin inspector to actually visit (good luck with that at 12,000 feet). But they also need to respect and learn from the cholitas who've been cooking this food for generations. When it works, it's beautiful: traditional recipes, refined techniques, indigenous ingredients celebrated. When it fails, it's cultural appropriation with white tablecloths. The line is thin.

## The International Angle

Bolivia is the least-known food culture in South America, which is both frustrating and kind of great for them. While Peru got all the hype—Gastón Acurio, Central, the whole "Lima is the new culinary capital" narrative—Bolivia stayed under the radar. That's changing slowly. Copenhagen's NOMA did a pop-up in Tulum, Mexico, serving indigenous Mesoamerican food, and suddenly global chefs started paying attention to pre-Columbian cuisines. Bolivia's sitting on thousands of years of high-altitude agricultural knowledge. People are starting to notice.

The Bolivian diaspora in Argentina, Brazil, Spain, the U.S.—they're homesick and hungry. Bolivian restaurants are popping up in immigrant neighborhoods, serving salteñas and pique macho to nostalgic ex-pats. It's not glamorous or trendy, but it's real. And slowly, non-Bolivians are discovering that this food—hearty, flavorful, unfamiliar—is actually incredible. Give it ten years. Bolivia's food moment is coming.

## The Bottom Line

Bolivia's food scene in 2025 is raw, indigenous, and proud. The quinoa boom and bust taught hard lessons. Coca leaf is being reclaimed culinarily. Street food vendors, mostly indigenous women, are the backbone of the food economy and aren't backing down from modernization pressures. The rest of the world is barely paying attention, but that's starting to shift.

I'll be honest: Bolivia is hard travel. The altitude destroys you. The poverty is grinding. But the food? Man, the food is real. No pretension, no fusion confusion, just centuries-old recipes cooked by people who learned from their grandmothers. Go to La Paz. Eat a salteña that burns your mouth. Drink coca tea. Have anticuchos at midnight from a street cart. You'll understand.`,
    issues: [
      'Quinoa\'s Double-Edged Sword',
      'The Coca Leaf Culinary Revolution',
      'Street Food Wars and Indigenous Pride'
    ]
  },

  'Brazil': {
    summary: `# Brazil - Food & Cuisine

Brazil's food scene is like Brazil itself: massive, diverse, chaotic, infuriating, and absolutely impossible to pin down. You've got the Amazon rainforest in the north with ingredients that sound like they're from another planet. You've got São Paulo, this insane megalopolis with the best Japanese food outside Japan (seriously). You've got Bahia with Afro-Brazilian cuisine that'll rewire your understanding of flavor. You've got the south with European-influenced churrasco that Argentines pretend doesn't exist. And you've got 200 million people navigating economic inequality that makes food access a daily political battle.

The thing about Brazilian food that drives me crazy—in the best way—is how unapologetically itself it is. Feijoada, the national dish, is literally enslaved Africans taking the scraps their masters wouldn't eat and creating something transcendent. That's Brazil's food story in a nutshell: oppression, creativity, fusion born from necessity, and flavors that don't apologize for being big, loud, and in your face. In 2025, Brazilian cuisine is finally getting global recognition, while simultaneously facing existential threats from deforestation, inequality, and cultural homogenization.

## The Big Issue 1: The Amazon's Vanishing Pantry

Let's talk about the elephant—or rather, the burning rainforest—in the room. The Amazon is both Brazil's greatest culinary asset and its most endangered. We're talking about ingredients most of the world has never heard of: tucupi (fermented manioc juice), jambu (a leaf that numbs your mouth), açaí before it became a Whole Foods smoothie bowl, cupuaçu, taperebá, pupunha—I could go on for hours.

Indigenous communities have been cooking with this stuff for thousands of years, creating complex flavor profiles that make European cuisine look one-dimensional. But deforestation is destroying the Amazon at terrifying speed. Soy farms, cattle ranches, illegal logging—they're erasing ingredients before science even fully understands them. It's not just environmental catastrophe; it's culinary genocide.

There's a movement—small but growing—of Brazilian chefs trying to spotlight Amazonian ingredients. Alex Atala was doing this fifteen years ago, and now others are following. But here's the brutal truth: you can't save the rainforest with restaurants. The economic incentives are all wrong. Clearing land for cattle is more profitable than sustainable harvesting of forest products. Until that changes, the Amazon's pantry keeps shrinking. Every year, Brazilians lose ingredients their grandparents knew. It's heartbreaking.

## The Big Issue 2: Feijoada as Economic Indicator

Feijoada—black beans slow-cooked with pork parts, served with rice, collard greens, orange slices, and farofa (toasted manioc flour)—is Brazil's soul food. Traditionally, it's a Saturday lunch thing, a communal meal where families and friends gather. But in 2025, feijoada has become an economic indicator. Can working-class families afford the pork? Are they making it with cheaper cuts, or worse, skipping meat entirely?

Brazil's economic situation is brutal. Inflation is eating the poor alive. The cost of basic ingredients—beans, rice, meat—has skyrocketed. Feijoada used to be poor people's food; now even that's becoming a luxury. When a dish made from discarded pig parts becomes too expensive for the descendants of the people who invented it, you know the system is broken.

Meanwhile, upscale restaurants in São Paulo and Rio serve "deconstructed feijoada" for 200 reais. It's everything wrong with modern food culture in one plate: traditional working-class food gentrified beyond recognition and sold back to rich people as innovation. Bourdain's rule: if the people who created the dish can't afford it anymore, something's gone very wrong.

## The Big Issue 3: The Japanese-Brazilian Fusion Identity Crisis

Brazil has the largest Japanese population outside Japan—over 1.5 million people. São Paulo's Liberdade neighborhood is the heart of Japanese-Brazilian culture, and the food there is absolutely wild: sushi with tropical fruits, pastel (fried pastry) with Japanese fillings, yakisoba at churrascarias. It's fusion, but not in the forced, pretentious way. It's what happens when cultures actually mix over generations.

The identity crisis? Younger Japanese-Brazilians are torn between tradition and innovation. Do they make traditional sushi exactly as their grandparents did, or do they incorporate Brazilian ingredients and techniques? Some purists call it dilution; others call it evolution. Me? I call it delicious and complicated, which is how the best food usually is.

This matters globally because Japanese-Brazilian chefs are taking this hybrid cuisine worldwide. You've got Brazilian-Japanese restaurants opening in New York, London, Tokyo. It's a completely unique culinary language—Brazil's boldness and Japan's precision. But there's tension: Japanese-Brazilians face discrimination in both Brazil (for being Japanese) and Japan (for being Brazilian). Food becomes a way to claim space, to say "we exist, we matter, and our food is legitimate." Food is identity. Always has been.

## The International Angle

For years, Brazil was culinary flyover country. People knew churrasco, maybe caipirinha, and that was it. But the Alex Atala effect—he put São Paulo on the global food map—changed everything. Now Brazilian chefs are competing internationally, Brazilian ingredients are showing up on menus from Copenhagen to Singapore, and the world is slowly realizing that Brazilian cuisine is as diverse and complex as any in the world.

The flip side? Cultural appropriation is rampant. Açaí bowls with granola and honey have nothing to do with how it's eaten in the Amazon (it's savory, with fish, you barbarians). Caipirinha gets bastardized at every beach resort worldwide. Brazilian steakhouses abroad serve mediocre meat at premium prices, trading on the churrasco name. It's frustrating for Brazilians who see their food culture reduced to Instagram-worthy clichés.

But there's hope. The Brazilian diaspora—massive and growing—is fiercely proud. They're opening restaurants, teaching classes, refusing to let their food culture be whitewashed or simplified. And slowly, the world is learning: Brazil's food story is about indigenous knowledge, African resilience, European immigration, Japanese fusion, and modern innovation all coexisting messily. That's the real Brazil. That's the real cuisine.

## The Bottom Line

Brazil's food scene in 2025 is at a crossroads. The Amazon's ingredients are vanishing as the rainforest burns. Economic inequality means working-class Brazilians can barely afford the traditional foods they invented. Japanese-Brazilian fusion is redefining what fusion can mean. Global recognition is finally arriving, but so is appropriation. It's complicated, contradictory, and absolutely fascinating.

If you go to Brazil, skip the tourist traps. Eat at a boteco (working-class bar) in Rio. Have acarajé from a Bahian street vendor. Find a proper feijoada served on a Saturday afternoon. Try Amazonian fish you can't pronounce. Drink cachaça that hasn't been prettified for export. Brazil's food culture doesn't need validation from Michelin guides or food blogs. It's been feeding 200 million people with creativity and soul for centuries. That's enough.`,
    issues: [
      'The Amazon\'s Vanishing Pantry',
      'Feijoada as Economic Indicator',
      'The Japanese-Brazilian Fusion Identity Crisis'
    ]
  },

  'Canada': {
    summary: `# Canada - Food & Cuisine

Canada's food scene suffers from a brutal identity crisis, and honestly, I'm here for it. This is a country that apologizes for existing, culinarily speaking. For decades, the national dish was supposedly poutine—french fries, gravy, cheese curds. Delicious? Absolutely. A complete national food identity? Come on. Canada's too big, too diverse, too regionally fragmented to be summed up by drunk food from Quebec. But that apologetic, self-deprecating uncertainty? That's actually where it gets interesting.

Because here's what Canada actually is: indigenous foodways that predate colonization by thousands of years; French influence in Quebec that's distinct from France; British colonialism's bland legacy; massive waves of immigration creating Little Indias, Chinatowns, Little Italys, Korean neighborhoods, Filipino communities; and vast geography that gives you Arctic char in the north, lobster in the Maritimes, salmon in BC, and bison on the prairies. Canada doesn't have one food identity. It has thirty, and they're all arguing. In 2025, that argument is finally producing something worth paying attention to.

## The Big Issue 1: Indigenous Food Sovereignty vs. Hipster Appropriation

Indigenous cuisine in Canada is having a moment, which is great until you realize why it took this long. We're talking about food traditions—bannock, wild game, foraged plants, fish preserved in a dozen different ways—that sustained people in brutal climates for millennia. The knowledge is profound. And it was systematically destroyed by residential schools, forced assimilation, and the wholesale theft of land and resources.

Now you've got chefs like Rich Francis and Joseph Shawana working to revive and celebrate indigenous foodways. It's powerful, necessary work. But you've also got non-indigenous chefs slapping "wild foraged" and "inspired by First Nations" on menus, profiting from indigenous knowledge without giving back to communities. The line between respectful celebration and exploitative appropriation is thin and constantly debated.

The bigger issue is food sovereignty. Many indigenous communities in Canada's north have insane food costs—$28 for a jug of orange juice, $14 for a head of lettuce—because everything's flown in. Traditional food sources (caribou, seal, fish) are threatened by climate change and government regulations. Meanwhile, southern restaurants serve "indigenous-inspired" tasting menus for $200 a head. The inequity is obscene. Food is politics, and in Canada, indigenous food politics cut right to the heart of colonialism's ongoing damage.

## The Big Issue 2: The Montreal Bagel vs. Everything Bagel Turf War

Look, I know this sounds stupid. But the Montreal bagel situation is actually a perfect microcosm of Canada's food identity issues. Montreal bagels are distinct: wood-fired, honey-sweetened, hand-rolled, with that perfect chew. They're categorically different from New York bagels, and Montreal is deeply, irrationally proud of them. St-Viateur and Fairmount, the two legendary bakeries, have been beefing since 1957.

But in 2025, something shifted. The "artisanal" bagel wave hit. Toronto, Vancouver, even Calgary suddenly have bagel shops claiming to improve on the Montreal tradition. New York-style bagels are pushing back. And then there's the everything bagel seasoning fiasco—it's everywhere now, on chips, popcorn, ice cream—and purists are furious because it dilutes what a bagel actually is.

Why does this matter? Because it's about authenticity, tradition, immigration, and who gets to define Canadian food culture. Montreal's bagel tradition came from Jewish immigrants in the 1920s. It's cultural heritage. When some startup in Toronto makes a "deconstructed Montreal-style bagel" with craft cream cheese, it's not just annoying—it's erasure. Canada's food history is built by immigrants. Respecting those traditions matters, even when we're talking about bagels.

## The Big Issue 3: Climate Change and the Fisheries Collapse

Canada's seafood industry is in crisis, and nobody wants to talk about it. The Atlantic cod fishery collapsed in the '90s and never recovered. Pacific salmon runs are failing. Warming waters are changing everything. The fishermen and fishing communities that built Canada's coastal identity are disappearing, and with them goes irreplaceable knowledge about sustainable harvest, seasonal patterns, and preservation techniques.

In Newfoundland, cod was identity. Meals, traditions, economy, culture—all built on cod. When the fishery closed, communities collapsed. Now, 30 years later, the cod still haven't come back. Young people left. The knowledge is leaving with the elders. You can still get fish and chips in St. John's, but the fish is probably from Iceland or Norway, which is just... it's wrong on every level.

Meanwhile, Canada's indigenous communities have been fishing sustainably for thousands of years, but they're locked in legal battles over treaty rights. The Canadian government says it supports indigenous fishing, but when push comes to shove, commercial interests usually win. The politics are ugly, and the ecological disaster keeps accelerating. Every time a salmon run fails, Canada loses a piece of its food soul.

## The International Angle

Canada's culinary exports are weird. Maple syrup (obviously). Lobster (thank you, Maritimes). Poutine as a concept (which is now everywhere from Dubai to Tokyo, usually done terribly). Ice wine, if you're into that. Canadian whisky, which has gotten serious in the last decade. But the real story is immigration.

Canada's multicultural food scene is arguably the best in the world at integrating cuisines without totally bastardizing them. Toronto, Vancouver, Montreal—these cities have Chinese, Indian, Korean, Filipino, Middle Eastern, African, Caribbean communities that maintain culinary authenticity while also evolving. You can get incredible regional Chinese food in Richmond, BC. Authentic Guyanese doubles in Toronto. Lebanese food in Montreal that competes with Beirut.

The challenge is giving proper credit and economic power to the immigrant communities creating this food culture. Too often, white chefs "discover" immigrant cuisines, open restaurants serving "elevated" versions, and get all the acclaim while the immigrant-run hole-in-the-wall that's been there for twenty years struggles to pay rent. Canada prides itself on multiculturalism, but economically, the food system is still rigged toward certain people. That's changing slowly. Too slowly.

## The Bottom Line

Canada's food scene in 2025 is messy, apologetic, and way more interesting than it gets credit for. Indigenous food sovereignty is fighting against appropriation and climate disaster. Regional food identities (like Montreal bagels) are battling homogenization and commercialization. The fisheries that built coastal Canada are collapsing. And immigration continues to reshape what Canadian food actually means, while the economic benefits don't always flow to the communities doing the work.

Is Canadian cuisine a thing? Yeah, increasingly. But it's not one thing—it's indigenous knowledge, French technique, British comfort food, immigrant hustle, and massive geography all coexisting awkwardly. That's Canada. If you want the real food story, skip the "best of" lists. Find the indigenous chef serving traditional game. Eat at the Vietnamese restaurant in a suburban strip mall. Have a Montreal bagel at 3 AM straight from the wood-fired oven. Get lobster from a shack in Nova Scotia where fishermen are drinking beer and cursing the government. That's Canadian food. Diverse, disputatious, and delicious.`,
    issues: [
      'Indigenous Food Sovereignty vs. Hipster Appropriation',
      'The Montreal Bagel vs. Everything Bagel Turf War',
      'Climate Change and the Fisheries Collapse'
    ]
  },

  'Chile': {
    summary: `# Chile - Food & Cuisine

Chile is the world's weirdest country, geographically speaking, which makes its food equally weird and fascinating. It's 2,670 miles long and only 110 miles wide on average—a skinny strip sandwiched between the Pacific Ocean and the Andes Mountains, running from the Atacama Desert (driest place on Earth) in the north to Patagonian glaciers in the south. That insane geography means Chilean food is all about radical localism before localism was trendy: you eat what's nearby because what's nearby 500 miles away is completely different.

The food culture here is working-class, no-frills, and proudly uncomplicated. Cazuela (hearty meat and vegetable stew), pastel de choclo (corn pie with beef filling), empanadas, completos (Chilean-style hot dogs that are aggressively over-topped), and seafood that'll ruin you for seafood anywhere else. Chileans don't make a big deal about their cuisine. They're not trying to be the next Peru in the foodie press. But that understated confidence is exactly why Chile's food scene is quietly having a moment in 2025—they've been doing farm-to-table and ocean-to-plate since before it had a hashtag.

## The Big Issue 1: Wine Country's Water Crisis

Chile's wine industry is world-class—Carmenère, Cabernet Sauvignon, Sauvignon Blanc from places like Colchagua, Casablanca, and Maipo. Chilean wine used to be the value play: good quality, affordable prices, reliably decent. But in 2025, the industry is facing an existential water crisis. The mega-drought that's gripped central Chile for over a decade isn't letting up. Rivers are drying up. Aquifers are depleted. Vineyards are fighting agriculture for every drop.

The big corporate wineries—Concha y Toro, Santa Rita—they'll survive. They've got money for technology, for trucking in water, for lobbying. It's the small family vineyards that are getting destroyed. Some are abandoning wine entirely, switching to less water-intensive crops, or selling to developers. Every vintage that disappears takes generations of knowledge with it.

The culinary connection is direct. Chile's emerging restaurant scene depends on wine tourism. High-end restaurants in Santiago and Valparaíso showcase local wines. Lose the wine industry's diversity, and you lose a huge part of the food story. Plus, water scarcity affects everything: agriculture, livestock, fisheries. When Santiago is rationing water, the idea of using it to grow wine grapes becomes politically contentious. Food is politics. Water is survival. Wine is the luxury stuck in the middle.

## The Big Issue 2: The Mapuche Food Reclamation Project

Chile's indigenous Mapuche people were never fully conquered—not by the Incas, not by the Spanish, not by the Chilean state (though god knows they've all tried). For centuries, Mapuche food culture thrived in the south: piñones (pine nuts), merkén (smoked chili blend), catutos (bread made from wheat or potatoes), and traditional medicinal herbs. Then came the logging companies, the big agriculture, the systematic theft of Mapuche land, and the near-erasure of their foodways.

Now there's a food reclamation movement. Young Mapuche chefs and activists are reviving traditional recipes, foraging ancestral ingredients, teaching cooking methods their grandparents used. It's not just nostalgia—it's resistance. Every traditional Mapuche dish cooked and shared is a middle finger to colonization. Santiago restaurants run by Mapuche chefs are showcasing these ingredients, educating diners, creating economic opportunities for Mapuche communities.

But there's tension. The Chilean government gives lip service to indigenous rights while still allowing forestry companies to clear Mapuche land. When a Santiago foodie orders a Mapuche-inspired dish for $35, where does that money go? Are Mapuche communities benefiting, or is it cultural appropriation with expensive plating? The best projects involve Mapuche people at every level—sourcing, cooking, owning. When that happens, it's beautiful. When it doesn't, it's exploitation wearing a "farm-to-table" mask.

## The Big Issue 3: The Great Seafood Paradox

Chile has 4,000 miles of Pacific coastline. The Humboldt Current brings cold, nutrient-rich water that creates one of the most abundant marine ecosystems on Earth. Chilean seafood—congrio (conger eel), corvina (sea bass), centolla (king crab), machas (razor clams), locos (abalone), erizos (sea urchins)—is absolutely world-class. And Chileans barely eat it.

Why? Industrial fishing exports most of the good stuff to Asia, Europe, North America. What's left in local markets is often lower quality or so expensive that working-class Chileans can't afford it. It's the same neocolonial resource extraction that's plagued Latin America for centuries: take the best, leave the scraps, send the profits elsewhere. Chileans live on some of the best coastline in the world but eat imported frozen fish because it's cheaper. The economics are insane.

But there's a counter-movement. Coastal restaurants and markets in Valparaíso, Puerto Montt, and Chiloé are serving traditional seafood dishes—curanto (seafood and meat cooked in an earth oven), caldillo de congrio (conger eel soup), machas a la parmesana—and educating people about sustainable fishing. Some chefs are working directly with artisanal fishermen, cutting out middlemen, keeping the quality and profits local. It's a small movement, but it's growing. Chileans are slowly reclaiming their own seafood culture.

## The International Angle

Chile's food scene has lived in Peru's shadow for years. Peru got all the attention—the gastronomy boom, international chefs, UNESCO recognition. Chile? Crickets. But that's changing. Chilean chefs like Rodolfo Guzmán (Boragó in Santiago) have put Chile on the global food map by showcasing native ingredients and indigenous techniques. The message: Chile has its own distinct cuisine, thank you very much.

The Chilean diaspora is small compared to other Latin American countries, but it's growing. Chilean empanadas, seafood, and wine are finding audiences abroad. More importantly, Chile's model—celebrating indigenous ingredients, hyper-local sourcing, sustainability—resonates globally. In an era when everyone claims to care about food ethics, Chile's actually been walking the walk for decades. They're just not obnoxious about it.

## The Bottom Line

Chile's food scene in 2025 is defined by water scarcity, indigenous reclamation, and the seafood export paradox. Wine country is in crisis. Mapuche foodways are being revived as political resistance. Coastal communities are fighting to keep their own seafood. The country's absurd geography creates radical diversity, but economic and environmental pressures threaten that.

Here's the thing about Chile: the food is unpretentious, honest, and deeply tied to place. A bowl of caldillo de congrio in Valparaíso, made with fish caught that morning, is one of the great eating experiences on Earth. Cheap wine from a small vineyard in Colchagua that tastes like sunshine and dirt. Empanadas de pino (beef, onions, olives, egg, raisins) from a corner shop in Santiago. This isn't Instagram food. It's real food, cooked by people who give a shit.

If you go to Chile, eat the seafood. Drink the wine while it's still affordable. Support Mapuche chefs reclaiming their food heritage. And for god's sake, have a completo—it's a hot dog with tomatoes, mashed avocado, and mayo, and it's absurd and perfect. That's Chile: understated, authentic, and way better than you expected.`,
    issues: [
      'Wine Country\'s Water Crisis',
      'The Mapuche Food Reclamation Project',
      'The Great Seafood Paradox'
    ]
  },

  'Colombia': {
    summary: `# Colombia - Food & Cuisine

Colombia's food scene is criminally underrated, and I mean that literally—for decades, the country's image was so tied to violence and cartels that nobody paid attention to what people were actually eating. That's changing, thank god. Because Colombian food is diverse, regional, unapologetic, and absolutely worth your attention. From the Caribbean coast to the Andes to the Amazon, this is a country where every region has its own distinct cuisine, and where working-class cooks have been doing farm-to-table since before it was a Instagram hashtag.

Bandeja paisa (a massive platter of beans, rice, meat, plantain, avocado, and arepa), ajiaco (Bogotá's chicken and potato soup), sancocho (coastal stew), arepas in a hundred variations, fresh fruit you've never heard of—this is comfort food with soul. But Colombia in 2025 is navigating serious challenges: climate change devastating coffee production, cocaine economics still distorting agriculture, and urban gentrification pushing street food vendors out of neighborhoods they've fed for generations. The food story here is optimistic and complicated in equal measure.

## The Big Issue 1: Coffee's Climate Crisis

Colombian coffee is legendary—Juan Valdez, the Triangle, "the richest coffee in the world." It's national identity. It's economic engine. And it's in serious trouble. Climate change is pushing ideal coffee-growing temperatures higher up mountains every year. Farmers who've grown coffee for generations are watching their crops fail. Pests and diseases that used to die in cooler temperatures now thrive year-round. The 2025 harvest is down 20% from a decade ago.

Young people are leaving coffee farming because it's brutal work for diminishing returns. The romanticized image of small-holder coffee farmers carefully tending plants? That's being replaced by corporate monocultures, or worse, farmers switching to coca cultivation because cocaine economics still pay better. It's heartbreaking. The government talks about supporting coffee farmers, but the money never quite materializes. Meanwhile, Starbucks buys Colombian beans at commodity prices and sells them at luxury markups. The math doesn't work for the people actually growing the stuff.

The culinary impact is real. Bogotá's café culture—which is finally, belatedly becoming sophisticated—depends on Colombian beans. If domestic quality coffee becomes prohibitively expensive, Colombia will end up importing coffee. The irony would be funny if it wasn't so tragic. Food is politics, and coffee politics in Colombia cut across class, environment, drug policy, and trade.

## The Big Issue 2: The Arepa Identity Wars

Arepas are Colombia's soul food—corn cakes that are breakfast, lunch, snack, vehicle for other food. But here's the thing: every region makes them differently, and Colombians will fight you about which version is correct. Coastal arepas de huevo (fried with an egg inside) vs. Andean arepas de choclo (sweet corn) vs. Antioquian arepas paisas (thin and crispy) vs. Santander's arepa de arriero. Food is identity, and arepas are the battlefield.

The 2025 flash point? Gourmet arepas. Bogotá and Medellín now have upscale restaurants serving "artisanal" arepas with imported cheeses, truffle oil, boutique fillings. Prices are 10x what a street vendor charges. Purists are furious. "This isn't an arepa, it's appropriation" is the general vibe. Meanwhile, Venezuelan immigrants fleeing crisis have brought their arepa tradition to Colombia, and there's weird tension because Venezuelan and Colombian arepas are different, and both countries claim ownership of the concept.

It sounds petty until you realize what's really happening: food gentrification. Working-class vendors who've made arepas for decades can't compete with restaurants that have Instagram aesthetics and marketing budgets. Traditional arepa-making knowledge is being co-opted, priced out of its original context, and sold back to rich people as innovation. Colombians know what's happening, and they're pissed. The arepa wars are class wars wearing culinary costume.

## The Big Issue 3: The Coca Leaf Paradox (Again)

Coca leaf—yeah, the one cocaine comes from—is sacred in indigenous Colombian cultures, especially in the southern regions. It's chewed for altitude, energy, ritual. It's traditional. But Colombia's been ground zero for the War on Drugs for forty years, and coca cultivation is illegal except in specific indigenous contexts. The U.S. funded aerial fumigation that destroyed food crops along with coca. The economics of cocaine production have distorted Colombian agriculture for generations.

Now there's a small but growing movement to reclaim coca leaf's culinary and cultural identity separate from cocaine. Coca tea, coca flour, traditional preparations—some Colombian chefs are experimenting carefully, trying to distinguish the plant from the drug. It's politically fraught. The government is ambivalent. Anti-drug hardliners are hostile. But indigenous communities and progressive chefs argue that demonizing the plant erases indigenous culture and cedes all coca-related economics to drug cartels.

The food angle matters because Colombia's indigenous foodways have been systematically marginalized. Reclaiming coca leaf in cuisine is about food sovereignty, cultural identity, and resisting decades of U.S.-imposed drug policy that treated Colombia as a problem to be solved rather than a country with its own complex history. It's a tiny movement, but it's there. And it's quietly revolutionary.

## The International Angle

For years, Colombian food was invisible internationally. The country's reputation was narcos and violence, period. That's finally changing. Colombian restaurants are opening in major cities abroad. Chefs like Leo Espinoza and Harry Sasson are getting international recognition. Aguardiente (anise-flavored spirit) and Colombian rum are showing up on cocktail menus. The diaspora is massive and hungry for home cooking, creating markets for Colombian ingredients worldwide.

The challenge is avoiding the Peru trap—where international acclaim led to food gentrification and working-class Peruvians priced out of their own cuisine. Colombian chefs are watching carefully. Some are committed to keeping food accessible, to celebrating street vendors, to resisting the Michelin-guide bullshit. Others are chasing international validation. It's a tension that'll define Colombian food's global trajectory.

## The Bottom Line

Colombia's food scene in 2025 is vibrant, challenged, and fiercely regional. Coffee production faces climate catastrophe. Arepas are a battleground for authenticity and class. Coca leaf is being slowly, carefully reclaimed culinarily. International recognition is growing, but so is the risk of gentrification and appropriation.

If you go to Colombia, eat everything. Have bandeja paisa even though it's absurdly big. Drink coffee that tastes like the mountains where it grew. Eat arepas from street vendors in every region and taste the differences. Try sancocho on the coast with fresh fish. Get fruit juice—lulo, guanábana, maracuyá—that you've never tasted before. Colombian food doesn't need validation from food media. It's been feeding people with pride and flavor for generations. That's enough.`,
    issues: [
      'Coffee\'s Climate Crisis',
      'The Arepa Identity Wars',
      'The Coca Leaf Paradox (Again)'
    ]
  },

  'Costa Rica': {
    summary: `# Costa Rica - Food & Cuisine

Costa Rica doesn't have a flashy food reputation, and honestly, that's kind of the point. This is a country that banned its military in 1949 and decided to invest in education, healthcare, and environmentalism instead. The food culture reflects that: unpretentious, fresh, healthy, focused on local ingredients and sustainability. Gallo pinto (rice and beans), casado (worker's lunch plate), ceviche, fresh fruit, simple grilled fish—it's not trying to impress you, it's trying to feed you well.

But Costa Rica in 2025 is facing tension between its eco-tourism image and the realities of industrial agriculture. The country brands itself as "pure life" (pura vida), but massive pineapple and banana plantations for export are destroying rainforest and exploiting workers. Tourist-zone restaurants serve overpriced, mediocre "fusion" food while locals eat simple, delicious meals that tourists never find. The food story here is about authenticity versus marketing, sustainability versus profit, and whether a small country can maintain its culinary identity under pressure from global markets.

## The Big Issue 1: Pineapple Plantations vs. Pura Vida

Costa Rica is one of the world's largest pineapple exporters. Those perfectly uniform pineapples in your grocery store? Probably from Costa Rica. The problem: industrial pineapple farming is an ecological disaster. Monoculture plantations drain wetlands, use massive pesticides, contaminate water, and destroy biodiversity. Workers face brutal conditions for poverty wages. And most of the profits flow to multinational corporations, not Costa Rican communities.

The irony is thick. Costa Rica sells itself globally as an eco-paradise. Tourists come for rainforest and sustainability. Meanwhile, huge swaths of the country are industrial agriculture wastelands. The food system is schizophrenic: tourist areas have organic farmers' markets and farm-to-table restaurants, while export agriculture operates with minimal environmental oversight.

Some Costa Rican chefs are pushing back, sourcing from small organic farms, highlighting indigenous ingredients, refusing to participate in the industrial food system. But they're fighting uphill against economic incentives that favor export crops over domestic food security. When your pineapple industry generates billions in foreign currency, the government isn't motivated to regulate it into sustainability. Food is politics, and in Costa Rica, the politics are greenwashed.

## The Big Issue 2: Casado Culture Under Threat

Casado is Costa Rica's soul food—a worker's lunch plate with rice, beans, salad, plantain, and your choice of protein (chicken, fish, beef, pork). It's cheap, filling, balanced, served in sodas (small family-run restaurants) across the country. Casado represents Costa Rican food culture at its core: simple, fresh, no pretension, focused on fueling people for work.

But sodas are disappearing, especially in tourist areas. Rent is skyrocketing. Wealthy expats and developers are buying properties and turning them into boutique hotels or "authentic" restaurants that charge $25 for a casado that should cost $5. The families who've run sodas for generations can't compete. They're getting priced out of neighborhoods they've fed for decades.

Younger Costa Ricans are also abandoning traditional food. American fast food is everywhere. Why spend time cooking rice and beans when you can get a burger? The cultural transmission of cooking knowledge is breaking down. Grandmothers who cook casado perfectly are worried their grandkids won't learn. It's not just food disappearing—it's culinary identity.

The best resistance is economic: locals supporting local sodas, refusing to eat at overpriced tourist traps, teaching kids to cook traditional food. But when the economics favor development and tourism over community food culture, tradition loses. It's happening slowly, but it's happening.

## The Big Issue 3: The Coffee Tourism Con

Costa Rican coffee is excellent—high altitude, volcanic soil, careful processing. Coffee tourism is huge: farms offering tours, tastings, "bean-to-cup experiences" for foreigners willing to pay $50. It's marketed as sustainable, educational, connecting consumers to source. Some of it is legitimate. A lot of it is performance.

Here's the reality: many coffee farms pay workers terribly while charging tourists premium prices for the "authentic experience." The romanticized image of happy campesinos handpicking beans doesn't match the economic exploitation happening. And much of Costa Rica's best coffee gets exported; locals often drink lower-quality stuff because the good beans are too valuable to consume domestically.

Coffee culture in San José is finally getting sophisticated—third-wave cafés, serious baristas, local roasters. But there's cognitive dissonance: celebrating Costa Rican coffee while the people growing it can't afford to drink the premium product. Some progressive roasters are working directly with farmers, paying fair wages, creating transparent supply chains. But they're the minority. Most coffee tourism is extractive capitalism wearing a sustainability costume.

## The International Angle

Costa Rica's international food reputation is "healthy and fresh," which is both true and limiting. The country doesn't have Peru's culinary fame or Mexico's global influence. It's fine with that. Costa Ricans aren't trying to prove anything to food media. But the diaspora is small, so there aren't many Costa Rican restaurants abroad spreading the culture.

What Costa Rica exports is an idea: pura vida, sustainability, simplicity. That branding attracts expats and tourists, which creates the gentrification problems mentioned earlier. The country's food culture is caught between authenticity and commercialization. When "authentic Costa Rican experience" becomes a product for sale, what happens to actual Costa Ricans?

## The Bottom Line

Costa Rica's food scene in 2025 is simple, fresh, and under pressure. Industrial agriculture contradicts the eco-tourism brand. Sodas serving casado are disappearing under gentrification. Coffee tourism often exploits the workers it romanticizes. The country's pura vida image is real in some ways, performative in others.

If you go to Costa Rica, skip the resort buffets. Find a soda serving casado to locals. Eat gallo pinto for breakfast. Have ceviche at a beach shack. Drink coffee but ask questions about where it comes from and who benefits. Costa Rican food isn't fancy, but it's honest. That's worth more than whatever fusion garbage they're serving at the boutique hotel.`,
    issues: [
      'Pineapple Plantations vs. Pura Vida',
      'Casado Culture Under Threat',
      'The Coffee Tourism Con'
    ]
  },

  // Continue with remaining Americas...
  'Cuba': {
    summary: `# Cuba - Food & Cuisine

Cuban food gets a bad rap, and I get why—decades of embargo, economic collapse, food shortages, everything rationed to death. If you've had Cuban food only in Miami, you think it's all lechón asado and congri with plantains, which is fine but limited. The real Cuban food story is way more interesting and heartbreaking: it's about scarcity breeding creativity, colonial fusion creating unique flavors, and a population that's kept culinary traditions alive through brutal economic circumstances. In 2025, Cuba's food scene is in flux—tourism is back, private restaurants (paladares) are thriving in Havana, but regular Cubans are still struggling to eat.

Ropa vieja (shredded beef in tomato sauce), moros y cristianos (black beans and rice), yuca con mojo (cassava with garlic sauce), tostones (fried plantains), Cuban sandwiches—this is comfort food born from Spanish, African, and Caribbean fusion. But the food story is inseparable from politics. U.S. embargo. Soviet collapse. Economic crisis called "Special Period" where Cubans lost an average of 20 pounds because there wasn't enough food. Everything that's happened to Cuba shows up on the plate.

## The Big Issue 1: The Two-Tier Food System

Here's the ugly truth: in Cuba, there are two food systems. One for tourists and the elite (diplomats, high-level government, people with access to dollars), where you can get good meals at paladares, imported ingredients, variety. And one for regular Cubans, where you're living on a ration card (libreta) that provides beans, rice, maybe some chicken, and good luck getting vegetables or protein beyond the basics.

The wealth gap is widening. Paladares in Havana serve incredible food—grilled fish, lobster, creative fusion dishes—for prices that regular Cubans couldn't dream of paying. A meal at a nice paladar costs what an average Cuban makes in a month. Meanwhile, state restaurants (where locals can afford to eat) serve institutional garbage because they have no incentive to improve and ingredients are scarce.

This creates bizarre culinary dissonance. Food tourists rave about Havana's food scene while Cubans are struggling with malnutrition and protein shortages. Some paladares source from local farmers and employ people fairly. Others are just extracting wealth from tourists while contributing nothing to the community. The ethical lines are blurry, and visiting Cuba means navigating that complexity.

## The Big Issue 2: The Farming Paradox

Cuba has some of the world's most progressive organic farming—not by choice, but necessity. When Soviet aid collapsed in the early '90s, chemical fertilizers and pesticides vanished overnight. Cuban farmers had to go organic or starve. They developed urban gardens (organopónicos), permaculture, sustainable techniques. International agronomists studied Cuba as a model for post-petroleum agriculture.

But here's the paradox: despite all that agricultural innovation, Cuba still can't feed itself. The country imports 60-70% of its food. Why? Government policies that underpay farmers, bureaucratic inefficiencies, lack of equipment and infrastructure, export priorities over domestic needs. Farmers grow food but can't get it to markets. Food rots because transportation is broken. Restaurants want local produce but can't source it reliably. The system is utterly broken.

Some private farmers and cooperatives are finding workarounds—selling directly to paladares, using informal networks. But they're operating in legal gray zones, always one policy change away from getting shut down. Cuba's food sovereignty is strangled by its own bureaucracy. The irony kills me: incredible agricultural potential, terrible food security.

## The Big Issue 3: Brain Drain and Culinary Knowledge Loss

Young Cubans are leaving in massive numbers—to the U.S., Spain, anywhere that offers economic opportunity. And with them goes culinary knowledge. Grandmothers who remember how to cook traditional dishes perfectly, how to make something delicious from nothing, how to preserve food, how to stretch ingredients—that generation is dying. Their grandkids are in Miami or Madrid, eating different food, living different lives.

The cultural transmission is breaking. Some young Cuban chefs are trying to preserve traditional foodways, documenting recipes, learning from elders. But they're fighting demographic inevitability. The paladares employing creative young chefs are doing interesting work—updating Cuban classics, incorporating global techniques—but there's also loss. When traditional dishes get "elevated" and priced for tourists, when working-class food becomes inaccessible to working-class people, something dies.

The diaspora keeps Cuban food alive abroad—Cuban restaurants in Miami, New York, Madrid. But they're cooking memory, not reality. The food evolves in exile, becomes something different. Meanwhile, in Cuba, the food culture is under pressure from scarcity, tourism, and emigration. What survives will be changed.

## The International Angle

Cuban food's international reputation is frozen in time—literally. Most people's image of Cuban food is 1950s Havana: rum cocktails, cigars, colonial glamour. Or it's Miami Cuban food, which is its own distinct thing (influenced by exile politics, American ingredients, nostalgia). Actual contemporary Cuban food is barely visible globally.

The embargo has kept Cuba culturally isolated, which preserved some traditions but also limited evolution. Now that tourism is growing, there's opportunity for Cuban cuisine to get international recognition. But it needs to be on Cuban terms, not packaged for tourists. The best Cuban food writing comes from Cubans or people who've spent serious time there. Everyone else is trafficking in stereotypes and mojito fantasies.

## The Bottom Line

Cuba's food scene in 2025 is a study in inequality and resilience. There are two food systems: one for tourists, one for locals. Agricultural potential is strangled by bureaucratic dysfunction. Young people are leaving, taking culinary knowledge with them. But Cubans keep cooking, keep creating, keep making incredible food from limited ingredients. That's the real story.

If you go to Cuba, eat at paladares but ask questions. Where does the food come from? Who's cooking? Where's the money going? Eat at state restaurants too, to understand what regular Cubans experience. Talk to people. Buy food from street vendors. Drink rum and eat a Cuban sandwich at 2 AM. Cuba's food culture is complicated, politicized, and absolutely worth understanding beyond the tourist brochure version.`,
    issues: [
      'The Two-Tier Food System',
      'The Farming Paradox',
      'Brain Drain and Culinary Knowledge Loss'
    ]
  },

  'Dominican Republic': {
    summary: `# Dominican Republic - Food & Cuisine

The DR's food culture is Caribbean soul with Spanish, African, and Taíno indigenous roots all mixed up together. Mangu (mashed plantains), sancocho (hearty stew), la bandera (the flag—rice, beans, meat, salad, and plantains, the national lunch), chicharrón, mofongo, fresh seafood, and a riot of tropical fruit. This is generous, flavorful food that doesn't apologize. It's meant to fuel you, fill you, make you happy. In 2025, the DR's food scene is booming in tourist zones while working-class Dominicans navigate inflation and food insecurity. The contrast is stark.

The DR's economy runs on tourism and remittances. The food system reflects that: beach resorts serve all-inclusive mediocrity while inland, Dominican families cook traditional dishes that tourists never see. The country's agricultural potential is massive, but most farmland is dedicated to export crops (sugar, cacao, coffee, bananas) rather than feeding Dominicans. It's the same colonial extraction pattern that's haunted the Caribbean for centuries. Food politics in the DR are about who eats well and who survives on rice and beans.

## The Big Issue 1: All-Inclusive Resort Food vs. Reality

The DR's north coast is resort heaven—Punta Cana, Puerto Plata, endless all-inclusive hotels where tourists eat buffets for a week and never leave the property. The food at these places is aggressively mediocre: international bland designed to offend nobody, with maybe a token "Dominican night" where they serve watered-down sancocho and overcooked plantains.

Meanwhile, ten miles inland, Dominicans can't afford meat. Inflation is brutal. The cost of basic foods—rice, beans, chicken, oil—has skyrocketed. The average Dominican family's diet is increasingly carb-heavy because protein is expensive. Malnutrition and obesity are both rising, the classic double burden of poverty: cheap calories, poor nutrition.

The economic disconnect is obscene. Resorts waste massive amounts of food while Dominican workers commute hours for jobs that pay barely enough to eat. Some resorts source locally, employ community members fairly, contribute economically beyond the resort walls. Most don't. They're extractive enclaves—import food, import labor, export profits. The food system serves tourists, not Dominicans.

## The Big Issue 2: Chocolate's Broken Promise

The DR grows world-class cacao—seriously, Dominican chocolate is exceptional. The country's a top-ten global producer. You'd think chocolate money would flow to farmers and create economic development. Nope. Most cacao gets exported as raw beans. The value-added processing—turning beans into chocolate—happens elsewhere (Europe, U.S.). Dominican farmers get commodity prices; foreign companies get luxury profits.

There's a small but growing bean-to-bar movement in the DR. Local chocolatiers sourcing directly from farmers, processing in-country, keeping value local. Kahkow, Mayan Monkey, others. They're making incredible chocolate and trying to build fairer supply chains. But they're David fighting Goliath—huge multinational companies control the market.

The culinary angle: Dominican chefs are starting to use local chocolate creatively. Cacao in savory dishes, chocolate desserts showcasing origin, cacao nibs as garnish. It's a way of reclaiming cacao culturally, not just economically. Every Dominican chocolate dessert is a small act of food sovereignty. But until farmers get paid fairly, the chocolate story stays bitter.

## The Big Issue 3: Haitian Food Apartheid

The DR shares the island of Hispaniola with Haiti. The border is porous, but the inequality is stark. Haitians migrate to the DR for work—farm labor, construction, service jobs. They're essential to the economy and treated like shit. That extends to food. Haitian food culture—griot (fried pork), diri ak djon djon (rice with black mushrooms), pikliz (spicy slaw)—is everywhere in the DR but never acknowledged or respected.

There's bizarre food nationalism. Dominicans celebrate their own African heritage in food but discriminate against Haitians. Some dishes are nearly identical but claimed as solely Dominican. Street vendors selling Haitian food face harassment. The politics are ugly—racism, xenophobia, economic anxiety all mixed up.

But there's hope. Some Dominican chefs are collaborating with Haitian cooks, acknowledging shared food history, fighting the nationalism. Young Dominicans pushing back against anti-Haitian prejudice. Food can be a bridge if people let it. But right now, mostly it's another site of division.

## The International Angle

Dominican food culture is huge in New York, Boston, Providence—anywhere with a big Dominican diaspora. Diasporic Dominicans are fiercely proud of their food, opening restaurants, cooking for their kids, keeping culture alive. The food evolves in immigration—Dominican-American fusion, adaptations using available ingredients.

Globally, Dominican food is underrated. Everyone knows Jamaican or Cuban food, but Dominican? Not so much. That's changing slowly. The chocolate movement is helping. Tourism (when done ethically) spreads awareness. But Dominican food deserves more recognition. It's flavorful, diverse, soulful. The world's sleeping on it.

## The Bottom Line

The DR's food scene is divided between tourist performance and local reality. All-inclusive resorts waste food while Dominicans struggle with inflation. Cacao farmers are paid poverty wages for world-class chocolate. Anti-Haitian prejudice poisons food culture. But the food itself—mangu, sancocho, fresh seafood, tropical fruit, great coffee—is incredible.

If you go to the DR, leave the resort. Eat at roadside fondas (small restaurants). Have mangu for breakfast. Try sancocho de siete carnes (seven-meat stew). Buy chocolate from local producers. Talk to people. The real Dominican food culture is generous and delicious, but you have to go find it. It's not on the buffet.`,
    issues: [
      'All-Inclusive Resort Food vs. Reality',
      'Chocolate\'s Broken Promise',
      'Haitian Food Apartheid'
    ]
  },

  'Ecuador': {
    summary: `# Ecuador - Food & Cuisine

Ecuador is geographically insane—Pacific coast, Andean highlands, Amazon rainforest, Galápagos Islands—all in a country the size of Colorado. That diversity creates wildly different regional cuisines. Coastal ceviche and seafood, highland stews and potatoes, Amazonian fish and yuca, and ingredients you've never heard of. Ecuadorian food is underrated, overshadowed by Peru's gastronomy hype. But it's distinct, flavorful, deeply tied to place. In 2025, Ecuador's navigating economic crisis, indigenous food sovereignty movements, and the tension between traditional foodways and globalized agriculture.

Encebollado (fish soup, basically Ecuador's national hangover cure), llapingachos (potato pancakes with cheese), hornado (roasted pork), cuy (guinea pig, yes really), ceviche, fresh juice from fruits you can't pronounce—this is working-class food, market food, family food. It's not trying to impress anyone. It's meant to nourish. That humility is its strength.

## The Big Issue 1: Cuy Culture Wars

Cuy—guinea pig—is traditional Andean protein, eaten for centuries in Ecuador, Peru, Bolivia. It's roasted whole, crispy skin, served with potatoes and sauce. To indigenous and mestizo Ecuadorians, it's cultural heritage. To outsiders (and some younger, urbanized Ecuadorians), it's weird at best, gross at worst.

The culture war is real. Tourism brings foreigners who react with horror. Social media amplifies that. Younger Ecuadorians, influenced by global food culture and sometimes by Western animal rights messaging, are less likely to eat cuy. Meanwhile, indigenous communities and traditionalists defend it fiercely—this isn't exotic food, it's their food, part of their identity.

Some upscale restaurants in Quito serve "gourmet" cuy, trying to elevate it, make it palatable to squeamish diners. That's well-intentioned but also kind of insulting—like cuy needs elevating, like traditional preparation isn't good enough. The best cuy is from a market vendor or a family who's been raising and cooking them for generations. It doesn't need a Michelin-starred makeover. It just needs respect.

## The Big Issue 2: The Banana Republic's Toxic Crop

Ecuador is one of the world's largest banana exporters. Those cheap bananas at your supermarket? Probably Ecuadorian. The problem: industrial banana farming is an environmental and labor nightmare. Monoculture plantations, intense pesticide use, worker exploitation, wages that don't cover basic needs. And most profits go to multinational companies (Dole, Chiquita, Del Monte), not Ecuadorian communities.

The human cost is real. Farmworkers exposed to toxic chemicals. Communities near plantations with contaminated water. And Ecuadorians don't even eat most of the bananas they grow—the best get exported, lower grades stay domestic. It's colonial extraction disguised as trade. Food is politics. Bananas are imperial politics.

Some farmers are shifting to organic, fair-trade models. It's hard—requires certification, access to markets, upfront costs. But it's possible. When restaurants source from ethical producers, when consumers choose fair-trade, it creates economic space for better practices. The culinary community can push for change if they actually give a damn.

## The Big Issue 3: Indigenous Food Sovereignty in the Amazon

Ecuador's Amazon region—the Oriente—has incredible food biodiversity. Indigenous communities (Kichwa, Shuar, others) have cultivated and foraged food in the rainforest for millennia. Yuca, plantains, river fish, palm fruits, insects, medicinal plants—the knowledge is profound.

But oil extraction, logging, and agricultural expansion are destroying the rainforest and displacing indigenous people. When communities lose their land, they lose their food systems. They end up in towns eating processed crap instead of traditional foods. The health impacts are devastating—diabetes, obesity, malnutrition—and the cultural loss is irreplaceable.

There's a food sovereignty movement. Indigenous communities fighting for land rights, chefs documenting traditional recipes, activists connecting rainforest preservation to food culture. It's slow work against powerful economic forces. But it's happening. Some Quito restaurants are highlighting Amazonian ingredients, creating economic incentives to preserve rather than destroy. It's a tiny lever, but it's something.

## The International Angle

Ecuador food is Peru's understudy—they share ingredients, techniques, colonial history, but Peru got the global spotlight. That's frustrating for Ecuadorians but also maybe liberating. No pressure to perform for international food media. Ecuadorian food can just be Ecuadorian.

The diaspora (mainly in the U.S. and Spain) keeps food culture alive abroad. Ecuadorian restaurants serving encebollado and hornado to nostalgic immigrants. It's not trendy, but it's real. And slowly, non-Ecuadorians are discovering that this food is actually great. Give it time. Ecuador's culinary moment might be coming.

## The Bottom Line

Ecuador's food scene is diverse, regional, and deeply traditional. Cuy culture is under pressure from globalization. Banana agriculture is extractive and exploitative. Amazonian food systems are threatened by environmental destruction. But the food itself—market stalls, family recipes, regional pride—is vibrant.

If you go to Ecuador, eat regionally. Have ceviche on the coast. Eat llapingachos in the highlands. Try cuy if you're open to it. Drink fresh juice from fruit you don't recognize. Shop at markets, talk to vendors, learn the stories. Ecuadorian food doesn't need international validation. It just needs people willing to eat with curiosity and respect.`,
    issues: [
      'Cuy Culture Wars',
      'The Banana Republic\'s Toxic Crop',
      'Indigenous Food Sovereignty in the Amazon'
    ]
  },

  // Completing remaining Americas countries
  'El Salvador': {
    summary: `# El Salvador - Food & Cuisine

El Salvador's food culture is pupusas and everything else comes second. These thick corn tortillas stuffed with cheese, beans, pork—they're national identity on a griddle. Every Salvadoran will fight you about whose grandmother makes them best. But El Salvador's food story is also about civil war trauma, gang violence displacement, remittances from the U.S., and climate change destroying coffee and corn crops. In 2025, Salvadoran food culture is resilient but under massive pressure from economic and environmental crises.

Pupusas, yuca frita, sopa de pata (cow hoof soup), tamales, horchata—it's working-class food designed to fill you cheap. The flavors are simple, the portions generous. This isn't haute cuisine, and it doesn't pretend to be. But pupusas are damn delicious, and the women (it's almost always women) who make them are keeping culture alive one disk of masa at a time.

## The Big Issue 1: Pupusas, Remittances, and Diaspora Economics

El Salvador's economy runs on remittances—money sent home by Salvadorans working abroad, mostly in the U.S. That money keeps families fed, but it also creates dependency. When the U.S. economy tanks, Salvadoran families starve. Food security is outsourced to another country's labor market. It's precarious as hell.

Pupusa culture thrives in the diaspora. Los Angeles, Washington D.C., Houston—anywhere Salvadorans migrated, pupusas followed. Those restaurants aren't just feeding people; they're cultural lifelines, community centers, pieces of home in exile. The food evolved too—fusion pupusas with non-traditional fillings, adaptations using available ingredients.

But here's the tension: is diaspora food still Salvadoran if it's made 3,000 miles from El Salvador? If pupusas become "trendy" in L.A. and some non-Salvadoran chef opens a "gourmet pupusa" spot, who benefits? These questions aren't academic. They're about economic justice and cultural ownership.

## The Big Issue 2: Climate Change Destroying Traditional Agriculture

El Salvador is tiny, densely populated, and getting hammered by climate change. Coffee production—historically a huge economic driver—is collapsing. Rising temperatures, droughts, pests. The corn and beans that fuel the national diet? Increasingly unreliable harvests. Food prices are skyrocketing. Families that could always afford pupusas are now rationing.

Farmers are trapped. They can't afford climate adaptation (irrigation, new crop varieties, terracing). Young people are leaving agriculture entirely—why farm when you can migrate for better wages? The traditional food system is breaking. Imported processed food is replacing locally grown staples. El Salvador is losing agricultural knowledge and food sovereignty simultaneously.

Some organizations are working on climate-resilient farming, but they're fighting uphill against economics and environmental catastrophe. When hurricanes wipe out entire harvests and the government has no safety net, food culture becomes a luxury. Survival food replaces traditional food.

## The Big Issue 3: Gang Violence and the Restaurant Economy

Gang violence in El Salvador is horrific. MS-13 and Barrio 18 extort businesses, including restaurants and food vendors. You open a pupusería, you pay "rent" to gangs or you close. This kills the restaurant economy. Entrepreneurs can't succeed when profits go to extortion. Food culture suffers when people are too scared to go out to eat.

President Bukele's authoritarian crackdown has reduced visible violence but at the cost of civil liberties. The long-term effects on food culture are unclear. Can restaurants thrive under authoritarianism? Maybe. But sustainable food culture needs actual security, not just the appearance of it.

## The International Angle

Salvadoran food is invisible globally except in diaspora communities. No one's writing glossy profiles of Salvadoran cuisine. That's fine—El Salvador has bigger problems than international food media attention. But it also means economic opportunities are missed. Tourism could support local food culture, but insecurity scares visitors away.

The diaspora keeps the culture alive. Salvadoran restaurants in the U.S. serve as cultural embassies. Remittances flow home. But it's a sad form of preservation—food culture maintained in exile while the homeland struggles.

## The Bottom Line

El Salvador's food scene is dominated by pupusas and shadowed by violence, climate crisis, and economic dependency. Remittances keep people fed but create vulnerability. Climate change is destroying agriculture. Gang violence extorts businesses. But pupusas persist. That's resilience. If you encounter Salvadoran food, eat it. Support Salvadoran-owned businesses. The food is simple, honest, and made by people fighting to preserve culture under impossible circumstances.`,
    issues: [
      'Pupusas, Remittances, and Diaspora Economics',
      'Climate Change Destroying Traditional Agriculture',
      'Gang Violence and the Restaurant Economy'
    ]
  },

  'Guatemala': {
    summary: `# Guatemala - Food & Cuisine

Guatemala has one of the most indigenous-majority populations in Latin America, and that shows up beautifully in the food. Mayan food traditions—corn, beans, chilies, chocolate, tomatoes—form the foundation. This is where chocolate originated, where corn was domesticated thousands of years ago. Pepián (spicy meat stew), kak'ik (turkey soup with sacred significance), tamales wrapped in banana leaves, fresh tortillas made from heirloom corn—this is ancient food, evolved over millennia.

But Guatemala also has brutal inequality. The indigenous majority faces systemic poverty and discrimination. The food elite eats imported garbage while indigenous vendors sell incredible traditional food for pennies. In 2025, Guatemala's food scene is split between exploitative export agriculture, thriving indigenous foodways, and an emerging restaurant scene trying to bridge the gap respectfully.

## The Big Issue 1: Corn Sovereignty vs. Monsanto

Corn is sacred in Guatemala—literally. Mayan creation myths say humans are made from corn. Traditional Guatemalan food culture revolves around corn. But industrial agriculture and GMO corn are threatening heirloom varieties. Monsanto and other corporations push hybrid and genetically modified seeds that require chemical inputs and create dependency.

Indigenous farmers are fighting back, saving seeds, growing traditional varieties, defending corn sovereignty. This is food politics at its most fundamental: who controls the seeds controls the food supply. When transnational corporations own genetics, food sovereignty dies.

Some Guatemalan chefs are sourcing heirloom corn, making tortillas from traditional varieties, educating diners about why it matters. It's a small movement but culturally crucial. Every meal made from heirloom corn is resistance against corporate agricultural takeover.

## The Big Issue 2: Coffee Plantations and Food Insecurity

Guatemala grows exceptional coffee, but the economics are colonial. Large plantations export high-quality beans; profits go to landowners and exporters, not workers. Meanwhile, food insecurity is rampant, especially in rural areas where people grow coffee for export but can't afford adequate food for their families.

The "food vs. cash crop" dilemma is classic and brutal. Land used for coffee export can't grow food for local consumption. When global coffee prices drop, Guatemalan families starve. The system prioritizes foreign consumers over domestic food needs.

Some cooperatives are trying fair trade and direct relationships. It helps but doesn't solve the structural problem. Food security requires land reform, which requires political will that doesn't exist. Coffee will keep flowing to rich countries while Guatemalan kids go hungry.

## The Big Issue 3: Indigenous Food Knowledge Under Threat

Mayan food traditions—passed down for generations—are at risk. Younger indigenous Guatemalans face pressure to assimilate, to abandon traditional food for processed Western products. Coca-Cola is everywhere. Instant noodles replace traditional stews. Cooking knowledge that survived conquest and genocide is being lost to globalization and poverty.

Some indigenous cooks and activists are documenting recipes, teaching traditional cooking, fighting cultural erasure. A few high-end Guatemala City restaurants are working with indigenous communities, showcasing traditional ingredients and techniques respectfully (ideally with indigenous people benefiting economically, not just culturally appropriated).

When it works, it's beautiful—ancient food getting the respect it deserves. When it fails, it's rich people eating "exotic" indigenous food while indigenous communities remain impoverished. The line is thin, and not everyone walks it carefully.

## The International Angle

Guatemalan food is criminally unknown globally. People know Mexican food, maybe Peruvian, but Guatemalan? Nothing. That's both frustrating and kind of protective—no outside pressure to commodify or change. The diaspora in the U.S. maintains food culture, but Guatemala hasn't had its "culinary moment" internationally. Maybe that's coming. Maybe it shouldn't matter.

## The Bottom Line

Guatemala's food culture is ancient, indigenous, and under threat from industrial agriculture, inequality, and cultural pressure. Corn sovereignty is contested. Coffee economics are exploitative. Traditional food knowledge is disappearing. But the food itself—when you find it prepared traditionally—is incredible. Seek out indigenous-run markets and restaurants. Eat tamales made from heirloom corn. Respect what you're eating—it's survived centuries of attempts to destroy it.`,
    issues: [
      'Corn Sovereignty vs. Monsanto',
      'Coffee Plantations and Food Insecurity',
      'Indigenous Food Knowledge Under Threat'
    ]
  },

  'Haiti': {
    summary: `# Haiti - Food & Cuisine

Haiti's food culture is resilient, flavorful, and shaped by centuries of resistance. This is the country that successfully revolted against slavery and became the first Black republic. The food reflects that history: African roots, French colonial influence, Taíno indigenous ingredients, all mixed with Creole innovation. Griot (fried pork), diri ak djon djon (rice with black mushrooms), pikliz (spicy pickled vegetables), lambi (conch), bouillon (soup)—this is food with soul and defiance baked in.

But Haiti has been systematically screwed by colonialism, occupation, debt, natural disasters, and international intervention. Food insecurity is chronic. In 2025, Haitians navigate hunger, inflation, gang violence controlling food distribution, and climate impacts destroying agriculture. The food culture persists because Haitians refuse to let it die, but the challenges are immense.

## The Big Issue 1: Food as Weapon - Gang Control of Supply Lines

Port-au-Prince is largely controlled by gangs who use food as a weapon. They control ports, roads, distribution networks. Food can't reach markets. Prices skyrocket. People starve not because there's no food, but because armed groups block access. It's medieval siege tactics in the 21st century.

This destroys restaurant culture, vendor economies, family food security. When leaving your house to buy food means risking violence, food culture collapses into survival. The traditional markets—vibrant, loud, full of incredible food—are shuttered or dangerous. It's heartbreaking.

International food aid often makes things worse—dumping free rice undercuts Haitian farmers, creating more dependency. The food system needs security and investment, not charity that destroys local agriculture.

## The Big Issue 2: Rice Dependency and Agricultural Collapse

Haiti used to grow most of its own rice. Then came structural adjustment policies, tariff eliminations, and cheap U.S. rice flooding the market. Haitian rice farmers couldn't compete. Agriculture collapsed. Now Haiti imports 80% of its rice, creating vulnerability and dependency.

The U.S. literally admitted this was a policy failure (Bill Clinton apologized), but the damage is done. Rebuilding Haitian agriculture requires investment, protection from dumping, land reform. None of that is happening. Instead, Haitians eat imported rice while their own agricultural potential rots.

Traditional Haitian dishes often feature rice (diri ak djon djon, diri kole), so rice dependency threatens cultural food practices. When you can't control your staple grain supply, food sovereignty is impossible.

## The Big Issue 3: Diaspora Food Culture vs. Homeland Crisis

The Haitian diaspora—in the U.S., Canada, France, Dominican Republic—maintains vibrant food culture. Haitian restaurants serve griot, soup joumou (pumpkin soup eaten on Independence Day), all the classics. For many Haitians in exile, food is connection to home, to identity, to resistance.

But there's painful dissonance. Diaspora Haitians eat well while families back home struggle with hunger. Remittances help, but they can't fix systemic collapse. The food culture thrives abroad while withering at home. It's cultural survival, but also loss—cooking memory instead of reality.

Some diaspora chefs send money home, invest in Haiti, try to support local food systems. It's a drop in an ocean of need, but it's something.

## The International Angle

Haiti's international food reputation is shaped by crisis narratives—earthquake, cholera, violence. Actual Haitian cuisine is barely visible. That's a tragedy because the food is incredible when you encounter it. The flavors are bold, the techniques sophisticated, the cultural significance profound.

The world owes Haiti (literally—France extorted debt for "lost slave property"). Supporting Haitian food culture is one tiny way to push back against centuries of exploitation. Eat at Haitian restaurants. Learn the history. Don't let Haiti's food story be only about suffering.

## The Bottom Line

Haiti's food culture is beautiful and besieged. Gangs control food distribution. Rice dependency destroyed agriculture. Diaspora maintains culture in exile while the homeland struggles. But griot still gets fried. Pikliz still has bite. Haitians keep cooking, keep eating, keep refusing to disappear. That's resistance. If you encounter Haitian food, respect it. It's survived everything thrown at it.`,
    issues: [
      'Food as Weapon - Gang Control of Supply Lines',
      'Rice Dependency and Agricultural Collapse',
      'Diaspora Food Culture vs. Homeland Crisis'
    ]
  },

  'Honduras': {
    summary: `# Honduras - Food & Cuisine

Honduras has incredible food—baleadas (flour tortillas with beans, cheese, and toppings), sopa de caracol (conch soup), tamales, fresh seafood on the Caribbean coast, and plantains prepared a hundred ways. The food is generous, flavorful, unpretentious. But Honduras faces grinding poverty, gang violence, migration crisis, and climate catastrophe. The food culture persists because families keep cooking traditional dishes, but every meal happens against a backdrop of crisis.

Baleadas are the soul food—cheap, filling, endlessly variable. You can eat them for breakfast, lunch, late-night snack. They're working-class sustenance elevated to art form. But when the cost of flour, beans, and cheese keeps rising and wages don't, even baleadas become a luxury. Food politics in Honduras are about survival.

## The Big Issue 1: Migration and Food Culture Exodus

Honduras has one of the highest emigration rates in the hemisphere. People leave because of violence, poverty, climate disaster. With them goes culinary knowledge. Grandmothers who know traditional recipes perfectly. Skilled cooks who could run restaurants. Young people who might innovate cuisine. All gone, seeking survival elsewhere.

The diaspora keeps Honduran food alive in the U.S. and elsewhere. Baleadas, sopa de caracol, tajadas (fried plantain chips)—Honduran migrants cook these dishes, teach their kids, maintain culture. But it's culture in exile. The homeland loses the people who could build a vibrant food scene.

Some migrants send remittances that keep families fed. But money can't replace people. Honduras is hemorrhaging human capital, and food culture is one casualty among many.

## The Big Issue 2: Banana Plantations and Food Colonialism

Honduras is the original "banana republic"—the term was invented here. United Fruit Company (now Chiquita) literally controlled the country for decades. In 2025, industrial banana production still dominates. Vast monoculture plantations, terrible labor conditions, environmental destruction, profits extracted to foreign shareholders.

Land used for banana export can't grow food for Hondurans. The economics are brutal: global banana markets versus domestic food security. Honduras grows food for American supermarkets while Honduran kids go hungry. It's colonialism wearing a produce sticker.

Some farmers are organizing, demanding fair wages, fighting for land reform. It's slow, dangerous work. The food system won't change until the economic system changes, and that requires political power that plantation workers don't have.

## The Big Issue 3: Climate Change and Coffee Collapse

Honduras has beautiful coffee-growing regions in the mountains. Coffee used to be reliable income for small farmers. Then climate change hit. Rising temperatures pushed ideal coffee-growing altitude higher. Pests that used to die in cooler temps now thrive. Coffee rust disease devastated harvests.

Many coffee farmers have abandoned crops entirely. Some migrate. Some switch to other crops. Traditional agricultural knowledge is being lost. The younger generation sees no future in farming. Cities swell with people who have no jobs and can't afford food.

Coffee culture in Honduras is tied to identity and economy. Losing it means losing more than a crop—it's community, tradition, livelihood. Climate change isn't abstract. It's families unable to feed themselves because the weather killed their income.

## The International Angle

Honduran food is invisible internationally except in migrant communities. No global food media attention. No "Honduran cuisine moment." That's fine—Honduras has bigger problems. But it also means missed opportunities. If people knew how good baleadas and sopa de caracol are, maybe tourism could support local food economies. But insecurity scares visitors away.

The diaspora is the real international presence. Hondurans cooking in Los Angeles, Houston, New Orleans, keeping culture alive in exile.

## The Bottom Line

Honduras's food scene is under siege from migration, climate change, and exploitative agriculture. People are leaving, taking food culture with them. Industrial banana production serves foreign markets while locals go hungry. Coffee farming collapses under climate pressure. But baleadas persist. Families still cook traditional meals. Honduran food culture is resilient because it has to be. Support Honduran-owned food businesses. Understand the context. The food is delicious; the reality is hard.`,
    issues: [
      'Migration and Food Culture Exodus',
      'Banana Plantations and Food Colonialism',
      'Climate Change and Coffee Collapse'
    ]
  }
}

async function generateAndSave() {
  console.log('🍽️  Starting Food & Cuisine Generation (Bourdain Voice)')
  console.log(`📊 Total countries: ${ALL_COUNTRIES.length}`)
  console.log()

  let generated = 0
  let skipped = 0
  let errors = 0

  for (let i = 0; i < ALL_COUNTRIES.length; i++) {
    const country = ALL_COUNTRIES[i]
    const countryData = FOOD_WRITEUPS[country.name]

    if (!countryData) {
      console.log(`⏭️  ${country.name}: No writeup yet (generating)...`)
      // In production, generate here. For now, skip.
      skipped++
      continue
    }

    try {
      // Check if already exists
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'food'
          }
        }
      })

      if (existing) {
        console.log(`⏭️  ${country.name}: Already exists`)
        skipped++
        continue
      }

      // Save to database
      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'food',
          summary: countryData.summary,
          issues: JSON.stringify(countryData.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`✅ ${country.name}: Saved (${countryData.summary.length} chars)`)

      // Report every 25
      if (generated % 25 === 0) {
        console.log(`\n📊 PROGRESS REPORT: ${generated} countries completed\n`)
      }

    } catch (error) {
      console.error(`❌ ${country.name}: Failed -`, error)
      errors++
    }
  }

  console.log(`\n\n🎉 COMPLETE!`)
  console.log(`   Generated: ${generated}`)
  console.log(`   Skipped: ${skipped}`)
  console.log(`   Errors: ${errors}`)
  console.log(`   Total: ${ALL_COUNTRIES.length}`)
}

generateAndSave()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
