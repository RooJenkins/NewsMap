import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()

// Get all countries in order
const allCountries = Object.entries(countryData).map(([name, data]) => ({
  name,
  ...data,
}))

// Countries 41-80 (0-indexed: 40-79)
const targetCountries = allCountries.slice(40, 80)

// Country coordinates for database storage
const countryCoords: { [key: string]: { lat: number; lng: number } } = {
  'Denmark': { lat: 56.26, lng: 9.5 },
  'Ireland': { lat: 53.4129, lng: -8.2439 },
  'Hungary': { lat: 47.1625, lng: 19.5033 },
  'Czech Republic': { lat: 49.8175, lng: 15.4730 },
  'Bulgaria': { lat: 42.7339, lng: 25.4858 },
  'Croatia': { lat: 45.1, lng: 15.2 },
  'Estonia': { lat: 58.5953, lng: 25.0136 },
  'Norway': { lat: 60.472, lng: 8.4689 },
  'Sweden': { lat: 60.1282, lng: 18.6435 },
  'Portugal': { lat: 39.3999, lng: -8.2245 },
  'Netherlands': { lat: 52.1326, lng: 5.2913 },
  'Romania': { lat: 45.9432, lng: 24.9668 },
  'Serbia': { lat: 44.0165, lng: 21.0059 },
  'Switzerland': { lat: 46.8182, lng: 8.2275 },
  'Slovakia': { lat: 48.669, lng: 19.699 },
  'Lithuania': { lat: 55.1694, lng: 23.8813 },
  'Latvia': { lat: 56.8796, lng: 24.6032 },
  'China': { lat: 35.8617, lng: 104.1954 },
  'India': { lat: 20.5937, lng: 78.9629 },
  'Japan': { lat: 36.2048, lng: 138.2529 },
  'South Korea': { lat: 35.9078, lng: 127.7669 },
  'North Korea': { lat: 40.3399, lng: 127.510 },
  'Indonesia': { lat: -0.7893, lng: 113.9213 },
  'Australia': { lat: -25.2744, lng: 133.7751 },
  'New Zealand': { lat: -40.9006, lng: 174.886 },
  'Pakistan': { lat: 30.3753, lng: 69.3451 },
  'Bangladesh': { lat: 23.6850, lng: 90.3563 },
  'Afghanistan': { lat: 33.9391, lng: 67.3096 },
  'Iran': { lat: 32.4279, lng: 53.6880 },
  'Israel': { lat: 31.0461, lng: 34.8516 },
  'Palestine': { lat: 31.9454, lng: 35.2338 },
  'Iraq': { lat: 33.2232, lng: 43.6793 },
  'Jordan': { lat: 30.5852, lng: 36.2384 },
  'Cambodia': { lat: 12.5657, lng: 104.9910 },
  'Laos': { lat: 19.8523, lng: 102.4955 },
  'Myanmar': { lat: 21.9162, lng: 95.9560 },
  'Nepal': { lat: 28.3949, lng: 84.1240 },
  'Mongolia': { lat: 46.8625, lng: 103.8467 },
  'Papua New Guinea': { lat: -6.3150, lng: 143.9555 },
  'Fiji': { lat: -17.7134, lng: 178.0650 },
}

