import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Human Rights Summaries for Countries 121-143 (Cameroon through Congo-Brazzaville)

// 121 - CAMEROON
const CAMEROON_SUMMARY = `# Cameroon: Human Rights Landscape

Paul Biya has presided over four decades of systematic human rights abuse, and the October 2025 election—greeted with fresh reports of opposition killings—signals zero tolerance for dissent. Cameroon's human rights crisis is bifurcated: in the Anglophone regions, separatist violence and government counter-insurgency kill civilians indiscriminately; in Francophone zones, the security state crushes political opposition with arrests, torture, and enforced disappearances. This is not failed governance—it's intentional repression. Journalists vanish. Opposition figures face fabricated charges. LGBTQ+ individuals hide identically while Biya's government criminalizes their existence. Women detained in the Anglophone conflict zones face systematic sexual violence. Cameroon's tragedy is that it could be continental leader—instead, it's a cautionary tale of what happens when an aging autocrat chooses power over people.

## Key Issues

1. **Political Prisoners and Opposition Suppression**
   - October 2025: Post-election protests crushed; demonstrators killed by security forces, hundreds arrested
   - Opposition figures, including Maurice Kamto (2018 challenger), prevented from running and subsequently detained
   - Torture allegations widespread among arrested opposition supporters; government denies allegations while detention records remain classified
   - Prison conditions deteriorate: overcrowding, inadequate medical care, food shortages disproportionately affect political detainees
   - No independent judicial oversight; military courts handle security cases with predetermined outcomes

2. **Press Freedom and Expression Restrictions**
   - Journalists arrested for "spreading false news" or criticizing government—vague laws weaponized against independent media
   - Radio stations shut down arbitrarily; television broadcasters self-censor to survive
   - Foreign journalists require government approval for reporting; surveillance of international media documented
   - Online repression escalating: internet throttled during protests, social media platforms briefly blocked
   - Civil society organizations operating in shrinking space; activists report harassment, arbitrary arrests

3. **Anglophone Conflict: Civilians Caught in Crossfire**
   - Government security forces documented committing extrajudicial killings, village burnings, indiscriminate detention in English-speaking regions
   - Human Rights Watch estimates 6,000+ civilian deaths since 2016; government dismisses figures as inflated
   - Separatist militias also commit atrocities: kidnappings, executions of "collaborators," forced taxation
   - 500,000+ internally displaced; humanitarian access severely restricted, blocking independent monitoring
   - Sexual violence against women used as military tactic; survivors lack medical, psychological support

4. **Women's Rights: Structural Inequality and Wartime Abuses**
   - Legal framework discriminatory: marriage law, inheritance rights, child custody favor men
   - Gender-based violence endemic: domestic violence rates high, criminalization weak, prosecution rarer
   - In Anglophone conflict zones, women face systematic sexual assault by both security forces and separatists
   - Women's workforce participation low; wage gaps substantial; land ownership restricted
   - Maternal mortality elevated; healthcare access limited, especially in rural/conflict areas

5. **LGBTQ+ Rights: Criminalization and Invisibility**
   - Cameroon's penal code criminalizes same-sex relations (Article 347-1); penalties up to 5 years imprisonment
   - Enforcement sporadic but credible: arrests documented; prosecutions occur under guise of "public morality" offenses
   - LGBTQ+ individuals face harassment from family, community, law enforcement; no legal protections
   - Civil society organizations operating covertly; international organizations face government obstruction
   - Healthcare discrimination: LGBTQ+ individuals avoid medical systems, leading to untreated health conditions

## International Context

The international community's silence on Cameroon's crisis reflects realpolitik: France maintains security partnerships despite human rights concerns; the U.S. prioritizes counterterrorism cooperation; regional bodies lack enforcement capacity. Cameroon's geographic position (border with Nigeria, controlling Central African shipping) makes it strategically valuable despite democratic collapse. International human rights investigations (UN, ICC) face government obstruction. Sanctions remain absent, emboldening further repression.

## Bottom Line

Cameroon's human rights collapse isn't accidental—it's calculated control. An aging autocrat, insecure about succession, uses state violence to eliminate political alternatives while the international community watches silently. Journalists imprisoned for reporting truth. LGBTQ+ individuals criminalized for existing. Women assaulted with impunity. Civilians trapped in a separatist war neither side can win. Cameroon shows that constitutional democracy written on paper means nothing when tanks enforce the regime's will.`

const CAMEROON_ISSUES = [
  'Political Prisoners and Opposition Suppression',
  'Press Freedom and Expression Restrictions',
  'Anglophone Conflict: Civilians Caught in Crossfire',
  'Women\'s Rights: Structural Inequality and Wartime Abuses',
  'LGBTQ+ Rights: Criminalization and Invisibility'
]

// 122 - ZAMBIA
const ZAMBIA_SUMMARY = `# Zambia: Human Rights Under Fragile Democracy

Hakainde Hichilema's 2021 election victory appeared to reset Zambia's human rights trajectory—he promised democratic openness, released political prisoners, loosened media restrictions. Two years later, the promises remain partially realized, and concerning patterns are emerging. A debt crisis forcing austerity measures is crushing vulnerable populations; opposition politicians face selective harassment; political space remains constrained despite cosmetic reforms. Zambia illustrates the fragility of post-authoritarian transitions: initial optimism can mask institutional resistance, elite interests, and economic pressures that perpetuate injustice. The question is whether Hichilema's administration represents genuine democratic commitment or temporary reprieve before authoritarianism resurfaces.

## Key Issues

1. **Debt Crisis and Economic Rights Violations**
   - IMF bailout conditions impose austerity on already-poor population; fuel subsidies removed, inflation spiking
   - Healthcare and education budgets slashed; access for poor communities deteriorating
   - Zambian kwacha collapse; currency devaluation impoverishing working class and pensioners
   - Mining communities disproportionately affected: resource extraction provides wealth to elites, not workers
   - Right to adequate food, healthcare, education effectively violated through structural economic policies

2. **Press Freedom: Improvement and Reversals**
   - Hichilema administration released detained journalists; promised media freedom
   - But recent concerns: selective prosecutions of journalists investigating government corruption, land deals
   - Social media briefly restricted during political tensions; surveillance of political activists documented
   - State media remains government mouthpiece; private outlets financially vulnerable, dependent on government advertising
   - Self-censorship among journalists persists despite legal protections; fear of reprisal evident

3. **Opposition Politics and Selective Prosecution**
   - Opposition politicians, including Edgar Lungu (Hichilema's predecessor), face legal harassment
   - Charges often vague (misuse of state resources) or politically motivated; court processes opaque
   - Opposition rallies permitted but under heavy police presence; organizers report intimidation
   - Ruling party dominates state resources used for campaigns; playing field unequal
   - Parliament lacks genuine oversight; executive power remains dominant

4. **Women's Rights: Limited Progress**
   - Early marriage and child marriage remain common (18% of girls married before 18)
   - Inheritance law reformed recently but patriarchal practices persist; women's property rights weakly enforced
   - Gender-based violence endemic; domestic violence prosecution inconsistent
   - Women's workforce participation low; wage gaps substantial
   - Maternal mortality remains high (443 per 100,000); healthcare access limited

5. **LGBTQ+ Rights: Hostile Legal and Social Environment**
   - Same-sex relations criminalized; penalties up to 14 years imprisonment
   - Enforcement occurs sporadically; prosecution rates low but harassment high
   - Social stigma severe; families, communities, law enforcement all hostile
   - No legal protections; employment, housing discrimination normalized
   - International human rights organizations face pressure advocating for LGBTQ+ rights

## International Context

Hichilema's administration improved relations with Western donors; aid resumed after predecessor's authoritarian consolidation. But international focus on economic reform over governance issues enables half-measures on human rights. Zambia's debt crisis, while genuine, is weaponized to justify cuts affecting rights implementation. Regional bodies (SADC) offer symbolic support but lack enforcement. International investigative journalism has exposed corruption among ruling elites, creating uncomfortable spotlight the government seeks to diminish through media restrictions.

## Bottom Line

Zambia's democratic opening remains superficial. While visible abuses have lessened compared to predecessor regime, structural injustices persist: economic policies destroying rights, selective political prosecutions, gender violence unchecked, LGBTQ+ criminalization maintained. Hichilema inherited a crisis; his administration's limited reforms suggest either weakness or commitment to managed rather than genuine democracy.`

const ZAMBIA_ISSUES = [
  'Debt Crisis and Economic Rights Violations',
  'Press Freedom: Improvement and Reversals',
  'Opposition Politics and Selective Prosecution',
  'Women\'s Rights: Limited Progress',
  'LGBTQ+ Rights: Hostile Legal and Social Environment'
]

// 123 - MALI
const MALI_SUMMARY = `# Mali: Human Rights Collapse Under Military Junta

Mali's 2021 military coup promised restoration of security and dignity; instead, it delivered accelerated human rights collapse. Assimi Goïta's junta prioritizes security (however defined) over civil liberties, with documented extrajudicial killings, arbitrary detention, and systematic torture becoming normalized. Russian mercenaries (Africa Corps, successor to Wagner) operate with apparent impunity, documented committing atrocities alongside Malian military. The humanitarian catastrophe is staggering: internally displaced populations exceed understanding, women systematized assaulted, minorities targeted as terrorist sympathizers. Mali shows authoritarianism's endgame: repression so severe it generates resistance that justifies further crackdowns.

## Key Issues

1. **Extrajudicial Killings and Torture by Security Forces**
   - Junta security forces and Russia-linked mercenaries documented conducting summary executions; bodies burned or buried in mass graves
   - Torture allegations widespread: detainees report beatings, sexual violence, water boarding, sleep deprivation
   - "Disappeared persons" cases rising; families unable to locate relatives detained by security forces
   - Civilian deaths in military operations dismissed as "collateral damage"; investigations absent
   - International documentation efforts hampered by junta's refusal to grant access, intimidation of witnesses

2. **Press Freedom and Media Repression**
   - Independent journalists arrested for reporting security force abuses; charges of "destabilizing" or "spreading false information"
   - Radio stations shut down for critical coverage; television outlets self-censor
   - Foreign journalists face harassment, deportation; international media access severely restricted
   - Digital repression: internet throttled during political tensions; social media platforms monitored
   - Civil society organizations banned or operating underground; activist surveillance documented

3. **Jihadist Insurgency and Civilian Victimization**
   - Armed groups (JNIM, ISIS) control territory; civilians caught between military and insurgent violence
   - Jihadists commit kidnappings, executions, recruitment coercion; govern territories under harsh interpretations of Islamic law
   - Military response indiscriminate: villages suspected of insurgent sympathies targeted; women, children killed
   - Humanitarian access blocked; internally displaced populations unreachable, dying of preventable causes
   - Minority groups (Tuaregs, Fulani) scapegoated as jihadist collaborators; community targeting documented

4. **Women's Rights: Wartime Sexual Violence and Legal Discrimination**
   - Sexual violence by military, jihadists, and armed groups systematic; estimates suggest thousands of rapes
   - Survivors lack medical, psychological support; pregnancy from rape creates additional trauma
   - Legal protections weak; perpetrators rarely prosecuted; impunity normalized
   - Forced marriages, forced recruitment of women into armed groups documented
   - Women's property rights limited; inheritance discrimination persistent

5. **Minority Rights: Targeting and Marginalization**
   - Tuareg and Fulani communities blamed for jihadist insurgency despite majority being victims
   - Discrimination in employment, education, land access documented; state resources directed to Bambara/Soninke majority
   - Armed group recruitment from minority communities disproportionate due to marginalization
   - No legal protections for minorities; discrimination in security forces documented

## International Context

France's military withdrawal (Mali withdrew from ECOWAS, expelled French forces) created vacuum filled by Russian mercenaries. Western governments, frustrated by junta intransigence, have limited leverage. International human rights investigations face insurmountable obstacles; junta refuses cooperation. Sanctions exist but prove ineffective. Humanitarian agencies operate under constant obstruction. Regional neighbors (Mauritania, Senegal) host Malian refugees but face capacity limits.

## Bottom Line

Mali under Goïta's junta represents authoritarianism stripped of pretense: no elections, no constitution, no rights. Torture normalized. Journalists imprisoned. Women systematically violated. Minorities hunted. Russian mercenaries operate with impunity alongside Malian forces. The stated justification—security, stability—justifies unlimited repression. Mali shows that military takeovers claiming temporary power often entrench themselves indefinitely, destroying institutions while destroying people.`

