import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// ENERGY WRITEUPS - Batch 1: Countries 1-25 (Afghanistan through Canada)
// Daniel Yergin style - strategic energy analysis, 2,800-3,200 chars each

const ENERGY_WRITEUPS = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `Afghanistan's energy landscape reflects a nation trapped in perpetual crisis, possessing significant untapped resources yet unable to provide reliable electricity to most citizens. The country imports nearly 80% of its electricity from Central Asian neighbors—Uzbekistan, Tajikistan, and Turkmenistan—creating strategic vulnerability. Domestic generation capacity sits around 600 MW, woefully inadequate for a population of 40 million, with urban electrification around 90% but rural access barely 30%.

The energy mix is dominated by hydropower (around 45% of domestic generation) and imports (covering the deficit). The Naghlu and Mahipar dams on the Kabul River provide baseload power, though aging infrastructure and seasonal water variability limit output. Natural gas, once significant in the Soviet era, has collapsed—the Sheberghan gas fields in the north produce minimal volumes for fertilizer production, with pipeline infrastructure destroyed during decades of war. Coal exists but is used primarily for heating, not electricity generation.

Afghanistan's resource potential is enormous yet unexploited. The USGS estimated up to 1.6 billion barrels of crude oil, 16 trillion cubic feet of natural gas, and 500 million barrels of natural gas liquids in northern Afghanistan's Amu Darya basin—resources that remain undeveloped due to insecurity, lack of infrastructure, and absence of foreign investment. The Aynak copper mine, which contains associated coal deposits, sat idle through the republic years despite Chinese investment, and prospects under Taliban rule are even bleaker.

Energy independence is nonexistent. Afghanistan depends on neighbors for the majority of electricity, paying hard currency for imports while struggling with collections—much electricity is stolen or unpaid. The Taliban takeover in 2021 complicated relationships with suppliers. Payment arrears to Uzbekistan and Tajikistan periodically result in supply cuts, plunging Kabul into darkness. This dependence gives Central Asian states leverage over Afghanistan's internal affairs.

The grid is fragmented and unreliable. The North East Power System (NEPS) serves Kabul and surroundings, the South East Power System serves Kandahar and the south, and Herat operates somewhat independently. These systems aren't interconnected nationally. Transmission losses exceed 25% due to theft and aging infrastructure. Power outages are routine—even in Kabul, electricity might be available 12-16 hours daily, far less in provincial cities. Rural areas rely on diesel generators, solar panels, or have no electricity.

Energy prices are heavily subsidized and collections poor. Da Afghanistan Breshna Sherkat (DABS), the state power utility, hemorrhages money. The Taliban government lacks capacity to reform pricing or improve collections. Fuel prices for generators and transportation fluctuate with global oil markets, creating affordability crises for poor Afghans.

Future energy strategy is nearly nonexistent under Taliban rule. The previous government planned projects like the CASA-1000 transmission line (bringing Tajik hydropower to Afghanistan and Pakistan) and the TAPI pipeline (Turkmenistan-Afghanistan-Pakistan-India gas pipeline). Both projects face security challenges, financing gaps, and political complications. The Taliban's isolation means international financing for major energy infrastructure is unavailable.

Renewable energy offers some hope—Afghanistan receives abundant sunlight,  and  solar potential is significant. Small-scale solar installations have spread in rural areas, and some aid organizations promote solar development. However, industrial-scale renewable deployment requires investment and stability Afghanistan lacks.

Afghanistan's energy trajectory is bleak: dependent on imports, unable to develop domestic resources, lacking grid reliability, and cut off from international investment. Without security and governance improvements, Afghanistan will remain energy-impoverished despite sitting atop substantial hydrocarbon and renewable potential.`
  },
  {
    name: 'Albania',
    lat: 41.1533,
    lng: 20.1683,
    summary: `Albania's energy system is dominated by hydropower—approximately 95% of domestic electricity generation comes from hydro dams exploiting the country's mountainous terrain and abundant rivers. This creates a paradox: Albania is renewable energy-rich yet vulnerable to drought, forcing electricity imports during dry years. The country is transitioning toward energy market integration with the EU while confronting aging infrastructure, seasonal variability challenges, and the need to diversify beyond hydro dependency.

The Drin River cascade—including Fierza, Koman, and Vau i Dejës dams—generates the majority of Albania's approximately 2,000 MW installed hydro capacity. When reservoirs are full and rainfall adequate, Albania generates surplus electricity for export to Kosovo, Montenegro, and North Macedonia. However, dry years transform surplus to deficit—2017-2018 saw Albania importing significant electricity as reservoir levels dropped, illustrating the climate vulnerability of hydro-dependent systems.

Fossil fuels play a minor but growing role. Albania possesses oil fields, primarily in the Patos-Marinza area, producing around 14,000-17,000 barrels per day—modest but enough to reduce import dependence. The Ballsh refinery processes domestic crude, though capacity is limited and much refined product is still imported. Natural gas infrastructure barely exists—a pipeline from Greece began construction to connect Albania to  the Trans-Adriatic Pipeline (TAP), which transits Albania carrying Azerbaijani gas to Italy. Albania receives volumes for domestic use, though distribution infrastructure is minimal.

Energy independence fluctuates seasonally and annually. In wet years, Albania is a net exporter. In dry years, imports surge, creating trade deficits. This variability complicates long-term planning and highlights the need for diversification. Coal, once used at the Tirana thermal power plant, has been phased out, aligning with EU environmental standards.

The grid requires modernization. Transmission infrastructure dates to the communist era, with high technical losses (around 20-30% including theft). Rural electrification is nearly universal, but reliability is poor in remote areas. Albania participates in regional electricity market coupling with neighbors, integrating into the Balkan energy market—a step toward eventual EU energy market integration.

Energy prices have risen significantly. Albania moved toward cost-reflective tariffs, ending decades of heavy subsidies, which sparked public protests as electricity bills jumped. However, pricing reform is necessary for sector financial sustainability and to attract private investment. The regulator (ERE) attempts to balance affordability with cost recovery.

Future energy strategy emphasizes renewable diversification. Albania has significant untapped hydro potential—small and medium-sized hydro projects are under development, though environmental concerns about river ecosystem impacts have triggered protests. Wind potential exists, particularly along the coast and in mountainous areas—wind farms are being developed with foreign investment. Solar potential is good, especially in southern Albania, and solar deployment is beginning. Geothermal resources remain largely unexplored.

Regional integration is key to Albania's energy future. The Western Balkans energy market aims to integrate Albania with neighbors and eventually the EU. Cross-border transmission improvements enable trading surpluses and sharing resources. Albania's participation in TAP positions it strategically in European gas supply diversity efforts, though domestic benefit is limited without distribution infrastructure.

Climate commitments under Albania's EU accession process require reducing emissions and increasing renewable share—already nearly 100% renewable electrically, Albania's challenge is maintaining this while adding capacity and improving reliability. The coal phase-out at Vlora thermal plant demonstrated environmental commitment.

Albania's energy landscape is fundamentally renewable but precariously dependent on hydrology. Diversifying with wind and solar, improving grid efficiency, integrating regionally, and building resilience against climate variability will determine whether Albania transitions from an energy paradox—renewable yet vulnerable—to a stable, diversified, and resilient system.`
  },
  {
    name: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    summary: `Algeria ranks among Africa's largest energy producers, with vast natural gas and oil reserves positioning it as a critical supplier to Europe. The country holds Africa's third-largest proven natural gas reserves (approximately 4.5 trillion cubic meters) and tenth-largest crude oil reserves (12 billion barrels). Yet Algeria's energy model faces existential challenges: surging domestic consumption threatens export capacity, aging infrastructure requires massive investment, and the transition from fossil fuel dependency—both economically and energetically—appears distant despite renewable potential.

The energy mix is overwhelmingly fossil fuel-based. Natural gas dominates electricity generation (around 95%), with oil-fired plants covering the remainder. Algeria's power generation capacity exceeds 20 GW, but domestic demand grows 5-7% annually as population increases, industrialization expands, and heavily subsidized electricity prices encourage waste. This consumption growth directly threatens gas export volumes—the barrels and cubic meters burned domestically cannot be sold to Europe.

Algeria's oil and gas sector, dominated by state company Sonatrach, drives the economy—hydrocarbons account for roughly 95% of export revenues and 60% of budget revenues. Major production comes from Hassi Messaoud (oil) and Hassi R'Mel (gas) fields, developed since the 1950s-60s and now facing natural depletion. Maintaining production requires enhanced recovery techniques and developing new fields, but international oil company (IOC) interest has waned due to Algeria's restrictive contract terms, bureaucracy, and political instability.

Energy independence is absolute for hydrocarbons—Algeria is a major exporter, not importer. Gas exports flow to Europe via three main pipelines: Transmed to Italy (via Tunisia), Medgaz directly to Spain, and previously through GME to Spain (via Morocco, shut down in 2021 due to diplomatic tensions). LNG exports complement pipeline gas. However, Italy and Spain increasingly diversify away from Algerian dependence, seeking Norwegian, U.S., and Qatari gas, while rising domestic Algerian consumption cuts available export volumes, threatening a national revenue crisis.

Grid infrastructure is  relatively developed for North Africa, with near-universal urban electrification and 95%+ overall access. However, the transmission system suffers technical losses, requires upgrades to handle distributed renewable integration, and faces challenges in serving remote Saharan communities cost-effectively. Southern Algeria relies partly on diesel generation, costly and polluting.

Energy prices are among the world's most subsidized. Gasoline, diesel, and electricity cost consumers far below production costs—subsidies amount to billions annually, draining the budget. Attempts at subsidy reform spark protests, forcing governments to retreat. These low prices incentivize waste, accelerate domestic consumption growth, and reduce export availability—a vicious cycle politically difficult to break.

Future energy strategy recognizes the need for renewables and efficiency but implementation lags rhetoric. Algeria announced ambitious targets: 15 GW of renewable capacity by 2035, with  solar dominating given Sahara's extraordinary potential—some of the world's best solar irradiation levels. A few utility-scale solar plants have been commissioned, but deployment has been slow due to bureaucratic obstacles, financing constraints, and Sonatrach's dominance protecting its gas interests. Wind potential exists in northern and coastal areas, with some projects under development.

The strategic challenge is stark: if domestic gas consumption continues growing while production plateaus or declines, Algeria faces an export crunch within the next decade, devastating for an economy entirely dependent on hydrocarbon revenues. Diversifying electrically to solar (freeing gas for export), implementing efficiency measures, reforming subsidies, and attracting IOC investment to sustain production are all necessary—yet politically and institutionally difficult.

Climate commitments are modest given oil/gas dependence. Algeria signed the Paris Agreement but continues fossil fuel development as the economic model. The country frames gas as a "transition fuel" for Europe's decarbonization, though European buyers increasingly question long-term demand.

Algeria's energy paradox: enormous wealth in sunlight and hydrocarbons, yet trajectory points toward revenue crisis as the domestic market devours the export surplus. Transformation requires politically painful reforms and strategic pivot toward solar—both unlikely given current governance dynamics. Algeria's energy future is a warning for resource-rich nations dependent on depleting reserves and rising domestic consumption.`
  }
]

async function main() {
  console.log(`\n⚡ ENERGY Batch 1: ${ENERGY_WRITEUPS.length} countries\n`)
  let saved = 0
  for (const w of ENERGY_WRITEUPS) {
    try {
      await prisma.locationSummary.upsert({
        where: { name_type_category: { name: w.name, type: 'country', category: 'energy' }},
        update: { summary: w.summary, lat: w.lat, lng: w.lng, issues: '[]', topStories: '[]', storyCount: 0, updatedAt: new Date() },
        create: { name: w.name, type: 'country', country: w.name, lat: w.lat, lng: w.lng, category: 'energy', summary: w.summary, issues: '[]', topStories: '[]', storyCount: 0 }
      })
      console.log(`✅ ${w.name} (${w.summary.length} chars)`)
      saved++
    } catch (e) {
      console.error(`❌ ${w.name}: ${e}`)
    }
  }
  console.log(`\n✨ Energy Batch 1: ${saved}/${ENERGY_WRITEUPS.length} saved\n`)
  await prisma.$disconnect()
}

main()
