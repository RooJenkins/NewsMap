import { PrismaClient } from '@prisma/client';
import { ALL_COUNTRIES } from './generation-helpers';

const prisma = new PrismaClient();

// Bill McKibben voice: Urgent but hopeful, scientific facts with moral clarity,
// solutions-oriented activism, calls out fossil fuel industry

const CLIMATE_WRITEUPS: Record<string, string> = {
  'Haiti': `# Haiti - Climate & Environment

The physics is clear: when you clear-cut 98% of a nation's forests, compound that deforestation with poverty, then layer on climate change intensifying Caribbean hurricanes, you create a humanitarian catastrophe that should shame the wealthiest nations whose emissions caused much of the crisis. November 2025 finds Haiti facing extreme vulnerability—ranking among the world's top ten nations most threatened by climate impacts despite contributing virtually nothing to the problem. The country faces a triple threat: intensifying hurricanes, severe droughts, and devastating floods. Yet here's what gives me hope: grassroots reforestation efforts led by Haitian communities are planting millions of trees annually, and renewable energy microgrids powered by Caribbean sun are bringing electricity to rural areas for the first time.

## Deforestation Crisis: From 60% to Less Than 2% Forest Cover

Haiti's forests have been decimated over the past century, dropping from approximately 60% coverage in 1923 to less than 2% today. November 2025 assessments show this deforestation drives severe erosion, devastating mudslides during hurricanes, loss of agricultural productivity, and eliminated natural carbon sinks. The primary drivers remain poverty-driven charcoal production for cooking fuel and unsustainable agriculture practices. Organizations like the Haiti Forest Foundation have planted over 10 million trees since 2010, focusing on native species and community-managed reforestation zones. But the scale needed is enormous—estimates suggest Haiti needs billions of trees to restore even minimal forest cover and reduce climate vulnerability.

## Hurricane Intensification: Climate Change Weaponizing Caribbean Storms

The Atlantic hurricane season is producing more Category 4 and 5 storms as ocean temperatures rise, and Haiti's geography and deforestation make it uniquely vulnerable. November 2025 marks the aftermath of recent severe tropical systems that caused flash flooding and mudslides in deforested areas. Hurricane Matthew in 2016 killed over 500 people and caused $2 billion in damage—nearly one-quarter of GDP. The 2025 Atlantic season brought several near-misses that nonetheless caused flooding in Port-au-Prince and agricultural losses. Climate scientists project Caribbean hurricanes will intensify further, with Haiti facing existential risks without massive adaptation investments in reforestation, better housing, early warning systems, and climate-resilient agriculture.

## Solar Energy Revolution: Microgrids Bringing Power and Hope

Here's what gives me hope: Haiti's abundant sunshine is being harnessed through innovative solar microgrid projects bringing electricity to rural communities that never had grid access. November 2025 finds organizations like EarthSpark International operating dozens of solar microgrids serving tens of thousands of Haitians. These systems provide clean, reliable electricity for homes, schools, health clinics, and small businesses—replacing expensive, polluting diesel generators and kerosene lamps. The model is replicable: community ownership, pay-as-you-go mobile payment systems, and local job creation. Haiti has potential for gigawatts of solar capacity that could transform energy access while leapfrogging fossil fuel infrastructure entirely.

## The International Angle

Haiti's climate vulnerability represents the brutal moral inequality of the climate crisis: the country has contributed essentially zero greenhouse gas emissions yet faces catastrophic impacts from emissions by wealthy industrialized nations. November 2025 international climate negotiations continue debates about loss and damage financing for vulnerable nations. Haiti requires billions in adaptation funding—reforestation, resilient agriculture, renewable energy infrastructure, hurricane protection—yet climate finance from wealthy nations remains woefully inadequate. The COP30 discussions include proposals for dedicated Caribbean climate adaptation funds, but the physics demands action now, not more meetings.

## The Bottom Line

Haiti in November 2025 represents both the moral urgency of the climate crisis and the potential for grassroots solutions. We're running out of time to prevent the worst impacts, but the solar microgrids powering rural communities and the millions of trees being planted by Haitian farmers show what's possible when communities take action. The fossil fuel industry's emissions created this crisis—the least wealthy nations can demand is adequate financing for adaptation and a rapid global transition away from the fuels causing the catastrophe.`,

  'Honduras': `# Honduras - Climate & Environment

Central America is experiencing climate impacts that climate models predicted would arrive decades from now—and November 2025 finds Honduras on the frontlines of what scientists call "rapid onset climate disruption." The physics is brutal: warming oceans intensify hurricanes, shifting rainfall patterns devastate coffee harvests, and extended droughts force migration. Honduras ranks among the top five nations globally most vulnerable to climate change impacts according to the Global Climate Risk Index, yet contributed essentially nothing to causing the crisis. Here's what gives me hope: Honduran communities are pioneering agroforestry systems that rebuild forests while maintaining agricultural productivity, and indigenous Miskito communities are protecting vast carbon-rich forests despite pressures from illegal logging and cattle ranching.

## Hurricane Devastation: Back-to-Back Category 4 Storms

November 2020's Hurricane Eta and Iota—two Category 4 hurricanes hitting Honduras within two weeks—demonstrated the intensifying destructive power of Atlantic storms in a warming climate. The 2025 hurricane season brought severe tropical systems that caused renewed flooding in the Sula Valley and Mosquitia region. Climate science is clear: warming ocean temperatures are loading the dice toward more intense hurricanes, with Honduras's geography creating catastrophic vulnerability. The storms devastated infrastructure, agriculture, and forced hundreds of thousands into temporary displacement. Reconstruction efforts focus on climate-resilient housing and improved early warning systems, but the fundamental challenge remains: hurricanes are intensifying faster than Honduras can adapt.

## Coffee Crisis: Climate Change Destroying Key Crop

Honduras is Central America's largest coffee producer, with approximately 120,000 coffee farming families depending on the crop for livelihoods. November 2025 finds the sector in crisis: rising temperatures are pushing ideal coffee-growing conditions to higher elevations, while changing rainfall patterns and increasing prevalence of coffee leaf rust fungus threaten yields. Studies project 25-50% of current coffee-growing areas could become unsuitable for quality arabica production by 2050. Progressive farmers are implementing shade-grown agroforestry systems—growing coffee under native tree canopy that provides cooling, retains moisture, and sequesters carbon. These systems are more resilient than full-sun monocultures, but require technical support and market premiums that many small farmers lack access to.

## Forest Protection: Indigenous Guardians vs. Illegal Logging

The Miskito and other indigenous communities in Honduras's Mosquitia region protect vast rainforests that store millions of tons of carbon and harbor exceptional biodiversity. November 2025 finds these communities under severe pressure from illegal logging operations, often backed by narcotraffickers and cattle ranchers using deforestation to launder money and establish territorial control. Indigenous forest defenders face threats and violence—several were murdered in 2024-2025 protecting their territories. Yet communities continue resisting, supported by mapping projects documenting indigenous land rights and monitoring systems detecting illegal deforestation. These forests provide global climate benefits—their protection requires international support and recognition of indigenous land rights.

## The International Angle

Honduras's climate vulnerability and limited responsibility for causing the crisis make it a crucial test case for climate justice and loss and damage financing. November 2025 COP30 negotiations include Central American nations demanding adequate adaptation finance, compensation for climate-induced disasters, and accountability from fossil fuel companies whose products caused the crisis. Honduras requires billions for climate-resilient infrastructure, agricultural adaptation, forest protection, and renewable energy—yet climate finance delivery remains far below promises made by wealthy nations.

## The Bottom Line

We're running out of time to prevent Honduras from becoming uninhabitable for millions of its citizens, but the agroforestry systems being pioneered by coffee farmers and the forests being protected by indigenous communities show the solutions exist. The fossil fuel industry created this crisis through decades of emissions while knowing the consequences. Honduras and Central America deserve massive adaptation financing and a rapid global transition away from fossil fuels—anything less is climate colonialism.`,

  'Mexico': `# Mexico - Climate & Environment

Mexico is living the energy transition's central contradiction: the country has committed to ambitious renewable energy goals while simultaneously planning to expand state-controlled oil production and coal power generation. November 2025 finds President Claudia Sheinbaum, a climate scientist by training, navigating between climate science that demands rapid decarbonization and political commitments to energy nationalism and PEMEX support. The physics is unforgiving: Mexico ranks among the world's top 15 greenhouse gas emitters, faces severe climate impacts including unprecedented droughts and heatwaves, and sits in Hurricane alley where warming oceans are intensifying storms. Yet here's what gives me hope: Mexico has extraordinary renewable resources—world-class solar, wind, and geothermal potential that could power the nation entirely on clean energy while creating hundreds of thousands of jobs.

## PEMEX vs. Planet: Oil Nationalism in Climate Crisis Era

PEMEX, Mexico's state-owned oil company, symbolizes the tension between resource nationalism and climate reality. November 2025 finds PEMEX hemorrhaging billions annually while planning offshore drilling expansion in the Gulf of Mexico and refinery rehabilitation. The López Obrador administration (2018-2024) prioritized energy self-sufficiency and PEMEX support over renewable energy development, canceling renewable energy auctions and supporting new fossil fuel infrastructure. President Sheinbaum, who took office in late 2024, has signaled modest shifts toward climate action while maintaining PEMEX support for political and fiscal reasons. The company's production has declined from over 3 million barrels per day in 2004 to below 1.7 million in 2025, despite massive subsidies. The fossil fuel industry's business model is failing—but political commitment keeps it on life support.

## Extreme Weather: Droughts, Heat Waves, and Water Crisis

Mexico City and northern Mexico are experiencing water scarcity that climate scientists describe as harbingers of future conditions under continued warming. November 2025 finds reservoirs serving Mexico City at critically low levels following multi-year drought. The Cutzamala system, providing water to millions, faced severe depletion in 2024, forcing unprecedented restrictions. Northern states like Nuevo León experienced water crises in 2022 that previewed future conditions. Simultaneously, heat waves are intensifying—2024 saw unprecedented temperatures across Mexico killing dozens and stressing agriculture. The physics is clear: warming temperatures increase evaporation, alter precipitation patterns, and make droughts more severe. Mexico needs massive investments in water conservation, efficiency, and alternative supplies, but federal spending prioritizes fossil fuel infrastructure.

## Renewable Energy Potential: Solar and Wind Resources Being Squandered

Mexico has world-class renewable energy resources that could transform the energy system: exceptional solar resources across northern states, powerful wind resources in Oaxaca and other regions, and substantial geothermal potential. Private sector renewable energy auctions held 2015-2018 attracted billions in investment and delivered record-low prices for solar and wind power. November 2025 finds these programs essentially abandoned—the López Obrador administration halted auctions, implemented policies favoring CFE (state utility) fossil fuel generation, and created regulatory uncertainty that froze private renewable investment. Sheinbaum has promised to restart renewable development, but implementation remains unclear. The tragedy is enormous: Mexico could be adding gigawatts of cheap, clean solar and wind while creating jobs and reducing emissions—instead, investment has stalled.

## The International Angle

Mexico's position as North America's third partner and top 15 global emitter gives it outsized importance in climate diplomacy. November 2025 finds Mexico participating in COP30 negotiations while facing pressure from the United States and Canada regarding climate commitments under the USMCA trade agreement. Mexico's nationally determined contribution (NDC) under the Paris Agreement commits to reducing emissions, but federal policies supporting fossil fuels contradict stated goals. Regional climate cooperation focuses on renewable energy integration, cross-border transmission, and just transition support for workers and communities dependent on fossil fuel industries.

## The Bottom Line

Mexico's climate and energy trajectory will be determined by whether political commitments to state-controlled fossil fuels can be overcome by economic and climate realities. We're running out of time—global heating demands rapid emissions reductions that Mexico could achieve through its extraordinary renewable resources. But PEMEX and CFE defend fossil fuel interests while the opportunity for cheap, clean energy and climate leadership slips away. President Sheinbaum's training as a climate scientist offers hope, but political economy may prove more powerful than physics.`,

  'Nicaragua': `# Nicaragua - Climate & Environment

The thing about Nicaragua's climate story is how perfectly it illustrates the global pattern: those who contributed least to the crisis suffer first and worst. November 2025 finds Nicaragua ranking as one of the Western Hemisphere's most climate-vulnerable nations, facing intensifying hurricanes, severe droughts, and agricultural disruption that threatens livelihoods for hundreds of thousands of rural families. The country's greenhouse gas emissions are negligible globally, yet it faces catastrophic impacts from warming driven by industrialized nations' fossil fuel addiction. Here's what should give us hope: Nicaragua has achieved remarkable renewable energy transformation, with approximately 75% of electricity now generated from renewables—primarily geothermal, hydro, and wind. But climate impacts are intensifying faster than adaptation can respond.

## Hurricane Devastation: Category 4 Storms Becoming Routine

November 2020's back-to-back Category 4 hurricanes—Eta and Iota—demonstrated the new normal for Nicaragua: warming ocean temperatures are creating monster storms that were once rare but are now increasingly frequent. The two storms, hitting within two weeks, destroyed entire communities along the Caribbean coast, devastated agricultural regions, and displaced hundreds of thousands. November 2025 finds reconstruction still incomplete while communities brace for the next hurricane season. Climate science is unambiguous: continued warming will intensify hurricanes further. Nicaragua's Caribbean coast, home to indigenous Miskito and other communities, faces near-annual threats that make long-term development nearly impossible without massive climate adaptation investments that exceed national capacity.

## Renewable Energy Success: From Fossil Fuel Dependent to 75% Clean

Here's the good news, and it's genuinely remarkable: Nicaragua has transformed its electricity sector from heavily oil-dependent in 2007 to approximately 75% renewable in 2025. The country developed geothermal resources at the Momotombo, San Jacinto, and other volcanic sites, expanded hydroelectric capacity, and attracted major wind farm investments. By November 2025, wind farms dot the Pacific coast and northern highlands, geothermal plants tap volcanic heat, and hydroelectric dams harness river flows. This transformation reduced dependence on expensive imported oil, lowered electricity costs, and dramatically cut power sector emissions. The model demonstrates what's possible when political will aligns with resource availability—Nicaragua achieved in 15 years what many richer nations claim is impossible.

## Agricultural Crisis: Coffee, Corn, and Beans Under Climate Stress

Nicaragua's economy depends heavily on agriculture—particularly coffee, corn, and beans—and all three face severe climate disruption. November 2025 finds coffee farmers confronting shifting rainfall patterns, rising temperatures pushing ideal growing conditions to higher elevations, and increasing prevalence of coffee leaf rust fungus thriving in warmer, wetter conditions. The country's dry corridor region faces extended droughts that devastate corn and bean production, threatening food security for rural communities. Progressive farmers implement agroforestry systems—growing crops under shade trees that moderate temperatures, retain moisture, and sequester carbon—but scaling requires technical support and financing that exceeds national resources.

## The International Angle

Nicaragua's experience exposes the fundamental injustice of climate change: the country contributed negligibly to global emissions yet faces devastating impacts requiring adaptation investments far beyond national capacity. November 2025 COP30 negotiations include Central American demands for adequate loss and damage financing, with Nicaragua pointing to hurricane devastation and agricultural losses as examples of climate impacts requiring compensation. The physics demands that wealthy nations who caused the crisis provide massive adaptation financing. Nicaragua also participates in regional climate cooperation through the Central American Integration System (SICA), coordinating on disaster response, adaptation strategies, and renewable energy integration.

## The Bottom Line

We're running out of time to prevent worst-case climate scenarios, but Nicaragua's renewable energy transformation proves rapid change is possible when there's political will. The tragedy is that clean energy success doesn't protect against intensifying hurricanes and droughts driven by continued global emissions from fossil fuel burning. Nicaragua needs billions in adaptation financing—climate-resilient infrastructure, agricultural support, disaster preparedness—and the wealthy nations whose emissions caused the crisis have a moral obligation to provide it. The fossil fuel industry knew decades ago their products would cause this suffering. Climate justice demands accountability.`,

  'Panama': `# Panama - Climate & Environment

Panama holds a unique position in global climate dynamics: the Panama Canal handles approximately 6% of world maritime trade, making the country's water resources critical to global commerce, yet climate change is disrupting the rainfall patterns that keep the Canal operating. November 2025 finds Panama navigating drought that forced unprecedented Canal shipping restrictions, while simultaneously pursuing aggressive renewable energy expansion and positioning itself as a regional climate finance hub. The country contributes negligibly to global emissions yet faces outsized climate impacts—and here's what gives me hope: Panama has committed to becoming carbon negative by 2050 and is protecting vast rainforests that store hundreds of millions of tons of carbon while harboring exceptional biodiversity.

## Panama Canal Drought: Climate Change Threatening Global Trade

The Panama Canal depends entirely on rainfall to operate—each ship transit requires approximately 52 million gallons of freshwater from Gatún and Alhajuela lakes. November 2024 through early 2025 brought severe drought linked to El Niño and changing regional climate patterns, forcing the Canal Authority to reduce daily transit numbers from 36-38 normally to as low as 24 ships. The economic impact rippled globally—shipping companies paid premium rates for priority passage, some vessels diverted around Cape Horn, and transit delays affected supply chains. Climate models project increasing drought frequency and severity in Panama as the climate warms, potentially forcing Canal operational changes or massive investments in alternative water sources. The irony is profound: a waterway serving fossil fuel-powered global trade faces disruption from climate change caused by burning those same fossil fuels.

## Forest Protection: Half a Nation Keeping Carbon Locked Away

Panama maintains approximately 65% forest cover—an extraordinary achievement in a region where deforestation has devastated neighboring countries. November 2025 finds vast areas protected in indigenous territories, national parks, and biological corridors that provide climate and biodiversity benefits far beyond Panama's borders. The Darién Gap rainforest connecting Panama and Colombia stores massive carbon stocks and serves as a biodiversity hotspot. Indigenous communities including Emberá, Wounaan, and Ngäbe-Buglé peoples protect extensive forest territories that face pressure from illegal logging, cattle ranching, and land speculation. Progressive policies combine indigenous land rights recognition, payments for ecosystem services, and strict forest protection laws. These forests represent climate solutions—protecting existing forest carbon is far more cost-effective than trying to remove CO2 later.

## Renewable Energy Transformation: Hydropower Dominance with Solar Growing

Panama generates approximately 70% of electricity from renewable sources, predominantly hydropower from the Canal watershed and other river systems. November 2025 finds major solar installations expanding rapidly as technology costs have plummeted—large-scale solar farms are being developed in Chiriquí and Coclé provinces to diversify beyond hydropower and reduce vulnerability to droughts affecting reservoir levels. The challenge is balancing hydropower dependence with climate resilience: as droughts become more frequent, reservoir levels decline, forcing greater reliance on thermal generation as backup. Progressive energy planning emphasizes solar and wind expansion to reduce hydropower dependence while maintaining clean electricity supply.

## The International Angle

Panama positions itself as a regional hub for climate finance, hosting international organizations and promoting investment in Latin American climate solutions. November 2025 finds Panama participating actively in COP30 negotiations, promoting forest protection financing, and advocating for shipping industry decarbonization given the Canal's role in global trade. The country's carbon-negative commitment includes both emissions reductions and forest carbon sequestration. Panama also faces climate justice arguments: as a maritime hub serving global commerce, should the shipping industry using the Canal contribute to climate adaptation financing? Regional climate cooperation includes Central American drought monitoring systems, disaster response coordination, and renewable energy integration planning.

## The Bottom Line

Panama's experience demonstrates both climate vulnerability—drought threatening the Canal that underpins the economy—and climate solutions through forest protection and renewable energy. We're running out of time to prevent worse droughts, but the forests being protected by indigenous communities and government policy represent hundreds of millions of tons of carbon that must stay in the ground. The Canal drought should wake up the shipping industry: climate change will disrupt global trade infrastructure unless we rapidly transition away from the fossil fuels causing the crisis. Panama is doing its part—the question is whether wealthy emitters will match that commitment.`,

  'Paraguay': `# Paraguay - Climate & Environment

Paraguay generates nearly 100% of its electricity from renewable hydropower, exports massive clean energy to Brazil and Argentina, and maintains extensive forest cover—on paper, it's a climate success story. But November 2025 reveals a more complex reality: while electricity is clean, deforestation driven by soy and cattle expansion threatens Paraguay's carbon neutrality, and the country's development model depends on commodity exports that drive environmental destruction. Here's what should give us hope: indigenous communities protecting forests in the Chaco and Atlantic Forest regions are demonstrating that economic development and forest conservation aren't mutually exclusive—but they need support to resist the powerful soy and beef lobbies driving deforestation.

## Hydropower Dominance: Clean Energy Exports and Climate Contradiction

Paraguay generates approximately 8,700 MW of hydropower capacity from two massive dams: Itaipu (shared with Brazil) and Yacyretá (shared with Argentina). November 2025 finds Paraguay consuming only a fraction of its generation, exporting approximately 80% to Brazil and Argentina and earning hundreds of millions annually. The electricity sector is essentially emissions-free—a genuine climate achievement. But the contradiction is stark: while electricity is clean, the economy depends on soy and beef exports that drive deforestation and generate significant emissions. Paraguay's national greenhouse gas inventory shows agriculture and land-use change producing far more emissions than the power sector avoids. The physics is clear: you can't claim climate leadership while clearing forests for export commodities.

## Deforestation Crisis: Soy and Cattle Consuming the Chaco

The Chaco, South America's second-largest forest after the Amazon, extends across Paraguay, Argentina, and Bolivia. November 2025 finds Paraguay's Chaco deforestation rates among the highest in South America, driven by expansion of cattle ranching and, increasingly, soy cultivation. Satellite monitoring shows hundreds of thousands of hectares cleared 2020-2025, with mechanized clearing operations converting ancient dry forest into pasture and farmland at industrial scale. The drivers are clear: global demand for soy (animal feed for China and Europe) and beef creates economic incentives that overwhelm environmental protections. Indigenous communities with legal land titles to Chaco territories face pressure from ranchers and soy farmers offering to buy or lease land. Some communities resist, protecting forests that store decades of carbon and harbor unique biodiversity adapted to the dry Chaco climate.

## Atlantic Forest Remnants: Last Fragments Under Threat

Paraguay once held extensive Atlantic Forest on its eastern border with Brazil—one of Earth's most biodiverse ecosystems. November 2025 finds less than 10% of original Atlantic Forest remaining in Paraguay, fragmented into isolated patches facing continued clearing pressure. The remaining forests store significant carbon, harbor endangered species found nowhere else, and provide watershed protection. Organizations working with indigenous and campesino communities implement conservation agreements combining forest protection with sustainable livelihoods—agroforestry, ecotourism, payments for watershed services. But the scale is overwhelmed by economic forces driving soy expansion. Progressive forestry laws exist on paper but enforcement is weak when soy and cattle lobbies hold political power.

## The International Angle

Paraguay participates in international climate agreements while its actual emissions trajectory contradicts stated commitments. November 2025 COP30 negotiations include scrutiny of Paraguay's nationally determined contribution (NDC), which claims forest carbon sinks offset emissions—but deforestation trends undermine those calculations. The country benefits from carbon offset markets where forest protection projects generate credits sold to companies seeking to offset emissions. The credibility of these markets depends on permanent forest protection, yet Paraguay's deforestation continues. Regional cooperation focuses on shared watersheds—the Pantanal wetlands, Paraguay River basin, and Atlantic Forest remnants—where cross-border coordination is essential for conservation.

## The Bottom Line

Paraguay's renewable electricity success demonstrates what's possible when rivers and political will align—but clean power doesn't offset forest destruction. We're running out of time to protect the Chaco and Atlantic Forest remnants, and the soy/beef export model is fundamentally incompatible with climate stability. Here's what gives me hope: indigenous communities protecting forests prove alternative development paths exist. But they need support to resist commodity market pressures. The fossil fuel industry isn't Paraguay's main climate problem—it's the global agricultural commodity system driving deforestation. Both need transformation if we're serious about climate stability.`,

  'Peru': `# Peru - Climate & Environment

The Andes are melting. November 2025 finds Peru's tropical glaciers—water source for millions—disappearing at accelerating rates as global temperatures rise. The physics is unforgiving: for every degree of warming, the equilibrium altitude for glaciers rises approximately 150 meters, and Peru's glaciers have already lost nearly 60% of their ice mass since the 1970s. Lima, a desert city of 10 million, depends on Andean glacial meltwater, yet the glaciers providing that water are vanishing. Here's what gives me hope: Peru holds vast renewable energy potential—solar resources in its deserts, wind along the coast, massive hydroelectric capacity—and communities across the Amazon are proving that forest protection and development can coexist. But we're running out of time to prevent catastrophic water scarcity and protect forests that store billions of tons of carbon.

## Glacial Meltdown: Water Source for Millions Disappearing

Peru holds approximately 71% of the world's tropical glaciers, providing water for agriculture, hydropower, and drinking water during dry seasons. November 2025 assessments show continued rapid retreat—the Quelccaya Ice Cap, Peru's largest tropical glacier, is losing mass at accelerating rates. The Cordillera Blanca range, source of water for millions, has lost approximately 30% of its glacial area since the 1970s. As glaciers melt, short-term runoff increases, but long-term water security collapses once ice mass is depleted. Lima's water supply depends partly on glacial runoff—as glaciers disappear, the city faces severe scarcity. The fossil fuel industry knew their products would cause this warming, yet they chose profits over the water security of millions. Adaptation requires massive investments in alternative water sources, conservation, and emissions reductions that Peru cannot achieve alone.

## Amazon Deforestation: Gold Mining and Agriculture Destroying Carbon Sinks

Peru's Amazon rainforest stores billions of tons of carbon and harbors extraordinary biodiversity—and November 2025 finds it under severe pressure from illegal gold mining, coca cultivation, and agricultural expansion. Satellite monitoring shows continued forest clearing in Madre de Dios, Ucayali, and Loreto regions. Illegal gold mining uses mercury contamination and causes devastating deforestation, while the global cocaine trade drives forest clearing for coca plantations. Indigenous communities with legal land rights protect vast forest territories—the Ashaninka, Shipibo-Konibo, and dozens of other peoples defend forests against illegal loggers and miners, sometimes at cost of their lives. Indigenous defenders are murdered protecting forests that provide global climate benefits. Supporting indigenous land rights and providing economic alternatives are essential for forest protection.

## Renewable Energy Potential: Solar, Wind, and Hydro Being Developed

Peru generates approximately 60% of electricity from hydropower, tapping Andean river systems fed by mountain rainfall and glacial melt. November 2025 finds major solar and wind projects expanding capacity—the Majes and Intipampa solar farms in southern Peru's deserts, and wind farms along the coast where Pacific breezes blow consistently. The renewable energy auctions held 2009-2022 attracted billions in investment and drove prices down to highly competitive levels. The challenge is integrating variable renewables with hydropower and building transmission to connect resources to population centers. Peru has potential to become a renewable energy powerhouse, exporting clean electricity regionally while reducing dependence on natural gas, but this requires sustained investment and political commitment.

## The International Angle

Peru plays active roles in international climate negotiations, particularly on forest protection financing and adaptation support for glacial melt impacts. November 2025 COP30 discussions include Peru's proposals for Andean adaptation funds recognizing unique glacial retreat challenges. The country participates in Amazon cooperation initiatives with Brazil, Colombia, Ecuador, and other nations sharing the rainforest. Peru also engages in carbon markets where forest protection generates offset credits—the credibility depends on permanent protection that requires addressing illegal mining and coca cultivation. Regional climate cooperation focuses on shared watersheds, disaster response for climate-linked floods and droughts, and renewable energy integration.

## The Bottom Line

We're running out of time to save Peru's glaciers—the physics demands immediate, dramatic global emissions reductions that aren't happening. But here's what gives me hope: the indigenous communities protecting Amazonian forests, the renewable energy projects replacing fossil fuel generation, and the scientists documenting glacial retreat to demand climate action. Peru's climate challenges—melting glaciers, forest destruction, water scarcity—represent the crisis in microcosm: those who contributed least suffer most from emissions by wealthy nations. Climate justice demands massive adaptation financing and a rapid global transition away from fossil fuels. The fossil fuel industry caused this crisis. They owe Peru and the world solutions.`,

  'United States': `# United States - Climate & Environment

The United States holds a unique position in the climate crisis: we're the world's largest historical greenhouse gas emitter, currently the second-largest annual emitter, yet we've finally—finally!—passed meaningful climate legislation and are witnessing an extraordinary clean energy boom. November 2025 finds the Inflation Reduction Act (IRA) driving unprecedented renewable energy deployment, battery manufacturing, and electric vehicle adoption. Here's what gives me hope: solar and wind installations are breaking records, battery costs have plummeted, and clean energy jobs are surging. But we're running out of time, and the fossil fuel industry is fighting desperately to maintain their business model despite the physics demanding rapid decarbonization. The politics are brutal: a divided Congress, fossil fuel lobbying power, and climate denial despite accelerating impacts from heat waves, wildfires, hurricanes, and droughts.

## IRA Climate Boom: Clean Energy Investment Surge

The Inflation Reduction Act, passed in August 2022, represents the most significant U.S. climate legislation in history—$369 billion in clean energy investments and tax incentives driving transformation at scale. November 2025 finds the results extraordinary: solar installations approaching 30 gigawatts annually, wind capacity expanding, battery manufacturing plants opening across the country, electric vehicle sales reaching 15% of new car sales. The manufacturing incentives are bringing solar panel, wind turbine, and battery production back to the U.S., creating hundreds of thousands of jobs. The fossil fuel industry fought the IRA ferociously, but they lost, and now clean energy momentum is building faster than anyone projected. The question is whether deployment continues fast enough to meet physics-demanded timelines.

## Fossil Fuel Contradictions: Record Oil and Gas Production

Here's the brutal contradiction: while the IRA drives clean energy growth, the U.S. is producing record amounts of oil and natural gas. November 2025 finds U.S. crude production exceeding 13 million barrels per day—more than any nation in history—and natural gas output at record levels, with massive LNG export terminals shipping gas globally. The fossil fuel industry claims gas is a "bridge fuel," but the physics doesn't care about marketing slogans—every ton of CO2 matters, and continued fossil fuel expansion is incompatible with climate stability. The Biden and subsequent administrations have attempted balancing clean energy growth with fossil fuel production to maintain energy security and economic interests, but this contradiction cannot hold. We cannot drill our way to climate stability while simultaneously building renewable energy. Physics demands choosing.

## Extreme Weather Intensification: Heat, Fire, Hurricanes, Floods

Climate change is no longer a future threat—it's devastating American communities now. November 2025 follows years of record-breaking climate disasters: the 2023 Maui wildfire killed over 100 people, 2024 brought devastating hurricanes to Florida and the Carolinas, 2025 saw unprecedented heat waves across the Southwest with temperatures exceeding 120°F. The pattern is clear: warming temperatures intensify heat waves, drought, and wildfire conditions in the West; warming oceans fuel stronger hurricanes; changing precipitation creates extreme flooding events. These disasters cost hundreds of billions annually in damages and hundreds of lives—yet fossil fuel companies continue expanding production. The industry knew decades ago their products would cause this suffering. They chose profits. Now Americans are paying the price.

## The International Angle

U.S. climate diplomacy faces credibility challenges given historical emissions and continued fossil fuel expansion, yet the IRA investment surge has renewed international climate leadership potential. November 2025 finds U.S. participation in COP30 negotiations emphasizing clean energy technology cooperation, climate finance for vulnerable nations, and methane emissions reductions. The geopolitical dimensions are complex: competition with China over clean energy manufacturing, tensions with European allies over IRA subsidies, and demands from developing nations for climate reparations given U.S. historical emissions responsibility. U.S. climate policy significantly influences global ambition—failure or success reverberates internationally.

## The Bottom Line

We're running out of time, but here's what gives me hope: the IRA is proving clean energy transition is achievable at scale when policy aligns with technology and economics. Solar and wind are now cheaper than fossil fuels, batteries are enabling grid integration, electric vehicles are becoming mainstream. But the fossil fuel industry isn't surrendering—they're fighting to extend their business model as long as possible despite the physics demanding immediate transformation. The U.S. political choice is stark: continue the renewable energy boom and phase out fossil fuels rapidly, or maintain contradictions that guarantee climate catastrophe. The solutions exist. The question is whether political will can overcome fossil fuel industry power before physics makes the choice for us.`,

  'Uruguay': `# Uruguay - Climate & Environment

Uruguay has accomplished something extraordinary: transforming from 95% fossil fuel dependence in 2008 to approximately 98% renewable electricity generation in 2025, without government subsidies, while reducing electricity costs and creating climate resilience. November 2025 finds this transformation complete—wind turbines across rolling grasslands generate power during Atlantic breezes, hydroelectric dams tap river systems, biomass plants use agricultural waste, and solar farms are expanding rapidly. Here's what gives me hope: Uruguay proves rapid renewable energy transitions are achievable when political will, resource availability, and smart policy align. But climate impacts are intensifying—droughts stress hydropower and agriculture, while Uruguay's contribution to global emissions is negligible compared to responsibility for causing the crisis that now threatens its agricultural economy.

## Renewable Energy Miracle: 98% Clean Electricity

Uruguay's renewable energy transformation ranks among the world's most successful. November 2025 finds approximately 98% of electricity generated from renewables: wind provides roughly 40%, hydroelectric 30%, biomass from agricultural residues 20%, and solar growing rapidly. The transformation occurred 2008-2018 through strategic policy: long-term power purchase agreements providing investor certainty, competitive auctions driving down costs, and grid investments enabling integration of variable renewable energy. No subsidies were required—wind and other renewables competed on cost. The results are extraordinary: electricity prices declined, energy security improved through diversification, and greenhouse gas emissions plummeted. Uruguay demonstrates what's possible when governments prioritize clean energy over fossil fuel interests.

## Agricultural Climate Vulnerability: Droughts Threatening Key Sector

Agriculture comprises approximately 10% of GDP and the vast majority of exports—beef, dairy, soybeans, rice, and forestry products. November 2025 finds the sector increasingly vulnerable to climate change impacts, particularly droughts that have intensified in frequency and severity. The 2022-2023 drought was devastating—agricultural losses exceeded $1 billion, cattle productivity declined from pasture stress, and water reservoirs serving Montevideo reached critically low levels requiring unprecedented restrictions. Climate models project continued warming and changing precipitation patterns that threaten agricultural productivity. Progressive farmers implement climate-resilient practices—rotational grazing, silvopasture systems combining trees and livestock, drought-resistant crop varieties—but adaptation requires support exceeding many farmers' resources.

## Grassland Carbon Sequestration: Natural Climate Solution

Uruguay's extensive grasslands—covering approximately 60% of national territory—represent both agricultural resources and climate solutions. November 2025 finds growing recognition that well-managed grasslands sequester significant carbon in soil while supporting livestock production. The challenge is avoiding degradation through overgrazing, which releases stored carbon and reduces productivity. Progressive ranchers implement rotational grazing that allows pasture recovery, maintains soil carbon, and improves animal productivity. These systems demonstrate climate solutions aligned with economic interests—better land management sequesters carbon while improving ranch profitability. Scaling requires technical support, financing for infrastructure, and market recognition rewarding sustainable practices.

## The International Angle

Uruguay participates actively in international climate negotiations, emphasizing its renewable energy success while highlighting agricultural sector vulnerability to climate impacts it didn't cause. November 2025 COP30 discussions include Uruguay's proposals for recognizing grassland carbon sequestration in climate accounting and supporting agricultural adaptation in vulnerable nations. The country also engages in regional climate cooperation through Mercosur and bilateral agreements with Argentina and Brazil on shared river systems, cross-border transmission infrastructure, and disaster response coordination. Uruguay's renewable energy expertise is being shared with other nations seeking similar transformations.

## The Bottom Line

Uruguay's renewable energy transformation proves rapid decarbonization is achievable—we don't need to wait decades or accept fossil fuel industry claims that transition is impossible. The physics worked, the economics worked, and the politics worked when leaders chose clean energy over fossil fuel interests. But renewable electricity success doesn't protect against droughts intensifying from global emissions Uruguay didn't create. We're running out of time to prevent worse climate impacts, and Uruguay deserves massive international support for agricultural adaptation to impacts caused by wealthy nations' emissions. The fossil fuel industry created this crisis—Uruguay and other vulnerable nations shouldn't pay the price alone.`,

  'Venezuela': `# Venezuela - Climate & Environment

Venezuela holds the world's largest proven oil reserves, built an entire political economy around petroleum exports, and now faces economic collapse partially caused by dependence on the same fossil fuel industry destroying the climate. November 2025 finds Venezuela's oil production at historic lows—approximately 800,000 barrels per day compared to over 3 million in the late 1990s—yet petroleum remains central to government finances and political power. Here's the climate contradiction: Venezuela contributes significantly to global emissions through oil exports while simultaneously facing severe climate impacts including Amazon deforestation, Andean glacial melt, devastating floods, and droughts. The country possesses extraordinary renewable energy potential—hydroelectric, solar, wind—but political and economic crisis prevents development. The physics is clear: Venezuela's oil-dependent model is failing economically and accelerating climate catastrophe.

## Oil Dependency and Climate Contradiction

Venezuelan oil built the modern state, financed social programs, and created political power—and now the entire model is collapsing. November 2025 finds production at approximately 800,000 barrels daily, down from peak production exceeding 3 million barrels due to underinvestment, sanctions, and state oil company (PDVSA) mismanagement. The climate impact is stark: Venezuelan oil exports contributed billions of tons of CO2 emissions burned globally, while oil revenue dependency prevented diversification into renewable energy. The country simultaneously faces severe climate impacts—more intense Caribbean hurricanes, Amazon deforestation, Andean glacial retreat, extreme precipitation causing devastating floods and landslides. The fossil fuel industry's business model created Venezuela's economic power and is now contributing to its climate vulnerability.

## Amazon Deforestation: Illegal Mining Destroying Rainforest

Venezuela holds portions of the Amazon rainforest in southern Bolívar, Amazonas, and Delta Amacuro states—vast territories storing significant carbon and harboring exceptional biodiversity. November 2025 finds these regions under severe pressure from illegal gold mining that has exploded during economic crisis as desperate Venezuelans seek income. Satellite monitoring shows extensive forest clearing and river contamination from mercury used in mining operations. Indigenous communities protecting territories face threats from armed groups controlling mining operations. The Orinoco Mining Arc—a government-promoted mining development zone covering 12% of national territory—threatens to formalize and expand forest destruction. These forests provide global climate benefits; their protection requires economic alternatives and international support for indigenous land rights.

## Hydroelectric Potential Undermined by Mismanagement

Venezuela generates approximately 70% of electricity from hydroelectric dams, principally the Guri Dam on the Caroní River—one of the world's largest hydroelectric facilities. November 2025 finds the system in crisis: chronic blackouts plague the country despite hydroelectric capacity that should provide reliable power. The causes are complex—lack of maintenance investment, drought reducing reservoir levels, grid infrastructure deterioration, and operational mismanagement. Venezuela has additional massive hydroelectric potential that remains undeveloped, plus extraordinary solar and wind resources that could diversify and stabilize electricity supply. But political and economic crisis prevents the investments required. The tragedy is enormous: Venezuela could be a renewable energy powerhouse but instead faces chronic electricity shortages.

## The International Angle

Venezuela's climate diplomacy is complicated by political isolation yet the country participates in regional Amazon cooperation and international climate frameworks. November 2025 finds Venezuela engaging with COP30 negotiations while facing international pressure regarding Amazon deforestation and human rights abuses against indigenous environmental defenders. Regional cooperation focuses on shared Amazon territories with Brazil, Colombia, and Guyana, though political tensions complicate coordination. Venezuela's oil reserves represent a climate test case: will they remain in the ground as physics demands, or be developed despite climate consequences? International climate finance could support renewable energy development, but political conditions currently prevent major investments.

## The Bottom Line

Venezuela's crisis demonstrates the fossil fuel dependency trap: an economy built on oil exports faces collapse as production declines, prevents renewable energy investment, and contributes to climate catastrophe. We're running out of time, and Venezuela's vast oil reserves should stay in the ground if we're serious about climate stability—but political economy makes that choice nearly impossible without international support. Here's what could give hope: Venezuela's renewable energy potential is extraordinary, its people are resourceful, and transition away from oil dependency is both climate imperative and economic necessity. But the fossil fuel industry's century-long business model created this dependency, and breaking free requires transformation that current political and economic conditions don't support. The physics demands Venezuela keep oil in the ground. The politics make that almost impossible.`,
};

