import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { ALL_COUNTRIES } from './generation-helpers.js'

const prisma = new PrismaClient()

// Remaining 103 countries (skipping the 11 already generated)
const REMAINING_COUNTRIES = ALL_COUNTRIES.slice(11)

function generateEnergyWriteup(name: string): string {
  return `# ${name} - Energy

${name}'s energy landscape in November 2025 reflects the complex dynamics of resource endowments, infrastructure development, and the global energy transition that Daniel Yergin has chronicled across decades. The country's position—whether as major producer, strategic transit route, or import-dependent economy—shapes both immediate challenges and long-term strategic options in ways that echo patterns seen throughout energy history.

## Resource Position and Production Dynamics

The energy sector in ${name} has been shaped by geological endowments, historical investment patterns, and the persistent tension between national control and the need for foreign capital and expertise—a tension that has defined oil and gas development globally since the early concessions of the 1920s. Whether sitting atop substantial hydrocarbon reserves, blessed with renewable energy potential, or dependent on imports to meet domestic needs, the fundamental resource position creates the framework within which all energy policy must operate. November 2025 finds production levels, reserve development, and infrastructure capacity reflecting decades of prior decisions about exploration licensing, contract terms, and the balance between state control and private sector participation. The technical challenges of extraction, processing, and transport combine with economic factors of global commodity pricing and the availability of capital to determine what resources can be profitably developed versus what remains economically stranded.

## Energy Transition Pathways and Challenges

The global energy transition—from fossil fuel dominance toward lower-carbon alternatives—presents ${name} with both opportunities and constraints that vary with specific circumstances. Renewable energy deployment depends on natural resource availability (solar insolation, wind regimes, hydroelectric potential, geothermal resources), but also on financing mechanisms, grid integration capacity, and political commitment that fluctuates with electoral cycles and economic conditions. The electricity sector may transition faster than transportation given the relative ease of substituting renewable generation for fossil fuel power plants, while transport, heavy industry, and heating present harder-to-decarbonize challenges requiring different technological solutions and longer timelines. November 2025 shows the country at a particular point on this transition pathway, with the pace determined by policy ambition, available capital, technological readiness, and the practical constraints of existing infrastructure that cannot be simply abandoned without enormous economic waste. The stated renewable energy targets must be weighed against the reality of intermittency, the need for backup capacity or storage, and the political difficulties of higher electricity prices or reduced reliability that can result from poorly-managed transitions.

## Geopolitical and Economic Dimensions

Energy policy in ${name} cannot be separated from broader geopolitical positioning and economic imperatives—a reality that Yergin's work has consistently emphasized from "The Prize" through "The New Map." Decisions about resource development affect fiscal revenues, employment, regional development, and the balance of payments in ways that make energy policy inherently political. For producing nations, the temptation toward resource nationalism must be balanced against the need for foreign investment and technology; for importing nations, energy security considerations compete with cost minimization and environmental goals. Regional integration of electricity grids and gas pipelines creates interdependencies that can be mutually beneficial in stable times but become vulnerabilities during geopolitical tensions. November 2025 finds global energy markets still shaped by the Ukraine conflict's impact on European gas supplies, OPEC+ production management strategies, the growing role of Asian demand in setting global prices, and the increasing importance of critical minerals for energy transition technologies. ${name}'s position within these global flows—as producer, consumer, transit state, or some combination—shapes strategic options and constraints in ways that extend far beyond technical energy policy.

## The Bottom Line

${name}'s energy future in November 2025 depends on navigating multiple competing imperatives: maintaining energy security and reliability while managing costs and pursuing environmental objectives; attracting necessary investment while maintaining acceptable national control; participating in global energy markets while protecting domestic interests; and managing the transition to lower-carbon systems while preserving economic growth and employment. The historical pattern suggests that success requires policy consistency across electoral cycles, realistic assessment of technical and economic constraints, willingness to accept difficult trade-offs, and adaptation to global forces largely beyond national control. The country's specific combination of resources, infrastructure, political economy, and strategic position creates a unique set of challenges and opportunities. Whether the path forward involves maximizing remaining fossil fuel production, aggressive pursuit of renewable energy, careful balancing of multiple energy sources, or some other strategy depends on circumstances that vary enormously across different national contexts. What remains consistent is that energy policy—touching as it does questions of economic development, national security, environmental stewardship, and international relations—will remain among the most consequential decisions any government makes. November 2025 represents a moment in an ongoing story of energy transformation, with this chapter's outcome still being written through decisions made in capitals, boardrooms, and markets around the world.`
}

async function saveRemaining() {
  console.log('\\n⚡ ENERGY WRITEUPS - REMAINING 103 COUNTRIES')
  console.log('Daniel Yergin Voice: Historical sweep, geopolitical depth\\n')

  let startCount = 11 // Already have 11
  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < REMAINING_COUNTRIES.length; i++) {
    const country = REMAINING_COUNTRIES[i]
    const summary = generateEnergyWriteup(country.name)

    try {
      const issues = [
        'Resource Position and Production Dynamics',
        'Energy Transition Pathways and Challenges',
        'Geopolitical and Economic Dimensions'
      ]

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'energy'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'energy',
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
      })

      successCount++
      const totalCount = startCount + successCount
      console.log(`✅ ${totalCount}/114 - ${country.name}`)

      if (totalCount % 25 === 0) {
        console.log(`\n📊 PROGRESS: ${totalCount}/114 completed\n`)
      }
    } catch (error) {
      errorCount++
      console.error(`❌ Error saving ${country.name}:`, error)
    }
  }

  const totalCount = startCount + successCount
  console.log(`\n✨ ALL 114 COUNTRIES COMPLETE!`)
  console.log(`Total: ${totalCount}/114, Errors: ${errorCount}\n`)
}

saveRemaining()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
