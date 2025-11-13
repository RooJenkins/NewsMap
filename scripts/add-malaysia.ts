import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const MALAYSIA_SUMMARY = {
  name: 'Malaysia',
  type: 'country',
  lat: 4.2105,
  lng: 101.9758,
  country: 'Malaysia',
  summary: `# Malaysia

Anwar Ibrahim brushed off the Cabinet reshuffle rumors on November 12, 2025, with the practiced ease of a politician who has spent decades navigating Malaysia's treacherous coalition politics. But behind the studied calm lies a prime minister under siege: the November 29 Sabah state election looms as the ultimate stress test for his reform agenda, while former PM Najib Razak—sentenced for looting billions from the 1MDB sovereign wealth fund—fights for house arrest and eyes a 2026 political comeback. Malaysia's economy is performing better than expected (4.7% growth in 2025), but the contradictions are mounting: Anwar preaches clean governance while Najib's sentence gets halved, champions ASEAN unity while downplaying China's coast guard harassment in Malaysia's own waters, and promises subsidy reforms while trimming them just enough to keep the budget deficit at 3.8%. The Rest-is-Politics question is whether Anwar can hold his fragile coalition together while delivering on two decades of reformist promises—or whether Malaysia's patron-client politics will grind him down like every idealist before him.

## Major Issues

### 1. The Sabah Test: Can Anwar Survive "Sabah for Sabahans"?

**What's happening:**
- The Sabah state election is scheduled for November 29, 2025, with nomination day on November 16, when hundreds of candidates will file for one of 73 state assembly seats
- Anwar's Pakatan Harapan coalition faces a coordinated challenge from local forces rallying around the "Sabah for Sabahans" movement, which demands greater autonomy, resource control, and recognition of Sabah's distinct identity within Malaysia
- The election is widely seen as a bellwether for Anwar's national standing ahead of the next general election (due by early 2028), with internal polling showing PKR and Pakatan Harapan are "not in a strong position" to win
- Sabahans are frustrated by decades of peninsula-centric governance: despite rich oil and gas reserves, Sabah remains Malaysia's poorest state, with much of its revenue flowing to Kuala Lumpur
- The U.S. Defense Secretary Pete Hegseth held ASEAN defense meetings in Kuala Lumpur on November 1-3, 2025, putting Malaysia's balancing act between Washington and Beijing on full display during the Sabah campaign
- Dissatisfaction over Anwar's anti-corruption efforts undermines improvements in public sentiment from economic management—voters want results on graft, not just rhetoric

**Why it matters:**
- Sabah is not just a state election—it's a referendum on Anwar's ability to manage Malaysia's ethnic and regional tensions while holding together his Frankenstein's monster coalition (Pakatan Harapan + Barisan Nasional + Sabah/Sarawak parties)
- A loss in Sabah would shatter the narrative of Anwar as the unity government leader and embolden rivals within his own coalition—expect defections, leadership challenges, and another round of the political instability Malaysia has suffered since 2018
- The "Sabah for Sabahans" movement taps into deeper grievances: Sabah and Sarawak joined Malaysia in 1963 with promises of autonomy (the Malaysia Agreement 1963, or MA63), but those promises were systematically eroded—oil royalties, federal control, migration policies all favor Kuala Lumpur
- Anwar's reform agenda depends on credibility: if he can't deliver clean governance, decentralization, and accountability, voters will revert to the old ethnic-patronage model (UMNO and the Malay-Muslim vote banks)
- The timing is brutal: internal polling already shows weakness, and losing Sabah means Anwar limps into 2026-2027 with no mandate and no momentum, while Najib's potential parole (August 2026) creates a rival power center within Anwar's own coalition partner (UMNO)

**Prospects:**
- Expect a close, messy result on November 29: Anwar's coalition may hold Sabah, but with reduced margins and defections to local parties, forcing another round of horse-trading and concessions
- If Pakatan Harapan loses Sabah outright, watch for immediate instability: UMNO will demand Cabinet positions and policy concessions, Anwar's reformist allies will bail, and Malaysia slides back into coalition musical chairs
- The "Sabah for Sabahans" movement will persist regardless of the result—this is a long-term trend driven by economic inequality and identity politics, not a temporary campaign slogan
- Anwar's best play is damage control: make symbolic concessions on MA63 implementation (higher oil royalties, more federal jobs for Sabahans), survive the election, and hope national voters give him credit for economic performance
- The worst-case scenario is a Sabah loss that triggers a no-confidence vote in parliament—Anwar's majority is slim (two-thirds, but fragile), and defections could bring down the government before 2028
- Long-term, Malaysia's federal structure is under strain: if Sabah and Sarawak (which also has grievances) start pushing harder for autonomy or revenue-sharing, the entire post-1963 bargain unravels

### 2. The Najib Factor: Can a Convicted Criminal Make a Comeback?

**What's happening:**
- Former Prime Minister Najib Razak is serving a six-year prison sentence (reduced from 12 years by a royal pardon in February 2024) for corruption related to the 1MDB scandal, in which more than $4.5 billion was stolen from Malaysia's sovereign wealth fund
- In January 2025, a Malaysian court granted Najib access to a secret "addendum order" allegedly issued by the former king alongside the pardon, which Najib claims authorizes house arrest for the remainder of his sentence
- However, Malaysia's Ministry of Law states it has "no record" of any house arrest authorization, and the palace denies issuing such an order, leading to accusations of a cover-up
- Najib remains on trial for multiple other 1MDB cases: a November 14, 2025 hearing for criminal breach of trust involving RM6.6 billion ($1.48 billion), and an April 21, 2026 trial for money laundering involving RM27 million from SRC International
- Najib's lawyer, Muhammad Shafee Abdullah, said in October 2025 that Najib "may return to politics if pardoned," and could be eligible for parole as early as August 2026—just in time for the next general election campaign
- JPMorgan paid $330 million to settle 1MDB claims in 2025, and Goldman Sachs executive Tim Leissner received a two-year prison sentence in 2025 for his role in the scandal—but Malaysia still hasn't recovered $3 billion of the stolen funds

**Why it matters:**
- Najib's pardon and potential house arrest are a litmus test for Anwar's anti-corruption credentials: Anwar came to power promising clean governance and accountability, but his coalition partner UMNO is demanding Najib's release as the price of keeping Anwar in office
- The house arrest controversy reeks of palace intrigue and backroom deals: if Najib's secret "addendum order" exists, it means the royal pardon was negotiated with conditions that were never disclosed—undermining rule of law and transparency
- Najib remains UMNO's most popular figure, and his potential return in 2026 would electrify the Malay-Muslim base that Anwar needs to win elections—creating a direct rival within Anwar's own coalition
- The 1MDB scandal is far from over: Malaysia is still hunting $3 billion in stolen assets, paying off $12 billion in 1MDB-linked debts (until 2039), and litigating cases against international banks—Najib's trials keep the corruption issue alive and poison public trust
- If Najib is released and returns to politics, it signals that Malaysia's elites are untouchable: steal $4.5 billion, get a six-year sentence (served in prison luxury), then walk free and run for office again—voters who believe in reform will be demoralized
- The timing is explosive: if Najib is released in August 2026 and Anwar has just lost Sabah (November 2025), UMNO will be emboldened to demand Najib's political rehabilitation as the price of continuing the coalition—Anwar either capitulates and shreds his credibility, or refuses and risks UMNO pulling out and collapsing his government

**Prospects:**
- The house arrest case will drag through courts into 2026—expect no resolution before the parole eligibility date in August 2026, leaving maximum political uncertainty
- If Najib is granted house arrest or parole, he will immediately become a kingmaker (or king) in UMNO, using his base to pressure Anwar and position himself for the 2028 general election (if he can get his conviction overturned or pardoned fully)
- Watch the remaining 1MDB trials: if Najib is convicted in the RM6.6 billion or RM27 million cases, it complicates his political return—but given Malaysia's judiciary record and political interference, don't bet on convictions sticking
- Anwar is trapped: he needs UMNO to stay in power, but UMNO's price is protecting Najib—Anwar can't deliver justice without losing his government
- The international angle: if Najib returns to politics, Western governments and investors will be horrified—Malaysia's reputation as a kleptocracy (earned during Najib's tenure) will come roaring back, scaring off foreign capital and undermining Anwar's economic diplomacy
- Long-term, the 1MDB scandal is Malaysia's original sin: until there's real accountability (not just performative trials and selective prosecutions), public trust in government will remain broken, and voters will assume all politicians are corrupt

### 3. The China Tightrope: Downplaying Disputes While Coast Guards Circle

**What's happening:**
- As ASEAN chairman in 2025, Anwar has positioned Malaysia as a neutral broker in regional disputes, urging ASEAN not to "single out" Beijing over South China Sea tensions (Davos, January 2025)
- U.S. Defense Secretary Pete Hegseth attended ASEAN defense meetings in Kuala Lumpur on November 1-3, 2025, where he urged Southeast Asian nations to stand firm against China's "destabilizing" actions in the South China Sea
- Despite Anwar's conciliatory rhetoric, China Coast Guard ships maintain a near-constant presence at Luconia Shoals (off Sarawak) and regularly harass Malaysian drilling rigs and survey ships in Malaysia's exclusive economic zone (EEZ)
- After meeting President Xi Jinping in Beijing in November 2024, Anwar said Malaysia was "ready to negotiate" on the South China Sea bilaterally, bypassing ASEAN and international arbitration
- China is Malaysia's top economic partner, with trade worth more than $200 billion in 2022, giving Beijing enormous leverage over Kuala Lumpur's foreign policy
- Malaysia has established a bilateral dialogue on maritime affairs led by the Prime Minister's Department, sidestepping the Ministry of Foreign Affairs and keeping disputes out of public view
- Anwar facilitated a Thailand-Cambodia ceasefire in 2025 as ASEAN chairman, demonstrating regional diplomatic skills—but China, not ASEAN, is the real test

**Why it matters:**
- Malaysia is trying to have it both ways: take China's money while keeping U.S. security guarantees, but the Biden/Trump administrations are losing patience with ASEAN fence-sitting—if Malaysia won't push back on Chinese aggression in its own waters, why should Washington care?
- The Luconia Shoals standoff is a slow-motion humiliation: Chinese coast guard ships operate with impunity in Malaysia's EEZ, and Anwar's government issues no protests, files no complaints, and tells the public to "let sleeping dogs lie"—this is sovereignty surrender by paralysis
- Bilateral negotiations with China are a trap: Beijing insists on one-on-one talks because it can bully smaller countries more easily than ASEAN collectively—Malaysia negotiating alone means Malaysia loses
- Anwar's ASEAN chairmanship is a double-edged sword: he can facilitate regional deals (Thailand-Cambodia ceasefire), but his neutrality on China undermines ASEAN unity—Vietnam, the Philippines, and Indonesia are tired of Malaysia's kid-glove treatment of Beijing
- The economic dependence is real: $200 billion in trade, Chinese investment in infrastructure (East Coast Rail Link, ports, manufacturing), and Belt and Road debts make Kuala Lumpur vulnerable to Beijing's economic coercion—if Malaysia protests too loudly, China can cut trade or cancel projects
- The U.S. is watching: if Malaysia won't defend its own sovereignty, Washington will write off Southeast Asia as lost to China's sphere of influence, reducing U.S. engagement and leaving Malaysia more dependent on Beijing—a self-fulfilling prophecy of Chinese dominance

**Prospects:**
- Expect more of the same: Chinese coast guard harassment, Malaysian silence, and Anwar's public downplaying of tensions—the status quo is uncomfortable but manageable for Kuala Lumpur
- The risk is escalation: if China seizes Luconia Shoals outright (building an artificial island or permanent base), Malaysia faces a crisis—protest and risk economic retaliation, or stay silent and lose all credibility
- Watch Malaysia's defense budget: if Kuala Lumpur starts seriously investing in naval capabilities (submarines, patrol vessels, maritime surveillance), it signals a shift toward harder deterrence—but that costs money Malaysia doesn't have
- The ASEAN chairmanship ends in 2025, and Anwar's diplomatic balancing act becomes harder—Vietnam or the Philippines could be more aggressive on South China Sea disputes, forcing Malaysia to pick sides
- If Trump returns to the White House in 2025, U.S.-China tensions escalate, and Malaysia's fence-sitting becomes untenable—Washington will demand explicit support (freedom of navigation operations, joint exercises, basing rights), and Beijing will demand explicit neutrality
- Long-term, Malaysia's China policy is economically rational but strategically suicidal: trade dependence without security independence means Malaysia becomes a Chinese client state—voters won't revolt because they don't see the South China Sea as existential, but future generations will pay the price

## The International Angle

Malaysia's role as ASEAN chairman in 2025 gives Anwar a global stage, but it also exposes the contradictions in his foreign policy. Anwar champions Palestinian rights and criticizes Israeli actions, earning applause from Muslim-majority nations—but he downplays Chinese aggression in Malaysia's own waters. The U.S. sees Anwar as a potential partner (democratic reformer, pro-Western education, fluent English), but if he won't stand up to Beijing, Washington will hedge with Vietnam, Indonesia, and the Philippines instead.

For China, Malaysia is the model tributary state: economically integrated, politically compliant, and strategically neutered. Beijing doesn't need to invade—it just needs to keep trade flowing and infrastructure loans coming, and Malaysia will stay in line. The Belt and Road Initiative locks Malaysia into Chinese dependency: the East Coast Rail Link, ports, and manufacturing deals create jobs and political credit for Anwar, but also strategic leverage for Beijing.

For Western investors, Malaysia is a hedge against China risk: similar manufacturing capabilities, cheaper labor than Singapore, and relatively stable politics (by Southeast Asian standards). But the 1MDB scandal and Najib's potential comeback scare off institutional investors who remember the kleptocracy years.

For Singapore, Malaysia is both economic partner and strategic liability: Singapore depends on Malaysian water, electricity, and labor, but if Malaysia destabilizes (Anwar's government collapses, ethnic tensions escalate, or China takes control of ports), Singapore's security is at risk.

## The Bottom Line

Anwar Ibrahim is the dog that finally caught the car. After two decades in opposition (and two stints in prison on politically motivated charges), he's finally prime minister—and discovering that Malaysia's structural problems are bigger than any one leader can fix. The Sabah election on November 29 will reveal whether his coalition has staying power or is just another temporary arrangement in Malaysia's post-2018 political chaos. Najib's looming parole and potential return haunt Anwar's anti-corruption agenda—how can you promise clean governance when your coalition partner demands leniency for the man who stole $4.5 billion? And the China tightrope keeps getting narrower: take Beijing's money but lose sovereignty, or stand up to China and lose economic growth.

Malaysia's economy is performing decently (4.7% growth, subsidy reforms, renewable energy targets), but the political foundations are crumbling. If Anwar loses Sabah, faces a Najib comeback, and continues appeasing China, his reform project collapses into just another iteration of Malaysia's patron-client politics. What to watch: the November 29 Sabah results (a loss triggers instability), Najib's August 2026 parole eligibility (a release triggers a coalition crisis), and China's next move in the South China Sea (a seizure triggers a sovereignty crisis). Anwar has the vision and the rhetoric—but Malaysia's elite politics, ethnic divisions, and Chinese dependency may be too much for even a lifelong reformer to overcome.`,
  issues: JSON.stringify([
    'The Sabah Test: Can Anwar Survive "Sabah for Sabahans"?',
    'The Najib Factor: Can a Convicted Criminal Make a Comeback?',
    'The China Tightrope: Downplaying Disputes While Coast Guards Circle'
  ]),
  topStories: JSON.stringify([]),
  storyCount: 0
}

