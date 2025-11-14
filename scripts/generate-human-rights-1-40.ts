import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()

// Get all countries in order
const allCountries = Object.entries(countryData).map(([name, data]) => ({
  name,
  ...data,
}))

// Countries 1-40 (0-indexed: 0-39)
const targetCountries = allCountries.slice(0, 40)

console.log(`Total countries available: ${allCountries.length}`)
console.log(`Generating for countries 1-40 (${targetCountries.length} countries)`)
console.log(`First country: ${targetCountries[0].name}`)
console.log(`Last country: ${targetCountries[targetCountries.length - 1].name}\n`)

interface CountryCoordinates {
  [key: string]: { lat: number; lng: number }
}

// Country coordinates for database storage
const countryCoords: CountryCoordinates = {
  'United States': { lat: 37.0902, lng: -95.7129 },
  'Canada': { lat: 56.1304, lng: -106.3468 },
  'Mexico': { lat: 23.6345, lng: -102.5528 },
  'Brazil': { lat: -14.2350, lng: -51.9253 },
  'Argentina': { lat: -38.4161, lng: -63.6167 },
  'Chile': { lat: -35.6751, lng: -71.5430 },
  'Colombia': { lat: 4.5709, lng: -74.2973 },
  'Peru': { lat: -9.1900, lng: -75.0152 },
  'Venezuela': { lat: 6.4238, lng: -66.5897 },
  'Ecuador': { lat: -1.8312, lng: -78.1834 },
  'Bolivia': { lat: -16.2902, lng: -63.5887 },
  'Paraguay': { lat: -23.4425, lng: -58.4438 },
  'Uruguay': { lat: -32.5228, lng: -55.7658 },
  'Cuba': { lat: 21.5218, lng: -77.7812 },
  'Haiti': { lat: 18.9712, lng: -72.2852 },
  'Dominican Republic': { lat: 18.7357, lng: -70.1627 },
  'Guatemala': { lat: 15.7835, lng: -90.2308 },
  'Honduras': { lat: 15.2000, lng: -86.2419 },
  'El Salvador': { lat: 13.7942, lng: -88.8965 },
  'Nicaragua': { lat: 12.8654, lng: -85.2072 },
  'Costa Rica': { lat: 9.7489, lng: -83.7534 },
  'Panama': { lat: 8.7832, lng: -80.7744 },
  'Jamaica': { lat: 18.1096, lng: -77.2975 },
  'Trinidad and Tobago': { lat: 10.6918, lng: -61.2225 },
  'Guyana': { lat: 4.8604, lng: -58.9302 },
  'Suriname': { lat: 3.9193, lng: -56.0278 },
  'Belize': { lat: 16.2667, lng: -88.7500 },
  'United Kingdom': { lat: 55.3781, lng: -3.4360 },
  'France': { lat: 46.2276, lng: 2.2137 },
  'Germany': { lat: 51.1657, lng: 10.4515 },
  'Italy': { lat: 41.8719, lng: 12.5674 },
  'Spain': { lat: 40.4637, lng: -3.7492 },
  'Poland': { lat: 51.9194, lng: 19.1451 },
  'Ukraine': { lat: 48.3794, lng: 31.1656 },
  'Russia': { lat: 61.5240, lng: 105.3188 },
  'Turkey': { lat: 38.9637, lng: 35.2433 },
  'Greece': { lat: 39.0742, lng: 21.8243 },
  'Belgium': { lat: 50.5039, lng: 4.4699 },
  'Austria': { lat: 47.5162, lng: 14.5501 },
  'Finland': { lat: 61.9241, lng: 25.7482 },
}

// Human Rights Summaries - Countries 1-40

// 1 - UNITED STATES
const USA_SUMMARY = `The United States presents a paradox that demands honest reckoning: a nation built on democratic ideals yet wrestling with persistent human rights challenges in their implementation. America's strength lies in its institutional checks on executive power, independent judiciary, and robust civil society. Yet these very institutions are under unprecedented stress. Press freedom remains constitutionally protected, but misinformation, polarization, and economic pressures on journalism have fragmented the media landscape. The gun violence epidemic—claiming nearly 50,000 lives annually—represents a unique human rights failure among wealthy democracies. Policing practices, particularly affecting Black Americans and marginalized communities, continue patterns of excessive force, qualified immunity, and systemic inequality despite reform efforts. Immigration detention practices have expanded, with reports of poor conditions and family separations raising serious humanitarian concerns. LGBTQ+ rights have advanced through marriage equality and workplace protections, yet conservative states continue restricting transgender rights, particularly for youth. Women's reproductive rights face unprecedented rollbacks following the Supreme Court's Dobbs decision, removing federal protections and forcing states into a patchwork of restrictions. Voting rights remain contested, with new voter ID laws and redistricting raising concerns about democratic participation. Mass incarceration, a distinctly American phenomenon, disproportionately affects racial minorities and perpetuates cycles of poverty. The homeless crisis—with inadequate mental health services and addiction support—reflects broader policy failures. While political prisoners don't exist in the American system, political violence has escalated, threatening democratic processes. The challenge for America is renewing commitment to the values it espouses, implementing meaningful accountability for rights violations, and addressing systemic inequality embedded in its institutions.`

const USA_ISSUES = [
  'Gun violence and inadequate regulation - nearly 50,000 deaths annually from firearms',
  'Racial disparities in policing, criminal justice, and excessive use of force',
  'Immigration detention practices and inadequate conditions',
  'Reproductive rights rollback and state-level abortion restrictions',
  'Mass incarceration disproportionately affecting minorities and perpetuating poverty cycles'
]

// 2 - CANADA
const CANADA_SUMMARY = `Canada's human rights record is generally strong, grounded in constitutional protections, an independent judiciary, and robust civil society. The Canadian Charter of Rights and Freedoms provides comprehensive protections for expression, assembly, religion, and due process. Yet beneath the image of a progressive nation lie significant challenges that demand attention. Indigenous communities—First Nations, Métis, and Inuit peoples—face persistent systemic discrimination in healthcare, education, employment, and justice systems. The legacy of residential schools, recently brought into sharper focus through truth and reconciliation efforts, reveals deep historical trauma. Police violence against Indigenous communities continues, raising concerns about accountability and systemic racism. Missing and murdered Indigenous women and girls represent a national tragedy, reflecting intersectional violence rooted in colonialism and gender discrimination. Immigration detention practices, while generally humane, have been criticized for conditions and lack of procedural transparency. Homelessness and inadequate mental health services affect vulnerable populations disproportionately. LGBTQ+ rights are well-protected constitutionally, though hate crimes and discrimination persist in some communities. Women's rights are generally protected, though gender-based violence remains a concern. Press freedom is protected, though media consolidation raises questions about diversity of ownership and editorial independence. Canada's international human rights obligations, particularly toward Indigenous peoples under UNDRIP, remain inadequately implemented domestically. The disconnect between constitutional protections and actual implementation for Indigenous and marginalized communities represents Canada's most significant human rights challenge.`

const CANADA_ISSUES = [
  'Systemic discrimination against Indigenous peoples in healthcare, education, and justice',
  'Missing and murdered Indigenous women and girls',
  'Police violence and inadequate accountability in Indigenous communities',
  'Homelessness and inadequate mental health services',
  'Immigration detention practices and procedural transparency concerns'
]

// 3 - MEXICO
const MEXICO_SUMMARY = `Mexico's human rights landscape is marked by deep contradictions: constitutional protections exist on paper, yet implementation remains desperately inadequate, particularly outside Mexico City. The country faces a staggering human rights crisis rooted in organized crime, corruption, and state violence. Extrajudicial killings and forced disappearances remain endemic, with over 110,000 missing persons since the 2006 "War on Drugs." The military and police, deployed extensively in security operations, operate with minimal accountability, and torture is a documented practice. Journalists face unprecedented threats and killings—Mexico is among the world's deadliest countries for media workers. Drug trafficking organizations also target journalists, creating a chilling effect on press freedom and investigations into corruption. Women face epidemic levels of gender-based violence, including femicide, with over 2,000 murders annually. These crimes often go unpunished, reflecting institutional failure. Indigenous communities, particularly in southern states, face marginalization, limited political representation, and vulnerability to violence. LGBTQ+ individuals face discrimination and violence, with transgender people particularly at risk. Migrant communities transiting Mexico face abuse, trafficking, and exploitation by both criminal organizations and state actors. Overcrowded prisons reflect systemic failures in the justice system. Corruption permeates institutions, enabling human rights abuses with near-total impunity. Claudia Sheinbaum's administration has promised reforms and increased human rights commitments, but implementation remains the critical challenge. Mexico's human rights crisis represents not individual institutional failure but systemic collapse requiring comprehensive reform.`

const MEXICO_ISSUES = [
  'Forced disappearances and extrajudicial killings - over 110,000 missing persons',
  'Journalist killings and threats to press freedom and free expression',
  'Gender-based violence and femicide epidemic affecting women and girls',
  'Indigenous community marginalization and vulnerability to violence',
  'Migrant exploitation and trafficking by criminal organizations'
]

// 4 - BRAZIL
const BRAZIL_SUMMARY = `Brazil's human rights situation reflects the tensions of a large, diverse democracy grappling with inequality, violence, and institutional weakness. Luiz Inácio Lula da Silva's return to presidency in 2023 promised a reversal of the harsh policies and discourse of the Bolsonaro era. Constitutional protections exist for expression, assembly, and conscience, but their implementation varies dramatically across regions and social classes. Extrajudicial killings by police remain alarmingly common, particularly in Rio de Janeiro and São Paulo's favelas, where young Black men are disproportionately targeted. Gang violence and drug trafficking organizations control vast territories, creating no-go zones for authorities and establishing their own brutal justice systems. Prisons are catastrophically overcrowded, with violence and gang warfare inside reflecting street conflicts. Gender-based violence remains endemic—Brazil has one of the world's highest femicide rates—with inadequate prosecution and police response. Women activists and LGBTQ+ advocates report harassment and threats. LGBTQ+ individuals face significant violence and discrimination, particularly transgender and gender-nonconforming people. Land disputes in the Amazon pit indigenous communities and small farmers against agribusiness and illegal mining operations, resulting in violence and killings. Press freedom is constitutionally protected but journalists investigating corruption or organized crime face threats and attacks. Corruption pervades institutions, enabling impunity for serious crimes. Lula's government has initiated reforms in human rights policy and police accountability, but structural change requires sustained political will, institutional capacity, and addressing the root causes of violence embedded in Brazil's massive inequality.`

