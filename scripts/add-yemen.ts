import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const YEMEN_SUMMARY = {
  name: 'Yemen',
  type: 'country',
  lat: 15.5527,
  lng: 48.5164,
  country: 'Yemen',
  summary: `# Yemen

More than a decade into Yemen's civil war, the country has become the Middle East's forgotten catastrophe—a humanitarian emergency so vast that 19.5 million people (two-thirds of the population) need aid, yet so politically intractable that peace negotiations have stalled since 2023. The Iran-backed Houthis control Sanaa and the most populous northern regions, the internationally recognized Presidential Leadership Council (PLC) clings to power in the south with Saudi and UAE backing, and neither side can win militarily. What makes November 2025 particularly grim is the convergence of three disasters: First, the Gaza ceasefire collapsed the last diplomatic momentum, as the Houthis' Red Sea blockade—launched to pressure Israel—provoked US and UK airstrikes that pushed Yemen back to the margins of international attention. Second, the Houthis escalated a crackdown on UN and NGO personnel, detaining dozens since May 2025 and crippling humanitarian operations in a country where 17 million people face starvation. Third, the humanitarian crisis is accelerating despite record aid appeals—Yemen had the world's highest cholera burden in 2024, 4.8 million remain displaced, and the 2025 funding gap means fewer food deliveries, collapsed health services, and rising child mortality. Saudi Arabia is exhausted after a decade of bombing and has pivoted to checkbook diplomacy ($500 million in aid, including a central bank deposit), but it won't pull out entirely while Iran arms the Houthis and threatens Riyadh's southern border. The UN Special Envoy, Hans Grundberg, spent October 2025 pleading with warring parties to restart the stalled 2023 peace roadmap, but his frustration is palpable—after years of ceasefire violations, mass detentions, and humanitarian blackmail, nobody believes Yemen's elites want peace. The war has no end in sight, the people are starving, and the world has moved on.

## Major Issues

### 1. The Stalled Peace Process: Houthis and PLC Paralyzed by Mutual Distrust

**What's happening:**
- In May 2025, UN Special Envoy Hans Grundberg expressed public frustration with Yemen's stalled peace process, which has made no progress since the 2022 ceasefire expired and the 2023 peace roadmap—agreed "in principle" by both the Houthis and the Presidential Leadership Council (PLC)—collapsed into recriminations
- On October 15, 2025, Grundberg told ambassadors in Riyadh, Saudi Arabia, that the Gaza ceasefire presented an opportunity to "reinforce regional stability" and "renew momentum toward peace in Yemen" through coordinated approaches, implicitly arguing that regional de-escalation could unlock frozen Yemen talks
- On November 13, 2025, during a UN Security Council briefing, Grundberg warned that Yemen's situation remains "deeply fragile" amid ongoing regional turmoil, urging the Council to support de-escalation efforts and push warring parties toward a nationwide ceasefire
- The 2023 peace roadmap included three pillars: (1) a nationwide ceasefire, (2) economic measures (salary payments, port/airport reopening), and (3) a political process to establish transitional governance—none have been implemented
- The Houthis demand full control over Hodeidah port revenues and Sanaa airport operations before agreeing to ceasefire terms, arguing that economic blockade tactics (imposed by the Saudi-led coalition and PLC) amount to collective punishment of northern Yemen's population
- The PLC, backed by Saudi Arabia and the UAE, refuses to cede revenue control without Houthi military concessions (disarmament, withdrawal from key cities), fearing that cash flows will fund missile and drone production rather than civilian salaries
- Saudi Arabia, once the driver of anti-Houthi military operations, has shifted to a containment strategy: maintain the status quo, prevent Houthi territorial expansion, and avoid escalation that could provoke cross-border missile strikes on Riyadh or Jeddah

**Why it matters:**
- Yemen's peace process is stuck in a classic commitment problem: the Houthis won't disarm without economic guarantees (revenue sharing, political inclusion), and the PLC won't share power with a militia it considers an Iranian proxy
- The 2022 ceasefire (April-October) was the longest lull in fighting since the war began in 2015, but it collapsed because neither side implemented economic measures—salaries went unpaid, airports stayed closed, and distrust deepened
- The Gaza ceasefire argument (October 2025) is a diplomatic long shot—the logic is that if Israel and Hamas can pause, Yemen's warring parties should follow suit, but Yemen's conflict is fundamentally different: it's not a territorial dispute or resistance movement, it's a civil war over governance
- Saudi Arabia's pivot from military intervention to checkbook diplomacy is driven by exhaustion—the kingdom spent $100 billion on the war from 2015-2022, lost hundreds of soldiers, and failed to dislodge the Houthis from Sanaa
- The roadmap's collapse proves that international mediation alone cannot end the war—the UN has no enforcement mechanism, no leverage over Iran (which arms the Houthis), and no ability to compel Saudi Arabia or the UAE to pressure the PLC
- The Houthis' demand for Hodeidah port control is non-negotiable from their perspective—the port handles 70% of Yemen's food and fuel imports, and controlling customs revenues is the difference between functioning governance and bankruptcy
- The PLC's refusal to share revenue is equally entrenched—they view Hodeidah funds as the last tool to weaken the Houthis economically and fear that cash infusions will extend the war, not end it
- Grundberg's frustration (publicly airing diplomatic failures in May 2025) signals that the UN peace process is dying—if the Special Envoy loses credibility, the Council loses its only neutral mediator

**Prospects:**
- Expect the peace process to remain frozen through 2026 unless one of three scenarios unfolds: (1) a major military shock (e.g., Houthi collapse or PLC offensive success) changes the battlefield calculus; (2) Iran and Saudi Arabia negotiate a grand bargain that includes Yemen (unlikely given their broader regional rivalry); (3) a humanitarian catastrophe so extreme (mass famine, cholera epidemic) that international pressure forces concessions
- Watch Saudi Arabia's next move closely—if Riyadh cuts funding to the PLC or withdraws military support from Marib (the PLC's last northern stronghold), it signals acceptance of Houthi control over northern Yemen and de facto partition
- The October 2025 Gaza ceasefire argument is a political gambit, not a realistic path forward—Yemen's warring parties have no incentive to link their conflict to Gaza, and the Houthis benefit from Red Sea escalation (it boosts their regional profile and pressures Saudi Arabia)
- Grundberg's November 2025 warnings about "deeply fragile" conditions suggest the UN is preparing for collapse scenarios—expect contingency planning for full-scale humanitarian evacuation or international trusteeship if the war reignites
- The peace roadmap's economic measures are the most achievable but also the most contentious—salary payments require revenue-sharing agreements, which neither side will accept without political guarantees they don't trust each other to honor
- Long-term, Yemen is sliding toward de facto partition: Houthi-controlled north (Sanaa, Saada, Hodeidah) versus PLC-controlled south (Aden, Marib, Hadramawt), with Saudi Arabia and Iran backing their respective clients indefinitely
- The biggest wild card is internal Houthi politics—if hardliners (backed by Iran) sideline pragmatists open to negotiation, the peace process dies permanently

### 2. The Houthi Crackdown: UN and NGO Detentions Crippling Humanitarian Operations

**What's happening:**
- Since May 31, 2025, the Houthis have arbitrarily detained and forcibly disappeared dozens of staff from UN agencies, international NGOs, and local civil society organizations operating in Houthi-controlled northern Yemen, marking the most severe crackdown on humanitarian workers in the war's history
- UN Special Envoy Hans Grundberg raised the detention crisis during his October 15, 2025, visit to Riyadh, calling for the "immediate and unconditional release" of all detained personnel, but the Houthis have ignored his appeals
- The UN Security Council and Western governments (US, UK, EU) have accused the Houthis of perpetrating "new waves of violations," including arbitrary arrest, enforced disappearance, and denial of due process for humanitarian workers
- The Houthis claim the detainees are suspected of espionage or "collaboration with the enemy" (i.e., the Saudi-led coalition and PLC), but have provided no evidence, held no trials, and blocked consular access for foreign nationals
- International humanitarian organizations—including the World Health Organization (WHO), UNICEF, and major NGOs—have suspended or scaled back operations in Houthi-controlled areas, fearing further detentions and unable to guarantee staff safety
- The detention wave follows a broader pattern of Houthi repression: in 2024, the group detained over 300 activists, journalists, and aid workers, and by mid-2025, Amnesty International documented dozens of enforced disappearances
- The Houthis' justification for the crackdown is tied to their Red Sea blockade campaign—they accuse Western governments of using humanitarian aid as a cover for intelligence gathering on missile launch sites and Iranian arms shipments

**Why it matters:**
- Yemen's humanitarian crisis is entirely dependent on international aid—UN agencies and NGOs provide food, medicine, water, and sanitation services that the state (neither Houthis nor PLC) cannot deliver
- Detaining humanitarian workers is a form of hostage diplomacy: the Houthis are pressuring the UN and Western governments to relax sanctions, end support for the PLC, or negotiate political concessions in exchange for releases
- The May 2025 detention wave coincided with escalating US and UK airstrikes on Houthi military targets (part of the Red Sea blockade response), suggesting the crackdown is retaliation for Western military intervention
- NGO suspensions mean millions of Yemenis in Houthi-controlled areas lose access to critical services—WHO estimates that 8 million people depend on NGO-run health clinics, and UNICEF warns that suspended nutrition programs could push 500,000 children into acute malnutrition
- The Houthis' espionage accusations are a cover for authoritarian consolidation—the group has systematically eliminated independent voices (journalists, activists, NGO staff) to tighten control over northern Yemen's population
- Enforced disappearances create a climate of terror—families of detained workers don't know if their relatives are alive, where they're held, or what charges (if any) they face, which is a war crime under international humanitarian law
- The detention crisis is sabotaging peace negotiations—if the UN and NGOs can't operate safely in Houthi territory, they lose the credibility and access needed to mediate between warring parties
- Saudi Arabia and the PLC are exploiting the crisis politically—they argue that the Houthis' treatment of humanitarian workers proves the group is a terrorist organization incapable of governance, which undermines UN neutrality

**Prospects:**
- Expect the Houthis to release some detainees (likely in stages) to ease international pressure, but only after extracting concessions—watch for quiet diplomatic deals where Western governments agree to relax sanctions or reduce airstrikes in exchange for releases
- The UN will not withdraw entirely from Yemen (the humanitarian catastrophe is too severe), but expect further operational suspensions and risk assessments that limit aid delivery in Houthi areas
- The detention crisis will accelerate the shift toward remote programming—NGOs will rely more on local Yemeni staff (who face arrest risks) and less on international personnel, reducing accountability and increasing corruption risks
- If the Houthis escalate by detaining high-profile UN officials (e.g., WHO country director, UNICEF head), the Security Council will impose targeted sanctions, but these are symbolic—Russia and China block enforcement
- The long-term impact is a hollowing out of civil society in Houthi-controlled Yemen—the group is systematically eliminating independent organizations, journalists, and activists, leaving only state-controlled media and loyalist networks
- Watch for retaliation cycles: if the US or UK escalate airstrikes, the Houthis detain more NGO staff; if international pressure mounts, the Houthis release prisoners temporarily but arrest new targets
- The biggest risk is a humanitarian worker's death in detention—if an international staff member dies due to torture, medical neglect, or execution, Western governments could designate the Houthis as a terrorist organization again, collapsing what's left of the peace process

### 3. The Humanitarian Catastrophe: 19.5 Million Need Aid, 17 Million Face Starvation

**What's happening:**
- According to the 2025 consolidated humanitarian appeal, 19.5 million Yemenis (two-thirds of the population) require humanitarian assistance and protection—an increase of 1.3 million from 2024, reflecting accelerating crisis severity
- Over 17 million people are unable to meet their basic food needs, and the UN World Food Programme (WFP) warns that funding shortfalls in 2025 have forced ration cuts, pushing vulnerable populations closer to famine
- In 2024, Yemen had the highest global burden of cholera, with over 200,000 suspected cases and 800 deaths, and the outbreak continues into 2025 due to collapsed water and sanitation infrastructure
- 4.8 million Yemenis remain internally displaced, living in camps or informal settlements with no access to clean water, healthcare, or education—displacement has been a permanent condition for many families since the war began in 2015
- The healthcare system is non-functional: only 50% of health facilities operate, medical staff go unpaid for months, and essential medicines (antibiotics, insulin, vaccines) are unavailable or unaffordable
- Child malnutrition is worsening—UNICEF estimates that 2.2 million children under five suffer from acute malnutrition, including 540,000 with severe acute malnutrition at risk of death without treatment
- The economic collapse compounds the humanitarian crisis: Yemen's GDP contracted by 50% since 2015, the currency has lost 80% of its value, and inflation has rendered salaries (for those still paid) worthless

**Why it matters:**
- Yemen is the world's worst humanitarian crisis by scale and duration—it surpasses Syria, Afghanistan, and Sudan in the percentage of the population facing life-threatening need
- The 1.3 million increase in people needing aid (2024 to 2025) proves the crisis is not stabilizing—it's accelerating despite billions in international aid and a fragile ceasefire
- 17 million people facing food insecurity means that over half the country is one shock away from famine—a bad harvest, funding cut, or blockade escalation could trigger mass starvation
- Yemen's cholera burden is a public health catastrophe—the disease is preventable with clean water and basic sanitation, but both are luxuries in a war zone where infrastructure has collapsed
- The displacement crisis is generational—4.8 million internally displaced means millions of children have grown up in camps, never attended school, and lack the skills or opportunities to rebuild when (if) the war ends
- The healthcare collapse is a slow-motion mass casualty event—Yemenis are dying not just from violence but from treatable diseases (diarrhea, malaria, tuberculosis) because clinics are closed, medicines unavailable, and ambulances non-existent
- Child malnutrition has long-term consequences: stunted growth, cognitive impairment, and weakened immune systems mean that even if the war ends tomorrow, Yemen's next generation will be physically and mentally scarred
- The economic collapse makes humanitarian aid a permanent dependency—Yemen cannot feed itself, power its cities, or pay public sector salaries without international cash infusions, which are unsustainable long-term

**Prospects:**
- Expect the 2026 humanitarian appeal to exceed $5 billion (2025 was $4.8 billion), but funding will remain around 50-60% because donor fatigue is real—Syria, Sudan, and Gaza are competing for the same limited aid budgets
- Food insecurity will worsen in 2026 if global wheat prices remain high (driven by Russia-Ukraine war and climate shocks) and if the Houthis continue blocking commercial imports to Hodeidah port
- Cholera will remain endemic until water and sanitation infrastructure is rebuilt, which requires peace, funding, and governance—none of which are imminent
- The displacement crisis is irreversible without a political settlement—IDPs cannot return home if their villages are destroyed, landmines are uncleared, or warring factions control their land
- Healthcare system collapse will accelerate preventable deaths, particularly among children and pregnant women—maternal mortality in Yemen is among the highest in the world
- Child malnutrition will create a "lost generation"—if 2.2 million children suffer cognitive and physical impairment, Yemen's post-war recovery (whenever it happens) will be delayed by decades
- The economic crisis is structurally unfixable in wartime—as long as the Houthis and PLC fight over port revenues, central bank control, and taxation, there's no unified economic policy or currency stability
- Long-term, Yemen faces two futures: (1) international aid continues indefinitely, sustaining a collapsed state and preventing mass death but not recovery; (2) aid funding collapses, triggering famine and a refugee exodus that destabilizes Saudi Arabia, Oman, and the Horn of Africa

### 4. The Regional Chessboard: Saudi Exhaustion, Iranian Backing, and US-UK Airstrikes

**What's happening:**
- Saudi Arabia has shifted from military intervention to containment and checkbook diplomacy—in November 2025, Riyadh donated $500 million in aid to Yemen, including a $300 million deposit to the central bank to stabilize the currency, signaling a long-term strategy of economic engagement rather than regime change
- The US, UK, and France (P3 Security Council members) have accused Iran of financially and militarily supporting the Houthis, citing intelligence reports of drone and missile shipments that enable the group's Red Sea blockade and cross-border attacks on Saudi Arabia
- The Houthis' Red Sea blockade, launched in late 2023 to pressure Israel over Gaza, has triggered sustained US and UK airstrikes on Houthi military infrastructure (missile launchers, radar sites, command centers) throughout 2024 and 2025, turning Yemen into a proxy battleground for the Israel-Gaza war
- Iran has doubled down on Houthi support despite international pressure—Western intelligence estimates that Tehran provides $100-200 million annually in cash, weapons, and technical advisors, viewing the Houthis as a strategic asset to pressure Saudi Arabia and threaten Gulf shipping lanes
- The UAE has quietly scaled back its military role in southern Yemen but maintains influence through local militias (Southern Transitional Council, Security Belt Forces), creating a shadow state that undermines the PLC's authority
- The UN Security Council remains paralyzed—Russia and China block sanctions on the Houthis, arguing that Western airstrikes escalate the conflict and that Iran's role is exaggerated

**Why it matters:**
- Saudi Arabia's $500 million aid package is a recognition of reality—the kingdom cannot defeat the Houthis militarily, cannot afford another decade of war, and cannot allow Yemen to collapse entirely (which would send refugees flooding across the southern border)
- The shift from bombs to bank deposits reflects MBS's broader strategy: prioritize Vision 2030 (economic diversification) over regional military adventurism, even if it means tolerating Houthi control of northern Yemen
- Iran's backing of the Houthis is a long-term strategic investment—the group ties down Saudi military resources, threatens Gulf shipping (which could spike oil prices), and provides Tehran with leverage in any regional negotiations
- The Red Sea blockade is the Houthis' most effective tool—by attacking commercial shipping (forcing vessels to reroute around Africa), they impose economic costs on the West and boost their regional profile as defenders of Gaza
- US and UK airstrikes are a tactical response to the blockade but have no strategic endgame—the strikes degrade Houthi military capabilities temporarily, but Iran replenishes weapons within months, creating an endless cycle
- The UAE's shadow state in southern Yemen complicates any future peace deal—if Abu Dhabi backs separatist militias that refuse PLC authority, Yemen's south could fracture further, creating multiple armed factions instead of one government
- The UN's paralysis reflects deeper geopolitical divides—Russia and China use Yemen as a wedge issue to challenge Western dominance in the Security Council, knowing that blocking sanctions undermines US and UK credibility

**Prospects:**
- Saudi Arabia will continue checkbook diplomacy but won't commit to reconstruction or long-term state-building—expect incremental aid packages designed to stabilize the currency and prevent famine, not transform governance
- Iran will not abandon the Houthis—the group is too valuable as a pressure tool against Saudi Arabia and a regional distraction from Iran's nuclear program and domestic protests
- US and UK airstrikes will continue episodically—whenever the Houthis escalate Red Sea attacks, Washington and London respond with limited strikes, but neither has appetite for sustained military campaign
- Watch for a potential US policy shift if Trump (or a similar administration) prioritizes disengagement from Middle East conflicts—if Washington withdraws from Yemen, the Houthis consolidate control and Saudi Arabia negotiates directly with Tehran
- The UAE's southern Yemen strategy is a slow-burn partition—Abu Dhabi wants a weak, divided Yemen that cannot threaten Gulf states but also cannot stabilize under Houthi or PLC control
- The UN Security Council will remain deadlocked—Russia and China block Houthi sanctions because they oppose US/UK military intervention, and no amount of humanitarian appeals will change their calculus
- Long-term, Yemen's regional dynamics point toward frozen conflict: Houthis control the north (backed by Iran), the PLC controls fragments of the south (backed by Saudi Arabia and UAE), and neither side has the capacity to win—but both have enough external support to avoid losing

## The Bottom Line

Yemen is the Middle East's most intractable conflict—a humanitarian catastrophe too severe to ignore but too complex to solve. The Houthis and the Presidential Leadership Council are locked in a stalemate neither can break militarily, and the UN peace process has collapsed into diplomatic theater. The optimistic scenario is that Saudi Arabia and Iran negotiate a grand bargain that includes Yemen, leading to revenue-sharing agreements, ceasefire implementation, and gradual state reconstruction. The pessimistic scenario—and the more likely one—is that Yemen slides into permanent partition: Houthi-controlled north, PLC-controlled south, with Iran and Saudi Arabia funding their clients indefinitely while 19.5 million people depend on international aid to survive. The November 2025 detention of UN and NGO staff, the accelerating humanitarian crisis, and the stalled peace roadmap all point toward collapse rather than resolution. Watch three indicators: (1) Saudi Arabia's next aid tranche—if Riyadh cuts funding, it signals acceptance of Houthi dominance; (2) Iran's weapons shipments—if they increase, the war intensifies; (3) international donor fatigue—if the 2026 humanitarian appeal remains underfunded, famine becomes inevitable. Yemen's tragedy is that the world knows exactly what needs to happen (ceasefire, revenue-sharing, political transition), but none of the actors—Houthis, PLC, Saudi Arabia, Iran, or the UN—have the will or leverage to make it happen.`,
  issues: JSON.stringify([
    "The Stalled Peace Process: Houthis and PLC Paralyzed by Mutual Distrust",
    "The Houthi Crackdown: UN and NGO Detentions Crippling Humanitarian Operations",
    "The Humanitarian Catastrophe: 19.5 Million Need Aid, 17 Million Face Starvation",
    "The Regional Chessboard: Saudi Exhaustion, Iranian Backing, and US-UK Airstrikes"
  ]),
  topStories: JSON.stringify([]),
  category: 'all',
  storyCount: 0,
  updatedAt: new Date(),
  createdAt: new Date()
}