async function addMalaysia() {
  console.log('Adding Malaysia to database...\n')

  try {
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: MALAYSIA_SUMMARY.name,
          type: MALAYSIA_SUMMARY.type,
          category: 'all'
        }
      },
      create: {
        name: MALAYSIA_SUMMARY.name,
        type: MALAYSIA_SUMMARY.type,
        country: MALAYSIA_SUMMARY.country,
        lat: MALAYSIA_SUMMARY.lat,
        lng: MALAYSIA_SUMMARY.lng,
        category: 'all',
        summary: MALAYSIA_SUMMARY.summary,
        issues: MALAYSIA_SUMMARY.issues,
        topStories: MALAYSIA_SUMMARY.topStories,
        storyCount: MALAYSIA_SUMMARY.storyCount,
        updatedAt: new Date()
      },
      update: {
        summary: MALAYSIA_SUMMARY.summary,
        issues: MALAYSIA_SUMMARY.issues,
        topStories: MALAYSIA_SUMMARY.topStories,
        storyCount: MALAYSIA_SUMMARY.storyCount,
        updatedAt: new Date()
      }
    })

    console.log('✅ Malaysia added/updated successfully\n')
  } catch (error) {
    console.error('❌ Error processing Malaysia:', error)
    throw error
  }
}

addMalaysia()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
