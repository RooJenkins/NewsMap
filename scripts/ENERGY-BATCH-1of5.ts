import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

// Energy writeups 1-25 - Daniel Yergin style, 2,500-3,500 characters
const WRITEUPS = [
  { name: 'Angola', lat: -11.2027, lng: 17.8739, summary: `Angola's energy landscape is defined by its massive oil wealth—the country is sub-Saharan Africa's second-largest crude producer after Nigeria—yet most Angolans lack reliable electricity. This paradox reflects the resource curse: petroleum generates billions in export revenue while domestic energy infrastructure remains underdeveloped and inaccessible to the majority.

Oil dominates Angola's energy economy, comprising over 95% of export revenues. Production centers on offshore fields in the Atlantic, particularly in Cabinda province and deepwater blocks operated by international majors including TotalEnergies, Chevron, and ExxonMobil. Angola produces approximately 1.1-1.2 million barrels per day, though this has declined from peaks above 1.8 million bpd in 2008 due to aging fields and underinvestment. Natural gas production is substantial but mostly flared—Angola wastes billions of cubic feet annually, though recent projects aim to capture and monetize this resource. The Angola LNG plant near Soyo represents efforts to commercialize associated gas.

Energy independence is ironic: Angola exports vast quantities of oil while importing refined petroleum products. The country has only one refinery (Luanda) operating below capacity, forcing imports of gasoline and diesel. This creates absurd situations where an oil-rich nation suffers fuel shortages and high prices.

Electricity access is abysmal. Only about 45% of Angolans have grid access, dropping to 15% in rural areas. Installed capacity is approximately 7 GW, primarily from hydropower. The Laúca Dam on the Kwanza River, completed in 2017, added 2 GW. Despite hydropower potential, chronic drought and poor maintenance cause frequent outages even in Luanda.

Angola faces an energy transition challenge: how to diversify beyond oil dependence while providing basic electricity access. Renewable energy potential—solar is particularly promising given Angola's sunshine—remains largely untapped. The government has announced solar projects but implementation lags.` },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167, summary: `Argentina's energy story is one of enormous potential constrained by political dysfunction and economic instability. The country possesses world-class resources—the second-largest shale gas reserves globally (Vaca Muerta formation) and substantial oil, hydropower, and renewable capacity—yet chronic mismanagement, price controls, and boom-bust cycles prevent Argentina from fully capitalizing on these assets.

Argentina's energy mix is diversified: natural gas accounts for approximately 55% of primary energy, oil about 30%, hydropower 5%, nuclear 3%, and renewables growing rapidly. The Vaca Muerta shale formation in Neuquén province holds an estimated 308 trillion cubic feet of technically recoverable gas—comparable to U.S. shale plays. Development has accelerated with operators like YPF, Shell, and Exxon investing billions, though Argentina's economic volatility deters some majors.

Energy policy has been erratic and politicized. The Kirchner governments (2003-2015) imposed price caps and export restrictions, destroying investment incentives. Utilities couldn't cover costs, leading to underinvestment and deteriorating infrastructure. The Macri administration (2015-2019) attempted market-oriented reforms, removing subsidies and allowing price increases—sparking public anger. Subsequent reversals and the Fernández government's return to controls perpetuated uncertainty.

Argentina swings between energy self-sufficiency and imports depending on commodity prices and production levels. Vaca Muerta development has reduced gas imports from Bolivia, and Argentina now exports to Chile and Brazil in summer while importing in winter due to seasonal demand and infrastructure constraints.

Electricity generation totals about 150 GW capacity, with thermal (gas) plants dominant. Nuclear provides baseload through two reactors. Renewable energy has surged under the RenovAr program—wind farms in Patagonia and solar in the northwest now contribute over 15% of generation.

Energy prices are politically explosive. Subsidies cost billions annually, contributing to fiscal deficits. President Milei's 2023 shock therapy slashed subsidies, causing energy prices to spike—economically rational but socially painful.` }
]

async function main() {
  console.log(`Saving ${WRITEUPS.length} Energy writeups (batch 1 of 5)...\n`)
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
  console.log('\n✨ Energy batch 1 of 5 complete!')
}

main().finally(() => prisma.$disconnect())
