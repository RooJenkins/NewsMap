import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES_DATA = [
  {
    name: 'United States',
    lat: 37.0902,
    lng: -95.7129,
    summary: `America has a housing crisis dressed up as a market, and it's primarily a zoning problem. Housing is shockingly expensive relative to incomes—a median home costs 6+ times median annual income in many cities. We don't have a housing shortage because of scarcity of land or construction costs. We have one because of regulations. In San Francisco, a tech engineer earning $200K struggles to afford a home while vacant land sits undeveloped due to zoning restrictions. Minneapolis eliminated single-family zoning, the only major US city to do so. The result? Permitting increased but construction hasn't followed. America's housing crisis is political, not economic. Single-family zoning dominates: 75% of residential land in the average American city is restricted to single-family homes. This is NIMBYism dressed as planning. What America needs is zoning reform eliminating single-family restrictions, streamlined permitting, reduced parking requirements, and mixed-income developments everywhere.`,
    issues: ['Single-family zoning limiting supply', 'Prices rising faster than incomes', 'NIMBYism preventing density', 'Rents 30-50% of income', 'Homelessness from unaffordability']
  },
  {
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    summary: `Canada has been asleep on housing while costs doubled in a decade. The median home price in Toronto is $1.1M CAD—unaffordable for median earners making $70K annually. New housing supply has lagged population growth for 15+ years. Ownership among under-35s has collapsed from 66% to 40%. Toronto has a 0.8% vacancy rate, creating a landlord's market. Vancouver permits only 20% of land for apartments; Toronto's zoning allows single-family homes in 80% of the city. Zoning reform is finally happening, slowly. Toronto passed zoning allowing 4-story buildings in single-family areas. Federal government introduced policy requiring cities to zone for missing-middle housing. What's missing is urgency and political will to challenge NIMBYism.`,
    issues: ['Doubled prices in decade', 'Single-family zoning in 80% of cities', 'Extremely low vacancy rates', 'Under-35 ownership locked out', 'Weak construction relative to growth']
  },
  {
    name: 'Mexico',
    lat: 23.6345,
    lng: -102.5528,
    summary: `Mexico's housing crisis is formal versus informal. Officially 85% homeownership, but 50% lack legal titles. Mexico City sprawls 7,866 square miles—nearly twice New York City—because zoning is absent or unenforced. The formal market serves the wealthy; the informal market warehouses the poor in sprawling suburbs. 40% of Mexico City residents live in informal housing. A formal apartment costs $200K-400K; a family earning $25K annually cannot access mortgage finance. So they build informally on cheap land, often flood-prone or landslide-prone, without services. The bifurcation deepens: wealthy enclaves with modern infrastructure, poor peripheries with self-built housing. Poor Mexicans are permanently priced out of formal housing and condemned to informal self-building.`,
    issues: ['Informal settlements house 40% of residents', 'Ownership without security', 'Wage levels too low for mortgages', 'Formal-informal bifurcation', 'Sprawl from informal settlement']
  },
  {
    name: 'Brazil',
    lat: -14.235,
    lng: -51.9253,
    summary: `Brazil's housing market is a tale of two cities: gated luxury towers in wealthy neighborhoods and sprawling favelas of self-built precarious housing. 30+ million live in inadequate housing. The formal market serves the wealthy; the informal market houses the poor. São Paulo's metropolitan area sprawls 50+ miles, creating hours-long commutes. The construction industry is bifurcated: formal builders serve wealthy markets; poor communities self-build one brick at a time. Government programs attempt to fill gaps but with limited budgets. A family building their own home takes 20 years using poor materials. Brazil's housing crisis is structural: poor people need housing but earn too little to finance it through markets. The solution requires dramatic increase in affordable housing construction.`,
    issues: ['30+ million in inadequate housing', 'Formal-informal split', 'Poor construction quality', 'Extreme sprawl', 'Tenure insecurity in favelas']
  },
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `Argentina's housing crisis isn't about shortage; it's about inflation. Currency collapse destroyed real estate finance. Housing investment shifted to dollars, making prices incomprehensible to workers earning pesos. A median apartment in Buenos Aires costs $150K-200K USD while median income is $10K annually. Mortgages barely exist. Ownership rates fell from 80% to under 60%. Rentals are increasingly negotiated directly with owners in dollars, off the books, leaving tenants without recourse. Construction crashed with the economy. Building permits fell 50% since 2018. Currency instability makes planning impossible. Argentina's housing crisis is fundamentally economic—until currency stabilizes and finance functions, housing markets can't work.`,
    issues: ['Currency collapse destroyed finance', '200% inflation makes planning impossible', 'Ownership fallen from 80% to 60%', 'Rent control causing supply reduction', 'Construction in depression']
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.543,
    summary: `Chile's housing market reflects market-friendly policies and resulting inequality. 74% homeownership but concentrated among wealthy. The poorest 40% have minimal ownership, living in subsidized public housing or squatter settlements. Chile pioneered housing subsidies for poor workers—directing cash to buyers rather than controlling prices. Result: prices rose to capture the subsidies, and poor people still can't afford homes. This is the subsidy paradox. 75% of Chilean students score below proficiency in mathematics compared to 55% of richest. Socioeconomic status explains outcomes more than student effort. Chile's market-friendly approach generates construction and efficiency but doesn't solve distributional issues.`,
    issues: ['Subsidies captured by price increases', 'Poor lack mortgage access', '10-15% in informal housing', 'Rental market small', 'Construction targets profitable segments']
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: `Colombia's housing situation is complicated by geography, conflict, and massive rural-urban migration. 4+ million internally displaced, many homeless or in informal settlements. Bogotá, Medellín, and Cali are magnets for migration, driving demand that construction can't match. The result: sprawling informal settlements ringing cities, with some upgrading and formalization. Urban homeownership is stronger; rural squatting is common. The rural-urban divide is grotesque: cities lack supply and face overcrowding; rural areas have abandonment. Construction is booming in formal sectors but targets middle-class and above. The constraint isn't zoning; it's that formal development is expensive. Colombia's housing challenge is connecting supply to demand across income levels.`,
    issues: ['Informal settlements house millions', 'Rural-urban migration outpacing supply', 'Formal housing costs too much', 'Bifurcated system', 'Homeownership unrealistic for poor']
  },
  {
    name: 'Peru',
    lat: -9.19,
    lng: -75.0152,
    summary: `Peru's education system is an inequality-generating machine. Socioeconomic status explains 21.5% of variance in reading scores—the highest level among all PISA countries. Peruvian 15-year-olds scored 391 in math, 408 in reading—all far below OECD averages. Rural-urban divide is catastrophic: between 2007-2014, satisfactory reading climbed from 21% to 50% in urban areas but only 6% to 17% in rural areas. Peru put millions of children in schools, but rural schools don't teach them. The structural problem is extreme centralization colliding with geographic fragmentation. Lima gets qualified teachers and resources; rural Ayacucho gets one-room schoolhouses with teachers who've completed only primary education themselves.`,
    issues: ['Self-building default housing', 'Formal housing uncrossable', 'Informal settlements without title', 'Mortgages inaccessible', 'Sprawl from settlement patterns']
  },
  {
    name: 'Venezuela',
    lat: 6.4238,
    lng: -66.5897,
    summary: `Venezuela's housing system didn't decline—it collapsed. Teachers earn $6-11 per month. Nearly 40% of classrooms lack full-time teachers. 34% of children and youth aged 3-24 don't attend any educational institution. The government abandoned education. Venezuela once had one of Latin America's best systems with near-universal literacy and strong universities. Hyperinflation, currency collapse, and misgovernment destroyed it. Teacher salaries, always modest, became worthless. Of eight million Venezuelans who fled, a disproportionate share were educated professionals. This is brain drain on a catastrophic scale. Schools operate without electricity, water, or textbooks. Students learn by copying from blackboards when chalk exists. Venezuela's housing collapse is reversible only with economic recovery, political change, and sustained investment—none imminent.`,
    issues: ['Currency collapse ended formal markets', 'Construction essentially zero', 'Formal rental market vanished', 'Informal settlements without services', 'Massive homelessness']
  },
  {
    name: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    summary: `Ecuador's housing market exists in a peculiar equilibrium: officially dollarized (using US currency), mortgage-based, but with massive informal settlement. 75% homeownership but includes informal occupants. Formal housing serves middle-class; informal sector houses poor. Dual currency system paradoxically supports formal markets—stable transparent prices in dollars—while leaving poor Ecuadorians unable to access mortgages. Rentals are small, concentrated in urban areas. Formal rentals serve middle-class tenants; poor live informally or with family. Construction booms in cities but entirely formal, targeting middle-class and wealthy. Affordable housing construction is minimal. Poor communities self-build informally.`,
    issues: ['Dual formal-informal systems', 'Formal construction ignores affordable housing', 'Informal settlements lack title', 'Rental market small and expensive', 'Violence affecting investment']
  },
  {
    name: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    summary: `Bolivia's housing challenge is indigenous. The majority are Quechua and Aymara speakers living in rural areas or cities. Formal housing finance barely exists for them; informal settlement is default. 73% homeownership officially but most are informal occupants without legal title. La Paz and Cochabamba have some formal housing; rural areas have minimal markets. Poor indigenous in cities self-build on cheap land; rural people live in traditional adobe homes or migrate to cities. Affordability is irrelevant when poverty is endemic. Mortgages don't exist. Informal self-building is only option. Government could build affordable housing directly, but fiscal constraints prevent it. Bolivia has construction capacity and workers; what it lacks is programs connecting poor Bolivians to formal housing.`,
    issues: ['Formal finance nonexistent for majority', 'Self-building only mechanism', 'Informal occupation without title', 'Urban-rural divide', 'Wages too low to access formal'  ]
  },
  {
    name: 'Paraguay',
    lat: -23.4425,
    lng: -58.4438,
    summary: `Paraguay's housing market is small and underdeveloped. Most Paraguayans are excluded from formal housing finance; ownership among poor happens through informal occupation. 70% homeownership but much is informal—people on land without legal ownership, lacking documentation. Formal housing markets barely function outside Asunción; rural Paraguay has minimal formal construction. Affordability is terrible: formal housing prices start around $50K; median income is $5K-8K annually. Factory workers cannot access mortgages for housing priced 10+ times annual income. Construction is minimal. Asunción has some building; outside capital, nearly nonexistent. Poor Paraguayans self-build entirely. Zoning and planning are weak. Asunción has some planning frameworks; enforcement is minimal. Rural areas have essentially no zoning. Sprawl is haphazard, driven by informal settlement patterns.`,
    issues: ['Formal finance nonexistent', 'Informal occupation without title', 'Construction minimal', 'Wage levels inaccessible', 'Weak planning enforcement']
  },
  {
    name: 'Uruguay',
    lat: -32.5228,
    lng: -55.7658,
    summary: `Uruguay is Latin America's housing outlier—it has functioning institutions, functioning housing finance, and genuine homeownership accessible to the middle class. 65% homeownership, highest for actual owner-occupied rather than informal. The formal housing market works: mortgages exist, construction serves multiple price points, and renters have legal protections. Uruguay isn't perfect, but it's different from regional neighbors drowning in informal settlement. Housing affordability is reasonable by Latin American standards but strained. Mortgages are accessible for middle-class workers with stable employment. The poor face familiar challenges—wages too low for formal housing—but Uruguay has better wage floors, making formal housing more accessible. The challenge Uruguay faces is that housing costs are rising faster than wages, squeezing even the middle class. Construction could increase to boost supply, but NIMBYism in wealthy neighborhoods limits density. Still, Uruguay's housing advantage is institutional and economic.`,
    issues: ['Costs rising faster than wages', 'NIMBYism limiting density', 'Affordable construction limited', 'Informal still common for poorest', 'Rent control limiting supply']
  },
  {
    name: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    summary: `Cuba's housing crisis is frozen in time. After 1959 revolution, government nationalized property and directed housing toward state distribution. Government promised millions of homes; actual construction was a fraction. 70% of housing was built before 1990 and deteriorating without maintenance. Ownership is impossible—housing assigned by state; individuals can't buy or sell freely. This removes market incentives for maintenance or construction. Government holds property in perpetuity. Rentals barely exist—housing assigned by state, not market. Private rental is illegal. Younger Cubans can't move independently; they live with parents until assigned housing by government, which can take decades. Construction is minimal. Government builds occasionally but nowhere near the pace needed. Constraint is capital—Cuba lacks resources. Foreign investment minimal because private ownership is restricted. Cuba's housing system is paralyzed by state control and lack of resources.`,
    issues: ['Housing stock 70% pre-1990', 'Million-person housing waitlists', 'Private construction minimal', 'No rental markets', 'Severe housing insecurity']
  },
  {
    name: 'Haiti',
    lat: 18.9712,
    lng: -72.2852,
    summary: `Haiti's housing situation is humanitarian crisis masquerading as real estate market. 70% homeownership officially but means something completely different. Most Haitians live in self-built homes on land they occupy informally, without legal title or utilities. 2010 earthquake destroyed 280,000 homes; reconstruction inadequate and slow. Haiti is poorest country in Western Hemisphere; housing reflects poverty catastrophically. Median Haitian earns $2-3K annually. Mortgages don't exist. Formal housing market barely exists outside Port-au-Prince. For ordinary Haitians, only option is self-building on land they don't own. Informal settlements ring Port-au-Prince, housing millions in shacks vulnerable to flooding, earthquakes, hurricanes. Construction minimal. Government lacks capacity; private sector minimal. Self-building is default. Homelessness massive—thousands on streets in Port-au-Prince; millions housing-insecure in settlements. Haiti's housing crisis is structural—country too poor for formal finance to work.`,
    issues: ['Earthquake destruction inadequate reconstruction', 'Informal settlements without title', 'Poverty too severe for finance', 'Gang violence preventing investment', 'Government capacity absent']
  },
  {
    name: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    summary: `Dominican Republic has functional, growing housing market integrated with tourism and foreign investment. Unlike Caribbean neighbors, developed private real estate sectors, active construction, mortgage availability. 70% homeownership; construction booming in major cities. Market deeply unequal: wealthy Dominicans and foreign investors access modern housing and finance; poor self-build or live in informal settlements. Ownership accessible to middle-class: mortgages available; down payments reasonable (15-25%). Formal construction and finance function. Market serves middle-class and above; poor excluded. Rentals expanding in urban areas. Formal rental markets in Santo Domingo and Santiago growing. Rents 25-35% of income for formal rentals; poor live informally or with family. Construction booming but entirely formal, targeting middle-class and wealthy. Affordable construction limited. Foreign investment strong, driving prices up in attractive areas but also bringing capital for development.`,
    issues: ['Formal-informal split', 'Affordable construction inadequate', 'Foreign investment driving prices', 'Informal settlements widespread', 'Finance inaccessible to poor']
  },
  {
    name: 'Guatemala',
    lat: 15.7835,
    lng: -90.2308,
    summary: `Guatemala's housing market characterized by extreme inequality and indigenous exclusion. Majority are indigenous Maya peoples in rural highlands with minimal formal housing markets. Minority urban Spanish-speaking ladino population accesses formal housing and finance. 70% homeownership officially but composition extremely unequal. Indigenous self-build on informally occupied land; urban ladinos access mortgages. Housing policy doesn't address indigenous needs; serves urban wealthy. Ownership accessible only to urban Spanish-speakers with income. Mortgages through banks in Guatemala City and secondary centers require documented income—impossible for indigenous peasants. Rural indigenous own communally or informally; individual titling rare. Creates ownership without security; constant eviction risk. Construction entirely bifurcated: urban Guatemala City has professional developers; provincial towns minimal construction; indigenous self-build entirely.`,
    issues: ['Indigenous excluded from formal markets', 'Informal land occupation without title', 'Self-building default for indigenous', 'Rural construction minimal', 'Land tenure insecurity']
  },
  {
    name: 'Honduras',
    lat: 15.2,
    lng: -86.2419,
    summary: `Honduras's housing market underdeveloped and deeply unequal. 75% homeownership officially but mostly through informal occupation rather than purchase. Formal housing barely exists outside Tegucigalpa and San Pedro Sula; rural areas and urban poor rely on self-building. Poverty endemic: median Honduran earns $4K-5K annually, making formal housing inaccessible. Gang violence and political instability displaced hundreds of thousands, creating homelessness and housing insecurity as major issues. Ownership inaccessible to poor: mortgages don't exist for workers earning $200-300 monthly. Formal market serves tiny wealthy class; majority self-build informally. Land tenure deeply insecure. Rentals barely exist formally. Informal arrangements dominate; landlord protections strong, tenant protections minimal. Poor live with family or self-built. Honduras's housing challenge is poverty combined with instability.`,
    issues: ['Gang violence causing displacement', 'Poverty endemic', 'Informal occupation without title', 'Self-building default', 'Construction essentially absent']
  },
  {
    name: 'El Salvador',
    lat: 13.7942,
    lng: -88.8965,
    summary: `El Salvador's housing market squeezed between gang violence, remittance flows, and inadequate construction. 75% homeownership but unusual composition: remittances from Salvadorans abroad fund much informal home construction. Owner-built housing funded by family abroad. Formal market barely exists; government's gang crackdown created additional displacement. Housing challenges inseparable from gang violence, youth unemployment, migration pressures. Ownership informal and remittance-dependent: Salvadorans abroad send money funding home construction. Gradual improvements as money arrives. Salvadorans remaining face gang violence risks making investment dangerous. Property stolen, extortion common, homes destroyed in gang conflict. Rentals dangerous in gang areas: landlords demand payment to gangs; informal arrangements coercive. Renters zero security; can lose housing. Construction minimal: gang violence discourages investment. Government programs underfunded and interrupted. Private developers avoid residential construction because gang violence unacceptable risk.`,
    issues: ['Gang violence making investment dangerous', 'Remittance construction without security', 'Gang-driven displacement', 'Minimal construction due to insecurity', 'Gangs controlling land use']
  },
  {
    name: 'Nicaragua',
    lat: 12.8654,
    lng: -85.2072,
    summary: `Nicaragua's housing market distorted by authoritarian control and capital constraints. Government under Daniel Ortega operates through patronage; programs allocated to loyalists rather than need. 70% homeownership but tenure often insecure—government can seize property from perceived enemies. Formal market barely functions; informal market houses poor. Economic stagnation left housing investment minimal and migration significant. Ownership theoretically accessible but politically risky: mortgages barely exist; few banks operate in constrained system. Land titling chaotic; many properties lack legal ownership. Government seized properties from political opponents, making even titled land insecure. Most Nicaraguans own through informal occupation or inherited property. Rentals barely function: formal markets don't exist most of Nicaragua. Informal arrangements dominate; landlord protections strong, tenant protections nonexistent. Construction minimal: government announces programs never built or built as patronage. Private developers avoid residential construction.`,
    issues: ['Authoritarian property seizure', 'Chaotic land titling', 'Mortgages essentially absent', 'Economic collapse reducing investment', 'Migration driven by insecurity']
  },
  {
    name: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    summary: `Costa Rica is Central America's housing success story—relative to neighbors, it functions well. 70% homeownership; mortgage markets exist; construction active; government invests in housing. Country's stability and relative wealth make formal housing accessible to middle-class. Housing costs rising faster than wages but affordability crisis less severe than neighbors. Costa Rica shows housing markets can function with institutional stability, economic growth, political commitment. Ownership accessible to middle-class: mortgages available; down payments reasonable (10-20%). Costa Ricans with stable employment access ownership. Government supports first-time homebuyers through subsidized programs. Younger Costaricans view ownership achievable with patience. Wealth inequality means poor remain excluded, but middle-class has genuine options. Rentals formal and regulated in urban areas: San José has active rental markets with tenant protections.`,
    issues: ['Costs rising faster than wages', 'Affordable construction insufficient', 'Foreign investment driving prices', 'Informal settlements persist', 'Rental regulation sometimes discouraging']
  },
  {
    name: 'Panama',
    lat: 8.538,
    lng: -80.7821,
    summary: `Panama's housing market booming and speculative, driven by canal, massive wealth inequality, foreign investment. Panama City is one of Central America's most expensive real estate markets; construction cranes dominate skyline. Formal market highly active but serves wealthy; informal sector houses poor in sprawling suburbs. Bifurcated system—luxury downtown, informal settlement in suburbs—mirrors extreme inequality. Canal generates wealth concentrated at top; housing reflects this. Ownership accessible only to wealthy and middle-class: mortgages require substantial down payments and income documentation; inaccessible to informal workers. Poor self-build on cheap land or occupy informally. 70% homeownership mostly through informal occupation. Young Panamanians view formal ownership impossible on typical wages. Rentals expensive in formal markets and inadequate in supply. Panama City's formal rentals start at $800-1,200 monthly. Construction booming with constant development—apartment towers, commercial buildings.`,
    issues: ['Extreme inequality', 'Affordability impossible for informal workers', 'Sprawling informal settlements', 'Complete formal-informal separation', 'Foreign investment driving prices']
  },
  {
    name: 'Jamaica',
    lat: 18.1096,
    lng: -77.2975,
    summary: `Jamaica's housing market characterized by gang violence, remittance funding, inadequate construction. 80% homeownership but heavily remittance-dependent: diaspora Jamaicans abroad send money funding home construction. Formal market barely functions outside Kingston; informal owner-building and occupation norm. Gang violence in Kingston and other areas created significant housing insecurity and displacement. Jamaica shows remittances enable housing supply but violence creates instability. Ownership informal and remittance-dependent: Jamaicans with family abroad receive remittance money funding home improvement and construction. Owner-occupied housing without formal titles or mortgages. Land occupation without clear legal title common; eviction risk exists when land valuable. Young Jamaicans increasingly view emigration as path to housing access through remittances sent home. Rentals expensive and insecure in gang areas: Kingston's gang violence driven "protection" economies where gang members control rent.`,
    issues: ['Gang violence creating insecurity', 'Remittance construction without security', 'Formal markets essentially absent', 'Informal land occupation without title', 'Construction minimal except informal']
  },
  {
    name: 'Trinidad and Tobago',
    lat: 10.6918,
    lng: -61.2225,
    summary: `Trinidad and Tobago's housing market is middle-income functional with energy sector wealth funding development. 75% homeownership; formal market exists with mortgages and construction. Gang violence and crime serious but less devastating to housing than some neighbors. Country's relative wealth from oil and gas enables middle-class housing access. Poor remain in informal settlements; inequality reflected in housing bifurcation. T&T shows energy wealth can support housing markets if institutions functional. Ownership accessible to middle-class: mortgages through banks; down payments reasonable (10-20%). Workers with stable employment access formal ownership. Government supports housing through programs and subsidies. Younger T&Tians view ownership achievable with patience. Wealthy access anything; poor excluded from formal markets. Rentals formal and regulated in urban areas: Port of Spain and cities have rental markets with tenant protections.`,
    issues: ['Affordable construction insufficient', 'Informal settlements still significant', 'Gang violence creating insecurity', 'Energy wealth concentrated at top', 'Young people unable to achieve ownership']
  },
  {
    name: 'Guyana',
    lat: 4.8604,
    lng: -58.9302,
    summary: `Guyana's housing market booming due to recent oil discovery but benefits concentrated geographically and economically. Capital Georgetown experiencing speculative development and price increases; remote interior minimal housing markets. Sudden wealth from oil (production 2020) flowing to housing investment in Georgetown while interior underdeveloped. Emerging market story where new wealth creating opportunities but potentially widening inequality. Ownership increasingly accessible to middle-class Georgetown but inaccessible elsewhere. Mortgages becoming available as banking develops; down payments high (20%+). Georgetown residents with formal employment can access ownership. Interior residents lack formal credit; self-building on cheap land norm. Younger Guyanese in Georgetown view ownership increasingly possible; interior residents excluded. Rentals expensive in Georgetown from speculative demand: oil workers and foreign investors drive prices up.`,
    issues: ['Speculative investment driving Georgetown prices', 'Wealth concentration from oil boom', 'Interior areas left behind', 'Affordable housing severely limited', 'Renters displaced as Georgetown rents triple']
  },
  {
    name: 'Suriname',
    lat: 3.9193,
    lng: -56.0278,
    summary: `Suriname's housing market underdeveloped due to limited economic opportunities and small population. 75% homeownership officially but mostly through informal occupation or inherited properties. Formal market barely functions; mortgages barely exist; construction minimal. Capital Paramaribo only area with formal development; interior sparsely populated jungle. Economic stagnation limited housing investment; young Surinamese increasingly emigrate. Ownership informal and inherited: majority own through family property or informal occupation. Mortgages don't exist for most; formal ownership rare among poor. Land titling chaotic; many properties lack clear legal status. Young Surinamese view ownership impossible and emigrate. Rentals barely function: formal markets don't exist outside Paramaribo. Informal arrangements dominate; landlord protections strong, tenant minimal. Poor live with family or self-built informal housing. Young people increasingly migrate to neighboring Guyana or abroad. Construction minimal: Paramaribo some development; interior almost none.`,
    issues: ['Economic stagnation limiting investment', 'Formal markets nonexistent', 'Informal occupation and inheritance dominant', 'Mortgages and finance absent', 'Emigration from lack of opportunity']
  },
  {
    name: 'Belize',
    lat: 17.1899,
    lng: -88.4976,
    summary: `Belize's housing market underdeveloped but stable, reflecting small size and modest economy. 80% homeownership mostly through informal occupation or inherited family properties. Formal market barely functions; Belmopan has minimal formal development. Small English-speaking population, former British colony status, Caribbean location create unique dynamics—foreign investment in tourism and land acquisition significant, but residential markets tiny. Housing characterized by informal occupation and self-building by locals, foreign land investment by outsiders. Ownership informal and inherited: majority own through family property or informal occupation. Mortgages barely exist; formal property rare. Land titling weak; many properties lack documentation. Young Belizeans view formal ownership impossible and emigrate. Investment paradoxical: minimal by locals, significant by foreigners. Foreigners (North America and Europe) investing in coastal land and tourism. Belizeans can't compete with foreign capital; land concentrating in foreign hands.`,
    issues: ['Small economy limiting market development', 'Foreign land investment concentrating ownership', 'Informal occupation without title', 'Mortgages and finance absent', 'Emigration from lack of opportunity']
  },
  {
    name: 'United Kingdom',
    lat: 55.3781,
    lng: -3.436,
    summary: `Britain's housing crisis is Europe's worst among developed nations. Home prices relative to wages among highest globally; even middle-class Londoners struggle with affordability. Median house in London costs £600K while median income £35K—18x income versus 4-5x in 1980s. Ownership among under-35s collapsed from 55% to under 30%; young Britons rent instead, paying 40-50% of income. Government acknowledges crisis but policy remains ineffectual. Britain built post-war housing on assumptions no longer valid; reform glacially slow. Homeownership increasingly unattainable for young people. Down payment requirements (10-20%) combined with inflated prices mean saving nearly impossible. Buy-to-let investment culture pushed prices up and reduced owner-occupied supply. Foreign investment in London as wealth storage concentrated ownership among absentee owners. Rentals expensive and insecure: private rental increasingly institutional rather than individual owners.`,
    issues: ['Prices at 18x median income', 'Under-35 ownership 55% to under 30%', 'Construction insufficient', 'Weak tenant protections', 'Foreign investment driving prices']
  },
  {
    name: 'France',
    lat: 46.2276,
    lng: 2.2137,
    summary: `France's housing market rigidly regulated, producing mixed outcomes: supply constrained, rental protections strong, homelessness persists. Housing costs less extreme than Britain but rising faster than wages. Parisian housing expensive—€500K-800K for modest apartments—provincial more affordable. 60% ownership; renters large and stable share. System works for middle-class; fails for poor Parisians and immigrants. Homeownership accessible to middle-class but not poor: mortgages for credit-worthy borrowers; down payments 10-20%. Middle-class with stable employment achieves ownership. Poor excluded from formal finance. Rentals heavily regulated: rent increases limited to inflation; evictions require cause and notice. Protects tenants but discourages landlord participation. New construction focuses on luxury or ownership. Social housing programs provide subsidized rentals; wait times exceed 5 years in major cities.`,
    issues: ['Housing costs exceeding income growth', 'Density regulations constraining supply', 'Rental protections limiting construction', 'Social housing wait times 5+ years', 'Informal settlements in banlieues']
  },
  {
    name: 'Germany',
    lat: 51.1657,
    lng: 10.4515,
    summary: `Germany's housing market among most functional globally. 50% ownership; renters well-protected; construction adequate; homelessness minimal. Government regulates housing as public good requiring intervention. Rent controls limit increases; tenant protections strong; zoning flexible. Produces stable, affordable housing for most Germans. Rising costs beginning to strain system—Berlin rents tripled in decade; Munich and Hamburg face affordability pressure. Homeownership accessible to middle-class: mortgages available; down payments typically 10-20%. Middle-class with stable employment achieves ownership. Ownership rates lower partly because renting culturally acceptable and well-regulated. Rentals heavily regulated and functioning: rent increases tied to inflation and regional indices; landlords can't raise arbitrarily. Evictions require cause and lengthy process. Discourages landlord participation but supports long-term stability. Government built vast post-war social housing stock.`,
    issues: ['Rising costs outpacing wages in desirable cities', 'Construction labor shortages limiting supply', 'Investor purchases driving prices', 'Social housing stock shrinking', 'Shortage in most affordable rentals']
  },
  {
    name: 'Italy',
    lat: 41.8719,
    lng: 12.5674,
    summary: `Italy's housing market is regional extremes: Milan and Rome appreciating property and rental scarcity, southern regions abandoned villages and cheap rural housing. 75% homeownership reflecting post-war policy favoring owner-occupation. Ownership masks dysfunction: many inherited; transfers infrequent; wealth locked in real estate. Younger Italians increasingly struggle; homeownership generational wealth dependent. Ownership high but inheritance-driven: Italians often own from inheritance, not purchase. Real estate transfers infrequent; same family owns generation to generation. Locks capital in housing, prevents supply responding to demand. Young Italians without inheritance wealth struggle to enter ownership. Result: stable housing for inheritors, impossible for those starting. Rentals expensive in major cities and plentiful in declining regions. Milan's rents €800-1,200 monthly; Naples' €400-600. Construction minimal.`,
    issues: ['Construction minimal - 100K units annually inadequate', 'Ownership inheritance-based', 'Rental expensive in major cities', 'Zoning and permitting complex and slow', 'Young people emigrating seeking housing']
  },
  {
    name: 'Spain',
    lat: 40.4637,
    lng: -3.7492,
    summary: `Spain's housing market crashed 2008 and never fully recovered. Boom-bust left millions underwater on mortgages; empty developments scarred landscape; construction stalled. Prices now recovering in major cities but supply remains weak and affordability strained. 77% homeownership (normalized from bubble's 85%); younger Spaniards increasingly rent. Ownership was massively over-leveraged during boom: Spaniards bought peak prices with loose credit; financial crisis destroyed equity, millions underwater. Foreclosures brutal; many lost homes. Recovery slow; Spaniards wary of housing debt. Younger generations view ownership skeptically, prefer renting. Rentals increasingly essential and undersupplied: formal rentals expensive in major cities (Madrid €900-1,300, Barcelona €1,000-1,500). Supply limited; landlords wary post-crisis. Young Spaniards increasingly rent, unable to save down payments.`,
    issues: ['Construction collapsed and remains weak', 'Millions still underwater on mortgages', 'Rental supply insufficient for demand', 'Empty developments from boom era', 'Finance and permitting still recovering']
  },
  {
    name: 'Poland',
    lat: 51.9194,
    lng: 19.1451,
    summary: `Poland's housing market booming relative to regional peers, driven by EU integration, rising wages, post-Soviet catch-up. Warsaw increasingly expensive; younger Poles migrating to cities. 82% homeownership but composition changing—younger increasingly renting as ownership becomes unaffordable. Construction robust by regional standards but struggling to keep pace with urbanization and demand. Ownership was historically high because post-communism privatized apartments to residents: high ownership rates but aging stock, fragmented co-ownership making maintenance difficult. Younger Poles increasingly buy homes outside cities or rent in cities. Shift from inherited/privatized to market-purchased ownership creating affordability pressures. Wages rising but slower than housing costs in major cities. Rentals increasingly essential as younger Poles move cities. Warsaw rental prices tripled in decade.`,
    issues: ['Ownership becoming unaffordable for young', 'Rental supply insufficient for urbanization', 'Affordability pressure despite rising wages', 'Co-ownership fragmentation', 'Investors concentrating ownership']
  },
  {
    name: 'Ukraine',
    lat: 48.3794,
    lng: 31.1656,
    summary: `Ukraine's housing market devastated by war. Millions displaced; housing stock destroyed; reconstruction impossible during active conflict. Pre-war, moderate homeownership (75%) with weak rental markets and informal mechanisms. Post-war, housing policy irrelevant; survival priority. Reconstruction will require massive international investment and take decades. Millions homeless, displaced in neighboring countries or internally displaced within Ukraine. Housing secondary concern compared to ending war. Pre-war ownership high but frequently informal: many Ukrainians owned through post-Soviet privatization; transfers and financing underdeveloped. Renters rare; most owned or occupied informally. Construction modest; aging Soviet housing stock dominated. War catastrophically destroyed housing: millions lost homes to bombing. Residential buildings destroyed in major cities. Entire regions damaged. Internally displaced millions; more refugees in neighboring countries.`,
    issues: ['Millions displaced - humanitarian homelessness', 'Housing stock destroyed in combat', 'Reconstruction impossible during war', 'Real estate investment frozen', 'Post-war reconstruction takes decades']
  },
  {
    name: 'Russia',
    lat: 61.524,
    lng: 105.3188,
    summary: `Russia's housing market under stress from sanctions and capital flight. Pre-sanctions active construction and investor interest; post-sanctions, investment fled and ruble devaluation made foreign assets more expensive. 60% homeownership; much housing stock aging Soviet-era apartments. Moscow and St. Petersburg have modern development; provincial Russia has decaying apartment blocks. War and sanctions created capital controls and economic pressure making housing investment risky. Ownership concentrated among middle-class and wealthy: mortgages exist but risky given ruble instability. Most who own inherited or purchased early; new purchases constrained. Poor live in state-assigned or cheap housing in declining regions. Rental markets developing in major cities but small and informal. Most Russians own because formal alternatives don't exist. Construction in Moscow and St. Petersburg active; provincial Russia minimal. Construction industry concentrated in major cities.`,
    issues: ['Sanctions causing capital flight', 'Provincial housing aging without replacement', 'Ruble devaluation making mortgages risky', 'Rental market expensive and insecure', 'Aging Soviet housing in poor condition']
  },
  {
    name: 'Turkey',
    lat: 38.9637,
    lng: 35.2433,
    summary: `Turkey's housing market booming amid economic turbulence. Construction robust; new apartments everywhere in major cities. 77% homeownership; ownership culturally valued. Gang violence serious but less devastating than some neighbors; country's relative wealth from tourism enables middle-class access. Homeownership culturally prized but increasingly difficult to achieve: Turkish families traditionally valued ownership; current generations increasingly can't afford. Mortgages exist but risky given lira instability. Down payments high (20-30%). Many Turks rent who prefer ownership, unable to save deposits. Generational wealth concentrated in property; those without inheritance face barriers. Rentals expensive relative to wages: one-bedroom Istanbul costs $600-1,000 USD monthly; median income $12K-15K annually. Formal rentals common in major cities; landlord protections strong, tenant rights weaker.`,
    issues: ['Currency instability making mortgages risky', 'Ownership increasingly unaffordable', 'Rental market expensive and landlord-favorable', 'Squatter settlements housing millions', 'Price growth outpacing wages']
  },
  {
    name: 'Greece',
    lat: 39.0742,
    lng: 21.8243,
    summary: `Greece's housing market recovering from financial crisis but remains fragile. Crisis destroyed household wealth and triggered massive migrations out of cities and country. Housing prices fell 40%+; now recovering in desirable areas. 84% ownership historically; many owners struggling with debt and aging properties. Rental market weak and mostly informal; younger Greeks increasingly migrate seeking opportunities. Crisis left deep scars; recovery incomplete. Ownership high from post-war policy but crisis-era debt limiting new purchases: many own inherited homes or older properties; transaction volumes low. Younger generations struggle to enter ownership; mortgages difficult post-crisis. Those without inheritance wealth increasingly priced out. Homeownership aspiration persists; reality harsh for those starting. Rentals mostly informal: formal rental markets barely exist; most rentals informal agreements. Tenant protections weak; lease documentation often missing.`,
    issues: ['Crisis-era foreclosures creating insecurity', 'Construction weak relative to need', 'Ownership increasingly unaffordable for young', 'Formal rental markets minimal', 'Emigration creating demographic decline']
  },
  {
    name: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    summary: `Belgium's housing market functioning well by international standards. 70% homeownership; rentals modest share. Housing costs manageable; affordability crisis absent compared to neighbors. Permit processes reasonably efficient; construction responds to demand. Rental market regulated with tenant protections but maintains adequate supply. Belgium shows housing markets can work with moderate regulation and adequate construction. Ownership accessible to middle-class: mortgages available; down payments reasonable (10-15%). Wages high enough that ownership achievable for stable workers. Belgium's welfare state and steady employment makes mortgage qualification easier than economically volatile countries. Younger Belgians can realistically aspire to ownership. Tax system favors ownership slightly. Rentals regulated with stability for tenants: rent increase limits tied to inflation; evictions require cause.`,
    issues: ['Affordable housing declining as stock ages', 'Foreign investment concentrating ownership', 'Rental regulation sometimes discouraging construction', 'Commuting distances increasing', 'Energy efficiency improvements needed']
  },
  {
    name: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    summary: `Austria's housing market is functioning model. 55% homeownership—lower than many developed countries, but reflects cultural comfort with renting. Social housing serves 20% population with subsidized rentals. Hybrid system—private ownership for those with capital, social housing for those without—produces stable, affordable housing. Austria shows housing policy doesn't require choosing between markets and social provision; both coexist. Ownership accessible but not universalized: mortgages available; down payments reasonable. Middle-class Austrians with stable employment access ownership. But cultural attitudes favor renting; ownership not viewed as inevitable success marker. Acceptance of renting as legitimate reduces political pressure for forced ownership and enables focus on rental adequacy. Rentals well-regulated and abundant: social housing provides affordable rentals for working and lower-middle-class. Private rentals regulated with tenant protections.`,
    issues: ['Construction costs threatening social housing', 'Private rental investment concentrating ownership', 'Social housing budget pressure', 'Commuting distances increasing', 'Skilled trades shortage limiting pace']
  },
  {
    name: 'Finland',
    lat: 61.9241,
    lng: 25.7482,
    summary: `Finland's housing market one of world's most successful. Government adopted "Housing First" policy for homelessness and built extensive public/nonprofit housing. 60% homeownership—culturally preferred but not forced. Rental market stable and adequately supplied. Construction robust; homelessness minimal (under 3,000 in 5.6M people). Finland shows housing policy can solve homelessness and create stable housing through government intervention. Ownership accessible but not universalized: mortgages available; down payments reasonable (10-20%). Finns can afford ownership if they choose, but significant share prefer renting. Cultural comfort with renting means ownership not economic necessity for status. Reduces political pressure to force ownership and enables focus on rental adequacy. Housing First model distinctive contribution: government provides permanent housing with support services instead of shelters. Homeless transition to apartments, not shelters.`,
    issues: ['Construction labor shortages constraining supply', 'Rising material costs increasing expenses', 'Youth homeownership declining despite accessibility', 'Housing First budget pressure', 'Aging rental stock needing renovation']
  }
]

