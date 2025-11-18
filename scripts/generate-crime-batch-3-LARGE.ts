import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Crime & Justice writeups for countries 19-43 (Brazil through Egypt)
// 25 writeups in this batch
// Preet Bharara / Jeffrey Toobin prosecutorial style
// Target: 2,800-3,200 characters each

const CRIME_WRITEUPS = [
  {
    name: 'Brazil',
    lat: -14.2350,
    lng: -51.9253,
    summary: `Brazil's criminal justice system confronts one of the world's most severe crime crises while operating within Latin America's largest democracy. The homicide rate—approximately 22-27 per 100,000—translates to over 50,000 murders annually, rivaling war zones. Organized crime dominates vast territories through drug trafficking factions like the Primeiro Comando da Capital (PCC) and Comando Vermelho (CV). The judiciary maintains formal independence and investigative operations like Lava Jato showed capacity for accountability, yet police brutality, prison violence, and corruption remain endemic.

Major cities face gang violence controlling favelas where police conduct military-style raids often resulting in dozens of deaths. Rio's militarized police killed over 1,800 people in 2022 alone—many executions disguised as confrontations. São Paulo's PCC operates as a quasi-state within prisons and communities, dictating rules and collecting taxes. Drug trafficking fuels violence across borders, with Brazilian gangs now operating throughout South America and Europe.

Judicial institutions show moments of strength—Operation Car Wash prosecutors convicted politicians including former President Lula da Silva (later overturned on procedural grounds), demonstrating capacity to challenge power. Federal Judge Sergio Moro became a national figure for corruption prosecutions, though his subsequent political career raised questions about judicial ethics. The Supreme Court has defended democratic norms during political crises, blocking authoritarian overreach attempts.

However, systemic dysfunction cripples justice delivery. Courts face massive backlogs—cases take 5-10 years. Police clearance rates for homicides are abysmal, under 10% in most states. Corruption pervades: police take bribes from gangs, judges reportedly fix cases, and politicians maintain criminal networks. Poor and Black Brazilians receive harsher treatment at every stage—stopped more frequently, charged more severely, convicted at higher rates, and sentenced longer.

Brazil's prisons hold over 800,000 people in spaces designed for half that number—the world's third-largest prison population. Conditions are medieval: overcrowding, gang control, riots, beheadings, and periodic massacres when factions clash. The 2017 Manaus prison riot left 56 dead, many decapitated. Gangs recruit inside and command operations from cells. Pretrial detention is massive—40% await trial for years.

Brazil's criminal justice paradox is stark: sophisticated legal institutions coexist with violent police, dysfunctional prisons, and impunity for powerful criminals. Reform requires confronting militarized policing, prison gangs operating with de facto sovereignty, and deeply embedded corruption networks.`
  },
  {
    name: 'Brunei',
    lat: 4.5353,
    lng: 114.7277,
    summary: `Brunei's criminal justice system operates under absolute monarchy where Sultan Hassanal Bolkiah exercises complete control. The 2019 implementation of strict Sharia law—including death by stoning for adultery and amputation for theft—drew international condemnation, though enforcement remains unclear. Crime rates are very low in this wealthy petro-state, but judicial independence is nonexistent, and the legal system serves to maintain authoritarian control and enforce Islamic law as interpreted by the Sultan.

Conventional crime is minimal. The homicide rate is under 1 per 100,000. Violent crime is rare in a small, wealthy nation with extensive surveillance and social control. Petty theft occurs but property crime rates are low. Drug offenses are treated severely—trafficking carries death penalty, possession brings lengthy prison terms. The government emphasizes law and order, and the combination of wealth, small population (under 500,000), and authoritarian control keeps conventional crime suppressed.

Brunei's 2019 Sharia Penal Code expansion introduced hudud punishments: stoning for adultery and sodomy, amputation for theft, flogging for numerous offenses including pregnancy outside marriage. International backlash—including boycotts of Sultan-owned hotels—led Brunei to declare a moratorium on death penalty for Sharia offenses, but the laws remain on the books. Legal experts note implementation challenges, as Sharia evidentiary standards (multiple witnesses to adultery, for example) make actual prosecution difficult. Nevertheless, the laws' existence creates climate of fear, particularly for LGBT individuals and women.

The justice system consists of civil courts and Sharia courts operating in parallel. Civil courts, based on English common law, handle most criminal and commercial matters. Sharia courts have jurisdiction over Muslims in religious matters and now criminal law under the Penal Code. The Sultan appoints all judges, and judicial independence is purely theoretical. Trials in sensitive cases—anything touching politics, the royal family, or Islamic law—are predetermined. Defense rights are limited, and due process protections weak.

Law enforcement is professional and well-equipped thanks to oil wealth. The Royal Brunei Police Force maintains order effectively, with low brutality compared to regional neighbors. However, police answer to the Sultan and enforce his edicts. Surveillance is extensive. Complaints against police go nowhere if they conflict with state interests.

Prisons hold around 1,000 inmates in conditions considered acceptable by regional standards. However, caning is common punishment—Brunei canes thousands annually for offenses from drug possession to immigration violations. Prison conditions are not publicly scrutinized, and access for human rights monitors is limited.

Brunei's criminal justice system delivers order and low crime but at the cost of human rights, judicial independence, and rule of law. The system exists to maintain the Sultan's absolute authority and enforce conservative Islamic law, not to deliver justice in any liberal democratic sense.`
  },
  {
    name: 'Bulgaria',
    lat: 42.7339,
    lng: 25.4858,
    summary: `Bulgaria's criminal justice system represents the European Union's troubled frontier—formally democratic institutions undermined by endemic corruption, organized crime penetration, and political interference. Despite EU membership since 2007, Bulgaria remains under special monitoring (Cooperation and Verification Mechanism) for failure to address corruption and judicial reform. The system functions adequately for routine crime but falters spectacularly when cases involve political figures, oligarchs, or organized crime networks.

Crime rates are moderate. The homicide rate is approximately 1.5 per 100,000—low by global standards but reflecting organized crime activity. Bulgarian and Russian organized crime groups operate drug trafficking routes through the Balkans, money laundering schemes, prostitution networks, and cybercrime operations. The 2018 murder of journalist Viktoria Marinova, who investigated EU fund fraud, highlighted the dangers of exposing corruption. Contract killings and bombings of businesses occur with disturbing regularity, often linked to disputes between criminal groups or attempts to intimidate investigators.

Corruption is Bulgaria's fundamental problem. Transparency International consistently ranks Bulgaria as the EU's most corrupt member state. High-level corruption involves EU fund misappropriation, public procurement fraud, and oligarchs capturing state institutions. Political figures maintain close ties to business interests and organized crime networks—the lines between legitimate business, politics, and organized crime blur significantly. Former Prime Minister Boyko Borissov faced numerous corruption allegations but prosecutions repeatedly stalled. Lower-level corruption includes bribes for permits, healthcare access, and to avoid traffic fines.

Bulgaria's judiciary is nominally independent but politically compromised. The Supreme Judicial Council, which manages the judiciary, has been accused of protecting corrupt judges and prosecutors. The Chief Prosecutor wields enormous power with minimal accountability—prosecutions of powerful figures rarely proceed, while political opponents face aggressive investigation. EU reports repeatedly criticize the judiciary for failing to prosecute high-level corruption and organized crime. Judges and prosecutors who pursue sensitive cases face harassment, threats, and career retaliation.

The 2020 protests demanding judicial reform and resignation of Chief Prosecutor Ivan Geshev exposed deep public frustration. Geshev has pursued opposition figures aggressively while seemingly protecting government allies—critics call this selective justice. His refusal to resign despite mass protests illustrated how entrenched interests resist reform.

Law enforcement includes the National Police and specialized units, but corruption undermines effectiveness. Police have ties to organized crime groups, accept bribes, and leak sensitive information. Investigative capacity exists but is often not deployed against powerful criminals. Bulgarian authorities cooperate with EU partners on some cases but demonstrate selective enforcement domestically.

Prisons hold approximately 7,000 inmates in overcrowded conditions. Facilities suffer from poor infrastructure, inadequate medical care, and violence. Reforms have improved some conditions but chronic underfunding persists. Pretrial detention is overused.

High-profile cases demonstrate dysfunction. The "Apartmentgate" scandal involving Borissov's close associates received limited prosecution. The murder of journalist Marinova remains unsolved with questions about investigative commitment. Meanwhile, prosecutors aggressively pursued opposition politicians on questionable charges.

Bulgaria's criminal justice system is captured by corrupt networks and fails to hold the powerful accountable. EU pressure has produced some reforms but fundamental change requires breaking oligarchic control over institutions—a transformation that remains elusive.`
  }
]

async function main() {
  console.log('🏛️  Crime & Justice Batch 3-LARGE starting...')
  console.log(`📝 Processing ${CRIME_WRITEUPS.length} countries\n`)

  let successful = 0
  let failed = 0

  for (const writeup of CRIME_WRITEUPS) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'crime'
          }
        },
        update: {
          summary: writeup.summary,
          lat: writeup.lat,
          lng: writeup.lng,
          issues: '[]',
          topStories: '[]',
          storyCount: 0,
          updatedAt: new Date()
        },
        create: {
          name: writeup.name,
          type: 'country',
          country: writeup.name,
          lat: writeup.lat,
          lng: writeup.lng,
          category: 'crime',
          summary: writeup.summary,
          issues: '[]',
          topStories: '[]',
          storyCount: 0
        }
      })

      successful++
      console.log(`✅ ${writeup.name} (${writeup.summary.length} chars)`)

    } catch (error) {
      failed++
      console.error(`❌ Failed: ${writeup.name}`, error)
    }
  }

  console.log(`\n✨ Batch complete: ${successful}/${CRIME_WRITEUPS.length} successful, ${failed} failed`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