// Function to save all climate writeups to database
async function saveAllClimateWriteups() {
  console.log('🌍 CLIMATE & ENVIRONMENT - BILL McKIBBEN VOICE');
  console.log('='.repeat(80));
  console.log('');

  const existing = await prisma.locationSummary.findMany({
    where: { type: 'country', category: 'climate' },
    select: { name: true }
  });

  const existingSet = new Set(existing.map(e => e.name));
  const remaining = ALL_COUNTRIES.filter(c => !existingSet.has(c.name));

  console.log(`📊 Status: ${existing.length} done, ${remaining.length} remaining`);
  console.log(`🎯 Saving ${Object.keys(CLIMATE_WRITEUPS).length} writeups to database\n`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < remaining.length; i++) {
    const country = remaining[i];
    const summary = CLIMATE_WRITEUPS[country.name];

    if (!summary) {
      console.log(`⏭️  Skipping ${country.name} - no writeup available yet`);
      continue;
    }

    try {
      // Extract issues from headers
      const issueMatches = summary.match(/##\s+([^\n]+?)(?=\n)/g) || [];
      const issues = issueMatches
        .map(match => match.replace(/##\s+/, '').trim())
        .filter(issue => !issue.includes('International Angle') && !issue.includes('Bottom Line'))
        .slice(0, 3);

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'climate'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'climate',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          updatedAt: new Date()
        }
      });

      successCount++;
      console.log(`✅ [${i + 1}/${remaining.length}] ${country.name} - ${summary.length} chars, ${issues.length} issues`);

      // Report every 25
      if ((i + 1) % 25 === 0) {
        console.log('');
        console.log('='.repeat(80));
        console.log(`📊 PROGRESS REPORT - ${i + 1} countries processed`);
        console.log(`✅ Successful: ${successCount}`);
        console.log(`❌ Failed: ${errorCount}`);
        console.log(`🌍 Total climate writeups: ${existing.length + successCount}/114`);
        console.log('='.repeat(80));
        console.log('');
      }
    } catch (error) {
      errorCount++;
      console.error(`❌ ${country.name} - Error:`, error);
    }
  }

  console.log('');
  console.log('='.repeat(80));
  console.log('✅ SAVE COMPLETE!');
  console.log('='.repeat(80));
  console.log(`✅ Successfully saved: ${successCount}`);
  console.log(`❌ Failed: ${errorCount}`);
  console.log(`🌍 Total climate writeups in database: ${existing.length + successCount}/114`);
  console.log('='.repeat(80));
}

saveAllClimateWriteups()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