const MALI_ISSUES = [
  'Extrajudicial Killings and Torture by Security Forces',
  'Press Freedom and Media Repression',
  'Jihadist Insurgency and Civilian Victimization',
  'Women\'s Rights: Wartime Sexual Violence and Legal Discrimination',
  'Minority Rights: Targeting and Marginalization'
]

// 124 - NIGER
const NIGER_SUMMARY = `# Niger: Authoritarianism Masquerading as Sovereignty

Abdourahamane Tchiani's July 2023 coup promised restoration of dignity against French "imperialism"; instead, Niger has descended into arbitrary detention, extrajudicial killings, and press repression that rivals pre-coup authoritarianism. The junta's anti-Western rhetoric ("sovereignty") masks profound human rights deficits. Detention centers overflow; torture allegations proliferate; journalists critical of the regime face arrest. France's military withdrawal created a security vacuum that the junta fills with Russian mercenaries, Chinese military equipment, and claims of competence that results constantly belie. The human toll is severe: civilians caught between junta security forces and jihadist insurgencies, women raped with impunity, journalists imprisoned for documentation, vulnerable populations starving as humanitarian access shrinks.

## Key Issues

1. **Arbitrary Detention and Torture**
   - Junta security forces conduct mass arrests of perceived opponents; detention locations often undisclosed
   - Torture allegations widespread: beatings, sexual violence, psychological torture documented by international observers
   - "Disappeared persons" cases rising; some individuals released after months of secret detention with visible torture marks
   - No judicial oversight; military courts handle security cases with predetermined outcomes
   - International access to detention facilities restricted; independent monitoring impossible

2. **Press Freedom: Systematic Repression**
   - Journalists arrested for criticism of junta; charges of "destabilizing," "spreading false information," "disrespecting authorities"
   - Radio stations shut down for critical coverage; television broadcasts state propaganda
   - Foreign correspondents deported; international media access severely restricted
   - Digital repression: internet throttled, social media monitored, VPNs targeted
   - Self-censorship among remaining journalists; professional organizations intimidated

3. **Jihadist Violence and Military Overreach**
   - Insurgent groups (ISIS, al-Qaeda affiliates) control territory; civilian populations face dual victimization
   - Military response indiscriminate: villages suspected of insurgent support attacked; civilian deaths normalized
   - Humanitarian access blocked; internally displaced populations unreachable
   - Minority communities (Tuaregs, Fulani) scapegoated; community-level targeting documented
   - Military abuses mask as counterterrorism; state accountability absent

4. **Women's Rights: Violence and Structural Discrimination**
   - Sexual violence by military, insurgents, and armed groups systematic during conflict
   - Early marriage remains common; inheritance rights discriminatory
   - Employment discrimination normalized; wage gaps substantial
   - Maternal mortality elevated; healthcare access limited
   - Survivors of sexual violence lack support; perpetrators rarely prosecuted

5. **Opposition and Civil Society Suppression**
   - Opposition parties face harassment; leaders arrested on vague charges
   - Civil society organizations banned or operating under extreme restrictions
   - Youth organizations targeted; university students arrested for peaceful protests
   - Labor unions suppressed; strikes banned as "destabilizing"
   - No independent election commission; no credible elections scheduled

## International Context

Tchiani's "sovereignty" framing deflects responsibility for human rights failures onto former colonial masters. But independent documentation (Amnesty International, Human Rights Watch) contradicts junta's claims. Western governments, frustrated, have limited leverage post-military-withdrawal. Regional bodies (ECOWAS) expelled Niger alongside Mali and Burkina Faso, creating "Alliance of Sahel States" where juntas reinforce each other's intransigence. Russia provides military equipment, mercenary forces, and diplomatic cover. Humanitarian agencies operate under constant obstruction; accountability mechanisms absent.

## Bottom Line

Niger's junta hides authoritarianism behind anti-colonial rhetoric. Sovereignty is codeword for the right to abuse citizens without international oversight. Journalists imprisoned. Minorities hunted. Women violated. Citizens detained arbitrarily, tortured systematically. The French are gone; the repression remains. Niger shows that anti-colonial nationalism, untethered from democracy and accountability, becomes simple despotism.`

const NIGER_ISSUES = [
  'Arbitrary Detention and Torture',
  'Press Freedom: Systematic Repression',
  'Jihadist Violence and Military Overreach',
  'Women\'s Rights: Violence and Structural Discrimination',
  'Opposition and Civil Society Suppression'
]

// 125 - CHAD
const CHAD_SUMMARY = `# Chad: Dynastic Autocracy and Inherited Brutality

Mahamat Déby inherited power from his father Idriss Déby's 30-year dictatorship; instead of reform, he's entrenched military rule while criminalizing dissent. Chad's human rights landscape is bleak: security forces conduct arbitrary detention and torture; journalists face prosecution for investigating government corruption; women's rights remain structurally unprotected; minorities face discrimination; LGBTQ+ individuals operate under criminalization. The 2024 elections were neither free nor fair—opposition candidates barred, electoral commission controlled by regime, results predetermined. Déby Jr.'s legitimacy is absent; his governance rests entirely on security force allegiance. For Chadian citizens, this means indefinite authoritarianism with no democratic accountability.

## Key Issues

1. **Arbitrary Detention and Torture**
   - Security forces conduct mass arrests of perceived opponents; torture allegations systematic
   - Detention centers operate with minimal oversight; conditions described as "inhumane" by international observers
   - Forced confessions extracted through torture; detainees later prosecuted based on coerced statements
   - Medical torture documented: detainees denied treatment for injuries sustained during interrogation
   - Release often conditional on promise of political silence; violators re-arrested

2. **Press Freedom and Journalist Persecution**
   - Journalists arrested for investigating government corruption, security force abuses, embezzlement
   - Radio stations broadcasting critical coverage shut down; broadcasting licenses revoked arbitrarily
   - Foreign journalists require government approval; international media access restricted
   - Digital repression: internet throttled, social media monitored during political tensions
   - Self-censorship among remaining journalists; professional organizations weakened

3. **Electoral Fraud and Opposition Suppression**
   - 2024 elections: opposition candidates prevented from running; alternatives disqualified on procedural grounds
   - Electoral commission stacked with regime loyalists; international observers barred
   - Opposition rallies violently dispersed; organizers arrested
   - Constitutional term limits abolished through constitutional amendments; indefinite rule legalized
   - Youth disengagement from politics; voting perceived as meaningless

4. **Women's Rights: Limited Legal Protection, Endemic Violence**
   - Inheritance law discriminatory; women's property rights weakly enforced
   - Gender-based violence endemic; domestic violence prosecution inconsistent
   - Early marriage remains common; child marriage laws weakly enforced
   - Healthcare access limited; maternal mortality elevated (859 per 100,000)
   - Workforce participation low; wage gaps and employment discrimination persistent

5. **LGBTQ+ Rights: Criminalization and Social Hostility**
   - Same-sex relations criminalized; legal penalties rarely invoked but social penalties severe
   - LGBTQ+ individuals face family rejection, community violence, law enforcement harassment
   - No legal protections; employment, housing discrimination normalized
   - Healthcare discrimination; LGBTQ+ individuals avoid medical systems
   - International human rights organizations face pressure for advocating LGBTQ+ rights

## International Context

France maintains military base in Chad (Abeché) providing air support against jihadists; this strategic partnership mutes criticism of Déby's human rights record. The U.S. provides counterterrorism assistance, prioritizing security cooperation over governance standards. Regional bodies (CEMAC, African Union) offer symbolic criticism without enforcement. China maintains economic interests but doesn't condition engagement on human rights. Humanitarian organizations operate under obstruction; accountability mechanisms absent.

## Bottom Line

Chad under Déby Jr. represents inherited despotism: a young military dictator continuing his father's brutality without the insurgency excuse. Elections rigged. Journalists imprisoned. Citizens tortured. Women violated with impunity. LGBTQ+ individuals criminalized. The international community tolerates Chad's authoritarianism because its security partnerships matter more than its citizens' freedoms. Chadian youth inherit a future with no hope of democratic change.`

const CHAD_ISSUES = [
  'Arbitrary Detention and Torture',
  'Press Freedom and Journalist Persecution',
  'Electoral Fraud and Opposition Suppression',
  'Women\'s Rights: Limited Legal Protection, Endemic Violence',
  'LGBTQ+ Rights: Criminalization and Social Hostility'
]

// 126 - BURKINA FASO
const BURKINA_SUMMARY = `# Burkina Faso: Collapsed State and Humanitarian Catastrophe

Captain Ibrahim Traoré promised to secure Burkina Faso through military prowess; instead, he's presided over 30% territorial loss to jihadists, two million internally displaced persons, and state violence that rivals the militants. Burkina Faso's human rights crisis is exponential: soldiers disappear into jihadist captivity or execution; civilians face indiscriminate military bombardment; LGBTQ+ individuals hide while government rhetoric criminalizes their existence; women assaulted by both security forces and insurgents; minorities (Fulani communities) scapegoated as terrorist collaborators. The humanitarian catastrophe is invisible internationally but catastrophic locally: malnutrition spiking, disease spreading unchecked, entire generation of children out of school. Traoré's junta cannot protect its own citizens, yet continues extending military rule through 2029, guaranteeing further deterioration.

## Key Issues

1. **Security Force Abuses and Extrajudicial Violence**
   - Troops conduct mass arrests in conflict zones; torture allegations systematic
   - "Disappeared persons" cases rising; families unable to locate relatives detained by military
   - Extrajudicial killings documented; bodies burned or buried in unmarked mass graves
   - Volunteer Defense Force (VDP) militia, poorly trained and supervised, commit revenge killings against Fulani communities
   - International investigators blocked from access; documentation limited

2. **Press Freedom and Information Control**
   - Journalists arrested for reporting security force abuses; charges vague ("destabilizing," "spreading false information")
   - Radio stations shut down for critical coverage; television broadcasts state propaganda
   - Journalists covering jihadist violence face arrest from both military and insurgents
   - Digital repression: social media monitored, VPNs targeted, internet throttled during political tensions
   - Self-censorship among remaining journalists; fear of retaliation evident

3. **Humanitarian Crisis and Civilian Suffering**
   - 2+ million internally displaced; IDP camps lack food, water, sanitation, medical care
   - Malnutrition rates spiking among children; disease outbreaks likely
   - Schools closed in conflict zones; 1 million+ children out of school
   - Healthcare system collapsed; maternal/child mortality rising
   - Humanitarian access severely restricted; aid organizations cannot reach populations
   - Food insecurity critical; agriculture disrupted; supply chains broken

4. **Women's Rights: Wartime Assault and Legal Discrimination**
   - Sexual violence by military and jihadists systematic; estimates suggest thousands of rapes
   - Survivors lack medical, psychological support; pregnancy from rape creates additional trauma
   - Early marriage remains common; child marriage laws weakly enforced
   - Inheritance discrimination persistent; property rights weakly protected
   - Displacement camps lack services for women's reproductive health

5. **Ethnic Targeting and Minority Rights Violations**
   - Fulani communities scapegoated as jihadist sympathizers; community-level targeting documented
   - VDP militia conducts revenge killings of Fulani civilians; ethnic cleansing patterns emerging
   - No legal protections for minorities; state resources directed to majority ethnic groups
   - Education access limited for minority language groups
   - Land disputes favor majority groups; minority land expropriation documented

## International Context

French military withdrawal (Traoré expelled France) left security vacuum; Russian mercenaries (Africa Corps) operate with apparent impunity. Western governments frustrated by junta intransigence have limited leverage. ECOWAS expelled Burkina Faso alongside Mali and Niger; regional cooperation collapsed. Humanitarian agencies operate under constant obstruction. International investigations (UN, ICC) face insurmountable obstacles. Donor countries continue engagement (IMF, World Bank) but with limited human rights conditioning.

## Bottom Line

Burkina Faso is collapsing in slow motion. Jihadists control 30% of territory and expanding. Two million displaced. 100+ soldiers killed in single attacks. Traoré's junta cannot protect citizens but criminalizes dissent against its failures. Women raped. Minorities hunted. Children starving. The international community watches, shrugs, applies no pressure. Burkina Faso shows that military solutions to insurgencies fail when military lacks training, discipline, legitimacy.`

