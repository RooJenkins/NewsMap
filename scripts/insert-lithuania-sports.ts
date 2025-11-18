import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const summary = `Here's the thing about Lithuanian sports right now—it's all about that 3x3 basketball bronze medal from Paris 2024, and honestly, that might be the only bright spot in what's otherwise been a pretty brutal year. Šarūnas Vingelis and the boys pulled off something special on August 5th, beating Latvia 21-18 for bronze in Lithuania's first-ever Olympic 3x3 appearance. That roster—Aurelijus Pukelis, Evaldas Džiaugys, Gintautas Matulis, and Vingelis—they upset the top-seeded Latvians after losing to the Netherlands in the semis. Four Olympic medals total for Lithuania in Paris (two silver, two bronze), which is solid, but let's be honest: basketball is what keeps this country's sports heart beating.

The traditional 5-on-5 national team? That's where things get messy. Lithuania missed out on the Paris Olympics entirely after losing to Puerto Rico 68-79 in the qualifying tournament in July 2024, despite beating Italy 88-64 and Côte d'Ivoire 97-93. That Puerto Rico loss stung, and now they're grinding through FIBA EuroBasket 2025 Qualifiers, where they just took an 76-87 beating from Greece. Next up: Great Britain on November 27, 2025, in World Cup Qualification. The pressure's mounting on this program that's used to punching above its weight.

Meanwhile, the domestic Betsafe-LKL wrapped up its 2024-25 season with Žalgiris claiming their 25th championship, beating defending champions Rytas in the finals. That's the 32nd season of Lithuania's top basketball league, and with the format tweaked to ten teams playing each other four times, the quality stayed high. Žalgiris remains the gold standard of Lithuanian hoops, and their dominance shows no signs of slowing down. The league's got solid infrastructure, decent attendance, and keeps churning out talent that finds its way to Europe's bigger leagues.

And then there's football. Oh boy. Lithuania's World Cup 2026 qualifying campaign has been an absolute disaster—winless through six matches in UEFA Group G. Lost to Poland twice (1-0 and 0-2), drew with Malta 1-1 and Finland 2-2, lost to Netherlands 2-3 and Finland again 2-1. They're officially eliminated from contention and can't finish in the top two. One match left—November 17 against the Netherlands—which will likely be another loss. The Lithuanian Football Federation is in crisis mode, and there's zero momentum heading into the next cycle. Football just doesn't have the infrastructure, investment, or talent pipeline that basketball enjoys, and it shows on the pitch every single time.

Bottom line: Lithuania is a basketball nation that happens to have a football team. That 3x3 bronze was massive, Žalgiris keeps dominating domestically, but the national 5-on-5 team needs to figure things out quickly. As for football? Don't hold your breath—this is a rebuilding job that'll take years, if it happens at all.`

const issues = [
  "3x3 basketball bronze medal at Paris 2024 Olympics",
  "Traditional 5-on-5 team missing Olympics, struggling in EuroBasket qualifiers",
  "Žalgiris wins 25th LKL championship in domestic basketball",
  "Football team winless and eliminated from World Cup 2026 qualifying"
]

async function main() {
  console.log('Inserting Lithuania sports summary...')
  console.log(`Summary length: ${summary.length} characters`)

  await prisma.locationSummary.create({
    data: {
      id: 'LT-sports',
      name: 'Lithuania',
      type: 'country',
      country: 'LT',
      category: 'sports',
      lat: 55.1694,
      lng: 23.8813,
      summary: summary,
      issues: JSON.stringify(issues),
      topStories: '[]',
      storyCount: 0,
    },
  })

  console.log('✅ Lithuania sports summary inserted successfully')
  console.log(`   Character count: ${summary.length}`)
  console.log(`   Issues: ${issues.length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
