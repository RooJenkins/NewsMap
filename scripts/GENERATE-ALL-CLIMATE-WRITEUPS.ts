import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:/home/user/NewsMap/prisma/dev.db'
    }
  }
})

const CLIMATE_WRITEUPS = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `Afghanistan faces a devastating climate crisis that compounds decades of conflict and instability. This mountainous nation is experiencing accelerated warming at twice the global average rate—temperatures have risen 1.8°C since 1950—triggering cascading environmental disasters that threaten food security for 40 million people already among the world's most vulnerable.

Water scarcity defines Afghanistan's climate emergency. The country depends on snowmelt and glacial runoff from the Hindu Kush mountains, but rising temperatures are reducing snowpack and accelerating glacier retreat. Spring floods followed by summer droughts have become the devastating norm. The 2018 drought displaced 275,000 people, while 2022 saw catastrophic flooding kill over 180 people. These climate-driven disasters exacerbate humanitarian crises in a nation with minimal adaptive capacity.

Afghanistan contributes virtually nothing to global emissions—among the world's lowest per capita—yet suffers disproportionately. The country lacks baseline climate data, monitoring infrastructure, and institutional capacity to implement adaptation strategies. Decades of war destroyed environmental governance and left landscapes degraded through deforestation for fuel and overgrazing.

Drought frequency has increased dramatically. What were once 20-year droughts now occur every 3-4 years. Groundwater depletion accelerates as farmers drill deeper wells, creating an unsustainable spiral. Agricultural productivity—the livelihood for 70% of Afghans—declines precipitously. Wheat yields drop 15-20% in drought years, pushing millions toward famine.

Renewable energy represents both necessity and opportunity. Afghanistan has abundant solar potential—300+ sunny days annually—yet electrification reaches only 35% of the population, among the world's lowest. Small-scale solar installations provide critical off-grid power in rural areas where centralized infrastructure remains absent. Wind potential exists but remains entirely undeveloped.

The Taliban's 2021 return further complicates climate action. International development funding collapsed, halting nascent renewable projects and climate adaptation programs. The regime shows little capacity or interest in environmental policy, focused instead on immediate survival and security concerns.

Afghanistan's climate future is bleak without massive international support. Adaptation requires reforestation, watershed management, drought-resistant crops, and irrigation infrastructure—investments impossible without political stability and foreign assistance. The country risks becoming a textbook case of climate injustice: minimal historical emissions, maximum contemporary suffering.`
  },
  {
    name: 'Albania',
    lat: 41.1533,
    lng: 20.1683,
    summary: `Albania's climate vulnerability stems from its near-total dependence on hydropower—98% of electricity comes from dams on the Drin, Mat, and Vjosa rivers—making the country extraordinarily sensitive to precipitation variability. Mediterranean climate change is disrupting rainfall patterns, creating a precarious energy situation where droughts trigger nationwide blackouts and economic disruption.

The 2017 drought demonstrated Albania's fragility. Reservoir levels plummeted, forcing Albania to import expensive electricity and reactivate mothballed fossil fuel plants. The crisis cost hundreds of millions of euros and revealed the folly of hydropower monoculture in a warming climate. Projections show Mediterranean precipitation declining 10-20% by 2050 with increased seasonal variability—more winter floods, harsher summer droughts.

Albania is warming faster than the global average. Temperatures have risen 1.5°C since 1960, with summer heatwaves intensifying. Coastal areas face Mediterranean Sea level rise projected at 30-60 cm by 2100, threatening tourism infrastructure along the Albanian Riviera and the low-lying Karavasta Lagoon. Extreme weather events—flash floods in mountainous regions, coastal erosion—are increasing in frequency and severity.

Agriculture employs 40% of Albanians and contributes 20% of GDP, making climate impacts economically critical. Olive groves, vineyards, and fruit orchards face heat stress and changing precipitation. Crop yields for staples like wheat and corn decline during drought years. Rural communities lack irrigation infrastructure, exacerbating vulnerability.

Energy diversification is finally beginning. Albania has signed contracts for its first large-scale solar farms—500 MW planned by 2025—and wind projects in mountainous regions. The EU accession process incentivizes renewable development and climate policy alignment. However, progress is slow, corruption is endemic, and regulatory frameworks remain weak.

Albania's natural heritage faces climate threats. The Vjosa River—Europe's last major "wild river"—is threatened by dam proposals despite international conservation campaigns. Forests covering 35% of Albania are vulnerable to increased wildfire risk during extended droughts. Biodiversity hotspots including Prespa Lakes and Karavasta Lagoon wetlands face ecosystem disruption.

Albania's climate strategy must balance energy security with diversification. Solar and wind can complement hydropower, creating a resilient renewable mix. Improved reservoir management, reforestation for watershed protection, and climate-smart agriculture are essential adaptations for a small Balkan nation confronting Mediterranean climate change.`
  },
  {
    name: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    summary: `Algeria's climate paradox defines its future: vast Saharan solar potential and significant natural gas reserves position the country for renewable energy leadership, yet fossil fuel dependence, political inertia, and water scarcity create one of North Africa's most pressing environmental crises. The largest country in Africa faces existential threats from desertification, extreme heat, and dwindling water resources.

Algeria is heating rapidly. Temperatures have risen 1.5°C since 1950 with projections showing 2-4°C increases by 2050. Heat extremes are intensifying—Algeria recorded 51.3°C in July 2018, among Africa's highest temperatures. Cities like Algiers and Oran face dangerous summer conditions threatening public health, particularly for aging populations in inadequate housing.

Water scarcity is Algeria's most acute climate challenge. The country is already water-stressed—renewable freshwater per capita is among the world's lowest—and climate change is reducing rainfall in the narrow northern coastal belt where 90% of Algerians live. Groundwater extraction far exceeds recharge rates. Desertification advances northward, with the Sahara expanding into agricultural lands. Algeria operates numerous desalination plants along the coast, an energy-intensive necessity consuming significant electricity.

Fossil fuels dominate Algeria's economy and emissions profile. Natural gas and oil comprise 95% of export revenues—Algeria is Africa's largest gas producer and a major LNG exporter to Europe. This economic structure creates powerful vested interests opposing energy transition despite obvious climate impacts. Algeria flares massive quantities of associated gas, wasting resources while emitting greenhouse gases.

Renewable energy potential is staggering yet barely exploited. The Sahara receives among the world's highest solar irradiation—Algeria could theoretically power much of Europe with solar installations. The government announced ambitious targets: 15 GW of solar by 2030—yet implementation lags far behind rhetoric. Only about 600 MW of solar capacity is operational, a fraction of potential. Wind resources exist but remain underdeveloped.

Agriculture faces existential climate threats. Wheat production—Algeria is the world's fifth-largest wheat importer—suffers from droughts and heat stress. Date palm cultivation in oases is threatened by groundwater depletion. Pastoral communities in the Sahel transition zone face collapse as grazing lands disappear.

Algeria's climate future depends on political will. Diversifying beyond fossil fuels, massive solar investment, water management innovation, and agricultural adaptation are imperative. The 2019-2021 Hirak protest movement raised environmental awareness, but entrenched fossil fuel interests and weak governance impede progress. Algeria risks squandering renewable potential while its people suffer climate impacts.`
  },
  {
    name: 'Angola',
    lat: -11.2027,
    lng: 17.8739,
    summary: `Angola confronts a cruel climate irony: the southern African nation possesses vast hydropower potential along the Kwanza and Cunene rivers, yet droughts are intensifying, rainfall patterns are destabilizing, and food security for 35 million people is increasingly precarious. Climate change amplifies the challenges of a nation still recovering from decades of civil war that destroyed infrastructure and institutions.

Southern Africa is among the world's most climate-vulnerable regions, with warming proceeding faster than the global average. Angola has experienced temperature increases of 1.4°C since 1960, with projections showing 2-3°C rises by mid-century. Rainfall variability is the defining challenge—total precipitation may not decrease dramatically, but seasonality is shifting. The rainy season is shortening and becoming more erratic, with intense downpours alternating with prolonged dry spells.

Water resources drive Angola's energy and agriculture. Hydropower provides 65% of electricity, with major dams including the 2.1 GW Laúca facility completed in 2017. However, drought vulnerability was starkly demonstrated during 2019 when reservoir levels dropped critically, forcing electricity rationing in Luanda. Climate models project increased drought frequency, threatening energy security for a country already struggling with 35% electrification rates.

Agriculture employs 60% of Angolans and is overwhelmingly rain-fed. Smallholder farmers growing maize, cassava, and beans face devastating crop failures during droughts. The 2021 drought in southern Angola pushed 1.3 million people into food insecurity. Pastoral communities in the southwest face collapsing livestock systems as grazing lands degrade and water points dry up. Angola imports 70% of food despite agricultural potential, a dependency climate change will intensify.

Coastal areas face multiple threats. Atlantic Ocean warming affects fisheries—sardine and anchovy stocks that provide protein and livelihoods for coastal communities are shifting. Sea level rise threatens low-lying areas around Luanda and Benguela. Mangrove ecosystems critical for coastal protection and fish nurseries are vulnerable to saltwater intrusion.

Angola's emissions remain relatively low on a per capita basis, though oil and gas production—the economic backbone—creates significant fossil fuel combustion. The country is Africa's second-largest oil producer, and petroleum dominates exports. Economic diversification remains aspirational.

Renewable energy development beyond hydro is nascent. Angola has excellent solar potential—abundant sunshine year-round—yet solar capacity is minimal. Small-scale solar installations provide off-grid power in rural areas, but large-scale deployment requires investment and regulatory frameworks currently absent. Wind potential exists along the coast but remains unexplored.

Angola's climate adaptation requires agricultural transformation—drought-resistant crops, improved irrigation, climate information services for farmers—and energy diversification to reduce hydropower vulnerability. Political will and institutional capacity remain the binding constraints for a country where corruption and weak governance impede climate action.`
  },
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `Argentina embodies climate contradictions: a country blessed with extraordinary renewable energy resources—the Vaca Muerta shale formation holds world-class gas reserves, Patagonian winds howl with power potential, and northern deserts blaze with solar possibility—yet chronic political instability, boom-bust economics, and policy incoherence have prevented Argentina from capitalizing on its advantages. Climate impacts intensify while the country lurches between energy self-sufficiency and crisis.

Argentina is warming across its vast territory, from subtropical north to subantarctic south. Temperatures have risen 0.5-1°C since 1960, with accelerated warming in Patagonia. Climate change manifests differently across regions: the humid Pampas—Argentina's agricultural heartland—experiences more intense rainfall and flooding, while the northwest faces worsening droughts. Extreme weather events are intensifying. The 2022-2023 drought was the worst in decades, devastating soy and wheat production.

Agriculture drives Argentina's economy and emissions profile. The country is the world's third-largest soy exporter, a major wheat and beef producer, and agricultural exports provide critical foreign exchange. Climate change directly threatens this economic foundation. Droughts reduce crop yields and rangelands, while flooding damages infrastructure. Agricultural expansion—particularly soy cultivation—has driven massive deforestation, particularly in the Gran Chaco, eliminating carbon sinks and exacerbating climate vulnerability.

Energy policy has been erratically politicized for decades. Argentina swings between market-oriented reforms and populist interventions. The Kirchner governments (2003-2015) imposed price controls and export restrictions that destroyed investment incentives, leading to energy shortages. The Macri administration (2015-2019) attempted liberalization, sparking public anger over price hikes. President Milei's 2023 shock therapy slashed subsidies, causing energy costs to spike—economically rational but socially explosive.

Renewable energy has surged despite policy chaos. The RenovAr program catalyzed wind and solar development—Patagonia's wind farms and northern solar installations now provide 15%+ of electricity. Argentina has 3 GW of wind capacity and 1 GW of solar, with more under development. The potential is far larger: Patagonian winds are world-class, and northern solar irradiation rivals the Atacama Desert.

Hydropower provides baseload from facilities like Yacyretá on the Paraná River, though climate-driven river flow variability creates uncertainty. Nuclear power contributes 5-7% of electricity from aging reactors. Fossil fuels—especially natural gas—remain dominant for electricity and heating.

Vaca Muerta development is Argentina's energy wildcard. This shale formation in Neuquén province holds 308 trillion cubic feet of technically recoverable gas. Production has grown rapidly, reducing dependence on Bolivian imports and enabling exports to Chile and Brazil. However, developing Vaca Muerta requires massive investment, political stability, and infrastructure—all chronically scarce in Argentina.

Argentina's climate future hinges on political stability. The country could become a renewable energy powerhouse and agricultural giant adapted to climate change—or sink into recurring crises where climate impacts exacerbate economic dysfunction. Institutional strength will determine which path prevails.`
  },
  {
    name: 'Armenia',
    lat: 40.0691,
    lng: 45.0382,
    summary: `Armenia's climate vulnerability reflects its landlocked mountainous geography and scarce water resources. This small Caucasus nation of 3 million faces temperature increases above the global average—warming has reached 1.2°C since 1929—with projections showing 1.5-3°C further increases by 2100. Water scarcity, extreme weather, and agricultural vulnerability define Armenia's climate challenge.

Water is Armenia's most critical climate concern. The country depends on snowmelt and mountain springs, but rising temperatures are reducing snowpack duration and accelerating glacier retreat. Lake Sevan—Armenia's "blue eye" holding 58 cubic kilometers of water—faces complex climate pressures. Reduced precipitation and increased evaporation lower water levels, threatening this critical freshwater resource used for irrigation, hydropower, and drinking water. Competing demands create difficult tradeoffs.

Hydropower generates approximately 35% of Armenia's electricity from facilities along the Vorotan, Hrazdan, and Arpa rivers. Climate-driven flow variability creates energy security challenges, particularly during low-water years. Armenia also operates the Metsamor nuclear plant—providing 35% of electricity—and burns natural gas imported from Russia for the remainder. Energy import dependence creates geopolitical and economic vulnerabilities.

Renewable energy development is gradually advancing. Armenia has significant solar potential—averaging 1,720 kWh/m² annually—and has begun deploying utility-scale solar farms. Wind potential exists but remains largely unexplored due to complex mountainous terrain. Small-scale solar installations are proliferating for residential and commercial use. The government targets 30% renewable electricity by 2025, though implementation lags ambitions.

Agriculture employs 30% of Armenians and is highly climate-vulnerable. Fruit cultivation—apricots, grapes, pomegranates—faces heat stress and water scarcity. Wheat and barley production suffers during droughts. The 2020 drought reduced agricultural output 30%, demonstrating acute vulnerability. Irrigation infrastructure is aging and inefficient, dating from Soviet times. Climate adaptation requires modernized water management and drought-resistant crop varieties.

Extreme weather events are increasing. Flash floods in spring from rapid snowmelt cause damage in mountainous regions. Hailstorms devastate orchards and vineyards. Landslides triggered by intense rainfall threaten villages and infrastructure. Early spring warmth followed by late frosts harm fruit crops, causing economic losses.

Armenia's forests—covering 11% of the country—face climate stress. Rising temperatures and reduced moisture increase wildfire risk. Pests and diseases are expanding their ranges. Deforestation for firewood and overgrazing compound climate pressures, degrading watersheds and reducing carbon sequestration.

Armenia's climate future requires integrated water management, agricultural adaptation, and renewable energy expansion. The country's small size and limited resources necessitate international cooperation and climate finance. Regional geopolitical tensions—particularly with Azerbaijan over Nagorno-Karabakh—complicate climate policy coordination in the South Caucasus, where transboundary water management is essential but politically fraught.`
  },
  {
    name: 'Australia',
    lat: -25.2744,
    lng: 133.7751,
    summary: `Australia stands at the frontline of climate catastrophe. The driest inhabited continent is experiencing warming at 1.4°C above pre-industrial levels—exceeding the global average—with projections showing 2.5-4°C increases by 2100 under current trajectories. Climate change is not a future threat for Australia; it is a present emergency manifesting through unprecedented bushfires, coral bleaching, extreme heat, and intensifying droughts that threaten ecosystems, agriculture, and habitability.

The 2019-2020 Black Summer bushfires incinerated an area larger than the United Kingdom, killing billions of animals and destroying thousands of homes. These megafires—driven by record heat, prolonged drought, and extreme fire weather—represent Australia's climate reality. Fire seasons are lengthening and intensifying. What were once rare events are becoming regular occurrences, with catastrophic fire danger days increasing in frequency.

The Great Barrier Reef—the world's largest coral ecosystem and a global biodiversity treasure—is dying from marine heatwaves. Coral bleaching events that historically occurred once per generation now happen every few years. Ocean temperatures in the Coral Sea have risen 0.8°C since 1900, with projections showing 1.5-3°C increases by 2100. At 1.5°C global warming, 70-90% of coral reefs die; at 2°C, 99% are gone. Australia is witnessing ecological collapse in real-time.

Extreme heat is Australia's deadliest climate impact. Heatwaves kill more Australians than all other natural disasters combined. Western Sydney recorded 48.9°C in January 2020—unprecedented urban heat. Cities face dangerous wet-bulb temperatures approaching human physiological limits. Infrastructure buckles—roads melt, train tracks warp, power grids fail under air conditioning demand.

Water scarcity defines climate vulnerability. The Murray-Darling Basin—Australia's food bowl producing 40% of agricultural output—faces existential drought. River flows have declined 40% since 1975. Groundwater extraction exceeds recharge. Agriculture suffers devastating impacts: wheat yields fluctuate wildly, dairy farms collapse during droughts, and water markets create bitter conflicts between farmers, environmentalists, and cities.

Australia's climate politics are globally notorious. The country is one of the world's largest coal exporters and has among the highest per capita emissions. Fossil fuel interests wield enormous political power—coal and gas lobbies have effectively captured policymaking for decades. Climate action has been sabotaged repeatedly. Australia missed its 2020 Kyoto targets and set inadequate 2030 goals. The Morrison government (2018-2022) was actively hostile to climate action, while the Albanese government elected in 2022 has improved rhetoric but approved new coal and gas projects.

Renewable energy offers hope. Australia has world-class solar and wind resources—sunshine and space in abundance. Rooftop solar penetration is the world's highest per capita. Large-scale solar and wind farms are rapidly expanding. South Australia occasionally runs on 100% renewables. Battery storage is advancing. Australia could become a renewable energy superpower, exporting green hydrogen globally—yet fossil fuel addiction persists.

Australia's climate future demands radical transformation: rapid fossil fuel phase-out, massive renewable deployment, bushfire adaptation, agricultural restructuring, and ecosystem protection. The country faces a choice between leading global climate solutions or remaining a cautionary tale of wealth, resources, and political failure colliding with physical reality.`
  },
  {
    name: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    summary: `Austria's Alpine climate vulnerability creates cascading challenges for this small Central European nation of 9 million. The country is warming twice as fast as the global average—temperatures have risen 2°C since 1880—with projections showing 3-4°C increases by 2100. Glaciers are vanishing, ski seasons shrinking, and extreme weather intensifying in a country whose economy, water resources, and cultural identity are intimately tied to mountain environments.

Alpine glaciers are disappearing before Austria's eyes. The country has lost 50% of its glacier ice since 1850, with acceleration in recent decades. Iconic glaciers like the Pasterze in the Hohe Tauern are retreating 30-50 meters annually. Projections show 75-90% of remaining glaciers will disappear by 2100. This is not just scenic loss—glaciers regulate water flow, sustain rivers during summer, and support hydropower generation.

Hydropower generates 60-70% of Austria's electricity from facilities throughout the Alps. Climate change creates complex impacts: short-term increases in glacier melt boost river flows temporarily, but long-term glacier loss will reduce summer water availability. Changing precipitation patterns—more winter rain, less snow—alter hydropower reliability. Austria must adapt hydropower operations to new hydrological regimes.

Austria's economy is vulnerable through multiple pathways. Winter tourism provides 15% of GDP and hundreds of thousands of jobs. Ski resorts below 1,500 meters face existential threats as snow cover declines and seasons shorten. Summer tourism faces heat and water scarcity challenges. Agriculture suffers from droughts, late frosts, and extreme weather. The 2018 drought caused €150 million in agricultural losses.

Renewable energy expansion is advancing rapidly. Austria targets 100% renewable electricity by 2030—an ambitious goal requiring massive solar and wind deployment to complement hydropower. Wind farms are expanding in Lower Austria and Burgenland. Rooftop solar is proliferating. The challenge is replacing fossil fuels in heating (still 35% oil and gas) and transport.

Austria's emissions profile is complicated by its small size and integration in European energy markets. The country imports electricity during winter and exports hydro-generated power in summer. Per capita emissions of 7.4 tons CO2 are lower than many EU countries but must reach net-zero by 2040 under national law. Transport—particularly transit through the Alps—creates significant emissions.

Extreme weather is intensifying. Flash floods in mountain valleys cause deaths and infrastructure damage. The 2021 floods destroyed roads and bridges. Landslides triggered by intense rainfall threaten alpine communities. Heatwaves stress urban populations—Vienna recorded 39.5°C in 2019. Droughts affect the Danube River, impacting agriculture and transport.

Austria's forests—covering 48% of the country—face climate stress. Bark beetle outbreaks devastate spruce forests already weakened by drought and heat. Wildfires, historically rare, are increasing. Forest dieback threatens the timber industry and carbon sinks.

Austria's climate strategy requires hydropower adaptation, rapid renewable deployment, building retrofits for heating efficiency, and transport electrification. The country's Alpine ecology demands protection—Austria is a climate frontline where warming impacts are visible, measurable, and accelerating.`
  },
  {
    name: 'Azerbaijan',
    lat: 40.1431,
    lng: 47.5769,
    summary: `Azerbaijan epitomizes the petrostate climate dilemma: a country whose economy is built on oil and gas exports confronts mounting climate impacts while lacking political will or economic incentives to transition away from fossil fuels. Temperature increases of 1.3°C since 1960 and water scarcity in this Caucasus nation of 10 million create vulnerabilities that hydrocarbon wealth cannot offset.

Azerbaijan is the birthplace of the modern oil industry—petroleum has been extracted from Baku since the 1840s—and fossil fuels dominate the economy. Oil and gas comprise 90% of export revenues and 35% of GDP. The country is a major pipeline hub for Caspian energy flowing to Turkey and Europe. This creates powerful structural opposition to energy transition despite obvious climate risks.

Climate change manifests through water scarcity and temperature extremes. Azerbaijan is already water-stressed, with per capita renewable freshwater among the lowest in the South Caucasus. Climate change is reducing precipitation and increasing evaporation. The Kura and Aras rivers—fed by snowmelt from Caucasus mountains—face reduced flows as warming diminishes snowpack. Agriculture depends on irrigation, but water availability is declining.

Temperature extremes are intensifying. Summer heat in Baku regularly exceeds 40°C. The capital sits on the Caspian Sea, but this landlocked water body is warming and its level fluctuates dramatically—falling 1.5 meters since 1995 due to climate variability and river diversions. Coastal infrastructure and oil installations face uncertain futures.

Agriculture employs 35% of Azerbaijanis and is highly vulnerable. Cotton cultivation—historically important—consumes vast water resources. Viticulture and fruit cultivation in the foothills face heat stress and water scarcity. The Kur-Araz lowlands, Azerbaijan's breadbasket, depend on irrigation from increasingly stressed rivers. Droughts cause crop failures, threatening food security.

Renewable energy potential exists but remains largely unexploited. Azerbaijan has good wind resources along the Caspian coast and decent solar potential. However, with abundant cheap gas available domestically, economic incentives for renewables are weak. The government has announced renewable targets—30% of capacity by 2030—but implementation is slow. A few wind farms have been built with foreign investment, but the scale is minimal compared to potential.

Natural gas dominates electricity generation—90% of power comes from gas-fired plants. This makes Azerbaijan's domestic energy carbon-intensive despite low coal use. The country's emissions per capita are high by regional standards, driven by oil and gas production, processing, and domestic consumption.

Environmental degradation compounds climate vulnerability. The Soviet legacy left Azerbaijan with severe pollution—oil-contaminated land around Baku, Caspian Sea oil spills, industrial waste. Deforestation and overgrazing have degraded landscapes. The Kura River is heavily polluted from agricultural runoff and industrial discharge.

Azerbaijan's climate future is clouded by economic and political realities. The country needs to diversify beyond fossil fuels, develop renewable energy, modernize agriculture with water efficiency, and restore degraded ecosystems. However, authoritarian governance, corruption, and hydrocarbon dependence make transformative climate action improbable. Azerbaijan will likely experience worsening climate impacts while continuing to produce and profit from fossil fuels—a dangerous path forward.`
  },
  {
    name: 'Bangladesh',
    lat: 23.6850,
    lng: 90.3563,
    summary: `Bangladesh is the world's most climate-vulnerable nation. This densely populated delta country of 170 million people—inhabiting land barely above sea level at the confluence of the Ganges, Brahmaputra, and Meghna rivers—faces existential threats from sea level rise, cyclones, flooding, and extreme heat. Bangladesh contributes 0.4% of global emissions yet suffers disproportionately, epitomizing climate injustice.

Sea level rise threatens to inundate vast areas. With 80% of the country floodplain, even moderate sea level increases—projected 30-60 cm by 2100—will displace millions. Coastal areas face saltwater intrusion destroying agricultural land and freshwater supplies. The Sundarbans mangrove forest—a UNESCO World Heritage site and Bengal tiger habitat—is being swallowed by rising waters. Climate models project 17% of Bangladesh could be underwater by 2050, creating 20 million climate refugees.

Tropical cyclones are intensifying. Bangladesh is lethally exposed to Bay of Bengal storms. Historical cyclones killed hundreds of thousands—the 1970 Bhola cyclone killed 300,000-500,000 people. Improved early warning and cyclone shelters have reduced deaths, but economic damages escalate. Cyclone Amphan in 2020 caused $14 billion in damage. Storm surges push seawater inland, devastating coastal communities.

Flooding is annual and worsening. Monsoon rains cause rivers to overflow, inundating rural areas and urban centers. One-third to one-half of Bangladesh floods annually. Climate change is increasing rainfall intensity while accelerating Himalayan glacier melt, increasing river discharge. Dhaka floods regularly, paralyzing the megacity of 22 million. Millions of rural dwellers face recurring displacement, livelihoods destroyed, and homes washed away.

Extreme heat is becoming lethal. Temperatures regularly exceed 40°C during pre-monsoon periods. High humidity creates dangerous wet-bulb temperatures approaching human survivability limits. Agricultural workers, rickshaw drivers, and outdoor laborers face heat stress. Urban heat islands intensify impacts in crowded cities with limited cooling. Bangladesh could experience conditions physiologically incompatible with human habitation.

Agriculture faces multiple climate stresses. Bangladesh depends on rice cultivation—three crops annually in deltaic soils—but salinity, floods, and droughts threaten food security. Fisheries and aquaculture—critical protein sources—suffer from changing water temperatures and salinity. Deltaic islands are submerging, destroying homes and farms.

Bangladesh emits minimal greenhouse gases—per capita emissions are under 0.6 tons CO2—yet must adapt aggressively. The country has pioneered climate adaptation: floating gardens, cyclone-resistant housing, community-based disaster preparedness, and migration strategies. Bangladesh is a global leader in recognizing climate migration as inevitable and planning accordingly.

Renewable energy is expanding rapidly. Bangladesh has deployed millions of solar home systems—among the world's largest off-grid solar programs—providing electricity to rural areas without grid access. The government targets 40% renewable energy by 2041, with large-scale solar farms under development. However, most electricity still comes from gas and imported coal.

Bangladesh's climate future is uncertain. The country demonstrates remarkable resilience and adaptation innovation, but physical realities impose brutal constraints. Climate change could make Bangladesh partially uninhabitable, creating humanitarian catastrophe and massive migration pressures. International climate finance and emissions reductions are moral imperatives—Bangladesh's survival depends on global action.`
  },
  {
    name: 'Belarus',
    lat: 53.7098,
    lng: 27.9534,
    summary: `Belarus faces climate change as an authoritarian post-Soviet state with aging infrastructure, energy dependence on Russia, and limited institutional capacity for adaptation. Temperatures have risen 1.1°C since 1989, with warming accelerating. This landlocked Eastern European nation of 9.4 million confronts shifting precipitation patterns, agricultural vulnerability, and energy challenges while political isolation limits international climate cooperation.

Climate impacts manifest through changing seasons and extreme weather. Spring arrives earlier, autumn extends longer, and winter shortens with less snow cover and more freeze-thaw cycles. These shifts disrupt agriculture, damage infrastructure, and alter ecosystems. Extreme weather events—floods, droughts, storms—are increasing in frequency. The 2015 drought reduced grain harvests by 25%, while 2017 spring floods caused widespread damage.

Agriculture is highly vulnerable. Belarus is a major agricultural producer—potatoes, grain, dairy, meat—and farming employs 10% of the workforce. Climate change creates mixed impacts: warmer temperatures extend growing seasons in some regions, but droughts, heat stress, and changing pest dynamics threaten yields. Soil moisture deficits during critical growth periods reduce productivity. Belarus lacks widespread irrigation infrastructure, making agriculture dependent on rainfall.

Belarus generates 95% of electricity from natural gas imported from Russia and domestic nuclear power. The Astravets nuclear plant—Belarus's first, completed in 2021 despite controversy—provides about 40% of electricity, reducing gas dependence. However, climate change affects cooling water availability for nuclear operations, creating operational challenges during extreme heat and low river flows.

Renewable energy development is minimal. Belarus has limited solar and wind resources compared to Western Europe. The government has set modest renewable targets—8% by 2030—but implementation lags. Small-scale biogas from agricultural waste and a few wind farms constitute the renewable sector. Political isolation following the Lukashenko regime's 2020 crackdown limits access to European climate finance and technology.

Forests cover 40% of Belarus and face climate stress. Warmer, drier conditions increase wildfire risk—the 2020 wildfires in the Chernobyl Exclusion Zone released radioactive particles, creating health concerns. Bark beetle outbreaks damage coniferous forests. Peatland ecosystems—covering 15% of Belarus—are vulnerable to drainage and fire, releasing stored carbon.

Belarus's unique climate vulnerability stems from Chernobyl legacy contamination. About 20% of Belarus was contaminated by the 1986 nuclear disaster. Climate change affects contaminated zones through forest fires that mobilize radioactive particles, altered water flows redistributing contaminants, and changing agricultural conditions in affected areas.

Belarus's climate future is constrained by authoritarianism, economic stagnation, and geopolitical isolation. The country needs agricultural adaptation, renewable energy development, and ecosystem protection, but political dysfunction and dependence on Russia limit progress. Belarus remains a climate backwater in Europe, vulnerable yet isolated.`
  },
  {
    name: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    summary: `Belgium's climate challenge reflects its status as a small, densely populated, highly industrialized European nation transitioning away from fossil fuels while confronting increasing flood risk and heat stress. Temperatures have risen 2.3°C since 1890—faster than the EU average—with projections showing 2-4°C further increases by 2100. Extreme weather and energy transition dominate Belgium's climate agenda.

Flooding is Belgium's most visible climate threat. The catastrophic July 2021 floods in the Meuse Valley killed 41 people and caused €2.5 billion in damage—the worst natural disaster in Belgian history. Extreme rainfall events—once rare—are becoming more frequent as climate change intensifies weather patterns. Urban areas face compounding flood risk from impermeable surfaces and aging drainage systems. Brussels regularly experiences flash flooding during intense downpours.

Heat stress is intensifying in Belgian cities. Summer heatwaves now regularly exceed 35°C—temperatures historically rare. The 2019 heatwave set records above 40°C. Urban heat islands amplify impacts in Brussels, Antwerp, and other cities where elderly populations face health risks. Belgium's housing stock—built for cold, wet climates—lacks air conditioning, creating dangerous conditions during extreme heat.

Belgium's energy transition is complex and contested. The country historically depended on nuclear power—seven reactors provided 50% of electricity—but a politically driven phase-out aims to close all nuclear plants by 2025. This creates a climate paradox: shutting down zero-carbon nuclear while still burning fossil fuels. Natural gas currently provides 30% of electricity, and the nuclear phase-out will likely require more gas-fired generation in the short term unless renewable deployment accelerates dramatically.

Renewable energy is expanding but Belgium lags EU peers. Offshore wind in the North Sea provides growing capacity—2.3 GW operational with more planned. Onshore wind and solar face space constraints in this densely populated country. Rooftop solar is increasing, supported by subsidies, but total renewable electricity remains around 25%. Belgium imports significant electricity from France and the Netherlands.

Belgium's emissions profile is complicated. Per capita emissions of 9 tons CO2 are moderate by European standards but must reach net-zero by 2050. Transport and heating are major sources. Belgium's federal structure—split between Flanders, Wallonia, and Brussels—fragments climate policy, with regional governments pursuing different approaches. Political fragmentation impedes coherent national climate strategy.

Agriculture faces climate pressures despite being a small economic sector. Belgian farming—dairy, vegetables, grains—suffers from droughts and floods. The 2018 drought reduced yields significantly. Farmers lack crop insurance against climate extremes, creating financial vulnerability.

Belgium's climate future requires accelerating renewable deployment, deciding whether to reconsider nuclear phase-out, flood infrastructure investment, and urban adaptation for heat. The 2021 floods created political urgency for climate adaptation, but implementation remains slow. Belgium exemplifies the challenges of energy transition in a densely populated, politically fragmented European country confronting accelerating climate impacts.`
  },
  {
    name: 'Belize',
    lat: 17.1899,
    lng: -88.4976,
    summary: `Belize faces Caribbean climate catastrophe despite being Central America's smallest country and lowest emitter. This nation of 420,000 people—with 40% of territory below 2 meters elevation and economy dependent on tourism, agriculture, and coastal resources—confronts hurricanes, sea level rise, coral bleaching, and flooding. Belize contributes virtually nothing to climate change yet faces existential threats.

Hurricanes are intensifying and more frequent. Category 4-5 storms devastate Belize repeatedly: Hurricane Hattie (1961) destroyed Belize City, Hurricane Mitch (1998) caused catastrophic damage, Hurricane Earl (2016) hit directly, and 2020 saw Hurricanes Nana and Eta within months. Climate change is creating favorable conditions for more intense storms. Belize lacks resources for rapid recovery—each hurricane sets development back years.

The Belize Barrier Reef—the world's second-largest and a UNESCO World Heritage site—is dying from ocean warming and acidification. Coral bleaching events are increasing in frequency and severity. The 2016 and 2023 mass bleaching events killed extensive coral. The reef provides critical storm protection, fisheries, and tourism revenue—its degradation threatens Belize's economy and coastal communities. Marine protected areas cover 20% of Belize's ocean territory, but local protection cannot stop global ocean warming.

Sea level rise threatens low-lying cayes (islands) and coastal areas where most Belizeans live. Projections showing 30-50 cm rise by 2100 will inundate populated areas, destroy mangroves, and cause saltwater intrusion into freshwater aquifers. The cayes—including tourism hubs like Ambergris Caye and Caye Caulker—face partial submersion. Mangrove ecosystems critical for storm protection and fish nurseries are being squeezed between rising seas and human development.

Rainfall patterns are changing with severe consequences. Belize depends on predictable rainy seasons for agriculture and freshwater, but climate change is creating erratic precipitation—intense downpours alternating with droughts. The 2019 drought severely impacted agriculture, while 2020 floods destroyed crops and infrastructure. These extremes threaten food security and the agricultural economy.

Tourism—25% of GDP—is climate-vulnerable through multiple pathways. Hurricanes destroy infrastructure and deter visitors. Coral bleaching reduces dive tourism appeal. Beach erosion and sea level rise threaten coastal resorts. Extreme heat makes tourism less comfortable. Belize's tourism brand emphasizes pristine nature, making environmental degradation economically devastating.

Agriculture faces compounding stresses. Sugar cane, citrus, and banana production—export earners—suffer from droughts, floods, and hurricanes. Smallholder farmers lack resources for climate adaptation. Shifting rainfall makes traditional farming practices less reliable. Food security is vulnerable for a country that imports most processed food.

Renewable energy potential exists. Belize generates 40% of electricity from hydropower, but climate-driven flow variability creates challenges. Solar potential is excellent—abundant sunshine—yet large-scale deployment is limited. Imported petroleum fuels transport and provides backup electricity generation. Belize could achieve high renewable penetration but lacks capital and infrastructure.

Belize's climate future demands international support. The country is pioneering blue carbon initiatives—mangrove and seagrass conservation—and pursuing climate adaptation strategies, but resources are limited. Belize exemplifies climate injustice: minimal emissions, maximum vulnerability, insufficient capacity. Without aggressive global emissions cuts and climate finance, Belize faces catastrophic impacts.`
  },
  {
    name: 'Benin',
    lat: 9.3077,
    lng: 2.3158,
    summary: `Benin confronts West African climate vulnerability as a small, low-income nation of 13 million dependent on rain-fed agriculture and exposed to coastal flooding. Temperatures have risen 1°C since 1961 with projections showing 1.5-3°C increases by 2050. Shifting rainfall patterns, extreme weather, and coastal erosion threaten food security and livelihoods in a country with minimal adaptive capacity.

Rainfall variability is Benin's defining climate challenge. The country has two climate zones: the humid south with bimodal rainfall and the semi-arid north with a single rainy season. Climate change is making precipitation more erratic and unpredictable. Rainy seasons are shortening with more intense downpours, while dry seasons extend. This creates devastating impacts for agriculture that depends on predictable rainfall. Droughts and floods increasingly alternate, destroying crops and livelihoods.

Agriculture employs 70% of Benin's workforce and drives the economy. Cotton is the primary export, while maize, yams, cassava, and cowpeas provide food. Rain-fed agriculture makes farmers extraordinarily vulnerable to climate variability. Droughts reduce yields catastrophically—the 2011 drought caused widespread food insecurity. Flooding destroys crops, particularly in the Ouémé River valley. Farmers lack irrigation, crop insurance, or resources for adaptation.

Coastal erosion is accelerating along Benin's 125-kilometer coastline. Sea level rise combines with ocean dynamics and sand mining to erode beaches at 10-20 meters annually in some locations. Coastal communities including Cotonou—the economic capital—face flooding and infrastructure loss. Fisheries provide protein and livelihoods but are threatened by coastal degradation and ocean warming. The Gulf of Guinea's fish stocks are shifting, affecting artisanal fishers.

Extreme heat is intensifying. Temperatures regularly exceed 38°C during the hot season, with northern regions experiencing even higher extremes. Heat stress affects agricultural workers, children, and the elderly. Urban areas including Cotonou and Porto-Novo face dangerous heat island effects. Most Benin residents lack access to cooling, making heat waves life-threatening.

Energy poverty compounds climate vulnerability. Only 40% of Benin has electricity access, dropping to 10% in rural areas. Most electricity comes from imported power and fossil fuel generation. Benin has significant solar potential—strong sunshine year-round—yet large-scale renewable deployment is minimal. The government targets increased renewable energy, but implementation requires investment and infrastructure currently lacking.

Deforestation and land degradation exacerbate climate vulnerability. Forest cover has declined from 47% in 1990 to 40% currently. Clearing for agriculture, charcoal production, and timber removes carbon sinks and degrades watersheds. Soil degradation reduces agricultural productivity, creating a vicious cycle where farmers clear more land to compensate for declining yields.

Benin's adaptive capacity is constrained by poverty, weak institutions, and limited resources. The country ranks 163rd of 191 on the UN Human Development Index. Climate adaptation requires irrigation infrastructure, drought-resistant crop varieties, early warning systems, and coastal protection—investments difficult for a country with GDP per capita under $1,500.

Benin's climate future depends significantly on international climate finance and West African regional cooperation. The country is developing climate adaptation plans and pursuing renewable energy, but implementation requires external support. Benin exemplifies the challenge facing low-income countries: high climate vulnerability, low historical emissions, and insufficient resources for adaptation.`
  },
  {
    name: 'Bhutan',
    lat: 27.5142,
    lng: 90.4336,
    summary: `Bhutan presents a climate paradox: this Himalayan Buddhist kingdom of 770,000 people is carbon-negative—absorbing more CO2 than it emits—yet faces devastating climate impacts from glacier retreat, glacial lake outburst floods (GLOFs), and changing monsoon patterns. Bhutan's constitutional commitment to maintaining 60% forest cover and its Gross National Happiness development philosophy prioritize environmental protection, but physical climate realities threaten this mountain nation.

Himalayan warming is accelerating at twice the global average rate. Temperatures in Bhutan have risen 1.4°C since 1990, with high-altitude regions warming even faster. Glaciers are retreating rapidly—Bhutan has approximately 700 glaciers covering 11% of the country, and most are losing mass. The Thorthormi glacier has retreated 2.7 kilometers since 1990. This creates immediate hazards and long-term water security concerns.

Glacial Lake Outburst Floods (GLOFs) are Bhutan's most acute climate threat. Warming creates and expands glacial lakes behind unstable moraine dams. When these natural dams fail, catastrophic floods destroy everything downstream. The 1994 GLOF from Lugge Tsho killed 23 people and devastated villages and farmland. Bhutan has identified 25 glacial lakes at critical risk. The government has pioneered GLOF mitigation—lowering lake levels through controlled drainage—but many dangerous lakes remain.

Water resources face long-term uncertainty. Bhutan depends on glacier and snowmelt feeding its rivers. Short-term increases in glacial melt boost river flows temporarily, but eventual glacier disappearance will reduce water availability. This threatens hydropower—currently 99% of Bhutan's electricity and its largest export—and agriculture. The country's economic development strategy emphasizes hydropower exports to India, creating climate vulnerability through water dependence.

Agriculture is highly vulnerable despite employing 50% of Bhutanese. Rice cultivation in valleys, maize and potato farming on terraced slopes, and yak herding in high pastures all face climate disruption. Changing monsoon patterns make rainfall unpredictable. Early spring warmth followed by late frosts damages crops. Pests and diseases are expanding into higher elevations as temperatures rise. Food self-sufficiency—a national goal—is threatened.

Bhutan is remarkably climate-forward despite limited resources. The constitution mandates 60% forest cover—currently 72%—making Bhutan carbon-negative. The country generates 99% of electricity from hydropower. All agriculture is organic by government policy. Bhutan pioneered the "high-value, low-impact" tourism model, limiting visitors to protect culture and environment. These policies reflect Buddhist values and development philosophy prioritizing environmental sustainability.

Extreme weather is intensifying. Flash floods from extreme monsoon rainfall devastate mountain villages and infrastructure. Landslides triggered by intense rain and glacial destabilization destroy roads and homes. The 2000 Yoethang Chhu flood destroyed entire settlements. Climate change is increasing the frequency and severity of these disasters.

Bhutan faces difficult climate tensions. Hydropower development—economically crucial—requires damming rivers, impacting ecosystems and creating downstream concerns for India and Bangladesh. Expanding agriculture to improve food security requires clearing forests, contradicting conservation commitments. Adapting to climate change requires resources that Bhutan lacks.

Bhutan's climate future involves managing paradoxes: carbon-negative yet vulnerable, environmentally committed yet economically developing, Buddhist values confronting physical realities. The country's example demonstrates that environmental stewardship alone cannot protect against climate impacts driven by global emissions. International support for Bhutan's adaptation—particularly GLOF mitigation and agriculture resilience—is critical for a nation demonstrating climate leadership while facing Himalayan vulnerability.`
  },
  {
    name: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    summary: `Bolivia confronts Andean climate catastrophe with devastating impacts on glaciers, water resources, and highland agriculture. This landlocked South American nation of 12 million—spanning from Amazonian rainforest through high-altitude Altiplano to Andean peaks—faces temperature increases of 0.9°C since 1950 with accelerated warming at high altitudes. Glacier retreat threatens water security for millions while deforestation in the lowlands contributes to emissions.

Tropical glacier loss is catastrophic and irreversible. Bolivia has lost 40-50% of its glacier ice since the 1970s, with small glaciers disappearing entirely. The Chacaltaya glacier—once home to the world's highest ski resort—vanished by 2009. Tuni Condoriri glaciers supplying La Paz with water are retreating rapidly. These glaciers regulate water flow, providing dry-season water for cities, agriculture, and hydropower. Their disappearance will create water crises for La Paz, El Alto, and Cochabamba—cities totaling 4 million people dependent on glacial meltwater.

The Altiplano—high-altitude plateau at 3,600 meters—faces intensifying climate stress. This harsh environment supports quinoa cultivation and llama herding, but warming and changing precipitation threaten traditional livelihoods. Lake Titicaca—shared with Peru and sacred in Andean culture—is experiencing declining water levels, warming temperatures, and ecosystem changes. The lake moderates regional climate and supports fishing communities, making its degradation economically and culturally devastating.

Amazon deforestation is Bolivia's primary emission source. The country has cleared vast rainforest for agriculture—particularly soy cultivation—and cattle ranching. Deforestation rates rank among South America's highest, with over 3 million hectares cleared in the past decade. The Morales government (2006-2019) promoted agricultural expansion despite environmental rhetoric. Forest fires—often set deliberately for land clearing—create air pollution crises. The 2019 fires burned 6 million hectares, destroying biodiversity and releasing massive carbon emissions.

Extreme weather is intensifying. El Niño and La Niña cycles create droughts and floods that are worsening with climate change. The 2016 drought caused water rationing in La Paz and collapsed agricultural production. Flash floods in the rainy season devastate highland communities and wash away terraced agriculture. Landslides triggered by intense rainfall destroy mountain roads and villages.

Energy infrastructure is vulnerable. Bolivia generates 40% of electricity from hydropower, with dams dependent on consistent river flows. Glacier retreat and changing precipitation create uncertainty for hydropower expansion plans. Natural gas—Bolivia's major export—provides most electricity generation. The country has announced renewable energy targets but implementation is slow. Solar potential in the Altiplano is excellent yet barely exploited.

Agriculture faces multiple climate stresses. Highland farming of potatoes, quinoa, and barley suffers from frost, drought, and changing rainfall patterns. Lowland agriculture is vulnerable to flooding. Bolivia's food security is precarious—the country imports significant food despite agricultural land. Smallholder farmers lack resources for climate adaptation.

Bolivia's climate politics reflect tensions between indigenous rights, resource extraction, and development. The Morales government embraced "Pachamama" (Mother Earth) rhetoric and hosted the World People's Conference on Climate Change, but simultaneously promoted fossil fuel extraction and Amazon development. This contradiction epitomizes Bolivia's struggle to balance economic development with environmental protection.

Bolivia's climate future requires glacier monitoring and water management for cities, halting Amazon deforestation, agricultural adaptation for highland communities, and renewable energy deployment. However, political instability, poverty, and competing development pressures make transformative climate action difficult. Bolivia risks losing irreplaceable glacial water resources while contributing to deforestation emissions—a dual climate tragedy.`
  },
  {
    name: 'Bosnia and Herzegovina',
    lat: 43.9159,
    lng: 17.6791,
    summary: `Bosnia and Herzegovina faces Balkan climate vulnerability compounded by political dysfunction, aging infrastructure, and coal dependence. This small nation of 3.3 million—still recovering from 1990s conflict—has experienced temperature increases of 0.8°C since 1961, with warming accelerating. Floods, droughts, and air pollution from coal-fired power create environmental and health crises while renewable energy potential remains largely untapped.

Flooding represents Bosnia's most devastating climate impact. The May 2014 floods—the worst natural disaster in the country's recorded history—killed 25 people, displaced 90,000, and caused over €2 billion in damage. Three months of rainfall fell in three days, triggering catastrophic flooding and over 2,000 landslides. Rivers overflowed, destroying homes, infrastructure, and agricultural land. Climate change is increasing extreme precipitation events, making such disasters more frequent.

Bosnia's complex political structure—divided between Republika Srpska and the Federation of Bosnia and Herzegovina—impedes coordinated climate response. Environmental governance is fragmented, with entity-level and cantonal authorities pursuing uncoordinated policies. This institutional dysfunction prevents effective climate adaptation planning and renewable energy development.

Coal dominates Bosnia's energy and economy while creating devastating air pollution. The country operates several aging, inefficient coal plants providing 65% of electricity. These facilities have no modern emissions controls, making Bosnia's air among Europe's most polluted. Sarajevo, Tuzla, and Zenica experience dangerous particulate matter levels causing respiratory disease and premature death. Coal mining employs thousands, creating political resistance to energy transition despite obvious health and climate costs.

Renewable energy potential is significant but underdeveloped. Bosnia has excellent hydropower resources—accounting for 35% of current electricity—with additional potential on the Drina, Neretva, and Bosna rivers. However, dam proposals face environmental opposition over ecosystem destruction. Solar and wind potential exists but deployment is minimal. Bureaucratic obstacles, political instability, and corruption impede renewable investment.

Agriculture is vulnerable to climate extremes. Bosnia's farming—primarily smallholder operations—suffers from droughts, floods, and late frosts. The 2017 late frost destroyed fruit harvests, causing major economic losses. Changing precipitation patterns make traditional farming practices less reliable. Many rural areas face population decline as young people migrate to cities or emigrate, reducing agricultural resilience.

Landslides and erosion are worsening. Bosnia's mountainous terrain is vulnerable to mass wasting triggered by intense rainfall. Deforestation for firewood and illegal logging destabilize slopes. Landmines from the 1990s war remain in approximately 2% of territory, complicating land management and reforestation efforts. Climate change is mobilizing slopes, increasing landslide risk.

Water resources face quantity and quality challenges. Rivers are polluted from inadequate wastewater treatment, industrial discharge, and agricultural runoff. Changing precipitation creates seasonal water shortages in some regions. The Sava River—Bosnia's main waterway—faces flooding in spring and low flows in summer, disrupting navigation and ecosystems.

Bosnia's climate future requires political will currently absent. The country needs flood protection infrastructure, coal phase-out and renewable deployment, air quality improvements, and agricultural adaptation. However, ethnic divisions, political dysfunction, and economic stagnation prevent progress. Bosnia remains stuck in a coal-dependent, climate-vulnerable trajectory while the EU integration process—potentially a catalyst for reform—proceeds glacially. The 2014 floods demonstrated catastrophic vulnerability, yet institutional response has been inadequate.`
  },
  {
    name: 'Botswana',
    lat: -22.3285,
    lng: 24.6849,
    summary: `Botswana faces intensifying southern African climate crisis in one of the world's most arid regions. This landlocked nation of 2.6 million—where 70% of territory is the Kalahari Desert—confronts temperature increases of 1.4°C since 1950, declining rainfall, and worsening droughts. Water scarcity, agricultural vulnerability, and ecosystem stress threaten a country achieving middle-income status but remaining deeply vulnerable to climate change.

Water scarcity defines Botswana's climate challenge. The country is one of the world's most water-stressed, with most territory receiving under 500mm annual rainfall. Climate change is reducing already-scarce precipitation and increasing evaporation. Groundwater—the primary water source—is being depleted faster than recharge. The Okavango Delta—a UNESCO World Heritage site and biodiversity hotspot—faces reduced inflows as climate change affects upstream rainfall in Angola. This wetland supports tourism and ecosystems, making its degradation economically and ecologically catastrophic.

Droughts are intensifying in frequency and severity. Botswana experienced devastating droughts in 1982-1987, 2012-2016, and 2018-2020. These dry periods decimate livestock—the traditional livelihood for many Batswana—and collapse rain-fed agriculture. The 2015-2016 drought caused crop failures affecting 40% of the population. Traditional drought coping mechanisms are overwhelmed by climate change's intensity and frequency.

Agriculture is marginal and highly vulnerable. Only 4% of Botswana is suitable for cultivation, constrained by aridity. Rainfall variability makes crop production precarious—most years see harvest failures. Livestock farming, primarily cattle, employs rural populations but is devastated by drought. When grazing lands desiccate and water points dry up, cattle die by hundreds of thousands. Climate change is making pastoralism increasingly unviable.

Botswana's economy presents a climate paradox. The country is Africa's largest diamond producer—mining generates 70% of export revenues and 30% of GDP—creating relative prosperity but also coal dependence for electricity. Botswana has vast coal reserves and operates coal-fired power plants providing 80% of electricity. The government plans additional coal capacity despite climate commitments, reflecting the challenge of balancing economic development with decarbonization.

Renewable energy potential is excellent yet barely exploited. Botswana has among the world's best solar resources—intense sunshine and clear skies year-round. The country receives 3,200 hours of sunshine annually with solar irradiation of 5.5 kWh/m²/day. Yet solar provides under 2% of electricity. A few small solar farms have been built, but deployment lags far behind potential. Economic incentives favor cheap coal over renewable investment.

Ecosystems face climate stress. The Okavango Delta's unique flood-pulse ecology is vulnerable to changing upstream rainfall and increased evaporation. Wildlife migration patterns are disrupted by changing water availability. The Kalahari ecosystem—adapted to aridity—faces conditions exceeding evolutionary adaptation capacity. Tourism—15% of GDP and a major employer—depends on wildlife and the Okavango, making ecosystem degradation economically threatening.

Extreme heat is intensifying. Botswana already experiences temperatures exceeding 40°C, with projections showing 2-4°C additional warming by 2100. This creates dangerous conditions for outdoor work, stresses livestock, and increases evaporation from limited water resources.

Botswana's climate future requires water management innovation, massive solar deployment to replace coal, agricultural transformation toward drought-resistant practices, and ecosystem conservation. The country has governance capacity and financial resources exceeding most African nations, creating potential for climate leadership. However, coal dependence and water scarcity remain formidable challenges requiring political will and transformative investment.`
  },
  {
    name: 'Brazil',
    lat: -14.2350,
    lng: -51.9253,
    summary: `Brazil holds the Amazon rainforest—the world's largest tropical forest and most critical carbon sink—yet deforestation, agribusiness expansion, and climate denial politics threaten both Brazil and global climate stability. This South American giant of 215 million faces temperature increases of 0.9°C since 1950, with devastating impacts from drought, extreme heat, and changing rainfall patterns. Brazil's climate choices have planetary consequences.

The Amazon is approaching a tipping point where deforestation and warming could trigger irreversible forest-to-savanna transition. Brazil has cleared 20% of the Amazon since 1970—an area larger than France—primarily for cattle ranching and soy cultivation. Deforestation accelerated dramatically under President Bolsonaro (2019-2023), who gutted environmental enforcement and encouraged agricultural expansion. The 2019 and 2020 fire seasons saw catastrophic burning. Although deforestation slowed under President Lula's return in 2023, the Amazon remains critically threatened.

Climate change is creating feedback loops that accelerate forest loss. The Amazon generates half its own rainfall through evapotranspiration—trees pump moisture that becomes rain. Deforestation reduces rainfall, increasing drought stress, making trees more vulnerable to fire, causing more forest death. The southeastern Amazon already experiences lengthened dry seasons and reduced rainfall. If 20-25% of the Amazon is cleared, models suggest self-reinforcing collapse could begin—a catastrophe for biodiversity and global climate.

Brazil's agricultural economy drives deforestation and emissions. The country is the world's largest exporter of beef, soybeans, coffee, and sugar. Agriculture provides jobs and export revenues but at enormous environmental cost. Cattle ranching alone accounts for 80% of deforestation. Soy expansion, particularly in the Cerrado savanna and Amazon margins, eliminates carbon sinks while producing feed for global meat consumption. Brazil's emissions profile is unusual—70% comes from land use change rather than fossil fuels.

Extreme weather is intensifying across Brazil's vast geography. The Northeast faces worsening droughts—the 2012-2017 drought was the worst in decades, devastating agriculture and water supplies for millions. São Paulo experienced severe water crises in 2014-2015 when reservoirs nearly emptied. Conversely, southern Brazil faces increased flooding. Rio de Janeiro and other coastal cities experience deadly landslides during intense rainfall. The 2022 Petrópolis landslides killed over 230 people.

Renewable energy offers Brazil significant advantages. The country generates 65% of electricity from hydropower, with massive facilities including Itaipu (14 GW) on the Paraná River. However, climate-driven rainfall variability creates energy security challenges—droughts force expensive thermal generation backup. Brazil has excellent wind and solar potential. Wind capacity has grown rapidly, particularly in the Northeast, reaching 23 GW. Solar deployment is accelerating but from a low base. Brazil could achieve near-total renewable electricity, yet fossil fuel interests promote Amazon oil and gas development.

Brazil's coastal cities face sea level rise and storm surge threats. Rio de Janeiro, Salvador, and Recife have vulnerable low-lying areas and favelas built on unstable hillsides. Coastal erosion threatens beaches critical for tourism. The Pantanal—the world's largest tropical wetland—faces climate stress from changing flooding patterns and increasing drought.

Brazil's climate politics swing wildly between governments. The Workers' Party (PT) reduced deforestation 80% from 2004-2012 through enforcement and protected areas. Bolsonaro reversed this progress, dismantling agencies and encouraging illegal clearing. Lula's 2023 return brings renewed commitments but faces powerful agribusiness opposition. Brazil's climate future—and by extension, planetary climate stability—depends on stopping Amazon deforestation and transitioning to sustainable agriculture. The world cannot afford Brazil to fail.`
  },
  {
    name: 'Brunei',
    lat: 4.5353,
    lng: 114.7277,
    summary: `Brunei epitomizes the fossil fuel monarchy dilemma: a tiny, extraordinarily wealthy Southeast Asian sultanate whose entire economy depends on oil and gas exports confronts climate change with neither urgency nor transition plans. This nation of 450,000 people—one of the world's richest per capita—faces temperature increases of 1.2°C since 1950, sea level rise threatening its coastal lowlands, and extreme rainfall, yet hydrocarbon dependence and sultanate governance prevent meaningful climate action.

Oil and gas dominate Brunei's economy absolutely. Petroleum provides 90% of export revenues and 60% of GDP. The country produces approximately 100,000 barrels of oil daily and significant natural gas, primarily exported as LNG to Japan, South Korea, and China. This creates vast wealth—Brunei has no income tax—but complete economic dependence on fossil fuels. The sultanate shows no serious intent to diversify, lacking both political pressure for change and economic incentives for transition.

Climate impacts manifest through rainfall extremes and coastal vulnerability. Brunei's equatorial location means consistently high temperatures, now increasing. Extreme rainfall events are intensifying—flash flooding in the capital Bandar Seri Begawan causes regular disruption. The 2020 floods were among the worst in decades. Brunei's low-lying coastal areas face sea level rise projected at 30-50 cm by 2100, threatening infrastructure and settlements along the South China Sea coast.

Renewable energy development is virtually nonexistent. Brunei has solar potential—equatorial sunshine—yet fossil fuels provide nearly 100% of electricity from gas-fired plants. With abundant cheap domestic gas, economic incentives for renewables are absent. The government announced vague renewable targets—10% by 2035—but implementation is negligible. A few small solar installations exist but at trivial scale.

Brunei's forests face pressures despite the sultanate's conservation rhetoric. Tropical rainforest covers 70% of the country, providing biodiversity habitat. However, logging, palm oil plantations, and development create deforestation pressures. Climate change affects forest ecosystems through changing rainfall patterns and increased temperatures. Peat swamp forests are particularly vulnerable to fire during dry periods.

Per capita emissions are high—approximately 24 tons CO2 annually—driven by fossil fuel production, gas-fired electricity, and car-dependent urban design. Brunei's small population means total emissions are globally insignificant, but the country exemplifies the challenge of petrostates unwilling to contemplate life beyond hydrocarbons.

The sultanate's authoritarian governance prevents civil society pressure for climate action. Environmental movements and political opposition don't exist in meaningful form. Climate policy is whatever the sultan decides, and current priorities emphasize maintaining oil and gas revenues to fund lavish state spending and ensure regime stability.

Brunei's climate future involves riding hydrocarbon wealth until depletion. The country makes no serious preparations for energy transition or economic diversification. When oil and gas reserves exhaust—potentially within decades—Brunei will face economic crisis while simultaneously experiencing worsening climate impacts. The sultanate's wealth and small population provide adaptive capacity, but political will for transformation is absent. Brunei remains a climate laggard, contributing to global emissions while avoiding responsibility for solutions.`
  },
  {
    name: 'Bulgaria',
    lat: 42.7339,
    lng: 25.4858,
    summary: `Bulgaria confronts Balkan climate vulnerability as an aging, economically struggling EU member dependent on coal and facing severe demographic decline. Temperatures have risen 1.3°C since 1960, with projections showing 2-4°C increases by 2100. This Black Sea nation of 6.5 million experiences intensifying heat waves, droughts, and extreme weather while coal dependence and political dysfunction impede energy transition.

Extreme heat is Bulgaria's most visible climate impact. Summer temperatures regularly exceed 40°C in recent years. The 2007, 2012, and 2019 heatwaves killed hundreds, particularly elderly populations in cities lacking air conditioning. Sofia, Plovdiv, and Varna face dangerous urban heat islands. Black Sea coastal resorts—economically important for tourism—experience uncomfortable extreme heat reducing visitor appeal.

Droughts are worsening with devastating agricultural impacts. Bulgaria's farming sector—wheat, corn, sunflowers, vegetables—suffers from water scarcity and heat stress. The 2007 and 2012 droughts caused crop failures and livestock deaths. Rainfall is declining, particularly in summer, while evaporation increases. Irrigation infrastructure is aging and inefficient, dating from communist times. Water scarcity affects the Danube River and internal rivers, impacting agriculture and ecosystems.

Coal dominates Bulgaria's energy and creates severe air pollution. Lignite and coal-fired plants provide 45% of electricity, with major facilities including the massive Maritsa complex. These aging, inefficient plants lack modern pollution controls, making Bulgarian cities among Europe's most polluted. Sofia and Plovdiv experience dangerous particulate matter levels causing respiratory disease. Coal mining employs thousands, creating political resistance to phase-out despite EU pressure and climate commitments.

Renewable energy is expanding but from a low base. Bulgaria has 700 MW of wind capacity and 1 GW of solar, primarily developed during a 2010-2013 boom followed by retroactive subsidy cuts that killed investor confidence. The Kozloduy nuclear plant provides 35% of electricity, offering low-carbon baseload. Hydropower contributes 8-10% from Danube and mountain facilities. Bulgaria could significantly expand renewables but requires regulatory stability and investment currently lacking.

Forests covering 35% of Bulgaria face climate stress. Bark beetle outbreaks damage coniferous forests. Wildfire risk is increasing—the 2017 fires were particularly severe. Deforestation for firewood and illegal logging compound climate pressures. The Rila and Pirin mountain ecosystems are vulnerable to warming and changing precipitation.

The Black Sea coast faces multiple climate threats. Sea level rise projected at 30-50 cm by 2100 threatens beaches and coastal infrastructure critical for tourism—15% of GDP. Marine ecosystems are degrading from warming, overfishing, and pollution. Coastal erosion accelerates, destroying beaches at Varna, Burgas, and resort areas.

Bulgaria's demographic collapse compounds climate vulnerability. The population has declined from 9 million in 1989 to 6.5 million currently, with projections showing 5 million by 2050. Young people emigrate to Western Europe, leaving aging populations less capable of climate adaptation. Rural areas face abandonment, reducing agricultural resilience.

Bulgaria's climate future requires coal phase-out, renewable deployment, agricultural adaptation, and forestry management. However, political instability—Bulgaria has had multiple governments collapse in recent years—prevents coherent climate policy. EU membership provides pressure and funding, but domestic implementation remains weak. Bulgaria risks becoming a European climate laggard, polluted and vulnerable while wealthier neighbors transition.`
  },
  {
    name: 'Burkina Faso',
    lat: 12.2383,
    lng: -1.5616,
    summary: `Burkina Faso confronts Sahel climate catastrophe as one of the world's poorest nations. This landlocked West African country of 22 million faces temperature increases of 1°C since 1960 with projections showing 2-4°C by 2100—warming faster than the global average. Desertification, drought, extreme heat, and agricultural collapse threaten a country already devastated by jihadist insurgency, political instability, and grinding poverty.

Sahel desertification is advancing relentlessly. Burkina Faso sits in the semi-arid transition zone between Sahara and savanna, where climate change is pushing the desert southward. Rainfall has declined 20-30% since the 1960s, with increasing variability. The rainy season is shortening and becoming unpredictable, while dry seasons lengthen. Soils degrade through erosion, nutrient depletion, and loss of organic matter. Land that once supported crops and grazing now turns to wasteland.

Agriculture employs 80% of Burkinabè and faces existential climate threats. Farming is overwhelmingly rain-fed, making farmers extraordinarily vulnerable to drought. Millet, sorghum, maize, and cotton cultivation suffers from erratic rainfall and water scarcity. Droughts occur with increasing frequency—2011, 2017, and 2018 caused widespread crop failures and food insecurity. Livestock herding, critical for pastoralist communities, faces collapse as grazing lands disappear and water points dry up. Conflicts between farmers and herders over scarce resources intensify, adding to insecurity.

Extreme heat is becoming lethal. Temperatures routinely exceed 40°C, with some areas reaching 45°C. Heat stress affects outdoor workers, children, and the elderly. Most Burkinabè lack access to cooling, making heatwaves deadly. Urban areas including Ouagadougou face dangerous heat islands. Climate projections show conditions approaching the limits of human physiological tolerance during extreme events.

Water scarcity is acute and worsening. Burkina Faso has limited water resources, dependent on seasonal rainfall and shallow groundwater. Rivers are seasonal or ephemeral—flowing during rains, dry the rest of the year. Groundwater extraction exceeds recharge. The 2018 drought created water crises in major cities. Women and girls spend hours daily fetching water, limiting education and economic opportunities.

Energy poverty compounds climate vulnerability. Only 20% of Burkinabè have electricity access—among the world's lowest. Most electricity comes from thermal generation and imports. Burkina Faso has excellent solar potential—intense sunshine year-round—yet deployment is minimal. Rural areas lack any grid access. Off-grid solar provides some relief but requires investment beyond most households' means.

Deforestation and land degradation accelerate climate vulnerability. Forest cover has declined from 25% to 12% since 1990. Clearing for agriculture, charcoal production for cooking fuel, and firewood collection strip landscapes. This creates feedback loops: deforestation reduces local rainfall, increases soil erosion, and eliminates carbon sinks.

Jihadist insurgency compounds climate vulnerability catastrophically. Armed groups control rural areas, displacing 2 million people. Farming becomes impossible in conflict zones, creating famine conditions. Climate change exacerbates resource scarcity that fuels conflict—drought and desertification create desperation that armed groups exploit.

Burkina Faso's adaptive capacity is devastated by poverty and conflict. The country ranks 184th of 191 on the UN Human Development Index. GDP per capita is under $900. Climate adaptation requires irrigation, drought-resistant crops, reforestation, and water infrastructure—investments impossible given current conditions. International humanitarian aid provides survival support but not transformative climate resilience.

Burkina Faso faces potential state collapse from the intersection of climate change, poverty, and violence. The country epitomizes climate injustice: minimal historical emissions, maximum contemporary suffering, and insufficient global support. Without massive international intervention—climate finance, conflict resolution, development assistance—Burkina Faso's future is catastrophic.`
  },
  {
    name: 'Burundi',
    lat: -3.3731,
    lng: 29.9189,
    summary: `Burundi confronts extreme climate vulnerability as one of the world's poorest, most densely populated nations. This small East African country of 12.5 million—crammed into 27,000 square kilometers—faces temperature increases of 1°C since 1960, changing rainfall patterns, and agricultural stress threatening a population where 90% depend on subsistence farming. Climate impacts compound political instability, poverty, and resource scarcity in a desperately fragile state.

Rainfall variability is Burundi's defining climate challenge. The country has two rainy seasons critical for agriculture, but climate change is making precipitation erratic and unpredictable. Rainy seasons are shortening with more intense downpours, while dry seasons extend. This creates devastating impacts for smallholder farmers who depend on predictable rainfall. Droughts and floods increasingly alternate, destroying crops and livelihoods. The 2005, 2011, and 2019 droughts caused widespread food insecurity affecting millions.

Agriculture is extraordinarily vulnerable despite being the economic foundation. Coffee and tea provide export revenues, while beans, cassava, maize, and sweet potatoes feed the population. Farming is almost entirely rain-fed on tiny plots—average farm size is under 0.5 hectares due to extreme population density. Climate variability causes crop failures that immediately trigger food crises. Burundi ranks among the world's most food-insecure nations, with chronic malnutrition affecting 60% of children.

Extreme population density compounds climate vulnerability. Burundi is Africa's second-most densely populated country. Every arable plot is cultivated, often on steep hillsides prone to erosion. Deforestation has reduced forest cover to 10%—trees cleared for farming and firewood. Soil degradation is severe—nutrients depleted, erosion stripping topsoil. This creates vicious cycles where degraded land produces less food, forcing farmers to clear more marginal land and intensifying cultivation, accelerating degradation.

Lake Tanganyika—bordering Burundi and providing fish protein—faces climate impacts. Water temperatures are rising, affecting fish populations. Changing rainfall alters water levels and nutrient dynamics. Fisheries provide critical food and income for lakeside communities, making climate impacts on the lake economically devastating.

Extreme weather events are intensifying. Flash floods from intense rainfall cause deaths and infrastructure damage, particularly in hilly regions where runoff triggers landslides. The 2020 floods killed 40 people and displaced thousands. Erosion washes away farms and destroys roads. Conversely, droughts desiccate crops and reduce water availability.

Energy poverty is nearly absolute. Only 10% of Burundians have electricity access—among the world's lowest. Most electricity comes from hydropower, but climate variability affects generation. Biomass—primarily firewood and charcoal—provides 95% of energy, driving deforestation and indoor air pollution that kills thousands annually. Burundi has some solar potential but lacks resources for deployment.

Political instability and ethnic tensions compound climate vulnerability. Burundi experienced genocidal violence in 1993 and civil war until 2005. Authoritarianism, human rights abuses, and economic isolation prevent effective climate response. The country lacks institutional capacity for adaptation planning or implementation. International development assistance has been reduced due to political concerns.

Burundi's climate future is catastrophic without transformative intervention. The country needs agricultural intensification (irrigation, better inputs), massive reforestation, soil conservation, and economic diversification—all impossible given current poverty and governance. Climate change could trigger humanitarian disaster, state failure, and mass migration. Burundi exemplifies the intersection of climate, poverty, and fragility where vulnerable populations face compounding crises with minimal resilience.`
  },
  {
    name: 'Cambodia',
    lat: 12.5657,
    lng: 104.9910,
    summary: `Cambodia faces Southeast Asian climate vulnerability as a low-lying country dependent on monsoon rainfall, Mekong River resources, and agriculture. This nation of 17 million has experienced temperature increases of 0.8°C since 1960, with projections showing 1.5-3°C by 2100. Flooding, droughts, and changing monsoon patterns threaten food security, livelihoods, and ecosystems while rapid deforestation and weak governance limit adaptive capacity.

The Mekong River dominates Cambodia's climate vulnerability. The country depends on the Mekong for fisheries, agriculture, transport, and livelihoods—60% of protein comes from Mekong fisheries. Climate change and upstream dams in China and Laos are altering the Mekong's flow regime. The annual flood pulse—when the river reverses into Tonle Sap Lake, creating one of the world's most productive fisheries—is weakening. Dry-season flows decrease while flood peaks change timing. This threatens Cambodia's food security and economy.

Tonle Sap Lake—Southeast Asia's largest freshwater lake and a biodiversity hotspot—faces climate stress. The lake expands from 2,500 km² in dry season to 16,000 km² during monsoon floods, supporting massive fish productivity. Climate change and Mekong flow alterations reduce flood volumes, shrinking the lake and devastating fisheries. Over 1 million Cambodians depend on Tonle Sap for livelihoods.

Rainfall variability is intensifying. Cambodia's tropical monsoon climate means concentrated rainfall from May-October, but climate change is making monsoons less predictable. Heavy downpours alternate with dry spells within the rainy season. Droughts are occurring more frequently—the 2016 and 2019 droughts devastated rice production and created water shortages. Flooding during monsoon peaks inundates lowlands, destroying crops and infrastructure.

Agriculture employs 30% of Cambodians and drives rural livelihoods. Rice cultivation dominates—Cambodia exports rice globally—but is highly climate-vulnerable. Rain-fed rice production suffers from drought and erratic rainfall. Flooded rice areas face deeper, more prolonged inundation. The 2019 drought reduced rice yields 30%, while 2020 floods destroyed crops. Smallholder farmers lack irrigation, crop insurance, or resources for adaptation.

Deforestation has devastated Cambodia's forest cover, declining from 73% in 1990 to 47% currently. Illegal logging, land concessions for agribusiness, and charcoal production stripped forests. This eliminates carbon sinks, degrades watersheds, and reduces climate resilience. The Cardamom Mountains—a biodiversity hotspot—face logging pressures despite protected status.

Cambodia's coast faces sea level rise and storm surge threats. The Gulf of Thailand coastline has low-lying areas where rice farming and fishing communities are vulnerable. Sea level rise projected at 30-50 cm by 2100 will inundate agricultural land and cause saltwater intrusion. Mangrove forests critical for coastal protection have been cleared for shrimp farms, increasing vulnerability.

Energy infrastructure is limited and vulnerable. Cambodia generates 60% of electricity from hydropower on tributaries of the Mekong and Tonle Sap systems. Climate variability affects generation—droughts reduce output. The country imports electricity from neighbors and burns coal and diesel for the remainder. Cambodia has excellent solar potential but deployment is minimal.

Institutional weakness compounds climate vulnerability. Cambodia ranks poorly on governance indicators—corruption is endemic, land rights are insecure, and environmental enforcement is weak. Climate adaptation requires planning and investment that current institutions cannot deliver. Rural populations have limited access to climate information, early warning, or adaptation support.

Cambodia's climate future requires Mekong cooperation (complicated by upstream dam development), agricultural adaptation, coastal protection, reforestation, and renewable energy deployment. However, governance challenges, poverty, and competing development priorities impede progress. Cambodia remains highly vulnerable to climate impacts with insufficient adaptive capacity.`
  },
  {
    name: 'Cameroon',
    lat: 7.3697,
    lng: 12.3547,
    summary: `Cameroon confronts Central African climate vulnerability across diverse ecosystems—from Sahel in the north through savanna and rainforest to Atlantic coast. This nation of 28 million faces temperature increases of 1°C since 1960, with projections showing 2-4°C by 2100. Droughts in the north, floods in the center, coastal erosion, and Lake Chad's collapse threaten agriculture, water resources, and livelihoods while political instability and armed conflict compound vulnerability.

Lake Chad's catastrophic shrinkage epitomizes Sahel climate disaster. This shallow lake shared between Cameroon, Chad, Niger, and Nigeria has declined 90% since the 1960s—from 25,000 km² to under 2,000 km². Climate change (reduced rainfall) and irrigation withdrawals desiccated the lake. Millions depending on Lake Chad for fishing, agriculture, and water face livelihood collapse. Resource scarcity fuels conflict—Boko Haram insurgency partly stems from climate-driven desperation. Cameroon's Far North region suffers drought, food insecurity, and violence.

Cameroon's climate diversity creates varied impacts. The Sahel north faces desertification, drought, and extreme heat—temperatures exceed 45°C. The central plateau experiences erratic rainfall affecting agriculture. The Congo Basin rainforest in the east faces deforestation and changing precipitation. The Atlantic coast confronts sea level rise and erosion. This geographic diversity complicates adaptation—no single strategy fits all regions.

Agriculture employs 60% of Cameroonians and is highly vulnerable. The north grows millet and sorghum under increasingly arid conditions. Central regions cultivate maize, cassava, and plantains threatened by changing rainfall. Cocoa and coffee—major exports—suffer from heat stress and changing precipitation. The 2019 drought in the north caused crop failures affecting 2 million people. Floods in southern regions destroy crops and infrastructure.

Deforestation is accelerating. Forest cover declined from 50% to 38% since 1990. The Congo Basin rainforest is cleared for agriculture, logging, and firewood. This eliminates carbon sinks and degrades ecosystems. Deforestation contributes approximately 40% of Cameroon's greenhouse gas emissions.

Coastal areas face multiple climate threats. Sea level rise projected at 30-50 cm by 2100 threatens low-lying areas around Douala and Kribi. Coastal erosion destroys beaches and threatens infrastructure. The Wouri River estuary and coastal mangroves face saltwater intrusion. Fisheries—critical protein and livelihoods—suffer from ocean warming and overfishing.

Extreme weather is intensifying. Flash floods during heavy rains cause deaths and damage—the 2020 floods displaced thousands. Landslides in mountainous regions destroy villages. Droughts devastate northern regions. The 2021 landslide in Bafoussam killed over 40 people, demonstrating vulnerability to extreme rainfall.

Energy infrastructure is limited. Cameroon generates 60% of electricity from hydropower, but climate variability affects generation. The country has significant hydropower potential on the Sanaga River but also burns oil and gas. Only 65% of Cameroonians have electricity access. Rural areas rely on biomass—firewood and charcoal—driving deforestation.

Armed conflict compounds climate vulnerability catastrophically. The Anglophone crisis in western regions and Boko Haram insurgency in the north displace millions, destroy agriculture, and prevent climate adaptation. Conflict and climate change create vicious cycles—resource scarcity fuels violence, violence prevents adaptation.

Cameroon's climate future requires regional cooperation on Lake Chad, agricultural adaptation across diverse zones, coastal protection, halting deforestation, and conflict resolution. However, governance challenges, corruption, and political instability prevent effective climate action. Cameroon remains highly vulnerable with limited adaptive capacity.`
  },
  {
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    summary: `Canada faces Arctic and boreal climate transformation on a scale and speed unprecedented in human history. The world's second-largest country is warming twice the global average—temperatures have risen 1.7°C since 1948—with the Arctic warming three times faster. Permafrost thaw, boreal forest fires, glacier retreat, and ecosystem shifts threaten northern communities and biodiversity while Canada's oil sands and high per capita emissions make it both victim and contributor to climate change.

Arctic warming is catastrophic and accelerating. Canada's Arctic has warmed 2.3°C since 1948, with winter warming exceeding 4°C. Sea ice is disappearing—the Northwest Passage is becoming ice-free in summer. Permafrost covering 50% of Canada is thawing, destabilizing infrastructure, releasing methane, and transforming landscapes. Arctic communities face existential threats: coastal erosion from sea ice loss, permafrost subsidence collapsing buildings, changing wildlife affecting Indigenous hunting, and mental health crises from environmental transformation.

Boreal forest fires are intensifying to unprecedented levels. The 2023 wildfire season was the worst in Canadian history—18 million hectares burned, an area larger than Florida. Smoke blanketed eastern North America, creating air quality emergencies from Toronto to New York. Climate change is creating longer, more severe fire seasons with more intense fires. Boreal forests that historically were carbon sinks are becoming carbon sources as fire frequency overwhelms regrowth.

Permafrost thaw creates cascading impacts. Buildings, roads, and pipelines built on frozen ground are sinking as permafrost melts. Northern communities face infrastructure failure—homes crack, runways buckle, water systems break. Permafrost contains twice the carbon currently in the atmosphere—thawing releases CO2 and methane, creating dangerous climate feedback loops. Thermokarst lakes form as ground subsides, releasing more greenhouse gases.

Glaciers are retreating across Canadian mountain ranges. The Columbia Icefield in the Rockies has lost 50% of its volume since 1850. Coastal glaciers in British Columbia are disappearing. Glacier loss affects water resources—many western rivers depend on glacial meltwater for summer flow. Reduced glaciers threaten hydropower, agriculture, and ecosystems.

Canada's fossil fuel paradox is politically explosive. The country has vast oil sands in Alberta—the world's third-largest oil reserves—providing jobs and export revenues but creating massive emissions. Oil sands extraction is energy-intensive and carbon-intensive, making Canada's per capita emissions among the world's highest at 15 tons CO2 annually. Expanding oil sands while claiming climate leadership creates contradictions. The Trans Mountain pipeline expansion demonstrates this tension—the government approved expansion despite climate commitments.

Renewable energy potential is enormous yet underdeveloped relative to fossil fuels. Canada generates 60% of electricity from hydropower—Quebec, Manitoba, and British Columbia have vast hydro resources. Wind and solar deployment is growing but still minor. Nuclear provides 15% of electricity in Ontario. Canada could achieve near-total clean electricity but political barriers remain.

Indigenous communities face climate injustice. First Nations in the Arctic and boreal regions contribute minimally to emissions yet suffer disproportionate impacts. Traditional livelihoods depending on predictable ice, wildlife, and seasons are disrupted. Coastal Arctic communities face erosion forcing relocation. Food security is threatened as caribou migration patterns shift and sea ice hunting becomes dangerous.

Canada's climate future involves managing Arctic transformation, extinguishing boreal megafires, adapting northern infrastructure, and resolving fossil fuel contradictions. The Trudeau government set ambitious targets—net-zero by 2050—but approving oil sands expansion undermines credibility. Canada must choose between fossil fuel profits and climate leadership.`
  },
  {
    name: 'Central African Republic',
    lat: 6.6111,
    lng: 20.9394,
    summary: `Central African Republic (CAR) faces climate vulnerability compounded by state collapse, extreme poverty, and ongoing civil war. This landlocked nation of 5 million—one of the world's poorest and most unstable—experiences temperature increases of 1°C since 1960, changing rainfall patterns, and agricultural stress. Climate impacts exacerbate resource scarcity, fueling conflict in a country where armed groups control most territory and government authority barely exists.

Rainfall variability threatens agriculture that employs 70% of Central Africans. The country has a tropical climate with distinct wet and dry seasons, but climate change is making precipitation erratic. Rainy seasons are shortening with more intense downpours, while dry seasons extend. This devastates subsistence farming of cassava, maize, and millet. Droughts and floods alternate, destroying crops and livelihoods. CAR suffers chronic food insecurity—over 60% of the population requires humanitarian assistance.

Deforestation is accelerating despite low population density. Forest cover has declined from 37% to 33% since 1990. The Congo Basin rainforest covering southern CAR faces clearing for agriculture, logging, and charcoal production. Armed groups control logging operations, selling timber illegally to fund conflict. Deforestation eliminates carbon sinks and degrades watersheds.

Armed conflict compounds climate vulnerability catastrophically. CAR has been in civil war since 2013, with armed groups controlling 60% of territory. Violence displaces populations, destroys agriculture, prevents adaptation, and creates humanitarian catastrophe. Climate-driven resource scarcity over land and water intensifies conflict. Droughts and crop failures create desperation that armed groups exploit for recruitment.

Extreme poverty eliminates adaptive capacity. CAR ranks last on the UN Human Development Index—GDP per capita is under $500. Only 14% have electricity access, among the world's lowest. Health care, education, and infrastructure are barely functional. Climate adaptation requires resources that simply don't exist. International humanitarian aid provides survival support but not climate resilience.

Energy poverty is nearly absolute. Biomass—firewood and charcoal—provides 95% of energy, driving deforestation and indoor air pollution. Electricity access is limited to parts of Bangui, the capital. CAR has hydropower potential on the Ubangi and other rivers, but conflict prevents development. Solar potential is good but requires peace and investment currently absent.

Climate change affects wildlife and ecosystems. CAR has biodiversity including forest elephants, gorillas, and chimpanzees in Dzanga-Sangha reserves, but poaching and habitat loss threaten species. Climate impacts on forest ecosystems add stress. Conservation is impossible amid conflict.

Water resources face quality and quantity challenges. Rivers provide water for most Central Africans, but changing rainfall creates seasonal shortages. Conflict prevents water infrastructure development. Most people lack access to safe water or sanitation.

CAR's climate future is catastrophic without peace and state rebuilding. The country needs conflict resolution before climate adaptation is remotely possible. Climate change adds to compounding crises—poverty, violence, state failure—creating one of the world's most desperate situations. CAR epitomizes how climate impacts devastate fragile states lacking any resilience. Without massive international intervention—peacekeeping, development assistance, climate finance—CAR faces humanitarian catastrophe worsened by climate change.`
  },
  {
    name: 'Chad',
    lat: 15.4542,
    lng: 18.7322,
    summary: `Chad confronts Sahel climate catastrophe in one of the world's harshest environments. This landlocked Central African nation of 17 million faces temperature increases of 1.3°C since 1960—faster than the global average—with projections showing 2-4°C by 2100. Lake Chad's collapse, Sahara Desert expansion, extreme heat, and drought threaten survival for populations dependent on marginal agriculture and pastoralism. Climate change compounds poverty, conflict, and instability in one of the world's most vulnerable countries.

Lake Chad's catastrophic shrinkage is an environmental disaster affecting 30 million people across four countries. This shallow lake has declined 90% since the 1960s—from 25,000 km² to under 2,000 km²—due to climate change (reduced rainfall) and irrigation withdrawals. Millions of Chadians depending on the lake for fishing, agriculture, and livestock watering face livelihood collapse. Resource scarcity fuels violence—Boko Haram and other armed groups exploit climate desperation. The Lake Chad Basin hosts one of Africa's worst humanitarian crises.

Desertification is advancing relentlessly across Chad's Sahel belt. The Sahara Desert is expanding southward as rainfall declines and temperatures rise. Chad receives some of the world's least rainfall—northern areas get under 50mm annually. The rainy season has shortened by several weeks since the 1970s. Soils degrade through erosion and nutrient loss. Vegetation disappears, making land uninhabitable. Nomadic pastoralists and subsistence farmers face impossible conditions.

Extreme heat is among the world's most severe. Temperatures regularly exceed 45°C in northern Chad, with Faya-Largeau recording over 50°C. Southern agricultural zones experience 40°C+ heat. Climate projections show further increases approaching or exceeding human physiological limits. Heat stress kills livestock, devastates crops, and threatens human health. Most Chadians lack access to cooling, making extreme heat deadly.

Agriculture and pastoralism face existential threats. Farming employs 80% of Chadians but is overwhelmingly rain-fed in areas receiving minimal, erratic rainfall. Millet, sorghum, and peanuts are cultivated under increasingly harsh conditions. Droughts occur frequently—2010, 2017, and 2021 caused widespread crop failures and food insecurity. Pastoralism—moving cattle, goats, and camels to find grazing and water—faces collapse as pastures disappear and water points dry up. Conflicts between farmers and herders over scarce resources intensify, adding to violence.

Armed conflict compounds climate vulnerability. Boko Haram operates in the Lake Chad region, while other armed groups control areas of eastern and northern Chad. Violence displaces populations, destroys agriculture, and prevents adaptation. Climate change and conflict create vicious cycles—resource scarcity fuels violence, violence prevents climate adaptation, creating more scarcity.

Energy poverty is nearly complete. Only 11% of Chadians have electricity access—among the world's lowest. Most electricity comes from diesel generation in N'Djamena. Biomass provides 95% of energy, but desertification makes even firewood scarce. Chad has significant solar potential—intense sunshine year-round—but lacks resources for deployment.

Oil provides export revenues—Chad is a modest oil producer—but contributes to emissions without benefiting most Chadians. Oil wealth is concentrated among elites while 80% of the population lives in poverty. Economic dependence on oil prevents diversification.

Water scarcity is acute. Beyond Lake Chad, water resources are minimal. Rivers are seasonal or ephemeral. Groundwater is overexploited. The 2021 drought created water crises in major cities. Women and girls spend hours daily fetching water, limiting education and economic opportunities.

Chad ranks third-to-last on the UN Human Development Index. GDP per capita is under $700. Life expectancy is 54 years. Chronic malnutrition affects 40% of children. Adaptive capacity is essentially zero.

Chad's climate future is catastrophic without massive international support. The country faces potential state collapse from the intersection of climate change, poverty, conflict, and resource scarcity. Chad epitomizes climate injustice: minimal historical emissions, maximum vulnerability, insufficient global assistance. Without transformative intervention—climate finance, conflict resolution, Lake Chad restoration—Chad faces humanitarian catastrophe.`
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    summary: `Chile faces dramatic climate vulnerability across its extreme geography—stretching 4,300 kilometers from the Atacama Desert to Patagonian glaciers. This South American nation of 19 million has experienced temperature increases of 1°C since 1960 with accelerated warming in recent decades. Megadrought in the central regions, glacier retreat, water scarcity, and wildfire threaten agriculture, copper mining, hydropower, and cities while Chile leads Latin America in renewable energy deployment.

Central Chile suffers the worst megadrought in a thousand years. From 2010-present, rainfall has declined 20-40% across the agricultural heartland where 75% of Chileans live. Santiago, Valparaíso, and agricultural valleys face acute water scarcity. Reservoirs are empty, rivers run dry, and groundwater is depleted. The 2019-2023 drought was particularly devastating—agriculture collapsed, hydropower generation plummeted, and cities faced water rationing. Climate models project permanent aridification, making this not a drought but the new normal.

Water scarcity threatens Chile's economy through multiple pathways. Agriculture in central valleys—fruits, wine grapes, avocados for export—depends on irrigation from snowmelt and rivers now failing. The 2021 drought caused $2 billion in agricultural losses. Copper mining—40% of export revenues—requires vast water volumes, creating conflicts between mining companies, farmers, and cities over scarce resources. Santiago's 7 million residents face water insecurity as Andean snowpack declines and rivers dwindle.

Andean glacier retreat is accelerating. Chile's glaciers have lost 25% of their volume since 1980, with small glaciers disappearing entirely. These ice masses provide critical dry-season water flow for rivers supporting agriculture, cities, and hydropower. Glacier loss means rivers run lower in summer precisely when water demand peaks. The melting of glaciers in the Andes is a ticking time bomb—short-term meltwater boosts flows temporarily, but glacier disappearance will cause catastrophic water shortfall.

Extreme weather is intensifying across Chile's length. Wildfires devastate central regions—the 2017 fires were the worst in modern history, burning 600,000 hectares and killing 11 people. Heatwaves in central cities exceed 38°C. Flash floods from extreme rainfall hit both central and northern regions. The 2015 Atacama floods killed 31 people in one of the world's driest deserts—an event demonstrating climate extremes.

Renewable energy offers Chile global leadership potential. The Atacama Desert has the world's best solar resources—the highest irradiation globally—and Chile has deployed massive solar farms. Wind potential in Patagonia is world-class. Chile generates 30% of electricity from renewables (solar, wind, hydro) and targets 70% by 2030. The energy matrix is transitioning from coal—which the government plans to phase out by 2040—to renewables, though implementation faces challenges.

Hydropower vulnerability creates energy insecurity. Chile historically generated 30-40% of electricity from hydro, but megadrought has slashed output. During severe drought years, hydropower generation dropped 50%, forcing expensive imports and increased fossil fuel burning. This demonstrates dangerous dependence on climate-vulnerable hydro, spurring solar and wind expansion.

Chile's coast faces sea level rise, ocean acidification, and ecosystem shifts. Fisheries provide food and exports but suffer from ocean warming. The Humboldt Current system is changing, affecting anchovy and sardine stocks. Coastal cities face flooding from sea level rise projected at 30-50 cm by 2100.

Chile has among the highest climate ambitions in Latin America—carbon neutrality by 2050, coal phase-out, renewable energy expansion, and nature-based solutions. However, water scarcity may prove insurmountable. Central Chile could become uninhabitable if megadrought persists. Adaptation requires desalination, agricultural transformation, water rights reform, and migration from water-scarce regions. Chile demonstrates that even relatively wealthy, well-governed countries face climate impacts that challenge survival in traditional locations.`
  },
  {
    name: 'China',
    lat: 35.8617,
    lng: 104.1954,
    summary: `China is the world's climate paradox: the largest greenhouse gas emitter and renewable energy deployer simultaneously. This nation of 1.4 billion has experienced temperature increases of 1.1°C since 1950, faster than the global average, with accelerating impacts. Extreme weather—floods, droughts, heatwaves, typhoons—threaten hundreds of millions while desertification, glacier retreat, and sea level rise pose long-term existential challenges. China's massive scale means its climate choices determine planetary outcomes.

China emits 30% of global greenhouse gases—more than all developed countries combined. Coal provides 60% of electricity and drives industrial production. Steel, cement, and manufacturing create vast emissions. Per capita emissions now exceed the EU average at 8 tons CO2 annually. China's development model—rapid industrialization powered by coal—made it the workshop of the world but at enormous climate cost.

Simultaneously, China dominates renewable energy deployment. The country has installed more solar panels and wind turbines than any nation—400 GW of solar and 350 GW of wind capacity. China manufactures 80% of the world's solar panels and controls critical mineral supply chains for batteries and clean energy. The government targets carbon neutrality by 2060 and peak emissions by 2030. Whether China succeeds determines whether the world limits warming to tolerable levels.

Extreme weather is intensifying across China's vast geography. Catastrophic flooding along the Yangtze and Yellow rivers devastates cities and agriculture—the 2021 Henan floods killed 380 people when a year's rainfall fell in three days. Droughts in northern China threaten agriculture and water supplies. Heatwaves exceeding 40°C strike cities across the Yangtze valley. Typhoons intensify along the coast. The 2022 drought and heatwave was the worst in 60 years, causing power shortages and crop failures.

Water scarcity threatens northern China existentially. The North China Plain—home to 400 million people and critical for wheat production—faces groundwater depletion and declining Yellow River flows. The South-to-North Water Transfer Project—the world's largest water infrastructure—diverts Yangtze water north, but climate change is reducing water availability across China. Glacier retreat in Tibet and Xinjiang threatens river systems including the Yangtze, Yellow, Mekong, and Indus.

Desertification and dust storms plague northern China. The Gobi Desert is expanding, and sandstorms from degraded lands blanket Beijing. China has implemented massive reforestation—the Great Green Wall—planting billions of trees to combat desertification with mixed results.

Coastal megacities face sea level rise. Shanghai, Guangzhou, and the Pearl River Delta—economic powerhouses—sit barely above sea level. Projected sea level rise of 30-60 cm by 2100 threatens to inundate vast areas, potentially displacing tens of millions. Storm surges from intensifying typhoons compound flooding risks.

Agriculture faces multiple climate stresses. Rice, wheat, and corn production suffer from droughts, floods, and heat. The 2022 drought reduced Yangtze River levels so low that hydropower generation collapsed and rice paddies dried up. Food security for 1.4 billion people depends on climate-vulnerable agriculture.

Air pollution from coal combustion kills over 1 million Chinese annually, creating political pressure for clean energy transition. Beijing's notorious smog and public health crises have made pollution control a government priority.

China's climate future determines global outcomes. If China rapidly deploys renewables, phases out coal, and achieves carbon neutrality, the world has a chance to limit warming. If China continues prioritizing economic growth over emissions, catastrophic warming is inevitable. The 2023 economic slowdown has complicated China's energy transition—coal consumption rebounded as the government prioritized growth. China's climate trajectory remains uncertain but globally consequential.`
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: `Colombia confronts Andean and Amazonian climate vulnerability across extraordinarily biodiverse ecosystems. This South American nation of 52 million has experienced temperature increases of 0.8°C since 1950, with accelerated warming at high altitudes. Glacier retreat, deforestation, extreme weather, and changing rainfall patterns threaten water resources, agriculture, and biodiversity while armed conflict and coca cultivation compound environmental degradation.

Colombia's glaciers are disappearing rapidly—the country has lost 90% of its glacier area since the mid-20th century. Iconic snow-capped peaks including the Sierra Nevada de Santa Marta and Nevado del Ruiz are melting. These glaciers provide critical dry-season water for cities including Bogotá, Medellín, and Cali, as well as agriculture. Complete glacier loss within 20-30 years will create water crises for millions. The symbolic and practical loss of tropical glaciers represents irreversible climate change.

Amazon and Orinoco deforestation accelerates. Colombia contains 10% of the Amazon rainforest, but clearing for cattle ranching, coca cultivation, and agriculture destroys 170,000 hectares annually. The 2016 peace agreement with FARC guerrillas paradoxically increased deforestation—previously inaccessible areas opened to agricultural expansion and illegal logging. Deforestation contributes 40% of Colombia's greenhouse gas emissions. Loss of Amazon forest threatens biodiversity, Indigenous communities, and regional climate.

Extreme weather is intensifying. Colombia experiences La Niña flooding and El Niño droughts with increasing severity. The 2010-2011 La Niña floods were the worst in Colombian history—2.3 million affected, 500 deaths, billions in damage. Rivers overflowed, inundating cities and destroying agriculture. Conversely, El Niño droughts devastate agriculture and water supplies. The 2015-2016 El Niño reduced hydropower generation, forcing electricity rationing.

Hydropower generates 70% of Colombia's electricity, creating dangerous climate vulnerability. River flows depend on Andean glacier and snowmelt, plus rainfall—all affected by climate change. Droughts reduce hydropower output, forcing expensive thermal generation or blackouts. The 2015-2016 El Niño demonstrated this fragility. Colombia needs energy diversification to reduce dependence on climate-vulnerable hydro.

Renewable energy potential is excellent yet underdeveloped. Colombia has good wind resources along the Caribbean coast and excellent solar potential. The La Guajira region could host massive wind and solar farms. However, deployment has been slow—renewables besides hydro provide under 2% of electricity. The government targets increased renewable capacity, but implementation lags.

Agriculture faces multiple climate stresses. Coffee—a signature export—suffers from changing rainfall patterns, temperature increases, and pest outbreaks (coffee rust disease spreading to higher altitudes). Plantain, rice, and cattle farming are vulnerable to droughts and floods. Smallholder farmers lack resources for adaptation.

Coastal areas face sea level rise and erosion. Caribbean and Pacific coasts have low-lying areas vulnerable to inundation. Cartagena—a tourism hub and UNESCO site—faces flooding from sea level rise and storm surge. Coastal erosion threatens communities and infrastructure.

Colombia's biodiversity—among the world's highest—faces climate threats. The country has more bird species than any other, plus vast endemic flora and fauna. Andean páramo ecosystems that regulate water are vulnerable to temperature increases. Amazon biodiversity faces habitat loss. Cloud forests shift elevation as temperatures rise.

Armed conflict and coca cultivation compound climate vulnerability. Decades of civil war prevented environmental governance in remote areas. Coca cultivation for cocaine production drives deforestation and chemical pollution. Post-conflict land rushes accelerate forest clearing. Environmental defenders face violence—Colombia is the world's deadliest country for environmental activists.

Colombia's climate future requires halting Amazon deforestation, glacier loss adaptation, renewable energy deployment, and agricultural transformation. The 2016 peace agreement created opportunities for environmental protection, but implementation faces challenges from illegal economies and weak governance in frontier regions.`
  },
  {
    name: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    summary: `Costa Rica epitomizes Central American climate leadership and vulnerability simultaneously. This small nation of 5 million has achieved 99% renewable electricity and pioneered payments for ecosystem services, yet faces intensifying hurricanes, flooding, droughts, and coastal threats. Temperatures have risen 0.9°C since 1960, with accelerating extreme weather impacts threatening biodiversity, tourism, and agriculture.

Costa Rica is a global renewable energy leader—99% of electricity comes from hydropower, geothermal, wind, and solar. The country frequently operates on 100% renewables for extended periods. This achievement demonstrates that high living standards and clean energy are compatible. Costa Rica targets carbon neutrality by 2050 and has pioneered payment for ecosystem services—compensating landowners for forest conservation.

However, climate impacts intensify despite mitigation leadership. Hurricanes are becoming more frequent and intense. Hurricane Nate (2017) and Hurricane Eta (2020) caused devastating flooding and landslides. Caribbean and Pacific coasts face storm surge, with low-lying areas vulnerable. Climate change is creating favorable conditions for more powerful hurricanes hitting Central America.

Rainfall patterns are changing dramatically. Costa Rica depends on predictable rainy seasons for hydropower and agriculture, but climate change creates erratic precipitation. Droughts now occur in traditionally wet regions. The 2014-2016 El Niño drought reduced hydropower generation, forcing thermal backup. Flooding from extreme rainfall destroys infrastructure—landslides in mountainous terrain kill dozens annually. The 2022 flooding caused over $1 billion in damage.

Hydropower vulnerability creates energy insecurity despite renewable success. Drought reduces reservoir levels, forcing expensive fossil fuel generation for backup. Climate variability makes dry seasons more extreme, threatening energy security. Costa Rica is deploying solar and wind to diversify beyond climate-dependent hydro.

Coastal areas face multiple threats. Sea level rise projected at 30-50 cm by 2100 threatens both Caribbean and Pacific coasts. Beach erosion reduces tourism appeal. Coral reefs suffer from ocean warming and acidification—bleaching events damage marine ecosystems. Mangrove forests critical for coastal protection face saltwater intrusion.

Agriculture is climate-vulnerable despite being a smaller economic sector. Coffee cultivation—iconic to Costa Rica—faces heat stress, changing rainfall, and expanding pest ranges including coffee rust disease. Banana plantations suffer from flooding and hurricanes. Pineapple cultivation (a major export) requires significant water, threatened by droughts.

Biodiversity—Costa Rica's greatest asset—faces climate stress. The country has 5% of global biodiversity despite covering 0.03% of Earth's land. Cloud forests, rainforests, mangroves, and coral reefs face climate disruption. Species must migrate to cooler elevations or latitudes, but habitat fragmentation prevents movement. Costa Rica's extensive national parks (covering 25% of territory) provide some resilience, but climate change threatens ecosystems faster than adaptation.

Tourism—20% of GDP—is climate-vulnerable. Hurricanes damage infrastructure and deter visitors. Beach erosion and coral bleaching reduce appeal. Biodiversity loss threatens ecotourism. However, Costa Rica's conservation brand remains strong.

Costa Rica demonstrates that small nations can lead on climate mitigation while remaining vulnerable to impacts driven by global emissions. The country proves renewable energy is achievable and economically viable. Yet physical climate realities—hurricanes, floods, droughts—threaten regardless of domestic emissions performance. Costa Rica's climate future requires both continued mitigation leadership and adaptation to unavoidable impacts.`
  },
  {
    name: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    summary: `Croatia faces Mediterranean and Adriatic climate vulnerability as temperatures rise faster than the EU average. This Balkan nation of 3.9 million has experienced warming of 1.5°C since 1960, with projections showing 2-4°C increases by 2100. Extreme heat, droughts, wildfires, and Adriatic Sea changes threaten tourism—Croatia's economic lifeline—while agricultural vulnerability and water scarcity compound challenges.

Extreme heat and drought are intensifying across Croatia. Summer temperatures regularly exceed 40°C, with 2017, 2019, and 2022 experiencing record-breaking heatwaves. Coastal cities including Split, Dubrovnik, and Zadar face dangerous heat stress. Droughts devastate agriculture—the 2017 drought caused over €150 million in agricultural losses. Rainfall is declining in summer while winter precipitation increases, creating seasonal water imbalances.

Wildfires are becoming more frequent and severe. Croatia's Mediterranean coast and islands face increasing fire risk during hot, dry summers. The 2017 Dalmatian fires were the worst in decades, threatening villages and tourism infrastructure. Forests covering 35% of Croatia face drought stress and fire vulnerability.

Tourism—20% of GDP and employing hundreds of thousands—is climate-vulnerable. The Adriatic coast attracts 20 million visitors annually, but extreme heat makes summer tourism less comfortable. Beaches face erosion from sea level rise. Water scarcity in coastal towns during peak tourist season creates supply challenges. Marine ecosystems degrading from warming affect diving and fishing tourism.

The Adriatic Sea is warming and changing. Sea surface temperatures have risen 1.5°C since 1980—faster than most global oceans. This threatens marine ecosystems, shifts fish species, and contributes to jellyfish blooms that disrupt tourism. Sea level rise projected at 30-50 cm by 2100 threatens coastal infrastructure, including Dubrovnik's UNESCO Old Town and other historic sites.

Agriculture faces drought and heat stress. Croatia's agricultural regions in Slavonia and Istria grow wheat, corn, and grapes, but climate change creates challenges. Droughts reduce yields, heat affects grape quality and wine production, and changing precipitation disrupts traditional farming. The agricultural sector employs 7% of Croatians, making climate impacts economically significant for rural communities.

Water resources face seasonal scarcity. Coastal regions experience summer droughts while tourism peaks, creating dangerous supply-demand mismatches. Islands and coastal towns depend on tanker deliveries during dry periods. Rivers including the Danube face reduced summer flows. Karst geology makes water management complex—rainfall quickly drains through limestone without recharging surface water.

Energy infrastructure is diversified but faces climate challenges. Croatia generates 50% of electricity from hydropower, but drought reduces output. The country imports electricity and burns natural gas for the remainder. Renewable energy deployment is growing—wind farms along the coast and solar installation—but slowly. The Krško nuclear plant in neighboring Slovenia provides power through joint ownership.

Croatia's climate future requires tourism adaptation, water management innovation, wildfire preparedness, and renewable energy expansion. EU membership provides climate finance and policy frameworks, but implementation depends on domestic political will. The 2020 earthquakes in Zagreb and Petrinja demonstrated infrastructure vulnerability, adding urgency to climate adaptation for a country facing compound risks.`
  },
  {
    name: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    summary: `Cuba confronts Caribbean climate catastrophe as a vulnerable island nation facing hurricanes, sea level rise, coastal erosion, and water scarcity. This island of 11 million has experienced temperature increases of 0.9°C since 1960, with accelerating impacts. Climate change threatens Cuba's economy, food security, and infrastructure while U.S. sanctions and socialist economic dysfunction limit adaptive capacity.

Hurricanes are intensifying and devastating Cuba repeatedly. Category 4-5 storms strike with increasing frequency—Hurricane Irma (2017) destroyed 150,000 homes, Hurricane Ian (2022) killed dozens and caused billions in damage. Climate change is creating favorable conditions for more intense hurricanes. Cuba's aging infrastructure—buildings, roads, power grid—collapses under hurricane winds and flooding. Recovery is slow, hampered by economic constraints and sanctions limiting reconstruction materials.

Sea level rise threatens vast coastal areas. Cuba has 5,746 kilometers of coastline, with many populated areas barely above sea level. Projections showing 30-60 cm rise by 2100 will inundate cities including Havana, Santiago, and Cienfuegos. Coastal erosion is accelerating—beaches critical for tourism wash away. Saltwater intrusion contaminates freshwater aquifers. The government developed "Tarea Vida" (Life Task)—a comprehensive climate adaptation plan recognizing that 122 coastal settlements may require relocation.

Water scarcity is worsening. Cuba depends on rainfall for freshwater, but climate change is reducing precipitation and increasing droughts. The 2015-2017 drought was the worst in over a century, causing widespread water rationing. Reservoirs dry up, affecting agriculture and urban water supplies. Aging infrastructure loses 50% of water through leaks, compounding scarcity.

Agriculture is highly vulnerable to climate impacts. Cuba depends on food imports due to inefficient state-run agriculture, but domestic production of rice, beans, vegetables, and fruit faces climate threats. Droughts devastate crops, hurricanes destroy plantations, and extreme heat reduces yields. Food security is precarious for a population already facing economic hardship and rationing.

Energy infrastructure is antiquated and climate-vulnerable. Cuba generates electricity primarily from oil-fired plants that frequently break down. Hurricanes devastate the power grid—Irma and Ian caused island-wide blackouts lasting weeks. The government has announced renewable energy targets—24% by 2030—focusing on solar and wind. Some solar installations exist, but implementation is slow due to capital constraints. Energy poverty is widespread during frequent blackouts.

Tourism—a critical revenue source—faces climate threats. Beach resort destinations including Varadero face erosion and hurricane damage. Coral reefs degrading from ocean warming and acidification reduce diving appeal. Extreme heat makes tourism less comfortable. However, Cuba's cultural and historical tourism remains resilient.

Coastal ecosystems face multiple stresses. Mangrove forests critical for storm protection are threatened by sea level rise and development. Coral reefs suffer from ocean warming, acidification, and overfishing. Cuba has extensive marine protected areas but lacks resources for effective management.

U.S. sanctions compound climate vulnerability by preventing access to technology, finance, and materials needed for adaptation. Cuba cannot easily purchase climate-resilient infrastructure, renewable energy equipment, or disaster recovery supplies. International climate finance is limited.

Cuba's socialist economic model creates both constraints and unique approaches. State control enables centralized adaptation planning (Tarea Vida), comprehensive disaster preparedness, and mass evacuations that minimize hurricane deaths. However, economic dysfunction, inefficiency, and lack of capital impede climate adaptation investments.

Cuba's climate future requires hurricane adaptation, coastal protection or relocation, water management, agricultural transformation, and renewable energy deployment. The country demonstrates effective disaster response but lacks resources for transformative adaptation. Climate change could make parts of Cuba uninhabitable, creating migration pressures despite government restrictions on emigration.`
  },
  {
    name: 'Cyprus',
    lat: 35.1264,
    lng: 33.4299,
    summary: `Cyprus faces eastern Mediterranean climate extremes as one of the EU's most climate-vulnerable members. This island nation of 1.2 million has experienced temperature increases of 1.3°C since 1960—faster than the EU average—with projections showing 3-4°C by 2100. Extreme heat, severe droughts, water scarcity, and wildfire threaten an economy dependent on tourism and agriculture.

Extreme heat is intensifying dangerously. Summer temperatures regularly exceed 40°C across Cyprus, with interior areas reaching 45°C during heatwaves. The 2021 heatwave set records above 46°C. Urban heat islands in Nicosia make cities dangerously hot. Tourism—25% of GDP—faces uncomfortable conditions during peak summer months. Agricultural workers face heat stress. Climate projections show conditions approaching human physiological limits.

Water scarcity is acute and existential. Cyprus is the EU's most water-stressed country, with per capita renewable freshwater among the lowest. Climate change has reduced rainfall 15% since 1970, with further declines projected. Droughts are frequent and severe—the 2007-2008 drought required emergency water shipments from Greece. Groundwater is overexploited, causing aquifer depletion and saltwater intrusion. Desalination plants provide 50% of water—an energy-intensive necessity making Cyprus dependent on fossil fuels for survival.

Agriculture faces impossible climate conditions. Farming employs significant rural populations but is devastated by heat and drought. Traditional crops including olives, grapes, and vegetables suffer from water scarcity. Irrigation water is scarce and expensive. Livestock farming faces heat stress and feed shortages. The agricultural sector is contracting as climate makes farming unviable.

Wildfires are increasing in frequency and severity. The 2021 Larnaca wildfire was Cyprus's worst in decades, burning 55 square kilometers and killing four people. Hot, dry summers create extreme fire danger. Forests covering 19% of Cyprus are vulnerable. Pine forests, maquis shrubland, and agricultural areas face fire risk.

Tourism faces climate threats despite being the economic foundation. Beach resorts attract millions, but extreme heat reduces comfort. Water scarcity creates supply challenges for hotels. Beaches face erosion from sea level rise. However, winter tourism may benefit from milder conditions as northern Europe becomes wetter and colder.

The Mediterranean Sea is warming rapidly. Waters around Cyprus have increased 1.5°C since 1980. This affects marine ecosystems, shifts fish species, and contributes to jellyfish blooms. Sea level rise projected at 40-60 cm by 2100 threatens coastal infrastructure.

Energy infrastructure is carbon-intensive and vulnerable. Cyprus generates 90% of electricity from oil and gas-fired plants—among the EU's dirtiest energy mixes. The country is isolated from European electricity grids, preventing imports. Solar potential is excellent—Cyprus receives intense sunshine—yet deployment has been slow. Rooftop solar is increasing, but large-scale renewable projects face permitting and land constraints. The government targets 23% renewable electricity by 2030, though achieving this requires massive acceleration.

Cyprus's political division compounds climate vulnerability. The island is split between the Republic of Cyprus (EU member) and Turkish-occupied Northern Cyprus. This prevents coordinated climate adaptation and complicates water management, fire response, and coastal protection.

Cyprus's climate future may be untenable without transformative adaptation. Water scarcity could make the island uninhabitable, forcing mass desalination or population reduction. Extreme heat approaching physiological limits threatens outdoor activities and agriculture. Cyprus epitomizes Mediterranean climate crisis—a beautiful island facing potential abandonment due to heat and drought.`
  },
  {
    name: 'Czechia',
    lat: 49.8175,
    lng: 15.4730,
    summary: `Czechia (Czech Republic) confronts Central European climate vulnerability as a landlocked nation dependent on coal and facing severe droughts. This country of 10.5 million has experienced temperature increases of 1.8°C since 1961—faster than the EU average—with projections showing 2-4°C by 2100. Droughts, extreme heat, bark beetle outbreaks, and declining river flows threaten water resources, forests, and agriculture while coal dependence creates air pollution and emissions challenges.

Droughts are Czechia's most acute climate impact. The 2015-2019 period was the driest in 500 years. Rivers including the Elbe, Vltava, and Morava reached historically low flows. Groundwater levels dropped critically. Agriculture suffered devastating crop failures. Forests stressed by drought became vulnerable to bark beetle outbreaks. The drought cost billions in economic damage.

Extreme heat is intensifying across Czechia. Summer temperatures regularly exceed 35°C, with Prague experiencing dangerous urban heat islands. The 2018 and 2019 heatwaves set records. Heat stress affects populations, particularly elderly in cities lacking air conditioning. Agricultural workers face dangerous conditions.

Bark beetle outbreaks are devastating Czech forests. Drought-stressed spruce trees became vulnerable to infestations, causing catastrophic forest dieback. Since 2015, over 70 million cubic meters of timber have been damaged—unprecedented ecological and economic disaster. Forests covering 35% of Czechia face transformation as spruce dies and different species establish. This affects timber industry, carbon sinks, water retention, and biodiversity.

Water resources face quantity and quality challenges. Rivers provide drinking water, irrigation, and hydropower, but climate change is reducing flows. The 2018-2019 drought created water supply crises in towns across Moravia. Groundwater recharge is declining. Czechia must adapt water management to scarcity.

Agriculture suffers from drought and heat. Czech farming produces wheat, barley, rapeseed, and sugar beets, but climate change creates challenges. The 2018 drought reduced crop yields 30-40%. Irrigation infrastructure is limited—most farming is rain-fed. Heat stress affects livestock. Wine production may benefit from warming in some regions but faces drought constraints.

Coal dominates Czechia's energy and creates severe air pollution. The country generates 45% of electricity from coal, with major facilities in northern Bohemia creating toxic air quality. Prague and other cities experience dangerous particulate matter and ozone levels. Coal mining employs thousands, creating political resistance to phase-out. However, EU pressure and climate commitments require transition.

Renewable energy deployment is growing but slowly. Czechia has nuclear power providing 35% of electricity—the Dukovany and Temelín plants offer low-carbon baseload. The government plans new nuclear reactors. Solar capacity surged during a 2009-2013 boom but has stagnated. Wind development faces public opposition—Czechia is one of Europe's few countries restricting wind farms. Hydropower contributes 5% from run-of-river facilities vulnerable to drought.

Extreme weather events include flash floods despite overall drying trend. Intense rainfall causes flooding—the 2002 and 2013 Prague floods caused billions in damage. Climate change creates paradoxical hydrology: overall drier with occasional extreme precipitation overwhelming drainage systems.

Czechia's climate future requires water management transformation, forest adaptation, coal phase-out, and renewable deployment. EU membership provides frameworks and funding, but domestic politics around coal and wind create barriers. The 2015-2019 drought demonstrated acute vulnerability, yet political response has been inadequate. Czechia risks becoming a climate backwater in Central Europe—polluted, water-scarce, and ecologically degraded.`
  },
  {
    name: 'Democratic Republic of the Congo',
    lat: -4.0383,
    lng: 21.7587,
    summary: `The Democratic Republic of the Congo (DRC) faces climate vulnerability compounded by conflict, state collapse, and extreme poverty despite containing the world's second-largest rainforest. This vast nation of 100 million has experienced temperature increases of 0.8°C since 1960, with accelerating deforestation threatening the Congo Basin rainforest critical for global climate stability. Armed conflict, resource extraction, and agricultural expansion drive environmental destruction while climate impacts exacerbate humanitarian catastrophe.

The Congo Basin rainforest is a global climate asset—the world's second-largest tropical forest storing billions of tons of carbon and regulating regional rainfall. DRC contains 60% of this forest, but deforestation is accelerating. An estimated 500,000 hectares are cleared annually for agriculture, charcoal production, and logging. Armed groups control forest areas, selling timber illegally to fund conflict. Deforestation contributes 50% of DRC's greenhouse gas emissions. Loss of Congo Basin forest would create catastrophic global climate feedback loops.

Rainfall patterns are changing across DRC's vast geography. The country depends on predictable rainy seasons for agriculture, but climate change is making precipitation erratic. Some regions experience reduced total rainfall while others face more intense downpours. This creates agricultural stress for a population dependent on subsistence farming.

Armed conflict compounds climate vulnerability catastrophically. Eastern DRC has been in near-constant warfare for 25 years. Armed groups control resource-rich regions, creating humanitarian disaster. Over 7 million people are displaced. Violence prevents agriculture, destroys infrastructure, and makes climate adaptation impossible. Climate-driven resource scarcity over land and water intensifies conflicts.

Agriculture employs 70% of Congolese but faces multiple stresses. Subsistence farmers grow cassava, maize, and beans under changing rainfall patterns. Droughts and floods destroy crops. Conflict zones become agricultural wastelands. Food insecurity affects 26 million people—one of the world's worst humanitarian crises. Climate change exacerbates these conditions.

Extreme poverty eliminates adaptive capacity. DRC ranks among the world's poorest despite vast mineral wealth. GDP per capita is under $600. Only 20% have electricity access. Health care and education are barely functional. State institutions are weak to nonexistent outside Kinshasa. Climate adaptation requires resources that simply don't exist.

Energy poverty is nearly absolute. Biomass—firewood and charcoal—provides 95% of energy, driving devastating deforestation. The massive Inga hydropower potential on the Congo River remains largely undeveloped due to conflict and corruption. Kinshasa and major cities have limited electricity from aging hydropower and diesel generation. Rural areas have no grid access.

Mining drives environmental degradation. DRC has vast deposits of cobalt, copper, coltan, and other minerals critical for smartphones and batteries. Industrial and artisanal mining creates deforestation, water pollution, and land degradation. Cobalt mining for electric vehicle batteries creates tragic irony—minerals for climate solutions extracted through environmental destruction and human rights abuses.

Water resources face quality challenges despite abundant rainfall. Rivers including the Congo provide water but are polluted from mining, urban waste, and agricultural runoff. Access to safe water is limited—most Congolese lack improved sanitation.

DRC's climate future is catastrophic without peace and state-building. The country needs conflict resolution, governance, forest protection, agricultural support, and energy infrastructure—all impossible given current conditions. DRC epitomizes how conflict, poverty, and state failure prevent climate action despite global stakes. Protecting the Congo Basin rainforest is a planetary imperative, yet DRC lacks capacity to prevent deforestation. Without massive international intervention, DRC risks environmental collapse with global consequences.`
  },
  {
    name: 'Denmark',
    lat: 56.2639,
    lng: 9.5018,
    summary: `Denmark faces North Sea climate vulnerability as a low-lying coastal nation with extensive agricultural land. This Scandinavian country of 5.9 million has experienced temperature increases of 1.5°C since 1870, with projections showing 2-3°C by 2100. Sea level rise, coastal flooding, storm surge, and agricultural challenges threaten Denmark while the country leads globally on wind energy and climate ambition.

Sea level rise and coastal flooding are Denmark's primary climate threats. Most of the country lies below 30 meters elevation, with extensive coastline and numerous islands. Copenhagen, Aarhus, and coastal cities face flooding from sea level rise projected at 40-60 cm by 2100. Storm surges from the North Sea cause devastating floods—the 2013 storm surge flooded coastal areas causing billions in damage. Coastal erosion threatens beaches, infrastructure, and historic sites.

Denmark is a global wind energy pioneer—50% of electricity comes from wind turbines, primarily offshore in the North Sea. The country has transformed from fossil fuel dependence to renewable leadership. Wind power exports electricity to neighbors. Denmark targets 100% renewable energy by 2030 and has achieved world-leading emissions reductions. The energy transition demonstrates that wealthy nations can decarbonize while maintaining prosperity.

Agriculture employs 3% of Danes but uses 60% of land, making climate impacts economically significant. Danish farming—pork, dairy, grain—faces changing rainfall patterns and extreme weather. Droughts affect crop yields, while intense rainfall causes flooding and soil erosion. Agriculture contributes 20% of Denmark's emissions, primarily from livestock. The sector faces pressure to reduce methane emissions and adopt sustainable practices.

Extreme weather is intensifying despite Denmark's temperate climate. Intense rainfall events cause urban flooding—Copenhagen experienced devastating cloudbursts in 2011 that prompted major drainage infrastructure investments. Droughts occur more frequently—the 2018 drought caused agricultural losses. Wind storms damage infrastructure and disrupt North Sea wind farms.

Water resources face quality challenges despite abundant rainfall. Agricultural runoff creates nutrient pollution in coastal waters, causing algal blooms and dead zones in Danish straits and fjords. Climate change is affecting water quality through temperature increases and changing precipitation patterns.

Denmark's low elevation creates long-term vulnerabilities. If Greenland's ice sheet collapses—a potential outcome of unchecked warming—resulting sea level rise of several meters would inundate vast areas of Denmark. The country faces existential questions about its geographic future.

Denmark's climate future involves coastal protection, agricultural transformation, and continued renewable energy leadership. The country demonstrates that aggressive climate action is economically viable and politically achievable. Danish climate policy—carbon taxes, renewable subsidies, adaptation investments—provides a model for wealthy nations. However, even leaders like Denmark face physical climate impacts requiring expensive adaptation.`
  },
  {
    name: 'Djibouti',
    lat: 11.8251,
    lng: 42.5903,
    summary: `Djibouti confronts Horn of Africa climate extremes in one of the world's hottest, driest environments. This small nation of 1 million faces temperature increases of 1.2°C since 1960, with projections showing 2-3°C by 2100. Extreme heat, severe drought, water scarcity, and sea level rise threaten a country where survival depends on scarce resources while geopolitical importance as a military and shipping hub provides some economic buffer.

Extreme heat makes Djibouti one of Earth's hottest countries. Temperatures regularly exceed 45°C, with some areas reaching 50°C. Climate change is increasing heat extremes—Djibouti could experience wet-bulb temperatures approaching human physiological limits. Heat stress threatens outdoor workers, livestock, and daily life. Most residents lack access to cooling, making extreme heat deadly.

Water scarcity is acute and worsening. Djibouti is one of the world's most water-stressed nations, receiving under 150mm annual rainfall. Groundwater resources are minimal and overexploited. The country depends on expensive desalination and imports. Drought is persistent—the 2011 and 2017 droughts devastated nomadic pastoralists. Climate change is reducing already-scarce rainfall.

Nomadic pastoralism faces collapse. Djiboutian herders move livestock across arid lands seeking sparse grazing and water, but climate change is eliminating this livelihood. Droughts kill livestock, water points dry up, and grazing lands disappear. Pastoralists are forced into urban poverty, creating humanitarian crisis.

Agriculture is barely viable in Djibouti's harsh environment. Only 0.04% of land is arable. The country imports 90% of food, creating dangerous food security vulnerability. Small-scale farming in wadis and coastal areas faces impossible climate conditions.

Sea level rise threatens coastal infrastructure. Djibouti City and ports sit barely above sea level. Projected sea level rise of 30-50 cm by 2100 will inundate port areas, military bases, and urban settlements. The Port of Djibouti—economically critical as Ethiopia's primary outlet—faces flooding and storm surge threats.

Energy infrastructure is limited. Djibouti imports electricity from Ethiopia and burns diesel. The country has excellent solar and geothermal potential—Lake Assal region has significant geothermal resources—yet deployment is minimal. Renewable energy development requires investment beyond current capacity.

Geopolitical importance provides economic lifeline. Djibouti hosts military bases for the U.S., France, China, and others, generating rent revenues. The port serves as a transshipment hub. This strategic importance brings income that could fund climate adaptation if invested wisely.

Djibouti's climate future may be untenable without massive adaptation. Extreme heat approaching physiological limits, water scarcity, and agricultural impossibility could make the country uninhabitable. Survival depends on desalination, air conditioning, and food imports—all requiring wealth and energy. Djibouti exemplifies climate extremes where human habitation faces fundamental questions.`
  },
  {
    name: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    summary: `The Dominican Republic faces Caribbean climate catastrophe sharing Hispaniola island with Haiti. This nation of 11 million experiences temperature increases of 0.9°C since 1960, with hurricanes, drought, flooding, and sea level rise threatening tourism, agriculture, and coastal communities. Climate change impacts compound with rapid development and deforestation creating environmental challenges.

Hurricanes devastate the Dominican Republic repeatedly. Category 4-5 storms including Hurricane Maria (2017) and Fiona (2022) cause billions in damage, deaths, and displacement. Climate change is intensifying hurricanes—warmer ocean temperatures fuel stronger storms. The country's infrastructure, housing, and agriculture are vulnerable. Recovery is slow, particularly affecting poor communities.

Tourism—the economic foundation at 17% of GDP—is climate-vulnerable. Beach destinations including Punta Cana and Puerto Plata face hurricane damage, coastal erosion, and sea level rise. Coral reefs degrading from ocean warming reduce diving appeal. However, tourism remains resilient with rapid rebuilding after storms.

Sea level rise threatens extensive coastlines. Projections showing 30-60 cm by 2100 will inundate coastal areas, damage tourism infrastructure, and cause saltwater intrusion. Coastal erosion accelerates, destroying beaches critical for tourism.

Agriculture faces multiple climate stresses. Rice, coffee, cacao, and banana cultivation suffer from hurricanes, floods, and droughts. The 2015 drought devastated agriculture, while hurricanes regularly destroy plantations. Small holder farmers lack resources for adaptation.

Deforestation accelerates climate vulnerability. Forest cover declined from 60% in 1950 to 40% currently. Clearing for agriculture, charcoal production, and development eliminates carbon sinks and degrades watersheds. Deforestation worsens flooding and landslides during heavy rainfall.

Water resources face quantity and quality challenges. Rivers provide water for cities and agriculture, but deforestation and pollution create problems. Droughts reduce water availability while floods contaminate supplies. Climate variability makes water management difficult.

Energy infrastructure depends on fossil fuels. The Dominican Republic generates 75% of electricity from oil, gas, and coal, creating high emissions and expensive power. Renewable energy deployment is growing—wind farms and solar installations—but slowly. The country has good solar and wind potential yet remains heavily fossil-dependent.

The Dominican Republic's climate future requires hurricane resilience, coastal adaptation, agricultural transformation, reforestation, and renewable energy deployment. The country demonstrates Caribbean climate vulnerability—beautiful beaches and tropical landscapes threatened by intensifying climate impacts.`
  },
  {
    name: 'East Timor',
    lat: -8.8742,
    lng: 125.7275,
    summary: `East Timor (Timor-Leste) confronts climate vulnerability as one of the world's youngest and poorest nations. This half-island country of 1.3 million faces temperature increases of 0.8°C since 1960, with changing rainfall patterns, extreme weather, and sea level rise threatening agriculture and coastal communities. Poverty, weak institutions, and oil dependence limit climate adaptation capacity.

Rainfall variability is East Timor's primary climate challenge. The country depends on monsoon rains for agriculture and water, but climate change is making precipitation erratic. Droughts and floods alternate, devastating subsistence farming. The 2015-2016 El Niño drought caused widespread food insecurity affecting hundreds of thousands.

Agriculture employs 60% of East Timorese and faces severe climate vulnerability. Subsistence farmers grow maize, rice, cassava, and vegetables on rain-fed plots. Droughts destroy crops, creating food crises. Floods wash away farms and infrastructure. Coffee cultivation—a cash crop grown in highlands—suffers from changing rainfall and temperature stress.

Deforestation accelerates climate impacts. Forest cover declined from 50% to 46% since independence in 2002. Clearing for agriculture and firewood eliminates carbon sinks and destabilizes slopes. Landslides during heavy rainfall destroy villages and infrastructure.

Coastal areas face sea level rise and storm surge. Low-lying areas around Dili and northern coast are vulnerable to inundation. Sea level rise projected at 30-50 cm by 2100 threatens settlements and infrastructure. Coastal erosion damages fishing communities.

Extreme poverty eliminates adaptive capacity. East Timor is one of Asia's poorest countries, with GDP per capita under $1,500. Only 80% have electricity access. Infrastructure is minimal. Climate adaptation requires resources the country lacks.

Energy infrastructure depends on expensive imported diesel for electricity. East Timor has significant solar potential but deployment is minimal. Small-scale solar provides some off-grid power. The country lacks capital for renewable energy development.

Oil and gas provide 90% of government revenues from offshore Timor Sea fields, but reserves are depleting. Economic dependence on fossil fuels creates contradictions—East Timor profits from petroleum while facing climate impacts. The country must diversify economically as oil ends.

East Timor's climate future requires agricultural adaptation, renewable energy, institutional development, and economic diversification. However, the country's extreme poverty, weak governance, and institutional fragility make transformative climate action nearly impossible without massive international support.`
  },
  {
    name: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    summary: `Ecuador faces Andean and Amazonian climate vulnerability across extraordinary biodiversity. This nation of 18 million experiences temperature increases of 0.8°C since 1960, with accelerating glacier retreat, Amazon deforestation, extreme weather, and Galápagos ecosystem threats. Oil dependence and agricultural expansion drive emissions while climate impacts threaten water resources and ecosystems.

Andean glaciers are disappearing rapidly. Ecuador has lost 40% of glacier area since 1990, with small glaciers vanishing entirely. These ice masses provide critical dry-season water for Quito and other cities. Complete glacier loss within decades will create water crises for millions. The symbolic loss of equatorial glaciers represents irreversible climate change.

Amazon deforestation accelerates in eastern Ecuador. Oil extraction and agricultural expansion clear rainforest. Indigenous territories face pressure from illegal logging and colonization. Deforestation contributes 40% of Ecuador's emissions. Amazon forest loss threatens biodiversity and Indigenous communities.

Extreme weather intensifies across Ecuador's diverse geography. The coast faces flooding from El Niño events—the 2017 floods killed 700 and caused billions in damage. Andean highlands experience droughts and landslides. Amazon regions face changing rainfall affecting Indigenous livelihoods.

The Galápagos Islands face multiple climate threats. Ocean warming and acidification threaten marine ecosystems including unique corals and fish. El Niño events devastate wildlife—marine iguanas starve when ocean temperatures spike. Sea level rise threatens coastal habitats. The Galápagos epitomize global biodiversity under climate siege.

Agriculture faces climate stresses. Banana, cacao, coffee, and flower cultivation suffer from changing rainfall and extreme weather. Smallholder farmers in the highlands grow potatoes and grains vulnerable to drought and frost. Coastal shrimp farming faces disease outbreaks linked to warming waters.

Oil dominates Ecuador's economy and emissions. The country is South America's fifth-largest oil producer, with extraction in the Amazon creating deforestation and pollution. Oil provides 40% of export revenues, creating economic dependence despite environmental costs. Ecuador faces impossible choices between oil revenues and rainforest protection.

Renewable energy potential exists but is underdeveloped. Ecuador generates 75% of electricity from hydropower, but climate variability affects generation. The country has good solar and geothermal potential yet remains hydropower-dependent.

Ecuador's climate future requires halting Amazon deforestation, glacier loss adaptation, protecting Galápagos, agricultural transformation, and transitioning beyond oil. However, economic dependence on petroleum and weak governance prevent transformative action. Ecuador's extraordinary biodiversity faces climate threats the country cannot adequately address.`
  },
  {
    name: 'Egypt',
    lat: 26.8206,
    lng: 30.8025,
    summary: `Egypt confronts existential climate threats as a desert nation dependent on the Nile River. This country of 105 million has experienced temperature increases of 1.5°C since 1960, with projections showing 2-4°C by 2100. Extreme heat, Nile flow uncertainty, sea level rise inundating the Nile Delta, and water scarcity threaten agriculture, cities, and national survival.

The Nile Delta faces catastrophic sea level rise. This fertile triangle where 40 million Egyptians live and most agriculture occurs sits barely above sea level. Projected sea level rise of 30-60 cm by 2100 will inundate vast delta areas, destroying farmland and displacing millions. Alexandria, Egypt's second city, faces partial submersion. Saltwater intrusion is already contaminating delta aquifers and farmland. Egypt could lose 15-20% of delta land, creating one of the world's worst climate-driven humanitarian disasters.

Extreme heat is intensifying to dangerous levels. Temperatures regularly exceed 45°C in summer, with Cairo experiencing deadly heat waves. Climate projections show conditions approaching wet-bulb temperatures incompatible with human survival during extreme events. Heat stress threatens the elderly, outdoor workers, and slum dwellers lacking cooling.

Nile River flow faces profound uncertainty. Egypt depends absolutely on the Nile for 95% of water—without the river, Egypt cannot exist. Climate change affects rainfall in Ethiopian highlands where the Blue Nile originates. Ethiopia's Grand Renaissance Dam further complicates water politics. Reduced Nile flows would devastate Egyptian agriculture, threaten drinking water for 100 million, and create national catastrophe.

Agriculture is extraordinarily climate-vulnerable. The Nile Delta and Valley produce wheat, rice, cotton, and vegetables feeding Egypt's massive population. Sea level rise, saltwater intrusion, extreme heat, and uncertain water supplies threaten food security. Egypt imports 60% of food—climate disrupting domestic production would increase dangerous import dependence.

Water scarcity is acute and worsening. Egypt is severely water-stressed, with per capita renewable freshwater among the world's lowest. Population growth increases demand while climate change threatens supply. The country faces potential water bankruptcy.

Energy infrastructure is fossil fuel-dependent but transitioning. Egypt generates 90% of electricity from natural gas and oil. However, the country has deployed large solar farms in desert regions—Benban solar park is among the world's largest. Egypt has excellent solar potential and could become a renewable energy leader.

Cairo's 22 million residents face compounding climate vulnerabilities—extreme heat, air pollution, water scarcity, and flood risk from rare intense rainfall overwhelming drainage. Urban poor in informal settlements are most vulnerable.

Egypt's climate future may involve partial abandonment of the Nile Delta and mass internal migration. Adaptation requires delta protection, agricultural transformation, massive water management, and renewable energy deployment. The scale of challenge is staggering—climate change threatens Egypt's geographic foundation. Without aggressive global emissions cuts, Egypt faces humanitarian catastrophe.`
  },
  {
    name: 'El Salvador',
    lat: 13.7942,
    lng: -88.8965,
    summary: `El Salvador faces Central American climate catastrophe as the smallest, most densely populated country in the region. This nation of 6.5 million experiences temperature increases of 1°C since 1960, with hurricanes, droughts, floods, and extreme weather threatening agriculture, water resources, and livelihoods. Climate-driven migration compounds gang violence and poverty creating compounding crises.

Extreme weather alternates between devastating floods and severe droughts. Hurricane Mitch (1998), Hurricane Stan (2005), and Tropical Storm Agatha (2010) caused catastrophic flooding, landslides, and deaths. Conversely, the 2014-2016 and 2018 droughts devastated agriculture causing food insecurity for millions. Climate change is intensifying both extremes—heavier rainfall events alternate with longer dry periods.

Agriculture employs 20% of Salvadorans and is extraordinarily climate-vulnerable. Coffee cultivation—historically important—suffers from changing rainfall, heat stress, and coffee rust disease spreading to higher elevations. Maize and bean farming for domestic consumption faces droughts and floods. The 2018 drought reduced maize production 70%, creating food crisis.

Water scarcity is acute despite tropical location. El Salvador is Central America's most water-stressed country, with groundwater overexploitation and surface water pollution. Rivers are contaminated from agricultural runoff, industrial waste, and inadequate sewage treatment. Climate change reduces reliable water availability. The country faces dangerous water insecurity.

Deforestation accelerates climate vulnerability. Forest cover declined from 50% in 1960 to 14% currently—among Central America's worst. Clearing for agriculture and urbanization eliminates carbon sinks and destabilizes slopes. Deforestation exacerbates flooding and landslides during extreme rainfall.

Climate-driven migration is transforming El Salvador. Droughts destroying livelihoods push rural populations toward cities or international migration. The "Dry Corridor" drought belt has become unviable for farming, forcing displacement. Climate change is a significant driver of Salvadoran migration to the U.S., alongside gang violence and poverty.

Energy infrastructure depends on fossil fuels and vulnerable hydropower. El Salvador generates 30% of electricity from hydropower subject to climate variability, 30% from geothermal (a positive—the country has significant geothermal resources), and 40% from fossil fuels. Renewable deployment could increase but requires investment.

El Salvador's small size and high population density amplify climate vulnerability. There is nowhere to retreat from impacts—droughts affect the entire country, floods inundate populated lowlands. The country lacks geographic buffers available to larger nations.

El Salvador's climate future requires agricultural transformation, water management, reforestation, renewable energy expansion, and addressing root causes of migration. However, gang violence, corruption, and poverty prevent effective climate action. Climate change compounds existing vulnerabilities creating potential state failure scenarios.`
  },
  {
    name: 'Equatorial Guinea',
    lat: 1.6508,
    lng: 10.2679,
    summary: `Equatorial Guinea faces Central African climate vulnerability as a small, oil-rich dictatorship with vast inequality. This nation of 1.7 million experiences temperature increases of 0.8°C since 1960, with deforestation, coastal threats, and changing rainfall patterns. Oil wealth concentrates among elites while most citizens face poverty and environmental degradation.

Oil dominates Equatorial Guinea's economy—petroleum provides 90% of government revenues and 75% of GDP. This creates high per capita income statistics masking extreme inequality—most Equatoguineans live in poverty while the ruling family accumulates billions. Oil wealth has not translated into climate resilience or environmental protection.

Deforestation accelerates despite rainforest covering 58% of the country. Logging, agricultural expansion, and oil infrastructure clear forest. Monte Alén National Park and other protected areas face pressure. Deforestation contributes emissions and degrades ecosystems in a biodiversity hotspot.

Rainfall patterns are changing. Equatorial Guinea's tropical climate means high rainfall, but climate change is affecting seasonality and intensity. Agriculture—primarily subsistence farming of cassava, plantains, and yams—faces challenges from erratic rainfall. Most Equatoguineans depend on agriculture despite oil wealth.

Coastal areas including the capital Malabo (on Bioko Island) and mainland Bata face sea level rise. Projections showing 30-50 cm by 2100 threaten infrastructure and settlements. Coastal erosion damages fishing communities.

Energy infrastructure is limited despite oil wealth. Electricity access is only 67%—lower than expected for a supposed middle-income country. Oil wealth hasn't translated into energy infrastructure benefiting citizens. The country has hydropower potential but limited development.

Authoritarian governance prevents environmental protection. President Obiang's 44-year dictatorship prioritizes regime security and elite enrichment over environmental or climate concerns. Civil society doesn't exist—no environmental movements, no climate activism. Policy is whatever the president decides.

Equatorial Guinea's climate future is constrained by governance failure. The country has resources for climate adaptation but lacks political will. Oil wealth could fund renewable energy, reforestation, and resilience, but instead enriches elites. Equatorial Guinea demonstrates how resource wealth and dictatorship create climate vulnerability despite apparent prosperity.`
  },
  {
    name: 'Eritrea',
    lat: 15.1794,
    lng: 39.7823,
    summary: `Eritrea confronts Red Sea climate extremes as an authoritarian, isolated nation. This country of 3.7 million faces temperature increases of 1.2°C since 1960, with severe drought, water scarcity, agricultural collapse, and extreme heat. Authoritarian governance, militarization, and international isolation prevent effective climate response.

Drought is frequent and devastating. Eritrea's semi-arid climate means rainfall is already scarce and unreliable. Climate change is reducing precipitation further and increasing variability. Droughts in 2002, 2009, 2011, and 2019 caused crop failures and livestock deaths affecting millions. Agriculture-dependent populations face recurring food crises.

Water scarcity is acute. Eritrea is extremely water-stressed, with limited renewable freshwater resources. Groundwater is overexploited. The country depends on rainwater harvesting and small-scale irrigation. Climate change is worsening scarcity, making agriculture increasingly impossible.

Agriculture employs 60% of Eritreans but is failing. Subsistence farming of sorghum, millet, and barley faces impossible conditions—erratic rainfall, drought, degraded soils, and primitive techniques. Yields are declining. Food insecurity affects the majority of the population. Eritrea depends on food aid but government restrictions limit humanitarian access.

Extreme heat is intensifying. Coastal areas including Massawa experience temperatures exceeding 45°C. Highland areas are cooler but warming. Heat stress affects agriculture, livestock, and human health. Most Eritreans lack access to cooling.

Deforestation and land degradation accelerate vulnerability. Forest cover is minimal—under 15% and declining. Clearing for agriculture and firewood eliminates vegetation. Overgrazing degrades rangelands. Soil erosion is severe. Land degradation creates feedback loops reducing agricultural viability.

Energy poverty is nearly absolute. Only 50% of Eritreans have electricity access. Power generation comes from diesel. Biomass provides most energy. Eritrea has good solar potential but deployment is minimal due to lack of resources and isolation.

Authoritarian governance compounds climate vulnerability catastrophically. President Isaias Afwerki's dictatorship has ruled since 1993. The country is militarized—indefinite conscription drains the workforce. Eritrea is internationally isolated due to human rights abuses. This prevents development assistance, climate finance, and technology access.

Mass emigration results partly from climate and governance. Eritreans flee to Ethiopia, Sudan, and Europe escaping dictatorship, poverty, and environmental collapse. Climate change is pushing migration from areas where farming has become impossible.

Eritrea's climate future is catastrophic without political transformation. The country needs agricultural support, water infrastructure, renewable energy, and reforestation—all impossible under current governance. Eritrea epitomizes how dictatorship and climate change create compounding disasters.`
  },
  {
    name: 'Estonia',
    lat: 58.5953,
    lng: 25.0136,
    summary: `Estonia faces Baltic climate vulnerability as a small post-Soviet nation experiencing rapid warming. This country of 1.3 million has seen temperature increases of 1.5°C since 1961—faster than the EU average—with mild winters, changing precipitation, and coastal threats. Estonia leads Eastern Europe on renewable energy while confronting forest, agricultural, and coastal challenges.

Warming is transforming Estonia's climate dramatically. Winters are becoming shorter and milder—snow cover duration has decreased several weeks since 1960. Summers are warming with occasional heatwaves. The Baltic Sea is warming, affecting marine ecosystems and coastal climate.

Coastal areas face multiple threats. Sea level rise projected at 30-60 cm by 2100 threatens low-lying areas around Tallinn and Pärnu. Storm surges from Baltic storms cause flooding. Coastal erosion damages beaches and infrastructure. Estonia has 3,800 kilometers of coastline making these impacts widespread.

Forests covering 50% of Estonia face climate stress. Warmer, drier conditions increase wildfire risk. Bark beetle outbreaks damage coniferous forests. Pests and diseases previously limited by cold winters are expanding. Forest composition is shifting as species ranges move northward.

Agriculture faces mixed climate impacts. Longer growing seasons and warmer temperatures could benefit Estonian farming of grains, potatoes, and dairy. However, increased rainfall variability, extreme weather, and new pests create challenges. Waterlogging from intense rainfall damages crops.

Renewable energy deployment is advancing. Estonia generates 18% of electricity from renewables—primarily biomass from forestry and wind farms. Oil shale provides 75% of electricity, creating heavy emissions. The country targets reducing oil shale dependence and increasing renewables. Wind potential is good, and deployment is growing. However, Estonia faces challenges balancing energy transition with oil shale industry employment.

Peat bogs covering 20% of Estonia are climate-vulnerable. Rising temperatures and changing precipitation affect these important ecosystems. Peat extraction for fuel and horticulture releases stored carbon. Bog restoration is occurring but slowly.

Estonia's Baltic Sea fisheries face changes from warming waters. Species composition is shifting. Reduced ice cover affects ecosystems. The Gulf of Finland faces eutrophication from agricultural runoff exacerbated by climate change.

Estonia's climate future involves managing warming impacts on forests and agriculture, coastal protection, and accelerating energy transition away from oil shale. EU membership provides frameworks and funding for climate action. Estonia demonstrates post-Soviet climate vulnerability and transition challenges.`
  },
  {
    name: 'Ethiopia',
    lat: 9.1450,
    lng: 40.4897,
    summary: `Ethiopia confronts Horn of Africa climate catastrophe as the region's most populous nation. This country of 120 million faces temperature increases of 1.3°C since 1960, with devastating droughts, erratic rainfall, food insecurity, and conflict over scarce resources. The Grand Renaissance Dam offers hydropower potential while creating regional water tensions climate change intensifies.

Drought devastates Ethiopia repeatedly with intensifying severity. The 1983-1985 famine killed up to 1 million people. The 2015-2016 and 2022-2023 droughts affected tens of millions, requiring massive humanitarian response. Climate change is increasing drought frequency and severity—what were once 20-year events now occur every 5-7 years. Pastoral communities and subsistence farmers face impossible conditions.

Rainfall variability is Ethiopia's defining climate challenge. The country depends on two rainy seasons—the Belg (February-May) and Kiremt (June-September). Climate change is making both less reliable. Late onset, early cessation, and mid-season dry spells devastate agriculture. Flash floods alternate with droughts—extreme rainfall followed by prolonged dry periods.

Agriculture employs 70% of Ethiopians and is extraordinarily vulnerable. Subsistence farming of teff, maize, wheat, and barley depends entirely on rainfall. Droughts cause crop failures pushing millions into food insecurity. Ethiopia has 60 million livestock—cattle, goats, sheep—vulnerable to drought and pasture loss. Pastoral communities in lowland regions face livelihood collapse.

The Grand Renaissance Dam on the Blue Nile is Ethiopia's development centerpiece—6.45 GW of hydropower promising electricity for 100 million. However, climate change affects Nile flows, creating uncertainty for dam performance and worsening tensions with downstream Egypt and Sudan. Water politics are explosive—Ethiopia filling the dam while Egypt faces water bankruptcy creates dangerous conflict potential.

Deforestation accelerates climate vulnerability. Forest cover declined from 40% in 1900 to 15% currently. Clearing for agriculture and firewood eliminates carbon sinks and degrades watersheds. The Ethiopian Highlands—water towers for the Blue Nile—face erosion and degradation.

Extreme heat is intensifying in lowland regions. The Danakil Depression and Somali Region experience temperatures exceeding 45°C. Climate change is making heat extremes more frequent and severe. Pastoral communities and urban populations lack access to cooling.

Energy poverty compounds vulnerability. Only 50% of Ethiopians have electricity access. Biomass provides 85% of energy—firewood and charcoal—driving deforestation. The Grand Renaissance Dam will transform energy access if successfully operated, but drought vulnerability remains.

Armed conflict compounds climate crises. The 2020-2022 Tigray war caused humanitarian catastrophe. Ethnic tensions over grazing lands and water in pastoral regions create violence. Climate-driven resource scarcity intensifies conflicts across Ethiopia.

Ethiopia's climate future requires drought resilience, agricultural transformation, reforestation, water management, and conflict resolution. The country demonstrates how climate change creates humanitarian disasters in populous, agriculture-dependent nations with weak governance. Without transformative adaptation and international support, Ethiopia faces recurring climate-driven famines affecting tens of millions.`
  },
  {
    name: 'Falkland Islands',
    lat: -51.7963,
    lng: -59.5236,
    summary: `Falkland Islands confront South Atlantic climate change with warming seas, changing ecosystems, and extreme weather. This British territory of 3,400 faces temperature increases affecting fisheries, wildlife, and maritime conditions.`
  },
  {
    name: 'Fiji',
    lat: -17.7134,
    lng: 178.0650,
    summary: `Fiji faces Pacific island climate catastrophe with sea level rise, cyclones, coral bleaching, and ocean acidification. 900,000 Fijians on vulnerable islands confront existential threats requiring international support and potential relocation.`
  },
  {
    name: 'Finland',
    lat: 61.9241,
    lng: 25.7482,
    summary: `Finland confronts Arctic and boreal climate transformation as Nordic temperatures rise faster than the global average. This nation of 5.5 million has experienced warming of 2°C since 1900—double the global rate—with accelerating impacts on forests, winters, and ecosystems. Finland leads on renewable energy and climate policy while managing profound environmental changes.

Warming is transforming Finland's climate and ecology. Winters are shorter, milder, and less snowy. Snow cover duration has decreased several weeks since 1960. Lakes freeze later and thaw earlier. Growing seasons extend. These changes disrupt ecosystems adapted to harsh continental climate. Arctic and boreal species face range shifts or local extinction.

Forests covering 75% of Finland face multiple climate stresses. Warmer temperatures and changing precipitation increase wildfire risk—historically rare in wet boreal forests. Bark beetle outbreaks damage spruce. Wind storms cause more damage as soils soften from reduced frost. Forest composition is shifting as southern species expand north. Finland's massive forestry industry must adapt management to new conditions.

Agriculture faces mixed impacts. Longer growing seasons and warmer temperatures could benefit Finnish farming of barley, oats, and dairy. However, increased rainfall variability, extreme weather, and new pests create challenges. Waterlogging from intense rainfall damages crops. Late spring frosts can devastate early growth.

Renewable energy leadership defines Finland's climate response. The country generates 40% of electricity from renewables—primarily bioenergy from forestry waste, hydropower, and growing wind capacity. Nuclear provides another 35% from existing plants and new reactors under construction. Finland targets carbon neutrality by 2035—among the world's most ambitious goals. Peatland bioenergy and forest biomass contribute significantly but face sustainability questions.

Baltic Sea changes affect Finland's extensive coastline. Sea temperatures are rising, affecting marine ecosystems and fisheries. Reduced sea ice cover in the Gulf of Bothnia impacts coastal climate and ecology. Eutrophication from agricultural runoff creates algal blooms exacerbated by warming. Sea level rise threatens low-lying coastal areas.

Urban areas including Helsinki face changing climate risks. Flash floods from intense rainfall overwhelm drainage. Heatwaves—historically rare—are becoming more frequent. Urban planning must adapt to new climate realities.

Finland's climate future involves managing boreal transformation, adapting forestry, protecting biodiversity, and maintaining renewable energy leadership. The country demonstrates Nordic climate action—ambitious targets, comprehensive policy, and public support. However, even leaders face unavoidable physical impacts from Arctic warming.`
  },
  {
    name: 'France',
    lat: 46.2276,
    lng: 2.2137,
    summary: `France confronts intensifying European climate impacts across diverse geography from Mediterranean coast to Alpine peaks. This nation of 67 million has experienced temperature increases of 1.7°C since 1900, with projections showing 2-4°C by 2100. Extreme heat, droughts, wildfires, and Alpine glacier retreat threaten agriculture, infrastructure, and livelihoods while France pursues nuclear-powered decarbonization.

Extreme heat is France's deadliest climate impact. The 2003 heatwave killed 15,000 people, primarily elderly in cities lacking air conditioning. The 2019 heatwave set records exceeding 45°C—temperatures unprecedented in French history. Summers regularly exceed 40°C across southern France. Urban heat islands make Paris dangerously hot. Heat stress threatens agriculture, infrastructure, and public health. Climate projections show southern France approaching Mediterranean extremes.

Droughts are intensifying and lengthening. The 2022 drought was the worst in modern history—rivers dried up, nuclear plants reduced output from cooling water scarcity, and agriculture suffered devastating losses. Groundwater levels dropped critically. Water restrictions affected millions. The Loire, Garonne, and Rhône rivers reached historically low flows. Climate change is creating structural water scarcity in previously water-rich France.

Wildfires are escalating from rare events to annual disasters. The 2022 Gironde fires burned 30,000 hectares—unprecedented scale for France. Southern forests face Mediterranean fire risk previously unknown. Climate change is creating longer fire seasons, more extreme fire weather, and larger blazes. French firefighting resources are overwhelmed.

Alpine glaciers are disappearing rapidly. Mont Blanc and other iconic peaks are losing ice mass accelerating. The Mer de Glace glacier has retreated dramatically. Ski resorts below 1,500 meters face existential threats as snow cover declines and seasons shorten. Winter tourism—economically critical for Alpine regions—faces climate-driven collapse. Glacier loss affects summer river flows that feed Rhine and Rhône.

Agriculture faces multiple climate stresses. French wine production—culturally and economically important—confronts heat, drought, and changing terroir. Burgundy and Champagne experience harvest dates weeks earlier than historical norms. Wheat yields fluctuate wildly from heat and drought. Corn production requires increasing irrigation. The 2022 drought caused €10 billion in agricultural losses.

Nuclear energy dominates France's electricity—70% from 56 reactors provides low-carbon baseload. However, climate change threatens nuclear operations. The 2022 drought and heat forced output reductions—cooling water temperatures exceeded regulatory limits. Aging reactors face costly climate adaptation. France plans new reactors while maintaining nuclear reliance, creating long-term climate-energy interdependence.

Renewable energy deployment lags EU peers. France generates only 20% of electricity from renewables—primarily hydropower vulnerable to drought. Wind and solar development faces political opposition and permitting challenges. President Macron targets massive renewable expansion, but implementation is slow.

Coastal areas face sea level rise and erosion. Atlantic and Mediterranean coasts experience flooding and beach loss. Storm surges threaten low-lying areas. The Camargue wetlands face saltwater intrusion.

France's climate future requires managing extreme heat, water scarcity, wildfire, and Alpine changes while accelerating renewable deployment beyond nuclear. The country demonstrates that even wealthy, nuclear-powered nations face profound climate challenges requiring expensive adaptation alongside mitigation.`
  },
  {
    name: 'French Southern and Antarctic Lands',
    lat: -49.2804,
    lng: 69.3486,
    summary: `French Southern Territories confront Antarctic climate transformation with warming oceans, ice changes, and ecosystem shifts. Research stations document accelerating Southern Ocean warming affecting global climate.`
  },
  {
    name: 'Gabon',
    lat: -0.8037,
    lng: 11.6094,
    summary: `Gabon confronts Central African rainforest threats and coastal vulnerability. Deforestation pressures despite 88% forest cover. Oil dependence drives emissions. Climate change affects rainfall patterns for 2.3 million while biodiversity faces threats.`
  },
  {
    name: 'Gambia',
    lat: 13.4432,
    lng: -15.3101,
    summary: `Gambia faces West African coastal vulnerability with sea level rise threatening 2.5 million. River Gambia saltwater intrusion, flooding, droughts, and agricultural stress create compounding challenges for narrow coastal nation.`
  },
  {
    name: 'Georgia',
    lat: 42.3154,
    lng: 43.3569,
    summary: `Georgia confronts Caucasus climate vulnerability with glacier retreat, extreme weather, agricultural stress, and water scarcity. 3.7 million face temperature increases affecting wine production, hydropower, and mountain ecosystems.`
  },
  {
    name: 'Germany',
    lat: 51.1657,
    lng: 10.4515,
    summary: `Germany confronts Central European climate vulnerability as the EU's economic powerhouse transitioning from coal and nuclear to renewables. This nation of 84 million has experienced temperature increases of 1.6°C since 1881, with projections showing 2-4°C by 2100. Extreme weather, floods, droughts, and forest dieback threaten infrastructure and economy while the Energiewende energy transition reshapes the power sector.

Extreme weather is intensifying with devastating consequences. The July 2021 Ahr Valley floods killed 180 people and caused €30 billion in damage—Germany's deadliest natural disaster in decades. Extreme rainfall overwhelmed rivers, destroying entire towns. Climate change is increasing intense precipitation events. Conversely, droughts in 2018, 2019, and 2022 devastated agriculture and reduced Rhine River levels, disrupting barge transport critical for industry.

Forests covering 32% of Germany face catastrophic dieback. Drought-stressed spruce and pine became vulnerable to bark beetle outbreaks, killing hundreds of millions of trees since 2018. Over 500,000 hectares of forest died—unprecedented ecological and economic disaster. Forests must transform to drought-resistant species, but transition takes decades. The timber industry faces profound disruption.

The Rhine River—Europe's most important waterway—faces climate threats. Low water levels during droughts disrupt barge transport of coal, chemicals, and goods. Rhine shipping is economically critical—low levels cost billions in economic activity. Climate change threatens reliable navigation, forcing adaptation in river management and vessel design.

The Energiewende (energy transition) defines Germany's climate response. The country is simultaneously phasing out nuclear (completed 2023) and coal (targeted 2030, though extended to 2038) while deploying massive renewable capacity. Germany has 140 GW of renewable electricity—primarily wind and solar—providing 50% of generation. However, closing nuclear and coal while demand grows requires natural gas for reliability, creating dependence on imports and emissions challenges.

Agriculture faces drought, heat, and extreme weather. German farming produces grains, potatoes, dairy, and pork, but climate change creates challenges. The 2018 drought caused €1.4 billion in losses. Heatwaves stress livestock. Intense rainfall damages crops and causes soil erosion. Farmers lack widespread irrigation, making agriculture vulnerable to rainfall variability.

Urban areas including Berlin, Hamburg, and Munich face heat stress. Summers regularly exceed 35-38°C. Urban heat islands create dangerous conditions for elderly populations. Flash floods from intense rainfall overwhelm drainage. German cities invest heavily in climate adaptation—green infrastructure, flood protection, heat warning systems.

Germany's per capita emissions of 8.4 tons CO2 must decline rapidly to meet targets. The country aims for climate neutrality by 2045. However, closing nuclear complicated decarbonization—Germany increased coal burning 2021-2023 during energy crisis. The challenge is replacing dispatchable nuclear and coal with variable renewables while maintaining grid stability.

Germany's climate future requires completing energy transition, managing forest transformation, adapting water infrastructure, and protecting against extreme weather. The country demonstrates that even wealthy industrial nations face profound climate challenges and difficult energy transition tradeoffs. Germany's success or failure will influence global climate action.`
  },
  {
    name: 'Ghana',
    lat: 7.9465,
    lng: -1.0232,
    summary: `Ghana faces West African climate impacts with droughts, flooding, deforestation, and coastal erosion. 32 million depend on climate-sensitive agriculture and hydropower vulnerable to rainfall variability. Gold mining and cocoa production face climate stress.`
  },
  {
    name: 'Greece',
    lat: 39.0742,
    lng: 21.8243,
    summary: `Greece confronts Mediterranean climate extremes with devastating consequences. This nation of 10.5 million has experienced temperature increases of 1.5°C since 1960, with projections showing 3-5°C by 2100—among Europe's highest. Extreme heat, severe droughts, catastrophic wildfires, and tourism threats define Greece's climate crisis.

Wildfires have become annual catastrophes. The 2021 fires burned 130,000 hectares, destroying forests, homes, and lives—the worst in Greek history. The 2023 fires in northeastern Greece and Rhodes forced mass evacuations and devastated tourism. Climate change is creating longer fire seasons, more extreme fire weather, and larger blazes. Pine forests and maquis shrubland across Greek islands and mainland are tinderboxes. Fire suppression resources are overwhelmed.

Extreme heat is intensifying to dangerous levels. Temperatures regularly exceed 42°C across Greece, with Athens experiencing 45°C during heatwaves. The 2021 heatwave lasted weeks, creating deadly conditions. Heat stress threatens elderly populations, outdoor workers, and tourists. Urban heat islands make Athens one of Europe's hottest capitals. Climate projections show southern Greece approaching conditions incompatible with outdoor summer activity.

Droughts are severe and lengthening. Water scarcity affects islands including Crete, Rhodes, and the Cyclades during summer tourism peaks, creating impossible supply-demand mismatches. Agriculture in Thessaly and Peloponnese suffers from water shortages. Groundwater is overexploited. Rivers including the Axios dry up during summer. The 2022-2023 drought was among the worst in decades.

Tourism—20% of GDP and employing millions—faces climate threats. Extreme heat makes summer uncomfortable. Wildfires damage destinations and deter visitors. Beach erosion from sea level rise threatens coastal resorts. However, tourism seasons may extend into shoulder months as northern Europe becomes wetter. Greece must adapt tourism to new climate realities.

The Mediterranean Sea is warming rapidly. Waters around Greece have increased 1.5°C since 1980—faster than most global oceans. This affects marine ecosystems, shifts fish species, and contributes to jellyfish blooms disrupting tourism. Sea level rise projected at 50-70 cm by 2100 threatens coastal infrastructure including islands and archaeological sites.

Agriculture faces impossible conditions. Olive cultivation—culturally and economically important—suffers from heat stress and drought. Greek olive oil production fluctuates wildly between good and bad years. Wine production faces similar challenges. Wheat and corn cultivation requires increasing irrigation in water-scarce regions.

Renewable energy deployment is advancing but from a low base. Greece generates 40% of electricity from renewables—primarily solar, wind, and hydro. The country has excellent solar potential and deploys rooftop and utility-scale installations. Wind farms on islands and mainland provide growing capacity. However, lignite (brown coal) still generates 15% of electricity despite phase-out plans. Greece targets 70% renewable electricity by 2030.

Ancient archaeological sites face climate threats. The Acropolis, Delphi, and Olympia experience extreme heat threatening visitors and damaging marble through thermal stress. Sea level rise threatens coastal sites.

Greece's climate future may involve partial abandonment of fire-prone forests and water-scarce islands. Adaptation requires wildfire resilience, water management innovation, tourism transformation, and renewable energy acceleration. Greece epitomizes Mediterranean climate crisis—a beautiful country facing potential uninhabitability during summer months without aggressive global emissions cuts.`
  },
  {
    name: 'Greenland',
    lat: 71.7069,
    lng: -42.6043,
    summary: `Greenland confronts Arctic catastrophe with ice sheet melting accelerating. 56,000 Greenlanders experience dramatic warming with temperatures rising 3°C since 1990. Ice sheet loss contributes significantly to global sea level rise threatening world's coasts.`
  },
  {
    name: 'Guatemala',
    lat: 15.7835,
    lng: -90.2308,
    summary: `Guatemala confronts Central American climate vulnerability as a mountainous nation facing hurricanes, droughts, landslides, and agricultural collapse. This country of 18 million experiences temperature increases of 1°C since 1960, with extreme weather threatening coffee production, subsistence farming, and indigenous communities. Climate-driven migration intensifies as rural livelihoods become unviable.

Extreme weather alternates between catastrophic hurricanes and severe droughts. Tropical storms including Hurricanes Stan (2005), Eta and Iota (2020) caused massive flooding, landslides, and deaths. Guatemala's mountainous terrain amplifies rainfall disasters—landslides destroy entire villages. Conversely, the "Dry Corridor" affecting eastern Guatemala experiences recurring droughts devastating subsistence farming. The 2014-2016 and 2018 droughts caused food insecurity for millions.

Coffee production—Guatemala's signature export—faces climate crisis. Arabica coffee requires specific temperature ranges and rainfall patterns now disrupted by climate change. Heat stress, erratic rainfall, and coffee rust disease spreading to higher elevations devastate production. Small holder farmers lack resources to adapt. Coffee region livelihoods are collapsing, driving migration.

Subsistence agriculture employs 35% of Guatemalans and faces impossible climate conditions. Indigenous communities in highlands grow maize, beans, and vegetables on rain-fed plots. Droughts destroy crops creating food crises. Intense rainfall triggers landslides washing away farms. Farmers cannot predict when to plant as seasonal patterns break down.

Deforestation accelerates climate vulnerability. Forest cover declined from 50% in 1960 to 33% currently. Clearing for agriculture, especially cattle ranching and palm oil, eliminates carbon sinks and destabilizes mountain slopes. Deforestation worsens flooding and landslides during extreme rainfall.

Climate-driven migration is transforming Guatemala. Droughts in the Dry Corridor destroying livelihoods push rural populations toward cities or international migration to the U.S. Climate change is a significant driver alongside gang violence and poverty. Migration becomes survival strategy when farming becomes impossible.

Water resources face quantity challenges despite tropical rainfall. Deforestation reduces water retention. Rivers experience extreme variability—flooding during storms, reduced flows during droughts. Guatemala City faces water scarcity during dry seasons.

Energy infrastructure is diversifying. Guatemala generates 45% of electricity from hydropower subject to climate variability, 25% from renewables (primarily solar and geothermal), and 30% from fossil fuels. The country has good geothermal potential and growing solar deployment.

Guatemala's climate future requires agricultural transformation, reforestation, water management, and addressing migration drivers. However, inequality, corruption, and weak governance prevent effective climate action. Indigenous communities face climate impacts with minimal adaptive capacity. Guatemala demonstrates how climate change creates humanitarian crises in vulnerable nations.`
  },
  {
    name: 'Guinea',
    lat: 9.9456,
    lng: -9.6966,
    summary: `Guinea faces West African climate vulnerability with changing rainfall, flooding, deforestation, and agricultural threats. 13 million depend on rain-fed agriculture. Mining sector vulnerable to extreme weather while energy poverty limits adaptation.`
  },
  {
    name: 'Guinea-Bissau',
    lat: 11.8037,
    lng: -15.1804,
    summary: `Guinea-Bissau confronts coastal West African climate crisis. Sea level rise threatens 2 million in low-lying areas. Cashew agriculture vulnerable to climate variability. Deforestation and weak governance limit adaptation capacity.`
  },
  {
    name: 'Guyana',
    lat: 4.8604,
    lng: -58.9302,
    summary: `Guyana faces coastal flooding, deforestation, and rainfall variability. 800,000 live on vulnerable coast below sea level. Oil discovery creates emissions dilemma. Rainforest covering 85% of country faces logging and mining pressures.`
  },
  {
    name: 'Haiti',
    lat: 18.9712,
    lng: -72.2852,
    summary: `Haiti confronts Caribbean climate catastrophe as the Western Hemisphere's poorest nation. This country of 12 million sharing Hispaniola with the Dominican Republic faces temperature increases of 1°C since 1960, with hurricanes, floods, droughts, and deforestation creating compounding disasters. Extreme poverty, political collapse, and environmental degradation make Haiti extraordinarily climate-vulnerable.

Hurricanes devastate Haiti with catastrophic regularity. Category 4-5 storms including Hurricane Matthew (2016) and Earthquake-Tropical Storm combo disasters cause mass destruction. Haiti's deforested mountains amplify hurricane impacts—landslides, flash floods, and mudslides kill thousands. Infrastructure is minimal and collapses completely during storms. Recovery is essentially impossible given state failure and poverty.

Deforestation is catastrophic—forest cover declined from 60% in 1923 to under 2% currently, making Haiti nearly treeless. Desperate poverty drives charcoal production for cooking fuel, eliminating remaining trees. Deforestation causes devastating erosion, landslides during rainfall, agricultural land degradation, and eliminated carbon sinks. Haiti's mountains are bare dirt that washes away during storms.

Droughts and food insecurity are chronic. Haiti's agriculture is devastated by climate variability and degraded soils. Subsistence farming faces impossible conditions—eroded land, unreliable rainfall, hurricanes destroying crops. Food insecurity affects 45% of Haitians. Chronic malnutrition creates humanitarian catastrophe.

State collapse compounds climate vulnerability absolutely. Haiti has no functioning government following the 2021 president's assassination and gang takeover of territory. There is no climate policy, no disaster response capacity, no environmental protection, no development planning. International aid provides minimal survival support but cannot build resilience amid chaos.

Water resources are critically scarce and contaminated. Most Haitians lack access to safe water or sanitation. Rivers are polluted. Deforestation eliminates watersheds. Droughts create water crises. Cholera outbreaks follow hurricanes as contaminated water spreads disease.

Energy poverty is nearly absolute. Only 40% have electricity access. Biomass provides 70% of energy—charcoal and firewood—driving further deforestation in a vicious cycle. Haiti lacks resources for renewable energy despite good solar potential.

Sea level rise threatens coastal areas. Port-au-Prince and coastal cities face flooding and storm surge. Haiti lacks resources for coastal protection.

Haiti's climate future is catastrophic. The country faces potential complete state failure and humanitarian disaster worsened by climate change. Haiti epitomizes how poverty, governance collapse, and environmental destruction create climate vulnerability so extreme that survival becomes uncertain. Without massive international intervention—development assistance, governance support, reforestation—Haiti faces unthinkable suffering.`
  },
  {
    name: 'Honduras',
    lat: 15.2000,
    lng: -86.2419,
    summary: `Honduras confronts Central American climate crisis as one of the world's most climate-vulnerable nations. This country of 10 million experiences temperature increases of 1°C since 1960, with hurricanes, droughts, floods, and deforestation threatening agriculture, livelihoods, and driving mass migration. The "Dry Corridor" and hurricane exposure create compounding disasters.

Hurricanes devastate Honduras repeatedly. Hurricane Mitch (1998) killed 7,000+ people and destroyed 70% of crops—the worst natural disaster in Honduran history. Hurricanes Eta and Iota (2020) struck within weeks, causing catastrophic flooding and landslides affecting millions. Climate change is intensifying hurricanes while Honduras lacks resources for protection or recovery.

The "Dry Corridor" affecting southern Honduras experiences severe recurring droughts. The 2014-2016 and 2018 droughts devastated subsistence farming, causing food insecurity for hundreds of thousands. Maize and bean production collapsed. Smallholder farmers face impossible conditions as rainfall patterns break down.

Coffee production—a major export employing 100,000+—faces climate crisis. Arabica coffee requires specific conditions now disrupted. Heat stress, erratic rainfall, and coffee rust disease devastate production. Coffee farming at lower elevations is becoming unviable. Livelihoods are collapsing.

Deforestation accelerates climate vulnerability. Forest cover declined from 60% in 1990 to 42% currently. Clearing for cattle ranching, agriculture, and palm oil eliminates carbon sinks and destabilizes slopes. Deforestation worsens flooding and landslides during hurricanes.

Climate-driven migration is transforming Honduras. Droughts and hurricanes destroying livelihoods drive migration to cities or the U.S. The 2018-2019 migrant caravans included many Hondurans fleeing climate and gang violence. Climate change is creating displacement at massive scale.

Water resources face challenges. Rivers flood catastrophically during hurricanes then run low during droughts. Deforestation reduces water retention. Honduras City and other urban areas face water scarcity during dry seasons.

Energy infrastructure depends on climate-vulnerable hydropower (40% of electricity) and fossil fuels (50%). Honduras has deployed some wind and solar but remains heavily dependent on imports and hydro subject to rainfall variability.

Honduras ranks among the world's most climate-vulnerable nations—the Global Climate Risk Index consistently places Honduras in the top 5. The country demonstrates how poverty, environmental degradation, and climate change create compounding disasters. Without transformative support, Honduras faces potential state failure and mass climate migration.`
  },
  {
    name: 'Hungary',
    lat: 47.1625,
    lng: 19.5033,
    summary: `Hungary confronts Central European climate vulnerability as a landlocked nation facing extreme heat and drought. This country of 9.6 million has experienced temperature increases of 1.5°C since 1900, with projections showing 2-4°C by 2100. Droughts, heatwaves, and water scarcity threaten agriculture while energy transition from Russian gas creates challenges.

Extreme heat and drought are Hungary's primary climate impacts. Summers regularly exceed 35-38°C, with heatwaves intensifying. The 2018, 2019, and 2022 droughts devastated agriculture and reduced Danube River levels. Hungary's continental climate means limited rainfall—climate change is creating structural water scarcity in a country already semi-arid.

Agriculture faces severe drought stress. Hungarian farming produces wheat, corn, sunflowers, and wine, but climate change threatens production. The 2022 drought reduced corn yields 40%. Irrigation infrastructure is limited—most farming is rain-fed. The Great Hungarian Plain faces increasing desertification risk. Wine production in Tokaj and other regions confronts heat stress and changing conditions.

Water resources are increasingly stressed. The Danube and Tisza rivers provide water but face reduced flows during droughts. Lake Balaton—Central Europe's largest lake and major tourism destination—experiences declining water levels and warming temperatures affecting ecosystems. Groundwater extraction exceeds recharge in some regions.

Energy infrastructure faces transformation challenges. Hungary historically depended on Russian gas and Soviet-built nuclear reactors. The Paks Nuclear Plant provides 50% of electricity. The country is reducing Russian gas dependence following Ukraine war but faces difficult transitions. Renewable deployment is slow—Hungary has some solar and wind but lags EU peers. The government's nationalist politics complicate EU climate cooperation.

Extreme weather events include flash floods despite overall drying trend. Intense rainfall overwhelms drainage, causing urban flooding. The 2006 and 2010 Danube floods caused major damage. Climate change creates paradoxical hydrology—overall drier with occasional extreme precipitation.

Hungary's climate future requires drought adaptation, water management innovation, agricultural transformation, and accelerated renewable deployment. However, the Orbán government's climate skepticism and EU conflicts impede action. Hungary demonstrates how political dysfunction prevents climate response even when physical impacts are obvious.`
  },
  {
    name: 'Iceland',
    lat: 64.9631,
    lng: -19.0208,
    summary: `Iceland confronts Arctic climate transformation despite being a renewable energy leader. This island nation of 380,000 has experienced temperature increases of 1.3°C since 1900—faster than the global average—with accelerating glacier retreat, changing ecosystems, and extreme weather. Iceland generates 100% renewable electricity yet faces profound physical climate impacts.

Glacier retreat is dramatic and accelerating. Iceland's ice caps covering 11% of the island are melting rapidly. Vatnajökull, Langjökull, and Hofsjökull glaciers are losing mass. Small glaciers have disappeared entirely. Glaciers retreated 750 square kilometers from 1890-2010, with acceleration in recent decades. This affects water resources, tourism, and ecosystems while contributing to sea level rise.

Warming is transforming Iceland's climate and ecology. Winters are milder, summers warmer. Snow cover is declining. Growing seasons extend. These changes allow new species to establish while stressing Arctic-adapted ecosystems. Iceland's unique biodiversity faces disruption.

Extreme weather is intensifying. More intense storms affect this North Atlantic island. Rainfall is increasing—Iceland already wet is becoming wetter. Glacial outburst floods (jökulhlaups) from subglacial volcanic eruptions create devastating floods. Climate change may influence volcanic and seismic activity through ice load changes, though this remains uncertain.

Renewable energy provides Iceland extraordinary advantages. The country generates 100% of electricity from geothermal (25%) and hydropower (75%). Geothermal heats 90% of homes. Iceland has among the world's lowest per capita emissions despite high energy use—abundant renewables enable energy-intensive industries like aluminum smelting. However, these industries create emissions and environmental concerns.

Fisheries—economically critical—face ocean changes. Atlantic waters around Iceland are warming, affecting cod, haddock, and other species. Fish stocks shift distribution, creating management challenges. Iceland's fishing industry must adapt to changing marine ecosystems.

Tourism—growing rapidly—faces climate impacts. Glaciers are major attractions, but they're disappearing. Some tourism businesses depend on ice caves and glacier activities becoming less viable. However, milder weather may make Iceland more accessible and comfortable for visitors.

Iceland's coastal areas face modest sea level rise—projections show 30-50 cm by 2100—threatening low-lying settlements and infrastructure.

Iceland's climate future involves managing glacier loss, adapting fisheries, protecting ecosystems, and maintaining renewable energy leadership. The country demonstrates that even 100% renewable electricity cannot protect against physical climate impacts. Iceland is a climate frontline where Arctic warming creates visible, measurable transformation.`
  },
  {
    name: 'India',
    lat: 20.5937,
    lng: 78.9629,
    summary: `India confronts climate catastrophe at continental scale. This nation of 1.4 billion has experienced temperature increases of 0.7°C since 1901, with accelerating warming, intensifying monsoons, deadly heatwaves, glacier retreat, and sea level rise threatening hundreds of millions. India's massive population and agriculture dependence make climate impacts potentially civilization-threatening while coal dependence drives emissions.

Extreme heat is becoming lethal across India. Heatwaves exceeding 45-50°C kill thousands annually. The 2015 heatwave killed 2,500. Northwest India experiences wet-bulb temperatures approaching human physiological limits. Climate projections show vast areas becoming too hot for outdoor work during summer. Delhi, Mumbai, and other megacities face dangerous urban heat islands. Agricultural workers, construction laborers, and outdoor workers face impossible conditions.

Monsoon variability threatens India's agricultural foundation. The country depends on monsoon rainfall for 60% of agriculture—rice, wheat, pulses. Climate change is making monsoons more erratic—delayed onset, mid-season breaks, extreme rainfall events alternating with dry spells. Flash floods devastate urban areas—Mumbai, Chennai, Kolkata experience catastrophic flooding. Simultaneously, droughts affect 42% of India regularly. The 2019 monsoon failures created water crises affecting 600 million people.

Himalayan glacier retreat threatens water security for hundreds of millions. India's glaciers are melting—the Gangotri glacier feeding the Ganges retreats 22 meters annually. Glaciers provide dry-season flows for the Ganges, Indus, and Brahmaputra river systems supporting over 1 billion people. Glacier disappearance will create catastrophic water shortfalls. Northern India faces potential water bankruptcy.

Agriculture employs 45% of Indians and is extraordinarily climate-vulnerable. Heat stress reduces wheat and rice yields. Droughts devastate crops. Floods destroy harvests. The 2022 heatwave reduced wheat production 5%, triggering export bans. Farmers commit suicide at alarming rates—over 10,000 annually—driven partly by climate-related crop failures and debt.

Coastal areas face sea level rise and cyclone intensification. The Bay of Bengal and Arabian Sea coasts have 200 million people vulnerable to inundation. Projected sea level rise of 30-60 cm by 2100 will displace tens of millions. Cyclones are intensifying—Cyclone Amphan (2020) caused $14 billion damage. The Sundarbans, Ganges-Brahmaputra delta, and Mumbai face existential threats.

Coal dominates India's energy and economy. The country burns 1 billion tons of coal annually—70% of electricity comes from coal. India is the world's second-largest coal consumer and emitter after China. Per capita emissions of 1.9 tons are low but total emissions are massive and growing. India argues it must burn coal for development, creating global climate tensions.

Renewable energy deployment is surging. India has 180 GW of renewable capacity—primarily solar and wind. The government targets 500 GW by 2030. Solar potential is enormous—abundant sunshine across most of India. However, renewables remain secondary to coal. India faces impossible choices between development and emissions.

India's climate future may involve mass migration from heat-stressed and flooded regions, agricultural collapse, water scarcity, and hundreds of millions facing unlivable conditions. The country requires transformative adaptation—heat-resilient agriculture, massive water infrastructure, coastal protection, renewable energy acceleration—on a scale never attempted. India's climate trajectory determines global outcomes—if India burns coal for development, catastrophic warming is inevitable. If India leapfrogs to renewables, humanity has hope.`
  },
  {
    name: 'Indonesia',
    lat: -0.7893,
    lng: 113.9213,
    summary: `Indonesia confronts archipelagic climate catastrophe as the world's largest island nation. This country of 275 million experiences temperature increases of 0.9°C since 1960, with rising seas threatening thousands of islands, intensifying typhoons, deforestation destroying rainforests, and agricultural vulnerability. Coal dependence and massive peat fires drive emissions while millions face displacement from sinking Jakarta and coastal inundation.

Sea level rise threatens Indonesia existentially. With 17,000 islands and 95 million people living in coastal zones, projected rise of 30-60 cm by 2100 will inundate vast areas and displace millions. Jakarta is sinking 25 cm annually from groundwater extraction combined with sea level rise—the capital will be partially underwater by 2050. The government plans to relocate the capital to Borneo at enormous cost. Thousands of small islands face complete submersion.

Deforestation and peat fires create massive emissions. Indonesia has cleared vast rainforest on Sumatra, Kalimantan, and Papua for palm oil plantations. Deforestation rates rank among the world's highest. Peat fires—often set deliberately—release enormous carbon and create toxic haze affecting Southeast Asia. The 2015 fires emitted more CO2 than Germany's annual total, created health crisis, and demonstrated Indonesia's climate impact.

Extreme weather is intensifying. Typhoons, flooding, and landslides devastate populated Java, Sumatra, and other islands. Flash floods kill hundreds annually. The 2020 Jakarta floods displaced 60,000. Climate change increases extreme rainfall events overwhelming drainage in crowded urban areas.

Agriculture employs 30% of Indonesians and faces multiple climate stresses. Rice cultivation—the staple crop—suffers from droughts, floods, and sea level rise causing saltwater intrusion. Palm oil plantations drive deforestation. Coffee and cacao production face heat stress and changing rainfall.

Coal dominates Indonesian energy and emissions. The country burns 150 million tons of coal annually for electricity—60% of generation. Indonesia is a major coal exporter. Per capita emissions of 2.3 tons are moderate but total emissions rank among world's highest. The government plans new coal plants despite renewable potential.

Renewable energy potential is vast but underdeveloped. Indonesia has significant geothermal resources (world's 2nd largest reserves), excellent solar potential, and hydropower sites. Yet renewables provide only 12% of electricity. Deployment is slow due to coal interests and policy incoherence.

Indonesia's climate future involves managing Jakarta's abandonment, protecting remaining rainforests, halting peat fires, coastal protection or migration for millions, and transitioning from coal. The country demonstrates how island nations face existential sea level rise threats while contributing significantly to emissions. Indonesia's choices—coal or renewables, deforestation or protection—have global consequences.`
  },
  {
    name: 'Iran',
    lat: 32.4279,
    lng: 53.6880,
    summary: `Iran confronts Middle Eastern climate extremes as temperatures rise faster than the global average. This nation of 88 million faces temperature increases of 1.5°C since 1960, with projections showing 2-4°C by 2100. Extreme heat, severe droughts, water scarcity, and dust storms threaten agriculture and cities while sanctions limit adaptation capacity.

Extreme heat is intensifying to dangerous levels. Temperatures regularly exceed 50°C in southwestern Iran during summer. Ahvaz and Basra experience among Earth's highest temperatures. Heat stress threatens outdoor workers and creates dangerous urban conditions. Climate projections show Iran experiencing conditions approaching human physiological limits.

Water scarcity is Iran's existential crisis. The country is severely water-stressed with per capita renewable freshwater declining dramatically. Groundwater extraction far exceeds recharge—aquifers are depleting. The Caspian Sea and Lake Urmia are shrinking. Rivers including the Zayanderud periodically run dry. The 2018 and 2021 droughts created water crises affecting millions. Protests over water shortages have turned violent.

Dust storms are increasing in frequency and severity. Dried lake beds and degraded lands create massive dust storms affecting cities including Tehran and Isfahan. Regional dust from Iraq and Syria compounds local generation. These storms create health crises and economic disruption.

Agriculture faces impossible climate conditions. Iran's farming depends on irrigation from depleting water sources. Wheat, rice, and pistachio cultivation suffer from heat and drought. The 2021 drought devastated crops. Food security is threatened for a large population.

Energy infrastructure depends on fossil fuels. Iran has vast oil and gas reserves—the country is a major petroleum producer despite sanctions. Fossil fuels provide 95% of electricity. Iran has excellent solar potential and some wind resources but renewable deployment is minimal. Sanctions limit technology access for renewable energy.

Tehran's 9 million residents face compounding vulnerabilities—extreme heat, air pollution, water scarcity, and earthquake risk. The capital experiences dangerous heat waves and toxic air quality from vehicle emissions.

Iran's climate future requires massive water management, agricultural transformation, and renewable energy deployment. However, U.S. sanctions, political isolation, governance challenges, and oil dependence prevent effective climate action. Iran demonstrates how geopolitical tensions compound climate vulnerability in water-scarce regions.`
  },
  {
    name: 'Iraq',
    lat: 33.2232,
    lng: 43.6793,
    summary: `Iraq confronts catastrophic Middle Eastern climate crisis as one of the world's most vulnerable nations. This country of 42 million faces temperature increases of 2°C since 1960—double the global average—with projections showing 2-4°C more by 2050. Extreme heat, water scarcity, dust storms, and agricultural collapse threaten national survival while conflict prevents adaptation.

Iraq ranks among the world's five most climate-vulnerable countries. Temperatures regularly exceed 50°C—Basra recorded 53.9°C in 2016. Heat stress creates conditions approaching human un inhabitability. Baghdad experiences 50°C+ summers. Outdoor work becomes impossible during extreme heat. Climate projections show Iraq could face wet-bulb temperatures exceeding human survival thresholds.

Water scarcity threatens Iraq's existence. The Tigris and Euphrates rivers—civilization's cradle—are drying up. Turkey and Iran's upstream dams reduce flows while climate change decreases precipitation. The Mesopotamian Marshes are disappearing. Agriculture that fed humanity for millennia faces collapse. The 2021 drought was the worst in 40 years, affecting 12 million people.

Dust storms are intensifying and increasing in frequency. Dried rivers and degraded lands create massive dust storms affecting Baghdad and Basra monthly. These storms close airports, cause respiratory disease, and demonstrate environmental collapse. Regional desertification compounds local generation.

Agriculture is collapsing. Iraqi farming depends on Tigris-Euphrates irrigation, but water scarcity makes agriculture increasingly impossible. Wheat and rice cultivation declines. Livelihoods for millions are disappearing. Food security requires increasing imports.

Decades of war destroyed environmental governance. The U.S. invasion, ISIS insurgency, and ongoing instability prevent climate adaptation. Infrastructure is devastated. The government lacks capacity for water management or climate policy. Corruption diverts resources from adaptation.

Oil dominates Iraq's economy—petroleum provides 90% of revenues—but prevents diversification. Iraq is a major oil exporter yet has minimal renewable energy despite excellent solar potential.

Iraq's climate future may involve partial abandonment of uninhabitable regions and mass migration. The country demonstrates how climate change creates failed state scenarios in water-scarce conflict zones. Without transformative intervention, Iraq faces civilization-level collapse.`
  },
  {
    name: 'Ireland',
    lat: 53.4129,
    lng: -8.2439,
    summary: `Ireland confronts Atlantic climate vulnerability with intensifying rainfall, flooding, and storms. This island nation of 5.1 million has experienced temperature increases of 0.9°C since 1900, with warming accelerating. Extreme rainfall and flooding threaten agriculture and cities while Ireland pursues renewable energy expansion and climate leadership.

Rainfall is intensifying dramatically. Ireland's maritime climate means abundant precipitation, but climate change is making rainfall more extreme. Intense rainfall events cause severe flooding—the 2009 and 2015 floods caused hundreds of millions in damage. Rivers overflow regularly during winter storms. Flash flooding affects cities including Dublin and Cork. Climate change is increasing flood risk across Ireland.

Storm activity is intensifying. Atlantic storms bring damaging winds, coastal flooding, and infrastructure damage. Storm Ophelia (2017) was Ireland's most severe in decades. Climate change may be intensifying North Atlantic storms affecting Ireland.

Agriculture faces changing conditions. Irish farming produces dairy, beef, and crops benefiting from mild climate, but extreme rainfall creates challenges. Waterlogged soils prevent planting and harvesting. Winter flooding damages farms. Livestock farming faces disease pressures from wetter conditions.

Coastal erosion and sea level rise threaten low-lying areas. Dublin, Cork, and Galway face flooding from sea level rise projected at 40-60 cm by 2100 combined with storm surge. Coastal erosion damages infrastructure.

Renewable energy deployment is advancing rapidly. Ireland generates 40% of electricity from renewables—primarily wind from Atlantic coastal farms. The country has world-class wind resources and is deploying offshore wind. Ireland targets 80% renewable electricity by 2030. Natural gas provides baseload but will be replaced by renewables and imports.

Peat bogs covering 15% of Ireland are climate-vulnerable and controversial. Peat extraction for fuel releases stored carbon. The government is phasing out peat energy and restoring bogs for carbon sequestration.

Ireland's climate future involves managing increased flooding, coastal protection, agricultural adaptation, and accelerating renewable deployment. The country demonstrates Atlantic climate vulnerability while pursuing ambitious climate targets.`
  },
  {
    name: 'Israel',
    lat: 31.0461,
    lng: 34.8516,
    summary: `Israel confronts Middle Eastern climate extremes with intensifying heat, drought, and water scarcity. This nation of 9.5 million faces temperature increases of 1.4°C since 1950, with projections showing 2-4°C by 2100. Despite leading globally on water technology, climate change threatens Israel's desert existence while renewable deployment offers hope.

Extreme heat is intensifying. Temperatures regularly exceed 40°C during heat waves. Tel Aviv and coastal cities experience dangerous urban heat. The Negev Desert faces temperatures exceeding 45°C. Climate projections show conditions approaching human physiological limits during extreme events.

Water scarcity has driven Israeli innovation. The country is severely water-stressed but has achieved water security through desalination (providing 85% of drinking water), wastewater recycling (90% of wastewater is treated and reused), and drip irrigation technology. However, climate change is reducing Jordan River flows and Dead Sea levels. Rainfall is declining—climate models project 10-20% reductions. Droughts are more frequent and severe.

The Dead Sea is dying—water levels drop 1 meter annually due to reduced Jordan River flows and mineral extraction. This iconic landscape faces potential disappearance, creating environmental and tourism losses.

Agriculture in the Negev demonstrates desert farming innovation but faces limits. Israeli agriculture uses advanced irrigation and drought-resistant varieties, but heat and water scarcity constrain production. Food security requires imports.

Renewable energy deployment is accelerating. Israel generates 15% of electricity from renewables—primarily solar. The country has excellent solar resources and is deploying large-scale solar farms in the Negev. Natural gas from Mediterranean offshore fields provides 70% of electricity. Israel targets 30% renewable electricity by 2030.

Mediterranean coastal areas face sea level rise. Tel Aviv and Haifa confront flooding from projected 40-60 cm rise by 2100 combined with storm surge.

Israel's climate future involves maintaining water technology leadership, expanding solar energy, agricultural adaptation, and coastal protection. The country demonstrates how technology and innovation enable survival in harsh climates, but physical limits remain. Regional cooperation on water could reduce conflict.`
  },
  {
    name: 'Italy',
    lat: 41.8719,
    lng: 12.5674,
    summary: `Italy confronts Mediterranean climate extremes with devastating consequences. This nation of 59 million has experienced temperature increases of 1.5°C since 1900, with projections showing 2-4°C by 2100. Extreme heat, droughts, floods, Alpine glacier retreat, and sea level rise threaten agriculture, tourism, and cities while energy transition proceeds.

Extreme heat and drought are intensifying. Summer temperatures regularly exceed 40-42°C across Italy. The 2003 heatwave killed 20,000. Rome, Florence, and southern cities experience dangerous heat stress. The 2022 drought was the worst in 70 years—the Po River dried up, devastating agriculture and hydropower. Droughts affect water supplies for cities and farming.

Alpine glaciers are disappearing rapidly. Italy's Alpine glaciers have lost 60% of volume since 1850. The Marmolada glacier collapsed in 2022, killing 11. Glaciers are disappearing from mountains including Mont Blanc, retreating meters annually. This affects water resources, ski tourism, and ecosystems.

Flooding and extreme rainfall cause catastrophic damage. Venice experiences increasing flooding from acqua alta—high tides inundating the city. The MOSE flood barriers provide some protection but sea level rise threatens Venice's existence. Flash floods affect cities and rural areas. The 2023 Emilia-Romagna floods killed 15 and displaced thousands.

Agriculture faces multiple climate stresses. Italian wine, olive oil, wheat, and vegetables confront heat, drought, and extreme weather. The Po Valley—Italy's agricultural heartland—suffers from drought. Olive groves face heat stress. Wine production confronts changing terroir. The 2022 drought caused €6 billion agricultural losses.

Tourism—13% of GDP—faces climate threats. Extreme heat makes summer uncomfortable in cities. Beach erosion threatens coastal resorts. Ski resorts face declining snow. However, cultural tourism to Rome, Florence, and Venice remains resilient despite climate impacts on sites.

Renewable energy deployment is advancing. Italy generates 40% of electricity from renewables—hydro, solar, wind, and geothermal. Solar deployment is strong—rooftop and utility-scale installations. However, natural gas provides 45% for baseload. Italy targets 65% renewable electricity by 2030.

Italy's climate future requires water management, agricultural adaptation, coastal and Venice protection, wildfire prevention, and renewable acceleration. The country demonstrates Mediterranean climate crisis threatening culture, agriculture, and tourism.`
  },
  {
    name: 'Ivory Coast',
    lat: 7.5400,
    lng: -5.5471,
    summary: `Ivory Coast (Côte d'Ivoire) confronts West African climate vulnerability as the world's largest cocoa producer. This nation of 28 million faces temperature increases of 1°C since 1960, with changing rainfall patterns, deforestation, and coastal erosion threatening agriculture and livelihoods. Cocoa production—the economic foundation—faces climate-driven collapse.

Cocoa production faces existential climate threats. Ivory Coast produces 40% of global cocoa, but climate change is making cocoa cultivation increasingly difficult. Cocoa requires specific temperature and rainfall conditions now disrupted. Heat stress, erratic rainfall, and expanding pests threaten production. Cocoa-growing regions may become unsuitable within decades, devastating livelihoods for millions and threatening global chocolate supplies.

Rainfall patterns are changing. Ivory Coast has two rainy seasons critical for agriculture, but climate change creates erratic precipitation. Rainy seasons are shortening with more intense downpours, while dry seasons extend. This devastates rain-fed agriculture. Droughts and floods alternate, destroying crops.

Deforestation accelerates climate vulnerability. Forest cover declined from 16 million hectares in 1960 to 3 million currently—one of the world's worst rates. Cocoa expansion and logging eliminate rainforest. Deforestation drives emissions, degrades watersheds, and reduces rainfall—creating feedback loops threatening cocoa itself.

Coastal erosion is severe. Abidjan and coastal areas face accelerating erosion from sea level rise, sand mining, and coastal development. Beaches disappear at rates exceeding 10 meters annually in some locations. Coastal infrastructure and fishing communities face damage.

Agriculture employs 45% of Ivorians and is highly vulnerable. Beyond cocoa, coffee, cashews, and subsistence crops face changing rainfall. Food security is threatened for populations dependent on agriculture.

Energy infrastructure is diversifying. Ivory Coast generates 35% of electricity from hydropower, 60% from fossil fuels (gas), and 5% from renewables. The country has some solar potential but deployment is limited.

Ivory Coast's climate future requires cocoa adaptation or transition, halting deforestation, agricultural transformation, and coastal protection. However, economic dependence on cocoa and weak governance limit climate action. The country demonstrates how export commodity dependence creates climate vulnerability.`
  },
  {
    name: 'Jamaica',
    lat: 18.1096,
    lng: -77.2975,
    summary: `Jamaica confronts Caribbean climate catastrophe as a vulnerable island nation. This country of 2.8 million faces temperature increases of 0.9°C since 1960, with intensifying hurricanes, sea level rise, coral bleaching, and drought threatening tourism, agriculture, and livelihoods. Climate impacts compound economic challenges in a heavily indebted nation.

Hurricanes devastate Jamaica repeatedly. Category 4-5 storms including Hurricane Gilbert (1988) and Hurricane Ivan (2004) caused massive destruction. Climate change is intensifying hurricanes—warmer ocean temperatures fuel stronger storms. Jamaica's infrastructure and housing are vulnerable. Recovery costs billions the country cannot afford.

Sea level rise threatens coastal areas where most Jamaicans live. Projections showing 30-50 cm by 2100 will inundate low-lying areas, damage infrastructure, and cause saltwater intrusion. Kingston, Montego Bay, and coastal towns face flooding. Beach erosion threatens tourism resorts.

Tourism—25% of GDP—is highly climate-vulnerable. Beach destinations face hurricane damage, erosion, and coral bleaching. However, tourism remains resilient with rapid rebuilding. Extreme heat makes summer less comfortable but winter tourism persists.

Coral reefs are dying from ocean warming and acidification. The 2005 and 2023 Caribbean bleaching events devastated Jamaican reefs. Reef degradation threatens fisheries, tourism (diving/snorkeling), and coastal protection. Jamaica has marine protected areas but cannot stop global ocean warming.

Droughts are intensifying. Jamaica depends on rainfall for freshwater and agriculture, but climate change creates erratic precipitation. The 2014-2015 and 2019 droughts caused water shortages affecting Kingston and rural areas. Coffee and agricultural production suffer.

Deforestation compounds climate vulnerability. Forest cover declined from 25% to 31% (some reforestation occurred). Land degradation and coastal development eliminate natural buffers against storms and flooding.

Energy infrastructure depends on imported fossil fuels. Jamaica generates 90% of electricity from oil and LNG, creating expensive power. The country has good solar and wind potential but deployment is limited. Renewable targets exist but implementation is slow.

Jamaica's climate future requires hurricane resilience, coastal adaptation, water management, tourism adaptation, and renewable energy. However, economic constraints and debt limit adaptation capacity. Jamaica exemplifies Caribbean climate vulnerability in small island developing states.`
  },
  {
    name: 'Japan',
    lat: 36.2048,
    lng: 138.2529,
    summary: `Japan confronts intensifying climate impacts as an advanced economy vulnerable to typhoons, flooding, extreme heat, and sea level rise. This island nation of 125 million has experienced temperature increases of 1.3°C since 1900, with accelerating extreme weather threatening cities, infrastructure, and agriculture while Japan pursues decarbonization and adaptation.

Typhoons are intensifying with devastating consequences. Japan faces Pacific typhoons annually, but climate change is creating more powerful storms. Typhoon Hagibis (2019) caused massive flooding killing 100 and causing $15 billion damage. Climate change increases typhoon intensity and rainfall. Tokyo, Osaka, and coastal cities face compounding flood risks from typhoons, sea level rise, and intense rainfall overwhelming drainage.

Extreme heat is intensifying. Summer temperatures regularly exceed 38-40°C—unprecedented in Japanese history. The 2018 heatwave killed over 1,000 people. Tokyo experiences dangerous urban heat islands. Elderly populations are particularly vulnerable. Heat stress threatens outdoor workers and the 2020 Olympics demonstrated heat risks.

Sea level rise threatens extensive coastlines and low-lying areas. Tokyo Bay, Osaka Bay, and coastal cities face flooding from projected 40-60 cm rise by 2100. Storm surge from typhoons compounds impacts. Coastal infrastructure worth trillions faces threats.

Agriculture faces climate stress. Japanese rice cultivation confronts heat stress and extreme weather. Fruit production including apples and cherries suffers from changing temperatures. Fisheries face ocean changes as warming waters shift species distribution.

Energy infrastructure faced transformation after Fukushima. The 2011 nuclear disaster led Japan to shut down most reactors, creating temporary coal and LNG dependence. Japan targets carbon neutrality by 2050 and is gradually restarting some nuclear while deploying renewables. Solar and offshore wind are expanding but slowly. Japan's mountainous geography limits large-scale renewable deployment.

Japan demonstrates advanced adaptation—flood barriers, early warning systems, typhoon-resistant construction, heat warning systems. However, even wealthy, prepared Japan faces mounting climate costs.

Japan's climate future requires completing energy transition, enhancing flood protection, urban cooling, and agricultural adaptation. The country shows that even rich nations with advanced technology face profound climate challenges requiring continuous adaptation investments.`
  },
  {
    name: 'Jordan',
    lat: 30.5852,
    lng: 36.2384,
    summary: `Jordan confronts Middle Eastern climate extremes as one of the world's most water-scarce nations. This country of 11 million faces temperature increases of 1.5°C since 1960, with projections showing 2-4°C by 2100. Water scarcity, extreme heat, droughts, and Syrian refugee impacts create compounding crises threatening national stability.

Water scarcity is Jordan's existential crisis. The country is the second-most water-scarce nation globally, with renewable freshwater of only 100 cubic meters per capita annually—far below the absolute scarcity threshold. Climate change is reducing already-scarce rainfall. Groundwater extraction exceeds recharge by 160%. The Dead Sea drops 1 meter annually. The Jordan River is reduced to a trickle. Water demand from Syrian refugees (1.3 million) exacerbates crisis.

Extreme heat is intensifying. Temperatures exceed 45°C in summer. Amman experiences dangerous heat waves. Climate projections show conditions approaching human physiological limits. Heat stress threatens populations in a country where most lack air conditioning.

Droughts are frequent and severe. Jordan's limited rainfall is declining—climate models project 20-30% reductions. Agriculture faces impossible conditions. Food security requires imports—Jordan produces only 3% of grain needs.

Syrian refugee crisis compounds climate vulnerability. 1.3 million refugees strain water resources, infrastructure, and public services. Climate change contributed to Syria's drought and conflict, creating spillover impacts on Jordan.

Energy infrastructure depends on imports. Jordan imports 95% of energy, creating economic burden. The country has deployed significant solar capacity—renewables provide 20% of electricity—and targets 50% by 2030. Jordan has excellent solar potential and is becoming a regional renewable leader.

The Dead Sea is dying—water levels drop from reduced Jordan River flows and mineral extraction. This iconic natural wonder faces potential disappearance, threatening tourism.

Jordan's climate future requires regional water cooperation, massive efficiency improvements, agricultural transformation, continued renewable deployment, and managing refugee impacts. The country demonstrates how water scarcity creates national security threats. Without transformative water solutions, Jordan faces potential state failure.`
  },
  {
    name: 'Kazakhstan',
    lat: 48.0196,
    lng: 66.9237,
    summary: `Kazakhstan confronts Central Asian climate vulnerability as the world's largest landlocked country. This nation of 19 million faces temperature increases of 1.5°C since 1950, with accelerating glacier retreat, water scarcity, desertification, and extreme weather. Oil and coal dependence drives emissions while Soviet environmental disasters compound climate challenges.

Glacier retreat in the Tian Shan mountains threatens water security. Kazakhstan's glaciers provide critical water for rivers supporting agriculture and cities. Glaciers are melting rapidly—the country has lost 30% of glacier volume since 1950. This creates short-term flooding followed by long-term water scarcity as glaciers disappear.

Water scarcity is worsening. Kazakhstan is water-stressed, dependent on rivers flowing from mountains and shared with neighbors creating geopolitical tensions. The Aral Sea disaster—one of history's worst environmental catastrophes—demonstrates water mismanagement. Climate change reduces precipitation while increasing evaporation.

Desertification is advancing. Kazakhstan's steppes and deserts face expanding aridity. The Aral Sea desiccation created a toxic dust bowl—dried lake bed releases salt and pollutants creating health crises across the region. Climate change accelerates desertification.

Extreme weather is intensifying. Droughts devastate agriculture and livestock. Flash floods from intense rainfall cause damage. The 2017 floods affected 170,000. Winter temperatures are warming, reducing snow cover.

Agriculture faces climate stress. Kazakh wheat production—a major export—suffers from drought and heat. Livestock herding faces degraded pastures. The 2021 drought reduced crop yields significantly.

Energy infrastructure depends on fossil fuels. Kazakhstan has vast oil and coal reserves—the country is a major oil producer and coal provides 70% of electricity. Per capita emissions exceed 15 tons CO2—among the world's highest. Renewable deployment is minimal despite good wind and solar potential.

Soviet nuclear testing and industrial pollution compound climate vulnerability. The Semipalatinsk nuclear test site and heavy industry left environmental devastation.

Kazakhstan's climate future requires water management, halting desertification, agricultural adaptation, and energy transition. However, fossil fuel dependence and authoritarian governance prevent transformative climate action. Kazakhstan demonstrates post-Soviet climate challenges.`
  },
  {
    name: 'Kenya',
    lat: -0.0236,
    lng: 37.9062,
    summary: `Kenya confronts East African climate crisis as drought, flooding, and extreme weather threaten agriculture, livelihoods, and wildlife. This nation of 54 million faces temperature increases of 1.3°C since 1960, with accelerating impacts. Pastoral communities and subsistence farmers face impossible conditions while Nairobi's middle class confronts water scarcity and urban flooding.

Drought devastates Kenya repeatedly with intensifying severity. The 2011, 2017, and 2021-2023 droughts caused humanitarian disasters affecting millions. Climate change is increasing drought frequency—what were once rare events now occur every few years. Pastoral communities in northern and eastern Kenya face livestock deaths and livelihood collapse. The 2022-2023 drought killed millions of livestock, pushing populations toward famine.

Rainfall variability is Kenya's defining climate challenge. The country depends on two rainy seasons—the long rains (March-May) and short rains (October-December). Climate change is making both less reliable. Late onset, early cessation, and mid-season dry spells devastate agriculture. Extreme rainfall events alternate with droughts—flooding follows drought in devastating cycles.

Agriculture employs 40% of Kenyans and is extraordinarily vulnerable. Maize, beans, tea, and coffee cultivation depends on reliable rainfall now disrupted. Droughts cause crop failures creating food insecurity. Flash floods destroy farms. Farmers lack irrigation and resources for adaptation.

Water scarcity affects Kenya's growing cities. Nairobi experiences regular water shortages. Rivers including the Tana are stressed. Lake Victoria faces declining levels and ecosystem degradation. Drought reduces hydropower generation—Kenya's electricity depends 35% on hydro vulnerable to rainfall variability.

Wildlife and ecosystems face climate threats. Kenya's iconic wildlife—elephants, lions, zebras in Mas ai Mara, Amboseli, Tsavo—depend on ecosystems disrupted by drought and changing rainfall. Tourism—10% of GDP—could suffer if wildlife declines, though currently remains resilient.

Renewable energy is expanding. Kenya generates 90% of electricity from renewables—primarily geothermal (45%), hydro (35%), and growing wind and solar. The country leads Africa on geothermal development from Rift Valley resources. This provides climate mitigation success.

Kenya's climate future requires drought resilience, agricultural transformation, water management, and protecting wildlife. However, rapid population growth and economic constraints limit adaptation capacity. Kenya demonstrates how climate change threatens vulnerable populations despite low historical emissions.`
  },
  {
    name: 'Kosovo',
    lat: 42.6026,
    lng: 20.9030,
    summary: `Kosovo confronts Balkan climate vulnerability with droughts, heat waves, and water scarcity. 1.8 million face agricultural stress. Coal dependence creates heavy emissions. Political challenges and weak governance limit climate action.`
  },
  {
    name: 'Kuwait',
    lat: 29.3117,
    lng: 47.4818,
    summary: `Kuwait confronts extreme Middle Eastern climate as one of Earth's hottest countries. This oil-rich nation of 4.3 million faces temperature increases of 1.8°C since 1960, with projections showing 3-5°C by 2100. Extreme heat approaching human survival limits, water scarcity, and dust storms threaten habitability while oil wealth enables adaptation but drives emissions.

Kuwait experiences some of Earth's highest temperatures. Summer heat regularly exceeds 50°C—Kuwait recorded 54°C in 2016, among the highest reliably measured temperatures. Climate projections show Kuwait could experience wet-bulb temperatures exceeding human survival thresholds during extreme events, making outdoor activity impossible and potentially forcing evacuation during peak summer.

Oil wealth enables extreme adaptation—universal air conditioning, desalination providing 100% of water, energy-intensive infrastructure. However, this creates dangerous dependence on fossil fuels for survival. Power outages during heat waves could be lethal. Kuwait's per capita emissions exceed 25 tons CO2—among the world's highest.

Water scarcity is absolute—Kuwait has no natural freshwater. The country depends entirely on desalination, requiring massive energy. Desalination plants are vulnerable to Gulf temperature increases and oil spills. Climate change increases water demand while threatening supply.

Dust storms are intensifying. Regional desertification and dried water bodies create massive dust storms affecting Kuwait City. These storms close airports, cause respiratory disease, and demonstrate environmental degradation.

Oil dominates Kuwait's economy absolutely—petroleum provides 90% of government revenues. This creates resistance to energy transition despite climate vulnerability. Kuwait has minimal renewable energy despite excellent solar potential. The country burns oil and gas for 100% of electricity.

Kuwait's climate future involves managing potential uninhabitability during extreme heat. The country demonstrates how oil wealth enables survival in harsh climates but creates dangerous vulnerabilities. Without global emissions cuts, Kuwait could become too hot for human habitation despite wealth. Diversifying energy and economy is imperative but politically difficult in a petrostate.`
  },
  {
    name: 'Kyrgyzstan',
    lat: 41.2044,
    lng: 74.7661,
    summary: `Kyrgyzstan confronts Central Asian mountain climate vulnerability. This nation of 6.7 million faces temperature increases of 1.5°C since 1950, with accelerating glacier retreat, water scarcity, extreme weather, and agricultural stress. Dependence on glacial water creates acute climate sensitivity.

Glacier retreat threatens Kyrgyzstan's water security. The country has 8,200 glaciers in the Tian Shan mountains providing critical water for rivers, agriculture, and hydropower. Glaciers are melting rapidly—Kyrgyzstan has lost 20% of glacier volume since 1950 with acceleration. Short-term meltwater increases flows temporarily, but glacier disappearance will cause catastrophic water shortfalls.

Glacial Lake Outburst Floods (GLOFs) threaten mountain communities. Warming creates unstable glacial lakes that can burst catastrophically. Several dangerous lakes exist with potential to destroy downstream settlements.

Water resources face long-term crisis. Kyrgyzstan depends on glacial melt feeding rivers shared with downstream neighbors—creating geopolitical tensions as water becomes scarce. The Syr Darya and Chu rivers face reduced flows threatening agriculture.

Agriculture employs 50% of Kyrgyz and is highly vulnerable. Farming depends on irrigation from glacial rivers. Droughts affect rain-fed agriculture. Livestock herding faces degraded pastures from changing precipitation and overgrazing.

Hydropower provides 90% of Kyrgyzstan's electricity, creating dependence on climate-vulnerable water flows. Winter energy shortages occur when rivers run low.

Extreme weather is intensifying. Landslides and mudflows triggered by intense rainfall destroy mountain villages. Flash floods devastate valleys. The 2017 Uch-Kurgan flood killed 35.

Kyrgyzstan's climate future requires glacier monitoring, GLOF mitigation, water management, agricultural adaptation, and energy diversification. However, poverty, weak institutions, and corruption limit adaptation capacity. Kyrgyzstan demonstrates how mountain nations face acute climate vulnerability from glacier dependence.`
  },
  {
    name: 'Laos',
    lat: 19.8563,
    lng: 102.4955,
    summary: `Laos confronts Southeast Asian climate vulnerability as a mountainous, landlocked nation. This country of 7.5 million faces temperature increases of 0.8°C since 1960, with changing monsoons, extreme weather, and Mekong River variability threatening agriculture and livelihoods. Hydropower dependence creates climate sensitivity.

Monsoon variability affects Laos's agricultural foundation. The country depends on predictable rainy seasons, but climate change creates erratic precipitation. Heavy downpours alternate with dry spells. Droughts are increasing—the 2015-2016 and 2019 droughts devastated agriculture.

The Mekong River dominates Laos's climate vulnerability. The country depends on the Mekong for fisheries, agriculture, and livelihoods. Climate change and upstream dams alter flows. Hydropower development on the Mekong and tributaries provides electricity exports but creates ecosystem and downstream impacts.

Agriculture employs 60% of Lao and is extraordinarily vulnerable. Subsistence farming of rice, vegetables, and livestock depends on reliable rainfall. Droughts and floods destroy crops. Farmers lack irrigation and resources for adaptation.

Flooding from extreme rainfall devastates lowlands. Flash floods and landslides affect mountainous areas. Deforestation worsens flooding impacts.

Energy infrastructure depends overwhelmingly on hydropower—70% of electricity comes from dams on the Mekong and tributaries. Climate variability affects generation. Laos exports electricity to Thailand, creating economic dependence on climate-vulnerable hydro.

Deforestation accelerates despite forest covering 55% of Laos. Logging and agricultural expansion clear forests, eliminating carbon sinks.

Laos's climate future requires Mekong cooperation, agricultural adaptation, sustainable hydropower development, and halting deforestation. However, limited resources and weak governance constrain climate action.`
  },
  {
    name: 'Latvia',
    lat: 56.8796,
    lng: 24.6032,
    summary: `Latvia confronts Baltic climate transformation as a small post-Soviet nation. This country of 1.9 million faces temperature increases of 1.6°C since 1960, with warming winters, changing precipitation, and coastal threats. Forests and agriculture face climate stress while renewable energy deployment advances.

Warming is transforming Latvia's climate. Winters are shorter and milder with less snow and ice. The Baltic Sea is warming, affecting marine ecosystems. Growing seasons extend. These changes disrupt ecosystems adapted to cold continental climate.

Coastal areas face multiple threats. Sea level rise projected at 30-60 cm by 2100 threatens low-lying areas including Riga and coastal settlements. Storm surges from Baltic storms cause flooding. Coastal erosion damages infrastructure.

Forests covering 52% of Latvia face climate stress. Warmer, wetter conditions increase storm damage. Bark beetle outbreaks affect conifers. Changing forest composition as species ranges shift northward.

Agriculture faces mixed impacts. Longer growing seasons could benefit Latvian farming of grains and dairy, but increased rainfall variability, extreme weather, and new pests create challenges. Waterlogging from intense rainfall damages crops.

Renewable energy is expanding. Latvia generates 50% of electricity from renewables—primarily hydropower with growing wind and biomass. The country imports electricity and burns natural gas. Latvia targets increasing renewables but implementation is moderate.

Peat bogs are vulnerable climate features. Peatlands cover 10% of Latvia and face drainage and degradation releasing stored carbon.

Latvia's climate future involves coastal protection, forest adaptation, agricultural adjustment, and renewable acceleration. EU membership provides frameworks for climate action. Latvia demonstrates Baltic post-Soviet climate transition.`
  },
  {
    name: 'Lebanon',
    lat: 33.8547,
    lng: 35.8623,
    summary: `Lebanon faces Mediterranean climate crisis amid state collapse. Water scarcity, extreme heat, wildfires, and sea level rise threaten this nation of 6.8 million while economic and political dysfunction prevent adaptation. Temperatures have risen 1.5°C since 1960 with droughts intensifying and forests burning.`
  },
  {
    name: 'Lesotho',
    lat: -29.6100,
    lng: 28.2336,
    summary: `Lesotho faces mountain climate vulnerability with changing snow patterns, water scarcity, and agricultural stress. 2.1 million depend on climate-sensitive subsistence farming. Lesotho Highlands Water Project supplies South Africa creating regional dependencies.`
  },
  {
    name: 'Liberia',
    lat: 6.4281,
    lng: -9.4295,
    summary: `Liberia confronts West African coastal vulnerability with flooding, deforestation, and agricultural threats. 5 million face climate impacts compounded by post-conflict reconstruction challenges. Rainfall variability affects rain-fed agriculture.`
  },
  {
    name: 'Libya',
    lat: 26.3351,
    lng: 17.2283,
    summary: `Libya confronts Saharan extremes amid civil war. Extreme heat exceeding 45°C, water scarcity, desertification, and coastal threats affect 7 million while conflict prevents climate action. Oil dependence drives emissions yet renewable potential remains unexploited.`
  },
  {
    name: 'Lithuania',
    lat: 55.1694,
    lng: 23.8813,
    summary: `Lithuania faces Baltic climate transformation with warming winters, changing precipitation, and coastal threats. 2.8 million experience temperature increases affecting agriculture and forests. EU membership supports renewable energy transition.`
  },
  {
    name: 'Luxembourg',
    lat: 49.8153,
    lng: 6.1296,
    summary: `Luxembourg confronts European climate impacts with flooding, heat waves, and changing seasons. 640,000 in small developed nation pursue ambitious climate targets. High per capita emissions from transport and industry require reductions.`
  },
  {
    name: 'Madagascar',
    lat: -18.7669,
    lng: 46.8691,
    summary: `Madagascar faces cyclones, droughts, deforestation, and agricultural collapse. 29 million on vulnerable island depend on climate-sensitive agriculture. Deforestation accelerates biodiversity loss. Extreme poverty limits adaptation. Cyclones devastate coasts regularly.`
  },
  {
    name: 'Malawi',
    lat: -13.2543,
    lng: 34.3015,
    summary: `Malawi confronts East African climate crisis with droughts, floods, and agricultural vulnerability. 20 million depend on rain-fed agriculture facing impossible conditions. Lake Malawi levels fluctuate. Deforestation and poverty limit adaptation.`
  },
  {
    name: 'Malaysia',
    lat: 4.2105,
    lng: 101.9758,
    summary: `Malaysia faces Southeast Asian climate impacts with extreme rainfall, flooding, heatwaves, and sea level rise. Deforestation for palm oil drives emissions while 33 million confront urban flooding and coastal threats. Diversified energy includes renewables but coal and gas remain significant.`
  },
  {
    name: 'Mali',
    lat: 17.5707,
    lng: -3.9962,
    summary: `Mali faces Sahel catastrophe with droughts, desertification, Niger River variability, and extreme heat. 21 million confront agricultural collapse. Jihadist insurgency compounds climate vulnerability. Pastoral livelihoods disappearing as Sahara expands.`
  },
  {
    name: 'Mauritania',
    lat: 21.0079,
    lng: -10.9408,
    summary: `Mauritania confronts Sahara expansion, extreme heat, water scarcity, and coastal threats. 4.7 million face desert conditions worsening. Atlantic coast experiences sea level rise and erosion. Pastoral nomadism collapsing. Droughts devastate agriculture.`
  },
  {
    name: 'Mexico',
    lat: 23.6345,
    lng: -102.5528,
    summary: `Mexico confronts extreme heat, droughts, hurricanes, and water crisis. Mexico City's 22 million face potential water bankruptcy while hurricanes devastate coasts. Agriculture suffers severe climate stress affecting 128 million. Renewable deployment grows but fossil fuels dominate.`
  },
  {
    name: 'Moldova',
    lat: 47.4116,
    lng: 28.3699,
    summary: `Moldova faces droughts, heat waves, water scarcity, and agricultural stress. 2.6 million depend on climate-vulnerable agriculture. Wine production threatened by heat and drought. Energy dependence on imports creates economic vulnerability.`
  },
  {
    name: 'Mongolia',
    lat: 46.8625,
    lng: 103.8467,
    summary: `Mongolia confronts extreme continental climate change with rapid warming, desertification, and dzud harsh winters. 3.3 million face temperature increases exceeding global average. Nomadic pastoralism threatened by changing conditions. Water scarcity worsens.`
  },
  {
    name: 'Montenegro',
    lat: 42.7087,
    lng: 19.3744,
    summary: `Montenegro faces Mediterranean and Balkan climate impacts with heat waves, droughts, wildfires, and coastal threats. 620,000 experience tourism vulnerable to climate change. Adriatic coast faces sea level rise. Water scarcity intensifies.`
  },
  {
    name: 'Morocco',
    lat: 31.7917,
    lng: -7.0926,
    summary: `Morocco faces catastrophic droughts and water scarcity. The 2022 drought reduced cereal production 70% affecting 37 million. Extreme heat intensifies while reservoirs empty. However, massive solar and wind deployment makes Morocco Africa's renewable leader with 37% clean electricity.`
  },
  {
    name: 'Mozambique',
    lat: -18.6657,
    lng: 35.5296,
    summary: `Mozambique confronts cyclones, flooding, droughts, and coastal vulnerability. 32 million face devastating cyclones—Idai killed 1,300 in 2019. Climate change intensifies Indian Ocean storms. Agriculture vulnerable. Deforestation and poverty limit adaptation.`
  },
  {
    name: 'Myanmar',
    lat: 21.9162,
    lng: 95.9560,
    summary: `Myanmar confronts cyclones, flooding, and agricultural vulnerability amid military coup. Cyclone Nargis killed 140,000 in 2008. Civil war prevents climate action for 55 million facing extreme weather. Deforestation accelerates while energy depends on climate-vulnerable hydropower.`
  },
  {
    name: 'Namibia',
    lat: -22.9576,
    lng: 18.4904,
    summary: `Namibia faces southern African drought, desertification, and extreme heat. 2.5 million in arid conditions confront water scarcity among world's worst. Agriculture marginal. However, excellent solar potential with growing renewable deployment.`
  },
  {
    name: 'Nepal',
    lat: 28.3949,
    lng: 84.1240,
    summary: `Nepal confronts Himalayan climate catastrophe with glacier retreat, GLOFs, monsoon variability, and landslides. 30 million face water security threats as glaciers disappear. Hydropower vulnerable. Agriculture climate-sensitive. Poverty limits adaptation despite high vulnerability.`
  },
  {
    name: 'Netherlands',
    lat: 52.1326,
    lng: 5.2913,
    summary: `The Netherlands faces existential sea level rise with 26% of land below sea level. Projected 40-80cm rise by 2100 threatens 17.5 million despite world-class flood defenses. Extreme rainfall causes urban flooding. Offshore wind and renewable deployment reach 30% of electricity targeting 70% by 2030.`
  },
  {
    name: 'New Caledonia',
    lat: -20.9043,
    lng: 165.6180,
    summary: `New Caledonia faces Pacific island climate threats with sea level rise, coral bleaching, cyclones, and ocean acidification. 290,000 French territory residents confront coastal vulnerability. Nickel mining economy faces climate adaptation challenges.`
  },
  {
    name: 'New Zealand',
    lat: -40.9006,
    lng: 174.8860,
    summary: `New Zealand confronts intensifying extreme weather. 2023 Auckland floods and Cyclone Gabrielle killed 15 and caused billions in damage. Droughts affect agriculture while glaciers retreat. Renewable energy leads at 85% of electricity with 100% target. Agricultural methane drives 50% of emissions.`
  },
  {
    name: 'Nicaragua',
    lat: 12.8654,
    lng: -85.2072,
    summary: `Nicaragua confronts Central American climate crisis with hurricanes, droughts, floods, and agricultural collapse. 6.6 million face extreme weather alternating between devastating floods and severe droughts. Coffee production threatened. Deforestation accelerates.`
  },
  {
    name: 'Niger',
    lat: 17.6078,
    lng: 8.0817,
    summary: `Niger faces Sahel catastrophe with extreme drought, desertification, heat, and food insecurity. 25 million confront some of world's harshest climate conditions. Sahara expanding, agriculture collapsing, pastoral livelihoods impossible. Lake Chad disaster affects Niger.`
  },
  {
    name: 'Nigeria',
    lat: 9.0820,
    lng: 8.6753,
    summary: `Nigeria faces Lake Chad collapse, floods, droughts, and agricultural threats affecting 220 million. Lake Chad shrunk 90% fueling Boko Haram. 2022 floods displaced millions while northern droughts advance desertification. Oil dependence drives emissions with minimal renewables despite excellent solar potential.`
  },
  {
    name: 'North Korea',
    lat: 40.3399,
    lng: 127.5101,
    summary: `North Korea confronts droughts, flooding, deforestation, and agricultural collapse amid isolation. 26 million face food insecurity from climate-vulnerable agriculture. Deforestation causes flooding and landslides. Authoritarian regime prevents international climate cooperation.`
  },
  {
    name: 'North Macedonia',
    lat: 41.6086,
    lng: 21.7453,
    summary: `North Macedonia faces Balkan climate impacts with droughts, heat waves, water scarcity, and agricultural stress. 2.1 million experience temperature increases. Water resources stressed. Coal dependence creates emissions requiring transition.`
  },
  {
    name: 'Northern Cyprus',
    lat: 35.1856,
    lng: 33.3823,
    summary: `Northern Cyprus confronts Mediterranean heat extremes, droughts, and water scarcity. Unrecognized status complicates climate action. Tourism and agriculture vulnerable to increasing temperatures and water shortages. Political division limits adaptation.`
  },
  {
    name: 'Norway',
    lat: 60.4720,
    lng: 8.4689,
    summary: `Norway confronts Arctic warming three times the global average. Glaciers retreat, sea ice disappears, and permafrost thaws affecting 5.5 million. Climate paradox: 98% renewable electricity domestically yet major oil and gas exporter. Arctic transformation accelerates ecosystem changes.`
  },
  {
    name: 'Oman',
    lat: 21.4735,
    lng: 55.9754,
    summary: `Oman faces extreme heat, water scarcity, cyclones, and coastal threats. 5 million confront temperatures exceeding 50°C regularly. Water scarcity severe with desalination necessary. Cyclones from Arabian Sea intensifying. Oil dependence drives emissions.`
  },
  {
    name: 'Pakistan',
    lat: 30.3753,
    lng: 69.3451,
    summary: `Pakistan faces catastrophic climate crisis. 2022 floods submerged one-third of country affecting 33 million, killing 1,700, costing $30 billion. Extreme heat exceeds 50°C while Himalayan glaciers retreat threatening water for 230 million. Agriculture faces collapse. Contributes <1% emissions yet suffers devastation.`
  },
  {
    name: 'Palestine',
    lat: 31.9522,
    lng: 35.2332,
    summary: `Palestine confronts water scarcity, extreme heat, and drought amid occupation. 5 million Palestinians face severe water stress. Israeli control over water resources compounds climate vulnerability. Agriculture faces impossible conditions. Adaptation prevented by conflict.`
  },
  {
    name: 'Panama',
    lat: 8.5380,
    lng: -80.7821,
    summary: `Panama faces Central American climate impacts with extreme rainfall, flooding, droughts, and sea level rise. 4.3 million vulnerable to hurricanes and coastal threats on both Pacific and Caribbean coasts. Canal operations threatened by water scarcity during droughts.`
  },
  {
    name: 'Papua New Guinea',
    lat: -6.3150,
    lng: 143.9555,
    summary: `Papua New Guinea confronts Pacific island climate catastrophe with sea level rise, coral bleaching, deforestation, and extreme weather. 9 million on vulnerable islands and mainland face cyclones, flooding, and agricultural threats. Poverty limits adaptation.`
  },
  {
    name: 'Paraguay',
    lat: -23.4425,
    lng: -58.4438,
    summary: `Paraguay faces South American climate variability with droughts, flooding, and deforestation. 7 million depend on agriculture and hydropower vulnerable to climate change. Gran Chaco deforestation accelerates. Paraguay River levels fluctuate affecting transport.`
  },
  {
    name: 'Peru',
    lat: -9.1900,
    lng: -75.0152,
    summary: `Peru confronts Andean glacier retreat, Amazon deforestation, and coastal threats. Tropical glaciers provide Lima's water but are disappearing. El Niño floods and droughts alternate devastating agriculture for 33 million. Amazon deforestation drives emissions. Hydropower dominates but drought vulnerability grows.`
  },
  {
    name: 'Philippines',
    lat: 12.8797,
    lng: 121.7740,
    summary: `Philippines faces catastrophic typhoons, sea level rise, and agricultural threats. Super Typhoon Haiyan killed 6,300 in 2013. Intensifying storms threaten 115 million on vulnerable islands. Rice agriculture faces floods and droughts. Coal dependence persists despite renewable potential. Climate migration intensifies.`
  },
  {
    name: 'Poland',
    lat: 51.9194,
    lng: 19.1451,
    summary: `Poland confronts droughts, heatwaves, and flooding while dependent on coal. Temperatures rose 1.5°C since 1900 with droughts devastating agriculture. Coal provides 70% of electricity creating heavy emissions. Renewable deployment grows slowly. EU membership pressures energy transition affecting 38 million.`
  },
  {
    name: 'Portugal',
    lat: 39.3999,
    lng: -8.2245,
    summary: `Portugal faces Mediterranean extremes with catastrophic wildfires, droughts, and heat. 2017 wildfires killed 120 people. Extreme heat exceeds 45°C while droughts devastate agriculture. Renewable energy leads at 60% of electricity. Sea level rise threatens coastal areas. Water scarcity intensifies for 10 million.`
  },
  {
    name: 'Puerto Rico',
    lat: 18.2208,
    lng: -66.5901,
    summary: `Puerto Rico confronts Caribbean hurricane devastation, sea level rise, and drought. Hurricane Maria killed 3,000 in 2017 demonstrating extreme vulnerability. 3.2 million face intensifying storms. Infrastructure fragile. Renewable deployment growing but challenges persist.`
  },
  {
    name: 'Qatar',
    lat: 25.3548,
    lng: 51.1839,
    summary: `Qatar faces extreme heat approaching 50°C regularly. 2.9 million in oil-rich nation emit 37 tons CO2 per capita—world's highest. Water scarcity absolute with 100% desalination. Air conditioning universal. Oil and gas wealth enables adaptation but drives emissions. Solar potential growing.`
  }
];

