import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

const WRITEUPS = [
  { name: 'New Caledonia', lat: -20.9043, lng: 165.6180, summary: `New Caledonia's criminal justice system operates under French sovereignty with adaptations for local circumstances. As a French territory, it benefits from French legal infrastructure while navigating independence tensions, inequality between indigenous Kanak and settler populations, and the challenges of a small, isolated jurisdiction.

Crime in New Caledonia is moderate. The homicide rate is approximately 2-3 per 100,000. Violent crime includes assaults, often related to alcohol and domestic disputes. Property crime—burglary, theft—affects Nouméa and mining areas. Political violence has occurred during independence referendum periods, including riots and arson. Drug trafficking, particularly of methamphetamine from Australia, has increased. Organized crime includes smuggling operations.

As a French territory, New Caledonia applies French law through local courts with French judges. The judiciary is independent and professional, maintaining French standards. Appeals can go to French metropolitan courts.

Law enforcement includes French gendarmerie and local police, operating with metropolitan French standards. However, tensions between indigenous Kanaks and authorities periodically generate complaints about excessive force.

Prisons hold several hundred inmates in facilities that meet French standards, though overcrowding has been an issue.

The unique aspect is political crime during independence movements—prosecution of activists raises questions about balancing French sovereignty with Kanak aspirations.` },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860, summary: `New Zealand's criminal justice system ranks among the world's most effective, characterized by strong rule of law, independent judiciary, low corruption, and effective law enforcement. As a stable democracy with British legal heritage, New Zealand delivers fair, predictable outcomes. However, significant challenges exist: Maori overrepresentation in prisons, gang violence, and domestic violence.

Crime in New Zealand is low by global standards. The homicide rate is approximately 0.9 per 100,000. Violent crime includes assaults, robberies, and an epidemic of family violence—New Zealand has among the highest domestic violence rates in the developed world. Property crime—burglary, vehicle theft—occurs at moderate rates. Gang violence is significant, with gangs like the Mongrel Mob and Black Power engaging in drug trafficking and turf wars. Methamphetamine ("meth" or "P") is the primary drug problem.

Corruption is very low. Transparency International ranks New Zealand consistently in the top 3 globally. When scandals occur, they involve conflicts of interest rather than bribery.

The judiciary is independent and based on English common law. Judges are appointed based on merit with strong tenure protections. Political interference is nonexistent.

Law enforcement (New Zealand Police) is professional and generally trusted. Police are unarmed during routine patrols. Corruption is extremely rare. However, police handling of family violence has faced criticism.

The most serious justice issue is Maori overrepresentation. Maori comprise 17% of the population but over 50% of prisoners, reflecting systemic inequality and over-policing.

Prisons hold approximately 9,000 inmates in conditions meeting international standards.` },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072, summary: `Nicaragua's criminal justice system operates as President Daniel Ortega's enforcement tool in what has become a brutal dictatorship. Following the 2018 protests that challenged his rule, Ortega has weaponized justice to crush opposition, creating a climate of terror where dissent is criminalized and rule of law is fiction.

Crime includes both conventional offenses and state repression. The homicide rate is approximately 7 per 100,000. Violent crime includes gang violence and narco-trafficking—Nicaragua serves as a transit route for cocaine. However, the primary "criminal activity" is state violence: security forces killed hundreds during the 2018 crackdown and have imprisoned thousands of dissidents.

Corruption is endemic. The Ortega family controls major economic sectors. Police and judges operate as regime enforcers rather than law enforcement.

The judiciary is completely controlled by the Ortega regime. Courts rubber-stamp prosecutions of dissidents. Show trials lack any pretense of due process.

Politically motivated prosecutions are systematic. Opposition leaders, journalists, priests, students, and activists face arrest on fabricated terrorism and "treason" charges. Over 200 political prisoners were stripped of citizenship and deported to the U.S. in 2023. The Catholic Church faces persecution—Bishop Rolando Álvarez received a 26-year sentence for "treason."

Police and paramilitaries torture detainees. Political prisoners endure isolation, beatings, and denial of medical care.

Prisons are brutal for political prisoners.

Nicaragua's justice system exists solely to maintain Ortega's dictatorship.` },
  { name: 'Niger', lat: 17.6078, lng: 8.0817, summary: `Niger's criminal justice system has collapsed following the July 2023 military coup that overthrew President Mohamed Bazoum. Already weakened by jihadist insurgencies, extreme poverty, and limited state capacity, the system now operates under military rule with minimal pretense of judicial independence.

Crime includes jihadist violence, conventional offenses, and banditry. Niger faces attacks from multiple jihadist groups—Islamic State in the Greater Sahara (ISGS), Jama'at Nusrat al-Islam wal-Muslimin (JNIM), and Boko Haram affiliates. These groups have killed thousands and displaced hundreds of thousands. Beyond terrorism, banditry and cattle rustling plague the Sahel. The homicide rate is difficult to verify. Organized crime includes human trafficking and smuggling networks.

Corruption is pervasive. Transparency International ranks Niger poorly. Military and civilian officials embezzle state resources. Police demand bribes.

The judiciary nominally operates under civil law but is compromised by military control post-coup. Courts are under-resourced and slow. Judicial independence was limited even before the coup.

The junta has detained former President Bazoum and officials without trial. Security forces operate with impunity.

Prisons are overcrowded with harsh conditions.

Niger's system barely functions.` },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753, summary: `Nigeria's criminal justice system struggles under the weight of massive population (220 million), endemic corruption, multiple security crises, and weak institutions. While Nigeria is Africa's largest democracy with periodic elections, its justice system fails most citizens through inefficiency, corruption, and inability to address insecurity that includes Boko Haram terrorism, banditry, kidnapping, and separatist violence.

Crime in Nigeria is severe across categories. The homicide rate is difficult to verify but appears high. Terrorist violence from Boko Haram and Islamic State West Africa Province (ISWAP) has killed tens of thousands in the northeast. Banditry in the northwest involves armed gangs kidnapping for ransom, killing villagers, and rustling cattle. Kidnapping affects all regions—schools, travelers, and wealthy individuals are targets. Separatist violence occurs in the southeast. Violent crime includes armed robberies and gang violence in Lagos and other cities. Ritual killings for "juju" practices persist. Organized crime includes oil theft (billions in revenue lost annually), drug trafficking, advance-fee fraud ("419" scams), and human trafficking.

Corruption is massive and systemic. Nigeria ranks among the world's most corrupt countries. Police demand bribes routinely—at checkpoints, to investigate crimes, or to avoid false charges. Judicial corruption is widespread; judgments can be purchased. High-level corruption involves embezzlement of oil revenues, contract fraud, and political financing schemes. Anti-corruption agencies like the EFCC make arrests but convictions are rare for truly powerful individuals.

Nigeria's judiciary is based on English common law (plus Sharia courts in northern states). Federal and state court systems operate in parallel. The judiciary has shown independence in significant cases—courts have overturned flawed elections and ruled against government interests. However, lower courts are slow, corrupt, and under-resourced. Cases drag for decades. Access to justice is limited for poor Nigerians.

Law enforcement is dysfunctional and brutal. The Nigeria Police Force is understaffed, poorly equipped, and corrupt. The disbanded Special Anti-Robbery Squad (SARS) became notorious for extortion, torture, and extrajudicial killings, sparking the 2020 #EndSARS protests that security forces violently suppressed. Military and police operations against insurgents and bandits routinely kill civilians.

Prisons hold over 70,000 inmates in facilities designed for 50,000. Approximately 75% are pretrial detainees. Conditions are abysmal—overcrowding, disease, inadequate food.

Nigeria's justice system delivers rough justice at best, fails catastrophically at worst.` },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101, summary: `North Korea's criminal justice system is totalitarian theater where law serves the Kim dynasty's absolute control. Justice doesn't exist in any meaningful sense—the system operates to terrorize the population, eliminate dissent, and maintain the world's most repressive regime. Trials are shows, confessions are coerced, and punishment is designed to crush human spirit.

Crime statistics are state secrets. The regime criminalizes behavior that would be ordinary elsewhere—listening to foreign media, attempting to leave the country, criticizing leadership, or possessing unauthorized materials. "Anti-state" crimes carry death sentences or decades in political prison camps.

The entire system is corrupt in the sense that it serves regime interests rather than justice, though individual officials taking bribes is also common.

Courts are regime instruments. The judiciary has zero independence. Trials lack any pretense of due process. Defendants have no meaningful legal representation. Verdicts are predetermined based on political considerations.

Public executions by firing squad are used to terrorize the population. Offenses include smuggling, watching South Korean videos, or Bible possession.

Police and state security apparatus surveil everyone. Torture is systematic. North Korea operates a gulag system holding an estimated 80,000-120,000 people in political prison camps where torture, starvation, forced labor, and execution are routine. Entire families are punished for one member's "crime" under collective punishment doctrine.

North Korea's justice system is designed to destroy human dignity and maintain Kim family rule through terror.` },
  { name: 'North Macedonia', lat: 41.6086, lng: 21.7453, summary: `North Macedonia's criminal justice system has made progress since independence but remains hampered by corruption, political interference, and ethnic tensions. The country's democratic development has been uneven, with the justice system sometimes serving political ends rather than delivering impartial justice.

Crime is moderate. The homicide rate is approximately 1.5 per 100,000. Violent crime includes assaults and organized crime violence. Property crime affects urban areas. Organized crime includes drug trafficking (North Macedonia sits on Balkan routes), human trafficking, and smuggling. Corruption is the most serious problem.

Corruption is significant. High-level scandals have involved politicians and judges. Police corruption includes bribery. The 2015 wiretapping scandal exposed massive corruption and abuse of power by the previous government.

The judiciary operates under civil law but faces political pressure. Judicial appointments have been politicized. Courts are slow and backlogged.

Law enforcement has been used for political purposes. The 2017 storming of parliament by protesters (some allege with official backing) illustrated institutional fragility.

EU accession processes have driven reforms, but implementation is inconsistent.

Prisons are overcrowded with approximately 3,000 inmates.

North Macedonia's system functions better than in the past but needs continued reform.` }
]

async function main() {
  console.log(`Saving ${WRITEUPS.length} Crime writeups (batches 4-6)...\n`)
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
  console.log('\n✨ Batches 4-6 complete!')
}

main().finally(() => prisma.$disconnect())
