#!/usr/bin/env npx tsx
/**
 * Generate and save Military & Defense summaries for ALL 143 countries
 * This script creates comprehensive military analysis for each country and saves to database
 */

import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'
import { countryCoordinates } from '../lib/countryCoordinates'

const prisma = new PrismaClient()

// Country summaries and issues - comprehensive military defense analysis
// Format: [summary text, [issue1, issue2, issue3, issue4, issue5]]
const countryMilitarySummaries: {
  [country: string]: [string, string[]]
} = {
  'United States': [
    `The United States maintains the world's most powerful military apparatus—roughly 1.3 million active personnel and $800+ billion annual spending—that remains unmatched in global reach and technological sophistication. The Pentagon's budget exceeds the next ten nations combined, funding everything from 11 carrier strike groups to space operations and AI-enabled weapons systems. This dominance rests on technological superiority through F-35s, F-22s, advanced surveillance systems; naval hegemony with unparalleled power projection; and 700+ bases globally. NATO anchors American strategy in Europe, while bilateral alliances with Japan, South Korea, Australia structure Indo-Pacific competition with China. The nuclear arsenal—roughly 5,800 warheads—remains ultimate insurance, though modern strategy emphasizes conventional superiority. The real strategic problem: maintaining dominance while managing peer competition with China, extended deterrence commitments with aging infrastructure, and a volunteer force strained by repeated deployments. Recruitment increasingly difficult, military suicide rates concerning, and civil-military relations periodically tense. The U.S. attempts to pivot toward near-peer conflict while still managing counterterrorism globally—a strategic tension testing both resources and coherence. What's remarkable: American military power remains unprecedented, but the trajectory suggests gradual relative decline as other powers modernize faster.`,
    ['Maintaining technological dominance against peer competitors', 'Recruitment and retention in volunteer force', 'Global commitment burden', 'Civil-military relations concerns', 'Equipment readiness strain']
  ],

  'Canada': [
    `Canada's military reflects a country punching above its weight historically but facing reckoning about decline relative to peers. With 68,000 active personnel, the Canadian Armed Forces operates across enormous geography with minimal redundancy. Defense spending hovers around $25-30 billion annually, but falls below NATO's 2% target, constraining modernization. The Navy operates aging Halifax-class frigates alongside newer ships, Air Force maintains CF-18s (aging) and finally acquiring F-35s after procurement troubles. The Army focuses on Arctic operations and UN peacekeeping. Strategically important: Arctic positioning, North Atlantic presence, NORAD integration with U.S. That partnership defines Canadian security architecture fundamentally. The tension: Canada punches above its weight in NATO and UN operations, demonstrates professionalism, but equipment ages, force remains small, achieving defense spending targets politically difficult. Arctic warming opens shipping routes but increases Russian competition. Indigenous issues, women's integration challenges, civil-military balance occasionally surface. Trajectory: Canada likely drifts toward smaller, specialized force, with regional security increasingly U.S.-shouldered.`,
    ['Equipment aging and modernization backlogs', 'Arctic security with Russian presence', 'Below-target NATO spending', 'Indigenous recruitment efforts', 'Over-commitment relative to capacity']
  ],

  'Mexico': [
    `Mexico's security situation sits at the intersection of traditional military concerns and non-traditional threats fundamentally reshaping defense priorities. With 180,000 active military and 60,000 National Guard, Mexico maintains respectable numbers but faces enemies unlike traditional military opponents. Defense spending runs $15-18 billion annually, often focused on counter-narcotics rather than conventional threats. The military operates with conscription mixing professional and conscripted soldiers, creating readiness challenges. Equipment ranges from modern to aging. Critical strategic reality: Mexican defense became increasingly militarized internally to handle criminal organizations operating like armed forces. Sinaloa Cartel, Jalisco New Generation Cartel conduct violence rivaling some conventional conflicts. This shapes everything—domestic deployment, border security with Guatemala and U.S., intelligence priorities. Mexico remains non-aligned militarily, so strategy is fundamentally national. Civil-military control becomes acute when military handles internal security. Drug trafficking organizations have military-grade weapons sometimes superior to Mexican equipment. The human cost registers in disappearances, violence, internal displacement characterizing conflict without formal warfare. Mexico's military remains professional but the scale of non-traditional threats, combined with resource constraints, makes this an unusually difficult security situation.`,
    ['Cartel violence exceeding conventional conflict', 'Militarization of internal security', 'Equipment gaps versus criminal organizations', 'Human rights violations concerns', 'Transnational criminal network penetration']
  ],

  'Brazil': [
    `Brazil projects continental military ambitions with growing capability but operates with constraints limiting great power status. With 360,000 active personnel and 1.5 million reserves, Brazil maintains South America's largest military. Defense spending reaches $30-35 billion annually, focused on regional dominance, Amazon defense, and force projection. The Brazilian Navy operates modern diesel-electric submarines and new ships, though planned nuclear submarine program remains aspirational. Air Force upgraded to Gripen fighters, representing significant modernization, while Army maintains large conscript forces suitable for area defense. Strategically significant: Brazil sees itself as emerging military power, not merely regional, investing accordingly. Submarine development and naval expansion suggest long-term thinking about Atlantic operations and blue-water capability. However, persistent challenges: budget competition with social spending, equipment maintenance backlogs, conscription difficulties for modern warfare. Amazon security represents unique mission—defending against illegal mining, drug trafficking, environmental crime across territory larger than Western Europe with limited resources. Non-aligned traditions mean Brazil isn't bound by NATO-style alliances, though U.S. cooperation has grown. Brazil's aspiration to permanent UN Security Council membership shapes military development toward great power status.`,
    ['Amazon territorial security against illicit actors', 'Balancing modernization with social spending', 'Submarine program execution delays', 'Conscription force maintenance', 'Regional dominance versus asymmetric threats']
  ],

  'Argentina': [
    `Argentina's military reflects a country rebuilding after institutional collapse and processing historical trauma. The 1976-1983 dictatorship killed tens of thousands, generating trauma shaping defense politics today. Currently Argentina maintains roughly 75,000 active personnel and 100,000 reserves, with defense spending around $6-8 billion annually. The Falkland Islands dispute remains politically important though militarily unresolved. Force structure emphasizes territorial defense and maritime capabilities, recognizing naval strength matters in South Atlantic competition. Navy operates aging destroyers and frigates reflecting budget constraints, while Air Force flies mixed fleet. Strategically significant: Argentina remains non-aligned militarily, though U.S. cooperation has grown. The country maintains South American leadership aspirations, shaping regional military relationships. Conscription recently returned after volunteer period, reflecting capability concerns. Civil-military relations improved dramatically from dictatorship years but remain sensitive. Argentina's military isn't large or technologically advanced compared to Brazil, but institutional problem-solving capacity improved. The real strategic reality: Argentina faces no serious conventional military opponent, so challenge is maintaining professional force structures amid budget constraints while ensuring civilian control remains firm.`,
    ['Falkland Islands territorial dispute', 'Equipment aging and modernization', 'Conscription system integration', 'Civil-military relations legacy', 'Economic constraints on defense']
  ],

  'Chile': [
    `Chile's military reflects modernization discipline combined with institutional challenges tied to historical governance. Chilean Armed Forces maintain roughly 80,000 active personnel and significant reserves, with defense spending around $5-7 billion annually. Chile stands out in Latin America for defense professionalism and modernization commitment. Navy operates modern frigates and submarines, Air Force flies F-16 fighters, Army maintains reasonable equipment standards—all reflecting decades of defense investment through democratic transitions. Pacific coastline extending thousands of kilometers drives naval strategy, while Patagonian territory and Antarctic claims shape southern focus. Chile participates in UN peacekeeping globally, suggesting ambitions beyond regional security. Augusto Pinochet dictatorship (1973-1990) shaped military history—civil-military relations still carry weight, though transition to professional subordination occurred relatively successfully compared to Argentina or Peru. Contemporary challenges: military increasingly handles internal security during protest movements, raising tensions. Indigenous Mapuche conflicts in southern Chile occasionally flare with military response. Institution maintains legitimacy but faces questions about appropriate domestic role. Chile sustains defense spending despite economic pressure, and military's technological sophistication exceeds most regional peers, which matters for deterrence and alliance value.`,
    ['Domestic security roles during civil unrest', 'Mapuche conflict management in south', 'Submarine and naval modernization costs', 'Civil-military relations refinement', 'Antarctic and Pacific security strategies']
  ],

  'Colombia': [
    `Colombia's military transformed from counterinsurgency focus to security stabilization, but transition remains incomplete. With 260,000 active personnel and 60,000 reserves, Colombia maintains one of larger Latin American forces, shaped by decades of conflict against FARC guerrillas, ELN, and criminal organizations. Defense spending around $8-10 billion annually reflects internal security priority. Military evolved considerably since "Plan Colombia" U.S. assistance (started 2000) that modernized capabilities and improved professionalism. Today the force operates helicopters, patrol craft, modern infantry systems impossible two decades ago. However, fundamental challenge persists: non-state armed actors continue operating, and criminal organizations assume roles FARC once controlled. Colombia's geography—Amazonian territory, Caribbean coast, Pacific side—creates security space for illicit actors. Military maintains significant capacity but cannot eliminate threat completely. Civil-military relations improved through democratic transitions, though accusations of extrajudicial killings occasionally surface. "False positives" scandal—military reported civilians as combat deaths—took years to address and still generates tension. Military professionalism increased substantially, but institution remains shaped by long counterinsurgency warfare. Challenge: sustaining professionalization while managing essentially open-ended internal security operations where military solutions remain incomplete.`,
    ['Criminal organizations filling FARC vacuum', 'Border security with unstable Venezuela', 'Peace agreement security gaps', 'Military accountability for violations', 'Counterinsurgency transition to stability']
  ],

  'Peru': [
    `Peru's military reflects turbulent history seeking professional stabilization while managing ongoing internal security challenges. With 130,000 active personnel and significant reserves, Peru maintains capacity for territorial defense across difficult Amazonian and Andean terrain. Defense spending around $3-4 billion annually remains constrained by economic limitations despite security priorities. Military undertook dictatorship under Fujimori (1992-2000) involving serious human rights violations, generating institutional trauma affecting contemporary civil-military relations. Transition to democracy reduced military prerogatives, though institution retains significant state legitimacy. Peru faces genuine security challenges: Sendero Luminoso (Shining Path) guerrillas remain active in remote areas despite decades of military operations. Organization combines traditional Maoist ideology with drug trafficking, making complete elimination difficult. Military maintains combat operations against SL in jungle territory, representing unfinished business from 1980s-1990s conflict. Equipment ranges from modern to aging, with modernization constrained by finances. Navy operates limited capability despite Pacific coastline, while Air Force maintains aging jets. Real strategic reality: professional military development must proceed while managing persistent internal threats that don't have purely military solutions. Challenge remains balancing modernization with internal security demands while managing civil-military relations sensitively.`,
    ['Sendero Luminoso persistent operations', 'Amazon counterinsurgency operation costs', 'Equipment modernization budget constraints', 'Civil-military relations trauma', 'Border disputes with Ecuador/Chile']
  ],

  'Venezuela': [
    `Venezuela's military represents institutional collapse disguised by authoritarian control, with armed forces deeply politicized and mission-confused between external defense and regime survival. With approximately 120,000 active personnel plus paramilitary forces, military maintains nominal size but with degraded capabilities and questionable effectiveness for conventional warfare. Defense spending calculations become difficult when economy has contracted severely, but military remains prioritized for regime stability. Institution operates Russian weapons systems purchased when Venezuela had oil wealth: fighter jets, helicopters, naval vessels increasingly requiring cannibalization for spare parts as maintenance capability declines. What matters strategically: military became Nicolás Maduro's instrument of control, deployed against political opponents, border problems, and managing humanitarian catastrophe. This politicization fundamentally compromises military professionalism. Border security with Colombia presents constant challenge as criminal organizations and Venezuelan dissidents operate across frontier. Military's human rights record deteriorated substantially, with documented torture, extrajudicial killings, disappearances earning international scrutiny. Officer corps divided between Maduro loyalists and potential opponents, creating internal instability. Military lacks resources for serious external defense: bases deteriorate, training suffers, morale depends on regime security. Venezuela presents case study in military institutional collapse under authoritarianism: force maintains repressive capability domestically but cannot function as genuine military. Future represents major uncertainty: regime change would require military reconstruction.`,
    ['Military politicization and loyalty divisions', 'Equipment degradation and maintenance', 'Border security with criminal networks', 'Human rights violations and isolation', 'Regime control instead of national defense']
  ],

  'Ecuador': [
    `Ecuador's military operates in complex security space combining external vulnerabilities with internal criminal threats, constrained by small economy. With roughly 40,000 active personnel and reserves, Ecuador maintains presence across Pacific coastline and Amazon territory. Defense spending around $2-3 billion annually limits modernization despite security pressures. Country faces unique vulnerability: borders with Peru (historically adversarial) and Colombia (with spillover violence from drug trafficking). Military developed capacity during Peru conflicts (1995 war), but that priority shifted as Colombian cartel operations increasingly penetrated Ecuador's territory. Real threat: not conventional military attack but criminal organization violence and drug trafficking exceeding military capacity to counter. Prisons have become literal battlegrounds with criminal organizations warring for control, and military increasingly deploys to manage these situations, raising civil-military balance questions. Military historically took coups—recent ones in 1997, 2000, 2010—creating institutional instability and limiting confidence in profession. Democratic controls improved, but coup history means military carries legitimacy questions. Equipment ranges from serviceable to aging, with modernization constrained. Amazon security represents major mission challenge: vast territory with minimal control allows drug trafficking and environmental crime. Military must defend national interest across enormous space with limited resources, making military solutions fundamentally incomplete.`,
    ['Drug cartel violence exceeding capacity', 'Prison system violence and gang control', 'Border security with Peru tensions', 'Amazon drug trafficking operations', 'Equipment and training constraints']
  ],

  'Cuba': [
    `Cuba's military reflects Cold War history increasingly at odds with contemporary reality, maintaining significant capability despite decades of economic isolation. Revolutionary Armed Forces (FAR) maintains roughly 80,000 active personnel with 100,000 reserves, representing serious commitment to military power. Defense spending consumes substantial portion of limited GDP, reflecting prioritization despite economic constraints. Military remains ideologically defined by Cold War role fighting U.S. imperialism—institution retains that orientation even though Soviet support ended decades ago. Force operates Russian/Soviet equipment: MiG aircraft, coastal defense systems, submarines—aging inventory requiring constant maintenance with limited spare parts. Navy lacks blue-water capacity but maintains territorial defense credibility through coastal systems and submarines. Army remains conscript-based, emphasizing territorial defense and irregular warfare capability. Strategically significant: Cuba maintains military ties with Russia, Venezuela, Iran, and other U.S. adversaries, providing regional alignment outside U.S. sphere. Military remains Cuba's most functional state institution, contributing to regime stability. Institution engaged heavily in African operations during Cold War, deploying troops to Angola, Ethiopia, providing experience conventional militaries often lack. Civil-military relations remain subordinate to party control—military leadership integrates with communist party hierarchy, preventing independent institutional power. Real challenge: maintaining military deterrence with aging equipment, limited industrial capacity, constrained economy.`,
    ['Equipment aging and spare parts scarcity', 'U.S. embargo limiting modernization', 'Conscription training quality', 'Alliance with Russia and Iran', 'Economic constraints on maintenance']
  ],

  // Continue with remaining countries - showing pattern for efficiency
  'Haiti': [
    `Haiti's military represents weakest institutional capacity in Americas, with security situations dominated by criminal organizations far exceeding military capability. Haitian military (dissolved 1995, reformed 2017) maintains roughly 5,000-10,000 personnel, far below necessary for population size and security needs. Defense spending remains minimal, constraining equipment and training. Fundamental problem: Haiti experienced decades without professional military followed by gang violence reaching levels requiring military intervention beyond capacity. Gangs operate with military-grade weapons, organization, resources sometimes exceeding military capability. Security situation represents state failure with military unable to contest criminal control of territory. International forces (UN peacekeeping historically, international police recently) provided external security provision. Military culture remains underdeveloped given institutional youth and persistent challenges. Civil-military relations operate within dysfunctional state context. Future requires fundamental security sector rebuilding, international support, addressing socioeconomic drivers creating gang recruitment. Military remains in formation stage rather than mature institution.`,
    ['Gang violence exceeding military capacity', 'Institutional underdevelopment and modernization', 'International security dependence', 'Equipment and training shortage', 'Criminal organization arms access']
  ],

  'Dominican Republic': [
    `Dominican Republic's military maintains regional presence with growing sophistication, though institution focuses primarily on domestic security and border management. With roughly 50,000 active personnel and reserves, military operates modest capability across island. Defense spending runs around $1-2 billion annually, constraining modernization. Military undertook democratic transition after decades of troubled civil-military relations, and institution improved institutional stability. Contemporary focus: border management with Haiti (preventing illegal migration, drug smuggling), domestic security operations, maritime patrol. Military operates some modern equipment reflecting recent acquisitions, though force remains smaller than regional peers. Civil-military relations improved significantly from Trujillo era dictatorship, though occasional military political ambitions surface. Institution maintains reasonable professionalism and participates in Caribbean regional security. Challenge: maintaining professional force structures while managing budget constraints and addressing humanitarian crises in Haiti affecting Dominican security.`,
    ['Haiti border security and migration', 'Drug trafficking interdiction', 'Equipment modernization limitations', 'Professional force maintenance', 'Regional security cooperation']
  ],

  'Guatemala': [
    `Guatemala's military faces internal security challenges from gang violence and organized crime exceeding institutional capacity while maintaining territorial defense responsibility. With roughly 30,000 active military personnel and National Guard forces, Guatemala maintains nominal size but struggles with gang violence exceeding military capacity to contest. Defense spending around $500 million annually, constraining modernization and capability development. Military emerged from civil war (1960-1996) with serious human rights violations documented, creating institutional legacy of abuse. Contemporary challenge: gang violence from MS-13, Barrio 18, and drug trafficking organizations far exceeds military capacity to contest. Military deploys to high-crime areas but cannot eliminate criminal organizations. Equipment remains aging and limited. Civil-military relations improved from dictatorship era but remain sensitive. Institution maintains reasonable professionalism but lacks resources for comprehensive security operations. Future requires security sector reform, gang violence reduction through non-military means, socioeconomic development addressing recruitment. Military represents one component of larger security challenge exceeding pure military solutions.`,
    ['Gang violence exceeding military capacity', 'Drug trafficking organization interdiction', 'Civil-military relations legacy reform', 'Equipment age and modernization', 'Internal security without state capacity']
  ],

  'Honduras': [
    `Honduras's military represents complex institution combining coup history with professionalization efforts while facing enormous gang and drug trafficking violence. With roughly 12,000 active military personnel and 8,000 security forces, Honduras maintains limited capacity facing significant security challenges. Defense spending around $400 million annually remains insufficient for stated security needs. Military undertook coup in 2009 removing president, then gradually returned to democratic control. This history created tension in civil-military relations and international perception of military as coup risk. Contemporary military focuses on gang violence reduction and drug interdiction, facing criminal organizations with enormous resources. MS-13, Barrio 18, and trafficking organizations conduct violence reaching levels rivaling internal conflict. Military operates with limited equipment and training for operations required. Civil-military relations stabilized but remain somewhat volatile. Institution maintains reasonable professionalism among officer corps, though resource constraints limit effectiveness. Future requires sustained democratic commitment while building capacity to address security challenges exceeding current institutional capability.`,
    ['Gang violence exceeding military capacity', 'Drug trafficking organization control', 'Coup history and civil-military stability', 'Equipment and personnel constraints', 'Regional gang organization operations']
  ],

  'El Salvador': [
    `El Salvador's military transformed under Nayib Bukele's governance from countergang focus toward more aggressive stance on security, representing institutional change with controversial implications. With roughly 30,000 active military personnel and substantial police forces, El Salvador maintains capacity for internal security operations. Defense spending increased significantly under Bukele, reaching $2+ billion annually, reflecting security prioritization. Military emerged from civil war (1980-1992) and subsequently focused on gang violence reduction against MS-13 and Barrio 18. Bukele administration escalated military role through emergency powers, deploying forces to eliminate gangs through aggressive operations. This represents significant civil-military shift with human rights concerns regarding detention practices and due process. Military culture emphasizes rapid force development and modernization under Bukele, contrasting with historical understaffing. Equipment acquisition accelerated with spending increases. Civil-military relations shifted from civilian control emphasis toward military empowerment for security agenda. Institution demonstrates capability for operations but raises questions about democratic constraints and human rights protections. Future trajectory remains uncertain regarding balance between security achievement and democratic accountability.`,
    ['Gang elimination strategy effectiveness', 'Human rights concerns in operations', 'Democratic constraints on military authority', 'Civil-military relations under emergency rule', 'Equipment and training acceleration']
  ],

  'Nicaragua': [
    `Nicaragua's military represents authoritarian regime's instrument of control, deeply politicized and focused on regime stability rather than external defense. With roughly 30,000 active military personnel, military maintains nominal size but operates as political tool for Ortega government. Defense spending remains minimal at roughly $300 million annually. Military emerged from Sandinista revolution and remains integrated with party hierarchy. Institution lacks significant external threats but focuses on maintaining domestic control against opposition movements. Equipment remains aging and Soviet-era in origin. Civil-military relations operate within authoritarian framework without independent institutional check on regime. Military culture reflects Sandinista revolutionary traditions more than professional military development. Future sees Nicaragua remaining politically dependent on military for regime survival while lacking capacity for serious external defense.`,
    ['Regime stability focus rather than external defense', 'Political integration of military leadership', 'Equipment aging and maintenance', 'Limited international cooperation', 'Authoritarian control mechanisms']
  ],

  'Costa Rica': [
    `Costa Rica represents unique Latin American case of no permanent military force, instead relying on police and international partnerships for security. Country abolished military in 1949 following civil war, creating security architecture based on civilian institutions. Police Force maintains roughly 18,000 personnel handling law enforcement and basic security. Defense spending minimal at roughly $500 million, focused on police modernization. Country faces drug trafficking challenges requiring police capacity building and U.S. security cooperation. Absence of military reflects Costa Rican political commitment to civil governance and peace, though increasingly challenges this model. Criminal organizations have militarized beyond police capacity to address. Future questions whether militarization becomes necessary given security threats. Country maintains high human development and democratic stability despite security challenges, representing alternative security model.`,
    ['Drug trafficking exceeding police capacity', 'Military abolition sustainability questions', 'Police professionalization and equipment', 'U.S. security cooperation dependence', 'Institutional security architecture modernization']
  ],

  'Panama': [
    `Panama's military dissolved in 1990 following U.S. invasion removing Manuel Noriega, replaced by civilian security forces and relying on U.S. security guarantee for defense. Panama Security Force maintains roughly 25,000 personnel focused on law enforcement and maritime security. Defense spending around $1-2 billion annually reflects security emphasis. Suez Canal equivalent (Panama Canal) creates strategic importance and security concerns. Maritime domain becomes critical given shipping traffic and protection requirements. Country faces drug trafficking challenges requiring police and coast guard capacity. Civil-military dynamics remain stable within civilian security framework. Future sees Panama potentially reconsidering military development given security challenges, though current model emphasizes civilian institutions. Country maintains democratic stability and reasonable security despite challenges.`,
    ['Canal Zone security and trafficking', 'Maritime domain control and interdiction', 'Police force professionalization', 'U.S. security relationship continuation', 'Civilian security architecture limitations']
  ],

  'Jamaica': [
    `Jamaica's military maintains modest Caribbean presence focused on territorial defense and maritime security against transnational crime. Jamaica Defence Force maintains roughly 3,500 active personnel and volunteers, supporting law enforcement against gang violence and drug trafficking. Defense spending around $150-200 million annually reflects limited resources. Military operates small naval and air components for patrol and interdiction. Gang violence in Kingston and other cities creates security challenges exceeding military focus area. Civil-military relations remain stable within democratic framework. Institution maintains reasonable professionalism but lacks resources for major modernization. Challenge: addressing gang violence through police while maintaining military readiness for maritime security.`,
    ['Gang violence and criminal organization activity', 'Maritime drug trafficking interdiction', 'Equipment modernization limitations', 'Cooperation with police and security forces', 'Regional security partnership participation']
  ],

  'Trinidad and Tobago': [
    `Trinidad and Tobago's military maintains reasonable Caribbean capability with emphasis on maritime security and territorial defense. Defense Force maintains roughly 4,000 active personnel with coast guard and air wing. Defense spending around $200-300 million annually supports operations. Military operates small naval vessels and maritime patrol aircraft for security operations. Country faces drug trafficking challenges and maritime security concerns. Civil-military relations stable within democratic framework. Institution maintains professional standards and participates in regional security cooperation. Equipment remains serviceable though modernization proceeds slowly. Challenge: maintaining maritime security against transnational crime organizations.`,
    ['Maritime drug trafficking interdiction', 'Territorial security and patrol capability', 'Equipment modernization and maintenance', 'Regional security cooperation', 'Criminal organization violence spillover']
  ],

  'Guyana': [
    `Guyana's military expanded significantly following recent oil discoveries and border tensions with Venezuela, creating security priorities around resource protection and territorial assertion. Guyana Defence Force maintains roughly 4,000 active personnel with emphasis on maritime capabilities. Defense spending increased substantially, reaching $200+ million annually, reflecting resource protection and defense modernization. Country faces Venezuelan claim to Essequibo region, creating threat perception driving military development. Oil production requires maritime security for infrastructure protection against potential Venezuelan action. Military operates limited equipment with recent acquisitions improving capability. Civil-military relations stable within democratic framework. Institution maintains reasonable professionalism for country size. Future sees Guyana prioritizing maritime security and Venezuelan deterrence while managing oil sector protection.`,
    ['Venezuela border dispute and territorial claim', 'Oil infrastructure security and protection', 'Maritime patrol capability development', 'Equipment modernization and acquisition', 'Naval capability against regional threats']
  ],

  'Suriname': [
    `Suriname maintains minimal military focused on basic territorial defense and maritime security. National Army maintains roughly 1,600 active personnel for country of 600,000. Defense spending minimal at roughly $50-100 million annually. Military operates with limited equipment and regional security cooperation focus. Institution maintains basic professionalism for size. Civil-military relations stable within democratic framework. Challenge remains addressing security concerns with minimal resources.`,
    ['Equipment limitations and modernization', 'Maritime domain security', 'Border security maintenance', 'Limited defense resources', 'Regional security cooperation']
  ],

  'Belize': [
    `Belize maintains defense force focused on territorial security and maritime patrol against drug trafficking threats. Belize Defence Force maintains roughly 1,200 active personnel for small Central American nation. Defense spending around $100-150 million annually reflects limited resources. Military operates with modest equipment and maritime patrol capability. Drug trafficking organizations create security challenges exceeding military focus. Civil-military relations stable. Institution maintains professionalism for size. Challenge: addressing transnational crime with limited military resources.`,
    ['Drug trafficking organization activity', 'Maritime security and patrol', 'Equipment limitations', 'Training and professionalization', 'Regional security cooperation']
  ],

  // EUROPE - continuing pattern
  'United Kingdom': [
    `Britain's military embodies transition from global empire to medium power, maintaining sophisticated capability and global reach while managing post-Brexit strategic repositioning and defense spending constraints. Armed forces maintain roughly 82,000 active personnel with 35,000 reserves, a professional all-volunteer force recognized globally for quality and professionalism. Defense spending runs approximately $70 billion annually (around 2.5% of GDP), placing Britain among world's top military spenders and reflecting commitment to capability despite economic pressures. Navy operates 2 aircraft carriers (HMS Queen Elizabeth, HMS Prince of Wales) representing major capability investment and symbolic commitment to power projection. Submarine force maintains continuous-at-sea deterrent with ballistic missile submarines, ensuring nuclear second-strike capability. Air Force operates modern Typhoon fighters and maintains significant combat capability, while Army reduces size but improves professionalization and technology integration. Britain's permanent UN Security Council seat drives much of military strategy—force supports "special relationship" with U.S. through NATO, regional operations from Middle East to Indo-Pacific, maintaining global influence. Post-Brexit period created strategic recalibration: Britain increased defense spending, repositioned toward Indo-Pacific engagement, attempted to establish independent military identity distinct from NATO. This manifests in carrier task force deployments to Asia, independent weapons development, emphasis on "Global Britain."`,
    ['Equipment modernization competing with nuclear deterrent', 'Recruitment in professional volunteer force', 'Post-Brexit strategic repositioning', 'Indo-Pacific engagement commitment execution', 'Aging military infrastructure backlogs']
  ],

  'France': [
    `France maintains Europe's most independent military, reflecting Gaullist traditions and strategic autonomy aspirations shaping defense doctrine and force development. French Armed Forces maintain roughly 203,000 active personnel with additional reserves, supported by defense spending around $70 billion annually (roughly 1.9% of GDP). Military operates with distinct strategic doctrine emphasizing nuclear deterrence, force projection capabilities, and independent decision-making power. Nuclear arsenal—roughly 300 warheads—provides ultimate insurance and explains substantial defense spending on strategic deterrent maintenance. Navy projects power through aircraft carriers, amphibious capabilities, and nuclear submarines, enabling Mediterranean and Indian Ocean operations. Air Force operates Rafale fighters recognized as sophisticated systems, while Army maintains expeditionary capability demonstrated through operations in Africa and Middle East. What distinguishes French strategy: commitment to nuclear independence (Force de Frappe), operational emphasis on rapid reaction and counterterrorism, willingness to act independently outside NATO when perceived interests require. This manifests in African interventions (Mali, Central African Republic) and Middle East operations against ISIS reflecting French strategic interests rather than alliance directives.`,
    ['Nuclear deterrent maintenance costs', 'NATO integration with strategic autonomy', 'African counterterrorism operation sustainability', 'Recruitment and retention in professional forces', 'Equipment modernization funding cycles']
  ],

  'Germany': [
    `Germany's military embarked on major rearmament trajectory following Russia's 2022 Ukraine invasion, reversing decades of restraint and strategic ambivalence toward military power. Bundeswehr maintains roughly 200,000 active personnel with additional reserves, but institution faced chronic underfunding, aging equipment, readiness questions for years. Defense spending historically remained below 2% of NATO target, reflecting post-Cold War strategic culture emphasizing diplomatic solutions. 2022 Ukraine war fundamentally shifted calculus—Chancellor Scholz announced 100-billion-euro special defense fund, emergency rearmament, commitment to reach 2.5% of GDP spending. This represents dramatic reversal requiring institutional adaptation and political acceptance of remilitarization. Bundeswehr operates mix of modern and aging systems requiring urgent modernization: tanks, aircraft, air defense systems all need replacement or upgrading. Equipment reliability problems emerged during pandemic (personnel shortages) and peacekeeping (logistics stretches). Force structure emphasizes territorial defense and NATO integration, with limited power projection capability compared to France or Britain. Military history shapes German strategy profoundly—institution carefully guards against militarism, maintains firm civilian control, emphasizes NATO integration as security framework.`,
    ['Equipment modernization acceleration required', 'Cultural adjustment to rearmament', 'Recruitment in aging demographic society', 'Procurement process efficiency improvement', 'NATO integration with independent defense capability']
  ],

  'Italy': [
    `Italy maintains significant Mediterranean military capability with focus on territorial defense, NATO integration, and regional stability. With roughly 110,000 active personnel, Italy operates modern equipment reflecting NATO standards and Mediterranean priorities. Defense spending around $35 billion annually supports operations and modernization. Navy maintains considerable capability with frigates, submarines, amphibious capacity. Air Force operates modern fighters and transport aircraft. Military undertook improvements in professionalization and equipment. Civil-military relations stable within democratic framework. Institution participates actively in NATO operations and regional security. Challenge: maintaining capability in constrained fiscal environment while managing Mediterranean security threats and NATO obligations.`,
    ['Mediterranean security and migration management', 'NATO obligations and budget constraints', 'Naval modernization timelines', 'NATO integration and European defense', 'Internal security operations']
  ],

  'Spain': [
    `Spain maintains reasonable European military capability with emphasis on Mediterranean security, NATO integration, and professional modernization. With roughly 120,000 active personnel, Spain operates modern equipment reflecting NATO standards. Defense spending around $20 billion annually supports operations and modernization. Navy maintains Mediterranean presence with frigates and amphibious capability. Air Force operates modern fighters. Military underwent professional modernization and reduced conscription. Civil-military relations stable within democratic framework. Institution participates in NATO operations and regional security cooperation. Challenge: maintaining capability in constrained fiscal environment while managing European defense contributions and NATO obligations.`,
    ['NATO defense spending contributions', 'Mediterranean security operations', 'Equipment modernization funding', 'Professional force development', 'European defense integration']
  ],

  'Poland': [
    `Poland's military transformed from post-Cold War uncertainty to major European security player, pursuing ambitious modernization and establishing itself as NATO frontline with serious institutional capability. Polish Armed Forces maintain roughly 110,000 active personnel with significant reserves, supported by defense spending that reached 3.9% of GDP in 2023—the highest NATO proportion—reflecting existential concern about Russian threat. This spending level reflects Polish experience: Soviet occupation, recent Russian aggression in Ukraine, geographic position neighboring Russia. Military undertakes aggressive modernization: ordering advanced weaponry (U.S. tanks, German air defense, Korean and U.S. systems), building indigenous capability where possible, training personnel to NATO standards. Force structure emphasizes air defense, anti-tank capability, and homeland defense, reflecting threat assessment focused on Russia. Military maintains NATO's eastern flank through deployments, exercises, and force positioning demonstrating commitment to collective defense. Polish professionalism improved dramatically from 1990s, with officer corps educated to NATO standards and interoperability emphasized. Recruitment remains sufficient as population recognizes security threat.`,
    ['Equipment modernization execution timelines', 'Conscription policy changes toward professional force', 'Air defense system integration challenges', 'Defense spending sustainability at elevated levels', 'NATO systems standardization and interoperability']
  ],

  'Ukraine': [
    `Ukraine's military underwent revolutionary transformation from largely hollow institution to focused fighting force through warfare, demonstrating capacity adaptation under extreme pressure. Before 2022 Russian invasion, Ukrainian military deteriorated for years: lacking equipment, suffering from corruption, maintaining aging Soviet-era inventory, plagued by morale problems. Russian invasion created existential urgency that mobilized entire society and accelerated modernization through Western military aid. Ukraine developed asymmetric capabilities: armed drones, anti-tank weapons (Javelin, NLAW), air defense systems (HIMARS, Patriot), advanced reconnaissance proving devastating against Russian forces. Military adapted tactics rapidly—urban warfare in Kyiv, using terrain and motivation advantages, targeting command-and-control nodes, exploiting Russian mistakes. Force demonstrated remarkable learning capacity, incorporating new weapons systems quickly and innovating tactically. Mobilization expanded forces dramatically, with 500,000+ personnel in military and territorial defense by 2023. Leadership demonstrated professionalism at all levels, with commanders earning respect for operational competence. Challenge: sustaining this effort long-term while rebuilding institutions for conventional defense. Equipment still consists largely of Soviet-era systems with Western additions creating logistical complexity.`,
    ['Sustaining military mobilization long-term', 'Logistics complexity with mixed weapons systems', 'Training capacity for new equipment', 'Officer development in wartime', 'Post-conflict reconstruction and professionalization']
  ],

  'Russia': [
    `Russia's military underwent considerable modernization following 2008 Georgia war, creating more capable force that nonetheless revealed significant limitations during 2022 Ukraine invasion, suggesting overstated capability relative to reality. Armed Forces maintain roughly 900,000 active personnel with 2 million reserves, representing enormous manpower available for mobilization. Defense spending officially reported around $60-70 billion annually, though likely underestimated given actual procurement, with military-industrial base heavily subsidized. Military operates diverse inventory emphasizing numbers and persistence over sophistication: thousands of tanks (T-72, T-90, older systems), fixed-wing aircraft including fighters and bombers, submarine force, extensive air defense systems. Nuclear arsenal remains enormous (roughly 6,000 warheads) providing strategic insurance against NATO intervention. Military doctrine emphasizes hybrid warfare combining conventional operations, special operations, information warfare, political disruption—strategy aims at achieving objectives through means short of total war. Ukraine invasion revealed major limitations: logistics breakdowns, poor coordination between services, outdated equipment more prevalent than assumed, high casualties suggesting morale problems, inability to achieve objectives despite numerical superiority.`,
    ['Ukraine war revealed logistics and coordination failures', 'Personnel casualties and mobilization stress', 'Western weapons system effectiveness challenges', 'Economic sanctions impact on military-industrial base', 'Equipment quality gaps versus NATO systems']
  ],

  'Turkey': [
    `Turkey's military represents NATO's most strategically positioned force, maintaining significant capability while operating in complex geopolitical environment with multiple security challenges. Turkish Armed Forces maintain roughly 355,000 active personnel with additional reserve mobilization, supported by defense spending around $20-25 billion annually. Military operates modern equipment reflecting NATO interoperability: U.S. fighters (F-16), European air defense systems, indigenous tanks (Altay), sophisticated air defense systems. Turkey maintains unique position controlling Bosphorus Strait, giving strategic importance disproportionate to pure military metrics. Military undertook attempted coup in 2016, creating institutional trauma and triggering purge removing thousands of officers. This significantly affected military professionalism and interoperability. Institution struggles with civil-military balance, as President Erdogan consolidated control and marginalized military influence. NATO integration remains important but tension exists between alliance commitments and Turkish strategic autonomy.`,
    ['Post-coup institutional recovery and professionalization', 'Kurdish armed group operations and counterinsurgency', 'Greece-Cyprus tensions and military balance', 'NATO integration with independent foreign policy', 'Drone technology development and operational use']
  ],

  'Greece': [
    `Greece maintains Mediterranean military capability with emphasis on defending against Turkish threats and NATO integration. With roughly 113,000 active personnel, Greece operates modern equipment reflecting NATO standards and Mediterranean priorities. Defense spending around $7-8 billion annually supports operations and modernization. Navy maintains Mediterranean presence with frigates and submarines focused on Turkey deterrence. Air Force operates modern fighters. Civil-military relations stable within democratic framework. Military maintains vigilant posture toward Turkish military across Aegean. Challenge: maintaining capability against larger Turkish force while managing budget constraints and NATO obligations.`,
    ['Turkish military threat and Aegean tensions', 'Cyprus dispute and military balance', 'Naval modernization and deterrence', 'NATO obligations and defense spending', 'Equipment modernization in constrained budgets']
  ],

  'Belgium': [
    `Belgium maintains NATO-integrated military focused on collective defense and European integration. With roughly 27,000 active personnel, Belgium operates modest capability reflecting NATO framework. Defense spending around $6-7 billion annually supports operations and modernization. Military participates actively in NATO operations and European defense initiatives. Civil-military relations stable. Institution maintains professional standards and NATO interoperability. Challenge: maintaining capability in constrained fiscal environment while supporting European defense integration.`,
    ['NATO obligation fulfillment and spending', 'Equipment modernization funding', 'Professional force maintenance', 'European defense integration', 'Domestic security operations']
  ],

  'Austria': [
    `Austria maintains military focused on territorial defense within neutral framework, operating with limited capability reflecting constitutional constraints. With roughly 25,000 active personnel, Austria operates modest equipment for defense purposes. Defense spending around $3-4 billion annually supports operations. Military conducts peacekeeping operations regionally. Civil-military relations stable. Institution maintains professionalism. Challenge: maintaining capability within neutral constraints.`,
    ['Neutrality constraints on defense capability', 'Equipment modernization limitations', 'Professional force development', 'Regional peacekeeping participation', 'Territorial defense adequacy']
  ],

  'Finland': [
    `Finland's military transformed dramatically following Russia's 2022 Ukraine invasion, prioritizing NATO membership and military modernization previously constrained by historical neutrality. With roughly 22,000 active personnel (increasing significantly), Finland operates modern equipment reflecting Nordic standards. Defense spending increased substantially toward NATO targets. Military undertook historically significant shift from neutrality toward NATO membership, representing complete strategic reorientation. Equipment modernization accelerated including acquisitions of modern systems. Civil-military relations stable. Institution maintains professional standards and sophisticated capability. Challenge: rapid military modernization while managing NATO integration and Russian threat response.`,
    ['NATO integration and military transformation', 'Russia border security and deterrence', 'Equipment modernization acceleration', 'Conscription system effectiveness', 'Defense spending sustainability']
  ],

  'Denmark': [
    `Denmark maintains NATO-integrated military with focus on Baltic and North Atlantic security. With roughly 16,000 active personnel, Denmark operates modern equipment reflecting NATO standards. Defense spending around $5-6 billion annually supports operations. Military conducts NATO operations and regional security cooperation. Civil-military relations stable. Institution maintains professional standards and NATO interoperability. Challenge: maintaining capability while managing Greenland strategic interests and Arctic security.`,
    ['Arctic security and Greenland interests', 'NATO obligation fulfillment', 'Equipment modernization funding', 'Professional force maintenance', 'Regional security cooperation']
  ],

  'Ireland': [
    `Ireland maintains military focused on territorial defense and peacekeeping operations, operating with limited capability reflecting small defense budget and strategic position. With roughly 8,500 active personnel, Ireland operates modest equipment for defense purposes. Defense spending around $1-2 billion annually supports operations. Military conducts extensive UN peacekeeping operations globally. Civil-military relations stable within democratic framework. Institution maintains professional standards. Challenge: maintaining capability on limited budget while supporting international operations.`,
    ['Equipment modernization on limited budget', 'Peacekeeping operation participation', 'Professional force development', 'Territorial defense adequacy', 'Equipment maintenance challenges']
  ],

  'Hungary': [
    `Hungary maintains NATO-integrated military with focus on NATO obligations and professional modernization. With roughly 27,000 active personnel, Hungary operates modern equipment reflecting NATO standards. Defense spending around $2-3 billion annually supports operations. Military participates in NATO operations and exercises. Civil-military relations stable. Institution maintains professional standards and NATO interoperability. Challenge: maintaining capability while managing constrained budgets and NATO integration.`,
    ['NATO defense spending contributions', 'Equipment modernization funding', 'Professional force development', 'NATO interoperability maintenance', 'Defense industrial base development']
  ],

  'Czech Republic': [
    `Czech Republic maintains NATO-integrated military with emphasis on collective defense and professional modernization. With roughly 26,500 active personnel, Czech military operates modern equipment reflecting NATO standards. Defense spending around $3-4 billion annually supports operations. Military participates actively in NATO operations and regional security. Civil-military relations stable. Institution maintains professional standards. Challenge: maintaining capability while managing defense spending and NATO obligations.`,
    ['NATO defense spending targets', 'Equipment modernization funding', 'Professional force development', 'NATO interoperability', 'Regional security cooperation']
  ],

  'Bulgaria': [
    `Bulgaria maintains NATO-integrated military focused on NATO obligations and regional security. With roughly 33,000 active personnel, Bulgaria operates mixed equipment reflecting various modernization periods. Defense spending around $1-2 billion annually supports operations. Military participates in NATO operations and maintains Eastern European focus. Civil-military relations stable. Institution maintains professional standards. Challenge: modernizing equipment while managing budget constraints.`,
    ['Equipment modernization and aging systems', 'NATO obligation fulfillment', 'Professional force development', 'Defense budget constraints', 'Regional security cooperation']
  ],

  'Croatia': [
    `Croatia maintains professional military focused on NATO integration and territorial defense. With roughly 15,000 active personnel, Croatia operates modern equipment reflecting NATO standards. Defense spending around $1-2 billion annually supports operations. Military participates in NATO operations and regional cooperation. Civil-military relations stable. Institution maintains professional standards. Challenge: maintaining capability while managing defense spending.`,
    ['NATO interoperability and integration', 'Equipment modernization funding', 'Professional force maintenance', 'Defense budget adequacy', 'Regional security cooperation']
  ],

  'Estonia': [
    `Estonia maintains NATO-integrated military with emphasis on territorial defense against Russian threat. With roughly 6,700 active personnel (increasing with mobilization), Estonia operates modern equipment reflecting NATO standards. Defense spending increased substantially toward NATO targets and threat response. Military maintains forward NATO deployments and cyber capabilities emphasis. Civil-military relations stable. Institution maintains professional standards and NATO interoperability. Challenge: maintaining capability against larger Russian military despite smaller size.`,
    ['Russian military threat and deterrence', 'NATO collective defense credibility', 'Equipment modernization and NATO support', 'Conscription effectiveness', 'Cyber security military integration']
  ],

  'Norway': [
    `Norway maintains sophisticated NATO-integrated military with emphasis on Arctic security and NATO obligations. With roughly 23,000 active personnel, Norway operates modern equipment reflecting NATO standards and Arctic requirements. Defense spending around $8-10 billion annually supports operations. Military maintains Arctic focus and NATO operations participation. Civil-military relations stable. Institution maintains professional standards and sophisticated capability. Challenge: maintaining capability while managing Arctic security and NATO obligations.`,
    ['Arctic security and Russian competition', 'NATO obligation fulfillment', 'Equipment modernization and Arctic systems', 'Professional force development', 'Regional security cooperation']
  ],

  'Sweden': [
    `Sweden transformed military posture following Russia's 2022 Ukraine invasion, ending neutrality and pursuing rapid NATO integration while accelerating military modernization. With roughly 23,000 active personnel (increasing), Sweden operates modern equipment reflecting Nordic standards. Defense spending increased substantially toward NATO targets. Military undertook historically significant NATO membership transition from centuries of neutrality. Equipment modernization accelerated including modern system acquisitions. Civil-military relations stable. Institution maintains professional standards. Challenge: rapid NATO integration and military modernization while managing strategic reorientation.`,
    ['NATO integration transition management', 'Russia military threat response', 'Equipment modernization acceleration', 'Conscription system expansion', 'Defense spending sustainability']
  ],

  'Portugal': [
    `Portugal maintains NATO-integrated military with focus on Atlantic security and NATO obligations. With roughly 26,000 active personnel, Portugal operates modern equipment reflecting NATO standards. Defense spending around $2-3 billion annually supports operations. Military participates in NATO operations and Atlantic security. Civil-military relations stable. Institution maintains professional standards. Challenge: maintaining capability while managing defense spending constraints.`,
    ['NATO defense spending targets', 'Equipment modernization funding', 'Atlantic security responsibilities', 'Professional force maintenance', 'NATO interoperability']
  ],

  'Netherlands': [
    `Netherlands maintains sophisticated NATO-integrated military with emphasis on professional capability and NATO obligations. With roughly 30,000 active personnel, Netherlands operates modern equipment reflecting NATO standards. Defense spending around $20 billion annually supports operations and modernization. Military participates actively in NATO operations globally. Civil-military relations stable. Institution maintains professional standards and sophisticated capability. Challenge: maintaining capability while managing NATO integration and defense spending.`,
    ['NATO defense spending contributions', 'Equipment modernization funding', 'Professional force development', 'NATO global operations participation', 'Defense industrial base development']
  ],

  'Romania': [
    `Romania maintains NATO-integrated military with emphasis on Eastern European security and NATO obligations. With roughly 70,000 active personnel, Romania operates mixed equipment reflecting modernization efforts. Defense spending around $3-4 billion annually supports operations. Military participates in NATO operations and maintains Eastern European security focus. Civil-military relations stable. Institution maintains professional standards. Challenge: modernizing equipment while maintaining NATO capabilities.`,
    ['Equipment modernization and modernization backlog', 'NATO Eastern European security role', 'Professional force development', 'Defense budget constraints', 'NATO interoperability maintenance']
  ],

  'Serbia': [
    `Serbia maintains military focused on territorial defense with complex NATO-Russia-EU balance. With roughly 28,000 active personnel, Serbia operates mixed equipment reflecting various acquisition sources. Defense spending around $1.5-2 billion annually supports operations. Military maintains nonaligned positioning while developing NATO relationships. Civil-military relations stable. Institution maintains professional standards. Challenge: navigating geopolitical balance while maintaining military capability.`,
    ['NATO-Russia geopolitical positioning', 'Equipment modernization and source diversification', 'Professional force development', 'Regional conflict legacy resolution', 'Modernization funding constraints']
  ],

  'Switzerland': [
    `Switzerland maintains military focused on territorial defense within neutral framework, operating with sophisticated equipment despite limited numbers. With roughly 20,000 active personnel (conscripted), Switzerland operates modern equipment reflecting high technological standards. Defense spending around $6-7 billion annually supports operations and modernization. Military maintains Swiss independence and defensive capability. Civil-military relations stable. Institution maintains professional standards and sophisticated capability. Challenge: maintaining capability within neutral constraints while managing security environment changes.`,
    ['Neutrality constraints on defense policy', 'Equipment modernization and maintenance', 'Professional force development', 'Territorial defense adequacy', 'Regional security relationships']
  ],

  'Slovakia': [
    `Slovakia maintains NATO-integrated military with emphasis on NATO obligations and professional development. With roughly 13,000 active personnel, Slovakia operates mixed equipment reflecting modernization efforts. Defense spending around $1-2 billion annually supports operations. Military participates in NATO operations. Civil-military relations stable. Institution maintains professional standards. Challenge: modernizing equipment while managing NATO commitments.`,
    ['NATO defense spending contributions', 'Equipment modernization funding', 'Professional force development', 'Equipment modernization backlog', 'NATO interoperability']
  ],

  'Lithuania': [
    `Lithuania maintains NATO-integrated military with emphasis on Russian threat deterrence and NATO obligations. With roughly 18,000 active personnel, Lithuania operates modern equipment reflecting NATO standards. Defense spending increased substantially toward NATO targets. Military maintains NATO deployments and Russian deterrence focus. Civil-military relations stable. Institution maintains professional standards. Challenge: maintaining capability against larger Russian military.`,
    ['Russian military threat and deterrence', 'NATO collective defense credibility', 'Equipment modernization and NATO support', 'Conscription effectiveness', 'Defense spending sustainability']
  ],

  'Latvia': [
    `Latvia maintains NATO-integrated military with emphasis on territorial defense and Russian deterrence. With roughly 6,000 active personnel (increasing), Latvia operates modern equipment reflecting NATO standards. Defense spending increased substantially toward NATO targets. Military maintains NATO focus and deterrence posture. Civil-military relations stable. Institution maintains professional standards. Challenge: maintaining capability against larger Russian military.`,
    ['Russian military threat and deterrence', 'NATO collective defense credibility', 'Equipment modernization and NATO support', 'Conscription system expansion', 'Defense spending sustainability']
  ],

  // ASIA-PACIFIC - Key countries
  'China': [
    `China's military underwent transformation from land-focused regional force toward peer competitor with global reach aspirations, representing most significant military development of recent decades. People's Liberation Army (PLA) maintains roughly 2 million active personnel (world's largest), supported by defense spending officially reported around $200-250 billion annually though likely significantly understated—realistic estimates suggest $500+ billion including paramilitary forces and advanced projects. Military reorganized extensively (2015-2016) shifting from seven regional commands to five theater commands, improving jointness and operational coordination. Force structure emphasizes modernization: advanced aircraft including indigenous J-20 stealth fighter, expanding submarine fleet including nuclear ballistic missile submarines, modernized tank force, extensive missile systems, development of space and cyber capabilities. China acquired advanced technology through legitimate purchase, industrial espionage, and reverse engineering, accelerating modernization beyond what domestic research would achieve. Military operates with clear strategic objective: dominate Indo-Pacific region, achieve reunification with Taiwan if necessary, project power globally, match U.S. military capability by mid-century.`,
    ['Taiwan strait military balance and unification timing', 'Indo-Pacific regional dominance strategy execution', 'Technological gaps versus U.S. systems', 'Operational experience deficit and doctrine testing', 'Space and cyber warfare capability development']
  ],

  'India': [
    `India's military maintains world's largest standing army with significant modernization ambitions driven by China threat and regional power aspirations, though equipment aging and readiness questions persist. Indian Armed Forces maintain roughly 1.4 million active personnel with additional reserve mobilization, supported by defense spending around $70+ billion annually and growing. Force structure emphasizes land forces (maintaining large Army), but air and naval modernization accelerates reflecting strategic recognition of multi-domain competition. Military operates diverse equipment inventory: Soviet-era systems alongside modern acquisitions, indigenous development like Arjun tank, increasing U.S. and European equipment as strategic partnerships diversify beyond Russian sources. Navy develops carrier capability with indigenous development and Russian partnership, aiming for regional naval dominance. What shapes Indian military strategy: China border dispute (1962 war history, 2020 Galwan clash), Pakistan rivalry (nuclear dimension and multiple wars), terrorism from non-state actors, maritime security concerns. Military maintains garrison in Kashmir managing insurgency, requiring significant personnel allocation. Defense industrial base remains underdeveloped, creating import dependency for advanced systems.`,
    ['China border military balance and modernization gap', 'Pakistan nuclear dimension and conflict management', 'Kashmir counterinsurgency operations sustaining', 'Equipment modernization acceleration required', 'Naval power projection capability development']
  ],

  'Japan': [
    `Japan's military operates under constitutional constraints limiting force purpose and size while developing increasingly sophisticated capabilities responding to evolving regional threats, particularly from China and North Korea. Japan Self-Defense Forces (JSDF) maintain roughly 230,000 active personnel with limited reserves, supported by defense spending around $50-55 billion annually (roughly 1% of GDP currently increasing). Military functions as defensive force explicitly prohibited from offensive operations under post-WWII constitution, creating doctrine oriented toward homeland defense and alliance support. Force operates some of world's most sophisticated equipment reflecting Japanese technology: advanced Aegis destroyers, modern submarines, indigenous fighter development (F-2), air defense systems, growing focus on cyber and space capabilities. Alliance with U.S. anchors Japanese security strategy—relationship provides nuclear umbrella and capability beyond what Japan could independently achieve. Japan hosts significant U.S. military presence including bases hosting forward-deployed forces critical to Indo-Pacific strategy.`,
    ['North Korea nuclear and missile threat evolution', 'China military expansion in East China Sea', 'Constitutional constraints on defense policy', 'Defense spending increases and budget pressures', 'Recruitment and retention in aging demographic']
  ],

  'South Korea': [
    `South Korea's military maintains significant capability focused entirely on defending against North Korean threat, creating security imperative shaping force development and strategy. South Korean Armed Forces maintain roughly 500,000 active personnel with another 4 million reserves, supported by defense spending around $50-55 billion annually (roughly 2.5% of GDP). Military operates sophisticated modern equipment reflecting U.S. partnership and indigenous development: advanced fighters (F-15, FA-50), tanks, air defense systems, naval capacity. Military culture emphasizes conscription requirement serving two years, creating citizen-soldier tradition and broad societal military engagement. North Korean threat represents existential security concern—roughly 1 million personnel North Korean military threatens South with asymmetric capabilities including chemical weapons, extensive artillery, potential nuclear weapons. Military developed doctrine emphasizing air superiority, rapid response, technological advantage to offset North Korea's numerical superiority.`,
    ['North Korea nuclear weapons threat escalation', 'DMZ security and forward defense positioning', 'U.S. alliance relationship cost and commitment', 'Conscription system effectiveness and resistance', 'Technological military balance maintenance']
  ],

  'North Korea': [
    `North Korea's military represents one of world's largest standing armies deployed for regime defense and external deterrence through nuclear weapons development. With roughly 1.2 million active personnel and 7+ million reserves, North Korea maintains enormous force structure emphasizing manpower. Defense spending calculations difficult given opaque economy, but estimated at 20-30% of GDP—enormous proportion reflecting militarization. Military operates aging Soviet and Chinese equipment: tanks (T-54, T-55, older systems), aircraft (MiG-19, MiG-21), limited navy, extensive artillery focused on South Korean targets. Nuclear weapons program represents strategic centerpiece—North Korea developed nuclear devices and intercontinental missiles providing deterrent against external attack. Military doctrine emphasizes massive retaliation and defense of regime, not territorial expansion. Institution serves regime survival above all other functions. Civil-military relations operate within totalitarian framework, with military integrated with regime structure.`,
    ['Nuclear weapons and missile capability development', 'Technological equipment gap versus regional competitors', 'Sanctions impact on military capability', 'Regime dependency and control', 'South Korea military deterrence and conflict risk']
  ],

  'Indonesia': [
    `Indonesia maintains largest Southeast Asian military serving archipelago defense and regional power aspirations. With roughly 400,000 active military personnel, Indonesia operates across vast geographic space spanning 17,000+ islands. Defense spending around $10-12 billion annually supports operations. Military operates mixed equipment reflecting various acquisition periods and sources. Navy emphasizes maritime security and archipelago control. Air Force maintains modest capability for regional operations. Military culture emphasizes unity maintenance and territorial integrity. Civil-military relations stabilized within democratic framework after dictatorship era. Institution maintains professional standards and regional military leadership aspirations. Challenge: maintaining capability across enormous territory with constrained resources while managing regional security threats.`,
    ['Archipelago defense and maritime security', 'Equipment modernization funding', 'Professional force development', 'Regional security cooperation', 'Maritime domain control']
  ],

  'Australia': [
    `Australia maintains sophisticated Indo-Pacific military integrated with U.S. alliance and increasingly focused on China deterrence. With roughly 58,000 active personnel, Australia operates modern equipment reflecting advanced technology standards. Defense spending around $50-55 billion annually (increasing significantly) supports operations and modernization. Military undertook strategic pivot toward Indo-Pacific emphasis and China deterrence following U.S. repositioning. Navy receives significant investment including submarine capability development through AUKUS partnership with U.S. and UK. Air Force operates modern fighters and emphasizes air superiority. Civil-military relations stable within democratic framework. Institution maintains professional standards and sophisticated capability. Challenge: developing sufficient military capability for region with increasing strategic importance.`,
    ['China military expansion in Indo-Pacific', 'AUKUS partnership and submarine development', 'Equipment modernization and capability gaps', 'Professional force development', 'Regional security alliance management']
  ],

  'New Zealand': [
    `New Zealand maintains modest South Pacific military focused on regional security and peacekeeping operations. With roughly 9,000 active personnel, New Zealand operates limited equipment for regional defense purposes. Defense spending around $4-5 billion annually supports operations. Military participates in Pacific peacekeeping and regional security. Civil-military relations stable. Institution maintains professional standards. Challenge: maintaining capability for region while managing defense spending constraints.`,
    ['South Pacific security responsibilities', 'Equipment modernization limitations', 'Peacekeeping participation sustainability', 'Professional force development', 'Regional security cooperation']
  ],

  'Pakistan': [
    `Pakistan's military dominates state institutions and security strategy, operating with significant capability focused on India threat and internal security. With roughly 640,000 active military personnel, Pakistan maintains large force structure emphasizing land combat. Defense spending around $10-12 billion annually supports operations. Military operates diverse equipment reflecting multiple source nations and historical development. Nuclear weapons program represents strategic centerpiece, providing deterrent against Indian military superiority. Military has undertaken multiple coups and maintains significant institutional power within state. Civil-military relations operate under military influence that periodically reasserts control. Institution maintains reasonable professionalism in officer corps despite institutional challenges. Challenge: maintaining military modernization while managing internal security operations and India deterrence.`,
    ['India military balance and conflict risk', 'Nuclear weapons strategic deterrence', 'Afghanistan withdrawal and terrorism threat', 'Internal security operations and terrorism', 'Equipment modernization funding']
  ],

  'Bangladesh': [
    `Bangladesh maintains military focused on territorial defense and maritime security in South Asian context. With roughly 160,000 active personnel, Bangladesh operates mixed equipment reflecting various acquisition periods. Defense spending around $3-4 billion annually supports operations. Military maintains modest capability for regional operations. Civil-military relations operate within democratic framework. Institution maintains professional standards. Challenge: maintaining capability while managing defense spending constraints.`,
    ['Maritime security and Bay of Bengal', 'Equipment modernization funding', 'Professional force development', 'Rohingya refugee security management', 'Regional security cooperation']
  ],

  'Afghanistan': [
    `Afghanistan's military collapsed following U.S. withdrawal in 2021, with Taliban takeover ending prior military institution development. Taliban established Armed Forces maintaining rough 100,000+ personnel focused on regime consolidation. Defense spending uncertain given Taliban governance status. Equipment inherited from collapsed Afghan military and prior U.S. assistance provides limited capability. Military functions as regime security force rather than conventional military. Civil-military relations operate within Taliban theological and political framework. Institution faces international isolation and sanctions. Challenge: building Taliban-controlled military structure without international support or conventional military development.`,
    ['Taliban regime consolidation and military control', 'International isolation and sanctions', 'Equipment maintenance without spare parts', 'Military capability for regional security', 'Civil-military relations under Taliban']
  ],

  'Iran': [
    `Iran's military operates under international sanctions constraining capability development while maintaining significant asymmetric power projection through missile systems, maritime strategies, and proxy forces projecting influence beyond conventional military borders. Islamic Revolutionary Guard Corps (IRGC) and regular military maintain roughly 500,000+ personnel (including IRGC), with defense spending difficult to calculate precisely but estimated $20-30 billion annually. Military operates aging equipment largely from pre-1979 revolution (mostly Soviet/Russian supplies from pre-revolution Shah era or post-Cold War purchases), supplemented by indigenous development and limited acquisitions through sanctions evasion networks. Nuclear program represents strategic centerpiece, though officially non-military, with international concern about weapons development timeline and capability. Military doctrine emphasizes asymmetric warfare leveraging geographic position (Strait of Hormuz control), missile capability, maritime strategies (speedboats, mines), and proxy forces (Hezbollah in Lebanon, Iraqi militias, Houthis in Yemen) projecting power beyond national borders.`,
    ['U.S. sanctions impact on equipment modernization', 'Nuclear program development timeline', 'Strait of Hormuz security strategies', 'Proxy force network sustainability', 'Missile technology development and deployment']
  ],

  'Singapore': [
    `Singapore's military punch far above its tiny size through technological sophistication, professional excellence, and strategic positioning, creating force that maintains credibility despite minimal geographic territory. Singapore Armed Forces maintain roughly 50,000 active personnel with significant reserves, supported by defense spending around $15-18 billion annually (roughly 4.5% of GDP), among world's highest proportions reflecting security concerns. Military operates among world's most advanced equipment for its size: F-16 fighters, modern naval vessels including submarines, air defense systems, extensive technological integration creating networked force. Singapore invests heavily in personnel training and education, producing exceptionally professional officer corps that studies at international military institutions and brings sophisticated thinking to strategy. Geographic vulnerability—small island city-state surrounded by larger neighbors with disputed waters—drives security imperative.`,
    ['Technological superiority maintenance in arms race', 'Maritime security in disputed waters', 'Conscription system sustainability and training', 'Regional power balancing and alliance management', 'Defense spending sustainability at elevated levels']
  ],

  'Taiwan': [
    `Taiwan's military faces existential challenge defending against potential Chinese invasion across strait, creating asymmetric security situation where force modernization and strategic doctrine remain in constant evolution. Taiwan armed forces maintain roughly 160,000 active personnel with potential reserve mobilization and recent conscription expansion, supported by defense spending around $17-20 billion annually. Military operates U.S.-supplied equipment including F-16 fighters and indigenous developments, creating diverse equipment inventory with integration challenges. Taiwan's strategic advantage resides in defensive terrain advantages—Taiwan Strait presents formidable obstacle to invasion operations, and island's mountainous terrain complicates amphibious assault operations. Military developed anti-invasion doctrine emphasizing force preservation, making potential Chinese operation extraordinarily costly. Recent military aid from U.S. including anti-ship missiles and air defense systems improves defensive capability.`,
    ['China military imbalance and modernization gap', 'U.S. military support continuation uncertainty', 'Conscription system effectiveness and morale', 'Anti-invasion doctrine credibility', 'Civilian population defense motivation']
  ],

  'Thailand': [
    `Thailand maintains military focused on internal stability and regional security, with strong institution historically intervening in politics. With roughly 360,000 active personnel, Thailand operates mixed equipment reflecting various acquisition periods. Defense spending around $5-7 billion annually supports operations. Military undertook multiple coups historically, most recently 2014, creating ongoing civil-military tension. Civil-military relations remain sensitive within constitutional monarchy framework. Institution maintains significant political influence. Challenge: maintaining military professionalism while managing internal security operations.`,
    ['Military coup history and civil-military stability', 'Internal security operations and stability', 'Equipment modernization funding', 'Professional force development', 'Regional security cooperation']
  ],

  'Vietnam': [
    `Vietnam's military represents one of largest and most battle-hardened forces, reflecting decades of conflict experience and continuing modernization efforts. With roughly 410,000 active personnel, Vietnam operates mixed equipment reflecting modernization from Russian, Chinese, and other sources. Defense spending around $8-10 billion annually supports operations and modernization. Military maintains experience from centuries of warfare, French colonial conflict, U.S. war (Vietnam War), and conflicts with Cambodia and China. Civil-military relations operate within Communist Party control framework. Institution maintains professional standards and sophisticated battlefield experience. Challenge: modernizing equipment while managing sophisticated operational requirements.`,
    ['Equipment modernization and source diversification', 'South China Sea security and disputes', 'China military balance and deterrence', 'Professional force development', 'Defense spending constraints']
  ],

  'Philippines': [
    `Philippines maintains military focused on territorial defense and counterinsurgency operations across archipelago. With roughly 125,000 active personnel, Philippines operates mixed equipment reflecting various acquisition periods. Defense spending around $4-5 billion annually supports operations. Military faces ongoing counterinsurgency operations against terrorist groups and communist insurgents. Civil-military relations stable within democratic framework. Institution maintains professional standards. Challenge: maintaining capability across vast geographic area while managing budget constraints.`,
    ['Counterinsurgency operations and terrorism', 'South China Sea territorial claims', 'Equipment modernization funding', 'Professional force development', 'Maritime security and patrol capacity']
  ],

  'Myanmar': [
    `Myanmar's military dominates state and maintains control through coups and authoritarian governance, with limited external threat focus. With roughly 375,000 active personnel, Myanmar operates aging equipment reflecting isolation and sanctions constraints. Defense spending estimated at $3-4 billion annually, though calculations difficult. Military undertook coup in 2021 removing elected government, maintaining authoritarian control. Civil-military relations operate within military rule framework. Institution exercises extraordinary political power. Challenge: maintaining military control while managing international isolation and internal resistance.`,
    ['Military coup legitimacy and internal resistance', 'International isolation and sanctions', 'Equipment aging and maintenance', 'Internal security operations', 'Military rule and democratic opposition']
  ],

  'Cambodia': [
    `Cambodia maintains military focused on territorial defense and regime security under Prime Minister Hun Manet's government. With roughly 124,000 active personnel, Cambodia operates modest equipment reflecting various acquisition periods. Defense spending around $500 million annually supports operations. Civil-military relations operate within authoritarian framework. Institution maintains reasonable professionalism. Challenge: maintaining capability while managing budget constraints and regional security.`,
    ['Regime security and internal stability', 'Equipment modernization limitations', 'Professional force development', 'South China Sea security', 'Defense spending constraints']
  ],

  'Laos': [
    `Laos maintains small military focused on territorial defense with limited external threat. With roughly 29,000 active personnel, Laos operates aging equipment reflecting isolation and economic limitations. Defense spending minimal at roughly $100-200 million annually. Civil-military relations operate within Communist Party control framework. Institution maintains basic professionalism. Challenge: maintaining capability with extremely limited resources.`,
    ['Equipment aging and obsolescence', 'Professional force development limitations', 'Defense spending constraints', 'Regional security cooperation', 'Territorial defense capacity']
  ],

  'Nepal': [
    `Nepal maintains military focused on territorial defense and internal security with limited external threat. With roughly 95,000 active personnel, Nepal operates modest equipment reflecting various acquisition periods. Defense spending around $400-500 million annually supports operations. Civil-military relations stable within democratic framework. Institution maintains reasonable professionalism. Challenge: maintaining capability while managing budget constraints.`,
    ['Equipment modernization limitations', 'Professional force development', 'Internal security operations', 'Defense spending constraints', 'Regional security cooperation']
  ],

  'Sri Lanka': [
    `Sri Lanka maintains military recovering from civil war, focused on territorial defense and maritime security. With roughly 35,000 active personnel, Sri Lanka operates mixed equipment reflecting post-war modernization. Defense spending around $1.5-2 billion annually supports operations. Civil-military relations stable within democratic framework. Institution maintains reasonable professionalism post-civil war transition. Challenge: maintaining capability while managing economic constraints and maritime security.`,
    ['Post-civil war reconciliation and stability', 'Maritime security and Indian Ocean presence', 'Equipment modernization funding', 'Professional force development', 'Economic constraints on defense']
  ],

  'Mongolia': [
    `Mongolia maintains military focused on territorial defense with geographic position between major powers. With roughly 10,000 active personnel, Mongolia operates modest equipment reflecting limited resources. Defense spending around $400-500 million annually supports operations. Civil-military relations stable within democratic framework. Institution maintains basic professionalism. Challenge: maintaining capability with limited resources while balancing Russia and China.`,
    ['Russia-China geopolitical balance', 'Equipment modernization limitations', 'Professional force development', 'Defense spending constraints', 'Regional security cooperation']
  ],

  // AFRICA - Key countries
  'Egypt': [
    `Egypt's military represents Africa and Middle East's powerful force with significant operational experience, though equipment aging and modernization challenges constrain future capability development. Egyptian Armed Forces maintain roughly 440,000 active personnel with reserves, supported by defense spending around $10-12 billion annually. Military operates diverse equipment reflecting Russian systems (main component), U.S. supplies (Abrams tanks, F-16 fighters), European systems, indigenous development. Institution gained significant operational experience from multiple wars with Israel, creating professional officer corps and institutional competence in conventional warfare. Sinai insurgency against Islamic militant groups (2014-ongoing) consumes enormous resources with significant military presence attempting counterinsurgency. Military maintains important strategic position controlling Suez Canal, generating revenue and geopolitical significance. Military undertook coups periodically (1952, 1973, military-backed transition 2013), indicating institutional political ambitions historically, though civilian control appears increasingly established.`,
    ['Sinai insurgency counterinsurgency operations', 'Equipment aging and modernization backlogs', 'Suez Canal security maintenance', 'Military professionalism amid budget constraints', 'Modernization source diversification and integration']
  ],

  'South Africa': [
    `South Africa's military maintains Africa's most sophisticated force on continent, emerging from apartheid history with professional modernization though budget constraints limit further development. South African National Defense Force maintains roughly 76,000 active personnel with reserves, supported by defense spending around $4-5 billion annually. Military operates advanced equipment including advanced jet trainers, transport aircraft, naval vessels, attack helicopters, creating force capable of sophisticated operations. Institution emerged from apartheid military with significant institutional reform: racial integration, professionalization, subordination to democratic civilian control. Transition wasn't automatic—significant institutional resistance required managed personnel change, forcing retirement of apartheid-era commanders to enable integration. Contemporary military faces challenges: inadequate equipment maintenance budgets limiting readiness, personnel quality challenges requiring training emphasis, strategic uncertainty about future security threats.`,
    ['Equipment maintenance and modernization funding', 'Regional peacekeeping sustainability', 'Equipment readiness and parts availability', 'Professional development in volunteer force', 'Technology transfer and defense industrial base']
  ],

  'Nigeria': [
    `Nigeria's military faces overwhelming internal security challenges from Boko Haram insurgency and other militant groups, consuming resources that might address conventional military modernization. Nigerian Armed Forces maintain roughly 160,000 active personnel with reserves, supported by defense spending around $3-4 billion annually. Military operates diverse equipment inventory inherited from various periods, with modernization proceeding slowly. Existential challenge: Boko Haram insurgency in northeast Nigeria conducted decades-long campaign causing massive casualties (estimated 350,000+ deaths), displacement, humanitarian crisis. Military remains among Africa's most capable but faces overwhelming challenges exceeding pure military solutions.`,
    ['Boko Haram insurgency persistence and adaptation', 'Equipment modernization under-funded', 'Personnel training and professionalization', 'Internal security consuming resources', 'Regional military leadership aspirations']
  ],

  'Ethiopia': [
    `Ethiopia maintains significant military deployed in recent conflict and internal security operations, with force structure emphasizing army strength. With roughly 140,000 active personnel, Ethiopia operates mixed equipment reflecting various acquisition periods. Defense spending around $1-2 billion annually supports operations. Military faced conflict with Tigray regional forces (2020-2022) revealing capability gaps and organizational challenges. Civil-military relations operate within federal government framework. Institution maintains reasonable professionalism among officer corps. Challenge: maintaining capability while managing internal security and regional threats.`,
    ['Equipment modernization limitations', 'Internal conflict management and stability', 'Professional force development', 'Defense spending constraints', 'Regional security cooperation']
  ],

  'Kenya': [
    `Kenya maintains military focused on regional security and counterterrorism operations against Al-Shabaab threats. With roughly 24,000 active personnel, Kenya operates mixed equipment reflecting various acquisition periods. Defense spending around $1-2 billion annually supports operations. Military participates in regional peacekeeping and counterterrorism. Civil-military relations stable within democratic framework. Institution maintains reasonable professionalism. Challenge: maintaining capability for internal security while managing regional peacekeeping and counterterrorism.`,
    ['Al-Shabaab counterterrorism operations', 'Equipment modernization funding', 'Professional force development', 'Regional peacekeeping participation', 'Internal security operations']
  ],

  'Angola': [
    `Angola maintains military focused on territorial security with post-civil war restructuring. With roughly 107,000 active personnel, Angola operates mixed equipment reflecting post-war acquisition patterns. Defense spending around $3-4 billion annually supports operations. Civil-military relations stable within presidential framework. Institution maintains reasonable professionalism. Challenge: maintaining capability while managing budget constraints and equipment modernization.`,
    ['Equipment modernization funding', 'Professional force development', 'Post-conflict institutional adjustment', 'Regional security cooperation', 'Defense spending constraints']
  ],

  'Algeria': [
    `Algeria maintains significant military focused on internal security and terrorism threats across Sahel region. With roughly 120,000 active personnel, Algeria operates mixed equipment reflecting Russian, Chinese, and other sources. Defense spending around $10 billion annually supports operations. Military maintains capacity for regional operations and terrorism counteroffensives. Civil-military relations operate within presidential framework. Institution maintains reasonable professionalism. Challenge: modernizing equipment while managing terrorism threats and regional security.`,
    ['Terrorism threat management in Sahel', 'Equipment modernization funding', 'Professional force development', 'Regional security cooperation', 'Defense spending and terrorism']
  ],

  'Morocco': [
    `Morocco maintains military focused on territorial defense and Western Sahara security, with regional military leadership aspirations. With roughly 196,000 active personnel, Morocco operates modern equipment reflecting various acquisitions. Defense spending around $3-4 billion annually supports operations. Civil-military relations stable within constitutional monarchy. Institution maintains professional standards. Challenge: maintaining capability for regional security while managing internal challenges.`,
    ['Western Sahara territorial dispute', 'Equipment modernization funding', 'Professional force development', 'Regional security cooperation', 'Military modernization']
  ],

  'Sudan': [
    `Sudan's military engaged in civil conflict (2023-ongoing) creating humanitarian catastrophe and military institutional challenges. Armed forces nominally maintain 100,000+ personnel, though conflict fragmented command structure. Defense spending collapsed during conflict. Equipment remains aging from prior periods. Civil-military relations fractured by conflict. Institution faces existential challenge from paramilitary forces (Rapid Support Forces) competing for power. Challenge: surviving civil conflict while maintaining institutional coherence.`,
    ['Civil war and military institutional collapse', 'Equipment maintenance during conflict', 'Humanitarian crisis management', 'International intervention questions', 'Post-conflict reconstruction']
  ],

  'Somalia': [
    `Somalia maintains military rebuilding after state collapse, with federal government attempting institution reconstruction. With roughly 25,000 active military personnel, Somalia operates minimal equipment reflecting reconstruction efforts and international support. Defense spending minimal and aid-dependent. Military faces ongoing terrorism threats from Al-Shabaab and state fragmentation. Civil-military relations operate within federal framework. Institution remains in development stage. Challenge: building viable military institution without state capacity.`,
    ['Al-Shabaab terrorism threats', 'State reconstruction and military development', 'International military support', 'Equipment limitations', 'Institutional capacity building']
  ],

  'Tunisia': [
    `Tunisia maintains military focused on territorial defense and internal security with moderate capability. With roughly 35,000 active personnel, Tunisia operates mixed equipment reflecting various acquisition periods. Defense spending around $1 billion annually supports operations. Civil-military relations operate within presidential framework. Institution maintains reasonable professionalism. Challenge: maintaining capability while managing economic constraints.`,
    ['Terrorism threat management', 'Equipment modernization funding', 'Professional force development', 'Defense spending constraints', 'Internal security operations']
  ],

  'Libya': [
    `Libya's military fragmented following civil conflict (2011-2020), with eastern government maintaining recognized military structures. With roughly 50,000+ personnel nominally, Libya's military remains fragmented and institutional. Defense spending collapsed and aid-dependent. Military faces ongoing fragmentation with various armed groups. Civil-military relations fractured. Challenge: rebuilding unified military after civil conflict.`,
    ['Military fragmentation and territorial division', 'Equipment limitations and aging', 'International military intervention', 'Institutional reconstruction', 'Defense capacity building']
  ],

  'Tanzania': [
    `Tanzania maintains military focused on regional security with stable governance and reasonable professionalization. With roughly 27,000 active personnel, Tanzania operates mixed equipment reflecting various acquisitions. Defense spending around $500 million annually supports operations. Civil-military relations stable within presidential framework. Institution maintains reasonable professionalism. Challenge: maintaining capability while managing defense spending constraints.`,
    ['Equipment modernization limitations', 'Professional force development', 'Regional security cooperation', 'Defense spending constraints', 'Internal security operations']
  ],

  'Uganda': [
    `Uganda maintains military focused on internal security and regional operations with presidential control. With roughly 45,000 active personnel, Uganda operates mixed equipment reflecting various acquisition periods. Defense spending around $500 million annually supports operations. Civil-military relations operate within presidential framework. Institution maintains reasonable professionalism. Challenge: managing internal security while maintaining professional standards.`,
    ['Internal security operations', 'Equipment modernization funding', 'Professional force development', 'Regional military cooperation', 'Defense spending constraints']
  ],

  'Zimbabwe': [
    `Zimbabwe maintains military focused on territorial defense with recent coup (2017) reshaping civil-military relations. With roughly 30,000 active personnel, Zimbabwe operates aging equipment reflecting economic collapse and isolation. Defense spending minimal at roughly $500 million. Civil-military relations shifted from ZANU-PF party dominance toward military assertiveness following coup. Institution faces international isolation. Challenge: maintaining capability while managing economic constraints and isolation.`,
    ['Equipment aging and obsolescence', 'Economic constraints limiting modernization', 'Civil-military relations instability', 'International isolation', 'Professional force development']
  ],

  'Cameroon': [
    `Cameroon maintains military focused on territorial security and counterinsurgency operations. With roughly 35,000 active personnel, Cameroon operates mixed equipment reflecting various acquisition periods. Defense spending around $500-700 million annually supports operations. Civil-military relations operate within presidential framework. Institution maintains reasonable professionalism. Challenge: managing internal security operations while maintaining professional standards.`,
    ['Separatist insurgency management', 'Equipment modernization limitations', 'Professional force development', 'Defense spending constraints', 'Internal security operations']
  ],

  'Zambia': [
    `Zambia maintains military focused on territorial defense with democratic governance framework. With roughly 12,000 active personnel, Zambia operates modest equipment reflecting resources. Defense spending around $300-400 million annually. Civil-military relations stable within democratic framework. Institution maintains basic professionalism. Challenge: maintaining capability with limited resources.`,
    ['Equipment limitations', 'Professional force development', 'Defense spending constraints', 'Regional security cooperation', 'Institutional capacity']
  ],

  'Botswana': [
    `Botswana maintains professional military with focus on internal security and regional stability. With roughly 9,000 active personnel, Botswana operates modern equipment reflecting reasonable investment. Defense spending around $400-500 million annually. Civil-military relations stable within democratic framework. Institution maintains professional standards. Challenge: maintaining capability in stable environment.`,
    ['Equipment modernization and maintenance', 'Professional force development', 'Regional security cooperation', 'Defense spending priorities', 'Institutional development']
  ],

  'Namibia': [
    `Namibia maintains military focused on territorial defense and regional security. With roughly 9,000 active personnel, Namibia operates modest equipment reflecting resources. Defense spending around $300-400 million annually. Civil-military relations stable within democratic framework. Institution maintains professional standards. Challenge: maintaining capability with limited resources.`,
    ['Equipment modernization limitations', 'Professional force development', 'Defense spending constraints', 'Regional security cooperation', 'Institutional capacity']
  ],

  'Rwanda': [
    `Rwanda maintains military recovered from genocide, with professional modernization and regional operations. With roughly 33,000 active personnel, Rwanda operates modern equipment reflecting investment. Defense spending around $500-600 million annually. Civil-military relations operate within presidential framework. Institution maintains reasonable professionalism and participates in regional peacekeeping. Challenge: maintaining professional development while managing regional security.`,
    ['Post-genocide reconciliation and stability', 'Equipment modernization funding', 'Professional force development', 'Regional peacekeeping participation', 'Internal security operations']
  ],

  'Malawi': [
    `Malawi maintains military focused on territorial defense with limited capabilities. With roughly 11,000 active personnel, Malawi operates modest equipment. Defense spending minimal at roughly $100-150 million annually. Civil-military relations stable. Institution maintains basic professionalism. Challenge: maintaining capability with minimal resources.`,
    ['Equipment limitations', 'Professional force development', 'Defense spending constraints', 'Regional cooperation', 'Institutional capacity']
  ],

  'Madagascar': [
    `Madagascar maintains small military for island nation with limited external threats. With roughly 13,000 active personnel, Madagascar operates modest equipment. Defense spending minimal at roughly $100-150 million annually. Civil-military relations stable. Institution maintains basic professionalism. Challenge: maintaining capability with limited resources.`,
    ['Equipment limitations', 'Professional development', 'Defense spending constraints', 'Maritime security', 'Institutional capacity']
  ],

  'Mali': [
    `Mali's military engaged in complex security environment against terrorism and facing military junta control. With roughly 20,000 active personnel, Mali operates mixed and aging equipment. Defense spending around $500-700 million annually. Military undertook multiple coups and maintains junta control. Civil-military relations operate within military rule. Institution faces terrorism threats exceeding pure military solutions. Challenge: maintaining institutional capacity while managing terrorism and military rule.`,
    ['Terrorism threat management and counteroffensive', 'Military junta rule and legitimacy', 'Equipment modernization limitations', 'Russian military cooperation', 'Professional force development']
  ],

  'Niger': [
    `Niger's military focused on security challenges with military junta control following 2023 coup. With roughly 5,000 active military personnel, Niger operates modest equipment. Defense spending around $200-300 million annually. Civil-military relations operate within military rule. Institution faces terrorism threats and institutional challenges. Challenge: managing security while establishing military legitimacy.`,
    ['Terrorism threat management', 'Military coup legitimacy', 'Equipment limitations', 'Regional security cooperation', 'Institutional development']
  ],

  'Chad': [
    `Chad maintains military for territorial security and internal stability with limited external threat. With roughly 30,000 active personnel, Chad operates aging equipment. Defense spending minimal. Civil-military relations operate within presidential framework. Institution maintains basic capability. Challenge: maintaining security with limited resources.`,
    ['Equipment aging and obsolescence', 'Professional force development', 'Defense spending constraints', 'Internal security', 'Regional cooperation']
  ],

  'Burkina Faso': [
    `Burkina Faso's military engaged in terrorism counteroffensive under military junta control. With roughly 10,000 active personnel, Burkina Faso operates modest equipment. Defense spending around $300-400 million annually. Military undertook coup and maintains junta rule. Civil-military relations operate within military governance. Institution faces terrorism threats exceeding capacity. Challenge: managing terrorism while establishing military rule legitimacy.`,
    ['Terrorism threat management', 'Military junta rule and legitimacy', 'Equipment limitations', 'Professional force development', 'International isolation']
  ],

  'Djibouti': [
    `Djibouti maintains military with strategic Bab el-Mandeb Strait location, with foreign military presence. With roughly 11,000 active personnel, Djibouti operates modest equipment. Defense spending around $300-400 million annually. Civil-military relations stable within presidential framework. Institution maintains basic professionalism. Challenge: maintaining security with limited capability while managing foreign military presence.`,
    ['Maritime security and Bab el-Mandeb', 'Foreign military presence management', 'Equipment limitations', 'Professional development', 'Regional security cooperation']
  ],

  'Eritrea': [
    `Eritrea maintains military under authoritarian regime with limited international engagement. With roughly 200,000 active personnel (conscripted), Eritrea operates minimal equipment and aging systems. Defense spending unknown but estimated minimal. Civil-military relations operate within authoritarian framework. Institution faces international isolation. Challenge: maintaining military under sanctions and isolation.`,
    ['Conscription burden and militarization', 'Equipment aging and obsolescence', 'International isolation', 'Defense spending constraints', 'Institutional capacity']
  ],

  'Sierra Leone': [
    `Sierra Leone maintains military recovering from civil war, with modest peacekeeping capability. With roughly 10,500 active personnel, Sierra Leone operates modest equipment reflecting post-war acquisition. Defense spending around $100-150 million annually. Civil-military relations stable within democratic framework. Institution maintains basic professionalism. Challenge: maintaining capability while managing post-conflict recovery.`,
    ['Post-conflict reconciliation and stability', 'Equipment modernization limitations', 'Professional force development', 'Defense spending constraints', 'Regional security cooperation']
  ],

  'Liberia': [
    `Liberia maintains military recovering from civil conflicts, with modest security focus. With roughly 4,000 active personnel, Liberia operates minimal equipment. Defense spending minimal. Civil-military relations stable. Institution remains in development stage. Challenge: building military institutional capacity post-conflict.`,
    ['Post-conflict institutional reconstruction', 'Equipment limitations', 'Professional development', 'Defense spending constraints', 'Capacity building']
  ],

  'Guinea': [
    `Guinea maintains military under military junta control following 2021 coup. With roughly 12,000 active personnel, Guinea operates modest equipment. Defense spending around $200-300 million annually. Civil-military relations operate within military rule. Institution maintains basic capability. Challenge: managing security while establishing military legitimacy.`,
    ['Military coup and legitimacy', 'Equipment limitations', 'Professional force development', 'Internal security operations', 'International relations']
  ],

  'Ivory Coast': [
    `Ivory Coast maintains military focused on internal security and regional stability, recovering from civil conflict. With roughly 36,000 active personnel, Ivory Coast operates mixed equipment reflecting various acquisition periods. Defense spending around $500-700 million annually. Civil-military relations stable within presidential framework. Institution maintains reasonable professionalism. Challenge: maintaining capability while managing post-conflict recovery.`,
    ['Post-conflict reconciliation and stability', 'Equipment modernization funding', 'Professional force development', 'Internal security operations', 'Regional security cooperation']
  ],

  'Togo': [
    `Togo maintains military focused on territorial defense and internal security. With roughly 8,000 active personnel, Togo operates modest equipment. Defense spending around $100-150 million annually. Civil-military relations operate within presidential framework. Institution maintains basic professionalism. Challenge: maintaining capability with limited resources.`,
    ['Equipment limitations', 'Professional force development', 'Defense spending constraints', 'Internal security', 'Regional cooperation']
  ],

  'Benin': [
    `Benin maintains military focused on internal security and terrorism counteroffensive with limited capability. With roughly 7,000 active personnel, Benin operates modest equipment. Defense spending around $200-300 million annually. Civil-military relations stable within democratic framework. Institution maintains basic professionalism. Challenge: managing terrorism threats with limited resources.`,
    ['Terrorism threat management', 'Equipment limitations', 'Professional force development', 'Defense spending constraints', 'Internal security operations']
  ],

  'Gambia': [
    `Gambia maintains small military for regional stability with limited external threats. With roughly 900 active personnel, Gambia operates minimal equipment. Defense spending minimal. Civil-military relations stable. Institution remains minimal. Challenge: maintaining basic security functions with minimal resources.`,
    ['Equipment limitations', 'Professional development', 'Defense spending constraints', 'Regional cooperation', 'Institutional capacity']
  ],

  'Mauritania': [
    `Mauritania maintains military focused on territorial defense and terrorism counteroffensive. With roughly 20,000 active personnel, Mauritania operates mixed equipment reflecting various acquisitions. Defense spending around $300-400 million annually. Civil-military relations operate within presidential framework. Institution maintains reasonable professionalism. Challenge: managing terrorism threats while maintaining capability.`,
    ['Terrorism threat management', 'Equipment modernization limitations', 'Professional force development', 'Defense spending constraints', 'Regional security cooperation']
  ],

  'Congo-Brazzaville': [
    `Congo-Brazzaville maintains military focused on territorial defense with limited external threats. With roughly 10,000 active personnel, Congo operates modest equipment. Defense spending around $200-300 million annually. Civil-military relations stable. Institution maintains basic professionalism. Challenge: maintaining capability with limited resources.`,
    ['Equipment limitations', 'Professional force development', 'Defense spending constraints', 'Regional cooperation', 'Institutional capacity']
  ],

  // Remaining countries to reach 143
  'Israel': [
    `Israel's military represents one of world's most advanced and battle-tested forces, built from existential security imperative and continuous regional conflicts. Israel Defense Forces (IDF) maintain roughly 330,000 active personnel with massive reserve mobilization (another 465,000), reflecting conscription requirement for all citizens. Defense spending runs approximately $25-30 billion annually (roughly 5% of GDP), among world's highest proportions. Military operates sophisticated weaponry reflecting indigenous Israeli development combined with U.S. supplies: advanced aircraft (F-15, F-16, F-35), helicopter gunships, armor, world-class air defense systems (Iron Dome, David's Sling, Arrow). Intelligence agencies (Mossad, Shin Bet) operate with legendary reputation for effectiveness, contributing to security strategy beyond pure military capability. What makes Israeli military unique: continuous combat experience from conflicts with Palestinians, Hezbollah, Hamas, Syria, and periodic wars providing operational testing ground. Personnel rotate through combat regularly, creating force with exceptional battle-hardiness. Conscription ensures force cohesion and societal integration.`,
    ['October 2023 intelligence failure assessment', 'Gaza conflict civilian casualty management', 'Iranian nuclear program deterrence', 'Hezbollah buildup in Lebanon', 'U.S. military support continuation']
  ],

  'Palestine': [
    `Palestine lacks independent military, with security arrangements managed through Palestinian Authority forces and international mechanisms. Palestinian military structure remains limited with roughly 40,000+ personnel in security forces, focused on internal security and law enforcement. Defense spending minimal and dependent on international aid. Force operates with limited equipment and training. Security situation remains dominated by Israeli occupation, Gaza blockade, fragmented Palestinian political authority. Institution faces legitimacy challenges and limited capacity for external defense. Civil-military relations operate within Palestinian Authority framework. Challenge: developing viable security institutions within occupied context.`,
    ['Israeli occupation and security constraints', 'Gaza blockade and humanitarian access', 'Internal Palestinian security fragmentation', 'Equipment and training limitations', 'International support and dependency']
  ],

  'Iraq': [
    `Iraq's military rebuilt after ISIS defeat, developing capacity for internal security and territorial defense. With roughly 190,000 active personnel, Iraq operates mixed equipment inherited from various periods and U.S. assistance. Defense spending around $8-10 billion annually supports operations. Military faces ongoing terrorism threats from ISIS remnants and internal militias. Civil-military relations operate under Prime Minister control. Institution maintains reasonable professionalism in officer corps. Challenge: sustaining capability against terrorism while managing internal militia competition for security functions.`,
    ['ISIS remnant terrorism threats', 'Internal militia competition with military', 'Equipment modernization funding', 'Professional force development', 'Regional security cooperation']
  ],

  'Saudi Arabia': [
    `Saudi Arabia's military represents significant capability built through massive spending and U.S. partnership, though questions persist about operational effectiveness and readiness for peer conflict. Saudi Armed Forces maintain roughly 230,000 active personnel with significant reserve mobilization, supported by defense spending officially reported around $60+ billion annually (often ranking world's top spenders), reflecting oil-based wealth concentration in military. Military operates advanced Western equipment reflecting close U.S. defense partnership: F-15 fighters (quantities), advanced naval systems, air defense systems, significant procurement pipelines. Force structure emphasizes territorial defense, maritime security, ability to project power regionally. 2014-2022 intervention in Yemen (supporting Hadi government against Houthi insurgents) revealed capabilities and limitations: Saudi Air Force conducted extensive bombing campaign, but ground operations proved difficult.`,
    ['Yemen intervention sustainability and Houthi threat', 'Iran military competition and deterrence', 'Equipment maintenance and spare parts', 'Officer professionalism and training', 'Naval security in Persian Gulf']
  ],

  'UAE': [
    `United Arab Emirates maintains sophisticated military capability disproportionate to size, reflecting defense investment and strategic positioning in Middle East. With roughly 51,000 active personnel, UAE operates advanced equipment reflecting high defense spending. Defense spending around $23 billion annually (among world's highest proportions) supports modernization and operations. Military operates modern aircraft, naval systems, air defense reflecting advanced acquisitions. Civil-military relations stable. Institution maintains professional standards and advanced capability. Challenge: maintaining capability in constrained fiscal environment while managing regional security threats.`,
    ['Iran threat and regional military balance', 'Maritime security and Gulf operations', 'Equipment modernization and maintenance', 'Professional force development', 'Regional security cooperation']
  ],

  'Jordan': [
    `Jordan maintains military focused on territorial defense and regional stability, operating with moderate capability. With roughly 100,000 active personnel, Jordan operates mixed equipment reflecting various acquisitions. Defense spending around $2-3 billion annually supports operations. Military maintains strategic importance through geography and alignment with U.S. and allies. Civil-military relations stable within constitutional monarchy framework. Institution maintains professional standards. Challenge: maintaining capability while managing budget constraints and regional challenges.`,
    ['Palestinian refugee security management', 'Regional instability spillover effects', 'Equipment modernization funding', 'Professional force development', 'U.S. military partnership continuation']
  ],

  'Lebanon': [
    `Lebanon maintains military facing extraordinary challenges from state collapse, economic crisis, and Hezbollah dominance. With roughly 80,000 active military personnel, Lebanon maintains nominal force structure but faces severe constraints from economic meltdown, personnel shortages from migration, and external threats. Defense spending minimal given economic collapse. Military equipment aging, maintenance impossible given currency collapse and lack of spare parts. Institution maintains some professional standards in officer corps despite systemic collapse. Civil-military relations operate within state crisis context where military serves as partial state institution amid Hezbollah military superiority. Challenge: surviving economic and political collapse while maintaining minimal institutional coherence.`,
    ['Hezbollah dominance and military superiority', 'Economic collapse and currency crisis', 'Equipment maintenance and modernization', 'Personnel shortages from migration', 'State collapse and institutional survival']
  ],

  'Syria': [
    `Syria's military collapsed from devastating civil war but maintains some capability under Assad regime. With roughly 100,000+ nominal active personnel, Syria operates heavily damaged equipment reflecting years of conflict. Military suffered catastrophic losses during civil war—many soldiers killed, deserted, or defected. Equipment inherited from Soviet era supplemented by Russian support during intervention. Russian intervention (2015 onward) salvaged regime militarily and enabled battlefield victories, but military institution remains damaged and professional capacity severely degraded. Civil-military relations operate within authoritarian framework where military serves regime survival. Institution maintains basic combat capability in limited areas but cannot effectively project power regionally. Challenge: rebuilding military institution while maintaining regime control and managing international isolation.`,
    ['Russian military dependence and support', 'Equipment degradation from civil war', 'Personnel losses and desertion', 'International isolation and sanctions', 'Regime survival and military control']
  ],

  'Yemen': [
    `Yemen's military fragmented and institutionally collapsed following civil conflict and Saudi-led intervention, remaining deeply divided and internationally supported. Country split into competing military structures: Hadi government-aligned forces supported by Saudi Arabia and international coalition, and Houthi forces controlling northern regions with Iranian support. Nominal government forces maintain roughly 100,000+ personnel, though numbers volatile given defections and recruitment difficulties. Equipment extremely varied and degraded—mix of leftover Cold War Soviet systems, some Saudi-supplied modern systems, and captured Houthi weapons. Defense spending essentially disappeared given state collapse, with forces depending on Saudi financial support and international military assistance. Houthis, despite receiving limited Iranian support, developed surprisingly sophisticated asymmetric capabilities including drones and missiles.`,
    ['Houthi asymmetric capabilities and drone threats', 'Saudi intervention and coalition support', 'Equipment degradation and scarcity', 'International military support dependence', 'Humanitarian crisis and state collapse']
  ],

  'Qatar': [
    `Qatar maintains military focused on territorial defense and regional influence, developed through significant investment despite small geographic size and population. With roughly 15,000 active military personnel, Qatar operates modern equipment reflecting enormous defense spending. Defense spending around $8-9 billion annually (highest proportion globally relative to GDP), reflecting wealth concentration in military. Military operates advanced aircraft, naval systems, air defense reflecting global acquisitions and technological sophistication. Civil-military relations stable within absolute monarchy framework where military serves emirate interests. Institution maintains reasonable professionalism and technological integration. Strategic importance derives from geography (Persian Gulf presence), massive gas reserves, and regional diplomatic positioning.`,
    ['Regional military balance in Gulf', 'Equipment modernization and maintenance', 'Professional force development', 'Deterrence against regional threats', 'Defense spending sustainability']
  ],

  'Oman': [
    `Oman maintains military focused on territorial defense and maritime security in strategic Strait of Hormuz location. With roughly 42,000 active personnel, Oman operates modern equipment reflecting regional standards. Defense spending around $8-10 billion annually supports operations and modernization. Military maintains significant maritime focus given location and economic importance of shipping. Civil-military relations stable within absolute monarchy framework. Institution maintains professional standards and reasonable capability. Strategic location makes Oman militarily significant beyond pure force metrics. Challenge: maintaining capability for regional security while managing defense spending.`,
    ['Maritime security and Strait of Hormuz', 'Regional military balance', 'Equipment modernization funding', 'Professional force development', 'Defense spending priorities']
  ],

  'Kuwait': [
    `Kuwait maintains military rebuilt after 1990-1991 Gulf War devastation, with significant capability reflecting oil-based wealth concentration in defense. With roughly 15,000 active military personnel, Kuwait operates modern equipment reflecting U.S. and European supplies. Defense spending around $8-10 billion annually supports operations and modernization. Military remains focused on territorial defense and capacity to deter future Iraqi aggression. U.S. military presence (forward-deployed forces and bases) provides substantive deterrent supplement to Kuwaiti capability. Civil-military relations stable within constitutional monarchy framework. Institution maintains professional standards and reasonable interoperability with allied forces. Challenge: maintaining capability while managing reliance on external (particularly U.S.) military support.`,
    ['Iraq threat and historical conflict', 'U.S. military presence and bases', 'Equipment modernization funding', 'Professional force development', 'Regional security cooperation']
  ],

  'Bahrain': [
    `Bahrain maintains military focused on internal security and regional defense, with significant U.S. military presence. With roughly 8,000 active military personnel, Bahrain operates modest equipment reflecting regional standards. Defense spending around $2-3 billion annually supports operations. Military hosts U.S. Fifth Fleet and forward-deployed forces that provide substantive military capability supplement. Civil-military relations operate within absolute monarchy framework where military serves regime security. Institution maintains basic professionalism. Challenge: maintaining internal security while managing regional relationships and U.S. military presence.`,
    ['Internal security and sectarian tensions', 'U.S. military presence and Fifth Fleet', 'Equipment modernization limitations', 'Professional force development', 'Regional security cooperation']
  ],

  'Malaysia': [
    `Malaysia maintains military focused on territorial defense and regional security with professional modernization efforts. With roughly 109,000 active personnel, Malaysia operates mixed equipment reflecting various acquisition periods. Defense spending around $4-5 billion annually supports operations. Military undertook modernization efforts and professional improvement during democratic period. Civil-military relations stable within constitutional monarchy framework. Institution maintains reasonable professionalism. Challenge: maintaining capability while managing defense spending and regional security competition.`,
    ['Equipment modernization and aging systems', 'South China Sea security disputes', 'Professional force development', 'Defense spending constraints', 'Regional security cooperation']
  ],

  'Brunei': [
    `Brunei maintains small military focused on territorial defense and internal security for island sultanate. With roughly 7,000 active personnel, Brunei operates modest equipment reflecting small defense budget. Defense spending around $300-400 million annually. Military maintains basic capability for territorial security. Civil-military relations stable within absolute monarchy. Institution maintains basic professionalism. Challenge: maintaining capability with limited resources.`,
    ['Equipment modernization limitations', 'Territorial security and maritime patrol', 'Professional force development', 'Defense spending constraints', 'Regional security cooperation']
  ],

  'East Timor': [
    `East Timor maintains military recovering from independence, with force development constrained by limited resources. With roughly 1,000-2,000 active personnel, East Timor operates minimal equipment reflecting post-independence development. Defense spending minimal. Military remains in development stage following independence in 1999. Civil-military relations stable within democratic framework. Institution remains in formation. Challenge: building military capacity as new nation.`,
    ['Equipment limitations and modernization', 'Professional force development', 'Defense spending constraints', 'Regional security cooperation', 'Institutional capacity building']
  ],
}

async function saveSummariesToDatabase() {
  console.log('💾 Saving Military & Defense summaries to database...\n')

  const countries = Object.keys(countryData)
  let successCount = 0
  let errorCount = 0
  let skipCount = 0

  for (const countryName of countries) {
    try {
      const coords = countryCoordinates[countryName] || { lat: 0, lng: 0 }
      const summaryData = countryMilitarySummaries[countryName]

      if (!summaryData) {
        // Summary not explicitly provided - this is OK for now
        skipCount++
        continue
      }

      const [summary, issues] = summaryData

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: countryName,
            type: 'country',
            category: 'military',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: countryName,
          type: 'country',
          country: countryName,
          lat: coords.lat,
          lng: coords.lng,
          category: 'military',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ ${countryName}: ${summary.length} chars, ${issues.length} issues`)
      successCount++
    } catch (error) {
      console.error(`❌ ${countryName}:`, error instanceof Error ? error.message : error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log(`✅ Saved: ${successCount} countries`)
  console.log(`⏭️  Skipped: ${skipCount} countries (no explicit summary provided yet)`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log('='.repeat(80))
  console.log(`\nNote: ${skipCount} countries still need summaries to be added to countryMilitarySummaries`)
}

saveSummariesToDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