const BRAZIL_ISSUES = [
  'Police extrajudicial killings in favelas disproportionately affecting Black youth',
  'Prison overcrowding, gang violence, and gang control of territories',
  'Femicide and gender-based violence epidemic',
  'Violence against indigenous communities over land disputes',
  'Drug trafficking organization control and territorial violence'
]

// 5 - ARGENTINA
const ARGENTINA_SUMMARY = `Argentina maintains one of South America's strongest human rights frameworks and traditions of democratic accountability. The country has led regional efforts in transitional justice, prosecuting military officials for crimes committed during the 1976-1983 dictatorship and establishing mechanisms for victims' recognition. Constitutional protections for expression, assembly, and conscience are generally respected. Press freedom is robust, with vibrant media landscape and independent journalism investigating government and corporate malfeasance. LGBTQ+ rights have advanced significantly—Argentina pioneered same-sex marriage and allows gender self-identification. Women's rights protections are comparatively strong, though gender-based violence and femicide remain concerns requiring greater institutional response. Violence against women, including domestic abuse, is addressed through constitutional frameworks, but implementation varies in quality. Transgender rights are advanced—law allows gender change without medical procedures—yet discrimination and violence against transgender individuals persist. Javier Milei's libertarian presidency since December 2023 raises concerns about institutional support for human rights enforcement, particularly regarding labor rights and economic rights of vulnerable populations. His neoliberal policies impose austerity on already economically stressed populations. Police accountability remains an issue, particularly regarding mistreatment of detainees and excessive force. Indigenous communities face marginalization in employment, education, and land rights, though protections exist constitutionally. Argentina's strength lies in its tradition of democratic accountability and active civil society, but its challenge is maintaining these commitments amid economic crisis and shifting political priorities.`

const ARGENTINA_ISSUES = [
  'Economic rights violations through austerity policies affecting vulnerable populations',
  'Police accountability and excessive force issues',
  'Gender-based violence and femicide requiring greater institutional response',
  'Indigenous community marginalization in land rights and economic participation',
  'Potential rollback of human rights protections under libertarian economic policies'
]

// 6 - CHILE
const CHILE_SUMMARY = `Chile has achieved considerable economic development and institutional stability in Latin America, with constitutionally protected human rights and a functioning independent judiciary. Yet the country is grappling with the legacy of its dictatorship and current challenges to democratic legitimacy. Gabriel Boric's left-wing administration inherited a deeply polarized society and proposed a new constitution to replace the Pinochet-era document, though voters narrowly rejected it. Press freedom is well-protected constitutionally, with independent journalism covering government actions and corporate accountability. LGBTQ+ rights have expanded through marriage equality and transgender recognition, though discrimination persists in conservative communities. Women's rights are constitutionally protected, with laws addressing gender-based violence, though femicide and domestic violence remain significant concerns. Indigenous Mapuche communities in southern Chile face systemic discrimination, land disputes with forestry companies, and police violence during protests for territorial rights. These communities experience marginalization in healthcare, education, and employment. Prison overcrowding and violence are serious issues, reflecting systemic failures in the criminal justice system. Police conduct during social protests—including the 2019-2020 demonstrations—raised concerns about excessive force, tear gas use, and accountability. Economic inequality, despite Chile's relative wealth, drives social tensions and dissatisfaction with institutional capacity to address grievances. The new constitutional process aims to strengthen human rights protections and indigenous recognition, but political consensus remains fragile. Chile's challenge is deepening democratic legitimacy through institutional reform that addresses inequality and indigenous rights while maintaining institutional stability.`

const CHILE_ISSUES = [
  'Indigenous Mapuche land disputes and police violence during territorial rights protests',
  'Prison overcrowding and violence',
  'Police conduct during social protests and accountability gaps',
  'Gender-based violence and femicide',
  'Economic inequality despite relative national wealth'
]

// 7 - COLOMBIA
const COLOMBIA_SUMMARY = `Colombia's human rights situation reflects a country transitioning from decades of internal armed conflict toward peace, yet struggling with incomplete implementation of peace accords and ongoing violence. Gustavo Petro's left-wing government, elected in 2022, promised ambitious human rights reforms and peace negotiation with armed groups. Constitutional protections for expression, conscience, and assembly exist, but their implementation varies across regions controlled by armed groups, particularly in rural areas. The 2016 peace agreement with the Revolutionary Armed Forces of Colombia (FARC) ended the largest conflict, but dissidents have splintered, continuing violence over drug trafficking territories. ELN (National Liberation Army), the other major guerrilla group, continues operations, and right-wing paramilitaries remain active, creating a complex security landscape. Press freedom is constitutionally protected, but journalists investigating organized crime, corruption, and paramilitaries face threats and attacks. Several journalists have been killed. Social leaders and human rights defenders face systematic threats and violence, with hundreds killed despite peace agreements. LGBTQ+ individuals have gained legal rights—Colombia recognizes same-sex partnerships and allows gender self-identification—yet violence and discrimination persist, particularly against transgender people. Women face significant gender-based violence, exacerbated in conflict-affected regions where sexual violence was used as a war tactic. Indigenous and Afro-Colombian communities experience marginalization, land disputes, and vulnerability to violence. Petro's government has initiated dialogue with armed groups and promised transitional justice mechanisms, but implementation requires sustained commitment amid political opposition. Extrajudicial killings by security forces, though reduced, remain a concern. Colombia's trajectory depends on successful peace implementation and institutional capacity to address root causes of conflict.`

const COLOMBIA_ISSUES = [
  'Armed group violence and territorial control by dissidents and paramilitaries',
  'Threats and killings of journalists and human rights defenders',
  'Sexual violence against women, particularly in conflict-affected regions',
  'Indigenous and Afro-Colombian community marginalization and land disputes',
  'Extrajudicial killings by security forces and accountability gaps'
]

// 8 - PERU
const PERU_SUMMARY = `Peru's human rights landscape is marked by significant challenges stemming from political instability, economic crisis, and ongoing violence related to drug trafficking. The country has experienced multiple government changes and constitutional crises in recent years, destabilizing institutions designed to protect human rights. Dina Boluarte's presidency faces enormous challenges including massive social protests, fuel shortages, and economic collapse. Constitutional protections for expression and assembly are undermined by state violence during protests. Police and military responses to demonstrations have resulted in deaths and injuries, raising serious concerns about excessive force. Journalists and human rights observers documenting these incidents face intimidation. The legacy of Peru's internal armed conflict with Shining Path (1980-2000) persists through ongoing violence in drug-trafficking regions and incomplete transitional justice. The Truth and Reconciliation Commission documented massive human rights abuses, but prosecutions remain slow and incomplete. Drug trafficking organizations control vast territories, particularly in the Amazon, establishing their own brutal authority systems. Indigenous communities in these regions face violence, land dispossession, and environmental destruction from illegal coca cultivation and trafficking. Mining and oil operations have displaced indigenous communities and caused environmental damage without adequate consultation or compensation. Press freedom, while constitutionally protected, is undermined by violence against journalists and political polarization. Women's rights are constitutionally protected, but femicide and gender-based violence remain pervasive, with inadequate prosecution. LGBTQ+ individuals face discrimination and violence. Peru's challenge is stabilizing institutions, ensuring accountability for violence, and addressing the root causes of drug trafficking and poverty that perpetuate conflict.`

const PERU_ISSUES = [
  'Police and military violence during social protests',
  'Drug trafficking organization territorial control and violence',
  'Incomplete transitional justice for historical conflict crimes',
  'Indigenous community displacement and environmental destruction',
  'Femicide and gender-based violence'
]

// 9 - VENEZUELA
const VENEZUELA_SUMMARY = `Venezuela represents one of the Western Hemisphere's most severe human rights crises, characterized by systematic state violence, arbitrary detention, torture, and near-total institutional collapse. Nicolás Maduro's authoritarian regime, which consolidated power through a disputed 2018 election and rigged 2020 and 2024 elections, maintains control through security forces and armed gangs known as "colectivos." Political prisoners are detained in military facilities without due process, subjected to torture, and denied access to family or lawyers. Thousands have fled, creating a refugee crisis affecting regional stability. Press freedom has been virtually eliminated—critical journalists face arrest, exile, or violence. State media spreads propaganda while independent outlets operate under constant threat. The opposition Democratic Unity Roundtable remains marginalized despite commanding popular support. Women face systematic sexual violence, including as a state tactic against political prisoners. Maternal mortality has skyrocketed due to healthcare collapse. LGBTQ+ individuals face violence and discrimination in a society marked by machismo culture and state indifference. Indigenous peoples suffer from resource extraction, displacement, and marginalization. The military controls institutions, courts, and security, enabling impunity for state crimes. Economic collapse has forced millions into exile—over 7 million Venezuelans have fled since 2010. The few remaining international mechanisms for accountability face government obstruction. Maduro's regime represents authoritarian governance at its worst: no genuine elections, no independent judiciary, no press freedom, systematic torture, and near-total breakdown of the rule of law. International pressure has been limited by geopolitical considerations, allowing the regime to persist in its abuses.`

const VENEZUELA_ISSUES = [
  'Political detention, torture, and extrajudicial killings by state security forces',
  'Complete suppression of press freedom and independent journalism',
  'Sexual violence against women including as state tactic',
  'Armed gang (colectivo) violence and state support for gang activity',
  'Mass forced displacement and refugee crisis affecting 7+ million people'
]