const BURKINA_ISSUES = [
  'Security Force Abuses and Extrajudicial Violence',
  'Press Freedom and Information Control',
  'Humanitarian Crisis and Civilian Suffering',
  'Women\'s Rights: Wartime Assault and Legal Discrimination',
  'Ethnic Targeting and Minority Rights Violations'
]

// 127 - RWANDA
const RWANDA_SUMMARY = `# Rwanda: Stability Through Suppression

Paul Kagame has transformed Rwanda into East Africa's most developed economy while maintaining one of the world's most repressive political systems. This is authoritarianism with Wi-Fi—modern infrastructure masking systematic human rights violations. Political opposition is impossible; journalists critical of Kagame face arrest or exile; LGBTQ+ individuals criminalized; women's legal status improved but practical equality elusive; Hutu minorities subjected to historical accountability while Tutsi perpetrators of post-genocide killings avoid prosecution. Kagame's governance rests on two foundations: economic performance (poverty reduction impressive) and security force allegiance (maintained through patronage and fear). For ordinary Rwandans, this means prosperity at the price of freedom—and many appear to accept the bargain.

## Key Issues

1. **Political Opposition: De Facto Ban**
   - No genuine opposition parties function; approved parties self-censor or face dissolution
   - Opposition candidates prevented from running through procedural obstacles or arrest
   - Political rallies require government permits; opposition gatherings violently dispersed
   - Opposition politicians arrested on vague charges; trials lack judicial independence
   - Electoral field predetermined; election results reflect regime preference rather than voter choice

2. **Press Freedom and Journalist Persecution**
   - Journalists critical of Kagame face arrest, exile, or violence; self-censorship widespread
   - Radio stations broadcasting critical coverage shut down; media licenses revoked arbitrarily
   - Foreign correspondents face harassment; international media access restricted
   - Digital repression: internet throttled during political tensions, social media monitored
   - Media self-censorship so severe that criticism of government disappears from public discourse

3. **Accountability for War Crimes: Selective Justice**
   - International Criminal Tribunal for Rwanda (ICTR) prosecuted Hutu perpetrators; Tutsi perpetrators largely untouched
   - Kagame-aligned military implicated in post-genocide killings in Democratic Republic of Congo; prosecutions absent
   - Gacaca courts (community justice) processed lower-level perpetrators; structural accountability limited
   - Genocide survivors frustrated by incomplete justice; perpetrators living freely in communities
   - Truth and reconciliation incomplete; tensions persist under surface stability

4. **Women's Rights: Legal Progress and Practical Limitations**
   - Rwanda's constitution mandates gender representation; parliament has high women's participation
   - Inheritance and property rights improved; women's land ownership now possible
   - But domestic violence remains endemic; conviction rates low; enforcement inconsistent
   - Workplace discrimination persists; wage gaps substantial; advancement limited
   - Healthcare access improved but reproductive health services incomplete; maternal mortality declining but elevated

5. **LGBTQ+ Rights: Criminalization and Social Hostility**
   - Same-sex relations criminalized; penalties up to 3 years imprisonment
   - Enforcement sporadic but credible; harassment by law enforcement documented
   - Social stigma severe; families, communities, government rhetoric all hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International organizations advocating for LGBTQ+ rights face government pressure

## International Context

Western donors celebrate Rwanda's economic performance and relative stability (UNHCR praises Rwandan refugee hosting); this enthusiasm translates into limited pressure on human rights. The U.S. maintains security partnerships despite governance concerns. The UK provides development aid without conditioning on political freedoms. France's role in genocide (Operation Turquoise) creates complex dynamics; French pressure on Kagame muted. Regional bodies (EAC) defer to Kagame's leadership; no enforcement of human rights standards. China invests in infrastructure without governance conditions.

## Bottom Line

Rwanda is the stability-repression bargain made explicit. Kagame has delivered economic transformation while eliminating political freedom. Investors celebrate growth; international donors praise refugee hosting; NGOs document systematic rights violations that generate no consequences. Opposition exists only in exile. Journalists imprisoned. LGBTQ+ individuals criminalized. Women's rights improved but limited by practice. This is the model authoritarian leaders across Africa aspire to: efficient governance without democracy. For ordinary Rwandans, the question is whether prosperity justifies the absence of political voice.`

const RWANDA_ISSUES = [
  'Political Opposition: De Facto Ban',
  'Press Freedom and Journalist Persecution',
  'Accountability for War Crimes: Selective Justice',
  'Women\'s Rights: Legal Progress and Practical Limitations',
  'LGBTQ+ Rights: Criminalization and Social Hostility'
]

// 128 - BOTSWANA
const BOTSWANA_SUMMARY = `# Botswana: Africa's Democratic Anomaly (Mostly)

Botswana's November 2024 election delivered what African voters rarely experience: genuine political change through the ballot box. Duma Boko's opposition victory ended 58 years of Botswana Democratic Party dominance without violence, proving elections can matter when institutions function. But democracy in Botswana remains constrained: press freedom concerns persist; LGBTQ+ rights criminalized; women face structural discrimination; minorities (San/Bushmen) marginalized; traditional authorities limit women's land ownership. Boko's government promises reform, but institutional change occurs slowly. Botswana's trajectory will determine whether African democracy can consolidate after authoritarian-lite rule, or whether electoral victory without institutional transformation proves hollow.

## Key Issues

1. **Press Freedom: Improving but Cautious**
   - Botswana has relatively strong media landscape compared to neighbors; private outlets operate independently
   - But state media (Botswana Television Service, Botswana Press Agency) remains government mouthpiece
   - Journalists critical of government report harassment; investigative journalism limited
   - Digital media increasingly important; concerns about online monitoring emerging
   - Media ownership concentrated among government-connected interests; economic dependence on government advertising

2. **LGBTQ+ Rights: Criminalization and Invisibility**
   - Same-sex relations criminalized; criminal code penalties up to 7 years imprisonment
   - Enforcement sporadic but credible; arrests documented; prosecutions occur
   - LGBTQ+ individuals face severe social stigma; family rejection common
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International human rights organizations face government resistance; civil society advocacy restricted

3. **Women's Rights: Legal Reforms and Persistent Inequality**
   - Property and inheritance laws reformed but traditional law perpetuates discrimination
   - Domestic violence endemic; prosecution rates low; enforcement inconsistent
   - Women's representation in parliament improving but economic power limited
   - Wage gaps substantial; advancement into leadership limited
   - Rural women face compounded discrimination (language barriers, traditional authority restrictions)

4. **Minority Rights: San Marginalization**
   - San people (Bushmen) face historical discrimination; land dispossession documented
   - Educational access limited; economic opportunities constrained
   - Healthcare and government services in San languages absent; communication barriers
   - High poverty rates among San communities; government resources directed to majority groups
   - Boko administration promising greater inclusion but implementation uncertain

5. **Sexual and Reproductive Rights**
   - Abortion access heavily restricted; criminalized except for limited circumstances
   - Contraceptive access improved but healthcare quality variable
   - Sexual education limited; youth sexuality stigmatized
   - Teenage pregnancy criminalized rather than supported
   - LGBTQ+ individuals' reproductive rights non-existent; gender-affirming healthcare unavailable

## International Context

Botswana's democratic transition impressed international observers; Western donors celebrated; USAID immediately engaged with Boko administration. But international praise sometimes masks unfinished democratic work. Regional bodies (SADC, African Union) praised Botswana as model; but model remains incomplete. International pressure on LGBTQ+ rights faces government resistance; Boko administration signals gradual reform but with limited urgency. Women's rights advocacy by international organizations ongoing but dependent on donor funding; sustainability uncertain.

## Bottom Line

Botswana is Africa's democratic success story—with significant caveats. The election worked. Power transferred peacefully. Institutions functioned. But democracy is fragile infrastructure, not automatic outcome. LGBTQ+ individuals remain criminalized. Women face structural inequality. Minorities marginalized. San communities impoverished. Boko's administration offers hope for gradual reform, but entrenched interests resist change. Botswana shows what African democracy can be—imperfect, incomplete, but real.`

const BOTSWANA_ISSUES = [
  'Press Freedom: Improving but Cautious',
  'LGBTQ+ Rights: Criminalization and Invisibility',
  'Women\'s Rights: Legal Reforms and Persistent Inequality',
  'Minority Rights: San Marginalization',
  'Sexual and Reproductive Rights'
]

// 129 - NAMIBIA
const NAMIBIA_SUMMARY = `# Namibia: Liberation Legacy and Unfinished Democracy

Namibia's post-independence trajectory promised to differ from neighbors: multi-party democracy, constitutional protections, relative press freedom. Twenty years later, reality is more complicated. SWAPO (South West Africa People's Organization), liberation party, maintains dominance; opposition parties marginalized; space for dissent narrowing. Press freedom exists but faces increasing pressure; LGBTQ+ individuals criminalized; women's rights improved constitutionally but enforcement weak; indigenous San communities face ongoing marginalization; political prisoners documented. Namibia illustrates the danger of liberation movement dominance: initial democratic commitments erode as ruling parties conflate themselves with the nation's interests and view opposition as disloyalty.

## Key Issues

1. **Political Competition and Opposition Marginalization**
   - SWAPO dominates parliament; opposition fragmented; electoral advantages favor incumbent
   - Opposition politicians report harassment; anti-government rallies face police obstruction
   - Procedural obstacles prevent opposition from effectively contesting power
   - No genuine alternation of power; electoral outcomes predetermined
   - Youth frustration growing; opposition parties lack resources to compete effectively

2. **Press Freedom: Threatened Amid Relative Openness**
   - Namibia has stronger media landscape than most African countries; private outlets operate
   - But government pressure on critical journalists increasing; harassment documented
   - State media remains SWAPO mouthpiece; coverage biased toward incumbent
   - Self-censorship among journalists regarding sensitive topics (military, corruption)
   - Digital media expanding but government monitoring capabilities increasing

3. **LGBTQ+ Rights: Criminalization and Societal Hostility**
   - Same-sex relations criminalized; criminal code penalties up to 2 years imprisonment
   - Enforcement rare but possible; harassment by law enforcement documented
   - Social stigma severe; families, communities, religious leaders hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International organizations advocating for LGBTQ+ rights face government resistance

4. **Women's Rights: Constitutional Protections, Weak Enforcement**
   - Constitution prohibits discrimination; legal framework relatively progressive
   - But domestic violence endemic; conviction rates low; enforcement inconsistent
   - Land ownership patterns discriminatory; traditional law limits women's rights
   - Wage gaps substantial; advancement into leadership limited
   - Maternal healthcare access improved but reproductive health services incomplete

5. **Minority Rights: San Communities**
   - San people face historical discrimination; marginalization persistent
   - Land dispossession ongoing; economic opportunities limited
   - Educational access inadequate; healthcare and government services inadequate
   - High poverty rates; government resources directed to majority groups
   - Cultural rights limited; San languages not protected

## International Context

Namibia's relative stability attracts international investors and donors; this economic engagement mutes pressure on governance issues. Western countries maintain positive relationships; trade agreements signed without human rights conditions. Regional bodies (SADC) defer to Namibia's leadership; no enforcement of standards. China invests heavily in infrastructure; no governance conditions. South Africa maintains close ties; regional dynamics prioritize stability over democracy.

## Bottom Line

Namibia is post-colonial democracy in slow motion, with democratic foundations eroding beneath surface stability. SWAPO maintains power through electoral advantages and opposition marginalization. Press freedom exists but faces increasing pressure. LGBTQ+ individuals criminalized. Women's rights constitutionally protected but practically limited. San communities marginalized. Namibia shows that liberation movements struggle to transition from revolutionary rulers to democratic competitors willing to accept electoral defeat.`

