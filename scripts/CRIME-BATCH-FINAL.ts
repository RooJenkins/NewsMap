import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ datasources: { db: { url: 'file:/home/user/NewsMap/prisma/dev.db' } } })

const WRITEUPS = [
  { name: 'Northern Cyprus', lat: 35.1856, lng: 33.3823, summary: `Northern Cyprus's criminal justice system operates in an internationally unrecognized state, creating unique challenges. Recognized only by Turkey, Northern Cyprus maintains separate institutions from the Republic of Cyprus, though its legal framework is based on English common law inherited from British colonial rule. The system functions adequately for routine matters but is compromised by political control and Turkey's overwhelming influence.

Crime is low. The homicide rate is approximately 1-2 per 100,000. Violent crime is uncommon. Property crime includes burglary and theft affecting tourist areas. Organized crime includes smuggling operations and money laundering through casinos and real estate. Drug trafficking occurs but at relatively low levels.

Corruption exists, particularly involving construction permits, land deals, and ties between business interests and political figures. Turkey's influence creates patron-client networks.

The judiciary applies laws based on British common law with Turkish influences. Courts include district courts and a Supreme Court. Judicial independence is limited by political pressures and small elite networks where everyone knows everyone.

Law enforcement includes police forces modeled on British and Turkish systems. Police are reasonably professional for routine matters.

Prisons hold several hundred inmates in conditions that meet basic standards.

The primary justice issue is property disputes from 1974 division—Greek Cypriots' claims to properties now in Northern Cyprus remain unresolved.` },
  { name: 'Norway', lat: 60.4720, lng: 8.4689, summary: `Norway's criminal justice system is widely considered among the world's best, exemplifying Scandinavian approaches that emphasize rehabilitation over punishment, strong rule of law, minimal corruption, and comprehensive social support. The system delivers fair, humane outcomes while maintaining low crime rates. Norway's innovative prison system serves as a global model.

Crime in Norway is very low. The homicide rate is approximately 0.5 per 100,000—among the world's lowest. Violent crime is uncommon. The 2011 terrorist attack by Anders Behring Breivik, who killed 77 people, was an extreme anomaly. Property crime occurs at low rates. Drug offenses represent a significant portion of cases, though Norway decriminalized personal drug use in practical terms, emphasizing treatment over prosecution. Organized crime includes motorcycle gangs involved in drug trafficking and violence, though at much lower levels than other European countries.

Corruption is virtually nonexistent. Transparency International consistently ranks Norway in the top 5 globally.

The judiciary is independent and highly professional. Judges are appointed based on rigorous qualifications with strong tenure protections. Political interference doesn't occur.

Law enforcement (Norwegian Police Service) is professional and trusted. Police are generally unarmed during routine patrols. Excessive force incidents are rare and thoroughly investigated.

Norway's prison system is revolutionary. Facilities like Halden Prison feature private rooms, kitchens, recreational activities, and job training. The philosophy is rehabilitation—even Breivik, serving the maximum 21-year sentence (renewable), has access to education and activities. Recidivism rates are among the world's lowest at around 20%.

Norway's system demonstrates that humane treatment and rehabilitation produce better outcomes than punitive approaches.` },
  { name: 'Oman', lat: 21.4735, lng: 55.9754, summary: `Oman's criminal justice system operates in an absolute monarchy where Sultan Haitham bin Tariq holds ultimate authority. While Oman is less repressive than some Gulf neighbors and has avoided the internal conflicts affecting the region, the justice system serves the sultanate's interests and tolerates no political dissent. Rule of law exists for routine matters but is subordinate to political power.

Crime in Oman is low. The homicide rate is approximately 0.5 per 100,000. Violent crime is rare. Property crime occurs at low rates. Drug trafficking is the most significant criminal concern—Oman's coast is used for smuggling from Pakistan and Iran. Organized crime is limited compared to neighboring countries.

Corruption appears relatively low compared to regional standards, though opacity makes assessment difficult. The government controls major economic sectors, creating opportunities for elite enrichment.

Oman's legal system is based on Sharia law and sultanic decrees. Courts include primary courts, appeals courts, and a Supreme Court. The judiciary is not independent—judges are appointed by and serve at the sultan's pleasure. In routine civil and criminal matters, courts function relatively predictably. In politically sensitive cases, the system serves regime interests.

Political dissent is criminalized. Critics face arrest under vague laws prohibiting "insulting the sultan" or "undermining state prestige." Activists and journalists have been imprisoned for social media posts. Trials lack due process.

Law enforcement (Royal Oman Police) is professional for routine policing. Security services monitor dissent. Torture allegations exist but are less systematic than in some Gulf states.

Prisons hold several thousand inmates in conditions that meet basic standards, though transparency is limited.

Oman's justice system functions adequately for non-political matters but doesn't tolerate challenges to sultanic authority.` },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451, summary: `Pakistan's criminal justice system is dysfunctional, overwhelmed, and deeply compromised by corruption, political interference, terrorism, and sectarian violence. With a population exceeding 230 million, limited resources, and endemic instability, the system fails to deliver timely justice for most citizens. Powerful interests—military, political elites, religious groups—operate largely above the law while ordinary Pakistanis face a Kafkaesque bureaucracy.

Crime in Pakistan spans terrorism, violent crime, and organized criminal activity. Terrorist attacks, while declined from peaks, continue—separatist violence in Balochistan, sectarian attacks on Shia and Ahmadi minorities, and occasional Islamist terror incidents. The homicide rate is approximately 4 per 100,000, though underreporting is likely. "Honor killings" of women who violate family dictates kill hundreds annually. Mob violence, including lynchings over blasphemy allegations, occurs with impunity. Organized crime includes drug trafficking (Pakistan sits on heroin routes from Afghanistan), kidnapping for ransom, and land mafias.

Corruption is endemic at every level. Police demand bribes to register cases, conduct investigations, or avoid false charges. Judges can be bought. Political corruption is massive—politicians and officials embezzle billions while accountability is selective. The military and intelligence services operate with impunity, above civilian law.

Pakistan's judiciary is based on English common law with Islamic provisions. Courts include district courts, High Courts in each province, and a Supreme Court. The judiciary has shown surprising independence in significant cases—courts have clashed with military rulers, restored ousted judges, and ruled against government interests. However, lower courts are hopelessly backlogged with millions of pending cases. Trials take decades. Judges face threats from terrorists and criminals.

The most serious dysfunction is abuse of blasphemy laws. Pakistan's laws criminalize insulting Islam or the Prophet Muhammad, carrying death sentences. These laws are weaponized in personal disputes—hundreds face charges based on false accusations. Trials are mob-influenced; judges fear acquitting defendants because extremists murder those perceived as lenient. Asia Bibi spent nine years on death row before acquittal in 2018, then fled Pakistan due to death threats.

Law enforcement is corrupt, brutal, and ineffective. Police torture is systematic—detainees routinely report beatings and worse to extract confessions. "Encounter killings" (extrajudicial executions staged as shootouts) number in the hundreds annually. Police also engage in protection rackets and criminal enterprises.

Pakistan applies the death penalty extensively, with hundreds on death row.

Prisons are severely overcrowded and conditions are harsh.

Pakistan's justice system delivers justice sporadically, fails systematically, and is corrupted thoroughly.` },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332, summary: `Palestine's criminal justice system operates under extraordinarily complex circumstances: Israeli military occupation of the West Bank, Hamas control of Gaza, and the Palestinian Authority's limited governance create overlapping and often contradictory jurisdictions. Justice is fragmented, politicized, and severely constrained by occupation.

Crime statistics are complicated by occupation. Violent crime includes conflicts with Israeli forces, settler violence, and internal Palestinian disputes. The homicide rate is difficult to verify. Property crime occurs. Organized crime includes smuggling operations.

Corruption in the Palestinian Authority is significant. Transparency International ranks Palestine poorly. PA officials enrich themselves while governance deteriorates.

The legal system is fractured. In West Bank areas under PA control, courts apply a mix of Jordanian law, British Mandate law, and PA legislation. In Gaza, Hamas applies Sharia-influenced law. Israeli military courts prosecute Palestinians for security-related offenses, operating with minimal due process. PA courts are under-resourced and politicized.

The PA and Hamas have both weaponized justice against opponents. Critics face arbitrary arrest and detention. Torture in custody is documented in both West Bank and Gaza.

Israeli military occupation is the defining factor. Israeli forces arrest Palestinians, often including children, holding them in administrative detention without charges. Military courts convict at rates approaching 100%. Home demolitions, checkpoints, and restrictions create a justice vacuum.

Prisons in PA areas and Gaza are overcrowded. Israeli prisons hold thousands of Palestinian security detainees.

Palestine's justice system can't function normally under occupation.` },
  { name: 'Panama', lat: 8.5380, lng: -80.7821, summary: `Panama's criminal justice system operates in a country transformed by its canal, banking sector, and strategic position—factors that bring prosperity but also make Panama a hub for money laundering, drug trafficking, and organized crime. While Panama is a democracy with functioning institutions, the system is compromised by corruption and struggles to address sophisticated transnational crime.

Crime in Panama is moderate. The homicide rate is approximately 9 per 100,000. Violent crime includes gang violence, particularly in Colón and Panama City's marginalized neighborhoods. Armed robberies and assaults affect both residents and tourists. Panama's most significant criminal justice challenge is its role as a money laundering hub. Banking secrecy and weak enforcement make Panama attractive for washing drug proceeds, corruption funds, and other illicit money. The "Panama Papers" scandal exposed how the country's legal and financial sectors facilitated global tax evasion and money laundering. Drug trafficking—cocaine from Colombia transiting to North America—is substantial. Organized crime includes human trafficking and smuggling operations.

Corruption is significant. Transparency International ranks Panama in the middle globally but poorly for the region. High-level corruption involves politicians receiving kickbacks from construction contracts, particularly the notorious Odebrecht scandal where Brazilian contractors bribed officials across Latin America. Judicial corruption occurs—favorable rulings can be influenced through connections or payments.

Panama's judiciary is based on civil law. Courts include lower courts, superior courts, and a Supreme Court. The judiciary has nominal independence but is politically influenced. Supreme Court justices are appointed through processes involving the National Assembly, creating political loyalties. In high-profile cases involving powerful figures, outcomes are often predetermined.

Law enforcement includes the National Police and specialized units. Police face corruption allegations and are sometimes complicit in criminal enterprises. Professionalization efforts have shown mixed results.

Prisons hold approximately 18,000 inmates in facilities designed for far fewer. Conditions are overcrowded and harsh.

Panama's justice system functions adequately for routine matters but struggles with financial crimes and corruption.` },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555, summary: `Papua New Guinea's criminal justice system barely functions across a country characterized by extreme geographic fragmentation, weak state capacity, tribal governance, and endemic violence. With over 800 languages and rugged terrain limiting infrastructure, PNG's formal justice institutions reach only a fraction of the population. Most disputes are resolved through traditional mechanisms that sometimes involve brutal practices.

Crime in PNG is severe, particularly violent crime. The homicide rate is approximately 7-8 per 100,000, though many killings go unreported. Tribal warfare involves armed clashes between clan groups that can kill dozens. "Payback killings"—revenge murders following disputes—are common. Sexual violence is epidemic; PNG has one of the world's highest rape rates, with domestic violence culturally normalized in many communities. Sorcery-accusation related violence kills dozens annually—people (usually women) accused of witchcraft are tortured and burned alive. Armed robberies, carjackings, and gang violence affect urban areas, particularly Port Moresby. Organized crime includes illegal logging, gold mining, and some drug trafficking.

Corruption is pervasive at all levels. Transparency International ranks PNG near the bottom globally. Police demand bribes routinely. Politicians embezzle massive amounts from resource revenues. The judicial system is corrupt, with judgments influenced by tribal affiliations and bribes.

PNG's judiciary is based on English common law with constitutional recognition of customary law. Courts include district courts, a National Court, and Supreme Court. The formal justice system is hopelessly under-resourced—too few judges, prosecutors, and courts for 9 million people spread across impossible terrain. Cases take years. Most citizens will never see a formal court.

Traditional justice mechanisms fill the void but can be brutal. Village courts handle most disputes, applying customary law. These can order compensation payments, banishment, or physical punishment. Some practices violate human rights, including violent punishments for women accused of adultery or sorcery.

Law enforcement (Royal PNG Constabulary) is weak, corrupt, and sometimes criminal. Police engage in extortion, rape, and extrajudicial killings. The public fears and distrusts police. Many areas have minimal police presence.

Prisons are overcrowded and harsh. Escapes are common.

PNG's justice system can't address the country's massive needs.` },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438, summary: `Paraguay's criminal justice system has improved since the end of military dictatorship (1954-1989) but remains weak, corrupt, and compromised by organized crime. Democratic governance is fragile, and the justice system struggles to address drug trafficking, corruption, and impunity for the powerful.

Crime in Paraguay centers on organized crime and corruption. The homicide rate is approximately 8 per 100,000. Violent crime includes gang violence, armed robberies, and conflicts between criminal organizations. Paraguay's primary criminal justice challenge is narco-trafficking—the country is a major marijuana producer and trans-shipment point for Bolivian cocaine destined for Brazil, Argentina, and Europe. The tri-border area (Paraguay, Argentina, Brazil) is a smuggling hub. Organized crime also includes cattle theft, money laundering, and contraband cigarette smuggling.

Corruption is endemic. Transparency International ranks Paraguay poorly. The Colorado Party, which has dominated politics for decades, operates patronage networks that enrich elites. Police and judges are often corrupt. The 2023 election of Santiago Peña continued Colorado rule despite corruption scandals.

The judiciary operates under civil law but is compromised. Judges face political pressure and corruption temptations. The Supreme Court is politically aligned with ruling powers. Lower courts are slow and under-resourced.

Law enforcement is weak and corrupt. Police collaborate with criminal organizations, providing protection for drug traffickers and smugglers.

Prisons hold approximately 17,000 inmates in facilities designed for 8,000. Conditions are harsh.

Paraguay's justice system fails to address organized crime or hold elites accountable.` },
  { name: 'Peru', lat: -9.1900, lng: -75.0152, summary: `Peru's criminal justice system struggles with corruption, inefficiency, and a legacy of authoritarian abuse during the 1980s-90s internal conflict. While Peru is a democracy, its justice institutions are weak, slow, and compromised. The system has failed to deliver accountability for past atrocities or address current crime and corruption.

Crime in Peru includes violent crime and organized crime. The homicide rate is approximately 6 per 100,000. Violent crime includes armed robberies, assaults, and gang violence in Lima. Peru is the world's second-largest cocaine producer after Colombia, with drug trafficking networks controlling coca-growing regions. Illegal mining operations involve criminal organizations, environmental destruction, and violence. Extortion, kidnapping, and contract killings occur.

Corruption is pervasive. Peru has experienced a series of corruption scandals involving presidents—Fujimori, Toledo, García, Humala, Kuczynski, and Castillo have all faced investigations or imprisonment. The Odebrecht bribery scandal implicated numerous officials. Judicial corruption is routine.

The judiciary is based on civil law but is politicized and slow. Courts are backlogged with years-long delays. Judicial independence is compromised by political interference and corruption.

Former President Alberto Fujimori's 1990s authoritarian rule involved systematic human rights abuses. While Fujimori was convicted in 2009 for massacres and kidnappings, he was controversially pardoned in 2023.

Transitional justice for the internal conflict that killed 70,000 has been inadequate. Perpetrators from both Shining Path terrorists and military forces often escape accountability.

Law enforcement is corrupt. Police engage in extortion and collaborate with criminals.

Prisons hold 97,000 inmates in facilities designed for 40,000. Conditions are overcrowded and controlled by gangs.

Peru's justice system delivers justice sporadically while powerful interests escape accountability.` },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740, summary: `The Philippines' criminal justice system has been severely compromised by former President Rodrigo Duterte's "war on drugs" that killed thousands in extrajudicial executions between 2016-2022. While current President Ferdinand Marcos Jr. has moderated the worst excesses, the system remains dysfunctional, corrupt, and unable to deliver timely justice for most Filipinos.

Crime in the Philippines includes violent crime, terrorism, and organized crime. The homicide rate is approximately 6 per 100,000, though this doesn't include thousands killed in Duterte's anti-drug operations. Violent crime includes armed robberies, gang violence, and conflicts involving private armed groups. Islamist terrorism affects Mindanao, where groups like Abu Sayyaf engage in kidnappings and bombings. Organized crime includes drug trafficking, illegal gambling, and smuggling.

The "war on drugs" was state-sponsored mass murder. Police and vigilantes killed an estimated 12,000-30,000 people in "drug-related operations"—often extrajudicial executions of suspects. The International Criminal Court is investigating Duterte for crimes against humanity. Accountability appears unlikely given political protections.

Corruption is endemic. Transparency International ranks the Philippines poorly. Police corruption is routine. Judicial corruption occurs, with cases influenced by bribes or political pressure.

The judiciary is based on Spanish/American law. Courts are independent in theory but face political pressure in sensitive cases. The system is extremely slow—cases take 5-10 years on average. Access to justice is limited for poor Filipinos.

Law enforcement is brutal and corrupt. Police torture and extrajudicial killings continue under Marcos, though at reduced levels. The public both fears and needs police.

Prisons hold over 200,000 inmates in facilities designed for 40,000. Conditions are among the world's most overcrowded.

The Philippines' justice system has been weaponized for violence and fails to deliver justice.` },
  { name: 'Poland', lat: 51.9194, lng: 19.1451, summary: `Poland's criminal justice system has faced severe erosion of judicial independence since the Law and Justice Party (PiS) began court-packing and reform efforts in 2015. What was once a robust post-communist success story has been damaged by political interference, threatening Poland's EU membership and rule of law. The October 2023 election of Donald Tusk's coalition promises reforms but faces challenges reversing damage.

Crime in Poland is low to moderate. The homicide rate is approximately 0.7 per 100,000. Violent crime is uncommon. Property crime occurs at moderate rates. Drug trafficking involves synthetic drugs and transit routes. Organized crime includes trafficking networks and smuggling operations.

Corruption is moderate. Transparency International ranks Poland in the top 50 globally, though the PiS period saw concerning developments including allegations of surveillance of opposition figures.

The judiciary crisis is Poland's defining justice issue. PiS systematically undermined judicial independence by: packing the Constitutional Tribunal with loyalists, creating a "Disciplinary Chamber" to punish judges who ruled against government, lowering retirement ages to force out judges and replace them with allies, and attacking individual judges who resisted. The European Court of Justice ruled these reforms violated EU law. Poland's judiciary became partially politicized, with some courts controlled by PiS appointees.

The new Tusk government is attempting reforms but faces legal tangles—how to remove illegally appointed judges without violating their rights?

Law enforcement is professional. Police are reasonably well-trained. Corruption exists but isn't systemic.

Prisons hold approximately 70,000 inmates in conditions that meet European standards.

Poland's justice system is in transition, recovering from political damage.` },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245, summary: `Portugal's criminal justice system exemplifies Southern European strengths and weaknesses: strong rule of law and judicial independence, low corruption, effective law enforcement, but also chronic delays that undermine access to justice. Portugal stands out for progressive drug policies that emphasize treatment over punishment.

Crime in Portugal is low. The homicide rate is approximately 0.7 per 100,000. Violent crime is uncommon. Property crime—burglaries, pickpocketing in tourist areas—occurs at moderate rates. Portugal's most notable criminal justice achievement is drug policy. The 2001 decriminalization of personal drug possession treats addiction as a health issue rather than crime, emphasizing treatment. This approach has reduced overdose deaths and HIV infections without increasing use.

Drug trafficking remains an issue—Portugal's coast and Lisbon port are entry points for South American cocaine and Moroccan hashish.

Corruption is relatively low. Transparency International ranks Portugal in the top 35 globally. When corruption occurs, it typically involves construction permits, public procurement, or political party financing rather than blatant bribery.

The judiciary is independent and based on civil law. Judges are appointed based on merit with strong tenure protections. Portugal's courts have prosecuted high-profile corruption cases, including former Prime Minister José Sócrates (though his trial dragged for years with mixed results).

The system's biggest weakness is delay. Criminal cases routinely take 3-5 years to reach conclusion. Complex cases drag for over a decade. This delay effectively denies justice and allows defendants to exploit procedural tactics.

Law enforcement (Public Security Police and National Republican Guard) is professional and generally trusted.

Prisons hold approximately 12,000 inmates in conditions meeting European standards. Portugal has reduced incarceration rates through alternatives like community service.

Portugal's system is effective but needs reforms to address delays.` },
  { name: 'Puerto Rico', lat: 18.2208, lng: -66.5901, summary: `Puerto Rico's criminal justice system operates under U.S. sovereignty with its own courts applying both Puerto Rican and federal law. As a U.S. territory, Puerto Rico benefits from constitutional protections and federal oversight while facing unique challenges including economic crisis, population decline, and high crime rates.

Crime in Puerto Rico is significantly higher than the U.S. mainland. The homicide rate is approximately 18 per 100,000—triple the U.S. average. Violent crime includes drug-related murders as cartels fight for control of trafficking routes. Gang violence affects public housing projects. Armed robberies and carjackings are common. Puerto Rico serves as a transshipment point for cocaine from South America to the U.S. mainland.

Corruption has plagued Puerto Rico's government. Recent scandals include the 2019 "Telegramgate" that forced Governor Ricardo Rosselló to resign. Police corruption includes collaboration with drug traffickers.

Puerto Rico's judiciary operates under U.S. constitutional framework. Courts include municipal courts, Superior Court, Court of Appeals, and Supreme Court. Federal courts have jurisdiction over federal crimes. Judicial independence is generally respected, though corruption allegations have touched some judges.

Law enforcement includes the Puerto Rico Police Department, which has faced serious problems. A 2011 DOJ investigation found patterns of excessive force, corruption, and civil rights violations. A federal consent decree imposed reforms that have shown mixed results.

Economic crisis has strained the justice system—budget cuts reduced court staff and prosecutors.

Prisons hold approximately 8,000 inmates in conditions that meet basic standards but face overcrowding.

Puerto Rico's justice system operates within U.S. frameworks but faces severe crime and resource challenges.` },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839, summary: `Qatar's criminal justice system operates in an absolute monarchy where the Emir holds ultimate authority over all institutions. While Qatar has modernized rapidly and projects an image of development, the justice system serves the ruling Al Thani family's interests and tolerates no political dissent. Migrant workers, who comprise 90% of the population, face particular injustices.

Crime in Qatar is very low. The homicide rate is approximately 0.3 per 100,000. Violent crime is rare. Property crime occurs at low rates. Qatar's criminal justice challenges involve labor exploitation of migrant workers—wage theft, passport confiscation, and dangerous working conditions aren't prosecuted as crimes but constitute systematic abuse.

Corruption is difficult to assess given opacity, but appears lower than some Gulf neighbors. The government controls vast oil and gas wealth, creating opportunities for elite enrichment without accountability.

Qatar's legal system is based on Sharia law and civil codes. Courts include lower courts, appeals courts, and a Court of Cassation. The judiciary is not independent—judges are appointed by and serve at the Emir's discretion. In routine matters, courts function relatively predictably. In politically sensitive cases, outcomes serve regime interests.

Political dissent is criminalized. Critics face arrest under vague laws. Poet Muhammad al-Ajami was imprisoned for verse deemed insulting to the Emir. Trials lack due process.

The kafala sponsorship system gives employers control over migrant workers, creating conditions for abuse. Workers can't change jobs or leave without employer permission. Despite reforms, exploitation continues.

Law enforcement is professional for maintaining order. Security services monitor dissent.

Prisons hold several thousand inmates in conditions meeting basic standards, though transparency is limited.

Qatar's justice system functions for routine matters but doesn't tolerate challenges to authority or protect vulnerable workers.` }
]

async function main() {
  console.log(`Saving ${WRITEUPS.length} FINAL Crime writeups...\n`)
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
  console.log('\n✨ ALL CRIME WRITEUPS COMPLETE!')
}

main().finally(() => prisma.$disconnect())
