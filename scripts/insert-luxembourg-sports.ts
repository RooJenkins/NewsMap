import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const summary = `Let's talk about Luxembourg football, because if you're expecting miracles, you're watching the wrong team. The 2024-25 campaign has been rough—and that's putting it kindly. They finished dead last in UEFA Nations League League C Group 3 with three losses and three draws across six matches. Lost to Northern Ireland 2-0, Belarus 1-0, and Bulgaria 1-0 at home, managed draws with Belarus (1-1), Bulgaria (0-0), and Northern Ireland (2-2). Fourth place means they're heading to League C/D play-offs against Malta in March 2026, which tells you everything about where this program sits right now.

World Cup 2026 qualifying? Even worse. Luxembourg's in UEFA Group A with Germany, Slovakia, and Northern Ireland, and they're winless after four matches—0 points, -9 goal differential, officially eliminated. Lost 1-3 to Northern Ireland at home (Aiman Dardari scored their only goal so far), then 0-1 to Slovakia, before getting absolutely demolished by Germany 4-0 in October. Joshua Kimmich and the Germans just toyed with them. Two more matches coming—November 14 against Germany at home (brace yourself), and November 17 away to Northern Ireland. Manager Jeff Straasser's got his work cut out for him, but realistically, what can you do when your entire country has a population smaller than most European cities?

The domestic BGL Ligue wrapped up its 111th season in May 2025, with FC Differdange 03 winning their second championship title. They were defending champions coming in and absolutely dominated—64 goals scored in 26 matches, only 5 conceded. That defensive record is absurd, even in a league with limited depth. Bettembourg returned after a 50-year absence, Rodange 91 came back after two years away, and Hostert got promoted after just one year down. The league runs August to May, and while it's not competing with the big European leagues, there's decent organization and infrastructure for a tiny nation.

Paris 2024 Olympics? Thirteen athletes represented Luxembourg across archery, athletics, cycling, equestrian, swimming, table tennis, and triathlon. Zero medals, which wasn't shocking but still disappointing. The standout moment was 61-year-old Ni Xia Lian competing in her sixth Olympics in table tennis—that's legendary stuff right there. Jeanne Lehair had a brutal triathlon when a mechanical failure hit her while sitting in 4th place. Bob Bertemes threw the shot put in his second Olympics. No medals since 1952 when Josy Barthel won gold in the 1500m. That's 72 years and counting.

Bottom line: Luxembourg sports is about managing expectations and celebrating small victories. The football team's getting hammered in qualifying, the domestic league has Differdange running the show, and Olympic glory remains a distant dream. They've got heart, they've got effort, but they're operating at a massive disadvantage in every competition they enter. At least Ni Xia Lian at 61 is giving everyone inspiration.`

const issues = [
  "Winless and eliminated from World Cup 2026 qualifying",
  "Relegated to Nations League C/D play-offs after finishing last in League C",
  "Differdange 03 dominates domestic BGL Ligue with second championship",
  "No Olympic medals at Paris 2024, continuing 72-year drought"
]

async function main() {
  console.log('Inserting Luxembourg sports summary...')
  console.log(`Summary length: ${summary.length} characters`)

  await prisma.locationSummary.create({
    data: {
      id: 'LU-sports',
      name: 'Luxembourg',
      type: 'country',
      country: 'LU',
      category: 'sports',
      lat: 49.8153,
      lng: 6.1296,
      summary: summary,
      issues: JSON.stringify(issues),
      topStories: '[]',
      storyCount: 0,
    },
  })

  console.log('✅ Luxembourg sports summary inserted successfully')
  console.log(`   Character count: ${summary.length}`)
  console.log(`   Issues: ${issues.length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
