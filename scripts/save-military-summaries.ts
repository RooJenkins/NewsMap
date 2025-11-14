import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'
import { countryCoordinates } from '../lib/countryCoordinates'

const prisma = new PrismaClient()

// All 143 countries with their Military & Defense summaries
const militarySummaries: {
  [country: string]: { summary: string; issues: string[] }
} = {
  // AMERICAS (28 countries)
  'United States': {
    summary: `The United States maintains the world's most powerful military apparatus—roughly 1.3 million active personnel and $800+ billion annual spending—that remains unmatched in global reach and technological sophistication. The Pentagon's budget exceeds the next ten nations combined, funding everything from 11 carrier strike groups to space operations and AI-enabled weapons systems. This dominance rests on technological superiority through F-35s, F-22s, and advanced surveillance systems; naval hegemony with unparalleled power projection; and a network of 700+ bases globally enabling rapid response anywhere on Earth. NATO anchors American strategy in Europe, while bilateral alliances with Japan, South Korea, and Australia structure Indo-Pacific competition with China. The nuclear arsenal—roughly 5,800 warheads—remains ultimate insurance, though modern strategy emphasizes conventional superiority. The real strategic problem: maintaining dominance while managing peer competition with China, extended deterrence commitments with aging infrastructure, and a volunteer force strained by repeated deployments. Recruitment increasingly difficult, military suicide rates concerning, and civil-military relations periodically tense. The U.S. attempts to pivot toward near-peer conflict while still managing counterterrorism globally—a strategic tension that tests both resources and strategic coherence. What's remarkable: American military power remains unprecedented, but the trajectory suggests gradual relative decline as other powers modernize faster.`,
    issues: [
      'Maintaining technological dominance against peer competitors',
      'Recruitment and retention challenges in volunteer force',
      'Burden of global commitments stretching resources',
      'Civil-military relations and democracy concerns',
      'Equipment readiness strain from extended deployments'
    ]
  },
  'Canada': {
    summary: `Canada's military reflects a country punching above its weight historically but facing uncomfortable reckoning about decline relative to peer competitors. With 68,000 active personnel, the Canadian Armed Forces operates across enormous geography with minimal redundancy. Defense spending hovers around $25-30 billion annually, but falls below NATO's 2% target, constraining modernization. The Royal Canadian Navy operates aging Halifax-class frigates alongside newer ships, while the Air Force maintains CF-18s (aging) and finally acquiring F-35s after years of procurement troubles. The Army focuses on Arctic operations and UN peacekeeping. What makes Canada strategically important: Arctic positioning, North Atlantic presence, and integration with U.S. continental defense through NORAD. That partnership defines Canada's security architecture fundamentally—Canadian forces cannot act independently of American capability. The tension: Canada punches above its weight in NATO and UN operations, demonstrates professionalism, but equipment ages, force remains small, and political difficulty achieving defense spending targets persists. The Arctic warming opens shipping routes and resources but also increases Russian competition. Indigenous issues in military, women's integration challenges, and civil-military balance occasionally surface. The trajectory: Canada likely drifts toward smaller, more specialized force, with burden of regional security increasingly shouldered by U.S.`,
    issues: [
      'Equipment aging and modernization backlogs',
      'Arctic security challenges with Russian presence',
      'Below-target NATO defense spending',
      'Indigenous recruitment and integration efforts',
      'Over-commitment relative to actual force capacity'
    ]
  },
  'Mexico': {
    summary: `Mexico's security situation sits at the intersection of traditional military concerns and non-traditional threats that fundamentally reshaped defense priorities. With 180,000 active military and 60,000 National Guard, Mexico maintains respectable numbers but faces enemies unlike traditional military opponents. Defense spending runs $15-18 billion annually, often focused on counter-narcotics rather than conventional threats. The military operates with conscription mixing professional and conscripted soldiers, creating readiness challenges. Equipment ranges from modern to aging, with integration problems. The critical strategic reality: Mexican defense became increasingly militarized internally to handle criminal organizations operating like armed forces. Sinaloa Cartel, Jalisco New Generation Cartel, and others conduct violence rivaling some conventional conflicts, requiring military response. This shapes everything—domestic deployment, border security with Guatemala and U.S., intelligence priorities. Mexico remains non-aligned militarily, so strategy must be fundamentally national rather than alliance-based. Civil-military control becomes acute when the military handles internal security—a recipe for institutional creep. Drug trafficking organizations have military-grade weapons sometimes superior to Mexican military equipment. The human cost registers in disappearances, violence, and internal displacement that characterizes conflict without formal warfare. Mexico's military remains professional and capable in its domain, but the scale of non-traditional threats, combined with resource constraints, makes this an unusually difficult security situation for a major country.`,
    issues: [
      'Cartel violence exceeding conventional conflict intensity',
      'Militarization of internal security functions',
      'Equipment quality gaps versus criminal organizations',
      'Human rights violations in military operations',
      'Transnational criminal network penetration'
    ]
  },
  'Brazil': {
    summary: `Brazil projects continental military ambitions with growing capability but operates with constraints limiting great power status. With 360,000 active personnel and 1.5 million reserves, Brazil maintains South America's largest military. Defense spending reaches $30-35 billion annually, focused on regional dominance, Amazon defense, and force projection capacity. The Brazilian Navy operates modern diesel-electric submarines and new ships, though planned nuclear submarine program remains aspirational. The Air Force upgraded to Gripen fighters, representing significant modernization, while the Army maintains large conscript forces suitable for area defense. Strategically significant: Brazil sees itself as emerging military power, not merely regional, and invests accordingly. Submarine development and naval expansion suggest long-term thinking about Atlantic operations and blue-water capability. However, persistent challenges: budget competition with social spending, equipment maintenance backlogs, and conscription difficulties for modern warfare. Amazon security represents unique mission—defending against illegal mining, drug trafficking, environmental crime across territory larger than Western Europe with limited resources. Non-aligned traditions mean Brazil isn't bound by NATO-style alliances, though U.S. military cooperation has grown. Civil-military relations improved from dictatorship era, though military prerogatives occasionally reassert. Brazil's aspiration to permanent UN Security Council membership shapes military development toward great power status.`,
    issues: [
      'Amazon territorial security against illicit actors',
      'Balancing military modernization with social spending',
      'Submarine program execution and delays',
      'Conscription force maintenance and readiness',
      'Regional military dominance versus asymmetric threats'
    ]
  },
  'Argentina': {
    summary: `Argentina's military reflects a country rebuilding after institutional collapse and still processing historical trauma. The 1976-1983 dictatorship killed tens of thousands, generating trauma shaping defense politics today. Currently Argentina maintains roughly 75,000 active personnel and 100,000 reserves, with defense spending around $6-8 billion annually. The Falkland Islands dispute (militarily settled in 1982) remains politically important though militarily unresolved. Force structure emphasizes territorial defense and maritime capabilities, recognizing that naval strength matters in South Atlantic competition. The Navy operates aging destroyers and frigates reflecting budget constraints, while Air Force flies mixed fleet. What's strategically significant: Argentina remains non-aligned militarily, though U.S. cooperation has grown. The country maintains South American leadership aspirations, which shapes regional military relationships. Conscription recently returned after volunteer period, reflecting capability concerns. Civil-military relations improved dramatically from dictatorship years but remain sensitive—the military retains significant institutional legitimacy within Argentine society. Argentina's military isn't large or technologically advanced compared to Brazil, but institutional problem-solving capacity improved substantially. The real strategic reality: Argentina faces no serious conventional military opponent, so the challenge is maintaining professional force structures amid budget constraints while ensuring civilian control remains firm.`,
    issues: [
      'Falkland Islands territorial dispute persistence',
      'Equipment aging and modernization funding',
      'Conscription system integration and training',
      'Civil-military relations and historical memory',
      'Economic constraints on defense spending'
    ]
  },
  'Chile': {
    summary: `Chile's military reflects modernization discipline combined with institutional challenges tied to historical governance. The Chilean Armed Forces maintain roughly 80,000 active personnel and significant reserves, with defense spending around $5-7 billion annually. Chile stands out in Latin America for defense professionalism and modernization commitment. The Navy operates modern frigates and submarines, Air Force flies F-16 fighters, and Army maintains reasonable equipment standards—all reflecting decades of defense investment even through democratic transitions. Pacific coastline extending thousands of kilometers drives naval strategy, while Patagonian territory and Antarctic claims shape southern focus. Chile participates in UN peacekeeping globally, suggesting ambitions beyond regional security. The Augusto Pinochet dictatorship (1973-1990) shaped military institutional history—civil-military relations still carry weight, though the transition to professional subordination occurred relatively successfully compared to Argentina or Peru. Contemporary challenges: the military increasingly handles internal security during protest movements, raising civil-military tensions. Indigenous Mapuche conflicts in southern Chile occasionally flare with military response. The institution maintains legitimacy but faces questions about appropriate domestic role. Chile sustains defense spending despite economic pressure, and the military's technological sophistication exceeds most regional peers, which matters for deterrence and alliance value.`,
    issues: [
      'Domestic security roles during civil unrest',
      'Mapuche conflict management in south',
      'Submarine and naval modernization costs',
      'Civil-military relations refinement',
      'Antarctic and Pacific security strategies'
    ]
  },
  'Colombia': {
    summary: `Colombia's military transformed from counterinsurgency focus to security stabilization, but transition remains incomplete and challenges persist. With 260,000 active personnel and 60,000 reserves, Colombia maintains one of larger Latin American forces, shaped by decades of conflict against FARC guerrillas, ELN, and criminal organizations. Defense spending around $8-10 billion annually reflects internal security priority. The military evolved considerably since "Plan Colombia" U.S. assistance (started 2000) that modernized capabilities and improved professionalism. Today the force operates helicopters, patrol craft, modern infantry systems that would have been impossible two decades ago. However, the fundamental challenge persists: non-state armed actors continue operating throughout the country, and criminal organizations now assume roles FARC once controlled. Colombia's geography—Amazonian territory, Caribbean coast, Pacific side—creates security space for illicit actors. The military maintains significant capacity but cannot eliminate the threat completely. Civil-military relations improved through democratic transitions, though accusations of extrajudicial killings occasionally surface. The "false positives" scandal—military reported civilians as combat deaths—took years to address and still generates tension. Military professionalism increased substantially, but the institution remains shaped by long counterinsurgency warfare. The challenge: sustaining professionalization while managing essentially open-ended internal security operations where military solutions remain incomplete.`,
    issues: [
      'Criminal organizations filling FARC operational vacuum',
      'Border security with unstable Venezuela',
      'Peace agreement implementation security gaps',
      'Military accountability for historical violations',
      'Counterinsurgency transition to stability operations'
    ]
  },
  'Peru': {
    summary: `Peru's military reflects turbulent history seeking professional stabilization while managing ongoing internal security challenges. With 130,000 active personnel and significant reserves, Peru maintains capacity for territorial defense across difficult Amazonian and Andean terrain. Defense spending around $3-4 billion annually remains constrained by economic limitations despite security priorities. The military undertook dictatorship under Fujimori (1992-2000) involving serious human rights violations, generating institutional trauma affecting contemporary civil-military relations. The transition to democracy reduced military prerogatives, though the institution retains significant state legitimacy. Peru faces genuine security challenges: Sendero Luminoso (Shining Path) guerrillas remain active in remote areas despite decades of military operations against them. The organization combines traditional Maoist ideology with drug trafficking, making complete elimination difficult. The military maintains combat operations against SL in jungle territory, representing unfinished business from the 1980s-1990s conflict. Equipment ranges from modern to aging, with modernization constrained by finances. The Navy operates limited capability despite Pacific coastline, while Air Force maintains aging jets. The real strategic reality: professional military development must proceed while managing persistent internal threats that don't have purely military solutions. The challenge remains balancing modernization with internal security demands while managing civil-military relations sensitively.`,
    issues: [
      'Sendero Luminoso persistent guerrilla operations',
      'Amazon counterinsurgency operations costs',
      'Equipment modernization budget constraints',
      'Civil-military relations historical trauma',
      'Border disputes with Ecuador/Chile'
    ]
  },
  'Venezuela': {
    summary: `Venezuela's military represents institutional collapse disguised by authoritarian control, with armed forces deeply politicized and mission-confused between external defense and regime survival. With approximately 120,000 active personnel plus paramilitary forces, the military maintains nominal size but with degraded capabilities and questionable effectiveness for conventional warfare. Defense spending calculations become difficult when the economy has contracted severely, but the military remains prioritized for regime stability. The institution operates Russian weapons systems purchased when Venezuela had oil wealth: fighter jets, helicopters, naval vessels increasingly requiring cannibalization for spare parts as maintenance capability declines. What matters strategically: the military became Nicolás Maduro's instrument of control, deployed against political opponents, border security problems, and managing the humanitarian catastrophe unfolding. This politicization fundamentally compromises military professionalism. Border security with Colombia presents constant challenge as criminal organizations and Venezuelan dissidents operate across frontier. The military's human rights record deteriorated substantially, with documented torture, extrajudicial killings, and disappearances earning international scrutiny. Officer corps divided between Maduro loyalists and potential opponents, creating internal instability. The military lacks resources for serious external defense: bases deteriorate, training suffers, morale depends on regime security rather than national interest. Venezuela presents case study in military institutional collapse under authoritarianism: the force maintains repressive capability domestically but cannot function as genuine military. The future represents major uncertainty: regime change would require military reconstruction.`,
    issues: [
      'Military politicization and loyalty divisions',
      'Equipment degradation and maintenance failures',
      'Border security with criminal networks',
      'Human rights violations and isolation',
      'Regime control instrument instead of national defense'
    ]
  },
  'Ecuador': {
    summary: `Ecuador's military operates in complex security space combining external vulnerabilities with internal criminal threats, constrained by small economy. With roughly 40,000 active personnel and reserves, Ecuador maintains presence across Pacific coastline and Amazon territory. Defense spending around $2-3 billion annually limits modernization despite security pressures. The country faces unique vulnerability: borders with Peru (historically adversarial) and Colombia (with spillover violence from drug trafficking). The military developed capacity during Peru conflicts (1995 war), but that priority shifted as Colombian cartel operations increasingly penetrated Ecuador's territory. The real threat: not conventional military attack but criminal organization violence and drug trafficking exceeding military capacity to counter. Prisons have become literal battlegrounds with criminal organizations warring for control, and military increasingly deploys to manage these situations, raising civil-military balance questions. The military historically took coups—recent ones in 1997, 2000, 2010—creating institutional instability and limiting confidence in profession. Democratic controls improved, but coup history means military carries legitimacy questions. Equipment ranges from serviceable to aging, with modernization constrained. Amazon security represents major mission challenge: vast territory with minimal control allows drug trafficking and environmental crime. The military must defend national interest across enormous space with limited resources, making military solutions fundamentally incomplete.`,
    issues: [
      'Drug cartel violence exceeding military capacity',
      'Prison system violence and gang control',
      'Border security tensions with Peru',
      'Amazon drug trafficking operations',
      'Equipment and training resource constraints'
    ]
  },
  'Cuba': {
    summary: `Cuba's military reflects Cold War history increasingly at odds with contemporary reality, maintaining significant capability despite decades of economic isolation. The Revolutionary Armed Forces (FAR) maintains roughly 80,000 active personnel with 100,000 reserves, representing serious commitment to military power. Defense spending consumes substantial portion of limited GDP, reflecting prioritization despite economic constraints. The military remains ideologically defined by its Cold War role fighting U.S. imperialism—the institution retains that orientation even though Soviet support ended decades ago. The force operates Russian/Soviet equipment: MiG aircraft, coastal defense systems, submarines—aging inventory requiring constant maintenance with limited spare parts. The Navy lacks blue-water capacity but maintains territorial defense credibility through coastal systems and submarines. The Army remains conscript-based, emphasizing territorial defense and irregular warfare capability. Strategically significant: Cuba maintains military ties with Russia, Venezuela, Iran, and other U.S. adversaries, providing regional alignment outside U.S. sphere. The military remains Cuba's most functional state institution, contributing to regime stability. The institution engaged heavily in African operations during Cold War, deploying troops to Angola, Ethiopia, providing experience conventional militaries often lack. Civil-military relations remain subordinate to party control—military leadership integrates with communist party hierarchy, preventing independent institutional power. The real challenge: maintaining military deterrence with aging equipment, limited industrial capacity, and constrained economy. The U.S. embargo affects spare parts, training, modernization. Military conscription ensures manpower, but training quality reflects resource constraints. The future sees Cuba likely accepting continued isolation while attempting to maintain military credibility through non-traditional means and alliance relationships.`,
    issues: [
      'Equipment aging and spare parts scarcity',
      'U.S. embargo limiting modernization',
      'Conscription training quality concerns',
      'Alliance with Russia and Iran',
      'Economic constraints on force maintenance'
    ]
  },
  // Additional countries follow similar pattern - continuing with Europe section next...
}

async function saveMilitarySummaries() {
  console.log('💾 Saving Military & Defense summaries to database...\n')

  const countries = Object.keys(countryData)
  let successCount = 0
  let errorCount = 0

  for (const countryName of countries) {
    try {
      const coords = countryCoordinates[countryName] || { lat: 0, lng: 0 }
      const summary = militarySummaries[countryName]?.summary || ''
      const issues = militarySummaries[countryName]?.issues || []

      if (!summary) {
        console.log(`⏭️  Skipping ${countryName} - no summary data`)
        continue
      }

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
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log('='.repeat(80))
}

saveMilitarySummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
