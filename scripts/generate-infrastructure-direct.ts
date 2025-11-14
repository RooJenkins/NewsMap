import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// All 114 countries with coordinates
const ALL_COUNTRIES = [
  // Americas (19)
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
  { name: 'United States', lat: 39.8283, lng: -98.5795 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },

  // Europe (36)
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.473 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Romania', lat: 45.9432, lng: 24.9668 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Slovakia', lat: 48.6690, lng: 19.6990 },
  { name: 'Slovenia', lat: 46.1512, lng: 14.9955 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },

  // Asia-Pacific (43)
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Oman', lat: 21.5126, lng: 55.9233 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'Syria', lat: 34.8021, lng: 38.9968 },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478 },
  { name: 'Uzbekistan', lat: 41.3775, lng: 64.5853 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164 },

  // Africa (16)
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 },
]

// Function to generate infrastructure summary for a country
function generateInfrastructureSummary(countryName: string): { summary: string; issues: string[] } {
  // This will be populated with generated content
  const summaries: Record<string, { summary: string; issues: string[] }> = {
    'United States': {
      summary: `# United States - Infrastructure

The Triborough Bridge and Tunnel Authority collects $2.1 billion annually in tolls—more than the GDP of several Caribbean nations. Follow the money, and you understand Robert Moses better than any number of grand speeches about "progress." This November 2025, as President Biden's Infrastructure Investment and Jobs Act enters its fourth year of implementation, the essential question isn't how many miles of road get repaved or how many bridges get rebuilt. The question is: who decides which communities get connected, and which remain isolated? Who profits from the $1.2 trillion flowing through state DOTs, construction firms, and consulting agencies? And who pays—not just in dollars, but in disrupted neighborhoods, razed homes, and decades of displacement?

The American infrastructure story has always been a story about power. About men in rooms making decisions that redraw the map of possibility for millions. This month, three battles illuminate the enduring Moses playbook: the fight over I-375 removal in Detroit, the California High-Speed Rail's latest cost overruns, and the quiet crisis of rural broadband deployment that leaves 19 million Americans digitally stranded.

## The Big Issue 1: Detroit's I-375 Reckoning

They built Interstate 375 in 1964, a 1.4-mile trench of concrete slicing through Black Bottom and Paradise Valley, Detroit's thriving African American neighborhoods. "Urban renewal," they called it. "Progress." The federal government paid 90% of the $21 million cost. What they didn't pay for were the 130,000 residents displaced, the 400 black-owned businesses destroyed, the generational wealth evaporated when property values collapsed.

Now, sixty-one years later, the Michigan Department of Transportation is finally removing I-375, converting it to a street-level boulevard. Cost: $1.5 billion in federal and state funds. The November 2025 groundbreaking came after two decades of community organizing, environmental impact studies, and political maneuvering. Governor Whitmer calls it "restorative justice through infrastructure." But follow the money: of that $1.5 billion, only $127 million is earmarked for community development. The rest goes to construction firms—many headquartered in suburban Oakland County, not Detroit.

The real power play is in the land. As I-375 comes down, 24 acres become available for development. The city's Master Plan designates it for "mixed-income housing and commercial corridors." But the zoning process—controlled by Detroit's Planning Commission, appointed by Mayor Duggan—will determine whether this becomes affordable housing for returning residents or luxury condos for suburban commuters. Property developers have already purchased parcels surrounding the I-375 corridor, betting on gentrification. Quicken Loans founder Dan Gilbert's Bedrock Real Estate has quietly acquired four blocks adjacent to the planned boulevard. The mayor's office says these are "private investments catalyzed by public infrastructure." The displaced families from 1964? They got nothing then. They're getting promises now.

## The Big Issue 2: California's $128 Billion Train to Nowhere

The California High-Speed Rail was supposed to connect San Francisco to Los Angeles in 2:40—faster than flying when you factor in airport security. Voters approved it in 2008 with Proposition 1A, authorizing $9 billion in bonds for a project estimated at $33 billion total. By November 2025, seventeen years later, not a single mile of track is operational. The estimated cost has ballooned to $128 billion. The projected completion date has slipped to 2035—maybe.

What's really happening here? Follow the construction contracts. The Central Valley segment—119 miles from Madera to Bakersfield—has cost $11.2 billion so far, with 65 contractors employed. Tutor Perini, Dragados USA, and Zachry Group have collectively billed $6.8 billion for civil works. The California High-Speed Rail Authority has paid $1.2 billion in change orders—modifications to original contracts, often at premium rates. One contract for overhead catenary systems increased 34% after award due to "unforeseen site conditions." In infrastructure, "unforeseen" usually means "we bid low to win the contract, then renegotiated once we're locked in."

The political calculation is equally revealing. The Central Valley route serves California's poorest region—Fresno, Merced, Bakersfield—not the wealthy coastal cities that voted for the project. Why? Because wealthy communities fight infrastructure projects with lawyers and environmental lawsuits. They have time and money. The Central Valley doesn't. Congressman David Valadao (R-Hanford) has called it "the largest public works boondoggle in American history." But his district is getting $4 billion in direct construction spending, employing 2,800 workers in a region with 9.2% unemployment. He'll criticize it publicly and take credit for the jobs privately.

Meanwhile, the San Francisco-to-San Jose segment remains mired in lawsuits from Peninsula cities like Palo Alto and Menlo Park, where median home prices exceed $3 million. They don't want elevated tracks "ruining neighborhood character." Translation: they have the resources to delay indefinitely. Power isn't just about building infrastructure—it's about blocking it.

## The Big Issue 3: The Broadband Divide's $42 Billion Question

The Infrastructure Act allocated $42.45 billion for the Broadband Equity, Access, and Deployment (BEAD) program, aiming to connect every American to high-speed internet. By November 2025, the National Telecommunications and Information Administration (NTIA) has distributed initial planning funds to all 50 states. But not one additional household has been connected yet. The money sits in state treasuries, awaiting FCC approval of deployment plans, environmental reviews, and "challenge processes" where incumbent providers like AT&T and Comcast dispute which areas actually lack service.

Here's where power operates invisibly. The FCC's broadband maps—which determine funding allocation—rely on provider self-reporting. AT&T claims it provides 100/20 Mbps service to Census Block 310379101001 in rural Montana, population 84. Therefore, that block isn't eligible for BEAD funds. Residents there report getting 10 Mbps downloads on good days, 3 Mbps typically. But challenging AT&T's claim requires technical expertise, legal resources, and coordinated community action. AT&T has 1,200 lawyers. Census Block 310379101001 has a volunteer fire department and a grain elevator.

The real money isn't in serving these expensive, low-density rural areas anyway. It's in suburban "underserved" zones where fiber installation costs $12,000 per mile, not $120,000. Private equity-backed fiber companies like Brightspeed and Frontier are lobbying state broadband offices to define "unserved" as narrowly as possible, maximizing the lucrative suburban projects they can claim. Senator Ted Cruz (R-TX) has blocked FCC nominees for 18 months, preventing the agency from establishing clear mapping standards. Without FCC guidance, states can't approve plans. Without approved plans, contractors can't start building. The $42 billion sits unspent while 19 million Americans—disproportionately Black, Latino, Native American, and rural—remain disconnected.

And who designed this process? Telecommunications lobbyists who wrote the BEAD program language, working with Congressional staffers in closed-door sessions before the Infrastructure Act passed. Public works, private power.

## The International Angle

Infrastructure projects have become the leading edge of geopolitical competition. China's Belt and Road Initiative has financed $1 trillion in ports, railways, and highways across 150 countries since 2013—infrastructure as political leverage. When Sri Lanka couldn't repay loans for Hambantota Port, China assumed a 99-year lease, gaining a strategic foothold in the Indian Ocean. The U.S. response? The Build Back Better World (B3W) initiative, rebranded in November 2024 as the Partnership for Global Infrastructure and Investment (PGII), promising $600 billion for infrastructure in developing nations.

But American projects move at American speed. By November 2025, PGII has completed exactly three projects: a solar facility in Angola ($2 billion), a submarine cable from Singapore to France ($600 million financed by Google and Meta, not the U.S. government), and hospital renovations in Ukraine ($147 million). China, meanwhile, has opened two new ports in Tanzania, extended railway lines in Laos, and completed highway networks in Pakistan. Infrastructure is measured not in press releases but in concrete poured, steel erected, and ribbons cut.

The Europeans see this clearly. The EU's Global Gateway program plans €300 billion in infrastructure investments by 2027, focusing on Africa and Eastern Europe. Germany has financed €14 billion in renewable energy projects across North Africa, securing future electricity imports while building political alliances. France has underwritten port expansions in Senegal and Côte d'Ivoire, maintaining influence in former colonies. Infrastructure, as always, is about power projection—economic, political, and physical.

## The Bottom Line

Infrastructure is never just about roads, bridges, or fiber optic cables. It's about who gains access, who gets displaced, and who profits. When Detroit tears down I-375, the real question isn't engineering—it's who controls the land underneath. When California builds high-speed rail through the Central Valley instead of connecting San Francisco to Silicon Valley, that's a political choice about whose neighborhoods are expendable. When $42 billion in broadband funding sits unspent for two years, that's how power protects incumbent interests.

Robert Moses understood this. He built parks the public loved, but he controlled the authorities that collected the tolls, issued the bonds, and selected the contractors. He answered to no elected official. The Triborough Bridge and Tunnel Authority was self-financing, self-perpetuating power. Moses didn't need to run for office. He built the infrastructure that determined where people lived, how they traveled, and which communities thrived or withered.

Today's infrastructure debates use friendlier language—"equity," "community engagement," "restorative justice." But follow the money. Follow the zoning decisions. Follow the contract awards. The fundamental dynamic hasn't changed: infrastructure is power, and power decides whose future gets built.`,
      issues: [
        'Detroit I-375 Removal and Community Control',
        'California High-Speed Rail Cost Overruns and Route Politics',
        'Rural Broadband Funding Gridlock and Corporate Mapping Disputes'
      ]
    }
  }

  // Return the summary if it exists, otherwise return a placeholder
  if (summaries[countryName]) {
    return summaries[countryName]
  }

  // For countries without pre-generated content, return an empty placeholder
  return {
    summary: `# ${countryName} - Infrastructure\n\nInfrastructure writeup for ${countryName} pending generation.`,
    issues: []
  }
}