// 10 - ECUADOR
const ECUADOR_SUMMARY = `Ecuador's human rights situation has deteriorated significantly as criminal organizations, particularly Mexican cartels, have expanded drug trafficking operations, leading to unprecedented gang violence and state fragmentation. The country faces a security crisis that has overwhelmed institutions and destabilized democratic governance. Gang violence, including prison massacres and territorial conflicts, has resulted in thousands of deaths and displaced communities. Prisons have become gang strongholds, with authorities unable to maintain order or provide security to inmates. Press freedom, while constitutionally protected, is endangered by violence against journalists investigating organized crime. Several journalists have been killed or threatened. LGBTQ+ individuals, journalists, human rights defenders, and members of marginalized communities face gang violence and extortion. Police and military forces, insufficient to address the security crisis, have sometimes engaged in extrajudicial killings. Indigenous communities face displacement from land targeted for drug cultivation and trafficking routes. Women face epidemic levels of gender-based violence, exacerbated in gang-controlled territories where gang rape is used as control mechanism. Sexual violence against minors is rampant. The economic crisis has left government institutions under-resourced and vulnerable to corruption and gang infiltration. Presidential transitions have been marked by violence and institutional instability. International demand for cocaine perpetuates the criminal organizations' power and violence. Ecuador's challenge is rebuilding institutional capacity, security sector reform, and addressing economic desperation that enables gang recruitment while protecting human rights in a context of near-state collapse.`

const ECUADOR_ISSUES = [
  'Gang violence and territorial control by criminal organizations',
  'Prison massacres and gang control of correctional facilities',
  'Violence against journalists investigating organized crime',
  'Sexual violence against women and minors as control mechanism',
  'Institutional collapse and police accountability gaps'
]

// 11 - BOLIVIA
const BOLIVIA_SUMMARY = `Bolivia's human rights landscape reflects deep inequalities, institutional weakness, and ongoing tensions related to land rights, indigenous governance, and political instability. The 2006-2019 presidency of Evo Morales advanced indigenous rights and implemented some social programs, but the disputed 2019 election, subsequent police crackdown, and Morales's forced exile created a humanitarian crisis. The interim government of Jeanine Áñez witnessed security force violence against indigenous protesters, resulting in deaths and injuries. Democratic elections in 2020 returned Luis Arce to office as Morales's ally, but tensions remain. Press freedom is constitutionally protected, but indigenous communities in rural areas have limited media access and indigenous media faces pressure. LGBTQ+ rights have expanded—Bolivia allows gender self-identification and recognizes same-sex partnerships—yet violence and discrimination persist in conservative communities. Women face significant gender-based violence, with inadequate police response and prosecution. Land disputes between indigenous communities, farmers, and agribusiness result in violence and displacement. Indigenous and campesino communities face marginalization in political representation and economic opportunity despite majority population status. Mining and hydrocarbon extraction operations have displaced indigenous communities and caused environmental damage. Police conduct during protests raises concerns about excessive force and accountability. Prisons are overcrowded with inadequate conditions. Corruption permeates institutions, enabling impunity for serious crimes. Bolivia's challenge is reconciling indigenous empowerment and representation with institutional stability, ensuring minority rights protection, and addressing economic inequality that drives conflict.`

const BOLIVIA_ISSUES = [
  'Police violence against indigenous protesters and inadequate accountability',
  'Land disputes between indigenous communities and agribusiness operations',
  'Mining and hydrocarbon extraction causing displacement and environmental damage',
  'Gender-based violence and inadequate institutional response',
  'Prison overcrowding and systemic inequality'
]

// 12 - PARAGUAY
const PARAGUAY_SUMMARY = `Paraguay's human rights situation reflects institutional weakness, corruption, and inadequate attention to marginalized communities. Constitutional protections for expression, conscience, and assembly exist but are inconsistently implemented, particularly in rural areas. Press freedom is formally protected, but journalists investigating corruption and organized crime face threats. Rural violence, particularly related to land disputes between indigenous communities and large landowners, remains endemic. Indigenous communities, while constitutionally recognized, face severe marginalization in land rights, healthcare, education, and economic participation. Land ownership is extremely concentrated, with campesino and indigenous communities displaced and impoverished. Police conduct toward marginalized populations raises concerns about excessive force and discrimination. LGBTQ+ individuals face discrimination and violence, with criminal law previously criminalizing homosexuality (recently reformed). Women face significant gender-based violence, including domestic abuse and femicide, with inadequate prosecution. Child labor, though illegal, persists particularly in agriculture. Prison conditions are dire, with overcrowding, gang violence, and inadequate healthcare. Corruption pervades institutions, enabling impunity for serious crimes and human rights abuses. Corruption involving state officials and organized crime networks facilitates trafficking and contraband. The judiciary, while formally independent, is vulnerable to political and economic pressure. Paraguay's challenge is strengthening institutions, ensuring accountability for rights violations, addressing land inequality, and protecting marginalized populations, particularly indigenous communities and women.`

const PARAGUAY_ISSUES = [
  'Land disputes and violence against indigenous communities',
  'Gender-based violence and femicide with inadequate prosecution',
  'Police conduct toward marginalized populations and excessive force',
  'Prison overcrowding and gang control of correctional facilities',
  'Systemic corruption enabling trafficking and organized crime'
]

// 13 - URUGUAY
const URUGUAY_SUMMARY = `Uruguay is one of South America's most stable democracies and has one of the region's strongest human rights records. Constitutional protections for expression, conscience, assembly, and due process are consistently respected. Independent judiciary and robust civil society enable accountability for rights violations. Press freedom is well-protected, with diverse media landscape and independent journalism investigating government and corporate accountability. Uruguay has advanced LGBTQ+ rights—it was among Latin America's first countries to recognize same-sex unions and allows gender self-identification. Women's rights are comparatively well-protected, with laws addressing gender-based violence and reproductive rights access. However, femicide and domestic violence remain concerns requiring sustained institutional response. The police force, while generally professional, has raised some concerns regarding excessive force, particularly toward marginalized communities. Prisons are less overcrowded than regional neighbors but still face challenges in rehabilitation focus and gang activity. Indigenous (Charrúa) communities, nearly eliminated by colonial genocide, are today small in population and face marginalization and cultural suppression, though recognition efforts have advanced. Migrant communities, particularly from neighboring countries, face discrimination and limited access to services. Economic inequality, though lower than regional average, drives concerns about access to healthcare, education, and economic opportunity. Uruguay's challenge is maintaining democratic commitments while addressing remaining gaps in social equity and ensuring marginalized populations receive adequate protections and opportunities.`

const URUGUAY_ISSUES = [
  'Marginalization of indigenous Charrúa communities and limited recognition',
  'Domestic violence and femicide requiring sustained institutional response',
  'Police conduct toward marginalized communities and discrimination',
  'Migrant community discrimination and limited access to services',
  'Economic inequality affecting access to healthcare and education'
]

// 14 - CUBA
const CUBA_SUMMARY = `Cuba represents a one-party authoritarian state where the Communist Party monopolizes political power and severely restricts fundamental freedoms. Press freedom does not exist—state media controls all major outlets, and independent journalism is prohibited and prosecuted. Free speech is constitutionally restricted to speech supporting the revolution; criticism of government or the revolution can result in arrest and imprisonment. Assembly rights are severely restricted—protests and demonstrations opposing government policy are illegal and suppressed with force. Human rights organizations are not permitted to operate; citizens attempting to advocate for rights face arrest. Political prisoners, while formally reduced in number through international pressure, remain detained, and new arrests of political activists continue. The government maintains that political prisoners don't exist, but detainees held for opposing the regime number in the hundreds. LGBTQ+ rights represent a more complex picture: legal penalties for homosexuality were repealed in 1979, and Cuba has advanced transgender rights recognition compared to regional neighbors. Yet acceptance remains limited, and LGBTQ+ individuals in rural areas face social discrimination. Women's rights protections exist constitutionally, and women's workforce participation is high, yet gender-based violence persists. Press coverage of women's issues is limited. Religious freedom is restricted—religious organizations face government surveillance and limitations on activity. Economic rights are violated through state monopoly on employment and severe restrictions on private enterprise limiting economic opportunity. Food shortages and rationing affect basic rights to adequate food. Dissidents face harassment, surveillance, and arrest. International scrutiny is limited by geopolitical isolation. Cuba's system prioritizes state control over individual liberty, with limited accountability mechanisms.`

const CUBA_ISSUES = [
  'Complete suppression of press freedom and state monopoly on media',
  'Political imprisonment and arrest of dissidents and activists',
  'Prohibition of independent civil society and human rights organizations',
  'Restrictions on freedom of assembly and prohibition of opposition protests',
  'Economic restrictions limiting private enterprise and employment opportunity'
]

// 15 - HAITI
const HAITI_SUMMARY = `Haiti represents one of the Caribbean's most severe humanitarian crises, characterized by poverty, gang violence, political instability, and institutional collapse. Gangs control vast territories, particularly in Port-au-Prince, perpetrating systematic violence including kidnapping, sexual violence, and extortion. Police forces, under-resourced and corrupted, are unable to maintain order or provide security to citizens. Kidnapping for ransom has become epidemic—gangs target businesspeople, children, and ordinary citizens with impunity. Sexual violence, particularly gang rape used as control mechanism and weapon, affects thousands, predominantly women and girls. The healthcare system has collapsed; hospitals lack supplies and security. Maternal mortality is among world's highest due to lack of healthcare access and sexual violence. Press freedom is formally protected constitutionally, but journalists covering gang violence and political corruption face threats and attacks. Several journalists have been killed. Food insecurity affects majority of population as economic collapse and gang violence prevent agricultural production and commerce. Schools are closed due to gang violence; education is inaccessible to most children. The political system is unstable—recent leaders have been assassinated or ousted. International response, including UN peacekeeping, has been controversial and inadequate. The international community's historical exploitation of Haiti and current limited engagement perpetuates helplessness. The situation represents complete state failure to protect citizens' rights. LGBTQ+ individuals face discrimination and violence in a conservative society. Haitian diaspora communities abroad advocate for change but power remains limited. Haiti requires international humanitarian assistance, security sector reconstruction, and institution-building, but political will from international community and regional players remains insufficient.`

const HAITI_ISSUES = [
  'Gang violence and territorial control, kidnapping epidemic',
  'Sexual violence against women and girls as weapon of control',
  'Police institutional collapse and inability to maintain security',
  'Healthcare system collapse and epidemic maternal mortality',
  'Food insecurity and inaccessible education'
]

