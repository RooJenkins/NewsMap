#!/usr/bin/env npx tsx
/**
 * Generate and save Military & Defense summaries for 13 missing countries
 * Bolivia, Paraguay, Uruguay, Papua New Guinea, Fiji, Kazakhstan, Solomon Islands,
 * Vanuatu, Samoa, Tonga, Ghana, Mozambique, Senegal
 */

import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'
import { countryCoordinates } from '../lib/countryCoordinates'

const prisma = new PrismaClient()

// Comprehensive military summaries for 13 missing countries
const countryMilitarySummaries: {
  [country: string]: [string, string[]]
} = {
  'Bolivia': [
    `Bolivia's military operates as small regional force focused on territorial defense in landlocked South American context, with limited resources constraining modernization. Bolivian Armed Forces maintain roughly 35,000-40,000 active personnel, supported by defense spending around $500 million annually—modest resources reflecting limited GDP and competing social spending priorities. Military operates aging equipment inherited from various periods: Soviet-era tanks and helicopters, aging transport aircraft, limited naval capability on landlocked rivers. Force structure emphasizes ground forces appropriate for Andean terrain, with particular focus on Amazon territory defense against drug trafficking and environmental crime. Institution maintains reasonable professionalism among officer corps but faces chronic equipment maintenance challenges and modernization constraints. Civil-military relations remain sensitive within democratic framework following 1980s military dictatorship history. Contemporary security challenge: drug trafficking organizations operating with sophistication exceeding military capacity to counter. Criminal syndicates have military-grade weapons and organization rivaling conventional forces. Military deploys extensively against narcotics trafficking but cannot eliminate threat completely. Geographic challenge compounded by limited resources—vast territory with minimal control infrastructure allows illicit operations. Regional military relationships emphasize South American cooperation without powerful external allies. Military participation in UN peacekeeping provides limited training and modernization opportunities. Institutional challenge: maintaining professional force structures amid budget constraints while addressing non-traditional security threats.`,
    ['Drug trafficking exceeding military capacity', 'Equipment modernization underfunding', 'Amazon territory security challenges', 'Professional force development constraints', 'Limited regional security partnership']
  ],

  'Paraguay': [
    `Paraguay's military operates as small territorial defense force in landlocked South American position, with strategic importance related to Paraná River and regional waterways security. Armed Forces maintain roughly 12,000-15,000 active personnel, with defense spending around $350-400 million annually—proportionally modest reflecting limited economic capacity. Military operates mixed and aging equipment: older Argentine and Brazilian transfers, limited air capability, riverine patrol craft reflecting geographic position. Force structure emphasizes Army with modest Navy and Air Force components addressing territorial protection and river security. Contemporary challenge: organized crime and drug trafficking organization presence exceeds military capacity to address. Tri-border area (Argentina-Brazil-Paraguay intersection) represents security gray zone where criminal organizations operate with impunity. Military undertook limited modernization but equipment aging remains persistent challenge. Civil-military relations stabilized within democratic framework after Stroessner dictatorship (1954-1989). Institution maintains reasonable professionalism in officer corps despite resource constraints. Military deployed to UN peacekeeping provides training opportunities but doesn't address core security challenges. Geographic isolation and limited foreign partnerships mean military capability remains fundamentally limited. Institutional realities: Paraguay's military focuses on basic territorial integrity maintenance rather than power projection, facing non-traditional threats exceeding pure military solutions. Personnel shortages and brain drain to other professions create staffing challenges.`,
    ['Criminal organization violence and drug trafficking', 'Tri-border area security challenges', 'Equipment aging and procurement constraints', 'Personnel recruitment and retention', 'Professional modernization underfunding']
  ],

  'Uruguay': [
    `Uruguay maintains smallest professional military in South American peer group, reflecting democratic commitment and low external threat environment unusual in regional context. Armed Forces maintain roughly 24,000-28,000 active personnel with significant reserves, supported by defense spending around $1.2-1.5 billion annually—proportionally higher than regional peers reflecting institutional commitment despite limited GDP. Military operates modern equipment reflecting selective modernization and U.S. partnership: recently acquired patrol craft, helicopter capability, equipment standards meeting regional requirements. Force structure emphasizes Navy reflecting Atlantic coastline and maritime interests, with Army and Air Force components addressing territorial defense. Country dissolved naval air force in 1966 and conscription-based force maintains all-volunteer professionalism. Contemporary security environment: minimal external threat allows military to focus on international peacekeeping participation and humanitarian missions. Uruguay deployed extensively to UN peacekeeping operations (Haiti, Congo, South Sudan, Lebanon) providing operational experience and international profile. Civil-military relations exceptionally stable within strong democratic framework—institution subordinate to civilian authority with professional standards. Defense spending reflects commitment but constrained by social spending pressure. Equipment modernization proceeds gradually through selective acquisitions. Military maintains sophisticated regional military relationships and integrated with South American security frameworks. Institution faces demographic challenge from aging population affecting recruitment pool. Military culture emphasizes civilian control and professionalism, creating stable institution contrasting with regional histories. Institutional strength: Uruguay's military represents professionalism and democratic integration serving broader international security community.`,
    ['Recruitment in aging demographic society', 'Equipment modernization funding constraints', 'Peacekeeping operation sustainability', 'Maritime security capability maintenance', 'Defense spending competing with social priorities']
  ],

  'Papua New Guinea': [
    `Papua New Guinea operates small military force across world's most geographically challenging terrain with limited resources and institutional capacity challenges. Defence Force maintains roughly 3,000-4,000 active personnel, supplemented by reservists, with defense spending around $150-200 million annually—minimal resources reflecting poor economic capacity and competing development priorities. Military operates minimal equipment: aging patrol boats for maritime surveillance, limited transport aircraft, basic ground equipment reflecting poverty constraints. Force structure emphasizes naval and riverine capability given island geography and maritime security requirements, with ground forces addressing internal security. Geographic reality shapes military completely: PNG comprises thousands of islands across vast marine space with minimal infrastructure connecting communities. Government control barely extends beyond coastal areas—interior remains largely ungoverned with indigenous populations maintaining traditional authority. Military cannot effectively project authority across territory due to geography, resources, and institutional capacity limitations. Contemporary security challenge: tribal violence, weapons proliferation among communities, criminal organization activity in maritime areas, drug trafficking transit through PNG toward Australia. Military deployed internally addressing tribal conflicts, training limitations, and resource constraints create chronic dysfunction. Institution faces significant capacity and professionalism challenges: corruption allegations, internal discipline problems, limited officer training. Civil-military relations operate within weak democratic framework where military retains significant autonomy. Australia provides crucial military assistance and training support, creating external dependency for defense capability. Internal security threats exceed external military threat—military increasingly deployed domestically managing violence and maintaining state presence. Foreign military presence: Australian advisory teams and regional cooperation provide substantive capability augmentation.`,
    ['Internal tribal violence exceeding military capacity', 'Maritime domain security gaps', 'Equipment aging and maintenance', 'Institutional corruption and discipline', 'Geographic terrain limiting operational capability']
  ],

  'Fiji': [
    `Fiji operates regional military force across Pacific island geography with institutional instability from military coup history affecting modernization and professional development. Fijian Defence Force maintains roughly 3,500-4,000 active personnel with reserves, supported by defense spending around $150-200 million annually. Military operates modest but serviceable equipment: patrol boats for maritime security, transport aircraft, ground equipment appropriate for island defense. Force structure emphasizes Navy and maritime capability reflecting geography, with ground forces addressing territorial security and internal stability. Institutional history shaped military development critically: four military coups (1987 twice, 2000, 2006) created chronic civil-military instability and international isolation. 2006 coup replaced elected government, triggering Western military aid reductions and institutional damage. Democratic transition (2013-2014) restored civilian government and began military professionalization effort, improving international relationships. Contemporary military focus: maritime security, regional disaster response, UN peacekeeping participation (Solomon Islands deployment, Timor-Leste experience). Civil-military relations stabilized within democratic framework but remain sensitive given coup history. Military undertook modernization efforts including facility upgrades and equipment acquisition, though budget constraints limit pace. Institution maintains reasonable professionalism among officer corps with improved training standards. Regional military cooperation emphasizes Pacific Island security frameworks and Australia-New Zealand partnership support. Internal security emphasis: military deployed addressing maritime crimes, drug trafficking, and maintaining government authority across distributed island population. Professional development constrained by geographic isolation and limited defense budget.`,
    ['Coup history and civil-military instability', 'Maritime security in vast ocean space', 'Equipment modernization funding limitations', 'Natural disaster response capability', 'Professional development in isolated context']
  ],

  'Kazakhstan': [
    `Kazakhstan operates regional military power in Central Asia reflecting post-Soviet transition and emerging great power status, with significant modernization reflecting hydrocarbon wealth and strategic positioning. Armed Forces maintain roughly 40,000-50,000 active personnel with substantial reserves, supported by defense spending around $1.5-2 billion annually—significant resources reflecting oil-based wealth and regional power aspirations. Military operates modern equipment reflecting selective modernization: Russian systems (main component) supplemented by European and U.S. acquisition, creating diverse inventory with integration challenges. Force structure emphasizes ground forces appropriate for steppe terrain, with developing air and naval capability reflecting strategic modernization. Post-Soviet transition shaped military development: transition from Soviet military structures toward independent national force required institutional reconstruction. Kazakhstan developed professional officer corps with international training emphasis and NATO interoperability standards. Civil-military relations stabilized within authoritarian presidential framework where military serves state power, not democratic control. Contemporary security concerns: Russia threatens territorial integrity (Crimea precedent), Islamic extremism in southern regions, border security with unstable neighbors, terrorism from regional insurgent groups. Military developed asymmetric deterrence emphasizing mobility and defensive depth given Russia's military superiority. Institution maintains reasonable professionalism and capability appropriate for regional power status. Defense modernization accelerated following 2022 Russia-Ukraine war, recognizing existential threat from Russian aggression. Regional military cooperation emphasizes Central Asian coordination and Russia partnership while developing European-American relationships. Kazakhstan participates in international peacekeeping providing operational experience. NATO partnerships provide training and interoperability development without formal alliance commitment. Strategic positioning between major powers shapes military doctrine emphasizing independence and credible defense capability.`,
    ['Russian military threat and deterrence', 'Equipment modernization acceleration', 'Islamic extremism in south regions', 'Regional security balance management', 'Defense spending sustainability at elevated levels']
  ],

  'Solomon Islands': [
    `Solomon Islands operates minimal military force across Pacific island geography with institutional challenges limiting security capability development. Defence Force maintains roughly 2,000-2,500 active personnel, with defense spending around $100-150 million annually—minimal budget reflecting poor economic capacity. Military operates minimal equipment: small patrol boats for maritime patrol, limited transport capability, basic ground equipment reflecting resource constraints. Force structure emphasizes maritime security given island geography, with ground forces addressing internal stability. Contemporary security challenge shapes military operations completely: civil conflict (1998-2003) devastated institution and created lasting instability. Conflict displaced 200,000+ people, involved militias and criminal organizations, and severely damaged state capacity. International intervention (Regional Assistance Mission to Solomon Islands, 2003-2017) and Australian military presence provided external security provision. Post-conflict recovery remains incomplete: institutional capacity remains limited, weapons remain in civilian hands, regional instability persists in remote areas. Military faces chronic resource constraints, recruitment difficulties, and equipment maintenance challenges. Governance challenges affect institution: corruption allegations, discipline problems, limited professional development. Police force (Royal Solomon Islands Police Force) provides primary internal security, with military supporting as backup. Civil-military relations operate within weak democratic framework with military subordinate to civilian authority formally but operating with significant autonomy practically. Australia provides crucial military assistance and training, creating dependency relationship. Regional security cooperation emphasizes Pacific Island framework and Australia-New Zealand support. Internal security threats exceed external threats fundamentally—military deployed addressing criminal organizations and maintaining state presence in remote areas.`,
    ['Post-conflict recovery and institutional weakness', 'Weapons proliferation and civil violence', 'Maritime security and patrol capability', 'Equipment aging and maintenance limitations', 'Australian military dependence']
  ],

  'Vanuatu': [
    `Vanuatu operates minimal military force across Pacific island geography with severe resource constraints limiting security capability and institutional development. Defence Force maintains roughly 300-400 active personnel—among world's smallest standing militaries—with defense spending around $50-80 million annually. Military operates minimal equipment: one patrol boat for maritime surveillance, basic ground equipment reflecting poverty constraints, limited air capability. Force structure emphasizes maritime security given island position and exclusive economic zone, with nominal ground forces addressing internal order. Geographic challenge compounded by extreme poverty and limited government revenue creating institutional constraints. State capacity remains limited across government institutions—military reflects broader governance weakness. Contemporary security environment: minimal external threat allows focus on internal stability and disaster response. Country faces natural disaster risks (cyclones, tsunamis) that exceed military capacity to address, requiring Australian and New Zealand support. Military participates minimally in regional security frameworks due to limited capability. Civil-military relations operate within weak democratic framework where military maintains security force role. Corruption and resource constraints affect institution chronically. Personnel recruitment difficult given limited economic opportunities within military. Equipment aging and maintenance impossible given budget limitations. Military conducts basic patrols and law enforcement support, with police force (Vanuatu Police Force) providing primary security. Regional military cooperation emphasizes Pacific Island frameworks and reliance on external partners (Australia, France with Vanuatu's New Hebrides heritage). Institution remains minimal security actor with capability limitations constraining regional role.`,
    ['Extreme resource constraints and poverty', 'Maritime security with minimal capability', 'Natural disaster response limitations', 'Police force dependence for security', 'Equipment aging and no maintenance budget']
  ],

  'Samoa': [
    `Samoa operates minimal military force across Pacific island geography with very limited resources and institutional capacity constraints. Defence Force maintains roughly 150-200 active personnel—minimal standing military—with defense spending around $20-40 million annually. Military operates minimal equipment: one patrol boat for maritime surveillance, basic ground equipment reflecting poverty, no air force capability. Force structure emphasizes maritime security given island economy and maritime interests, with nominal ground forces addressing internal order. Geographic vulnerability and economic poverty create institutional constraints limiting security capability development. Contemporary security challenge: natural disaster response (cyclones, tsunamis) represents major institutional responsibility exceeding pure military capacity. Military participates in disaster relief operations and humanitarian response, providing valuable internal function. External security threat minimal—island position and international relationships provide security environment. Military focuses on internal stability maintenance and police support functions. Civil-military relations operate within weak democratic framework where military maintains law enforcement support role rather than conventional military function. Personnel recruitment difficult given minimal salary and limited career opportunities. Equipment minimal and maintenance impossible given budget constraints. Regional security cooperation emphasizes Pacific Island framework reliance on New Zealand and Australia support. Military represents minimal security institution with capability strictly limited to internal support functions and maritime patrol.`,
    ['Extreme resource limitations and poverty', 'Maritime patrol with minimal capability', 'Natural disaster response responsibility', 'Personnel recruitment and retention', 'Equipment aging with no upgrade capability']
  ],

  'Tonga': [
    `Tonga operates minimal military force in Pacific island geography with severe resource constraints limiting security capability and institutional modernization. Defence Force maintains roughly 400-500 active personnel, with defense spending around $50-80 million annually—minimal resources reflecting poor economic capacity. Military operates minimal equipment: one patrol boat for maritime surveillance, basic ground equipment, nominal air capability through training partnership. Force structure emphasizes maritime security given island position and exclusive economic zone, with ground forces addressing internal order. Contemporary institutional challenge: 2006 riots and civil unrest required military deployment domestically, exposing capability limitations and professional gaps. Institution recovered but remains constrained by resource availability and limited training opportunities. Military faces chronic equipment maintenance challenges, personnel shortages from emigration (Tongans seek economic opportunity abroad), and limited modernization capability. Civil-military relations operate within constitutional monarchy framework where military serves state security function under civilian control. Governance remains stable allowing military to focus on security provision without political instability. External security threat minimal—international relationships and geographic position provide security environment. Military participation in regional security frameworks minimal due to capability constraints. Natural disaster response represents significant institutional responsibility—cyclone preparedness and relief operations strain limited resources. Australia and New Zealand military support provides training and equipment augmentation. Maritime domain security emphasizes fishing rights protection and exclusive economic zone control. Military functions increasingly resemble police force with ground element focusing on internal stability rather than conventional military missions.`,
    ['Extreme resource constraints limiting capability', 'Maritime security and patrol gaps', 'Equipment aging and maintenance impossible', 'Personnel emigration and recruitment', 'Natural disaster response responsibility']
  ],

  'Ghana': [
    `Ghana maintains West African military power with professional standards and democratic stability unusual in regional context, though equipment modernization and budget constraints limit capability development. Ghana Armed Forces maintain roughly 24,000-28,000 active personnel with reserves, supported by defense spending around $500-700 million annually. Military operates mixed equipment reflecting various acquisition sources: French, British, and Chinese systems alongside limited U.S. equipment, creating integration complexity. Force structure emphasizes ground forces with Navy and Air Force components addressing maritime security and territorial defense. Civil-military relations remarkably stable within democratic framework—Ghana demonstrates greatest democratic commitment in region with professional military subordinate to civilian authority. Institution maintains professional standards with international training emphasis and UN peacekeeping participation providing operational experience. Contemporary security challenge: terrorism threat increasingly prevalent in north and northeastern regions with militant Islamist groups (ISIS-affiliated operations, Al-Qaeda affiliates) conducting attacks. Military deployed addressing terrorism with support from regional partners and international advisors. Equipment modernization underfunded constrains counter-terrorism capability—militants operate with military-grade weapons exceeding Ghanaian equipment sophistication in some categories. Border security challenges with Ivory Coast and other neighbors complicated by permeable borders facilitating criminal organization activity. Maritime security emphasis reflects Atlantic coastline and fishing industry importance, with Navy modernization ongoing. Military participation in UN peacekeeping (Mali, Liberia, Sierra Leone) provides training opportunity and international profile. Institutional challenge: terrorism threat exceeding current military capacity, requiring modernization acceleration and regional security cooperation. Institution maintains reasonable professionalism and institutional integrity amid regional instability.`,
    ['Terrorism threat in northern regions', 'Equipment modernization underfunding', 'Border security and cross-border criminal activity', 'Maritime security capability development', 'UN peacekeeping operation sustainability']
  ],

  'Mozambique': [
    `Mozambique operates regional military force recovering from civil conflict with ongoing insurgency challenges exceeding institutional capacity. Armed Forces maintain roughly 11,000-13,000 active personnel with reserves, supported by defense spending around $300-500 million annually—modest resources reflecting economic constraints. Military operates aging equipment inherited from Portuguese colonial period and Soviet support during civil war: Soviet-era tanks and helicopters, aging transport aircraft, limited modern systems. Contemporary security crisis dominates military operations: RENAMO insurgency in central regions (Gorongosa province) and ISIS-affiliated Islamic State of Mozambique (ISM) operations in northern regions (Cabo Delgado province) exceed military capacity to address. Cabo Delgado insurgency (2017-ongoing) involves sophisticated Islamist force conducting military-style operations including ambushes, raids, and territorial control attempts. Conflict displaced 750,000+ people, involved human rights allegations, and demonstrated military capability limitations. Military undertook limited modernization and international military assistance expansion, including Russian, Portuguese, and U.S. support. Force structure emphasizes ground forces appropriate for counterinsurgency, with minimal naval and air capability. Civil-military relations operate within democratic framework but military retains significant autonomy in security operations. Institution maintains reasonable professionalism among officer corps despite resource constraints and operational stress. Military personnel training inadequate for sophisticated counterinsurgency operations—casualty rates elevated suggesting capability gaps. Equipment aging fundamentally constrains capability—modern insurgent tactics exceed Mozambique's military equipment sophistication. Regional military cooperation emphasizes SADC framework and assistance from neighboring countries including Tanzania and South Africa. International military advisors from Russia, Portugal, and others provide training and operational guidance. Institution faces existential challenge: ongoing insurgency exceeding military capacity creates governance vacuum and humanitarian crisis.`,
    ['Insurgency in Cabo Delgado exceeding capacity', 'RENAMO insurgency in central regions', 'Equipment aging and capability gaps', 'Personnel training for counterinsurgency', 'International military advisor dependence']
  ],

  'Senegal': [
    `Senegal operates West African military power with relative stability and democratic traditions unusual in regional context, though equipment modernization and terrorism threats challenge institutional capacity. Armed Forces maintain roughly 13,000-16,000 active personnel with reserves, supported by defense spending around $400-600 million annually. Military operates mixed equipment: French, Russian, Chinese, and U.S. systems creating integration complexity and maintenance challenges. Force structure emphasizes ground forces with modest Navy and Air Force reflecting West African power status. Civil-military relations relatively stable within democratic framework—Senegal demonstrates institutional commitment to democracy and civilian control, creating institutional legitimacy. Military maintains professional standards with international training emphasis and UN peacekeeping participation (Mali, Central African Republic, Democratic Republic of Congo) providing operational experience and training. Contemporary security challenge: terrorism threat increasingly prevalent in northern regions and Mauritanian border areas with Islamic militant groups (Al-Qaeda in Islamic Maghreb, ISIS affiliates) conducting attacks. Military deployed addressing terrorism with support from French military (Operation Barkhane presence), U.S. advisors, and regional partners. Equipment modernization constrained by budget limitations—militants operate with military-grade weapons requiring modernization response. Casamance separatist insurgency (decades-long conflict in southern regions) remains low-intensity but persistent. Border security challenges with Guinea, Guinea-Bissau, and Mauritania complicated by transnational criminal organization activity and militant group operations. Maritime security emphasis reflects Atlantic coastline fishing industry and offshore oil exploration. Military participation in UN peacekeeping provides training and international profile while straining resources. Institution maintains reasonable professionalism and institutional integrity despite regional instability. Institutional challenge: terrorism and insurgency threats requiring accelerated modernization and sustained international support.`,
    ['Terrorism threat in northern regions', 'Equipment modernization underfunding', 'Casamance separatist insurgency persistence', 'Border security and transnational crime', 'UN peacekeeping operation sustainability']
  ],
}

async function saveSummariesToDatabase() {
  console.log('Saving Military & Defense summaries for 13 missing countries...\n')

  const countriesToSave = [
    'Bolivia',
    'Paraguay',
    'Uruguay',
    'Papua New Guinea',
    'Fiji',
    'Kazakhstan',
    'Solomon Islands',
    'Vanuatu',
    'Samoa',
    'Tonga',
    'Ghana',
    'Mozambique',
    'Senegal',
  ]

  let successCount = 0
  let errorCount = 0

  for (const countryName of countriesToSave) {
    try {
      const coords = countryCoordinates[countryName] || { lat: 0, lng: 0 }
      const summaryData = countryMilitarySummaries[countryName]

      if (!summaryData) {
        console.log(`⏭️  ${countryName}: No summary provided`)
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

      console.log(
        `✓ ${countryName}: ${summary.length} chars, ${issues.length} issues`
      )
      successCount++
    } catch (error) {
      console.error(
        `✗ ${countryName}:`,
        error instanceof Error ? error.message : error
      )
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log(`✓ Successfully saved: ${successCount} countries`)
  console.log(`✗ Errors: ${errorCount} countries`)
  console.log('='.repeat(80))
}

saveSummariesToDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