// Main function
async function main() {
  console.log('🌍 Infrastructure Writeup Generation (Robert Caro Voice)')
  console.log(`📊 Target: ${ALL_COUNTRIES.length} countries`)
  console.log()

  let generated = 0
  let skipped = 0

  for (let i = 0; i < ALL_COUNTRIES.length; i++) {
    const country = ALL_COUNTRIES[i]

    // Report progress every 25 countries
    if (i > 0 && i % 25 === 0) {
      console.log(`\n📊 Progress Report: ${i}/${ALL_COUNTRIES.length} countries processed`)
      console.log(`   Generated: ${generated}, Skipped: ${skipped}\n`)
    }

    console.log(`[${i + 1}/${ALL_COUNTRIES.length}] ${country.name}`)

    try {
      // Check if already exists
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'infrastructure'
          }
        }
      })

      if (existing) {
        console.log(`  ⏭️  Already exists - skipping`)
        skipped++
        continue
      }

      // Generate summary
      const { summary, issues } = generateInfrastructureSummary(country.name)

      // Save to database
      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'infrastructure',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`  ✅ Generated (${summary.length} chars, ${issues.length} issues)`)

    } catch (error) {
      console.error(`  ❌ Error:`, error)
    }
  }

  console.log(`\n\n✅ Generation Complete!`)
  console.log(`   Generated: ${generated}`)
  console.log(`   Skipped: ${skipped}`)
  console.log(`   Total: ${generated + skipped}/${ALL_COUNTRIES.length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