const NAMIBIA_ISSUES = [
  'Political Competition and Opposition Marginalization',
  'Press Freedom: Threatened Amid Relative Openness',
  'LGBTQ+ Rights: Criminalization and Societal Hostility',
  'Women\'s Rights: Constitutional Protections, Weak Enforcement',
  'Minority Rights: San Communities'
]

// 130 - MADAGASCAR
const MADAGASCAR_SUMMARY = `# Madagascar: Political Instability and Rights Erosion

Madagascar's recent political history oscillates between democratic openness and authoritarian closures. Andry Rajoelina's return to power signals potential democratic backsliding: opposition parties face harassment; press freedom concerns emerging; institutional independence questioned. Madagascar's human rights landscape remains weak: women face significant violence with limited legal recourse; LGBTQ+ individuals criminalized; indigenous groups marginalized; political prisoners detained under vague charges. The 2023 elections, contested by opposition, raised legitimacy questions. Rajoelina's administration promises development but delivers increasing restrictions on dissent. Madagascar's tragedy is that geographic isolation and ecological uniqueness could translate into rights protection; instead, political instability perpetuates violations.

## Key Issues

1. **Electoral Integrity and Opposition Suppression**
   - 2023 elections disputed by opposition; international observers raised concerns about fraud, intimidation
   - Opposition politicians detained or harassment; procedural obstacles prevent fair competition
   - Electoral commission lacks independence; government influence evident
   - Opposition rallies face police obstruction; protests violently dispersed
   - Low voter confidence in electoral process; participation declining

2. **Press Freedom and Media Restrictions**
   - Private media operates but faces increasing government pressure; harassment of journalists documented
   - Radio stations broadcasting critical coverage shut down; broadcasting licenses revoked
   - State media remains government propaganda outlet; independent journalism limited
   - Journalists self-censor regarding sensitive topics; professional organizations weakened
   - Digital media expanding but government monitoring capabilities increasing

3. **Women's Rights: High Violence Rates and Legal Discrimination**
   - Domestic violence endemic; conviction rates low; enforcement inconsistent
   - Inheritance law discriminatory; property rights weakly protected
   - Early marriage remains common; child marriage laws weakly enforced
   - Healthcare access limited; maternal mortality elevated (643 per 100,000)
   - Workplace discrimination persistent; wage gaps substantial

4. **LGBTQ+ Rights: Criminalization and Invisibility**
   - Same-sex relations criminalized; criminal code penalties up to 5 years imprisonment
   - Enforcement sporadic but credible; arrests documented
   - Social stigma severe; families, communities, religious leaders hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International organizations advocating for LGBTQ+ rights face government indifference

5. **Ethnic Minorities and Indigenous Communities**
   - Indigenous groups marginalized; land dispossession ongoing; economic opportunities limited
   - Educational access inadequate; healthcare and government services insufficient
   - High poverty rates among minority communities
   - Government resources directed to majority ethnic groups
   - Cultural rights limited; minority languages unprotected

## International Context

Madagascar's geographic isolation limits international scrutiny; regional organizations (African Union, SADC) provide symbolic criticism without enforcement. France maintains diplomatic ties and economic interests; pressure on governance limited. International donors continue engagement; human rights conditioning weak. Chinese investment in mining and infrastructure proceeds without governance concerns. Humanitarian organizations operate under variable obstruction.

## Bottom Line

Madagascar's political volatility creates perpetual uncertainty about rights protections. Rajoelina's return signals potential democratic backsliding. Women face violence with minimal legal recourse. LGBTQ+ individuals criminalized. Minorities marginalized. Institutional independence questionable. Madagascar's isolation and ecological uniqueness haven't translated into rights protection; instead, political instability perpetuates violations.`

const MADAGASCAR_ISSUES = [
  'Electoral Integrity and Opposition Suppression',
  'Press Freedom and Media Restrictions',
  'Women\'s Rights: High Violence Rates and Legal Discrimination',
  'LGBTQ+ Rights: Criminalization and Invisibility',
  'Ethnic Minorities and Indigenous Communities'
]

// 131 - MALAWI
const MALAWI_SUMMARY = `# Malawi: Democratic Transition and Fragile Protections

Lazarus Chakwera's 2020 election victory represented democratic progress: court overturned fraudulent results; opposition candidate won through contested but credible process. Two years later, Chakwera's administration shows mixed results: some democratic advances (media freedom improving, civil society more active) but institutional corruption and economic crisis limiting rights realization. Women's rights improved constitutionally but enforcement weak; LGBTQ+ individuals criminalized; minorities marginalized; vulnerable populations suffering under structural economic policies. Malawi shows that democratic transition doesn't automatically equal rights protection: institutions must function, resources must exist, political will must persist.

## Key Issues

1. **Press Freedom: Improvement and Fragility**
   - Media landscape more open than under predecessor; private outlets operate independently
   - But government pressure on journalists continues; corruption investigations resisted
   - State media still used for propaganda; resource inequality advantages incumbent
   - Journalists self-censor regarding sensitive topics; professional organizations face pressure
   - Digital media expanding; government monitoring capabilities increasing

2. **Women's Rights: Constitutional Advances, Limited Enforcement**
   - Constitution prohibits discrimination; legal frameworks relatively progressive
   - But domestic violence endemic; conviction rates low; enforcement inconsistent
   - Inheritance law reformed but traditional practices persist; property rights weakly enforced
   - Early marriage remains issue; child marriage laws weakly enforced
   - Maternal healthcare access improving; reproductive rights still limited

3. **LGBTQ+ Rights: Criminalization and Harassment**
   - Same-sex relations criminalized; criminal code penalties up to 14 years imprisonment
   - Arrests documented; prosecutions occur; enforcement selective but credible
   - Social stigma severe; families, communities, law enforcement hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International human rights organizations face pressure; advocacy limited

4. **Economic Rights and Vulnerability**
   - Structural adjustment policies impact poorest populations; food insecurity rising
   - Healthcare and education access limited; user fees exclude vulnerable groups
   - Agricultural production disrupted by climate variability; rural poverty persistent
   - Labor rights weakly protected; child labor documented in agriculture
   - Informal sector workers lack protections; wage theft common

5. **Minority Rights and Marginalization**
   - Ethnic minorities face discrimination in employment, education, government
   - Indigenous groups (Chewa, Tumbuka, Yao, Lomwe, Sena, Tonga) hierarchically positioned
   - Language discrimination; minority languages unprotected in education
   - Land disputes favor majority groups; minority land rights disputed
   - Government resources directed to majority ethnic groups

## International Context

Malawi's democratic transition impressed donors; aid resumed after fraudulent elections reversed. But international attention waning; economic crisis consuming local and international focus. Regional bodies (SADC, African Union) provide symbolic support without enforcement. China invests in infrastructure (dams, ports) without governance conditions. IMF/World Bank programs condition aid on economic reforms, not rights protections. Humanitarian organizations operate under normal obstruction.

## Bottom Line

Malawi's democratic transition is real but fragile. Court's role in overturning fraud proved institutional independence is possible; but sustained protections uncertain. Women's rights improved constitutionally but limited in practice. LGBTQ+ individuals criminalized. Minorities marginalized. Economic crisis undermines rights realization. Malawi shows that democratic transition requires sustained commitment and resources; without both, protections erode.`

const MALAWI_ISSUES = [
  'Press Freedom: Improvement and Fragility',
  'Women\'s Rights: Constitutional Advances, Limited Enforcement',
  'LGBTQ+ Rights: Criminalization and Harassment',
  'Economic Rights and Vulnerability',
  'Minority Rights and Marginalization'
]

// 132 - SOUTH SUDAN
const SOUTH_SUDAN_SUMMARY = `# South Sudan: Post-Conflict Nightmare

South Sudan's independence promised liberation; instead, it delivered state collapse, civil war, and systematic human rights catastrophe. Salva Kiir's government, facing insurgencies, has responded with atrocities that rival jihadist violence: ethnic-targeted killings, sexual violence weaponized systematically, arbitrary detention and torture, displacement of millions. Journalists face arrest for documenting abuses; opposition parties operate underground; women raped with impunity; LGBTQ+ individuals criminalized and hunted; minorities scapegoated as enemy collaborators. The humanitarian crisis is staggering: millions internally displaced, millions more refugees in Uganda/Kenya, famine conditions spreading. South Sudan shows the catastrophic human cost when state institutions collapse and security forces prioritize regime survival over citizen protection.

## Key Issues

1. **Ethnic Cleansing and Conflict-Related Atrocities**
   - Government forces documented conducting massacres targeting ethnic groups (Dinka against Nuer, Shilluk, Anuak)
   - Sexual violence systematic; women and girls targeted for rape by all warring parties
   - Forced recruitment of children into military; child soldiers documented in tens of thousands
   - Mutilation of corpses; massacres during displacement; settlements destroyed
   - International Criminal Court investigation ongoing; Kiir and commanders evade accountability

2. **Press Freedom: Persecution of Journalists**
   - Journalists arrested for reporting government atrocities; charges vague ("destabilizing," "spreading false information")
   - Radio stations broadcasting critical coverage shut down; broadcasting licenses revoked
   - Foreign journalists expelled; international media access severely restricted
   - Self-censorship so severe that independent journalism nearly absent
   - Media institutions controlled by government or warring parties; editorial independence impossible

3. **Arbitrary Detention and Torture**
   - Security forces conduct mass arrests of perceived opponents; detention centers overflow
   - Torture allegations systematic; beatings, sexual violence, psychological torture documented
   - "Disappeared persons" cases rising; families unable to locate relatives
   - Detainees often held incommunicado; no access to legal representation
   - Forced confessions extracted through torture; detainees later "tried" based on coerced statements

4. **Women's Rights: Systematic Sexual Violence and Legal Discrimination**
   - Sexual violence weaponized by all warring parties; estimates suggest hundreds of thousands of rapes
   - Survivors lack medical, psychological, legal support; perpetrators rarely prosecuted
   - Forced marriages, forced recruitment documented
   - Inheritance law discriminatory; property rights weakly protected
   - Displacement camps lack services for women's reproductive health; maternal mortality catastrophic

5. **LGBTQ+ Rights and Minority Targeting**
   - Same-sex relations criminalized; penalties up to 10 years imprisonment
   - LGBTQ+ individuals hunted by security forces, armed groups, communities
   - Minorities scapegoated as enemy collaborators; Nuer, Shilluk, Anuak communities targeted
   - Ethnic cleansing patterns targeting minorities documented
   - No legal protections; discrimination normalized across all spheres

## International Context

International intervention limited by geopolitical complexity: Uganda militarily engaged; Kenya hosting refugees; neighboring countries destabilized. UN peacekeeping mission (UNMISS) ineffective; unable to prevent atrocities despite presence. ICC investigations ongoing but arrest warrants difficult to enforce. Western governments provide humanitarian aid but avoid military intervention. Regional bodies (AU, IGAD) mediation efforts repeatedly fail. Humanitarian access severely restricted; organizations unable to reach populations. Media attention insufficient; crisis overshadowed by other regional emergencies.

## Bottom Line

South Sudan is genocide in progress. Ethnic cleansing documented. Sexual violence weaponized. Journalists imprisoned. Opposition hunted. LGBTQ+ individuals criminalized. Minorities massacred. Tens of millions displaced or facing famine. The state apparatus exists primarily to perpetuate regime survival, not protect citizens. International community inadequate; humanitarian crisis consuming organizations. South Sudan shows the catastrophic human cost when post-conflict governance fails and security forces operate without accountability.`

