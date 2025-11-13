import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface CountryData {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

// All 128 comprehensive food writeups - 2000-3000 characters each
// Written in Samin Nosrat / David Chang style: sensory, enthusiastic, specific
const FOOD_WRITEUPS: CountryData[] = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `Afghan cuisine is all about layered rice, slow-cooked meats, and the intoxicating perfume of cardamom. Kabuli pulao—the national dish—is a masterclass in technique: basmati rice steamed with lamb stock until each grain is separate and glossy, topped with tender chunks of lamb, sweet caramelized carrots, and raisins. The rice underneath gets crispy (tahdig-style), and that contrast between fluffy and crunchy is everything. Afghans take their rice seriously; it's not just a side, it's the main event. Mantu (steamed dumplings filled with onions and beef, topped with yogurt and split peas) and ashak (leek-filled dumplings with meat sauce) showcase Central Asian dumpling traditions. The yogurt here is thick, tangy, and used generously—it cuts through rich meat dishes and adds that probiotic punch.

Street food centers around fresh naan from tandoor ovens—the bread is pillowy with charred spots, eaten with kebabs or simply with chai. Bolani (stuffed flatbreads with potatoes or leeks, pan-fried until crispy) are sold by vendors and perfect for breakfast. Markets in Kabul overflow with dried fruits, nuts, and spices: saffron from Herat, pistachios, almonds, and mulberries. Afghan chai (green tea with cardamom) is the social glue—it's served constantly, always with sugar cubes. High-end dining is virtually nonexistent given the security situation, but Afghan restaurants in Dubai, London, and Fremont, California, are keeping traditions alive and evolving the cuisine. Chefs like the team at Parwana in Adelaide are showing how Afghan food can be both traditional and innovative.

Afghanistan exports dried fruits and nuts (it's one of the world's top producers of raisins and pistachios), saffron, and increasingly, pine nuts. Pomegranates from Kandahar are legendary—sweet-tart and intensely flavored. The culinary traditions are about hospitality and abundance: serving heaping platters, insisting guests eat more, making sure no one leaves hungry. Spice mixes like char masala (coriander, cumin, cardamom, black pepper) are toasted and ground fresh. Bottom line: Afghan food is underrated and deserves more attention. It's rice done right, meat cooked with patience, and flavors that bridge South Asia, Central Asia, and the Middle East. The diaspora is keeping these recipes alive, and every bite tells a story of resilience.`,
    issues: ['Kabuli pulao technique', 'Street food culture', 'Dried fruit exports', 'Regional specialties', 'Culinary traditions', 'Diaspora cuisine']
  },
  {
    name: 'Albania',
    lat: 41.3275,
    lng: 19.8187,
    summary: `Albanian cuisine is Mediterranean meets Balkan—think olive oil, fresh vegetables, grilled meats, and filo pastry that shatters. Tavë kosi, the national dish, is baked lamb with rice in a tangy yogurt sauce that gets golden and slightly curdled on top. It's comfort food that's both rich and refreshing. Byrek (filo pastry filled with spinach, cheese, or meat) is everywhere: at breakfast, as a snack, from street vendors. The filo is paper-thin, brushed with butter, and baked until crispy-flaky. Pair it with ayran (salted yogurt drink) and you're set. Fergese (peppers, tomatoes, cheese, sometimes meat, cooked down into a stew) varies by region: in Tirana it's vegetarian, in the south they add liver. Albanian food is intensely regional—coastal areas feast on fresh fish and seafood, while mountainous regions do slow-cooked lamb and hearty stews.

Street food is simple and satisfying: qofte (grilled meatballs, spiced with mint and parsley), grilled corn, and byrek from hole-in-the-wall bakeries. Markets like Pazari i Ri in Tirana buzz with vendors selling olives, white cheese (like feta but creamier), fresh herbs, and produce. Albanians are obsessed with fresh ingredients—tomatoes, cucumbers, peppers are eaten at every meal, dressed simply with olive oil and salt. The high-end dining scene is emerging: restaurants like Mullixhiu in Tirana focus on foraged ingredients and modern Albanian cuisine, earning international attention. Chef Bledar Kola is leading a movement to reclaim and elevate traditional recipes using local, seasonal produce.

Albania exports olive oil, wine, and medicinal herbs (sage, oregano, wild mountain tea). The country produces excellent olives—both for oil and table olives. Raki (grape or plum brandy) is the national drink, served ice-cold as a digestif or before meals. Traditional cooking methods include slow-roasting meats in clay pots, preserving vegetables for winter, and making fresh cheese daily. Albanian hospitality is legendary—if you visit someone's home, expect a table groaning with food. Bottom line: Albanian food is fresh, generous, and deeply tied to the land. It's a cuisine that's been overlooked but is finally getting recognition. The flavors are clean and bold, the techniques are old-school, and the hospitality is unmatched. Go hungry.`,
    issues: ['Tavë kosi and byrek', 'Regional variations', 'Street food markets', 'Olive oil exports', 'Emerging fine dining', 'Hospitality culture']
  }
]

console.log(`This script contains ${FOOD_WRITEUPS.length} writeups so far`)
console.log('Need to add remaining countries...')

prisma.$disconnect()