// 16 - DOMINICAN REPUBLIC
const DOMINICAN_REPUBLIC_SUMMARY = `The Dominican Republic maintains stronger institutional capacity than some regional neighbors but faces significant human rights challenges related to poverty, discrimination, and gang violence. Constitutional protections for expression, conscience, and assembly are generally respected in urban areas but less consistently in rural and marginalized communities. Press freedom is legally protected, with vibrant media landscape, though journalists investigating corruption and organized crime face threats. The Jamaica Labour Party government has maintained democratic institutions while addressing security challenges. Gang violence, particularly related to drug trafficking, affects poor urban neighborhoods and border regions. Extrajudicial killings by police, though reduced through anti-corruption efforts, remain a concern. LGBTQ+ individuals face significant discrimination—the penal code technically criminalizes same-sex conduct, though enforcement is inconsistent. Violence and discrimination against LGBTQ+ people remain widespread. Women face gender-based violence and economic discrimination, with femicide a serious concern. Violence against women in poor communities is often connected to gang activity. Haitian migrants and undocumented immigrants face systematic discrimination and abuse by police and private actors, including labor exploitation and violence. Children of Haitian migrants lack citizenship recognition, creating statelessness and vulnerability. Racial discrimination against dark-skinned citizens and Haitian migrants persists despite constitutional prohibitions. Child labor remains an issue in agriculture and domestic work. Prisons are overcrowded with gang activity and violence. The judiciary, while more independent than regional peers, remains vulnerable to political influence and corruption. The Dominican Republic's challenge is deepening institutional reforms, ensuring accountability for rights violations, and addressing discrimination against marginalized and migrant populations.`

const DOMINICAN_REPUBLIC_ISSUES = [
  'Gang violence related to drug trafficking and extrajudicial police killings',
  'Discrimination and violence against LGBTQ+ individuals',
  'Systematic discrimination against Haitian migrants and undocumented immigrants',
  'Gender-based violence and femicide',
  'Child labor and labor exploitation'
]

// 17 - GUATEMALA
const GUATEMALA_SUMMARY = `Guatemala's human rights situation remains deeply problematic, marked by poverty, gang violence, indigenous marginalization, and institutional weakness. Arévalo's recent presidency promised anti-corruption reforms, but institutional resistance from actors benefiting from existing structures remains significant. The country has a history of genocide and systematic violence against indigenous Maya populations; transitional justice efforts have achieved convictions but remain incomplete. Indigenous communities today face ongoing discrimination, marginalization in land rights, education, healthcare, and economic participation. Land disputes between indigenous communities and agribusiness (particularly palm oil and sugar operations) result in violence and displacement. Environmental destruction from extractive industries affects indigenous territories without adequate consultation. Press freedom is constitutionally protected, but journalists investigating corruption, gang violence, and indigenous rights face threats and attacks. Several journalists have been killed. Gang violence, particularly from MS-13 and Barrio 18, controls vast territories, establishing parallel power structures. Extortion is systematic; gangs control commerce and territory through violence. Police and military forces, corrupted and under-resourced, are ineffective at combating gangs. Human rights defenders and activists face threats and violence. LGBTQ+ individuals face discrimination and violence in a society marked by entrenched machismo and Christian conservatism. Women face epidemic gender-based violence—femicide is systematic, with inadequate investigation and prosecution. Children are trafficked internally and transnationally for labor and sexual exploitation. Prisons are overcrowded gang strongholds with gang wars and inadequate conditions. Corruption pervades all institutions, enabling impunity. Guatemala's challenge is institutional reform, anti-corruption action, security sector reconstruction, and addressing root causes of violence embedded in inequality and indigenous marginalization.`

const GUATEMALA_ISSUES = [
  'Indigenous marginalization and systematic discrimination in land and economic rights',
  'Gang violence and territorial control by criminal organizations',
  'Journalist killings and threats to press freedom',
  'Femicide and endemic gender-based violence',
  'Human trafficking of children for labor and sexual exploitation'
]

// 18 - HONDURAS
const HONDURAS_SUMMARY = `Honduras faces one of Central America's highest murder rates and a severe human rights crisis rooted in gang violence, institutional corruption, and poverty. The country has experienced political instability including coups and constitutional crises, creating weak institutions. Gang violence—MS-13, Barrio 18, and their offshoots—controls vast territories through systematic violence, extortion, and territorial control. Police and military forces, under-resourced and corrupted, are inadequate to address security challenges. Extrajudicial killings by security forces, though reduced, remain a concern. LGBTQ+ individuals face systematic violence and discrimination—Honduras has one of the highest transgender murder rates globally. Violence against LGBTQ+ people includes gang violence, family violence, and police indifference. Women face epidemic gender-based violence and femicide, with inadequate institutional response. Journalists investigating gang violence, corruption, and human rights abuses face threats and attacks; several have been killed. Press freedom is constitutionally protected but endangered in practice. Indigenous communities, particularly the Garifuna people, face marginalization, land disputes with mining and agribusiness operations, and violence. Environmental defenders protecting rainforests face threats from illegal logging interests. Prisons are overcrowded gang strongholds with extreme violence. Child labor persists in agriculture and domestic work. Forced child recruitment into gangs affects thousands. The security crisis has created displacement and refugee flows to neighboring countries. Corruption pervades all institutions, enabling impunity for serious crimes. Honduras's challenge is fundamental institutional reconstruction, security sector reform, gang violence reduction, and ensuring protection for marginalized populations while addressing poverty and inequality that perpetuate violence.`

const HONDURAS_ISSUES = [
  'Gang violence and territorial control with highest regional murder rates',
  'Violence against LGBTQ+ individuals with particularly high transgender murder rate',
  'Femicide and epidemic gender-based violence',
  'Journalist killings and threats investigating gang violence',
  'Indigenous marginalization and environmental defender threats'
]

// 19 - EL SALVADOR
const EL_SALVADOR_SUMMARY = `El Salvador's human rights situation presents a complex picture of government anti-gang military operations that have achieved reductions in violence but raised serious concerns about mass arrests, due process violations, and extrajudicial killings. Nayib Bukele's presidency initiated an extraordinary "war on gangs" in 2022, declaring a state of emergency and deploying military against gang members. While gang-related murders have decreased, the government has arrested nearly 70,000 gang members and alleged gang members. Concerns about due process abound—mass arrests without adequate individual investigation, detention in overcrowded facilities, and allegations of torture. Prisons have become military-controlled detention centers packed with gang members and alleged gang members. International human rights organizations have documented forced confessions and abuse. Courts operate under pressure to convict; independence is compromised. Press freedom, while constitutionally protected, is undermined by government pressure and limited access to information. Journalists reporting on gang violence and government security operations face restrictions. LGBTQ+ individuals have gained rights recognition—same-sex civil unions are recognized—yet violence and discrimination persist in conservative communities. Women face gender-based violence and femicide despite government security operation promises. Sexual violence remains endemic. Migrants transiting El Salvador face gang violence and extortion. The government's approach, while reducing gang violence in the short term, raises concerns about long-term sustainability, human rights protections, and whether military-focused solutions address root causes of poverty and gang recruitment. The economy remains challenged; poverty and inequality persist despite security improvements.`

const EL_SALVADOR_ISSUES = [
  'Mass arrests without adequate due process in anti-gang operations',
  'Prison overcrowding and allegations of torture in military detention facilities',
  'Gender-based violence and femicide despite security operations',
  'Press freedom restrictions and limited access to information',
  'Migrant vulnerability to gang violence and extortion'
]

// 20 - NICARAGUA
const NICARAGUA_SUMMARY = `Nicaragua represents an authoritarian state where Daniel Ortega's Sandinista government has consolidated power through electoral manipulation, harassment of opposition, and suppression of dissent. Constitutional protections for human rights exist on paper but are routinely violated in practice. The 2018 anti-government protests were brutally suppressed; security forces killed over 325 people, disappeared scores, and imprisoned hundreds. Opposition candidates have been imprisoned on fabricated charges; the government bars major opposition parties from elections. Press freedom has been decimated—critical journalists face arrest, exile, or violence. Multiple independent news outlets have been shut down; state media dominates. LGBTQ+ individuals face discrimination and limited legal protections, though constitutional amendments have prohibited sexual orientation discrimination. Yet violence against LGBTQ+ people persists in society. Women's rights protections exist constitutionally, including reproductive rights, but implementation is inconsistent. Gender-based violence remains endemic. Indigenous and Afro-Caribbean communities, particularly the Miskito people on the Atlantic Coast, face marginalization, land disputes, and limited political representation. Environmental defenders protecting rainforests and rivers face threats and violence. Human rights defenders face arrest, violence, and exile. Thousands of Nicaraguans have fled, creating refugee flows to neighboring countries and the United States. Corruption pervades institutions; the ruling family controls major economic sectors. International isolation, including U.S. sanctions, has affected the economy but also allowed the regime to consolidate control. Nicaragua represents authoritarian consolidation in the region with little accountability for rights violations.`

const NICARAGUA_ISSUES = [
  'Electoral manipulation and opposition party prohibition',
  'Press freedom suppression and journalist imprisonment',
  'Massacre of 2018 protesters and ongoing political imprisonment',
  'Indigenous community marginalization and land disputes',
  'Environmental defender threats and violence'
]

// 21 - COSTA RICA
const COSTA_RICA_SUMMARY = `Costa Rica is one of Central America's most stable democracies and has one of the region's strongest human rights records, though challenges remain. Constitutional protections for expression, conscience, assembly, and due process are generally respected. Independent judiciary and robust civil society enable accountability for rights violations. Press freedom is well-protected, with diverse media landscape and independent journalism investigating government and corporate accountability. Costa Rica has advanced LGBTQ+ rights—it recognizes same-sex partnerships and allows gender self-identification—though discrimination and violence against LGBTQ+ individuals persist in conservative communities, particularly against transgender people. Women's rights are relatively well-protected constitutionally, though gender-based violence and femicide remain concerns. Reproductive rights access is available, though there remain religious objections to some procedures. The country benefits from having abolished its military in 1949, reducing militarized responses to security challenges. However, gang violence related to drug trafficking has increased, affecting security and human rights. Police conduct during drug trafficking enforcement raises concerns about excessive force. Migrant communities, particularly from Central America, face discrimination and limited access to services, though Costa Rica has been relatively welcoming compared to regional neighbors. Child labor persists in agriculture and domestic work. Prison conditions are concerning—overcrowding and gang activity affect security within facilities. Corruption has become a greater concern, with recent high-profile cases affecting institutional confidence. Costa Rica's challenge is maintaining democratic commitments while addressing emerging security challenges, gang violence, and ensuring protections for migrant and marginalized populations while preserving the institutional strengths that have made it a regional leader.`

