import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const BRAZIL_INFRASTRUCTURE = `Brazil's infrastructure presents a nation at an inflection point—world-class airports and metros in major cities alongside crumbling rural highways and absent intercity rail. As an urban planning expert observing Latin America's largest economy, I see decades of underinvestment colliding with urgent modernization needs.

**TRANSPORTATION NETWORKS**: Brazil's 1.7 million km road network suffers chronic deterioration—the National Transport Confederation estimates 60% of federal highways are in poor condition. The BR-116 and BR-101 coastal corridors carry massive freight volumes but face maintenance deficits. São Paulo's Rodoanel represents modern engineering, yet congestion persists as vehicle ownership outpaces capacity. Tolled private concessions maintain quality while public roads crumble—a two-tier mobility system where access correlates with wealth.

Rail infrastructure remains Brazil's missed opportunity. Freight rail efficiently moves commodities to ports, but passenger rail barely exists outside commuter systems. São Paulo's metro (101 km, 5 million daily riders) impresses regionally but pales beside Asian megacities. Rio's 58 km metro expanded for Olympics yet remains insufficient. The absence of intercity passenger rail between São Paulo and Rio—430 km separating 30 million people—represents a glaring gap.

Airport infrastructure modernized substantially through private concessions. Santos port handles massive agricultural exports but faces capacity constraints.

**PUBLIC TRANSIT**: São Paulo's integrated system (metro, commuter rail, BRT) moves 8 million daily yet leaves peripheries dependent on informal buses. Rio's BRT network struggles with maintenance. The favela-periphery divide manifests starkly—hillside communities face hours-long commutes on precarious transport.

**URBAN PLANNING**: Brazilian cities show organic growth with insufficient oversight. Curitiba pioneered integrated land-use and transit planning but this hasn't scaled. Favela upgrading programs show innovation but remain localized.

**MAJOR PROJECTS**: The New Growth Acceleration Program proposes R$1.7 trillion investment through 2026. São Paulo's Metro Line 6 progresses slowly after decades of delays. High-speed rail between São Paulo and Rio has been proposed and canceled repeatedly since the 1990s—planning ambition exceeding execution capacity.

**MAINTENANCE**: Severe deficit across all infrastructure. Bridges collapse regularly. Water systems lose 40% to leakage. Reactive rather than preventive culture imposes enormous long-term costs.

**DIGITAL INFRASTRUCTURE**: Remarkable progress—4G reaches 97% of population, 5G deployment accelerated in major cities. Yet quality varies dramatically by region and class. Fiber extends through urban centers while remote communities lack connectivity.

Brazil possesses economic scale and engineering talent for world-class infrastructure but lacks consistent long-term planning, maintenance funding, and political will to prioritize unglamorous upkeep over prestigious new projects. The infrastructure challenge is fundamentally a governance challenge.`

const CANADA_INFRASTRUCTURE = `Canada's infrastructure reflects a mature economy grappling with aging systems, climate adaptation challenges, and the geographical realities of maintaining connectivity across the world's second-largest landmass. As someone who has studied infrastructure globally, I observe post-war infrastructure reaching end-of-life as climate and demographic pressures demand transformation.

**TRANSPORTATION NETWORKS**: Canada's 1.1 million km highway network includes the Trans-Canada Highway spanning 7,821 km. Infrastructure quality varies dramatically—Ontario and Quebec maintain high standards while northern routes face climate-related deterioration. The Canadian Infrastructure Report Card grades roads C+ to B-, indicating significant repair backlogs. Winter freeze-thaw cycles devastate pavement. The Confederation Bridge showcases engineering excellence, but most infrastructure wasn't designed for intensifying climate impacts.

Rail divides sharply: freight (excellent) versus passenger (inadequate). CN and CP operate one of North America's most efficient freight networks. Passenger rail remains VIA Rail's near-monopoly with limited intercity service on freight-owned tracks. The Windsor-Quebec City corridor sees reasonable service, but most Canadians lack viable rail alternatives. The proposed high-frequency rail corridor has been studied exhaustively without construction—a pattern of planning without execution.

Urban rail in Toronto (Eglinton delayed), Vancouver (SkyTrain expansion), Montreal (REM light metro), and Ottawa (O-Train) shows investment though projects consistently exceed budgets and timelines.

**PUBLIC TRANSIT**: Toronto's TTC moves 1.7 million daily but strains with capacity limits and maintenance backlogs. Vancouver's TransLink integrates effectively. Montreal's 68-station metro shows aging requiring investment. The new REM adds 67 km. Calgary and Edmonton operate successful LRT but suburban sprawl limits transit mode share.

**URBAN PLANNING**: Canadian cities face densification pressures amid housing crises. Toronto, Vancouver, Montreal see transit-oriented development gaining traction yet exclusionary zoning constrains supply. Smart city initiatives remain incremental—traffic optimization, digital transit info—rather than transformative. Climate adaptation becomes urgent as flooding and extreme weather intensify, but investment lags accelerating risks.

**MAJOR PROJECTS**: Eglinton Crosstown LRT (19 km, repeatedly delayed). Broadway Subway (5.7 km). REM light metro (67 km, partially operational). Gordie Howe Bridge (opening 2025). Investing in Canada Infrastructure Program commits C$180 billion over 12 years, though execution lags projections.

**MAINTENANCE**: Report Card estimates C$150 billion infrastructure deficit, particularly water/wastewater, roads, bridges. Federal funding favors new construction over maintenance, perversely incentivizing neglect until replacement becomes necessary. Winter accelerates deterioration while limiting construction windows.

**DIGITAL INFRASTRUCTURE**: Urban-rural divide—cities enjoy fiber and 5G while rural areas struggle. Universal Broadband Fund targets 98% coverage by 2026, ambitious goals facing execution challenges in remote regions.

Canada possesses technical expertise and resources but often lacks political courage for difficult tradeoffs, regulatory efficiency to accelerate delivery, and sustained commitment across cycles. Infrastructure debates devolve into symbolism rather than evidence-based prioritization.`

async function updateInfrastructureSummaries() {
  console.log('Updating infrastructure summaries to proper length...\n')

  await prisma.locationSummary.update({
    where: {
      name_type_category: {
        name: 'Brazil',
        type: 'country',
        category: 'infrastructure'
      }
    },
    data: {
      summary: BRAZIL_INFRASTRUCTURE,
      updatedAt: new Date()
    }
  })
  console.log('✅ Brazil infrastructure summary updated')
  console.log(`   New length: ${BRAZIL_INFRASTRUCTURE.length} characters`)

  await prisma.locationSummary.update({
    where: {
      name_type_category: {
        name: 'Canada',
        type: 'country',
        category: 'infrastructure'
      }
    },
    data: {
      summary: CANADA_INFRASTRUCTURE,
      updatedAt: new Date()
    }
  })
  console.log('✅ Canada infrastructure summary updated')
  console.log(`   New length: ${CANADA_INFRASTRUCTURE.length} characters`)

  console.log('\n✅ Infrastructure summaries updated to proper length!')
}

updateInfrastructureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
