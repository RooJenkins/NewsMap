import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Lebanon location data
const LEBANON = {
  name: 'Lebanon',
  type: 'country',
  lat: 33.8547,
  lng: 35.8623,
  country: 'Lebanon'
}

// Comprehensive Lebanon summary for November 2025 - "Rest is Politics" style
const LEBANON_SUMMARY = `# Lebanon: The Never-Ending Ceasefire

Picture this: a ceasefire that isn't really a ceasefire. Nearly a year after Israel and Hezbollah agreed to stop fighting in November 2024, southern Lebanon looks less like a war zone in recovery and more like a war zone in slow motion. Israeli jets streak overhead almost daily, Hezbollah's weapons remain firmly in place, and President Joseph Aoun—elected in January after a two-year presidential vacuum—finds himself caught between Washington's demands, Hezbollah's red lines, and a devastated nation desperate for reconstruction money that no one wants to provide.

**The Ceasefire That Isn't**

The numbers tell the story: since the November 2024 ceasefire took effect, Israeli strikes have killed over 270 Lebanese and wounded another 850, according to Lebanon's health ministry. The UN has verified that at least 107 of those killed were civilians—not Hezbollah fighters, but ordinary Lebanese caught in what Prime Minister Netanyahu calls enforcing the ceasefire "with an iron fist." Throughout November 2025, these attacks have continued at an almost daily pace. On November 6, Israel launched some of its heaviest airstrikes since the ceasefire, hitting targets across southern Lebanon and the Beqaa Valley. The stated reason? Hezbollah was attempting to rebuild its military infrastructure.

Here's where it gets thorny: Hezbollah says it's committed to the ceasefire but refuses to disarm while Israel keeps bombing Lebanese territory. Israel maintains forces at five sites inside southern Lebanon and insists it will keep striking until Hezbollah fully withdraws north of the Litani River and dismantles its military capabilities. President Aoun, in his inauguration speech, pledged that the Lebanese Armed Forces would have a "monopoly on arms"—a direct challenge to Hezbollah. But here's the problem: the Lebanese army doesn't actually control all of Lebanon, and everyone knows it. In early November, LAF Commander Rodolph Haykal proposed suspending disarmament efforts if Israeli attacks continue, citing how badly they disrupt the army's work. You can see the bind: how do you disarm Hezbollah while Israel is still striking, and how do you stop Israeli strikes while Hezbollah remains armed?

**The Money Problem**

Lebanon desperately needs reconstruction funding. The 2023-24 conflict caused an estimated $8.5 billion in damage—$3.5 billion in physical destruction, $5.1 billion in economic losses, and 166,000 jobs vanished. Southern Lebanon, eastern Lebanon, and Beirut's southern suburbs lie in ruins. Around 20% of the population was internally displaced during the fighting, and most still can't return home because their villages are either destroyed or sit in Israeli-controlled zones.

The international community's message has been crystal clear: no reconstruction money while Hezbollah maintains political and military dominance. In November 2025, a Lebanese delegation received what officials described as a "clear and firm" warning from the US Treasury to actively fight Hezbollah's funding sources. The squeeze is deliberate: Iran transferred more than $1 billion to Hezbollah since January 2025, keeping the group afloat, but that money can't rebuild destroyed neighborhoods. International donors, the World Bank, and the IMF are all saying the same thing—get Hezbollah under control, or you're on your own.

This creates a brutal catch-22. Hezbollah's base—Lebanon's Shia community, particularly in the south—has borne the brunt of Israeli strikes. Their homes are rubble, their livelihoods are gone, and reconstruction funds are being held hostage to political conditions they can't immediately meet. Meanwhile, the economic crisis that began in 2019 continues to grind away. Lebanon's GDP fell 38% between 2019 and 2024, inflation hit 221% at its peak in 2023, and the Lebanese lira lost over 90% of its value. Bank depositors still can't access their dollar accounts. It's an economy in freefall with no safety net.

**The Reform Window**

President Aoun and Prime Minister Nawaf Salam—a respected International Court of Justice judge—took office with enormous expectations. Salam swiftly formed a government seen as competent and reform-oriented, a rarity in Lebanese politics. The administration's priorities are ambitious: economic reforms, banking sector overhauls, fighting corruption, and regaining state control over security.

In mid-2025, there was real progress. An IMF mission visited Lebanon from May 28 to June 5, holding what they called "productive discussions" on a comprehensive reform program. The talks covered banking sector restructuring, fiscal sustainability, debt management, monetary policy, anti-money laundering, and state-owned enterprise reforms. In April, parliament passed an amendment to the banking secrecy law granting authorities retroactive access to banking records going back ten years—a significant transparency win. In July, the government adopted a banking restructuring law establishing a Bank Restructuring Authority with powers to recapitalize, merge, or even liquidate failing banks.

But here's the tension: these reforms require external support, preferably on highly concessional terms. Lebanon's reconstruction needs are massive. Yet donors won't provide that support until Hezbollah is neutered. And Hezbollah won't be neutered while Israel keeps bombing and while its political position depends on maintaining its "resistance" credentials. President Aoun is caught in the middle—he wants negotiations with Israel, but Hezbollah insists that any political talks "would not serve the national interest." The group is committed to the ceasefire militarily but will not negotiate politically.

**The International Angle**

Lebanon's crisis ripples far beyond its borders. The country hosts more refugees per capita than anywhere in the world—over a million Syrians (plus around 250,000 registered Palestinians). After the fall of Assad's regime in December 2024, about 125,000 Syrians returned home in the first month alone, but hundreds of thousands remain, placing enormous strain on Lebanon's already collapsed infrastructure.

For the United States, Lebanon is a test case: Can Washington use economic pressure to pry a country loose from Iranian influence? For Israel, the question is whether bombing Hezbollah into submission works or just entrenches the group's domestic legitimacy. For Iran, Hezbollah is a crown jewel in its regional network—Tehran has poured over $1 billion into the group this year alone and won't abandon it easily. For Europe and Arab states, Lebanon is both a humanitarian disaster and a migration pressure point.

Israel maintains that it won't fully withdraw from southern Lebanon until Hezbollah complies with the ceasefire terms. Hezbollah says it won't disarm while under attack. The Lebanese government says it can't disarm Hezbollah while Israel occupies Lebanese territory. It's a three-way deadlock, and the civilians of southern Lebanon are the ones paying the price.

**The Bottom Line**

Lebanon is stuck in a doom loop. Reconstruction requires international funds, which require Hezbollah's defanging, which requires political stability, which requires ending Israeli strikes, which requires Hezbollah's disarmament, which requires... you see the problem. President Aoun and PM Salam represent Lebanon's best chance in years for credible leadership, but they're trying to rebuild a house while it's still on fire.

The key variables to watch: Will Israel accept any deal short of Hezbollah's complete disarmament? Will Hezbollah agree to substantive political negotiations with Israel? Can the Lebanese army actually extend control into Hezbollah-dominated areas without triggering a civil conflict? And will international donors provide reconstruction aid before or after Hezbollah's grip loosens?

For now, the ceasefire holds—sort of. But it's less a peace agreement and more a frozen conflict with periodic explosions. Lebanon's tragedy is that everyone knows what needs to happen (state control, Hezbollah disarmament, reconstruction, reforms), but no one can agree on the sequencing, and every faction has veto power. Until that changes, Lebanon will remain trapped: too broken to rebuild, too armed to disarm, too divided to govern.`

