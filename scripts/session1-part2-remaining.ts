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
    name: "Belize",
    lat: 17.1899,
    lng: -88.4976,
    climate: `Belize lost 13% of primary forest from 2002-2023 (148,000 hectares), battling hurricanes, flooding, sea-level rise, coral bleaching, and droughts. May 2024 wildfires from extreme temperatures and prolonged dry spells devastated Maya community forests and agricultural lands. Belize is particularly vulnerable—extensive low-lying coastal areas, reliance on natural resources, tourism and fishing depending on healthy marine ecosystems.

The Belize Barrier Reef, UNESCO World Heritage Site, faces existential threat from rising ocean temperatures, ocean acidification, and coastal development. Coral bleaching events becoming more frequent and severe. Without aggressive action, much of the reef could be lost this century, devastating tourism industry and coastal protection. Climate change directly threatens the natural capital that Belize's economy depends on.`,
    economy: `GDP grew 3.5% in 2024, though activity began moderating in 2025 as tourism and agriculture slowed. Growth projected 1.5% in 2025, medium-term growth expected above 2% as tourist arrivals pick up. About 15% of Belizeans lived on less than $8.30/day in 2024 (2021 PPP), 22% multidimensionally poor—higher in rural areas and among Mayan communities. With continued growth and low inflation, poverty projected to edge down to ~15% in 2026.

Tourism and agriculture drive the economy, but both sectors vulnerable to climate shocks. Belize's geographic position exposes it to Caribbean hurricanes that can devastate infrastructure and tourism in a single season. The challenge is economic diversification while protecting environmental assets.`
  },
  {
    name: "Benin",
    lat: 9.3077,
    lng: 2.3158,
    climate: `Benin faces increasing climate vulnerabilities common across West Africa—changing rainfall patterns, floods, droughts, coastal erosion. Knowledge-to-action project supports resilience of local communities and ecosystems through complementary use of Indigenous knowledge and modern forest-protection techniques. Climate variability affecting agricultural productivity and water availability.

The country's coastal zone particularly vulnerable to sea level rise and storm surge, threatening major economic centers including Cotonou, the commercial capital. Agriculture—backbone of Benin's economy—faces increased variability in rainfall, making crop production increasingly uncertain. Cotton, major export crop, highly sensitive to weather patterns.`,
    economy: `In 2024, economic activity grew 7.5%, boosted by infrastructure investments and regional trade. With completion of key investment projects, rising exports, and tourism, current account deficit expected to narrow to 4.3% by 2027. That's impressive growth for West African nation, driven by government investment in ports and transport infrastructure positioning Benin as regional trade hub.

Challenge is translating growth into poverty reduction and shared prosperity. Much of population remains dependent on subsistence agriculture, vulnerable to weather shocks and price volatility. Benin benefits from strategic location between Nigeria and French-speaking West Africa, but needs to upgrade human capital and business environment.`
  },
  {
    name: "Bhutan",
    lat: 27.5142,
    lng: 90.4336,
    climate: `Bhutan's the most net negative carbon emission country globally—small Himalayan kingdom with 60% forest cover that absorbs more CO2 than it emits. That's extraordinary. But country faces climate vulnerabilities including greater risk of forest fires from drought combined with more frequent lightning, possible loss of endemic plant and animal species, changes in migratory patterns of transboundary wildlife.

WWF launched Project Finance for Permanence initiatives in Bhutan for long-term conservation. Challenge is maintaining carbon-negative status while developing economically and managing glacial lake outburst floods (GLOFs) that threaten downstream communities. Bhutan's climate success story shows development and environmental protection can align.`,
    economy: `Economy grew 5.3% in FY23/24, supported by tourism recovery and non-hydropower industry growth. Projected to grow 7.2% in FY24/25, driven by industry sector due to jump in electricity production from hydropower plants and increases in mining, manufacturing, forestry. Extreme poverty based on $2.15/day eliminated by 2022, poverty decreased from 39.5% to 8.5% between 2017-2022. That's remarkable progress.

But youth unemployment stood at 19% in 2024—concerning figure for young population. Subsistence agriculture sector employs over 40% of labor force. Tourism-related services growth expected as tourist arrivals return to pre-COVID levels. Bhutan's pursuing "Gross National Happiness" over GDP growth, prioritizing sustainable development and cultural preservation. Hydropower exports to India crucial revenue source.`
  },
  {
    name: "Bolivia",
    lat: -16.5000,
    lng: -68.1500,
    climate: `Bolivia's most vulnerable country to climate crisis in South America. Tropical glaciers melting 10 times faster than cumulative global average—Bolivia's glaciers lost 40% (Apolobamba), 27% (Tres Cruces), 37% (Real) between 1980-2010. Climate change intensifies water vulnerabilities, causing alarming glacier retreats impacting critical water supplies for cities, increasing frequency and severity of droughts and floods.

When government declared 2023-2024 "extreme agricultural drought year", marked third consecutive such year. Crop yields plummeted, 10%+ faced food problems, production only 6% of national cereal demand (300,000 metric tonnes). February 27, 2024, Acre River in Cobija exceeded historical maximum, flooding 16 urban sectors and three rural communities. Water demand projected to rise 15-36% by 2036, 92% from agriculture.`,
    economy: `Economy contracted 2.0% Q1, 2.8% Q2 2024, natural gas output dropping ~20% year-on-year H1, political turmoil weighing on activity. Real GDP projected contract 0.5% with annual inflation reaching 30% in 2025. Late 2024 inflation 9.97%, projected 20% in 2025. November 2024 government signed landmark $1B agreement with China's CBC consortium to build two lithium carbonate plants in Uyuni salt flats—35,000 metric tons annual capacity. Bolivia's lithium resources estimated 23 million tons.

Oil revenues fell to $2B from $3B, natural gas exports to Argentina/Brazil decreased significantly. Bolivia imports 50%+ gasoline, 86% diesel. Nearly 40% below poverty line. Fiscal deficit ~10% GDP in 2024, half from fuel subsidies. Unsuccessful military coup June 2024. President Arce faces weakened fiscal finances, growing scarcity of fuel and US dollars.`
  },
  {
    name: "Bosnia and Herzegovina",
    lat: 43.9159,
    lng: 17.6791,
    climate: `Floods account for 90%+ of climate damages. Bosnia needs invest $6.8B over next decade for protection. By 2050, climate damages could shrink economy by 14%. November 2024 World Bank report emphasizes investments in resilience, renewable energy transition, regulatory reforms. Transitioning from coal to renewables critical but challenging given economic dependence on lignite.

Climate events like floods, wildfires accelerating. Country vulnerable to extreme precipitation, river flooding, landslides. Private sector expected to account for nearly 90% of investment needed to achieve net-zero by 2050 in line with EU objectives. Political fragmentation complicates coordinated climate action.`,
    economy: `Nominal GDP $29.8B in 2024, average real GDP growth 3% over last decade. Inflation slowed to 1.7% in 2024 from 6.1% prior year. Diaspora remittances account for 10% GDP—crucial economic lifeline. Economy dependent on remittances, aluminum/steel exports, agriculture, services.

Complex political structure (two entities, three constituent peoples) creates governance challenges. Economy recovering from 1990s war legacy but faces brain drain, high unemployment, corruption. EU integration process slow. Services sector growing, manufacturing struggling with competitiveness. Youth unemployment major concern pushing emigration.`
  },
  {
    name: "Botswana",
    lat: -22.3285,
    lng: 24.6849,
    climate: `Third consecutive drought year declared 2023-2024. Crop yields plummeted, 10%+ population faced food/nutrition problems. Production estimated only 6% of national cereal demand (300,000 metric tonnes). 2025 brought above-average rainfall, resulting in flooding across much of country—climate whiplash from drought to floods.

November 2024 President Duma Boko pledged: "We will invest in renewable energy projects such as solar, wind, bioenergy, reducing reliance on fossil fuels." Climate change threatening wildlife tourism, water security, agricultural productivity. Okavango Delta, major tourist attraction, vulnerable to changing rainfall patterns.`,
    economy: `Economy contracted 3% in 2024 due to diamond market collapse. Economic growth expected slow to 1% in 2024 primarily because diamond market contraction. Inflation eased to ~2.1% in 2025. Botswana facing severe slowdown from diamond market contraction 2023-2024, reflecting weaker global demand and sharp increase in inventories. Economic outlook highly uncertain with emergence of cheaper lab-grown diamonds.

Diamonds traditionally drove prosperity—now threatened by structural shifts. Unemployment around 4%, but youth unemployment much higher. Government committed to economic diversification beyond diamonds, developing tourism, financial services, beef exports. Botswana maintained strong institutions, prudent fiscal management, but diamond dependence creates vulnerability.`
  },
  {
    name: "Brazil",
    lat: -14.2350,
    lng: -51.9253,
    climate: `Deforestation dropped 31% from August 2023-July 2024 vs same period prior year—initial reports indicate 36% decrease in primary forest loss 2023 vs 2022 due to strengthened law enforcement. But 2024 saw devastating floods, droughts, fires burning 29M+ hectares of forests/vegetation nationwide as of November. "Devastating floods, drought, fires plagued Brazil in 2024 are reminder of environmental and human rights toll of extreme weather exacerbated by climate change"—Human Rights Watch.

Renewable energy sources—primarily hydropower, growing wind/solar—comprise 89.1% of electricity mix, nearly half of energy mix. Brazil's new climate pledge launched at COP29 aims cut GHG emissions by as much as two-thirds by 2035 vs 2005 levels. Updated NDC commits reducing emissions 53% below 2005 levels by 2030, net zero by 2050. But Lula plans invest ~$47B in fossil fuels by 2026, including new oil/gas production near Amazon River mouth.`,
    economy: `Economy grew 3.4% in 2024, largest expansion since 2021, driven by robust consumption, strong labor market, fiscal transfers, recovering investments. Unemployment hit record low 6.2%—2.8M jobs created. Inflation rose to 4.8% in October, official rate expected reach almost 5%, above upper threshold 4.5% tolerance range.

Agricultural production expected decline 5.5% in 2024 vs 2023 due to excessive rainfall in South, drought from North to Southeast. January-November 2024 agribusiness exports totaled $152.63B, representing 48.9% of country's total exports. Poverty fell from 21.7% (2023) to 20.9% (2024). Brazil decreased extreme poverty 40% in first year current administration. Nominal GDP ~$2.1 trillion, making Brazil Latin America's largest economy.`
  },
  {
    name: "Brunei",
    lat: 4.5353,
    lng: 114.7277,
    climate: `Emissions policy aims 50%+ reduction by 2035. In last ten years since 2021, CO2 emissions stayed around 17M tonnes. Flooding threatens low-lying areas from sea level rise and heavy rains. Renewable energy target 30% of total capacity by 2035. Ministry of Energy pledged build large-scale photovoltaic solar plants with 100 MW capacity by 2025.

Sultanate aspires increase renewable energy share to 30% of total capacity for power generation by 2035. Climate change bringing more intense rainfall events, threatening drainage systems in urban areas. Small, wealthy oil state beginning energy transition but pace slow given fossil fuel revenues.`,
    economy: `Economy grew 4.2% in 2024—fastest expansion since 1999, driven by strong rebound in both upstream and downstream oil & gas sectors. Inflation projected stay broadly unchanged at average 0.5% in 2024. Headline inflation declining since 2023, turning negative last year, expected remain low averaging just under 1% in 2025-26.

Oil & gas sector contributes 88% of Brunei's fiscal revenues. Economy expanded strong 4.2% growth rate 2024 primarily driven by recovery of oil/gas sectors. Nominal GDP ~$16B. Challenge is economic diversification beyond hydrocarbons. Government investing in downstream industries, tourism, Islamic finance. Sovereign wealth fund provides buffer, but long-term sustainability requires moving beyond oil dependence.`
  },
  {
    name: "Bulgaria",
    lat: 42.7339,
    lng: 25.4858,
    climate: `Most carbon-intensive EU economy in 2023. Coal accounts for 27.6% of electricity generation. October 2023 Bulgaria revised climate neutrality roadmap, allowing coal-fired power plants operate without restrictions until at least 2038—experts demand 2030 phase-out. Support continues for oil/gas exploration in Black Sea.

September 2024-August 2025, more than two-thirds (67.27%) of Bulgaria's electricity came from clean energy: nuclear 40.38%, solar 16.52%, wind 3.44%. Renewable energy had 20% share in final energy consumption 2023. November 2024 Commission informed national authorities some key measures not yet fulfilled satisfactorily. Toward 2100, severe summer droughts likely occur every year, catastrophic floods frequency could increase 2-4x.`,
    economy: `GDP growth accelerated to 2.8% in 2024, up from 1.9% in 2023. Despite underperformance of exports, strong domestic consumption (household and government) propped up growth. Inflation eased to 2.6% in 2024, thanks to lower food/energy prices. Headline inflation rate continued slow from 5.8% October 2023 to 1.8% October 2024. Bulgaria met corresponding Maastricht criterion 2.7% in February.

Unemployment around 4% in 2024—labour market remained tight. All criteria for euro adoption met except inflation target. Authorities aiming January 2025 for eurozone membership, potentially moving to July 2025. Partial entrance to Schengen area March 2024 via air/seaports. July 1, 2024 Bulgaria became high-income economy, though remains poorest EU member state.`
  },
  {
    name: "Burkina Faso",
    lat: 12.2383,
    lng: -1.5616,
    climate: `At risk to droughts, floods, epidemics, heat waves, wind storms, insect infestations. Eastern and southwestern parts generally having more favorable weather increasingly hit by high temperatures and pockets of drought. Climate variability affecting agriculture—backbone of economy where 80% engaged in farming.

Sahel region experiencing desertification, reduced rainfall, higher temperatures. Since 2015 insecurity killed several thousand, displaced 2M+ Burkinabes. Climate stress compounds security crisis as resource scarcity fuels conflict over land, water. Almost half territory remains outside government control.`,
    economy: `Growth projected 4.1% in 2024, 4.3% in 2025, underpinned by rising extractive and agricultural production. However sectors remain dependent on domestic security and sociopolitical climates. Poverty rose from 41.4% (2018) to 43.2% (2021). More than 40% Burkinabe live below poverty line, 80% population engaged in agriculture—mostly subsistence.

Extreme poverty rate expected decline from 37.5% (2024) to 34.2% (2025). Since 2015 insecurity killed thousands, displaced 2M+. Almost half territory outside authorities' control. Economy struggling under twin pressures of jihadist insurgency and climate shocks. Gold mining provides revenues but benefits don't reach poor.`
  },
  {
    name: "Burundi",
    lat: -3.3731,
    lng: 29.9189,
    climate: `Between March-May 2024, floods killed hundreds, displaced 700K+ across East Africa including Burundi. Frequent floods and droughts affecting agriculture-dependent population. Climate impacts exacerbate existing vulnerabilities in one of world's poorest nations.

Burundi faces soil erosion, deforestation, habitat loss threatening biodiversity. Lake Tanganyika water levels and fish stocks affected by climate variability. Nearly entire population dependent on rain-fed agriculture, making climate variability existential threat.`,
    economy: `Burundi lacks natural resources, scarred by civil war 1993-2005. ~80% of ~13.7M citizens rely on subsistence agriculture. GDP per capita barely exceeds $240. While growth moderately picked up, inflation projected reach almost 40% this year. Close to 75% population in extreme poverty.

Burundi among world's least developed countries. Political instability, ethnic tensions continue. Remittances from diaspora provide crucial lifeline. Coffee main export but vulnerable to price fluctuations. Economy essentially at subsistence level with minimal formal sector.`
  },
  {
    name: "Cambodia",
    lat: 12.5657,
    lng: 104.9910,
    climate: `Ranked 17th most vulnerable country globally by Global Climate Risk Index 2025. Increases in frequency of floods, droughts, windstorms costing 10% GDP in 2015. Frequency/intensity of flooding and drought across Mekong River Valley and Tonle Sap basin increased. Lower Mekong experienced severe droughts 2009-10, 2015-16, 2019-21, 2023-24.

Cambodia ranks world's 4th most flood-exposed country, floods affecting 80% population along Mekong and Tonle Sap floodplains. Droughts affect 30% farmland, cause 36% crop losses. Climate change projected exacerbate flooding/drought risks, decrease GDP by as much as 10% by 2050. GHG emissions increased 285% between 1994-2016, Forest/Other Land Use sector biggest emitter driven by deforestation. Target halving deforestation rate by 2030, net zero by 2050.`,
    economy: `Economy projected expand 5.5% in 2024 driven by strong rebound in garment/agricultural exports, ongoing recovery in tourism. GDP per capita forecast hit $2,071 in 2024, up from ~$1,917 in 2023. Garment/Footwear/Travel goods exports rose 16.9% year-on-year H1 2024, rebounding from 18.6% decline same period prior year.

PM Hun Manet said poverty rate remarkably dropped from 33.8% to 17.8%. Country targets upper middle-income status by 2030, high-income status by 2050. Agriculture and tourism steadily gaining ground, continued FDI inflows fueling economic momentum. Real estate/construction undergoing correction. Nominal GDP ~$32B. Challenge is diversifying beyond garments, managing Chinese debt.`
  },
  {
    name: "Cameroon",
    lat: 7.3697,
    lng: 12.3547,
    climate: `Northern regions in desert/semi-arid areas most vulnerable, exposed to droughts and desertification. Central and coastal regions experience heavy rainfalls and floods often taking lives, damaging vital infrastructure. South Cameroon least affected by climate events, but deforestation and mining activities undermine conservation efforts of Congo Basin—world's second largest carbon sink.

Climate change affecting all ten regions differently—North faces Sahel-type drought, South faces Congo Basin deforestation pressures, coastal areas vulnerable to sea level rise and erosion. Agricultural productivity threatened by changing rainfall patterns.`,
    economy: `Real GDP grew 3.5% in 2024, up from 3.2% in 2023, supported by better cocoa prices, higher cotton yields, improved electricity for industry. GDP worth $51.33B in 2024. GDP per capita $1,467, surpassing pre-pandemic levels but not matching 1986 high of $1,980. Average growth 2021-2024 just 3.4%, well below 6.6% target set by National Development Strategy.

Inflation fell from 7.4% December 2023 to 4.5% end-2024, 4.1% mid-2025, projected reach 3% by 2027. 23% population below extreme international poverty line. Poverty rates stagnated since 2001, rapid population growth pushed extreme poverty above 6.6M in 2023. Paul Biya (92 years old) President since 1982, running for eighth term October 2025. Anglophone Crisis since September 2017 displaced 1M+ internally. Conflicts affecting 9 of 10 regions.`
  },
  {
    name: "Canada",
    lat: 56.1304,
    lng: -106.3468,
    climate: `Emissions in 2024 estimated 694 megatonnes CO2-equivalent, essentially unchanged from 2023. Emissions trends indicate 2030 target now out of reach given weakening policy momentum. Oil/gas emissions rose 1.9% from previous year, driven by 3.4% increase in oil sands emissions. Oil sands operations increased 800%+ since 1990, accounting for 80% of total crude oil production growth.

Canada facing intensifying impacts—second worst wildfire season 2025, second only to 2023. Emissions from 2023 Canadian wildfires reached 647M metric tons carbon—if fires were country, they'd rank 4th-highest emitter. Removal of consumer carbon price in 2025 under PM Mark Carney marks significant setback. Arctic warming faster than any area, Canada warming twice average global rate, three times in North.`,
    economy: `Real GDP growth projected 1.1% in 2024 following modest growth 2023. GDP growth strengthened H1 2024, increasing 0.5% Q2 after rising 0.4% Q1. Real GDP per capita Q2 was 2.8% below pre-pandemic baseline—significant concern for living standards. CPI inflation 1.8% in December, Bank of Canada's preferred core inflation measures CPI-median/CPI-trim 2.4%/2.5%.

Housing affordability reached worst levels in generation—mortgage interest rates, rents, prices all elevated. Housing investment continued decline since beginning 2022. Unemployment rate risen to 6.5% in October, expected average 6.4% (2024), 6.7% (2025). Youth and newcomers most affected. Monetary policy started ease June 2024, benchmark policy rate projected decline to 2¾% by H2 2025. Nominal GDP ~$2.2 trillion.`
  },
  {
    name: "Central African Republic",
    lat: 6.6111,
    lng: 20.9394,
    climate: `One of world's most vulnerable nations to climate change according to latest climate vulnerability index 2022. Among top 10 world's most vulnerable countries (Chad, CAR, Eritrea, Guinea Bissau, DRC, Sudan, Niger, Afghanistan, Liberia, Somalia)—nine in Sub-Saharan Africa. Faces severe climate impacts despite minimal contribution to global emissions.

CAR experiences both droughts in north and flooding in south. Climate variability affecting agriculture which employs vast majority of population. Deforestation driven by charcoal production, shifting cultivation undermining forest carbon stocks. Conflict compounds climate vulnerability—displaced populations more exposed to climate shocks.`,
    economy: `Close to 75% population in extreme poverty (73.9%). High levels of violent conflict since 2013 coup. GDP per capita (PPP) $843 in 2019. CAR classified one of world's least developed countries, ranked second to last globally after Burundi on UN Human Development Index.

Minerals including diamonds, gold, uranium present but extraction hampered by insecurity, poor infrastructure, corruption. Agriculture employs 70% population but remains subsistence level. Economy essentially collapsed—formal sector minimal, most economic activity informal. International peacekeepers present but violence continues. One of world's most tragic humanitarian situations.`
  }
];

async function main() {
  console.log('Starting to insert PART 2 climate and economy writeups (remaining 15 countries)...\n');

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
