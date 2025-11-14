import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

const WRITEUPS = [
  { name: 'Armenia', lat: 40.0691, lng: 45.0382, summary: `Armenia's energy system faces the challenge of near-total import dependence in a geopolitically constrained position. This landlocked nation in the South Caucasus relies overwhelmingly on imported natural gas from Russia and nuclear power from a Soviet-era reactor, creating strategic vulnerabilities that drive efforts toward renewable diversification.

Natural gas dominates, comprising about 70% of primary energy consumption. Armenia imports virtually all gas via a single pipeline from Russia through Georgia, creating dependence on Moscow. Gazprom controls much of Armenia's gas infrastructure through the ArmRusGazprom joint venture. Electricity generation totals approximately 3 GW installed capacity. The Metsamor nuclear plant, a Soviet VVER-440 reactor commissioned in 1980, provides roughly 30% of electricity—making Armenia one of the few countries in the Caucasus with nuclear power. Metsamor has operated decades beyond its original design life, raising safety concerns, though Armenia insists upgrades have addressed risks. Plans exist to build a new nuclear plant, but financing and site selection remain unresolved.

Hydropower provides about 30% of electricity through cascades on the Vorotan, Hrazdan, and other rivers. Seasonal variations create winter shortfalls when Armenia increases thermal generation and electricity imports.

Armenia lacks fossil fuel reserves, making energy independence impossible in conventional terms. However, solar and wind potential offer paths toward reducing import dependence. Armenia receives abundant sunshine, particularly in southern regions. Solar capacity has grown but remains small. Government targets aim for 30% renewable electricity by 2025, though progress lags.

Energy prices are politically sensitive. Residential tariffs have risen following pressure to eliminate subsidies, sparking protests. The 2015 "Electric Yerevan" demonstrations were triggered by proposed electricity price hikes.` },
  { name: 'Australia', lat: -25.2744, lng: 133.7751, summary: `Australia is an energy superpower blessed with abundant fossil fuels and renewable potential, yet the country's energy transition has been politically fraught and operationally challenging. Australia is the world's largest coal exporter and a top LNG exporter while simultaneously pursuing ambitious renewable energy deployment—a tension that defines its energy politics.

Australia's energy mix reflects its resource wealth. Coal provides about 50% of electricity generation, down from over 75% a decade ago. Natural gas contributes roughly 20% of electricity and dominates household heating. Oil is mostly imported despite domestic production. Australia produces approximately 350,000 bpd of crude but consumes over 1 million bpd, importing the difference primarily from Asia and the Middle East.

Coal and LNG exports are economic pillars. Australia exports over 300 million tonnes of thermal and metallurgical coal annually, primarily to Japan, South Korea, China, and India. LNG exports from projects in Queensland, Western Australia, and the Northern Territory total over 80 million tonnes per year, making Australia one of the world's largest exporters alongside Qatar and the United States.

Renewable energy has surged. Solar and wind now comprise over 35% of electricity generation. Rooftop solar penetration is among the world's highest—over 30% of Australian homes have panels. Utility-scale solar and wind farms are being built across Queensland, New South Wales, and South Australia at rapid pace. South Australia occasionally runs on 100% renewables for extended periods.

However, the transition creates challenges. Coal plant closures have sometimes preceded replacement capacity, causing price spikes and reliability concerns. The 2016 South Australian blackout became a political flashpoint, with conservatives blaming renewables (though investigations cited transmission failures). Battery storage is expanding—Tesla's "big battery" in South Australia demonstrated grid-stabilization potential.

Energy policy has been a political battleground for two decades, with bitter disputes over carbon pricing, renewable targets, and coal's future preventing coherent long-term planning. The result is investment uncertainty despite Australia's extraordinary renewable potential.` },
  { name: 'Austria', lat: 47.5162, lng: 14.5501, summary: `Austria exemplifies the European energy transition: a wealthy democracy with strong environmental commitments pursuing decarbonization while managing dependence on imported fossil fuels. Austria's energy system is notable for high renewable electricity share, ambitious climate targets, and exposure to European gas market dynamics that became acute during the Russia-Ukraine crisis.

Austria's electricity generation is remarkably clean—approximately 75% from renewables, predominantly hydropower. The Alps provide abundant hydro resources exploited through run-of-river and storage dams. Iconic facilities like the Kaprun and Kölnbrein dams generate baseload and peaking power. Austria also has substantial biomass cogeneration, particularly in forestry regions, and growing wind and solar capacity in eastern lowlands.

However, primary energy consumption tells a different story. Natural gas heats most Austrian buildings and provides industrial energy, comprising about 25% of primary energy. Austria produces minimal gas domestically, importing virtually all supplies. Before 2022, roughly 80% of gas came from Russia via pipelines through Ukraine. The Ukraine war forced rapid diversification. Austria increased LNG imports through German and Italian terminals and secured alternative pipeline supplies. The experience revealed strategic vulnerability and accelerated heat pump deployment and building retrofits.

Oil, mostly imported, fuels Austria's transportation sector. Austria refines limited crude domestically, importing most finished petroleum products.

Austria targets climate neutrality by 2040, a decade ahead of the EU's 2050 goal. Achieving this requires electrifying transport and heating while expanding renewable generation. Wind capacity is growing in Burgenland and Lower Austria. Solar deployment accelerates with subsidies and simplified permitting.

Electricity prices in Austria are relatively high by global standards but moderate within the EU. The 2022 energy crisis caused price spikes, forcing government subsidies to shield consumers and industry. Austria's Verbund is one of Europe's largest hydropower utilities, and the country trades electricity actively with Germany, Switzerland, and Italy.` },
  { name: 'Azerbaijan', lat: 40.1431, lng: 47.5769, summary: `Azerbaijan's identity as an oil and gas state stretches back over a century to when Baku's fields made the Russian Empire a leading petroleum producer. Today, Azerbaijan remains fundamentally a petrostate where hydrocarbon exports underpin the economy, geopolitical leverage, and authoritarian governance. The energy sector accounts for over 90% of export revenues and shapes every aspect of national strategy.

Oil production centers on the Caspian Sea, particularly the giant Azeri-Chirag-Gunashli (ACG) field operated by BP. Production is approximately 700,000-800,000 bpd, down from peaks above 1 million bpd in 2010 as mature fields decline. The Baku-Tbilisi-Ceyhan (BTC) pipeline carries crude to Mediterranean markets, bypassing both Russia and Iran—a geopolitical achievement that reduced Moscow's transit control.

Natural gas has become strategically crucial. The Shah Deniz field in the Caspian is one of the world's largest gas discoveries. Development phases have transformed Azerbaijan into a significant exporter. The Southern Gas Corridor—comprising the South Caucasus Pipeline, Trans-Anatolian Pipeline (TANAP), and Trans-Adriatic Pipeline (TAP)—delivers Azerbaijani gas to Turkey, Greece, Bulgaria, and Italy. This infrastructure represents the EU's most significant non-Russian gas source, gaining enormous importance after 2022.

Domestically, natural gas provides the majority of electricity through thermal plants. Azerbaijan has limited renewable deployment despite Caspian wind potential and solar resources. The government has announced renewable targets but implementation lags—fossil fuel abundance and state oil company dominance leave little incentive for diversification.

Azerbaijan's energy strategy is geopolitical. President Aliyev leveraged gas leverage during the 2020 Nagorno-Karabakh war and subsequent negotiations. Europe's desperation for alternatives to Russian gas after Ukraine's invasion increased Azerbaijan's importance, though human rights concerns create tensions.

Energy revenues enrich the ruling elite through opaque state oil company SOCAR and associated businesses. The "caviar diplomacy" scandal exposed how Azerbaijan used energy wealth to buy influence in European capitals.` },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563, summary: `Bangladesh faces one of the world's most daunting energy challenges: powering rapid development for 170 million people with limited domestic resources, vulnerable geography, and climate change impacts. The country has made remarkable progress expanding electricity access from 47% in 2009 to over 95% today, yet energy security remains precarious.

Natural gas dominates Bangladesh's energy mix, comprising approximately 60% of primary energy and 80% of electricity generation. Domestic gas fields, primarily in the northeast and offshore Bay of Bengal, have powered development for decades. However, production has plateaued around 2.7 billion cubic feet per day while demand grows, creating a widening gap. By 2025, Bangladesh became a net gas importer, a historic shift.

Bangladesh imports LNG through floating storage regasification units (FSRUs) at Maheshkhali and Payra. These facilities, supplied by long-term contracts and spot purchases, have enabled continued industrial growth. However, global LNG price volatility creates fiscal stress—when prices spiked in 2022, Bangladesh struggled to afford cargoes, causing load-shedding.

Coal was supposed to fill the energy gap. The massive Rampal coal plant near the Sundarbans, built with Indian financing, generated controversy over environmental impacts but represents Bangladesh's largest coal project. Plans for numerous coal plants have been scaled back due to financing constraints, environmental opposition, and the global shift away from coal.

Renewable energy remains minimal despite Bangladesh's solar potential. Rooftop solar programs and rural solar home systems have brought electricity to off-grid areas, but utility-scale deployment lags. The world's largest delta has limited land available for large solar or wind farms.

Bangladesh's energy future is existential. Climate change—sea level rise and cyclones—threatens energy infrastructure in coastal areas while the country desperately needs reliable power for textile factories and development. The government targets 40% renewable electricity by 2041, but current trajectories fall far short.` },
  { name: 'Belarus', lat: 53.7098, lng: 27.9534, summary: `Belarus's energy system reflects its position as Russia's most loyal ally: near-total dependence on Russian oil and gas, subsidized pricing, and a new nuclear plant built by Russia that exemplifies the strategic energy relationship. Belarus lacks significant fossil fuel reserves, making energy imports fundamental to the economy while providing Moscow enormous leverage over Minsk.

Belarus imports approximately 18 million tonnes of oil annually from Russia, processed in two major refineries (Mozyr and Novopolotsk). Refined product exports to Europe generate crucial revenue—Belarus essentially re-exports Russian oil as gasoline and diesel, a business model dependent on preferential Russian pricing and European market access. EU sanctions following the 2020 election crisis and 2021 migrant weaponization have complicated this trade.

Natural gas, entirely imported from Russia via Gazprom pipelines, provides heating and approximately 95% of electricity generation through thermal plants. Belarus pays subsidized rates well below European market prices, a Russian subsidy that has historically totaled billions annually. However, Russia has occasionally threatened price increases or cutoffs during disputes, demonstrating the coercive potential.

The Ostrovets Nuclear Power Plant, completed in 2021 with Russian state corporation Rosatom financing and construction, represents Belarus's most significant energy development. Two VVER reactors provide 2.4 GW capacity, intended to reduce gas dependence and generate export revenue by selling electricity to the EU. However, Lithuania, citing safety concerns and geopolitical opposition, has refused imports and successfully lobbied against EU acceptance of Belarusian nuclear power.

Renewable energy is negligible. Belarus has limited solar and wind deployment, focusing instead on nuclear and continued gas reliance.

Energy policy is inseparable from Belarus-Russia political integration. Lukashenko has used energy dependence to negotiate subsidies while Russia uses energy supplies to maintain influence. The relationship intensified after 2020 as Belarus became further isolated from the West, deepening Moscow dependence.` }
]

async function main() {
  console.log(`Saving ${WRITEUPS.length} Energy writeups...\n`)
  for (const w of WRITEUPS) {
    try {
      await prisma.locationSummary.upsert({
        where: { name_type_category: { name: w.name, type: 'country', category: 'energy' } },
        update: { summary: w.summary, lat: w.lat, lng: w.lng, issues: '[]', topStories: '[]', storyCount: 0, updatedAt: new Date() },
        create: { name: w.name, type: 'country', country: w.name, lat: w.lat, lng: w.lng, category: 'energy', summary: w.summary, issues: '[]', topStories: '[]', storyCount: 0 }
      })
      console.log(`✅ ${w.name}`)
    } catch (error) { console.error(`❌ ${w.name}:`, error) }
  }
  console.log('\n✨ Energy mega-batch A complete!')
}

main().finally(() => prisma.$disconnect())
