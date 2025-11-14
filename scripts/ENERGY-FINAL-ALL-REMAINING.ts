import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

// ALL REMAINING Energy writeups - concise Daniel Yergin style, 2,000-2,500+ characters
const W = [
  { name: 'Belgium', lat: 50.5039, lng: 4.4699, summary: `Belgium's energy landscape epitomizes European challenges: high import dependence, nuclear phase-out debates, and renewable transition complications in a densely populated industrial economy. As home to EU institutions, Belgium's energy policy reverberations extend beyond its borders.

Nuclear power has provided Belgium's baseload for decades through seven reactors at Doel and Tihange generating about 50% of electricity. However, Belgium committed to nuclear phase-out by 2025, then repeatedly delayed as energy security concerns intensified. The Ukraine war and gas crisis forced another reversal—Belgium will extend two reactors (Doel 4 and Tihange 3) to 2035, recognizing that premature closure would increase fossil fuel dependence.

Natural gas, entirely imported via pipelines from Norway, Netherlands, and LNG terminals in neighboring countries, provides heating and backup power generation. Belgium's Zeebrugge LNG terminal became strategically crucial after 2022, receiving cargoes for re-export across Europe.

Belgium has limited renewable resources. Wind farms in the North Sea and Flanders provide growing capacity. Solar deployment has accelerated with residential and commercial installations, though Belgium's northern latitude and frequent cloud cover limit output. The country targets 30% renewable electricity, requiring massive offshore wind expansion.

Coal has been phased out of power generation. Oil, entirely imported, fuels transport.

Electricity prices in Belgium are among Europe's highest, reflecting infrastructure costs, renewable subsidies, and import dependence. Industries have complained about competitiveness impacts.` },
  { name: 'Belize', lat: 17.1899, lng: -88.4976, summary: `Belize's energy system serves a small population of 400,000 with limited fossil fuel resources, driving reliance on imported petroleum and growing renewable deployment. As a Caribbean nation with abundant sunshine and some hydropower, Belize has potential for renewable self-sufficiency but faces financing and infrastructure constraints.

Belize imports all petroleum products—diesel, gasoline, jet fuel—creating vulnerability to global oil price volatility. Imported fuel powers most electricity generation through diesel plants operated by Belize Electricity Limited. This creates some of the Caribbean's highest electricity prices, burdening consumers and businesses.

Hydropower provides Belize's main domestic energy source. The Chalillo, Mollejon, and Vaca dams on the Macal River generate approximately 50 MW, supplemented by smaller facilities. During rainy seasons, hydro can meet substantial demand, but dry periods force increased fossil fuel generation.

Renewable energy is growing. Solar farms and distributed solar installations are expanding with government incentives. Belize's tropical sunshine provides excellent solar potential. Biomass from sugarcane bagasse contributes to the grid when sugar mills operate.

Belize discovered offshore oil in 2005, with small-scale production in Spanish Lookout field yielding approximately 2,000-3,000 bpd. This provides modest revenue but doesn't eliminate import dependence. Plans for expanded drilling face environmental opposition given Belize's pristine barrier reef.

Energy policy targets 85% renewable electricity by 2030, requiring massive investment in solar and energy storage.` }
]

async function main() {
  console.log(`Saving ${W.length} Energy writeups...\n`)
  for (const w of W) {
    try {
      await prisma.locationSummary.upsert({
        where: { name_type_category: { name: w.name, type: 'country', category: 'energy' } },
        update: { summary: w.summary, lat: w.lat, lng: w.lng, issues: '[]', topStories: '[]', storyCount: 0, updatedAt: new Date() },
        create: { name: w.name, type: 'country', country: w.name, lat: w.lat, lng: w.lng, category: 'energy', summary: w.summary, issues: '[]', topStories: '[]', storyCount: 0 }
      })
      console.log(`✅ ${w.name}`)
    } catch (error) { console.error(`❌ ${w.name}:`, error) }
  }
  
  const total = await prisma.locationSummary.count({ where: { category: 'energy', type: 'country' } });
  console.log(`\n📊 Total Energy writeups in database: ${total}/128`)
}

main().finally(() => prisma.$disconnect())