async function main() {
  console.log('Adding Yemen country summary...')

  try {
    // Check if Yemen already exists
    const existing = await prisma.locationSummary.findFirst({
      where: {
        name: 'Yemen',
        type: 'country',
        category: 'all'
      }
    })

    if (existing) {
      console.log('Yemen already exists, updating...')
      await prisma.locationSummary.update({
        where: { id: existing.id },
        data: YEMEN_SUMMARY
      })
      console.log('✓ Yemen summary updated successfully')
    } else {
      console.log('Creating new Yemen summary...')
      await prisma.locationSummary.create({
        data: YEMEN_SUMMARY
      })
      console.log('✓ Yemen summary created successfully')
    }

    // Verify the insertion
    const yemen = await prisma.locationSummary.findFirst({
      where: {
        name: 'Yemen',
        type: 'country',
        category: 'all'
      }
    })

    if (yemen) {
      console.log('\nVerification:')
      console.log(`- Name: ${yemen.name}`)
      console.log(`- Type: ${yemen.type}`)
      console.log(`- Coordinates: ${yemen.lat}, ${yemen.lng}`)
      console.log(`- Summary length: ${yemen.summary.length} characters`)
      console.log(`- Issues: ${yemen.issues}`)
      console.log(`- Created: ${yemen.createdAt}`)
      console.log(`- Updated: ${yemen.updatedAt}`)
    }

  } catch (error) {
    console.error('Error adding Yemen summary:', error)
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