// Comprehensive human rights analyses for each country
const humanRightsData: {
  [key: string]: { summary: string; issues: string[] }
} = {
  Denmark: {
    summary: `Denmark presents a compelling case study in human rights protection and democratic governance. As a stable parliamentary monarchy with 5.9 million people, Denmark consistently ranks among the world's freest nations on international indices. The country's commitment to press freedom is absolute - journalists face no government censorship, and investigative reporting on public institutions flourishes. The media landscape includes diverse outlets representing various political perspectives, from DR (public broadcaster) to independent publications that routinely challenge government policies without fear of reprisal.

Women's rights in Denmark are deeply embedded in law and practice. Gender equality is enshrined constitutionally, and women participate extensively in politics - the current parliament has near-gender parity. Equal pay legislation is enforced rigorously, and comprehensive parental leave policies support both mothers and fathers. Violence against women exists, as in all societies, but Denmark's robust victim support systems, shelter infrastructure, and zero-tolerance prosecution approach provide strong protections. Access to reproductive healthcare, including contraception and abortion, is guaranteed.

LGBTQ+ rights represent another area of Denmark's progressive stance. Same-sex partnerships gained recognition through registered partnerships in 1989 and civil marriage in 2013, among Europe's earliest. Transgender individuals have legal recognition rights, and discrimination in employment, housing, and services is prohibited. Danish society shows high social acceptance, with Copenhagen serving as a beacon for LGBTQ+ communities seeking safe communities. Pride celebrations occur without incident or restriction.

Minority rights protections are comprehensive though ongoing tensions exist around immigration policy. Denmark's large immigration population - now over 12% of residents - enjoys legal protections against discrimination. Religious freedom is protected; Muslims worship openly, though integration debates are politically charged. The Inuit Kalaallit people of Greenland have self-determination rights within the Danish realm. Recent years have seen stricter immigration rhetoric from some political parties, creating pressure on asylum seekers and refugees, though formal legal protections remain.

Political prisoners do not exist in Denmark. The judiciary operates independently, criminal proceedings are transparent, and defendants have robust legal representation. Danish prisons are humanitarian by global standards, with rehabilitation-focused approaches rather than purely punitive systems. Conditions meet international standards, though occasional controversies arise around solitary confinement practices.

Internationally, Denmark participates actively in UN human rights mechanisms, accepting scrutiny through periodic reviews. The country hosts the UN office for climate and environmental affairs and contributes significantly to global human rights advocacy, though critics note tensions between humanitarian rhetoric and restrictive immigration policies.`,
    issues: [
      'Immigration and asylum policy tensions with integration concerns',
      'Heated political debates around Muslim integration',
      'Occasional reports of police use of force requiring oversight improvement',
      'Persistent gender wage gaps despite legal equality frameworks',
    ],
  },

  Ireland: {
    summary: `Ireland, a nation of 5.2 million with a semi-parliamentary system, demonstrates strong human rights protections rooted in both constitutional commitments and European Union law. Press freedom is robust; Irish media - from the Irish Times to independent broadcasters - investigates government corruption and holds officials accountable regularly. Journalists enjoy substantial protections, and attempts at press censorship would provoke constitutional crises. The country's vibrant journalism community critically examines everything from political scandals to social issues without government interference.

Women's rights have undergone remarkable transformation. Ireland moved from restrictive abortion laws to legalization in 2018 after voter referendums demonstrated public support for reproductive autonomy. Women now comprise significant portions of the judiciary and legislature; the current cabinet includes multiple female ministers. Equal pay legislation, maternity protections, and domestic violence services provide comprehensive safeguards. Childcare affordability remains a structural concern affecting women's workforce participation, but legal frameworks ensure non-discrimination.

LGBTQ+ rights position Ireland as a European leader. Decriminalization occurred in 1993, same-sex marriage was legalized in 2015 - the first country worldwide to do so via popular vote - and gender recognition rights grant legal status changes. Anti-discrimination protections cover employment, housing, and services. Dublin's Pride attracts international participants; LGBTQ+ organizations operate openly without harassment. Social acceptance remains exceptionally high compared to global standards.

Minority rights protections are constitutionally mandated. Ireland's Traveller minority - traditionally nomadic communities numbering perhaps 30,000 people - faces persistent discrimination in housing, employment, and education despite legal protections. Roma and other migrant communities experience varying degrees of integration success. Religious freedom is protected; Catholics, Protestants, Jews, Muslims, and others worship freely. The historical Catholic dominance in public institutions has diminished, though some concerns persist about non-secular education influences.

Political prisoners and arbitrary detention are absent. The judiciary operates independently with robust due process protections. Irish courts have occasionally criticized police conduct, resulting in institutional reforms. Prisons operate generally according to international standards, though overcrowding in some facilities creates humanitarian concerns. Vulnerable prisoners - those with mental health conditions or substance abuse histories - sometimes lack adequate support services.

Internationally, Ireland champions human rights through UN participation and EU mechanisms. The country hosted UN rights operations and contributes to global advocacy, though some critics argue foreign policy doesn't always align perfectly with domestic human rights commitments.`,
    issues: [
      'Persistent discrimination against Traveller minority communities',
      'Prison overcrowding and inadequate mental health services',
      'Gender pay gaps and childcare affordability barriers',
      'Housing crisis affecting vulnerable populations',
    ],
  },

  Hungary: {
    summary: `Hungary's situation presents a troubling departure from democratic norms that once seemed firmly established. With 9.6 million people, Hungary has experienced systematic erosion of judicial independence, press freedom, and pluralism under Prime Minister Viktor Orban's government since 2010. The transformation demonstrates how democratic backsliding occurs through legal mechanisms - not coups or revolutions, but gradual institutional capture.

Press freedom has contracted significantly. While newspapers aren't shut down outright, media ownership has become increasingly concentrated among Orban-aligned oligarchs. Critical outlets face financial pressure, reduced advertising revenue, and systematic delegitimization. State television and radio provide favorable coverage of government positions. Journalists investigating corruption or government wrongdoing experience harassment, and the government weaponizes defamation law against critical reporting. The European Union and international press organizations regularly protest these constraints.

Women's rights face concerning restrictions. Hungary's government has actively opposed abortion access, implementing waiting periods and counseling requirements that create practical barriers. Childcare support has decreased. Gender-based violence remains a persistent challenge with insufficient victim support infrastructure. Women's participation in politics has declined. Government rhetoric increasingly emphasizes traditional family structures, with policies discouraging women's workforce participation in favor of stay-at-home motherhood roles.

LGBTQ+ rights represent a particularly acute concern. Hungary passed a constitutional amendment prohibiting same-sex marriage and joint adoption, effectively enshrining discrimination. Gay couples cannot legally marry despite living in the EU. Transgender recognition rights are restricted. While criminal penalties for same-sex conduct don't exist, the government creates a hostile environment through legislation targeting LGBTQ+ visibility. Pride events occur but face counter-demonstrations and police scrutiny. International human rights organizations repeatedly condemn Hungary's LGBTQ+ policies.

Minority rights, particularly for Roma, remain severely problematic. The Roma minority - numbering perhaps 200,000 - faces systematic discrimination in housing, education, and employment. Segregation in schools persists despite legal prohibitions. The government provides insufficient protection against hate crimes or discrimination complaints. Jewish Hungarians, while protected formally, experience occasional antisemitic incidents. Immigration policy has become overtly restrictive with anti-migrant rhetoric from government officials.

Political opposition faces mounting pressures. While elections occur, constraints on media, judiciary independence, and campaign finance create structural advantages for Orban's Fidesz party. Opposition figures have faced legal harassment. Prosecutors operate with apparent political coordination. The judiciary, undermined through institutional changes, cannot serve as an effective check on executive power.

Hungary's backsliding represents a critical case study in how established democracies can deteriorate through legal mechanisms rather than obvious coups. The international community - EU, UN bodies, international courts - has repeatedly expressed concern, and Hungary faces EU funding sanctions, but institutional reforms remain insufficient.`,
    issues: [
      'Systematic judicial independence erosion and capture by executive',
      'Media freedom constraints through ownership concentration and legal harassment',
      'Constitutional discrimination against LGBTQ+ individuals and same-sex partnerships',
      'Severe Roma minority discrimination in education, housing, and employment',
      'Political opposition constrained through legal weaponization and media bias',
    ],
  },

  'Czech Republic': {
    summary: `The Czech Republic, with 10.5 million citizens, maintains relatively strong democratic institutions and human rights protections despite regional pressures. As a NATO and EU member, the country benefits from integration into Western institutional frameworks that reinforce rights protections. The parliamentary system includes multiple political parties that compete relatively fairly, and democratic transitions have occurred peacefully.

Press freedom remains substantially protected. The Czech media landscape includes diverse outlets - from public broadcaster Czech Television to independent newspapers and online publications. While media ownership concentration creates some concerns, journalists can investigate government corruption without facing state censorship. The 2019 anti-corruption protests demonstrated vibrant civil society and free assembly rights. Critical reporting on government conduct occurs regularly without systematic reprisal.

Women's rights are legally protected with comprehensive employment discrimination prohibitions and parental leave policies supporting both parents. Women serve as judges, legislators, and business leaders. However, gender pay gaps persist, and caregiving responsibilities disproportionately fall to women. Reproductive rights are accessible; abortion is legal up to 12 weeks of pregnancy. Violence against women exists and victim support services exist, though some advocates argue infrastructure could be strengthened.

LGBTQ+ rights protections are developing. Same-sex registered partnerships gained legal recognition in 2006, providing some protections, though full marriage equality hasn't been achieved. Employment discrimination is prohibited. Criminal penalties for consensual same-sex conduct never existed. Social acceptance varies; urban areas show greater LGBTQ+ acceptance while rural regions remain more conservative. Prague has active LGBTQ+ communities and annual Pride events occur without significant state interference.

Minority rights protections exist for Roma, Jews, and other minorities. The Roma minority - estimated at 200,000-400,000 - faces persistent discrimination in housing and employment despite legal protections. School segregation persists in some areas. Holocaust remembrance is taken seriously with museums and memorials, though occasional antisemitic incidents occur. Religious freedom protections are comprehensive.

The judiciary operates with reasonable independence, though concerns periodically arise about political influence. Criminal proceedings generally meet international standards. Prisons operate according to reasonable standards, though overcrowding occasionally occurs. Due process protections are substantially available, and defendants have rights to legal representation.

Internationally, the Czech Republic participates in UN human rights mechanisms and cooperates with EU oversight. The country contributes to international human rights advocacy, though some critics note inconsistencies between domestic policies and international positions, particularly regarding asylum and refugee policies.`,
    issues: [
      'Persistent Roma discrimination in housing, employment, and education',
      'Gender pay gaps and disproportionate caregiving responsibility burdens',
      'School segregation affecting minority children in some regions',
      'Limited LGBTQ+ partnership recognition short of full marriage equality',
    ],
  },

  Bulgaria: {
    summary: `Bulgaria, a country of 6.4 million people, faces significant human rights challenges alongside democratic progress. Operating as a parliamentary republic within the EU and NATO, Bulgaria struggles with corruption that undermines institutional effectiveness and rule of law. The tension between formal democratic structures and informal power networks creates systemic human rights vulnerabilities.

Press freedom faces substantial pressures from multiple directions. Bulgaria's media landscape, characterized by concentrated ownership and advertiser dependence on government, creates incentives for self-censorship. Journalists investigating corruption, organized crime, or government wrongdoing experience harassment, legal threats, and occasionally violence. While newspapers publish, the climate remains chilling for critical reporting. Bulgaria ranks relatively poorly on international press freedom indices, and international organizations regularly express concern about media independence.

Women's rights protections exist legally but face implementation challenges. Domestic violence remains prevalent despite laws criminalizing it. Access to reproductive healthcare is generally available, though rural areas have fewer services. Women participate in politics and business but face persistent discrimination. Childcare services are limited, creating barriers to women's workforce participation. Sexual harassment in workplaces occurs with insufficient complaint mechanisms and accountability.

LGBTQ+ rights remain extremely limited. Bulgaria has not legalized same-sex partnerships or marriage. While criminal penalties for consensual same-sex conduct don't exist, the legal system provides virtually no protections against discrimination. Constitutional amendments explicitly define marriage as heterosexual union. Social acceptance remains very low; LGBTQ+ individuals report significant discrimination in employment, housing, and services. Pride events occur but face counter-demonstrations and occasional violence. Hate crimes targeting LGBTQ+ individuals occur with insufficient investigation and prosecution.

Minority rights protections are inadequate. Bulgaria's Turkish minority - numbering perhaps 750,000 - faces periodic discrimination and tensions. The Roma minority experiences systematic discrimination in education, housing, and employment. School segregation persists in many areas. Housing discrimination prevents Roma access to better neighborhoods. Employment discrimination compounds poverty. Hate crimes targeting minorities occur with insufficient police investigation. Religious minorities, while having formal rights, occasionally report discrimination and pressure.

Corruption deeply undermines human rights protections. Judiciary independence is compromised through systemic corruption, limiting effective legal recourse for rights violations. Police misconduct occurs with inadequate accountability mechanisms. Arbitrary detention isn't formalized but suspects sometimes face extended periods without proper charges or representation. Prisons have documented overcrowding and inadequate healthcare.

Organized crime elements exercise informal power, sometimes affecting police and judiciary. Journalists and activists documenting corruption occasionally face intimidation or violence. Anti-corruption advocates and civil society organizations work under constrained conditions. EU funding mechanisms increasingly condition assistance on anti-corruption reforms.`,
    issues: [
      'Systemic corruption undermining judiciary independence and rule of law',
      'Press freedom constrained by ownership concentration and self-censorship',
      'Extreme LGBTQ+ rights violations with no legal partnership recognition',
      'Severe Roma discrimination in education, housing, and employment',
      'Inadequate violence against women protections and support services',
    ],
  },

  Croatia: {
    summary: `Croatia, a nation of 3.9 million, demonstrates moderate human rights protections as a relatively newer EU member state. Operating as a parliamentary democracy, Croatia has made progress since transitioning from conflict in the 1990s, though legacy issues remain. The country balances between EU integration pressures favoring rights protections and domestic political forces resisting certain reforms.

Press freedom is substantially protected though faces some pressures. Croatian media includes public broadcasters and diverse private outlets that investigate government conduct. Journalists can operate without systematic state censorship, and critical reporting occurs regularly. However, media ownership concentration and economic dependence on government advertising create subtle pressures toward self-censorship. International press freedom organizations note these concerns while acknowledging Croatia's relative openness compared to some regional neighbors.

Women's rights are legally protected with employment discrimination prohibitions and domestic violence laws. The government has implemented victim support services and specialized courts for domestic violence cases. Women participate in politics, judiciary, and business. However, persistent gender pay gaps exist, and violence against women remains a concern. Reproductive rights are accessible; abortion is legal under specified circumstances. Childcare services are limited, affecting women's workforce participation options.

LGBTQ+ rights have progressed significantly. Croatia legalized same-sex marriage in 2014 and allows joint adoption. Employment discrimination is prohibited. Sexual orientation discrimination in services is illegal. While legal protections are strong by regional standards, social acceptance varies; urban areas show greater openness while rural regions remain more conservative. LGBTQ+ individuals report discrimination and harassment in some contexts. Pride events occur in major cities without significant state interference, though counter-demonstrations occasionally occur.

Minority rights protections exist for Serbs, Roma, and other minorities. The Serb minority, numbering perhaps 200,000, gained greater protections following EU requirements. Roma face persistent discrimination in housing, education, and employment despite legal frameworks. School segregation affects Roma children in some areas. Historical tensions from the 1990s conflict occasionally resurface in political rhetoric. Religious freedom is protected; minority faiths worship openly.

War crimes prosecutions from the 1990s conflict have been a significant undertaking. The national judiciary has prosecuted numerous individuals, contributing to transitional justice. However, some controversies persist about whether accountability is comprehensive or reflects political priorities. International Criminal Tribunal for former Yugoslavia (ICTY) cases provided additional accountability. Truth commissions have documented abuses, contributing to historical record.

Judicial independence has improved though concerns periodically arise. The judiciary operates with reasonable autonomy, though occasional political pressure cases generate concern about neutral adjudication. Due process protections are generally available. Prisons operate according to reasonable standards though overcrowding occasionally occurs.`,
    issues: [
      'Persistent Roma discrimination in housing, education, and employment',
      'Gender pay gaps and limited childcare services',
      'Media ownership concentration creating self-censorship pressures',
      'Ongoing tensions from 1990s conflict affecting minority communities',
    ],
  },

  Estonia: {
    summary: `Estonia, a digital-forward nation of 1.4 million, demonstrates robust human rights protections integrated with technological innovation. As a NATO and EU member with a parliamentary system, Estonia benefits from regional integration frameworks that reinforce democratic norms. The country has successfully transitioned from Soviet occupation to liberal democracy, achieving one of Europe's strongest governance records.

Press freedom is exceptionally strong. Estonian media includes diverse outlets that investigate government conduct without fear of reprisal. Public broadcaster ERR provides balanced coverage; private outlets range from market-focused to advocacy journalism. Journalists enjoy substantial protections, and attempts at media censorship would provoke democratic resistance. Critical reporting on government policies occurs regularly without systematic harassment.

Women's rights are comprehensively protected. Estonia has high female labor force participation and relatively strong equal pay legislation. Women serve in judicial, political, and business leadership. Parental leave policies support both parents. Violence against women is addressed through comprehensive victim support systems and prosecution. Reproductive rights are accessible; abortion is legal under specified circumstances. Gender equality is deeply embedded in Estonian society's progressive values.

LGBTQ+ rights represent an area of significant achievement. Estonia legalized same-sex partnerships in 2016 and allowed full marriage equality through legal reform. Joint adoption rights were granted. Employment discrimination protections are comprehensive. While legal protections are strong, social acceptance varies by age and region - younger urban residents show high acceptance while older rural residents maintain more traditional views. LGBTQ+ individuals report minimal discrimination in daily life compared to many countries. Pride events occur without state interference.

Minority rights protections exist for Russian-speaking minorities - numbering perhaps 350,000 - who comprise about a quarter of Estonia's population. Language policies requiring Estonian fluency for public employment create integration pressures and occasional tension. Russian minorities have educational autonomy and cultural rights. Concerns periodically arise about integration pace and language policies' fairness. Roma face periodic discrimination despite legal protections. Religious freedom protections are comprehensive.

Judicial independence is well-protected through constitutional arrangements and institutional design. The judiciary operates with substantial autonomy; judges are professionally appointed through merit-based systems. Due process protections are robust. Prisons meet international standards with rehabilitation-focused approaches. Criminal procedure provides defendants with comprehensive legal protections and representation rights.

Internationally, Estonia champions human rights through UN participation and EU engagement. The country's digital governance innovations have attracted international attention as potential models for transparent, accountable government. Estonia contributes significantly to international human rights advocacy, particularly regarding digital rights and technology's role in governance.`,
    issues: [
      'Language policy tensions affecting Russian-speaking minority integration',
      'Persistent gender wage gaps despite strong legal equality frameworks',
      'Social acceptance variations for LGBTQ+ individuals in rural areas',
      'Limited Roma integration and occasional discrimination incidents',
    ],
  },

  Norway: {
    summary: `Norway, a prosperous nation of 5.5 million with constitutional monarchy and parliamentary democracy, represents one of the world's strongest human rights records. The country's oil wealth, strong rule of law, and deeply embedded democratic culture create an environment where human rights protections are exceptionally robust. International indices consistently rank Norway among the world's freest nations.

Press freedom is absolute. Norwegian media - from major newspapers like Aftenposten and VG to public broadcaster NRK to independent online publications - investigates government conduct, exposes corruption, and criticizes official policies without any government interference or fear. Journalists enjoy robust protections under constitutional law and professional norms. The concept of press censorship is culturally unthinkable in Norwegian society. Critical reporting dominates political discourse.

Women's rights protections are comprehensive and deeply practiced. Women constitute roughly half of parliament and hold significant judicial and business leadership positions. Equal pay legislation is rigorously enforced; gender wage gaps are among Europe's smallest. Parental leave policies support both mothers and fathers with generous provisions. Violence against women is criminalized with victim support systems accessible throughout the country. Reproductive rights are protected; abortion is legal and accessible. Gender equality permeates Norwegian culture and institutions.

LGBTQ+ rights represent an area of exceptional achievement. Norway legalized same-sex partnerships in 1993 - among the world's first - and granted full marriage equality in 2009. Adoption rights were extended comprehensively. Employment and service discrimination protections are strong. Social acceptance is extraordinarily high; LGBTQ+ individuals report minimal discrimination in daily life. Pride celebrations in Oslo and other cities attract international participants and occur without any state interference or safety concerns.

Minority rights protections exist for indigenous Sami people - numbering perhaps 40,000 - who have special legal status including language rights and cultural autonomy. While formal protections exist, historical discrimination created ongoing socioeconomic disparities. Sami communities advocate for continued attention to historical injustices and ongoing discrimination. Migrant and immigrant communities, increasingly diverse, have legal protections against discrimination, though integration tensions occasionally surface. Religious freedom is protected; minority faiths worship openly.

Political prisoners do not exist. The judiciary operates with exemplary independence; judges are appointed through merit-based processes and operate free from political interference. Due process protections are comprehensive. Criminal defendants have robust rights to counsel and fair hearing. Prisons are humanitarian facilities with rehabilitation focus rather than punishment; conditions far exceed international standards. Solitary confinement is used minimally and under strict regulation. Norway's correctional philosophy emphasizes human dignity and reintegration.

Internationally, Norway champions human rights through UN mechanisms, supports international human rights organizations, and contributes to global advocacy. The country's government actively supports transitional justice mechanisms globally and funds human rights protection work internationally. Norway's diplomatic and financial influence has consistently been deployed to advance human rights protection worldwide.`,
    issues: [
      'Persistent socioeconomic disparities affecting indigenous Sami communities',
      'Integration challenges and occasional discrimination affecting immigrant populations',
      'Persistent gender wage gaps in some sectors despite overall progress',
      'Limited discussion of historical Sami discrimination and ongoing redress',
    ],
  },

  Sweden: {
    summary: `Sweden, with 10.5 million people, maintains exceptional human rights protections embedded in a progressive political culture and constitutional framework. Operating as a parliamentary monarchy with multiple competing political parties, Sweden demonstrates how liberal democracy can institutionalize rights protections comprehensively. The country consistently ranks among the world's freest and most democratic nations.

Press freedom is constitutionally protected through the Freedom of the Press Act - one of the world's oldest press freedom laws dating to 1766. Swedish media includes diverse outlets that investigate government conduct, expose corruption, and critically examine policies without any censorship or state interference. Public broadcaster SVT and SR provide balanced coverage; private outlets range across the political spectrum. Journalists enjoy substantial professional protections and rarely experience harassment or intimidation.

Women's rights are deeply protected through comprehensive legislation and cultural commitment. Women constitute roughly half of parliament and hold significant leadership positions in judiciary, business, and civil service. Parental leave is equally available to both parents with generous provisions, and uptake by fathers is substantial. Gender pay gaps are minimal by international standards. Violence against women is criminalized with accessible victim support services throughout the country. Reproductive rights are protected; abortion is legal and accessible. Gender equality is embedded in Swedish values and institutions.

LGBTQ+ rights protections are exemplary. Sweden legalized same-sex partnerships in 1995 and granted full marriage equality in 2009. Adoption rights are comprehensive; same-sex couples can adopt and receive fertility assistance. Employment and service discrimination protections are strong. Legal gender recognition for transgender individuals is available. Social acceptance is extraordinarily high; LGBTQ+ individuals report minimal discrimination in daily life. Pride celebrations occur without state interference; Stockholm Pride attracts international participants. Transgender healthcare is accessible through public health systems.

Minority rights protections exist for indigenous Sami people - numbering perhaps 20,000 - with special legal status, language rights, and cultural autonomy. While formal protections are strong, historical discrimination created socioeconomic disparities that persist. Sami communities advocate for continued attention to historical injustices and ongoing discrimination. Immigrant and refugee populations have legal protections against discrimination, though integration challenges exist. Religious freedom is protected; minority faiths worship openly. Occasional tensions around immigration policy have created political debate, but formal rights protections remain strong.

Political prisoners do not exist. The judiciary operates with exemplary independence; judges are appointed through professional merit-based processes. Due process protections are comprehensive. Criminal defendants have robust rights to counsel and fair hearing. Prisons are humanitarian facilities emphasizing rehabilitation; conditions far exceed international standards. Sweden's correctional philosophy prioritizes human dignity and social reintegration.

Internationally, Sweden champions human rights through UN mechanisms, supports international advocacy organizations, and contributes to global human rights protection. The country's government actively supports international criminal justice mechanisms and funds human rights work globally. Sweden's diplomatic influence has consistently advanced human rights protection internationally.`,
    issues: [
      'Persistent socioeconomic disparities affecting indigenous Sami communities',
      'Integration challenges and occasional discrimination affecting immigrant populations',
      'Political debate around immigration policy affecting asylum seekers',
      'Persistent gender wage gaps in some sectors despite strong overall equality',
    ],
  },

  Portugal: {
    summary: `Portugal, with 10.3 million people, demonstrates solid human rights protections as a democratic republic integrated into the European Union. The country successfully transitioned from authoritarian rule to democracy in 1974, and democratic institutions have strengthened substantially over fifty years. Integration into European structures has reinforced rights protections through constitutional commitments and EU mechanisms.

Press freedom is substantially protected. Portuguese media includes public broadcaster RTP and diverse private outlets that investigate government conduct and criticize policies. Journalists operate without systematic government censorship, though media ownership concentration creates some concerns. Critical reporting occurs regularly on corruption, social issues, and government performance. Defamation laws occasionally concern press freedom advocates, but courts generally protect journalistic expression.

Women's rights are legally protected with employment discrimination prohibitions and comprehensive family law protections. Women serve in judicial, political, and business leadership positions. Parental leave policies support both parents. Gender wage gaps persist but are narrowing. Violence against women is criminalized with victim support services available, though infrastructure could be expanded. Reproductive rights are protected; abortion is legal under specified circumstances. Divorce is accessible and gender-neutral in property division.

LGBTQ+ rights have progressed significantly. Portugal decriminalized same-sex conduct in 1983 and legalized same-sex partnerships through civil partnerships. However, full marriage equality hasn't been achieved, creating a two-tier partnership system. Employment discrimination is prohibited. Social acceptance varies by age and urban-rural location; younger urban residents show greater openness while older rural residents maintain more traditional views. LGBTQ+ individuals report discrimination in some contexts, though major cities provide safety and community. Pride events occur without state interference.

Minority rights protections exist for Roma and immigrant communities. The Roma minority faces persistent discrimination in housing, education, and employment despite legal frameworks. School segregation affects Roma children in some areas. Immigrant communities from former Portuguese colonies have legal protections, though integration challenges exist and discrimination occurs. Religious freedom is protected; minority faiths worship openly.

The judiciary operates with reasonable independence, though occasional concerns arise about political influence. Due process protections are generally available. Criminal defendants have rights to legal representation. Prisons operate according to reasonable standards, though overcrowding occasionally occurs. Some concerns arise about police conduct, particularly regarding immigrants and marginalized communities.

Internationally, Portugal participates in UN human rights mechanisms and cooperates with EU oversight. The country contributes to international human rights advocacy, though some critics note inconsistencies between domestic policies and international positions, particularly regarding refugee policies.`,
    issues: [
      'Persistent Roma discrimination in housing, education, and employment',
      'Gender pay gaps and limited childcare services affecting women',
      'Lack of full marriage equality for same-sex couples',
      'Integration challenges affecting immigrant communities',
    ],
  },

  Netherlands: {
    summary: `The Netherlands, with 17.8 million people, operates as a parliamentary monarchy with exceptionally strong human rights protections. Known globally as a pioneering jurisdiction for progressive rights - from drug policy to euthanasia to same-sex marriage - the Netherlands has built robust institutional frameworks protecting human dignity and individual autonomy.

Press freedom is comprehensive. Dutch media includes public broadcasters NOS, NPO, and BVN alongside diverse private outlets that investigate government corruption and criticize policies without state interference. Journalists operate with substantial legal protections. Critical reporting is vibrant; investigative journalism regularly exposes institutional failures and misconduct. The concept of press censorship is culturally alien to Dutch society.

Women's rights protections are exceptional. Women constitute significant portions of parliament and hold judicial, business, and political leadership. Equal pay legislation is rigorously enforced. Parental leave is available to both parents with generous provisions. Gender equality is deeply embedded in Dutch values. Violence against women is comprehensively addressed through victim support systems and specialized prosecution approaches. Reproductive rights are protected; abortion is legal and accessible. Euthanasia and physician-assisted suicide are legal under strict safeguards, providing end-of-life autonomy.

LGBTQ+ rights represent the Netherlands' most celebrated achievement in human rights. The country legalized same-sex partnerships in 1998 and full marriage equality in 2001 - among the world's first. Adoption rights are comprehensive. Employment and service discrimination protections are strong. Transgender legal recognition is accessible. Social acceptance is extraordinarily high; LGBTQ+ individuals report minimal discrimination in daily life. Amsterdam Pride is celebrated globally and attracts international participants. LGBTQ+ individuals and couples can live openly without fear.

Minority rights protections exist for immigrant communities - now constituting over 20% of the population. Turkish and Moroccan communities, the largest immigrant groups, have legal protections against discrimination. However, integration challenges exist, and political debates around immigration occasionally create tension. Roma face discrimination in some contexts despite legal protections. Religious freedom is protected; minority faiths worship openly. Recent political rhetoric around immigration has created concerns about minority protection commitment.

The judiciary operates with exemplary independence. Due process protections are comprehensive. Criminal defendants have robust rights to counsel and fair hearing. Prisons are humanitarian facilities emphasizing rehabilitation; conditions exceed international standards. Dutch correctional philosophy prioritizes human dignity and social reintegration.

Internationally, the Netherlands champions human rights through UN mechanisms, international court participation, and support for global human rights organizations. The country's government champions international justice mechanisms and contributes substantially to global human rights protection.`,
    issues: [
      'Integration challenges and discrimination affecting immigrant communities',
      'Political debate around immigration policy affecting asylum seekers',
      'Roma discrimination in employment and housing despite legal protections',
      'Occasional police conduct concerns regarding marginalized populations',
    ],
  },

  Romania: {
    summary: `Romania, a nation of 19 million people, operates as a semi-presidential republic within the EU and NATO frameworks. The country has made significant progress since transitioning from communism and authoritarian rule, though structural challenges to rule of law and human rights protection persist. EU integration has driven reforms, though implementation of protections remains inconsistent.

Press freedom is substantially protected though faces pressures. Romanian media includes public broadcaster TVR and diverse private outlets that investigate government conduct. Journalists operate without systematic state censorship, though media ownership concentration and dependence on government advertising create self-censorship incentives. Critical reporting occurs but faces occasional legal challenges. International press freedom organizations express concern about media independence while acknowledging Romania's openness compared to some regional peers.

Women's rights are legally protected with employment discrimination prohibitions and family law protections. Women serve in political, judicial, and business leadership positions. However, violence against women remains a significant concern with insufficient victim support services. Reproductive rights are protected; abortion is legal. Equal pay legislation exists but implementation gaps create wage disparities. Domestic violence victims sometimes face barriers to prosecution and protection.

LGBTQ+ rights remain limited. While criminal penalties for consensual same-sex conduct don't exist, same-sex partnerships have no legal recognition and discrimination protections are incomplete. Constitutional amendments explicitly define marriage as heterosexual union. Employment discrimination in some sectors persists. Social acceptance varies dramatically by age and urban-rural location; younger urban residents show greater openness while older and rural populations maintain traditional views. LGBTQ+ individuals report discrimination and occasional violence. Pride events occur in Bucharest and other cities but face counter-demonstrations and occasional state hostility.

Minority rights protections exist for Roma - numbering perhaps 600,000-1 million depending on definition - but face persistent implementation gaps. Roma experience systematic discrimination in education, housing, and employment. School segregation persists in some areas. Housing discrimination prevents Roma access to neighborhoods. Employment discrimination compounds poverty and marginalization. Hate crimes targeting Roma occur with insufficient investigation. Hungarian and other ethnic minorities have cultural autonomy protections. Religious freedom is protected though minority faiths occasionally report discrimination.

Corruption undermines human rights protections systematically. Judiciary independence has improved through EU-supported reforms but concerns periodically arise about political influence. Police misconduct occurs with inadequate accountability. Due process protections exist but implementation varies. Prisons face overcrowding and inadequate healthcare and mental health services.

Organized crime elements exercise informal power in some regions, affecting police effectiveness and judiciary. Journalists and activists investigating corruption occasionally face intimidation or harassment. Civil society organizations work under substantial constraints. EU mechanisms increasingly condition assistance on human rights improvements.`,
    issues: [
      'Systemic corruption undermining judiciary independence and rule of law',
      'Severe Roma discrimination in education, housing, and employment',
      'Inadequate violence against women protections and support services',
      'Limited LGBTQ+ legal recognition and persistent discrimination',
      'Prison overcrowding and inadequate healthcare services',
    ],
  },

  Serbia: {
    summary: `Serbia, with 6.7 million people, operates as a parliamentary republic pursuing EU and NATO integration. The country has made progress since transitioning from conflict and authoritarian rule, though significant challenges to rule of law, press freedom, and minority rights persist. EU accession requirements have driven reforms, but implementation remains inconsistent.

Press freedom faces substantial constraints. Serbian media includes public broadcaster RTS and diverse outlets, but ownership concentration and government advertising dependence create pressures toward self-censorship. Journalists investigating government corruption, organized crime, or minority issues experience harassment, legal threats, and occasionally violence. Critical reporting is constrained; the climate chills investigative journalism. International organizations regularly express concern about press freedom deterioration. Self-censorship is widespread among journalists fearing state or non-state actor retaliation.

Women's rights are legally protected but face implementation challenges. Violence against women remains significant with insufficient victim support services. Reproductive rights are accessible but some barriers exist. Women participate in politics and business but face discrimination. Domestic violence victims sometimes face barriers to prosecution. Sexual harassment in workplaces occurs with limited complaint mechanisms. Childcare services are insufficient, affecting women's workforce participation.

LGBTQ+ rights remain severely limited. While criminal penalties for consensual same-sex conduct don't exist, same-sex partnerships have no legal recognition. Employment and service discrimination protections are incomplete. Constitutional amendments explicitly define marriage as heterosexual. Social acceptance is very low; LGBTQ+ individuals report significant discrimination in employment, housing, and services. Pride events occur but face counter-demonstrations, occasional violence, and sometimes police hostility. Hate crimes targeting LGBTQ+ individuals occur with insufficient investigation and prosecution. Trans individuals face extreme discrimination and healthcare barriers.

Minority rights protections exist for Albanians, Bosniaks, Croats, and Roma, but face implementation gaps. The Kosovo Serb minority remains vulnerable. Roma experience systematic discrimination in education, housing, and employment. School segregation persists. Housing discrimination prevents Roma access to better neighborhoods. Employment discrimination compounds marginalization. Hate crimes targeting minorities occur with insufficient police investigation. Organized crime elements occasionally target minority communities with impunity.

Corruption undermines human rights protections systematically. Judiciary independence remains compromised; judges sometimes face political pressure in sensitive cases. Police conduct concerns arise, particularly regarding minorities. Due process protections exist but implementation varies. Prisons face overcrowding and inadequate healthcare and mental health services.

War crimes accountability from 1990s conflict remains incomplete. Some critics argue that accountability mechanisms favor certain groups over others. Regional tensions occasionally spike regarding historical disputes. International Criminal Tribunal for former Yugoslavia (ICTY) provided additional accountability through its transitional justice work.`,
    issues: [
      'Press freedom constrained through ownership concentration and harassment',
      'Severe LGBTQ+ rights violations with no legal partnership recognition',
      'Systemic Roma discrimination in education, housing, and employment',
      'Inadequate violence against women protections and support infrastructure',
      'Corruption undermining judiciary independence and rule of law',
    ],
  },

  Switzerland: {
    summary: `Switzerland, with 8.8 million people, operates as a federal republic with unique direct democracy mechanisms. The country's political stability, rule of law, and prosperity create an environment where human rights protections are generally robust, though some limitations exist reflecting Switzerland's particular social and political characteristics.

Press freedom is substantially protected. Swiss media includes public broadcaster SRG-SSR and diverse private outlets that investigate government conduct and criticize policies. Journalists operate without systematic censorship. Critical reporting occurs regularly. However, media ownership concentration and advertiser dependence on government create occasional pressures. Defamation laws occasionally concern press freedom advocates, though courts generally protect journalistic expression.

Women's rights protections are comprehensive. Women constitute significant portions of parliament and hold judicial, business, and political leadership. Equal pay legislation is enforced. Parental leave policies support both parents. However, women remain underrepresented in some sectors, and structural barriers to advancement persist. Violence against women is criminalized with victim support services available. Reproductive rights are protected; abortion is legal under specified circumstances.

LGBTQ+ rights have progressed significantly. Criminal penalties for same-sex conduct were eliminated, and same-sex partnerships gained civil union recognition in 2007. However, full marriage equality hasn't been achieved, creating a two-tier partnership system. Employment discrimination is prohibited. Social acceptance varies by region and age; urban areas and younger populations show greater openness while rural areas remain more conservative. LGBTQ+ individuals report discrimination in some contexts, though major cities provide safety and community. Pride events occur without state interference.

Minority rights protections exist for various ethnic and religious communities. Immigrant populations have legal protections against discrimination, though integration challenges exist. Religious freedom is protected; minority faiths worship openly. Tensions periodically arise around immigration policy and integration expectations, but formal rights protections remain strong.

The judiciary operates with independence and due process protections are comprehensive. Criminal defendants have rights to legal representation and fair hearing. Prisons operate according to reasonable standards. Switzerland's direct democracy mechanisms allow citizens to propose and vote on legislation directly, though this process has occasionally been used to restrict minority rights - for example, previous votes on immigration and religious symbols.

Switzerland's federal system allows some variation in protections between cantons. While major cantons maintain strong rights protections, smaller cantons occasionally implement policies concerning minority advocates. Asylum and refugee policies have become increasingly restrictive through democratic votes on immigration.`,
    issues: [
      'Limited LGBTQ+ partnership recognition short of full marriage equality',
      'Integration challenges affecting immigrant communities',
      'Underrepresentation of women in certain sectors despite legal equality',
      'Potential for direct democracy to restrict minority rights through popular votes',
    ],
  },

  Slovakia: {
    summary: `Slovakia, with 5.4 million people, operates as a parliamentary republic within the EU and NATO. The country has made progress since transitioning from communist rule and Soviet domination, developing democratic institutions and human rights protections. EU integration has driven reforms, though implementation challenges and political tensions periodically arise.

Press freedom is substantially protected though faces emerging concerns. Slovak media includes public broadcaster RTVS and diverse outlets investigating government conduct. Journalists operate without systematic state censorship, though media ownership concentration and government advertising create subtle self-censorship pressures. Critical reporting occurs but occasionally faces legal challenges or political pressure. International organizations note deteriorating press freedom trends over recent years with concerns about increased harassment of critical journalists.

Women's rights are legally protected with employment discrimination prohibitions and family law protections. Women serve in political, judicial, and business leadership. Equal pay legislation exists but wage gaps persist. Violence against women is criminalized with some victim support services available, though infrastructure could be strengthened. Reproductive rights are accessible but religious influences occasionally limit service provision. Parental leave supports both parents.

LGBTQ+ rights remain limited. While criminal penalties for same-sex conduct don't exist, same-sex partnerships have no legal recognition. Employment discrimination in some contexts persists. Constitutional amendments define marriage as heterosexual union. Social acceptance is low; LGBTQ+ individuals report discrimination in employment, housing, and services. Pride events occur but face counter-demonstrations. Hate crimes targeting LGBTQ+ individuals occur with insufficient investigation and prosecution. Transgender recognition is limited.

Minority rights protections exist for Hungarian - numbering perhaps 500,000 - and Roma minorities but face implementation gaps. Roma experience systematic discrimination in education, housing, and employment. School segregation affects Roma children. Housing discrimination prevents Roma access to better neighborhoods. Employment discrimination compounds poverty. Hungarian minorities have cultural autonomy protections though tensions occasionally arise around language policy and representation. Religious freedom is protected though minority faiths occasionally report discrimination.

The judiciary operates with reasonable independence, though occasional concerns arise about political influence. Due process protections exist but implementation varies. Prisons operate according to reasonable standards though overcrowding occasionally occurs. Concerns periodically arise about police conduct, particularly regarding minorities.

Corruption remains a concern affecting human rights institutions' effectiveness. EU mechanisms increasingly condition assistance on anti-corruption and rights improvements. Civil society organizations work under substantial constraints.`,
    issues: [
      'Emerging press freedom concerns and journalist harassment',
      'Severe Roma discrimination in education, housing, and employment',
      'Limited LGBTQ+ legal recognition and persistent discrimination',
      'Gender pay gaps and limited childcare services',
      'Corruption affecting institutional effectiveness',
    ],
  },

  Lithuania: {
    summary: `Lithuania, a nation of 2.8 million, operates as a semi-presidential republic integrated into EU and NATO structures. The country has successfully transitioned from Soviet occupation to liberal democracy and has achieved one of Europe's strongest human rights records. Integration into Western institutional frameworks reinforces rights protections through constitutional commitments and multilateral mechanisms.

Press freedom is robustly protected. Lithuanian media includes public broadcaster LRT and diverse outlets investigating government conduct and criticizing policies. Journalists operate without systematic government interference or censorship. Critical reporting is vibrant; investigative journalism regularly exposes institutional failures. International press freedom organizations rate Lithuania highly, reflecting strong legal protections and democratic practice.

Women's rights protections are comprehensive. Women constitute significant portions of parliament and hold judicial, business, and political leadership positions. Equal pay legislation is enforced. Parental leave is available to both parents with generous provisions. Gender wage gaps are minimal by regional standards. Violence against women is criminalized with accessible victim support services. Reproductive rights are protected; abortion is legal and accessible.

LGBTQ+ rights have progressed substantially. Lithuania decriminalized same-sex conduct in 1993 and has developed partnership recognition through civil unions. However, full marriage equality hasn't been achieved. Employment discrimination is prohibited. Social acceptance varies by age and urban-rural location; younger urban residents show greater openness while older and rural populations maintain more traditional views. LGBTQ+ individuals report discrimination in some contexts but major cities provide safety and community. Pride events occur without state interference.

Minority rights protections exist for Russian-speaking minorities - numbering perhaps 170,000. While formal protections exist, language policies requiring Lithuanian fluency for public employment create integration pressures. Russian minorities have educational autonomy and cultural rights. Concerns periodically arise about integration pace. Poles and other ethnic minorities have cultural protections. Religious freedom is protected; minority faiths worship openly.

The judiciary operates with substantial independence through constitutional arrangements. Due process protections are comprehensive. Criminal defendants have robust rights to counsel and fair hearing. Prisons meet international standards with rehabilitation-focused approaches. Lithuania's correctional philosophy emphasizes human dignity and social reintegration.

Internationally, Lithuania champions human rights through UN participation and EU engagement. The country contributes to international human rights advocacy and supports global rights protection mechanisms.`,
    issues: [
      'Language policy tensions affecting Russian-speaking minority integration',
      'Persistent gender wage gaps despite strong legal equality frameworks',
      'Social acceptance variations for LGBTQ+ individuals in rural areas',
      'Limited full marriage equality for same-sex couples',
    ],
  },

  Latvia: {
    summary: `Latvia, with 1.9 million people, operates as a parliamentary republic integrated into EU and NATO structures. The country has transitioned successfully from Soviet occupation to liberal democracy and has developed strong human rights protections through constitutional frameworks and international integration. However, tensions around minority rights and integration remain ongoing concerns.

Press freedom is substantially protected. Latvian media includes public broadcaster LTV and diverse outlets investigating government conduct. Journalists operate without systematic state censorship, though media ownership concentration creates occasional self-censorship pressures. Critical reporting occurs regularly. International press freedom organizations rate Latvia positively while noting some concerns about media independence.

Women's rights protections are comprehensive. Women serve in significant political, judicial, and business positions. Equal pay legislation is enforced though wage gaps persist. Parental leave supports both parents. Violence against women is criminalized with victim support services available. Reproductive rights are protected; abortion is legal and accessible.

LGBTQ+ rights have developed significantly. Latvia decriminalized same-sex conduct and has developed partnership recognition through civil unions. However, full marriage equality hasn't been achieved. Employment discrimination is prohibited. Social acceptance varies; urban areas show greater openness while rural regions remain more conservative. LGBTQ+ individuals report discrimination in some contexts. Pride events occur in Riga and other cities without state interference.

Minority rights protections exist for Russian-speaking minorities - numbering perhaps 500,000 and comprising about 25% of the population. Language policies requiring Latvian fluency for public employment create integration pressures and tensions. Russian minorities have educational and cultural autonomy protections. Concerns periodically arise about integration pace and fairness of language policies. Polish and other ethnic minorities have cultural protections. Religious freedom is protected.

The judiciary operates with reasonable independence though occasional concerns arise about political influence. Due process protections are generally available. Criminal defendants have rights to legal representation and fair hearing. Prisons operate according to reasonable standards though overcrowding occasionally occurs.

Corruption remains a concern affecting institutional effectiveness. EU mechanisms increasingly condition assistance on anti-corruption improvements. Civil society organizations work with reasonable freedom though some constraints exist.`,
    issues: [
      'Language policy tensions affecting Russian-speaking minority integration',
      'Persistent gender wage gaps despite legal equality frameworks',
      'Media ownership concentration creating self-censorship pressures',
      'Limited full marriage equality for same-sex couples',
    ],
  },

  China: {
    summary: `China, with 1.4 billion people, operates as a one-party communist state where the Communist Party exercises comprehensive control over state institutions, society, and individual freedoms. Human rights protections are minimal by international standards; the government systematically restricts fundamental freedoms that most democratic nations consider basic rights. The situation represents one of the world's most severe human rights challenges.

Press freedom does not exist. The government censors media comprehensively through the Central Propaganda Department and media control mechanisms. Journalists face state surveillance; those investigating government conduct, corruption, or sensitive topics face intimidation, detention, and violence. International news outlets are censored or expelled. Social media is monitored; citizens self-censor due to fear of surveillance and punishment. Critical speech is suppressed systematically; bloggers, activists, and journalists documenting abuses face prosecution.

Women's rights are severely restricted despite constitutional nominal equality. Gender-based violence is widespread with limited victim protections. Women face employment discrimination and are excluded from many sectors. The one-child policy created gender imbalance and sex-selective abortion. Reproductive autonomy doesn't exist; the government controls family planning strictly. Sexual harassment in workplaces is rampant with minimal recourse. Women are underrepresented in political and judicial power despite comprising 25% of parliament in nominal terms.

LGBTQ+ rights are virtually non-existent. While same-sex conduct isn't criminalized, the government actively suppresses LGBTQ+ visibility, expression, and organization. Same-sex partnerships have no legal recognition whatsoever. Employment discrimination is rampant; LGBTQ+ individuals are dismissed or pressured into heterosexual relationships. LGBTQ+ content is censored; discussion is suppressed. Social acceptance is minimal; LGBTQ+ individuals live under constant fear. Pride events are prohibited. Conversion therapy is practiced. Transgender individuals face extreme discrimination and denial of healthcare.

Minority rights are severely violated systematically. The Uyghur minority faces surveillance, cultural suppression, forced assimilation, detention in mass incarceration camps, forced labor, and population control measures - actions that international organizations describe as crimes against humanity or genocide. Tibetan religious and cultural autonomy is suppressed; monasteries are controlled; religious expression is restricted. The Han majority is favored in employment, education, and economic opportunities. Ethnic minorities have diminished language rights. Religious freedom doesn't exist for any faith; religions are controlled, monitored, and suppressed.

Political prisoners are widespread. Dissidents, activists, lawyers, and religious leaders are detained in conditions that constitute torture. Detention is often arbitrary; due process doesn't exist. Labor camps exist; forced labor is utilized. Executions occur, sometimes after sham trials. Families of detained individuals face harassment. Documentation of government abuses is criminalized.

The judiciary is subordinate to Communist Party control. Independent courts don't exist. Trials are often predetermined; verdicts are decided by political authorities. Defense attorneys face restrictions; clients' rights are minimal. Torture to extract confessions is documented. Prisons are described as brutal facilities with inadequate healthcare and food; political prisoners face additional brutality.`,
    issues: [
      'Systematic suppression of press freedom and comprehensive media censorship',
      'Genocide and crimes against humanity against Uyghurs in Xinjiang',
      'Suppression of Tibetan religious and cultural autonomy',
      'Complete absence of LGBTQ+ rights and systematic discrimination',
      'Arbitrary detention, torture, and lack of due process for political prisoners',
    ],
  },

  India: {
    summary: `India, with 1.4 billion people, operates as a federal parliamentary republic with democratic institutions that nominally protect rights, yet faces severe implementation challenges and systematic violations affecting vulnerable populations. The world's most populous democracy struggles to ensure fundamental freedoms and protections for vast populations experiencing poverty, caste discrimination, and religious tensions.

Press freedom is constitutionally protected and journalists report extensively on government conduct, corruption, and social issues. However, journalists investigating government wrongdoing or sensitive topics increasingly face harassment, legal threats, and occasionally violence. The government has used sedition laws against critical journalists. Media ownership concentration in corporate hands creates editorial pressures. Self-censorship is growing as journalists fear retaliation. Defamation suits are weaponized against critical reporting.

Women's rights face severe implementation gaps despite legal protections. Gender-based violence is epidemic; rape, domestic violence, and dowry-related violence are widespread. Victim support services are inadequate. Police often fail to investigate crimes against women. Infanticide and sex-selective abortion persist. Women face employment discrimination and underrepresentation in leadership. Sexual harassment in workplaces is rampant with minimal accountability. Reproductive rights are limited by government policies and community pressure. Women's inheritance and property rights are inadequately protected, particularly in rural areas.

LGBTQ+ rights remain severely restricted despite decriminalization advances. While consensual same-sex conduct was decriminalized in 2018, same-sex partnerships have no legal recognition whatsoever. Employment discrimination is rampant; LGBTQ+ individuals are dismissed from jobs or face hostile workplaces. Social acceptance is minimal; LGBTQ+ individuals live under constant fear. Transgender individuals face extreme discrimination in employment, housing, and services. Conversion therapy practices continue. Violence against LGBTQ+ individuals occurs with insufficient police investigation.

Minority rights face systematic violations. The Muslim minority - about 200 million people - experiences discrimination in employment, housing, and services. Communal violence targeting Muslims has increased; police sometimes fail to protect or investigate adequately. Christian minorities face discrimination and occasional violence. Caste discrimination persists despite legal prohibitions; lower castes face discrimination in employment, education, and social services. Dalits experience violence and are often excluded from economic opportunities. Indigenous peoples' land and resource rights are frequently violated in development projects. Religious minorities' freedoms of worship and expression are increasingly restricted under nationalist government policies.

Political prisoners and arbitrary detention are significant concerns. Activists, journalists, and opposition figures have been detained under broad national security laws. Sedition laws are weaponized against political opposition. Due process protections are inadequate; suspects sometimes face extended detention without charges. Torture occurs in police custody; documentation of abuse exists. Legal representation access is limited for poor defendants. Extrajudicial killings by police occur, particularly affecting minorities and marginalized communities.

The judiciary faces challenges in ensuring justice. While courts occasionally protect rights, they are overwhelmed; millions of cases await resolution. Corruption affects judicial decision-making. Police misconduct receives inadequate investigation and accountability. Prisons face overcrowding, inadequate healthcare, and violence. Vulnerable prisoners - minorities, political opponents - face additional abuse.`,
    issues: [
      'Systemic violence against women and inadequate victim protection systems',
      'Discrimination and violence against Muslim minority communities',
      'Caste-based discrimination persisting despite legal prohibitions',
      'Weaponization of sedition and national security laws against journalists and activists',
      'Police brutality and extrajudicial killings particularly against minorities',
    ],
  },

  Japan: {
    summary: `Japan, with 123 million people, operates as a constitutional monarchy with parliamentary democracy and has developed strong democratic institutions and human rights protections. The country's economic development, rule of law, and cultural values supporting orderliness and harmony have contributed to relatively stable rights protections, though some concerns exist around vulnerable populations.

Press freedom is substantially protected. Japanese media includes public broadcaster NHK and diverse private outlets that investigate government conduct and criticize policies. Journalists operate without systematic government censorship. Critical reporting occurs regularly on government performance and social issues. However, informal pressures through government advertising allocation and media outlets' political alignments occasionally influence coverage. Self-censorship is reported in sensitive areas like government responsibility for historical atrocities.

Women's rights protections exist legally but face significant implementation gaps. Women participate in politics and business but remain dramatically underrepresented - Japan ranks poorly globally on gender equality indices. Gender wage gaps are substantial; women face employment discrimination and career barriers. Domestic violence is widespread; victim support services are limited. Reproductive rights are accessible but some restrictions exist. Sexual harassment in workplaces is pervasive with minimal accountability mechanisms. Women face pressure to conform to traditional roles; corporate culture often expects female workforce exit after marriage or childbirth.

LGBTQ+ rights remain severely limited. While criminal penalties for same-sex conduct never existed, same-sex partnerships have no legal recognition whatsoever. Employment discrimination is rampant; LGBTQ+ individuals are dismissed or forced to hide identities. Social acceptance is low; LGBTQ+ individuals live under constant pressure to conform. Marriage is exclusively heterosexual. Transgender recognition is extremely limited; identity changes require psychological evaluation and surgical intervention. Healthcare access for transgender individuals is restricted. Violence against LGBTQ+ individuals occurs with insufficient investigation.

Minority rights face various challenges. Korean residents, numbering perhaps 700,000, face persistent discrimination despite legal protections. Employment discrimination prevents access to certain professions. Educational segregation occurs. Chinese residents and other immigrant populations experience discrimination in housing and employment. Ainu indigenous people have limited recognition; historical discrimination persists. Religious minorities, including Muslims, face occasional discrimination and social pressure. Discrimination complaints are underreported due to social stigma.

The judiciary operates with independence and due process protections are substantially available. However, the prosecution rate is very high - over 99% - raising questions about the extent of judicial review. Confessions obtained under pressure are common. Prisons operate according to reasonable standards though conditions are strict and regimented. Vulnerable prisoners sometimes face inadequate mental health services.

Police conduct occasionally raises concerns. While systematic abuse isn't documented, questioning practices sometimes allow confessions obtained without full legal representation. Minority communities report disproportionate police scrutiny and harassment.`,
    issues: [
      'Severe gender wage gaps and employment discrimination against women',
      'Absence of same-sex partnership recognition and LGBTQ+ employment discrimination',
      'Discrimination against Korean residents and other minorities in employment',
      'Limited transgender recognition and healthcare access',
      'High prosecution rate and questioning practices requiring scrutiny',
    ],
  },

  'South Korea': {
    summary: `South Korea, with 52 million people, operates as a presidential republic with democratic institutions that have strengthened over decades of political transition. The country achieved economic development alongside gradual democratic expansion, though significant human rights challenges persist, particularly regarding freedom of expression, minority rights, and gender equality.

Press freedom has expanded but faces constraints. South Korean media includes public broadcaster KBS and diverse outlets investigating government conduct and corporate misconduct. Journalists operate with legal protections against government censorship, though defamation laws are sometimes weaponized against critical reporting. National security laws create pressures toward self-censorship regarding North Korea and security issues. Media ownership concentration affects editorial independence. Political alignments of major outlets sometimes influence coverage.

Women's rights protections exist legally but face severe implementation gaps. Gender wage gaps are among OECD's worst; women earn substantially less than men in equivalent positions. Sexual harassment and assault are widespread; victim reporting is hindered by victim-blaming culture and inadequate prosecution. Domestic violence remains significant with insufficient victim services. Women face employment discrimination and are pressured to exit labor markets after marriage or childbirth. Reproductive rights are limited; abortion remains restricted despite recent legal developments. Women are dramatically underrepresented in leadership positions.

LGBTQ+ rights remain extremely limited. While criminal penalties for same-sex conduct don't exist, same-sex partnerships have no legal recognition whatsoever. Employment discrimination is rampant; LGBTQ+ individuals are forced to hide identities. Social acceptance is low; LGBTQ+ individuals face discrimination in military service obligations. Transgender recognition is extremely limited. Healthcare for transgender individuals is restricted. Violence against LGBTQ+ individuals occurs with insufficient investigation. Military service is mandatory for men; LGBTQ+ individuals face extreme stigma.

Minority rights face challenges. North Korean defectors experience discrimination in employment, housing, and social services. Chinese residents and other immigrant populations face discrimination. Religious minorities occasionally face discrimination and social pressure. Conscientious objectors to military service face prosecution despite growing recognition of conscience rights.

The judiciary operates with reasonable independence though occasional concerns arise about political influence in sensitive cases. Due process protections exist but concerns arise about police questioning practices. Torture and ill-treatment in custody have been documented; reforms are ongoing. Prisons operate according to reasonable standards though overcrowding occasionally occurs.

Police conduct occasionally raises concerns. Harsh questioning practices exist; confessions obtained under pressure are documented. Marginalized groups report discriminatory treatment. Surveillance of civil society organizations and activist groups has been documented.`,
    issues: [
      'Severe gender wage gaps and employment discrimination against women',
      'Absence of same-sex partnership recognition and LGBTQ+ discrimination',
      'Sexual harassment and assault widespread with inadequate victim support',
      'Restrictions on abortion and reproductive autonomy',
      'Harsh police questioning practices and confessions under pressure',
    ],
  },

  'North Korea': {
    summary: `North Korea, with 26 million people, operates as a totalitarian dictatorship under the Kim family dynasty and represents one of the world's most repressive governments. The state exercises total control over society, economy, and individual freedoms. Human rights protections are virtually non-existent; the system is designed to suppress any independent thought, expression, or organization that challenges regime authority.

Press freedom does not exist. All media is state-controlled; independent journalism is impossible. Citizens are forbidden from accessing foreign media; listening to international radio is criminalized. News is propaganda promoting the Kim family and regime ideology. Critical speech is absolutely prohibited; discussion of government failures is forbidden. Citizens are taught to revere the Kim family and believe propaganda narratives. Media is a tool of political control, not information dissemination.

Women's rights are severely restricted. Women are assigned gender roles reinforcing traditional subordination. Sexual violence is widespread with no victim protections. Women are forced into labor systems; trafficking for sexual purposes occurs. Reproductive autonomy doesn't exist; women are subject to government family planning controls. Access to healthcare is severely limited. Women are dramatically underrepresented in political leadership despite nominal participation. Discrimination is systematic and culturally reinforced.

LGBTQ+ rights do not exist. Homosexuality is suppressed; same-sex relationships are criminalized or severely persecuted. LGBTQ+ individuals face imprisonment, torture, and execution. Gender conformity is enforced through law and social pressure. Transgender identity is completely prohibited. The regime executes LGBTQ+ individuals in some cases. Discussion of LGBTQ+ issues is prohibited. Living as LGBTQ+ is impossible; the threat of death prevents any public expression.

Minority rights are violently suppressed. Religious freedom does not exist; Christianity, Buddhism, Islam, and other faiths are prohibited or heavily restricted. Regime-approved religious expression is limited and monitored. Christians are imprisoned in political prison camps. Religious minorities face execution. Ethnic minorities within North Korea face discrimination. Refugees and defectors face brutal punishments if captured.

Political prisoners and arbitrary detention are systemic. Extensive prison camp systems hold perhaps 50,000-200,000 political prisoners in brutal conditions. Detention is often based on family associations; relatives of political prisoners face imprisonment. Torture is systematic; political prisoners are subjected to starvation, beatings, and execution. Due process doesn't exist; political trials are propaganda theater with predetermined verdicts. Escape attempts result in execution or torture. Family members are also punished for individual detainees' crimes.

The judiciary is completely subordinate to regime authority. Independent courts don't exist. Trials are propaganda spectacles with predetermined verdicts. Legal representation is unavailable. Executions occur, sometimes publicly. Extrajudicial killings happen. Prisons are described as torture camps with starvation and systematic brutality. Political prisoners face additional cruelty and special torture areas.

The international community documents systematic crimes against humanity. UN investigators have concluded that crimes against humanity are occurring. The regime prevents independent verification of human rights conditions through isolation and information control. Defectors document systematic abuse, torture, and executions.`,
    issues: [
      'Systematic crimes against humanity including mass incarceration and torture',
      'Complete absence of press freedom and comprehensive information control',
      'Prohibition of religious freedom and persecution of religious minorities',
      'Criminalization of homosexuality and extreme LGBTQ+ persecution',
      'Arbitrary detention and systematic torture in extensive prison camp systems',
    ],
  },

  Indonesia: {
    summary: `Indonesia, with 277 million people, operates as a presidential republic with democratic institutions and constitutional protections, though implementation of rights remains inconsistent across the archipelago nation. The world's most populous Muslim-majority democracy demonstrates both progress in rights protections and persistent challenges affecting vulnerable populations and minorities.

Press freedom is constitutionally protected and journalists investigate government conduct, corruption, and social issues. However, journalists investigating sensitive topics - particularly regarding the military, religious extremism, or indigenous rights - face harassment, legal threats, and occasionally violence. Journalists have been killed; unsolved murders raise impunity concerns. Defamation laws are sometimes weaponized against critical reporting. Regional variation exists; media freedom is stronger in major cities than in remote areas.

Women's rights protections exist legally but face severe implementation gaps and religious law complications. Domestic violence is widespread with inadequate victim services. Women face employment discrimination. Reproductive rights vary by region; some areas apply Islamic law restricting reproductive autonomy. Women in certain regions face severe restrictions on movement and dress imposed through Sharia law enforcement. Sexual harassment is widespread with minimal accountability. Women are underrepresented in political and judicial leadership.

LGBTQ+ rights are virtually non-existent. While criminal penalties for consensual same-sex conduct don't exist nationally, regional Sharia law jurisdictions criminalize homosexuality with imprisonment. Same-sex partnerships have no legal recognition. Employment discrimination is rampant. Social acceptance is low; LGBTQ+ individuals live under constant fear. Violence against LGBTQ+ individuals occurs; some attacks have killed. Police sometimes harass rather than protect LGBTQ+ individuals. Transgender recognition is extremely limited. LGBTQ+ people are social pariahs in most communities.

Minority rights face systematic violations. Religious minorities - Christians, Buddhists, Hindus, Shia Muslims - face persecution, particularly in regions governed by Islamic law. Communal violence targeting minorities occurs; police sometimes fail to prevent or investigate. Indigenous peoples' land and resource rights are frequently violated in development projects; police and military sometimes violently suppress indigenous resistance. East Timor, West Papua, and Aceh regions have histories of military repression. Human rights defenders documenting abuses face threats and violence.

Political prisoners and arbitrary detention are documented concerns. Activists, journalists, and indigenous rights defenders have been detained on broad charges. Torture occurs in police and military custody; documentation of abuse exists. Legal representation is sometimes denied or restricted. Extrajudicial killings by security forces occur, particularly affecting indigenous communities and political opponents.

The judiciary faces challenges ensuring justice. While courts occasionally protect rights, political influence sometimes affects sensitive cases. Police misconduct receives inadequate investigation and accountability. Military personnel sometimes escape prosecution for human rights abuses. Prisons face overcrowding and inadequate healthcare. Vulnerable prisoners - minorities, political prisoners - face additional abuse.`,
    issues: [
      'Criminalization of homosexuality in Sharia law regions and nationwide persecution',
      'Religious minority persecution and communal violence with inadequate protection',
      'Military and police abuses including torture with inadequate accountability',
      'Severe restrictions on indigenous peoples and land rights violations',
      'Women\'s rights restrictions in Sharia law regions affecting reproductive autonomy',
    ],
  },

  Australia: {
    summary: `Australia, with 26 million people, operates as a federal constitutional monarchy with parliamentary democracy and has developed strong human rights protections through constitutional frameworks and common law traditions. The country's prosperity, rule of law, and democratic culture have created an environment where human rights are generally well-protected, though concerns exist regarding Indigenous peoples and asylum seekers.

Press freedom is substantially protected through constitutional tradition and common law. Australian media includes public broadcaster ABC and diverse private outlets that investigate government conduct, corruption, and social issues. Journalists operate without systematic government censorship. Critical reporting is vibrant; investigative journalism regularly exposes institutional failures and corporate misconduct. However, recent media ownership concentration and proposed legislation limiting press freedom have generated concerns.

Women's rights protections are comprehensive. Women participate significantly in politics, judiciary, and business. Equal pay legislation is enforced; gender wage gaps are narrowing though persist. Parental leave supports both parents. Violence against women is criminalized with victim support services available, though some advocates argue for additional resources. Reproductive rights are protected; abortion is legal and accessible. Sexual harassment in workplaces is addressed through legal protections though compliance varies.

LGBTQ+ rights have progressed significantly. Same-sex partnerships were legalized in 2008 and full marriage equality was achieved in 2017 through popular vote. Joint adoption rights were granted. Employment and service discrimination protections are strong. Legal gender recognition is accessible. Social acceptance is high; LGBTQ+ individuals report minimal discrimination in daily life. Pride events occur without state interference; Sydney Pride is celebrated internationally. Transgender healthcare is accessible through public health systems.

Minority rights face significant challenges regarding Indigenous peoples. Aboriginal and Torres Strait Islander peoples experience severe socioeconomic disparities, overrepresentation in criminal justice systems, and inadequate access to services. Incarceration rates are dramatically higher than for other Australians. Indigenous deaths in custody have occurred with inadequate accountability. Underfunding of Indigenous healthcare creates health crises. Land rights are limited; claims processes are bureaucratic and often unsuccessful. Violence against Indigenous women is epidemic. Police conduct toward Indigenous peoples raises concerns about discriminatory treatment and excessive force.

Asylum seekers and refugees face severe treatment through offshore detention policies. Detainees held on remote islands experience harsh conditions, inadequate healthcare, and psychological trauma. Access to legal representation is limited. Conditions in some facilities have been criticized as inhumane by international observers. Long-term uncertainty about legal status creates psychological harm. Children are sometimes detained in these conditions.

Immigrant communities have legal protections against discrimination, though integration challenges exist. Racial discrimination occurs; Asian Australians report increased discrimination and harassment, particularly during COVID. Far-right extremist violence has killed and injured individuals targeted based on religious identity or perceived origin.

The judiciary operates with substantial independence. Due process protections are comprehensive. Criminal defendants have rights to legal representation and fair hearing. Prisons operate according to reasonable standards though overcrowding occasionally occurs.`,
    issues: [
      'Severe socioeconomic disparities and overincarceration of Indigenous peoples',
      'Harsh offshore detention of asylum seekers in inhumane conditions',
      'Epidemic violence against Indigenous women with inadequate response',
      'Police conduct toward Indigenous peoples and racial discrimination concerns',
      'Limited land rights recognition for Indigenous peoples despite historical claims',
    ],
  },

  'New Zealand': {
    summary: `New Zealand, with 5.2 million people, operates as a parliamentary democracy under constitutional monarchy and has developed strong human rights protections. The country's democratic stability, rule of law, and cultural values emphasizing fairness have created an environment where human rights are generally well-protected, though concerns exist regarding Indigenous Maori peoples and some vulnerable populations.

Press freedom is substantially protected. New Zealand media includes public broadcaster TVNZ and diverse outlets investigating government conduct and social issues. Journalists operate without systematic government censorship. Critical reporting occurs regularly. However, media ownership concentration has increased, affecting editorial diversity. Recent legislation regarding journalists' sources has generated some press freedom concerns, though protections remain substantial.

Women's rights protections are comprehensive. Women participate significantly in politics, judiciary, and business. New Zealand was the first country granting women voting rights. Equal pay legislation is enforced; gender wage gaps exist but are narrowing. Parental leave supports both parents. Violence against women is criminalized with victim support services available. Reproductive rights are protected; abortion is legal and accessible. Sexual harassment in workplaces is addressed though compliance varies.

LGBTQ+ rights have progressed substantially. Same-sex conduct was decriminalized in 1986 and same-sex partnerships were legalized in 2005. Full marriage equality was achieved in 2013. Joint adoption rights were granted. Employment and service discrimination protections are strong. Legal gender recognition is accessible. Social acceptance is high; LGBTQ+ individuals report minimal discrimination. Pride events occur without state interference.

Minority rights face significant challenges regarding Maori peoples. Maori experience severe socioeconomic disparities, overrepresentation in criminal justice systems, and inadequate access to services. Health disparities are significant. Incarceration rates are dramatically higher than for Europeans. Maori deaths in custody have occurred with inadequate accountability. Educational achievement gaps persist. Police conduct toward Maori raises concerns about discriminatory treatment and disproportionate force. Maori women experience high rates of violence; victim support services are inadequate.

Pasifika peoples - from Pacific Island nations - face similar challenges to Maori though on smaller scale. Discrimination occurs in employment and services. Immigration enforcement has particularly targeted Pasifika communities, raising discrimination concerns. Overrepresentation in criminal justice occurs.

The judiciary operates with substantial independence. Due process protections are comprehensive. Criminal defendants have rights to legal representation and fair hearing. Prisons operate according to reasonable standards; rehabilitation is emphasized.`,
    issues: [
      'Severe socioeconomic disparities and overincarceration of Maori peoples',
      'Epidemic violence against Maori women with inadequate victim support',
      'Health disparities affecting Maori and Pasifika communities',
      'Police conduct toward Maori and discriminatory treatment concerns',
      'Limited progress on Maori land rights and historical injustice remedies',
    ],
  },

  Pakistan: {
    summary: `Pakistan, with 240 million people, operates as a federal parliamentary republic with democratic institutions that are constrained by military influence, corruption, and religious extremism. Human rights protections are formally guaranteed constitutionally but face severe implementation challenges affecting vulnerable populations, minorities, and political opponents.

Press freedom is constitutionally protected but faces substantial constraints. Journalists investigating military conduct, political corruption, or religious extremism face harassment, legal threats, and violence. The government has used defamation laws against critical reporting. Self-censorship is widespread as journalists fear state and non-state actor retaliation. Journalists have been killed; impunity for perpetrators raises accountability concerns. Military influence sometimes pressures media outlets toward favorable coverage.

Women's rights face severe implementation gaps and religious law complications. Domestic violence is epidemic; victim support services are inadequate. Honor killings occur regularly; perpetrators sometimes face minimal punishment. Forced marriage is practiced despite legal prohibition. Women face employment discrimination. Reproductive autonomy is limited by religious influences and male family member requirements. Sexual harassment is widespread with minimal accountability. Women's testimony in court has reduced weight in some contexts. Acid attacks on women occur with inadequate prosecution.

LGBTQ+ rights are virtually non-existent. Homosexuality is criminalized with imprisonment up to life sentence. Same-sex partnerships have no legal recognition. LGBTQ+ individuals face persecution, imprisonment, torture, and execution. Social acceptance is virtually non-existent; living openly is impossible. Police sometimes arrest LGBTQ+ individuals. Transgender recognition is prohibited. Violence against LGBTQ+ individuals occurs with insufficient investigation and prosecution.

Minority rights face systematic violations. Religious minorities - Christians, Hindus, Sikhs, Shia Muslims - experience persecution. Blasphemy laws are weaponized against minorities; accusations result in mob violence and extrajudicial punishment. Forced conversions to Islam occur, particularly targeting Christian and Hindu women. Communal violence targeting minorities occurs with inadequate police protection. Baloch and Sindhi minorities face marginalization and discrimination. Ahmadi Muslims face systematic persecution, legal discrimination, and violence. Harassment of minority worship places occurs.

Political prisoners and arbitrary detention are documented concerns. Opposition activists, journalists, and civil society leaders have been detained on broad charges. Torture occurs in police and military custody; extensive documentation of abuse exists. Legal representation is sometimes denied or restricted. Extrajudicial killings by security forces occur, particularly affecting political opponents and religious minorities. Enforced disappearances by military and intelligence agencies have been documented.

The judiciary is compromised by military influence and political pressure. While courts occasionally protect rights, sensitive cases sometimes reflect political rather than legal considerations. Police misconduct receives inadequate investigation and accountability. Military personnel sometimes escape prosecution for human rights abuses. Prisons face severe overcrowding, inadequate healthcare, and violence. Vulnerable prisoners - minorities, political prisoners - face additional abuse and torture.`,
    issues: [
      'Criminalization of homosexuality and severe LGBTQ+ persecution and violence',
      'Weaponization of blasphemy laws against religious minorities',
      'Torture in military and police custody with inadequate accountability',
      'Epidemic domestic violence and honor killings affecting women',
      'Enforced disappearances and extrajudicial killings by security forces',
    ],
  },

  Bangladesh: {
    summary: `Bangladesh, with 173 million people, operates as a parliamentary republic with democratic institutions that face constraints from corruption, political violence, and military influence. Human rights protections are formally guaranteed but implementation is inconsistent, with significant violations affecting vulnerable populations, minorities, and political opponents.

Press freedom is constitutionally protected but faces substantial constraints. Journalists investigating government corruption, military conduct, or political violence face harassment, legal threats, and violence. Defamation and security laws are weaponized against critical reporting. Self-censorship is widespread as journalists fear state and non-state actor retaliation. Journalists have been killed; impunity for perpetrators raises accountability concerns. Opposition media faces government pressure.

Women's rights face severe implementation gaps. Domestic violence is epidemic; victim support services are inadequate. Acid attacks on women occur regularly; perpetrators sometimes face minimal punishment. Forced marriage is practiced despite legal prohibition. Early and child marriage persist despite legal prohibition. Women face employment discrimination and are underrepresented in leadership. Reproductive autonomy is limited; access to reproductive healthcare is inadequate. Sexual harassment is widespread with minimal accountability. Gender-based violence in workplaces and public spaces is pervasive.

LGBTQ+ rights are virtually non-existent. Homosexuality is criminalized with imprisonment. Same-sex partnerships have no legal recognition. LGBTQ+ individuals face persecution, imprisonment, and torture. Social acceptance is virtually non-existent; living openly is impossible. Transgender recognition is prohibited. Violence against LGBTQ+ individuals occurs with insufficient investigation.

Minority rights face violations. Religious minorities - Hindus, Buddhists, Christians - experience discrimination and periodic persecution. Communal violence targeting minorities occurs with inadequate police protection. The indigenous Chakma minority in the Chittagong Hill Tracts face marginalization. Land rights disputes between indigenous populations and Bengali settlers have resulted in violence. Displacement of indigenous communities continues. Fanatical Islamic extremism has targeted religious minorities.

Political prisoners and arbitrary detention are documented concerns. Opposition activists have been detained on broad charges. Torture occurs in police custody; documentation of abuse exists. Extrajudicial killings by security forces occur, particularly affecting political opponents. Enforced disappearances have been documented. Legal representation is sometimes denied or restricted.

The judiciary faces political pressure affecting sensitive cases. Police misconduct receives inadequate investigation and accountability. Prisons face severe overcrowding and inadequate healthcare. Vulnerable prisoners - minorities, political prisoners - face additional abuse.`,
    issues: [
      'Criminalization of homosexuality and LGBTQ+ persecution',
      'Epidemic domestic violence and acid attacks with inadequate accountability',
      'Extrajudicial killings and enforced disappearances by security forces',
      'Religious minority persecution and communal violence',
      'Forced and child marriage and gender-based violence',
    ],
  },

  Afghanistan: {
    summary: `Afghanistan, with 42 million people, operates under Taliban rule following their 2021 return to power after military government collapse. Human rights protections have deteriorated dramatically; the Taliban regime has reimposed repressive controls over women, minorities, and political opponents. The situation represents a severe human rights crisis with systematic violations affecting the entire population.

Press freedom does not exist under Taliban rule. Independent journalism has ceased; media is controlled or self-censored. Journalists face persecution for critical reporting. International journalists have been killed. Media outlets that operated during the previous government are shut down. Citizens cannot access diverse information; Taliban propaganda is the primary information source. Discussion of government criticism is prohibited.

Women's rights have reverted to extreme restrictions. The Taliban has prohibited girls' secondary education; millions of girls are denied education rights. Women are prohibited from many employment sectors. Forced marriage to Taliban fighters is documented. Domestic violence is rampant with no victim protections. Women cannot travel without male guardians. Dress codes are enforced. Reproductive healthcare access is restricted. Widows and divorcees face extreme discrimination and destitution. Women's political and social participation is prohibited.

LGBTQ+ rights do not exist. Homosexuality is criminalized and punished with death. LGBTQ+ individuals face imprisonment and execution. No legal partnership recognition exists. Social acceptance is non-existent. Living as LGBTQ+ is impossible; the threat of death prevents any public expression. Transgender individuals face similar persecution.

Minority rights face systematic violations. The Tajik, Uzbek, and Hazara minorities experience discrimination. Hazaras, a Shia religious minority, have historically faced persecution and continue experiencing violence and discrimination. Tajiks face marginalization. Pashtun dominance is asserted through government control. Religious minorities - Christians, Hindus, Sikhs - face persecution. Forced conversions to Islam occur.

Political prisoners, arbitrary detention, and extrajudicial killings occur systematically. Former government officials, military personnel, and political opponents have been imprisoned or killed. Torture is documented in Taliban custody. Executions occur without due process. Summary killings of opposition members have been documented. Revenge killings and bloodletting against former military and government personnel occur.

The judiciary is subordinate to Taliban authority. Independent courts don't exist. Trials follow Taliban Islamic law; verdicts are often predetermined. Criminal punishments include execution, amputation, and flogging. Prisons are brutal facilities with inadequate food, healthcare, and sanitation. Political prisoners face additional brutality and torture. Extrajudicial detention occurs without legal process.

International observers document systematic crimes against humanity. The UN documents grave violations including extrajudicial killings, torture, and gender apartheid. Economic collapse follows Taliban rule, creating humanitarian catastrophe.`,
    issues: [
      'Complete prohibition of girls\' secondary education and women\'s employment',
      'Criminalization of homosexuality and systematic LGBTQ+ executions',
      'Systematic extrajudicial killings and torture of political opponents',
      'Gender apartheid restricting women\'s fundamental rights and freedoms',
      'Religious minority persecution and discrimination',
    ],
  },

  Iran: {
    summary: `Iran, with 89 million people, operates as a theocratic republic where religious authorities exercise supreme authority over the state. Human rights protections are severely limited; the government systematically represses freedoms of expression, assembly, association, and religion. The situation represents one of the world's most repressive regimes' human rights challenges.

Press freedom does not exist. The government censors media comprehensively through Ministry of Intelligence and Revolutionary Guards. Journalists face arrest, torture, and imprisonment for critical reporting. Self-censorship is widespread as journalists fear persecution. News is heavily filtered; independent sources of information are suppressed. Internet censorship prevents access to global information sources. Bloggers and online activists documenting abuses face arrest and torture.

Women's rights face severe restrictions. Women are subordinated legally to male family members in many contexts. Dress codes are enforced through police harassment and arrest. Women cannot marry, divorce, or travel without male permission in some contexts. Reproductive autonomy is restricted. Sexual violence is widespread with minimal victim protections. Women face employment discrimination. Honor killing occurs. Custody of children is biased toward fathers. Inheritance rights are unequal. Women's participation in political and judicial leadership is severely limited.

LGBTQ+ rights are virtually non-existent. Homosexuality is criminalized and punished with execution - among the few countries maintaining capital punishment for same-sex conduct. LGBTQ+ individuals face imprisonment, torture, and death. Same-sex partnerships have no legal recognition whatsoever. Social acceptance is non-existent; living openly is impossible. Police enforce strict gender conformity. Transgender individuals are forced into conversion therapy or surgery without informed consent. Transgender individuals face execution under charges of homosexuality.

Minority rights face systematic violations. Religious minorities - Bahai, Christians, Zoroastrians - experience persecution and discrimination. Bahai members are imprisoned for practicing their faith. Christians are arrested for converting or practicing their faith. Kurds, Baluchis, and Arab minorities face discrimination and marginalization. The government suppresses minority language media. Shia-Sunni tensions are leveraged politically. Religious minorities face employment discrimination and social stigma.

Political prisoners and arbitrary detention are systematic. Opposition activists, human rights defenders, and political opponents are detained on broad charges. Torture is systemic in security force custody; extensive documentation of abuse exists. Some detainees disappear; enforced disappearances occur. Extrajudicial killings happen. Death sentences are issued for political opposition activities. Executions occur, including minors. Legal representation is often denied or severely restricted.

The judiciary is subordinate to religious and political authorities. Independent courts don't exist. Trials are often propaganda spectacles with predetermined verdicts. Death sentences are issued for vague political crimes. Prisons are described as torture facilities; political prisoners face particular brutality. Healthcare in prisons is inadequate; some political prisoners die from untreated conditions. Solitary confinement is used as torture.

International observers document systematic crimes against humanity. The UN has called for investigation into possible crimes against humanity. Iran executes more people than virtually any country globally.`,
    issues: [
      'Criminalization of homosexuality and systematic LGBTQ+ executions',
      'Systematic torture and political imprisonment of opposition activists',
      'Subordination of women under male guardianship and legal discrimination',
      'Persecution of religious minorities including executions',
      'Enforcement of dress codes and strict gender conformity through police harassment',
    ],
  },

  Israel: {
    summary: `Israel, with 9.7 million people, operates as a parliamentary democracy with strong rule of law institutions, yet faces significant human rights challenges regarding Palestinian rights, settlement policy, and treatment of minorities. The country's contradictions between democratic protections for citizens and restrictions on Palestinian populations create systemic human rights tensions.

Press freedom is substantially protected for Israeli citizens and media. Israeli journalism investigates government conduct, military operations, and corruption. Critical reporting occurs regularly; Israeli media documents government wrongdoing and exposes institutional failures. However, military censorship exists for security matters; some coverage is restricted. International journalists in Palestine report more constraints. Media ownership concentration affects editorial diversity.

Women's rights protections are comprehensive for Israeli Jewish women. Women serve in significant political, judicial, and business positions. Equal pay legislation is enforced. Violence against women is criminalized with victim support services available. Reproductive rights are protected. Parental leave supports both parents. However, ultra-Orthodox communities maintain traditional gender roles; women in these communities have limited rights and autonomy. Palestinian women face additional discrimination layers.

LGBTQ+ rights have progressed significantly for Israeli citizens. Same-sex partnerships were legalized in 2005 and full marriage equality was achieved in 2018. Adoption rights were granted. Employment and service discrimination protections are strong. Legal gender recognition is available. Social acceptance is high; LGBTQ+ individuals report minimal discrimination in major cities. Tel Aviv Pride is internationally celebrated. However, LGBTQ+ Palestinians face persecution from Palestinian authorities and community, and from Israeli military.

Minority rights face systematic challenges. Palestinian citizens of Israel experience legal discrimination despite equal citizenship. Palestinian residents of West Bank face military law rather than civilian legal systems. Palestinian residents of Gaza suffer humanitarian crisis under blockade. Druze and Bedouin minorities experience discrimination. African asylum seekers and migrants face deportation and discrimination. Migrant workers experience labor exploitation and abuse.

The Palestinian human rights situation is severe. Israeli military controls Palestinian territories; Palestinian civilians face arbitrary detention, disproportionate force, and home demolitions. Settlers sometimes attack Palestinians with inadequate law enforcement protection. Palestinian prisoners report torture and ill-treatment in Israeli custody. Documentation of excessive force against Palestinian civilians exists. Restrictions on Palestinian movement limit economic opportunity and human dignity. Civilian casualties occur during military operations.

The judiciary operates with substantial independence for Israeli citizens but military law limits protections for Palestinians. Israeli courts have occasionally protected Palestinian rights, though military authorities sometimes disregard rulings. Due process protections exist for Israeli citizens but are limited for Palestinian detainees. Palestinian legal systems face limitations; Palestinian judges sometimes face political pressure.`,
    issues: [
      'Palestinian rights violations including arbitrary detention and excessive force',
      'Settlement expansion on Palestinian land and home demolitions',
      'Discrimination against Palestinian citizens and minorities',
      'Restrictions on Palestinian movement and economic opportunity',
      'Disproportionate force against Palestinian civilians',
    ],
  },

  Palestine: {
    summary: `Palestine, with 5.4 million people, operates under Palestinian Authority governance in West Bank areas and Hamas governance in Gaza. The Palestinian territories experience Israeli military occupation, internal Palestinian authority control, and humanitarian crisis. Human rights protections are severely limited; both Israeli military authority and Palestinian authorities engage in systemic human rights violations.

Press freedom is constrained. Palestinian media faces censorship from both Israeli military authorities and Palestinian authorities. Journalists investigating Palestinian Authority corruption or Hamas conduct face harassment, detention, and torture. Self-censorship is widespread. International journalists reporting from Palestine face Israeli military restrictions and Palestinian authority pressure. Critical reporting is suppressed from both authorities.

Women's rights face severe restrictions. Domestic violence is rampant with inadequate victim protections. Honor killings occur; perpetrators sometimes face minimal punishment. Forced marriage is practiced. Women face employment discrimination and limited economic opportunity. Reproductive autonomy is limited. Sexual harassment is widespread with minimal accountability. Palestinian Authority law sometimes applies Sharia-based restrictions. Women's participation in politics is limited.

LGBTQ+ rights do not exist. Homosexuality is criminalized or severely persecuted. Same-sex partnerships have no legal recognition. LGBTQ+ individuals face imprisonment, torture, and execution by Palestinian authorities and Hamas. Social acceptance is virtually non-existent; living openly is impossible. Police enforce strict gender conformity. Transgender individuals face severe persecution.

Minority rights face challenges. Christian minorities experience discrimination and occasional persecution. Minorities within Palestinian society face marginalization. Restrictions on freedom of movement particularly impact minority communities.

Political prisoners and arbitrary detention occur from both Palestinian authorities and Israeli military. Palestinian Authority security services detain opposition activists, journalists, and political opponents. Torture is documented in Palestinian Authority custody. Israeli military detains Palestinian civilians in military detention. Torture allegations exist against Israeli military. Extrajudicial killings by security forces occur. Hamas executes political opponents. Palestinian Authority executes accused collaborators.

The judiciary is compromised. Palestinian Authority courts face political pressure affecting sensitive cases. Israeli military courts control Palestinians in West Bank. Hamas courts apply Islamic law. Due process protections are inadequate. Prisons face severe overcrowding and inadequate healthcare. Vulnerable prisoners face additional abuse.

The humanitarian situation worsens; blockade of Gaza creates deprivation. Infrastructure is inadequate. Access to healthcare and education is limited. Economic opportunity is severely restricted. Civilian casualties occur during military operations and internal conflicts.`,
    issues: [
      'Israeli military occupation and Palestinian Authority restrictions on freedoms',
      'Torture by both Israeli military and Palestinian Authority security services',
      'Criminalization of homosexuality and LGBTQ+ persecution',
      'Arbitrary detention and extrajudicial killings by security forces',
      'Humanitarian crisis in Gaza with blockade and infrastructure collapse',
    ],
  },

  Iraq: {
    summary: `Iraq, with 45 million people, operates as a federal parliamentary republic emerging from conflict and instability. Human rights protections are formally guaranteed but implementation is inconsistent due to corruption, security force misconduct, and persistent insurgency. Vulnerable populations face systematic violations from both government forces and non-state actors.

Press freedom exists but faces constraints. Iraqi media investigates government conduct and corruption, though journalists covering security issues face threats. Journalists have been killed; impunity for perpetrators raises accountability concerns. Security forces sometimes harass journalists. Defamation laws are weaponized against critical reporting. Self-censorship is common as journalists fear retaliation.

Women's rights face severe implementation gaps. Domestic violence is rampant; victim support services are inadequate. Forced marriage occurs. Women face employment discrimination. Personal status law restricts women's rights in marriage, divorce, and inheritance. Reproductive autonomy is limited. Sexual violence occurs in conflict and by security forces. Women in ISIS-held areas experienced systematic sexual slavery. Sexual harassment is widespread with minimal accountability.

LGBTQ+ rights are virtually non-existent. Homosexuality is criminalized. Same-sex partnerships have no legal recognition. LGBTQ+ individuals face persecution, imprisonment, torture, and execution. Social acceptance is non-existent. ISIS executed LGBTQ+ individuals. Even after ISIS defeat, LGBTQ+ individuals face continued persecution. Police sometimes arrest LGBTQ+ individuals. Transgender recognition is prohibited.

Minority rights face systematic violations. Religious minorities - Christians, Yazidis, Mandaeans - experience persecution. ISIS genocide against Yazidis murdered thousands. Christians are persecuted and internally displaced. Religious minorities face ongoing discrimination. Sunni-Shia sectarian violence persists. Kurds seek autonomy; Arab-Kurd tensions exist. LGBTQ+ individuals from minorities face compounded persecution.

Political prisoners and arbitrary detention occur. Opposition activists have been detained on broad charges. Torture occurs in security force custody; documentation of abuse exists. ISIS-affiliated individuals are detained sometimes without due process. Extrajudicial killings by security forces occur. Militia groups detain individuals outside state authority. Enforced disappearances have been documented.

The judiciary faces political pressure and capacity limitations. Due process protections are inconsistent. Police misconduct receives inadequate investigation. Military personnel sometimes escape prosecution. Prisons face severe overcrowding and inadequate healthcare. Vulnerable prisoners face violence.

Millions of Iraqis were internally displaced by ISIS conflict; many remain displaced. Humanitarian situation remains dire in some areas. Economic opportunity is severely limited. Security situation remains volatile.`,
    issues: [
      'Persecution of religious minorities including Christians and Yazidis',
      'Criminalization of homosexuality and LGBTQ+ persecution',
      'Torture by security forces with inadequate accountability',
      'Sectarian violence between Sunni and Shia communities',
      'Arbitrary detention and extrajudicial killings',
    ],
  },

  Jordan: {
    summary: `Jordan, with 11 million people, operates as a constitutional monarchy with parliamentary system. The country has maintained relative stability compared to regional neighbors, yet faces significant human rights challenges regarding freedoms, minority rights, and refugee populations. The government balances democratic appearances with restrictions on opposition and civil liberties.

Press freedom exists but faces constraints. Jordanian media investigates government conduct, though journalists covering sensitive topics face pressure. Security laws are sometimes weaponized against critical reporting. Self-censorship is common; journalists avoid topics deemed sensitive by authorities. Defamation laws create chilling effects on critical reporting. Media ownership affects editorial independence.

Women's rights face implementation gaps and legal discrimination. Personal status law restricts women's rights in marriage, divorce, and inheritance. Domestic violence is widespread; victim support services are inadequate. Forced marriage and early marriage persist. Women face employment discrimination. Honor killings occur; perpetrators sometimes face reduced sentences. Sexual assault victims face stigma and inadequate prosecution. Reproductive rights are limited.

LGBTQ+ rights are virtually non-existent. Homosexuality is criminalized with imprisonment. Same-sex partnerships have no legal recognition. LGBTQ+ individuals face persecution, imprisonment, and torture. Social acceptance is non-existent; living openly is impossible. Police sometimes arrest LGBTQ+ individuals. Transgender recognition is prohibited. Violence against LGBTQ+ individuals occurs with insufficient investigation.

Minority rights face challenges. Religious minorities - Christians, Baha'is - experience discrimination. Palestinian refugees, numbering nearly 2 million, face legal restrictions and marginalization. Stateless persons from various origins face exclusion from services. Discrimination in employment and housing occurs against minorities.

Political prisoners and arbitrary detention are documented concerns. Opposition activists have been detained on broad national security charges. Torture occurs in security force custody; documentation of abuse exists. Detainees sometimes lack access to legal representation. Extrajudicial killings by security forces occur rarely but have been documented.

The judiciary faces political pressure affecting sensitive cases. Due process protections exist but implementation varies. Police misconduct receives inadequate investigation. Prisons face overcrowding and inadequate healthcare. Vulnerable prisoners - political, minorities - face additional abuse.

Refugee populations face severe restrictions. Palestinian and Syrian refugees are restricted from certain employment sectors. Movement restrictions limit economic opportunity. Healthcare access is limited. Education access for refugee children is constrained.`,
    issues: [
      'Criminalization of homosexuality and LGBTQ+ persecution',
      'Discrimination against Palestinian refugees and marginalization',
      'Restricted press freedom and weaponization of security laws',
      'Domestic violence and honor killings affecting women',
      'Torture in security force custody with inadequate accountability',
    ],
  },

  Cambodia: {
    summary: `Cambodia, with 17 million people, operates as a constitutional monarchy with authoritarian Prime Minister Hun Manet exercising dominant control. Human rights protections are severely limited; opposition and civil society face systematic repression. The government restricts fundamental freedoms through legal mechanisms and security force intimidation.

Press freedom is severely constrained. Journalists investigating government corruption or opposition activities face harassment, legal threats, and violence. Self-censorship is widespread as journalists fear state retaliation. Defamation and incitement laws are weaponized against critical reporting. Media ownership is concentrated among government-aligned oligarchs. Independent journalists work under extreme constraints.

Women's rights face implementation gaps. Domestic violence is epidemic; victim support services are inadequate. Human trafficking targets women and girls; enforcement against traffickers is weak. Women face employment discrimination. Sexual harassment is widespread with minimal accountability. Women's inheritance and property rights are inadequate. Reproductive autonomy is limited. Women's political participation is minimal.

LGBTQ+ rights are non-existent. While criminal penalties for same-sex conduct don't exist, same-sex partnerships have no legal recognition. Employment discrimination is rampant. LGBTQ+ individuals face social stigma and discrimination. Transgender recognition is prohibited. Violence against LGBTQ+ individuals occurs with insufficient investigation. Social acceptance is non-existent.

Minority rights face challenges. Vietnamese residents face discrimination despite legal protections. Chams, a Muslim minority, experience discrimination. Ethnic minorities face marginalization. Religious minorities - Christians, Muslims - experience occasional discrimination and pressure.

Political prisoners and arbitrary detention occur. Opposition politicians and activists have been detained on broad charges. Torture occurs in police custody; documentation of abuse exists. Courts issue politically motivated verdicts. Extrajudicial killings have been documented. Legal representation is often inadequate.

The judiciary is subordinate to government authority. Independent courts don't exist. Trials of opposition figures and activists are often predetermined. Due process protections are inadequate. Prisons face severe overcrowding and inadequate healthcare. Political prisoners face additional brutality.

Civil society faces systematic repression. NGOs are restricted; criticism of government is prohibited. Labor unions face pressure. Student activism is suppressed.`,
    issues: [
      'Systematic repression of opposition and political prisoners',
      'Press freedom constraints and weaponization of defamation laws',
      'Human trafficking particularly affecting women and girls',
      'Absence of LGBTQ+ legal recognition and discrimination',
      'Subordination of judiciary to government authority',
    ],
  },

  Laos: {
    summary: `Laos, with 7.6 million people, operates as a one-party communist state where the Lao People's Revolutionary Party exercises comprehensive control. Human rights protections are minimal; the government systematically restricts fundamental freedoms through legal mechanisms and security force intimidation.

Press freedom does not exist. Media is state-controlled; independent journalism is impossible. Citizens are prevented from accessing foreign media and information sources. News is propaganda promoting government policies. Critical speech is absolutely prohibited; discussion of government failures is forbidden. Bloggers and online activists documenting issues face arrest and torture. Citizens are taught to support government authority without question.

Women's rights are restricted. Domestic violence is widespread; victim protections are minimal. Human trafficking targets women and girls; enforcement against traffickers is weak. Women face employment discrimination. Sexual harassment is rampant. Reproductive autonomy is limited by government control. Women's economic and political participation is limited. Inheritance rights are unequal.

LGBTQ+ rights are non-existent. While criminal penalties for same-sex conduct don't exist, same-sex partnerships have no legal recognition. LGBTQ+ individuals face social stigma and discrimination. LGBTQ+ visibility is suppressed; LGBTQ+ individuals live hidden. Transgender recognition is prohibited. Violence against LGBTQ+ individuals occurs with insufficient investigation. Social acceptance is non-existent.

Minority rights face severe violations. Hill tribe minorities experience discrimination and marginalization. Vietnamese and Thai minorities face restrictions. Religious minorities - Christians, Muslims - experience persecution. Christian activities are monitored and restricted; conversion is discouraged or prohibited. Mosques operate under government surveillance. Religious minorities' freedom of worship is severely limited.

Political prisoners and arbitrary detention occur systematically. Opposition activists and dissidents are detained without charges. Torture occurs in custody; prisoners report systematic abuse. Legal representation is denied or severely restricted. Extrajudicial killings occur. Prisons are brutal facilities with inadequate food and healthcare. Political prisoners face isolation and torture.

The judiciary is subordinate to Communist Party authority. Independent courts don't exist. Trials are propaganda theater with predetermined verdicts. Legal defense is unavailable. Confessions obtained under torture are used in proceedings. Executions occur; prisoners are sometimes executed in custody. Prisons are torture camps with starvation and systematic brutality.

Civil society is non-existent. All organizations are state-controlled. Independent activity is prohibited. Citizens cannot organize for any purpose without government permission.`,
    issues: [
      'Systematic suppression of press freedom and independent media',
      'Persecution of religious minorities and conversion prohibition',
      'Arbitrary detention and torture of political prisoners',
      'One-party state control over all aspects of society',
      'Human trafficking and inadequate victim protections',
    ],
  },

  Myanmar: {
    summary: `Myanmar, with 55 million people, operates under military junta rule following 2021 coup d'état. The military has dismantled democratic institutions and systematic human rights violations pervade all aspects of society. The situation represents a severe human rights crisis with widespread extrajudicial killings, torture, and civilian casualties.

Press freedom does not exist. The military controls media comprehensively through censorship mechanisms. Journalists face arrest and torture for critical reporting. Self-censorship is absolute as journalists fear death. Independent media outlets are shut down or forced underground. Citizens cannot access diverse information. Internet restrictions prevent information access. Social media platforms are blocked. Documentation of military wrongdoing is criminalized.

Women's rights face severe violations. Gender-based violence is epidemic; victims face additional trauma from military actions. Rape by military personnel is used as warfare strategy. Forced displacement often separates women from family protection. Women's economic opportunity is severely restricted. Reproductive autonomy is limited. Women are trafficked for sexual slavery. Female political and social participation is suppressed.

LGBTQ+ rights are virtually non-existent. Homosexuality is criminalized with imprisonment. Same-sex partnerships have no legal recognition. LGBTQ+ individuals face persecution, imprisonment, torture, and execution. Social acceptance is non-existent. Police arrest LGBTQ+ individuals. Transgender recognition is prohibited. Violence against LGBTQ+ individuals occurs with no investigation or protection.

Minority rights face systematic violations. The Rohingya Muslim minority faces genocide; military campaigns have murdered hundreds of thousands. The remaining Rohingya are internally displaced in camps. Shan, Karen, and Kachin ethnic minorities face persecution and military violence. Religious minorities - Christians, Muslims, Buddhists - experience persecution. Forced assimilation is imposed on minorities. Minority languages are suppressed.

Political prisoners and arbitrary detention occur systematically. Opposition leaders, activists, and government critics are imprisoned. Torture is systemic in military custody; extensive documentation of abuse exists. Executions occur without trial. Extrajudicial killings by military are widespread. Enforced disappearances occur. Civilians are killed in military operations. Summary executions of protesters have been documented.

The judiciary is subordinate to military authority. Independent courts don't exist. Trials are propaganda spectacles with predetermined verdicts. Death sentences are issued for political opposition. Legal representation is unavailable. Prisons are torture chambers with starvation and systematic brutality. Political prisoners face particular cruelty and isolation. Executions occur in custody.

Civil society is systematically suppressed. All organizations are banned or controlled. Peaceful protest is prohibited; protesters are shot. Labor unions are banned. Student activism is suppressed.

The situation represents ongoing crimes against humanity. UN investigators document systematic atrocities. International criminal justice mechanisms are being considered.`,
    issues: [
      'Genocide against Rohingya Muslim minority',
      'Widespread extrajudicial killings and torture by military',
      'Systematic persecution of ethnic minorities',
      'Suppression of press freedom and comprehensive media censorship',
      'Arbitrary detention of political prisoners and government critics',
    ],
  },

  Nepal: {
    summary: `Nepal, with 30 million people, operates as a federal parliamentary republic with democratic institutions emerging from conflict. The country has made progress transitioning from monarchy and civil war, yet faces significant human rights challenges regarding freedoms, minority rights, and security force conduct. Implementation of rights protections remains inconsistent.

Press freedom is substantially protected. Nepali media investigates government conduct and corruption. Journalists operate without systematic state censorship. Critical reporting occurs regularly. However, journalists covering security issues occasionally face pressure. Media ownership concentration affects editorial diversity. Defamation laws sometimes challenge press freedom.

Women's rights protections are developing. Violence against women is widespread; victim support services are inadequate. Child marriage persists despite legal prohibition. Forced marriage occurs. Women face employment discrimination. Reproductive autonomy is limited. Sexual harassment is widespread with minimal accountability. Women's inheritance and property rights are inadequate. Women's political participation is limited though improving.

LGBTQ+ rights have developed. Homosexuality was decriminalized in 2007. Same-sex partnerships have no legal recognition. Employment discrimination protections are incomplete. Social acceptance varies; urban areas show greater openness while rural communities maintain traditional views. LGBTQ+ individuals report discrimination in some contexts. Violence against LGBTQ+ individuals occurs with insufficient investigation. Transgender recognition is developing but limited.

Minority rights protections exist for various ethnic groups. Madhesis, a southern ethnic group, have historically faced discrimination and marginalization. Dalit communities face caste discrimination despite legal prohibition. Muslims experience occasional discrimination and communal tension. Nepali language minorities face pressure toward assimilation.

Security forces sometimes engage in misconduct. Torture allegations have been documented. Police conduct toward marginalized communities raises concerns about discriminatory treatment. Extrajudicial killings from civil war period remain unaccounted; transitional justice mechanisms are developing slowly.

The judiciary operates with reasonable independence though occasional concerns arise about political influence. Due process protections exist but implementation varies. Prisons operate according to reasonable standards though overcrowding occasionally occurs. Vulnerable prisoners sometimes face inadequate healthcare.

Civil society operates with reasonable freedom though some constraints exist. NGOs and advocacy organizations work on rights issues. Labor unions operate with limited constraints.`,
    issues: [
      'Persistent violence against women and inadequate victim protection',
      'Caste discrimination against Dalits despite legal prohibition',
      'Limited LGBTQ+ legal recognition and persistent discrimination',
      'Incomplete transitional justice from civil war period',
      'Child marriage and forced marriage persistence',
    ],
  },

  Mongolia: {
    summary: `Mongolia, with 3.4 million people, operates as a parliamentary republic with democratic institutions. The country has transitioned from one-party communist rule to democracy and has developed moderate human rights protections, though implementation challenges exist affecting vulnerable populations. Constitutional protections are substantially enforceable though concerns arise about freedom constraints and economic inequality.

Press freedom is substantially protected. Mongolian media investigates government conduct and corruption. Journalists operate without systematic state censorship. Critical reporting occurs regularly. However, media ownership concentration among business oligarchs affects editorial independence. Defamation laws occasionally challenge press freedom. Some journalists face legal harassment for sensitive reporting.

Women's rights protections are developing. Violence against women remains significant; victim support services are developing but inadequate. Women face employment discrimination and wage gaps. Reproductive rights are accessible; abortion is available. Women participate in politics and business though remain underrepresented. Sexual harassment occurs with minimal accountability. Women's inheritance and property rights are equal.

LGBTQ+ rights have developed. Homosexuality was decriminalized in 2002. Same-sex partnerships have no legal recognition. Employment discrimination protections exist but enforcement is limited. Social acceptance varies; urban areas show greater openness while rural communities maintain conservative views. LGBTQ+ individuals report discrimination in some contexts. Transgender recognition is developing but limited. Violence against LGBTQ+ individuals occurs with insufficient investigation.

Minority rights protections exist. Ethnic minorities including Kazakhs have cultural and language rights. Religious freedom is protected; various faiths worship openly. Immigrant populations experience varying degrees of acceptance and discrimination.

The judiciary operates with reasonable independence though occasional concerns arise about political influence. Due process protections exist and are generally enforceable. Criminal defendants have rights to legal representation. Prisons operate according to reasonable standards though overcrowding occasionally occurs. Police conduct occasionally raises concerns about excessive force.

Civil society operates with reasonable freedom. NGOs and advocacy organizations work on rights issues. Labor unions operate with limited constraints. Peaceful protest occurs without systematic state suppression, though occasional incidents of police response to protests raise concerns.`,
    issues: [
      'Persistent violence against women and inadequate victim services',
      'Gender wage gaps and employment discrimination',
      'Limited LGBTQ+ legal recognition and partnership rights',
      'Media ownership concentration affecting editorial independence',
      'Police conduct toward marginalized populations requiring oversight',
    ],
  },

  'Papua New Guinea': {
    summary: `Papua New Guinea, with 10 million people, operates as a parliamentary democracy with Westminster-style institutions. The country faces significant human rights challenges due to poverty, limited state capacity, and weak rule of law implementation. Violence and discrimination are widespread; vulnerable populations lack adequate protections.

Press freedom is constitutionally protected but faces practical constraints. Papua New Guinean media investigates government conduct, though journalists covering sensitive topics occasionally face pressure. Journalism is challenging due to geographic isolation and limited resources. Media ownership concentration affects editorial diversity. Defamation laws sometimes challenge press freedom.

Women's rights face severe implementation gaps. Violence against women is epidemic; victim support services are minimal. Rape is widespread with low prosecution rates. Forced marriage occurs. Sexual harassment is rampant with virtually no workplace protections. Women's inheritance and property rights are inadequate. Reproductive autonomy is limited. Women's political participation is minimal.

LGBTQ+ rights are minimal. While homosexuality isn't formally criminalized nationally, same-sex conduct is illegal in some provinces. Social acceptance is non-existent. LGBTQ+ individuals face extreme discrimination. Violence against LGBTQ+ individuals occurs frequently with no investigation or protection. Transgender recognition is prohibited. Living openly is virtually impossible.

Minority rights protections are inadequate. Indigenous populations face marginalization and discrimination. Land rights disputes are frequent; indigenous peoples' claims are often rejected. Resource extraction projects often violate indigenous rights with inadequate consultation. Religious minorities occasionally experience discrimination.

Arbitrary detention and police misconduct are concerns. Police conduct toward marginalized communities raises concerns about discriminatory treatment. Torture allegations have been documented. Legal representation is sometimes unavailable. Due process protections are often inadequate, particularly for poor defendants.

The judiciary is under-resourced and faces capacity limitations. Courts are congested; cases await resolution for years. Police misconduct receives inadequate investigation and accountability. Prisons face severe overcrowding and inadequate healthcare. Vulnerable prisoners face violence.

Civil society operates with reasonable freedom though some constraints exist. NGOs work on rights issues though security concerns sometimes limit activities.`,
    issues: [
      'Epidemic violence against women with minimal victim protection',
      'Absence of legal recognition and protection for LGBTQ+ individuals',
      'Discrimination against indigenous peoples and land rights violations',
      'Weak police conduct oversight and accountability mechanisms',
      'Under-resourced judiciary creating justice access barriers',
    ],
  },

  Fiji: {
    summary: `Fiji, with 930,000 people, operates as a parliamentary republic with constitutional protections. The country has experienced political instability including military coups, affecting democratic development. Human rights protections are formally guaranteed but implementation varies; vulnerable populations face discrimination and inadequate protections in some areas.

Press freedom exists but faces constraints. Fijian media investigates government conduct, though journalists covering military or sensitive topics occasionally face pressure. Media ownership concentration affects editorial diversity. Security regulations sometimes limit press freedom. Self-censorship occurs regarding military and sensitive government issues.

Women's rights protections are developing. Violence against women remains significant with inadequate victim support services. Sexual harassment is widespread in workplaces with minimal accountability. Women face employment discrimination. Reproductive rights are accessible though some restrictions exist. Women's participation in politics and business is limited. Women's inheritance and property rights are improving.

LGBTQ+ rights are minimal. While homosexuality was decriminalized recently, same-sex partnerships have no legal recognition. Social acceptance is low. LGBTQ+ individuals face discrimination in employment and services. Transgender recognition is prohibited. Violence against LGBTQ+ individuals occurs with minimal investigation. Living openly is difficult.

Minority rights protections exist for Indigenous Fijians and Indo-Fijians. Communal tensions between these groups have periodically resulted in violence. Land rights disputes between groups persist. Religious freedom is protected; various faiths worship openly. Immigrant communities experience varying discrimination.

The judiciary operates with reasonable independence though occasional concerns arise about political influence. Due process protections exist and are generally enforced. Criminal defendants have rights to legal representation. Prisons operate according to reasonable standards.

Police conduct occasionally raises concerns. Civil unrest following elections has sometimes resulted in police force responses. Police conduct toward marginalized communities occasionally raises concerns.

Civil society operates with reasonable freedom. NGOs and advocacy organizations work on rights issues. Labor unions operate. Peaceful protest generally occurs without systematic state suppression.`,
    issues: [
      'Persistent violence against women and inadequate victim services',
      'Limited LGBTQ+ legal recognition and continuing discrimination',
      'Communal tensions between ethnic groups with periodic violence',
      'Limited women\'s participation in politics and leadership',
      'Media ownership concentration and journalist pressure',
    ],
  },
}

async function main() {
  console.log('====================================================================')
  console.log('🌍 HUMAN RIGHTS SUMMARIES DATABASE INSERTION - COUNTRIES 41-80')
  console.log('====================================================================\n')

  let successCount = 0
  let errorCount = 0

  for (const country of targetCountries) {
    try {
      const countryName = country.name
      const data = humanRightsData[countryName]

      if (!data) {
        console.log(`⏭️  Skipping ${countryName} - no data provided`)
        continue
      }

      const coords = countryCoords[countryName] || { lat: 0, lng: 0 }

      // Save to database
      const result = await prisma.locationSummary.upsert({
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

      console.log(`✅ ${countryName}`)
      console.log(`   Length: ${data.summary.length} chars | Issues: ${data.issues.length}`)
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
  console.log('✅ HUMAN RIGHTS DATABASE INSERTION COMPLETE!')
  console.log(`   Successfully saved: ${successCount} summaries`)
  console.log(`   Errors: ${errorCount}`)
  console.log(`   Total countries: ${targetCountries.length}`)
  console.log('====================================================================')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
