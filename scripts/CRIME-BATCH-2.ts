import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

const WRITEUPS = [
  { name: 'Madagascar', lat: -18.7669, lng: 46.8691, summary: `Madagascar's criminal justice system struggles with endemic corruption, resource constraints, and limited state capacity across the island's vast territory. Political instability—including the 2009 coup and ongoing factional disputes—has undermined institutional development, leaving a system that delivers justice inconsistently at best.

Crime in Madagascar includes both violent and property offenses at moderate rates. Rural banditry, particularly cattle theft (a traditional form of wealth and status), is endemic in southern regions where "dahalo" bandits operate. Urban areas face theft, burglary, and violent robberies. The homicide rate is approximately 7-8 per 100,000. Organized crime includes rosewood trafficking—illegal logging of precious hardwoods for Asian markets—which has decimated forests despite bans. Sapphire mining in southern Madagascar attracts criminal networks, child labor, and violent disputes. Drug trafficking, particularly synthetic drugs and cannabis, has increased.

Corruption permeates Madagascar's justice system and society. Transparency International ranks Madagascar in the bottom quartile globally. Judicial corruption is routine—judges and court officials demand bribes for favorable rulings or to expedite cases. Police corruption includes shakedowns at checkpoints, protection rackets, and participation in criminal enterprises. High-level corruption involves embezzlement of state resources, including international aid. The 2023 presidential election was marred by allegations that incumbent Andry Rajoelina's family misappropriated public funds.

Madagascar's judicial system is based on French civil law. Courts include lower tribunals, appeals courts, and a Supreme Court. The judiciary is chronically underfunded and understaffed. Judges often lack training and resources. Judicial independence is compromised by political pressure and corruption. In rural areas, traditional "dina" community justice operates parallel to formal courts, sometimes meting out harsh punishments including lynching of suspected cattle thieves.

Pretrial detention is excessive—approximately 50% of Madagascar's 30,000 prisoners are awaiting trial, many for years. Courts are backlogged, and defendants lack access to adequate legal representation. Trials are slow and procedures complex.

Law enforcement is weak and corrupt. Police are underpaid, poorly equipped, and often extort citizens. In rural areas, police presence is minimal, leaving communities to fend for themselves or rely on vigilante justice. The gendarmerie, which operates in rural zones, is only marginally more effective. Security forces engage in human rights abuses with impunity.

Prisons are severely overcrowded and conditions are harsh. Facilities lack adequate food, medical care, and sanitation. Violence between inmates is common. The 2017 prison riot in Farafangana resulted in several deaths and highlighted the system's failures.

Madagascar's criminal justice system fails most citizens. Meaningful reform requires resources, political will, and stability—all in short supply.` },
  { name: 'Malawi', lat: -13.2543, lng: 34.3015, summary: `Malawi's criminal justice system operates with limited resources in one of the world's poorest countries, resulting in a system that struggles to deliver timely justice despite genuine democratic progress. While Malawi has maintained relatively stable governance and regular elections, its justice institutions remain underfunded, slow, and often inaccessible to ordinary citizens.

Crime in Malawi includes property crimes, violent offenses, and corruption. The homicide rate is approximately 1.5 per 100,000—relatively low for the region. Theft, burglary, and robbery are common, particularly in urban areas like Lilongwe and Blantyre. Mob justice—vigilante killings of suspected criminals—occurs frequently, reflecting public frustration with ineffective formal justice. Organized crime includes drug trafficking (Malawi serves as a transit route for heroin from East Africa) and wildlife poaching. Corruption is the most pervasive criminal problem.

Corruption in Malawi is endemic despite anti-corruption rhetoric. The "Cashgate" scandal of 2013 exposed systematic looting of government funds—officials stole an estimated $32 million through fraudulent payments. More recently, the "Cement-gate" scandal involved suspect procurement deals. Police corruption is routine—bribes are necessary to avoid harassment or to get cases investigated. Judicial corruption occurs, with reports of judges accepting bribes.

Malawi's judiciary is based on English common law. Courts include magistrate courts, the High Court, and a Supreme Court of Appeal. The judiciary has shown independence in significant cases—most notably, the Constitutional Court's 2020 annulment of the presidential election due to irregularities was a landmark ruling that led to a re-run won by opposition leader Lazarus Chakwera. This demonstrated judicial courage. However, lower courts face massive backlogs, with cases taking years to conclude.

Access to justice is severely limited. Malawi has fewer than 100 judges for a population of 20 million. Most citizens lack legal representation and cannot navigate the complex system. Legal aid services are minimal.

Law enforcement is weak. The Malawi Police Service is underfunded, with officers poorly paid and equipped. Police corruption undermines public trust. Torture and mistreatment in custody occur, though less systematically than in some neighboring countries. Investigations are often incompetent, allowing criminals to escape justice.

Prisons are severely overcrowded and conditions are harsh. Malawi's facilities hold over 15,000 inmates in space designed for 5,000. Pretrial detainees comprise over 25% of prisoners. Conditions include inadequate food, poor sanitation, and disease outbreaks. Tuberculosis is endemic in prisons.

Malawi's justice system has shown independence in politically sensitive cases but fails ordinary citizens due to resource constraints and corruption.` },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758, summary: `Malaysia's criminal justice system reflects the country's hybrid character—a middle-income democracy with authoritarian features, where institutions function effectively for routine matters but are compromised by political interference, selective prosecution, and erosion of judicial independence. Recent political instability following the 2018 election that ended six decades of UMNO dominance has further strained the system.

Crime in Malaysia is moderate. The homicide rate is approximately 2 per 100,000. Violent crime includes armed robberies, gang violence (particularly Chinese triads and Malay gangs), and kidnapping-for-ransom in eastern Sabah near the Philippines border. Property crime—burglaries, vehicle theft, snatch thefts—affects urban areas. Drug trafficking is significant; Malaysia sits on trafficking routes from the Golden Triangle, and methamphetamine use has surged. Organized crime includes human trafficking, illegal gambling, and loan sharking. Corruption is Malaysia's most serious criminal justice problem.

Corruption permeates Malaysian politics and public administration despite anti-corruption campaigns. The 1MDB scandal exemplified the scale: Prime Minister Najib Razak and associates allegedly stole $4.5 billion from the state development fund. Najib was convicted in 2020 and sentenced to 12 years—a landmark ruling. However, his 2023 pardon to house arrest sparked outrage and raised questions about elite impunity. Police corruption includes bribes to avoid traffic violations, expedite permits, or protect illegal businesses. Judicial corruption allegations persist, particularly in commercial cases.

Malaysia's judiciary is based on English common law (with parallel Sharia courts for Muslims on family matters). Courts include subordinate courts, the High Court, Court of Appeal, and Federal Court. Judicial independence has eroded since the 1988 constitutional crisis when the executive purged independent judges. Appointments are politically influenced. In high-profile cases involving government interests, ruling parties have historically secured favorable outcomes. The 2018 change of government temporarily raised hopes for reform, but subsequent political instability has limited progress.

Selective prosecution is common. Opposition leaders face criminal charges—Anwar Ibrahim endured decades of prosecutions widely seen as politically motivated, including sodomy charges (sodomy is criminalized under colonial-era laws). After becoming Prime Minister in 2022, Anwar faces accusations of using prosecution against rivals, perpetuating the cycle.

Law enforcement includes the Royal Malaysian Police, which are reasonably equipped but plagued by corruption and brutality. Deaths in custody occur regularly—the 2016 death of firefighter Muhammad Adib during temple riots and numerous cases of suspects dying during arrest sparked public outcry. The Independent Police Complaints and Misconduct Commission lacks enforcement power.

Malaysia applies the death penalty, primarily for drug trafficking and murder. Hundreds remain on death row, though a moratorium was announced in 2018 (later partially lifted).

Prisons hold approximately 75,000 inmates in conditions that are overcrowded but not exceptionally harsh. Drug offenders comprise a large portion of prisoners.

Malaysia's justice system functions adequately for ordinary criminal matters but is compromised by political interference and corruption at higher levels.` }
]

async function main() {
  console.log(`Saving ${WRITEUPS.length} Crime writeups (batch 2)...\n`)
  for (const w of WRITEUPS) {
    try {
      await prisma.locationSummary.upsert({
        where: { name_type_category: { name: w.name, type: 'country', category: 'crime' } },
        update: { summary: w.summary, lat: w.lat, lng: w.lng, issues: '[]', topStories: '[]', storyCount: 0, updatedAt: new Date() },
        create: { name: w.name, type: 'country', country: w.name, lat: w.lat, lng: w.lng, category: 'crime', summary: w.summary, issues: '[]', topStories: '[]', storyCount: 0 }
      })
      console.log(`✅ ${w.name}`)
    } catch (error) { console.error(`❌ ${w.name}:`, error) }
  }
  console.log('\n✨ Batch 2 complete!')
}

main().finally(() => prisma.$disconnect())
