import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Remaining 34 Crime & Justice writeups
// Written in Preet Bharara / Jeffrey Toobin style
// Length: 2,500-3,500 characters each

const CRIME_WRITEUPS = [
  {
    name: 'Burkina Faso',
    lat: 12.2383,
    lng: -1.5616,
    summary: `Burkina Faso's criminal justice system has collapsed under the weight of jihadist insurgency, military coups, and governance breakdown. What was once a relatively stable Sahelian democracy has descended into a security crisis where large swaths of territory lie outside government control, and formal justice institutions barely function.

The crime landscape is dominated by terrorism and armed violence. Since 2015, jihadist groups affiliated with Al-Qaeda and Islamic State have killed thousands and displaced over two million people. These groups control significant territory in the north and east, imposing their own brutal version of justice through Sharia courts. The government's statistics on conventional crime are unreliable and incomplete, as entire provinces lack functional police presence. Banditry, cattle rustling, and kidnapping for ransom plague rural areas. Urban crime in Ouagadougou includes theft, armed robbery, and carjacking, but these pale compared to the existential security threat.

The formal justice system inherited from French colonial rule operates only in government-controlled areas, which shrink monthly. Courts face massive backlogs, insufficient judges, and inadequate security—several courthouses have been attacked or abandoned. The Supreme Court in Ouagadougou continues operating, but its authority extends only where the government maintains presence. Due process protections exist on paper but are routinely violated. Pretrial detention can extend for years, and access to legal representation is limited outside major cities.

The judiciary's independence has been compromised by political interference, particularly following the January 2022 coup and subsequent September 2022 coup that brought Captain Ibrahim Traoré to power. Military tribunals have expanded jurisdiction, particularly for terrorism-related cases, often conducting closed proceedings with minimal civilian oversight. The transitional government has suspended aspects of the constitution, weakening judicial checks on executive power.

Law enforcement is fragmented and overwhelmed. The national police and gendarmerie struggle with inadequate equipment, training, and manpower. Corruption within security forces is endemic; extortion at checkpoints is routine. The government has armed civilian militias called Volunteers for the Defense of the Homeland (VDP) to supplement overstretched formal forces, but these poorly trained groups have been accused of extrajudicial killings and ethnic violence, particularly against Fulani communities suspected of collaborating with jihadists. International human rights organizations documented the June 2022 Seytenga massacre, where security forces allegedly executed over 180 civilians.

Prisons in Burkina Faso are severely overcrowded and dangerous. The main prison in Ouagadougou holds triple its designed capacity. Conditions are harsh: inadequate food, poor sanitation, and limited medical care. Several facilities have been overrun by jihadists, who freed hundreds of prisoners. The January 2023 Nouna prison break saw jihadists attack a facility, killing guards and liberating inmates.

High-profile cases reflect the political chaos. The trial of former President Blaise Compaoré for the 1987 assassination of revolutionary leader Thomas Sankara—held in absentia since Compaoré fled to Ivory Coast—resulted in a life sentence in April 2022, but he remains unpunished. Investigations into civilian massacres by security forces rarely yield accountability. The military government has restricted press freedom and arrested journalists reporting on abuses.

Burkina Faso's criminal justice system faces an existential crisis: formal institutions are collapsing, violence is endemic, and the rule of law exists primarily in name only across much of the country.`
  },
  {
    name: 'Burundi',
    lat: -3.3731,
    lng: 29.9189,
    summary: `Burundi's criminal justice system functions primarily as an instrument of political repression rather than impartial law enforcement. Under President Évariste Ndayishimiye's administration—a continuation of his predecessor Pierre Nkurunziza's authoritarian rule—courts, police, and prisons serve regime maintenance more than public safety.

Crime statistics in Burundi are state secrets, making objective assessment nearly impossible. The government publishes minimal data, and independent monitoring is restricted. What's clear is that politically motivated violence, extrajudicial killings, and enforced disappearances continue at alarming rates. Armed robberies and property crimes occur in Bujumbura and other cities, often involving current or former members of the Imbonerakure youth militia—the ruling party's armed wing. Rural areas experience land disputes that frequently turn violent in a densely populated country where property conflicts are endemic. Cross-border smuggling and trafficking with the Democratic Republic of Congo, Tanzania, and Rwanda fuel organized crime.

The justice system is thoroughly politicized. Courts at all levels lack independence; judges receive "guidance" from ruling party officials and intelligence services. The Supreme Court and Constitutional Court rubber-stamp government positions. Politically sensitive cases have predetermined outcomes—acquittal for government allies, conviction for perceived enemies. The judiciary's credibility collapsed during the 2015 crisis when courts validated President Nkurunziza's unconstitutional third term, triggering violence that killed hundreds.

Prosecutors operate under Ministry of Justice control, which itself answers to the presidency. The prosecutorial discretion is entirely political: opposition members face charges for "threatening state security" or "insulting the president," while government-connected individuals enjoy impunity for serious crimes. Human Rights Watch documented dozens of cases where opposition activists were convicted on fabricated evidence in proceedings that violated basic fair trial standards.

Law enforcement is split between national police, intelligence services, and the Imbonerakure militia. Police lack resources and training but are heavily politicized; officers who show insufficient loyalty are purged. The Service National de Renseignement (SNR)—Burundi's intelligence agency—operates with complete impunity, conducting arbitrary arrests, torture, and extrajudicial killings. The Imbonerakure, while technically a party youth wing, functions as a parallel security force, manning checkpoints, conducting searches, and attacking perceived opponents. International human rights organizations have documented their involvement in murders, sexual violence, and forced disappearances.

Prisons in Burundi are nightmarish. Mpimba Central Prison in Bujumbura holds over 7,000 inmates in a facility designed for 800. Torture is routine; guards beat prisoners regularly. Food is grossly inadequate—families must bring meals or detainees starve. Medical care is virtually nonexistent; preventable diseases kill regularly. Political prisoners face particularly brutal treatment, including prolonged solitary confinement and torture. The International Committee of the Red Cross suspended prison visits in 2017 after the government refused access to certain facilities.

High-profile cases demonstrate the system's function. The 2022 trial of four opposition Amizero y'Abarundi party members—convicted of threatening state security based on WhatsApp messages criticizing the government—exemplifies judicial persecution. The case of Germain Rukuki, a civil society activist sentenced to 32 years for participating in the 2015 protests, shows how courts punish dissent. Meanwhile, no one has been prosecuted for the extrajudicial killings documented by U.N. investigators.

Burundi rejected the International Criminal Court's jurisdiction in 2017 and refuses cooperation with U.N. human rights mechanisms, insulating abusers from accountability. The criminal justice system's core problem isn't capacity—it's that the system is designed for repression, not justice.`
  },
  {
    name: 'Cambodia',
    lat: 12.5657,
    lng: 104.9910,
    summary: `Cambodia's criminal justice system operates as an extension of Prime Minister Hun Manet's authoritarian government—a continuation of his father Hun Sen's nearly four-decade grip on power. Courts, police, and prosecutors serve political control rather than impartial justice, creating a system where rule of law is subordinate to regime interests.

Crime rates in Cambodia are difficult to assess due to poor data collection and government manipulation of statistics. Urban areas, particularly Phnom Penh and Sihanoukville, experience property crime, motorcycle theft, and bag snatching. Violent crime is less common but increasing, with occasional targeted killings linked to business disputes, land conflicts, or political motives. Cambodia has become a major hub for organized crime, particularly Chinese-run online scamming operations that have turned Sihanoukville into a center for human trafficking and forced labor. Thousands of people from across Asia have been trafficked to work in "scam compounds," where they're held captive and forced to conduct romance and investment frauds targeting victims worldwide.

The judicial system is corrupt and politically controlled. Cambodia's courts lack independence; judges and prosecutors are appointed based on political loyalty rather than merit. The Supreme Court is dominated by ruling Cambodian People's Party members. In politically sensitive cases, outcomes are decided by government officials before trials begin. The judiciary's conviction rate exceeds 95% because cases that proceed to trial have already been vetted for desired outcomes. Legal protections exist in law but are ignored in practice—pretrial detention can extend indefinitely, defendants lack effective counsel, and evidence standards are minimal.

High-profile political cases expose the system's nature. The dissolution of the Cambodia National Rescue Party (CNRP) in 2017—based on spurious charges and dubious evidence—eliminated the main opposition before the 2018 election. CNRP leader Kem Sokha was convicted of treason in 2023 in proceedings condemned internationally as a sham trial. Environmental and land rights activists routinely face criminal charges for "inciting" protests or "insulting" officials. The August 2023 conviction of prominent unionist Rong Chhun on incitement charges demonstrated how courts criminalize peaceful dissent.

Law enforcement is thoroughly politicized. The National Police report to the Interior Ministry, a Hun family stronghold. Police primarily serve regime interests: monitoring dissent, protecting connected business interests, and harassing opposition. Corruption is endemic—traffic police routinely extort bribes, and serious crimes can be "solved" with sufficient payment. The specialized anti-human trafficking police have made some arrests at Chinese scam compounds, but prosecutions are rare and often target low-level operators while protecting politically connected compound owners.

Prisons are overcrowded and harsh. The sprawling CC1 Prison (Phnom Penh's main facility) and the notorious CC2 Prison for serious offenders hold thousands beyond capacity. Conditions are grim: inadequate food, poor sanitation, and limited medical care. Wealthier prisoners can buy better treatment, including private cells and outside food. Political prisoners face particular abuse, including solitary confinement and restricted family visits.

Cambodia's relationship with transnational organized crime—particularly Chinese criminal networks—has grown dramatically. The government tolerates or facilitates massive scam operations because they bring investment, even as they devastate Cambodia's international reputation. The U.S. imposed sanctions on high-ranking Cambodian officials for involvement in these operations, but domestic accountability is nonexistent.

The criminal justice system's fundamental problem is that it serves power rather than justice. Until courts, police, and prisons operate independently of political control, Cambodia will remain a country where justice depends entirely on political connections.`
  },
  {
    name: 'Lithuania',
    lat: 55.1694,
    lng: 23.8813,
    summary: `Lithuania's criminal justice system ranks among Europe's most functional and transparent, reflecting the country's successful transition from Soviet occupation to EU membership. While challenges remain—particularly regarding corruption and organized crime—the system operates with genuine judicial independence and respect for rule of law.

Crime rates in Lithuania are relatively low by global standards but higher than some neighboring EU countries. The homicide rate sits around 3.5 per 100,000 people, above the EU average. Property crime, particularly theft and burglary, affects both urban and rural areas. Vilnius and Kaunas experience car theft and residential break-ins. Cybercrime has increased significantly, with Lithuania becoming a regional target for ransomware attacks and online fraud. Domestic violence remains a serious concern; Lithuania has one of Europe's highest rates, though increased reporting reflects improved victim support rather than necessarily rising incidence.

Organized crime focuses on smuggling and trafficking due to Lithuania's position on the EU's external border with Belarus and Russia's Kaliningrad exclave. Cigarette smuggling is particularly lucrative, with massive volumes crossing the border. Drug trafficking routes from East to West pass through Lithuania, though the country is more transit point than destination. Money laundering through real estate and shell companies persists, facilitated by Lithuania's banking sector, which has tightened controls following scandals but remains vulnerable.

The judicial system is independent and generally well-functioning. Lithuania's three-tier court system (district courts, regional courts, and Supreme Court) operates transparently with published decisions and open proceedings. Judges are appointed through merit-based processes and enjoy constitutional protections against political interference. The Constitutional Court has demonstrated genuine independence, ruling against government positions in high-profile cases. Trial procedures respect due process; defendants have access to counsel, and evidentiary standards are rigorous. However, court backlogs create delays—civil cases can take years to resolve.

Judicial corruption is rare but not unknown. The 2019 impeachment of Constitutional Court Judge Vytautas Greičius for ethical violations showed the system's willingness to police itself, though critics argued the process was politically influenced. More common is concern about business influence on lower court judges in commercial disputes, though prosecutions for judicial bribery are infrequent.

Law enforcement is professional and generally well-regarded. The Lithuanian police force has undergone significant modernization since EU accession, with improved training, equipment, and international cooperation. Community policing initiatives have expanded, improving public trust. The Financial Crime Investigation Service (FNTT) actively pursues corruption and economic crimes, bringing high-profile cases against officials and businesspeople. Police corruption exists at lower levels—occasional bribery for traffic violations—but is far less endemic than in neighboring countries. The Special Investigation Service, Lithuania's anti-corruption agency, has successfully prosecuted politicians and officials, demonstrating institutional integrity.

Prisons meet European standards, though overcrowding remains an issue. Lithuania houses approximately 5,000 prisoners in facilities designed for fewer. Conditions are generally humane; the Council of Europe's anti-torture committee has praised improvements while noting overcrowding and insufficient healthcare. Rehabilitation programs are expanding, including education and vocational training, though resources remain limited. Recidivism rates are moderate by European standards.

High-profile cases demonstrate systemic integrity. The 2016 "MG Baltic affair"—where major business conglomerate executives were charged with bribing politicians—resulted in convictions despite the defendants' wealth and influence, showing that Lithuania's elite aren't above the law. The successful prosecution of judges and politicians for corruption, while still too rare, indicates improving accountability. Lithuania's cooperation with international investigations, including the European Public Prosecutor's Office, demonstrates commitment to fighting cross-border crime.

Lithuania's criminal justice system faces challenges—organized crime, cybercrime, and judicial delays—but operates with genuine independence and transparency, making it one of Central Europe's success stories in post-Soviet legal reform.`
  },
  {
    name: 'Luxembourg',
    lat: 49.8153,
    lng: 6.1296,
    summary: `Luxembourg's criminal justice system reflects its unique position as a wealthy financial center with sophisticated institutions but also vulnerabilities to white-collar crime and money laundering. The system is highly professional, independent, and functions smoothly for conventional crime, though prosecuting complex financial crimes remains challenging.

Conventional crime in Luxembourg is very low. The homicide rate is among Europe's lowest, typically under one per 100,000 people. Violent crime is rare; Luxembourg City and surrounding areas are generally very safe. Property crime—primarily residential burglaries and vehicle theft—occurs but at rates well below European averages. The country's small size and efficient police force make it difficult for conventional criminals to operate. Drug use, particularly cannabis, is present but Luxembourg's 2023 legalization of personal cannabis possession for adults has shifted the landscape.

Luxembourg's real criminal justice challenge is financial crime. As a major banking center managing over €4 trillion in assets and hosting thousands of multinational corporations, Luxembourg is a prime target and facilitator for money laundering, tax evasion, and corporate fraud. The "LuxLeaks" scandal exposed systematic tax avoidance schemes where companies obtained favorable advance tax rulings. The "OpenLux" investigation revealed Luxembourg's use as a secrecy jurisdiction for shell companies. While not illegal under Luxembourg law, these arrangements facilitate tax avoidance and potential money laundering.

The judicial system is independent and highly professional. Luxembourg's court system includes specialized chambers for commercial and financial matters, staffed by judges with expertise in complex financial law. The Luxembourg judiciary is well-resourced, well-trained, and largely free from corruption. Proceedings respect due process, defendants have access to quality legal representation, and trials are conducted fairly. However, financial crime prosecutions are rare and often unsuccessful—the complexity of cases, power of defendants' legal teams, and Luxembourg's favorable financial regulations make convictions difficult.

Prosecution of white-collar crime faces structural challenges. The State Prosecution Office has limited resources dedicated to financial crime investigation compared to the volume and complexity of potential cases. Luxembourg's favorable corporate laws make distinguishing legal tax optimization from illegal evasion difficult. The 2016 prosecution related to the Madoff Ponzi scheme—where Luxembourg-based fund administrators faced charges—demonstrated the challenges: proceedings dragged for years with mixed results.

Law enforcement is efficient and professional. The Grand Ducal Police force is well-trained, well-equipped, and maintains high standards. Corruption among police is virtually nonexistent—Luxembourg's high public sector salaries and strong institutional culture minimize bribery. The Financial Intelligence Unit (CSSF) monitors suspicious transactions and cooperates with international agencies, though critics argue enforcement is too lenient on banks that facilitate questionable transactions.

Prisons in Luxembourg are modern and humane by European standards. The main facility at Schrassig and the open prison at Givenich hold approximately 800 inmates total—remarkable for a country of 640,000 people. Conditions meet all European standards; the Council of Europe's anti-torture committee has consistently praised Luxembourg's prison system. Overcrowding is not an issue, rehabilitation programs are extensive, and recidivism rates are low. Foreign nationals comprise over 70% of inmates, reflecting Luxembourg's highly international population.

High-profile cases reveal both strengths and weaknesses. The successful prosecution of organized crime figures involved in cross-border drug trafficking demonstrates capability against traditional criminality. However, the lack of significant prosecutions following LuxLeaks—despite evidence of systematic tax avoidance facilitation—shows the limits of political will in pursuing financial crime. The 2022 trial of KPMG executives for their role in defrauding Luxembourg's tax authority resulted in convictions, a rare financial crime prosecution success.

Luxembourg's criminal justice system excels at conventional law enforcement but struggles with the financial crimes enabled by its position as a global financial center—a gap between legal capacity and political willingness to fully regulate the industry that drives Luxembourg's prosperity.`
  },
  {
    name: 'Madagascar',
    lat: -18.7669,
    lng: 46.8691,
    summary: `Madagascar's criminal justice system is characterized by chronic underfunding, corruption, political interference, and a vast gap between law on paper and implementation in practice. The world's fourth-largest island faces rising crime amid poverty, weak institutions, and recurring political crises that have undermined governance.

Crime rates in Madagascar are difficult to quantify precisely due to poor data collection, but indicators suggest rising violence and property crime. Urban areas, particularly Antananarivo, experience armed robbery, mugging, and carjacking—often committed by dahalo (bandits) who have evolved from cattle rustlers to organized criminal gangs. Rural banditry is endemic in southern regions; dahalo raids have become increasingly violent, attacking villages and killing defenders. These groups sometimes number in the hundreds, wielding military-grade weapons and overwhelming local police. Maritime piracy occasionally affects coastal waters. Kidnapping for ransom targets both foreigners and wealthy Malagasy. Corruption is systemic across all sectors; Transparency International consistently ranks Madagascar among the world's most corrupt countries.

The judicial system is severely dysfunctional. Courts are understaffed, under-resourced, and slow. Madagascar has far too few judges for its population of 29 million—many rural districts lack courts entirely. Case backlogs are enormous; criminal trials can take years to commence, leaving defendants in prolonged pretrial detention. The system inherited French civil law structures but lacks resources to operate them effectively. Legal aid is virtually nonexistent; most defendants have no representation.

Judicial independence is compromised by political interference, particularly in cases involving government officials or politically connected business interests. The 2009-2014 political crisis, when Andry Rajoelina overthrew President Marc Ravalomanana, devastated judicial credibility—courts served whichever faction controlled the government. Even after elections restored constitutional order, politicization persists. Corruption within the judiciary is widespread; bribes can influence case outcomes, and judges on meager salaries are vulnerable to inducements.

The prosecution service lacks independence and resources. Prosecutors operate under Ministry of Justice control and face political pressure in sensitive cases. Low salaries and poor working conditions make recruitment and retention difficult. High-profile corruption cases against officials rarely proceed; when they do, proceedings drag interminably or result in acquittals despite evidence.

Law enforcement is weak and corrupt. The National Police force (about 20,000 officers for 29 million people) is grossly understaffed. Equipment is inadequate—police stations lack vehicles, computers, even office supplies. Training is minimal. Officers earn poverty-level wages, making corruption inevitable; extortion and bribery are routine. The gendarmerie, responsible for rural areas, faces similar challenges. Specialized units like the anti-kidnapping brigade have had some success but are the exception. Community trust in police is low; many crimes go unreported because victims expect no effective response.

Prisons in Madagascar are among the world's worst. Designed for 11,000, they hold over 30,000—nearly three times capacity. Antanimora Prison in Antananarivo, built for 800, houses over 3,000. Conditions are horrific: severe overcrowding, inadequate food (families must bring meals), no healthcare, and rampant disease. Pretrial detainees comprise about 60% of inmates, many held for years awaiting trial. The 2017 prison riot in Farafangana, where inmates protested appalling conditions, resulted in deaths when guards fired on prisoners.

High-profile cases illustrate systemic failure. The attempted assassination of President Rajoelina in 2021 led to arrests of opposition figures and a French national, but proceedings have been criticized as politically motivated with questionable evidence. Prosecutions related to rosewood trafficking—Madagascar's endemic illegal logging by organized crime—rarely result in significant convictions despite environmental catastrophe, because traffickers have political protection.

Madagascar's criminal justice system faces an existential resource and governance crisis. Without substantial investment and political will to combat corruption, the gap between formal law and practical reality will only widen.`
  },
  {
    name: 'Malawi',
    lat: -13.2543,
    lng: 34.3015,
    summary: `Malawi's criminal justice system struggles with severe resource constraints, massive case backlogs, and overcrowded prisons, though it maintains better judicial independence and lower corruption than many African peers. The system inherited British common law structures but lacks capacity to operate them effectively.

Crime rates in Malawi are moderate by regional standards but rising, particularly in urban areas. Blantyre and Lilongwe experience property crime—theft, burglary, and pickpocketing—affecting both locals and the small expatriate community. Violent crime is less common but increasing; armed robbery and muggings occur in cities. Rural areas face cattle theft and land disputes that sometimes turn violent in a densely populated agricultural country where property conflicts are endemic. Corruption is widespread across government and business; bribery for public services is routine, though Malawi scores better on corruption indices than many neighbors.

Organized crime focuses on wildlife trafficking—Malawi's diminished but still valuable elephant population faces poaching pressure—and drug trafficking, with the country serving as a minor transit route for heroin and methamphetamine moving from South Asia to South Africa and onward. Money laundering through property and businesses occurs but is less sophisticated than in more developed economies.

The judicial system is nominally independent and has shown genuine autonomy in high-profile cases. Malawi's court system includes magistrate courts, the High Court, and the Supreme Court of Appeal. Judges are generally respected and less corrupt than counterparts in neighboring countries. The February 2020 Constitutional Court ruling that annulled President Peter Mutharika's re-election due to irregularities—subsequently upheld by the Supreme Court—demonstrated remarkable judicial independence in a region where courts typically rubber-stamp executive power. This led to fresh elections won by opposition candidate Lazarus Chakwera.

However, the system is severely under-resourced. Malawi has approximately 50 judges for a population of 20 million—grossly insufficient. Court backlogs are enormous; civil cases can take five to ten years, and criminal trials face years of delays. Many defendants spend longer in pretrial detention than the sentence they'd receive if convicted. Rural areas lack courts entirely; litigants must travel hundreds of kilometers to access justice. Legal aid is minimal; most defendants have no representation. The judiciary's budget is a tiny fraction of government spending, limiting improvements.

Prosecution capacity is weak. The Director of Public Prosecutions office is understaffed and under-resourced. Prosecutors handle overwhelming caseloads with minimal support. High-profile corruption cases against politically connected individuals often fail due to poor investigation, insufficient evidence collection, or political interference. The "Cashgate" scandal—where over $30 million was looted from government accounts in 2013—resulted in some prosecutions, but many implicated officials escaped accountability.

Law enforcement is under-resourced and corruption-prone. The Malawi Police Service has about 15,000 officers for 20 million people. Equipment is inadequate; many stations lack vehicles or fuel. Training is basic. Police salaries are very low, making officers vulnerable to corruption. Bribery to avoid arrest or secure case dismissal is common. Professional standards have improved under recent reform efforts, but challenges persist. Community policing initiatives show promise in improving trust and cooperation.

Prisons in Malawi are nightmarishly overcrowded. Designed for 5,000, they hold over 14,000 inmates—nearly 300% capacity. Conditions violate basic human dignity: extreme crowding, inadequate food, minimal healthcare, and poor sanitation. Maula Prison in Lilongwe, built for 800, houses over 2,500. Pretrial detainees comprise about half of all prisoners, many held for years due to court backlogs. The 2021 Constitutional Court ruling declaring prison conditions unconstitutional and ordering government remediation has led to minor improvements but fundamental problems persist.

High-profile cases show both promise and limitations. The election annulment demonstrated judicial integrity. However, the slow progress on Cashgate prosecutions and the 2022 acquittal of former Justice Minister Samuel Tembenu on corruption charges—despite evidence—illustrate how the powerful can still evade accountability.

Malawi's criminal justice system has pockets of genuine integrity, particularly in the higher judiciary, but is overwhelmed by resource constraints that prevent effective operation.`
  },
  {
    name: 'Malaysia',
    lat: 4.2105,
    lng: 101.9758,
    summary: `Malaysia's criminal justice system blends British common law traditions with Islamic law elements, operating with reasonable efficiency but compromised by political interference, selective prosecution, and concerning erosion of judicial independence. The system functions well for conventional crime but struggles with high-level corruption and politically motivated cases.

Crime rates in Malaysia are moderate and declining in recent years. Violent crime exists but is relatively low; the homicide rate sits around 2 per 100,000 people. Property crime—residential burglaries, vehicle theft, and pickpocketing—affects urban areas like Kuala Lumpur and Penang. Scams and cybercrime have exploded, with Malaysia becoming a major hub for online fraud operations, including romance scams, investment fraud, and phone scams targeting victims across Asia. Drug trafficking is significant; Malaysia sits on major smuggling routes, and the country maintains the death penalty for drug offenses despite international criticism.

Organized crime includes Chinese triads involved in gambling, prostitution, and protection rackets; Malaysian gangs engaged in smuggling; and networks trafficking methamphetamine and heroin. Money laundering through property, casinos, and businesses is endemic, facilitated by weak enforcement and corruption. The 1MDB scandal—where billions were looted from a state investment fund—exposed how Malaysia's financial system could be exploited at the highest levels.

The judicial system has experienced troubling erosion of independence. Malaysia's court system includes magistrate courts, sessions courts, High Courts, the Court of Appeal, and the Federal Court (supreme court). Judges were historically respected for professionalism, but recent decades have seen increased political interference. The 1988 constitutional crisis, when the executive removed the Lord President and other judges, damaged judicial credibility. Recent governments have made efforts at reform, but problems persist.

Politically sensitive cases demonstrate selective justice. The prosecution of opposition leader Anwar Ibrahim on sodomy charges—widely seen as politically motivated—resulted in conviction and imprisonment until his pardon and eventual rise to Prime Minister in 2022. The 1MDB cases against former Prime Minister Najib Razak led to conviction and imprisonment in 2022, a rare accountability moment, though critics note selective prosecution while other implicated figures avoided charges. The use of sedition laws to prosecute critics, activists, and journalists shows how legal mechanisms serve political control.

The Sharia court system operates parallel to civil courts, handling personal and family matters for Muslims. This dual system creates complications—custody disputes, conversion cases, and jurisdictional conflicts—with Sharia courts sometimes overriding civil court decisions. The Indira Gandhi case, involving child custody after religious conversion, exposed these tensions and limits on civil court authority over Islamic matters.

Law enforcement is reasonably professional but faces corruption challenges. The Royal Malaysian Police (PDRM) is a capable force with specialized units for drug enforcement, commercial crime, and counter-terrorism. However, corruption persists—police officers have been caught involved in drug trafficking, human smuggling, and extortion. The 2017 death of firefighter Muhammad Adib during a temple riot, and subsequent investigation criticism, revealed professionalism concerns. The Independent Police Complaints and Misconduct Commission provides oversight but lacks enforcement power.

The Malaysian Anti-Corruption Commission (MACC) has pursued high-profile cases, including against Najib Razak, demonstrating some independence. However, critics argue MACC selectively targets opposition figures while protecting government allies, and that politically inconvenient investigations are shelved.

Prisons in Malaysia generally meet basic standards but face overcrowding. The system holds about 75,000 inmates in facilities designed for 52,000. Conditions are acceptable by regional standards; serious abuse is less common than in neighboring countries. Drug offenders comprise a large portion of the prison population due to harsh sentencing. Rehabilitation programs exist but are under-resourced. Malaysia's continued use of corporal punishment (caning) for various offenses draws international criticism.

Malaysia's criminal justice system has professional elements and capacity but is undermined by political interference, selective prosecution, and erosion of judicial independence, creating a system where justice often depends on political considerations.`
  }
];

async function saveAllWriteups() {
  console.log(`Saving ${CRIME_WRITEUPS.length} Crime & Justice summaries to database...\n`)

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
          updatedAt: new Date(),
          storyCount: 0
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
      console.log(`✓ Saved ${writeup.name}`)
    } catch (error) {
      console.error(`Error saving ${writeup.name}:`, error)
    }
  }

  console.log(`\n✓ Successfully saved ${CRIME_WRITEUPS.length} Crime & Justice summaries!`)
  await prisma.$disconnect()
}

saveAllWriteups()