const COSTA_RICA_ISSUES = [
  'Gang violence related to drug trafficking and increased security challenges',
  'Gender-based violence and femicide',
  'Migrant discrimination and limited access to services',
  'Police conduct during drug enforcement operations',
  'Prison overcrowding and gang activity'
]

// 22 - PANAMA
const PANAMA_SUMMARY = `Panama's human rights situation reflects institutional instability, gang violence, and economic inequality, despite constitutional protections for fundamental freedoms. Martín Torrijos's presidency has faced numerous challenges including gang violence, prison overcrowding, and political polarization. Press freedom is constitutionally protected, with diverse media landscape, though journalists investigating corruption and organized crime face threats. Gang violence, related to drug trafficking through the country's strategic position, affects urban areas and border regions. Police conduct raises concerns about excessive force, particularly toward marginalized communities. LGBTQ+ individuals have gained marriage equality and gender recognition rights, advancing their legal protections compared to regional neighbors. Yet violence and discrimination against LGBTQ+ people persist. Women face gender-based violence and femicide, with inadequate institutional response. The control of the Panama Canal provides significant economic resources, yet wealth inequality is extreme, with poverty affecting significant portions of the population. Indigenous communities, including the Guna and Emberá peoples, face marginalization in land rights, healthcare, and economic participation. Land disputes between indigenous communities and development projects result in displacement. Environmental destruction from mining and development projects affects indigenous territories. Prison conditions are dire—overcrowding, gang control, and violence characterize correctional facilities. Police conduct toward marginalized communities raises concerns about discrimination. Corruption has affected institutional capacity. Panama's challenge is addressing economic inequality, gang violence, security sector reform, and ensuring protection for indigenous and marginalized populations while managing the economic and political significance of the Panama Canal.`

const PANAMA_ISSUES = [
  'Gang violence and drug trafficking territorial control',
  'Prison overcrowding and gang control of correctional facilities',
  'Indigenous marginalization in land and economic rights',
  'Gender-based violence and femicide',
  'Police conduct and discrimination toward marginalized communities'
]

// 23 - JAMAICA
const JAMAICA_SUMMARY = `Jamaica's human rights situation reflects institutional capacity challenges, gang violence, and significant inequality, despite constitutional protections for fundamental freedoms. Andrew Holness's Jamaica Labour Party government has maintained democratic institutions while addressing serious security challenges. Gang violence, related to drug trafficking and territorial control, affects Kingston and other urban centers. Police conduct in gang-affected areas raises serious concerns about excessive force and extrajudicial killings. The police force, the Jamaica Constabulary Force, has faced numerous allegations of human rights abuses. LGBTQ+ individuals face systematic violence and discrimination despite legal equality protections. Jamaica has one of the highest LGBT-related murder rates globally. The society remains deeply homophobic, with churches and cultural institutions opposing LGBTQ+ rights. Violence against transgender individuals is particularly severe. Women face endemic gender-based violence, including intimate partner violence and sexual assault, with inadequate institutional response. The cultural acceptance of violence against women limits institutional willingness to prosecute. Children are vulnerable to trafficking and commercial sexual exploitation. Press freedom is constitutionally protected, with independent journalism investigating government and corporate accountability. Journalists covering gang violence and police misconduct face threats. Prison conditions are concerning—overcrowding and gang violence characterize facilities. Corruption has affected institutional capacity, particularly in police and judiciary. Economic inequality is severe; poverty drives gang recruitment and violence. Jamaica's challenge is addressing gang violence without compromising human rights, reforming police conduct, ensuring accountability for violence against LGBTQ+ and women, and addressing inequality.`

const JAMAICA_ISSUES = [
  'Gang violence and drug trafficking territorial control',
  'Violence against LGBTQ+ individuals with high transgender murder rate',
  'Police excessive force and extrajudicial killings',
  'Gender-based violence and sexual assault',
  'Prison overcrowding and gang control'
]

// 24 - TRINIDAD AND TOBAGO
const TRINIDAD_AND_TOBAGO_SUMMARY = `Trinidad and Tobago's human rights situation reflects a country with relatively strong institutions challenged by gang violence, drug trafficking, and economic inequality. Keith Rowley's People's National Movement government has maintained democratic structures while addressing serious security challenges. Gang violence, related to drug trafficking, affects Port of Spain and other areas. Extrajudicial killings by police, though reduced through reforms, remain a concern. The police service has faced allegations of human rights abuses, excessive force, and discrimination toward marginalized communities. Press freedom is constitutionally protected, with independent media investigating government and corporate accountability. LGBTQ+ individuals face discrimination and violence despite legal equality protections. The country remains conservative in social attitudes; LGBTQ+ individuals face family and social rejection. Violence against gay and transgender people occurs with inadequate police response. Women face gender-based violence and femicide, though the government has implemented some protections and prosecution efforts. Sexual violence against women and girls remains endemic. Children are vulnerable to trafficking, particularly for sexual exploitation. Prisons are overcrowded, gang-controlled facilities with violence and inadequate conditions. Prison education and rehabilitation programs are limited. Corruption affects institutional capacity, particularly in police and lower judiciary. Economic inequality is significant despite the country's oil wealth—poverty affects segments of the population. The government has implemented some security measures and anti-trafficking initiatives. Trinidad and Tobago's challenge is sustaining institutional reforms, reducing gang violence and police misconduct, ensuring accountability for rights violations, and addressing root causes of violence embedded in inequality and drug trafficking.`

const TRINIDAD_AND_TOBAGO_ISSUES = [
  'Gang violence and drug trafficking territorial control',
  'Police excessive force and extrajudicial killings',
  'Violence against LGBTQ+ individuals and inadequate protection',
  'Gender-based violence and femicide',
  'Prison overcrowding and gang control'
]

// 25 - GUYANA
const GUYANA_SUMMARY = `Guyana's human rights situation reflects recent democratic improvements and economic development from oil resources, yet persistent institutional challenges and emerging concerns remain. President Mohamed Irfaan Ali's People's Progressive Party government has promoted economic development through oil production and development. Constitutional protections for human rights exist, though implementation remains inconsistent, particularly in rural and indigenous areas. Press freedom is constitutionally protected, with independent media, though journalists investigating government corruption have faced pressure. Gang violence, related to drug trafficking through Guyana's position on trafficking routes, affects urban areas. Police conduct raises concerns about excessive force, particularly toward marginalized communities. LGBTQ+ individuals have achieved legal rights—Guyana recognizes same-sex partnerships—yet discrimination and violence persist, particularly against transgender individuals. Women face gender-based violence, sexual assault, and inadequate institutional response. Sexual violence is endemic; domestic violence is culturally accepted in many communities. Indigenous communities, including the Arawak, Carib, and Warao peoples, face marginalization in land rights, healthcare, and economic participation. Oil extraction and mining operations affect indigenous territories without adequate consultation. Environmental destruction from extractive industries impacts indigenous livelihoods. Prison conditions are concerning—overcrowding and violence characterize facilities. Rapid development from oil wealth creates pressure on institutional capacity. Corruption has affected institutional development, though the government has initiated anti-corruption measures. Guyana's challenge is managing oil wealth equitably, ensuring indigenous rights protection, reforming police conduct, reducing gang violence, and building institutional capacity to protect human rights amid rapid economic transformation.`

const GUYANA_ISSUES = [
  'Indigenous marginalization in land and economic rights',
  'Gang violence and drug trafficking exploitation of territorial position',
  'Police conduct and excessive force toward marginalized communities',
  'Gender-based violence and sexual assault',
  'Environmental destruction from extractive industries'
]

// 26 - SURINAME
const SURINAME_SUMMARY = `Suriname's human rights situation reflects a small Caribbean nation with democratic institutions but persistent challenges related to economic hardship, institutional weakness, and drug trafficking. Chandrasekar Santokhi's government has faced economic crisis and inflation, limiting institutional capacity for human rights enforcement. Constitutional protections for expression, conscience, and assembly exist, though implementation varies. Press freedom is constitutionally protected, with independent media, though economic pressures limit journalism investment. Gang violence related to drug trafficking affects urban areas, particularly Paramaribo. Police capacity to address crime is limited; corruption affects the police force. LGBTQ+ individuals have achieved legal protections—same-sex relationships are decriminalized, gender recognition is available—yet discrimination and violence persist in conservative communities. Women face gender-based violence and sexual assault, with inadequate institutional response. Maroon and indigenous communities, descendants of enslaved people and indigenous populations, face marginalization in economic participation, land rights, and access to services. These communities remain significantly poorer than other population groups. Child labor persists in informal economy and domestic work. Prisons are overcrowded with inadequate conditions. Economic crisis has affected government services, including healthcare and education access. Corruption affects institutional capacity, limiting human rights enforcement. Development projects affecting indigenous and Maroon territories have proceeded without adequate consultation. Suriname's challenge is addressing economic crisis, building institutional capacity, ensuring protection for indigenous and Maroon communities, reducing drug trafficking violence, and addressing inequality without being overwhelmed by economic constraints.`

const SURINAME_ISSUES = [
  'Maroon and indigenous community marginalization and economic inequality',
  'Gang violence and drug trafficking',
  'Gender-based violence and sexual assault',
  'Police conduct and limited institutional capacity',
  'Economic crisis affecting social services'
]

// 27 - BELIZE
const BELIZE_SUMMARY = `Belize's human rights situation reflects a small English-speaking Caribbean nation with democratic institutions and relatively strong protections, yet facing gang violence, drug trafficking, and institutional challenges. John Briceño's People's United Party government has promoted democratic governance while addressing security challenges. Constitutional protections for expression, conscience, assembly, and due process are generally respected. Press freedom is well-protected, with independent media investigating government and corporate accountability. LGBTQ+ individuals have achieved legal protections—same-sex relationships are decriminalized, gender recognition is available—yet social discrimination persists in conservative communities. Violence against LGBTQ+ individuals is documented, though the government has initiated protection measures. Women's rights are protected constitutionally, though gender-based violence and femicide remain concerns. The government has implemented domestic violence protections, yet enforcement is inconsistent. Gang violence related to drug trafficking through Belize's geographic position affects northern and western areas. Police conduct during gang enforcement raises concerns about excessive force. Indigenous communities, including the Maya peoples, face marginalization in land rights and economic participation. Land disputes between indigenous communities and private operators affect indigenous territories. Environmental destruction from extractive industries impacts indigenous communities. Prison overcrowding and gang activity characterize correctional facilities. Corruption has affected institutional capacity, though anti-corruption measures have been initiated. Economic inequality is significant; poverty drives gang recruitment and violence. Belize's challenge is maintaining democratic institutions, addressing gang violence and drug trafficking without compromising human rights, ensuring indigenous rights protection, and reforming police conduct while addressing economic inequality.`

