import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addSudanSummary() {
  console.log('📝 Adding Sudan country summary...\n')

  const sudanSummary = {
    name: 'Sudan',
    type: 'country',
    country: 'Sudan',
    lat: 12.8628,
    lng: 30.2176,
    category: 'all',
    summary: `Sudan's civil war just took a catastrophic turn. On October 26, 2025, the Rapid Support Forces (RSF)—a paramilitary group that began as camel-mounted militia and evolved into a mercenary army—seized el-Fasher, the last government stronghold in Darfur, after an 18-month siege and deliberate starvation campaign. What followed was a week of mass executions, hospital massacres, and ethnic violence that UN human rights chief Volker Turk called "atrocities of an unimaginable scale." Nearly 500 patients were reportedly killed at the Saudi Maternity Hospital. Entire families were cut down fleeing their homes. Of el-Fasher's 260,000 residents, an estimated 82,000 have fled—many on foot through desert terrain to camps with no water, food, or medicine. This isn't just another battle in a forgotten war. The fall of el-Fasher marks the effective collapse of the Sudanese state in the west and signals a humanitarian catastrophe on a scale the world is dangerously ignoring.

**The Big Issue 1: The Fall of el-Fasher and Mass Atrocities**

El-Fasher was supposed to be defensible. The capital of North Darfur, it was the Sudanese Armed Forces' (SAF) last major foothold in the entire Darfur region—a symbolic and strategic linchpin. The RSF, led by warlord Mohamed Hamdan Dagalo (known as "Hemedti"), laid siege to the city for 18 months, deliberately starving civilians and blocking humanitarian aid. When the city finally fell on October 26, RSF fighters moved house to house, executing civilians, torturing survivors, and forcing abductions with ransom demands under threat of death. Survivors who made it to refugee camps in surrounding areas—like Tawila, 50 kilometers away—described scenes of unimaginable horror: families gunned down while fleeing, women subjected to sexual violence, wounded patients executed in their hospital beds. The U.S. State Department issued a stark warning: "The RSF must stop engaging in retribution and ethnic violence; the tragedy in El Geneina must not be repeated." That reference is chilling—El Geneina, in West Darfur, saw thousands massacred in ethnically targeted attacks by the RSF and allied Arab militias in 2023. The pattern is repeating. There's now a "complete blackout" of information coming out of el-Fasher, with up to 15,000 people believed trapped in surrounding villages, cut off from aid and communication. The RSF's takeover isn't just military conquest—it's systematic violence designed to terrorize and displace non-Arab communities.

**The Big Issue 2: The Ceasefire That Isn't**

On November 7, the RSF announced it had agreed to a three-month humanitarian ceasefire proposal from the Quad—a mediation group comprising the United States, Egypt, the UAE, and Saudi Arabia. The proposal envisions a pause followed by a permanent ceasefire and eventual civilian rule. Sounds promising, right? Except the Sudanese Armed Forces haven't agreed. A military official told the Associated Press that the army would "only agree to a truce when the RSF completely withdraws from civilian areas and gives up weapons"—conditions the RSF will never accept. And even as the RSF publicly backed the ceasefire, it continued shelling hospitals. On November 7, the same day the ceasefire was announced, RSF artillery killed five people and injured five more at a hospital in Dilling, South Kordofan. That same week, drone attacks struck Khartoum's suburbs and killed at least 40 people at a funeral in el-Obeid, North Kordofan's capital. UN human rights chief Turk warned there is "no sign of de-escalation" and that developments on the ground indicate "clear preparations for intensified hostilities." This isn't a ceasefire—it's a PR move. The RSF is consolidating territorial gains, the army is regrouping, and the killing continues. The Quad's mediation, while well-intentioned, has no enforcement mechanism and no leverage over either side. Sudan's war is about to get worse, not better.

**The Big Issue 3: The Conflict Spreads to Kordofan**

Darfur has been the epicenter of Sudan's war, but the violence is now metastasizing eastward into the Kordofan region—a strategic crossroads that connects Darfur to Khartoum and the oil-producing south. The RSF recently captured Bara, a key town in North Kordofan, and has intensified attacks around el-Obeid, the region's capital. On November 3, a drone strike killed at least 40 people at a funeral outside el-Obeid—one of the deadliest single attacks in months. In South Kordofan, the RSF continues besieging Kadugli and shelling civilian infrastructure, including hospitals. The expansion into Kordofan is deeply troubling. If the RSF consolidates control there, it gains access to critical supply routes, oil infrastructure, and a direct path to Khartoum. The army, already overstretched, is struggling to hold defensive lines. Amnesty International has documented widespread war crimes by the RSF and allied militias, particularly ethnically targeted attacks against non-Arab communities. The organization is calling on all states—especially the UAE, which has been accused of supplying weapons and financial support to the RSF—to cease military assistance. But with the UAE's strategic interests in Sudanese ports and gold mines, that pressure is unlikely to materialize. The war is no longer confined to Darfur; it's becoming a nationwide collapse.

**The International Angle**

Sudan is facing what the UN describes as "the world's worst humanitarian crisis," yet it barely registers in global headlines. Nearly 25 million people—more than half the population—are experiencing extreme hunger. Over 12 million have been displaced since the war began in April 2023, making it the largest displacement crisis globally. And yet, international engagement is minimal. The Quad's ceasefire proposal is the most significant diplomatic effort in months, but it lacks teeth. The United States, focused on Ukraine and the Middle East, has largely relegated Sudan to the background. Egypt and Saudi Arabia have strategic interests but limited influence. And the UAE, despite participating in mediation, continues to back the RSF—both financially and militarily—because it sees the group as a vehicle for economic access to Sudan's gold and agricultural resources. European nations, meanwhile, are more concerned about preventing a new refugee wave than addressing the root causes of the crisis. The African Union and the UN have issued warnings but offered little concrete action. The world is treating Sudan as a humanitarian problem, not a geopolitical crisis—and that indifference is enabling mass atrocities. If the international community doesn't intervene with serious pressure, sanctions, and humanitarian access, Sudan risks becoming a failed state on the scale of Somalia or Yemen.

**The Bottom Line**

Sudan's war is no longer just a civil conflict—it's a collapse of the state, a humanitarian catastrophe, and a moral failure of the international community. The fall of el-Fasher marks the effective loss of Darfur to the RSF, a paramilitary force credibly accused of war crimes and ethnic cleansing. The ceasefire proposal is dead on arrival, the violence is spreading into Kordofan, and 25 million people are on the brink of famine. The world is watching—or rather, it's not. Without urgent international intervention, Sudan is heading toward either total fragmentation or prolonged atrocity. The question isn't whether this gets worse—it's whether anyone will care enough to stop it.`,
    issues: JSON.stringify([
      "El-Fasher falls: RSF takeover after 18-month siege, mass executions, 82,000 displaced",
      "Ceasefire proposal collapses: SAF rejects terms, RSF continues attacks, no enforcement",
      "Conflict spreads to Kordofan: Bara captured, el-Obeid besieged, oil routes threatened",
      "Humanitarian catastrophe: 25M facing hunger, 12M displaced, world's worst crisis",
      "International indifference: UAE backs RSF, Quad mediation toothless, no intervention"
    ]),
    topStories: JSON.stringify([
      {
        title: "RSF Seizes el-Fasher After 18-Month Siege, Mass Killings Reported",
        source: "Al Jazeera",
        link: "https://www.aljazeera.com/news/2025/11/2/humanitarian-disaster-worsens-across-sudan-after-rsf-takes-over-el-fasher",
        pubDate: new Date('2025-11-02').toISOString()
      },
      {
        title: "UN Warns of 'Unimaginable Atrocities' in Sudan's el-Fasher",
        source: "Al Jazeera",
        link: "https://www.aljazeera.com/news/2025/11/8/un-rights-office-warns-of-unimaginable-atrocities-in-sudans-el-fasher",
        pubDate: new Date('2025-11-08').toISOString()
      },
      {
        title: "Sudan Slams RSF 'War Crimes' in el-Fasher as Survivors Recount Killings",
        source: "Al Jazeera",
        link: "https://www.aljazeera.com/news/2025/11/3/sudan-slams-rsf-war-crimes-in-el-fasher-as-survivors-recount-mass-killings",
        pubDate: new Date('2025-11-03').toISOString()
      },
      {
        title: "Sudanese Army Intercepts Drone Attacks After RSF Agrees to Truce",
        source: "Al Jazeera",
        link: "https://www.aljazeera.com/news/2025/11/7/sudanese-army-intercepts-drone-attacks-after-rsf-agrees-to-truce",
        pubDate: new Date('2025-11-07').toISOString()
      },
      {
        title: "Sudan Paramilitary Group Agrees to Ceasefire Proposal After Massacre",
        source: "NBC News",
        link: "https://www.nbcnews.com/world/africa/sudan-rapid-support-forces-agree-us-ceasefire-proposal-el-fasher-rcna242335",
        pubDate: new Date('2025-11-07').toISOString()
      },
      {
        title: "Civilians Must Be Protected Amid Escalating RSF Attacks in Kordofan",
        source: "Amnesty International",
        link: "https://www.amnesty.org/en/latest/news/2025/11/sudan-civilians-escalating-rsf-attacks-kordofan/",
        pubDate: new Date('2025-11-06').toISOString()
      },
      {
        title: "Drone Attack Kills 40 at Funeral in el-Obeid, North Kordofan",
        source: "Amnesty International",
        link: "https://www.amnesty.org/en/latest/news/2025/11/sudan-civilians-escalating-rsf-attacks-kordofan/",
        pubDate: new Date('2025-11-03').toISOString()
      },
      {
        title: "'Blood on the Sand': UN Decries World's Failure as Sudan's El Fasher Falls",
        source: "UN News",
        link: "https://news.un.org/en/story/2025/10/1166224",
        pubDate: new Date('2025-10-28').toISOString()
      },
      {
        title: "The Cost of Silence in Sudan's Civil War is Too High",
        source: "OHCHR",
        link: "https://www.ohchr.org/en/stories/2025/11/cost-silence-sudans-civil-war-too-high",
        pubDate: new Date('2025-11-05').toISOString()
      },
      {
        title: "Sudan's Rapid Support Forces Agree to Humanitarian Ceasefire",
        source: "Democracy Now",
        link: "https://www.democracynow.org/2025/11/7/headlines/sudans_rapid_support_forces_agree_to_humanitarian_ceasefire",
        pubDate: new Date('2025-11-07').toISOString()
      }
    ]),
    storyCount: 10
  }

  // Check if Sudan already exists for this category
  const existing = await prisma.locationSummary.findFirst({
    where: {
      name: sudanSummary.name,
      type: sudanSummary.type,
      category: sudanSummary.category
    }
  })

  if (existing) {
    console.log('⚠️  Sudan summary already exists, updating...')
    await prisma.locationSummary.update({
      where: { id: existing.id },
      data: {
        ...sudanSummary,
        updatedAt: new Date()
      }
    })
    console.log('✅ Sudan summary updated successfully!')
  } else {
    console.log('➕ Creating new Sudan summary...')
    await prisma.locationSummary.create({
      data: {
        ...sudanSummary,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    console.log('✅ Sudan summary created successfully!')
  }

  console.log('\n📊 Summary Details:')
  console.log(`   Location: ${sudanSummary.name} (${sudanSummary.lat}, ${sudanSummary.lng})`)
  console.log(`   Type: ${sudanSummary.type}`)
  console.log(`   Category: ${sudanSummary.category}`)
  console.log(`   Character count: ${sudanSummary.summary.length}`)
  console.log(`   Issues: ${JSON.parse(sudanSummary.issues).length}`)
  console.log(`   Top Stories: ${JSON.parse(sudanSummary.topStories).length}`)
}

addSudanSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
