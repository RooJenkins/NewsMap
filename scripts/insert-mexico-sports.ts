import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const summary = `Let's talk about Mexican football, because 2024 was a disaster that led to a 2025 redemption arc. El Tri absolutely cratered at Copa América 2024—crashed out in the group stage for the first time EVER with their main squad. Beat Jamaica 1-0, lost to Venezuela 0-1, drew Ecuador 0-0, and boom, eliminated on June 30th. Coach Jaime Lozano got fired immediately, and Mexican football hit rock bottom. But here's where it gets interesting: Javier Aguirre came in, steadied the ship, and Mexico won their first-ever CONCACAF Nations League title by beating Panama 2-1 in the final on March 23, 2025, at SoFi Stadium. Then they went and beat the United States 2-1 in the 2025 Gold Cup final for their record 10th Gold Cup trophy. Two trophies in 2025 after the 2024 nightmare? That's a hell of a turnaround. Aguirre went 6-2-1 through nine games, and suddenly El Tri looks competent again.

Domestically, Liga MX had absolute chaos and dominance at the same time. Club América won Apertura 2024 by beating Monterrey 3-2 on aggregate in December—that's their THIRD straight title and 16th overall. Las Águilas are the dynasty right now, completely owning Mexican football. But then Toluca came through and upset América 2-0 on aggregate to win Clausura 2025 in May for their 11th title, setting up a Campeón de Campeones showdown between the two. The league's split Apertura/Clausura format keeps things interesting, and América's run of three consecutive titles is unprecedented in the modern era. They're stacked with talent, they've got money, and they're not slowing down.

Paris 2024 Olympics? Five medals total for Mexico—three silvers and two bronzes. The bronze in women's team archery was huge: Alejandra Valencia, Ana Vazquez, and Angela Ruiz beat the Netherlands 6-2 in the bronze match. Valencia's second Olympic medal after Tokyo mixed team bronze with Luis Alvarez. Mexico also grabbed silver in diving, boxing, and judo, showing decent depth across multiple sports. Not a massive haul, but respectable for a country that's always been stronger in regional competitions than the Olympics.

The World Cup 2026 qualifying situation is interesting—Mexico's hosting along with the US and Canada, so they're auto-qualified. That takes pressure off, but it also means less competitive matches to test themselves. The Copa América disaster exposed some serious weaknesses: lack of killer instinct, tactical rigidity, and an inability to handle pressure. Aguirre's fixing some of that, but hosting a World Cup with these issues unresolved is risky. The Nations League and Gold Cup wins show improvement, but those are CONCACAF tournaments against mostly weaker competition. Can they compete with Argentina, Brazil, and European powers? That's the $64,000 question heading into 2026.

Bottom line: Mexican football went from complete crisis to cautious optimism in one year. Club América's dominance domestically is impressive, Toluca's title shows there's still competition, and El Tri's 2025 trophies matter—but the Copa América disaster can't be forgotten. They've got two years to figure out if they're World Cup contenders or pretenders. With automatic qualification, there's no safety net if they collapse again. At least the archery team delivered in Paris.`

const issues = [
  "Copa América 2024 group stage elimination, coach fired",
  "Redemption with 2025 Nations League and Gold Cup titles",
  "Club América wins third straight Liga MX title, Toluca takes Clausura 2025",
  "Five Olympic medals at Paris 2024, women's archery team wins bronze"
]

async function main() {
  console.log('Inserting Mexico sports summary...')
  console.log(`Summary length: ${summary.length} characters`)

  await prisma.locationSummary.create({
    data: {
      id: 'MX-sports',
      name: 'Mexico',
      type: 'country',
      country: 'MX',
      category: 'sports',
      lat: 23.6345,
      lng: -102.5528,
      summary: summary,
      issues: JSON.stringify(issues),
      topStories: '[]',
      storyCount: 0,
    },
  })

  console.log('✅ Mexico sports summary inserted successfully')
  console.log(`   Character count: ${summary.length}`)
  console.log(`   Issues: ${issues.length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