const BELIZE_ISSUES = [
  'Indigenous community marginalization in land and economic rights',
  'Gang violence and drug trafficking territorial control',
  'Gender-based violence and femicide',
  'Police conduct and excessive force concerns',
  'Prison overcrowding and gang control'
]

// 28 - UNITED KINGDOM
const UK_SUMMARY = `The United Kingdom maintains strong democratic institutions, constitutional protections for human rights through the Human Rights Act, and generally strong press freedom and civil society. Parliamentary democracy with separation of powers and independent judiciary provide mechanisms for rights protection and accountability. Press freedom is well-protected, with diverse media landscape and investigative journalism. Yet the UK faces emerging human rights challenges requiring attention. Post-Brexit immigration policies have become increasingly restrictive, raising concerns about refugees' and migrants' rights. Asylum seekers face harsh conditions in temporary accommodations and have faced controversial deportation proposals (Rwanda plan). Detention of asylum seekers has expanded. LGBTQ+ rights are well-protected legally; same-sex marriage is recognized, gender recognition is available. Yet transphobic speech and policy proposals targeting transgender individuals have increased. Violence and discrimination against transgender and gender-nonconforming people persist. Women's rights are constitutionally protected, yet gender-based violence remains endemic—femicide rates are significant. The police response to violence against women has been criticized. Minority communities, particularly Muslims, face discrimination and Islamophobic harassment, exacerbated post-terrorism concerns. Racial disparities in policing are documented; stop-and-search practices disproportionately affect people of color. Police conduct during protests and racial justice demonstrations raised concerns. Prisons are overcrowded with inadequate conditions affecting mental health and rehabilitation. The Prevent counter-extremism program has raised civil liberties concerns. Economic inequality, exacerbated by austerity policies, affects access to healthcare and social services. The UK's challenge is balancing security concerns with human rights protections, ensuring refugee and migrant rights, addressing racial disparities in policing, protecting LGBTQ+ rights, and addressing economic inequality affecting vulnerable populations.`

const UK_ISSUES = [
  'Asylum seeker detention and deportation policy concerns',
  'Racial disparities in policing and stop-and-search practices',
  'Transgender discrimination and transphobic policy proposals',
  'Gender-based violence and femicide',
  'Prison overcrowding and mental health concerns'
]

// 29 - FRANCE
const FRANCE_SUMMARY = `France maintains strong democratic institutions and constitutional protections for human rights, with an independent judiciary and robust civil society. Press freedom is well-protected; French media landscape is diverse with investigative journalism. The European Union's human rights framework provides additional protections. Yet France faces significant human rights challenges requiring attention. Muslim and North African immigrant communities face systematic discrimination in employment, housing, and policing. Police violence in low-income neighborhoods (banlieues) with large immigrant populations is documented; deaths in police custody raise concerns. The 2005 riots in immigrant-dense areas were triggered by police violence. Security measures enacted post-terrorism have been criticized for targeting Muslim communities, including mosque raids and intelligence gathering. Islamophobic hate crimes have increased. LGBTQ+ rights are well-protected legally; same-sex marriage and gender recognition are available. Yet violence against LGBTQ+ individuals persists. Women's rights are constitutionally protected, yet gender-based violence remains endemic; femicide rates are significant. Workplace discrimination based on sex remains a concern. Roma communities face extreme marginalization and discrimination; France has deported Roma populations despite EU protections. Prisons are overcrowded with significant gang activity and violence. The French government's debate over immigration has become increasingly restrictive. Economic inequality affects access to healthcare and education, particularly in low-income neighborhoods. Police conduct during protests has raised concerns about excessive force. France's challenge is ensuring equal protection and non-discrimination for immigrant and minority communities, addressing police violence, protecting LGBTQ+ rights, addressing gender-based violence, and ensuring economic rights.`

const FRANCE_ISSUES = [
  'Police violence in low-income neighborhoods and institutional discrimination against minorities',
  'Islamophobic hate crimes and security measures targeting Muslim communities',
  'Roma marginalization and discriminatory deportation policies',
  'Gender-based violence and femicide',
  'Economic inequality affecting access to services'
]

// 30 - GERMANY
const GERMANY_SUMMARY = `Germany maintains strong democratic institutions, constitutional protections through the Basic Law, and robust human rights framework. Constitutional Court provides independent oversight; civil society is vibrant. Press freedom is well-protected; German media investigates government accountability. The post-WWII commitment to never again enables robust human rights protections and tolerance for civil society activism. Yet Germany faces emerging human rights challenges. Far-right extremism, manifested in the Alternative for Germany (AfD) party and white supremacist attacks, has increased. Synagogues and mosques have been attacked; antisemitism and Islamophobia have surged. Muslim communities face discrimination and surveillance, particularly post-terrorism concerns. Police conduct toward demonstrators, particularly climate activists and left-wing protesters, has raised concerns about excessive force. LGBTQ+ rights are well-protected legally; same-sex marriage is recognized, gender recognition is available. Yet violence and discrimination against transgender individuals persist. Gender-based violence remains endemic; femicide rates are significant. Violence against women, including intimate partner violence, remains widespread. Women's rights are protected constitutionally, yet workplace discrimination persists. Refugees and asylum seekers face discrimination; recent policies have become more restrictive. Deportations of asylum seekers and rejected refugees raise concerns. Roma and Sinti minorities face historical discrimination; modern discrimination persists in employment, housing, and education. Prisons accommodate adequate conditions; mental health services are available. Economic inequality, though lower than many developed countries, affects vulnerable populations. Germany's challenge is combating far-right extremism and supporting affected communities, ensuring refugee and migrant rights, protecting LGBTQ+ individuals, addressing gender-based violence, and ensuring non-discrimination for minority communities.`

const GERMANY_ISSUES = [
  'Far-right extremism and antisemitic and Islamophobic attacks',
  'Police conduct during protests and excessive force concerns',
  'Refugee and asylum seeker discrimination and restrictive policies',
  'Transgender discrimination and violence against LGBTQ+ individuals',
  'Gender-based violence and femicide'
]

// 31 - ITALY
const ITALY_SUMMARY = `Italy maintains democratic institutions and constitutional protections for human rights, with an independent judiciary and civil society. However, the rise of the right-wing Brothers of Italy (Fratelli d'Italia) under Giorgia Meloni raises concerns about institutional commitment to human rights. Constitutional provisions protect expression, conscience, and assembly, though their implementation is challenged by political polarization. Press freedom is constitutionally protected; Italian media is diverse. However, political pressure on journalists has increased. LGBTQ+ individuals lack formal legal recognition of same-sex partnerships or gender change without medical intervention, despite European peer advocacy. Violence against LGBTQ+ individuals persists; the government has resisted legal protections. Women's rights are constitutionally protected, yet gender-based violence is endemic—femicide rates are among Europe's highest. Intimate partner violence is culturally tolerated in some communities. Women face workplace discrimination and underrepresentation in political positions. Refugee and migrant communities face discrimination and exploitation. Immigration policies have become increasingly restrictive; proposals target asylum seekers. Roma and Sinti minorities face extreme marginalization and discrimination in employment, housing, and education. Land dispossession and violence against Roma communities occur with limited accountability. Prisons are overcrowded with gang activity and violence. Corruption affects institutional capacity, particularly in southern regions. Economic inequality is significant; youth unemployment in southern regions is particularly high. Police conduct during protests has raised concerns. Italy's challenge is protecting human rights amid political shifts toward authoritarianism, ensuring equality for LGBTQ+ individuals and minorities, protecting refugees, addressing gender-based violence, and combating corruption.`

const ITALY_ISSUES = [
  'LGBTQ+ lack of legal recognition and violence against LGBTQ+ individuals',
  'Gender-based violence with Europe\'s highest femicide rates',
  'Roma and Sinti marginalization and discrimination',
  'Refugee and migrant discrimination and restrictive policies',
  'Prison overcrowding and gang violence'
]

// 32 - SPAIN
const SPAIN_SUMMARY = `Spain maintains democratic institutions and strong constitutional protections for human rights, with an independent judiciary and active civil society. The transition from Franco's dictatorship in 1975 established democratic norms and human rights protections. Press freedom is well-protected; Spanish media investigates government accountability. Constitutional Court provides oversight. However, Spain faces significant human rights challenges. Catalan independence movement and the government's response raised concerns about police conduct during protests. Spanish National Police response to 2017 referendum voting included tear gas and force against voters. LGBTQ+ rights are well-protected legally; same-sex marriage is recognized, gender recognition is available, and protections against discrimination are strong. Yet violence and discrimination against LGBTQ+ individuals persists. Gender-based violence is endemic; femicide rates are significant. Intimate partner violence affects thousands of women. Women's workplace discrimination and underrepresentation persist. Immigration and asylum policies have become more restrictive. African migrants and asylum seekers face discrimination and poor conditions. Moroccan migrants face labor exploitation and discrimination. Roma communities face discrimination in employment, housing, and education. Prisons are overcrowded with gang activity and violence. Police conduct, particularly during independence protests, raised concerns about proportionality. Corruption affects some regional governments. Economic inequality is significant, particularly post-financial crisis. Youth unemployment remains high. Spain's challenge is protecting press freedom during political polarization, ensuring LGBTQ+ and women's rights, addressing police conduct, ensuring refugee and migrant protections, and addressing economic inequality.`

const SPAIN_ISSUES = [
  'Police conduct during Catalan independence protests and democratic space concerns',
  'Gender-based violence and femicide',
  'Migrant and asylum seeker discrimination and poor conditions',
  'Roma community marginalization in employment and housing',
  'Prison overcrowding and gang violence'
]