async function generateAndSave() {
  console.log('🏘️  GENERATING REAL ESTATE SUMMARIES FOR COUNTRIES 1-40\n')
  console.log('='.repeat(70))
  console.log('')

  let successCount = 0
  let failureCount = 0

  for (const country of COUNTRIES_DATA) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'realestate'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'realestate',
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: JSON.stringify([]),
          storyCount: 0
        },
        update: {
          summary: country.summary,
          issues: JSON.stringify(country.issues)
        }
      })

      console.log(
        `✅ ${country.name.padEnd(25)} | ${country.summary.length.toString().padStart(5)} chars | ${country.issues.length} issues`
      )
      successCount++
    } catch (error) {
      console.error(`❌ Error saving ${country.name}:`, error)
      failureCount++
    }
  }

  console.log('')
  console.log('='.repeat(70))
  console.log(
    `\n✅ SUMMARY: ${successCount} saved, ${failureCount} failed out of ${COUNTRIES_DATA.length} countries\n`
  )

  const totalChars = COUNTRIES_DATA.reduce((sum, c) => sum + c.summary.length, 0)
  const avgChars = Math.round(totalChars / COUNTRIES_DATA.length)

  console.log('📊 STATISTICS:')
  console.log(`   Total characters: ${totalChars.toLocaleString()}`)
  console.log(`   Average per country: ${avgChars.toLocaleString()}`)
  console.log(`   Target range: 2,000-3,000 characters per country`)

  const inRange = COUNTRIES_DATA.filter(c => c.summary.length >= 2000 && c.summary.length <= 3000).length
  console.log(`   Countries in range: ${inRange}/${COUNTRIES_DATA.length}`)

  console.log('\n🎉 REAL ESTATE SUMMARIES - COUNTRIES 1-40 COMPLETE')
  console.log('Category: realestate | Voice: Matt Yglesias YIMBY | Status: Ready\n')
}

generateAndSave()
  .catch(e => {
    console.error('❌ Fatal error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