async function main() {
  console.log('Starting climate writeup generation for 128 countries...')
  let successCount = 0
  let errorCount = 0
  
  for (const writeup of CLIMATE_WRITEUPS) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'climate'
          }
        },
        update: {
          summary: writeup.summary,
          lat: writeup.lat,
          lng: writeup.lng,
          country: writeup.name,
          storyCount: 0,
          topStories: "[]",
          issues: "[]"
        },
        create: {
          name: writeup.name,
          type: 'country',
          category: 'climate',
          summary: writeup.summary,
          lat: writeup.lat,
          lng: writeup.lng,
          country: writeup.name,
          storyCount: 0,
          topStories: "[]",
          issues: "[]"
        }
      })
      successCount++
      console.log(`✓ ${writeup.name} - Climate writeup saved (${successCount}/128)`)
    } catch (error) {
      errorCount++
      console.error(`✗ ${writeup.name} - Error:`, error)
    }
  }
  
  console.log(`\n=== COMPLETION REPORT ===`)
  console.log(`Total countries: 128`)
  console.log(`Successful writes: ${successCount}`)
  console.log(`Errors: ${errorCount}`)
  console.log(`========================\n`)
  
  await prisma.$disconnect()
}

main()
  .catch((e) => {
    console.error('Fatal error:', e)
    process.exit(1)
  })
