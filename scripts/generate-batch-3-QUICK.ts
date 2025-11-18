import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Quick batch - countries 18-30 (13 countries with shorter summaries to move fast)
const BATCH = [
  { name: 'Honduras', lat: 15.2000, lng: -86.2419, summary: 'Gang violence, corruption, mass migration to US.', issues: ['Gang violence MS-13/Barrio 18', 'Mass migration and remittance dependence', 'Political corruption', 'Economic informality 70%+', 'Femicide and violence'] },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965, summary: 'Bukele authoritarian crackdown reduced violence dramatically but democratic backsliding.', issues: ['Democratic backsliding', 'Mass incarceration 75k+', 'Press freedom deterioration', 'Bitcoin experiment', 'Human rights violations'] },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072, summary: 'Ortega-Murillo dictatorship with total repression, eliminated opposition, economic collapse.', issues: ['Full dictatorship', 'Political prisoners 300+', 'Economic collapse', 'Catholic Church persecution', 'Mass emigration'] },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534, summary: 'Central America\'s most stable democracy, fiscal challenges, eco-tourism leader.', issues: ['Fiscal deficits and debt', 'Drug trafficking increase', 'Nicaraguan refugees 200k+', 'Inequality', 'Environmental pressures'] },
  { name: 'Panama', lat: 8.5380, lng: -80.7821, summary: 'Canal-dependent economy, logistics hub, corruption endemic, mining controversy.', issues: ['Canal water scarcity from climate', 'Corruption and elite impunity', 'Extreme inequality', 'Money laundering risks', 'Darién migration crisis'] },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975, summary: 'Democracy with extreme gang violence 45+ murder rate, tourism-dependent, high debt.', issues: ['Extreme gang violence', 'High public debt 95% GDP', 'Brain drain emigration', 'LGBTQ+ discrimination', 'Climate vulnerability'] },
  { name: 'Trinidad and Tobago', lat: 10.6918, lng: -61.2225, summary: 'Energy-dependent economy declining production, gang violence increasing, Venezuelan migration.', issues: ['Gang violence rising', 'Energy sector decline', 'Economic diversification failure', 'Venezuelan migration tensions', 'Corruption'] },
  { name: 'Guyana', lat: 4.8604, lng: -58.9302, summary: 'Oil boom transformation with 11B barrels, governance challenges, Venezuela territorial threat.', issues: ['Oil wealth management', 'Venezuela Essequibo territorial threat', 'Infrastructure from low baseline', 'Ethnic political divisions', 'Corruption risks'] },
  { name: 'Suriname', lat: 3.9193, lng: -56.0278, summary: 'Political transition, fiscal crisis, offshore oil discoveries promise future wealth.', issues: ['Immediate fiscal crisis', 'Bouterse corruption legacy', 'Infrastructure deficits', 'Illegal gold mining devastation', 'Future oil wealth management'] },
  { name: 'Belize', lat: 17.1899, lng: -88.4976, summary: 'English-speaking Caribbean nation, gang violence, tourism and eco-tourism focus, high debt.', issues: ['Gang violence drug trafficking', 'High public debt 100%+ GDP', 'Climate hurricane vulnerability', 'Rural infrastructure gaps', 'Maya land rights conflicts'] },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360, summary: 'Labour government 2024, NHS crisis, post-Brexit adjustment, economic stagnation, Scotland independence question.', issues: ['NHS crisis 7M+ waiting list', 'Economic stagnation post-Brexit', 'Immigration Channel crossings', 'Scottish independence question', 'Cost-of-living crisis'] },
  { name: 'France', lat: 46.2276, lng: 2.2137, summary: 'Political gridlock from 2024 hung parliament, pension protests, far-right National Rally strength.', issues: ['Political paralysis hung parliament', 'Pension reform social unrest', 'Immigration tensions', 'High public debt 110% GDP', 'Far-right RN surge'] },
  { name: 'Germany', lat: 51.1657, lng: 10.4515, summary: 'Economic stagnation, energy crisis post-Russian gas, far-right AfD surge, defense transformation.', issues: ['Economic stagnation recession', 'Energy transition high costs', 'Far-right AfD surge', 'Defense spending transformation', 'Aging demographics'] },
]

async function quickBatch3() {
  console.log('🚀 QUICK Batch 3 - 13 countries (18-30)\n')
  let success = 0
  for (const c of BATCH) {
    const fullSummary = `# ${c.name}\n\n${c.summary}\n\nKey challenges include ${c.issues.join(', ')}.`
    await prisma.locationSummary.upsert({
      where: { name_type_category: { name: c.name, type: 'country', category: 'all' } },
      create: { name: c.name, type: 'country', country: c.name, lat: c.lat, lng: c.lng, category: 'all', summary: fullSummary, issues: JSON.stringify(c.issues), topStories: '[]', storyCount: 0 },
      update: { summary: fullSummary, issues: JSON.stringify(c.issues), updatedAt: new Date() }
    })
    console.log(`✅ ${c.name}`)
    success++
  }
  console.log(`\n✅ ${success}/13 saved. Total progress: ${17+success}/128`)
}

quickBatch3().finally(() => prisma.$disconnect())
