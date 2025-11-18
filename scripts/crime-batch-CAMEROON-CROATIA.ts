import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Crime writeups: Cameroon through Croatia (10 countries)
const WRITEUPS = [
  {
    name: 'Cameroon',
    lat: 7.3697,
    lng: 12.3547,
    summary: `Cameroon's justice system struggles with Anglophone separatist conflict, Boko Haram insurgency in the north, and authoritarian governance under Paul Biya's 41-year rule. Crime includes terrorism, armed separatism, banditry, and corruption. Courts lack independence—judges serve regime interests, particularly in politically sensitive cases. The Anglophone crisis has seen mass arrests, military courts trying civilians, and documented extrajudicial killings by security forces. Prisons are severely overcrowded with harsh conditions. High-profile trials of separatist leaders and activists demonstrate justice weaponized for political control. Military impunity is absolute—soldiers committing abuses face no accountability. Corruption pervades police, courts, and government. Transparency International ranks Cameroon among Africa's most corrupt nations. The system delivers rough justice for ordinary crime but serves as a tool of repression against dissent and marginalized Anglophone regions.`
  },
  {
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    summary: `Canada's criminal justice system ranks among the world's most functional, with strong rule of law, independent judiciary, professional law enforcement, and low corruption. Crime rates are moderate—homicide around 2 per 100,000. However, serious problems persist: systemic discrimination against Indigenous peoples, who are vastly overrepresented in prisons (5% of population, 30% of federal inmates); police brutality particularly affecting Indigenous and Black communities; and delayed justice due to court backlogs. High-profile cases like the RCMP's treatment of Indigenous women, wrongful convictions exposed by inquiries, and Missing and Murdered Indigenous Women crisis reveal how the system fails marginalized populations. Cannabis legalization, judicial independence, and generally humane prison conditions mark strengths. Yet meaningful reconciliation with Indigenous communities requires addressing systemic racism embedded in policing, prosecution, and sentencing. The SNC-Lavalin affair raised questions about political interference in prosecutions, though institutions largely held. Canada's system works well for most but catastrophically fails Indigenous peoples—addressing this is the defining justice challenge.`
  },
  {
    name: 'Central African Republic',
    lat: 6.6111,
    lng: 20.9394,
    summary: `Central African Republic's criminal justice system has collapsed amid civil war, with armed groups controlling vast territories and the state barely functioning. War crimes, mass atrocities, sexual violence, and child soldier recruitment define the conflict between Séléka rebels, anti-Balaka militias, and other factions. The formal judiciary exists only in Bangui and select towns; most of the country has no functioning courts. The Special Criminal Court, established to prosecute war crimes, has issued arrest warrants but lacks capacity to execute them. Impunity is absolute for militia leaders and foreign (particularly Russian Wagner Group) forces committing abuses. Corruption is endemic in the dysfunctional state remnants. Prisons are few and brutal—most suspects never see trial. The International Criminal Court convicted former Vice President Jean-Pierre Bemba for war crimes committed by his troops, showing international justice can reach some perpetrators. But domestically, CAR's justice system is nonexistent for most citizens. Rebuilding requires ending the conflict and restoring basic state capacity—both distant prospects.`
  },
  {
    name: 'Chad',
    lat: 15.4542,
    lng: 18.7322,
    summary: `Chad's criminal justice system serves a military dictatorship where President Mahamat Déby seized power after his father's death in 2021, continuing decades of authoritarian Déby family rule. The judiciary has zero independence—courts exist to legitimize regime actions and imprison opponents. Crime includes banditry, terrorism from Boko Haram in the Lake Chad region, and state violence. Security forces commit extrajudicial killings, torture, and arbitrary detention with absolute impunity. The 2022 crackdown on protests against delayed elections killed over 50 people; investigations went nowhere. Corruption is massive—oil wealth enriches the ruling elite while most Chadians live in poverty. Transparency International ranks Chad among the world's most corrupt. Courts process routine crime slowly when they function, but political cases are predetermined. Prisons are overcrowded and brutal, with pretrial detention the norm. Chad hosts International Criminal Court offices investigating Darfur war crimes, yet domestic justice remains a façade. The system doesn't deliver justice; it maintains autocratic control over a restive population in one of Africa's most impoverished nations.`
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    summary: `Chile's criminal justice system represents one of Latin America's most functional, with strong institutions, relatively low corruption, and professional judiciary. The homicide rate—around 4 per 100,000—is low regionally. However, serious problems persist. The Carabineros national police face accusations of brutality, particularly during the 2019-2020 social protests when security forces blinded protesters with rubber bullets and committed widespread abuse. Investigations into police violence proceed slowly, and convictions are rare despite overwhelming evidence. Chile's prosecution of Pinochet-era human rights crimes showed judicial courage—hundreds of military officials have faced trial for dictatorship-era abuses, a reckoning many Latin American countries avoided. Corruption, while low by regional standards, exists—high-profile cases involving politicians and business figures demonstrate elite impunity persists. Prisons are overcrowded and conditions often violate standards. Indigenous Mapuche activists face harsh prosecution under anti-terrorism laws for land rights protests, raising questions about discriminatory enforcement. The judiciary is independent and professional, but class and race disparities in outcomes are significant. Chile's justice system functions well comparatively but requires addressing police impunity and socioeconomic inequalities affecting justice access.`
  },
  {
    name: 'China',
    lat: 35.8617,
    lng: 104.1954,
    summary: `China's criminal justice system operates as an instrument of Communist Party control, where rule of law is subordinate to Party directives and political stability overrides individual rights. The judiciary has zero independence—courts implement Party policy, conviction rates exceed 99%, and politically sensitive cases have predetermined outcomes. "Crime" includes not just conventional offenses but political dissent, religious practice outside state-approved institutions, and ethnic minority cultural expression, particularly targeting Uyghurs, Tibetans, and Falun Gong practitioners. The mass detention of over one million Uyghurs in Xinjiang "re-education camps"—where torture, forced labor, and cultural genocide occur—represents crimes against humanity disguised as counterterrorism. Conventional crime rates are officially low due to extensive surveillance, social credit systems, and harsh penalties, though data is manipulated. Capital punishment is used extensively—China executes more people than the rest of the world combined, though exact numbers are state secrets. Corruption campaigns under Xi Jinping have imprisoned thousands of officials, but these serve political purges rather than genuine rule of law—allies are protected while rivals are eliminated. Torture in custody is systematic despite legal prohibitions. Defense lawyers face harassment and imprisonment. The system delivers social order and Party stability but at the cost of human rights, transparency, and any meaningful justice conception beyond state interests.`
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: `Colombia's criminal justice system has evolved significantly since the FARC peace accord ended decades of civil conflict, yet faces enormous challenges from drug trafficking, criminal gangs (formed by former paramilitaries and FARC dissidents), and impunity for powerful actors. The homicide rate has declined to around 24 per 100,000—still high but drastically improved from peak violence years. Medellín and Cali have reduced murder rates through innovative policing, yet rural areas and coca-growing regions face gang violence as factions fight for trafficking routes and cocaine production territories. The Special Jurisdiction for Peace (JEP), established under the peace accords to prosecute conflict-era crimes, represents a transitional justice model offering reduced sentences for those who confess—controversial but necessary for peace. High-level corruption cases have reached former presidents (Álvaro Uribe faces investigations, Ernesto Samper was prosecuted), showing judicial independence exists, yet conviction of powerful figures remains rare. Prosecutors and judges investigating corruption or organized crime face assassination threats—dozens have been killed. Corruption pervades police, who maintain links to criminal groups. Prisons are severely overcrowded and violent, with gangs controlling internal operations. Colombia's justice system has genuine capacity and reformist elements but struggles against entrenched criminal networks, political interference, and violence targeting justice officials.`
  },
  {
    name: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    summary: `Costa Rica's criminal justice system is among Central America's strongest, befitting the region's most stable democracy. Crime has risen notably—the homicide rate climbed to around 11-12 per 100,000 as drug trafficking organizations use Costa Rica for cocaine transit and local gangs proliferate. San José and port cities like Limón experience violent crime including armed robberies and gang shootings, shocking for a country once considered exceptionally safe. The judiciary maintains independence—courts have ruled against government interests and corruption cases proceed against high officials. Former President Rafael Ángel Calderón was imprisoned for corruption, demonstrating accountability. However, massive court backlogs delay justice, with cases taking years. Corruption, while lower than neighbors, exists—recent scandals involving Chinese infrastructure deals and embezzlement by officials show the problem persists. Police are generally professional but face accusations of excessive force and links to trafficking groups in some regions. Prisons are severely overcrowded—facilities hold double their capacity, and conditions have deteriorated. Gang violence inside prisons is increasing. Costa Rica abolished its military in 1949, relying on police for security, but the force is overwhelmed by transnational organized crime. The system functions far better than Nicaragua or Honduras, but drug trafficking pressures test institutional capacity and threaten to undermine Costa Rica's exceptional regional standing.`
  },
  {
    name: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    summary: `Croatia's criminal justice system functions as a European democracy with EU membership since 2013, yet corruption, organized crime, and World War II-era crimes complicate the picture. Crime rates are low—homicide around 1 per 100,000. Organized crime includes drug trafficking along Balkan routes, cigarette smuggling, and money laundering, often linked to Croatian diaspora networks. Corruption is significant—Transparency International ranks Croatia in the EU's lower tier. High-profile corruption cases involving former Prime Minister Ivo Sanader (convicted and imprisoned for bribery) and Zagreb Mayor Milan Bandić (died before trial could conclude) show some accountability, but procurement fraud and political nepotism remain endemic. The judiciary is nominally independent but faces political pressure and public distrust due to slow proceedings and perceptions of bias. War crimes prosecutions from the 1991-1995 war remain contentious—Croatia has tried predominantly Serb defendants while Croatian military commanders receive lenient treatment or hero status. This ethnic imbalance undermines justice credibility. Police are professional but occasional brutality cases emerge, particularly involving minorities. Prisons meet basic European standards though overcrowding exists in some facilities. Croatia's justice system is functional but requires addressing corruption more aggressively and ensuring war crimes prosecutions apply equally regardless of ethnicity to meet genuine EU rule of law standards.`
  }
]

async function main() {
  console.log(`\n🏛️ Crime Batch: Cameroon-Croatia (${WRITEUPS.length} countries)\n`)
  let saved = 0
  for (const w of WRITEUPS) {
    try {
      await prisma.locationSummary.upsert({
        where: { name_type_category: { name: w.name, type: 'country', category: 'crime' }},
        update: { summary: w.summary, lat: w.lat, lng: w.lng, issues: '[]', topStories: '[]', storyCount: 0, updatedAt: new Date() },
        create: { name: w.name, type: 'country', country: w.name, lat: w.lat, lng: w.lng, category: 'crime', summary: w.summary, issues: '[]', topStories: '[]', storyCount: 0 }
      })
      console.log(`✅ ${w.name} (${w.summary.length} chars)`)
      saved++
    } catch (e) {
      console.error(`❌ ${w.name}: ${e}`)
    }
  }
  console.log(`\n✨ Saved ${saved}/${WRITEUPS.length}\n`)
  await prisma.$disconnect()
}

main()
