import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

const WRITEUPS = [
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296, summary: `Mozambique's criminal justice system has been severely weakened by a brutal jihadist insurgency in Cabo Delgado province, endemic corruption, and limited state capacity. The system struggles to maintain order across a large territory while the ruling FRELIMO party's tight control compromises judicial independence.

Crime includes both conventional offenses and insurgency-related violence. The Islamic State-affiliated insurgency in Cabo Delgado has killed thousands since 2017, displacing nearly a million people. Beyond the insurgency, violent crime includes armed robberies, kidnappings, and gang violence in Maputo. The homicide rate is approximately 3-4 per 100,000. Drug trafficking—Mozambique serves as a transit point for Afghan heroin destined for Europe—is significant. Organized crime includes human trafficking and illegal logging/mining.

Corruption is pervasive. The "hidden debt" scandal exposed how officials secretly borrowed $2 billion, enriching themselves while leaving taxpayers liable. Transparency International ranks Mozambique poorly. Police corruption is routine. Judicial corruption occurs regularly.

The judiciary is based on Portuguese civil law but operates under FRELIMO influence. Judges are appointed through government-controlled processes. Political interference in sensitive cases is common. Courts are slow and under-resourced.

Law enforcement is weak and corrupt. Police lack equipment and training. Security forces in Cabo Delgado have committed atrocities, including extrajudicial killings. Torture in custody is documented.

Prisons are severely overcrowded with harsh conditions.` },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560, summary: `Myanmar's criminal justice system has collapsed following the February 2021 military coup that overthrew the democratically elected government. The junta's brutal repression—killing over 4,000 civilians and arresting tens of thousands—has destroyed any pretense of rule of law. Justice now operates solely as military control.

Crime statistics are meaningless under military rule. State violence is the primary form of "crime"—the Tatmadaw (military) massacres civilians, burns villages, and commits mass atrocities. Armed resistance by the National Unity Government and ethnic armed organizations has intensified. Conventional crime includes drug trafficking—Myanmar produces vast quantities of methamphetamine and opium.

Corruption is endemic and systematic. Military officials control major economic sectors through state enterprises and cronyism. Transparency International ranks Myanmar among the world's most corrupt.

The judiciary is a junta tool. Courts rubber-stamp military decisions. Thousands of political prisoners face kangaroo trials in military courts. Democracy leader Aung San Suu Kyi received a 33-year sentence on fabricated charges in closed-door proceedings.

Police and military terrorize the population. Torture is systematic. Massacres go unpunished.

Prisons are brutal. Political prisoners endure horrific conditions. Many have died in custody.

Myanmar's justice system is designed to crush resistance to military dictatorship.` },
  { name: 'Namibia', lat: -22.9576, lng: 18.4904, summary: `Namibia's criminal justice system ranks among Africa's better-functioning institutions, benefiting from relative stability, democratic governance, and rule of law. However, significant challenges remain: high crime rates, corruption, and a slow judicial process that undermines access to justice.

Crime in Namibia is moderate to high. The homicide rate is approximately 17 per 100,000—among Africa's highest. Violent crime includes armed robberies, assaults, and gang violence in townships. Sexual violence is pervasive, with Namibia having one of the world's highest rape rates. Property crime affects both urban and rural areas. Organized crime includes drug trafficking, wildlife poaching (rhinos and elephants), and smuggling across porous borders with Angola and South Africa.

Corruption exists but is less severe than in many African countries. Transparency International ranks Namibia in the top third of African nations. The "Fishrot" scandal exposed how politicians and officials accepted bribes from an Icelandic fishing company for quotas, resulting in arrests including two ministers. Whistleblower protections led to prosecutions.

The judiciary is independent and based on Roman-Dutch and English common law. Courts include lower courts, the High Court, and Supreme Court. Judges are appointed based on merit with constitutional protections. Political interference is uncommon. However, courts face massive backlogs—cases take years. Access to justice is limited for poor Namibians who cannot afford lawyers.

Law enforcement includes the Namibian Police Force, which is reasonably professional but under-resourced. Police corruption occurs but isn't systemic. Brutality and excessive force generate periodic controversy.

Prisons are overcrowded with approximately 5,000 inmates in facilities designed for 3,000. Conditions are poor but not exceptionally harsh.

Namibia's system functions adequately but needs resources and reform.` },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240, summary: `Nepal's criminal justice system operates in a country transitioning from monarchy to federal republic, still building institutions after a decade-long civil war (1996-2006) and the 2015 constitution. The system faces challenges including political interference, corruption, slow processes, and inability to address past atrocities.

Crime in Nepal includes property crimes, violent offenses, and human trafficking. The homicide rate is approximately 2-3 per 100,000. Violent crime includes murders, assaults, and gang violence in Kathmandu. Property crime affects urban and rural areas. Human trafficking—particularly of girls and women to India for sexual exploitation—is a serious problem despite legal prohibitions. Drug trafficking occurs along Nepal's borders. Organized crime includes smuggling and illegal construction cartels.

Corruption is pervasive. Transparency International ranks Nepal poorly. Police demand bribes to register cases or conduct investigations. Judicial corruption occurs; favorable rulings can be purchased. Political corruption involves embezzlement of development funds and procurement fraud, including misappropriation of earthquake reconstruction aid.

Nepal's judiciary is based on civil law with traditional influences. Courts include district courts, High Courts, and Supreme Court. The judiciary is nominally independent but faces political pressure. Appointments have been politicized. Courts are severely backlogged—hundreds of thousands of cases pending, some for decades.

Transitional justice has failed. Despite establishing truth and reconciliation commissions to address civil war atrocities (17,000 killed, thousands disappeared), prosecutions haven't occurred. Security forces operate with impunity for wartime and contemporary abuses.

Law enforcement is weak and corrupt. Nepal Police are underfunded and poorly trained. Torture in custody is documented.

Prisons are overcrowded with harsh conditions. Pretrial detention is excessive.` },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913, summary: `The Netherlands' criminal justice system ranks among the world's most effective, characterized by strong rule of law, independent judiciary, professional law enforcement, and low corruption. As a founding EU member and longtime democracy, the Netherlands has built institutions that deliver fair, predictable outcomes. Challenges include organized crime, particularly drug trafficking, and increasing violence associated with the narcotics trade.

Crime in the Netherlands is low to moderate. The homicide rate is approximately 0.6 per 100,000—among Europe's lowest. Violent crime is uncommon outside of organized crime contexts. Property crime—burglary, bike theft (a Dutch cultural phenomenon), vehicle theft—occurs at moderate rates. Drug-related crime is the Netherlands' most significant challenge. Rotterdam's port is Europe's largest cocaine entry point, with criminal networks importing multi-ton shipments. The Netherlands' liberal cannabis policy (tolerated but not technically legal) creates anomalies, and production/trafficking of synthetic drugs like MDMA is substantial.

Organized crime has become increasingly violent. The "Mocro Maffia" (Moroccan-Dutch criminal networks) and other groups engage in drug trafficking, money laundering, and contract killings. High-profile assassinations—including lawyer Derk Wiersum in 2019 and journalist Peter R. de Vries in 2021—shocked the country. These murders demonstrated that Dutch organized crime has adopted tactics previously associated with narco-states.

Corruption in the Netherlands is very low. Transparency International ranks the Netherlands in the top 10 globally. When corruption occurs, it typically involves conflicts of interest or favoritism rather than blatant bribery.

The judiciary is independent and highly professional. Courts include district courts, appellate courts, and Supreme Court. Judges are appointed based on rigorous qualifications with strong tenure protections. Political interference is virtually nonexistent.

Law enforcement includes the National Police and specialized units. Police are well-trained and equipped. Corruption is rare. However, infiltration of authorities by organized crime is a growing concern—several police officers and officials have been arrested for leaking information to criminals.

Prisons hold approximately 10,000 inmates in conditions meeting high European standards.` }
]

async function main() {
  console.log(`Saving ${WRITEUPS.length} Crime writeups (batch 3)...\n`)
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
  console.log('\n✨ Batch 3 complete!')
}

main().finally(() => prisma.$disconnect())
