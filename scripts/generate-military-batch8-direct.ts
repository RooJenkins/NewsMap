import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()

// Countries 105-119: African nations military & defense summaries
const militarySummaries: { [key: string]: { summary: string; lat: number; lng: number } } = {
  'Somalia': {
    lat: 5.1521,
    lng: 46.1996,
    summary: `Here's what's really going on with Somalia's military situation—and it's a story about one of the most fragile security environments on earth. The Somali National Army, nominally around 20,000 strong, exists more on paper than in practice. What matters here is that decades of state collapse have created a security vacuum that al-Shabaab, the al-Qaeda affiliate, has ruthlessly exploited. They control vast swaths of rural territory and can strike at will in Mogadishu.

Think about what this means for ordinary Somalis: every trip to market carries the risk of a roadside bomb. Every government building needs fortifications. Every foreign investor sees an uninsurable risk. The African Union Transition Mission (ATMIS) currently provides around 18,000 troops—mostly from Uganda, Burundi, and Kenya—who essentially function as Somalia's real army. But they're scheduled to withdraw, and nobody's confident the SNA can fill the gap.

Defense spending is notionally $100-150 million annually, but corruption siphons off much of this. The military lacks artillery, armor, or air power worth mentioning. Turkey has become the primary security partner, training officers and supplying drones—a relationship Hassan Sheikh Mohamud's government has deepened considerably. The U.S. maintains a counterterrorism footprint with drone strikes and special forces advisors, though the Biden administration scaled back the Trump-era troop presence.

What's particularly troubling is the clan-based recruitment that undermines cohesion. Officers often command loyalty to clan elders rather than the government. Veterans receive virtually no support—most demobilized fighters either return to clan militias or become vulnerable to al-Shabaab recruitment. The human cost is staggering: constant displacement, families unable to farm or trade, children growing up knowing nothing but war. Regional maritime security around the Horn of Africa depends partly on reducing Somalia's instability—piracy surges whenever governance collapses further. Until Somalia builds a real national army that reflects all clans and enjoys popular legitimacy, this cycle of violence will continue grinding down millions of lives.`
  },
  'Sudan': {
    lat: 12.8628,
    lng: 30.2176,
    summary: `Sudan is experiencing one of the world's most devastating and least-covered military conflicts right now. The civil war that erupted in April 2023 between the Sudanese Armed Forces (SAF) under General Abdel Fattah al-Burhan and the Rapid Support Forces (RSF) paramilitary under Mohamed Hamdan Dagalo (Hemedti) has killed over 15,000 people and displaced nearly 8 million. This isn't just a power struggle—it's a fight between a conventional military and a militia that grew out of the Janjaweed fighters from Darfur.

The SAF fields perhaps 100,000 troops with tanks, artillery, and an air force—but much of this Soviet-era equipment is poorly maintained. The RSF, maybe 100,000 strong, emerged from the counterinsurgency campaigns and functions more like a mobile raiding force. They've proven brutally effective in urban warfare, controlling much of Khartoum and committing what human rights organizations document as systematic atrocities in Darfur—again. What matters here is that both sides have committed to total war rather than negotiation.

Defense spending, previously around $1.8 billion, has become meaningless as the country fragments. Sudan has no real international security partnerships now—Russia's Wagner Group had ties to the RSF through gold mining operations, while Egypt backs the SAF to prevent chaos on its southern border. The UAE allegedly supplies the RSF, seeing them as a check on Islamist influence. For ordinary Sudanese, this means systematic sexual violence as a weapon of war, starvation as cities are besieged, and hospitals deliberately targeted.

The military's role in politics—it's governed Sudan for most of independence—means officers see themselves as the state rather than servants of it. There's no functioning veteran support system; former fighters often turn to militias or crime. The humanitarian catastrophe is generational: millions of children out of school, families separated, basic infrastructure destroyed. Regional stability from the Sahel to the Red Sea depends on this war's resolution. Without a negotiated settlement that dismantles the RSF and professionalizes the SAF under civilian control, Sudan faces years more of this nightmare—and another generation lost to violence.`
  },
  'Algeria': {
    lat: 28.0339,
    lng: 1.6596,
    summary: `Algeria fields the most formidable military in North Africa—around 325,000 active personnel backed by sophisticated Russian and Chinese equipment. This matters because Algiers has used this strength to maintain regional influence while avoiding direct intervention in Libya or Mali, despite instability on both borders. The military's budget, roughly $13 billion annually (about 5.5% of GDP), funds one of Africa's most modern air forces and a substantial armored corps.

What's really interesting here is the military's unique relationship with power. Since independence, the army has been the decisive force in Algerian politics—not through constant coups, but as a shadow arbiter. When President Abdelmadjid Tebboune faces challenges, the military brass ultimately determines outcomes. This creates stability, but at the cost of genuine democratic accountability. The 2019 Hirak protests that toppled Bouteflika showed the limits of this—the army couldn't simply suppress mass dissent, so it managed a controlled transition instead.

Algeria's security challenges center on counterterrorism in the south and securing the Libyan border. Al-Qaeda in the Islamic Maghreb still operates in remote areas, though degraded by years of operations. The military has become adept at desert warfare and maintains an extensive intelligence network. Russia remains the primary arms supplier—Su-30 fighters, S-400 air defense systems, modern tanks—but Algeria increasingly sources Chinese drones and electronics to diversify.

For ordinary Algerians, the military presence is pervasive but not usually oppressive like some authoritarian states. Conscription remains mandatory—six months to two years depending on service branch. Veterans receive decent pensions and healthcare relative to regional standards, though quality varies. The bigger tension is opportunity cost: that $13 billion could transform education or healthcare, but the military remains convinced regional threats demand this capability. The Western Sahara dispute with Morocco drives much of this—Algiers supports Polisario, maintaining forces ready for potential escalation. This military-first mentality shapes everything from foreign policy to domestic spending, keeping Algeria secure but also somewhat isolated.`
  },
  'Angola': {
    lat: -11.2027,
    lng: 17.8739,
    summary: `Angola's military story is about transformation from guerrilla movement to professional force—and the complications that brings. The Angolan Armed Forces (FAA), about 107,000 strong, evolved from the MPLA's liberation army through a brutal 27-year civil war that ended in 2002. President João Lourenço, who took power in 2017, has worked to professionalize and depoliticize the force, but the military remains deeply tied to the ruling party and business elite.

Defense spending runs around $3.7 billion annually, funded by oil revenues. When oil prices crash, so does military capability. Here's what matters: Angola is trying to position itself as a regional security provider, contributing peacekeepers to UN missions and mediating conflicts in the Great Lakes region. The FAA has reasonable capabilities for an African force—Chinese and Russian equipment, including Su-30 fighters, tanks, and modern artillery. But maintenance remains a challenge, and much equipment from the civil war era sits unusable.

The navy patrols an oil-rich coastline, protecting offshore platforms from piracy and smuggling. Maritime security directly impacts government revenues, making this a priority. The air force operates transport and attack helicopters essential for a country with poor roads and vast distances. Internally, the military occasionally deploys against separatist movements in Cabinda, the oil-rich northern exclave, though this conflict has substantially cooled.

What's troubling is the civil-military divide. Many senior officers became wealthy during the civil war through "security companies" that are really business ventures. Veteran affairs are seriously deficient—hundreds of thousands of former fighters receive minimal support, leading to poverty and crime among ex-combatants. Landmines still contaminate rural areas, killing and maiming civilians decades after fighting ended. For ordinary Angolans, the military presence means checkpoints, occasional heavy-handed operations, and a sense that the institution serves the elite rather than the people. Lourenço's anti-corruption push targeted some military figures, but the fundamental integration of military and economic power remains. Angola has potential as a regional stabilizer, but until the military truly serves the nation rather than MPLA interests, that potential stays limited.`
  },
  'Ghana': {
    lat: 7.9465,
    lng: -1.0232,
    summary: `Ghana represents something increasingly rare in West Africa—a military under genuine civilian control that stays in barracks. The Ghana Armed Forces, about 15,500 personnel across army, navy, and air force, have twice handed over power after coups (1979, 1981) and haven't intervened since democracy returned in 1993. This matters enormously in a region where militaries in Mali, Burkina Faso, Niger, and Guinea recently seized power.

Defense spending is modest, around $600 million or 0.7% of GDP—lower than many neighbors. Ghana prioritizes education and infrastructure over military expansion, reflecting stable borders and no immediate external threats. The GAF focuses on peacekeeping, contributing troops to UN and African Union missions across the continent. Ghanaian blue helmets serve in Lebanon, South Sudan, and elsewhere, building professional experience and bringing home foreign currency.

The military's capabilities are limited but functional. China, the U.S., and UK provide training and equipment—patrol boats for maritime security against piracy and illegal fishing, transport vehicles, small arms. The navy protects offshore oil installations in the Gulf of Guinea, where piracy remains endemic. The air force operates a handful of transport aircraft and trainers, nothing sophisticated. What Ghana lacks in hardware it compensates with professionalism and discipline.

Internally, the military assists with disaster response—flooding, fire outbreaks—and provides security during elections without interfering in results. This subordination to democratic norms isn't automatic; it requires constant reinforcement through civilian oversight and rotating commands to prevent power centers forming. Veterans receive pensions through a established system, though amounts are modest. The biggest current challenge is recruitment—military salaries can't compete with private sector opportunities for educated young people.

For ordinary Ghanaians, the military is largely invisible in daily life, which is precisely how it should be in a democracy. When soldiers do appear, it's usually for ceremonial functions or disaster relief, not intimidation. President Mahama's government continues emphasizing civilian supremacy. Ghana proves that African militaries can serve the people rather than dominate them—but this requires economic development that reduces the temptation for coups and institutions strong enough to resist military adventurism. The recent coups surrounding Ghana make this example even more valuable and fragile.`
  },
  'Mozambique': {
    lat: -18.6657,
    lng: 35.5296,
    summary: `Mozambique faces a genuine insurgency that's exposing the weakness of its military and drawing in foreign forces in ways that should worry anyone following African security. In Cabo Delgado province, an Islamic State-affiliated group has waged brutal attacks since 2017, displacing over a million people and threatening massive natural gas projects. The Mozambican Defence Armed Forces (FADM), maybe 11,000 troops, proved completely overwhelmed—poorly trained, equipped, and led.

Here's what matters: Mozambique had to rent an army because its own failed. Rwanda deployed 1,000 troops who quickly proved more effective than the FADM. The Southern African Development Community also contributed forces. Private military contractors—first Russia's Wagner Group, then South African firms—operated alongside government forces. This outsourcing of security raises fundamental questions about sovereignty and who actually governs Cabo Delgado.

Defense spending officially runs about $300 million, but the insurgency's costs far exceed this. The FADM emerged from the FRELIMO liberation movement and remained tied to the ruling party rather than developing as a national institution. Corruption hollows out budgets—equipment purchased but never delivered, ghost soldiers drawing salaries. What little capability exists concentrates on protecting Maputo and the President, not defending remote northern provinces.

The human cost is staggering. Insurgents have beheaded civilians, burned villages, and recruited child soldiers. Thousands have died, while displaced people overwhelm camps with minimal services. Young men in Cabo Delgado face impossible choices: join the insurgency, flee, or risk being killed as suspected collaborators. The gas projects that could transform Mozambique's economy remain frozen, foreign companies unwilling to operate in a war zone.

Portugal, the former colonizer, provides some training but limited material support. China supplies some equipment but avoids direct involvement. For ordinary Mozambicans, the military's failure means persistent insecurity even in areas far from fighting—crime rises as weapons proliferate and demobilized soldiers turn to banditry. Veteran support is virtually non-existent. Until Mozambique builds a military that serves the nation rather than the party, and foreign forces eventually withdraw, this conflict will fester. The risk of spillover into Tanzania or Malawi grows as insurgents seek new territory. FRELIMO faces a choice: genuinely reform the military or watch the state fragment further.`
  },
  'Senegal': {
    lat: 14.4974,
    lng: -14.4524,
    summary: `Senegal stands out in West Africa for stable civil-military relations—but recent tensions show how fragile this can be. The Senegalese Armed Forces, about 25,000 personnel, have never seized power since independence in 1960, an extraordinary achievement in a coup-prone region. President Bassirou Diomaye Faye, who took office in 2024, inherits this tradition but also faces security challenges that could test it.

Defense spending runs around $550 million annually, modest but consistent. The military focuses on border security—the Casamance region has experienced a low-level separatist insurgency since 1982, though recent peace efforts show promise. Senegal also faces spillover from Mali's instability and jihadist infiltration from the Sahel. French bases previously provided security support, but Faye's government is renegotiating this presence, reflecting post-colonial sensitivities.

The armed forces receive training from France, the U.S., and increasingly Turkey and China. Capabilities are limited—small arms, patrol vehicles, river boats for the Casamance, and a handful of aircraft. The navy protects fishing waters against illegal foreign trawlers, a real economic threat. Senegal contributes peacekeepers regionally, building professional experience. What makes Senegal's military effective isn't hardware but discipline and subordination to civilian authority.

The recent political crisis when former President Macky Sall attempted to delay elections tested these norms. The military stayed neutral despite pressure, allowing the democratic process to proceed. This wasn't automatic—it reflected decades of institutional development and officer training emphasizing constitutional duty. But the Sahel's coup epidemic shows how quickly things can change when economic stress combines with security threats.

For ordinary Senegalese, military presence is light. Conscription doesn't exist; the force is professional and relatively well-regarded. Veterans receive modest pensions, though job opportunities after service remain limited. The bigger question is whether Senegal can maintain its democratic military culture while neighbors succumb to praetorianism. The answer shapes not just Senegal but whether West Africa has any remaining models of civilian supremacy. Faye must balance sovereignty concerns—reducing French presence—with maintaining the security partnerships that have helped keep Senegal stable. The upcoming years will test whether stability can survive transitions.`
  },
  'Democratic Republic of Congo': {
    lat: -4.0383,
    lng: 21.7587,
    summary: `The DRC's military situation is catastrophic—a case study in how weak security forces perpetuate conflict. The Armed Forces of the Democratic Republic of Congo (FARDC), nominally 150,000 troops, exist more as a collection of armed groups than a coherent military. What matters here is that the FARDC often victimizes civilians as much as protecting them, and the eastern provinces have become a graveyard where dozens of militias, including M23 (backed by Rwanda), control territory.

Here's the human reality: over 120 armed groups operate in eastern DRC. Villages face raids from the FARDC, militias, and foreign forces with no way to distinguish between them. Systematic sexual violence has become a weapon of war—tens of thousands of women and girls raped, often by men in uniform. Over 6 million people are displaced, living in camps or forests, while minerals continue flowing out to global markets. The military's failure isn't just incompetence; it's complicity in the extraction economy.

Defense spending officially runs about $800 million, but corruption means little reaches frontline troops. Soldiers go months without pay, so they loot villages to survive. Officers run protection rackets and mining operations. Equipment is sparse—most fighters carry only rifles, no artillery support or communications. The air force barely operates. When M23 advances, FARDC units often flee or defect. President Félix Tshisekedi has promised reform, but every previous leader made similar claims.

The UN peacekeeping mission (MONUSCO), over 16,000 troops, is withdrawing despite ongoing violence. Southern African Development Community forces now provide some security, but they can't pacify a country the size of Western Europe. Rwanda's role is central—Kigali backs M23 to maintain influence over mineral wealth and buffer zones, while denying involvement. Uganda also meddles, pursuing its own interests.

For ordinary Congolese in the east, daily life means calculating survival: which militia controls this road, whether FARDC troops will demand bribes, if tonight brings another attack. Children grow up with violence as normality. The economic cost is incalculable—the DRC should be wealthy from cobalt, copper, gold, but conflict keeps the population impoverished. Until the FARDC transforms into an institution that protects rather than preys on citizens, this cycle continues. That requires political will, massive investment, and disarming the militias—none of which seem imminent. The tragedy is that everyone knows what's needed; nobody has the power or courage to do it.`
  },
  'Nigeria': {
    lat: 9.082,
    lng: 8.6753,
    summary: `Nigeria fields Africa's largest military—around 223,000 active personnel—yet struggles with multiple insurgencies exposing serious deficiencies. The Nigerian Armed Forces face Boko Haram in the northeast, separatist agitations in the southeast, banditry in the northwest, and militant groups in the Niger Delta. What matters here is that despite superior numbers and equipment, the military hasn't decisively defeated any of these threats after years of operations.

Defense spending officially runs about $3.1 billion annually (roughly 0.7% of GDP—quite low for the challenges faced). Corruption is endemic: equipment purchased but never delivered, ghost soldiers drawing salaries, officers diverting fuel and ammunition. The Boko Haram conflict, ongoing since 2009, has killed over 350,000 people and displaced millions. The insurgency periodically pledges allegiance to Islamic State, controlling territory in Borno and Yobe states. Military operations have been brutal, with human rights groups documenting extrajudicial killings, torture, and detention abuses.

The armed forces operate Chinese and Russian equipment—fighter jets, helicopters, armored vehicles—but maintenance remains poor. The navy patrols the oil-rich Niger Delta, dealing with piracy and protecting offshore installations. The air force, relatively sophisticated by African standards, conducts strikes against insurgent camps but has also hit civilian targets. What's troubling is the military's increasing role in internal security—deploying for everything from election security to farmer-herder conflicts, essentially functioning as a police force.

Nigeria's military leaders maintain close ties to the United States through training programs and equipment sales, but Washington has withheld some support due to human rights concerns. The UK also provides training. Regionally, Nigeria leads ECOWAS military interventions, though the recent wave of coups has complicated this role. President Tinubu's government promised security reforms, but progress remains minimal.

For ordinary Nigerians, the military's presence often means checkpoints demanding bribes, heavy-handed operations that don't distinguish civilians from insurgents, and a sense that security deteriorates despite massive spending. Veterans are systematically neglected—thousands of former fighters struggle with PTSD, injuries, and unemployment with minimal support. The bigger question is whether Nigeria can reform its military before insecurity becomes existential. In the northeast, communities have formed their own defense militias because the military can't protect them. That's not stability; it's state failure masked by uniforms. Until corruption is tackled and the military professionalized, Nigeria's security crisis will deepen, potentially destabilizing West Africa's most populous nation.`
  },
  'South Africa': {
    lat: -30.5595,
    lng: 22.9375,
    summary: `South Africa's military represents a fascinating paradox—historically formidable but currently hollowed out by years of neglect and budget cuts. The South African National Defence Force (SANDF), about 73,000 active personnel, emerged from the integration of the apartheid-era military and liberation movement forces. This makes it uniquely diverse but also creates internal tensions that shape its effectiveness.

Defense spending has plummeted from over 4% of GDP during apartheid to around $3 billion today (barely 1% of GDP). What matters here is that the SANDF can no longer project power regionally the way it once did. Equipment is aging—the air force's Gripen fighters are modern, but many other aircraft don't fly due to maintenance issues. The navy has sophisticated frigates and submarines that often sit in port for lack of spare parts and skilled personnel. The army's mechanized units struggle with vehicle availability.

The immediate security challenges are internal deployment—helping police combat gang violence in Cape Town, protecting infrastructure against sabotage, border control. This isn't what a military trains for, and it depletes readiness for conventional warfare. The SANDF also contributes peacekeepers across Africa, maintaining a tradition of conflict resolution. Soldiers serve in the DRC, South Sudan, and other hotspots, though funding constraints limit these commitments.

What's troubling is the capability collapse. The SANDF that intervened in Lesotho or operated in the DRC during the 1990s could fight and win. Today's force would struggle with sustained operations. Budget cuts have driven out skilled personnel—pilots, technicians, officers—who find better pay in civilian sectors or abroad. Training exercises are curtailed. Ammunition stocks are concerningly low. The defense industry, once world-class, has atrophied as orders dried up.

For ordinary South Africans, the military is distant from daily life—no conscription, low visibility. Veterans from the liberation struggle receive pensions and some political preference, but younger veterans lack adequate support systems. The bigger question is strategic: can South Africa lead African security without a functional military? President Ramaphosa faces pressure to increase defense spending, but competing demands—education, healthcare, infrastructure—are intense in a country still addressing apartheid's legacy.

The civil-military relationship remains healthy—no coup risk, clear civilian control. But a hollowed-out military limits South Africa's continental influence and capacity to protect its own interests. Rebuilding requires sustained investment and political will. Until then, South Africa's military reputation exceeds its actual capability, a dangerous gap in an unstable region.`
  },
  'Morocco': {
    lat: 31.7917,
    lng: -7.0926,
    summary: `Morocco's Royal Armed Forces, roughly 310,000 active personnel, represent one of Africa's most professional and capable militaries—and the monarchy's ultimate insurance policy. Defense spending runs around $5 billion annually (about 3.5% of GDP), reflecting the centrality of security to the regime. What matters here is that King Mohammed VI maintains absolute control over the military, using it to project stability, suppress dissent, and advance territorial claims in Western Sahara.

The Western Sahara dispute drives much military posture. Morocco controls most of the territory, building a massive sand berm monitored by troops and sensors to prevent Polisario Front infiltration. Algeria backs Polisario, creating a tense standoff that periodically flares. Morocco has modernized forces extensively—F-16 fighters from the U.S., French helicopters, Chinese drones, Israeli surveillance technology. The military is genuinely capable of conventional warfare, unlike many regional forces.

The U.S. designated Morocco a "Major Non-NATO Ally," reflecting decades of security cooperation. Morocco hosts regular joint exercises and allows U.S. access to bases and ports. This relationship brings advanced training and equipment but also ties Morocco to American regional interests. France remains another key partner, supplying weapons and training. Israel's normalization with Morocco in 2020 opened new defense cooperation, particularly in intelligence and cyber capabilities.

Internally, the military maintains order without the visible oppression seen in some authoritarian states. Conscription was reinstated in 2019, requiring 12 months service for young men and women—framed as nation-building and unemployment relief. The military operates significant economic enterprises—hotels, factories, transport—creating a parallel economy under royal control. Veterans receive decent pensions relative to regional standards, though this primarily applies to career soldiers rather than conscripts.

For ordinary Moroccans, the military presence is pervasive but usually indirect—security services rather than soldiers on streets. The bigger tension is the Rif region and other areas where Berber populations feel marginalized; military responses to protests have been harsh. The 2011 Arab Spring protests led to constitutional reforms but preserved the monarchy's dominance, with the military as ultimate guarantor.

Morocco's military professionalism contrasts sharply with neighbors like Algeria (rival) and the Sahel states (chaotic). This capability makes Morocco a key U.S. partner for regional stability, but also enables a monarchy that limits democratic space. The Western Sahara remains a frozen conflict that could heat up quickly, potentially drawing in Algeria. Until this dispute resolves—which seems unlikely—Morocco will maintain high defense spending and readiness, shaping its politics and economics for decades to come.`
  },
  'Tunisia': {
    lat: 33.8869,
    lng: 9.5375,
    summary: `Tunisia's military currently sits at the center of a troubling authoritarian drift. The Tunisian National Army, about 36,000 personnel, traditionally stayed out of politics—remarkably, they refused to suppress the 2011 revolution that toppled Ben Ali, earning enormous public respect. But President Kais Saied's power grab since 2021 has tested this neutrality, with the military increasingly visible in supporting his agenda.

Defense spending runs around $1.2 billion annually (about 2.5% of GDP), focused primarily on counterterrorism. Tunisia faces real security threats—jihadist groups operate in mountainous border areas with Algeria, occasionally launching attacks. Islamic State and al-Qaeda affiliates exploit smuggling routes and remote terrain. The military has become adept at counterinsurgency, working with U.S. and European partners who provide training, equipment, and intelligence.

Here's what matters: Tunisia was the Arab Spring's only success story, transitioning to democracy. Now Saied has suspended parliament, arrested opponents, and rules by decree—all while the military watches. They haven't openly backed his authoritarianism, but they haven't blocked it either. This passivity represents a shift from 2011's principled stance. The risk is that the military becomes co-opted into regime maintenance, losing its institutional independence and public trust.

The armed forces operate modest equipment—U.S. and European vehicles, small arms, some helicopters and transport aircraft. The coast guard receives particular attention, patrolling against migrants attempting the Mediterranean crossing to Europe—an issue that brings EU funding and equipment. Tunisia essentially serves as Europe's migration barrier, a role that shapes security priorities.

Economically, Tunisia struggles with high unemployment and debt. Military budgets face pressure, but Saied has maintained defense spending while cutting social programs. Veterans receive pensions through an established system, though amounts barely cover living costs in an inflation-hit economy. The military remains one of the more respected institutions, less corrupt than police or bureaucracy.

For ordinary Tunisians, the military's role has shifted from protector of revolution to neutral observer of its dismantling. Protesters against Saied hope the army might intervene to restore democracy, but officers show no inclination. The painful reality is that militaries can enable authoritarianism through inaction as much as through coups. Tunisia's democratic experiment depended on the military staying in barracks—but barracks neutrality now allows democratic collapse.

The regional context matters: with coups across Africa and war in Libya next door, Tunisia's relative stability looks fragile. If economic crisis deepens and protests grow, the military may eventually face a choice between Saied and the street. That moment will define Tunisia's future and answer whether the 2011 revolution's military neutrality was principle or temporary convenience.`
  },
  'Libya': {
    lat: 26.3351,
    lng: 17.2283,
    summary: `Libya isn't a country with a military; it's multiple armed factions calling themselves armies in a broken state. Since Gaddafi's fall in 2011, Libya has fragmented into rival power centers, each commanding militias nominally integrated into military structures. The Government of National Unity in Tripoli and the Libyan National Army (LNA) under General Khalifa Haftar in the east both claim legitimacy, but neither truly controls the country.

What matters here is that oil—Libya's lifeblood—depends on whichever faction controls the fields and export terminals. The LNA dominates the east and oil infrastructure, while Turkish-backed forces allied with the Tripoli government control the west and capital. This isn't about ideology; it's about patronage networks and resource control. Estimates suggest 100,000-150,000 fighters belong to various armed groups, though exact numbers are impossible to verify.

Defense spending is notional—both governments pay salaries to fighters, but there's no unified military budget. Libya sits on huge weapons stockpiles from the Gaddafi era, much of it looted or smuggled to conflicts across the Sahel and Middle East. Foreign intervention shapes everything: Turkey backs Tripoli with drones, weapons, and Syrian mercenaries. Russia's Wagner Group supported the LNA before Wagner's collapse, with equipment and fighters. The UAE and Egypt also backed Haftar. These aren't partnerships; they're competitions for influence over Libya's oil and strategic location.

The human cost is severe but often overlooked compared to other Middle Eastern conflicts. Migrant detention centers function as torture facilities run by militias. Human trafficking is endemic, with thousands of African migrants held for ransom while attempting the Mediterranean crossing. Armed groups clash sporadically, displacing communities and preventing economic recovery. Tripoli neighborhoods still show damage from Haftar's 2019-2020 offensive.

For ordinary Libyans, security is hyper-local—which militia controls your neighborhood determines daily life. Some areas are relatively safe; others face arbitrary detention, violence, and extortion. The militias often provide services—clinics, courts, even trash collection—because state institutions collapsed. Veterans from the 2011 revolution who fought for freedom now see their country fragmented and their sacrifice seemingly wasted.

Oil revenues should make Libya wealthy, but corruption and conflict keep most Libyans poor. The currency is chaotic, electricity sporadic, hospitals barely function. Young Libyans flee abroad when possible, creating brain drain. Elections remain promised but perpetually delayed because neither side believes they'll win fairly or that the loser will accept results.

Regional stability depends partly on Libya—it's a highway for weapons, militants, and migrants affecting the entire Mediterranean and Sahel. Until some unified security force emerges under legitimate political authority, Libya will remain a failed state with armed groups rather than a military. The international community has largely given up on resolution, accepting frozen conflict over renewed civil war. That may prevent mass casualties, but it condemns Libyans to indefinite instability.`
  },
  'Tanzania': {
    lat: -6.369,
    lng: 34.8888,
    summary: `Tanzania maintains a military profile notably lower than its size and regional importance might suggest. The Tanzania People's Defence Force (TPDF), roughly 27,000 active personnel across army, navy, and air force, reflects the country's generally peaceful internal situation and non-aggressive foreign policy. Defense spending runs around $700 million annually (less than 1% of GDP), among the lowest ratios in East Africa.

What matters here is Tanzania's strategic position: it borders eight countries, including conflict zones in the DRC, Mozambique, and previously Burundi. Yet Tanzania has avoided getting drawn into neighbors' conflicts, maintaining stable borders and focusing inward on development. President Samia Suluhu Hassan, who took office in 2021, continues this tradition while slowly increasing military capability as regional instability grows.

The TPDF's primary missions are sovereignty protection—borders and territorial waters—and supporting civil authorities during disasters. The military occasionally deploys against poaching in national parks and provides logistical support for infrastructure projects. Tanzania contributes small peacekeeping contingents to regional missions but isn't a major troop contributor. The military's capabilities are basic: small arms, some artillery, a handful of tanks and armored vehicles. The navy operates patrol boats protecting fishing waters and offshore gas fields in the Indian Ocean. The air force has transport aircraft and a few fighter jets, though combat readiness is questionable.

China has become the primary military partner, providing training and equipment—patrol boats, vehicles, infrastructure development. This reflects broader economic ties as Chinese investment in Tanzania grows substantially. The U.S. and UK provide some training, particularly counterterrorism as concerns mount about spillover from Mozambique's Cabo Delgado insurgency into southern Tanzania.

The military's relationship with politics is complicated by history. The TPDF emerged from the Tanganyika African National Union's liberation struggle, maintaining ties to the ruling Chama Cha Mapinduzi (CCM) party. Julius Nyerere, founding president, carefully civilianized the military, but officers still come disproportionately from CCM backgrounds. The military has never attempted a coup, and civilian control remains firm, but the institution isn't fully apolitical.

For ordinary Tanzanians, the military is largely invisible. Conscription doesn't exist; recruitment is voluntary but competitive given limited positions. Veterans receive modest pensions, though the system faces capacity challenges as the liberation generation ages. The bigger question is whether Tanzania can maintain its peaceful trajectory as neighbors destabilize. The Cabo Delgado situation is particularly concerning—if insurgents cross the border or refugees overwhelm southern regions, Tanzania may face security challenges its modest military isn't prepared for.

Tanzania's approach—peaceful development over military strength—has served it well historically. But the region's deteriorating security environment may test whether this model remains sustainable. Hassan faces pressure to modernize forces without triggering an arms race or militarizing politics. For now, Tanzania's military mediocrity is actually success—it means resources go to schools and clinics rather than tanks.`
  },
  'Uganda': {
    lat: 1.3733,
    lng: 32.2903,
    summary: `Uganda's military is inseparable from President Yoweri Museveni's 39-year rule—the Uganda People's Defence Force (UPDF) is both a national institution and the regime's ultimate power base. Museveni took power through armed struggle in 1986, and his National Resistance Movement has never fully transitioned from guerrilla force to professional military subordinate to civilian control. The UPDF, roughly 45,000-50,000 personnel, plus extensive reserves and local defense units, functions as much as political instrument as defense force.

Defense spending officially runs about $900 million annually (around 2% of GDP), though actual military budgets often exceed public figures. What matters here is regional deployment: Uganda provides the backbone of AMISOM/ATMIS in Somalia (around 6,000 troops fighting al-Shabaab), intervenes in the DRC pursuing Allied Democratic Forces (ADF) militants, and maintains forces in South Sudan. These interventions serve strategic interests—regional influence, security against threats, and lucrative contracts for officers.

The UPDF is genuinely capable by African standards. Decades of counterinsurgency against the Lord's Resistance Army (LRA) in northern Uganda created experienced officers and combat-tested units. The military operates Soviet and Chinese equipment—tanks, artillery, helicopter gunships—supplemented by Ukrainian and Russian purchases. The U.S. provides training and intelligence support, particularly against ADF and al-Shabaab, seeing Uganda as a reliable counterterrorism partner despite governance concerns.

Here's the troubling part: the military is thoroughly politicized. Museveni's son, Muhoozi Kainerugaba, leads the Special Forces and is widely seen as heir apparent. Senior officers occupy key government and business positions. The military regularly deploys against opposition protesters, as seen brutally during 2021 elections when security forces killed dozens. This isn't a military serving Uganda; it's a military serving the Museveni regime.

For ordinary Ugandans, particularly in opposition areas, military presence means intimidation. Arbitrary detentions, torture in military facilities, and disappearances of opposition figures occur with impunity. Veterans from the long bush war receive preferential treatment—pensions, land, political appointments—creating a loyalty network. Younger soldiers face harsher conditions: low pay (despite Somalia deployment bonuses), inadequate equipment for ordinary troops while elite units get better gear, and little support after service.

The northern region, devastated by the LRA conflict that displaced millions and lasted over two decades, still recovers psychologically and economically. The military's eventual defeat of the LRA brought relief, but many northerners resent the government's slow response and see the military as enforcers of Museveni's political dominance rather than protectors.

Regional complications abound: Uganda and Rwanda, once allies, now back rival forces in eastern DRC. This proxy conflict risks direct confrontation between once-close militaries. Uganda's intervention in Somalia, while supported internationally, ties down resources and creates casualties—though families receive compensation by African standards.

The fundamental question is political: can Uganda transition from Museveni's rule without military interference? The UPDF's loyalty to him personally rather than the constitution suggests a dangerous transition period ahead. Whether that transition is managed peacefully or violently depends largely on military leadership's willingness to accept civilian control—something never fully tested in nearly four decades.`
  }
}

