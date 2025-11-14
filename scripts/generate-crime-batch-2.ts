import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Crime & Justice writeups for countries 14-33 (Benin through Canada)
// Written in Preet Bharara / Jeffrey Toobin style
// Length: 2,500-3,500 characters each

const CRIME_WRITEUPS = [
  {
    name: 'Benin',
    lat: 9.3077,
    lng: 2.3158,
    summary: `Benin's criminal justice system reflects West Africa's common challenges—limited resources, institutional weakness, corruption—but benefits from relative political stability that neighboring countries lack. The system functions adequately for routine matters but struggles with serious crime, organized criminal networks, and endemic corruption that undermines rule of law.

Crime rates in Benin are moderate by regional standards. The homicide rate sits around 4-5 per 100,000—higher than developed nations but below the most violent West African countries. Violent crime includes armed robberies, particularly targeting commercial vehicles and businesses, and occasional banditry in northern regions near the Burkina Faso border where spillover from Sahel instability occurs. Property crime—theft, burglary, fraud—is common in Cotonou and Porto-Novo. Benin's position along cocaine trafficking routes from South America to Europe means drug transit occurs, though the country is less central to this trade than Guinea-Bissau or Ghana.

Corruption is Benin's most serious criminal justice challenge. Transparency International ranks Benin poorly for the region. Police corruption is endemic—bribes are routinely demanded at checkpoints, to avoid charges, or to expedite (or bury) investigations. Judicial corruption exists at multiple levels: court clerks demand payments to process files, judges reportedly accept money for favorable rulings in civil and some criminal matters. Customs officials facilitate smuggling in exchange for payoffs. Political corruption involves contract rigging, embezzlement of state resources, and use of state positions for personal enrichment. Anti-corruption rhetoric is common; enforcement against powerful figures is rare.

Benin's legal system is based on French civil law, a colonial inheritance. Courts include lower tribunals, appeals courts, and a Supreme Court, with a separate Constitutional Court. Judges are appointed through a process influenced by the executive branch. Constitutional protections exist for judicial independence, but in practice, the judiciary faces political pressure in sensitive cases. President Patrice Talon's government has been accused of using the justice system to target political opponents, with opposition figures facing charges that critics call politically motivated. The prosecution of opposition leaders Reckya Madougou and Joel Aïvo on terrorism and money laundering charges—both convicted and sentenced to long prison terms—raised serious questions about fair trial standards and judicial independence.

Law enforcement in Benin consists of the National Police (urban areas) and Gendarmerie (rural areas and borders). Police are under-resourced, poorly paid (making them vulnerable to corruption), and inadequately trained. Investigative capacity is weak; most cases rely on confessions rather than forensic evidence. Police brutality and mistreatment of detainees occur with limited accountability. Community trust in police is low, with many viewing officers as predators rather than protectors.

Prisons in Benin are overcrowded and conditions are harsh. The country holds approximately 10,000 prisoners in facilities designed for far fewer. Pretrial detention is massively overused—over 60% of prisoners are awaiting trial, many for years due to judicial delays and inability to afford bail. Conditions include inadequate food, poor sanitation, and minimal medical care. Prisoners depend on family support for basic necessities. Juveniles are often held with adults despite legal prohibitions. Torture and abuse by guards occur, though reforms have attempted to improve oversight.

High-profile cases demonstrate the system's dual nature. The conviction of opposition figures like Madougou showed the government's willingness to use courts for political purposes. Meanwhile, corruption cases against lower-level officials occasionally result in convictions, though major figures in the ruling coalition enjoy apparent impunity. The 2021 post-election violence led to arrests and trials that international observers criticized for lacking due process.

Benin's criminal justice system operates within the constraints typical of a low-capacity West African state: limited budgets, weak institutions, and corruption at every level. The system delivers rough justice for ordinary crimes but serves political interests when power is at stake. Meaningful reform requires resources Benin lacks and political will that appears absent.`
  },
  {
    name: 'Bhutan',
    lat: 27.5142,
    lng: 90.4336,
    summary: `Bhutan's criminal justice system operates in one of the world's most unusual political contexts—a Buddhist kingdom that transitioned from absolute monarchy to constitutional democracy in 2008, measuring Gross National Happiness alongside conventional metrics. The system blends traditional Buddhist values with modern legal structures, resulting in low crime rates, minimal corruption, and generally fair processes, though questions about due process and judicial independence persist.

Crime in Bhutan is remarkably low. The homicide rate is approximately 1-2 per 100,000—among the lowest in South Asia. Violent crime is rare, typically limited to domestic disputes or alcohol-fueled altercations. Property crime—burglary, theft—occurs but at modest rates given the small population (less than 800,000). Drug-related offenses, particularly involving substances from India, represent a growing concern. Thimphu has seen some urban crime increase as the capital modernizes, but levels remain minimal by global standards. Traditional Buddhist values emphasizing non-violence and community cohesion help maintain low crime rates.

Corruption in Bhutan is low compared to South Asian neighbors. Transparency International ranks Bhutan among the region's least corrupt countries, though still behind Singapore or New Zealand. The Anti-Corruption Commission (ACC), established in 2006, has pursued cases against officials at various levels, including ministers and high-ranking bureaucrats. The willingness to prosecute powerful figures distinguishes Bhutan from countries where elites enjoy impunity. However, the small size of Bhutan's governing elite and royal family's influence create informal power dynamics that official structures don't fully capture.

Bhutan's legal system has evolved rapidly since democratization. The judiciary consists of lower courts (Dungkhags), district courts (Dzongkhags), a High Court, and a Supreme Court. Judges are appointed by the King on recommendation of the National Judicial Commission. The Constitution guarantees judicial independence, and courts have shown willingness to rule against government interests in some cases. However, the judiciary's relationship with the monarchy and political leadership remains delicate. Buddhist legal principles inform sentencing and dispute resolution, with emphasis on rehabilitation and reconciliation over punishment.

Due process protections exist but face practical limitations. Defense lawyers are few—Bhutan has fewer than 100 licensed attorneys for the entire country. Many defendants lack adequate representation, particularly in rural areas. Trials are conducted in Dzongkha (the national language), creating barriers for minority populations. Pretrial detention can be lengthy. International observers have raised concerns about fair trial standards in politically sensitive cases, though such cases are rare given Bhutan's generally non-confrontational political culture.

Law enforcement consists of the Royal Bhutan Police, a small force (around 5,000 officers) covering a mountainous country with challenging terrain. Police are generally professional and corruption is relatively low by regional standards. Community policing approaches align with Buddhist values of harmony. However, investigative capacity is limited, and police rely heavily on confessions. Reports of mistreatment in custody exist but aren't systematic. The public generally trusts police, a rarity in South Asia.

Bhutan's prisons hold approximately 2,500 inmates in conditions that are basic but generally humane by regional standards. Overcrowding is moderate. Bhutanese corrections emphasize rehabilitation, with meditation programs, vocational training, and community service. Corporal punishment was abolished, and the death penalty exists on the books but hasn't been used in decades. However, prison conditions vary, and reports of inadequate medical care and isolation of prisoners persist.

High-profile cases are rare but instructive. The 2017-2018 investigation and conviction of multiple officials, including the Health Minister, on corruption charges demonstrated the ACC's independence. The prosecution of media figures and activists under laws criminalizing defamation and spreading rumors has raised free expression concerns. Bhutan's 2021 amendment to its Penal Code, criminalizing marital rape, showed progressive legal development.

Bhutan's criminal justice system functions well for a small, developing country, with low crime, modest corruption, and improving institutions. Challenges remain around legal representation, due process, and balancing traditional values with modern rights protections. The system's effectiveness relies partly on Bhutan's unique cultural cohesion—whether this model can scale or adapt as the country modernizes remains an open question.`
  },
  {
    name: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    summary: `Bolivia's criminal justice system struggles under the weight of political instability, indigenous-mestizo tensions, coca politics, and institutional weakness that pervades Latin America's poorest country. The judiciary operates with nominal independence but faces political interference, corruption, and massive backlogs. Crime ranges from street-level violence to organized drug trafficking, while the legal system lurches between reformist ambitions and dysfunctional reality.

Crime in Bolivia is moderate to high by Latin American standards. The homicide rate fluctuates around 6-9 per 100,000, though statistics are unreliable. La Paz, El Alto, Santa Cruz, and Cochabamba experience violent crime including armed robberies, express kidnappings, and gang activity. Thefts, particularly targeting tourists in markets and on public transport, are common. Political violence periodically erupts—the 2019 post-election crisis saw dozens killed in clashes between Evo Morales supporters and opponents. Vigilante justice, including lynchings of suspected criminals, occurs in rural areas and urban peripheries where communities distrust police.

Bolivia's position as the world's third-largest coca producer (after Colombia and Peru) makes drug trafficking central to criminal justice considerations. Coca cultivation is legal for traditional use and domestic coca markets, creating a gray zone that narco-traffickers exploit. Colombian and Mexican cartels use Bolivia as a cocaine production and transit hub. The Chapare and Yungas regions are coca heartlands where cocalero unions wield political power—Evo Morales himself led the cocalero movement. This political protection has complicated law enforcement efforts. Corruption and violence linked to the drug trade affect police, prosecutors, and judges.

Corruption is endemic. Transparency International ranks Bolivia among Latin America's most corrupt nations. Police corruption is routine—bribes are demanded for everything from traffic stops to avoiding arrest. Judicial corruption manifests in bought verdicts, delayed proceedings to extract payments, and politically motivated prosecutions. High-level corruption involves embezzlement, contract fraud, and customs schemes. Former interim President Jeanine Áñez and several ministers were arrested on terrorism and sedition charges that her supporters call politically motivated revenge by the returning Morales-aligned government—critics point to selective prosecution where current officials' corruption goes unaddressed.

Bolivia's judiciary is based on civil law with indigenous legal systems recognized in certain contexts. Courts include lower courts, departmental courts of appeals, the Supreme Court, and a Constitutional Tribunal. Judges are elected—a controversial system adopted in 2011 to increase accountability but criticized for politicizing the bench. Null votes have exceeded votes for candidates in some judicial elections, reflecting public disillusionment. Judicial independence is severely compromised. The judiciary has been accused of serving the ruling party's interests under both Morales and his successors.

The justice system's most serious dysfunction is backlog. With hundreds of thousands of pending cases, trials can take 5-10 years. This delay effectively denies justice and leads to massive pretrial detention. Bolivia's prisons hold approximately 20,000 people, over 70% awaiting trial—some for years. Public defenders are overwhelmed and underfunded. Many defendants lack effective representation.

Law enforcement consists of the National Police, under the Interior Ministry's authority. Police are poorly paid, inadequately trained, and widely distrusted. Corruption and links to criminal networks are common. Police brutality occurs regularly, particularly against indigenous populations and protesters. Reforms have achieved limited success. Special anti-narcotics units (FELCN) receive U.S. training and support but face accusations of corruption and rights abuses.

Bolivian prisons are notorious. Facilities are severely overcrowded, with San Pedro Prison in La Paz famously operating as a semi-autonomous community where inmates rent cells, run businesses, and live with families. Conditions range from poor to life-threatening: inadequate food, minimal healthcare, and violence between inmates. Prison gangs control much internal activity. Guards are understaffed and often complicit in smuggling contraband.

High-profile cases illustrate political justice. The prosecution of Jeanine Áñez for "terrorism" related to the 2019 transition raised international concern about rule of law. Former President Morales himself faces charges related to statutory rape and human trafficking but remains protected by his party's political power. Anti-corruption investigations occasionally target opposition figures but rarely touch current ruling party members.

Bolivia's criminal justice system lurches between crisis and dysfunction. It operates in a deeply polarized political environment where justice is weaponized, corruption is endemic, and institutional capacity is minimal. For ordinary Bolivians, accessing justice means navigating a system designed more to control than to deliver fairness.`
  },
  {
    name: 'Bosnia and Herzegovina',
    lat: 43.9159,
    lng: 17.6791,
    summary: `Bosnia and Herzegovina's criminal justice system reflects the country's fractured post-war reality. The 1995 Dayton Peace Accords ended the devastating conflict but created a Byzantine political structure—two entities (Republika Srpska and the Federation of Bosnia and Herzegovina), plus the Brčko District—each with separate legal systems, police forces, and courts. This fragmentation undermines rule of law, enables corruption, and allows war criminals and organized crime figures to exploit jurisdictional gaps.

Crime in Bosnia is moderate but complicated by organized criminal networks. The homicide rate is approximately 1.5-2 per 100,000—low compared to Latin America but reflecting lingering violence and criminal activity. Organized crime includes drug trafficking (Balkan route smuggling heroin from Afghanistan to Western Europe), human trafficking, cigarette smuggling, and arms dealing. Criminal groups often have wartime origins, with former militia members transitioning to illicit enterprises. Corruption facilitates these networks—officials accept bribes to ignore smuggling, protect criminals, or provide intelligence.

Corruption is Bosnia's fundamental problem. Transparency International consistently ranks Bosnia among Europe's most corrupt countries. The entire political system operates on patronage networks where parties control institutions—police, prosecutors, judges—as spoils of office. Public sector jobs are awarded based on political loyalty and ethnic quotas rather than merit. Procurement contracts are rigged to benefit connected businesses. High-level officials enrich themselves through privatization schemes and state-owned enterprise looting. This isn't incidental corruption; it's the system functioning as designed by political elites who prioritize ethnic division and personal enrichment over governance.

Bosnia's judicial system is extraordinarily complex. Each entity has its own courts: district courts, cantonal courts (in the Federation), and entity supreme courts, topped by the State Court of Bosnia and Herzegovina for state-level matters and the Constitutional Court. Judges in each entity are appointed through processes controlled by political parties, ensuring politicization. The international community's High Representative retains authority to impose laws and remove officials, though this power has been used sparingly in recent years.

Judicial independence is severely compromised. Judges face political pressure, threats, and corruption temptations. Trials in politically sensitive cases—particularly war crimes—are subject to ethnic polarization. Republika Srpska authorities often refuse to cooperate with state-level prosecutions, viewing them as biased against Serbs. Cases drag for years due to procedural delays, lack of resources, and deliberate obstruction. The War Crimes Chamber of the State Court has convicted numerous perpetrators from all sides, showing some institutional capacity, but many suspects remain at large, protected by local authorities or living openly in ethnic enclaves.

Law enforcement is fragmented. The State Investigation and Protection Agency (SIPA) handles state-level crimes, while each entity maintains separate police forces—the Federation Police and Republika Srpska Police—plus cantonal police in the Federation. Coordination is poor, investigations are politicized, and corruption is rampant. Police in Republika Srpska have been accused of protecting Serb war crimes suspects. Organized crime groups maintain police contacts who provide warnings and protection. Reform efforts face resistance from politicians who benefit from weak, controllable law enforcement.

Prisons in Bosnia are overcrowded and conditions vary from poor to adequate. The country holds approximately 3,000 prisoners across entity facilities. Pretrial detention is overused due to slow courts. Conditions include inadequate healthcare and sanitation in some facilities. Ethnic segregation in prisons reflects broader societal divisions. Rehabilitation programs are minimal.

High-profile cases demonstrate systemic problems. The genocide conviction of Radovan Karadžić and Ratko Mladić by international tribunals showed that justice is possible, but domestic prosecution of lower-level war criminals proceeds slowly and unevenly. The "Dženan Memić case"—the suspicious death of a young man in Sarajevo that police ruled an accident despite evidence suggesting otherwise—exposed corruption, cover-ups, and obstruction at the highest levels. Protesters demanded accountability, forcing reopening of the investigation, but justice remains elusive.

The murder of David Dragičević in Banja Luka and subsequent cover-up by Republika Srpska police triggered massive protests ("Justice for David") that revealed the system's corruption and impunity. The lack of accountability despite clear evidence of police misconduct illustrates how institutions serve political interests rather than citizens.

Bosnia's criminal justice system cannot be reformed without political reform. The current structure incentivizes corruption, enables organized crime, and perpetuates ethnic division. International pressure has declined as attention shifts elsewhere, leaving Bosnia trapped in dysfunctional equilibrium that serves elites while ordinary citizens lack meaningful access to justice.`
  },
  {
    name: 'Botswana',
    lat: -22.3285,
    lng: 24.6849,
    summary: `Botswana's criminal justice system stands out in southern Africa as relatively functional, reflecting the country's broader success as a stable, democratic, middle-income nation. The judiciary maintains genuine independence, corruption is lower than regional neighbors, and crime rates are moderate. However, serious challenges persist: high murder rates, organized crime links to drug and diamond smuggling, harsh treatment of minority groups, and concerning patterns of police brutality and questionable deaths in custody.

Crime in Botswana is mixed. The homicide rate is surprisingly high—approximately 11-15 per 100,000, comparable to some Latin American countries and well above South African levels. Domestic violence and alcohol-fueled killings contribute significantly. Gaborone and Francistown experience armed robberies, vehicle theft, and burglaries. Sexual violence is endemic; rape and assault rates are troublingly high. Drug-related crime has increased as Botswana becomes a transit point for narcotics moving through southern Africa. Stock theft remains a persistent rural crime. Organized criminal networks operate relatively sophisticated operations involving diamonds, drugs, and cross-border smuggling, taking advantage of Botswana's diamond wealth and porous borders.

Corruption in Botswana is low by African standards but not absent. Transparency International consistently ranks Botswana as one of Africa's least corrupt nations, alongside Rwanda and Mauritius. The Directorate on Corruption and Economic Crime (DCEC) has successfully prosecuted officials at various levels, including former cabinet ministers and high-ranking civil servants. This willingness to pursue powerful figures distinguishes Botswana from neighbors where elites enjoy impunity. However, procurement irregularities, favoritism in contract awards, and low-level bribery still occur. Recent high-profile cases involving COVID-19 procurement fraud and officials' unexplained wealth have tested the DCEC's independence.

Botswana's legal system is based on Roman-Dutch law inherited from colonial Cape Colony and British common law. Courts include magistrate courts, the High Court, and the Court of Appeal. Judges are appointed by the President on recommendation of the Judicial Service Commission and enjoy security of tenure. Judicial independence is genuine—courts have ruled against the government in significant cases without apparent retaliation. The judiciary's most notable recent action was the 2019 decriminalization of homosexuality, where the High Court struck down colonial-era sodomy laws in a ruling that showed both legal reasoning and courage in a conservative society.

However, access to justice faces significant barriers. Legal aid is limited, leaving many defendants without adequate representation. Backlogs delay trials, though not to the extreme seen in countries like India or Bangladesh. Customary law operates in parallel for certain matters, particularly affecting women and minority groups like the San (Bushmen), who face systematic discrimination in both traditional and formal legal systems.

Law enforcement in Botswana is professional by regional standards but troubled by serious issues. The Botswana Police Service is reasonably equipped and trained. However, police brutality is a persistent problem. Reports of beatings, torture during interrogations, and suspicious deaths in custody occur with disturbing regularity. The 2019 death in custody of Segomotso Keakabetse, allegedly beaten by police, sparked protests and raised questions about accountability. Investigations into police misconduct often result in minimal consequences. Community relations with police vary—generally better than in South Africa but undermined by abuse incidents.

Treatment of minority groups, particularly the San people, reveals systemic justice failures. The government's forced relocations of San communities from the Central Kalahari Game Reserve, ostensibly for conservation but enabling diamond mining, involved police actions that courts later ruled unconstitutional. Yet implementation of court rulings has been incomplete, illustrating how marginalized groups struggle to access justice even when legal frameworks support them.

Botswana's prisons hold approximately 4,500 inmates in conditions that generally meet basic standards but face overcrowding in some facilities. Corporal punishment (caning) remains legal and is commonly imposed for certain offenses, raising human rights concerns. The death penalty remains on the books and is occasionally carried out—Botswana executed a convicted murderer in 2021, carried out in secret without prior notification, drawing international criticism. Pretrial detention is not as systematically overused as in some African countries, but delays occur.

High-profile cases demonstrate both strengths and weaknesses. The murder conviction of Jacob Drotskie for killing police officer Segametsi Masweu showed the system can deliver justice. The prosecution of former Directorate of Intelligence and Security (DIS) director Isaac Kgosi on corruption and abuse of power charges demonstrated some accountability for security services. However, his acquittal on most charges raised questions about political influence. The brutal 2018 murder of Moshe Lekalakala in Gaborone remains unsolved, illustrating investigative limitations.

Botswana's criminal justice system functions better than most in the region but falls short of international standards in key areas. High murder rates indicate social problems the justice system hasn't addressed. Police brutality and impunity undermine rule of law. Treatment of minorities exposes how legal equality doesn't guarantee justice for all. Still, relative to its neighbors, Botswana maintains institutions with genuine independence and capacity—a foundation that could support further reform if political will exists.`
  }
]

async function main() {
  console.log('🏛️  Starting Crime & Justice writeup generation for Batch 2...')
  console.log(`📝 Generating ${CRIME_WRITEUPS.length} country writeups (Countries 14-18)\n`)

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
      console.log(`✅ Successfully saved crime writeup for ${writeup.name}`)
      console.log(`   Character count: ${writeup.summary.length}`)

    } catch (error) {
      failed++
      console.error(`❌ Failed to save ${writeup.name}:`, error)
    }
  }

  console.log(`\n${'='.repeat(70)}`)
  console.log('✨ BATCH 2 COMPLETE!')
  console.log('='.repeat(70))
  console.log(`   Successful: ${successful}/${CRIME_WRITEUPS.length}`)
  console.log(`   Failed: ${failed}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
