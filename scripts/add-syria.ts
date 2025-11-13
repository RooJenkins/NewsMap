import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SYRIA_SUMMARY = {
  name: 'Syria',
  type: 'country',
  lat: 34.8021,
  lng: 38.9968,
  country: 'Syria',
  summary: `# Syria

On November 14, 2025, the UN Security Council did something extraordinary: it voted to remove Syria's new president, Ahmed al-Sharaa, from the Al-Qaeda sanctions list. Just five months earlier, al-Sharaa was still on terrorist watchlists. Now he's meeting Saudi crown princes, pitching Syria as a $28 billion investment opportunity, and presiding over the most dramatic Middle Eastern transformation since the Arab Spring. Bashar al-Assad fled to Moscow in December 2024 after 24 years of brutal rule, and Syria's interim government is racing to consolidate power before the country fractures again. But here's the problem: Israeli jets are bombing Syrian territory weekly, Turkey is threatening Kurdish forces in the northeast, Iranian-backed militias refuse to disarm, and the new government faces a reconstruction bill that could reach $400 billion. The Caesar Act sanctions are gone, one million refugees have returned, and international donors are dangling billions—but only if al-Sharaa can prove he's running a country, not just another armed faction. Syria is open for business, but the question is whether anyone will show up to a construction site that's still a battlefield.

## Major Issues

### 1. The Post-Assad Power Struggle: Al-Sharaa's Fragile Authority

**What's happening:**
- President Ahmed al-Sharaa signed an interim constitution on March 13, 2025, establishing a five-year transitional period with a presidential system concentrating executive power in his hands—no prime minister, just him appointing ministers directly
- On March 29, 2025, al-Sharaa unveiled his transitional government cabinet, staffed largely by former members of Hayat Tahrir al-Sham (HTS), the Islamist rebel group he led before Assad's collapse
- In October 2025, al-Sharaa traveled to Saudi Arabia's Future Investment Initiative forum, claiming Syria had already attracted $28 billion in foreign investment in 2025 and positioning the country as a critical trade corridor between the Gulf, Turkey, and Europe
- On November 14, 2025, the UN Security Council voted 14-0 (China abstained) to lift sanctions on al-Sharaa and Interior Minister Anas Khattab, removing them from lists targeting ISIL and Al-Qaeda affiliates—a diplomatic legitimacy boost
- The UN expects monthly Security Council meetings on Syria throughout November 2025 to monitor political and humanitarian developments, signaling international scrutiny of al-Sharaa's governance
- The Council is negotiating a draft resolution to create sanctions carve-outs aimed at facilitating economic engagement with Syria's new government, balancing accountability with reconstruction needs

**Why it matters:**
- Al-Sharaa is attempting one of the most dramatic political transformations in modern Middle Eastern history: from jihadist rebel commander to internationally recognized head of state in under a year
- His HTS background is the central problem—Western governments, Arab states, and Turkey all want a stable Syria, but none trust an Islamist government built on the bones of a terrorist-designated organization
- The interim constitution's presidential system concentrates power dangerously, raising questions about whether al-Sharaa is building institutions or entrenching autocracy (again)
- The $28 billion investment claim is likely inflated, but it signals al-Sharaa's strategic pivot: pitching Syria as an economic opportunity rather than a humanitarian disaster—this is infrastructure diplomacy, not charity appeals
- The UN sanctions delisting is hugely symbolic but doesn't lift US/EU economic restrictions—al-Sharaa can attend summits but still can't access Western banking systems or reconstruction loans
- The five-year transition timeline is a ticking clock: if al-Sharaa can't deliver security, services, and elections by 2030, Syria risks sliding back into civil war or splintering into fiefdoms

**Prospects:**
- Watch the Council's sanctions carve-out negotiations in November—if they pass, it signals Western willingness to engage economically despite governance concerns
- Al-Sharaa's test is whether he can transition HTS from a militia to a political party—if former fighters remain armed and operating outside state structures, he's just another warlord
- The March 2025 constitutional declaration avoided specifics on Islamic law's role in governance—expect tension between HTS's Islamist base and international demands for pluralism and minority rights
- Saudi Arabia's engagement (inviting al-Sharaa to Riyadh, discussing reconstruction funding) is the key indicator: if MBS backs him, Gulf money flows; if not, Syria stays isolated
- Risk of legitimacy crisis: if al-Sharaa postpones the 2030 transition or rigs elections, he loses international support and faces internal rebellion
- The biggest danger is overconcentration of power—Assad's regime collapsed because it was brittle and personalist; al-Sharaa is replicating the structure

### 2. The Kurdish Crisis: Turkish Invasion Threat and SDF Standoff

**What's happening:**
- On October 6, 2025, fierce clashes erupted in Aleppo between al-Sharaa's interim government forces and the Kurdish-led Syrian Democratic Forces (SDF), killing at least one government soldier and one civilian—the first major armed confrontation between the new government and Syria's de facto autonomous Kurdish region
- Turkey has escalated threats to invade northeastern Syria to crush the SDF, which Ankara considers an extension of the Kurdistan Workers' Party (PKK), a designated terrorist group
- Turkish Foreign Minister Hakan Fidan warned Iran in late October 2025 that if Tehran continues arming Kurdish groups (media reports claim Iran supplied drones to the PKK/SDF), Turkey would retaliate: "We may do the same to you in return"
- The Syrian National Army (SNA)—Turkish-backed Arab militias—launched operations against SDF positions in northern Syria throughout November 2025, framing the offensive as "counter-terrorism"
- Israel has quietly signaled support for the Kurdish SDF as a counterweight to Turkish influence, creating a bizarre triangle: Turkey wants to destroy the SDF, Iran is arming them to spite Turkey, and Israel sees them as a buffer against Islamist groups
- The SDF controls most of Syria's oil and gas fields in the northeast, giving them economic leverage but also making them a target for both Damascus and Ankara

**Why it matters:**
- Syria's Kurdish population (roughly 10% of the country) controls 30% of its territory—this is an unsustainable arrangement that al-Sharaa's government cannot ignore but also cannot resolve militarily
- The October 6 Aleppo clashes prove that the interim government and SDF are on a collision course—both claim sovereignty over the same land, and neither is willing to compromise
- Turkey's invasion threat is real: Ankara has launched four major incursions into northern Syria since 2016 (Euphrates Shield, Olive Branch, Peace Spring, Spring Shield) and could do it again if Erdoğan decides the SDF is too strong
- A Turkish invasion would shatter Syria's fragile stability, trigger mass displacement (again), and force the US to choose between NATO ally Turkey and Kurdish partners who fought ISIS
- Iran's reported drone supplies to the SDF are a revenge play—Tehran lost its Syrian ally (Assad) and its land corridor to Hezbollah, so arming the Kurds is a way to bleed Turkey and al-Sharaa simultaneously
- Israel's quiet support for the SDF reflects its post-Assad strategy: keep Syria weak and divided so no single power (Turkey, Iran, or even al-Sharaa) can threaten the Golan Heights or southern border
- The oil fields are the wild card—whoever controls northeastern Syria controls energy revenues, which means leverage over reconstruction and governance

**Prospects:**
- Expect escalating violence in northern Syria throughout late 2025—the SDF and SNA are locked in a zero-sum territorial struggle
- Turkey's red line is clear: if the SDF refuses to disarm or integrate into al-Sharaa's government, Ankara will invade—the only question is timing
- Watch US policy closely—if Washington cuts military aid to the SDF (likely under Trump administration pressure), Turkey moves immediately
- Al-Sharaa faces an impossible choice: negotiate with the SDF and alienate Turkey (his most important regional backer), or crush them and trigger a Kurdish insurgency
- The Iran-Turkey-Israel triangle is combustible—if Turkish forces clash with Iranian-armed Kurdish units, or if Israel starts openly supplying the SDF, the conflict escalates regionally
- Long-term, Syria's territorial integrity is a fiction until the Kurdish question is resolved—either through federalism (unlikely, given al-Sharaa's centralized constitution), autonomy (Turkey would never accept it), or forced integration (which means war)

### 3. Reconstruction or Mirage? The $28 Billion Question

**What's happening:**
- In May 2025, the United States, United Kingdom, and European Union lifted punitive sanctions covering approximately $15 billion in restricted assets and trade measures, removing the primary legal barriers to Western economic engagement
- On October 10, 2025, the US Senate voted to repeal the Caesar Act—Congressional sanctions imposed on Syria in 2020 for war crimes under Assad—a dramatic policy reversal signaling Washington's willingness to support reconstruction
- Al-Sharaa's government claims Syria attracted $28 billion in foreign investment commitments in 2025, though independent verification is unavailable and most analysts believe this figure is wildly exaggerated or refers to pledges rather than disbursements
- Regional powers—Saudi Arabia, Turkey, and Qatar—have offered to fund public salaries and energy infrastructure, viewing Syria as a geopolitical prize and economic opportunity now that Assad is gone
- The United Nations Development Programme (UNDP) estimates that even under optimistic scenarios, rebuilding Syria's economy will take at least a decade, with reconstruction costs potentially exceeding $400 billion
- More than one million Syrian refugees have returned from abroad since Assad's fall (December 2024), and nearly two million internally displaced people have returned to their places of origin, according to UN figures—the largest reverse migration wave in the Middle East since Iraq's post-ISIS stabilization

**Why it matters:**
- Syria's reconstruction is the biggest economic prize in the Middle East since the Gulf War—$400 billion in infrastructure, housing, energy, and services means contracts for construction firms, engineering giants, and energy companies from Turkey to China
- The sanctions relief is transformative: Syrian banks can now access international financial systems, foreign companies can legally invest, and the government can import machinery and materials without smuggling
- But here's the catch: international donors (World Bank, IMF, EU development funds) are blocking reconstruction loans until al-Sharaa's government demonstrates rule of law, fiscal transparency, and inclusive governance—which it hasn't
- The refugee returns are a double-edged sword—returnees need jobs, housing, and services, but Syria's economy is in ruins (GDP dropped 85% between 2010-2020), unemployment is over 50%, and the government has no money to rebuild
- Al-Sharaa's "$28 billion" figure is political theater aimed at Saudi Arabia and Gulf states—he's signaling that Syria is open for business and profitable, not a charity case
- Regional competition is the key: Turkey wants to dominate reconstruction contracts and turn Syria into an economic satellite, Saudi Arabia wants to counter Turkish influence and block Iran's return, Qatar sees investment as leverage over governance
- The UNDP's "decade-long" timeline is optimistic—it assumes political stability, sustained international funding, and no further conflict, all of which are uncertain

**Prospects:**
- Reconstruction will move forward in pockets (Damascus, Aleppo, western cities) where security is stable and Gulf money flows, but northeast and southern Syria will lag due to Kurdish tensions and Israeli strikes
- The real test is World Bank/IMF engagement—if they approve reconstruction loans in 2026, it signals confidence in al-Sharaa's governance; if they stall, Syria stays economically isolated
- Watch Saudi Arabia's Future Investment Initiative commitments—if Riyadh announces billion-dollar infrastructure projects in Q1 2026, reconstruction is real; if it's just photo ops, it's a mirage
- Turkey will dominate early reconstruction (construction, energy, transport) due to geographic proximity and political leverage over al-Sharaa, but this could backfire if Syrians perceive it as neo-Ottoman colonialism
- The refugee returns are unsustainable without jobs—if returnees face unemployment and homelessness, they'll leave again, destabilizing neighboring countries (Lebanon, Jordan, Turkey)
- Risk of corruption and kleptocracy: Syria has no functioning institutions, no independent judiciary, and no free press—reconstruction funds could easily disappear into al-Sharaa's patronage networks
- The bottom line: Syria's economy will grow in 2025-2026 (it can't get worse), but whether it's genuine reconstruction or a warlord economy depends on governance reforms that al-Sharaa has not yet delivered

### 4. The International Chessboard: Israel, Turkey, Iran, and the West

**What's happening:**
- Israel has conducted near-weekly airstrikes on Syrian territory throughout 2025, targeting Iranian weapons stockpiles, Hezbollah supply routes, and suspected chemical weapons facilities—effectively treating Syria as an open-fire zone
- Turkey maintains military forces in northern Syria (Idlib, Afrin, Tel Abyad, Ras al-Ain) and backs the Syrian National Army, a 60,000-strong militia coalition that functions as Ankara's proxy
- Iran has lost its most critical strategic asset—the Assad regime—and is scrambling to maintain influence by arming Kurdish groups, funding Shiite militias, and lobbying al-Sharaa's government to preserve the land corridor to Lebanon (now severed)
- On November 11, 2025, Turkish Foreign Minister Hakan Fidan publicly threatened Iran over drone supplies to Kurdish groups, marking a sharp escalation in Ankara-Tehran tensions
- Russia retains its naval base at Tartus and airbase at Hmeimim under agreements with al-Sharaa's interim government, but Moscow's influence has plummeted—Assad was Russia's client; al-Sharaa is nobody's puppet
- The United States maintains roughly 900 troops in northeastern Syria (officially to fight ISIS remnants), but their real mission is supporting the Kurdish SDF and blocking Iranian influence
- Saudi Arabia, UAE, and Qatar are competing for influence over al-Sharaa's government, offering reconstruction funding in exchange for alignment with Gulf security priorities (i.e., countering Iran and Turkey)

**Why it matters:**
- Syria is now the most contested geopolitical battleground in the Middle East—every regional and global power has interests, proxies, and redlines, and none trust al-Sharaa enough to let him consolidate control
- Israel's airstrikes are a sovereignty crisis: al-Sharaa's government cannot claim legitimacy if it can't stop foreign military operations on its territory, but it also can't fight Israel (and won't, because the IDF would obliterate Damascus)
- Turkey is the kingmaker—al-Sharaa's government depends on Turkish economic support, military restraint, and diplomatic backing, which gives Ankara veto power over Syria's trajectory
- Iran's desperation is dangerous—losing Syria severs the "Axis of Resistance" and isolates Hezbollah, so Tehran will use sabotage, militias, and proxies to destabilize any government that doesn't restore the corridor
- Russia's diminished role is a wild card—Moscow won't abandon Tartus (its only Mediterranean naval base), but it also won't invest heavily in propping up al-Sharaa if he tilts toward Turkey or the Gulf
- The US troop presence is the glue holding the Kurdish SDF together—if Trump withdraws forces (which he's threatened), Turkey invades, and northeastern Syria collapses into war
- Saudi Arabia's reconstruction funding is conditional on al-Sharaa distancing himself from Islamist governance and blocking Iranian influence—MBS wants a stable, Gulf-aligned Syria, not another Hamas

**Prospects:**
- Israeli strikes will continue indefinitely—al-Sharaa has no air defense, no international backing to stop them, and no leverage over Netanyahu
- Turkey-Iran tensions will escalate in 2026, with Syria as the proxy battleground—expect Turkish airstrikes on Iranian-armed Kurdish positions and Iranian-backed militia attacks on Turkish forces
- Russia's role will shrink unless al-Sharaa offers Moscow something (energy contracts, military basing rights) to justify continued engagement—Putin has bigger problems in Ukraine
- The US withdrawal timeline is the critical variable—if Trump pulls troops in 2026, Syria's northeast collapses; if Biden (or a successor) keeps them, the SDF survives
- Saudi Arabia's reconstruction commitments are contingent on governance reforms and Iranian exclusion—if al-Sharaa balances Turkey-Gulf-Iran interests too carefully, he gets nothing from anyone
- The long-term risk is proxy war escalation: if Turkey, Iran, Israel, and Gulf states all back different factions, Syria becomes the new Yemen—a fractured state where foreign powers fight through local militias

## The Bottom Line

Syria's transition from Assad's dictatorship to al-Sharaa's interim government is the Middle East's highest-stakes political experiment since the 2011 Arab Spring. The optimistic scenario is a Turkish-backed, Gulf-funded reconstruction boom that stabilizes Damascus, repatriates refugees, and sidelines extremists. The pessimistic scenario is a slow-motion collapse: Turkish-Kurdish war in the northeast, Israeli strikes paralyzing governance, Iranian sabotage destabilizing the interior, and international donors withholding funds until Syria fractures again. Al-Sharaa has legitimacy, money, and diplomatic momentum—but he also has zero margin for error. If he can't neutralize the Kurdish SDF without triggering a Turkish invasion, can't stop Israeli strikes without provoking war, and can't deliver services without international loans, his government becomes just another armed faction. The November 2025 UN sanctions delisting was a diplomatic victory, but the real test is whether Syria can build a state or just redistribute the warlords. Watch three indicators: (1) World Bank reconstruction loans in Q1 2026—if they're approved, stability is real; (2) Turkish military operations in the northeast—if they escalate, the country splits; (3) Saudi investment commitments at the next Gulf summit—if they materialize, al-Sharaa has won the regional legitimacy battle. Syria is open for business, but the construction site is still a battlefield.`,
  issues: JSON.stringify([
    "The Post-Assad Power Struggle: Al-Sharaa's Fragile Authority",
    "The Kurdish Crisis: Turkish Invasion Threat and SDF Standoff",
    "Reconstruction or Mirage? The $28 Billion Question",
    "The International Chessboard: Israel, Turkey, Iran, and the West"
  ]),
  topStories: JSON.stringify([]),
  category: 'all',
  storyCount: 0,
  updatedAt: new Date(),
  createdAt: new Date()
}

