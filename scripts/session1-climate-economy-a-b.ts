import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CountryWriteup {
  name: string;
  lat: number;
  lng: number;
  climate: string;
  economy: string;
}

const countries: CountryWriteup[] = [
  {
    name: "Afghanistan",
    lat: 33.9391,
    lng: 67.7100,
    climate: `Afghanistan's climate crisis is hitting harder than most places—temperatures have risen 1.8°C since 1950, double the global average. Here's what that means on the ground: devastating droughts now strike every 3-4 years instead of every decade, and 2024 saw flash floods kill over 315 people in Baghlan province alone, destroying 2,000 homes in areas that hadn't flooded in living memory. The country contributes basically nothing to global emissions (less than 0.01%), yet it ranks 7th on the vulnerability index—one of the world's most exposed nations to climate chaos it didn't create.

The numbers are brutal. Afghanistan entered its third consecutive drought-like year in 2024, with 64% of the population dealing with water scarcity. In 2024 alone, climate disasters temporarily displaced 988,000 people—that's nearly a million Afghans forced from their homes by weather. The May floods in Baghlan were followed by more flooding across all 34 provinces affecting 170,000 people. An estimated 23.7 million Afghans need life-saving aid, with 11 million at high risk from future climate-induced disasters.

Here's the bitter irony: Afghanistan's climate plan estimates it needs $20.6 billion for adaptation and emission-cutting between 2021-2030, but donors froze development aid when the Taliban grabbed power in August 2021. The Taliban government—which doesn't even officially acknowledge human-caused climate change—now faces the impossible task of managing climate adaptation without international support. Some experts fear that without renewable energy investment, the Taliban will ramp up highly polluting coal use. The warming projections? Anywhere from 2.0°C to 6.2°C by 2090, which would be absolutely catastrophic for a country already on its knees.`,
    economy: `Afghanistan's economy collapsed 27% when the Taliban took over in August 2021, and it's barely crawled back. Here's the situation: GDP has stabilized at around 70% of pre-2021 levels—think about that, the economy is still 30% smaller than it was four years ago. In fiscal year 2023-24, GDP grew just 2.5-2.7%, a partial recovery driven by agriculture, mining, and construction, but with GDP around $14-20 billion total (depending on the source), this is one of the world's poorest economies.

The deflation is wild—by February 2024, headline inflation plummeted to -9.7% year-over-year, with food prices falling 14.4%. That sounds good until you realize it reflects catastrophically weak demand and a deep recession. Unemployment exceeds 23%, and about half the population lives below the poverty line. Employment remains 58% below pre-August 2021 levels, with massive job gaps especially hitting youth and women.

Then there's the opium ban. The Taliban's 2022 prohibition on poppy cultivation—their former cash cow worth $1.4 billion—cut farmer incomes by 92% and cost 450,000 farm jobs. The opiate economy contracted by 90%, cultivation dropped 95%, representing an $1.3 billion loss (roughly 8% of GDP). It's economic self-sabotage on a massive scale.

Agriculture employs 60-80% of the population but accounts for less than a third of GDP. Services make up 46.5% of GDP and employ 36.1% of workers. Annual exports exceed $2 billion, with agricultural, mineral, and textile products making up 94% of exports. Manufacturing and services continue struggling. The Taliban's takeover triggered a 27% GDP contraction across 2021-2022, and four years later, the economy remains fundamentally broken. International isolation means no IMF support, no World Bank loans, and frozen central bank assets—Afghanistan is essentially trying to run a modern economy in complete financial quarantine.`
  },
  {
    name: "Albania",
    lat: 41.1533,
    lng: 20.1683,
    climate: `Albania's in an excellent position compared to most of Europe—its energy sector runs almost entirely on hydropower, producing clean energy. But here's the catch: that very reliance makes the country vulnerable to climate variability. In 2023, Albania emitted 7.67 million tonnes of GHGs (2.73 tonnes per person), making it a relatively low emitter. The country signed the Sofia Declaration on the Green Agenda for the Western Balkans in 2020, committing to carbon neutrality by 2050, and has already hit the EU's 2030 targets for renewable energy.

But meeting the Nationally Determined Contributions target—a 20.9% reduction in GHG emissions by 2030 compared to 2019—looks difficult. Despite decreases in land use emissions, increases in other sectors mean the overall trend isn't favorable. Albania's not standing still though—through renewable energy strategies, the country has achieved EU 2030 targets early, and renewable energy (especially non-hydro sources like wind and solar) is seen as the solution for both energy security and climate mitigation.

Here's where it gets real: climate events like floods, wildfires, and landslides, along with earthquakes, have affected 95% of municipalities in the past two decades. Conservative estimates suggest climate-related damages will reach 7% of GDP in 2050 alone. Albania needs to invest $6 billion over the next decade to protect citizens and property from growing risks. A November 2024 World Bank report emphasizes investments in resilience, renewable energy transition, and regulatory reforms. After the devastating September 2024 floods, the EU added funding bringing total available support to €1.5 billion for victims and repairs.

The country adopted its first National Energy and Climate Plan (NECP) for 2021-2030, based on the energy strategy and the Paris Agreement commitments. Albania's challenge isn't emissions—it's adaptation, building infrastructure to handle the floods and fires that will only intensify.`,
    economy: `Albania's economy is one of Europe's fastest-growing, and that's not hype. Real GDP growth hit 3.9% in 2024, staying strong at 3.3% through the year, driven by private consumption, tourism, and construction. The IMF projects 3.6% growth for 2024. Tourism—which accounts for about one-fifth of GDP—expanded faster in Q3 than Q2, and the sector's absolutely booming. Albania opened EU accession talks in mid-October 2024, launching negotiations in three key clusters: Fundamentals, Internal Market, and External Relations. That's a big deal.

Inflation more than halved from 2023, averaging just 2.2% in 2024, mainly due to lower import-driven pressures. End-of-year inflation landed around 2%, below the Bank of Albania's 3% target. The unemployment rate hovers around 4%, with robust employment growth and record-high participation rates. Annual remittances from the Albanian diaspora in Greece and Italy represent about 15% of GDP, providing crucial support to the current account balance along with growing tourism revenues.

Here's what's driving growth: prudent macroeconomic policies and booming tourism. Tourist arrivals bring serious money—roughly one-fifth of GDP—and they're growing. The economy also benefits from strong construction activity and improving business services. Albania's GDP per capita surpassed pre-pandemic levels, and the country's EU aspirations serve as a guiding force for continued progress.

But it's not all sunshine. Albania remains one of Europe's poorer countries, though it officially became a high-income economy on July 1, 2024, according to World Bank classifications. The current account deficit has been a chronic concern, though tourism and remittances help offset trade imbalances. The big challenge ahead is sustaining growth momentum while closing infrastructure gaps and strengthening institutions to meet EU standards. The economy is transitioning from recovery to sustainable expansion, with EU accession as the North Star guiding reforms.`
  },
  {
    name: "Algeria",
    lat: 28.0339,
    lng: 1.6596,
    climate: `Algeria's warming at a terrifying rate—0.49°C per decade from 2000 to 2023, well above the global average of 0.37°C. Temperatures could hit 5.6°C above pre-industrial levels by century's end in a high-emissions scenario. That's not abstract modeling—it's already manifesting. Available water per capita is 430 m³ per year, less than half the absolute water scarcity threshold of 500 m³. Drought episodes are becoming longer, more intense, and more frequent, with desertification encroaching on approximately 20 million hectares of arid and semiarid steppe regions. In September 2024, severe flooding hit southern and western Algeria, a reminder that climate chaos brings both too much water and too little.

Over the past three decades, CO₂ emissions more than doubled from 65.35 million tons in 1990 to 139.67 million tons in 2021. Algeria's emissions are climbing while the physical environment deteriorates. The High Plains are particularly at risk of desertification as precipitation decreases and drought frequency increases. Thousands of hectares turn to desert annually.

Here's the pathetic part: Algeria's renewable energy efforts are laughable. In 2024, only 0.09% of energy spending went to renewable energy programming (0.1% in 2023). As of 2023, roughly 3% of Algeria's electricity comes from renewable resources. The country remains massively dependent on hydrocarbons—oil and gas account for 83% of exports and 47% of budget revenues. A May 2024 study shows Algeria's not on track for climate neutrality or its 2030 emission reduction targets.

The International Energy Agency published a National Climate Resilience Assessment for Algeria in 2024, and a Carnegie report analyzed climate governance, highlighting institutional capacity challenges. The bottom line? Algeria has the resources and the revenue to invest in renewable energy and adaptation, but it's choosing not to. Water scarcity, desertification, and extreme weather are intensifying, and the government's response remains tepid at best.`,
    economy: `Algeria's economy grew 3.6% in 2024, led by non-hydrocarbon sectors despite falling oil revenues. Here's the breakdown: non-hydrocarbon activity accelerated to 4.8% in 2024 (compared to 4.2% in 2023), with growth driven by services (+4.5%), agriculture and fishing (+5.1%), construction (+3.6%), and electricity and gas production (+5.8%). That's the good news. The bad news? The country remains massively dependent on hydrocarbons—oil and gas accounted for 14% of GDP, 83% of exports, and 47% of budget revenues between 2019-2023.

Inflation eased to 4.3% over the first nine months of 2024, down from 7.18% in 2023 and settling around 4.4% for the full year. That reflects stabilizing food prices, moderating import costs, and a stable exchange rate. Lower hydrocarbon exports, higher imports, and rising public spending reduced the current account surplus and increased the budget deficit in 2024, pushing fiscal challenges to the forefront.

The unemployment rate was 12.7% overall, 25.4% for women, and a brutal 29.3% among young people (aged 15-24) in 2024. Youth unemployment is a powder keg, and the government knows it. Algeria's main challenge remains high dependency on hydrocarbon revenues and public spending, though the country aspires to diversify. Recent reforms—the 2022 Investment Law, 2023 Banking and Monetary Law, formal adhesion to the Africa Continental Free Trade Agreement, the 2023 Land Law, and state-owned bank reforms—all aim at boosting private investment to foster diversification.

The hydrocarbon sector is expected to maintain growth around 5% in 2024-2025, but declining oil prices and production challenges loom. Algeria's nominal GDP sits around $260 billion, making it one of Africa's larger economies, but GDP per capita remains relatively low. The November 2024 World Bank report notes that a stronger policy framework can support export diversification, but implementation is everything. Algeria has talked about diversification for decades—the question is whether this time will be different.`
  },
  {
    name: "Angola",
    lat: -11.2027,
    lng: 17.8739,
    climate: `Angola's facing back-to-back climate extremes that would break most countries. The nation endured its fifth consecutive year of drought through 2022—the worst in 40 years—leaving 3.81 million people with insufficient food in six southern provinces and 1.32 million facing acute food insecurity. Then 2024 brought catastrophic flooding when the Acre River in Cobija exceeded its historical maximum on February 27, flooding 16 urban sectors and three rural communities. Between 2008 and 2021, floods displaced over 480,000 people across 63 disaster events. Climate-related disasters (floods, storms, droughts) cost Angola nearly $1.2 billion between 2005-2017.

Angola contributes only 0.21% of global GHG emissions and already gets most of its electricity from renewable sources—88.5% from hydropower as of 2020 (13,991 GWh total). In 2020, total domestic generation was overwhelmingly clean. The country pledged to reduce GHG emissions by 14% by 2025 compared to 2015 in its Nationally Determined Contribution. The oil and gas sector is currently Angola's largest GHG source.

But deforestation is the hidden crisis. Based on satellite imagery, GHG emissions from deforestation in 2017 were estimated at 77 million tCO2eq. Deforestation leads to soil erosion and water loss, devastating soil fertility, with long-term consequences including complete ecosystem function loss and increased settlement vulnerability to floods and droughts. It's a vicious cycle.

The World Bank's Angola Country Climate and Development Report lays out the vulnerabilities clearly. Angola is the most vulnerable country to climate crisis in South America according to some assessments. In 2024, weather and climate impacts cascaded from the Andes to the Amazon, causing major economic and environmental disruptions. The African Development Centre notes Angola faces intensifying climate change that demands urgent adaptation investments. Meanwhile, 84% of Angolan respondents in a European Investment Bank survey believe investing in renewable energy should be prioritized—public opinion is ahead of policy.`,
    economy: `Angola recorded its strongest growth in five years—real GDP expanded 4.4% in 2024, way up from 1.1% in 2023. Growth was driven mainly by the non-oil sector, with agriculture and fisheries' share of GDP more than doubling from 6.2% in 2010 to 14.9% in 2023. Diamond production hit an all-time high in 2024, driving non-oil sector growth of 4.8% in the first three quarters. That's the pivot everyone's been waiting for—Angola finally diversifying beyond oil.

Except, not really. Oil remains central to everything—28.9% of GDP and 95% of total exports. Oil output averaged 1.03 million barrels per day in early 2025, down from a peak of 2 million bpd in 2008. Average daily production reached 1.134 million barrels in the first three quarters of 2024, up 4% year-on-year, but the long-term trend is decline. Angola's average oil production has been falling for over a decade, and new discoveries aren't keeping pace with depletion.

Inflation is brutal—27.5% in December 2024, with food and non-alcoholic beverages contributing over 13 percentage points. Other forecasts put inflation peaking at 18.1% in 2024 before dropping to 12.4% in 2025, driven largely by currency devaluation. The kwanza took a beating. High inflation and limited per capita GDP growth keep poverty rates elevated around 36% by 2026, underscoring the need for a stronger social safety net.

The fiscal deficit is around 10% of GDP, and public debt remains a concern. Angola imports more than half its gasoline and 86% of its diesel—an oil-producing nation forced to import refined petroleum products because of inadequate refining capacity. The agriculture sector has grown faster than the economy for four consecutive years, and several indigenous private companies have diversified from oil services into agro-processing. Diamonds, copper, and iron ore mines should come online as investments around the Lobito corridor are realized. But economic diversification remains elusive as oil production declines and global decarbonization looms.`
  },
  {
    name: "Argentina",
    lat: -38.4161,
    lng: -63.6167,
    climate: `Let's talk about Argentina's climate whiplash. The 2022/23 drought was devastating—resulted in a 2.2% GDP drop, the loss of $3.5 billion in tax revenues, and $8 billion in exports. A prolonged La Niña destroyed the Pampas, and Argentina endured at least eight heatwaves in the 2022-2023 summer, with temperatures frequently hitting 40°C. By 2050, losses due to droughts could mean 4% of GDP annually. Between 1900 and 2021, floods affected 15 million people. Annual asset losses from flooding total $1.4 billion, a figure that will increase as weather intensifies. Catastrophic flooding in Bahia Blanca in March 2025 killed 16 people and was directly linked to climate change—extreme heat and humidity made the heavy rains far worse.

Mean temperatures have increased 0.5°C from 1901-2012, slightly below the global average, but in the Andean part of Patagonia temperatures rose more than 1°C, causing almost all glaciers to retreat. Argentina's Upsala and Viedma glaciers have been receding for decades. Some parts of Patagonia in the Andes have seen 30-50% reduction in precipitation since the mid-20th century, reducing river flow and threatening water security.

Argentina is the 18th biggest emitter among G20 countries, with the energy sector (led by fossil fuels) contributing 37% of GHG emissions. Argentina's NDC target—not exceeding 349 million tonnes CO2eq in 2030—is rated "Highly insufficient" by the Climate Action Tracker. Electricity generation hit 147 TWh in 2024, still dominated by fossil gas (54%), though wind and solar reached almost 14% of total generation.

Here's where it gets ugly: President Milei doesn't believe in man-made climate change. His administration stated Argentina won't leave the Paris Agreement, but during COP29, Argentina recalled its delegation days into negotiations. The strategy doesn't include new renewable energy targets or significant land sector emission reductions, especially livestock-linked emissions. The political outlook has deteriorated dramatically—Argentina's climate leadership vanished overnight.`,
    economy: `Argentina's inflation hit 211% in December 2023—yes, you read that right. Your coffee that cost 1,000 pesos in January cost 3,000 by December. President Milei's chainsaw economics slashed 15,000 government jobs (growing to 24,000+ by mid-year), achieved Argentina's first federal budget surplus since 2012, and cut subsidies and public works saving $20 billion. Poverty surged to 53% in the first half of 2024 (up from 40% in 2023)—the highest recorded jump in two decades. Poverty peaked at 57% in January before falling to 38.9-39% in Q3.

But here's the twist: bond markets love it. Monthly inflation dropped to 2.4% by November—the lowest in over four years. Remarkably, the Argentine peso appreciated 44.2% against the dollar in 2024, outperforming all other currencies. The peso actually stabilized. Wall Street gets richer while regular Argentines can't afford eggs.

In the first three quarters of 2024, GDP fell 2.1% compared to the same period in 2023, but Argentina emerged from recession after Q3 saw 3.9% growth. Economists now forecast 4.2% expansion in 2025. Unemployment increased, but Milei concluded his first year with 56% approval (up from 52% a month prior). Despite devastating economic hardship, he remains popular.

The November 2024 fiscal package fell short of market expectations—considered insufficient by economists. After approving landmark tax reform in 2023, implementation dragged in 2024, with income tax reform postponed to 2025. Argentina's nominal GDP sits around $600-640 billion, making it South America's third-largest economy after Brazil and Colombia. Agriculture, especially soybeans, wheat, and corn, drives exports. The livestock sector remains crucial, but Milei's administration isn't addressing agricultural emissions. The big question: can Milei's shock therapy deliver sustainable growth, or will it just crush the poor while rewarding speculators?`
  },
  {
    name: "Armenia",
    lat: 40.0691,
    lng: 45.0382,
    climate: `Armenia is highly vulnerable to climate change—floods, droughts, heat stress, hail, and landslides hit regularly. River flow could decrease 8-13% by 2040, 13-27% by 2070, and 20-39% by 2100. That's existential for a country already dealing with water scarcity. Under unmitigated scenarios, Armenia's projected to become substantially drier, with severe drought conditions (SPEI6 index reaching -2) by century's end. Rising temperatures and prolonged droughts are putting massive pressure on water infrastructure, while desertification and land degradation alter landscapes. Forest cover—already low—is shrinking, with 70% of Armenia's forests degraded and turning into grasslands.

Here's the good news: Armenia's making serious renewable energy progress. By 2024, solar energy's share reached 13%, putting the country within reach of its 2030 goal of 15%. Total renewable energy use grew to 32.3% in 2024, up from 27.4% in 2023. Armenia plans to scale up 500 MW of new solar capacity with storage alongside 500 MW of wind power, with renewables set to generate about 50% of electricity by 2030 and 60% by 2040. That's ambitious and achievable.

Armenia's power, heating, and transport sectors rely heavily on imported natural gas from Russia, accounting for two-thirds of the country's GHG emissions. But Armenia adopted updated Nationally Determined Contributions for 2021-2030 under the Paris Agreement, setting an unconditional mitigation target of 40% reduction below 1990 emissions levels by 2030. The country aims for climate neutrality by 2050—a November 2024 World Bank report notes climate action can deliver cleaner air, healthier communities, and stronger economic growth.

The economic impact is real: climate change affecting water and agriculture alone could shrink the economy by up to 3% by 2060 and increase poverty by 2.7 percentage points by 2030. Armenia's stepping up adaptation efforts, but the window for action is closing fast.`,
    economy: `Armenia's economy grew 5.9-6% in 2024, with total output around $26 billion. After averaging 10% growth in 2022-23, real GDP growth slowed to 6.5% in H1 2024 as trade and IT services moderated. Still, that's solid performance driven by strong consumer and government spending, robust IT and construction sectors, and a tech sector that expanded 14.5%. The IT boom is real—Armenia's positioning itself as a regional tech hub.

Inflation stayed remarkably low at 1.5% in December 2024 compared to the previous year, with expectations around 1.0% by end-2024 thanks to lower expected global food prices. That's a massive relief for consumers after years of elevated prices. Unemployment's low, the labor force participation is up, and 2.8 million people have jobs.

Remittances from Russian expatriates account for 70% of total remittances—that's almost 20% of GDP. Armenia's economy is primarily driven by services, mining, agriculture, and diaspora remittances. Total exports were worth $12.90 billion in 2024, while imports hit $15.20 billion. Russia remains by far the most important trade partner, though its market share decreased to 40.6% (exports) and 31.6% (imports). Armenia's trying to diversify trade relationships, but Russian economic ties remain dominant.

The Central Bank estimates GDP growth at 6% for 2024, a slowdown from the explosive 10% average in 2022-23 but still strong. Growth was fueled by the influx of Russian money and migrants fleeing mobilization after the Ukraine invasion. The tech sector continues its impressive rise, and construction remains robust. The big question is sustainability—can Armenia maintain this growth trajectory as the Russian economic situation evolves and regional tensions simmer? The economy's proven resilient, but external shocks remain a constant threat.`
  },
  {
    name: "Australia",
    lat: -25.2744,
    lng: 133.7751,
    climate: `Australia's climate has warmed 1.51°C since 1910, with eight of the nine warmest years on record occurring since 2013. The oceans have heated up 1.08°C on average since 1900. Extreme fire weather is more frequent and intense than in previous decades, with hotter conditions drying out fuel and producing larger, more frequent forest fires, especially in the southeast over the past 30 years. Dangerous fire weather will be more common, and fire seasons will continue to lengthen. In 2024, aerial surveys confirmed severe bleaching in more than 60% of the Great Barrier Reef—one of the planet's most iconic ecosystems is dying in real-time.

Here's the hypocrisy: the average annual carbon content embedded in Australia's fossil fuel exports between 2010-2019 (1,055 megatonnes) was more than double the average annual national emissions over the same period (455 Mt). Australia's pouring hundreds of millions into reef research while simultaneously doubling down on fossil fuel production—even approving four new coal mines in 2023. The government talks climate action while expanding the coal and gas industries that drive climate change.

The good news? Roughly 40% of Australia's main energy grid is now powered by clean energy, and Australians are embracing electric vehicles like never before. Australia's committed to sourcing 82% of electricity from renewables by 2030 and legislated a pathway to net zero emissions by 2050. Solar and wind are exploding, and the economics favor renewables.

But the State of the Climate 2024 report is sobering: Australia's enduring harsher fire seasons, more ocean heatwaves, and accelerating sea-level rise. Increases in temperature severely damage marine habitats and ecosystem health. The 2024 mass coral bleaching event on the Great Barrier Reef confirms the stark reality. Australia's experiencing climate change faster than the global average, and the impacts are intensifying. The country has the resources and technology to lead on climate—it's choosing profits over survival.`,
    economy: `Australia's economy grew just 0.8% annually in the September quarter 2024, a level not seen since December 1991 (excluding COVID). Real GDP per capita fell for seven consecutive quarters during 2023-2024 before a tiny 0.1% increase in December 2024. That's per capita recession—people are getting poorer. The economy's projected to grow 1.3% in calendar year 2024, a significant slowdown. GDP rose 1.3% in 2024-25, driven by private consumption, tourism, and construction, but it's sluggish growth at best.

Inflation moderated to 2.4% in the December quarter 2024, finally within the Reserve Bank's target range. Trimmed mean inflation eased to 3.2% over the year. But core inflation remained at 3.5% in September, with services inflation at 4.6%, indicating persistent domestic pressures. The unemployment rate rose from a post-pandemic trough of 3.4% and remained around 4% through 2024. Employment growth was robust, and the participation rate and employment-to-population ratio hit record highs—more people working, but productivity's lagging.

The mining sector faced significant challenges. Since early 2024, iron ore prices declined 23% and metallurgical coal prices dropped 43%. Below-average global growth and lower Chinese demand affected Australia's mining exports. Demand for commodities remains weak given China's outlook. Despite price declines, mining production grew 2.3% with rises across coal, iron ore, and oil and gas as production rebounded from weather disruptions.

Cost-of-living pressures are brutal. Real per capita household disposable income in Australia fell 8.0% over the two years to March 2024. Food prices rose 11.7% and gas 33.9% since 2022, outpacing wage growth of 3.5% annually. Australians are squeezed. Nominal GDP sits around $1.7 trillion, making Australia one of the world's largest economies, but living standards are declining. The economy's treading water, not thriving.`
  },
  {
    name: "Austria",
    lat: 47.5162,
    lng: 14.5501,
    climate: `Austria's temperature has increased around 3.1°C above pre-industrial levels—significantly higher than the global average. Since the 1980s, warming intensified noticeably at around 0.5°C per decade. Glaciers in the Eastern Alps have lost 52% of their area and more than 60% of their mass within the last 150 years. The glaciers are expected to reduce to less than 20% of their current mass by century's end. That's the death of the Alps as we know them.

Extreme weather events—heatwaves, droughts, heavy rainfall, and mudslides—are increasing in frequency, with significant consequences for health, infrastructure, agriculture, and tourism. Due to more intense heavy rainfall, the risk of mudslides, flooding, and landslides to settlements and infrastructure is rising. Global warming is putting severe pressure on sensitive ecosystems, glaciers, and permafrost in high-altitude areas. Depending on future emissions, snow cover duration at higher elevations is projected to decrease by a further 60-80 days by mid-century.

Austria's government aims for climate neutrality by 2040, ten years ahead of the EU's net-zero target. But the country reduced total GHG emissions by only 25% between 2005-2023, less than the EU average of 30%. Austria's pursuing the goal of reducing GHG emissions in non-ETS sectors by 48% by 2030 compared to 2005, but a May 2024 study by the Federal Planning Bureau indicates Austria's not on track for climate neutrality by 2050 and would miss its 2030 targets with announced measures.

To achieve 100% renewable electricity by 2030, Austria introduced a Renewable Energy Expansion Act in 2021 and dedicates 56% of its €4 billion recovery and resilience plan to climate action. The Renewable Heat Act entered force in February 2024, generally prohibiting fossil fuel-based heat supply systems in new construction. After the September 2024 floods, the EU provided additional funding, bringing total support to €1.5 billion for victims and repairs. Austria's talking a big game on climate, but implementation is lagging behind ambition.`,
    economy: `Austria's real GDP contracted 1% in 2023 and 1.2% in 2024—that's two straight years of recession. The economy's projected to experience its third consecutive year of contraction in 2025. Industrial production declined 5.4% in 2024. The manufacturing sector's been hammered by high energy prices and strongly increasing unit labor costs, devastating cost competitiveness. Economic activity is projected to recover slowly from a two-year contraction, with GDP growing 1.1% in 2025 and 1.4% in 2026.

Inflation fell sharply to 2.9% in 2024 from higher levels in prior years. But in Q1 2025, inflation increased to 3.3% due to a strong increase in retail energy prices, mainly driven by expiring energy relief measures. In 2026, inflation's projected to drop again to 2.1%, averaging 2%, supported by lower energy commodity prices and slowdown of unit labor costs. The unemployment rate's been increasing slowly but steadily since its post-COVID trough of 4.8% in 2022, now expected to peak at 5.3% in 2025. The prolonged recession has affected the labor market—hiring has slowed and joblessness is rising.

The government deficit's projected above 4% of GDP in 2025-2026, and government debt-to-GDP ratio's forecast to remain above 80%. This exceeds the EU's Maastricht criteria threshold of 3%. Travel contributed to improvement in Austria's current account position, indicating tourism remained a positive contributor. Austria's nominal GDP sits around $530-550 billion, making it one of Europe's wealthier economies on a per capita basis, but the economic malaise is concerning.

Brussels serves as a major international center, and Austria benefits from EU membership and trade integration, but the economy's stuck in a rut. The manufacturing decline, high energy costs, and weak external demand are dragging growth down. Austria needs structural reforms to boost productivity and competitiveness, but political will is lacking.`
  },
  {
    name: "Azerbaijan",
    lat: 40.1431,
    lng: 47.5769,
    climate: `Azerbaijan's climate action is rated "Critically insufficient" by the Climate Action Tracker—one of the worst ratings globally. Emissions under current policies are projected to increase 13-28% above 2020 levels by 2030, reaching 81-92 MtCO2e. That's the opposite direction from where the world needs to go. Azerbaijan's economy depends on fossil fuel production, and the government plans to increase fossil gas extraction by more than 30% over the coming decade. Oil and gas account for 45% of GDP, more than half of state tax revenues, and at least 85% of export revenues.

The government's backing contracts with BP and TotalEnergies, ramping up production, particularly the giant new BP oil development in the Caspian Sea which just started "gushing" oil. Renewable sources produced only 7% of Azerbaijan's electricity in 2023, with the government wanting to increase that to 30% by 2030. UAE's Masdar inaugurated a 230 MW solar farm in Garadagh near Baku in October 2023—the largest in the Caspian region—while Saudi Arabia's ACWA Power is constructing a 230 MW wind farm. If the 30% target is met, solar and wind will free up "at least" 5 billion cubic meters of gas for the European market. So renewable energy is mainly about exporting more gas, not reducing emissions.

The Caspian Sea is in environmental crisis. With climate-induced soaring temperatures, the lake's rapidly evaporating, receding by 20 cm per year on average. Pollution from oil drilling and shipping has already severely affected the sea's ecosystem and fish stocks, while changes to water levels—influenced by reduced river flows and higher evaporation—are problematic. The country's prone to droughts and water scarcity, expected to increase in frequency and intensity with extreme weather events. With an average evaporation rate 2.5 times higher than total rainfall, water scarcity is projected to worsen.

COP29 was hosted in Baku in November 2024—the third oil-producing country in a row to host the conference. That tells you everything about where global climate politics stands.`,
    economy: `Azerbaijan's economy saw real GDP increase 4.1% in 2024, up from 1.4% in 2023, driven by 6.2% growth in non-hydrocarbon GDP, particularly in construction, communications, transportation, and hospitality. The non-hydrocarbon sector expanded 8% in 2024, with key growth drivers including construction (+19%), transport (+17%), and hospitality (+15%). That's the diversification everyone's been talking about—except it's not really happening.

The economy shows low diversification, with high dependence on hydrocarbons (50% of GDP, 90% of exports, ~50% of tax revenues). Hydrocarbon exports declined 29% in value in 2024, driven by lower crude oil volumes and a significant drop in natural gas prices. By 2027, the government pledged to double natural gas exports to the EU to 20 billion cubic meters per year compared with the current 10. That's Azerbaijan's strategy: sell more gas to Europe while pretending to care about climate change.

Inflation stabilized at 3.5% in the second half of 2024, significantly lower than double-digit rates in 2022. More recently, inflation reached 4.9% in December 2024, within the CBA target of 4±2%. Nominal GDP reached $74.3 billion in 2024, making Azerbaijan one of the wealthier former Soviet republics.

Imports surged 24%, largely due to public sector activity, including reconstruction efforts and preparations for COP29 in November 2024. The takeover of Nagorno-Karabakh following the lightning attack on Armenia in September 2023 strengthened President Aliyev's authoritarian regime. Azerbaijan's territorial ambitions, including plans for the Zangezur corridor linking its mainland to the Nakhichevan exclave, remain a flashpoint with Armenia. The economy's growing, but it's petrostate growth—temporary, unsustainable, and environmentally destructive.`
  },
  {
    name: "Bahamas",
    lat: 25.0343,
    lng: -77.3963,
    climate: `The Bahamas will lose 10-12% of its territory by 2050 if projected sea level rise is reached—especially in coastal zones where the main tourism assets are located. Over the past 20 years, The Bahamas incurred nearly three times the hurricane-related losses compared to other Caribbean nations, amounting to $6.7 billion, representing over 50% of GDP. Moderate sea-level rise of 1m is projected to cause damage to at least half of tourist resorts, and the tourism industry alone could face annual losses of almost $900 million by 2050. Over the past decade, natural disasters averaged 3.2% of GDP in annual damages.

The Bahamas is a Small Island Developing State with the second-lowest GHG emissions growth in Latin America. The country's highly vulnerable to gradual sea level rise, biodiversity loss, and intensifying hurricanes. Between March and May 2024, floods killed hundreds and displaced over 700,000 across East Africa, showing the global scale of climate disasters, but the Caribbean is particularly exposed.

The archipelago consists of 700 islands and cays, most just a few feet above sea level. Storm surge from hurricanes combined with sea level rise creates existential risk. The Bahamas lies in the Atlantic hurricane belt, and hurricane intensity is increasing with warmer ocean temperatures. Category 5 Hurricane Dorian in 2019 devastated Abaco and Grand Bahama, causing $3.4 billion in damages (25% of GDP) and killing at least 74 people.

Climate adaptation is urgent but expensive. The country needs massive investment in coastal defenses, resilient infrastructure, and economic diversification away from tourism dependence. But as a small island nation with limited resources, The Bahamas faces the cruel reality: those who contributed least to climate change will pay the highest price.`,
    economy: `The Bahamas' economy depends overwhelmingly on tourism—75-80% of GDP and directly or indirectly employs half the population. Real GDP expanded 2.6% in 2023, led by strong tourism growth, and increased 1.8% year-over-year in H1 2024. That's decent growth for a tourism-dependent economy still recovering from COVID-19's devastating impact and Hurricane Dorian's destruction.

Financial services constitute the second-most important sector, accounting for 15-17% of GDP. The Bahamas is an offshore financial center, attracting international banking, insurance, and investment funds. That sector provides high-value employment and diversifies the economy beyond tourism, though it faces increasing international pressure over tax transparency and anti-money laundering regulations.

The challenge is vulnerability. Tourism means the economy's exposed to external shocks—hurricanes, pandemics, global recessions, and increasingly, climate change impacts on beaches, coral reefs, and infrastructure. Hurricane Dorian showed how a single storm can devastate 25% of GDP. The country's geographic dispersion across hundreds of islands makes infrastructure development and disaster recovery expensive.

Nominal GDP sits around $13-14 billion, giving The Bahamas one of the highest per capita incomes in the Caribbean, but inequality is significant. The cost of living is high—imported food, fuel, and goods are expensive. Unemployment remains a concern, particularly youth unemployment. Public debt is elevated, partly due to hurricane recovery spending and COVID-19 support measures.

The Bahamas faces a fundamental dilemma: the economy depends on pristine beaches and marine environments that climate change is destroying. Sea level rise threatens the very assets tourism depends on. The country needs economic diversification, but options are limited for a small island nation with no natural resources beyond sun, sand, and sea—the very things climate change endangers.`
  },
  {
    name: "Bahrain",
    lat: 26.0667,
    lng: 50.5577,
    climate: `Bahrain's one of the hottest places on Earth, and it's getting hotter. Summer temperatures regularly exceed 45°C, and the combination of extreme heat and humidity makes outdoor work nearly impossible for months each year. The kingdom faces severe water scarcity—it's one of the most water-stressed countries globally, relying heavily on desalination plants powered by fossil fuels. Rising sea levels threaten the low-lying island nation, with projections showing significant land loss and saltwater intrusion into freshwater aquifers by mid-century.

Bahrain's climate strategy is complicated by its economy's dependence on oil and gas. While the country's pursuing some renewable energy projects, the scale is tiny compared to hydrocarbon dominance. Extreme weather events—particularly intense heat waves and occasional flash flooding from rare but severe rainfall—are becoming more frequent. The built environment in Bahrain is almost entirely air-conditioned, meaning climate change drives massive energy demand increases, creating a vicious cycle of more fossil fuel consumption and more emissions.

The marine environment surrounding Bahrain is under severe stress. Coral reefs are bleaching, fish populations are declining, and coastal erosion is accelerating. The Persian Gulf is warming faster than the global ocean average, threatening marine ecosystems and the fishing industry. Bahrain's land reclamation projects—adding artificial islands to expand territory—may provide short-term economic benefits but worsen long-term environmental vulnerabilities.

Climate adaptation requires massive investment in water infrastructure, cooling systems, and coastal defenses. But as a small island nation heavily dependent on fossil fuel revenues, Bahrain faces difficult choices. The country signed the Paris Agreement and has emissions reduction targets, but implementation lags behind commitments. Without aggressive action, Bahrain's facing a future of increasingly unlivable heat, water scarcity, and coastal inundation.`,
    economy: `Bahrain's real GDP grew 2.6% year-over-year in 2024 according to preliminary data, with growth anticipated at 3% in 2024 and rising to 3.5% in 2025. The financial sector is the largest contributor to GDP at 17.8% in 2023. As of April 2024, there were 367 financial institutions in Bahrain—the kingdom's the main banking hub for the Persian Gulf and a center for Islamic finance. That's genuine diversification, rare among Gulf states.

Here's the impressive part: the non-oil sector's contribution to GDP reached 86.0% in 2024. The continued expansion and diversification accounted for this increase. Bahrain's economy isn't as oil-dependent as its neighbors, though hydrocarbons still play a significant role in government revenues. Tourism is another important sector, with the country attracting almost 10 times its resident population annually—impressive for a small island nation.

Growth has remained consistent around 3% in recent years, reflecting a relatively mature, diversified economy. The government's focused on developing financial services, tourism, and manufacturing to reduce oil dependence. Bahrain's positioned itself as a regional business hub, offering a relatively liberal business environment compared to some neighbors.

But challenges loom. Public debt is elevated, and fiscal deficits persist despite reform efforts. Youth unemployment remains a concern, and the private sector struggles to create enough high-quality jobs for Bahraini nationals. Subsidy reforms—particularly cutting fuel and electricity subsidies—have been politically difficult. The economy's recovery from COVID-19 has been steady but unspectacular.

Nominal GDP sits around $44-48 billion, giving Bahrain a comfortable middle-income status, but per capita income lags behind wealthier Gulf neighbors like Qatar and UAE. Bahrain's success will depend on continuing diversification, managing fiscal pressures, and navigating regional geopolitical tensions while preparing for a post-oil future that's coming faster than most realize.`
  },
  {
    name: "Bangladesh",
    lat: 23.6850,
    lng: 90.3563,
    climate: `Bangladesh is what climate injustice looks like. The country produces only 0.3% of global GHG emissions yet ranks 9th on the 2024 World Risk Index of countries vulnerable to extreme weather. Two-thirds of the country is less than 15 feet above sea level, 80% is located in a floodplain, and the Bay of Bengal's "funneling" directs cyclones straight toward Bangladesh's coast, making them more intense. It's a geography designed for climate catastrophe.

2024 was brutal. Cyclone Remal in late May struck coastal regions, killing at least 20 people, forcing 800,000 to evacuate, destroying over 35,000 houses, and leaving 2.7 million people without electricity. In October, heavy rains and flooding displaced over 100,000 people and killed at least five. UNICEF reported 18.4 million people affected by floods, including 7 million children. A heatwave caused $24 billion in income losses in 2024—5% of GDP—due to extreme heat undermining labor productivity.

Sea level rise projections are terrifying. Relative sea level rise in the Ganges Delta is projected at 5-10mm/year. In 2024, nearly 14 million Bangladeshis lived less than one meter above sea level, primarily in coastal districts like Satkhira, Khulna, and Barguna. Between 2010 and 2019, Bangladesh faced 185 extreme weather events—heatwaves, tropical cyclones, floods, and droughts—making it the 7th most climate change-affected country in the world.

Here's what nobody wants to say: much of coastal Bangladesh will become uninhabitable this century. Where do 14 million people go? Bangladesh's vulnerability is due to geography (flat, low-lying, delta-exposed) and socioeconomics (high population density, poverty, dependence on agriculture). The country's building defenses and adaptation systems, but the scale of the challenge is overwhelming. Bangladesh champions a $230 billion adaptation plan at climate conferences, while 20 million people in coastal areas are already planning where to move, not if.`,
    economy: `Bangladesh's real GDP growth moderated to 5.2% in FY24, projected to decelerate to 4.0% in FY25, driven by subdued investment and industrial activities, before accelerating to 5.5% in FY26. The ready-made garment sector is the cornerstone—accounting for more than 80% of total exports. The strategy created a sophisticated garment sector employing four million people in 3,500+ factories, exporting $43 billion worth of goods to 167 countries. Bangladesh has the highest number of green garment factories in the world with LEED certification.

But inflation's hovering around 10% with food price inflation at 10.5% annually—the country's in a cost-of-living crisis. Inflation's forecast to accelerate from 9.7% in FY2024 to 10.2% in FY2025 due to stifled competition, inadequate market information, supply chain constraints, and taka depreciation. Remittances continued to grow rapidly, rising 27.6% during July-December 2024. Remittances account for 4.7% of GDP and significantly contribute to consumption and poverty reduction.

Nominal GDP was $451 billion in 2024. During the past decade, Bangladesh grew its economy into the 35th largest in the world, cut poverty in half, and put millions to work. That's remarkable progress, but the economy faces challenges: rising inflation, balance of payment deficits, budget shortfalls, declining foreign exchange reserves, depreciating currency, rising inequality, demand-supply imbalances in energy, and an ailing banking sector crippled by loan defaults.

The middle class is growing, social indicators are improving, but inequality's increasing, particularly in urban areas. The economy's dependent on garment exports, making it vulnerable to global demand shocks. Diversification beyond RMG is slow. Climate change adds another layer of complexity—how do you sustain 5% growth when floods, cyclones, and heatwaves regularly devastate infrastructure and productivity? Bangladesh's economic miracle is real, but maintaining momentum while managing climate, demographic, and structural challenges will test the country's resilience.`
  },
  {
    name: "Barbados",
    lat: 13.1939,
    lng: -59.5432,
    climate: `Under Prime Minister Mia Mottley, Barbados developed a plan to phase out fossil fuels entirely by 2030 and created a national strategy to boost climate resilience called "Roofs to Reefs." That's genuine climate leadership from a small island nation. Barbados lies inside "Hurricane Alley" in the Atlantic Ocean, facing the same existential threats as The Bahamas—sea level rise, hurricane intensification, coastal erosion, and coral reef degradation. The island's low-lying coastal areas are particularly vulnerable, with tourism infrastructure concentrated in zones most exposed to storm surge and flooding.

Barbados is positioning itself as a climate finance innovator. PM Mottley's been a vocal advocate for debt relief and climate finance reform, arguing that small island developing states shouldn't be forced to choose between debt repayment and climate adaptation. Her "Bridgetown Initiative" proposes reforming global financial architecture to provide affordable financing for climate action. It's gained international traction as a pragmatic framework for addressing the climate-debt nexus.

The island's renewable energy transition is ambitious—aiming for 100% renewable electricity by 2030. Solar installations are expanding rapidly, and the government's implementing energy efficiency standards for buildings. But as a tourism-dependent economy, Barbados faces the challenge of maintaining reliable power for hotels and services while transitioning away from fossil fuels.

Climate adaptation efforts include coastal protection, water management systems, and building code upgrades to withstand stronger hurricanes. The "Roofs to Reefs" strategy emphasizes integrated coastal zone management—protecting both built infrastructure and natural ecosystems like coral reefs and mangroves that provide storm protection. Barbados is proving that small island nations can lead on climate action, but the scale of investment required is daunting for an economy with limited fiscal space and high debt levels.`,
    economy: `Barbados' real GDP increased 4% in 2024, driven by strong performances in business services, tourism, construction, and retail trade sectors. Further growth of around 3.9% is projected for 2025. Tourism accounts for one-third of GDP and one-third of employment, with heavy dependency on the UK, US, and Canadian markets. That concentration creates vulnerability—when those economies sneeze, Barbados catches a cold.

Recently, offshore banking and financial services have become an important source of foreign exchange and economic growth. Barbados registered a record level of gross international reserves—$3.2 billion, equivalent to 31.2 weeks of import cover. This reflects strong net foreign exchange inflows from higher tourism receipts and tax revenue generated by the global business sector. That's impressive reserve accumulation for a small island economy.

The government successfully completed an IMF program and undertook significant fiscal reforms. Public debt has been reduced from unsustainable levels, though it remains elevated. The reforms included restructuring domestic debt, improving tax administration, and rationalizing spending. The fiscal consolidation was painful—public sector wage freezes, spending cuts, and tax increases—but necessary to avoid a debt crisis.

Nominal GDP sits around $5.4-5.7 billion, giving Barbados one of the Caribbean's highest per capita incomes, though cost of living is high. The economy's relatively diversified for a small island—tourism, financial services, light manufacturing, and professional services all contribute. But the fundamental challenge remains: how do you sustain growth and prosperity on a small island with limited resources, high costs, and exposure to climate shocks?

Barbados' success will depend on maintaining fiscal discipline, further developing high-value services, and managing climate risks that threaten the tourism industry. The island's leveraging its reputation for stability, good governance, and business-friendly policies to attract investment. But in a world of rising sea levels and intensifying hurricanes, geography may be destiny.`
  },
  {
    name: "Belarus",
    lat: 53.7098,
    lng: 27.9534,
    climate: `Belarus ranks 56th in the 2025 Climate Change Performance Index, falling nine ranks and performing as a very low overall performer. The country receives medium ratings for GHG Emissions and Energy Use, but very low ratings for Renewable Energy and Climate Policy. Belarus hasn't expressed a commitment to climate neutrality and only has fragmented climate policies. Its goal is to reduce GHG emissions by at least 35% by 2030 compared to 1990 levels, which experts say isn't ambitious enough.

Belarus's electricity mix includes 59% gas, 36% nuclear, and 1% biofuels. The country doesn't use coal but relies heavily on gas and oil, importing 84.8% of primary energy supplies mainly from Russia. In 2021, a dramatic shift occurred with a massive increase in nuclear electricity generation by 5.4 TWh, followed by highs in 2023-2024. Belarus lags far behind in expanding renewable energy, with about 97% of renewable energy from biomass (mainly wood fuel) in 2024. CCPI experts point to low diversification of imported energy resources, high reliance on fossil fuels, and delayed climate action as key issues.

Here's the lasting nightmare: an estimated 70% of Chernobyl fallout fell on Belarus, affecting hundreds of thousands of people. Contaminating 23% of the country's territory, the disaster caused $13.7 billion in lost economic opportunities and erased 470 villages forever. As climate change turns Belarus's forests and peatlands into tinderboxes, wildfires in Chernobyl-affected areas pose particular risk—trapped radionuclides are released back into the atmosphere, contaminating air, soil, and crops. Radiation levels spiked 16 times above normal due to fires in 2020.

Belarus faces environmental challenges due to climate change such as extreme weather, deforestation, and water issues. But the authoritarian Lukashenko regime prioritizes political control over environmental protection. International isolation following the 2020 crackdown and support for Russia's Ukraine invasion means limited access to climate finance and technology transfer. Belarus is stuck—neither moving forward on climate action nor able to access international support.`,
    economy: `Belarus had nominal GDP of $75.3 billion in 2024. The economy expanded 1.6% year-over-year in January-September, decelerating from 2.1% in January-June, though Q2 2024 saw 5.5% GDP growth driven by investment, consumer demand, and Russia's performance. Manufacturing production—around 25% of GDP—swung into contraction, likely curbed by Western sanctions and a decelerating Russian economy.

Western sanctions following the 2020 political crackdown and Belarus's support for Russia in the Ukraine war have severely impacted trade and investment. Many foreign companies have exited Belarus. President Lukashenko labeled the sanctions "economic terrorism." The Presidential election scheduled for 2025 should result in Lukashenko's re-election for a seventh term—Belarus is a dictatorship in all but name.

The Belarusian government decided to keep prices from soaring by returning to Soviet-era price regulation. The state began regulating prices for hundreds of goods in October 2022. That's not economic policy—it's central planning. Inflationary pressures remain a key concern, with annualized inflation reaching 6.1% in Q2 2024. Inflation's projected to remain elevated at 5-7% in 2024, potentially accelerating to 6-9% by 2025.

Inflation has driven up costs of basic goods including food, fuel, and medicine, with widespread hardship in rural areas. The Belarusian ruble has lost significant value against foreign currencies, exacerbating purchasing power decline and increasing poverty rates. Of the country's roughly $17.0 billion in external debt, about 65% is owed directly to Russia or Russia-controlled entities.

While Russia provides economic assistance, long-term growth prospects are constrained by isolation from Western financial systems and markets. More than 40% of Belarusians are engaged in subsistence agriculture. Belarus is stuck in a dead end—economically dependent on Russia, politically isolated from the West, and governed by an aging autocrat with no succession plan. The economy's not collapsing, but it's not growing either—it's just surviving.`
  },
  {
    name: "Belgium",
    lat: 50.5039,
    lng: 4.4699,
    climate: `A May 2024 study by the Federal Planning Bureau indicates Belgium's not on track for climate neutrality by 2050 and would miss its 2030 target under the Effort-sharing Regulation. In 2023, Belgium accounted for 3.5% of EU net GHG emissions and reduced net emissions by 29.3% between 2005-2023, just below the EU average reduction of 30.5%. A court ruling ordered the federal government, Brussels, and Flanders to accelerate emissions reductions to help reduce Belgium's GHG emissions by at least 55% from 1990 levels by 2030.

In October 2024, the Commission launched an infringement procedure against Belgium and 12 other Member States that missed the June 2024 deadline for submitting the final updated national energy and climate plan. Renewable energy sources account for roughly 25% of Belgium's energy mix, but regulatory rules have slowed development of more renewable energy capacities.

Extreme precipitation events are projected to become more frequent, with heavy winter rainfalls and summer thunderstorms escalating flood risk. In Brussels, climate change effects are already very real, including flooding and heat islands. Experts demand a more ambitious NECP in line with EU net zero targets and for Belgium to have a climate adaptation and resilience plan ensuring flood protection, water management, and urban resilience.

For Brussels-Capital Region, according to its Air Climate and Energy Plan adopted in April 2023, the city set ambitious targets: reduce GHG emissions by at least 55% by 2030 and contribute to carbon neutrality by 2050 (from 2040 for public buildings). Belgium dedicates 56% of its €4 billion recovery and resilience plan to climate action, but implementation lags.

Belgium's climate challenge is political fragmentation—the country has multiple governments (federal, regional, community), and coordinating climate policy across jurisdictions is difficult. Add in coalition politics, linguistic divisions, and you get a recipe for slow progress. Belgium has the resources and technology to lead on climate—it's lacking political cohesion.`,
    economy: `Belgium's economy grew 1% in 2024, mainly supported by strong private consumption despite weakened purchasing power. Belgium's nominal GDP reached $665 billion in 2024. The economy's largely oriented toward services, with the tertiary sector accounting for 71.1% of GDP and employing 79% of the active population. Despite declining contribution in recent years, manufacturing remains important, accounting for 11% of GDP.

Brussels serves as headquarters of the European Union and NATO, making Belgium an important center for international governance and diplomacy. Brussels, the hub of several European institutions, numerous diplomatic representations, and different interest groups, has essentially based its economy on services. That EU/NATO presence brings significant economic benefits—international civil servants, diplomats, lobbyists, consultants, and associated services.

Belgium maintains an open economy highly dependent on international trade. Total exports were worth $551.40 billion in 2024, while imports were $521.60 billion. That's a healthy trade surplus. Belgium's geographic position at the heart of Europe, excellent transport infrastructure (particularly the port of Antwerp), and multilingual workforce make it an attractive location for logistics and distribution.

But fiscal challenges loom. In 2024, the government budget deficit increased to 4.5% of GDP. General government gross debt stood at 104.7% of GDP at end-2024. This exceeds the EU's Maastricht criteria. Belgium's facing the same demographic pressures as other wealthy European countries—aging population, rising healthcare and pension costs, and sluggish productivity growth.

The political situation is complex—Belgium went 541 days without a federal government after the 2019 elections, a world record. Coalition negotiations are tortuous due to linguistic and regional divisions. The economy keeps chugging along despite political dysfunction, testament to Belgium's strong institutions and integrated European economy. But long-term fiscal sustainability requires political cooperation that's been elusive.`
  }
];

async function main() {
  console.log('Starting to insert climate and economy writeups for countries A-B (Part 1: First 15)...\n');

  let successCount = 0;
  let errorCount = 0;

  for (const country of countries) {
    // Insert climate writeup
    try {
      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'climate',
          summary: country.climate,
          issues: '[]',
          topStories: '[]',
          storyCount: 0
        }
      });
      console.log(`✓ Inserted climate writeup for ${country.name}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Error inserting climate writeup for ${country.name}:`, error);
      errorCount++;
    }

    // Insert economy writeup
    try {
      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'economy',
          summary: country.economy,
          issues: '[]',
          topStories: '[]',
          storyCount: 0
        }
      });
      console.log(`✓ Inserted economy writeup for ${country.name}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Error inserting economy writeup for ${country.name}:`, error);
      errorCount++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Successfully inserted: ${successCount} writeups`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Total countries processed: ${countries.length}`);

  await prisma.$disconnect();
}

main()
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