async function main() {
  console.log('🚀 Starting MILITARY & DEFENSE summary generation for countries 105-119\n')
  console.log('📊 Direct generation: Writing summaries directly to database')
  console.log(`🌍 Countries: ${Object.keys(militarySummaries).length}`)
  console.log('='.repeat(80))

  let successCount = 0
  let errorCount = 0

  for (const [countryName, data] of Object.entries(militarySummaries)) {
    try {
      console.log(`\n🎖️  Saving military summary for ${countryName}...`)

      // Verify country exists in countryData
      if (!countryData[countryName]) {
        console.warn(`⚠️  Warning: ${countryName} not found in countryData`)
      }

      // Verify length requirement
      const summaryLength = data.summary.length
      console.log(`   Length: ${summaryLength} characters`)
      if (summaryLength < 2500 || summaryLength > 3500) {
        console.warn(`   ⚠️  Outside target range (2,500-3,500)`)
      }

      // Save to database with category='military'
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: countryName,
            type: 'country',
            category: 'military',
          },
        },
        update: {
          summary: data.summary,
          updatedAt: new Date(),
        },
        create: {
          name: countryName,
          type: 'country',
          country: countryName,
          lat: data.lat,
          lng: data.lng,
          category: 'military',
          summary: data.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`   ✅ Saved successfully`)
      successCount++

    } catch (error) {
      console.error(`❌ Error saving summary for ${countryName}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ MILITARY & DEFENSE summary generation complete!')
  console.log(`📈 Success: ${successCount}/${Object.keys(militarySummaries).length}`)
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount}`)
  }
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
