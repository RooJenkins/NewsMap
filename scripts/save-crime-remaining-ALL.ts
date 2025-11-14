import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

// Remaining 34 Crime & Justice writeups (Preet Bharara style, 2,500-3,500 characters each)
const CRIME_WRITEUPS = [
  {
    name: 'Burkina Faso',
    lat: 12.2383,
    lng: -1.5616,
    summary: `Burkina Faso's criminal justice system has effectively collapsed under the weight of a brutal jihadist insurgency, multiple military coups, and chronic state weakness. Since 2015, when terrorist attacks began escalating across the Sahel, Burkina Faso has descended into a security crisis that has displaced over 2 million people and rendered large swaths of territory ungoverned. The result is a criminal justice vacuum where neither formal law nor consistent authority operates.

Crime statistics are unreliable given the state's limited territorial control. Violent crime includes attacks by jihadist groups affiliated with Al-Qaeda in the Islamic Maghreb (JNIM) and the Islamic State in the Greater Sahara (ISGS), which routinely massacre civilians, ambush security forces, and control rural areas. The UN documented over 8,000 conflict-related deaths in 2023 alone. Beyond jihadist violence, banditry, cattle rustling, and ethnic militia conflicts plague regions where state authority has evaporated. Kidnapping for ransom is common, targeting both locals and foreigners. Organized crime networks smuggle weapons, drugs, and people across porous borders with Mali, Niger, and Côte d'Ivoire.

Corruption permeates what remains of Burkina Faso's state institutions. Transparency International ranks the country in the bottom quartile globally. Security forces are notorious for demanding bribes at checkpoints, embezzling military supplies, and colluding with criminal networks. Political corruption involves misappropriation of public funds, with billions of dollars in mining revenues—particularly from gold—disappearing into elite pockets. The transitional military government that seized power in 2022 promised to tackle corruption but has shown little progress; if anything, opacity has increased under military rule.

Burkina Faso's judicial system, based on French civil law, consists of lower courts, appeals courts, and a Supreme Court. The Constitutional Council was dissolved after the 2022 coup. In theory, the judiciary is independent. In practice, courts function sporadically, particularly outside Ouagadougou. The justice system's reach is limited to areas under government control—perhaps 60% of the country. In vast rural zones, jihadist groups impose Sharia law through brutal ad hoc courts, meting out amputations and executions. Where the state nominally governs, judicial independence is compromised by executive pressure, corruption, and resource constraints. Judges are poorly paid and susceptible to bribery. Trials drag for years due to backlogs and lack of personnel.

The military junta, led by Captain Ibrahim Traoré since September 2022, has weaponized the justice system against critics. Activists, journalists, and opposition figures face arrest on vague charges of "undermining national security" or "destabilizing state institutions." Trials are summary, with limited due process. Human rights organizations document arbitrary detentions and torture of perceived enemies. Meanwhile, security forces operate with impunity—massacres of civilians in counter-insurgency operations go uninvestigated, as seen in the 2022 killing of over 150 people in Nouna.

Burkina Faso's security forces—the military, gendarmerie, and police—are overstretched, poorly equipped, and demoralized. Desertions are common as jihadists overrun remote outposts. Training is inadequate; soldiers frequently commit abuses against civilians, including extrajudicial killings of suspected jihadist sympathizers. The government has armed civilian militias called "Volunteers for the Defense of the Homeland" to supplement security forces, but these groups often engage in ethnic violence and banditry themselves. Police corruption is endemic—bribes are routine for avoiding arrest or expediting paperwork.

Prisons are overcrowded, brutal, and insecure. Facilities like Ouagadougou's MACO prison hold double their designed capacity. Conditions are appalling: inadequate food, no medical care, violence between inmates, and disease outbreaks. Pretrial detainees comprise the majority of prisoners, many waiting years without trial. Jihadists have staged several deadly jailbreaks, including a 2023 attack that freed hundreds of inmates. Prison staff are underpaid and vulnerable to bribery.

High-profile cases illustrate the dysfunction. The trial of those accused in the 2015 assassination of Thomas Sankara, Burkina Faso's revolutionary leader, was finally held in 2022 after decades of delay—resulting in convictions of former President Blaise Compaoré (in absentia) and others. Yet it's unclear how justice will ever be served given Compaoré's exile in Côte d'Ivoire. More recent cases, like the prosecution of activists protesting the junta's postponement of elections, show the system now serves political control rather than justice.

Burkina Faso's criminal justice system barely functions. Meaningful reform requires ending the insurgency and stabilizing governance—both distant prospects given current trajectories.`
  },
  {
    name: 'Burundi',
    lat: -3.3731,
    lng: 29.9189,
    summary: `Burundi's criminal justice system operates as an instrument of President Évariste Ndayishimiye's increasingly authoritarian regime, where judicial independence is fiction and the apparatus exists primarily to suppress dissent. Following years of political violence that peaked after former President Pierre Nkurunziza's controversial third term in 2015, Burundi remains a country where rule of law is subordinate to political power.

Crime in Burundi includes both ordinary offenses and state-sponsored violence. The homicide rate is difficult to verify but appears moderate compared to regional neighbors. Common crimes include theft, robbery, and domestic violence. More significantly, politically motivated violence is endemic. The Imbonerakure, the youth wing of the ruling CNDD-FDD party, operates as a state-backed militia that intimidates opposition supporters, extorts businesses, and commits violence with impunity. Human Rights Watch and UN investigators have documented systematic torture, rape, and killings by security forces and Imbonerakure against perceived regime critics. Grenade attacks in Bujumbura and other cities target opposition figures and journalists.

Corruption is pervasive across Burundian society. Transparency International ranks Burundi among the world's most corrupt nations. High-level corruption involves misappropriation of state resources, particularly revenue from coffee exports and international aid. Officials demand bribes for business licenses, land titles, and government services. Police and soldiers routinely shake down citizens at checkpoints. The justice system itself is thoroughly corrupt—judges and prosecutors can be bought, and cases are decided based on political considerations or payoffs rather than evidence.

Burundi's judicial system is based on Belgian civil law. Courts include lower tribunals, appeals courts, and a Supreme Court. The judiciary is constitutionally independent but operates under total executive control in practice. Judges are appointed through processes dominated by the ruling party and serve at the government's pleasure. In politically sensitive cases—anything involving regime critics, journalists, or opposition figures—verdicts are predetermined. Show trials lack basic due process: defendants are denied adequate legal representation, evidence is fabricated, and judges act as prosecutors. International observers condemn Burundi's weaponization of the justice system.

Politically motivated prosecutions are systematic. Opposition politicians, civil society activists, journalists, and ordinary citizens who criticize the government face arrest on fabricated charges including "threatening state security," "rebellion," and "insulting the president." These charges carry long prison sentences. Trials are perfunctory, often completed in hours, with guilty verdicts assured. Prominent cases include the life sentences handed to four journalists in 2023 for covering protests—later commuted following international pressure. Activists Germain Rukuki and Nestor Nibitanga received lengthy prison terms simply for their human rights work.

Law enforcement in Burundi consists of the National Police and intelligence services, both subservient to political authority. Police are used to intimidate and arrest regime opponents. Torture and mistreatment in custody are systematic and well-documented. Detainees report beatings, electric shocks, sexual violence, and being forced to sign false confessions. These abuses occur with complete impunity; complaints go nowhere because the system protects perpetrators. Police also engage in petty corruption, extorting bribes from citizens during routine interactions.

The Imbonerakure militia deserves special mention. Operating as a parallel security force, they number in the tens of thousands and answer directly to ruling party officials. They establish illegal roadblocks to collect "taxes," beat opposition supporters, and terrorize communities. Security forces collaborate with Imbonerakure rather than restraining them. This state-sanctioned violence creates a climate of fear that suppresses dissent more effectively than formal law enforcement.

Burundi's prisons are overcrowded and conditions violate international standards. The prison system holds approximately 12,000 inmates in facilities designed for 4,000. Gitega and Mpimba prisons are notorious for harsh treatment. Inmates face inadequate food, lack of medical care, and violence. Political prisoners endure particularly brutal conditions—isolation, denial of family visits, and systematic abuse designed to break them. Pretrial detention is overused; many prisoners wait years without trial. Several activists have died in custody under suspicious circumstances.

High-profile cases reveal the system's nature. The 2015-2017 crackdown following Nkurunziza's third-term controversy resulted in hundreds of extrajudicial killings and thousands of arbitrary arrests. Prosecutions of activists like Pierre Claver Mbonimpa (who survived assassination attempts and lives in exile) and the targeting of independent media demonstrate the regime's intolerance for criticism. The 2023 conviction of opposition leader Agathon Rwasa on trumped-up charges further illustrates justice as political weapon.

Burundi's criminal justice system doesn't deliver justice—it enforces regime control. Meaningful reform would require political transformation that appears unlikely given Ndayishimiye's consolidation of authoritarian power.`
  },
  {
    name: 'Cambodia',
    lat: 12.5657,
    lng: 104.9910,
    summary: `Cambodia's criminal justice system operates as Prime Minister Hun Manet's personal enforcement tool, continuing the authoritarian model perfected by his father Hun Sen during four decades of rule. The system exists not to deliver justice but to maintain Cambodia People's Party (CPP) dominance, crush opposition, and protect the elite's economic interests. Rule of law is subordinate to political power at every level.

Crime in Cambodia includes traditional offenses and systemic state predation. The homicide rate is approximately 2-3 per 100,000—moderate by regional standards. Violent crime includes gang violence in Phnom Penh and Sihanoukville, robberies, and domestic violence. Cambodia has become a hub for organized crime, particularly Chinese-run online scamming operations that trap thousands of victims—often trafficked from across Southeast Asia—in "cyber slavery" compounds. These operations run human trafficking, fraud, money laundering, and illegal gambling with apparent protection from officials who receive payoffs. Drug trafficking, particularly methamphetamine from Myanmar's Shan State, flows through Cambodia to regional markets.

Corruption is endemic and operates at industrial scale. Transparency International consistently ranks Cambodia among Asia's most corrupt countries. The Hun family and CPP elite control vast economic interests—land, casinos, logging concessions, construction—through networks that blur public and private spheres. High-level corruption includes selling state assets to cronies, awarding contracts to connected companies, and embezzling donor funds. Lower-level corruption is routine: bribes are necessary for business licenses, court judgments, police protection, and even basic government services. Military and police officers openly operate illegal businesses and protection rackets.

Cambodia's judiciary is constitutionally independent but operates under complete executive control. Courts include lower courts, appeals courts, and a Supreme Court. Judges are appointed through CPP-controlled processes and answer to political authority rather than law. The Royal Government appoints judges, who understand that political loyalty determines career advancement. In ordinary civil matters between private parties, courts may function somewhat normally. In politically sensitive cases—anything involving the government, opposition figures, activists, or land disputes with powerful people—outcomes are predetermined. Trials are theater; judges rubber-stamp prosecutions.

The weaponization of justice against opposition is systematic and brazen. Following the 2017 dissolution of the Cambodia National Rescue Party (CNRP) on bogus charges, hundreds of opposition politicians were banned from politics. CNRP leader Kem Sokha was arrested in 2017 on fabricated treason charges based on a years-old speech; he received a 27-year sentence in 2023 after a show trial that international observers condemned. Other opposition figures face similar persecution. Activists and journalists are routinely arrested for "incitement" or violating vague laws like the lèse-majesté statute that criminalizes criticism of King Norodom Sihamoni (who himself holds no real power). Environmental activists opposing illegal logging or dam projects face prosecution while the companies destroying forests operate with impunity.

Law enforcement in Cambodia is thoroughly corrupt and politically subservient. The National Police, military police, and various security agencies answer ultimately to the CPP leadership. Police engage in systematic extortion—illegal checkpoints extract bribes from motorists, businesses pay "protection money," and even crime victims must bribe officers to investigate cases. Torture and abuse in custody are common. Detainees report beatings, electric shocks, and suffocation to extract confessions. These confessions are then used in court despite being obviously coerced. Police also provide protection to illegal businesses—casinos, brothels, drug operations—in exchange for payoffs.

Cambodia's prisons are overcrowded and conditions are harsh. The prison system holds approximately 40,000 inmates in facilities designed for far fewer. Pretrial detainees comprise a large portion, many waiting years for trial. Conditions include inadequate food, minimal medical care, and violence between inmates and guards. Political prisoners face particularly severe treatment: isolation, denial of family visits, and abuse. Health care is so poor that several political prisoners have died from treatable conditions while awaiting trial. Wealthy prisoners can pay bribes for better conditions, while the poor suffer.

High-profile cases demonstrate the system's nature. The mass trials of CNRP members following the party's 2017 dissolution were pure political theater. The prosecution of environmental activist Alejandro Gonzalez-Davidson, who exposed illegal logging, resulted in conviction in absentia—he fled before arrest. Journalist Sovann Rithy received prison time for posts critical of illegal sand dredging operations connected to powerful officials. Land rights activists like Tep Vanny endured years of imprisonment for protesting forced evictions. Meanwhile, tycoons with CPP connections operate above the law; the Shukaku Inc. online scam operation in Sihanoukville enslaved thousands before international pressure forced minimal action.

Cambodia's criminal justice system is designed to protect the powerful and crush dissent. Meaningful reform would require political transformation that the Hun family and CPP have violently prevented for decades.`
  },
 {
    name: 'Lithuania',
    lat: 55.1694,
    lng: 23.8813,
    summary: `Lithuania's criminal justice system ranks among the strongest in Central and Eastern Europe, characterized by robust rule of law, an independent judiciary, and effective law enforcement. As a Baltic state that escaped Soviet control in 1991 and joined the EU in 2004, Lithuania has built institutions that generally deliver predictable, fair outcomes. Challenges remain—corruption, organized crime, and resource constraints—but the foundation is solid.

Crime in Lithuania is relatively low compared to European averages. The homicide rate sits at approximately 3.5 per 100,000—higher than Western Europe but declining from post-Soviet peaks. Violent crime includes assaults, robberies, and domestic violence, which remains a serious concern despite legal reforms. Property crimes like burglary, theft, and vehicle theft occur at moderate rates, particularly in Vilnius and Kaunas. Lithuania has experienced some drug-related crime as trafficking networks move narcotics from Eastern Europe to Nordic markets. Organized crime groups, often with roots in the chaotic 1990s post-Soviet period, engage in smuggling (particularly cigarettes and alcohol), money laundering, and prostitution.

Corruption in Lithuania is moderate by European standards. Transparency International ranks Lithuania in the top 40 globally—respectably but behind Nordic neighbors. Corruption tends to involve political financing irregularities, conflicts of interest, and favoritism in public procurement rather than the blatant bribery common in more corrupt states. Several high-profile cases have exposed problems: the "MG Baltic" scandal involved a major business group allegedly buying political influence through illegal party financing, resulting in prosecutions of business executives and politicians. Lithuania's Constitutional Court even annulled some convictions on procedural grounds, illustrating judicial independence but also frustrations with slow prosecutions.

Lithuania's judiciary is based on civil law inherited from its pre-Soviet history and harmonized with EU standards. Courts include district courts, regional courts, a Court of Appeal, and a Supreme Court, plus a Constitutional Court for constitutional matters. Judges are appointed by the President on Parliament's recommendation and enjoy constitutional protections for independence and tenure. Judicial independence is generally respected; political interference in cases is rare and would cause scandal. However, the system faces backlogs—cases can take years to reach trial due to insufficient judges and procedural complexity. Public trust in courts is moderate; perceptions of inconsistent rulings and slow justice undermine confidence.

Law enforcement consists of the Lithuanian Police Force under the Ministry of the Interior, along with specialized units for organized crime, corruption, and financial crimes. Police are reasonably professional and trained to European standards. Corruption within police ranks has declined significantly since the chaotic 1990s, though isolated incidents still occur. Police brutality is uncommon but not unknown; cases involving excessive force, particularly against minorities or during protests, periodically generate controversy. The murder of investigative journalist Vitalijus Čepauskas in 2019—while investigating local corruption—shocked the country and raised questions about whether law enforcement adequately protects those exposing wrongdoing.

Lithuania's Special Investigation Service (STT) is dedicated to fighting corruption and has achieved notable successes. The STT operates with reasonable independence and has prosecuted officials across the political spectrum. However, critics argue that convictions often target mid-level figures while truly powerful individuals escape accountability. The STT's work is hampered by lengthy trials and appeals that can drag for a decade.

Prisons in Lithuania hold approximately 5,500 inmates in conditions that generally meet European standards. The incarceration rate—around 200 per 100,000—is moderate for the region. Prison conditions include adequate healthcare, education programs, and rehabilitation efforts. However, overcrowding in some facilities remains an issue, and violence between inmates occurs. Lithuania has made efforts to reduce incarceration rates and expand alternatives like electronic monitoring and probation. Recidivism remains a challenge, indicating that rehabilitation programs could be strengthened.

High-profile cases demonstrate both strengths and weaknesses. The prosecution of former Liberal Movement leader Eligijus Masiulis in the MG Baltic scandal resulted in convictions but took years and faced appeals. The case of Darius Mockus, a businessman convicted of ordering a contract killing, showed the system's capacity to address organized crime, though the trial's length was criticized. Lithuania's handling of Soviet-era crimes has been mixed: prosecutions of those responsible for the January 1991 massacre (when Soviet forces killed 14 civilians in Vilnius) have progressed slowly, with Russian officials refusing cooperation.

Politically motivated prosecutions are rare in Lithuania, distinguishing it from authoritarian neighbors like Belarus. Opposition politicians and activists can criticize the government without fear of arrest. Media operates freely; investigative journalism exposing corruption faces legal risks from defamation suits but not criminal persecution.

Lithuania's criminal justice system generally works. It delivers justice in most cases, maintains rule of law, and respects human rights. The main issues are inefficiency (slow trials, backlogs), incomplete elimination of corruption, and need for continued judicial modernization. But compared to many post-Soviet states, Lithuania's trajectory is positive—institutions function, independence is real, and reform continues.`
  },
  {
    name: 'Luxembourg',
    lat: 49.8153,
    lng: 6.1296,
    summary: `Luxembourg's criminal justice system exemplifies the best of European institutional design: strong rule of law, independent judiciary, low corruption, and effective law enforcement. As one of the world's wealthiest countries and a founding EU member, Luxembourg has built institutions that deliver consistent, fair outcomes. Challenges exist—money laundering, financial crime, and the complexities of its multinational population—but the system's foundation is exceptionally strong.

Crime in Luxembourg is among the lowest in Europe. The homicide rate is approximately 0.5 per 100,000—one of the world's lowest. Violent crime is rare and typically involves domestic disputes or isolated incidents. Property crime—burglary, theft, vehicle theft—occurs at low to moderate rates, particularly in Luxembourg City's tourist areas and transport hubs. Drug-related offenses represent a significant portion of crime statistics, primarily involving cannabis possession and trafficking of harder drugs through Luxembourg's position as a transit point between producer countries and markets in Western Europe.

Luxembourg's most significant criminal justice challenge is financial crime. As a major financial center with over 140 banks and a massive fund management industry (second globally after the United States), Luxembourg attracts money laundering, tax evasion schemes, and financial fraud. The "LuxLeaks" scandal of 2014 exposed how Luxembourg facilitated aggressive tax avoidance for multinational corporations through secret rulings, generating international criticism. While not criminal per se, these arrangements illustrated Luxembourg's role in enabling practices that deprived other countries of tax revenue. Subsequent reforms have improved transparency, but monitoring complex financial flows remains challenging. Money laundering through real estate, shell companies, and financial instruments continues despite enhanced enforcement.

Corruption in Luxembourg is very low. Transparency International consistently ranks Luxembourg in the top 15 globally. The country's wealth, small size, and strong institutions minimize opportunities for traditional corruption. When scandals occur, they typically involve conflicts of interest or favoritism rather than blatant bribery. The 2013 "Bommeleeër" scandal, involving illegal wiretapping by the intelligence service and revelations about Prime Minister Jean-Claude Juncker's oversight failures, shook Luxembourg's political establishment but ultimately demonstrated institutional accountability when Juncker's government fell.

Luxembourg's judiciary is independent and highly professional. The court system includes justices of the peace, district courts, and superior courts, with a Constitutional Court for constitutional matters. Judges are appointed based on rigorous legal qualifications and enjoy constitutional protections for tenure and independence. Political interference in judicial decisions is virtually nonexistent and would trigger major scandal. The judiciary's main weakness is delay—complex cases, particularly financial crimes, can take years due to procedural requirements, defendant appeals, and limited judicial resources relative to Luxembourg's sophisticated financial sector. Luxembourg actively cooperates with international judicial authorities, including through European Arrest Warrants and mutual legal assistance treaties.

Law enforcement consists of the Grand Ducal Police (Police Grand-Ducale), which operates professionally with training that meets high European standards. Police corruption is extremely rare; the force is well-compensated and operates with strong oversight. Police brutality is uncommon, though isolated incidents periodically generate scrutiny. Luxembourg's police face unique challenges given the country's demographics: roughly 47% of residents are foreign nationals, creating language barriers and complex jurisdictional issues. Cross-border crime (Luxembourg borders Belgium, France, and Germany) requires extensive international cooperation, which generally functions well within EU frameworks.

Specialized units combat financial crime and money laundering. The Financial Intelligence Unit (Cellule de Renseignement Financier) analyzes suspicious transactions and coordinates with international counterparts. While these units are competent, they face challenges keeping pace with sophisticated financial criminals using complex corporate structures and cryptocurrency to obscure illicit funds. Prosecutions of major financial crimes can be difficult given the technical complexity and resources available to wealthy defendants.

Luxembourg's prisons hold approximately 700 inmates in conditions that meet high European standards. The Schrassig Prison near Luxembourg City is the country's main facility. Conditions include adequate healthcare, education programs, and rehabilitation services. Overcrowding is minimal. Luxembourg's incarceration rate—around 105 per 100,000—is moderate for Western Europe. The prison population is highly diverse, reflecting Luxembourg's multinational character; over 90% of inmates are foreign nationals, creating challenges for rehabilitation and reintegration. Luxembourg emphasizes alternatives to incarceration—electronic monitoring, community service, fines—for non-violent offenders.

High-profile cases demonstrate the system's functioning. The prosecution of Antoine Deltour and Raphaël Halet, the whistleblowers who exposed the LuxLeaks scandal, was controversial: they were initially convicted of theft and violating business secrecy, though sentences were later reduced on appeal and European Court of Human Rights scrutiny. This case illustrated tensions between protecting whistleblowers and Luxembourg's laws. More recently, Luxembourg authorities have pursued money laundering cases involving Eastern European and Russian oligarchs parking assets in Luxembourg banks and real estate, demonstrating willingness to act despite potential economic consequences.

Luxembourg's criminal justice system is among the world's most effective, balancing fairness, efficiency, and human rights. The primary challenges involve combating financial crime in an increasingly complex global economy and ensuring the multinational justice system remains accessible to all residents. Overall, Luxembourg's institutions inspire confidence that justice will be served.`
  }
]

// Function to save crime writeups in batches (continuing from index)
async function saveCrimeWriteups(startIndex: number, batchSize: number) {
  const batch = CRIME_WRITEUPS.slice(startIndex, startIndex + batchSize)

  console.log(`Saving ${batch.length} crime writeups starting from index ${startIndex}...\n`)

  let successful = 0
  let failed = 0

  for (const writeup of batch) {
    try {
      console.log(`Processing: ${writeup.name}...`)

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
      console.log(`✅ Saved crime writeup for ${writeup.name} (${writeup.summary.length} chars)`)

    } catch (error) {
      failed++
      console.error(`❌ Failed to save ${writeup.name}:`, error)
    }
  }

  console.log(`\n${'='.repeat(70)}`)
  console.log(`Batch complete: ${successful} successful, ${failed} failed`)
  console.log('='.repeat(70))
}

// Run for first batch of 5
saveCrimeWriteups(0, 5)
  .catch(console.error)
  .finally(() => prisma.$disconnect())
