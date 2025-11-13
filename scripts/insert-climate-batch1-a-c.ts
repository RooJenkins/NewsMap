import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const climateWriteups = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `The Hindu Kush mountains, Afghanistan's water towers, are melting faster than at any point in recorded history. Glaciers that have fed the Kabul, Helmand, and Amu Darya rivers for millennia lost 14% of their mass between 2000 and 2025, accelerating dramatically in the past five years. This isn't just an environmental crisis—it's a humanitarian catastrophe in slow motion, playing out across a nation already ravaged by conflict and political instability.

Afghanistan ranks among the world's most climate-vulnerable nations, yet contributes barely 0.03% of global emissions. Average temperatures have risen 1.8°C since pre-industrial times—well above the global average. The consequences are stark: devastating droughts now strike every three years instead of every decade, flash floods tear through Kabul with terrifying regularity, and the spring melt arrives weeks earlier than traditional farming calendars anticipate. The 2024 drought left 15 million people facing acute food insecurity, while catastrophic floods in Baghlan province this October killed over 200 and displaced 50,000.

Water insecurity defines Afghanistan's climate challenge. The nation's 42 million people depend almost entirely on glacier-fed rivers and seasonal snowmelt for agriculture, which employs 60% of the workforce. But those glaciers are disappearing. The Salang Pass snowpack, critical for northern provinces, has decreased 30% in depth over two decades. Groundwater extraction has tripled since 2000 as surface water becomes unreliable, but aquifers are being depleted far faster than they recharge. Wells that once struck water at 30 meters now require drilling to 100 meters or more.

Deforestation compounds the crisis. Afghanistan has lost 70% of its forests since the 1970s, driven by timber smuggling, firewood gathering, and agricultural expansion. Only 1.5% of the country remains forested, down from 4% in 2000. The once-famous pistachio forests of Badghis province have been decimated, removing both carbon sinks and crucial erosion protection. When the rains do come, barren hillsides can't absorb the water—it rushes straight into valleys, turning streams into torrents that destroy homes, roads, and irrigation channels.

Renewable energy represents one of the few bright spots, though progress is glacial. Afghanistan boasts enormous solar and wind potential—300 days of sunshine annually and consistent wind corridors in the north and west. Yet renewable capacity stands at just 400MW, less than 10% of the country's installed generation. The Taliban government has announced plans to develop 5,000MW of solar capacity by 2030, a staggeringly ambitious target given current infrastructure and governance challenges. Small-scale solar installations are proliferating in off-grid rural areas, providing the first reliable electricity many communities have ever known.

Environmental governance barely exists. The National Environmental Protection Agency, never well-resourced, has been gutted since 2021. Environmental laws go unenforced, protected areas exist only on paper, and illegal resource extraction—from timber to minerals to rare earths—proceeds unchecked. Afghanistan committed to a 13.6% emissions reduction under the Paris Agreement, but lacks the capacity or political will to implement meaningful climate policies. The few functioning meteorological stations provide patchy data, making it nearly impossible to develop evidence-based adaptation strategies.

The outlook is grim. Climate models project temperatures will rise another 1.5-2.5°C by 2050, with precipitation becoming more erratic but decreasing overall. The glaciers will continue their retreat, potentially disappearing entirely from some ranges by 2070. Food production will become increasingly precarious, driving more rural families into already-swollen cities or across borders. Afghanistan's youth bulge—70% of the population is under 25—will come of age in a country where climate shocks are the norm, not the exception.

Yet the land itself remains remarkable. The Wakhan Corridor harbors snow leopards and Marco Polo sheep in ecosystems that have remained largely unchanged for centuries. Band-e-Amir National Park's turquoise lakes, fed by mineral-rich springs, demonstrate what Afghanistan could preserve with proper stewardship. The country's biodiversity, from Sistan Basin wetlands to high-altitude meadows, deserves protection not just for its intrinsic value but as a buffer against climate chaos.

Afghanistan faces a brutal arithmetic: among the world's lowest emissions, among its highest vulnerabilities, and among its weakest capacities to respond. The climate crisis here isn't an abstraction or a future threat—it's the daily reality of farmers watching their crops wither, of mothers walking hours for water, of communities rebuilt after floods only to be washed away again. In a nation starved of almost everything, climate resilience may be the most desperately needed resource of all.`,
    issues: ['Water stress', 'Glacier retreat', 'Drought', 'Deforestation', 'Climate vulnerability']
  },
  {
    name: 'Albania',
    lat: 41.1533,
    lng: 20.1683,
    summary: `The Vjosa River—Europe's last major wild river—carves through Albania's mountainous heart, untamed by dams for its entire 270-kilometer length. In March 2023, Albania declared the entire watershed a national park, protecting 12,700 hectares of braided channels, gravel bars, and riverside forests. It's a conservation milestone that makes Albania an unlikely environmental champion in a region where nearly every waterway has been dammed, straightened, or drained. Yet this triumph exists in uncomfortable tension with a country racing to dam nearly every other river it possesses.

Albania's climate vulnerability is water's double edge. Hydropower generates 95% of the country's electricity, making it one of the world's most renewable-powered nations. But that dependence becomes a liability when droughts strike, as they increasingly do. The 2024 water crisis forced Albania to import electricity for the first time in years, with reservoir levels at historic lows. Winter rainfall in the northern mountains decreased 15% since 2000, while summer droughts intensified. The reliable alpine snowpack that once guaranteed spring runoff is becoming less reliable each year, melting earlier and faster.

Climate patterns are shifting noticeably. Average temperatures have risen 1.4°C since pre-industrial times, with the greatest warming in summer months. The Mediterranean climate that defines Albania's coast is creeping northward and upward, changing agricultural zones that have been stable for centuries. Olive groves now flourish in areas that were once too cold, but traditional crops face increasing heat stress. The Albanian Riviera experienced a catastrophic heatwave in July 2024 with temperatures exceeding 44°C, shattering tourism records for the wrong reasons.

Coastal vulnerability is intensifying. The Adriatic coastline faces accelerating erosion, with some beaches losing 2-3 meters annually. The Buna River delta, one of the Mediterranean's most important wetlands, is being squeezed between rising seas and agricultural drainage. Sea levels along Albania's coast have risen 10cm since 2000 and are projected to rise another 30-60cm by 2050. The tourism industry, which accounts for 15% of GDP, faces existential questions about how much of the coastline will remain swimmable, let alone buildable.

Albania's dam-building surge presents a fundamental contradiction. The government has licensed over 600 small hydropower projects, with more than 150 already operational. These run-of-river plants are marketed as "green energy," but they devastate river ecosystems by diverting water and fragmenting habitats. Rivers from the Vjosa's tributaries to the Drini system face an onslaught of concrete. Environmental groups have documented over 100 illegal dams built without proper permits or environmental assessments, often in protected areas. The government's 2030 energy strategy targets 3,000MW of hydro capacity, up from 2,100MW today.

Renewable diversification is beginning, if slowly. Solar potential is enormous—Albania receives 300 days of sunshine annually—but installed capacity remains below 100MW. The first large-scale solar farm, a 140MW facility near Vlora, came online in 2024. Wind energy is even further behind, with only two small wind farms operational despite excellent wind resources in coastal and mountainous areas. The transmission grid, built in communist times and barely upgraded since, struggles to integrate intermittent renewables.

Forest coverage tells a more positive story. Albania has increased forest cover from 28% to 36% over the past three decades, one of few European countries to do so. Beech and oak forests in the north, Mediterranean maquis in the south, and high-altitude pine stands provide critical carbon storage and watershed protection. Yet illegal logging remains endemic, driven by firewood demand and timber smuggling to Italy and Greece. Forest fires, once rare, are becoming annual events—the summer of 2024 saw devastating blazes across southern Albania that burned over 15,000 hectares.

Agricultural emissions and land use drive most of Albania's carbon footprint. Total emissions hover around 6.5 million tonnes of CO2 equivalent annually, among Europe's lowest in absolute terms but less impressive per capita. The waste sector is particularly problematic: most municipal waste still goes to open dumpsites that leach methane and contaminate groundwater. Tirana's landfill, serving 800,000 people, would fail every EU environmental standard.

The outlook requires navigating competing priorities. Albania has committed to EU accession, meaning it must align with European climate targets: 55% emissions reductions by 2030, carbon neutrality by 2050. These goals seem achievable given the already-low baseline and renewable energy dominance. But meeting them while pursuing aggressive hydropower expansion creates fundamental tensions that haven't been resolved.

What makes Albania climatically unique is this paradox: a country that has protected Europe's last wild river while damming dozens of others; that runs almost entirely on renewables while struggling with drought-induced power shortages; that has restored substantial forest cover while seeing key ecosystems like the Vjosa tributaries degraded. The Albanian Alps harbor brown bears, lynx, and wolves in densities unseen elsewhere in Europe, testament to what wild places can still persist.

Albania's climate path will determine whether it becomes a genuine conservation leader or just another country that protected one iconic place while degrading everything around it. The Vjosa shows what's possible when preservation wins. The question is whether that model can spread, or whether Albania's hundreds of other rivers will be fragmented beyond recovery in pursuit of every last kilowatt-hour. In a warming world where intact river systems are priceless, Albania has both the opportunity and the peril more clearly than most.`,
    issues: ['Hydropower expansion', 'Water stress', 'Coastal erosion', 'River fragmentation', 'Heat extremes']
  },
  {
    name: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    summary: `The Sahara is advancing. Across Algeria's northern provinces, the desert's edge creeps forward at 5-7 kilometers per year, consuming agricultural land that has supported communities for millennia. The once-reliable winter rains that nourished wheat and barley in the Tell Atlas region are failing with increasing frequency. Droughts that struck once a generation now arrive every few years, each one more severe than the last. Algeria, Africa's largest country by area, is becoming more desert than it has been at any point in human history.

Water scarcity defines Algeria's climate crisis. The country possesses less than 500 cubic meters of renewable freshwater per person annually, well below the UN's water scarcity threshold. The situation is deteriorating: water availability has dropped 50% since 1960 and is projected to fall another 30% by 2050. Algeria's 44 million people depend heavily on groundwater, but the vast aquifers beneath the Sahara are being depleted far faster than they recharge. Some of these fossil water reserves took thousands of years to accumulate; at current extraction rates, many will be exhausted within decades.

The Mediterranean coast faces a different set of threats. Sea levels along Algeria's 1,600-kilometer coastline have risen 12cm since 2000 and are accelerating. Major cities—Algiers, Oran, Annaba—sit at sea level or just above it, housing 40% of the population and generating 70% of economic activity. Coastal erosion is consuming beaches and threatening infrastructure. The Mitidja plain, Algeria's agricultural heartland, faces saltwater intrusion into aquifers that once provided irrigation for orchards and vegetable farms. A 50cm sea level rise, possible by mid-century, would inundate portions of 14 coastal cities and displace millions.

Temperature increases are severe. Algeria has warmed 1.7°C since pre-industrial times, significantly above the global average. Heatwaves have intensified dramatically—July 2024 saw temperatures exceed 50°C in the Saharan city of Salah, while coastal Algiers sweltered through two weeks above 40°C. These extremes aren't anomalies; they're becoming the new baseline. Climate models project temperatures will rise another 2-3°C by 2050, making summers in coastal cities comparable to current conditions in sub-Saharan Africa.

Agriculture, which employs 25% of the workforce, is under siege. Wheat production, once sufficient to feed the nation, now requires massive imports—Algeria is one of the world's largest wheat buyers. Rainfall in cereal-growing regions has decreased 15% since 2000, while spring droughts increasingly coincide with critical growth periods. Farmers are abandoning rain-fed agriculture and drilling ever-deeper wells, accelerating aquifer depletion. The date palm oases of the Sahara, agricultural systems refined over 2,000 years, are dying as groundwater tables drop and traditional irrigation channels run dry.

Algeria's energy economy remains stubbornly fossil-fuel dependent. Oil and natural gas account for 95% of export revenues and fund the state budget. The country produces around 130 million tonnes of CO2 annually, making it Africa's third-largest emitter after South Africa and Egypt. Yet domestic consumption is rising sharply, driven by heavily subsidized electricity and gasoline. Gas-fired power plants provide 98% of electricity generation, while renewable energy contributes barely 400MW—less than 1% of installed capacity.

Solar potential is staggering but largely untapped. The Algerian Sahara receives among the world's strongest solar radiation, with 3,000 hours of sunshine annually. The government's much-touted 2030 renewable energy target of 22GW has been repeatedly delayed and downscaled. Only a handful of solar facilities have been completed, mostly small demonstration projects. The Hassi R'Mel solar-gas hybrid plant, operational since 2011, remains more symbolic than significant. A 1,000MW solar project near Ouargla, announced in 2022, has stalled amid financing difficulties.

Environmental governance is weak and getting weaker. Algeria's Ministry of Environment has limited authority, sparse budget, and little political support. Environmental impact assessments are routinely ignored or manipulated. Protected areas exist on paper but receive minimal enforcement or funding. The Ahaggar and Tassili n'Ajjer national parks, UNESCO World Heritage sites that harbor rare desert species and prehistoric rock art, face threats from infrastructure development and unregulated tourism. Plastic pollution is epidemic—Algeria generates 2.5 million tonnes of waste annually, with negligible recycling.

Forest fires have become catastrophic. The 2024 fire season was the worst in Algeria's history, with massive blazes in Kabylie and other northern provinces destroying over 100,000 hectares of forest and killing dozens. These aren't just accidents; they're symptoms of a Mediterranean ecosystem pushed past its limits by heat, drought, and poor forest management. Algeria has lost 35% of its forest cover since independence, with most remaining forests degraded by overgrazing and illegal cutting. Desertification now affects 70% of the country's land area.

The outlook is stark. Algeria faces what climate scientists call "compound risks"—multiple threats that reinforce each other. Water scarcity constrains agriculture, driving rural-to-urban migration. Cities already struggling with unemployment and housing shortages face massive climate refugee flows. Food import dependency exposes the country to global price shocks. The fossil fuel revenues that fund social stability are heading toward obsolescence in a decarbonizing world.

Yet Algeria possesses advantages. Solar resources that could power not just the country but much of Europe via underwater transmission cables. The organizational capacity to mobilize large-scale infrastructure if political will existed. A young, educated population capable of building a green economy. North Africa's largest natural gas reserves, which could serve as a transition fuel while renewables scale up.

The Sahara itself—seemingly hostile, actually precious—harbors surprising biodiversity. Addax and dama gazelles persist in remote areas. The Saharan cheetah, the world's rarest big cat, hunts across vast territories. Date palm oases create microclimates where life concentrates. These ecosystems evolved over millions of years to handle extremes, but even their resilience has limits. Algeria's environmental future will be determined by whether it can transition from extracting fossil fuels to harnessing the sun's energy, from depleting aquifers to managing scarcity, from watching deserts advance to holding the line. The window for that transition is narrowing faster than the rains.`,
    issues: ['Desertification', 'Water scarcity', 'Heat extremes', 'Fossil fuel dependence', 'Agricultural decline']
  }
]

async function insertBatch() {
  console.log('Inserting Climate writeups for Batch 1 (Afghanistan, Albania, Algeria)...\n')

  let inserted = 0
  for (const writeup of climateWriteups) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'climate'
          }
        },
        create: {
          name: writeup.name,
          type: 'country',
          country: writeup.name,
          lat: writeup.lat,
          lng: writeup.lng,
          category: 'climate',
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([]),
          updatedAt: new Date()
        }
      })

      console.log(`✓ ${writeup.name} (${writeup.summary.length} chars)`)
      inserted++
    } catch (error) {
      console.error(`✗ Failed to insert ${writeup.name}:`, error)
    }
  }

  console.log(`\n✅ Batch 1 complete: ${inserted}/${climateWriteups.length} countries inserted`)
}

insertBatch()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
