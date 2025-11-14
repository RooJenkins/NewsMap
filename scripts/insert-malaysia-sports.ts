import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const summary = `Here's the thing about Malaysian sports—it's badminton or bust, and even the badminton didn't deliver gold in Paris. Lee Zii Jia and the men's doubles pair Aaron Chia/Soh Wooi Yik both grabbed bronze medals at the 2024 Olympics, giving Malaysia two bronzes total and a tie for 80th place overall. Lee Zii Jia's bronze match on August 5th was massive—he came back from losing the first set 13-21 to India's Lakshya Sen, grinding out 21-16 and 21-11 victories to become only the third Malaysian male singles player to medal at the Olympics after Rashid Sidek and Lee Chong Wei. Aaron and Wooi Yik retained their bronze from Tokyo 2021, beating Denmark's Astrup/Rasmussen 16-21, 22-20, 21-19 in a thriller. But let's be real: Malaysia's been chasing that elusive first Olympic gold since forever, and it's still not happening.

Lee Zii Jia's 2024-25 season has been a rollercoaster. He won the Thailand Open and Australian Open early in 2024, finished runner-up to Viktor Axelsen at the Malaysian Masters (losing 6-21, 22-20, 13-21), and showed flashes of brilliance. But then came the injuries—he retired in the first round at China Masters after sustaining another injury, lost first round at Hong Kong Open, and crashed out at the World Championships after returning from a right ankle ligament injury. When he's healthy, he's world-class. When he's not, Malaysia's medal hopes evaporate. That's the problem with relying on one sport.

Football? Absolute heartbreak. Malaysia's World Cup 2026 qualifying campaign in Group D started brilliantly—beat Kyrgyzstan 4-3 and Taiwan 1-0 in November 2023 to top the group with six points. Then reality hit: lost to Oman twice (2-0 away, 0-2 at home), drew with Kyrgyzstan 1-1 in Bishkek, and beat Taiwan 3-1. Finished third with 10 points, same as Kyrgyzstan but eliminated on goal difference. Missing out on the third round by one point is brutal, especially when you consider Malaysia were the lowest-ranked team among all group leaders at one point. The Harimau Malaya had dreams of making history, but those dreams are dead for this cycle.

Domestically, Johor Darul Takzim (JDT) is completely dominating Malaysian football. They won their record 11th Super League title on February 24, 2025, with four matches to spare, then thrashed Selangor 6-1 in the FA Cup final in August 2024—Juan Muñiz scored a hat-trick in that one. The 2024-25 season was JDT's 10th in the rebranded league, and they're not just winning, they're obliterating the competition. YouTuber IShowSpeed even visited Sultan Ibrahim Stadium in September, watching Bergson score a hat-trick in a 6-1 win over Kelantan. JDT's also competing in the inaugural AFC Champions League Elite, which is a big deal for Malaysian football's profile.

Bottom line: Malaysia's a badminton nation with football ambitions that keep getting crushed. Those two bronze medals in Paris were solid, but the gold medal drought continues. Lee Zii Jia's injury issues are concerning, and the national football team just can't break through on the world stage. JDT's domestic dominance is impressive, but until the national team starts qualifying for major tournaments, Malaysian football will stay in the shadows. At least there's always badminton.`

const issues = [
  "Two badminton bronze medals at Paris 2024, Olympic gold drought continues",
  "Lee Zii Jia's injury struggles after strong 2024 season",
  "Football team eliminated from World Cup 2026 qualifying by one point",
  "Johor Darul Takzim wins record 11th Super League title"
]

async function main() {
  console.log('Inserting Malaysia sports summary...')
  console.log(`Summary length: ${summary.length} characters`)

  await prisma.locationSummary.create({
    data: {
      id: 'MY-sports',
      name: 'Malaysia',
      type: 'country',
      country: 'MY',
      category: 'sports',
      lat: 4.2105,
      lng: 101.9758,
      summary: summary,
      issues: JSON.stringify(issues),
      topStories: '[]',
      storyCount: 0,
    },
  })

  console.log('✅ Malaysia sports summary inserted successfully')
  console.log(`   Character count: ${summary.length}`)
  console.log(`   Issues: ${issues.length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