// Extract issues from the summary (looking for ## headings)
const ISSUES = [
  "The Ceasefire That Isn't",
  "The Money Problem",
  "The Reform Window",
  "The International Angle"
]

// Main execution
async function updateLebanonSummary() {
  console.log('Updating Lebanon summary with November 2025 "Rest is Politics" style analysis...\n')

  try {
    // Store in database
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: LEBANON.name,
          type: LEBANON.type,
          category: 'all'
        }
      },
      create: {
        name: LEBANON.name,
        type: LEBANON.type,
        country: LEBANON.country,
        lat: LEBANON.lat,
        lng: LEBANON.lng,
        category: 'all',
        summary: LEBANON_SUMMARY,
        issues: JSON.stringify(ISSUES),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      update: {
        summary: LEBANON_SUMMARY,
        issues: JSON.stringify(ISSUES),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date()
      }
    })

    console.log('✅ Lebanon summary updated successfully!')
    console.log(`\nSummary length: ${LEBANON_SUMMARY.length} characters`)
    console.log(`Issues identified: ${ISSUES.length}`)
    console.log(`\nPreview:`)
    console.log(LEBANON_SUMMARY.split('\n').slice(0, 15).join('\n'))
    console.log('...\n')

  } catch (error) {
    console.error('❌ Failed to update Lebanon summary:', error)
    throw error
  }
}

updateLebanonSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