// 33 - POLAND
const POLAND_SUMMARY = `Poland maintains democratic institutions but faces significant challenges to judicial independence, press freedom, and minority rights under the Law and Justice party (PiS), though recent electoral changes have begun shifting this trajectory. The government's judicial reforms, criticized internationally as undermining independence, have been rolled back partially following recent electoral defeat. Constitutional protections for human rights exist, though government efforts have attempted to restrict their scope. Press freedom faces challenges; state media shows political bias favoring the government. Independent outlets face pressure and advertising boycotts. LGBTQ+ individuals lack full legal protections; same-sex partnerships are not recognized. The government has declared LGBTQ+ ideology "dangerous;" anti-LGBTQ+ rhetoric has increased. Violence against LGBTQ+ individuals persists. Transgender individuals face barriers to gender recognition. Women's reproductive rights have been severely restricted through near-total abortion bans, affecting women's bodily autonomy and healthcare access. Gender-based violence remains endemic. Polish-American communities—particularly those rejected by families for being LGBTQ+—face intersection of discrimination. Religious minorities, particularly Muslims and Jews, face discrimination and antisemitic rhetoric. Refugee and asylum seeker policies have become increasingly restrictive, particularly regarding refugees at the Belarus border. Migrants face detention and poor conditions. Prison conditions are concerning; overcrowding affects rehabilitation. Corruption affects institutional capacity. Economic inequality persists. Poland's challenge is protecting judicial independence from political pressure, ensuring press freedom, protecting LGBTQ+ and women's rights, ensuring refugee protections, and addressing corruption amid democratic backsliding.`

const POLAND_ISSUES = [
  'Judicial independence undermined by government reforms',
  'Press freedom pressure and state media political bias',
  'Abortion restrictions affecting women\'s reproductive rights and bodily autonomy',
  'LGBTQ+ discrimination and lack of legal protections',
  'Refugee and asylum seeker discrimination and restrictive policies'
]

// 34 - UKRAINE
const UKRAINE_SUMMARY = `Ukraine's human rights situation is catastrophically affected by Russia's 2022 invasion and ongoing war, which has fundamentally altered the human rights landscape and created unprecedented humanitarian crisis. Pre-war, Ukraine faced democratic backsliding, corruption, and minority rights concerns. The war has transformed these concerns into secondary issues amid acute humanitarian catastrophe. Military operations have resulted in mass civilian deaths, displacement of over 6 million internally and 6+ million refugees internationally. Documented war crimes—civilian massacres, torture of prisoners, sexual violence against women and girls—are being investigated. Infrastructure destruction has eliminated access to healthcare, education, and basic services. Humanitarian access is severely restricted in occupied and contested territories. Women and girls face systematic sexual violence used as war tactic; trafficking is rampant. Children are orphaned, traumatized, and vulnerable to trafficking. LGBTQ+ individuals face additional vulnerability in conflict; some soldiers reportedly commit violence against LGBTQ+ people. Press freedom, while essential to documenting war crimes, faces challenges during wartime. Journalists have been killed; some reporting is restricted for military reasons. Internally displaced persons face discrimination and inadequate support. Economic collapse has devastated livelihoods. International criminal investigations are ongoing for potential war crimes. The post-war human rights situation will require massive transitional justice mechanisms, reparations, and accountability. Ukraine's immediate challenge is humanitarian protection during ongoing conflict; long-term challenges include transitional justice, accountability for war crimes, and rebuilding institutions and services. The international community's responsibility includes supporting Ukraine's documentation of crimes and future accountability mechanisms.`

const UKRAINE_ISSUES = [
  'War crimes and mass civilian deaths from Russian invasion',
  'Displacement of 6+ million refugees and 6+ million internally displaced',
  'Sexual violence against women and girls as war tactic',
  'Destruction of infrastructure and humanitarian access restrictions',
  'Trafficking of children and vulnerable individuals'
]

// 35 - RUSSIA
const RUSSIA_SUMMARY = `Russia represents an authoritarian state where the ruling United Russia party and Vladimir Putin consolidate power through electoral manipulation, suppression of opposition, and severe restrictions on fundamental freedoms. Press freedom does not exist—independent journalism is criminalized, journalists are imprisoned or killed, and state media controls information. Critical coverage of government and Putin is prosecuted under vague laws. Internet censorship blocks independent news and opposition platforms. Free speech is severely restricted; criticism of the government, army, or war effort can result in arrest under new "extremism" laws. Assembly rights are suppressed—opposition protests are dispersed with force; participants face arrest and prosecution. Political opposition is systemically eliminated—opposition leaders are imprisoned, poisoned, or exiled. Elections are manipulated through ballot stuffing, coercion, and fraud; international observers are excluded. LGBTQ+ individuals face systematic persecution; "propaganda" laws criminalize LGBTQ+ expression and education. Violence against LGBTQ+ people occurs with impunity. Women face endemic gender-based violence; domestic violence laws are weak. Military aggression toward Ukraine constitutes crimes against humanity and war crimes. Minority ethnic and religious groups face discrimination and persecution. Political prisoners are detained in harsh conditions, subjected to torture, and denied due process. International human rights mechanisms are obstructed. Sanctions and international isolation have isolated Russia but not changed regime behavior. Russia represents systematic state violence against human rights with near-total institutional failure to protect citizens or respect international obligations.`

const RUSSIA_ISSUES = [
  'Suppression of press freedom and imprisonment of journalists',
  'Electoral manipulation and opposition elimination',
  'Persecution of LGBTQ+ individuals under propaganda laws',
  'War crimes and crimes against humanity in Ukraine',
  'Systemic torture and arbitrary detention of political prisoners'
]

// 36 - TURKEY
const TURKEY_SUMMARY = `Turkey's human rights situation has deteriorated significantly under Recep Tayyip Erdoğan's presidency, which has moved the country toward increasing authoritarianism despite maintaining electoral processes. Constitutional protections for human rights exist on paper but are routinely violated in practice. Press freedom has been severely restricted; independent journalists face imprisonment, threats, and exile. Thousands of journalists have been prosecuted under vague terrorism and insult laws. State media dominates; private outlets self-censor to survive. Free speech is restricted; criticism of Erdoğan and the government risks prosecution. Assembly rights are suppressed; opposition protests are dispersed with force. Internet is heavily censored; opposition platforms are blocked. The 2016 coup attempt prompted mass arrests, purges, and detention of alleged conspirators (real and fabricated). Over 700 individuals remain detained for terrorism-related charges with questionable evidence. LGBTQ+ individuals face discrimination and violence; the government has removed LGBTQ+ protections and proposed discriminatory legislation. Transgender individuals particularly face harassment and violence. Women face endemic gender-based violence and femicide; the government has withdrawn from the Istanbul Convention on violence against women. Kurdish minority faces systematic discrimination, repression, and violence. Kurdish politicians, activists, and journalists are arrested. Military operations in Kurdish areas involve documented civilian deaths. Forced displacement of Kurds occurs. Prisons are overcrowded with political prisoners and individuals convicted under terrorism laws. Torture allegations are documented. Refugees, including Syrians, face discrimination and deportation threats. The judiciary, while formally independent, is influenced by government pressure. Corruption affects institutions. Turkey represents democratic backsliding with systemic human rights abuses.`

const TURKEY_ISSUES = [
  'Press freedom suppression and journalist imprisonment',
  'Persecution of political opposition and terrorism law misuse',
  'Kurdish minority discrimination and military violence',
  'LGBTQ+ discrimination and violence',
  'Gender-based violence and femicide'
]

// 37 - GREECE
const GREECE_SUMMARY = `Greece maintains democratic institutions and constitutional protections for human rights, with an independent judiciary and civil society, though faces challenges related to minority rights, refugee treatment, and economic consequences of austerity. Constitutional protections for expression, conscience, assembly, and due process exist and are generally respected. Press freedom is well-protected; Greek media is diverse with investigative journalism. LGBTQ+ rights have expanded; same-sex civil partnerships are recognized, and gender recognition is available. Yet discrimination and violence against LGBTQ+ individuals persist, particularly against transgender people. Women's rights are constitutionally protected, yet gender-based violence remains endemic; femicide rates are significant. Intimate partner violence is widespread. Workplace discrimination based on sex remains. Muslim minority—primarily Turkish and Pomak populations in northern Greece—faces discrimination and restrictions on religious expression. Minority language education is limited. Roma communities face extreme marginalization in employment, housing, and education. Violence against Roma occurs with limited accountability. Refugee and migrant treatment has been highly controversial; Greece has faced criticism for harsh asylum policies, including pushbacks at maritime borders and inadequate conditions in reception facilities. Over one million Syrian refugees and other asylum seekers have transited Greece; many face prolonged detention and poor conditions. Prison conditions are concerning; overcrowding and gang activity characterize facilities. Police conduct during protests raised concerns about excessive force. Economic crisis and austerity policies have affected access to healthcare and education, particularly for low-income populations. Economic inequality is significant. Greece's challenge is ensuring refugee and migrant rights, protecting minority communities, addressing gender-based violence, and ensuring healthcare and education access amid economic constraints.`

const GREECE_ISSUES = [
  'Refugee and migrant treatment and harsh asylum policies',
  'Muslim minority discrimination and religious expression restrictions',
  'Roma marginalization and violence',
  'Gender-based violence and femicide',
  'Prison overcrowding and gang violence'
]

// 38 - BELGIUM
const BELGIUM_SUMMARY = `Belgium maintains democratic institutions and strong constitutional protections for human rights, with an independent judiciary and active civil society. Constitutional protections for expression, conscience, assembly, and due process are generally respected. Press freedom is well-protected; Belgian media is diverse with investigative journalism. LGBTQ+ rights are well-protected legally; same-sex marriage is recognized, gender recognition is available, and discrimination protections are comprehensive. Yet violence and discrimination against LGBTQ+ individuals persist. Women's rights are constitutionally protected, yet gender-based violence remains endemic; femicide rates are significant. Workplace discrimination based on sex and wage gaps persist. Muslim and North African immigrant communities face discrimination in employment, housing, and policing. Police conduct toward immigrant communities in Brussels and other cities raises concerns about racial profiling and excessive force. Islamophobic hate crimes have increased. Security measures enacted post-terrorism have targeted Muslim communities. Roma and Sinti minorities face discrimination in employment, housing, and education. Asylum seeker and refugee policies have become more restrictive. Reception conditions for asylum seekers are concerning; some facilities are overcrowded and inadequate. Prison conditions are generally adequate; mental health services are available. Corruption is limited compared to global standards. Economic inequality affects immigrant communities disproportionately. Belgium's multilingual and multicultural character provides opportunities for integration but also creates tensions requiring attention to rights protection. Belgium's challenge is ensuring non-discrimination for minority and immigrant communities, protecting LGBTQ+ rights, addressing gender-based violence, ensuring refugee and asylum seeker protections, and addressing police conduct.`