const SOUTH_SUDAN_ISSUES = [
  'Ethnic Cleansing and Conflict-Related Atrocities',
  'Press Freedom: Persecution of Journalists',
  'Arbitrary Detention and Torture',
  'Women\'s Rights: Systematic Sexual Violence and Legal Discrimination',
  'LGBTQ+ Rights and Minority Targeting'
]

// 133 - ERITREA
const ERITREA_SUMMARY = `# Eritrea: Africa's North Korea

Isaias Afwerki has constructed Africa's most closed, repressive state. Eritrea is information-isolated; independent journalism non-existent; political opposition impossible; religious freedom severely restricted; press freedom absent; women's rights limited; LGBTQ+ individuals criminalized and hunted; mandatory military service (lasting indefinitely) traps citizens in state control. Eritrea's human rights landscape is so severe that tens of thousands flee annually, facing death in Sinai deserts or Libyan coasts attempting to escape. International access minimal; documentation limited; accountability absent. Afwerki has maintained absolute power for 30+ years through totalitarian control infrastructure that makes accountability impossible.

## Key Issues

1. **Press Freedom: Complete Absence**
   - No independent press exists; all media state-controlled propaganda outlets
   - Journalists critical of government imprisoned; no trials, indefinite detention
   - Radio, television, newspapers all government mouthpieces; coverage predetermined
   - Foreign journalists banned; international media access completely prohibited
   - Information isolation so severe citizens lack independent news sources
   - Digital repression: internet throttled, monitored; VPNs blocked; communication surveillance

2. **Mandatory Military Service and Forced Labor**
   - Military conscription compulsory; service duration indefinite (typically 18+ years)
   - Military service conditions harsh; food, medical care inadequate; abuse documented
   - Conscientious objection illegal; religious exemption denied
   - Deserters imprisoned; families of deserters faced pressure, punishment
   - "National Service" (combination military/civilian labor) additionally mandatory
   - Women subject to same military conscription; sexual violence by commanders documented

3. **Religious Freedom Restrictions**
   - Only four approved religions permitted (Eritrean Orthodox, Sunni Islam, Catholic, Evangelical)
   - Other faiths prohibited; adherents arrested, imprisoned, tortured
   - Jehovah's Witnesses face particular persecution; imprisoned indefinitely
   - Religious leaders imprisoned for independence; all religions state-controlled
   - Private worship restricted; religious gatherings monitored; clergy imprisoned for criticism

4. **Opposition and Political Participation**
   - No opposition parties permitted; one-party totalitarian state
   - No multi-party elections; leadership decided by Afwerki and inner circle
   - Political dissent criminalized; critics imprisoned indefinitely
   - No civil society space; human rights organizations banned
   - Youth dissent suppressed; universities controlled; student organizations monitored

5. **Women's Rights and LGBTQ+ Criminalization**
   - Women subject to mandatory military service; sexual violence by commanders documented
   - Inheritance law discriminatory; property rights limited
   - Domestic violence endemic; criminalization weak; enforcement absent
   - Same-sex relations criminalized; LGBTQ+ individuals hunted, imprisoned
   - No legal protections; employment, housing, healthcare discrimination severe
   - Family "honor" killings of LGBTQ+ individuals documented

## International Context

Eritrea's isolation enables rights violations without documentation or accountability. International human rights investigations blocked; UN fact-finding missions denied access. Western countries maintain minimal diplomatic relations; regional involvement limited. Ethiopia and Eritrea border tensions complicate external engagement. No credible international pressure; sanctions insufficient. Humanitarian organizations operate under severe restrictions; access minimal. Media attention minimal; crisis overshadowed. Eritrean diaspora documents abuses but international amplification limited.

## Bottom Line

Eritrea is totalitarian state stripped of democratic pretense. Afwerki controls all information, labor, military, religion, thought. Journalists imprisoned indefinitely. Military service indefinite. Religious freedom non-existent. Opposition impossible. Women raped. LGBTQ+ individuals hunted. Citizens flee, dying in deserts and seas. International community disengaged. Eritrea shows what happens when authoritarian power meets total state control without institutional checks or international accountability.`

const ERITREA_ISSUES = [
  'Press Freedom: Complete Absence',
  'Mandatory Military Service and Forced Labor',
  'Religious Freedom Restrictions',
  'Opposition and Political Participation',
  'Women\'s Rights and LGBTQ+ Criminalization'
]

// 134 - DJIBOUTI
const DJIBOUTI_SUMMARY = `# Djibouti: Strategic Port, Repressive State

Ismail Omar Guelleh has ruled Djibouti for 25+ years, maintaining stability through repression. Djibouti's strategic location (Bab el-Mandab strait, Red Sea access) makes it geopolitically valuable; France, U.S., China all maintain military bases. This strategic importance translates into international tolerance of human rights violations. Journalists face arrest for critical coverage; opposition parties marginalized; women's rights limited by legal discrimination; LGBTQ+ individuals criminalized; vulnerable populations suffering. Guelleh's government prioritizes regime stability over citizen protections. International military bases provide security guarantees that reduce pressure on governance. For Djiboutian citizens, this means indefinite authoritarian rule with no realistic prospect of democratic change.

## Key Issues

1. **Press Freedom and Journalist Persecution**
   - Journalists critical of government face arrest, harassment, self-censorship
   - Radio stations broadcasting critical coverage shut down; broadcasting licenses revoked
   - State media remains propaganda outlet; private outlets limited and pressured
   - Foreign journalists require government approval; international media access restricted
   - Digital repression: internet monitored, social media restricted during political tensions

2. **Political Opposition and Electoral Fraud**
   - Opposition parties marginalized; candidates prevented from running through procedural obstacles
   - Electoral commission stacked with regime loyalists; international observers barred
   - Opposition rallies face police obstruction; organizers arrested
   - Electoral results predetermined; opposition has no realistic path to power
   - Youth disengagement from politics; voting perceived as meaningless

3. **Labor Rights and Economic Vulnerability**
   - Labor unions suppressed; strikes banned; workers lack collective bargaining rights
   - Workplace safety standards poorly enforced; accidents and injuries common
   - Child labor documented; enforcement of age restrictions weak
   - Informal sector workers lack protections; wage theft common
   - Unemployment high, especially among youth; government employment opportunities limited

4. **Women's Rights: Legal Discrimination and Violence**
   - Inheritance law discriminatory; property rights limited
   - Domestic violence endemic; conviction rates low; enforcement inconsistent
   - Early marriage remains issue; child marriage laws weakly enforced
   - Workplace discrimination persistent; wage gaps substantial; advancement limited
   - Reproductive healthcare access limited; maternal healthcare services inadequate

5. **LGBTQ+ Rights: Criminalization and Societal Hostility**
   - Same-sex relations criminalized; criminal code penalties vary but imprisonment possible
   - Enforcement sporadic but credible; harassment by law enforcement documented
   - Social stigma severe; families, communities, religious leaders hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International organizations advocating for LGBTQ+ rights face pressure

## International Context

Djibouti's strategic location (French military base, U.S. military base, Chinese military base) makes it globally significant despite small population and limited resources. This strategic importance translates into international tolerance of governance issues. France maintains close ties despite human rights concerns; U.S. prioritizes counterterrorism cooperation; China values Red Sea access. IGAD and African Union provide symbolic criticism without enforcement. International pressure minimal; human rights concerns secondary to strategic interests.

## Bottom Line

Djibouti is strategically important but repressive. Guelleh maintains 25+ years of rule through suppression and international tolerance. Journalists imprisoned. Opposition marginalized. Women's rights limited. LGBTQ+ individuals criminalized. Labor rights absent. But Djibouti's strategic location ensures international military presence and economic support regardless of governance. For citizens, this means indefinite authoritarianism with no prospect of change.`

const DJIBOUTI_ISSUES = [
  'Press Freedom and Journalist Persecution',
  'Political Opposition and Electoral Fraud',
  'Labor Rights and Economic Vulnerability',
  'Women\'s Rights: Legal Discrimination and Violence',
  'LGBTQ+ Rights: Criminalization and Societal Hostility'
]

// 135 - SIERRA LEONE
const SIERRA_LEONE_SUMMARY = `# Sierra Leone: Post-Conflict Reconciliation and Fragile Protections

Julius Maada Bio's administration improved political space after predecessor's authoritarian consolidation. Civil society more active; media more open; opposition less repressed. But Sierra Leone's human rights landscape remains weak: gender-based violence endemic with minimal legal recourse; LGBTQ+ individuals criminalized; children face exploitation; vulnerable populations economically devastated. Truth and Reconciliation Commission addressed civil war atrocities but perpetrators mostly not prosecuted; victims lack reparations. Post-conflict governance is incomplete: institutions need strengthening, resources need allocation, political will needs persistence. Sierra Leone shows that post-conflict transitions require sustained commitment; without it, protections erode.

## Key Issues

1. **Press Freedom: Improving but Fragile**
   - Media landscape improved; private outlets operate more independently than before
   - But government pressure on critical journalists continues; harassment documented
   - State media still used for propaganda; resource inequality advantages incumbent
   - Journalists self-censor regarding sensitive topics; professional organizations face pressure
   - Digital media expanding; concerns about government monitoring emerging

2. **Gender-Based Violence and Women's Rights**
   - Sexual violence endemic; conviction rates abysmal; enforcement non-existent
   - Domestic violence widespread; legal protections insufficient; police response inadequate
   - Early marriage remains common; child marriage partially criminalized but enforcement weak
   - Inheritance law discriminatory; property rights weakly protected
   - Maternal healthcare access improving but reproductive rights limited

3. **Child Exploitation and Labor Rights**
   - Child labor documented in mining, agriculture, domestic service
   - Enforcement of age restrictions weak; perpetrators rarely prosecuted
   - Sexual exploitation of children documented; laws exist but enforcement absent
   - Child soldiers recruited during conflict; reintegration services inadequate
   - Education access limited for poor children; schooling interrupted by labor demands

4. **Truth and Reconciliation: Incomplete Justice**
   - Truth and Reconciliation Commission provided testimony but limited perpetrator prosecution
   - Most war crimes perpetrators remain unpunished; victims lack reparations
   - Perpetrators reintegrated into communities; tensions persist
   - International Criminal Court involvement ended; limited accountability mechanisms remain
   - Victims' psychological trauma unaddressed; services insufficient

5. **LGBTQ+ Rights: Criminalization and Invisibility**
   - Same-sex relations criminalized; criminal code penalties up to 15 years imprisonment
   - Enforcement rare but possible; harassment by law enforcement documented
   - Social stigma severe; families, communities, religious leaders hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International organizations advocating for LGBTQ+ rights face limited receptiveness

## International Context

Western donors supported Truth and Reconciliation process; international investment in post-conflict recovery ongoing. Regional bodies (ECOWAS) support Sierra Leone's democratic trajectory. China invests in mining and infrastructure without governance conditions. International pressure on human rights limited; economic recovery prioritized. Humanitarian organizations present; access generally permitted. Media attention insufficient; international focus elsewhere.

## Bottom Line

Sierra Leone's post-conflict trajectory shows progress but remains fragile. Civil society more active. Media more open. Opposition less repressed. But violence against women endemic with minimal justice. LGBTQ+ individuals criminalized. Child exploitation common. Truth and Reconciliation provided testimony but not justice. Sierra Leone shows that post-conflict transitions require sustained work; without it, old patterns resurface.`

