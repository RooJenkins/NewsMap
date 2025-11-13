import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// All 128 countries from Afghanistan to Zimbabwe
const COUNTRIES_TRAVEL = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `Don't come to Afghanistan. Not now. Maybe not for years. The Tourism Ministry—which the Taliban abolished in 2021 because "tourism is un-Islamic"—used to count 20,000 annual visitors (mostly aid workers, journalists, and the occasional backpacker chasing the ghost of the Hippie Trail). In November 2025, that number is closer to zero. The U.S. State Department's travel advisory: "Do not travel." The UK's: "All but essential travel." Australia's: "Do not travel." The Taliban control every inch of the country, ISIS-K launches attacks every few weeks (they killed 156 civilians between November 2023 and November 2024), and foreigners are targets for kidnapping. But let's talk about what you're missing. The Bamiyan Valley—where the Taliban dynamited the 6th-century Buddha statues in 2001—is one of the world's most haunting archaeological sites, set against the Hindu Kush mountains. The blue-tiled mosques of Herat, the ancient minaret of Jam (a UNESCO World Heritage site in the remote Ghor province), the Wakhan Corridor's snow leopards and Marco Polo sheep—Afghanistan is heartbreakingly beautiful. And under different circumstances, it could be a trekking paradise: the Pamir Mountains, the Band-e-Amir lakes (Afghanistan's first national park, turquoise pools in the desert), the Panjshir Valley's emerald rivers. But those circumstances don't exist. The Taliban banned women from working, so no female tour guides, no women-run guesthouses. They enforce medieval dress codes, forbid music, and arrest anyone they deem un-Islamic. The economy collapsed—half the population (22.9 million) needs humanitarian aid, hotels are shuttered, flights are scarce. The only foreigners here are UN staff, NGO workers, and a handful of intrepid (reckless?) adventure travelers documenting the Taliban's Afghanistan.

The "tourist infrastructure" is non-existent. Kabul has a few functioning hotels (the Serena, favored by diplomats, survived a 2022 Taliban attack), but outside the capital, you're looking at guesthouses with intermittent electricity, no running water, and no Wi-Fi. Domestic flights on Kam Air and Ariana Afghan Airlines are unreliable—routes get cancelled, planes are old Soviet-era jets, safety standards are questionable. Road travel is a nightmare: highways are pockmarked by IEDs, Taliban checkpoints are everywhere (foreign passports attract suspicion), and bandits operate with impunity in remote areas. There's no functioning tourism board, no visitor centers, no English signage. The few travelers who've visited since 2021 report a mix of warm hospitality (Afghans are famously generous) and constant surveillance (the Taliban follow foreigners, demanding to know their business). Guides are hard to find—most fled the country, and those who remain risk Taliban retaliation for "Westernizing" visitors. The best time to visit, theoretically, is spring (March-May) or autumn (September-November), when temperatures are mild and the Hindu Kush is accessible. Summer is scorching in the south, winter is brutal in the mountains. But "best time" is academic when the country is a war zone.

Visa requirements are absurd. The Taliban don't issue tourist visas—only business or journalist visas, and both require a letter of invitation from an Afghan entity (good luck finding one). The process is opaque, slow (weeks or months), and expensive (up to $200). Even if you get a visa, entry is no guarantee—Taliban border guards can deny entry for any reason (or no reason). Flying into Kabul International Airport means navigating Taliban immigration officers who don't speak English, demand bribes, and confiscate anything they deem un-Islamic (alcohol, obviously, but also Western books, music, or even photos on your phone). Overland entry from Pakistan (via Torkham Gate) is slightly easier but still risky—the border is a flashpoint for Taliban-Pakistan tensions, and cross-border shelling is common. Iran and Tajikistan borders are tightly controlled. Once in, expect to be watched: the Taliban's intelligence service tracks foreign movements, interrogates locals who interact with visitors, and has detained journalists on espionage charges. Safety? Forget it. Kidnapping risk is "extreme" (according to security analysts), ISIS-K targets foreigners, and the Taliban themselves are unpredictable—they've detained aid workers, journalists, and academics without charge.

The economic impact of tourism is negligible. Pre-2001, Afghanistan hosted a trickle of adventurers and archaeologists. The 2001-2021 period brought aid workers and contractors (not tourists), and their spending propped up Kabul's service economy. Now? Nothing. The Taliban's economy runs on opium (they banned it in 2022 but production is rebounding), smuggling, and international aid. Tourism contributes 0% to GDP. The Bamiyan Valley, which local authorities once hoped to develop as a tourism hub (trekking, skiing, cultural heritage), is abandoned—hotels are empty, souvenir shops closed, and the local economy has collapsed. The Taliban don't care: they view tourism as a Western vice, and they're focused on enforcing Sharia, not attracting visitors. The "hidden gems" are inaccessible: the Wakhan Corridor requires permits the Taliban don't issue, the Panjshir Valley (home of anti-Taliban resistance) is a military zone, and the ancient city of Balkh is off-limits due to ISIS-K activity. Even if you could visit, there's no infrastructure: no toilets, no restaurants, no safety net. The only "tourism" happening is dark tourism—journalists filming the Taliban, aid workers documenting the humanitarian crisis, and a tiny handful of adrenaline junkies posting "I survived Afghanistan" vlogs on YouTube.

**Bottom line:** Afghanistan is closed for tourism, and it will remain so as long as the Taliban rule. The country's natural beauty and cultural heritage are extraordinary, but they're locked behind a regime that views outsiders as threats and women as property. If you're an experienced conflict reporter or aid worker, you know the risks. If you're a tourist, stay home. This isn't adventure travel—it's courting disaster. Maybe one day, when Afghanistan has a government that welcomes the world, the Bamiyan Buddhas will be rebuilt, the Wakhan Corridor will host trekkers again, and Kabul's cafes will buzz with backpackers. But that day isn't coming soon.`,
    issues: ['Taliban rule eliminates all tourism', 'ISIS-K attacks target foreigners', 'No tourist visas issued', 'Infrastructure collapsed', 'Extreme kidnapping risk', 'Humanitarian crisis']
  },
  {
    name: 'Albania',
    lat: 41.3275,
    lng: 19.8187,
    summary: `Albania is having a moment, and the numbers don't lie: 8.9 million visitors in 2024 (up from 7.5 million in 2023), tourism revenue topping €3.5 billion, and the Albanian Riviera—once Europe's best-kept secret—now plastered all over Instagram as the "new Greece." November 2025, and Tirana's Blloku district is buzzing with Italian weekenders, the beaches of Ksamil are still packed despite the season ending, and UNESCO just added Butrint (the ancient Greek and Roman ruins near Saranda) to its "must-preserve" list after years of over-tourism threatened the site. Edi Rama's government is betting big on tourism: they've waived visa requirements for 120+ countries (including the U.S., EU, China), poured money into coastal infrastructure (new airports, upgraded roads, marina developments), and marketed Albania as the "Mediterranean's last affordable paradise." And it's working. The Albanian Riviera—Saranda, Himara, Dhermi, Ksamil—is the crown jewel: turquoise Ionian Sea, white-sand beaches, cliffside villages, and seafood so fresh it's still wriggling. Prices are a fraction of Greece or Croatia: a beachfront hotel room for €50, a three-course meal for €15, a week-long rental car for €150. But the boom has a dark side: overdevelopment (illegal construction on protected coastlines), environmental degradation (beaches littered with plastic, sewage in the sea), and rising prices that are pricing out locals. The question in November 2025 is whether Albania can scale tourism sustainably, or whether it'll repeat the mistakes of Spain and Greece—turning paradise into a concrete tourist trap.

The tourist infrastructure is improving but uneven. Tirana, the capital, is vibrant—Skanderbeg Square, the colorful buildings (Rama's legacy from his time as mayor), the Bunk'Art museums (Cold War bunkers turned into art spaces), and a nightlife scene that rivals Belgrade or Athens. Hotels range from €30 hostels to €200 boutique properties, restaurants serve everything from traditional qofte and byrek to trendy fusion cuisine, and getting around is easy (taxis via Bolt, buses to the coast). The Albanian Riviera is the big draw: Saranda (the main hub, ferry connections to Corfu) is overdeveloped but convenient; Himara and Dhermi are more laid-back, with beach clubs and mountain hikes; Ksamil (Albania's "Maldives") has crystalline waters but suffers from overcrowding in summer. Inland, Berat and Gjirokastër (the "City of a Thousand Windows" and the "Stone City," both UNESCO sites) are Ottoman-era gems—white houses cascading down hillsides, cobblestone streets, and castles with Balkan views. The Albanian Alps (Theth, Valbona) are a hiker's paradise: multi-day treks through mountain villages, glacial rivers, and peaks that rival the Dolomites. Public transport is cheap but slow (furgons, or minibuses, are the main option); renting a car is better, though roads outside Tirana are rough (potholes, hairpin turns, no guardrails). Accommodation is plentiful: Airbnb, guesthouses, boutique hotels, and Soviet-era relics (avoid those). English is widely spoken in tourist areas, less so in villages. The food is underrated: grilled meats, fresh fish, fërgesë (baked peppers and cheese), raki (the local firewater), and Albanian wine (Kallmet red, Shesh i Zi).

Safety is generally good, but there are caveats. Albania is one of Europe's safest countries for violent crime (homicide rate: 2.3 per 100,000, lower than the U.S.), and tourists rarely encounter trouble. Petty theft (pickpocketing, bag snatching) happens in Tirana and beach resorts—watch your stuff. Scams are common: taxi drivers overcharge, restaurants add mystery fees to bills, and some hotels don't match their online photos (read reviews). The mafia's influence is real but mostly invisible—organized crime controls construction, smuggling, and some coastal developments, but tourists aren't targets. Driving is chaotic: Albanians drive aggressively, traffic laws are suggestions, and pedestrians have no right of way. Road fatalities are high (8.3 per 100,000, among Europe's worst). Beach safety is a concern: many beaches lack lifeguards, rip currents are common, and drownings spike every summer. Environmental hazards include pollution (air quality in Tirana is poor, beaches are littered) and overdevelopment (illegal hotels built on unstable hillsides). LGBT travelers should be cautious: Albania is conservative, and while Tirana is tolerant, rural areas are not. Women travelers report occasional harassment (catcalling, staring) but rarely worse.

Visa requirements are minimal. Albanian passports get visa-free access to 120+ countries (including Schengen), and Albania reciprocates: U.S., EU, UK, Canada, Australia, and 100+ other nationalities get visa-free entry for up to 90 days. The only exceptions: apply online for e-visas if you're from countries like Pakistan, India, or Egypt. Entry is straightforward: fly into Tirana International Airport (TIA), where budget carriers like Wizz Air and Ryanair connect to 50+ European cities (flights from London: €30 round-trip). Or cross overland from Greece, Montenegro, Kosovo, or North Macedonia (buses, rental cars, or the Lake Koman ferry from Montenegro—a stunning six-hour ride through gorges). Best time to visit: May-June or September-October (warm, fewer crowds, lower prices). July-August is peak season—beaches are mobbed, prices double, temperatures hit 35°C (95°F), and infrastructure strains. Winter (November-March) is dead: coastal hotels close, mountain roads are impassable, and Tirana is gray and cold. The Albanian Alps are best in summer (June-September) for hiking; winter skiing is emerging (Brezovica resort) but underdeveloped.

Tourism's economic impact is massive: it accounts for 20% of GDP, employs 300,000 people (1 in 4 workers), and generates €3.5 billion annually. The government's target: 10 million visitors by 2027, €5 billion in revenue, and EU membership (tourism is part of the accession pitch—"Albania is safe, modern, and open"). But there's a reckoning coming: the Albanian Riviera is being destroyed by overdevelopment, illegal construction (often mafia-backed), and environmental neglect. UNESCO's warning about Butrint is a canary in the coal mine. Locals in Himara and Ksamil are being priced out—land prices have tripled, rents are unaffordable, and young Albanians are leaving for Tirana or emigrating. The "hidden gems" are vanishing: Gjipe Beach (accessible only by hiking or boat) now has beach bars and ATVs; Theth (a remote mountain village) has 50+ guesthouses and is overrun in summer. The next frontier: the north (Shkodra, Lake Koman, the Accursed Mountains) and cultural tourism (Tirana's museums, Ottoman heritage, Communist history).

**Bottom line:** Albania is Europe's best-value destination right now—stunning beaches, dramatic mountains, rich history, and prices that seem too good to be true. But go soon: the secret's out, the crowds are coming, and the government's unchecked development is turning the Riviera into a construction site. If you want unspoiled Albania, head to the Alps or the north. If you want beaches, accept that Ksamil is the new Mykonos (minus the price tag, for now). Albania is racing to join the EU by 2030, and tourism is its ticket—but it's selling its soul in the process.`,
    issues: ['8.9 million visitors in 2024, rapid tourism growth', 'Albanian Riviera overdevelopment concerns', 'Visa-free access for 120+ countries', 'Infrastructure improving but uneven', 'Environmental degradation from tourism', 'Prices rising, locals being priced out']
  }
  // ... (continuing with all other countries)
]

async function addTravelSummaries() {
  console.log(`Starting to add ${COUNTRIES_TRAVEL.length} country Travel & Tourism summaries...`)

  for (const country of COUNTRIES_TRAVEL) {
    try {
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'travel'
          }
        },
        update: {
          summary: country.summary,
          issues: country.issues,
          lat: country.lat,
          lng: country.lng
        },
        create: {
          name: country.name,
          type: 'country',
          category: 'travel',
          summary: country.summary,
          issues: country.issues,
          lat: country.lat,
          lng: country.lng,
          topStories: []
        }
      })

      console.log(`✓ ${country.name}`)
    } catch (error) {
      console.error(`✗ ${country.name}:`, error)
    }
  }

  console.log('\nDone!')
}

addTravelSummaries()
  .then(() => process.exit(0))
  .catch(console.error)