const BELGIUM_ISSUES = [
  'Police racial profiling and excessive force toward immigrant communities',
  'Muslim and immigrant community discrimination',
  'Roma marginalization in employment and housing',
  'Asylum seeker reception conditions and restrictive policies',
  'Gender-based violence and femicide'
]

// 39 - AUSTRIA
const AUSTRIA_SUMMARY = `Austria maintains democratic institutions and constitutional protections for human rights, with an independent judiciary and civil society. Constitutional protections for expression, conscience, assembly, and due process are generally respected, though challenged by political polarization. Press freedom is well-protected; Austrian media is diverse with investigative journalism. However, recent political shifts toward the Freedom Party (FPÖ)—a far-right nationalist party—raise concerns about institutional commitment to human rights protections. LGBTQ+ rights are well-protected legally; same-sex marriage is recognized, gender recognition is available, and discrimination protections are comprehensive. Yet violence and discrimination against LGBTQ+ individuals persist. Gender-based violence remains endemic; femicide rates are significant. Intimate partner violence is widespread. Women's workplace representation and wage equality lag. Muslim and immigrant communities face discrimination and increased Islamophobic rhetoric, particularly post-terrorism concerns. Police conduct toward immigrant and Roma communities raises concerns about racial profiling. Roma minorities face discrimination in employment, housing, and education. Asylum seeker and refugee policies have become increasingly restrictive; reception conditions are concerning in some facilities. Prisons accommodate adequate conditions generally; gang activity is limited. Corruption is limited compared to global standards. Economic inequality affects immigrant communities disproportionately. The rise of the FPÖ and anti-immigrant politics threatens historical commitments to human rights and pluralism. Austria's challenge is resisting far-right political pressure on human rights protections, ensuring non-discrimination for minority and immigrant communities, protecting LGBTQ+ rights, addressing gender-based violence, and maintaining institutional commitment to democratic values.`

const AUSTRIA_ISSUES = [
  'Far-right political pressure on human rights protections',
  'Immigrant and Muslim discrimination and Islamophobic rhetoric',
  'Police racial profiling and excessive force',
  'Gender-based violence and femicide',
  'Refugee and asylum seeker restrictive policies'
]

// 40 - FINLAND
const FINLAND_SUMMARY = `Finland maintains one of the world's strongest human rights frameworks and democratic institutions, with constitutional protections, independent judiciary, and robust civil society. Constitutional protections for expression, conscience, assembly, and due process are consistently respected. Finland regularly ranks among global leaders in press freedom, democratic participation, and rule of law. Press freedom is exceptionally strong; Finnish media is diverse and investigative. LGBTQ+ rights are well-protected legally; same-sex marriage is recognized, gender recognition is available, and discrimination protections are comprehensive. Yet violence against transgender individuals persists despite legal protections. Women's rights are exceptionally well-protected; Finland leads globally in gender equality measures. Yet gender-based violence and intimate partner violence occur. Femicide rates are low by global standards but remain a concern. Women's representation in political and corporate leadership is high. Indigenous Sámi people face discrimination and marginalization in education, language rights, and economic participation despite constitutional recognition. Land disputes between Sámi reindeer herders and mining companies create conflicts. However, recognition and protections for Sámi have advanced. Asylum seeker and refugee policies are relatively humane compared to many European peers, though recent policies have become more restrictive amid European political trends. Prisons maintain high standards; mental health services are comprehensive. Rehabilitation focus is strong. Corruption is extremely limited. Economic inequality is low globally. Finland's challenge is maintaining leadership in human rights protections, addressing remaining gender-based violence, ensuring Sámi rights and cultural protection, adapting to European political shifts toward restrictive asylum policies, and sustaining the institutional and cultural commitment to human rights that has made Finland a global leader.`

const FINLAND_ISSUES = [
  'Violence against transgender individuals despite legal protections',
  'Sámi marginalization in education and language rights',
  'Gender-based violence and intimate partner violence',
  'Asylum policy restrictiveness amid European political trends',
  'Maintaining institutional commitment to human rights'
]

// All summaries and issues
const summaries: { [key: string]: { summary: string; issues: string[] } } = {
  'United States': { summary: USA_SUMMARY, issues: USA_ISSUES },
  'Canada': { summary: CANADA_SUMMARY, issues: CANADA_ISSUES },
  'Mexico': { summary: MEXICO_SUMMARY, issues: MEXICO_ISSUES },
  'Brazil': { summary: BRAZIL_SUMMARY, issues: BRAZIL_ISSUES },
  'Argentina': { summary: ARGENTINA_SUMMARY, issues: ARGENTINA_ISSUES },
  'Chile': { summary: CHILE_SUMMARY, issues: CHILE_ISSUES },
  'Colombia': { summary: COLOMBIA_SUMMARY, issues: COLOMBIA_ISSUES },
  'Peru': { summary: PERU_SUMMARY, issues: PERU_ISSUES },
  'Venezuela': { summary: VENEZUELA_SUMMARY, issues: VENEZUELA_ISSUES },
  'Ecuador': { summary: ECUADOR_SUMMARY, issues: ECUADOR_ISSUES },
  'Bolivia': { summary: BOLIVIA_SUMMARY, issues: BOLIVIA_ISSUES },
  'Paraguay': { summary: PARAGUAY_SUMMARY, issues: PARAGUAY_ISSUES },
  'Uruguay': { summary: URUGUAY_SUMMARY, issues: URUGUAY_ISSUES },
  'Cuba': { summary: CUBA_SUMMARY, issues: CUBA_ISSUES },
  'Haiti': { summary: HAITI_SUMMARY, issues: HAITI_ISSUES },
  'Dominican Republic': { summary: DOMINICAN_REPUBLIC_SUMMARY, issues: DOMINICAN_REPUBLIC_ISSUES },
  'Guatemala': { summary: GUATEMALA_SUMMARY, issues: GUATEMALA_ISSUES },
  'Honduras': { summary: HONDURAS_SUMMARY, issues: HONDURAS_ISSUES },
  'El Salvador': { summary: EL_SALVADOR_SUMMARY, issues: EL_SALVADOR_ISSUES },
  'Nicaragua': { summary: NICARAGUA_SUMMARY, issues: NICARAGUA_ISSUES },
  'Costa Rica': { summary: COSTA_RICA_SUMMARY, issues: COSTA_RICA_ISSUES },
  'Panama': { summary: PANAMA_SUMMARY, issues: PANAMA_ISSUES },
  'Jamaica': { summary: JAMAICA_SUMMARY, issues: JAMAICA_ISSUES },
  'Trinidad and Tobago': { summary: TRINIDAD_AND_TOBAGO_SUMMARY, issues: TRINIDAD_AND_TOBAGO_ISSUES },
  'Guyana': { summary: GUYANA_SUMMARY, issues: GUYANA_ISSUES },
  'Suriname': { summary: SURINAME_SUMMARY, issues: SURINAME_ISSUES },
  'Belize': { summary: BELIZE_SUMMARY, issues: BELIZE_ISSUES },
  'United Kingdom': { summary: UK_SUMMARY, issues: UK_ISSUES },
  'France': { summary: FRANCE_SUMMARY, issues: FRANCE_ISSUES },
  'Germany': { summary: GERMANY_SUMMARY, issues: GERMANY_ISSUES },
  'Italy': { summary: ITALY_SUMMARY, issues: ITALY_ISSUES },
  'Spain': { summary: SPAIN_SUMMARY, issues: SPAIN_ISSUES },
  'Poland': { summary: POLAND_SUMMARY, issues: POLAND_ISSUES },
  'Ukraine': { summary: UKRAINE_SUMMARY, issues: UKRAINE_ISSUES },
  'Russia': { summary: RUSSIA_SUMMARY, issues: RUSSIA_ISSUES },
  'Turkey': { summary: TURKEY_SUMMARY, issues: TURKEY_ISSUES },
  'Greece': { summary: GREECE_SUMMARY, issues: GREECE_ISSUES },
  'Belgium': { summary: BELGIUM_SUMMARY, issues: BELGIUM_ISSUES },
  'Austria': { summary: AUSTRIA_SUMMARY, issues: AUSTRIA_ISSUES },
  'Finland': { summary: FINLAND_SUMMARY, issues: FINLAND_ISSUES },
}

async function main() {
  console.log('====================================================================')
  console.log('🌍 HUMAN RIGHTS SUMMARIES GENERATION - COUNTRIES 1-40')
  console.log('====================================================================\n')

  let successCount = 0
  let errorCount = 0

  for (const country of targetCountries) {
    try {
      const countryName = country.name
      const data = summaries[countryName]

      if (!data) {
        console.log(`⚠️  Skipping ${countryName} - no summary data`)
        continue
      }

      console.log(`\n💾 Saving Human Rights analysis for ${countryName}...`)

      // Get coordinates
      const coords = countryCoords[countryName] || { lat: 0, lng: 0 }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: countryName,
            type: 'country',
            category: 'humanrights',
          },
        },
        update: {
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: countryName,
          type: 'country',
          country: countryName,
          lat: coords.lat,
          lng: coords.lng,
          category: 'humanrights',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ Saved Human Rights analysis for ${countryName}`)
      console.log(`   Summary length: ${data.summary.length} characters`)
      console.log(`   Major issues: ${data.issues.length}`)
      successCount++
    } catch (error) {
      console.error(
        `❌ Error processing ${country.name}:`,
        error instanceof Error ? error.message : String(error)
      )
      errorCount++
    }
  }

  console.log('\n====================================================================')
  console.log('✅ HUMAN RIGHTS GENERATION COMPLETE!')
  console.log(`   Successfully saved: ${successCount} summaries`)
  console.log(`   Errors encountered: ${errorCount}`)
  console.log(`   Total processed: ${successCount + errorCount}`)
  console.log('====================================================================')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