const SIERRA_LEONE_ISSUES = [
  'Press Freedom: Improving but Fragile',
  'Gender-Based Violence and Women\'s Rights',
  'Child Exploitation and Labor Rights',
  'Truth and Reconciliation: Incomplete Justice',
  'LGBTQ+ Rights: Criminalization and Invisibility'
]

// 136 - LIBERIA
const LIBERIA_SUMMARY = `# Liberia: Democratic Progress and Persistent Inequality

Joseph Boakai's 2023 election victory delivered democratic change: George Weah (musician-turned-president) lost re-election bid; peaceful power transfer occurred. But Liberia's human rights landscape remains constrained by poverty and institutional weakness. Journalists operate with greater freedom than before but face harassment; women's rights improved constitutionally but enforcement weak; LGBTQ+ individuals criminalized; vulnerable populations economically devastated; child labor common. Liberia's post-civil-war recovery is incomplete: institutions need strengthening, resources inadequate, corruption persistent. Boakai's administration promises reform but must overcome institutional decay and limited resources. Liberia shows that democratic elections mean less without institutional capacity to protect rights.

## Key Issues

1. **Press Freedom: Expanding Space with Precautions**
   - Media landscape relatively open compared to regional neighbors
   - But journalists critical of government report harassment; intimidation documented
   - State media remains government mouthpiece; resource inequality advantages incumbent
   - Journalists self-censor regarding sensitive topics; professional organizations face pressure
   - Digital media expanding; government monitoring capabilities increasing

2. **Women's Rights: Constitutional Advances, Limited Implementation**
   - Constitution prohibits discrimination; legal frameworks relatively progressive
   - But domestic violence endemic; conviction rates low; enforcement inconsistent
   - Inheritance law reformed but traditional practices persist; property rights weakly enforced
   - Early marriage remains issue; child marriage laws exist but enforcement weak
   - Maternal healthcare access improving; reproductive rights still limited

3. **Child Labor and Exploitation**
   - Child labor documented in mining, agriculture, domestic service, sex work
   - Enforcement of age restrictions weak; perpetrators rarely prosecuted
   - Sexual exploitation of children common; laws exist but enforcement absent
   - Education access limited for poor children; schooling interrupted by labor demands
   - Post-conflict child soldiers reintegration services inadequate

4. **LGBTQ+ Rights: Criminalization and Societal Hostility**
   - Same-sex relations criminalized; criminal code penalties up to 1 year imprisonment
   - Enforcement rare but possible; harassment by law enforcement documented
   - Social stigma severe; families, communities, religious leaders hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International organizations advocating for LGBTQ+ rights face resistance

5. **Economic Rights and Poverty-Driven Violations**
   - Poverty affects majority of population; basic rights unattainable due to lack of resources
   - Healthcare access limited; maternal mortality high (661 per 100,000)
   - Education access limited; school fees exclude poor children
   - Labor rights weak; informal sector workers lack protections
   - Landlessness and property disputes common; judicial system inadequate

## International Context

Western donors support Boakai's administration; aid resumed after security concerns during Weah period. Regional bodies (ECOWAS) praised democratic transition; security concerns limited now. China invests in mining and infrastructure without governance conditions. International pressure on human rights present but secondary to economic recovery. Humanitarian organizations present; access generally permitted. Media attention limited; international focus elsewhere.

## Bottom Line

Liberia's democratic progress is real but limited by poverty and institutional weakness. Peaceful power transfer occurred. Opposition less repressed. Press freedom improved. But women face violence with limited justice. LGBTQ+ individuals criminalized. Children labor in mines and farms. Poverty-driven violations endemic. Liberia shows that democratic elections without institutional capacity and resources produce hollow freedoms.`

const LIBERIA_ISSUES = [
  'Press Freedom: Expanding Space with Precautions',
  'Women\'s Rights: Constitutional Advances, Limited Implementation',
  'Child Labor and Exploitation',
  'LGBTQ+ Rights: Criminalization and Societal Hostility',
  'Economic Rights and Poverty-Driven Violations'
]

// 137 - GUINEA
const GUINEA_SUMMARY = `# Guinea: Military Junta and Human Rights Collapse

Mamady Doumbouya's September 2021 military coup promised anti-corruption crusade; instead, it delivered accelerated human rights deterioration. Guinea's governance is authoritarianism stripped of constitutional pretense: opposition parties suppressed; journalists arrested for critical reporting; women's rights criminalized; LGBTQ+ individuals hunted; vulnerable populations abandoned. The junta initially enjoyed popular support (previous president Alpha Condé was deeply corrupt); this honeymoon has ended as promised elections indefinitely delayed and repression normalized. Doumbouya's administration continues militarizing governance, suppressing dissent, and blocking accountability. Guinea illustrates the danger of military interventions: initial legitimacy erodes as military rule becomes self-serving.

## Key Issues

1. **Press Freedom and Journalist Persecution**
   - Journalists arrested for reporting government abuses; charges vague ("destabilizing," "spreading false information")
   - Radio stations broadcasting critical coverage shut down; broadcasting licenses revoked
   - Foreign journalists face harassment, deportation; international media access restricted
   - Digital repression: internet throttled, social media monitored during political tensions
   - Self-censorship among remaining journalists; professional organizations weakened

2. **Opposition Suppression and Absence of Democratic Process**
   - Opposition parties banned or marginalized; no multi-party elections scheduled
   - Opposition leaders imprisoned or in exile; no legal pathways to political participation
   - Political rallies banned or violently dispersed; organizers arrested
   - Transitional government extends military rule indefinitely; promised elections repeatedly delayed
   - Youth political mobilization suppressed; student organizations monitored

3. **Arbitrary Detention and Torture**
   - Security forces conduct mass arrests of perceived opponents; torture allegations systematic
   - Detention centers operate with minimal oversight; conditions described as "inhumane"
   - Forced confessions extracted through torture; detainees prosecuted on coerced statements
   - "Disappeared persons" cases rising; families unable to locate relatives
   - Detainees held incommunicado; no access to legal representation

4. **Women's Rights and Gender-Based Violence**
   - Sexual violence endemic; conviction rates minimal; enforcement virtually absent
   - Domestic violence widespread; legal protections insufficient; police response inadequate
   - Early marriage common; child marriage laws exist but enforcement weak
   - Inheritance law discriminatory; property rights limited
   - Maternal healthcare access limited; maternal mortality elevated

5. **Ethnic Tensions and Minority Targeting**
   - Previous regime's Peulh dominance created ethnic resentment; post-coup backlash against minorities documented
   - Ethnic targeting in employment, military recruitment, political power-sharing
   - Minorities (Mandinka, Soussou, Kissi) marginalized; representation limited
   - Land disputes favoring majority groups; minority land rights disputed
   - Government resources directed to majority ethnic groups

## International Context

French military withdrawal (Guinea expelled France, joined "Alliance of Sahel States" with Mali, Burkina Faso, Niger) created vacuum filled by Russian mercenaries. Western governments frustrated by junta intransigence have limited leverage. Regional bodies (ECOWAS) expelled Guinea alongside Mali, Niger, Burkina Faso; regional cooperation collapsed. International investigations blocked; accountability mechanisms absent. Humanitarian agencies operate under constant obstruction.

## Bottom Line

Guinea under Doumbouya's junta represents authoritarianism without constitutional limit. Initial anti-corruption appeal exhausted; repression normalized. Journalists imprisoned. Opposition eliminated. Torture systematic. Women violated. Minorities targeted. Promised elections indefinitely delayed. Military rule self-perpetuating. Guinea shows that military takeovers claiming temporary power entrench themselves indefinitely while destroying institutions and rights.`

const GUINEA_ISSUES = [
  'Press Freedom and Journalist Persecution',
  'Opposition Suppression and Absence of Democratic Process',
  'Arbitrary Detention and Torture',
  'Women\'s Rights and Gender-Based Violence',
  'Ethnic Tensions and Minority Targeting'
]

// 138 - IVORY COAST
const IVORY_COAST_SUMMARY = `# Ivory Coast: Relative Stability, Persistent Rights Gaps

Alassane Ouattara's governance has stabilized Ivory Coast politically and economically after 2010-11 civil war; but relative stability masks ongoing human rights concerns. Press freedom improved but remains constrained; opposition tolerated but marginalized; women's rights improved constitutionally but enforcement weak; LGBTQ+ individuals criminalized; minorities face economic discrimination; vulnerable populations excluded. Ivory Coast's post-conflict recovery is unequal: cocoa wealth concentrated among elites; farmer poverty persistent despite international prices; youth unemployment high. The political settlement that ended civil war favors Ouattara and allies; opposition fragmented; electoral playing field unequal. Ivory Coast shows that post-conflict stability can coexist with rights violations.

## Key Issues

1. **Press Freedom: Constrained Openness**
   - Media landscape more open than during civil war; private outlets operate
   - But government pressure on critical journalists continues; harassment documented
   - State media remains propaganda outlet; resource inequality advantages incumbent
   - Journalists self-censor regarding sensitive topics; professional organizations face pressure
   - Digital media expanding; government monitoring capabilities increasing

2. **Political Opposition and Electoral Fairness**
   - Opposition parties permitted but marginalized; electoral advantages favor incumbent
   - Opposition candidates face procedural obstacles; organizers sometimes arrested
   - Opposition rallies permitted under police presence; intimidation documented
   - Electoral commission stacked with government loyalists; international observers present but limited influence
   - Electoral outcomes competitive but incumbent advantages evident

3. **Women's Rights: Improved Legally, Limited in Practice**
   - Constitution prohibits discrimination; legal frameworks relatively progressive
   - But domestic violence endemic; conviction rates low; enforcement inconsistent
   - Inheritance law reformed but traditional practices persist; property rights weakly enforced
   - Early marriage remains issue; child marriage laws exist but enforcement weak
   - Maternal healthcare access improving; reproductive rights limited

4. **LGBTQ+ Rights: Criminalization and Invisibility**
   - Same-sex relations criminalized; criminal code penalties up to 3 years imprisonment
   - Enforcement rare but possible; harassment by law enforcement documented
   - Social stigma severe; families, communities, religious leaders hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International organizations advocating for LGBTQ+ rights face limited receptiveness

5. **Cocoa Industry and Labor Rights**
   - Child labor documented in cocoa farming; age restrictions poorly enforced
   - Adult farmers experience wage theft; labor organizing suppressed
   - Working conditions dangerous; safety standards minimal
   - Child labor supply chains documented linking to international cocoa corporations
   - Farmer debt bondage common; land dispossession documented

## International Context

Western governments support Ouattara's stability; France maintains military base and close ties. Regional bodies (ECOWAS, African Union) view Ivory Coast as relatively stable; praise for post-conflict recovery. Chinese investment in cocoa infrastructure ongoing without governance conditions. Chocolate corporations source cocoa from Ivory Coast; labor and child labor concerns raised but corporate accountability limited. International pressure on human rights present but secondary to political-economic stability.

## Bottom Line

Ivory Coast's relative stability obscures ongoing rights violations. Opposition tolerated but marginalized. Press freedom constrained. Women's rights improved legally but limited in practice. LGBTQ+ individuals criminalized. Child labor endemic in cocoa. Ivory Coast shows that post-conflict political settlements can produce relative stability while perpetuating economic inequality and rights gaps.`

const IVORY_COAST_ISSUES = [
  'Press Freedom: Constrained Openness',
  'Political Opposition and Electoral Fairness',
  'Women\'s Rights: Improved Legally, Limited in Practice',
  'LGBTQ+ Rights: Criminalization and Invisibility',
  'Cocoa Industry and Labor Rights'
]

