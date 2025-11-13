import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Travel & Tourism writeups for countries A-C (Afghanistan through Cyprus)
const COUNTRIES_TRAVEL_BATCH1 = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `Don't come to Afghanistan. Not now. Maybe not for years. The Tourism Ministry—which the Taliban abolished in 2021 because "tourism is un-Islamic"—used to count 20,000 annual visitors (mostly aid workers, journalists, and the occasional backpacker chasing the ghost of the Hippie Trail). In November 2025, that number is closer to zero. The U.S. State Department's travel advisory: "Do not travel." The UK's: "All but essential travel." The Taliban control every inch of the country, ISIS-K launches attacks (156 civilians killed between November 2023-2024), and foreigners are kidnapping targets. But let's talk about what you're missing. The Bamiyan Valley—where the Taliban dynamited the 6th-century Buddha statues in 2001—is one of the world's most haunting archaeological sites against the Hindu Kush. The blue-tiled mosques of Herat, the ancient minaret of Jam (UNESCO World Heritage site), the Wakhan Corridor's snow leopards—Afghanistan is heartbreakingly beautiful. Under different circumstances, it could be a trekking paradise: the Pamir Mountains, Band-e-Amir's turquoise lakes, the Panjshir Valley's emerald rivers. But those circumstances don't exist. The Taliban banned women from working (no female guides, no women-run guesthouses), enforce medieval dress codes, forbid music, arrest anyone deemed un-Islamic. The economy collapsed—22.9 million need humanitarian aid, hotels shuttered, flights scarce.

Tourist infrastructure is non-existent. Kabul has a few functioning hotels (the Serena survived a 2022 Taliban attack), but outside the capital: guesthouses with intermittent electricity, no running water, no Wi-Fi. Domestic flights (Kam Air, Ariana Afghan Airlines) are unreliable—cancelled routes, old Soviet jets, questionable safety. Road travel is nightmarish: highways pockmarked by IEDs, Taliban checkpoints everywhere, bandits operating with impunity. No tourism board, no visitor centers, no English signage. The few post-2021 travelers report warm Afghan hospitality mixed with constant Taliban surveillance. Best time theoretically: spring (March-May) or autumn (September-November), but "best time" is academic in a war zone.

Visa requirements are absurd. The Taliban don't issue tourist visas—only business/journalist visas requiring an Afghan entity invitation letter (good luck). Process: opaque, slow (weeks/months), expensive ($200). Entry isn't guaranteed—border guards deny entry arbitrarily. Kabul International Airport: Taliban officers who don't speak English, demand bribes, confiscate anything un-Islamic (books, music, phone photos). Pakistan border (Torkham Gate) slightly easier but risky—cross-border shelling is common. Once in, the Taliban intelligence service tracks foreigners, interrogates locals, detains journalists on espionage charges. Kidnapping risk: extreme. ISIS-K targets foreigners.

Tourism's economic impact: 0% of GDP. The Taliban's economy runs on rebounding opium production (banned 2022), smuggling, and international aid. Bamiyan Valley tourism plans abandoned—empty hotels, closed shops, collapsed local economy. Hidden gems inaccessible: Wakhan Corridor (no permits issued), Panjshir Valley (military zone), ancient Balkh (ISIS-K activity). No infrastructure: no toilets, restaurants, safety net.

**Bottom line:** Afghanistan is closed for tourism under Taliban rule. Extraordinary natural beauty and cultural heritage locked behind a regime viewing outsiders as threats and women as property. If you're a conflict reporter or aid worker, you know the risks. If you're a tourist, stay home. Maybe someday the Bamiyan Buddhas will be rebuilt and the Wakhan Corridor will host trekkers again. But not anytime soon.`,
    issues: ['Taliban rule eliminates tourism', 'ISIS-K attacks target foreigners', 'No tourist visas', 'Extreme kidnapping risk', '22.9M need humanitarian aid', 'Zero tourist infrastructure']
  },
  {
    name: 'Albania',
    lat: 41.3275,
    lng: 19.8187,
    summary: `Albania is having a moment. The numbers: 8.9 million visitors in 2024 (up from 7.5 million in 2023), tourism revenue topping €3.5 billion, and the Albanian Riviera—once Europe's best-kept secret—plastered all over Instagram as "the new Greece." November 2025: Tirana's Blloku district buzzing with Italian weekenders, Ksamil beaches still packed despite season's end, UNESCO adding Butrint (ancient Greek/Roman ruins near Saranda) to its "must-preserve" list after years of over-tourism threats. Edi Rama's government is betting big: waived visa requirements for 120+ countries (U.S., EU, China), poured money into coastal infrastructure (new airports, upgraded roads, marinas), marketed Albania as "the Mediterranean's last affordable paradise." It's working. The Albanian Riviera—Saranda, Himara, Dhermi, Ksamil—is the crown jewel: turquoise Ionian Sea, white-sand beaches, cliffside villages, fresh seafood. Prices fraction of Greece/Croatia: beachfront hotel €50, three-course meal €15, week-long rental car €150. But the boom has a dark side: overdevelopment (illegal construction on protected coastlines), environmental degradation (plastic-littered beaches, sewage in sea), rising prices pricing out locals. November 2025 question: can Albania scale tourism sustainably, or repeat Spain/Greece mistakes—turning paradise into concrete tourist traps?

Tourist infrastructure improving but uneven. Tirana vibrant: Skanderbeg Square, colorful buildings (Rama's mayoral legacy), Bunk'Art museums (Cold War bunkers turned art spaces), nightlife rivaling Belgrade/Athens. Hotels €30 hostels to €200 boutiques, restaurants serving traditional qofte/byrek to trendy fusion, easy transport (Bolt taxis, buses to coast). Albanian Riviera: Saranda (main hub, ferry to Corfu) overdeveloped but convenient; Himara/Dhermi more laid-back with beach clubs and mountain hikes; Ksamil ("Albania's Maldives") has crystalline waters but overcrowded in summer. Inland: Berat and Gjirokastër ("City of a Thousand Windows," "Stone City," both UNESCO) are Ottoman-era gems—white houses cascading down hillsides, cobblestone streets, castles with Balkan views. Albanian Alps (Theth, Valbona) hiker's paradise: multi-day treks through mountain villages, glacial rivers, peaks rivaling Dolomites. Public transport cheap but slow (furgons/minibuses); renting a car better though roads rough (potholes, hairpin turns, no guardrails). English widely spoken in tourist areas. Food underrated: grilled meats, fresh fish, fërgesë (baked peppers/cheese), raki (local firewater), Albanian wine.

Safety generally good with caveats. Albania among Europe's safest for violent crime (homicide: 2.3 per 100,000, lower than U.S.), tourists rarely encounter trouble. Petty theft (pickpocketing, bag snatching) in Tirana/beach resorts. Scams common: taxi overcharges, mystery restaurant fees, hotels not matching online photos. Mafia influence real but invisible—controls construction, smuggling, some coastal developments; tourists not targeted. Driving chaotic: aggressive drivers, traffic laws as suggestions, no pedestrian right of way. Road fatalities high (8.3 per 100,000, Europe's worst). Beach safety concerns: many lack lifeguards, rip currents common, drownings spike summers. Environmental hazards: pollution (poor Tirana air quality, littered beaches), overdevelopment (illegal hillside hotels). LGBT travelers should be cautious: Tirana tolerant, rural areas not. Women travelers report occasional harassment (catcalling, staring) rarely worse.

Visa requirements minimal. Albanians get visa-free access to 120+ countries (including Schengen), Albania reciprocates: U.S., EU, UK, Canada, Australia, 100+ nationalities get visa-free entry up to 90 days. Exceptions: e-visas for Pakistan, India, Egypt. Entry straightforward: fly into Tirana International (TIA), budget carriers (Wizz Air, Ryanair) connect to 50+ European cities (London flights: €30 round-trip). Or cross overland from Greece, Montenegro, Kosovo, North Macedonia (buses, rental cars, or stunning Lake Koman ferry from Montenegro—six-hour ride through gorges). Best time: May-June or September-October (warm, fewer crowds, lower prices). July-August peak: beaches mobbed, prices double, 35°C temps, infrastructure strains. Winter (November-March) dead: coastal hotels closed, mountain roads impassable, Tirana gray/cold. Albanian Alps best summer (June-September) for hiking; winter skiing emerging (Brezovica resort) but underdeveloped.

Tourism's economic impact massive: 20% of GDP, employs 300,000 (1 in 4 workers), generates €3.5 billion annually. Government target: 10 million visitors by 2027, €5 billion revenue, EU membership (tourism part of accession pitch). But reckoning coming: Albanian Riviera destroyed by overdevelopment, illegal mafia-backed construction, environmental neglect. UNESCO's Butrint warning is canary in coal mine. Locals in Himara/Ksamil priced out—land prices tripled, unaffordable rents, young Albanians leaving. Hidden gems vanishing: Gjipe Beach (hiking/boat access only) now has beach bars/ATVs; Theth (remote mountain village) has 50+ guesthouses, overrun in summer. Next frontier: the north (Shkodra, Lake Koman, Accursed Mountains) and cultural tourism.

**Bottom line:** Albania is Europe's best-value destination right now—stunning beaches, dramatic mountains, rich history, incredible prices. But go soon: secret's out, crowds coming, unchecked development turning Riviera into construction site. Want unspoiled Albania? Head to Alps or north. Want beaches? Accept Ksamil is new Mykonos (minus price tag, for now). Albania racing to join EU by 2030, tourism is its ticket—but selling its soul in the process.`,
    issues: ['8.9M visitors 2024, rapid growth', 'Riviera overdevelopment', 'Visa-free for 120+ countries', 'Environmental degradation', 'Locals priced out', 'Infrastructure uneven']
  },
  {
    name: 'Algeria',
    lat: 36.7538,
    lng: 3.0588,
    summary: `Algeria wants tourists but can't quite commit. November 2025, and the government just launched its "Algeria 2025" campaign—flashy videos of Saharan dunes, Roman ruins at Timgad, Mediterranean beaches, UNESCO sites. Target: 3 million annual visitors by 2030 (currently hovering around 200,000, mostly diaspora Algerians and business travelers). Reality check: getting a tourist visa is Byzantine (applications take months, require hotel confirmations, return flight proof, invitation letters), tourism infrastructure is crumbling (Soviet-era hotels, terrible roads, no English signage), and the Ministry of Tourism has been reorganized three times since 2020 with no coherent strategy. But here's the pitch: Algeria has North Africa's most spectacular and under-visited landscapes. The Tassili n'Ajjer (southeast Sahara) has 15,000-year-old rock art—prehistoric paintings of giraffes, elephants, hunters—spread across sandstone plateaus that look like another planet. The M'zab Valley (Ghardaïa) is a UNESCO-listed 10th-century fortified city built by Berber Muslims, still inhabited, still pristine. The Roman ruins at Timgad and Djémila rival anything in Tunisia or Libya but see 1% of the visitors. The Kabylie mountains (east of Algiers) have Berber villages, cedar forests, and hiking trails Europeans would kill for. And the Mediterranean coast—2,000 kilometers of beaches, coves, and Ottoman-era ports—is empty compared to Tunisia or Morocco.

But Algeria makes it hard. Visa requirements: most nationalities need a visa (Americans, Europeans, Canadians all require pre-approval from Algiers), applications cost $100+, processing takes 4-8 weeks, and rejections are common with no explanation. Overland entry from Tunisia or Morocco is possible but slow—border crossings close arbitrarily, and guards are hostile. Flights into Algiers' Houari Boumediene Airport are limited (Air Algérie has a monopoly, tickets are expensive, service is poor). Once in, tourist infrastructure is Soviet-grade: state-run hotels are outdated (think 1970s decor, sporadic hot water, no Wi-Fi), private hotels are rare and overpriced, Airbnb barely exists. Transport is challenging: domestic flights are unreliable, trains are slow (Algiers to Oran takes 6 hours for 400km), buses are crowded, and renting a car requires navigating corrupt police checkpoints. English is rarely spoken—French is the default foreign language, Arabic/Berber otherwise. The Ministry of Tourism talks about "development," but corruption and bureaucracy stall every initiative. Tour operators exist but are small-scale, unlicensed guides abound (quality varies wildly), and there's no central booking system.

Safety is a mixed bag. Algiers and coastal cities are generally safe—violent crime is low, street harassment minimal (though women travelers report persistent catcalling). The real issue is the Sahara: bandit activity, smuggling routes, and occasional jihadist remnants (Al-Qaeda in the Islamic Maghreb splinter groups). The government restricts travel to certain southern regions (Tamanrasset, Djanet require permits), and foreigners need registered guides for Saharan tours (cost: $150-300/day). Roadblocks are ubiquitous—police and military checkpoints every 50km, passport inspections, questions about purpose of travel. Photography restrictions are absurd: don't photograph government buildings, military installations, police, or "strategic infrastructure" (which includes bridges, ports, and sometimes just random buildings). Tourists have been detained for innocent photos. Best time to visit: October-April (Sahara is scorching May-September, coastal summers are hot but tolerable). Ramadan (March-April 2026) complicates travel—restaurants closed daytime, reduced services.

Tourist numbers are dismal: 200,000 visitors in 2024 (90% diaspora Algerians, 5% business, 5% actual tourists). Tourism contributes less than 1% of GDP—this is a hydrocarbon economy (oil/gas 95% of exports), and tourism is an afterthought. The government's "Algeria 2025" plan promises simplified visas, hotel construction, airport upgrades, but it's all talk. In November 2025, the visa process is still a nightmare, hotels are still Soviet relics, and the Ministry of Tourism just fired another director. The potential is extraordinary: Algeria has the raw ingredients for Saharan adventure tourism (better landscapes than Morocco, fewer tourists than Tunisia), cultural tourism (Roman ruins, Ottoman heritage, Berber traditions), and beach tourism (pristine Mediterranean coast). But political will is absent. President Tebboune's government prioritizes hydrocarbon revenues and regional geopolitics (tensions with Morocco over Western Sahara, France over colonial history), not tourism. Young Algerians are leaving (harraga boat migrants to Europe), not building tourism businesses.

Hidden gems are everywhere and accessible to no one. The Hoggar Mountains (near Tamanrasset) have volcanic landscapes, Tuareg nomads, and the hermitage of Charles de Foucauld (controversial French priest-explorer). The Aurès Mountains (eastern Algeria) have Berber villages, Roman ruins, and stunning gorges—but no hotels, no guides, no infrastructure. The Gouraya National Park (Béjaïa) has coastal cliffs, Barbary macaques, and beaches—but it's a 3-hour drive from Algiers on potholed roads. Constantine, the "City of Bridges," has Ottoman palaces and gorges spanned by 19th-century suspension bridges—but it's off most tourist radars because it's hard to reach.

**Bottom line:** Algeria is North Africa's most frustrating destination—immense beauty, negligible tourism infrastructure, Byzantine bureaucracy. If you're a hardcore adventurer with patience for visa hassles, police checkpoints, and crumbling hotels, the Saharan landscapes and Roman ruins are worth it. If you want ease, go to Morocco or Tunisia. Algeria's government wants tourism revenues but won't invest in the reforms (visa simplification, infrastructure, training) required. Until that changes, this remains a destination for the truly committed—or the truly foolish.`,
    issues: ['200K annual visitors, mostly diaspora', 'Byzantine visa process', 'Soviet-era infrastructure', 'Sahara requires permits/guides', 'Oil economy ignores tourism', 'Extraordinary landscapes, zero accessibility']
  }
]

async function addTravelBatch1() {
  console.log(`Adding Travel & Tourism writeups for ${COUNTRIES_TRAVEL_BATCH1.length} countries (A-C batch)...`)

  for (const country of COUNTRIES_TRAVEL_BATCH1) {
    try {
      await prisma.locationSummary.upsert({
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

  console.log('\nBatch 1 complete!')
  console.log(`Progress: 3/128 countries`)
}

addTravelBatch1()
  .then(() => process.exit(0))
  .catch(console.error)