async function main() {
  console.log('Adding Syria country summary...')

  try {
    // Check if Syria already exists
    const existing = await prisma.locationSummary.findFirst({
      where: {
        name: 'Syria',
        type: 'country',
        category: 'all'
      }
    })

    if (existing) {
      console.log('Syria already exists, updating...')
      await prisma.locationSummary.update({
        where: { id: existing.id },
        data: SYRIA_SUMMARY
      })
      console.log('✓ Syria summary updated successfully')
    } else {
      console.log('Creating new Syria summary...')
      await prisma.locationSummary.create({
        data: SYRIA_SUMMARY
      })
      console.log('✓ Syria summary created successfully')
    }

    // Verify the insertion
    const syria = await prisma.locationSummary.findFirst({
      where: {
        name: 'Syria',
        type: 'country',
        category: 'all'
      }
    })

    if (syria) {
      console.log('\nVerification:')
      console.log(`- Name: ${syria.name}`)
      console.log(`- Type: ${syria.type}`)
      console.log(`- Coordinates: ${syria.lat}, ${syria.lng}`)
      console.log(`- Summary length: ${syria.summary.length} characters`)
      console.log(`- Issues: ${syria.issues}`)
      console.log(`- Created: ${syria.createdAt}`)
      console.log(`- Updated: ${syria.updatedAt}`)
    }

  } catch (error) {
    console.error('Error adding Syria summary:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
