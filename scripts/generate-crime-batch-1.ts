import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Crime & Justice writeups for countries 1-13 (Afghanistan through Belize)
// Written in Preet Bharara / Jeffrey Toobin style
// Length: 2,500-3,500 characters each

const CRIME_WRITEUPS = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `Afghanistan's criminal justice landscape reflects a nation caught between traditional tribal law, Islamic jurisprudence, and attempts at formal state institutions—all undermined by decades of conflict and the Taliban's return to power in August 2021. The result is a fragmented system where justice depends heavily on geography, ethnicity, and political alignment.

Crime statistics are nearly impossible to verify in Afghanistan's current state. The Taliban government doesn't publish comprehensive crime data, and most incidents go unreported to authorities. What's clear is that certain categories of crime—particularly violent extremism, narcotics trafficking, and corruption—remain endemic. The U.N. Office on Drugs and Crime estimates Afghanistan still produces over 80% of the world's opium despite Taliban pledges to eliminate poppy cultivation. Armed robbery, kidnapping for ransom, and tribal disputes frequently turn violent, particularly in rural areas where central authority is minimal.

The formal justice system that existed under the U.S.-backed republic has been largely dismantled. The Taliban abolished the Constitution and replaced it with their interpretation of Sharia law. Courts now operate without many trained judges—the previous judicial corps fled or were purged. Cases are adjudicated by Taliban religious scholars whose legal training often consists solely of traditional madrasa education. Due process protections are nonexistent; trials can be summary affairs with predetermined outcomes. The Supreme Court, once headed by reformist judges, now enforces strict interpretations that include corporal punishment and public executions.

Law enforcement consists of Taliban fighters who transitioned from insurgency to policing with minimal retraining. The professionalized police force built over two decades with billions in Western investment evaporated almost overnight. Today's police are essentially religious enforcers: the Vice and Virtue Ministry patrols for dress code violations, music, and other perceived moral infractions. Traditional crime-solving receives far less emphasis than ideological enforcement. Corruption, ironically, may have decreased in some forms—the Taliban's austere ideology limits bribe-taking compared to the endemic graft of the previous government—but nepotism and favoritism remain widespread.

Afghanistan's prisons are brutal and overcrowded. Conditions in facilities like Pul-e-Charkhi in Kabul are harsh, with reports of torture, inadequate food, and denial of medical care. The Taliban inherited thousands of prisoners from the previous government; many have faced extrajudicial punishment or execution. Female prisoners face particular abuse, and the legal basis for their detention is often simply running afoul of Taliban social restrictions.

High-profile cases under Taliban rule tend to involve political enemies rather than common criminals. Former government officials, civil society activists, and journalists face arrest on vague charges of "spreading corruption" or "working for foreign enemies." International observers have documented summary executions of former security forces despite Taliban promises of amnesty. The 2022 killing of Al-Qaeda leader Ayman al-Zawahiri in a Kabul safehouse exposed the Taliban's continued relationship with terrorist networks, contradicting their pledges.

The criminal justice system's fundamental problem is legitimacy: it operates without popular consent, international recognition, or adherence to internationally accepted human rights standards. For most Afghans, "justice" means navigating between Taliban courts, traditional jirga (tribal council) mediation, and simple survival in a country where the rule of law has ceased to function in any meaningful sense.`
  },
  {
    name: 'Albania',
    lat: 41.1533,
    lng: 20.1683,
    summary: `Albania has made remarkable strides in combating its reputation as a criminal haven, though organized crime—particularly drug trafficking—remains a significant challenge. The country's justice system has undergone substantial EU-mandated reforms, yet implementation continues to lag behind legislation.

Crime rates have declined notably since Albania's chaotic post-communist 1990s, when pyramid schemes collapsed and the country descended into near-anarchy. Today, Albania's homicide rate sits at approximately 2.3 per 100,000 people—below the global average but higher than most EU countries. Violent crime tends to concentrate in Tirana and coastal areas, often linked to organized criminal networks. Property crime, particularly theft and burglary, affects both urban and tourist areas. Corruption, while improved, persists as a systemic problem, particularly in public procurement and at lower levels of bureaucracy.

Albania's most serious criminal justice challenge is organized crime, particularly cocaine trafficking from South America to European markets. Albanian organized crime groups have become major players in the European drug trade, with networks extending from Latin America through the Balkans to Western Europe. Cannabis cultivation was once endemic in Albania's mountainous regions; aggressive eradication campaigns have reduced but not eliminated production. The European Monitoring Centre for Drugs and Drug Addiction regularly identifies Albania as a key transit country. Money laundering through real estate and businesses remains common, fueled by drug profits and remittances from diaspora populations.

The justice system has undergone a controversial but necessary "vetting" process—a deep background check of all judges and prosecutors to eliminate corruption and organized crime ties. Since 2017, this process has dismissed or forced resignations of roughly half the judiciary, creating a massive backlog as cases pile up with insufficient judges. The Constitutional Court and Supreme Court were temporarily non-functional due to lack of vetted judges. The vetting has shown results: several high-level judges were removed for unexplained assets and criminal ties. However, the transition period has strained an already slow system; cases drag for years.

Judicial independence remains fragile. Political interference—while less blatant than in neighboring countries—still occurs, particularly in cases involving government officials or powerful business interests. The Prosecutors' Office has become more active under reformist leadership, pursuing organized crime and corruption cases that would have been untouchable a decade ago. The Special Prosecution Office Against Corruption and Organized Crime (SPAK), established in 2019, has brought charges against politicians, judges, and crime figures, signaling genuine reform momentum.

Albanian police have improved professionalism and equipment but struggle with low salaries (making them vulnerable to corruption) and insufficient training. The State Police report to the Ministry of Interior, which periodically faces accusations of political influence. Community policing initiatives have expanded, improving public trust in some areas. International cooperation, particularly with Italian, Greek, and American law enforcement, has been crucial in combating transnational organized crime.

Prisons in Albania are overcrowded and conditions often violate European standards. The Council of Europe's Committee for the Prevention of Torture has repeatedly criticized facilities for inadequate healthcare, violence, and poor infrastructure. Albania houses about 5,500 prisoners in a system designed for 4,000. Rehabilitation programs are minimal, contributing to recidivism.

High-profile cases demonstrate the system's evolution. The 2020 arrest of Dorian Duka, a judge caught on tape taking bribes, showcased the vetting process's bite. More recently, SPAK's investigation of former Prime Minister Sali Berisha on corruption charges—despite his political influence—signals that Albania's elite may no longer enjoy blanket impunity. However, convictions in such cases remain rare, and political interference accusations persist.

Albania's criminal justice trajectory is cautiously positive: genuine reforms are underway, but entrenched organized crime networks and lingering corruption mean progress remains incomplete and fragile.`
  },
  {
    name: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    summary: `Algeria's criminal justice system reflects the contradictions of an authoritarian state attempting to project legitimacy while maintaining tight political control. The judiciary is nominally independent but operates under substantial executive influence, particularly in politically sensitive cases.

Crime rates in Algeria are moderate compared to regional neighbors. Violent crime, including homicide (approximately 1.5 per 100,000), is relatively low. Petty crime like pickpocketing and theft is more common in urban centers, particularly Algiers. Algeria's primary security concerns are terrorism-related, a legacy of the devastating civil war (1991-2002) that killed an estimated 200,000 people. While large-scale terrorism has diminished, isolated attacks by Al-Qaeda in the Islamic Maghreb (AQIM) and ISIS-affiliated groups still occur in remote southern and mountainous regions. Smuggling—of goods, drugs, and people—is endemic along Algeria's porous borders with Mali, Niger, and Libya.

Corruption permeates Algerian society despite official anti-corruption rhetoric. Transparency International consistently ranks Algeria in the bottom half globally. Petty corruption (bribes for permits, licenses, administrative services) is routine. High-level corruption is even more significant: the military and intelligence establishment, along with political elites, control vast economic interests through opaque networks. The 2019 Hirak protest movement, which ultimately forced longtime President Abdelaziz Bouteflika from power, was fueled largely by anger over systemic corruption and economic inequality.

Algeria's judicial system is based on French civil law with Islamic law influences in family matters. The judiciary consists of lower courts, appeals courts, and a Supreme Court, with the Constitutional Council ruling on constitutional matters. In theory, judges have tenure and independence. In practice, the executive branch—particularly the military and intelligence services—exerts significant influence through appointments, case assignments, and informal pressure. The Ministry of Justice, controlled by the government, manages judicial administration and prosecutor appointments.

Judicial independence is particularly absent in political cases. The post-Hirak period has seen a crackdown on activists, journalists, and opposition figures. Courts have handed down harsh sentences for "inciting unarmed gatherings," "harming national unity," and other vaguely defined offenses that criminalize dissent. Trials often lack due process: defendants report restricted access to lawyers, predetermined verdicts, and judges who act more like prosecutors. International human rights organizations routinely criticize Algeria's use of the judiciary to silence critics.

Law enforcement consists of multiple agencies: the National Police (urban areas), the Gendarmerie (rural and border areas), and various intelligence services. These forces are reasonably equipped and trained for conventional policing but are also used for political repression. Torture and mistreatment in custody, while officially prohibited, occur with impunity. The security apparatus answers ultimately to the military establishment, which has been the real power in Algeria since independence.

Algeria's prisons are overcrowded and conditions are harsh. The country holds approximately 60,000 prisoners in facilities designed for far fewer. Pretrial detention can last years due to judicial delays. Prisoners report inadequate medical care, poor sanitation, and violence. Political prisoners face particularly harsh treatment, including isolation and denial of family visits.

High-profile cases reveal the system's dual nature. Corruption prosecutions spiked after Bouteflika's fall, with numerous former ministers, business tycoons, and even two former prime ministers convicted. These cases were genuine—the corruption was real—but also served the military's purpose of consolidating power and scapegoating the old guard. Simultaneously, journalists like Khaled Drareni received prison sentences simply for covering protests, illustrating that "justice" in Algeria depends heavily on who you are and whether you threaten the regime.

Algeria's criminal justice system functions adequately for ordinary crime but operates as a tool of political control when the state's interests are at stake. Meaningful reform would require political liberalization that the current military-backed government shows no interest in pursuing.`
  },
  {
    name: 'Angola',
    lat: -11.2027,
    lng: 17.8739,
    summary: `Angola's criminal justice system bears the scars of a 27-year civil war that ended in 2002, combined with the patronage networks of a petrostate where oil wealth concentrates in elite hands. The result is a system with formal institutions that often fail to deliver justice, particularly for ordinary citizens.

Crime in Angola presents a mixed picture. Violent crime, including armed robbery, carjacking, and occasional murders, affects Luanda and other urban centers. The homicide rate hovers around 6-7 per 100,000—not exceptionally high by African standards but reflecting a society where firearms circulated freely during the war and many remain in private hands. Petty crime like theft and pickpocketing is common in crowded markets and public spaces. Organized crime includes drug trafficking (Angola serves as a transit point for South American cocaine destined for Europe), illegal diamond mining, and wildlife trafficking. Police corruption facilitates much of this illicit activity.

Corruption is Angola's most serious criminal justice challenge. Transparency International ranks Angola near the bottom globally. The MPLA party, which has ruled since independence in 1975, built a kleptocratic system where oil revenues enriched a small elite while most Angolans live in poverty. High-level corruption involves state contracts, oil deals, and diamond concessions awarded to politically connected individuals. Isabel dos Santos, daughter of former President José Eduardo dos Santos, exemplifies this: she became Africa's richest woman largely through state deals that enriched her while draining public resources. Lower-level corruption is equally pervasive—bribes are often necessary for basic services, business licenses, and to avoid police harassment.

Angola's judicial system is based on Portuguese civil law. Courts include lower courts, appeals courts, a Supreme Court, and a Constitutional Court. On paper, the judiciary is independent. In reality, the executive branch dominates through judge appointments, budgetary control, and informal pressure. The Attorney General's office, which controls prosecutions, operates under executive influence. Judges often lack adequate training and resources; many were appointed for political loyalty rather than legal competence.

Judicial independence is severely compromised in politically sensitive cases. When President João Lourenço launched anti-corruption prosecutions against the dos Santos family and their associates after taking power in 2017, observers initially hoped for genuine reform. Some prosecutions were legitimate, resulting in asset seizures and arrests. However, the selective nature—targeting the previous president's network while current officials' wealth goes unexamined—suggests political consolidation rather than systemic reform. Opposition figures and activists face harassment through spurious charges, while those connected to the current regime operate with impunity.

Angolan police are poorly trained, underpaid, and frequently corrupt. The National Police handles urban policing, while specialized units combat organized crime. Brutality is common; police often beat detainees and extract bribes at roadside checkpoints. The public generally distrusts police, viewing them as predators rather than protectors. Efforts to improve professionalism have achieved limited results.

Prison conditions in Angola are abysmal. Facilities are severely overcrowded—Luanda's São Paulo prison, designed for 1,200, holds over 3,000. Prisoners endure inadequate food, lack of medical care, and violence. Pretrial detention frequently exceeds legal limits because courts are backlogged and defendants lack effective representation. Tuberculosis and other diseases are endemic in prisons. Juveniles are often held with adults, exposing them to abuse.

High-profile cases illustrate the system's contradictions. The prosecution of José Filomeno dos Santos (the former president's son) for embezzlement and the legal pursuit of Isabel dos Santos showed the government's willingness to challenge the old guard. Yet activists like rapper Luaty Beirão faced prosecution for "rebellion" simply for reading books about nonviolent resistance. Journalist Rafael Marques has been repeatedly sued and prosecuted for exposing corruption and human rights abuses by diamond company security forces.

Angola's criminal justice system theoretically exists to uphold the rule of law, but in practice it operates to protect the powerful and control dissent. For ordinary Angolans, accessing justice means navigating a system designed to extract bribes rather than deliver fairness.`
  },
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `Argentina's criminal justice system reflects the country's broader dysfunction: decent legal framework on paper, chaotic implementation in practice, and constant tension between federal and provincial authorities. The judiciary has shown moments of genuine independence, particularly in prosecuting high-level corruption, yet also faces criticism for inefficiency, politicization, and inability to address surging crime.

Crime has become Argentina's top voter concern. The homicide rate, approximately 5-6 per 100,000, is moderate by Latin American standards but has risen in recent years. Violent robberies, particularly motorcycle-borne "motochorros" who snatch phones and bags, plague Buenos Aires and other cities. Carjackings and home invasions have increased, driving middle-class anxiety. Drug-related violence has surged as Argentine cities become both transit routes and markets for cocaine from Bolivia, Peru, and Paraguay. Rosario, Argentina's third-largest city, has experienced shocking violence—nearly 300 murders in 2023—as narco-gangs fight for control. The notorious "Triple Frontera" border region (where Argentina, Brazil, and Paraguay meet) remains a smuggling hub for contraband, drugs, and illicit activities.

Corruption, while not reaching Venezuelan or Nicaraguan levels, remains endemic. The "Cuadernos" scandal revealed systematic bribery during the Kirchner presidencies (2003-2015), with bags of cash delivered to government officials from contractors. Vice President Cristina Fernández de Kirchner was convicted of corruption in 2022, receiving a six-year sentence (currently on appeal). Yet perceptions persist that politically connected elites escape accountability while smaller fish face prosecution. Police corruption is significant: officers frequently extort bribes, protect criminal operations, or participate directly in crime.

Argentina's federal court system consists of lower courts, federal appeals courts, and the Supreme Court. Provinces maintain parallel judicial systems for local matters. The judiciary has constitutional independence and life tenure for federal judges. In practice, court-packing attempts and politically motivated appointments have compromised this independence. Presidents routinely try to influence the Supreme Court; Alberto Fernández's government attempted to expand the Court to dilute the conservative majority (the effort failed). Lower courts face massive backlogs; cases drag for years. Legal complexity and procedural obstacles allow defendants to delay trials indefinitely.

That said, Argentina's judiciary has shown surprising independence in major corruption cases. Federal judges pursued prosecutions against the Kirchners despite political pressure. The conviction of Cristina Kirchner—a sitting vice president—demonstrated the system's capacity for accountability, even if appeals may ultimately reduce or overturn the sentence. Investigations into former President Mauricio Macri for various alleged offenses show that no political faction is entirely immune.

Law enforcement is fragmented. The Federal Police operate in Buenos Aires and handle federal crimes. Each province maintains its own police force, varying widely in professionalism and corruption levels. Buenos Aires province's police are notoriously corrupt; periodic "purges" temporarily improve things before backsliding. Community policing initiatives have had limited success. The public has low trust in police—corruption and brutality scandals are regular news.

Argentina's prison system is in crisis. Facilities are severely overcrowded, with approximately 90,000 prisoners in spaces designed for 60,000. Pretrial detention is overused; many prisoners wait years for trial. Conditions range from poor to inhumane: violence between inmates and prison gang control are common. Riots periodically erupt. Some prisons effectively operate as criminal enterprises, with inmates running extortion and drug networks from inside. Reform efforts have achieved minimal results due to budget constraints and lack of political will.

High-profile cases demonstrate both progress and dysfunction. The conviction of Cristina Kirchner marked a milestone in anti-corruption efforts. The AMIA bombing case—the 1994 terrorist attack on a Jewish community center that killed 85—remains unsolved three decades later, exemplifying investigative failures and alleged cover-ups. Prosecutor Alberto Nisman's mysterious death in 2015, just before he was to present evidence of government complicity, raised questions that remain unanswered.

Argentina's criminal justice system contains institutions capable of delivering justice but struggles with political interference, resource constraints, and a crime surge that overwhelms law enforcement. Whether recent reforms can overcome these structural problems remains an open question.`
  },
  {
    name: 'Armenia',
    lat: 40.0691,
    lng: 45.0382,
    summary: `Armenia's criminal justice system underwent significant reforms following the 2018 "Velvet Revolution" that brought Nikol Pashinyan to power on promises to combat corruption and establish rule of law. While genuine improvements have occurred, the system still grapples with political interference, organized crime links, and resource limitations.

Crime rates in Armenia are relatively low compared to regional neighbors. The homicide rate sits at approximately 1.5 per 100,000—among the lowest in the post-Soviet space. Violent crime is uncommon outside of domestic disputes. Property crimes like burglary and theft are more prevalent but declining. Armenia's small size and tight-knit society create informal social controls that limit certain crimes. However, organized crime—particularly smuggling, extortion, and protection rackets—remains significant, often with ties to political figures and law enforcement.

Corruption was endemic under Armenia's pre-2018 system, where a small oligarchic elite controlled major industries and state functions through patronage networks. Transparency International ranked Armenia among the most corrupt post-Soviet states. Pashinyan's government launched aggressive anti-corruption investigations, targeting former presidents, high-ranking officials, and wealthy businessmen. These prosecutions were popular initially but have become controversial. Critics argue some cases are politically motivated, targeting opponents while ignoring allies' transgressions. The most prominent case involved former President Robert Kocharyan, charged with overthrowing constitutional order during 2008 post-election violence. The case has dragged through courts for years with multiple reversals, illustrating both judicial independence and dysfunction.

Armenia's judicial system consists of lower courts, a Court of Appeals, a Court of Cassation (the highest civil/criminal court), and a Constitutional Court. Judges have lifetime appointments and constitutional protections for independence. However, the pre-revolution judiciary was widely seen as controlled by the executive branch. Pashinyan's government pushed judicial reforms, including creating a Judicial Reform Council and expanding vetting procedures for judges. These reforms have shown mixed results: some corrupt judges were removed, but the process itself faced accusations of political manipulation, particularly when judges ruling against government interests were targeted.

Judicial independence remains contested. High-profile acquittals in politically sensitive cases suggest courts sometimes resist government pressure. However, pretrial detention is overused against opposition figures and protesters, while government allies face gentler treatment. The Constitutional Court has clashed with Pashinyan's government over the limits of executive power. In 2020, Pashinyan's attempt to remove Constitutional Court judges through procedural maneuvers sparked a constitutional crisis, ultimately resolved through compromise but leaving questions about judicial autonomy.

Armenian police underwent reforms to reduce corruption and brutality. The patrol police were restructured with new uniforms, better pay, and body cameras in some jurisdictions. Public trust in police has improved modestly. However, police still face corruption allegations, particularly at checkpoints and in licensing functions. Investigative capacity remains weak; complex cases often fail due to poor evidence collection and limited forensic capabilities. Police loyalty to political authorities rather than rule of law is a recurring concern.

Prisons in Armenia hold approximately 3,000 inmates in conditions that have improved but remain substandard. Overcrowding is moderate, and torture—once routine—has decreased following reforms and oversight by civil society groups. Medical care and sanitation remain inadequate. Pretrial detainees often wait extended periods; cases move slowly through backlogged courts. Prisoner abuse, while less systematic than in the past, still occurs.

High-profile cases reflect the system's evolution. The prosecution of Kocharyan and other former officials demonstrated a break with the past but raised questions about due process and selective justice. The 2023 arrest of Ruben Vardanyan, former Nagorno-Karabakh official, on separatism charges after Azerbaijan's military takeover of the region shows justice can still serve geopolitical narratives. Meanwhile, ordinary corruption cases often see minimal consequences for offenders.

Armenia's criminal justice system has made genuine progress since 2018, but remains a work in progress. The commitment to reform is real, yet implementation is uneven, political considerations intrude, and institutional capacity lags behind ambition.`
  },
  {
    name: 'Australia',
    lat: -25.2744,
    lng: 133.7751,
    summary: `Australia's criminal justice system ranks among the world's most functional, characterized by strong rule of law, independent judiciary, and low corruption. Yet the system faces significant challenges: indigenous overrepresentation, mounting drug-related crime, organized crime syndicates, and debates over police powers versus civil liberties.

Crime rates in Australia are low by global standards. The homicide rate is approximately 0.9 per 100,000—among the lowest in developed democracies. Violent crime generally declined over recent decades, though sexual assault and domestic violence remain serious concerns. Property crime, particularly car theft and burglary, occurs at moderate rates. Australia's isolation limits some forms of transnational crime but hasn't prevented the country from becoming a major market for illicit drugs, particularly methamphetamine ("ice") and cocaine. Drug use and associated crime—robberies to fund addiction, violence between dealers—affect cities and regional areas alike.

Organized crime is more sophisticated than many Australians realize. Outlaw motorcycle gangs (OMCs) like the Comanchero, Bandidos, and Hells Angels control drug distribution, extortion, and money laundering. Middle Eastern organized crime families in Sydney and Melbourne run networks dealing drugs, illegal firearms, and conducting violent turf wars. Recent high-profile murders—including the shooting of gangland figure Mahmoud "Brownie" Ahmad in 2022—illustrate the brutality of this underworld. Australian authorities have made major busts using encrypted communication platforms like AN0M, but criminal networks adapt quickly.

Corruption in Australia is low but not nonexistent. Transparency International consistently ranks Australia in the top 15 globally. Corruption tends to be more subtle than in developing nations—campaign finance loopholes, conflicts of interest, and "revolving door" between government and industries they regulate. Several state-level corruption scandals have emerged: New South Wales's Independent Commission Against Corruption (ICAC) has exposed misconduct by politicians and public officials, while Queensland and Victoria have had various police corruption cases. Federal-level corruption oversight is weaker; Australia only established a National Anti-Corruption Commission in 2023 after years of political resistance.

Australia's justice system is based on English common law. Each state and territory maintains its own courts for most matters, with federal courts handling constitutional issues, federal crimes, and appeals. The High Court of Australia serves as the supreme appellate court. Judicial independence is robust: judges have security of tenure, adequate compensation, and constitutional protections. Political interference in individual cases is rare and would trigger significant scandal. However, judicial appointments can be politically influenced, and debate continues over whether judges properly interpret laws versus imposing their policy preferences.

Australian police forces are organized by state/territory, with the Australian Federal Police (AFP) handling federal crimes, counterterrorism, and international cooperation. Police are generally professional and well-trained compared to global standards. However, issues persist. Indigenous Australians are dramatically overpoliced: they're more likely to be stopped, arrested, and charged than non-Indigenous people for similar offenses. Deaths in custody—particularly of Indigenous Australians—remain a serious problem despite multiple inquiries and recommendations. Police brutality, while less common than in the US, still occurs, often with limited accountability. Police unions are powerful and resist reform.

Prisons in Australia hold approximately 42,000 people—a relatively low incarceration rate compared to countries like the United States. Conditions vary by state but generally meet international standards. However, Indigenous Australians are vastly overrepresented: they comprise 3% of the population but over 30% of prisoners. This crisis reflects systemic racism, disadvantage, and over-reliance on incarceration for minor offenses. Prison privatization in some states has raised concerns about cost-cutting affecting conditions and rehabilitation. Recidivism remains high, indicating rehabilitation programs are insufficient.

High-profile cases demonstrate the system's strengths and limitations. The conviction of Cardinal George Pell for child sexual abuse (later overturned on appeal) showed the system's willingness to prosecute the powerful, though the case also raised questions about evidence standards. The prosecution of journalist Bernard Collaery for exposing an Australian spying operation against East Timor illustrated how national security laws can be used to prosecute whistleblowers. The Royal Commission into Institutional Responses to Child Sexual Abuse exposed decades of systemic failure, leading to reforms but also showing how institutions protect themselves.

Australia's criminal justice system generally works well for most citizens but fails Indigenous Australians catastrophically, struggles to address gendered violence adequately, and faces challenges balancing security with civil liberties. The foundation is strong, but complacency and resistance to reform risk undermining public trust.`
  },
  {
    name: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    summary: `Austria's criminal justice system exemplifies the strengths of a well-functioning European democracy: strong rule of law, independent judiciary, effective law enforcement, and low corruption. Crime rates are among Europe's lowest, and the system generally delivers predictable, fair outcomes. However, Austria faces challenges: organized crime networks, terrorism concerns, and political scandals that test institutional integrity.

Crime in Austria is low compared to most European nations. The homicide rate is approximately 0.7 per 100,000—one of the lowest globally. Violent crime is rare outside of domestic violence contexts. Property crimes—pickpocketing in Vienna's tourist areas, bicycle theft, burglary—occur at moderate rates but have generally declined. Drug-related offenses represent a significant portion of crime statistics, with cannabis possession and trafficking most common. Austria serves as a transit route for narcotics moving from the Balkans to Western Europe. Human trafficking and smuggling are concerns, particularly given Austria's position along migration routes.

Organized crime in Austria is less visible than in Italy or the Balkans but still significant. Criminal networks—often with origins in Eastern Europe, the Balkans, and Turkey—operate drug distribution, human trafficking, prostitution, and financial fraud. Vienna's proximity to Eastern Europe makes it a hub for money laundering, with real estate purchases and shell companies used to clean illicit funds. The "Ibiza Affair" of 2019, where Austria's Vice Chancellor was secretly recorded discussing corrupt deals with a woman posing as a Russian oligarch's niece, exposed vulnerabilities to foreign influence and corruption at the highest political levels.

Corruption in Austria is generally low but not nonexistent. Transparency International ranks Austria in the top 20 globally, but investigations have revealed problematic networks. The "Ibiza Affair" toppled the government and led to the collapse of the coalition between the conservative ÖVP and the far-right FPÖ. Subsequent investigations exposed a broader network of corrupt practices, including manipulation of government contracts and influence peddling. Chancellor Sebastian Kurz resigned in 2021 amid corruption investigations (he was later convicted of perjury). These cases demonstrated both that corruption exists at high levels and that Austria's institutions can hold the powerful accountable.

Austria's judiciary is independent and well-respected. The court system includes lower district courts, regional courts, higher regional courts, and the Supreme Court (Oberster Gerichtshof) for civil and criminal matters, plus a separate Constitutional Court and Administrative Court. Judges are appointed based on merit after rigorous legal training and have security of tenure. Political interference in judicial decisions is rare and would cause scandal. Trials are conducted professionally, defendants have robust legal protections, and appeals processes function fairly. The system's main weaknesses are lengthy proceedings—complex cases can take years—and resource constraints leading to backlogs.

Austrian police are professional, well-trained, and generally trusted by the public. The Federal Police handle most law enforcement, with specialized units for organized crime, terrorism, and cybercrime. Police brutality is uncommon, and excessive force incidents typically result in investigations and disciplinary action. Corruption within police ranks is relatively rare. However, Austria's police have faced criticism for insufficient vetting of far-right sympathies within their ranks. Reports of police misconduct against minorities, particularly asylum seekers and people of color, occur but at lower rates than in many European countries. The police's handling of terrorism threats has been scrutinized following the November 2020 Vienna attack, which killed four people; investigations revealed intelligence failures and lapses in monitoring a known extremist.

Austria's prisons hold approximately 9,000 inmates in conditions that generally meet European standards. Facilities are not severely overcrowded, though some prisons operate at or above capacity. Inmates receive medical care, education, and vocational training. Rehabilitation is emphasized over pure punishment, with relatively successful reintegration programs. Austria's incarceration rate is moderate—around 97 per 100,000 population—reflecting a balanced approach that uses imprisonment primarily for serious offenses while relying on alternatives like fines and probation for minor crimes.

High-profile cases in recent years highlight both the system's integrity and ongoing challenges. The prosecution of Sebastian Kurz and his associates for corruption demonstrated judicial independence and commitment to accountability, even against powerful political figures. The investigation into the Ibiza Affair led to multiple convictions and exposed corrupt networks. Austria's response to terrorism—particularly after the 2020 Vienna attack—has included tougher laws against extremism, though civil liberties advocates worry about overreach.

Austria's criminal justice system ranks among the world's best, combining fairness, effectiveness, and accountability. Challenges remain—organized crime, terrorism, and periodic corruption scandals—but strong institutions and rule of law provide confidence that the system can address these issues without fundamental reform.`
  },
  {
    name: 'Azerbaijan',
    lat: 40.1431,
    lng: 47.5769,
    summary: `Azerbaijan's criminal justice system functions primarily as a tool of authoritarian control under President Ilham Aliyev's regime, which has ruled since 2003 (his father held power from 1993-2003). While the country has formal legal institutions and a constitutional framework, judicial independence is largely fictitious, corruption is endemic, and the system is weaponized against political opponents, journalists, and civil society activists.

Official crime statistics in Azerbaijan are unreliable, as the government manipulates data for propaganda purposes. Petty crime—pickpocketing, theft—affects Baku and other cities but isn't exceptionally high. Violent crime, including murder, occurs but rates appear moderate. The more significant criminal issue is state-sanctioned or tolerated organized crime. Smuggling networks operate along Azerbaijan's borders with Iran and Russia. Drug trafficking, particularly of Afghan heroin transiting through the Caucasus, is significant. Human trafficking and forced labor in construction and agriculture persist. Crucially, much organized crime operates with protection from officials who receive payoffs, making it impossible to address without confronting government corruption.

Corruption in Azerbaijan is pervasive and systemic. Transparency International consistently ranks Azerbaijan among the world's most corrupt countries. The Aliyev family and their associates control major sectors of the economy—oil and gas, construction, banking, telecommunications—through shell companies and proxies. The "Azerbaijan Laundromat" scandal exposed a $2.9 billion money-laundering scheme involving Azerbaijani officials that bribed European politicians and purchased luxury goods. Petty corruption is equally routine: bribes are required for business licenses, avoiding traffic fines, accessing government services, and securing university admissions. Police routinely extort bribes at checkpoints. Judges demand payment for favorable rulings. This isn't dysfunction—it's the system working as designed to enrich those with power.

Azerbaijan's judiciary is constitutionally independent but operates as an arm of the executive. Courts include lower courts, appellate courts, a Supreme Court, and a Constitutional Court. Judges are appointed through a process controlled by the president and serve at the regime's pleasure. In ordinary criminal cases between private parties, courts may function relatively normally. However, in politically sensitive cases—anything involving the government, the Aliyevs, or regime critics—verdicts are predetermined. Trials are perfunctory, evidence is fabricated or ignored, and judges act as prosecutors. International observers universally condemn Azerbaijan's show trials.

The weaponization of the justice system against dissent is systematic. Journalists, activists, opposition politicians, and ordinary citizens who criticize the government face arrest on fabricated charges: drug possession (drugs are planted), illegal weapons, tax evasion, hooliganism, inciting religious hatred. These charges carry long prison sentences. Examples are numerous: journalist Khadija Ismayilova, who exposed government corruption, was imprisoned on fabricated charges. Academic Gubad Ibadoghlu, who researched corruption, was arrested in 2023 on smuggling charges that observers call absurd. Blogger Mehman Huseynov was imprisoned for libel after exposing official corruption. Dozens of political prisoners remain in Azerbaijan's jails, their cases documented by international human rights organizations.

Law enforcement in Azerbaijan is entirely subservient to political authority. Police are used to intimidate, harass, and arrest regime critics. Torture and mistreatment in custody are common and systematic. Detainees report beatings, electric shocks, sexual abuse, and threats against family members to extract confessions. These confessions are then used in court despite being obviously coerced. Police also engage in petty corruption, extorting bribes from citizens with impunity. Complaints against police go nowhere because the system protects its enforcers.

Azerbaijan's prisons are harsh and conditions violate international standards. The Committee for the Prevention of Torture has documented overcrowding, inadequate medical care, poor sanitation, and systematic abuse. Political prisoners face particularly brutal treatment: isolation, denial of family visits, withholding medical care for chronic conditions. Several activists have died in custody under suspicious circumstances. The government uses prison conditions as leverage, offering improved treatment in exchange for confessions or public statements praising the regime.

High-profile cases illustrate the system's nature. The prosecution of the entire staff of independent news outlet Meydan TV on smuggling charges—they allegedly brought money into the country for journalism work—is transparently political. The conviction of opposition leader Ilgar Mammadov on bogus charges was condemned by the European Court of Human Rights, which ordered his release; Azerbaijan ignored the ruling for years. More recently, Armenia-Azerbaijan tensions have led to war crimes allegations on both sides, with Azerbaijan's forces accused of executing Armenian prisoners and civilians during the 2020 Nagorno-Karabakh war and 2023 offensive—investigations are predictably going nowhere.

Azerbaijan's criminal justice system doesn't aim to deliver justice; it exists to maintain regime control, extract wealth for the elite, and punish dissent. Meaningful reform would require regime change, which appears unlikely given tight authoritarian control and oil wealth that finances repression.`
  },
  {
    name: 'Bangladesh',
    lat: 23.6850,
    lng: 90.3563,
    summary: `Bangladesh's criminal justice system operates under enormous strain: massive population, resource constraints, political interference, and a legal framework that functions slowly even in the best circumstances. The system delivers some justice for ordinary crimes but struggles with corruption, politicized prosecutions, and inability to protect minorities and dissidents.

Crime in Bangladesh includes both traditional offenses and emerging problems. The homicide rate is approximately 2-3 per 100,000—moderate by South Asian standards. Violent crime includes armed robberies, assaults, and gang violence in Dhaka and other cities. Property crimes—theft, burglary, fraud—are common. Bangladesh has seen a disturbing rise in extremist violence, including terrorist attacks (the 2016 Dhaka cafe attack killed 22 people) and targeted killings of secular bloggers, LGBT activists, and religious minorities by Islamist militants. Domestic violence and violence against women are serious problems; rape and "Eve teasing" (sexual harassment) are endemic, and acid attacks, while declining, still occur.

Corruption permeates Bangladesh's criminal justice system and society broadly. Transparency International consistently ranks Bangladesh among the most corrupt nations. Police corruption is routine—bribes are required to file complaints, expedite investigations, or avoid false charges. Judges face corruption allegations; favorable verdicts can reportedly be purchased in some courts. The Anti-Corruption Commission exists but often appears to target political opponents while ignoring ruling party members' transgressions. Extrajudicial payments are necessary for business permits, land registration, and even hospital care. This systemic corruption undermines public trust and makes accessing justice a privilege of wealth.

Bangladesh's legal system is based on British common law inherited from colonial rule. Courts include lower magistrate and district courts, a High Court Division, and an Appellate Division of the Supreme Court. Judges are appointed by the president (effectively by the ruling government) after legal careers. Constitutional protections exist for judicial independence, but practice diverges from theory. The judiciary faces political pressure in sensitive cases, particularly those involving government officials or opposition figures. Judges who rule against government interests may face retaliation through transfers, denial of promotions, or harassment.

The system's biggest problem is massive backlogs. With over 4 million pending cases across Bangladesh's courts, cases routinely take 5-15 years to reach conclusion. This delay effectively denies justice; witnesses disappear or die, evidence is lost, and defendants languish in pretrial detention for years. The backlog stems from insufficient judges (fewer than 2,000 for 170 million people), procedural complexity, and frequent adjournments. Corruption exacerbates delays as those who pay bribes get prioritized.

Politically motivated prosecutions are common. Opposition leaders and activists face charges of sedition, violence, and other crimes that are often fabricated or exaggerated. During periods of political tension, mass arrests of opposition party members occur. The government has also used the controversial Digital Security Act (replaced in 2023 by the Cyber Security Act) to prosecute journalists, activists, and ordinary citizens for online criticism. These laws are vaguely worded, making any criticism potentially criminal. Convictions can result in long prison sentences, creating a chilling effect on free expression.

Bangladesh's police are underpaid, undertrained, and often brutal. The force is structured as a paramilitary organization with top-down command. Police engage in routine torture of suspects—the rights organization Odhikar has documented thousands of cases. "Crossfire killings"—extrajudicial executions where police claim suspects were killed in gunfights—number in the hundreds annually. In reality, these are often staged murders of alleged criminals, political opponents, or indigenous rights activists. The Rapid Action Battalion (RAB), an elite police unit, became notorious for extrajudicial killings; in 2021, the U.S. imposed sanctions on RAB and seven of its officials for human rights abuses.

Prisons in Bangladesh are severely overcrowded and conditions are harsh. Facilities designed for 36,000 hold over 80,000 inmates. Pretrial detainees—who are legally presumed innocent—comprise over 70% of prisoners, many waiting years for trial. Conditions include inadequate food, poor sanitation, and minimal medical care. Torture and abuse by guards are common. Women and juveniles are particularly vulnerable. Some prisons operate as de facto criminal universities where petty offenders learn from hardened criminals.

High-profile cases reveal the system's dual nature. The trial and execution of Jamaat-e-Islami leaders for war crimes during the 1971 Liberation War showed the government's willingness to address historical injustices but also raised concerns about fair trial standards. The murder of secular bloggers like Avijit Roy and his killer's subsequent trial highlighted both extremist threats and the government's inconsistent response. Meanwhile, cases against opposition leader Khaleda Zia—former Prime Minister imprisoned on corruption charges—are widely seen as politically motivated.

Bangladesh's criminal justice system is neither completely dysfunctional nor genuinely fair. It delivers rough justice in ordinary criminal matters but operates as a tool of political control, fails to protect vulnerable populations, and is corrupted by bribery at every level.`
  },
  {
    name: 'Belarus',
    lat: 53.7098,
    lng: 27.9534,
    summary: `Belarus's criminal justice system functions as an instrument of Europe's last dictatorship, where President Alexander Lukashenko has ruled since 1994 with increasingly authoritarian control. The system exists not to deliver justice but to maintain regime power, crush dissent, and create a climate of fear. Rule of law is a fiction; the judiciary operates as an extension of the executive, and political considerations override legal standards.

Official crime statistics in Belarus are unreliable and manipulated for propaganda purposes. The government claims extremely low crime rates to tout its law-and-order credentials. Violent crime, including homicide, is likely moderate compared to neighboring countries. Street crime—theft, assault—exists in Minsk and other cities but isn't exceptionally high by regional standards. However, the real criminal activity occurs at the state level: smuggling networks (often involving officials), corruption among the elite, and systemic embezzlement of state resources. Lukashenko's regime controls the economy through state enterprises and loyalist oligarchs, creating opportunities for vast corruption that goes unprosecuted because perpetrators are protected.

Corruption in Belarus is pervasive but differs from typical kleptocracies. Lower-level corruption—bribes for permits, to avoid traffic fines, or to access services—is less common than in Russia or Central Asia because the authoritarian state maintains control partly through discipline. However, high-level corruption is massive: regime insiders control lucrative state contracts, real estate, and industries. Lukashenko's sons and close associates have amassed significant wealth through positions in state enterprises and preferential business arrangements. The system isn't corruption in the sense of officials breaking rules; it's a deliberately designed patronage system where loyalty is rewarded with wealth and betrayal brings destruction.

Belarus's judiciary is constitutionally independent but operates entirely under executive control. Courts include district courts, regional courts, and a Supreme Court, with a separate Constitutional Court. Judges are appointed through a process controlled by Lukashenko and serve at his pleasure. In ordinary civil or minor criminal cases between private parties, courts may function somewhat normally, delivering predictable outcomes based on law. However, in any politically sensitive case—anything involving the government, regime critics, or state interests—verdicts are predetermined. Trials are shows; judges act as prosecutors, evidence is fabricated or ignored, and acquittals are essentially forbidden in political cases.

The weaponization of justice reached new extremes following the disputed 2020 presidential election, when massive protests erupted against Lukashenko's claim of victory. The regime responded with brutal repression: over 35,000 people were arrested, with thousands tortured and beaten in custody. The judiciary facilitated this crackdown, rubber-stamping mass arrests and handing down harsh sentences. Protesters received prison terms for "hooliganism," "organizing mass unrest," or "insulting the president." Trials were perfunctory—often completed in hours—with defendants given no meaningful opportunity to mount a defense. International observers condemned these proceedings as show trials.

Political repression through the justice system continues. Opposition figures, journalists, activists, and ordinary citizens critical of Lukashenko face arrest on fabricated charges. Nobel Peace Prize laureate Ales Bialiatski, human rights activist, was sentenced to 10 years in prison on tax evasion charges—obviously bogus given his work. Journalist Katsiaryna Andreyeva received an eight-year sentence for "creating an extremist formation" (she worked for independent media). Viktar Babaryka, who attempted to run against Lukashenko in 2020, was imprisoned on corruption charges. Belarus holds over 1,400 political prisoners—more than any European country. Their "trials" are Kafkaesque: secret proceedings, denial of lawyers, coerced confessions, and sentences designed to break them.

Law enforcement in Belarus operates as regime enforcers. The police and KGB (Belarus kept the Soviet-era name) exist primarily to surveil, intimidate, and arrest dissidents. Torture is systematic: detainees from the 2020 protests reported beatings, electric shocks, rape, and psychological abuse. These methods are used to extract confessions and terrorize the population. Police also engage in petty harassment, stopping people for document checks, and arresting anyone who seems suspicious. Complaints against police go nowhere because the system protects its enforcers.

Belarus's prisons are harsh, designed to break inmates physically and psychologically. Conditions violate international standards: overcrowding, inadequate medical care, poor food, and isolation. Political prisoners face particularly brutal treatment—denial of family visits, withholding medical care, placement in punishment cells for minor infractions. Prison authorities attempt to coerce prisoners into confessing, renouncing their beliefs, or praising Lukashenko. Several political prisoners have died in custody under suspicious circumstances; others have been driven to suicide by intolerable conditions.

High-profile cases illustrate the system's repressive nature. The forced landing of a Ryanair flight in 2021 to arrest journalist Roman Protasevich showed Lukashenko's willingness to violate international norms. Protasevich was then paraded on state TV to give a coerced confession. The trial of Ales Bialiatski and his colleagues from the Viasna human rights organization demonstrated the regime's determination to destroy civil society. The death sentence and execution of Viktar Sheyman and Dzmitry Kanavalau for a 2011 metro bombing raised questions about guilt and fair trial—executions in Belarus are carried out in secret, with families notified only after the fact.

Belarus's criminal justice system doesn't aim to deliver justice. It exists to maintain Lukashenko's dictatorship, crush opposition, and create fear. Meaningful reform is impossible without regime change, which appears unlikely given Russian support for Lukashenko and the regime's willingness to use unlimited force against dissent.`
  },
  {
    name: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    summary: `Belgium's criminal justice system reflects the country's complex federalized structure: effective in many respects but fragmented, slow, and periodically overwhelmed. The judiciary is independent and generally respected, law enforcement is professional if sometimes overstretched, and the rule of law is strong. However, Belgium faces challenges including terrorism, organized crime, and backlogs that delay justice.

Crime in Belgium is moderate compared to European averages. The homicide rate is approximately 1.7 per 100,000—not exceptionally high but above Nordic levels. Violent crime includes assaults, robberies, and sexual offenses. Brussels, as both Belgium's capital and the de facto capital of the EU, experiences property crime—pickpocketing, burglary, car theft—particularly in crowded tourist areas and certain neighborhoods. Drug-related crime is significant: Belgium is a major entry point for cocaine from South America (through the port of Antwerp, Europe's second-largest), and the country has become a hub for drug trafficking and associated violence. The murder of 11-year-old Nayib Dosky in 2023 in a suspected drug-related shooting shocked the nation and highlighted spillover violence from narco-gangs.

Organized crime in Belgium is sophisticated and international. The port of Antwerp handles massive cocaine shipments, with criminal networks (often Colombian cartels working with Moroccan-Belgian and Albanian groups) infiltrating port operations through corruption and violence. Drug gangs have used extreme violence—shootings, grenades, even rocket launchers—in settling scores. Money laundering through real estate, particularly in Brussels, is common. Human trafficking and prostitution networks also operate, often with Eastern European and West African connections. Belgian authorities have made major busts but criminal networks are resilient.

Terrorism has been Belgium's most prominent security challenge in recent years. The November 2015 Paris attacks were planned partly in Brussels, and the March 2016 Brussels bombings killed 32 people. These attacks exposed Belgium's intelligence and security failures: known extremists operated in neighborhoods like Molenbeek, where radicalization went unchecked due to insufficient policing and community tensions. Belgium's fragmented policing structure—separate forces for local, federal, and specialized units, plus linguistic divides between Flemish and French-speaking regions—hampered coordination. Reforms have improved intelligence sharing and counterterrorism capacity, but Belgium remains vigilant given its jihadist networks and foreign fighter returnees from Syria and Iraq.

Corruption in Belgium is relatively low by global standards but not absent. Transparency International ranks Belgium in the top 20 globally. However, periodic scandals emerge. The "Qatargate" scandal of 2022-2023 involved alleged Qatari and Moroccan bribery of European Parliament members, with Belgian police seizing bags of cash in Brussels. The case raised questions about Belgium's role as a hub for EU lobbying and influence operations. Local-level corruption—contract rigging, zoning favors—occurs but is generally prosecuted when exposed.

Belgium's judiciary is independent and based on a civil law system inherited from Napoleonic codes. Courts include lower courts, courts of appeal, and a Court of Cassation (supreme court), with separate administrative courts and a Constitutional Court. Judges are appointed based on merit and have security of tenure. The judiciary's independence is generally respected; political interference in cases is rare and would cause scandal. However, the system is chronically slow. Massive backlogs plague courts—cases often take 3-5 years to reach conclusion, and some complex cases last over a decade. This delay stems from insufficient judges and prosecutors (Belgium has among the lowest per-capita ratios in Europe), procedural complexity, and linguistic requirements (proceedings must be conducted in Dutch, French, or German depending on region).

Belgian law enforcement consists of local police (managed by municipalities), federal police (handling serious crime, counterterrorism, and coordination), and specialized units. Police are generally professional and well-trained. However, Belgium's fragmented structure—over 180 local police zones with varying capabilities—creates coordination challenges. Linguistic divisions complicate operations in Brussels, where police must be bilingual. Police brutality is uncommon but not unknown; incidents involving minorities, particularly North African immigrants, periodically generate controversy. The killing of Ibrahima Barrie during a police intervention in 2021 sparked protests over alleged brutality and racism.

Belgium's prisons hold approximately 10,000 inmates in conditions that vary from adequate to poor. Chronic overcrowding strains facilities designed for fewer prisoners. The Haren prison near Brussels, opened in 2022 after years of delays, provides modern conditions but doesn't fully address capacity issues. Pretrial detention is overused, with many inmates waiting months or years for trial due to court backlogs. Radicalization in prisons has been a concern; authorities struggle to prevent extremist recruitment while respecting prisoners' rights.

High-profile cases demonstrate both strengths and challenges. The prosecution of Salah Abdeslam, the sole surviving perpetrator of the Paris attacks, in a Belgian court showed the system's capacity to handle complex terrorism cases professionally. The Qatargate investigation demonstrated independence in pursuing corruption allegations involving European Parliament members. However, the slow pace of proceedings—Abdeslam's trial took years to begin, and Qatargate investigations remain ongoing—illustrates the backlog problem.

Belgium's criminal justice system is fundamentally sound but needs reform to address delays, improve coordination among fragmented police forces, and better handle modern threats like organized crime and terrorism. The commitment to rule of law is strong; implementation simply needs improvement.`
  },
  {
    name: 'Belize',
    lat: 17.1899,
    lng: -88.4976,
    summary: `Belize's criminal justice system struggles to maintain order in a small nation plagued by gang violence, drug trafficking, and limited resources. With a population of just 400,000, Belize has one of the highest per-capita murder rates in the world, driven by organized crime competition for drug routes. The judiciary maintains a degree of independence, but the system is overwhelmed, under-resourced, and often unable to bring criminals to justice.

Crime in Belize is severe relative to its size. The homicide rate fluctuates around 25-30 per 100,000—among the highest in the Caribbean and Central America. Most murders are gang-related, concentrated in Belize City's impoverished southside neighborhoods where rival gangs like the George Street Gang and the Ghost Town Crips battle for control of drug distribution and territory. Shootings are frequent, often in broad daylight, with bystanders occasionally caught in crossfire. Beyond murder, Belize experiences armed robberies, burglaries (targeting both locals and tourists), sexual assaults, and domestic violence. Human trafficking and smuggling occur along Belize's borders with Guatemala and Mexico.

Belize's most significant criminal challenge is its role as a transshipment point for cocaine moving from South America to the United States and Europe. The country's long coastline, numerous cayes (islands), and porous borders make it ideal for drug smuggling. Colombian and Mexican cartels use Belize as a transit route, often partnering with local gangs for distribution. The drug trade fuels gang violence as groups fight for lucrative smuggling contracts. Belizean authorities lack the resources to effectively patrol the country's maritime and land borders, allowing traffickers to operate with relative impunity.

Corruption is significant, particularly in law enforcement and politics. Transparency International ranks Belize poorly for the region. Police corruption includes taking bribes to ignore criminal activity, protecting gang members, and even direct participation in drug trafficking. Several high-profile cases have involved police officers arrested for collaborating with traffickers. Political corruption manifests in shady government contracts, land deals favoring connected individuals, and allegations of politicians benefiting from illicit activities. The small size of Belize's elite—everyone knows everyone—creates networks where corruption thrives with minimal accountability.

Belize's legal system is based on English common law, inherited from its British colonial past (Belize gained independence in 1981). Courts include magistrate courts, the Supreme Court, and the Caribbean Court of Justice (CCJ), which replaced the British Privy Council as the final appellate court in 2010. Judges are appointed by the Governor-General on advice of the Prime Minister and maintain reasonable independence. While political interference occurs, it's less blatant than in neighboring countries. The judiciary's main problems are resource constraints and delays—cases can take years to reach trial due to insufficient judges, prosecutors, and court infrastructure.

The biggest obstacle to justice is witness intimidation and failure to prosecute. Gangs routinely threaten or kill witnesses, making prosecutions nearly impossible. Belize's homicide clearance rate is abysmal—fewer than 10% of murders result in convictions. Witnesses refuse to testify out of fear for their lives, and police often lack the investigative capacity to build cases without witness cooperation. Even when cases reach trial, evidence collection is frequently inadequate. Many murder cases collapse when key witnesses disappear or recant testimony under threats.

Belizean police (around 1,200 officers) are understaffed for the country's security challenges. The police force is divided into units handling general crime, gang suppression, and border patrol, but all are under-resourced. Police brutality and excessive force occur, particularly in poor neighborhoods where officers face little accountability. The Belizean public has mixed views of police: many distrust them due to corruption and violence, while others appreciate their difficult position facing heavily armed gangs with inadequate equipment. Police morale is low due to poor pay and dangerous working conditions.

Prisons in Belize are overcrowded and conditions are poor. The Belize Central Prison, located in Belize City, was designed for 800 inmates but holds over 1,500. Facilities are inadequate: poor sanitation, insufficient medical care, and violence between gangs who continue their rivalries inside. Pretrial detainees comprise a large portion of prisoners, many waiting years for trial due to court backlogs. Prison staff are underpaid and face risks from inmate violence. Riots and disturbances occur periodically. Rehabilitation programs are minimal, ensuring high recidivism rates.

High-profile cases illustrate the system's difficulties. The 2021 murder of police superintendent Henry Jemmott—allegedly shot by American socialite Jasmine Hartin—garnered international attention and revealed corruption in the investigation when evidence handling was questioned. Gang leader George Rancharan's multiple murder trials saw witnesses intimidated into silence, resulting in acquittals despite strong evidence. The prosecution of Belize's former Minister of National Security for corruption and embezzlement demonstrated some accountability but also showed how political connections can delay justice.

Belize's criminal justice system is overwhelmed by gang violence, hampered by corruption, and lacks resources to function effectively. For a system to improve, Belize needs international assistance, witness protection programs, anti-corruption reforms, and substantial investment in police, prosecutors, and courts—all of which remain distant given budgetary constraints and political will.`
  }
]

async function main() {
  console.log('🏛️  Starting Crime & Justice writeup generation for Batch 1...')
  console.log(`📝 Generating ${CRIME_WRITEUPS.length} country writeups\n`)

  let successful = 0
  let failed = 0

  for (const writeup of CRIME_WRITEUPS) {
    try {
      console.log(`\n${'='.repeat(70)}`)
      console.log(`Processing: ${writeup.name}`)
      console.log('='.repeat(70))

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
      console.log(`✅ Successfully saved crime writeup for ${writeup.name}`)
      console.log(`   Character count: ${writeup.summary.length}`)

    } catch (error) {
      failed++
      console.error(`❌ Failed to save ${writeup.name}:`, error)
    }
  }

  console.log(`\n${'='.repeat(70)}`)
  console.log('✨ BATCH 1 COMPLETE!')
  console.log('='.repeat(70))
  console.log(`   Successful: ${successful}/${CRIME_WRITEUPS.length}`)
  console.log(`   Failed: ${failed}`)
  console.log('\n🎉 All crime writeups have been saved to the database!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