// 139 - TOGO
const TOGO_SUMMARY = `# Togo: Dynastic Authoritarianism and Suppressed Dissent

Faure Gnassingbé inherited power from his father in 2005; two decades later, Togo's dynastic rule continues unchanged. Elections occur but lack credibility; opposition suppressed through harassment and arrest; press freedom severely constrained; women's rights limited by legal discrimination; LGBTQ+ individuals criminalized; vulnerable populations economically devastated. The Gnassingbé family consolidated power over generations; institutional checks have weakened; succession appears predetermined (eldest son will inherit). Togo illustrates how authoritarian families become entrenched, how institutional decay enables indefinite rule, how international tolerance enables continued violations.

## Key Issues

1. **Press Freedom and Media Suppression**
   - Independent journalists face arrest for critical reporting; charges vague but credible
   - Radio stations broadcasting critical coverage shut down; broadcasting licenses revoked
   - State media remains propaganda outlet; coverage heavily biased toward incumbent
   - Foreign journalists face harassment; international media access restricted
   - Digital repression: internet throttled, social media monitored during political tensions

2. **Electoral Fraud and Opposition Suppression**
   - Elections occur but results predetermined; opposition prevented from competing fairly
   - Opposition candidates face procedural obstacles or arrest; disqualifications arbitrary
   - Electoral commission stacked with regime loyalists; international observers limited influence
   - Opposition rallies violently dispersed; organizers arrested
   - Electoral playing field fundamentally unequal; opposition has no realistic path to power

3. **Arbitrary Detention and Torture**
   - Security forces conduct arrests of perceived opponents; torture allegations systematic
   - Detention centers operate with minimal oversight; conditions poor
   - Forced confessions extracted; detainees prosecuted on coerced statements
   - Incommunicado detention common; access to legal representation limited
   - Post-release, detainees report lasting physical, psychological trauma

4. **Women's Rights: Legal Discrimination and Violence**
   - Inheritance law discriminatory; property rights limited; land ownership restricted
   - Domestic violence endemic; conviction rates low; enforcement inconsistent
   - Early marriage common; child marriage laws exist but enforcement weak
   - Workplace discrimination persistent; wage gaps substantial
   - Reproductive healthcare access limited; maternal mortality elevated

5. **LGBTQ+ Rights: Criminalization and Persecution**
   - Same-sex relations criminalized; criminal code penalties up to 5 years imprisonment
   - Enforcement occurs; arrests documented; prosecutions proceed
   - Social stigma severe; families, communities, religious leaders, government hostile
   - No legal protections; employment, housing, healthcare discrimination severe
   - International organizations advocating for LGBTQ+ rights face government pressure

## International Context

France maintains diplomatic ties and military cooperation despite governance concerns; strategic interests prioritized over rights. Regional bodies (ECOWAS, African Union) provide symbolic criticism without enforcement. China invests in infrastructure without governance conditions. International pressure on human rights limited; stability prioritized. Humanitarian organizations present; access generally permitted but constrained. Media attention limited; international focus elsewhere.

## Bottom Line

Togo under the Gnassingbés is dynastic authoritarianism. Elections meaningless. Opposition suppressed. Press freedom absent. Women's rights limited. LGBTQ+ individuals persecuted. Torture normalized. International community tolerates indefinite rule. Togo shows how authoritarian families entrench themselves across generations when institutions lack independence and international pressure remains absent.`

const TOGO_ISSUES = [
  'Press Freedom and Media Suppression',
  'Electoral Fraud and Opposition Suppression',
  'Arbitrary Detention and Torture',
  'Women\'s Rights: Legal Discrimination and Violence',
  'LGBTQ+ Rights: Criminalization and Persecution'
]

// 140 - BENIN
const BENIN_SUMMARY = `# Benin: Economic Success, Democratic Backsliding

Patrice Talon transformed Benin's economy (7.5% growth) while systematically dismantling democratic institutions. This is the uncomfortable truth: economic miracles can coexist with political repression. Opposition banned (2019 electoral reforms raised candidacy requirements), journalists arrested for "spreading false information," civil society organizations harassed. Benin's success demonstrates authoritarian efficiency—infrastructure modernized, fiscal discipline enforced, corruption addressed—but at the cost of political freedom. Women's rights improved constitutionally but enforcement weak; LGBTQ+ individuals criminalized; vulnerable populations experiencing poverty despite growth. Benin's April 2026 transition (Talon stepping down) will test whether "managed democracy" becomes permanent. Finance minister Romuald Wadagni (anointed successor) will likely continue Talon's model: development without democracy.

## Key Issues

1. **Opposition Exclusion and Electoral Manipulation**
   - Opposition parties effectively banned since 2019 reforms; candidacy requirements bar most candidates
   - 2021 legislative elections permitted only two parties (both pro-government)
   - Opposition excluded from formal politics increasingly considers extra-institutional resistance
   - No credible elections scheduled; April 2026 transition predetermined
   - Wadagni will continue Talon's system; opposition faces continued marginalization

2. **Press Freedom and Journalist Persecution**
   - Independent journalists face arrests for reporting government abuses; charges vague
   - Radio stations broadcasting critical coverage shut down; broadcasting licenses revoked
   - Foreign journalists require government approval; international media access restricted
   - Digital repression: internet throttled during protests; social media briefly blocked
   - Self-censorship among remaining journalists; professional organizations intimidated

3. **Civil Society Suppression**
   - Civil society organizations report arbitrary detentions of activists
   - Harassment of organizations critical of government; some operate underground
   - Youth protests violently suppressed; student organizers arrested
   - No independent election commission; no genuine constitutional court oversight
   - Labor unions suppressed; strikes banned

4. **Women's Rights: Improved Legally, Limited in Practice**
   - Constitution prohibits discrimination; legal frameworks relatively progressive
   - But domestic violence endemic; conviction rates low; enforcement inconsistent
   - Inheritance law reformed but traditional practices persist; property rights weakly enforced
   - Early marriage remaining issue; child marriage laws exist but enforcement weak
   - Maternal healthcare access improving; reproductive rights limited

5. **LGBTQ+ Rights: Criminalization and Invisibility**
   - Same-sex relations criminalized; criminal code penalties up to 3 years imprisonment
   - Enforcement sporadic but credible; arrests documented
   - Social stigma severe; families, communities, religious leaders hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International organizations advocating for LGBTQ+ rights face government obstruction

## International Context

France and World Bank celebrate Benin's economic reforms while ignoring democratic erosion. U.S. maintains military cooperation (Benin hosts regional counterterrorism training); security partnerships prioritized. Qatar praised Benin's "institutional modernization" (November 2025) in bilateral talks. Within ECOWAS, Benin positions itself as "responsible" member—fiscally disciplined, diplomatically aligned—contrasting with Mali, Niger, Burkina Faso's military juntas. International donors face dilemma: reward economic success or punish democratic backsliding? Pattern indicates reward.

## Bottom Line

Benin proves economic miracles don't require democracy. Talon delivered growth while crushing opposition, silencing press, and strangling civil society. Women's rights improved on paper. LGBTQ+ individuals criminalized. Opposition excluded. Democratic space eliminated. Wadagni will continue the model; April 2026 "transition" ensures continuity. Benin shows that for international investors and donors, 7.5% growth justifies political repression.`

const BENIN_ISSUES = [
  'Opposition Exclusion and Electoral Manipulation',
  'Press Freedom and Journalist Persecution',
  'Civil Society Suppression',
  'Women\'s Rights: Improved Legally, Limited in Practice',
  'LGBTQ+ Rights: Criminalization and Invisibility'
]

// 141 - GAMBIA
const GAMBIA_SUMMARY = `# Gambia: Democratic Transition and Fragile Protections

Adama Barrow's 2016 election victory ended Yahya Jammeh's 22-year dictatorship; promised democratic reforms remain partially realized. Civil society and press more open than before; opposition less repressed. But rights protection remains limited: women face structural discrimination and violence; LGBTQ+ individuals criminalized; vulnerable populations economically devastated; institutional independence incomplete. Barrow's administration promises reconciliation with Jammeh's past, but accountability mechanisms weak. Truth and Reconciliation Commission process limited. Gambia illustrates the challenge of post-authoritarian transitions: initial euphoria fades as institutional weaknesses emerge, promised reforms stall, and entrenched interests resist change.

## Key Issues

1. **Press Freedom: Improving but Fragile**
   - Media landscape significantly improved after Jammeh's repression; private outlets operate
   - But government pressure on journalists continues; harassment documented
   - State media remains propaganda outlet; resource inequality advantages incumbent
   - Journalists self-censor regarding sensitive topics; professional organizations face pressure
   - Digital media expanding; government monitoring capabilities increasing

2. **Truth and Accountability for Past Abuses**
   - Truth and Reconciliation Commission (TREC) addressed Jammeh's atrocities but limited prosecutions
   - Most perpetrators remain unpunished; Jammeh evaded prosecution (living in exile)
   - Victims lack reparations; psychological trauma unaddressed
   - International Criminal Court involvement limited; accountability mechanisms weak
   - Tensions persist regarding justice versus reconciliation

3. **Women's Rights: Structural Discrimination and Violence**
   - Inheritance law discriminatory; property rights limited
   - Domestic violence endemic; conviction rates low; enforcement inconsistent
   - Early marriage common; child marriage laws exist but enforcement weak
   - Workplace discrimination persistent; wage gaps substantial
   - Reproductive healthcare access limited; maternal health concerns significant

4. **LGBTQ+ Rights: Criminalization and Societal Hostility**
   - Same-sex relations criminalized; criminal code penalties up to 14 years imprisonment
   - Enforcement rare but possible; harassment by law enforcement documented
   - Social stigma severe; families, communities, religious leaders hostile
   - No legal protections; employment, housing, healthcare discrimination normalized
   - International organizations advocating for LGBTQ+ rights face limited receptiveness

5. **Political Opposition and Electoral Fairness**
   - Opposition parties permitted; Barrow faces electoral competition in 2026
   - But government advantages evident; electoral commission favors incumbent
   - Opposition rallies permitted but under police presence; intimidation documented
   - Campaign finance favors ruling party; media coverage biased
   - Electoral playing field unequal but not entirely controlled

## International Context

Western donors supported democratic transition; international investment in post-dictatorship recovery ongoing. Regional bodies (ECOWAS) support Gambia's democratic trajectory. France maintains diplomatic ties and military cooperation. International pressure on human rights present but secondary to democratic progress celebration. Humanitarian organizations present; access generally permitted. Media attention limited; international focus elsewhere.

## Bottom Line

Gambia's post-authoritarian transition is real but fragile. Jammeh's dictatorship ended. Press freedom improved. Opposition less repressed. But women face structural inequality and violence. LGBTQ+ individuals criminalized. Truth and accountability incomplete. Jammeh living freely in exile. Gambia shows that post-authoritarian transitions require sustained work; without it, partial reform becomes permanent settlement.`

const GAMBIA_ISSUES = [
  'Press Freedom: Improving but Fragile',
  'Truth and Accountability for Past Abuses',
  'Women\'s Rights: Structural Discrimination and Violence',
  'LGBTQ+ Rights: Criminalization and Societal Hostility',
  'Political Opposition and Electoral Fairness'
]

// 142 - MAURITANIA
const MAURITANIA_SUMMARY = `# Mauritania: Military Rule and Institutional Weakness

Mohamed Ould Ghazouani's government maintains military dominance while permitting limited democratic space. Elections occur but military influence pervasive; opposition parties permitted but marginalized; press freedom improved after predecessor but remains constrained; women's rights limited by legal discrimination and cultural practices; LGBTQ+ individuals criminalized; minorities face discrimination; vulnerable populations excluded. Mauritania's political settlement balances military interests with civilian participation; this balance could collapse if military perceives threats. Women's rights particularly concerning: child marriage endemic despite legal prohibition, inheritance laws discriminatory, domestic violence prevalent. Mauritania shows how military-dominated states can create appearance of democracy while maintaining essential control.

## Key Issues

1. **Military Influence and Constrained Civilian Authority**
   - Military dominates security apparatus; civilian authority limited
   - Military officers hold key government positions; power-sharing arrangements fragile
   - Defense spending prioritized despite development needs
   - Military-linked businesses operating with government contracts; corruption evident
   - Risk of military coup if civilian government perceived as threatening military interests

2. **Press Freedom and Journalist Harassment**
   - Media landscape slightly more open than under previous military government
   - But journalists critical of government report harassment; arrests occur
   - State media remains propaganda outlet; private outlets limited and pressured
   - Foreign journalists require government approval; international media access restricted
   - Digital repression: internet monitored, social media restricted during political tensions

3. **Women's Rights: Child Marriage and Legal Discrimination**
   - Child marriage endemic despite legal prohibition; girls married before 18 commonly
   - Inheritance law discriminatory; property rights limited
   - Domestic violence widespread; legal protections insufficient; prosecution rare
   - Workplace discrimination persistent; wage gaps substantial
   - Reproductive healthcare access limited; maternal mortality elevated

4. **Minority Rights and Ethnic Discrimination**
   - Ethnic tensions between Arabs and sub-Saharan migrants documented
   - Discrimination against Black Mauritanians in employment, education, government
   - Slavery legacy still present; former slaves face ongoing discrimination
   - Minority language groups limited representation in government, education
   - Government resources directed to Arab/Berber majority groups

5. **LGBTQ+ Rights: Criminalization and Severe Social Hostility**
   - Same-sex relations criminalized; criminal code penalties up to 3 years imprisonment
   - Enforcement occurs; arrests documented; prosecutions proceed
   - Social stigma severe; families, communities, religious leaders, government all hostile
   - No legal protections; employment, housing, healthcare discrimination severe
   - International organizations advocating for LGBTQ+ rights face extreme pressure

## International Context

Western countries maintain diplomatic relations and development aid despite governance concerns. France provides military support; strategic interests prioritized over rights. Regional bodies (Arab League, ECOWAS associate) provide limited pressure. China invests in mining and infrastructure without governance conditions. International pressure on human rights present but limited; stability prioritized. Humanitarian organizations present; access generally permitted. Media attention limited; international focus elsewhere.

## Bottom Line

Mauritania is military-constrained civilian rule. Elections permitted but military influence pervasive. Opposition marginalized. Press freedom limited. Women's rights severely constrained by child marriage and legal discrimination. LGBTQ+ individuals criminalized and hunted. Minorities face ethnic discrimination. Mauritania shows that military-dominated states can create appearance of democracy while maintaining essential control.`

const MAURITANIA_ISSUES = [
  'Military Influence and Constrained Civilian Authority',
  'Press Freedom and Journalist Harassment',
  'Women\'s Rights: Child Marriage and Legal Discrimination',
  'Minority Rights and Ethnic Discrimination',
  'LGBTQ+ Rights: Criminalization and Severe Social Hostility'
]

// 143 - CONGO-BRAZZAVILLE
const CONGO_SUMMARY = `# Congo-Brazzaville: Oil Wealth, Democratic Deficit

Denis Sassou Nguesso has ruled Congo-Brazzaville for 35+ years, maintaining power through repression, personality cult, and oil wealth. Elections occur but results predetermined; opposition suppressed through arrest and harassment; press freedom severely constrained; women's rights limited; LGBTQ+ individuals criminalized; minorities (Bakongo, other southern groups) marginalized; corruption endemic; oil wealth concentrated among regime elites. Sassou's governance model: personal rule justified by stability, opposition eliminated, institutions hollowed, resources stolen. Congo-Brazzaville's oil revenues could fund development; instead, kleptocracy enriches regime. Civil society operates in shrinking space. International community accommodates Sassou because oil matters more than democracy. Congo-Brazzaville shows how resource wealth enables indefinite authoritarian rule.

## Key Issues

1. **Electoral Fraud and Opposition Suppression**
   - Elections occur but results predetermined; opposition prevented from competing fairly
   - Opposition candidates face arrest or procedural obstacles; disqualifications arbitrary
   - Electoral commission stacked with regime loyalists; international observers present but limited influence
   - Opposition rallies violently dispersed; organizers arrested
   - Electoral playing field fundamentally unequal; opposition has no realistic path to power

2. **Press Freedom and Media Repression**
   - Independent journalists face arrest for critical reporting; charges vague but credible
   - Radio stations broadcasting critical coverage shut down; broadcasting licenses revoked
   - State media remains propaganda outlet; coverage heavily biased toward Sassou
   - Foreign journalists face harassment; international media access restricted
   - Digital repression: internet throttled, social media monitored during political tensions

3. **Arbitrary Detention and Torture**
   - Security forces conduct arrests of perceived opponents; torture allegations systematic
   - Detention centers operate with minimal oversight; conditions poor
   - Forced confessions extracted; detainees prosecuted on coerced statements
   - Incommunicado detention common; access to legal representation limited
   - Post-release, detainees report lasting physical, psychological trauma

4. **Women's Rights: Violence and Legal Discrimination**
   - Domestic violence endemic; conviction rates minimal; enforcement virtually absent
   - Inheritance law discriminatory; property rights limited
   - Early marriage common; child marriage laws exist but enforcement weak
   - Workplace discrimination persistent; wage gaps substantial
   - Reproductive healthcare access limited; maternal mortality elevated

5. **Corruption and Kleptocratic Rule**
   - Oil wealth stolen by regime elites; public services underfunded despite revenues
   - Government contracts favor connected businesses; bidding processes corrupted
   - Money laundering through state institutions; assets hidden offshore
   - Sassou and family accumulate wealth while population impoverished
   - International transparency initiatives ignored; financial secrecy maintained

## International Context

France maintains military base (Brazzaville) and close diplomatic ties despite governance concerns; strategic interests prioritized. U.S. provides limited engagement; focus elsewhere in Africa. China invests heavily in oil and infrastructure projects without governance conditions. Regional bodies (CEMAC, African Union) provide symbolic criticism without enforcement. International investigations blocked; accountability mechanisms absent. Humanitarian agencies operate under obstruction; access limited.

## Bottom Line

Congo-Brazzaville is kleptocratic authoritarianism. Sassou's 35+ years rule rests on repression, personality cult, oil theft. Elections meaningless. Opposition suppressed. Press freedom absent. Women's rights limited. Minorities marginalized. Oil wealth stolen. International community tolerates indefinite rule because oil matters. Congo-Brazzaville shows how resource wealth enables authoritarian longevity without accountability.`

const CONGO_ISSUES = [
  'Electoral Fraud and Opposition Suppression',
  'Press Freedom and Media Repression',
  'Arbitrary Detention and Torture',
  'Women\'s Rights: Violence and Legal Discrimination',
  'Corruption and Kleptocratic Rule'
]

// Define coordinates for all countries
const COUNTRY_COORDINATES: { [key: string]: { lat: number; lng: number } } = {
  'Cameroon': { lat: 7.369722, lng: 12.354722 },
  'Zambia': { lat: -13.133897, lng: 27.849332 },
  'Mali': { lat: 17.570692, lng: -3.996166 },
  'Niger': { lat: 17.607789, lng: 8.675277 },
  'Chad': { lat: 15.454166, lng: 18.732207 },
  'Burkina Faso': { lat: 12.238333, lng: -1.561593 },
  'Rwanda': { lat: -1.949536, lng: 29.873888 },
  'Botswana': { lat: -22.328474, lng: 24.684866 },
  'Namibia': { lat: -22.95592, lng: 18.49107 },
  'Madagascar': { lat: -18.733696, lng: 46.869107 },
  'Malawi': { lat: -13.254308, lng: 34.301525 },
  'South Sudan': { lat: 6.876991, lng: 31.306978 },
  'Eritrea': { lat: 15.179384, lng: 39.782334 },
  'Djibouti': { lat: 11.855889, lng: 42.590275 },
  'Sierra Leone': { lat: 8.460555, lng: -11.779889 },
  'Liberia': { lat: 6.428055, lng: -9.429499 },
  'Guinea': { lat: 9.945587, lng: -9.696645 },
  'Ivory Coast': { lat: 7.540553, lng: -5.547023 },
  'Togo': { lat: 6.104965, lng: 0.824782 },
  'Benin': { lat: 9.30769, lng: 2.315834 },
  'Gambia': { lat: 13.193887, lng: -15.500412 },
  'Mauritania': { lat: 21.007902, lng: -10.9408 },
  'Congo-Brazzaville': { lat: -4.038333, lng: 21.758333 }
}

async function generateSummaries() {
  console.log('Generating Human Rights summaries for countries 121-143...\n')

  const summaries = [
    { name: 'Cameroon', summary: CAMEROON_SUMMARY, issues: CAMEROON_ISSUES },
    { name: 'Zambia', summary: ZAMBIA_SUMMARY, issues: ZAMBIA_ISSUES },
    { name: 'Mali', summary: MALI_SUMMARY, issues: MALI_ISSUES },
    { name: 'Niger', summary: NIGER_SUMMARY, issues: NIGER_ISSUES },
    { name: 'Chad', summary: CHAD_SUMMARY, issues: CHAD_ISSUES },
    { name: 'Burkina Faso', summary: BURKINA_SUMMARY, issues: BURKINA_ISSUES },
    { name: 'Rwanda', summary: RWANDA_SUMMARY, issues: RWANDA_ISSUES },
    { name: 'Botswana', summary: BOTSWANA_SUMMARY, issues: BOTSWANA_ISSUES },
    { name: 'Namibia', summary: NAMIBIA_SUMMARY, issues: NAMIBIA_ISSUES },
    { name: 'Madagascar', summary: MADAGASCAR_SUMMARY, issues: MADAGASCAR_ISSUES },
    { name: 'Malawi', summary: MALAWI_SUMMARY, issues: MALAWI_ISSUES },
    { name: 'South Sudan', summary: SOUTH_SUDAN_SUMMARY, issues: SOUTH_SUDAN_ISSUES },
    { name: 'Eritrea', summary: ERITREA_SUMMARY, issues: ERITREA_ISSUES },
    { name: 'Djibouti', summary: DJIBOUTI_SUMMARY, issues: DJIBOUTI_ISSUES },
    { name: 'Sierra Leone', summary: SIERRA_LEONE_SUMMARY, issues: SIERRA_LEONE_ISSUES },
    { name: 'Liberia', summary: LIBERIA_SUMMARY, issues: LIBERIA_ISSUES },
    { name: 'Guinea', summary: GUINEA_SUMMARY, issues: GUINEA_ISSUES },
    { name: 'Ivory Coast', summary: IVORY_COAST_SUMMARY, issues: IVORY_COAST_ISSUES },
    { name: 'Togo', summary: TOGO_SUMMARY, issues: TOGO_ISSUES },
    { name: 'Benin', summary: BENIN_SUMMARY, issues: BENIN_ISSUES },
    { name: 'Gambia', summary: GAMBIA_SUMMARY, issues: GAMBIA_ISSUES },
    { name: 'Mauritania', summary: MAURITANIA_SUMMARY, issues: MAURITANIA_ISSUES },
    { name: 'Congo-Brazzaville', summary: CONGO_SUMMARY, issues: CONGO_ISSUES }
  ]

  try {
    for (const country of summaries) {
      const coords = COUNTRY_COORDINATES[country.name]

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'humanrights'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: coords.lat,
          lng: coords.lng,
          category: 'humanrights',
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })
      console.log(`✅ ${country.name} human rights summary saved`)
    }

    console.log('\n✅ All 23 human rights summaries (countries 121-143) generated and saved to database!')

  } catch (error) {
    console.error('Error generating summaries:', error)
    throw error
  }
}

generateSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
